import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, description, imageUrl, url }) => {
  return (
    <Link
      to={url}
      className="w-fit text-black transition-transform duration-200 ease-in-out hover:scale-105"
    >
      <img
        src={imageUrl}
        alt="E-commerce"
        className="max-w-[250px] mx-auto bg-[var(--project-card-bg)] rounded-[20px] mb-2"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-base">{description}</p>
    </Link>
  )
}

export default ProjectCard
