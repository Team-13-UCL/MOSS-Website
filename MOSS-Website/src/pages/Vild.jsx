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

const Vild = () => {

  const sideBarLinks = [
    { label: "Det Sker", component: <DetSker museum={'Vild'} /> },
    { label: "Om Vildmosemuseet", component: <OmMuseet museum={'Vild'} /> },
    { label: "Åbningstider & Priser", component: <AabningstiderOgPriser museum={'Vild'} /> },
    { label: "Praktisk Information", component: <PraktiskInformation museum={'Vild'} /> },
    { label: "Skoletjenesten", component: <Skoletjenesten museum={'Vild'} /> },
    { label: "Café & Butik", component: <CafeButik museum={'Vild'} /> },
    { label: "Projekter", component: <Projekter museum={'Vild'}  /> },
    { label: "Efter dit besøg", component: <EfterDitBesøg museum={'Vild'} /> },
    { label: "Bliv frivillig", component: <BlivFrivillig museum={'Vild'} /> },
  ];

  const [selectedLink, setSelectedLink] = useState("");

  const selectedComponent =
    sideBarLinks.find((link) => link.label === selectedLink)?.component || null;

  return (
    <div>
      <img src='../assets/images/vild/VILD Banner.jpg' alt='Vild Banner' />
      <div className='flex'>
        <div className='w-1/4'>
          <MuseumSideBar
            title='Vildmosemuseet'
            links={sideBarLinks}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
        <div className="flex-grow">
          {selectedComponent}
        </div>
      </div>
    </div>
  )
}

export default Vild