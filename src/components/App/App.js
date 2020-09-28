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

import './App.css';


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
                <Route path={`${process.env.PUBLIC_URL}/`}
                  render={() => <div>
                    <RandomPlanet />
                    <p className="main-text">
                      Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film 
                    and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, 
                    including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing 
                    fictional universe. The franchise holds a Guinness World Records title for the "Most successful film merchandising franchise."In 2020,
                    the Star Wars franchise's total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.
                    </p>
                    <p className="main-text">
                    The original film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and
                    Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy.
                    A prequel trilogy was later released, consisting of Episode I: The Phantom Menace (1999), 
                    Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, 
                    relinquishing his ownership of the franchise. The subsequently produced sequel trilogy consists of Episode VII: The Force Awakens (2015), 
                    Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019). Together, the three trilogies form what has been referred 
                    to as the "Skywalker saga". All nine films were nominated for Academy Awards (with wins going to the first two released) and were commercially 
                    successful. Together with the theatrical spin-off films Rogue One (2016) and Solo: A Star Wars Story (2018), the combined box office revenue of
                    the films equates to over US$10 billion, and it is currently the second-highest-grossing film franchise.
                    </p>
                    <p className="main-text">— From Wikipedia, the free encyclopedia</p>
                  </div>}
                  exact />
                <Route path={`${process.env.PUBLIC_URL}/characters`} component={PersonsPage} exact />
                <Route path={`${process.env.PUBLIC_URL}/characters/:id`} render={({ match }) => {
                  const { id } = match.params;
                  return <PersonsDetails itemId={id} />;
                }} />
                <Route path={`${process.env.PUBLIC_URL}/planets/:id?`} component={PlanetsPage} />
                <Route path={`${process.env.PUBLIC_URL}/starships`} component={StarshipsPage} exact />
                <Route path={`${process.env.PUBLIC_URL}/starships/:id`} render={({ match }) => {
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