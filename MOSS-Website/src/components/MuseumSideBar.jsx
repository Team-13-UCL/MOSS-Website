import React from "react";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";

const MuseumSideBar = ({ title, links, selectedLink, setSelectedLink }) => {
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    {title}
                </Typography>
            </div>
            <List>
                {links.map((link) => (
                    <ListItem key={link.label}>
                        <button
                            onClick={() => setSelectedLink(link.label)}
                            className={`font-area ${selectedLink === link.label
                                ? "text-6 font-medium"
                                : "text-gray-700 hover:text-6"
                                }`}
                        >
                            {link.label}
                        </button>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
};

export default MuseumSideBar;