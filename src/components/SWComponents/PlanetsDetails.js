import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../HocHelpers';

const PlanetsDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="diameter" label="Diameter:" />
            <Record field="population" label="Population:" />
            <Record field="rotationPeriod" label="Rotation Period:" />
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