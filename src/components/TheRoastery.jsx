
/**
 * Data highlight roastery — fitur unggulan proses sangrai.
 * Dipindahkan ke array agar mudah di-map ke HighlightItem.
 */
const HIGHLIGHTS_DATA = [
  {
    id: "ethically-sourced",
    icon: "eco",
    title: "Ethically Sourced",
    description: "Direct trade relationships that honor the farmer's labor.",
  },
  {
    id: "precision-roasting",
    icon: "precision_manufacturing",
    title: "Precision Roasting",
    description:
      "Custom thermal profiles tuned for every harvest and varietal.",
  },
  {
    id: "delivered-fresh",
    icon: "local_shipping",
    title: "Delivered Fresh",
    description: "Roasted on Monday, at your doorstep by Thursday.",
  },
];

/**
 * HighlightItem — Sub-komponen untuk menampilkan fitur unggulan roastery.
 * Menggunakan Material Symbols untuk ikon.
 */
const HighlightItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-5">
      <div className="bg-coffee-secondary/10 dark:bg-coffee-deeproast p-3 rounded-full flex items-center justify-center shrink-0">
        <span
          className="material-symbols-outlined text-coffee-primary dark:text-coffee-goldlight text-2xl"
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-coffee-primary dark:text-coffee-cream font-sans tracking-wide uppercase text-sm">
          {title}
        </h3>
        <p className="text-justify text-coffee-secondary dark:text-coffee-cream font-sans">{description}</p>
      </div>
    </div>
  );
};

/**
 * TheRoastery — Section komponen yang menampilkan filosofi dan proses
 * sangrai kopi artisan. Layout 2-kolom: teks di kiri, gambar di kanan.
 *
 * Warna mengikuti brand_theme.md:
 * - coffee-primary (#3E2723) → heading, teks utama
 * - coffee-secondary (#8D6E63) → body text, ikon background
 * - coffee-accent (#D4AF37) → badge chip, CTA hover
 * - coffee-background (#EFEBE9) → section background
 *
 * Termasuk newsletter sub-section di bawah.
 */
