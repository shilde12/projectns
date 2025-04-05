'use client'
import { useRouter } from 'next/navigation'

export default function Sucesso() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black gap-6">
      <h1 className="text-4xl font-bold">DADOS ENVIADOS!</h1>

      <button
        onClick={() => router.push('/')}
        className="px-6 py-3 bg-blue-500 cursor-pointer text-white rounded-full hover:bg-blue-700 transition-colors"
      >
        IR À PÁGINA INICIAL
      </button>
    </div>
  )
}