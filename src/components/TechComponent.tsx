import React from 'react'

import NavBar from '@/components/NavBar';
import { technologies } from '@/constants';
import BallCanvas from '@/components/ui/BallCanvas';
import { cn } from '@/utils/cn';
import { Boxes } from './ui/background-boxes';
import Image from 'next/image';

const TechComponent = () => {
  return (
   
      <div className="h-[155vh] sm:h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
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
          <div key={technology.name}>
            <div className="w-28 h-28 hidden sm:block" key={technology.name} >
              <BallCanvas imgUrl={technology.icon.src}/>
          </div>
            <div className='sm:hidden h-28 w-28 rounded-full gap-10 bg-gray-200 p-4 flex items-center justify-center' key={technology.name}>
              <Image src={technology.icon} alt={''} quality={100}/>
            </div>
          </div>
        ))}

      </div>
      </div>
   
  )
}

export default TechComponent
