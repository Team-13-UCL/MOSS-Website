import React from 'react';
import ActivityCard from '../components/ActivityCard';
import { NavLink } from 'react-router-dom';
import { useActivities } from '../hooks/useActivities';

const HomeActivityComponent = () => {
    const { aktiviteter: museumVildActivities, isError, isLoading } = useActivities("Vild");
    const { aktiviteter: museumDorfActivities } = useActivities("Dorf");

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading activities</div>;

    const museumNavLinks = [
        { id: 1, link: "/dorf-moellegaard", src: "../assets/images/dorf/DORF LOGO.jpg", alt: "DORF Logo", aktiviteter: museumDorfActivities },
        { id: 2, link: "/vildmosemuseet", src: "../assets/images/vild/VILDMOSE LOGO.jpg", alt: "VILD Logo", aktiviteter: museumVildActivities }
    ];

    return (
        <div className="flex flex-col gap-10">
            <ul className="flex flex-wrap justify-center gap-5 list-none p-0">
                {museumNavLinks.map((museum) => (
                    <li
                        key={museum.id}
                        className="l sm:w-1/1 md:w-1/2 lg:w-1/3 flex flex-col items-center"
                    >
                        <NavLink to={museum.link}>
                            <img
                                src={museum.src}
                                alt={museum.alt}
                                className="w-full h-auto object-cover mb-4 hover:scale-105 transition-transform"
                            />
                        </NavLink>

                        <ul className="flex flex-col gap-3">
                            {museum.aktiviteter.map((aktivitet) => (
                                <li
                                    key={aktivitet.id}
                                    className="w-full flex justify-center"
                                >
                                    <ActivityCard activity={aktivitet} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeActivityComponent;
