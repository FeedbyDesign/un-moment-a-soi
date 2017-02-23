import React from 'react'

import ContactForm from './containers/ContactForm'

import Contact_img_wide1 from './img/photos/IMG_5995_2.jpg'
import Contact_img_wide2 from './img/photos/IMG_6052_2.jpg'

import carIcon from './img/car.png'

// TODO: add 'netlify' to the form

const Contact = (props) => {
  return (
    <section id="contact">
      <img className="img_wide" src={Contact_img_wide1} alt="Salon" />
      <h1 style={{color: 'white'}}>•&nbsp;Un espace pour vous&nbsp;•</h1>
      <div id="contact_form_section">
        <ContactForm openDialog={props.openDialog}/>
        <div id="contact_info">
          <h3>uniquement sur rendez-vous</h3>
          <span style={{flexFlow: 'column'}}>
            <h4>lundi &gt; vendredi - 9h &gt; 19h30</h4>
            <h4>samedi - 9h &gt; 18h</h4>
          </span>
          <h4>
            FLORENCE -&nbsp;<strong> 0496 11 59 44</strong>
          </h4>
          <span style={{flexFlow: 'column'}}>
            <h4>
              <a href="https://www.google.be/maps/place/Rue+des+Bigarreaux+31,+1180+Uccle/@50.7837262,4.3338364,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c59780cc1cc9:0x230943b6b8d13e4c!8m2!3d50.7837262!4d4.3360251" target="_blank">
              rue des Bigarreaux, 31 - 1180 uccle
              </a>
              <span className="txt_small"> (parking aisé)</span>
            </h4>
            <span className="txt_small">TRAM  51 - BUS  43, 60, DE LIJN - À PROXIMITÉ DU RING</span>
          </span>
          <span style={{flexFlow: 'column'}}>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'flex-end'}}>
              <img src={carIcon} alt="A domicile" />
              <h4>&nbsp;SOINS À DOMICILE</h4>
            </div>
            <span className="txt_small">frais de déplacement à partir de 5€</span>
          </span>
        </div>
      </div>
      <img className="img_wide" src={Contact_img_wide2} alt="Salon" />
    </section>
  )
}

export default Contact
