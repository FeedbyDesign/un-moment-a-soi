import React from 'react'

// TODO: add 'netlify' to the form

const Contact = () => {
  return (
    <section id="contact">
      <img className="img_wide" src="img/photos/IMG_5995_2.jpg" />
      <h1 style={{color: 'white'}}>•&nbsp;Un espace pour vous&nbsp;•</h1>
      <div id="contact_form_section">
        <form name="contact" action="thanks">
          <input type="text" name="name" placeholder="Nom" required />
          <input type="tel" name="phone" placeholder="Téléphone" />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows={8} placeholder="Message" />
          <input className="btn" type="submit" defaultValue="Envoyer" />
        </form>
        <div id="contact_info">
          <h3>uniquement sur rendez-vous</h3>
          <span style={{flexFlow: 'column'}}>
            <h4>lundi &gt; vendredi - 9h &gt; 19h30</h4>
            <h4>samedi - 9h &gt; 18h</h4>
          </span>
          <h4>
            FLORENCE -&nbsp;<strong> 0496 11 59 44</strong>
          </h4>
          <span>
            <h4>rue des Bigarreaux, 31 - 1180 uccle <span className="txt_small">(parking aisé)</span></h4>
            <span className="txt_small">TRAM  51 - BUS  43, 60, DE LIJN - À PROXIMITÉ DU RING</span>
          </span>
          <span style={{flexFlow: 'column'}}>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'flex-end'}}>
              <img src="img/car.png" alt="A domicile" />
              <h4>&nbsp;SOINS À DOMICILE</h4>
            </div>
            <span className="txt_small">frais de déplacement à partir de 5€</span>
          </span>
        </div>
      </div>
      <img className="img_wide" src="img/photos/IMG_6052_2.jpg" />
    </section>
  )
}

export default Contact
