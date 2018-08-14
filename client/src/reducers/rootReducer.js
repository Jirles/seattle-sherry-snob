//import { combineReducers } from 'redux';
import { fetchSherries } from '../actions/index';

export function rootReducer(state = [], action){
    switch(action.type){
        case 'FETCH_SHERRIES':
            const sherries = fetchSherries();
            return { state: sherries }
        default:
            return state;
    }
}