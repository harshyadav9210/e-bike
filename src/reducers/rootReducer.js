import {combineReducers} from 'redux';
import userReducer from './userReducer';
import timeReducer from './timeReducer';


const rootReducer = combineReducers({
    user: userReducer,
    time:timeReducer
});

export default rootReducer;