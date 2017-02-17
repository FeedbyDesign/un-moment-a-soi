import React from 'react'

import PriceEntry from './PriceEntry'

export default (props) => {
  return (
    <div className="cares_priceBlock">
      <ul>
        {
          props.list.map((entry, index) => {
            return <PriceEntry key={index} entry={entry} openDialog={props.openDialog}/>
          })
        }

      </ul>
      {
        props.position === 0 ?
        <p style={{color: 'white', textAlign: 'right'}}><span className="txt_orange">*</span>douche disponible sur place</p> :
        null
        // TODO: some logic to check if there is an asterisk in this list or not
      }
    </div>
  )
}
