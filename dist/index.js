parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,r){var e=[],n=!0,i=!1,u=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){i=!0,u=t}finally{try{!n&&o.return&&o.return()}finally{if(i)throw u}}return e}(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="";return r.split(/[\n]+/g).filter(function(t){return t.trim()&&!t.match(/^\s*[;#]/)}).map(function(t){return t.match(/^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i)}).map(function(r){var i=r.map(function(t){return t&&t.trim()}),u=t(i,5),a=u[1],o=u[2],l=u[4];if(a)n=a;else{if("string"==typeof l&&"$"==l.charAt(0)){var s=e;l.slice(1).split(/\./).map(function(t){s=s[t]}),l=s}"string"!=typeof l||"+"!=l.charAt(0)||isNaN(l.slice(1))||(l=+l),-1!=["true","false","null"].indexOf(l)&&(l=JSON.parse(l)),o.length>2&&"[]"===o.slice(-2)?(o=o.substring(0,o.length-2),n?(e[n]&&!e[n][o]&&(e[n][o]=[]),e[n][o].push(l)):(e[o]||(e[o]=[]),e[o].push(l))):""==n?e[o]=l:(e[n]||(e[n]={}),e[n][o]=l)}}),e};exports.default=r;
},{}]},{},["Focm"], null)