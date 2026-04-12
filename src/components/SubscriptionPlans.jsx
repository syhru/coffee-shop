
/**
 * Data paket subscription.
 * Setiap paket memiliki fitur-fitur berbeda dan styling tersendiri.
 */
const PLANS_DATA = [
  {
    id: "casual-drinker",
    name: "Casual Drinker",
    subtitle: "Perfect for the weekend brewer.",
    price: "IDR. 410.040",
    features: [
      "1 Bag (12oz) Fresh Roasted Coffee",
      "Tasting Notes & Origin Map",
      "Free Standard Shipping",
    ],
    isHighlighted: false,
  },
  {
    id: "coffee-enthusiast",
    name: "Coffee Enthusiast",
    subtitle: "For the daily ritual of discovery.",
    price: "IDR. 717.570",
    badge: "Most Loved",
    features: [
      "2 Bags (12oz) Rotating Varietals",
      "15% Off All Single Purchases",
      "Free Express Shipping",
      "Early Access to Micro-lots",
    ],
    isHighlighted: true,
  },
  {
    id: "roastery-pro",
    name: "Roastery Pro",
    subtitle: "Maximum variety for the true connoisseur.",
    price: "IDR. 1.332.630",
    features: [
      "4 Bags (12oz) Full Roast Spectrum",
      "25% Off All Single Purchases",
      "Quarterly Exclusive Merch",
      "Priority Support & Coffee Concierge",
    ],
    isHighlighted: false,
  },
];

/**
 * Chip badge — tag kecil untuk label nilai/filosofi brand.
 */
const ValueChip = ({ label }) => {
  return (
    <span className="px-4 py-1.5 rounded-full bg-coffee-primary dark:bg-coffee-deeproast text-white dark:text-coffee-goldlight text-[10px] font-bold uppercase tracking-widest dark:border dark:border-coffee-outline">
      {label}
    </span>
  );
};

/**
 * PlanCard — Sub-komponen kartu harga subscription yang reusable.
 * Kartu highlighted (isHighlighted=true) memiliki styling berbeda:
 * - Background coffee-primary (gelap)
 * - Teks putih
 * - Badge "Most Loved"
 * - Scale lebih besar
 */
const PlanCard = ({ name, subtitle, price, features, badge, isHighlighted }) => {
  if (isHighlighted) {
    return (
      <article className="relative bg-coffee-primary dark:bg-coffee-deeproast text-white p-10 md:p-14 flex flex-col z-10 shadow-2xl md:scale-105 rounded-2xl dark:border dark:border-coffee-outline">
        {/* Badge */}
        {badge && (
          <div className="absolute top-6 right-6">
            <span className="bg-coffee-accent dark:bg-coffee-goldlight text-coffee-primary dark:text-coffee-midnight px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
              {badge}
            </span>
          </div>
        )}

        <div className="mb-12">
          <h3 className="text-2xl font-serif mb-2 dark:text-coffee-cream">{name}</h3>
          <p className="text-white/50 dark:text-coffee-cream font-sans text-sm mb-8">{subtitle}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-serif font-bold dark:text-coffee-goldlight">{price}</span>
            <span className="text-white/50 dark:text-coffee-cream text-sm">/ month</span>
          </div>
        </div>

        <ul className="space-y-6 mb-12 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span
                className="material-symbols-outlined text-coffee-accent dark:text-coffee-goldlight text-sm mt-1"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-white dark:text-coffee-cream text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className="w-full py-4 bg-coffee-accent text-coffee-primary rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-coffee-accent/80 transition-colors duration-300 dark:bg-coffee-goldlight dark:text-coffee-midnight dark:hover:bg-coffee-cream dark:hover:text-coffee-midnight"
          aria-label={`Berlangganan paket ${name}`}
        >
          Subscribe Now
        </button>
      </article>
    );
  }

  return (
    <article className="bg-coffee-background dark:bg-coffee-deeproast p-10 md:p-14 flex flex-col transition-all duration-300 hover:bg-coffee-secondary/5 dark:hover:bg-coffee-midnight rounded-2xl dark:border dark:border-coffee-outline">
      <div className="mb-12">
        <h3 className="text-2xl font-serif text-coffee-primary dark:text-coffee-cream mb-2">
          {name}
        </h3>
        <p className="text-coffee-secondary dark:text-coffee-cream font-sans text-sm mb-8">
          {subtitle}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-serif font-bold text-coffee-primary dark:text-coffee-goldlight">
            {price}
          </span>
          <span className="text-coffee-secondary dark:text-coffee-cream text-sm">/ month</span>
        </div>
      </div>

      <ul className="space-y-6 mb-12 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span
              className="material-symbols-outlined text-coffee-accent dark:text-coffee-goldlight text-sm mt-1"
              aria-hidden="true"
            >
              check_circle
            </span>
            <span className="text-coffee-primary dark:text-coffee-cream text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className="w-full py-4 bg-coffee-primary text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-coffee-secondary transition-colors duration-300 dark:bg-coffee-deeproast dark:text-coffee-cream dark:hover:bg-coffee-goldlight dark:hover:text-coffee-midnight"
        aria-label={`Berlangganan paket ${name}`}
      >
        Subscribe Now
      </button>
    </article>
  );
};

