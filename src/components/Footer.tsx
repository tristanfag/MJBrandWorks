export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <a href="#" className="text-white font-semibold text-xl tracking-tight">
              MJBrand<span className="text-brand-500">Works</span>
            </a>
            <p className="text-neutral-500 text-sm mt-2">
              Building brands that reach the moon.
            </p>
          </div>

          <nav className="flex flex-wrap gap-8">
            <a href="#services" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Services
            </a>
            <a href="#work" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Work
            </a>
            <a href="#process" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Process
            </a>
            <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} MJBrandWorks. All rights reserved.
          </p>
          <p className="text-neutral-700 text-sm">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
