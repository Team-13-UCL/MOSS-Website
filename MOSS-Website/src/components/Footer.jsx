import React from 'react';
import RegisterNewsletterForm from './RegisterNewsletterForm';
import SocialMediaIcons from './SocialMediaIcons';
import { useQuery } from '@tanstack/react-query';
import { Card, Typography } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import { useHoursAndPrices } from "../hooks/useHoursAndPrices";

const Footer = () => {

  const { data: hoursAndPrices, isError: hoursError, isLoading: hoursLoading } = useHoursAndPrices("Moss");

  const { data: museumInfo, isError: infoError, isLoading: infoLoading } = useQuery({
    queryKey: ['museumInfo'],
    queryFn: fetchMuseumInfo,
  });

  // Function to fetch museum contact information
  async function fetchMuseumInfo() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}museumsinfo/65/?_fields=id,slug,acf`
    );

    if (!response.ok) {
      throw new Error('Error fetching museum info');
    }

    const museumInfo = await response.json();

    return museumInfo;
  }

  if (infoLoading) return <div>Loading...</div>;
  if (infoError) return <div>Error loading museums info...</div>;

  if (hoursLoading) {return <div>Loading...</div>}
  if (hoursError) {return <div>Error fetching opening hours and prices...</div>;}


  return (
    <div className="p-4 shadow-lg bg-5 bg-opacity-30 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Åbningstider og Priser */}
      <Card className="p-4 shadow-lg bg-5 bg-opacity-30 text-white">
        <ul className="space-y-1">
          <li>Mandag: {hoursAndPrices.mandag}</li>
          <li>Tirsdag: {hoursAndPrices.tirsdag}</li>
          <li>Onsdag: {hoursAndPrices.onsdag}</li>
          <li>Torsdag: {hoursAndPrices.torsdag}</li>
          <li>Fredag: {hoursAndPrices.fredag}</li>
          <li>Lørdag: {hoursAndPrices.loerdag}</li>
          <li>Søndag: {hoursAndPrices.soendag}</li>
        </ul>

        <p className='p-2'></p>

        <NavLink to='/aabningstider-og-priser' className={'mb-1 font-bold text-white hover:text-6'}>
          Se flere åbningstider og priser
        </NavLink>
      </Card>

      {/* Nyhedsbrev */}
      <div>
        <RegisterNewsletterForm />
        <SocialMediaIcons />
      </div>



      {/* Kontaktoplysninger */}
      <Card className="p-4 shadow-lg bg-5 bg-opacity-30 text-white">
        <img className='mb-2' src='../assets/images/MOSS_Logo.png' />
        <div>
          <Typography variant="paragraph" className="font-bold">
            {museumInfo.acf.navn}
          </Typography>
          <Typography variant="paragraph">
            {museumInfo.acf.adresse}
          </Typography>
          <Typography variant="paragraph" className="mb-4">
            {museumInfo.acf.postnummer_by}
          </Typography>
          <Typography variant="paragraph">
            Telefon: {museumInfo.acf.telefon}
          </Typography>
          <Typography variant="paragraph">
            Email: {museumInfo.acf.email}
          </Typography>
          <Typography variant="paragraph" className="mb-4">
            CVR: {museumInfo.acf.cvr}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Footer;
