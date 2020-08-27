import React from 'react';
import './PeoplePage.css';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class PeoplePage extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedPerson: null,
            hasError: false,
        };
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        };

        return (
            <div className="row mb-2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
};