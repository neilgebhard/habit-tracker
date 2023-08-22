import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const Home = () => {
  const { userId } = auth()

  if (userId) {
    redirect('/app')
  }

  return <main>Home (Explanation Page)</main>
}

export default Home
