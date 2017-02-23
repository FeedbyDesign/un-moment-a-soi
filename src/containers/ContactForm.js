import React, { Component } from 'react'
require('es6-promise').polyfill();
require('isomorphic-fetch');

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();

    fetch("/thanks.html", {
      method: "POST",
      body: "form-name=test&value=" + this.state.value
    })

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
      <form onSubmit={this.handleSubmit} name="test" action="thanks" data-netlify="true">
        <input name="value" type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm
