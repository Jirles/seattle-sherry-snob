//import { combineReducers } from 'redux';

export function rootReducer(state = {sherries: []}, action){
    switch(action.type){
        case 'FETCH_SHERRIES':
            return { sherries: action.sherries }
        case 'FILTER_SHERRY_RESULTS':
            console.log('action sent: ', action);
            break;
        case 'ADD_COMMENT':
            const sherry = state.sherries.find(sherry => sherry.id === action.comment.sherry_id);
            sherry.comments = [action.comment, ...sherry.comments];
            return { sherries: [...state.sherries, sherry] }
        default:
            return state;
    }
}