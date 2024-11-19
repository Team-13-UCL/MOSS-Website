import React, { useState } from 'react';
import MuseumSideBar from '../components/MuseumSideBar';
import DetSker from '../components/DetSker';


// PLACEHOLDER:
const OmDorf = () => <div>Om Dorf Møllegård content</div>;
const Aabningstider = () => <div>Åbningstider og priser content</div>;

const Dorf = () => {

  const sideBarLinks = [
    { label: "Det Sker", component: <DetSker museum={'Dorf'} /> },
    { label: "Om Dorf Møllegård", component: <OmDorf /> },
    { label: "Åbningstider og priser", component: <Aabningstider /> },
  ];

  const [selectedLink, setSelectedLink] = useState("");

  const selectedComponent =
    sideBarLinks.find((link) => link.label === selectedLink)?.component || null;


  return (
    <div>
      <img src="..\assets\images\dorf\DORF Banner.png" alt="banner" />
      <div className='flex'>
        <div className='w-1/4'>
          <MuseumSideBar
            title='Dorf Møllegård'
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

export default Dorf

