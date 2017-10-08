import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { reset } from 'redux-form'
// Component
import PlayerForm from './PlayerForm'



const CreatePlayer = (props) => {

    const form = (data) => {
        console.log(data)
        
        firebase.database().ref(`open/${props.open_key}/players`).push({
            name: data.name,
            club: data.club,
            category: data.category
        })
        .then(function(response){
            console.log(response)
            props.clear()
        })
        .catch(error => console.log(error))
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
        open_key: state.open_key
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
