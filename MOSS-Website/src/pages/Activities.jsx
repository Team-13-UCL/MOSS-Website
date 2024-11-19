import React from 'react'
import ActivityCard from '../components/ActivityCard';
import { useActivities } from '../hooks/useActivities';

const Activities = () => {
  const { aktiviteter, isError, isLoading } = useActivities('');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading activities</div>;

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-custom-brown m-8">
        Aktiviteter
      </h1>
      <ul className="flex flex-wrap justify-center gap-5 list-none p-0">
        {aktiviteter.map((aktivitet) => (
          <li key={aktivitet.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex">
            <ActivityCard activity={aktivitet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities