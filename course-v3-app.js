(function(){
const course=window.GO_COURSE_V2,cur=window.COURSE_CURATION_V3;
let current=Number(localStorage.getItem("curated-course-week")||1);
if(current<1||current>52)current=1;
const $=id=>document.getElementById(id), all=s=>document.querySelectorAll(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const host=u=>{try{return new URL(u).hostname.replace(/^www\./,"")}catch{return ""}};
const gradeClass=g=>"grade-"+g.replace("+","p").replace("-","m").toLowerCase();
function phaseIndex(w){return Math.min(6,Math.floor((w-1)/8))}
function phaseBounds(i){return i<6?[i*8+1,i*8+8]:[49,52]}
function metaFor(r){
  const h=host(r.url);
  let m=r.metaId?cur.featured.find(x=>x.id===r.metaId):null;
  if(!m)m=cur.featured.find(x=>r.url&&x.url===r.url); if(!m&&h!=="github.com")m=cur.featured.find(x=>host(x.url)===h);
  if(m)return m;
  if(/go\.dev|pkg\.go\.dev|mysql\.com|redis\.io|apache\.org|grpc\.io|opentelemetry\.io|prometheus\.io|modelcontextprotocol\.io/.test(h))
    return {grade:"A",type:"官方文档",cost:"免费",lang:"英文",fit:"用于核对机制、API 和边界。",proof:"由项目或标准官方维护。",limit:"只读本周指定范围，不通读。"};
  if(/xiaolin/.test(h))return cur.featured.find(x=>x.id==="xiaolin");
  if(/github\.com/.test(h))return {grade:"B+",type:"开源资料",cost:"免费",lang:"中/英文",fit:"用于代码或结构参考。",proof:"公开仓库，可检查提交与问题记录。",limit:"不能仅凭 stars 判断正确性。"};
  return {grade:"B",type:"专业参考",cost:"免费",lang:"英文",fit:"用于本周专题补充。",proof:"作者或机构在该领域具有明确背景。",limit:"关键结论继续与官方资料交叉核对。"};
}
function authorityScore(r){
  const h=host(r.url);
  if(/go\.dev|pkg\.go\.dev|mysql\.com|redis\.io|apache\.org|grpc\.io|opentelemetry\.io|prometheus\.io|modelcontextprotocol\.io|cloudwego\.io|aws\.amazon\.com|pdos\.(csail|lcs)\.mit\.edu|stanford\.edu|owasp\.org/.test(h))return 3;
  if(/anthropic\.com|martinfowler\.com|jepsen\.io|wisc\.edu|sre\.google/.test(h))return 2;
  return 1;
}
function chosenResources(n){
  const base=course.weeks[n-1].resources.filter(x=>x.url);
  const extra=cur.extras[n]||[];
  const guide=cur.guides&&cur.guides[n];
  if(guide){
    const candidates=[...base,...extra].filter(x=>x.url&&x.url!==guide.url).sort((a,b)=>authorityScore(b)-authorityScore(a));
    return [{...guide,role:"guide"}].concat(candidates[0]?[{...candidates[0],role:"authority"}]:[]);
  }
  const seen=new Set(),out=[];
  [...extra,...base].forEach(x=>{if(x.url&&!seen.has(x.url)&&out.length<2){seen.add(x.url);out.push({...x,role:out.length?"supplement":"main"})}});
  return out;
}
function isDone(w,i){return localStorage.getItem("curated-done-"+w+"-"+i)==="1"}
function renderResource(r,i,n){
  const m=metaFor(r),done=isDone(n,i);
  return '<article class="resource-card '+(done?'is-done':'')+'">'+
   '<div class="resource-index">0'+(i+1)+'</div><div class="resource-content">'+
   '<div class="resource-meta"><span class="role '+esc(r.role||"main")+'">'+esc(r.role==="guide"?"讲解先读":r.role==="authority"?"权威核对":i===0?"主资料":"补充资料")+'</span><span class="grade '+gradeClass(m.grade)+'">'+esc(m.grade)+'</span><span>'+esc(m.cost)+'</span><span>'+esc(m.lang)+'</span></div>'+
   '<h2>'+esc(r.name)+'</h2><p class="scope-label">本周只看</p><p class="scope-text">'+esc(r.scope)+'</p>'+
   '<p class="fit">'+esc(m.fit)+'</p>'+
   '<div class="resource-actions"><a class="open-link" href="'+esc(r.url)+'" target="_blank" rel="noopener">打开资料 <span>↗</span></a>'+
   '<button class="done-btn" data-done="'+i+'">'+(done?'已完成 ✓':'读完标记')+'</button></div>'+
   '<details><summary>为什么选它 / 有什么限制</summary><div class="audit-note"><b>验证：</b>'+esc(m.proof)+'<br><b>限制：</b>'+esc(m.limit)+'</div></details>'+
   '</div></article>';
}
function renderWeek(n){
 current=Math.max(1,Math.min(52,n));localStorage.setItem("curated-course-week",current);
 const w=course.weeks[current-1],pi=phaseIndex(current),resources=chosenResources(current);
 $("week-number").textContent=String(current).padStart(2,"0");
 $("week-stage").textContent=w.stage;
 $("week-title").textContent=w.title;
 $("week-outcome").textContent=w.outcome;
 $("week-hours").textContent=w.hours;
 $("week-select").value=current;
 $("resource-count").textContent=resources.length+" 份";
 $("resource-list").innerHTML=resources.map((r,i)=>renderResource(r,i,current)).join("");
 $("empty-resource").hidden=resources.length>0;
 all(".phase-button").forEach((b,i)=>b.setAttribute("aria-current",i===pi?"true":"false"));
 const bounds=phaseBounds(pi);$("phase-range").textContent=course.okrs[pi].range;
 $("phase-name").textContent=course.okrs[pi].name.replace(/^OKR \d+ · /,"");
 $("week-dots").innerHTML="";
 for(let x=bounds[0];x<=bounds[1];x++){
   const b=document.createElement("button");b.className="week-dot";b.textContent="W"+x;
   b.setAttribute("aria-current",x===current?"true":"false");b.title=course.weeks[x-1].title;
   b.onclick=()=>renderWeek(x);$("week-dots").appendChild(b);
 }
 all("[data-done]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.done),k="curated-done-"+current+"-"+i;localStorage.setItem(k,isDone(current,i)?"0":"1");renderWeek(current)});
 $("prev").disabled=current===1;$("next").disabled=current===52;
}
function renderPhases(){
 $("phase-list").innerHTML=course.okrs.map((o,i)=>'<button class="phase-button" data-phase="'+i+'"><span class="phase-no">0'+(i+1)+'</span><span><b>'+esc(o.name.replace(/^OKR \d+ · /,""))+'</b><small>'+esc(o.range)+'</small></span></button>').join("");
 all("[data-phase]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.phase);renderWeek(phaseBounds(i)[0])});
}
function renderLibrary(){
 const q=($("library-search").value||"").toLowerCase(),type=$("library-type").value;
 const items=cur.featured.filter(x=>(type==="all"||x.type===type)&&(!q||(x.name+x.fit+x.type).toLowerCase().includes(q)));
 $("library-count").textContent=items.length+" 项";
 $("library-grid").innerHTML=items.map(x=>'<article class="library-card"><div class="library-top"><span class="grade '+gradeClass(x.grade)+'">'+esc(x.grade)+'</span><span>'+esc(x.type)+'</span><span>'+esc(x.cost)+'</span></div><h3>'+esc(x.name)+'</h3><p>'+esc(x.fit)+'</p><div class="library-proof">'+esc(x.proof)+'</div><details><summary>适用限制</summary><p>'+esc(x.limit)+'</p></details><a href="'+esc(x.url)+'" target="_blank" rel="noopener">访问资料 ↗</a></article>').join("");
}
function renderRoadmap(){
 $("roadmap").innerHTML=course.okrs.map((o,i)=>{const [s,e]=phaseBounds(i);let weeks="";
 for(let w=s;w<=e;w++){const rs=chosenResources(w);weeks+='<button class="road-week" data-road-week="'+w+'"><span>W'+w+'</span><b>'+esc(course.weeks[w-1].title)+'</b><small>'+esc(rs.map(x=>x.name).join(" + ")||"复盘与答辩")+'</small></button>'}
 return '<section class="road-phase"><header><div><span>'+esc(o.range)+'</span><h2>'+esc(o.name)+'</h2></div><p>'+esc(o.outcome)+'</p></header><div class="road-weeks">'+weeks+'</div></section>'}).join("");
 all("[data-road-week]").forEach(b=>b.onclick=()=>{renderWeek(Number(b.dataset.roadWeek));all("[data-view='week-view']")[0].click()});
}
function renderAudit(){
 $("verified-date").textContent=cur.verifiedAt;
 $("rejected").innerHTML=cur.rejected.map(x=>'<div class="reject-item"><b>'+esc(x.name)+'</b><p>'+esc(x.reason)+'</p></div>').join("");
}
function setup(){
 course.weeks.forEach((w,i)=>{const o=document.createElement("option");o.value=i+1;o.textContent="第 "+(i+1)+" 周 · "+w.title;$("week-select").appendChild(o)});
 const types=[...new Set(cur.featured.map(x=>x.type))];types.forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;$("library-type").appendChild(o)});
 all(".nav-tab").forEach(b=>b.onclick=()=>{all(".nav-tab").forEach(x=>x.setAttribute("aria-selected","false"));all(".view").forEach(x=>x.classList.remove("active"));b.setAttribute("aria-selected","true");$(b.dataset.view).classList.add("active")});
 $("week-select").onchange=e=>renderWeek(Number(e.target.value));$("prev").onclick=()=>renderWeek(current-1);$("next").onclick=()=>renderWeek(current+1);
 $("library-search").oninput=renderLibrary;$("library-type").onchange=renderLibrary;
 renderPhases();renderWeek(current);renderLibrary();renderRoadmap();renderAudit();
}
setup();
})();