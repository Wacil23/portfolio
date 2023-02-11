import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode') || '#020739');
    const [settingOpen, setSettingOpen] = useState(false)
    const primaryLightColor = '#0080ff';
    const secondaryLightColor = '#00468b';
    const primaryDarkColor = '#020739';
    const secondaryDarkColor = '#3640a1';

    const marioRef = useRef()
    const marioFalling = useRef()
    const content = useRef()
    const containerBg = useRef()
    const moonRef = useRef()
    const [contact, setContact] = useState(false)
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color)
    }
    const gsapTo = (target, style, dur) => {
        return gsap.to(target, style, dur)
    }
    const gsapFromTo = (target, styleFrom, styleTo) => {
        return gsap.fromTo(target, styleFrom, styleTo)
    }
    useEffect(() => {
        return () => { ScrollTrigger.refresh() }
    }, [])

    return (
        <StateContext.Provider value={{
            currentColor, setColor,
            marioFalling, content,
            containerBg, moonRef,
            secondaryLightColor, secondaryDarkColor,
            primaryDarkColor, primaryLightColor,
            gsapFromTo, gsapTo,
            settingOpen, setSettingOpen,
            contact, setContact, marioRef
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)