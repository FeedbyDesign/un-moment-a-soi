import React, { Component } from 'react'
import Intro from '../Intro'
import Cares from '../Cares'
import Plus from '../Plus'
import Contact from '../Contact'
import Footer from '../Footer'
import Nav from './NavContainer'
import Dialog from '../Dialog'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false,
      dialogTitle: '',
      dialogText: '',
      dialogImgRef: 'amma',
      pagePosition: 0
    }
    this.checkPosition = this.checkPosition.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition)
  }

  toggleDialog(title='', text='', imgRef) {
    this.setState({dialogOpen: !this.state.dialogOpen, dialogTitle: title, dialogText: text, dialogImgRef: imgRef})
  }
  checkPosition() {
    if (document.getElementById("intro").getBoundingClientRect().top<5 && document.getElementById("intro").getBoundingClientRect().bottom>4) {
      this.setState({pagePosition: 0})
    } else if (document.getElementById("cares").getBoundingClientRect().top<5 && document.getElementById("cares").getBoundingClientRect().bottom>4) {
      this.setState({pagePosition: 1})
    } else if (document.getElementById("plus").getBoundingClientRect().top<5 && document.getElementById("plus").getBoundingClientRect().bottom>4) {
      this.setState({pagePosition: 2})
    } else if (document.getElementById("contact").getBoundingClientRect().top<=5 && document.getElementById("contact").getBoundingClientRect().bottom>4) {
      this.setState({pagePosition: 3})
    }
  }
  submitForm() {
    // const url='https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+(this.props.position+1)+'?key='+api
    // fetch(url)
    // .then((res) => {
    //   if (res.status >= 400) {
    //     throw new Error("Bad response from server")
    //   }
    //   return res.json()
    // })
    // .then((json) => {
    //   let priceList = json.values.slice(1)
    //   this.setState({priceList})
    // })
  }

  render() {
    return (
      <div className="App">
        {this.state.dialogOpen ? <Dialog title={this.state.dialogTitle} text={this.state.dialogText} imgRef={this.state.dialogImgRef} closeDialog={()=>this.toggleDialog()} /> : null}
        <main>
          <Intro />
          <Cares openDialog={(title, text, imgRef)=>this.toggleDialog(title, text, imgRef)} />
          <Plus openDialog={(title, text, imgRef)=>this.toggleDialog(title, text, imgRef)} />
          <Contact submitForm={this.submitForm}/>
          <Footer />
        </main>
        <Nav pagePosition={this.state.pagePosition} />
      </div>
    )
  }
}


export default App
