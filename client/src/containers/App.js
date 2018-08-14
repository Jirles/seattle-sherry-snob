import React, { Component } from 'react';
import {SherryList} from '../components/SherryList';
import {NavBar} from '../components/NavBar';
import {AboutPage} from '../components/AboutPage';
import {BrowserRouter as Router,
        Route} from 'react-router-dom';
import SherryShow from './SherryShow';


class App extends Component {
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

  render() {
    return (
      <Router>
        <div>
            <NavBar />
            This is the App Component
            <p>This is the current state of sherries:</p>
            <p>{this.state.sherries.length}</p>
          
            <Route exact path='/' sherries={this.state.sherries} component={SherryList} />
            <Route path='/about' component={AboutPage} />
            <Route path='/sherries/:sherryId' component={SherryShow}/>
        </div>
      </Router>
    );
  }
}

export default App;
