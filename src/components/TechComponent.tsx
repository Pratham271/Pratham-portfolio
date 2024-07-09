import React from 'react'

import NavBar from '@/components/NavBar';
import { technologies } from '@/constants';
import BallCanvas from '@/components/ui/BallCanvas';
import { cn } from '@/utils/cn';
import { Boxes } from './ui/background-boxes';
const TechComponent = () => {
  return (
   
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className='absolute top-0 z-20 w-full'>
       <NavBar/>
       </div>
      <h1 className={cn("text-4xl text-white z-10 md:text-6xl font-bold text-center absolute top-10 mt-10")}>
       Tech Stack
      </h1>
        <div className="flex flex-row flex-wrap absolute top-44  md:static justify-center gap-10 z-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name} >
              <BallCanvas imgUrl={technology.icon.src}/>
          </div>
        ))}

      </div>
      </div>
   
  )
}

export default TechComponent
