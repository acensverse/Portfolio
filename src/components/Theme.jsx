import React from 'react'
import useTheme from '../context/theme'

const Theme = () => {

  const { themeMode, darkTheme, lightTheme } = useTheme()

  const toggleTheme = () => {
    if (themeMode == 'dark') {
      lightTheme()
    } else {
      darkTheme()
    }
  }

  return (
      <img 
        className='w-10 p-2 mr-4 border border-slate-800  dark:border-slate-200 rounded-full hover:cursor-pointer'
        src= {themeMode ==='dark' ? '/images/brightness.png' : '/images/moon.png'}
        alt="light/dark"
        onClick={toggleTheme}
      />
  )
}

export default Theme