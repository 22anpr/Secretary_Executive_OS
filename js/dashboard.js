const PASSWORD='DRLRsec@1';
const DATA={lastUpdated:'Edit Me',updatedBy:'OSD',sections:{
'🏠 Home':['Welcome Sir','Department Status: Stable'],
'📅 Today Agenda':['Edit agenda item 1','Edit agenda item 2'],
'🚨 Priority Tasks':['RCMS','Spatial Mutation','PMU'],
'📂 Pending Files':['Edit file list'],
'⚖ Court Compliance':['Edit compliance items'],
'💡 Innovation Register':['Edit ideas'],
'📝 Meeting Notes':['Edit notes'],
'🤖 AI Suggestions':['Edit suggestions']
}};
function unlock(){if(pw.value===PASSWORD){login.style.display='none';app.style.display='block';init()}else err.textContent='Wrong password';}
function init(){updated.textContent='Last Updated: '+DATA.lastUpdated+' | '+DATA.updatedBy;let n='';Object.keys(DATA.sections).forEach((k,i)=>{n+=`<button onclick="show(${i})">${k}</button>`});nav.innerHTML=n;show(0);}
function show(i){let k=Object.keys(DATA.sections)[i];content.innerHTML='<div class=card><h2>'+k+'</h2><ul>'+DATA.sections[k].map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';}
