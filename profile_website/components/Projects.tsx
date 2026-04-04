'use client'

import { Project } from "@/types/projects";
import Image from "next/image"

type Props = {
  projects: Project[]
}

export function Projects({ projects } : Props) {
  return (   
    <div className="flex flex-row justify-center items-center gap-10">
      {projects.map(project => (
      <div className="flex flex-col items-center" key={project.id} >
        <Image src={project.image} alt={project.name} width={300} height={600} className=" h-auto "></Image>
        <div className="flex flex-col">
          <h3 className=" text-xl ">{project.name.toUpperCase()}</h3>
          {project.date_uploaded.toDateString()}
          <div className="flex flex-row gap-2 overflow-hidden">
            {project.technologies.map(tech => 
              <div key={tech}>
                {tech}
              </div>
            )}
          </div>
        </div>
      </ div>
    ))
    }
    </div>  
  )
}