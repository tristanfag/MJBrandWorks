import { Box, Check, Crosshair, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Crosshair,
    title: 'Clear positioning',
    description: 'We define what makes you different and why it matters to your customers.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion-first systems',
    description: 'Every page and touchpoint is designed to build trust and drive action.',
  },
  {
    icon: Box,
    title: 'Launch-ready assets',
    description: 'You get the brand, website, and content you need to launch with confidence.',
  },
];

const deliverables = [
  'A clear brand strategy and messaging',
  'A high-converting website experience',
  'Campaign-ready assets and guidelines',
];

const timeline = [
  ['Brand strategy', '2-3 weeks'],
  ['Website design & build', '3-5 weeks'],
  ['Launch support', 'Ongoing'],
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-12 font-sans text-white sm:px-8 sm:py-14 lg:px-10 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,rgba(255,255,255,0.055),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0)_28%,rgba(0,0,0,0.18)_100%)]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.88fr] lg:items-end lg:gap-10">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase leading-none text-white/66 [letter-spacing:0.28em] sm:text-[11px]">
              Brand Systems
            </p>
            <h2 className="max-w-[520px] text-[30px] font-semibold leading-[1.08] text-white [letter-spacing:0] sm:text-[36px] lg:text-[38px] xl:text-[42px]">
              Build brands people trust. And businesses that grow.
            </h2>
          </div>

          <p className="max-w-[500px] text-[15px] leading-[1.6] text-white/60 sm:text-[16px] lg:pb-1">
            We turn good businesses into distinctive brands with clear positioning, compelling websites, and launch-ready assets that drive real results.
          </p>
        </div>

        <div className="mt-8 border-t border-white/[0.35] pt-7 sm:mt-9 sm:pt-8">
          <div className="grid gap-7 md:grid-cols-3 md:gap-9">
            {pillars.map((pillar) => (
              <article key={pillar.title}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/[0.02]">
                  <pillar.icon className="h-4 w-4 text-white/72" strokeWidth={1.35} />
                </div>
                <h3 className="text-[18px] font-semibold leading-tight text-white sm:text-[19px]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 max-w-[320px] text-[14px] leading-[1.55] text-white/58 sm:text-[15px]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 grid border-t border-white/10 pt-6 lg:grid-cols-2 lg:divide-x lg:divide-white/12">
          <div className="pb-6 lg:pb-0 lg:pr-10">
            <p className="mb-3 text-[10px] font-semibold uppercase leading-none text-white/52 [letter-spacing:0.26em] sm:text-[11px]">
              What You Get
            </p>
            <div className="space-y-0">
              {deliverables.map((item) => (
                <div key={item} className="flex items-center gap-4 py-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20">
                    <Check className="h-3 w-3 text-white/64" strokeWidth={1.45} />
                  </span>
                  <p className="text-[14px] leading-relaxed text-white/84 sm:text-[15px]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="mb-3 text-[10px] font-semibold uppercase leading-none text-white/52 [letter-spacing:0.26em] sm:text-[11px]">
              Timeline
            </p>
            <div className="space-y-0">
              {timeline.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[1fr_auto] gap-8 border-b border-white/9 py-3.5 last:border-b-0">
                  <p className="text-[14px] leading-relaxed text-white/84 sm:text-[15px]">{label}</p>
                  <p className="text-right text-[14px] leading-relaxed text-white/90 sm:text-[15px]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
