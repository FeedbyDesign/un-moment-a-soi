import React, { Component } from 'react'

import Dialog from '../Dialog'

import img_14_1 from '../img/photos/IMG_6764_2.jpg'
import img_14_2 from '../img/photos/IMG_6235_2.jpg'
import img_14_3 from '../img/photos/IMG_6519_2.jpg'


class DialogContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // title: 'No title',
      // text: 'Lorem Ipsum',
      // images: [img_14_1, img_14_2, img_14_3]
    }
  }
  componentWillMount() {
    // if (this.props.title) this.setState({title: this.props.title})
    // if (this.props.text) this.setState({text: this.props.text})
    // if (this.props.images) this.setState({images: this.props.images})
  }

  render() {
    return <Dialog title={this.props.title} text={this.props.text} images={this.state.images} closeDialog={()=>this.props.closeDialog()} />
  }
}

export default DialogContainer
