'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/dados', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      router.push('/sucesso')
    } else {
      setLoading(false)
      alert('Erro ao enviar os dados.')
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      {/* Tela escura com animação */}
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-white text-lg">Carregando...</p>
        </div>
      )}

      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-center">
        <Image
          className="dark"
          src="/hugols.png"
          alt="Next.js logo"
          width={90}
          height={38}
          priority
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full max-w-xs">
          <label>Nome</label>
          <input
            maxLength={24}
            className="white w-full p-2 border rounded"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />

          <label>Email</label>
          <input
            type="email"
            className="white w-full p-2 border rounded"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            className="white w-full p-2 border rounded"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            required
          />

          <button
            type="submit"
            id="send"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            <Image
              className="dark"
              src="/file.svg"
              alt="Ícone"
              width={20}
              height={20}
            />
            Enviar Formulário
          </button>
        </form>
      </main>
    </div>
  )
}