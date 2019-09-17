import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Species extends Component {
  constructor() {
    super()
    this.state = {
      speciesList: [],
    };
    
  }

  getSpecies = () => {

    let allSpecies = [];

    fetch('https://swapi.co/api/species/')
      .then(response => {
       return response.json();
       }) 
       .then(json => {
        console.log(json.results);
          json.results.forEach((element, idx) => {
            allSpecies.push(element)
            // console.log(allSpecies)
          })
      });

      fetch('https://swapi.co/api/species/?page=2')
      .then(response => {
       return response.json();
       }) 
       .then(jsonOne => {
        console.log(jsonOne.results);
          jsonOne.results.forEach((element, idx) => {
            allSpecies.push(element)
            // console.log(allSpecies)
          })
      });

      fetch('https://swapi.co/api/species/?page=3')
      .then(function(response) {
        return response.json();
      })
      .then(jsonTwo => {
        // console.log(jsonTwo.results); //sacado tb bien

        jsonTwo.results.forEach((element, idx) => {
            allSpecies.push(element)
            // console.log(allSpecies)
        })
      });

      fetch('https://swapi.co/api/species/?page=4')
      .then(function(response) {
        return response.json();
      })
      .then(jsonThree => {
        // console.log(jsonThree.results);
        jsonThree.results.forEach((element, idx) => {
            allSpecies.push(element)
            // console.log(allSpecies)
        })
      })
       .then(() => {
        this.setState({
          //metemos los "results" en peopleList luego solo poner el dato que queremos sacar
          speciesList: allSpecies,
        })
        console.log(this.state)
      });
  }

  componentDidMount() {
    this.getSpecies();
  }

  render() {
    return (
      <div className="container">
        <table>
          <thead className="tablehead">
            <tr className="">
              <th className="namerow"><h2>Specie Name:</h2></th>
              <th><h3>Classification:</h3></th>
              <th><h3>Language:</h3></th>
              <th><h3>Skin Color:</h3></th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {this.state.speciesList.map((specie, idx) => (
              <tr className="">
                <td><h3>{specie.name}</h3></td>
                <td><h3>{specie.classification}</h3></td>
                <td><h5>{specie.language}</h5></td>
                <td><h5>{specie.skin_colors}</h5></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
