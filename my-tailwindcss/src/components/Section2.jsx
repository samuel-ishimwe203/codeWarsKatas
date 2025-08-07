import React from 'react'

 function Section2() {
  return (
    <div  className='flex  bg-black p-4'>
         <nav className=' flex text-white gap-10  px-15'>
                
              <a className='text-white font-bold text-2xl ' href="#">Drivers</a>
              <a className=' hover:text-green-500 mt-2' href="#"> All Drivers</a>
              <a className=' hover:text-green-500 mt-2' href="#">GetForce Drivers</a>
              <a className=' hover:text-green-500 mt-2' href="#">Networking Drivers</a>
         </nav>
    </div>
  )
}
export default Section2
