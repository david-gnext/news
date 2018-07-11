import React from 'react'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeName: window.location.pathname
    }
  }
  render() {
    const menu = ['Sass','News','Technology']

    const isActive = (name, index) => {
      if(this.state.activeName === '/' && index === 0) {
        return 'active'
      }
      return this.state.activeName === '/' + name ? 'active' : ''
    }

    return (
      <nav>
        <div className="nav-wrapper light-blue lighten-1 row">
          <ul id="nav-mobile" className="hide-on-med-and-down col m10">
            {
              menu.map((i, index) => (
                <li className={isActive(i, index)} key={i}><a href={'/'+i}>{i}</a></li>
              ))
            }
          </ul>
          <a href="#" className="col m2 right-align"><i className="material-icons f-4">fiber_new
    </i></a>
        </div>
      </nav>
    )
  }
}

export default Menu
