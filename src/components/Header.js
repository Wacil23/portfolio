import React, { useEffect, useRef } from 'react'
import Portrait from './Portrait/Portrait'
import { FiGithub } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { useStateContext } from '../contexts/ContextProvider'
import OverlayContact from './OverlayContact'

const Header = () => {
    const { settingOpen, secondaryDarkColor, contact, gsapTo, secondaryLightColor } = useStateContext()
    const refHead = useRef()

    const handleGithub = () => {
        window.location.href = 'https://github.com/wacil23'
    }
    const handleLinkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/wacil-zekraoui/'
    }

    useEffect(() => {
        if (contact) {
            gsapTo(refHead?.current, { opacity: 0 })
        } else {
            gsapTo(refHead?.current, { opacity: 1 })
        }
    }, [contact, gsapTo])

    return (
        <>
            <div className={`w-full h-screen justify-around flex`}>
                {contact ? (
                    <OverlayContact />
                )
                    :
                    (<>
                        <div ref={refHead} className="container w-full md:flex grid opacity-0 items-center justify-between mx-44 transition-opacity mb-24 md:mb-0">
                            <div className="content flex flex-col">
                                <div className="content-text flex items-center">
                                    <h1 className='md:text-6xl text-5xl whitespace-nowrap font-mabryMedium text-white'>Hi, I'm</h1>
                                    <span style={{ background: `${settingOpen ? secondaryLightColor : secondaryDarkColor}` }} className='bgIcons m-auto md:ml-5 p-1 md:p-2 my-auto w-fit text-xs md:text-sm rounded-lg font-retro text-[#FFB800] '>frontend developer</span>
                                </div>
                                <span className='glitch w-max uppercase font-retro text-3xl md:text-6xl text-[#FFB800]'>wacil zekraoui</span>
                                <span className='uppercase text-white font-mabryBlack text-base md:text-2xl mt-2 mb-12 md:my-8'>design, code, eat and sleep <span className='md:text-base text-xs'>(a little)</span> </span>
                                <div className='flex items-center self-center md:self-start'>
                                    <FiGithub onClick={handleGithub} className='cursor-pointer text-2xl md:text-3xl text-white' />
                                    <BsLinkedin onClick={handleLinkedin} className='cursor-pointer text-2xl md:text-3xl text-white ml-9' />
                                </div>
                            </div>
                            <Portrait />
                        </div>
                    </>
                    )
                }
            </div>

        </>
    )
}

export default Header