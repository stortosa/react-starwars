import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Starwars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmList: []
    };

  }

  getFilms = () => {

    axios.get(`https://swapi.co/api/films/`)

      .then(response => {
        this.setState({
          //metemos los "results" en filmList luego solo poner el dato que queremos sacar
          filmList: response.data.results
        })
        console.log(response.data.results)
        // console.log(this.state.filmList)
      })

  }



  componentDidMount() {
    this.getFilms();
  }

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

      <ul>{this.state.filmList.map(film => <li>{film.title}</li>)}</ul>
      
      </div >
    )
  }
}
