import React from 'react'

const Sharan = () => {
  return (
<div className='flex lg:flex-row sm:flex-col mf:flex-row justify-around p-4 py-6 scale-90 w-full rounded-md bg-white shadow-lg items-center '>
        <h1 className='text-5xl font-light text-violet-700'>Navigation</h1>

        <ul className=' flex text-2xl text-violet-700 items-center'>
            <li className='p-4 hover:-translate-y-2 hover:text-violet-700 hover:rounded-lg duration-200   '>Home</li>
            <li className='p-4 hover:-translate-y-2 hover:text-violet-700 hover:rounded-lg duration-200   '>service</li>
            <li className='p-4 hover:-translate-y-2 hover:text-violet-700 hover:rounded-lg duration-200   '>contact</li>
            <li className='p-4 hover:-translate-y-2 hover:text-violet-700 hover:rounded-lg duration-200   '>about</li>
            <li className='p-4 hover:-translate-y-2 hover:text-violet-700 hover:rounded-lg duration-200   '>project</li>
        </ul>
       <div className='flex flex-row gap-x-4 items-center justify-center align-middle'>

        <button className='p-2 bg-black text-violet-600 hover:scale-105 shadow-xl rounded-md hover:shadow-white/35 px-8 duration-200'>
            LOGIN
        </button>
        <h1 className='text-xl font-light text-violet-700 items-end'>Signup</h1>
        </div>
    </div>
    
)
}

export default Sharan