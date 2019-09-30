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
            {/* <div className="btn-home">
              <Link style={navStyle} to="/starwars">
                <button className="starbtn">Star Wars Films</button>
              </Link>
              <Link style={navStyle} to="/planets">
                <button className="starbtn">Planets</button>
              </Link>
            </div> */}
          </section>
          <section className="secText">
            <h1>VISIT THE PEOPLE AND SPECIES THAT APPEAR INTO THE FILM</h1>
          </section>
          <section className="sec2">
            {/* <div>
              <Link style={navStyle} to="/people">
                <button className="starbtn">People</button>
              </Link>
              <Link style={navStyle} to="/species">
                <button className="starbtn">Species</button>
              </Link>
            </div> */}
          </section>
          <section className="secText">
            <h1>VEHICLES AND STARSHIPS ABOUT STARWARS</h1>
          </section>
          <section className="sec3">
            {/* <div>
              <Link style={navStyle} to="/vehicles">
                <button className="starbtn">Vehicles</button>
              </Link>
              <Link style={navStyle} to="/starships">
                <button className="starbtn">Starships</button>
              </Link>
            </div> */}
          </section>
          <section className="secText"></section>
        </div>
      </div >
    )
  }
}
