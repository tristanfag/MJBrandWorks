const projects = [
  {
    title: 'Noma Coffee Co.',
    category: 'Brand Identity',
    image: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Verd Wellness',
    category: 'Rebranding',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Atlas Ventures',
    category: 'Web & Identity',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Kindred Studio',
    category: 'Creative Direction',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-brand-500 text-sm font-medium uppercase tracking-wider mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Brands we've built.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-neutral-400 hover:text-white transition-colors text-sm font-medium underline underline-offset-4"
          >
            See all projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-brand-400 text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
