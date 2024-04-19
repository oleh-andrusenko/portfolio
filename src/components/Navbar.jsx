import { useState } from "react"
import MobileSidebar from "./MobileSidebar"
import ThemeSwitcher from "./ThemeSwitcher"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  
  function hideSidebar() {
    setShowMenu(false)
  }

  return (
    <div className='dark:bg-black mx-auto flex w-full max-w-7xl items-center justify-between p-4 lg:px-8 sticky top-0 z-10 backdrop-blur-lg border-b-2 border-white'>
      <div className='lg:flex items-center w-full'>
        <nav className='w-full'>
          <ul className='w-full lg:flex items-center gap-6 px-8  h-full text-lg border-r-2 hidden'>
            <li>
              <a
                className='text-4xl text-slate-500 hover:text-blue-700 hover:ease-in-out dark:text-white'
                href='#'
              >
                <i className='bx bx-code-block'></i>
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='text-slate-500 hover:text-blue-700  px-2 font-semibold dark:text-white'
              >
                About me
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='text-slate-500 hover:text-blue-700 px-2 font-semibold dark:text-white'
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#experience'
                className='text-slate-500 hover:text-blue-700 px-2 font-semibold dark:text-white'
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='text-slate-500 hover:text-blue-700 px-2 font-semibold dark:text-white'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='text-slate-500 hover:text-blue-700 px-2 font-semibold dark:text-white'
              >
                Contact
              </a>
            </li>
            <li className='lg:hidden'>
              <button onClick={() => setShowMenu(!showMenu)}>
                <i className=' bx bx-menu text-xl text-slate-600'></i>
              </button>
            </li>
          </ul>
          <MobileSidebar isShown={showMenu} hideSidebar={hideSidebar} />
        </nav>

        <div className='flex items-center justify-between lg:justify-center w-full lg:w-48 gap-4 px-2'>
          <ThemeSwitcher />
          <a
            href='../assets/Oleh_Andrusenko_-_NOC_Engineer.pdf'
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
            <i className=' bx bx-menu text-2xl dark:text-white text-slate-600 hover:text-blue-700'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
