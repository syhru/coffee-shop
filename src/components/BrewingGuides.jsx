import React from "react";

/**
 * Data panduan brewing — setiap metode seduh kopi.
 * Dipindahkan ke array agar mudah di-map ke BrewCard.
 */
const GUIDES_DATA = [
  {
    id: "v60-pour-over",
    title: "V60 Pour Over",
    badge: "Technique",
    duration: "3-4 mins",
    description:
      "The professional's choice for clarity and complexity. Highlighting the delicate floral notes of our single-origin roasts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCI5ENjvZKHfsqDhCgbAZS6uHhKgnGDnZoKjEJ0b6QSKe6LbI7XgQV5CCxyy8yFROHnRh1GWXPgpfwR3eE6G0Gk7Bbsla8IJWL_cH-3CRimbM4o7DLILgdW7LF9SP1LBQ7IpGShID5IhZxveNc_3pNQeQE9tpMU7ZS7PzqC4_eIzLkZxHVdyQ64FSsUteFM9WIyF2GZmn0fO720OS6b6V56Pc3Z9YXSAUF0JUUgB6d6MoIsGpHE-24lZMZajPeOqhaZrs67Y2PS2mY",
    imageAlt:
      "Foto overhead minimalis V60 dripper keramik di atas carafe kaca dengan uap mengepul di cahaya pagi",
  },
  {
    id: "french-press",
    title: "French Press",
    badge: "Full Body",
    duration: "4-5 mins",
    description:
      "Immersion brewing for a rich, heavy mouthfeel. Ideal for those who enjoy the dark chocolate and nutty profiles of our signature blends.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfTzsIdX-HY32URZGMN1ma7ef_WtcBfS75x_McROuIvgUUoe6hOrywzzEwpa2AOJPa4ROqupP-Rq3-A0wF4i5hK0-rcxUMOGBbBsqpEW_Oh5KUNNUQoctRsVzc6aGNfaRmd3kq9gg_Hgt_R1AJZQwk_Bx-xSXwM2Xu42UEZY-C760qbotUedVWh8xOV8vqyk-wjZKKNLOKtRBWkzYpja55cNFntK792LArzh_LFsiVHrOXY1VGnF3pymXcPcCP2uPqckSd53l3YKs",
    imageAlt:
      "Foto bernuansa gelap French press vintage stainless steel di atas meja kayu dengan bubuk kopi tersebar artistik",
  },
  {
    id: "aeropress",
    title: "Aeropress",
    badge: "Versatile",
    duration: "2 mins",
    description:
      "The modern classic. A versatile method that combines immersion and pressure for a clean, sweet cup every single time.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Nv4PBuYCKEneWttyG3Qlg4LgPorH6YxK9nb3hGjOM6FF4qNs5yzE57ZbVgd2aI1L0k8YWBAJYHagGUTT1ttkCKjOyrFshHeeysLKFAP8eXO1HC0YqjG58ev9e2p4Fr2_XaZADy8nWfmtxZCT7_uyYN8QElUm0vU6dKHNxZPPz8y0N0CPgXetE_QhSvL1lVYZaR4THkyMM4pXepjNRwmYj1jptDG_BH0NDrM3IhW9QQnB9C8j39Z_AxLv-H0VDodIbOgWMAcEHDA",
    imageAlt:
      "Estetika minimalis kontemporer Aeropress di atas permukaan krem bersih dengan cangkir porselen kecil",
  },
];

/**
 * BrewCard — Sub-komponen kartu metode seduh kopi yang reusable.
 * Props-driven sesuai instruksi component_slicing.md.
 */
