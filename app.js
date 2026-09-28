const tools=[["Resume Score","Instantly review resume strength across key areas.","Resume","score"],["ATS Resume Checker","Check structure, keywords and ATS-friendly formatting.","Resume","scan"],["Resume Keyword Checker","Find important keywords and skills in your resume.","Resume","key"],["Resume Summary Generator","Create concise professional summary ideas from your experience.","Resume","summary"],["Resume Bullet Generator","Turn responsibilities into stronger achievement-focused bullets.","Resume","bullet"],["Resume Length Checker","Check resume length, sections and content density.","Resume","length"],["Resume Formatter","Clean up spacing, headings and consistent resume formatting.","Resume","format"],["Cover Letter Generator","Create a tailored cover letter from your job details.","Cover Letter","letter"],["Cover Letter Checker","Review clarity, structure and job-specific relevance.","Cover Letter","check"],["Job Description Analyzer","Break a job description into skills, keywords and requirements.","Job Search","analyze"],["Resume vs Job Matcher","Compare resume content against a target job description.","Job Search","match"],["Job Application Tracker","Organize applications, stages, dates and follow-ups.","Job Search","track"],["Salary to Hourly Calculator","Convert annual salary to an estimated hourly rate.","Salary","hourly"],["Hourly to Salary Calculator","Convert an hourly wage into annual compensation.","Salary","annual"],["Raise Calculator","See how a raise changes your salary and monthly pay.","Salary","raise"],["Job Offer Comparison","Compare compensation, benefits, commute and other factors.","Salary","compare"],["Interview Question Generator","Generate practice questions for common interview types.","Interview","question"],["STAR Method Builder","Turn your experience into a structured STAR answer.","Interview","star"],["Interview Answer Practice","Practice answers with a simple self-review framework.","Interview","practice"],["Interview Scorecard","Create a consistent checklist for interview preparation.","Interview","scorecard"],["Questions to Ask Interviewer","Build thoughtful questions for your next interview.","Interview","ask"],["LinkedIn Headline Generator","Create professional headline ideas for your profile.","Career","headline"],["Professional Bio Generator","Draft a concise professional biography.","Career","bio"],["Career Goal Planner","Turn a career goal into measurable next steps.","Career","goal"],["Skills Gap Checker","Compare your current skills with a target role.","Career","skills"],["Achievement Statement Generator","Turn work results into concise achievement statements.","Career","achievement"],["Notice Period Calculator","Estimate an employment notice period end date.","Career","calendar"],["Work Experience Calculator","Calculate total professional experience across roles.","Career","experience"],["Commute Cost Calculator","Estimate the yearly cost of commuting to a job.","Career","commute"],["Remote vs Office Calculator","Compare selected costs and time for work arrangements.","Career","remote"],["LinkedIn About Generator","Draft a concise About section from your experience and strengths.","Career","about"],["Behavioral Interview Questions","Generate a focused behavioral interview practice set.","Interview","behavioral"],["Interview Prep Checklist","Create a practical checklist for your next interview.","Interview","checklist"],["Salary Increase Calculator","Calculate the dollar and percentage change between two salaries.","Salary","increase"],["Total Compensation Calculator","Estimate annual compensation from salary, bonus and benefits.","Salary","comp"],["Employment Gap Calculator","Estimate the length of an employment gap between two dates.","Career","gap"],["Job Application Deadline Calculator","Calculate a follow-up or application deadline from a target date.","Job Search","deadline"],["Follow-up Email Generator","Create a polite job application or interview follow-up email.","Cover Letter","followup"],["Thank You Email Generator","Draft a professional thank-you email after an interview.","Cover Letter","thanks"],["Resume Objective Generator","Create concise objective statements for resumes and career changes.","Resume","objective"]];

