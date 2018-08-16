//import { combineReducers } from 'redux';

export function rootReducer(state = {sherries: []}, action){
    switch(action.type){
        case 'FETCH_SHERRIES':
            return { sherries: action.sherries }
        case 'FILTER_SHERRY_RESULTS':
            console.log('action: ', action);
            const filteredByPrice = state.sherries.filter(sherry => action.filters.minPrice <= sherry.price && action.filters.maxPrice >= sherry.price);
            const filteredByPriceAndSweetness = filteredByPrice.filter(sherry => {
                if (action.filters.sweetnessFilter === 'Both'){
                    return true;
                } else {
                    return sherry.sugar_content.includes(action.filters.sweetnessFilter);
                }
            });
            return { sherries: filteredByPriceAndSweetness };
        case 'ADD_COMMENT':
            const sherry = state.sherries.find(sherry => sherry.id === action.comment.sherry_id);
            sherry.comments = [action.comment, ...sherry.comments];
            return { sherries: [...state.sherries, sherry] };
        default:
            return state;
    }
}