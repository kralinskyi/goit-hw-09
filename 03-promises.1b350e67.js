var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("7Y9D8");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}=e.target.elements;let i=Number(t.value),s=Number(o.value),a=Number(n.value);for(let e=1;e<=a;e+=1)r(e,i).then(l).catch(u),i+=s;setTimeout((()=>{e.target.reset()}),i)}));function r(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o&&n({position:e,delay:t}),i({position:e,delay:t})}),t)}))}function l({position:e,delay:t}){i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}function u({position:e,delay:t}){i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}console.log("HO_HO_HO");
//# sourceMappingURL=03-promises.1b350e67.js.map
