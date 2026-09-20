import fs from 'node:fs';
import path from 'node:path';

const R=process.cwd(), D=path.join(R,'src'), files=[];
function walk(dir){if(!fs.existsSync(dir))return;for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);e.isDirectory()?walk(p):files.push(p);}}
walk(D);
const css=files.filter(x=>x.endsWith('.css')).map(x=>fs.readFileSync(x,'utf8')).join('\n');
const src=files.filter(x=>x.endsWith('.astro')||x.endsWith('.mdx')).map(x=>fs.readFileSync(x,'utf8')).join('\n');
const findings=[];
function add(s,a,t,e,r){findings.push({s,a,t,e,r});}
function n(re,s){return (s.match(re)||[]).length;}
function uniq(a){return [...new Set(a)];}

const required=['--color-bg','--color-bg-soft','--color-surface','--color-border','--color-border-strong','--color-text','--color-text-soft','--color-text-muted','--color-accent','--color-accent-strong','--color-accent-bg','--color-link','--font-ui','--font-serif','--maxw','--maxw-text'];
for(const t of required)if(!css.includes(t+':'))add('HIGH','tokens','Missing token '+t,'Required semantic token is absent.','Define one canonical token or remove the dependency.');

const cssNonTokens=css.replace(/--[A-Za-z0-9_-]+\s*:\s*[^;{}]+;/g,'');
const colors=uniq((cssNonTokens.match(/#[0-9a-fA-F]{3,8}\b/g)||[]).map(x=>x.toLowerCase()));
if(colors.length>25)add('MEDIUM','tokens','Many hard-coded colors',colors.length+' distinct hex colors are present.','Keep semantic colors in tokens and document exceptions.');
const radii=uniq([...cssNonTokens.matchAll(/border-radius:\s*([^;]+)/g)].map(m=>m[1].trim()));
if(radii.length>4)add('LOW','visual-language','Many corner-radius values',radii.join(', '),'Use a small intentional radius vocabulary.');
const shadows=uniq([...cssNonTokens.matchAll(/box-shadow:\s*([^;]+)/g)].map(m=>m[1].trim()));
if(shadows.length>3)add('LOW','visual-language','Many shadow treatments',shadows.join(', '),'Avoid generic SaaS elevation unless it has a clear semantic role.');

if(/Avenir Next/.test(css)&&/Baskerville/.test(css))add('MEDIUM','typography','Platform-dependent editorial typography','Avenir Next/Baskerville/Iowan Old Style may be unavailable on Windows/Linux.','Render on Windows, macOS and Linux and verify fallback hierarchy.');
if(/system-ui/i.test(cssNonTokens))add('LOW','typography','Competing UI font definitions','An unrelated system-ui declaration competes with the project UI stack.','Keep one documented UI stack with robust fallbacks.');
if(/line-height:\s*0\.[0-9]+/.test(css))add('MEDIUM','typography','Very tight line-height','A line-height below 1 is used.','Restrict this to large display headings and test Ukrainian wrapping.');
if(/font-size:\s*0\.[0-6][0-9]rem/.test(css))add('MEDIUM','typography','Very small typography','Sub-0.7rem text exists.','Check readability at default and 200% zoom.');
if(/max-width:\s*1[01]ch/.test(cssNonTokens))add('MEDIUM','responsive','Very narrow hero measure','Hero heading uses a very narrow character measure.','Test 320/375/430px with long Ukrainian words.');

if(!/:focus-visible/.test(css))add('HIGH','accessibility','No :focus-visible rule','Keyboard focus styling was not detected.','Provide a persistent high-contrast focus indicator.');
if(!/prefers-reduced-motion/.test(css))add('HIGH','accessibility','No reduced-motion strategy','prefers-reduced-motion was not detected.','Disable non-essential motion for users who request reduced motion.');
if(!/<html[^>]*\blang=/.test(src))add('HIGH','accessibility','No html lang detected','Document language was not detected.','Declare the correct language on html.');
if(!/<main\b/.test(src))add('HIGH','accessibility','No main landmark detected','No main element was detected.','Use one main landmark per page.');
for(const b of [...src.matchAll(/<button\b[\s\S]*?>/g)].map(m=>m[0]))if(!/aria-label=|>\s*[^<]+\s*<\/button>/.test(b))add('HIGH','accessibility','Possibly unnamed button',b.replace(/\s+/g,' ').slice(0,160),'Give icon-only buttons an accessible name.');
for(const i of [...src.matchAll(/<input\b[\s\S]*?>/g)].map(m=>m[0]))if(!/aria-label=|aria-labelledby=|id=/.test(i))add('HIGH','accessibility','Possibly unnamed input',i.replace(/\s+/g,' ').slice(0,160),'Associate inputs with labels or accessible names.');
for(const i of [...src.matchAll(/<img\b[\s\S]*?>/g)].map(m=>m[0]))if(!/\balt=/.test(i))add('HIGH','accessibility','Image without alt',i.slice(0,160),'Use meaningful alt text or alt="" for decorative images.');
if(/text-transform:\s*uppercase/.test(css)&&/font-size:\s*0\.[0-7]rem/.test(css))add('MEDIUM','accessibility','Tiny uppercase text','Uppercase labels use sub-0.7rem sizing.','Verify readability at 200% zoom and on mobile.');
if(/a\s*\{[^}]*text-decoration:\s*none/.test(css))add('MEDIUM','accessibility','Links may lose non-color affordance','Some link rules remove underlines.','Keep body links distinguishable without hover; card/nav exceptions should have another clear affordance.');

const min=uniq([...css.matchAll(/@media\s*\([^)]*min-width\s*:\s*(\d+)px/g)].map(m=>+m[1])).sort((a,b)=>a-b);
const max=uniq([...css.matchAll(/@media\s*\([^)]*max-width\s*:\s*(\d+)px/g)].map(m=>+m[1])).sort((a,b)=>a-b);
console.log('min breakpoints:',min.join(', ')||'none');
console.log('max breakpoints:',max.join(', ')||'none');
if(min.length>5||max.length>5)add('LOW','responsive','Large breakpoint vocabulary','min: '+min.join(', ')+'; max: '+max.join(', '),'Consolidate around actual content failures.');
if(/display:\s*none/.test(css)&&/@media\s*\(max-width/.test(css)&&!(/\.mobile-menu\.open/.test(css)&&/\.toc-mobile/.test(css)))add('MEDIUM','responsive','Responsive hiding detected','Responsive content is hidden without the known mobile navigation/TOC equivalents.','Verify hidden content has an equivalent mobile path.');
if(/overflow-x:\s*auto/.test(css)&&!(/\.table-scroll/.test(css)&&/table\.gram/.test(css)))add('LOW','responsive','Horizontal scrolling containers','Overflow scrolling exists outside the documented wide-table system.','Restrict scrolling to genuinely wide data and verify scroll affordance.');
// Sticky navigation is intentional; viewport behavior remains a manual browser-audit item.

const components=['site-header','site-footer','page-head','prose','layout-doc','toc','toc-mobile','breadcrumbs','grid-categories','card','card-topic','formula','example','mistake','minpair','note','related','search-bar'];
const missing=components.filter(x=>!css.includes('.'+x));
if(missing.length)add('HIGH','components','Missing required component styles',missing.join(', '),'Define or remove components so templates and CSS remain aligned.');
const inline=n(/\sstyle=["']/g,src);
if(inline)add('MEDIUM','components',inline+' inline style attribute(s)','Presentation rules are embedded in templates.','Move recurring decisions into named classes/tokens.');
if(/color-scheme:\s*light dark/.test(css))add('MEDIUM','theme','Ambiguous color-scheme declaration','Both themes are advertised simultaneously at the root.','Declare light at root and dark inside the dark-mode media query.');

function lum(h){let x=h.slice(1);if(x.length===3)x=x.split('').map(c=>c+c).join('');if(x.length!==6)return null;const c=[0,2,4].map(i=>parseInt(x.slice(i,i+2),16)/255);const f=v=>v<=.03928?v/12.92:((v+.055)/1.055)**2.4;return .2126*f(c[0])+.7152*f(c[1])+.0722*f(c[2]);}
function cr(a,b){const x=lum(a),y=lum(b);if(x==null||y==null)return null;const hi=Math.max(x,y),lo=Math.min(x,y);return(hi+.05)/(lo+.05);}
for(const p of [['#66665e','#f3eee4'],['#7b786f','#f3eee4'],['#8f3023','#f3eee4'],['#b83f2d','#f3eee4'],['#c2beb4','#171815'],['#a5a096','#171815'],['#77c2c8','#171815']]){const c=cr(p[0],p[1]);if(c<4.5)add('HIGH','color','Potential AA contrast issue: '+p[0]+' on '+p[1],'Estimated ratio '+c.toFixed(2)+':1.','Verify in a rendered contrast checker and adjust semantic tokens if needed.');}

const out=path.join(R,'AUDIT-DESIGN-DEEP-'+new Date().toISOString().slice(0,10)+'.md');
const report=['# Deep Design Audit — Gramaticarrona','', 'Source files: '+files.length,'','## Result','', 'Findings: '+findings.length+' — HIGH '+findings.filter(x=>x.s==='HIGH').length+', MEDIUM '+findings.filter(x=>x.s==='MEDIUM').length+', LOW '+findings.filter(x=>x.s==='LOW').length+'.','','## Findings','',...findings.map((f,i)=>'### '+(i+1)+'. ['+f.s+'] '+f.a+' — '+f.t+'\n\n**Evidence:** '+f.e+'\n\n**Recommendation:** '+f.r),'','## Mandatory browser audit','','- 320×800, 375×812, 430×932, 768×1024, 1024×768, 1440×900, 1920×1080.','- Light/dark mode and 100/125/150/200% zoom.','- Keyboard-only traversal including skip link, nav, search, TOC, related links and footer.','- Long Ukrainian headings, long Spanish examples, formulas, mistakes, notes, tables and minimal pairs.','- Search: empty, normal, no-result and long query.','- Mobile menu and TOC open/close/focus order.','- Horizontal overflow: only intentionally scrollable data may overflow.','- Sticky header/TOC at short viewport heights.','- Home, index, category, article, comparison, search and 404 as one coherent system.','','## Visual direction','','Treat the site as an editorial linguistic handbook: typography, indexing, rules and information hierarchy should carry the identity. Avoid generic SaaS cards, gradients, glass effects, gratuitous shadows and motion without informational purpose.'].join('\n');
fs.writeFileSync(out,report+'\n','utf8');
console.log('required styles:',components.length);
console.log('missing:',missing.length?missing.join(', '):'none');
console.log('deep design findings:',findings.length);
console.log('HIGH:',findings.filter(x=>x.s==='HIGH').length);
console.log('MEDIUM:',findings.filter(x=>x.s==='MEDIUM').length);
console.log('LOW:',findings.filter(x=>x.s==='LOW').length);
console.log('report:',path.basename(out));
if(findings.some(x=>x.s==='HIGH'))process.exitCode=1;