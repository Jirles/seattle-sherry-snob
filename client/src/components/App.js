import React from 'react';
//import SherryList from '../containers/SherryList';
import {NavBar} from './NavBar';
import {AboutPage} from './AboutPage';
import {BrowserRouter as Router,
        Route} from 'react-router-dom';
import {Footer} from './Footer';
import SherryPage from '../containers/SherryPage';


export const App = () => {

  return (
    <Router>
      <div>
          <NavBar />

          <Route path='/' component={SherryPage} />
          <Route path='/about' component={AboutPage} />
          <Footer />
      </div>
    </Router>
  );
}
