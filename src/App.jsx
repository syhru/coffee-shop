import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurBeans from "./pages/OurBeans";
import Roastery from "./pages/Roastery";
import Brewing from "./pages/Brewing";
import Subscription from "./pages/Subscription";

/**
 * App — Root component yang mengatur routing dan layout global.
 * Navbar & Footer tampil di semua halaman (persistent layout).
 */
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-coffee-background dark:bg-coffee-midnight transition-colors duration-300">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-beans" element={<OurBeans />} />
          <Route path="/roastery" element={<Roastery />} />
          <Route path="/brewing-guides" element={<Brewing />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
