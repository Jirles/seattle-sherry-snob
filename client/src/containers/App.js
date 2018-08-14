import React, { Component } from 'react';
import {SherryList} from '../components/SherryList';
import {NavBar} from '../components/NavBar';
import {AboutPage} from '../components/AboutPage';
import {BrowserRouter as Router,
        Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <NavBar />
            This is the App Component
          
            <Route exact path='/' component={SherryList} />
            <Route path='/about' component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
