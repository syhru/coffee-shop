import React from 'react';

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
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Aerial view of intricate swan latte art in a white cup on a dark wooden table with scattered roasted beans" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1PyXdV9mkLmg6fXoqN5eLSHmv2bVReOOhSCrCegbfmMYxmBY13IqoEPG6UyryX-B2Oxz-_ipwP_74gDUsABdkCDL0l_EutWwgoCAXrmi8hxOLHRQfV0TnQSxgOo555KhOTEOhbirrpa2OGvQy02nbQsrFr0BZrUUrYWwupcDHOuXaCVDi6xY3Yn3yOgVbxo9sknskK3XamFfdyRX4jrk1anzPKvRLi34iWio6o06WQaIbzweZmip8KkruBMMzT1n2JOItZQziMbw"/>
          </div>
          <div className="md:col-span-1 md:row-span-1 group overflow-hidden bg-coffee-secondary/10 dark:bg-coffee-deeproast">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Macro photo of burlap sacks filled with green unroasted coffee beans in a rustic warehouse setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXKCmqdpY8tHJISrP7ukyKzpyYr6lBLtCM5HegTUCeUqSY1z1muo6BU6LUC13cp1bx_beBnKLbYEHsgFIXNkMEENbnKmKnSXaTn3GYpnAmeL874WbWK70LLLq03JKppJiL1DLSMliy7UoPGzSyMCsuTsnm63iv9lfjQzes2MftpGEN2HW5iAGixjbK8b2CFLH9Xr_mx8HG375YSHvF8QeaNFZ8_eiSgPFR8I-yxc4l03sY6xYJErZrSVhV9ZmOeo4BK76yXXEkPjM"/>
          </div>
          <div className="md:col-span-1 md:row-span-1 group overflow-hidden bg-coffee-secondary/10 dark:bg-coffee-deeproast">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Close-up of dark roasted coffee beans with a rich oily surface, showing deep brown and black tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKTBo-YeLuG9rAqpiTfaQ-w6CsExFLUSdV9zHXe3EeZ4DL4wUSc1YO7lh8tSWdAews8HIn7Lc0gkAncmuGz-FTJEYQcYLqZdHF1i1oFaVUlV52e-gT7do4Tjay2r2kkWbp5tN_v9dVyYiyNpsGqsQrmVRxinKYG7d_YuXrIhc2RCIbj4vzBxb1_gYjDt6mqVTkyhNFZrLhFJMe5Nw9BGZ9YO802iOdfZ2hZUXh7zzJFWAYoVLIMInrVwfhpY_KzeE0679EFjIHRU"/>
          </div>
          <div className="md:col-span-2 md:row-span-1 group overflow-hidden bg-coffee-secondary/10 dark:bg-coffee-deeproast">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Extreme macro shot of a single, perfectly roasted coffee bean resting on a textured minimalist surface with elegant lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC50559dqM9icC2QMmbISLXAxG5P27FO_geVrGSpJhVeFxHldmtfeVyrTHzeFO6qtMj-ox3VQkeIQrhacNoWkya7B-i_bcZNiBhkuNsjw76RGFpARii1Wg0x05ZDp3S3U-f8APKSQzJt3D3cambesghrX0YhmaUkzB2d2E1IPBJ0tIUQH9EQHafbS5pOBxRoNs0iHk47lIUKhuwl8m2BdVkwhu11s0Bn-qY6B-rbOTflbVGdWy4YoRlvlx12xM6XpipKI2qz0Vm4IY"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanalGallery;
