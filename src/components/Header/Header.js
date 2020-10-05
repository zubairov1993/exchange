import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div className="main-header">
          <div className="container">
            <h1 className="site-title">React Lite Level</h1>
          </div>
        </div>
        <Nav />
      </header>
    );
  }
}

export default Header;
