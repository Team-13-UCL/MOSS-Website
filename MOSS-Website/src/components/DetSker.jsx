import React from 'react';
import { useActivities } from '../hooks/useActivities';
import ActivityCard from './ActivityCard';

const DetSker = ({ museum }) => {
    const { aktiviteter, isLoading, isError } = useActivities(museum);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading activities</div>;

    return (
        <div className='flex flex-row h-full '>
            {aktiviteter.map((aktivitet) => (
                <div key={aktivitet.id} className='w-1/2 p-2'>
                    <ActivityCard key={aktivitet.id} activity={aktivitet} />
                </div>
            ))}
        </div>
    );
};

export default DetSker;
