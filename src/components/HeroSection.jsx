import React from "react";

/**
 * TastingNote — Sub-komponen untuk menampilkan catatan rasa kopi.
 * Digunakan di grid bawah hero text.
 */
const TastingNote = ({ title, description }) => {
  return (
    <div>
      <span className="block font-serif text-2xl text-coffee-primary dark:text-coffee-cream mb-1">
        {title}
      </span>
      <span className="text-sm text-coffee-secondary dark:text-coffee-cream font-sans">
        {description}
      </span>
    </div>
  );
};

/**
 * FloatingChip — Badge kecil melayang di atas gambar hero,
 * menampilkan profil rasa biji kopi unggulan.
 */
const FloatingChip = ({ flavor, origin }) => {
  return (
    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-coffee-deeproast p-6 editorial-shadow rounded-xl max-w-[200px] border border-coffee-secondary/10 dark:border-coffee-outline z-20">
      <div className="flex gap-1 mb-3">
        <span className="w-4 h-4 rounded-full bg-coffee-accent dark:bg-coffee-goldlight" />
        <span className="w-4 h-4 rounded-full bg-coffee-primary opacity-20 dark:bg-coffee-deeproast dark:opacity-100" />
      </div>
      <p className="font-serif text-lg text-coffee-primary dark:text-coffee-cream leading-tight">
        {flavor}
      </p>
      <p className="text-xs text-coffee-secondary dark:text-coffee-cream font-sans mt-1">{origin}</p>
    </div>
  );
};

/**
 * HeroSection — Komponen utama bagian hero landing page.
 *
 * Menampilkan:
 * - Badge season's selection
 * - Headline & subtitle sesuai copy_writing.md
 * - Tombol CTA (Pesan Sekarang + Jelajahi Menu)
 * - Grid tasting notes (Single Origin & Small Batch)
 * - Komposisi gambar hero dengan efek visual
 *
 * Semua warna mengikuti brand_theme.md:
 * - coffee-primary (#3E2723) untuk teks & elemen dominan
 * - coffee-secondary (#8D6E63) untuk aksen & teks sekunder
 * - coffee-background (#EFEBE9) untuk background
 * - coffee-accent (#D4AF37) untuk badge & CTA
 */
const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="flex-grow flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24 py-12 md:py-20 gap-12 overflow-hidden"
      aria-label="Hero utama kedai kopi"
    >
      {/* ===== TEXT CONTENT ===== */}
      <div className="w-full md:w-1/2 flex flex-col items-start z-10">
        {/* Season Badge */}
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 bg-coffee-accent/15 dark:bg-coffee-deeproast rounded-full dark:border dark:border-coffee-outline">
          <span className="text-[10px] font-bold uppercase tracking-widest text-coffee-primary dark:text-coffee-goldlight">
            Season&apos;s Selection
          </span>
        </div>

        {/* Headline — satu h1 per halaman (a11y rule) */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-coffee-primary dark:text-coffee-cream leading-[1.1] mb-6 -tracking-[0.02em]">
          Seni di Setiap{" "}
          <span className="italic font-normal dark:text-coffee-goldlight">Seduhan</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg md:text-xl text-coffee-secondary dark:text-coffee-cream max-w-md mb-10 leading-relaxed">
          Nikmati perpaduan biji kopi pilihan terbaik yang disangrai dengan
          penuh dedikasi untuk mengawali hari Anda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            className="crema-gradient dark:!bg-none dark:bg-coffee-goldlight text-white dark:text-coffee-midnight px-8 py-4 rounded-xl font-sans text-sm font-semibold uppercase tracking-[0.05rem] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 editorial-shadow"
            aria-label="Pesan kopi sekarang"
          >
            Pesan Sekarang
          </button>

          <button
            className="text-coffee-primary dark:text-coffee-goldlight px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.05rem] border-b-2 border-transparent hover:border-coffee-accent dark:hover:border-coffee-outline-goldlight transition-all duration-300 inline-flex items-center gap-2 group"
            aria-label="Jelajahi menu kopi"
          >
            Jelajahi Menu
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Tasting Notes Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 border-l-2 border-coffee-secondary/20 dark:border-coffee-outline pl-8">
          <TastingNote
            title="Single Origin"
            description="Ethically sourced from high-altitude volcanic soil."
          />
          <TastingNote
            title="Small Batch"
            description="Roasted daily to preserve volatile aromatic oils."
          />
        </div>
      </div>

      {/* ===== IMAGE COMPOSITION ===== */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center">
        {/* Background Blur Decoration */}
        <div
          className="absolute -right-20 top-0 w-full h-full bg-coffee-background dark:bg-coffee-goldlight rounded-full blur-[80px] opacity-60 pointer-events-none dark:hidden"
          aria-hidden="true"
        />

        {/* Main Visual Container */}
        <div className="relative w-full aspect-[4/5] md:aspect-square group">
          {/* Asymmetric Frame */}
          <div
            className="absolute inset-0 bg-coffee-secondary/10 dark:bg-coffee-deeproast translate-x-4 translate-y-4 rounded-2xl -rotate-1 transition-transform group-hover:rotate-0 duration-500 dark:border dark:border-coffee-outline"
            aria-hidden="true"
          />

          {/* Primary Hero Image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden editorial-shadow bg-coffee-secondary/5 dark:bg-coffee-deeproast dark:border dark:border-coffee-outline">
            <img
              className="w-full h-full object-cover grayscale-[20%] dark:grayscale-[40%] hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolTqSyQh5QKsG4-5kiBsWpGo1piHYMwX6-vCN6WL1Hn5HvvSh3yQu5vvFWykGeVUcngmGKtO9sxaa3y6D3M3lF0xNDtIdmaPkFC2JzTpiv4gWLEssTE5Hi_2Dg0BF_Ex0rZBwEGMmFna7tXXMXmnGsEVGVHaN7eUtxN1ybYUR8VdIKIfwM9phGJGnIT56cVSylyp8haldLu4kduxN_uiMs0MDTSOL7I-8W8h7ocgADZyk50gvprbagFOkc9U1soXGj69_c4UeD3s"
              alt="Barista ahli menuangkan air panas ke dalam pour-over coffee dripper dengan pencahayaan dramatis dan uap hangat mengepul"
            />
          </div>

          {/* Floating Tasting Note Chip */}
          <FloatingChip flavor="Floral & Nutty" origin="Ethiopian Yirgacheffe G1" />

          {/* Small Secondary Floating Image */}
          <div className="hidden lg:block absolute -top-10 -right-10 w-40 h-40 rounded-full overflow-hidden border-8 border-coffee-background dark:border-coffee-outline editorial-shadow z-20">
            <img
              className="w-full h-full object-cover dark:grayscale-[20%]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKTBo-YeLuG9rAqpiTfaQ-w6CsExFLUSdV9zHXe3EeZ4DL4wUSc1YO7lh8tSWdAews8HIn7Lc0gkAncmuGz-FTJEYQcYLqZdHF1i1oFaVUlV52e-gT7do4Tjay2r2kkWbp5tN_v9dVyYiyNpsGqsQrmVRxinKYG7d_YuXrIhc2RCIbj4vzBxb1_gYjDt6mqVTkyhNFZrLhFJMe5Nw9BGZ9YO802iOdfZ2hZUXh7zzJFWAYoVLIMInrVwfhpY_KzeE0679EFjIHRU"
              alt="Biji kopi sangrai dengan tekstur berminyak dan warna coklat espresso yang kaya"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
