import React from 'react';
import './PeoplePage.css';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';
import SwapiService from '../../services/SwapiService';


export default class PeoplePage extends React.Component {
    swapiService = new SwapiService();
    constructor() {
        super();
        this.state = {
            selectedPerson: null,
        };
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPersons}
                renderItem={item => item.name} />
        );
        
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        if (this.state.hasError) {
            return <ErrorIndicator />
        };

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        );
    }
};