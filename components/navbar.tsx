'use client'

import Link from 'next/link'
import Container from './container'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  return (
    <nav className='py-2 border-b'>
      <Container>
        <div className='flex justify-between items-center gap-2'>
          <Link href='/'>
            <h1 className='font-bold text-2xl'>HabitTracker</h1>
          </Link>
          <div className='flex items-center gap-2'>
            <ModeToggle />
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
