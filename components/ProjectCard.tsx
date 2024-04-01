
import React from 'react'
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface CardProps{
  title:string,
  description:string,
  img:string,
  codeLink:string,
  deployedLink: string,
  isDeployed: boolean
}

const ProjectCard = ({title,description,img,codeLink,deployedLink,isDeployed}:CardProps) => {
  

  return (
    <div className='mt-8 border border-neutral-500 md:ml-10 p-6 rounded-md bg-zinc-300 '>
        <Image
          src={img}
          alt=""
          height="250"
          width="600"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-900">
          {title}
        </p>
 
        <p className="text-sm text-neutral-800">
          {description}
        </p>
        <div className='flex'>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800 z-20">
          <a href={codeLink} target='_blank'>Github Link</a>
          <span className=" rounded-full text-[0.6rem] px-2 py-0 text-white">
          <FaArrowUpRightFromSquare />
          </span>
        </button>
        <button 
        disabled={isDeployed} 
        className={`rounded-full ml-4 pl-4 pr-1 py-1 ${isDeployed?"opacity-100":"opacity-50"} text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800 z-20`}>
          {isDeployed?<a href={deployedLink} target='_blank'><span>Live Link</span></a>:<span>Live Link</span>}
          <span className=" rounded-full text-[0.6rem]  px-2 py-0 text-white">
          <FaArrowUpRightFromSquare />
          </span>
        </button>
        </div>
    </div>
  )
}

export default ProjectCard
