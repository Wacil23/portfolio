import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useStateContext } from '../contexts/ContextProvider';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
    const { content } = useStateContext();
    const component = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: content.current,
                    start: '120 center',
                    end: '+=40',
                    snap: 1,
                    toggleActions: 'restart none reverse reverse',
                },
            })
                .to('.square', { width: '50%' })
                .to('.a', { transform: 'translateY(10px)', opacity: 1, }, 0.3)
                .to('.b', { transform: 'translateY(5px)', opacity: 1, }, 0.6)
                .to('.c', { transform: 'translateY(10px)', opacity: 1, }, 0.9)
        }, component)
        return () => ctx.revert()
    }, [content])
    useEffect(() => {
        return () => { ScrollTrigger.refresh() }
    }, [])
    return (
        <div ref={component} className='w-full h-screen flex my-10 md:my-12'>
            <div ref={content} className="containerF flex w-full xl:flex-row  flex-col justify-center items-center">
                <span className='md:w-52 mx-auto md:mx-44 md:flex-col md:mb-0 mb-8 relative z-10 text-5xl md:text-6xl font-mabryBlack text-white uppercase'>about
                    <span className='font-retro w-full flex '> me
                        <div className='square md:w h-12 md:h-16 rounded-lg md:left-0  -z-[1] absolute bg-[#FFB800]' />
                    </span>
                </span>
                <span className={`text-white mx-9 text-justify  md:mx-44 text-lg md:text-2xl`}>
                    <span className='a -translate-y-9 flex opacity-0'>
                        I am a passionate and creative front-end web developer based in Lille, France with significant experience in designing and creating websites.
                    </span>
                    <span className='b -translate-y-9 flex opacity-0'>
                        My personal projects demonstrate my ability to produce modern and attractive designs and develop complex features with a keen eye for detail.
                    </span>
                    <br />
                    <span className='c -translate-y-9 flex opacity-0'>
                        I am passionate about using the latest technologies to enhance the user experience and am always seeking new challenges to improve my skills
                    </span>
                </span>
            </div>
        </div>
    )
}
export default About