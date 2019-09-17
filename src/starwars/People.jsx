import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class People extends Component {
  constructor() {
    super()
    this.state = {
      peopleList: [],
    };
    
  }

  // getPeople = () => {

  //   axios.get(`https://swapi.co/api/people/?format=json`)

  //     .then(response => {
  //       this.setState({
  //         //metemos los "results" en peopleList luego solo poner el dato que queremos sacar
  //         peopleList: response.data.results
  //       })
  //       console.log(response.data.results)
  //       // console.log(this.state.peopleList)
  //     })

  // }

  getMorePeople = () => {

    let allPeople = [];

    fetch('https://swapi.co/api/people/?format=json')
      .then(response => {
       return response.json();
       }) 
       .then(json => {
        console.log(json.results);
          json.results.forEach((element, idx) => {
            allPeople.push(element)
            // console.log(allPeople)
          })
      });

      fetch('https://swapi.co/api/people/?format=json&page=2')
      .then(response => {
       return response.json();
       }) 
       .then(jsonOne => {
        console.log(jsonOne.results);
          jsonOne.results.forEach((element, idx) => {
            allPeople.push(element)
            // console.log(allPeople)
          })
      });

      fetch('https://swapi.co/api/people/?page=3')
      .then(function(response) {
        return response.json();
      })
      .then(jsonTwo => {
        // console.log(jsonTwo.results); //sacado tb bien

        jsonTwo.results.forEach((element, idx) => {
            allPeople.push(element)
            // console.log(allPeople)
        })
      });

      fetch('https://swapi.co/api/people/?page=4')
      .then(function(response) {
        return response.json();
      })
      .then(jsonThree => {
        // console.log(jsonThree.results);
        jsonThree.results.forEach((element, idx) => {
            allPeople.push(element)
            // console.log(allPeople)
        })
      });

      fetch('https://swapi.co/api/people/?page=5')
      .then(function(response) {
        return response.json();
      })
      .then(jsonFour => {
        // console.log(jsonFour.results);
        jsonFour.results.forEach((element, idx) => {
            allPeople.push(element)
            // console.log(allPeople)
        })
      });

      fetch('https://swapi.co/api/people/?page=6')
      .then(function(response) {
        return response.json();
      })
      .then(jsonFive => {
        // console.log(jsonFive.results);
        jsonFive.results.forEach((element, idx) => {
            allPeople.push(element)
            // console.log(allPeople)
        })
      });

      fetch('https://swapi.co/api/people/?page=7')
      .then(function(response) {
        return response.json();
      })
      .then(jsonSix => {
        // console.log(jsonSix.results);
        jsonSix.results.forEach((element, idx) => {
            allPeople.push(element)
            // console.log(allPeople)
        })
      });

      fetch('https://swapi.co/api/people/?page=8')
      .then(function(response) {
        return response.json();
      })
      .then(jsonSeven => {
        // console.log(jsonSeven.results);
        jsonSeven.results.forEach((element, idx) => {
            allPeople.push(element)
            // console.log(allPeople)
        })
      });

      fetch('https://swapi.co/api/people/?page=9')
      .then(function(response) {
        return response.json();
      })
      .then(jsonEight => {
        // console.log(jsonEight.results);
        jsonEight.results.forEach((element, idx) => {
            allPeople.push(element)
            console.log(allPeople)
        })
      })
      .then(() => {
        this.setState({
          //metemos los "results" en peopleList luego solo poner el dato que queremos sacar
          peopleList: allPeople,
          //  peopleList: response.data.results

        })
        console.log(this.state)
      })
  }

  componentDidMount() {
    // this.getPeople();
    this.getMorePeople();
  }

  render() {
    return (
      <div className="">
        <table>
          <thead className="">
            <tr>
              <th><h2>Name:</h2></th>
              <th><h3>Birth Year</h3></th>
              <th><h3>Mass</h3></th>
              <th><h3>Height</h3></th>
              <th><h4>Gender</h4></th>
            </tr>
          </thead>
          <tbody className="">
            {this.state.peopleList.map((people, idx) => (
              <tr>
                <td><h3>{people.name}</h3></td>
                <td><h3>{people.birth_year}</h3></td>
                <td><h5>{people.mass}</h5></td>
                <td><h5>{people.height}</h5></td>
                <td><h5>{people.gender}</h5></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
