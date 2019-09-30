import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Starwars from './starwars/Starwars';
import Planets from './starwars/Planets';
import Species from './starwars/Species';
import Starships from './starwars/Starships';
import Vehicles from './starwars/Vehicles';
import People from './starwars/People';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route paht='/' component={Home} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/starwars" exact component={Starwars} />
          <Route path="/planets" exact component={Planets} />
          <Route path="/species" exact component={Species} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/starships" exact component={Starships} />
          <Route path="/people" exact component={People} />
        </Switch>
      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// );

export default App;
