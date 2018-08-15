import React from 'react';
import SherryList from '../containers/SherryList';
import {NavBar} from './NavBar';
import {AboutPage} from './AboutPage';
import {BrowserRouter as Router,
        Route} from 'react-router-dom';
import SherryShow from '../containers/SherryShow';


export const App = () => {

  return (
    <Router>
      <div>
          <NavBar />

          <Route exact path='/' component={SherryList} />
          <Route path='/about' component={AboutPage} />
          <Route path='/sherries/:sherryId' component={SherryShow}/>
      </div>
    </Router>
  );
}
