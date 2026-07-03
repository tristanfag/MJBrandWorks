import { ArrowRight, Mail, MessageSquare, Timer } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#121314] py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff633e]">
              Start a Project
            </p>
            <h2 className="max-w-3xl text-[36px] font-semibold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Tell us what needs to look more premium, clearer, or easier to buy.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/64">
              Share the current website, the offer, and what feels stuck. We will reply with the
              most sensible next step - whether that is a brand audit, a focused redesign, or a
              full identity and website system.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 2xl:grid-cols-3">
              <div className="rounded-lg bg-[#18191a] p-5">
                <Mail className="h-5 w-5 text-[#ff633e]" strokeWidth={1.6} />
                <p className="mt-4 text-sm text-white/48">Email</p>
                <p className="mt-1 font-medium text-white">hello@mjbrandworks.com</p>
              </div>
              <div className="rounded-lg bg-[#18191a] p-5">
                <Timer className="h-5 w-5 text-[#ff633e]" strokeWidth={1.6} />
                <p className="mt-4 text-sm text-white/48">Response</p>
                <p className="mt-1 font-medium text-white">Within 1 business day</p>
              </div>
              <div className="rounded-lg bg-[#18191a] p-5">
                <MessageSquare className="h-5 w-5 text-[#ff633e]" strokeWidth={1.6} />
                <p className="mt-4 text-sm text-white/48">Best fit</p>
                <p className="mt-1 font-medium text-white">Brand and web systems</p>
              </div>
            </div>
          </div>

          <form className="rounded-lg bg-[#18191a] p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/62">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg bg-[#101112] px-4 py-3 text-white outline-none ring-1 ring-white/8 transition focus:ring-[#ff633e]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/62">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg bg-[#101112] px-4 py-3 text-white outline-none ring-1 ring-white/8 transition focus:ring-[#ff633e]"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-white/62">
                  Company or website
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full rounded-lg bg-[#101112] px-4 py-3 text-white outline-none ring-1 ring-white/8 transition focus:ring-[#ff633e]"
                  placeholder="brand.com"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-white/62">
                  Project type
                </label>
                <select
                  id="projectType"
                  className="w-full rounded-lg bg-[#101112] px-4 py-3 text-white outline-none ring-1 ring-white/8 transition focus:ring-[#ff633e]"
                >
                  <option>Brand and website</option>
                  <option>Brand strategy</option>
                  <option>Website redesign</option>
                  <option>Launch creative</option>
                  <option>Brand audit</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/62">
                What should improve?
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full resize-none rounded-lg bg-[#101112] px-4 py-3 text-white outline-none ring-1 ring-white/8 transition focus:ring-[#ff633e]"
                placeholder="Tell us what you sell, what is not working, and what the brand should feel like."
              />
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-neutral-950 transition hover:bg-[#ff633e] sm:w-auto"
            >
              Send Inquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
