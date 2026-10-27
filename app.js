'use strict';

const TARGET = 10;
const KEY = 'jobtracker.v1';
const THEME_KEY = 'jobtracker_theme';
const STATUSES = ['Applied', 'Referred', 'Test/OA', 'Interview', 'Offer', 'Rejected', 'Saved'];

// Curated shortlist with concise skill tags and compact badges (no walls of text)
const JOBS = [
  {
    id: 'zycus-genai',
    top: 1,
    company: 'Zycus',
    role: 'Core GenAI Engineer',
    where: 'Bengaluru / Pune',
    mode: 'Bengaluru',
    exp: '0–2 yrs',
    posted: '1d ago',
    lo: 8,
    hi: 15,
    sal: 'estimated',
    link: 'https://www.talentd.in/jobs/core-genai-engineer-at-zycus-mumbai-freshers-2026',
    official: 'https://zycus.sensehq.com/',
    tags: ['GenAI', 'LLMs', 'PyTorch'],
    flag: '2024–26 Batch'
  },
  {
    id: 'kulfi-swe1',
    top: 2,
    company: 'Kulfi',
    role: 'Software Engineer I (Full-Stack)',
    where: 'Bengaluru',
    mode: 'Bengaluru',
    exp: '0–1 yrs',
    posted: 'Oct 19',
    lo: 9,
    hi: 15,
    sal: 'employer',
    link: 'https://peerlist.io/company/kulfi_club/careers/software-engineer-i--product--fullstack/jobhkkdembpnaolaafdmoqpbqlg7mn',
    tags: ['Full-Stack', 'Flutter', 'APIs'],
    flag: 'Fresher friendly'
  },
  {
    id: 'akamai-swe',
    top: 3,
    company: 'Akamai',
    role: 'Software Engineer (Delivery)',
    where: 'Remote (India)',
    mode: 'Remote',
    exp: '0–2 yrs',
    posted: 'Oct 19',
    lo: 6,
    hi: 12,
    sal: 'estimated',
    link: 'https://yohire.in/job/akamai-india-off-campus-2026',
    official: 'https://www.akamai.com/careers',
    tags: ['Remote', 'UI Portal', 'JS/HTML'],
    flag: 'Java knowledge'
  },
  {
    id: 'sarvam-open',
    top: 4,
    company: 'Sarvam AI',
    role: 'ML & Frontend Engineer',
    where: 'Bengaluru',
    mode: 'Bengaluru',
    exp: 'Junior',
    posted: 'Active',
    lo: null,
    hi: null,
    sal: 'undisclosed',
    link: 'https://www.sarvam.ai/careers',
    tags: ['Indic AI', 'Frontend', 'ML Agents'],
    flag: 'Pay on site'
  },
  {
    id: 'weknow-fe',
    top: 5,
    company: 'WeKnow Group',
    role: 'Frontend Engineer',
    where: 'Bengaluru',
    mode: 'Bengaluru',
    exp: '1 yr',
    posted: 'Recent',
    lo: 11,
    hi: 15,
    sal: 'employer',
    link: 'https://wellfound.com/jobs/4014774-frontend-engineer',
    tags: ['React', 'Frontend', 'TypeScript'],
    flag: '1 yr exp asked'
  },
  {
    id: 'weknow-fs',
    company: 'WeKnow Group',
    role: 'Full Stack Developer',
    where: 'Bengaluru',
    mode: 'Bengaluru',
    exp: '2 yrs',
    posted: '1d ago',
    lo: 12,
    hi: 18,
    sal: 'employer',
    link: 'https://wellfound.com/jobs/3721620-full-stack-developer',
    tags: ['Full Stack', 'React', 'Node.js'],
    flag: '2 yrs exp'
  },
  {
    id: 'recordbook-rn',
    company: 'RecordBook',
    role: 'React Native Developer',
    where: 'Bengaluru',
    mode: 'Bengaluru',
    exp: '1 yr',
    posted: 'Recent',
    lo: 8,
    hi: 12,
    sal: 'employer',
    link: 'https://wellfound.com/jobs/3020981-react-native-developer',
    tags: ['React Native', 'Mobile', 'YC S21'],
    flag: '1 yr exp'
  },
  {
    id: 'xomiro-fs',
    company: 'Xomiro Tech',
    role: 'Full Stack + GenAI',
    where: 'Bengaluru',
    mode: 'Bengaluru',
    exp: '2 yrs',
    posted: '1w ago',
    lo: 20,
    hi: 24,
    sal: 'employer',
    link: 'https://wellfound.com/jobs/4829593-full-stack-developer-node-js-react-typescript-generative-ai',
    tags: ['Node.js', 'React', 'GenAI'],
    flag: '2 yrs exp'
  },
  {
    id: 'catalysts-fs',
    company: 'Catalysts',
    role: 'Full-Stack Software Engineer',
    where: 'Bengaluru',
    mode: 'Bengaluru',
    exp: '2 yrs',
    posted: 'Recent',
    lo: 6,
    hi: 10,
    sal: 'employer',
    link: 'https://wellfound.com/jobs/4791885-full-stack-software-engineer',
    tags: ['Full Stack', 'Web', 'APIs'],
    flag: '2 yrs exp'
  },
  {
    id: 'skysecure-agent',
    company: 'Skysecure',
    role: 'AI Agent Developer',
    where: 'Bengaluru',
    mode: 'Bengaluru',
    exp: 'Fresher',
    posted: 'Recent',
    lo: null,
    hi: null,
    sal: 'undisclosed',
    link: 'https://in.indeed.com/q-python-fresher-l-bengaluru,-karnataka-jobs.html',
    tags: ['FastAPI', 'AutoGen', 'Python'],
    flag: 'Fresher friendly'
  }
];

