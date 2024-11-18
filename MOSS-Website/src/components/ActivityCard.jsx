import React from 'react';
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

const ActivityCard = ({ activity }) => {
    const {
        acf: { billede, starttidspunkt, arrangor },
    } = activity;

    const cardBgColor =
        arrangor === "Vildmosemuseet"
            ? "bg-vild bg-opacity-100"
            : arrangor === "Dorf Møllegård"
                ? "bg-dorf bg-opacity-100"
                : arrangor === "Museum Moss"
                    ? "bg-1 bg-opacity-50"
                    : "bg-6 bg-opacity-50";

    const cardLogo =
        arrangor === "Vildmosemuseet"
            ? "../assets/images/vild/VILDMOSE LOGO noText.png"
            : arrangor === "Dorf Møllegård"
                ? "../assets/images/dorf/DORF LOGO noText.png"
                : arrangor === "Museum Moss"
                    ? ""
                    : "";

    const cardRoute =
        arrangor === "Vildmosemuseet"
            ? "vildmosemuseet"
            : arrangor === "Dorf Møllegård"
                ? "dorf-moellegaard"
                : arrangor === "Museum Moss"
                    ? "museum-moss"
                    : "";


    return (
        <Card className={`flex flex-col min-h-80 max-h-80 ${cardBgColor}`}>
            <CardBody className=" justify-between text-center">
                <div className="w-full h-6 mb-2 overflow-hidden flex flex justify-end">
                    <NavLink to={`/${cardRoute}/aktiviteter/${activity.id}`}>
                        <img src={cardLogo} alt="picture" className="object-contain h-full w-full" />
                    </NavLink>
                </div>
                <Typography className="mb-1 font-bold text-black">
                    {activity.title}
                </Typography>
                <Typography className="text-1 mt-2 font-regular">
                    {starttidspunkt}
                </Typography>
                <div className="w-full min-h-12 max-h-20 overflow-hidden flex justify-center items-center">
                    <NavLink to={`/${cardRoute}/aktiviteter/${activity.id}`}>
                        <img src={billede} alt="picture" className="object-contain w-full" />
                    </NavLink>
                </div>
                <NavLink className="text-white mt-6 inline-block" to={`/${cardRoute}/aktiviteter/${activity.id}`}>
                    <Button> Læs mere </Button>
                </NavLink>
            </CardBody>
        </Card>
    );
};

export default ActivityCard;
