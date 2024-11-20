import React, { useState } from 'react';
import MuseumSideBar from '../components/MuseumSideBar';
import DetSker from '../components/DetSker';
import OmMuseet from '../components/OmMuseet';
import AabningstiderOgPriser from '../components/AabningstiderOgPriser';
import PraktiskInformation from '../components/PraktiskInformation';
import Skoletjenesten from '../components/Skoletjenesten';
import CafeButik from '../components/CafeButik';
import Projekter from '../components/Projekter';
import EfterDitBesøg from '../components/EfterDitBesøg';
import BlivFrivillig from '../components/BlivFrivillig';
import Møllelaug from '../components/Møllelaug';

const Dorf = () => {

  const sideBarLinks = [
    { label: "Det Sker", component: <DetSker museum={'Dorf'} /> },
    { label: "Om Dorf Møllegård", component: <OmMuseet museum={'Dorf'} /> },
    { label: "Åbningstider & Priser", component: <AabningstiderOgPriser museum={'Dorf'} /> },
    { label: "Praktisk Information", component: <PraktiskInformation museum={'Dorf'} /> },
    { label: "Skoletjenesten", component: <Skoletjenesten museum={'Dorf'} /> },
    { label: "Café & Butik", component: <CafeButik museum={'Dorf'} /> },
    { label: "Projekter", component: <Projekter museum={'Dorf'} /> },
    { label: "Efter dit besøg", component: <EfterDitBesøg museum={'Dorf'} /> },
    { label: "Bliv frivillig", component: <BlivFrivillig museum={'Dorf'} /> },
    { label: "Møllelaug", component: <Møllelaug museum={'Dorf'} /> },
  ];

  const [selectedLink, setSelectedLink] = useState("");

  const selectedComponent =
    sideBarLinks.find((link) => link.label === selectedLink)?.component || null;


  return (
    <div>
      <img src="..\assets\images\dorf\DORF Banner.png" alt="banner" />
      <div className='flex'>
        <div>
          <MuseumSideBar
            title='Dorf Møllegård'
            links={sideBarLinks}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
        <div className="flex-grow w-1/4 p-2">
          {selectedComponent}
        </div>
      </div>
    </div>
  )
}

export default Dorf

