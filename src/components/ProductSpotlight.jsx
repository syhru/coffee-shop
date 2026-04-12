
const ProductSpotlight = () => {
  return (
    <section className="pb-32 bg-coffee-background dark:bg-[#120E0B]">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="p-12 md:p-20 bg-white dark:bg-[#161311] rounded-xl flex flex-col md:flex-row gap-12 items-center editorial-shadow dark:border dark:border-coffee-outline">
          <div className="w-full md:w-1/3">
            <div className="bg-coffee-secondary/10 dark:bg-coffee-deeproast p-12 aspect-[3/4] flex items-center justify-center rounded-xl">
              <img
                className="max-w-full rounded-xl drop-shadow-2xl"
                alt="A minimalist white and gold coffee bean bag standing on a stone plinth with soft shadows"
                src="https://i.pinimg.com/736x/a1/ee/df/a1eedf4ec9b94a4156b40e47876b98e9.jpg"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-serif text-coffee-primary dark:text-coffee-cream mb-2">Arabica Whine Strong</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 rounded-full bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight text-xs font-sans uppercase tracking-wider">Nutty</span>
              <span className="px-3 py-1 rounded-full bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight text-xs font-sans uppercase tracking-wider">Dark Chocolate</span>
              <span className="px-3 py-1 rounded-full bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight text-xs font-sans uppercase tracking-wider">Smooth Finish</span>
            </div>
            <p className="font-sans text-coffee-secondary dark:text-coffee-cream/80 text-lg mb-10 italic">
              "A rich flavor profile with strong notes of roasted Arabica coffee beans and a lingering chocolate finish. Sourced from the volcanic soil of Mount Gede."
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
