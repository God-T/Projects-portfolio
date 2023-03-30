(()=>{"use strict";var e,t={2442:(e,t,n)=>{n.d(t,{T0:()=>c,jK:()=>r,kC:()=>a,x:()=>l});var o=n(6452);function a(){(0,o.h)(".nav-menu__link",{cb:function(e){e.classList.add("slideIn--bottom-up--active")},isLooping:!0})}var r=function(e,t){document.querySelectorAll(e).forEach((function(e){return e.classList.remove(t+"--active")}))},c=function(e,t){document.querySelectorAll(e).forEach((function(e){return e.classList.add(t+"--active")}))},l=function(e,t,n){document.querySelectorAll(e).forEach((function(e,o){setTimeout((function(){return e.classList.add(t+"--active")}),o*n)}))}},8955:(e,t,n)=>{n.d(t,{CF:()=>c,JB:()=>m,Q4:()=>d,Rx:()=>r,Us:()=>l,gk:()=>s,kp:()=>u,ku:()=>a,u3:()=>i,uP:()=>f});var o=n(6633),a=function(e){try{var t=o.F6.projectsDetails;return(t=t.filter((function(t){return t.id!=e.id}))).map((function(e){return{id:e.id,name:e.name,type:e.type}}))}catch(e){alert("Failed to load project list"),console.log(e)}},r=function(){try{return o.v6.landing}catch(e){alert("Failed to load landing details"),console.log(e)}},c=function(){try{return o.v6.logo}catch(e){alert("Failed to load logo details"),console.log(e)}},l=function(){try{return o.v6.about}catch(e){alert("Failed to load about details"),console.log(e)}},i=function(){try{return o.v6.footer}catch(e){alert("Failed to load footer details"),console.log(e)}},d=function(e){try{return o.hT.get(e)}catch(e){alert("Failed to load image src"),console.log(e)}},s=function(){try{return o.DU}catch(e){alert("Failed to load nav menu component content"),console.log(e)}},u=function(){try{return o.XS}catch(e){alert("Failed to load logo component content"),console.log(e)}},m=function(){try{return o.mf}catch(e){alert("Failed to load footer component content"),console.log(e)}},f=function(){try{return o.V$}catch(e){alert("Failed to load contact component content"),console.log(e)}}},6633:(e,t,n)=>{n.d(t,{DU:()=>u,F6:()=>s,V$:()=>v,XS:()=>m,hT:()=>g,mf:()=>f,v6:()=>d});var o=n(5015),a=n(1189),r=n(5968),c=n(6970),l=n(9889),i=n(9512),d=JSON.parse(o),s=JSON.parse(a),u=r.Z,m=c.Z,f=l.Z,v=i.Z;function p(e){var t=new Map;return e.keys().forEach((function(n){t.set(n.slice(2),e(n))})),t}var g=p(n(2446));p(n(9072))},378:(e,t,n)=>{n.d(t,{DF:()=>f,G$:()=>i,Kz:()=>u,Zb:()=>c,_j:()=>l,rT:()=>s});var o=n(8955),a=n(6804),r=n(4800),c=function(){try{document.getElementsByTagName("title")[0].appendChild(document.createTextNode((0,o.Rx)().fullName)),document.getElementById("favicon-link").href=(0,o.Q4)("favicon.ico")}catch(e){alert("Failed to render favicon"),console.log(e)}},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{!function(){var t=document.getElementById("projects-list-container");t.appendChild((0,a.vy)("div",["project-top-divider","slideIn--left2right__large-box"]));for(var r=(0,o.ku)(n),c=function(n){var o=(0,a.vy)("div",[e?"project--lite":"project","slideIn--left2right__large-box"]);o.setAttribute("id","project-"+r[n].id),o.appendChild((0,a.vy)("h1","project-name",r[n].name)),o.appendChild((0,a.vy)("span","project-type",r[n].type)),t.appendChild(o),o.addEventListener("click",(function(){window.location.href="/project?id=".concat(r[n].id,"&name=").concat(r[n].name)}))},l=0;l<r.length;l++)c(l)}()}catch(e){alert("Failed to render projects list"),console.log(e)}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{document.getElementById("__contact-component").innerHTML=(0,o.uP)(),d(e),(0,r.v_)()}catch(e){alert("Failed to render contact component"),console.log(e)}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var t=(0,o.Us)(),n=document.getElementById("contact-details-wrapper");for(var c in e&&(document.getElementById("contact-info__greating").style.display="none"),t.contactDetails){var l=t.contactDetails[c];if(e||"main-message"!==l.type){var i=(0,a.vy)("a","contact-".concat(l.name),l.name);i.href="media"===t.contactDetails[c].type?l.href:"mailto:"+l.href,i.target="_blank",n.appendChild(i)}else(0,r.iH)("about-data-id--main-message","mailto:"+l.href)}}catch(e){alert("Failed to render contact details"),console.log(e)}},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{document.getElementById("__logo-component").innerHTML=(0,o.kp)(),u(e),(0,r.rS)(e),document.getElementById("__nav-menu-component").innerHTML=(0,o.gk)(),m(),(0,r.RE)(t)}catch(e){alert("Failed to render logo component"),console.log(e)}},u=function(e){var t=(0,o.CF)();document.getElementById("logo-image").src=(0,o.Q4)(t[e]),document.getElementById("main-logo").style.transform="transparent"===e?"scale(0.7)":"scale(1)"},m=function(){try{var e=(0,a.vy)("div","media-icon-flex-row"),t=(0,o.Us)();for(var n in t.contactDetails){var c=t.contactDetails[n];if("main-message"!==c.type){var l=(0,a.vy)("div",["hover-turn-bgcolor-blue","circle-shape","slideIn--bottom-up--slow__nav-menu","slideIn--bottom-up--slow-2200ms"]),i=(0,a.vy)("i",["fa-brands","fa-".concat(c.name)]);(0,r.iH)(l,c.href),l.appendChild(i),e.appendChild(l)}else{var d=(0,a.vy)("div",["hover-turn-color-blue","contact-link--font-size","slideIn--bottom-up--slow__nav-menu","slideIn--bottom-up--slow-2200ms"],c.href);(0,r.iH)(d,"mailto:"+c.href),document.getElementById("nav-menu-data-id__main-message").appendChild(d)}}document.getElementById("nav-menu-data-id__media").appendChild(e)}catch(e){alert("Failed to render nav menu"),console.log(e)}},f=function(){try{document.getElementById("__footer-component").innerHTML=(0,o.JB)(),document.getElementById("footer-data-id--rights-reserved").appendChild(document.createTextNode("©".concat((0,o.u3)().year," ").concat((0,o.u3)().rightsHolder," - All Rights Reserved")))}catch(e){alert("Failed to render footer component"),console.log(e)}}},6804:(e,t,n)=>{n.d(t,{vy:()=>o});var o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=document.createElement(e);return Array.isArray(t)?t.map((function(e){o.classList.add(e)})):"string"==typeof t&&(o.className=t),n&&o.appendChild(document.createTextNode(n)),o}},6971:(e,t,n)=>{var o=n(378),a=n(2442),r=n(6452);(0,o.Zb)(),(0,o.rT)("transparent"),(0,o._j)(!0,!1),(0,o.G$)(!0),(0,o.DF)(),(0,a.x)(".slideIn--left2right__large-box","slideIn--left2right__large-box",270),(0,r.h)(".fadeIn",{rootMargin:"-20px -20px -50px -20px",cb:function(e){e.classList.add("fadeIn--active")}}),(0,r.h)(".slideIn--bottom-up",{cb:function(e){e.classList.add("slideIn--bottom-up--active")}}),(0,a.kC)()}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,a,r)=>{if(!n){var c=1/0;for(s=0;s<e.length;s++){for(var[n,a,r]=e[s],l=!0,i=0;i<n.length;i++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(l=!1,r<c&&(c=r));if(l){e.splice(s--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,a,r]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.p="/static/",(()=>{var e={806:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[c,l,i]=n,d=0;if(c.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(i)var s=i(o)}for(t&&t(n);d<c.length;d++)r=c[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(s)},n=self.webpackChunkv2=self.webpackChunkv2||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[138,800],(()=>o(6971)));a=o.O(a)})();