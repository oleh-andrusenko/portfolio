import NavItem from "./NavItem"

function DesktopNav() {
  return (
    <ul className='w-full lg:flex items-center gap-6 px-8  h-full text-lg border-r-2 hidden'>
      <li>
        <a
          className='text-4xl text-slate-500 hover:text-blue-700 hover:ease-in-out dark:text-white'
          href='#'
        >
          <i className='bx bx-code-block'></i>
        </a>
      </li>
      <NavItem link='about' title='About me' />
      <NavItem link='skills' title='Skills' />
      <NavItem link='experience' title='Experience' />
      <NavItem link='projects' title='Projects' />
      <NavItem link='contact' title='Contact' />
      <li className='lg:hidden'>
        <button onClick={() => setShowMenu(!showMenu)}>
          <i className=' bx bx-menu text-xl text-slate-600'></i>
        </button>
      </li>
    </ul>
  )
}

export default DesktopNav
