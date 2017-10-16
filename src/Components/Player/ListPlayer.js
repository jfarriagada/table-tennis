import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'


class ListPlayer extends Component {

    componentDidMount(){
        this.props.load_players(this.props.open_key)
        console.log("list : componentDidMount")
    }

    componentWillUnmount(){
        this.props.clear_data()
        console.log("list : componentWillUnmount")
    }

    list_player = () => {
        var list
        if(this.props.player.length !== 0){
            list = this.props.player.map((player, value) => {
                return(
                    <tbody key={value}>
                        <tr>
                            <td>#</td>
                            <td>{player.name}</td>
                            <td>{player.club}</td>
                            <td>{player.cabeza_serie ? "Si" :  "No"}</td>
                        </tr>
                    </tbody>
                )
            })
        }else {
            return (
                <tbody>
                    <tr>
                        <td>No hay Jugadores inscritos.</td>
                    </tr>
                </tbody>
            )
        }
        return list
    }
    

    render(){
        return(
            <section className="hero">
                <div className="hero-body">
                    <b className="title is-4">Jugadores</b>
                    <table className="table is-narrow">
                        <thead>
                            <tr>
                                <th><abbr title="Position">Pos</abbr></th>
                                <th>Nombre</th>
                                <th><abbr title="club">Club</abbr></th>
                                <th><abbr title="cabeza_serie">CS</abbr></th>
                            </tr>
                        </thead>
                        {this.list_player()}
                    </table>
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
            console.log('dispatch load players')
            var ref = firebase.database().ref("open/"+ open_key +"/players")
            ref.on("child_added", function(snapshot, prevChildKey) {
                var players = snapshot.val()
                //console.log(snapshot.val())
                dispatch({type: 'PLAYER_LIST', data: players})
            })

        },
        clear_data: () => {
            dispatch({type: 'PLAYER_CLEAR'})
        },
        clear_open_key: () => {
            dispatch({type: 'OPEN_KEY_CLEAR'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPlayer)