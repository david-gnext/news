import React from 'react'
import '../css/header.css';
const Header = () => (
  <header className="App-header blue-grey lighten-4">
    <div className="row">
      <div className="col s3">
        <i className="material-icons">menu</i>
      </div>
      <div className="col s6 center-align">News</div>
      <div className="col s3">Login</div>
    </div>
  </header>
)
export default Header
