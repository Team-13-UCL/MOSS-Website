import React from 'react';
import { useQuery } from "@tanstack/react-query";


const Sponsors = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["sponsorer"],
    queryFn: fetchSponsors,
  });

  async function fetchSponsors() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}sponsors?acf_format=standard&_fields=acf,id,title`
    );

    const sponsorer = await response.json();

    sponsorer.forEach(sponsor => {
      const imgUrl = sponsor.acf.sponsorlogo;
      if (imgUrl) {
        sponsor.acf.sponsorlogo = `${import.meta.env.VITE_API_BASE}${imgUrl}`;
        sponsor.title = sponsor.title.rendered;
      }
    });

    return sponsorer;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading sponsors</div>;

  return (
    <>
      <h3 className="text-xl font-bold mb-4">Sponsorer</h3>
      <div className="flex flex-wrap">
        {data.map((sponsor) => (
          <img src={sponsor.acf.sponsorlogo} alt={sponsor.title} className="object-contain h-1/3 w-1/3 p-2" />
        ))}
      </div>
    </>
  )
}

export default Sponsors