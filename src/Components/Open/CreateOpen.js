import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { reset } from 'redux-form'
// Component
import OpenForm from './OpenForm'



const CreateOpen = (props) => {

    const form = (data) => {
        console.log(data)
        
        firebase.database().ref('open/').push({
            user_uid: props.user.uid,
            name: data.name,
            city: data.city,
            category : data.category,
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
                <h1 className="title">Crear Campeonato</h1>
                <OpenForm onSubmit={form} />
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clear: () => {
            dispatch(reset('syncValidation'))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOpen)
