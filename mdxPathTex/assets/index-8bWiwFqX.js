(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Sh={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function gS(){if(e_)return Wo;e_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=i,Wo.jsxs=i,Wo}var n_;function _S(){return n_||(n_=1,Sh.exports=gS()),Sh.exports}var Et=_S(),Mh={exports:{}},Yo={},Eh={exports:{}},bh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function vS(){return i_||(i_=1,(function(r){function t(L,I){var lt=L.length;L.push(I);t:for(;0<lt;){var pt=lt-1>>>1,bt=L[pt];if(0<l(bt,I))L[pt]=I,L[lt]=bt,lt=pt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var I=L[0],lt=L.pop();if(lt!==I){L[0]=lt;t:for(var pt=0,bt=L.length,P=bt>>>1;pt<P;){var X=2*(pt+1)-1,xt=L[X],Ut=X+1,Ht=L[Ut];if(0>l(xt,lt))Ut<bt&&0>l(Ht,xt)?(L[pt]=Ht,L[Ut]=lt,pt=Ut):(L[pt]=xt,L[X]=lt,pt=X);else if(Ut<bt&&0>l(Ht,lt))L[pt]=Ht,L[Ut]=lt,pt=Ut;else break t}}return I}function l(L,I){var lt=L.sortIndex-I.sortIndex;return lt!==0?lt:L.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,x=null,g=3,E=!1,b=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var I=i(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=L)s(p),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(p)}}function G(L){if(w=!1,N(L),!b)if(i(m)!==null)b=!0,F||(F=!0,j());else{var I=i(p);I!==null&&Q(G,I.startTime-L)}}var F=!1,z=-1,T=5,U=-1;function ut(){return M?!0:!(r.unstable_now()-U<T)}function H(){if(M=!1,F){var L=r.unstable_now();U=L;var I=!0;try{t:{b=!1,w&&(w=!1,D(z),z=-1),E=!0;var lt=g;try{e:{for(N(L),x=i(m);x!==null&&!(x.expirationTime>L&&ut());){var pt=x.callback;if(typeof pt=="function"){x.callback=null,g=x.priorityLevel;var bt=pt(x.expirationTime<=L);if(L=r.unstable_now(),typeof bt=="function"){x.callback=bt,N(L),I=!0;break e}x===i(m)&&s(m),N(L)}else s(m);x=i(m)}if(x!==null)I=!0;else{var P=i(p);P!==null&&Q(G,P.startTime-L),I=!1}}break t}finally{x=null,g=lt,E=!1}I=void 0}}finally{I?j():F=!1}}}var j;if(typeof O=="function")j=function(){O(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,rt=J.port2;J.port1.onmessage=H,j=function(){rt.postMessage(null)}}else j=function(){S(H,0)};function Q(L,I){z=S(function(){L(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var lt=g;g=I;try{return L()}finally{g=lt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var lt=g;g=L;try{return I()}finally{g=lt}},r.unstable_scheduleCallback=function(L,I,lt){var pt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?pt+lt:pt):lt=pt,L){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=lt+bt,L={id:v++,callback:I,priorityLevel:L,startTime:lt,expirationTime:bt,sortIndex:-1},lt>pt?(L.sortIndex=lt,t(p,L),i(m)===null&&L===i(p)&&(w?(D(z),z=-1):w=!0,Q(G,lt-pt))):(L.sortIndex=bt,t(m,L),b||E||(b=!0,F||(F=!0,j()))),L},r.unstable_shouldYield=ut,r.unstable_wrapCallback=function(L){var I=g;return function(){var lt=g;g=I;try{return L.apply(this,arguments)}finally{g=lt}}}})(bh)),bh}var a_;function xS(){return a_||(a_=1,Eh.exports=vS()),Eh.exports}var Th={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function yS(){if(s_)return le;s_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(P,X,xt){this.props=P,this.context=X,this.refs=M,this.updater=xt||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,X){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,X,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=S.prototype;function O(P,X,xt){this.props=P,this.context=X,this.refs=M,this.updater=xt||b}var N=O.prototype=new D;N.constructor=O,w(N,S.prototype),N.isPureReactComponent=!0;var G=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,X,xt){var Ut=xt.ref;return{$$typeof:r,type:P,key:X,ref:Ut!==void 0?Ut:null,props:xt}}function ut(P,X){return U(P.type,X,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function j(P){var X={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xt){return X[xt]})}var J=/\/+/g;function rt(P,X){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):X.toString(36)}function Q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function(X){P.status==="pending"&&(P.status="fulfilled",P.value=X)},function(X){P.status==="pending"&&(P.status="rejected",P.reason=X)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,X,xt,Ut,Ht){var at=typeof P;(at==="undefined"||at==="boolean")&&(P=null);var St=!1;if(P===null)St=!0;else switch(at){case"bigint":case"string":case"number":St=!0;break;case"object":switch(P.$$typeof){case r:case t:St=!0;break;case v:return St=P._init,L(St(P._payload),X,xt,Ut,Ht)}}if(St)return Ht=Ht(P),St=Ut===""?"."+rt(P,0):Ut,G(Ht)?(xt="",St!=null&&(xt=St.replace(J,"$&/")+"/"),L(Ht,X,xt,"",function(Qt){return Qt})):Ht!=null&&(H(Ht)&&(Ht=ut(Ht,xt+(Ht.key==null||P&&P.key===Ht.key?"":(""+Ht.key).replace(J,"$&/")+"/")+St)),X.push(Ht)),1;St=0;var At=Ut===""?".":Ut+":";if(G(P))for(var kt=0;kt<P.length;kt++)Ut=P[kt],at=At+rt(Ut,kt),St+=L(Ut,X,xt,at,Ht);else if(kt=E(P),typeof kt=="function")for(P=kt.call(P),kt=0;!(Ut=P.next()).done;)Ut=Ut.value,at=At+rt(Ut,kt++),St+=L(Ut,X,xt,at,Ht);else if(at==="object"){if(typeof P.then=="function")return L(Q(P),X,xt,Ut,Ht);throw X=String(P),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return St}function I(P,X,xt){if(P==null)return P;var Ut=[],Ht=0;return L(P,Ut,"","",function(at){return X.call(xt,at,Ht++)}),Ut}function lt(P){if(P._status===-1){var X=P._result;X=X(),X.then(function(xt){(P._status===0||P._status===-1)&&(P._status=1,P._result=xt)},function(xt){(P._status===0||P._status===-1)&&(P._status=2,P._result=xt)}),P._status===-1&&(P._status=0,P._result=X)}if(P._status===1)return P._result.default;throw P._result}var pt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},bt={map:I,forEach:function(P,X,xt){I(P,function(){X.apply(this,arguments)},xt)},count:function(P){var X=0;return I(P,function(){X++}),X},toArray:function(P){return I(P,function(X){return X})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return le.Activity=x,le.Children=bt,le.Component=S,le.Fragment=i,le.Profiler=l,le.PureComponent=O,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,le.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},le.cache=function(P){return function(){return P.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(P,X,xt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ut=w({},P.props),Ht=P.key;if(X!=null)for(at in X.key!==void 0&&(Ht=""+X.key),X)!T.call(X,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&X.ref===void 0||(Ut[at]=X[at]);var at=arguments.length-2;if(at===1)Ut.children=xt;else if(1<at){for(var St=Array(at),At=0;At<at;At++)St[At]=arguments[At+2];Ut.children=St}return U(P.type,Ht,Ut)},le.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},le.createElement=function(P,X,xt){var Ut,Ht={},at=null;if(X!=null)for(Ut in X.key!==void 0&&(at=""+X.key),X)T.call(X,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(Ht[Ut]=X[Ut]);var St=arguments.length-2;if(St===1)Ht.children=xt;else if(1<St){for(var At=Array(St),kt=0;kt<St;kt++)At[kt]=arguments[kt+2];Ht.children=At}if(P&&P.defaultProps)for(Ut in St=P.defaultProps,St)Ht[Ut]===void 0&&(Ht[Ut]=St[Ut]);return U(P,at,Ht)},le.createRef=function(){return{current:null}},le.forwardRef=function(P){return{$$typeof:d,render:P}},le.isValidElement=H,le.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:lt}},le.memo=function(P,X){return{$$typeof:p,type:P,compare:X===void 0?null:X}},le.startTransition=function(P){var X=z.T,xt={};z.T=xt;try{var Ut=P(),Ht=z.S;Ht!==null&&Ht(xt,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(F,pt)}catch(at){pt(at)}finally{X!==null&&xt.types!==null&&(X.types=xt.types),z.T=X}},le.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},le.use=function(P){return z.H.use(P)},le.useActionState=function(P,X,xt){return z.H.useActionState(P,X,xt)},le.useCallback=function(P,X){return z.H.useCallback(P,X)},le.useContext=function(P){return z.H.useContext(P)},le.useDebugValue=function(){},le.useDeferredValue=function(P,X){return z.H.useDeferredValue(P,X)},le.useEffect=function(P,X){return z.H.useEffect(P,X)},le.useEffectEvent=function(P){return z.H.useEffectEvent(P)},le.useId=function(){return z.H.useId()},le.useImperativeHandle=function(P,X,xt){return z.H.useImperativeHandle(P,X,xt)},le.useInsertionEffect=function(P,X){return z.H.useInsertionEffect(P,X)},le.useLayoutEffect=function(P,X){return z.H.useLayoutEffect(P,X)},le.useMemo=function(P,X){return z.H.useMemo(P,X)},le.useOptimistic=function(P,X){return z.H.useOptimistic(P,X)},le.useReducer=function(P,X,xt){return z.H.useReducer(P,X,xt)},le.useRef=function(P){return z.H.useRef(P)},le.useState=function(P){return z.H.useState(P)},le.useSyncExternalStore=function(P,X,xt){return z.H.useSyncExternalStore(P,X,xt)},le.useTransition=function(){return z.H.useTransition()},le.version="19.2.4",le}var r_;function ap(){return r_||(r_=1,Th.exports=yS()),Th.exports}var Ah={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function SS(){if(o_)return Nn;o_=1;var r=ap();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Nn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var l_;function MS(){if(l_)return Ah.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ah.exports=SS(),Ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function ES(){if(c_)return Yo;c_=1;var r=xS(),t=ap(),i=MS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case O:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:rt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return rt(e(n))}catch{}}return null}var Q=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},pt=[],bt=-1;function P(e){return{current:e}}function X(e){0>bt||(e.current=pt[bt],pt[bt]=null,bt--)}function xt(e,n){bt++,pt[bt]=e.current,e.current=n}var Ut=P(null),Ht=P(null),at=P(null),St=P(null);function At(e,n){switch(xt(at,n),xt(Ht,e),xt(Ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?b0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=b0(n),e=T0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(Ut),xt(Ut,e)}function kt(){X(Ut),X(Ht),X(at)}function Qt(e){e.memoizedState!==null&&xt(St,e);var n=Ut.current,a=T0(n,e.type);n!==a&&(xt(Ht,e),xt(Ut,a))}function $t(e){Ht.current===e&&(X(Ut),X(Ht)),St.current===e&&(X(St),Go._currentValue=lt)}var Qe,ge;function pe(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+ge}var be=!1;function se(e,n){if(!e||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ft){var ot=ft}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ft){ot=ft}e.call(Mt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var V=_.split(`
`),it=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===it.length)for(o=V.length-1,u=it.length-1;1<=o&&0<=u&&V[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==it[u]){var mt=`
`+V[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{be=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function je(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return pe("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=je(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qe=Object.prototype.hasOwnProperty,ye=r.unstable_scheduleCallback,Re=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,A=r.unstable_requestPaint,y=r.unstable_now,B=r.unstable_getCurrentPriorityLevel,tt=r.unstable_ImmediatePriority,ht=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,Ct=r.unstable_LowPriority,_t=r.unstable_IdlePriority,It=r.log,Ot=r.unstable_setDisableYieldValue,yt=null,gt=null;function Rt(e){if(typeof It=="function"&&Ot(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(yt,e)}catch{}}var Nt=Math.clz32?Math.clz32:Y,Pt=Math.log,ee=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(Pt(e)/ee|0)|0}var Dt=256,wt=262144,Bt=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Tt(o):(_&=R,_!==0?u=Tt(_):a||(a=R&~e,a!==0&&(u=Tt(a))))):(R=o&~f,R!==0?u=Tt(R):_!==0?u=Tt(_):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ti(e,n,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,it=e.hiddenUpdates;for(a=_&~a;0<a;){var mt=31-Nt(a),Mt=1<<mt;R[mt]=0,V[mt]=-1;var ot=it[mt];if(ot!==null)for(it[mt]=null,mt=0;mt<ot.length;mt++){var ft=ot[mt];ft!==null&&(ft.lane&=-536870913)}a&=~Mt}o!==0&&eo(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function eo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Nt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ks(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Nt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function hl(e,n){var a=n&-n;return a=(a&42)!==0?1:Xs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Xs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:j0(e.type))}function Ys(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Ai=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ai,gn="__reactProps$"+Ai,Qi="__reactContainer$"+Ai,Aa="__reactEvents$"+Ai,dl="__reactListeners$"+Ai,pl="__reactHandles$"+Ai,ml="__reactResources$"+Ai,us="__reactMarker$"+Ai;function no(e){delete e[ln],delete e[gn],delete e[Aa],delete e[dl],delete e[pl]}function Ra(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=N0(e);e!==null;){if(a=e[ln])return a;e=N0(e)}return n}e=a,a=e.parentNode}return null}function Ca(e){if(e=e[ln]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function fs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function C(e){var n=e[ml];return n||(n=e[ml]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[us]=!0}var ct=new Set,st={};function et(e,n){Lt(e,n),Lt(e+"Capture",n)}function Lt(e,n){for(st[e]=n,e=0;e<n.length;e++)ct.add(n[e])}var Vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zt={},jt={};function Kt(e){return qe.call(jt,e)?!0:qe.call(zt,e)?!1:Vt.test(e)?jt[e]=!0:(zt[e]=!0,!1)}function ie(e,n,a){if(Kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ue(e){if(!e._valueTracker){var n=Je(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function re(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fn(e,n,a,o,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Ri(e,_,fe(n)):a!=null?Ri(e,_,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+fe(R):e.removeAttribute("name")}function $n(e,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ue(e);return}a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ue(e)}function Ri(e,n,a){n==="number"&&qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ti(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ue(e)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||un.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ji(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ci(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ci(e,f,n[f])}function qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var _u=null;function vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Zs=null;function Ep(e){var n=Ca(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[gn]||null;if(!u)throw Error(s(90));Fn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&_n(o)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ti(e,!!a.multiple,n,!1)}}}var xu=!1;function bp(e,n,a){if(xu)return e(n,a);xu=!0;try{var o=e(n);return o}finally{if(xu=!1,(js!==null||Zs!==null)&&(ic(),js&&(n=js,e=Zs,Zs=js=null,Ep(n),e)))for(n=0;n<e.length;n++)Ep(e[n])}}function io(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(ta)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){yu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{yu=!1}var wa=null,Su=null,_l=null;function Tp(){if(_l)return _l;var e,n=Su,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return _l=u.slice(e,1<o?1-o:void 0)}function vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Ap(){return!1}function Xn(e){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?xl:Ap,this.isPropagationStopped=Ap,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Xn(hs),so=x({},hs,{view:0,detail:0}),px=Xn(so),Mu,Eu,ro,Sl=x({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(Mu=e.screenX-ro.screenX,Eu=e.screenY-ro.screenY):Eu=Mu=0,ro=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),Rp=Xn(Sl),mx=x({},Sl,{dataTransfer:0}),gx=Xn(mx),_x=x({},so,{relatedTarget:0}),bu=Xn(_x),vx=x({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=Xn(vx),yx=x({},hs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sx=Xn(yx),Mx=x({},hs,{data:0}),Cp=Xn(Mx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ax(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tx[e])?!!n[e]:!1}function Tu(){return Ax}var Rx=x({},so,{key:function(e){if(e.key){var n=Ex[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cx=Xn(Rx),wx=x({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Xn(wx),Dx=x({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Ux=Xn(Dx),Nx=x({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=Xn(Nx),Ox=x({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=Xn(Ox),Ix=x({},hs,{newState:0,oldState:0}),zx=Xn(Ix),Fx=[9,13,27,32],Au=ta&&"CompositionEvent"in window,oo=null;ta&&"documentMode"in document&&(oo=document.documentMode);var Bx=ta&&"TextEvent"in window&&!oo,Dp=ta&&(!Au||oo&&8<oo&&11>=oo),Up=" ",Np=!1;function Lp(e,n){switch(e){case"keyup":return Fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function Hx(e,n){switch(e){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Np=!0,Up);case"textInput":return e=n.data,e===Up&&Np?null:e;default:return null}}function Gx(e,n){if(Ks)return e==="compositionend"||!Au&&Lp(e,n)?(e=Tp(),_l=Su=wa=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Vx[e.type]:n==="textarea"}function Ip(e,n,a,o){js?Zs?Zs.push(o):Zs=[o]:js=o,n=uc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var lo=null,co=null;function kx(e){v0(e,0)}function Ml(e){var n=fs(e);if(_n(n))return e}function zp(e,n){if(e==="change")return n}var Fp=!1;if(ta){var Ru;if(ta){var Cu="oninput"in document;if(!Cu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Cu=typeof Bp.oninput=="function"}Ru=Cu}else Ru=!1;Fp=Ru&&(!document.documentMode||9<document.documentMode)}function Hp(){lo&&(lo.detachEvent("onpropertychange",Gp),co=lo=null)}function Gp(e){if(e.propertyName==="value"&&Ml(co)){var n=[];Ip(n,co,e,vu(e)),bp(kx,n)}}function Xx(e,n,a){e==="focusin"?(Hp(),lo=n,co=a,lo.attachEvent("onpropertychange",Gp)):e==="focusout"&&Hp()}function Wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(co)}function Yx(e,n){if(e==="click")return Ml(n)}function qx(e,n){if(e==="input"||e==="change")return Ml(n)}function jx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:jx;function uo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qe.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function Vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kp(e,n){var a=Vp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vp(a)}}function Xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=qt(e.document)}return n}function wu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zx=ta&&"documentMode"in document&&11>=document.documentMode,Qs=null,Du=null,fo=null,Uu=!1;function Yp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||Qs==null||Qs!==qt(o)||(o=Qs,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=uc(Du,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Qs)))}function ds(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},Nu={},qp={};ta&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ps(e){if(Nu[e])return Nu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Nu[e]=n[a];return e}var jp=ps("animationend"),Zp=ps("animationiteration"),Kp=ps("animationstart"),Kx=ps("transitionrun"),Qx=ps("transitionstart"),Jx=ps("transitioncancel"),Qp=ps("transitionend"),Jp=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function wi(e,n){Jp.set(e,n),et(n,[e])}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],$s=0,Ou=0;function bl(){for(var e=$s,n=Ou=$s=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&$p(a,u,f)}}function Tl(e,n,a,o){di[$s++]=e,di[$s++]=n,di[$s++]=a,di[$s++]=o,Ou|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Pu(e,n,a,o){return Tl(e,n,a,o),Al(e)}function ms(e,n){return Tl(e,null,null,n),Al(e)}function $p(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Nt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Al(e){if(50<Oo)throw Oo=0,Wf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var tr={};function $x(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new $x(e,n,a,o)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Rl(e,n,a,o,u,f){var _=0;if(o=e,typeof e=="function")Iu(e)&&(_=1);else if(typeof e=="string")_=aS(e,a,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=ni(31,a,n,u),e.elementType=U,e.lanes=f,e;case w:return gs(a.children,u,f,n);case M:_=8,u|=24;break;case S:return e=ni(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case G:return e=ni(13,a,n,u),e.elementType=G,e.lanes=f,e;case F:return e=ni(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:_=10;break t;case D:_=9;break t;case N:_=11;break t;case z:_=14;break t;case T:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ni(_,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function gs(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function em(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function Fu(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var nm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},nm.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var er=[],nr=0,Cl=null,ho=0,mi=[],gi=0,Da=null,Fi=1,Bi="";function na(e,n){er[nr++]=ho,er[nr++]=Cl,Cl=e,ho=n}function im(e,n,a){mi[gi++]=Fi,mi[gi++]=Bi,mi[gi++]=Da,Da=e;var o=Fi;e=Bi;var u=32-Nt(o)-1;o&=~(1<<u),a+=1;var f=32-Nt(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Fi=1<<32-Nt(n)+u|a<<u|o,Bi=f+e}else Fi=1<<f|a<<u|o,Bi=e}function Bu(e){e.return!==null&&(na(e,1),im(e,1,0))}function Hu(e){for(;e===Cl;)Cl=er[--nr],er[nr]=null,ho=er[--nr],er[nr]=null;for(;e===Da;)Da=mi[--gi],mi[gi]=null,Bi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function am(e,n){mi[gi++]=Fi,mi[gi++]=Bi,mi[gi++]=Da,Fi=n.id,Bi=n.overflow,Da=e}var Tn=null,Ze=null,Te=!1,Ua=null,_i=!1,Gu=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(pi(n,e)),Gu}function sm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[gn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)ve(Io[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),$n(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||M0(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Na(e,!0)}function rm(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Tn=Tn.return}}function ir(e){if(e!==Tn)return!1;if(!Te)return rm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Na(e),rm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=U0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=U0(e)}else n===27?(n=Ze,Ya(e.type)?(e=fh,fh=null,Ze=e):Ze=n):Ze=Tn?xi(e.stateNode.nextSibling):null;return!0}function _s(){Ze=Tn=null,Te=!1}function Vu(){var e=Ua;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ua=null),e}function po(e){Ua===null?Ua=[e]:Ua.push(e)}var ku=P(null),vs=null,ia=null;function La(e,n,a){xt(ku,n._currentValue),n._currentValue=a}function aa(e){e._currentValue=ku.current,X(ku)}function Xu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Wu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Xu(f.return,a,e),o||(_=null);break t}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Xu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ar(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;ei(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===St.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&Wu(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){vs=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return om(vs,e)}function Dl(e,n){return vs===null&&xs(e),om(e,n)}function om(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(s(308));ia=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ia=ia.next=n;return a}var ty=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ey=r.unstable_scheduleCallback,ny=r.unstable_NormalPriority,fn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new ty,data:new Map,refCount:0}}function mo(e){e.refCount--,e.refCount===0&&ey(ny,function(){e.controller.abort()})}var go=null,qu=0,sr=0,rr=null;function iy(e,n){if(go===null){var a=go=[];qu=0,sr=Qf(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(lm,lm),n}function lm(){if(--qu===0&&go!==null){rr!==null&&(rr.status="fulfilled");var e=go;go=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ay(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var cm=L.S;L.S=function(e,n){Yg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&iy(e,n),cm!==null&&cm(e,n)};var ys=P(null);function ju(){var e=ys.current;return e!==null?e:We.pooledCache}function Ul(e,n){n===null?xt(ys,ys.current):xt(ys,n.pool)}function um(){var e=ju();return e===null?null:{parent:fn._currentValue,pool:e}}var or=Error(s(460)),Zu=Error(s(474)),Nl=Error(s(542)),Ll={then:function(){}};function fm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pm(e),e;default:if(typeof n.status=="string")n.then($i,$i);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pm(e),e}throw Ms=n,or}}function Ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,or):a}}var Ms=null;function dm(){if(Ms===null)throw Error(s(459));var e=Ms;return Ms=null,e}function pm(e){if(e===or||e===Nl)throw Error(s(483))}var lr=null,_o=0;function Ol(e){var n=_o;return _o+=1,lr===null&&(lr=[]),hm(lr,e,n)}function vo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Pl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function mm(e){function n(Z,W){if(e){var nt=Z.deletions;nt===null?(Z.deletions=[W],Z.flags|=16):nt.push(W)}}function a(Z,W){if(!e)return null;for(;W!==null;)n(Z,W),W=W.sibling;return null}function o(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function u(Z,W){return Z=ea(Z,W),Z.index=0,Z.sibling=null,Z}function f(Z,W,nt){return Z.index=nt,e?(nt=Z.alternate,nt!==null?(nt=nt.index,nt<W?(Z.flags|=67108866,W):nt):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function _(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,W,nt,vt){return W===null||W.tag!==6?(W=zu(nt,Z.mode,vt),W.return=Z,W):(W=u(W,nt),W.return=Z,W)}function V(Z,W,nt,vt){var Jt=nt.type;return Jt===w?mt(Z,W,nt.props.children,vt,nt.key):W!==null&&(W.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===T&&Ss(Jt)===W.type)?(W=u(W,nt.props),vo(W,nt),W.return=Z,W):(W=Rl(nt.type,nt.key,nt.props,null,Z.mode,vt),vo(W,nt),W.return=Z,W)}function it(Z,W,nt,vt){return W===null||W.tag!==4||W.stateNode.containerInfo!==nt.containerInfo||W.stateNode.implementation!==nt.implementation?(W=Fu(nt,Z.mode,vt),W.return=Z,W):(W=u(W,nt.children||[]),W.return=Z,W)}function mt(Z,W,nt,vt,Jt){return W===null||W.tag!==7?(W=gs(nt,Z.mode,vt,Jt),W.return=Z,W):(W=u(W,nt),W.return=Z,W)}function Mt(Z,W,nt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zu(""+W,Z.mode,nt),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case E:return nt=Rl(W.type,W.key,W.props,null,Z.mode,nt),vo(nt,W),nt.return=Z,nt;case b:return W=Fu(W,Z.mode,nt),W.return=Z,W;case T:return W=Ss(W),Mt(Z,W,nt)}if(Q(W)||j(W))return W=gs(W,Z.mode,nt,null),W.return=Z,W;if(typeof W.then=="function")return Mt(Z,Ol(W),nt);if(W.$$typeof===O)return Mt(Z,Dl(Z,W),nt);Pl(Z,W)}return null}function ot(Z,W,nt,vt){var Jt=W!==null?W.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Jt!==null?null:R(Z,W,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case E:return nt.key===Jt?V(Z,W,nt,vt):null;case b:return nt.key===Jt?it(Z,W,nt,vt):null;case T:return nt=Ss(nt),ot(Z,W,nt,vt)}if(Q(nt)||j(nt))return Jt!==null?null:mt(Z,W,nt,vt,null);if(typeof nt.then=="function")return ot(Z,W,Ol(nt),vt);if(nt.$$typeof===O)return ot(Z,W,Dl(Z,nt),vt);Pl(Z,nt)}return null}function ft(Z,W,nt,vt,Jt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Z=Z.get(nt)||null,R(W,Z,""+vt,Jt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case E:return Z=Z.get(vt.key===null?nt:vt.key)||null,V(W,Z,vt,Jt);case b:return Z=Z.get(vt.key===null?nt:vt.key)||null,it(W,Z,vt,Jt);case T:return vt=Ss(vt),ft(Z,W,nt,vt,Jt)}if(Q(vt)||j(vt))return Z=Z.get(nt)||null,mt(W,Z,vt,Jt,null);if(typeof vt.then=="function")return ft(Z,W,nt,Ol(vt),Jt);if(vt.$$typeof===O)return ft(Z,W,nt,Dl(W,vt),Jt);Pl(W,vt)}return null}function Wt(Z,W,nt,vt){for(var Jt=null,Ne=null,Zt=W,he=W=0,Me=null;Zt!==null&&he<nt.length;he++){Zt.index>he?(Me=Zt,Zt=null):Me=Zt.sibling;var Le=ot(Z,Zt,nt[he],vt);if(Le===null){Zt===null&&(Zt=Me);break}e&&Zt&&Le.alternate===null&&n(Z,Zt),W=f(Le,W,he),Ne===null?Jt=Le:Ne.sibling=Le,Ne=Le,Zt=Me}if(he===nt.length)return a(Z,Zt),Te&&na(Z,he),Jt;if(Zt===null){for(;he<nt.length;he++)Zt=Mt(Z,nt[he],vt),Zt!==null&&(W=f(Zt,W,he),Ne===null?Jt=Zt:Ne.sibling=Zt,Ne=Zt);return Te&&na(Z,he),Jt}for(Zt=o(Zt);he<nt.length;he++)Me=ft(Zt,Z,he,nt[he],vt),Me!==null&&(e&&Me.alternate!==null&&Zt.delete(Me.key===null?he:Me.key),W=f(Me,W,he),Ne===null?Jt=Me:Ne.sibling=Me,Ne=Me);return e&&Zt.forEach(function(Qa){return n(Z,Qa)}),Te&&na(Z,he),Jt}function te(Z,W,nt,vt){if(nt==null)throw Error(s(151));for(var Jt=null,Ne=null,Zt=W,he=W=0,Me=null,Le=nt.next();Zt!==null&&!Le.done;he++,Le=nt.next()){Zt.index>he?(Me=Zt,Zt=null):Me=Zt.sibling;var Qa=ot(Z,Zt,Le.value,vt);if(Qa===null){Zt===null&&(Zt=Me);break}e&&Zt&&Qa.alternate===null&&n(Z,Zt),W=f(Qa,W,he),Ne===null?Jt=Qa:Ne.sibling=Qa,Ne=Qa,Zt=Me}if(Le.done)return a(Z,Zt),Te&&na(Z,he),Jt;if(Zt===null){for(;!Le.done;he++,Le=nt.next())Le=Mt(Z,Le.value,vt),Le!==null&&(W=f(Le,W,he),Ne===null?Jt=Le:Ne.sibling=Le,Ne=Le);return Te&&na(Z,he),Jt}for(Zt=o(Zt);!Le.done;he++,Le=nt.next())Le=ft(Zt,Z,he,Le.value,vt),Le!==null&&(e&&Le.alternate!==null&&Zt.delete(Le.key===null?he:Le.key),W=f(Le,W,he),Ne===null?Jt=Le:Ne.sibling=Le,Ne=Le);return e&&Zt.forEach(function(mS){return n(Z,mS)}),Te&&na(Z,he),Jt}function ke(Z,W,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===w&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case E:t:{for(var Jt=nt.key;W!==null;){if(W.key===Jt){if(Jt=nt.type,Jt===w){if(W.tag===7){a(Z,W.sibling),vt=u(W,nt.props.children),vt.return=Z,Z=vt;break t}}else if(W.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===T&&Ss(Jt)===W.type){a(Z,W.sibling),vt=u(W,nt.props),vo(vt,nt),vt.return=Z,Z=vt;break t}a(Z,W);break}else n(Z,W);W=W.sibling}nt.type===w?(vt=gs(nt.props.children,Z.mode,vt,nt.key),vt.return=Z,Z=vt):(vt=Rl(nt.type,nt.key,nt.props,null,Z.mode,vt),vo(vt,nt),vt.return=Z,Z=vt)}return _(Z);case b:t:{for(Jt=nt.key;W!==null;){if(W.key===Jt)if(W.tag===4&&W.stateNode.containerInfo===nt.containerInfo&&W.stateNode.implementation===nt.implementation){a(Z,W.sibling),vt=u(W,nt.children||[]),vt.return=Z,Z=vt;break t}else{a(Z,W);break}else n(Z,W);W=W.sibling}vt=Fu(nt,Z.mode,vt),vt.return=Z,Z=vt}return _(Z);case T:return nt=Ss(nt),ke(Z,W,nt,vt)}if(Q(nt))return Wt(Z,W,nt,vt);if(j(nt)){if(Jt=j(nt),typeof Jt!="function")throw Error(s(150));return nt=Jt.call(nt),te(Z,W,nt,vt)}if(typeof nt.then=="function")return ke(Z,W,Ol(nt),vt);if(nt.$$typeof===O)return ke(Z,W,Dl(Z,nt),vt);Pl(Z,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,W!==null&&W.tag===6?(a(Z,W.sibling),vt=u(W,nt),vt.return=Z,Z=vt):(a(Z,W),vt=zu(nt,Z.mode,vt),vt.return=Z,Z=vt),_(Z)):a(Z,W)}return function(Z,W,nt,vt){try{_o=0;var Jt=ke(Z,W,nt,vt);return lr=null,Jt}catch(Zt){if(Zt===or||Zt===Nl)throw Zt;var Ne=ni(29,Zt,null,Z.mode);return Ne.lanes=vt,Ne.return=Z,Ne}finally{}}}var Es=mm(!0),gm=mm(!1),Oa=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Al(e),$p(e,null,a),n}return Tl(e,o,n,a),Al(e)}function xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ks(e,a)}}function Ju(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var $u=!1;function yo(){if($u){var e=rr;if(e!==null)throw e}}function So(e,n,a,o){$u=!1;var u=e.updateQueue;Oa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,it=V.next;V.next=null,_===null?f=it:_.next=it,_=V;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,R=mt.lastBaseUpdate,R!==_&&(R===null?mt.firstBaseUpdate=it:R.next=it,mt.lastBaseUpdate=V))}if(f!==null){var Mt=u.baseState;_=0,mt=it=V=null,R=f;do{var ot=R.lane&-536870913,ft=ot!==R.lane;if(ft?(Se&ot)===ot:(o&ot)===ot){ot!==0&&ot===sr&&($u=!0),mt!==null&&(mt=mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,te=R;ot=n;var ke=a;switch(te.tag){case 1:if(Wt=te.payload,typeof Wt=="function"){Mt=Wt.call(ke,Mt,ot);break t}Mt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=te.payload,ot=typeof Wt=="function"?Wt.call(ke,Mt,ot):Wt,ot==null)break t;Mt=x({},Mt,ot);break t;case 2:Oa=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},mt===null?(it=mt=ft,V=Mt):mt=mt.next=ft,_|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);mt===null&&(V=Mt),u.baseState=V,u.firstBaseUpdate=it,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),Ga|=_,e.lanes=_,e.memoizedState=Mt}}function _m(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function vm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_m(a[e],n)}var cr=P(null),Il=P(0);function xm(e,n){e=da,xt(Il,e),xt(cr,n),da=e|n.baseLanes}function tf(){xt(Il,da),xt(cr,cr.current)}function ef(){da=Il.current,X(cr),X(Il)}var ii=P(null),vi=null;function za(e){var n=e.alternate;xt(sn,sn.current&1),xt(ii,e),vi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(vi=e)}function nf(e){xt(sn,sn.current),xt(ii,e),vi===null&&(vi=e)}function ym(e){e.tag===22?(xt(sn,sn.current),xt(ii,e),vi===null&&(vi=e)):Fa()}function Fa(){xt(sn,sn.current),xt(ii,ii.current)}function ai(e){X(ii),vi===e&&(vi=null),X(sn)}var sn=P(0);function zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ch(a)||uh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,ue=null,Ge=null,hn=null,Fl=!1,ur=!1,bs=!1,Bl=0,Mo=0,fr=null,sy=0;function en(){throw Error(s(321))}function af(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function sf(e,n,a,o,u,f){return sa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?ig:yf,bs=!1,f=a(o,u),bs=!1,ur&&(f=Mm(n,a,o,u)),Sm(e),f}function Sm(e){L.H=To;var n=Ge!==null&&Ge.next!==null;if(sa=0,hn=Ge=ue=null,Fl=!1,Mo=0,fr=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&wl(e)&&(dn=!0))}function Mm(e,n,a,o){ue=e;var u=0;do{if(ur&&(fr=null),Mo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,hn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=ag,f=n(a,o)}while(ur);return f}function ry(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),n}function rf(){var e=Bl!==0;return Bl=0,e}function of(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function lf(e){if(Fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Fl=!1}sa=0,hn=Ge=ue=null,ur=!1,Mo=Bl=0,fr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ue.memoizedState=hn=e:hn=hn.next=e,hn}function rn(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=hn===null?ue.memoizedState:hn.next;if(n!==null)hn=n,Ge=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},hn===null?ue.memoizedState=hn=e:hn=hn.next=e}return hn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=Mo;return Mo+=1,fr===null&&(fr=[]),e=hm(fr,e,n),n=ue,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?ig:yf),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===O)return An(e)}throw Error(s(438,String(e)))}function cf(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ut;return n.index++,a}function ra(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=rn();return uf(n,Ge,e)}function uf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,V=null,it=n,mt=!1;do{var Mt=it.lane&-536870913;if(Mt!==it.lane?(Se&Mt)===Mt:(sa&Mt)===Mt){var ot=it.revertLane;if(ot===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Mt===sr&&(mt=!0);else if((sa&ot)===ot){it=it.next,ot===sr&&(mt=!0);continue}else Mt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(R=V=Mt,_=f):V=V.next=Mt,ue.lanes|=ot,Ga|=ot;Mt=it.action,bs&&a(f,Mt),f=it.hasEagerState?it.eagerState:a(f,Mt)}else ot={lane:Mt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(R=V=ot,_=f):V=V.next=ot,ue.lanes|=Mt,Ga|=Mt;it=it.next}while(it!==null&&it!==n);if(V===null?_=f:V.next=R,!ei(f,e.memoizedState)&&(dn=!0,mt&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ff(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);ei(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Em(e,n,a){var o=ue,u=rn(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ei((Ge||u).memoizedState,a);if(_&&(u.memoizedState=a,dn=!0),u=u.queue,pf(Am.bind(null,o,u,e),[e]),u.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Tm.bind(null,o,u,a,n),null),We===null)throw Error(s(349));f||(sa&127)!==0||bm(o,n,a)}return a}function bm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Hl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Tm(e,n,a,o){n.value=a,n.getSnapshot=o,Rm(n)&&Cm(e)}function Am(e,n,a){return a(function(){Rm(n)&&Cm(e)})}function Rm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function Cm(e){var n=ms(e,2);n!==null&&Zn(n,e,2)}function hf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),bs){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},n}function wm(e,n,a,o){return e.baseState=a,uf(e,Ge,typeof o=="function"?o:ra)}function oy(e,n,a,o,u){if(Wl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Dm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=L.T,_={};L.T=_;try{var R=a(u,o),V=L.S;V!==null&&V(_,R),Um(e,n,R)}catch(it){df(e,n,it)}finally{f!==null&&_.types!==null&&(f.types=_.types),L.T=f}}else try{f=a(u,o),Um(e,n,f)}catch(it){df(e,n,it)}}function Um(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Nm(e,n,o)},function(o){return df(e,n,o)}):Nm(e,n,a)}function Nm(e,n,a){n.status="fulfilled",n.value=a,Lm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dm(e,a)))}function df(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Lm(n),n=n.next;while(n!==o)}e.action=null}function Lm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Om(e,n){return n}function Pm(e,n){if(Te){var a=We.formState;if(a!==null){t:{var o=ue;if(Te){if(Ze){e:{for(var u=Ze,f=_i;u.nodeType!==8;){if(!f){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=xi(u.nextSibling),o=u.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},a.queue=o,a=tg.bind(null,ue,o),o.dispatch=a,o=hf(!1),f=xf.bind(null,ue,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=oy.bind(null,ue,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Im(e){var n=rn();return zm(n,Ge,e)}function zm(e,n,a){if(n=uf(e,n,Om)[0],e=Vl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(_){throw _===or?Nl:_}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,hr(9,{destroy:void 0},ly.bind(null,u,a),null)),[o,f,e]}function ly(e,n){e.action=n}function Fm(e){var n=rn(),a=Ge;if(a!==null)return zm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function hr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Hl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bm(){return rn().memoizedState}function kl(e,n,a,o){var u=Hn();ue.flags|=e,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&af(o,Ge.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(ue.flags|=e,u.memoizedState=hr(1|n,f,a,o))}function Hm(e,n){kl(8390656,8,e,n)}function pf(e,n){Xl(2048,8,e,n)}function cy(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Hl(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Gm(e){var n=rn().memoizedState;return cy({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Vm(e,n){return Xl(4,2,e,n)}function km(e,n){return Xl(4,4,e,n)}function Xm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wm(e,n,a){a=a!=null?a.concat([e]):null,Xl(4,4,Xm.bind(null,n,e),a)}function mf(){}function Ym(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function qm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=e(),bs){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o}function gf(e,n,a){return a===void 0||(sa&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=jg(),ue.lanes|=e,Ga|=e,a)}function jm(e,n,a,o){return ei(a,n)?a:cr.current!==null?(e=gf(e,a,o),ei(e,n)||(dn=!0),e):(sa&42)===0||(sa&1073741824)!==0&&(Se&261930)===0?(dn=!0,e.memoizedState=a):(e=jg(),ue.lanes|=e,Ga|=e,n)}function Zm(e,n,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var _=L.T,R={};L.T=R,xf(e,!1,n,a);try{var V=u(),it=L.S;if(it!==null&&it(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=ay(V,o);bo(e,n,mt,oi(e))}else bo(e,n,o,oi(e))}catch(Mt){bo(e,n,{then:function(){},status:"rejected",reason:Mt},oi())}finally{I.p=f,_!==null&&R.types!==null&&(_.types=R.types),L.T=_}}function uy(){}function _f(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Km(e).queue;Zm(e,u,n,lt,a===null?uy:function(){return Qm(e),a(o)})}function Km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qm(e){var n=Km(e);n.next===null&&(n=e.alternate.memoizedState),bo(e,n.next.queue,{},oi())}function vf(){return An(Go)}function Jm(){return rn().memoizedState}function $m(){return rn().memoizedState}function fy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=Pa(a);var o=Ia(n,e,a);o!==null&&(Zn(o,n,a),xo(o,n,a)),n={cache:Yu()},e.payload=n;return}n=n.return}}function hy(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(e)?eg(n,a):(a=Pu(e,n,a,o),a!==null&&(Zn(a,e,o),ng(a,n,o)))}function tg(e,n,a){var o=oi();bo(e,n,a,o)}function bo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))eg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ei(R,_))return Tl(e,n,u,0),We===null&&bl(),!1}catch{}finally{}if(a=Pu(e,n,u,o),a!==null)return Zn(a,e,o),ng(a,n,o),!0}return!1}function xf(e,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(n)throw Error(s(479))}else n=Pu(e,a,o,2),n!==null&&Zn(n,e,2)}function Wl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function eg(e,n){ur=Fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ng(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ks(e,a)}}var To={readContext:An,use:Gl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};To.useEffectEvent=en;var ig={readContext:An,use:Gl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Hm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,kl(4194308,4,Xm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){kl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(bs){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(bs){Rt(!0);try{a(n)}finally{Rt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=hy.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=hf(e);var n=e.queue,a=tg.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(e,n){var a=Hn();return gf(a,e,n)},useTransition:function(){var e=hf(!1);return e=Zm.bind(null,ue,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Hn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Se&127)!==0||bm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Hm(Am.bind(null,o,f,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},Tm.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=We.identifierPrefix;if(Te){var a=Bi,o=Fi;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:vf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:cf,useCacheRefresh:function(){return Hn().memoizedState=fy.bind(null,ue)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},yf={readContext:An,use:Gl,useCallback:Ym,useContext:An,useEffect:pf,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:Vl,useRef:Bm,useState:function(){return Vl(ra)},useDebugValue:mf,useDeferredValue:function(e,n){var a=rn();return jm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Vl(ra)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:vf,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=rn();return wm(a,Ge,e,n)},useMemoCache:cf,useCacheRefresh:$m};yf.useEffectEvent=Gm;var ag={readContext:An,use:Gl,useCallback:Ym,useContext:An,useEffect:pf,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:ff,useRef:Bm,useState:function(){return ff(ra)},useDebugValue:mf,useDeferredValue:function(e,n){var a=rn();return Ge===null?gf(a,e,n):jm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=ff(ra)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:vf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,n){var a=rn();return Ge!==null?wm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:$m};ag.useEffectEvent=Gm;function Sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(Zn(n,e,o),xo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(Zn(n,e,o),xo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(Zn(n,e,a),xo(n,e,a))}};function sg(e,n,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,f):!0}function rg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Mf.enqueueReplaceState(n,n.state,null)}function Ts(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function og(e){El(e)}function lg(e){console.error(e)}function cg(e){El(e)}function Yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(e,n)},a}function fg(e){return e=Pa(e),e.tag=3,e}function hg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){ug(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){ug(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function dy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?ac():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),jf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),jf(e,o,u)),!1}throw Error(s(435,a.tag))}return jf(e,o,u),ac(),!1}if(Te)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(e=Error(s(422),{cause:o}),po(pi(e,a)))):(o!==Gu&&(n=Error(s(423),{cause:o}),po(pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=pi(o,a),u=Ef(e.stateNode,o,u),Ju(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=pi(f,a),Lo===null?Lo=[f]:Lo.push(f),nn!==4&&(nn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ef(a.stateNode,o,e),Ju(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=fg(u),hg(u,e,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(s(461)),dn=!1;function Rn(e,n,a,o){n.child=e===null?gm(n,null,a,o):Es(n,e.child,a,o)}function dg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return xs(n),o=sf(e,n,a,_,f,u),R=rf(),e!==null&&!dn?(of(e,n,u),oa(e,n,u)):(Te&&R&&Bu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function pg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,mg(e,n,f,o,u)):(e=Rl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Nf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(_,o)&&e.ref===n.ref)return oa(e,n,u)}return n.flags|=1,e=ea(f,o),e.ref=n.ref,e.return=n,n.child=e}function mg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(uo(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,Nf(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,oa(e,n,u)}return Tf(e,n,a,o,u)}function gg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return _g(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(n,f!==null?f.cachePool:null),f!==null?xm(n,f):tf(),ym(n);else return o=n.lanes=536870912,_g(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ul(n,f.cachePool),xm(n,f),Fa(),n.memoizedState=null):(e!==null&&Ul(n,null),tf(),Fa());return Rn(e,n,u,a),n.child}function Ao(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _g(e,n,a,o,u){var f=ju();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ul(n,null),tf(),ym(n),e!==null&&ar(e,n,o,!0),n.childLanes=u,null}function ql(e,n){return n=Zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function vg(e,n,a){return Es(n,e.child,null,a),e=ql(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function py(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=ql(n,o),n.lanes=536870912,Ao(null,e);if(nf(n),(e=Ze)?(e=D0(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=em(e),a.return=n,n.child=a,Tn=n,Ze=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return ql(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(nf(n),u)if(n.flags&256)n.flags&=-257,n=vg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||ar(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(o=We,o!==null&&(_=hl(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ms(e,_),Zn(o,e,_),bf;ac(),n=vg(e,n,a)}else e=f.treeContext,Ze=xi(_.nextSibling),Tn=n,Te=!0,Ua=null,_i=!1,e!==null&&am(n,e),n=ql(n,o),n.flags|=4096;return n}return e=ea(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function jl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Tf(e,n,a,o,u){return xs(n),a=sf(e,n,a,o,void 0,u),o=rf(),e!==null&&!dn?(of(e,n,u),oa(e,n,u)):(Te&&o&&Bu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function xg(e,n,a,o,u,f){return xs(n),n.updateQueue=null,a=Mm(n,o,a,u),Sm(e),o=rf(),e!==null&&!dn?(of(e,n,f),oa(e,n,f)):(Te&&o&&Bu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function yg(e,n,a,o,u){if(xs(n),n.stateNode===null){var f=tr,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ku(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):tr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Sf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Mf.enqueueReplaceState(f,f.state,null),So(n,o,f,u),yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,V=Ts(a,R);f.props=V;var it=f.context,mt=a.contextType;_=tr,typeof mt=="object"&&mt!==null&&(_=An(mt));var Mt=a.getDerivedStateFromProps;mt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||it!==_)&&rg(n,f,o,_),Oa=!1;var ot=n.memoizedState;f.state=ot,So(n,o,f,u),yo(),it=n.memoizedState,R||ot!==it||Oa?(typeof Mt=="function"&&(Sf(n,a,Mt,o),it=n.memoizedState),(V=Oa||sg(n,a,V,o,ot,it,_))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=_,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Qu(e,n),_=n.memoizedProps,mt=Ts(a,_),f.props=mt,Mt=n.pendingProps,ot=f.context,it=a.contextType,V=tr,typeof it=="object"&&it!==null&&(V=An(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Mt||ot!==V)&&rg(n,f,o,V),Oa=!1,ot=n.memoizedState,f.state=ot,So(n,o,f,u),yo();var ft=n.memoizedState;_!==Mt||ot!==ft||Oa||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof R=="function"&&(Sf(n,a,R,o),ft=n.memoizedState),(mt=Oa||sg(n,a,mt,o,ot,ft,V)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ft,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ft,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),f.props=o,f.state=ft,f.context=V,o=mt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,jl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Es(n,e.child,null,u),n.child=Es(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=oa(e,n,u),e}function Sg(e,n,a,o){return _s(),n.flags|=256,Rn(e,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(e){return{baseLanes:e,cachePool:um()}}function Cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Mg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?za(n):Fa(),(e=Ze)?(e=D0(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=em(e),a.return=n,n.child=a,Tn=n,Ze=null)):e=null,e===null)throw Na(n);return uh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=Zl({mode:"hidden",children:R},u),o=gs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(e,_,a),n.memoizedState=Af,Ao(null,o)):(za(n),wf(n,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=Df(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=Zl({mode:"visible",children:o.children},u),R=gs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Es(n,e.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(e,_,a),n.memoizedState=Af,n=Ao(null,o));else if(za(n),uh(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var it=_.dgst;_=it,o=Error(s(419)),o.stack="",o.digest=_,po({value:o,source:null,stack:null}),n=Df(e,n,a)}else if(dn||ar(e,n,a,!1),_=(a&e.childLanes)!==0,dn||_){if(_=We,_!==null&&(o=hl(_,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,ms(e,o),Zn(_,e,o),bf;ch(R)||ac(),n=Df(e,n,a)}else ch(R)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Ze=xi(R.nextSibling),Tn=n,Te=!0,Ua=null,_i=!1,e!==null&&am(n,e),n=wf(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,V=e.child,it=V.sibling,o=ea(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,it!==null?R=ea(it,R):(R=gs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Rf(a):(u=R.cachePool,u!==null?(V=fn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=um(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Cf(e,_,a),n.memoizedState=Af,Ao(e.child,o)):(za(n),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function wf(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function Df(e,n,a){return Es(n,e.child,null,a),e=wf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Eg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Xu(e.return,n,a)}function Uf(e,n,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function bg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=sn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,xt(sn,_),Rn(e,n,o,a),o=Te?ho:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eg(e,a,n);else if(e.tag===19)Eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&zl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Uf(n,!0,a,null,f,o);break;case"together":Uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function my(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),La(n,fn,e.memoizedState.cache),_s();break;case 27:case 5:Qt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Mg(e,n,a):(za(n),e=oa(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return bg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,gg(e,n,a,n.pendingProps);case 24:La(n,fn,e.memoizedState.cache)}return oa(e,n,a)}function Tg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Nf(e,a)&&(n.flags&128)===0)return dn=!1,my(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Te&&(n.flags&1048576)!==0&&im(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ss(n.elementType),n.type=e,typeof e=="function")Iu(e)?(o=Ts(e,o),n.tag=1,n=yg(null,n,e,o,a)):(n.tag=0,n=Tf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=dg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=pg(null,n,e,o,a);break t}}throw n=rt(e)||e,Error(s(306,n,""))}}return n;case 0:return Tf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ts(o,n.pendingProps),yg(e,n,o,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Qu(e,n),So(n,o,null,a);var _=n.memoizedState;if(o=_.cache,La(n,fn,o),o!==f.cache&&Wu(n,[fn],a,!0),yo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Sg(e,n,o,a);break t}else if(o!==u){u=pi(Error(s(424)),n),po(u),n=Sg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=xi(e.firstChild),Tn=n,Te=!0,Ua=null,_i=!0,a=gm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_s(),o===u){n=oa(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return jl(e,n),e===null?(a=I0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=fc(at.current).createElement(a),o[ln]=n,o[gn]=e,Cn(o,a,e),q(o),n.stateNode=o):n.memoizedState=I0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Te&&(o=n.stateNode=L0(n.type,n.pendingProps,at.current),Tn=n,_i=!0,u=Ze,Ya(n.type)?(fh=u,Ze=xi(o.firstChild)):Ze=u),Rn(e,n,n.pendingProps.children,a),jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Ze)&&(o=Wy(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Tn=n,Ze=xi(o.firstChild),_i=!1,u=!0):u=!1),u||Na(n)),Qt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,rh(u,f)?o=null:_!==null&&rh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=sf(e,n,ry,null,null,a),Go._currentValue=u),jl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Ze)&&(a=Yy(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Tn=n,Ze=null,e=!0):e=!1),e||Na(n)),null;case 13:return Mg(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Es(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return dg(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xs(n),u=An(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return pg(e,n,n.type,n.pendingProps,a);case 15:return mg(e,n,n.type,n.pendingProps,a);case 19:return bg(e,n,a);case 31:return py(e,n,a);case 22:return gg(e,n,a,n.pendingProps);case 24:return xs(n),o=An(fn),e===null?(u=ju(),u===null&&(u=We,f=Yu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ku(n),La(n,fn,u)):((e.lanes&a)!==0&&(Qu(e,n),So(n,null,null,a),yo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,fn,o)):(o=f.cache,La(n,fn,o),o!==u.cache&&Wu(n,[fn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(e){e.flags|=4}function Lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Jg())e.flags|=8192;else throw Ms=Ll,Zu}else e.flags&=-16777217}function Ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!G0(n))if(Jg())e.flags|=8192;else throw Ms=Ll,Zu}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,gr|=n)}function Ro(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function gy(e,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(fn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?la(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(la(n),f!==null?(Ke(n),Ag(n,f)):(Ke(n),Lf(n,u,null,o,a))):f?f!==e.memoizedState?(la(n),Ke(n),Ag(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&la(n),Ke(n),Lf(n,u,e,o,a)),null;case 27:if($t(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Ut.current,ir(n)?sm(n):(e=L0(u,o,a),n.stateNode=e,la(n))}return Ke(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Ut.current,ir(n))sm(n);else{var _=fc(at.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[ln]=n,f[gn]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&la(n)}}return Ke(n),Lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||M0(e.nodeValue,a)),e||Na(n,!0)}else e=fc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ir(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),Ke(n),null);case 4:return kt(),e===null&&eh(n.stateNode.containerInfo),Ke(n),null;case 10:return aa(n.type),Ke(n),null;case 19:if(X(sn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ro(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=zl(e),f!==null){for(n.flags|=128,Ro(o,!1),e=f.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)tm(a,e),a=a.sibling;return xt(sn,sn.current&1|2),Te&&na(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&y()>ec&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(e=zl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return Ke(n),null}else 2*y()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=y(),e.sibling=null,a=sn.current,xt(sn,u?a&1|2:a&1),Te&&na(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ai(n),ef(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&X(ys),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(fn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _y(e,n){switch(Hu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return aa(fn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(sn),null;case 4:return kt(),null;case 10:return aa(n.type),null;case 22:case 23:return ai(n),ef(),e!==null&&X(ys),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return aa(fn),null;case 25:return null;default:return null}}function Rg(e,n){switch(Hu(n),n.tag){case 3:aa(fn),kt();break;case 26:case 27:case 5:$t(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:X(sn);break;case 10:aa(n.type);break;case 22:case 23:ai(n),ef(),e!==null&&X(ys);break;case 24:aa(fn)}}function Co(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Be(n,n.return,R)}}function Ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var V=a,it=R;try{it()}catch(mt){Be(u,V,mt)}}}o=o.next}while(o!==f)}}catch(mt){Be(n,n.return,mt)}}function Cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{vm(n,a)}catch(o){Be(e,e.return,o)}}}function wg(e,n,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function wo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Hi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Dg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Of(e,n,a){try{var o=e.stateNode;By(o,e.type,a,n),o[gn]=n}catch(u){Be(e,e.return,u)}}function Ug(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ug(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(If(e,n,a),e=e.sibling;e!==null;)If(e,n,a),e=e.sibling}function Ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function Ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[ln]=e,n[gn]=a}catch(f){Be(e,e.return,f)}}var ca=!1,pn=!1,zf=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function vy(e,n){if(e=e.containerInfo,ah=vc,e=Wp(e),wu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,R=-1,V=-1,it=0,mt=0,Mt=e,ot=null;e:for(;;){for(var ft;Mt!==a||u!==0&&Mt.nodeType!==3||(R=_+u),Mt!==f||o!==0&&Mt.nodeType!==3||(V=_+o),Mt.nodeType===3&&(_+=Mt.nodeValue.length),(ft=Mt.firstChild)!==null;)ot=Mt,Mt=ft;for(;;){if(Mt===e)break e;if(ot===a&&++it===u&&(R=_),ot===f&&++mt===o&&(V=_),(ft=Mt.nextSibling)!==null)break;Mt=ot,ot=Mt.parentNode}Mt=ft}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:e,selectionRange:a},vc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=Ts(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)lh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function Og(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),o&4&&Co(5,a);break;case 1:if(fa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Be(a,a.return,_)}else{var u=Ts(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Be(a,a.return,_)}}o&64&&Cg(a),o&512&&wo(a,a.return);break;case 3:if(fa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vm(e,n)}catch(_){Be(a,a.return,_)}}break;case 27:n===null&&o&4&&Ng(a);case 26:case 5:fa(e,a),n===null&&o&4&&Dg(a),o&512&&wo(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),o&4&&zg(e,a);break;case 13:fa(e,a),o&4&&Fg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ry.bind(null,a),qy(e,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||pn,u=ca;var f=pn;ca=o,(pn=n)&&!f?ha(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),ca=u,pn=f}break;case 30:break;default:fa(e,a)}}function Pg(e){var n=e.alternate;n!==null&&(e.alternate=null,Pg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&no(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Wn=!1;function ua(e,n,a){for(a=a.child;a!==null;)Ig(e,n,a),a=a.sibling}function Ig(e,n,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:pn||Hi(a,n),ua(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Hi(a,n);var o=tn,u=Wn;Ya(a.type)&&(tn=a.stateNode,Wn=!1),ua(e,n,a),Fo(a.stateNode),tn=o,Wn=u;break;case 5:pn||Hi(a,n);case 6:if(o=tn,u=Wn,tn=null,ua(e,n,a),tn=o,Wn=u,tn!==null)if(Wn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:tn!==null&&(Wn?(e=tn,C0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):C0(tn,a.stateNode));break;case 4:o=tn,u=Wn,tn=a.stateNode.containerInfo,Wn=!0,ua(e,n,a),tn=o,Wn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),pn||Ba(4,a,n),ua(e,n,a);break;case 1:pn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&wg(a,n,o)),ua(e,n,a);break;case 21:ua(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ua(e,n,a),pn=o;break;default:ua(e,n,a)}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Be(n,n.return,a)}}}function Fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Be(n,n.return,a)}}function xy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lg),n;default:throw Error(s(435,e.tag))}}function Jl(e,n){var a=xy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Cy.bind(null,e,o);o.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=n,R=_;t:for(;R!==null;){switch(R.tag){case 27:if(Ya(R.type)){tn=R.stateNode,Wn=!1;break t}break;case 5:tn=R.stateNode,Wn=!1;break t;case 3:case 4:tn=R.stateNode.containerInfo,Wn=!0;break t}R=R.return}if(tn===null)throw Error(s(160));Ig(f,_,u),tn=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,e),n=n.sibling}var Di=null;function Bg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),qn(e),o&4&&(Ba(3,e,e.return),Co(3,e),Ba(5,e,e.return));break;case 1:Yn(n,e),qn(e),o&512&&(pn||a===null||Hi(a,a.return)),o&64&&ca&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Di;if(Yn(n,e),qn(e),o&512&&(pn||a===null||Hi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[us]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[ln]=e,q(f),o=f;break t;case"link":var _=B0("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break e}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=B0("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break e}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,q(f),o=f}e.stateNode=o}else H0(u,e.type,e.stateNode);else e.stateNode=F0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?H0(u,e.type,e.stateNode):F0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Of(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),qn(e),o&512&&(pn||a===null||Hi(a,a.return)),a!==null&&o&4&&Of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),qn(e),o&512&&(pn||a===null||Hi(a,a.return)),e.flags&32){u=e.stateNode;try{Bn(u,"")}catch(Wt){Be(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Of(e,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(Yn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Be(e,e.return,Wt)}}break;case 3:if(pc=null,u=Di,Di=hc(n.containerInfo),Yn(n,e),Di=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(Wt){Be(e,e.return,Wt)}zf&&(zf=!1,Hg(e));break;case 4:o=Di,Di=hc(e.stateNode.containerInfo),Yn(n,e),qn(e),Di=o;break;case 12:Yn(n,e),qn(e);break;case 31:Yn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 13:Yn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=y()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,it=ca,mt=pn;if(ca=it||u,pn=mt||V,Yn(n,e),pn=mt,ca=it,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||ca||pn||As(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=V.stateNode;var Mt=V.memoizedProps.style,ot=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){Be(V,V.return,Wt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Wt){Be(V,V.return,Wt)}}}else if(n.tag===18){if(a===null){V=n;try{var ft=V.stateNode;u?w0(ft,!0):w0(V.stateNode,!1)}catch(Wt){Be(V,V.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(e,a))));break;case 19:Yn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ug(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Pf(e);Ql(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Bn(_,""),a.flags&=-33);var R=Pf(e);Ql(e,R,_);break;case 3:case 4:var V=a.stateNode.containerInfo,it=Pf(e);If(e,it,V);break;default:throw Error(s(161))}}catch(mt){Be(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function fa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(e,n.alternate,n),n=n.sibling}function As(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),As(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wg(n,n.return,a),As(n);break;case 27:Fo(n.stateNode);case 26:case 5:Hi(n,n.return),As(n);break;case 22:n.memoizedState===null&&As(n);break;case 30:As(n);break;default:As(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),Co(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Be(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)_m(V[u],R)}catch(it){Be(o,o.return,it)}}a&&_&64&&Cg(f),wo(f,f.return);break;case 27:Ng(f);case 26:case 5:ha(u,f,a),a&&o===null&&_&4&&Dg(f),wo(f,f.return);break;case 12:ha(u,f,a);break;case 31:ha(u,f,a),a&&_&4&&zg(u,f);break;case 13:ha(u,f,a),a&&_&4&&Fg(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),wo(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function Ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mo(a))}function Bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e))}function Ui(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(e,n,a,o),n=n.sibling}function Gg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,o),u&2048&&Co(9,n);break;case 1:Ui(e,n,a,o);break;case 3:Ui(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e)));break;case 12:if(u&2048){Ui(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Be(n,n.return,V)}}else Ui(e,n,a,o);break;case 31:Ui(e,n,a,o);break;case 13:Ui(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,o):Do(e,n):f._visibility&2?Ui(e,n,a,o):(f._visibility|=2,dr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(_,n);break;case 24:Ui(e,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ui(e,n,a,o)}}function dr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,V=o,it=_.flags;switch(_.tag){case 0:case 11:case 15:dr(f,_,R,V,u),Co(8,_);break;case 23:break;case 22:var mt=_.stateNode;_.memoizedState!==null?mt._visibility&2?dr(f,_,R,V,u):Do(f,_):(mt._visibility|=2,dr(f,_,R,V,u)),u&&it&2048&&Ff(_.alternate,_);break;case 24:dr(f,_,R,V,u),u&&it&2048&&Bf(_.alternate,_);break;default:dr(f,_,R,V,u)}n=n.sibling}}function Do(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Do(a,o),u&2048&&Bf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function pr(e,n,a){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)Vg(e,n,a),e=e.sibling}function Vg(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&Uo&&e.memoizedState!==null&&sS(a,Di,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var o=Di;Di=hc(e.stateNode.containerInfo),pr(e,n,a),Di=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,pr(e,n,a),Uo=o):pr(e,n,a));break;default:pr(e,n,a)}}function kg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Wg(o,e)}kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xg(e),e=e.sibling}function Xg(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,$l(e)):No(e);break;default:No(e)}}function $l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Wg(o,e)}kg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}e=e.sibling}}function Wg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(Pg(o),o===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var yy={getCacheForType:function(e){var n=An(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(fn).controller.signal}},Sy=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,_e=null,Se=0,Fe=0,si=null,Ha=!1,mr=!1,Hf=!1,da=0,nn=0,Ga=0,Rs=0,Gf=0,ri=0,gr=0,Lo=null,jn=null,Vf=!1,tc=0,Yg=0,ec=1/0,nc=null,Va=null,vn=0,ka=null,_r=null,pa=0,kf=0,Xf=null,qg=null,Oo=0,Wf=null;function oi(){return(Pe&2)!==0&&Se!==0?Se&-Se:L.T!==null?Qf():zi()}function jg(){if(ri===0)if((Se&536870912)===0||Te){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Zn(e,n,a){(e===We&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Xa(e,Se,ri,!1)),In(e,a),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(Rs|=a),nn===4&&Xa(e,Se,ri,!1)),Gi(e))}function Zg(e,n,a){if((Pe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=o?by(e,n):qf(e,n,!0),f=o;do{if(u===0){mr&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!My(a)){u=qf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=e;u=Lo;var V=R.current.memoizedState.isDehydrated;if(V&&(vr(R,_).flags|=256),_=qf(R,_,!1),_!==2){if(Hf&&!V){R.errorRecoveryDisabledLanes|=f,Rs|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){vr(e,0),Xa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ri,!Ha);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=tc+300-y(),10<u)){if(Xa(o,n,ri,!Ha),dt(o,0,!0)!==0)break t;pa=n,o.timeoutHandle=A0(Kg.bind(null,o,a,jn,nc,Vf,n,ri,Rs,gr,Ha,f,"Throttled",-0,0),u);break t}Kg(o,a,jn,nc,Vf,n,ri,Rs,gr,Ha,f,null,-0,0)}}break}while(!0);Gi(e)}function Kg(e,n,a,o,u,f,_,R,V,it,mt,Mt,ot,ft){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},Vg(n,f,Mt);var Wt=(f&62914560)===f?tc-y():(f&4194048)===f?Yg-y():0;if(Wt=rS(Mt,Wt),Wt!==null){pa=f,e.cancelPendingCommit=Wt(a0.bind(null,e,n,f,a,o,u,_,R,V,mt,Mt,null,ot,ft)),Xa(e,f,_,!it);return}}a0(e,n,f,a,o,u,_,R,V)}function My(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~Gf,n&=~Rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Nt(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&eo(e,a,n)}function ic(){return(Pe&6)===0?(Po(0),!1):!0}function Yf(){if(_e!==null){if(Fe===0)var e=_e.return;else e=_e,ia=vs=null,lf(e),lr=null,_o=0,e=_e;for(;e!==null;)Rg(e.alternate,e),e=e.return;_e=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pa=0,Yf(),We=e,_e=a=ea(e.current,null),Se=n,Fe=0,si=null,Ha=!1,mr=Gt(e,n),Hf=!1,gr=ri=Gf=Rs=Ga=nn=0,jn=Lo=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Nt(o),f=1<<u;n|=e[u],o&=~f}return da=n,bl(),a}function Qg(e,n){ue=null,L.H=To,n===or||n===Nl?(n=dm(),Fe=3):n===Zu?(n=dm(),Fe=4):Fe=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,_e===null&&(nn=1,Yl(e,pi(n,e.current)))}function Jg(){var e=ii.current;return e===null?!0:(Se&4194048)===Se?vi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===vi:!1}function $g(){var e=L.H;return L.H=To,e===null?To:e}function t0(){var e=L.A;return L.A=yy,e}function ac(){nn=4,Ha||(Se&4194048)!==Se&&ii.current!==null||(mr=!0),(Ga&134217727)===0&&(Rs&134217727)===0||We===null||Xa(We,Se,ri,!1)}function qf(e,n,a){var o=Pe;Pe|=2;var u=$g(),f=t0();(We!==e||Se!==n)&&(nc=null,vr(e,n)),n=!1;var _=nn;t:do try{if(Fe!==0&&_e!==null){var R=_e,V=si;switch(Fe){case 8:Yf(),_=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var it=Fe;if(Fe=0,si=null,xr(e,R,V,it),a&&mr){_=0;break t}break;default:it=Fe,Fe=0,si=null,xr(e,R,V,it)}}Ey(),_=nn;break}catch(mt){Qg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,ia=vs=null,Pe=o,L.H=u,L.A=f,_e===null&&(We=null,Se=0,bl()),_}function Ey(){for(;_e!==null;)e0(_e)}function by(e,n){var a=Pe;Pe|=2;var o=$g(),u=t0();We!==e||Se!==n?(nc=null,ec=y()+500,vr(e,n)):mr=Gt(e,n);t:do try{if(Fe!==0&&_e!==null){n=_e;var f=si;e:switch(Fe){case 1:Fe=0,si=null,xr(e,n,f,1);break;case 2:case 9:if(fm(f)){Fe=0,si=null,n0(n);break}n=function(){Fe!==2&&Fe!==9||We!==e||(Fe=7),Gi(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:fm(f)?(Fe=0,si=null,n0(n)):(Fe=0,si=null,xr(e,n,f,7));break;case 5:var _=null;switch(_e.tag){case 26:_=_e.memoizedState;case 5:case 27:var R=_e;if(_?G0(_):R.stateNode.complete){Fe=0,si=null;var V=R.sibling;if(V!==null)_e=V;else{var it=R.return;it!==null?(_e=it,sc(it)):_e=null}break e}}Fe=0,si=null,xr(e,n,f,5);break;case 6:Fe=0,si=null,xr(e,n,f,6);break;case 8:Yf(),nn=6;break t;default:throw Error(s(462))}}Ty();break}catch(mt){Qg(e,mt)}while(!0);return ia=vs=null,L.H=o,L.A=u,Pe=a,_e!==null?0:(We=null,Se=0,bl(),nn)}function Ty(){for(;_e!==null&&!Yt();)e0(_e)}function e0(e){var n=Tg(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?sc(e):_e=n}function n0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:lf(n);default:Rg(a,n),n=_e=tm(n,da),n=Tg(a,n,da)}e.memoizedProps=e.pendingProps,n===null?sc(e):_e=n}function xr(e,n,a,o){ia=vs=null,lf(n),lr=null,_o=0;var u=n.return;try{if(dy(e,u,n,a,Se)){nn=1,Yl(e,pi(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;nn=1,Yl(e,pi(a,e.current)),_e=null;return}n.flags&32768?(Te||o===1?e=!0:mr||(Se&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),i0(n,e)):sc(n)}function sc(e){var n=e;do{if((n.flags&32768)!==0){i0(n,Ha);return}e=n.return;var a=gy(n.alternate,n,da);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);nn===0&&(nn=5)}function i0(e,n){do{var a=_y(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);nn=6,_e=null}function a0(e,n,a,o,u,f,_,R,V){e.cancelPendingCommit=null;do rc();while(vn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ou,Ti(e,a,f,_,R,V),e===We&&(_e=We=null,Se=0),_r=n,ka=e,pa=a,kf=f,Xf=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wy($,function(){return c0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=I.p,I.p=2,_=Pe,Pe|=4;try{vy(e,n,a)}finally{Pe=_,I.p=u,L.T=o}}vn=1,s0(),r0(),o0()}}function s0(){if(vn===1){vn=0;var e=ka,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=I.p;I.p=2;var u=Pe;Pe|=4;try{Bg(n,e);var f=sh,_=Wp(e.containerInfo),R=f.focusedElem,V=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Xp(R.ownerDocument.documentElement,R)){if(V!==null&&wu(R)){var it=V.start,mt=V.end;if(mt===void 0&&(mt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(mt,R.value.length);else{var Mt=R.ownerDocument||document,ot=Mt&&Mt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Wt=R.textContent.length,te=Math.min(V.start,Wt),ke=V.end===void 0?te:Math.min(V.end,Wt);!ft.extend&&te>ke&&(_=ke,ke=te,te=_);var Z=kp(R,te),W=kp(R,ke);if(Z&&W&&(ft.rangeCount!==1||ft.anchorNode!==Z.node||ft.anchorOffset!==Z.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var nt=Mt.createRange();nt.setStart(Z.node,Z.offset),ft.removeAllRanges(),te>ke?(ft.addRange(nt),ft.extend(W.node,W.offset)):(nt.setEnd(W.node,W.offset),ft.addRange(nt))}}}}for(Mt=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&Mt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Mt.length;R++){var vt=Mt[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}vc=!!ah,sh=ah=null}finally{Pe=u,I.p=o,L.T=a}}e.current=n,vn=2}}function r0(){if(vn===2){vn=0;var e=ka,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=I.p;I.p=2;var u=Pe;Pe|=4;try{Og(e,n.alternate,n)}finally{Pe=u,I.p=o,L.T=a}}vn=3}}function o0(){if(vn===4||vn===3){vn=0,A();var e=ka,n=_r,a=pa,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,_r=ka=null,l0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),Ws(a),n=n.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=I.p,I.p=2,L.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{L.T=n,I.p=u}}(pa&3)!==0&&rc(),Gi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Wf?Oo++:(Oo=0,Wf=e):Oo=0,Po(0)}}function l0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,mo(n)))}function rc(){return s0(),r0(),o0(),c0()}function c0(){if(vn!==5)return!1;var e=ka,n=kf;kf=0;var a=Ws(pa),o=L.T,u=I.p;try{I.p=32>a?32:a,L.T=null,a=Xf,Xf=null;var f=ka,_=pa;if(vn=0,_r=ka=null,pa=0,(Pe&6)!==0)throw Error(s(331));var R=Pe;if(Pe|=4,Xg(f.current),Gg(f,f.current,_,a),Pe=R,Po(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{I.p=u,L.T=o,l0(e,n)}}function u0(e,n,a){n=pi(a,n),n=Ef(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(In(e,2),Gi(e))}function Be(e,n,a){if(e.tag===3)u0(e,e,a);else for(;n!==null;){if(n.tag===3){u0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=pi(a,e),a=fg(2),o=Ia(n,a,2),o!==null&&(hg(a,o,n,e),In(o,2),Gi(o));break}}n=n.return}}function jf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Sy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Hf=!0,u.add(a),e=Ay.bind(null,e,n,a),n.then(e,e))}function Ay(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Se&a)===a&&(nn===4||nn===3&&(Se&62914560)===Se&&300>y()-tc?(Pe&2)===0&&vr(e,0):Gf|=a,gr===Se&&(gr=0)),Gi(e)}function f0(e,n){n===0&&(n=ze()),e=ms(e,n),e!==null&&(In(e,n),Gi(e))}function Ry(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),f0(e,a)}function Cy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),f0(e,a)}function wy(e,n){return ye(e,n)}var oc=null,yr=null,Zf=!1,lc=!1,Kf=!1,Wa=0;function Gi(e){e!==yr&&e.next===null&&(yr===null?oc=yr=e:yr=yr.next=e),lc=!0,Zf||(Zf=!0,Uy())}function Po(e,n){if(!Kf&&lc){Kf=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Nt(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,m0(o,f))}else f=Se,f=dt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Gt(o,f)||(a=!0,m0(o,f));o=o.next}while(a);Kf=!1}}function Dy(){h0()}function h0(){lc=Zf=!1;var e=0;Wa!==0&&Gy()&&(e=Wa);for(var n=y(),a=null,o=oc;o!==null;){var u=o.next,f=d0(o,n);f===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(yr=a)):(a=o,(e!==0||(f&3)!==0)&&(lc=!0)),o=u}vn!==0&&vn!==5||Po(e),Wa!==0&&(Wa=0)}function d0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Nt(f),R=1<<_,V=u[_];V===-1?((R&a)===0||(R&o)!==0)&&(u[_]=ne(R,n)):V<=n&&(e.expiredLanes|=R),f&=~R}if(n=We,a=Se,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Re(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Re(o),Ws(a)){case 2:case 8:a=ht;break;case 32:a=$;break;case 268435456:a=_t;break;default:a=$}return o=p0.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Re(o),e.callbackPriority=2,e.callbackNode=null,2}function p0(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(rc()&&e.callbackNode!==a)return null;var o=Se;return o=dt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Zg(e,o,n),d0(e,y()),e.callbackNode!=null&&e.callbackNode===a?p0.bind(null,e):null)}function m0(e,n){if(rc())return null;Zg(e,n,!0)}function Uy(){ky(function(){(Pe&6)!==0?ye(tt,Dy):h0()})}function Qf(){if(Wa===0){var e=sr;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Wa=e}return Wa}function g0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function _0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ny(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=g0((u[gn]||null).action),_=o.submitter;_&&(n=(n=_[gn]||null)?g0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new yl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var V=_?_0(u,_):new FormData(u);_f(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(R.preventDefault(),V=_?_0(u,_):new FormData(u),_f(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Jf=0;Jf<Lu.length;Jf++){var $f=Lu[Jf],Ly=$f.toLowerCase(),Oy=$f[0].toUpperCase()+$f.slice(1);wi(Ly,"on"+Oy)}wi(jp,"onAnimationEnd"),wi(Zp,"onAnimationIteration"),wi(Kp,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(Kx,"onTransitionRun"),wi(Qx,"onTransitionStart"),wi(Jx,"onTransitionCancel"),wi(Qp,"onTransitionEnd"),Lt("onMouseEnter",["mouseout","mouseover"]),Lt("onMouseLeave",["mouseout","mouseover"]),Lt("onPointerEnter",["pointerout","pointerover"]),Lt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function v0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],V=R.instance,it=R.currentTarget;if(R=R.listener,V!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(mt){El(mt)}u.currentTarget=null,f=V}else for(_=0;_<o.length;_++){if(R=o[_],V=R.instance,it=R.currentTarget,R=R.listener,V!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(mt){El(mt)}u.currentTarget=null,f=V}}}}function ve(e,n){var a=n[Aa];a===void 0&&(a=n[Aa]=new Set);var o=e+"__bubble";a.has(o)||(x0(n,e,2,!1),a.add(o))}function th(e,n,a){var o=0;n&&(o|=4),x0(a,e,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function eh(e){if(!e[cc]){e[cc]=!0,ct.forEach(function(a){a!=="selectionchange"&&(Py.has(a)||th(a,!1,e),th(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cc]||(n[cc]=!0,th("selectionchange",!1,n))}}function x0(e,n,a,o){switch(j0(n)){case 2:var u=cS;break;case 8:u=uS;break;default:u=gh}a=u.bind(null,n,a,e),u=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function nh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Ra(R),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){o=f=_;continue t}R=R.parentNode}}o=o.return}bp(function(){var it=f,mt=vu(a),Mt=[];t:{var ot=Jp.get(e);if(ot!==void 0){var ft=yl,Wt=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":ft=Cx;break;case"focusin":Wt="focus",ft=bu;break;case"focusout":Wt="blur",ft=bu;break;case"beforeblur":case"afterblur":ft=bu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Ux;break;case jp:case Zp:case Kp:ft=xx;break;case Qp:ft=Lx;break;case"scroll":case"scrollend":ft=px;break;case"wheel":ft=Px;break;case"copy":case"cut":case"paste":ft=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=wp;break;case"toggle":case"beforetoggle":ft=zx}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),Z=te?ot!==null?ot+"Capture":null:ot;te=[];for(var W=it,nt;W!==null;){var vt=W;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||Z===null||(vt=io(W,Z),vt!=null&&te.push(zo(W,vt,nt))),ke)break;W=W.return}0<te.length&&(ot=new ft(ot,Wt,null,a,mt),Mt.push({event:ot,listeners:te}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==_u&&(Wt=a.relatedTarget||a.fromElement)&&(Ra(Wt)||Wt[Qi]))break t;if((ft||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Wt=a.relatedTarget||a.toElement,ft=it,Wt=Wt?Ra(Wt):null,Wt!==null&&(ke=c(Wt),te=Wt.tag,Wt!==ke||te!==5&&te!==27&&te!==6)&&(Wt=null)):(ft=null,Wt=it),ft!==Wt)){if(te=Rp,vt="onMouseLeave",Z="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(te=wp,vt="onPointerLeave",Z="onPointerEnter",W="pointer"),ke=ft==null?ot:fs(ft),nt=Wt==null?ot:fs(Wt),ot=new te(vt,W+"leave",ft,a,mt),ot.target=ke,ot.relatedTarget=nt,vt=null,Ra(mt)===it&&(te=new te(Z,W+"enter",Wt,a,mt),te.target=nt,te.relatedTarget=ke,vt=te),ke=vt,ft&&Wt)e:{for(te=Iy,Z=ft,W=Wt,nt=0,vt=Z;vt;vt=te(vt))nt++;vt=0;for(var Jt=W;Jt;Jt=te(Jt))vt++;for(;0<nt-vt;)Z=te(Z),nt--;for(;0<vt-nt;)W=te(W),vt--;for(;nt--;){if(Z===W||W!==null&&Z===W.alternate){te=Z;break e}Z=te(Z),W=te(W)}te=null}else te=null;ft!==null&&y0(Mt,ot,ft,te,!1),Wt!==null&&ke!==null&&y0(Mt,ke,Wt,te,!0)}}t:{if(ot=it?fs(it):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Ne=zp;else if(Pp(ot))if(Fp)Ne=qx;else{Ne=Wx;var Zt=Xx}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&qs(it.elementType)&&(Ne=zp):Ne=Yx;if(Ne&&(Ne=Ne(e,it))){Ip(Mt,Ne,a,mt);break t}Zt&&Zt(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&Ri(ot,"number",ot.value)}switch(Zt=it?fs(it):window,e){case"focusin":(Pp(Zt)||Zt.contentEditable==="true")&&(Qs=Zt,Du=it,fo=null);break;case"focusout":fo=Du=Qs=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Yp(Mt,a,mt);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":Yp(Mt,a,mt)}var he;if(Au)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Ks?Lp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Dp&&a.locale!=="ko"&&(Ks||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ks&&(he=Tp()):(wa=mt,Su="value"in wa?wa.value:wa.textContent,Ks=!0)),Zt=uc(it,Me),0<Zt.length&&(Me=new Cp(Me,e,null,a,mt),Mt.push({event:Me,listeners:Zt}),he?Me.data=he:(he=Op(a),he!==null&&(Me.data=he)))),(he=Bx?Hx(e,a):Gx(e,a))&&(Me=uc(it,"onBeforeInput"),0<Me.length&&(Zt=new Cp("onBeforeInput","beforeinput",null,a,mt),Mt.push({event:Zt,listeners:Me}),Zt.data=he)),Ny(Mt,e,it,a,mt)}v0(Mt,n)})}function zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function uc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=io(e,a),u!=null&&o.unshift(zo(e,u,f)),u=io(e,n),u!=null&&o.push(zo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Iy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y0(e,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,V=R.alternate,it=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||it===null||(V=it,u?(it=io(a,f),it!=null&&_.unshift(zo(a,it,V))):u||(it=io(a,f),it!=null&&_.push(zo(a,it,V)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var zy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function S0(e){return(typeof e=="string"?e:""+e).replace(zy,`
`).replace(Fy,"")}function M0(e,n){return n=S0(n),S0(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":Ji(e,o,f);break;case"data":if(n!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$i);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),ie(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ie(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hx.get(a)||a,ie(e,a,o))}}function ih(e,n,a,o,u,f){switch(a){case"style":Ji(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&Bn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ie(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,_,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var R=f=_=u=null,V=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":_=mt;break;case"checked":V=mt;break;case"defaultChecked":it=mt;break;case"value":f=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,mt,a,null)}}$n(e,f,R,V,it,_,u,!1);return;case"select":ve("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Ve(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!o,n!=null?ti(e,!!o,n,!1):a!=null&&ti(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ve(e,n,_,R,a,null)}cn(e,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,V,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)ve(Io[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,it,o,a,null)}return;default:if(qs(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&ih(e,n,mt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ve(e,n,R,o,a,null))}function By(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,V=null,it=null,mt=null;for(ft in a){var Mt=a[ft];if(a.hasOwnProperty(ft)&&Mt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":V=Mt;default:o.hasOwnProperty(ft)||Ve(e,n,ft,null,o,Mt)}}for(var ot in o){var ft=o[ot];if(Mt=a[ot],o.hasOwnProperty(ot)&&(ft!=null||Mt!=null))switch(ot){case"type":f=ft;break;case"name":u=ft;break;case"checked":it=ft;break;case"defaultChecked":mt=ft;break;case"value":_=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==Mt&&Ve(e,n,ot,ft,o,Mt)}}Fn(e,_,R,V,it,mt,f,u);return;case"select":ft=_=R=ot=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ft=V;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==V&&Ve(e,n,u,f,o,V)}n=R,a=_,o=ft,ot!=null?ti(e,!!a,ot,!1):!!o!=!!a&&(n!=null?ti(e,!!a,n,!0):ti(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,_,u,o,f)}Ie(e,ot,ft);return;case"option":for(var Wt in a)if(ot=a[Wt],a.hasOwnProperty(Wt)&&ot!=null&&!o.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:Ve(e,n,Wt,null,o,ot)}for(V in o)if(ot=o[V],ft=a[V],o.hasOwnProperty(V)&&ot!==ft&&(ot!=null||ft!=null))switch(V){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ve(e,n,V,ot,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)ot=a[te],a.hasOwnProperty(te)&&ot!=null&&!o.hasOwnProperty(te)&&Ve(e,n,te,null,o,ot);for(it in o)if(ot=o[it],ft=a[it],o.hasOwnProperty(it)&&ot!==ft&&(ot!=null||ft!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ve(e,n,it,ot,o,ft)}return;default:if(qs(n)){for(var ke in a)ot=a[ke],a.hasOwnProperty(ke)&&ot!==void 0&&!o.hasOwnProperty(ke)&&ih(e,n,ke,void 0,o,ot);for(mt in o)ot=o[mt],ft=a[mt],!o.hasOwnProperty(mt)||ot===ft||ot===void 0&&ft===void 0||ih(e,n,mt,ot,o,ft);return}}for(var Z in a)ot=a[Z],a.hasOwnProperty(Z)&&ot!=null&&!o.hasOwnProperty(Z)&&Ve(e,n,Z,null,o,ot);for(Mt in o)ot=o[Mt],ft=a[Mt],!o.hasOwnProperty(Mt)||ot===ft||ot==null&&ft==null||Ve(e,n,Mt,ot,o,ft)}function E0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&E0(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],it=V.startTime;if(it>R)break;var mt=V.transferSize,Mt=V.initiatorType;mt&&E0(Mt)&&(V=V.responseEnd,_+=mt*(V<R?1:(R-it)/(V-it)))}if(--o,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ah=null,sh=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function b0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var oh=null;function Gy(){var e=window.event;return e&&e.type==="popstate"?e===oh?!1:(oh=e,!0):(oh=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(e){return R0.resolve(null).then(e).catch(Xy)}:A0;function Xy(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function C0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),br(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[us]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Fo(e.ownerDocument.body);a=u}while(a);br(n)}function w0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function lh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lh(a),no(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[us])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function Yy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function D0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function ch(e){return e.data==="$?"||e.data==="$~"}function uh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var fh=null;function U0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function N0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function L0(e,n,a){switch(n=fc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Fo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);no(e)}var yi=new Map,O0=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=I.d;I.d={f:jy,r:Zy,D:Ky,C:Qy,L:Jy,m:$y,X:eS,S:tS,M:nS};function jy(){var e=ma.f(),n=ic();return e||n}function Zy(e){var n=Ca(e);n!==null&&n.tag===5&&n.type==="form"?Qm(n):ma.r(e)}var Sr=typeof document>"u"?null:document;function P0(e,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=re(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),O0.has(u)||(O0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),q(n),o.head.appendChild(n)))}}function Ky(e){ma.D(e),P0("dns-prefetch",e,null)}function Qy(e,n){ma.C(e,n),P0("preconnect",e,n)}function Jy(e,n,a){ma.L(e,n,a);var o=Sr;if(o&&e&&n){var u='link[rel="preload"][as="'+re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+re(a.imageSizes)+'"]')):u+='[href="'+re(e)+'"]';var f=u;switch(n){case"style":f=Mr(e);break;case"script":f=Er(e)}yi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(f))||n==="script"&&o.querySelector(Ho(f))||(n=o.createElement("link"),Cn(n,"link",e),q(n),o.head.appendChild(n)))}}function $y(e,n){ma.m(e,n);var a=Sr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+re(o)+'"][href="'+re(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(e)}if(!yi.has(f)&&(e=x({rel:"modulepreload",href:e},n),yi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(f)))return}o=a.createElement("link"),Cn(o,"link",e),q(o),a.head.appendChild(o)}}}function tS(e,n,a){ma.S(e,n,a);var o=Sr;if(o&&e){var u=C(o).hoistableStyles,f=Mr(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Bo(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yi.get(f))&&hh(e,a);var V=_=o.createElement("link");q(V),Cn(V,"link",e),V._p=new Promise(function(it,mt){V.onload=it,V.onerror=mt}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function eS(e,n){ma.X(e,n);var a=Sr;if(a&&e){var o=C(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(e=x({src:e,async:!0},n),(n=yi.get(u))&&dh(e,n),f=a.createElement("script"),q(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function nS(e,n){ma.M(e,n);var a=Sr;if(a&&e){var o=C(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=yi.get(u))&&dh(e,n),f=a.createElement("script"),q(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function I0(e,n,a,o){var u=(u=at.current)?hc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=C(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mr(a.href);var f=C(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Bo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),yi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(e,a),f||iS(u,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=C(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Mr(e){return'href="'+re(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function iS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),q(n),e.head.appendChild(n))}function Er(e){return'[src="'+re(e)+'"]'}function Ho(e){return"script[async]"+e}function F0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+re(a.href)+'"]');if(o)return n.instance=o,q(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),q(o),Cn(o,"style",u),dc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Mr(a.href);var f=e.querySelector(Bo(u));if(f)return n.state.loading|=4,n.instance=f,q(f),f;o=z0(a),(u=yi.get(u))&&hh(o,u),f=(e.ownerDocument||e).createElement("link"),q(f);var _=f;return _._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),Cn(f,"link",o),n.state.loading|=4,dc(f,a.precedence,e),n.instance=f;case"script":return f=Er(a.src),(u=e.querySelector(Ho(f)))?(n.instance=u,q(u),u):(o=a,(u=yi.get(f))&&(o=x({},a),dh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,e));return n.instance}function dc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var pc=null;function B0(e,n,a){if(pc===null){var o=new Map,u=pc=new Map;u.set(a,o)}else u=pc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[us]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function H0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function aS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),f=n.querySelector(Bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=mc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,q(f);return}f=n.ownerDocument||n,o=z0(o),(u=yi.get(u))&&hh(o,u),f=f.createElement("link"),q(f);var _=f;_._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),Cn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ph=0;function rS(e,n){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ph===0&&(ph=62500*Hy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ph?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function _c(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,n.forEach(oS,e),gc=null,mc.call(e))}function oS(e,n){if(!(n.state.loading&4)){var a=gc.get(e);if(a)var o=a.get(null);else{a=new Map,gc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Go={$$typeof:O,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function lS(e,n,a,o,u,f,_,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function V0(e,n,a,o,u,f,_,R,V,it,mt,Mt){return e=new lS(e,n,a,_,V,it,mt,Mt,R),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),e.current=f,f.stateNode=e,n=Yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ku(f),e}function k0(e){return e?(e=tr,e):tr}function X0(e,n,a,o,u,f){u=k0(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ia(e,o,n),a!==null&&(Zn(a,e,n),xo(a,e,n))}function W0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function mh(e,n){W0(e,n),(e=e.alternate)&&W0(e,n)}function Y0(e){if(e.tag===13||e.tag===31){var n=ms(e,67108864);n!==null&&Zn(n,e,67108864),mh(e,67108864)}}function q0(e){if(e.tag===13||e.tag===31){var n=oi();n=Xs(n);var a=ms(e,n);a!==null&&Zn(a,e,n),mh(e,n)}}var vc=!0;function cS(e,n,a,o){var u=L.T;L.T=null;var f=I.p;try{I.p=2,gh(e,n,a,o)}finally{I.p=f,L.T=u}}function uS(e,n,a,o){var u=L.T;L.T=null;var f=I.p;try{I.p=8,gh(e,n,a,o)}finally{I.p=f,L.T=u}}function gh(e,n,a,o){if(vc){var u=_h(o);if(u===null)nh(e,n,o,xc,a),Z0(e,o);else if(hS(u,e,n,a,o))o.stopPropagation();else if(Z0(e,o),n&4&&-1<fS.indexOf(e)){for(;u!==null;){var f=Ca(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Tt(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var V=1<<31-Nt(_);R.entanglements[1]|=V,_&=~V}Gi(f),(Pe&6)===0&&(ec=y()+500,Po(0))}}break;case 31:case 13:R=ms(f,2),R!==null&&Zn(R,f,2),ic(),mh(f,2)}if(f=_h(o),f===null&&nh(e,n,o,xc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else nh(e,n,o,null,a)}}function _h(e){return e=vu(e),vh(e)}var xc=null;function vh(e){if(xc=null,e=Ra(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xc=e,null}function j0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(B()){case tt:return 2;case ht:return 8;case $:case Ct:return 32;case _t:return 268435456;default:return 32}default:return 32}}var xh=!1,qa=null,ja=null,Za=null,Vo=new Map,ko=new Map,Ka=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ca(n),n!==null&&Y0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function hS(e,n,a,o,u){switch(n){case"focusin":return qa=Xo(qa,e,n,a,o,u),!0;case"dragenter":return ja=Xo(ja,e,n,a,o,u),!0;case"mouseover":return Za=Xo(Za,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Vo.set(f,Xo(Vo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ko.set(f,Xo(ko.get(f)||null,e,n,a,o,u)),!0}return!1}function K0(e){var n=Ra(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ys(e.priority,function(){q0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ys(e.priority,function(){q0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=_h(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=Ca(a),n!==null&&Y0(n),e.blockedOn=a,!1;n.shift()}return!0}function Q0(e,n,a){yc(e)&&a.delete(n)}function dS(){xh=!1,qa!==null&&yc(qa)&&(qa=null),ja!==null&&yc(ja)&&(ja=null),Za!==null&&yc(Za)&&(Za=null),Vo.forEach(Q0),ko.forEach(Q0)}function Sc(e,n){e.blockedOn===n&&(e.blockedOn=null,xh||(xh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dS)))}var Mc=null;function J0(e){Mc!==e&&(Mc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(vh(o||a)===null)continue;break}var f=Ca(a);f!==null&&(e.splice(n,3),n-=3,_f(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function br(e){function n(V){return Sc(V,e)}qa!==null&&Sc(qa,e),ja!==null&&Sc(ja,e),Za!==null&&Sc(Za,e),Vo.forEach(n),ko.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)K0(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[gn]||null;if(typeof f=="function")_||J0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[gn]||null)R=_.formAction;else if(vh(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),J0(a)}}}function $0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function yh(e){this._internalRoot=e}Ec.prototype.render=yh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();X0(a,o,e,n,null,null)},Ec.prototype.unmount=yh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;X0(e.current,2,null,e,null,null),ic(),n[Qi]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=zi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&K0(e)}};var t_=t.version;if(t_!=="19.2.4")throw Error(s(527,t_,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var pS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{yt=bc.inject(pS),gt=bc}catch{}}return Yo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=og,f=lg,_=cg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=V0(e,1,!1,null,null,a,o,null,u,f,_,$0),e[Qi]=n.current,eh(e),new yh(n)},Yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=og,_=lg,R=cg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=V0(e,1,!0,n,a??null,o,u,V,f,_,R,$0),n.context=k0(null),a=n.current,o=oi(),o=Xs(o),u=Pa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,In(n,a),Gi(n),e[Qi]=n.current,eh(e),new Ec(n)},Yo.version="19.2.4",Yo}var u_;function bS(){if(u_)return Mh.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=ES(),Mh.exports}var TS=bS(),Ae=ap();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sp="183",kr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AS=0,f_=1,RS=2,eu=1,CS=2,il=3,os=0,Jn=1,ui=2,Ma=0,Xr=1,h_=2,d_=3,p_=4,wS=5,Os=100,DS=101,US=102,NS=103,LS=104,OS=200,PS=201,IS=202,zS=203,fd=204,hd=205,FS=206,BS=207,HS=208,GS=209,VS=210,kS=211,XS=212,WS=213,YS=214,dd=0,pd=1,md=2,Yr=3,gd=4,_d=5,vd=6,xd=7,rp=0,qS=1,jS=2,Yi=0,Cv=1,wv=2,Dv=3,Uv=4,Nv=5,Lv=6,Ov=7,Pv=300,Gs=301,qr=302,Rh=303,Ch=304,du=306,yd=1e3,Sa=1001,Sd=1002,Dn=1003,ZS=1004,Tc=1005,Pn=1006,wh=1007,zs=1008,fi=1009,Iv=1010,zv=1011,ol=1012,op=1013,ji=1014,Pi=1015,ba=1016,lp=1017,cp=1018,ll=1020,Fv=35902,Bv=35899,Hv=1021,Gv=1022,Ii=1023,Ta=1026,Fs=1027,up=1028,fp=1029,jr=1030,hp=1031,dp=1033,nu=33776,iu=33777,au=33778,su=33779,Md=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,Rd=37492,Cd=37496,wd=37488,Dd=37489,Ud=37490,Nd=37491,Ld=37808,Od=37809,Pd=37810,Id=37811,zd=37812,Fd=37813,Bd=37814,Hd=37815,Gd=37816,Vd=37817,kd=37818,Xd=37819,Wd=37820,Yd=37821,qd=36492,jd=36494,Zd=36495,Kd=36283,Qd=36284,Jd=36285,$d=36286,KS=3200,Vv=0,QS=1,ss="",Mi="srgb",Zr="srgb-linear",lu="linear",He="srgb",Tr=7680,m_=519,JS=512,$S=513,tM=514,pp=515,eM=516,nM=517,mp=518,iM=519,g_=35044,__="300 es",Wi=2e3,cl=2001;function aM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sM(){const r=cu("canvas");return r.style.display="block",r}const v_={};function x_(...r){const t="THREE."+r.shift();console.log(t,...r)}function kv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ae(...r){r=kv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function we(...r){r=kv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function uu(...r){const t=r.join(" ");t in v_||(v_[t]=!0,ae(...r))}function rM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const oM={[dd]:pd,[md]:vd,[gd]:xd,[Yr]:_d,[pd]:dd,[vd]:md,[xd]:gd,[_d]:Yr};class Vs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,tp=180/Math.PI;function fl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function lM(r,t){return(r%t+t)%t}function Dh(r,t,i){return(1-i)*r+i*t}function qo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cM={DEG2RAD:sl};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ls{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3],g=c[h+0],E=c[h+1],b=c[h+2],w=c[h+3];if(x!==w||m!==g||p!==E||v!==b){let M=m*g+p*E+v*b+x*w;M<0&&(g=-g,E=-E,b=-b,w=-w,M=-M);let S=1-d;if(M<.9995){const D=Math.acos(M),O=Math.sin(D);S=Math.sin(S*D)/O,d=Math.sin(d*D)/O,m=m*S+g*d,p=p*S+E*d,v=v*S+b*d,x=x*S+w*d}else{m=m*S+g*d,p=p*S+E*d,v=v*S+b*d,x=x*S+w*d;const D=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=D,p*=D,v*=D,x*=D}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=c[h],g=c[h+1],E=c[h+2],b=c[h+3];return t[i]=d*b+v*x+m*E-p*g,t[i+1]=m*b+v*g+p*x-d*E,t[i+2]=p*b+v*E+d*g-m*x,t[i+3]=v*b-d*x-m*g-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),x=d(c/2),g=m(s/2),E=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*v*x+p*E*b,this._y=p*E*x-g*v*b,this._z=p*v*b+g*E*x,this._w=p*v*x-g*E*b;break;case"YXZ":this._x=g*v*x+p*E*b,this._y=p*E*x-g*v*b,this._z=p*v*b-g*E*x,this._w=p*v*x+g*E*b;break;case"ZXY":this._x=g*v*x-p*E*b,this._y=p*E*x+g*v*b,this._z=p*v*b+g*E*x,this._w=p*v*x-g*E*b;break;case"ZYX":this._x=g*v*x-p*E*b,this._y=p*E*x+g*v*b,this._z=p*v*b-g*E*x,this._w=p*v*x+g*E*b;break;case"YZX":this._x=g*v*x+p*E*b,this._y=p*E*x+g*v*b,this._z=p*v*b-g*E*x,this._w=p*v*x-g*E*b;break;case"XZY":this._x=g*v*x-p*E*b,this._y=p*E*x-g*v*b,this._z=p*v*b+g*E*x,this._w=p*v*x+g*E*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],x=i[10],g=s+d+x;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>x){const E=2*Math.sqrt(1+s-d-x);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>x){const E=2*Math.sqrt(1+d-s-x);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+x-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*v,this.y=s+m*v+d*p-c*x,this.z=l+m*x+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Uh.copy(this).projectOnVector(t),this.sub(Uh)}reflect(t){return this.sub(Uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new K,y_=new ls;class de{constructor(t,i,s,l,c,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],x=s[7],g=s[2],E=s[5],b=s[8],w=l[0],M=l[3],S=l[6],D=l[1],O=l[4],N=l[7],G=l[2],F=l[5],z=l[8];return c[0]=h*w+d*D+m*G,c[3]=h*M+d*O+m*F,c[6]=h*S+d*N+m*z,c[1]=p*w+v*D+x*G,c[4]=p*M+v*O+x*F,c[7]=p*S+v*N+x*z,c[2]=g*w+E*D+b*G,c[5]=g*M+E*O+b*F,c[8]=g*S+E*N+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],x=v*h-d*p,g=d*m-v*c,E=p*c-h*m,b=i*x+s*g+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(l*p-v*s)*w,t[2]=(d*s-l*h)*w,t[3]=g*w,t[4]=(v*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=E*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Nh.makeScale(t,i)),this}rotate(t){return this.premultiply(Nh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Nh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new de,S_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uM(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Wr(l.r),l.g=Wr(l.g),l.b=Wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return uu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return uu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:s,transfer:lu,toXYZ:S_,fromXYZ:M_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:He,toXYZ:S_,fromXYZ:M_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const De=uM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class fM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=cu("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hM=0;class gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Lh(l[h].image)):c.push(Lh(l[h]))}else c=Lh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Lh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let dM=0;const Oh=new K;class kn extends Vs{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=Sa,l=Sa,c=Pn,h=zs,d=Ii,m=fi,p=kn.DEFAULT_ANISOTROPY,v=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=fl(),this.name="",this.source=new gp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yd:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yd:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Pv;kn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],x=m[8],g=m[1],E=m[5],b=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+w)<.1&&Math.abs(b+M)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(E+1)/2,G=(S+1)/2,F=(v+g)/4,z=(x+w)/4,T=(b+M)/4;return O>N&&O>G?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=F/s,c=z/s):N>G?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=F/l,c=T/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=z/c,l=T/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-b)*(M-b)+(x-w)*(x-w)+(g-v)*(g-v));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(x-w)/D,this.z=(g-v)/D,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pM extends Vs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new kn(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends pM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Xv extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mM extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ye{constructor(t,i,s,l,c,h,d,m,p,v,x,g,E,b,w,M){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,x,g,E,b,w,M)}set(t,i,s,l,c,h,d,m,p,v,x,g,E,b,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=x,S[14]=g,S[3]=E,S[7]=b,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*v,E=h*x,b=d*v,w=d*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=E+b*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=b+E*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*v,E=m*x,b=p*v,w=p*x;i[0]=g+w*d,i[4]=b*d-E,i[8]=h*p,i[1]=h*x,i[5]=h*v,i[9]=-d,i[2]=E*d-b,i[6]=w+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*v,E=m*x,b=p*v,w=p*x;i[0]=g-w*d,i[4]=-h*x,i[8]=b+E*d,i[1]=E+b*d,i[5]=h*v,i[9]=w-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*v,E=h*x,b=d*v,w=d*x;i[0]=m*v,i[4]=b*p-E,i[8]=g*p+w,i[1]=m*x,i[5]=w*p+g,i[9]=E*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,E=h*p,b=d*m,w=d*p;i[0]=m*v,i[4]=w-g*x,i[8]=b*x+E,i[1]=x,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=E*x+b,i[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,E=h*p,b=d*m,w=d*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=g*x+w,i[5]=h*v,i[9]=E*x-b,i[2]=b*x-E,i[6]=d*v,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gM,t,_M)}lookAt(t,i,s){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),Ja.crossVectors(s,li),Ja.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Ja.crossVectors(s,li)),Ja.normalize(),Ac.crossVectors(li,Ja),l[0]=Ja.x,l[4]=Ac.x,l[8]=li.x,l[1]=Ja.y,l[5]=Ac.y,l[9]=li.y,l[2]=Ja.z,l[6]=Ac.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],x=s[5],g=s[9],E=s[13],b=s[2],w=s[6],M=s[10],S=s[14],D=s[3],O=s[7],N=s[11],G=s[15],F=l[0],z=l[4],T=l[8],U=l[12],ut=l[1],H=l[5],j=l[9],J=l[13],rt=l[2],Q=l[6],L=l[10],I=l[14],lt=l[3],pt=l[7],bt=l[11],P=l[15];return c[0]=h*F+d*ut+m*rt+p*lt,c[4]=h*z+d*H+m*Q+p*pt,c[8]=h*T+d*j+m*L+p*bt,c[12]=h*U+d*J+m*I+p*P,c[1]=v*F+x*ut+g*rt+E*lt,c[5]=v*z+x*H+g*Q+E*pt,c[9]=v*T+x*j+g*L+E*bt,c[13]=v*U+x*J+g*I+E*P,c[2]=b*F+w*ut+M*rt+S*lt,c[6]=b*z+w*H+M*Q+S*pt,c[10]=b*T+w*j+M*L+S*bt,c[14]=b*U+w*J+M*I+S*P,c[3]=D*F+O*ut+N*rt+G*lt,c[7]=D*z+O*H+N*Q+G*pt,c[11]=D*T+O*j+N*L+G*bt,c[15]=D*U+O*J+N*I+G*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],x=t[6],g=t[10],E=t[14],b=t[3],w=t[7],M=t[11],S=t[15],D=m*E-p*g,O=d*E-p*x,N=d*g-m*x,G=h*E-p*v,F=h*g-m*v,z=h*x-d*v;return i*(w*D-M*O+S*N)-s*(b*D-M*G+S*F)+l*(b*O-w*G+S*z)-c*(b*N-w*F+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],x=t[9],g=t[10],E=t[11],b=t[12],w=t[13],M=t[14],S=t[15],D=i*d-s*h,O=i*m-l*h,N=i*p-c*h,G=s*m-l*d,F=s*p-c*d,z=l*p-c*m,T=v*w-x*b,U=v*M-g*b,ut=v*S-E*b,H=x*M-g*w,j=x*S-E*w,J=g*S-E*M,rt=D*J-O*j+N*H+G*ut-F*U+z*T;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/rt;return t[0]=(d*J-m*j+p*H)*Q,t[1]=(l*j-s*J-c*H)*Q,t[2]=(w*z-M*F+S*G)*Q,t[3]=(g*F-x*z-E*G)*Q,t[4]=(m*ut-h*J-p*U)*Q,t[5]=(i*J-l*ut+c*U)*Q,t[6]=(M*N-b*z-S*O)*Q,t[7]=(v*z-g*N+E*O)*Q,t[8]=(h*j-d*ut+p*T)*Q,t[9]=(s*ut-i*j-c*T)*Q,t[10]=(b*F-w*N+S*D)*Q,t[11]=(x*N-v*F-E*D)*Q,t[12]=(d*U-h*H-m*T)*Q,t[13]=(i*H-s*U+l*T)*Q,t[14]=(w*O-b*G-M*D)*Q,t[15]=(v*G-x*O+g*D)*Q,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,x=d+d,g=c*p,E=c*v,b=c*x,w=h*v,M=h*x,S=d*x,D=m*p,O=m*v,N=m*x,G=s.x,F=s.y,z=s.z;return l[0]=(1-(w+S))*G,l[1]=(E+N)*G,l[2]=(b-O)*G,l[3]=0,l[4]=(E-N)*F,l[5]=(1-(g+S))*F,l[6]=(M+D)*F,l[7]=0,l[8]=(b+O)*z,l[9]=(M-D)*z,l[10]=(1-(g+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Rr.set(l[0],l[1],l[2]).length();const d=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ni.copy(this);const p=1/h,v=1/d,x=1/m;return Ni.elements[0]*=p,Ni.elements[1]*=p,Ni.elements[2]*=p,Ni.elements[4]*=v,Ni.elements[5]*=v,Ni.elements[6]*=v,Ni.elements[8]*=x,Ni.elements[9]*=x,Ni.elements[10]*=x,i.setFromRotationMatrix(Ni),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=Wi,m=!1){const p=this.elements,v=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),E=(s+l)/(s-l);let b,w;if(m)b=c/(h-c),w=h*c/(h-c);else if(d===Wi)b=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===cl)b=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Wi,m=!1){const p=this.elements,v=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),E=-(s+l)/(s-l);let b,w;if(m)b=1/(h-c),w=h/(h-c);else if(d===Wi)b=-2/(h-c),w=-(h+c)/(h-c);else if(d===cl)b=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new K,Ni=new Ye,gM=new K(0,0,0),_M=new K(1,1,1),Ja=new K,Ac=new K,li=new K,E_=new Ye,b_=new ls;class Zi{constructor(t=0,i=0,s=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],x=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return E_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(E_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return b_.setFromEuler(this),this.setFromQuaternion(b_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";let _p=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vM=0;const T_=new K,Cr=new ls,ga=new Ye,Rc=new K,jo=new K,xM=new K,yM=new ls,A_=new K(1,0,0),R_=new K(0,1,0),C_=new K(0,0,1),w_={type:"added"},SM={type:"removed"},wr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class bn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new K,i=new Zi,s=new ls,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new de}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(A_,t)}rotateY(t){return this.rotateOnAxis(R_,t)}rotateZ(t){return this.rotateOnAxis(C_,t)}translateOnAxis(t,i){return T_.copy(t).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(A_,t)}translateY(t){return this.translateOnAxis(R_,t)}translateZ(t){return this.translateOnAxis(C_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Rc.copy(t):Rc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,Rc,this.up):ga.lookAt(Rc,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(ga),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(w_),wr.child=t,this.dispatchEvent(wr),wr.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(SM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(w_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,xM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,yM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),x=h(t.shapes),g=h(t.skeletons),E=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new K(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bs extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),E=.02,b=.005;p.inputState.pinching&&g>E+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=E-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Bs;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function zh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ee{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=lM(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=zh(h,c,t+1/3),this.g=zh(h,c,t),this.b=zh(h,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=Wv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return De.workingToColorSpace(On.copy(this),t),Math.round(xe(On.r*255,0,255))*65536+Math.round(xe(On.g*255,0,255))*256+Math.round(xe(On.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=v<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Mi){De.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(Cc);const s=Dh($a.h,Cc.h,i),l=Dh($a.s,Cc.s,i),c=Dh($a.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ee;Ee.NAMES=Wv;class EM extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new K,_a=new K,Fh=new K,va=new K,Dr=new K,Ur=new K,D_=new K,Bh=new K,Hh=new K,Gh=new K,Vh=new an,kh=new an,Xh=new an;class bi{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Li.subVectors(t,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Li.subVectors(l,i),_a.subVectors(s,i),Fh.subVectors(t,i);const h=Li.dot(Li),d=Li.dot(_a),m=Li.dot(Fh),p=_a.dot(_a),v=_a.dot(Fh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,E=(p*m-d*v)*g,b=(h*v-d*m)*g;return c.set(1-E-b,b,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(h,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Vh,c.x),h.addScaledVector(kh,c.y),h.addScaledVector(Xh,c.z),h}static isFrontFacing(t,i,s,l){return Li.subVectors(s,i),_a.subVectors(t,i),Li.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Li.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Dr.subVectors(l,s),Ur.subVectors(c,s),Bh.subVectors(t,s);const m=Dr.dot(Bh),p=Ur.dot(Bh);if(m<=0&&p<=0)return i.copy(s);Hh.subVectors(t,l);const v=Dr.dot(Hh),x=Ur.dot(Hh);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*p;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Dr,h);Gh.subVectors(t,c);const E=Dr.dot(Gh),b=Ur.dot(Gh);if(b>=0&&E<=b)return i.copy(c);const w=E*p-m*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Ur,d);const M=v*b-E*x;if(M<=0&&x-v>=0&&E-b>=0)return D_.subVectors(c,l),d=(x-v)/(x-v+(E-b)),i.copy(l).addScaledVector(D_,d);const S=1/(M+w+g);return h=w*S,d=g*S,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class cs{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Oi):Oi.fromBufferAttribute(c,h),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Dc.subVectors(this.max,Zo),Nr.subVectors(t.a,Zo),Lr.subVectors(t.b,Zo),Or.subVectors(t.c,Zo),ts.subVectors(Lr,Nr),es.subVectors(Or,Lr),Cs.subVectors(Nr,Or);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Cs.z,Cs.y,ts.z,0,-ts.x,es.z,0,-es.x,Cs.z,0,-Cs.x,-ts.y,ts.x,0,-es.y,es.x,0,-Cs.y,Cs.x,0];return!Wh(i,Nr,Lr,Or,Dc)||(i=[1,0,0,0,1,0,0,0,1],!Wh(i,Nr,Lr,Or,Dc))?!1:(Uc.crossVectors(ts,es),i=[Uc.x,Uc.y,Uc.z],Wh(i,Nr,Lr,Or,Dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xa=[new K,new K,new K,new K,new K,new K,new K,new K],Oi=new K,wc=new cs,Nr=new K,Lr=new K,Or=new K,ts=new K,es=new K,Cs=new K,Zo=new K,Dc=new K,Uc=new K,ws=new K;function Wh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ws.fromArray(r,c);const d=l.x*Math.abs(ws.x)+l.y*Math.abs(ws.y)+l.z*Math.abs(ws.z),m=t.dot(ws),p=i.dot(ws),v=s.dot(ws);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const mn=new K,Nc=new ce;let bM=0;class Vn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=g_,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(t),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=qo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==g_&&(t.usage=this.usage),t}}class Yv extends Vn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class qv extends Vn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class on extends Vn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const TM=new cs,Ko=new K,Yh=new K;class Qr{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):TM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Yh)),this.expandByPoint(Ko.copy(t.center).sub(Yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let AM=0;const Si=new Ye,qh=new bn,Pr=new K,ci=new cs,Qo=new cs,En=new K;class Un extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(aM(t)?qv:Yv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,i,s){return Si.makeTranslation(t,i,s),this.applyMatrix4(Si),this}scale(t,i,s){return Si.makeScale(t,i,s),this.applyMatrix4(Si),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new on(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ci.min,Qo.min),ci.expandByPoint(En),En.addVectors(ci.max,Qo.max),ci.expandByPoint(En)):(ci.expandByPoint(Qo.min),ci.expandByPoint(Qo.max))}ci.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)En.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)En.fromBufferAttribute(d,p),m&&(Pr.fromBufferAttribute(t,p),En.add(Pr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new K,m[T]=new K;const p=new K,v=new K,x=new K,g=new ce,E=new ce,b=new ce,w=new K,M=new K;function S(T,U,ut){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,U),x.fromBufferAttribute(s,ut),g.fromBufferAttribute(c,T),E.fromBufferAttribute(c,U),b.fromBufferAttribute(c,ut),v.sub(p),x.sub(p),E.sub(g),b.sub(g);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(H),M.copy(x).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),d[T].add(w),d[U].add(w),d[ut].add(w),m[T].add(M),m[U].add(M),m[ut].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,U=D.length;T<U;++T){const ut=D[T],H=ut.start,j=ut.count;for(let J=H,rt=H+j;J<rt;J+=3)S(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const O=new K,N=new K,G=new K,F=new K;function z(T){G.fromBufferAttribute(l,T),F.copy(G);const U=d[T];O.copy(U),O.sub(G.multiplyScalar(G.dot(U))).normalize(),N.crossVectors(F,U);const H=N.dot(m[T])<0?-1:1;h.setXYZW(T,O.x,O.y,O.z,H)}for(let T=0,U=D.length;T<U;++T){const ut=D[T],H=ut.start,j=ut.count;for(let J=H,rt=H+j;J<rt;J+=3)z(t.getX(J+0)),z(t.getX(J+1)),z(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,v=new K,x=new K;if(t)for(let g=0,E=t.count;g<E;g+=3){const b=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,x=d.normalized,g=new p.constructor(m.length*v);let E=0,b=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?E=m[w]*d.data.stride+d.offset:E=m[w]*v;for(let S=0;S<v;S++)g[b++]=p[E++]}return new Vn(g,v,x)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Un,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,x=p.length;v<x;v++){const g=p[v],E=t(g,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,g=p.length;x<g;x++){const E=p[x];v.push(E.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],x=c[p];for(let g=0,E=x.length;g<E;g++)v.push(x[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let RM=0;class Jr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=Xr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==fd&&(s.blendSrc=this.blendSrc),this.blendDst!==hd&&(s.blendDst=this.blendDst),this.blendEquation!==Os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ya=new K,jh=new K,Lc=new K,ns=new K,Zh=new K,Oc=new K,Kh=new K;class pu{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){jh.copy(t).add(i).multiplyScalar(.5),Lc.copy(i).sub(t).normalize(),ns.copy(this.origin).sub(jh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Lc),d=ns.dot(this.direction),m=-ns.dot(Lc),p=ns.lengthSq(),v=Math.abs(1-h*h);let x,g,E,b;if(v>0)if(x=h*m-d,g=h*d-m,b=c*v,x>=0)if(g>=-b)if(g<=b){const w=1/v;x*=w,g*=w,E=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),E=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),E=-x*x+g*(g+2*m)+p;else g<=-b?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),E=-x*x+g*(g+2*m)+p):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),E=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),E=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(jh).addScaledVector(Lc,g),E}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),v>=0?(c=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,c){Zh.subVectors(i,t),Oc.subVectors(s,t),Kh.crossVectors(Zh,Oc);let h=this.direction.dot(Kh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ns.subVectors(this.origin,t);const m=d*this.direction.dot(Oc.crossVectors(ns,Oc));if(m<0)return null;const p=d*this.direction.dot(Zh.cross(ns));if(p<0||m+p>h)return null;const v=-d*ns.dot(Kh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ps extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const U_=new Ye,Ds=new pu,Pc=new Qr,N_=new K,Ic=new K,zc=new K,Fc=new K,Qh=new K,Bc=new K,L_=new K,Hc=new K;class wn extends bn{constructor(t=new Un,i=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],x=c[m];v!==0&&(Qh.fromBufferAttribute(x,t),h?Bc.addScaledVector(Qh,v):Bc.addScaledVector(Qh.sub(i),v))}i.add(Bc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Ds.copy(t.ray).recast(t.near),!(Pc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Pc,N_)===null||Ds.origin.distanceToSquared(N_)>(t.far-t.near)**2))&&(U_.copy(c).invert(),Ds.copy(t.ray).applyMatrix4(U_),!(s.boundingBox!==null&&Ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const M=g[b],S=h[M.materialIndex],D=Math.max(M.start,E.start),O=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,G=O;N<G;N+=3){const F=d.getX(N),z=d.getX(N+1),T=d.getX(N+2);l=Gc(this,S,t,s,p,v,x,F,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(d.count,E.start+E.count);for(let M=b,S=w;M<S;M+=3){const D=d.getX(M),O=d.getX(M+1),N=d.getX(M+2);l=Gc(this,h,t,s,p,v,x,D,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const M=g[b],S=h[M.materialIndex],D=Math.max(M.start,E.start),O=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,G=O;N<G;N+=3){const F=N,z=N+1,T=N+2;l=Gc(this,S,t,s,p,v,x,F,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let M=b,S=w;M<S;M+=3){const D=M,O=M+1,N=M+2;l=Gc(this,h,t,s,p,v,x,D,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function CM(r,t,i,s,l,c,h,d){let m;if(t.side===Jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===os,d),m===null)return null;Hc.copy(d),Hc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Hc);return p<i.near||p>i.far?null:{distance:p,point:Hc.clone(),object:r}}function Gc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Ic),r.getVertexPosition(m,zc),r.getVertexPosition(p,Fc);const v=CM(r,t,i,s,Ic,zc,Fc,L_);if(v){const x=new K;bi.getBarycoord(L_,Ic,zc,Fc,x),l&&(v.uv=bi.getInterpolatedAttribute(l,d,m,p,x,new ce)),c&&(v.uv1=bi.getInterpolatedAttribute(c,d,m,p,x,new ce)),h&&(v.normal=bi.getInterpolatedAttribute(h,d,m,p,x,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new K,materialIndex:0};bi.getNormal(Ic,zc,Fc,g.normal),v.face=g,v.barycoord=x}return v}class jv extends kn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Dn,v=Dn,x,g){super(null,h,d,m,p,v,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O_ extends Vn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ir=new Ye,P_=new Ye,Vc=[],I_=new cs,wM=new Ye,Jo=new wn,$o=new Qr;class z_ extends wn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new O_(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,wM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new cs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ir),I_.copy(t.boundingBox).applyMatrix4(Ir),this.boundingBox.union(I_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ir),$o.copy(t.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union($o)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(s),t.ray.intersectsSphere($o)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ir),P_.multiplyMatrices(s,Ir),Jo.matrixWorld=P_,Jo.raycast(t,Vc);for(let h=0,d=Vc.length;h<d;h++){const m=Vc[h];m.instanceId=c,m.object=this,i.push(m)}Vc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new O_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new jv(new Float32Array(l*this.count),l,this.count,up,Pi));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jh=new K,DM=new K,UM=new de;class as{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Jh.subVectors(s,i).cross(DM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Jh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||UM.getNormalMatrix(t),l=this.coplanarPoint(Jh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Qr,NM=new ce(.5,.5),kc=new K;class vp{constructor(t=new as,i=new as,s=new as,l=new as,c=new as,h=new as){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Wi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],x=c[5],g=c[6],E=c[7],b=c[8],w=c[9],M=c[10],S=c[11],D=c[12],O=c[13],N=c[14],G=c[15];if(l[0].setComponents(p-h,E-v,S-b,G-D).normalize(),l[1].setComponents(p+h,E+v,S+b,G+D).normalize(),l[2].setComponents(p+d,E+x,S+w,G+O).normalize(),l[3].setComponents(p-d,E-x,S-w,G-O).normalize(),s)l[4].setComponents(m,g,M,N).normalize(),l[5].setComponents(p-m,E-g,S-M,G-N).normalize();else if(l[4].setComponents(p-m,E-g,S-M,G-N).normalize(),i===Wi)l[5].setComponents(p+m,E+g,S+M,G+N).normalize();else if(i===cl)l[5].setComponents(m,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){Us.center.set(0,0,0);const i=NM.distanceTo(t.center);return Us.radius=.7071067811865476+i,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(kc.x=l.normal.x>0?t.max.x:t.min.x,kc.y=l.normal.y>0?t.max.y:t.min.y,kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rl extends Jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fu=new K,hu=new K,F_=new Ye,tl=new pu,Xc=new Qr,$h=new K,B_=new K;class LM extends bn{constructor(t=new Un,i=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)fu.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=fu.distanceTo(hu);t.setAttribute("lineDistance",new on(s,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;F_.copy(l).invert(),tl.copy(t.ray).applyMatrix4(F_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const E=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let w=E,M=b-1;w<M;w+=p){const S=v.getX(w),D=v.getX(w+1),O=Wc(this,t,tl,m,S,D,w);O&&i.push(O)}if(this.isLineLoop){const w=v.getX(b-1),M=v.getX(E),S=Wc(this,t,tl,m,w,M,b-1);S&&i.push(S)}}else{const E=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let w=E,M=b-1;w<M;w+=p){const S=Wc(this,t,tl,m,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=Wc(this,t,tl,m,b-1,E,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Wc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(fu.fromBufferAttribute(d,l),hu.fromBufferAttribute(d,c),i.distanceSqToSegment(fu,hu,$h,B_)>s)return;$h.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo($h);if(!(p<t.near||p>t.far))return{distance:p,point:B_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const H_=new K,G_=new K;class ru extends LM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)H_.fromBufferAttribute(i,l),G_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+H_.distanceTo(G_);t.setAttribute("lineDistance",new on(s,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zv extends kn{constructor(t=[],i=Gs,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ul extends kn{constructor(t,i,s=ji,l,c,h,d=Dn,m=Dn,p,v=Ta,x=1){if(v!==Ta&&v!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class OM extends ul{constructor(t,i=ji,s=Gs,l,c,h=Dn,d=Dn,m,p=Ta){const v={width:t,height:t,depth:1},x=[v,v,v,v,v,v];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Kv extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $r extends Un{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],x=[];let g=0,E=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(x,2));function b(w,M,S,D,O,N,G,F,z,T,U){const ut=N/z,H=G/T,j=N/2,J=G/2,rt=F/2,Q=z+1,L=T+1;let I=0,lt=0;const pt=new K;for(let bt=0;bt<L;bt++){const P=bt*H-J;for(let X=0;X<Q;X++){const xt=X*ut-j;pt[w]=xt*D,pt[M]=P*O,pt[S]=rt,p.push(pt.x,pt.y,pt.z),pt[w]=0,pt[M]=0,pt[S]=F>0?1:-1,v.push(pt.x,pt.y,pt.z),x.push(X/z),x.push(1-bt/T),I+=1}}for(let bt=0;bt<T;bt++)for(let P=0;P<z;P++){const X=g+P+Q*bt,xt=g+P+Q*(bt+1),Ut=g+(P+1)+Q*(bt+1),Ht=g+(P+1)+Q*bt;m.push(X,xt,Ht),m.push(xt,Ut,Ht),lt+=6}d.addGroup(E,lt,U),E+=lt,g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class xp extends Un{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],x=[],g=[],E=[];let b=0;const w=[],M=s/2;let S=0;D(),h===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(v),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(E,2));function D(){const N=new K,G=new K;let F=0;const z=(i-t)/s;for(let T=0;T<=c;T++){const U=[],ut=T/c,H=ut*(i-t)+t;for(let j=0;j<=l;j++){const J=j/l,rt=J*m+d,Q=Math.sin(rt),L=Math.cos(rt);G.x=H*Q,G.y=-ut*s+M,G.z=H*L,x.push(G.x,G.y,G.z),N.set(Q,z,L).normalize(),g.push(N.x,N.y,N.z),E.push(J,1-ut),U.push(b++)}w.push(U)}for(let T=0;T<l;T++)for(let U=0;U<c;U++){const ut=w[U][T],H=w[U+1][T],j=w[U+1][T+1],J=w[U][T+1];(t>0||U!==0)&&(v.push(ut,H,J),F+=3),(i>0||U!==c-1)&&(v.push(H,j,J),F+=3)}p.addGroup(S,F,0),S+=F}function O(N){const G=b,F=new ce,z=new K;let T=0;const U=N===!0?t:i,ut=N===!0?1:-1;for(let j=1;j<=l;j++)x.push(0,M*ut,0),g.push(0,ut,0),E.push(.5,.5),b++;const H=b;for(let j=0;j<=l;j++){const rt=j/l*m+d,Q=Math.cos(rt),L=Math.sin(rt);z.x=U*L,z.y=M*ut,z.z=U*Q,x.push(z.x,z.y,z.z),g.push(0,ut,0),F.x=Q*.5+.5,F.y=L*.5*ut+.5,E.push(F.x,F.y),b++}for(let j=0;j<l;j++){const J=G+j,rt=H+j;N===!0?v.push(rt,rt+1,J):v.push(rt+1,rt,J),T+=3}p.addGroup(S,T,N===!0?1:2),S+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Yc=new K,qc=new K,td=new K,jc=new bi;class PM extends Un{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(sl*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],v=["a","b","c"],x=new Array(3),g={},E=[];for(let b=0;b<m;b+=3){h?(p[0]=h.getX(b),p[1]=h.getX(b+1),p[2]=h.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:w,b:M,c:S}=jc;if(w.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),S.fromBufferAttribute(d,p[2]),jc.getNormal(td),x[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,x[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,x[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let D=0;D<3;D++){const O=(D+1)%3,N=x[D],G=x[O],F=jc[v[D]],z=jc[v[O]],T=`${N}_${G}`,U=`${G}_${N}`;U in g&&g[U]?(td.dot(g[U].normal)<=c&&(E.push(F.x,F.y,F.z),E.push(z.x,z.y,z.z)),g[U]=null):T in g||(g[T]={index0:p[D],index1:p[O],normal:td.clone()})}}for(const b in g)if(g[b]){const{index0:w,index1:M}=g[b];Yc.fromBufferAttribute(d,w),qc.fromBufferAttribute(d,M),E.push(Yc.x,Yc.y,Yc.z),E.push(qc.x,qc.y,qc.z)}this.setAttribute("position",new on(E,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Hs extends Un{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,x=t/d,g=i/m,E=[],b=[],w=[],M=[];for(let S=0;S<v;S++){const D=S*g-h;for(let O=0;O<p;O++){const N=O*x-c;b.push(N,-D,0),w.push(0,0,1),M.push(O/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<d;D++){const O=D+p*S,N=D+p*(S+1),G=D+1+p*(S+1),F=D+1+p*S;E.push(O,N,F),E.push(N,G,F)}this.setIndex(E),this.setAttribute("position",new on(b,3)),this.setAttribute("normal",new on(w,3)),this.setAttribute("uv",new on(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class yp extends Un{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],v=[],x=[],g=new K,E=new K,b=new K;for(let w=0;w<=s;w++){const M=h+w/s*d;for(let S=0;S<=l;S++){const D=S/l*c;E.x=(t+i*Math.cos(M))*Math.cos(D),E.y=(t+i*Math.cos(M))*Math.sin(D),E.z=i*Math.sin(M),p.push(E.x,E.y,E.z),g.x=t*Math.cos(D),g.y=t*Math.sin(D),b.subVectors(E,g).normalize(),v.push(b.x,b.y,b.z),x.push(S/l),x.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const S=(l+1)*w+M-1,D=(l+1)*(w-1)+M-1,O=(l+1)*(w-1)+M,N=(l+1)*w+M;m.push(S,D,N),m.push(D,O,N)}this.setIndex(m),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class IM extends Un{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],s=new Set,l=new K,c=new K;if(t.index!==null){const h=t.attributes.position,d=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:d.count,materialIndex:0}]);for(let p=0,v=m.length;p<v;++p){const x=m[p],g=x.start,E=x.count;for(let b=g,w=g+E;b<w;b+=3)for(let M=0;M<3;M++){const S=d.getX(b+M),D=d.getX(b+(M+1)%3);l.fromBufferAttribute(h,S),c.fromBufferAttribute(h,D),V_(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const h=t.attributes.position;for(let d=0,m=h.count/3;d<m;d++)for(let p=0;p<3;p++){const v=3*d+p,x=3*d+(p+1)%3;l.fromBufferAttribute(h,v),c.fromBufferAttribute(h,x),V_(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new on(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function V_(r,t,i){const s=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function zM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Qv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const FM={clone:Kr,merge:Gn};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=zM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class GM extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class VM extends Jr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vv,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=rp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kM extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XM extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jv extends bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ed=new Ye,k_=new K,X_=new K;class WM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vp,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;k_.setFromMatrixPosition(t.matrixWorld),i.position.copy(k_),X_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(X_),i.updateMatrixWorld(),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===cl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zc=new K,Kc=new ls,Vi=new K;class $v extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zc,Kc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Kc,Vi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Zc,Kc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Kc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new K,W_=new ce,Y_=new ce;class Ei extends $v{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,W_,Y_),i.subVectors(Y_,W_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Sp extends $v{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class YM extends WM{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qM extends Jv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new YM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class jM extends Jv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const zr=-90,Fr=1;class ZM extends bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(zr,Fr,t,i);l.layers=this.layers,this.add(l);const c=new Ei(zr,Fr,t,i);c.layers=this.layers,this.add(c);const h=new Ei(zr,Fr,t,i);h.layers=this.layers,this.add(h);const d=new Ei(zr,Fr,t,i);d.layers=this.layers,this.add(d);const m=new Ei(zr,Fr,t,i);m.layers=this.layers,this.add(m);const p=new Ei(zr,Fr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===cl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(x,g,E),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class KM extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const q_=new Ye;class QM{constructor(t,i,s=0,l=1/0){this.ray=new pu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new _p,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):we("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return q_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(q_),this}intersectObject(t,i=!0,s=[]){return ep(t,this,s,i),s.sort(j_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)ep(t[l],this,s,i);return s.sort(j_),s}}function j_(r,t){return r.distance-t.distance}function ep(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)ep(c[h],t,i,!0)}}class Z_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class K_ extends ru{constructor(t=10,i=10,s=4473924,l=8947848){s=new Ee(s),l=new Ee(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let g=0,E=0,b=-d;g<=i;g++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const w=g===c?s:l;w.toArray(p,E),E+=3,w.toArray(p,E),E+=3,w.toArray(p,E),E+=3,w.toArray(p,E),E+=3}const v=new Un;v.setAttribute("position",new on(m,3)),v.setAttribute("color",new on(p,3));const x=new rl({vertexColors:!0,toneMapped:!1});super(v,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class JM extends Vs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Q_(r,t,i,s){const l=$M(s);switch(i){case Hv:return r*t;case up:return r*t/l.components*l.byteLength;case fp:return r*t/l.components*l.byteLength;case jr:return r*t*2/l.components*l.byteLength;case hp:return r*t*2/l.components*l.byteLength;case Gv:return r*t*3/l.components*l.byteLength;case Ii:return r*t*4/l.components*l.byteLength;case dp:return r*t*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case au:case su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:case Td:return Math.max(r,16)*Math.max(t,8)/4;case Md:case bd:return Math.max(r,8)*Math.max(t,8)/2;case Ad:case Rd:case wd:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Cd:case Ud:case Nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case qd:case jd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Jd:case $d:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $M(r){switch(r){case fi:case Iv:return{byteLength:1,components:1};case ol:case zv:case ba:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case ji:case op:case Pi:return{byteLength:4,components:1};case Fv:case Bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function tE(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),d.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const v=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,v);else{x.sort((E,b)=>E.start-b.start);let g=0;for(let E=1;E<x.length;E++){const b=x[g],w=x[E];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,x[g]=w)}x.length=g+1;for(let E=0,b=x.length;E<b;E++){const w=x[E];r.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var eE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ME=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",NE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$E=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ub=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:eE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:aE,alphatest_fragment:sE,alphatest_pars_fragment:rE,aomap_fragment:oE,aomap_pars_fragment:lE,batching_pars_vertex:cE,batching_vertex:uE,begin_vertex:fE,beginnormal_vertex:hE,bsdfs:dE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:vE,clipping_planes_vertex:xE,color_fragment:yE,color_pars_fragment:SE,color_pars_vertex:ME,color_vertex:EE,common:bE,cube_uv_reflection_fragment:TE,defaultnormal_vertex:AE,displacementmap_pars_vertex:RE,displacementmap_vertex:CE,emissivemap_fragment:wE,emissivemap_pars_fragment:DE,colorspace_fragment:UE,colorspace_pars_fragment:NE,envmap_fragment:LE,envmap_common_pars_fragment:OE,envmap_pars_fragment:PE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:qE,envmap_vertex:zE,fog_vertex:FE,fog_pars_vertex:BE,fog_fragment:HE,fog_pars_fragment:GE,gradientmap_pars_fragment:VE,lightmap_pars_fragment:kE,lights_lambert_fragment:XE,lights_lambert_pars_fragment:WE,lights_pars_begin:YE,lights_toon_fragment:jE,lights_toon_pars_fragment:ZE,lights_phong_fragment:KE,lights_phong_pars_fragment:QE,lights_physical_fragment:JE,lights_physical_pars_fragment:$E,lights_fragment_begin:tb,lights_fragment_maps:eb,lights_fragment_end:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:sb,logdepthbuf_vertex:rb,map_fragment:ob,map_pars_fragment:lb,map_particle_fragment:cb,map_particle_pars_fragment:ub,metalnessmap_fragment:fb,metalnessmap_pars_fragment:hb,morphinstance_vertex:db,morphcolor_vertex:pb,morphnormal_vertex:mb,morphtarget_pars_vertex:gb,morphtarget_vertex:_b,normal_fragment_begin:vb,normal_fragment_maps:xb,normal_pars_fragment:yb,normal_pars_vertex:Sb,normal_vertex:Mb,normalmap_pars_fragment:Eb,clearcoat_normal_fragment_begin:bb,clearcoat_normal_fragment_maps:Tb,clearcoat_pars_fragment:Ab,iridescence_pars_fragment:Rb,opaque_fragment:Cb,packing:wb,premultiplied_alpha_fragment:Db,project_vertex:Ub,dithering_fragment:Nb,dithering_pars_fragment:Lb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Pb,shadowmap_pars_fragment:Ib,shadowmap_pars_vertex:zb,shadowmap_vertex:Fb,shadowmask_pars_fragment:Bb,skinbase_vertex:Hb,skinning_pars_vertex:Gb,skinning_vertex:Vb,skinnormal_vertex:kb,specularmap_fragment:Xb,specularmap_pars_fragment:Wb,tonemapping_fragment:Yb,tonemapping_pars_fragment:qb,transmission_fragment:jb,transmission_pars_fragment:Zb,uv_pars_fragment:Kb,uv_pars_vertex:Qb,uv_vertex:Jb,worldpos_vertex:$b,background_vert:t1,background_frag:e1,backgroundCube_vert:n1,backgroundCube_frag:i1,cube_vert:a1,cube_frag:s1,depth_vert:r1,depth_frag:o1,distance_vert:l1,distance_frag:c1,equirect_vert:u1,equirect_frag:f1,linedashed_vert:h1,linedashed_frag:d1,meshbasic_vert:p1,meshbasic_frag:m1,meshlambert_vert:g1,meshlambert_frag:_1,meshmatcap_vert:v1,meshmatcap_frag:x1,meshnormal_vert:y1,meshnormal_frag:S1,meshphong_vert:M1,meshphong_frag:E1,meshphysical_vert:b1,meshphysical_frag:T1,meshtoon_vert:A1,meshtoon_frag:R1,points_vert:C1,points_frag:w1,shadow_vert:D1,shadow_frag:U1,sprite_vert:N1,sprite_frag:L1},Ft={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Xi={basic:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ee(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([Ft.points,Ft.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([Ft.common,Ft.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([Ft.sprite,Ft.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Gn([Ft.common,Ft.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Gn([Ft.lights,Ft.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Xi.physical={uniforms:Gn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Qc={r:0,b:0,g:0},Ns=new Zi,O1=new Ye;function P1(r,t,i,s,l,c){const h=new Ee(0);let d=l===!0?0:1,m,p,v=null,x=0,g=null;function E(D){let O=D.isScene===!0?D.background:null;if(O&&O.isTexture){const N=D.backgroundBlurriness>0;O=t.get(O,N)}return O}function b(D){let O=!1;const N=E(D);N===null?M(h,d):N&&N.isColor&&(M(N,1),O=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(D,O){const N=E(O);N&&(N.isCubeTexture||N.mapping===du)?(p===void 0&&(p=new wn(new $r(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Kr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(G,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ns.copy(O.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(Ns)),p.material.toneMapped=De.getTransfer(N.colorSpace)!==He,(v!==N||x!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=N,x=N.version,g=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new wn(new Hs(2,2),new Ki({name:"BackgroundMaterial",uniforms:Kr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=De.getTransfer(N.colorSpace)!==He,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=N,x=N.version,g=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,O){D.getRGB(Qc,Qv(r)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,O,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,O=1){h.set(D),d=O,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(h,d)},render:b,addToRenderList:w,dispose:S}}function I1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(H,j,J,rt,Q){let L=!1;const I=x(H,rt,J,j);c!==I&&(c=I,p(c.object)),L=E(H,rt,J,Q),L&&b(H,rt,J,Q),Q!==null&&t.update(Q,r.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,N(H,j,J,rt),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function v(H){return r.deleteVertexArray(H)}function x(H,j,J,rt){const Q=rt.wireframe===!0;let L=s[j.id];L===void 0&&(L={},s[j.id]=L);const I=H.isInstancedMesh===!0?H.id:0;let lt=L[I];lt===void 0&&(lt={},L[I]=lt);let pt=lt[J.id];pt===void 0&&(pt={},lt[J.id]=pt);let bt=pt[Q];return bt===void 0&&(bt=g(m()),pt[Q]=bt),bt}function g(H){const j=[],J=[],rt=[];for(let Q=0;Q<i;Q++)j[Q]=0,J[Q]=0,rt[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:rt,object:H,attributes:{},index:null}}function E(H,j,J,rt){const Q=c.attributes,L=j.attributes;let I=0;const lt=J.getAttributes();for(const pt in lt)if(lt[pt].location>=0){const P=Q[pt];let X=L[pt];if(X===void 0&&(pt==="instanceMatrix"&&H.instanceMatrix&&(X=H.instanceMatrix),pt==="instanceColor"&&H.instanceColor&&(X=H.instanceColor)),P===void 0||P.attribute!==X||X&&P.data!==X.data)return!0;I++}return c.attributesNum!==I||c.index!==rt}function b(H,j,J,rt){const Q={},L=j.attributes;let I=0;const lt=J.getAttributes();for(const pt in lt)if(lt[pt].location>=0){let P=L[pt];P===void 0&&(pt==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),pt==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const X={};X.attribute=P,P&&P.data&&(X.data=P.data),Q[pt]=X,I++}c.attributes=Q,c.attributesNum=I,c.index=rt}function w(){const H=c.newAttributes;for(let j=0,J=H.length;j<J;j++)H[j]=0}function M(H){S(H,0)}function S(H,j){const J=c.newAttributes,rt=c.enabledAttributes,Q=c.attributeDivisors;J[H]=1,rt[H]===0&&(r.enableVertexAttribArray(H),rt[H]=1),Q[H]!==j&&(r.vertexAttribDivisor(H,j),Q[H]=j)}function D(){const H=c.newAttributes,j=c.enabledAttributes;for(let J=0,rt=j.length;J<rt;J++)j[J]!==H[J]&&(r.disableVertexAttribArray(J),j[J]=0)}function O(H,j,J,rt,Q,L,I){I===!0?r.vertexAttribIPointer(H,j,J,Q,L):r.vertexAttribPointer(H,j,J,rt,Q,L)}function N(H,j,J,rt){w();const Q=rt.attributes,L=J.getAttributes(),I=j.defaultAttributeValues;for(const lt in L){const pt=L[lt];if(pt.location>=0){let bt=Q[lt];if(bt===void 0&&(lt==="instanceMatrix"&&H.instanceMatrix&&(bt=H.instanceMatrix),lt==="instanceColor"&&H.instanceColor&&(bt=H.instanceColor)),bt!==void 0){const P=bt.normalized,X=bt.itemSize,xt=t.get(bt);if(xt===void 0)continue;const Ut=xt.buffer,Ht=xt.type,at=xt.bytesPerElement,St=Ht===r.INT||Ht===r.UNSIGNED_INT||bt.gpuType===op;if(bt.isInterleavedBufferAttribute){const At=bt.data,kt=At.stride,Qt=bt.offset;if(At.isInstancedInterleavedBuffer){for(let $t=0;$t<pt.locationSize;$t++)S(pt.location+$t,At.meshPerAttribute);H.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let $t=0;$t<pt.locationSize;$t++)M(pt.location+$t);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let $t=0;$t<pt.locationSize;$t++)O(pt.location+$t,X/pt.locationSize,Ht,P,kt*at,(Qt+X/pt.locationSize*$t)*at,St)}else{if(bt.isInstancedBufferAttribute){for(let At=0;At<pt.locationSize;At++)S(pt.location+At,bt.meshPerAttribute);H.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let At=0;At<pt.locationSize;At++)M(pt.location+At);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let At=0;At<pt.locationSize;At++)O(pt.location+At,X/pt.locationSize,Ht,P,X*at,X/pt.locationSize*At*at,St)}}else if(I!==void 0){const P=I[lt];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(pt.location,P);break;case 3:r.vertexAttrib3fv(pt.location,P);break;case 4:r.vertexAttrib4fv(pt.location,P);break;default:r.vertexAttrib1fv(pt.location,P)}}}}D()}function G(){U();for(const H in s){const j=s[H];for(const J in j){const rt=j[J];for(const Q in rt){const L=rt[Q];for(const I in L)v(L[I].object),delete L[I];delete rt[Q]}}delete s[H]}}function F(H){if(s[H.id]===void 0)return;const j=s[H.id];for(const J in j){const rt=j[J];for(const Q in rt){const L=rt[Q];for(const I in L)v(L[I].object),delete L[I];delete rt[Q]}}delete s[H.id]}function z(H){for(const j in s){const J=s[j];for(const rt in J){const Q=J[rt];if(Q[H.id]===void 0)continue;const L=Q[H.id];for(const I in L)v(L[I].object),delete L[I];delete Q[H.id]}}}function T(H){for(const j in s){const J=s[j],rt=H.isInstancedMesh===!0?H.id:0,Q=J[rt];if(Q!==void 0){for(const L in Q){const I=Q[L];for(const lt in I)v(I[lt].object),delete I[lt];delete Q[L]}delete J[rt],Object.keys(J).length===0&&delete s[j]}}}function U(){ut(),h=!0,c!==l&&(c=l,p(c.object))}function ut(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:ut,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:D}}function z1(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,x){x!==0&&(r.drawArraysInstanced(s,p,v,x),i.update(v,s,x))}function d(p,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,x);let E=0;for(let b=0;b<x;b++)E+=v[b];i.update(E,s,1)}function m(p,v,x,g){if(x===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<p.length;b++)h(p[b],v[b],g[b]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,v,0,g,0,x);let b=0;for(let w=0;w<x;w++)b+=v[w]*g[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function F1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ii&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==fi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Pi&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ae("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:D,maxVaryings:O,maxFragmentUniforms:N,maxSamples:G,samples:F}}function B1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new as,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const E=x.length!==0||g||s!==0||l;return l=g,s=x.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,E){const b=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||b===null||b.length===0||c&&!M)c?v(null):p();else{const D=c?0:s,O=D*4;let N=S.clippingState||null;m.value=N,N=v(b,g,O,E);for(let G=0;G!==O;++G)N[G]=i[G];S.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(x,g,E,b){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const S=E+w*4,D=g.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<S)&&(M=new Float32Array(S));for(let O=0,N=E;O!==w;++O,N+=4)h.copy(x[O]).applyMatrix4(D,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const rs=4,J_=[.125,.215,.35,.446,.526,.582],Is=20,H1=256,el=new Sp,$_=new Ee;let nd=null,id=0,ad=0,sd=!1;const G1=new K;class tv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=G1}=c;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=sd,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ba,format:Ii,colorSpace:Zr,depthBuffer:!1},l=ev(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V1(c)),this._blurMaterial=X1(c,t,i),this._ggxMaterial=k1(c,t,i)}return l}_compileMaterial(t){const i=new wn(new Un,t);this._renderer.compile(i,el)}_sceneToCubeUV(t,i,s,l,c){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,E=x.toneMapping;x.getClearColor($_),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new $r,new Ps({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,S=!0):(M.color.copy($_),S=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[O],c.y,c.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[O]));const G=this._cubeSize;Br(l,N*G,O>2?G:0,G,G),x.setRenderTarget(l),S&&x.render(w,m),x.render(t,m)}x.toneMapping=E,x.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Gs||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,el)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=0+p*1.25,E=x*g,{_lodMax:b}=this,w=this._sizeLods[s],M=3*w*(s>b-rs?s-b+rs:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=b-i,Br(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,el),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Br(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,el)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,E=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Is-1),w=c/b,M=isFinite(c)?1+Math.floor(v*w):Is;M>Is&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Is}`);const S=[];let D=0;for(let z=0;z<Is;++z){const T=z/w,U=Math.exp(-T*T/2);S.push(U),z===0?D+=U:z<M&&(D+=2*U)}for(let z=0;z<S.length;z++)S[z]=S[z]/D;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:O}=this;g.dTheta.value=b,g.mipInt.value=O-s;const N=this._sizeLods[l],G=3*N*(l>O-rs?l-O+rs:0),F=4*(this._cubeSize-N);Br(i,G,F,3*N,2*N),m.setRenderTarget(i),m.render(x,el)}}function V1(r){const t=[],i=[],s=[];let l=r;const c=r-rs+1+J_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-rs?m=J_[h-r+rs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,x=1+p,g=[v,v,x,v,x,x,v,v,x,x,v,x],E=6,b=6,w=3,M=2,S=1,D=new Float32Array(w*b*E),O=new Float32Array(M*b*E),N=new Float32Array(S*b*E);for(let F=0;F<E;F++){const z=F%3*2/3-1,T=F>2?0:-1,U=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];D.set(U,w*b*F),O.set(g,M*b*F);const ut=[F,F,F,F,F,F];N.set(ut,S*b*F)}const G=new Un;G.setAttribute("position",new Vn(D,w)),G.setAttribute("uv",new Vn(O,M)),G.setAttribute("faceIndex",new Vn(N,S)),s.push(new wn(G,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function ev(r,t,i){const s=new qi(r,t,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function k1(r,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function X1(r,t,i){const s=new Float32Array(Is),l=new K(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function nv(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function iv(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ex extends qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Zv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new $r(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new wn(l,c),d=i.minFilter;return i.minFilter===zs&&(i.minFilter=Pn),new ZM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function W1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===Rh||E===Ch)if(t.has(g)){const b=t.get(g).texture;return d(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new ex(b.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,b=E===Rh||E===Ch,w=E===Gs||E===qr;if(b||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new tv(r)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const D=g.image;return b&&D&&D.height>0||w&&D&&m(D)?(s===null&&(s=new tv(r)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function d(g,E){return E===Rh?g.mapping=Gs:E===Ch&&(g.mapping=qr),g}function m(g){let E=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&E++;return E===b}function p(g){const E=g.target;E.removeEventListener("dispose",p);const b=t.get(E);b!==void 0&&(t.delete(E),b.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const b=i.get(E);b!==void 0&&(i.delete(E),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function Y1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&uu("WebGLRenderer: "+s+" extension not supported."),l}}}function q1(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(t.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const E in g)t.update(g[E],r.ARRAY_BUFFER)}function p(x){const g=[],E=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(E!==null){const D=E.array;w=E.version;for(let O=0,N=D.length;O<N;O+=3){const G=D[O+0],F=D[O+1],z=D[O+2];g.push(G,F,F,z,z,G)}}else{const D=b.array;w=b.version;for(let O=0,N=D.length/3-1;O<N;O+=3){const G=O+0,F=O+1,z=O+2;g.push(G,F,F,z,z,G)}}const M=new(b.count>=65535?qv:Yv)(g,1);M.version=w;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function v(x){const g=c.get(x);if(g){const E=x.index;E!==null&&g.version<E.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function j1(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function m(g,E){r.drawElements(s,E,c,g*h),i.update(E,s,1)}function p(g,E,b){b!==0&&(r.drawElementsInstanced(s,E,c,g*h,b),i.update(E,s,b))}function v(g,E,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,g,0,b);let M=0;for(let S=0;S<b;S++)M+=E[S];i.update(M,s,1)}function x(g,E,b,w){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/h,E[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,c,g,0,w,0,b);let S=0;for(let D=0;D<b;D++)S+=E[D]*w[D];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function Z1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:we("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function K1(r,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let ut=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",ut)};var E=ut;g!==void 0&&g.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),w===!0&&(N=2),M===!0&&(N=3);let G=d.attributes.position.count*N,F=1;G>t.maxTextureSize&&(F=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*F*4*x),T=new Xv(z,G,F,x);T.type=Pi,T.needsUpdate=!0;const U=N*4;for(let H=0;H<x;H++){const j=S[H],J=D[H],rt=O[H],Q=G*F*4*H;for(let L=0;L<j.count;L++){const I=L*U;b===!0&&(l.fromBufferAttribute(j,L),z[Q+I+0]=l.x,z[Q+I+1]=l.y,z[Q+I+2]=l.z,z[Q+I+3]=0),w===!0&&(l.fromBufferAttribute(J,L),z[Q+I+4]=l.x,z[Q+I+5]=l.y,z[Q+I+6]=l.z,z[Q+I+7]=0),M===!0&&(l.fromBufferAttribute(rt,L),z[Q+I+8]=l.x,z[Q+I+9]=l.y,z[Q+I+10]=l.z,z[Q+I+11]=rt.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new ce(G,F)},s.set(d,g),d.addEventListener("dispose",ut)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const w=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function Q1(r,t,i,s,l){let c=new WeakMap;function h(p){const v=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const E=p.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function d(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:d}}const J1={[Cv]:"LINEAR_TONE_MAPPING",[wv]:"REINHARD_TONE_MAPPING",[Dv]:"CINEON_TONE_MAPPING",[Uv]:"ACES_FILMIC_TONE_MAPPING",[Lv]:"AGX_TONE_MAPPING",[Ov]:"NEUTRAL_TONE_MAPPING",[Nv]:"CUSTOM_TONE_MAPPING"};function $1(r,t,i,s,l){const c=new qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new qi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Un;d.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new on([0,2,0,0,2,0],2));const m=new GM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new wn(d,m),v=new Sp(-1,1,1,-1,0,1);let x=null,g=null,E=!1,b,w=null,M=[],S=!1;this.setSize=function(D,O){c.setSize(D,O),h.setSize(D,O);for(let N=0;N<M.length;N++){const G=M[N];G.setSize&&G.setSize(D,O)}},this.setEffects=function(D){M=D,S=M.length>0&&M[0].isRenderPass===!0;const O=c.width,N=c.height;for(let G=0;G<M.length;G++){const F=M[G];F.setSize&&F.setSize(O,N)}},this.begin=function(D,O){if(E||D.toneMapping===Yi&&M.length===0)return!1;if(w=O,O!==null){const N=O.width,G=O.height;(c.width!==N||c.height!==G)&&this.setSize(N,G)}return S===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=Yi,!0},this.hasRenderPass=function(){return S},this.end=function(D,O){D.toneMapping=b,E=!0;let N=c,G=h;for(let F=0;F<M.length;F++){const z=M[F];if(z.enabled!==!1&&(z.render(D,G,N,O),z.needsSwap!==!1)){const T=N;N=G,G=T}}if(x!==D.outputColorSpace||g!==D.toneMapping){x=D.outputColorSpace,g=D.toneMapping,m.defines={},De.getTransfer(x)===He&&(m.defines.SRGB_TRANSFER="");const F=J1[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(w),D.render(p,v),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const nx=new kn,np=new ul(1,1),ix=new Xv,ax=new mM,sx=new Zv,av=[],sv=[],rv=new Float32Array(16),ov=new Float32Array(9),lv=new Float32Array(4);function to(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=av[l];if(c===void 0&&(c=new Float32Array(l),av[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function gu(r,t){let i=sv[t];i===void 0&&(i=new Int32Array(t),sv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function tT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function nT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function iT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function aT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;lv.set(s),r.uniformMatrix2fv(this.addr,!1,lv),Sn(i,s)}}function sT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;ov.set(s),r.uniformMatrix3fv(this.addr,!1,ov),Sn(i,s)}}function rT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;rv.set(s),r.uniformMatrix4fv(this.addr,!1,rv),Sn(i,s)}}function oT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function fT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function dT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function mT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(np.compareFunction=i.isReversedDepthBuffer()?mp:pp,c=np):c=nx,i.setTexture2D(t||c,l)}function gT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ax,l)}function _T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||sx,l)}function vT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ix,l)}function xT(r){switch(r){case 5126:return tT;case 35664:return eT;case 35665:return nT;case 35666:return iT;case 35674:return aT;case 35675:return sT;case 35676:return rT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return fT;case 36294:return hT;case 36295:return dT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return vT}}function yT(r,t){r.uniform1fv(this.addr,t)}function ST(r,t){const i=to(t,this.size,2);r.uniform2fv(this.addr,i)}function MT(r,t){const i=to(t,this.size,3);r.uniform3fv(this.addr,i)}function ET(r,t){const i=to(t,this.size,4);r.uniform4fv(this.addr,i)}function bT(r,t){const i=to(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function TT(r,t){const i=to(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function AT(r,t){const i=to(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function RT(r,t){r.uniform1iv(this.addr,t)}function CT(r,t){r.uniform2iv(this.addr,t)}function wT(r,t){r.uniform3iv(this.addr,t)}function DT(r,t){r.uniform4iv(this.addr,t)}function UT(r,t){r.uniform1uiv(this.addr,t)}function NT(r,t){r.uniform2uiv(this.addr,t)}function LT(r,t){r.uniform3uiv(this.addr,t)}function OT(r,t){r.uniform4uiv(this.addr,t)}function PT(r,t,i){const s=this.cache,l=t.length,c=gu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=np:h=nx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function IT(r,t,i){const s=this.cache,l=t.length,c=gu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ax,c[h])}function zT(r,t,i){const s=this.cache,l=t.length,c=gu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||sx,c[h])}function FT(r,t,i){const s=this.cache,l=t.length,c=gu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||ix,c[h])}function BT(r){switch(r){case 5126:return yT;case 35664:return ST;case 35665:return MT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return NT;case 36295:return LT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return FT}}class HT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=xT(i.type)}}class GT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=BT(i.type)}}class VT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function cv(r,t){r.seq.push(t),r.map[t.id]=t}function kT(r,t,i){const s=r.name,l=s.length;for(rd.lastIndex=0;;){const c=rd.exec(s),h=rd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){cv(i,p===void 0?new HT(d,r,t):new GT(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new VT(d),cv(i,x)),i=x}}}class ou{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);kT(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function uv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const XT=37297;let WT=0;function YT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const fv=new de;function qT(r){De._getMatrix(fv,De.workingColorSpace,r);const t=`mat3( ${fv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case lu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function hv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+YT(r.getShaderSource(t),d)}else return c}function jT(r,t){const i=qT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ZT={[Cv]:"Linear",[wv]:"Reinhard",[Dv]:"Cineon",[Uv]:"ACESFilmic",[Lv]:"AgX",[Ov]:"Neutral",[Nv]:"Custom"};function KT(r,t){const i=ZT[t];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new K;function QT(){De.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),t=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function $T(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function tA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function al(r){return r!==""}function dv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(eA,iA)}const nA=new Map;function iA(r,t){let i=me[t];if(i===void 0){const s=nA.get(t);if(s!==void 0)i=me[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ip(i)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(r){return r.replace(aA,sA)}function sA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function gv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const rA={[eu]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function oA(r){return rA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lA={[Gs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function cA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":lA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const uA={[qr]:"ENVMAP_MODE_REFRACTION"};function fA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":uA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hA={[rp]:"ENVMAP_BLENDING_MULTIPLY",[qS]:"ENVMAP_BLENDING_MIX",[jS]:"ENVMAP_BLENDING_ADD"};function dA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":hA[r.combine]||"ENVMAP_BLENDING_NONE"}function pA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function mA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=oA(i),p=cA(i),v=fA(i),x=dA(i),g=pA(i),E=JT(i),b=$T(c),w=l.createProgram();let M,S,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(al).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(al).join(`
`),S.length>0&&(S+=`
`)):(M=[gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),S=[gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?me.tonemapping_pars_fragment:"",i.toneMapping!==Yi?KT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,jT("linearToOutputTexel",i.outputColorSpace),QT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),h=ip(h),h=dv(h,i),h=pv(h,i),d=ip(d),d=dv(d,i),d=pv(d,i),h=mv(h),d=mv(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===__?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===__?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=D+M+h,N=D+S+d,G=uv(l,l.VERTEX_SHADER,O),F=uv(l,l.FRAGMENT_SHADER,N);l.attachShader(w,G),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(H){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",J=l.getShaderInfoLog(G)||"",rt=l.getShaderInfoLog(F)||"",Q=j.trim(),L=J.trim(),I=rt.trim();let lt=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,G,F);else{const bt=hv(l,G,"vertex"),P=hv(l,F,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+bt+`
`+P)}else Q!==""?ae("WebGLProgram: Program Info Log:",Q):(L===""||I==="")&&(pt=!1);pt&&(H.diagnostics={runnable:lt,programLog:Q,vertexShader:{log:L,prefix:M},fragmentShader:{log:I,prefix:S}})}l.deleteShader(G),l.deleteShader(F),T=new ou(l,w),U=tA(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let ut=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ut===!1&&(ut=l.getProgramParameter(w,XT)),ut},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=F,this}let gA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new vA(t),i.set(t,s)),s}}class vA{constructor(t){this.id=gA++,this.code=t,this.usedTimes=0}}function xA(r,t,i,s,l,c){const h=new _p,d=new _A,m=new Set,p=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,U,ut,H,j){const J=H.fog,rt=j.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=t.get(T.envMap||Q,L),lt=I&&I.mapping===du?I.image.height:null,pt=E[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ae("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const bt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,P=bt!==void 0?bt.length:0;let X=0;rt.morphAttributes.position!==void 0&&(X=1),rt.morphAttributes.normal!==void 0&&(X=2),rt.morphAttributes.color!==void 0&&(X=3);let xt,Ut,Ht,at;if(pt){const Ce=Xi[pt];xt=Ce.vertexShader,Ut=Ce.fragmentShader}else xt=T.vertexShader,Ut=T.fragmentShader,d.update(T),Ht=d.getVertexShaderID(T),at=d.getFragmentShaderID(T);const St=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),kt=j.isInstancedMesh===!0,Qt=j.isBatchedMesh===!0,$t=!!T.map,Qe=!!T.matcap,ge=!!I,pe=!!T.aoMap,be=!!T.lightMap,se=!!T.bumpMap,je=!!T.normalMap,k=!!T.displacementMap,qe=!!T.emissiveMap,ye=!!T.metalnessMap,Re=!!T.roughnessMap,Yt=T.anisotropy>0,A=T.clearcoat>0,y=T.dispersion>0,B=T.iridescence>0,tt=T.sheen>0,ht=T.transmission>0,$=Yt&&!!T.anisotropyMap,Ct=A&&!!T.clearcoatMap,_t=A&&!!T.clearcoatNormalMap,It=A&&!!T.clearcoatRoughnessMap,Ot=B&&!!T.iridescenceMap,yt=B&&!!T.iridescenceThicknessMap,gt=tt&&!!T.sheenColorMap,Rt=tt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Pt=!!T.specularColorMap,ee=!!T.specularIntensityMap,Y=ht&&!!T.transmissionMap,Dt=ht&&!!T.thicknessMap,wt=!!T.gradientMap,Bt=!!T.alphaMap,Tt=T.alphaTest>0,dt=!!T.alphaHash,Gt=!!T.extensions;let ne=Yi;T.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ne=r.toneMapping);const ze={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:xt,fragmentShader:Ut,defines:T.defines,customVertexShaderID:Ht,customFragmentShaderID:at,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&j._colorsTexture!==null,instancing:kt,instancingColor:kt&&j.instanceColor!==null,instancingMorph:kt&&j.morphTexture!==null,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Zr,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Qe,envMap:ge,envMapMode:ge&&I.mapping,envMapCubeUVHeight:lt,aoMap:pe,lightMap:be,bumpMap:se,normalMap:je,displacementMap:k,emissiveMap:qe,normalMapObjectSpace:je&&T.normalMapType===QS,normalMapTangentSpace:je&&T.normalMapType===Vv,metalnessMap:ye,roughnessMap:Re,anisotropy:Yt,anisotropyMap:$,clearcoat:A,clearcoatMap:Ct,clearcoatNormalMap:_t,clearcoatRoughnessMap:It,dispersion:y,iridescence:B,iridescenceMap:Ot,iridescenceThicknessMap:yt,sheen:tt,sheenColorMap:gt,sheenRoughnessMap:Rt,specularMap:Nt,specularColorMap:Pt,specularIntensityMap:ee,transmission:ht,transmissionMap:Y,thicknessMap:Dt,gradientMap:wt,opaque:T.transparent===!1&&T.blending===Xr&&T.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Tt,alphaHash:dt,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:pe&&b(T.aoMap.channel),lightMapUv:be&&b(T.lightMap.channel),bumpMapUv:se&&b(T.bumpMap.channel),normalMapUv:je&&b(T.normalMap.channel),displacementMapUv:k&&b(T.displacementMap.channel),emissiveMapUv:qe&&b(T.emissiveMap.channel),metalnessMapUv:ye&&b(T.metalnessMap.channel),roughnessMapUv:Re&&b(T.roughnessMap.channel),anisotropyMapUv:$&&b(T.anisotropyMap.channel),clearcoatMapUv:Ct&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:_t&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:Pt&&b(T.specularColorMap.channel),specularIntensityMapUv:ee&&b(T.specularIntensityMap.channel),transmissionMapUv:Y&&b(T.transmissionMap.channel),thicknessMapUv:Dt&&b(T.thicknessMap.channel),alphaMapUv:Bt&&b(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(je||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!rt.attributes.uv&&($t||Bt),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||rt.attributes.normal===void 0&&je===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:At,skinning:j.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:X,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ut.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===He,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===He,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ui,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&T.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ut in T.defines)U.push(ut),U.push(T.defines[ut]);return T.isRawShaderMaterial===!1&&(S(U,T),D(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function D(T,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),T.push(h.mask)}function O(T){const U=E[T.type];let ut;if(U){const H=Xi[U];ut=FM.clone(H.uniforms)}else ut=T.uniforms;return ut}function N(T,U){let ut=v.get(U);return ut!==void 0?++ut.usedTimes:(ut=new mA(r,U,T,l),p.push(ut),v.set(U,ut)),ut}function G(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function F(T){d.remove(T)}function z(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:O,acquireProgram:N,releaseProgram:G,releaseShaderCache:F,programs:p,dispose:z}}function yA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function SA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function _v(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function vv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function d(g,E,b,w,M,S){let D=r[t];return D===void 0?(D={id:g.id,object:g,geometry:E,material:b,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=D):(D.id=g.id,D.object=g,D.geometry=E,D.material=b,D.materialVariant=h(g),D.groupOrder=w,D.renderOrder=g.renderOrder,D.z=M,D.group=S),t++,D}function m(g,E,b,w,M,S){const D=d(g,E,b,w,M,S);b.transmission>0?s.push(D):b.transparent===!0?l.push(D):i.push(D)}function p(g,E,b,w,M,S){const D=d(g,E,b,w,M,S);b.transmission>0?s.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function v(g,E){i.length>1&&i.sort(g||SA),s.length>1&&s.sort(E||_v),l.length>1&&l.sort(E||_v)}function x(){for(let g=t,E=r.length;g<E;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:v}}function MA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new vv,r.set(s,[h])):l>=c.length?(h=new vv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function EA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Ee};break;case"SpotLight":i={position:new K,direction:new K,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":i={color:new Ee,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function bA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let TA=0;function AA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function RA(r){const t=new EA,i=bA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new Ye,h=new Ye;function d(p){let v=0,x=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let E=0,b=0,w=0,M=0,S=0,D=0,O=0,N=0,G=0,F=0,z=0;p.sort(AA);for(let U=0,ut=p.length;U<ut;U++){const H=p[U],j=H.color,J=H.intensity,rt=H.distance;let Q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===jr?Q=H.shadow.map.texture:Q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=j.r*J,x+=j.g*J,g+=j.b*J;else if(H.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(H.sh.coefficients[L],J);z++}else if(H.isDirectionalLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,lt=i.get(H);lt.shadowIntensity=I.intensity,lt.shadowBias=I.bias,lt.shadowNormalBias=I.normalBias,lt.shadowRadius=I.radius,lt.shadowMapSize=I.mapSize,s.directionalShadow[E]=lt,s.directionalShadowMap[E]=Q,s.directionalShadowMatrix[E]=H.shadow.matrix,D++}s.directional[E]=L,E++}else if(H.isSpotLight){const L=t.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(j).multiplyScalar(J),L.distance=rt,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,s.spot[w]=L;const I=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,I.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[w]=I.matrix,H.castShadow){const lt=i.get(H);lt.shadowIntensity=I.intensity,lt.shadowBias=I.bias,lt.shadowNormalBias=I.normalBias,lt.shadowRadius=I.radius,lt.shadowMapSize=I.mapSize,s.spotShadow[w]=lt,s.spotShadowMap[w]=Q,N++}w++}else if(H.isRectAreaLight){const L=t.get(H);L.color.copy(j).multiplyScalar(J),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=L,M++}else if(H.isPointLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const I=H.shadow,lt=i.get(H);lt.shadowIntensity=I.intensity,lt.shadowBias=I.bias,lt.shadowNormalBias=I.normalBias,lt.shadowRadius=I.radius,lt.shadowMapSize=I.mapSize,lt.shadowCameraNear=I.camera.near,lt.shadowCameraFar=I.camera.far,s.pointShadow[b]=lt,s.pointShadowMap[b]=Q,s.pointShadowMatrix[b]=H.shadow.matrix,O++}s.point[b]=L,b++}else if(H.isHemisphereLight){const L=t.get(H);L.skyColor.copy(H.color).multiplyScalar(J),L.groundColor.copy(H.groundColor).multiplyScalar(J),s.hemi[S]=L,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==D||T.numPointShadows!==O||T.numSpotShadows!==N||T.numSpotMaps!==G||T.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=N+G-F,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,T.directionalLength=E,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=D,T.numPointShadows=O,T.numSpotShadows=N,T.numSpotMaps=G,T.numLightProbes=z,s.version=TA++)}function m(p,v){let x=0,g=0,E=0,b=0,w=0;const M=v.matrixWorldInverse;for(let S=0,D=p.length;S<D;S++){const O=p[S];if(O.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),x++}else if(O.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(O.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),g++}else if(O.isHemisphereLight){const N=s.hemi[w];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function xv(r){const t=new RA(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function CA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new xv(r),t.set(l,[d])):c>=h.length?(d=new xv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,UA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],NA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],yv=new Ye,nl=new K,od=new K;function LA(r,t,i){let s=new vp;const l=new ce,c=new ce,h=new an,d=new kM,m=new XM,p={},v=i.maxTextureSize,x={[os]:Jn,[Jn]:os,[ui]:ui},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:wA,fragmentShader:DA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const b=new Un;b.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new wn(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let S=this.type;this.render=function(F,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;this.type===CS&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eu);const U=r.getRenderTarget(),ut=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ma),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const J=S!==this.type;J&&z.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(Q=>Q.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,Q=F.length;rt<Q;rt++){const L=F[rt],I=L.shadow;if(I===void 0){ae("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const lt=I.getFrameExtents();l.multiply(lt),c.copy(I.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/lt.x),l.x=c.x*lt.x,I.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/lt.y),l.y=c.y*lt.y,I.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=pt,I.map===null||J===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===il){if(L.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new qi(l.x,l.y,{format:jr,type:ba,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new ul(l.x,l.y,Pi),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=Ta,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn}else L.isPointLight?(I.map=new ex(l.x),I.map.depthTexture=new OM(l.x,ji)):(I.map=new qi(l.x,l.y),I.map.depthTexture=new ul(l.x,l.y,ji)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=Ta,this.type===eu?(I.map.depthTexture.compareFunction=pt?mp:pp,I.map.depthTexture.minFilter=Pn,I.map.depthTexture.magFilter=Pn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn);I.camera.updateProjectionMatrix()}const bt=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<bt;P++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,P),r.clear();else{P===0&&(r.setRenderTarget(I.map),r.clear());const X=I.getViewport(P);h.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),j.viewport(h)}if(L.isPointLight){const X=I.camera,xt=I.matrix,Ut=L.distance||X.far;Ut!==X.far&&(X.far=Ut,X.updateProjectionMatrix()),nl.setFromMatrixPosition(L.matrixWorld),X.position.copy(nl),od.copy(X.position),od.add(UA[P]),X.up.copy(NA[P]),X.lookAt(od),X.updateMatrixWorld(),xt.makeTranslation(-nl.x,-nl.y,-nl.z),yv.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),I._frustum.setFromProjectionMatrix(yv,X.coordinateSystem,X.reversedDepth)}else I.updateMatrices(L);s=I.getFrustum(),N(z,T,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===il&&D(I,T),I.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(U,ut,H)};function D(F,z){const T=t.update(w);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new qi(l.x,l.y,{format:jr,type:ba})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,w,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(z,null,T,E,w,null)}function O(F,z,T,U){let ut=null;const H=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)ut=H;else if(ut=T.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const j=ut.uuid,J=z.uuid;let rt=p[j];rt===void 0&&(rt={},p[j]=rt);let Q=rt[J];Q===void 0&&(Q=ut.clone(),rt[J]=Q,z.addEventListener("dispose",G)),ut=Q}if(ut.visible=z.visible,ut.wireframe=z.wireframe,U===il?ut.side=z.shadowSide!==null?z.shadowSide:z.side:ut.side=z.shadowSide!==null?z.shadowSide:x[z.side],ut.alphaMap=z.alphaMap,ut.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ut.map=z.map,ut.clipShadows=z.clipShadows,ut.clippingPlanes=z.clippingPlanes,ut.clipIntersection=z.clipIntersection,ut.displacementMap=z.displacementMap,ut.displacementScale=z.displacementScale,ut.displacementBias=z.displacementBias,ut.wireframeLinewidth=z.wireframeLinewidth,ut.linewidth=z.linewidth,T.isPointLight===!0&&ut.isMeshDistanceMaterial===!0){const j=r.properties.get(ut);j.light=T}return ut}function N(F,z,T,U,ut){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ut===il)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const J=t.update(F),rt=F.material;if(Array.isArray(rt)){const Q=J.groups;for(let L=0,I=Q.length;L<I;L++){const lt=Q[L],pt=rt[lt.materialIndex];if(pt&&pt.visible){const bt=O(F,pt,U,ut);F.onBeforeShadow(r,F,z,T,J,bt,lt),r.renderBufferDirect(T,null,J,bt,F,lt),F.onAfterShadow(r,F,z,T,J,bt,lt)}}}else if(rt.visible){const Q=O(F,rt,U,ut);F.onBeforeShadow(r,F,z,T,J,Q,null),r.renderBufferDirect(T,null,J,Q,F,null),F.onAfterShadow(r,F,z,T,J,Q,null)}}const j=F.children;for(let J=0,rt=j.length;J<rt;J++)N(j[J],z,T,U,ut)}function G(F){F.target.removeEventListener("dispose",G);for(const T in p){const U=p[T],ut=F.target.uuid;ut in U&&(U[ut].dispose(),delete U[ut])}}}function OA(r,t){function i(){let Y=!1;const Dt=new an;let wt=null;const Bt=new an(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!Y&&(r.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){Y=Tt},setClear:function(Tt,dt,Gt,ne,ze){ze===!0&&(Tt*=ne,dt*=ne,Gt*=ne),Dt.set(Tt,dt,Gt,ne),Bt.equals(Dt)===!1&&(r.clearColor(Tt,dt,Gt,ne),Bt.copy(Dt))},reset:function(){Y=!1,wt=null,Bt.set(-1,0,0,0)}}}function s(){let Y=!1,Dt=!1,wt=null,Bt=null,Tt=null;return{setReversed:function(dt){if(Dt!==dt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Dt=dt;const ne=Tt;Tt=null,this.setClear(ne)}},getReversed:function(){return Dt},setTest:function(dt){dt?St(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(dt){wt!==dt&&!Y&&(r.depthMask(dt),wt=dt)},setFunc:function(dt){if(Dt&&(dt=oM[dt]),Bt!==dt){switch(dt){case dd:r.depthFunc(r.NEVER);break;case pd:r.depthFunc(r.ALWAYS);break;case md:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case gd:r.depthFunc(r.EQUAL);break;case _d:r.depthFunc(r.GEQUAL);break;case vd:r.depthFunc(r.GREATER);break;case xd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=dt}},setLocked:function(dt){Y=dt},setClear:function(dt){Tt!==dt&&(Tt=dt,Dt&&(dt=1-dt),r.clearDepth(dt))},reset:function(){Y=!1,wt=null,Bt=null,Tt=null,Dt=!1}}}function l(){let Y=!1,Dt=null,wt=null,Bt=null,Tt=null,dt=null,Gt=null,ne=null,ze=null;return{setTest:function(Ce){Y||(Ce?St(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Ce){Dt!==Ce&&!Y&&(r.stencilMask(Ce),Dt=Ce)},setFunc:function(Ce,In,Ti){(wt!==Ce||Bt!==In||Tt!==Ti)&&(r.stencilFunc(Ce,In,Ti),wt=Ce,Bt=In,Tt=Ti)},setOp:function(Ce,In,Ti){(dt!==Ce||Gt!==In||ne!==Ti)&&(r.stencilOp(Ce,In,Ti),dt=Ce,Gt=In,ne=Ti)},setLocked:function(Ce){Y=Ce},setClear:function(Ce){ze!==Ce&&(r.clearStencil(Ce),ze=Ce)},reset:function(){Y=!1,Dt=null,wt=null,Bt=null,Tt=null,dt=null,Gt=null,ne=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},x={},g=new WeakMap,E=[],b=null,w=!1,M=null,S=null,D=null,O=null,N=null,G=null,F=null,z=new Ee(0,0,0),T=0,U=!1,ut=null,H=null,j=null,J=null,rt=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const lt=r.getParameter(r.VERSION);lt.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(lt)[1]),L=I>=1):lt.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),L=I>=2);let pt=null,bt={};const P=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),xt=new an().fromArray(P),Ut=new an().fromArray(X);function Ht(Y,Dt,wt,Bt){const Tt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(Y,dt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<wt;Gt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Dt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Dt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return dt}const at={};at[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(r.DEPTH_TEST),h.setFunc(Yr),se(!1),je(f_),St(r.CULL_FACE),pe(Ma);function St(Y){v[Y]!==!0&&(r.enable(Y),v[Y]=!0)}function At(Y){v[Y]!==!1&&(r.disable(Y),v[Y]=!1)}function kt(Y,Dt){return x[Y]!==Dt?(r.bindFramebuffer(Y,Dt),x[Y]=Dt,Y===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Dt),Y===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Qt(Y,Dt){let wt=E,Bt=!1;if(Y){wt=g.get(Dt),wt===void 0&&(wt=[],g.set(Dt,wt));const Tt=Y.textures;if(wt.length!==Tt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Gt=Tt.length;dt<Gt;dt++)wt[dt]=r.COLOR_ATTACHMENT0+dt;wt.length=Tt.length,Bt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(wt)}function $t(Y){return b!==Y?(r.useProgram(Y),b=Y,!0):!1}const Qe={[Os]:r.FUNC_ADD,[DS]:r.FUNC_SUBTRACT,[US]:r.FUNC_REVERSE_SUBTRACT};Qe[NS]=r.MIN,Qe[LS]=r.MAX;const ge={[OS]:r.ZERO,[PS]:r.ONE,[IS]:r.SRC_COLOR,[fd]:r.SRC_ALPHA,[VS]:r.SRC_ALPHA_SATURATE,[HS]:r.DST_COLOR,[FS]:r.DST_ALPHA,[zS]:r.ONE_MINUS_SRC_COLOR,[hd]:r.ONE_MINUS_SRC_ALPHA,[GS]:r.ONE_MINUS_DST_COLOR,[BS]:r.ONE_MINUS_DST_ALPHA,[kS]:r.CONSTANT_COLOR,[XS]:r.ONE_MINUS_CONSTANT_COLOR,[WS]:r.CONSTANT_ALPHA,[YS]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(Y,Dt,wt,Bt,Tt,dt,Gt,ne,ze,Ce){if(Y===Ma){w===!0&&(At(r.BLEND),w=!1);return}if(w===!1&&(St(r.BLEND),w=!0),Y!==wS){if(Y!==M||Ce!==U){if((S!==Os||N!==Os)&&(r.blendEquation(r.FUNC_ADD),S=Os,N=Os),Ce)switch(Y){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case h_:r.blendFunc(r.ONE,r.ONE);break;case d_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case p_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:we("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case h_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case d_:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p_:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",Y);break}D=null,O=null,G=null,F=null,z.set(0,0,0),T=0,M=Y,U=Ce}return}Tt=Tt||Dt,dt=dt||wt,Gt=Gt||Bt,(Dt!==S||Tt!==N)&&(r.blendEquationSeparate(Qe[Dt],Qe[Tt]),S=Dt,N=Tt),(wt!==D||Bt!==O||dt!==G||Gt!==F)&&(r.blendFuncSeparate(ge[wt],ge[Bt],ge[dt],ge[Gt]),D=wt,O=Bt,G=dt,F=Gt),(ne.equals(z)===!1||ze!==T)&&(r.blendColor(ne.r,ne.g,ne.b,ze),z.copy(ne),T=ze),M=Y,U=!1}function be(Y,Dt){Y.side===ui?At(r.CULL_FACE):St(r.CULL_FACE);let wt=Y.side===Jn;Dt&&(wt=!wt),se(wt),Y.blending===Xr&&Y.transparent===!1?pe(Ma):pe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Bt=Y.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),qe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(Y){ut!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),ut=Y)}function je(Y){Y!==AS?(St(r.CULL_FACE),Y!==H&&(Y===f_?r.cullFace(r.BACK):Y===RS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),H=Y}function k(Y){Y!==j&&(L&&r.lineWidth(Y),j=Y)}function qe(Y,Dt,wt){Y?(St(r.POLYGON_OFFSET_FILL),(J!==Dt||rt!==wt)&&(J=Dt,rt=wt,h.getReversed()&&(Dt=-Dt),r.polygonOffset(Dt,wt))):At(r.POLYGON_OFFSET_FILL)}function ye(Y){Y?St(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function Re(Y){Y===void 0&&(Y=r.TEXTURE0+Q-1),pt!==Y&&(r.activeTexture(Y),pt=Y)}function Yt(Y,Dt,wt){wt===void 0&&(pt===null?wt=r.TEXTURE0+Q-1:wt=pt);let Bt=bt[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},bt[wt]=Bt),(Bt.type!==Y||Bt.texture!==Dt)&&(pt!==wt&&(r.activeTexture(wt),pt=wt),r.bindTexture(Y,Dt||at[Y]),Bt.type=Y,Bt.texture=Dt)}function A(){const Y=bt[pt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function tt(){try{r.texSubImage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function ht(){try{r.texSubImage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function Ct(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function _t(){try{r.texStorage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function It(){try{r.texStorage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function Ot(){try{r.texImage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function yt(){try{r.texImage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function gt(Y){xt.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),xt.copy(Y))}function Rt(Y){Ut.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Ut.copy(Y))}function Nt(Y,Dt){let wt=p.get(Dt);wt===void 0&&(wt=new WeakMap,p.set(Dt,wt));let Bt=wt.get(Y);Bt===void 0&&(Bt=r.getUniformBlockIndex(Dt,Y.name),wt.set(Y,Bt))}function Pt(Y,Dt){const Bt=p.get(Dt).get(Y);m.get(Dt)!==Bt&&(r.uniformBlockBinding(Dt,Bt,Y.__bindingPointIndex),m.set(Dt,Bt))}function ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},pt=null,bt={},x={},g=new WeakMap,E=[],b=null,w=!1,M=null,S=null,D=null,O=null,N=null,G=null,F=null,z=new Ee(0,0,0),T=0,U=!1,ut=null,H=null,j=null,J=null,rt=null,xt.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:St,disable:At,bindFramebuffer:kt,drawBuffers:Qt,useProgram:$t,setBlending:pe,setMaterial:be,setFlipSided:se,setCullFace:je,setLineWidth:k,setPolygonOffset:qe,setScissorTest:ye,activeTexture:Re,bindTexture:Yt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Ot,texImage3D:yt,updateUBOMapping:Nt,uniformBlockBinding:Pt,texStorage2D:_t,texStorage3D:It,texSubImage2D:tt,texSubImage3D:ht,compressedTexSubImage2D:$,compressedTexSubImage3D:Ct,scissor:gt,viewport:Rt,reset:ee}}function PA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,v=new WeakMap;let x;const g=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,y){return E?new OffscreenCanvas(A,y):cu("canvas")}function w(A,y,B){let tt=1;const ht=Yt(A);if((ht.width>B||ht.height>B)&&(tt=B/Math.max(ht.width,ht.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(tt*ht.width),Ct=Math.floor(tt*ht.height);x===void 0&&(x=b($,Ct));const _t=y?b($,Ct):x;return _t.width=$,_t.height=Ct,_t.getContext("2d").drawImage(A,0,0,$,Ct),ae("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+$+"x"+Ct+")."),_t}else return"data"in A&&ae("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),A;return A}function M(A){return A.generateMipmaps}function S(A){r.generateMipmap(A)}function D(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(A,y,B,tt,ht=!1){if(A!==null){if(r[A]!==void 0)return r[A];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=y;if(y===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8)),y===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),y===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8)),y===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),y===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),y===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),y===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),y===r.RGBA){const Ct=ht?lu:De.getTransfer(tt);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=Ct===He?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function N(A,y){let B;return A?y===null||y===ji||y===ll?B=r.DEPTH24_STENCIL8:y===Pi?B=r.DEPTH32F_STENCIL8:y===ol&&(B=r.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ji||y===ll?B=r.DEPTH_COMPONENT24:y===Pi?B=r.DEPTH_COMPONENT32F:y===ol&&(B=r.DEPTH_COMPONENT16),B}function G(A,y){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function F(A){const y=A.target;y.removeEventListener("dispose",F),T(y),y.isVideoTexture&&v.delete(y)}function z(A){const y=A.target;y.removeEventListener("dispose",z),ut(y)}function T(A){const y=s.get(A);if(y.__webglInit===void 0)return;const B=A.source,tt=g.get(B);if(tt){const ht=tt[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&U(A),Object.keys(tt).length===0&&g.delete(B)}s.remove(A)}function U(A){const y=s.get(A);r.deleteTexture(y.__webglTexture);const B=A.source,tt=g.get(B);delete tt[y.__cacheKey],h.memory.textures--}function ut(A){const y=s.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),s.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let ht=0;ht<y.__webglFramebuffer[tt].length;ht++)r.deleteFramebuffer(y.__webglFramebuffer[tt][ht]);else r.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)r.deleteFramebuffer(y.__webglFramebuffer[tt]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let tt=0,ht=B.length;tt<ht;tt++){const $=s.get(B[tt]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),h.memory.textures--),s.remove(B[tt])}s.remove(A)}let H=0;function j(){H=0}function J(){const A=H;return A>=l.maxTextures&&ae("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l.maxTextures),H+=1,A}function rt(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function Q(A,y){const B=s.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const tt=A.image;if(tt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{at(B,A,y);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+y)}function L(A,y){const B=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){at(B,A,y);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+y)}function I(A,y){const B=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){at(B,A,y);return}i.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+y)}function lt(A,y){const B=s.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){St(B,A,y);return}i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+y)}const pt={[yd]:r.REPEAT,[Sa]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},bt={[Dn]:r.NEAREST,[ZS]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[wh]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},P={[JS]:r.NEVER,[iM]:r.ALWAYS,[$S]:r.LESS,[pp]:r.LEQUAL,[tM]:r.EQUAL,[mp]:r.GEQUAL,[eM]:r.GREATER,[nM]:r.NOTEQUAL};function X(A,y){if(y.type===Pi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===wh||y.magFilter===Tc||y.magFilter===zs||y.minFilter===Pn||y.minFilter===wh||y.minFilter===Tc||y.minFilter===zs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,pt[y.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,pt[y.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,pt[y.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,bt[y.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,bt[y.minFilter]),y.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,P[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dn||y.minFilter!==Tc&&y.minFilter!==zs||y.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function xt(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",F));const tt=y.source;let ht=g.get(tt);ht===void 0&&(ht={},g.set(tt,ht));const $=rt(y);if($!==A.__cacheKey){ht[$]===void 0&&(ht[$]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,B=!0),ht[$].usedTimes++;const Ct=ht[A.__cacheKey];Ct!==void 0&&(ht[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&U(y)),A.__cacheKey=$,A.__webglTexture=ht[$].texture}return B}function Ut(A,y,B){return Math.floor(Math.floor(A/B)/y)}function Ht(A,y,B,tt){const $=A.updateRanges;if($.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,B,tt,y.data);else{$.sort((yt,gt)=>yt.start-gt.start);let Ct=0;for(let yt=1;yt<$.length;yt++){const gt=$[Ct],Rt=$[yt],Nt=gt.start+gt.count,Pt=Ut(Rt.start,y.width,4),ee=Ut(gt.start,y.width,4);Rt.start<=Nt+1&&Pt===ee&&Ut(Rt.start+Rt.count-1,y.width,4)===Pt?gt.count=Math.max(gt.count,Rt.start+Rt.count-gt.start):(++Ct,$[Ct]=Rt)}$.length=Ct+1;const _t=r.getParameter(r.UNPACK_ROW_LENGTH),It=r.getParameter(r.UNPACK_SKIP_PIXELS),Ot=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let yt=0,gt=$.length;yt<gt;yt++){const Rt=$[yt],Nt=Math.floor(Rt.start/4),Pt=Math.ceil(Rt.count/4),ee=Nt%y.width,Y=Math.floor(Nt/y.width),Dt=Pt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,ee,Y,Dt,wt,B,tt,y.data)}A.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,_t),r.pixelStorei(r.UNPACK_SKIP_PIXELS,It),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ot)}}function at(A,y,B){let tt=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=r.TEXTURE_3D);const ht=xt(A,y),$=y.source;i.bindTexture(tt,A.__webglTexture,r.TEXTURE0+B);const Ct=s.get($);if($.version!==Ct.__version||ht===!0){i.activeTexture(r.TEXTURE0+B);const _t=De.getPrimaries(De.workingColorSpace),It=y.colorSpace===ss?null:De.getPrimaries(y.colorSpace),Ot=y.colorSpace===ss||_t===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let yt=w(y.image,!1,l.maxTextureSize);yt=Re(y,yt);const gt=c.convert(y.format,y.colorSpace),Rt=c.convert(y.type);let Nt=O(y.internalFormat,gt,Rt,y.colorSpace,y.isVideoTexture);X(tt,y);let Pt;const ee=y.mipmaps,Y=y.isVideoTexture!==!0,Dt=Ct.__version===void 0||ht===!0,wt=$.dataReady,Bt=G(y,yt);if(y.isDepthTexture)Nt=N(y.format===Fs,y.type),Dt&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Nt,yt.width,yt.height):i.texImage2D(r.TEXTURE_2D,0,Nt,yt.width,yt.height,0,gt,Rt,null));else if(y.isDataTexture)if(ee.length>0){Y&&Dt&&i.texStorage2D(r.TEXTURE_2D,Bt,Nt,ee[0].width,ee[0].height);for(let Tt=0,dt=ee.length;Tt<dt;Tt++)Pt=ee[Tt],Y?wt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,gt,Rt,Pt.data):i.texImage2D(r.TEXTURE_2D,Tt,Nt,Pt.width,Pt.height,0,gt,Rt,Pt.data);y.generateMipmaps=!1}else Y?(Dt&&i.texStorage2D(r.TEXTURE_2D,Bt,Nt,yt.width,yt.height),wt&&Ht(y,yt,gt,Rt)):i.texImage2D(r.TEXTURE_2D,0,Nt,yt.width,yt.height,0,gt,Rt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Y&&Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Nt,ee[0].width,ee[0].height,yt.depth);for(let Tt=0,dt=ee.length;Tt<dt;Tt++)if(Pt=ee[Tt],y.format!==Ii)if(gt!==null)if(Y){if(wt)if(y.layerUpdates.size>0){const Gt=Q_(Pt.width,Pt.height,y.format,y.type);for(const ne of y.layerUpdates){const ze=Pt.data.subarray(ne*Gt/Pt.data.BYTES_PER_ELEMENT,(ne+1)*Gt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,ne,Pt.width,Pt.height,1,gt,ze)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,yt.depth,gt,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Nt,Pt.width,Pt.height,yt.depth,0,Pt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,yt.depth,gt,Rt,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Nt,Pt.width,Pt.height,yt.depth,0,gt,Rt,Pt.data)}else{Y&&Dt&&i.texStorage2D(r.TEXTURE_2D,Bt,Nt,ee[0].width,ee[0].height);for(let Tt=0,dt=ee.length;Tt<dt;Tt++)Pt=ee[Tt],y.format!==Ii?gt!==null?Y?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,gt,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,Tt,Nt,Pt.width,Pt.height,0,Pt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?wt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,gt,Rt,Pt.data):i.texImage2D(r.TEXTURE_2D,Tt,Nt,Pt.width,Pt.height,0,gt,Rt,Pt.data)}else if(y.isDataArrayTexture)if(Y){if(Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Nt,yt.width,yt.height,yt.depth),wt)if(y.layerUpdates.size>0){const Tt=Q_(yt.width,yt.height,y.format,y.type);for(const dt of y.layerUpdates){const Gt=yt.data.subarray(dt*Tt/yt.data.BYTES_PER_ELEMENT,(dt+1)*Tt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,dt,yt.width,yt.height,1,gt,Rt,Gt)}y.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,gt,Rt,yt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,yt.width,yt.height,yt.depth,0,gt,Rt,yt.data);else if(y.isData3DTexture)Y?(Dt&&i.texStorage3D(r.TEXTURE_3D,Bt,Nt,yt.width,yt.height,yt.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,gt,Rt,yt.data)):i.texImage3D(r.TEXTURE_3D,0,Nt,yt.width,yt.height,yt.depth,0,gt,Rt,yt.data);else if(y.isFramebufferTexture){if(Dt)if(Y)i.texStorage2D(r.TEXTURE_2D,Bt,Nt,yt.width,yt.height);else{let Tt=yt.width,dt=yt.height;for(let Gt=0;Gt<Bt;Gt++)i.texImage2D(r.TEXTURE_2D,Gt,Nt,Tt,dt,0,gt,Rt,null),Tt>>=1,dt>>=1}}else if(ee.length>0){if(Y&&Dt){const Tt=Yt(ee[0]);i.texStorage2D(r.TEXTURE_2D,Bt,Nt,Tt.width,Tt.height)}for(let Tt=0,dt=ee.length;Tt<dt;Tt++)Pt=ee[Tt],Y?wt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,gt,Rt,Pt):i.texImage2D(r.TEXTURE_2D,Tt,Nt,gt,Rt,Pt);y.generateMipmaps=!1}else if(Y){if(Dt){const Tt=Yt(yt);i.texStorage2D(r.TEXTURE_2D,Bt,Nt,Tt.width,Tt.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Rt,yt)}else i.texImage2D(r.TEXTURE_2D,0,Nt,gt,Rt,yt);M(y)&&S(tt),Ct.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function St(A,y,B){if(y.image.length!==6)return;const tt=xt(A,y),ht=y.source;i.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+B);const $=s.get(ht);if(ht.version!==$.__version||tt===!0){i.activeTexture(r.TEXTURE0+B);const Ct=De.getPrimaries(De.workingColorSpace),_t=y.colorSpace===ss?null:De.getPrimaries(y.colorSpace),It=y.colorSpace===ss||Ct===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Ot=y.isCompressedTexture||y.image[0].isCompressedTexture,yt=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let dt=0;dt<6;dt++)!Ot&&!yt?gt[dt]=w(y.image[dt],!0,l.maxCubemapSize):gt[dt]=yt?y.image[dt].image:y.image[dt],gt[dt]=Re(y,gt[dt]);const Rt=gt[0],Nt=c.convert(y.format,y.colorSpace),Pt=c.convert(y.type),ee=O(y.internalFormat,Nt,Pt,y.colorSpace),Y=y.isVideoTexture!==!0,Dt=$.__version===void 0||tt===!0,wt=ht.dataReady;let Bt=G(y,Rt);X(r.TEXTURE_CUBE_MAP,y);let Tt;if(Ot){Y&&Dt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ee,Rt.width,Rt.height);for(let dt=0;dt<6;dt++){Tt=gt[dt].mipmaps;for(let Gt=0;Gt<Tt.length;Gt++){const ne=Tt[Gt];y.format!==Ii?Nt!==null?Y?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,ne.width,ne.height,Nt,ne.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,ee,ne.width,ne.height,0,ne.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,ne.width,ne.height,Nt,Pt,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,ee,ne.width,ne.height,0,Nt,Pt,ne.data)}}}else{if(Tt=y.mipmaps,Y&&Dt){Tt.length>0&&Bt++;const dt=Yt(gt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ee,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(yt){Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,gt[dt].width,gt[dt].height,Nt,Pt,gt[dt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ee,gt[dt].width,gt[dt].height,0,Nt,Pt,gt[dt].data);for(let Gt=0;Gt<Tt.length;Gt++){const ze=Tt[Gt].image[dt].image;Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,ze.width,ze.height,Nt,Pt,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,ee,ze.width,ze.height,0,Nt,Pt,ze.data)}}else{Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Nt,Pt,gt[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ee,Nt,Pt,gt[dt]);for(let Gt=0;Gt<Tt.length;Gt++){const ne=Tt[Gt];Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,Nt,Pt,ne.image[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,ee,Nt,Pt,ne.image[dt])}}}M(y)&&S(r.TEXTURE_CUBE_MAP),$.__version=ht.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function At(A,y,B,tt,ht,$){const Ct=c.convert(B.format,B.colorSpace),_t=c.convert(B.type),It=O(B.internalFormat,Ct,_t,B.colorSpace),Ot=s.get(y),yt=s.get(B);if(yt.__renderTarget=y,!Ot.__hasExternalTextures){const gt=Math.max(1,y.width>>$),Rt=Math.max(1,y.height>>$);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?i.texImage3D(ht,$,It,gt,Rt,y.depth,0,Ct,_t,null):i.texImage2D(ht,$,It,gt,Rt,0,Ct,_t,null)}i.bindFramebuffer(r.FRAMEBUFFER,A),qe(y)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,ht,yt.__webglTexture,0,k(y)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,ht,yt.__webglTexture,$),i.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(A,y,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),y.depthBuffer){const tt=y.depthTexture,ht=tt&&tt.isDepthTexture?tt.type:null,$=N(y.stencilBuffer,ht),Ct=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(y)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(y),$,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(y),$,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,$,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,A)}else{const tt=y.textures;for(let ht=0;ht<tt.length;ht++){const $=tt[ht],Ct=c.convert($.format,$.colorSpace),_t=c.convert($.type),It=O($.internalFormat,Ct,_t,$.colorSpace);qe(y)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(y),It,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(y),It,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,It,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(A,y,B){const tt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(y.depthTexture);if(ht.__renderTarget=y,(!ht.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),ht.__webglTexture===void 0){ht.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),X(r.TEXTURE_CUBE_MAP,y.depthTexture);const Ot=c.convert(y.depthTexture.format),yt=c.convert(y.depthTexture.type);let gt;y.depthTexture.format===Ta?gt=r.DEPTH_COMPONENT24:y.depthTexture.format===Fs&&(gt=r.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,gt,y.width,y.height,0,Ot,yt,null)}}else Q(y.depthTexture,0);const $=ht.__webglTexture,Ct=k(y),_t=tt?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,It=y.depthTexture.format===Fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ta)qe(y)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,It,_t,$,0,Ct):r.framebufferTexture2D(r.FRAMEBUFFER,It,_t,$,0);else if(y.depthTexture.format===Fs)qe(y)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,It,_t,$,0,Ct):r.framebufferTexture2D(r.FRAMEBUFFER,It,_t,$,0);else throw new Error("Unknown depthTexture format")}function $t(A){const y=s.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const tt=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){const ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",ht)};tt.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=tt}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let tt=0;tt<6;tt++)Qt(y.__webglFramebuffer[tt],A,tt);else{const tt=A.texture.mipmaps;tt&&tt.length>0?Qt(y.__webglFramebuffer[0],A,0):Qt(y.__webglFramebuffer,A,0)}else if(B){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=r.createRenderbuffer(),kt(y.__webglDepthbuffer[tt],A,!1);else{const ht=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,$)}}else{const tt=A.texture.mipmaps;if(tt&&tt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),kt(y.__webglDepthbuffer,A,!1);else{const ht=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,$)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(A,y,B){const tt=s.get(A);y!==void 0&&At(tt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&$t(A)}function ge(A){const y=A.texture,B=s.get(A),tt=s.get(y);A.addEventListener("dispose",z);const ht=A.textures,$=A.isWebGLCubeRenderTarget===!0,Ct=ht.length>1;if(Ct||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=y.version,h.memory.textures++),$){B.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[_t]=[];for(let It=0;It<y.mipmaps.length;It++)B.__webglFramebuffer[_t][It]=r.createFramebuffer()}else B.__webglFramebuffer[_t]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)B.__webglFramebuffer[_t]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Ct)for(let _t=0,It=ht.length;_t<It;_t++){const Ot=s.get(ht[_t]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),h.memory.textures++)}if(A.samples>0&&qe(A)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){const It=ht[_t];B.__webglColorRenderbuffer[_t]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);const Ot=c.convert(It.format,It.colorSpace),yt=c.convert(It.type),gt=O(It.internalFormat,Ot,yt,It.colorSpace,A.isXRRenderTarget===!0),Rt=k(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,gt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(B.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),X(r.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let It=0;It<y.mipmaps.length;It++)At(B.__webglFramebuffer[_t][It],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It);else At(B.__webglFramebuffer[_t],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);M(y)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ct){for(let _t=0,It=ht.length;_t<It;_t++){const Ot=ht[_t],yt=s.get(Ot);let gt=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(gt,yt.__webglTexture),X(gt,Ot),At(B.__webglFramebuffer,A,Ot,r.COLOR_ATTACHMENT0+_t,gt,0),M(Ot)&&S(gt)}i.unbindTexture()}else{let _t=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(_t,tt.__webglTexture),X(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let It=0;It<y.mipmaps.length;It++)At(B.__webglFramebuffer[It],A,y,r.COLOR_ATTACHMENT0,_t,It);else At(B.__webglFramebuffer,A,y,r.COLOR_ATTACHMENT0,_t,0);M(y)&&S(_t),i.unbindTexture()}A.depthBuffer&&$t(A)}function pe(A){const y=A.textures;for(let B=0,tt=y.length;B<tt;B++){const ht=y[B];if(M(ht)){const $=D(A),Ct=s.get(ht).__webglTexture;i.bindTexture($,Ct),S($),i.unbindTexture()}}}const be=[],se=[];function je(A){if(A.samples>0){if(qe(A)===!1){const y=A.textures,B=A.width,tt=A.height;let ht=r.COLOR_BUFFER_BIT;const $=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=s.get(A),_t=y.length>1;if(_t)for(let Ot=0;Ot<y.length;Ot++)i.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const It=A.texture.mipmaps;It&&It.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Ot=0;Ot<y.length;Ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),_t){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[Ot]);const yt=s.get(y[Ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,yt,0)}r.blitFramebuffer(0,0,B,tt,0,0,B,tt,ht,r.NEAREST),m===!0&&(be.length=0,se.length=0,be.push(r.COLOR_ATTACHMENT0+Ot),A.depthBuffer&&A.resolveDepthBuffer===!1&&(be.push($),se.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_t)for(let Ot=0;Ot<y.length;Ot++){i.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[Ot]);const yt=s.get(y[Ot]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,yt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&m){const y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function k(A){return Math.min(l.maxSamples,A.samples)}function qe(A){const y=s.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ye(A){const y=h.render.frame;v.get(A)!==y&&(v.set(A,y),A.update())}function Re(A,y){const B=A.colorSpace,tt=A.format,ht=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Zr&&B!==ss&&(De.getTransfer(B)===He?(tt!==Ii||ht!==fi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",B)),y}function Yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(p.width=A.naturalWidth||A.width,p.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(p.width=A.displayWidth,p.height=A.displayHeight):(p.width=A.width,p.height=A.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=L,this.setTexture3D=I,this.setTextureCube=lt,this.rebindTextures=Qe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=At,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function IA(r,t){function i(s,l=ss){let c;const h=De.getTransfer(l);if(s===fi)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Fv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Bv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Iv)return r.BYTE;if(s===zv)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Pi)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===Hv)return r.ALPHA;if(s===Gv)return r.RGB;if(s===Ii)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Fs)return r.DEPTH_STENCIL;if(s===up)return r.RED;if(s===fp)return r.RED_INTEGER;if(s===jr)return r.RG;if(s===hp)return r.RG_INTEGER;if(s===dp)return r.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(h===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Md||s===Ed||s===bd||s===Td)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ad||s===Rd)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===wd)return c.COMPRESSED_R11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ud)return c.COMPRESSED_RG11_EAC;if(s===Nd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ld||s===Od||s===Pd||s===Id||s===zd||s===Fd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===Yd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Id)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qd||s===jd||s===Zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===qd)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kd||s===Qd||s===Jd||s===$d)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Kd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Kv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ki({vertexShader:zA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wn(new Hs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends Vs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,x=null,g=null,E=null,b=null;const w=typeof XRWebGLBinding<"u",M=new BA,S={},D=i.getContextAttributes();let O=null,N=null;const G=[],F=[],z=new ce;let T=null;const U=new Ei;U.viewport=new an;const ut=new Ei;ut.viewport=new an;const H=[U,ut],j=new KM;let J=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let St=G[at];return St===void 0&&(St=new Ih,G[at]=St),St.getTargetRaySpace()},this.getControllerGrip=function(at){let St=G[at];return St===void 0&&(St=new Ih,G[at]=St),St.getGripSpace()},this.getHand=function(at){let St=G[at];return St===void 0&&(St=new Ih,G[at]=St),St.getHandSpace()};function Q(at){const St=F.indexOf(at.inputSource);if(St===-1)return;const At=G[St];At!==void 0&&(At.update(at.inputSource,at.frame,p||h),At.dispatchEvent({type:at.type,data:at.inputSource}))}function L(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",I);for(let at=0;at<G.length;at++){const St=F[at];St!==null&&(F[at]=null,G[at].disconnect(St))}J=null,rt=null,M.reset();for(const at in S)delete S[at];t.setRenderTarget(O),E=null,g=null,x=null,l=null,N=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",L),l.addEventListener("inputsourceschange",I),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,kt=null,Qt=null;D.depth&&(Qt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=D.stencil?Fs:Ta,kt=D.stencil?ll:ji);const $t={colorFormat:i.RGBA8,depthFormat:Qt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer($t),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new qi(g.textureWidth,g.textureHeight,{format:Ii,type:fi,depthTexture:new ul(g.textureWidth,g.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const At={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new qi(E.framebufferWidth,E.framebufferHeight,{format:Ii,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ht.setContext(l),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function I(at){for(let St=0;St<at.removed.length;St++){const At=at.removed[St],kt=F.indexOf(At);kt>=0&&(F[kt]=null,G[kt].disconnect(At))}for(let St=0;St<at.added.length;St++){const At=at.added[St];let kt=F.indexOf(At);if(kt===-1){for(let $t=0;$t<G.length;$t++)if($t>=F.length){F.push(At),kt=$t;break}else if(F[$t]===null){F[$t]=At,kt=$t;break}if(kt===-1)break}const Qt=G[kt];Qt&&Qt.connect(At)}}const lt=new K,pt=new K;function bt(at,St,At){lt.setFromMatrixPosition(St.matrixWorld),pt.setFromMatrixPosition(At.matrixWorld);const kt=lt.distanceTo(pt),Qt=St.projectionMatrix.elements,$t=At.projectionMatrix.elements,Qe=Qt[14]/(Qt[10]-1),ge=Qt[14]/(Qt[10]+1),pe=(Qt[9]+1)/Qt[5],be=(Qt[9]-1)/Qt[5],se=(Qt[8]-1)/Qt[0],je=($t[8]+1)/$t[0],k=Qe*se,qe=Qe*je,ye=kt/(-se+je),Re=ye*-se;if(St.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Re),at.translateZ(ye),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Qt[10]===-1)at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const Yt=Qe+ye,A=ge+ye,y=k-Re,B=qe+(kt-Re),tt=pe*ge/A*Yt,ht=be*ge/A*Yt;at.projectionMatrix.makePerspective(y,B,tt,ht,Yt,A),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function P(at,St){St===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(St.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let St=at.near,At=at.far;M.texture!==null&&(M.depthNear>0&&(St=M.depthNear),M.depthFar>0&&(At=M.depthFar)),j.near=ut.near=U.near=St,j.far=ut.far=U.far=At,(J!==j.near||rt!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),J=j.near,rt=j.far),j.layers.mask=at.layers.mask|6,U.layers.mask=j.layers.mask&-5,ut.layers.mask=j.layers.mask&-3;const kt=at.parent,Qt=j.cameras;P(j,kt);for(let $t=0;$t<Qt.length;$t++)P(Qt[$t],kt);Qt.length===2?bt(j,U,ut):j.projectionMatrix.copy(U.projectionMatrix),X(at,j,kt)};function X(at,St,At){At===null?at.matrix.copy(St.matrixWorld):(at.matrix.copy(At.matrixWorld),at.matrix.invert(),at.matrix.multiply(St.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=tp*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(at){return S[at]};let xt=null;function Ut(at,St){if(v=St.getViewerPose(p||h),b=St,v!==null){const At=v.views;E!==null&&(t.setRenderTargetFramebuffer(N,E.framebuffer),t.setRenderTarget(N));let kt=!1;At.length!==j.cameras.length&&(j.cameras.length=0,kt=!0);for(let ge=0;ge<At.length;ge++){const pe=At[ge];let be=null;if(E!==null)be=E.getViewport(pe);else{const je=x.getViewSubImage(g,pe);be=je.viewport,ge===0&&(t.setRenderTargetTextures(N,je.colorTexture,je.depthStencilTexture),t.setRenderTarget(N))}let se=H[ge];se===void 0&&(se=new Ei,se.layers.enable(ge),se.viewport=new an,H[ge]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(be.x,be.y,be.width,be.height),ge===0&&(j.matrix.copy(se.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),kt===!0&&j.cameras.push(se)}const Qt=l.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const ge=x.getDepthInformation(At[0]);ge&&ge.isValid&&ge.texture&&M.init(ge,l.renderState)}if(Qt&&Qt.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let ge=0;ge<At.length;ge++){const pe=At[ge].camera;if(pe){let be=S[pe];be||(be=new Kv,S[pe]=be);const se=x.getCameraImage(pe);be.sourceTexture=se}}}}for(let At=0;At<G.length;At++){const kt=F[At],Qt=G[At];kt!==null&&Qt!==void 0&&Qt.update(kt,St,p||h)}xt&&xt(at,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),b=null}const Ht=new tx;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(at){xt=at},this.dispose=function(){}}}const Ls=new Zi,GA=new Ye;function VA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Qv(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,D,O,N){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),v(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&E(M,S,N)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,D,O):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Jn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Jn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const D=t.get(S),O=D.envMap,N=D.envMapRotation;O&&(M.envMap.value=O,Ls.copy(N),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),M.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(Ls)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,D,O){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*D,M.scale.value=O*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function E(M,S,D){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Jn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const D=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,O){const N=O.program;s.uniformBlockBinding(D,N)}function p(D,O){let N=l[D.id];N===void 0&&(b(D),N=v(D),l[D.id]=N,D.addEventListener("dispose",M));const G=O.program;s.updateUBOMapping(D,G);const F=t.render.frame;c[D.id]!==F&&(g(D),c[D.id]=F)}function v(D){const O=x();D.__bindingPointIndex=O;const N=r.createBuffer(),G=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,G,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,N),N}function x(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const O=l[D.id],N=D.uniforms,G=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let F=0,z=N.length;F<z;F++){const T=Array.isArray(N[F])?N[F]:[N[F]];for(let U=0,ut=T.length;U<ut;U++){const H=T[U];if(E(H,F,U,G)===!0){const j=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let rt=0;for(let Q=0;Q<J.length;Q++){const L=J[Q],I=w(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,j+rt,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,rt),rt+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(D,O,N,G){const F=D.value,z=O+"_"+N;if(G[z]===void 0)return typeof F=="number"||typeof F=="boolean"?G[z]=F:G[z]=F.clone(),!0;{const T=G[z];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return G[z]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function b(D){const O=D.uniforms;let N=0;const G=16;for(let z=0,T=O.length;z<T;z++){const U=Array.isArray(O[z])?O[z]:[O[z]];for(let ut=0,H=U.length;ut<H;ut++){const j=U[ut],J=Array.isArray(j.value)?j.value:[j.value];for(let rt=0,Q=J.length;rt<Q;rt++){const L=J[rt],I=w(L),lt=N%G,pt=lt%I.boundary,bt=lt+pt;N+=pt,bt!==0&&G-bt<I.storage&&(N+=G-bt),j.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=N,N+=I.storage}}}const F=N%G;return F>0&&(N+=G-F),D.__size=N,D.__cache={},this}function w(D){const O={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(O.boundary=4,O.storage=4):D.isVector2?(O.boundary=8,O.storage=8):D.isVector3||D.isColor?(O.boundary=16,O.storage=12):D.isVector4?(O.boundary=16,O.storage=16):D.isMatrix3?(O.boundary=48,O.storage=48):D.isMatrix4?(O.boundary=64,O.storage=64):D.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",D),O}function M(D){const O=D.target;O.removeEventListener("dispose",M);const N=h.indexOf(O.__bindingPointIndex);h.splice(N,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function S(){for(const D in l)r.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const XA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function WA(){return ki===null&&(ki=new jv(XA,16,16,jr,ba),ki.name="DFG_LUT",ki.minFilter=Pn,ki.magFilter=Pn,ki.wrapS=Sa,ki.wrapT=Sa,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class YA{constructor(t={}){const{canvas:i=sM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:E=fi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const w=E,M=new Set([dp,hp,fp]),S=new Set([fi,ji,ol,ll,lp,cp]),D=new Uint32Array(4),O=new Int32Array(4);let N=null,G=null;const F=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let ut=!1;this._outputColorSpace=Mi;let H=0,j=0,J=null,rt=-1,Q=null;const L=new an,I=new an;let lt=null;const pt=new Ee(0);let bt=0,P=i.width,X=i.height,xt=1,Ut=null,Ht=null;const at=new an(0,0,P,X),St=new an(0,0,P,X);let At=!1;const kt=new vp;let Qt=!1,$t=!1;const Qe=new Ye,ge=new K,pe=new an,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function je(){return J===null?xt:1}let k=s;function qe(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sp}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",ze,!1),k===null){const q="webgl2";if(k=qe(q,C),k===null)throw qe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw we("WebGLRenderer: "+C.message),C}let ye,Re,Yt,A,y,B,tt,ht,$,Ct,_t,It,Ot,yt,gt,Rt,Nt,Pt,ee,Y,Dt,wt,Bt;function Tt(){ye=new Y1(k),ye.init(),Dt=new IA(k,ye),Re=new F1(k,ye,t,Dt),Yt=new OA(k,ye),Re.reversedDepthBuffer&&g&&Yt.buffers.depth.setReversed(!0),A=new Z1(k),y=new yA,B=new PA(k,ye,Yt,y,Re,Dt,A),tt=new W1(U),ht=new tE(k),wt=new I1(k,ht),$=new q1(k,ht,A,wt),Ct=new Q1(k,$,ht,wt,A),Pt=new K1(k,Re,B),gt=new B1(y),_t=new xA(U,tt,ye,Re,wt,gt),It=new VA(U,y),Ot=new MA,yt=new CA(ye),Nt=new P1(U,tt,Yt,Ct,b,m),Rt=new LA(U,Ct,Re),Bt=new kA(k,A,Re,Yt),ee=new z1(k,ye,A),Y=new j1(k,ye,A),A.programs=_t.programs,U.capabilities=Re,U.extensions=ye,U.properties=y,U.renderLists=Ot,U.shadowMap=Rt,U.state=Yt,U.info=A}Tt(),w!==fi&&(T=new $1(w,i.width,i.height,l,c));const dt=new HA(U,k);this.xr=dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(C){C!==void 0&&(xt=C,this.setSize(P,X,!1))},this.getSize=function(C){return C.set(P,X)},this.setSize=function(C,q,ct=!0){if(dt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,X=q,i.width=Math.floor(C*xt),i.height=Math.floor(q*xt),ct===!0&&(i.style.width=C+"px",i.style.height=q+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(P*xt,X*xt).floor()},this.setDrawingBufferSize=function(C,q,ct){P=C,X=q,xt=ct,i.width=Math.floor(C*ct),i.height=Math.floor(q*ct),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(w===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,q,ct,st){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,q,ct,st),Yt.viewport(L.copy(at).multiplyScalar(xt).round())},this.getScissor=function(C){return C.copy(St)},this.setScissor=function(C,q,ct,st){C.isVector4?St.set(C.x,C.y,C.z,C.w):St.set(C,q,ct,st),Yt.scissor(I.copy(St).multiplyScalar(xt).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(C){Yt.setScissorTest(At=C)},this.setOpaqueSort=function(C){Ut=C},this.setTransparentSort=function(C){Ht=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ct=!0){let st=0;if(C){let et=!1;if(J!==null){const Lt=J.texture.format;et=M.has(Lt)}if(et){const Lt=J.texture.type,Vt=S.has(Lt),zt=Nt.getClearColor(),jt=Nt.getClearAlpha(),Kt=zt.r,ie=zt.g,oe=zt.b;Vt?(D[0]=Kt,D[1]=ie,D[2]=oe,D[3]=jt,k.clearBufferuiv(k.COLOR,0,D)):(O[0]=Kt,O[1]=ie,O[2]=oe,O[3]=jt,k.clearBufferiv(k.COLOR,0,O))}else st|=k.COLOR_BUFFER_BIT}q&&(st|=k.DEPTH_BUFFER_BIT),ct&&(st|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&k.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",ze,!1),Nt.dispose(),Ot.dispose(),yt.dispose(),y.dispose(),tt.dispose(),Ct.dispose(),wt.dispose(),Bt.dispose(),_t.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Xs),dt.removeEventListener("sessionend",Ws),zi.stop()};function Gt(C){C.preventDefault(),x_("WebGLRenderer: Context Lost."),ut=!0}function ne(){x_("WebGLRenderer: Context Restored."),ut=!1;const C=A.autoReset,q=Rt.enabled,ct=Rt.autoUpdate,st=Rt.needsUpdate,et=Rt.type;Tt(),A.autoReset=C,Rt.enabled=q,Rt.autoUpdate=ct,Rt.needsUpdate=st,Rt.type=et}function ze(C){we("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ce(C){const q=C.target;q.removeEventListener("dispose",Ce),In(q)}function In(C){Ti(C),y.remove(C)}function Ti(C){const q=y.get(C).programs;q!==void 0&&(q.forEach(function(ct){_t.releaseProgram(ct)}),C.isShaderMaterial&&_t.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ct,st,et,Lt){q===null&&(q=be);const Vt=et.isMesh&&et.matrixWorld.determinant()<0,zt=ml(C,q,ct,st,et);Yt.setMaterial(st,Vt);let jt=ct.index,Kt=1;if(st.wireframe===!0){if(jt=$.getWireframeAttribute(ct),jt===void 0)return;Kt=2}const ie=ct.drawRange,oe=ct.attributes.position;let Xt=ie.start*Kt,fe=(ie.start+ie.count)*Kt;Lt!==null&&(Xt=Math.max(Xt,Lt.start*Kt),fe=Math.min(fe,(Lt.start+Lt.count)*Kt)),jt!==null?(Xt=Math.max(Xt,0),fe=Math.min(fe,jt.count)):oe!=null&&(Xt=Math.max(Xt,0),fe=Math.min(fe,oe.count));const Je=fe-Xt;if(Je<0||Je===1/0)return;wt.setup(et,st,zt,ct,jt);let $e,Ue=ee;if(jt!==null&&($e=ht.get(jt),Ue=Y,Ue.setIndex($e)),et.isMesh)st.wireframe===!0?(Yt.setLineWidth(st.wireframeLinewidth*je()),Ue.setMode(k.LINES)):Ue.setMode(k.TRIANGLES);else if(et.isLine){let _n=st.linewidth;_n===void 0&&(_n=1),Yt.setLineWidth(_n*je()),et.isLineSegments?Ue.setMode(k.LINES):et.isLineLoop?Ue.setMode(k.LINE_LOOP):Ue.setMode(k.LINE_STRIP)}else et.isPoints?Ue.setMode(k.POINTS):et.isSprite&&Ue.setMode(k.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)uu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ue.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const _n=et._multiDrawStarts,qt=et._multiDrawCounts,zn=et._multiDrawCount,re=jt?ht.get(jt).bytesPerElement:1,Fn=y.get(st).currentProgram.getUniforms();for(let $n=0;$n<zn;$n++)Fn.setValue(k,"_gl_DrawID",$n),Ue.render(_n[$n]/re,qt[$n])}else if(et.isInstancedMesh)Ue.renderInstances(Xt,Je,et.count);else if(ct.isInstancedBufferGeometry){const _n=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,qt=Math.min(ct.instanceCount,_n);Ue.renderInstances(Xt,Je,qt)}else Ue.render(Xt,Je)};function eo(C,q,ct){C.transparent===!0&&C.side===ui&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,Aa(C,q,ct),C.side=os,C.needsUpdate=!0,Aa(C,q,ct),C.side=ui):Aa(C,q,ct)}this.compile=function(C,q,ct=null){ct===null&&(ct=C),G=yt.get(ct),G.init(q),z.push(G),ct.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(G.pushLight(et),et.castShadow&&G.pushShadow(et))}),C!==ct&&C.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(G.pushLight(et),et.castShadow&&G.pushShadow(et))}),G.setupLights();const st=new Set;return C.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Lt=et.material;if(Lt)if(Array.isArray(Lt))for(let Vt=0;Vt<Lt.length;Vt++){const zt=Lt[Vt];eo(zt,ct,et),st.add(zt)}else eo(Lt,ct,et),st.add(Lt)}),G=z.pop(),st},this.compileAsync=function(C,q,ct=null){const st=this.compile(C,q,ct);return new Promise(et=>{function Lt(){if(st.forEach(function(Vt){y.get(Vt).currentProgram.isReady()&&st.delete(Vt)}),st.size===0){et(C);return}setTimeout(Lt,10)}ye.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let ks=null;function hl(C){ks&&ks(C)}function Xs(){zi.stop()}function Ws(){zi.start()}const zi=new tx;zi.setAnimationLoop(hl),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(C){ks=C,dt.setAnimationLoop(C),C===null?zi.stop():zi.start()},dt.addEventListener("sessionstart",Xs),dt.addEventListener("sessionend",Ws),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ut===!0)return;const ct=dt.enabled===!0&&dt.isPresenting===!0,st=T!==null&&(J===null||ct)&&T.begin(U,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(q),q=dt.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,q,J),G=yt.get(C,z.length),G.init(q),z.push(G),Qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),kt.setFromProjectionMatrix(Qe,Wi,q.reversedDepth),$t=this.localClippingEnabled,Qt=gt.init(this.clippingPlanes,$t),N=Ot.get(C,F.length),N.init(),F.push(N),dt.enabled===!0&&dt.isPresenting===!0){const Vt=U.xr.getDepthSensingMesh();Vt!==null&&Ys(Vt,q,-1/0,U.sortObjects)}Ys(C,q,0,U.sortObjects),N.finish(),U.sortObjects===!0&&N.sort(Ut,Ht),se=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,se&&Nt.addToRenderList(N,C),this.info.render.frame++,Qt===!0&&gt.beginShadows();const et=G.state.shadowsArray;if(Rt.render(et,C,q),Qt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&T.hasRenderPass())===!1){const Vt=N.opaque,zt=N.transmissive;if(G.setupLights(),q.isArrayCamera){const jt=q.cameras;if(zt.length>0)for(let Kt=0,ie=jt.length;Kt<ie;Kt++){const oe=jt[Kt];ln(Vt,zt,C,oe)}se&&Nt.render(C);for(let Kt=0,ie=jt.length;Kt<ie;Kt++){const oe=jt[Kt];Ai(N,C,oe,oe.viewport)}}else zt.length>0&&ln(Vt,zt,C,q),se&&Nt.render(C),Ai(N,C,q)}J!==null&&j===0&&(B.updateMultisampleRenderTarget(J),B.updateRenderTargetMipmap(J)),st&&T.end(U),C.isScene===!0&&C.onAfterRender(U,C,q),wt.resetDefaultState(),rt=-1,Q=null,z.pop(),z.length>0?(G=z[z.length-1],Qt===!0&&gt.setGlobalState(U.clippingPlanes,G.state.camera)):G=null,F.pop(),F.length>0?N=F[F.length-1]:N=null};function Ys(C,q,ct,st){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)G.pushLight(C),C.castShadow&&G.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||kt.intersectsSprite(C)){st&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Qe);const Vt=Ct.update(C),zt=C.material;zt.visible&&N.push(C,Vt,zt,ct,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||kt.intersectsObject(C))){const Vt=Ct.update(C),zt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),pe.copy(Vt.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(Qe)),Array.isArray(zt)){const jt=Vt.groups;for(let Kt=0,ie=jt.length;Kt<ie;Kt++){const oe=jt[Kt],Xt=zt[oe.materialIndex];Xt&&Xt.visible&&N.push(C,Vt,Xt,ct,pe.z,oe)}}else zt.visible&&N.push(C,Vt,zt,ct,pe.z,null)}}const Lt=C.children;for(let Vt=0,zt=Lt.length;Vt<zt;Vt++)Ys(Lt[Vt],q,ct,st)}function Ai(C,q,ct,st){const{opaque:et,transmissive:Lt,transparent:Vt}=C;G.setupLightsView(ct),Qt===!0&&gt.setGlobalState(U.clippingPlanes,ct),st&&Yt.viewport(L.copy(st)),et.length>0&&gn(et,q,ct),Lt.length>0&&gn(Lt,q,ct),Vt.length>0&&gn(Vt,q,ct),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function ln(C,q,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[st.id]===void 0){const Xt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[st.id]=new qi(1,1,{generateMipmaps:!0,type:Xt?ba:fi,minFilter:zs,samples:Math.max(4,Re.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Lt=G.state.transmissionRenderTarget[st.id],Vt=st.viewport||L;Lt.setSize(Vt.z*U.transmissionResolutionScale,Vt.w*U.transmissionResolutionScale);const zt=U.getRenderTarget(),jt=U.getActiveCubeFace(),Kt=U.getActiveMipmapLevel();U.setRenderTarget(Lt),U.getClearColor(pt),bt=U.getClearAlpha(),bt<1&&U.setClearColor(16777215,.5),U.clear(),se&&Nt.render(ct);const ie=U.toneMapping;U.toneMapping=Yi;const oe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),G.setupLightsView(st),Qt===!0&&gt.setGlobalState(U.clippingPlanes,st),gn(C,ct,st),B.updateMultisampleRenderTarget(Lt),B.updateRenderTargetMipmap(Lt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let fe=0,Je=q.length;fe<Je;fe++){const $e=q[fe],{object:Ue,geometry:_n,material:qt,group:zn}=$e;if(qt.side===ui&&Ue.layers.test(st.layers)){const re=qt.side;qt.side=Jn,qt.needsUpdate=!0,Qi(Ue,ct,st,_n,qt,zn),qt.side=re,qt.needsUpdate=!0,Xt=!0}}Xt===!0&&(B.updateMultisampleRenderTarget(Lt),B.updateRenderTargetMipmap(Lt))}U.setRenderTarget(zt,jt,Kt),U.setClearColor(pt,bt),oe!==void 0&&(st.viewport=oe),U.toneMapping=ie}function gn(C,q,ct){const st=q.isScene===!0?q.overrideMaterial:null;for(let et=0,Lt=C.length;et<Lt;et++){const Vt=C[et],{object:zt,geometry:jt,group:Kt}=Vt;let ie=Vt.material;ie.allowOverride===!0&&st!==null&&(ie=st),zt.layers.test(ct.layers)&&Qi(zt,q,ct,jt,ie,Kt)}}function Qi(C,q,ct,st,et,Lt){C.onBeforeRender(U,q,ct,st,et,Lt),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),et.onBeforeRender(U,q,ct,st,C,Lt),et.transparent===!0&&et.side===ui&&et.forceSinglePass===!1?(et.side=Jn,et.needsUpdate=!0,U.renderBufferDirect(ct,q,st,et,C,Lt),et.side=os,et.needsUpdate=!0,U.renderBufferDirect(ct,q,st,et,C,Lt),et.side=ui):U.renderBufferDirect(ct,q,st,et,C,Lt),C.onAfterRender(U,q,ct,st,et,Lt)}function Aa(C,q,ct){q.isScene!==!0&&(q=be);const st=y.get(C),et=G.state.lights,Lt=G.state.shadowsArray,Vt=et.state.version,zt=_t.getParameters(C,et.state,Lt,q,ct),jt=_t.getProgramCacheKey(zt);let Kt=st.programs;st.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,st.fog=q.fog;const ie=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;st.envMap=tt.get(C.envMap||st.environment,ie),st.envMapRotation=st.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Kt===void 0&&(C.addEventListener("dispose",Ce),Kt=new Map,st.programs=Kt);let oe=Kt.get(jt);if(oe!==void 0){if(st.currentProgram===oe&&st.lightsStateVersion===Vt)return pl(C,zt),oe}else zt.uniforms=_t.getUniforms(C),C.onBeforeCompile(zt,U),oe=_t.acquireProgram(zt,jt),Kt.set(jt,oe),st.uniforms=zt.uniforms;const Xt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xt.clippingPlanes=gt.uniform),pl(C,zt),st.needsLights=no(C),st.lightsStateVersion=Vt,st.needsLights&&(Xt.ambientLightColor.value=et.state.ambient,Xt.lightProbe.value=et.state.probe,Xt.directionalLights.value=et.state.directional,Xt.directionalLightShadows.value=et.state.directionalShadow,Xt.spotLights.value=et.state.spot,Xt.spotLightShadows.value=et.state.spotShadow,Xt.rectAreaLights.value=et.state.rectArea,Xt.ltc_1.value=et.state.rectAreaLTC1,Xt.ltc_2.value=et.state.rectAreaLTC2,Xt.pointLights.value=et.state.point,Xt.pointLightShadows.value=et.state.pointShadow,Xt.hemisphereLights.value=et.state.hemi,Xt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Xt.spotLightMatrix.value=et.state.spotLightMatrix,Xt.spotLightMap.value=et.state.spotLightMap,Xt.pointShadowMatrix.value=et.state.pointShadowMatrix),st.currentProgram=oe,st.uniformsList=null,oe}function dl(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=ou.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function pl(C,q){const ct=y.get(C);ct.outputColorSpace=q.outputColorSpace,ct.batching=q.batching,ct.batchingColor=q.batchingColor,ct.instancing=q.instancing,ct.instancingColor=q.instancingColor,ct.instancingMorph=q.instancingMorph,ct.skinning=q.skinning,ct.morphTargets=q.morphTargets,ct.morphNormals=q.morphNormals,ct.morphColors=q.morphColors,ct.morphTargetsCount=q.morphTargetsCount,ct.numClippingPlanes=q.numClippingPlanes,ct.numIntersection=q.numClipIntersection,ct.vertexAlphas=q.vertexAlphas,ct.vertexTangents=q.vertexTangents,ct.toneMapping=q.toneMapping}function ml(C,q,ct,st,et){q.isScene!==!0&&(q=be),B.resetTextureUnits();const Lt=q.fog,Vt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?q.environment:null,zt=J===null?U.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zr,jt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Kt=tt.get(st.envMap||Vt,jt),ie=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,oe=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Xt=!!ct.morphAttributes.position,fe=!!ct.morphAttributes.normal,Je=!!ct.morphAttributes.color;let $e=Yi;st.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&($e=U.toneMapping);const Ue=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,_n=Ue!==void 0?Ue.length:0,qt=y.get(st),zn=G.state.lights;if(Qt===!0&&($t===!0||C!==Q)){const un=C===Q&&st.id===rt;gt.setState(st,C,un)}let re=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==zn.state.version||qt.outputColorSpace!==zt||et.isBatchedMesh&&qt.batching===!1||!et.isBatchedMesh&&qt.batching===!0||et.isBatchedMesh&&qt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&qt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&qt.instancing===!1||!et.isInstancedMesh&&qt.instancing===!0||et.isSkinnedMesh&&qt.skinning===!1||!et.isSkinnedMesh&&qt.skinning===!0||et.isInstancedMesh&&qt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&qt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&qt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&qt.instancingMorph===!1&&et.morphTexture!==null||qt.envMap!==Kt||st.fog===!0&&qt.fog!==Lt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==gt.numPlanes||qt.numIntersection!==gt.numIntersection)||qt.vertexAlphas!==ie||qt.vertexTangents!==oe||qt.morphTargets!==Xt||qt.morphNormals!==fe||qt.morphColors!==Je||qt.toneMapping!==$e||qt.morphTargetsCount!==_n)&&(re=!0):(re=!0,qt.__version=st.version);let Fn=qt.currentProgram;re===!0&&(Fn=Aa(st,q,et));let $n=!1,Ri=!1,ti=!1;const Ie=Fn.getUniforms(),cn=qt.uniforms;if(Yt.useProgram(Fn.program)&&($n=!0,Ri=!0,ti=!0),st.id!==rt&&(rt=st.id,Ri=!0),$n||Q!==C){Yt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ie.setValue(k,"projectionMatrix",C.projectionMatrix),Ie.setValue(k,"viewMatrix",C.matrixWorldInverse);const Ci=Ie.map.cameraPosition;Ci!==void 0&&Ci.setValue(k,ge.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&Ie.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ie.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,Ri=!0,ti=!0)}if(qt.needsLights&&(zn.state.directionalShadowMap.length>0&&Ie.setValue(k,"directionalShadowMap",zn.state.directionalShadowMap,B),zn.state.spotShadowMap.length>0&&Ie.setValue(k,"spotShadowMap",zn.state.spotShadowMap,B),zn.state.pointShadowMap.length>0&&Ie.setValue(k,"pointShadowMap",zn.state.pointShadowMap,B)),et.isSkinnedMesh){Ie.setOptional(k,et,"bindMatrix"),Ie.setOptional(k,et,"bindMatrixInverse");const un=et.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ie.setValue(k,"boneTexture",un.boneTexture,B))}et.isBatchedMesh&&(Ie.setOptional(k,et,"batchingTexture"),Ie.setValue(k,"batchingTexture",et._matricesTexture,B),Ie.setOptional(k,et,"batchingIdTexture"),Ie.setValue(k,"batchingIdTexture",et._indirectTexture,B),Ie.setOptional(k,et,"batchingColorTexture"),et._colorsTexture!==null&&Ie.setValue(k,"batchingColorTexture",et._colorsTexture,B));const Bn=ct.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Pt.update(et,ct,Fn),(Ri||qt.receiveShadow!==et.receiveShadow)&&(qt.receiveShadow=et.receiveShadow,Ie.setValue(k,"receiveShadow",et.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&q.environment!==null&&(cn.envMapIntensity.value=q.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=WA()),Ri&&(Ie.setValue(k,"toneMappingExposure",U.toneMappingExposure),qt.needsLights&&us(cn,ti),Lt&&st.fog===!0&&It.refreshFogUniforms(cn,Lt),It.refreshMaterialUniforms(cn,st,xt,X,G.state.transmissionRenderTarget[C.id]),ou.upload(k,dl(qt),cn,B)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ou.upload(k,dl(qt),cn,B),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ie.setValue(k,"center",et.center),Ie.setValue(k,"modelViewMatrix",et.modelViewMatrix),Ie.setValue(k,"normalMatrix",et.normalMatrix),Ie.setValue(k,"modelMatrix",et.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const un=st.uniformsGroups;for(let Ci=0,Ji=un.length;Ci<Ji;Ci++){const qs=un[Ci];Bt.update(qs,Fn),Bt.bind(qs,Fn)}}return Fn}function us(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function no(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,q,ct){const st=y.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),y.get(C.texture).__webglTexture=q,y.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ct=y.get(C);ct.__webglFramebuffer=q,ct.__useDefaultFramebuffer=q===void 0};const Ra=k.createFramebuffer();this.setRenderTarget=function(C,q=0,ct=0){J=C,H=q,j=ct;let st=null,et=!1,Lt=!1;if(C){const zt=y.get(C);if(zt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(k.FRAMEBUFFER,zt.__webglFramebuffer),L.copy(C.viewport),I.copy(C.scissor),lt=C.scissorTest,Yt.viewport(L),Yt.scissor(I),Yt.setScissorTest(lt),rt=-1;return}else if(zt.__webglFramebuffer===void 0)B.setupRenderTarget(C);else if(zt.__hasExternalTextures)B.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ie=C.depthTexture;if(zt.__boundDepthTexture!==ie){if(ie!==null&&y.has(ie)&&(C.width!==ie.image.width||C.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(C)}}const jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Lt=!0);const Kt=y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Kt[q])?st=Kt[q][ct]:st=Kt[q],et=!0):C.samples>0&&B.useMultisampledRTT(C)===!1?st=y.get(C).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[ct]:st=Kt,L.copy(C.viewport),I.copy(C.scissor),lt=C.scissorTest}else L.copy(at).multiplyScalar(xt).floor(),I.copy(St).multiplyScalar(xt).floor(),lt=At;if(ct!==0&&(st=Ra),Yt.bindFramebuffer(k.FRAMEBUFFER,st)&&Yt.drawBuffers(C,st),Yt.viewport(L),Yt.scissor(I),Yt.setScissorTest(lt),et){const zt=y.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,ct)}else if(Lt){const zt=q;for(let jt=0;jt<C.textures.length;jt++){const Kt=y.get(C.textures[jt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+jt,Kt.__webglTexture,ct,zt)}}else if(C!==null&&ct!==0){const zt=y.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zt.__webglTexture,ct)}rt=-1},this.readRenderTargetPixels=function(C,q,ct,st,et,Lt,Vt,zt=0){if(!(C&&C.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(jt=jt[Vt]),jt){Yt.bindFramebuffer(k.FRAMEBUFFER,jt);try{const Kt=C.textures[zt],ie=Kt.format,oe=Kt.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+zt),!Re.textureFormatReadable(ie)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(oe)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-st&&ct>=0&&ct<=C.height-et&&k.readPixels(q,ct,st,et,Dt.convert(ie),Dt.convert(oe),Lt)}finally{const Kt=J!==null?y.get(J).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(C,q,ct,st,et,Lt,Vt,zt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(jt=jt[Vt]),jt)if(q>=0&&q<=C.width-st&&ct>=0&&ct<=C.height-et){Yt.bindFramebuffer(k.FRAMEBUFFER,jt);const Kt=C.textures[zt],ie=Kt.format,oe=Kt.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+zt),!Re.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Xt),k.bufferData(k.PIXEL_PACK_BUFFER,Lt.byteLength,k.STREAM_READ),k.readPixels(q,ct,st,et,Dt.convert(ie),Dt.convert(oe),0);const fe=J!==null?y.get(J).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,fe);const Je=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await rM(k,Je,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Xt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Lt),k.deleteBuffer(Xt),k.deleteSync(Je),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ct=0){const st=Math.pow(2,-ct),et=Math.floor(C.image.width*st),Lt=Math.floor(C.image.height*st),Vt=q!==null?q.x:0,zt=q!==null?q.y:0;B.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ct,0,0,Vt,zt,et,Lt),Yt.unbindTexture()};const Ca=k.createFramebuffer(),fs=k.createFramebuffer();this.copyTextureToTexture=function(C,q,ct=null,st=null,et=0,Lt=0){let Vt,zt,jt,Kt,ie,oe,Xt,fe,Je;const $e=C.isCompressedTexture?C.mipmaps[Lt]:C.image;if(ct!==null)Vt=ct.max.x-ct.min.x,zt=ct.max.y-ct.min.y,jt=ct.isBox3?ct.max.z-ct.min.z:1,Kt=ct.min.x,ie=ct.min.y,oe=ct.isBox3?ct.min.z:0;else{const cn=Math.pow(2,-et);Vt=Math.floor($e.width*cn),zt=Math.floor($e.height*cn),C.isDataArrayTexture?jt=$e.depth:C.isData3DTexture?jt=Math.floor($e.depth*cn):jt=1,Kt=0,ie=0,oe=0}st!==null?(Xt=st.x,fe=st.y,Je=st.z):(Xt=0,fe=0,Je=0);const Ue=Dt.convert(q.format),_n=Dt.convert(q.type);let qt;q.isData3DTexture?(B.setTexture3D(q,0),qt=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(B.setTexture2DArray(q,0),qt=k.TEXTURE_2D_ARRAY):(B.setTexture2D(q,0),qt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const zn=k.getParameter(k.UNPACK_ROW_LENGTH),re=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Fn=k.getParameter(k.UNPACK_SKIP_PIXELS),$n=k.getParameter(k.UNPACK_SKIP_ROWS),Ri=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,$e.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Kt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ie),k.pixelStorei(k.UNPACK_SKIP_IMAGES,oe);const ti=C.isDataArrayTexture||C.isData3DTexture,Ie=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const cn=y.get(C),Bn=y.get(q),un=y.get(cn.__renderTarget),Ci=y.get(Bn.__renderTarget);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,un.__webglFramebuffer),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ji=0;Ji<jt;Ji++)ti&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,y.get(C).__webglTexture,et,oe+Ji),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,y.get(q).__webglTexture,Lt,Je+Ji)),k.blitFramebuffer(Kt,ie,Vt,zt,Xt,fe,Vt,zt,k.DEPTH_BUFFER_BIT,k.NEAREST);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(et!==0||C.isRenderTargetTexture||y.has(C)){const cn=y.get(C),Bn=y.get(q);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,Ca),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,fs);for(let un=0;un<jt;un++)ti?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,cn.__webglTexture,et,oe+un):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,cn.__webglTexture,et),Ie?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Bn.__webglTexture,Lt,Je+un):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Bn.__webglTexture,Lt),et!==0?k.blitFramebuffer(Kt,ie,Vt,zt,Xt,fe,Vt,zt,k.COLOR_BUFFER_BIT,k.NEAREST):Ie?k.copyTexSubImage3D(qt,Lt,Xt,fe,Je+un,Kt,ie,Vt,zt):k.copyTexSubImage2D(qt,Lt,Xt,fe,Kt,ie,Vt,zt);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ie?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(qt,Lt,Xt,fe,Je,Vt,zt,jt,Ue,_n,$e.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(qt,Lt,Xt,fe,Je,Vt,zt,jt,Ue,$e.data):k.texSubImage3D(qt,Lt,Xt,fe,Je,Vt,zt,jt,Ue,_n,$e):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Lt,Xt,fe,Vt,zt,Ue,_n,$e.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Lt,Xt,fe,$e.width,$e.height,Ue,$e.data):k.texSubImage2D(k.TEXTURE_2D,Lt,Xt,fe,Vt,zt,Ue,_n,$e);k.pixelStorei(k.UNPACK_ROW_LENGTH,zn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,re),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fn),k.pixelStorei(k.UNPACK_SKIP_ROWS,$n),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ri),Lt===0&&q.generateMipmaps&&k.generateMipmap(qt),Yt.unbindTexture()},this.initRenderTarget=function(C){y.get(C).__webglFramebuffer===void 0&&B.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?B.setTextureCube(C,0):C.isData3DTexture?B.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?B.setTexture2DArray(C,0):B.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){H=0,j=0,J=null,Yt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const Sv={type:"change"},Mp={type:"start"},rx={type:"end"},$c=new pu,Mv=new as,qA=Math.cos(70*cM.DEG2RAD),xn=new K,Qn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ld=1e-6;class jA extends JM{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new ls,this._lastTargetPosition=new K,this._quat=new ls().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Z_,this._sphericalDelta=new Z_,this._scale=1,this._panOffset=new K,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new K,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KA.bind(this),this._onPointerDown=ZA.bind(this),this._onPointerUp=QA.bind(this),this._onContextMenu=a2.bind(this),this._onMouseWheel=t2.bind(this),this._onKeyDown=e2.bind(this),this._onTouchStart=n2.bind(this),this._onTouchMove=i2.bind(this),this._onMouseDown=JA.bind(this),this._onMouseMove=$A.bind(this),this._interceptControlDown=s2.bind(this),this._interceptControlUp=r2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sv),this.update(),this.state=Xe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;xn.copy(i).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),l<-Math.PI?l+=Qn:l>Math.PI&&(l-=Qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=xn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):($c.origin.copy(this.object.position),$c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($c.direction))<qA?this.object.lookAt(this.target):(Mv.setFromNormalAndCoplanarPoint(this.object.up,this.target),$c.intersectPlane(Mv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ld||this._lastTargetPosition.distanceToSquared(this.target)>ld?(this.dispatchEvent(Sv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qn/60*this.autoRotateSpeed*t:Qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){xn.setFromMatrixColumn(i,0),xn.multiplyScalar(-t),this._panOffset.add(xn)}_panUp(t,i){this.screenSpacePanning===!0?xn.setFromMatrixColumn(i,1):(xn.setFromMatrixColumn(i,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(t),this._panOffset.add(xn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;xn.copy(l).sub(this.target);let c=xn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function ZA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function KA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function QA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rx),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function JA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Mp)}function $A(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function t2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(Mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(rx))}function e2(r){this.enabled!==!1&&this._handleKeyDown(r)}function n2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Mp)}function i2(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function a2(r){this.enabled!==!1&&r.preventDefault()}function s2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Ev=r=>{const t=l2(r);return t.charAt(0).toUpperCase()+t.slice(1)},ox=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),c2=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=Ae.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Ae.createElement("svg",{ref:m,...u2,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:ox("lucide",l),...!c&&!c2(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,v])=>Ae.createElement(p,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=(r,t)=>{const i=Ae.forwardRef(({className:s,...l},c)=>Ae.createElement(f2,{ref:c,iconNode:t,className:ox(`lucide-${o2(Ev(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Ev(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],bv=hi("box",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],p2=hi("download",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],g2=hi("eye",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],cd=hi("grid-3x3",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],x2=hi("info",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],S2=hi("layers",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],E2=hi("maximize",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],T2=hi("paintbrush",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],R2=hi("redo",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],w2=hi("settings",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],U2=hi("trash-2",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],L2=hi("undo",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],P2=hi("upload",O2);class I2{constructor(t){this.offset=0,this.view=new DataView(t)}readTag(){const t=String.fromCharCode(this.view.getUint8(this.offset),this.view.getUint8(this.offset+1),this.view.getUint8(this.offset+2),this.view.getUint8(this.offset+3));return this.offset+=4,t}readUint32(){const t=this.view.getUint32(this.offset,!0);return this.offset+=4,t}readFloat32(){const t=this.view.getFloat32(this.offset,!0);return this.offset+=4,t}parse(){const t=this.readTag();if(console.log("MDX Magic:",t),t!=="MDLX")throw new Error("Not a valid MDX file");const i={geosets:[]};for(;this.offset<this.view.byteLength;){const s=this.readTag(),l=this.readUint32(),c=this.offset+l;console.log(`Found chunk: ${s}, size: ${l}`),s==="GEOS"?this.parseGeosets(c,i):this.offset=c}return console.log("Parsed model geosets:",i.geosets.length),i}parseGeosets(t,i){for(;this.offset<t;){const s=this.readUint32(),l=this.offset-4+s;console.log(`Parsing Geoset, size: ${s}, end: ${l}`);let c=new Float32Array(0),h=new Uint16Array(0);for(;this.offset<l;){const d=this.readTag();if(d==="VRTX"){const m=this.readUint32();c=new Float32Array(m*3);for(let p=0;p<m*3;p++)c[p]=this.readFloat32()}else if(d==="PVTX"){const m=this.readUint32();h=new Uint16Array(m);for(let p=0;p<m;p++)h[p]=this.view.getUint16(this.offset,!0),this.offset+=2}else if(d==="NRMS"){const m=this.readUint32();this.offset+=m*3*4}else if(d==="PTYP"){const m=this.readUint32();this.offset+=m*4}else if(d==="PCNT"){const m=this.readUint32();this.offset+=m*4}else if(d==="GNDX"){const m=this.readUint32();this.offset+=m}else if(d==="MTLS")this.offset+=4;else if(d==="SEGS")this.offset+=4;else if(d==="EXTS")this.offset+=28;else if(d==="UVAS"){const m=this.readUint32();for(let p=0;p<m;p++){this.readTag();const v=this.readUint32();this.offset+=v*2*4}}else if(d==="VGRPS"){const m=this.readUint32();this.offset+=m*4}else if(d==="GSTR"){const m=this.readUint32();this.offset+=m*4}else if(d==="GMSH"){const m=this.readUint32();this.offset+=m*4}else{console.warn(`Unknown GEOS sub-tag: ${d} at offset ${this.offset-4}. Attempting to skip to next geoset.`);break}}c.length>0&&h.length>0&&i.geosets.push({vertices:c,faces:h}),this.offset=l}}}function z2(r,t,i){const s=new Uint8Array(18);s[2]=2,s[12]=r&255,s[13]=r>>8&255,s[14]=t&255,s[15]=t>>8&255,s[16]=24,s[17]=0;const l=new Uint8Array(r*t*3);for(let m=0;m<t;m++){const p=m,v=t-1-m;for(let x=0;x<r;x++){const g=(p*r+x)*4,E=(v*r+x)*3,b=i[g],w=i[g+1],M=i[g+2];l[E]=M,l[E+1]=w,l[E+2]=b}}const c=new Uint8Array(26),h="TRUEVISION-XFILE.";for(let m=0;m<h.length;m++)c[8+m]=h.charCodeAt(m);const d=new Uint8Array(s.length+l.length+c.length);return d.set(s,0),d.set(l,s.length),d.set(c,s.length+l.length),new Blob([d],{type:"image/x-tga"})}const Oe=32,Gr=16,lx=Gr*Gr,tu=lx/2,cx=0,ux=16777215,F2=[{label:"White",value:16777215,description:"No walk, no fly, no build"},{label:"Black",value:0,description:"Walk, fly, build allowed"},{label:"Red",value:16711680,description:"No walk"},{label:"Green",value:65280,description:"No fly"},{label:"Blue",value:255,description:"No build"},{label:"Yellow",value:16776960,description:"No walk, no fly"},{label:"Magenta",value:16711935,description:"No walk, no build"},{label:"Cyan",value:65535,description:"No fly, no build"}];function B2(r,t){const[i,s,l]=t,c=(x,g,E)=>(x.x-E.x)*(g.y-E.y)-(g.x-E.x)*(x.y-E.y),h=c(r,i,s),d=c(r,s,l),m=c(r,l,i),p=h<0||d<0||m<0,v=h>0||d>0||m>0;return!(p&&v)}function H2(r){var h;const t=r.length,i=((h=r[0])==null?void 0:h.length)??0;if(t===0||i===0)return r;const s=Array.from({length:t},()=>Array(i).fill(!1)),l=[],c=(d,m)=>{d<0||d>=t||m<0||m>=i||s[d][m]||r[d][m]||(s[d][m]=!0,l.push({r:d,c:m}))};for(let d=0;d<i;d++)c(0,d),c(t-1,d);for(let d=0;d<t;d++)c(d,0),c(d,i-1);for(;l.length>0;){const d=l.shift();c(d.r-1,d.c),c(d.r+1,d.c),c(d.r,d.c-1),c(d.r,d.c+1)}return r.map((d,m)=>d.map((p,v)=>p||!s[m][v]))}function fx(r,t,i,s){const l=t*Oe/2,c=i*Oe/2,h=Array.from({length:i},()=>Array(t).fill(0)),d=Array.from({length:i},()=>Array.from({length:t},()=>new Uint8Array(lx)));r.geosets.forEach(p=>{const v=p.vertices,x=p.faces;for(let g=0;g<x.length;g+=3){const E=x[g]*3,b=x[g+1]*3,w=x[g+2]*3,M={x:v[E],y:v[E+1],z:v[E+2]},S={x:v[b],y:v[b+1],z:v[b+2]},D={x:v[w],y:v[w+1],z:v[w+2]};if(M.z>=s&&S.z>=s&&D.z>=s)continue;const O=Math.min(M.x,S.x,D.x),N=Math.max(M.x,S.x,D.x),G=Math.min(M.y,S.y,D.y),F=Math.max(M.y,S.y,D.y),z=[{x:M.x,y:M.y},{x:S.x,y:S.y},{x:D.x,y:D.y}],T=Math.floor((O+l)/Oe),U=Math.floor((N+l)/Oe),ut=Math.floor((G+c)/Oe),H=Math.floor((F+c)/Oe);for(let j=Math.max(0,ut);j<=Math.min(i-1,H);j++)for(let J=Math.max(0,T);J<=Math.min(t-1,U);J++){if(h[j][J]>=tu)continue;const rt=-l+J*Oe,Q=-c+j*Oe,L=d[j][J],I=Oe/Gr;for(let lt=0;lt<Gr;lt++){for(let pt=0;pt<Gr;pt++){const bt=lt*Gr+pt;if(L[bt]===1)continue;const P={x:rt+(pt+.5)*I,y:Q+(lt+.5)*I};if(B2(P,z)&&(L[bt]=1,h[j][J]+=1,h[j][J]>=tu))break}if(h[j][J]>=tu)break}}}});const m=h.map(p=>p.map(v=>v>=tu));return H2(m)}function Vr(r){const t=Math.max(2,r);return t%2===0?t:t+1}function ud(r,t){return Array.from({length:t},()=>Array(r).fill(cx))}function G2(r,t){return r.map(i=>i.map(s=>s?t:cx))}function Tv(r,t,i,s){return G2(fx(r,t,i,s),ux)}function Av(r){return`#${r.toString(16).padStart(6,"0")}`}function V2(r){const t=[];return(r>>16&255)===255&&t.push("Walk"),(r>>8&255)===255&&t.push("Fly"),(r&255)===255&&t.push("Build"),t.length===0?"None":t.join(" / ")}function Rv(r,t){let i=1/0,s=-1/0,l=1/0,c=-1/0;if(r.geosets.forEach(O=>{const N=O.vertices;for(let G=0;G<N.length;G+=3){if(N[G+2]>=t)continue;const z=N[G],T=N[G+1];i=Math.min(i,z),s=Math.max(s,z),l=Math.min(l,T),c=Math.max(c,T)}}),!Number.isFinite(i)||!Number.isFinite(l))return{width:2,height:2};const h=Vr(Math.ceil(Math.max(Math.abs(i),Math.abs(s))*2/Oe)),d=Vr(Math.ceil(Math.max(Math.abs(l),Math.abs(c))*2/Oe)),m=fx(r,h,d,t);let p=1/0,v=-1/0,x=1/0,g=-1/0;for(let O=0;O<d;O++)for(let N=0;N<h;N++)m[O][N]&&(p=Math.min(p,N),v=Math.max(v,N),x=Math.min(x,O),g=Math.max(g,O));if(!Number.isFinite(p)||!Number.isFinite(x))return{width:2,height:2};const E=h/2,b=d/2,w=E-p,M=v-E+1,S=b-x,D=g-b+1;return{width:Vr(Math.max(w,M)*2),height:Vr(Math.max(S,D)*2)}}function k2(r){if(r.length===0||r[0].length===0)return[];const t=r.length,i=r[0].length,s=Array.from({length:i},()=>Array(t));for(let l=0;l<t;l++)for(let c=0;c<i;c++)s[c][t-1-l]=r[l][c];return s}function X2(r,t){const i=[],s=(l,c)=>{const h=c.z-l.z;if(Math.abs(h)<1e-6)return null;const d=(t-l.z)/h;return d<0||d>1?null:{x:l.x+(c.x-l.x)*d,y:l.y+(c.y-l.y)*d,z:t}};return r.geosets.forEach(l=>{const c=l.vertices,h=l.faces;for(let d=0;d<h.length;d+=3){const m=[h[d],h[d+1],h[d+2]].map(x=>{const g=x*3;return{x:c[g],y:c[g+1],z:c[g+2]}}),p=[];[[0,1],[1,2],[2,0]].forEach(([x,g])=>{const E=s(m[x],m[g]);if(!E)return;p.some(w=>Math.abs(w.x-E.x)<1e-4&&Math.abs(w.y-E.y)<1e-4&&Math.abs(w.z-E.z)<1e-4)||p.push(E)}),p.length===2&&p.forEach(x=>{i.push(-x.y,x.z,x.x)})}}),new Float32Array(i)}function W2(r){let t=-1/0;return r.geosets.forEach(i=>{const s=i.vertices;for(let l=2;l<s.length;l+=3)t=Math.max(t,s[l])}),Number.isFinite(t)?t:0}function Y2(r){let t=1/0,i=-1/0;return r.geosets.forEach(s=>{const l=s.vertices;for(let c=2;c<l.length;c+=3)t=Math.min(t,l[c]),i=Math.max(i,l[c])}),!Number.isFinite(t)||!Number.isFinite(i)?{minZ:0,maxZ:0}:{minZ:t,maxZ:i}}function q2(){var Re,Yt;const[r,t]=Ae.useState(null),[i,s]=Ae.useState(""),[l,c]=Ae.useState(100),[h,d]=Ae.useState(4),[m,p]=Ae.useState(4),[v,x]=Ae.useState(!1),[g,E]=Ae.useState(()=>ud(4,4)),[b,w]=Ae.useState(!0),[M,S]=Ae.useState(.1),[D,O]=Ae.useState(ux),[N,G]=Ae.useState([]),[F,z]=Ae.useState(-1),T=Ae.useMemo(()=>k2(g),[g]),U=Ae.useMemo(()=>r?Y2(r):{minZ:0,maxZ:0},[r]),ut=Ae.useMemo(()=>{const{minZ:A,maxZ:y}=U;return y<=A?y:A+(y-A)*l/100},[l,U]),H=m,j=h,J=((Re=g[0])==null?void 0:Re.length)??0,rt=g.length,Q=((Yt=T[0])==null?void 0:Yt.length)??0,L=T.length,I=Ae.useRef(null),lt=Ae.useRef(!1),pt=Ae.useRef(0),bt=Ae.useRef(0),P=Ae.useRef(!1),X=Ae.useRef(null);Ae.useEffect(()=>{if(!I.current)return;const A=new EM;A.background=new Ee(1710618);const y=new Ei(75,I.current.clientWidth/I.current.clientHeight,.1,1e4);y.up.set(0,0,-1),y.position.set(0,400,.001);const B=new YA({antialias:!0});B.setSize(I.current.clientWidth,I.current.clientHeight),I.current.appendChild(B.domElement);const tt=new jA(y,B.domElement);tt.enableDamping=!0;const ht=new jM(16777215,.6);A.add(ht);const $=new qM(16777215,.8);$.position.set(1,1,1),A.add($);const Ct=new Bs;A.add(Ct);const _t=new Bs;A.add(_t);const It=new wn(new Hs(Oe,Oe),new Ps({color:65280,transparent:!0,opacity:.4,side:ui}));It.rotation.x=-Math.PI/2,It.position.y=.1,It.visible=!1,A.add(It);const Ot=new QM,yt=new ce,gt=new K_(1024,32,4473924,2236962);A.add(gt);const Rt=new Hs(1,1),Nt=new Ps({color:65535,transparent:!0,opacity:0,side:ui,wireframe:!1}),Pt=new wn(Rt,Nt);Pt.rotation.x=-Math.PI/2,Pt.position.y=.01,A.add(Pt);const ee=new ru(new PM(Rt),new rl({color:65535,linewidth:2}));ee.rotation.x=-Math.PI/2,ee.position.y=.06,A.add(ee);const Y=new ru(new Un,new rl({color:16723245}));Y.renderOrder=4,A.add(Y);const Dt=new Bs,wt=new wn(new yp(28,2.5,12,48),new Ps({color:16723245}));wt.rotation.x=Math.PI/2;const Bt=new wn(new xp(1.5,1.5,24,12),new Ps({color:16723245}));Bt.position.y=12,Dt.add(wt),Dt.add(Bt),Dt.renderOrder=5,A.add(Dt),X.current={scene:A,camera:y,renderer:B,controls:tt,modelGroup:Ct,gridHelper:gt,cutoffHandle:Dt,cutoffLines:Y,boundaryMesh:Pt,boundaryEdges:ee,pathingGroup:_t,pathingMesh:null,brushCursor:It,raycaster:Ot,mouse:yt};const Tt=()=>{requestAnimationFrame(Tt),tt.update(),B.render(A,y)};Tt();const dt=()=>{if(!I.current||!X.current)return;const{camera:Gt,renderer:ne}=X.current;Gt.aspect=I.current.clientWidth/I.current.clientHeight,Gt.updateProjectionMatrix(),ne.setSize(I.current.clientWidth,I.current.clientHeight)};return window.addEventListener("resize",dt),()=>{window.removeEventListener("resize",dt),B.dispose()}},[]),Ae.useEffect(()=>{if(!X.current)return;const{cutoffLines:A,cutoffHandle:y}=X.current,B=A.geometry;if(y.position.set(0,ut,0),r){const tt=X2(r,ut);B.setAttribute("position",new Vn(tt,3)),B.computeBoundingSphere()}else B.setAttribute("position",new Vn(new Float32Array(0),3))},[ut,r]),Ae.useEffect(()=>{if(X.current){const{scene:A,gridHelper:y,boundaryMesh:B,boundaryEdges:tt}=X.current;A.remove(y);const ht=Math.max(h,m)*Oe,$=new K_(ht*2,Math.max(h,m)*2,4473924,2236962);X.current.gridHelper=$,A.add($);const Ct=H*Oe,_t=j*Oe;B.scale.set(Ct,_t,1),tt.scale.set(Ct,_t,1)}},[H,j,h,m]),Ae.useEffect(()=>{r&&k(r)},[b,M]),Ae.useEffect(()=>{if(!X.current)return;const{pathingGroup:A}=X.current;A.clear();const y=T.flatMap((Ot,yt)=>Ot.map((gt,Rt)=>({r:yt,c:Rt,color:gt})));if(y.length===0){X.current.pathingMesh=null;return}const tt=new Hs(Oe-2,Oe-2),ht=new bn,$=Q*Oe/2,Ct=L*Oe/2,_t=new Map;y.forEach(({r:Ot,c:yt,color:gt})=>{const Rt=_t.get(gt)??[];Rt.push({r:Ot,c:yt}),_t.set(gt,Rt)});let It=null;return _t.forEach((Ot,yt)=>{const gt=new Ps({color:yt,side:ui,transparent:!1,opacity:1,depthWrite:!1,depthTest:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Rt=new z_(tt,gt,Ot.length);Rt.renderOrder=2,Ot.forEach(({r:Nt,c:Pt},ee)=>{ht.rotation.x=-Math.PI/2,ht.position.set(-$+Pt*Oe+Oe/2,.02,-Ct+Nt*Oe+Oe/2),ht.updateMatrix(),Rt.setMatrixAt(ee,ht.matrix)}),Rt.instanceMatrix.needsUpdate=!0,A.add(Rt),It||(It=Rt)}),X.current.pathingMesh=It,()=>{tt.dispose(),A.children.forEach(Ot=>{Ot instanceof z_&&Ot.material.dispose()})}},[T,Q,L]),Ae.useEffect(()=>{J===h&&rt===m||(E(ud(h,m)),G([]),z(-1),X.current&&(X.current.pathingGroup.clear(),X.current.brushCursor.visible=!1))},[h,m,J,rt]),Ae.useEffect(()=>{if(!r)return;const A=Tv(r,h,m,ut);E(A),G([]),z(-1)},[r,h,m,ut]);const xt=(A,y)=>{A<0||A>=m||y<0||y>=h||E(B=>{if(B[A][y]===D)return B;const tt=[...B.map(ht=>[...ht])];return tt[A][y]=D,tt})},Ut=A=>"touches"in A?{clientX:A.touches[0].clientX,clientY:A.touches[0].clientY}:{clientX:A.clientX,clientY:A.clientY},Ht=A=>{if(!I.current||!X.current)return null;const{clientX:y,clientY:B}=Ut(A),tt=I.current.getBoundingClientRect();return X.current.mouse.x=(y-tt.left)/tt.width*2-1,X.current.mouse.y=-((B-tt.top)/tt.height)*2+1,{clientX:y,clientY:B}},at=A=>{const y=Ht(A);if(!y||!X.current)return!1;const{camera:B,raycaster:tt,mouse:ht,cutoffHandle:$}=X.current;return tt.setFromCamera(ht,B),tt.intersectObject($,!0).length===0?!1:(lt.current=!0,pt.current=y.clientY,bt.current=ut,P.current=!1,!0)},St=A=>{if(!lt.current||!r)return!1;const B=Ut(A).clientY-pt.current;Math.abs(B)>2&&(P.current=!0);const{minZ:tt,maxZ:ht}=U,$=Math.max(ht-tt,1),Ct=Math.min(ht,Math.max(tt,bt.current-B*($/200)));return c((Ct-tt)/$*100),!0},At=()=>{lt.current&&(lt.current=!1,setTimeout(()=>{P.current=!1},0))},kt=A=>{if(!X.current||!I.current)return;const{camera:y,raycaster:B,mouse:tt,boundaryMesh:ht,brushCursor:$}=X.current;if(!Ht(A))return;B.setFromCamera(tt,y);const Ct=B.intersectObject(ht);if(Ct.length>0){const _t=Ct[0].point,It=H*Oe/2,Ot=j*Oe/2,yt=Math.floor((_t.x+It)/Oe),gt=Math.floor((_t.z+Ot)/Oe),Rt=m-1-yt,Nt=gt;return $.visible=!0,$.position.set(-It+yt*Oe+Oe/2,.07,-Ot+gt*Oe+Oe/2),$.material.color.set(D),{rawRow:Rt,rawCol:Nt}}else $.visible=!1},Qt=A=>{St(A)||kt(A)},$t=A=>{at(A)},Qe=A=>{if(lt.current||P.current)return;const y=kt(A);y&&(xt(y.rawRow,y.rawCol),ge(g.map((B,tt)=>B.map((ht,$)=>tt===y.rawRow&&$===y.rawCol?D:ht))))},ge=A=>{const y=N.slice(0,F+1);y.push(A.map(B=>[...B])),y.length>50&&y.shift(),G(y),z(y.length-1)},pe=()=>{if(F>0){const A=N[F-1];E(A.map(y=>[...y])),z(F-1)}},be=()=>{if(F<N.length-1){const A=N[F+1];E(A.map(y=>[...y])),z(F+1)}},se=()=>{if(!r)return;const{width:A,height:y}=Rv(r,ut);d(A),p(y)};Ae.useEffect(()=>{const A=y=>{(y.ctrlKey||y.metaKey)&&y.key==="z"&&(y.shiftKey?be():pe()),(y.ctrlKey||y.metaKey)&&y.key==="y"&&be()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[F,N]);const je=async A=>{var tt;const y=(tt=A.target.files)==null?void 0:tt[0];if(!y)return;s(y.name);const B=await y.arrayBuffer();try{const $=new I2(B).parse(),Ct=W2($),{width:_t,height:It}=Rv($,Ct),Ot=Tv($,_t,It,Ct);t($),c(100),d(_t),p(It),E(Ot),G([]),z(-1),k($)}catch(ht){console.error(ht),alert("Failed to parse MDX file. Make sure it is a valid Warcraft III MDX model.")}},k=A=>{if(console.log("Rendering model with",A.geosets.length,"geosets"),!X.current)return;const{modelGroup:y,controls:B,camera:tt,scene:ht}=X.current;ht.children.forEach(Ct=>{Ct instanceof wn&&Ct.geometry instanceof $r&&Ct.geometry.parameters.width===10&&ht.remove(Ct)}),y.clear();const $=new cs;if(A.geosets.forEach(Ct=>{const _t=new Un,It=new Float32Array(Ct.vertices);_t.setAttribute("position",new Vn(It,3)),_t.setIndex(new Vn(Ct.faces,1));const Ot=_t.attributes.position.array;for(let Rt=0;Rt<Ot.length;Rt+=3){const Nt=Ot[Rt],Pt=Ot[Rt+1],ee=Ot[Rt+2];Ot[Rt]=-Pt,Ot[Rt+1]=ee,Ot[Rt+2]=Nt}_t.computeVertexNormals();const yt=new VM({color:16777215,side:ui,flatShading:!1,shininess:30,wireframe:!1,transparent:M<1,opacity:M}),gt=new wn(_t,yt);if(gt.renderOrder=3,y.add(gt),b){const Rt=new ru(new IM(_t),new rl({color:16777215,transparent:!0,opacity:.9,depthTest:!1}));Rt.renderOrder=6,y.add(Rt)}_t.computeBoundingBox(),_t.boundingBox&&$.expandByObject(gt)}),!$.isEmpty()){const Ct=new K;$.getCenter(Ct);const _t=new K;$.getSize(_t);const It=Math.max(_t.x,_t.y,_t.z),Ot=Math.max(It*2,256);B.target.set(0,0,0),tt.position.set(0,Ot,.001),B.update()}},qe=()=>{const A=rt,y=J,B=new Uint8Array(A*y*4);for(let Ct=0;Ct<rt;Ct++)for(let _t=0;_t<J;_t++){const It=_t,Ot=rt-1-Ct,yt=(It*A+Ot)*4,gt=g[Ct][_t];B[yt]=gt>>16&255,B[yt+1]=gt>>8&255,B[yt+2]=gt&255,B[yt+3]=255}const tt=z2(A,y,B),ht=URL.createObjectURL(tt),$=document.createElement("a");$.href=ht,$.download=`${i.replace(".mdx","")}_pathing.tga`,$.click(),URL.revokeObjectURL(ht)},ye=(A,y)=>{xt(A,y),ge(g.map((B,tt)=>B.map((ht,$)=>tt===A&&$===y?D:ht)))};return Et.jsxs("div",{className:"h-screen overflow-hidden bg-[#141414] text-white font-sans selection:bg-emerald-500/30 flex flex-col",children:[Et.jsx("header",{className:"shrink-0 border-b border-white/10 p-4 flex items-center justify-between bg-[#1a1a1a]",children:Et.jsxs("div",{className:"flex items-center gap-3",children:[Et.jsx("div",{className:"w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/20",children:Et.jsx(bv,{className:"text-white",size:24})}),Et.jsxs("div",{children:[Et.jsx("h1",{className:"text-lg font-bold tracking-tight",children:"WC3 MDX Pathing Generator"}),Et.jsx("p",{className:"text-xs text-white/50 uppercase tracking-widest font-medium",children:"Terrain Decorator Tool"})]})]})}),Et.jsxs("main",{className:"grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0 overflow-hidden",children:[Et.jsxs("aside",{className:"lg:col-span-3 border-r border-white/10 p-6 space-y-8 overflow-hidden bg-[#1a1a1a]",children:[Et.jsxs("section",{className:"space-y-4",children:[Et.jsxs("div",{className:"flex items-center gap-2 text-emerald-400",children:[Et.jsx(w2,{size:18}),Et.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest",children:"Configuration"})]}),Et.jsxs("div",{className:"space-y-6",children:[Et.jsxs("div",{className:"space-y-2",children:[Et.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50 uppercase tracking-wider",children:[Et.jsx("label",{children:"Height Cutoff (Z)"}),Et.jsxs("span",{children:[Math.round(l),"%"]})]}),Et.jsx("input",{type:"range",min:"0",max:"100",value:l,onChange:A=>c(parseInt(A.target.value)),className:"w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"}),Et.jsx("p",{className:"text-[10px] text-white/30 italic",children:"0% = model lowest Z, 100% = model highest Z. Geometry above the current height is ignored."})]}),Et.jsxs("div",{className:"flex items-center justify-between",children:[Et.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[Et.jsx(cd,{size:14}),Et.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest",children:"Grid Settings"})]}),Et.jsxs("button",{onClick:se,disabled:!r,className:"p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-emerald-400 transition-all disabled:opacity-30 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider",title:"Auto-fit to Model",children:[Et.jsx(E2,{size:12}),"Auto-Fit"]})]}),Et.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[Et.jsxs("div",{className:"space-y-2",children:[Et.jsx("label",{className:"text-xs font-medium text-white/50 uppercase tracking-wider",children:"Grid Width (Cells)"}),Et.jsxs("div",{className:"flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2",children:[Et.jsx(cd,{size:14,className:"text-white/30"}),Et.jsx("input",{type:"number",min:"2",step:"2",value:h,onChange:A=>d(Vr(parseInt(A.target.value)||2)),className:"bg-transparent w-full text-sm outline-none"})]})]}),Et.jsxs("div",{className:"space-y-2",children:[Et.jsx("label",{className:"text-xs font-medium text-white/50 uppercase tracking-wider",children:"Grid Height (Cells)"}),Et.jsxs("div",{className:"flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2",children:[Et.jsx(cd,{size:14,className:"text-white/30"}),Et.jsx("input",{type:"number",min:"2",step:"2",value:m,onChange:A=>p(Vr(parseInt(A.target.value)||2)),className:"bg-transparent w-full text-sm outline-none"})]})]})]}),Et.jsx("div",{className:"p-3 bg-white/5 rounded-lg border border-white/5",children:Et.jsxs("div",{className:"flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40",children:[Et.jsx("span",{children:"TGA Output Size"}),Et.jsxs("span",{className:"text-emerald-400",children:[H," x ",j," px"]})]})}),Et.jsx("p",{className:"text-[10px] text-white/30 italic",children:"3D viewport and TGA preview use the rotated game-facing orientation. Each cell is 32x32 units and exports as 1 pixel."})]})]}),Et.jsxs("section",{className:"space-y-4 pt-4 border-t border-white/5",children:[Et.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[Et.jsx(g2,{size:14}),Et.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest",children:"Model Visualization"})]}),Et.jsxs("div",{className:"space-y-4",children:[Et.jsxs("div",{className:"flex items-center justify-between",children:[Et.jsx("label",{className:"text-xs text-white/70",children:"Wireframe"}),Et.jsx("button",{onClick:()=>w(!b),className:`w-10 h-5 rounded-full transition-colors relative ${b?"bg-emerald-500":"bg-white/10"}`,children:Et.jsx("div",{className:`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${b?"left-6":"left-1"}`})})]}),Et.jsxs("div",{className:"space-y-2",children:[Et.jsxs("div",{className:"flex justify-between",children:[Et.jsx("label",{className:"text-xs text-white/70",children:"Opacity"}),Et.jsxs("span",{className:"text-[10px] font-mono text-white/40",children:[Math.round(M*100),"%"]})]}),Et.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:M,onChange:A=>S(parseFloat(A.target.value)),className:"w-full accent-emerald-500"})]})]})]}),r&&Et.jsxs("section",{className:"space-y-4 pt-4 border-t border-white/5",children:[Et.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[Et.jsx(x2,{size:14}),Et.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest",children:"Model Info"})]}),Et.jsxs("div",{className:"bg-white/5 rounded-lg p-3 space-y-2",children:[Et.jsxs("div",{className:"flex justify-between text-[11px]",children:[Et.jsx("span",{className:"text-white/40",children:"Geosets"}),Et.jsx("span",{children:r.geosets.length})]}),Et.jsxs("div",{className:"flex justify-between text-[11px]",children:[Et.jsx("span",{className:"text-white/40",children:"Total Vertices"}),Et.jsx("span",{children:r.geosets.reduce((A,y)=>A+y.vertices.length/3,0)})]})]})]})]}),Et.jsxs("div",{className:"lg:col-span-6 relative bg-[#141414]",children:[Et.jsx("div",{ref:I,className:"w-full h-full cursor-crosshair",onMouseDown:A=>{$t(A)},onClick:A=>{Qe(A)},onMouseMove:A=>{Qt(A)},onMouseUp:()=>{At()},onMouseLeave:()=>{At(),X.current&&(X.current.brushCursor.visible=!1)}}),Et.jsx("div",{className:"absolute top-4 left-4 pointer-events-none",children:Et.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2",children:[Et.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),Et.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-white/70",children:"3D Preview"})]})}),!r&&Et.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:Et.jsxs("div",{className:"text-center space-y-4 opacity-20",children:[Et.jsx(bv,{size:64,className:"mx-auto"}),Et.jsx("p",{className:"text-sm font-medium uppercase tracking-widest",children:"No Model Loaded"})]})})]}),Et.jsxs("aside",{className:"lg:col-span-3 border-l border-white/10 p-4 space-y-3 bg-[#1a1a1a] overflow-hidden flex flex-col min-h-0",children:[Et.jsxs("div",{className:"flex items-center justify-between text-emerald-400",children:[Et.jsxs("div",{className:"flex items-center gap-2",children:[Et.jsx(S2,{size:18}),Et.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest",children:"Pathing Preview"})]}),Et.jsxs("div",{className:"flex gap-1",children:[Et.jsx("button",{onClick:pe,disabled:F<=0,className:"p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-white/50 disabled:opacity-20 transition-all",title:"Undo (Ctrl+Z)",children:Et.jsx(L2,{size:14})}),Et.jsx("button",{onClick:be,disabled:F>=N.length-1,className:"p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-white/50 disabled:opacity-20 transition-all",title:"Redo (Ctrl+Y)",children:Et.jsx(R2,{size:14})})]})]}),Et.jsxs("div",{className:"space-y-2 bg-white/5 p-3 rounded-lg border border-white/10",children:[Et.jsxs("div",{className:"flex items-center justify-between",children:[Et.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40",children:[Et.jsx(T2,{size:14}),"Palette"]}),Et.jsx("div",{className:"text-[10px] font-bold text-white/30 uppercase tracking-widest",children:V2(D)})]}),Et.jsx("div",{className:"grid grid-cols-4 gap-2",children:F2.map(A=>Et.jsxs("button",{onClick:()=>O(A.value),title:`${A.label}: ${A.description}`,className:`rounded-lg border p-2 transition-all ${D===A.value?"border-emerald-400 bg-white/10":"border-white/10 hover:border-white/30"}`,children:[Et.jsx("div",{className:"h-8 rounded-md border border-white/10",style:{backgroundColor:Av(A.value)}}),Et.jsx("div",{className:"mt-1 text-[9px] font-bold uppercase tracking-widest text-white/60",children:A.label})]},A.value))})]}),Et.jsx("div",{className:"flex-1 min-h-0 flex items-center justify-center",children:Et.jsxs("div",{className:"aspect-square w-full max-h-full bg-checkerboard rounded-xl border border-white/10 overflow-hidden flex items-center justify-center relative group cursor-crosshair",onMouseLeave:()=>{},children:[Et.jsxs("div",{className:"grid border-2 border-emerald-500/50 shadow-2xl select-none",style:{gridTemplateColumns:`repeat(${Q}, 1fr)`,gridTemplateRows:`repeat(${L}, 1fr)`,width:Q>=L?"100%":`${Q/L*100}%`,height:L>=Q?"100%":`${L/Q*100}%`},children:[T.map((A,y)=>A.map((B,tt)=>Et.jsx("div",{onClick:()=>{ye(rt-1-tt,y)},className:"border-[0.1px] border-white/10 transition-colors duration-75",style:{backgroundColor:Av(B)}},`${y}-${tt}`))),Et.jsx("div",{className:"absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm border border-white/10 rounded px-1.5 py-0.5 pointer-events-none",children:Et.jsxs("span",{className:"text-[9px] font-mono text-emerald-400",children:[Q,"x",L]})})]}),Et.jsx("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:Et.jsx("button",{onClick:()=>{E(ud(h,m)),G([]),z(-1)},className:"p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-full transition-colors",children:Et.jsx(U2,{size:20})})})]})}),Et.jsxs("section",{className:"space-y-3 pt-2 border-t border-white/5",children:[Et.jsxs("label",{className:"flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-lg shadow-emerald-900/20 active:scale-95",children:[Et.jsx(P2,{size:18}),Et.jsx("span",{children:i||"Upload MDX"}),Et.jsx("input",{type:"file",accept:".mdx",onChange:je,className:"hidden"})]}),Et.jsxs("button",{onClick:qe,className:"w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95",children:[Et.jsx(p2,{size:18}),"Download TGA"]})]})]})]})]})}TS.createRoot(document.getElementById("root")).render(Et.jsx(q2,{}));
