import React, { useEffect } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useStateContext } from './contexts/ContextProvider';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './App.css';

gsap.registerPlugin(ScrollTrigger);
function App() {

  const { marioFalling, content } = useStateContext()

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: content.current,
          start: '250 center',
          end: '+=10',
          toggleActions: 'resume none none reset',
        },
      })
        .to(marioFalling.current, { y: window.innerHeight * 2.2, display: 'flex', duration: 4, }, '+=0.5')
        .to(marioFalling.current, { display: 'none', opacity: 0 })
    }, marioFalling)

    return () => ctx.revert()
  }, [content, marioFalling])

  return (
    <>
      <NavBar />
      <Home />
    </>
  )
}

export default App;
