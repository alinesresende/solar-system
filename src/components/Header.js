import React from 'react';
import '../App.css';
import logoSolarSystem from '../images/logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header className="logoSystem">
        <h1>Sistema Solar</h1>
        <img src={ logoSolarSystem } alt="sistema solar" className="logImg" />
      </header>
    );
  }
}

export default Header;
