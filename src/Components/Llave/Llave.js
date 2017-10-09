import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
// Components
import OpenId from '../Open/OpenId'

class Llave extends Component {
    
    render(){
        return(
            <div>
                <OpenId                   
                    open_key={this.props.open_key} 
                    open_item_name={this.props.open_item.name} 
                    open_item_city={this.props.open_item.city} />
                <div className="columns">
                    <h1 className="title">Llave</h1>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Llave)
