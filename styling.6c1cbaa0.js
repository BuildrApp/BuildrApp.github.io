parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"DOAq":[function(require,module,exports) {

},{}],"N6wA":[function(require,module,exports) {

},{"./../data/fonts/icofont.woff2":[["icofont.4f09ddea.woff2","Kum1"],"Kum1"],"./../data/fonts/icofont.woff":[["icofont.777a665f.woff","kxab"],"kxab"]}],"oTaR":[function(require,module,exports) {

},{"../config.css":"DOAq"}],"XqQB":[function(require,module,exports) {

},{"normalize.css":"DOAq","./config.css":"DOAq","./tools.css":"DOAq","./fonts.css":"N6wA","./element/code.css":"DOAq","./element/form.css":"DOAq","./element/navbar.css":"oTaR","./element/window.css":"DOAq","./element/socket-logger.css":"DOAq"}],"8Xvi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../css/index.css"),document.querySelectorAll(".input-label").forEach(function(e){var t=e.querySelector("input");e.addEventListener("mousedown",function(e){t.focus(),e.preventDefault()})});
},{"../css/index.css":"XqQB"}]},{},["8Xvi"], null)
//# sourceMappingURL=/styling.6c1cbaa0.map