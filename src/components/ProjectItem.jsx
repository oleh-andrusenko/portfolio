import React from "react"

function ProjectItem({ icon, title, description, link, git }) {
  return (
    <div className='  bg-slate-50 dark:bg-slate-700 lg:h-[300px] overflow-hidden flex items-center justify-between rounded-xl shadow-xl'>
      <div className='w-full p-8 flex flex-col items-center'>
        <p className='text-4xl font-semibold flex items-center lg:justify-center dark:text-white'>
          <i className={"mr-4 bx " + icon}></i>
          {title}
        </p>
        <p className='text-slate-500 my-4 dark:text-white'>{description}</p>

        <div className='flex gap-4 mt-8'>
          <a
            href={git}
            target='_blank'
            className='w-32 dark:text-white text-white bg-blue-600 rounded-lg flex items-center justify-center hover:cursor-pointer hover:text-blue-600 hover:bg-white border-2 border-blue-600'
          >
            <i className='bx bxl-github text-xl mr-2'></i>
            <span>Code</span>
          </a>
          <a
            href={link}
            target='_blank'
            className='w-32 border-2 rounded-lg border-blue-600 text-blue-600 flex items-center justify-center hover:cursor-pointer hover:bg-blue-600 hover:text-white dark:bg-white'
          >
            <i className='bx bx-link-external text-xl'></i>Live demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
