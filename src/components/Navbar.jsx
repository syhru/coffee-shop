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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
          className={`text-xl sm:text-2xl font-serif italic transition-colors duration-500 ${isSolid ? 'text-coffee-primary' : 'text-[#E5C058]'} dark:text-coffee-goldlight`}
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
            className="hidden md:block bg-coffee-goldlight dark:text-coffee-midnight px-6 py-2.5 rounded-xl text-xs font-sans font-semibold uppercase tracking-[0.05rem] dark:bg-coffee-goldlight transition-all duration-300"
            aria-label="Pesan kopi sekarang"
          >
            Pesan Sekarang
          </button>

          <button 
            className="md:hidden ml-4 p-2 text-coffee-primary dark:text-coffee-cream focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-coffee-background dark:bg-coffee-midnight shadow-lg border-t border-coffee-secondary/10 md:hidden flex flex-col p-4 gap-4">
            <Link to="/our-beans" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee-primary dark:text-coffee-cream font-label tracking-wide text-sm transition-colors hover:text-coffee-accent dark:hover:text-coffee-goldlight">Our Beans</Link>
            <Link to="/roastery" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee-primary dark:text-coffee-cream font-label tracking-wide text-sm transition-colors hover:text-coffee-accent dark:hover:text-coffee-goldlight">Roastery</Link>
            <Link to="/brewing-guides" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee-primary dark:text-coffee-cream font-label tracking-wide text-sm transition-colors hover:text-coffee-accent dark:hover:text-coffee-goldlight">Brewing Guides</Link>
            <Link to="/subscription" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee-primary dark:text-coffee-cream font-label tracking-wide text-sm transition-colors hover:text-coffee-accent dark:hover:text-coffee-goldlight">Subscription</Link>
            <button className="w-full mt-2 bg-[#E5C058] text-[#120E0B] py-3 rounded-full font-bold text-sm tracking-widest editorial-shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              PESAN SEKARANG
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
