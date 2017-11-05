import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
// Components

class Llave extends Component {
    
    render(){
        return(
            <div>
                <h1 className="title">Llave</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clear_data: () => {
            dispatch({type: 'PLAYER_CLEAR'})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Llave)
