import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 


export default class Starwars extends Component {
  render() {
    return (
      <div>
        <Link to="/planets">
            <li>Planets</li>
        </Link>
        <Link to="/people">
            <li>People</li>
        </Link>
        <Link to="/species">
            <li>Species</li>
        </Link>
        <Link to="/vehicles">
            <li>Vehicles</li>
        </Link>
        <Link to="/starships">
            <li>Starships</li>
        </Link>
        <h1>Films of Star Wars:</h1>

      </div>
    )
  }
}
