import React from 'react'
import './Header.css';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    return (
        <div className="header">
            <h1 onClick={() => history.push('/')} className="home_header">Restaurant Finder</h1>
        </div>
    )
}

export default Header
