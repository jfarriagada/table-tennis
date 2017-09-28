import React from 'react'
// Componenst
import ListOpen from './ListOpen'
import CreateOpen from './CreateOpen'

const Open = (props) => {

    return(
        <div className="columns">
            <CreateOpen />
            <ListOpen />
        </div>
    )
}

export default Open
