import React from 'react';
import RegisterNewsletterForm from './RegisterNewsletterForm';
import SocialMediaIcons from './SocialMediaIcons';
import { useQuery } from '@tanstack/react-query';
import { Card, Typography } from "@material-tailwind/react";

const Footer = () => {
  const { data: infoData, isLoading: infoLoading, isError: infoError } = useQuery({
    queryKey: ['museumInfo'],
    queryFn: fetchMuseumInfo,
  });

  const { data: pricesData, isLoading: pricesLoading, isError: pricesError } = useQuery({
    queryKey: ['prices'],
    queryFn: fetchPrices,
  });

  if (infoLoading || pricesLoading) return <div>Loading...</div>;
  if (infoError || pricesError) return <div>Error loading data</div>;

  return (
    <div className="p-4 shadow-lg bg-5 bg-opacity-30 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Nyhedsbrev */}
      <div>
        <RegisterNewsletterForm />
        <SocialMediaIcons />
      </div>

      {/* Åbningstider og Priser */}
      <Card className="p-4 shadow-lg bg-5 bg-opacity-30 text-white">
        <Typography variant="h6" className="text-center mb-4">
          Åbningstider & Priser
        </Typography>
        <div>
          <Typography variant="paragraph" className="mt-2">
            {pricesData[0].acf.general_info_dorf}
          </Typography>
          <Typography variant="paragraph" className="mt-2">
            Voksen: {pricesData[0].acf.voksen}
          </Typography>
          <Typography variant="paragraph" className="mt-2">
            Børn under 18: {pricesData[0].acf.born_under_18}
          </Typography>
          <a
            href="/aabningstider-og-priser"
            className="text-blue-400 mt-2 inline-block underline"
          >
            Se flere priser
          </a>
          <Typography variant="paragraph" className="mt-2">
            {pricesData[0].acf.general_info_vildmosemuseet}
          </Typography>
        </div>
      </Card>

      {/* Kontaktoplysninger */}
      <Card className="p-4 shadow-lg bg-5 bg-opacity-30 text-white">
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
      </Card>
    </div>
  );
};

// Function to fetch opening hours and prices
async function fetchPrices() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}aabningstider-priser?_fields=id,acf`
  );
  if (!response.ok) {
    throw new Error('Error fetching prices data');
  }
  return response.json();
}

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
