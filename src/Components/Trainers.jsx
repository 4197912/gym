import React from 'react'
import Trainerscard from './Trainerscard'

const Trainers = () => {
    return (
        <div className='min-h-screen  flex flex-col justify-center items-center md:px-32 px-5'>
            <h1 className='text-8xl font-semibold text-center mt-10 '>Our Trainers</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-8'>
                <Trainerscard img='/public/a.jpg' name='Alon' />
                <Trainerscard img='/public/a.jpg' name='Bumra'/>
                <Trainerscard img='/public/a.jpg' name='Jone' />
            </div>
        </div>
    )
}

export default Trainers