import React from "react";
import BrewingGuides from "../components/BrewingGuides";

/**
 * Brewing — Halaman dedicated untuk panduan metode seduh kopi.
 * Menggunakan pt-32 agar konten tidak tertutup Navbar fixed.
 */
const Brewing = () => {
  return (
    <main className="pt-32 min-h-screen">
      <BrewingGuides />
    </main>
  );
};

export default Brewing;
