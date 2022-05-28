import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'
import superv from './superReducer'




export default combineReducers({
    auth,
    token,
    users,
    superv

})