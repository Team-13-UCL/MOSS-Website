import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Typography } from "@material-tailwind/react";


export default function SocialMediaIcons() {
    return (
        <div className="flex flex-col items-center">
            <Typography variant="h6" className="p-4 text-white text-center">
                Følg med på de sociale medier:
            </Typography>
            <div className="flex gap-10">
                <a
                    href="https://www.facebook.com/profile.php?id=100047369362601"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                    <FaFacebook size={40} />
                </a>
                <a
                    href="https://www.instagram.com/museum_moss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                >
                    <FaInstagram size={40} />
                </a>
            </div>
        </div>
    );
}
