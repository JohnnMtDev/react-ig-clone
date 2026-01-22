import './DarkModeSwitch.css'
import { useState, useEffect } from 'react'

export const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(prev => !prev)}
      />
      <span className="slider" />
    </label>
  )
}
