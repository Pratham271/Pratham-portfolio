import ExperienceCard from '@/components/ExperienceCard'
import NavBar from '@/components/NavBar'
import { experiences } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black'>
  <NavBar/>
  <div className="h-screen w-full bg-black bg-grid-white/[0.2] relative flex flex-col">
    {/* Radial gradient */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    
    <p className="text-4xl sm:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center pt-4">
      Experience
    </p>
    
    <div className="flex-1 bg-black p-4 mt-8">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((experience,index)=> (
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </ol>
    </div>
  </div>
</div>
  )
}

export default page
