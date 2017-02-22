import React, { Component } from 'react'
// import fetch from 'isimorphic-fetch'
require('es6-promise').polyfill();
require('isomorphic-fetch');

import PriceBlock from '../PriceBlock'

const api='AIzaSyAIle7yHgw4GvO8vzFIdskMTXIPvSGwilo'
const sheet='1FuQECRqsSEYb4aNJFSA5g5I0GCvAESZhNoIzoJwMjiM'

class PriceBlockContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      priceList: [] // The price list for one section
    }
  }
  componentDidMount() {
    const url='https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+(this.props.position+1)+'?key='+api
    fetch(url)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server")
      }
      return res.json()
    })
    .then((json) => {
      let priceList = json.values.slice(1)
      this.setState({priceList})
    })
  }
  render() {
    return <PriceBlock list={this.state.priceList} position={this.props.position} openDialog={(title, text, imgRef)=>this.props.openDialog(title, text, imgRef)}/>
  }
}

export default PriceBlockContainer
