import { headingAnimation } from "../framer.config"
import BlockTitle from "./BlockTitle"
import SocialLinks from "./SocialLinks"
import { motion } from "framer-motion"

function Contacts() {
  function showToast(id) {
    let btn = document.getElementById(id)
    const btnClasess = btn.className
    const afterClasses =
      " after:content-['Copied!']  after:w-24 after:h-full after:bg-slate-200 after:absolute after:-top-8 after:-left-8 lg:after:left-12 lg:after:top-0 after:text-sm after:flex after:items-center after:justify-center after:rounded-lg after:text-blue-700 after:transition-opacity"
    btn.className += afterClasses

    setTimeout(() => {
      btn.className = btnClasess
    }, 1500)
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.5, once: true }}
      className='px-4 py-10 dark:bg-slate-800 lg:mx-auto lg:max-w-7xl lg:h-74 lg:py-24 lg:px-24 flex flex-col items-center justify-center bg-slate-50'
      id='contact'
    >
      <BlockTitle>Get in touch</BlockTitle>
      <motion.p
        variants={headingAnimation}
        custom={1}
        className='text-slate-600 text-sm lg:text-lg text-center my-2 lg:w-584 dark:text-white'
      >
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </motion.p>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{amount: .5}}
        className='w-full lg:text-3xl font-bold flex flex-col items-center dark:text-white'
      >
        <motion.p
          variants={headingAnimation}
          custom={2}
          className='my-2 lg:my-4 flex items-center justify-center'
        >
          <i className='bx bx-envelope text-2xl lg:text-4xl mr-4 lg:mr-8 text-slate-600 dark:text-white'></i>
          dev.andrusenko.oleh@gmail.com
          <button
            className='ml-4 lg:ml-8 text-slate-600 text-2xl lg:text-4xl relative hover:text-blue-700 dark:text-white'
            id='copyEmail'
            onClick={async (e) => {
              await navigator.clipboard.writeText(
                "dev.andrusenko.oleh@gmail.com"
              )
              showToast(e.target.parentNode.id)
            }}
          >
            <i className='bx bx-copy'></i>
          </button>
        </motion.p>
        <motion.p
          variants={headingAnimation}
          custom={3}
          className='my-4 flex items-center justify-center dark:text-white'
        >
          <i className='bx bx-phone text-2xl lg:text-4xl mr-4 lg:mr-8 text-slate-600 dark:text-white'></i>
          +380 98 95 72 528
          <button
            className='ml-4 lg:ml-8 text-slate-600 text-2xl lg:text-4xl relative hover:text-blue-700 dark:text-white'
            id='copyPhone'
            onClick={async (e) => {
              await navigator.clipboard.writeText("+380989572528")
              showToast(e.target.parentNode.id)
            }}
          >
            <i className='bx bx-copy'></i>
          </button>
        </motion.p>
      </motion.div>
      <motion.p
        variants={headingAnimation}
        custom={4}
        className='lg:text-lg text-slate-600 my-4 lg:my-10 dark:text-white'
      >
        You may also find me on these platforms!
      </motion.p>
      <SocialLinks />
    </motion.div>
  )
}

export default Contacts
