import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../HocHelpers';


const StarshipsDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model:" />
            <Record field="manufacturer" label="Manufacturer:" />
            <Record field="length" label="Length:" />
            <Record field="starshipClass" label="Class:" />
            <Record field="hyperdriveRating" label="Hyperdrive Rating:" />
            <Record field="maxAtmoSpeed" label="Max Atmosphere Speed:" />
            <Record field="costInCredits" label="Cost:" />
            <Record field="crew" label="Crew:" />
            <Record field="passengers" label="Passengers:" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    };
};

export default withSwapiService(mapMethodsToProps)(StarshipsDetails);