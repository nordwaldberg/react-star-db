import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">Star Wars DB</Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link  to="/characters/">Characters</Link>
                </li>
                <li>
                    <Link to="/planets/">Planets</Link>
                </li>
                <li>
                    <Link to="/starships/">Starships</Link>
                </li>
            </ul>
            <button 
                className="btn btn-secondary btn-sm" 
                onClick={onServiceChange}>Change Service</button>
        </div>
    );
};

export default Header;