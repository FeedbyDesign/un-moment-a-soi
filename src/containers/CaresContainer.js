import React, { Component } from 'react'
// import fetch from 'isimorphic-fetch'
require('es6-promise').polyfill();
require('isomorphic-fetch');

import Cares from '../Cares'

const api='AIzaSyAIle7yHgw4GvO8vzFIdskMTXIPvSGwilo'
const sheet='1FuQECRqsSEYb4aNJFSA5g5I0GCvAESZhNoIzoJwMjiM'

class CaresContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      priceList: []
    }
  }
  componentWillMount() {
    for (let i = 0; i < 6; i++) {
      const url='https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+(i+1)+'?key='+api
      this.setState((prevState) => {
        fetch(url)
        .then(function(res) {
          if (res.status >= 400) {
            throw new Error("Bad response from server")
          }
          return res.json()
        })
        .then(function(json) {
          let priceList = json.values.slice(1)
          // TODO: cut first entry in array
          return prevState.priceList[i] = priceList
        })
      })
    }
    console.log(this.state.priceList);
  }
  render() {
    return <Cares priceList={this.state.priceList}/>
  }
}

export default CaresContainer
