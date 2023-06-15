'use client'
import {TfiMenu} from 'react-icons/tfi'
import { useState } from 'react'

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function Menu(){
    return(
      <ul className='menu-container'>
        <li className='menu-opt'>Features</li>
        <li className='menu-opt'>Pricing</li>
        <li className='menu-opt'>Resources</li>
        <li className='menu-opt'>Login</li>
        <li className='menu-opt'>Sign Up</li>
      </ul>
    )
  }

  return (
    <header>
      <img src="/images/logo.svg" alt="brand-logo" />
      <TfiMenu className='menu-icon' onClick={e=>setIsMenuOpen(!isMenuOpen)}/>
      {isMenuOpen && <Menu/>}
    </header>
  )
}

