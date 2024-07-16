(()=>{var n={6057:(n,e,t)=>{"use strict";t.d(e,{A:()=>l});var r=t(1601),o=t.n(r),a=t(6314),i=t.n(a),c=t(5759),s=i()(o());s.i(c.A),s.push([n.id,"nav ul li a#interests {\n  text-decoration: underline;\n  text-decoration-thickness: 4px;\n  text-underline-offset: 5px;\n  color: var(--theme-color);\n}\n\n.intro,\n.upcoming-activities,\n.past-activities {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n}\n\n.intro-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 16px;\n  color: var(--text-secondary-color);\n  line-height: 1.5;\n  padding-left: 15px;\n  width: 80%;\n  margin-top: 15px;\n}\n\n.title-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary-color);\n  font-size: var(--textSize-section-title);\n  font-weight: bold;\n  margin: 15px 0px 15px 0px;\n}\n\n.card-upcoming {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  border: var(--card-boder-style);\n  box-shadow: var(--main-shadow-style);\n  padding: 25px;\n  margin: 25px;\n  border-radius: 10px;\n}\n\n.card-upcoming {\n  width: 60%;\n  align-items: flex-start;\n}\n\n.card-upcoming-text,\n.card-past-text {\n  font-size: 16px;\n  color: var(--text-secondary-color);\n  line-height: 1.25;\n  list-style-type: disc;\n}\n\n.card-past-text {\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n.card-upcoming-header {\n  font-weight: bold;\n  margin-top: 15px;\n}\n\n.card-upcoming-text ul {\n  margin: 0px 0px 15px 0px;\n}\n.card-upcoming-text li {\n  margin-top: 5px;\n}\n\n.card-past-wrapper {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 30px;\n}\n\n.card-past-header {\n  font-size: var(--textSize-card-title);\n  color: var(--text-primary-color);\n  font-weight: bold;\n  margin: 5px 0px 10px 0px;\n}\n\n.card-past-img {\n  height: 200px;\n  width: 300px;\n  object-fit: cover;\n}\n\n.card-past {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 300px;\n  min-width: 300px;\n  flex-grow: 1;\n  border: var(--card-boder-style);\n  box-shadow: var(--main-shadow-style);\n  padding: 25px;\n  margin: 25px;\n  border-radius: 10px;\n}\n\n.card-past:hover {\n  box-shadow: var(--select-shadow-style);\n  border: var(--card-select-style);\n  cursor: pointer;\n}\n\n.card-past-link {\n  text-decoration: none;\n}\n\n.sentence-break {\n  color: var(--theme-color);\n  font-weight: bolder;\n  padding: 0px 2px 0px 2px;\n}\n\n/* Media query for smaller screens */\n@media (min-width: 420px) and (max-width: 768px) {\n  .card-past {\n    padding: 25px 20px;\n  }\n}\n\n/* For even smaller size. Reduce more margin size for projects card. */\n@media (max-width: 420px) {\n  .card-past {\n    padding: 25px 5px;\n    margin: 25px 5px;\n  }\n}\n",""]);const l=s},1540:(n,e,t)=>{"use strict";t.d(e,{A:()=>l});var r=t(1601),o=t.n(r),a=t(6314),i=t.n(a),c=t(5759),s=i()(o());s.i(c.A),s.push([n.id,"/* common styles for all pages */\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: var(--main-bg-color);\n}\n\n/* header section ------------------------------------ */\nheader {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n  height: var(--header-height);\n  width: 100%;\n  max-width: 1330px;\n  margin: var(--header-margin-size) auto;\n  background-color: var(--main-bg-color);\n  border-bottom: var(--header-border-size) solid var(--theme-color);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.logo {\n  font-size: 50px;\n  font-weight: 400;\n  padding: 0px 0px 0px 15px;\n  text-shadow: var(--logo-shadow);\n  font-family: var(--logo-font);\n  color: var(--theme-color);\n}\n\nnav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0px 15px 0px 0px;\n  display: flex;\n  font-size: 1.25rem;\n}\n\nnav ul li {\n  margin-left: 20px;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: var(--text-primary-color);\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\nnav ul li a:hover {\n  color: var(--theme-color);\n}\n\n@media (max-width: 768px) {\n  .logo {\n    font-size: 35px;\n  }\n\n  nav {\n    position: relative; /*to position menu item below menu-icon*/\n  }\n  nav ul {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    background-color: var(--main-bg-color);\n    opacity: 0.95;\n    padding: 5px 25px 5px 10px;\n    border-top: 2px solid #e4e4e4fd;\n  }\n\n  nav ul li {\n    margin: 0px;\n    padding: 5px 0px;\n  }\n\n  nav ul li a {\n    font-size: 0.9rem;\n    color: var(--text-secondary-color);\n  }\n\n  .menu-icon {\n    display: block;\n    cursor: pointer;\n    font-size: 1.25rem;\n    color: var(--text-secondary-color);\n    font-weight: bold;\n    padding: 0px 15px 0px 0px;\n  }\n}\n\n@media (min-width: 769px) {\n  .menu-icon {\n    display: none;\n  }\n  nav ul {\n    display: flex;\n  }\n}\n/* end of header section ------------------------------------ */\n\nmain {\n  width: 100%;\n  max-width: 1330px;\n  min-height: calc(\n    100vh - var(--header-height) - var(--header-border-size) -\n      var(--header-margin-size) * 2\n  );\n  background-color: var(--section-bg-color);\n  box-shadow: var(--main-shadow-style);\n}\n",""]);const l=s},5759:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var r=t(1601),o=t.n(r),a=t(6314),i=t.n(a)()(o());i.push([n.id,'/* variables declaration */\n:root {\n  /* color scheme */\n  --main-bg-color: #f3f3f3;\n  --header-bg-color: #ffffff;\n  --section-bg-color: #ffffff;\n  --theme-color: #52a6c0;\n  --text-primary-color: #333;\n  --text-secondary-color: #666;\n\n  /* text scheme */\n  --logo-font: "Satisfy", cursive;\n  --logo-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);\n  --textSize-section-title: 2rem;\n  --textSize-card-title: 1.25rem;\n\n  /* layout setting */\n  --header-height: 75px;\n  --header-border-size: 5px;\n  --header-margin-size: 5px;\n  --main-shadow-style: 8px 3px 10px 6px rgba(0, 0, 0, 0.1);\n  --select-shadow-style: 8px 3px 10px 6px rgba(0, 0, 0, 0.2);\n  --card-border-style: 1px solid #f3f3f3;\n  --card-select-style: 1px solid #e4e4e4fd;\n}\n',""]);const c=i},6314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},1601:n=>{"use strict";n.exports=function(n){return n[1]}},5072:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},7659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},5056:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},7825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},1113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},8510:()=>{document.querySelector(".menu-icon").addEventListener("click",(function(){const n=document.querySelector("nav ul");"flex"===n.style.display?n.style.display="none":n.style.display="flex"}))}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n=t(5072),e=t.n(n),r=t(7825),o=t.n(r),a=t(7659),i=t.n(a),c=t(5056),s=t.n(c),l=t(540),d=t.n(l),p=t(1113),u=t.n(p),m=t(1540),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;var x=t(6057),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(x.A,g),x.A&&x.A.locals&&x.A.locals;var h=t(5759),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),e()(h.A,v),h.A&&h.A.locals&&h.A.locals,t(8510);const y=t.p+"c1e44b1bc0f2b31ce1ad.jpg",b=t.p+"b142a754604d78510885.jpg",w=t.p+"08df4ba45d596b02b558.jpg",A=t.p+"055075a5d679d8c51fb9.jpg",j=t.p+"82ba8c453ff5c25b5888.jpg",I=t.p+"30f9bd6b6a330f431792.jpg",z=t.p+"d9a3508d4ad1115cdac0.jpg",E=t.p+"269b78518b3bc52a97dc.jpg",S=t.p+"76ac9e3f40bc97074e54.jpg",T=t.p+"56b57156d1801c9f8ca7.JPG",M=t.p+"9a99d4ac6959737e8483.jpg";document.getElementById("lap1_image").setAttribute("src",y),document.getElementById("GOPR0208").setAttribute("src",b),document.getElementById("IMG_3610_jpg").setAttribute("src",w),document.getElementById("IMG_3460_jpg").setAttribute("src",A),document.getElementById("langkawi1").setAttribute("src",j),document.getElementById("langkawi2").setAttribute("src",I),document.getElementById("IMG_3293").setAttribute("src",z),document.getElementById("IMG_3155").setAttribute("src",E),document.getElementById("pdClassic1").setAttribute("src",S),document.getElementById("IMG_3048").setAttribute("src",T),document.getElementById("squad_1").setAttribute("src",M)})()})();