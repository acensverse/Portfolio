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

      <div className="text-slate-800 dark:text-slate-200 h-12 w-full flex items-center justify-start mt-20 xl:mt-60 font-bold font-jost text-4xl xl:text-6xl ">
      <span className={`absolute transition-opacity duration-1000 ${textIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
        {phrases[0]}
      </span>
      <span className={`absolute transition-opacity duration-1000 ${textIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
        {phrases[1]}
      </span>
      </div>
    
      <p className='mt-10 xl:mt-20 xl:text-3xl text-slate-500 font-normal font-mono'> &ldquo; If you don’t take risks, you can’t create a future &rdquo;
      </p>
      <p className='xl:ml-[36rem] xl:text-3xl text-slate-500 font-normal font-mono'> - Monkey D. Luffy </p>

      <button className='mt-5 xl:mt-16 border border-slate-800 rounded-xl xl:rounded-3xl p-3 xl:p-6 text-md xl:text-2xl text-white dark:text-[#0F1020] font-mono font-medum bg-[#0F1020] dark:bg-[#F0F7F4]'> Learn More → </button>
    
    </div>
    
  )
}

export default Section