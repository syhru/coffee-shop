
const ProductSpotlight = () => {
  return (
    <section className="pb-32 bg-coffee-background dark:bg-transparent">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="p-4 sm:p-5 md:p-20 bg-coffee-secondary/20 dark:bg-[#161311] rounded-xl flex flex-row md:flex-row gap-4 md:gap-12 items-start md:items-center editorial-shadow dark:border dark:border-coffee-outline">
          <div className="w-[40%] md:w-1/3 shrink-0 aspect-[3/4] sm:aspect-square md:aspect-auto relative rounded-xl overflow-hidden flex items-center justify-center">
            <div className="bg-coffee-secondary/10 dark:bg-coffee-deeproast w-full h-full md:aspect-[4/5] flex items-center justify-center">
              <img
                className="w-full h-full object-cover dark:opacity-80 rounded-xl md:rounded-2xl"
                alt="A minimalist white and gold coffee bean bag standing on a stone plinth with soft shadows"
                src="https://i.pinimg.com/736x/a1/ee/df/a1eedf4ec9b94a4156b40e47876b98e9.jpg"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0 pr-1 pb-1 md:w-2/3 flex flex-col justify-center">
            <h3 className="text-sm sm:text-base md:text-3xl font-serif text-coffee-primary dark:text-coffee-cream mb-1 md:mb-2 leading-tight">Arabica Whine Strong</h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-0 mb-2 md:mb-8">
              <span className="text-[9px] sm:text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1 rounded-full whitespace-nowrap bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight font-sans uppercase tracking-wider">Nutty</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1 rounded-full whitespace-nowrap bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight font-sans uppercase tracking-wider">Dark Chocolate</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1 rounded-full whitespace-nowrap bg-coffee-accent/20 dark:bg-coffee-goldlight/20 text-coffee-primary dark:text-coffee-goldlight font-sans uppercase tracking-wider">Smooth Finish</span>
            </div>
            <p className="break-words whitespace-normal text-left md:text-justify font-sans text-coffee-secondary dark:text-coffee-cream/80 text-[10px] sm:text-xs md:text-lg mb-2 md:mb-10 italic mt-2 leading-relaxed">
              "A rich flavor profile with strong notes of roasted Arabica coffee beans and a lingering chocolate finish. Sourced from the volcanic soil of Mount Gede."
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-8 mt-3 md:mt-6 w-full">
              <span className="text-xs md:text-xl shrink-0 font-serif font-bold text-coffee-primary dark:text-coffee-cream">IDR 245.000</span>
              <button className="w-full md:w-auto flex justify-center items-center text-center px-4 py-2 md:px-8 md:py-4 text-[8px] sm:text-[10px] md:text-sm whitespace-nowrap bg-coffee-primary dark:bg-coffee-goldlight text-white dark:text-coffee-midnight font-sans font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity rounded-lg editorial-shadow">
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
