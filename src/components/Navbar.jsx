import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img src={logo} alt="logo" className='mx-2 w-10'/> */}
            <h1 className='font-medium text-5xl'>Arf.</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/ahmad-roin" target='_blank'>
            <FaLinkedin className='cursor-pointer text-4xl hover:text-blue-500'/>
          </a>
          <a href="https://github.com/TheMekanik" target='_blank'>
            <FaGithub className='cursor-pointer text-4xl hover:text-sky-300'/>
          </a>
          <a href="https://www.instagram.com/mad.roinn/" target='_blank'>
            <FaInstagram className='cursor-pointer text-4xl hover:text-pink-500'/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar