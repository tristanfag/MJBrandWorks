import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-brand-500 text-sm font-medium uppercase tracking-wider mb-4">
              Let's Work Together
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to launch your brand?
            </h2>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a plan to
              take your brand to the next level.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-neutral-500 text-sm mb-1">Email</p>
                <p className="text-white font-medium">hello@mjbrandworks.com</p>
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-1">Follow Us</p>
                <p className="text-white font-medium">@mjbrandworks</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm text-neutral-400 mb-2">
                What do you need?
              </label>
              <select
                id="service"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none"
              >
                <option value="">Select a service</option>
                <option value="brand-identity">Brand Identity</option>
                <option value="rebranding">Rebranding</option>
                <option value="web-design">Web Design</option>
                <option value="brand-strategy">Brand Strategy</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                Tell us about your project
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                placeholder="Give us the details..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-white text-neutral-950 px-8 py-4 text-base font-medium rounded-full hover:bg-brand-400 transition-colors group"
            >
              Send Message
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
