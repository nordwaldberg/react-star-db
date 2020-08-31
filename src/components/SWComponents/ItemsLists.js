import React from 'react';
import { withData, withChild, withSwapiService, compose } from '../HocHelpers';
import ItemList from '../ItemList';

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

const PersonsList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChild(renderName)
    )(ItemList);

const PlanetsList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChild(renderName)
    )(ItemList);

const StarshipsList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChild(renderName)
    )(ItemList);

export { PersonsList, PlanetsList, StarshipsList };