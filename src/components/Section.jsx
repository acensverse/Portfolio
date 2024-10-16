import React, { useEffect, useState } from 'react'
import '@fontsource/jost/400.css'; // Regular
import '@fontsource/jost/700.css'; // Bold

import '../App.css'

const Section = () => {

  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    <>
      <div> Hi! I'm Anupam <br /> Full Stack Developer </div>
    </>,
    <>
      <div> Hi! I'm Anupam <br/> UI/UX Designer </div>
    </>
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div>

      <div className="relative text-slate-800 h-12 w-full flex items-center justify-start mt-60 font-bold font-jost text-6xl ">
      <span className={`absolute transition-opacity duration-1000 ${textIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
        {phrases[0]}
      </span>
      <span className={`absolute transition-opacity duration-1000 ${textIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
        {phrases[1]}
      </span>
      </div>
    
      <p className='mt-20 text-3xl text-slate-500 font-normal font-mono'> “ If You Don’t Take Risks, You Can’t Create A Future " <br/> - Luffy
      </p>

      <button className='mt-16 border border-slate-800 rounded-3xl p-6 text-2xl text-white font-mono font-medum bg-[#0a2342]'> Learn More → </button>
    
    </div>
    
  )
}

export default Section