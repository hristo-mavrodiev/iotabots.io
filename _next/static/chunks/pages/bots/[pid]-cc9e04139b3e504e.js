(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{54845:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bots/[pid]",function(){return e(8044)}])},8044:function(t,n,e){"use strict";e.r(n);var o=e(28520),i=e.n(o),r=e(85893),a=e(67294),c=e(27680),s=e(11163),u=e(25675),d=e(9008);function l(t,n,e,o,i,r,a){try{var c=t[r](a),s=c.value}catch(u){return void e(u)}c.done?n(s):Promise.resolve(s).then(o,i)}function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],o=!0,i=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);o=!0);}catch(s){i=!0,r=s}finally{try{o||null==c.return||c.return()}finally{if(i)throw r}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=function(){var t=h(a.useState(null),2),n=t[0],e=t[1],o=(0,s.useRouter)().query.pid;return a.useEffect((function(){var t;(t=i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://assets.iotabots.io/".concat(o,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e(r);case 7:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(o,i){var r=t.apply(n,e);function a(t){l(r,o,i,a,c,"next",t)}function c(t){l(r,o,i,a,c,"throw",t)}a(void 0)}))})().catch((function(t){console.log(t)}))}),[o]),(0,r.jsxs)(c.BaseLayout,{children:[(0,r.jsxs)(d.default,{children:[(0,r.jsx)("meta",{name:"og:image",content:null===n||void 0===n?void 0:n.image},"og:image"),(0,r.jsx)("meta",{name:"description",content:"Say hello to IOTABOT ".concat(null===n||void 0===n?void 0:n.name,"!")},"description")]}),(0,r.jsx)(c.Section,{children:(0,r.jsx)(c.Container,{maxWidth:"sm",children:(0,r.jsx)(c.Box,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,r.jsxs)(c.BotCard,{image:(0,r.jsx)(u.default,{src:"https://assets.iotabots.io/compressed/".concat(null===n||void 0===n?void 0:n.edition,".png"),alt:"IOTABOT",layout:"intrinsic",width:400,height:400}),headline:"IOTABOT #".concat(null===n||void 0===n?void 0:n.edition),text:"",maxWidth:"400px",rounded:!0,children:[(0,r.jsx)(c.Typography,{gutterBottom:!0,variant:"body1",children:"DNA ".concat(null===n||void 0===n?void 0:n.dna)}),(0,r.jsx)(c.Typography,{gutterBottom:!0,variant:"body1",children:"Edition ".concat(null===n||void 0===n?void 0:n.edition)}),(0,r.jsx)(c.Typography,{gutterBottom:!0,variant:"body1",children:"Created on ".concat(new Date(null===n||void 0===n?void 0:n.date).toLocaleDateString())})]})})})})]})}}},function(t){t.O(0,[675,774,888,179],(function(){return n=54845,t(t.s=n);var n}));var n=t.O();_N_E=n}]);