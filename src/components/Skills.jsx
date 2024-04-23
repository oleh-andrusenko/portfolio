import { MSkillItem } from "./SkillItem"
import BlockTitle from "./BlockTitle"
import { titleAnimation, skillsAnimation } from "../framer.config"
import { motion } from "framer-motion"
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5"
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiSass,
} from "react-icons/si"

function Skills() {
  return (
    <div
      className='lg:max-w-7xl lg:mx-auto lg:h-74 lg:py-24 lg:px-20 px-4 py-10 '
      id='skills'
    >
      <BlockTitle>Skills</BlockTitle>
      <motion.p
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.25, once: true }}
        variants={titleAnimation}
        transition={{ delay: 0.3 }}
        custom={3}
        className='text-center text-slate-600 text-xl dark:text-white'
      >
        The skills, tools and technologies I am using:
      </motion.p>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3, once: true }}
        className='w-full grid grid-rows-2 grid-cols-4 py-8 gap-y-12 my-8'
      >
        <MSkillItem custom={1} variants={skillsAnimation} title='JavaScript'>
          <IoLogoJavascript />
        </MSkillItem>
        <MSkillItem custom={2} variants={skillsAnimation} title='React'>
          <IoLogoReact />
        </MSkillItem>
        <MSkillItem custom={3} variants={skillsAnimation} title='Node.js'>
          <IoLogoNodejs />
        </MSkillItem>
        <MSkillItem custom={4} variants={skillsAnimation} title='Next.js'>
          <SiNextdotjs />
        </MSkillItem>
        <MSkillItem custom={5} variants={skillsAnimation} title='MongoDB'>
          <SiMongodb />
        </MSkillItem>
        <MSkillItem custom={6} variants={skillsAnimation} title='Sass/scss'>
          <SiSass />
        </MSkillItem>
        <MSkillItem custom={7} variants={skillsAnimation} title='Tailwindcss'>
          <SiTailwindcss />
        </MSkillItem>
        <MSkillItem custom={8} variants={skillsAnimation} title='Git'>
          <SiGit />
        </MSkillItem>
      </motion.div>
    </div>
  )
}

export default Skills
