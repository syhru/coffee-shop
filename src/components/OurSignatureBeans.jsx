import React from "react";

/**
 * Data produk biji kopi.
 * Dipindahkan ke array agar mudah dikelola dan di-map ke komponen BeanCard.
 */
const BEANS_DATA = [
  {
    id: "ethiopian-yirgacheffe",
    name: "Ethiopian Yirgacheffe",
    flavorNote: "Floral & Nutty",
    badge: "Floral",
    price: "Rp 145.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1p-8OO3Dd0dIK9Mm_wGYAhILre4ZBotcF2CRPnpZYx7c2tnW65UwNjjFnoQb-uy6LU2f05FrqjWYTabLcsTjDLH9eaaQtSDgn1jBiwRNC5SQ-KegAA-p1jTxONytm5OS9QPCW6Xh6dfJnwTMjRl4B4ASlF4w3xFgJWnjorlDxp4FE5H2P8q1_Zbucqze1YVWY-ZfIDb52ufNFH6w_ANe2t2NsLFAJYit0enod84KNLWIMnyDdM9-ijeoG-L-A2qbLrxoFDQ5hiOo",
    imageAlt: "Biji kopi mentah premium dalam karung goni rustic",
    isOffset: false,
  },
  {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    flavorNote: "Earthy & Bold",
    badge: "Bold",
    price: "Rp 125.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjq3-932HPicZPZdxgTtJBo-gdf2vvGUS_RrFWcRD3TOZjL9pv4DYGuNWGGBuFkjPAgRtfpqkHnc_2DjJviaRmrtZUNiVetERG66eUnfkavhOEVhF_VnCReY4aaq_LmFaC9KX54Fb3EhbZsX9U-LBHg3norYMkASML033z09CF2t-X8Wd06JT0qUrphLkYbyVW-qmwqTUq0rqnCS1ep6S41vU4CT_ogJbO_dWxOjAWehLz_Ti8-98kBXdMtqRyJnAwYipK7t8kMX8",
    imageAlt: "Biji kopi sangrai dalam mangkuk kayu gelap, tampak atas",
    isOffset: true,
  },
  {
    id: "colombia-huila",
    name: "Colombia Huila",
    flavorNote: "Sweet & Fruity",
    badge: "Sweet",
    price: "Rp 135.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCn-lWLbRgV0HOecHgXmh8SKyWB0tM1mU7O2gBwyveELN6yZjmbgAldXDCZlleMC2j7GTHbqEOR1l5CesWkQ6bRLdW66du_1QqAGQ2rzF2vXdjSqkJLmZZcY3sJW1yqDJdNsu4cWzH6uzSS4CQ-QAGMy1BI1Uc6OyhyjO5bFKERIbhUwr9bj9Xr7z4ZguiBEWwvcMeuosl37v8_WYNrNNpROhrqNAyaaqFtTkn43QMoVVvbij8gQvBY7r47a4eYDZfBB6unS0xrvA",
    imageAlt: "Foto makro biji kopi sangrai dengan kilau berminyak",
    isOffset: false,
  },
  {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    flavorNote: "Spicy & Smoky",
    badge: "Spicy",
    price: "Rp 140.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNdTS0ONq7E2ZslEot7_niWmQB4RQSylv1QYNKjlpzE7OHCHdtBK_zwpaXqfXS2THJ7AusSpTCXNg3sN5_C4KKDGns9X0g0VWc4CfO7zUt6-jYAbHN_ewq3_jzzAUDXdGVMJ4wCBFmHaFhDQlLdihdQgfawN5R-RKogJS7gmvbbJ7T_P2jJCz7MLxy0f8H8MTv69BgJhA7buEV0d9g9gD5QhR_-4NG6p8H5TkQm_GxDAorEzYAUSaB3mAH8OQ6D-4Bvn-IuAgM8do",
    imageAlt: "Biji kopi artisan disangrai dalam drum tradisional",
    isOffset: false,
  },
  {
    id: "brazil-cerrado",
    name: "Brazil Cerrado",
    flavorNote: "Nutty & Chocolate",
    badge: "Nutty",
    price: "Rp 130.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDd8-IbIGGsHtckEgz-LFicz82crq8kXhNS0etMU89Ev3kO66Si47SRmv4-Jx7DmPZYmyn3U8vPeYQKY8rdnq0OCzXQgZGvjThHj22nFPChlL_kORfe_KzCqiIF_P-W-t4Z5xkPsYs9HwjuB2Ve7PoDHaoV7AbqdpG4f7fLZo7oaV4lYyYFzPPLfmTxSN-0gbyIufSbdNw0O4NWWLVBflv-nZAvxMEY3zl2VB5-6pQKcCj7gshcqoCz8icsfLr3g9t7itMVM3k-8Z0",
    imageAlt: "Buah ceri kopi yang baru dipanen dari Brasil",
    isOffset: true,
  },
  {
    id: "kenya-aa",
    name: "Kenya AA",
    flavorNote: "Bright & Berry",
    badge: "Bright",
    price: "Rp 150.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7o46ngVCNR-mNRa-F_X-Dkk-2n3Geti4feapD9lKx4m1I9WpGama9mnFG9m_VLhgEVj9N4sX9mW79HuuzgF9R3EvGK9wiys5TNYUaDF4tvam3Rc4RahpwCeFCsRrjva92reqS9Se9mzWCZUvYdaN5MTjZfbu-RxbZKDFdZrA4tX-ZV0nnYbzM8PRgGpkXUHZEYCLalMckq1IE_KlNU_xz2UzE2uHwyplrmOaz0ueYKJfAnTvx_cbWhT62L77jVjgel25ONQX88bQ",
    imageAlt: "Biji kopi Kenya AA dalam wadah vintage",
    isOffset: false,
  },
];

