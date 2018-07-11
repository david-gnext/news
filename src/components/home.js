import React from 'react'
import Feature from './feature'
import Top from './top'

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <Feature/>
        <Top/>
        <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

  <ul id='dropdown1' className='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li className="divider" tabIndex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
  </ul>

      </div>
    )
  }
}

export default Menu
