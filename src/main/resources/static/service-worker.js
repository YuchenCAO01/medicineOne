if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const u=e=>r(e,l),c={module:{uri:l},exports:o,require:u};s[l]=Promise.all(n.map((e=>c[e]||u(e)))).then((e=>(i(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"medicine-one"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.e4374629.css",revision:null},{url:"/css/app.db751c1b.css",revision:null},{url:"/css/dashboard.67980eb1.css",revision:null},{url:"/css/register.c3fbd6a1.css",revision:null},{url:"/css/resetPassword.cd93e916.css",revision:null},{url:"/img/background.17fc1e83.png",revision:null},{url:"/img/phone_background.b5e47b7e.png",revision:null},{url:"/index.html",revision:"e8ddd51f30026c0ec0daf42b4db6ed5e"},{url:"/js/about.aab11d16.js",revision:null},{url:"/js/app.e49c052b.js",revision:null},{url:"/js/chunk-vendors.5bf2914b.js",revision:null},{url:"/js/dashboard.d5211fb8.js",revision:null},{url:"/js/register.28e6f16f.js",revision:null},{url:"/js/resetPassword.c2726369.js",revision:null},{url:"/manifest.json",revision:"a483bcd6b3914f895fc00dc01dbff84d"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
