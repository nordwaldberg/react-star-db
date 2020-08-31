import React from 'react';
import { StarshipsDetails, StarshipsList } from '../SWComponents';
import Row from '../Row';

export default class StarshipsPage extends React.Component {
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
            left={<StarshipsList onItemSelected={this.onItemSelected}/>} 
            right={<StarshipsDetails itemId={this.state.selectedItem}/>}/>
        );
    };
};