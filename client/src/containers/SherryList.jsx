import React from 'react';
import {SherryCard} from '../components/SherryCard';

class SherryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sherries: []
        }
      }
    
    componentDidMount(){
    fetch('/api/sherries')
        .then(resp => resp.json())
        .then(json => this.setState({sherries: json}))
        .catch(err => console.log('An error occurred: ', err))
    }

    renderSherries = () => {
        return this.state.sherries.map(sherry => <SherryCard key={sherry.id} sherry={sherry} />)
    }

    render(){
        return (
            <div>
                <h1>Sherry, the civilized drink.</h1>
                <small><em>- W. Somerset Maugham</em></small>
                {this.renderSherries()}
                
            </div>
        )
    }
}

export default SherryList;