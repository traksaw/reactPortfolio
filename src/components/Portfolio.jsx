// import React from 'react'
import { useState } from "react"
import Projects from "./Projects"
import AboutMe from "./AboutMe"

const Portfolio = () => {
const [darkMode, setDarkMode] = useState(false) //set the state of the app to lightMode by default

const toggleDarkMode = () => {
    setDarkMode(!darkMode); //set darkMode if it is not present
}

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <header>
        <h1>Waskar Miguel Paulinos Portfolio</h1>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <main>
        <AboutMe/>
        <Projects />
        <footer>
          <p>&copy; 2025 RC Alum</p>
        </footer>
      </main>
    </div>
  )
}

export default Portfolio