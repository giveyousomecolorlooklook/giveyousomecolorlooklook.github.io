(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Oh={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function GS(){if(y_)return il;y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return il.Fragment=t,il.jsx=i,il.jsxs=i,il}var S_;function VS(){return S_||(S_=1,Oh.exports=GS()),Oh.exports}var pt=VS(),Ph={exports:{}},al={},zh={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function kS(){return M_||(M_=1,(function(r){function t(O,H){var dt=O.length;O.push(H);t:for(;0<dt;){var xt=dt-1>>>1,Ut=O[xt];if(0<l(Ut,H))O[xt]=H,O[dt]=Ut,dt=xt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],dt=O.pop();if(dt!==H){O[0]=dt;t:for(var xt=0,Ut=O.length,P=Ut>>>1;xt<P;){var j=2*(xt+1)-1,St=O[j],Rt=j+1,Gt=O[Rt];if(0>l(St,dt))Rt<Ut&&0>l(Gt,St)?(O[xt]=Gt,O[Rt]=dt,xt=Rt):(O[xt]=St,O[j]=dt,xt=j);else if(Rt<Ut&&0>l(Gt,dt))O[xt]=Gt,O[Rt]=dt,xt=Rt;else break t}}return H}function l(O,H){var dt=O.sortIndex-H.sortIndex;return dt!==0?dt:O.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],_=1,x=null,g=3,M=!1,b=!1,w=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var H=i(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=O)s(d),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(d)}}function F(O){if(w=!1,U(O),!b)if(i(m)!==null)b=!0,I||(I=!0,K());else{var H=i(d);H!==null&&J(F,H.startTime-O)}}var I=!1,B=-1,T=5,D=-1;function ut(){return S?!0:!(r.unstable_now()-D<T)}function G(){if(S=!1,I){var O=r.unstable_now();D=O;var H=!0;try{t:{b=!1,w&&(w=!1,C(B),B=-1),M=!0;var dt=g;try{e:{for(U(O),x=i(m);x!==null&&!(x.expirationTime>O&&ut());){var xt=x.callback;if(typeof xt=="function"){x.callback=null,g=x.priorityLevel;var Ut=xt(x.expirationTime<=O);if(O=r.unstable_now(),typeof Ut=="function"){x.callback=Ut,U(O),H=!0;break e}x===i(m)&&s(m),U(O)}else s(m);x=i(m)}if(x!==null)H=!0;else{var P=i(d);P!==null&&J(F,P.startTime-O),H=!1}}break t}finally{x=null,g=dt,M=!1}H=void 0}}finally{H?K():I=!1}}}var K;if(typeof N=="function")K=function(){N(G)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,st=tt.port2;tt.port1.onmessage=G,K=function(){st.postMessage(null)}}else K=function(){y(G,0)};function J(O,H){B=y(function(){O(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var dt=g;g=H;try{return O()}finally{g=dt}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var dt=g;g=O;try{return H()}finally{g=dt}},r.unstable_scheduleCallback=function(O,H,dt){var xt=r.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?xt+dt:xt):dt=xt,O){case 1:var Ut=-1;break;case 2:Ut=250;break;case 5:Ut=1073741823;break;case 4:Ut=1e4;break;default:Ut=5e3}return Ut=dt+Ut,O={id:_++,callback:H,priorityLevel:O,startTime:dt,expirationTime:Ut,sortIndex:-1},dt>xt?(O.sortIndex=dt,t(d,O),i(m)===null&&O===i(d)&&(w?(C(B),B=-1):w=!0,J(F,dt-xt))):(O.sortIndex=Ut,t(m,O),b||M||(b=!0,I||(I=!0,K()))),O},r.unstable_shouldYield=ut,r.unstable_wrapCallback=function(O){var H=g;return function(){var dt=g;g=H;try{return O.apply(this,arguments)}finally{g=dt}}}})(Ih)),Ih}var E_;function XS(){return E_||(E_=1,zh.exports=kS()),zh.exports}var Bh={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function WS(){if(b_)return fe;b_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function y(P,j,St){this.props=P,this.context=j,this.refs=S,this.updater=St||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=y.prototype;function N(P,j,St){this.props=P,this.context=j,this.refs=S,this.updater=St||b}var U=N.prototype=new C;U.constructor=N,w(U,y.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function I(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(P,j,St){var Rt=St.ref;return{$$typeof:r,type:P,key:j,ref:Rt!==void 0?Rt:null,props:St}}function ut(P,j){return D(P.type,j,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function K(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(St){return j[St]})}var tt=/\/+/g;function st(P,j){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):j.toString(36)}function J(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(j){P.status==="pending"&&(P.status="fulfilled",P.value=j)},function(j){P.status==="pending"&&(P.status="rejected",P.reason=j)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,j,St,Rt,Gt){var at=typeof P;(at==="undefined"||at==="boolean")&&(P=null);var Mt=!1;if(P===null)Mt=!0;else switch(at){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(P.$$typeof){case r:case t:Mt=!0;break;case _:return Mt=P._init,O(Mt(P._payload),j,St,Rt,Gt)}}if(Mt)return Gt=Gt(P),Mt=Rt===""?"."+st(P,0):Rt,F(Gt)?(St="",Mt!=null&&(St=Mt.replace(tt,"$&/")+"/"),O(Gt,j,St,"",function(Qt){return Qt})):Gt!=null&&(G(Gt)&&(Gt=ut(Gt,St+(Gt.key==null||P&&P.key===Gt.key?"":(""+Gt.key).replace(tt,"$&/")+"/")+Mt)),j.push(Gt)),1;Mt=0;var Lt=Rt===""?".":Rt+":";if(F(P))for(var kt=0;kt<P.length;kt++)Rt=P[kt],at=Lt+st(Rt,kt),Mt+=O(Rt,j,St,at,Gt);else if(kt=M(P),typeof kt=="function")for(P=kt.call(P),kt=0;!(Rt=P.next()).done;)Rt=Rt.value,at=Lt+st(Rt,kt++),Mt+=O(Rt,j,St,at,Gt);else if(at==="object"){if(typeof P.then=="function")return O(J(P),j,St,Rt,Gt);throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function H(P,j,St){if(P==null)return P;var Rt=[],Gt=0;return O(P,Rt,"","",function(at){return j.call(St,at,Gt++)}),Rt}function dt(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(St){(P._status===0||P._status===-1)&&(P._status=1,P._result=St)},function(St){(P._status===0||P._status===-1)&&(P._status=2,P._result=St)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var xt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Ut={map:H,forEach:function(P,j,St){H(P,function(){j.apply(this,arguments)},St)},count:function(P){var j=0;return H(P,function(){j++}),j},toArray:function(P){return H(P,function(j){return j})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return fe.Activity=x,fe.Children=Ut,fe.Component=y,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=N,fe.StrictMode=s,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,fe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},fe.cache=function(P){return function(){return P.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(P,j,St){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Rt=w({},P.props),Gt=P.key;if(j!=null)for(at in j.key!==void 0&&(Gt=""+j.key),j)!T.call(j,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&j.ref===void 0||(Rt[at]=j[at]);var at=arguments.length-2;if(at===1)Rt.children=St;else if(1<at){for(var Mt=Array(at),Lt=0;Lt<at;Lt++)Mt[Lt]=arguments[Lt+2];Rt.children=Mt}return D(P.type,Gt,Rt)},fe.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},fe.createElement=function(P,j,St){var Rt,Gt={},at=null;if(j!=null)for(Rt in j.key!==void 0&&(at=""+j.key),j)T.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Gt[Rt]=j[Rt]);var Mt=arguments.length-2;if(Mt===1)Gt.children=St;else if(1<Mt){for(var Lt=Array(Mt),kt=0;kt<Mt;kt++)Lt[kt]=arguments[kt+2];Gt.children=Lt}if(P&&P.defaultProps)for(Rt in Mt=P.defaultProps,Mt)Gt[Rt]===void 0&&(Gt[Rt]=Mt[Rt]);return D(P,at,Gt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(P){return{$$typeof:p,render:P}},fe.isValidElement=G,fe.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:dt}},fe.memo=function(P,j){return{$$typeof:d,type:P,compare:j===void 0?null:j}},fe.startTransition=function(P){var j=B.T,St={};B.T=St;try{var Rt=P(),Gt=B.S;Gt!==null&&Gt(St,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(I,xt)}catch(at){xt(at)}finally{j!==null&&St.types!==null&&(j.types=St.types),B.T=j}},fe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},fe.use=function(P){return B.H.use(P)},fe.useActionState=function(P,j,St){return B.H.useActionState(P,j,St)},fe.useCallback=function(P,j){return B.H.useCallback(P,j)},fe.useContext=function(P){return B.H.useContext(P)},fe.useDebugValue=function(){},fe.useDeferredValue=function(P,j){return B.H.useDeferredValue(P,j)},fe.useEffect=function(P,j){return B.H.useEffect(P,j)},fe.useEffectEvent=function(P){return B.H.useEffectEvent(P)},fe.useId=function(){return B.H.useId()},fe.useImperativeHandle=function(P,j,St){return B.H.useImperativeHandle(P,j,St)},fe.useInsertionEffect=function(P,j){return B.H.useInsertionEffect(P,j)},fe.useLayoutEffect=function(P,j){return B.H.useLayoutEffect(P,j)},fe.useMemo=function(P,j){return B.H.useMemo(P,j)},fe.useOptimistic=function(P,j){return B.H.useOptimistic(P,j)},fe.useReducer=function(P,j,St){return B.H.useReducer(P,j,St)},fe.useRef=function(P){return B.H.useRef(P)},fe.useState=function(P){return B.H.useState(P)},fe.useSyncExternalStore=function(P,j,St){return B.H.useSyncExternalStore(P,j,St)},fe.useTransition=function(){return B.H.useTransition()},fe.version="19.2.4",fe}var T_;function Mp(){return T_||(T_=1,Bh.exports=WS()),Bh.exports}var Fh={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function YS(){if(A_)return Hn;A_=1;var r=Mp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,_)},Hn.flushSync=function(m){var d=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=_,s.d.f()}},Hn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Hn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Hn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Hn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Hn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Hn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Hn.requestFormReset=function(m){s.d.r(m)},Hn.unstable_batchedUpdates=function(m,d){return m(d)},Hn.useFormState=function(m,d,_){return h.H.useFormState(m,d,_)},Hn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Hn.version="19.2.4",Hn}var R_;function jS(){if(R_)return Fh.exports;R_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Fh.exports=YS(),Fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function qS(){if(w_)return al;w_=1;var r=XS(),t=Mp(),i=jS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,o=f;break}if(A===o){v=!0,o=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,o=u;break}if(A===o){v=!0,o=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:st(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return st(e(n))}catch{}}return null}var J=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},xt=[],Ut=-1;function P(e){return{current:e}}function j(e){0>Ut||(e.current=xt[Ut],xt[Ut]=null,Ut--)}function St(e,n){Ut++,xt[Ut]=e.current,e.current=n}var Rt=P(null),Gt=P(null),at=P(null),Mt=P(null);function Lt(e,n){switch(St(at,n),St(Gt,e),St(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?kg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=kg(n),e=Xg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Rt),St(Rt,e)}function kt(){j(Rt),j(Gt),j(at)}function Qt(e){e.memoizedState!==null&&St(Mt,e);var n=Rt.current,a=Xg(n,e.type);n!==a&&(St(Gt,e),St(Rt,a))}function zt(e){Gt.current===e&&(j(Rt),j(Gt)),Mt.current===e&&(j(Mt),$o._currentValue=dt)}var Je,xe;function _e(e){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+xe}var Ue=!1;function oe(e,n){if(!e||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(ht){var lt=ht}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(ht){lt=ht}e.call(Tt.prototype)}}else{try{throw Error()}catch(ht){lt=ht}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(ht){if(ht&&lt&&typeof ht.stack=="string")return[ht.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var V=v.split(`
`),it=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===it.length)for(o=V.length-1,u=it.length-1;1<=o&&0<=u&&V[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==it[u]){var vt=`
`+V[o].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=o&&0<=u);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function Ke(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return _e("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=Ke(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qe=Object.prototype.hasOwnProperty,Te=r.unstable_scheduleCallback,Le=r.unstable_cancelCallback,jt=r.unstable_shouldYield,L=r.unstable_requestPaint,E=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,yt=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,mt=r.unstable_NormalPriority,Xt=r.unstable_LowPriority,Ot=r.unstable_IdlePriority,te=r.log,ne=r.unstable_setDisableYieldValue,Nt=null,wt=null;function Ft(e){if(typeof te=="function"&&ne(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Nt,e)}catch{}}var W=Math.clz32?Math.clz32:z,rt=Math.log,Ct=Math.LN2;function z(e){return e>>>=0,e===0?32:31-(rt(e)/Ct|0)|0}var _t=256,gt=262144,bt=4194304;function ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=ct(o):(v&=A,v!==0?u=ct(v):a||(a=A&~e,a!==0&&(u=ct(a))))):(A=o&~f,A!==0?u=ct(A):v!==0?u=ct(v):a||(a=o&~e,a!==0&&(u=ct(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Jt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ce(){var e=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),e}function Ht(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ae(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Be(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,it=e.hiddenUpdates;for(a=v&~a;0<a;){var vt=31-W(a),Tt=1<<vt;A[vt]=0,V[vt]=-1;var lt=it[vt];if(lt!==null)for(it[vt]=null,vt=0;vt<lt.length;vt++){var ht=lt[vt];ht!==null&&(ht.lane&=-536870913)}a&=~Tt}o!==0&&sn(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function sn(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-W(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function gn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-W(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function $n(e,n){var a=n&-n;return a=(a&42)!==0?1:On(a),(a&(e.suspendedLanes|n))!==0?0:a}function On(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ti(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function Yi(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var bn=Math.random().toString(36).slice(2),on="__reactFiber$"+bn,ln="__reactProps$"+bn,Ei="__reactContainer$"+bn,bi="__reactEvents$"+bn,Ts="__reactListeners$"+bn,As="__reactHandles$"+bn,Rs="__reactResources$"+bn,ca="__reactMarker$"+bn;function mo(e){delete e[on],delete e[ln],delete e[bi],delete e[Ts],delete e[As]}function Fa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Qg(e);e!==null;){if(a=e[on])return a;e=Qg(e)}return n}e=a,a=e.parentNode}return null}function Ha(e){if(e=e[on]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ws(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[Rs];return n||(n=e[Rs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[ca]=!0}var ft=new Set,ot={};function et(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(ot[e]=n,e=0;e<n.length;e++)ft.add(n[e])}var Vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Zt={};function $t(e){return Qe.call(Zt,e)?!0:Qe.call(It,e)?!1:Vt.test(e)?Zt[e]=!0:(It[e]=!0,!1)}function se(e,n,a){if($t(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ue(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function en(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=en(e)?"checked":"value";e._valueTracker=nn(e,n,""+e[n])}}function Tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=en(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yn=/[\n"\\]/g;function le(e){return e.replace(Yn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function jn(e,n,a,o,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pe(n)):e.value!==""+pe(n)&&(e.value=""+pe(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?zi(e,v,pe(n)):a!=null?zi(e,v,pe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+pe(A):e.removeAttribute("name")}function ci(e,n,a,o,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Oe(e)}function zi(e,n,a){n==="number"&&qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ui(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+pe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pe(a):""}function _n(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function qn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ii(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||vn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ua(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ii(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ii(e,f,n[f])}function sr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(e){return Bx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function fa(){}var Du=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rr=null,or=null;function Vp(e){var n=Ha(e);if(n&&(e=n.stateNode)){var a=e[ln]||null;t:switch(e=n.stateNode,n.type){case"input":if(jn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[ln]||null;if(!u)throw Error(s(90));jn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Tn(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ui(e,!!a.multiple,n,!1)}}}var Nu=!1;function kp(e,n,a){if(Nu)return e(n,a);Nu=!0;try{var o=e(n);return o}finally{if(Nu=!1,(rr!==null||or!==null)&&(dc(),rr&&(n=rr,e=or,or=rr=null,Vp(n),e)))for(n=0;n<e.length;n++)Vp(e[n])}}function go(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ln]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(ha)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Lu=!1}var Ga=null,Ou=null,Rl=null;function Xp(){if(Rl)return Rl;var e,n=Ou,a=n.length,o,u="value"in Ga?Ga.value:Ga.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return Rl=u.slice(e,1<o?1-o:void 0)}function wl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cl(){return!0}function Wp(){return!1}function ei(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Cl:Wp,this.isPropagationStopped=Wp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),n}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=ei(Cs),vo=x({},Cs,{view:0,detail:0}),Fx=ei(vo),Pu,zu,xo,Ul=x({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Pu=e.screenX-xo.screenX,zu=e.screenY-xo.screenY):zu=Pu=0,xo=e),Pu)},movementY:function(e){return"movementY"in e?e.movementY:zu}}),Yp=ei(Ul),Hx=x({},Ul,{dataTransfer:0}),Gx=ei(Hx),Vx=x({},vo,{relatedTarget:0}),Iu=ei(Vx),kx=x({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xx=ei(kx),Wx=x({},Cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yx=ei(Wx),jx=x({},Cs,{data:0}),jp=ei(jx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kx[e])?!!n[e]:!1}function Bu(){return Qx}var Jx=x({},vo,{key:function(e){if(e.key){var n=qx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$x=ei(Jx),ty=x({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=ei(ty),ey=x({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),ny=ei(ey),iy=x({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=ei(iy),sy=x({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=ei(sy),oy=x({},Cs,{newState:0,oldState:0}),ly=ei(oy),cy=[9,13,27,32],Fu=ha&&"CompositionEvent"in window,yo=null;ha&&"documentMode"in document&&(yo=document.documentMode);var uy=ha&&"TextEvent"in window&&!yo,Zp=ha&&(!Fu||yo&&8<yo&&11>=yo),Kp=" ",Qp=!1;function Jp(e,n){switch(e){case"keyup":return cy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function fy(e,n){switch(e){case"compositionend":return $p(n);case"keypress":return n.which!==32?null:(Qp=!0,Kp);case"textInput":return e=n.data,e===Kp&&Qp?null:e;default:return null}}function hy(e,n){if(lr)return e==="compositionend"||!Fu&&Jp(e,n)?(e=Xp(),Rl=Ou=Ga=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zp&&n.locale!=="ko"?null:n.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dy[e.type]:n==="textarea"}function em(e,n,a,o){rr?or?or.push(o):or=[o]:rr=o,n=yc(n,"onChange"),0<n.length&&(a=new Dl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var So=null,Mo=null;function py(e){Ig(e,0)}function Nl(e){var n=ws(e);if(Tn(n))return e}function nm(e,n){if(e==="change")return n}var im=!1;if(ha){var Hu;if(ha){var Gu="oninput"in document;if(!Gu){var am=document.createElement("div");am.setAttribute("oninput","return;"),Gu=typeof am.oninput=="function"}Hu=Gu}else Hu=!1;im=Hu&&(!document.documentMode||9<document.documentMode)}function sm(){So&&(So.detachEvent("onpropertychange",rm),Mo=So=null)}function rm(e){if(e.propertyName==="value"&&Nl(Mo)){var n=[];em(n,Mo,e,Uu(e)),kp(py,n)}}function my(e,n,a){e==="focusin"?(sm(),So=n,Mo=a,So.attachEvent("onpropertychange",rm)):e==="focusout"&&sm()}function gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Mo)}function _y(e,n){if(e==="click")return Nl(n)}function vy(e,n){if(e==="input"||e==="change")return Nl(n)}function xy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fi=typeof Object.is=="function"?Object.is:xy;function Eo(e,n){if(fi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qe.call(n,u)||!fi(e[u],n[u]))return!1}return!0}function om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lm(e,n){var a=om(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=om(a)}}function cm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function um(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=qt(e.document)}return n}function Vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var yy=ha&&"documentMode"in document&&11>=document.documentMode,cr=null,ku=null,bo=null,Xu=!1;function fm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||cr==null||cr!==qt(o)||(o=cr,"selectionStart"in o&&Vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bo&&Eo(bo,o)||(bo=o,o=yc(ku,"onSelect"),0<o.length&&(n=new Dl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=cr)))}function Ds(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ur={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},Wu={},hm={};ha&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Us(e){if(Wu[e])return Wu[e];if(!ur[e])return e;var n=ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hm)return Wu[e]=n[a];return e}var dm=Us("animationend"),pm=Us("animationiteration"),mm=Us("animationstart"),Sy=Us("transitionrun"),My=Us("transitionstart"),Ey=Us("transitioncancel"),gm=Us("transitionend"),_m=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Bi(e,n){_m.set(e,n),et(n,[e])}var Ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],fr=0,ju=0;function Ol(){for(var e=fr,n=ju=fr=0;n<e;){var a=Ti[n];Ti[n++]=null;var o=Ti[n];Ti[n++]=null;var u=Ti[n];Ti[n++]=null;var f=Ti[n];if(Ti[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&vm(a,u,f)}}function Pl(e,n,a,o){Ti[fr++]=e,Ti[fr++]=n,Ti[fr++]=a,Ti[fr++]=o,ju|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qu(e,n,a,o){return Pl(e,n,a,o),zl(e)}function Ns(e,n){return Pl(e,null,null,n),zl(e)}function vm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-W(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function zl(e){if(50<Yo)throw Yo=0,ah=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hr={};function by(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,n,a,o){return new by(e,n,a,o)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,n){var a=e.alternate;return a===null?(a=hi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function xm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Il(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Zu(e)&&(v=1);else if(typeof e=="string")v=CS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=hi(31,a,n,u),e.elementType=D,e.lanes=f,e;case w:return Ls(a.children,u,f,n);case S:v=8,u|=24;break;case y:return e=hi(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case F:return e=hi(13,a,n,u),e.elementType=F,e.lanes=f,e;case I:return e=hi(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case C:v=9;break t;case U:v=11;break t;case B:v=14;break t;case T:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=hi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ls(e,n,a,o){return e=hi(7,e,o,n),e.lanes=a,e}function Ku(e,n,a){return e=hi(6,e,null,n),e.lanes=a,e}function ym(e){var n=hi(18,null,null,0);return n.stateNode=e,n}function Qu(e,n,a){return n=hi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Sm=new WeakMap;function Ai(e,n){if(typeof e=="object"&&e!==null){var a=Sm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},Sm.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var dr=[],pr=0,Bl=null,To=0,Ri=[],wi=0,Va=null,ji=1,qi="";function pa(e,n){dr[pr++]=To,dr[pr++]=Bl,Bl=e,To=n}function Mm(e,n,a){Ri[wi++]=ji,Ri[wi++]=qi,Ri[wi++]=Va,Va=e;var o=ji;e=qi;var u=32-W(o)-1;o&=~(1<<u),a+=1;var f=32-W(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,ji=1<<32-W(n)+u|a<<u|o,qi=f+e}else ji=1<<f|a<<u|o,qi=e}function Ju(e){e.return!==null&&(pa(e,1),Mm(e,1,0))}function $u(e){for(;e===Bl;)Bl=dr[--pr],dr[pr]=null,To=dr[--pr],dr[pr]=null;for(;e===Va;)Va=Ri[--wi],Ri[wi]=null,qi=Ri[--wi],Ri[wi]=null,ji=Ri[--wi],Ri[wi]=null}function Em(e,n){Ri[wi++]=ji,Ri[wi++]=qi,Ri[wi++]=Va,ji=n.id,qi=n.overflow,Va=e}var Pn=null,$e=null,Ce=!1,ka=null,Ci=!1,tf=Error(s(519));function Xa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(Ai(n,e)),tf}function bm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[ln]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<qo.length;a++)Me(qo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),ci(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),_n(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Gg(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=fa),n=!0):n=!1,n||Xa(e,!0)}function Tm(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Pn=Pn.return}}function mr(e){if(e!==Pn)return!1;if(!Ce)return Tm(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xh(e.type,e.memoizedProps)),a=!a),a&&$e&&Xa(e),Tm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=Kg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=Kg(e)}else n===27?(n=$e,as(e.type)?(e=bh,bh=null,$e=e):$e=n):$e=Pn?Ui(e.stateNode.nextSibling):null;return!0}function Os(){$e=Pn=null,Ce=!1}function ef(){var e=ka;return e!==null&&(si===null?si=e:si.push.apply(si,e),ka=null),e}function Ao(e){ka===null?ka=[e]:ka.push(e)}var nf=P(null),Ps=null,ma=null;function Wa(e,n,a){St(nf,n._currentValue),n._currentValue=a}function ga(e){e._currentValue=nf.current,j(nf)}function af(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function sf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),af(f.return,a,e),o||(v=null);break t}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),af(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function gr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;fi(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===Mt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push($o):e=[$o])}u=u.return}e!==null&&sf(n,e,a,o),n.flags|=262144}function Fl(e){for(e=e.firstContext;e!==null;){if(!fi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zs(e){Ps=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return Am(Ps,e)}function Hl(e,n){return Ps===null&&zs(e),Am(e,n)}function Am(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ma===null){if(e===null)throw Error(s(308));ma=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ma=ma.next=n;return a}var Ty=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ay=r.unstable_scheduleCallback,Ry=r.unstable_NormalPriority,xn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new Ty,data:new Map,refCount:0}}function Ro(e){e.refCount--,e.refCount===0&&Ay(Ry,function(){e.controller.abort()})}var wo=null,of=0,_r=0,vr=null;function wy(e,n){if(wo===null){var a=wo=[];of=0,_r=uh(),vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return of++,n.then(Rm,Rm),n}function Rm(){if(--of===0&&wo!==null){vr!==null&&(vr.status="fulfilled");var e=wo;wo=null,_r=0,vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Cy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var wm=O.S;O.S=function(e,n){fg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wy(e,n),wm!==null&&wm(e,n)};var Is=P(null);function lf(){var e=Is.current;return e!==null?e:Ze.pooledCache}function Gl(e,n){n===null?St(Is,Is.current):St(Is,n.pool)}function Cm(){var e=lf();return e===null?null:{parent:xn._currentValue,pool:e}}var xr=Error(s(460)),cf=Error(s(474)),Vl=Error(s(542)),kl={then:function(){}};function Dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Um(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(fa,fa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Lm(e),e;default:if(typeof n.status=="string")n.then(fa,fa);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Lm(e),e}throw Fs=n,xr}}function Bs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fs=a,xr):a}}var Fs=null;function Nm(){if(Fs===null)throw Error(s(459));var e=Fs;return Fs=null,e}function Lm(e){if(e===xr||e===Vl)throw Error(s(483))}var yr=null,Co=0;function Xl(e){var n=Co;return Co+=1,yr===null&&(yr=[]),Um(yr,e,n)}function Do(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Wl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Om(e){function n(Q,X){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[X],Q.flags|=16):nt.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=da(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<X?(Q.flags|=67108866,X):nt):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function v(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,X,nt,Et){return X===null||X.tag!==6?(X=Ku(nt,Q.mode,Et),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function V(Q,X,nt,Et){var ee=nt.type;return ee===w?vt(Q,X,nt.props.children,Et,nt.key):X!==null&&(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===T&&Bs(ee)===X.type)?(X=u(X,nt.props),Do(X,nt),X.return=Q,X):(X=Il(nt.type,nt.key,nt.props,null,Q.mode,Et),Do(X,nt),X.return=Q,X)}function it(Q,X,nt,Et){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Qu(nt,Q.mode,Et),X.return=Q,X):(X=u(X,nt.children||[]),X.return=Q,X)}function vt(Q,X,nt,Et,ee){return X===null||X.tag!==7?(X=Ls(nt,Q.mode,Et,ee),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function Tt(Q,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ku(""+X,Q.mode,nt),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return nt=Il(X.type,X.key,X.props,null,Q.mode,nt),Do(nt,X),nt.return=Q,nt;case b:return X=Qu(X,Q.mode,nt),X.return=Q,X;case T:return X=Bs(X),Tt(Q,X,nt)}if(J(X)||K(X))return X=Ls(X,Q.mode,nt,null),X.return=Q,X;if(typeof X.then=="function")return Tt(Q,Xl(X),nt);if(X.$$typeof===N)return Tt(Q,Hl(Q,X),nt);Wl(Q,X)}return null}function lt(Q,X,nt,Et){var ee=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ee!==null?null:A(Q,X,""+nt,Et);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case M:return nt.key===ee?V(Q,X,nt,Et):null;case b:return nt.key===ee?it(Q,X,nt,Et):null;case T:return nt=Bs(nt),lt(Q,X,nt,Et)}if(J(nt)||K(nt))return ee!==null?null:vt(Q,X,nt,Et,null);if(typeof nt.then=="function")return lt(Q,X,Xl(nt),Et);if(nt.$$typeof===N)return lt(Q,X,Hl(Q,nt),Et);Wl(Q,nt)}return null}function ht(Q,X,nt,Et,ee){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return Q=Q.get(nt)||null,A(X,Q,""+Et,ee);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case M:return Q=Q.get(Et.key===null?nt:Et.key)||null,V(X,Q,Et,ee);case b:return Q=Q.get(Et.key===null?nt:Et.key)||null,it(X,Q,Et,ee);case T:return Et=Bs(Et),ht(Q,X,nt,Et,ee)}if(J(Et)||K(Et))return Q=Q.get(nt)||null,vt(X,Q,Et,ee,null);if(typeof Et.then=="function")return ht(Q,X,nt,Xl(Et),ee);if(Et.$$typeof===N)return ht(Q,X,nt,Hl(X,Et),ee);Wl(X,Et)}return null}function Yt(Q,X,nt,Et){for(var ee=null,Pe=null,Kt=X,me=X=0,we=null;Kt!==null&&me<nt.length;me++){Kt.index>me?(we=Kt,Kt=null):we=Kt.sibling;var ze=lt(Q,Kt,nt[me],Et);if(ze===null){Kt===null&&(Kt=we);break}e&&Kt&&ze.alternate===null&&n(Q,Kt),X=f(ze,X,me),Pe===null?ee=ze:Pe.sibling=ze,Pe=ze,Kt=we}if(me===nt.length)return a(Q,Kt),Ce&&pa(Q,me),ee;if(Kt===null){for(;me<nt.length;me++)Kt=Tt(Q,nt[me],Et),Kt!==null&&(X=f(Kt,X,me),Pe===null?ee=Kt:Pe.sibling=Kt,Pe=Kt);return Ce&&pa(Q,me),ee}for(Kt=o(Kt);me<nt.length;me++)we=ht(Kt,Q,me,nt[me],Et),we!==null&&(e&&we.alternate!==null&&Kt.delete(we.key===null?me:we.key),X=f(we,X,me),Pe===null?ee=we:Pe.sibling=we,Pe=we);return e&&Kt.forEach(function(cs){return n(Q,cs)}),Ce&&pa(Q,me),ee}function ie(Q,X,nt,Et){if(nt==null)throw Error(s(151));for(var ee=null,Pe=null,Kt=X,me=X=0,we=null,ze=nt.next();Kt!==null&&!ze.done;me++,ze=nt.next()){Kt.index>me?(we=Kt,Kt=null):we=Kt.sibling;var cs=lt(Q,Kt,ze.value,Et);if(cs===null){Kt===null&&(Kt=we);break}e&&Kt&&cs.alternate===null&&n(Q,Kt),X=f(cs,X,me),Pe===null?ee=cs:Pe.sibling=cs,Pe=cs,Kt=we}if(ze.done)return a(Q,Kt),Ce&&pa(Q,me),ee;if(Kt===null){for(;!ze.done;me++,ze=nt.next())ze=Tt(Q,ze.value,Et),ze!==null&&(X=f(ze,X,me),Pe===null?ee=ze:Pe.sibling=ze,Pe=ze);return Ce&&pa(Q,me),ee}for(Kt=o(Kt);!ze.done;me++,ze=nt.next())ze=ht(Kt,Q,me,ze.value,Et),ze!==null&&(e&&ze.alternate!==null&&Kt.delete(ze.key===null?me:ze.key),X=f(ze,X,me),Pe===null?ee=ze:Pe.sibling=ze,Pe=ze);return e&&Kt.forEach(function(HS){return n(Q,HS)}),Ce&&pa(Q,me),ee}function We(Q,X,nt,Et){if(typeof nt=="object"&&nt!==null&&nt.type===w&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case M:t:{for(var ee=nt.key;X!==null;){if(X.key===ee){if(ee=nt.type,ee===w){if(X.tag===7){a(Q,X.sibling),Et=u(X,nt.props.children),Et.return=Q,Q=Et;break t}}else if(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===T&&Bs(ee)===X.type){a(Q,X.sibling),Et=u(X,nt.props),Do(Et,nt),Et.return=Q,Q=Et;break t}a(Q,X);break}else n(Q,X);X=X.sibling}nt.type===w?(Et=Ls(nt.props.children,Q.mode,Et,nt.key),Et.return=Q,Q=Et):(Et=Il(nt.type,nt.key,nt.props,null,Q.mode,Et),Do(Et,nt),Et.return=Q,Q=Et)}return v(Q);case b:t:{for(ee=nt.key;X!==null;){if(X.key===ee)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(Q,X.sibling),Et=u(X,nt.children||[]),Et.return=Q,Q=Et;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}Et=Qu(nt,Q.mode,Et),Et.return=Q,Q=Et}return v(Q);case T:return nt=Bs(nt),We(Q,X,nt,Et)}if(J(nt))return Yt(Q,X,nt,Et);if(K(nt)){if(ee=K(nt),typeof ee!="function")throw Error(s(150));return nt=ee.call(nt),ie(Q,X,nt,Et)}if(typeof nt.then=="function")return We(Q,X,Xl(nt),Et);if(nt.$$typeof===N)return We(Q,X,Hl(Q,nt),Et);Wl(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(Q,X.sibling),Et=u(X,nt),Et.return=Q,Q=Et):(a(Q,X),Et=Ku(nt,Q.mode,Et),Et.return=Q,Q=Et),v(Q)):a(Q,X)}return function(Q,X,nt,Et){try{Co=0;var ee=We(Q,X,nt,Et);return yr=null,ee}catch(Kt){if(Kt===xr||Kt===Vl)throw Kt;var Pe=hi(29,Kt,null,Q.mode);return Pe.lanes=Et,Pe.return=Q,Pe}finally{}}}var Hs=Om(!0),Pm=Om(!1),Ya=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=zl(e),vm(e,null,a),n}return Pl(e,o,n,a),zl(e)}function Uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gn(e,a)}}function hf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var df=!1;function No(){if(df){var e=vr;if(e!==null)throw e}}function Lo(e,n,a,o){df=!1;var u=e.updateQueue;Ya=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,it=V.next;V.next=null,v===null?f=it:v.next=it,v=V;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==v&&(A===null?vt.firstBaseUpdate=it:A.next=it,vt.lastBaseUpdate=V))}if(f!==null){var Tt=u.baseState;v=0,vt=it=V=null,A=f;do{var lt=A.lane&-536870913,ht=lt!==A.lane;if(ht?(Re&lt)===lt:(o&lt)===lt){lt!==0&&lt===_r&&(df=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Yt=e,ie=A;lt=n;var We=a;switch(ie.tag){case 1:if(Yt=ie.payload,typeof Yt=="function"){Tt=Yt.call(We,Tt,lt);break t}Tt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ie.payload,lt=typeof Yt=="function"?Yt.call(We,Tt,lt):Yt,lt==null)break t;Tt=x({},Tt,lt);break t;case 2:Ya=!0}}lt=A.callback,lt!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[lt]:ht.push(lt))}else ht={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(it=vt=ht,V=Tt):vt=vt.next=ht,v|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ht=A,A=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);vt===null&&(V=Tt),u.baseState=V,u.firstBaseUpdate=it,u.lastBaseUpdate=vt,f===null&&(u.shared.lanes=0),$a|=v,e.lanes=v,e.memoizedState=Tt}}function zm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Im(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zm(a[e],n)}var Sr=P(null),Yl=P(0);function Bm(e,n){e=Ta,St(Yl,e),St(Sr,n),Ta=e|n.baseLanes}function pf(){St(Yl,Ta),St(Sr,Sr.current)}function mf(){Ta=Yl.current,j(Sr),j(Yl)}var di=P(null),Di=null;function Za(e){var n=e.alternate;St(hn,hn.current&1),St(di,e),Di===null&&(n===null||Sr.current!==null||n.memoizedState!==null)&&(Di=e)}function gf(e){St(hn,hn.current),St(di,e),Di===null&&(Di=e)}function Fm(e){e.tag===22?(St(hn,hn.current),St(di,e),Di===null&&(Di=e)):Ka()}function Ka(){St(hn,hn.current),St(di,di.current)}function pi(e){j(di),Di===e&&(Di=null),j(hn)}var hn=P(0);function jl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mh(a)||Eh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _a=0,he=null,ke=null,yn=null,ql=!1,Mr=!1,Gs=!1,Zl=0,Oo=0,Er=null,Dy=0;function cn(){throw Error(s(321))}function _f(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!fi(e[a],n[a]))return!1;return!0}function vf(e,n,a,o,u,f){return _a=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?M0:Lf,Gs=!1,f=a(o,u),Gs=!1,Mr&&(f=Gm(n,a,o,u)),Hm(e),f}function Hm(e){O.H=Io;var n=ke!==null&&ke.next!==null;if(_a=0,yn=ke=he=null,ql=!1,Oo=0,Er=null,n)throw Error(s(300));e===null||Sn||(e=e.dependencies,e!==null&&Fl(e)&&(Sn=!0))}function Gm(e,n,a,o){he=e;var u=0;do{if(Mr&&(Er=null),Oo=0,Mr=!1,25<=u)throw Error(s(301));if(u+=1,yn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=E0,f=n(a,o)}while(Mr);return f}function Uy(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Po(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(he.flags|=1024),n}function xf(){var e=Zl!==0;return Zl=0,e}function yf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Sf(e){if(ql){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ql=!1}_a=0,yn=ke=he=null,Mr=!1,Oo=Zl=0,Er=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?he.memoizedState=yn=e:yn=yn.next=e,yn}function dn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=yn===null?he.memoizedState:yn.next;if(n!==null)yn=n,ke=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},yn===null?he.memoizedState=yn=e:yn=yn.next=e}return yn}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var n=Oo;return Oo+=1,Er===null&&(Er=[]),e=Um(Er,e,n),n=he,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?M0:Lf),e}function Ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===N)return zn(e)}throw Error(s(438,String(e)))}function Mf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Kl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ut;return n.index++,a}function va(e,n){return typeof n=="function"?n(e):n}function Jl(e){var n=dn();return Ef(n,ke,e)}function Ef(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,V=null,it=n,vt=!1;do{var Tt=it.lane&-536870913;if(Tt!==it.lane?(Re&Tt)===Tt:(_a&Tt)===Tt){var lt=it.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Tt===_r&&(vt=!0);else if((_a&lt)===lt){it=it.next,lt===_r&&(vt=!0);continue}else Tt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(A=V=Tt,v=f):V=V.next=Tt,he.lanes|=lt,$a|=lt;Tt=it.action,Gs&&a(f,Tt),f=it.hasEagerState?it.eagerState:a(f,Tt)}else lt={lane:Tt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(A=V=lt,v=f):V=V.next=lt,he.lanes|=Tt,$a|=Tt;it=it.next}while(it!==null&&it!==n);if(V===null?v=f:V.next=A,!fi(f,e.memoizedState)&&(Sn=!0,vt&&(a=vr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function bf(e){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);fi(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Vm(e,n,a){var o=he,u=dn(),f=Ce;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!fi((ke||u).memoizedState,a);if(v&&(u.memoizedState=a,Sn=!0),u=u.queue,Rf(Wm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,br(9,{destroy:void 0},Xm.bind(null,o,u,a,n),null),Ze===null)throw Error(s(349));f||(_a&127)!==0||km(o,n,a)}return a}function km(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Kl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Xm(e,n,a,o){n.value=a,n.getSnapshot=o,Ym(n)&&jm(e)}function Wm(e,n,a){return a(function(){Ym(n)&&jm(e)})}function Ym(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!fi(e,a)}catch{return!0}}function jm(e){var n=Ns(e,2);n!==null&&ri(n,e,2)}function Tf(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),Gs){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},n}function qm(e,n,a,o){return e.baseState=a,Ef(e,ke,typeof o=="function"?o:va)}function Ny(e,n,a,o,u){if(ec(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Zm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var A=a(u,o),V=O.S;V!==null&&V(v,A),Km(e,n,A)}catch(it){Af(e,n,it)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,o),Km(e,n,f)}catch(it){Af(e,n,it)}}function Km(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Qm(e,n,o)},function(o){return Af(e,n,o)}):Qm(e,n,a)}function Qm(e,n,a){n.status="fulfilled",n.value=a,Jm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Zm(e,a)))}function Af(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Jm(n),n=n.next;while(n!==o)}e.action=null}function Jm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function $m(e,n){return n}function t0(e,n){if(Ce){var a=Ze.formState;if(a!==null){t:{var o=he;if(Ce){if($e){e:{for(var u=$e,f=Ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$e=Ui(u.nextSibling),o=u.data==="F!";break t}}Xa(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$m,lastRenderedState:n},a.queue=o,a=x0.bind(null,he,o),o.dispatch=a,o=Tf(!1),f=Nf.bind(null,he,!1,o.queue),o=Zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ny.bind(null,he,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function e0(e){var n=dn();return n0(n,ke,e)}function n0(e,n,a){if(n=Ef(e,n,$m)[0],e=Jl(va)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Po(n)}catch(v){throw v===xr?Vl:v}else o=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,br(9,{destroy:void 0},Ly.bind(null,u,a),null)),[o,f,e]}function Ly(e,n){e.action=n}function i0(e){var n=dn(),a=ke;if(a!==null)return n0(n,a,e);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function br(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Kl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function a0(){return dn().memoizedState}function $l(e,n,a,o){var u=Zn();he.flags|=e,u.memoizedState=br(1|n,{destroy:void 0},a,o===void 0?null:o)}function tc(e,n,a,o){var u=dn();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&_f(o,ke.memoizedState.deps)?u.memoizedState=br(n,f,a,o):(he.flags|=e,u.memoizedState=br(1|n,f,a,o))}function s0(e,n){$l(8390656,8,e,n)}function Rf(e,n){tc(2048,8,e,n)}function Oy(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=Kl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function r0(e){var n=dn().memoizedState;return Oy({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function o0(e,n){return tc(4,2,e,n)}function l0(e,n){return tc(4,4,e,n)}function c0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function u0(e,n,a){a=a!=null?a.concat([e]):null,tc(4,4,c0.bind(null,n,e),a)}function wf(){}function f0(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&_f(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function h0(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&_f(n,o[1]))return o[0];if(o=e(),Gs){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function Cf(e,n,a){return a===void 0||(_a&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=dg(),he.lanes|=e,$a|=e,a)}function d0(e,n,a,o){return fi(a,n)?a:Sr.current!==null?(e=Cf(e,a,o),fi(e,n)||(Sn=!0),e):(_a&42)===0||(_a&1073741824)!==0&&(Re&261930)===0?(Sn=!0,e.memoizedState=a):(e=dg(),he.lanes|=e,$a|=e,n)}function p0(e,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var v=O.T,A={};O.T=A,Nf(e,!1,n,a);try{var V=u(),it=O.S;if(it!==null&&it(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var vt=Cy(V,o);zo(e,n,vt,_i(e))}else zo(e,n,o,_i(e))}catch(Tt){zo(e,n,{then:function(){},status:"rejected",reason:Tt},_i())}finally{H.p=f,v!==null&&A.types!==null&&(v.types=A.types),O.T=v}}function Py(){}function Df(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=m0(e).queue;p0(e,u,n,dt,a===null?Py:function(){return g0(e),a(o)})}function m0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function g0(e){var n=m0(e);n.next===null&&(n=e.alternate.memoizedState),zo(e,n.next.queue,{},_i())}function Uf(){return zn($o)}function _0(){return dn().memoizedState}function v0(){return dn().memoizedState}function zy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();e=ja(a);var o=qa(n,e,a);o!==null&&(ri(o,n,a),Uo(o,n,a)),n={cache:rf()},e.payload=n;return}n=n.return}}function Iy(e,n,a){var o=_i();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ec(e)?y0(n,a):(a=qu(e,n,a,o),a!==null&&(ri(a,e,o),S0(a,n,o)))}function x0(e,n,a){var o=_i();zo(e,n,a,o)}function zo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ec(e))y0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,fi(A,v))return Pl(e,n,u,0),Ze===null&&Ol(),!1}catch{}finally{}if(a=qu(e,n,u,o),a!==null)return ri(a,e,o),S0(a,n,o),!0}return!1}function Nf(e,n,a,o){if(o={lane:2,revertLane:uh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ec(e)){if(n)throw Error(s(479))}else n=qu(e,a,o,2),n!==null&&ri(n,e,2)}function ec(e){var n=e.alternate;return e===he||n!==null&&n===he}function y0(e,n){Mr=ql=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function S0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gn(e,a)}}var Io={readContext:zn,use:Ql,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Io.useEffectEvent=cn;var M0={readContext:zn,use:Ql,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:s0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,$l(4194308,4,c0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return $l(4194308,4,e,n)},useInsertionEffect:function(e,n){$l(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(Gs){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var u=a(n);if(Gs){Ft(!0);try{a(n)}finally{Ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Iy.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Tf(e);var n=e.queue,a=x0.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:wf,useDeferredValue:function(e,n){var a=Zn();return Cf(a,e,n)},useTransition:function(){var e=Tf(!1);return e=p0.bind(null,he,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Zn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ze===null)throw Error(s(349));(Re&127)!==0||km(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,s0(Wm.bind(null,o,f,e),[e]),o.flags|=2048,br(9,{destroy:void 0},Xm.bind(null,o,f,a,n),null),a},useId:function(){var e=Zn(),n=Ze.identifierPrefix;if(Ce){var a=qi,o=ji;a=(o&~(1<<32-W(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Uf,useFormState:t0,useActionState:t0,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Mf,useCacheRefresh:function(){return Zn().memoizedState=zy.bind(null,he)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Lf={readContext:zn,use:Ql,useCallback:f0,useContext:zn,useEffect:Rf,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:h0,useReducer:Jl,useRef:a0,useState:function(){return Jl(va)},useDebugValue:wf,useDeferredValue:function(e,n){var a=dn();return d0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Jl(va)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:Vm,useId:_0,useHostTransitionStatus:Uf,useFormState:e0,useActionState:e0,useOptimistic:function(e,n){var a=dn();return qm(a,ke,e,n)},useMemoCache:Mf,useCacheRefresh:v0};Lf.useEffectEvent=r0;var E0={readContext:zn,use:Ql,useCallback:f0,useContext:zn,useEffect:Rf,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:h0,useReducer:bf,useRef:a0,useState:function(){return bf(va)},useDebugValue:wf,useDeferredValue:function(e,n){var a=dn();return ke===null?Cf(a,e,n):d0(a,ke.memoizedState,e,n)},useTransition:function(){var e=bf(va)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:Vm,useId:_0,useHostTransitionStatus:Uf,useFormState:i0,useActionState:i0,useOptimistic:function(e,n){var a=dn();return ke!==null?qm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:v0};E0.useEffectEvent=r0;function Of(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Pf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=_i(),u=ja(o);u.payload=n,a!=null&&(u.callback=a),n=qa(e,u,o),n!==null&&(ri(n,e,o),Uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=_i(),u=ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=qa(e,u,o),n!==null&&(ri(n,e,o),Uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=_i(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=qa(e,o,a),n!==null&&(ri(n,e,a),Uo(n,e,a))}};function b0(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Eo(a,o)||!Eo(u,f):!0}function T0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Pf.enqueueReplaceState(n,n.state,null)}function Vs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function A0(e){Ll(e)}function R0(e){console.error(e)}function w0(e){Ll(e)}function nc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function C0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function zf(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){nc(e,n)},a}function D0(e){return e=ja(e),e.tag=3,e}function U0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){C0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){C0(n,a,o),typeof u!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function By(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&gr(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 31:case 13:return Di===null?pc():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),oh(e,o,u)),!1;case 22:return a.flags|=65536,o===kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),oh(e,o,u)),!1}throw Error(s(435,a.tag))}return oh(e,o,u),pc(),!1}if(Ce)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==tf&&(e=Error(s(422),{cause:o}),Ao(Ai(e,a)))):(o!==tf&&(n=Error(s(423),{cause:o}),Ao(Ai(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ai(o,a),u=zf(e.stateNode,o,u),hf(e,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:o});if(f=Ai(f,a),Wo===null?Wo=[f]:Wo.push(f),un!==4&&(un=2),n===null)return!0;o=Ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=zf(a.stateNode,o,e),hf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ts===null||!ts.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=D0(u),U0(u,e,a,o),hf(a,u),!1}a=a.return}while(a!==null);return!1}var If=Error(s(461)),Sn=!1;function In(e,n,a,o){n.child=e===null?Pm(n,null,a,o):Hs(n,e.child,a,o)}function N0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var A in o)A!=="ref"&&(v[A]=o[A])}else v=o;return zs(n),o=vf(e,n,a,v,f,u),A=xf(),e!==null&&!Sn?(yf(e,n,u),xa(e,n,u)):(Ce&&A&&Ju(n),n.flags|=1,In(e,n,o,u),n.child)}function L0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Zu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,O0(e,n,f,o,u)):(e=Il(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Wf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(v,o)&&e.ref===n.ref)return xa(e,n,u)}return n.flags|=1,e=da(f,o),e.ref=n.ref,e.return=n,n.child=e}function O0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Eo(f,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=f,Wf(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,xa(e,n,u)}return Bf(e,n,a,o,u)}function P0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return z0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gl(n,f!==null?f.cachePool:null),f!==null?Bm(n,f):pf(),Fm(n);else return o=n.lanes=536870912,z0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Gl(n,f.cachePool),Bm(n,f),Ka(),n.memoizedState=null):(e!==null&&Gl(n,null),pf(),Ka());return In(e,n,u,a),n.child}function Bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function z0(e,n,a,o,u){var f=lf();return f=f===null?null:{parent:xn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Gl(n,null),pf(),Fm(n),e!==null&&gr(e,n,o,!0),n.childLanes=u,null}function ic(e,n){return n=sc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function I0(e,n,a){return Hs(n,e.child,null,a),e=ic(n,n.pendingProps),e.flags|=2,pi(n),n.memoizedState=null,e}function Fy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=ic(n,o),n.lanes=536870912,Bo(null,e);if(gf(n),(e=$e)?(e=Zg(e,Ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:ji,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=ym(e),a.return=n,n.child=a,Pn=n,$e=null)):e=null,e===null)throw Xa(n);return n.lanes=536870912,null}return ic(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(gf(n),u)if(n.flags&256)n.flags&=-257,n=I0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||gr(e,n,a,!1),u=(a&e.childLanes)!==0,Sn||u){if(o=Ze,o!==null&&(v=$n(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ns(e,v),ri(o,e,v),If;pc(),n=I0(e,n,a)}else e=f.treeContext,$e=Ui(v.nextSibling),Pn=n,Ce=!0,ka=null,Ci=!1,e!==null&&Em(n,e),n=ic(n,o),n.flags|=4096;return n}return e=da(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ac(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Bf(e,n,a,o,u){return zs(n),a=vf(e,n,a,o,void 0,u),o=xf(),e!==null&&!Sn?(yf(e,n,u),xa(e,n,u)):(Ce&&o&&Ju(n),n.flags|=1,In(e,n,a,u),n.child)}function B0(e,n,a,o,u,f){return zs(n),n.updateQueue=null,a=Gm(n,o,a,u),Hm(e),o=xf(),e!==null&&!Sn?(yf(e,n,f),xa(e,n,f)):(Ce&&o&&Ju(n),n.flags|=1,In(e,n,a,f),n.child)}function F0(e,n,a,o,u){if(zs(n),n.stateNode===null){var f=hr,v=a.contextType;typeof v=="object"&&v!==null&&(f=zn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},uf(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?zn(v):hr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Of(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Pf.enqueueReplaceState(f,f.state,null),Lo(n,o,f,u),No(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,V=Vs(a,A);f.props=V;var it=f.context,vt=a.contextType;v=hr,typeof vt=="object"&&vt!==null&&(v=zn(vt));var Tt=a.getDerivedStateFromProps;vt=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||it!==v)&&T0(n,f,o,v),Ya=!1;var lt=n.memoizedState;f.state=lt,Lo(n,o,f,u),No(),it=n.memoizedState,A||lt!==it||Ya?(typeof Tt=="function"&&(Of(n,a,Tt,o),it=n.memoizedState),(V=Ya||b0(n,a,V,o,lt,it,v))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=v,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ff(e,n),v=n.memoizedProps,vt=Vs(a,v),f.props=vt,Tt=n.pendingProps,lt=f.context,it=a.contextType,V=hr,typeof it=="object"&&it!==null&&(V=zn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Tt||lt!==V)&&T0(n,f,o,V),Ya=!1,lt=n.memoizedState,f.state=lt,Lo(n,o,f,u),No();var ht=n.memoizedState;v!==Tt||lt!==ht||Ya||e!==null&&e.dependencies!==null&&Fl(e.dependencies)?(typeof A=="function"&&(Of(n,a,A,o),ht=n.memoizedState),(vt=Ya||b0(n,a,vt,o,lt,ht,V)||e!==null&&e.dependencies!==null&&Fl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ht,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ht,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),f.props=o,f.state=ht,f.context=V,o=vt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ac(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Hs(n,e.child,null,u),n.child=Hs(n,null,a,u)):In(e,n,a,u),n.memoizedState=f.state,e=n.child):e=xa(e,n,u),e}function H0(e,n,a,o){return Os(),n.flags|=256,In(e,n,a,o),n.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:Cm()}}function Gf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gi),e}function G0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?Za(n):Ka(),(e=$e)?(e=Zg(e,Ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:ji,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=ym(e),a.return=n,n.child=a,Pn=n,$e=null)):e=null,e===null)throw Xa(n);return Eh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ka(),u=n.mode,A=sc({mode:"hidden",children:A},u),o=Ls(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Hf(a),o.childLanes=Gf(e,v,a),n.memoizedState=Ff,Bo(null,o)):(Za(n),Vf(n,A))}var V=e.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Za(n),n.flags&=-257,n=kf(e,n,a)):n.memoizedState!==null?(Ka(),n.child=e.child,n.flags|=128,n=null):(Ka(),A=o.fallback,u=n.mode,o=sc({mode:"visible",children:o.children},u),A=Ls(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Hs(n,e.child,null,a),o=n.child,o.memoizedState=Hf(a),o.childLanes=Gf(e,v,a),n.memoizedState=Ff,n=Bo(null,o));else if(Za(n),Eh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var it=v.dgst;v=it,o=Error(s(419)),o.stack="",o.digest=v,Ao({value:o,source:null,stack:null}),n=kf(e,n,a)}else if(Sn||gr(e,n,a,!1),v=(a&e.childLanes)!==0,Sn||v){if(v=Ze,v!==null&&(o=$n(v,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Ns(e,o),ri(v,e,o),If;Mh(A)||pc(),n=kf(e,n,a)}else Mh(A)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,$e=Ui(A.nextSibling),Pn=n,Ce=!0,ka=null,Ci=!1,e!==null&&Em(n,e),n=Vf(n,o.children),n.flags|=4096);return n}return u?(Ka(),A=o.fallback,u=n.mode,V=e.child,it=V.sibling,o=da(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,it!==null?A=da(it,A):(A=Ls(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Bo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Hf(a):(u=A.cachePool,u!==null?(V=xn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Cm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Gf(e,v,a),n.memoizedState=Ff,Bo(e.child,o)):(Za(n),a=e.child,e=a.sibling,a=da(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Vf(e,n){return n=sc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function sc(e,n){return e=hi(22,e,null,n),e.lanes=0,e}function kf(e,n,a){return Hs(n,e.child,null,a),e=Vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function V0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),af(e.return,n,a)}function Xf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function k0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=hn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,St(hn,v),In(e,n,o,a),o=Ce?To:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&V0(e,a,n);else if(e.tag===19)V0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&jl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Xf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&jl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Xf(n,!0,a,null,f,o);break;case"together":Xf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function xa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=da(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=da(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Wf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Fl(e)))}function Hy(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),Wa(n,xn,e.memoizedState.cache),Os();break;case 27:case 5:Qt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?G0(e,n,a):(Za(n),e=xa(e,n,a),e!==null?e.sibling:null);Za(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(gr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return k0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(hn,hn.current),o)break;return null;case 22:return n.lanes=0,P0(e,n,a,n.pendingProps);case 24:Wa(n,xn,e.memoizedState.cache)}return xa(e,n,a)}function X0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Wf(e,a)&&(n.flags&128)===0)return Sn=!1,Hy(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,Ce&&(n.flags&1048576)!==0&&Mm(n,To,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Bs(n.elementType),n.type=e,typeof e=="function")Zu(e)?(o=Vs(e,o),n.tag=1,n=F0(null,n,e,o,a)):(n.tag=0,n=Bf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=N0(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=L0(null,n,e,o,a);break t}}throw n=st(e)||e,Error(s(306,n,""))}}return n;case 0:return Bf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Vs(o,n.pendingProps),F0(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ff(e,n),Lo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Wa(n,xn,o),o!==f.cache&&sf(n,[xn],a,!0),No(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=H0(e,n,o,a);break t}else if(o!==u){u=Ai(Error(s(424)),n),Ao(u),n=H0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Ui(e.firstChild),Pn=n,Ce=!0,ka=null,Ci=!0,a=Pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),o===u){n=xa(e,n,a);break t}In(e,n,o,a)}n=n.child}return n;case 26:return ac(e,n),e===null?(a=e_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=Sc(at.current).createElement(a),o[on]=n,o[ln]=e,Bn(o,a,e),Y(o),n.stateNode=o):n.memoizedState=e_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Ce&&(o=n.stateNode=Jg(n.type,n.pendingProps,at.current),Pn=n,Ci=!0,u=$e,as(n.type)?(bh=u,$e=Ui(o.firstChild)):$e=u),In(e,n,n.pendingProps.children,a),ac(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=$e)&&(o=gS(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,Pn=n,$e=Ui(o.firstChild),Ci=!1,u=!0):u=!1),u||Xa(n)),Qt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,xh(u,f)?o=null:v!==null&&xh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=vf(e,n,Uy,null,null,a),$o._currentValue=u),ac(e,n),In(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=$e)&&(a=_S(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,Pn=n,$e=null,e=!0):e=!1),e||Xa(n)),null;case 13:return G0(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Hs(n,null,o,a):In(e,n,o,a),n.child;case 11:return N0(e,n,n.type,n.pendingProps,a);case 7:return In(e,n,n.pendingProps,a),n.child;case 8:return In(e,n,n.pendingProps.children,a),n.child;case 12:return In(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Wa(n,n.type,o.value),In(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,zs(n),u=zn(u),o=o(u),n.flags|=1,In(e,n,o,a),n.child;case 14:return L0(e,n,n.type,n.pendingProps,a);case 15:return O0(e,n,n.type,n.pendingProps,a);case 19:return k0(e,n,a);case 31:return Fy(e,n,a);case 22:return P0(e,n,a,n.pendingProps);case 24:return zs(n),o=zn(xn),e===null?(u=lf(),u===null&&(u=Ze,f=rf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},uf(n),Wa(n,xn,u)):((e.lanes&a)!==0&&(ff(e,n),Lo(n,null,null,a),No()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Wa(n,xn,o)):(o=f.cache,Wa(n,xn,o),o!==u.cache&&sf(n,[xn],a,!0))),In(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(e){e.flags|=4}function Yf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(_g())e.flags|=8192;else throw Fs=kl,cf}else e.flags&=-16777217}function W0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r_(n))if(_g())e.flags|=8192;else throw Fs=kl,cf}function rc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ce():536870912,e.lanes|=n,wr|=n)}function Fo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Gy(e,n,a){var o=n.pendingProps;switch($u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ga(xn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mr(n)?ya(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ef())),tn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ya(n),f!==null?(tn(n),W0(n,f)):(tn(n),Yf(n,u,null,o,a))):f?f!==e.memoizedState?(ya(n),tn(n),W0(n,f)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ya(n),tn(n),Yf(n,u,e,o,a)),null;case 27:if(zt(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ya(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}e=Rt.current,mr(n)?bm(n):(e=Jg(u,o,a),n.stateNode=e,ya(n))}return tn(n),null;case 5:if(zt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ya(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(f=Rt.current,mr(n))bm(n);else{var v=Sc(at.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[on]=n,f[ln]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ya(n)}}return tn(n),Yf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ya(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,mr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Gg(e.nodeValue,a)),e||Xa(n,!0)}else e=Sc(e).createTextNode(o),e[on]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=mr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=mr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),rc(n,n.updateQueue),tn(n),null);case 4:return kt(),e===null&&ph(n.stateNode.containerInfo),tn(n),null;case 10:return ga(n.type),tn(n),null;case 19:if(j(hn),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Fo(o,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=jl(e),f!==null){for(n.flags|=128,Fo(o,!1),e=f.updateQueue,n.updateQueue=e,rc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)xm(a,e),a=a.sibling;return St(hn,hn.current&1|2),Ce&&pa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>fc&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304)}else{if(!u)if(e=jl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,rc(n,e),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ce)return tn(n),null}else 2*E()-o.renderingStartTime>fc&&a!==536870912&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=hn.current,St(hn,u?a&1|2:a&1),Ce&&pa(n,o.treeForkCount),e):(tn(n),null);case 22:case 23:return pi(n),mf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&rc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(Is),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(xn),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Vy(e,n){switch($u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ga(xn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return zt(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));Os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(hn),null;case 4:return kt(),null;case 10:return ga(n.type),null;case 22:case 23:return pi(n),mf(),e!==null&&j(Is),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ga(xn),null;case 25:return null;default:return null}}function Y0(e,n){switch($u(n),n.tag){case 3:ga(xn),kt();break;case 26:case 27:case 5:zt(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:j(hn);break;case 10:ga(n.type);break;case 22:case 23:pi(n),mf(),e!==null&&j(Is);break;case 24:ga(xn)}}function Ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Qa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var V=a,it=A;try{it()}catch(vt){Ge(u,V,vt)}}}o=o.next}while(o!==f)}}catch(vt){Ge(n,n.return,vt)}}function j0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Im(n,a)}catch(o){Ge(e,e.return,o)}}}function q0(e,n,a){a.props=Vs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function Z0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function jf(e,n,a){try{var o=e.stateNode;uS(o,e.type,a,n),o[ln]=n}catch(u){Ge(e,e.return,u)}}function K0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&as(e.type)||e.tag===4}function qf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||K0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&as(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=fa));else if(o!==4&&(o===27&&as(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Zf(e,n,a),e=e.sibling;e!==null;)Zf(e,n,a),e=e.sibling}function oc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&as(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(oc(e,n,a),e=e.sibling;e!==null;)oc(e,n,a),e=e.sibling}function Q0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,o,a),n[on]=e,n[ln]=a}catch(f){Ge(e,e.return,f)}}var Sa=!1,Mn=!1,Kf=!1,J0=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function ky(e,n){if(e=e.containerInfo,_h=wc,e=um(e),Vu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,V=-1,it=0,vt=0,Tt=e,lt=null;e:for(;;){for(var ht;Tt!==a||u!==0&&Tt.nodeType!==3||(A=v+u),Tt!==f||o!==0&&Tt.nodeType!==3||(V=v+o),Tt.nodeType===3&&(v+=Tt.nodeValue.length),(ht=Tt.firstChild)!==null;)lt=Tt,Tt=ht;for(;;){if(Tt===e)break e;if(lt===a&&++it===u&&(A=v),lt===f&&++vt===o&&(V=v),(ht=Tt.nextSibling)!==null)break;Tt=lt,lt=Tt.parentNode}Tt=ht}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(vh={focusedElem:e,selectionRange:a},wc=!1,Nn=n;Nn!==null;)if(n=Nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Nn=e;else for(;Nn!==null;){switch(n=Nn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Yt=Vs(a.type,u);e=o.getSnapshotBeforeUpdate(Yt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ge(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Nn=e;break}Nn=n.return}}function $0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),o&4&&Ho(5,a);break;case 1:if(Ea(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ge(a,a.return,v)}else{var u=Vs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ge(a,a.return,v)}}o&64&&j0(a),o&512&&Go(a,a.return);break;case 3:if(Ea(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Im(e,n)}catch(v){Ge(a,a.return,v)}}break;case 27:n===null&&o&4&&Q0(a);case 26:case 5:Ea(e,a),n===null&&o&4&&Z0(a),o&512&&Go(a,a.return);break;case 12:Ea(e,a);break;case 31:Ea(e,a),o&4&&ng(e,a);break;case 13:Ea(e,a),o&4&&ig(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Jy.bind(null,a),vS(e,a))));break;case 22:if(o=a.memoizedState!==null||Sa,!o){n=n!==null&&n.memoizedState!==null||Mn,u=Sa;var f=Mn;Sa=o,(Mn=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),Sa=u,Mn=f}break;case 30:break;default:Ea(e,a)}}function tg(e){var n=e.alternate;n!==null&&(e.alternate=null,tg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&mo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,ni=!1;function Ma(e,n,a){for(a=a.child;a!==null;)eg(e,n,a),a=a.sibling}function eg(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Nt,a)}catch{}switch(a.tag){case 26:Mn||Zi(a,n),Ma(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||Zi(a,n);var o=an,u=ni;as(a.type)&&(an=a.stateNode,ni=!1),Ma(e,n,a),Ko(a.stateNode),an=o,ni=u;break;case 5:Mn||Zi(a,n);case 6:if(o=an,u=ni,an=null,Ma(e,n,a),an=o,ni=u,an!==null)if(ni)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{an.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:an!==null&&(ni?(e=an,jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zr(e)):jg(an,a.stateNode));break;case 4:o=an,u=ni,an=a.stateNode.containerInfo,ni=!0,Ma(e,n,a),an=o,ni=u;break;case 0:case 11:case 14:case 15:Qa(2,a,n),Mn||Qa(4,a,n),Ma(e,n,a);break;case 1:Mn||(Zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&q0(a,n,o)),Ma(e,n,a);break;case 21:Ma(e,n,a);break;case 22:Mn=(o=Mn)||a.memoizedState!==null,Ma(e,n,a),Mn=o;break;default:Ma(e,n,a)}}function ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zr(e)}catch(a){Ge(n,n.return,a)}}}function ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zr(e)}catch(a){Ge(n,n.return,a)}}function Xy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new J0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new J0),n;default:throw Error(s(435,e.tag))}}function lc(e,n){var a=Xy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=$y.bind(null,e,o);o.then(u,u)}})}function ii(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(as(A.type)){an=A.stateNode,ni=!1;break t}break;case 5:an=A.stateNode,ni=!1;break t;case 3:case 4:an=A.stateNode.containerInfo,ni=!0;break t}A=A.return}if(an===null)throw Error(s(160));eg(f,v,u),an=null,ni=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ag(n,e),n=n.sibling}var Fi=null;function ag(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),o&4&&(Qa(3,e,e.return),Ho(3,e),Qa(5,e,e.return));break;case 1:ii(n,e),ai(e),o&512&&(Mn||a===null||Zi(a,a.return)),o&64&&Sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Fi;if(ii(n,e),ai(e),o&512&&(Mn||a===null||Zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ca]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Bn(f,o,a),f[on]=e,Y(f),o=f;break t;case"link":var v=a_("link","href",u).get(o+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=a_("meta","content",u).get(o+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=e,Y(f),o=f}e.stateNode=o}else s_(u,e.type,e.stateNode);else e.stateNode=i_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?s_(u,e.type,e.stateNode):i_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&jf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ii(n,e),ai(e),o&512&&(Mn||a===null||Zi(a,a.return)),a!==null&&o&4&&jf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ii(n,e),ai(e),o&512&&(Mn||a===null||Zi(a,a.return)),e.flags&32){u=e.stateNode;try{qn(u,"")}catch(Yt){Ge(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,jf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Kf=!0);break;case 6:if(ii(n,e),ai(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Yt){Ge(e,e.return,Yt)}}break;case 3:if(bc=null,u=Fi,Fi=Mc(n.containerInfo),ii(n,e),Fi=u,ai(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zr(n.containerInfo)}catch(Yt){Ge(e,e.return,Yt)}Kf&&(Kf=!1,sg(e));break;case 4:o=Fi,Fi=Mc(e.stateNode.containerInfo),ii(n,e),ai(e),Fi=o;break;case 12:ii(n,e),ai(e);break;case 31:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,lc(e,o)));break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(uc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,lc(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,it=Sa,vt=Mn;if(Sa=it||u,Mn=vt||V,ii(n,e),Mn=vt,Sa=it,ai(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Sa||Mn||ks(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=V.stateNode;var Tt=V.memoizedProps.style,lt=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Yt){Ge(V,V.return,Yt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Yt){Ge(V,V.return,Yt)}}}else if(n.tag===18){if(a===null){V=n;try{var ht=V.stateNode;u?qg(ht,!0):qg(V.stateNode,!1)}catch(Yt){Ge(V,V.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,lc(e,a))));break;case 19:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,lc(e,o)));break;case 30:break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(K0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=qf(e);oc(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(qn(v,""),a.flags&=-33);var A=qf(e);oc(e,A,v);break;case 3:case 4:var V=a.stateNode.containerInfo,it=qf(e);Zf(e,it,V);break;default:throw Error(s(161))}}catch(vt){Ge(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$0(e,n.alternate,n),n=n.sibling}function ks(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Qa(4,n,n.return),ks(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&q0(n,n.return,a),ks(n);break;case 27:Ko(n.stateNode);case 26:case 5:Zi(n,n.return),ks(n);break;case 22:n.memoizedState===null&&ks(n);break;case 30:ks(n);break;default:ks(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),Ho(4,f);break;case 1:if(ba(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ge(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)zm(V[u],A)}catch(it){Ge(o,o.return,it)}}a&&v&64&&j0(f),Go(f,f.return);break;case 27:Q0(f);case 26:case 5:ba(u,f,a),a&&o===null&&v&4&&Z0(f),Go(f,f.return);break;case 12:ba(u,f,a);break;case 31:ba(u,f,a),a&&v&4&&ng(u,f);break;case 13:ba(u,f,a),a&&v&4&&ig(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),Go(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function Qf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ro(a))}function Jf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ro(e))}function Hi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(e,n,a,o),n=n.sibling}function rg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(e,n,a,o),u&2048&&Ho(9,n);break;case 1:Hi(e,n,a,o);break;case 3:Hi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ro(e)));break;case 12:if(u&2048){Hi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(n,n.return,V)}}else Hi(e,n,a,o);break;case 31:Hi(e,n,a,o);break;case 13:Hi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Hi(e,n,a,o):Vo(e,n):f._visibility&2?Hi(e,n,a,o):(f._visibility|=2,Tr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Qf(v,n);break;case 24:Hi(e,n,a,o),u&2048&&Jf(n.alternate,n);break;default:Hi(e,n,a,o)}}function Tr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,V=o,it=v.flags;switch(v.tag){case 0:case 11:case 15:Tr(f,v,A,V,u),Ho(8,v);break;case 23:break;case 22:var vt=v.stateNode;v.memoizedState!==null?vt._visibility&2?Tr(f,v,A,V,u):Vo(f,v):(vt._visibility|=2,Tr(f,v,A,V,u)),u&&it&2048&&Qf(v.alternate,v);break;case 24:Tr(f,v,A,V,u),u&&it&2048&&Jf(v.alternate,v);break;default:Tr(f,v,A,V,u)}n=n.sibling}}function Vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Vo(a,o),u&2048&&Qf(o.alternate,o);break;case 24:Vo(a,o),u&2048&&Jf(o.alternate,o);break;default:Vo(a,o)}n=n.sibling}}var ko=8192;function Ar(e,n,a){if(e.subtreeFlags&ko)for(e=e.child;e!==null;)og(e,n,a),e=e.sibling}function og(e,n,a){switch(e.tag){case 26:Ar(e,n,a),e.flags&ko&&e.memoizedState!==null&&DS(a,Fi,e.memoizedState,e.memoizedProps);break;case 5:Ar(e,n,a);break;case 3:case 4:var o=Fi;Fi=Mc(e.stateNode.containerInfo),Ar(e,n,a),Fi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ko,ko=16777216,Ar(e,n,a),ko=o):Ar(e,n,a));break;default:Ar(e,n,a)}}function lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,ug(o,e)}lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:Xo(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:Xo(e);break;case 12:Xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,cc(e)):Xo(e);break;default:Xo(e)}}function cc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,ug(o,e)}lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),cc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,cc(n));break;default:cc(n)}e=e.sibling}}function ug(e,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:Qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Nn=o;else t:for(a=e;Nn!==null;){o=Nn;var u=o.sibling,f=o.return;if(tg(o),o===a){Nn=null;break t}if(u!==null){u.return=f,Nn=u;break t}Nn=f}}}var Wy={getCacheForType:function(e){var n=zn(xn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return zn(xn).controller.signal}},Yy=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ze=null,Se=null,Re=0,He=0,mi=null,Ja=!1,Rr=!1,$f=!1,Ta=0,un=0,$a=0,Xs=0,th=0,gi=0,wr=0,Wo=null,si=null,eh=!1,uc=0,fg=0,fc=1/0,hc=null,ts=null,An=0,es=null,Cr=null,Aa=0,nh=0,ih=null,hg=null,Yo=0,ah=null;function _i(){return(Ie&2)!==0&&Re!==0?Re&-Re:O.T!==null?uh():ti()}function dg(){if(gi===0)if((Re&536870912)===0||Ce){var e=gt;gt<<=1,(gt&3932160)===0&&(gt=262144),gi=e}else gi=536870912;return e=di.current,e!==null&&(e.flags|=32),gi}function ri(e,n,a){(e===Ze&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Dr(e,0),ns(e,Re,gi,!1)),Ae(e,a),((Ie&2)===0||e!==Ze)&&(e===Ze&&((Ie&2)===0&&(Xs|=a),un===4&&ns(e,Re,gi,!1)),Ki(e))}function pg(e,n,a){if((Ie&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?Zy(e,n):rh(e,n,!0),f=o;do{if(u===0){Rr&&!o&&ns(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!jy(a)){u=rh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=e;u=Wo;var V=A.current.memoizedState.isDehydrated;if(V&&(Dr(A,v).flags|=256),v=rh(A,v,!1),v!==2){if($f&&!V){A.errorRecoveryDisabledLanes|=f,Xs|=f,u=4;break t}f=si,si=u,f!==null&&(si===null?si=f:si.push.apply(si,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Dr(e,0),ns(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ns(o,n,gi,!Ja);break t;case 2:si=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=uc+300-E(),10<u)){if(ns(o,n,gi,!Ja),$(o,0,!0)!==0)break t;Aa=n,o.timeoutHandle=Wg(mg.bind(null,o,a,si,hc,eh,n,gi,Xs,wr,Ja,f,"Throttled",-0,0),u);break t}mg(o,a,si,hc,eh,n,gi,Xs,wr,Ja,f,null,-0,0)}}break}while(!0);Ki(e)}function mg(e,n,a,o,u,f,v,A,V,it,vt,Tt,lt,ht){if(e.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},og(n,f,Tt);var Yt=(f&62914560)===f?uc-E():(f&4194048)===f?fg-E():0;if(Yt=US(Tt,Yt),Yt!==null){Aa=f,e.cancelPendingCommit=Yt(Eg.bind(null,e,n,f,a,o,u,v,A,V,vt,Tt,null,lt,ht)),ns(e,f,v,!it);return}}Eg(e,n,f,a,o,u,v,A,V)}function jy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!fi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ns(e,n,a,o){n&=~th,n&=~Xs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-W(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&sn(e,a,n)}function dc(){return(Ie&6)===0?(jo(0),!1):!0}function sh(){if(Se!==null){if(He===0)var e=Se.return;else e=Se,ma=Ps=null,Sf(e),yr=null,Co=0,e=Se;for(;e!==null;)Y0(e.alternate,e),e=e.return;Se=null}}function Dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Aa=0,sh(),Ze=e,Se=a=da(e.current,null),Re=n,He=0,mi=null,Ja=!1,Rr=Dt(e,n),$f=!1,wr=gi=th=Xs=$a=un=0,si=Wo=null,eh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-W(o),f=1<<u;n|=e[u],o&=~f}return Ta=n,Ol(),a}function gg(e,n){he=null,O.H=Io,n===xr||n===Vl?(n=Nm(),He=3):n===cf?(n=Nm(),He=4):He=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Se===null&&(un=1,nc(e,Ai(n,e.current)))}function _g(){var e=di.current;return e===null?!0:(Re&4194048)===Re?Di===null:(Re&62914560)===Re||(Re&536870912)!==0?e===Di:!1}function vg(){var e=O.H;return O.H=Io,e===null?Io:e}function xg(){var e=O.A;return O.A=Wy,e}function pc(){un=4,Ja||(Re&4194048)!==Re&&di.current!==null||(Rr=!0),($a&134217727)===0&&(Xs&134217727)===0||Ze===null||ns(Ze,Re,gi,!1)}function rh(e,n,a){var o=Ie;Ie|=2;var u=vg(),f=xg();(Ze!==e||Re!==n)&&(hc=null,Dr(e,n)),n=!1;var v=un;t:do try{if(He!==0&&Se!==null){var A=Se,V=mi;switch(He){case 8:sh(),v=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var it=He;if(He=0,mi=null,Ur(e,A,V,it),a&&Rr){v=0;break t}break;default:it=He,He=0,mi=null,Ur(e,A,V,it)}}qy(),v=un;break}catch(vt){gg(e,vt)}while(!0);return n&&e.shellSuspendCounter++,ma=Ps=null,Ie=o,O.H=u,O.A=f,Se===null&&(Ze=null,Re=0,Ol()),v}function qy(){for(;Se!==null;)yg(Se)}function Zy(e,n){var a=Ie;Ie|=2;var o=vg(),u=xg();Ze!==e||Re!==n?(hc=null,fc=E()+500,Dr(e,n)):Rr=Dt(e,n);t:do try{if(He!==0&&Se!==null){n=Se;var f=mi;e:switch(He){case 1:He=0,mi=null,Ur(e,n,f,1);break;case 2:case 9:if(Dm(f)){He=0,mi=null,Sg(n);break}n=function(){He!==2&&He!==9||Ze!==e||(He=7),Ki(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Dm(f)?(He=0,mi=null,Sg(n)):(He=0,mi=null,Ur(e,n,f,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var A=Se;if(v?r_(v):A.stateNode.complete){He=0,mi=null;var V=A.sibling;if(V!==null)Se=V;else{var it=A.return;it!==null?(Se=it,mc(it)):Se=null}break e}}He=0,mi=null,Ur(e,n,f,5);break;case 6:He=0,mi=null,Ur(e,n,f,6);break;case 8:sh(),un=6;break t;default:throw Error(s(462))}}Ky();break}catch(vt){gg(e,vt)}while(!0);return ma=Ps=null,O.H=o,O.A=u,Ie=a,Se!==null?0:(Ze=null,Re=0,Ol(),un)}function Ky(){for(;Se!==null&&!jt();)yg(Se)}function yg(e){var n=X0(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,n===null?mc(e):Se=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=B0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=B0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Sf(n);default:Y0(a,n),n=Se=xm(n,Ta),n=X0(a,n,Ta)}e.memoizedProps=e.pendingProps,n===null?mc(e):Se=n}function Ur(e,n,a,o){ma=Ps=null,Sf(n),yr=null,Co=0;var u=n.return;try{if(By(e,u,n,a,Re)){un=1,nc(e,Ai(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;un=1,nc(e,Ai(a,e.current)),Se=null;return}n.flags&32768?(Ce||o===1?e=!0:Rr||(Re&536870912)!==0?e=!1:(Ja=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),Mg(n,e)):mc(n)}function mc(e){var n=e;do{if((n.flags&32768)!==0){Mg(n,Ja);return}e=n.return;var a=Gy(n.alternate,n,Ta);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);un===0&&(un=5)}function Mg(e,n){do{var a=Vy(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);un=6,Se=null}function Eg(e,n,a,o,u,f,v,A,V){e.cancelPendingCommit=null;do gc();while(An!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ju,Be(e,a,f,v,A,V),e===Ze&&(Se=Ze=null,Re=0),Cr=n,es=e,Aa=a,nh=f,ih=u,hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tS(mt,function(){return wg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=H.p,H.p=2,v=Ie,Ie|=4;try{ky(e,n,a)}finally{Ie=v,H.p=u,O.T=o}}An=1,bg(),Tg(),Ag()}}function bg(){if(An===1){An=0;var e=es,n=Cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Ie;Ie|=4;try{ag(n,e);var f=vh,v=um(e.containerInfo),A=f.focusedElem,V=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&cm(A.ownerDocument.documentElement,A)){if(V!==null&&Vu(A)){var it=V.start,vt=V.end;if(vt===void 0&&(vt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(vt,A.value.length);else{var Tt=A.ownerDocument||document,lt=Tt&&Tt.defaultView||window;if(lt.getSelection){var ht=lt.getSelection(),Yt=A.textContent.length,ie=Math.min(V.start,Yt),We=V.end===void 0?ie:Math.min(V.end,Yt);!ht.extend&&ie>We&&(v=We,We=ie,ie=v);var Q=lm(A,ie),X=lm(A,We);if(Q&&X&&(ht.rangeCount!==1||ht.anchorNode!==Q.node||ht.anchorOffset!==Q.offset||ht.focusNode!==X.node||ht.focusOffset!==X.offset)){var nt=Tt.createRange();nt.setStart(Q.node,Q.offset),ht.removeAllRanges(),ie>We?(ht.addRange(nt),ht.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),ht.addRange(nt))}}}}for(Tt=[],ht=A;ht=ht.parentNode;)ht.nodeType===1&&Tt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Tt.length;A++){var Et=Tt[A];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}wc=!!_h,vh=_h=null}finally{Ie=u,H.p=o,O.T=a}}e.current=n,An=2}}function Tg(){if(An===2){An=0;var e=es,n=Cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Ie;Ie|=4;try{$0(e,n.alternate,n)}finally{Ie=u,H.p=o,O.T=a}}An=3}}function Ag(){if(An===4||An===3){An=0,L();var e=es,n=Cr,a=Aa,o=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,Cr=es=null,Rg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ts=null),Wn(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Nt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=H.p,H.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var A=o[v];f(A.value,{componentStack:A.stack})}}finally{O.T=n,H.p=u}}(Aa&3)!==0&&gc(),Ki(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===ah?Yo++:(Yo=0,ah=e):Yo=0,jo(0)}}function Rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ro(n)))}function gc(){return bg(),Tg(),Ag(),wg()}function wg(){if(An!==5)return!1;var e=es,n=nh;nh=0;var a=Wn(Aa),o=O.T,u=H.p;try{H.p=32>a?32:a,O.T=null,a=ih,ih=null;var f=es,v=Aa;if(An=0,Cr=es=null,Aa=0,(Ie&6)!==0)throw Error(s(331));var A=Ie;if(Ie|=4,cg(f.current),rg(f,f.current,v,a),Ie=A,jo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Nt,f)}catch{}return!0}finally{H.p=u,O.T=o,Rg(e,n)}}function Cg(e,n,a){n=Ai(a,n),n=zf(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(Ae(e,2),Ki(e))}function Ge(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ts===null||!ts.has(o))){e=Ai(a,e),a=D0(2),o=qa(n,a,2),o!==null&&(U0(a,o,n,e),Ae(o,2),Ki(o));break}}n=n.return}}function oh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Yy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||($f=!0,u.add(a),e=Qy.bind(null,e,n,a),n.then(e,e))}function Qy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ze===e&&(Re&a)===a&&(un===4||un===3&&(Re&62914560)===Re&&300>E()-uc?(Ie&2)===0&&Dr(e,0):th|=a,wr===Re&&(wr=0)),Ki(e)}function Dg(e,n){n===0&&(n=ce()),e=Ns(e,n),e!==null&&(Ae(e,n),Ki(e))}function Jy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(e,a)}function $y(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Dg(e,a)}function tS(e,n){return Te(e,n)}var _c=null,Nr=null,lh=!1,vc=!1,ch=!1,is=0;function Ki(e){e!==Nr&&e.next===null&&(Nr===null?_c=Nr=e:Nr=Nr.next=e),vc=!0,lh||(lh=!0,nS())}function jo(e,n){if(!ch&&vc){ch=!0;do for(var a=!1,o=_c;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-W(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Og(o,f))}else f=Re,f=$(o,o===Ze?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Dt(o,f)||(a=!0,Og(o,f));o=o.next}while(a);ch=!1}}function eS(){Ug()}function Ug(){vc=lh=!1;var e=0;is!==0&&hS()&&(e=is);for(var n=E(),a=null,o=_c;o!==null;){var u=o.next,f=Ng(o,n);f===0?(o.next=null,a===null?_c=u:a.next=u,u===null&&(Nr=a)):(a=o,(e!==0||(f&3)!==0)&&(vc=!0)),o=u}An!==0&&An!==5||jo(e),is!==0&&(is=0)}function Ng(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-W(f),A=1<<v,V=u[v];V===-1?((A&a)===0||(A&o)!==0)&&(u[v]=Jt(A,n)):V<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ze,a=Re,a=$(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Le(o),Wn(a)){case 2:case 8:a=At;break;case 32:a=mt;break;case 268435456:a=Ot;break;default:a=mt}return o=Lg.bind(null,e),a=Te(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(gc()&&e.callbackNode!==a)return null;var o=Re;return o=$(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(pg(e,o,n),Ng(e,E()),e.callbackNode!=null&&e.callbackNode===a?Lg.bind(null,e):null)}function Og(e,n){if(gc())return null;pg(e,n,!0)}function nS(){pS(function(){(Ie&6)!==0?Te(yt,eS):Ug()})}function uh(){if(is===0){var e=_r;e===0&&(e=_t,_t<<=1,(_t&261888)===0&&(_t=256)),is=e}return is}function Pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Al(""+e)}function zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function iS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Pg((u[ln]||null).action),v=o.submitter;v&&(n=(n=v[ln]||null)?Pg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new Dl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(is!==0){var V=v?zg(u,v):new FormData(u);Df(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=v?zg(u,v):new FormData(u),Df(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var fh=0;fh<Yu.length;fh++){var hh=Yu[fh],aS=hh.toLowerCase(),sS=hh[0].toUpperCase()+hh.slice(1);Bi(aS,"on"+sS)}Bi(dm,"onAnimationEnd"),Bi(pm,"onAnimationIteration"),Bi(mm,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(Sy,"onTransitionRun"),Bi(My,"onTransitionStart"),Bi(Ey,"onTransitionCancel"),Bi(gm,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function Ig(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var A=o[v],V=A.instance,it=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=it;try{f(u)}catch(vt){Ll(vt)}u.currentTarget=null,f=V}else for(v=0;v<o.length;v++){if(A=o[v],V=A.instance,it=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=it;try{f(u)}catch(vt){Ll(vt)}u.currentTarget=null,f=V}}}}function Me(e,n){var a=n[bi];a===void 0&&(a=n[bi]=new Set);var o=e+"__bubble";a.has(o)||(Bg(n,e,2,!1),a.add(o))}function dh(e,n,a){var o=0;n&&(o|=4),Bg(a,e,o,n)}var xc="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[xc]){e[xc]=!0,ft.forEach(function(a){a!=="selectionchange"&&(rS.has(a)||dh(a,!1,e),dh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xc]||(n[xc]=!0,dh("selectionchange",!1,n))}}function Bg(e,n,a,o){switch(d_(n)){case 2:var u=OS;break;case 8:u=PS;break;default:u=Ch}a=u.bind(null,n,a,e),u=void 0,!Lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function mh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var A=o.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=o.return;v!==null;){var V=v.tag;if((V===3||V===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Fa(A),v===null)return;if(V=v.tag,V===5||V===6||V===26||V===27){o=f=v;continue t}A=A.parentNode}}o=o.return}kp(function(){var it=f,vt=Uu(a),Tt=[];t:{var lt=_m.get(e);if(lt!==void 0){var ht=Dl,Yt=e;switch(e){case"keypress":if(wl(a)===0)break t;case"keydown":case"keyup":ht=$x;break;case"focusin":Yt="focus",ht=Iu;break;case"focusout":Yt="blur",ht=Iu;break;case"beforeblur":case"afterblur":ht=Iu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=ny;break;case dm:case pm:case mm:ht=Xx;break;case gm:ht=ay;break;case"scroll":case"scrollend":ht=Fx;break;case"wheel":ht=ry;break;case"copy":case"cut":case"paste":ht=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=qp;break;case"toggle":case"beforetoggle":ht=ly}var ie=(n&4)!==0,We=!ie&&(e==="scroll"||e==="scrollend"),Q=ie?lt!==null?lt+"Capture":null:lt;ie=[];for(var X=it,nt;X!==null;){var Et=X;if(nt=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||nt===null||Q===null||(Et=go(X,Q),Et!=null&&ie.push(Zo(X,Et,nt))),We)break;X=X.return}0<ie.length&&(lt=new ht(lt,Yt,null,a,vt),Tt.push({event:lt,listeners:ie}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",lt&&a!==Du&&(Yt=a.relatedTarget||a.fromElement)&&(Fa(Yt)||Yt[Ei]))break t;if((ht||lt)&&(lt=vt.window===vt?vt:(lt=vt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ht?(Yt=a.relatedTarget||a.toElement,ht=it,Yt=Yt?Fa(Yt):null,Yt!==null&&(We=c(Yt),ie=Yt.tag,Yt!==We||ie!==5&&ie!==27&&ie!==6)&&(Yt=null)):(ht=null,Yt=it),ht!==Yt)){if(ie=Yp,Et="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ie=qp,Et="onPointerLeave",Q="onPointerEnter",X="pointer"),We=ht==null?lt:ws(ht),nt=Yt==null?lt:ws(Yt),lt=new ie(Et,X+"leave",ht,a,vt),lt.target=We,lt.relatedTarget=nt,Et=null,Fa(vt)===it&&(ie=new ie(Q,X+"enter",Yt,a,vt),ie.target=nt,ie.relatedTarget=We,Et=ie),We=Et,ht&&Yt)e:{for(ie=oS,Q=ht,X=Yt,nt=0,Et=Q;Et;Et=ie(Et))nt++;Et=0;for(var ee=X;ee;ee=ie(ee))Et++;for(;0<nt-Et;)Q=ie(Q),nt--;for(;0<Et-nt;)X=ie(X),Et--;for(;nt--;){if(Q===X||X!==null&&Q===X.alternate){ie=Q;break e}Q=ie(Q),X=ie(X)}ie=null}else ie=null;ht!==null&&Fg(Tt,lt,ht,ie,!1),Yt!==null&&We!==null&&Fg(Tt,We,Yt,ie,!0)}}t:{if(lt=it?ws(it):window,ht=lt.nodeName&&lt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&lt.type==="file")var Pe=nm;else if(tm(lt))if(im)Pe=vy;else{Pe=gy;var Kt=my}else ht=lt.nodeName,!ht||ht.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?it&&sr(it.elementType)&&(Pe=nm):Pe=_y;if(Pe&&(Pe=Pe(e,it))){em(Tt,Pe,a,vt);break t}Kt&&Kt(e,lt,it),e==="focusout"&&it&&lt.type==="number"&&it.memoizedProps.value!=null&&zi(lt,"number",lt.value)}switch(Kt=it?ws(it):window,e){case"focusin":(tm(Kt)||Kt.contentEditable==="true")&&(cr=Kt,ku=it,bo=null);break;case"focusout":bo=ku=cr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,fm(Tt,a,vt);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":fm(Tt,a,vt)}var me;if(Fu)t:{switch(e){case"compositionstart":var we="onCompositionStart";break t;case"compositionend":we="onCompositionEnd";break t;case"compositionupdate":we="onCompositionUpdate";break t}we=void 0}else lr?Jp(e,a)&&(we="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Zp&&a.locale!=="ko"&&(lr||we!=="onCompositionStart"?we==="onCompositionEnd"&&lr&&(me=Xp()):(Ga=vt,Ou="value"in Ga?Ga.value:Ga.textContent,lr=!0)),Kt=yc(it,we),0<Kt.length&&(we=new jp(we,e,null,a,vt),Tt.push({event:we,listeners:Kt}),me?we.data=me:(me=$p(a),me!==null&&(we.data=me)))),(me=uy?fy(e,a):hy(e,a))&&(we=yc(it,"onBeforeInput"),0<we.length&&(Kt=new jp("onBeforeInput","beforeinput",null,a,vt),Tt.push({event:Kt,listeners:we}),Kt.data=me)),iS(Tt,e,it,a,vt)}Ig(Tt,n)})}function Zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function yc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=go(e,a),u!=null&&o.unshift(Zo(e,u,f)),u=go(e,n),u!=null&&o.push(Zo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function oS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fg(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var A=a,V=A.alternate,it=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||it===null||(V=it,u?(it=go(a,f),it!=null&&v.unshift(Zo(a,it,V))):u||(it=go(a,f),it!=null&&v.push(Zo(a,it,V)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function Hg(e){return(typeof e=="string"?e:""+e).replace(lS,`
`).replace(cS,"")}function Gg(e,n){return n=Hg(n),Hg(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||qn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&qn(e,""+o);break;case"className":ue(e,"class",o);break;case"tabIndex":ue(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(e,a,o);break;case"style":ua(e,o,f);break;case"data":if(n!=="object"){ue(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Al(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Al(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=fa);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Al(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),se(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ix.get(a)||a,se(e,a,o))}}function gh(e,n,a,o,u,f){switch(a){case"style":ua(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?qn(e,o):(typeof o=="number"||typeof o=="bigint")&&qn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[ln]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):se(e,a,o)}}}function Bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,v,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=v=u=null,V=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var vt=a[o];if(vt!=null)switch(o){case"name":u=vt;break;case"type":v=vt;break;case"checked":V=vt;break;case"defaultChecked":it=vt;break;case"value":f=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,vt,a,null)}}ci(e,f,A,V,it,v,u,!1);return;case"select":Me("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":o=A;default:Xe(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!o,n!=null?ui(e,!!o,n,!1):a!=null&&ui(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,v,A,a,null)}_n(e,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,V,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<qo.length;o++)Me(qo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,it,o,a,null)}return;default:if(sr(n)){for(vt in a)a.hasOwnProperty(vt)&&(o=a[vt],o!==void 0&&gh(e,n,vt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Xe(e,n,A,o,a,null))}function uS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,V=null,it=null,vt=null;for(ht in a){var Tt=a[ht];if(a.hasOwnProperty(ht)&&Tt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":V=Tt;default:o.hasOwnProperty(ht)||Xe(e,n,ht,null,o,Tt)}}for(var lt in o){var ht=o[lt];if(Tt=a[lt],o.hasOwnProperty(lt)&&(ht!=null||Tt!=null))switch(lt){case"type":f=ht;break;case"name":u=ht;break;case"checked":it=ht;break;case"defaultChecked":vt=ht;break;case"value":v=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==Tt&&Xe(e,n,lt,ht,o,Tt)}}jn(e,v,A,V,it,vt,f,u);return;case"select":ht=v=A=lt=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ht=V;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":lt=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==V&&Xe(e,n,u,f,o,V)}n=A,a=v,o=ht,lt!=null?ui(e,!!a,lt,!1):!!o!=!!a&&(n!=null?ui(e,!!a,n,!0):ui(e,!!a,a?[]:"",!1));return;case"textarea":ht=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":lt=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,v,u,o,f)}Fe(e,lt,ht);return;case"option":for(var Yt in a)if(lt=a[Yt],a.hasOwnProperty(Yt)&&lt!=null&&!o.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:Xe(e,n,Yt,null,o,lt)}for(V in o)if(lt=o[V],ht=a[V],o.hasOwnProperty(V)&&lt!==ht&&(lt!=null||ht!=null))switch(V){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Xe(e,n,V,lt,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)lt=a[ie],a.hasOwnProperty(ie)&&lt!=null&&!o.hasOwnProperty(ie)&&Xe(e,n,ie,null,o,lt);for(it in o)if(lt=o[it],ht=a[it],o.hasOwnProperty(it)&&lt!==ht&&(lt!=null||ht!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Xe(e,n,it,lt,o,ht)}return;default:if(sr(n)){for(var We in a)lt=a[We],a.hasOwnProperty(We)&&lt!==void 0&&!o.hasOwnProperty(We)&&gh(e,n,We,void 0,o,lt);for(vt in o)lt=o[vt],ht=a[vt],!o.hasOwnProperty(vt)||lt===ht||lt===void 0&&ht===void 0||gh(e,n,vt,lt,o,ht);return}}for(var Q in a)lt=a[Q],a.hasOwnProperty(Q)&&lt!=null&&!o.hasOwnProperty(Q)&&Xe(e,n,Q,null,o,lt);for(Tt in o)lt=o[Tt],ht=a[Tt],!o.hasOwnProperty(Tt)||lt===ht||lt==null&&ht==null||Xe(e,n,Tt,lt,o,ht)}function Vg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&Vg(v)){for(v=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],it=V.startTime;if(it>A)break;var vt=V.transferSize,Tt=V.initiatorType;vt&&Vg(Tt)&&(V=V.responseEnd,v+=vt*(V<A?1:(A-it)/(V-it)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _h=null,vh=null;function Sc(e){return e.nodeType===9?e:e.ownerDocument}function kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yh=null;function hS(){var e=window.event;return e&&e.type==="popstate"?e===yh?!1:(yh=e,!0):(yh=null,!1)}var Wg=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(e){return Yg.resolve(null).then(e).catch(mS)}:Wg;function mS(e){setTimeout(function(){throw e})}function as(e){return e==="head"}function jg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),zr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ko(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ko(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[ca]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ko(e.ownerDocument.body);a=u}while(a);zr(n)}function qg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Sh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sh(a),mo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ca])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ui(e.nextSibling),e===null)break}return null}function _S(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ui(e.nextSibling),e===null))return null;return e}function Zg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ui(e.nextSibling),e===null))return null;return e}function Mh(e){return e.data==="$?"||e.data==="$~"}function Eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var bh=null;function Kg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Jg(e,n,a){switch(n=Sc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ko(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);mo(e)}var Ni=new Map,$g=new Set;function Mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ra=H.d;H.d={f:xS,r:yS,D:SS,C:MS,L:ES,m:bS,X:AS,S:TS,M:RS};function xS(){var e=Ra.f(),n=dc();return e||n}function yS(e){var n=Ha(e);n!==null&&n.tag===5&&n.type==="form"?g0(n):Ra.r(e)}var Lr=typeof document>"u"?null:document;function t_(e,n,a){var o=Lr;if(o&&typeof n=="string"&&n){var u=le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),$g.has(u)||($g.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Bn(n,"link",e),Y(n),o.head.appendChild(n)))}}function SS(e){Ra.D(e),t_("dns-prefetch",e,null)}function MS(e,n){Ra.C(e,n),t_("preconnect",e,n)}function ES(e,n,a){Ra.L(e,n,a);var o=Lr;if(o&&e&&n){var u='link[rel="preload"][as="'+le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(e)+'"]';var f=u;switch(n){case"style":f=Or(e);break;case"script":f=Pr(e)}Ni.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ni.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Qo(f))||n==="script"&&o.querySelector(Jo(f))||(n=o.createElement("link"),Bn(n,"link",e),Y(n),o.head.appendChild(n)))}}function bS(e,n){Ra.m(e,n);var a=Lr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+le(o)+'"][href="'+le(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Pr(e)}if(!Ni.has(f)&&(e=x({rel:"modulepreload",href:e},n),Ni.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jo(f)))return}o=a.createElement("link"),Bn(o,"link",e),Y(o),a.head.appendChild(o)}}}function TS(e,n,a){Ra.S(e,n,a);var o=Lr;if(o&&e){var u=R(o).hoistableStyles,f=Or(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=o.querySelector(Qo(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ni.get(f))&&Th(e,a);var V=v=o.createElement("link");Y(V),Bn(V,"link",e),V._p=new Promise(function(it,vt){V.onload=it,V.onerror=vt}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ec(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function AS(e,n){Ra.X(e,n);var a=Lr;if(a&&e){var o=R(a).hoistableScripts,u=Pr(e),f=o.get(u);f||(f=a.querySelector(Jo(u)),f||(e=x({src:e,async:!0},n),(n=Ni.get(u))&&Ah(e,n),f=a.createElement("script"),Y(f),Bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function RS(e,n){Ra.M(e,n);var a=Lr;if(a&&e){var o=R(a).hoistableScripts,u=Pr(e),f=o.get(u);f||(f=a.querySelector(Jo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Ni.get(u))&&Ah(e,n),f=a.createElement("script"),Y(f),Bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function e_(e,n,a,o){var u=(u=at.current)?Mc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Or(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Or(a.href);var f=R(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Qo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ni.set(e,a),f||wS(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Pr(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Or(e){return'href="'+le(e)+'"'}function Qo(e){return'link[rel="stylesheet"]['+e+"]"}function n_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function wS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Bn(n,"link",a),Y(n),e.head.appendChild(n))}function Pr(e){return'[src="'+le(e)+'"]'}function Jo(e){return"script[async]"+e}function i_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+le(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),Bn(o,"style",u),Ec(o,a.precedence,e),n.instance=o;case"stylesheet":u=Or(a.href);var f=e.querySelector(Qo(u));if(f)return n.state.loading|=4,n.instance=f,Y(f),f;o=n_(a),(u=Ni.get(u))&&Th(o,u),f=(e.ownerDocument||e).createElement("link"),Y(f);var v=f;return v._p=new Promise(function(A,V){v.onload=A,v.onerror=V}),Bn(f,"link",o),n.state.loading|=4,Ec(f,a.precedence,e),n.instance=f;case"script":return f=Pr(a.src),(u=e.querySelector(Jo(f)))?(n.instance=u,Y(u),u):(o=a,(u=Ni.get(f))&&(o=x({},a),Ah(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),Bn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ec(o,a.precedence,e));return n.instance}function Ec(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var A=o[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var bc=null;function a_(e,n,a){if(bc===null){var o=new Map,u=bc=new Map;u.set(a,o)}else u=bc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ca]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=o.get(v);A?A.push(f):o.set(v,[f])}}return o}function s_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function CS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function DS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Or(o.href),f=n.querySelector(Qo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Tc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Y(f);return}f=n.ownerDocument||n,o=n_(o),(u=Ni.get(u))&&Th(o,u),f=f.createElement("link"),Y(f);var v=f;v._p=new Promise(function(A,V){v.onload=A,v.onerror=V}),Bn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Tc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Rh=0;function US(e,n){return e.stylesheets&&e.count===0&&Rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Rh===0&&(Rh=62500*fS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Rh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ac=null;function Rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ac=new Map,n.forEach(NS,e),Ac=null,Tc.call(e))}function NS(e,n){if(!(n.state.loading&4)){var a=Ac.get(e);if(a)var o=a.get(null);else{a=new Map,Ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=Tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var $o={$$typeof:N,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function LS(e,n,a,o,u,f,v,A,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.hiddenUpdates=Ht(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function o_(e,n,a,o,u,f,v,A,V,it,vt,Tt){return e=new LS(e,n,a,v,V,it,vt,Tt,A),n=1,f===!0&&(n|=24),f=hi(3,null,null,n),e.current=f,f.stateNode=e,n=rf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},uf(f),e}function l_(e){return e?(e=hr,e):hr}function c_(e,n,a,o,u,f){u=l_(u),o.context===null?o.context=u:o.pendingContext=u,o=ja(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=qa(e,o,n),a!==null&&(ri(a,e,n),Uo(a,e,n))}function u_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function wh(e,n){u_(e,n),(e=e.alternate)&&u_(e,n)}function f_(e){if(e.tag===13||e.tag===31){var n=Ns(e,67108864);n!==null&&ri(n,e,67108864),wh(e,67108864)}}function h_(e){if(e.tag===13||e.tag===31){var n=_i();n=On(n);var a=Ns(e,n);a!==null&&ri(a,e,n),wh(e,n)}}var wc=!0;function OS(e,n,a,o){var u=O.T;O.T=null;var f=H.p;try{H.p=2,Ch(e,n,a,o)}finally{H.p=f,O.T=u}}function PS(e,n,a,o){var u=O.T;O.T=null;var f=H.p;try{H.p=8,Ch(e,n,a,o)}finally{H.p=f,O.T=u}}function Ch(e,n,a,o){if(wc){var u=Dh(o);if(u===null)mh(e,n,o,Cc,a),p_(e,o);else if(IS(u,e,n,a,o))o.stopPropagation();else if(p_(e,o),n&4&&-1<zS.indexOf(e)){for(;u!==null;){var f=Ha(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=ct(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var V=1<<31-W(v);A.entanglements[1]|=V,v&=~V}Ki(f),(Ie&6)===0&&(fc=E()+500,jo(0))}}break;case 31:case 13:A=Ns(f,2),A!==null&&ri(A,f,2),dc(),wh(f,2)}if(f=Dh(o),f===null&&mh(e,n,o,Cc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else mh(e,n,o,null,a)}}function Dh(e){return e=Uu(e),Uh(e)}var Cc=null;function Uh(e){if(Cc=null,e=Fa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Cc=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case yt:return 2;case At:return 8;case mt:case Xt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var Nh=!1,ss=null,rs=null,os=null,tl=new Map,el=new Map,ls=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(e,n){switch(e){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function nl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ha(n),n!==null&&f_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function IS(e,n,a,o,u){switch(n){case"focusin":return ss=nl(ss,e,n,a,o,u),!0;case"dragenter":return rs=nl(rs,e,n,a,o,u),!0;case"mouseover":return os=nl(os,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return tl.set(f,nl(tl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,el.set(f,nl(el.get(f)||null,e,n,a,o,u)),!0}return!1}function m_(e){var n=Fa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Yi(e.priority,function(){h_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Yi(e.priority,function(){h_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Dh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Du=o,a.target.dispatchEvent(o),Du=null}else return n=Ha(a),n!==null&&f_(n),e.blockedOn=a,!1;n.shift()}return!0}function g_(e,n,a){Dc(e)&&a.delete(n)}function BS(){Nh=!1,ss!==null&&Dc(ss)&&(ss=null),rs!==null&&Dc(rs)&&(rs=null),os!==null&&Dc(os)&&(os=null),tl.forEach(g_),el.forEach(g_)}function Uc(e,n){e.blockedOn===n&&(e.blockedOn=null,Nh||(Nh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,BS)))}var Nc=null;function __(e){Nc!==e&&(Nc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Nc===e&&(Nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Uh(o||a)===null)continue;break}var f=Ha(a);f!==null&&(e.splice(n,3),n-=3,Df(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zr(e){function n(V){return Uc(V,e)}ss!==null&&Uc(ss,e),rs!==null&&Uc(rs,e),os!==null&&Uc(os,e),tl.forEach(n),el.forEach(n);for(var a=0;a<ls.length;a++){var o=ls[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ls.length&&(a=ls[0],a.blockedOn===null);)m_(a),a.blockedOn===null&&ls.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[ln]||null;if(typeof f=="function")v||__(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[ln]||null)A=v.formAction;else if(Uh(u)!==null)continue}else A=v.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),__(a)}}}function v_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Lh(e){this._internalRoot=e}Lc.prototype.render=Lh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=_i();c_(a,o,e,n,null,null)},Lc.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;c_(e.current,2,null,e,null,null),dc(),n[Ei]=null}};function Lc(e){this._internalRoot=e}Lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ti();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ls.length&&n!==0&&n<ls[a].priority;a++);ls.splice(a,0,e),a===0&&m_(e)}};var x_=t.version;if(x_!=="19.2.4")throw Error(s(527,x_,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var FS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{Nt=Oc.inject(FS),wt=Oc}catch{}}return al.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=A0,f=R0,v=w0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=o_(e,1,!1,null,null,a,o,null,u,f,v,v_),e[Ei]=n.current,ph(e),new Lh(n)},al.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=A0,v=R0,A=w0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=o_(e,1,!0,n,a??null,o,u,V,f,v,A,v_),n.context=l_(null),a=n.current,o=_i(),o=On(o),u=ja(o),u.callback=null,qa(a,u,o),a=o,n.current.lanes=a,Ae(n,a),Ki(n),e[Ei]=n.current,ph(e),new Lc(n)},al.version="19.2.4",al}var C_;function ZS(){if(C_)return Ph.exports;C_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ph.exports=qS(),Ph.exports}var KS=ZS(),ye=Mp();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="183",er={ROTATE:0,DOLLY:1,PAN:2},no={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},QS=0,D_=1,JS=2,du=1,$S=2,_l=3,Ms=0,li=1,Jn=2,Pa=0,ao=1,U_=2,N_=3,L_=4,tM=5,Qs=100,eM=101,nM=102,iM=103,aM=104,sM=200,rM=201,oM=202,lM=203,Ad=204,Rd=205,cM=206,uM=207,fM=208,hM=209,dM=210,pM=211,mM=212,gM=213,_M=214,wd=0,Cd=1,Dd=2,ro=3,Ud=4,Nd=5,Ld=6,Od=7,bp=0,vM=1,xM=2,aa=0,$v=1,tx=2,ex=3,nx=4,ix=5,ax=6,sx=7,rx=300,nr=301,oo=302,Hh=303,Gh=304,Au=306,Pd=1e3,Oa=1001,zd=1002,Fn=1003,yM=1004,Pc=1005,kn=1006,Vh=1007,$s=1008,yi=1009,ox=1010,lx=1011,Sl=1012,Tp=1013,ra=1014,Xi=1015,Ia=1016,Ap=1017,Rp=1018,Ml=1020,cx=35902,ux=35899,fx=1021,hx=1022,Wi=1023,Ba=1026,tr=1027,wp=1028,Cp=1029,lo=1030,Dp=1031,Up=1033,pu=33776,mu=33777,gu=33778,_u=33779,Id=35840,Bd=35841,Fd=35842,Hd=35843,Gd=36196,Vd=37492,kd=37496,Xd=37488,Wd=37489,Yd=37490,jd=37491,qd=37808,Zd=37809,Kd=37810,Qd=37811,Jd=37812,$d=37813,tp=37814,ep=37815,np=37816,ip=37817,ap=37818,sp=37819,rp=37820,op=37821,lp=36492,cp=36494,up=36495,fp=36283,hp=36284,dp=36285,pp=36286,SM=3200,dx=0,MM=1,vs="",Oi="srgb",co="srgb-linear",xu="linear",Ve="srgb",Ir=7680,O_=519,EM=512,bM=513,TM=514,Np=515,AM=516,RM=517,Lp=518,wM=519,mp=35044,P_="300 es",ia=2e3,El=2001;function CM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function DM(){const r=yu("canvas");return r.style.display="block",r}const z_={};function Su(...r){const t="THREE."+r.shift();console.log(t,...r)}function px(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function re(...r){r=px(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function De(...r){r=px(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Mu(...r){const t=r.join(" ");t in z_||(z_[t]=!0,re(...r))}function UM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const NM={[wd]:Cd,[Dd]:Ld,[Ud]:Od,[ro]:Nd,[Cd]:wd,[Ld]:Dd,[Od]:Ud,[Nd]:ro};class ir{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xl=Math.PI/180,gp=180/Math.PI;function Ss(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ee(r,t,i){return Math.max(t,Math.min(i,r))}function LM(r,t){return(r%t+t)%t}function kh(r,t,i){return(1-i)*r+i*t}function na(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ye(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const OM={DEG2RAD:xl};class ae{constructor(t=0,i=0){ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],M=c[h+1],b=c[h+2],w=c[h+3];if(x!==w||m!==g||d!==M||_!==b){let S=m*g+d*M+_*b+x*w;S<0&&(g=-g,M=-M,b=-b,w=-w,S=-S);let y=1-p;if(S<.9995){const C=Math.acos(S),N=Math.sin(C);y=Math.sin(y*C)/N,p=Math.sin(p*C)/N,m=m*y+g*p,d=d*y+M*p,_=_*y+b*p,x=x*y+w*p}else{m=m*y+g*p,d=d*y+M*p,_=_*y+b*p,x=x*y+w*p;const C=1/Math.sqrt(m*m+d*d+_*_+x*x);m*=C,d*=C,_*=C,x*=C}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],x=c[h],g=c[h+1],M=c[h+2],b=c[h+3];return t[i]=p*b+_*x+m*M-d*g,t[i+1]=m*b+_*g+d*x-p*M,t[i+2]=d*b+_*M+p*g-m*x,t[i+3]=_*b-p*x-m*g-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),x=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*_*x+d*M*b,this._y=d*M*x-g*_*b,this._z=d*_*b+g*M*x,this._w=d*_*x-g*M*b;break;case"YXZ":this._x=g*_*x+d*M*b,this._y=d*M*x-g*_*b,this._z=d*_*b-g*M*x,this._w=d*_*x+g*M*b;break;case"ZXY":this._x=g*_*x-d*M*b,this._y=d*M*x+g*_*b,this._z=d*_*b+g*M*x,this._w=d*_*x-g*M*b;break;case"ZYX":this._x=g*_*x-d*M*b,this._y=d*M*x+g*_*b,this._z=d*_*b-g*M*x,this._w=d*_*x+g*M*b;break;case"YZX":this._x=g*_*x+d*M*b,this._y=d*M*x+g*_*b,this._z=d*_*b-g*M*x,this._w=d*_*x-g*M*b;break;case"XZY":this._x=g*_*x-d*M*b,this._y=d*M*x-g*_*b,this._z=d*_*b+g*M*x,this._w=d*_*x+g*M*b;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],_=i[6],x=i[10],g=s+p+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-d)*M,this._z=(h-l)*M}else if(s>p&&s>x){const M=2*Math.sqrt(1+s-p-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+d)/M}else if(p>x){const M=2*Math.sqrt(1+p-s-x);this._w=(c-d)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-p);this._w=(h-l)/M,this._x=(c+d)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+h*p+l*d-c*m,this._y=l*_+h*m+c*p-s*d,this._z=c*_+h*d+s*m-l*p,this._w=h*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(I_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(I_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),_=2*(p*i-c*l),x=2*(c*s-h*i);return this.x=i+m*d+h*x-p*_,this.y=s+m*_+p*d-c*x,this.z=l+m*x+c*_-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Xh.copy(this).projectOnVector(t),this.sub(Xh)}reflect(t){return this.sub(Xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xh=new Z,I_=new Es;class ge{constructor(t,i,s,l,c,h,p,m,d){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],_=s[4],x=s[7],g=s[2],M=s[5],b=s[8],w=l[0],S=l[3],y=l[6],C=l[1],N=l[4],U=l[7],F=l[2],I=l[5],B=l[8];return c[0]=h*w+p*C+m*F,c[3]=h*S+p*N+m*I,c[6]=h*y+p*U+m*B,c[1]=d*w+_*C+x*F,c[4]=d*S+_*N+x*I,c[7]=d*y+_*U+x*B,c[2]=g*w+M*C+b*F,c[5]=g*S+M*N+b*I,c[8]=g*y+M*U+b*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*h*_-i*p*d-s*c*_+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],x=_*h-p*d,g=p*m-_*c,M=d*c-h*m,b=i*x+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(l*d-_*s)*w,t[2]=(p*s-l*h)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=M*w,t[7]=(s*m-d*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Wh.makeScale(t,i)),this}rotate(t){return this.premultiply(Wh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Wh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wh=new ge,B_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PM(){const r={enabled:!0,workingColorSpace:co,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=so(l.r),l.g=so(l.g),l.b=so(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Mu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Mu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[co]:{primaries:t,whitePoint:s,transfer:xu,toXYZ:B_,fromXYZ:F_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:B_,fromXYZ:F_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),r}const Ne=PM();function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function so(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class zM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Br===void 0&&(Br=yu("canvas")),Br.width=t.width,Br.height=t.height;const l=Br.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Br}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=yu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=za(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(za(i[s]/255)*255):i[s]=za(i[s]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let IM=0;class Op{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Yh(l[h].image)):c.push(Yh(l[h]))}else c=Yh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let BM=0;const jh=new Z;class Xn extends ir{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Oa,l=Oa,c=kn,h=$s,p=Wi,m=yi,d=Xn.DEFAULT_ANISOTROPY,_=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Ss(),this.name="",this.source=new Op(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pd:t.x=t.x-Math.floor(t.x);break;case Oa:t.x=t.x<0?0:1;break;case zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pd:t.y=t.y-Math.floor(t.y);break;case Oa:t.y=t.y<0?0:1;break;case zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=rx;Xn.DEFAULT_ANISOTROPY=1;class fn{constructor(t=0,i=0,s=0,l=1){fn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],_=m[4],x=m[8],g=m[1],M=m[5],b=m[9],w=m[2],S=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+w)<.1&&Math.abs(b+S)<.1&&Math.abs(d+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,U=(M+1)/2,F=(y+1)/2,I=(_+g)/4,B=(x+w)/4,T=(b+S)/4;return N>U&&N>F?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=I/s,c=B/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=I/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=B/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((S-b)*(S-b)+(x-w)*(x-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(S-b)/C,this.y=(x-w)/C,this.z=(g-_)/C,this.w=Math.acos((d+M+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FM extends ir{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,t,i),this.scissorTest=!1,this.viewport=new fn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Xn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Op(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends FM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class mx extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(t,i,s,l,c,h,p,m,d,_,x,g,M,b,w,S){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,_,x,g,M,b,w,S)}set(t,i,s,l,c,h,p,m,d,_,x,g,M,b,w,S){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=h,y[9]=p,y[13]=m,y[2]=d,y[6]=_,y[10]=x,y[14]=g,y[3]=M,y[7]=b,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Fr.setFromMatrixColumn(t,0).length(),c=1/Fr.setFromMatrixColumn(t,1).length(),h=1/Fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,M=h*x,b=p*_,w=p*x;i[0]=m*_,i[4]=-m*x,i[8]=d,i[1]=M+b*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=b+M*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,M=m*x,b=d*_,w=d*x;i[0]=g+w*p,i[4]=b*p-M,i[8]=h*d,i[1]=h*x,i[5]=h*_,i[9]=-p,i[2]=M*p-b,i[6]=w+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,M=m*x,b=d*_,w=d*x;i[0]=g-w*p,i[4]=-h*x,i[8]=b+M*p,i[1]=M+b*p,i[5]=h*_,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,M=h*x,b=p*_,w=p*x;i[0]=m*_,i[4]=b*d-M,i[8]=g*d+w,i[1]=m*x,i[5]=w*d+g,i[9]=M*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,M=h*d,b=p*m,w=p*d;i[0]=m*_,i[4]=w-g*x,i[8]=b*x+M,i[1]=x,i[5]=h*_,i[9]=-p*_,i[2]=-d*_,i[6]=M*x+b,i[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,M=h*d,b=p*m,w=p*d;i[0]=m*_,i[4]=-x,i[8]=d*_,i[1]=g*x+w,i[5]=h*_,i[9]=M*x-b,i[2]=b*x-M,i[6]=p*_,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GM,t,VM)}lookAt(t,i,s){const l=this.elements;return vi.subVectors(t,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),us.crossVectors(s,vi),us.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),us.crossVectors(s,vi)),us.normalize(),zc.crossVectors(vi,us),l[0]=us.x,l[4]=zc.x,l[8]=vi.x,l[1]=us.y,l[5]=zc.y,l[9]=vi.y,l[2]=us.z,l[6]=zc.z,l[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],_=s[1],x=s[5],g=s[9],M=s[13],b=s[2],w=s[6],S=s[10],y=s[14],C=s[3],N=s[7],U=s[11],F=s[15],I=l[0],B=l[4],T=l[8],D=l[12],ut=l[1],G=l[5],K=l[9],tt=l[13],st=l[2],J=l[6],O=l[10],H=l[14],dt=l[3],xt=l[7],Ut=l[11],P=l[15];return c[0]=h*I+p*ut+m*st+d*dt,c[4]=h*B+p*G+m*J+d*xt,c[8]=h*T+p*K+m*O+d*Ut,c[12]=h*D+p*tt+m*H+d*P,c[1]=_*I+x*ut+g*st+M*dt,c[5]=_*B+x*G+g*J+M*xt,c[9]=_*T+x*K+g*O+M*Ut,c[13]=_*D+x*tt+g*H+M*P,c[2]=b*I+w*ut+S*st+y*dt,c[6]=b*B+w*G+S*J+y*xt,c[10]=b*T+w*K+S*O+y*Ut,c[14]=b*D+w*tt+S*H+y*P,c[3]=C*I+N*ut+U*st+F*dt,c[7]=C*B+N*G+U*J+F*xt,c[11]=C*T+N*K+U*O+F*Ut,c[15]=C*D+N*tt+U*H+F*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],_=t[2],x=t[6],g=t[10],M=t[14],b=t[3],w=t[7],S=t[11],y=t[15],C=m*M-d*g,N=p*M-d*x,U=p*g-m*x,F=h*M-d*_,I=h*g-m*_,B=h*x-p*_;return i*(w*C-S*N+y*U)-s*(b*C-S*F+y*I)+l*(b*N-w*F+y*B)-c*(b*U-w*I+S*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],x=t[9],g=t[10],M=t[11],b=t[12],w=t[13],S=t[14],y=t[15],C=i*p-s*h,N=i*m-l*h,U=i*d-c*h,F=s*m-l*p,I=s*d-c*p,B=l*d-c*m,T=_*w-x*b,D=_*S-g*b,ut=_*y-M*b,G=x*S-g*w,K=x*y-M*w,tt=g*y-M*S,st=C*tt-N*K+U*G+F*ut-I*D+B*T;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/st;return t[0]=(p*tt-m*K+d*G)*J,t[1]=(l*K-s*tt-c*G)*J,t[2]=(w*B-S*I+y*F)*J,t[3]=(g*I-x*B-M*F)*J,t[4]=(m*ut-h*tt-d*D)*J,t[5]=(i*tt-l*ut+c*D)*J,t[6]=(S*U-b*B-y*N)*J,t[7]=(_*B-g*U+M*N)*J,t[8]=(h*K-p*ut+d*T)*J,t[9]=(s*ut-i*K-c*T)*J,t[10]=(b*I-w*U+y*C)*J,t[11]=(x*U-_*I-M*C)*J,t[12]=(p*D-h*G-m*T)*J,t[13]=(i*G-s*D+l*T)*J,t[14]=(w*N-b*F-S*C)*J,t[15]=(_*F-x*N+g*C)*J,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,_=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*h,0,d*m-l*p,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,_=h+h,x=p+p,g=c*d,M=c*_,b=c*x,w=h*_,S=h*x,y=p*x,C=m*d,N=m*_,U=m*x,F=s.x,I=s.y,B=s.z;return l[0]=(1-(w+y))*F,l[1]=(M+U)*F,l[2]=(b-N)*F,l[3]=0,l[4]=(M-U)*I,l[5]=(1-(g+y))*I,l[6]=(S+C)*I,l[7]=0,l[8]=(b+N)*B,l[9]=(S-C)*B,l[10]=(1-(g+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Fr.set(l[0],l[1],l[2]).length();const p=Fr.set(l[4],l[5],l[6]).length(),m=Fr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Gi.copy(this);const d=1/h,_=1/p,x=1/m;return Gi.elements[0]*=d,Gi.elements[1]*=d,Gi.elements[2]*=d,Gi.elements[4]*=_,Gi.elements[5]*=_,Gi.elements[6]*=_,Gi.elements[8]*=x,Gi.elements[9]*=x,Gi.elements[10]*=x,i.setFromRotationMatrix(Gi),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=ia,m=!1){const d=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,w;if(m)b=c/(h-c),w=h*c/(h-c);else if(p===ia)b=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===El)b=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=ia,m=!1){const d=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,w;if(m)b=1/(h-c),w=h/(h-c);else if(p===ia)b=-2/(h-c),w=-(h+c)/(h-c);else if(p===El)b=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Fr=new Z,Gi=new qe,GM=new Z(0,0,0),VM=new Z(1,1,1),us=new Z,zc=new Z,vi=new Z,H_=new qe,G_=new Es;class oa{constructor(t=0,i=0,s=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return H_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(H_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return G_.setFromEuler(this),this.setFromQuaternion(G_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";let Pp=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kM=0;const V_=new Z,Hr=new Es,wa=new qe,Ic=new Z,sl=new Z,XM=new Z,WM=new Es,k_=new Z(1,0,0),X_=new Z(0,1,0),W_=new Z(0,0,1),Y_={type:"added"},YM={type:"removed"},Gr={type:"childadded",child:null},qh={type:"childremoved",child:null};class Cn extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new Z,i=new oa,s=new Es,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new ge}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(k_,t)}rotateY(t){return this.rotateOnAxis(X_,t)}rotateZ(t){return this.rotateOnAxis(W_,t)}translateOnAxis(t,i){return V_.copy(t).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(k_,t)}translateY(t){return this.translateOnAxis(X_,t)}translateZ(t){return this.translateOnAxis(W_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ic.copy(t):Ic.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(sl,Ic,this.up):wa.lookAt(Ic,sl,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),Hr.setFromRotationMatrix(wa),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Y_),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(YM),qh.child=t,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Y_),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,XM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,WM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),M=h(t.animations),b=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new Z(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class La extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jM={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const w of t.hand.values()){const S=i.getJointPose(w,s),y=this._getHandJoint(d,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,b=.005;d.inputState.pinching&&g>M+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=M-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(jM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new La;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function Kh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ne.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ne.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ne.workingColorSpace){if(t=LM(t,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Kh(h,c,t+1/3),this.g=Kh(h,c,t),this.b=Kh(h,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,i=Oi){function s(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Oi){const s=gx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=za(t.r),this.g=za(t.g),this.b=za(t.b),this}copyLinearToSRGB(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return Ne.workingToColorSpace(Vn.copy(this),t),Math.round(Ee(Vn.r*255,0,255))*65536+Math.round(Ee(Vn.g*255,0,255))*256+Math.round(Ee(Vn.b*255,0,255))}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ne.workingColorSpace){Ne.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,c=Vn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=_<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Oi){Ne.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==Oi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+i,fs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(fs),t.getHSL(Bc);const s=kh(fs.h,Bc.h,i),l=kh(fs.s,Bc.s,i),c=kh(fs.l,Bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new be;be.NAMES=gx;class qM extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Vi=new Z,Ca=new Z,Qh=new Z,Da=new Z,Vr=new Z,kr=new Z,j_=new Z,Jh=new Z,$h=new Z,td=new Z,ed=new fn,nd=new fn,id=new fn;class Si{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Vi.subVectors(t,i),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Vi.subVectors(l,i),Ca.subVectors(s,i),Qh.subVectors(t,i);const h=Vi.dot(Vi),p=Vi.dot(Ca),m=Vi.dot(Qh),d=Ca.dot(Ca),_=Ca.dot(Qh),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(d*m-p*_)*g,b=(h*_-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,Da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Da.x),m.addScaledVector(h,Da.y),m.addScaledVector(p,Da.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return ed.setScalar(0),nd.setScalar(0),id.setScalar(0),ed.fromBufferAttribute(t,i),nd.fromBufferAttribute(t,s),id.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ed,c.x),h.addScaledVector(nd,c.y),h.addScaledVector(id,c.z),h}static isFrontFacing(t,i,s,l){return Vi.subVectors(s,i),Ca.subVectors(t,i),Vi.cross(Ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Vi.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;Vr.subVectors(l,s),kr.subVectors(c,s),Jh.subVectors(t,s);const m=Vr.dot(Jh),d=kr.dot(Jh);if(m<=0&&d<=0)return i.copy(s);$h.subVectors(t,l);const _=Vr.dot($h),x=kr.dot($h);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*d;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Vr,h);td.subVectors(t,c);const M=Vr.dot(td),b=kr.dot(td);if(b>=0&&M<=b)return i.copy(c);const w=M*d-m*b;if(w<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(kr,p);const S=_*b-M*x;if(S<=0&&x-_>=0&&M-b>=0)return j_.subVectors(c,l),p=(x-_)/(x-_+(M-b)),i.copy(l).addScaledVector(j_,p);const y=1/(S+w+g);return h=w*y,p=g*y,i.copy(s).addScaledVector(Vr,h).addScaledVector(kr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class bs{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ki.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ki.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ki.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,ki):ki.fromBufferAttribute(c,h),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fc.copy(s.boundingBox)),Fc.applyMatrix4(t.matrixWorld),this.union(Fc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rl),Hc.subVectors(this.max,rl),Xr.subVectors(t.a,rl),Wr.subVectors(t.b,rl),Yr.subVectors(t.c,rl),hs.subVectors(Wr,Xr),ds.subVectors(Yr,Wr),Ws.subVectors(Xr,Yr);let i=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Ws.z,Ws.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Ws.z,0,-Ws.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Ws.y,Ws.x,0];return!ad(i,Xr,Wr,Yr,Hc)||(i=[1,0,0,0,1,0,0,0,1],!ad(i,Xr,Wr,Yr,Hc))?!1:(Gc.crossVectors(hs,ds),i=[Gc.x,Gc.y,Gc.z],ad(i,Xr,Wr,Yr,Hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ua=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ki=new Z,Fc=new bs,Xr=new Z,Wr=new Z,Yr=new Z,hs=new Z,ds=new Z,Ws=new Z,rl=new Z,Hc=new Z,Gc=new Z,Ys=new Z;function ad(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ys.fromArray(r,c);const p=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),m=t.dot(Ys),d=i.dot(Ys),_=s.dot(Ys);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const En=new Z,Vc=new ae;let ZM=0;class wn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=mp,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Vc.fromBufferAttribute(this,i),Vc.applyMatrix3(t),this.setXY(i,Vc.x,Vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix3(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix4(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyNormalMatrix(t),this.setXYZ(i,En.x,En.y,En.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.transformDirection(t),this.setXYZ(i,En.x,En.y,En.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=na(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ye(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=na(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=na(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=na(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=na(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ye(i,this.array),s=Ye(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ye(i,this.array),s=Ye(s,this.array),l=Ye(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ye(i,this.array),s=Ye(s,this.array),l=Ye(l,this.array),c=Ye(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mp&&(t.usage=this.usage),t}}class _x extends wn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class vx extends wn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pn extends wn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const KM=new bs,ol=new Z,sd=new Z;class fo{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):KM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ol,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(sd)),this.expandByPoint(ol.copy(t.center).sub(sd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let QM=0;const Li=new qe,rd=new Cn,jr=new Z,xi=new bs,ll=new bs,Ln=new Z;class mn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(CM(t)?vx:_x)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,i,s){return Li.makeTranslation(t,i,s),this.applyMatrix4(Li),this}scale(t,i,s){return Li.makeScale(t,i,s),this.applyMatrix4(Li),this}lookAt(t){return rd.lookAt(t),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new pn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];xi.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];ll.setFromBufferAttribute(p),this.morphTargetsRelative?(Ln.addVectors(xi.min,ll.min),xi.expandByPoint(Ln),Ln.addVectors(xi.max,ll.max),xi.expandByPoint(Ln)):(xi.expandByPoint(ll.min),xi.expandByPoint(ll.max))}xi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Ln.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Ln));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)Ln.fromBufferAttribute(p,d),m&&(jr.fromBufferAttribute(t,d),Ln.add(jr)),l=Math.max(l,s.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new Z,m[T]=new Z;const d=new Z,_=new Z,x=new Z,g=new ae,M=new ae,b=new ae,w=new Z,S=new Z;function y(T,D,ut){d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,D),x.fromBufferAttribute(s,ut),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),b.fromBufferAttribute(c,ut),_.sub(d),x.sub(d),M.sub(g),b.sub(g);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(G),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(G),p[T].add(w),p[D].add(w),p[ut].add(w),m[T].add(S),m[D].add(S),m[ut].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,D=C.length;T<D;++T){const ut=C[T],G=ut.start,K=ut.count;for(let tt=G,st=G+K;tt<st;tt+=3)y(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const N=new Z,U=new Z,F=new Z,I=new Z;function B(T){F.fromBufferAttribute(l,T),I.copy(F);const D=p[T];N.copy(D),N.sub(F.multiplyScalar(F.dot(D))).normalize(),U.crossVectors(I,D);const G=U.dot(m[T])<0?-1:1;h.setXYZW(T,N.x,N.y,N.z,G)}for(let T=0,D=C.length;T<D;++T){const ut=C[T],G=ut.start,K=ut.count;for(let tt=G,st=G+K;tt<st;tt+=3)B(t.getX(tt+0)),B(t.getX(tt+1)),B(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new Z,c=new Z,h=new Z,p=new Z,m=new Z,d=new Z,_=new Z,x=new Z;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),w=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,S),p.add(_),m.add(_),d.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Ln.fromBufferAttribute(t,i),Ln.normalize(),t.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,x=p.normalized,g=new d.constructor(m.length*_);let M=0,b=0;for(let w=0,S=m.length;w<S;w++){p.isInterleavedBufferAttribute?M=m[w]*p.data.stride+p.offset:M=m[w]*_;for(let y=0;y<_;y++)g[b++]=d[M++]}return new wn(g,_,x)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,x=d.length;_<x;_++){const g=d[_],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let x=0,g=d.length;x<g;x++){const M=d[x];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=t.morphAttributes;for(const d in c){const _=[],x=c[d];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,_=h.length;d<_;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class JM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=mp,this.updateRanges=[],this.version=0,this.uuid=Ss()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ss()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ss()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kn=new Z;class Eu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Kn.fromBufferAttribute(this,i),Kn.applyMatrix4(t),this.setXYZ(i,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Kn.fromBufferAttribute(this,i),Kn.applyNormalMatrix(t),this.setXYZ(i,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Kn.fromBufferAttribute(this,i),Kn.transformDirection(t),this.setXYZ(i,Kn.x,Kn.y,Kn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=na(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ye(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=na(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=na(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=na(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=na(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),s=Ye(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),s=Ye(s,this.array),l=Ye(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),s=Ye(s,this.array),l=Ye(l,this.array),c=Ye(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Su("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new wn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Eu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Su("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let $M=0;class ar extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=ao,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(s.blending=this.blending),this.side!==Ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ad&&(s.blendSrc=this.blendSrc),this.blendDst!==Rd&&(s.blendDst=this.blendDst),this.blendEquation!==Qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _p extends ar{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qr;const cl=new Z,Zr=new Z,Kr=new Z,Qr=new ae,ul=new ae,xx=new qe,kc=new Z,fl=new Z,Xc=new Z,q_=new ae,od=new ae,Z_=new ae;class vp extends Cn{constructor(t=new _p){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new mn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new JM(i,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new Eu(s,3,0,!1)),qr.setAttribute("uv",new Eu(s,2,3,!1))}this.geometry=qr,this.material=t,this.center=new ae(.5,.5),this.count=1}raycast(t,i){t.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),xx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Kr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Wc(kc.set(-.5,-.5,0),Kr,h,Zr,l,c),Wc(fl.set(.5,-.5,0),Kr,h,Zr,l,c),Wc(Xc.set(.5,.5,0),Kr,h,Zr,l,c),q_.set(0,0),od.set(1,0),Z_.set(1,1);let p=t.ray.intersectTriangle(kc,fl,Xc,!1,cl);if(p===null&&(Wc(fl.set(-.5,.5,0),Kr,h,Zr,l,c),od.set(0,1),p=t.ray.intersectTriangle(kc,Xc,fl,!1,cl),p===null))return;const m=t.ray.origin.distanceTo(cl);m<t.near||m>t.far||i.push({distance:m,point:cl.clone(),uv:Si.getInterpolation(cl,kc,fl,Xc,q_,od,Z_,new ae),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wc(r,t,i,s,l,c){Qr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(ul.x=c*Qr.x-l*Qr.y,ul.y=l*Qr.x+c*Qr.y):ul.copy(Qr),r.copy(t),r.x+=ul.x,r.y+=ul.y,r.applyMatrix4(xx)}const Na=new Z,ld=new Z,Yc=new Z,ps=new Z,cd=new Z,jc=new Z,ud=new Z;class Ru{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ld.copy(t).add(i).multiplyScalar(.5),Yc.copy(i).sub(t).normalize(),ps.copy(this.origin).sub(ld);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Yc),p=ps.dot(this.direction),m=-ps.dot(Yc),d=ps.lengthSq(),_=Math.abs(1-h*h);let x,g,M,b;if(_>0)if(x=h*m-p,g=h*p-m,b=c*_,x>=0)if(g>=-b)if(g<=b){const w=1/_;x*=w,g*=w,M=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g<=-b?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ld).addScaledVector(Yc,g),M}intersectSphere(t,i){Na.subVectors(t.center,this.origin);const s=Na.dot(this.direction),l=Na.dot(Na)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,i,s,l,c){cd.subVectors(i,t),jc.subVectors(s,t),ud.crossVectors(cd,jc);let h=this.direction.dot(ud),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;ps.subVectors(this.origin,t);const m=p*this.direction.dot(jc.crossVectors(ps,jc));if(m<0)return null;const d=p*this.direction.dot(cd.cross(ps));if(d<0||m+d>h)return null;const _=-p*ps.dot(ud);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ta extends ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const K_=new qe,js=new Ru,qc=new fo,Q_=new Z,Zc=new Z,Kc=new Z,Qc=new Z,fd=new Z,Jc=new Z,J_=new Z,$c=new Z;class rn extends Cn{constructor(t=new mn,i=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Jc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],x=c[m];_!==0&&(fd.fromBufferAttribute(x,t),h?Jc.addScaledVector(fd,_):Jc.addScaledVector(fd.sub(i),_))}i.add(Jc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(c),js.copy(t.ray).recast(t.near),!(qc.containsPoint(js.origin)===!1&&(js.intersectSphere(qc,Q_)===null||js.origin.distanceToSquared(Q_)>(t.far-t.near)**2))&&(K_.copy(c).invert(),js.copy(t.ray).applyMatrix4(K_),!(s.boundingBox!==null&&js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,js)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const S=g[b],y=h[S.materialIndex],C=Math.max(S.start,M.start),N=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let U=C,F=N;U<F;U+=3){const I=p.getX(U),B=p.getX(U+1),T=p.getX(U+2);l=tu(this,y,t,s,d,_,x,I,B,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let S=b,y=w;S<y;S+=3){const C=p.getX(S),N=p.getX(S+1),U=p.getX(S+2);l=tu(this,h,t,s,d,_,x,C,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const S=g[b],y=h[S.materialIndex],C=Math.max(S.start,M.start),N=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=C,F=N;U<F;U+=3){const I=U,B=U+1,T=U+2;l=tu(this,y,t,s,d,_,x,I,B,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let S=b,y=w;S<y;S+=3){const C=S,N=S+1,U=S+2;l=tu(this,h,t,s,d,_,x,C,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function tE(r,t,i,s,l,c,h,p){let m;if(t.side===li?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===Ms,p),m===null)return null;$c.copy(p),$c.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo($c);return d<i.near||d>i.far?null:{distance:d,point:$c.clone(),object:r}}function tu(r,t,i,s,l,c,h,p,m,d){r.getVertexPosition(p,Zc),r.getVertexPosition(m,Kc),r.getVertexPosition(d,Qc);const _=tE(r,t,i,s,Zc,Kc,Qc,J_);if(_){const x=new Z;Si.getBarycoord(J_,Zc,Kc,Qc,x),l&&(_.uv=Si.getInterpolatedAttribute(l,p,m,d,x,new ae)),c&&(_.uv1=Si.getInterpolatedAttribute(c,p,m,d,x,new ae)),h&&(_.normal=Si.getInterpolatedAttribute(h,p,m,d,x,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new Z,materialIndex:0};Si.getNormal(Zc,Kc,Qc,g.normal),_.face=g,_.barycoord=x}return _}class yx extends Xn{constructor(t=null,i=1,s=1,l,c,h,p,m,d=Fn,_=Fn,x,g){super(null,h,p,m,d,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $_ extends wn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Jr=new qe,tv=new qe,eu=[],ev=new bs,eE=new qe,hl=new rn,dl=new fo;class nv extends rn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new $_(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,eE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Jr),ev.copy(t.boundingBox).applyMatrix4(Jr),this.boundingBox.union(ev)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new fo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Jr),dl.copy(t.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(dl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let p=0;p<s.length;p++)s[p]=l[h+p]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(hl.geometry=this.geometry,hl.material=this.material,hl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dl.copy(this.boundingSphere),dl.applyMatrix4(s),t.ray.intersectsSphere(dl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Jr),tv.multiplyMatrices(s,Jr),hl.matrixWorld=tv,hl.raycast(t,eu);for(let h=0,p=eu.length;h<p;h++){const m=eu[h];m.instanceId=c,m.object=this,i.push(m)}eu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new $_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new yx(new Float32Array(l*this.count),l,this.count,wp,Xi));const c=this.morphTexture.source.data.data;let h=0;for(let d=0;d<s.length;d++)h+=s[d];const p=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=p,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const hd=new Z,nE=new Z,iE=new ge;class gs{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=hd.subVectors(s,i).cross(nE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(hd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||iE.getNormalMatrix(t),l=this.coplanarPoint(hd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new fo,aE=new ae(.5,.5),nu=new Z;class zp{constructor(t=new gs,i=new gs,s=new gs,l=new gs,c=new gs,h=new gs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ia,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],_=c[4],x=c[5],g=c[6],M=c[7],b=c[8],w=c[9],S=c[10],y=c[11],C=c[12],N=c[13],U=c[14],F=c[15];if(l[0].setComponents(d-h,M-_,y-b,F-C).normalize(),l[1].setComponents(d+h,M+_,y+b,F+C).normalize(),l[2].setComponents(d+p,M+x,y+w,F+N).normalize(),l[3].setComponents(d-p,M-x,y-w,F-N).normalize(),s)l[4].setComponents(m,g,S,U).normalize(),l[5].setComponents(d-m,M-g,y-S,F-U).normalize();else if(l[4].setComponents(d-m,M-g,y-S,F-U).normalize(),i===ia)l[5].setComponents(d+m,M+g,y+S,F+U).normalize();else if(i===El)l[5].setComponents(m,g,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(t){qs.center.set(0,0,0);const i=aE.distanceTo(t.center);return qs.radius=.7071067811865476+i,qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(nu.x=l.normal.x>0?t.max.x:t.min.x,nu.y=l.normal.y>0?t.max.y:t.min.y,nu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(nu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _s extends ar{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bu=new Z,Tu=new Z,iv=new qe,pl=new Ru,iu=new fo,dd=new Z,av=new Z;class sE extends Cn{constructor(t=new mn,i=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)bu.fromBufferAttribute(i,l-1),Tu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=bu.distanceTo(Tu);t.setAttribute("lineDistance",new pn(s,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(l),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;iv.copy(l).invert(),pl.copy(t.ray).applyMatrix4(iv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let w=M,S=b-1;w<S;w+=d){const y=_.getX(w),C=_.getX(w+1),N=au(this,t,pl,m,y,C,w);N&&i.push(N)}if(this.isLineLoop){const w=_.getX(b-1),S=_.getX(M),y=au(this,t,pl,m,w,S,b-1);y&&i.push(y)}}else{const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let w=M,S=b-1;w<S;w+=d){const y=au(this,t,pl,m,w,w+1,w);y&&i.push(y)}if(this.isLineLoop){const w=au(this,t,pl,m,b-1,M,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function au(r,t,i,s,l,c,h){const p=r.geometry.attributes.position;if(bu.fromBufferAttribute(p,l),Tu.fromBufferAttribute(p,c),i.distanceSqToSegment(bu,Tu,dd,av)>s)return;dd.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(dd);if(!(d<t.near||d>t.far))return{distance:d,point:av.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const sv=new Z,rv=new Z;class $i extends sE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)sv.fromBufferAttribute(i,l),rv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+sv.distanceTo(rv);t.setAttribute("lineDistance",new pn(s,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sx extends Xn{constructor(t=[],i=nr,s,l,c,h,p,m,d,_){super(t,i,s,l,c,h,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rE extends Xn{constructor(t,i,s,l,c,h,p,m,d){super(t,i,s,l,c,h,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bl extends Xn{constructor(t,i,s=ra,l,c,h,p=Fn,m=Fn,d,_=Ba,x=1){if(_!==Ba&&_!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Op(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class oE extends bl{constructor(t,i=ra,s=nr,l,c,h=Fn,p=Fn,m,d=Ba){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mx extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ho extends mn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],_=[],x=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(x,2));function b(w,S,y,C,N,U,F,I,B,T,D){const ut=U/B,G=F/T,K=U/2,tt=F/2,st=I/2,J=B+1,O=T+1;let H=0,dt=0;const xt=new Z;for(let Ut=0;Ut<O;Ut++){const P=Ut*G-tt;for(let j=0;j<J;j++){const St=j*ut-K;xt[w]=St*C,xt[S]=P*N,xt[y]=st,d.push(xt.x,xt.y,xt.z),xt[w]=0,xt[S]=0,xt[y]=I>0?1:-1,_.push(xt.x,xt.y,xt.z),x.push(j/B),x.push(1-Ut/T),H+=1}}for(let Ut=0;Ut<T;Ut++)for(let P=0;P<B;P++){const j=g+P+J*Ut,St=g+P+J*(Ut+1),Rt=g+(P+1)+J*(Ut+1),Gt=g+(P+1)+J*Ut;m.push(j,St,Gt),m.push(St,Rt,Gt),dt+=6}p.addGroup(M,dt,D),M+=dt,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Tl extends mn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],g=[],M=[];let b=0;const w=[],S=s/2;let y=0;C(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(M,2));function C(){const U=new Z,F=new Z;let I=0;const B=(i-t)/s;for(let T=0;T<=c;T++){const D=[],ut=T/c,G=ut*(i-t)+t;for(let K=0;K<=l;K++){const tt=K/l,st=tt*m+p,J=Math.sin(st),O=Math.cos(st);F.x=G*J,F.y=-ut*s+S,F.z=G*O,x.push(F.x,F.y,F.z),U.set(J,B,O).normalize(),g.push(U.x,U.y,U.z),M.push(tt,1-ut),D.push(b++)}w.push(D)}for(let T=0;T<l;T++)for(let D=0;D<c;D++){const ut=w[D][T],G=w[D+1][T],K=w[D+1][T+1],tt=w[D][T+1];(t>0||D!==0)&&(_.push(ut,G,tt),I+=3),(i>0||D!==c-1)&&(_.push(G,K,tt),I+=3)}d.addGroup(y,I,0),y+=I}function N(U){const F=b,I=new ae,B=new Z;let T=0;const D=U===!0?t:i,ut=U===!0?1:-1;for(let K=1;K<=l;K++)x.push(0,S*ut,0),g.push(0,ut,0),M.push(.5,.5),b++;const G=b;for(let K=0;K<=l;K++){const st=K/l*m+p,J=Math.cos(st),O=Math.sin(st);B.x=D*O,B.y=S*ut,B.z=D*J,x.push(B.x,B.y,B.z),g.push(0,ut,0),I.x=J*.5+.5,I.y=O*.5*ut+.5,M.push(I.x,I.y),b++}for(let K=0;K<l;K++){const tt=F+K,st=G+K;U===!0?_.push(st,st+1,tt):_.push(st+1,st,tt),T+=3}d.addGroup(y,T,U===!0?1:2),y+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ip extends Tl{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,p=Math.PI*2){super(0,t,i,s,l,c,h,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:p}}static fromJSON(t){return new Ip(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const su=new Z,ru=new Z,pd=new Z,ou=new Si;class ov extends mn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(xl*i),h=t.getIndex(),p=t.getAttribute("position"),m=h?h.count:p.count,d=[0,0,0],_=["a","b","c"],x=new Array(3),g={},M=[];for(let b=0;b<m;b+=3){h?(d[0]=h.getX(b),d[1]=h.getX(b+1),d[2]=h.getX(b+2)):(d[0]=b,d[1]=b+1,d[2]=b+2);const{a:w,b:S,c:y}=ou;if(w.fromBufferAttribute(p,d[0]),S.fromBufferAttribute(p,d[1]),y.fromBufferAttribute(p,d[2]),ou.getNormal(pd),x[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,x[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,x[2]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let C=0;C<3;C++){const N=(C+1)%3,U=x[C],F=x[N],I=ou[_[C]],B=ou[_[N]],T=`${U}_${F}`,D=`${F}_${U}`;D in g&&g[D]?(pd.dot(g[D].normal)<=c&&(M.push(I.x,I.y,I.z),M.push(B.x,B.y,B.z)),g[D]=null):T in g||(g[T]={index0:d[C],index1:d[N],normal:pd.clone()})}}for(const b in g)if(g[b]){const{index0:w,index1:S}=g[b];su.fromBufferAttribute(p,w),ru.fromBufferAttribute(p,S),M.push(su.x,su.y,su.z),M.push(ru.x,ru.y,ru.z)}this.setAttribute("position",new pn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class xs extends mn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,x=t/p,g=i/m,M=[],b=[],w=[],S=[];for(let y=0;y<_;y++){const C=y*g-h;for(let N=0;N<d;N++){const U=N*x-c;b.push(U,-C,0),w.push(0,0,1),S.push(N/p),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let C=0;C<p;C++){const N=C+d*y,U=C+d*(y+1),F=C+1+d*(y+1),I=C+1+d*y;M.push(N,U,I),M.push(U,F,I)}this.setIndex(M),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(w,3)),this.setAttribute("uv",new pn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bp extends mn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const _=[],x=new Z,g=new Z,M=[],b=[],w=[],S=[];for(let y=0;y<=s;y++){const C=[],N=y/s;let U=0;y===0&&h===0?U=.5/i:y===s&&m===Math.PI&&(U=-.5/i);for(let F=0;F<=i;F++){const I=F/i;x.x=-t*Math.cos(l+I*c)*Math.sin(h+N*p),x.y=t*Math.cos(h+N*p),x.z=t*Math.sin(l+I*c)*Math.sin(h+N*p),b.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),S.push(I+U,1-N),C.push(d++)}_.push(C)}for(let y=0;y<s;y++)for(let C=0;C<i;C++){const N=_[y][C+1],U=_[y][C],F=_[y+1][C],I=_[y+1][C+1];(y!==0||h>0)&&M.push(N,U,I),(y!==s-1||m<Math.PI)&&M.push(U,F,I)}this.setIndex(M),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(w,3)),this.setAttribute("uv",new pn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lE extends mn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],s=new Set,l=new Z,c=new Z;if(t.index!==null){const h=t.attributes.position,p=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:p.count,materialIndex:0}]);for(let d=0,_=m.length;d<_;++d){const x=m[d],g=x.start,M=x.count;for(let b=g,w=g+M;b<w;b+=3)for(let S=0;S<3;S++){const y=p.getX(b+S),C=p.getX(b+(S+1)%3);l.fromBufferAttribute(h,y),c.fromBufferAttribute(h,C),lv(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const h=t.attributes.position;for(let p=0,m=h.count/3;p<m;p++)for(let d=0;d<3;d++){const _=3*p+d,x=3*p+(d+1)%3;l.fromBufferAttribute(h,_),c.fromBufferAttribute(h,x),lv(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new pn(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function lv(r,t,i){const s=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}function uo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Qn(r){const t={};for(let i=0;i<r.length;i++){const s=uo(r[i]);for(const l in s)t[l]=s[l]}return t}function cE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Ex(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const uE={clone:uo,merge:Qn};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=uo(t.uniforms),this.uniformsGroups=cE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class dE extends la{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pE extends ar{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dx,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=bp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mE extends ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gE extends ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bx extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const md=new qe,cv=new Z,uv=new Z;class _E{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;cv.setFromMatrixPosition(t.matrixWorld),i.position.copy(cv),uv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(uv),i.updateMatrixWorld(),md.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===El||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lu=new Z,cu=new Es,Qi=new Z;class Tx extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lu,cu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(lu,cu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ms=new Z,fv=new ae,hv=new ae;class Pi extends Tx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=gp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gp*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,i){return this.getViewBounds(t,fv,hv),i.subVectors(hv,fv)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(xl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Fp extends Tx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class vE extends _E{constructor(){super(new Fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xE extends bx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new vE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class yE extends bx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const $r=-90,to=1;class SE extends Cn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Pi($r,to,t,i);l.layers=this.layers,this.add(l);const c=new Pi($r,to,t,i);c.layers=this.layers,this.add(c);const h=new Pi($r,to,t,i);h.layers=this.layers,this.add(h);const p=new Pi($r,to,t,i);p.layers=this.layers,this.add(p);const m=new Pi($r,to,t,i);m.layers=this.layers,this.add(m);const d=new Pi($r,to,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===El)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class ME extends Pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const dv=new qe;class EE{constructor(t,i,s=0,l=1/0){this.ray=new Ru(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):De("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return dv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dv),this}intersectObject(t,i=!0,s=[]){return xp(t,this,s,i),s.sort(pv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)xp(t[l],this,s,i);return s.sort(pv),s}}function pv(r,t){return r.distance-t.distance}function xp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,p=c.length;h<p;h++)xp(c[h],t,i,!0)}}class mv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gv extends $i{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,h=t/i,p=t/2,m=[],d=[];for(let g=0,M=0,b=-p;g<=i;g++,b+=h){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const w=g===c?s:l;w.toArray(d,M),M+=3,w.toArray(d,M),M+=3,w.toArray(d,M),M+=3,w.toArray(d,M),M+=3}const _=new mn;_.setAttribute("position",new pn(m,3)),_.setAttribute("color",new pn(d,3));const x=new _s({vertexColors:!0,toneMapped:!1});super(_,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class bE extends ir{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function _v(r,t,i,s){const l=TE(s);switch(i){case fx:return r*t;case wp:return r*t/l.components*l.byteLength;case Cp:return r*t/l.components*l.byteLength;case lo:return r*t*2/l.components*l.byteLength;case Dp:return r*t*2/l.components*l.byteLength;case hx:return r*t*3/l.components*l.byteLength;case Wi:return r*t*4/l.components*l.byteLength;case Up:return r*t*4/l.components*l.byteLength;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gu:case _u:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bd:case Hd:return Math.max(r,16)*Math.max(t,8)/4;case Id:case Fd:return Math.max(r,8)*Math.max(t,8)/2;case Gd:case Vd:case Xd:case Wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kd:case Yd:case jd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case tp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case np:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ip:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case sp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case op:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case lp:case cp:case up:return Math.ceil(r/4)*Math.ceil(t/4)*16;case fp:case hp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case dp:case pp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function TE(r){switch(r){case yi:case ox:return{byteLength:1,components:1};case Sl:case lx:case Ia:return{byteLength:2,components:1};case Ap:case Rp:return{byteLength:2,components:4};case ra:case Tp:case Xi:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ax(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function AE(r){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const _=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,_);else{x.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<x.length;M++){const b=x[g],w=x[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,x[g]=w)}x.length=g+1;for(let M=0,b=x.length;M<b;M++){const w=x[M];r.bufferSubData(d,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
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
#endif`,CE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
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
#endif`,OE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
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
#endif`,zE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HE=`#ifdef USE_IRIDESCENCE
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
#endif`,GE=`#ifdef USE_BUMPMAP
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
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,KE=`#define PI 3.141592653589793
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
} // validated`,QE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JE=`vec3 transformedNormal = objectNormal;
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
#endif`,$E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
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
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vb=`uniform bool receiveShadow;
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
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
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
#endif`,Tb=`uniform sampler2D dfgLUT;
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
}`,Ab=`
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
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zb=`#if defined( USE_POINTS_UV )
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
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
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
#endif`,kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zb=`#ifdef USE_NORMALMAP
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
#endif`,Kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,L1=`#if DEPTH_PACKING == 3200
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
}`,O1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
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
}`,X1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,Y1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
}`,q1=`#define PHONG
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
}`,Z1=`#define PHONG
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
}`,K1=`#define STANDARD
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
}`,Q1=`#define STANDARD
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
}`,J1=`#define TOON
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
}`,$1=`#define TOON
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
}`,tT=`uniform float size;
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
}`,eT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 color;
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
}`,aT=`uniform float rotation;
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
}`,sT=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:RE,alphahash_pars_fragment:wE,alphamap_fragment:CE,alphamap_pars_fragment:DE,alphatest_fragment:UE,alphatest_pars_fragment:NE,aomap_fragment:LE,aomap_pars_fragment:OE,batching_pars_vertex:PE,batching_vertex:zE,begin_vertex:IE,beginnormal_vertex:BE,bsdfs:FE,iridescence_fragment:HE,bumpmap_pars_fragment:GE,clipping_planes_fragment:VE,clipping_planes_pars_fragment:kE,clipping_planes_pars_vertex:XE,clipping_planes_vertex:WE,color_fragment:YE,color_pars_fragment:jE,color_pars_vertex:qE,color_vertex:ZE,common:KE,cube_uv_reflection_fragment:QE,defaultnormal_vertex:JE,displacementmap_pars_vertex:$E,displacementmap_vertex:tb,emissivemap_fragment:eb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:ab,envmap_fragment:sb,envmap_common_pars_fragment:rb,envmap_pars_fragment:ob,envmap_pars_vertex:lb,envmap_physical_pars_fragment:xb,envmap_vertex:cb,fog_vertex:ub,fog_pars_vertex:fb,fog_fragment:hb,fog_pars_fragment:db,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:_b,lights_pars_begin:vb,lights_toon_fragment:yb,lights_toon_pars_fragment:Sb,lights_phong_fragment:Mb,lights_phong_pars_fragment:Eb,lights_physical_fragment:bb,lights_physical_pars_fragment:Tb,lights_fragment_begin:Ab,lights_fragment_maps:Rb,lights_fragment_end:wb,logdepthbuf_fragment:Cb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Nb,map_fragment:Lb,map_pars_fragment:Ob,map_particle_fragment:Pb,map_particle_pars_fragment:zb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Bb,morphinstance_vertex:Fb,morphcolor_vertex:Hb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Vb,morphtarget_vertex:kb,normal_fragment_begin:Xb,normal_fragment_maps:Wb,normal_pars_fragment:Yb,normal_pars_vertex:jb,normal_vertex:qb,normalmap_pars_fragment:Zb,clearcoat_normal_fragment_begin:Kb,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:Jb,iridescence_pars_fragment:$b,opaque_fragment:t1,packing:e1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:a1,dithering_pars_fragment:s1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:h1,skinning_pars_vertex:d1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:_1,tonemapping_fragment:v1,tonemapping_pars_fragment:x1,transmission_fragment:y1,transmission_pars_fragment:S1,uv_pars_fragment:M1,uv_pars_vertex:E1,uv_vertex:b1,worldpos_vertex:T1,background_vert:A1,background_frag:R1,backgroundCube_vert:w1,backgroundCube_frag:C1,cube_vert:D1,cube_frag:U1,depth_vert:N1,depth_frag:L1,distance_vert:O1,distance_frag:P1,equirect_vert:z1,equirect_frag:I1,linedashed_vert:B1,linedashed_frag:F1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:k1,meshmatcap_vert:X1,meshmatcap_frag:W1,meshnormal_vert:Y1,meshnormal_frag:j1,meshphong_vert:q1,meshphong_frag:Z1,meshphysical_vert:K1,meshphysical_frag:Q1,meshtoon_vert:J1,meshtoon_frag:$1,points_vert:tT,points_frag:eT,shadow_vert:nT,shadow_frag:iT,sprite_vert:aT,sprite_frag:sT},Bt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},ea={basic:{uniforms:Qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Qn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Qn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Qn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Qn([Bt.points,Bt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Qn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Qn([Bt.common,Bt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Qn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Qn([Bt.sprite,Bt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Qn([Bt.common,Bt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Qn([Bt.lights,Bt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};ea.physical={uniforms:Qn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const uu={r:0,b:0,g:0},Zs=new oa,rT=new qe;function oT(r,t,i,s,l,c){const h=new be(0);let p=l===!0?0:1,m,d,_=null,x=0,g=null;function M(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const U=C.backgroundBlurriness>0;N=t.get(N,U)}return N}function b(C){let N=!1;const U=M(C);U===null?S(h,p):U&&U.isColor&&(S(U,1),N=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,N){const U=M(N);U&&(U.isCubeTexture||U.mapping===Au)?(d===void 0&&(d=new rn(new ho(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:uo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Zs.copy(N.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Zs)),d.material.toneMapped=Ne.getTransfer(U.colorSpace)!==Ve,(_!==U||x!==U.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new rn(new xs(2,2),new la({name:"BackgroundMaterial",uniforms:uo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(U.colorSpace)!==Ve,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function S(C,N){C.getRGB(uu,Ex(r)),i.buffers.color.setClear(uu.r,uu.g,uu.b,N,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,N=1){h.set(C),p=N,S(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,S(h,p)},render:b,addToRenderList:w,dispose:y}}function lT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(G,K,tt,st,J){let O=!1;const H=x(G,st,tt,K);c!==H&&(c=H,d(c.object)),O=M(G,st,tt,J),O&&b(G,st,tt,J),J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,U(G,K,tt,st),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return r.createVertexArray()}function d(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function x(G,K,tt,st){const J=st.wireframe===!0;let O=s[K.id];O===void 0&&(O={},s[K.id]=O);const H=G.isInstancedMesh===!0?G.id:0;let dt=O[H];dt===void 0&&(dt={},O[H]=dt);let xt=dt[tt.id];xt===void 0&&(xt={},dt[tt.id]=xt);let Ut=xt[J];return Ut===void 0&&(Ut=g(m()),xt[J]=Ut),Ut}function g(G){const K=[],tt=[],st=[];for(let J=0;J<i;J++)K[J]=0,tt[J]=0,st[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:tt,attributeDivisors:st,object:G,attributes:{},index:null}}function M(G,K,tt,st){const J=c.attributes,O=K.attributes;let H=0;const dt=tt.getAttributes();for(const xt in dt)if(dt[xt].location>=0){const P=J[xt];let j=O[xt];if(j===void 0&&(xt==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),xt==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;H++}return c.attributesNum!==H||c.index!==st}function b(G,K,tt,st){const J={},O=K.attributes;let H=0;const dt=tt.getAttributes();for(const xt in dt)if(dt[xt].location>=0){let P=O[xt];P===void 0&&(xt==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),xt==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),J[xt]=j,H++}c.attributes=J,c.attributesNum=H,c.index=st}function w(){const G=c.newAttributes;for(let K=0,tt=G.length;K<tt;K++)G[K]=0}function S(G){y(G,0)}function y(G,K){const tt=c.newAttributes,st=c.enabledAttributes,J=c.attributeDivisors;tt[G]=1,st[G]===0&&(r.enableVertexAttribArray(G),st[G]=1),J[G]!==K&&(r.vertexAttribDivisor(G,K),J[G]=K)}function C(){const G=c.newAttributes,K=c.enabledAttributes;for(let tt=0,st=K.length;tt<st;tt++)K[tt]!==G[tt]&&(r.disableVertexAttribArray(tt),K[tt]=0)}function N(G,K,tt,st,J,O,H){H===!0?r.vertexAttribIPointer(G,K,tt,J,O):r.vertexAttribPointer(G,K,tt,st,J,O)}function U(G,K,tt,st){w();const J=st.attributes,O=tt.getAttributes(),H=K.defaultAttributeValues;for(const dt in O){const xt=O[dt];if(xt.location>=0){let Ut=J[dt];if(Ut===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(Ut=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(Ut=G.instanceColor)),Ut!==void 0){const P=Ut.normalized,j=Ut.itemSize,St=t.get(Ut);if(St===void 0)continue;const Rt=St.buffer,Gt=St.type,at=St.bytesPerElement,Mt=Gt===r.INT||Gt===r.UNSIGNED_INT||Ut.gpuType===Tp;if(Ut.isInterleavedBufferAttribute){const Lt=Ut.data,kt=Lt.stride,Qt=Ut.offset;if(Lt.isInstancedInterleavedBuffer){for(let zt=0;zt<xt.locationSize;zt++)y(xt.location+zt,Lt.meshPerAttribute);G.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let zt=0;zt<xt.locationSize;zt++)S(xt.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let zt=0;zt<xt.locationSize;zt++)N(xt.location+zt,j/xt.locationSize,Gt,P,kt*at,(Qt+j/xt.locationSize*zt)*at,Mt)}else{if(Ut.isInstancedBufferAttribute){for(let Lt=0;Lt<xt.locationSize;Lt++)y(xt.location+Lt,Ut.meshPerAttribute);G.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Lt=0;Lt<xt.locationSize;Lt++)S(xt.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Lt=0;Lt<xt.locationSize;Lt++)N(xt.location+Lt,j/xt.locationSize,Gt,P,j*at,j/xt.locationSize*Lt*at,Mt)}}else if(H!==void 0){const P=H[dt];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(xt.location,P);break;case 3:r.vertexAttrib3fv(xt.location,P);break;case 4:r.vertexAttrib4fv(xt.location,P);break;default:r.vertexAttrib1fv(xt.location,P)}}}}C()}function F(){D();for(const G in s){const K=s[G];for(const tt in K){const st=K[tt];for(const J in st){const O=st[J];for(const H in O)_(O[H].object),delete O[H];delete st[J]}}delete s[G]}}function I(G){if(s[G.id]===void 0)return;const K=s[G.id];for(const tt in K){const st=K[tt];for(const J in st){const O=st[J];for(const H in O)_(O[H].object),delete O[H];delete st[J]}}delete s[G.id]}function B(G){for(const K in s){const tt=s[K];for(const st in tt){const J=tt[st];if(J[G.id]===void 0)continue;const O=J[G.id];for(const H in O)_(O[H].object),delete O[H];delete J[G.id]}}}function T(G){for(const K in s){const tt=s[K],st=G.isInstancedMesh===!0?G.id:0,J=tt[st];if(J!==void 0){for(const O in J){const H=J[O];for(const dt in H)_(H[dt].object),delete H[dt];delete J[O]}delete tt[st],Object.keys(tt).length===0&&delete s[K]}}}function D(){ut(),h=!0,c!==l&&(c=l,d(c.object))}function ut(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:ut,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:S,disableUnusedAttributes:C}}function cT(r,t,i){let s;function l(d){s=d}function c(d,_){r.drawArrays(s,d,_),i.update(_,s,1)}function h(d,_,x){x!==0&&(r.drawArraysInstanced(s,d,_,x),i.update(_,s,x))}function p(d,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,_,0,x);let M=0;for(let b=0;b<x;b++)M+=_[b];i.update(M,s,1)}function m(d,_,x,g){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<d.length;b++)h(d[b],_[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,d,0,_,0,g,0,x);let b=0;for(let w=0;w<x;w++)b+=_[w]*g[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function uT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Wi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const T=B===Ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==yi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Xi&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(re("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:U,maxSamples:F,samples:I}}function fT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new gs,p=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,M){const b=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,y=r.get(x);if(!l||b===null||b.length===0||c&&!S)c?_(null):d();else{const C=c?0:s,N=C*4;let U=y.clippingState||null;m.value=U,U=_(b,g,N,M);for(let F=0;F!==N;++F)U[F]=i[F];y.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,M,b){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=m.value,b!==!0||S===null){const y=M+w*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(S===null||S.length<y)&&(S=new Float32Array(y));for(let N=0,U=M;N!==w;++N,U+=4)h.copy(x[N]).applyMatrix4(C,p),h.normal.toArray(S,U),S[U+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,S}}const ys=4,vv=[.125,.215,.35,.446,.526,.582],Js=20,hT=256,ml=new Fp,xv=new be;let gd=null,_d=0,vd=0,xd=!1;const dT=new Z;class yv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=dT}=c;gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gd,_d,vd),this._renderer.xr.enabled=xd,t.scissorTest=!1,eo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===nr||t.mapping===oo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ia,format:Wi,colorSpace:co,depthBuffer:!1},l=Sv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pT(c)),this._blurMaterial=gT(c,t,i),this._ggxMaterial=mT(c,t,i)}return l}_compileMaterial(t){const i=new rn(new mn,t);this._renderer.compile(i,ml)}_sceneToCubeUV(t,i,s,l,c){const m=new Pi(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(xv),x.toneMapping=aa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new ho,new ta({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let y=!1;const C=t.background;C?C.isColor&&(S.color.copy(C),t.background=null,y=!0):(S.color.copy(xv),y=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const F=this._cubeSize;eo(l,U*F,N>2?F:0,F,F),x.setRenderTarget(l),y&&x.render(w,m),x.render(t,m)}x.toneMapping=M,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===nr||t.mapping===oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;eo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,ml)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-_*_),g=0+d*1.25,M=x*g,{_lodMax:b}=this,w=this._sizeLods[s],S=3*w*(s>b-ys?s-b+ys:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,eo(c,S,y,3*w,2*w),l.setRenderTarget(c),l.render(p,ml),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,eo(t,S,y,3*w,2*w),l.setRenderTarget(t),l.render(p,ml)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Js-1),w=c/b,S=isFinite(c)?1+Math.floor(_*w):Js;S>Js&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Js}`);const y=[];let C=0;for(let B=0;B<Js;++B){const T=B/w,D=Math.exp(-T*T/2);y.push(D),B===0?C+=D:B<S&&(C+=2*D)}for(let B=0;B<y.length;B++)y[B]=y[B]/C;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-s;const U=this._sizeLods[l],F=3*U*(l>N-ys?l-N+ys:0),I=4*(this._cubeSize-U);eo(i,F,I,3*U,2*U),m.setRenderTarget(i),m.render(x,ml)}}function pT(r){const t=[],i=[],s=[];let l=r;const c=r-ys+1+vv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>r-ys?m=vv[h-r+ys-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,x=1+d,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,b=6,w=3,S=2,y=1,C=new Float32Array(w*b*M),N=new Float32Array(S*b*M),U=new Float32Array(y*b*M);for(let I=0;I<M;I++){const B=I%3*2/3-1,T=I>2?0:-1,D=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];C.set(D,w*b*I),N.set(g,S*b*I);const ut=[I,I,I,I,I,I];U.set(ut,y*b*I)}const F=new mn;F.setAttribute("position",new wn(C,w)),F.setAttribute("uv",new wn(N,S)),F.setAttribute("faceIndex",new wn(U,y)),s.push(new rn(F,null)),l>ys&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Sv(r,t,i){const s=new sa(r,t,i);return s.texture.mapping=Au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function eo(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function mT(r,t,i){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function gT(r,t,i){const s=new Float32Array(Js),l=new Z(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Mv(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Ev(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}class Rx extends sa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Sx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ho(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:uo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:li,blending:Pa});c.uniforms.tEquirect.value=i;const h=new rn(l,c),p=i.minFilter;return i.minFilter===$s&&(i.minFilter=kn),new SE(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function _T(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?h(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Hh||M===Gh)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new Rx(b.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const M=g.mapping,b=M===Hh||M===Gh,w=M===nr||M===oo;if(b||w){let S=i.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new yv(r)),S=b?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const C=g.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new yv(r)),S=b?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function p(g,M){return M===Hh?g.mapping=nr:M===Gh&&(g.mapping=oo),g}function m(g){let M=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&M++;return M===b}function d(g){const M=g.target;M.removeEventListener("dispose",d);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function vT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mu("WebGLRenderer: "+s+" extension not supported."),l}}}function xT(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function d(x){const g=[],M=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const C=M.array;w=M.version;for(let N=0,U=C.length;N<U;N+=3){const F=C[N+0],I=C[N+1],B=C[N+2];g.push(F,I,I,B,B,F)}}else{const C=b.array;w=b.version;for(let N=0,U=C.length/3-1;N<U;N+=3){const F=N+0,I=N+1,B=N+2;g.push(F,I,I,B,B,F)}}const S=new(b.count>=65535?vx:_x)(g,1);S.version=w;const y=c.get(x);y&&t.remove(y),c.set(x,S)}function _(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:_}}function yT(r,t,i){let s;function l(g){s=g}let c,h;function p(g){c=g.type,h=g.bytesPerElement}function m(g,M){r.drawElements(s,M,c,g*h),i.update(M,s,1)}function d(g,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,g*h,b),i.update(M,s,b))}function _(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let S=0;for(let y=0;y<b;y++)S+=M[y];i.update(S,s,1)}function x(g,M,b,w){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)d(g[y]/h,M[y],w[y]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,w,0,b);let y=0;for(let C=0;C<b;C++)y+=M[C]*w[C];i.update(y,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function ST(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:De("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function MT(r,t,i){const s=new WeakMap,l=new fn;function c(h,p,m){const d=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let ut=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ut)};var M=ut;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),S===!0&&(U=3);let F=p.attributes.position.count*U,I=1;F>t.maxTextureSize&&(I=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*I*4*x),T=new mx(B,F,I,x);T.type=Xi,T.needsUpdate=!0;const D=U*4;for(let G=0;G<x;G++){const K=y[G],tt=C[G],st=N[G],J=F*I*4*G;for(let O=0;O<K.count;O++){const H=O*D;b===!0&&(l.fromBufferAttribute(K,O),B[J+H+0]=l.x,B[J+H+1]=l.y,B[J+H+2]=l.z,B[J+H+3]=0),w===!0&&(l.fromBufferAttribute(tt,O),B[J+H+4]=l.x,B[J+H+5]=l.y,B[J+H+6]=l.z,B[J+H+7]=0),S===!0&&(l.fromBufferAttribute(st,O),B[J+H+8]=l.x,B[J+H+9]=l.y,B[J+H+10]=l.z,B[J+H+11]=st.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new ae(F,I)},s.set(p,g),p.addEventListener("dispose",ut)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let S=0;S<d.length;S++)b+=d[S];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function ET(r,t,i,s,l){let c=new WeakMap;function h(d){const _=l.render.frame,x=d.geometry,g=t.get(d,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:p}}const bT={[$v]:"LINEAR_TONE_MAPPING",[tx]:"REINHARD_TONE_MAPPING",[ex]:"CINEON_TONE_MAPPING",[nx]:"ACES_FILMIC_TONE_MAPPING",[ax]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function TT(r,t,i,s,l){const c=new sa(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new sa(t,i,{type:Ia,depthBuffer:!1,stencilBuffer:!1}),p=new mn;p.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new pn([0,2,0,0,2,0],2));const m=new dE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new rn(p,m),_=new Fp(-1,1,1,-1,0,1);let x=null,g=null,M=!1,b,w=null,S=[],y=!1;this.setSize=function(C,N){c.setSize(C,N),h.setSize(C,N);for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(C,N)}},this.setEffects=function(C){S=C,y=S.length>0&&S[0].isRenderPass===!0;const N=c.width,U=c.height;for(let F=0;F<S.length;F++){const I=S[F];I.setSize&&I.setSize(N,U)}},this.begin=function(C,N){if(M||C.toneMapping===aa&&S.length===0)return!1;if(w=N,N!==null){const U=N.width,F=N.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return y===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=aa,!0},this.hasRenderPass=function(){return y},this.end=function(C,N){C.toneMapping=b,M=!0;let U=c,F=h;for(let I=0;I<S.length;I++){const B=S[I];if(B.enabled!==!1&&(B.render(C,F,U,N),B.needsSwap!==!1)){const T=U;U=F,F=T}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},Ne.getTransfer(x)===Ve&&(m.defines.SRGB_TRANSFER="");const I=bT[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(w),C.render(d,_),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const wx=new Xn,yp=new bl(1,1),Cx=new mx,Dx=new HM,Ux=new Sx,bv=[],Tv=[],Av=new Float32Array(16),Rv=new Float32Array(9),wv=new Float32Array(4);function po(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=bv[l];if(c===void 0&&(c=new Float32Array(l),bv[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,r[h].toArray(c,p)}return c}function Dn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Un(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Cu(r,t){let i=Tv[t];i===void 0&&(i=new Int32Array(t),Tv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function AT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function RT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;r.uniform2fv(this.addr,t),Un(i,t)}}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Dn(i,t))return;r.uniform3fv(this.addr,t),Un(i,t)}}function CT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;r.uniform4fv(this.addr,t),Un(i,t)}}function DT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Un(i,t)}else{if(Dn(i,s))return;wv.set(s),r.uniformMatrix2fv(this.addr,!1,wv),Un(i,s)}}function UT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Un(i,t)}else{if(Dn(i,s))return;Rv.set(s),r.uniformMatrix3fv(this.addr,!1,Rv),Un(i,s)}}function NT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Un(i,t)}else{if(Dn(i,s))return;Av.set(s),r.uniformMatrix4fv(this.addr,!1,Av),Un(i,s)}}function LT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;r.uniform2iv(this.addr,t),Un(i,t)}}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Dn(i,t))return;r.uniform3iv(this.addr,t),Un(i,t)}}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;r.uniform4iv(this.addr,t),Un(i,t)}}function IT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;r.uniform2uiv(this.addr,t),Un(i,t)}}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Dn(i,t))return;r.uniform3uiv(this.addr,t),Un(i,t)}}function HT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;r.uniform4uiv(this.addr,t),Un(i,t)}}function GT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(yp.compareFunction=i.isReversedDepthBuffer()?Lp:Np,c=yp):c=wx,i.setTexture2D(t||c,l)}function VT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Dx,l)}function kT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ux,l)}function XT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Cx,l)}function WT(r){switch(r){case 5126:return AT;case 35664:return RT;case 35665:return wT;case 35666:return CT;case 35674:return DT;case 35675:return UT;case 35676:return NT;case 5124:case 35670:return LT;case 35667:case 35671:return OT;case 35668:case 35672:return PT;case 35669:case 35673:return zT;case 5125:return IT;case 36294:return BT;case 36295:return FT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return XT}}function YT(r,t){r.uniform1fv(this.addr,t)}function jT(r,t){const i=po(t,this.size,2);r.uniform2fv(this.addr,i)}function qT(r,t){const i=po(t,this.size,3);r.uniform3fv(this.addr,i)}function ZT(r,t){const i=po(t,this.size,4);r.uniform4fv(this.addr,i)}function KT(r,t){const i=po(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function QT(r,t){const i=po(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function JT(r,t){const i=po(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function $T(r,t){r.uniform1iv(this.addr,t)}function tA(r,t){r.uniform2iv(this.addr,t)}function eA(r,t){r.uniform3iv(this.addr,t)}function nA(r,t){r.uniform4iv(this.addr,t)}function iA(r,t){r.uniform1uiv(this.addr,t)}function aA(r,t){r.uniform2uiv(this.addr,t)}function sA(r,t){r.uniform3uiv(this.addr,t)}function rA(r,t){r.uniform4uiv(this.addr,t)}function oA(r,t,i){const s=this.cache,l=t.length,c=Cu(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=yp:h=wx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function lA(r,t,i){const s=this.cache,l=t.length,c=Cu(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Dx,c[h])}function cA(r,t,i){const s=this.cache,l=t.length,c=Cu(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Ux,c[h])}function uA(r,t,i){const s=this.cache,l=t.length,c=Cu(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Cx,c[h])}function fA(r){switch(r){case 5126:return YT;case 35664:return jT;case 35665:return qT;case 35666:return ZT;case 35674:return KT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return tA;case 35668:case 35672:return eA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return aA;case 36295:return sA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}class hA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=WT(i.type)}}class dA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fA(i.type)}}class pA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function Cv(r,t){r.seq.push(t),r.map[t.id]=t}function mA(r,t,i){const s=r.name,l=s.length;for(yd.lastIndex=0;;){const c=yd.exec(s),h=yd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){Cv(i,d===void 0?new hA(p,r,t):new dA(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new pA(p),Cv(i,x)),i=x}}}class vu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);mA(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Dv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const gA=37297;let _A=0;function vA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const Uv=new ge;function xA(r){Ne._getMatrix(Uv,Ne.workingColorSpace,r);const t=`mat3( ${Uv.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(r)){case xu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Nv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+vA(r.getShaderSource(t),p)}else return c}function yA(r,t){const i=xA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const SA={[$v]:"Linear",[tx]:"Reinhard",[ex]:"Cineon",[nx]:"ACESFilmic",[ax]:"AgX",[sx]:"Neutral",[ix]:"Custom"};function MA(r,t){const i=SA[t];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fu=new Z;function EA(){Ne.getLuminanceCoefficients(fu);const r=fu.x.toFixed(4),t=fu.y.toFixed(4),i=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function TA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function AA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return i}function vl(r){return r!==""}function Lv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ov(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const RA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(r){return r.replace(RA,CA)}const wA=new Map;function CA(r,t){let i=ve[t];if(i===void 0){const s=wA.get(t);if(s!==void 0)i=ve[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Sp(i)}const DA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(r){return r.replace(DA,UA)}function UA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const NA={[du]:"SHADOWMAP_TYPE_PCF",[_l]:"SHADOWMAP_TYPE_VSM"};function LA(r){return NA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OA={[nr]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function PA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":OA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const zA={[oo]:"ENVMAP_MODE_REFRACTION"};function IA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":zA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BA={[bp]:"ENVMAP_BLENDING_MULTIPLY",[vM]:"ENVMAP_BLENDING_MIX",[xM]:"ENVMAP_BLENDING_ADD"};function FA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":BA[r.combine]||"ENVMAP_BLENDING_NONE"}function HA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function GA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=LA(i),d=PA(i),_=IA(i),x=FA(i),g=HA(i),M=bA(i),b=TA(c),w=l.createProgram();let S,y,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(vl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(vl).join(`
`),y.length>0&&(y+=`
`)):(S=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),y=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==aa?"#define TONE_MAPPING":"",i.toneMapping!==aa?ve.tonemapping_pars_fragment:"",i.toneMapping!==aa?MA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,yA("linearToOutputTexel",i.outputColorSpace),EA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),h=Sp(h),h=Lv(h,i),h=Ov(h,i),p=Sp(p),p=Lv(p,i),p=Ov(p,i),h=Pv(h),p=Pv(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=C+S+h,U=C+y+p,F=Dv(l,l.VERTEX_SHADER,N),I=Dv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,F),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(G){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",tt=l.getShaderInfoLog(F)||"",st=l.getShaderInfoLog(I)||"",J=K.trim(),O=tt.trim(),H=st.trim();let dt=!0,xt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(dt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,I);else{const Ut=Nv(l,F,"vertex"),P=Nv(l,I,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+Ut+`
`+P)}else J!==""?re("WebGLProgram: Program Info Log:",J):(O===""||H==="")&&(xt=!1);xt&&(G.diagnostics={runnable:dt,programLog:J,vertexShader:{log:O,prefix:S},fragmentShader:{log:H,prefix:y}})}l.deleteShader(F),l.deleteShader(I),T=new vu(l,w),D=AA(l,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let ut=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ut===!1&&(ut=l.getProgramParameter(w,gA)),ut},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_A++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=I,this}let VA=0;class kA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new XA(t),i.set(t,s)),s}}class XA{constructor(t){this.id=VA++,this.code=t,this.usedTimes=0}}function WA(r,t,i,s,l,c){const h=new Pp,p=new kA,m=new Set,d=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,D,ut,G,K){const tt=G.fog,st=K.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=t.get(T.envMap||J,O),dt=H&&H.mapping===Au?H.image.height:null,xt=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&re("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Ut=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,P=Ut!==void 0?Ut.length:0;let j=0;st.morphAttributes.position!==void 0&&(j=1),st.morphAttributes.normal!==void 0&&(j=2),st.morphAttributes.color!==void 0&&(j=3);let St,Rt,Gt,at;if(xt){const Ht=ea[xt];St=Ht.vertexShader,Rt=Ht.fragmentShader}else St=T.vertexShader,Rt=T.fragmentShader,p.update(T),Gt=p.getVertexShaderID(T),at=p.getFragmentShaderID(T);const Mt=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),kt=K.isInstancedMesh===!0,Qt=K.isBatchedMesh===!0,zt=!!T.map,Je=!!T.matcap,xe=!!H,_e=!!T.aoMap,Ue=!!T.lightMap,oe=!!T.bumpMap,Ke=!!T.normalMap,k=!!T.displacementMap,Qe=!!T.emissiveMap,Te=!!T.metalnessMap,Le=!!T.roughnessMap,jt=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,yt=T.sheen>0,At=T.transmission>0,mt=jt&&!!T.anisotropyMap,Xt=L&&!!T.clearcoatMap,Ot=L&&!!T.clearcoatNormalMap,te=L&&!!T.clearcoatRoughnessMap,ne=q&&!!T.iridescenceMap,Nt=q&&!!T.iridescenceThicknessMap,wt=yt&&!!T.sheenColorMap,Ft=yt&&!!T.sheenRoughnessMap,W=!!T.specularMap,rt=!!T.specularColorMap,Ct=!!T.specularIntensityMap,z=At&&!!T.transmissionMap,_t=At&&!!T.thicknessMap,gt=!!T.gradientMap,bt=!!T.alphaMap,ct=T.alphaTest>0,$=!!T.alphaHash,Dt=!!T.extensions;let Jt=aa;T.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Jt=r.toneMapping);const ce={shaderID:xt,shaderType:T.type,shaderName:T.name,vertexShader:St,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Gt,customFragmentShaderID:at,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&K._colorsTexture!==null,instancing:kt,instancingColor:kt&&K.instanceColor!==null,instancingMorph:kt&&K.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:co,alphaToCoverage:!!T.alphaToCoverage,map:zt,matcap:Je,envMap:xe,envMapMode:xe&&H.mapping,envMapCubeUVHeight:dt,aoMap:_e,lightMap:Ue,bumpMap:oe,normalMap:Ke,displacementMap:k,emissiveMap:Qe,normalMapObjectSpace:Ke&&T.normalMapType===MM,normalMapTangentSpace:Ke&&T.normalMapType===dx,metalnessMap:Te,roughnessMap:Le,anisotropy:jt,anisotropyMap:mt,clearcoat:L,clearcoatMap:Xt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:te,dispersion:E,iridescence:q,iridescenceMap:ne,iridescenceThicknessMap:Nt,sheen:yt,sheenColorMap:wt,sheenRoughnessMap:Ft,specularMap:W,specularColorMap:rt,specularIntensityMap:Ct,transmission:At,transmissionMap:z,thicknessMap:_t,gradientMap:gt,opaque:T.transparent===!1&&T.blending===ao&&T.alphaToCoverage===!1,alphaMap:bt,alphaTest:ct,alphaHash:$,combine:T.combine,mapUv:zt&&b(T.map.channel),aoMapUv:_e&&b(T.aoMap.channel),lightMapUv:Ue&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:Ke&&b(T.normalMap.channel),displacementMapUv:k&&b(T.displacementMap.channel),emissiveMapUv:Qe&&b(T.emissiveMap.channel),metalnessMapUv:Te&&b(T.metalnessMap.channel),roughnessMapUv:Le&&b(T.roughnessMap.channel),anisotropyMapUv:mt&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&b(T.sheenRoughnessMap.channel),specularMapUv:W&&b(T.specularMap.channel),specularColorMapUv:rt&&b(T.specularColorMap.channel),specularIntensityMapUv:Ct&&b(T.specularIntensityMap.channel),transmissionMapUv:z&&b(T.transmissionMap.channel),thicknessMapUv:_t&&b(T.thicknessMap.channel),alphaMapUv:bt&&b(T.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Ke||jt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!st.attributes.uv&&(zt||bt),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||st.attributes.normal===void 0&&Ke===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Lt,skinning:K.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ut.length>0,shadowMapType:r.shadowMap.type,toneMapping:Jt,decodeVideoTexture:zt&&T.map.isVideoTexture===!0&&Ne.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:Qe&&T.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Jn,flipSided:T.side===li,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Dt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&T.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ce.vertexUv1s=m.has(1),ce.vertexUv2s=m.has(2),ce.vertexUv3s=m.has(3),m.clear(),ce}function S(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ut in T.defines)D.push(ut),D.push(T.defines[ut]);return T.isRawShaderMaterial===!1&&(y(D,T),C(D,T),D.push(r.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function y(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function C(T,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),T.push(h.mask)}function N(T){const D=M[T.type];let ut;if(D){const G=ea[D];ut=uE.clone(G.uniforms)}else ut=T.uniforms;return ut}function U(T,D){let ut=_.get(D);return ut!==void 0?++ut.usedTimes:(ut=new GA(r,D,T,l),d.push(ut),_.set(D,ut)),ut}function F(T){if(--T.usedTimes===0){const D=d.indexOf(T);d[D]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){p.remove(T)}function B(){p.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:N,acquireProgram:U,releaseProgram:F,releaseShaderCache:I,programs:d,dispose:B}}function YA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function jA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Iv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Bv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,w,S,y){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:M,material:b,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:S,group:y},r[t]=C):(C.id=g.id,C.object=g,C.geometry=M,C.material=b,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=S,C.group=y),t++,C}function m(g,M,b,w,S,y){const C=p(g,M,b,w,S,y);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function d(g,M,b,w,S,y){const C=p(g,M,b,w,S,y);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,M){i.length>1&&i.sort(g||jA),s.length>1&&s.sort(M||Iv),l.length>1&&l.sort(M||Iv)}function x(){for(let g=t,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:_}}function qA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Bv,r.set(s,[h])):l>=c.length?(h=new Bv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function ZA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new be};break;case"SpotLight":i={position:new Z,direction:new Z,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function KA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let QA=0;function JA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function $A(r){const t=new ZA,i=KA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Z);const l=new Z,c=new qe,h=new qe;function p(d){let _=0,x=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,b=0,w=0,S=0,y=0,C=0,N=0,U=0,F=0,I=0,B=0;d.sort(JA);for(let D=0,ut=d.length;D<ut;D++){const G=d[D],K=G.color,tt=G.intensity,st=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===lo?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=K.r*tt,x+=K.g*tt,g+=K.b*tt;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],tt);B++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,dt=i.get(G);dt.shadowIntensity=H.intensity,dt.shadowBias=H.bias,dt.shadowNormalBias=H.normalBias,dt.shadowRadius=H.radius,dt.shadowMapSize=H.mapSize,s.directionalShadow[M]=dt,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=G.shadow.matrix,C++}s.directional[M]=O,M++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(K).multiplyScalar(tt),O.distance=st,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[w]=O;const H=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,H.updateMatrices(G),G.castShadow&&I++),s.spotLightMatrix[w]=H.matrix,G.castShadow){const dt=i.get(G);dt.shadowIntensity=H.intensity,dt.shadowBias=H.bias,dt.shadowNormalBias=H.normalBias,dt.shadowRadius=H.radius,dt.shadowMapSize=H.mapSize,s.spotShadow[w]=dt,s.spotShadowMap[w]=J,U++}w++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(K).multiplyScalar(tt),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=O,S++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const H=G.shadow,dt=i.get(G);dt.shadowIntensity=H.intensity,dt.shadowBias=H.bias,dt.shadowNormalBias=H.normalBias,dt.shadowRadius=H.radius,dt.shadowMapSize=H.mapSize,dt.shadowCameraNear=H.camera.near,dt.shadowCameraFar=H.camera.far,s.pointShadow[b]=dt,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=G.shadow.matrix,N++}s.point[b]=O,b++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(tt),O.groundColor.copy(G.groundColor).multiplyScalar(tt),s.hemi[y]=O,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==C||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==F||T.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=S,s.point.length=b,s.hemi.length=y,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+F-I,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=B,T.directionalLength=M,T.pointLength=b,T.spotLength=w,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=C,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=F,T.numLightProbes=B,s.version=QA++)}function m(d,_){let x=0,g=0,M=0,b=0,w=0;const S=_.matrixWorldInverse;for(let y=0,C=d.length;y<C;y++){const N=d[y];if(N.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),x++}else if(N.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),h.identity(),c.copy(N.matrixWorld),c.premultiply(S),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),g++}else if(N.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(S),w++}}}return{setup:p,setupView:m,state:s}}function Fv(r){const t=new $A(r),i=[],s=[];function l(_){d.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function p(){t.setup(i)}function m(_){t.setupView(i,_)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:h}}function t2(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new Fv(r),t.set(l,[p])):c>=h.length?(p=new Fv(r),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const e2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n2=`uniform sampler2D shadow_pass;
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
}`,i2=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],a2=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Hv=new qe,gl=new Z,Sd=new Z;function s2(r,t,i){let s=new zp;const l=new ae,c=new ae,h=new fn,p=new mE,m=new gE,d={},_=i.maxTextureSize,x={[Ms]:li,[li]:Ms,[Jn]:Jn},g=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:e2,fragmentShader:n2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new mn;b.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new rn(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let y=this.type;this.render=function(I,B,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;this.type===$S&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=du);const D=r.getRenderTarget(),ut=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Pa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const tt=y!==this.type;tt&&B.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(J=>J.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,J=I.length;st<J;st++){const O=I[st],H=O.shadow;if(H===void 0){re("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const dt=H.getFrameExtents();l.multiply(dt),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/dt.x),l.x=c.x*dt.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/dt.y),l.y=c.y*dt.y,H.mapSize.y=c.y));const xt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=xt,H.map===null||tt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===_l){if(O.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new sa(l.x,l.y,{format:lo,type:Ia,minFilter:kn,magFilter:kn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new bl(l.x,l.y,Xi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Ba,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn}else O.isPointLight?(H.map=new Rx(l.x),H.map.depthTexture=new oE(l.x,ra)):(H.map=new sa(l.x,l.y),H.map.depthTexture=new bl(l.x,l.y,ra)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Ba,this.type===du?(H.map.depthTexture.compareFunction=xt?Lp:Np,H.map.depthTexture.minFilter=kn,H.map.depthTexture.magFilter=kn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn);H.camera.updateProjectionMatrix()}const Ut=H.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Ut;P++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,P),r.clear();else{P===0&&(r.setRenderTarget(H.map),r.clear());const j=H.getViewport(P);h.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),K.viewport(h)}if(O.isPointLight){const j=H.camera,St=H.matrix,Rt=O.distance||j.far;Rt!==j.far&&(j.far=Rt,j.updateProjectionMatrix()),gl.setFromMatrixPosition(O.matrixWorld),j.position.copy(gl),Sd.copy(j.position),Sd.add(i2[P]),j.up.copy(a2[P]),j.lookAt(Sd),j.updateMatrixWorld(),St.makeTranslation(-gl.x,-gl.y,-gl.z),Hv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Hv,j.coordinateSystem,j.reversedDepth)}else H.updateMatrices(O);s=H.getFrustum(),U(B,T,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===_l&&C(H,T),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(D,ut,G)};function C(I,B){const T=t.update(w);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new sa(l.x,l.y,{format:lo,type:Ia})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,w,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(B,null,T,M,w,null)}function N(I,B,T,D){let ut=null;const G=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)ut=G;else if(ut=T.isPointLight===!0?m:p,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const K=ut.uuid,tt=B.uuid;let st=d[K];st===void 0&&(st={},d[K]=st);let J=st[tt];J===void 0&&(J=ut.clone(),st[tt]=J,B.addEventListener("dispose",F)),ut=J}if(ut.visible=B.visible,ut.wireframe=B.wireframe,D===_l?ut.side=B.shadowSide!==null?B.shadowSide:B.side:ut.side=B.shadowSide!==null?B.shadowSide:x[B.side],ut.alphaMap=B.alphaMap,ut.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ut.map=B.map,ut.clipShadows=B.clipShadows,ut.clippingPlanes=B.clippingPlanes,ut.clipIntersection=B.clipIntersection,ut.displacementMap=B.displacementMap,ut.displacementScale=B.displacementScale,ut.displacementBias=B.displacementBias,ut.wireframeLinewidth=B.wireframeLinewidth,ut.linewidth=B.linewidth,T.isPointLight===!0&&ut.isMeshDistanceMaterial===!0){const K=r.properties.get(ut);K.light=T}return ut}function U(I,B,T,D,ut){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ut===_l)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const tt=t.update(I),st=I.material;if(Array.isArray(st)){const J=tt.groups;for(let O=0,H=J.length;O<H;O++){const dt=J[O],xt=st[dt.materialIndex];if(xt&&xt.visible){const Ut=N(I,xt,D,ut);I.onBeforeShadow(r,I,B,T,tt,Ut,dt),r.renderBufferDirect(T,null,tt,Ut,I,dt),I.onAfterShadow(r,I,B,T,tt,Ut,dt)}}}else if(st.visible){const J=N(I,st,D,ut);I.onBeforeShadow(r,I,B,T,tt,J,null),r.renderBufferDirect(T,null,tt,J,I,null),I.onAfterShadow(r,I,B,T,tt,J,null)}}const K=I.children;for(let tt=0,st=K.length;tt<st;tt++)U(K[tt],B,T,D,ut)}function F(I){I.target.removeEventListener("dispose",F);for(const T in d){const D=d[T],ut=I.target.uuid;ut in D&&(D[ut].dispose(),delete D[ut])}}}function r2(r,t){function i(){let z=!1;const _t=new fn;let gt=null;const bt=new fn(0,0,0,0);return{setMask:function(ct){gt!==ct&&!z&&(r.colorMask(ct,ct,ct,ct),gt=ct)},setLocked:function(ct){z=ct},setClear:function(ct,$,Dt,Jt,ce){ce===!0&&(ct*=Jt,$*=Jt,Dt*=Jt),_t.set(ct,$,Dt,Jt),bt.equals(_t)===!1&&(r.clearColor(ct,$,Dt,Jt),bt.copy(_t))},reset:function(){z=!1,gt=null,bt.set(-1,0,0,0)}}}function s(){let z=!1,_t=!1,gt=null,bt=null,ct=null;return{setReversed:function($){if(_t!==$){const Dt=t.get("EXT_clip_control");$?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),_t=$;const Jt=ct;ct=null,this.setClear(Jt)}},getReversed:function(){return _t},setTest:function($){$?Mt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function($){gt!==$&&!z&&(r.depthMask($),gt=$)},setFunc:function($){if(_t&&($=NM[$]),bt!==$){switch($){case wd:r.depthFunc(r.NEVER);break;case Cd:r.depthFunc(r.ALWAYS);break;case Dd:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case Ud:r.depthFunc(r.EQUAL);break;case Nd:r.depthFunc(r.GEQUAL);break;case Ld:r.depthFunc(r.GREATER);break;case Od:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}bt=$}},setLocked:function($){z=$},setClear:function($){ct!==$&&(ct=$,_t&&($=1-$),r.clearDepth($))},reset:function(){z=!1,gt=null,bt=null,ct=null,_t=!1}}}function l(){let z=!1,_t=null,gt=null,bt=null,ct=null,$=null,Dt=null,Jt=null,ce=null;return{setTest:function(Ht){z||(Ht?Mt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(Ht){_t!==Ht&&!z&&(r.stencilMask(Ht),_t=Ht)},setFunc:function(Ht,Ae,Be){(gt!==Ht||bt!==Ae||ct!==Be)&&(r.stencilFunc(Ht,Ae,Be),gt=Ht,bt=Ae,ct=Be)},setOp:function(Ht,Ae,Be){($!==Ht||Dt!==Ae||Jt!==Be)&&(r.stencilOp(Ht,Ae,Be),$=Ht,Dt=Ae,Jt=Be)},setLocked:function(Ht){z=Ht},setClear:function(Ht){ce!==Ht&&(r.clearStencil(Ht),ce=Ht)},reset:function(){z=!1,_t=null,gt=null,bt=null,ct=null,$=null,Dt=null,Jt=null,ce=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},x={},g=new WeakMap,M=[],b=null,w=!1,S=null,y=null,C=null,N=null,U=null,F=null,I=null,B=new be(0,0,0),T=0,D=!1,ut=null,G=null,K=null,tt=null,st=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const dt=r.getParameter(r.VERSION);dt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(dt)[1]),O=H>=1):dt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),O=H>=2);let xt=null,Ut={};const P=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),St=new fn().fromArray(P),Rt=new fn().fromArray(j);function Gt(z,_t,gt,bt){const ct=new Uint8Array(4),$=r.createTexture();r.bindTexture(z,$),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<gt;Dt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(_t,0,r.RGBA,1,1,bt,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(_t+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return $}const at={};at[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Mt(r.DEPTH_TEST),h.setFunc(ro),oe(!1),Ke(D_),Mt(r.CULL_FACE),_e(Pa);function Mt(z){_[z]!==!0&&(r.enable(z),_[z]=!0)}function Lt(z){_[z]!==!1&&(r.disable(z),_[z]=!1)}function kt(z,_t){return x[z]!==_t?(r.bindFramebuffer(z,_t),x[z]=_t,z===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=_t),z===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=_t),!0):!1}function Qt(z,_t){let gt=M,bt=!1;if(z){gt=g.get(_t),gt===void 0&&(gt=[],g.set(_t,gt));const ct=z.textures;if(gt.length!==ct.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let $=0,Dt=ct.length;$<Dt;$++)gt[$]=r.COLOR_ATTACHMENT0+$;gt.length=ct.length,bt=!0}}else gt[0]!==r.BACK&&(gt[0]=r.BACK,bt=!0);bt&&r.drawBuffers(gt)}function zt(z){return b!==z?(r.useProgram(z),b=z,!0):!1}const Je={[Qs]:r.FUNC_ADD,[eM]:r.FUNC_SUBTRACT,[nM]:r.FUNC_REVERSE_SUBTRACT};Je[iM]=r.MIN,Je[aM]=r.MAX;const xe={[sM]:r.ZERO,[rM]:r.ONE,[oM]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[dM]:r.SRC_ALPHA_SATURATE,[fM]:r.DST_COLOR,[cM]:r.DST_ALPHA,[lM]:r.ONE_MINUS_SRC_COLOR,[Rd]:r.ONE_MINUS_SRC_ALPHA,[hM]:r.ONE_MINUS_DST_COLOR,[uM]:r.ONE_MINUS_DST_ALPHA,[pM]:r.CONSTANT_COLOR,[mM]:r.ONE_MINUS_CONSTANT_COLOR,[gM]:r.CONSTANT_ALPHA,[_M]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(z,_t,gt,bt,ct,$,Dt,Jt,ce,Ht){if(z===Pa){w===!0&&(Lt(r.BLEND),w=!1);return}if(w===!1&&(Mt(r.BLEND),w=!0),z!==tM){if(z!==S||Ht!==D){if((y!==Qs||U!==Qs)&&(r.blendEquation(r.FUNC_ADD),y=Qs,U=Qs),Ht)switch(z){case ao:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case U_:r.blendFunc(r.ONE,r.ONE);break;case N_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case L_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",z);break}else switch(z){case ao:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case U_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case N_:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L_:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",z);break}C=null,N=null,F=null,I=null,B.set(0,0,0),T=0,S=z,D=Ht}return}ct=ct||_t,$=$||gt,Dt=Dt||bt,(_t!==y||ct!==U)&&(r.blendEquationSeparate(Je[_t],Je[ct]),y=_t,U=ct),(gt!==C||bt!==N||$!==F||Dt!==I)&&(r.blendFuncSeparate(xe[gt],xe[bt],xe[$],xe[Dt]),C=gt,N=bt,F=$,I=Dt),(Jt.equals(B)===!1||ce!==T)&&(r.blendColor(Jt.r,Jt.g,Jt.b,ce),B.copy(Jt),T=ce),S=z,D=!1}function Ue(z,_t){z.side===Jn?Lt(r.CULL_FACE):Mt(r.CULL_FACE);let gt=z.side===li;_t&&(gt=!gt),oe(gt),z.blending===ao&&z.transparent===!1?_e(Pa):_e(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),h.setFunc(z.depthFunc),h.setTest(z.depthTest),h.setMask(z.depthWrite),c.setMask(z.colorWrite);const bt=z.stencilWrite;p.setTest(bt),bt&&(p.setMask(z.stencilWriteMask),p.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),p.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Qe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(z){ut!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),ut=z)}function Ke(z){z!==QS?(Mt(r.CULL_FACE),z!==G&&(z===D_?r.cullFace(r.BACK):z===JS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),G=z}function k(z){z!==K&&(O&&r.lineWidth(z),K=z)}function Qe(z,_t,gt){z?(Mt(r.POLYGON_OFFSET_FILL),(tt!==_t||st!==gt)&&(tt=_t,st=gt,h.getReversed()&&(_t=-_t),r.polygonOffset(_t,gt))):Lt(r.POLYGON_OFFSET_FILL)}function Te(z){z?Mt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function Le(z){z===void 0&&(z=r.TEXTURE0+J-1),xt!==z&&(r.activeTexture(z),xt=z)}function jt(z,_t,gt){gt===void 0&&(xt===null?gt=r.TEXTURE0+J-1:gt=xt);let bt=Ut[gt];bt===void 0&&(bt={type:void 0,texture:void 0},Ut[gt]=bt),(bt.type!==z||bt.texture!==_t)&&(xt!==gt&&(r.activeTexture(gt),xt=gt),r.bindTexture(z,_t||at[z]),bt.type=z,bt.texture=_t)}function L(){const z=Ut[xt];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(z){De("WebGLState:",z)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(z){De("WebGLState:",z)}}function yt(){try{r.texSubImage2D(...arguments)}catch(z){De("WebGLState:",z)}}function At(){try{r.texSubImage3D(...arguments)}catch(z){De("WebGLState:",z)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(z){De("WebGLState:",z)}}function Xt(){try{r.compressedTexSubImage3D(...arguments)}catch(z){De("WebGLState:",z)}}function Ot(){try{r.texStorage2D(...arguments)}catch(z){De("WebGLState:",z)}}function te(){try{r.texStorage3D(...arguments)}catch(z){De("WebGLState:",z)}}function ne(){try{r.texImage2D(...arguments)}catch(z){De("WebGLState:",z)}}function Nt(){try{r.texImage3D(...arguments)}catch(z){De("WebGLState:",z)}}function wt(z){St.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),St.copy(z))}function Ft(z){Rt.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Rt.copy(z))}function W(z,_t){let gt=d.get(_t);gt===void 0&&(gt=new WeakMap,d.set(_t,gt));let bt=gt.get(z);bt===void 0&&(bt=r.getUniformBlockIndex(_t,z.name),gt.set(z,bt))}function rt(z,_t){const bt=d.get(_t).get(z);m.get(_t)!==bt&&(r.uniformBlockBinding(_t,bt,z.__bindingPointIndex),m.set(_t,bt))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},xt=null,Ut={},x={},g=new WeakMap,M=[],b=null,w=!1,S=null,y=null,C=null,N=null,U=null,F=null,I=null,B=new be(0,0,0),T=0,D=!1,ut=null,G=null,K=null,tt=null,st=null,St.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Mt,disable:Lt,bindFramebuffer:kt,drawBuffers:Qt,useProgram:zt,setBlending:_e,setMaterial:Ue,setFlipSided:oe,setCullFace:Ke,setLineWidth:k,setPolygonOffset:Qe,setScissorTest:Te,activeTexture:Le,bindTexture:jt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ne,texImage3D:Nt,updateUBOMapping:W,uniformBlockBinding:rt,texStorage2D:Ot,texStorage3D:te,texSubImage2D:yt,texSubImage3D:At,compressedTexSubImage2D:mt,compressedTexSubImage3D:Xt,scissor:wt,viewport:Ft,reset:Ct}}function o2(r,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ae,_=new WeakMap;let x;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):yu("canvas")}function w(L,E,q){let yt=1;const At=jt(L);if((At.width>q||At.height>q)&&(yt=q/Math.max(At.width,At.height)),yt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const mt=Math.floor(yt*At.width),Xt=Math.floor(yt*At.height);x===void 0&&(x=b(mt,Xt));const Ot=E?b(mt,Xt):x;return Ot.width=mt,Ot.height=Xt,Ot.getContext("2d").drawImage(L,0,0,mt,Xt),re("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+mt+"x"+Xt+")."),Ot}else return"data"in L&&re("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){r.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(L,E,q,yt,At=!1){if(L!==null){if(r[L]!==void 0)return r[L];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let mt=E;if(E===r.RED&&(q===r.FLOAT&&(mt=r.R32F),q===r.HALF_FLOAT&&(mt=r.R16F),q===r.UNSIGNED_BYTE&&(mt=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(mt=r.R8UI),q===r.UNSIGNED_SHORT&&(mt=r.R16UI),q===r.UNSIGNED_INT&&(mt=r.R32UI),q===r.BYTE&&(mt=r.R8I),q===r.SHORT&&(mt=r.R16I),q===r.INT&&(mt=r.R32I)),E===r.RG&&(q===r.FLOAT&&(mt=r.RG32F),q===r.HALF_FLOAT&&(mt=r.RG16F),q===r.UNSIGNED_BYTE&&(mt=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(mt=r.RG8UI),q===r.UNSIGNED_SHORT&&(mt=r.RG16UI),q===r.UNSIGNED_INT&&(mt=r.RG32UI),q===r.BYTE&&(mt=r.RG8I),q===r.SHORT&&(mt=r.RG16I),q===r.INT&&(mt=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(mt=r.RGB8UI),q===r.UNSIGNED_SHORT&&(mt=r.RGB16UI),q===r.UNSIGNED_INT&&(mt=r.RGB32UI),q===r.BYTE&&(mt=r.RGB8I),q===r.SHORT&&(mt=r.RGB16I),q===r.INT&&(mt=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(mt=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(mt=r.RGBA16UI),q===r.UNSIGNED_INT&&(mt=r.RGBA32UI),q===r.BYTE&&(mt=r.RGBA8I),q===r.SHORT&&(mt=r.RGBA16I),q===r.INT&&(mt=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(mt=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(mt=r.R11F_G11F_B10F)),E===r.RGBA){const Xt=At?xu:Ne.getTransfer(yt);q===r.FLOAT&&(mt=r.RGBA32F),q===r.HALF_FLOAT&&(mt=r.RGBA16F),q===r.UNSIGNED_BYTE&&(mt=Xt===Ve?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(mt=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(mt=r.RGB5_A1)}return(mt===r.R16F||mt===r.R32F||mt===r.RG16F||mt===r.RG32F||mt===r.RGBA16F||mt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function U(L,E){let q;return L?E===null||E===ra||E===Ml?q=r.DEPTH24_STENCIL8:E===Xi?q=r.DEPTH32F_STENCIL8:E===Sl&&(q=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ra||E===Ml?q=r.DEPTH_COMPONENT24:E===Xi?q=r.DEPTH_COMPONENT32F:E===Sl&&(q=r.DEPTH_COMPONENT16),q}function F(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Fn&&L.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),T(E),E.isVideoTexture&&_.delete(E)}function B(L){const E=L.target;E.removeEventListener("dispose",B),ut(E)}function T(L){const E=s.get(L);if(E.__webglInit===void 0)return;const q=L.source,yt=g.get(q);if(yt){const At=yt[E.__cacheKey];At.usedTimes--,At.usedTimes===0&&D(L),Object.keys(yt).length===0&&g.delete(q)}s.remove(L)}function D(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const q=L.source,yt=g.get(q);delete yt[E.__cacheKey],h.memory.textures--}function ut(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(E.__webglFramebuffer[yt]))for(let At=0;At<E.__webglFramebuffer[yt].length;At++)r.deleteFramebuffer(E.__webglFramebuffer[yt][At]);else r.deleteFramebuffer(E.__webglFramebuffer[yt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[yt])}else{if(Array.isArray(E.__webglFramebuffer))for(let yt=0;yt<E.__webglFramebuffer.length;yt++)r.deleteFramebuffer(E.__webglFramebuffer[yt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let yt=0;yt<E.__webglColorRenderbuffer.length;yt++)E.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[yt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let yt=0,At=q.length;yt<At;yt++){const mt=s.get(q[yt]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),h.memory.textures--),s.remove(q[yt])}s.remove(L)}let G=0;function K(){G=0}function tt(){const L=G;return L>=l.maxTextures&&re("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function st(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function J(L,E){const q=s.get(L);if(L.isVideoTexture&&Te(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const yt=L.image;if(yt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{at(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function O(L,E){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){at(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function H(L,E){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){at(q,L,E);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function dt(L,E){const q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){Mt(q,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const xt={[Pd]:r.REPEAT,[Oa]:r.CLAMP_TO_EDGE,[zd]:r.MIRRORED_REPEAT},Ut={[Fn]:r.NEAREST,[yM]:r.NEAREST_MIPMAP_NEAREST,[Pc]:r.NEAREST_MIPMAP_LINEAR,[kn]:r.LINEAR,[Vh]:r.LINEAR_MIPMAP_NEAREST,[$s]:r.LINEAR_MIPMAP_LINEAR},P={[EM]:r.NEVER,[wM]:r.ALWAYS,[bM]:r.LESS,[Np]:r.LEQUAL,[TM]:r.EQUAL,[Lp]:r.GEQUAL,[AM]:r.GREATER,[RM]:r.NOTEQUAL};function j(L,E){if(E.type===Xi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===Vh||E.magFilter===Pc||E.magFilter===$s||E.minFilter===kn||E.minFilter===Vh||E.minFilter===Pc||E.minFilter===$s)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,xt[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,xt[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,xt[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Ut[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Ut[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==Pc&&E.minFilter!==$s||E.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function St(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const yt=E.source;let At=g.get(yt);At===void 0&&(At={},g.set(yt,At));const mt=st(E);if(mt!==L.__cacheKey){At[mt]===void 0&&(At[mt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),At[mt].usedTimes++;const Xt=At[L.__cacheKey];Xt!==void 0&&(At[L.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(E)),L.__cacheKey=mt,L.__webglTexture=At[mt].texture}return q}function Rt(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Gt(L,E,q,yt){const mt=L.updateRanges;if(mt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,yt,E.data);else{mt.sort((Nt,wt)=>Nt.start-wt.start);let Xt=0;for(let Nt=1;Nt<mt.length;Nt++){const wt=mt[Xt],Ft=mt[Nt],W=wt.start+wt.count,rt=Rt(Ft.start,E.width,4),Ct=Rt(wt.start,E.width,4);Ft.start<=W+1&&rt===Ct&&Rt(Ft.start+Ft.count-1,E.width,4)===rt?wt.count=Math.max(wt.count,Ft.start+Ft.count-wt.start):(++Xt,mt[Xt]=Ft)}mt.length=Xt+1;const Ot=r.getParameter(r.UNPACK_ROW_LENGTH),te=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Nt=0,wt=mt.length;Nt<wt;Nt++){const Ft=mt[Nt],W=Math.floor(Ft.start/4),rt=Math.ceil(Ft.count/4),Ct=W%E.width,z=Math.floor(W/E.width),_t=rt,gt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),i.texSubImage2D(r.TEXTURE_2D,0,Ct,z,_t,gt,q,yt,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,te),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function at(L,E,q){let yt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(yt=r.TEXTURE_3D);const At=St(L,E),mt=E.source;i.bindTexture(yt,L.__webglTexture,r.TEXTURE0+q);const Xt=s.get(mt);if(mt.version!==Xt.__version||At===!0){i.activeTexture(r.TEXTURE0+q);const Ot=Ne.getPrimaries(Ne.workingColorSpace),te=E.colorSpace===vs?null:Ne.getPrimaries(E.colorSpace),ne=E.colorSpace===vs||Ot===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Nt=w(E.image,!1,l.maxTextureSize);Nt=Le(E,Nt);const wt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type);let W=N(E.internalFormat,wt,Ft,E.colorSpace,E.isVideoTexture);j(yt,E);let rt;const Ct=E.mipmaps,z=E.isVideoTexture!==!0,_t=Xt.__version===void 0||At===!0,gt=mt.dataReady,bt=F(E,Nt);if(E.isDepthTexture)W=U(E.format===tr,E.type),_t&&(z?i.texStorage2D(r.TEXTURE_2D,1,W,Nt.width,Nt.height):i.texImage2D(r.TEXTURE_2D,0,W,Nt.width,Nt.height,0,wt,Ft,null));else if(E.isDataTexture)if(Ct.length>0){z&&_t&&i.texStorage2D(r.TEXTURE_2D,bt,W,Ct[0].width,Ct[0].height);for(let ct=0,$=Ct.length;ct<$;ct++)rt=Ct[ct],z?gt&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,rt.width,rt.height,wt,Ft,rt.data):i.texImage2D(r.TEXTURE_2D,ct,W,rt.width,rt.height,0,wt,Ft,rt.data);E.generateMipmaps=!1}else z?(_t&&i.texStorage2D(r.TEXTURE_2D,bt,W,Nt.width,Nt.height),gt&&Gt(E,Nt,wt,Ft)):i.texImage2D(r.TEXTURE_2D,0,W,Nt.width,Nt.height,0,wt,Ft,Nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&_t&&i.texStorage3D(r.TEXTURE_2D_ARRAY,bt,W,Ct[0].width,Ct[0].height,Nt.depth);for(let ct=0,$=Ct.length;ct<$;ct++)if(rt=Ct[ct],E.format!==Wi)if(wt!==null)if(z){if(gt)if(E.layerUpdates.size>0){const Dt=_v(rt.width,rt.height,E.format,E.type);for(const Jt of E.layerUpdates){const ce=rt.data.subarray(Jt*Dt/rt.data.BYTES_PER_ELEMENT,(Jt+1)*Dt/rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Jt,rt.width,rt.height,1,wt,ce)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,rt.width,rt.height,Nt.depth,wt,rt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,W,rt.width,rt.height,Nt.depth,0,rt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?gt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,rt.width,rt.height,Nt.depth,wt,Ft,rt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ct,W,rt.width,rt.height,Nt.depth,0,wt,Ft,rt.data)}else{z&&_t&&i.texStorage2D(r.TEXTURE_2D,bt,W,Ct[0].width,Ct[0].height);for(let ct=0,$=Ct.length;ct<$;ct++)rt=Ct[ct],E.format!==Wi?wt!==null?z?gt&&i.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,rt.width,rt.height,wt,rt.data):i.compressedTexImage2D(r.TEXTURE_2D,ct,W,rt.width,rt.height,0,rt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?gt&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,rt.width,rt.height,wt,Ft,rt.data):i.texImage2D(r.TEXTURE_2D,ct,W,rt.width,rt.height,0,wt,Ft,rt.data)}else if(E.isDataArrayTexture)if(z){if(_t&&i.texStorage3D(r.TEXTURE_2D_ARRAY,bt,W,Nt.width,Nt.height,Nt.depth),gt)if(E.layerUpdates.size>0){const ct=_v(Nt.width,Nt.height,E.format,E.type);for(const $ of E.layerUpdates){const Dt=Nt.data.subarray($*ct/Nt.data.BYTES_PER_ELEMENT,($+1)*ct/Nt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,Nt.width,Nt.height,1,wt,Ft,Dt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Nt.width,Nt.height,Nt.depth,wt,Ft,Nt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,W,Nt.width,Nt.height,Nt.depth,0,wt,Ft,Nt.data);else if(E.isData3DTexture)z?(_t&&i.texStorage3D(r.TEXTURE_3D,bt,W,Nt.width,Nt.height,Nt.depth),gt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Nt.width,Nt.height,Nt.depth,wt,Ft,Nt.data)):i.texImage3D(r.TEXTURE_3D,0,W,Nt.width,Nt.height,Nt.depth,0,wt,Ft,Nt.data);else if(E.isFramebufferTexture){if(_t)if(z)i.texStorage2D(r.TEXTURE_2D,bt,W,Nt.width,Nt.height);else{let ct=Nt.width,$=Nt.height;for(let Dt=0;Dt<bt;Dt++)i.texImage2D(r.TEXTURE_2D,Dt,W,ct,$,0,wt,Ft,null),ct>>=1,$>>=1}}else if(Ct.length>0){if(z&&_t){const ct=jt(Ct[0]);i.texStorage2D(r.TEXTURE_2D,bt,W,ct.width,ct.height)}for(let ct=0,$=Ct.length;ct<$;ct++)rt=Ct[ct],z?gt&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,wt,Ft,rt):i.texImage2D(r.TEXTURE_2D,ct,W,wt,Ft,rt);E.generateMipmaps=!1}else if(z){if(_t){const ct=jt(Nt);i.texStorage2D(r.TEXTURE_2D,bt,W,ct.width,ct.height)}gt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Ft,Nt)}else i.texImage2D(r.TEXTURE_2D,0,W,wt,Ft,Nt);S(E)&&y(yt),Xt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Mt(L,E,q){if(E.image.length!==6)return;const yt=St(L,E),At=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+q);const mt=s.get(At);if(At.version!==mt.__version||yt===!0){i.activeTexture(r.TEXTURE0+q);const Xt=Ne.getPrimaries(Ne.workingColorSpace),Ot=E.colorSpace===vs?null:Ne.getPrimaries(E.colorSpace),te=E.colorSpace===vs||Xt===Ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Nt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let $=0;$<6;$++)!ne&&!Nt?wt[$]=w(E.image[$],!0,l.maxCubemapSize):wt[$]=Nt?E.image[$].image:E.image[$],wt[$]=Le(E,wt[$]);const Ft=wt[0],W=c.convert(E.format,E.colorSpace),rt=c.convert(E.type),Ct=N(E.internalFormat,W,rt,E.colorSpace),z=E.isVideoTexture!==!0,_t=mt.__version===void 0||yt===!0,gt=At.dataReady;let bt=F(E,Ft);j(r.TEXTURE_CUBE_MAP,E);let ct;if(ne){z&&_t&&i.texStorage2D(r.TEXTURE_CUBE_MAP,bt,Ct,Ft.width,Ft.height);for(let $=0;$<6;$++){ct=wt[$].mipmaps;for(let Dt=0;Dt<ct.length;Dt++){const Jt=ct[Dt];E.format!==Wi?W!==null?z?gt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt,0,0,Jt.width,Jt.height,W,Jt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt,Ct,Jt.width,Jt.height,0,Jt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt,0,0,Jt.width,Jt.height,W,rt,Jt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt,Ct,Jt.width,Jt.height,0,W,rt,Jt.data)}}}else{if(ct=E.mipmaps,z&&_t){ct.length>0&&bt++;const $=jt(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,bt,Ct,$.width,$.height)}for(let $=0;$<6;$++)if(Nt){z?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,wt[$].width,wt[$].height,W,rt,wt[$].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ct,wt[$].width,wt[$].height,0,W,rt,wt[$].data);for(let Dt=0;Dt<ct.length;Dt++){const ce=ct[Dt].image[$].image;z?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt+1,0,0,ce.width,ce.height,W,rt,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt+1,Ct,ce.width,ce.height,0,W,rt,ce.data)}}else{z?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,W,rt,wt[$]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ct,W,rt,wt[$]);for(let Dt=0;Dt<ct.length;Dt++){const Jt=ct[Dt];z?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt+1,0,0,W,rt,Jt.image[$]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt+1,Ct,W,rt,Jt.image[$])}}}S(E)&&y(r.TEXTURE_CUBE_MAP),mt.__version=At.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Lt(L,E,q,yt,At,mt){const Xt=c.convert(q.format,q.colorSpace),Ot=c.convert(q.type),te=N(q.internalFormat,Xt,Ot,q.colorSpace),ne=s.get(E),Nt=s.get(q);if(Nt.__renderTarget=E,!ne.__hasExternalTextures){const wt=Math.max(1,E.width>>mt),Ft=Math.max(1,E.height>>mt);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,mt,te,wt,Ft,E.depth,0,Xt,Ot,null):i.texImage2D(At,mt,te,wt,Ft,0,Xt,Ot,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Qe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,At,Nt.__webglTexture,0,k(E)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,At,Nt.__webglTexture,mt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(L,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const yt=E.depthTexture,At=yt&&yt.isDepthTexture?yt.type:null,mt=U(E.stencilBuffer,At),Xt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Qe(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),mt,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),mt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,mt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xt,r.RENDERBUFFER,L)}else{const yt=E.textures;for(let At=0;At<yt.length;At++){const mt=yt[At],Xt=c.convert(mt.format,mt.colorSpace),Ot=c.convert(mt.type),te=N(mt.internalFormat,Xt,Ot,mt.colorSpace);Qe(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),te,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(L,E,q){const yt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(E.depthTexture);if(At.__renderTarget=E,(!At.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),yt){if(At.__webglInit===void 0&&(At.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),j(r.TEXTURE_CUBE_MAP,E.depthTexture);const ne=c.convert(E.depthTexture.format),Nt=c.convert(E.depthTexture.type);let wt;E.depthTexture.format===Ba?wt=r.DEPTH_COMPONENT24:E.depthTexture.format===tr&&(wt=r.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,wt,E.width,E.height,0,ne,Nt,null)}}else J(E.depthTexture,0);const mt=At.__webglTexture,Xt=k(E),Ot=yt?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,te=E.depthTexture.format===tr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ba)Qe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Ot,mt,0,Xt):r.framebufferTexture2D(r.FRAMEBUFFER,te,Ot,mt,0);else if(E.depthTexture.format===tr)Qe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Ot,mt,0,Xt):r.framebufferTexture2D(r.FRAMEBUFFER,te,Ot,mt,0);else throw new Error("Unknown depthTexture format")}function zt(L){const E=s.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const yt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),yt){const At=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,yt.removeEventListener("dispose",At)};yt.addEventListener("dispose",At),E.__depthDisposeCallback=At}E.__boundDepthTexture=yt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let yt=0;yt<6;yt++)Qt(E.__webglFramebuffer[yt],L,yt);else{const yt=L.texture.mipmaps;yt&&yt.length>0?Qt(E.__webglFramebuffer[0],L,0):Qt(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[yt]),E.__webglDepthbuffer[yt]===void 0)E.__webglDepthbuffer[yt]=r.createRenderbuffer(),kt(E.__webglDepthbuffer[yt],L,!1);else{const At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,mt)}}else{const yt=L.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),kt(E.__webglDepthbuffer,L,!1);else{const At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,mt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(L,E,q){const yt=s.get(L);E!==void 0&&Lt(yt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&zt(L)}function xe(L){const E=L.texture,q=s.get(L),yt=s.get(E);L.addEventListener("dispose",B);const At=L.textures,mt=L.isWebGLCubeRenderTarget===!0,Xt=At.length>1;if(Xt||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=E.version,h.memory.textures++),mt){q.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ot]=[];for(let te=0;te<E.mipmaps.length;te++)q.__webglFramebuffer[Ot][te]=r.createFramebuffer()}else q.__webglFramebuffer[Ot]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ot=0;Ot<E.mipmaps.length;Ot++)q.__webglFramebuffer[Ot]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Xt)for(let Ot=0,te=At.length;Ot<te;Ot++){const ne=s.get(At[Ot]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&Qe(L)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ot=0;Ot<At.length;Ot++){const te=At[Ot];q.__webglColorRenderbuffer[Ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Ot]);const ne=c.convert(te.format,te.colorSpace),Nt=c.convert(te.type),wt=N(te.internalFormat,ne,Nt,te.colorSpace,L.isXRRenderTarget===!0),Ft=k(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,wt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,q.__webglColorRenderbuffer[Ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),j(r.TEXTURE_CUBE_MAP,E);for(let Ot=0;Ot<6;Ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)Lt(q.__webglFramebuffer[Ot][te],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,te);else Lt(q.__webglFramebuffer[Ot],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);S(E)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ot=0,te=At.length;Ot<te;Ot++){const ne=At[Ot],Nt=s.get(ne);let wt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,Nt.__webglTexture),j(wt,ne),Lt(q.__webglFramebuffer,L,ne,r.COLOR_ATTACHMENT0+Ot,wt,0),S(ne)&&y(wt)}i.unbindTexture()}else{let Ot=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ot=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ot,yt.__webglTexture),j(Ot,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)Lt(q.__webglFramebuffer[te],L,E,r.COLOR_ATTACHMENT0,Ot,te);else Lt(q.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Ot,0);S(E)&&y(Ot),i.unbindTexture()}L.depthBuffer&&zt(L)}function _e(L){const E=L.textures;for(let q=0,yt=E.length;q<yt;q++){const At=E[q];if(S(At)){const mt=C(L),Xt=s.get(At).__webglTexture;i.bindTexture(mt,Xt),y(mt),i.unbindTexture()}}}const Ue=[],oe=[];function Ke(L){if(L.samples>0){if(Qe(L)===!1){const E=L.textures,q=L.width,yt=L.height;let At=r.COLOR_BUFFER_BIT;const mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xt=s.get(L),Ot=E.length>1;if(Ot)for(let ne=0;ne<E.length;ne++)i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const te=L.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),Ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[ne]);const Nt=s.get(E[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Nt,0)}r.blitFramebuffer(0,0,q,yt,0,0,q,yt,At,r.NEAREST),m===!0&&(Ue.length=0,oe.length=0,Ue.push(r.COLOR_ATTACHMENT0+ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ue.push(mt),oe.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ot)for(let ne=0;ne<E.length;ne++){i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[ne]);const Nt=s.get(E[ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,Nt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function k(L){return Math.min(l.maxSamples,L.samples)}function Qe(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(L){const E=h.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Le(L,E){const q=L.colorSpace,yt=L.format,At=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==co&&q!==vs&&(Ne.getTransfer(q)===Ve?(yt!==Wi||At!==yi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),E}function jt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=K,this.setTexture2D=J,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=dt,this.rebindTextures=Je,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function l2(r,t){function i(s,l=vs){let c;const h=Ne.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===Ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Rp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===cx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ux)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ox)return r.BYTE;if(s===lx)return r.SHORT;if(s===Sl)return r.UNSIGNED_SHORT;if(s===Tp)return r.INT;if(s===ra)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ia)return r.HALF_FLOAT;if(s===fx)return r.ALPHA;if(s===hx)return r.RGB;if(s===Wi)return r.RGBA;if(s===Ba)return r.DEPTH_COMPONENT;if(s===tr)return r.DEPTH_STENCIL;if(s===wp)return r.RED;if(s===Cp)return r.RED_INTEGER;if(s===lo)return r.RG;if(s===Dp)return r.RG_INTEGER;if(s===Up)return r.RGBA_INTEGER;if(s===pu||s===mu||s===gu||s===_u)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Id||s===Bd||s===Fd||s===Hd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===Yd||s===jd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Gd||s===Vd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===kd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Xd)return c.COMPRESSED_R11_EAC;if(s===Wd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Yd)return c.COMPRESSED_RG11_EAC;if(s===jd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===qd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp||s===op)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===qd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===np)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ip)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===op)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lp||s===cp||s===up)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===lp)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fp||s===hp||s===dp||s===pp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===fp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===hp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const c2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u2=`
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

}`;class f2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Mx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new la({vertexShader:c2,fragmentShader:u2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new rn(new xs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h2 extends ir{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,_=null,x=null,g=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",S=new f2,y={},C=i.getContextAttributes();let N=null,U=null;const F=[],I=[],B=new ae;let T=null;const D=new Pi;D.viewport=new fn;const ut=new Pi;ut.viewport=new fn;const G=[D,ut],K=new ME;let tt=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let Mt=F[at];return Mt===void 0&&(Mt=new Zh,F[at]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(at){let Mt=F[at];return Mt===void 0&&(Mt=new Zh,F[at]=Mt),Mt.getGripSpace()},this.getHand=function(at){let Mt=F[at];return Mt===void 0&&(Mt=new Zh,F[at]=Mt),Mt.getHandSpace()};function J(at){const Mt=I.indexOf(at.inputSource);if(Mt===-1)return;const Lt=F[Mt];Lt!==void 0&&(Lt.update(at.inputSource,at.frame,d||h),Lt.dispatchEvent({type:at.type,data:at.inputSource}))}function O(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let at=0;at<F.length;at++){const Mt=I[at];Mt!==null&&(I[at]=null,F[at].disconnect(Mt))}tt=null,st=null,S.reset();for(const at in y)delete y[at];t.setRenderTarget(N),M=null,g=null,x=null,l=null,U=null,Gt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,kt=null,Qt=null;C.depth&&(Qt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=C.stencil?tr:Ba,kt=C.stencil?Ml:ra);const zt={colorFormat:i.RGBA8,depthFormat:Qt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(zt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new sa(g.textureWidth,g.textureHeight,{format:Wi,type:yi,depthTexture:new bl(g.textureWidth,g.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Lt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new sa(M.framebufferWidth,M.framebufferHeight,{format:Wi,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Gt.setContext(l),Gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(at){for(let Mt=0;Mt<at.removed.length;Mt++){const Lt=at.removed[Mt],kt=I.indexOf(Lt);kt>=0&&(I[kt]=null,F[kt].disconnect(Lt))}for(let Mt=0;Mt<at.added.length;Mt++){const Lt=at.added[Mt];let kt=I.indexOf(Lt);if(kt===-1){for(let zt=0;zt<F.length;zt++)if(zt>=I.length){I.push(Lt),kt=zt;break}else if(I[zt]===null){I[zt]=Lt,kt=zt;break}if(kt===-1)break}const Qt=F[kt];Qt&&Qt.connect(Lt)}}const dt=new Z,xt=new Z;function Ut(at,Mt,Lt){dt.setFromMatrixPosition(Mt.matrixWorld),xt.setFromMatrixPosition(Lt.matrixWorld);const kt=dt.distanceTo(xt),Qt=Mt.projectionMatrix.elements,zt=Lt.projectionMatrix.elements,Je=Qt[14]/(Qt[10]-1),xe=Qt[14]/(Qt[10]+1),_e=(Qt[9]+1)/Qt[5],Ue=(Qt[9]-1)/Qt[5],oe=(Qt[8]-1)/Qt[0],Ke=(zt[8]+1)/zt[0],k=Je*oe,Qe=Je*Ke,Te=kt/(-oe+Ke),Le=Te*-oe;if(Mt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Le),at.translateZ(Te),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Qt[10]===-1)at.projectionMatrix.copy(Mt.projectionMatrix),at.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const jt=Je+Te,L=xe+Te,E=k-Le,q=Qe+(kt-Le),yt=_e*xe/L*jt,At=Ue*xe/L*jt;at.projectionMatrix.makePerspective(E,q,yt,At,jt,L),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function P(at,Mt){Mt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(Mt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let Mt=at.near,Lt=at.far;S.texture!==null&&(S.depthNear>0&&(Mt=S.depthNear),S.depthFar>0&&(Lt=S.depthFar)),K.near=ut.near=D.near=Mt,K.far=ut.far=D.far=Lt,(tt!==K.near||st!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),tt=K.near,st=K.far),K.layers.mask=at.layers.mask|6,D.layers.mask=K.layers.mask&-5,ut.layers.mask=K.layers.mask&-3;const kt=at.parent,Qt=K.cameras;P(K,kt);for(let zt=0;zt<Qt.length;zt++)P(Qt[zt],kt);Qt.length===2?Ut(K,D,ut):K.projectionMatrix.copy(D.projectionMatrix),j(at,K,kt)};function j(at,Mt,Lt){Lt===null?at.matrix.copy(Mt.matrixWorld):(at.matrix.copy(Lt.matrixWorld),at.matrix.invert(),at.matrix.multiply(Mt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(Mt.projectionMatrix),at.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=gp*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(at){return y[at]};let St=null;function Rt(at,Mt){if(_=Mt.getViewerPose(d||h),b=Mt,_!==null){const Lt=_.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let kt=!1;Lt.length!==K.cameras.length&&(K.cameras.length=0,kt=!0);for(let xe=0;xe<Lt.length;xe++){const _e=Lt[xe];let Ue=null;if(M!==null)Ue=M.getViewport(_e);else{const Ke=x.getViewSubImage(g,_e);Ue=Ke.viewport,xe===0&&(t.setRenderTargetTextures(U,Ke.colorTexture,Ke.depthStencilTexture),t.setRenderTarget(U))}let oe=G[xe];oe===void 0&&(oe=new Pi,oe.layers.enable(xe),oe.viewport=new fn,G[xe]=oe),oe.matrix.fromArray(_e.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(_e.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),xe===0&&(K.matrix.copy(oe.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),kt===!0&&K.cameras.push(oe)}const Qt=l.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const xe=x.getDepthInformation(Lt[0]);xe&&xe.isValid&&xe.texture&&S.init(xe,l.renderState)}if(Qt&&Qt.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let xe=0;xe<Lt.length;xe++){const _e=Lt[xe].camera;if(_e){let Ue=y[_e];Ue||(Ue=new Mx,y[_e]=Ue);const oe=x.getCameraImage(_e);Ue.sourceTexture=oe}}}}for(let Lt=0;Lt<F.length;Lt++){const kt=I[Lt],Qt=F[Lt];kt!==null&&Qt!==void 0&&Qt.update(kt,Mt,d||h)}St&&St(at,Mt),Mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Mt}),b=null}const Gt=new Ax;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function(at){St=at},this.dispose=function(){}}}const Ks=new oa,d2=new qe;function p2(r,t){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,Ex(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,C,N,U){y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),x(S,y)):y.isMeshPhongMaterial?(c(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),g(S,y),y.isMeshPhysicalMaterial&&M(S,y,U)):y.isMeshMatcapMaterial?(c(S,y),b(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),w(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(h(S,y),y.isLineDashedMaterial&&p(S,y)):y.isPointsMaterial?m(S,y,C,N):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===li&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===li&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const C=t.get(y),N=C.envMap,U=C.envMapRotation;N&&(S.envMap.value=N,Ks.copy(U),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),S.envMapRotation.value.setFromMatrix4(d2.makeRotationFromEuler(Ks)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function p(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,C,N){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*C,S.scale.value=N*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,C){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===li&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const C=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function m2(r,t,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const U=N.program;s.uniformBlockBinding(C,U)}function d(C,N){let U=l[C.id];U===void 0&&(b(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",S));const F=N.program;s.updateUBOMapping(C,F);const I=t.render.frame;c[C.id]!==I&&(g(C),c[C.id]=I)}function _(C){const N=x();C.__bindingPointIndex=N;const U=r.createBuffer(),F=C.__size,I=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function x(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],U=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let I=0,B=U.length;I<B;I++){const T=Array.isArray(U[I])?U[I]:[U[I]];for(let D=0,ut=T.length;D<ut;D++){const G=T[D];if(M(G,I,D,F)===!0){const K=G.__offset,tt=Array.isArray(G.value)?G.value:[G.value];let st=0;for(let J=0;J<tt.length;J++){const O=tt[J],H=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,K+st,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,st),st+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,N,U,F){const I=C.value,B=N+"_"+U;if(F[B]===void 0)return typeof I=="number"||typeof I=="boolean"?F[B]=I:F[B]=I.clone(),!0;{const T=F[B];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return F[B]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function b(C){const N=C.uniforms;let U=0;const F=16;for(let B=0,T=N.length;B<T;B++){const D=Array.isArray(N[B])?N[B]:[N[B]];for(let ut=0,G=D.length;ut<G;ut++){const K=D[ut],tt=Array.isArray(K.value)?K.value:[K.value];for(let st=0,J=tt.length;st<J;st++){const O=tt[st],H=w(O),dt=U%F,xt=dt%H.boundary,Ut=dt+xt;U+=xt,Ut!==0&&F-Ut<H.storage&&(U+=F-Ut),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=H.storage}}}const I=U%F;return I>0&&(U+=F-I),C.__size=U,C.__cache={},this}function w(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",C),N}function S(C){const N=C.target;N.removeEventListener("dispose",S);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function y(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:y}}const g2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function _2(){return Ji===null&&(Ji=new yx(g2,16,16,lo,Ia),Ji.name="DFG_LUT",Ji.minFilter=kn,Ji.magFilter=kn,Ji.wrapS=Oa,Ji.wrapT=Oa,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class v2{constructor(t={}){const{canvas:i=DM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=yi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const w=M,S=new Set([Up,Dp,Cp]),y=new Set([yi,ra,Sl,Ml,Ap,Rp]),C=new Uint32Array(4),N=new Int32Array(4);let U=null,F=null;const I=[],B=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ut=!1;this._outputColorSpace=Oi;let G=0,K=0,tt=null,st=-1,J=null;const O=new fn,H=new fn;let dt=null;const xt=new be(0);let Ut=0,P=i.width,j=i.height,St=1,Rt=null,Gt=null;const at=new fn(0,0,P,j),Mt=new fn(0,0,P,j);let Lt=!1;const kt=new zp;let Qt=!1,zt=!1;const Je=new qe,xe=new Z,_e=new fn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ke(){return tt===null?St:1}let k=s;function Qe(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ep}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Jt,!1),i.addEventListener("webglcontextcreationerror",ce,!1),k===null){const Y="webgl2";if(k=Qe(Y,R),k===null)throw Qe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let Te,Le,jt,L,E,q,yt,At,mt,Xt,Ot,te,ne,Nt,wt,Ft,W,rt,Ct,z,_t,gt,bt;function ct(){Te=new vT(k),Te.init(),_t=new l2(k,Te),Le=new uT(k,Te,t,_t),jt=new r2(k,Te),Le.reversedDepthBuffer&&g&&jt.buffers.depth.setReversed(!0),L=new ST(k),E=new YA,q=new o2(k,Te,jt,E,Le,_t,L),yt=new _T(D),At=new AE(k),gt=new lT(k,At),mt=new xT(k,At,L,gt),Xt=new ET(k,mt,At,gt,L),rt=new MT(k,Le,q),wt=new fT(E),Ot=new WA(D,yt,Te,Le,gt,wt),te=new p2(D,E),ne=new qA,Nt=new t2(Te),W=new oT(D,yt,jt,Xt,b,m),Ft=new s2(D,Xt,Le),bt=new m2(k,L,Le,jt),Ct=new cT(k,Te,L),z=new yT(k,Te,L),L.programs=Ot.programs,D.capabilities=Le,D.extensions=Te,D.properties=E,D.renderLists=ne,D.shadowMap=Ft,D.state=jt,D.info=L}ct(),w!==yi&&(T=new TT(w,i.width,i.height,l,c));const $=new h2(D,k);this.xr=$,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(R){R!==void 0&&(St=R,this.setSize(P,j,!1))},this.getSize=function(R){return R.set(P,j)},this.setSize=function(R,Y,ft=!0){if($.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,j=Y,i.width=Math.floor(R*St),i.height=Math.floor(Y*St),ft===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(P*St,j*St).floor()},this.setDrawingBufferSize=function(R,Y,ft){P=R,j=Y,St=ft,i.width=Math.floor(R*ft),i.height=Math.floor(Y*ft),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(w===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,Y,ft,ot){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,Y,ft,ot),jt.viewport(O.copy(at).multiplyScalar(St).round())},this.getScissor=function(R){return R.copy(Mt)},this.setScissor=function(R,Y,ft,ot){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,Y,ft,ot),jt.scissor(H.copy(Mt).multiplyScalar(St).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){jt.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){Gt=R},this.getClearColor=function(R){return R.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ft=!0){let ot=0;if(R){let et=!1;if(tt!==null){const Pt=tt.texture.format;et=S.has(Pt)}if(et){const Pt=tt.texture.type,Vt=y.has(Pt),It=W.getClearColor(),Zt=W.getClearAlpha(),$t=It.r,se=It.g,ue=It.b;Vt?(C[0]=$t,C[1]=se,C[2]=ue,C[3]=Zt,k.clearBufferuiv(k.COLOR,0,C)):(N[0]=$t,N[1]=se,N[2]=ue,N[3]=Zt,k.clearBufferiv(k.COLOR,0,N))}else ot|=k.COLOR_BUFFER_BIT}Y&&(ot|=k.DEPTH_BUFFER_BIT),ft&&(ot|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&k.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Jt,!1),i.removeEventListener("webglcontextcreationerror",ce,!1),W.dispose(),ne.dispose(),Nt.dispose(),E.dispose(),yt.dispose(),Xt.dispose(),gt.dispose(),bt.dispose(),Ot.dispose(),$.dispose(),$.removeEventListener("sessionstart",On),$.removeEventListener("sessionend",Wn),ti.stop()};function Dt(R){R.preventDefault(),Su("WebGLRenderer: Context Lost."),ut=!0}function Jt(){Su("WebGLRenderer: Context Restored."),ut=!1;const R=L.autoReset,Y=Ft.enabled,ft=Ft.autoUpdate,ot=Ft.needsUpdate,et=Ft.type;ct(),L.autoReset=R,Ft.enabled=Y,Ft.autoUpdate=ft,Ft.needsUpdate=ot,Ft.type=et}function ce(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){const Y=R.target;Y.removeEventListener("dispose",Ht),Ae(Y)}function Ae(R){Be(R),E.remove(R)}function Be(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(ft){Ot.releaseProgram(ft)}),R.isShaderMaterial&&Ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ft,ot,et,Pt){Y===null&&(Y=Ue);const Vt=et.isMesh&&et.matrixWorld.determinant()<0,It=Rs(R,Y,ft,ot,et);jt.setMaterial(ot,Vt);let Zt=ft.index,$t=1;if(ot.wireframe===!0){if(Zt=mt.getWireframeAttribute(ft),Zt===void 0)return;$t=2}const se=ft.drawRange,ue=ft.attributes.position;let Wt=se.start*$t,pe=(se.start+se.count)*$t;Pt!==null&&(Wt=Math.max(Wt,Pt.start*$t),pe=Math.min(pe,(Pt.start+Pt.count)*$t)),Zt!==null?(Wt=Math.max(Wt,0),pe=Math.min(pe,Zt.count)):ue!=null&&(Wt=Math.max(Wt,0),pe=Math.min(pe,ue.count));const en=pe-Wt;if(en<0||en===1/0)return;gt.setup(et,ot,It,ft,Zt);let nn,Oe=Ct;if(Zt!==null&&(nn=At.get(Zt),Oe=z,Oe.setIndex(nn)),et.isMesh)ot.wireframe===!0?(jt.setLineWidth(ot.wireframeLinewidth*Ke()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if(et.isLine){let Tn=ot.linewidth;Tn===void 0&&(Tn=1),jt.setLineWidth(Tn*Ke()),et.isLineSegments?Oe.setMode(k.LINES):et.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else et.isPoints?Oe.setMode(k.POINTS):et.isSprite&&Oe.setMode(k.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Mu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Oe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Tn=et._multiDrawStarts,qt=et._multiDrawCounts,Yn=et._multiDrawCount,le=Zt?At.get(Zt).bytesPerElement:1,jn=E.get(ot).currentProgram.getUniforms();for(let ci=0;ci<Yn;ci++)jn.setValue(k,"_gl_DrawID",ci),Oe.render(Tn[ci]/le,qt[ci])}else if(et.isInstancedMesh)Oe.renderInstances(Wt,en,et.count);else if(ft.isInstancedBufferGeometry){const Tn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,qt=Math.min(ft.instanceCount,Tn);Oe.renderInstances(Wt,en,qt)}else Oe.render(Wt,en)};function sn(R,Y,ft){R.transparent===!0&&R.side===Jn&&R.forceSinglePass===!1?(R.side=li,R.needsUpdate=!0,bi(R,Y,ft),R.side=Ms,R.needsUpdate=!0,bi(R,Y,ft),R.side=Jn):bi(R,Y,ft)}this.compile=function(R,Y,ft=null){ft===null&&(ft=R),F=Nt.get(ft),F.init(Y),B.push(F),ft.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(F.pushLight(et),et.castShadow&&F.pushShadow(et))}),R!==ft&&R.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(F.pushLight(et),et.castShadow&&F.pushShadow(et))}),F.setupLights();const ot=new Set;return R.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Pt=et.material;if(Pt)if(Array.isArray(Pt))for(let Vt=0;Vt<Pt.length;Vt++){const It=Pt[Vt];sn(It,ft,et),ot.add(It)}else sn(Pt,ft,et),ot.add(Pt)}),F=B.pop(),ot},this.compileAsync=function(R,Y,ft=null){const ot=this.compile(R,Y,ft);return new Promise(et=>{function Pt(){if(ot.forEach(function(Vt){E.get(Vt).currentProgram.isReady()&&ot.delete(Vt)}),ot.size===0){et(R);return}setTimeout(Pt,10)}Te.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let gn=null;function $n(R){gn&&gn(R)}function On(){ti.stop()}function Wn(){ti.start()}const ti=new Ax;ti.setAnimationLoop($n),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(R){gn=R,$.setAnimationLoop(R),R===null?ti.stop():ti.start()},$.addEventListener("sessionstart",On),$.addEventListener("sessionend",Wn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ut===!0)return;const ft=$.enabled===!0&&$.isPresenting===!0,ot=T!==null&&(tt===null||ft)&&T.begin(D,tt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(Y),Y=$.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Y,tt),F=Nt.get(R,B.length),F.init(Y),B.push(F),Je.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),kt.setFromProjectionMatrix(Je,ia,Y.reversedDepth),zt=this.localClippingEnabled,Qt=wt.init(this.clippingPlanes,zt),U=ne.get(R,I.length),U.init(),I.push(U),$.enabled===!0&&$.isPresenting===!0){const Vt=D.xr.getDepthSensingMesh();Vt!==null&&Yi(Vt,Y,-1/0,D.sortObjects)}Yi(R,Y,0,D.sortObjects),U.finish(),D.sortObjects===!0&&U.sort(Rt,Gt),oe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,oe&&W.addToRenderList(U,R),this.info.render.frame++,Qt===!0&&wt.beginShadows();const et=F.state.shadowsArray;if(Ft.render(et,R,Y),Qt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&T.hasRenderPass())===!1){const Vt=U.opaque,It=U.transmissive;if(F.setupLights(),Y.isArrayCamera){const Zt=Y.cameras;if(It.length>0)for(let $t=0,se=Zt.length;$t<se;$t++){const ue=Zt[$t];on(Vt,It,R,ue)}oe&&W.render(R);for(let $t=0,se=Zt.length;$t<se;$t++){const ue=Zt[$t];bn(U,R,ue,ue.viewport)}}else It.length>0&&on(Vt,It,R,Y),oe&&W.render(R),bn(U,R,Y)}tt!==null&&K===0&&(q.updateMultisampleRenderTarget(tt),q.updateRenderTargetMipmap(tt)),ot&&T.end(D),R.isScene===!0&&R.onAfterRender(D,R,Y),gt.resetDefaultState(),st=-1,J=null,B.pop(),B.length>0?(F=B[B.length-1],Qt===!0&&wt.setGlobalState(D.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function Yi(R,Y,ft,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ft=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||kt.intersectsSprite(R)){ot&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const Vt=Xt.update(R),It=R.material;It.visible&&U.push(R,Vt,It,ft,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||kt.intersectsObject(R))){const Vt=Xt.update(R),It=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),_e.copy(Vt.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(It)){const Zt=Vt.groups;for(let $t=0,se=Zt.length;$t<se;$t++){const ue=Zt[$t],Wt=It[ue.materialIndex];Wt&&Wt.visible&&U.push(R,Vt,Wt,ft,_e.z,ue)}}else It.visible&&U.push(R,Vt,It,ft,_e.z,null)}}const Pt=R.children;for(let Vt=0,It=Pt.length;Vt<It;Vt++)Yi(Pt[Vt],Y,ft,ot)}function bn(R,Y,ft,ot){const{opaque:et,transmissive:Pt,transparent:Vt}=R;F.setupLightsView(ft),Qt===!0&&wt.setGlobalState(D.clippingPlanes,ft),ot&&jt.viewport(O.copy(ot)),et.length>0&&ln(et,Y,ft),Pt.length>0&&ln(Pt,Y,ft),Vt.length>0&&ln(Vt,Y,ft),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function on(R,Y,ft,ot){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ot.id]===void 0){const Wt=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ot.id]=new sa(1,1,{generateMipmaps:!0,type:Wt?Ia:yi,minFilter:$s,samples:Math.max(4,Le.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}const Pt=F.state.transmissionRenderTarget[ot.id],Vt=ot.viewport||O;Pt.setSize(Vt.z*D.transmissionResolutionScale,Vt.w*D.transmissionResolutionScale);const It=D.getRenderTarget(),Zt=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(Pt),D.getClearColor(xt),Ut=D.getClearAlpha(),Ut<1&&D.setClearColor(16777215,.5),D.clear(),oe&&W.render(ft);const se=D.toneMapping;D.toneMapping=aa;const ue=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),F.setupLightsView(ot),Qt===!0&&wt.setGlobalState(D.clippingPlanes,ot),ln(R,ft,ot),q.updateMultisampleRenderTarget(Pt),q.updateRenderTargetMipmap(Pt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let pe=0,en=Y.length;pe<en;pe++){const nn=Y[pe],{object:Oe,geometry:Tn,material:qt,group:Yn}=nn;if(qt.side===Jn&&Oe.layers.test(ot.layers)){const le=qt.side;qt.side=li,qt.needsUpdate=!0,Ei(Oe,ft,ot,Tn,qt,Yn),qt.side=le,qt.needsUpdate=!0,Wt=!0}}Wt===!0&&(q.updateMultisampleRenderTarget(Pt),q.updateRenderTargetMipmap(Pt))}D.setRenderTarget(It,Zt,$t),D.setClearColor(xt,Ut),ue!==void 0&&(ot.viewport=ue),D.toneMapping=se}function ln(R,Y,ft){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let et=0,Pt=R.length;et<Pt;et++){const Vt=R[et],{object:It,geometry:Zt,group:$t}=Vt;let se=Vt.material;se.allowOverride===!0&&ot!==null&&(se=ot),It.layers.test(ft.layers)&&Ei(It,Y,ft,Zt,se,$t)}}function Ei(R,Y,ft,ot,et,Pt){R.onBeforeRender(D,Y,ft,ot,et,Pt),R.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),et.onBeforeRender(D,Y,ft,ot,R,Pt),et.transparent===!0&&et.side===Jn&&et.forceSinglePass===!1?(et.side=li,et.needsUpdate=!0,D.renderBufferDirect(ft,Y,ot,et,R,Pt),et.side=Ms,et.needsUpdate=!0,D.renderBufferDirect(ft,Y,ot,et,R,Pt),et.side=Jn):D.renderBufferDirect(ft,Y,ot,et,R,Pt),R.onAfterRender(D,Y,ft,ot,et,Pt)}function bi(R,Y,ft){Y.isScene!==!0&&(Y=Ue);const ot=E.get(R),et=F.state.lights,Pt=F.state.shadowsArray,Vt=et.state.version,It=Ot.getParameters(R,et.state,Pt,Y,ft),Zt=Ot.getProgramCacheKey(It);let $t=ot.programs;ot.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ot.fog=Y.fog;const se=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ot.envMap=yt.get(R.envMap||ot.environment,se),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",Ht),$t=new Map,ot.programs=$t);let ue=$t.get(Zt);if(ue!==void 0){if(ot.currentProgram===ue&&ot.lightsStateVersion===Vt)return As(R,It),ue}else It.uniforms=Ot.getUniforms(R),R.onBeforeCompile(It,D),ue=Ot.acquireProgram(It,Zt),$t.set(Zt,ue),ot.uniforms=It.uniforms;const Wt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=wt.uniform),As(R,It),ot.needsLights=mo(R),ot.lightsStateVersion=Vt,ot.needsLights&&(Wt.ambientLightColor.value=et.state.ambient,Wt.lightProbe.value=et.state.probe,Wt.directionalLights.value=et.state.directional,Wt.directionalLightShadows.value=et.state.directionalShadow,Wt.spotLights.value=et.state.spot,Wt.spotLightShadows.value=et.state.spotShadow,Wt.rectAreaLights.value=et.state.rectArea,Wt.ltc_1.value=et.state.rectAreaLTC1,Wt.ltc_2.value=et.state.rectAreaLTC2,Wt.pointLights.value=et.state.point,Wt.pointLightShadows.value=et.state.pointShadow,Wt.hemisphereLights.value=et.state.hemi,Wt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Wt.spotLightMatrix.value=et.state.spotLightMatrix,Wt.spotLightMap.value=et.state.spotLightMap,Wt.pointShadowMatrix.value=et.state.pointShadowMatrix),ot.currentProgram=ue,ot.uniformsList=null,ue}function Ts(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=vu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function As(R,Y){const ft=E.get(R);ft.outputColorSpace=Y.outputColorSpace,ft.batching=Y.batching,ft.batchingColor=Y.batchingColor,ft.instancing=Y.instancing,ft.instancingColor=Y.instancingColor,ft.instancingMorph=Y.instancingMorph,ft.skinning=Y.skinning,ft.morphTargets=Y.morphTargets,ft.morphNormals=Y.morphNormals,ft.morphColors=Y.morphColors,ft.morphTargetsCount=Y.morphTargetsCount,ft.numClippingPlanes=Y.numClippingPlanes,ft.numIntersection=Y.numClipIntersection,ft.vertexAlphas=Y.vertexAlphas,ft.vertexTangents=Y.vertexTangents,ft.toneMapping=Y.toneMapping}function Rs(R,Y,ft,ot,et){Y.isScene!==!0&&(Y=Ue),q.resetTextureUnits();const Pt=Y.fog,Vt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?Y.environment:null,It=tt===null?D.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:co,Zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,$t=yt.get(ot.envMap||Vt,Zt),se=ot.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ue=!!ft.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Wt=!!ft.morphAttributes.position,pe=!!ft.morphAttributes.normal,en=!!ft.morphAttributes.color;let nn=aa;ot.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(nn=D.toneMapping);const Oe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Tn=Oe!==void 0?Oe.length:0,qt=E.get(ot),Yn=F.state.lights;if(Qt===!0&&(zt===!0||R!==J)){const vn=R===J&&ot.id===st;wt.setState(ot,R,vn)}let le=!1;ot.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Yn.state.version||qt.outputColorSpace!==It||et.isBatchedMesh&&qt.batching===!1||!et.isBatchedMesh&&qt.batching===!0||et.isBatchedMesh&&qt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&qt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&qt.instancing===!1||!et.isInstancedMesh&&qt.instancing===!0||et.isSkinnedMesh&&qt.skinning===!1||!et.isSkinnedMesh&&qt.skinning===!0||et.isInstancedMesh&&qt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&qt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&qt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&qt.instancingMorph===!1&&et.morphTexture!==null||qt.envMap!==$t||ot.fog===!0&&qt.fog!==Pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==wt.numPlanes||qt.numIntersection!==wt.numIntersection)||qt.vertexAlphas!==se||qt.vertexTangents!==ue||qt.morphTargets!==Wt||qt.morphNormals!==pe||qt.morphColors!==en||qt.toneMapping!==nn||qt.morphTargetsCount!==Tn)&&(le=!0):(le=!0,qt.__version=ot.version);let jn=qt.currentProgram;le===!0&&(jn=bi(ot,Y,et));let ci=!1,zi=!1,ui=!1;const Fe=jn.getUniforms(),_n=qt.uniforms;if(jt.useProgram(jn.program)&&(ci=!0,zi=!0,ui=!0),ot.id!==st&&(st=ot.id,zi=!0),ci||J!==R){jt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(k,"projectionMatrix",R.projectionMatrix),Fe.setValue(k,"viewMatrix",R.matrixWorldInverse);const Ii=Fe.map.cameraPosition;Ii!==void 0&&Ii.setValue(k,xe.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Fe.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Fe.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,zi=!0,ui=!0)}if(qt.needsLights&&(Yn.state.directionalShadowMap.length>0&&Fe.setValue(k,"directionalShadowMap",Yn.state.directionalShadowMap,q),Yn.state.spotShadowMap.length>0&&Fe.setValue(k,"spotShadowMap",Yn.state.spotShadowMap,q),Yn.state.pointShadowMap.length>0&&Fe.setValue(k,"pointShadowMap",Yn.state.pointShadowMap,q)),et.isSkinnedMesh){Fe.setOptional(k,et,"bindMatrix"),Fe.setOptional(k,et,"bindMatrixInverse");const vn=et.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Fe.setValue(k,"boneTexture",vn.boneTexture,q))}et.isBatchedMesh&&(Fe.setOptional(k,et,"batchingTexture"),Fe.setValue(k,"batchingTexture",et._matricesTexture,q),Fe.setOptional(k,et,"batchingIdTexture"),Fe.setValue(k,"batchingIdTexture",et._indirectTexture,q),Fe.setOptional(k,et,"batchingColorTexture"),et._colorsTexture!==null&&Fe.setValue(k,"batchingColorTexture",et._colorsTexture,q));const qn=ft.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&rt.update(et,ft,jn),(zi||qt.receiveShadow!==et.receiveShadow)&&(qt.receiveShadow=et.receiveShadow,Fe.setValue(k,"receiveShadow",et.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&Y.environment!==null&&(_n.envMapIntensity.value=Y.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=_2()),zi&&(Fe.setValue(k,"toneMappingExposure",D.toneMappingExposure),qt.needsLights&&ca(_n,ui),Pt&&ot.fog===!0&&te.refreshFogUniforms(_n,Pt),te.refreshMaterialUniforms(_n,ot,St,j,F.state.transmissionRenderTarget[R.id]),vu.upload(k,Ts(qt),_n,q)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(vu.upload(k,Ts(qt),_n,q),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Fe.setValue(k,"center",et.center),Fe.setValue(k,"modelViewMatrix",et.modelViewMatrix),Fe.setValue(k,"normalMatrix",et.normalMatrix),Fe.setValue(k,"modelMatrix",et.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const vn=ot.uniformsGroups;for(let Ii=0,ua=vn.length;Ii<ua;Ii++){const sr=vn[Ii];bt.update(sr,jn),bt.bind(sr,jn)}}return jn}function ca(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function mo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(R,Y,ft){const ot=E.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ft,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ft=E.get(R);ft.__webglFramebuffer=Y,ft.__useDefaultFramebuffer=Y===void 0};const Fa=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,ft=0){tt=R,G=Y,K=ft;let ot=null,et=!1,Pt=!1;if(R){const It=E.get(R);if(It.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(k.FRAMEBUFFER,It.__webglFramebuffer),O.copy(R.viewport),H.copy(R.scissor),dt=R.scissorTest,jt.viewport(O),jt.scissor(H),jt.setScissorTest(dt),st=-1;return}else if(It.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(It.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const se=R.depthTexture;if(It.__boundDepthTexture!==se){if(se!==null&&E.has(se)&&(R.width!==se.image.width||R.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Pt=!0);const $t=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[Y])?ot=$t[Y][ft]:ot=$t[Y],et=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?ot=E.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?ot=$t[ft]:ot=$t,O.copy(R.viewport),H.copy(R.scissor),dt=R.scissorTest}else O.copy(at).multiplyScalar(St).floor(),H.copy(Mt).multiplyScalar(St).floor(),dt=Lt;if(ft!==0&&(ot=Fa),jt.bindFramebuffer(k.FRAMEBUFFER,ot)&&jt.drawBuffers(R,ot),jt.viewport(O),jt.scissor(H),jt.setScissorTest(dt),et){const It=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,ft)}else if(Pt){const It=Y;for(let Zt=0;Zt<R.textures.length;Zt++){const $t=E.get(R.textures[Zt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Zt,$t.__webglTexture,ft,It)}}else if(R!==null&&ft!==0){const It=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,It.__webglTexture,ft)}st=-1},this.readRenderTargetPixels=function(R,Y,ft,ot,et,Pt,Vt,It=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Zt=Zt[Vt]),Zt){jt.bindFramebuffer(k.FRAMEBUFFER,Zt);try{const $t=R.textures[It],se=$t.format,ue=$t.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It),!Le.textureFormatReadable(se)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ue)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&ft>=0&&ft<=R.height-et&&k.readPixels(Y,ft,ot,et,_t.convert(se),_t.convert(ue),Pt)}finally{const $t=tt!==null?E.get(tt).__webglFramebuffer:null;jt.bindFramebuffer(k.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ft,ot,et,Pt,Vt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Zt=Zt[Vt]),Zt)if(Y>=0&&Y<=R.width-ot&&ft>=0&&ft<=R.height-et){jt.bindFramebuffer(k.FRAMEBUFFER,Zt);const $t=R.textures[It],se=$t.format,ue=$t.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It),!Le.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Wt),k.bufferData(k.PIXEL_PACK_BUFFER,Pt.byteLength,k.STREAM_READ),k.readPixels(Y,ft,ot,et,_t.convert(se),_t.convert(ue),0);const pe=tt!==null?E.get(tt).__webglFramebuffer:null;jt.bindFramebuffer(k.FRAMEBUFFER,pe);const en=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await UM(k,en,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Wt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Pt),k.deleteBuffer(Wt),k.deleteSync(en),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ft=0){const ot=Math.pow(2,-ft),et=Math.floor(R.image.width*ot),Pt=Math.floor(R.image.height*ot),Vt=Y!==null?Y.x:0,It=Y!==null?Y.y:0;q.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,ft,0,0,Vt,It,et,Pt),jt.unbindTexture()};const Ha=k.createFramebuffer(),ws=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,ft=null,ot=null,et=0,Pt=0){let Vt,It,Zt,$t,se,ue,Wt,pe,en;const nn=R.isCompressedTexture?R.mipmaps[Pt]:R.image;if(ft!==null)Vt=ft.max.x-ft.min.x,It=ft.max.y-ft.min.y,Zt=ft.isBox3?ft.max.z-ft.min.z:1,$t=ft.min.x,se=ft.min.y,ue=ft.isBox3?ft.min.z:0;else{const _n=Math.pow(2,-et);Vt=Math.floor(nn.width*_n),It=Math.floor(nn.height*_n),R.isDataArrayTexture?Zt=nn.depth:R.isData3DTexture?Zt=Math.floor(nn.depth*_n):Zt=1,$t=0,se=0,ue=0}ot!==null?(Wt=ot.x,pe=ot.y,en=ot.z):(Wt=0,pe=0,en=0);const Oe=_t.convert(Y.format),Tn=_t.convert(Y.type);let qt;Y.isData3DTexture?(q.setTexture3D(Y,0),qt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),qt=k.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),qt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Yn=k.getParameter(k.UNPACK_ROW_LENGTH),le=k.getParameter(k.UNPACK_IMAGE_HEIGHT),jn=k.getParameter(k.UNPACK_SKIP_PIXELS),ci=k.getParameter(k.UNPACK_SKIP_ROWS),zi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,nn.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,nn.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$t),k.pixelStorei(k.UNPACK_SKIP_ROWS,se),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ue);const ui=R.isDataArrayTexture||R.isData3DTexture,Fe=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const _n=E.get(R),qn=E.get(Y),vn=E.get(_n.__renderTarget),Ii=E.get(qn.__renderTarget);jt.bindFramebuffer(k.READ_FRAMEBUFFER,vn.__webglFramebuffer),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let ua=0;ua<Zt;ua++)ui&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(R).__webglTexture,et,ue+ua),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Pt,en+ua)),k.blitFramebuffer($t,se,Vt,It,Wt,pe,Vt,It,k.DEPTH_BUFFER_BIT,k.NEAREST);jt.bindFramebuffer(k.READ_FRAMEBUFFER,null),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(et!==0||R.isRenderTargetTexture||E.has(R)){const _n=E.get(R),qn=E.get(Y);jt.bindFramebuffer(k.READ_FRAMEBUFFER,Ha),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ws);for(let vn=0;vn<Zt;vn++)ui?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,_n.__webglTexture,et,ue+vn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_n.__webglTexture,et),Fe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qn.__webglTexture,Pt,en+vn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qn.__webglTexture,Pt),et!==0?k.blitFramebuffer($t,se,Vt,It,Wt,pe,Vt,It,k.COLOR_BUFFER_BIT,k.NEAREST):Fe?k.copyTexSubImage3D(qt,Pt,Wt,pe,en+vn,$t,se,Vt,It):k.copyTexSubImage2D(qt,Pt,Wt,pe,$t,se,Vt,It);jt.bindFramebuffer(k.READ_FRAMEBUFFER,null),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Fe?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(qt,Pt,Wt,pe,en,Vt,It,Zt,Oe,Tn,nn.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(qt,Pt,Wt,pe,en,Vt,It,Zt,Oe,nn.data):k.texSubImage3D(qt,Pt,Wt,pe,en,Vt,It,Zt,Oe,Tn,nn):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Pt,Wt,pe,Vt,It,Oe,Tn,nn.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Pt,Wt,pe,nn.width,nn.height,Oe,nn.data):k.texSubImage2D(k.TEXTURE_2D,Pt,Wt,pe,Vt,It,Oe,Tn,nn);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,le),k.pixelStorei(k.UNPACK_SKIP_PIXELS,jn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ci),k.pixelStorei(k.UNPACK_SKIP_IMAGES,zi),Pt===0&&Y.generateMipmaps&&k.generateMipmap(qt),jt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){G=0,K=0,tt=null,jt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const Gv={type:"change"},Hp={type:"start"},Nx={type:"end"},hu=new Ru,Vv=new gs,x2=Math.cos(70*OM.DEG2RAD),Rn=new Z,oi=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Md=1e-6;class y2 extends bE{constructor(t,i=null){super(t,i),this.state=je.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.touches={ONE:no.ROTATE,TWO:no.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Es,this._lastTargetPosition=new Z,this._quat=new Es().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mv,this._sphericalDelta=new mv,this._scale=1,this._panOffset=new Z,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new Z,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=M2.bind(this),this._onPointerDown=S2.bind(this),this._onPointerUp=E2.bind(this),this._onContextMenu=D2.bind(this),this._onMouseWheel=A2.bind(this),this._onKeyDown=R2.bind(this),this._onTouchStart=w2.bind(this),this._onTouchMove=C2.bind(this),this._onMouseDown=b2.bind(this),this._onMouseMove=T2.bind(this),this._interceptControlDown=U2.bind(this),this._interceptControlUp=N2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gv),this.update(),this.state=je.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Rn.copy(i).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=oi:s>Math.PI&&(s-=oi),l<-Math.PI?l+=oi:l>Math.PI&&(l-=oi),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=Rn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(hu.origin.copy(this.object.position),hu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hu.direction))<x2?this.object.lookAt(this.target):(Vv.setFromNormalAndCoplanarPoint(this.object.up,this.target),hu.intersectPlane(Vv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Md||this._lastTargetPosition.distanceToSquared(this.target)>Md?(this.dispatchEvent(Gv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?oi/60*this.autoRotateSpeed*t:oi/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Rn.setFromMatrixColumn(i,0),Rn.multiplyScalar(-t),this._panOffset.add(Rn)}_panUp(t,i){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(i,1):(Rn.setFromMatrixColumn(i,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(t),this._panOffset.add(Rn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Rn.copy(l).sub(this.target);let c=Rn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function S2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function M2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function E2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nx),this.state=je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function b2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=je.DOLLY;break;case er.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}break;case er.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Hp)}function T2(r){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function A2(r){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(r.preventDefault(),this.dispatchEvent(Hp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Nx))}function R2(r){this.enabled!==!1&&this._handleKeyDown(r)}function w2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case no.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=je.TOUCH_ROTATE;break;case no.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case no.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=je.TOUCH_DOLLY_PAN;break;case no.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Hp)}function C2(r){switch(this._trackPointer(r),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=je.NONE}}function D2(r){this.enabled!==!1&&r.preventDefault()}function U2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function N2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),kv=r=>{const t=O2(r);return t.charAt(0).toUpperCase()+t.slice(1)},Lx=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),P2=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var z2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=ye.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>ye.createElement("svg",{ref:m,...z2,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Lx("lucide",l),...!c&&!P2(p)&&{"aria-hidden":"true"},...p},[...h.map(([d,_])=>ye.createElement(d,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=(r,t)=>{const i=ye.forwardRef(({className:s,...l},c)=>ye.createElement(I2,{ref:c,iconNode:t,className:Lx(`lucide-${L2(kv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=kv(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Xv=Mi("box",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],H2=Mi("download",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],V2=Mi("eye",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Ed=Mi("grid-3x3",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],W2=Mi("info",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Wv=Mi("layers",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],q2=Mi("maximize",j2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],K2=Mi("paintbrush",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],J2=Mi("redo",Q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],t3=Mi("settings",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],n3=Mi("trash-2",e3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],a3=Mi("undo",i3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Yv=Mi("upload",s3);class jv{constructor(t){this.offset=0,this.view=new DataView(t)}readTag(){const t=String.fromCharCode(this.view.getUint8(this.offset),this.view.getUint8(this.offset+1),this.view.getUint8(this.offset+2),this.view.getUint8(this.offset+3));return this.offset+=4,t}readUint32(){const t=this.view.getUint32(this.offset,!0);return this.offset+=4,t}readFloat32(){const t=this.view.getFloat32(this.offset,!0);return this.offset+=4,t}parse(){const t=this.readTag();if(console.log("MDX Magic:",t),t!=="MDLX")throw new Error("Not a valid MDX file");const i={geosets:[]};for(;this.offset<this.view.byteLength;){const s=this.readTag(),l=this.readUint32(),c=this.offset+l;console.log(`Found chunk: ${s}, size: ${l}`),s==="GEOS"?this.parseGeosets(c,i):this.offset=c}return console.log("Parsed model geosets:",i.geosets.length),i}parseGeosets(t,i){for(;this.offset<t;){const s=this.readUint32(),l=this.offset-4+s;console.log(`Parsing Geoset, size: ${s}, end: ${l}`);let c=new Float32Array(0),h=new Uint16Array(0);for(;this.offset<l;){const p=this.readTag();if(p==="VRTX"){const m=this.readUint32();c=new Float32Array(m*3);for(let d=0;d<m*3;d++)c[d]=this.readFloat32()}else if(p==="PVTX"){const m=this.readUint32();h=new Uint16Array(m);for(let d=0;d<m;d++)h[d]=this.view.getUint16(this.offset,!0),this.offset+=2}else if(p==="NRMS"){const m=this.readUint32();this.offset+=m*3*4}else if(p==="PTYP"){const m=this.readUint32();this.offset+=m*4}else if(p==="PCNT"){const m=this.readUint32();this.offset+=m*4}else if(p==="GNDX"){const m=this.readUint32();this.offset+=m}else if(p==="MTLS")this.offset+=4;else if(p==="SEGS")this.offset+=4;else if(p==="EXTS")this.offset+=28;else if(p==="UVAS"){const m=this.readUint32();for(let d=0;d<m;d++){this.readTag();const _=this.readUint32();this.offset+=_*2*4}}else if(p==="VGRPS"){const m=this.readUint32();this.offset+=m*4}else if(p==="GSTR"){const m=this.readUint32();this.offset+=m*4}else if(p==="GMSH"){const m=this.readUint32();this.offset+=m*4}else{console.warn(`Unknown GEOS sub-tag: ${p} at offset ${this.offset-4}. Attempting to skip to next geoset.`);break}}c.length>0&&h.length>0&&i.geosets.push({vertices:c,faces:h}),this.offset=l}}}function r3(r,t,i){const s=new Uint8Array(18);s[2]=2,s[12]=r&255,s[13]=r>>8&255,s[14]=t&255,s[15]=t>>8&255,s[16]=24,s[17]=0;const l=new Uint8Array(r*t*3);for(let m=0;m<t;m++){const d=m,_=t-1-m;for(let x=0;x<r;x++){const g=(d*r+x)*4,M=(_*r+x)*3,b=i[g],w=i[g+1],S=i[g+2];l[M]=S,l[M+1]=w,l[M+2]=b}}const c=new Uint8Array(26),h="TRUEVISION-XFILE.";for(let m=0;m<h.length;m++)c[8+m]=h.charCodeAt(m);const p=new Uint8Array(s.length+l.length+c.length);return p.set(s,0),p.set(l,s.length),p.set(c,s.length+l.length),new Blob([p],{type:"image/x-tga"})}const de=32,yl=16,o3=yl*yl,Gp=0,Ox=16777215,l3=[{label:"White",value:16777215,description:"No walk, no fly, no build"},{label:"Black",value:0,description:"Walk, fly, build allowed"},{label:"Red",value:16711680,description:"No walk"},{label:"Green",value:65280,description:"No fly"},{label:"Blue",value:255,description:"No build"},{label:"Yellow",value:16776960,description:"No walk, no fly"},{label:"Magenta",value:16711935,description:"No walk, no build"},{label:"Cyan",value:65535,description:"No fly, no build"}];function c3(r,t){const[i,s,l]=t,c=(x,g,M)=>(x.x-M.x)*(g.y-M.y)-(g.x-M.x)*(x.y-M.y),h=c(r,i,s),p=c(r,s,l),m=c(r,l,i),d=h<0||p<0||m<0,_=h>0||p>0||m>0;return!(d&&_)}function Px(r,t){const i=[];return r.geosets.forEach(s=>{const l=s.vertices,c=s.faces;for(let h=0;h<c.length;h+=3){const p=c[h]*3,m=c[h+1]*3,d=c[h+2]*3,_={x:l[p],y:l[p+1],z:l[p+2]},x={x:l[m],y:l[m+1],z:l[m+2]},g={x:l[d],y:l[d+1],z:l[d+2]};if(_.z>=t&&x.z>=t&&g.z>=t)continue;const M=[{x:_.x,y:_.y},{x:x.x,y:x.y},{x:g.x,y:g.y}];i.push({points:M,minX:Math.min(M[0].x,M[1].x,M[2].x),maxX:Math.max(M[0].x,M[1].x,M[2].x),minY:Math.min(M[0].y,M[1].y,M[2].y),maxY:Math.max(M[0].y,M[1].y,M[2].y)})}}),i}function zx(r,t,i,s,l){const c=Px(r,s),h=t*de/2,p=i*de/2,m=de/yl,d=o3*l;return Array.from({length:i},(_,x)=>Array.from({length:t},(g,M)=>{const b=-h+M*de,w=-p+x*de;let S=0;for(let y=0;y<yl;y++)for(let C=0;C<yl;C++){const N={x:b+(C+.5)*m,y:w+(y+.5)*m};c.some(F=>N.x<F.minX||N.x>F.maxX||N.y<F.minY||N.y>F.maxY?!1:c3(N,F.points))&&(S+=1)}return S>=d}))}function io(r){const t=Math.max(2,r);return t%2===0?t:t+1}function bd(r,t){return Array.from({length:t},()=>Array(r).fill(Gp))}function u3(r,t){return r.map(i=>i.map(s=>s?t:Gp))}function Td(r,t,i,s,l){return u3(zx(r,t,i,s,l),Ox)}function qv(r){return`#${r.toString(16).padStart(6,"0")}`}function f3(r){const t=document.createElement("canvas");t.width=128,t.height=64;const i=t.getContext("2d");if(!i){const h=new vp(new _p({color:16777215}));return h.scale.set(8,4,1),h}i.clearRect(0,0,t.width,t.height),i.fillStyle="rgba(0, 0, 0, 0.65)",i.fillRect(0,8,t.width,48),i.strokeStyle="rgba(255,255,255,0.2)",i.strokeRect(.5,8.5,t.width-1,47),i.fillStyle="#ffffff",i.font="bold 24px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(r,t.width/2,t.height/2);const s=new rE(t);s.needsUpdate=!0;const l=new _p({map:s,transparent:!0,depthTest:!1,depthWrite:!1}),c=new vp(l);return c.scale.set(18,9,1),c}function h3(r){const t=[];return(r>>16&255)===255&&t.push("Walk"),(r>>8&255)===255&&t.push("Fly"),(r&255)===255&&t.push("Build"),t.length===0?"None":t.join(" / ")}function Zv(r,t,i){let s=1/0,l=-1/0,c=1/0,h=-1/0;if(r.geosets.forEach(U=>{const F=U.vertices;for(let I=0;I<F.length;I+=3){if(F[I+2]>=t)continue;const T=F[I],D=F[I+1];s=Math.min(s,T),l=Math.max(l,T),c=Math.min(c,D),h=Math.max(h,D)}}),!Number.isFinite(s)||!Number.isFinite(c))return{width:2,height:2};const p=io(Math.ceil(Math.max(Math.abs(s),Math.abs(l))*2/de)),m=io(Math.ceil(Math.max(Math.abs(c),Math.abs(h))*2/de)),d=zx(r,p,m,t,i);let _=1/0,x=-1/0,g=1/0,M=-1/0;for(let U=0;U<m;U++)for(let F=0;F<p;F++)d[U][F]&&(_=Math.min(_,F),x=Math.max(x,F),g=Math.min(g,U),M=Math.max(M,U));if(!Number.isFinite(_)||!Number.isFinite(g))return{width:2,height:2};const b=p/2,w=m/2,S=b-_,y=x-b+1,C=w-g,N=M-w+1;return{width:io(Math.max(S,y)*2),height:io(Math.max(C,N)*2)}}function Kv(r){if(r.length===0||r[0].length===0)return[];const t=r.length,i=r[0].length,s=Array.from({length:i},()=>Array(t));for(let l=0;l<t;l++)for(let c=0;c<i;c++)s[c][l]=r[l][c];return s}function d3(r,t){const i=[],s=(l,c)=>{const h=c.z-l.z;if(Math.abs(h)<1e-6)return null;const p=(t-l.z)/h;return p<0||p>1?null:{x:l.x+(c.x-l.x)*p,y:l.y+(c.y-l.y)*p,z:t}};return r.geosets.forEach(l=>{const c=l.vertices,h=l.faces;for(let p=0;p<h.length;p+=3){const m=[h[p],h[p+1],h[p+2]].map(x=>{const g=x*3;return{x:c[g],y:c[g+1],z:c[g+2]}}),d=[];[[0,1],[1,2],[2,0]].forEach(([x,g])=>{const M=s(m[x],m[g]);if(!M)return;d.some(w=>Math.abs(w.x-M.x)<1e-4&&Math.abs(w.y-M.y)<1e-4&&Math.abs(w.z-M.z)<1e-4)||d.push(M)}),d.length===2&&d.forEach(x=>{i.push(x.y,x.z,x.x)})}}),new Float32Array(i)}function p3(r,t){const i=[];Px(r,t).forEach(c=>{c.points.forEach(h=>{i.push(h.y,0,h.x)})});const l=new mn;return l.setAttribute("position",new wn(new Float32Array(i),3)),l}function Qv(r,t){const i=Math.max(1,r)*de,s=Math.max(1,t)*de,l=i/2,c=s/2,h=[];for(let m=0;m<=r;m++){const d=-l+m*de;h.push(d,0,-c,d,0,c)}for(let m=0;m<=t;m++){const d=-c+m*de;h.push(-l,0,d,l,0,d)}const p=new mn;return p.setAttribute("position",new wn(new Float32Array(h),3)),p}function m3(r){let t=-1/0;return r.geosets.forEach(i=>{const s=i.vertices;for(let l=2;l<s.length;l+=3)t=Math.max(t,s[l])}),Number.isFinite(t)?t:0}function Jv(r){let t=1/0,i=-1/0;return r.geosets.forEach(s=>{const l=s.vertices;for(let c=2;c<l.length;c+=3)t=Math.min(t,l[c]),i=Math.max(i,l[c])}),!Number.isFinite(t)||!Number.isFinite(i)?{minZ:0,maxZ:0}:{minZ:t,maxZ:i}}function g3(){var Nt,wt,Ft;const[r,t]=ye.useState(null),[i,s]=ye.useState(""),[l,c]=ye.useState(100),[h,p]=ye.useState(25),[m,d]=ye.useState(4),[_,x]=ye.useState(4),[g,M]=ye.useState(!1),[b,w]=ye.useState(!1),[S,y]=ye.useState(()=>bd(4,4)),[C,N]=ye.useState(!0),[U,F]=ye.useState(.1),[I,B]=ye.useState(Ox),[T,D]=ye.useState([]),[ut,G]=ye.useState(-1),K=ye.useMemo(()=>Kv(S),[S]),tt=ye.useMemo(()=>r?Jv(r):{minZ:0,maxZ:0},[r]),st=ye.useMemo(()=>{const{minZ:W,maxZ:rt}=tt,Ct=rt+10;return Ct<=W?Ct:W+(Ct-W)*l/100},[l,tt]),J=h/100,O=_,H=m,dt=((Nt=S[0])==null?void 0:Nt.length)??0,xt=S.length,Ut=((wt=K[0])==null?void 0:wt.length)??0,P=K.length,j=((Ft=K[0])==null?void 0:Ft.length)??0,St=K.length,Rt=ye.useRef(null),Gt=ye.useRef(null),at=ye.useRef(null),Mt=ye.useRef(!1),Lt=ye.useRef(0),kt=ye.useRef(0),Qt=ye.useRef(!1),zt=ye.useRef(null);ye.useEffect(()=>{if(!Rt.current)return;const W=new qM;W.background=new be(1710618);const rt=new Pi(75,Rt.current.clientWidth/Rt.current.clientHeight,.1,1e4);rt.up.set(0,0,-1),rt.position.set(0,400,120);const Ct=new v2({antialias:!0});Ct.setSize(Rt.current.clientWidth,Rt.current.clientHeight),Rt.current.appendChild(Ct.domElement);const z=new y2(rt,Ct.domElement);z.enableDamping=!0,z.mouseButtons={LEFT:-1,MIDDLE:-1,RIGHT:er.ROTATE};const _t=new yE(16777215,.6);W.add(_t);const gt=new xE(16777215,.8);gt.position.set(1,1,1),W.add(gt);const bt=new La;W.add(bt);const ct=new La;W.add(ct);const $=new rn(new xs(de,de),new ta({color:65280,transparent:!0,opacity:.4,side:Jn}));$.rotation.x=-Math.PI/2,$.position.y=.1,$.visible=!1,W.add($);const Dt=new EE,Jt=new ae,ce=new gv(1024,32,4473924,2236962);W.add(ce);const Ht=new xs(1,1),Ae=new ta({color:65535,transparent:!0,opacity:0,side:Jn,wireframe:!1}),Be=new rn(Ht,Ae);Be.rotation.x=-Math.PI/2,Be.position.y=.01,W.add(Be);const sn=new $i(new ov(Ht),new _s({color:65535,linewidth:2}));sn.rotation.x=-Math.PI/2,sn.position.y=.06,W.add(sn);const gn=new La,$n=new ta({color:16726832}),On=new rn(new Tl(4,4,80,12),$n);On.rotation.x=Math.PI/2;const Wn=new rn(new Ip(10,28,16),$n);Wn.rotation.x=Math.PI/2,Wn.position.z=54,gn.add(On),gn.add(Wn),gn.position.set(0,0,300),gn.renderOrder=7,W.add(gn);const ti=new $i(new mn,new _s({color:16723245}));ti.renderOrder=4,W.add(ti);const Yi=new La;Yi.renderOrder=4,W.add(Yi);const bn=new La,on=new $i(Qv(1,1),new _s({color:16723245})),ln=new rn(new Tl(1.5,1.5,22,12),new ta({color:16723245}));ln.position.y=12;const Ei=new rn(new Bp(6,16,16),new ta({color:16723245}));Ei.position.y=24;const bi=new rn(new xs(de*2,de*2),new ta({transparent:!0,opacity:0,side:Jn,depthWrite:!1}));bi.rotation.x=-Math.PI/2,bi.position.y=24,bn.add(on),bn.add(ln),bn.add(Ei),bn.add(bi),bn.renderOrder=5,W.add(bn),zt.current={scene:W,camera:rt,renderer:Ct,controls:z,modelGroup:bt,gridHelper:ce,cutoffHandle:bn,cutoffLines:ti,cutoffProjectionGroup:Yi,boundaryMesh:Be,boundaryEdges:sn,pathingGroup:ct,pathingMesh:null,brushCursor:$,raycaster:Dt,mouse:Jt};const Ts=()=>{requestAnimationFrame(Ts),z.update(),Ct.render(W,rt)};Ts();const As=()=>{if(!Rt.current||!zt.current)return;const{camera:Rs,renderer:ca}=zt.current;Rs.aspect=Rt.current.clientWidth/Rt.current.clientHeight,Rs.updateProjectionMatrix(),ca.setSize(Rt.current.clientWidth,Rt.current.clientHeight)};return window.addEventListener("resize",As),()=>{window.removeEventListener("resize",As),Ct.dispose()}},[]),ye.useEffect(()=>{var gt;if(!zt.current)return;const{cutoffLines:W,cutoffHandle:rt,cutoffProjectionGroup:Ct}=zt.current,z=W.geometry;rt.position.set(0,st,0);const _t=rt.children[0];if(_t){const bt=Qv(Ut,P);_t.geometry.dispose(),_t.geometry=bt}if(r){const bt=d3(r,st);z.setAttribute("position",new wn(bt,3)),z.computeBoundingSphere(),Ct.children.forEach($=>{($ instanceof rn||$ instanceof $i)&&($.geometry.dispose(),$.material.dispose())}),Ct.clear();const ct=p3(r,st);if((((gt=ct.attributes.position)==null?void 0:gt.count)??0)>0){const $=new rn(ct,new ta({color:16753226,transparent:!0,opacity:.18,side:Jn,depthTest:!1,depthWrite:!1}));$.position.y=st,$.renderOrder=4,Ct.add($);const Dt=new $i(new ov(ct),new _s({color:16761200,transparent:!0,opacity:.75,depthTest:!1}));Dt.position.y=st+.02,Dt.renderOrder=5,Ct.add(Dt)}else ct.dispose()}else z.setAttribute("position",new wn(new Float32Array(0),3)),Ct.children.forEach(bt=>{(bt instanceof rn||bt instanceof $i)&&(bt.geometry.dispose(),bt.material.dispose())}),Ct.clear()},[st,r,Ut,P]),ye.useEffect(()=>{if(zt.current){const{scene:W,gridHelper:rt,boundaryMesh:Ct,boundaryEdges:z}=zt.current;W.remove(rt);const _t=Math.max(m,_)*de,gt=new gv(_t*2,Math.max(m,_)*2,4473924,2236962);zt.current.gridHelper=gt,W.add(gt);const bt=O*de,ct=H*de;Ct.scale.set(bt,ct,1),z.scale.set(bt,ct,1)}},[O,H,m,_]),ye.useEffect(()=>{r&&mt(r)},[C,U]),ye.useEffect(()=>{if(!zt.current)return;const{pathingGroup:W}=zt.current;W.clear();const rt=K.flatMap((Ht,Ae)=>Ht.map((Be,sn)=>({r:Ae,c:sn,color:Be})));if(rt.length===0){zt.current.pathingMesh=null;return}const z=new xs(de-2,de-2),_t=new Cn,gt=Ut*de/2,bt=P*de/2,ct=new Map,$=[];rt.forEach(({r:Ht,c:Ae,color:Be})=>{const sn=ct.get(Be)??[];if(sn.push({r:Ht,c:Ae}),ct.set(Be,sn),Be!==Gp){const gn=-gt+Ae*de,$n=gn+de,On=-bt+Ht*de,Wn=On+de;$.push(gn,.08,On,$n,.08,On,$n,.08,On,$n,.08,Wn,$n,.08,Wn,gn,.08,Wn,gn,.08,Wn,gn,.08,On)}});let Dt=null;ct.forEach((Ht,Ae)=>{const Be=new ta({color:Ae,side:Jn,transparent:!1,opacity:1,depthWrite:!1,depthTest:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),sn=new nv(z,Be,Ht.length);sn.renderOrder=2,Ht.forEach(({r:gn,c:$n},On)=>{_t.rotation.x=-Math.PI/2,_t.position.set(-gt+$n*de+de/2,.02,-bt+gn*de+de/2),_t.updateMatrix(),sn.setMatrixAt(On,_t.matrix)}),sn.instanceMatrix.needsUpdate=!0,W.add(sn),Dt||(Dt=sn)});const Jt=new mn;Jt.setAttribute("position",new wn(new Float32Array($),3));const ce=new $i(Jt,new _s({color:16767053,transparent:!0,opacity:.9,depthTest:!1}));return ce.renderOrder=8,W.add(ce),rt.forEach(({r:Ht,c:Ae})=>{const Be=f3(`${Ht},${Ae}`);Be.position.set(-gt+Ae*de+de/2,.14,-bt+Ht*de+de/2),Be.renderOrder=9,W.add(Be)}),zt.current.pathingMesh=Dt,()=>{z.dispose(),W.children.forEach(Ht=>{var Ae;Ht instanceof nv&&Ht.material.dispose(),Ht instanceof $i&&(Ht.geometry.dispose(),Ht.material.dispose()),Ht instanceof vp&&((Ae=Ht.material.map)==null||Ae.dispose(),Ht.material.dispose())})}},[K,Ut,P]),ye.useEffect(()=>{dt===m&&xt===_||(y(bd(m,_)),D([]),G(-1),zt.current&&(zt.current.pathingGroup.clear(),zt.current.brushCursor.visible=!1))},[m,_,dt,xt]),ye.useEffect(()=>{if(!r)return;const W=Td(r,m,_,st,J);y(W),D([]),G(-1)},[r,m,_,st,J]);const Je=(W,rt)=>{W<0||W>=_||rt<0||rt>=m||y(Ct=>{if(Ct[W][rt]===I)return Ct;const z=[...Ct.map(_t=>[..._t])];return z[W][rt]=I,z})},xe=W=>"touches"in W?{clientX:W.touches[0].clientX,clientY:W.touches[0].clientY}:{clientX:W.clientX,clientY:W.clientY},_e=W=>{if(!Rt.current||!zt.current)return null;const{clientX:rt,clientY:Ct}=xe(W),z=Rt.current.getBoundingClientRect();return zt.current.mouse.x=(rt-z.left)/z.width*2-1,zt.current.mouse.y=-((Ct-z.top)/z.height)*2+1,{clientX:rt,clientY:Ct}},Ue=W=>{const rt=_e(W);if(!rt||!zt.current)return!1;const{camera:Ct,raycaster:z,mouse:_t,cutoffHandle:gt,controls:bt}=zt.current;return z.setFromCamera(_t,Ct),z.intersectObject(gt,!0).length===0?!1:(Mt.current=!0,bt.enabled=!1,Lt.current=rt.clientY,kt.current=st,Qt.current=!1,!0)},oe=W=>{if(!Mt.current||!r)return!1;const Ct=xe(W).clientY-Lt.current;Math.abs(Ct)>2&&(Qt.current=!0);const{minZ:z,maxZ:_t}=tt,gt=_t+10,bt=Math.max(gt-z,1),ct=Math.min(gt,Math.max(z,kt.current-Ct*(bt/200)));return c((ct-z)/bt*100),!0},Ke=()=>{Mt.current&&(Mt.current=!1,zt.current&&(zt.current.controls.enabled=!0),setTimeout(()=>{Qt.current=!1},0))},k=W=>{if(!zt.current||!Rt.current)return;const{camera:rt,raycaster:Ct,mouse:z,boundaryMesh:_t,brushCursor:gt}=zt.current;if(!_e(W))return;Ct.setFromCamera(z,rt);const bt=Ct.intersectObject(_t);if(bt.length>0){const ct=bt[0].point,$=O*de/2,Dt=H*de/2,Jt=Math.floor((ct.x+$)/de),ce=Math.floor((ct.z+Dt)/de),Ht=Jt,Ae=ce;return gt.visible=!0,gt.position.set(-$+Jt*de+de/2,.07,-Dt+ce*de+de/2),gt.material.color.set(I),{rawRow:Ht,rawCol:Ae}}else gt.visible=!1},Qe=W=>{oe(W)||k(W)},Te=W=>{Ue(W)},Le=W=>{if(Mt.current||Qt.current)return;const rt=k(W);rt&&(Je(rt.rawRow,rt.rawCol),jt(S.map((Ct,z)=>Ct.map((_t,gt)=>z===rt.rawRow&&gt===rt.rawCol?I:_t))))},jt=W=>{const rt=T.slice(0,ut+1);rt.push(W.map(Ct=>[...Ct])),rt.length>50&&rt.shift(),D(rt),G(rt.length-1)},L=()=>{if(ut>0){const W=T[ut-1];y(W.map(rt=>[...rt])),G(ut-1)}},E=()=>{if(ut<T.length-1){const W=T[ut+1];y(W.map(rt=>[...rt])),G(ut+1)}},q=()=>{if(!r)return;const{width:W,height:rt}=Zv(r,st,J);d(W),x(rt)};ye.useEffect(()=>{const W=rt=>{(rt.ctrlKey||rt.metaKey)&&rt.key==="z"&&(rt.shiftKey?E():L()),(rt.ctrlKey||rt.metaKey)&&rt.key==="y"&&E()};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[ut,T]);const yt=async W=>{var z;const rt=(z=W.target.files)==null?void 0:z[0];if(!rt)return;s(rt.name);const Ct=await rt.arrayBuffer();try{const gt=new jv(Ct).parse(),ct=m3(gt)+10,{width:$,height:Dt}=Zv(gt,ct,J),Jt=Td(gt,$,Dt,ct,J);t(gt),c(100),d($),x(Dt),y(Jt),D([]),G(-1),mt(gt)}catch(_t){console.error(_t),alert("Failed to parse MDX file. Make sure it is a valid Warcraft III MDX model.")}},At=async W=>{const rt=W.target.files;if(!rt||rt.length===0)return;const Ct=[];for(let z=0;z<rt.length;z++){const _t=rt.item(z);_t&&Ct.push(_t)}w(!0);try{for(const z of Ct)try{const _t=await z.arrayBuffer(),bt=new jv(_t).parse(),{minZ:ct,maxZ:$}=Jv(bt),Dt=$+10,Jt=Dt<=ct?Dt:ct+(Dt-ct)*l/100,ce=Td(bt,m,_,Jt,J),Ht=Xt(ce);if(!Ht)continue;Ot(Ht,`${z.name.replace(/\.mdx$/i,"")}_pathing.tga`),await new Promise(Ae=>window.setTimeout(Ae,150))}catch(_t){console.error(`Failed to process ${z.name}`,_t)}}finally{w(!1),W.target.value=""}},mt=W=>{if(console.log("Rendering model with",W.geosets.length,"geosets"),!zt.current)return;const{modelGroup:rt,controls:Ct,camera:z,scene:_t}=zt.current;_t.children.forEach(bt=>{bt instanceof rn&&bt.geometry instanceof ho&&bt.geometry.parameters.width===10&&_t.remove(bt)}),rt.clear();const gt=new bs;if(W.geosets.forEach(bt=>{const ct=new mn,$=new Float32Array(bt.vertices);ct.setAttribute("position",new wn($,3)),ct.setIndex(new wn(bt.faces,1));const Dt=ct.attributes.position.array;for(let Ht=0;Ht<Dt.length;Ht+=3){const Ae=Dt[Ht],Be=Dt[Ht+1],sn=Dt[Ht+2];Dt[Ht]=Be,Dt[Ht+1]=sn,Dt[Ht+2]=Ae}ct.computeVertexNormals();const Jt=new pE({color:16777215,side:Jn,flatShading:!1,shininess:30,wireframe:!1,transparent:U<1,opacity:U}),ce=new rn(ct,Jt);if(ce.renderOrder=3,rt.add(ce),C){const Ht=new $i(new lE(ct),new _s({color:16777215,transparent:!0,opacity:.9,depthTest:!1}));Ht.renderOrder=6,rt.add(Ht)}ct.computeBoundingBox(),ct.boundingBox&&gt.expandByObject(ce)}),!gt.isEmpty()){const bt=new Z;gt.getCenter(bt);const ct=new Z;gt.getSize(ct);const $=Math.max(ct.x,ct.y,ct.z),Dt=Math.max($*2,256);Ct.target.set(0,0,0),z.position.set(0,Dt,Math.max(Dt*.3,120)),Ct.update()}},Xt=W=>{var gt;const rt=Kv(W),Ct=((gt=rt[0])==null?void 0:gt.length)??0,z=rt.length;if(Ct===0||z===0)return null;const _t=new Uint8Array(Ct*z*4);for(let bt=0;bt<z;bt++)for(let ct=0;ct<Ct;ct++){const $=(bt*Ct+ct)*4,Dt=rt[bt][ct];_t[$]=Dt>>16&255,_t[$+1]=Dt>>8&255,_t[$+2]=Dt&255,_t[$+3]=255}return r3(Ct,z,_t)},Ot=(W,rt)=>{const Ct=URL.createObjectURL(W),z=document.createElement("a");z.href=Ct,z.download=rt,z.click(),setTimeout(()=>URL.revokeObjectURL(Ct),0)},te=()=>{const W=Xt(S);W&&Ot(W,`${i.replace(".mdx","")}_pathing.tga`)},ne=(W,rt)=>{Je(W,rt),jt(S.map((Ct,z)=>Ct.map((_t,gt)=>z===W&&gt===rt?I:_t)))};return pt.jsxs("div",{className:"h-screen overflow-hidden bg-[#141414] text-white font-sans selection:bg-emerald-500/30 flex flex-col",children:[pt.jsx("header",{className:"shrink-0 border-b border-white/10 p-4 flex items-center justify-between bg-[#1a1a1a]",children:pt.jsxs("div",{className:"flex items-center gap-3",children:[pt.jsx("div",{className:"w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/20",children:pt.jsx(Xv,{className:"text-white",size:24})}),pt.jsxs("div",{children:[pt.jsx("h1",{className:"text-lg font-bold tracking-tight",children:"WC3 MDX Pathing Generator"}),pt.jsx("p",{className:"text-xs text-white/50 uppercase tracking-widest font-medium",children:"Terrain Decorator Tool"})]})]})}),pt.jsxs("main",{className:"grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0 overflow-hidden",children:[pt.jsxs("aside",{className:"lg:col-span-3 border-r border-white/10 p-6 space-y-8 overflow-hidden bg-[#1a1a1a]",children:[pt.jsxs("section",{className:"space-y-4",children:[pt.jsxs("div",{className:"flex items-center gap-2 text-emerald-400",children:[pt.jsx(t3,{size:18}),pt.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest",children:"Configuration"})]}),pt.jsxs("div",{className:"space-y-6",children:[pt.jsxs("div",{className:"space-y-2",children:[pt.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50 uppercase tracking-wider",children:[pt.jsx("label",{children:"Height Cutoff (Z)"}),pt.jsxs("span",{children:[Math.round(l),"%"]})]}),pt.jsx("input",{type:"range",min:"0",max:"100",value:l,onChange:W=>c(parseInt(W.target.value)),className:"w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"}),pt.jsx("p",{className:"text-[10px] text-white/30 italic",children:"0% = model lowest Z, 100% = model highest Z. Geometry above the current height is ignored."})]}),pt.jsxs("div",{className:"space-y-2",children:[pt.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50 uppercase tracking-wider",children:[pt.jsx("label",{children:"Occupancy Threshold"}),pt.jsxs("span",{children:[Math.round(h),"%"]})]}),pt.jsx("input",{type:"range",min:"0",max:"100",value:h,onChange:W=>p(parseInt(W.target.value)),className:"w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"}),pt.jsx("p",{className:"text-[10px] text-white/30 italic",children:"A cell becomes occupied when this percentage of its sampled sub-cells are covered. Default is 25%."})]}),pt.jsxs("div",{className:"flex items-center justify-between",children:[pt.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[pt.jsx(Ed,{size:14}),pt.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest",children:"Grid Settings"})]}),pt.jsxs("button",{onClick:q,disabled:!r,className:"p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-emerald-400 transition-all disabled:opacity-30 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider",title:"Auto-fit to Model",children:[pt.jsx(q2,{size:12}),"Auto-Fit"]})]}),pt.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[pt.jsxs("div",{className:"space-y-2",children:[pt.jsx("label",{className:"text-xs font-medium text-white/50 uppercase tracking-wider",children:"Grid Width (Cells)"}),pt.jsxs("div",{className:"flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2",children:[pt.jsx(Ed,{size:14,className:"text-white/30"}),pt.jsx("input",{type:"number",min:"2",step:"2",value:m,onChange:W=>d(io(parseInt(W.target.value)||2)),className:"bg-transparent w-full text-sm outline-none"})]})]}),pt.jsxs("div",{className:"space-y-2",children:[pt.jsx("label",{className:"text-xs font-medium text-white/50 uppercase tracking-wider",children:"Grid Height (Cells)"}),pt.jsxs("div",{className:"flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2",children:[pt.jsx(Ed,{size:14,className:"text-white/30"}),pt.jsx("input",{type:"number",min:"2",step:"2",value:_,onChange:W=>x(io(parseInt(W.target.value)||2)),className:"bg-transparent w-full text-sm outline-none"})]})]})]}),pt.jsx("div",{className:"p-3 bg-white/5 rounded-lg border border-white/5",children:pt.jsxs("div",{className:"flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40",children:[pt.jsx("span",{children:"TGA Output Size"}),pt.jsxs("span",{className:"text-emerald-400",children:[O," x ",H," px"]})]})}),pt.jsx("p",{className:"text-[10px] text-white/30 italic",children:"3D viewport, 2D preview, and TGA export now share the same orientation. Each cell is 32x32 units and exports as 1 pixel."})]})]}),pt.jsxs("section",{className:"space-y-4 pt-4 border-t border-white/5",children:[pt.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[pt.jsx(V2,{size:14}),pt.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest",children:"Model Visualization"})]}),pt.jsxs("div",{className:"space-y-4",children:[pt.jsxs("div",{className:"flex items-center justify-between",children:[pt.jsx("label",{className:"text-xs text-white/70",children:"Wireframe"}),pt.jsx("button",{onClick:()=>N(!C),className:`w-10 h-5 rounded-full transition-colors relative ${C?"bg-emerald-500":"bg-white/10"}`,children:pt.jsx("div",{className:`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${C?"left-6":"left-1"}`})})]}),pt.jsxs("div",{className:"space-y-2",children:[pt.jsxs("div",{className:"flex justify-between",children:[pt.jsx("label",{className:"text-xs text-white/70",children:"Opacity"}),pt.jsxs("span",{className:"text-[10px] font-mono text-white/40",children:[Math.round(U*100),"%"]})]}),pt.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:U,onChange:W=>F(parseFloat(W.target.value)),className:"w-full accent-emerald-500"})]})]})]}),r&&pt.jsxs("section",{className:"space-y-4 pt-4 border-t border-white/5",children:[pt.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[pt.jsx(W2,{size:14}),pt.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest",children:"Model Info"})]}),pt.jsxs("div",{className:"bg-white/5 rounded-lg p-3 space-y-2",children:[pt.jsxs("div",{className:"flex justify-between text-[11px]",children:[pt.jsx("span",{className:"text-white/40",children:"Geosets"}),pt.jsx("span",{children:r.geosets.length})]}),pt.jsxs("div",{className:"flex justify-between text-[11px]",children:[pt.jsx("span",{className:"text-white/40",children:"Total Vertices"}),pt.jsx("span",{children:r.geosets.reduce((W,rt)=>W+rt.vertices.length/3,0)})]})]})]})]}),pt.jsxs("div",{className:"lg:col-span-6 bg-[#141414] border-r border-white/10 flex flex-col min-h-0",children:[pt.jsxs("div",{className:"relative flex-[0_0_68%] min-h-0 border-b border-white/10",children:[pt.jsx("div",{ref:Rt,className:"w-full h-full cursor-crosshair",onMouseDown:W=>{Te(W)},onClick:W=>{Le(W)},onMouseMove:W=>{Qe(W)},onMouseUp:()=>{Ke()},onMouseLeave:()=>{Ke(),zt.current&&(zt.current.brushCursor.visible=!1)}}),pt.jsx("div",{className:"absolute top-4 left-4 pointer-events-none",children:pt.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2",children:[pt.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),pt.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-white/70",children:"3D Preview"})]})}),!r&&pt.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:pt.jsxs("div",{className:"text-center space-y-4 opacity-20",children:[pt.jsx(Xv,{size:64,className:"mx-auto"}),pt.jsx("p",{className:"text-sm font-medium uppercase tracking-widest",children:"No Model Loaded"})]})})]}),pt.jsx("section",{className:"flex-1 min-h-0 p-5 bg-[#171717] flex flex-col justify-center",children:pt.jsxs("div",{className:"max-w-xl mx-auto w-full space-y-4",children:[pt.jsxs("div",{className:"flex items-center gap-2 text-emerald-400",children:[pt.jsx(Wv,{size:18}),pt.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest",children:"Batch Processing"})]}),pt.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 p-5 space-y-4",children:[pt.jsx("p",{className:"text-sm text-white/70 leading-6",children:"Use the current grid size, height cutoff percentage, and occupancy threshold to process multiple MDX files in one pass and download matching pathing TGAs."}),pt.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-white/45 uppercase tracking-widest",children:[pt.jsxs("div",{className:"rounded-lg bg-black/20 border border-white/5 px-3 py-2",children:["Grid: ",pt.jsxs("span",{className:"text-emerald-400",children:[m," x ",_]})]}),pt.jsxs("div",{className:"rounded-lg bg-black/20 border border-white/5 px-3 py-2",children:["Cutoff / Occupancy: ",pt.jsxs("span",{className:"text-emerald-400",children:[Math.round(l),"% / ",Math.round(h),"%"]})]})]}),pt.jsxs("button",{onClick:()=>{var W;return(W=at.current)==null?void 0:W.click()},disabled:b,className:"w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95",children:[pt.jsx(Yv,{size:18}),b?"Processing MDX Batch...":"Batch Import MDX"]}),pt.jsx("input",{ref:at,type:"file",accept:".mdx",multiple:!0,onChange:At,className:"hidden"})]})]})})]}),pt.jsxs("aside",{className:"lg:col-span-3 border-l border-white/10 p-4 space-y-3 bg-[#1a1a1a] overflow-hidden flex flex-col min-h-0",children:[pt.jsxs("div",{className:"flex items-center justify-between text-emerald-400",children:[pt.jsxs("div",{className:"flex items-center gap-2",children:[pt.jsx(Wv,{size:18}),pt.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest",children:"Pathing Preview"})]}),pt.jsxs("div",{className:"flex gap-1",children:[pt.jsx("button",{onClick:L,disabled:ut<=0,className:"p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-white/50 disabled:opacity-20 transition-all",title:"Undo (Ctrl+Z)",children:pt.jsx(a3,{size:14})}),pt.jsx("button",{onClick:E,disabled:ut>=T.length-1,className:"p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-white/50 disabled:opacity-20 transition-all",title:"Redo (Ctrl+Y)",children:pt.jsx(J2,{size:14})})]})]}),pt.jsxs("div",{className:"space-y-2 bg-white/5 p-3 rounded-lg border border-white/10",children:[pt.jsxs("div",{className:"flex items-center justify-between",children:[pt.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40",children:[pt.jsx(K2,{size:14}),"Palette"]}),pt.jsx("div",{className:"text-[10px] font-bold text-white/30 uppercase tracking-widest",children:h3(I)})]}),pt.jsx("div",{className:"grid grid-cols-4 gap-2",children:l3.map(W=>pt.jsxs("button",{onClick:()=>B(W.value),title:`${W.label}: ${W.description}`,className:`rounded-lg border p-2 transition-all ${I===W.value?"border-emerald-400 bg-white/10":"border-white/10 hover:border-white/30"}`,children:[pt.jsx("div",{className:"h-8 rounded-md border border-white/10",style:{backgroundColor:qv(W.value)}}),pt.jsx("div",{className:"mt-1 text-[9px] font-bold uppercase tracking-widest text-white/60",children:W.label})]},W.value))})]}),pt.jsx("div",{className:"flex-1 min-h-0 flex items-center justify-center",children:pt.jsxs("div",{className:"aspect-square w-full max-h-full bg-checkerboard rounded-xl border border-white/10 overflow-hidden flex items-center justify-center relative group cursor-crosshair",onMouseLeave:()=>{},children:[pt.jsxs("div",{className:"grid border-2 border-emerald-500/50 shadow-2xl select-none",style:{gridTemplateColumns:`repeat(${j}, 1fr)`,gridTemplateRows:`repeat(${St}, 1fr)`,width:j>=St?"100%":`${j/St*100}%`,height:St>=j?"100%":`${St/j*100}%`},children:[K.map((W,rt)=>W.map((Ct,z)=>pt.jsx("div",{onClick:()=>{ne(z,rt)},className:"border-[0.1px] border-white/10 transition-colors duration-75",style:{backgroundColor:qv(Ct)}},`${rt}-${z}`))),pt.jsx("div",{className:"absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm border border-white/10 rounded px-1.5 py-0.5 pointer-events-none",children:pt.jsxs("span",{className:"text-[9px] font-mono text-emerald-400",children:[j,"x",St]})})]}),pt.jsx("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:pt.jsx("button",{onClick:()=>{y(bd(m,_)),D([]),G(-1)},className:"p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-full transition-colors",children:pt.jsx(n3,{size:20})})})]})}),pt.jsxs("section",{className:"space-y-3 pt-2 border-t border-white/5",children:[pt.jsxs("button",{onClick:()=>{var W;return(W=Gt.current)==null?void 0:W.click()},className:"flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-lg shadow-emerald-900/20 active:scale-95",children:[pt.jsx(Yv,{size:18}),pt.jsx("span",{children:i||"Upload MDX"})]}),pt.jsx("input",{ref:Gt,type:"file",accept:".mdx",onChange:yt,className:"hidden"}),pt.jsxs("button",{onClick:te,className:"w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95",children:[pt.jsx(H2,{size:18}),"Download TGA"]})]})]})]})]})}KS.createRoot(document.getElementById("root")).render(pt.jsx(g3,{}));