const BOARDS = [
  { name: 'LinkedIn', query: 'AI / ML Engineer', url: 'https://www.linkedin.com/jobs/search/?keywords=AI%20ML%20Engineer&location=India&f_E=2&f_TPR=r604800', tag: 'Freshers · India' },
  { name: 'LinkedIn', query: 'React Developer', url: 'https://www.linkedin.com/jobs/search/?keywords=React%20Developer&location=Bengaluru&f_E=2&f_TPR=r604800', tag: 'Entry level · Bengaluru' },
  { name: 'LinkedIn', query: 'Python Developer', url: 'https://www.linkedin.com/jobs/search/?keywords=Python%20Developer&location=India&f_E=2&f_TPR=r604800', tag: 'Freshers · India' },
  { name: 'LinkedIn', query: 'Agentic AI / GenAI', url: 'https://www.linkedin.com/jobs/search/?keywords=Agentic%20AI%20Engineer&location=India&f_E=2&f_TPR=r604800', tag: 'India' },
  { name: 'Wellfound', query: 'AI Engineer', url: 'https://wellfound.com/role/l/ai-engineer/india', tag: 'Startups · India' },
  { name: 'Wellfound', query: 'ML Engineer', url: 'https://wellfound.com/role/l/machine-learning-engineer/india', tag: 'Startups · India' },
  { name: 'Wellfound', query: 'React Developer', url: 'https://wellfound.com/role/l/react-developer/bangalore-urban', tag: 'Bengaluru' },
  { name: 'Cutshort', query: 'React Jobs', url: 'https://cutshort.io/jobs/reactjs-jobs-in-bangalore-bengaluru', tag: 'Bengaluru' },
  { name: 'Cutshort', query: 'React Remote', url: 'https://cutshort.io/jobs/remote-reactjs-jobs', tag: 'Remote' },
  { name: 'Weekday', query: 'AI Roles', url: 'https://www.weekday.works/jobs/ai-jobs-in-bangalore-15', tag: 'Y Combinator & Seed' },
  { name: 'Indeed', query: 'Fresher AI Engineer', url: 'https://in.indeed.com/q-fresher-ai-engineer-l-bengaluru,-karnataka-jobs.html', tag: 'Bengaluru' },
  { name: 'Indeed', query: 'Python Fresher', url: 'https://in.indeed.com/q-python-fresher-l-bengaluru,-karnataka-jobs.html', tag: 'Bengaluru' },
  { name: 'Sarvam AI', query: 'Careers Page', url: 'https://www.sarvam.ai/careers', tag: 'Direct Site' },
  { name: 'Zycus', query: 'SenseHQ Portal', url: 'https://zycus.sensehq.com/', tag: 'Direct Site' }
];

