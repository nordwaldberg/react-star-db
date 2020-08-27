import React from 'react';
import Header from '../Header';
import ItemList from '../ItemList';
import ItemDetails, { Record } from '../ItemDetails';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import ErrorIndicator from '../ErrorIndicator';
import ErrorBoundry from '../ErrorBoundry';


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

    const peopleDetails = (
      <ItemDetails
      itemId = { 11}
      getData = { this.swapiService.getPerson }
      getImageUrl = { this.swapiService.getPersonImage }>
        <Record field="gender" label="Gender:"/>
        <Record field="birthYear" label="Birth Year:"/>
        <Record field="eyeColor" label="Eye Color:"/>
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
      itemId={5}
      getData={this.swapiService.getStarship}
      getImageUrl={this.swapiService.getStarshipImage}>
        <Record field="model" label="Model:"/>
        <Record field="length" label="Length:"/>
        <Record field="costInCredits" label="Cost:"/>
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div>
          <Header />
          <RandomPlanet />
          <Row left={peopleDetails}
            right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  };
};