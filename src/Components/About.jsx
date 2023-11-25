import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5'>
        <div>
         <h1 className='text-5xl font-semiboldc md:text-start mt-14 md:mt-0'>
            ABOUT US
         </h1>
        
        <div className='w-full md:w-3/4 space-y-5 mt-4'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, eum voluptatibus sunt commodi amet,<br /> excepturi earum inventore impedit a veniam voluptatum! Animi quae suscipit odit assumenda labore <br /> rem tempora itaque.</p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore tenetur delectus iste laboriosam debitis nam harum labore autem officiis!
            </p>
        </div>
        </div>
        <div className='rounded-lg'> 
            <img src="/2.jpg" alt=""  className='rounded-lg '/>
        </div>
    </div>
  )
}

export default About