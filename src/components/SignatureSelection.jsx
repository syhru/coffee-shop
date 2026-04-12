
const SignatureSelection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-coffee-background dark:bg-[#120E0B] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="rounded-2xl overflow-hidden editorial-shadow h-[400px] md:h-[600px]">
              <img
                className="w-full h-full object-cover"
                alt="Close-up of ripe red coffee cherries growing on a lush green branch in a tropical plantation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiY3RH12pKOvBNT8hrs5LhRKzek3dYabp4PRrbygOUn1WdNInmU6jk7kz-zTNAr4uXCMLxFraOjsl89FYnAkr3UsL8b0mSb87fnqwCK_Mjku5CoFk1iiqzqFwiHITrcit_W33CpRxDzcAagodex4YqrOjRsM_3hVm2zmOirMUlHi_8Kj0sknClPfmZWAn75l7DNd_FYMuZY5DhbSFrWGlhZNiOlSsKmsgIl5GXvqlMQd3kxK--Q3uvQp-c1D_LoAFY4i6MHd866eo"
              />
            </div>
            {/* Farmer Inset Image */}
            <div className="absolute -bottom-8 -right-8 w-32 md:w-48 aspect-square rounded-xl border-8 border-coffee-background dark:border-[#120E0B] overflow-hidden editorial-shadow bg-white dark:bg-coffee-deeproast">
              <img
                className="w-full h-full object-cover grayscale"
                alt="Close-up portrait of a smiling coffee farmer in a sun-drenched field, holding a handful of ripe, bright red coffee cherries, warm golden hour lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6dh0mJhb3AcEDU-EG8mh12U3bin2aysIR5VMeuUDceik6diCx0pCyb7x_Zum_OhbBAJgY_EL0PwQcZu5Xqs9arM8bnjkEDANyL3LLp4HN63chCwK15FgBGQKZNGZogZwwsQKDJMe8VKb8L9K4Sc7bEZjOin3_XodlFaFbxoAQvjbQgbHspT1cult7e2qkpDRWIWeLqJjBMby3eOQGg8vFODWEHoVAgJzbGjzcvPzGVXIa-0nTiZsLzgZVwKclgidVW5P1tkOBcio"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-12 mt-12 lg:mt-0">
            <span className="text-coffee-accent dark:text-coffee-goldlight font-sans uppercase tracking-[0.2em] text-xs mb-4 block">The Artisanal Selection</span>
            <h2 className="font-serif text-4xl text-coffee-primary dark:text-coffee-cream mb-6">Mahakarya Biji Kopi <span className="italic">Signature</span> Kami</h2>
            <p className="font-sans text-lg text-coffee-secondary dark:text-coffee-cream/80 leading-relaxed mb-8">
              Setiap musim, kami melakukan kurasi ketat untuk menghadirkan biji kopi signature yang mendefinisikan standar keunggulan kami. Biji kopi ini dipanen pada puncak kematangannya, memastikan setiap profil rasa dari nuansa buah yang cerah hingga kekentalan cokelat yang dalam terekspresi dengan sempurna di cangkir Anda.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-coffee-primary dark:text-coffee-goldlight mt-1">grade</span>
                <div>
                  <h4 className="font-bold text-coffee-primary dark:text-coffee-cream">Kualitas Terkurasi</h4>
                  <p className="text-sm text-coffee-secondary dark:text-coffee-cream/70">Hanya 5% teratas dari hasil panen terbaik yang memenuhi standar signature kami.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-coffee-primary dark:text-coffee-goldlight mt-1">local_fire_department</span>
                <div>
                  <h4 className="font-bold text-coffee-primary dark:text-coffee-cream">Roasting Presisi</h4>
                  <p className="text-sm text-coffee-secondary dark:text-coffee-cream/70">Profil sangrai yang dikembangkan khusus untuk menonjolkan karakter unik setiap lot.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureSelection;
