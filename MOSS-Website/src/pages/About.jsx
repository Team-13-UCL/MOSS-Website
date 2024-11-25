import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MuseumSideBar from "../components/MuseumSideBar";
import Sponsors from "../components/Sponsors";
import News from "../components/News";
import Boards from "../components/Boards";
import Strategi from "../components/Strategi";
import Statutes from "../components/Statutes";
import AnnualReports from "../components/AnnualReports";
import PersonalDataPolicy from "../components/PersonalDataPolicy";
import ClimateCertificate from "../components/ClimateCertificate";

const About = () => {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();
  const [activeSlug, setActiveSlug] = useState(sectionSlug || "nyheder");
  const [renderedComponent, setRenderedComponent] = useState(null);

  const aboutLinks = [
    { label: "Nyheder", path: "nyheder", component: <News /> },
    { label: "Sponsorer", path: "sponsorer", component: <Sponsors /> },
    { label: "Bestyrelser", path: "bestyrelser", component: <Boards /> },
    { label: "Strategi", path: "strategi", component: <Strategi /> },
    { label: "Vedtægter", path: "vedtaegter", component: <Statutes /> },
    { label: "Årsrapporter", path: "aarsrapporter", component: <AnnualReports /> },
    { label: "Persondatapolitik", path: "persondata-politik", component: <PersonalDataPolicy /> },
    { label: "Klimacertifikat", path: "klimacertifikat", component: <ClimateCertificate /> },
  ];

  const getSelectedComponent = (sectionSlug) => {
    return (
      aboutLinks.find((link) => link.path === sectionSlug)?.component || (
        <p>Vælg en sektion fra menuen.</p>
      )
    );
  };

  useEffect(() => {
    if (sectionSlug) {
      setActiveSlug(sectionSlug);
      setRenderedComponent(getSelectedComponent(sectionSlug));
    }
  }, [sectionSlug]);

  const handleNavigation = (path) => {
    setActiveSlug(path);
    navigate(`/om-museet/${path}`);
  };

  return (
    <div>
      <div className="flex">
        <div>
          <MuseumSideBar
            title="Om museet"
            links={aboutLinks}
            activePath={activeSlug}
            onNavigate={handleNavigation}
          />
        </div>
        <div className="flex-grow w-1/4 p-2">{renderedComponent}</div>
      </div>
    </div>
  );
};

export default About;
