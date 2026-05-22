// Cubicle Website UI Kit — reusable marketing sections.
// Hero, Features, LogosRow, Pricing, Testimonials, FAQ, CtaBand, ContactSection.

const { useState: useStateSec } = React;

function Hero({ onCta }) {
  return (
    <section className="hero">
      <div className="container">
        <span className="hero eyebrow">
          <span style={{width:6,height:6,borderRadius:'50%',background:'var(--green-600)'}} />
          v1.4 · Radix + Tailwind tokens
        </span>
        <h1>A quiet design system for focused product teams.</h1>
        <p className="sub">Cubicle is a neutral, Geist-typed component library built on Radix and Tailwind. Drop it in, layer your brand, ship the work.</p>
        <div className="actions">
          <button className="btn btn-default btn-lg" onClick={onCta}>Get started <Icon name="arrow" size={14} /></button>
          <button className="btn btn-outline btn-lg">
            <Icon name="github" size={14} /> Star on GitHub
          </button>
        </div>

        <div className="preview">
          <div className="preview-bar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span style={{marginLeft:12,font:'500 12px/1 var(--font-mono)',color:'var(--muted-foreground)'}}>cubicle.dev/app</span>
          </div>
          <div className="preview-body">
            <div className="preview-side">
              <div className="item active" style={{width:'80%'}}></div>
              <div className="item" style={{width:'65%'}}></div>
              <div className="item" style={{width:'72%'}}></div>
              <div className="item" style={{width:'50%'}}></div>
              <div className="item" style={{width:'60%'}}></div>
            </div>
            <div className="preview-main">
              <div className="line w40"></div>
              <div className="line w80"></div>
              <div className="line w60"></div>
              <div className="row">
                <div className="kpi"><div className="line w60" style={{height:8}}></div><div className="line w40" style={{height:16,background:'var(--foreground)'}}></div></div>
                <div className="kpi"><div className="line w60" style={{height:8}}></div><div className="line w40" style={{height:16,background:'var(--foreground)'}}></div></div>
                <div className="kpi"><div className="line w60" style={{height:8}}></div><div className="line w40" style={{height:16,background:'var(--foreground)'}}></div></div>
              </div>
              <div className="line w80"></div>
              <div className="line w60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosRow() {
  return (
    <section style={{padding:'32px 0 48px'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:24,font:'500 12px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'1.5px',color:'var(--muted-foreground)'}}>
          Trusted by product teams at
        </div>
        <div className="logos">
          <span className="logo-txt">Vercel</span>
          <span className="logo-txt">Linear</span>
          <span className="logo-txt">Raycast</span>
          <span className="logo-txt">Supabase</span>
          <span className="logo-txt">Framer</span>
          <span className="logo-txt">Arc</span>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon:'zap',      title:'Fast by default',     desc:'Built on Radix primitives and Tailwind v4 — zero runtime, tree-shakable, and fully typed.' },
  { icon:'layers',   title:'Semantic tokens',     desc:'Every color, radius, and shadow lives as a CSS variable. Theme the whole system in minutes.' },
  { icon:'shield',   title:'Accessible primitives',desc:'Keyboard, screen reader, and focus behavior from Radix — audited and shipped.' },
  { icon:'sparkles', title:'Dark mode, first-class',desc:'Light and dark share one token layer. Flip a class on <html> and every surface follows.' },
  { icon:'command',  title:'CLI-driven',          desc:'Generate, update, and lock components from the terminal. Stay in sync with upstream.' },
  { icon:'git',      title:'Open source',         desc:'MIT-licensed, public roadmap, contributor-friendly. Fork it, bend it, own it.' },
];

function Features() {
  return (
    <section className="muted-bg">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">Features</div>
          <h2 className="section-title">Everything you need. Nothing you don't.</h2>
          <p className="section-lede">Forty-five primitives, a strict token layer, and sensible defaults that respect your product's voice.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feature">
              <span className="icon-wrap"><Icon name={f.icon} size={18} /></span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  { name:'Hobby',    desc:'For solo builders and throwaway prototypes.', price:'0',  per:'/ mo', cta:'Start free',  featured:false,
    feats:['Up to 3 projects','Community Discord','Source code access','MIT license'] },
  { name:'Pro',      desc:'For shipping teams and production work.',      price:'24', per:'/ mo', cta:'Start 14-day trial', featured:true,
    feats:['Unlimited projects','Priority updates','Private templates','Figma sync','Email support','Team workspaces'] },
  { name:'Enterprise', desc:'For orgs with compliance and scale needs.',  price:'Custom', per:'', cta:'Contact sales', featured:false,
    feats:['SSO + SCIM','Dedicated CSM','SLA & audit logs','Custom contracts','On-prem deployment'] },
];

function Pricing({ onCta }) {
  return (
    <section>
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">Pricing</div>
          <h2 className="section-title">Simple, predictable pricing.</h2>
          <p className="section-lede">Start free. Upgrade when your team grows. Cancel at any time.</p>
        </div>
        <div className="pricing-grid">
          {PLANS.map(p => (
            <div key={p.name} className={cx('price', p.featured && 'featured')}>
              {p.featured && <span className="featured-flag">Most popular</span>}
              <div>
                <div className="plan-name">{p.name}</div>
                <div className="plan-desc">{p.desc}</div>
              </div>
              <div className="amount">
                {p.price === 'Custom' ? 'Custom' : <>${p.price}<span className="per">{p.per}</span></>}
              </div>
              <button className={cx('btn', p.featured ? 'btn-default' : 'btn-outline')} onClick={onCta}>{p.cta}</button>
              <ul>
                {p.feats.map(f => <li key={f}><Icon name="check" /> {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  { q:'Cubicle let our team ship an entire dashboard in a weekend. The token layer is exactly the primitive we needed.', name:'Mira Chen', role:'Head of Design, Relay' },
  { q:'It reads like production code from day one. No fighting the framework, no weird escape hatches.', name:'Jamal Okafor', role:'Staff Engineer, Humm' },
  { q:'The dark mode is the cleanest I have seen outside of system-native apps. Our ops team noticed in a day.', name:'Ana Rossi', role:'PM, Upland' },
];

function Testimonials() {
  return (
    <section className="muted-bg">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="section-title">Loved by teams shipping real work.</h2>
        </div>
        <div className="testi-grid">
          {QUOTES.map(t => (
            <div key={t.name} className="testi">
              <blockquote>"{t.q}"</blockquote>
              <div className="who">
                <span className="avatar">{t.name.split(' ').map(s=>s[0]).join('')}</span>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q:'Is Cubicle free to use?',                         a:'The Hobby tier is free for solo projects and prototypes. Pro adds private templates, Figma sync, and team support starting at $24/mo.' },
  { q:'Does it work with my existing design system?',    a:'Yes. Cubicle is token-first — override the CSS variables in colors_and_type.css and every primitive inherits your brand. No rebuild required.' },
  { q:'What frameworks do you support?',                 a:'First-party support for React 18+ with TypeScript and Tailwind v4. Framework adapters for Vue and Svelte are on the roadmap for Q3.' },
  { q:'Can I self-host or deploy on-prem?',              a:'Enterprise customers get full on-prem deployment, SSO, SCIM, and an SLA. Contact sales for a tailored plan.' },
  { q:'How is this different from shadcn/ui?',           a:'Cubicle is shadcn-adjacent — same copy-and-own philosophy — but curated tighter, with a stricter token layer and a published Storybook as the reference.' },
  { q:'Can I contribute?',                               a:'Absolutely. The repo is MIT, issues are triaged weekly, and we run a contributor Discord. Start at github.com/heysaladin/cubicle.' },
];

function FAQ() {
  const [open, setOpen] = useStateSec(0);
  return (
    <section>
      <div className="container-narrow">
        <div className="section-head center">
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Your questions, answered.</h2>
        </div>
        <div className="faq">
          {FAQS.map((f, i) => (
            <div key={i} className={cx('faq-item', open === i && 'open')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}
                <Icon name="chev" />
              </button>
              <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ onCta }) {
  return (
    <section className="cta-band muted-bg">
      <div className="container">
        <h2>Ship a considered interface.</h2>
        <p>Start with Cubicle's primitives, layer your brand on top, and get back to the part of the job that only you can do.</p>
        <div className="actions">
          <button className="btn btn-default btn-lg" onClick={onCta}>Get started <Icon name="arrow" size={14} /></button>
          <button className="btn btn-outline btn-lg">Read the docs</button>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ onSubmit }) {
  const [name, setName] = useStateSec('');
  const [email, setEmail] = useStateSec('');
  const [company, setCompany] = useStateSec('');
  const [topic, setTopic] = useStateSec('sales');
  const [msg, setMsg] = useStateSec('');
  const [sent, setSent] = useStateSec(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit({ name, email, company, topic, msg });
    setTimeout(() => { setSent(false); setName(''); setEmail(''); setCompany(''); setMsg(''); }, 2800);
  };

  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Contact</div>
          <h2 className="section-title">Get in touch.</h2>
          <p className="section-lede">Questions about pricing, enterprise rollout, or custom work? We read every note.</p>
        </div>
        <div className="contact-grid">
          <form onSubmit={submit}>
            <div className="form-row grid2">
              <div>
                <label>Name</label>
                <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Mira Chen" required />
              </div>
              <div>
                <label>Email</label>
                <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="mira@relay.dev" required />
              </div>
            </div>
            <div className="form-row">
              <label>Company</label>
              <input className="input" value={company} onChange={e=>setCompany(e.target.value)} placeholder="Relay" />
            </div>
            <div className="form-row">
              <label>What's this about?</label>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {[['sales','Sales'],['support','Support'],['press','Press'],['other','Other']].map(([v,l]) => (
                  <button type="button" key={v} className={cx('btn','btn-sm', topic===v?'btn-default':'btn-outline')} onClick={()=>setTopic(v)}>{l}</button>
                ))}
              </div>
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea className="textarea" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Tell us about your team and what you're building." required />
              <span className="hint">We typically reply within 1 business day.</span>
            </div>
            <button type="submit" className="btn btn-default">{sent ? 'Thanks — we\'ll be in touch' : 'Send message'} {!sent && <Icon name="arrow" size={14} />}</button>
          </form>

          <div className="contact-info">
            <h3>Other ways to reach us</h3>
            <p>Prefer async? Pick whichever fits.</p>
            <div className="ci-row"><Icon name="mail" /> hello@cubicle.dev</div>
            <div className="ci-row"><Icon name="phone" /> +1 (415) 555-0134</div>
            <div className="ci-row"><Icon name="pin" /> 2nd Ave, San Francisco, CA</div>
            <div className="ci-row"><Icon name="github" /> github.com/heysaladin/cubicle</div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Hero, LogosRow, Features, Pricing, Testimonials, FAQ, CtaBand, ContactSection,
  FEATURES, PLANS, QUOTES, FAQS,
});
