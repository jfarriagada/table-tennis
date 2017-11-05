import { createStore, combineReducers } from 'redux'
// redux form
import { reducer as formReducer } from 'redux-form'

// reducers que devuelven un nuevo estado

const session = (state={}, action) => {
    var new_state = Object.assign({}, state)
    switch (action.type) {
        case 'USER_AUTH':
            new_state = action.user
            return new_state
        case 'USER_LOGOUT':
            new_state = null
            return new_state
        default:
            return state
    }
}

const open = (state=[], action) => {
    var new_state = Object.assign({}, state)
    switch (action.type) {
        case 'OPEN_LIST':
            new_state = state.concat(action.data)
            return new_state
        case 'OPEN_CLEAR':
            new_state = []
            return new_state
        default:
            return state
    }
}

const open_item = (state={}, action) => {
    var new_state = Object.assign({}, state)
    switch (action.type) {
        case 'OPEN_ITEM':
            new_state = action.data
            return new_state
        default:
            return state
    }
}

const open_key = (state=[], action) => {
    var new_state = Object.assign({}, state)
    switch (action.type) {
        case 'OPEN_KEY':
            new_state = action.data
            return new_state
        case 'OPEN_KEY_CLEAR':
            new_state = []
            return new_state
        default:
            return state
    }
}

const player = (state=[], action) => {
    var new_state = Object.assign({}, state)
    switch (action.type) {
        case 'PLAYER_LIST':
            new_state = state.concat(action.data)
            return new_state
        case 'PLAYER_CLEAR':
            new_state = []
            return new_state
        default:
            return state
    }
}

const suscription_close = (state=false, action) => {
    var new_state = Object.assign({}, state)
    switch (action.type) {
        case 'SUSCRIPTION_CLOSE':
            new_state = action.data
            return new_state
        default:
            return state
    }
}

const created_group = (state=false, action) => {
    var new_state = Object.assign({}, state)
    switch (action.type) {
        case 'CREATED_GROUP':
            new_state = action.data
            return new_state
        default:
            return state
    }
}

const reducer = combineReducers({
    form: formReducer,
    session,
    open,
    open_item,
    open_key,
    player,
    suscription_close,
    created_group
})

const store = createStore(reducer)

export default store
