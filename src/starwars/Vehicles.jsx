import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Vehicles extends Component {
  constructor() {
    super()
    this.state = {
      vehiclesList: [],
    };
    
  }

  getStarships = () => {

    let allvehicles = [];

    fetch('https://swapi.co/api/vehicles/')
      .then(response => {
       return response.json();
       }) 
       .then(json => {
        console.log(json.results);
          json.results.forEach((element, idx) => {
            allvehicles.push(element)
            // console.log(allvehicles)
          })
      });

      fetch('https://swapi.co/api/vehicles/?page=2')
      .then(response => {
       return response.json();
       }) 
       .then(jsonOne => {
        console.log(jsonOne.results);
          jsonOne.results.forEach((element, idx) => {
            allvehicles.push(element)
            // console.log(allvehicles)
          })
      });

      fetch('https://swapi.co/api/vehicles/?page=3')
      .then(function(response) {
        return response.json();
      })
      .then(jsonTwo => {
        // console.log(jsonTwo.results); //sacado tb bien

        jsonTwo.results.forEach((element, idx) => {
            allvehicles.push(element)
            // console.log(allvehicles)
        })
      });

      fetch('https://swapi.co/api/vehicles/?page=4')
      .then(function(response) {
        return response.json();
      })
      .then(jsonThree => {
        // console.log(jsonThree.results);
        jsonThree.results.forEach((element, idx) => {
            allvehicles.push(element)
            // console.log(allvehicles)
        })
      })
       .then(() => {
        this.setState({
          //metemos los "results" en peopleList luego solo poner el dato que queremos sacar
          vehiclesList: allvehicles,
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
              <th className="namerow"><h2>Vehicle Name:</h2></th>
              <th><h3> Vehicle Model:</h3></th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {this.state.vehiclesList.map((vehicle, idx) => (
              <tr className="">
                <td><h3>{vehicle.name}</h3></td>
                <td><h3>{vehicle.model}</h3></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
