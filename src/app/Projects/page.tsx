import NavBar from '@/components/NavBar'
import ProjectCard from '@/components/ProjectCard'
import { SparklesCore } from '@/components/ui/sparkles'
import { projects } from '@/constants'
import React from 'react'

const Projects = () => {
  return (
  <div className="bg-black">
      <NavBar/>
      <div className="min-h-screen relative w-full bg-black mt-0 overflow-scroll rounded-md">
      
      <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      <h1 className="md:text-7xl mt-4 text-3xl lg:text-6xl font-bold text-center text-white  z-20">
        Projects
      </h1>
      <div className="z-20">
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 mb-10">
                       
                            {projects.map((project,index)=> (
                                <ProjectCard key={index} 
                                deployedLink = {project.deployedLink}
                                isDeployed = {project.isDeployed}
                                title={project.name} 
                                description={project.description} 
                                img={project.image.src} 
                                codeLink={project.github_link}/>
                            ))}
                       
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Projects
