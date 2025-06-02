'use client';
import React from "react";

interface Experience {
  date: string,
  title: string,
  company_name: string,
  points: string[]
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (  
    <li className="mb-0 ms-4 mt-10">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="text-sm font-normal leading-none text-gray-400 ">{experience.date}</time>
        <h3 className="text-lg font-semibold text-white mt-1">{experience.title} ({experience.company_name})</h3>
        <ul className="mb-4 text-base font-normal text-gray-400 mt-3 max-w-2xl lg:max-w-7xl">
          {
            experience.points.map((point,index)=> (
            //  <span key={index}>
            //    {point}
            //   <br></br>
            //   <span className="mt-1.5"></span>
              
            //  </span>
            // <ul>
              <li 
              key={index} 
              className="flex items-start gap-3"
            >
              <span className="text-gray-500 font-mono text-lg leading-none mt-1">-</span>
              <span key={index}>{point}</span>
            </li>
            // </ul>
            ))
          }
          </ul>
    </li>
    
    



  )
}

export default ExperienceCard