// Utility Helpers
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const el = (tag, props = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') n.className = v;
    else if (k === 'text') n.textContent = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v);
  }
  kids.flat().forEach(c => { if (c != null) n.append(c); });
  return n;
};

const pad = n => String(n).padStart(2, '0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => ymd(new Date());
const safeUrl = u => { try { const x = new URL(u); return /^https?:$/.test(x.protocol) ? x.href : ''; } catch { return ''; } };
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
const norm = s => String(s || '').trim().toLowerCase();

// Toast Notifications
function toast(msg, type = 'info') {
  const box = $('#toast-container');
  if (!box) return;
  const t = el('div', { class: `toast toast-${type}` },
    el('span', { text: msg }));
  box.appendChild(t);
  setTimeout(() => {
    t.classList.add('hiding');
    setTimeout(() => t.remove(), 250);
  }, 2600);
}

// State & Filters
let state = load();
const filters = { q: '', mode: '', disclosed: false };

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && Array.isArray(s.log)) return s;
  } catch { /* ignore */ }
  return { log: [] };
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch { /* storage unavailable */ }
}

const counted = e => e.status !== 'Saved';

function companiesOn(date) {
  const set = new Set();
  state.log.forEach(e => {
    if (e.date === date && counted(e)) set.add(norm(e.company));
  });
  return set;
}

function streak() {
  const d = new Date();
  if (companiesOn(ymd(d)).size < TARGET) d.setDate(d.getDate() - 1);
  let n = 0;
  while (companiesOn(ymd(d)).size >= TARGET) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

// Theme handling
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;
  setTheme(isDark ? 'dark' : 'light');

  $('#theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const darkIcon = $('#theme-icon-dark');
  const lightIcon = $('#theme-icon-light');
  if (theme === 'dark') {
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline-block';
  } else {
    darkIcon.style.display = 'inline-block';
    lightIcon.style.display = 'none';
  }
}

// Tab Switching
function initTabs() {
  const tabButtons = $$('.nav-tabs .tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      switchTab(target);
    });
  });

  const browseBtn = $('#switch-to-shortlist');
  if (browseBtn) {
    browseBtn.addEventListener('click', () => switchTab('shortlist'));
  }
}

function switchTab(tabId) {
  $$('.nav-tabs .tab-btn').forEach(b => {
    const active = b.dataset.tab === tabId;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', active);
  });
  $$('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `panel-${tabId}`);
  });
}

// Job Logging
function logJob(j) {
  state.log.push({
    id: uid(),
    date: today(),
    jobId: j.id,
    company: j.company,
    role: j.role,
    link: j.link,
    salary: j.sal === 'undisclosed' ? 'Undisclosed' : `₹${j.lo}–${j.hi} LPA`,
    status: 'Applied',
    notes: ''
  });
  save();
  render();
  toast(`Logged ${j.company} as Applied!`);
}

