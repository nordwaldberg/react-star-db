import React from 'react';
import { withData } from '../HocHelpers';
import ItemList from '../ItemList';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();

const { getAllPersons, getAllPlanets, getAllStarships } = swapiService;

const withChild = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
};

const renderName = ({ name }) => <span>{name}</span>;

const PersonsList = withData(
    withChild(ItemList, renderName),
    getAllPersons);
const PlanetsList = withData(
    withChild(ItemList, renderName),
    getAllPlanets);
const StarshipsList = withData(
    withChild(ItemList, renderName), 
    getAllStarships);

export { PersonsList, PlanetsList, StarshipsList };