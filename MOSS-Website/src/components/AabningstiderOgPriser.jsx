import React from "react";
import { useHoursAndPrices } from "../hooks/useHoursAndPrices";

const AabningstiderOgPriser = ({ museum }) => {

  const { data, isError, isLoading } = useHoursAndPrices(museum);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading activities</div>;

  function convertNewlinesToHTML(str) {
    return str.replace(/\r?\n/g, "<br />");
  }

  return (
    <div>
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
        <h3 className="text-xl font-bold mt-6"></h3>
        <div className="mt-4">
          <div dangerouslySetInnerHTML={{ __html: convertNewlinesToHTML(data.specielle_abningstider) }} />
        </div>
        <p className="mt-4">{data.kontakt_museet}</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Priser</h3>
        <div dangerouslySetInnerHTML={{ __html: convertNewlinesToHTML(data.priser) }} />
      </div>
    </div>
  );
  ;
};

export default AabningstiderOgPriser;
