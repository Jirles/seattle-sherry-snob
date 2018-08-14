
// this will not work with outside API call... 
// sherries are listed under json.results 
// but we may use rake to get outside API so no matter
export const fetchSherries = () => {
    const sherries = fetch('/api/sherries')
        .then(resp => resp.json())
    return {
        type: 'FETCH_SHERRIES',
        sherries
    }
}