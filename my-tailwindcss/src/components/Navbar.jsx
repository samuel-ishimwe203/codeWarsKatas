import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' 

function Navbar() {
  return (
    <div className='bg-black flex px-4 justify-between items-center h-full max-w-[1240px] mx-auto  text-white '>
        <h1 className='w-full text-[#00df9a] font-bold text-2  xl'>REACT.</h1>

         <ul className='flex hidden '>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources </li>
            <li className='p-4'>About</li>
            <li className='p-4'>contact</li>
        </ul>

        <div>
            <AiOutlineMenu size={20}/>
        </div>

        <div className='fixed left-0 top-0 w-[20%] h-full border-r border-r-gray-900'>
             <h1 className='w-full text-[#00df9a] font-bold text-2xl m-4'>REACT.</h1>
             <ul className='pt-10 uppercase' >
                 <li className='p-4'>Home</li>
                 <li className='p-4'>Company</li>
                 <li className='p-4'>Resources </li>
                 <li className='p-4'>About</li>
                 <li className='p-4'>contact</li>
             </ul>
        </div>
    </div>
  )
}

export default Navbar