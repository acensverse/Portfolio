import React from 'react'
import '../App.css'
import Theme from './Theme'
import MusicButton from './MusicButton'

export const Nav = () => {
  return (
    <div className='flex justify-between items-center'>
      <img
        className='w-20'
        src="/images/logo.png"
        alt="logo" />
      <ul className='hidden xl:flex justify-center items-center mx-8 text-slate-800 dark:text-slate-200'>
        <li> Home </li>
        <li> Experience </li>
        <li> Projects </li>
        <li> Contact </li>
      </ul>
      <div className='flex'>
        <Theme />
        <MusicButton/>
      </div>
    </div>
  )
}
