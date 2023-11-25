import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import { FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const Trainerscard = (props) => {
  return (
    <div className='flex flex-col items-center gap-3 pt-6 mt-5 w-full md:w-1/4 bg-[#222] rounded-xl'>
        <div className='w-3/4'>
            <img className='rounded-lg ' src={props.img} alt="img" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos?</p>
        </div>
         <div className=''>
        <h1 className='text-xl font-semibold  text-center'>{props.name}</h1>
        <div className='flex flex-row justify-between py-4 gap-4'>
            < FaInstagramSquare size={25} className='hover:text-slate-500 cursor-pointer'/>
            < FaFacebookSquare size={25} className='hover:text-slate-500 cursor-pointer'/>
            < FaTwitterSquare size={25} className='hover:text-slate-500 cursor-pointer'/>
        </div>
        </div>
        </div>
    
  )
}

export default Trainerscard