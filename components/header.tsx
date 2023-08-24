import { siteConfig } from '@/config/site'
import { Icons } from './icons'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const Header = () => {
  return (
    <div className='container my-6 flex justify-between'>
      <Link href='/' className='items-center flex gap-2 text-lg'>
        <Icons.logo />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <Link
        href='/sign-in'
        className={buttonVariants({ variant: 'secondary', size: 'lg' })}
      >
        Login
      </Link>
    </div>
  )
}

export default Header
