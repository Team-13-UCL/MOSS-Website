import React from 'react'
import ActivityCard from '../components/ActivityCard';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';

const HomeActivityComponent = () => {
    const { data: aktiviteter, isError, isLoading } = useQuery({
        queryKey: ["aktiviteter"],
        queryFn: fetchAktiviteter,
    });

    async function fetchAktiviteter() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}aktiviteter?acf_format=standard&_fields=acf,id,title&per_page=10`);

        const aktiviteter = await response.json();

        aktiviteter.forEach(aktivitet => {
            const imgUrl = aktivitet.acf.billede;
            if (imgUrl) {
                aktivitet.acf.billede = `${import.meta.env.VITE_API_BASE}${imgUrl}`;
                aktivitet.title = aktivitet.title.rendered;
            }
        });
        aktiviteter.sort((a, b) => {
            const dateA = new Date(a.acf.starttidspunkt);
            const dateB = new Date(b.acf.starttidspunkt);
            return dateB - dateA;
        });

        return aktiviteter;
    }

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading contacts</div>;

    // Group activities by museum
    const museumVildActivities = aktiviteter.filter(a => a.acf.arrangor === "Vildmosemuseet");
    const museumDorfActivities = aktiviteter.filter(a => a.acf.arrangor === "Dorf Møllegård");

    const museumNavLinks =
        [{ id: 1, link: "/dorf-moellegaard", src: "../assets/images/dorf/DORF LOGO.jpg", alt: "DORF Logo", aktiviteter: museumDorfActivities },
        { id: 2, link: "/vildmosemuseet", src: "../assets/images/vild/VILDMOSE LOGO.jpg", alt: "VILD Logo", aktiviteter: museumVildActivities }
        ]

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
}

export default HomeActivityComponent