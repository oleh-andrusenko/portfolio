import BlockTitle from "./BlockTitle"
import visage from "../assets/visage.png"

function Experience() {
  return (
    <div className='lg:mx-auto lg:max-w-7xl bg-slate-50 lg:py-24 lg:px-20 px-4 py-10 dark:bg-slate-800' id='experience'>
      <BlockTitle>Experience</BlockTitle>
      <p className='text-slate-600 text-center text-xl dark:text-white mb-4'>
        Here is a quick summary of my most recent experiences:
      </p>
      <div className='flex flex-col lg:flex-row lg:gap-12 w-full lg:h-72 rounded-xl shadow-lg bg-white dark:bg-slate-950 lg:my-8 lg:p-8 p-4'>
        <div className='lg:h-full lg:w-1/4 flex items-center justify-center lg:p-4'>
          <img src={visage} className="w-1/2"/>
        </div>
        <div className='lg:h-full lg:w-2/4 lg:p-4 '>
          <h4 className='text-xl font-bold text-black my-4 text-center dark:text-white'>
            System administrator
          </h4>
          <ul className='list-disc ml-6 lg:ml-8 text-slate-600 text-sm lg:text-md dark:text-white'>  
            <li>Managed company website development and maintenance.</li>
            <li>
              Performed installation and configuration of OS and application
              software.
            </li>
            <li>Contributed to local network design and installation.</li>
          </ul>
        </div>
        <div className='w-full p-2 lg:h-full lg:w-1/4 lg:p-4 text-slate-600 lg:text-center dark:text-white my-2'>
          May 2023 - Present
        </div>
      </div>
    </div>
  )
}

export default Experience
