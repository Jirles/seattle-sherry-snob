
// this will not work with outside API call... 
// sherries are listed under json.results
export const fetchSherries = () => {
    return fetch('/api/sherries')
        .then(resp => resp.json())
        .catch(err => console.log('An error occurred: ', err))
}