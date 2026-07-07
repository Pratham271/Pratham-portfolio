
import React from 'react'
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface CardProps{
  title:string,
  description:string,
  img:string,
  codeLink:string,
  deployedLink: string,
  isDeployed: boolean,
  index: number
}

const ProjectCard = ({title,description,img,codeLink,deployedLink,isDeployed,index}:CardProps) => {
  const flip = index % 2 === 1;
  

  return (
    <article className="group border-t border-[hsl(var(--line))] py-10 last:border-b">
      <div className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="overflow-hidden rounded-[1.75rem] border border-[hsl(var(--line))] bg-[hsl(var(--panel-strong))] p-2 shadow-sm">
          <div className="flex h-8 items-center gap-2 rounded-t-[1.25rem] border-b border-[hsl(var(--line))] bg-[hsl(var(--background))] px-3">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--muted)/0.35)]" />
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--muted)/0.25)]" />
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--muted)/0.18)]" />
          </div>
          <Image
            src={img}
            alt={title}
            height="520"
            width="900"
            className="aspect-[16/10] w-full rounded-b-[1.25rem] object-cover object-top transition duration-500 group-hover:scale-[1.015]"
          />
        </div>
        <div className="max-w-xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--muted))]">
            <span>0{index + 1}</span>
            <span className="h-px w-10 bg-[hsl(var(--line))]" />
            <span>{isDeployed ? "Live product" : "Code archive"}</span>
          </div>
          <h2 className="text-4xl font-black leading-none text-[hsl(var(--foreground))] md:text-6xl">
          {title}
          </h2>
 
          <p className="mt-6 text-base leading-8 text-[hsl(var(--muted))]">
          {description}
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
          <a className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--line))] px-5 py-3 text-sm font-bold text-[hsl(var(--foreground))] transition hover:border-[hsl(var(--foreground))]" href={codeLink} target='_blank'>Github <FaArrowUpRightFromSquare /></a>
          {isDeployed ? (
            <a className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--foreground))] px-5 py-3 text-sm font-bold text-[hsl(var(--background))] transition hover:opacity-85" href={deployedLink} target='_blank'>Live <FaArrowUpRightFromSquare /></a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--line))] px-5 py-3 text-sm font-bold text-[hsl(var(--muted))] opacity-60">Live <FaArrowUpRightFromSquare /></span>
          )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
