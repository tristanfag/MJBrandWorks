const principles = [
  'Clarity before decoration',
  'Conversion without cheap tactics',
  'Premium design that stays usable',
  'Systems your team can maintain',
];

export default function About() {
  return (
    <section id="about" className="bg-[#0f1011] py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff633e]">
              About MJBrandWorks
            </p>
            <h2 className="max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              A focused brand partner for ambitious ecommerce and service businesses.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-white/64">
            <p>
              We work with founders and teams who already have a solid business, but know the brand
              and website are not yet communicating the quality of the offer.
            </p>
            <p>
              Our work sits between strategy, design, and conversion. We sharpen the story, raise
              the visual standard, and build the reusable pieces needed for websites, campaigns, and
              product launches.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.75fr_1fr]">
          <div className="rounded-lg bg-[#171819] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/44">How we think</p>
            <div className="mt-8 space-y-4">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center justify-between gap-6 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-white">{principle}</span>
                  <span className="h-2 w-2 rounded-full bg-[#ff633e]" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-lg bg-[#171819] p-7">
              <p className="text-4xl font-semibold text-[#ff633e]">5</p>
              <p className="mt-3 text-sm leading-relaxed text-white/58">Brand categories shown across the current portfolio.</p>
            </div>
            <div className="rounded-lg bg-[#171819] p-7">
              <p className="text-4xl font-semibold text-[#ff633e]">3</p>
              <p className="mt-3 text-sm leading-relaxed text-white/58">Core workstreams: strategy, identity, and conversion-led web design.</p>
            </div>
            <div className="rounded-lg bg-[#171819] p-7">
              <p className="text-4xl font-semibold text-[#ff633e]">1</p>
              <p className="mt-3 text-sm leading-relaxed text-white/58">Senior point of contact from first audit through launch handoff.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
