import ExperienceCard from '@/components/ExperienceCard'
import NavBar from '@/components/NavBar'
import { experiences } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
      <NavBar/>
      <main className="mx-auto max-w-5xl px-5 py-10 lg:px-10">
      <h1 className="mb-10 text-5xl font-black leading-none text-[hsl(var(--foreground))] md:text-8xl">
        Work, without the resume fog.
      </h1>
      <ol className="relative border-s border-[hsl(var(--line))]">
        {

          experiences.map((experience,index)=> (
           
            <ExperienceCard key={index} experience={experience}/>
           
          ))
        }
         </ol>

      </main>
    </div>
  )
}

export default page
