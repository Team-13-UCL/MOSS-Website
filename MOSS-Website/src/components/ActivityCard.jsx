import React from 'react'
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

const ActivityCard = ({ activity }) => {
    const {
        acf: { introtekst, beskrivelse, billede, starttidspunkt, sluttidspunkt, sted, arrangor },
    } = activity;

    return (
        <Card className="flex flex-col h-full w-full w-100 bg-1 bg-opacity-50">
            <CardHeader floated={false} className="h-80">
                <img src={billede} alt="picture" className="object-cover h-full w-full" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" className="mb-2 font-bold">
                    {activity.title}
                </Typography>
                <Typography color="9" className="mt-2 font-regular" >
                    {introtekst}
                </Typography>
                {/* <div dangerouslySetInnerHTML={{ __html: beskrivelse }} /> */}
                <Typography className="text-9 mt-2 font-regular text-left">
                    <span className="font-bold">Starttidspunkt:</span> {starttidspunkt}
                </Typography>
                <Typography className="text-9 mt-2 font-regular text-left">
                    <span className="font-bold">Sluttidspunkt:</span> {sluttidspunkt}
                </Typography>
                <Typography className="text-9 mt-2 font-regular text-left">
                    <span className="font-bold">Arrangør:</span> {arrangor}
                </Typography>
                <Typography className="text-9 mt-2 font-regular text-left">
                    <span className="font-bold">Sted:</span> {sted}
                </Typography>
                <NavLink className="text-red-500" to={`/aktiviteter/${activity.id}`}>
                    Læs mere
                </NavLink>
            </CardBody>

        </Card >
    );
}

export default ActivityCard