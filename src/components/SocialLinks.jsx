import { motion } from "framer-motion"
import { linksAnimation } from "../framer.config"

function SocialLinks() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      className='w-20 pt-8 flex gap-2 items-center justify-between '
    >
      <motion.a
        variants={linksAnimation}
        custom={1}
        href='https://github.com/oleh-andrusenko'
        className='text-4xl text-slate-600 hover:text-blue-700 dark:text-white'
      >
        <i className='bx bxl-github'></i>
      </motion.a>
      <motion.a
        variants={linksAnimation}
        custom={2}
        href='https://www.linkedin.com/in/oleh-andrusenko-ab266a296/'
        className='text-4xl text-slate-600 hover:text-blue-700 dark:text-white'
      >
        <i className='bx bxl-linkedin-square'></i>
      </motion.a>
    </motion.div>
  )
}

export default SocialLinks
