(()=>{"use strict";var n={424:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\nform input,\r\nform button {\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196f3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196f3;\r\n}\r\n\r\ninput:checked + .slider::before {\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round::before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.container {\r\n  background: url('https://en.euractiv.eu/wp-content/uploads/sites/2/2019/05/Autumn_forest-800x450.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.api-div {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  padding: 40px;\r\n  width: 40%;\r\n  height: 30%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.slider-div {\r\n  margin-top: 10px;\r\n}\r\n\r\n.result {\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n}\r\n",""]);const i=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],s=r.base?c[0]+r.base:c[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var d=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:l,updater:b(p,r),references:1}),t.push(l)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,l=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function d(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,h=0;function b(n,r){var e,t,o;if(r.singleton){var i=h++;e=f||(f=s(r)),t=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=s(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var s=c(n,r),u=0;u<e.length;u++){var l=a(e[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=s}}}}},r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{const n=(()=>{const n=async n=>{const r=document.querySelector("input").value;try{const e=await(async(n,r)=>{const e=`https://api.openweathermap.org/data/2.5/weather?q=${n}&units=${r}&appid=94193b62c5095be38288793639b5cfdc`,t=await fetch(e);return await t.json()})(r,n),t=document.querySelector(".result");return t.textContent=`${e.main.temp} deg.`,t.textContent+="metric"===n?" Celcius":" Fahrenheit",t.innerHTML+=`<br> ${e.weather[0].description}`,"success"}catch(n){return n}};return{apicall:()=>{const r=document.forms["api-call"];let e="";const t=document.querySelector(".toggle-btn");t.addEventListener("click",(()=>{e=t.checked?"imperial":"metric",n(e)})),r.addEventListener("submit",(async r=>{r.preventDefault(),n("metric");try{const n=await(async n=>{const r=`https://api.unsplash.com/search/photos?page=1&query="${document.querySelector("input").value} landscape"&orientation=landscape&per_page=1&client_id=_Icg2UQ8IkX1mbHiRXvGgX5by5rfy13ncjpH--5-DX8`,e=await fetch(r);return await e.json()})(),r=document.querySelector(".container");return r.style.background=`url(${n.results[0].urls.regular})`,r.style.backgroundRepeat="no-repeat",r.style.backgroundSize="cover","success"}catch(r){return r}}))}}})();var r=e(379),t=e.n(r),o=e(424);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,n.apicall()})()})();