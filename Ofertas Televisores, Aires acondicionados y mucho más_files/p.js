(function () {
  'use strict';

  function n$2(t,e,l,n,r){for(e=e.split?e.split("."):e,n=0;n<e.length;n++)t=t?t[e[n]]:r;return t===r?l:t}

  var e="undefined",o$1="object",b$3="any",m$1="*",j$1="__",F$2="undefined"!=typeof process?process:{};F$2.env&&F$2.env.NODE_ENV||"";var $$1="undefined"!=typeof document;null!=F$2.versions&&null!=F$2.versions.node;"undefined"!=typeof Deno&&void 0!==Deno.core;$$1&&"nodejs"===window.name||"undefined"!=typeof navigator&&void 0!==navigator.userAgent&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));function M$1(n,t){return t.charAt(0)[n]()+t.slice(1)}var U$1=M$1.bind(null,"toUpperCase"),H$1=M$1.bind(null,"toLowerCase");function J$2(n){return Y$1(n)?U$1("null"):"object"==typeof n?yn(n):Object.prototype.toString.call(n).slice(8,-1)}function R$1(n,t){void 0===t&&(t=!0);var e=J$2(n);return t?H$1(e):e}function V$1(n,t){return typeof t===n}var W$1=V$1.bind(null,"function"),q$1=V$1.bind(null,"string"),I$2=V$1.bind(null,"undefined");var Q$1=V$1.bind(null,"boolean");V$1.bind(null,"symbol");function Y$1(n){return null===n}function nn(n){return "number"===R$1(n)&&!isNaN(n)}function rn(n){return "array"===R$1(n)}function on(n){if(!un(n))return !1;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(n)===t}function un(n){return n&&("object"==typeof n||null!==n)}function yn(n){return W$1(n.constructor)?n.constructor.name:null}function hn(n){return n instanceof Error||q$1(n.message)&&n.constructor&&nn(n.constructor.stackTraceLimit)}function On(n,t){if("object"!=typeof t||Y$1(t))return !1;if(t instanceof n)return !0;var e=R$1(new n(""));if(hn(t))for(;t;){if(R$1(t)===e)return !0;t=Object.getPrototypeOf(t);}return !1}On.bind(null,TypeError);On.bind(null,SyntaxError);function $n(n,t){var e=n instanceof Element||n instanceof HTMLDocument;return e&&t?Tn(n,t):e}function Tn(n,t){return void 0===t&&(t=""),n&&n.nodeName===t.toUpperCase()}function _n(n){var t=[].slice.call(arguments,1);return function(){return n.apply(void 0,[].slice.call(arguments).concat(t))}}_n($n,"form");_n($n,"button");_n($n,"input");_n($n,"select");

  function n$1(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function s(r){return function(e){for(var r,t=Object.create(null),o=/([^&=]+)=?([^&]*)/g;r=o.exec(e);){var a=n$1(r[1]),i=n$1(r[2]);"[]"===a.substring(a.length-2)?(t[a=a.substring(0,a.length-2)]||(t[a]=[])).push(i):t[a]=""===i||i;}for(var u in t){var c=u.split("[");c.length>1&&(m(t,c.map(function(e){return e.replace(/[?[\]\\ ]/g,"")}),t[u]),delete t[u]);}return t}(function(r){if(r){var t=r.match(/\?(.*)/);return t&&t[1]?t[1].split("#")[0]:""}return $$1&&window.location.search.substring(1)}(r))}function m(e,r,t){for(var n=r.length-1,o=0;o<n;++o){var a=r[o];if("__proto__"===a||"constructor"===a)break;a in e||(e[a]={}),e=e[a];}e[r[n]]=t;}function y$1(){for(var e="",r=0,t=4294967295*Math.random()|0;r++<36;){var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[r-1],o=15&t;e+="-"==n||"4"==n?n:("x"==n?o:3&o|8).toString(16),t=r%8==0?4294967295*Math.random()|0:t>>4;}return e}

  var l="global",o=j$1+"global"+j$1,n=typeof self===o$1&&self.self===self&&self||typeof global===o$1&&global.global===global&&global||void 0;function a$2(t){return n[o][t]}function f(t,e){return n[o][t]=e}function i$2(t){delete n[o][t];}function u$1(t,e,r){var l;try{if(b$2(t)){var o=window[t];l=o[e].bind(o);}}catch(t){}return l||r}n[o]||(n[o]={});var c$1={};function b$2(t){if(typeof c$1[t]!==e)return c$1[t];try{var e$1=window[t];e$1.setItem(e,e),e$1.removeItem(e);}catch(e){return c$1[t]=!1}return c$1[t]=!0}

  function g$1(){return g$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},g$1.apply(this,arguments)}var h$1="function",v="undefined",y="@@redux/"+Math.random().toString(36),b$1=/* #__PURE__ */function(){return typeof Symbol===h$1&&Symbol.observable||"@@observable"}(),I$1=" != "+h$1;function w(e,t,n){var r;if(typeof t===h$1&&typeof n===v&&(n=t,t=void 0),typeof n!==v){if(typeof n!==h$1)throw new Error("enhancer"+I$1);return n(w)(e,t)}if(typeof e!==h$1)throw new Error("reducer"+I$1);var i=e,a=t,o=[],u=o,s=!1;function l(){u===o&&(u=o.slice());}function f(){return a}function d(e){if(typeof e!==h$1)throw new Error("Listener"+I$1);var t=!0;return l(),u.push(e),function(){if(t){t=!1,l();var n=u.indexOf(e);u.splice(n,1);}}}function p(e){if(!on(e))throw new Error("Act != obj");if(typeof e.type===v)throw new Error("ActType "+v);if(s)throw new Error("Dispatch in reducer");try{s=!0,a=i(a,e);}finally{s=!1;}for(var t=o=u,n=0;n<t.length;n++)(0, t[n])();return e}return p({type:"@@redux/INIT"}),(r={dispatch:p,subscribe:d,getState:f,replaceReducer:function(e){if(typeof e!==h$1)throw new Error("next reducer"+I$1);i=e,p({type:"@@redux/INIT"});}})[b$1]=function(){var e,t=d;return (e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Observer != obj");function n(){e.next&&e.next(f());}return n(),{unsubscribe:t(n)}}})[b$1]=function(){return this},e},r}function E$1(e,t){var n=t&&t.type;return "action "+(n&&n.toString()||"?")+"reducer "+e+" returns "+v}function P(){var e=[].slice.call(arguments);return 0===e.length?function(e){return e}:1===e.length?e[0]:e.reduce(function(e,t){return function(){return e(t.apply(void 0,[].slice.call(arguments)))}})}function S(){var e=arguments;return function(t){return function(n,r,i){var a,o=t(n,r,i),u=o.dispatch,c={getState:o.getState,dispatch:function(e){return u(e)}};return a=[].slice.call(e).map(function(e){return e(c)}),g$1({},o,{dispatch:u=P.apply(void 0,a)(o.dispatch)})}}}var N$1=j$1+"anon_id",A$1=j$1+"user_id",_=j$1+"user_traits",j="userId",k$1="anonymousId",x$1=["bootstrap","params","campaign","initializeStart","initialize","initializeEnd","ready","resetStart","reset","resetEnd","pageStart","page","pageEnd","pageAborted","trackStart","track","trackEnd","trackAborted","identifyStart","identify","identifyEnd","identifyAborted","userIdChanged","registerPlugins","enablePlugin","disablePlugin","online","offline","setItemStart","setItem","setItemEnd","setItemAborted","removeItemStart","removeItem","removeItemEnd","removeItemAborted"],T=["name","EVENTS","config","loaded"],z=x$1.reduce(function(e,t){return e[t]=t,e},{registerPluginType:function(e){return "registerPlugin:"+e},pluginReadyType:function(e){return "ready:"+e}}),M=/^utm_/,q=/^an_prop_/,V=/^an_trait_/;function C$1(e){var t=e.storage.setItem;return function(n){return function(r){return function(i){if(i.type===z.bootstrap){var a=i.params,o=i.user,u=i.persistedUser,c=i.initialUser,s=u.userId===o.userId;u.anonymousId!==o.anonymousId&&t(N$1,o.anonymousId),s||t(A$1,o.userId),c.traits&&t(_,g$1({},s&&u.traits?u.traits:{},c.traits));var l=Object.keys(i.params);if(l.length){var f=a.an_uid,d=a.an_event,p=l.reduce(function(e,t){if(t.match(M)||t.match(/^(d|g)clid/)){var n=t.replace(M,"");e.campaign["campaign"===n?"name":n]=a[t];}return t.match(q)&&(e.props[t.replace(q,"")]=a[t]),t.match(V)&&(e.traits[t.replace(V,"")]=a[t]),e},{campaign:{},props:{},traits:{}});n.dispatch(g$1({type:z.params,raw:a},p,f?{userId:f}:{})),f&&setTimeout(function(){return e.identify(f,p.traits)},0),d&&setTimeout(function(){return e.track(d,p.props)},0),Object.keys(p.campaign).length&&n.dispatch({type:z.campaign,campaign:p.campaign});}}return r(i)}}}}function U(e){return function(t,n){if(void 0===t&&(t={}),void 0===n&&(n={}),n.type===z.setItemEnd){if(n.key===N$1)return g$1({},t,{anonymousId:n.value});if(n.key===A$1)return g$1({},t,{userId:n.value})}switch(n.type){case z.identify:return Object.assign({},t,{userId:n.userId,traits:g$1({},t.traits,n.traits)});case z.reset:return [A$1,N$1,_].forEach(function(t){e.removeItem(t);}),Object.assign({},t,{userId:null,anonymousId:null,traits:{}});default:return t}}}function R(e){return {userId:e.getItem(A$1),anonymousId:e.getItem(N$1),traits:e.getItem(_)}}var $=function(e){return j$1+"TEMP"+j$1+e};function D(t){var n=t.storage,r=n.setItem,a=n.removeItem,o=n.getItem;return function(t){return function(n){return function(u){var c=u.userId,s=u.traits,l=u.options;if(u.type===z.reset&&([A$1,_,N$1].forEach(function(e){a(e);}),[j,k$1,"traits"].forEach(function(e){i$2($(e));})),u.type===z.identify){o(N$1)||r(N$1,y$1());var f=o(A$1),d=o(_)||{};f&&f!==c&&t.dispatch({type:z.userIdChanged,old:{userId:f,traits:d},new:{userId:c,traits:s},options:l}),c&&r(A$1,c),s&&r(_,g$1({},d,s));}return n(u)}}}}var B={};function L$1(e,t){B[e]&&W$1(B[e])&&(B[e](t),delete B[e]);}function J$1(e,t,n){return new Promise(function(r,i){return t()?r(e):n<1?i(g$1({},e,{queue:!0})):new Promise(function(e){return setTimeout(e,10)}).then(function(a){return J$1(e,t,n-10).then(r,i)})})}var X=function(e){var t=e.data,n=e.action,r=e.instance,i=e.state,a=e.allPlugins,o=e.allMatches,u=e.store,s=e.EVENTS;try{var f=i.plugins,d=i.context,p=n.type,m=p.match(H),h=t.exact.map(function(e){return e.pluginName});m&&(h=o.during.map(function(e){return e.pluginName}));var v=function(e,t){return function(n,r,i){var a=r.config,o=r.name,u=o+"."+n.type;i&&(u=i.event);var c=n.type.match(H)?function(e,t,n,r,i){return function(a,o){var u=r?r.name:e,c=o&&te(o)?o:n;if(r&&(!(c=o&&te(o)?o:[e]).includes(e)||1!==c.length))throw new Error("Method "+t+" can only abort "+e+" plugin. "+JSON.stringify(c)+" input valid");return g$1({},i,{abort:{reason:a,plugins:c,caller:t,_:u}})}}(o,u,t,i,n):function(e,t){return function(){throw new Error(e.type+" action not cancellable. Remove abort in "+t)}}(n,u);return {payload:ie(n),instance:e,config:a||{},abort:c}}}(r,h),y=t.exact.reduce(function(e,t){var n=t.pluginName,r=t.methodName,i=!1;return r.match(/^initialize/)||r.match(/^reset/)||(i=!f[n].loaded),d.offline&&r.match(/^(page|track|identify)/)&&(i=!0),e[""+n]=i,e},{});return Promise.resolve(t.exact.reduce(function(e,i,o){try{var u=i.pluginName;return Promise.resolve(e).then(function(e){function i(){return Promise.resolve(e)}var o=function(){if(t.namespaced&&t.namespaced[u])return Promise.resolve(t.namespaced[u].reduce(function(e,t,n){try{return Promise.resolve(e).then(function(e){return t.method&&W$1(t.method)?(function(e,t){var n=re(e);if(n&&n.name===t){var r=re(n.method);throw new Error([t+" plugin is calling method "+e,"Plugins cant call self","Use "+n.method+" "+(r?"or "+r.method:"")+" in "+t+" plugin insteadof "+e].join("\n"))}}(t.methodName,t.pluginName),Promise.resolve(t.method({payload:e,instance:r,abort:(n=e,i=u,o=t.pluginName,function(e,t){return g$1({},n,{abort:{reason:e,plugins:t||[i],caller:p,from:o||i}})}),config:K(t.pluginName,f,a),plugins:f})).then(function(t){var n=on(t)?t:{};return Promise.resolve(g$1({},e,n))})):e;var n,i,o;})}catch(e){return Promise.reject(e)}},Promise.resolve(n))).then(function(t){e[u]=t;});e[u]=n;}();return o&&o.then?o.then(i):i()})}catch(e){return Promise.reject(e)}},Promise.resolve({}))).then(function(e){return Promise.resolve(t.exact.reduce(function(n,i,o){try{var s=t.exact.length===o+1,l=i.pluginName,d=a[l];return Promise.resolve(n).then(function(t){var n=e[l]?e[l]:{};if(m&&(n=t),Z(n,l))return G$1({data:n,method:p,instance:r,pluginName:l,store:u}),Promise.resolve(t);if(Z(t,l))return s&&G$1({data:t,method:p,instance:r,store:u}),Promise.resolve(t);if(y.hasOwnProperty(l)&&!0===y[l])return u.dispatch({type:"queue",plugin:l,payload:n,_:{called:"queue",from:"queueMechanism"}}),Promise.resolve(t);var i=v(e[l],a[l]);return Promise.resolve(d[p]({abort:i.abort,payload:n,instance:r,config:K(l,f,a),plugins:f})).then(function(i){var a=on(i)?i:{},o=g$1({},t,a),s=e[l];if(Z(s,l))G$1({data:s,method:p,instance:r,pluginName:l,store:u});else {var f=p+":"+l;(f.match(/:/g)||[]).length<2&&!p.match(W)&&!p.match(F$1)&&r.dispatch(g$1({},m?o:n,{type:f,_:{called:f,from:"submethod"}}));}return Promise.resolve(o)})})}catch(e){return Promise.reject(e)}},Promise.resolve(n))).then(function(e){if(!(p.match(H)||p.match(/^registerPlugin/)||p.match(F$1)||p.match(W)||p.match(/^params/)||p.match(/^userIdChanged/))){if(s.plugins.includes(p),e._&&e._.originalAction===p)return e;var n=g$1({},e,{_:{originalAction:e.type,called:e.type,from:"engineEnd"}});ee(e,t.exact.length)&&!p.match(/End$/)&&(n=g$1({},n,{type:e.type+"Aborted"})),u.dispatch(n);}return e})})}catch(e){return Promise.reject(e)}},H=/Start$/,W=/^bootstrap/,F$1=/^ready/;function G$1(e){var t=e.pluginName,n=e.method+"Aborted"+(t?":"+t:"");e.store.dispatch(g$1({},e.data,{type:n,_:{called:n,from:"abort"}}));}function K(e,t,n){var r=t[e]||n[e];return r&&r.config?r.config:{}}function Q(e,t){return t.reduce(function(t,n){return n[e]?t.concat({methodName:e,pluginName:n.name,method:n[e]}):t},[])}function Y(e,t){var n=e.replace(H,""),r=t?":"+t:"";return [""+e+r,""+n+r,n+"End"+r]}function Z(e,t){var n=e.abort;return !!n&&(!0===n||ne(n,t)||n&&ne(n.plugins,t))}function ee(e,t){var n=e.abort;if(!n)return !1;if(!0===n||q$1(n))return !0;var r=n.plugins;return te(n)&&n.length===t||te(r)&&r.length===t}function te(e){return Array.isArray(e)}function ne(e,t){return !(!e||!te(e))&&e.includes(t)}function re(e){var t=e.match(/(.*):(.*)/);return !!t&&{method:t[1],name:t[2]}}function ie(e){return Object.keys(e).reduce(function(t,n){return "type"===n||(t[n]=on(e[n])?Object.assign({},e[n]):e[n]),t},{})}function ae(e,t,n){var r={};return function(i){return function(a){return function(o){try{var u,c=function(e){return u?e:a(p)},s=o.type,d=o.plugins,p=o;if(o.abort)return Promise.resolve(a(o));if(s===z.enablePlugin&&i.dispatch({type:z.initializeStart,plugins:d,disabled:[],fromEnable:!0,meta:o.meta}),s===z.disablePlugin&&setTimeout(function(){return L$1(o.meta.rid,{payload:o})},0),s===z.initializeEnd){var m=t(),h=Object.keys(m),v=h.filter(function(e){return d.includes(e)}).map(function(e){return m[e]}),y=[],b=[],I=o.disabled,w=v.map(function(e){var t=e.loaded,n=e.name,a=e.config;return J$1(e,function(){return t({config:a})},1e4).then(function(t){return r[n]||(i.dispatch({type:z.pluginReadyType(n),name:n,events:Object.keys(e).filter(function(e){return !T.includes(e)})}),r[n]=!0),y=y.concat(n),e}).catch(function(e){if(e instanceof Error)throw new Error(e);return b=b.concat(e.name),e})});Promise.all(w).then(function(e){var t={plugins:y,failed:b,disabled:I};setTimeout(function(){h.length===w.length+I.length&&i.dispatch(g$1({},{type:z.ready},t));},0);});}var E=function(){if(s!==z.bootstrap)return /^ready:([^:]*)$/.test(s)&&setTimeout(function(){return function(e,t,n){var r=t(),i=e.getState(),a=i.plugins,o=i.queue,u=i.user;if(!i.context.offline&&o&&o.actions&&o.actions.length){var c=o.actions.reduce(function(e,t,n){return a[t.plugin].loaded?(e.process.push(t),e.processIndex.push(n)):(e.requeue.push(t),e.requeueIndex.push(n)),e},{processIndex:[],process:[],requeue:[],requeueIndex:[]});if(c.processIndex&&c.processIndex.length){c.processIndex.forEach(function(t){var i=o.actions[t],c=i.plugin,s=i.payload.type,f=r[c][s];if(f&&W$1(f)){var d=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),[j,k$1].reduce(function(n,r){return e.hasOwnProperty(r)&&t[r]&&t[r]!==e[r]&&(n[r]=t[r]),n},e)}(i.payload,u);f({payload:d,config:a[c].config,instance:n});var p=s+":"+c;e.dispatch(g$1({},d,{type:p,_:{called:p,from:"queueDrain"}}));}});var s=o.actions.filter(function(e,t){return !~c.processIndex.indexOf(t)});o.actions=s;}}}(i,t,e)},0),Promise.resolve(function(e,t,n,r,i){try{var a=W$1(t)?t():t,o=e.type,u=o.replace(H,"");if(e._&&e._.called)return Promise.resolve(e);var c=n.getState(),s=(m=a,void 0===(h=c.plugins)&&(h={}),void 0===(v=e.options)&&(v={}),Object.keys(m).filter(function(e){var t=v.plugins||{};return Q$1(t[e])?t[e]:!1!==t.all&&(!h[e]||!1!==h[e].enabled)}).map(function(e){return m[e]}));o===z.initializeStart&&e.fromEnable&&(s=Object.keys(c.plugins).filter(function(t){var n=c.plugins[t];return e.plugins.includes(t)&&!n.initialized}).map(function(e){return a[e]}));var d=s.map(function(e){return e.name}),p=function(e,t,n){var r=Y(e).map(function(e){return Q(e,t)});return t.reduce(function(n,r){var i=r.name,a=Y(e,i).map(function(e){return Q(e,t)}),o=a[0],u=a[1],c=a[2];return o.length&&(n.beforeNS[i]=o),u.length&&(n.duringNS[i]=u),c.length&&(n.afterNS[i]=c),n},{before:r[0],beforeNS:{},during:r[1],duringNS:{},after:r[2],afterNS:{}})}(o,s);return Promise.resolve(X({action:e,data:{exact:p.before,namespaced:p.beforeNS},state:c,allPlugins:a,allMatches:p,instance:n,store:r,EVENTS:i})).then(function(e){function t(){var t=function(){if(o.match(H))return Promise.resolve(X({action:g$1({},s,{type:u+"End"}),data:{exact:p.after,namespaced:p.afterNS},state:c,allPlugins:a,allMatches:p,instance:n,store:r,EVENTS:i})).then(function(e){e.meta&&e.meta.hasCallback&&L$1(e.meta.rid,{payload:e});})}();return t&&t.then?t.then(function(){return e}):e}if(ee(e,d.length))return e;var s,l=function(){if(o!==u)return Promise.resolve(X({action:g$1({},e,{type:u}),data:{exact:p.during,namespaced:p.duringNS},state:c,allPlugins:a,allMatches:p,instance:n,store:r,EVENTS:i})).then(function(e){s=e;});s=e;}();return l&&l.then?l.then(t):t()})}catch(e){return Promise.reject(e)}var m,h,v;}(o,t,e,i,n)).then(function(e){return u=1,a(e)})}();return Promise.resolve(E&&E.then?E.then(c):c(E))}catch(e){return Promise.reject(e)}}}}}function oe(e){return function(t){return function(t){return function(n){var r=n.type,i=n.key,a=n.value,o=n.options;if(r===z.setItem||r===z.removeItem){if(n.abort)return t(n);r===z.setItem?e.setItem(i,a,o):e.removeItem(i,o);}return t(n)}}}}var ue=function(){var e=this;this.before=[],this.after=[],this.addMiddleware=function(t,n){e[n]=e[n].concat(t);},this.removeMiddleware=function(t,n){var r=e[n].findIndex(function(e){return e===t});-1!==r&&(e[n]=[].concat(e[n].slice(0,r),e[n].slice(r+1)));},this.dynamicMiddlewares=function(t){return function(n){return function(r){return function(i){var a={getState:n.getState,dispatch:function(e){return n.dispatch(e)}},o=e[t].map(function(e){return e(a)});return P.apply(void 0,o)(r)(i)}}}};};function ce(e){return function(t,n){void 0===t&&(t={});var r={};if("initialize:aborted"===n.type)return t;if(/^registerPlugin:([^:]*)$/.test(n.type)){var i=se(n.type,"registerPlugin"),a=e()[i];if(!a||!i)return t;var o=n.enabled,u=a.config;return r[i]={enabled:o,initialized:!!o&&Boolean(!a.initialize),loaded:!!o&&Boolean(a.loaded({config:u})),config:u},g$1({},t,r)}if(/^initialize:([^:]*)$/.test(n.type)){var c=se(n.type,z.initialize),s=e()[c];return s&&c?(r[c]=g$1({},t[c],{initialized:!0,loaded:Boolean(s.loaded({config:s.config}))}),g$1({},t,r)):t}if(/^ready:([^:]*)$/.test(n.type))return r[n.name]=g$1({},t[n.name],{loaded:!0}),g$1({},t,r);switch(n.type){case z.disablePlugin:return g$1({},t,le(n.plugins,!1,t));case z.enablePlugin:return g$1({},t,le(n.plugins,!0,t));default:return t}}}function se(e,t){return e.substring(t.length+1,e.length)}function le(e,t,n){return e.reduce(function(e,r){return e[r]=g$1({},n[r],{enabled:t}),e},n)}function fe(e){try{return JSON.parse(JSON.stringify(e))}catch(e){}return e}var de={last:{},history:[]};function pe(e,t){void 0===e&&(e=de);var n=t.options,r=t.meta;if(t.type===z.track){var i=fe(g$1({event:t.event,properties:t.properties},Object.keys(n).length&&{options:n},{meta:r}));return g$1({},e,{last:i,history:e.history.concat(i)})}return e}var me={actions:[]};function ge(e,t){void 0===e&&(e=me);var n=t.payload;switch(t.type){case"queue":var r;return r=n&&n.type&&n.type===z.identify?[t].concat(e.actions):e.actions.concat(t),g$1({},e,{actions:r});case"dequeue":return [];default:return e}}var he=/#.*$/;function ve(e){var t=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);return "/"+(t&&t[3]?t[3].split("?")[0].replace(he,""):"")}var ye,be=function(e){if(void 0===e&&(e={}),!$$1)return e;var t=document,n=t.title,r=t.referrer,i=window,a=i.location,o=i.innerWidth,u=i.innerHeight,c=a.hash,s=a.search,l=function(e){var t=function(){if($$1)for(var e,t=document.getElementsByTagName("link"),n=0;e=t[n];n++)if("canonical"===e.getAttribute("rel"))return e.getAttribute("href")}();return t?t.match(/\?/)?t:t+e:window.location.href.replace(he,"")}(s),f={title:n,url:l,path:ve(l),hash:c,search:s,width:o,height:u};return r&&""!==r&&(f.referrer=r),g$1({},f,e)},Ie={last:{},history:[]};function we(e,t){void 0===e&&(e=Ie);var n=t.options;if(t.type===z.page){var r=fe(g$1({properties:t.properties,meta:t.meta},Object.keys(n).length&&{options:n}));return g$1({},e,{last:r,history:e.history.concat(r)})}return e}ye={};var Ee={initialized:!1,sessionId:y$1(),app:null,version:null,debug:!1,offline:!!$$1&&!navigator.onLine,os:{name:"na"},userAgent:$$1?navigator.userAgent:"node",library:{name:"analytics",version:"0.12.5"},timezone:void 0,locale:void 0,campaign:{},referrer:ye};function Pe(e,t){void 0===e&&(e=Ee);var n=e.initialized,r=t.campaign;switch(t.type){case z.campaign:return g$1({},e,{campaign:r});case z.offline:return g$1({},e,{offline:!0});case z.online:return g$1({},e,{offline:!1});default:return n?e:g$1({},Ee,e,{initialized:!0})}}var Se=["plugins","reducers","storage"];function Ne(){return f("analytics",[]),function(e){return function(t,n$1,r){var i=e(t,n$1,r),a=i.dispatch;return Object.assign(i,{dispatch:function(e){return n[o].analytics.push(e.action||e),a(e)}})}}}function Ae(e){return function(){return P(P.apply(null,arguments),Ne())}}function _e(e){return e?rn(e)?e:[e]:[]}function Oe(t,n,r){void 0===t&&(t={});var i,a,o=y$1();return n&&(B[o]=(i=n,a=function(e){for(var t,n=e||Array.prototype.slice.call(arguments),r=0;r<n.length;r++)if(W$1(n[r])){t=n[r];break}return t}(r),function(e){a&&a(e),i(e);})),g$1({},t,{rid:o,ts:(new Date).getTime()},n?{hasCallback:!0}:{})}function je(o){void 0===o&&(o={});var u=o.reducers||{},s$1=o.initialUser||{},f$1=(o.plugins||[]).reduce(function(e,t){if(W$1(t))return e.middlewares=e.middlewares.concat(t),e;if(t.NAMESPACE&&(t.name=t.NAMESPACE),!t.name)throw new Error("https://lytics.dev/errors/1");t.config||(t.config={});var n=t.EVENTS?Object.keys(t.EVENTS).map(function(e){return t.EVENTS[e]}):[];e.pluginEnabled[t.name]=!(!1===t.enabled||!1===t.config.enabled),delete t.enabled,t.methods&&(e.methods[t.name]=Object.keys(t.methods).reduce(function(e,n){var r;return e[n]=(r=t.methods[n],function(){for(var e=Array.prototype.slice.call(arguments),t=new Array(r.length),n=0;n<e.length;n++)t[n]=e[n];return t[t.length]=K,r.apply({instance:K},t)}),e},{}),delete t.methods);var r=Object.keys(t).concat(n),i=new Set(e.events.concat(r));if(e.events=Array.from(i),e.pluginsArray=e.pluginsArray.concat(t),e.plugins[t.name])throw new Error(t.name+"AlreadyLoaded");return e.plugins[t.name]=t,e.plugins[t.name].loaded||(e.plugins[t.name].loaded=function(){return !0}),e},{plugins:{},pluginEnabled:{},methods:{},pluginsArray:[],middlewares:[],events:[]}),m=o.storage?o.storage:{getItem:a$2,setItem:f,removeItem:i$2},b=function(e){return function(t,n,i){return n.getState("user")[t]||(i&&on(i)&&i[t]?i[t]:R(e)[t]||a$2($(t))||null)}}(m),I=f$1.plugins,A=f$1.events.filter(function(e){return !T.includes(e)}).sort(),_=new Set(A.concat(x$1).filter(function(e){return !T.includes(e)})),O=Array.from(_).sort(),M=function(){return I},q=new ue,V=q.addMiddleware,B=q.removeMiddleware,L=q.dynamicMiddlewares,J=function(){throw new Error("Abort disabled inListener")},X=s(),H=R(m),W=g$1({},H,s$1,X.an_uid?{userId:X.an_uid}:{},X.an_aid?{anonymousId:X.an_aid}:{});W.anonymousId||(W.anonymousId=y$1());var F=g$1({enable:function(e,t){return new Promise(function(n){le.dispatch({type:z.enablePlugin,plugins:_e(e),_:{originalAction:z.enablePlugin}},n,[t]);})},disable:function(e,t){return new Promise(function(n){le.dispatch({type:z.disablePlugin,plugins:_e(e),_:{originalAction:z.disablePlugin}},n,[t]);})}},f$1.methods),G=!1,K={identify:function(e,t,n,r){try{var i=q$1(e)?e:null,o=on(e)?e:t,u=n||{},s=K.user();f($(j),i);var l=i||o.userId||b(j,K,o);return Promise.resolve(new Promise(function(e){le.dispatch(g$1({type:z.identifyStart,userId:l,traits:o||{},options:u,anonymousId:s.anonymousId},s.id&&s.id!==i&&{previousId:s.id}),e,[t,n,r]);}))}catch(e){return Promise.reject(e)}},track:function(e,t,n,r){try{var i=on(e)?e.event:e;if(!i||!q$1(i))throw new Error("EventMissing");var a=on(e)?e:t||{},o=on(n)?n:{};return Promise.resolve(new Promise(function(e){le.dispatch({type:z.trackStart,event:i,properties:a,options:o,userId:b(j,K,t),anonymousId:b(k$1,K,t)},e,[t,n,r]);}))}catch(e){return Promise.reject(e)}},page:function(e,t,n){try{var r=on(e)?e:{},i=on(t)?t:{};return Promise.resolve(new Promise(function(a){le.dispatch({type:z.pageStart,properties:be(r),options:i,userId:b(j,K,r),anonymousId:b(k$1,K,r)},a,[e,t,n]);}))}catch(e){return Promise.reject(e)}},user:function(e){if(e===j||"id"===e)return b(j,K);if(e===k$1||"anonId"===e)return b(k$1,K);var t=K.getState("user");return e?n$2(t,e):t},reset:function(e){return new Promise(function(t){le.dispatch({type:z.resetStart},t,e);})},ready:function(e){return G&&e({plugins:F,instance:K}),K.on(z.ready,function(t){e(t),G=!0;})},on:function(e,t){if(!e||!W$1(t))return !1;if(e===z.bootstrap)throw new Error(".on disabled for "+e);var n=/Start$|Start:/;if("*"===e){var r=function(e){return function(e){return function(r){return r.type.match(n)&&t({payload:r,instance:K,plugins:I}),e(r)}}},i=function(e){return function(e){return function(r){return r.type.match(n)||t({payload:r,instance:K,plugins:I}),e(r)}}};return V(r,ke),V(i,xe),function(){B(r,ke),B(i,xe);}}var a=e.match(n)?ke:xe,o=function(n){return function(n){return function(r){return r.type===e&&t({payload:r,instance:K,plugins:I,abort:J}),n(r)}}};return V(o,a),function(){return B(o,a)}},once:function(e,t){if(!e||!W$1(t))return !1;if(e===z.bootstrap)throw new Error(".once disabled for "+e);var n=K.on(e,function(e){t({payload:e.payload,instance:K,plugins:I,abort:J}),n();});return n},getState:function(e){var t=le.getState();return e?n$2(t,e):Object.assign({},t)},dispatch:function(e){var t=q$1(e)?{type:e}:e;if(x$1.includes(t.type))throw new Error("reserved action "+t.type);var n=g$1({},t,{_:g$1({originalAction:t.type},e._||{})});le.dispatch(n);},enablePlugin:F.enable,disablePlugin:F.disable,plugins:F,storage:{getItem:m.getItem,setItem:function(e,t,n){le.dispatch({type:z.setItemStart,key:e,value:t,options:n});},removeItem:function(e,t){le.dispatch({type:z.removeItemStart,key:e,options:t});}},setAnonymousId:function(e,t){K.storage.setItem(N$1,e,t);},events:{core:x$1,plugins:A}},Q=f$1.middlewares.concat([function(e){return function(e){return function(t){return t.meta||(t.meta=Oe()),e(t)}}},L(ke),ae(K,M,{all:O,plugins:A}),oe(m),C$1(K),D(K),L(xe)]),Y={context:Pe,user:U(m),page:we,track:pe,plugins:ce(M),queue:ge},Z=P,ee=P;if($$1&&o.debug){var te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;te&&(Z=te({trace:!0,traceLimit:25})),ee=function(){return 0===arguments.length?Ne():on(typeof arguments[0])?Ae():Ae().apply(null,arguments)};}var ne,re=function(e){return Object.keys(e).reduce(function(t,n){return Se.includes(n)||(t[n]=e[n]),t},{})}(o),ie=f$1.pluginsArray.reduce(function(e,t){var n=t.name,r=t.config,i=t.loaded,a=f$1.pluginEnabled[n];return e[n]={enabled:a,initialized:!!a&&Boolean(!t.initialize),loaded:Boolean(i({config:r})),config:r},e},{}),se={context:re,user:W,plugins:ie},le=w(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]===h$1&&(n[i]=e[i]);}var a,o=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(typeof n(void 0,{type:"@@redux/INIT"})===v||typeof n(void 0,{type:y})===v)throw new Error("reducer "+t+" "+v)});}(n);}catch(e){a=e;}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,i={},u=0;u<o.length;u++){var c=o[u],s=e[c],l=(0, n[c])(s,t);if(typeof l===v){var f=E$1(c,t);throw new Error(f)}i[c]=l,r=r||l!==s;}return r?i:e}}(g$1({},Y,u)),se,ee(Z(S.apply(void 0,Q))));le.dispatch=(ne=le.dispatch,function(e,t,n){var r=g$1({},e,{meta:Oe(e.meta,t,_e(n))});return ne.apply(null,[r])});var fe=Object.keys(I);le.dispatch({type:z.bootstrap,plugins:fe,config:re,params:X,user:W,initialUser:s$1,persistedUser:H});var de=fe.filter(function(e){return f$1.pluginEnabled[e]}),me=fe.filter(function(e){return !f$1.pluginEnabled[e]});return le.dispatch({type:z.registerPlugins,plugins:fe,enabled:f$1.pluginEnabled}),f$1.pluginsArray.map(function(e,t){var n=e.bootstrap,r=e.config,i=e.name;n&&W$1(n)&&n({instance:K,config:r,payload:e}),le.dispatch({type:z.registerPluginType(i),name:i,enabled:f$1.pluginEnabled[i],plugin:e}),f$1.pluginsArray.length===t+1&&le.dispatch({type:z.initializeStart,plugins:de,disabled:me});}),K}var ke="before",xe="after";

  var t="cookie",i$1=a$1(),r$1=d$1,c=d$1;function u(o){return i$1?d$1(o,"",-1):i$2(o)}function a$1(){if(void 0!==i$1)return i$1;var e="cookiecookie";try{d$1(e,e),i$1=-1!==document.cookie.indexOf(e),u(e);}catch(e){i$1=!1;}return i$1}function d$1(e,t,r,c,u,a){if("undefined"!=typeof window){var d=arguments.length>1;return !1===i$1&&(d?f(e,t):a$2(e)),d?document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+new Date(+new Date+1e3*r).toUTCString()+(c?"; path="+c:"")+(u?"; domain="+u:"")+(a?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])}}

  var r="localStorage",g=b$2.bind(null,"localStorage");u$1("localStorage","getItem",a$2);u$1("localStorage","setItem",f);u$1("localStorage","removeItem",i$2);

  var a="sessionStorage",i=b$2.bind(null,"sessionStorage");u$1("sessionStorage","getItem",a$2);u$1("sessionStorage","setItem",f);u$1("sessionStorage","removeItem",i$2);

  function I(t){var o=t;try{if("true"===(o=JSON.parse(t)))return !0;if("false"===o)return !1;if(on(o))return o;parseFloat(o)===o&&(o=parseFloat(o));}catch(t){}if(null!==o&&""!==o)return o}var k=g(),O=i(),x=a$1();function C(o,e){if(o){var r=A(e),a=!N(r),i=d(r)?I(localStorage.getItem(o)):void 0;if(a&&!I$2(i))return i;var n=h(r)?I(r$1(o)):void 0;if(a&&n)return n;var l=E(r)?I(sessionStorage.getItem(o)):void 0;if(a&&l)return l;var u=a$2(o);return a?u:{localStorage:i,sessionStorage:l,cookie:n,global:u}}}function L(r$2,a$1,l$1){if(r$2&&!I$2(a$1)){var u={},g=A(l$1),m=JSON.stringify(a$1),S=!N(g);return d(g)&&(u[r]=F(r,a$1,I(localStorage.getItem(r$2))),localStorage.setItem(r$2,m),S)?u[r]:h(g)&&(u[t]=F(t,a$1,I(r$1(r$2))),c(r$2,m),S)?u[t]:E(g)&&(u[a]=F(a,a$1,I(sessionStorage.getItem(r$2))),sessionStorage.setItem(r$2,m),S)?u[a]:(u[l]=F(l,a$1,a$2(r$2)),f(r$2,a$1),S?u[l]:u)}}function b(t$1,e){if(t$1){var a$1=A(e),s=C(t$1,m$1),n={};return !I$2(s.localStorage)&&d(a$1)&&(localStorage.removeItem(t$1),n[r]=s.localStorage),!I$2(s.cookie)&&h(a$1)&&(u(t$1),n[t]=s.cookie),!I$2(s.sessionStorage)&&E(a$1)&&(sessionStorage.removeItem(t$1),n[a]=s.sessionStorage),!I$2(s.global)&&G(a$1,l)&&(i$2(t$1),n[l]=s.global),n}}function A(t){return t?q$1(t)?t:t.storage:b$3}function d(t){return k&&G(t,r)}function h(t$1){return x&&G(t$1,t)}function E(t){return O&&G(t,a)}function N(t){return t===m$1||"all"===t}function G(t,o){return t===b$3||t===o||N(t)}function F(t,o,e){return {location:t,current:o,previous:e}}var J={setItem:L,getItem:C,removeItem:b};

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function analyticsLib() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaultSettings = {
      storage: J
    };
    return je(_objectSpread2(_objectSpread2({}, defaultSettings), opts));
  }

  function findScript(src) {
      const scripts = Array.prototype.slice.call(window.document.querySelectorAll("script"));
      return scripts.find(s => s.src === src);
  }
  function loadScript(src, attributes) {
      const found = findScript(src);
      if (found !== undefined) {
          const status = found === null || found === void 0 ? void 0 : found.getAttribute("status");
          if (status === "loaded") {
              return Promise.resolve(found);
          }
          if (status === "loading") {
              return new Promise((resolve, reject) => {
                  found.addEventListener("load", () => resolve(found));
                  found.addEventListener("error", err => reject(err));
              });
          }
      }
      return new Promise((resolve, reject) => {
          var _a;
          const script = window.document.createElement("script");
          script.type = "text/javascript";
          script.src = src;
          script.async = true;
          script.setAttribute("status", "loading");
          for (const [k, v] of Object.entries(attributes !== null && attributes !== void 0 ? attributes : {})) {
              script.setAttribute(k, v);
          }
          script.onload = () => {
              script.onerror = script.onload = null;
              script.setAttribute("status", "loaded");
              resolve(script);
          };
          script.onerror = () => {
              script.onerror = script.onload = null;
              script.setAttribute("status", "error");
              reject(new Error(`Failed to load ${src}`));
          };
          const tag = window.document.getElementsByTagName("script")[0];
          (_a = tag.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(script, tag);
      });
  }

  var __awaiter$5 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  const tagPlugin = {
      id: "tag",
      handle(config, payload) {
          return __awaiter$5(this, void 0, void 0, function* () {
              if (!applyFilters(payload, config)) {
                  return;
              }
              insertTags(config.code, payload);
          });
      },
  };
  function insertTags(code, event, opts = {}) {
      let tag;
      try {
          tag = JSON.parse(code);
      }
      catch (e) {
          tag = { code, lang: "javascript" };
      }
      const debug = opts.debug || false;
      if (isInBrowser()) {
          if (tag.lang === "javascript") {
              execJs(tag.code, event);
          }
          else {
              const codeHolder = document.createElement("span");
              codeHolder.innerHTML = replaceMacro(tag.code, event);
              document.body.insertAdjacentElement("beforeend", codeHolder);
              const scripts = codeHolder.querySelectorAll("script");
              scripts.forEach(script => {
                  const scriptClone = document.createElement("script");
                  scriptClone.type = scriptClone.type || "text/javascript";
                  if (script.hasAttribute("src")) {
                      scriptClone.src = script.src;
                  }
                  scriptClone.text = script.text;
                  if (debug) {
                      console.log(`[JITSU] Executing script${script.hasAttribute("src") ? ` ${script.src}` : ""}`, scriptClone.text);
                  }
                  document.head.appendChild(scriptClone);
                  document.head.removeChild(scriptClone);
              });
          }
      }
      else {
          if (debug) {
              console.log(`[JITSU] insertTags(): cannot insert tags in non-browser environment`);
          }
      }
  }
  //This weird code is used to mask eval() usage.
  //Although the code can be executed in the browser, some server side bundlers (like Vercel) fails
  //the build if a direct reference to eval() is found.
  let al = "al";
  let ev = "ve".split("").reverse().join("");
  const execF = globalThis[ev + al];
  function execJs(code, event) {
      const varName = `jitsu_event_${randomId()}`;
      window[varName] = event;
      const iif = `(function(){
      const event = ${varName};
      ${code}
  })()`;
      try {
          execF(iif);
      }
      catch (e) {
          console.error(`[JITSU] Error executing JS code: ${e.message}. Code: `, iif);
      }
      finally {
          delete window[varName];
      }
      return iif;
  }
  function replaceMacro(code, event) {
      return code.replace(/{{\s*event\s*}}/g, JSON.stringify(event));
  }

  var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  const logrocketPlugin = {
      id: "logrocket",
      handle(config, payload) {
          return __awaiter$4(this, void 0, void 0, function* () {
              if (!applyFilters(payload, config)) {
                  return;
              }
              initLogrocketIfNeeded(config.appId);
              const action = logRocket => {
                  if (payload.type === "identify" && payload.userId) {
                      logRocket.identify(payload.userId, payload.traits || {});
                  }
              };
              getLogRocketQueue().push(action);
              if (getLogRocketState() === "loaded") {
                  flushLogRocketQueue(window["LogRocket"]);
              }
          });
      },
  };
  function getLogRocketState() {
      return window["__jitsuLrState"] || "fresh";
  }
  function setLogRocketState(s) {
      window["__jitsuLrState"] = s;
  }
  function getLogRocketQueue() {
      return window["__jitsuLrQueue"] || (window["__jitsuLrQueue"] = []);
  }
  function flushLogRocketQueue(lr) {
      const queue = getLogRocketQueue();
      while (queue.length > 0) {
          const method = queue.shift();
          try {
              const res = method(lr);
              if (res) {
                  res.catch(e => console.warn(`Async LogRocket method failed: ${e.message}`, e));
              }
          }
          catch (e) {
              console.warn(`LogRocket method failed: ${e.message}`, e);
          }
      }
  }
  function initLogrocketIfNeeded(appId) {
      return __awaiter$4(this, void 0, void 0, function* () {
          if (getLogRocketState() !== "fresh") {
              return;
          }
          setLogRocketState("loading");
          loadScript(`https://cdn.lr-ingest.io/LogRocket.min.js`, { crossOrigin: "anonymous" })
              .then(() => {
              if (window["LogRocket"]) {
                  try {
                      window["LogRocket"].init(appId);
                  }
                  catch (e) {
                      console.warn(`LogRocket (id=${appId}) init failed: ${e.message}`, e);
                      setLogRocketState("failed");
                  }
                  setLogRocketState("loaded");
                  flushLogRocketQueue(window["LogRocket"]);
              }
          })
              .catch(e => {
              console.warn(`LogRocket (id=${appId}) init failed: ${e.message}`, e);
              setLogRocketState("failed");
          });
      });
  }

  var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  function omit(obj, ...keys) {
      return Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
  }
  const gtmPlugin = {
      id: "gtm",
      handle(config, payload) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
          return __awaiter$3(this, void 0, void 0, function* () {
              const debug = !!config.debug;
              if (!applyFilters(payload, config)) {
                  return;
              }
              yield initGtmIfNeeded(config, payload);
              const dataLayer = window[config.dataLayerName || "dataLayer"];
              //traits could be in both nodes, context.traits takes precedence
              const traits = Object.assign(Object.assign({}, ((payload === null || payload === void 0 ? void 0 : payload.traits) || {})), (((_a = payload === null || payload === void 0 ? void 0 : payload.context) === null || _a === void 0 ? void 0 : _a.traits) || {}));
              //remove properties that defined separately
              const idsFromTraits = omit(traits, "id", "userId", "user_id", "anonymousId", "userId");
              if (debug) {
                  console.debug("GTM plugin will be applied to following payload", payload);
              }
              // See  https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data
              const userData = {
                  email_address: traits.email,
              };
              const ids = Object.assign(Object.assign(Object.assign(Object.assign({}, (payload.userId ? { user_id: payload.userId, userId: payload.userId } : {})), (payload.anonymousId ? { anonymousId: payload.anonymousId } : {})), idsFromTraits), { user_data: Object.keys(userData).length > 0 ? userData : undefined });
              if (debug) {
                  console.debug("GTM plugin will set following user-related data layer vars", ids);
              }
              const pageProperties = payload.properties || {};
              const pageVariables = {
                  page_location: pageProperties.url || ((_c = (_b = payload.context) === null || _b === void 0 ? void 0 : _b.page) === null || _c === void 0 ? void 0 : _c.url),
                  page_title: pageProperties.title || ((_e = (_d = payload.context) === null || _d === void 0 ? void 0 : _d.page) === null || _e === void 0 ? void 0 : _e.title),
                  page_path: pageProperties.path || ((_g = (_f = payload.context) === null || _f === void 0 ? void 0 : _f.page) === null || _g === void 0 ? void 0 : _g.path),
                  page_hash: pageProperties.hash || ((_j = (_h = payload.context) === null || _h === void 0 ? void 0 : _h.page) === null || _j === void 0 ? void 0 : _j.hash),
                  page_search: pageProperties.search || ((_l = (_k = payload.context) === null || _k === void 0 ? void 0 : _k.page) === null || _l === void 0 ? void 0 : _l.search),
                  page_referrer: (_p = (_o = (_m = payload === null || payload === void 0 ? void 0 : payload.context) === null || _m === void 0 ? void 0 : _m.page) === null || _o === void 0 ? void 0 : _o.referrer) !== null && _p !== void 0 ? _p : "",
              };
              if (debug) {
                  console.debug("GTM plugin will set following context (page) related data layer vars", ids);
              }
              const pushToDataLayer = (data) => {
                  dataLayer.push(data);
                  if (debug) {
                      console.debug("GTM plugin will push following data to dataLayer", data);
                  }
              };
              switch (payload.type) {
                  case "page":
                      const pageEvent = Object.assign(Object.assign({ event: "page_view" }, pageVariables), ids);
                      pushToDataLayer(pageEvent);
                      break;
                  case "track":
                      const { properties: trackProperties } = payload;
                      const trackEvent = Object.assign(Object.assign(Object.assign({ event: payload.event }, pageVariables), trackProperties), ids);
                      pushToDataLayer(trackEvent);
                      break;
                  case "identify":
                      const { traits } = payload;
                      const identifyEvent = Object.assign(Object.assign(Object.assign({ event: "identify" }, pageVariables), traits), ids);
                      pushToDataLayer(identifyEvent);
                      break;
              }
              dataLayer.push(function () {
                  this.reset();
              });
          });
      },
  };
  function getGtmState() {
      return window["__jitsuGtmState"] || "fresh";
  }
  function setGtmState(s) {
      window["__jitsuGtmState"] = s;
  }
  function initGtmIfNeeded(config, payload) {
      return __awaiter$3(this, void 0, void 0, function* () {
          if (getGtmState() !== "fresh") {
              return;
          }
          setGtmState("loading");
          const dlName = config.dataLayerName || "dataLayer";
          const tagId = config.containerId;
          (function (w, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                  user_id: payload.userId,
              });
              w[l].push({
                  "gtm.start": new Date().getTime(),
                  event: "gtm.js",
              });
              const dl = l != "dataLayer" ? "&l=" + l : "";
              const scriptSrc = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              loadScript(scriptSrc)
                  .then(() => {
                  setGtmState("loaded");
              })
                  .catch(e => {
                  console.warn(`GTM (containerId=${tagId}) init failed: ${e.message}`, e);
                  setGtmState("failed");
              });
          })(window, dlName, tagId);
      });
  }

  var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  const defaultScriptSrc = "https://www.googletagmanager.com/gtag/js";
  const ga4Plugin = {
      id: "ga4-tag",
      handle(config, payload) {
          var _a, _b;
          return __awaiter$2(this, void 0, void 0, function* () {
              if (!applyFilters(payload, config)) {
                  return;
              }
              yield initGa4IfNeeded(config, payload);
              const dataLayer = window[config.dataLayerName || "dataLayer"];
              const gtag = function () {
                  dataLayer.push(arguments);
              };
              const ids = Object.assign(Object.assign({}, (payload.userId ? { user_id: payload.userId, userId: payload.userId } : {})), (payload.anonymousId ? { anonymousId: payload.anonymousId } : {}));
              if (payload.userId) {
                  // @ts-ignore
                  gtag("set", { user_id: payload.userId });
              }
              switch (payload.type) {
                  case "page":
                      if (config.autoPageView) {
                          console.log("autoPageView");
                          break;
                      }
                      const { properties: pageProperties, context } = payload;
                      const pageEvent = Object.assign({ page_location: pageProperties.url, page_title: pageProperties.title, page_path: pageProperties.path, page_hash: pageProperties.hash, page_search: pageProperties.search, page_referrer: (_b = (_a = context === null || context === void 0 ? void 0 : context.page) === null || _a === void 0 ? void 0 : _a.referrer) !== null && _b !== void 0 ? _b : "" }, ids);
                      // @ts-ignore
                      gtag("event", "page_view", pageEvent);
                      break;
                  case "track":
                      const { properties: trackProperties } = payload;
                      const trackEvent = Object.assign(Object.assign({}, trackProperties), ids);
                      // @ts-ignore
                      gtag("event", payload.event, trackEvent);
                      break;
                  case "identify":
                      const { traits } = payload;
                      const identifyEvent = Object.assign(Object.assign({}, traits), ids);
                      // @ts-ignore
                      gtag("event", "identify", identifyEvent);
                      break;
              }
          });
      },
  };
  function getGa4State() {
      return window["__jitsuGa4State"] || "fresh";
  }
  function setGa4State(s) {
      window["__jitsuGa4State"] = s;
  }
  function initGa4IfNeeded(config, payload) {
      return __awaiter$2(this, void 0, void 0, function* () {
          if (getGa4State() !== "fresh") {
              return;
          }
          setGa4State("loading");
          const dlName = config.dataLayerName || "dataLayer";
          const dlParam = dlName !== "dataLayer" ? "&l=" + dlName : "";
          // to work with both GA4 and GTM
          const tagId = config.measurementIds;
          const scriptSrc = `${defaultScriptSrc}?id=${tagId}${dlParam}`;
          window[dlName] = window[dlName] || [];
          const gtag = function () {
              window[dlName].push(arguments);
          };
          // @ts-ignore
          gtag("js", new Date());
          gtag(
          // @ts-ignore
          "config", tagId, Object.assign(Object.assign({}, (payload.userId ? { user_id: payload.userId } : {})), (!config.autoPageView ? { send_page_view: false } : {})));
          loadScript(scriptSrc)
              .then(() => {
              setGa4State("loaded");
          })
              .catch(e => {
              console.warn(`GA4 (containerId=${config.measurementIds}) init failed: ${e.message}`, e);
              setGa4State("failed");
          });
      });
  }

  function satisfyFilter(filter, subject) {
      return filter === "*" || filter.toLowerCase().trim() === (subject || "").trim().toLowerCase();
  }
  function satisfyDomainFilter(filter, subject) {
      if (filter === "*") {
          return true;
      }
      subject = subject || "";
      if (filter.startsWith("*.")) {
          return subject.endsWith(filter.substring(1));
      }
      else {
          return filter === subject;
      }
  }
  function applyFilters(event, creds) {
      const { hosts = "*", events = "*" } = creds;
      try {
          const eventsArray = Array.isArray(events) ? events : events.split("\n");
          const hostsArray = Array.isArray(hosts) ? hosts : hosts.split("\n");
          return (!!hostsArray.find(hostFilter => { var _a, _b; return satisfyDomainFilter(hostFilter, (_b = (_a = event.context) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.host); }) &&
              (!!eventsArray.find(eventFilter => satisfyFilter(eventFilter, event.type)) ||
                  !!eventsArray.find(eventFilter => satisfyFilter(eventFilter, event.event))));
      }
      catch (e) {
          console.warn(`Failed to apply filters: ${e.message}. Typeof events: ${typeof events}, typeof hosts: ${typeof hosts}. Values`, events, hosts);
          throw new Error(`Failed to apply filters: ${e.message}. Typeof events: ${typeof events}, typeof hosts: ${typeof hosts}`);
      }
  }
  const internalDestinationPlugins = {
      [tagPlugin.id]: tagPlugin,
      [gtmPlugin.id]: gtmPlugin,
      [ga4Plugin.id]: ga4Plugin,
      [logrocketPlugin.id]: logrocketPlugin,
  };

  const jitsuVersion = "2.0.0";
  const jitsuLibraryName = "@jitsu/js";

  const publicSuffixes = "ac,com.ac,edu.ac,gov.ac,net.ac,mil.ac,org.ac,ad,nom.ad,ae,co.ae,net.ae,org.ae,sch.ae,ac.ae,gov.ae,mil.ae,aero,af,gov.af,com.af,org.af,net.af,edu.af,ag,com.ag,org.ag,net.ag,co.ag,nom.ag,ai,off.ai,com.ai,net.ai,org.ai,al,com.al,edu.al,gov.al,mil.al,net.al,org.al,am,co.am,com.am,commune.am,net.am,org.am,ao,ed.ao,gv.ao,og.ao,co.ao,pb.ao,it.ao,aq,ar,bet.ar,com.ar,coop.ar,edu.ar,gob.ar,gov.ar,int.ar,mil.ar,musica.ar,mutual.ar,net.ar,org.ar,senasa.ar,tur.ar,arpa,e164.arpa,in-addr.arpa,ip6.arpa,iris.arpa,uri.arpa,urn.arpa,as,gov.as,asia,at,ac.at,co.at,gv.at,or.at,sth.ac.at,au,com.au,net.au,org.au,edu.au,gov.au,asn.au,id.au,act.au,nsw.au,nt.au,qld.au,sa.au,tas.au,vic.au,wa.au,aw,com.aw,ax,az,com.az,net.az,int.az,gov.az,org.az,edu.az,info.az,pp.az,mil.az,name.az,pro.az,biz.az,ba,com.ba,edu.ba,gov.ba,mil.ba,net.ba,org.ba,bb,biz.bb,co.bb,com.bb,edu.bb,gov.bb,info.bb,net.bb,org.bb,store.bb,tv.bb,bd,be,ac.be,bf,gov.bf,bg,a.bg,b.bg,c.bg,d.bg,e.bg,f.bg,g.bg,h.bg,i.bg,j.bg,k.bg,l.bg,m.bg,n.bg,o.bg,p.bg,q.bg,r.bg,s.bg,t.bg,u.bg,v.bg,w.bg,x.bg,y.bg,z.bg,0.bg,1.bg,2.bg,3.bg,4.bg,5.bg,6.bg,7.bg,8.bg,9.bg,bh,com.bh,edu.bh,net.bh,org.bh,gov.bh,bi,co.bi,com.bi,edu.bi,or.bi,org.bi,biz,bj,africa.bj,agro.bj,architectes.bj,assur.bj,avocats.bj,co.bj,com.bj,eco.bj,econo.bj,edu.bj,info.bj,loisirs.bj,money.bj,net.bj,org.bj,ote.bj,resto.bj,restaurant.bj,tourism.bj,univ.bj,bm,com.bm,edu.bm,gov.bm,net.bm,org.bm,bn,com.bn,edu.bn,gov.bn,net.bn,org.bn,bo,com.bo,edu.bo,gob.bo,int.bo,org.bo,net.bo,mil.bo,tv.bo,web.bo,br,9guacu.br,abc.br,adm.br,adv.br,agr.br,aju.br,am.br,anani.br,aparecida.br,app.br,arq.br,art.br,ato.br,b.br,barueri.br,belem.br,bhz.br,bib.br,bio.br,blog.br,bmd.br,boavista.br,bsb.br,campinagrande.br,campinas.br,caxias.br,cim.br,cng.br,cnt.br,com.br,contagem.br,coop.br,coz.br,cri.br,cuiaba.br,curitiba.br,def.br,des.br,det.br,dev.br,ecn.br,eco.br,edu.br,emp.br,enf.br,eng.br,esp.br,etc.br,eti.br,far.br,feira.br,flog.br,floripa.br,fm.br,fnd.br,fortal.br,fot.br,foz.br,fst.br,g12.br,geo.br,ggf.br,goiania.br,gov.br,gru.br,imb.br,ind.br,inf.br,jab.br,jampa.br,jdf.br,joinville.br,jor.br,jus.br,leg.br,lel.br,log.br,londrina.br,macapa.br,maceio.br,manaus.br,maringa.br,mat.br,med.br,mil.br,morena.br,mp.br,mus.br,natal.br,net.br,niteroi.br,nom.br,not.br,ntr.br,odo.br,ong.br,org.br,osasco.br,palmas.br,poa.br,ppg.br,pro.br,psc.br,psi.br,pvh.br,qsl.br,radio.br,rec.br,recife.br,rep.br,ribeirao.br,rio.br,riobranco.br,riopreto.br,salvador.br,sampa.br,santamaria.br,santoandre.br,saobernardo.br,saogonca.br,seg.br,sjc.br,slg.br,slz.br,sorocaba.br,srv.br,taxi.br,tc.br,tec.br,teo.br,the.br,tmp.br,trd.br,tur.br,tv.br,udi.br,vet.br,vix.br,vlog.br,wiki.br,zlg.br,bs,com.bs,net.bs,org.bs,edu.bs,gov.bs,bt,com.bt,edu.bt,gov.bt,net.bt,org.bt,bv,bw,co.bw,org.bw,by,gov.by,mil.by,com.by,of.by,bz,com.bz,net.bz,org.bz,edu.bz,gov.bz,ca,ab.ca,bc.ca,mb.ca,nb.ca,nf.ca,nl.ca,ns.ca,nt.ca,nu.ca,on.ca,pe.ca,qc.ca,sk.ca,yk.ca,gc.ca,cat,cc,cd,gov.cd,cf,cg,ch,ci,org.ci,or.ci,com.ci,co.ci,edu.ci,ed.ci,ac.ci,net.ci,go.ci,asso.ci,aéroport.ci,int.ci,presse.ci,md.ci,gouv.ci,ck,cl,co.cl,gob.cl,gov.cl,mil.cl,cm,co.cm,com.cm,gov.cm,net.cm,cn,ac.cn,com.cn,edu.cn,gov.cn,net.cn,org.cn,mil.cn,co,arts.co,com.co,edu.co,firm.co,gov.co,info.co,int.co,mil.co,net.co,nom.co,org.co,rec.co,web.co,com,coop,cr,ac.cr,co.cr,ed.cr,fi.cr,go.cr,or.cr,sa.cr,cu,com.cu,edu.cu,org.cu,net.cu,gov.cu,inf.cu,cv,com.cv,edu.cv,int.cv,nome.cv,org.cv,cw,com.cw,edu.cw,net.cw,org.cw,cx,gov.cx,cy,ac.cy,biz.cy,com.cy,ekloges.cy,gov.cy,ltd.cy,mil.cy,net.cy,org.cy,press.cy,pro.cy,tm.cy,cz,de,dj,dk,dm,com.dm,net.dm,org.dm,edu.dm,gov.dm,do,art.do,com.do,edu.do,gob.do,gov.do,mil.do,net.do,org.do,sld.do,web.do,dz,art.dz,asso.dz,com.dz,edu.dz,gov.dz,org.dz,net.dz,pol.dz,soc.dz,tm.dz,ec,com.ec,info.ec,net.ec,fin.ec,k12.ec,med.ec,pro.ec,org.ec,edu.ec,gov.ec,gob.ec,mil.ec,edu,ee,edu.ee,gov.ee,riik.ee,lib.ee,med.ee,com.ee,pri.ee,aip.ee,org.ee,fie.ee,eg,com.eg,edu.eg,eun.eg,gov.eg,mil.eg,name.eg,net.eg,org.eg,sci.eg,er,es,com.es,nom.es,org.es,gob.es,edu.es,et,com.et,gov.et,org.et,edu.et,biz.et,name.et,info.et,net.et,eu,fi,aland.fi,fj,ac.fj,biz.fj,com.fj,gov.fj,info.fj,mil.fj,name.fj,net.fj,org.fj,pro.fj,fk,com.fm,edu.fm,net.fm,org.fm,fm,fo,fr,asso.fr,com.fr,gouv.fr,nom.fr,prd.fr,tm.fr,aeroport.fr,avocat.fr,avoues.fr,cci.fr,chambagri.fr,chirurgiens-dentistes.fr,experts-comptables.fr,geometre-expert.fr,greta.fr,huissier-justice.fr,medecin.fr,notaires.fr,pharmacien.fr,port.fr,veterinaire.fr,ga,gb,edu.gd,gov.gd,gd,ge,com.ge,edu.ge,gov.ge,org.ge,mil.ge,net.ge,pvt.ge,gf,gg,co.gg,net.gg,org.gg,gh,com.gh,edu.gh,gov.gh,org.gh,mil.gh,gi,com.gi,ltd.gi,gov.gi,mod.gi,edu.gi,org.gi,gl,co.gl,com.gl,edu.gl,net.gl,org.gl,gm,gn,ac.gn,com.gn,edu.gn,gov.gn,org.gn,net.gn,gov,gp,com.gp,net.gp,mobi.gp,edu.gp,org.gp,asso.gp,gq,gr,com.gr,edu.gr,net.gr,org.gr,gov.gr,gs,gt,com.gt,edu.gt,gob.gt,ind.gt,mil.gt,net.gt,org.gt,gu,com.gu,edu.gu,gov.gu,guam.gu,info.gu,net.gu,org.gu,web.gu,gw,gy,co.gy,com.gy,edu.gy,gov.gy,net.gy,org.gy,hk,com.hk,edu.hk,gov.hk,idv.hk,net.hk,org.hk,hm,hn,com.hn,edu.hn,org.hn,net.hn,mil.hn,gob.hn,hr,iz.hr,from.hr,name.hr,com.hr,ht,com.ht,shop.ht,firm.ht,info.ht,adult.ht,net.ht,pro.ht,org.ht,med.ht,art.ht,coop.ht,pol.ht,asso.ht,edu.ht,rel.ht,gouv.ht,perso.ht,hu,co.hu,info.hu,org.hu,priv.hu,sport.hu,tm.hu,2000.hu,agrar.hu,bolt.hu,casino.hu,city.hu,erotica.hu,erotika.hu,film.hu,forum.hu,games.hu,hotel.hu,ingatlan.hu,jogasz.hu,konyvelo.hu,lakas.hu,media.hu,news.hu,reklam.hu,sex.hu,shop.hu,suli.hu,szex.hu,tozsde.hu,utazas.hu,video.hu,id,ac.id,biz.id,co.id,desa.id,go.id,mil.id,my.id,net.id,or.id,ponpes.id,sch.id,web.id,ie,gov.ie,il,ac.il,co.il,gov.il,idf.il,k12.il,muni.il,net.il,org.il,im,ac.im,co.im,com.im,ltd.co.im,net.im,org.im,plc.co.im,tt.im,tv.im,in,5g.in,6g.in,ac.in,ai.in,am.in,bihar.in,biz.in,business.in,ca.in,cn.in,co.in,com.in,coop.in,cs.in,delhi.in,dr.in,edu.in,er.in,firm.in,gen.in,gov.in,gujarat.in,ind.in,info.in,int.in,internet.in,io.in,me.in,mil.in,net.in,nic.in,org.in,pg.in,post.in,pro.in,res.in,travel.in,tv.in,uk.in,up.in,us.in,info,int,eu.int,io,com.io,iq,gov.iq,edu.iq,mil.iq,com.iq,org.iq,net.iq,ir,ac.ir,co.ir,gov.ir,id.ir,net.ir,org.ir,sch.ir,is,net.is,com.is,edu.is,gov.is,org.is,int.is,it,gov.it,edu.it,je,co.je,net.je,org.je,jm,jo,com.jo,org.jo,net.jo,edu.jo,sch.jo,gov.jo,mil.jo,name.jo,jobs,jp,ac.jp,ad.jp,co.jp,ed.jp,go.jp,gr.jp,lg.jp,ne.jp,or.jp,ke,ac.ke,co.ke,go.ke,info.ke,me.ke,mobi.ke,ne.ke,or.ke,sc.ke,kg,org.kg,net.kg,com.kg,edu.kg,gov.kg,mil.kg,kh,ki,edu.ki,biz.ki,net.ki,org.ki,gov.ki,info.ki,com.ki,km,org.km,nom.km,gov.km,prd.km,tm.km,edu.km,mil.km,ass.km,com.km,kn,net.kn,org.kn,edu.kn,gov.kn,kp,com.kp,edu.kp,gov.kp,org.kp,rep.kp,tra.kp,kr,ac.kr,co.kr,es.kr,go.kr,hs.kr,kg.kr,mil.kr,ms.kr,ne.kr,or.kr,pe.kr,re.kr,sc.kr,kw,com.kw,edu.kw,emb.kw,gov.kw,ind.kw,net.kw,org.kw,ky,com.ky,edu.ky,net.ky,org.ky,kz,org.kz,edu.kz,net.kz,gov.kz,mil.kz,com.kz,la,int.la,net.la,info.la,edu.la,gov.la,per.la,com.la,org.la,lb,com.lb,edu.lb,gov.lb,net.lb,org.lb,lc,com.lc,net.lc,co.lc,org.lc,edu.lc,gov.lc,li,lk,gov.lk,sch.lk,net.lk,int.lk,com.lk,org.lk,edu.lk,ngo.lk,soc.lk,web.lk,ltd.lk,assn.lk,grp.lk,hotel.lk,ac.lk,lr,com.lr,edu.lr,gov.lr,org.lr,net.lr,ls,ac.ls,biz.ls,co.ls,edu.ls,gov.ls,info.ls,net.ls,org.ls,sc.ls,lt,gov.lt,lu,lv,com.lv,edu.lv,gov.lv,org.lv,mil.lv,id.lv,net.lv,asn.lv,conf.lv,ly,com.ly,net.ly,gov.ly,plc.ly,edu.ly,sch.ly,med.ly,org.ly,id.ly,ma,co.ma,net.ma,gov.ma,org.ma,ac.ma,press.ma,mc,tm.mc,asso.mc,md,me,co.me,net.me,org.me,edu.me,ac.me,gov.me,its.me,priv.me,mg,org.mg,nom.mg,gov.mg,prd.mg,tm.mg,edu.mg,mil.mg,com.mg,co.mg,mh,mil,mk,com.mk,org.mk,net.mk,edu.mk,gov.mk,inf.mk,name.mk,ml,com.ml,edu.ml,gouv.ml,gov.ml,net.ml,org.ml,presse.ml,mm,mn,gov.mn,edu.mn,org.mn,mo,com.mo,net.mo,org.mo,edu.mo,gov.mo,mobi,mp,mq,mr,gov.mr,ms,com.ms,edu.ms,gov.ms,net.ms,org.ms,mt,com.mt,edu.mt,net.mt,org.mt,mu,com.mu,net.mu,org.mu,gov.mu,ac.mu,co.mu,or.mu,museum,mv,aero.mv,biz.mv,com.mv,coop.mv,edu.mv,gov.mv,info.mv,int.mv,mil.mv,museum.mv,name.mv,net.mv,org.mv,pro.mv,mw,ac.mw,biz.mw,co.mw,com.mw,coop.mw,edu.mw,gov.mw,int.mw,museum.mw,net.mw,org.mw,mx,com.mx,org.mx,gob.mx,edu.mx,net.mx,my,biz.my,com.my,edu.my,gov.my,mil.my,name.my,net.my,org.my,mz,ac.mz,adv.mz,co.mz,edu.mz,gov.mz,mil.mz,net.mz,org.mz,na,info.na,pro.na,name.na,school.na,or.na,dr.na,us.na,mx.na,ca.na,in.na,cc.na,tv.na,ws.na,mobi.na,co.na,com.na,org.na,name,nc,asso.nc,nom.nc,ne,net,nf,com.nf,net.nf,per.nf,rec.nf,web.nf,arts.nf,firm.nf,info.nf,other.nf,store.nf,ng,com.ng,edu.ng,gov.ng,i.ng,mil.ng,mobi.ng,name.ng,net.ng,org.ng,sch.ng,ni,ac.ni,biz.ni,co.ni,com.ni,edu.ni,gob.ni,in.ni,info.ni,int.ni,mil.ni,net.ni,nom.ni,org.ni,web.ni,nl,no,fhs.no,vgs.no,fylkesbibl.no,folkebibl.no,museum.no,idrett.no,priv.no,mil.no,stat.no,dep.no,kommune.no,herad.no,np,nr,biz.nr,info.nr,gov.nr,edu.nr,org.nr,net.nr,com.nr,nu,nz,ac.nz,co.nz,cri.nz,geek.nz,gen.nz,govt.nz,health.nz,iwi.nz,kiwi.nz,maori.nz,mil.nz,māori.nz,net.nz,org.nz,parliament.nz,school.nz,om,co.om,com.om,edu.om,gov.om,med.om,museum.om,net.om,org.om,pro.om,onion,org,pa,ac.pa,gob.pa,com.pa,org.pa,sld.pa,edu.pa,net.pa,ing.pa,abo.pa,med.pa,nom.pa,pe,edu.pe,gob.pe,nom.pe,mil.pe,org.pe,com.pe,net.pe,pf,com.pf,org.pf,edu.pf,pg,ph,com.ph,net.ph,org.ph,gov.ph,edu.ph,ngo.ph,mil.ph,i.ph,pk,com.pk,net.pk,edu.pk,org.pk,fam.pk,biz.pk,web.pk,gov.pk,gob.pk,gok.pk,gon.pk,gop.pk,gos.pk,info.pk,pl,com.pl,net.pl,org.pl,aid.pl,agro.pl,atm.pl,auto.pl,biz.pl,edu.pl,gmina.pl,gsm.pl,info.pl,mail.pl,miasta.pl,media.pl,mil.pl,nieruchomosci.pl,nom.pl,pc.pl,powiat.pl,priv.pl,realestate.pl,rel.pl,sex.pl,shop.pl,sklep.pl,sos.pl,szkola.pl,targi.pl,tm.pl,tourism.pl,travel.pl,turystyka.pl,pm,pn,gov.pn,co.pn,org.pn,edu.pn,net.pn,post,pr,com.pr,net.pr,org.pr,gov.pr,edu.pr,isla.pr,pro.pr,biz.pr,info.pr,name.pr,est.pr,prof.pr,ac.pr,pro,aaa.pro,aca.pro,acct.pro,avocat.pro,bar.pro,cpa.pro,eng.pro,jur.pro,law.pro,med.pro,recht.pro,ps,edu.ps,gov.ps,sec.ps,plo.ps,com.ps,org.ps,net.ps,pt,net.pt,gov.pt,org.pt,edu.pt,int.pt,publ.pt,com.pt,nome.pt,pw,co.pw,ne.pw,or.pw,ed.pw,go.pw,belau.pw,py,com.py,coop.py,edu.py,gov.py,mil.py,net.py,org.py,qa,com.qa,edu.qa,gov.qa,mil.qa,name.qa,net.qa,org.qa,sch.qa,re,asso.re,com.re,nom.re,ro,arts.ro,com.ro,firm.ro,info.ro,nom.ro,nt.ro,org.ro,rec.ro,store.ro,tm.ro,www.ro,rs,ac.rs,co.rs,edu.rs,gov.rs,in.rs,org.rs,ru,rw,ac.rw,co.rw,coop.rw,gov.rw,mil.rw,net.rw,org.rw,sa,com.sa,net.sa,org.sa,gov.sa,med.sa,pub.sa,edu.sa,sch.sa,sb,com.sb,edu.sb,gov.sb,net.sb,org.sb,sc,com.sc,gov.sc,net.sc,org.sc,edu.sc,sd,com.sd,net.sd,org.sd,edu.sd,med.sd,tv.sd,gov.sd,info.sd,se,a.se,ac.se,b.se,bd.se,brand.se,c.se,d.se,e.se,f.se,fh.se,fhsk.se,fhv.se,g.se,h.se,i.se,k.se,komforb.se,kommunalforbund.se,komvux.se,l.se,lanbib.se,m.se,n.se,naturbruksgymn.se,o.se,org.se,p.se,parti.se,pp.se,press.se,r.se,s.se,t.se,tm.se,u.se,w.se,x.se,y.se,z.se,sg,com.sg,net.sg,org.sg,gov.sg,edu.sg,per.sg,sh,com.sh,net.sh,gov.sh,org.sh,mil.sh,si,sj,sk,sl,com.sl,net.sl,edu.sl,gov.sl,org.sl,sm,sn,art.sn,com.sn,edu.sn,gouv.sn,org.sn,perso.sn,univ.sn,so,com.so,edu.so,gov.so,me.so,net.so,org.so,sr,ss,biz.ss,com.ss,edu.ss,gov.ss,me.ss,net.ss,org.ss,sch.ss,st,co.st,com.st,consulado.st,edu.st,embaixada.st,mil.st,net.st,org.st,principe.st,saotome.st,store.st,su,sv,com.sv,edu.sv,gob.sv,org.sv,red.sv,sx,gov.sx,sy,edu.sy,gov.sy,net.sy,mil.sy,com.sy,org.sy,sz,co.sz,ac.sz,org.sz,tc,td,tel,tf,tg,th,ac.th,co.th,go.th,in.th,mi.th,net.th,or.th,tj,ac.tj,biz.tj,co.tj,com.tj,edu.tj,go.tj,gov.tj,int.tj,mil.tj,name.tj,net.tj,nic.tj,org.tj,test.tj,web.tj,tk,tl,gov.tl,tm,com.tm,co.tm,org.tm,net.tm,nom.tm,gov.tm,mil.tm,edu.tm,tn,com.tn,ens.tn,fin.tn,gov.tn,ind.tn,info.tn,intl.tn,mincom.tn,nat.tn,net.tn,org.tn,perso.tn,tourism.tn,to,com.to,gov.to,net.to,org.to,edu.to,mil.to,tr,av.tr,bbs.tr,bel.tr,biz.tr,com.tr,dr.tr,edu.tr,gen.tr,gov.tr,info.tr,mil.tr,k12.tr,kep.tr,name.tr,net.tr,org.tr,pol.tr,tel.tr,tsk.tr,tv.tr,web.tr,nc.tr,tt,co.tt,com.tt,org.tt,net.tt,biz.tt,info.tt,pro.tt,int.tt,coop.tt,jobs.tt,mobi.tt,travel.tt,museum.tt,aero.tt,name.tt,gov.tt,edu.tt,tv,tw,edu.tw,gov.tw,mil.tw,com.tw,net.tw,org.tw,idv.tw,game.tw,ebiz.tw,club.tw,tz,ac.tz,co.tz,go.tz,hotel.tz,info.tz,me.tz,mil.tz,mobi.tz,ne.tz,or.tz,sc.tz,tv.tz,ua,com.ua,edu.ua,gov.ua,in.ua,net.ua,org.ua,ug,co.ug,or.ug,ac.ug,sc.ug,go.ug,ne.ug,com.ug,org.ug,uk,ac.uk,co.uk,gov.uk,ltd.uk,me.uk,net.uk,nhs.uk,org.uk,plc.uk,police.uk,us,dni.us,fed.us,isa.us,kids.us,nsn.us,ak.us,al.us,ar.us,as.us,az.us,ca.us,co.us,ct.us,dc.us,de.us,fl.us,ga.us,gu.us,hi.us,ia.us,id.us,il.us,in.us,ks.us,ky.us,la.us,ma.us,md.us,me.us,mi.us,mn.us,mo.us,ms.us,mt.us,nc.us,nd.us,ne.us,nh.us,nj.us,nm.us,nv.us,ny.us,oh.us,ok.us,or.us,pa.us,pr.us,ri.us,sc.us,sd.us,tn.us,tx.us,ut.us,vi.us,vt.us,va.us,wa.us,wi.us,wv.us,wy.us,uy,com.uy,edu.uy,gub.uy,mil.uy,net.uy,org.uy,uz,co.uz,com.uz,net.uz,org.uz,va,vc,com.vc,net.vc,org.vc,gov.vc,mil.vc,edu.vc,ve,arts.ve,bib.ve,co.ve,com.ve,e12.ve,edu.ve,firm.ve,gob.ve,gov.ve,info.ve,int.ve,mil.ve,net.ve,nom.ve,org.ve,rar.ve,rec.ve,store.ve,tec.ve,web.ve,vg,vi,co.vi,com.vi,k12.vi,net.vi,org.vi,vn,ac.vn,ai.vn,biz.vn,com.vn,edu.vn,gov.vn,health.vn,id.vn,info.vn,int.vn,io.vn,name.vn,net.vn,org.vn,pro.vn,vu,com.vu,edu.vu,net.vu,org.vu,wf,ws,com.ws,net.ws,org.ws,gov.ws,edu.ws,yt,ye,com.ye,edu.ye,gov.ye,net.ye,mil.ye,org.ye,ac.za,agric.za,alt.za,co.za,edu.za,gov.za,grondar.za,law.za,mil.za,net.za,ngo.za,nic.za,nis.za,nom.za,org.za,school.za,tm.za,web.za,zm,ac.zm,biz.zm,co.zm,com.zm,edu.zm,gov.zm,info.zm,mil.zm,net.zm,org.zm,sch.zm,zw,ac.zw,co.zw,gov.zw,mil.zw,org.zw".split(",");
  //convert to Map
  const _publicSuffixesMap = {};
  publicSuffixes.forEach(tld => {
      _publicSuffixesMap[tld] = true;
  });
  const publicSuffixesMap = _publicSuffixesMap;
  function getTopLevelDomain(hostname) {
      const [domain] = hostname.split(":");
      const parts = domain.split(".");
      if (parts[parts.length - 1] === "localhost" || parts.length < 2) {
          return parts[parts.length - 1];
      }
      else {
          const d = parts[parts.length - 2] + "." + parts[parts.length - 1];
          if (parts.length > 2 && publicSuffixesMap[d]) {
              return parts[parts.length - 3] + "." + d;
          }
          else {
              return d;
          }
      }
  }

  class Processor {
      constructor(options) {
          this.selfOptions = options || {};
          this.pipes = {};
      }
      options(options) {
          if (options) {
              this.selfOptions = options;
          }
          return this.selfOptions;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pipe(name, pipeArg) {
          let pipe = pipeArg;
          if (typeof name === "string") {
              if (typeof pipe === "undefined") {
                  return this.pipes[name];
              }
              else {
                  this.pipes[name] = pipe;
              }
          }
          if (name && name.name) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              pipe = name;
              if (pipe.processor === this) {
                  return pipe;
              }
              this.pipes[pipe.name] = pipe;
          }
          pipe.processor = this;
          return pipe;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      process(input, pipe) {
          let context = input;
          context.options = this.options();
          let nextPipe = pipe || input.pipe || "default";
          let lastPipe;
          while (nextPipe) {
              if (typeof context.nextAfterChildren !== "undefined") {
                  // children processed and coming back to parent
                  context.next = context.nextAfterChildren;
                  context.nextAfterChildren = null;
              }
              if (typeof nextPipe === "string") {
                  nextPipe = this.pipe(nextPipe);
              }
              nextPipe.process(context);
              lastPipe = nextPipe;
              nextPipe = null;
              if (context) {
                  if (context.next) {
                      context = context.next;
                      nextPipe = context.pipe || lastPipe;
                  }
              }
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return context.hasResult ? context.result : undefined;
      }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  class Pipe {
      constructor(name) {
          this.name = name;
          this.filters = [];
      }
      process(input) {
          if (!this.processor) {
              throw new Error("add this pipe to a processor before using it");
          }
          const debug = this.debug;
          const length = this.filters.length;
          const context = input;
          for (let index = 0; index < length; index++) {
              const filter = this.filters[index];
              if (debug) {
                  this.log(`filter: ${filter.filterName}`);
              }
              filter(context);
              if (typeof context === "object" && context.exiting) {
                  context.exiting = false;
                  break;
              }
          }
          if (!context.next && this.resultCheck) {
              this.resultCheck(context);
          }
      }
      log(msg) {
          console.log(`[jsondiffpatch] ${this.name} pipe, ${msg}`);
      }
      append(...args) {
          this.filters.push(...args);
          return this;
      }
      prepend(...args) {
          this.filters.unshift(...args);
          return this;
      }
      indexOf(filterName) {
          if (!filterName) {
              throw new Error("a filter name is required");
          }
          for (let index = 0; index < this.filters.length; index++) {
              const filter = this.filters[index];
              if (filter.filterName === filterName) {
                  return index;
              }
          }
          throw new Error(`filter not found: ${filterName}`);
      }
      list() {
          return this.filters.map(f => f.filterName);
      }
      after(filterName, ...params) {
          const index = this.indexOf(filterName);
          this.filters.splice(index + 1, 0, ...params);
          return this;
      }
      before(filterName, ...params) {
          const index = this.indexOf(filterName);
          this.filters.splice(index, 0, ...params);
          return this;
      }
      replace(filterName, ...params) {
          const index = this.indexOf(filterName);
          this.filters.splice(index, 1, ...params);
          return this;
      }
      remove(filterName) {
          const index = this.indexOf(filterName);
          this.filters.splice(index, 1);
          return this;
      }
      clear() {
          this.filters.length = 0;
          return this;
      }
      shouldHaveResult(should) {
          if (should === false) {
              this.resultCheck = null;
              return;
          }
          if (this.resultCheck) {
              return;
          }
          this.resultCheck = context => {
              if (!context.hasResult) {
                  console.log(context);
                  const error = new Error(`${this.name} failed`);
                  error.noResult = true;
                  throw error;
              }
          };
          return this;
      }
  }

  class Context {
      setResult(result) {
          this.result = result;
          this.hasResult = true;
          return this;
      }
      exit() {
          this.exiting = true;
          return this;
      }
      push(child, name) {
          child.parent = this;
          if (typeof name !== "undefined") {
              child.childName = name;
          }
          child.root = this.root || this;
          child.options = child.options || this.options;
          if (!this.children) {
              this.children = [child];
              this.nextAfterChildren = this.next || null;
              this.next = child;
          }
          else {
              this.children[this.children.length - 1].next = child;
              this.children.push(child);
          }
          child.next = this;
          return this;
      }
  }

  class DiffContext extends Context {
      constructor(left, right) {
          super();
          this.left = left;
          this.right = right;
          this.pipe = "diff";
      }
      setResult(result) {
          return super.setResult(result);
      }
  }

  class PatchContext extends Context {
      constructor(left, delta) {
          super();
          this.left = left;
          this.delta = delta;
          this.pipe = "patch";
      }
  }

  function arrayEquals(a, b) {
      if (a.length !== b.length) {
          return false;
      }
      for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
              return false;
          }
      }
      return true;
  }
  const diffFilter$1 = function trivialMatchesDiffFilter(context) {
      if (context.left === context.right) {
          context.setResult(undefined).exit();
          return;
      }
      if (typeof context.left === "undefined") {
          if (typeof context.right === "function") {
              throw new Error("functions are not supported");
          }
          context.setResult([context.right]).exit();
          return;
      }
      if (typeof context.right === "undefined") {
          context.setResult([context.left, 0, 0]).exit();
          return;
      }
      if (typeof context.left === "function" || typeof context.right === "function") {
          throw new Error("functions are not supported");
      }
      context.leftType = context.left === null ? "null" : typeof context.left;
      context.rightType = context.right === null ? "null" : typeof context.right;
      if (context.leftType !== context.rightType) {
          context.setResult([context.left, context.right]).exit();
          return;
      }
      if (context.leftType === "boolean" || context.leftType === "number" || context.leftType === "string") {
          context.setResult([context.left, context.right]).exit();
          return;
      }
      if (context.leftType === "object") {
          context.leftIsArray = Array.isArray(context.left);
      }
      if (context.rightType === "object") {
          context.rightIsArray = Array.isArray(context.right);
      }
      if (context.leftIsArray !== context.rightIsArray) {
          context.setResult([context.left, context.right]).exit();
          return;
      }
      if (context.leftIsArray && context.rightIsArray) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          if (arrayEquals(context.left, context.right)) {
              context.setResult(undefined).exit();
              return;
          }
          else {
              context.setResult([context.left, context.right]).exit();
              return;
          }
      }
      if (context.left instanceof RegExp) {
          if (context.right instanceof RegExp) {
              context.setResult([context.left.toString(), context.right.toString()]).exit();
          }
          else {
              context.setResult([context.left, context.right]).exit();
          }
      }
  };
  diffFilter$1.filterName = "trivial";
  const patchFilter$1 = function trivialMatchesPatchFilter(context) {
      if (typeof context.delta === "undefined") {
          context.setResult(context.left).exit();
          return;
      }
      context.nested = !Array.isArray(context.delta);
      if (context.nested) {
          return;
      }
      const nonNestedDelta = context.delta;
      if (nonNestedDelta.length === 1) {
          context.setResult(nonNestedDelta[0]).exit();
          return;
      }
      if (nonNestedDelta.length === 2) {
          if (context.left instanceof RegExp) {
              const regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(nonNestedDelta[1]);
              if (regexArgs) {
                  context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
                  return;
              }
          }
          context.setResult(nonNestedDelta[1]).exit();
          return;
      }
      if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
          context.setResult(undefined).exit();
      }
  };
  patchFilter$1.filterName = "trivial";

  const collectChildrenDiffFilter = context => {
      if (!context || !context.children) {
          return;
      }
      const length = context.children.length;
      let child;
      let result = context.result;
      for (let index = 0; index < length; index++) {
          child = context.children[index];
          if (typeof child.result === "undefined") {
              continue;
          }
          result = result || {};
          result[child.childName] = child.result;
      }
      if (result && context.leftIsArray) {
          result._t = "a";
      }
      context.setResult(result).exit();
  };
  collectChildrenDiffFilter.filterName = "collectChildren";
  const objectsDiffFilter = context => {
      if (context.leftIsArray || context.leftType !== "object") {
          return;
      }
      const left = context.left;
      const right = context.right;
      let name;
      let child;
      const propertyFilter = context.options.propertyFilter;
      for (name in left) {
          if (!Object.prototype.hasOwnProperty.call(left, name)) {
              continue;
          }
          if (propertyFilter && !propertyFilter(name, context)) {
              continue;
          }
          child = new DiffContext(left[name], right[name]);
          context.push(child, name);
      }
      for (name in right) {
          if (!Object.prototype.hasOwnProperty.call(right, name)) {
              continue;
          }
          if (propertyFilter && !propertyFilter(name, context)) {
              continue;
          }
          if (typeof left[name] === "undefined") {
              child = new DiffContext(undefined, right[name]);
              context.push(child, name);
          }
      }
      if (!context.children || context.children.length === 0) {
          context.setResult(undefined).exit();
          return;
      }
      context.exit();
  };
  objectsDiffFilter.filterName = "objects";
  const patchFilter = function nestedPatchFilter(context) {
      if (!context.nested) {
          return;
      }
      const nestedDelta = context.delta;
      if (nestedDelta._t) {
          return;
      }
      const objectDelta = nestedDelta;
      let name;
      let child;
      for (name in objectDelta) {
          child = new PatchContext(context.left[name], objectDelta[name]);
          context.push(child, name);
      }
      context.exit();
  };
  patchFilter.filterName = "objects";
  const collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
      if (!context || !context.children) {
          return;
      }
      const deltaWithChildren = context.delta;
      if (deltaWithChildren._t) {
          return;
      }
      const object = context.left;
      const length = context.children.length;
      let child;
      for (let index = 0; index < length; index++) {
          child = context.children[index];
          const property = child.childName;
          if (Object.prototype.hasOwnProperty.call(context.left, property) && child.result === undefined) {
              delete object[property];
          }
          else if (object[property] !== child.result) {
              object[property] = child.result;
          }
      }
      context.setResult(object).exit();
  };
  collectChildrenPatchFilter.filterName = "collectChildren";

  const diffFilter = function datesDiffFilter(context) {
      if (context.left instanceof Date) {
          if (context.right instanceof Date) {
              if (context.left.getTime() !== context.right.getTime()) {
                  context.setResult([context.left, context.right]);
              }
              else {
                  context.setResult(undefined);
              }
          }
          else {
              context.setResult([context.left, context.right]);
          }
          context.exit();
      }
      else if (context.right instanceof Date) {
          context.setResult([context.left, context.right]).exit();
      }
  };
  diffFilter.filterName = "dates";

  class DiffPatcher {
      constructor(options) {
          this.processor = new Processor(options);
          this.processor.pipe(new Pipe("diff")
              .append(collectChildrenDiffFilter, diffFilter$1, diffFilter, objectsDiffFilter)
              .shouldHaveResult());
          this.processor.pipe(new Pipe("patch")
              .append(collectChildrenPatchFilter, patchFilter$1, patchFilter)
              .shouldHaveResult());
      }
      options(options) {
          return this.processor.options(options);
      }
      diff(left, right) {
          return this.processor.process(new DiffContext(left, right));
      }
      patch(left, delta) {
          return this.processor.process(new PatchContext(left, delta));
      }
  }

  function create(options) {
      return new DiffPatcher(options);
  }

  /* global analytics */
  var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  const diff = create();
  const defaultConfig = {
      /* Your segment writeKey */
      writeKey: null,
      /* Disable anonymous MTU */
      host: null,
      debug: false,
      fetch: null,
      echoEvents: false,
      cookieDomain: undefined,
      runtime: undefined,
      fetchTimeoutMs: undefined,
      s2s: undefined,
  };
  const parseQuery = (qs) => {
      if (!qs) {
          return {};
      }
      let queryString = qs.length > 0 && qs.charAt(0) === "?" ? qs.substring(1) : qs;
      let query = {};
      let pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
      for (let i = 0; i < pairs.length; i++) {
          let pair = pairs[i].split("=");
          query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
      }
      return query;
  };
  function utmToKey(key) {
      const name = key.substring("utm_".length);
      return name === "campaign" ? "name" : name;
  }
  function parseUtms(query) {
      return Object.entries(query)
          .filter(([key]) => key.indexOf("utm_") === 0)
          .reduce((acc, [key, value]) => (Object.assign(Object.assign({}, acc), { [utmToKey(key)]: value })), {});
  }
  function safeCall(f, defaultVal) {
      try {
          return f();
      }
      catch (e) {
          return defaultVal;
      }
  }
  function restoreTraits(storage) {
      let val = storage.getItem("__user_traits");
      if (typeof val === "string") {
          val = safeCall(() => JSON.parse(val), {});
      }
      if (typeof val !== "object" || val === null || Array.isArray(val)) {
          val = {};
      }
      let groupVal = storage.getItem("__group_traits");
      if (typeof groupVal === "string") {
          groupVal = safeCall(() => JSON.parse(groupVal), {});
      }
      if (typeof groupVal !== "object" || groupVal === null || Array.isArray(groupVal)) {
          groupVal = {};
      }
      return Object.assign(Object.assign({}, (groupVal || {})), (val || {}));
  }
  function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      return parts.length === 2 ? parts.pop().split(";").shift() : undefined;
  }
  function getGa4Ids(runtime) {
      var _a;
      const allCookies = runtime.getCookies();
      const clientId = (_a = allCookies["_ga"]) === null || _a === void 0 ? void 0 : _a.split(".").slice(-2).join(".");
      const gaSessionCookies = Object.entries(allCookies).filter(([key]) => key.startsWith("_ga_"));
      const sessionIds = gaSessionCookies.length > 0
          ? Object.fromEntries(gaSessionCookies
              .map(([key, value]) => {
              if (typeof value !== "string") {
                  return null;
              }
              const parts = value.split(".");
              if (parts.length < 3) {
                  return null;
              }
              return [key.substring("_ga_".length), parts[2]];
          })
              .filter(v => v !== null))
          : undefined;
      if (clientId || sessionIds) {
          return { ga4: { clientId, sessionIds } };
      }
      else {
          return undefined;
      }
  }
  function removeCookie(name) {
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  function setCookie(name, val, { domain, secure }) {
      document.cookie =
          name +
              "=" +
              val +
              ";domain=" +
              domain +
              ";path=/" +
              ";expires=" +
              new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365 * 5).toUTCString() +
              ";SameSite=" +
              (secure ? "None" : "Lax") +
              (secure ? ";secure" : "");
  }
  const defaultCookie2Key = {
      __anon_id: "__eventn_id",
      __user_traits: "__eventn_id_usr",
      __user_id: "__eventn_uid",
  };
  const cookieStorage = (cookieDomain, key2cookie) => {
      return {
          setItem(key, val) {
              const strVal = typeof val === "object" && val !== null ? encodeURIComponent(JSON.stringify(val)) : val;
              const cookieName = key2cookie[key] || key;
              setCookie(cookieName, strVal, {
                  domain: cookieDomain,
                  secure: window.location.protocol === "https:",
              });
          },
          getItem(key) {
              const cookieName = key2cookie[key] || key;
              const result = getCookie(cookieName);
              if (typeof result === "undefined" && key === "__user_id") {
                  //backward compatibility with old jitsu cookie. get user id if from traits
                  const traits = parse(getCookie("__eventn_id_usr")) || {};
                  return traits.internal_id || traits.user_id || traits.id || traits.userId;
              }
              return parse(result);
          },
          removeItem(key) {
              removeCookie(key2cookie[key] || key);
          },
      };
  };
  function windowRuntime(opts) {
      return {
          getCookie(name) {
              const value = `; ${document.cookie}`;
              const parts = value.split(`; ${name}=`);
              return parts.length === 2 ? parts.pop().split(";").shift() : undefined;
          },
          getCookies() {
              const value = `; ${document.cookie}`;
              const cookies = {};
              const matches = value.matchAll(/(\w+)=([^;]+)/g);
              for (const match of matches) {
                  cookies[match[1]] = match[2];
              }
              return cookies;
          },
          documentEncoding() {
              return window.document.characterSet;
          },
          timezoneOffset() {
              return new Date().getTimezoneOffset();
          },
          store() {
              return cookieStorage(opts.cookieDomain || getTopLevelDomain(window.location.hostname), defaultCookie2Key);
          },
          language() {
              return window.navigator.language;
          },
          pageTitle() {
              return window.document.title;
          },
          pageUrl() {
              return window.location.href;
          },
          referrer() {
              return window.document.referrer;
          },
          screen() {
              return {
                  width: window.screen.width,
                  height: window.screen.height,
                  innerWidth: window.innerWidth,
                  innerHeight: window.innerHeight,
                  density: Math.floor(window.devicePixelRatio),
              };
          },
          userAgent() {
              return window.navigator.userAgent;
          },
      };
  }
  const emptyRuntime = (config) => ({
      documentEncoding() {
          return undefined;
      },
      timezoneOffset() {
          return undefined;
      },
      getCookie(name) {
          return undefined;
      },
      getCookies() {
          return {};
      },
      store() {
          const storage = {};
          return {
              setItem(key, val) {
                  if (config.debug) {
                      console.log(`[JITSU EMPTY RUNTIME] Set storage item ${key}=${JSON.stringify(val)}`);
                  }
                  storage[key] = val;
              },
              getItem(key) {
                  const val = storage[key];
                  if (config.debug) {
                      console.log(`[JITSU EMPTY RUNTIME] Get storage item ${key}=${JSON.stringify(val)}`);
                  }
                  return val;
              },
              removeItem(key) {
                  if (config.debug) {
                      console.log(`[JITSU EMPTY RUNTIME] Get storage item ${key}=${storage[key]}`);
                  }
                  delete storage[key];
              },
          };
      },
      language() {
          return undefined;
      },
      pageTitle() {
          return undefined;
      },
      pageUrl() {
          return undefined;
      },
      referrer() {
          return undefined;
      },
      screen() {
          return undefined;
      },
      userAgent() {
          return undefined;
      },
  });
  function deepMerge(target, source) {
      if (typeof source !== "object" || source === null) {
          return source;
      }
      if (typeof target !== "object" || target === null) {
          return source;
      }
      return Object.entries(source).reduce((acc, [key, value]) => {
          acc[key] = deepMerge(target[key], value);
          return acc;
      }, target);
  }
  function isInBrowser() {
      return typeof document !== "undefined" && typeof window !== "undefined";
  }
  /**
   * Fixes a weird bug in analytics URL where path
   * of https://test.com becomes //test.com
   */
  function fixPath(path) {
      if (path.indexOf("//") === 0 && path.lastIndexOf("/") === 1) {
          return "/";
      }
      return path;
  }
  function adjustPayload(payload, config, storage, s2s) {
      var _a, _b;
      const runtime = config.runtime || (isInBrowser() ? windowRuntime(config) : emptyRuntime(config));
      const url = runtime.pageUrl();
      const parsedUrl = safeCall(() => new URL(url), undefined);
      const query = parsedUrl ? parseQuery(parsedUrl.search) : {};
      const properties = payload.properties || {};
      if (properties.path) {
          properties.path = fixPath(properties.path);
      }
      const customContext = ((_a = payload.properties) === null || _a === void 0 ? void 0 : _a.context) || {};
      (_b = payload.properties) === null || _b === void 0 ? true : delete _b.context;
      const referrer = runtime.referrer();
      const context = {
          library: {
              name: jitsuLibraryName,
              version: jitsuVersion,
              env: s2s ? "node" : "browser",
          },
          userAgent: runtime.userAgent(),
          locale: runtime.language(),
          screen: runtime.screen(),
          traits: payload.type != "identify" && payload.type != "group" ? Object.assign({}, (restoreTraits(storage) || {})) : undefined,
          page: {
              path: properties.path || (parsedUrl && parsedUrl.pathname),
              referrer: referrer,
              referring_domain: safeCall(() => referrer && new URL(referrer).hostname),
              host: parsedUrl && parsedUrl.host,
              search: properties.search || (parsedUrl && parsedUrl.search),
              title: properties.title || runtime.pageTitle(),
              url: properties.url || url,
              encoding: properties.encoding || runtime.documentEncoding(),
          },
          clientIds: Object.assign({ fbc: runtime.getCookie("_fbc"), fbp: runtime.getCookie("_fbp") }, getGa4Ids(runtime)),
          campaign: parseUtms(query),
      };
      const withContext = Object.assign(Object.assign({}, payload), { timestamp: new Date().toISOString(), sentAt: new Date().toISOString(), messageId: randomId(properties.path || (parsedUrl && parsedUrl.pathname)), writeKey: maskWriteKey(config.writeKey), groupId: storage.getItem("__group_id"), context: deepMerge(context, customContext) });
      delete withContext.meta;
      delete withContext.options;
      return withContext;
  }
  function isDiff(obj) {
      const keys = Object.keys(obj);
      return keys.length === 1 && keys[0] === "__diff";
  }
  function processDestinations(destinations, method, originalEvent, debug, analyticsInstance) {
      return __awaiter$1(this, void 0, void 0, function* () {
          const promises = [];
          for (const destination of destinations) {
              let newEvents = [originalEvent];
              if (destination.newEvents) {
                  try {
                      newEvents = destination.newEvents.map(e => e === "same" ? originalEvent : isDiff(e) ? diff.patch(originalEvent, e.__diff) : e);
                  }
                  catch (e) {
                      console.error(`[JITSU] Error applying '${destination.id}' changes to event: ${e === null || e === void 0 ? void 0 : e.message}`, e);
                  }
              }
              const credentials = Object.assign(Object.assign({}, destination.credentials), destination.options);
              if (destination.deviceOptions.type === "internal-plugin") {
                  const plugin = internalDestinationPlugins[destination.deviceOptions.name];
                  if (plugin) {
                      for (const event of newEvents) {
                          try {
                              promises.push(plugin.handle(Object.assign(Object.assign({}, credentials), { debug }), event));
                          }
                          catch (e) {
                              console.warn(`[JITSU] Error processing event with internal plugin '${destination.deviceOptions.name}': ${e === null || e === void 0 ? void 0 : e.message}`, e);
                          }
                      }
                  }
                  else {
                      console.warn(`[JITSU] Unknown internal plugin '${destination.deviceOptions.name}' for destination '${destination.id}'`);
                  }
              }
              else if (destination.deviceOptions.type === "analytics-plugin") {
                  yield loadScript(destination.deviceOptions.packageCdn);
                  const plugin = window[destination.deviceOptions.moduleVarName];
                  if (!plugin) {
                      console.warn(`[JITSU] Broken plugin '${destination.deviceOptions.packageCdn}' for destination '${destination.id}' - it doesn't export '${destination.deviceOptions.moduleVarName}' variable`);
                  }
                  else {
                      let pluginInstance;
                      try {
                          pluginInstance = (typeof plugin === "function" ? plugin : plugin.init)(credentials);
                      }
                      catch (e) {
                          console.warn(`[JITSU] Error creating plugin '${destination.deviceOptions.moduleVarName}@${destination.deviceOptions.packageCdn}' for destination '${destination.id}': ${e === null || e === void 0 ? void 0 : e.message}`, e);
                      }
                      try {
                          if (debug) {
                              console.log(`[JITSU] Plugin '${destination.deviceOptions.moduleVarName}@${destination.deviceOptions.packageCdn}' for destination '${destination.id}' initialized with config:`, pluginInstance.config);
                          }
                          pluginInstance.initialize({ config: pluginInstance.config, instance: analyticsInstance });
                      }
                      catch (e) {
                          console.warn(`[JITSU] Error initializing plugin '${destination.deviceOptions.moduleVarName}@${destination.deviceOptions.packageCdn}' for destination '${destination.id}': ${e === null || e === void 0 ? void 0 : e.message}. Config: ${JSON.stringify(pluginInstance.config)}`, e);
                          continue;
                      }
                      if (pluginInstance[method]) {
                          for (const event of newEvents) {
                              try {
                                  pluginInstance[method]({
                                      payload: event,
                                      config: pluginInstance.config,
                                      instance: analyticsInstance,
                                  });
                              }
                              catch (e) {
                                  console.warn(`[JITSU] Error processing ${method}() with plugin '${destination.deviceOptions.moduleVarName}@${destination.deviceOptions.packageCdn}' for destination '${destination.id}': ${e === null || e === void 0 ? void 0 : e.message}`, e);
                              }
                          }
                      }
                  }
              }
          }
      });
  }
  function looksLikeCuid(id) {
      return id.length === 25 && id.charAt(0) === "c";
  }
  function validateWriteKey(writeKey) {
      if (writeKey) {
          const [, secret] = writeKey.split(":", 2);
          if (!secret && !looksLikeCuid(writeKey)) {
              throw new Error(`Legacy write key detected - ${writeKey}! This format doesn't work anymore, it should be 'key:secret'. Please download a new key from Jitsu UI`);
          }
      }
      return writeKey;
  }
  function maskWriteKey(writeKey) {
      if (writeKey) {
          const [id, secret] = writeKey.split(":", 2);
          if (secret) {
              return `${id}:***`;
          }
          else {
              return "***";
          }
      }
      return writeKey;
  }
  function send(method, payload, jitsuConfig, instance, store) {
      return __awaiter$1(this, void 0, void 0, function* () {
          if (jitsuConfig.echoEvents) {
              console.log(`[JITSU DEBUG] sending '${method}' event:`, payload);
              return;
          }
          const s2s = jitsuConfig.s2s === undefined ? !isInBrowser() : jitsuConfig.s2s;
          const url = s2s ? `${jitsuConfig.host}/api/s/s2s/${method}` : `${jitsuConfig.host}/api/s/${method}`;
          const fetch = jitsuConfig.fetch || globalThis.fetch;
          if (!fetch) {
              throw new Error("Please specify fetch function in jitsu plugin initialization, fetch isn't available in global scope");
          }
          const debugHeader = jitsuConfig.debug ? { "X-Enable-Debug": "true" } : {};
          // if (jitsuConfig.debug) {
          //   console.log(`[JITSU] Sending event to ${url}: `, JSON.stringify(payload, null, 2));
          // }
          const adjustedPayload = adjustPayload(payload, jitsuConfig, store, s2s);
          const abortController = jitsuConfig.fetchTimeoutMs ? new AbortController() : undefined;
          const abortTimeout = jitsuConfig.fetchTimeoutMs
              ? setTimeout(() => {
                  abortController.abort();
              }, jitsuConfig.fetchTimeoutMs)
              : undefined;
          const authHeader = jitsuConfig.writeKey ? { "X-Write-Key": jitsuConfig.writeKey } : {};
          let fetchResult;
          try {
              fetchResult = yield fetch(url, {
                  method: "POST",
                  headers: Object.assign(Object.assign({ "Content-Type": "application/json" }, authHeader), debugHeader),
                  body: JSON.stringify(adjustedPayload),
                  signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal,
              });
              if (abortTimeout) {
                  clearTimeout(abortTimeout);
              }
          }
          catch (e) {
              throw new Error(`Calling ${url} failed: ${e.message}`);
          }
          let responseText;
          try {
              responseText = yield fetchResult.text();
          }
          catch (e) {
              console.warn(`Can't read response text from ${url} (status - ${fetchResult.status}  ${fetchResult.statusText}): ${e === null || e === void 0 ? void 0 : e.message}`);
          }
          if (jitsuConfig.debug) {
              console.log(`[JITSU DEBUG] ${url} replied ${fetchResult.status}: ${responseText}. Original payload:\n${JSON.stringify(adjustedPayload, null, 2)}`);
          }
          if (!fetchResult.ok) {
              throw new Error(`Jitsu ${url} replied ${fetchResult.status} - ${fetchResult.statusText}: ${responseText}`);
          }
          let responseJson;
          try {
              responseJson = JSON.parse(responseText);
          }
          catch (e) {
              return Promise.reject(`Can't parse JSON: ${responseText}: ${e === null || e === void 0 ? void 0 : e.message}`);
          }
          if (responseJson.destinations && responseJson.destinations.length > 0) {
              if (jitsuConfig.s2s) {
                  console.warn(`[JITSU] ${payload.type} responded with list of ${responseJson.destinations.length} destinations. However, this code is running in server-to-server mode, so destinations will be ignored`, jitsuConfig.debug ? JSON.stringify(responseJson.destinations, null, 2) : undefined);
              }
              else {
                  if (jitsuConfig.debug) {
                      console.log(`[JITSU] Processing device destinations: `, JSON.stringify(responseJson.destinations, null, 2));
                  }
                  return processDestinations(responseJson.destinations, method, adjustedPayload, !!jitsuConfig.debug, instance);
              }
          }
          return adjustedPayload;
      });
  }
  const jitsuAnalyticsPlugin = (pluginConfig = {}) => {
      const instanceConfig = Object.assign(Object.assign({}, defaultConfig), pluginConfig);
      return {
          name: "jitsu",
          config: instanceConfig,
          initialize: args => {
              const { config } = args;
              if (config.debug) {
                  console.debug("[JITSU DEBUG] Initializing Jitsu plugin with config: ", JSON.stringify(config, null, 2));
              }
              if (!config.host && !config.echoEvents) {
                  throw new Error("Please specify host variable in jitsu plugin initialization, or set echoEvents to true");
              }
              validateWriteKey(config.writeKey);
          },
          page: args => {
              const { payload, config, instance } = args;
              return send("page", payload, config, instance, pluginConfig.storageWrapper ? pluginConfig.storageWrapper(instance.storage) : instance.storage);
          },
          track: args => {
              const { payload, config, instance } = args;
              return send("track", payload, config, instance, pluginConfig.storageWrapper ? pluginConfig.storageWrapper(instance.storage) : instance.storage);
          },
          identify: args => {
              const { payload, config, instance } = args;
              // Store traits in cache to be able to use them in page and track events that run asynchronously with current identify.
              const storage = pluginConfig.storageWrapper ? pluginConfig.storageWrapper(instance.storage) : instance.storage;
              storage.setItem("__user_id", payload.userId);
              if (payload.traits && typeof payload.traits === "object") {
                  storage.setItem("__user_traits", payload.traits);
              }
              return send("identify", payload, config, instance, storage);
          },
          reset: args => {
              //clear storage cache
              if (pluginConfig.storageWrapper) {
                  pluginConfig.storageWrapper(args.instance.storage).reset();
              }
          },
          methods: {
              //analytics doesn't support group as a base method, so we need to add it manually
              group(groupId, traits, options, callback) {
                  if (typeof groupId === "number") {
                      //fix potential issues with group id being used incorrectly
                      groupId = groupId + "";
                  }
                  const analyticsInstance = this.instance;
                  const cacheWrap = pluginConfig.storageWrapper
                      ? pluginConfig.storageWrapper(analyticsInstance.storage)
                      : analyticsInstance.storage;
                  const user = analyticsInstance.user();
                  const userId = (options === null || options === void 0 ? void 0 : options.userId) || (user === null || user === void 0 ? void 0 : user.userId);
                  const anonymousId = (options === null || options === void 0 ? void 0 : options.anonymousId) || (user === null || user === void 0 ? void 0 : user.anonymousId) || cacheWrap.getItem("__anon_id");
                  cacheWrap.setItem("__group_id", groupId);
                  if (traits && typeof traits === "object") {
                      cacheWrap.setItem("__group_traits", traits);
                  }
                  return send("group", Object.assign(Object.assign({ type: "group", groupId, traits }, (anonymousId ? { anonymousId } : {})), (userId ? { userId } : {})), instanceConfig, analyticsInstance, cacheWrap);
              },
          },
      };
  };
  function getSeed() {
      var _a;
      const defaultSeed = Date.now() % 2147483647;
      return isInBrowser() ? ((_a = window === null || window === void 0 ? void 0 : window.performance) === null || _a === void 0 ? void 0 : _a.now()) || defaultSeed : defaultSeed;
  }
  function randomId(hashString = "") {
      const d = Date.now();
      return (((Math.random() * d * hash(hashString !== null && hashString !== void 0 ? hashString : "", getSeed())) % Number.MAX_SAFE_INTEGER).toString(36) +
          ((Math.random() * d * hash(hashString !== null && hashString !== void 0 ? hashString : "", getSeed())) % Number.MAX_SAFE_INTEGER).toString(36));
  }
  function hash(str, seed = 0) {
      let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
      for (let i = 0, ch; i < str.length; i++) {
          ch = str.charCodeAt(i);
          h1 = Math.imul(h1 ^ ch, 2654435761);
          h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
      h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }

  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  function parse(input) {
      let value = input;
      if ((input === null || input === void 0 ? void 0 : input.indexOf("%7B%22")) === 0) {
          value = decodeURIComponent(input);
      }
      try {
          value = JSON.parse(value);
          if (value === "true")
              return true;
          if (value === "false")
              return false;
          if (typeof value === "object")
              return value;
          if (parseFloat(value) === value) {
              value = parseFloat(value);
          }
      }
      catch (e) { }
      if (value === null || value === "") {
          return;
      }
      return value;
  }
  function createUnderlyingAnalyticsInstance(opts, rt, plugins = []) {
      const storage = rt.store();
      const storageCache = {};
      // AnalyticsInstance's storage is async somewhere inside. So if we make 'page' call right after 'identify' call
      // 'page' call will load traits from storage before 'identify' call had a change to save them.
      // to avoid that we use in-memory cache for storage
      const cachingStorageWrapper = (persistentStorage) => ({
          setItem(key, val) {
              if (opts.debug) {
                  console.log(`[JITSU DEBUG] Caching storage setItem: ${key}=${val}`);
              }
              storageCache[key] = val;
              persistentStorage.setItem(key, val);
          },
          getItem(key) {
              const value = storageCache[key] || persistentStorage.getItem(key);
              if (opts.debug) {
                  console.log(`[JITSU DEBUG] Caching storage getItem: ${key}=${value}. Evicted from cache: ${!storageCache[key]}`);
              }
              return value;
          },
          reset() {
              for (const key of [...Object.keys(storageCache)]) {
                  storage.removeItem(key);
                  delete storageCache[key];
              }
          },
          removeItem(key) {
              if (opts.debug) {
                  console.log(`[JITSU DEBUG] Caching storage removeItem: ${key}`);
              }
              delete storageCache[key];
              persistentStorage.removeItem(key);
          },
      });
      const analytics = analyticsLib({
          debug: !!opts.debug,
          storage,
          plugins: [jitsuAnalyticsPlugin(Object.assign(Object.assign({}, opts), { storageWrapper: cachingStorageWrapper })), ...plugins],
      });
      return Object.assign(Object.assign({}, analytics), { page: (...args) => {
              if (args.length === 2 && typeof args[0] === "string" && typeof args[1] === "object") {
                  return analytics.page(Object.assign({ name: args[0] }, args[1]));
              }
              else {
                  return analytics.page(...args);
              }
          }, identify: (...args) => {
              if (args[0] && typeof args[0] !== "object" && typeof args[0] !== "string") {
                  //fix the quirk of analytics.js: if you pass number as first argument, it will be converted to string
                  args[0] = args[0] + "";
              }
              //analytics.js sets userId and traits asynchronously, so if
              //we want them to be available immediately after identify call in subsequent page() calls,
              //we need to put them into storage manually
              const storage = analytics.storage;
              const storageWrapper = cachingStorageWrapper(storage);
              if (typeof args[0] === "string") {
                  //first argument is user id
                  storageWrapper.setItem("__user_id", args[0]);
              }
              else if (typeof args[0] === "object") {
                  //first argument is traits
                  storageWrapper.setItem("__user_traits", args[0]);
              }
              if (args.length === 2 && typeof args[1] === "object") {
                  //first argument is user id, second is traits
                  storageWrapper.setItem("__user_traits", args[1]);
              }
              return analytics.identify(...args);
          }, setAnonymousId: (id) => {
              if (opts.debug) {
                  console.log("[JITSU DEBUG] Setting anonymous id to " + id);
              }
              //Workaround for analytics.js bug. Underlying setAnonymousId doesn't work set the id immediately,
              //so we got to it manually here. See https://github.com/jitsucom/jitsu/issues/1060
              storage.setItem("__anon_id", id);
              const userState = analytics.user();
              if (userState) {
                  userState.anonymousId = id;
              }
              analytics.setAnonymousId(id);
          }, group(groupId, traits, options, callback) {
              return __awaiter(this, void 0, void 0, function* () {
                  const results = [];
                  for (const plugin of Object.values(analytics.plugins)) {
                      if (plugin["group"]) {
                          results.push(yield plugin["group"](groupId, traits, options, callback));
                      }
                  }
                  //It's incorrect at many levels. First, it's not a dispatched event. Second, we take a first result
                  //However, since returned values are used for debugging purposes only, it's ok
                  return results[0];
              });
          } });
  }
  /**
   * Fix common mistakes in jitsu configuration
   * @param opts
   */
  function fixOptions(opts) {
      return Object.assign(Object.assign({}, opts), { host: opts.host.indexOf("https://") !== 0 && opts.host.indexOf("http://") !== 0 ? `https://${opts.host}` : opts.host });
  }
  function jitsuAnalytics(_opts) {
      const opts = fixOptions(_opts);
      const inBrowser = isInBrowser();
      const rt = opts.runtime || (inBrowser ? windowRuntime(opts) : emptyRuntime(opts));
      return createUnderlyingAnalyticsInstance(opts, rt);
      // if (inBrowser) {
      //   const fetch = opts.fetch || globalThis.fetch;
      //   if (!fetch) {
      //     throw new Error(
      //       "Please specify fetch function in jitsu plugin initialization, fetch isn't available in global scope"
      //     );
      //   }
      //   const url = `${opts.host}/api/s/cfg`;
      //   const authHeader = {};
      //   const debugHeader = opts.debug ? { "X-Enable-Debug": "true" } : {};
      //   fetch(url)
      //     .then(res => res.json())
      //     .then(res => {
      //       result.loaded(createUnderlyingAnalyticsInstance(opts, rt, []));
      //     })
      //     .catch(e => {
      //       console.warn(`[JITSU] error getting device-destinations from ${url}`, e);
      //       result.loaded(createUnderlyingAnalyticsInstance(opts, rt));
      //     });
      // } else {
      //   result.loaded(createUnderlyingAnalyticsInstance(opts, rt));
      // }
  }

  function snakeToCamel(s) {
      return s.replace(/([-_][a-z])/gi, $1 => {
          return $1.toUpperCase().replace("-", "").replace("_", "");
      });
  }
  const booleanParser = (arg) => arg === "true" || arg === "1" || arg === "yes";
  const parsers = {
      debug: booleanParser,
      initOnly: booleanParser,
  };
  function getParser(name) {
      return parsers[name] || (x => x);
  }
  function getScriptAttributes(scriptElement) {
      return scriptElement
          .getAttributeNames()
          .filter(name => name.indexOf("data-") === 0)
          .map(name => name.substring("data-".length))
          .reduce((res, name) => (Object.assign(Object.assign({}, res), { [snakeToCamel(name)]: getParser(snakeToCamel(name))(scriptElement.getAttribute(`data-${name}`)) })), {});
  }
  function runCallback(callback, jitsu) {
      if (typeof callback === "function") {
          callback(jitsu);
      }
      else if (Array.isArray(callback) && typeof callback[0] === "string") {
          const [method, ...args] = callback;
          if (typeof jitsu[method] === "function") {
              jitsu[method](...args);
          }
          else {
              console.warn(`Method ${method} is not supported, ignoring callback`);
          }
      }
      else {
          console.warn(`Invalid jitsu queue callback`, callback);
      }
  }
  (function () {
      function readJitsuOptions() {
          const scriptElement = window.document.currentScript;
          if (!scriptElement) {
              throw new Error(`Can't find script element`);
          }
          const host = new URL(scriptElement.src).origin;
          return Object.assign(Object.assign(Object.assign({}, ((window === null || window === void 0 ? void 0 : window.jitsuConfig) || {})), getScriptAttributes(scriptElement)), { host });
      }
      const options = readJitsuOptions();
      const JITSU_V2_ID = options.namespace || "jitsu";
      if (options.debug) {
          console.log(`Jitsu options: `, JSON.stringify(options));
      }
      const jitsu = jitsuAnalytics(options);
      if (options.onload) {
          const onloadFunction = window[options.onload];
          if (!onloadFunction) {
              console.warn(`onload function ${options.onload} is not found in window`);
          }
          if (typeof onloadFunction === "function") {
              onloadFunction(jitsu);
          }
          else {
              console.warn(`onload function ${options.onload} is not callable: ${typeof onloadFunction}`);
          }
      }
      window[JITSU_V2_ID] = jitsu;
      /**
       * New callback based queue, see below
       */
      //make a copy of the queue
      const callbackQueue = window[JITSU_V2_ID + "Q"] && window[JITSU_V2_ID + "Q"].length ? [...window[JITSU_V2_ID + "Q"]] : [];
      //replace push with a function that calls callback immediately
      window[JITSU_V2_ID + "Q"] = {
          push: (callback) => {
              if (typeof callback === "function") {
                  callback(jitsu);
              }
              else {
                  console.warn(`${JITSU_V2_ID}Q.push() accepts only function, ${typeof callback} given`);
              }
          },
      };
      if (options.debug) {
          console.log(`[JITSU DEBUG] Jitsu callback queue size: ${callbackQueue.length}`, callbackQueue);
      }
      callbackQueue.forEach((callback) => {
          try {
              runCallback(callback, jitsu);
          }
          catch (e) {
              console.warn(`Error processing callback from Jitsu queue`, e);
          }
      });
      if (!options.initOnly) {
          jitsu.page();
      }
  })();

})();