const svg=(body)=>`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${body}</svg>`;
const icons={
score:'<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.6 1.6"/><path d="M8 4.8 6.5 3.7M16 4.8l1.5-1.1"/>',
scan:'<path d="M7 4H5a1 1 0 0 0-1 1v2M17 4h2a1 1 0 0 1 1 1v2M7 20H5a1 1 0 0 1-1-1v-2M17 20h2a1 1 0 0 0 1-1v-2"/><path d="M7 12h10M9 9h6M9 15h6"/>',
key:'<circle cx="8.5" cy="14.5" r="3.5"/><path d="m11 12 8-8M15 5l4 4M14 8l2 2"/>',
summary:'<rect x="5" y="4" width="14" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
bullet:'<path d="M6 7h12M6 12h12M6 17h9"/><circle cx="4" cy="7" r=".8" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r=".8" fill="currentColor" stroke="none"/><circle cx="4" cy="17" r=".8" fill="currentColor" stroke="none"/>',
length:'<path d="M7 4h10v16H7z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
format:'<path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h5M8 16h7"/>',
letter:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="m5 7 7 5 7-5"/><path d="M8 16h6"/>',
check:'<path d="m5 12 4 4L19 6"/><circle cx="12" cy="12" r="9"/>',
analyze:'<path d="M5 5h14v11H5z"/><path d="M8 9h3M8 12h8M14 9h3"/><path d="M9 19h6"/>',
match:'<path d="M7 8h6a4 4 0 1 1-4 4M17 16h-6a4 4 0 1 1 4-4"/><path d="M14 8h3v3M10 16H7v-3"/>',
track:'<path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h6M9 16h3"/><path d="M12 3v3"/>',
hourly:'<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>',
annual:'<rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 10h8M8 14h5"/>',
raise:'<path d="M6 17 17 6"/><path d="M9 6h8v8"/><path d="M5 19h14"/>',
compare:'<path d="M6 5h5v14H6zM13 5h5v14h-5z"/><path d="M11 9h2M11 15h2"/>',
question:'<circle cx="12" cy="12" r="8"/><path d="M9.6 9.5a2.5 2.5 0 1 1 4.5 1.5c-.8 1-2.1 1.2-2.1 2.6"/><path d="M12 16.8h.01"/>',
star:'<path d="m12 4 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.3L7.5 18l.9-5-3.6-3.5 5-.7L12 4z"/>',
practice:'<rect x="5" y="4" width="14" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>',
scorecard:'<path d="M6 4h12v16H6z"/><path d="m9 9 1 1 2-2M13 9h3M9 14l1 1 2-2M13 14h3"/>',
ask:'<path d="M5 5h14v10H9l-4 4z"/><path d="M8 9h8M8 12h5"/>',
headline:'<circle cx="8" cy="8" r="3"/><path d="M13 6h6M13 10h4M5 16h14M5 19h9"/>',
bio:'<circle cx="9" cy="8" r="3"/><path d="M4 18c.8-3 2.5-4.5 5-4.5s4.2 1.5 5 4.5"/><path d="M16 13h4M18 11v6"/>',
goal:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
skills:'<path d="M5 18V9M10 18V6M15 18v-5M20 18V4"/><path d="M4 18h17"/>',
achievement:'<path d="m5 13 3 3 6-7"/><path d="M15 6h4v4"/><path d="M7 6h4"/>',
calendar:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/><path d="M8 13h3M13 13h3M8 16h3"/>',
experience:'<path d="M6 6h12v14H6z"/><path d="M9 6V4h6v2M9 12h6M9 15h4"/>',
commute:'<path d="M5 16h14l-1-7H6z"/><circle cx="8" cy="17" r="2"/><circle cx="16" cy="17" r="2"/><path d="M9 9V6h6v3"/>',
remote:'<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M9 20h6M12 16v4M8 20h8"/>',
about:'<circle cx="12" cy="8" r="3"/><path d="M5 20c1.2-4.1 3.5-6.2 7-6.2s5.8 2.1 7 6.2"/>',
behavioral:'<path d="M4 6h16v10H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
checklist:'<path d="M5 5h14v15H5z"/><path d="m8 9 1 1 2-2M13 9h3M8 14l1 1 2-2M13 14h3"/>',
increase:'<path d="M6 17 17 6M11 6h6v6"/><path d="M5 20h14"/>',
comp:'<circle cx="12" cy="12" r="8"/><path d="M12 7v10M15 9.5c-.8-1-2-1.5-3.2-1.5-1.7 0-2.8.8-2.8 2 0 3 6 1.2 6 4 0 1.3-1.2 2.5-3 2.5-1.3 0-2.6-.6-3.4-1.6"/>',
gap:'<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 2v6M15 2v6M5 9h14M9 13h2M13 13h2M9 16h5"/>',
deadline:'<circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/><path d="M16 4h3v3"/>',
followup:'<path d="M5 6h14v10H9l-4 3z"/><path d="M8 10h8M8 13h5"/><path d="M16 6v-2"/>',
thanks:'<path d="M4 6h16v12H4z"/><path d="m5 7 7 6 7-6"/><path d="M15 4h5v5"/>',
objective:'<path d="M12 4v5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.6"/><path d="m17 7 2-2M7 7 5 5"/>'
};
const catColors={Resume:"#6257e8","Cover Letter":"#d06a38","Job Search":"#167a75","Interview":"#b24f7e","Salary":"#9a6a12","Career":"#3f6dce"};
const categoryIcons={Resume:svg('<path d="M7 4h10v16H7z"/><path d="M9 8h6M9 12h6M9 16h4"/>'),"Cover Letter":svg('<rect x="4" y="5" width="16" height="14" rx="2"/><path d="m5 7 7 5 7-5"/>'),"Job Search":svg('<circle cx="10" cy="10" r="5"/><path d="m14 14 5 5"/>'),Interview:svg('<path d="M5 6h14v10H9l-4 4z"/><path d="M8 10h8M8 13h5"/>'),Salary:svg('<circle cx="12" cy="12" r="8"/><path d="M12 7v10"/><path d="M15 9.5c-.7-.8-1.7-1.2-3-1.2-1.6 0-2.6.8-2.6 1.9 0 2.7 5.4 1.1 5.4 3.7 0 1.3-1.1 2.4-2.8 2.4-1.2 0-2.2-.4-3.1-1.3"/>'),Career:svg('<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>')};

