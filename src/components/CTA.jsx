import React from 'react'
import Resume from '../../assets/Aidan Fournier.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} download>Download Resume</a>
        <a href="#contact">Let's Chat</a>
    </div>
  )
}

export default CTA