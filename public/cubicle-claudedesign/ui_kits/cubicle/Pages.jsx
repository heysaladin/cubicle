// Cubicle UI Kit — pages: Dashboard, Projects, Inbox, Team, Settings.

function Dashboard({ onOpenDialog }) {
  const [tab, setTab] = useState('overview');
  const bars = [32, 48, 55, 40, 62, 75, 68, 80, 72, 88, 95, 78];
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back. Here's what's happening this week.</p>
        </div>
        <div style={{display:'flex',gap:8}}>
          <Button variant="outline" size="sm">Export</Button>
          <Button variant="default" size="sm" onClick={onOpenDialog}><Icon.plus />New report</Button>
        </div>
      </div>

      <Tabs value={tab} onChange={setTab} options={[
        {value:'overview',label:'Overview'},
        {value:'analytics',label:'Analytics'},
        {value:'reports',label:'Reports'},
      ]} />

      <div className="kpi-grid">
        <div className="kpi"><div className="label">Total revenue</div><div className="val">$12,480</div><div className="delta up">+12.4% vs last week</div></div>
        <div className="kpi"><div className="label">Active users</div><div className="val">2,314</div><div className="delta up">+4.8%</div></div>
        <div className="kpi"><div className="label">Open tickets</div><div className="val">18</div><div className="delta down">+3</div></div>
        <div className="kpi"><div className="label">Deploys</div><div className="val">42</div><div className="delta up">+8</div></div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Requests per hour</CardTitle>
          <CardDesc>Last 12 hours across all services</CardDesc>
        </CardHeader>
        <CardBody>
          <div className="chart">
            {bars.map((h,i) => <div key={i} className={cx('bar', i===bars.length-1 && 'accent')} style={{height: h+'%'}} />)}
          </div>
          <div style={{display:'flex',justifyContent:'space-between',font:'400 11px/1 var(--font-mono)',color:'var(--muted-foreground)',marginTop:4}}>
            <span>8am</span><span>12pm</span><span>4pm</span><span>now</span>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

function Projects() {
  const [rows, setRows] = useState([
    { id:1, name:'cubicle-web',   status:'Active',   owner:'Saladin', updated:'2h ago' },
    { id:2, name:'cubicle-docs',  status:'Active',   owner:'Mira',    updated:'Yesterday' },
    { id:3, name:'cubicle-icons', status:'Archived', owner:'Kai',     updated:'3d ago' },
    { id:4, name:'cubicle-mobile',status:'Draft',    owner:'Saladin', updated:'1w ago' },
  ]);
  const [filter, setFilter] = useState('');
  const shown = rows.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
      <div className="page-header">
        <div><h1>Projects</h1><p>{rows.length} total · {rows.filter(r=>r.status==='Active').length} active</p></div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <Input style={{width:240}} placeholder="Filter projects…" value={filter} onChange={e=>setFilter(e.target.value)} />
          <Button variant="default" size="sm"><Icon.plus />New</Button>
        </div>
      </div>
      <Card>
        <table className="table">
          <thead><tr><th>Name</th><th>Status</th><th>Owner</th><th>Updated</th><th></th></tr></thead>
          <tbody>
            {shown.map(r => (
              <tr key={r.id}>
                <td style={{fontWeight:500}}>{r.name}</td>
                <td>
                  {r.status==='Active' && <Badge variant="success">Active</Badge>}
                  {r.status==='Archived' && <Badge variant="secondary">Archived</Badge>}
                  {r.status==='Draft' && <Badge variant="outline">Draft</Badge>}
                </td>
                <td>{r.owner}</td>
                <td style={{color:'var(--muted-foreground)'}}>{r.updated}</td>
                <td style={{textAlign:'right'}}>
                  <Button variant="ghost" size="sm" onClick={() => setRows(rows.filter(x=>x.id!==r.id))} aria-label="Delete">
                    <Icon.trash />
                  </Button>
                </td>
              </tr>
            ))}
            {shown.length === 0 && <tr><td colSpan="5" style={{textAlign:'center',padding:48,color:'var(--muted-foreground)'}}>No projects match "{filter}"</td></tr>}
          </tbody>
        </table>
      </Card>
    </>
  );
}

