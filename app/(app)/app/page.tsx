import Container from '@/components/container'
import Calendar from '@/components/calendar'
import { prisma } from '@/lib/db'
import Notes from '@/components/notes'

const Page = async () => {
  const date = new Date()

  const startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  )

  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + 1
  )

  const note = await prisma.note.findFirst({
    where: {
      createdAt: {
        gte: startDate,
        lt: endDate,
      },
    },
  })

  const notes = await prisma.note.findMany()

  return (
    <div className='my-5'>
      <Container>
        <Calendar />
        <Notes note={note} />
        <pre>{JSON.stringify(notes, null, 2)}</pre>
      </Container>
    </div>
  )
}

export default Page
