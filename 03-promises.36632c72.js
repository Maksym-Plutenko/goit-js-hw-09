function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const i=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');document.querySelector("button");document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const n=Number(d.value),o=Number(i.value),r=Number(l.value);for(let t=0;t<n;t+=1){(function(e,t){const n=Math.random()>.3,o={position:e,delay:t};return new Promise(((e,r)=>{setTimeout((()=>{n?e(o):r(o)}),t)}))})(t+1,o+t*r).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.36632c72.js.map