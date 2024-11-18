import React from 'react'
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Activity = () => {
  const params = useParams();

  const { data: aktivitet, isError, isLoading } = useQuery({
    queryKey: ["aktivitet"],
    queryFn: fetchAktivitet,
  });

  async function fetchAktivitet() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}aktiviteter/${params.id}?acf_format=standard&_fields=acf,id,title`);

    const aktivitet = await response.json();


    const imgUrl = aktivitet.acf.billede;
    if (imgUrl) {
      aktivitet.acf.billede = `${import.meta.env.VITE_API_BASE}${imgUrl}`;
      aktivitet.title = aktivitet.title.rendered;
    }

    return aktivitet;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading activity</div>;

  function convertNewlinesToHTML(str) {
    return str.replace(/\r?\n/g, "<br />");
  }

  return (
    <Card className="flex flex-col justify-center items-center h-full w-full w-100 bg-2 bg-opacity-50">
      <CardHeader floated={false} className="h-80">
        <img src={aktivitet.acf.billede} alt="picture" className="object-cover h-full w-full" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" className="mb-2 font-bold">
          {aktivitet.title}
        </Typography>
        <div
          className="text-9 mt-2 font-regular text-left"
          dangerouslySetInnerHTML={{
            __html: convertNewlinesToHTML(aktivitet.acf.beskrivelse) || "",
          }}
        />
        <Typography className="text-9 mt-2 font-regular text-left">
          <span className="font-bold">Starttidspunkt:</span> {aktivitet.acf.starttidspunkt}
        </Typography>
        <Typography className="text-9 mt-2 font-regular text-left">
          <span className="font-bold">Sluttidspunkt:</span> {aktivitet.acf.sluttidspunkt}
        </Typography>
        <Typography className="text-9 mt-2 font-regular text-left">
          <span className="font-bold">Arrangør:</span> {aktivitet.acf.arrangor}
        </Typography>
        <Typography className="text-9 mt-2 font-regular text-left">
          <span className="font-bold">Sted:</span> {aktivitet.acf.sted}
        </Typography>
      </CardBody>

    </Card >
  );
}

export default Activity