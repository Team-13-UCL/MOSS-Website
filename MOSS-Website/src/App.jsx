import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import useSchoolService from "./hooks/useSchoolService";
import {
  Home,
  YourVisit,
  SchoolService,
  Contact,
  NotFound,
  Activities,
  Activity,
  About,
  OpeningHoursAndPrices,
  MuseumPage
} from "./pages";
import NewsDetail from "./components/NewsDetail";

function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen max-w-screen p-2 bg-7 bg-opacity-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dit-besoeg" element={<YourVisit />} />
          <Route path="/skoletjenesten" element={<SchoolService />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/aabningstider-og-priser" element={<OpeningHoursAndPrices />} />

          <Route path="/om-museet/:sectionSlug" element={<About />} />
          <Route path="/om-museet/nyheder/:id" element={<NewsDetail />} />


          <Route path="/:museumSlug/:section?" element={<MuseumPage />} />

          <Route path="/aktiviteter" element={<Activities />} />
          <Route path="/:slug/aktiviteter/:id" element={<Activity />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
