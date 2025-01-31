import React from 'react';
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const ContactCard = ({ contact }) => {
    const {
        acf: { navn, titel, telefon, email, profilbillede },
    } = contact;

    return (
        <Card className="flex flex-col h-full w-80 bg-1 bg-opacity-50">
            <CardHeader floated={false} className="h-80">
                <img src={profilbillede} alt="profile-picture" className="object-cover h-full w-full" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" className="mb-2 font-bold">
                    {navn}
                </Typography>
                <Typography color="gray" className="font-regular text-opacity-70" >
                    {titel}
                </Typography>
                <Typography className="text-9 mt-2 font-regular">
                    <strong>Tel.:</strong> {telefon}
                </Typography>
                <Typography className="text-9 mt-1 font-regular">
                    <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
                </Typography>
            </CardBody>

        </Card>
    );
}

export default ContactCard;
