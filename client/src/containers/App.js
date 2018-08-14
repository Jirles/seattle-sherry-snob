import React, { Component } from 'react';
import {SherryList} from '../components/SherryList';
import {NavBar} from '../components/NavBar';
import {AboutPage} from '../components/AboutPage';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        This is the App Component
        <SherryList />
        <AboutPage />
      </div>
    );
  }
}

export default App;
