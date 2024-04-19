import React from "react"
import photo from "../assets/me.jpg"
import SocialLinks from "./SocialLinks"
function Title() {
  return (
    <div className='mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:max-w-7xl lg:py-24 lg:px-20 px-4 py-10 '>
      <div className='h-full lg:w-2/3'>
        <h1 className=' text-4xl  lg:text-6xl font-bold my-2 dark:text-white'>
          Hi, I'm <span className='text-blue-700'>Oleh</span>{" "}
          <span className='inline-block shake'>👋</span>
        </h1>
        <p className='text-slate-500 text-sm lg:text-lg my-4 lg:mb-12 lg:mt-8 dark:text-slate-200'>
          As a junior/trainee frontend developer specializing in React.js, I'm
          eager to apply my skills and learn from experienced developers to
          create dynamic and user-friendly web applications.
        </p>
        <div className='flex items-center text-slate-600 text-sm lg:text-lg dark:text-slate-200'>
          <i className='bx bx-map  text-2xl mr-2'></i>
          Zhytomyr, Ukraine
        </div>
        <div className='flex items-center text-slate-600 text-sm lg:text-lg my-2 dark:text-slate-200'>
          <div className='w-3 h-3 bg-green-700 rounded-full ml-1 mr-4 animate-pulse'></div>
          Available for work
        </div>
        <SocialLinks />
      </div>
      <div className="w-64 h-72 lg:w-80 lg:h-96 bg-cover bg-[url('/src/assets/me.jpg')] lg:ml-8 mt-2 relative border-8 border-slate-50 after:h-72 after:w-72 after:-left-6 after:bg-blue-700 dark:after:bg-slate-700 after:absolute after:-bottom-6 lg:after:left-10 after:-z-10 my-6"></div>
    </div>
  )
}

export default Title
