import React from 'react'
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaMoon } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';

const Navbar = () => {
    const [darktheam, setDarkTheam] =useState(false);
    const [openmenu, setOpenmenu] = useState(false);

  return (
    <div className={`flex lg:flex-row sm:flex-col mf:flex-row justify-around p-4 py-6 scale-90 w-full rounded-md ${darktheam ? 'bg-white text-violet-700': 'bg-violet-700 text-white'} shadow-lg items-center`} >
     
        <div className=' flex justify-between sm:w-full lg:w-fit items-center '>
        <h1 className='text-5xl font-light'>Navigation</h1>
        <BiMenu size={35} className={`${darktheam ? 'text-violet-700':'text-white'} block lg:hidden items-center `} onClick={()=>{setOpenmenu( prev=>!prev)}}/>
                  </div>

        <ul className={` lg:flex block lg:py-0 sm:py-4 text-2xl items-center ${openmenu? 'hidden':'block'} `}>
            <li className={`p-4 hover:-translate-y-2  hover:rounded-lg  duration-200`}>Home</li>
            <li className={`p-4 hover:-translate-y-2  hover:rounded-lg  duration-200`}>service</li>
            <li className={`p-4 hover:-translate-y-2  hover:rounded-lg  duration-200`}>contact</li>
            <li className={`p-4 hover:-translate-y-2  hover:rounded-lg  duration-200`}>about</li>
            <li className={`p-4 hover:-translate-y-2  hover:rounded-lg  duration-200`}>project</li>
        </ul>
<div className={`flex flex-row gap-x-4 items-center justify-center scale-90 align-middle  ${openmenu? 'hidden':'block duration-300'}`}>

        <button className={`p-2 ${darktheam ? ' bg-violet-600 text-white ' : 'bg-white text-violet-600'} text-violet-600 hover:scale-105 shadow-xl rounded-md hover:shadow-white/35 px-8 duration-200`}>
            LOGIN
        </button>
        <h1 className='text-xl font-sans items-center'>Signup</h1>
        <h1 className='text-xl font-light items-end rounded-lg  text-white ' onClick={()=>{setDarkTheam(prev=>!prev)}}>
            {darktheam ?  <FaMoon size={35} className='text-violet-600' /> :  <MdLightMode size={35} className='text-white'/>  }
        </h1>
        </div>
    </div>
  )
}

export default Navbar