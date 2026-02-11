import React, { useState } from 'react'
import styles from './ThemeApp.module.css'
import Header from '../Header';
import Card from '../Card';

const ThemeApp = () => {
    const [theme, setTheme] = useState("day");
    const isNight = theme ==='night'

  return (
    <div className={`${styles.container} ${isNight ? styles.night : styles.day}`} 
    style={{transition:"background-color 0.3s ease"}}>
      <Header theme={theme}/>
      <button className={styles.button} onClick={()=> setTheme(isNight ?"day":"night")}
      style={{backgroundColor: isNight ? "#333": "#ffd369",
        color: isNight ? "#fff": "#000"
      }}>Switch to {isNight? "Day": "Night"}</button>
      <Card theme={theme} isNight = {isNight}/>
    </div>
  )
}

export default ThemeApp
