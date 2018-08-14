//import { combineReducers } from 'redux';
import { fetchSherries } from '../actions/index';

export function rootReducer(state = {sherries: []}, action){
    switch(action.type){
        case 'FETCH_SHERRIES':
            return { sherries: action.sherries }
        default:
            return state;
    }
}