import React from 'react'

import img_12_1 from './img/photos/IMG_6759_2.jpg'
import img_12_2 from './img/photos/IMG_6408_2.jpg'

import pronailsLogo from './img/logos/pronails.png'
import auriegeLogo from './img/logos/auriege.png'
import labelbioLogo from './img/logos/labelbio.png'
import phytsLogo from './img/logos/phyts.png'

const txtCarteFidelite = "Avec la carte de fidélité, le dixième soin est à -30%."
const txtEntreFilles = 'Un concept tendance où vous alliez le plaisir de vous retrouver et de partager un moment de convivialité et de détente. Les soins sont choisis au préalable afin de répondre aux attentes de chacune. Le nombre de personnes sera déterminé en fonction du type de soins demandés et je suis à votre disposition pour vous conseiller.'
const txtChequeCadeau = "N'hésitez pas à offrir un moment privilégié à la personne de votre choix en lui offrant un chèque-cadeau (anniversaire, fêtes, mise à la retraite,...)"

const Plus = (props) => {
  return (
    <section id="plus">
      <img className="img_1-2" src={img_12_1} alt="Salon" />
      <img className="img_1-2" src={img_12_2} alt="Salon" />
      <h1 style={{color: '#6d645f'}}>•&nbsp;Les petits plus&nbsp;•</h1>
      <div id="plus_circlesWrapper">
        <a onClick={()=>props.openDialog('Carte de fidélité', txtCarteFidelite)}>
          <div className="plus_circle"><h2>carte de <strong>fidélité</strong></h2></div>
        </a>
        <a onClick={()=>props.openDialog('Soirée bien-être entre amies', txtEntreFilles, 'soireeFilles')}>
          <div className="plus_circle"><h2>journée/ soirée <strong>"bien-être"</strong> entre filles</h2></div>
        </a>
        <a onClick={()=>props.openDialog('Chèque-cadeau', txtChequeCadeau, 'chequeCadeau')}>
          <div className="plus_circle"><h2>chèques <strong>cadeaux</strong></h2></div>
        </a>
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
