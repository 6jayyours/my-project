import React from 'react'

import ProjectCard from '../common/ProjectCard'

const Projects = () => {
  return (
    <section className="text-center bg-light-background min-h-screen h-auto sm:h-screen">
      <h1 className="text-2xl font-bold mb-6">PROJECTS</h1>
      <div className="projectsContainer flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-evenly md:px-8">
      <ProjectCard 
          title="Xentrik"
          description="Ecommerce platform"
          imageUrl="/src/assets/ecomm.jpg" 
          url="https://www.google.com"
        />
        <ProjectCard 
          title="Recruiter"
          description="Job portal website"
          imageUrl="/src/assets/job.jpg" 
          url="https://www.google.com"
        />
        <ProjectCard 
          title="Wanderer"
          description="Hotel booking app"
          imageUrl="/src/assets/hotel.jpg" 
          url="https://www.google.com"
        />
        <ProjectCard 
          title="Xentrik"
          description="Ecommerce platform"
          imageUrl="/src/assets/food.jpg" 
          url="https://www.google.com"
        />
      </div>
    </section>
  )
}

export default Projects
