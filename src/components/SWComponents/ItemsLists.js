import React from 'react';
import { withData, withSwapiService } from '../HocHelpers';
import ItemList from '../ItemList';


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

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPersons,
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    };
};


const PersonsList = withSwapiService(withData(
    withChild(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetsList = withSwapiService(withData(
    withChild(ItemList, renderName)), mapPlanetMethodsToProps);

const StarshipsList = withSwapiService(withData(
    withChild(ItemList, renderName)), mapStarshipMethodsToProps);

export { PersonsList, PlanetsList, StarshipsList };