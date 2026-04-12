import { motion as Motion } from 'framer-motion';
import FloatingChip from './FloatingChip';
import TastingNote from './TastingNote';

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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
  }
};

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative bg-transparent flex-grow flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24 py-6 md:py-8 lg:py-56 pt-32 lg:pt-32 pb-32 md:pb-40 min-h-screen gap-12 overflow-hidden"
      aria-label="Hero utama kedai kopi"
    >
      {/* ===== BACKGROUND VIDEO ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/videos/coffee-bg.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ===== TEXT CONTENT ===== */}
      <Motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 flex flex-col items-start relative z-20 drop-shadow-xl"
      >
        {/* Season Badge */}
        <Motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 bg-[#1F1814] rounded-full border border-coffee-outline/30">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C058]">
            Season&apos;s Selection
          </span>
        </Motion.div>

        {/* Headline — satu h1 per halaman (a11y rule) */}
        <Motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-tight text-[#EFEBE9] mb-4 -tracking-[0.02em]">
          Seni di Setiap{" "}
          <span className="italic font-normal text-[#E5C058]">Seduhan</span>
        </Motion.h1>

        {/* Subtitle */}
        <Motion.p variants={itemVariants} className="text-justify font-sans text-sm md:text-base text-[#EFEBE9]/90 max-w-md mb-6 leading-relaxed">
          Nikmati perpaduan biji kopi pilihan terbaik yang disangrai dengan
          penuh dedikasi untuk mengawali hari Anda.
        </Motion.p>

        {/* Gambar Mobile Only - Muncul di antara teks dan tombol */}
        <Motion.div variants={itemVariants} className="md:hidden w-full relative mt-8 mb-16">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolTqSyQh5QKsG4-5kiBsWpGo1piHYMwX6-vCN6WL1Hn5HvvSh3yQu5vvFWykGeVUcngmGKtO9sxaa3y6D3M3lF0xNDtIdmaPkFC2JzTpiv4gWLEssTE5Hi_2Dg0BF_Ex0rZBwEGMmFna7tXXMXmnGsEVGVHaN7eUtxN1ybYUR8VdIKIfwM9phGJGnIT56cVSylyp8haldLu4kduxN_uiMs0MDTSOL7I-8W8h7ocgADZyk50gvprbagFOkc9U1soXGj69_c4UeD3s"
            alt="Barista ahli menuangkan air panas ke dalam pour-over coffee dripper dengan pencahayaan dramatis dan uap hangat mengepul"
            className="w-full h-auto object-cover rounded-xl mx-auto z-10 editorial-shadow grayscale-[20%]"
          />
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center z-10 scale-90">
            <FloatingChip flavor="Floral & Nutty" origin="Ethiopian Yirgacheffe G1" />
          </div>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full -z-10" />
        </Motion.div>

        {/* CTA Buttons */}
        <Motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            className="w-full sm:w-auto bg-coffee-accent dark:bg-coffee-goldlight text-white dark:text-coffee-midnight px-8 py-4 rounded-xl font-sans text-sm font-semibold uppercase tracking-[0.05rem] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 editorial-shadow"
            aria-label="Pesan kopi sekarang"
          >
            Pesan Sekarang
          </button>

          <button
            className="w-full sm:w-auto justify-center text-[#E5C058] px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.05rem] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2 group"
            aria-label="Jelajahi menu kopi"
          >
            Jelajahi Menu
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </button>
        </Motion.div>

        {/* Tasting Notes Grid */}
        <Motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 md:gap-8 mt-8 md:mt-12 w-full">
          <TastingNote
            title="Single Origin"
            description="Ethically sourced from high-altitude volcanic soil."
          />
          <TastingNote
            title="Small Batch"
            description="Roasted daily to preserve volatile aromatic oils."
          />
        </Motion.div>
      </Motion.div>

      {/* ===== IMAGE COMPOSITION ===== */}
      <div className="hidden md:flex w-full md:w-1/2 relative justify-center items-center z-20">
        {/* Main Visual Container */}
        <div className="relative aspect-[4/5] md:aspect-square max-h-[500px] lg:max-h-[550px] w-auto mx-auto group">
          {/* Asymmetric Frame */}
       
          {/* Primary Hero Image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden editorial-shadow bg-coffee-secondary/5 dark:bg-coffee-secondary/5 ">
            <img
              className="w-full h-full object-cover grayscale-[20%] dark:grayscale-[40%] hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolTqSyQh5QKsG4-5kiBsWpGo1piHYMwX6-vCN6WL1Hn5HvvSh3yQu5vvFWykGeVUcngmGKtO9sxaa3y6D3M3lF0xNDtIdmaPkFC2JzTpiv4gWLEssTE5Hi_2Dg0BF_Ex0rZBwEGMmFna7tXXMXmnGsEVGVHaN7eUtxN1ybYUR8VdIKIfwM9phGJGnIT56cVSylyp8haldLu4kduxN_uiMs0MDTSOL7I-8W8h7ocgADZyk50gvprbagFOkc9U1soXGj69_c4UeD3s"
              alt="Barista ahli menuangkan air panas ke dalam pour-over coffee dripper dengan pencahayaan dramatis dan uap hangat mengepul"
            />
          </div>

          {/* Floating Tasting Note Chip */}
          <FloatingChip flavor="Floral & Nutty" origin="Ethiopian Yirgacheffe G1" />

          {/* Small Secondary Floating Image */}
          <div className="hidden lg:block absolute -top-10 -right-10 w-40 h-40 rounded-full overflow-hidden border-8 border-coffee-outline dark:border-coffee-outline editorial-shadow z-20">
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
