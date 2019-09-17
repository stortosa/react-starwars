import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Planets extends Component {
  constructor() {
    super()
    this.state = {
      planetsList: [],
    };
    
  }

  getPlanets = () => {

    let allPlanets = [];

    fetch('https://swapi.co/api/planets/')
      .then(response => {
       return response.json();
       }) 
       .then(json => {
        console.log(json.results);
          json.results.forEach((element, idx) => {
            allPlanets.push(element)
            // console.log(allPlanets)
          })
      });

      fetch('https://swapi.co/api/planets/?page=2')
      .then(response => {
       return response.json();
       }) 
       .then(jsonOne => {
        console.log(jsonOne.results);
          jsonOne.results.forEach((element, idx) => {
            allPlanets.push(element)
            // console.log(allPlanets)
          })
      });

      fetch('https://swapi.co/api/planets/?page=3')
      .then(function(response) {
        return response.json();
      })
      .then(jsonTwo => {
        // console.log(jsonTwo.results); //sacado tb bien

        jsonTwo.results.forEach((element, idx) => {
            allPlanets.push(element)
            // console.log(allPlanets)
        })
      });

      fetch('https://swapi.co/api/planets/?page=4')
      .then(function(response) {
        return response.json();
      })
      .then(jsonThree => {
        // console.log(jsonThree.results);
        jsonThree.results.forEach((element, idx) => {
            allPlanets.push(element)
            // console.log(allPlanets)
        })
      });

      fetch('https://swapi.co/api/planets/?page=5')
      .then(function(response) {
        return response.json();
      })
      .then(jsonFour => {
        // console.log(jsonFour.results);
        jsonFour.results.forEach((element, idx) => {
            allPlanets.push(element)
            // console.log(allPlanets)
        })
      });

      fetch('https://swapi.co/api/planets/?page=6')
      .then(function(response) {
        return response.json();
      })
      .then(jsonFive => {
        // console.log(jsonFive.results);
        jsonFive.results.forEach((element, idx) => {
            allPlanets.push(element)
            // console.log(allPlanets)
        })
      });

      fetch('https://swapi.co/api/planets/?page=7')
      .then(function(response) {
        return response.json();
      })
      .then(jsonSix => {
        // console.log(jsonSix.results);
        jsonSix.results.forEach((element, idx) => {
            allPlanets.push(element)
            console.log(allPlanets)
        })
      })
      .then(() => {
        this.setState({
          //metemos los "results" en peopleList luego solo poner el dato que queremos sacar
          planetsList: allPlanets,
        })
        console.log(this.state)
      })
  }

  sortByName() {
    let orderedList = [...this.state.planetsList];

    orderedList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ...this.state,
      planetsList: orderedList
    })
    console.log(this.state.planetsList)
  }

  sortByDiameter() {
    let orderedListD = [...this.state.planetsList];

    orderedListD.sort((a, b) => {
      if (a.diameter > b.diameter) {
        return 1;
      } if (a.diameter < b.diameter) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ...this.state,
      planetsList: orderedListD
    })
    console.log(this.state.planetsList)
  }

  sortByRotation(){
    let orderedListR = [...this.state.planetsList];

    orderedListR.sort((a, b) => {
      if (a.rotation_period > b.rotation_period) {
        return 1;
      } if (a.rotation_period < b.rotation_period) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ...this.state,
      planetsList: orderedListR
    })
    console.log(this.state.planetsList)
  }

  componentDidMount() {
    this.getPlanets();
    this.sortByName();
    this.sortByDiameter();
    this.sortByRotation();
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.sortByName()}>Sort by Name</button>
          <button onClick={() => this.sortByDiameter()}>Sort by Diameter</button>
          <button onClick={() => this.sortByRotation()}>Sort by Rotation Period</button>
        </div>
        <div className="container">
          <table>
            <thead className="tablehead">
              <tr className="">
                <th className="namerow"><h2>Planet Name:</h2></th>
                <th><h3>Orbital Period:</h3></th>
                <th><h3>Diameter:</h3></th>
                <th><h3>Terrain:</h3></th>
                <th><h4>Gravity:</h4></th>
                <th><h4>Rotation Period:</h4></th>
              </tr>
            </thead>
            <tbody className="tablebody">
              {this.state.planetsList.map((planet, idx) => (
                <tr className="">
                  <td><h3>{planet.name}</h3></td>
                  <td><h3>{planet.orbital_period}</h3></td>
                  <td><h5>{planet.diameter}</h5></td>
                  <td><h5>{planet.terrain}</h5></td>
                  <td><h5>{planet.gravity}</h5></td>
                  <td><h5>{planet.rotation_period}</h5></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>  
    )
  }
}
