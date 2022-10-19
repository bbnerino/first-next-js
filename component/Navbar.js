import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import sytles from "./Navbar.module.css"
const Navbar = () => {
  const router = useRouter()
  return (
    <div className={sytles.nav}>
      <Link href='/'><a style={{color:router.pathname ==='/' &&"red"}}>Home</a></Link>
      <Link href='/about'><a style={{color:router.pathname ==='/about' &&"red"}}>About</a></Link>
    </div>
  )
}

export default Navbar