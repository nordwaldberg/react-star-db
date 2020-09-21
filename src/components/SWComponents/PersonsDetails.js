import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../HocHelpers';


const PersonsDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender:" />
            <Record field="birthYear" label="Birth Year:" />
            <Record field="eyeColor" label="Eye Color:" />
            <Record field="hairColor" label="Hair Color:" />
            <Record field="skinColor" label="Skin Color:" />
            <Record field="height" label="Height:" />
            <Record field="mass" label="Mass:" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    };
};

export default withSwapiService(mapMethodsToProps)(PersonsDetails);