// Render Header & Progress
function renderProgress() {
  const n = companiesOn(today()).size;
  $('#count').textContent = n;
  $('#streak').textContent = streak();
  $('#total').textContent = state.log.filter(counted).length;

  const pct = Math.min(100, Math.round((n / TARGET) * 100));
  const badge = $('#target-badge');
  badge.textContent = n >= TARGET ? 'Target Hit! ✓' : `${pct}%`;
  badge.classList.toggle('completed', n >= TARGET);

  const bar = $('#bar');
  bar.setAttribute('aria-valuenow', Math.min(n, TARGET));
  bar.classList.toggle('done', n >= TARGET);
  $('#bar-fill').style.width = pct + '%';

  $('#log-hint').textContent = n >= TARGET
    ? '🎉 Excellent work! Daily 10-job goal completed.'
    : `${TARGET - n} more application${TARGET - n === 1 ? '' : 's'} to hit today's target`;

  const d = new Date();
  $('#today-label').textContent = d.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// Render Shortlist
function renderJobs() {
  const box = $('#jobs');
  box.replaceChildren();

  const q = norm(filters.q);
  const list = JOBS.filter(j => {
    if (filters.disclosed && j.sal === 'undisclosed') return false;
    if (filters.mode === 'Remote' && j.mode !== 'Remote') return false;
    if (filters.mode === 'Bengaluru' && j.mode !== 'Bengaluru') return false;
    if (filters.mode === 'Other' && (j.mode === 'Remote' || j.mode === 'Bengaluru')) return false;
    if (q) {
      const matchable = [j.company, j.role, j.where, ...(j.tags || [])].join(' ');
      if (!norm(matchable).includes(q)) return false;
    }
    return true;
  }).sort((a, b) => (a.top || 99) - (b.top || 99));

  $('#badge-shortlist').textContent = list.length;

  if (!list.length) {
    box.append(
      el('div', { class: 'empty-state', style: 'grid-column: 1/-1' },
        el('h4', { text: 'No matching jobs found' }),
        el('p', { text: 'Try relaxing filters or search terms.' }))
    );
    return;
  }

  list.forEach(j => {
    const done = state.log.find(e => e.jobId === j.id);
    const href = safeUrl(j.link);
    const initial = j.company.charAt(0).toUpperCase();

    // Salary badge
    const salBadge = j.sal === 'undisclosed'
      ? el('span', { class: 'badge badge-salary undisclosed', text: 'Pay undisclosed' })
      : el('span', { class: 'badge badge-salary', text: `₹${j.lo}–${j.hi} LPA` });

    // Actions
    const viewBtn = href ? el('a', { class: 'btn btn-outline', href, target: '_blank', rel: 'noopener noreferrer' },
      el('span', { text: 'Apply' }),
      el('svg', { width: '13', height: '13', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' },
        el('path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }),
        el('polyline', { points: '15 3 21 3 21 9' }),
        el('line', { x1: '10', y1: '14', x2: '21', y2: '3' })
      )
    ) : null;

    const officialBtn = j.official && safeUrl(j.official) ? el('a', { class: 'btn btn-outline', href: safeUrl(j.official), target: '_blank', rel: 'noopener noreferrer', text: 'Careers ↗' }) : null;

    const actionBtn = done
      ? el('button', { class: 'btn is-logged', disabled: '', text: '✓ Applied' })
      : el('button', { class: 'btn btn-primary', text: '+ Log Applied', onclick: () => logJob(j) });

    const card = el('article', { class: 'job-card' + (j.top ? ' is-priority' : '') },
      // Top row
      el('div', { class: 'card-top' },
        el('div', { class: 'company-meta' },
          el('div', { class: 'company-avatar', text: initial }),
          el('div', { class: 'company-details' },
            el('span', { class: 'company-name', text: j.company }),
            el('span', { class: 'location-tag', text: j.where })
          )
        ),
        j.top ? el('span', { class: 'priority-badge', text: `#${j.top} Choice` }) : null
      ),
      // Role
      el('h3', { class: 'job-role', text: j.role }),
      // Badges
      el('div', { class: 'pills-row' },
        salBadge,
        el('span', { class: 'badge badge-exp', text: j.exp }),
        j.flag ? el('span', { class: 'badge badge-flag', text: j.flag }) : null
      ),
      // Skill Tags
      j.tags && j.tags.length ? el('div', { class: 'skills-tags' },
        j.tags.map(t => el('span', { class: 'skill-tag', text: t }))
      ) : null,
      // Actions
      el('div', { class: 'card-actions' },
        viewBtn,
        officialBtn,
        actionBtn
      )
    );

    box.append(card);
  });
}

const statusSlug = s => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '-');

// Render Daily Log
function statusSelect(entry) {
  const s = el('select', { class: `status-badge status-${statusSlug(entry.status)}`, 'aria-label': 'Status' },
    STATUSES.map(v => el('option', { value: v, text: v }))
  );
  s.value = entry.status;
  s.addEventListener('change', () => {
    entry.status = s.value;
    s.className = `status-badge status-${statusSlug(entry.status)}`;
    save();
    renderProgress();
    toast(`Updated status to ${entry.status}`);
  });
  return s;
}

function renderLog() {
  const body = $('#log-body');
  body.replaceChildren();
  const rows = state.log.filter(e => e.date === today());

  $('#badge-log').textContent = rows.length;
  $('#log-count-pill').textContent = `${rows.length} logged today`;
  $('#log-empty').classList.toggle('hidden', rows.length > 0);

  rows.forEach(e => {
    const href = safeUrl(e.link);
    const deleteBtn = el('button', {
      class: 'delete-btn',
      title: 'Remove entry',
      'aria-label': 'Delete entry',
      onclick: () => {
        state.log = state.log.filter(x => x.id !== e.id);
        save();
        render();
        toast('Application removed');
      }
    },
      el('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' },
        el('polyline', { points: '3 6 5 6 21 6' }),
        el('path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' })
      )
    );

    const compCell = href
      ? el('a', { class: 'table-link', href, target: '_blank', rel: 'noopener noreferrer', text: e.company + ' ↗' })
      : el('span', { style: 'font-weight: 600;', text: e.company });

    body.append(el('tr', {},
      el('td', {}, compCell),
      el('td', { text: e.role }),
      el('td', { text: e.salary || '—' }),
      el('td', {}, statusSelect(e)),
      el('td', { text: e.notes || '—', style: 'color: var(--text-muted);' }),
      el('td', { class: 'text-right' }, deleteBtn)
    ));
  });
}

