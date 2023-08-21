import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const { content, date } = await req.json()

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!content || !date) {
      return new NextResponse('Bad Request', { status: 400 })
    }

    // await prisma.notes.upsert({
    //   where: {
    //     createdAt: {
    //       gte: new Date('2020-01-01'),
    //       lt: new Date('2020-01-02'),
    //     },
    //     userId,
    //   },
    //   update: {
    //     content,
    //   },
    //   create: {
    //     content,
    //     createdAt: date,
    //     userId,
    //   },
    // })

    // const upsertUser = await prisma.user.upsert({
    //     where: {
    //       email: 'viola@prisma.io',
    //     },
    //     update: {
    //       name: 'Viola the Magnificent',
    //     },
    //     create: {
    //       email: 'viola@prisma.io',
    //       name: 'Viola the Magnificent',
    //     },
    //   })
  } catch (e) {
    console.error('[NOTES_POST]', e)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
