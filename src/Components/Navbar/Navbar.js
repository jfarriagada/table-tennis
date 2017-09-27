import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// Components
import Login from '../Login/Login'
import Home from '../Home/Home'


const Header = () => {
    return (
        <div className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item"> TDM </a>
                <div className="navbar-burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
            </div>
            <div className="navbar-menu" id="navMenu">
                <div className="navbar-start">
                    <div className="navbar-item"><Link to='/'> Inicio </Link></div>
                    <div className="navbar-item"><Link to='/login'> Login </Link></div>
                </div>
            </div>
        </div>
    ) 
}
  

class Navbar extends Component {
    render() {
        return (
          <Router>
            <div className="hero-head">
                <Header />
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
            </div>
          </Router>
        )
    }
  }

export default Navbar


document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});