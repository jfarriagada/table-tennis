import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
// Components
import ListPlayer from './ListPlayer'
import CreatePlayer from './CreatePlayer'

class Player extends Component {

    componentDidMount = () => {
        this.props.get_open()
    }
    

    render(){
        return(
            <div>
                {/*<section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-vcentered">
                                <div className="column">
                                    <p className="title">{this.props.open_id.name} - {this.props.open_id.city}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="navbar has-shadow">
                    <div className="container">
                        <div className="navbar-tabs">
                            <a className="navbar-item is-tab" href={`/open/${this.props.get_open_key()}/players`}> Jugadores </a>
                            <a className="navbar-item is-tab" href='/'> Grupos </a>
                            <a className="navbar-item is-tab" href='/'> Llave </a>
                        </div>
                    </div>
                </nav>*/}
                <div className="columns">
                    <div className="column">
                        <nav className="navbar has-shadow">
                            <div className="container">
                                <div className="navbar-tabs">
                                    <a className="navbar-item is-tab" href={`/open/${this.props.get_open_key()}/players`}> Jugadores </a>
                                    <a className="navbar-item is-tab" href='/'> Grupos </a>
                                    <a className="navbar-item is-tab" href='/'> Llave </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="column">
                        <h1 className="title">{this.props.open_id.name} - {this.props.open_id.city}</h1>
                    </div>
                </div>
                <div className="columns">
                    <CreatePlayer />
                    <ListPlayer />    
                </div>
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return {
        open_id : state.open_id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        get_open: () => {
            firebase.database().ref('/open/' + ownProps.match.params.id).once('value')
            .then(function(snapshot) {
                var open = snapshot.val() 
                dispatch({type:'GET_OPEN_ID', data: open})
            })
        },
        get_open_key: () => {
            return ownProps.match.params.id
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)