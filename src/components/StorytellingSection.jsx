
const StorytellingSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-coffee-background dark:bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-3/5 order-2 lg:order-1 relative">
          <div className="relative rounded-2xl overflow-hidden editorial-shadow group aspect-[16/10] md:aspect-[16/9]">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="A barista skillfully pouring milk into an espresso to create complex, elegant latte art in a white ceramic cup, soft morning light hitting the counter"
              src="https://i.pinimg.com/1200x/5c/24/ba/5c24bae44d203eb3929628959c150389.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-primary/80 dark:from-coffee-midnight/80 to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 text-white dark:text-coffee-cream">
              <span className="font-sans text-xs uppercase tracking-[0.2em] opacity-80">Our Craft</span>
              <h3 className="font-serif text-3xl mt-1 italic">The Perfect Pour</h3>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-coffee-accent/10 dark:bg-coffee-goldlight/10 rounded-full blur-3xl -z-10"></div>
        </div>
        <div className="w-full lg:w-2/5 order-1 lg:order-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-primary dark:text-coffee-cream leading-tight mb-6">
                Aroma yang Memikat, Rasa yang <span className="italic">Tak Terlupakan</span>
              </h2>
              <div className="w-16 h-1 bg-coffee-primary/20 dark:bg-coffee-outline mb-8"></div>
              <p className="text-justify font-sans text-lg text-coffee-secondary dark:text-coffee-cream/80 leading-relaxed mb-6">
                Setiap biji kopi yang kami pilih membawa karakteristik unik dari tanah tempatnya tumbuh. Dari aroma floral yang lembut hingga body coklat yang kaya, kami memastikan setiap profil rasa terekstraksi sempurna.
              </p>
              <p className="text-justify font-sans text-base text-coffee-secondary/80 dark:text-coffee-cream/60 italic border-l-2 border-coffee-secondary/30 dark:border-coffee-outline pl-6 py-2">
                Kami percaya bahwa kopi bukan sekadar minuman, melainkan jembatan antara petani, roaster, dan Anda. Setiap cangkir adalah sebuah narasi tentang perjalanan dari kebun hingga ke tangan Anda.
              </p>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="w-12 h-[1px] bg-coffee-primary dark:bg-coffee-goldlight group-hover:w-16 transition-all duration-300"></span>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-coffee-primary dark:text-coffee-goldlight font-bold">Discover Our Story</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
