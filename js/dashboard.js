const PASSWORD='DRLRsec@1';
const DATA={lastUpdated:'Edit Me',updatedBy:'OSD',sections:{
'🏠 Home':['Welcome Sir','Department Status: Stable'],
'📅 Today Agenda':['Letter for 16th july meeting on VC with all Revenue Officers - Status: Explained to Sec 10 to draft the letter and IT section to prepare ppt','Letter to depute and authorize SDRO to ACs in revenue court assistance - Status - explained section 3 to draft','VC system real time mock court in 1 sub-division - Status : Only in 2nd half it will be confirmed', 'Sahyog Shivir Report preparation - status - 120+ at 11 am','  ],
'🚨 Priority Tasks':['RCMS VC System','Spatial Mutation','PMU'],
'📂 Pending Files':['Edit file list'],
'⚖ Court Compliance':['Edit compliance items'],
'💡 Innovation Register':['Edit ideas'],
'📝 Meeting Notes':['Edit notes'],
'🤖 Suggestions':['Edit suggestions']
}};
function unlock(){if(pw.value===PASSWORD){login.style.display='none';app.style.display='block';init()}else err.textContent='Wrong password';}
function init(){updated.textContent='Last Updated: '+DATA.lastUpdated+' | '+DATA.updatedBy;let n='';Object.keys(DATA.sections).forEach((k,i)=>{n+=`<button onclick="show(${i})">${k}</button>`});nav.innerHTML=n;show(0);}
function show(i){let k=Object.keys(DATA.sections)[i];content.innerHTML='<div class=card><h2>'+k+'</h2><ul>'+DATA.sections[k].map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';}
