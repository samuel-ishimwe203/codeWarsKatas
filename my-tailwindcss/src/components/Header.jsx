import React from 'react'
import logo1 from './../assets/image/logo2.jpeg';

function Header() {
  return (
    
    <div className='mt-2 grid sm:grid-cols-1 '>
           <nav className='flex place-content-around '>

                <div><img className='w-[80px] ' src={logo1} alt="" /></div>

            <div className='mt-7'>
                <ul className='flex flex-wrap justify-center space-x-4 md:space-x-9 mb-2 md:mb-0'>
                  <li><a href="#">HOME</a></li>
                   <li><a href="#">SERVICE</a></li>
                    <li><a href="#">ABOUT US</a></li>
                     <li><a href="#">CONTACT</a></li> 
               </ul>
           </div>
               <div className='mt-7'>
                   <button className=' w-20 ml-6 text-center rounded-lg bg-red-500 text-white font-semibold text-lg'>Sign in </button>
                    <button className=' w-20 ml-6 text-center rounded-lg bg-red-500 text-white font-semibold text-lg'>Sign out </button>
               </div>
           </nav>
    </div>
  )
}

export default Header