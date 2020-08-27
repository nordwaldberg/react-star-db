import React from 'react';
import Header from '../Header';
// import ItemList from '../ItemList';
// import PersonDetails from '../PersonDetails';
// import PlanetDetails from '../PlanetDetails';
// import StarshipDetails from '../StarshipDetails';
import RandomPlanet from '../RandomPlanet';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>;
    };

    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  };
};