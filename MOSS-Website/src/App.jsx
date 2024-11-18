import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Home,
  YourVisit,
  SchoolService,
  Contact,
  NotFound,
  Activities,
  Activity,
  Vild,
  Dorf,
  About,
  OpeningHoursAndPrices,
  News,
  Sponsors,
  Boards
} from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen max-w-screen p-2 bg-7 bg-opacity-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dit-besoeg" element={<YourVisit />} />
          <Route path="/skoletjenesten" element={<SchoolService />} />
          <Route path="/om-museet" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/aabningstider-og-priser" element={<OpeningHoursAndPrices />} />

          <Route path="/dorf-moellegaard" element={<Dorf />} />
          <Route path="/vildmosemuseet" element={<Vild />} />

          <Route path="/aktiviteter" element={<Activities />} />
          <Route path="/dorf-moellegaard/aktiviteter/:id" element={<Activity />} />
          <Route path="/vildmosemuseet/aktiviteter/:id" element={<Activity />} />
          <Route path="/museum-moss/aktiviteter/:id" element={<Activity />} />

          <Route path="/nyheder" element={<News />} />
          <Route path="/sponsorer" element={<Sponsors />} />
          <Route path="/bestyrelser" element={<Boards />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
