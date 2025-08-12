import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' 

function Navbar() {
  return (
    <div className='bg-black flex px-4 justify-between items-center h-24 max-w-[1240px] mx-auto  text-white '>
        <h1 className='w-full text-[#00df9a] font-bold text-2  xl'>REACT.</h1>

         <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources </li>
            <li className='p-4'>About</li>
            <li className='p-4'>contact</li>
        </ul>
        <div>
            <AiOutlineMenu/>
        </div>
    </div>
  )
}

export default Navbar