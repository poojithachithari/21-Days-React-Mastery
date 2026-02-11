import React from 'react';
import styles from '../components/ThemeApp/ThemeApp.module.css';

const Header = (theme) => {
  return (
    <h1 style={{marginBottom:"1rem"}}>
        {theme === "night" ? "Night Mode" : "Day Mode"}
    </h1>
  )
}

export default Header
