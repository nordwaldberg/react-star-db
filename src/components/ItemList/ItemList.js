import React from 'react';
import './ItemList.css';
import { withData } from '../HocHelpers'
import SwapiService from '../../services/SwapiService';


const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};



const { getAllPersons } = new SwapiService();

export default withData(ItemList, getAllPersons);