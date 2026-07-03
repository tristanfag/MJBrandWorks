import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {

  useEffect(() => {
    const OVERLAY_ID = '__cs_overlay';

    function createOverlay(): HTMLDivElement {
      const el = document.createElement('div');
      el.id = OVERLAY_ID;
      Object.assign(el.style, {
        position: 'fixed',
        inset: '0',
        zIndex: '2147483647',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        textAlign: 'center',
        padding: '24px',
      });
      el.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;max-width:520px;width:100%">
          <span style="margin-bottom:20px;font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:0.42em;color:rgba(10,10,10,0.55)">MJBrandWorks</span>
          <div style="margin-bottom:24px;height:1px;width:64px;background:rgba(10,10,10,0.25)"></div>
          <h1 style="font-size:clamp(34px,8vw,54px);font-weight:600;line-height:0.98;letter-spacing:-0.03em;color:#0a0a0a;margin:0">Website coming soon</h1>
          <div style="margin-top:28px;display:flex;align-items:center;gap:12px;font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.28em;color:rgba(10,10,10,0.50)">
            <span style="height:6px;width:6px;border-radius:50%;background:rgba(10,10,10,0.45)"></span>
            <span>Preparing launch</span>
          </div>
        </div>
      `;
      return el;
    }

    function ensureOverlay() {
      if (!document.getElementById(OVERLAY_ID)) {
        document.body.appendChild(createOverlay());
      }
    }

    ensureOverlay();

    const observer = new MutationObserver(() => {
      ensureOverlay();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const interval = setInterval(ensureOverlay, 300);

    const handleKeydown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-neutral-950 text-white font-sans">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
