import React from "react";
import HeroSection from "../components/HeroSection";

/**
 * Home — Halaman utama landing page.
 * Berisi HeroSection dan Signature Quote.
 */
const Home = () => {
  return (
    <main className="pt-24 min-h-screen flex flex-col">
      <HeroSection />

      {/* Signature Quote Section */}
      <section
        className="bg-coffee-secondary/5 dark:bg-coffee-deeproast dark:border-y dark:border-coffee-outline py-16 md:py-24 px-6 md:px-16 text-center transition-colors duration-300"
        aria-label="Kutipan khas kedai kopi"
      >
        <blockquote className="font-serif text-2xl text-coffee-primary dark:text-coffee-cream italic max-w-3xl mx-auto opacity-80">
          &ldquo;Kopi adalah bahasa yang universal, namun setiap cangkir
          menceritakan kisahnya sendiri.&rdquo;
        </blockquote>
      </section>
    </main>
  );
};

export default Home;
