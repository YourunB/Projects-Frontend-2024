(()=>{"use strict";var n={816:(n,e,t)=>{t.d(e,{c:()=>h});var o=t(500),r=t.n(o),a=t(312),i=t.n(a),s=t(536),c=t.n(s),d=new URL(t(572),t.b),l=new URL(t(700),t.b),u=i()(r()),m=c()(d),p=c()(l);u.push([n.id,`.car-box {\n  position: relative;\n  z-index: 0;\n  width: 100%;\n  height: 90px;\n  background-image: url(${m});\n  background-size: contain;\n}\n\n.car-box::after {\n  content: '';\n  background-image: url(${p});\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  bottom: 0;\n  right: 40px;\n}\n\n.car-box__header {\n  position: relative;\n  z-index: 10;\n  height: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.car-image {\n  position: absolute;\n  z-index: 0;\n  left: 70px;\n  bottom: -25px;\n  width: 80px;\n}\n\n.car-image svg {\n  width: 100%;\n}\n\n.car-box__btn,\n.car-box__header__btn {\n  background: none;\n  color: white;\n  outline: none;\n  border: solid 2px white;\n  border-radius: 2px;\n  padding: 5px 5px;\n  transition: 0.5s;\n  margin: 5px;\n}\n\n.btn-a {\n  border-color: greenyellow;\n}\n\n.btn-b,\n.car-box__header__btn:nth-of-type(2) {\n  border-color: red;\n}\n\n@media (hover: hover) {\n  .car-box__btn:hover,\n  .car-box__header__btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n\n  .car-box__btn:hover:active,\n  .car-box__header__btn:active {\n    cursor: pointer;\n    transition: 0.2s;\n    transform: scale(0.9);\n  }\n}\n\n.car-box__btn:disabled,\n.car-box__header__btn:disabled {\n  color: gray;\n  border-color: gray;\n  pointer-events: none;\n}\n`,""]);const h=u},152:(n,e,t)=>{t.d(e,{c:()=>s});var o=t(500),r=t.n(o),a=t(312),i=t.n(a)()(r());i.push([n.id,".footer {\n  height: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 0 10px 10px 10px;\n}\n\n.footer__btn {\n  background: none;\n  color: white;\n  outline: none;\n  border: solid 2px white;\n  border-radius: 2px;\n  padding: 5px 10px;\n  transition: 0.5s;\n  min-width: 100px;\n}\n\n.footer__btn_hide {\n  display: none;\n}\n\n.footer__btn_disable {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n@media (hover: hover) {\n  .footer__btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n\n  .footer__btn:active {\n    cursor: pointer;\n    transition: 0.2s;\n    transform: scale(0.9);\n  }\n}\n\n.footer__btn:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n",""]);const s=i},740:(n,e,t)=>{t.d(e,{c:()=>s});var o=t(500),r=t.n(o),a=t(312),i=t.n(a)()(r());i.push([n.id,".form-create {\n  transition: 0.2s;\n}\n\n.form-create_disable {\n  pointer-events: none;\n}\n\n.form-create-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.form-create-wrapper_disable {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.form-create__input-text {\n  outline: none;\n  font-weight: 700;\n  background: none;\n  border: none;\n  color: white;\n  border-bottom: solid 2px white;\n}\n\n.form-create__input-color {\n  outline: none;\n  background: white;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.form-create__btn {\n  background: none;\n  color: white;\n  border: solid 2px white;\n  outline: none;\n  min-width: 80px;\n  transition: 0.5s;\n  border-radius: 2px;\n  padding: 5px;\n}\n\n.form-create__btn-race {\n  border-color: greenyellow;\n}\n\n@media (hover: hover) {\n  .form-create__btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n\n  .form-create__btn:hover {\n    transition: 0.2;\n    transform: scale(0.9);\n  }\n}\n\n.form-create__btn:disabled {\n  pointer-events: none;\n  border-color: white;\n  opacity: 0.5;\n}\n",""]);const s=i},444:(n,e,t)=>{t.d(e,{c:()=>s});var o=t(500),r=t.n(o),a=t(312),i=t.n(a)()(r());i.push([n.id,".header {\n  height: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 10px 0 10px;\n}\n\n.header__btn {\n  background: none;\n  color: white;\n  outline: none;\n  border: solid 2px white;\n  border-radius: 2px;\n  padding: 5px 10px;\n  transition: 0.5s;\n  min-width: 100px;\n}\n\n@media (hover: hover) {\n  .header__btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n\n  .header__btn:active {\n    cursor: pointer;\n    transition: 0.2s;\n    transform: scale(0.9);\n  }\n}\n",""]);const s=i},232:(n,e,t)=>{t.d(e,{c:()=>s});var o=t(500),r=t.n(o),a=t(312),i=t.n(a)()(r());i.push([n.id,".overlay {\n  position: fixed;\n  position: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(5px);\n  transform: scale(0);\n  transition: 0.2s;\n}\n\n.overlay_show {\n  transform: scale(1);\n}\n\n.modal {\n  max-width: 500px;\n  width: 100%;\n  padding: 20px;\n  overflow: auto;\n  background: white;\n  border-radius: 3px;\n  color: black;\n}\n\n.modal__title {\n  color: orange;\n  text-align: center;\n}\n\n.modal__message {\n  text-align: center;\n}\n\n.modal__btn {\n  background: rgb(159, 241, 35);\n  color: white;\n  outline: none;\n  border: solid 2px rgb(159, 241, 35);\n  font-weight: 700;\n  border-radius: 2px;\n  padding: 5px 5px;\n  transition: 0.5s;\n  margin: auto;\n  display: block;\n}\n\n@media (hover: hover) {\n  .modal__btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n\n  .modal__btn:active {\n    cursor: pointer;\n    transition: 0.2s;\n    transform: scale(0.9);\n  }\n}\n",""]);const s=i},416:(n,e,t)=>{t.d(e,{c:()=>s});var o=t(500),r=t.n(o),a=t(312),i=t.n(a)()(r());i.push([n.id,".table-winners {\n  border-collapse: collapse;\n  max-width: 500px;\n  width: 100%;\n  outline: none;\n}\n\nth,\ntd {\n  border: solid 1px white;\n  padding: 5px;\n  text-align: center;\n  vertical-align: middle;\n}\n\nth:nth-of-type(1) {\n  width: 40px;\n}\nth:nth-of-type(2) {\n  width: 40px;\n}\nth:nth-of-type(3) {\n  width: 100px;\n}\nth:nth-of-type(4) {\n  width: 60px;\n}\nth:nth-of-type(5) {\n  width: 60px;\n}\n\nth {\n  background: white;\n  color: black;\n}\n\n.btn-sort {\n  color: rgb(0, 80, 0);\n  transition: 0.5s;\n}\n\n.btn-sort_disable {\n  pointer-events: none;\n  cursor: default;\n}\n\n@media (hover: hover) {\n  .btn-sort:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n}\n\n.btn-sort:active {\n  transition: 0.2s;\n  transform: scale(0.9);\n}\n",""]);const s=i},344:(n,e,t)=>{t.d(e,{c:()=>s});var o=t(500),r=t.n(o),a=t(312),i=t.n(a)()(r());i.push([n.id,"html {\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n  background-color: black;\n  color: white;\n  user-select: none;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  max-width: 1440px;\n  width: 100%;\n  margin: auto;\n  min-height: 100vh;\n}\n\n.main {\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  min-height: calc(100vh - 120px);\n}\n",""]);const s=i},640:(n,e,t)=>{t.d(e,{c:()=>s});var o=t(500),r=t.n(o),a=t(312),i=t.n(a)()(r());i.push([n.id,".garage-page {\n  width: 100%;\n  transition: 0.5s;\n}\n\n.garage-page_hide {\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: scale(0);\n}\n\n.garage-page__content {\n}\n",""]);const s=i},268:(n,e,t)=>{t.d(e,{c:()=>s});var o=t(500),r=t.n(o),a=t(312),i=t.n(a)()(r());i.push([n.id,".winners-page {\n  width: 100%;\n  transition: 0.5s;\n}\n\n.winners-page_hide {\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: scale(0);\n}\n\n.winners-page__num {\n}\n\n.winners-page__title {\n}\n",""]);const s=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},536:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=r(p,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},176:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},700:(n,e,t)=>{n.exports=t.p+"flag.png"},572:(n,e,t)=>{n.exports=t.p+"road.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(596),e=t.n(n),o=t(520),r=t.n(o),a=t(176),i=t.n(a),s=t(120),c=t.n(s),d=t(808),l=t.n(d),u=t(936),m=t.n(u),p=t(344),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(p.c,h),p.c&&p.c.locals&&p.c.locals;var f=t(444),b={};b.styleTagTransform=m(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(f.c,b),f.c&&f.c.locals&&f.c.locals;const v=document.createElement("header");v.classList.add("header");const g=document.createElement("button"),_=document.createElement("button");g.classList.add("header__btn"),_.classList.add("header__btn"),g.textContent="To Garage",_.textContent="To Winners",v.append(g,_);var x=t(152),y={};y.styleTagTransform=m(),y.setAttributes=c(),y.insert=i().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=l(),e()(x.c,y),x.c&&x.c.locals&&x.c.locals;const w=document.createElement("footer");w.classList.add("footer");const E=document.createElement("button"),L=document.createElement("button"),C=document.createElement("button"),T=document.createElement("button");function N(){C.classList.toggle("footer__btn_hide"),T.classList.toggle("footer__btn_hide"),E.classList.toggle("footer__btn_hide"),L.classList.toggle("footer__btn_hide")}E.classList.add("footer__btn"),L.classList.add("footer__btn"),C.className="footer__btn footer__btn_hide",T.className="footer__btn footer__btn_hide",E.textContent="Next",E.id="btn-next",L.textContent="Prev",L.id="btn-prev",C.textContent="Next",T.textContent="Prev",w.append(L,E,T,C);var k=t(640),A={};A.styleTagTransform=m(),A.setAttributes=c(),A.insert=i().bind(null,"head"),A.domAPI=r(),A.insertStyleElement=l(),e()(k.c,A),k.c&&k.c.locals&&k.c.locals;const P=document.createElement("section");P.classList.add("garage-page");var I=t(268),B={};B.styleTagTransform=m(),B.setAttributes=c(),B.insert=i().bind(null,"head"),B.domAPI=r(),B.insertStyleElement=l(),e()(I.c,B),I.c&&I.c.locals&&I.c.locals;const M=document.createElement("section");M.className="winners-page winners-page_hide";const S=document.createElement("h2");S.classList.add("winners-page__title");const $=document.createElement("h3");$.classList.add("winners-page__num"),M.append(S,$);var j=t(416),H={};H.styleTagTransform=m(),H.setAttributes=c(),H.insert=i().bind(null,"head"),H.domAPI=r(),H.insertStyleElement=l(),e()(j.c,H),j.c&&j.c.locals&&j.c.locals;const R=document.createElement("table");R.classList.add("table-winners");const z=document.createElement("thead");z.innerHTML='<tr><th>№</th><th>Car</th><th>Name</th><th class="btn-sort btn-sort-win" id="btn-sort-win">Wins</th><th class="btn-sort btn-sort-time" id="btn-sort-time">Best time(sec)</th><tr>';const O=document.createElement("tbody");function G(n,e,t,o,r){const a=document.createElement("tr");return a.innerHTML=`\n    <td>${n}</td>\n    <td>\n      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420.849 420.849" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g>\n          <g fill="${e}">\n            <path d="m81.123,216.924c-17.161,0-31.125,13.959-31.125,31.12 0,17.166 13.959,31.131 31.125,31.131 17.155,0 31.12-13.959 31.12-31.131-1.42109e-14-17.156-13.965-31.12-31.12-31.12zm0,44.956c-7.631,0-13.831-6.205-13.831-13.837 0-7.62 6.199-13.825 13.831-13.825 7.626,0 13.825,6.205 13.825,13.825-1.42109e-14,7.626-6.199,13.837-13.825,13.837z"/>\n            <path d="m339.65,222.541c-15.612,0-28.308,12.702-28.308,28.308s12.702,28.32 28.308,28.32c15.606,0 28.308-12.713 28.308-28.32s-12.696-28.308-28.308-28.308zm0,39.339c-6.083,0-11.019-4.948-11.019-11.031 0-6.071 4.936-11.019 11.019-11.019 6.071,0 11.019,4.948 11.019,11.019 0,6.083-4.948,11.031-11.019,11.031z"/>\n            <rect width="177.544" x="120.497" y="257.375" height="17.295"/>\n            <polygon points="415.202,206.405 407.012,198.226 391.371,190.746 285.421,180.705 231.121,141.674     185.461,141.674 127.465,151.541 59.835,182.794 43.699,177.637 0,177.637 0,191.712 13.441,211.877 0,220.981 0,251.67     12.079,263.743 24.303,251.524 17.283,244.504 17.283,230.161 37.354,216.574 22.918,194.926 41.004,194.926 60.976,201.317     132.634,168.201 186.922,158.969 225.55,158.969 279.134,197.475 386.685,207.662 396.883,212.546 399.945,215.596     403.275,226.406 402.012,237.728 391.953,252.84 406.331,262.439 418.736,243.823 420.849,224.736   "/>\n          </g>\n        </g>\n      </svg></td>\n    <td>${t}</td>\n    <td>${o}</td>\n    <td>${r}</td>\n  `,a}R.append(z,O);var D=t(816),U={};U.styleTagTransform=m(),U.setAttributes=c(),U.insert=i().bind(null,"head"),U.domAPI=r(),U.insertStyleElement=l(),e()(D.c,U),D.c&&D.c.locals&&D.c.locals;var F=function(n,e,t,o){return new(t||(t=Promise))((function(r,a){function i(n){try{c(o.next(n))}catch(n){a(n)}}function s(n){try{c(o.throw(n))}catch(n){a(n)}}function c(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,s)}c((o=o.apply(n,e||[])).next())}))};const W=["Toyota","Honda","Ford","Chevrolet","Nissan","Volkswagen","BMW","Mercedes-Benz","Audi","Hyundai","Kia","Subaru","Lexus","Mazda","Jeep","Volvo","Porsche","Tesla","Ferrari","Lamborghini","Jaguar","Land Rover","Mini","Alfa Romeo","Maserati","Bentley","Rolls-Royce","Bugatti","McLaren","Aston Martin","Lotus","Infiniti","Genesis","Lincoln","Buick","Chrysler","Dodge","GMC","Ram","Cadillac","Acura","Suzuki","Fiat","Smart","Hummer","Saturn","Pontiac","Oldsmobile","Geely","Chery"],J=["Camry","Civic","Mustang","Silverado","Altima","Golf","3 Series","C-Class","A4","Elantra","Optima","Outback","RX","CX-5","Cherokee","XC90","911","Model S","488 GTB","Huracán","F-PACE","Range Rover","Cooper","Giulia","GranTurismo","Continental","Phantom","Chiron","570S","DB11","Evora","QX80","G80","Navigator","Enclave","300","Challenger","Sierra","1500","Escalade","MDX","Swift","500","ForTwo","H3","Vue","G6","Alero","Atlas","X5"];function X(n){const e=n.getElementsByTagName("input");for(let n=0;n<e.length;n+=1)"text"===e[n].type&&(e[n].value=""),"color"===e[n].type&&(e[n].value="#000000")}function Y(){let n="#";for(let e=0;e<6;e+=1)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n}var V=t(232),q={};q.styleTagTransform=m(),q.setAttributes=c(),q.insert=i().bind(null,"head"),q.domAPI=r(),q.insertStyleElement=l(),e()(V.c,q),V.c&&V.c.locals&&V.c.locals;const Q=document.createElement("div");Q.classList.add("overlay");const K=document.createElement("div");K.classList.add("modal");const Z=document.createElement("h3");Z.classList.add("modal__title");const nn=document.createElement("p");nn.classList.add("modal__message");const en=document.createElement("button");function tn(n,e){Z.textContent=n,nn.textContent=e,Q.classList.add("overlay_show")}en.classList.add("modal__btn"),en.textContent="Continue",K.append(Z,nn,en),Q.append(K),en.addEventListener("click",(()=>{Q.classList.remove("overlay_show")}));var on=function(n,e,t,o){return new(t||(t=Promise))((function(r,a){function i(n){try{c(o.next(n))}catch(n){a(n)}}function s(n){try{c(o.throw(n))}catch(n){a(n)}}function c(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,s)}c((o=o.apply(n,e||[])).next())}))};function rn(n){return on(this,void 0,void 0,(function*(){yield fetch("http://127.0.0.1:3000/garage",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).catch((()=>{console.log("No connection to create car in API")}))}))}var an=t(740),sn={};sn.styleTagTransform=m(),sn.setAttributes=c(),sn.insert=i().bind(null,"head"),sn.domAPI=r(),sn.insertStyleElement=l(),e()(an.c,sn),an.c&&an.c.locals&&an.c.locals;const cn=document.createElement("div");cn.classList.add("form-create");const dn=document.createElement("input");dn.classList.add("form-create__input-text"),dn.type="text";const ln=document.createElement("input");ln.classList.add("form-create__input-color"),ln.type="color";const un=document.createElement("button");un.classList.add("form-create__btn"),un.textContent="Create";const mn=document.createElement("div");mn.classList.add("form-create-wrapper"),mn.append(dn,ln,un);const pn=document.createElement("input");pn.classList.add("form-create__input-text"),pn.type="text";const hn=document.createElement("input");hn.classList.add("form-create__input-color"),hn.type="color";const fn=document.createElement("button");fn.classList.add("form-create__btn"),fn.textContent="Update";const bn=document.createElement("div");bn.className="form-create-wrapper form-create-wrapper_disable",bn.append(pn,hn,fn);const vn=document.createElement("button");vn.className="form-create__btn form-create__btn-race",vn.textContent="Race";const gn=document.createElement("button");gn.className="form-create__btn form-create__btn-race",gn.textContent="Reset",gn.disabled=!0;const _n=document.createElement("button");_n.classList.add("form-create__btn"),_n.textContent="Generate Cars";const xn=document.createElement("div");xn.classList.add("form-create-wrapper"),xn.append(vn,gn,_n),cn.append(mn,bn,xn);var yn=function(n,e,t,o){return new(t||(t=Promise))((function(r,a){function i(n){try{c(o.next(n))}catch(n){a(n)}}function s(n){try{c(o.throw(n))}catch(n){a(n)}}function c(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,s)}c((o=o.apply(n,e||[])).next())}))},wn=function(n,e,t,o){return new(t||(t=Promise))((function(r,a){function i(n){try{c(o.next(n))}catch(n){a(n)}}function s(n){try{c(o.throw(n))}catch(n){a(n)}}function c(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,s)}c((o=o.apply(n,e||[])).next())}))};const En=document.createElement("div");En.classList.add("container"),document.body.append(En);const Ln=document.createElement("main");Ln.classList.add("main"),En.append(v,Ln,w,Q),Ln.append(P,M),P.append(cn),M.append(R);let Cn=!1,Tn=1,Nn=1,kn=[];const An=[];let Pn="no";const In=document.getElementById("btn-sort-win"),Bn=document.getElementById("btn-sort-time");function Mn(n){return{carImage:n.getElementsByClassName("car-image")[0],btnA:n.getElementsByClassName("btn-a")[0],btnB:n.getElementsByClassName("btn-b")[0],btnSelect:n.getElementsByClassName("car-box__header__btn")[0],btnRemove:n.getElementsByClassName("car-box__header__btn")[1]}}const Sn=[];function $n(n,e){return wn(this,void 0,void 0,(function*(){const t=Mn(n);t.btnA.disabled=!0;const o=t.carImage.getBoundingClientRect().width,r=n.getBoundingClientRect().width-2*o,a=yield function(n){return on(this,void 0,void 0,(function*(){let e;return yield fetch(`http://127.0.0.1:3000/engine?id=${n}&status=started`,{method:"PATCH"}).then((n=>{e=n.json()})).catch((()=>{console.log("No connection to start car in API")})),e}))}(e);if(!a)return;let i;if(!("distance"in a)||!("velocity"in a))return;i=a;const s=Number(i.distance)/Number(i.velocity);let c=0;t.btnB.disabled=!1,window.requestAnimationFrame((function(){let n=setInterval((()=>{c>=r&&n&&(clearInterval(n),gn.disabled=!1,function(n,e){wn(this,void 0,void 0,(function*(){let t=!1;!Cn&&n&&(null==An||An.forEach((o=>wn(this,void 0,void 0,(function*(){if(Number(o.id)===n)return t=!0,void(yield function(n,e){return yn(this,void 0,void 0,(function*(){yield fetch(`http://127.0.0.1:3000/winners/${e}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).catch((()=>{console.log("No connection to update winner in API")}))}))}({wins:o.wins+1,time:e<o.time?e:o.time},n))})))),t||(yield function(n){return yn(this,void 0,void 0,(function*(){yield fetch("http://127.0.0.1:3000/winners",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).catch((()=>{console.log("No connection to save winner in API")}))}))}({id:n,wins:1,time:e})),Wn(),Cn=!0,null==kn||kn.forEach((t=>{Number(t.id)===n&&tn("Congratulations",`Car ${t.name} is WIN! Time: ${e} sec.`)})))}))}(e,Number((s/1e3).toFixed(2)))),c+=r/s*10,t.carImage.style.transform=`translateX(${c}px)`}),10);(function(n){return on(this,void 0,void 0,(function*(){return fetch(`http://127.0.0.1:3000/engine?id=${n}&status=drive`,{method:"PATCH"}).then((n=>200!==n.status?{success:!1}:n.json().then((n=>Object.assign({},n))))).catch((()=>{console.log("No connection to car engine in API")}))}))})(e).then((e=>{!e.success&&n&&clearInterval(n)})),t.btnB.addEventListener("click",(()=>{n&&(jn(e,t,Number(n)),n=void 0)})),Sn.push(Number(n))}))}))}function jn(n,e,t){return wn(this,void 0,void 0,(function*(){e.btnB.disabled=!0,t&&clearInterval(t);for(let n=0;n<Sn.length;n+=1)if(Sn[n]===t){Sn.splice(n,1);break}yield function(n){return on(this,void 0,void 0,(function*(){let e;return yield fetch(`http://127.0.0.1:3000/engine?id=${n}&status=stopped`,{method:"PATCH"}).then((n=>{e=n.json()})).catch((()=>{console.log("No connection to stop car in API")})),e}))}(n),e.carImage.style.transform="",e.btnA.disabled=!1,function(){const n=P.getElementsByClassName("car-image");for(let e=0;e<n.length;e+=1)if(""!==n[e].style.transform)return void(vn.disabled=!0);vn.disabled=!1,gn.disabled=!0,function(){_n.disabled=!1,E.classList.remove("footer__btn_disable"),L.classList.remove("footer__btn_disable"),pn.value.length>0&&bn.classList.remove("form-create-wrapper_disable"),mn.classList.remove("form-create-wrapper_disable");const n=P.getElementsByClassName("car-box__header__btn");Array.from(n).forEach((n=>n.disabled=!1))}()}()}))}function Hn(n="",e="white",t){return wn(this,void 0,void 0,(function*(){const o=yield function(n,e,t){return F(this,void 0,void 0,(function*(){const o=document.createElement("div");o.classList.add("car-box"),o.dataset.id=`${t}`,o.id=`${t}`;const r=document.createElement("div");r.classList.add("car-box__header"),o.append(r);const a=document.createElement("button");a.classList.add("car-box__header__btn"),a.textContent="Select",a.dataset.id=`${t}`;const i=document.createElement("button");i.classList.add("car-box__header__btn"),i.textContent="Remove",i.dataset.id=`${t}`;const s=document.createElement("p");s.classList.add("car-box__header__car"),s.textContent=n,r.append(a,i,s);const c=document.createElement("button"),d=document.createElement("button");c.className="car-box__btn btn-a",d.className="car-box__btn btn-b",c.textContent="A",d.textContent="B",d.disabled=!0,c.dataset.id=`${t}`,d.dataset.id=`${t}`;const l=function(n="white"){const e=document.createElement("div");return e.classList.add("car-image"),e.innerHTML=`\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420.849 420.849" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g>\n        <g fill="${n}">\n          <path d="m81.123,216.924c-17.161,0-31.125,13.959-31.125,31.12 0,17.166 13.959,31.131 31.125,31.131 17.155,0 31.12-13.959 31.12-31.131-1.42109e-14-17.156-13.965-31.12-31.12-31.12zm0,44.956c-7.631,0-13.831-6.205-13.831-13.837 0-7.62 6.199-13.825 13.831-13.825 7.626,0 13.825,6.205 13.825,13.825-1.42109e-14,7.626-6.199,13.837-13.825,13.837z"/>\n          <path d="m339.65,222.541c-15.612,0-28.308,12.702-28.308,28.308s12.702,28.32 28.308,28.32c15.606,0 28.308-12.713 28.308-28.32s-12.696-28.308-28.308-28.308zm0,39.339c-6.083,0-11.019-4.948-11.019-11.031 0-6.071 4.936-11.019 11.019-11.019 6.071,0 11.019,4.948 11.019,11.019 0,6.083-4.948,11.031-11.019,11.031z"/>\n          <rect width="177.544" x="120.497" y="257.375" height="17.295"/>\n          <polygon points="415.202,206.405 407.012,198.226 391.371,190.746 285.421,180.705 231.121,141.674     185.461,141.674 127.465,151.541 59.835,182.794 43.699,177.637 0,177.637 0,191.712 13.441,211.877 0,220.981 0,251.67     12.079,263.743 24.303,251.524 17.283,244.504 17.283,230.161 37.354,216.574 22.918,194.926 41.004,194.926 60.976,201.317     132.634,168.201 186.922,158.969 225.55,158.969 279.134,197.475 386.685,207.662 396.883,212.546 399.945,215.596     403.275,226.406 402.012,237.728 391.953,252.84 406.331,262.439 418.736,243.823 420.849,224.736   "/>\n        </g>\n      </g>\n    </svg>\n  `,e}(e);return o.append(c,d,l),o}))}(n,e,t);o.addEventListener("click",(n=>{const e=n.target,t=n.currentTarget;"BUTTON"===e.tagName&&("Remove"===e.textContent&&(tn("Info","You have deleted the car"),function(n){wn(this,void 0,void 0,(function*(){yield function(n){return on(this,void 0,void 0,(function*(){yield fetch(`http://127.0.0.1:3000/garage/${n}`,{method:"DELETE"}).catch((()=>{console.log("No connection to remove car in API")}))}))}(n),yield function(n){return yn(this,void 0,void 0,(function*(){yield fetch(`http://127.0.0.1:3000/winners/${n}`,{method:"DELETE"}).catch((()=>{console.log("No connection to remove winner in API")}))}))}(n),X(P),zn(),Wn()}))}(Number(e.dataset.id))),"Select"===e.textContent&&function(n){wn(this,void 0,void 0,(function*(){const e=(yield function(n){return on(this,void 0,void 0,(function*(){let e;return yield fetch(`http://127.0.0.1:3000/garage/${n}`,{method:"GET"}).then((n=>{e=n.json()})).catch((()=>{console.log("No connection to car in API")})),e}))}(n))||{name:"",color:"black"};pn.value=e.name,pn.dataset.id=`${n}`,hn.value=e.color,bn.classList.remove("form-create-wrapper_disable")}))}(Number(e.dataset.id)),"A"===e.textContent&&(Un(),$n(t,Number(e.dataset.id))))}));const r=P.getElementsByClassName("garage-page__content");r[r.length-1].append(o)}))}function Rn(){var n,e,t;return wn(this,void 0,void 0,(function*(){kn=yield function(){return on(this,void 0,void 0,(function*(){let n;return yield fetch("http://127.0.0.1:3000/garage",{method:"GET"}).then((e=>{n=e.json()})).catch((()=>{console.log("No connection to garage in API")})),n}))}(),kn||(kn=[]);const o=1===Tn?0:7*(Tn-1),r=7*Tn;if(kn.length<=o&&Tn>1)return Tn-=1,void Rn();r<kn.length?E.disabled=!1:E.disabled=!0,L.disabled=!(r>7),function(n,e){const t=document.createElement("div");t.classList.add("garage-page__content"),P.append(t);const o=document.createElement("h2");o.classList.add("garage-page__content__total"),o.textContent=`Garage (${e})`;const r=document.createElement("h3");r.classList.add("garage-page__content__number"),r.textContent=`Page #${n}`,t.append(o,r)}(Tn,kn.length);for(let a=o;a<kn.length&&a<r;a+=1)Hn(null===(n=kn[a])||void 0===n?void 0:n.name,null===(e=kn[a])||void 0===e?void 0:e.color,Number(null===(t=kn[a])||void 0===t?void 0:t.id));setTimeout((()=>{cn.classList.remove("form-create_disable"),vn.disabled=!1}),500)}))}function zn(){return wn(this,void 0,void 0,(function*(){E.disabled=!0,L.disabled=!0,gn.disabled=!0,bn.classList.add("form-create-wrapper_disable"),cn.classList.add("form-create_disable");const[n]=P.getElementsByClassName("garage-page__content");n.remove(),Rn()}))}function On(){return wn(this,void 0,void 0,(function*(){let n=[];n=yield function(){return yn(this,void 0,void 0,(function*(){let n;return yield fetch("http://127.0.0.1:3000/winners",{method:"GET"}).then((e=>{n=e.json()})).catch((()=>{console.log("No connection to winners in API")})),n}))}(),n||(n=[]),An.length=0,n.forEach((n=>{null==kn||kn.forEach((e=>{n.id===e.id&&An.push(Object.assign(Object.assign({},n),e))}))})),function(){switch(Pn){case"no":default:break;case"winDown":An.sort(((n,e)=>e.wins-n.wins));break;case"winUp":An.sort(((n,e)=>n.wins-e.wins));break;case"timeDown":An.sort(((n,e)=>e.time-n.time));break;case"timeUp":An.sort(((n,e)=>n.time-e.time))}}()}))}function Gn(){return wn(this,void 0,void 0,(function*(){const n=O.getElementsByTagName("tr");Array.from(n).forEach((n=>n.remove()))}))}function Dn(){const n=1===Nn?0:10*(Nn-1),e=10*Nn;if(An.length<=n&&Nn>1)return Nn-=1,void Dn();e<An.length?C.disabled=!1:C.disabled=!0,T.disabled=!(e>10);for(let t=n;t<An.length&&t<e;t+=1)O.append(G(t+1,An[t].color,An[t].name,An[t].wins,An[t].time));S.textContent=`Winners (${An.length})`,$.textContent=`Page #${Nn}`}function Un(){vn.disabled=!0,_n.disabled=!0,E.classList.add("footer__btn_disable"),L.classList.add("footer__btn_disable"),bn.classList.add("form-create-wrapper_disable"),mn.classList.add("form-create-wrapper_disable");const n=P.getElementsByClassName("car-box__header__btn");Array.from(n).forEach((n=>n.disabled=!0))}let Fn=Promise.resolve();function Wn(){Fn=Fn.then((()=>function(){return wn(this,void 0,void 0,(function*(){yield Gn(),yield On(),Dn()}))}()))}function Jn(){In.classList.add("btn-sort_disable"),Bn.classList.add("btn-sort_disable"),setTimeout((()=>{In.classList.remove("btn-sort_disable"),Bn.classList.remove("btn-sort_disable")}),750)}!function(){wn(this,void 0,void 0,(function*(){yield Rn(),yield On(),Dn()}))}(),E.addEventListener("click",(()=>{Tn+=1,zn()})),L.addEventListener("click",(()=>{Tn-=1,zn()})),C.addEventListener("click",(()=>wn(void 0,void 0,void 0,(function*(){Nn+=1,yield Gn(),Dn()})))),T.addEventListener("click",(()=>wn(void 0,void 0,void 0,(function*(){Nn-=1,yield Gn(),Dn()})))),In.addEventListener("click",(()=>{switch(Jn(),Pn){case"no":Pn="winDown",In.innerHTML="Wins&#8595;";break;case"winDown":Pn="winUp",In.innerHTML="Wins&#8593;";break;default:Pn="no",In.innerHTML="Wins"}Bn.innerHTML="Best time(sec)",Wn()})),Bn.addEventListener("click",(()=>{switch(Jn(),Pn){case"no":Pn="timeDown",Bn.innerHTML="Best time(sec)&#8595;";break;case"timeDown":Pn="timeUp",Bn.innerHTML="Best time(sec)&#8593;";break;default:Pn="no",Bn.innerHTML="Best time(sec)"}In.innerHTML="Wins",Wn()})),un.addEventListener("click",(()=>wn(void 0,void 0,void 0,(function*(){tn("Info","You have added new car");const n=(null==kn?void 0:kn.map((n=>Number(n.id))))||[0],e=Math.max(...n)+1,t={name:dn.value,color:ln.value,id:e};yield rn(t),zn(),X(P)})))),fn.addEventListener("click",(()=>wn(void 0,void 0,void 0,(function*(){tn("Info","You have updated car details");const n={name:pn.value,color:hn.value};yield function(n,e){return on(this,void 0,void 0,(function*(){yield fetch(`http://127.0.0.1:3000/garage/${e}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).catch((()=>{console.log("No connection to update car in API")}))}))}(n,Number(pn.dataset.id)),zn(),X(P)})))),vn.addEventListener("click",(()=>{Un(),Cn=!1,vn.disabled=!0;const n=P.getElementsByClassName("car-image");for(let e=0;e<n.length;e+=1){const t=n[e].parentElement;t&&$n(t,Number(t.dataset.id))}})),gn.addEventListener("click",(()=>{gn.disabled=!0,function(){Sn.length>0&&(Sn.forEach((n=>clearInterval(n))),Sn.length=0);const n=P.getElementsByClassName("car-image");for(let e=0;e<n.length;e+=1){const t=n[e].parentElement;if(t){const n=Mn(t);jn(Number(t.dataset.id),n)}}}()})),_n.addEventListener("click",(()=>wn(void 0,void 0,void 0,(function*(){tn("Info","You have added 100 new cars");const n=(null==kn?void 0:kn.map((n=>Number(n.id))))||[0];let e=Math.max(...n)+1;for(let n=0;n<100;n+=1){const n={name:`${W[Math.floor(50*Math.random())]} ${J[Math.floor(50*Math.random())]}`,color:Y(),id:e+=1};yield rn(n)}zn()})))),g.addEventListener("click",(()=>{N(),M.classList.add("winners-page_hide"),P.classList.remove("garage-page_hide")})),_.addEventListener("click",(()=>{N(),P.classList.add("garage-page_hide"),M.classList.remove("winners-page_hide")}))})()})();