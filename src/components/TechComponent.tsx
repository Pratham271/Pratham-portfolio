import React from 'react'

import NavBar from '@/components/NavBar';
import { technologies } from '@/constants';
import BallCanvas from '@/components/ui/BallCanvas';
import Image from 'next/image';

const TechComponent = () => {
  return (
   
      <div className="min-h-screen">
      <div className='w-full'>
       <NavBar/>
       </div>
      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
      <div className="mb-10 max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent-strong))]">Toolbox</p>
        <h1 className="text-5xl font-black leading-none text-[hsl(var(--foreground))] md:text-8xl">Tech that earns its keep.</h1>
      </div>
        <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((technology) => (
          <div className="w-[min(100%,220px)] rounded-3xl border border-[hsl(var(--line))] bg-[hsl(var(--panel-strong))] p-4 text-center" key={technology.name}>
            <div className="mx-auto hidden h-28 w-28 sm:block" key={technology.name} >
              <BallCanvas imgUrl={technology.icon.src}/>
          </div>
            <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[hsl(var(--accent-soft))] p-4 sm:hidden' key={technology.name}>
              <Image src={technology.icon} alt={''} quality={100}/>
            </div>
            <p className="mt-3 text-sm font-semibold text-[hsl(var(--foreground))]">{technology.name}</p>
          </div>
        ))}

      </div>
      </main>
      </div>
   
  )
}

export default TechComponent
