
// this will not work with outside API call... 
// sherries are listed under json.results 
// but we may use rake to get outside API so no matter
export const fetchSherries = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SHERRY'});
        return fetch('/api/sherries')
                .then(resp => resp.json())
                .then(sherries => dispatch({ type: 'FETCH_SHERRIES', sherries }))
    }
}