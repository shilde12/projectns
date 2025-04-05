// src/app/api/dados/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const dados = await prisma.userData.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(dados)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, password } = body

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 })
  }

  const novoDado = await prisma.userData.create({
    data: { name, email, password },
  })

  return NextResponse.json(novoDado, { status: 201 })
}