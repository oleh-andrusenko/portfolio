import React from "react"

function BlockTitle({children}) {
  return (
    <div className='flex items-center text-sm justify-center mx-auto lg:mb-8 w-32 text-slate-800 font-semibold bg-slate-200 rounded-xl p-1 dark:bg-slate-400 dark:text-slate-200 mb-4'>
      {children}
    </div>
  )
}

export default BlockTitle
