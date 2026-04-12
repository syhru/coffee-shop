import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

/**
 * Navbar — Komponen navigasi global yang tampil di semua halaman.
 * Menggunakan <Link> dari react-router-dom untuk navigasi SPA.
 * Mendukung dark mode toggle via class strategy di <html>.
 */
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isSolid = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-5 max-w-full mx-auto border-b transition-all duration-500 ${isSolid ? 'bg-coffee-background shadow-md border-coffee-secondary/20' : 'bg-transparent border-transparent'} dark:bg-black/20 dark:backdrop-blur-md`}
        aria-label="Navigasi utama"
      >
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`text-2xl font-serif italic transition-colors duration-500 ${isSolid ? 'text-coffee-primary' : 'text-[#E5C058]'} dark:text-coffee-goldlight`}
        >
          The Artisanal Monograph
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to="/our-beans"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-label text-sm tracking-wide transition-colors duration-500 ${isSolid ? 'text-coffee-secondary hover:text-coffee-primary' : 'text-[#EFEBE9]/80 hover:text-[#E5C058]'} dark:text-white/70 dark:hover:text-coffee-goldlight`}
          >
            Our Beans
          </NavLink>
          <NavLink
            to="/roastery"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-label text-sm tracking-wide transition-colors duration-500 ${isSolid ? 'text-coffee-secondary hover:text-coffee-primary' : 'text-[#EFEBE9]/80 hover:text-[#E5C058]'} dark:text-white/70 dark:hover:text-coffee-goldlight`}
          >
            Roastery
          </NavLink>
          <NavLink
            to="/brewing-guides"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-label text-sm tracking-wide transition-colors duration-500 ${isSolid ? 'text-coffee-secondary hover:text-coffee-primary' : 'text-[#EFEBE9]/80 hover:text-[#E5C058]'} dark:text-white/70 dark:hover:text-coffee-goldlight`}
          >
            Brewing Guides
          </NavLink>
          <NavLink
            to="/subscription"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-label text-sm tracking-wide transition-colors duration-500 ${isSolid ? 'text-coffee-secondary hover:text-coffee-primary' : 'text-[#EFEBE9]/80 hover:text-[#E5C058]'} dark:text-white/70 dark:hover:text-coffee-goldlight`}
          >
            Subscription
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-coffee-secondary/10 dark:bg-coffee-deeproast text-coffee-primary dark:text-coffee-goldlight hover:bg-coffee-secondary/20  transition-all duration-300"
            aria-label={isDarkMode ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* CTA Button */}
          <button
            className="bg-coffee-goldlight  dark:text-coffee-midnight px-6 py-2.5 rounded-xl text-xs font-sans font-semibold uppercase tracking-[0.05rem] dark:bg-coffee-goldlight transition-all duration-300"
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
