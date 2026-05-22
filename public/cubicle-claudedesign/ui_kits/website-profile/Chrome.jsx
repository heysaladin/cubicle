// Bestra Website UI Kit — chrome: Navbar, MobileSheet, Footer.

const { useState: useStateChrome } = React;

function Icon({ name, size = 16 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    menu:    <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    x:       <><path d="M18 6 6 18"/><path d="M6 6l12 12"/></>,
    arrow:   <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    arrowup: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
    check:   <path d="M20 6 9 17l-5-5"/>,
    chev:    <path d="m6 9 6 6 6-6"/>,
    mail:    <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
    phone:   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    pin:     <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></>,
    sun:     <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></>,
    moon:    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
    target:  <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    layers:  <><path d="m12.83 2.18-9.66 4.46a1 1 0 0 0 0 1.82L12.17 13l.83.36.83-.36 8.83-4.45a1 1 0 0 0 0-1.82l-9.83-4.55z"/><path d="M3 12.32 12 17l9-4.68"/><path d="M3 17.32 12 22l9-4.68"/></>,
    trending:<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>,
    users:   <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    briefcase:<><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    settings:<><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></>,
    globe:   <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>,
    yt:      <><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></>,
    ig:      <><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const NAV_ITEMS = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'blog',      label: 'Blog' },
];

function Navbar({ active, onNav, dark, onToggleDark }) {
  const [sheet, setSheet] = useStateChrome(false);
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-brand" onClick={() => onNav('home')} style={{cursor:'pointer'}}>
          <span className="mark"></span>
          bestra
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
          <button className="btn btn-default btn-sm" onClick={() => onNav('contact')}>Contact us</button>
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
        <div style={{marginTop:16}}>
          <button className="btn btn-default" style={{width:'100%'}} onClick={() => onNav('contact')}>Contact us</button>
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
              bestra
            </div>
            <p>Business, the bestra way. Helping companies grow with clarity, confidence, and purpose.</p>
            <div className="foot-socials">
              <a aria-label="YouTube"><Icon name="yt" /></a>
              <a aria-label="Instagram"><Icon name="ig" /></a>
              <a aria-label="Globe"><Icon name="globe" /></a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a onClick={() => onNav('home')}>Home</a>
            <a onClick={() => onNav('about')}>About Us</a>
            <a onClick={() => onNav('team')}>Our Team</a>
            <a onClick={() => onNav('values')}>Our Values</a>
          </div>
          <div className="foot-col">
            <h4>Solutions</h4>
            <a onClick={() => onNav('solutions')}>Strategic Direction</a>
            <a onClick={() => onNav('solutions')}>Operational Execution</a>
            <a onClick={() => onNav('solutions')}>Growth Optimization</a>
            <a onClick={() => onNav('pricing')}>Pricing</a>
          </div>
          <div className="foot-col">
            <h4>Resources</h4>
            <a onClick={() => onNav('case-studies')}>Case Studies</a>
            <a onClick={() => onNav('faq')}>FAQ</a>
            <a onClick={() => onNav('blog')}>Blog</a>
            <a onClick={() => onNav('contact')}>Contact</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Bestra. All rights reserved.</span>
          <span style={{display:'flex',gap:16}}>
            <a style={{cursor:'pointer'}}>Licensing</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function cx(...a) { return a.filter(Boolean).join(' '); }

Object.assign(window, { Icon, Navbar, Footer, NAV_ITEMS, cx });
