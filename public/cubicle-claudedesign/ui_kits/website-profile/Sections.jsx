// Bestra Website UI Kit — page sections.
// Covers: Home, About, Values, Solutions, SolutionDetail, Team, Pricing, Testimonials, FAQ, Contact, CtaBand.

const { useState: useStateSec } = React;

// ─── HOME ────────────────────────────────────────────────────────────────────

function HomeHero({ onCta }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div>
            <span className="hero eyebrow">
              <span style={{width:6,height:6,borderRadius:'50%',background:'var(--green-600)'}} />
              Strategy · Execution · Growth
            </span>
            <h1>Business, the bestra way</h1>
            <p className="sub">Bestra streamlines operations and drives business growth. We help teams stay aligned, move with confidence, and build momentum that lasts.</p>
            <div className="actions">
              <button className="btn btn-default btn-lg" onClick={onCta}>Discover our solutions <Icon name="arrow" size={14} /></button>
              <button className="btn btn-outline btn-lg" onClick={onCta}>More about Bestra</button>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-stat">
              <div className="stat-val">849</div>
              <div className="stat-label">New customers (last 30 days)</div>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <div className="stat-val" style={{color:'var(--green-600)'}}>+185%</div>
              <div className="stat-label">Growth vs. previous period</div>
              <div className="stat-note">The increase shows alignment of product value and client needs.</div>
            </div>
            <div className="hero-divider" />
            <div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                <span style={{font:'500 13px/1 var(--font-sans)'}}>Current goal</span>
                <span style={{font:'700 13px/1 var(--font-sans)'}}>80%</span>
              </div>
              <div className="progress-bar"><div className="fill" style={{width:'80%'}} /></div>
              <div className="progress-label" style={{marginTop:8}}>
                <span>Progress toward target</span>
                <span>On track</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosRow() {
  const logos = ['Accenture','Deloitte','McKinsey','KPMG','Bain','BCG'];
  return (
    <section style={{padding:'32px 0 48px',borderBottom:'1px solid var(--border)'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:24,font:'500 12px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'1.5px',color:'var(--muted-foreground)'}}>
          Trusted by large businesses
        </div>
        <div className="logos">
          {logos.map(l => <span key={l} className="logo-txt">{l}</span>)}
        </div>
      </div>
    </section>
  );
}

function WhyBestra() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Why Bestra</div>
          <h2 className="section-title">Because good intentions aren't enough</h2>
        </div>
        <div className="why-grid">
          <div className="why-col">
            <h3>Progress slows without clarity</h3>
            <p>Businesses start with ambition, focus, and clear goals—but day-to-day pressure, complexity, and constant change get in the way. When priorities compete and decisions stack up, teams lose consistency. Growth becomes reactive instead of intentional, and opportunities are missed before they're recognized.</p>
          </div>
          <div className="why-col">
            <h3>We built Bestra to restore focus</h3>
            <p>Bestra helps businesses turn strategy into steady progress. By simplifying complexity and creating clear direction, we help teams stay aligned, move with confidence, and build momentum that lasts. Our approach is simple: understand the challenge, define what truly matters, and build solutions that are practical, scalable, and aligned with long-term goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeHelp() {
  const cards = [
    { icon:'$', label:'Challenge', title:'Costly inefficiencies', desc:'Productivity suffers due to costly inefficiencies and delayed decisions.' },
    { icon:'2×', label:'Opportunity', title:'Boost performance', desc:'Boost performance by synchronizing strategy, execution, and insights.' },
    { icon:'100%', label:'Impact', title:'Informed decisions', desc:'Transparency and control enable informed decisions and growth.' },
  ];
  return (
    <section className="dark-bg">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">How we can help</div>
          <h2 className="section-title">Harmonizing strategy, execution, and insight</h2>
        </div>
        <div className="stat-cards">
          {cards.map(c => (
            <div key={c.label} className="stat-card">
              <div className="sc-icon">{c.icon}</div>
              <div style={{font:'500 11px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'1px',opacity:.6}}>{c.label}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeBlogPreview({ onNav }) {
  const previews = [
    { cat:'Strategic Planning', title:'How to build a clear business strategy that actually drives results.', excerpt:'A practical framework for turning high-level vision into prioritized, actionable steps your team will follow.' },
    { cat:'Operations & Efficiency', title:'Simple ways to reduce complexity and improve day-to-day performance.', excerpt:"Eliminating friction compounds over time. Here's where to start." },
    { cat:'Growth & Scaling', title:'What growing businesses must fix before scaling further.', excerpt:'Scaling a broken system just creates bigger problems. Clarity first, growth second.' },
  ];
  return (
    <section>
      <div className="container">
        <div className="section-head" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',maxWidth:'100%'}}>
          <div>
            <div className="section-eyebrow">Resources</div>
            <h2 className="section-title">Practical guides to help your business grow</h2>
          </div>
          <button className="btn btn-outline btn-sm" onClick={() => onNav('blog')} style={{flexShrink:0}}>All resources <Icon name="arrow" size={13} /></button>
        </div>
        <div className="blog-preview-grid">
          {previews.map(p => (
            <div key={p.cat} className="bp-card" onClick={() => onNav('blog')}>
              <div className="thumb"><span className="thumb-label">{p.cat}</span></div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBand({ onNav }) {
  return (
    <section className="muted-bg">
      <div className="container">
        <div className="about-band">
          <div>
            <div className="section-eyebrow" style={{marginBottom:12}}>About Bestra</div>
            <h2 style={{font:'600 28px/34px var(--font-sans)',letterSpacing:'-0.8px',margin:'0 0 8px'}}>
              A business-focused team dedicated to helping companies grow with clarity, confidence, and purpose
            </h2>
            <p>We work at the intersection of strategy, execution, and insight—supporting organizations as they navigate complexity and turn ideas into measurable results.</p>
          </div>
          <button className="btn btn-default btn-lg" onClick={() => onNav('about')}>Discover more <Icon name="arrow" size={14} /></button>
        </div>
      </div>
    </section>
  );
}

function HomeSolutions({ onNav }) {
  const services = [
    { title:'Strategic Direction', desc:'We guide businesses in setting priorities and establishing a long-term vision.' },
    { title:'Operational Execution', desc:'Our team actively transforms strategic plans into tangible results.' },
    { title:'Growth Optimization', desc:'We continuously analyze performance to identify opportunities for improvement.' },
  ];
  return (
    <section>
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">Our services</div>
          <h2 className="section-title">Our services are built around clarity, execution, and measurable impact</h2>
        </div>
        <div className="solutions-grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
          {services.map((s, i) => (
            <div key={s.title} className="solution-card" onClick={() => onNav('solutions')}>
              <div className="sc-num">0{i+1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="sc-link">Learn more <Icon name="arrow" size={13} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────

function AboutPage({ onNav }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">About us</div>
          <h1>Solving problems with innovations.</h1>
          <p>A team of skilled consultants delivering detailed analyses, strategic guidance, and impactful business solutions.</p>
          <div style={{marginTop:24}}>
            <button className="btn btn-default btn-lg" onClick={() => onNav('solutions')}>Discover our solutions <Icon name="arrow" size={14} /></button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'center'}}>
            <div>
              <div className="section-eyebrow" style={{marginBottom:16}}>Who we are</div>
              <h2 className="section-title">Dedicated to helping companies grow with clarity, confidence, and purpose</h2>
            </div>
            <div>
              <p style={{font:'400 17px/28px var(--font-sans)',color:'var(--muted-foreground)',margin:'0 0 16px'}}>We work at the intersection of strategy, execution, and insight—supporting organizations as they navigate complexity and turn ideas into measurable results.</p>
              <p style={{font:'400 17px/28px var(--font-sans)',color:'var(--muted-foreground)',margin:0}}>Our approach is simple: understand the challenge, define what truly matters, and build solutions that are practical, scalable, and aligned with long-term goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-bg">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">Our team</div>
            <h2 className="section-title">Seasoned professionals, diverse expertise</h2>
            <p className="section-lede">Each member brings clear perspective and a practical approach to complex business challenges.</p>
          </div>
          <div className="team-grid">
            {TEAM.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-avatar">{m.name.split(' ').map(s=>s[0]).join('')}</div>
                <div>
                  <h3>{m.name}</h3>
                  <div className="role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:32,textAlign:'center'}}>
            <button className="btn btn-outline" onClick={() => onNav('team')}>View full team <Icon name="arrow" size={13} /></button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head center">
            <div className="section-eyebrow">Case studies</div>
            <h2 className="section-title">Work that speaks for itself</h2>
          </div>
          <div className="case-grid" style={{gridTemplateColumns:'repeat(2,1fr)'}}>
            {CASES.slice(0,4).map(c => (
              <div key={c.slug} className="case-card" onClick={() => onNav('case-studies')}>
                <div className="case-meta">
                  <span className="case-cat">{c.cat}</span>
                  <span className="case-date">{c.date}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="case-link">View case study <Icon name="arrow" size={13} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── VALUES ──────────────────────────────────────────────────────────────────

const VALUES = [
  { title:'Integrity first', desc:'We hold ourselves to the highest standard—transparent, honest, and accountable in every engagement.' },
  { title:'Clarity over complexity', desc:'We strip away noise to reveal what truly matters, making the path forward obvious and actionable.' },
  { title:'Practical execution', desc:'Insight without action is wasted. We design solutions that translate directly into measurable results.' },
  { title:'Client partnership', desc:'We work alongside our clients, not just for them—their success is our shared measure of progress.' },
  { title:'Continuous learning', desc:'Markets shift and organizations evolve. We stay curious and adapt so our clients gain lasting advantage.' },
  { title:'Measurable impact', desc:"Every engagement is tied to clear outcomes. If it can't be measured, it can't be improved." },
];

function ValuesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Our values</div>
          <h1>Integrity and innovation at the core of our work</h1>
          <p>The principles that shape how we work, how we think, and how we measure success.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className="value-item">
                <div className="val-num">0{i+1}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowWeHelp />
    </>
  );
}

// ─── SOLUTIONS ───────────────────────────────────────────────────────────────

const ALL_SOLUTIONS = [
  { slug:'strategic-direction',  num:'01', title:'Strategic Direction',   icon:'target',    desc:'We guide businesses in setting priorities and establishing a long-term vision that creates competitive advantage.' },
  { slug:'operational-execution',num:'02', title:'Operational Execution', icon:'settings',  desc:'Our team actively transforms strategic plans into tangible results through disciplined, hands-on delivery.' },
  { slug:'growth-optimization',  num:'03', title:'Growth Optimization',   icon:'trending',  desc:'We continuously analyze performance to identify opportunities for improvement and sustained growth.' },
  { slug:'change-management',    num:'04', title:'Change Management',     icon:'layers',    desc:'Facilitating transformation for leaders and teams with strategic direction and structured support.' },
  { slug:'process-improvement',  num:'05', title:'Process Improvement',   icon:'briefcase', desc:'Streamlining processes by identifying inefficiencies for consistent, high-quality execution.' },
  { slug:'leadership-advisory',  num:'06', title:'Leadership Advisory',   icon:'users',     desc:'Delivering expert guidance to executives managing complex growth and change challenges.' },
];

function SolutionsPage({ onDetail }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Solutions</div>
          <h1>Practical direction for complex business</h1>
          <p>We guide organizations through complexity, aligning priorities to achieve results.</p>
          <div style={{marginTop:24}}>
            <button className="btn btn-outline btn-lg">More about Bestra</button>
          </div>
        </div>
      </section>

      <HowWeHelp />

      <section>
        <div className="container">
          <div className="section-head center">
            <div className="section-eyebrow">What we offer</div>
            <h2 className="section-title">Because good intentions aren't enough</h2>
            <p className="section-lede">Businesses start with ambition, focus, and clear goals—but day-to-day pressure, complexity, and constant change get in the way.</p>
          </div>
          <div className="solutions-grid">
            {ALL_SOLUTIONS.map(s => (
              <div key={s.slug} className="solution-card" onClick={() => onDetail(s.slug)}>
                <div className="sc-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="sc-link">Learn more <Icon name="arrow" size={13} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SolutionDetailPage({ slug, onBack, onContact }) {
  const sol = ALL_SOLUTIONS.find(s => s.slug === slug) || ALL_SOLUTIONS[5];
  return (
    <>
      <section className="sol-detail-hero">
        <div className="container">
          <button className="btn btn-ghost btn-sm" onClick={onBack} style={{marginBottom:16,marginLeft:-12}}>← All solutions</button>
          <div className="section-eyebrow" style={{marginBottom:12}}>{sol.num} — {sol.title}</div>
          <h1 style={{font:'600 48px/52px var(--font-sans)',letterSpacing:'-1.8px',margin:'0 0 20px',maxWidth:700,textWrap:'balance'}}>
            Supplying executives with professional guidance to successfully manage growth and transformation.
          </h1>
          <p style={{font:'400 18px/28px var(--font-sans)',color:'var(--muted-foreground)',maxWidth:580,margin:0}}>
            A structured framework addressing complex organizational challenges through clear thinking and practical insights, customized to each client's unique context.
          </p>
          <div style={{marginTop:28}}>
            <button className="btn btn-default btn-lg" onClick={onContact}>Discuss your business <Icon name="arrow" size={14} /></button>
          </div>
        </div>
      </section>

      <section className="sol-detail-body">
        <div className="container">
          <div className="sol-detail-grid">
            <div>
              <h2 style={{font:'600 28px/34px var(--font-sans)',letterSpacing:'-0.8px',margin:'0 0 32px'}}>Our approach</h2>
              <div className="sol-process">
                {[
                  { n:'01', title:'Assess the landscape', body:'Identify core challenges and map how decisions, teams, and processes interact.' },
                  { n:'02', title:'Define strategic priorities', body:'Clarify what matters most and establish a shared direction leadership can act on.' },
                  { n:'03', title:'Translate to action', body:'Convert priorities into clear, achievable actions with owners and timelines.' },
                  { n:'04', title:'Implement and refine', body:'Embed the framework across operations and iterate based on real outcomes.' },
                ].map(step => (
                  <div key={step.n} className="sol-step">
                    <div className="step-num">{step.n}</div>
                    <div className="step-body">
                      <h4>{step.title}</h4>
                      <p>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="sol-outcomes">
                <h4>What's included</h4>
                {[
                  'Strategic and operational diagnostics',
                  'Alignment of business goals with leadership priorities',
                  'Process and performance refinement',
                  'Market and competitive positioning analysis',
                  'Ongoing advisory support for decision-making',
                ].map(item => (
                  <div key={item} className="sol-outcome-item">
                    <Icon name="check" size={15} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="sol-outcomes" style={{marginTop:16}}>
                <h4>Key outcomes</h4>
                {[
                  'Shared understanding of direction and priorities',
                  'Clear execution frameworks with accountability',
                  'Stronger leadership alignment',
                  'Data-informed decision-making',
                  'Scalable growth structures',
                ].map(item => (
                  <div key={item} className="sol-outcome-item">
                    <Icon name="check" size={15} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── TEAM ────────────────────────────────────────────────────────────────────

const TEAM = [
  { name:'Alexander Hayes', role:'Chief Executive Officer' },
  { name:'Daniel Wright',   role:'Managing Partner' },
  { name:'Natalie Brooks',  role:'Organizational Design Consultant' },
  { name:'Isabella Moore',  role:'Consulting Associate' },
  { name:'Ethan Collins',   role:'Data & Insights Lead' },
  { name:'Laura Bennett',   role:'Client Engagement Manager' },
];

function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Our team</div>
          <h1>The people behind the work</h1>
          <p>Seasoned professionals bringing diverse expertise, clear perspective, and a practical approach to complex business challenges.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="team-grid">
            {TEAM.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-avatar" style={{width:72,height:72,fontSize:24,borderRadius:12}}>
                  {m.name.split(' ').map(s=>s[0]).join('')}
                </div>
                <div>
                  <h3>{m.name}</h3>
                  <div className="role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────

const PLANS = [
  { name:'Foundation', desc:'Entry-level engagement to gauge your current status and define next steps.', price:'900', per:'one-time', featured:false,
    feats:['Business assessment','Strategic clarity session','Key focus areas','Next-step roadmap'] },
  { name:'Advisory', desc:'Consistent strategic support for teams making high-stakes decisions monthly.', price:'1,800', per:'/ mo', featured:true,
    feats:['Regular strategy sessions','Decision-making support','Priority alignment','Progress tracking','Email support'] },
  { name:'Momentum', desc:'Advanced collaboration optimizing strategy, execution, and measurable success.', price:'3,200', per:'/ mo', featured:false,
    feats:['Strategy & execution','Process optimization','Leadership alignment','Performance improvement','Dedicated consultant','Monthly reporting'] },
];

function PricingPage({ onCta }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Pricing</div>
          <h1>Strategic collaboration frameworks that deliver results</h1>
          <p>Clear communication, measurable development, and demonstrable achievements. Choose the tier that fits your stage.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="pricing-grid">
            {PLANS.map(p => (
              <div key={p.name} className={cx('price', p.featured && 'featured')}>
                {p.featured && <span className="featured-flag">Most popular</span>}
                <div>
                  <div className="plan-name">{p.name}</div>
                  <div className="plan-desc">{p.desc}</div>
                </div>
                <div className="amount">
                  ${p.price}<span className="per">{p.per}</span>
                </div>
                <button className={cx('btn', p.featured ? 'btn-default' : 'btn-outline')} onClick={onCta}>
                  Get started <Icon name="arrow" size={13} />
                </button>
                <ul>
                  {p.feats.map(f => <li key={f}><Icon name="check" /> {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{marginTop:32,textAlign:'center',font:'400 14px/1 var(--font-sans)',color:'var(--muted-foreground)'}}>
            All plans direct to a conversation with our team. No automatic billing.
          </div>
        </div>
      </section>
    </>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

const QUOTES = [
  { n:'01', title:'Clear strategy from day one',       q:'Partnering with Bestra illuminated the path we needed. Their organized approach allowed us to set priorities, make rapid decisions, and proceed with certainty.', name:'Daniel', role:'Head of Operations, Growth Company' },
  { n:'02', title:'More than just a service provider', q:'Bestra worked closely with our team at every stage. Their hands-on support and practical thinking made a real difference in how we execute and measure results.', name:'Mark', role:'Managing Director, Mid-Market Business' },
  { n:'03', title:'Significant boost in performance',  q:'The improvements we saw were tangible. From streamlined processes to clearer reporting, Bestra helped us build a stronger, more scalable foundation.', name:'Sofia', role:'CEO, Technology Company' },
  { n:'04', title:'Focus, alignment, and momentum',    q:'Bestra clarified priorities and united stakeholders around a shared vision, resulting in faster execution and better outcomes across the board.', name:'Laura', role:'COO, Growth Company' },
  { n:'05', title:'Real impact, not just advice',      q:'The team partnered actively rather than simply advising, delivering structured thinking and measurable progress we could point to every quarter.', name:'James', role:'Founder, SaaS Company' },
  { n:'06', title:'A clear, effective approach',       q:'Working with Bestra provided a framework for action, enabling faster movement while avoiding the costly missteps that had slowed us before.', name:'Michael', role:'Managing Director, Consulting Firm' },
];

function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Testimonials</div>
          <h1>What our clients say about working with us</h1>
          <p>Partnerships built on trust, structure, and results that our clients can point to.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="testi-grid">
            {QUOTES.map(t => (
              <div key={t.n} className="testi">
                <div className="testi-num">{t.n}</div>
                <div>
                  <div className="testi-title">{t.title}</div>
                  <blockquote>"{t.q}"</blockquote>
                </div>
                <div className="who">
                  <span className="avatar">{t.name[0]}</span>
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
    </>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQS = [
  { q:'What types of companies do you work with?',          a:'Growing businesses, scale-ups, and established companies looking to clarify strategy, improve performance, or navigate complex change.' },
  { q:'What challenges do you typically help solve?',        a:'Strategic direction, operational efficiency, organizational alignment, and decision-making in high-impact situations.' },
  { q:'How does your consulting process work?',              a:'We begin with a structured assessment, define clear priorities, and translate insights into practical, actionable steps tailored to your business.' },
  { q:'How do you tailor your approach to each client?',     a:'Every engagement is customized based on goals, industry, and team structure using adapted frameworks and tools.' },
  { q:'Do you work with leadership teams directly?',         a:'Yes, collaborating closely with founders, executives, and senior leaders for alignment and effective decision-making.' },
  { q:'Who gains the most from partnering with Bestra?',     a:'Organizations facing growth, change, or strategic uncertainty benefit most — especially teams that value structured thinking and decisive execution.' },
  { q:'When is the right time to involve a consultant?',     a:'When decisions become complex, priorities compete, or internal alignment slows progress, external perspective helps.' },
  { q:'How do we get started?',                              a:'Schedule an initial conversation to discuss your challenges, goals, and approach fit.' },
  { q:'What criteria are used to measure success?',          a:'Success is defined by progress against agreed objectives, improved decision quality, and tangible outcomes across the organization.' },
  { q:'What makes your consulting approach different?',      a:'We combine structured thinking with practical execution, focusing on clarity, speed, and measurable business impact.' },
  { q:'Where does consulting create the most impact?',       a:'The strongest impact comes from clearer priorities, aligned leadership, and faster, more confident decision-making.' },
];

function FaqPage() {
  const [open, setOpen] = useStateSec(0);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">FAQ</div>
          <h1>Your questions, answered.</h1>
          <p>Everything you need to know before starting a conversation with our team.</p>
        </div>
      </section>
      <section>
        <div className="container-narrow">
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
    </>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function ContactPage() {
  const [name, setName] = useStateSec('');
  const [email, setEmail] = useStateSec('');
  const [company, setCompany] = useStateSec('');
  const [msg, setMsg] = useStateSec('');
  const [sent, setSent] = useStateSec(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setName(''); setEmail(''); setCompany(''); setMsg(''); }, 2800);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Contact us</div>
          <h1>Let's start a conversation</h1>
          <p>Reach out to start a conversation about how we can support your strategy, operations, and growth.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="contact-grid">
            <form onSubmit={submit}>
              <div className="form-row grid2">
                <div>
                  <label>Name</label>
                  <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Alexander Hayes" required />
                </div>
                <div>
                  <label>Email</label>
                  <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="alex@company.com" required />
                </div>
              </div>
              <div className="form-row">
                <label>Company</label>
                <input className="input" value={company} onChange={e=>setCompany(e.target.value)} placeholder="Your company name" />
              </div>
              <div className="form-row">
                <label>Message</label>
                <textarea className="textarea" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Tell us about your business challenges and what you're looking to achieve." required />
                <span className="hint">We are open Monday through Friday, 9 am to 6 pm.</span>
              </div>
              <button type="submit" className="btn btn-default">
                {sent ? 'Thank you — we\'ll be in touch' : <><span>Send message</span><Icon name="arrow" size={14} /></>}
              </button>
            </form>

            <div className="contact-info">
              <h3>Other ways to reach us</h3>
              <p>Prefer a direct line? We read everything.</p>
              <div className="ci-row"><Icon name="mail" /> info@example.com</div>
              <div className="ci-row"><Icon name="phone" /> +1 (234) 567-890</div>
              <div className="ci-row"><Icon name="pin" /> 499-433 N Columbia St, Greenup, IL</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="container">
          <div className="section-head center">
            <div className="section-eyebrow">Testimonials</div>
            <h2 className="section-title">What our clients say about working with us</h2>
          </div>
          <div className="testi-grid">
            {QUOTES.slice(0,3).map(t => (
              <div key={t.n} className="testi">
                <div className="testi-num">{t.n}</div>
                <div>
                  <div className="testi-title">{t.title}</div>
                  <blockquote>"{t.q}"</blockquote>
                </div>
                <div className="who">
                  <span className="avatar">{t.name[0]}</span>
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
    </>
  );
}

// ─── CTA BAND ────────────────────────────────────────────────────────────────

function CtaBand({ onCta }) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-band-inner">
          <h2>Discuss your business and aspirations with us.</h2>
          <p>Ready to get started? Let's grow your business together with clarity and purpose.</p>
          <div className="actions">
            <button className="btn btn-default btn-lg" onClick={onCta}>Let's grow your business <Icon name="arrow" size={14} /></button>
            <button className="btn btn-outline btn-lg" onClick={onCta}>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── HOME TESTIMONIALS ───────────────────────────────────────────────────────

function HomeTestimonials({ onNav }) {
  return (
    <section className="muted-bg">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="section-title">What our clients say about working with us</h2>
        </div>
        <div className="testi-grid">
          {QUOTES.slice(0,3).map(t => (
            <div key={t.n} className="testi">
              <div className="testi-num">{t.n}</div>
              <div>
                <div className="testi-title">{t.title}</div>
                <blockquote>"{t.q}"</blockquote>
              </div>
              <div className="who">
                <span className="avatar">{t.name[0]}</span>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:32,textAlign:'center'}}>
          <button className="btn btn-outline" onClick={() => onNav('testimonials')}>All testimonials <Icon name="arrow" size={13} /></button>
        </div>
      </div>
    </section>
  );
}

// ─── EXPORTS ─────────────────────────────────────────────────────────────────

const CASES = [
  { slug:'change-enablement',    cat:'Organizational', date:'Sep 10, 2025', title:'Change Enablement',    desc:'Aligning teams, roles, and decision-making structures to support strategic priorities.' },
  { slug:'strategic-realignment',cat:'Strategy',       date:'Feb 17, 2026', title:'Strategic Realignment',desc:'Assisted a growing company in defining goals and improving decision-making processes.' },
  { slug:'market-expansion',     cat:'Growth',         date:'Nov 26, 2025', title:'Market Expansion',     desc:'Supported a client in market entry through strategic planning and risk management.' },
  { slug:'performance-boost',    cat:'Operations',     date:'Mar 3, 2026',  title:'Performance Boost',    desc:'Boosted productivity through targeted actions to resolve operational inefficiencies.' },
  { slug:'growth-structure',     cat:'Scaling',        date:'Mar 11, 2026', title:'Growth Structure',     desc:'Supporting sustainable business growth through clear focus and measurable progress.' },
  { slug:'decision-clarity',     cat:'Leadership',     date:'Dec 9, 2025',  title:'Decision Clarity',     desc:'Bringing structure to complex decisions, helping leaders move forward with confidence.' },
];

Object.assign(window, {
  HomeHero, LogosRow, WhyBestra, HowWeHelp, HomeBlogPreview, AboutBand, HomeSolutions, HomeTestimonials,
  AboutPage, ValuesPage, SolutionsPage, SolutionDetailPage,
  TeamPage, PricingPage, TestimonialsPage, FaqPage, ContactPage,
  CtaBand,
  TEAM, PLANS, QUOTES, FAQS, VALUES, ALL_SOLUTIONS, CASES,
});
