import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
// Components
import ListPlayer from './ListPlayer'
import CreatePlayer from './CreatePlayer'
import OpenId from '../Open/OpenId'

class Player extends Component {

    componentWillMount(){
        this.props.get_open()
        this.props.get_open_key()
        console.log('player: componentWillMount()')
    }
    
    
    componentWillUnmount(){
        //this.props.clear_open_key()
        //this.props.clear_open_item()
        console.log('player componentWillUnmount()')
    }
    

    render(){
        return(
            <div>
                <OpenId 
                    open_key={this.props.open_key} 
                    open_item_name={this.props.open_item.name} 
                    open_item_city={this.props.open_item.city} />
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