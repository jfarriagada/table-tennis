import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import firebase from 'firebase'
import { DB_CONFIG } from '../../init_fb'
// Component
import OpenForm from './OpenForm'



const CreateOpen = (props) => {

    const form = (data) => {
        console.log(data)
        
        firebase.database().ref('open/').push({
            username: data.name,
            city: data.city,
            category : data.category
        })
        props.create(data)
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
        open : state.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (data) => {
            dispatch({type: 'OPEN_CREATED', data: data})
        },
        error: () => {
            dispatch({type: 'OPEN_ERROR_CREATED'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOpen)
