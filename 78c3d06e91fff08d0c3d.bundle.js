(self.webpackChunkv2=self.webpackChunkv2||[]).push([[160],{442:(e,n,t)=>{"use strict";t.d(n,{T0:()=>a,Vy:()=>r,jK:()=>i});var s=t(452),r=function(){(0,s.h)(".fadeIn",{rootMargin:"-20px -20px -50px -20px",cb:function(e){e.classList.add("fadeIn--active")}}),(0,s.h)(".slideIn--left2right",{rootMargin:"0px -50px -50px -50px",cb:function(e){e.classList.add("slideIn--left2right--active")}}),(0,s.h)(".slideIn--right2left",{rootMargin:"-50px",cb:function(e){e.classList.add("slideIn--right2left--active")}}),(0,s.h)(".slideIn--bottom-up",{cb:function(e){e.classList.add("slideIn--bottom-up--active")}}),(0,s.h)(".nav-menu__link",{cb:function(e){e.classList.add("slideIn--bottom-up--active")},isLooping:!0}),(0,s.h)(".slideIn--bottom-up--slow",{cb:function(e){e.classList.add("slideIn--bottom-up--slow--active")}}),(0,s.h)(".slideIn--bottom-up__large-box",{rootMargin:"0px -100px -100px -100px",cb:function(e){e.classList.add("slideIn--bottom-up__large-box--active")}}),(0,s.h)(".slideIn--left2right__large-box",{rootMargin:"-50px -100px -200px -100px",cb:function(e){!function(e){var n=e.getBoundingClientRect(),t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;console.log(e,n.top,n.right,n.bottom,n.left),console.log(t,s)}(e),e.classList.add("slideIn--left2right__large-box--active")}}),(0,s.h)(".fadeIn--slow",{rootMargin:"-20px -20px -50px -20px",cb:function(e){e.classList.add("fadeIn--slow--active")}})},i=function(e,n){document.querySelectorAll(e).forEach((function(e){return e.classList.remove(n+"--active")}))},a=function(e,n){document.querySelectorAll(e).forEach((function(e){return e.classList.add(n+"--active")}))}},452:(e,n,t)=>{"use strict";function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},s=document.querySelectorAll(e);(s=Array.from(s)).forEach((function(e){t(e),r(e,n)}))}function r(e,n){if(!("IntersectionObserver"in window))return alert('"IntersectionObserver" is supported'),void(n.cb&&n.cb(e));new IntersectionObserver((function(t,s){t.forEach((function(t){t.isIntersecting&&(n.cb&&n.cb(e),n.isLooping||s.unobserve(t.target))}))}),n).observe(e)}t.d(n,{h:()=>s})},968:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});const s='<div id="nav-menu" class="overlay"> <div class="nav-menu__left-wrapper"> <div id="nav-menu__home-nav-btn" class="nav-menu__link slideIn--bottom-up"> HOME </div> <div id="nav-menu__projects-nav-btn" class="nav-menu__link slideIn--bottom-up"> PROJECTS </div> <div id="nav-photography-nav-btn" class="nav-menu__link slideIn--bottom-up"> PHOTOGRAPHY </div> <div id="nav-menu__about-nav-btn" class="nav-menu__link slideIn--bottom-up"> ABOUT </div> </div> <div class="nav-menu__right-wrapper"> <div> <div id="nav-menu-data-id__main-message" class="contact-link-wrapper--layout hover-turn-blue"> <div style="overflow:hidden"> <div class="font--gray margin--bottom contact-link--font-size slideIn--bottom-up--slow__nav-menu slideIn--bottom-up--slow-2400ms"> Send me an email </div> </div> </div> <div id="nav-menu-data-id__media" class="contact-link-wrapper--layout hover-turn-blue"> <div style="overflow:hidden"> <div class="font--gray margin--bottom contact-link--font-size slideIn--bottom-up--slow__nav-menu slideIn--bottom-up--slow-2400ms"> Follow me </div> </div> </div> </div> </div> </div> '},446:(e,n,t)=>{var s={"./P1-2022/B_Mockup_Small.jpg":475,"./P1-2022/C_Free_Box_Mockup_6 (1).jpg":839,"./P1-2022/D_Store.jpg":826,"./P1-2022/E_billboard2.jpg":739,"./P1-2022/F_billboard.png":924,"./P1-2022/G_Falling Business Card Mockup.jpg":315,"./P1-2022/H_Business_Card_Mockup_008-e.jpg":902,"./P1-2022/I_stickers.jpg":773,"./P2-2021/A_Mock UP 2.jpg":256,"./P2-2021/B_music app1.jpg":248,"./P2-2021/C_Mock UP 1.jpg":850,"./P3-2021/A_free mockup 4.jpg":220,"./P3-2021/B_Bus Stop Billboard MockUp.jpg":206,"./P3-2021/C_free mockup 5.jpg":63,"./P3-2021/D_Hanging_Tote_Bag_Mockup_1.jpg":882,"./P3-2021/E_cam.jpg":27,"./P4-2021/A_Group 1.jpg":11,"./P4-2021/B_Group.jpg":265,"./P4-2021/C_ipad and iphone mockup.jpg":126,"./about.jpg":439,"./favicon.ico":329,"./logo-dark.png":660,"./logo-light.png":559,"./logo-transparent.png":225,"./logo.gif":602,"./logo.png":954,"./p5-2021/A_yu_Page_33.jpg":927,"./p5-2021/B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg":70,"./p5-2021/C_vinyl-template-B.jpg":685,"./p5-2021/D_vinyl-template-A.jpg":473};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id=446},475:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/27ab37fc6b3114b17566.jpg"},839:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/25cffb176ca7c119531e.jpg"},826:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/6939a33565e3a7547095.jpg"},739:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/de08300fad53e3a9bbcc.jpg"},924:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/428eed9ae74d95842696.png"},315:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/c0e251a8a3c9f794ff24.jpg"},902:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/1d6b7512d8097bd76c6f.jpg"},773:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/5e870fe5eb8fd398501e.jpg"},256:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/10a10e6b8aa8bf5e779b.jpg"},248:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/8d4a19ed403fa4f68190.jpg"},850:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/9a4f9dfa47b3f59d2a9f.jpg"},220:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/f9c7eef6c9f58b9de257.jpg"},206:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/50eee9e83513183d4daf.jpg"},63:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/fd1a3e9cf6b8122dc6bf.jpg"},882:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/0b4b4772d703f908e75a.jpg"},27:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/aa0b007fa2edc026f881.jpg"},11:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/dae74d716421ea6a00ce.jpg"},265:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/6d11c81b6ba0860b2fbe.jpg"},126:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/d92b33025eaed54cac74.jpg"},439:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/cccce5c3027e794cca38.jpg"},329:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/75ebaa46de642d12fd42.ico"},660:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/e03e571c2e666126a0bc.png"},559:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/a7b11b2e468112c9c876.png"},225:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/0fa0a53a78ad669002eb.png"},602:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/ce1c0853726345419aff.gif"},954:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/052d7b1aa6c301268ffb.png"},927:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/51d81747503a0cf706fa.jpg"},70:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/a25772361233e60868cc.jpg"},685:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/d189abef7af2883a4ce4.jpg"},473:(e,n,t)=>{"use strict";e.exports=t.p+"assets/images/f67a379e7231cdf24ca5.jpg"},15:e=>{"use strict";e.exports='{\r\n    "landing": {\r\n        "fullName": "SIYU QIAN",\r\n        "titleLine1": "VISUAL",\r\n        "titleLine2": "DESIGNER",\r\n        "nickName": "MONICA",\r\n        "city": "BASED IN SYDNEY",\r\n        "years": "2021 & 2022"\r\n    },\r\n    "about": {\r\n        "aboutText": "I am Sydney based visual designer. After I finished my business degree in university, I realised that I am more passionate about creating. Shillington has given me the opportunity to discover the design industry and learn skills. I am still willing to have more chances to learn and follow my design directions.",\r\n        "contactDetails": [\r\n            {\r\n                "name": "instagram",\r\n                "href": "https://www.instagram.com/myu_q5/",\r\n                "type": "media"\r\n            },\r\n            {\r\n                "name": "behance",\r\n                "href": "https://www.behance.net/monicaqian",\r\n                "type": "media"\r\n            },\r\n            {\r\n                "name": "email",\r\n                "href": "monicaqsy1@gmail.com",\r\n                "type": "main-message"\r\n            }\r\n        ],\r\n        "photo": {\r\n            "src": "about.jpg",\r\n            "alt": "about-monica"\r\n        }\r\n    },\r\n    "logo": {\r\n        "dark": "logo-dark.png",\r\n        "light": "logo-light.png",\r\n        "transparent": "logo-transparent.png"\r\n    }\r\n}\r\n'},189:e=>{"use strict";e.exports='{\r\n    "projectsDetails": [\r\n        {\r\n            "id": 1,\r\n            "name": "HAPPYMEA",\r\n            "type": "BRANDING, PACKAGING",\r\n            "description": "HAPPYMEA is a cake store for dog lovers who can buy cakes for their puppies. Make puppies\' wish come true to celebrate the special days with the owners.",\r\n            "image": {\r\n                "folderName": "P1-2022",\r\n                "fileNames": [\r\n                    "B_Mockup_Small.jpg",\r\n                    "C_Free_Box_Mockup_6 (1).jpg",\r\n                    "D_Store.jpg",\r\n                    "E_billboard2.jpg",\r\n                    "F_billboard.png",\r\n                    "G_Falling Business Card Mockup.jpg",\r\n                    "H_Business_Card_Mockup_008-e.jpg",\r\n                    "I_stickers.jpg"\r\n                ],\r\n                "autoImporting": true\r\n            }\r\n        },\r\n        {\r\n            "id": 2,\r\n            "name": "MUMO",\r\n            "type": "MUSIC PLAYER APP",\r\n            "description": "MUMO is a music player app which is aimed for the younger generation who is seeking a futuristic experience as they enjoy and enter the music world.",\r\n            "image": {\r\n                "folderName": "P2-2021",\r\n                "fileNames": [\r\n                    "A_Mock UP 2.jpg",\r\n                    "B_music app1.jpg",\r\n                    "C_Mock UP 1.jpg"\r\n                ],\r\n                "autoImporting": true\r\n            }\r\n        },\r\n        {\r\n            "id": 3,\r\n            "name": "RECYCLE REDEEM REUSE",\r\n            "type": "CAMPAIGN",\r\n            "description": "RECYCLE REDEEM REUSE is an awareness campaign to encourage people to recycle plastics, and in return they will receive sustainable products as a reward from Renew.",\r\n            "image": {\r\n                "folderName": "P3-2021",\r\n                "fileNames": [\r\n                    "A_free mockup 4.jpg",\r\n                    "B_Bus Stop Billboard MockUp.jpg",\r\n                    "C_free mockup 5.jpg",\r\n                    "D_Hanging_Tote_Bag_Mockup_1.jpg",\r\n                    "E_cam.jpg"\r\n                ],\r\n                "autoImporting": true\r\n            }\r\n        },\r\n        {\r\n            "id": 4,\r\n            "name": "URBUDDY",\r\n            "type": "PET FINDER WEBSITE",\r\n            "description": "UrBuddy wanted to bring the warm home feeling to their customers when they are experiencing finding the perfect pet friend. It is aimed to provide the best experience as people seek a new pet friend to be their closest buddy.",\r\n            "image": {\r\n                "folderName": "P4-2021",\r\n                "fileNames": [\r\n                    "A_Group 1.jpg",\r\n                    "B_Group.jpg",\r\n                    "C_ipad and iphone mockup.jpg"\r\n                ],\r\n                "autoImporting": true\r\n            }\r\n        },\r\n        {\r\n            "id": 5,\r\n            "name": "SOME BORING, LOVE STORIES",\r\n            "type": "HANDMADE ALBUM COVER",\r\n            "description": "Two silver wires interacting together with one rose represents the complexity of feelings, defining the album cover\'s name, Some Boring, Love Stories.",\r\n            "image": {\r\n                "folderName": "p5-2021",\r\n                "fileNames": [\r\n                    "A_yu_Page_33.jpg",\r\n                    "B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg",\r\n                    "C_vinyl-template-B.jpg",\r\n                    "D_vinyl-template-A.jpg"\r\n                ],\r\n                "autoImporting": true\r\n            }\r\n        }\r\n    ]\r\n}\r\n'}}]);