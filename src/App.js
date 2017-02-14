import React, { Component } from 'react'
import Intro from './Intro'
import Cares from './Cares'
import Plus from './Plus'
import Contact from './Contact'
import Footer from './Footer'
import Nav from './Nav'


class App extends Component {
  render() {
    return (
      <div className="App"><div>
        <main>
          <Intro />
          <Cares />
          <Plus />
          <Contact />
          <Footer />
        </main>
        <Nav />
      </div>

      </div>
    );
  }
}


export default App;
