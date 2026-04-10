import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * Navbar — Komponen navigasi global yang tampil di semua halaman.
 * Menggunakan <Link> dari react-router-dom untuk navigasi SPA.
 * Mendukung dark mode toggle via class strategy di <html>.
 */
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header>
      <nav
        className="fixed top-0 w-full z-50 bg-coffee-background/80 dark:bg-coffee-deeproast backdrop-blur-xl flex justify-between items-center px-6 md:px-8 py-5 max-w-full mx-auto border-b border-coffee-secondary/10 dark:border-coffee-outline transition-colors duration-300"
        aria-label="Navigasi utama"
      >
        <Link
          to="/"
          className="text-2xl font-serif italic text-coffee-primary dark:text-coffee-goldlight"
        >
          The Artisanal Monograph
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to="/our-beans"
            className={({ isActive }) =>
              `transition-all duration-300 font-sans text-sm tracking-wide ${
                isActive
                  ? "text-coffee-primary border-b border-coffee-primary dark:text-coffee-goldlight dark:border-coffee-goldlight"
                  : "text-coffee-secondary dark:text-white/60 border-b border-transparent hover:text-coffee-primary dark:hover:text-coffee-goldlight"
              }`
            }
          >
            Our Beans
          </NavLink>
          <NavLink
            to="/roastery"
            className={({ isActive }) =>
              `transition-all duration-300 font-sans text-sm tracking-wide ${
                isActive
                  ? "text-coffee-primary border-b border-coffee-primary dark:text-coffee-goldlight dark:border-coffee-goldlight"
                  : "text-coffee-secondary dark:text-white/60 border-b border-transparent hover:text-coffee-primary dark:hover:text-coffee-goldlight"
              }`
            }
          >
            Roastery
          </NavLink>
          <NavLink
            to="/brewing-guides"
            className={({ isActive }) =>
              `transition-all duration-300 font-sans text-sm tracking-wide ${
                isActive
                  ? "text-coffee-primary border-b border-coffee-primary dark:text-coffee-goldlight dark:border-coffee-goldlight"
                  : "text-coffee-secondary dark:text-white/60 border-b border-transparent hover:text-coffee-primary dark:hover:text-coffee-goldlight"
              }`
            }
          >
            Brewing Guides
          </NavLink>
          <NavLink
            to="/subscription"
            className={({ isActive }) =>
              `transition-all duration-300 font-sans text-sm tracking-wide ${
                isActive
                  ? "text-coffee-primary border-b border-coffee-primary dark:text-coffee-goldlight dark:border-coffee-goldlight"
                  : "text-coffee-secondary dark:text-white/60 border-b border-transparent hover:text-coffee-primary dark:hover:text-coffee-goldlight"
              }`
            }
          >
            Subscription
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-coffee-secondary/10 dark:bg-coffee-deeproast text-coffee-primary dark:text-coffee-goldlight hover:bg-coffee-secondary/20 dark:bg-coffee-deeproast transition-all duration-300"
            aria-label={isDarkMode ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* CTA Button */}
          <button
            className="bg-coffee-primary dark:bg-coffee-goldlight text-white dark:text-coffee-midnight px-6 py-2.5 rounded-xl text-xs font-sans font-semibold uppercase tracking-[0.05rem] hover:bg-coffee-secondary dark:bg-coffee-goldlight transition-all duration-300"
            aria-label="Pesan kopi sekarang"
          >
            Pesan Sekarang
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
