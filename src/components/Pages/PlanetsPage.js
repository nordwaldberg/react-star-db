import React from 'react';
import { PlanetsDetails, PlanetsList } from '../SWComponents';
import Row from '../Row';

export default class PlanetsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedItem: null,
        };
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        return (
            <Row 
            left={<PlanetsList onItemSelected={this.onItemSelected}/>} 
            right={<PlanetsDetails itemId={this.state.selectedItem}/>}/>
        );
    };
};