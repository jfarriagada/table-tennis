import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { Link } from 'react-router-dom'


class ListOpen extends Component {

    componentDidMount(){
        this.props.load_data() 
    }

    componentWillUnmount(){
        this.props.clear_data()
    }
    

    list_open = () => {
        const list = this.props.open.map((o) => {
            var open = o.val()
            return(
                <h2 key={o.key} className="subtitle"><Link to={`/open/${o.key}/openid`}>{open.name} - {open.city} - {open.category}</Link></h2>
            )
        })
        return list
    }
    

    render(){
        return(
            <section className="hero">
                <div className="hero-body">
                    <div className="">
                        <h1 className="title">Mis Campeonatos</h1> <br/>
                        {this.list_open()}
                    </div>
                </div>
            </section>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        open : state.open,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load_data: () => {
            var ref = firebase.database().ref('open/').limitToLast(7)
            ref.on('child_added', function(snapshot, prevChildKey) {
                dispatch({type: 'OPEN_LIST', data: snapshot})
            })
        },
        clear_data: () => {
            dispatch({type: 'OPEN_CLEAR'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOpen)