
export const fetchSherries = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SHERRY'});
        return fetch('/api/sherries')
                .then(resp => resp.json())
                .then(sherries => dispatch({ type: 'FETCH_SHERRIES', sherries }))
    }
}

export const addComment = (comment) => {
    return (dispatch) => {
        dispatch({type: 'POSTING_COMMENT'});
        return fetch('/api/create_comment', {method: 'POST', body: JSON.stringify(comment)})
                .then(resp => resp.json())
                .then(comment => dispatch({ type: 'ADD_COMMENT', comment }))
    }
}