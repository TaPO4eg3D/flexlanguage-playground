(function(){"use strict";var n={7778:function(n,t,e){e.a(n,(async function(n,r){try{var o=e(3396),i=e(4766),c=n([i]);i=(c.then?(await c)():c)[0],t["Z"]=(0,o.aZ)({name:"EditorView",data(){return{inputValue:"",evalValue:""}},methods:{eval(){this.evalValue=(0,i.M)(this.inputValue)}},mounted(){console.log((0,i.M)("1 + 1 * 3;"))}}),r()}catch(u){r(u)}}))},5286:function(n,t,e){e.a(n,(async function(n,t){try{var r=e(9242),o=e(5693),i=e(3824),c=n([i]);i=(c.then?(await c)():c)[0],(0,r.ri)(o.Z).use(i.Z).mount("#app"),t()}catch(u){t(u)}}))},3824:function(n,t,e){e.a(n,(async function(n,r){try{var o=e(2483),i=e(9112),c=n([i]);i=(c.then?(await c)():c)[0];const u=[{path:"/",name:"editor",component:i.Z}],a=(0,o.p7)({history:(0,o.PO)("/"),routes:u});t["Z"]=a,r()}catch(u){r(u)}}))},4766:function(n,t,e){e.a(n,(async function(r,o){try{e.d(t,{M:function(){return g}});e(8675),e(3408),e(4590);var i=e(4307);n=e.hmd(n);var c=r([i]);i=(c.then?(await c)():c)[0];let a=0,f=new Uint8Array;function s(){return 0===f.byteLength&&(f=new Uint8Array(i.memory.buffer)),f}const d="undefined"===typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder;let l=new d("utf-8");const b="function"===typeof l.encodeInto?function(n,t){return l.encodeInto(n,t)}:function(n,t){const e=l.encode(n);return t.set(e),{read:n.length,written:e.length}};function h(n,t,e){if(void 0===e){const e=l.encode(n),r=t(e.length);return s().subarray(r,r+e.length).set(e),a=e.length,r}let r=n.length,o=t(r);const i=s();let c=0;for(;c<r;c++){const t=n.charCodeAt(c);if(t>127)break;i[o+c]=t}if(c!==r){0!==c&&(n=n.slice(c)),o=e(o,r,r=c+3*n.length);const t=s().subarray(o+c,o+r),i=b(n,t);c+=i.written}return a=c,o}let p=new Int32Array;function v(){return 0===p.byteLength&&(p=new Int32Array(i.memory.buffer)),p}const w="undefined"===typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder;let m=new w("utf-8",{ignoreBOM:!0,fatal:!0});function y(n,t){return m.decode(s().subarray(n,n+t))}function g(n){try{const r=i.__wbindgen_add_to_stack_pointer(-16),o=h(n,i.__wbindgen_malloc,i.__wbindgen_realloc),c=a;i.wasm_eval(r,o,c);var t=v()[r/4+0],e=v()[r/4+1];return y(t,e)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,e)}}m.decode(),o()}catch(u){o(u)}}))},5693:function(n,t,e){e.d(t,{Z:function(){return y}});var r=e(3396);const o={class:"app"};function i(n,t,e,i,c,u){const a=(0,r.up)("HeaderComponent"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(a),(0,r.Wm)(f)])}var c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=";const u=n=>((0,r.dD)("data-v-1ba06afd"),n=n(),(0,r.Cn)(),n),a={class:"header"},f=u((()=>(0,r._)("div",{class:"logo"},"FLEX Language ",-1))),s=u((()=>(0,r._)("a",{class:"repo",href:"#"},[(0,r._)("img",{src:c})],-1))),d=[f,s];function l(n,t,e,o,i,c){return(0,r.wg)(),(0,r.iD)("div",a,d)}var b=(0,r.aZ)({name:"HeaderComponent"}),h=e(89);const p=(0,h.Z)(b,[["render",l],["__scopeId","data-v-1ba06afd"]]);var v=p,w=(0,r.aZ)({components:{HeaderComponent:v}});const m=(0,h.Z)(w,[["render",i]]);var y=m},9112:function(n,t,e){e.a(n,(async function(n,r){try{var o=e(6477),i=e(2215),c=(e(3155),e(89)),u=n([i]);i=(u.then?(await u)():u)[0];const a=(0,c.Z)(i.Z,[["render",o.s]]);t["Z"]=a,r()}catch(a){r(a)}}))},3155:function(){},2215:function(n,t,e){e.a(n,(async function(n,r){try{e.d(t,{Z:function(){return o.Z}});var o=e(7778),i=n([o]);o=(i.then?(await i)():i)[0],r()}catch(c){r(c)}}))},6477:function(n,t,e){e.d(t,{s:function(){return f}});var r=e(3396),o=e(9242);const i={class:"editor-view"},c={class:"editor"},u={class:"result"},a=["value"];function f(n,t,e,f,s,d){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("button",{onClick:t[0]||(t[0]=t=>n.eval())},"RUN"),(0,r._)("div",c,[(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=t=>n.inputValue=t)},null,512),[[o.nr,n.inputValue]])]),(0,r._)("div",u,[(0,r._)("textarea",{disabled:"",value:n.evalValue},null,8,a)])])}},4307:function(n,t,e){n.exports=e.v(t,n.id,"3ca6ed286672d07f")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,e),i.loaded=!0,i.exports}e.m=n,function(){var n="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=function(n){n&&!n.d&&(n.d=1,n.forEach((function(n){n.r--})),n.forEach((function(n){n.r--?n.r++:n()})))},i=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[n])return e;if(e.then){var i=[];i.d=0,e.then((function(n){c[t]=n,o(i)}),(function(n){c[r]=n,o(i)}));var c={};return c[n]=function(n){n(i)},c}}var u={};return u[n]=function(){},u[t]=e,u}))};e.a=function(e,c,u){var a;u&&((a=[]).d=1);var f,s,d,l=new Set,b=e.exports,h=new Promise((function(n,t){d=t,s=n}));h[t]=b,h[n]=function(n){a&&n(a),l.forEach(n),h["catch"]((function(){}))},e.exports=h,c((function(e){var o;f=i(e);var c=function(){return f.map((function(n){if(n[r])throw n[r];return n[t]}))},u=new Promise((function(t){o=function(){t(c)},o.r=0;var e=function(n){n!==a&&!l.has(n)&&(l.add(n),n&&!n.d&&(o.r++,n.push(o)))};f.map((function(t){t[n](e)}))}));return o.r?u:c()}),(function(n){n?d(h[r]=n):s(b),o(a)})),a&&(a.d=0)}}(),function(){var n=[];e.O=function(t,r,o,i){if(!r){var c=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var u=!0,a=0;a<r.length;a++)(!1&i||c>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[a])}))?r.splice(a--,1):(u=!1,i<c&&(c=i));if(u){n.splice(s--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.v=function(n,t,r,o){var i=fetch(e.p+""+r+".module.wasm");return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(i,o).then((function(t){return Object.assign(n,t.instance.exports)})):i.then((function(n){return n.arrayBuffer()})).then((function(n){return WebAssembly.instantiate(n,o)})).then((function(t){return Object.assign(n,t.instance.exports)}))}}(),function(){e.p="/"}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,c=r[0],u=r[1],a=r[2],f=0;if(c.some((function(t){return 0!==n[t]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(a)var s=a(e)}for(t&&t(r);f<c.length;f++)i=c[f],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},r=self["webpackChunkflexweb"]=self["webpackChunkflexweb"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(5286)}));r=e.O(r)})();
//# sourceMappingURL=app.12c5b5db.js.map