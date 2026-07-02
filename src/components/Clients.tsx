const brands = ['Wasdroom', 'Baasveranda', 'Sensowell', 'Wellsleep', 'Wandig'];

export default function Clients() {
  return (
    <div className="bg-neutral-950 border-y border-neutral-800/60 py-5 overflow-hidden">
      <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4 px-6">
        {brands.map((name, i) => (
          <span key={i} className="inline-flex items-center gap-4">
            <span className="text-neutral-500 text-xl sm:text-2xl font-bold tracking-tight select-none">
              {name}
            </span>
            {i < brands.length - 1 && (
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
