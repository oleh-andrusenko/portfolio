import { motion } from "framer-motion"
import BlockTitle from "./BlockTitle"
import { textAnimation, listAnimation } from "../framer.config"

function About() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.5, once: true }}
      className='w-full lg:mx-auto lg:max-w-7xl lg:h-740 bg-slate-50 lg:py-24 lg:px-20 relative -z-0 dark:bg-slate-800 dark:text-white px-4 py-10'
      id='about'
    >
      <BlockTitle>About me</BlockTitle>
      <div className='w-full lg:h-128 flex lg:flex-row flex-col justify-between gap-8 '>
        <div className='w-full flex justify-center my-8 lg:w-584 '>
          <div className="w-64 h-72 lg:w-80 lg:h-96 bg-cover bg-[url('/src/assets/second.jpg')] lg:ml-8 mt-2 relative border-8 border-slate-50 after:h-72 after:w-72 after:-left-6 after:bg-blue-700 dark:after:bg-slate-700 after:absolute after:-bottom-6 lg:after:-left-8 after:-z-10"></div>
        </div>
        <div className='lg:w-584 text-slate-800 dark:text-white'>
          <motion.h4
            variants={textAnimation}
            custom={1}
            className='text-2xl font-semibold my-2'
          >
            Curious about me? Here you have it:
          </motion.h4>
          <motion.p custom={2} variants={textAnimation} className='my-4'>
            As a Junior/Trainee frontend developer, I am a fervent enthusiast
            specializing in React.js, driven by my passion for bringing digital
            products to life through seamless integration of technical and
            visual elements, with a keen focus on user experience, pixel-perfect
            design, and the creation of clear, readable, and highly performant
            code.
          </motion.p>
          <motion.p custom={3} variants={textAnimation} className='my-4'>
            I began my journey as a web developer in 2023, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning popular technologies along the way.
          </motion.p>
          <motion.p custom={4} variants={textAnimation} className='my-4'>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </motion.p>

          <motion.p custom={5} variants={textAnimation} className='my-4'>
            Finally, some quick bits about me.
          </motion.p>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
          >
            <ul className='list-disc ml-8'>
              <motion.li custom={1} variants={listAnimation}>Master's degree in Computer Engineering</motion.li>
              <motion.li custom={2} variants={listAnimation}>Avid learner</motion.li>
              <motion.li custom={3} variants={listAnimation}>Always open to new</motion.li>
            </ul>
          </motion.div>
          <motion.p custom={9} variants={textAnimation} className=' my-4'>
            One last thing, I'm available for work, so feel free to reach out
            and say hello! I promise I don't bite 😉
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
