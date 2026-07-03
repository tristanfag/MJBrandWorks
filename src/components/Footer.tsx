const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0e0f] py-14">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-white/8 pb-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <a href="#" className="text-2xl font-semibold tracking-tight text-white">
              MJBrand<span className="text-[#ff633e]">Works</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/48">
              Strategy, identity, web design, and launch creative for brands that need to look as
              strong as the business behind them.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-white/54 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-sm text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MJBrandWorks. All rights reserved.</p>
          <p>Built for clarity, trust, and conversion.</p>
        </div>
      </div>
    </footer>
  );
}
