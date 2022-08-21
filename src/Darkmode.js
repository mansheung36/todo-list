import React, { useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Darkmode() {
    const body = document.body;
    const LIGHT_THEME = "light";
    const DARK_THEME = "dark";
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    if (theme === LIGHT_THEME || theme === DARK_THEME) {
        body.classList.add(theme);
    } else {
        body.classList.add(LIGHT_THEME);
        setTheme(LIGHT_THEME)
    }

    const switchTheme = (e) => {
        if (theme === DARK_THEME) {
            body.classList.replace(DARK_THEME, LIGHT_THEME);
            localStorage.setItem("theme", LIGHT_THEME);
            setTheme(LIGHT_THEME);
        } else {
            body.classList.replace(LIGHT_THEME, DARK_THEME);
            localStorage.setItem("theme", DARK_THEME);
            setTheme(DARK_THEME);
        }
    };

    return (
        <div className='dark-mode-button'>
            <FontAwesomeIcon icon={theme === DARK_THEME ? faSun : faMoon} type="button" 
                id="darkMode"
                onClick={(e) => switchTheme(e)} />

        </div>
    )
}
