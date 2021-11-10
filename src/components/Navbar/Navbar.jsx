import React from 'react';
import './Navbar.scss';

import { BrowserRouter, Link } from 'react-router-dom';



export default function Navbar() {
    return (
        <>
            <nav>
                <Link to="/">
                    <img src={'/static/images/logo.png'} alt="logo" />
                </Link>
                <div>
                    <Link to='/characters'>Characters</Link>
                    <Link to='/locations'>Locations</Link>
                    <Link to='/weapons'>Weapons</Link>
                    <Link to='/items'>Objects</Link>
                </div>
            </nav>
            <div className="create-div">
                    <Link to='/characters/create'>Create Character</Link>
                    <Link to='/locations/create'>Create Location</Link>
                    <Link to='/weapons/create'>Create Weapon</Link>
                    <Link to='/items/create'>Create Object</Link>
            </div>
        </>
    )
}
