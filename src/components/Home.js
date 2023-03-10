import React from 'react'
import Header from './Header'
import About from './About'
import { useStateContext } from '../contexts/ContextProvider';
import Skills from './Skills';
import Banner from './Banner';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
    const { containerBg, currentColor } = useStateContext();

    return (
        <div ref={containerBg} style={{ backgroundColor: currentColor }} className={`bgbg bg-[${currentColor}]`}  >
            <Header />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home