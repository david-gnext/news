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
      </div>
    )
  }
}

export default Menu
