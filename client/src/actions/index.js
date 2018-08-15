
export const fetchSherries = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SHERRY'});
        return fetch('http://localhost:3001/api/sherries')
                .then(resp => resp.json())
                .then(sherries => dispatch({ type: 'FETCH_SHERRIES', sherries }))
    }
}

export const addComment = (comment) => {
    return (dispatch) => {
        dispatch({type: 'POSTING_COMMENT'});
        return fetch('http://localhost:3001/api/comments', 
                    {headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                     method: 'POST', 
                     mode: 'cors',
                     body: JSON.stringify(comment)}
                    )
                .then(resp => resp.json())
                .then(comment => dispatch({ type: 'ADD_COMMENT', comment }))
                .catch(err => console.log(err))
    }
}

export const filterSherryResults = (filters) => {
    return (dispatch) => {
        return dispatch({type: 'FILTER_SHERRY_RESULTS', filters});
    }
    
}