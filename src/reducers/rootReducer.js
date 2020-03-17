import {combineReducers} from 'redux'
import  songReducer from './songReducer'
import journalReducer from './journalReducer'

const rootReducer = combineReducers({
    songReducer, 
    journalReducer
})

export default rootReducer