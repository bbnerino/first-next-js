import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
const Navbar = () => {
  const router = useRouter()
  return (
    <nav color='yellow' >
      <Link href='/'><a>Home</a></Link>
      {/* <Link className={`${styles.aa} ${router.pathname==="/" ? sytles.active:""}`} href='/'><a style={{color:router.pathname ==='/' &&"red"}}>Home</a></Link> */}
      <Link href='/about'><a >About</a></Link>

    <style jsx>{`
      nav{
        background-color:yellow;
      }
   `}</style>
    </nav>
  )
}

export default Navbar