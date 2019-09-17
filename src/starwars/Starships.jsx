import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Starships extends Component {
  constructor() {
    super()
    this.state = {
      starshipsList: [],
    };
    
  }

  getStarships = () => {

    let allStarships = [];

    fetch('https://swapi.co/api/starships/')
      .then(response => {
       return response.json();
       }) 
       .then(json => {
        console.log(json.results);
          json.results.forEach((element, idx) => {
            allStarships.push(element)
            // console.log(allStarships)
          })
      });

      fetch('https://swapi.co/api/starships/?page=2')
      .then(response => {
       return response.json();
       }) 
       .then(jsonOne => {
        console.log(jsonOne.results);
          jsonOne.results.forEach((element, idx) => {
            allStarships.push(element)
            // console.log(allStarships)
          })
      });

      fetch('https://swapi.co/api/starships/?page=3')
      .then(function(response) {
        return response.json();
      })
      .then(jsonTwo => {
        // console.log(jsonTwo.results); //sacado tb bien

        jsonTwo.results.forEach((element, idx) => {
            allStarships.push(element)
            // console.log(allStarships)
        })
      });

      fetch('https://swapi.co/api/starships/?page=4')
      .then(function(response) {
        return response.json();
      })
      .then(jsonThree => {
        // console.log(jsonThree.results);
        jsonThree.results.forEach((element, idx) => {
            allStarships.push(element)
            // console.log(allStarships)
        })
      })
       .then(() => {
        this.setState({
          //metemos los "results" en peopleList luego solo poner el dato que queremos sacar
          starshipsList: allStarships,
        })
        console.log(this.state)
      });
  }

  componentDidMount() {
    this.getStarships();
  }

  render() {
    return (
      <div className="container">
        <table>
          <thead className="tablehead">
            <tr className="">
              <th className="namerow"><h2>Starship Name:</h2></th>
              <th><h3>Starship Model:</h3></th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {this.state.starshipsList.map((ship, idx) => (
              <tr className="">
                <td><h3>{ship.name}</h3></td>
                <td><h3>{ship.model}</h3></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
