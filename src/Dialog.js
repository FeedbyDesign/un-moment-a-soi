import React from 'react'

export default (props) => {
  const imgs = !props.imgRef ? null : (
    <div className="DialogImgRow">
      <img src={process.env.PUBLIC_URL + '/img/dialog/' + props.imgRef + '/1.jpg'} alt="salon" />
      <img src={process.env.PUBLIC_URL + '/img/dialog/' + props.imgRef + '/2.jpg'} alt="salon" />
    </div>
  )
  return (
    <dialog onClick={props.closeDialog}>
      <div onClick={(e)=>{e.stopPropagation()}}>
        <div>
          <i onClick={props.closeDialog} className="fa fa-times" />
          <h3>{props.title}</h3>
          <p className="txt_small">{props.text}</p>
        </div>
        {imgs}
      </div>
    </dialog>
  )
}
