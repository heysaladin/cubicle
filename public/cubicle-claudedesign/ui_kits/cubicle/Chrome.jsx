// Cubicle UI Kit — app chrome: Sidebar, Topbar, Icons.

const Icon = {
  home: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>,
  inbox: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>,
  chart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 3v18h18"/><path d="m7 16 4-4 4 4 6-6"/></svg>,
  settings: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  users: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  search: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  plus: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  sun: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
  moon: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  alert: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>,
  trash: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
  layers: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>,
};

function Sidebar({ active, onNav }) {
  const items = [
    { id: 'dashboard', icon: 'chart', label: 'Dashboard' },
    { id: 'projects', icon: 'home', label: 'Projects' },
    { id: 'inbox', icon: 'inbox', label: 'Inbox', count: 3 },
    { id: 'team', icon: 'users', label: 'Team' },
    { id: 'components', icon: 'layers', label: 'Components' },
  ];
  const secondary = [
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="dot" style={{background:'var(--foreground)'}}></span>
        <span>cubicle</span>
      </div>
      <div className="sidebar-section">Workspace</div>
      {items.map(it => {
        const I = Icon[it.icon];
        return (
          <div key={it.id} className={cx('nav-item', active===it.id && 'active')} onClick={() => onNav(it.id)}>
            <I />
            <span style={{flex:1}}>{it.label}</span>
            {it.count && <span style={{font:'500 11px/1 var(--font-mono)',color:'var(--muted-foreground)'}}>{it.count}</span>}
          </div>
        );
      })}
      <div className="sidebar-section">Account</div>
      {secondary.map(it => {
        const I = Icon[it.icon];
        return (
          <div key={it.id} className={cx('nav-item', active===it.id && 'active')} onClick={() => onNav(it.id)}>
            <I /><span>{it.label}</span>
          </div>
        );
      })}
      <div style={{flex:1}}></div>
      <div style={{display:'flex',alignItems:'center',gap:10,padding:'8px 8px',borderTop:'1px solid var(--border)',marginTop:8,paddingTop:16}}>
        <Avatar initials="SA" bg="var(--neutral-100)" fg="var(--neutral-900)" />
        <div style={{flex:1,minWidth:0}}>
          <div style={{font:'500 13px/1.2 var(--font-sans)'}}>Saladin</div>
          <div style={{font:'400 12px/1.2 var(--font-sans)',color:'var(--muted-foreground)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>saladin@cubicle.dev</div>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ dark, onToggleDark, search, onSearch }) {
  return (
    <div className="topbar">
      <div className="search">
        <Icon.search />
        <input value={search} onChange={e => onSearch(e.target.value)} placeholder="Search…" />
      </div>
      <div className="topbar-right">
        <Button variant="ghost" size="icon" onClick={onToggleDark} aria-label="Toggle theme">
          {dark ? <Icon.sun /> : <Icon.moon />}
        </Button>
        <Button variant="default" size="sm"><Icon.plus />New project</Button>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Sidebar, Topbar });
