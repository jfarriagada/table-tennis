import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { Link } from 'react-router-dom'


class ListPlayer extends Component {

    componentDidMount = () => {
        //this.props.load_data() 
    }

    /*list_open = () => {
        const list = this.props.open.map((o) => {
            var open = o.val()
            return(
                <h2 key={o.key} className="subtitle"><Link to={`open/${o.key}`}>{open.name} - {open.city} - {open.category}</Link></h2>
            )
        })
        return list
    }*/
    

    render(){
        return(
            <section className="hero">
                <div className="hero-body">
                    <b className="title is-4">Jugadores</b>    
    
                </div>
            </section>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        //open : state.open,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*load_data: () => {
            var ref = firebase.database().ref('open/').limitToLast(7)
            ref.on('child_added', function(snapshot, prevChildKey) {
                var open = snapshot.val()
                console.log(open.name)
                console.log(open.city)
                console.log(open.category)
                console.log(snapshot.key)
                console.log(open.user_uid)

                dispatch({type: 'OPEN_LIST', data: snapshot})
            })
        }*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPlayer)