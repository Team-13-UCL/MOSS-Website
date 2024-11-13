import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="p-4 shadow-lg bg-topColor bg-opacity-20">
            <div className="flex justify-between items-center">
                <NavLink to="/" className="flex items-center space-x-2">
                    <img
                        src="../assets/MOSS_Logo.png"
                        alt="MOSS Logo"
                        className="h-16"
                    />
                </NavLink>
                <div className="hidden md:flex space-x-4 text-black font-medium font-area">
                    <NavLink
                        to="/dit-besoeg"
                        className={({ isActive }) => isActive ? "text-menuColor hover:text-menuColor" : "hover:text-menuColor"}
                    >
                        Dit besøg
                    </NavLink>
                    <NavLink
                        to="/skoletjenesten"
                        className={({ isActive }) => isActive ? "text-menuColor hover:text-menuColor" : "hover:text-menuColor"}
                    >
                        Skoletjenesten
                    </NavLink>
                    <NavLink
                        to="/om-museet"
                        className={({ isActive }) => isActive ? "text-menuColor hover:text-menuColor" : "hover:text-menuColor"}
                    >
                        Om museet
                    </NavLink>
                    <NavLink
                        to="/kontakt"
                        className={({ isActive }) => isActive ? "text-menuColor hover:text-menuColor" : "hover:text-menuColor"}
                    >
                        Kontakt os
                    </NavLink>
                </div>
            </div>
            <div className="md:flex space-x-4 text-black font-medium mt-4 md:mt-0 font-area justify-end">
                <NavLink
                    to="/dorf-moellegaard"
                    className={({ isActive }) => isActive ? "text-menuColor hover:text-menuColor" : "hover:text-menuColor"}
                >
                    Dorf Møllegård
                </NavLink>
                <NavLink
                    to="/vildmosemuseet"
                    className={({ isActive }) => isActive ? "text-menuColor hover:text-menuColor" : "hover:text-menuColor"}
                >
                    Vildmosemuseet
                </NavLink>
            </div>
        </nav>
    );
}
