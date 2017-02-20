import React from 'react'

const Nav = (props) => {
  return (
    <nav style={props.navStyle} onMouseEnter={props.openMenu}>
      <a href="#intro">
        <i className="fa fa-home fa-lg" />
      </a>
      <a href="#cares">
        <i className="fa fa-th-list fa-lg" />
      </a>
      <a href="#plus">
        <i className="fa fa-ellipsis-h fa-lg" />
      </a>
      <a href="#contact">
        <i className="fa fa-phone fa-lg" />
      </a>
    </nav>
  )
}

export default Nav
