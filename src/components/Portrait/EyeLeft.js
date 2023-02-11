import React from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';

const EyeLeft = () => {
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, 'left-eye', { x: 40, y: 40 });

  const rotateLeftEye = `rotate(${-angleLeftEye}deg)`

  return (
    <div className='left-eye w-fit relative overflow-hidden bottom-[188px] left-[142px] md:bottom-[266px] z-20 md:left-[100px]'>
      <svg width="63" className='w-[62%] md:w-full' height="34" viewBox="0 0 63 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62.5 20.4C62.5 20.798 62.3179 21.3164 61.8868 21.9435C61.4604 22.5638 60.8187 23.2491 59.9726 23.97C58.2814 25.411 55.8227 26.9533 52.7885 28.3697C46.7217 31.2016 38.4186 33.5 29.5 33.5C20.6167 33.5 13.341 30.4493 8.28909 26.8693C5.76233 25.0787 3.79995 23.1613 2.47447 21.4378C1.81161 20.5759 1.31338 19.7694 0.982715 19.0579C0.649127 18.3402 0.5 17.749 0.5 17.3091C0.5 16.3784 1.05681 14.8583 2.26638 13.0578C3.46178 11.2785 5.25316 9.28789 7.6211 7.42477C12.3537 3.70112 19.3716 0.5 28.5 0.5C39.1782 0.5 47.7042 2.95681 53.5437 6.68067C59.3865 10.4067 62.5 15.3675 62.5 20.4Z" fill="#A296D3" stroke="black" strokeWidth={2} />
      </svg>
      <div id='left-eye' style={{ transform: rotateLeftEye }} className=' bg-transparent top-[22%] left-[17%] md:top-[4%] md:left-[25%] absolute flex items-center justify-end rounded-full w-4 h-4 md:w-8 md:h-8'>
        <div className='pupil absolute md:w-3 md:h-3 w-2 h-2 rounded-full bg-black '></div>
      </div>
    </div>
  )
}

export default EyeLeft