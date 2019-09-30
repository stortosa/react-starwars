import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    const navStyle = {
      color: 'black'
    };

    return (
      <div>
        <div>
          <section className="sec1">
            <h1>STARWARS UNIVERSE</h1>
            <Link style={navStyle} to="/starwars">
              <button>Star Wars Films</button>
            </Link>
            <Link style={navStyle} to="/planets">
              <button>Planets</button>
            </Link>
          </section>
          <section className="secText">
            <h1>VISIT THE PEOPLE AND SPECIES THAT APPEAR INTO THE FILM:</h1>
          </section>
          <section className="sec2">
            <Link style={navStyle} to="/people">
              <button>People</button>
            </Link>
            <Link style={navStyle} to="/species">
              <button>Species</button>
            </Link>
          </section>
          <section className="secText">
            <h1>VEHICLES AND STARSHIPS ABOUT STARWARS</h1>
          </section>
          <section className="sec3">
            <Link style={navStyle} to="/vehicles">
              <button>Vehicles</button>
            </Link>
            <Link style={navStyle} to="/starships">
              <button>Starships</button>
            </Link>
          </section>
          <section className="secText"></section>
        </div>
      </div >
    )
  }
}
