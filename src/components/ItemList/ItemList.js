import React from 'react';
import './ItemList.css';
import SwapiService from '../../services/SwapiService';
import Loader from '../Loader';


export default class ItemList extends React.Component {

    swapiService = new SwapiService();

    constructor() {
        super();
        this.state = {
            itemList: null,
        };
    };

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then(itemList => {
                this.setState({
                    itemList,
                });
            });
    };

    renderItems(arr) {
        return arr.map(item => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}</li>
            );
        });
    };

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <Loader />;
        };

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}