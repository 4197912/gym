import React from 'react'
import Plancard from './Plancard'

const Plan = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center md:px-32 px-5'>
        <h1 className=' text-4xl font-semiboldtext-center'>
            Gym Membership
        </h1>
        <div className='flex flex-col md:flex-row justify-center mt-10 gap-8'>
          <Plancard title='Trailor Plan' price='0' />  
          <Plancard title='Plus Plan' price='$100' />  
          <Plancard title='ProMax Plan' price='$500' />  
        </div>
    </div>
  )
}

export default Plan