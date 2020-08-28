import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContext';


const PersonsDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};
const PlanetsDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};
const StarshipsDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

export { PersonsDetails, PlanetsDetails, StarshipsDetails };