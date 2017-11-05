import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { reset } from 'redux-form'
// Component
import Message from '../StateLess/Message'


class CreateGrupo extends Component {

    componentDidMount(){
        // validation for created groups
        if(this.props.suscription_close === true && this.props.created_group_ok === false){

            const ABECEDARIO = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

            /*
             define groups and players for group
            */
            var groups = Math.floor(this.props.player.length / 4)
            const loose_players = this.props.player.length % 4
            const for_group = []

            if(loose_players === 0){
                for (let index = 0; index < groups; index++) {
                    for_group.push(4)
                }
            } else if (loose_players === 1){
                for (let index = 0; index < groups; index++) {
                    if(index === 0){ for_group.push(5) } else { for_group.push(4) }
                }
            } else if (loose_players === 2){
                for (let index = 0; index < groups; index++) {
                    if(index === 0 || index === 1){ for_group.push(5) } else { for_group.push(4) }
                }
            } else if (loose_players === 3){
                // create a new group
                groups += 1
                for (let index = 0; index < groups; index++) {
                    if(index === 0 ){ for_group.push(3) } else { for_group.push(4) }
                }
            }

            console.log(for_group)

            // one cabeza de serie by group (cs == n group)
            const all_players = []
            const players = []
            const cs_players = []
            this.props.player.map((player_key) => { 
                let p = player_key.val()
                all_players.push({playerId:player_key.key, club:p.club, cs:p.cabeza_serie, has_gruop: false})
                if(p.cabeza_serie === true){
                    cs_players.push({playerId:player_key.key, club:p.club, cs:p.cabeza_serie, has_gruop: false})
                }else {
                    players.push({playerId:player_key.key, club:p.club, cs:p.cabeza_serie, has_gruop: false})
                }
            })

            if(for_group.length < cs_players.length){
                console.log("Error: existen mas jugadores cabezas de serie que grupos, deseleccione x jugadores para que no sean cabezas de serie")                
            }

            /*
             push players in groups
            */
            var group = []

            for (let index = 0; index < for_group.length; index++) {
                const n = for_group[index]
                console.log(`Grupo : ${index} tiene ${n} jugadores`) 

                if (cs_players[index] !== undefined) {
                    group.push(cs_players[index])
                    cs_players[index].has_gruop = true
                }

                for (let i = 0; i < players.length; i++) {
                    if (group.length < n && players[i].has_gruop === false) {
                        group.push(players[i])
                        players[i].has_gruop = true
                    }
                } 

                if(group.length === n){
                    var ref = firebase.database().ref(`open/${this.props.open_key}/grupos`)
                    if(n === 5){
                        ref.push({
                            name: `Grupo ${ABECEDARIO[index]}`,
                            players : { player1: group[0].playerId,
                                        player2: group[1].playerId,
                                        player3: group[2].playerId,
                                        player4: group[3].playerId,
                                        player5: group[4].playerId}
                        })
                        group = []
                    } else if(n === 4){
                        ref.push({
                            name: `Grupo ${ABECEDARIO[index]}`,
                            players : { player1: group[0].playerId,
                                        player2: group[1].playerId,
                                        player3: group[2].playerId,
                                        player4: group[3].playerId}
                        })
                        group = []
                    } else if(n === 3){
                        ref.push({
                            name: `Grupo ${ABECEDARIO[index]}`,
                            players : { player1: group[0].playerId,
                                        player2: group[1].playerId,
                                        player3: group[2].playerId}
                        })
                        group = []
                    } 
                }
                 
            }
            // finish created group
            this.props.created_group(this.props.open_key)
        }
    }

    
    render() {
        return (
            <div>
                { this.props.created_group_ok ? "Grupos" : 
                    <Message text="Debe cerrar las inscripciones para crear los grupos." />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suscription_close : state.suscription_close,
        player: state.player,
        open_key: state.open_key,
        created_group_ok: state.created_group
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        created_group: (open_key) => {
            var ref = firebase.database().ref().child(`open/${open_key}`)
            ref.update({created_group: true})
            dispatch({type: 'CREATED_GROUP', data: true})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGrupo)