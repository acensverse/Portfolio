import React from 'react'
import '../App.css'

export const Nav = () => {
  return (
    <div className='flex justify-center md:justify-end items-center'>
      <ul className='flex justify-center items-center mx-8 text-slate-800'>
        <li> Home </li>
        <li> Experience </li>
        <li> Projects </li>
        <li> Contact Me </li>
      </ul>
    </div>
  )
}
