import React, { Component } from 'react'
// Components
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'


class App extends Component {
  render() {
      return (
        <div>
          <Navbar />
          <Footer />
        </div>
      )
  }
}

export default App;
