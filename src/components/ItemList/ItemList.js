import React from 'react';
import './ItemList.css';
import SwapiService from '../../services/SwapiService';
import Loader from '../Loader';


export default class ItemList extends React.Component {

    swapiService = new SwapiService();

    constructor() {
        super();
        this.state = {
            peopleList: null,
        };
    };

    componentDidMount() {
        this.swapiService.getAllPersons()
            .then(peopleList => {
                this.setState({
                    peopleList,
                });
            });
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}</li>
            );
        });
    };

    render() {

        const { peopleList } = this.state;

        if (!peopleList) {
            return <Loader />;
        };

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}