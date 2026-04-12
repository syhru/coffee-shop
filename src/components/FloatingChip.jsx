const FloatingChip = ({ flavor, origin }) => {
  return (
    <div className="absolute -bottom-6 -left-6 bg-black/30 dark:bg-black/30 backdrop-blur-md p-6 editorial-shadow rounded-xl max-w-[200px] border border-white/20 z-20">
      <div className="flex gap-1 mb-3">
        <span className="w-4 h-4 rounded-full bg-coffee-goldlight dark:bg-coffee-goldlight" />
        <span className="w-4 h-4 rounded-full bg-coffee-deeproast opacity-180 dark:bg-coffee-deeproast dark:opacity-100" />
      </div>
      <p className="text-justify font-serif text-lg text-coffee-cream dark:text-coffee-cream leading-tight">
        {flavor}
      </p>
      <p className="text-justify text-xs text-coffee-cream dark:text-coffee-cream font-sans mt-1">{origin}</p>
    </div>
  );
};

export default FloatingChip;