function Inbox() {
  const [msgs, setMsgs] = useState([
    { id:1, from:'Mira', subject:'Design review — sidebar v2', preview:'Left a few comments on the spacing…', time:'10:32', unread:true },
    { id:2, from:'Deploy bot', subject:'cubicle-web · production', preview:'Deployment succeeded in 42s.', time:'09:18', unread:true },
    { id:3, from:'Kai', subject:'Re: Icon set', preview:'Agreed. Let\u2019s ship the Lucide merge.', time:'Yesterday', unread:false },
    { id:4, from:'Billing', subject:'Invoice #2081', preview:'Your monthly invoice is ready.', time:'Yesterday', unread:true },
  ]);
  const [selected, setSelected] = useState(1);
  const m = msgs.find(x => x.id === selected);
  return (
    <>
      <div className="page-header"><div><h1>Inbox</h1><p>{msgs.filter(x=>x.unread).length} unread</p></div></div>
      <div style={{display:'grid',gridTemplateColumns:'360px 1fr',gap:16}}>
        <Card>
          <div style={{display:'flex',flexDirection:'column'}}>
            {msgs.map(x => (
              <div key={x.id}
                onClick={() => { setSelected(x.id); setMsgs(msgs.map(r => r.id===x.id?{...r,unread:false}:r)); }}
                style={{padding:'14px 16px',borderBottom:'1px solid var(--border)',cursor:'pointer',background: selected===x.id ? 'var(--accent)' : 'transparent'}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:4}}>
                  <span style={{width:6,height:6,borderRadius:'50%',background: x.unread ? 'var(--neutral-900)' : 'transparent'}}></span>
                  <span style={{font:'500 13px/1 var(--font-sans)'}}>{x.from}</span>
                  <span style={{marginLeft:'auto',font:'400 12px/1 var(--font-sans)',color:'var(--muted-foreground)'}}>{x.time}</span>
                </div>
                <div style={{font:'500 14px/1.3 var(--font-sans)',marginBottom:2}}>{x.subject}</div>
                <div style={{font:'400 13px/1.3 var(--font-sans)',color:'var(--muted-foreground)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{x.preview}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{m.subject}</CardTitle>
            <CardDesc>{m.from} · {m.time}</CardDesc>
          </CardHeader>
          <CardBody>
            <p style={{font:'400 14px/21px var(--font-sans)',color:'var(--foreground)'}}>{m.preview}</p>
            <p style={{font:'400 14px/21px var(--font-sans)',color:'var(--muted-foreground)',marginTop:12}}>
              This is a placeholder message body. In a real app, the full thread would render here with reply controls and attachments.
            </p>
          </CardBody>
          <CardFooter>
            <Button variant="outline" size="sm">Archive</Button>
            <Button variant="default" size="sm">Reply</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

function Team() {
  const people = [
    { n:'Saladin Ahmed',  e:'saladin@cubicle.dev', r:'Owner',  i:'SA', bg:'#FFE3E3', fg:'#C92A2A' },
    { n:'Mira Rojas',     e:'mira@cubicle.dev',    r:'Design', i:'MR', bg:'#DBEAFE', fg:'#1D4ED8' },
    { n:'Kai Lindqvist',  e:'kai@cubicle.dev',     r:'Eng',    i:'KL', bg:'#D1FAE5', fg:'#047857' },
    { n:'Jules Park',     e:'jules@cubicle.dev',   r:'Eng',    i:'JP', bg:'#FEF3C7', fg:'#92400E' },
    { n:'Noor Qureshi',   e:'noor@cubicle.dev',    r:'PM',     i:'NQ', bg:'#EDE9FE', fg:'#6D28D9' },
  ];
  return (
    <>
      <div className="page-header">
        <div><h1>Team</h1><p>{people.length} members</p></div>
        <Button variant="default" size="sm"><Icon.plus />Invite</Button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:14}}>
        {people.map(p => (
          <Card key={p.e}>
            <CardBody>
              <div style={{display:'flex',gap:12,alignItems:'center'}}>
                <Avatar initials={p.i} bg={p.bg} fg={p.fg} />
                <div style={{minWidth:0,flex:1}}>
                  <div style={{font:'500 14px/1.2 var(--font-sans)'}}>{p.n}</div>
                  <div style={{font:'400 13px/1.2 var(--font-sans)',color:'var(--muted-foreground)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{p.e}</div>
                </div>
                <Badge variant="outline">{p.r}</Badge>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}

function Settings() {
  const [notif, setNotif] = useState(true);
  const [telem, setTelem] = useState(false);
  const [terms, setTerms] = useState(true);
  return (
    <>
      <div className="page-header"><div><h1>Settings</h1><p>Manage your workspace preferences.</p></div></div>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDesc>Update your personal information.</CardDesc>
        </CardHeader>
        <CardBody>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            <div><Label>Name</Label><Input defaultValue="Saladin Ahmed" /></div>
            <div><Label>Email</Label><Input defaultValue="saladin@cubicle.dev" /></div>
          </div>
          <div style={{marginTop:16}}>
            <Label>Bio</Label>
            <Textarea defaultValue="Builder of quiet tools." />
          </div>
        </CardBody>
        <CardFooter>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button variant="default" size="sm">Save changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader><CardTitle>Preferences</CardTitle><CardDesc>Notification and privacy settings.</CardDesc></CardHeader>
        <CardBody>
          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <Switch checked={notif} onChange={setNotif} />
              <div><div style={{font:'500 14px/1 var(--font-sans)',marginBottom:4}}>Email notifications</div><div style={{font:'400 13px/1 var(--font-sans)',color:'var(--muted-foreground)'}}>Weekly digest + important updates.</div></div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <Switch checked={telem} onChange={setTelem} />
              <div><div style={{font:'500 14px/1 var(--font-sans)',marginBottom:4}}>Anonymous telemetry</div><div style={{font:'400 13px/1 var(--font-sans)',color:'var(--muted-foreground)'}}>Help improve Cubicle by sharing usage data.</div></div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <Checkbox checked={terms} onChange={setTerms} />
              <span style={{font:'400 14px/1 var(--font-sans)'}}>I accept the terms of service.</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

function Components() {
  const [region, setRegion] = useState('us-east');
  const [plan, setPlan] = useState('pro');
  const [bold, setBold] = useState(true);
  const [italic, setItalic] = useState(false);
  const [storage, setStorage] = useState(42);
  const [pg, setPg] = useState(2);
  const faqItems = [
    { trigger: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern and is fully keyboard navigable.' },
    { trigger: 'Can it be animated?', content: 'Yes. It\'s animated by default. Disable motion via the animation token.' },
    { trigger: 'Is dark mode supported?', content: 'First-class. Every semantic token has a .dark counterpart.' },
  ];
  return (
    <>
      <div className="page-header">
        <div><h1>Components</h1><p>New primitives — v1.5 additions.</p></div>
      </div>
      <div className="comp-grid">

        <div className="comp-section">
          <div className="comp-label">Accordion</div>
          <Accordion items={faqItems} />
        </div>

        <div className="comp-section">
          <div className="comp-label">Select · Radio · Slider</div>
          <div className="comp-row" style={{alignItems:'flex-start',gap:24}}>
            <div style={{flex:1,display:'flex',flexDirection:'column',gap:8}}>
              <Label>Region</Label>
              <Select value={region} onChange={setRegion} options={[
                {value:'us-east', label:'US East (N. Virginia)'},
                {value:'us-west', label:'US West (Oregon)'},
                {value:'eu-central', label:'EU (Frankfurt)'},
              ]} />
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <Label>Plan</Label>
              <RadioGroup value={plan} onChange={setPlan} options={[
                {value:'hobby',label:'Hobby'},{value:'pro',label:'Pro'},{value:'enterprise',label:'Enterprise'},
              ]} />
            </div>
            <div style={{flex:1,display:'flex',flexDirection:'column',gap:8}}>
              <Label>Memory — {storage*8} MB</Label>
              <Slider value={storage} min={0} max={100} onChange={setStorage} />
              <div style={{display:'flex',justifyContent:'space-between',font:'400 12px/1 var(--font-sans)',color:'var(--muted-foreground)'}}>
                <span>128 MB</span><span>2 GB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-section">
          <div className="comp-label">Toggle</div>
          <div className="comp-row">
            <Toggle pressed={bold} onToggle={setBold}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
              Bold
            </Toggle>
            <Toggle pressed={italic} onToggle={setItalic}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>
              Italic
            </Toggle>
          </div>
        </div>

        <div className="comp-section">
          <div className="comp-label">Progress · Skeleton</div>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div>
              <div style={{display:'flex',justifyContent:'space-between',font:'400 12px/1 var(--font-sans)',color:'var(--muted-foreground)',marginBottom:6}}><span>Storage</span><span>68%</span></div>
              <Progress value={68} />
            </div>
            <div>
              <div style={{display:'flex',justifyContent:'space-between',font:'400 12px/1 var(--font-sans)',color:'var(--muted-foreground)',marginBottom:6}}><span>Build minutes</span><span>91%</span></div>
              <Progress value={91} />
            </div>
            <Progress value={34} size="sm" />
            <div style={{display:'flex',gap:12,alignItems:'flex-start',marginTop:4}}>
              <Skeleton circle height={40} width={40} />
              <div style={{flex:1,display:'flex',flexDirection:'column',gap:8,paddingTop:4}}>
                <Skeleton height={14} width="55%" />
                <Skeleton height={12} width="80%" />
                <Skeleton height={12} width="65%" />
              </div>
            </div>
          </div>
        </div>

        <div className="comp-section">
          <div className="comp-label">Tooltip</div>
          <div className="comp-row">
            <Tooltip content="Keyboard shortcut: ⌘ K">
              <Button variant="outline" size="sm">Hover me</Button>
            </Tooltip>
            <Tooltip content="Available on Pro plan">
              <Button variant="outline" size="sm">Upgrade</Button>
            </Tooltip>
          </div>
        </div>

        <div className="comp-section">
          <div className="comp-label">Dropdown</div>
          <div className="comp-row">
            <DropdownMenu
              trigger={<Button variant="outline" size="sm">Actions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14,marginLeft:4}}><path d="m6 9 6 6 6-6"/></svg></Button>}
              items={[{label:'Actions'},{text:'Edit'},{text:'Duplicate'},{text:'Export'},'sep',{text:'Delete',destructive:true}]}
            />
          </div>
        </div>

        <div className="comp-section">
          <div className="comp-label">Breadcrumb · Pagination</div>
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            <Breadcrumb items={[
              {label:'Home',onClick:()=>{}},{label:'Projects',onClick:()=>{}},
              {label:'cubicle',onClick:()=>{}},{label:'Settings'},
            ]} />
            <Pagination page={pg} total={5} onChange={setPg} />
          </div>
        </div>

      </div>
    </>
  );
}

Object.assign(window, { Dashboard, Projects, Inbox, Team, Settings, Components });
