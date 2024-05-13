import React from 'react'
import logo from "../assets/logo.png"

function Logo() {
  return (
    <div><img src={logo} alt="logo" className='rounded-full' width={40} height={40}   /></div>
  )
}

export default Logo