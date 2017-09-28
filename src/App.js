import React, { Component } from 'react'
// Components
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
// redux 
import { connect } from 'react-redux'
// Firebase
import firebase from 'firebase'

// Firebase config
var config = {
  apiKey: "AIzaSyAG7xpXKM5wMZtx7CWHss17y5dT1p3a6w8",
  authDomain: "table-tennis-cl.firebaseapp.com",
  databaseURL: "https://table-tennis-cl.firebaseio.com",
  projectId: "table-tennis-cl",
  storageBucket: "table-tennis-cl.appspot.com",
  messagingSenderId: "56999184418"
};
firebase.initializeApp(config);

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
