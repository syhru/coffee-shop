import React from 'react';

const ProductSpotlight = () => {
  return (
    <section className="pb-32 bg-coffee-background dark:bg-[#120E0B]">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="p-12 md:p-20 bg-white dark:bg-[#161311] rounded-xl flex flex-col md:flex-row gap-12 items-center editorial-shadow dark:border dark:border-coffee-outline">
          <div className="w-full md:w-1/3">
            <div className="bg-coffee-secondary/10 dark:bg-coffee-deeproast p-12 aspect-[3/4] flex items-center justify-center rounded-xl">
              <img
                className="max-w-full drop-shadow-2xl"
                alt="A minimalist white and gold coffee bean bag standing on a stone plinth with soft shadows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnxMlK7fq92wFVhbfYKuQdSSGe8Q2mQY76AWDwRT42doYSptcHMWO4YwuEJV_eo_iYx6FBQ5T51j0Wakjya78OgSD7oV7TCL5YzmuzAtkW8Lew7FnKES-BmUbAuwhYeXJoC4_FrKHS5BmUnaSGH3Hv6Q5ALXRFzguJGExCYcR50QIfsryvZc6QPgokuK4oL5UNN3fJX0TdExKTNUvCvkJCqoFRF4CMGNLo4i5RMeA3fg9LQ09SIul3R8v1VdAfZkrj9K1Owe4Fwr0"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-serif text-coffee-primary dark:text-coffee-cream mb-2">Monograph Reserve No. 12</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 rounded-full bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight text-xs font-sans uppercase tracking-wider">Nutty</span>
              <span className="px-3 py-1 rounded-full bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight text-xs font-sans uppercase tracking-wider">Dark Chocolate</span>
              <span className="px-3 py-1 rounded-full bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight text-xs font-sans uppercase tracking-wider">Smooth Finish</span>
            </div>
            <p className="font-sans text-coffee-secondary dark:text-coffee-cream/80 text-lg mb-10 italic">
              "A sophisticated profile featuring heavy notes of toasted macadamia and a lingering cocoa finish. Sourced from the volcanic soils of Mount Gede."
            </p>
            <div className="flex items-center gap-8">
              <button className="bg-coffee-primary dark:bg-coffee-goldlight text-white dark:text-coffee-midnight px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity rounded-lg editorial-shadow">
                Add to Collection
              </button>
              <span className="text-2xl font-serif text-coffee-primary dark:text-coffee-cream">IDR 245.000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