// Render History
function renderHistory() {
  const body = $('#hist-body');
  body.replaceChildren();
  const by = {};
  state.log.forEach(e => { (by[e.date] = by[e.date] || []).push(e); });
  const dates = Object.keys(by).sort().reverse();

  $('#hist-empty').classList.toggle('hidden', dates.length > 0);

  dates.forEach(d => {
    const n = companiesOn(d).size;
    const names = [...new Set(by[d].filter(counted).map(e => e.company))];
    const hit = n >= TARGET;

    const hitBadge = el('span', {
      class: `badge ${hit ? 'badge-salary' : 'badge-exp'}`,
      text: hit ? '✓ Target Hit (10+)' : `${n} / ${TARGET}`
    });

    const companyChips = el('div', { class: 'pills-row' },
      names.map(name => el('span', { class: 'skill-tag', text: name }))
    );

    body.append(el('tr', {},
      el('td', { style: 'font-weight: 600;', text: d }),
      el('td', { text: String(n) + ' companies' }),
      el('td', {}, hitBadge),
      el('td', {}, companyChips)
    ));
  });
}

// Render Job Boards
function renderBoards() {
  const box = $('#boards');
  if (box.childElementCount) return;

  BOARDS.forEach(b => {
    const card = el('a', { class: 'board-card', href: b.url, target: '_blank', rel: 'noopener noreferrer' },
      el('div', { class: 'board-top' },
        el('span', { class: 'board-title', text: b.name }),
        el('svg', { class: 'board-arrow', width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' },
          el('path', { d: 'M7 17L17 7M17 7H7M17 7V17' })
        )
      ),
      el('span', { class: 'board-query', text: b.query }),
      el('span', { class: 'board-tag', text: b.tag })
    );
    box.append(card);
  });
}

// Full Render
function render() {
  renderProgress();
  renderJobs();
  renderLog();
  renderHistory();
  renderBoards();
}

// Quick Add Form Event
const addForm = $('#add');
$('select[name=status]', addForm).append(...STATUSES.map(v => el('option', { value: v, text: v })));

addForm.addEventListener('submit', ev => {
  ev.preventDefault();
  const f = new FormData(addForm);
  const company = String(f.get('company')).trim();
  const role = String(f.get('role')).trim();
  if (!company || !role) return;

  state.log.push({
    id: uid(),
    date: today(),
    jobId: null,
    company,
    role,
    link: safeUrl(String(f.get('link'))),
    salary: String(f.get('salary')).trim(),
    status: STATUSES.includes(f.get('status')) ? f.get('status') : 'Applied',
    notes: String(f.get('notes')).trim()
  });

  addForm.reset();
  save();
  render();
  toast(`Logged application for ${company}!`);
});

// Filters Events
$('#q').addEventListener('input', e => {
  filters.q = e.target.value;
  renderJobs();
});

$$('#mode-pills .pill-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('#mode-pills .pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filters.mode = btn.dataset.mode;
    renderJobs();
  });
});