const TheRoastery = () => {
  return (
    <section
      id="roastery"
      className="w-full"
      aria-label="Proses sangrai kopi kami"
    >
      {/* ===== ROASTERY CONTENT ===== */}
      <div className="bg-coffee-background dark:bg-coffee-deeproast py-20 md:py-32 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="space-y-10 order-2 md:order-1">
              <header>
                <span className="text-coffee-accent dark:text-coffee-goldlight font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                  The Process
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-coffee-primary dark:text-coffee-cream leading-tight tracking-tight">
                  The Roastery Art
                </h2>
              </header>

              <p className="text-justify text-lg md:text-xl text-coffee-secondary dark:text-coffee-cream leading-relaxed font-sans max-w-prose">
                Our philosophy is rooted in patience and precision. Each day,
                our head roaster monitors every flame and airflow adjustment,
                roasting in{" "}
                <span className="text-coffee-primary dark:text-coffee-goldlight font-bold">
                  Small Batches
                </span>{" "}
                to ensure that the delicate chemical complexities of each origin
                are preserved. It is a slow, tactile ritual where technology
                meets intuition.
              </p>

              {/* Highlight Items */}
              <div className="space-y-8 pt-6">
                {HIGHLIGHTS_DATA.map((item) => (
                  <HighlightItem
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button
                  className="bg-coffee-accent/15 dark:bg-coffee-goldlight text-coffee-primary dark:text-coffee-midnight px-8 py-4 rounded-xl font-bold font-sans uppercase tracking-[0.1em] hover:bg-coffee-accent hover:text-white dark:bg-coffee-goldlight transition-all duration-300 editorial-shadow dark:shadow-coffee-goldlight"
                  aria-label="Jelajahi koleksi biji kopi kami"
                >
                  Explore Our Collections
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="order-1 md:order-2 relative group">
              {/* Decorative Tonal Shape */}
              <div
                className="absolute -top-10 -right-10 w-64 h-64 bg-coffee-secondary/10 dark:bg-coffee-goldlight rounded-full -z-10 group-hover:scale-110 transition-transform duration-700"
                aria-hidden="true"
              />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl bg-coffee-secondary/5 dark:bg-coffee-midnight aspect-[4/5] shadow-2xl dark:border dark:border-coffee-outline">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-wUb05xCXAn4oCHkx4T1YSi5VjPCR_rKySltNezoJJYyg9J-LdBzuDzGieQvCTCsA4t3kbTLZ3RhjYg6y_1mKezcd9aeQbL9w9c3KGE7Hby_JbzAwnDvsfxn_S9KtoHrX_O1DV1ANtbw59CE-1gaLKZbHeVRvVLk_5w-BDj2NP3xTKXkGCAlL5GBAmjDxBRmzEPX1l8zrqpYsoAWEx-cZ4DGuR1He750xEnAVbM9nCA3nN0NIs8OIc2-deWetFIlX_AhXEDSVICs"
                  alt="Biji kopi gelap yang sedang disangrai di dalam mesin roaster profesional vintage dengan elemen pemanas yang menyala hangat"
                  className="w-full h-full object-cover grayscale-[0.2] dark:grayscale-100 hover:grayscale-0 dark:hover:grayscale-0 dark:opacity-80 transition-all duration-1000 transform hover:scale-105"
                />

                {/* Floating Profile Chip */}
                <div className="absolute bottom-8 left-8 bg-coffee-primary/90 dark:bg-coffee-midnight backdrop-blur-md px-6 py-3 rounded-full border border-coffee-secondary/15 dark:border-coffee-outline">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-coffee-accent dark:text-coffee-goldlight"
                      aria-hidden="true"
                    >
                      local_fire_department
                    </span>
                    <span className="text-white dark:text-coffee-cream font-sans font-bold text-sm uppercase tracking-widest">
                      Profile: Balanced &amp; Deep
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Detail Image Overlay */}
              <div className="absolute -bottom-12 -left-12 hidden lg:block w-48 h-48 overflow-hidden rounded-xl border-[12px] border-coffee-background dark:border-coffee-outline shadow-xl">
                <img
                  src="https://i.pinimg.com/1200x/71/b6/0f/71b60fc4aed9c88e0a81ba07c56d5768.jpg"
                  alt="Tangan artisan dengan hati-hati menimbang biji kopi hijau di atas permukaan kayu minimalis"
                  className="w-full h-full rounded-xl object-cover dark:grayscale-[0.5]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section
        className="bg-coffee-secondary/5 dark:bg-coffee-midnight dark:border-t dark:border-coffee-outline py-16 md:py-24 px-6 md:px-8 transition-colors duration-300"
        aria-label="Berlangganan newsletter"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-coffee-primary dark:text-coffee-cream">
            Join the Monograph
          </h2>
          <p className="text-justify text-coffee-secondary dark:text-coffee-cream font-sans text-lg max-w-xl mx-auto">
            Receive stories from the source, brewing secrets, and early access
            to our seasonal single-origin releases.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto pt-4">
            <input
              className="flex-1 bg-transparent border-b-2 border-coffee-secondary/30 dark:border-coffee-outline outline-none px-4 py-3 focus:border-coffee-accent dark:focus:border-coffee-outline transition-colors font-sans text-coffee-primary dark:text-coffee-cream placeholder:text-coffee-secondary/50 dark:placeholder-coffee-cream"
              placeholder="Email address"
              type="email"
              aria-label="Alamat email untuk newsletter"
            />
            <button
              className="bg-coffee-primary dark:bg-coffee-goldlight text-white dark:text-coffee-midnight px-8 py-3 rounded-xl uppercase font-bold tracking-widest text-sm hover:bg-coffee-secondary dark:bg-coffee-goldlight transition-colors duration-300"
              aria-label="Berlangganan newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TheRoastery;
