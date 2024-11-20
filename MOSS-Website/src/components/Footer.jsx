import React from 'react';
import RegisterNewsletterForm from './RegisterNewsletterForm';
import SocialMediaIcons from './SocialMediaIcons';
import { useQuery } from '@tanstack/react-query';
import { Card, Typography } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import AabningstiderOgPriser from './AabningstiderOgPriser';

const Footer = () => {
  const { data: infoData, isLoading: infoLoading, isError: infoError } = useQuery({
    queryKey: ['museumInfo'],
    queryFn: fetchMuseumInfo,
  });

  return (
    <div className="p-4 shadow-lg bg-5 bg-opacity-30 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Nyhedsbrev */}
      <div>
        <RegisterNewsletterForm />
        <SocialMediaIcons />
      </div>

      {/* Åbningstider og Priser */}
      <div>
        <NavLink to='/aabningstider-og-priser' className={'mb-1 font-bold text-white hover:text-black'}>
          Se åbningstider og priser
        </NavLink>
      </div>

      {/* Kontaktoplysninger */}
      {/* <Card className="p-4 shadow-lg bg-5 bg-opacity-30 text-white">
        <img className='mb-2' src='../assets/images/MOSS_Logo.png' />
        <div>
          <Typography variant="paragraph" className="font-bold">
            {infoData.acf.navn}
          </Typography>
          <Typography variant="paragraph">
            {infoData.acf.adresse}
          </Typography>
          <Typography variant="paragraph" className="mb-4">
            {infoData.acf.postnummer_by}
          </Typography>
          <Typography variant="paragraph">
            Telefon: {infoData.acf.telefon}
          </Typography>
          <Typography variant="paragraph">
            Email: {infoData.acf.email}
          </Typography>
          <Typography variant="paragraph" className="mb-4">
            CVR: {infoData.acf.cvr}
          </Typography>
        </div>
      </Card> */}
    </div>
  );
};

// Function to fetch museum contact information
async function fetchMuseumInfo() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}museumsinfo/65/?_fields=id,slug,acf`
  );
  if (!response.ok) {
    throw new Error('Error fetching museum info');
  }
  return response.json();
}

export default Footer;
