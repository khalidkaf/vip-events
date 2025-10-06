import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Artists from "./components/Artists";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Transports from "./components/Transports";
import ArtistPage from "./components/ArtistPage"; // nouvelle page artiste
import EventPage from "./components/EventPage"; // nouvelle page artiste
import TransportPage from "./components/TransportPage"; // nouvelle page artiste
import MentionsLegales from "./components/MentionsLegales";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />

        <Routes>
          {/* Page d'accueil avec toutes les sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Artists />
                <Events />
                <Transports />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Page dynamique pour chaque artiste */}
          <Route path="/artists/:slug" element={<ArtistPage />} />
          <Route path="/events/:slug" element={<EventPage />} />
          <Route path="/transports/:slug" element={<TransportPage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
