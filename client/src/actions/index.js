
export const fetchSherries = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SHERRY'});
        return fetch('/api/sherries')
                .then(resp => resp.json())
                .then(sherries => dispatch({ type: 'FETCH_SHERRIES', sherries }))
    }
}

export const fetchSherry = (id) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SHERRY'});
        return fetch(`/api/sherries/${id}`)
                .then(resp => resp.json())
                .then(sherry => dispatch({ type: 'FETCH_SHERRY', sherry }))
    }
}