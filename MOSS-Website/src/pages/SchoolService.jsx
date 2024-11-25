import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'; // Ensure this is imported

function convertNewlinesToHTML(str) {
  return str.replace(/\r?\n/g, "<br />");
}

const SchoolService = () => {
  const location = useLocation();
  const path = location.pathname;

  const fetchAbout = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}${path}?acf_format=standard&_fields=id,title,acf`
    );

    if (!response.ok) {
      console.error("API Error:", response.statusText);
      throw new Error("Failed to fetch information about the museum.");
    }

    const museumData = await response.json();

    museumData.forEach((museum) => {
      for (let i = 1; i <= 5; i++) {
        const imageKey = `billede_${i}`;
        const imagePath = museum.acf[imageKey];
        if (imagePath) {
          museum.acf[imageKey] = `${import.meta.env.VITE_API_BASE}${imagePath}`;
        }
      }
    });

    return museumData;
  };

  const { data: about, isError, isLoading } = useQuery({
    queryKey: ["about", location],
    queryFn: fetchAbout,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Kunne ikke indlæse skoletjenesten...</div>;

  const museum = about?.[0];
  if (!museum) return <div>No data available</div>;

  const { title, acf } = museum;
  const { beskrivelse, billede_1 } = acf;

  return (
    <div className="school-service-page px-6 py-8">
      <h2 className="text-2xl font-bold mb-4 text-vild">{title.rendered}</h2>

      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-2/3 pr-8 mb-4">
          <div
            className="beskrivelse text-sm leading-relaxed text-9"
            dangerouslySetInnerHTML={{
              __html: convertNewlinesToHTML(beskrivelse),
            }}
          ></div>
        </div>

        {billede_1 && (
          <div className="w-full md:w-1/3">
            <img
              src={billede_1}
              alt={title.rendered}
              className="max-w-xs h-auto rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolService;
