import SocialLinks from "./SocialLinks"
import { motion } from "framer-motion"
import { headingAnimation } from "../framer.config"


function Title() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:max-w-7xl lg:py-24 lg:px-20 px-4 py-10 '
    >
      <div className='h-full lg:w-2/3'>
        <motion.h1
          custom={1}
          variants={headingAnimation}
          className=' text-4xl  lg:text-6xl font-bold my-2 dark:text-white'
        >
          Hi, I'm <span className='text-blue-700'>Oleh</span>{" "}
          <span className='inline-block shake'>👋</span>
        </motion.h1>
        <motion.p
          custom={2}
          variants={headingAnimation}
          className='text-slate-500 text-sm lg:text-lg my-4 lg:mb-12 lg:mt-8 dark:text-slate-200'
        >
          As a Junior/Trainee frontend developer specializing in React.js, I'm
          eager to apply my skills and learn from experienced developers to
          create dynamic and user-friendly web applications.
        </motion.p>
        <motion.div
          custom={3}
          variants={headingAnimation}
          className='flex items-center text-slate-600 text-sm lg:text-lg dark:text-slate-200'
        >
          <i className='bx bx-map  text-2xl mr-2'></i>
          Zhytomyr, Ukraine
        </motion.div>
        <motion.div
          custom={4}
          variants={headingAnimation}
          className='flex items-center text-slate-600 text-sm lg:text-lg my-2 dark:text-slate-200'
        >
          <div className='w-3 h-3 bg-green-700 rounded-full ml-1 mr-4 animate-pulse'></div>
          Available for work
        </motion.div>
        <SocialLinks />
      </div>
      <div className="w-64 h-72 lg:w-80 lg:h-96 bg-cover bg-[url('/src/assets/me.jpg')] lg:ml-8 mt-2 relative border-8 border-white after:h-72 after:w-72 after:-left-6 after:bg-blue-700 dark:after:bg-slate-700 after:absolute after:-bottom-6 lg:after:left-10 after:-z-10 my-6"></div>
    </motion.div>
  )
}

export default Title
