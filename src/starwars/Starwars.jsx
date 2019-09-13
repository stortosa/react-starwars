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
    const navStyle = {
      color: 'white'
    };

    return (
      <div>
        <h1>Films of Star Wars:</h1>

        {/* <ul>{this.state.filmList.map(film => <li>{film.title}</li>)}</ul> */}

        <div className="starwars">
          <table>
            <thead className="">
              <tr>
                <th><h2>Title</h2></th>
                <th><h3>Director</h3></th>
                <th><h3>Producer</h3></th>
                <th><h4>Release Date</h4></th>
                <th><h4>Episode Id</h4></th>
                <th><h4>Opening Crawl</h4></th>
              </tr>
            </thead>
            <tbody className="">
              {this.state.filmList.map((film, idx) => (
                <tr>
                  <td><h3>{film.title}</h3></td>
                  <td><h3>{film.director}</h3></td>
                  <td><h5>{film.producer}</h5></td>
                  <td><h5>{film.release_date}</h5></td>
                  <td><h5>{film.episode_id}</h5></td>
                  <td><p>{film.opening_crawl}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div >
    )
  }
}
