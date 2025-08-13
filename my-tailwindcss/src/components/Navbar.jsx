import {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' 

function Navbar() {
  const [nav , Setnav]=useState(false)

  const handleNav =()=>{
    Setnav(!nav)
  }

  return (
    <div className='bg-black flex px-4 justify-between items-center h-full max-w-[1240px] mx-auto  text-white '>
        <h1 className='w-full text-[#00df9a] font-bold text-2  xl'>REACT.</h1>

         <ul className=' hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources </li>
            <li className='p-4'>About</li>
            <li className='p-4'>contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden '>
          {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
      
        </div>

        <div className={!nav?'fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-black':'fixed left-[-100%] ease-in-out duration-500'}>
             <h1 className='w-full text-[#00df9a] font-bold text-xl p-4'>REACT.</h1>
             <ul className='p-2 uppercase' >
                 <li className='p-4 border-b border-gray-600'>Home</li>
                 <li className='p-4 border-b border-gray-600'>Company</li>
                 <li className='p-4 border-b border-gray-600'>Resources </li>
                 <li className='p-4 border-b border-gray-600'>About</li>
                 <li className='p-4 border-b border-gray-600'>contact</li>
             </ul>
        </div>
    </div>
  )
}

export default Navbar