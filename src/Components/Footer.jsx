import React from 'react'
import { Link } from 'react-scroll'
import { FaPhoneAlt} from 'react-icons/fa'
import { MdOutlineMail} from 'react-icons/md'
const Footer = () => {
  return (
    <div className='bg-[#222] rounded-t-3xl'>
        <div className='flex flex-col md:flex-row justify-between md:px-32 px-5 p-5'>
            <div className='w-full md:w-1/4'>
                <Link to='/'>
                    <h1 className='font-semibold text-2xl text-yellow-500'>
                        FitZone
                    </h1>
                </Link>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolores!</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl mt-4'>ADRESS</h1>
                <p>LAHORE PUNJAB PAKISTAN</p>
            </div>
            <div>
                <h1 className='font-semibold text-2xl mt-4'>
                    Contact
                </h1>
                <div>
                  < FaPhoneAlt/>
                  <p>03454197912</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    < MdOutlineMail/>
                    <p>waseemakram14522@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='mt-4 text-xl text-center'>
            <p>DEVELOPED BY WASEEM AKRAM</p>
        </div>
    </div>
  )
}

export default Footer