$('#disclosed').addEventListener('change', e => {
  filters.disclosed = e.target.checked;
  renderJobs();
});

// Export & Import Helpers
function download(name, text, type) {
  const a = el('a', { href: URL.createObjectURL(new Blob([text], { type })), download: name });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

const csvCell = v => {
  let s = String(v ?? '');
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return `"${s.replace(/"/g, '""')}"`;
};

$('#export-csv').addEventListener('click', () => {
  const head = ['date', 'company', 'role', 'salary', 'status', 'link', 'notes'];
  const rows = state.log.slice().sort((a, b) => a.date.localeCompare(b.date))
    .map(e => head.map(h => csvCell(e[h])).join(','));
  download(`job-applications-${today()}.csv`, [head.join(','), ...rows].join('\n'), 'text/csv');
  toast('Downloaded applications CSV');
});

$('#export-json').addEventListener('click', () => {
  download(`job-tracker-backup-${today()}.json`, JSON.stringify(state, null, 2), 'application/json');
  toast('Downloaded JSON backup');
});

$('#import').addEventListener('change', async e => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!data || !Array.isArray(data.log)) throw new Error('invalid format');
    const have = new Set(state.log.map(x => x.id));
    let added = 0;
    data.log.forEach(x => {
      if (!x || typeof x.company !== 'string' || typeof x.role !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(x.date)) return;
      const id = typeof x.id === 'string' && x.id ? x.id : uid();
      if (have.has(id)) return;
      state.log.push({
        id,
        date: x.date,
        jobId: typeof x.jobId === 'string' ? x.jobId : null,
        company: x.company.slice(0, 80),
        role: x.role.slice(0, 100),
        link: safeUrl(x.link),
        salary: String(x.salary || '').slice(0, 40),
        status: STATUSES.includes(x.status) ? x.status : 'Applied',
        notes: String(x.notes || '').slice(0, 200)
      });
      have.add(id);
      added++;
    });
    save();
    render();
    toast(`Successfully imported ${added} entries!`);
  } catch {
    toast('Error: Invalid JSON backup file', 'error');
  }
});

$('#reset').addEventListener('click', () => {
  if (confirm('Are you sure you want to delete all logged applications? This cannot be undone.')) {
    state = { log: [] };
    save();
    render();
    toast('All data reset');
  }
});

// Initialization
initTheme();
initTabs();
render();
