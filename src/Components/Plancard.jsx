import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdOutlineAttachMoney} from 'react-icons/md'
const Plancard = (props) => {
  return (
    <div className='flex flex-col bg-[#222] w-full md:w-1/3 p-5 rounded-lg'>
        <h2 className='font-semibold text-center'>{props.title}</h2>
        <div className='flex flex-row justify-center items-center'>
            <span className='inline-block'>
<MdOutlineAttachMoney size={28}/>
            </span>
            <h3 className='font-semibold text-xl inline-block'>
    {props.price}
</h3>
</div>
<div className='flex flex-col items-center mt-5'>
    <div className='flex flex-col items-center'>
        <span className='inline-block mt-5'>
            <AiFillCheckCircle size={22}/>
        </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, tempore?
    
</div>
<div className='flex flex-col items-center'>
        <span className='inline-block mt-5'>
            <AiFillCheckCircle size={22}/>
        </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, tempore?Lorem ipsum dolor sit.
    
</div>
        </div>
<button className='rounded-lg bg-yellow-500 mt-5 text-xl '>buy plan</button>
    </div>
  )
}

export default Plancard