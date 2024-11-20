import React, { useState } from "react";
import MuseumSideBar from "../components/MuseumSideBar";
import DetSker from "../components/DetSker";
import OmMuseet from "../components/OmMuseet";
import AabningstiderOgPriser from "../components/AabningstiderOgPriser";
import PraktiskInformation from "../components/PraktiskInformation";
import Skoletjenesten from "../components/Skoletjenesten";
import CafeButik from "../components/CafeButik";
import Projekter from "../components/Projekter";
import EfterDitBesøg from "../components/EfterDitBesøg";
import BlivFrivillig from "../components/BlivFrivillig";
import Møllelaug from "../components/Møllelaug";
import BannerCarousel from "../components/BannerCarousel";
import { museums } from "../data/museumImages";

const MuseumPage = ({ museum }) => {

    const museumImages = museums.find((m) => m.id === museum);

  const commonLinks = [
    { label: "Det Sker", component: <DetSker museum={museum} /> },
    { label: "Om Museet", component: <OmMuseet museum={museum} /> },
    { label: "Åbningstider & Priser", component: <AabningstiderOgPriser museum={museum} /> },
    { label: "Praktisk Information", component: <PraktiskInformation museum={museum} /> },
    { label: "Skoletjenesten", component: <Skoletjenesten museum={museum} /> },
    { label: "Café & Butik", component: <CafeButik museum={museum} /> },
    { label: "Projekter", component: <Projekter museum={museum} /> },
    { label: "Efter dit besøg", component: <EfterDitBesøg museum={museum} /> },
    { label: "Bliv frivillig", component: <BlivFrivillig museum={museum} /> },
  ];

  if (museum === "Dorf") {
    commonLinks.push({
      label: "Møllelaug",
      component: <Møllelaug museum={museum} />,
    });
  }

  const [selectedLink, setSelectedLink] = useState("");

  const selectedComponent =
    commonLinks.find((link) => link.label === selectedLink)?.component || null;

  return (
    <div>
      <BannerCarousel images={museumImages.images} />

      <div className="flex">
        <div>
          <MuseumSideBar
            title={museum === 'Dorf' ? 'Dorf Møllegård' : 'Vildmosemuseet'}
            links={commonLinks}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
        <div className="flex-grow w-1/4 p-2">{selectedComponent}</div>
      </div>
    </div>
  );
};

export default MuseumPage;
