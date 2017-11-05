import React,{ Component } from 'react'
import { connect, dispatch } from 'react-redux'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
// Components
import CreatePlayer from '../Player/CreatePlayer'
import ListPlayer from '../Player/ListPlayer'
import CreateGrupo from '../Grupo/CreateGrupo'
import Llave from '../Llave/Llave'


class OpenId extends Component {

    constructor(props) {
        super(props)
        this.state = {nav: "player"}
    
        // This binding is necessary to make `this` work in the callback
        this.handleClickPlayer = this.handleClickPlayer.bind(this)
        this.handleClickLlave = this.handleClickLlave.bind(this)
        this.handleClickGrupo = this.handleClickGrupo.bind(this)
    }
    
    componentWillMount(){
        this.props.clear_data()
        this.props.get_open()
        this.props.get_open_key()
        console.log("openid")
    }
    
    componentWillUnmount(){
        this.props.clear_open_key()
    }

    handleClickPlayer() {
        this.setState({nav : "player"})
    }
    
    handleClickGrupo() {
        this.setState({nav : "grupo"})
    }
    handleClickLlave() {
        this.setState({nav : "llave"})
    }

    show() {
        console.log("show nav : " + this.props.open_key)
        if (this.state.nav === "grupo") {
            return(
                <div>
                    <CreateGrupo />
                </div>
            )
        }
        else if (this.state.nav === "llave") {
            return(
                <div className="columns">
                    <Llave />
                </div>
            )
        } else {
            return(
                <div className="columns">
                    <CreatePlayer />
                    <ListPlayer />
                </div>
            )
        }
    }

    render(){

        return(
            <div>
                <div className="columns">           
                    <div className="column">
                        <p className="title">{this.props.open_item.name} - {this.props.open_item.city}</p>
                    </div>
                    <div className="column">
                        <button onClick={this.handleClickPlayer}>Jugadores</button>
                        <button onClick={this.handleClickGrupo}>Grupos</button>
                        <button onClick={this.handleClickLlave}>Llaves</button>
                    </div>        
                </div>
                <div>
                    {this.show()}
                </div>
            </div>
        )
    }
}  


const mapStateToProps = (state) => {
    return {
        open_item : state.open_item,
        open_key : state.open_key
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        get_open: () => {
            firebase.database().ref('/open/' + ownProps.match.params.id).once('value')
            .then(function(snapshot) {
                var open = snapshot.val() 
                dispatch({type:'OPEN_ITEM', data: open})
            })
        },
        get_open_key: () => {
            dispatch({type:'OPEN_KEY', data: ownProps.match.params.id})
        },
        clear_open_key: () => {
            dispatch({type: 'OPEN_KEY_CLEAR'})
        },
        clear_data: () => {
            dispatch({type: 'PLAYER_CLEAR'})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenId)