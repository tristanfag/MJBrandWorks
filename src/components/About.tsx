export default function About() {
  return (
    <section id="about" className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-500 text-sm font-medium uppercase tracking-wider mb-4">
              About Us
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              We believe every brand deserves to stand out.
            </h2>
            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              MJBrandWorks is a creative agency obsessed with building brands that move markets.
              Whether you're launching something new or breathing new life into an existing identity,
              we bring the strategic thinking and design craft to make it happen.
            </p>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              We've helped startups find their voice and guided established companies through
              transformative rebrands \u2014 always with the same goal: create something people
              remember.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-neutral-500 text-sm mt-1">Brands Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">8+</p>
                <p className="text-neutral-500 text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-neutral-500 text-sm mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="MJBrandWorks team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-500 text-neutral-950 p-6 rounded-xl">
              <p className="text-sm font-semibold uppercase tracking-wider">Trusted by</p>
              <p className="text-2xl font-bold mt-1">50+ Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
