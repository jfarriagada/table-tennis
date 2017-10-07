import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { reset } from 'redux-form'
// Component
import PlayerForm from './PlayerForm'



const CreatePlayer = (props) => {

    const form = (data) => {
        console.log(data)
        
        /*firebase.database().ref('open/player/').push({
            user_uid: props.user.uid,
            name: data.name,
            club: data.club,
            category: data.category
        })
        .then(function(response){
            console.log(response)
            props.clear()
        })
        .catch(error => console.log(error))*/
    }
    

    return(
        <section className="hero"> 
            <div className="hero-body">        
                <b className="title is-4">Crear Jugador</b>
                <PlayerForm onSubmit={form} />
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clear: () => {
            dispatch(reset('syncValidationPlayer'))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayer)
