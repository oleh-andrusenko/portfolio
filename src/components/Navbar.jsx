import { useState } from "react"
import MobileSidebar from "./MobileSidebar"
import ThemeSwitcher from "./ThemeSwitcher"
import DesktopNav from "./DesktopNav"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  function hideSidebar() {
    setShowMenu(false)
  }

  return (
    <header className='dark:bg-black mx-auto flex w-full max-w-7xl items-center justify-between p-4 lg:px-8 sticky top-0 z-10 backdrop-blur-lg border-b-2 border-white'>
      <div className='lg:flex items-center w-full'>
        <nav className='w-full'>
          <DesktopNav />
          <MobileSidebar isShown={showMenu} hideSidebar={hideSidebar} />
        </nav>

        <div className='flex items-center justify-between lg:justify-center w-full lg:w-48 gap-4 px-2'>
          <ThemeSwitcher />
          <a
            href='/Oleh Andrusenko-Junior_Frontend.pdf'
            target='_blank'
            download
            className='w-32 p-2 bg-black text-white rounded-xl font-semibold hover:bg-blue-700 hover:ease-in-out text-center cursor-pointer dark:bg-white dark:text-black hover:text-white'
          >
            Download CV
          </a>

          <button
            className='lg:hidden flex items-center justify-center text-2xl p-2 rounded-xl w-9 h-9 text-slate-500 hover:bg-slate-200 hover:ease-in-out'
            onClick={() => setShowMenu(true)}
          >
            <i className='bx bx-menu text-2xl dark:text-white text-slate-600 hover:text-blue-700'></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
