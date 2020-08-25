import React from 'react';
import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
// import PlanetDetails from '../PlanetDetails';
// import StarshipDetails from '../StarshipDetails';
import RandomPlanet from '../RandomPlanet';


const App = () => {
    return (
      <div>
        <Header />
        <RandomPlanet />
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  };

export default App;