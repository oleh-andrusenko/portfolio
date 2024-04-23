import { projectsAnimation, headingAnimation } from "../framer.config"
import BlockTitle from "./BlockTitle"
import { MProjectItem } from "./ProjectItem"
import { motion } from "framer-motion"
function Projects() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3, once: true }}
      className='lg:mx-auto lg:max-w-7xl lg:h-[640px] lg:py-24 lg:px-20 px-4 py-12'
      id='projects'
    >
      <BlockTitle>My pet projects</BlockTitle>
      <motion.p
        variants={headingAnimation}
        custom={1}
        className='text-slate-600 text-lg text-center dark:text-white my-4'
      >
        A couple of my pet projects :)
      </motion.p>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3, once: true }}
        className='grid grid-cols-1 lg:grid-cols-3  gap-4'
      >
        <MProjectItem
          icon='bx-dice-3'
          title='Tic Tac Toe'
          description='A simple Tic-Tac-Toe game made with React hooks.'
          variants={projectsAnimation}
          custom={2}
          link='https://curious-froyo-0409da.netlify.app/'
          git='https://github.com/oleh-andrusenko/react-tic-tac-toe'
        />
        <MProjectItem
          icon='bx-bowl-hot'
          title='ReactiveFood'
          description='A simple food order app with cart functional.'
          variants={projectsAnimation}
          custom={3}
          link='https://flourishing-pastelito-947d30.netlify.app/'
          git='https://github.com/oleh-andrusenko/reactive-food'
        />
        <MProjectItem
          icon='bx-windows'
          title='ToDo.it'
          description='A todo list made with NextJS, ReactHookForm, AuthJS and deployed on Vercel. '
          variants={projectsAnimation}
          custom={4}
          link='https://todo-it-eight.vercel.app/dashboard'
          git='https://github.com/oleh-andrusenko/todo-it'
        />
      </motion.div>
    </motion.div>
  )
}

export default Projects
