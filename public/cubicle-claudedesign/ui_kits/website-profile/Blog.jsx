// Bestra Website UI Kit — blog list + post detail.

const POSTS = [
  { slug:'rethinking-decision-making', cat:'Decision Making',     date:'Apr 21, 2026', read:'7 min read', title:'Rethinking Decision-Making', excerpt:'Unclear decision-making structures lead to delays, confusion, and missed opportunities. Here\'s how to build clarity in complex organizations.' },
  { slug:'hidden-cost-of-inefficiency', cat:'Operations & Efficiency', date:'Apr 21, 2026', read:'5 min read', title:'The Hidden Cost of Inefficiency', excerpt:'Inefficiencies remain hidden until they significantly impact performance. Spotting them early is a competitive advantage.' },
  { slug:'clarity-before-growth',      cat:'Growth & Scaling',   date:'Apr 10, 2026', read:'6 min read', title:'Clarity Before Growth',          excerpt:'Companies often rush to scale without establishing the structural foundations needed to support expansion.' },
  { slug:'market-expansion-strategy',  cat:'Market Expansion',   date:'Mar 28, 2026', read:'8 min read', title:'Market Expansion Strategy',      excerpt:'Strategic entry into new markets helps minimize risk and boost the likelihood of successful, sustained outcomes.' },
  { slug:'performance-improvement',    cat:'Performance',        date:'Mar 18, 2026', read:'5 min read', title:'Performance Improvement',        excerpt:'Streamlining workflows enhances productivity and maintains sustained high-level results across the organization.' },
  { slug:'decision-making-culture',    cat:'Decision Making',    date:'Mar 12, 2026', read:'4 min read', title:'Building a Decision-Making Culture', excerpt:'Growth comes from doing the right things consistently. Culture determines whether your frameworks actually stick.' },
  { slug:'operations-efficiency',      cat:'Operations & Efficiency', date:'Feb 28, 2026', read:'6 min read', title:'Reducing Operational Complexity', excerpt:'Methods to decrease organizational complexity and strengthen daily operational performance across teams.' },
  { slug:'strategic-planning-guide',   cat:'Strategic Planning', date:'Feb 14, 2026', read:'9 min read', title:'The Strategic Planning Guide',   excerpt:'Developing transparent business approaches that deliver measurable, repeatable outcomes for growing teams.' },
  { slug:'growth-scaling-essentials',  cat:'Growth & Scaling',   date:'Jan 30, 2026', read:'7 min read', title:'Growth & Scaling Essentials',    excerpt:'Identifies the critical issues growing businesses must address before expanding further into new markets.' },
];

function BlogList({ onOpen }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Blog</div>
          <h1>Practical guides to help your business grow</h1>
          <p>Essays on strategy, operations, and the practice of building organizations that perform consistently.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="blog-grid">
            {POSTS.map(p => (
              <article key={p.slug} className="post" onClick={() => onOpen(p.slug)}>
                <div className="thumb">{p.cat}</div>
                <div className="meta">{p.date} · {p.read}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BlogDetail({ slug, onBack }) {
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];
  const isMain = post.slug === 'rethinking-decision-making';

  return (
    <section>
      <div className="container">
        <div className="article">
          <button className="btn btn-ghost btn-sm" onClick={onBack} style={{marginBottom:16,marginLeft:-12}}>← All posts</button>
          <div className="meta">{post.cat} · {post.date} · {post.read}</div>
          <h1>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>

          {isMain ? (
            <>
              <h2>Building Clarity in Complex Organizations</h2>
              <p>Many organizations struggle not with insufficient data or expertise, but with a fundamental lack of decision-making clarity. As companies expand, processes become increasingly intricate, responsibilities intersect, and straightforward decisions require excessive time to complete.</p>
              <p>Without transparent structures, even routine decisions generate delays and operational misalignment. Establishing clarity represents both an operational enhancement and a competitive advantage.</p>

              <h2>Why Decision-Making Becomes Complex</h2>
              <p>Scaling naturally distributes decision authority across multiple teams and stakeholders, creating conditions where maintaining clarity grows increasingly difficult.</p>
              <p>Typical obstacles include unclear decision ownership, excessive stakeholder participation in simple processes, strategy-execution misalignment, varying approaches across departments, and reliance on informal channels. These barriers foster inefficiency cycles where teams hesitate due to uncertain roles, ultimately resulting in missed opportunities and reactive rather than forward-thinking behavior.</p>

              <h2>The Cost of Unclear Decisions</h2>
              <p>Unstructured decision-making impacts far beyond timeline delays. Teams experience repeated decision revisits, duplicated efforts, conflicting results, and delayed critical choices that hinder adaptation. This generates a culture of uncertainty where progress depends on individual initiative rather than a clear system.</p>

              <h2>Creating Clarity Through Structure</h2>
              <p>Effective improvement requires establishing explicit processes, identifying responsible parties, and tracking outcomes. Well-defined frameworks streamline operations, reduce ambiguity, and enhance performance by setting clear guidelines, ensuring accountability, and creating consistent evaluation approaches.</p>

              <h2>Balancing Speed and Quality</h2>
              <p>Structured decision-making accelerates rather than hinders operations by eliminating unnecessary steps. Clear role definitions enable efficient, confident choices that balance velocity with quality—a distinction that separates high-performing organizations from reactive ones.</p>

              <h2>Building a Culture of Confident Decisions</h2>
              <p>Structure requires cultural support through clear expectations, leadership backing, a learning orientation, and continuous refinement. The framework must be lived, not just documented.</p>

              <h2>Conclusion</h2>
              <p>Clarity forms the foundation for effective organizational decision-making, improving both speed and consistency through structure, defined ownership, and strategic alignment. Organizations that invest in this foundation consistently outpace those that don't.</p>
            </>
          ) : (
            <>
              <h2>Understanding the Problem</h2>
              <p>Every business topic in this category starts with the same challenge: things that should be simple become complex over time. The organizations that pull ahead are the ones that recognize complexity as a management problem, not a market problem.</p>
              <p>The best teams we've worked with share a common trait—they diagnose before they prescribe. They resist the urge to solve problems with more resources when clarity and structure would serve them better.</p>

              <h2>A Framework for Thinking About It</h2>
              <p>When approaching this topic, the most useful mental model is the separation between what you need to do, who owns it, and how you'll know it's working. These three dimensions—task, ownership, and measurement—are where most execution breaks down.</p>
              <p>The organizations that get this right create flywheel effects. Each good decision makes the next one easier. Each clear outcome becomes a reference point for the next challenge.</p>

              <h2>What This Means in Practice</h2>
              <p>The practical implication is straightforward: start with the simplest version that creates accountability. You can always add sophistication later. What you can't recover easily from is the confusion that builds when accountability is absent from day one.</p>
              <p>Building this foundation—even imperfectly—is the difference between organizations that learn and adapt, and organizations that repeat the same problems with increasing frustration.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BlogList, BlogDetail, POSTS });
