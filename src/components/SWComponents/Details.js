import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage } = swapiService;

const PersonsDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender:" />
            <Record field="eyeColor" label="Eye Color:" />
            <Record field="birthYear" label="Birth Year:" />
        </ItemDetails>
    );
};
const PlanetsDetails = ({ itemId }) => {
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
const StarshipsDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field="model" label="Model:" />
            <Record field="length" label="Length:" />
            <Record field="costInCredits" label="Cost:" />
        </ItemDetails>
    );
};

export { PersonsDetails, PlanetsDetails, StarshipsDetails };