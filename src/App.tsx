import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative h-screen overflow-hidden bg-neutral-950 text-white font-sans">
      <Header />
      <Hero />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/75 px-6 text-center font-sans backdrop-blur-[3px]"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <div className="flex w-full max-w-[520px] flex-col items-center">
          <span className="mb-5 text-[11px] font-medium uppercase tracking-[0.42em] text-neutral-950/55">
            MJBrandWorks
          </span>
          <div className="mb-6 h-px w-16 bg-neutral-950/25" />
          <h1 className="text-[34px] font-semibold leading-[0.98] tracking-[-0.03em] text-neutral-950 sm:text-[54px]">
            Website coming soon
          </h1>
          <div className="mt-7 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.28em] text-neutral-950/50">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950/45" />
            <span>Preparing launch</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
