import React from "react"

function NavItem({ link, title }) {
  return (
    <li>
      <a
        href={`#${link}`}
        className='text-slate-500 hover:text-blue-700  px-2 font-semibold dark:text-white'
      >
        {title}
      </a>
    </li>
  )
}

export default NavItem
