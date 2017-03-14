import React from 'react'
import intro_logo from './img/logo_base-line.png'
import Intro_img_wide from './img/photos/IMG_6016_2.jpg'

import img_14_1 from './img/photos/IMG_6764_2.jpg'
import img_14_2 from './img/photos/IMG_6235_2.jpg'
import img_14_3 from './img/photos/IMG_6519_2.jpg'
import img_14_4 from './img/photos/IMG_6562_2.jpg'

const Intro = () => {
  return (
    <section id="intro">
      <img id="intro_logo" src={intro_logo} alt="Un moment à soi" />
      <img className="img_wide" src={Intro_img_wide} alt="salon" />
      <div id="intro_photosFour">
        <img className="img_1-4" src={img_14_1} alt="salon" />
        <img className="img_1-4 disapear600" src={img_14_2} alt="salon" />
        <img className="img_1-4" src={img_14_4} alt="salon" />
        <img className="img_1-4 disapear600" src={img_14_3} alt="salon" />
      </div>
    </section>
  )
}

export default Intro
