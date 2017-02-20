import React, { Component } from 'react'

import Nav from '../Nav'

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      navStyle: {height: '65px', top: 'O'}
    }
    this.updatePosition = this.updatePosition.bind(this)
    this.openMenu = this.openMenu.bind(this)
  }
  componentDidMount() {
    this.updatePosition()
  }
  componentWillReceiveProps() {
    this.updatePosition()
  }
  updatePosition() {
    this.setState({navStyle: {height: ((this.props.pagePosition + 1)*65) + 'px', top: -(this.props.pagePosition*62) + 'px'}})
  }
  openMenu() {
    this.setState({navStyle: {height: '260px', top: '0'}})
  }
  render() {
    return <Nav navStyle={this.state.navStyle} openMenu={this.openMenu} />
  }
}

export default NavContainer
