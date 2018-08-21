import React from 'react';
import {NavBar} from './NavBar';
import {AboutPage} from './AboutPage';
import {Sherry101} from './Sherry101';
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
          <Route path='/sherry-101' component={Sherry101} />
          <Footer />
      </div>
    </Router>
  );
}
