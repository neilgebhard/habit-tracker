import Container from '@/components/container'
import Client from './calendar'
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

  return (
    <div className='my-5'>
      <Container>
        <Client />
        <Notes data={note} />
      </Container>
    </div>
  )
}

export default Page
