import React from "react"
import { motion, AnimatePresence } from "framer-motion"
function MobileSidebar({ isShown, hideSidebar }) {
  return (
    <AnimatePresence>
      {isShown && (
        <motion.ul
          initial={{ marginRight: "-75%" }}
          animate={{ marginRight: 0 }}
          exit={{ marginRight: "-100%" }}
          className='flex flex-col  justify-start gap-6 p-6 text-lg sidebar'
        >
          <li>
            <a
              className='text-4xldark:text-white  text-slate-500 hover:text-blue-700 hover:ease-in-out dark:text-white'
              href='#'
              onClick={hideSidebar}
            >
              <i className='bx bx-code-block'></i>
            </a>
          </li>
          <li>
            <a
              href='#about'
              onClick={hideSidebar}
              className='text-slate-500 hover:text-blue-700  px-2 font-semibold dark:text-white'
            >
              About me
            </a>
          </li>
          <li>
            <a
              href='#skills'
              onClick={hideSidebar}
              className='text-slate-500 hover:text-blue-700 px-2 font-semibold dark:text-white'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#experience'
              onClick={hideSidebar}
              className='text-slate-500 hover:text-blue-700 px-2 font-semibold dark:text-white'
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href='#projects'
              onClick={hideSidebar}
              className='text-slate-500 hover:text-blue-700 px-2 font-semibold dark:text-white'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              onClick={hideSidebar}
              className='text-slate-500 hover:text-blue-700 px-2 font-semibold dark:text-white'
            >
              Contact
            </a>
          </li>
          <li>
            <button className='absolute top-6 right-4' onClick={hideSidebar}>
              <i className='bx bx-x text-4xl text-slate-600'></i>
            </button>
          </li>
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default MobileSidebar
