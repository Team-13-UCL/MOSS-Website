import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ title, links }) => {
  return (
    <Menu allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 text-base font-area font-normal tracking-normal py-2 px-4 align-middle focus:outline-none normal-case"
        >
          {title}
          <ChevronDownIcon
            strokeWidth={2.5}
            className="h-4 w-4 transition-transform"
          />
        </Button>
      </MenuHandler>
      <MenuList className="w-40 bg-white shadow-lg">
        {links.map((link) => (
          <MenuItem key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `font-area ${
                  isActive ? "text-6 font-medium" : "text-gray-700 hover:text-6"
                }`
              }
            >
              {link.label}
            </NavLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
