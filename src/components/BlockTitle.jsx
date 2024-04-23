import { motion } from "framer-motion"
import { titleAnimation } from "../framer.config"

function BlockTitle({ children }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={titleAnimation}
      custom={1}
      className='flex items-center text-sm justify-center mx-auto lg:mb-8 w-32 text-slate-800 font-semibold bg-slate-200 rounded-xl p-1 dark:bg-slate-400 dark:text-slate-200 mb-4'
    >
      {children}
    </motion.div>
  )
}

export default BlockTitle
