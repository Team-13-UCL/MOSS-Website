// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export default function NavBar() {
//     return (
//         <>
//             <nav>
//                 <div className='nav-links'>
//                     <NavLink to="/">
//                         <img
//                             src="../assets/MOSS_Logo.png"
//                             alt="MOSS Logo"
//                             className="nav-logo"
//                         />
//                     </NavLink>
//                     <NavLink to="/dit-besoeg">Dit besøg</NavLink>
//                     <NavLink to="/skoletjenesten">Skoletjenesten</NavLink>
//                     <NavLink to="/om-museet">Om museet</NavLink>
//                     <NavLink to="/kontakt">Kontakt os</NavLink>
//                 </div>
//                 <div className='nav-museums'>
//                     <NavLink to="/dorf-moellegaard">Dorf Møllegård</NavLink>
//                     <NavLink to="/vildmosemuseet">Vildmosemuseet</NavLink>
//                 </div>
//             </nav>
//         </>
//     );
// }
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="p-4 shadow-lg">
            <div className="flex justify-between items-center">
                <NavLink to="/" className="flex items-center space-x-2">
                    <img
                        src="../assets/MOSS_Logo.png"
                        alt="MOSS Logo"
                        className="h-16"
                    />
                </NavLink>
                <div className="hidden md:flex space-x-4 text-black font-medium">
                    <NavLink 
                        to="/dit-besoeg" 
                        className={({ isActive }) => isActive ? "text-yellow-500 hover:text-yellow-400" : "hover:text-yellow-400"}
                    >
                        Dit besøg
                    </NavLink>
                    <NavLink 
                        to="/skoletjenesten" 
                        className={({ isActive }) => isActive ? "text-yellow-500 hover:text-yellow-400" : "hover:text-yellow-400"}
                    >
                        Skoletjenesten
                    </NavLink>
                    <NavLink 
                        to="/om-museet" 
                        className={({ isActive }) => isActive ? "text-yellow-500 hover:text-yellow-400" : "hover:text-yellow-400"}
                    >
                        Om museet
                    </NavLink>
                    <NavLink 
                        to="/kontakt" 
                        className={({ isActive }) => isActive ? "text-yellow-500 hover:text-yellow-400" : "hover:text-yellow-400"}
                    >
                        Kontakt os
                    </NavLink>
                </div>
            </div>
            <div className="md:flex space-x-4 text-black font-medium mt-4 md:mt-0">
                <NavLink 
                    to="/dorf-moellegaard" 
                    className={({ isActive }) => isActive ? "text-yellow-500 hover:text-yellow-400" : "hover:text-yellow-400"}
                >
                    Dorf Møllegård
                </NavLink>
                <NavLink 
                    to="/vildmosemuseet" 
                    className={({ isActive }) => isActive ? "text-yellow-500 hover:text-yellow-400" : "hover:text-yellow-400"}
                >
                    Vildmosemuseet
                </NavLink>
            </div>
        </nav>
    );
}
