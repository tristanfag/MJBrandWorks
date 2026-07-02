const cards = [
  {
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Brand identity design',
    title: 'Unlock new brand opportunities',
    boldWord: 'new brand',
    body: 'Build a distinctive brand identity that attracts the right customers and drives real growth \u2014 without blowing your ad budget.',
  },
  {
    image:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Brand strategy session',
    title: 'Grow with strategy as your foundation',
    boldWord: 'strategy',
    body: 'Smart branding is never just aesthetics. A strategically built brand earns higher perceived value, better conversion rates, and lasting customer loyalty.',
  },
  {
    image:
      'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Market positioning',
    title: 'Leave your competitors behind',
    boldWord: 'competitors behind',
    body: 'A bold, cohesive brand makes positioning easy. Stop blending into the market \u2014 accelerate recognition and claim your space.',
  },
];

function highlight(title: string, bold: string) {
  const parts = title.split(bold);
  return (
    <>
      {parts[0]}
      <strong>{bold}</strong>
      {parts[1]}
    </>
  );
}

export default function BrandPotential() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              <em className="italic font-bold text-brand-500 not-italic">Unlock</em> your brand's
              full potential
            </h2>
          </div>
          <p className="text-neutral-400 text-base leading-relaxed max-w-sm lg:text-right">
            Over <span className="text-white font-semibold">50+ brands</span> have transformed
            their identity and seen measurable market growth through strategic branding with
            MJBrandWorks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 flex flex-col"
            >
              <div className="relative overflow-hidden h-56 sm:h-64 shrink-0">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
              </div>

              <div className="p-7 flex flex-col gap-3">
                <h3 className="text-white text-lg font-semibold leading-snug">
                  {highlight(card.title, card.boldWord)}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
