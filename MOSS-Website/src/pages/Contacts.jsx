import React from 'react';
import { useQuery } from "@tanstack/react-query";
import ContactCard from '../components/ContactCard';

const Contact = () => {
  const { data: kontakter, isError, isLoading } = useQuery({
    queryKey: ["kontakter"],
    queryFn: fetchKontakter,
  });

  async function fetchKontakter() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}kontakter?acf_format=standard&_fields=acf,id`);

    const kontakter = await response.json();

    kontakter.forEach(kontakt => {
      const imgUrl = kontakt.acf.profilbillede;
      if (imgUrl) {
        kontakt.acf.profilbillede = `${import.meta.env.VITE_API_BASE}${imgUrl}`;
      }
    });

    return kontakter;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading contacts</div>;

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-custom-brown m-8">
        Medarbejdere
      </h1>
      <ul className="flex flex-wrap justify-center gap-5 list-none p-0">
        {kontakter.map((kontakt) => (
          <li key={kontakt.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex">
            <ContactCard contact={kontakt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;

