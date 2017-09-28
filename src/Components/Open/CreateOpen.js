import React from 'react'
// Component
import OpenForm from './OpenForm'
import { connect } from 'react-redux'

const CreateOpen = (props) => {

    const form = (datos) => {
        console.log(datos)
    }
    

    return(
        <div className="column is-6">
            <h2>Crear Campeonato</h2>
            <OpenForm onSubmit={form} />
        </div>
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
