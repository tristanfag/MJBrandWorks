import { ArrowRight, Star } from 'lucide-react';

const showcaseImages = [
  { src: '/images/Screenshot_2026-07-02_at_15.37.13.png', alt: 'Baas Veranda website project' },
  { src: '/images/Screenshot_2026-07-02_at_15.36.48.png', alt: 'Wasdroom e-commerce project' },
  { src: '/images/Screenshot_2026-07-02_at_15.38.22.png', alt: 'Wandig furniture store project' },
];

const cardStyles = [
  { transform: 'rotate(-9deg) translateX(-62%) translateY(8%)', zIndex: 10 },
  { transform: 'rotate(0deg) translateX(0%) translateY(0%)',    zIndex: 30 },
  { transform: 'rotate(9deg)  translateX(62%) translateY(8%)', zIndex: 10 },
];

export default function Hero() {
  return (
    <section className="relative bg-neutral-950 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/ChatGPT_Image_Jul_2,_2026,_04_48_41_PM.png')" }}
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
          Take your business{' '}
          <em className="italic text-brand-500">to the moon</em>{' '}
          with a brand that converts.
        </h1>

        <p className="mt-5 sm:mt-7 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
          MJBrandWorks is your dedicated branding partner \u2014 we create powerful brand identities
          from scratch and transform existing brands through strategic rebranding to drive real growth.
        </p>

        <a
          href="#contact"
          className="group mt-8 relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-[1.1rem] rounded-full font-semibold text-sm sm:text-base text-white w-full sm:w-auto justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #dc8c2b 0%, #c47221 50%, #e4a54e 100%)',
            boxShadow: '0 0 24px rgba(220,140,43,0.45), 0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none" />
          Start Your Project
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black/20 group-hover:bg-black/30 transition-colors shrink-0">
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="flex -space-x-3">
            {[
              'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
              'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
              'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
              'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-neutral-950 object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Star size={14} className="text-brand-400 fill-brand-400" />
            <span className="text-white font-semibold text-xs sm:text-sm">5.0</span>
            <span className="text-neutral-500 text-xs sm:text-sm">Trusted by 50+ brands</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-28 pb-0">
        <div className="relative flex items-center justify-center h-[140px] sm:h-[190px] lg:h-[260px]">
          {showcaseImages.map((img, i) => (
            <div
              key={i}
              className="absolute rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 transition-transform duration-300 hover:scale-105"
              style={{
                width: 'clamp(120px, 20vw, 280px)',
                transform: cardStyles[i].transform,
                zIndex: cardStyles[i].zIndex,
              }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
