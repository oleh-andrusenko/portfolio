import BlockTitle from "./BlockTitle"
import ProjectItem from "./ProjectItem"

function Projects() {
  return (
    <div className='lg:mx-auto lg:max-w-7xl lg:h-[640px] lg:py-24 lg:px-20 px-4 py-12' id='projects'>
      <BlockTitle>My pet projects</BlockTitle>
      <p className='text-slate-600 text-lg text-center dark:text-white my-4'>
        A couple of my pet projects :)
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
        <ProjectItem
          icon='bx-dice-3'
          title='Tic Tac Toe'
          description='A simple Tic-Tac-Toe game made with React hooks.'
          link='https://curious-froyo-0409da.netlify.app/'
          git='https://github.com/oleh-andrusenko/react-tic-tac-toe'
          
        />
        <ProjectItem
          icon='bx-bowl-hot'
          title='ReactiveFood'
          description='A simple food order app with cart functional.'
          link='https://flourishing-pastelito-947d30.netlify.app/'
          git='https://github.com/oleh-andrusenko/reactive-food'
          
        />
        <ProjectItem
          icon='bx-windows'
          title='ToDo.it'
          description='A todo list made with NextJS, ReactHookForm, AuthJS and deployed on Vercel. '
          link='https://todo-it-eight.vercel.app/dashboard'
          git='https://github.com/oleh-andrusenko/todo-it'
        />
      </div>
    </div>
  )
}

export default Projects
