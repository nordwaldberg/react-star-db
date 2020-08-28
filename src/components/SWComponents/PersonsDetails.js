import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../HocHelpers';


const PersonsDetails = ({ itemId, swapiService }) => {
    const { getPerson, getPersonImage } = swapiService;
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

export default withSwapiService(PersonsDetails);