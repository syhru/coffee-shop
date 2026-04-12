const TastingNote = ({ title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-5 rounded-xl hover:bg-white/15 transition-all duration-300">
      <h4 className="font-serif text-sm md:text-lg text-[#EFEBE9] mb-1 md:mb-2">
        {title}
      </h4>
      <p className="text-[10px] md:text-sm text-[#EFEBE9]/80 font-sans leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default TastingNote;
