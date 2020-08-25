import React from 'react';
import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicdtor = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">Boom!</span>
            <span>something has gone terribly wrong</span>
            <span>(but already sent droids to fix it)</span>
        </div>
    );
};

export default ErrorIndicdtor;