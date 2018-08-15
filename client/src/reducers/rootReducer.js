//import { combineReducers } from 'redux';

export function rootReducer(state = {sherries: []}, action){
    switch(action.type){
        case 'FETCH_SHERRIES':
            return { sherries: action.sherries }
        case 'ADD_COMMENT':
            const sherry = state.sherries.filter(sherry => sherry.id === action.comment.sherry_id);
            sherry.comments = [...sherry.comments, action.comment]
            return { sherries: [...state.sherries, sherry] }
        default:
            return state;
    }
}