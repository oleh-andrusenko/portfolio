import { motion } from "framer-motion"
import { forwardRef } from "react"
const SkillItem = forwardRef(({ children, title }, ref) => (
  <div
    ref={ref}
    className='flex flex-col items-center  text-slate-600 hover:text-blue-700 dark:text-white'
  >
    <p className='text-5xl'>{children}</p>
    <p>{title}</p>
  </div>
))
export const MSkillItem = motion(SkillItem)
export { SkillItem }