/**
 * SubscriptionPlans — Section komponen utama untuk halaman subscription.
 *
 * Struktur:
 * - Hero banner dengan gambar background
 * - Section header "Choose Your Ritual"
 * - Grid 3-kolom pricing cards (PlanCard)
 * - "Roasted with Intention" benefit section
 *
 * Warna mengikuti brand_theme.md:
 * - coffee-primary (#3E2723) → heading, highlighted card bg, teks utama
 * - coffee-secondary (#8D6E63) → subtitle, body text
 * - coffee-accent (#D4AF37) → badge, checkmark icons, CTA highlighted
 * - coffee-background (#EFEBE9) → card background, section bg
 */
const SubscriptionPlans = () => {
  return (
    <section
      id="subscription"
      className="w-full"
      aria-label="Paket berlangganan kopi"
    >
      {/* ===== HERO BANNER ===== */}
      <div className="relative h-[500px] md:h-[614px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-coffee-primary/40 dark:bg-coffee-midnight mix-blend-multiply z-10"
            aria-hidden="true"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfs7M4Og9X-jdZ7FTn1p7AXNfyTEZbil_e8Nk3WoOVI8FvUtOTLV7Uu7uknbACVLMDkyDBnEAuA2cWP-YmI6puYtVkTiEFXGTOExc8YDhnwnekHEvPExFA7dm0y-o_hRD3jExwjBbqhuhh6wFXUBeINm_BS9ajJLVAXjDMxbay52sVVlAoqr8Uxm-fVeLY1uflsFhaxKwKcNheTA5dAFseoTj7sOd9lnETvmpcQ8_ePNcGzYdzALysYLO7mWYAIFv-NV6aOTnFQ1A"
            alt="Biji kopi kaya yang dituang ke dalam mangkuk keramik dengan cahaya alami lembut dan nada krem hangat"
            className="w-full h-full object-cover dark:grayscale-[20%]"
          />
        </div>

        {/* Hero Text */}
        <div className="relative z-20 text-center px-6">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-coffee-primary dark:bg-coffee-goldlight text-coffee-accent dark:text-coffee-midnight text-xs font-bold uppercase tracking-widest">
            Freshness Delivered
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight">
            Never Run Out of
            <br />
            Good Coffee
          </h2>
          <p className="text-white/90 dark:text-coffee-cream max-w-xl mx-auto font-sans text-lg">
            Curated beans from sustainable estates, roasted to order and
            delivered to your doorstep on your schedule.
          </p>
        </div>
      </div>

      {/* ===== PRICING CARDS SECTION ===== */}
      <div className="bg-coffee-secondary/5 dark:bg-transparent transition-colors duration-300 py-16 md:py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif text-coffee-primary dark:text-coffee-cream mb-4">
                Choose Your Ritual
              </h2>
              <p className="text-coffee-secondary dark:text-coffee-cream font-sans text-lg">
                Select a plan that matches your consumption. Change or cancel
                anytime without friction.
              </p>
            </div>
            <div className="hidden lg:block text-coffee-primary dark:text-coffee-goldlight dark:opacity-60 font-serif italic text-xl">
              The finest beans, roasted by hand.
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center">
            {PLANS_DATA.map((plan) => (
              <PlanCard
                key={plan.id}
                name={plan.name}
                subtitle={plan.subtitle}
                price={plan.price}
                features={plan.features}
                badge={plan.badge}
                isHighlighted={plan.isHighlighted}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===== BENEFIT SECTION ===== */}
      <div className="bg-white dark:bg-coffee-midnight transition-colors duration-300 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-square bg-coffee-background dark:bg-coffee-deeproast overflow-hidden rounded-2xl dark:border dark:border-coffee-outline">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj5AJDZ-ldY3XZ-N386zPlz6raZCx0qLyPXEg0HbB6GBHDLz9hV0D9xclv4HpuJeUzQBvDSKHVmVeT71pmSidD8R63WkYJCI721_iQP9VM2YB-x2s36EZHzwba0-DnUOaj1Tgy8-PVSdA4aycXU21MNmsLyNUyzylyZlxmlPSL41-bfgeBNRaVYFKSpg40s_RZoUIduxumR6S1X_Z_Aov6cFnGAKalvuc42cruSvSrQe_81F7SQ99mit-e_vSDbK2qZs-QhR3dH6A"
              alt="Biji kopi mendingin di atas nampan logam di dalam roastery profesional dengan pencahayaan industri yang hangat"
              className="w-full h-full object-cover dark:grayscale-[30%] dark:opacity-80"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-serif text-coffee-primary dark:text-coffee-cream mb-6">
              Roasted with Intention
            </h2>
            <p className="text-coffee-secondary dark:text-coffee-cream font-sans mb-8 leading-relaxed">
              Unlike warehouse subscriptions, our beans are roasted in small
              batches only when your order is processed. We ship within 24 hours
              of roasting to ensure the oils and aromatics are at their peak
              when they reach your cup.
            </p>
            <div className="flex flex-wrap gap-3">
              <ValueChip label="Ethically Sourced" />
              <ValueChip label="Small Batch" />
              <ValueChip label="Carbon Neutral" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
