import { Palette, RefreshCw, Globe, Megaphone, PenTool, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Complete visual identity systems \u2014 logos, color palettes, typography, and brand guidelines that tell your story.',
    number: '01',
  },
  {
    icon: RefreshCw,
    title: 'Rebranding',
    description:
      'Strategic brand evolution for established businesses ready to modernize and recapture market attention.',
    number: '02',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description:
      'Conversion-focused websites that showcase your brand with clarity, speed, and purpose.',
    number: '03',
  },
  {
    icon: PenTool,
    title: 'Creative Direction',
    description:
      'End-to-end creative strategy that aligns every visual touchpoint with your brand narrative.',
    number: '04',
  },
  {
    icon: Megaphone,
    title: 'Brand Strategy',
    description:
      'Market positioning, audience research, and messaging frameworks that give your brand a competitive edge.',
    number: '05',
  },
  {
    icon: BarChart3,
    title: 'Brand Consulting',
    description:
      'Audits, workshops, and actionable insights to strengthen existing brands and identify growth opportunities.',
    number: '06',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-neutral-950 border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-brand-500 text-sm font-medium uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Brands built to last.
            </h2>
          </div>
          <p className="text-neutral-400 text-base leading-relaxed max-w-sm lg:text-right">
            From initial concept to market launch, we handle every facet of brand creation and
            transformation.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:block md:overflow-visible md:pb-0">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`
                min-w-[78vw] snap-start flex-shrink-0 rounded-2xl bg-neutral-900 border border-neutral-800/80 p-7 flex flex-col gap-6
                md:min-w-0 md:rounded-none md:bg-transparent md:border-0 md:border-t md:border-neutral-800 md:p-0 md:py-7
                md:flex-row md:items-start md:gap-10
                md:group md:relative md:cursor-default
                ${i === services.length - 1 ? 'md:border-b' : ''}
              `}
            >
              <div className="flex items-center justify-between md:block md:w-16 md:shrink-0 md:pt-1">
                <span className="text-neutral-600 text-xs font-mono tracking-widest md:text-sm">
                  {service.number}
                </span>
                <service.icon className="w-5 h-5 text-brand-500 md:hidden" strokeWidth={1.5} />
              </div>

              <div className="flex-1 md:flex md:items-baseline md:gap-8">
                <h3 className="text-xl font-semibold text-white md:text-2xl md:w-56 md:shrink-0 md:group-hover:text-brand-400 md:transition-colors md:duration-200">
                  {service.title}
                </h3>
                <p className="mt-2 text-neutral-500 text-sm leading-relaxed md:mt-0 md:text-base md:text-neutral-400 md:opacity-0 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:transition-all md:duration-300">
                  {service.description}
                </p>
              </div>

              <service.icon
                className="hidden md:block w-5 h-5 text-neutral-700 shrink-0 mt-1 md:group-hover:text-brand-500 md:transition-colors md:duration-200"
                strokeWidth={1.5}
              />

              <span className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-brand-500 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
