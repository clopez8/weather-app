!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){e.exports=n.p+"images/rainy.png"},function(e,t,n){e.exports=n.p+"images/sunny.png"},function(e,t,n){e.exports=n.p+"images/cloudy.png"},function(e,t,n){e.exports=n.p+"images/stormy.png"},function(e,t,n){e.exports=n.p+"images/windy.png"},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r,i,s={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e){return document.querySelector(e)},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=a.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,l=0,d=[],f=n(8);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=s[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(g(r.parts[o],t))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(g(r.parts[o],t));s[r.id]={id:r.id,refs:1,parts:a}}}}function v(e,t){for(var n=[],r={},i=0;i<e.length;i++){var s=e[i],o=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}function h(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function g(e,t){var n,r,i,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var o=l++;n=u||(u=m(t)),r=x.bind(null,n,o,!1),i=x.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=S.bind(null,n,t),i=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=L.bind(null,n),i=function(){y(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=v(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(a=s[o.id]).refs--,r.push(a)}e&&p(v(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var w,_=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function L(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function S(e,t,n){var r=n.css,i=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||s)&&(r=f(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,s=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(i=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){"use strict";n.r(t);n(5),n(2),n(0),n(1),n(3),n(4);let r,i="us";const s=document.querySelector(".current__icon"),o=document.querySelector(".current__summary"),a=document.querySelector(".current__temp-num"),c=document.querySelector(".current__wind span"),u=document.querySelector(".current__humidity span"),l=e=>{i=e,d()},d=e=>{s.innerHTML=(e=>{switch(e){case"clear day":case"clear night":case"clear sky":return'\n        <div class="icon sunny">\n          <div class="sun">\n            <div class="rays"></div>\n          </div>\n        </div>\n      ';case"rain":case"heavy intensity rain":case"light rain":return'\n        <div class="icon rainy">\n          <div class="cloud"></div>\n          <div class="rain"></div>\n        </div>\n      ';case"snow":return'\n        <div class="icon flurries">\n          <div class="cloud"></div>\n          <div class="snow">\n            <div class="flake"></div>\n            <div class="flake"></div>\n          </div>\n        </div>\n      ';case"wind":case"cloudy":case"broken clouds":case"partly cloudy day":case"partly cloudy night":case"scattered clouds":case"overcast clouds":case"few clouds":return'\n        <div class="icon cloudy">\n          <div class="cloud"></div>\n          <div class="cloud"></div>\n        </div>\n      ';case"thunderstorm":case"hail":case"tornado":return'\n        <div class="icon thunder-storm">\n          <div class="cloud"></div>\n          <div class="lightning">\n            <div class="bolt"></div>\n            <div class="bolt"></div>\n          </div>\n        </div>\n      ';default:return'\n        <div class="icon sunny">\n          <div class="sun">\n            <div class="rays"></div>\n          </div>\n        </div>\n      '}})(r.weather[0].description),o.textContent=r.weather[0].description,c.textContent=r.wind.speed,u.textContent=r.main.humidity,a.innerHTML=((e,t)=>"us"===t?Math.round((e=>1.8*e-459.67)(e)):Math.round((e=>e-273.15)(e)))(r.main.temp,i)+"&#176"};let f="Oceanside, CA";const p=document.querySelector(".search__form"),v=document.querySelector(".search__input"),h=document.querySelector(".search__city"),y=document.querySelector(".spinner-wrapper"),m=()=>{p.addEventListener("submit",e=>{e.preventDefault(),v.classList.toggle("search__input--open"),v.focus(),""!==v.value&&(f=v.value,v.value="",b(f),w(f),_())})},b=async e=>{y.classList.toggle("spinner-wrapper--active");const{lat:t,lng:n}=await w(f),i=await g(t,n);y.classList.toggle("spinner-wrapper--active");const s=i;s.temperature=(s.temperature+459.67)*(5/9),r=s,d()},g=async(e,t)=>{const n=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=0e37ae805dd303b7b4881a2b26058933`,r=await fetch(n);return await r.json()},w=async e=>{const t=`https://maps.googleapis.com/maps/api/geocode/json?address=${e}&key=AIzaSyAsFttHrCYE4VqtLdsYKfsyxngWeMcEh60`,n=await fetch(t),r=await n.json();return{lat:r.results[0].geometry.location.lat,lng:r.results[0].geometry.location.lng}},_=e=>{h.innerHTML=f},x=document.querySelector(".units__fahrenheit"),L=document.querySelector(".units__celcius");console.log("hi"),m(),b(f),x.addEventListener("click",()=>{l("us"),x.classList.add("units__fahrenheit--active"),L.classList.remove("units__celcius--active")}),L.addEventListener("click",()=>{l("si"),x.classList.remove("units__fahrenheit--active"),L.classList.add("units__celcius--active")})}]);