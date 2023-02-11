import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { CiDark } from 'react-icons/ci'
import { MdOutlineCancel } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { BiMailSend } from 'react-icons/bi'

const NavBar = () => {
    const { settingOpen, setSettingOpen, secondaryDarkColor, secondaryLightColor, contact, setContact } = useStateContext()
    const [widthPhone, setWidthPhone] = useState(false)
    useEffect(() => {
        if (window.innerWidth < 768) {
            setWidthPhone(true)
        } else {
            setWidthPhone(false)
        }
    }, [])
    return (
        <div className='absolute text-white flex w-full items-center justify-between md:px-24 px-8 py-9'>
            <span className='font-retro text-sm'>wacil</span>
            <div className='relative flex items-center w-fit h-fit'>
                <div onClick={() => setSettingOpen(!settingOpen)} style={{ background: `${settingOpen ? secondaryLightColor : secondaryDarkColor}` }} className={`bgIcons md:w-11 md:h-11 w-8 h-8 overflow-hidden cursor-pointer flex items-center justify-center rounded-full`}>
                    {settingOpen ?
                        (<CiDark className='md:text-2xl text-lg' />)
                        :
                        (<BsSun className='md:text-2xl text-lg' />)
                    }
                </div>
            </div>
            {contact ? (
                <>
                    <MdOutlineCancel onClick={() => { setContact(!contact); }} className='text-white cursor-pointer md:text-5xl text-3xl hover:-translate-y-1 transition-transform' />
                </>
            )
                :
                (<>
                    {widthPhone ? (
                        <>
                            <BiMailSend onClick={() => setContact(!contact)} style={{ background: `${settingOpen ? secondaryLightColor : secondaryDarkColor}` }} className={`bgIcons p-2 rounded-full hover:scale-105 cursor-pointer transition hover:-translate-y-1 text-4xl    shadow-md`} />
                        </>
                    ) :
                        (
                            <>
                                <span onClick={() => setContact(!contact)} style={{ background: `${settingOpen ? secondaryLightColor : secondaryDarkColor}` }} className={`bgIcons p-2 rounded-lg font-retro hover:scale-105 cursor-pointer transition hover:-translate-y-1 text-[0.7rem] md:text-base lg:text-lg shadow-md`}>
                                    Contact me
                                </span>
                            </>
                        )

                    }

                </>)


            }
        </div >
    )
}


export default NavBar