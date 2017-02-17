import React, { Component } from 'react'
import Intro from '../Intro'
import Cares from '../Cares'
import Plus from '../Plus'
import Contact from '../Contact'
import Footer from '../Footer'
import Nav from '../Nav'
import Dialog from './DialogContainer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false,
      dialogTitle: '',
      dialogText: ''
    }
  }
  toggleDialog(title='', text='') {
    this.setState({dialogOpen: !this.state.dialogOpen, dialogTitle: title, dialogText: text})
  }
  render() {
    return (
      <div className="App">
        {this.state.dialogOpen ? <Dialog title={this.state.dialogTitle} text={this.state.dialogText} closeDialog={()=>this.toggleDialog()} /> : null}
        <main>
          <Intro />
          <Cares openDialog={(title, text)=>this.toggleDialog(title, text)} />
          <Plus />
          <Contact />
          <Footer />
        </main>
        <Nav />
      </div>
    )
  }
}


export default App
