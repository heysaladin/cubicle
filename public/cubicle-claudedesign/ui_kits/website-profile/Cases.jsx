// Bestra Website UI Kit — case studies list + detail.

function CasesPage({ onDetail }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Case studies</div>
          <h1>Work that speaks for itself</h1>
          <p>Real engagements, measurable outcomes, and the thinking behind every result.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{display:'flex',gap:40,marginBottom:32,borderBottom:'1px solid var(--border)',paddingBottom:16,font:'500 12px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'1px',color:'var(--muted-foreground)'}}>
            <span style={{color:'var(--foreground)'}}>All</span>
            <span style={{cursor:'pointer'}}>Strategy</span>
            <span style={{cursor:'pointer'}}>Operations</span>
            <span style={{cursor:'pointer'}}>Growth</span>
            <span style={{cursor:'pointer'}}>Leadership</span>
          </div>
          <div className="case-grid">
            {CASES.map((c, i) => (
              <div key={c.slug} className="case-card" onClick={() => onDetail(c.slug)}>
                <div className="case-meta">
                  <span className="case-cat">{c.cat}</span>
                  <span className="case-date">{c.date}</span>
                </div>
                <div style={{font:'700 28px/1 var(--font-sans)',letterSpacing:'-0.8px',color:'var(--muted-foreground)',opacity:.3}}>0{i+1}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="case-link">View case study <Icon name="arrow" size={13} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="container">
          <div className="about-band">
            <div>
              <div className="section-eyebrow" style={{marginBottom:12}}>849 new customers</div>
              <h2 style={{font:'600 28px/34px var(--font-sans)',letterSpacing:'-0.8px',margin:'0 0 8px'}}>+185% growth vs. previous period</h2>
              <p style={{font:'400 16px/26px var(--font-sans)',color:'var(--muted-foreground)',margin:0}}>The increase in customers shows alignment of product value and client needs.</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:16,minWidth:200}}>
              {[['849','New customers (30d)'],['185%','Growth'],['100%','Client satisfaction']].map(([v,l]) => (
                <div key={l} style={{textAlign:'right'}}>
                  <div style={{font:'700 28px/1 var(--font-sans)',letterSpacing:'-1px'}}>{v}</div>
                  <div style={{font:'400 12px/1 var(--font-sans)',color:'var(--muted-foreground)',marginTop:4}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const CASE_DETAIL_DATA = {
  'decision-clarity': {
    cat: 'Leadership',
    date: 'December 9, 2025',
    focus: 'Strategic Advisory',
    client: 'Founder-led business',
    title: 'Decision Clarity',
    lede: 'Bringing structure to complex decisions and priorities, helping leaders move forward with confidence.',
    challenge: {
      intro: 'The organization faced difficulties in a fast-paced environment where decisions needed rapid execution. The fundamental issue was insufficient clarity in how choices were made—not a shortage of information.',
      points: [
        'Unclear ownership of decisions across teams',
        'Gaps between leadership strategy and operational reality',
        'Bottlenecks in decision velocity',
        'Informal processes lacking consistency',
        'Poor transparency around decision rationale',
      ],
    },
    approach: {
      intro: 'The intervention centered on establishing systematic decision-making structures while keeping leadership engaged throughout to ensure the framework remained practical and commercially relevant.',
      points: [
        'Creating explicit decision ownership and accountability lines',
        'Connecting strategic priorities to day-to-day operations',
        'Designing replicable decision frameworks and protocols',
        'Building visible processes for documenting decisions',
        'Creating review mechanisms to strengthen consistency',
      ],
    },
    outcome: {
      intro: 'Implementation produced meaningful organizational improvements that demonstrated how structural clarity transforms functioning by minimizing ambiguity and coordinating teams toward unified objectives.',
      points: [
        'Clear ownership and accountability for decisions',
        'Accelerated and more reliable decision processes',
        'Better synchronization between strategy and implementation',
        'Enhanced visibility across departments',
        'Sustainable frameworks enabling future scaling',
      ],
    },
  },
};

function CaseDetailPage({ slug, onBack }) {
  const data = CASE_DETAIL_DATA[slug] || CASE_DETAIL_DATA['decision-clarity'];
  const cs = CASES.find(c => c.slug === slug) || CASES[5];
  const detail = data;

  return (
    <section>
      <div className="container">
        <div className="case-detail">
          <nav style={{display:'flex',alignItems:'center',gap:6,font:'400 13px/1 var(--font-sans)',color:'var(--muted-foreground)',marginBottom:20,flexWrap:'wrap'}}>
            <span style={{cursor:'pointer',transition:'color .12s'}} onMouseOver={e=>e.target.style.color='var(--foreground)'} onMouseOut={e=>e.target.style.color='var(--muted-foreground)'} onClick={onBack}>Case studies</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--border)'}}><path d="m9 18 6-6-6-6"/></svg>
            <span style={{color:'var(--muted-foreground)'}}>{detail.cat}</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--border)'}}><path d="m9 18 6-6-6-6"/></svg>
            <span style={{color:'var(--foreground)'}}>{detail.title && detail.title.length > 36 ? detail.title.slice(0,36)+'…' : detail.title}</span>
          </nav>
          <div className="meta">{detail.cat} · {detail.date} · {detail.focus}</div>
          <h1>{detail.title}</h1>
          <p className="lede">{detail.lede}</p>

          <div style={{display:'flex',gap:32,padding:'20px 0',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',margin:'0 0 40px'}}>
            {[['Client type', detail.client],['Focus area', detail.focus],['Date', detail.date]].map(([l,v]) => (
              <div key={l}>
                <div style={{font:'500 11px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'1px',color:'var(--muted-foreground)',marginBottom:6}}>{l}</div>
                <div style={{font:'500 14px/1 var(--font-sans)'}}>{v}</div>
              </div>
            ))}
          </div>

          <h2>The Challenge</h2>
          <p>{detail.challenge.intro}</p>
          <ul>{detail.challenge.points.map(p => <li key={p}>{p}</li>)}</ul>

          <h2>The Approach</h2>
          <p>{detail.approach.intro}</p>
          <ul>{detail.approach.points.map(p => <li key={p}>{p}</li>)}</ul>

          <h2>The Outcome</h2>
          <p>{detail.outcome.intro}</p>
          <ul>{detail.outcome.points.map(p => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CasesPage, CaseDetailPage });
