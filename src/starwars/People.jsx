import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class People extends Component {
  constructor() {
    super()
    this.state = {
      peopleList: []
    };

  }

  getPeople = () => {

    axios.get(`https://swapi.co/api/people/?format=json`)

      .then(response => {
        this.setState({
          //metemos los "results" en peopleList luego solo poner el dato que queremos sacar
          peopleList: response.data.results
        })
        console.log(response.data.results)
        // console.log(this.state.peopleList)
      })

  }

  componentDidMount() {
    this.getPeople();
  }
  render() {
    return (
      <div className="starwars">
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
