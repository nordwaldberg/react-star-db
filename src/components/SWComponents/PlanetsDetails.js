import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../HocHelpers';

const PlanetsDetails = ({ itemId, swapiService }) => {
    const { getPlanet, getPlanetImage } = swapiService;
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>
            <Record field="diameter" label="Diameter:" />
            <Record field="population" label="Population:" />
            <Record field="rotationPeriod" label="Rotation Period:" />
        </ItemDetails>
    );
};

export default withSwapiService(PlanetsDetails);