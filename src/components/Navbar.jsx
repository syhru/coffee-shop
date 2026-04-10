import React from "react";
import { Link } from "react-router-dom";

/**
 * Navbar — Komponen navigasi global yang tampil di semua halaman.
 * Menggunakan <Link> dari react-router-dom untuk navigasi SPA.
 */
const Navbar = () => {
  return (
    <header>
      <nav
        className="fixed top-0 w-full z-50 bg-coffee-background/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-8 py-5 max-w-full mx-auto border-b border-coffee-secondary/10"
        aria-label="Navigasi utama"
      >
        <Link to="/" className="text-2xl font-serif italic text-coffee-primary">
          The Artisanal Monograph
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link
            className="text-coffee-primary border-b border-coffee-primary font-sans text-sm tracking-wide"
            to="/our-beans"
          >
            Our Beans
          </Link>
          <Link
            className="text-coffee-primary/70 hover:text-coffee-primary transition-all duration-300 font-sans text-sm tracking-wide"
            to="/roastery"
          >
            Roastery
          </Link>
          <Link
            className="text-coffee-primary/70 hover:text-coffee-primary transition-all duration-300 font-sans text-sm tracking-wide"
            to="/brewing-guides"
          >
            Brewing Guides
          </Link>
          <Link
            className="text-coffee-primary/70 hover:text-coffee-primary transition-all duration-300 font-sans text-sm tracking-wide"
            to="/subscription"
          >
            Subscription
          </Link>
        </div>

        <button
          className="bg-coffee-primary text-white px-6 py-2.5 rounded-xl text-xs font-sans font-semibold uppercase tracking-[0.05rem] hover:bg-coffee-secondary transition-all duration-300"
          aria-label="Pesan kopi sekarang"
        >
          Pesan Sekarang
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
