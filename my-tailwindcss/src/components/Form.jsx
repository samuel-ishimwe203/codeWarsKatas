import React from 'react'

function Form() {
  return (
    <div>
    <div className='m-10 border-2 border-gray-400 w-[35%] p-10'>
          <div><p className=' text-black font-black text-2xl'>Manual Driver Search</p></div>
          <div className='mt-3 grid grid-cols-2 '> <div><input type="text" className='border-none outline-none w-[65%]' placeholder='search for product product type or series' /></div>
          <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></div>
</div>

  <div className='mt-6 grid grid-rows-5 gap-7 '>
        <select  className='border-2 border-gray-400 p-2 w-[100%]'>
                  <option value="">Select Product Category</option>  
        </select>  
         <select  className='border-2 border-gray-400 p-2 w-[100%]'>
                  <option value="">Select Product Series</option>  
        </select> 
         <select  className='border-2 border-gray-400 p-2w-[100%]'>
                  <option value="">Select Product Category</option>  
        </select> 
         <select  className='border-2 border-gray-400  p-2 w-[100%]'>
                  <option value="">Select Product Category</option>  
        </select> 

        <select  className='border-2 border-gray-400  p-2 w-[100%]'>
                  <option value="">Select Product Category</option>  
        </select> 
         {/* <select  className='border-2 border-gray-400 p-2 w-[100%]'>
                  <option value="">Select Product Category</option>  
        </select>  */}
  </div>

  <div className='bg-gray-400 mt-5 p-2 w-[20%] text-gray-600 font-bold'>Find</div>
                                   
    </div>
     </div>
  )
}

export default Form
