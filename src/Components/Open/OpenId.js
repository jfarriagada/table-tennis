import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
// Componenst

class OpenId extends Component {

    componentDidMount = () => {
        this.props.get_open()
    }
    

    render(){
        return(
            <div className="columns">
                <section className="hero">
                    <div className="hero-body">
                        <div className="">
                            <h1 className="title">{this.props.open_id.name} - {this.props.open_id.city}</h1>
                            <a class="button is-info is-outlined">Jugadores</a>
                            <a class="button is-info is-outlined">Grupos</a>
                            <a class="button is-info is-outlined">LLave</a>
                        </div>
                    </div>
                </section>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenId)