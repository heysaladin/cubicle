// Cubicle UI Kit — core primitive components.
// Babel-in-browser JSX; exported to window for cross-script use.

const { useState } = React;

function cx(...args) { return args.filter(Boolean).join(' '); }

function Button({ variant='default', size='default', className, children, ...rest }) {
  const v = `btn btn-${variant}`;
  const s = size === 'sm' ? 'btn-sm' : size === 'icon' ? 'btn-icon' : '';
  return <button className={cx('btn', `btn-${variant}`, s, className)} {...rest}>{children}</button>;
}

function Input(props) { return <input className={cx('input', props.className)} {...props} />; }

function Textarea(props) { return <textarea className={cx('textarea', props.className)} {...props} />; }

function Card({ className, children }) { return <div className={cx('card', className)}>{children}</div>; }
function CardHeader({ children }) { return <div className="card-header">{children}</div>; }
function CardTitle({ children }) { return <h3 className="card-title">{children}</h3>; }
function CardDesc({ children }) { return <p className="card-desc">{children}</p>; }
function CardBody({ children }) { return <div className="card-body">{children}</div>; }
function CardFooter({ children }) { return <div className="card-footer">{children}</div>; }

function Badge({ variant='default', children }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

function Avatar({ initials, bg, fg }) {
  return <span className="avatar" style={bg?{background:bg,color:fg,border:'none'}:{}}>{initials}</span>;
}

function Checkbox({ checked, onChange }) {
  return <span className={cx('checkbox', checked && 'on')} onClick={() => onChange(!checked)} role="checkbox" aria-checked={checked}></span>;
}

function Switch({ checked, onChange }) {
  return <span className={cx('switch', checked && 'on')} onClick={() => onChange(!checked)} role="switch" aria-checked={checked}></span>;
}

function Separator({ orientation='horizontal' }) {
  const s = orientation === 'vertical'
    ? { width: 1, alignSelf: 'stretch', background: 'var(--border)' }
    : { height: 1, background: 'var(--border)' };
  return <div style={s} />;
}

function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor} style={{font:'500 14px/1 var(--font-sans)',marginBottom:6,display:'block'}}>{children}</label>;
}

function Tabs({ value, onChange, options }) {
  return (
    <div className="tabs">
      {options.map(o => (
        <div key={o.value} className={cx('tab', value===o.value && 'active')} onClick={() => onChange(o.value)}>{o.label}</div>
      ))}
    </div>
  );
}

function Alert({ variant='default', title, children, icon }) {
  const style = variant === 'destructive'
    ? { border:'1px solid var(--red-600)', color:'var(--red-700)' }
    : { border:'1px solid var(--border)' };
  return (
    <div style={{display:'flex',gap:12,padding:16,borderRadius:8,background:'var(--card)',alignItems:'flex-start',...style}}>
      {icon}
      <div>
        {title && <div style={{font:'500 14px/1.2 var(--font-sans)',marginBottom:4}}>{title}</div>}
        <div style={{font:'400 13px/1.4 var(--font-sans)',color: variant==='destructive' ? 'var(--red-600)' : 'var(--muted-foreground)'}}>{children}</div>
      </div>
    </div>
  );
}

function Dialog({ open, title, desc, children, onClose, footer }) {
  if (!open) return null;
  return (
    <div className="scrim" onClick={onClose}>
      <div className="dialog" onClick={e => e.stopPropagation()}>
        <div className="dialog-header">
          <h3 className="dialog-title">{title}</h3>
          {desc && <p className="dialog-desc">{desc}</p>}
        </div>
        <div className="dialog-body">{children}</div>
        <div className="dialog-footer">{footer}</div>
      </div>
    </div>
  );
}

// ── ACCORDION ─────────────────────────────────────────────────────────────────
function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className="accordion-item">
          <button className={cx('accordion-trigger', open===i && 'open')} onClick={() => setOpen(open===i ? null : i)}>
            {item.trigger}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div className={cx('accordion-content', open!==i && 'hidden')}>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

// ── SELECT ─────────────────────────────────────────────────────────────────────
function Select({ options=[], value, onChange, placeholder='Select…' }) {
  return (
    <div className="select-wrap">
      <select className="select" value={value} onChange={e => onChange?.(e.target.value)}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(o => <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>)}
      </select>
      <svg className="select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  );
}

// ── RADIO GROUP ────────────────────────────────────────────────────────────────
function RadioGroup({ options=[], value, onChange }) {
  return (
    <div className="radio-group">
      {options.map(o => {
        const v = o.value ?? o, l = o.label ?? o;
        return (
          <label key={v} className="radio-item" onClick={() => onChange?.(v)} style={{cursor:'pointer'}}>
            <span className={cx('radio-circle', value===v && 'on')} />
            <span className="radio-label">{l}</span>
          </label>
        );
      })}
    </div>
  );
}

// ── SLIDER ─────────────────────────────────────────────────────────────────────
function Slider({ value=0, min=0, max=100, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="slider-wrap">
      <div className="slider-track">
        <div className="slider-fill" style={{width: pct+'%'}} />
        <div className="slider-thumb" style={{left: `calc(${pct}% - 8px)`}} />
      </div>
      <input type="range" min={min} max={max} value={value} onChange={e=>onChange?.(+e.target.value)}
        style={{position:'absolute',inset:0,opacity:0,cursor:'pointer',width:'100%'}} />
    </div>
  );
}

// ── TOGGLE ─────────────────────────────────────────────────────────────────────
function Toggle({ pressed, onToggle, children, className }) {
  return (
    <button className={cx('toggle', pressed && 'on', className)} onClick={() => onToggle?.(!pressed)}>
      {children}
    </button>
  );
}

// ── PROGRESS ───────────────────────────────────────────────────────────────────
function Progress({ value=0, size='default' }) {
  return (
    <div className={cx('progress', size==='sm' && 'progress-sm')}>
      <div className="progress-fill" style={{width: Math.min(100, Math.max(0, value))+'%'}} />
    </div>
  );
}

// ── SKELETON ───────────────────────────────────────────────────────────────────
function Skeleton({ width, height=14, circle=false, className }) {
  return (
    <div className={cx('skeleton', circle && 'skeleton-circle', className)}
      style={{width: width ?? (circle ? height : '100%'), height, borderRadius: circle ? '50%' : 6}} />
  );
}

// ── TOOLTIP ────────────────────────────────────────────────────────────────────
function Tooltip({ content, children }) {
  return (
    <span className="tooltip-host">
      {children}
      <span className="tooltip">{content}</span>
    </span>
  );
}

// ── DROPDOWN ───────────────────────────────────────────────────────────────────
function DropdownMenu({ trigger, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{position:'relative',display:'inline-flex'}} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
      <span onClick={() => setOpen(!open)}>{trigger}</span>
      {open && (
        <div className="dropdown" style={{position:'absolute',top:'calc(100% + 4px)',left:0,zIndex:50}} onClick={()=>setOpen(false)}>
          {items.map((it, i) =>
            it === 'sep'
              ? <div key={i} className="dd-sep" />
              : it.label
                ? <div key={i} className="dd-label">{it.label}</div>
                : <div key={i} className={cx('dd-item', it.destructive && 'dd-dest')} onClick={it.onClick}>{it.icon && <it.icon />}{it.text}</div>
          )}
        </div>
      )}
    </div>
  );
}

// ── BREADCRUMB ─────────────────────────────────────────────────────────────────
function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <span className="bc-sep">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          )}
          {it.href || it.onClick
            ? <span className="bc-link" onClick={it.onClick}>{it.label}</span>
            : <span className="bc-current">{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

// ── PAGINATION ─────────────────────────────────────────────────────────────────
function Pagination({ page=1, total=1, onChange }) {
  const chevL = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
  const chevR = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
  const pages = Array.from({length: total}, (_, i) => i + 1);
  return (
    <div className="pagination">
      <button className="pg-btn" disabled={page<=1} onClick={()=>onChange?.(page-1)}>{chevL}</button>
      {pages.map(p => <button key={p} className={cx('pg-btn', page===p && 'active')} onClick={()=>onChange?.(p)}>{p}</button>)}
      <button className="pg-btn" disabled={page>=total} onClick={()=>onChange?.(page+1)}>{chevR}</button>
    </div>
  );
}

Object.assign(window, {
  cx, Button, Input, Textarea,
  Card, CardHeader, CardTitle, CardDesc, CardBody, CardFooter,
  Badge, Avatar, Checkbox, Switch, Separator, Label, Tabs, Alert, Dialog,
  Accordion, Select, RadioGroup, Slider, Toggle, Progress, Skeleton, Tooltip,
  DropdownMenu, Breadcrumb, Pagination,
});
