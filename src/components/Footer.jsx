import React from "react";

/**
 * Footer — Komponen footer global yang tampil di semua halaman.
 */
const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-8 bg-coffee-primary flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-white/60 font-sans text-sm tracking-wide">
        © 2024 The Artisanal Monograph. Crafted with intention.
      </div>
      <div className="flex gap-8">
        <a
          className="text-white/60 hover:text-coffee-accent transition-all duration-300 font-sans text-sm tracking-wide"
          href="#privacy"
        >
          Privacy Policy
        </a>
        <a
          className="text-white/60 hover:text-coffee-accent transition-all duration-300 font-sans text-sm tracking-wide"
          href="#shipping"
        >
          Shipping Details
        </a>
        <a
          className="text-white/60 hover:text-coffee-accent transition-all duration-300 font-sans text-sm tracking-wide"
          href="#sustainability"
        >
          Sustainability
        </a>
      </div>
    </footer>
  );
};

export default Footer;
