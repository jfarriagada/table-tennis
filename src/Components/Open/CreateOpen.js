import React from 'react'
// Component
import OpenForm from './OpenForm'
import { connect } from 'react-redux'

const CreateOpen = (props) => {

    const form = (datos) => {
        console.log(datos)
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
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOpen)
