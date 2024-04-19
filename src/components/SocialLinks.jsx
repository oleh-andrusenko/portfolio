import React from "react"

function SocialLinks() {
  return (
    <div className='w-20 pt-8 flex gap-2 items-center justify-between '>
      <a
        href='https://github.com/oleh-andrusenko'
        className='text-4xl text-slate-600 hover:text-blue-700 dark:text-white'
      >
        <i className='bx bxl-github'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/oleh-andrusenko-ab266a296/'
        className='text-4xl text-slate-600 hover:text-blue-700 dark:text-white'
      >
        <i className='bx bxl-linkedin-square'></i>
      </a>
    </div>
  )
}

export default SocialLinks
