(this["webpackJsonpurl-formatter"]=this["webpackJsonpurl-formatter"]||[]).push([[0],{11:function(e,t,a){},23:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(10),s=a.n(n),i=(a(23),a(9)),l=(a(11),a(35)),o=a(36),j=a(1);var h=function(e){return Object(j.jsxs)(l.a,{bg:"primary",expand:"lg",variant:"dark",children:[Object(j.jsx)(l.a.Brand,{href:"#",onClick:function(){return e.change("home")},children:"Url-Formatter"}),Object(j.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(o.a,{className:"me-auto",children:[Object(j.jsx)(o.a.Link,{onClick:function(){return e.change("home")},children:"Home"}),Object(j.jsx)(o.a.Link,{onClick:function(){return e.change("about")},children:"About"})]})})]})};var b=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),r=a[0],n=a[1],s=Object(c.useState)([]),l=Object(i.a)(s,2),o=l[0],h=l[1],b=new RegExp(/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/);return Object(c.useEffect)((function(){n(e.text)}),[e.text]),Object(c.useEffect)((function(){for(var e=r.split("\n"),t=1;t<e.length;t+=2)e.splice(t,0,"\n");for(var a=0;a!==e.length;){if("\n"===e[a]);else if(e[a].includes(" ")){var c=e[a].split(" ");e.splice(a,0,c[0]),e[a+1]=c.slice(1,c.length).join(" ")}a++}h(e)}),[r]),Object(j.jsx)("div",{className:"flex-layout result",children:o.map((function(e,t){return"\n"===e?Object(j.jsx)("div",{className:"break"},t):" "===e?Object(j.jsx)("div",{className:"space"},t):e.match(b)?Object(j.jsx)("a",{className:"word",rel:"noopener noreferrer",target:"_blank",href:e,children:e},t):Object(j.jsx)("div",{className:"word",children:e},t)}))})};var d=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"my-container",children:[Object(j.jsx)("h3",{children:"Initial"}),Object(j.jsx)("div",{className:"break"}),Object(j.jsx)("textarea",{className:"bordered",placeholder:"Your text here...",value:a,onChange:function(e){r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"my-container",children:[Object(j.jsx)("h3",{style:{marginTop:"40px"},children:"Formatted"}),Object(j.jsx)("div",{className:"break"}),Object(j.jsx)(b,{text:a})]})]})};var u=function(){return Object(j.jsxs)("div",{className:"about-container",children:[Object(j.jsxs)("div",{className:"flex-layout with-whitespace",children:["Hello, I am ",Object(j.jsx)("a",{href:"https://www.github.com/John-Atha",rel:"noopener noreferrer",target:"_blank",children:"John-Atha"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:"This is a simple reactJs project"}),Object(j.jsx)("div",{children:"It uses a small javascript code snippet and some decoration with HTML and CSS"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:"The aim is to turn the urls of a text to clickable hrefs, keeping the relative positioning of all the words and other elements of the text."}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:"I have been looking for an easy way to format the text this way in some projects I have build, as it can seem very useful for UX."})]})};var x=function(){var e=Object(c.useState)("home"),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{change:r}),"home"===a&&Object(j.jsx)(d,{}),"about"===a&&Object(j.jsx)(u,{})]})};a(31);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.245d9230.chunk.js.map