const BrewCard = ({ title, badge, duration, description, image, imageAlt }) => {
  return (
    <article className="group">
      {/* Image Container */}
      <div className="aspect-[4/5] bg-coffee-secondary/5 dark:bg-coffee-deeproast mb-8 overflow-hidden relative rounded-2xl dark:border dark:border-coffee-outline">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-coffee-primary dark:bg-coffee-goldlight text-white dark:text-coffee-midnight text-[10px] uppercase tracking-widest rounded-full font-bold">
            {badge}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="text-3xl font-serif text-coffee-primary dark:text-coffee-cream italic">
            {title}
          </h3>
          <span className="text-xs font-sans text-coffee-secondary dark:text-coffee-cream uppercase tracking-widest pb-1">
            {duration}
          </span>
        </div>

        <p className="text-justify text-coffee-secondary dark:text-coffee-cream font-sans text-sm leading-relaxed mb-6">
          {description}
        </p>

        <a
          href="#"
          className="inline-flex items-center text-coffee-primary dark:text-coffee-goldlight font-bold text-xs uppercase tracking-widest group-hover:gap-4 gap-2 transition-all duration-300"
          aria-label={`Baca panduan ${title}`}
        >
          Read Guide
          <span
            className="material-symbols-outlined text-[16px]"
            aria-hidden="true"
          >
            east
          </span>
        </a>
      </div>
    </article>
  );
};

/**
 * BrewingGuides — Section komponen yang menampilkan panduan metode
 * seduh kopi artisan. Terdiri dari header, grid 3 kartu, dan CTA bawah.
 *
 * Warna mengikuti brand_theme.md:
 * - coffee-primary (#3E2723) → heading, teks utama, badge
 * - coffee-secondary (#8D6E63) → body text, durasi
 * - coffee-accent (#D4AF37) → subtitle badge
 * - coffee-background (#EFEBE9) → CTA section background
 */
const BrewingGuides = () => {
  return (
    <section
      id="brewing-guides"
      className="w-full"
      aria-label="Panduan metode seduh kopi"
    >
      {/* Section Header */}
      <header className="px-6 md:px-8 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="max-w-2xl">
          <span className="text-coffee-accent dark:text-coffee-goldlight font-sans text-xs font-bold uppercase tracking-widest mb-4 block">
            The Ritual of Preparation
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-coffee-primary dark:text-coffee-cream italic leading-tight tracking-tighter mb-8">
            Master Your Brew
          </h2>
          <p className="text-justify text-lg text-coffee-secondary dark:text-coffee-cream font-sans leading-relaxed max-w-xl">
            Great coffee begins with the source, but ends with the technique.
            Explore our curated guides to perfecting the craft of slow-pour
            coffee from the comfort of your kitchen.
          </p>
        </div>
      </header>

      {/* Brewing Guides Grid */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-12 gap-y-16">
          {GUIDES_DATA.map((guide) => (
            <BrewCard
              key={guide.id}
              title={guide.title}
              badge={guide.badge}
              duration={guide.duration}
              description={guide.description}
              image={guide.image}
              imageAlt={guide.imageAlt}
            />
          ))}
        </div>
      </div>

      {/* Secondary CTA Section */}
      <div className="mt-24 md:mt-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-coffee-background dark:bg-coffee-deeproast dark:border dark:border-coffee-outline py-16 md:py-24 px-8 md:px-12 text-center rounded-2xl transition-colors duration-300">
          <h2 className="font-serif text-3xl text-coffee-primary dark:text-coffee-cream italic mb-6">
            Missing the right gear?
          </h2>
          <p className="text-justify font-sans text-coffee-secondary dark:text-coffee-cream max-w-md mx-auto mb-10 leading-relaxed">
            Our roastery shop stocks the exact tools used in our guides, curated
            for their durability and precision.
          </p>
          <button
            className="crema-gradient dark:!bg-none dark:bg-coffee-goldlight text-white dark:text-coffee-midnight px-10 py-4 font-sans font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-xl editorial-shadow dark:shadow-coffee-goldlight"
            aria-label="Belanja peralatan seduh kopi"
          >
            Shop Brewing Equipment
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrewingGuides;
