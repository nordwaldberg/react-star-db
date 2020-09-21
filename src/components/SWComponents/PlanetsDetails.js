import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../HocHelpers';

const PlanetsDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="diameter" label="Diameter:" />
            <Record field="gravity" label="Gravity:" />
            <Record field="rotationPeriod" label="Rotation Period:" />
            <Record field="orbitalPeriod" label="Orbital Period:" />
            <Record field="water" label="Water:" />
            <Record field="population" label="Population:" />
            <Record field="climate" label="Climate:" />
            <Record field="terrain" label="Terrain:" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
};

export default withSwapiService(mapMethodsToProps)(PlanetsDetails);