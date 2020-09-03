import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/SwapiService';
import TestSwapiService from '../../services/TestSwapiService';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import ErrorBoundry from '../ErrorBoundry';

import { PersonsPage, PlanetsPage, StarshipsPage } from '../Pages';
import { StarshipsDetails, PersonsDetails } from '../SWComponents';


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
          <Router>
            <div>
              <Header onServiceChange={this.onServiceChange} />
              <Switch>
                <Route path="/"
                  render={() => <div>
                    <RandomPlanet />
                    <h2>Welcome to StarDB!</h2>
                  </div>}
                  exact />
                <Route path="/characters" component={PersonsPage} exact />
                <Route path="/characters/:id" render={({ match }) => {
                  const { id } = match.params;
                  return <PersonsDetails itemId={id} />;
                }} />
                <Route path="/planets/:id?" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route path="/starships/:id" render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipsDetails itemId={id} />;
                }} />
                <Route render={() => <h2>Page not found!</h2>}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};