function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}
function renderIcon(key){return svg(icons[key]||icons.check)}
const grid=document.getElementById("toolGrid"),search=document.getElementById("search"),empty=document.getElementById("emptyState");let activeCategory="";
function render(q=""){
  const term=q.trim().toLowerCase();
  const filtered=tools.filter(t=>(!activeCategory||t[2]===activeCategory)&&t.join(" ").toLowerCase().includes(term));
  grid.innerHTML=filtered.map((t,i)=>`<a class="tool" href="tools/${slug(t[0])}.html" style="--tool-accent:${catColors[t[2]]||"#6257e8"}"><span class="tool-icon">${renderIcon(t[3])}</span><span class="tool-index">${String(i+1).padStart(2,"0")}</span><b>${t[0]}</b><p>${t[1]}</p><span class="tool-footer"><span>${t[2]}</span><i>Open ↗</i></span></a>`).join("");
  empty.hidden=filtered.length>0;
}
search.addEventListener("input",e=>render(e.target.value));
const categoryCards=document.querySelectorAll(".category[data-category]");
categoryCards.forEach(card=>{const icon=card.querySelector(".lane-icon");if(icon)icon.innerHTML=categoryIcons[card.dataset.category]||"";card.addEventListener("click",()=>{activeCategory=card.dataset.category||"";search.value="";categoryCards.forEach(c=>c.classList.toggle("active",c===card));render();});});
document.getElementById("allTools").addEventListener("click",()=>{activeCategory="";search.value="";categoryCards.forEach(c=>c.classList.remove("active"));render();});
render();
const theme=document.getElementById("themeBtn");
function setDark(on){document.body.classList.toggle("dark",on);document.documentElement.style.setProperty("--bg",on?"#0d1117":"#f5f2ea");document.documentElement.style.setProperty("--surface",on?"#151a22":"#fffdf8");document.documentElement.style.setProperty("--ink",on?"#f5f4ef":"#191714");document.documentElement.style.setProperty("--muted",on?"#aab0bb":"#6d6a63");document.documentElement.style.setProperty("--line",on?"#29303b":"#e3dfd6");localStorage.setItem("career-dark",on)}
theme.addEventListener("click",()=>setDark(!document.body.classList.contains("dark")));
if(localStorage.getItem("career-dark")==="true")setDark(true);