import React from 'react'
import Navbar from '../component/Navbar'

const _app = ({Component,pageProps}) => {
  return (
    <>
      <h1>hi</h1>
      <Navbar/>
      <Component {...pageProps}/>
    </>
  )
}

export default _app