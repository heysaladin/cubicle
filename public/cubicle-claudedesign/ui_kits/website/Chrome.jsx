// Cubicle Website UI Kit — chrome: Navbar, MobileSheet, Footer.
// All icons inline Lucide SVGs (stroke-2, rounded caps) to avoid a build step.

const { useState: useStateChrome } = React;

function Icon({ name, size = 16 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    menu: <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    x:    <><path d="M18 6 6 18"/><path d="M6 6l12 12"/></>,
    arrow:<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    check:<path d="M20 6 9 17l-5-5"/>,
    chev: <path d="m6 9 6 6 6-6"/>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
    phone:<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    pin:  <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></>,
    sun:  <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></>,
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
    zap:  <path d="M13 2 3 14h9l-1 8 10-12h-9z"/>,
    shield:<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    layers:<><path d="m12.83 2.18-9.66 4.46a1 1 0 0 0 0 1.82L12.17 13l.83.36.83-.36 8.83-4.45a1 1 0 0 0 0-1.82l-9.83-4.55z"/><path d="M3 12.32 12 17l9-4.68"/><path d="M3 17.32 12 22l9-4.68"/></>,
    sparkles:<><path d="m12 3-1.9 5.1L5 10l5.1 1.9L12 17l1.9-5.1L19 10l-5.1-1.9z"/><path d="M5 3v4M3 5h4M19 17v4M17 19h4"/></>,
    git:  <><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></>,
    globe:<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>,
    command:<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>,
    star: <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    github:<><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></>,
    x2: <><path d="M4 4l16 16M20 4L4 20"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

function Navbar({ active, onNav, dark, onToggleDark }) {
  const [sheet, setSheet] = useStateChrome(false);
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-brand" onClick={() => onNav('home')} style={{cursor:'pointer'}}>
          <span className="mark"></span>
          cubicle
        </div>
        <div className="nav-links">
          {NAV_ITEMS.map(it => (
            <div key={it.id} className={cx('nav-link', active === it.id && 'active')} onClick={() => onNav(it.id)}>{it.label}</div>
          ))}
        </div>
        <div className="nav-actions">
          <button className="btn btn-ghost btn-icon" onClick={onToggleDark} aria-label="Toggle theme">
            <Icon name={dark ? 'sun' : 'moon'} />
          </button>
          <button className="btn btn-ghost btn-sm" onClick={() => onNav('contact')}>Sign in</button>
          <button className="btn btn-default btn-sm" onClick={() => onNav('pricing')}>Get started</button>
          <button className="nav-hamburger" onClick={() => setSheet(true)} aria-label="Menu">
            <Icon name="menu" size={18} />
          </button>
        </div>
      </div>
      {sheet && <MobileSheet active={active} onNav={(id) => { setSheet(false); onNav(id); }} onClose={() => setSheet(false)} />}
    </nav>
  );
}

function MobileSheet({ active, onNav, onClose }) {
  return (
    <>
      <div className="sheet-scrim" onClick={onClose} />
      <div className="sheet">
        <button className="btn btn-ghost btn-icon sheet-close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={18} />
        </button>
        {NAV_ITEMS.map(it => (
          <div key={it.id} className={cx('nav-link', active === it.id && 'active')} onClick={() => onNav(it.id)}>{it.label}</div>
        ))}
        <div style={{marginTop: 16, display: 'flex', gap: 8}}>
          <button className="btn btn-outline btn-sm" style={{flex:1}} onClick={() => onNav('contact')}>Sign in</button>
          <button className="btn btn-default btn-sm" style={{flex:1}} onClick={() => onNav('pricing')}>Get started</button>
        </div>
      </div>
    </>
  );
}

function Footer({ onNav }) {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="nav-brand" style={{fontSize:18}}>
              <span className="mark"></span>
              cubicle
            </div>
            <p>Quiet infrastructure for product teams. Ship faster with a well-considered component system.</p>
            <div className="foot-socials">
              <a aria-label="GitHub"><Icon name="github" /></a>
              <a aria-label="X"><Icon name="x2" /></a>
              <a aria-label="Globe"><Icon name="globe" /></a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a onClick={() => onNav('features')}>Features</a>
            <a onClick={() => onNav('pricing')}>Pricing</a>
            <a onClick={() => onNav('features')}>Changelog</a>
            <a onClick={() => onNav('features')}>Roadmap</a>
          </div>
          <div className="foot-col">
            <h4>Resources</h4>
            <a onClick={() => onNav('blog')}>Blog</a>
            <a onClick={() => onNav('features')}>Docs</a>
            <a onClick={() => onNav('features')}>Guides</a>
            <a onClick={() => onNav('features')}>API</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a onClick={() => onNav('features')}>About</a>
            <a onClick={() => onNav('features')}>Careers</a>
            <a onClick={() => onNav('contact')}>Contact</a>
            <a onClick={() => onNav('features')}>Press</a>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Cookies</a>
            <a>DPA</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Cubicle, Inc. All rights reserved.</span>
          <span>Built with Cubicle UI · v1.4.2</span>
        </div>
      </div>
    </footer>
  );
}

function cx(...a) { return a.filter(Boolean).join(' '); }

Object.assign(window, { Icon, Navbar, Footer, NAV_ITEMS, cx });
