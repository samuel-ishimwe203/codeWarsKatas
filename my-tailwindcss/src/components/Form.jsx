import React from 'react'

function Form() {
  return (
    <div>
    <div className='m-10 '>
          <div><p className=' text-black font-black text-2xl'>Manual Driver Search</p></div>
          <div className='mt-3 grid grid-cols-2 '> <div><input type="text" className='border-none outline-none w-[65%]' placeholder='search for product product type or series' /></div>
          <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></div>
</div>

    <div>
        <select>
               <option className=' border border-solid border-lime-600 p-8' value="">Select property categories</option>
        </select>
   </div>
                     
                 <button className='bg-red-300 hover:bg-blue-500 focus:bg-red-600'>click</button>
                 
    </div>
     <div className='bg-blue-500 w-20 items-center p-5  place-items-center m-auto'><span>hello</span></div></div>
  )
}

export default Form
