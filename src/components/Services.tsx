import { ArrowUpRight, BadgeCheck, LayoutTemplate, Megaphone, PenTool, Search, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Brand Strategy',
    description: 'Positioning, audience insight, competitor mapping, naming direction, and a message system your team can actually use.',
    deliverables: ['Positioning deck', 'Messaging framework', 'Customer journey'],
  },
  {
    icon: Sparkles,
    title: 'Identity Systems',
    description: 'Logo direction, typography, color, art direction, and brand rules built for ecommerce, campaigns, and day-to-day content.',
    deliverables: ['Visual identity', 'Brand guidelines', 'Asset library'],
  },
  {
    icon: LayoutTemplate,
    title: 'Web Design',
    description: 'High-converting homepage, product, service, and landing-page systems with clear UX and premium visual execution.',
    deliverables: ['UX wireframes', 'Responsive design', 'Conversion sections'],
  },
  {
    icon: Megaphone,
    title: 'Launch Creative',
    description: 'Campaign concepts, paid-social visuals, email blocks, and content direction that keep the new brand consistent after launch.',
    deliverables: ['Ad creative', 'Email direction', 'Launch checklist'],
  },
  {
    icon: PenTool,
    title: 'Content Direction',
    description: 'Copy structure, section writing, product storytelling, and brand voice so the website sounds as polished as it looks.',
    deliverables: ['Page copy', 'Tone of voice', 'CTA system'],
  },
  {
    icon: BadgeCheck,
    title: 'Brand Audit',
    description: 'A practical review of where the current brand, website, and funnel are losing trust, clarity, or conversion momentum.',
    deliverables: ['Audit report', 'Priority roadmap', 'Quick wins'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#121314] py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff633e]">
              Services
            </p>
            <h2 className="max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Serious brand work for businesses ready to look established.
            </h2>
          </div>
          <div className="max-w-2xl text-lg leading-relaxed text-white/64 lg:justify-self-end lg:text-right">
            We focus on the pieces that affect perception and conversion: what you say, how it looks,
            how the website is structured, and how consistently the brand shows up after launch.
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-lg bg-[#18191a] p-7 transition-colors duration-200 hover:bg-[#1b1c1e]">
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#221a17] text-[#ff633e]">
                  <service.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/24 transition-colors group-hover:text-[#ff633e]" strokeWidth={1.6} />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 min-h-[96px] text-[15px] leading-relaxed text-white/62">{service.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <span key={item} className="rounded-full bg-white/[0.055] px-3 py-1.5 text-xs font-medium text-white/62">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
