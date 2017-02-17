import React from 'react'

import img_12_1 from './img/photos/IMG_6759_2.jpg'
import img_12_2 from './img/photos/IMG_6408_2.jpg'

import pronailsLogo from './img/logos/pronails.png'
import auriegeLogo from './img/logos/auriege.png'
import labelbioLogo from './img/logos/labelbio.png'
import phytsLogo from './img/logos/phyts.png'

const Plus = () => {
  return (
    <section id="plus">
      <img className="img_1-2" src={img_12_1} alt="Salon" />
      <img className="img_1-2" src={img_12_2} alt="Salon" />
      <h1 style={{color: '#6d645f'}}>•&nbsp;Les petits plus&nbsp;•</h1>
      <div id="plus_circlesWrapper">
        <div className="plus_circle back_orange"><h2>carte de <strong>fidélité</strong></h2></div>
        <div className="plus_circle back_orange"><h2>journée/ soirée <strong>"bien-être"</strong> entre filles</h2></div>
        <div className="plus_circle back_orange"><h2>chèques <strong>cadeaux</strong></h2></div>
      </div>
      <div id="plus_logos">
        <img src={pronailsLogo} alt="ProNails" />
        <img src={auriegeLogo} alt="Auriège" />
        <img src={labelbioLogo} alt="Label Bio" />
        <img src={phytsLogo} alt="Phyt's" />
      </div>
    </section>
  )
}

export default Plus
