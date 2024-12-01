import Link from 'next/link'
import React from 'react'
import { auth , signOut, signIn} from '../../../auth'
import Image from 'next/image'

const Navbar = async() => {
    const session = await auth()
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <div>
                <Link href={'/'}>
                <Image src='/logo.jpeg' alt='logo' width={144} height={144}/>
                </Link>
            </div>
            <div className='text-black flex gap-20'>
                {session && session?.user ?(
                    <>
                    <Link href="/startup/create">
                    <span>create</span>
                    </Link>
                    <form className='gap-10 flex' action={async()=>{
                        "use server"
                        await signOut()}}>
                    <button type='submit'>Logout</button>
                    <Link href={`/user/${session?.user?.id}`}>{session?.user?.name}</Link>
                    </form>
                    </>)
                    :(
                        <form action={async()=>{
                            "use server"
                            await signIn('google')
                        }}>

                            <button type='submit'>
                                Login
                            </button>
                        </form>
                    )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
