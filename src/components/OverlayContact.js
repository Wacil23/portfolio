import React, { useRef, useEffect, useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { useForm } from "react-hook-form";
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

const OverlayContact = () => {
    const { contact, gsapTo, secondaryDarkColor, secondaryLightColor, settingOpen, marioRef, setContact } = useStateContext();
    const refForm = useRef();
    const refButton = useRef();
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        if (contact) {
            gsapTo(refForm?.current, { opacity: 1 })
        } else {
            gsapTo(refForm?.current, { opacity: 0 })
        }
    }, [contact, gsapTo, marioRef])
    const onSubmit = data => {
        gsap.context(() => {
            gsap.timeline()
                .to('.mario', { translateX: refButton.current.offsetLeft - 100, autoAlpha: 1 })
                .to('.mario', { translateY: -refButton.current.clientHeight - 20, autoAlpha: 1, duration: 0.1 }).set(refButton.current, { className: 'AnimationFinished' })
                .to('.mario', { translateY: 0, autoAlpha: 1, duration: 0.1 })
                .to('.mario', { translateX: '-100px', autoAlpha: 1 })
        })
        emailjs.send("service_c4rz9so", "template_cvjyxj4", data, 'qioJ1SRDXS3sbViPK').then((resp) => {
            if (resp.status === 204) {
                setLoading(true)
            }
        })
            .then(() => {
                if (!loading) {
                    setContact(false)
                }
            })
            .catch((e) => {
                console.log(e)
                setLoading(false)
            }
            )
    };
    return (
        <div className='flex w-full flex-col mx-10 items-center justify-around my-44'>
            <ToastContainer />
            <h1 className='text-white uppercase text-xl md:text-3xl font-retro mb-10'>Contact me</h1>
            <form ref={refForm} className='form flex flex-col opacity-0 transition-opacity' onSubmit={handleSubmit(onSubmit)} >
                <div className='flex '>
                    <label htmlFor="firstName" className='text-white text-sm md:text-lg font-retro flex flex-wrap mb-4 mr-8'>First name : <small className='text-red-400'>&nbsp; *</small>
                        <input name='firstname' {...register("firstname")} className='text-black font-mabryMedium p-1 rounded-sm focus:outline-none  w-full ' type="text" required />
                    </label>
                    <label htmlFor="lastname" className='text-white text-sm md:text-lg font-retro flex flex-wrap mb-4'>Last name : <small className='text-red-400'>&nbsp; *</small>
                        <input name='lastname' {...register("lastname")} className='text-black font-mabryMedium p-1 rounded-sm focus:outline-none  w-full ' type="text" required />
                    </label>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='text-white text-sm md:text-lg font-retro flex mb-4 flex-wrap'>Email : <small className='text-red-400'>&nbsp; *</small>
                        <input name='email' {...register("email")} className='text-black font-mabryMedium p-1 rounded-sm focus:outline-none w-full ' type="email" required />
                    </label>
                    <label htmlFor="company" className='text-white text-sm md:text-lg font-retro flex flex-wrap mb-4'>Company name :
                        <input name='company' {...register("company")} className='text-black font-mabryMedium p-1  rounded-sm focus:outline-none  w-full' type="text" />
                    </label>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="object" className='text-white text-sm md:text-lg font-retro flex flex-wrap mb-4'>Object : <small className='text-red-400'>&nbsp; *</small>
                        <input name='object' {...register("object")} className='text-black font-mabryMedium p-1 rounded-sm focus:outline-none  w-full' type="text" required />
                    </label>
                    <label htmlFor="message" className='text-white text-sm md:text-lg font-retro flex flex-wrap mb-4'>Message : <small className='text-red-400'>&nbsp; *</small>
                        <textarea name='message' {...register("message")} className='text-black font-mabryMedium p-1 rounded-sm focus:outline-none max-h-20   w-full' required />
                    </label>
                </div>
                <button ref={refButton} style={{ background: `${settingOpen ? secondaryLightColor : secondaryDarkColor}` }} className='z-50 text-white w-fit py-3 px-5 uppercase rounded-sm -translate-y-0' type='submit' >Send</button>
                <span className='text-white'><small className='text-red-400'>*</small> : required</span>
            </form>
        </div>
    )
}
export default OverlayContact