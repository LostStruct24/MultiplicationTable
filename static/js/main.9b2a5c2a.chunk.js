(this.webpackJsonpmultiplication=this.webpackJsonpmultiplication||[]).push([[0],{341:function(t,e,n){"use strict";n.r(e);var a=n(12),c=n.n(a),r=n(73),i=n.n(r),s=(n(83),n(84),n(6)),l=function(){return Object(s.jsx)("div",{className:"Navbar",children:Object(s.jsx)("h1",{className:"NavbarTitle",children:"Multiplication Table"})})},o=n(74),u=n(75),j=n(78),d=n(77);n(86);function h(){var t=Math.floor(9*Math.random())+2,e=Math.floor(9*Math.random())+2;return[t,e,t*e]}var b=h(),p=n(43),v=function(t){var e=t.hoursMinSecs,n=e.hours,a=void 0===n?0:n,r=e.minutes,i=void 0===r?0:r,l=e.seconds,o=void 0===l?60:l,u=c.a.useState([a,i,o]),j=Object(p.a)(u,2),d=Object(p.a)(j[0],3),h=d[0],b=d[1],v=d[2],m=j[1],O=function(){return m([parseInt(a),parseInt(i),parseInt(o)])};return c.a.useEffect((function(){var t=setInterval((function(){0===h&&0===b&&0===v?O():m(0===b&&0===v?[h-1,59,59]:0===v?[h,b-1,59]:[h,b,v-1])}),1e3);return function(){return clearInterval(t)}})),Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"".concat(h.toString().padStart(2,"0"),":").concat(b.toString().padStart(2,"0"),":").concat(v.toString().padStart(2,"0"))})})},m=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={value:"",multipInt1:b[0],multipInt2:b[1],productInt:b[2]},t.hoursMinSecs={hours:0,minutes:10,seconds:0},t.getinputValue=function(e){t.setState({value:e.target.value})},t.onButtonClick=function(e){e.preventDefault();var n=t.state.value,a=t.state.productInt;Math.round(n)===Math.round(a)?window.alert("Correct answer"):window.alert("Wrong answer");var c=h();t.setState({multipInt1:c[0]}),t.setState({multipInt2:c[1]}),t.setState({productInt:c[2]})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"MultiplicationTable",children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("div",{className:"timer",children:Object(s.jsx)(v,{hoursMinSecs:this.hoursMinSecs})}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h4",{children:this.state.multipInt1})}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h4",{children:"\xd7"})}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h4",{children:this.state.multipInt2})}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h4",{children:"="})}),Object(s.jsx)("input",{className:"answer",type:"number",onChange:this.getinputValue}),Object(s.jsx)("button",{className:"btn",onClick:this.onButtonClick,children:"\u2713"})]})})}}]),n}(a.Component),O=n(76),x=n.n(O),f={particles:{line_linked:{color:"#8BB174"},number:{value:15,density:{enable:!0,value_area:800}}}};var N=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{}),Object(s.jsx)(m,{}),Object(s.jsx)("div",{className:"particle",children:Object(s.jsx)(x.a,{className:"particles",params:f})})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))},83:function(t,e,n){},84:function(t,e,n){},86:function(t,e,n){}},[[341,1,2]]]);
//# sourceMappingURL=main.9b2a5c2a.chunk.js.map