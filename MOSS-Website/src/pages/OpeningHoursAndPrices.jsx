import React from 'react';
import { useQuery } from '@tanstack/react-query';

const OpeningHoursAndPrices = () => {
  async function fetchOpeningHoursAndPrices() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}aabningstider-priser?_fields=id,acf`
    );
    const data = await response.json();
    return data[0].acf; 
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ['openingHoursAndPrices'],
    queryFn: fetchOpeningHoursAndPrices,
  });

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (isError) return <div className="text-center text-lg">Error loading data</div>;

  function convertNewlinesToHTML(str) {
    return str.replace(/\r?\n/g, "<br />");
  }

  return (
    <div className="container mx-auto my-8 p-6">
     
      <h2 className="text-3xl font-bold text-center mb-8">Åbningstider & Priser - Dorf Møllegård</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-9">
        
        {/* Opening Hours Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Åbningstider</h3>
          <ul className="space-y-1">
            <li>Mandag: {data.mandag}</li>
            <li>Tirsdag: {data.tirsdag}</li>
            <li>Onsdag: {data.onsdag}</li>
            <li>Torsdag: {data.torsdag}</li>
            <li>Fredag: {data.fredag}</li>
            <li>Lørdag: {data.loerdag}</li>
            <li>Søndag: {data.soendag}</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">Åbningstider i år</h3>
          <div className="mt-4">
            <div dangerouslySetInnerHTML={{ __html: convertNewlinesToHTML(data.aabningstider_i_2024) }} />
          </div>
          <p className="mt-4">{data.kontakt_museet}</p>
        </div>
        
        {/* Prices Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Priser</h3>
          <ul className="space-y-1">
            <li>Voksen: {data.voksen}</li>
            <li>Børn under 18 år: {data.born_under_18}</li>
            <li>Ældresagen: {data.aeldresagen}</li>
            <li>KlubNordjyske: {data.klubnordjyske}</li>
            <li>Gruppe (over 20 prs): {data.gruppeentre}</li>
            <li>Enkelt person (medlemskab): {data.museumsforening_enkelt_person}</li>
            <li>Husstand (medlemskab): {data.museumsforening_husstand}</li>
            <li>Formidlingsforløb, første lektion: {data.formidlingsforloeb_foerste_lektion}</li>
            <li>Følgende lektioner: {data.foelgende_lektioner}</li>
            <li>Rundvisning i almindelig åbningstid: {data.rundvisning_i_almindelig_aabningstid}</li>
            <li>Rundvisning uden for almindelig åbningstid: {data.rundvisning_uden_for_almindelig_aabningstid}</li>
            <li>Foredrag: {data.foredrag}</li>
            <li>Entré, kaffe og kage pr. person ved booking: {data.entre_kaffe_og_kage}</li>
            <li>Byvandring i Brønderslev med guide, max 20 personer: {data.booking_byvandring_med_guide}</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Generel Information</h3>
        <p className="mb-4">{data.general_info_dorf}</p>
        <p className="mb-4">{data.general_info_vildmosemuseet}</p>
      </div>
    </div>
  );
};

export default OpeningHoursAndPrices;
