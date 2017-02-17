import React from 'react'

// import img_14_1 from './img/photos/IMG_6764_2.jpg'
// import img_14_2 from './img/photos/IMG_6235_2.jpg'
// import img_14_3 from './img/photos/IMG_6519_2.jpg'

export default (props) => {
  return (
    <dialog onClick={props.closeDialog}>
      <div onClick={(e)=>{e.stopPropagation()}}>
        <div>
          <i onClick={props.closeDialog} className="fa fa-times" />
          <h3>{props.title}</h3>
          <p className="txt_small">{props.text}</p>
        </div>
        <div>
          <img className="img_1-3" src={props.images[0]} alt="salon" />
          <img className="img_1-3" src={props.images[1]} alt="salon" />
          <img className="img_1-3" src={props.images[2]} alt="salon" />
        </div>
      </div>
    </dialog>
  )
}
