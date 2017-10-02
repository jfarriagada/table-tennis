import React from 'react'
import { connect } from 'react-redux'


const ListOpen = () => {
    return(
        <section className="hero">
            <div className="hero-body">
                <div className="">
                    <h1 className="title">Mis Campeonatos</h1> <br/>
                    <h2 className="subtitle">Open - Valdivia - 23 Octubre 2017</h2>
                    <h2 className="subtitle">Open - Valdivia - 23 Octubre 2017</h2>
                    <h2 className="subtitle">Open - Valdivia - 23 Octubre 2017</h2>
                </div>
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
        load_data: () => {
            dispatch({type: 'OPEN_LIST'})
        },
        error: () => {
            dispatch({type: 'OPEN_ERROR_LIST'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOpen)