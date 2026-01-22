import React from 'react'
import data from './profile-data.json'
import  './header-styles.css'
import { DarkModeSwitch } from '../DarkModeSwitch/DarkModeSwitch'

export const Header = () => {
  return (
    <div className='header'>
        <div className='profile-pic'>
        <img   
        src={data[0].img} 
        alt={data.name}
        />
        <h1>{data[0].name}</h1>
        <h2>{data[0].tag}</h2>
        </div>
    <h3>📸 Photography enthusiast | 🌍 Travel lover |
        ✨ Capturing moments around the world
    </h3>

    <DarkModeSwitch />

    </div>
  )
}
