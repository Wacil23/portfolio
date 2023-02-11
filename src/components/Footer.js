import React from 'react'
import { SiDiscord } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { useStateContext } from '../contexts/ContextProvider';

export const ButtonMailto = ({ mailto, label }) => {
    return (
        <span
            to='#'
            className='text-white opacity-80 cursor-pointer'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </span>
    );
};

const Footer = () => {
    const { settingOpen } = useStateContext();
    const handleGithub = () => {
        window.location.href = 'https://github.com/wacil23'
    }
    const handleLinkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/wacil-zekraoui/'
    }
    const handleDiscord = () => {
        window.location.href = 'https://discord.com/users/970679146944561182'
    }
    return (
        <div className='w-full h-full'>
            <div style={{ background: settingOpen ? '#005cb8' : '#19227a' }} className='w-full flex py-5  items-center justify-around'>
                <div className='flex flex-col'>
                    <span className='text-white capitalize'>get in touch</span>
                    <ButtonMailto label="wacilzek@icloud.com" mailto="mailto:wacilzek@icloud.com" />
                </div>
                <span className='text-white font-retro text-xs '>wacil</span>
                <div className='flex md:flex-row  items-center'>
                    <SiDiscord onClick={handleDiscord} className='text-white md:ml-7 md:text-xl cursor-pointer' />
                    <FiGithub onClick={handleGithub} className='text-white md:mt-0 ml-4 md:ml-7 md:text-xl cursor-pointer' />
                    <BsLinkedin onClick={handleLinkedin} className='text-white md:mt-0 ml-4 md:ml-7 md:text-xl cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Footer