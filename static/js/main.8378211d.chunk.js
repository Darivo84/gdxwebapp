(this.webpackJsonpgdx=this.webpackJsonpgdx||[]).push([[0],{65:function(n,t,e){"use strict";e.r(t);var c,a,o,i,r,s,l,d=e(0),u=e.n(d),h=e(32),p=e.n(h),b=e(15),x=e(2),j=e(8),f=e(9),g=e(14),m=e.n(g),O=e(18),v=e(21),w=e(33),y=e.n(w),k=e(1),N=f.a.div(c||(c=Object(j.a)(["\n  width: 250px;\n  height: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.3);\n"]))),S=function(){var n=Object(d.useState)(!1),t=Object(v.a)(n,2),e=(t[0],t[1]),c=Object(d.useState)(null),a=Object(v.a)(c,2),o=(a[0],a[1]),i=Object(x.f)(),r=function(){var n=Object(O.a)(m.a.mark((function n(){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("https://misso.ml/api/v1/auth/user",{withCredentials:!0}).catch((function(n){console.log("Not properly authenticated"),e(!1),o(null)}));case 2:(t=n.sent)&&t.data&&(console.log("User: ",t.data),e(!0),o(t.data),i.push("https://darivo84.github.io/gdxwebapp/#/welcome"));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=Object(O.a)(m.a.mark((function n(){var t,e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=null,"https://misso.ml/api/v1/login/google",(e=window.open("https://misso.ml/api/v1/login/google","_blank","width=500,height=600"))&&(t=setInterval((function(){e.closed&&(console.log("Yay!!! We are authenticated!"),r(),t&&clearInterval(t))}),500));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(k.jsx)(b.b,{onClick:s,style:{color:"white",fontSize:"18px",fontFamily:"Nunito",fontWeight:"bold",textDecoration:"none",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"},children:Object(k.jsx)(N,{children:"Login"})})},D=f.a.div(a||(a=Object(j.a)(["\n  width: 100%;\n  height: 100vh;\n  background: #000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),I=f.a.h1(o||(o=Object(j.a)(["\n  color: #5c5858;\n  font-family: 'Nunito';\n  padding-bottom: 15px;\n"]))),W=f.a.div(i||(i=Object(j.a)(["\n  width: 50vw;\n  height: 60vh;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;\n"]))),z=f.a.p(r||(r=Object(j.a)(["\n  color: #fff;\n  font-family: 'Nunito';\n  font-size: 18px;\n  text-align: center;\n  padding-bottom: 15px;\n"]))),C=function(){return Object(k.jsxs)(D,{children:[Object(k.jsx)(I,{children:"Welcome to Global Data Exchange | GDX"}),Object(k.jsxs)(W,{children:[Object(k.jsx)(z,{children:" Please login to access our site"}),Object(k.jsx)(S,{})]})]})},E=f.a.div(s||(s=Object(j.a)(["\n  width: 100%;\n  height: 100vh;\n  background: #000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),G=f.a.h1(l||(l=Object(j.a)(["\n  color: #5c5858;\n  font-family: 'Nunito';\n  padding-bottom: 15px;\n"]))),J=function(){return Object(k.jsx)(E,{children:Object(k.jsx)(G,{children:"Thanks for logging in."})})};var B=function(){return Object(k.jsx)(b.a,{basename:"/gdxwebapp",children:Object(k.jsxs)(x.c,{children:[Object(k.jsx)(x.a,{exact:!0,path:"/",component:C}),Object(k.jsx)(x.a,{path:"/welcome",component:J})]})})};p.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.8378211d.chunk.js.map