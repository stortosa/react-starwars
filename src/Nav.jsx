import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    const navStyle = {
      color: 'rgb(245, 246, 51)',
      width: '70%',
      display: 'flex',
      margin: '5px',
      padding: '5px',
    };

    return (
      <nav>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/starwars">
            <li>Star Wars</li>
          </Link>
          <Link style={navStyle} to="/planets">
            <li>Planets</li>
          </Link>
          <Link style={navStyle} to="/people">
            <li>People</li>
          </Link>
          <Link style={navStyle} to="/species">
            <li>Species</li>
          </Link>
          <Link style={navStyle} to="/vehicles">
            <li>Vehicles</li>
          </Link>
          <Link style={navStyle} to="/starships">
            <li>Starships</li>
          </Link>
        </ul>
      </nav >
    )
  }
}
