import { useState } from "react"

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light")
  function handleThemeChange() {
    if (theme === "light") {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    }
    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    }
  }
  return (
    <button
      onClick={handleThemeChange}
      className='flex items-center justify-center text-2xl p-2 rounded-xl w-9 h-9 text-slate-500 hover:bg-slate-200 hover:ease-in-out'
    >
      {theme === "light" && <i className='bx bx-moon'></i>}
      {theme === "dark" && <i className='bx bx-sun text-amber-400'></i>}
    </button>
  )
}

export default ThemeSwitcher
