import React from "react"

function SkillItem({ children, title }) {
  return (
    <div className='flex flex-col items-center  text-slate-600 hover:text-blue-700 dark:text-white'>
      <p className="text-5xl">{children}</p>
      <p>{title}</p>
    </div>
  )
}

export default SkillItem