/**
 * BeanCard — Komponen kartu produk biji kopi yang reusable.
 * Props-driven sesuai instruksi component_slicing.md.
 */
const BeanCard = ({ name, flavorNote, badge, price, image, imageAlt, isOffset }) => {
  return (
    <article
      className={`flex flex-col group ${isOffset ? "md:mt-12" : ""}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-coffee-secondary/5 dark:bg-coffee-deeproast rounded-2xl mb-8 dark:border dark:border-coffee-outline">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 dark:grayscale-[0.2] dark:group-hover:grayscale-0"
        />
        {/* Flavor Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-coffee-primary dark:bg-coffee-goldlight text-white dark:text-coffee-midnight px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            {badge}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow px-2">
        <h3 className="font-serif text-2xl text-coffee-primary dark:text-coffee-cream mb-2">
          {name}
        </h3>
        <p className="font-sans text-coffee-secondary dark:text-coffee-cream mb-6 text-sm italic">
          {flavorNote}
        </p>

        {/* Price & CTA */}
        <div className="mt-auto flex items-center justify-between">
          <span className="font-serif text-xl text-coffee-primary dark:text-coffee-goldlight">
            {price}
          </span>
          <button
            className="bg-coffee-accent/15 text-coffee-primary px-5 py-2.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-coffee-accent hover:text-white dark:bg-coffee-goldlight dark:text-coffee-midnight dark:hover:bg-coffee-cream dark:hover:text-coffee-midnight"
            aria-label={`Tambahkan ${name} ke keranjang`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

/**
 * OurSignatureBeans — Section komponen utama yang menampilkan
 * koleksi biji kopi signature dalam grid layout.
 *
 * Struktur:
 * - Section header (judul + subtitle + divider)
 * - Grid 3-kolom berisi BeanCard
 * - Bottom CTA "Explore All Origins"
 *
 * Warna mengikuti brand_theme.md:
 * - coffee-primary (#3E2723) → teks heading, harga
 * - coffee-secondary (#8D6E63) → teks flavor notes
 * - coffee-accent (#D4AF37) → badge & tombol hover
 * - coffee-background (#EFEBE9) → section background
 */
const OurSignatureBeans = () => {
  return (
    <section
      id="our-beans"
      className="w-full"
      aria-label="Koleksi biji kopi signature kami"
    >
      {/* Section Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-20 text-center">
        <span className="text-coffee-accent dark:text-coffee-goldlight font-sans text-xs font-bold uppercase tracking-widest block mb-4">
          Curated Selection
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-coffee-primary dark:text-coffee-cream dark:[text-shadow:0_0_15px_rgba(229,192,88,0.3)] tracking-tight italic">
          Our Signature Beans
        </h2>
        <div
          className="mt-6 w-12 h-px bg-coffee-secondary/40 dark:bg-coffee-goldlight mx-auto"
          aria-hidden="true"
        />
      </header>

      {/* Product Grid */}
      <div className="bg-coffee-background dark:bg-coffee-midnight transition-colors duration-300 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-12 gap-y-16 md:gap-y-24">
            {BEANS_DATA.map((bean) => (
              <BeanCard
                key={bean.id}
                name={bean.name}
                flavorNote={bean.flavorNote}
                badge={bean.badge}
                price={bean.price}
                image={bean.image}
                imageAlt={bean.imageAlt}
                isOffset={bean.isOffset}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
        <p className="font-sans text-coffee-secondary dark:text-coffee-cream mb-4 italic">
          Can&apos;t find your match?
        </p>
        <button
          className="text-coffee-primary font-sans text-sm font-semibold uppercase tracking-widest border-b-2 border-coffee-primary pb-1 hover:text-coffee-accent hover:border-coffee-accent transition-all duration-300 dark:text-coffee-goldlight dark:border-coffee-outline dark:hover:border-coffee-outline-goldlight"
          aria-label="Lihat semua pilihan biji kopi"
        >
          Explore All Origins
        </button>
      </div>
    </section>
  );
};

export default OurSignatureBeans;
