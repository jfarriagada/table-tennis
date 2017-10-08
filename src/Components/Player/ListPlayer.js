import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
//import { Link } from 'react-router-dom'


class ListPlayer extends Component {

    componentDidMount(){
        this.props.load_players(this.props.open_key)
    }

    componentWillUnmount(){
        this.props.clear_data()
    }

    list_player = () => {
        var list
        if(this.props.player.length !== 0){
            list = this.props.player.map((p) => {
                var player = p.val()
                return(
                    <p key={p.key}>{player.name} - {player.club}</p>
                )
            })
        }else {
            return (
                <h1>no hay datos</h1>
            )
        }
        return list
    }
    

    render(){
        return(
            <section className="hero">
                <div className="hero-body">
                    <b className="title is-4">Jugadores</b>
                    {this.list_player()}
                </div>
            </section>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        open_key: state.open_key,
        player: state.player
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load_players: (open_key) => {
            console.log(open_key + 'dispatch')
            var ref = firebase.database().ref('open/'+ open_key +'/players')
            ref.on('child_added', function(snapshot, prevChildKey) {
                dispatch({type: 'PLAYER_LIST', data: snapshot})
            })
        },
        clear_data: () => {
            dispatch({type: 'PLAYER_CLEAR'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPlayer)