import React, { Component } from 'react'
// Components
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
// redux 
import { connect } from 'react-redux'
// Firebase
import { DB_CONFIG } from './init_fb'
import firebase from 'firebase'

// Firebase config
firebase.initializeApp(DB_CONFIG);

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

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
