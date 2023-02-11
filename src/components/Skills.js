import React, { useEffect, useState } from 'react'
import { mySkills } from '../data/SkillsData'
import { useStateContext } from '../contexts/ContextProvider'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ctx from '../gsap/GsapServices'
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
    let [target, setTarget] = useState(localStorage.getItem('target') || 'front')
    const { settingOpen, primaryLightColor, primaryDarkColor } = useStateContext()
    let [wFront, setWFront] = useState("30%")
    let [wBack, setWBack] = useState(0)
    let [wOther, setWOther] = useState(0)
    const circonference = 63 * 2 * Math.PI
    useEffect(() => {
        const a = localStorage.getItem('target')
        if (a === 'front') {
            setWFront('30%')
            setWBack(0)
            setWOther(0)
        }
        if (a === 'back') {
            setWBack('28%')
            setWFront(0)
            setWOther(0)
        }
        if (a === 'other') {
            setWOther('23%')
            setWFront(0)
            setWBack(0)
        }
        ctx('.squared', 'top center', '+=40', false, 'restart none reverse reverse', '.squared', { width: '100%' })

    }, [])

    useEffect(() => {
        return () => { ScrollTrigger.refresh() }
    }, [])

    const handleChange = (e, w) => {
        setTarget(e.target.id)
        localStorage.setItem('target', e.target.id)
        const target = localStorage.getItem('target')
        if (target === 'front') {
            setWFront(w)
            setWBack(0)
            setWOther(0)
        }
        if (target === 'back') {
            setWBack(w)
            setWFront(0)
            setWOther(0)
        }
        if (target === 'other') {
            setWOther(w)
            setWFront(0)
            setWBack(0)
        }
        return w
    }



    const translateDiv = (w) => {
        if (target) {
            if (settingOpen) {
                return ({
                    transition: 'all 0.5s',
                    width: w,
                    background: primaryLightColor
                })
            } else {
                return ({
                    transition: 'all 0.5s',
                    width: w,
                    background: primaryDarkColor
                })
            }
        }
    }

    return (
        <div className='w-full h-screen flex flex-col'>
            <div className="container w-full flex md:items-start md:justify-start items-center justify-center ">
                <span className='md:w-fit md:mx-44 mx-auto md:text-left md:mb-0 mb-8 relative z-10 md:text-6xl text-5xl font-mabryBlack text-white uppercase w-fit'>my
                    <span className='font-retro  flex w-full '> skills
                        <div className='squared h-12 md:h-16 rounded-lg  -z-[1] absolute bg-[#FFB800]' />
                    </span>
                </span>
            </div>
            <div style={{ background: settingOpen ? '#005cb8' : '#19227A' }} className='w-[80%] contentSkills h-full flex mx-auto rounded-lg flex-col mt-[5%] '>
                <div className='w-full h-full grid md:grid-cols-4 grid-cols-2 items-center justify-items-center '>
                    {mySkills[target].sort((a, b) => b.progress - a.progress).map((e) => (<>
                        <div className='flex flex-col items-center'>
                            <span className='text-white md:text-2xl text-sm mb-4 uppercase font-mabryBlack'>{e.name}</span>
                            <div className='flex hover:-translate-y-3 transition-all items-center justify-center w-full'>
                                <svg className="progress-ring absolute md:w-[140px] md:h-[140px] w-[90px] h-[90px]  " viewBox='0 0 140 140'>
                                    <circle style={{ transformOrigin: '50% 50%', strokeLinecap: 'round' }} className="progress-ring__circle rounde line -rotate-90" strokeDasharray={circonference} strokeDashoffset={circonference - e.progress / 100 * circonference} stroke={`${e.progress < 70 ? '#ffc905' : '#32FF47'} `} strokeWidth="5" fill="transparent" r="63" cx="70" cy="70" />
                                </svg>
                                <div style={{ background: settingOpen ? `${primaryLightColor}` : `${primaryDarkColor}` }} className={`flex shadow-sm bgSkillsItem items-center justify-center md:w-32 md:h-32 w-20 h-20 rounded-full `}>
                                    <span className='md:text-5xl text-3xl text-white'>{e.logo}</span>
                                </div>
                            </div>
                        </div>
                    </>
                    ))
                    }
                </div>
                <div style={{ background: settingOpen ? '#002850' : '#2e38a0' }} className='flex w-full categorySkills relative justify-around z-10 h-24 items-center rounded-b-lg '>
                    <div id='front' onClick={(e) => handleChange(e, '30%')} className='flex w-fit cursor-pointer items-center justify-center'>
                        <div id='front' className={`flex items-center absolute -z-10 md:h-14  h-7 rounded-lg `} style={translateDiv(wFront)} />
                        <span id='front' className='font-retro text-sm md:text-3xl text-white '>frontend</span>

                    </div>
                    <div id='back' onClick={(e) => handleChange(e, '28%')} className='flex w-fit items-center cursor-pointer justify-center'>
                        <div id='back' className={`flex items-center absolute -z-10 md:h-14  h-7 rounded-lg`} style={translateDiv(wBack)} />
                        <span id='back' className='font-retro text-sm md:text-3xl text-white'>backend</span>
                    </div>
                    <div id='other' onClick={(e) => handleChange(e, '23%')} className='flex w-fit items-center cursor-pointer justify-center'>
                        <div id='other' className={`flex items-center absolute -z-10 md:h-14  h-7 rounded-lg`} style={translateDiv(wOther)} />
                        <span id='other' className='font-retro text-sm md:text-3xl text-white'>others</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills