import React from 'react'

import PriceBlockContainer from './containers/PriceBlockContainer'

import bonsPlans from './img/BONS_PLANS_200px.png'
import round1 from './img/photos/IMG_6010_2.jpg'
import round2 from './img/photos/IMG_6370_2.jpg'
import round3 from './img/photos/illu_2_200.jpg'
import round4 from './img/photos/illu_1_200.jpg'
import round5 from './img/photos/illu_3_200.jpg'
import round6 from './img/photos/IMG_6227_2.jpg'

const Cares = (props) => {
  return (
    <section id="cares" className="back_lightgrey">
      <h1>•&nbsp;Soins et Tarifs&nbsp;•</h1>
      <div>
        <div id="bons_plans_img"><img src={bonsPlans} alt="Les bons plans" /></div>
        <div className="cares_picBlock">
          <img className="img_round" src={round1} alt="gommage" />
        </div>
        <PriceBlockContainer openDialog={props.openDialog} position={0} />
      </div>

      <div>
        <PriceBlockContainer openDialog={props.openDialog} position={2} />
        <div className="cares_picBlock">
          <img className="img_round" src={round3} alt="réflexologie" />
        </div>
      </div>

      <div>
        <div className="cares_picBlock">
          <img className="img_round" src={round2} alt="vernis" />
        </div>
        <PriceBlockContainer openDialog={props.openDialog} position={1} />
      </div>

      <div>
        <PriceBlockContainer openDialog={props.openDialog} position={3} />
        <div className="cares_picBlock">
          <img className="img_round" src={round4} alt="soin du visage" />
        </div>
      </div>

      <div>
        <div className="cares_picBlock">
          <img className="img_round" src={round6} alt="teintures" />
        </div>
        <PriceBlockContainer openDialog={props.openDialog} position={5} />
      </div>

      <div>
        <PriceBlockContainer openDialog={props.openDialog} position={4} />
        <div className="cares_picBlock">
          <img className="img_round" src={round5} alt="épilation" />
        </div>
      </div>
    </section>
  )
}

export default Cares
