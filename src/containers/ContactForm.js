import React, { Component } from 'react'
require('es6-promise').polyfill();
require('isomorphic-fetch');

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {this.setState({name: event.target.value})}
  handlePhoneChange(event) {this.setState({phone: event.target.value})}
  handleEmailChange(event) {this.setState({email: event.target.value})}
  handleMessageChange(event) {this.setState({message: event.target.value})}

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    fetch("/form", {
      method: "POST",
      headers: myHeaders,
      body: "form-name=contact1&name=" + this.state.name + "&phone=" + this.state.phone + "&email=" + this.state.email + "&message=" + this.state.message
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server")
      } else if (res.status = 200) {
        console.log('request successful');
      }
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
      <form onSubmit={this.handleSubmit} name="contact1" data-netlify="true">
        <input type="text" name="name" placeholder="Nom" value={this.state.name} onChange={this.handleNameChange} required />
        <input type="tel" name="phone" placeholder="Téléphone" value={this.state.phone} onChange={this.handlePhoneChange} />
        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required />
        <textarea name="message" rows={8} placeholder="Message" value={this.state.message} onChange={this.handleMessageChange} />
        <input className="btn" type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default ContactForm

// REQUEST HEADER
// :authority:react--un-moment-a-soi.netlify.com
// :method:POST
// :path:/form
// :scheme:https
// accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
// accept-encoding:gzip, deflate, br
// accept-language:en-US,en;q=0.8,fr;q=0.6,nl;q=0.4,es;q=0.2
// cache-control:max-age=0
// content-length:31
// content-type:application/x-www-form-urlencoded
// cookie:ajs_anonymous_id=%22340153d3-6a2e-4919-94dd-9e3c0b27dcc6%22; intercom-id-q245f50x=2f9e4c73-0af7-4187-8eda-538914ccfdd3; __utmx=50437430.ORzT-7TOT0O-eMsutlXfKA$92487948-2:1; __utmxx=50437430.ORzT-7TOT0O-eMsutlXfKA$92487948-2:1487748889:15552000; ajs_group_id=null; ajs_user_id=%2258384fb2d6865d2bffcd1a6c%22; _ga=GA1.2.797241540.1480084917; mp_96404bf4dbf942a8ec89d1d02e445b55_mixpanel=%7B%22distinct_id%22%3A%20%221589bef62e53fe-0479ffdcbb25bb-3072065b-15f900-1589bef62e66da%22%2C%22mp_lib%22%3A%20%22Segment%3A%20web%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.be%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.be%22%2C%22__alias%22%3A%20%2258384fb2d6865d2bffcd1a6c%22%2C%22mp_name_tag%22%3A%20%22marcoet%40gmail.com%22%2C%22siteCount%22%3A%200%2C%22lastLogin%22%3A%20%222016-11-25T14%3A50%3A26.000Z%22%2C%22loginProviders%22%3A%20%5B%0A%20%20%20%20%22password%22%0A%5D%2C%22id%22%3A%20%2258384fb2d6865d2bffcd1a6c%22%2C%22%24created%22%3A%20%222016-11-25T14%3A50%3A26.000Z%22%2C%22%24email%22%3A%20%22marcoet%40gmail.com%22%2C%22utm_source%22%3A%20%22intercom%22%2C%22utm_medium%22%3A%20%22email%22%2C%22utm_campaign%22%3A%20%22carrot%22%2C%22branch%22%3A%20%22master%22%7D; intercom-session-q245f50x=dEowRnZMdExsLzU4b1h2UmI1VlVWSFlPM1FiaVhucGl4YUtuekxydm1QUW9wandxL3MvV0dma25FZGdSVDYrTS0tZHdUcFpXeHRCSStNUUFBa0V1SVFvdz09--58e0dfe4c7c76b79003c623227b936993e495a54; mp_mixpanel__c=19
// origin:https://react--un-moment-a-soi.netlify.com
// referer:https://react--un-moment-a-soi.netlify.com/form
// upgrade-insecure-requests:1
// user-agent:Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.100 Safari/537.36
// Form Data
// form-name=test&value=test+value
