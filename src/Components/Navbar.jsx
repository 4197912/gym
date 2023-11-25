import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {AiOutlineMenuFold} from 'react-icons/ai'
const Navbar = () => {
    const [menu , setmenu] = useState(false)
    
   
    return (
        <div>
            <div className=' md:fixed flex flex-row justify-between md:px-32 py-5 p-5 gap-16'>
                <div className='flex items-center p-2'>
                    <Link to='home'>
                    <h1 className='-font-semibold text-2xl text-brightRed' >FitZone</h1>
                    </Link>
                    
                </div>
                <nav className=' hidden md:flex items-center p-2 gap-5'>
            <Link to='home' className='hover:text-red-600 cursor-pointer transition-all' >HOME</Link>
                    <Link to='plans'className='hover:text-red-600 cursor-pointer  transition-all' >PLANS</Link>
                    <Link to='about'className='hover:text-red-600 cursor-pointer  transition-all' >ABOUT</Link>
                    <Link to='trainers'className='hover:text-red-600 cursor-pointer  transition-all'  >TRAINERS</Link>
                    <Link to='contact'className='hover:text-red-600 cursor-pointer  transition-all'  >CONTACT</Link>
                </nav>
                <div className=' md:hidden flex items-center p-2' onClick={()=>setmenu(!menu)}>
                <AiOutlineMenuFold  size={28}/>
                </div>
                
                  <div className={ `${menu ? `left-[0]` :`left-[-100%]`} md:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-semibold text-2xl pt-8 pb-8 gap-8 s-full h-fit transition-transform duration-200`  }>
                  <Link to='home' className='hover:text-red-600 cursor-pointer transition-all' >HOME</Link>
                    <Link to='plans'className='hover:text-red-600 cursor-pointer  transition-all' >PLANS</Link>
                    <Link to='about'className='hover:text-red-600 cursor-pointer  transition-all' >ABOUT</Link>
                    <Link to='trainers'className='hover:text-red-600 cursor-pointer  transition-all'  >TRAINERS</Link>
                    <Link to='contact'className='hover:text-red-600 cursor-pointer  transition-all'  >CONTACT</Link>
                  </div>
            
            </div>
            
        </div>
    )
}
// 

export default Navbar