import { CheckCircle2, LineChart, ShieldCheck } from 'lucide-react';

const proofPoints = [
  {
    icon: ShieldCheck,
    title: 'Sharper positioning',
    body: 'We turn unclear offers into a focused brand story, message hierarchy, and visual system that customers understand quickly.',
  },
  {
    icon: LineChart,
    title: 'Better conversion paths',
    body: 'Every page, section, and call to action is designed around how buyers compare, trust, and decide.',
  },
  {
    icon: CheckCircle2,
    title: 'Launch-ready assets',
    body: 'You receive the identity, web direction, content blocks, and campaign-ready material needed to move without guesswork.',
  },
];

export default function BrandPotential() {
  return (
    <section className="bg-[#0f1011] py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff633e]">
              Brand Growth Systems
            </p>
            <h2 className="max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Turn a good business into a brand people trust before they buy.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-white/64 lg:justify-self-end lg:text-right">
            The brands above sell considered products: wellness, sleep, home improvement, laundry, and interiors.
            We build the identity and website systems that make those offers feel premium, clear, and credible.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {proofPoints.map((item) => (
            <article key={item.title} className="rounded-lg bg-[#171819] p-7 sm:p-8">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#221a17] text-[#ff633e]">
                <item.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.52fr]">
          <div className="rounded-lg bg-[#171819] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/52">What changes after working with us</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-4xl font-semibold text-[#ff633e]">01</p>
                <p className="mt-3 text-sm leading-relaxed text-white/62">
                  A clearer offer that tells customers why you are different.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#ff633e]">02</p>
                <p className="mt-3 text-sm leading-relaxed text-white/62">
                  A website experience that feels designed, not assembled.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#ff633e]">03</p>
                <p className="mt-3 text-sm leading-relaxed text-white/62">
                  A visual language your ads, emails, and product pages can reuse.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#171819] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/52">Typical engagement</p>
            <dl className="mt-8 space-y-5">
              <div className="flex items-center justify-between gap-6 border-b border-white/8 pb-5">
                <dt className="text-white/58">Brand sprint</dt>
                <dd className="font-medium text-white">2-3 weeks</dd>
              </div>
              <div className="flex items-center justify-between gap-6 border-b border-white/8 pb-5">
                <dt className="text-white/58">Website direction</dt>
                <dd className="font-medium text-white">3-5 weeks</dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-white/58">Launch support</dt>
                <dd className="font-medium text-white">Ongoing</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
