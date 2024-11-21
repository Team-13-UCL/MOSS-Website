import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import AboutMuseum from "./AboutMuseum";

export default function NavBar() {
  const aboutLinks = [
    { label: "Nyheder", path: "/nyheder", component: <AboutMuseum />},
    { label: "Sponsorer", path: "/sponsorer", component: <AboutMuseum /> },
    { label: "Bestyrelser", path: "/bestyrelser", component: <AboutMuseum /> },
    { label: "Strategi", path: "/strategi", component: <AboutMuseum /> },
    { label: "Vedtægter", path: "/vedtaegter", component: <AboutMuseum /> },
    { label: "Årsrapporter", path: "/aarsrapporter", component: <AboutMuseum /> },
    { label: "Persondatapolitik", path: "/persondata-politik", component: <AboutMuseum /> },
    { label: "Klimacertifikat", path: "/klimacertifikat", component: <AboutMuseum /> },
  ];

  const museumLogos = [
  { to: "/dorf-moellegaard", src: "../assets/images/dorf/DORF LOGO.jpg", alt: "DORF Logo" },
  { to: "/vildmosemuseet", src: "../assets/images/vild/VILDMOSE LOGO.jpg", alt: "VILDMOSE Logo" },
  ];

  return (
    <nav className="p-4 shadow-lg bg-4 bg-opacity-20">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src="../assets/images/MOSS_Logo.png"
            alt="MOSS Logo"
            className="h-16"
          />
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-black items-center font-area text-base font-normal">
          {/* Nav Links */}
          <NavLink
            to="/aktiviteter"
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-6 font-medium" : "hover:text-6"}`
            }
          >
            Det sker
          </NavLink>
          <NavLink
            to="/skoletjenesten"
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-6 font-medium" : "hover:text-6"}`
            }
          >
            Skoletjenesten
          </NavLink>

          {/* Dropdown Menu */}
          <DropdownMenu title="Om museet" links={aboutLinks} />

          {/* Additional Nav Links */}
          <NavLink
            to="/kontakt"
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-6 font-medium" : "hover:text-6"}`
            }
          >
            Kontakt os
          </NavLink>

         {/* Museum Logos */}
        {museumLogos.map(({ to, src, alt }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-6 hover:text-6" : "hover:text-6"}`
            }
          >
            <img src={src} alt={alt} className="h-12 align-middle" />
          </NavLink>
        ))}
        </div>
      </div>
    </nav>
  );
}
