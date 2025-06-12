import ExperienceCard from '@/components/ExperienceCard'
import NavBar from '@/components/NavBar'
import { experiences } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black'>
      <NavBar/>
      <div className="h-[130rem] lg:h-[60rem] w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold absolute top-0 z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
        Experience
      </p>
      <div className="absolute top-24 p-4">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">  
        {

          experiences.map((experience,index)=> (
           
            <ExperienceCard key={index} experience={experience}/>
           
          ))
        }
         </ol>

      </div>
    </div>
    </div>
  )
}

export default page
