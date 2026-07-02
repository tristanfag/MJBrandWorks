import { Target, PenTool, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Target,
    number: '01',
    title: 'Strategy',
    description:
      'We start with insight. Market research, competitive analysis, and clear positioning that sets your brand up to win.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Creative',
    description:
      'Bold ideas. Compelling stories. Visuals that stop the scroll and brand experiences that leave a lasting impression.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Conversion',
    description:
      'We optimize every touchpoint to turn attention into action\u2014 maximizing performance and measurable ROI.',
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 sm:py-28 px-6 lg:px-8 bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-16 gap-12">
          <div className="lg:w-[45%] flex flex-col">
            <span className="text-orange-500 text-xs font-semibold uppercase tracking-[0.25em] mb-8">
              Why MJBrandWorks
            </span>

            <h2 className="text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-white">
              Creative that captures attention. Strategy that converts<span className="text-orange-500 font-normal">.</span>
            </h2>

            <p className="mt-10 text-neutral-400 text-lg leading-relaxed max-w-[480px]">
              We blend data-driven strategy with standout creative to build brands that connect, engage, and drive measurable growth.
            </p>

            <a
              href="#work"
              className="mt-10 inline-flex items-center gap-3 text-white text-base font-medium hover:text-orange-400 transition-colors duration-200 w-fit group"
            >
              See how we work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-neutral-700/50 rounded-2xl px-6 py-8 flex flex-col"
              >
                <div className="w-16 h-16 rounded-full border border-neutral-600/50 flex items-center justify-center mb-8">
                  <s.icon className="w-7 h-7 text-orange-500" strokeWidth={1.3} />
                </div>
                <span className="text-orange-500 text-sm font-medium mb-2">{s.number}</span>
                <h3 className="text-white font-semibold text-2xl mb-3">{s.title}</h3>
                <span className="w-10 h-[2px] bg-orange-500 mb-5" />
                <p className="text-neutral-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-[#0e0e0e] border border-neutral-800/40 p-8 sm:p-10">
          <p className="text-neutral-400 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            Real Results. Measurable Impact.
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-0 sm:divide-x divide-neutral-700/50 flex-1">
              <div className="pr-8 pb-6 sm:pb-0">
                <span className="text-4xl sm:text-5xl font-light text-white tracking-tight">2.4x</span>
                <p className="text-neutral-500 text-sm mt-1">Average ROI Increase</p>
              </div>
              <div className="sm:px-8 pb-6 sm:pb-0">
                <span className="text-4xl sm:text-5xl font-light text-white tracking-tight">68%</span>
                <p className="text-neutral-500 text-sm mt-1">Increase in Conversions</p>
              </div>
              <div className="sm:pl-8">
                <span className="text-4xl sm:text-5xl font-light text-white tracking-tight">42%</span>
                <p className="text-neutral-500 text-sm mt-1">Lower Cost Per Acquisition</p>
              </div>
            </div>

            <div className="flex items-center gap-6 lg:w-[380px]">
              <svg viewBox="0 0 200 100" className="w-48 h-24 shrink-0">
                <line x1="0" y1="10" x2="200" y2="10" stroke="#333" strokeWidth="0.5" />
                <line x1="0" y1="35" x2="200" y2="35" stroke="#333" strokeWidth="0.5" />
                <line x1="0" y1="60" x2="200" y2="60" stroke="#333" strokeWidth="0.5" />
                <line x1="0" y1="85" x2="200" y2="85" stroke="#333" strokeWidth="0.5" />
                <text x="0" y="12" fill="#555" fontSize="6">200</text>
                <text x="0" y="37" fill="#555" fontSize="6">150</text>
                <text x="0" y="62" fill="#555" fontSize="6">100</text>
                <text x="0" y="87" fill="#555" fontSize="6">50</text>
                <polyline
                  points="20,80 50,75 80,68 110,55 130,45 155,30 180,12"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="180" cy="12" r="4" fill="#ea580c" />
              </svg>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Performance growth across client campaigns (avg. over 12 months)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
