import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import mario from '../assets/mario.json'
import moon from '../assets/moon.json'
import sun from '../assets/sun.json'
import gsap from 'gsap'
import marioFall from '../assets/images/FThoyE6UcAAwGOe.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useStateContext } from '../contexts/ContextProvider'
import ctx from '../gsap/GsapServices'

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {

    const { gsapTo, secondaryLightColor, secondaryDarkColor, primaryLightColor, primaryDarkColor, gsapFromTo, marioFalling, settingOpen, contact, marioRef } = useStateContext();

    if (settingOpen) {
        gsapTo('.bgbg', { background: primaryLightColor, duration: 1 })
        gsapTo('.bgIcons', { background: secondaryLightColor, duration: 0.5 })

        gsapFromTo('.moonRef', { y: 0, duration: 0.5 }, { z: 150, x: 50, scale: 0.5 }) // Moon goes down
        gsapTo('.moonRef', { opacity: 0 })

        gsapFromTo('.sunRef', { z: 150, x: 50, duration: 0.5 }, { z: 0, x: 0, scale: 1 }) //Moon appears up
        gsapTo('.sunRef', { opacity: 1 })
    } else {
        gsapTo('.bgbg', { background: primaryDarkColor, duration: 1 })
        gsapTo('.bgIcons', { background: secondaryDarkColor, duration: 0.5 })

        gsapFromTo('.moonRef', { z: 150, x: 50, duration: 0.5 }, { z: 0, x: 0, scale: 1 }) //Moon appears up
        gsapTo('.moonRef', { opacity: 1 })

        gsapFromTo('.sunRef', { y: 0, duration: 0.5 }, { z: 150, x: 50, scale: 0.5 }) // Moon goes down
        gsapTo('.sunRef', { opacity: 0 })
    };

    useEffect(() => {
        ctx('.cont', '-300rem center', '+=700', 5, 'restart none reverse reverse', '.mario', { x: window.innerWidth })
    }, [])

    useEffect(() => {
        return () => { ScrollTrigger.refresh() }
    }, [])

    return (<>
        <div className='cont w-full relative md:mt-9'>
            <Lottie ref={marioRef} style={{ position: 'absolute', filter: 'drop-shadow(black 4px 1px 2px)', transform: 'translateX(-100px)' }} className='md:w-[250px] w-[200px] mario overflow-hidden -top-[140%] md:-top-[95%] left-0' animationData={mario} loop={true} />
            {contact
                ?
                (<></>)
                :

                (<>
                    <Lottie style={{ position: 'absolute', filter: 'drop-shadow(4px 3px 1px black)' }} className='md:w-[75px] w-[65px] moonRef overflow-hidden md:right-[48%] right-[40%] -top-[250%] md:-top-[130%]' animationData={moon} loop={true} />
                    <Lottie style={{ position: 'absolute', filter: 'drop-shadow(1px 3px 4px yellow)' }} className='md:w-[120px] w-[100px] sunRef opacity-0 md:right-[47%] -top-[260%] right-[38%] overflow-hidden md:-top-[150%]' animationData={sun} loop={true} />
                </>)
            }
            <img width={70} className='z-20 md:w-[70px] w-[50px] absolute left-3/4 hidden' src={marioFall} alt="" ref={marioFalling} />
            <div className='flex flex-col overflow-hidden -mt-14 border-t-2 border-b-2 md:py-6'>
                <div className='marquee flex items-baseline whitespace-nowrap '>
                    <h2 className='text-3xl md:text-5xl uppercase text-white font-mabryBlack'>frontend developer &nbsp;</h2>
                    <h2 className='text-3xl md:text-5xl uppercase font-retro text-[#FFB800]'>frontend developer &nbsp;</h2>
                    <h2 className='text-3xl md:text-5xl uppercase text-white font-mabryBlack'>frontend developer &nbsp;</h2>
                    <h2 className='text-3xl md:text-5xl uppercase font-retro text-[#FFB800]'>frontend developer &nbsp;</h2>
                    <h2 className='text-3xl md:text-5xl uppercase text-white font-mabryBlack'>frontend developer &nbsp;</h2>
                </div>
                <div className='marquee2 flex items-baseline whitespace-nowrap '>
                    <h2 className='text-3xl md:text-5xl uppercase text-white font-mabryBlack'>frontend developer &nbsp;</h2>
                    <h2 className='text-3xl md:text-5xl uppercase font-retro text-[#FFB800]'>frontend developer &nbsp;</h2>
                    <h2 className='text-3xl md:text-5xl uppercase text-white font-mabryBlack'>frontend developer &nbsp;</h2>
                    <h2 className='text-3xl md:text-5xl uppercase font-retro text-[#FFB800]'>frontend developer &nbsp;</h2>
                    <h2 className='text-3xl md:text-5xl uppercase text-white font-mabryBlack'>frontend developer &nbsp;</h2>
                </div>
            </div>
        </div>
    </>

    )
}

export default Banner