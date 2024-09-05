(()=>{"use strict";var e={911:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(601),s=n.n(a),o=n(314),i=n.n(o),r=n(417),d=n.n(r),c=new URL(n(898),n.b),l=i()(s()),p=d()(c);l.push([e.id,`.chat{display:grid;grid-template-columns:20% 80%;width:100%;height:calc(100vh - 180px);background:rgba(128,128,128,.8);border-right:10px solid rgba(128,128,128,0);border-radius:10px}.chat__users{padding:5px;width:100%;height:100%;overflow-y:auto;transition:.5s}.chat__messages{width:100%}.chat__messages__header{position:relative;padding:0 10px;width:100%;height:60px;border-bottom:solid 1px gray;display:flex;justify-content:space-evenly;align-items:center;color:#fff}.chat__messages__header__user,.chat__messages__header__status{margin:0}.chat__messages__header__status{color:#74ebd5}.chat__messages__header__status_offline{color:#921717}.chat__messages__header__btn{display:none;position:absolute;z-index:110;right:10px;width:40px;filter:invert(1);transition:.5s}.count-msgs{display:inline-block;text-align:center;width:20px;border-radius:50%;background:#74ebd5}.chat__messages__main{color:gray;border-radius:10px;height:calc(100vh - 180px - 120px);background-color:rgba(255,255,255,.8);background-image:url(${p});background-size:50vh;overflow-y:auto}.chat__messages__footer{padding:0 10px;width:100%;height:60px;border-top:solid 1px gray;display:flex;align-items:center;gap:10px;transition:.3s}.chat__messages__footer_block{pointer-events:none;opacity:.5}.chat__messages__footer__input{width:100%;padding:5px;outline:none;border:none;border-bottom:solid 2px #fff;color:#fff;background:none;font-weight:700}.chat__messages__footer__btn{background-color:#74ebd5;background-image:linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);border:none;border-radius:3px;width:100px;font-weight:700;color:#fff;height:30px;transition:.7s}.chat__search{width:100%;border:none;border-bottom:solid 2px #fff;color:#fff;background:none;outline:none;padding:3px}.chat__users__user{color:#fff;margin:0;padding:5px;border-radius:3px;cursor:pointer;transition:.5s}.chat__users__user_hide{display:none}.logined-true{color:#74ebd5;text-shadow:0 0 4px gray}.logined-false{color:gray}.line-read{height:30px;width:100%;border-bottom:solid 1px #9face6;display:flex;justify-content:center;align-items:flex-end;color:#9face6}.context-menu{position:absolute;width:100px;border-radius:5px;z-index:200;left:0;right:0;display:none;background:#fff;color:gray;padding:5px;text-align:center}.context-menu_show{display:block}.context-menu__item{margin:0;padding:5px;border-radius:3px;transition:.5s}.msg-you{padding:5px;width:100%;display:flex;justify-content:flex-end}.msg-for-you{padding:5px;width:100%;display:flex;justify-content:flex-start;pointer-events:none}.msg{width:60%;border-radius:5px;padding:5px;color:#fff;background-color:#74ebd5;background-image:linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);box-shadow:4px 4px 10px 4px rgba(0,0,0,.2);transition:.5s}.msg__head{padding:0 0 5px 0;font-size:12px;display:flex;justify-content:space-around;pointer-events:none}.msg__main{background:rgba(128,128,128,.5);border-radius:5px;padding:15px 5px;color:#fff;overflow-wrap:break-word;transition:.5s;pointer-events:none}.msg-for-you .msg__main{background:rgba(255,255,255,.5);color:gray}.msg__footer{padding:5px 0 0 0;font-size:12px;display:flex;justify-content:space-between;pointer-events:none}@media(hover: hover){.chat__users__user:hover,.context-menu__item:hover{background-color:#74ebd5;background-image:linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)}.msg-you .msg:hover{cursor:pointer;box-shadow:4px 4px 4px 4px rgba(0,0,0,.3)}.msg-you .msg:hover .msg__main{background:rgba(128,128,128,.8)}.chat__messages__footer__btn:hover,.chat__messages__header__btn:hover{cursor:pointer;transform:scale(1.1)}}.chat__messages__footer__btn:active,.chat__messages__header__btn:active{transition:.2s;transform:scale(0.9)}.chat__users__user:active,.context-menu__item:active{transition:.2s;transform:scale(0.95)}.chat__messages__footer__btn:disabled{pointer-events:none;opacity:.5;color:gray}@media(max-width: 768px){.chat{position:relative;border-left:10px solid rgba(128,128,128,0);display:block}.chat__users{position:absolute;z-index:-100;background:rgba(128,128,128,.8);border-radius:10px;width:calc(100% + 20px);left:-10px;top:0;opacity:0}.chat__users_show{opacity:1;z-index:100}.chat__search{width:calc(100% - 70px);margin-bottom:18px}.chat__messages__header__btn{display:block}}`,""]);const m=l},681:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(601),s=n.n(a),o=n(314),i=n.n(o)()(s());i.push([e.id,".emoji{position:relative}.emoji-btn{cursor:pointer}.emoji-box{position:absolute;z-index:-10;opacity:0;top:-190px;border-radius:10px;padding:5px;right:0;width:140px;text-align:center;height:180px;background:#fff;overflow-y:auto;transition:.5s}.emoji-box_show{z-index:10;opacity:1}.emoji-box__item{display:inline-block;transition:.5s}@media(hover: hover){.emoji-box__item:hover{cursor:pointer;transform:scale(1.1)}}.emoji-box__item:active,.emoji-btn:active{transition:.2s;transform:scale(0.9)}",""]);const r=i},334:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(601),s=n.n(a),o=n(314),i=n.n(o)()(s());i.push([e.id,".footer{display:flex;justify-content:space-evenly;align-items:center;gap:20px;max-width:1440px;width:100%;margin:auto;padding:10px 40px;color:#fff;border-top:solid 1px #fff;height:80px;text-align:center}.footer__school{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:700;transition:.7s}.footer__school__img{width:60px}.footer__developer{transition:.7s}.footer__year{margin:0}@media(hover: hover){.footer__developer:hover,.footer__school:hover{cursor:pointer;transform:scale(1.05)}}.footer__developer:active,.footer__school:active{transition:.2s;transform:scale(0.9)}@media(max-width: 480px){.footer__school{font-size:18px}.footer__school__img{width:40px}}",""]);const r=i},152:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(601),s=n.n(a),o=n(314),i=n.n(o)()(s());i.push([e.id,'.form-login{position:relative;border-radius:10px;min-height:200px;max-width:340px;width:100%;padding:20px;background:#fff;color:gray;box-shadow:4px 4px 10px 4px rgba(0,0,0,.1)}.form-login__input{width:100%;border:none;outline:none;border-bottom:solid 2px gray;font-weight:700;color:#768be7;transition:.3s}.form-login__input_validate:invalid{border-bottom:solid 2px #ac0000}.form-login__input:valid{border-bottom:solid 2px green}.form-login__err{min-height:18px;color:#ac0000;margin:0 0 10px 0}.form-login__btn{display:block;margin:auto;background-color:#74ebd5;background-image:linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);border:none;border-radius:3px;width:100px;font-weight:700;color:#fff;height:30px;transition:.7s}@media(hover: hover){.form-login__btn:hover{cursor:pointer;transform:scale(1.1)}}.form-login__btn:active{transition:.2s;transform:scale(0.9)}.form-login__btn:disabled{pointer-events:none;background:gray}.form-login:after{content:"";position:absolute;bottom:-29px;right:20px;border:15px solid rgba(0,0,0,0);border-top:15px solid #fff}',""]);const r=i},124:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(601),s=n.n(a),o=n(314),i=n.n(o)()(s());i.push([e.id,".header{width:100%;padding:10px;display:flex;align-items:center;justify-content:space-between;gap:10px;height:80px}.header__title{margin:0;color:#fff}.header__logo{width:50px}.header__user{margin:0;color:#fff;font-weight:700;text-align:center}.header__user span{color:gray}.header__btn{background:#fff;border:none;border-radius:3px;width:100px;font-weight:700;color:#9face6;height:30px;transition:.7s}.header-logo-box{display:flex;align-items:center;gap:10px}@media(hover: hover){.header__btn:hover{cursor:pointer;transform:scale(1.1)}}.header__btn:active{transition:.2s;transform:scale(0.9)}@media(max-width: 480px){.header__title{font-size:20px;text-align:center}.header__logo{width:30px}}",""]);const r=i},272:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(601),s=n.n(a),o=n(314),i=n.n(o),r=n(417),d=n.n(r),c=new URL(n(908),n.b),l=i()(s()),p=d()(c);l.push([e.id,`.info-app{position:fixed;z-index:100;left:0;top:0;width:100%;height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;color:#fff;transition:.5s;backdrop-filter:blur(10px);transform:scale(0)}.info-app_show{transform:scale(1)}.info-app__box{position:relative;max-width:600px;padding:20px;width:100%;min-height:200px;background-color:#74ebd5;background-image:linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);box-shadow:4px 4px 10px 4px rgba(0,0,0,.1);border-radius:10px}.info-app__box:after{content:"";position:absolute;bottom:-28px;right:20px;border:15px solid rgba(0,0,0,0);border-top:15px solid #9face6}.info-app__box-wrapper{background:url(${p}) no-repeat;background-position:center;background-size:contain}.dev-link{font-weight:700;background:linear-gradient(to right, #ffffff 25%, #bd84ff 50%, #80ffe8 60%);background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0);-webkit-background-clip:text;background-size:500% auto;animation:text-shine 5s ease-in-out infinite alternate;transition:.7s}.info{position:absolute;left:0px;bottom:20px;width:40px;filter:invert(1);transition:.7s;animation:ring 2s infinite ease-in-out}.info-app__box__btn{background:#fff;width:60px;height:60px;border:none;border-radius:50%;font-weight:700;color:#9face6;outline:none;transition:.7s}@media(hover: hover){.info-app__box__btn:hover{cursor:pointer;box-shadow:0 0 5px 5px rgba(159,172,230,.5);transform:scale(1.1)}.info:hover{cursor:pointer;animation:none;transform:scale(1.1)}}.info-app__box__btn:active,.info:active{transition:.2s;transform:scale(0.9)}@keyframes ring{0%{rotate:10deg}50%{rotate:-10deg}100%{rotate:10deg}}@keyframes text-shine{0%{background-position:0% 50%}100%{background-position:100% 50%}}`,""]);const m=l},891:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(601),s=n.n(a),o=n(314),i=n.n(o)()(s());i.push([e.id,".loading{position:fixed;z-index:500;left:0;right:0;width:100%;height:100vh;backdrop-filter:blur(5px);display:flex;justify-content:center;align-items:center}.loading_hide{display:none}.loading img{max-width:150px;width:100%}",""]);const r=i},614:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(601),s=n.n(a),o=n(314),i=n.n(o)()(s());i.push([e.id,".modal{position:fixed;left:0;top:0;z-index:1000;width:100%;height:100vh;backdrop-filter:blur(10px);display:flex;justify-content:center;align-items:center;transform:scale(0);transition:.3s;color:gray}.modal_show{transform:scale(1)}.modal__form{border-radius:10px;background:#fff;min-width:300px;max-width:500px;min-height:150px;padding:20px}.modal__form__title,.modal__form__text{text-align:center}.modal__form__btn{display:block;margin:auto;background-color:#74ebd5;background-image:linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);border:none;border-radius:3px;width:100px;font-weight:700;color:#fff;height:30px;transition:.7s}@media(hover: hover){.modal__form__btn:hover{cursor:pointer;transform:scale(1.1)}}.modal__form__btn:active{transition:.2s;transform:scale(0.9)}",""]);const r=i},76:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(601),s=n.n(a),o=n(314),i=n.n(o),r=n(417),d=n.n(r),c=new URL(n(229),n.b),l=i()(s()),p=d()(c);l.push([e.id,`html{scroll-behavior:smooth;box-sizing:border-box;user-select:none;background-color:#74ebd5;background-image:linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)}*,*:before,*:after{box-sizing:inherit}body{margin:0;padding:0;min-height:100vh;background:url(${p}) no-repeat;background-position:center;background-size:contain;background-attachment:fixed}a{color:inherit;text-decoration:inherit}.main{max-width:1440px;padding:10px}*::-webkit-scrollbar{width:5px;height:5px}*::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}*::-webkit-scrollbar-track:hover{background-color:rgba(0,0,0,0)}*::-webkit-scrollbar-track:active{background-color:rgba(0,0,0,0)}*::-webkit-scrollbar-thumb{border-radius:4px;background-color:#9face6}*::-webkit-scrollbar-thumb:hover{background-color:#8799eb}*::-webkit-scrollbar-thumb:active{background-color:#7189f8}@keyframes text-shine{0%{background-position:0% 50%}100%{background-position:100% 50%}}`,""]);const m=l},104:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(601),s=n.n(a),o=n(314),i=n.n(o)()(s());i.push([e.id,".page-chat__main{padding:10px;min-height:calc(100vh - 160px);max-width:1440px;margin:auto}",""]);const r=i},83:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(601),s=n.n(a),o=n(314),i=n.n(o)()(s());i.push([e.id,".page-login__main{min-height:100vh;display:flex;justify-content:center;align-items:center}",""]);const r=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],r=0;r<e.length;r++){var d=e[r],c=a.base?d[0]+a.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var m=n(p),_={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(_);else{var u=s(_,a);a.byIndex=r,t.splice(r,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var o=a(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var r=n(o[i]);t[r].references--}for(var d=a(e,s),c=0;c<o.length;c++){var l=n(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},898:(e,t,n)=>{e.exports=n.p+"back-chat.png"},908:(e,t,n)=>{e.exports=n.p+"back-info.png"},229:(e,t,n)=>{e.exports=n.p+"back.png"}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=a[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var a={};(()=>{n.d(a,{s:()=>et});var e=n(72),t=n.n(e),s=n(825),o=n.n(s),i=n(659),r=n.n(i),d=n(56),c=n.n(d),l=n(540),p=n.n(l),m=n(113),_=n.n(m),u=n(76),g={};g.styleTagTransform=_(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),t()(u.A,g),u.A&&u.A.locals&&u.A.locals;var f=n(104),h={};h.styleTagTransform=_(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals;var b=n(124),x={};x.styleTagTransform=_(),x.setAttributes=c(),x.insert=r().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=p(),t()(b.A,x),b.A&&b.A.locals&&b.A.locals;const v=document.createElement("header");v.classList.add("header");const y=document.createElement("div");y.classList.add("header-logo-box");const E=document.createElement("h1");E.classList.add("header__title"),E.textContent="Fun Chat";const L=document.createElement("img");L.classList.add("header__logo"),L.src="favicon.png",L.alt="Chat";const w=document.createElement("p");w.classList.add("header__user"),w.id="header-user";const k=document.createElement("button");k.classList.add("header__btn"),k.textContent="LogOut",y.append(E,L),v.append(y,w,k);var A=n(334),j={};j.styleTagTransform=_(),j.setAttributes=c(),j.insert=r().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=p(),t()(A.A,j),A.A&&A.A.locals&&A.A.locals,n.p;const S=document.createElement("footer");S.classList.add("footer");const T=document.createElement("a");T.href="https://rs.school/",T.target="_blank",T.classList.add("footer__school"),T.textContent="RSSchool";const C=document.createElement("img");C.src="logo-rs.svg",C.classList.add("footer__school__img"),T.prepend(C);const R=document.createElement("a");R.href="https://github.com/yourunb",R.classList.add("footer__developer"),R.innerHTML="Yury Butskevich";const I=document.createElement("p");I.classList.add("footer__year"),I.textContent="2024",S.append(T,R,I);var M=n(911),N={};N.styleTagTransform=_(),N.setAttributes=c(),N.insert=r().bind(null,"head"),N.domAPI=o(),N.insertStyleElement=p(),t()(M.A,N),M.A&&M.A.locals&&M.A.locals,n.p;var O=n(681),U={};U.styleTagTransform=_(),U.setAttributes=c(),U.insert=r().bind(null,"head"),U.domAPI=o(),U.insertStyleElement=p(),t()(O.A,U),O.A&&O.A.locals&&O.A.locals;const D=document.createElement("div");D.classList.add("emoji");const z=document.createElement("div");z.classList.add("emoji-btn"),z.innerHTML="&#128578;";const $=document.createElement("div");$.classList.add("emoji-box"),$.innerHTML='\n  <span class="emoji-box__item">&#128512;</span>\n  <span class="emoji-box__item">&#128513;</span>\n  <span class="emoji-box__item">&#128514;</span>\n  <span class="emoji-box__item">&#128515;</span>\n  <span class="emoji-box__item">&#128516;</span>\n  <span class="emoji-box__item">&#128517;</span>\n  <span class="emoji-box__item">&#128518;</span>\n  <span class="emoji-box__item">&#128519;</span>\n  <span class="emoji-box__item">&#128520;</span>\n  <span class="emoji-box__item">&#128521;</span>\n  <span class="emoji-box__item">&#128522;</span>\n  <span class="emoji-box__item">&#128523;</span>\n  <span class="emoji-box__item">&#128524;</span>\n  <span class="emoji-box__item">&#128525;</span>\n  <span class="emoji-box__item">&#128526;</span>\n  <span class="emoji-box__item">&#128527;</span>\n  <span class="emoji-box__item">&#128528;</span>\n  <span class="emoji-box__item">&#128529;</span>\n  <span class="emoji-box__item">&#128530;</span>\n  <span class="emoji-box__item">&#128531;</span>\n  <span class="emoji-box__item">&#128532;</span>\n  <span class="emoji-box__item">&#128533;</span>\n  <span class="emoji-box__item">&#128534;</span>\n  <span class="emoji-box__item">&#128535;</span>\n  <span class="emoji-box__item">&#128536;</span>\n  <span class="emoji-box__item">&#128537;</span>\n  <span class="emoji-box__item">&#128538;</span>\n  <span class="emoji-box__item">&#128539;</span>\n  <span class="emoji-box__item">&#128540;</span>\n  <span class="emoji-box__item">&#128541;</span>\n  <span class="emoji-box__item">&#128542;</span>\n  <span class="emoji-box__item">&#128543;</span>\n  <span class="emoji-box__item">&#128544;</span>\n  <span class="emoji-box__item">&#128545;</span>\n  <span class="emoji-box__item">&#128546;</span>\n  <span class="emoji-box__item">&#128547;</span>\n  <span class="emoji-box__item">&#128548;</span>\n  <span class="emoji-box__item">&#128549;</span>\n  <span class="emoji-box__item">&#128550;</span>\n  <span class="emoji-box__item">&#128551;</span>\n  <span class="emoji-box__item">&#128552;</span>\n  <span class="emoji-box__item">&#128553;</span>\n  <span class="emoji-box__item">&#128554;</span>\n  <span class="emoji-box__item">&#128555;</span>\n  <span class="emoji-box__item">&#128556;</span>\n  <span class="emoji-box__item">&#128557;</span>\n  <span class="emoji-box__item">&#128558;</span>\n  <span class="emoji-box__item">&#128559;</span>\n  <span class="emoji-box__item">&#128560;</span>\n  <span class="emoji-box__item">&#128561;</span>\n  <span class="emoji-box__item">&#129297;</span>\n  <span class="emoji-box__item">&#129398;</span>\n',D.append(z,$),z.addEventListener("mouseover",(()=>{$.classList.toggle("emoji-box_show")})),z.addEventListener("click",(()=>{$.classList.toggle("emoji-box_show")})),$.addEventListener("click",(()=>{$.classList.remove("emoji-box_show")}));const B=document.createElement("div");B.classList.add("chat");const H=document.createElement("div");H.classList.add("chat__users");const F=document.createElement("input");F.classList.add("chat__search"),F.placeholder="Search";const G=document.createElement("div");G.classList.add("chat__messages");const J=document.createElement("div");J.classList.add("chat__messages__header");const P=document.createElement("p");P.classList.add("chat__messages__header__user");const V=document.createElement("p");V.classList.add("chat__messages__header__status");const Z=document.createElement("img");Z.classList.add("chat__messages__header__btn"),Z.src="users.svg";const W=document.createElement("div");W.classList.add("chat__messages__main"),W.textContent="... choose user ...";const Y=document.createElement("div");Y.classList.add("chat__messages__footer"),Y.classList.add("chat__messages__footer_block");const q=document.createElement("input");q.placeholder="Message",q.dataset.edit="false",q.classList.add("chat__messages__footer__input");const K=document.createElement("button");K.textContent="Send",K.disabled=!0,K.classList.add("chat__messages__footer__btn");const X=document.createElement("div");X.classList.add("context-menu"),X.innerHTML='\n  <p class="context-menu__item">Edit</p>\n  <p class="context-menu__item">Delete</p>\n',J.append(P,V,Z),Y.append(q,D,K),G.append(J,W,Y,X),H.append(F),B.append(H,G);const Q=document.createElement("div"),ee=document.createElement("div");function te(e,t){const n=document.createElement("p");n.classList.add("chat__users__user"),n.innerHTML=`<span class="logined-${t}">&#9679;</span> ${e} <span class="count-msgs" data-login="${e}"></span>`,n.dataset.login=`${e}`,n.dataset.isLogined=`${t}`,t?Q.append(n):ee.append(n)}function ne(e=""){var t;const n=B.getElementsByClassName("chat__users__user");for(let a=0;a<n.length;a+=1)-1===(null===(t=n[a].textContent)||void 0===t?void 0:t.toLowerCase().indexOf(e.toLocaleLowerCase()))?n[a].classList.add("chat__users__user_hide"):n[a].classList.remove("chat__users__user_hide")}function ae(e,t,n="update"){"add"===n&&(P.textContent=e),P.textContent===e&&(t&&"true"===t?(V.textContent="online",V.classList.remove("chat__messages__header__status_offline")):(V.textContent="offline",V.classList.add("chat__messages__header__status_offline")),""!==P.textContent&&Y.classList.remove("chat__messages__footer_block"))}function se(e,t,n,a,s,o,i,r=!1){let d=!1;const c=document.createElement("div");c.classList.add("line-read"),c.textContent="new messages";const l=document.createElement("div");o?l.classList.add("msg-you"):(l.classList.add("msg-for-you"),d=!0),l.innerHTML=`\n    <div class="msg" data-id="${i}" data-text="${n}" data-for-you="${d}">\n      <div class="msg__head">\n        <span>${o?"you":e}</span><span>${t}</span>\n      </div>\n      <div class="msg__main">${n}</div>\n      <div class="msg__footer"><span>${s}</span><span>${a}</span></div>\n    </div>\n  `,!r&&d&&0===W.getElementsByClassName("line-read").length&&W.append(c),W.append(l)}function oe(){q.value.length>0&&""!==q.value.trim()?K.disabled=!1:K.disabled=!0}H.append(Q,ee),F.addEventListener("input",(()=>{ne(F.value)})),q.addEventListener("input",(()=>{oe()})),Z.addEventListener("click",(()=>{H.classList.toggle("chat__users_show")})),$.addEventListener("click",(e=>{const t=e.target;t.classList.contains("emoji-box__item")&&(q.value+=t.textContent,oe())}));const ie=document.createElement("div");ie.classList.add("page-chat");const re=document.createElement("main");function de(){if(void 0!==sessionStorage.user){const e=JSON.parse(sessionStorage.user);w.innerHTML=`<span>You: </span>${e.name}`}}re.classList.add("page-chat__main"),ie.append(v,re,S),re.append(B),de(),n.p;var ce=n(83),le={};le.styleTagTransform=_(),le.setAttributes=c(),le.insert=r().bind(null,"head"),le.domAPI=o(),le.insertStyleElement=p(),t()(ce.A,le),ce.A&&ce.A.locals&&ce.A.locals,n.p;var pe=n(152),me={};me.styleTagTransform=_(),me.setAttributes=c(),me.insert=r().bind(null,"head"),me.domAPI=o(),me.insertStyleElement=p(),t()(pe.A,me),pe.A&&pe.A.locals&&pe.A.locals;const _e=document.createElement("form");_e.classList.add("form-login");const ue=document.createElement("label");ue.textContent="Name",ue.htmlFor="input-name";const ge=document.createElement("label");ge.textContent="Password",ge.htmlFor="input-pass";const fe=document.createElement("input");fe.classList.add("form-login__input"),fe.id="input-name",fe.autocomplete="off",fe.type="text",fe.minLength=3,fe.pattern="^[A-Z][A-Za-z\\-]*$",fe.required=!0;const he=document.createElement("input");he.classList.add("form-login__input"),he.id="input-pass",he.autocomplete="off",he.type="password",he.minLength=8,he.pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",he.required=!0;const be=document.createElement("p");be.classList.add("form-login__err"),be.id="name-err";const xe=document.createElement("p");xe.classList.add("form-login__err"),xe.id="pass-err";const ve=document.createElement("button");function ye(){fe.validity.valid&&he.validity.valid?ve.disabled=!1:ve.disabled=!0}function Ee(){if(fe.classList.add("form-login__input_validate"),fe.validity.valid&&(be.textContent=""),!fe.validity.valid){let e="";fe.value.length<3&&(e="- min length: 3</br>"),fe.value.length>0&&(fe.value[0]===fe.value[0].toUpperCase()&&/^[A-Z]/.test(fe.value)||(e+="- first letter is capitalized</br>")),/^[A-Z][A-Za-z\\-]*$/.test(fe.value)||(e+='- only Latin letters or "-"'),be.innerHTML=e}}function Le(){if(he.classList.add("form-login__input_validate"),he.validity.valid&&(xe.textContent=""),!he.validity.valid){let e="";he.value.length<8&&(e="- min length: 8</br>"),/[a-z]/.test(he.value)||(e+="- need small letter</br>"),/[A-Z]/.test(he.value)||(e+="- need capitalized letter</br>"),/[0-9]/.test(he.value)||(e+="- need number</br>"),xe.innerHTML=e}}function we(){ve.disabled=!0,fe.value="",fe.classList.remove("form-login__input_validate"),he.value="",he.classList.remove("form-login__input_validate")}ve.classList.add("form-login__btn"),ve.id="btn-login",ve.type="submit",ve.textContent="Login",ve.disabled=!0,_e.append(ue,fe,be,ge,he,xe,ve),fe.addEventListener("input",(()=>{Ee(),ye()})),he.addEventListener("input",(()=>{Le(),ye()})),window.addEventListener("keydown",(e=>{"Enter"===e.key&&(Le(),Ee(),ye())}));const ke=document.createElement("main");ke.classList.add("page-login__main"),ke.append(_e);var Ae=n(891),je={};je.styleTagTransform=_(),je.setAttributes=c(),je.insert=r().bind(null,"head"),je.domAPI=o(),je.insertStyleElement=p(),t()(Ae.A,je),Ae.A&&Ae.A.locals&&Ae.A.locals,n.p;const Se=document.createElement("div");Se.classList.add("loading");const Te=document.createElement("img");Te.src="loading.gif",Se.append(Te);var Ce=n(614),Re={};Re.styleTagTransform=_(),Re.setAttributes=c(),Re.insert=r().bind(null,"head"),Re.domAPI=o(),Re.insertStyleElement=p(),t()(Ce.A,Re),Ce.A&&Ce.A.locals&&Ce.A.locals;const Ie=document.createElement("div");Ie.classList.add("modal");const Me=document.createElement("div");Me.classList.add("modal__form");const Ne=document.createElement("h3");Ne.classList.add("modal__form__title"),Ne.id="modal-form-title",Ne.textContent="Error";const Oe=document.createElement("p");Oe.classList.add("modal__form__text"),Oe.id="modal-form-text",Oe.textContent="asdasdasd asd sad asdasdasd asd asd asd asd asd asd aswd sa d";const Ue=document.createElement("button");function De(){Ie.classList.remove("modal_show")}function ze(e="ERROR",t="Error in WebSocket. Trying to repeat"){Ie.classList.add("modal_show"),Ne.textContent=e,Oe.textContent=t}function $e(e,t,n){const a={id:e,type:"USER_LOGIN",payload:{user:{login:t,password:n}}};et.send(JSON.stringify(a))}function Be(e){const t={id:null,type:"MSG_READ",payload:{message:{id:e}}};et.send(JSON.stringify(t))}function He(e,t){const n={id:e,type:"MSG_FROM_USER",payload:{user:{login:t}}};et.send(JSON.stringify(n))}Ue.classList.add("modal__form__btn"),Ue.id="modal-form-btn",Ue.textContent="OK",Me.append(Ne,Oe,Ue),Ie.append(Me),Ue.addEventListener("click",(()=>{De()})),Ie.addEventListener("click",(()=>{De()}));var Fe=n(272),Ge={};Ge.styleTagTransform=_(),Ge.setAttributes=c(),Ge.insert=r().bind(null,"head"),Ge.domAPI=o(),Ge.insertStyleElement=p(),t()(Fe.A,Ge),Fe.A&&Fe.A.locals&&Fe.A.locals;const Je=document.createElement("div");Je.classList.add("info-app"),Je.id="window-info",Je.innerHTML='\n  <div class="info-app__box">\n    <div class="info-app__box-wrapper">\n      <h3>Funny Chat</h3>\n      <p>The application is designed to demonstrate the Fun Chat task as part of the RSSchool JS/FE 2024 course</p><p>Users and messages are deleted once a day</p>\n      <p>App created by <a class="dev-link" href="https://github.com/yourunb" target="_blank">Yury Butskevich</a></p>\n      <button class="info-app__box__btn" id="btn-close-info">OK</button>\n    </div>\n  </div>\n';const Pe=document.createElement("img");Pe.classList.add("info"),Pe.src="info.svg";const Ve=document.getElementById("btn-close-info");function Ze(){null==Je||Je.classList.remove("info-app_show")}null==Ve||Ve.addEventListener("click",(()=>Ze())),null==Je||Je.addEventListener("click",(()=>Ze())),Pe.addEventListener("click",(()=>{null==Je||Je.classList.add("info-app_show")}));const We={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let Ye;const qe=new Uint8Array(16);function Ke(){if(!Ye&&(Ye="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ye))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ye(qe)}const Xe=[];for(let e=0;e<256;++e)Xe.push((e+256).toString(16).slice(1));const Qe=function(e,t,n){if(We.randomUUID&&!t&&!e)return We.randomUUID();const a=(e=e||{}).random||(e.rng||Ke)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=a[e];return t}return function(e,t=0){return Xe[e[t+0]]+Xe[e[t+1]]+Xe[e[t+2]]+Xe[e[t+3]]+"-"+Xe[e[t+4]]+Xe[e[t+5]]+"-"+Xe[e[t+6]]+Xe[e[t+7]]+"-"+Xe[e[t+8]]+Xe[e[t+9]]+"-"+Xe[e[t+10]]+Xe[e[t+11]]+Xe[e[t+12]]+Xe[e[t+13]]+Xe[e[t+14]]+Xe[e[t+15]]}(a)};let et;const tt=document.createElement("div");tt.classList.add("page"),document.body.append(Se,tt,Ie,Pe,Je);const nt=document.createElement("audio");nt.src="msg.mp3";let at="",st="",ot=!1;function it(){return tt.innerHTML="",void 0===sessionStorage.user?(location.hash="#login",void tt.append(ke)):(location.hash="#chat",void tt.append(ie))}function rt(){$e(Qe(),fe.value,he.value),at=he.value}function dt(){const e=Qe();!function(e){const t={id:e,type:"USER_ACTIVE",payload:null};et.send(JSON.stringify(t))}(e),function(e){const t={id:e,type:"USER_INACTIVE",payload:null};et.send(JSON.stringify(t))}(e)}function ct(){K.disabled=!0,q.value="",q.dataset.edit="false"}function lt(){pt(),setTimeout((()=>{const e=Qe();"false"===q.dataset.edit&&(!function(e,t,n){const a={id:e,type:"MSG_SEND",payload:{message:{to:t,text:n}}};et.send(JSON.stringify(a))}(e,P.textContent?P.textContent:"",q.value),ct()),"true"===q.dataset.edit&&(function(e,t,n){const a={id:e,type:"MSG_EDIT",payload:{message:{id:t,text:n}}};et.send(JSON.stringify(a))}(e,X.dataset.msgId||"",q.value),ct())}),100)}function pt(){if(0!==W.getElementsByClassName("line-read").length){const e=W.getElementsByClassName("msg");for(let t=0;t<e.length;t+=1)"true"===e[t].dataset.forYou&&Be(e[t].dataset.id||"")}}function mt(e){if(e.classList.contains("msg")){const t=e.getBoundingClientRect().top,n=e.getBoundingClientRect().left;X.style.top=`${t}px`,X.style.left=`${n}px`,X.classList.add("context-menu_show"),X.dataset.msgId=e.dataset.id,X.dataset.msgText=e.dataset.text}else X.classList.remove("context-menu_show")}!function e(){et=new WebSocket("ws://127.0.0.1:4000/"),et.onclose=()=>{ze("Warning","WebSocket closed"),e(),Se.classList.remove("loading_hide")},et.onerror=()=>{ze(),e(),Se.classList.remove("loading_hide")},et.onopen=()=>{"#chat"===location.hash&&void 0!==sessionStorage.user&&(ot=!0,setTimeout((()=>{const e=JSON.parse(sessionStorage.user);$e(e.id,e.name,e.pass),dt()}),500)),setTimeout((()=>{ot=!1,Ie.classList.remove("modal_show"),Se.classList.add("loading_hide")}),1500)},et.onmessage=e=>{const t=JSON.parse(e.data),n=t.payload.messages,a=Qe();function s(){const e=H.getElementsByClassName("chat__users__user");for(let t=0;t<e.length;t+=1)He(a,e[t].dataset.login||"")}switch(t.type){case"ERROR":!1===ot&&ze(t.type,t.payload.error);break;case"USER_LOGIN":st=t.payload.user.login,void 0===sessionStorage.user&&function(e,t,n){const a={id:e,name:t,pass:n};sessionStorage.setItem("user",JSON.stringify(a))}(t.id,t.payload.user.login,at),de(),location.hash="#chat",s();break;case"USER_LOGOUT":sessionStorage.removeItem("user"),location.hash="#login";break;case"USER_ACTIVE":Q.innerHTML="";for(let e=0;e<t.payload.users.length;e+=1)st!==t.payload.users[e].login&&te(t.payload.users[e].login,t.payload.users[e].isLogined),F.value.length>0&&ne(F.value);break;case"USER_INACTIVE":ee.innerHTML="";for(let e=0;e<t.payload.users.length;e+=1)st!==t.payload.users[e].login&&te(t.payload.users[e].login,t.payload.users[e].isLogined),F.value.length>0&&ne(F.value);break;case"USER_EXTERNAL_LOGIN":case"USER_EXTERNAL_LOGOUT":dt(),ae(t.payload.user.login,String(t.payload.user.isLogined));break;case"MSG_FROM_USER":!function(){if(n){let e="",t=0;for(let a=0;a<n.length;a+=1)if(e=n[a].from,n[a].status.isReaded||(t+=1),n[a].from===st&&n[a].to===P.textContent||n[a].to===st&&n[a].from===P.textContent){0===a&&(W.innerHTML="");const e=new Date(n[a].datetime).toString().slice(4,24),t=st===n[a].from,s=n[a].status.isEdited?"edited":"";let o="";t&&n[a].status.isReaded?o="read":t&&n[a].status.isDelivered?o="delivered":t&&!n[a].status.isEdited&&(o="not delivered"),se(n[a].from,e,n[a].text,o,s,t,n[a].id,n[a].status.isReaded)}const a=H.getElementsByClassName("count-msgs");for(let n=0;n<a.length;n+=1)a[n].dataset.login===e&&(a[n].textContent=t>0?String(t):"");!function(){const e=W.getElementsByClassName("line-read");e.length>0?W.scrollTo({top:e[0].offsetTop-150,left:0,behavior:"smooth"}):W.scrollTo({top:W.scrollHeight,left:0,behavior:"smooth"})}(),0===W.getElementsByClassName("msg").length&&(W.innerHTML="... starting a dialogue with the user ...")}}();break;case"MSG_SEND":s();break;case"MSG_DELIVER":case"MSG_READ":case"MSG_EDIT":case"MSG_DELETE":He(a,P.textContent||"")}}}(),H.addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("chat__users__user")){W.innerHTML="";const e=t.dataset.login||"",n=Qe();ae(e,String(t.dataset.isLogined),"add"),He(n,e),H.classList.remove("chat__users_show")}})),ve.addEventListener("click",(e=>{e.preventDefault(),!1===ve.disabled&&(rt(),we(),dt())})),k.addEventListener("click",(()=>{if(void 0!==sessionStorage.user){const e=JSON.parse(sessionStorage.user);!function(e,t,n){const a={id:e,type:"USER_LOGOUT",payload:{user:{login:t,password:n}}};et.send(JSON.stringify(a))}(e.id,e.name,e.pass),W.innerHTML=""}})),K.addEventListener("click",(()=>{lt(),nt.play()})),W.addEventListener("click",(()=>{pt()})),W.addEventListener("wheel",(()=>{pt()})),X.addEventListener("click",(e=>{const t=e.target;"Edit"===t.textContent&&(q.dataset.edit="true",q.value=X.dataset.msgText||"",K.disabled=!1),"Delete"===t.textContent&&(!function(e,t){const n={id:e,type:"MSG_DELETE",payload:{message:{id:t}}};et.send(JSON.stringify(n))}(Qe(),X.dataset.msgId||""),ct())})),document.body.addEventListener("click",(e=>{mt(e.target)})),document.body.addEventListener("contextmenu",(e=>{e.preventDefault(),mt(e.target)})),window.addEventListener("keydown",(e=>{if("Enter"===e.key){if(!1===ve.disabled&&"#login"===location.hash)return rt(),we(),void dt();!1===K.disabled&&"#chat"===location.hash&&!Ie.classList.contains("modal_show")&&Se.classList.contains("loading_hide")&&lt()}})),window.addEventListener("load",(()=>{it()})),window.addEventListener("hashchange",(()=>{it()}))})()})();