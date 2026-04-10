import React from "react";
import TheRoastery from "../components/TheRoastery";

/**
 * Roastery — Halaman dedicated untuk proses sangrai kopi.
 * Menggunakan pt-32 agar konten tidak tertutup Navbar fixed.
 */
const Roastery = () => {
  return (
    <main className="pt-32 min-h-screen">
      <TheRoastery />
    </main>
  );
};

export default Roastery;
