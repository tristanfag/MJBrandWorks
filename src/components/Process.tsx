import { ClipboardCheck, Compass, Layers3, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Audit and Position',
    description: 'We review the current brand, offer, competitors, customer journey, and website friction before any visual work starts.',
    output: 'Positioning notes, page priorities, and creative direction.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Build the System',
    description: 'We design the identity, page structure, content blocks, and reusable visual rules around the buying decision.',
    output: 'Identity system, UX layouts, copy structure, and design components.',
  },
  {
    icon: ClipboardCheck,
    number: '03',
    title: 'Refine and Prepare',
    description: 'We tighten hierarchy, check mobile behavior, align campaign assets, and make sure the brand is ready for real use.',
    output: 'Responsive screens, launch assets, and handoff documentation.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch and Improve',
    description: 'After launch, we help measure what customers do, then improve pages, offers, and creative based on real signals.',
    output: 'Iteration plan, test ideas, and ongoing creative support.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#121314] py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff633e]">
            Process
          </p>
          <h2 className="text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            A practical process with clear decisions at every step.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/64">
            Good branding should not feel mysterious. We keep the work structured, collaborative,
            and tied to the places your customers actually interact with the business.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-lg bg-[#18191a] p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#221a17] text-[#ff633e]">
                  <step.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <span className="text-sm font-semibold text-white/34">{step.number}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/62">{step.description}</p>
              <div className="mt-7 border-t border-white/8 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff633e]">Output</p>
                <p className="mt-3 text-sm leading-relaxed text-white/54">{step.output}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
