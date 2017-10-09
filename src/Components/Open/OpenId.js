import React from 'react'
import { Link } from 'react-router-dom'
// Components

const OpenId = (props) => {
    return(
        <div>
            <div className="columns">
                <div className="column">
                    <Link to={`/open/${props.open_key}/players`}>Jugadores</Link>
                    <Link to={`/open/${props.open_key}/grupos`}>Grupos</Link>
                    <Link to={`/open/${props.open_key}/llaves`}>Llaves</Link>
                </div>
                <div className="column">
                    <p className="title">{props.open_item_name} - {props.open_item_city}</p>
                </div>
            </div>
        </div>
    )
}  

export default OpenId