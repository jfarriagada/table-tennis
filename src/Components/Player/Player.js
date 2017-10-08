import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
// Components
import ListPlayer from './ListPlayer'
import CreatePlayer from './CreatePlayer'

class Player extends Component {

    componentWillMount(){
        this.props.get_open()
        this.props.get_open_key()
    }

    componentWillUnmount(){
        this.props.clear_open_key()
    }
    

    render(){
        return(
            <div>
                <div className="columns">
                    <div className="column">
                        <nav className="navbar has-shadow">
                            <div className="container">
                                <div className="navbar-tabs">
                                    <a className="navbar-item is-tab" href={`/open/${this.props.open_key}/players`}> Jugadores </a>
                                    <a className="navbar-item is-tab" href='/'> Grupos </a>
                                    <a className="navbar-item is-tab" href='/'> Llave </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="column">
                        <p className="title">{this.props.open_item.name} - {this.props.open_item.city}</p>
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
        open_item : state.open_item,
        open_key : state.open_key
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        get_open: () => {
            firebase.database().ref('/open/' + ownProps.match.params.id).once('value')
            .then(function(snapshot) {
                var open = snapshot.val() 
                dispatch({type:'OPEN_ITEM', data: open})
            })
        },
        get_open_key: () => {
            dispatch({type:'OPEN_KEY', data: ownProps.match.params.id})
        },
        clear_open_key: () => {
            dispatch({type: 'OPEN_KEY_CLEAR'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)