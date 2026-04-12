import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import StorytellingSection from "../components/StorytellingSection";
import SignatureSelection from "../components/SignatureSelection";
import ArtisanalGallery from "../components/ArtisanalGallery";
import PhilosophySection from "../components/PhilosophySection";
import ProductSpotlight from "../components/ProductSpotlight";

/**
 * Data kutipan (quotes) untuk carousel
 */
const quotes = [
  { text: "Kopi adalah bahasa yang universal, namun setiap cangkir menceritakan kisahnya sendiri.", author: "OUR PHILOSOPHY" },
  { text: "Seni menyeduh kopi adalah merayakan jeda dalam kehidupan yang serba cepat.", author: "THE ROASTER" },
  { text: "Setiap biji kopi membawa memori dan karakter tanah tempat ia ditanam.", author: "HEAD BARISTA" },
  { text: "Kesempurnaan secangkir kopi lahir dari keseimbangan antara kesabaran dan presisi.", author: "THE MONOGRAPH" }
];

/**
 * Home — Halaman utama landing page.
 * Berisi HeroSection dan Signature Quote Carousel.
 */
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Jalankan timer untuk rotasi otomatis setiap 5 detik (5000ms)
    const interval = setInterval(() => {
      setFade(false); // Memulai animasi fade out
      
      // Tunggu setengah detik agar teks hilang, lalu ubah teks dan fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFade(true);
      }, 500);
      
    }, 5000);

    // Membersihkan interval ketika komponen unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-24 min-h-screen flex flex-col">
      <HeroSection />
      
      <StorytellingSection />

      {/* Signature Quote Carousel Section */}
      <section
        className="bg-coffee-secondary/5 dark:bg-coffee-deeproast dark:border-y dark:border-coffee-outline py-16 md:py-24 px-6 md:px-16 text-center transition-colors duration-300"
        aria-label="Kutipan khas kedai kopi"
      >
        <div className="flex flex-col items-center justify-center">
          {/* Ikon Kutipan Statis */}
          <span className="material-symbols-outlined text-6xl text-coffee-secondary/60 dark:text-coffee-cream/40 mb-6">
            ❞
          </span>
          
          {/* Konten Teranimasi */}
          <div className={`transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {/* Teks Kutipan */}
            <blockquote className="font-serif text-2xl md:text-3xl text-coffee-primary dark:text-coffee-cream italic max-w-4xl mx-auto text-center leading-relaxed">
              "{quotes[currentIndex].text}"
            </blockquote>
            
            {/* Nama Penulis */}
            <div className="flex items-center justify-center mt-8">
              <div className="w-12 h-px bg-coffee-secondary/30"></div>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-coffee-secondary dark:text-coffee-cream/60 mx-4">
                {quotes[currentIndex].author}
              </span>
              <div className="w-12 h-px bg-coffee-secondary/30"></div>
            </div>
          </div>
        </div>
      </section>

      <SignatureSelection />
      <ArtisanalGallery />
      <PhilosophySection />
      <ProductSpotlight />
    </main>
  );
};

export default Home;
