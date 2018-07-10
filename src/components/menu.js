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

    const isActive = (name) => (
      this.state.activeName === '/' + name ? 'active' : ''
    )

    return (
      <nav>
        <div className="nav-wrapper light-blue lighten-1 row">
          <ul id="nav-mobile" className="hide-on-med-and-down col m10">
            {
              menu.map((i) => (
                <li className={isActive(i)} key={i}><a href={'/'+i}>{i}</a></li>
              ))
            }
          </ul>
          <a href="#" className="col m2 right-align">Logo</a>
        </div>
      </nav>
    )
  }
}

export default Menu
