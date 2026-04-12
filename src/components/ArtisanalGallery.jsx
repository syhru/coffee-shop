
const ArtisanalGallery = () => {
  return (
    <section className="py-24 bg-coffee-secondary/5 dark:bg-[#181512]">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-5xl font-serif text-coffee-primary dark:text-coffee-cream mb-4 italic">The Artisanal Gallery</h2>
            <p className="text-coffee-secondary dark:text-coffee-cream/80 font-sans">A visual exploration of our craft, from the raw earth to the finished pour.</p>
          </div>
          <div className="text-coffee-primary dark:text-coffee-goldlight font-serif italic text-xl border-b border-coffee-primary dark:border-coffee-outline pb-2 hidden md:block">
            Est. 2024
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[1228px]">
          <div className="md:col-span-2 md:row-span-1 group overflow-hidden bg-coffee-secondary/10 dark:bg-coffee-deeproast">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Extreme macro shot of a single, perfectly roasted coffee bean resting on a textured minimalist surface with elegant lighting" src="https://i.pinimg.com/1200x/54/6c/26/546c26f124b3fd412c74b8423e07e830.jpg"/>
           
          </div>
          <div className="md:col-span-1 md:row-span-1 group overflow-hidden bg-coffee-secondary/10 dark:bg-coffee-deeproast">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Aerial view of intricate swan latte art in a white cup on a dark wooden table with scattered roasted beans" src="https://i.pinimg.com/736x/9c/83/28/9c8328b10f7e8fda36cfa2c026c837e6.jpg" />

          </div>
          <div className="md:col-span-1 md:row-span-1 group overflow-hidden bg-coffee-secondary/10 dark:bg-coffee-deeproast">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Close-up of dark roasted coffee beans with a rich oily surface, showing deep brown and black tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKTBo-YeLuG9rAqpiTfaQ-w6CsExFLUSdV9zHXe3EeZ4DL4wUSc1YO7lh8tSWdAews8HIn7Lc0gkAncmuGz-FTJEYQcYLqZdHF1i1oFaVUlV52e-gT7do4Tjay2r2kkWbp5tN_v9dVyYiyNpsGqsQrmVRxinKYG7d_YuXrIhc2RCIbj4vzBxb1_gYjDt6mqVTkyhNFZrLhFJMe5Nw9BGZ9YO802iOdfZ2hZUXh7zzJFWAYoVLIMInrVwfhpY_KzeE0679EFjIHRU"/>
          </div>
          <div className="md:col-span-2 md:row-span-1 group overflow-hidden bg-coffee-secondary/10 dark:bg-coffee-deeproast">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Macro photo of burlap sacks filled with green unroasted coffee beans in a rustic warehouse setting" src="https://i.pinimg.com/1200x/f7/27/f5/f727f57d88bd40fb0458f038975102c2.jpg"/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanalGallery;
