import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between md:px-32 px-5 bg-[url(/3.jpg)] bg-cover bg-no-repeat '>
        <div className='flex flex-col justify-center'>
        <h1 className='text-8xl text-yellow-500 font-semibold md:text-start text-center md:w-2/3'>
            Your body,  your rules.
        </h1>
        <div className='w-full md:w-2/4 flex flex-row justify-center'>
            <button className='text-yellow-500 rounded bg-black hover:bg-white duration-200 '>checkout plans</button>
        </div>
        </div>
    </div>
  )
}

export default Home