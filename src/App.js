import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Show from './components/show';
import Menu from './components/menu';
import Home from './components/home';

import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <main className="main-content">
        <Switch>
          <Route exact path='/' component={Home}/>
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
