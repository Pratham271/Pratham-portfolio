"use client"
import React from 'react'
import { Spotlight } from '@/components/ui/Spotlight'

import NavBar from '@/components/NavBar';
import { technologies } from '@/constants';
import BallCanvas from '@/components/ui/BallCanvas';
import { cn } from '@/utils/cn';
const TechComponent = () => {
  return (
    <div className='h-[90rem] bg-black/[0.96]'>
      <div className="h-[21rem] lg:h-[30rem] w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-20 left-0 lg:left-96 lg:-top-20"
        fill="white"
      />
      <div className='absolute top-0 w-full lg:w-fit z-50'>
        <NavBar/>
      </div>
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Tech Stack
        </h1>
      
      </div>
    </div>
    <div>
    <div className="flex flex-row flex-wrap absolute top-44  md:static justify-center gap-10">
    {technologies.map((technology, index) => (
  <div className="w-28 h-28" key={technology.name}>
      <BallCanvas imgUrl={technology.icon.src}/>
  </div>
))}

</div>
</div>
    </div>
  )
}

export default TechComponent
