import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const MuseumPage = () => {
  const { museumSlug, section } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(section || "det-sker");

  const museum =
    museumSlug === "dorf-moellegaard"
      ? "Dorf"
      : museumSlug === "vildmosemuseet"
        ? "Vild"
        : null;

  if (!museum) {
    return <div>Museum not found</div>;
  }

  const museumImages = museums.find((m) => m.id === museum);

  const commonLinks = [
    { label: "Det Sker", path: "det-sker", component: <DetSker museum={museum} /> },
    { label: "Om Museet", path: "om-museet", component: <OmMuseet museum={museum} /> },
    { label: "Åbningstider & Priser", path: "aabningstider-og-priser", component: <AabningstiderOgPriser museum={museum} /> },
    { label: "Praktisk Information", path: "praktisk-information", component: <PraktiskInformation museum={museum} /> },
    { label: "Skoletjenesten", path: "skoletjenesten", component: <Skoletjenesten museum={museum} /> },
    { label: "Café & Butik", path: "cafe-butik", component: <CafeButik museum={museum} /> },
    { label: "Projekter", path: "projekter", component: <Projekter museum={museum} /> },
    { label: "Efter dit besøg", path: "efter-dit-besog", component: <EfterDitBesøg museum={museum} /> },
    { label: "Bliv frivillig", path: "bliv-frivillig", component: <BlivFrivillig museum={museum} /> },
  ];

  if (museum === "Dorf") {
    commonLinks.push({
      label: "Møllelaug",
      path: "moellelaug",
      component: <Møllelaug museum={museum} />,
    });
  }

  const handleNavigation = (path) => {
    setActiveSection(path);
    navigate(`/${museumSlug}/${path}`);
  };

  const selectedComponent =
    commonLinks.find((link) => link.path === activeSection)?.component || (
      <p>Vælg en sektion fra menuen.</p>
    );

  return (
    <div >
      <div className="w-full h-[50vh]">
        <BannerCarousel images={museumImages.images} />
      </div>
      <div className="flex">
        <div>
          <MuseumSideBar
            title={museum === "Dorf" ? "Dorf Møllegård" : "Vildmosemuseet"}
            links={commonLinks}
            activePath={activeSection}
            onNavigate={handleNavigation}
          />
        </div>
        <div className="flex-grow w-1/4 p-2">{selectedComponent}</div>
      </div>
    </div>
  );
};

export default MuseumPage;
