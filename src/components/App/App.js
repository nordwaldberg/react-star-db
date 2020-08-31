import React from 'react';

import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/SwapiService';
import TestSwapiService from '../../services/TestSwapiService';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import ErrorBoundry from '../ErrorBoundry';

import { PersonsPage, PlanetsPage, StarshipsPage } from '../Pages';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
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
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div>
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet />
            <PersonsPage/>
            <PlanetsPage/>
            <StarshipsPage/>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};