(this.webpackJsonpurlshortner=this.webpackJsonpurlshortner||[]).push([[0],{57:function(t,e,n){},66:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),i=n(45),r=n.n(i),s=(n(57),n(18)),a=n(101),l=n(103),b=n(3),u=function(){return Object(b.jsx)(a.a,{position:"absolute",style:{backgroundColor:"transparent",height:"10%"},children:Object(b.jsx)(l.a,{variant:"dense",children:Object(b.jsx)(s.c,{to:"./",style:{color:"cyan",textDecoration:"none",marginTop:"18px",marginLeft:"200px",fontSize:35,fontFamily:"arial"},children:"INFINITLY"})})})},h=n(34),j=n.n(h),d=n(50),p=n(5),x=n(35),O=n(27),f=(n(66),n(32)),m=n.n(f),y=(n(85),["btn--primary","btn--outline","btn--test"]),g=["btn--medium","btn--large"],v=function(t){var e=t.children,n=t.type,c=t.onClick,o=t.buttonStyle,i=t.buttonSize,r=y.includes(o)?o:y[0],a=g.includes(i)?i:g[0];return Object(b.jsx)(s.b,{to:"/",className:"btn-mobile",children:Object(b.jsx)("button",{className:"btn ".concat(r," ").concat(a),onClick:c,type:n,children:e})})};n(86);var k=function(){var t=Object(c.useState)({hash:"",url:"",date:""}),e=Object(O.a)(t,2),n=e[0],o=e[1],i=function(){var t=Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m.a.post("https://cryptic-headland-94862.herokuapp.com/https://infinitly.herokuapp.com/",n).then((function(t){console.log(t),o(t.data)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"hero-container",children:[Object(b.jsx)("h1",{children:"TIRED OF REMEMBERING LONG URLS?"}),Object(b.jsx)("p",{children:"What are you waiting for? Shorten them Right Now!"}),Object(b.jsxs)("div",{className:"hero-btns",children:[Object(b.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"}),Object(b.jsxs)("div",{class:"container",children:[Object(b.jsxs)("div",{class:"material-textfield",children:[Object(b.jsx)("input",{placeholder:" ",type:"text",onChange:function(t){return function(t){console.log(t.target.value),o(Object(x.a)(Object(x.a)({},n),{},Object(p.a)({},t.target.name,t.target.value)))}(t)},name:"url",id:"my-input"}),Object(b.jsx)("label",{children:"Enter URL"})]}),Object(b.jsx)(v,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:function(t){console.log(n),i(n)},children:"Shorten URL"})]}),Object(b.jsx)("div",{class:"box",children:Object(b.jsxs)("div",{class:"inner-box",children:[Object(b.jsxs)("div",{class:"text",children:["Here is your shortened URL:  https://infinitly.herokuapp.com/",n.hash," "]}),Object(b.jsx)(v,{className:"but",buttonStyle:"btn1--outline",buttonSize:"btn1--large",onClick:function(t){navigator.clipboard.writeText(" https://infinitly.herokuapp.com/".concat(n.hash))},children:"Copy Link"})]})})]})]})};var S=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(k,{})]})})};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.d21709bd.chunk.js.map