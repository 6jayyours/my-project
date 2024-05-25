import React from 'react'

const SkillCard = ({ icon: Icon, label, color }) => {
  return (
    <span className="flex items-center gap-1.5">
      <Icon className="w-5 h-5" style={{color}}/>
      <p className="text-base md:text-lg">{label}</p>
    </span>
  )
}

export default SkillCard
