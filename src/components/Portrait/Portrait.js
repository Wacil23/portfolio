import React from 'react'
import portrait from '../../assets/images/Ellipse 11.png'
import EyeLeft from './EyeLeft'
import EyeRight from './EyeRight'

const Portrait = () => {
    return (
        <div className='eyes relative hidden 2xl:block '>
            <div className='absolute md:w-96 w-40 h-56 md:h-[22rem] mx-28 md:mx-0 blur-lg animate-spin-slow bg-[#0000006b] border-[#1E1E1E] shadow-lg rounded-full top-20'></div>
            <img className='relative w-[65%] m-auto md:w-full max-w-sm z-10' src={portrait} alt="" />
            <EyeLeft />
            <EyeRight />
        </div>
    )
}

export default Portrait