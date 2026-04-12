
const PhilosophySection = () => {
  return (
    <section className="py-32 bg-coffee-background dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-8 text-center mb-20">
        <span className="text-coffee-accent dark:text-coffee-goldlight font-sans uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
        <h2 className="text-4xl md:text-5xl font-serif text-coffee-primary dark:text-coffee-cream">The Elements of Our Ritual</h2>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-coffee-secondary/15 dark:bg-coffee-deeproast flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-coffee-primary dark:text-coffee-goldlight text-3xl">public</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-coffee-primary dark:text-coffee-cream mb-4">Direct Trade</h3>
          <p className="text-justify text-coffee-secondary dark:text-coffee-cream/80 leading-relaxed font-sans">
            We build lasting partnerships directly with farmers, ensuring fair wages and sustainable practices that transcend global markets.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-coffee-secondary/15 dark:bg-coffee-deeproast flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-coffee-primary dark:text-coffee-goldlight text-3xl">schedule</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-coffee-primary dark:text-coffee-cream mb-4">Slow Roast</h3>
          <p className="text-justify text-coffee-secondary dark:text-coffee-cream/80 leading-relaxed font-sans">
            We reject the rush. Each batch is roasted in small quantities using traditional methods to coax out the most complex flavor profiles.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-coffee-secondary/15 dark:bg-coffee-deeproast flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-coffee-primary dark:text-coffee-goldlight text-3xl">diversity_1</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-coffee-primary dark:text-coffee-cream mb-4">Community</h3>
          <p className="text-justify text-coffee-secondary dark:text-coffee-cream/80 leading-relaxed font-sans">
            Coffee is a connector. From the grower to the guest, we cultivate a space where conversation and culture can flourish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
