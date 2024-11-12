import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        <nav>
            <div className='nav-links'>
                <NavLink to="/">
                    <img 
                        src="../assets/MOSS_Logo.png"
                        alt="MOSS Logo"
                        className="nav-logo" 
                    />
                </NavLink>
                <NavLink to="/dit-besoeg">Dit besøg</NavLink>
                <NavLink to="/skoletjenesten">Skoletjenesten</NavLink>
                <NavLink to="/om-museet">Om museet</NavLink>
                <NavLink to="/kontakt">Kontakt os</NavLink>
            </div>
            <div className='nav-museums'>
                <NavLink to="/dorf-moellegaard">Dorf Møllegård</NavLink>
                <NavLink to="/vildmosemuseet">Vildmosemuseet</NavLink>
            </div>
        </nav>
        </>
    );
}