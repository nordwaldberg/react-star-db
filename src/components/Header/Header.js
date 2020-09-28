import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to={`${process.env.PUBLIC_URL}/`}>Star Wars DB</Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link  to={`${process.env.PUBLIC_URL}/characters/`}>Characters</Link>
                </li>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/planets/`}>Planets</Link>
                </li>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/starships/`}>Starships</Link>
                </li>
            </ul>
            <button 
                className="btn btn-secondary btn-sm" 
                onClick={onServiceChange}>Change Service</button>
        </div>
    );
};

export default Header;