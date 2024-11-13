import React from 'react';
import { useQuery } from "@tanstack/react-query";

const Contact = () => {
  const { data: kontakter, isError, isLoading } = useQuery({
    queryKey: ["kontakter"],
    queryFn: fetchKontakter,
  });

  async function fetchKontakter() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}kontakter?acf_format=standard&_fields=acf,id`);

    const kontakter = await response.json();

    return kontakter;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading contacts</div>;

  return (
    <div>
      <h1>Contact</h1>
      <ul>
        {kontakter.map((kontakt) => (
          <li key={kontakt.id}>
            <h2>{kontakt.acf.navn}</h2>
            <p>{kontakt.acf.titel}</p>
            <p>{kontakt.acf.telefon}</p>
            <p>{kontakt.acf.email}</p>
            <img src={`${import.meta.env.VITE_API_BASE}${kontakt.acf.profilbillede}`} alt={`${kontakt.acf.navn}'s profile`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
