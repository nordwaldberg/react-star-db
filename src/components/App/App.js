import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import ErrorIndicator from '../ErrorIndicator';
import ErrorBoundry from '../ErrorBoundry';
import { PersonsList, PlanetsList, StarshipsList } from '../SWComponents/';
import { PersonsDetails, PlanetsDetails, StarshipsDetails } from '../SWComponents';


export default class App extends React.Component {

  swapiService = new SwapiService();
  
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
      return <ErrorIndicator />;
    };

    return (
      <ErrorBoundry>
        <div>
          <Header />
          <RandomPlanet />
          <PersonsList />
          <StarshipsDetails itemId={5}/>
        </div>
      </ErrorBoundry>
    );
  };
};