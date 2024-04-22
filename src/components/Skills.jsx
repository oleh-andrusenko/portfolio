import SkillItem from "./SkillItem"
import BlockTitle from "./BlockTitle"

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
      <p className='text-center text-slate-600 text-xl dark:text-white'>
        The skills, tools and technologies I am using:
      </p>
      <div className='w-full grid grid-rows-2 grid-cols-4 py-8 gap-y-12 my-8'>
        <SkillItem title='JavaScript'>
          <IoLogoJavascript />
        </SkillItem>
        <SkillItem title='React'>
          <IoLogoReact />
        </SkillItem>
        <SkillItem title='Node.js'>
          <IoLogoNodejs />
        </SkillItem>
        <SkillItem title='Next.js'>
          <SiNextdotjs />
        </SkillItem>
        <SkillItem title='MongoDB'>
          <SiMongodb />
        </SkillItem>
        <SkillItem title='Sass/scss'>
          <SiSass />
        </SkillItem>
        <SkillItem title='Tailwindcss'>
          <SiTailwindcss />
        </SkillItem>
        <SkillItem title='Git'>
          <SiGit />
        </SkillItem>
      </div>
    </div>
  )
}

export default Skills
