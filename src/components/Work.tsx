const projects = [
  {
    title: 'Wasdroom',
    category: 'Laundry care ecommerce',
    image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=1200&q=80',
    challenge: 'A practical service needed to feel modern, trustworthy, and easy to order online.',
    scope: ['Identity refresh', 'Homepage system', 'Service landing pages'],
  },
  {
    title: 'Baasveranda',
    category: 'Outdoor living',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    challenge: 'A high-ticket product needed a more premium presentation and clearer consultation flow.',
    scope: ['Positioning', 'Configurator UX', 'Lead-generation pages'],
  },
  {
    title: 'Sensowell',
    category: 'Wellness products',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    challenge: 'A wellness brand needed calm, credible storytelling without looking like every spa template.',
    scope: ['Art direction', 'Product storytelling', 'Campaign visuals'],
  },
  {
    title: 'Wellsleep',
    category: 'Sleep and comfort',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    challenge: 'A comfort-focused offer needed warmer trust signals and stronger product-page structure.',
    scope: ['Brand voice', 'Product-page design', 'Email creative'],
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-[#0f1011] py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff633e]">
              Selected Work
            </p>
            <h2 className="max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Brand systems for products customers compare carefully.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/64 lg:justify-self-end lg:text-right">
            These projects are built around trust, clarity, and perceived value - the things that matter
            when customers are choosing between similar offers.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-lg bg-[#171819]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} brand direction`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff633e]">
                    {String(index + 1).padStart(2, '0')} / {project.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{project.title}</h3>
                </div>
              </div>

              <div className="grid gap-7 p-6 sm:p-8 md:grid-cols-[1fr_0.8fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/38">Challenge</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/66">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/38">Scope</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.scope.map((item) => (
                      <span key={item} className="rounded-full bg-white/[0.055] px-3 py-1.5 text-xs font-medium text-white/64">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
