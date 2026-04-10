import React from "react";
import OurSignatureBeans from "../components/OurSignatureBeans";

/**
 * OurBeans — Halaman dedicated untuk menampilkan koleksi biji kopi.
 * Menggunakan pt-32 agar konten tidak tertutup Navbar fixed.
 */
const OurBeans = () => {
  return (
    <main className="pt-32 min-h-screen">
      <OurSignatureBeans />
    </main>
  );
};

export default OurBeans;
