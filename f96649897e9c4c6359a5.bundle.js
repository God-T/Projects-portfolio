(()=>{"use strict";var e,t={8955:(e,t,o)=>{o.d(t,{CF:()=>c,JB:()=>p,N1:()=>s,Q4:()=>d,Rx:()=>r,Us:()=>l,gk:()=>u,kp:()=>m,ku:()=>a,u3:()=>i,uP:()=>v});var n=o(6633),a=function(e){try{var t=n.F6.projectsDetails;return(t=t.filter((function(t){return t.id!=e.id}))).map((function(e){return{id:e.id,name:e.name,type:e.type}}))}catch(e){alert("Failed to load project list"),console.log(e)}},r=function(){try{return n.v6.landing}catch(e){alert("Failed to load landing details"),console.log(e)}},c=function(){try{return n.v6.logo}catch(e){alert("Failed to load logo details"),console.log(e)}},l=function(){try{return n.v6.about}catch(e){alert("Failed to load about details"),console.log(e)}},i=function(){try{return n.v6.footer}catch(e){alert("Failed to load footer details"),console.log(e)}},d=function(e){try{return n.hT.get(e)}catch(e){alert("Failed to load image src"),console.log(e)}},s=function(){try{return n.Jp}catch(e){alert("Failed to load about component content"),console.log(e)}},u=function(){try{return n.DU}catch(e){alert("Failed to load nav menu component content"),console.log(e)}},m=function(){try{return n.XS}catch(e){alert("Failed to load logo component content"),console.log(e)}},p=function(){try{return n.mf}catch(e){alert("Failed to load footer component content"),console.log(e)}},v=function(){try{return n.V$}catch(e){alert("Failed to load contact component content"),console.log(e)}}},6633:(e,t,o)=>{o.d(t,{DU:()=>p,F6:()=>u,Jp:()=>m,V$:()=>g,XS:()=>v,hT:()=>y,mf:()=>f,v6:()=>s});var n=o(5015),a=o(1189),r=o(422),c=o(5968),l=o(6970),i=o(9889),d=o(9512),s=JSON.parse(n),u=JSON.parse(a),m=r.Z,p=c.Z,v=l.Z,f=i.Z,g=d.Z;function h(e){var t=new Map;return e.keys().forEach((function(o){t.set(o.slice(2),e(o))})),t}var y=h(o(2446));h(o(9072))},378:(e,t,o)=>{o.d(t,{$e:()=>c,DF:()=>g,G$:()=>u,Kz:()=>v,Zb:()=>l,_j:()=>i,ce:()=>d,rT:()=>p});var n=o(8955),a=o(6804),r=o(4800),c=function(){try{var e=(0,n.Rx)();for(var t in e)(0,a.At)("landing-data-id--".concat(t),e[t])}catch(e){alert("Failed to render landing data"),console.log(e)}},l=function(){try{document.getElementsByTagName("title")[0].appendChild(document.createTextNode((0,n.Rx)().fullName)),document.getElementById("favicon-link").href=(0,n.Q4)("favicon.ico")}catch(e){alert("Failed to render favicon"),console.log(e)}},i=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{!function(){var t=document.getElementById("projects-list-container");t.appendChild((0,a.vy)("div",["project-top-divider","slideIn--left2right__large-box"]));for(var r=(0,n.ku)(o),c=function(o){var n=(0,a.vy)("div",[e?"project--lite":"project","slideIn--left2right__large-box"]);n.setAttribute("id","project-"+r[o].id),n.appendChild((0,a.vy)("h1","project-name",r[o].name)),n.appendChild((0,a.vy)("span","project-type",r[o].type)),t.appendChild(n),n.addEventListener("click",(function(){window.location.href="/project?id=".concat(r[o].id,"&name=").concat(r[o].name)}))},l=0;l<r.length;l++)c(l)}()}catch(e){alert("Failed to render projects list"),console.log(e)}},d=function(){try{document.getElementById("__about-component").innerHTML=(0,n.N1)(),s()}catch(e){alert("Failed to render about component"),console.log(e)}},s=function(){try{var e=(0,n.Us)();(0,a.At)("about-data-id--aboutText",e.aboutText);var t=document.getElementById("about-data-id--photo"),o=(0,a.vy)("img","slideIn--bottom-up__large-box");o.src=(0,n.Q4)(e.photo.src),t.appendChild(o)}catch(e){alert("Failed to render about data"),console.log(e)}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{document.getElementById("__contact-component").innerHTML=(0,n.uP)(),m(e),(0,r.v_)()}catch(e){alert("Failed to render contact component"),console.log(e)}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var t=(0,n.Us)(),o=document.getElementById("contact-details-wrapper");for(var c in e&&(document.getElementById("contact-info__greating").style.display="none"),t.contactDetails){var l=t.contactDetails[c];if(e||"main-message"!==l.type){var i=(0,a.vy)("a","contact-".concat(l.name),l.name);i.href="media"===t.contactDetails[c].type?l.href:"mailto:"+l.href,i.target="_blank",o.appendChild(i)}else(0,r.iH)("about-data-id--main-message","mailto:"+l.href)}}catch(e){alert("Failed to render contact details"),console.log(e)}},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{document.getElementById("__logo-component").innerHTML=(0,n.kp)(),v(e),(0,r.rS)(e),document.getElementById("__nav-menu-component").innerHTML=(0,n.gk)(),f(),(0,r.RE)(t)}catch(e){alert("Failed to render logo component"),console.log(e)}},v=function(e){var t=(0,n.CF)();document.getElementById("logo-image").src=(0,n.Q4)(t[e]),document.getElementById("main-logo").style.transform="transparent"===e?"scale(0.7)":"scale(1)"},f=function(){try{var e=(0,a.vy)("div","media-icon-flex-row"),t=(0,n.Us)();for(var o in t.contactDetails){var c=t.contactDetails[o];if("main-message"!==c.type){var l=(0,a.vy)("div",["hover-turn-bgcolor-blue","circle-shape","slideIn--bottom-up--slow__nav-menu","slideIn--bottom-up--slow-2200ms"]),i=(0,a.vy)("i",["fa-brands","fa-".concat(c.name)]);(0,r.iH)(l,c.href),l.appendChild(i),e.appendChild(l)}else{var d=(0,a.vy)("div",["hover-turn-color-blue","contact-link--font-size","slideIn--bottom-up--slow__nav-menu","slideIn--bottom-up--slow-2200ms"],c.href);(0,r.iH)(d,"mailto:"+c.href),document.getElementById("nav-menu-data-id__main-message").appendChild(d)}}document.getElementById("nav-menu-data-id__media").appendChild(e)}catch(e){alert("Failed to render nav menu"),console.log(e)}},g=function(){try{document.getElementById("__footer-component").innerHTML=(0,n.JB)(),document.getElementById("footer-data-id--rights-reserved").appendChild(document.createTextNode("©".concat((0,n.u3)().year," ").concat((0,n.u3)().rightsHolder," - All Rights Reserved")))}catch(e){alert("Failed to render footer component"),console.log(e)}}},4126:(e,t,o)=>{var n=o(378),a=o(2442);(0,n.Zb)(),(0,n.rT)("dark",!0),(0,n._j)(!1,!0),(0,n.ce)(),(0,n.G$)(),(0,n.DF)(),(0,n.$e)(),(0,a.SB)()}},o={};function n(e){var a=o[e];if(void 0!==a)return a.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,a,r)=>{if(!o){var c=1/0;for(s=0;s<e.length;s++){for(var[o,a,r]=e[s],l=!0,i=0;i<o.length;i++)(!1&r||c>=r)&&Object.keys(n.O).every((e=>n.O[e](o[i])))?o.splice(i--,1):(l=!1,r<c&&(c=r));if(l){e.splice(s--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[o,a,r]},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/static/",(()=>{var e={826:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var a,r,[c,l,i]=o,d=0;if(c.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(i)var s=i(n)}for(t&&t(o);d<c.length;d++)r=c[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},o=self.webpackChunkv2=self.webpackChunkv2||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=n.O(void 0,[138,800,672],(()=>n(4126)));a=n.O(a)})();