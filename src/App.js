import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Show from './components/show';
import Menu from './components/menu';

import { Switch, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <main>
        <Switch>
          <Route path='/:string' component={Show}/>
        </Switch>
        </main>

        <footer>
          Your copyright message
        </footer>
      </div>
    );
  }
}

export default App;
