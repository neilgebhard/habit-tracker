'use server'

import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const formSchema = z.object({
  content: z.string().min(3),
})

export async function onSubmit(values: z.infer<typeof formSchema>) {
  const { userId } = auth()

  formSchema.parse(values)

  const note = await prisma.note.create({
    data: {
      ...values,
      userId: userId as string,
    },
  })

  console.log(note)

  revalidatePath('/app')
}
