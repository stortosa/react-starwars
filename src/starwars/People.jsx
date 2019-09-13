import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class People extends Component {
  constructor(){
    super()
    this.state = {
      peopleLis: []
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
        
      </div>
    )
  }
}
