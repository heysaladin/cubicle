// Cubicle Website UI Kit — blog list + detail.

const POSTS = [
  { slug:'tokens-first', cat:'Engineering', date:'Feb 18, 2026', read:'6 min read', title:'Why we rebuilt on a tokens-first architecture',
    excerpt:'Most component libraries bolt theming on at the end. We started there instead — and it changed how the whole system behaves.',
    author:'Mira Chen', role:'Head of Design' },
  { slug:'radix-reasoning', cat:'Engineering', date:'Feb 04, 2026', read:'9 min read', title:'Notes on building with Radix primitives in 2026',
    excerpt:'The case for unstyled primitives has never been stronger. A tour through our current stack and what we would change.',
    author:'Jamal Okafor', role:'Staff Engineer' },
  { slug:'dark-mode-details', cat:'Design',   date:'Jan 22, 2026', read:'4 min read', title:'Seven details that make a good dark mode',
    excerpt:'From backdrop opacity to focus ring contrast — the small calls that separate dark-mode-as-afterthought from dark-mode-as-default.',
    author:'Ana Rossi', role:'Product Manager' },
  { slug:'release-1-4', cat:'Changelog',      date:'Jan 14, 2026', read:'3 min read', title:'Cubicle 1.4: sidebar, toasts, and a sharper focus ring',
    excerpt:'What shipped this month, what is next, and a few small papercuts we quietly fixed along the way.',
    author:'Mira Chen', role:'Head of Design' },
  { slug:'design-brief',  cat:'Design',       date:'Dec 30, 2025', read:'7 min read', title:'Writing a design brief a team will actually read',
    excerpt:'Templates, lengths, and the one question that will save you a week of rework.',
    author:'Ana Rossi', role:'Product Manager' },
  { slug:'shipping-ship', cat:'Culture',      date:'Dec 12, 2025', read:'5 min read', title:'On shipping: a small essay',
    excerpt:'Shipping is a skill. Here is how we teach it to new hires — and how we keep practicing ourselves.',
    author:'Jamal Okafor', role:'Staff Engineer' },
];

function BlogList({ onOpen }) {
  const { useState: useSt } = React;
  const PER_PAGE = 4;
  const [page, setPage] = useSt(1);
  const total = Math.ceil(POSTS.length / PER_PAGE);
  const shown = POSTS.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const chevL = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
  const chevR = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Blog</div>
          <h2 className="section-title">Notes from the team.</h2>
          <p className="section-lede">Essays on design systems, shipping practice, and the occasional changelog entry worth reading.</p>
        </div>
        <div className="blog-grid">
          {shown.map(p => (
            <article key={p.slug} className="post" onClick={() => onOpen(p.slug)}>
              <div className="thumb">{p.cat}</div>
              <div className="meta">{p.date} · {p.read}</div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
        <div className="blog-pagination">
          <button className="pg-btn" disabled={page<=1} onClick={()=>setPage(p=>p-1)}>{chevL}</button>
          {Array.from({length:total},(_,i)=>i+1).map(p=>(
            <button key={p} className={cx('pg-btn', page===p&&'active')} onClick={()=>setPage(p)}>{p}</button>
          ))}
          <button className="pg-btn" disabled={page>=total} onClick={()=>setPage(p=>p+1)}>{chevR}</button>
        </div>
      </div>
    </section>
  );
}

function BlogDetail({ slug, onBack }) {
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];
  const chevR = <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline-block',verticalAlign:'middle'}}><path d="m9 18 6-6-6-6"/></svg>;
  return (
    <section>
      <div className="container">
        <div className="article">
          <nav className="article-bc">
            <span className="bc-link" onClick={onBack}>Blog</span>
            <span className="bc-sep">{chevR}</span>
            <span className="bc-cat">{post.cat}</span>
            <span className="bc-sep">{chevR}</span>
            <span className="bc-cur">{post.title.length > 36 ? post.title.slice(0,36)+'…' : post.title}</span>
          </nav>
          <div className="meta">{post.cat} · {post.date} · {post.read}</div>
          <h1>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>

          <div className="author">
            <span className="avatar">{post.author.split(' ').map(s=>s[0]).join('')}</span>
            <div>
              <div className="name">{post.author}</div>
              <div className="role">{post.role}</div>
            </div>
          </div>

          <p>The first version of Cubicle had hard-coded colors. Every component referenced neutral-900, neutral-200, and red-600 directly, and for six months that worked fine. It worked fine because our product used Cubicle's defaults verbatim — we were the only consumer, and the defaults were our brand.</p>
          <h2>Then the second consumer arrived</h2>
          <p>When a second team picked up the kit, the contract broke. Their brand had a different gray ramp, a warmer accent, and a stricter accessibility bar. The options were to fork the kit, to parameterize every component, or to rebuild on a token layer. We chose the token layer.</p>
          <p>A token is a promise: "this color is the background of a card" is a promise we can honor across themes, across brands, across light and dark. A raw hex code is not a promise; it is a fact about one moment in the design.</p>
          <h2>What changed</h2>
          <p>After the rewrite, components stopped referencing hex. They reference <code style={{font:'500 14px/1 var(--font-mono)',background:'var(--muted)',padding:'2px 6px',borderRadius:4}}>--card</code>, <code style={{font:'500 14px/1 var(--font-mono)',background:'var(--muted)',padding:'2px 6px',borderRadius:4}}>--border</code>, <code style={{font:'500 14px/1 var(--font-mono)',background:'var(--muted)',padding:'2px 6px',borderRadius:4}}>--ring</code>. The layer below them decides what those tokens resolve to. Two apps can ship the same button with different hearts.</p>
          <p>The unexpected benefit: once the tokens were real, dark mode fell out nearly for free. Every semantic token got a <code style={{font:'500 14px/1 var(--font-mono)',background:'var(--muted)',padding:'2px 6px',borderRadius:4}}>.dark</code> counterpart, and a one-line class toggle on <code style={{font:'500 14px/1 var(--font-mono)',background:'var(--muted)',padding:'2px 6px',borderRadius:4}}>html</code> flipped the whole system. We had been putting dark mode off for months. The rewrite made it trivial.</p>
          <h2>What we'd do again</h2>
          <p>Put the token layer first. Name tokens for their role, not their value. Keep the ramp complete — every step from 50 to 950 — even if you don't use every step today. And write one document that lists which token goes where, so the next person doesn't have to re-derive it.</p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BlogList, BlogDetail, POSTS });
