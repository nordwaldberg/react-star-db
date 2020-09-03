import React from 'react';
import { withRouter } from 'react-router-dom';
import { PlanetsDetails, PlanetsList } from '../SWComponents';
import Row from '../Row';

const PlanetsPage = ({ match, history }) => {
    const { id } = match.params;
    return (
        <Row
            left={<PlanetsList onItemSelected={(itemId) => history.push(itemId)} />}
            right={<PlanetsDetails itemId={ id } />} />
    );
};

export default withRouter(PlanetsPage);