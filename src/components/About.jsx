import React from "react"
import BlockTitle from "./BlockTitle"

function About() {
  return (
    <div
      className='w-full lg:mx-auto lg:max-w-7xl lg:h-740 bg-slate-50 lg:py-24 lg:px-20 relative -z-0 dark:bg-slate-800 dark:text-white px-4 py-10'
      id='about'
    >
      <BlockTitle>About me</BlockTitle>
      <div className='w-full lg:h-128 flex lg:flex-row flex-col justify-between gap-8 '>
        <div className='w-full flex justify-center my-8 lg:w-584 '>
          <div className="w-64 h-72 lg:w-80 lg:h-96 bg-cover bg-[url('/src/assets/second.jpg')] lg:ml-8 mt-2 relative border-8 border-slate-50 after:h-72 after:w-72 after:-left-6 after:bg-blue-700 dark:after:bg-slate-700 after:absolute after:-bottom-6 lg:after:-left-8 after:-z-10"></div>
        </div>
        <div className='lg:w-584 text-slate-800 dark:text-white'>
          <h4 className='text-2xl font-semibold my-2'>
            Curious about me? Here you have it:
          </h4>
          <p className='my-4'>
            As a Junior/Trainee frontend developer, I am a fervent enthusiast
            specializing in React.js, driven by my passion for bringing digital
            products to life through seamless integration of technical and
            visual elements, with a keen focus on user experience, pixel-perfect
            design, and the creation of clear, readable, and highly performant
            code.
          </p>
          <p className='my-4'>
            I began my journey as a web developer in 2023, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning popular technologies along the way.
          </p>
          <p className=' my-4'>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>

          <p className='my-4'>Finally, some quick bits about me.</p>
          <p>
            <ul className='list-disc ml-8'>
              <li>Master's degree in Computer Engineering</li>

              <li>Avid learner</li>
              <li>Always open to new</li>
            </ul>
          </p>
          <p className=' my-4'>
            One last thing, I'm available for work, so feel free to reach out
            and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
