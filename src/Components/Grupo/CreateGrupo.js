import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { reset } from 'redux-form'
// Component

// Array jugadores
var players_cs = []
var players_no_cs = []

class CreateGrupo extends Component {

    componentDidMount(){
        
        /* 
            Detectar si el numero de Jugadores ha cambiado,
            Si ha cambiado se actualizan los grupos, si no ha cambiado quedan igual
        */
        /*var players = firebase.database().ref(`open/${this.props.open_key}/players`)
        players.on('child_added', function(snapshot) {

        })*/
        
        

        // Jugadores 
        this.list_player()

        // Obtener los grupos a partir de los jugadores
        var grupos = Math.floor(this.props.player.length / 4)
        var jugadores_sueltos = this.props.player.length % 4

        var ref = firebase.database().ref(`open/${this.props.open_key}/grupos`)
        
        var cs = 0
        var nocs = 0
        for (var i=0; i < grupos; i++) {

            if (cs < players_cs.length) {
                if (nocs < players_no_cs.length) {
                    /*console.log('cs : ' + players_cs[cs].name)
                    console.log('no cs : ' + players_no_cs[nocs].name)
                    console.log('no cs : ' + players_no_cs[nocs+1].name)
                    console.log('no cs : ' + players_no_cs[nocs+2].name)*/

                    // save firebase grupo
                    /*ref.push({
                        name: "letra" + i,
                        player1: players_cs[cs],
                        player2: players_no_cs[nocs],
                        player3: players_no_cs[nocs+1],
                        player4: players_no_cs[nocs+2]
                    })
                    .catch(response => console.log(response))
                    .catch(error => console.log(error))*/

                    nocs += 3
                }   
                cs++
            } else {
                if (nocs < players_no_cs.length) {
                    /*console.log('NO cs : ' + players_no_cs[nocs].name)
                    console.log('NO cs : ' + players_no_cs[nocs+1].name)
                    console.log('NO cs : ' + players_no_cs[nocs+2].name)
                    console.log('NO cs : ' + players_no_cs[nocs+4].name)*/

                    // save firebase grupo
                    /*ref.push({
                        name: "letra" + i,
                        player1: players_no_cs[nocs],
                        player2: players_no_cs[nocs+1],
                        player3: players_no_cs[nocs+2],
                        player4: players_no_cs[nocs+3]
                    })
                    .catch(response => console.log(response))
                    .catch(error => console.log(error))*/

                    nocs += 4
                }  
            }
        }
    }   

    componentWillUnmount(){
        this.props.clear_players()
    }
    

    // Crear arrays de jugadores cabezas se serie y no cabezas de serie
    list_player = () => {
        const list = this.props.player.map((player) => {
            if(player.cabeza_serie === true){
                players_cs.push(player)
            } else {
                players_no_cs.push(player)
            }
        })
    }
    
    render(){
        return(
            <section className="hero"> 
                <div className="hero-body">        
                    <h1 className="title">Crear Campeonato</h1>
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
        clear_players: () => {
            dispatch({type: 'PLAYER_CLEAR'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGrupo)