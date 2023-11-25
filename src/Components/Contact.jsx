import React from 'react'

const Contact = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center md:mx-32 mx-5 mt-5'>
            <div className='flex flex-col md:flex-row justify-between gap-10'>
                <form  className=' w-full md:w-2/3 space-y-5 pt-20'>
                    <h1 className='text-center font-semibold text-6xl'> Contact Us</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="username"> Your Name</label>
                        <input className='py-3 px-2 rounded-lg hover:shadow-sm' type="text" name='username' id='usename' placeholder=' Enter Name' />
                    </div>
                    {/* email */}
                    <div className='flex flex-col'>
                        <label htmlFor="useremail">Your Email</label>
                        <input className='py-3 px-2 rounded-lg hover:shadow-sm' type="text" name='useremail' id='useremail' placeholder=' Enter Email' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="usernumber"> Your Number</label>
                        <input className='py-3 px-2 rounded-lg hover:shadow-sm' type="text" name='usernumber' id='usename' placeholder=' Enter Number' />
                    </div>
                    <div className='flex flex-col items-center'>
                    <button className='bg-yellow-500 rounded-lg text-white'>Send Message</button>
                    </div>
                 

                </form>
                <div className='flex flex-row items-center w-full md:w-2/4 mt-10 '>
                    <img src="/d.jpg" className= 'rounded-lg w-[400px] h-[400px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact