'use client'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useRouter } from 'next/navigation'

type Dado = {
  id: number
  name: string
  email: string
  password: string
  createdAt: string
}

export default function PainelContent() {
  const [dados, setDados] = useState<Dado[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch('/api/dados')
      .then((res) => res.json())
      .then((data) => setDados(data))
  }, [])

  return (
    <div className="min-h-screen p-8 sm:p-20 flex flex-col items-center gap-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-semibold mb-4">Painel de Dados</h1>
      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left text-black">
              <th className="p-3 border border-gray-300">Nome</th>
              <th className="p-3 border border-gray-300">Email cadastrado</th>
              <th className="p-3 border border-gray-300">Senha cadastrada</th>
              <th className="p-3 border border-gray-300">Data</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item) => (
              <tr
                key={item.id}
                className="text-white hover:filter hover:brightness-40 transition-all"
              >
                <td className="p-3 border border-gray-300">{item.name}</td>
                <td className="p-3 border border-gray-300">{item.email}</td>
                <td className="p-3 border border-gray-300">{item.password}</td>
                <td className="p-3 border border-gray-300">
                  {format(new Date(item.createdAt), 'dd/MM/yyyy HH:mm', {
                    locale: ptBR,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => router.push('/')}
        className="px-6 py-3 bg-transparent cursor-pointer text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-200"
      >
        VOLTAR À PÁGINA INICIAL
      </button>
    </div>
  )
}