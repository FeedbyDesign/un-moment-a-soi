import React from 'react'

// Array[6]
// 0:"GOMMAGE (INTÉGRAL)"
// 1:"Gros titre" //"Gros titre"=h3, "Petit titre"=h4, "Grosse description"=, "Petite description"=
// 2:"" //titre invisible si "Oui"
// 3:"" //temps
// 4:"35" //prix
// 5:"35" //prix promo
// 6:"Oui" //Astérisque si "Oui"

export default (props) => {

  let entry = <div>...</div>

  switch (props.entry[1]) {
    case "Gros titre":
      entry = (
        <li>
          <h3>
            {props.entry[2] === "Oui" ? <span style={{visibility: 'hidden'}}>{props.entry[0]}</span> : props.entry[0]}
            {props.entry[6] === "Oui" ? <span className="txt_orange">*</span> : null}
            {props.entry[3] ? <span className="txt_small">{' '+props.entry[3]}</span> : null}
          </h3>
          {props.entry[4] ? <span className="dotsSpan" /> : null}
          {props.entry[5] ?
            <h3><span className="txt_orange">{props.entry[5]+' '}</span><span className="txt_strike">{props.entry[4]}</span></h3> :
            <h3>{props.entry[4]}</h3>}
        </li>
      )
      break;
    case "Petit titre":
      entry = (
        <li>
          <h4>
            {props.entry[2] === "Oui" ? <span style={{visibility: 'hidden'}}>{props.entry[0]}</span> : props.entry[0]}
            {props.entry[6] === "Oui" ? <span className="txt_orange">*</span> : null}
            {props.entry[3] ? <span className="txt_small">{' '+props.entry[3]}</span> : null}
          </h4>
          {props.entry[4] ? <span className="dotsSpan" /> : null}
          {props.entry[5] ?
            <h4><span className="txt_orange">{props.entry[5]+' '}</span><span className="txt_strike">{props.entry[4]}</span></h4> :
            <h4>{props.entry[4]}</h4>}
        </li>
      )
      break;
    case "Grosse description":
      entry = (
        <li>
          {props.entry[0]}
        </li>
      )
      break;
    case "Petite description":
      entry = (
        <li className="txt_small">
          {props.entry[0]}
        </li>
      )
      break;
    default:
      entry = <div>...</div>

  }

  return entry
}
