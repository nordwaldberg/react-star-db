import React from 'react';

import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/SwapiService';
import TestSwapiService from '../../services/TestSwapiService';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import Row from '../Row';

import ErrorIndicator from '../ErrorIndicator';
import ErrorBoundry from '../ErrorBoundry';

import { PersonsList, PlanetsList, StarshipsList } from '../SWComponents/';
import { PersonsDetails, PlanetsDetails, StarshipsDetails } from '../SWComponents';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      hasError: false,
      swapiService: new SwapiService(),
    };
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                      TestSwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    };

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div>
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet />
            <StarshipsDetails itemId={5} />
            <PersonsList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};