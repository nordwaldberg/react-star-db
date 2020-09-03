import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonsList } from '../SWComponents';

const PersonsPage = ({ history }) => {
    return (
        <PersonsList onItemSelected={(itemId) => { history.push(itemId) }}/>
    );
};

export default withRouter(PersonsPage);