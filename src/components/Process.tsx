import { Search, Lightbulb, Pencil, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'Deep-dive into your market, audience, and competition to uncover positioning opportunities.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategize',
    description: 'Define your brand narrative, values, and messaging architecture.',
  },
  {
    icon: Pencil,
    number: '03',
    title: 'Design',
    description: 'Craft the visual identity \u2014 logo, typography, color systems, and all brand collateral.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch',
    description: 'Roll out your brand across every touchpoint with guidelines and ongoing support.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-brand-500 text-sm font-medium uppercase tracking-wider mb-4">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            From vision to reality.
          </h2>
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            A proven four-phase approach that takes brands from concept to market with precision and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-brand-500" strokeWidth={1.5} />
                </div>
                <span className="text-neutral-700 text-sm font-mono font-medium">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
