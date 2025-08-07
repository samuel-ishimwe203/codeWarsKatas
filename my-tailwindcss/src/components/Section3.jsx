import React from 'react'

function Section3() {
  return (
    <div className='grid grid-cols-2 m-10  gap-10  border border-solid border-lime-600 p-8'>
            <div>
                <p className='text-black font-black text-2xl'>Get Automatic Driver Updates</p>
                <p className='mt-2'>The NVIDIA App is the essential companion for PC 
                   gamers and creators. Keep your PC up to date with 
                   the latest NVIDIA drivers and technology.</p>
            </div>
            <div>
                <p>Best for:</p>
                <p className='bg-lime-600 w-[50%] p-2  mt-3'>Gamers / Creators</p>
                <p className='mt-4'>Best for:</p>
                <p className='bg-lime-600 w-[70%] p-2  mt-3'>Professionals / WorkerStation Users</p>
            </div>
    </div>
  )
}

export default Section3