import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import Yummylogo from '../assets/images/Yummylogo.png'
import lbalogo from '../assets/images/lbaLogo.png'
import gitLogo from '../assets/images/Octicons-mark-github.svg'
import ctx from '../gsap/GsapServices'

const Projects = () => {
    const { settingOpen, primaryLightColor, primaryDarkColor } = useStateContext();

    useEffect(() => {
        ctx('.squaredPro', 'top center', '+=40', false, 'restart none reverse reverse', '.squaredPro', { width: '100%' })
    }, [])

    const Projects = [
        {
            name: 'Yummy wok',
            logo: Yummylogo,
            site: 'https://yummy-wok.fr'
        },
        {
            name: 'lba',
            logo: lbalogo,
            site: 'https://laboutiqueargentique.com'
        },
        {
            name: 'others on github',
            logo: gitLogo,
            site: 'https://github.com/wacil23'
        }
    ]


    return (
        <div className='w-full lg:h-screen h-full flex flex-col '>
            <div className="containerPro w-full  mt-44 flex md:items-start md:justify-start items-center justify-center  ">
                <span className='md:w-fit md:mx-44 mx-auto relative z-10  md:text-6xl text-4xl md:mb-0 mb-8 font-mabryBlack text-white uppercase'>my
                    <span className='font-retro flex w-full'> projects
                        <div className='squaredPro w-0 md:h-16 h-12 rounded-lg  -z-[1] absolute bg-[#FFB800]' />
                    </span>
                </span>
            </div>
            <div className='lg:flex grid mx-[7%] mt-[5%] w-auto justify-items-center justify-around'>
                {Projects.map((project, i) => (
                    <>
                        <div style={{ background: settingOpen ? '#005cb8' : '#19227A' }} className='md:w-[23rem] md:h-[20rem]  flex flex-col items-center justify-around shadow-xl hover:-translate-y-3 w-80 lg:mb-0 mb-8 h-52 transition-transform rounded-xl'>
                            <span className='md:text-2xl text-xl gap-y-5 text-white uppercase font-retro'>{project.name}</span>
                            <div style={{ background: settingOpen ? primaryLightColor : primaryDarkColor }} className='md:w-60 md:h-40 w-52 h-38  rounded-xl flex items-center md:p-0 py-5 justify-center'>
                                <img className={`${i} md:w-44 w-40`} src={project.logo} alt="" />
                            </div>
                            <button onClick={() => window.location = project.site} className='font-retro text-white underline'>visit</button>
                        </div>
                    </>
                ))
                }
            </div>
        </div>
    )
}

export default Projects