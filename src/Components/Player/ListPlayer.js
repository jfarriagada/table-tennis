import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'


class ListPlayer extends Component {

    componentDidMount(){
        this.props.load_players(this.props.open_key)
    }

    componentWillUnmount(){
        this.props.clear_data(this.props.open_key)
    }

    list_player = () => {
        var list
        if(this.props.player.length !== 0){
            list = this.props.player.map((player_key, value) => {
                var player = player_key.val()
                return(
                    <tbody key={value}>
                        <tr>
                            <th>#</th>
                            <td>{player.name}</td>
                            <td>{player.club}</td>
                            <td>{player.cabeza_serie ? "Si" :  "No"}</td>
                        </tr>
                    </tbody>
                )
            }).reverse()
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

    HandleCloseSuscription(){
        this.props.close_suscription(this.props.open_key)
    }
    
    
    render(){
        return(
            <section className="hero">
                <div className="hero-body">
                    <b className="title is-4">Jugadores</b> <br/>
                    <button onClick={this.HandleCloseSuscription.bind(this)} >Cerrar suscripciones</button>
                    <table className="table is-narrow subtitle">
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
            var ref = firebase.database().ref("open/"+ open_key +"/players")
            ref.on("child_added", function(snapshot, prevChildKey) {
                //var players = snapshot.val()
                dispatch({type: 'PLAYER_LIST', data: snapshot})
            })
        },
        clear_data: (open_key) => {
            dispatch({type: 'PLAYER_CLEAR'})
            // clear listener 
            var ref = firebase.database().ref("open/"+ open_key +"/players")
            ref.off("child_added")
        },
        clear_open_key: () => {
            dispatch({type: 'OPEN_KEY_CLEAR'})
        },
        close_suscription: (open_key) => {
            var ref = firebase.database().ref("open/" + open_key)
            ref.update({suscription_close: true})
            dispatch({type: 'SUSCRIPTION_CLOSE', data: true})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPlayer)