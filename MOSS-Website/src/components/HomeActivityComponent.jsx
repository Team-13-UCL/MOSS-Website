import React from 'react'
import ActivityCard from '../components/ActivityCard';
import { useQuery } from '@tanstack/react-query';

const HomeActivityComponent = () => {
    const { data: aktiviteter, isError, isLoading } = useQuery({
        queryKey: ["aktiviteter"],
        queryFn: fetchAktiviteter,
    });

    async function fetchAktiviteter() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}aktiviteter?acf_format=standard&_fields=acf,id,title&per_page=2`);

        const aktiviteter = await response.json();

        aktiviteter.forEach(aktivitet => {
            const imgUrl = aktivitet.acf.billede;
            if (imgUrl) {
                aktivitet.acf.billede = `${import.meta.env.VITE_API_BASE}${imgUrl}`;
                aktivitet.title = aktivitet.title.rendered;
            }
        });



        return aktiviteter;
    }

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading contacts</div>;

    return (
        <div>
            <ul className="flex justify-center gap-5 list-none p-0">
                {aktiviteter.map((aktivitet) => (
                    <li key={aktivitet.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex">
                        <ActivityCard activity={aktivitet} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeActivityComponent