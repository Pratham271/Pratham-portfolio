import NavBar from '@/components/NavBar'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/constants'
import React from 'react'

const Projects = () => {
  return (
  <div className='min-h-screen'>
      <NavBar/>
      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        <div className="mb-8 grid gap-6 pb-8 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent-strong))]">Selected builds</p>
            <h1 className="max-w-4xl text-5xl font-black leading-none text-[hsl(var(--foreground))] md:text-8xl">Useful software, not museum pieces.</h1>
          </div>
          <p className="text-base leading-7 text-[hsl(var(--muted))]">A compact archive of AI, writing, payments, and utility projects with working links where they exist.</p>
        </div>
        <div>
          {projects.map((project,index)=> (
            <ProjectCard key={index}
              index={index}
              deployedLink = {project.deployedLink}
              isDeployed = {project.isDeployed}
              title={project.name}
              description={project.description}
              img={project.image.src}
              codeLink={project.github_link}/>
          ))}
        </div>
      </main>
  </div>
  )
}

export default Projects
