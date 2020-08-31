import React from 'react';
import { PersonsDetails, PersonsList } from '../SWComponents';
import Row from '../Row';

export default class PersonsPage extends React.Component {
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
            left={<PersonsList onItemSelected={this.onItemSelected}/>} 
            right={<PersonsDetails itemId={this.state.selectedItem}/>}/>
        );
    };
};