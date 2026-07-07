"use client";
import React from "react";

interface Experience {
  date: string,
  title: string,
  company_name: string,
  points: string[]
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (  
    <li className="ms-6 pb-10">
        <div className="absolute -start-2 mt-2 h-4 w-4 rounded-full border-4 border-[hsl(var(--background))] bg-[hsl(var(--accent))]"></div>
        <div className="rounded-3xl border border-[hsl(var(--line))] bg-[hsl(var(--panel)/0.78)] p-6 backdrop-blur">
        <time className="text-sm font-medium leading-none text-[hsl(var(--muted))]">{experience.date}</time>
        <h3 className="mt-2 text-2xl font-bold text-[hsl(var(--foreground))]">{experience.title} <span className="text-[hsl(var(--accent-strong))]">/ {experience.company_name}</span></h3>
        <ul className="mt-5 max-w-4xl space-y-3 text-base leading-7 text-[hsl(var(--muted))]">
          {
            experience.points.map((point,index)=> (
              <li 
              key={index} 
              className="flex items-start gap-3"
            >
              <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[hsl(var(--accent))]"></span>
              <span key={index}>{point}</span>
            </li>
            ))
          }
          </ul>
          </div>
    </li>
    
    



  )
}

export default ExperienceCard
