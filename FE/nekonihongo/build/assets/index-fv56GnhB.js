(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function s(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(u){if(u.ep)return;u.ep=!0;const h=s(u);fetch(u.href,h)}})();function vm(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var cl={exports:{}},Ma={},dl={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function dp(){if(Pu)return Oe;Pu=1;var a=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.iterator;function k(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,v={};function N(z,$,be){this.props=z,this.context=$,this.refs=v,this.updater=be||I}N.prototype.isReactComponent={},N.prototype.setState=function(z,$){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,$,"setState")},N.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function V(){}V.prototype=N.prototype;function O(z,$,be){this.props=z,this.context=$,this.refs=v,this.updater=be||I}var B=O.prototype=new V;B.constructor=O,j(B,N.prototype),B.isPureReactComponent=!0;var G=Array.isArray,te=Object.prototype.hasOwnProperty,de={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function le(z,$,be){var J,me={},fe=null,je=null;if($!=null)for(J in $.ref!==void 0&&(je=$.ref),$.key!==void 0&&(fe=""+$.key),$)te.call($,J)&&!q.hasOwnProperty(J)&&(me[J]=$[J]);var Te=arguments.length-2;if(Te===1)me.children=be;else if(1<Te){for(var Me=Array(Te),K=0;K<Te;K++)Me[K]=arguments[K+2];me.children=Me}if(z&&z.defaultProps)for(J in Te=z.defaultProps,Te)me[J]===void 0&&(me[J]=Te[J]);return{$$typeof:a,type:z,key:fe,ref:je,props:me,_owner:de.current}}function C(z,$){return{$$typeof:a,type:z.type,key:$,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function xe(z){var $={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(be){return $[be]})}var W=/\/+/g;function Y(z,$){return typeof z=="object"&&z!==null&&z.key!=null?xe(""+z.key):$.toString(36)}function P(z,$,be,J,me){var fe=typeof z;(fe==="undefined"||fe==="boolean")&&(z=null);var je=!1;if(z===null)je=!0;else switch(fe){case"string":case"number":je=!0;break;case"object":switch(z.$$typeof){case a:case o:je=!0}}if(je)return je=z,me=me(je),z=J===""?"."+Y(je,0):J,G(me)?(be="",z!=null&&(be=z.replace(W,"$&/")+"/"),P(me,$,be,"",function(K){return K})):me!=null&&(A(me)&&(me=C(me,be+(!me.key||je&&je.key===me.key?"":(""+me.key).replace(W,"$&/")+"/")+z)),$.push(me)),1;if(je=0,J=J===""?".":J+":",G(z))for(var Te=0;Te<z.length;Te++){fe=z[Te];var Me=J+Y(fe,Te);je+=P(fe,$,be,Me,me)}else if(Me=k(z),typeof Me=="function")for(z=Me.call(z),Te=0;!(fe=z.next()).done;)fe=fe.value,Me=J+Y(fe,Te++),je+=P(fe,$,be,Me,me);else if(fe==="object")throw $=String(z),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return je}function ue(z,$,be){if(z==null)return z;var J=[],me=0;return P(z,J,"","",function(fe){return $.call(be,fe,me++)}),J}function he(z){if(z._status===-1){var $=z._result;$=$(),$.then(function(be){(z._status===0||z._status===-1)&&(z._status=1,z._result=be)},function(be){(z._status===0||z._status===-1)&&(z._status=2,z._result=be)}),z._status===-1&&(z._status=0,z._result=$)}if(z._status===1)return z._result.default;throw z._result}var ne={current:null},M={transition:null},X={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:M,ReactCurrentOwner:de};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Oe.Children={map:ue,forEach:function(z,$,be){ue(z,function(){$.apply(this,arguments)},be)},count:function(z){var $=0;return ue(z,function(){$++}),$},toArray:function(z){return ue(z,function($){return $})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Oe.Component=N,Oe.Fragment=s,Oe.Profiler=u,Oe.PureComponent=O,Oe.StrictMode=l,Oe.Suspense=x,Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Oe.act=Z,Oe.cloneElement=function(z,$,be){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var J=j({},z.props),me=z.key,fe=z.ref,je=z._owner;if($!=null){if($.ref!==void 0&&(fe=$.ref,je=de.current),$.key!==void 0&&(me=""+$.key),z.type&&z.type.defaultProps)var Te=z.type.defaultProps;for(Me in $)te.call($,Me)&&!q.hasOwnProperty(Me)&&(J[Me]=$[Me]===void 0&&Te!==void 0?Te[Me]:$[Me])}var Me=arguments.length-2;if(Me===1)J.children=be;else if(1<Me){Te=Array(Me);for(var K=0;K<Me;K++)Te[K]=arguments[K+2];J.children=Te}return{$$typeof:a,type:z.type,key:me,ref:fe,props:J,_owner:je}},Oe.createContext=function(z){return z={$$typeof:m,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:h,_context:z},z.Consumer=z},Oe.createElement=le,Oe.createFactory=function(z){var $=le.bind(null,z);return $.type=z,$},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(z){return{$$typeof:g,render:z}},Oe.isValidElement=A,Oe.lazy=function(z){return{$$typeof:b,_payload:{_status:-1,_result:z},_init:he}},Oe.memo=function(z,$){return{$$typeof:w,type:z,compare:$===void 0?null:$}},Oe.startTransition=function(z){var $=M.transition;M.transition={};try{z()}finally{M.transition=$}},Oe.unstable_act=Z,Oe.useCallback=function(z,$){return ne.current.useCallback(z,$)},Oe.useContext=function(z){return ne.current.useContext(z)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(z){return ne.current.useDeferredValue(z)},Oe.useEffect=function(z,$){return ne.current.useEffect(z,$)},Oe.useId=function(){return ne.current.useId()},Oe.useImperativeHandle=function(z,$,be){return ne.current.useImperativeHandle(z,$,be)},Oe.useInsertionEffect=function(z,$){return ne.current.useInsertionEffect(z,$)},Oe.useLayoutEffect=function(z,$){return ne.current.useLayoutEffect(z,$)},Oe.useMemo=function(z,$){return ne.current.useMemo(z,$)},Oe.useReducer=function(z,$,be){return ne.current.useReducer(z,$,be)},Oe.useRef=function(z){return ne.current.useRef(z)},Oe.useState=function(z){return ne.current.useState(z)},Oe.useSyncExternalStore=function(z,$,be){return ne.current.useSyncExternalStore(z,$,be)},Oe.useTransition=function(){return ne.current.useTransition()},Oe.version="18.3.1",Oe}var Au;function $l(){return Au||(Au=1,dl.exports=dp()),dl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function up(){if(Fu)return Ma;Fu=1;var a=$l(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(g,x,w){var b,y={},k=null,I=null;w!==void 0&&(k=""+w),x.key!==void 0&&(k=""+x.key),x.ref!==void 0&&(I=x.ref);for(b in x)l.call(x,b)&&!h.hasOwnProperty(b)&&(y[b]=x[b]);if(g&&g.defaultProps)for(b in x=g.defaultProps,x)y[b]===void 0&&(y[b]=x[b]);return{$$typeof:o,type:g,key:k,ref:I,props:y,_owner:u.current}}return Ma.Fragment=s,Ma.jsx=m,Ma.jsxs=m,Ma}var Du;function mp(){return Du||(Du=1,cl.exports=up()),cl.exports}var t=mp(),f=$l();const hp=vm(f);var Qi={},ul={exports:{}},St={},ml={exports:{}},hl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function pp(){return Iu||(Iu=1,(function(a){function o(M,X){var Z=M.length;M.push(X);e:for(;0<Z;){var z=Z-1>>>1,$=M[z];if(0<u($,X))M[z]=X,M[Z]=$,Z=z;else break e}}function s(M){return M.length===0?null:M[0]}function l(M){if(M.length===0)return null;var X=M[0],Z=M.pop();if(Z!==X){M[0]=Z;e:for(var z=0,$=M.length,be=$>>>1;z<be;){var J=2*(z+1)-1,me=M[J],fe=J+1,je=M[fe];if(0>u(me,Z))fe<$&&0>u(je,me)?(M[z]=je,M[fe]=Z,z=fe):(M[z]=me,M[J]=Z,z=J);else if(fe<$&&0>u(je,Z))M[z]=je,M[fe]=Z,z=fe;else break e}}return X}function u(M,X){var Z=M.sortIndex-X.sortIndex;return Z!==0?Z:M.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var m=Date,g=m.now();a.unstable_now=function(){return m.now()-g}}var x=[],w=[],b=1,y=null,k=3,I=!1,j=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(M){for(var X=s(w);X!==null;){if(X.callback===null)l(w);else if(X.startTime<=M)l(w),X.sortIndex=X.expirationTime,o(x,X);else break;X=s(w)}}function G(M){if(v=!1,B(M),!j)if(s(x)!==null)j=!0,he(te);else{var X=s(w);X!==null&&ne(G,X.startTime-M)}}function te(M,X){j=!1,v&&(v=!1,V(le),le=-1),I=!0;var Z=k;try{for(B(X),y=s(x);y!==null&&(!(y.expirationTime>X)||M&&!xe());){var z=y.callback;if(typeof z=="function"){y.callback=null,k=y.priorityLevel;var $=z(y.expirationTime<=X);X=a.unstable_now(),typeof $=="function"?y.callback=$:y===s(x)&&l(x),B(X)}else l(x);y=s(x)}if(y!==null)var be=!0;else{var J=s(w);J!==null&&ne(G,J.startTime-X),be=!1}return be}finally{y=null,k=Z,I=!1}}var de=!1,q=null,le=-1,C=5,A=-1;function xe(){return!(a.unstable_now()-A<C)}function W(){if(q!==null){var M=a.unstable_now();A=M;var X=!0;try{X=q(!0,M)}finally{X?Y():(de=!1,q=null)}}else de=!1}var Y;if(typeof O=="function")Y=function(){O(W)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,ue=P.port2;P.port1.onmessage=W,Y=function(){ue.postMessage(null)}}else Y=function(){N(W,0)};function he(M){q=M,de||(de=!0,Y())}function ne(M,X){le=N(function(){M(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(M){M.callback=null},a.unstable_continueExecution=function(){j||I||(j=!0,he(te))},a.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<M?Math.floor(1e3/M):5},a.unstable_getCurrentPriorityLevel=function(){return k},a.unstable_getFirstCallbackNode=function(){return s(x)},a.unstable_next=function(M){switch(k){case 1:case 2:case 3:var X=3;break;default:X=k}var Z=k;k=X;try{return M()}finally{k=Z}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(M,X){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=k;k=M;try{return X()}finally{k=Z}},a.unstable_scheduleCallback=function(M,X,Z){var z=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?z+Z:z):Z=z,M){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=Z+$,M={id:b++,callback:X,priorityLevel:M,startTime:Z,expirationTime:$,sortIndex:-1},Z>z?(M.sortIndex=Z,o(w,M),s(x)===null&&M===s(w)&&(v?(V(le),le=-1):v=!0,ne(G,Z-z))):(M.sortIndex=$,o(x,M),j||I||(j=!0,he(te))),M},a.unstable_shouldYield=xe,a.unstable_wrapCallback=function(M){var X=k;return function(){var Z=k;k=X;try{return M.apply(this,arguments)}finally{k=Z}}}})(hl)),hl}var Ou;function gp(){return Ou||(Ou=1,ml.exports=pp()),ml.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function fp(){if(Ru)return St;Ru=1;var a=$l(),o=gp();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function h(e,n){m(e,n),m(e+"Capture",n)}function m(e,n){for(u[e]=n,e=0;e<n.length;e++)l.add(n[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},y={};function k(e){return x.call(y,e)?!0:x.call(b,e)?!1:w.test(e)?y[e]=!0:(b[e]=!0,!1)}function I(e,n,r,i){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,r,i){if(n===null||typeof n>"u"||I(e,n,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function v(e,n,r,i,c,d,p){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=c,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=d,this.removeEmptyString=p}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new v(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];N[n]=new v(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new v(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new v(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new v(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new v(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(V,O);N[n]=new v(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(V,O);N[n]=new v(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(V,O);N[n]=new v(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function B(e,n,r,i){var c=N.hasOwnProperty(n)?N[n]:null;(c!==null?c.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,r,c,i)&&(r=null),i||c===null?k(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):c.mustUseProperty?e[c.propertyName]=r===null?c.type===3?!1:"":r:(n=c.attributeName,i=c.attributeNamespace,r===null?e.removeAttribute(n):(c=c.type,r=c===3||c===4&&r===!0?"":""+r,i?e.setAttributeNS(i,n,r):e.setAttribute(n,r))))}var G=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),de=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),xe=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),M=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,z;function $(e){if(z===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+e}var be=!1;function J(e,n){if(!e||be)return"";be=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(R){var i=R}Reflect.construct(e,[],n)}else{try{n.call()}catch(R){i=R}e.call(n.prototype)}else{try{throw Error()}catch(R){i=R}e()}}catch(R){if(R&&i&&typeof R.stack=="string"){for(var c=R.stack.split(`
`),d=i.stack.split(`
`),p=c.length-1,S=d.length-1;1<=p&&0<=S&&c[p]!==d[S];)S--;for(;1<=p&&0<=S;p--,S--)if(c[p]!==d[S]){if(p!==1||S!==1)do if(p--,S--,0>S||c[p]!==d[S]){var T=`
`+c[p].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=p&&0<=S);break}}}finally{be=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?$(e):""}function me(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case de:return"Portal";case C:return"Profiler";case le:return"StrictMode";case Y:return"Suspense";case P:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case A:return(e._context.displayName||"Context")+".Provider";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ue:return n=e.displayName||null,n!==null?n:fe(e.type)||"Memo";case he:n=e._payload,e=e._init;try{return fe(e(n))}catch{}}return null}function je(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(n);case 8:return n===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function K(e){var n=Me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,d=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(p){i=""+p,d.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Fe(e){e._valueTracker||(e._valueTracker=K(e))}function se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),i="";return e&&(i=Me(e)?e.checked?"true":"false":e.value),e=i,e!==r?(n.setValue(e),!0):!1}function E(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function D(e,n){var r=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Q(e,n){var r=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;r=Te(n.value!=null?n.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function re(e,n){n=n.checked,n!=null&&B(e,"checked",n,!1)}function ee(e,n){re(e,n);var r=Te(n.value),i=n.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?U(e,n.type,r):n.hasOwnProperty("defaultValue")&&U(e,n.type,Te(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ce(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function U(e,n,r){(n!=="number"||E(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ie=Array.isArray;function we(e,n,r,i){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Te(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function ze(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pe(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(s(92));if(ie(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:Te(r)}}function Be(e,n){var r=Te(n.value),i=Te(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function ut(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ln(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ln(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vn,Ya=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,i,c){MSApp.execUnsafeLocalFunction(function(){return e(n,r,i,c)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vn=Vn||document.createElement("div"),Vn.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Jt(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ph=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){ph.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),hr[n]=hr[e]})});function Gl(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||hr.hasOwnProperty(e)&&hr[e]?(""+n).trim():n+"px"}function Wl(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var i=r.indexOf("--")===0,c=Gl(r,n[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,c):e[r]=c}}var gh=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,n){if(n){if(gh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function ko(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function No(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var So=null,pr=null,gr=null;function Ql(e){if(e=fa(e)){if(typeof So!="function")throw Error(s(280));var n=e.stateNode;n&&(n=ui(n),So(e.stateNode,e.type,n))}}function Xl(e){pr?gr?gr.push(e):gr=[e]:pr=e}function Jl(){if(pr){var e=pr,n=gr;if(gr=pr=null,Ql(e),n)for(e=0;e<n.length;e++)Ql(n[e])}}function Zl(e,n){return e(n)}function ec(){}var Co=!1;function tc(e,n,r){if(Co)return e(n,r);Co=!0;try{return Zl(e,n,r)}finally{Co=!1,(pr!==null||gr!==null)&&(ec(),Jl())}}function Wr(e,n){var r=e.stateNode;if(r===null)return null;var i=ui(r);if(i===null)return null;r=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var zo=!1;if(g)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){zo=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{zo=!1}function fh(e,n,r,i,c,d,p,S,T){var R=Array.prototype.slice.call(arguments,3);try{n.apply(r,R)}catch(oe){this.onError(oe)}}var Xr=!1,Ba=null,Ua=!1,To=null,xh={onError:function(e){Xr=!0,Ba=e}};function bh(e,n,r,i,c,d,p,S,T){Xr=!1,Ba=null,fh.apply(xh,arguments)}function yh(e,n,r,i,c,d,p,S,T){if(bh.apply(this,arguments),Xr){if(Xr){var R=Ba;Xr=!1,Ba=null}else throw Error(s(198));Ua||(Ua=!0,To=R)}}function qn(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function nc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function rc(e){if(qn(e)!==e)throw Error(s(188))}function wh(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(s(188));return n!==e?null:e}for(var r=e,i=n;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(i=c.return,i!==null){r=i;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return rc(c),e;if(d===i)return rc(c),n;d=d.sibling}throw Error(s(188))}if(r.return!==i.return)r=c,i=d;else{for(var p=!1,S=c.child;S;){if(S===r){p=!0,r=c,i=d;break}if(S===i){p=!0,i=c,r=d;break}S=S.sibling}if(!p){for(S=d.child;S;){if(S===r){p=!0,r=d,i=c;break}if(S===i){p=!0,i=d,r=c;break}S=S.sibling}if(!p)throw Error(s(189))}}if(r.alternate!==i)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:n}function ac(e){return e=wh(e),e!==null?ic(e):null}function ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ic(e);if(n!==null)return n;e=e.sibling}return null}var oc=o.unstable_scheduleCallback,sc=o.unstable_cancelCallback,vh=o.unstable_shouldYield,kh=o.unstable_requestPaint,Je=o.unstable_now,jh=o.unstable_getCurrentPriorityLevel,Eo=o.unstable_ImmediatePriority,lc=o.unstable_UserBlockingPriority,Ka=o.unstable_NormalPriority,Nh=o.unstable_LowPriority,cc=o.unstable_IdlePriority,Va=null,Zt=null;function Sh(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Va,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Th,Ch=Math.log,zh=Math.LN2;function Th(e){return e>>>=0,e===0?32:31-(Ch(e)/zh|0)|0}var qa=64,Ga=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,c=e.suspendedLanes,d=e.pingedLanes,p=r&268435455;if(p!==0){var S=p&~c;S!==0?i=Jr(S):(d&=p,d!==0&&(i=Jr(d)))}else p=r&~c,p!==0?i=Jr(p):d!==0&&(i=Jr(d));if(i===0)return 0;if(n!==0&&n!==i&&(n&c)===0&&(c=i&-i,d=n&-n,c>=d||c===16&&(d&4194240)!==0))return n;if((i&4)!==0&&(i|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)r=31-Ht(n),c=1<<r,i|=e[r],n&=~c;return i}function Eh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _h(e,n){for(var r=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var p=31-Ht(d),S=1<<p,T=c[p];T===-1?((S&r)===0||(S&i)!==0)&&(c[p]=Eh(S,n)):T<=n&&(e.expiredLanes|=S),d&=~S}}function _o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dc(){var e=qa;return qa<<=1,(qa&4194240)===0&&(qa=64),e}function Mo(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Zr(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ht(n),e[n]=r}function Mh(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var c=31-Ht(r),d=1<<c;n[c]=0,i[c]=-1,e[c]=-1,r&=~d}}function Lo(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var i=31-Ht(r),c=1<<i;c&n|e[i]&n&&(e[i]|=n),r&=~c}}var He=0;function uc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var mc,Po,hc,pc,gc,Ao=!1,Qa=[],jn=null,Nn=null,Sn=null,ea=new Map,ta=new Map,Cn=[],Lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(e,n){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":ea.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(n.pointerId)}}function na(e,n,r,i,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:i,nativeEvent:d,targetContainers:[c]},n!==null&&(n=fa(n),n!==null&&Po(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Ph(e,n,r,i,c){switch(n){case"focusin":return jn=na(jn,e,n,r,i,c),!0;case"dragenter":return Nn=na(Nn,e,n,r,i,c),!0;case"mouseover":return Sn=na(Sn,e,n,r,i,c),!0;case"pointerover":var d=c.pointerId;return ea.set(d,na(ea.get(d)||null,e,n,r,i,c)),!0;case"gotpointercapture":return d=c.pointerId,ta.set(d,na(ta.get(d)||null,e,n,r,i,c)),!0}return!1}function xc(e){var n=Gn(e.target);if(n!==null){var r=qn(n);if(r!==null){if(n=r.tag,n===13){if(n=nc(r),n!==null){e.blockedOn=n,gc(e.priority,function(){hc(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Do(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);jo=i,r.target.dispatchEvent(i),jo=null}else return n=fa(r),n!==null&&Po(n),e.blockedOn=r,!1;n.shift()}return!0}function bc(e,n,r){Xa(e)&&r.delete(n)}function Ah(){Ao=!1,jn!==null&&Xa(jn)&&(jn=null),Nn!==null&&Xa(Nn)&&(Nn=null),Sn!==null&&Xa(Sn)&&(Sn=null),ea.forEach(bc),ta.forEach(bc)}function ra(e,n){e.blockedOn===n&&(e.blockedOn=null,Ao||(Ao=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ah)))}function aa(e){function n(c){return ra(c,e)}if(0<Qa.length){ra(Qa[0],e);for(var r=1;r<Qa.length;r++){var i=Qa[r];i.blockedOn===e&&(i.blockedOn=null)}}for(jn!==null&&ra(jn,e),Nn!==null&&ra(Nn,e),Sn!==null&&ra(Sn,e),ea.forEach(n),ta.forEach(n),r=0;r<Cn.length;r++)i=Cn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Cn.length&&(r=Cn[0],r.blockedOn===null);)xc(r),r.blockedOn===null&&Cn.shift()}var fr=G.ReactCurrentBatchConfig,Ja=!0;function Fh(e,n,r,i){var c=He,d=fr.transition;fr.transition=null;try{He=1,Fo(e,n,r,i)}finally{He=c,fr.transition=d}}function Dh(e,n,r,i){var c=He,d=fr.transition;fr.transition=null;try{He=4,Fo(e,n,r,i)}finally{He=c,fr.transition=d}}function Fo(e,n,r,i){if(Ja){var c=Do(e,n,r,i);if(c===null)Zo(e,n,i,Za,r),fc(e,i);else if(Ph(c,e,n,r,i))i.stopPropagation();else if(fc(e,i),n&4&&-1<Lh.indexOf(e)){for(;c!==null;){var d=fa(c);if(d!==null&&mc(d),d=Do(e,n,r,i),d===null&&Zo(e,n,i,Za,r),d===c)break;c=d}c!==null&&i.stopPropagation()}else Zo(e,n,i,null,r)}}var Za=null;function Do(e,n,r,i){if(Za=null,e=No(i),e=Gn(e),e!==null)if(n=qn(e),n===null)e=null;else if(r=n.tag,r===13){if(e=nc(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Za=e,null}function yc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jh()){case Eo:return 1;case lc:return 4;case Ka:case Nh:return 16;case cc:return 536870912;default:return 16}default:return 16}}var zn=null,Io=null,ei=null;function wc(){if(ei)return ei;var e,n=Io,r=n.length,i,c="value"in zn?zn.value:zn.textContent,d=c.length;for(e=0;e<r&&n[e]===c[e];e++);var p=r-e;for(i=1;i<=p&&n[r-i]===c[d-i];i++);return ei=c.slice(e,1<i?1-i:void 0)}function ti(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function vc(){return!1}function Tt(e){function n(r,i,c,d,p){this._reactName=r,this._targetInst=c,this.type=i,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(r=e[S],this[S]=r?r(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ni:vc,this.isPropagationStopped=vc,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),n}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oo=Tt(xr),ia=Z({},xr,{view:0,detail:0}),Ih=Tt(ia),Ro,$o,oa,ri=Z({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oa&&(oa&&e.type==="mousemove"?(Ro=e.screenX-oa.screenX,$o=e.screenY-oa.screenY):$o=Ro=0,oa=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),kc=Tt(ri),Oh=Z({},ri,{dataTransfer:0}),Rh=Tt(Oh),$h=Z({},ia,{relatedTarget:0}),Ho=Tt($h),Hh=Z({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yh=Tt(Hh),Bh=Z({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uh=Tt(Bh),Kh=Z({},xr,{data:0}),jc=Tt(Kh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gh[e])?!!n[e]:!1}function Yo(){return Wh}var Qh=Z({},ia,{key:function(e){if(e.key){var n=Vh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yo,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=Tt(Qh),Jh=Z({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=Tt(Jh),Zh=Z({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yo}),e0=Tt(Zh),t0=Z({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Tt(t0),r0=Z({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=Tt(r0),i0=[9,13,27,32],Bo=g&&"CompositionEvent"in window,sa=null;g&&"documentMode"in document&&(sa=document.documentMode);var o0=g&&"TextEvent"in window&&!sa,Sc=g&&(!Bo||sa&&8<sa&&11>=sa),Cc=" ",zc=!1;function Tc(e,n){switch(e){case"keyup":return i0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function s0(e,n){switch(e){case"compositionend":return Ec(n);case"keypress":return n.which!==32?null:(zc=!0,Cc);case"textInput":return e=n.data,e===Cc&&zc?null:e;default:return null}}function l0(e,n){if(br)return e==="compositionend"||!Bo&&Tc(e,n)?(e=wc(),ei=Io=zn=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sc&&n.locale!=="ko"?null:n.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!c0[e.type]:n==="textarea"}function Mc(e,n,r,i){Xl(i),n=li(n,"onChange"),0<n.length&&(r=new Oo("onChange","change",null,r,i),e.push({event:r,listeners:n}))}var la=null,ca=null;function d0(e){Wc(e,0)}function ai(e){var n=jr(e);if(se(n))return e}function u0(e,n){if(e==="change")return n}var Lc=!1;if(g){var Uo;if(g){var Ko="oninput"in document;if(!Ko){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),Ko=typeof Pc.oninput=="function"}Uo=Ko}else Uo=!1;Lc=Uo&&(!document.documentMode||9<document.documentMode)}function Ac(){la&&(la.detachEvent("onpropertychange",Fc),ca=la=null)}function Fc(e){if(e.propertyName==="value"&&ai(ca)){var n=[];Mc(n,ca,e,No(e)),tc(d0,n)}}function m0(e,n,r){e==="focusin"?(Ac(),la=n,ca=r,la.attachEvent("onpropertychange",Fc)):e==="focusout"&&Ac()}function h0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(ca)}function p0(e,n){if(e==="click")return ai(n)}function g0(e,n){if(e==="input"||e==="change")return ai(n)}function f0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yt=typeof Object.is=="function"?Object.is:f0;function da(e,n){if(Yt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),i=Object.keys(n);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var c=r[i];if(!x.call(n,c)||!Yt(e[c],n[c]))return!1}return!0}function Dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,n){var r=Dc(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=n&&i>=n)return{node:r,offset:n-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Dc(r)}}function Oc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Oc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rc(){for(var e=window,n=E();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=E(e.document)}return n}function Vo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function x0(e){var n=Rc(),r=e.focusedElem,i=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Oc(r.ownerDocument.documentElement,r)){if(i!==null&&Vo(r)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var c=r.textContent.length,d=Math.min(i.start,c);i=i.end===void 0?d:Math.min(i.end,c),!e.extend&&d>i&&(c=i,i=d,d=c),c=Ic(r,d);var p=Ic(r,i);c&&p&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(n=n.createRange(),n.setStart(c.node,c.offset),e.removeAllRanges(),d>i?(e.addRange(n),e.extend(p.node,p.offset)):(n.setEnd(p.node,p.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var b0=g&&"documentMode"in document&&11>=document.documentMode,yr=null,qo=null,ua=null,Go=!1;function $c(e,n,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Go||yr==null||yr!==E(i)||(i=yr,"selectionStart"in i&&Vo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ua&&da(ua,i)||(ua=i,i=li(qo,"onSelect"),0<i.length&&(n=new Oo("onSelect","select",null,n,r),e.push({event:n,listeners:i}),n.target=yr)))}function ii(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var wr={animationend:ii("Animation","AnimationEnd"),animationiteration:ii("Animation","AnimationIteration"),animationstart:ii("Animation","AnimationStart"),transitionend:ii("Transition","TransitionEnd")},Wo={},Hc={};g&&(Hc=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function oi(e){if(Wo[e])return Wo[e];if(!wr[e])return e;var n=wr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Hc)return Wo[e]=n[r];return e}var Yc=oi("animationend"),Bc=oi("animationiteration"),Uc=oi("animationstart"),Kc=oi("transitionend"),Vc=new Map,qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,n){Vc.set(e,n),h(n,[e])}for(var Qo=0;Qo<qc.length;Qo++){var Xo=qc[Qo],y0=Xo.toLowerCase(),w0=Xo[0].toUpperCase()+Xo.slice(1);Tn(y0,"on"+w0)}Tn(Yc,"onAnimationEnd"),Tn(Bc,"onAnimationIteration"),Tn(Uc,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Kc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Gc(e,n,r){var i=e.type||"unknown-event";e.currentTarget=r,yh(i,n,void 0,e),e.currentTarget=null}function Wc(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],c=i.event;i=i.listeners;e:{var d=void 0;if(n)for(var p=i.length-1;0<=p;p--){var S=i[p],T=S.instance,R=S.currentTarget;if(S=S.listener,T!==d&&c.isPropagationStopped())break e;Gc(c,S,R),d=T}else for(p=0;p<i.length;p++){if(S=i[p],T=S.instance,R=S.currentTarget,S=S.listener,T!==d&&c.isPropagationStopped())break e;Gc(c,S,R),d=T}}}if(Ua)throw e=To,Ua=!1,To=null,e}function Ke(e,n){var r=n[is];r===void 0&&(r=n[is]=new Set);var i=e+"__bubble";r.has(i)||(Qc(n,e,2,!1),r.add(i))}function Jo(e,n,r){var i=0;n&&(i|=4),Qc(r,e,i,n)}var si="_reactListening"+Math.random().toString(36).slice(2);function ha(e){if(!e[si]){e[si]=!0,l.forEach(function(r){r!=="selectionchange"&&(v0.has(r)||Jo(r,!1,e),Jo(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[si]||(n[si]=!0,Jo("selectionchange",!1,n))}}function Qc(e,n,r,i){switch(yc(n)){case 1:var c=Fh;break;case 4:c=Dh;break;default:c=Fo}r=c.bind(null,n,r,e),c=void 0,!zo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function Zo(e,n,r,i,c){var d=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var S=i.stateNode.containerInfo;if(S===c||S.nodeType===8&&S.parentNode===c)break;if(p===4)for(p=i.return;p!==null;){var T=p.tag;if((T===3||T===4)&&(T=p.stateNode.containerInfo,T===c||T.nodeType===8&&T.parentNode===c))return;p=p.return}for(;S!==null;){if(p=Gn(S),p===null)return;if(T=p.tag,T===5||T===6){i=d=p;continue e}S=S.parentNode}}i=i.return}tc(function(){var R=d,oe=No(r),ce=[];e:{var ae=Vc.get(e);if(ae!==void 0){var ye=Oo,ke=e;switch(e){case"keypress":if(ti(r)===0)break e;case"keydown":case"keyup":ye=Xh;break;case"focusin":ke="focus",ye=Ho;break;case"focusout":ke="blur",ye=Ho;break;case"beforeblur":case"afterblur":ye=Ho;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=e0;break;case Yc:case Bc:case Uc:ye=Yh;break;case Kc:ye=n0;break;case"scroll":ye=Ih;break;case"wheel":ye=a0;break;case"copy":case"cut":case"paste":ye=Uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Nc}var Ne=(n&4)!==0,Ze=!Ne&&e==="scroll",L=Ne?ae!==null?ae+"Capture":null:ae;Ne=[];for(var _=R,F;_!==null;){F=_;var pe=F.stateNode;if(F.tag===5&&pe!==null&&(F=pe,L!==null&&(pe=Wr(_,L),pe!=null&&Ne.push(pa(_,pe,F)))),Ze)break;_=_.return}0<Ne.length&&(ae=new ye(ae,ke,null,r,oe),ce.push({event:ae,listeners:Ne}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",ye=e==="mouseout"||e==="pointerout",ae&&r!==jo&&(ke=r.relatedTarget||r.fromElement)&&(Gn(ke)||ke[cn]))break e;if((ye||ae)&&(ae=oe.window===oe?oe:(ae=oe.ownerDocument)?ae.defaultView||ae.parentWindow:window,ye?(ke=r.relatedTarget||r.toElement,ye=R,ke=ke?Gn(ke):null,ke!==null&&(Ze=qn(ke),ke!==Ze||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(ye=null,ke=R),ye!==ke)){if(Ne=kc,pe="onMouseLeave",L="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(Ne=Nc,pe="onPointerLeave",L="onPointerEnter",_="pointer"),Ze=ye==null?ae:jr(ye),F=ke==null?ae:jr(ke),ae=new Ne(pe,_+"leave",ye,r,oe),ae.target=Ze,ae.relatedTarget=F,pe=null,Gn(oe)===R&&(Ne=new Ne(L,_+"enter",ke,r,oe),Ne.target=F,Ne.relatedTarget=Ze,pe=Ne),Ze=pe,ye&&ke)t:{for(Ne=ye,L=ke,_=0,F=Ne;F;F=vr(F))_++;for(F=0,pe=L;pe;pe=vr(pe))F++;for(;0<_-F;)Ne=vr(Ne),_--;for(;0<F-_;)L=vr(L),F--;for(;_--;){if(Ne===L||L!==null&&Ne===L.alternate)break t;Ne=vr(Ne),L=vr(L)}Ne=null}else Ne=null;ye!==null&&Xc(ce,ae,ye,Ne,!1),ke!==null&&Ze!==null&&Xc(ce,Ze,ke,Ne,!0)}}e:{if(ae=R?jr(R):window,ye=ae.nodeName&&ae.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ae.type==="file")var Se=u0;else if(_c(ae))if(Lc)Se=g0;else{Se=h0;var Ee=m0}else(ye=ae.nodeName)&&ye.toLowerCase()==="input"&&(ae.type==="checkbox"||ae.type==="radio")&&(Se=p0);if(Se&&(Se=Se(e,R))){Mc(ce,Se,r,oe);break e}Ee&&Ee(e,ae,R),e==="focusout"&&(Ee=ae._wrapperState)&&Ee.controlled&&ae.type==="number"&&U(ae,"number",ae.value)}switch(Ee=R?jr(R):window,e){case"focusin":(_c(Ee)||Ee.contentEditable==="true")&&(yr=Ee,qo=R,ua=null);break;case"focusout":ua=qo=yr=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,$c(ce,r,oe);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":$c(ce,r,oe)}var _e;if(Bo)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else br?Tc(e,r)&&(Ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ae="onCompositionStart");Ae&&(Sc&&r.locale!=="ko"&&(br||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&br&&(_e=wc()):(zn=oe,Io="value"in zn?zn.value:zn.textContent,br=!0)),Ee=li(R,Ae),0<Ee.length&&(Ae=new jc(Ae,e,null,r,oe),ce.push({event:Ae,listeners:Ee}),_e?Ae.data=_e:(_e=Ec(r),_e!==null&&(Ae.data=_e)))),(_e=o0?s0(e,r):l0(e,r))&&(R=li(R,"onBeforeInput"),0<R.length&&(oe=new jc("onBeforeInput","beforeinput",null,r,oe),ce.push({event:oe,listeners:R}),oe.data=_e))}Wc(ce,n)})}function pa(e,n,r){return{instance:e,listener:n,currentTarget:r}}function li(e,n){for(var r=n+"Capture",i=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=Wr(e,r),d!=null&&i.unshift(pa(e,d,c)),d=Wr(e,n),d!=null&&i.push(pa(e,d,c))),e=e.return}return i}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,n,r,i,c){for(var d=n._reactName,p=[];r!==null&&r!==i;){var S=r,T=S.alternate,R=S.stateNode;if(T!==null&&T===i)break;S.tag===5&&R!==null&&(S=R,c?(T=Wr(r,d),T!=null&&p.unshift(pa(r,T,S))):c||(T=Wr(r,d),T!=null&&p.push(pa(r,T,S)))),r=r.return}p.length!==0&&e.push({event:n,listeners:p})}var k0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Jc(e){return(typeof e=="string"?e:""+e).replace(k0,`
`).replace(j0,"")}function ci(e,n,r){if(n=Jc(n),Jc(e)!==n&&r)throw Error(s(425))}function di(){}var es=null,ts=null;function ns(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,N0=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(C0)}:rs;function C0(e){setTimeout(function(){throw e})}function as(e,n){var r=n,i=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(i===0){e.removeChild(c),aa(n);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=c}while(r);aa(n)}function En(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ed(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),en="__reactFiber$"+kr,ga="__reactProps$"+kr,cn="__reactContainer$"+kr,is="__reactEvents$"+kr,z0="__reactListeners$"+kr,T0="__reactHandles$"+kr;function Gn(e){var n=e[en];if(n)return n;for(var r=e.parentNode;r;){if(n=r[cn]||r[en]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=ed(e);e!==null;){if(r=e[en])return r;e=ed(e)}return n}e=r,r=e.parentNode}return null}function fa(e){return e=e[en]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function ui(e){return e[ga]||null}var os=[],Nr=-1;function _n(e){return{current:e}}function Ve(e){0>Nr||(e.current=os[Nr],os[Nr]=null,Nr--)}function Ue(e,n){Nr++,os[Nr]=e.current,e.current=n}var Mn={},mt=_n(Mn),wt=_n(!1),Wn=Mn;function Sr(e,n){var r=e.type.contextTypes;if(!r)return Mn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in r)c[d]=n[d];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=c),c}function vt(e){return e=e.childContextTypes,e!=null}function mi(){Ve(wt),Ve(mt)}function td(e,n,r){if(mt.current!==Mn)throw Error(s(168));Ue(mt,n),Ue(wt,r)}function nd(e,n,r){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var c in i)if(!(c in n))throw Error(s(108,je(e)||"Unknown",c));return Z({},r,i)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,Wn=mt.current,Ue(mt,e),Ue(wt,wt.current),!0}function rd(e,n,r){var i=e.stateNode;if(!i)throw Error(s(169));r?(e=nd(e,n,Wn),i.__reactInternalMemoizedMergedChildContext=e,Ve(wt),Ve(mt),Ue(mt,e)):Ve(wt),Ue(wt,r)}var dn=null,pi=!1,ss=!1;function ad(e){dn===null?dn=[e]:dn.push(e)}function E0(e){pi=!0,ad(e)}function Ln(){if(!ss&&dn!==null){ss=!0;var e=0,n=He;try{var r=dn;for(He=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}dn=null,pi=!1}catch(c){throw dn!==null&&(dn=dn.slice(e+1)),oc(Eo,Ln),c}finally{He=n,ss=!1}}return null}var Cr=[],zr=0,gi=null,fi=0,At=[],Ft=0,Qn=null,un=1,mn="";function Xn(e,n){Cr[zr++]=fi,Cr[zr++]=gi,gi=e,fi=n}function id(e,n,r){At[Ft++]=un,At[Ft++]=mn,At[Ft++]=Qn,Qn=e;var i=un;e=mn;var c=32-Ht(i)-1;i&=~(1<<c),r+=1;var d=32-Ht(n)+c;if(30<d){var p=c-c%5;d=(i&(1<<p)-1).toString(32),i>>=p,c-=p,un=1<<32-Ht(n)+c|r<<c|i,mn=d+e}else un=1<<d|r<<c|i,mn=e}function ls(e){e.return!==null&&(Xn(e,1),id(e,1,0))}function cs(e){for(;e===gi;)gi=Cr[--zr],Cr[zr]=null,fi=Cr[--zr],Cr[zr]=null;for(;e===Qn;)Qn=At[--Ft],At[Ft]=null,mn=At[--Ft],At[Ft]=null,un=At[--Ft],At[Ft]=null}var Et=null,_t=null,qe=!1,Bt=null;function od(e,n){var r=Rt(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function sd(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Et=e,_t=En(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Et=e,_t=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Qn!==null?{id:un,overflow:mn}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Rt(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Et=e,_t=null,!0):!1;default:return!1}}function ds(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(qe){var n=_t;if(n){var r=n;if(!sd(e,n)){if(ds(e))throw Error(s(418));n=En(r.nextSibling);var i=Et;n&&sd(e,n)?od(i,r):(e.flags=e.flags&-4097|2,qe=!1,Et=e)}}else{if(ds(e))throw Error(s(418));e.flags=e.flags&-4097|2,qe=!1,Et=e}}}function ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function xi(e){if(e!==Et)return!1;if(!qe)return ld(e),qe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ns(e.type,e.memoizedProps)),n&&(n=_t)){if(ds(e))throw cd(),Error(s(418));for(;n;)od(e,n),n=En(n.nextSibling)}if(ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){_t=En(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}_t=null}}else _t=Et?En(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=_t;e;)e=En(e.nextSibling)}function Tr(){_t=Et=null,qe=!1}function ms(e){Bt===null?Bt=[e]:Bt.push(e)}var _0=G.ReactCurrentBatchConfig;function xa(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var i=r.stateNode}if(!i)throw Error(s(147,e));var c=i,d=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===d?n.ref:(n=function(p){var S=c.refs;p===null?delete S[d]:S[d]=p},n._stringRef=d,n)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function bi(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function dd(e){var n=e._init;return n(e._payload)}function ud(e){function n(L,_){if(e){var F=L.deletions;F===null?(L.deletions=[_],L.flags|=16):F.push(_)}}function r(L,_){if(!e)return null;for(;_!==null;)n(L,_),_=_.sibling;return null}function i(L,_){for(L=new Map;_!==null;)_.key!==null?L.set(_.key,_):L.set(_.index,_),_=_.sibling;return L}function c(L,_){return L=$n(L,_),L.index=0,L.sibling=null,L}function d(L,_,F){return L.index=F,e?(F=L.alternate,F!==null?(F=F.index,F<_?(L.flags|=2,_):F):(L.flags|=2,_)):(L.flags|=1048576,_)}function p(L){return e&&L.alternate===null&&(L.flags|=2),L}function S(L,_,F,pe){return _===null||_.tag!==6?(_=rl(F,L.mode,pe),_.return=L,_):(_=c(_,F),_.return=L,_)}function T(L,_,F,pe){var Se=F.type;return Se===q?oe(L,_,F.props.children,pe,F.key):_!==null&&(_.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===he&&dd(Se)===_.type)?(pe=c(_,F.props),pe.ref=xa(L,_,F),pe.return=L,pe):(pe=Yi(F.type,F.key,F.props,null,L.mode,pe),pe.ref=xa(L,_,F),pe.return=L,pe)}function R(L,_,F,pe){return _===null||_.tag!==4||_.stateNode.containerInfo!==F.containerInfo||_.stateNode.implementation!==F.implementation?(_=al(F,L.mode,pe),_.return=L,_):(_=c(_,F.children||[]),_.return=L,_)}function oe(L,_,F,pe,Se){return _===null||_.tag!==7?(_=ir(F,L.mode,pe,Se),_.return=L,_):(_=c(_,F),_.return=L,_)}function ce(L,_,F){if(typeof _=="string"&&_!==""||typeof _=="number")return _=rl(""+_,L.mode,F),_.return=L,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case te:return F=Yi(_.type,_.key,_.props,null,L.mode,F),F.ref=xa(L,null,_),F.return=L,F;case de:return _=al(_,L.mode,F),_.return=L,_;case he:var pe=_._init;return ce(L,pe(_._payload),F)}if(ie(_)||X(_))return _=ir(_,L.mode,F,null),_.return=L,_;bi(L,_)}return null}function ae(L,_,F,pe){var Se=_!==null?_.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return Se!==null?null:S(L,_,""+F,pe);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case te:return F.key===Se?T(L,_,F,pe):null;case de:return F.key===Se?R(L,_,F,pe):null;case he:return Se=F._init,ae(L,_,Se(F._payload),pe)}if(ie(F)||X(F))return Se!==null?null:oe(L,_,F,pe,null);bi(L,F)}return null}function ye(L,_,F,pe,Se){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return L=L.get(F)||null,S(_,L,""+pe,Se);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case te:return L=L.get(pe.key===null?F:pe.key)||null,T(_,L,pe,Se);case de:return L=L.get(pe.key===null?F:pe.key)||null,R(_,L,pe,Se);case he:var Ee=pe._init;return ye(L,_,F,Ee(pe._payload),Se)}if(ie(pe)||X(pe))return L=L.get(F)||null,oe(_,L,pe,Se,null);bi(_,pe)}return null}function ke(L,_,F,pe){for(var Se=null,Ee=null,_e=_,Ae=_=0,st=null;_e!==null&&Ae<F.length;Ae++){_e.index>Ae?(st=_e,_e=null):st=_e.sibling;var $e=ae(L,_e,F[Ae],pe);if($e===null){_e===null&&(_e=st);break}e&&_e&&$e.alternate===null&&n(L,_e),_=d($e,_,Ae),Ee===null?Se=$e:Ee.sibling=$e,Ee=$e,_e=st}if(Ae===F.length)return r(L,_e),qe&&Xn(L,Ae),Se;if(_e===null){for(;Ae<F.length;Ae++)_e=ce(L,F[Ae],pe),_e!==null&&(_=d(_e,_,Ae),Ee===null?Se=_e:Ee.sibling=_e,Ee=_e);return qe&&Xn(L,Ae),Se}for(_e=i(L,_e);Ae<F.length;Ae++)st=ye(_e,L,Ae,F[Ae],pe),st!==null&&(e&&st.alternate!==null&&_e.delete(st.key===null?Ae:st.key),_=d(st,_,Ae),Ee===null?Se=st:Ee.sibling=st,Ee=st);return e&&_e.forEach(function(Hn){return n(L,Hn)}),qe&&Xn(L,Ae),Se}function Ne(L,_,F,pe){var Se=X(F);if(typeof Se!="function")throw Error(s(150));if(F=Se.call(F),F==null)throw Error(s(151));for(var Ee=Se=null,_e=_,Ae=_=0,st=null,$e=F.next();_e!==null&&!$e.done;Ae++,$e=F.next()){_e.index>Ae?(st=_e,_e=null):st=_e.sibling;var Hn=ae(L,_e,$e.value,pe);if(Hn===null){_e===null&&(_e=st);break}e&&_e&&Hn.alternate===null&&n(L,_e),_=d(Hn,_,Ae),Ee===null?Se=Hn:Ee.sibling=Hn,Ee=Hn,_e=st}if($e.done)return r(L,_e),qe&&Xn(L,Ae),Se;if(_e===null){for(;!$e.done;Ae++,$e=F.next())$e=ce(L,$e.value,pe),$e!==null&&(_=d($e,_,Ae),Ee===null?Se=$e:Ee.sibling=$e,Ee=$e);return qe&&Xn(L,Ae),Se}for(_e=i(L,_e);!$e.done;Ae++,$e=F.next())$e=ye(_e,L,Ae,$e.value,pe),$e!==null&&(e&&$e.alternate!==null&&_e.delete($e.key===null?Ae:$e.key),_=d($e,_,Ae),Ee===null?Se=$e:Ee.sibling=$e,Ee=$e);return e&&_e.forEach(function(cp){return n(L,cp)}),qe&&Xn(L,Ae),Se}function Ze(L,_,F,pe){if(typeof F=="object"&&F!==null&&F.type===q&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case te:e:{for(var Se=F.key,Ee=_;Ee!==null;){if(Ee.key===Se){if(Se=F.type,Se===q){if(Ee.tag===7){r(L,Ee.sibling),_=c(Ee,F.props.children),_.return=L,L=_;break e}}else if(Ee.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===he&&dd(Se)===Ee.type){r(L,Ee.sibling),_=c(Ee,F.props),_.ref=xa(L,Ee,F),_.return=L,L=_;break e}r(L,Ee);break}else n(L,Ee);Ee=Ee.sibling}F.type===q?(_=ir(F.props.children,L.mode,pe,F.key),_.return=L,L=_):(pe=Yi(F.type,F.key,F.props,null,L.mode,pe),pe.ref=xa(L,_,F),pe.return=L,L=pe)}return p(L);case de:e:{for(Ee=F.key;_!==null;){if(_.key===Ee)if(_.tag===4&&_.stateNode.containerInfo===F.containerInfo&&_.stateNode.implementation===F.implementation){r(L,_.sibling),_=c(_,F.children||[]),_.return=L,L=_;break e}else{r(L,_);break}else n(L,_);_=_.sibling}_=al(F,L.mode,pe),_.return=L,L=_}return p(L);case he:return Ee=F._init,Ze(L,_,Ee(F._payload),pe)}if(ie(F))return ke(L,_,F,pe);if(X(F))return Ne(L,_,F,pe);bi(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,_!==null&&_.tag===6?(r(L,_.sibling),_=c(_,F),_.return=L,L=_):(r(L,_),_=rl(F,L.mode,pe),_.return=L,L=_),p(L)):r(L,_)}return Ze}var Er=ud(!0),md=ud(!1),yi=_n(null),wi=null,_r=null,hs=null;function ps(){hs=_r=wi=null}function gs(e){var n=yi.current;Ve(yi),e._currentValue=n}function fs(e,n,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===r)break;e=e.return}}function Mr(e,n){wi=e,hs=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(kt=!0),e.firstContext=null)}function Dt(e){var n=e._currentValue;if(hs!==e)if(e={context:e,memoizedValue:n,next:null},_r===null){if(wi===null)throw Error(s(308));_r=e,wi.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return n}var Jn=null;function xs(e){Jn===null?Jn=[e]:Jn.push(e)}function hd(e,n,r,i){var c=n.interleaved;return c===null?(r.next=r,xs(n)):(r.next=c.next,c.next=r),n.interleaved=r,hn(e,i)}function hn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Pn=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function An(e,n,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var c=i.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),i.pending=n,hn(e,r)}return c=i.interleaved,c===null?(n.next=n,xs(i)):(n.next=c.next,c.next=n),i.interleaved=n,hn(e,r)}function vi(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,Lo(e,r)}}function gd(e,n){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?c=d=p:d=d.next=p,r=r.next}while(r!==null);d===null?c=d=n:d=d.next=n}else c=d=n;r={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function ki(e,n,r,i){var c=e.updateQueue;Pn=!1;var d=c.firstBaseUpdate,p=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var T=S,R=T.next;T.next=null,p===null?d=R:p.next=R,p=T;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,S=oe.lastBaseUpdate,S!==p&&(S===null?oe.firstBaseUpdate=R:S.next=R,oe.lastBaseUpdate=T))}if(d!==null){var ce=c.baseState;p=0,oe=R=T=null,S=d;do{var ae=S.lane,ye=S.eventTime;if((i&ae)===ae){oe!==null&&(oe=oe.next={eventTime:ye,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ke=e,Ne=S;switch(ae=n,ye=r,Ne.tag){case 1:if(ke=Ne.payload,typeof ke=="function"){ce=ke.call(ye,ce,ae);break e}ce=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Ne.payload,ae=typeof ke=="function"?ke.call(ye,ce,ae):ke,ae==null)break e;ce=Z({},ce,ae);break e;case 2:Pn=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,ae=c.effects,ae===null?c.effects=[S]:ae.push(S))}else ye={eventTime:ye,lane:ae,tag:S.tag,payload:S.payload,callback:S.callback,next:null},oe===null?(R=oe=ye,T=ce):oe=oe.next=ye,p|=ae;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;ae=S,S=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);if(oe===null&&(T=ce),c.baseState=T,c.firstBaseUpdate=R,c.lastBaseUpdate=oe,n=c.shared.interleaved,n!==null){c=n;do p|=c.lane,c=c.next;while(c!==n)}else d===null&&(c.shared.lanes=0);tr|=p,e.lanes=p,e.memoizedState=ce}}function fd(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],c=i.callback;if(c!==null){if(i.callback=null,i=r,typeof c!="function")throw Error(s(191,c));c.call(i)}}}var ba={},tn=_n(ba),ya=_n(ba),wa=_n(ba);function Zn(e){if(e===ba)throw Error(s(174));return e}function ys(e,n){switch(Ue(wa,n),Ue(ya,e),Ue(tn,ba),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:kn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=kn(n,e)}Ve(tn),Ue(tn,n)}function Lr(){Ve(tn),Ve(ya),Ve(wa)}function xd(e){Zn(wa.current);var n=Zn(tn.current),r=kn(n,e.type);n!==r&&(Ue(ya,e),Ue(tn,r))}function ws(e){ya.current===e&&(Ve(tn),Ve(ya))}var Ge=_n(0);function ji(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vs=[];function ks(){for(var e=0;e<vs.length;e++)vs[e]._workInProgressVersionPrimary=null;vs.length=0}var Ni=G.ReactCurrentDispatcher,js=G.ReactCurrentBatchConfig,er=0,We=null,nt=null,it=null,Si=!1,va=!1,ka=0,M0=0;function ht(){throw Error(s(321))}function Ns(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Yt(e[r],n[r]))return!1;return!0}function Ss(e,n,r,i,c,d){if(er=d,We=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ni.current=e===null||e.memoizedState===null?F0:D0,e=r(i,c),va){d=0;do{if(va=!1,ka=0,25<=d)throw Error(s(301));d+=1,it=nt=null,n.updateQueue=null,Ni.current=I0,e=r(i,c)}while(va)}if(Ni.current=Ti,n=nt!==null&&nt.next!==null,er=0,it=nt=We=null,Si=!1,n)throw Error(s(300));return e}function Cs(){var e=ka!==0;return ka=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?We.memoizedState=it=e:it=it.next=e,it}function It(){if(nt===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var n=it===null?We.memoizedState:it.next;if(n!==null)it=n,nt=e;else{if(e===null)throw Error(s(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},it===null?We.memoizedState=it=e:it=it.next=e}return it}function ja(e,n){return typeof n=="function"?n(e):n}function zs(e){var n=It(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var i=nt,c=i.baseQueue,d=r.pending;if(d!==null){if(c!==null){var p=c.next;c.next=d.next,d.next=p}i.baseQueue=c=d,r.pending=null}if(c!==null){d=c.next,i=i.baseState;var S=p=null,T=null,R=d;do{var oe=R.lane;if((er&oe)===oe)T!==null&&(T=T.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),i=R.hasEagerState?R.eagerState:e(i,R.action);else{var ce={lane:oe,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};T===null?(S=T=ce,p=i):T=T.next=ce,We.lanes|=oe,tr|=oe}R=R.next}while(R!==null&&R!==d);T===null?p=i:T.next=S,Yt(i,n.memoizedState)||(kt=!0),n.memoizedState=i,n.baseState=p,n.baseQueue=T,r.lastRenderedState=i}if(e=r.interleaved,e!==null){c=e;do d=c.lane,We.lanes|=d,tr|=d,c=c.next;while(c!==e)}else c===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Ts(e){var n=It(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var i=r.dispatch,c=r.pending,d=n.memoizedState;if(c!==null){r.pending=null;var p=c=c.next;do d=e(d,p.action),p=p.next;while(p!==c);Yt(d,n.memoizedState)||(kt=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,i]}function bd(){}function yd(e,n){var r=We,i=It(),c=n(),d=!Yt(i.memoizedState,c);if(d&&(i.memoizedState=c,kt=!0),i=i.queue,Es(kd.bind(null,r,i,e),[e]),i.getSnapshot!==n||d||it!==null&&it.memoizedState.tag&1){if(r.flags|=2048,Na(9,vd.bind(null,r,i,c,n),void 0,null),ot===null)throw Error(s(349));(er&30)!==0||wd(r,n,c)}return c}function wd(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=We.updateQueue,n===null?(n={lastEffect:null,stores:null},We.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function vd(e,n,r,i){n.value=r,n.getSnapshot=i,jd(n)&&Nd(e)}function kd(e,n,r){return r(function(){jd(n)&&Nd(e)})}function jd(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Yt(e,r)}catch{return!0}}function Nd(e){var n=hn(e,1);n!==null&&qt(n,e,1,-1)}function Sd(e){var n=nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:e},n.queue=e,e=e.dispatch=A0.bind(null,We,e),[n.memoizedState,e]}function Na(e,n,r,i){return e={tag:e,create:n,destroy:r,deps:i,next:null},n=We.updateQueue,n===null?(n={lastEffect:null,stores:null},We.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,n.lastEffect=e)),e}function Cd(){return It().memoizedState}function Ci(e,n,r,i){var c=nn();We.flags|=e,c.memoizedState=Na(1|n,r,void 0,i===void 0?null:i)}function zi(e,n,r,i){var c=It();i=i===void 0?null:i;var d=void 0;if(nt!==null){var p=nt.memoizedState;if(d=p.destroy,i!==null&&Ns(i,p.deps)){c.memoizedState=Na(n,r,d,i);return}}We.flags|=e,c.memoizedState=Na(1|n,r,d,i)}function zd(e,n){return Ci(8390656,8,e,n)}function Es(e,n){return zi(2048,8,e,n)}function Td(e,n){return zi(4,2,e,n)}function Ed(e,n){return zi(4,4,e,n)}function _d(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Md(e,n,r){return r=r!=null?r.concat([e]):null,zi(4,4,_d.bind(null,n,e),r)}function _s(){}function Ld(e,n){var r=It();n=n===void 0?null:n;var i=r.memoizedState;return i!==null&&n!==null&&Ns(n,i[1])?i[0]:(r.memoizedState=[e,n],e)}function Pd(e,n){var r=It();n=n===void 0?null:n;var i=r.memoizedState;return i!==null&&n!==null&&Ns(n,i[1])?i[0]:(e=e(),r.memoizedState=[e,n],e)}function Ad(e,n,r){return(er&21)===0?(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=r):(Yt(r,n)||(r=dc(),We.lanes|=r,tr|=r,e.baseState=!0),n)}function L0(e,n){var r=He;He=r!==0&&4>r?r:4,e(!0);var i=js.transition;js.transition={};try{e(!1),n()}finally{He=r,js.transition=i}}function Fd(){return It().memoizedState}function P0(e,n,r){var i=On(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Dd(e))Id(n,r);else if(r=hd(e,n,r,i),r!==null){var c=yt();qt(r,e,i,c),Od(r,n,i)}}function A0(e,n,r){var i=On(e),c={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))Id(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var p=n.lastRenderedState,S=d(p,r);if(c.hasEagerState=!0,c.eagerState=S,Yt(S,p)){var T=n.interleaved;T===null?(c.next=c,xs(n)):(c.next=T.next,T.next=c),n.interleaved=c;return}}catch{}finally{}r=hd(e,n,c,i),r!==null&&(c=yt(),qt(r,e,i,c),Od(r,n,i))}}function Dd(e){var n=e.alternate;return e===We||n!==null&&n===We}function Id(e,n){va=Si=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Od(e,n,r){if((r&4194240)!==0){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,Lo(e,r)}}var Ti={readContext:Dt,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},F0={readContext:Dt,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:Dt,useEffect:zd,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Ci(4194308,4,_d.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Ci(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ci(4,2,e,n)},useMemo:function(e,n){var r=nn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var i=nn();return n=r!==void 0?r(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=P0.bind(null,We,e),[i.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:Sd,useDebugValue:_s,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Sd(!1),n=e[0];return e=L0.bind(null,e[1]),nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var i=We,c=nn();if(qe){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),ot===null)throw Error(s(349));(er&30)!==0||wd(i,n,r)}c.memoizedState=r;var d={value:r,getSnapshot:n};return c.queue=d,zd(kd.bind(null,i,d,e),[e]),i.flags|=2048,Na(9,vd.bind(null,i,d,r,n),void 0,null),r},useId:function(){var e=nn(),n=ot.identifierPrefix;if(qe){var r=mn,i=un;r=(i&~(1<<32-Ht(i)-1)).toString(32)+r,n=":"+n+"R"+r,r=ka++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=M0++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},D0={readContext:Dt,useCallback:Ld,useContext:Dt,useEffect:Es,useImperativeHandle:Md,useInsertionEffect:Td,useLayoutEffect:Ed,useMemo:Pd,useReducer:zs,useRef:Cd,useState:function(){return zs(ja)},useDebugValue:_s,useDeferredValue:function(e){var n=It();return Ad(n,nt.memoizedState,e)},useTransition:function(){var e=zs(ja)[0],n=It().memoizedState;return[e,n]},useMutableSource:bd,useSyncExternalStore:yd,useId:Fd,unstable_isNewReconciler:!1},I0={readContext:Dt,useCallback:Ld,useContext:Dt,useEffect:Es,useImperativeHandle:Md,useInsertionEffect:Td,useLayoutEffect:Ed,useMemo:Pd,useReducer:Ts,useRef:Cd,useState:function(){return Ts(ja)},useDebugValue:_s,useDeferredValue:function(e){var n=It();return nt===null?n.memoizedState=e:Ad(n,nt.memoizedState,e)},useTransition:function(){var e=Ts(ja)[0],n=It().memoizedState;return[e,n]},useMutableSource:bd,useSyncExternalStore:yd,useId:Fd,unstable_isNewReconciler:!1};function Ut(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Ms(e,n,r,i){n=e.memoizedState,r=r(i,n),r=r==null?n:Z({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ei={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var i=yt(),c=On(e),d=pn(i,c);d.payload=n,r!=null&&(d.callback=r),n=An(e,d,c),n!==null&&(qt(n,e,c,i),vi(n,e,c))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var i=yt(),c=On(e),d=pn(i,c);d.tag=1,d.payload=n,r!=null&&(d.callback=r),n=An(e,d,c),n!==null&&(qt(n,e,c,i),vi(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=yt(),i=On(e),c=pn(r,i);c.tag=2,n!=null&&(c.callback=n),n=An(e,c,i),n!==null&&(qt(n,e,i,r),vi(n,e,i))}};function Rd(e,n,r,i,c,d,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,p):n.prototype&&n.prototype.isPureReactComponent?!da(r,i)||!da(c,d):!0}function $d(e,n,r){var i=!1,c=Mn,d=n.contextType;return typeof d=="object"&&d!==null?d=Dt(d):(c=vt(n)?Wn:mt.current,i=n.contextTypes,d=(i=i!=null)?Sr(e,c):Mn),n=new n(r,d),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ei,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),n}function Hd(e,n,r,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,i),n.state!==e&&Ei.enqueueReplaceState(n,n.state,null)}function Ls(e,n,r,i){var c=e.stateNode;c.props=r,c.state=e.memoizedState,c.refs={},bs(e);var d=n.contextType;typeof d=="object"&&d!==null?c.context=Dt(d):(d=vt(n)?Wn:mt.current,c.context=Sr(e,d)),c.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Ms(e,n,d,r),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(n=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),n!==c.state&&Ei.enqueueReplaceState(c,c.state,null),ki(e,r,c,i),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,n){try{var r="",i=n;do r+=me(i),i=i.return;while(i);var c=r}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:n,stack:c,digest:null}}function Ps(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function As(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function Yd(e,n,r){r=pn(-1,r),r.tag=3,r.payload={element:null};var i=n.value;return r.callback=function(){Di||(Di=!0,Ws=i),As(e,n)},r}function Bd(e,n,r){r=pn(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var c=n.value;r.payload=function(){return i(c)},r.callback=function(){As(e,n)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){As(e,n),typeof i!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})}),r}function Ud(e,n,r){var i=e.pingCache;if(i===null){i=e.pingCache=new O0;var c=new Set;i.set(n,c)}else c=i.get(n),c===void 0&&(c=new Set,i.set(n,c));c.has(r)||(c.add(r),e=J0.bind(null,e,n,r),n.then(e,e))}function Kd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Vd(e,n,r,i,c){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=pn(-1,1),n.tag=2,An(r,n,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var R0=G.ReactCurrentOwner,kt=!1;function bt(e,n,r,i){n.child=e===null?md(n,null,r,i):Er(n,e.child,r,i)}function qd(e,n,r,i,c){r=r.render;var d=n.ref;return Mr(n,c),i=Ss(e,n,r,i,d,c),r=Cs(),e!==null&&!kt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,gn(e,n,c)):(qe&&r&&ls(n),n.flags|=1,bt(e,n,i,c),n.child)}function Gd(e,n,r,i,c){if(e===null){var d=r.type;return typeof d=="function"&&!nl(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=d,Wd(e,n,d,i,c)):(e=Yi(r.type,null,i,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,(e.lanes&c)===0){var p=d.memoizedProps;if(r=r.compare,r=r!==null?r:da,r(p,i)&&e.ref===n.ref)return gn(e,n,c)}return n.flags|=1,e=$n(d,i),e.ref=n.ref,e.return=n,n.child=e}function Wd(e,n,r,i,c){if(e!==null){var d=e.memoizedProps;if(da(d,i)&&e.ref===n.ref)if(kt=!1,n.pendingProps=i=d,(e.lanes&c)!==0)(e.flags&131072)!==0&&(kt=!0);else return n.lanes=e.lanes,gn(e,n,c)}return Fs(e,n,r,i,c)}function Qd(e,n,r){var i=n.pendingProps,c=i.children,d=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(Fr,Mt),Mt|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ue(Fr,Mt),Mt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=d!==null?d.baseLanes:r,Ue(Fr,Mt),Mt|=i}else d!==null?(i=d.baseLanes|r,n.memoizedState=null):i=r,Ue(Fr,Mt),Mt|=i;return bt(e,n,c,r),n.child}function Xd(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Fs(e,n,r,i,c){var d=vt(r)?Wn:mt.current;return d=Sr(n,d),Mr(n,c),r=Ss(e,n,r,i,d,c),i=Cs(),e!==null&&!kt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,gn(e,n,c)):(qe&&i&&ls(n),n.flags|=1,bt(e,n,r,c),n.child)}function Jd(e,n,r,i,c){if(vt(r)){var d=!0;hi(n)}else d=!1;if(Mr(n,c),n.stateNode===null)Mi(e,n),$d(n,r,i),Ls(n,r,i,c),i=!0;else if(e===null){var p=n.stateNode,S=n.memoizedProps;p.props=S;var T=p.context,R=r.contextType;typeof R=="object"&&R!==null?R=Dt(R):(R=vt(r)?Wn:mt.current,R=Sr(n,R));var oe=r.getDerivedStateFromProps,ce=typeof oe=="function"||typeof p.getSnapshotBeforeUpdate=="function";ce||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==i||T!==R)&&Hd(n,p,i,R),Pn=!1;var ae=n.memoizedState;p.state=ae,ki(n,i,p,c),T=n.memoizedState,S!==i||ae!==T||wt.current||Pn?(typeof oe=="function"&&(Ms(n,r,oe,i),T=n.memoizedState),(S=Pn||Rd(n,r,S,i,ae,T,R))?(ce||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=T),p.props=i,p.state=T,p.context=R,i=S):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{p=n.stateNode,pd(e,n),S=n.memoizedProps,R=n.type===n.elementType?S:Ut(n.type,S),p.props=R,ce=n.pendingProps,ae=p.context,T=r.contextType,typeof T=="object"&&T!==null?T=Dt(T):(T=vt(r)?Wn:mt.current,T=Sr(n,T));var ye=r.getDerivedStateFromProps;(oe=typeof ye=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==ce||ae!==T)&&Hd(n,p,i,T),Pn=!1,ae=n.memoizedState,p.state=ae,ki(n,i,p,c);var ke=n.memoizedState;S!==ce||ae!==ke||wt.current||Pn?(typeof ye=="function"&&(Ms(n,r,ye,i),ke=n.memoizedState),(R=Pn||Rd(n,r,R,i,ae,ke,T)||!1)?(oe||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(i,ke,T),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(i,ke,T)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=ke),p.props=i,p.state=ke,p.context=T,i=R):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),i=!1)}return Ds(e,n,r,i,d,c)}function Ds(e,n,r,i,c,d){Xd(e,n);var p=(n.flags&128)!==0;if(!i&&!p)return c&&rd(n,r,!1),gn(e,n,d);i=n.stateNode,R0.current=n;var S=p&&typeof r.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&p?(n.child=Er(n,e.child,null,d),n.child=Er(n,null,S,d)):bt(e,n,S,d),n.memoizedState=i.state,c&&rd(n,r,!0),n.child}function Zd(e){var n=e.stateNode;n.pendingContext?td(e,n.pendingContext,n.pendingContext!==n.context):n.context&&td(e,n.context,!1),ys(e,n.containerInfo)}function eu(e,n,r,i,c){return Tr(),ms(c),n.flags|=256,bt(e,n,r,i),n.child}var Is={dehydrated:null,treeContext:null,retryLane:0};function Os(e){return{baseLanes:e,cachePool:null,transitions:null}}function tu(e,n,r){var i=n.pendingProps,c=Ge.current,d=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(c&2)!==0),S?(d=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ue(Ge,c&1),e===null)return us(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(p=i.children,e=i.fallback,d?(i=n.mode,d=n.child,p={mode:"hidden",children:p},(i&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=p):d=Bi(p,i,0,null),e=ir(e,i,r,null),d.return=n,e.return=n,d.sibling=e,n.child=d,n.child.memoizedState=Os(r),n.memoizedState=Is,e):Rs(n,p));if(c=e.memoizedState,c!==null&&(S=c.dehydrated,S!==null))return $0(e,n,p,i,S,c,r);if(d){d=i.fallback,p=n.mode,c=e.child,S=c.sibling;var T={mode:"hidden",children:i.children};return(p&1)===0&&n.child!==c?(i=n.child,i.childLanes=0,i.pendingProps=T,n.deletions=null):(i=$n(c,T),i.subtreeFlags=c.subtreeFlags&14680064),S!==null?d=$n(S,d):(d=ir(d,p,r,null),d.flags|=2),d.return=n,i.return=n,i.sibling=d,n.child=i,i=d,d=n.child,p=e.child.memoizedState,p=p===null?Os(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},d.memoizedState=p,d.childLanes=e.childLanes&~r,n.memoizedState=Is,i}return d=e.child,e=d.sibling,i=$n(d,{mode:"visible",children:i.children}),(n.mode&1)===0&&(i.lanes=r),i.return=n,i.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=i,n.memoizedState=null,i}function Rs(e,n){return n=Bi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _i(e,n,r,i){return i!==null&&ms(i),Er(n,e.child,null,r),e=Rs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $0(e,n,r,i,c,d,p){if(r)return n.flags&256?(n.flags&=-257,i=Ps(Error(s(422))),_i(e,n,p,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(d=i.fallback,c=n.mode,i=Bi({mode:"visible",children:i.children},c,0,null),d=ir(d,c,p,null),d.flags|=2,i.return=n,d.return=n,i.sibling=d,n.child=i,(n.mode&1)!==0&&Er(n,e.child,null,p),n.child.memoizedState=Os(p),n.memoizedState=Is,d);if((n.mode&1)===0)return _i(e,n,p,null);if(c.data==="$!"){if(i=c.nextSibling&&c.nextSibling.dataset,i)var S=i.dgst;return i=S,d=Error(s(419)),i=Ps(d,i,void 0),_i(e,n,p,i)}if(S=(p&e.childLanes)!==0,kt||S){if(i=ot,i!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(i.suspendedLanes|p))!==0?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,hn(e,c),qt(i,e,c,-1))}return tl(),i=Ps(Error(s(421))),_i(e,n,p,i)}return c.data==="$?"?(n.flags|=128,n.child=e.child,n=Z0.bind(null,e),c._reactRetry=n,null):(e=d.treeContext,_t=En(c.nextSibling),Et=n,qe=!0,Bt=null,e!==null&&(At[Ft++]=un,At[Ft++]=mn,At[Ft++]=Qn,un=e.id,mn=e.overflow,Qn=n),n=Rs(n,i.children),n.flags|=4096,n)}function nu(e,n,r){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),fs(e.return,n,r)}function $s(e,n,r,i,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=r,d.tailMode=c)}function ru(e,n,r){var i=n.pendingProps,c=i.revealOrder,d=i.tail;if(bt(e,n,i.children,r),i=Ge.current,(i&2)!==0)i=i&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,r,n);else if(e.tag===19)nu(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ue(Ge,i),(n.mode&1)===0)n.memoizedState=null;else switch(c){case"forwards":for(r=n.child,c=null;r!==null;)e=r.alternate,e!==null&&ji(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),$s(n,!1,c,r,d);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ji(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}$s(n,!0,r,null,d);break;case"together":$s(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Mi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),tr|=n.lanes,(r&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,r=$n(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=$n(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function H0(e,n,r){switch(n.tag){case 3:Zd(n),Tr();break;case 5:xd(n);break;case 1:vt(n.type)&&hi(n);break;case 4:ys(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,c=n.memoizedProps.value;Ue(yi,i._currentValue),i._currentValue=c;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(Ue(Ge,Ge.current&1),n.flags|=128,null):(r&n.child.childLanes)!==0?tu(e,n,r):(Ue(Ge,Ge.current&1),e=gn(e,n,r),e!==null?e.sibling:null);Ue(Ge,Ge.current&1);break;case 19:if(i=(r&n.childLanes)!==0,(e.flags&128)!==0){if(i)return ru(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ue(Ge,Ge.current),i)break;return null;case 22:case 23:return n.lanes=0,Qd(e,n,r)}return gn(e,n,r)}var au,Hs,iu,ou;au=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Hs=function(){},iu=function(e,n,r,i){var c=e.memoizedProps;if(c!==i){e=n.stateNode,Zn(tn.current);var d=null;switch(r){case"input":c=D(e,c),i=D(e,i),d=[];break;case"select":c=Z({},c,{value:void 0}),i=Z({},i,{value:void 0}),d=[];break;case"textarea":c=ze(e,c),i=ze(e,i),d=[];break;default:typeof c.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=di)}vo(r,i);var p;r=null;for(R in c)if(!i.hasOwnProperty(R)&&c.hasOwnProperty(R)&&c[R]!=null)if(R==="style"){var S=c[R];for(p in S)S.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(u.hasOwnProperty(R)?d||(d=[]):(d=d||[]).push(R,null));for(R in i){var T=i[R];if(S=c?.[R],i.hasOwnProperty(R)&&T!==S&&(T!=null||S!=null))if(R==="style")if(S){for(p in S)!S.hasOwnProperty(p)||T&&T.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in T)T.hasOwnProperty(p)&&S[p]!==T[p]&&(r||(r={}),r[p]=T[p])}else r||(d||(d=[]),d.push(R,r)),r=T;else R==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,S=S?S.__html:void 0,T!=null&&S!==T&&(d=d||[]).push(R,T)):R==="children"?typeof T!="string"&&typeof T!="number"||(d=d||[]).push(R,""+T):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(u.hasOwnProperty(R)?(T!=null&&R==="onScroll"&&Ke("scroll",e),d||S===T||(d=[])):(d=d||[]).push(R,T))}r&&(d=d||[]).push("style",r);var R=d;(n.updateQueue=R)&&(n.flags|=4)}},ou=function(e,n,r,i){r!==i&&(n.flags|=4)};function Sa(e,n){if(!qe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function pt(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,i|=c.subtreeFlags&14680064,i|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=r,n}function Y0(e,n,r){var i=n.pendingProps;switch(cs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(n),null;case 1:return vt(n.type)&&mi(),pt(n),null;case 3:return i=n.stateNode,Lr(),Ve(wt),Ve(mt),ks(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(xi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bt!==null&&(Js(Bt),Bt=null))),Hs(e,n),pt(n),null;case 5:ws(n);var c=Zn(wa.current);if(r=n.type,e!==null&&n.stateNode!=null)iu(e,n,r,i,c),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(s(166));return pt(n),null}if(e=Zn(tn.current),xi(n)){i=n.stateNode,r=n.type;var d=n.memoizedProps;switch(i[en]=n,i[ga]=d,e=(n.mode&1)!==0,r){case"dialog":Ke("cancel",i),Ke("close",i);break;case"iframe":case"object":case"embed":Ke("load",i);break;case"video":case"audio":for(c=0;c<ma.length;c++)Ke(ma[c],i);break;case"source":Ke("error",i);break;case"img":case"image":case"link":Ke("error",i),Ke("load",i);break;case"details":Ke("toggle",i);break;case"input":Q(i,d),Ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!d.multiple},Ke("invalid",i);break;case"textarea":Pe(i,d),Ke("invalid",i)}vo(r,d),c=null;for(var p in d)if(d.hasOwnProperty(p)){var S=d[p];p==="children"?typeof S=="string"?i.textContent!==S&&(d.suppressHydrationWarning!==!0&&ci(i.textContent,S,e),c=["children",S]):typeof S=="number"&&i.textContent!==""+S&&(d.suppressHydrationWarning!==!0&&ci(i.textContent,S,e),c=["children",""+S]):u.hasOwnProperty(p)&&S!=null&&p==="onScroll"&&Ke("scroll",i)}switch(r){case"input":Fe(i),Ce(i,d,!0);break;case"textarea":Fe(i),ut(i);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(i.onclick=di)}i=c,n.updateQueue=i,i!==null&&(n.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ln(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=p.createElement(r,{is:i.is}):(e=p.createElement(r),r==="select"&&(p=e,i.multiple?p.multiple=!0:i.size&&(p.size=i.size))):e=p.createElementNS(e,r),e[en]=n,e[ga]=i,au(e,n,!1,!1),n.stateNode=e;e:{switch(p=ko(r,i),r){case"dialog":Ke("cancel",e),Ke("close",e),c=i;break;case"iframe":case"object":case"embed":Ke("load",e),c=i;break;case"video":case"audio":for(c=0;c<ma.length;c++)Ke(ma[c],e);c=i;break;case"source":Ke("error",e),c=i;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),c=i;break;case"details":Ke("toggle",e),c=i;break;case"input":Q(e,i),c=D(e,i),Ke("invalid",e);break;case"option":c=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},c=Z({},i,{value:void 0}),Ke("invalid",e);break;case"textarea":Pe(e,i),c=ze(e,i),Ke("invalid",e);break;default:c=i}vo(r,c),S=c;for(d in S)if(S.hasOwnProperty(d)){var T=S[d];d==="style"?Wl(e,T):d==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Ya(e,T)):d==="children"?typeof T=="string"?(r!=="textarea"||T!=="")&&Jt(e,T):typeof T=="number"&&Jt(e,""+T):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(u.hasOwnProperty(d)?T!=null&&d==="onScroll"&&Ke("scroll",e):T!=null&&B(e,d,T,p))}switch(r){case"input":Fe(e),Ce(e,i,!1);break;case"textarea":Fe(e),ut(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Te(i.value));break;case"select":e.multiple=!!i.multiple,d=i.value,d!=null?we(e,!!i.multiple,d,!1):i.defaultValue!=null&&we(e,!!i.multiple,i.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=di)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pt(n),null;case 6:if(e&&n.stateNode!=null)ou(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(s(166));if(r=Zn(wa.current),Zn(tn.current),xi(n)){if(i=n.stateNode,r=n.memoizedProps,i[en]=n,(d=i.nodeValue!==r)&&(e=Et,e!==null))switch(e.tag){case 3:ci(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ci(i.nodeValue,r,(e.mode&1)!==0)}d&&(n.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[en]=n,n.stateNode=i}return pt(n),null;case 13:if(Ve(Ge),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&_t!==null&&(n.mode&1)!==0&&(n.flags&128)===0)cd(),Tr(),n.flags|=98560,d=!1;else if(d=xi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!d)throw Error(s(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[en]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pt(n),d=!1}else Bt!==null&&(Js(Bt),Bt=null),d=!0;if(!d)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=r,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ge.current&1)!==0?rt===0&&(rt=3):tl())),n.updateQueue!==null&&(n.flags|=4),pt(n),null);case 4:return Lr(),Hs(e,n),e===null&&ha(n.stateNode.containerInfo),pt(n),null;case 10:return gs(n.type._context),pt(n),null;case 17:return vt(n.type)&&mi(),pt(n),null;case 19:if(Ve(Ge),d=n.memoizedState,d===null)return pt(n),null;if(i=(n.flags&128)!==0,p=d.rendering,p===null)if(i)Sa(d,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=ji(e),p!==null){for(n.flags|=128,Sa(d,!1),i=p.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=r,r=n.child;r!==null;)d=r,e=i,d.flags&=14680066,p=d.alternate,p===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=p.childLanes,d.lanes=p.lanes,d.child=p.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=p.memoizedProps,d.memoizedState=p.memoizedState,d.updateQueue=p.updateQueue,d.type=p.type,e=p.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ue(Ge,Ge.current&1|2),n.child}e=e.sibling}d.tail!==null&&Je()>Dr&&(n.flags|=128,i=!0,Sa(d,!1),n.lanes=4194304)}else{if(!i)if(e=ji(p),e!==null){if(n.flags|=128,i=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),Sa(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!qe)return pt(n),null}else 2*Je()-d.renderingStartTime>Dr&&r!==1073741824&&(n.flags|=128,i=!0,Sa(d,!1),n.lanes=4194304);d.isBackwards?(p.sibling=n.child,n.child=p):(r=d.last,r!==null?r.sibling=p:n.child=p,d.last=p)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=Je(),n.sibling=null,r=Ge.current,Ue(Ge,i?r&1|2:r&1),n):(pt(n),null);case 22:case 23:return el(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&(n.mode&1)!==0?(Mt&1073741824)!==0&&(pt(n),n.subtreeFlags&6&&(n.flags|=8192)):pt(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function B0(e,n){switch(cs(n),n.tag){case 1:return vt(n.type)&&mi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lr(),Ve(wt),Ve(mt),ks(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ws(n),null;case 13:if(Ve(Ge),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ve(Ge),null;case 4:return Lr(),null;case 10:return gs(n.type._context),null;case 22:case 23:return el(),null;case 24:return null;default:return null}}var Li=!1,gt=!1,U0=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Ar(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Xe(e,n,i)}else r.current=null}function Ys(e,n,r){try{r()}catch(i){Xe(e,n,i)}}var su=!1;function K0(e,n){if(es=Ja,e=Rc(),Vo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var c=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var p=0,S=-1,T=-1,R=0,oe=0,ce=e,ae=null;t:for(;;){for(var ye;ce!==r||c!==0&&ce.nodeType!==3||(S=p+c),ce!==d||i!==0&&ce.nodeType!==3||(T=p+i),ce.nodeType===3&&(p+=ce.nodeValue.length),(ye=ce.firstChild)!==null;)ae=ce,ce=ye;for(;;){if(ce===e)break t;if(ae===r&&++R===c&&(S=p),ae===d&&++oe===i&&(T=p),(ye=ce.nextSibling)!==null)break;ce=ae,ae=ce.parentNode}ce=ye}r=S===-1||T===-1?null:{start:S,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(ts={focusedElem:e,selectionRange:r},Ja=!1,ve=n;ve!==null;)if(n=ve,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ve=e;else for(;ve!==null;){n=ve;try{var ke=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Ne=ke.memoizedProps,Ze=ke.memoizedState,L=n.stateNode,_=L.getSnapshotBeforeUpdate(n.elementType===n.type?Ne:Ut(n.type,Ne),Ze);L.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var F=n.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(pe){Xe(n,n.return,pe)}if(e=n.sibling,e!==null){e.return=n.return,ve=e;break}ve=n.return}return ke=su,su=!1,ke}function Ca(e,n,r){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var c=i=i.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&Ys(n,r,d)}c=c.next}while(c!==i)}}function Pi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==n)}}function Bs(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function lu(e){var n=e.alternate;n!==null&&(e.alternate=null,lu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[ga],delete n[is],delete n[z0],delete n[T0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cu(e){return e.tag===5||e.tag===3||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=di));else if(i!==4&&(e=e.child,e!==null))for(Us(e,n,r),e=e.sibling;e!==null;)Us(e,n,r),e=e.sibling}function Ks(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ks(e,n,r),e=e.sibling;e!==null;)Ks(e,n,r),e=e.sibling}var lt=null,Kt=!1;function Fn(e,n,r){for(r=r.child;r!==null;)uu(e,n,r),r=r.sibling}function uu(e,n,r){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Va,r)}catch{}switch(r.tag){case 5:gt||Ar(r,n);case 6:var i=lt,c=Kt;lt=null,Fn(e,n,r),lt=i,Kt=c,lt!==null&&(Kt?(e=lt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):lt.removeChild(r.stateNode));break;case 18:lt!==null&&(Kt?(e=lt,r=r.stateNode,e.nodeType===8?as(e.parentNode,r):e.nodeType===1&&as(e,r),aa(e)):as(lt,r.stateNode));break;case 4:i=lt,c=Kt,lt=r.stateNode.containerInfo,Kt=!0,Fn(e,n,r),lt=i,Kt=c;break;case 0:case 11:case 14:case 15:if(!gt&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){c=i=i.next;do{var d=c,p=d.destroy;d=d.tag,p!==void 0&&((d&2)!==0||(d&4)!==0)&&Ys(r,n,p),c=c.next}while(c!==i)}Fn(e,n,r);break;case 1:if(!gt&&(Ar(r,n),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(S){Xe(r,n,S)}Fn(e,n,r);break;case 21:Fn(e,n,r);break;case 22:r.mode&1?(gt=(i=gt)||r.memoizedState!==null,Fn(e,n,r),gt=i):Fn(e,n,r);break;default:Fn(e,n,r)}}function mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new U0),n.forEach(function(i){var c=ep.bind(null,e,i);r.has(i)||(r.add(i),i.then(c,c))})}}function Vt(e,n){var r=n.deletions;if(r!==null)for(var i=0;i<r.length;i++){var c=r[i];try{var d=e,p=n,S=p;e:for(;S!==null;){switch(S.tag){case 5:lt=S.stateNode,Kt=!1;break e;case 3:lt=S.stateNode.containerInfo,Kt=!0;break e;case 4:lt=S.stateNode.containerInfo,Kt=!0;break e}S=S.return}if(lt===null)throw Error(s(160));uu(d,p,c),lt=null,Kt=!1;var T=c.alternate;T!==null&&(T.return=null),c.return=null}catch(R){Xe(c,n,R)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)hu(n,e),n=n.sibling}function hu(e,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(n,e),rn(e),i&4){try{Ca(3,e,e.return),Pi(3,e)}catch(Ne){Xe(e,e.return,Ne)}try{Ca(5,e,e.return)}catch(Ne){Xe(e,e.return,Ne)}}break;case 1:Vt(n,e),rn(e),i&512&&r!==null&&Ar(r,r.return);break;case 5:if(Vt(n,e),rn(e),i&512&&r!==null&&Ar(r,r.return),e.flags&32){var c=e.stateNode;try{Jt(c,"")}catch(Ne){Xe(e,e.return,Ne)}}if(i&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,p=r!==null?r.memoizedProps:d,S=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{S==="input"&&d.type==="radio"&&d.name!=null&&re(c,d),ko(S,p);var R=ko(S,d);for(p=0;p<T.length;p+=2){var oe=T[p],ce=T[p+1];oe==="style"?Wl(c,ce):oe==="dangerouslySetInnerHTML"?Ya(c,ce):oe==="children"?Jt(c,ce):B(c,oe,ce,R)}switch(S){case"input":ee(c,d);break;case"textarea":Be(c,d);break;case"select":var ae=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var ye=d.value;ye!=null?we(c,!!d.multiple,ye,!1):ae!==!!d.multiple&&(d.defaultValue!=null?we(c,!!d.multiple,d.defaultValue,!0):we(c,!!d.multiple,d.multiple?[]:"",!1))}c[ga]=d}catch(Ne){Xe(e,e.return,Ne)}}break;case 6:if(Vt(n,e),rn(e),i&4){if(e.stateNode===null)throw Error(s(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(Ne){Xe(e,e.return,Ne)}}break;case 3:if(Vt(n,e),rn(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{aa(n.containerInfo)}catch(Ne){Xe(e,e.return,Ne)}break;case 4:Vt(n,e),rn(e);break;case 13:Vt(n,e),rn(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(Gs=Je())),i&4&&mu(e);break;case 22:if(oe=r!==null&&r.memoizedState!==null,e.mode&1?(gt=(R=gt)||oe,Vt(n,e),gt=R):Vt(n,e),rn(e),i&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!oe&&(e.mode&1)!==0)for(ve=e,oe=e.child;oe!==null;){for(ce=ve=oe;ve!==null;){switch(ae=ve,ye=ae.child,ae.tag){case 0:case 11:case 14:case 15:Ca(4,ae,ae.return);break;case 1:Ar(ae,ae.return);var ke=ae.stateNode;if(typeof ke.componentWillUnmount=="function"){i=ae,r=ae.return;try{n=i,ke.props=n.memoizedProps,ke.state=n.memoizedState,ke.componentWillUnmount()}catch(Ne){Xe(i,r,Ne)}}break;case 5:Ar(ae,ae.return);break;case 22:if(ae.memoizedState!==null){fu(ce);continue}}ye!==null?(ye.return=ae,ve=ye):fu(ce)}oe=oe.sibling}e:for(oe=null,ce=e;;){if(ce.tag===5){if(oe===null){oe=ce;try{c=ce.stateNode,R?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(S=ce.stateNode,T=ce.memoizedProps.style,p=T!=null&&T.hasOwnProperty("display")?T.display:null,S.style.display=Gl("display",p))}catch(Ne){Xe(e,e.return,Ne)}}}else if(ce.tag===6){if(oe===null)try{ce.stateNode.nodeValue=R?"":ce.memoizedProps}catch(Ne){Xe(e,e.return,Ne)}}else if((ce.tag!==22&&ce.tag!==23||ce.memoizedState===null||ce===e)&&ce.child!==null){ce.child.return=ce,ce=ce.child;continue}if(ce===e)break e;for(;ce.sibling===null;){if(ce.return===null||ce.return===e)break e;oe===ce&&(oe=null),ce=ce.return}oe===ce&&(oe=null),ce.sibling.return=ce.return,ce=ce.sibling}}break;case 19:Vt(n,e),rn(e),i&4&&mu(e);break;case 21:break;default:Vt(n,e),rn(e)}}function rn(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(cu(r)){var i=r;break e}r=r.return}throw Error(s(160))}switch(i.tag){case 5:var c=i.stateNode;i.flags&32&&(Jt(c,""),i.flags&=-33);var d=du(e);Ks(e,d,c);break;case 3:case 4:var p=i.stateNode.containerInfo,S=du(e);Us(e,S,p);break;default:throw Error(s(161))}}catch(T){Xe(e,e.return,T)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function V0(e,n,r){ve=e,pu(e)}function pu(e,n,r){for(var i=(e.mode&1)!==0;ve!==null;){var c=ve,d=c.child;if(c.tag===22&&i){var p=c.memoizedState!==null||Li;if(!p){var S=c.alternate,T=S!==null&&S.memoizedState!==null||gt;S=Li;var R=gt;if(Li=p,(gt=T)&&!R)for(ve=c;ve!==null;)p=ve,T=p.child,p.tag===22&&p.memoizedState!==null?xu(c):T!==null?(T.return=p,ve=T):xu(c);for(;d!==null;)ve=d,pu(d),d=d.sibling;ve=c,Li=S,gt=R}gu(e)}else(c.subtreeFlags&8772)!==0&&d!==null?(d.return=c,ve=d):gu(e)}}function gu(e){for(;ve!==null;){var n=ve;if((n.flags&8772)!==0){var r=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:gt||Pi(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!gt)if(r===null)i.componentDidMount();else{var c=n.elementType===n.type?r.memoizedProps:Ut(n.type,r.memoizedProps);i.componentDidUpdate(c,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var d=n.updateQueue;d!==null&&fd(n,d,i);break;case 3:var p=n.updateQueue;if(p!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}fd(n,p,r)}break;case 5:var S=n.stateNode;if(r===null&&n.flags&4){r=S;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&r.focus();break;case"img":T.src&&(r.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var R=n.alternate;if(R!==null){var oe=R.memoizedState;if(oe!==null){var ce=oe.dehydrated;ce!==null&&aa(ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}gt||n.flags&512&&Bs(n)}catch(ae){Xe(n,n.return,ae)}}if(n===e){ve=null;break}if(r=n.sibling,r!==null){r.return=n.return,ve=r;break}ve=n.return}}function fu(e){for(;ve!==null;){var n=ve;if(n===e){ve=null;break}var r=n.sibling;if(r!==null){r.return=n.return,ve=r;break}ve=n.return}}function xu(e){for(;ve!==null;){var n=ve;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Pi(4,n)}catch(T){Xe(n,r,T)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var c=n.return;try{i.componentDidMount()}catch(T){Xe(n,c,T)}}var d=n.return;try{Bs(n)}catch(T){Xe(n,d,T)}break;case 5:var p=n.return;try{Bs(n)}catch(T){Xe(n,p,T)}}}catch(T){Xe(n,n.return,T)}if(n===e){ve=null;break}var S=n.sibling;if(S!==null){S.return=n.return,ve=S;break}ve=n.return}}var q0=Math.ceil,Ai=G.ReactCurrentDispatcher,Vs=G.ReactCurrentOwner,Ot=G.ReactCurrentBatchConfig,Re=0,ot=null,et=null,ct=0,Mt=0,Fr=_n(0),rt=0,za=null,tr=0,Fi=0,qs=0,Ta=null,jt=null,Gs=0,Dr=1/0,fn=null,Di=!1,Ws=null,Dn=null,Ii=!1,In=null,Oi=0,Ea=0,Qs=null,Ri=-1,$i=0;function yt(){return(Re&6)!==0?Je():Ri!==-1?Ri:Ri=Je()}function On(e){return(e.mode&1)===0?1:(Re&2)!==0&&ct!==0?ct&-ct:_0.transition!==null?($i===0&&($i=dc()),$i):(e=He,e!==0||(e=window.event,e=e===void 0?16:yc(e.type)),e)}function qt(e,n,r,i){if(50<Ea)throw Ea=0,Qs=null,Error(s(185));Zr(e,r,i),((Re&2)===0||e!==ot)&&(e===ot&&((Re&2)===0&&(Fi|=r),rt===4&&Rn(e,ct)),Nt(e,i),r===1&&Re===0&&(n.mode&1)===0&&(Dr=Je()+500,pi&&Ln()))}function Nt(e,n){var r=e.callbackNode;_h(e,n);var i=Wa(e,e===ot?ct:0);if(i===0)r!==null&&sc(r),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(r!=null&&sc(r),n===1)e.tag===0?E0(yu.bind(null,e)):ad(yu.bind(null,e)),S0(function(){(Re&6)===0&&Ln()}),r=null;else{switch(uc(i)){case 1:r=Eo;break;case 4:r=lc;break;case 16:r=Ka;break;case 536870912:r=cc;break;default:r=Ka}r=zu(r,bu.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function bu(e,n){if(Ri=-1,$i=0,(Re&6)!==0)throw Error(s(327));var r=e.callbackNode;if(Ir()&&e.callbackNode!==r)return null;var i=Wa(e,e===ot?ct:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||n)n=Hi(e,i);else{n=i;var c=Re;Re|=2;var d=vu();(ot!==e||ct!==n)&&(fn=null,Dr=Je()+500,rr(e,n));do try{Q0();break}catch(S){wu(e,S)}while(!0);ps(),Ai.current=d,Re=c,et!==null?n=0:(ot=null,ct=0,n=rt)}if(n!==0){if(n===2&&(c=_o(e),c!==0&&(i=c,n=Xs(e,c))),n===1)throw r=za,rr(e,0),Rn(e,i),Nt(e,Je()),r;if(n===6)Rn(e,i);else{if(c=e.current.alternate,(i&30)===0&&!G0(c)&&(n=Hi(e,i),n===2&&(d=_o(e),d!==0&&(i=d,n=Xs(e,d))),n===1))throw r=za,rr(e,0),Rn(e,i),Nt(e,Je()),r;switch(e.finishedWork=c,e.finishedLanes=i,n){case 0:case 1:throw Error(s(345));case 2:ar(e,jt,fn);break;case 3:if(Rn(e,i),(i&130023424)===i&&(n=Gs+500-Je(),10<n)){if(Wa(e,0)!==0)break;if(c=e.suspendedLanes,(c&i)!==i){yt(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=rs(ar.bind(null,e,jt,fn),n);break}ar(e,jt,fn);break;case 4:if(Rn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,c=-1;0<i;){var p=31-Ht(i);d=1<<p,p=n[p],p>c&&(c=p),i&=~d}if(i=c,i=Je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*q0(i/1960))-i,10<i){e.timeoutHandle=rs(ar.bind(null,e,jt,fn),i);break}ar(e,jt,fn);break;case 5:ar(e,jt,fn);break;default:throw Error(s(329))}}}return Nt(e,Je()),e.callbackNode===r?bu.bind(null,e):null}function Xs(e,n){var r=Ta;return e.current.memoizedState.isDehydrated&&(rr(e,n).flags|=256),e=Hi(e,n),e!==2&&(n=jt,jt=r,n!==null&&Js(n)),e}function Js(e){jt===null?jt=e:jt.push.apply(jt,e)}function G0(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var c=r[i],d=c.getSnapshot;c=c.value;try{if(!Yt(d(),c))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~qs,n&=~Fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Ht(n),i=1<<r;e[r]=-1,n&=~i}}function yu(e){if((Re&6)!==0)throw Error(s(327));Ir();var n=Wa(e,0);if((n&1)===0)return Nt(e,Je()),null;var r=Hi(e,n);if(e.tag!==0&&r===2){var i=_o(e);i!==0&&(n=i,r=Xs(e,i))}if(r===1)throw r=za,rr(e,0),Rn(e,n),Nt(e,Je()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ar(e,jt,fn),Nt(e,Je()),null}function Zs(e,n){var r=Re;Re|=1;try{return e(n)}finally{Re=r,Re===0&&(Dr=Je()+500,pi&&Ln())}}function nr(e){In!==null&&In.tag===0&&(Re&6)===0&&Ir();var n=Re;Re|=1;var r=Ot.transition,i=He;try{if(Ot.transition=null,He=1,e)return e()}finally{He=i,Ot.transition=r,Re=n,(Re&6)===0&&Ln()}}function el(){Mt=Fr.current,Ve(Fr)}function rr(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,N0(r)),et!==null)for(r=et.return;r!==null;){var i=r;switch(cs(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&mi();break;case 3:Lr(),Ve(wt),Ve(mt),ks();break;case 5:ws(i);break;case 4:Lr();break;case 13:Ve(Ge);break;case 19:Ve(Ge);break;case 10:gs(i.type._context);break;case 22:case 23:el()}r=r.return}if(ot=e,et=e=$n(e.current,null),ct=Mt=n,rt=0,za=null,qs=Fi=tr=0,jt=Ta=null,Jn!==null){for(n=0;n<Jn.length;n++)if(r=Jn[n],i=r.interleaved,i!==null){r.interleaved=null;var c=i.next,d=r.pending;if(d!==null){var p=d.next;d.next=c,i.next=p}r.pending=i}Jn=null}return e}function wu(e,n){do{var r=et;try{if(ps(),Ni.current=Ti,Si){for(var i=We.memoizedState;i!==null;){var c=i.queue;c!==null&&(c.pending=null),i=i.next}Si=!1}if(er=0,it=nt=We=null,va=!1,ka=0,Vs.current=null,r===null||r.return===null){rt=1,za=n,et=null;break}e:{var d=e,p=r.return,S=r,T=n;if(n=ct,S.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var R=T,oe=S,ce=oe.tag;if((oe.mode&1)===0&&(ce===0||ce===11||ce===15)){var ae=oe.alternate;ae?(oe.updateQueue=ae.updateQueue,oe.memoizedState=ae.memoizedState,oe.lanes=ae.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var ye=Kd(p);if(ye!==null){ye.flags&=-257,Vd(ye,p,S,d,n),ye.mode&1&&Ud(d,R,n),n=ye,T=R;var ke=n.updateQueue;if(ke===null){var Ne=new Set;Ne.add(T),n.updateQueue=Ne}else ke.add(T);break e}else{if((n&1)===0){Ud(d,R,n),tl();break e}T=Error(s(426))}}else if(qe&&S.mode&1){var Ze=Kd(p);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),Vd(Ze,p,S,d,n),ms(Pr(T,S));break e}}d=T=Pr(T,S),rt!==4&&(rt=2),Ta===null?Ta=[d]:Ta.push(d),d=p;do{switch(d.tag){case 3:d.flags|=65536,n&=-n,d.lanes|=n;var L=Yd(d,T,n);gd(d,L);break e;case 1:S=T;var _=d.type,F=d.stateNode;if((d.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Dn===null||!Dn.has(F)))){d.flags|=65536,n&=-n,d.lanes|=n;var pe=Bd(d,S,n);gd(d,pe);break e}}d=d.return}while(d!==null)}ju(r)}catch(Se){n=Se,et===r&&r!==null&&(et=r=r.return);continue}break}while(!0)}function vu(){var e=Ai.current;return Ai.current=Ti,e===null?Ti:e}function tl(){(rt===0||rt===3||rt===2)&&(rt=4),ot===null||(tr&268435455)===0&&(Fi&268435455)===0||Rn(ot,ct)}function Hi(e,n){var r=Re;Re|=2;var i=vu();(ot!==e||ct!==n)&&(fn=null,rr(e,n));do try{W0();break}catch(c){wu(e,c)}while(!0);if(ps(),Re=r,Ai.current=i,et!==null)throw Error(s(261));return ot=null,ct=0,rt}function W0(){for(;et!==null;)ku(et)}function Q0(){for(;et!==null&&!vh();)ku(et)}function ku(e){var n=Cu(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,n===null?ju(e):et=n,Vs.current=null}function ju(e){var n=e;do{var r=n.alternate;if(e=n.return,(n.flags&32768)===0){if(r=Y0(r,n,Mt),r!==null){et=r;return}}else{if(r=B0(r,n),r!==null){r.flags&=32767,et=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,et=null;return}}if(n=n.sibling,n!==null){et=n;return}et=n=e}while(n!==null);rt===0&&(rt=5)}function ar(e,n,r){var i=He,c=Ot.transition;try{Ot.transition=null,He=1,X0(e,n,r,i)}finally{Ot.transition=c,He=i}return null}function X0(e,n,r,i){do Ir();while(In!==null);if((Re&6)!==0)throw Error(s(327));r=e.finishedWork;var c=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(Mh(e,d),e===ot&&(et=ot=null,ct=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Ii||(Ii=!0,zu(Ka,function(){return Ir(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=Ot.transition,Ot.transition=null;var p=He;He=1;var S=Re;Re|=4,Vs.current=null,K0(e,r),hu(r,e),x0(ts),Ja=!!es,ts=es=null,e.current=r,V0(r),kh(),Re=S,He=p,Ot.transition=d}else e.current=r;if(Ii&&(Ii=!1,In=e,Oi=c),d=e.pendingLanes,d===0&&(Dn=null),Sh(r.stateNode),Nt(e,Je()),n!==null)for(i=e.onRecoverableError,r=0;r<n.length;r++)c=n[r],i(c.value,{componentStack:c.stack,digest:c.digest});if(Di)throw Di=!1,e=Ws,Ws=null,e;return(Oi&1)!==0&&e.tag!==0&&Ir(),d=e.pendingLanes,(d&1)!==0?e===Qs?Ea++:(Ea=0,Qs=e):Ea=0,Ln(),null}function Ir(){if(In!==null){var e=uc(Oi),n=Ot.transition,r=He;try{if(Ot.transition=null,He=16>e?16:e,In===null)var i=!1;else{if(e=In,In=null,Oi=0,(Re&6)!==0)throw Error(s(331));var c=Re;for(Re|=4,ve=e.current;ve!==null;){var d=ve,p=d.child;if((ve.flags&16)!==0){var S=d.deletions;if(S!==null){for(var T=0;T<S.length;T++){var R=S[T];for(ve=R;ve!==null;){var oe=ve;switch(oe.tag){case 0:case 11:case 15:Ca(8,oe,d)}var ce=oe.child;if(ce!==null)ce.return=oe,ve=ce;else for(;ve!==null;){oe=ve;var ae=oe.sibling,ye=oe.return;if(lu(oe),oe===R){ve=null;break}if(ae!==null){ae.return=ye,ve=ae;break}ve=ye}}}var ke=d.alternate;if(ke!==null){var Ne=ke.child;if(Ne!==null){ke.child=null;do{var Ze=Ne.sibling;Ne.sibling=null,Ne=Ze}while(Ne!==null)}}ve=d}}if((d.subtreeFlags&2064)!==0&&p!==null)p.return=d,ve=p;else e:for(;ve!==null;){if(d=ve,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Ca(9,d,d.return)}var L=d.sibling;if(L!==null){L.return=d.return,ve=L;break e}ve=d.return}}var _=e.current;for(ve=_;ve!==null;){p=ve;var F=p.child;if((p.subtreeFlags&2064)!==0&&F!==null)F.return=p,ve=F;else e:for(p=_;ve!==null;){if(S=ve,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Pi(9,S)}}catch(Se){Xe(S,S.return,Se)}if(S===p){ve=null;break e}var pe=S.sibling;if(pe!==null){pe.return=S.return,ve=pe;break e}ve=S.return}}if(Re=c,Ln(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Va,e)}catch{}i=!0}return i}finally{He=r,Ot.transition=n}}return!1}function Nu(e,n,r){n=Pr(r,n),n=Yd(e,n,1),e=An(e,n,1),n=yt(),e!==null&&(Zr(e,1,n),Nt(e,n))}function Xe(e,n,r){if(e.tag===3)Nu(e,e,r);else for(;n!==null;){if(n.tag===3){Nu(n,e,r);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dn===null||!Dn.has(i))){e=Pr(r,e),e=Bd(n,e,1),n=An(n,e,1),e=yt(),n!==null&&(Zr(n,1,e),Nt(n,e));break}}n=n.return}}function J0(e,n,r){var i=e.pingCache;i!==null&&i.delete(n),n=yt(),e.pingedLanes|=e.suspendedLanes&r,ot===e&&(ct&r)===r&&(rt===4||rt===3&&(ct&130023424)===ct&&500>Je()-Gs?rr(e,0):qs|=r),Nt(e,n)}function Su(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ga,Ga<<=1,(Ga&130023424)===0&&(Ga=4194304)));var r=yt();e=hn(e,n),e!==null&&(Zr(e,n,r),Nt(e,r))}function Z0(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Su(e,r)}function ep(e,n){var r=0;switch(e.tag){case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(s(314))}i!==null&&i.delete(n),Su(e,r)}var Cu;Cu=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||wt.current)kt=!0;else{if((e.lanes&r)===0&&(n.flags&128)===0)return kt=!1,H0(e,n,r);kt=(e.flags&131072)!==0}else kt=!1,qe&&(n.flags&1048576)!==0&&id(n,fi,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Mi(e,n),e=n.pendingProps;var c=Sr(n,mt.current);Mr(n,r),c=Ss(null,n,i,e,c,r);var d=Cs();return n.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,vt(i)?(d=!0,hi(n)):d=!1,n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,bs(n),c.updater=Ei,n.stateNode=c,c._reactInternals=n,Ls(n,i,e,r),n=Ds(null,n,i,!0,d,r)):(n.tag=0,qe&&d&&ls(n),bt(null,n,c,r),n=n.child),n;case 16:i=n.elementType;e:{switch(Mi(e,n),e=n.pendingProps,c=i._init,i=c(i._payload),n.type=i,c=n.tag=np(i),e=Ut(i,e),c){case 0:n=Fs(null,n,i,e,r);break e;case 1:n=Jd(null,n,i,e,r);break e;case 11:n=qd(null,n,i,e,r);break e;case 14:n=Gd(null,n,i,Ut(i.type,e),r);break e}throw Error(s(306,i,""))}return n;case 0:return i=n.type,c=n.pendingProps,c=n.elementType===i?c:Ut(i,c),Fs(e,n,i,c,r);case 1:return i=n.type,c=n.pendingProps,c=n.elementType===i?c:Ut(i,c),Jd(e,n,i,c,r);case 3:e:{if(Zd(n),e===null)throw Error(s(387));i=n.pendingProps,d=n.memoizedState,c=d.element,pd(e,n),ki(n,i,null,r);var p=n.memoizedState;if(i=p.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){c=Pr(Error(s(423)),n),n=eu(e,n,i,r,c);break e}else if(i!==c){c=Pr(Error(s(424)),n),n=eu(e,n,i,r,c);break e}else for(_t=En(n.stateNode.containerInfo.firstChild),Et=n,qe=!0,Bt=null,r=md(n,null,i,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Tr(),i===c){n=gn(e,n,r);break e}bt(e,n,i,r)}n=n.child}return n;case 5:return xd(n),e===null&&us(n),i=n.type,c=n.pendingProps,d=e!==null?e.memoizedProps:null,p=c.children,ns(i,c)?p=null:d!==null&&ns(i,d)&&(n.flags|=32),Xd(e,n),bt(e,n,p,r),n.child;case 6:return e===null&&us(n),null;case 13:return tu(e,n,r);case 4:return ys(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Er(n,null,i,r):bt(e,n,i,r),n.child;case 11:return i=n.type,c=n.pendingProps,c=n.elementType===i?c:Ut(i,c),qd(e,n,i,c,r);case 7:return bt(e,n,n.pendingProps,r),n.child;case 8:return bt(e,n,n.pendingProps.children,r),n.child;case 12:return bt(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(i=n.type._context,c=n.pendingProps,d=n.memoizedProps,p=c.value,Ue(yi,i._currentValue),i._currentValue=p,d!==null)if(Yt(d.value,p)){if(d.children===c.children&&!wt.current){n=gn(e,n,r);break e}}else for(d=n.child,d!==null&&(d.return=n);d!==null;){var S=d.dependencies;if(S!==null){p=d.child;for(var T=S.firstContext;T!==null;){if(T.context===i){if(d.tag===1){T=pn(-1,r&-r),T.tag=2;var R=d.updateQueue;if(R!==null){R=R.shared;var oe=R.pending;oe===null?T.next=T:(T.next=oe.next,oe.next=T),R.pending=T}}d.lanes|=r,T=d.alternate,T!==null&&(T.lanes|=r),fs(d.return,r,n),S.lanes|=r;break}T=T.next}}else if(d.tag===10)p=d.type===n.type?null:d.child;else if(d.tag===18){if(p=d.return,p===null)throw Error(s(341));p.lanes|=r,S=p.alternate,S!==null&&(S.lanes|=r),fs(p,r,n),p=d.sibling}else p=d.child;if(p!==null)p.return=d;else for(p=d;p!==null;){if(p===n){p=null;break}if(d=p.sibling,d!==null){d.return=p.return,p=d;break}p=p.return}d=p}bt(e,n,c.children,r),n=n.child}return n;case 9:return c=n.type,i=n.pendingProps.children,Mr(n,r),c=Dt(c),i=i(c),n.flags|=1,bt(e,n,i,r),n.child;case 14:return i=n.type,c=Ut(i,n.pendingProps),c=Ut(i.type,c),Gd(e,n,i,c,r);case 15:return Wd(e,n,n.type,n.pendingProps,r);case 17:return i=n.type,c=n.pendingProps,c=n.elementType===i?c:Ut(i,c),Mi(e,n),n.tag=1,vt(i)?(e=!0,hi(n)):e=!1,Mr(n,r),$d(n,i,c),Ls(n,i,c,r),Ds(null,n,i,!0,e,r);case 19:return ru(e,n,r);case 22:return Qd(e,n,r)}throw Error(s(156,n.tag))};function zu(e,n){return oc(e,n)}function tp(e,n,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,n,r,i){return new tp(e,n,r,i)}function nl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function np(e){if(typeof e=="function")return nl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===W)return 11;if(e===ue)return 14}return 2}function $n(e,n){var r=e.alternate;return r===null?(r=Rt(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Yi(e,n,r,i,c,d){var p=2;if(i=e,typeof e=="function")nl(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case q:return ir(r.children,c,d,n);case le:p=8,c|=8;break;case C:return e=Rt(12,r,n,c|2),e.elementType=C,e.lanes=d,e;case Y:return e=Rt(13,r,n,c),e.elementType=Y,e.lanes=d,e;case P:return e=Rt(19,r,n,c),e.elementType=P,e.lanes=d,e;case ne:return Bi(r,c,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:p=10;break e;case xe:p=9;break e;case W:p=11;break e;case ue:p=14;break e;case he:p=16,i=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=Rt(p,r,n,c),n.elementType=e,n.type=i,n.lanes=d,n}function ir(e,n,r,i){return e=Rt(7,e,i,n),e.lanes=r,e}function Bi(e,n,r,i){return e=Rt(22,e,i,n),e.elementType=ne,e.lanes=r,e.stateNode={isHidden:!1},e}function rl(e,n,r){return e=Rt(6,e,null,n),e.lanes=r,e}function al(e,n,r){return n=Rt(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function rp(e,n,r,i,c){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mo(0),this.expirationTimes=Mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.identifierPrefix=i,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function il(e,n,r,i,c,d,p,S,T){return e=new rp(e,n,r,S,T),n===1?(n=1,d===!0&&(n|=8)):n=0,d=Rt(3,null,null,n),e.current=d,d.stateNode=e,d.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},bs(d),e}function ap(e,n,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:i==null?null:""+i,children:e,containerInfo:n,implementation:r}}function Tu(e){if(!e)return Mn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(vt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(vt(r))return nd(e,r,n)}return n}function Eu(e,n,r,i,c,d,p,S,T){return e=il(r,i,!0,e,c,d,p,S,T),e.context=Tu(null),r=e.current,i=yt(),c=On(r),d=pn(i,c),d.callback=n??null,An(r,d,c),e.current.lanes=c,Zr(e,c,i),Nt(e,i),e}function Ui(e,n,r,i){var c=n.current,d=yt(),p=On(c);return r=Tu(r),n.context===null?n.context=r:n.pendingContext=r,n=pn(d,p),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=An(c,n,p),e!==null&&(qt(e,c,p,d),vi(e,c,p)),p}function Ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function ol(e,n){_u(e,n),(e=e.alternate)&&_u(e,n)}function ip(){return null}var Mu=typeof reportError=="function"?reportError:function(e){console.error(e)};function sl(e){this._internalRoot=e}Vi.prototype.render=sl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));Ui(e,n,null,null)},Vi.prototype.unmount=sl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nr(function(){Ui(null,e,null,null)}),n[cn]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var n=pc();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Cn.length&&n!==0&&n<Cn[r].priority;r++);Cn.splice(r,0,e),r===0&&xc(e)}};function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function op(e,n,r,i,c){if(c){if(typeof i=="function"){var d=i;i=function(){var R=Ki(p);d.call(R)}}var p=Eu(n,i,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=p,e[cn]=p.current,ha(e.nodeType===8?e.parentNode:e),nr(),p}for(;c=e.lastChild;)e.removeChild(c);if(typeof i=="function"){var S=i;i=function(){var R=Ki(T);S.call(R)}}var T=il(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=T,e[cn]=T.current,ha(e.nodeType===8?e.parentNode:e),nr(function(){Ui(n,T,r,i)}),T}function Gi(e,n,r,i,c){var d=r._reactRootContainer;if(d){var p=d;if(typeof c=="function"){var S=c;c=function(){var T=Ki(p);S.call(T)}}Ui(n,p,e,c)}else p=op(r,n,e,c,i);return Ki(p)}mc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=Jr(n.pendingLanes);r!==0&&(Lo(n,r|1),Nt(n,Je()),(Re&6)===0&&(Dr=Je()+500,Ln()))}break;case 13:nr(function(){var i=hn(e,1);if(i!==null){var c=yt();qt(i,e,1,c)}}),ol(e,1)}},Po=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var r=yt();qt(n,e,134217728,r)}ol(e,134217728)}},hc=function(e){if(e.tag===13){var n=On(e),r=hn(e,n);if(r!==null){var i=yt();qt(r,e,n,i)}ol(e,n)}},pc=function(){return He},gc=function(e,n){var r=He;try{return He=e,n()}finally{He=r}},So=function(e,n,r){switch(n){case"input":if(ee(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var i=r[n];if(i!==e&&i.form===e.form){var c=ui(i);if(!c)throw Error(s(90));se(i),ee(i,c)}}}break;case"textarea":Be(e,r);break;case"select":n=r.value,n!=null&&we(e,!!r.multiple,n,!1)}},Zl=Zs,ec=nr;var sp={usingClientEntryPoint:!1,Events:[fa,jr,ui,Xl,Jl,Zs]},_a={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lp={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ac(e),e===null?null:e.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Va=Wi.inject(lp),Zt=Wi}catch{}}return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp,St.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ll(n))throw Error(s(200));return ap(e,n,null,r)},St.createRoot=function(e,n){if(!ll(e))throw Error(s(299));var r=!1,i="",c=Mu;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=il(e,1,!1,null,null,r,!1,i,c),e[cn]=n.current,ha(e.nodeType===8?e.parentNode:e),new sl(n)},St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ac(n),e=e===null?null:e.stateNode,e},St.flushSync=function(e){return nr(e)},St.hydrate=function(e,n,r){if(!qi(n))throw Error(s(200));return Gi(null,e,n,!0,r)},St.hydrateRoot=function(e,n,r){if(!ll(e))throw Error(s(405));var i=r!=null&&r.hydratedSources||null,c=!1,d="",p=Mu;if(r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),n=Eu(n,null,e,1,r??null,c,!1,d,p),e[cn]=n.current,ha(e),i)for(e=0;e<i.length;e++)r=i[e],c=r._getVersion,c=c(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,c]:n.mutableSourceEagerHydrationData.push(r,c);return new Vi(n)},St.render=function(e,n,r){if(!qi(n))throw Error(s(200));return Gi(null,e,n,!1,r)},St.unmountComponentAtNode=function(e){if(!qi(e))throw Error(s(40));return e._reactRootContainer?(nr(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1},St.unstable_batchedUpdates=Zs,St.unstable_renderSubtreeIntoContainer=function(e,n,r,i){if(!qi(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Gi(e,n,r,!1,i)},St.version="18.3.1-next-f1338f8080-20240426",St}var $u;function xp(){if($u)return ul.exports;$u=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),ul.exports=fp(),ul.exports}var Hu;function bp(){if(Hu)return Qi;Hu=1;var a=xp();return Qi.createRoot=a.createRoot,Qi.hydrateRoot=a.hydrateRoot,Qi}var yp=bp();const wp=vm(yp);function km(a,o){return function(){return a.apply(o,arguments)}}const{toString:vp}=Object.prototype,{getPrototypeOf:Hl}=Object,{iterator:mo,toStringTag:jm}=Symbol,ho=(a=>o=>{const s=vp.call(o);return a[s]||(a[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Qt=a=>(a=a.toLowerCase(),o=>ho(o)===a),po=a=>o=>typeof o===a,{isArray:Yr}=Array,$r=po("undefined");function Ia(a){return a!==null&&!$r(a)&&a.constructor!==null&&!$r(a.constructor)&&Ct(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Nm=Qt("ArrayBuffer");function kp(a){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(a):o=a&&a.buffer&&Nm(a.buffer),o}const jp=po("string"),Ct=po("function"),Sm=po("number"),Oa=a=>a!==null&&typeof a=="object",Np=a=>a===!0||a===!1,eo=a=>{if(ho(a)!=="object")return!1;const o=Hl(a);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(jm in a)&&!(mo in a)},Sp=a=>{if(!Oa(a)||Ia(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},Cp=Qt("Date"),zp=Qt("File"),Tp=Qt("Blob"),Ep=Qt("FileList"),_p=a=>Oa(a)&&Ct(a.pipe),Mp=a=>{let o;return a&&(typeof FormData=="function"&&a instanceof FormData||Ct(a.append)&&((o=ho(a))==="formdata"||o==="object"&&Ct(a.toString)&&a.toString()==="[object FormData]"))},Lp=Qt("URLSearchParams"),[Pp,Ap,Fp,Dp]=["ReadableStream","Request","Response","Headers"].map(Qt),Ip=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ra(a,o,{allOwnKeys:s=!1}={}){if(a===null||typeof a>"u")return;let l,u;if(typeof a!="object"&&(a=[a]),Yr(a))for(l=0,u=a.length;l<u;l++)o.call(null,a[l],l,a);else{if(Ia(a))return;const h=s?Object.getOwnPropertyNames(a):Object.keys(a),m=h.length;let g;for(l=0;l<m;l++)g=h[l],o.call(null,a[g],g,a)}}function Cm(a,o){if(Ia(a))return null;o=o.toLowerCase();const s=Object.keys(a);let l=s.length,u;for(;l-- >0;)if(u=s[l],o===u.toLowerCase())return u;return null}const lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,zm=a=>!$r(a)&&a!==lr;function El(){const{caseless:a,skipUndefined:o}=zm(this)&&this||{},s={},l=(u,h)=>{const m=a&&Cm(s,h)||h;eo(s[m])&&eo(u)?s[m]=El(s[m],u):eo(u)?s[m]=El({},u):Yr(u)?s[m]=u.slice():(!o||!$r(u))&&(s[m]=u)};for(let u=0,h=arguments.length;u<h;u++)arguments[u]&&Ra(arguments[u],l);return s}const Op=(a,o,s,{allOwnKeys:l}={})=>(Ra(o,(u,h)=>{s&&Ct(u)?a[h]=km(u,s):a[h]=u},{allOwnKeys:l}),a),Rp=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),$p=(a,o,s,l)=>{a.prototype=Object.create(o.prototype,l),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:o.prototype}),s&&Object.assign(a.prototype,s)},Hp=(a,o,s,l)=>{let u,h,m;const g={};if(o=o||{},a==null)return o;do{for(u=Object.getOwnPropertyNames(a),h=u.length;h-- >0;)m=u[h],(!l||l(m,a,o))&&!g[m]&&(o[m]=a[m],g[m]=!0);a=s!==!1&&Hl(a)}while(a&&(!s||s(a,o))&&a!==Object.prototype);return o},Yp=(a,o,s)=>{a=String(a),(s===void 0||s>a.length)&&(s=a.length),s-=o.length;const l=a.indexOf(o,s);return l!==-1&&l===s},Bp=a=>{if(!a)return null;if(Yr(a))return a;let o=a.length;if(!Sm(o))return null;const s=new Array(o);for(;o-- >0;)s[o]=a[o];return s},Up=(a=>o=>a&&o instanceof a)(typeof Uint8Array<"u"&&Hl(Uint8Array)),Kp=(a,o)=>{const l=(a&&a[mo]).call(a);let u;for(;(u=l.next())&&!u.done;){const h=u.value;o.call(a,h[0],h[1])}},Vp=(a,o)=>{let s;const l=[];for(;(s=a.exec(o))!==null;)l.push(s);return l},qp=Qt("HTMLFormElement"),Gp=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,l,u){return l.toUpperCase()+u}),Yu=(({hasOwnProperty:a})=>(o,s)=>a.call(o,s))(Object.prototype),Wp=Qt("RegExp"),Tm=(a,o)=>{const s=Object.getOwnPropertyDescriptors(a),l={};Ra(s,(u,h)=>{let m;(m=o(u,h,a))!==!1&&(l[h]=m||u)}),Object.defineProperties(a,l)},Qp=a=>{Tm(a,(o,s)=>{if(Ct(a)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const l=a[s];if(Ct(l)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},Xp=(a,o)=>{const s={},l=u=>{u.forEach(h=>{s[h]=!0})};return Yr(a)?l(a):l(String(a).split(o)),s},Jp=()=>{},Zp=(a,o)=>a!=null&&Number.isFinite(a=+a)?a:o;function eg(a){return!!(a&&Ct(a.append)&&a[jm]==="FormData"&&a[mo])}const tg=a=>{const o=new Array(10),s=(l,u)=>{if(Oa(l)){if(o.indexOf(l)>=0)return;if(Ia(l))return l;if(!("toJSON"in l)){o[u]=l;const h=Yr(l)?[]:{};return Ra(l,(m,g)=>{const x=s(m,u+1);!$r(x)&&(h[g]=x)}),o[u]=void 0,h}}return l};return s(a,0)},ng=Qt("AsyncFunction"),rg=a=>a&&(Oa(a)||Ct(a))&&Ct(a.then)&&Ct(a.catch),Em=((a,o)=>a?setImmediate:o?((s,l)=>(lr.addEventListener("message",({source:u,data:h})=>{u===lr&&h===s&&l.length&&l.shift()()},!1),u=>{l.push(u),lr.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",Ct(lr.postMessage)),ag=typeof queueMicrotask<"u"?queueMicrotask.bind(lr):typeof process<"u"&&process.nextTick||Em,ig=a=>a!=null&&Ct(a[mo]),H={isArray:Yr,isArrayBuffer:Nm,isBuffer:Ia,isFormData:Mp,isArrayBufferView:kp,isString:jp,isNumber:Sm,isBoolean:Np,isObject:Oa,isPlainObject:eo,isEmptyObject:Sp,isReadableStream:Pp,isRequest:Ap,isResponse:Fp,isHeaders:Dp,isUndefined:$r,isDate:Cp,isFile:zp,isBlob:Tp,isRegExp:Wp,isFunction:Ct,isStream:_p,isURLSearchParams:Lp,isTypedArray:Up,isFileList:Ep,forEach:Ra,merge:El,extend:Op,trim:Ip,stripBOM:Rp,inherits:$p,toFlatObject:Hp,kindOf:ho,kindOfTest:Qt,endsWith:Yp,toArray:Bp,forEachEntry:Kp,matchAll:Vp,isHTMLForm:qp,hasOwnProperty:Yu,hasOwnProp:Yu,reduceDescriptors:Tm,freezeMethods:Qp,toObjectSet:Xp,toCamelCase:Gp,noop:Jp,toFiniteNumber:Zp,findKey:Cm,global:lr,isContextDefined:zm,isSpecCompliantForm:eg,toJSONObject:tg,isAsyncFn:ng,isThenable:rg,setImmediate:Em,asap:ag,isIterable:ig};function De(a,o,s,l,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",o&&(this.code=o),s&&(this.config=s),l&&(this.request=l),u&&(this.response=u,this.status=u.status?u.status:null)}H.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const _m=De.prototype,Mm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{Mm[a]={value:a}});Object.defineProperties(De,Mm);Object.defineProperty(_m,"isAxiosError",{value:!0});De.from=(a,o,s,l,u,h)=>{const m=Object.create(_m);H.toFlatObject(a,m,function(b){return b!==Error.prototype},w=>w!=="isAxiosError");const g=a&&a.message?a.message:"Error",x=o==null&&a?a.code:o;return De.call(m,g,x,s,l,u),a&&m.cause==null&&Object.defineProperty(m,"cause",{value:a,configurable:!0}),m.name=a&&a.name||"Error",h&&Object.assign(m,h),m};const og=null;function _l(a){return H.isPlainObject(a)||H.isArray(a)}function Lm(a){return H.endsWith(a,"[]")?a.slice(0,-2):a}function Bu(a,o,s){return a?a.concat(o).map(function(u,h){return u=Lm(u),!s&&h?"["+u+"]":u}).join(s?".":""):o}function sg(a){return H.isArray(a)&&!a.some(_l)}const lg=H.toFlatObject(H,{},null,function(o){return/^is[A-Z]/.test(o)});function go(a,o,s){if(!H.isObject(a))throw new TypeError("target must be an object");o=o||new FormData,s=H.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,N){return!H.isUndefined(N[v])});const l=s.metaTokens,u=s.visitor||b,h=s.dots,m=s.indexes,x=(s.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(o);if(!H.isFunction(u))throw new TypeError("visitor must be a function");function w(j){if(j===null)return"";if(H.isDate(j))return j.toISOString();if(H.isBoolean(j))return j.toString();if(!x&&H.isBlob(j))throw new De("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(j)||H.isTypedArray(j)?x&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function b(j,v,N){let V=j;if(j&&!N&&typeof j=="object"){if(H.endsWith(v,"{}"))v=l?v:v.slice(0,-2),j=JSON.stringify(j);else if(H.isArray(j)&&sg(j)||(H.isFileList(j)||H.endsWith(v,"[]"))&&(V=H.toArray(j)))return v=Lm(v),V.forEach(function(B,G){!(H.isUndefined(B)||B===null)&&o.append(m===!0?Bu([v],G,h):m===null?v:v+"[]",w(B))}),!1}return _l(j)?!0:(o.append(Bu(N,v,h),w(j)),!1)}const y=[],k=Object.assign(lg,{defaultVisitor:b,convertValue:w,isVisitable:_l});function I(j,v){if(!H.isUndefined(j)){if(y.indexOf(j)!==-1)throw Error("Circular reference detected in "+v.join("."));y.push(j),H.forEach(j,function(V,O){(!(H.isUndefined(V)||V===null)&&u.call(o,V,H.isString(O)?O.trim():O,v,k))===!0&&I(V,v?v.concat(O):[O])}),y.pop()}}if(!H.isObject(a))throw new TypeError("data must be an object");return I(a),o}function Uu(a){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(l){return o[l]})}function Yl(a,o){this._pairs=[],a&&go(a,this,o)}const Pm=Yl.prototype;Pm.append=function(o,s){this._pairs.push([o,s])};Pm.toString=function(o){const s=o?function(l){return o.call(this,l,Uu)}:Uu;return this._pairs.map(function(u){return s(u[0])+"="+s(u[1])},"").join("&")};function cg(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Am(a,o,s){if(!o)return a;const l=s&&s.encode||cg;H.isFunction(s)&&(s={serialize:s});const u=s&&s.serialize;let h;if(u?h=u(o,s):h=H.isURLSearchParams(o)?o.toString():new Yl(o,s).toString(l),h){const m=a.indexOf("#");m!==-1&&(a=a.slice(0,m)),a+=(a.indexOf("?")===-1?"?":"&")+h}return a}class Ku{constructor(){this.handlers=[]}use(o,s,l){return this.handlers.push({fulfilled:o,rejected:s,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){H.forEach(this.handlers,function(l){l!==null&&o(l)})}}const Fm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dg=typeof URLSearchParams<"u"?URLSearchParams:Yl,ug=typeof FormData<"u"?FormData:null,mg=typeof Blob<"u"?Blob:null,hg={isBrowser:!0,classes:{URLSearchParams:dg,FormData:ug,Blob:mg},protocols:["http","https","file","blob","url","data"]},Bl=typeof window<"u"&&typeof document<"u",Ml=typeof navigator=="object"&&navigator||void 0,pg=Bl&&(!Ml||["ReactNative","NativeScript","NS"].indexOf(Ml.product)<0),gg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fg=Bl&&window.location.href||"http://localhost",xg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Bl,hasStandardBrowserEnv:pg,hasStandardBrowserWebWorkerEnv:gg,navigator:Ml,origin:fg},Symbol.toStringTag,{value:"Module"})),ft={...xg,...hg};function bg(a,o){return go(a,new ft.classes.URLSearchParams,{visitor:function(s,l,u,h){return ft.isNode&&H.isBuffer(s)?(this.append(l,s.toString("base64")),!1):h.defaultVisitor.apply(this,arguments)},...o})}function yg(a){return H.matchAll(/\w+|\[(\w*)]/g,a).map(o=>o[0]==="[]"?"":o[1]||o[0])}function wg(a){const o={},s=Object.keys(a);let l;const u=s.length;let h;for(l=0;l<u;l++)h=s[l],o[h]=a[h];return o}function Dm(a){function o(s,l,u,h){let m=s[h++];if(m==="__proto__")return!0;const g=Number.isFinite(+m),x=h>=s.length;return m=!m&&H.isArray(u)?u.length:m,x?(H.hasOwnProp(u,m)?u[m]=[u[m],l]:u[m]=l,!g):((!u[m]||!H.isObject(u[m]))&&(u[m]=[]),o(s,l,u[m],h)&&H.isArray(u[m])&&(u[m]=wg(u[m])),!g)}if(H.isFormData(a)&&H.isFunction(a.entries)){const s={};return H.forEachEntry(a,(l,u)=>{o(yg(l),u,s,0)}),s}return null}function vg(a,o,s){if(H.isString(a))try{return(o||JSON.parse)(a),H.trim(a)}catch(l){if(l.name!=="SyntaxError")throw l}return(s||JSON.stringify)(a)}const $a={transitional:Fm,adapter:["xhr","http","fetch"],transformRequest:[function(o,s){const l=s.getContentType()||"",u=l.indexOf("application/json")>-1,h=H.isObject(o);if(h&&H.isHTMLForm(o)&&(o=new FormData(o)),H.isFormData(o))return u?JSON.stringify(Dm(o)):o;if(H.isArrayBuffer(o)||H.isBuffer(o)||H.isStream(o)||H.isFile(o)||H.isBlob(o)||H.isReadableStream(o))return o;if(H.isArrayBufferView(o))return o.buffer;if(H.isURLSearchParams(o))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let g;if(h){if(l.indexOf("application/x-www-form-urlencoded")>-1)return bg(o,this.formSerializer).toString();if((g=H.isFileList(o))||l.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return go(g?{"files[]":o}:o,x&&new x,this.formSerializer)}}return h||u?(s.setContentType("application/json",!1),vg(o)):o}],transformResponse:[function(o){const s=this.transitional||$a.transitional,l=s&&s.forcedJSONParsing,u=this.responseType==="json";if(H.isResponse(o)||H.isReadableStream(o))return o;if(o&&H.isString(o)&&(l&&!this.responseType||u)){const m=!(s&&s.silentJSONParsing)&&u;try{return JSON.parse(o,this.parseReviver)}catch(g){if(m)throw g.name==="SyntaxError"?De.from(g,De.ERR_BAD_RESPONSE,this,null,this.response):g}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],a=>{$a.headers[a]={}});const kg=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jg=a=>{const o={};let s,l,u;return a&&a.split(`
`).forEach(function(m){u=m.indexOf(":"),s=m.substring(0,u).trim().toLowerCase(),l=m.substring(u+1).trim(),!(!s||o[s]&&kg[s])&&(s==="set-cookie"?o[s]?o[s].push(l):o[s]=[l]:o[s]=o[s]?o[s]+", "+l:l)}),o},Vu=Symbol("internals");function La(a){return a&&String(a).trim().toLowerCase()}function to(a){return a===!1||a==null?a:H.isArray(a)?a.map(to):String(a)}function Ng(a){const o=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=s.exec(a);)o[l[1]]=l[2];return o}const Sg=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function pl(a,o,s,l,u){if(H.isFunction(l))return l.call(this,o,s);if(u&&(o=s),!!H.isString(o)){if(H.isString(l))return o.indexOf(l)!==-1;if(H.isRegExp(l))return l.test(o)}}function Cg(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,s,l)=>s.toUpperCase()+l)}function zg(a,o){const s=H.toCamelCase(" "+o);["get","set","has"].forEach(l=>{Object.defineProperty(a,l+s,{value:function(u,h,m){return this[l].call(this,o,u,h,m)},configurable:!0})})}let zt=class{constructor(o){o&&this.set(o)}set(o,s,l){const u=this;function h(g,x,w){const b=La(x);if(!b)throw new Error("header name must be a non-empty string");const y=H.findKey(u,b);(!y||u[y]===void 0||w===!0||w===void 0&&u[y]!==!1)&&(u[y||x]=to(g))}const m=(g,x)=>H.forEach(g,(w,b)=>h(w,b,x));if(H.isPlainObject(o)||o instanceof this.constructor)m(o,s);else if(H.isString(o)&&(o=o.trim())&&!Sg(o))m(jg(o),s);else if(H.isObject(o)&&H.isIterable(o)){let g={},x,w;for(const b of o){if(!H.isArray(b))throw TypeError("Object iterator must return a key-value pair");g[w=b[0]]=(x=g[w])?H.isArray(x)?[...x,b[1]]:[x,b[1]]:b[1]}m(g,s)}else o!=null&&h(s,o,l);return this}get(o,s){if(o=La(o),o){const l=H.findKey(this,o);if(l){const u=this[l];if(!s)return u;if(s===!0)return Ng(u);if(H.isFunction(s))return s.call(this,u,l);if(H.isRegExp(s))return s.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,s){if(o=La(o),o){const l=H.findKey(this,o);return!!(l&&this[l]!==void 0&&(!s||pl(this,this[l],l,s)))}return!1}delete(o,s){const l=this;let u=!1;function h(m){if(m=La(m),m){const g=H.findKey(l,m);g&&(!s||pl(l,l[g],g,s))&&(delete l[g],u=!0)}}return H.isArray(o)?o.forEach(h):h(o),u}clear(o){const s=Object.keys(this);let l=s.length,u=!1;for(;l--;){const h=s[l];(!o||pl(this,this[h],h,o,!0))&&(delete this[h],u=!0)}return u}normalize(o){const s=this,l={};return H.forEach(this,(u,h)=>{const m=H.findKey(l,h);if(m){s[m]=to(u),delete s[h];return}const g=o?Cg(h):String(h).trim();g!==h&&delete s[h],s[g]=to(u),l[g]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const s=Object.create(null);return H.forEach(this,(l,u)=>{l!=null&&l!==!1&&(s[u]=o&&H.isArray(l)?l.join(", "):l)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,s])=>o+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...s){const l=new this(o);return s.forEach(u=>l.set(u)),l}static accessor(o){const l=(this[Vu]=this[Vu]={accessors:{}}).accessors,u=this.prototype;function h(m){const g=La(m);l[g]||(zg(u,m),l[g]=!0)}return H.isArray(o)?o.forEach(h):h(o),this}};zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(zt.prototype,({value:a},o)=>{let s=o[0].toUpperCase()+o.slice(1);return{get:()=>a,set(l){this[s]=l}}});H.freezeMethods(zt);function gl(a,o){const s=this||$a,l=o||s,u=zt.from(l.headers);let h=l.data;return H.forEach(a,function(g){h=g.call(s,h,u.normalize(),o?o.status:void 0)}),u.normalize(),h}function Im(a){return!!(a&&a.__CANCEL__)}function Br(a,o,s){De.call(this,a??"canceled",De.ERR_CANCELED,o,s),this.name="CanceledError"}H.inherits(Br,De,{__CANCEL__:!0});function Om(a,o,s){const l=s.config.validateStatus;!s.status||!l||l(s.status)?a(s):o(new De("Request failed with status code "+s.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function Tg(a){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return o&&o[1]||""}function Eg(a,o){a=a||10;const s=new Array(a),l=new Array(a);let u=0,h=0,m;return o=o!==void 0?o:1e3,function(x){const w=Date.now(),b=l[h];m||(m=w),s[u]=x,l[u]=w;let y=h,k=0;for(;y!==u;)k+=s[y++],y=y%a;if(u=(u+1)%a,u===h&&(h=(h+1)%a),w-m<o)return;const I=b&&w-b;return I?Math.round(k*1e3/I):void 0}}function _g(a,o){let s=0,l=1e3/o,u,h;const m=(w,b=Date.now())=>{s=b,u=null,h&&(clearTimeout(h),h=null),a(...w)};return[(...w)=>{const b=Date.now(),y=b-s;y>=l?m(w,b):(u=w,h||(h=setTimeout(()=>{h=null,m(u)},l-y)))},()=>u&&m(u)]}const ao=(a,o,s=3)=>{let l=0;const u=Eg(50,250);return _g(h=>{const m=h.loaded,g=h.lengthComputable?h.total:void 0,x=m-l,w=u(x),b=m<=g;l=m;const y={loaded:m,total:g,progress:g?m/g:void 0,bytes:x,rate:w||void 0,estimated:w&&g&&b?(g-m)/w:void 0,event:h,lengthComputable:g!=null,[o?"download":"upload"]:!0};a(y)},s)},qu=(a,o)=>{const s=a!=null;return[l=>o[0]({lengthComputable:s,total:a,loaded:l}),o[1]]},Gu=a=>(...o)=>H.asap(()=>a(...o)),Mg=ft.hasStandardBrowserEnv?((a,o)=>s=>(s=new URL(s,ft.origin),a.protocol===s.protocol&&a.host===s.host&&(o||a.port===s.port)))(new URL(ft.origin),ft.navigator&&/(msie|trident)/i.test(ft.navigator.userAgent)):()=>!0,Lg=ft.hasStandardBrowserEnv?{write(a,o,s,l,u,h,m){if(typeof document>"u")return;const g=[`${a}=${encodeURIComponent(o)}`];H.isNumber(s)&&g.push(`expires=${new Date(s).toUTCString()}`),H.isString(l)&&g.push(`path=${l}`),H.isString(u)&&g.push(`domain=${u}`),h===!0&&g.push("secure"),H.isString(m)&&g.push(`SameSite=${m}`),document.cookie=g.join("; ")},read(a){if(typeof document>"u")return null;const o=document.cookie.match(new RegExp("(?:^|; )"+a+"=([^;]*)"));return o?decodeURIComponent(o[1]):null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Pg(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function Ag(a,o){return o?a.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):a}function Rm(a,o,s){let l=!Pg(o);return a&&(l||s==!1)?Ag(a,o):o}const Wu=a=>a instanceof zt?{...a}:a;function ur(a,o){o=o||{};const s={};function l(w,b,y,k){return H.isPlainObject(w)&&H.isPlainObject(b)?H.merge.call({caseless:k},w,b):H.isPlainObject(b)?H.merge({},b):H.isArray(b)?b.slice():b}function u(w,b,y,k){if(H.isUndefined(b)){if(!H.isUndefined(w))return l(void 0,w,y,k)}else return l(w,b,y,k)}function h(w,b){if(!H.isUndefined(b))return l(void 0,b)}function m(w,b){if(H.isUndefined(b)){if(!H.isUndefined(w))return l(void 0,w)}else return l(void 0,b)}function g(w,b,y){if(y in o)return l(w,b);if(y in a)return l(void 0,w)}const x={url:h,method:h,data:h,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:g,headers:(w,b,y)=>u(Wu(w),Wu(b),y,!0)};return H.forEach(Object.keys({...a,...o}),function(b){const y=x[b]||u,k=y(a[b],o[b],b);H.isUndefined(k)&&y!==g||(s[b]=k)}),s}const $m=a=>{const o=ur({},a);let{data:s,withXSRFToken:l,xsrfHeaderName:u,xsrfCookieName:h,headers:m,auth:g}=o;if(o.headers=m=zt.from(m),o.url=Am(Rm(o.baseURL,o.url,o.allowAbsoluteUrls),a.params,a.paramsSerializer),g&&m.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):""))),H.isFormData(s)){if(ft.hasStandardBrowserEnv||ft.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if(H.isFunction(s.getHeaders)){const x=s.getHeaders(),w=["content-type","content-length"];Object.entries(x).forEach(([b,y])=>{w.includes(b.toLowerCase())&&m.set(b,y)})}}if(ft.hasStandardBrowserEnv&&(l&&H.isFunction(l)&&(l=l(o)),l||l!==!1&&Mg(o.url))){const x=u&&h&&Lg.read(h);x&&m.set(u,x)}return o},Fg=typeof XMLHttpRequest<"u",Dg=Fg&&function(a){return new Promise(function(s,l){const u=$m(a);let h=u.data;const m=zt.from(u.headers).normalize();let{responseType:g,onUploadProgress:x,onDownloadProgress:w}=u,b,y,k,I,j;function v(){I&&I(),j&&j(),u.cancelToken&&u.cancelToken.unsubscribe(b),u.signal&&u.signal.removeEventListener("abort",b)}let N=new XMLHttpRequest;N.open(u.method.toUpperCase(),u.url,!0),N.timeout=u.timeout;function V(){if(!N)return;const B=zt.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),te={data:!g||g==="text"||g==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:B,config:a,request:N};Om(function(q){s(q),v()},function(q){l(q),v()},te),N=null}"onloadend"in N?N.onloadend=V:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(V)},N.onabort=function(){N&&(l(new De("Request aborted",De.ECONNABORTED,a,N)),N=null)},N.onerror=function(G){const te=G&&G.message?G.message:"Network Error",de=new De(te,De.ERR_NETWORK,a,N);de.event=G||null,l(de),N=null},N.ontimeout=function(){let G=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const te=u.transitional||Fm;u.timeoutErrorMessage&&(G=u.timeoutErrorMessage),l(new De(G,te.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,a,N)),N=null},h===void 0&&m.setContentType(null),"setRequestHeader"in N&&H.forEach(m.toJSON(),function(G,te){N.setRequestHeader(te,G)}),H.isUndefined(u.withCredentials)||(N.withCredentials=!!u.withCredentials),g&&g!=="json"&&(N.responseType=u.responseType),w&&([k,j]=ao(w,!0),N.addEventListener("progress",k)),x&&N.upload&&([y,I]=ao(x),N.upload.addEventListener("progress",y),N.upload.addEventListener("loadend",I)),(u.cancelToken||u.signal)&&(b=B=>{N&&(l(!B||B.type?new Br(null,a,N):B),N.abort(),N=null)},u.cancelToken&&u.cancelToken.subscribe(b),u.signal&&(u.signal.aborted?b():u.signal.addEventListener("abort",b)));const O=Tg(u.url);if(O&&ft.protocols.indexOf(O)===-1){l(new De("Unsupported protocol "+O+":",De.ERR_BAD_REQUEST,a));return}N.send(h||null)})},Ig=(a,o)=>{const{length:s}=a=a?a.filter(Boolean):[];if(o||s){let l=new AbortController,u;const h=function(w){if(!u){u=!0,g();const b=w instanceof Error?w:this.reason;l.abort(b instanceof De?b:new Br(b instanceof Error?b.message:b))}};let m=o&&setTimeout(()=>{m=null,h(new De(`timeout ${o} of ms exceeded`,De.ETIMEDOUT))},o);const g=()=>{a&&(m&&clearTimeout(m),m=null,a.forEach(w=>{w.unsubscribe?w.unsubscribe(h):w.removeEventListener("abort",h)}),a=null)};a.forEach(w=>w.addEventListener("abort",h));const{signal:x}=l;return x.unsubscribe=()=>H.asap(g),x}},Og=function*(a,o){let s=a.byteLength;if(s<o){yield a;return}let l=0,u;for(;l<s;)u=l+o,yield a.slice(l,u),l=u},Rg=async function*(a,o){for await(const s of $g(a))yield*Og(s,o)},$g=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const o=a.getReader();try{for(;;){const{done:s,value:l}=await o.read();if(s)break;yield l}}finally{await o.cancel()}},Qu=(a,o,s,l)=>{const u=Rg(a,o);let h=0,m,g=x=>{m||(m=!0,l&&l(x))};return new ReadableStream({async pull(x){try{const{done:w,value:b}=await u.next();if(w){g(),x.close();return}let y=b.byteLength;if(s){let k=h+=y;s(k)}x.enqueue(new Uint8Array(b))}catch(w){throw g(w),w}},cancel(x){return g(x),u.return()}},{highWaterMark:2})},Xu=64*1024,{isFunction:Xi}=H,Hg=(({Request:a,Response:o})=>({Request:a,Response:o}))(H.global),{ReadableStream:Ju,TextEncoder:Zu}=H.global,em=(a,...o)=>{try{return!!a(...o)}catch{return!1}},Yg=a=>{a=H.merge.call({skipUndefined:!0},Hg,a);const{fetch:o,Request:s,Response:l}=a,u=o?Xi(o):typeof fetch=="function",h=Xi(s),m=Xi(l);if(!u)return!1;const g=u&&Xi(Ju),x=u&&(typeof Zu=="function"?(j=>v=>j.encode(v))(new Zu):async j=>new Uint8Array(await new s(j).arrayBuffer())),w=h&&g&&em(()=>{let j=!1;const v=new s(ft.origin,{body:new Ju,method:"POST",get duplex(){return j=!0,"half"}}).headers.has("Content-Type");return j&&!v}),b=m&&g&&em(()=>H.isReadableStream(new l("").body)),y={stream:b&&(j=>j.body)};u&&["text","arrayBuffer","blob","formData","stream"].forEach(j=>{!y[j]&&(y[j]=(v,N)=>{let V=v&&v[j];if(V)return V.call(v);throw new De(`Response type '${j}' is not supported`,De.ERR_NOT_SUPPORT,N)})});const k=async j=>{if(j==null)return 0;if(H.isBlob(j))return j.size;if(H.isSpecCompliantForm(j))return(await new s(ft.origin,{method:"POST",body:j}).arrayBuffer()).byteLength;if(H.isArrayBufferView(j)||H.isArrayBuffer(j))return j.byteLength;if(H.isURLSearchParams(j)&&(j=j+""),H.isString(j))return(await x(j)).byteLength},I=async(j,v)=>{const N=H.toFiniteNumber(j.getContentLength());return N??k(v)};return async j=>{let{url:v,method:N,data:V,signal:O,cancelToken:B,timeout:G,onDownloadProgress:te,onUploadProgress:de,responseType:q,headers:le,withCredentials:C="same-origin",fetchOptions:A}=$m(j),xe=o||fetch;q=q?(q+"").toLowerCase():"text";let W=Ig([O,B&&B.toAbortSignal()],G),Y=null;const P=W&&W.unsubscribe&&(()=>{W.unsubscribe()});let ue;try{if(de&&w&&N!=="get"&&N!=="head"&&(ue=await I(le,V))!==0){let z=new s(v,{method:"POST",body:V,duplex:"half"}),$;if(H.isFormData(V)&&($=z.headers.get("content-type"))&&le.setContentType($),z.body){const[be,J]=qu(ue,ao(Gu(de)));V=Qu(z.body,Xu,be,J)}}H.isString(C)||(C=C?"include":"omit");const he=h&&"credentials"in s.prototype,ne={...A,signal:W,method:N.toUpperCase(),headers:le.normalize().toJSON(),body:V,duplex:"half",credentials:he?C:void 0};Y=h&&new s(v,ne);let M=await(h?xe(Y,A):xe(v,ne));const X=b&&(q==="stream"||q==="response");if(b&&(te||X&&P)){const z={};["status","statusText","headers"].forEach(me=>{z[me]=M[me]});const $=H.toFiniteNumber(M.headers.get("content-length")),[be,J]=te&&qu($,ao(Gu(te),!0))||[];M=new l(Qu(M.body,Xu,be,()=>{J&&J(),P&&P()}),z)}q=q||"text";let Z=await y[H.findKey(y,q)||"text"](M,j);return!X&&P&&P(),await new Promise((z,$)=>{Om(z,$,{data:Z,headers:zt.from(M.headers),status:M.status,statusText:M.statusText,config:j,request:Y})})}catch(he){throw P&&P(),he&&he.name==="TypeError"&&/Load failed|fetch/i.test(he.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,j,Y),{cause:he.cause||he}):De.from(he,he&&he.code,j,Y)}}},Bg=new Map,Hm=a=>{let o=a&&a.env||{};const{fetch:s,Request:l,Response:u}=o,h=[l,u,s];let m=h.length,g=m,x,w,b=Bg;for(;g--;)x=h[g],w=b.get(x),w===void 0&&b.set(x,w=g?new Map:Yg(o)),b=w;return w};Hm();const Ul={http:og,xhr:Dg,fetch:{get:Hm}};H.forEach(Ul,(a,o)=>{if(a){try{Object.defineProperty(a,"name",{value:o})}catch{}Object.defineProperty(a,"adapterName",{value:o})}});const tm=a=>`- ${a}`,Ug=a=>H.isFunction(a)||a===null||a===!1;function Kg(a,o){a=H.isArray(a)?a:[a];const{length:s}=a;let l,u;const h={};for(let m=0;m<s;m++){l=a[m];let g;if(u=l,!Ug(l)&&(u=Ul[(g=String(l)).toLowerCase()],u===void 0))throw new De(`Unknown adapter '${g}'`);if(u&&(H.isFunction(u)||(u=u.get(o))))break;h[g||"#"+m]=u}if(!u){const m=Object.entries(h).map(([x,w])=>`adapter ${x} `+(w===!1?"is not supported by the environment":"is not available in the build"));let g=s?m.length>1?`since :
`+m.map(tm).join(`
`):" "+tm(m[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return u}const Ym={getAdapter:Kg,adapters:Ul};function fl(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Br(null,a)}function nm(a){return fl(a),a.headers=zt.from(a.headers),a.data=gl.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Ym.getAdapter(a.adapter||$a.adapter,a)(a).then(function(l){return fl(a),l.data=gl.call(a,a.transformResponse,l),l.headers=zt.from(l.headers),l},function(l){return Im(l)||(fl(a),l&&l.response&&(l.response.data=gl.call(a,a.transformResponse,l.response),l.response.headers=zt.from(l.response.headers))),Promise.reject(l)})}const Bm="1.13.2",fo={};["object","boolean","number","function","string","symbol"].forEach((a,o)=>{fo[a]=function(l){return typeof l===a||"a"+(o<1?"n ":" ")+a}});const rm={};fo.transitional=function(o,s,l){function u(h,m){return"[Axios v"+Bm+"] Transitional option '"+h+"'"+m+(l?". "+l:"")}return(h,m,g)=>{if(o===!1)throw new De(u(m," has been removed"+(s?" in "+s:"")),De.ERR_DEPRECATED);return s&&!rm[m]&&(rm[m]=!0,console.warn(u(m," has been deprecated since v"+s+" and will be removed in the near future"))),o?o(h,m,g):!0}};fo.spelling=function(o){return(s,l)=>(console.warn(`${l} is likely a misspelling of ${o}`),!0)};function Vg(a,o,s){if(typeof a!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const l=Object.keys(a);let u=l.length;for(;u-- >0;){const h=l[u],m=o[h];if(m){const g=a[h],x=g===void 0||m(g,h,a);if(x!==!0)throw new De("option "+h+" must be "+x,De.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new De("Unknown option "+h,De.ERR_BAD_OPTION)}}const no={assertOptions:Vg,validators:fo},an=no.validators;let cr=class{constructor(o){this.defaults=o||{},this.interceptors={request:new Ku,response:new Ku}}async request(o,s){try{return await this._request(o,s)}catch(l){if(l instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const h=u.stack?u.stack.replace(/^.+\n/,""):"";try{l.stack?h&&!String(l.stack).endsWith(h.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+h):l.stack=h}catch{}}throw l}}_request(o,s){typeof o=="string"?(s=s||{},s.url=o):s=o||{},s=ur(this.defaults,s);const{transitional:l,paramsSerializer:u,headers:h}=s;l!==void 0&&no.assertOptions(l,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean)},!1),u!=null&&(H.isFunction(u)?s.paramsSerializer={serialize:u}:no.assertOptions(u,{encode:an.function,serialize:an.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),no.assertOptions(s,{baseUrl:an.spelling("baseURL"),withXsrfToken:an.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let m=h&&H.merge(h.common,h[s.method]);h&&H.forEach(["delete","get","head","post","put","patch","common"],j=>{delete h[j]}),s.headers=zt.concat(m,h);const g=[];let x=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(s)===!1||(x=x&&v.synchronous,g.unshift(v.fulfilled,v.rejected))});const w=[];this.interceptors.response.forEach(function(v){w.push(v.fulfilled,v.rejected)});let b,y=0,k;if(!x){const j=[nm.bind(this),void 0];for(j.unshift(...g),j.push(...w),k=j.length,b=Promise.resolve(s);y<k;)b=b.then(j[y++],j[y++]);return b}k=g.length;let I=s;for(;y<k;){const j=g[y++],v=g[y++];try{I=j(I)}catch(N){v.call(this,N);break}}try{b=nm.call(this,I)}catch(j){return Promise.reject(j)}for(y=0,k=w.length;y<k;)b=b.then(w[y++],w[y++]);return b}getUri(o){o=ur(this.defaults,o);const s=Rm(o.baseURL,o.url,o.allowAbsoluteUrls);return Am(s,o.params,o.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(o){cr.prototype[o]=function(s,l){return this.request(ur(l||{},{method:o,url:s,data:(l||{}).data}))}});H.forEach(["post","put","patch"],function(o){function s(l){return function(h,m,g){return this.request(ur(g||{},{method:o,headers:l?{"Content-Type":"multipart/form-data"}:{},url:h,data:m}))}}cr.prototype[o]=s(),cr.prototype[o+"Form"]=s(!0)});let qg=class Um{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(h){s=h});const l=this;this.promise.then(u=>{if(!l._listeners)return;let h=l._listeners.length;for(;h-- >0;)l._listeners[h](u);l._listeners=null}),this.promise.then=u=>{let h;const m=new Promise(g=>{l.subscribe(g),h=g}).then(u);return m.cancel=function(){l.unsubscribe(h)},m},o(function(h,m,g){l.reason||(l.reason=new Br(h,m,g),s(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const s=this._listeners.indexOf(o);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const o=new AbortController,s=l=>{o.abort(l)};return this.subscribe(s),o.signal.unsubscribe=()=>this.unsubscribe(s),o.signal}static source(){let o;return{token:new Um(function(u){o=u}),cancel:o}}};function Gg(a){return function(s){return a.apply(null,s)}}function Wg(a){return H.isObject(a)&&a.isAxiosError===!0}const Ll={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ll).forEach(([a,o])=>{Ll[o]=a});function Km(a){const o=new cr(a),s=km(cr.prototype.request,o);return H.extend(s,cr.prototype,o,{allOwnKeys:!0}),H.extend(s,o,null,{allOwnKeys:!0}),s.create=function(u){return Km(ur(a,u))},s}const Qe=Km($a);Qe.Axios=cr;Qe.CanceledError=Br;Qe.CancelToken=qg;Qe.isCancel=Im;Qe.VERSION=Bm;Qe.toFormData=go;Qe.AxiosError=De;Qe.Cancel=Qe.CanceledError;Qe.all=function(o){return Promise.all(o)};Qe.spread=Gg;Qe.isAxiosError=Wg;Qe.mergeConfig=ur;Qe.AxiosHeaders=zt;Qe.formToJSON=a=>Dm(H.isHTMLForm(a)?new FormData(a):a);Qe.getAdapter=Ym.getAdapter;Qe.HttpStatusCode=Ll;Qe.default=Qe;const{Axios:s5,AxiosError:l5,CanceledError:c5,isCancel:d5,CancelToken:u5,VERSION:m5,all:h5,Cancel:p5,isAxiosError:g5,spread:f5,toFormData:x5,AxiosHeaders:b5,HttpStatusCode:y5,formToJSON:w5,getAdapter:v5,mergeConfig:k5}=Qe,Ie=Qe.create({baseURL:"http://localhost:8080/api",withCredentials:!1});Ie.interceptors.request.use(a=>{const o=localStorage.getItem("accessToken");return o&&(a.headers.Authorization=`Bearer ${o}`),a});async function Qg(a,o){try{return(await Ie.post("/auth/login",{email:a,password:o},{headers:{"Content-Type":"application/json"}})).data}catch(s){throw new Error(s?.response?.data?.message||s?.response?.data?.error||"Login failed")}}Ie.interceptors.response.use(a=>a,a=>(a.response?.status===401&&(localStorage.clear(),window.location.href="/login"),Promise.reject(a)));let Xg={data:""},Jg=a=>{if(typeof window=="object"){let o=(a?a.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return o.nonce=window.__nonce__,o.parentNode||(a||document.head).appendChild(o),o.firstChild}return a||Xg},Zg=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ef=/\/\*[^]*?\*\/|  +/g,am=/\n+/g,Bn=(a,o)=>{let s="",l="",u="";for(let h in a){let m=a[h];h[0]=="@"?h[1]=="i"?s=h+" "+m+";":l+=h[1]=="f"?Bn(m,h):h+"{"+Bn(m,h[1]=="k"?"":o)+"}":typeof m=="object"?l+=Bn(m,o?o.replace(/([^,])+/g,g=>h.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,x=>/&/.test(x)?x.replace(/&/g,g):g?g+" "+x:x)):h):m!=null&&(h=/^--/.test(h)?h:h.replace(/[A-Z]/g,"-$&").toLowerCase(),u+=Bn.p?Bn.p(h,m):h+":"+m+";")}return s+(o&&u?o+"{"+u+"}":u)+l},xn={},Vm=a=>{if(typeof a=="object"){let o="";for(let s in a)o+=s+Vm(a[s]);return o}return a},tf=(a,o,s,l,u)=>{let h=Vm(a),m=xn[h]||(xn[h]=(x=>{let w=0,b=11;for(;w<x.length;)b=101*b+x.charCodeAt(w++)>>>0;return"go"+b})(h));if(!xn[m]){let x=h!==a?a:(w=>{let b,y,k=[{}];for(;b=Zg.exec(w.replace(ef,""));)b[4]?k.shift():b[3]?(y=b[3].replace(am," ").trim(),k.unshift(k[0][y]=k[0][y]||{})):k[0][b[1]]=b[2].replace(am," ").trim();return k[0]})(a);xn[m]=Bn(u?{["@keyframes "+m]:x}:x,s?"":"."+m)}let g=s&&xn.g?xn.g:null;return s&&(xn.g=xn[m]),((x,w,b,y)=>{y?w.data=w.data.replace(y,x):w.data.indexOf(x)===-1&&(w.data=b?x+w.data:w.data+x)})(xn[m],o,l,g),m},nf=(a,o,s)=>a.reduce((l,u,h)=>{let m=o[h];if(m&&m.call){let g=m(s),x=g&&g.props&&g.props.className||/^go/.test(g)&&g;m=x?"."+x:g&&typeof g=="object"?g.props?"":Bn(g,""):g===!1?"":g}return l+u+(m??"")},"");function xo(a){let o=this||{},s=a.call?a(o.p):a;return tf(s.unshift?s.raw?nf(s,[].slice.call(arguments,1),o.p):s.reduce((l,u)=>Object.assign(l,u&&u.call?u(o.p):u),{}):s,Jg(o.target),o.g,o.o,o.k)}let qm,Pl,Al;xo.bind({g:1});let wn=xo.bind({k:1});function rf(a,o,s,l){Bn.p=o,qm=a,Pl=s,Al=l}function Kn(a,o){let s=this||{};return function(){let l=arguments;function u(h,m){let g=Object.assign({},h),x=g.className||u.className;s.p=Object.assign({theme:Pl&&Pl()},g),s.o=/ *go\d+/.test(x),g.className=xo.apply(s,l)+(x?" "+x:"");let w=a;return a[0]&&(w=g.as||a,delete g.as),Al&&w[0]&&Al(g),qm(w,g)}return u}}var af=a=>typeof a=="function",io=(a,o)=>af(a)?a(o):a,of=(()=>{let a=0;return()=>(++a).toString()})(),Gm=(()=>{let a;return()=>{if(a===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");a=!o||o.matches}return a}})(),sf=20,Kl="default",Wm=(a,o)=>{let{toastLimit:s}=a.settings;switch(o.type){case 0:return{...a,toasts:[o.toast,...a.toasts].slice(0,s)};case 1:return{...a,toasts:a.toasts.map(m=>m.id===o.toast.id?{...m,...o.toast}:m)};case 2:let{toast:l}=o;return Wm(a,{type:a.toasts.find(m=>m.id===l.id)?1:0,toast:l});case 3:let{toastId:u}=o;return{...a,toasts:a.toasts.map(m=>m.id===u||u===void 0?{...m,dismissed:!0,visible:!1}:m)};case 4:return o.toastId===void 0?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(m=>m.id!==o.toastId)};case 5:return{...a,pausedAt:o.time};case 6:let h=o.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(m=>({...m,pauseDuration:m.pauseDuration+h}))}}},ro=[],Qm={toasts:[],pausedAt:void 0,settings:{toastLimit:sf}},sn={},Xm=(a,o=Kl)=>{sn[o]=Wm(sn[o]||Qm,a),ro.forEach(([s,l])=>{s===o&&l(sn[o])})},Jm=a=>Object.keys(sn).forEach(o=>Xm(a,o)),lf=a=>Object.keys(sn).find(o=>sn[o].toasts.some(s=>s.id===a)),bo=(a=Kl)=>o=>{Xm(o,a)},cf={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},df=(a={},o=Kl)=>{let[s,l]=f.useState(sn[o]||Qm),u=f.useRef(sn[o]);f.useEffect(()=>(u.current!==sn[o]&&l(sn[o]),ro.push([o,l]),()=>{let m=ro.findIndex(([g])=>g===o);m>-1&&ro.splice(m,1)}),[o]);let h=s.toasts.map(m=>{var g,x,w;return{...a,...a[m.type],...m,removeDelay:m.removeDelay||((g=a[m.type])==null?void 0:g.removeDelay)||a?.removeDelay,duration:m.duration||((x=a[m.type])==null?void 0:x.duration)||a?.duration||cf[m.type],style:{...a.style,...(w=a[m.type])==null?void 0:w.style,...m.style}}});return{...s,toasts:h}},uf=(a,o="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:o,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...s,id:s?.id||of()}),Ha=a=>(o,s)=>{let l=uf(o,a,s);return bo(l.toasterId||lf(l.id))({type:2,toast:l}),l.id},at=(a,o)=>Ha("blank")(a,o);at.error=Ha("error");at.success=Ha("success");at.loading=Ha("loading");at.custom=Ha("custom");at.dismiss=(a,o)=>{let s={type:3,toastId:a};o?bo(o)(s):Jm(s)};at.dismissAll=a=>at.dismiss(void 0,a);at.remove=(a,o)=>{let s={type:4,toastId:a};o?bo(o)(s):Jm(s)};at.removeAll=a=>at.remove(void 0,a);at.promise=(a,o,s)=>{let l=at.loading(o.loading,{...s,...s?.loading});return typeof a=="function"&&(a=a()),a.then(u=>{let h=o.success?io(o.success,u):void 0;return h?at.success(h,{id:l,...s,...s?.success}):at.dismiss(l),u}).catch(u=>{let h=o.error?io(o.error,u):void 0;h?at.error(h,{id:l,...s,...s?.error}):at.dismiss(l)}),a};var mf=1e3,hf=(a,o="default")=>{let{toasts:s,pausedAt:l}=df(a,o),u=f.useRef(new Map).current,h=f.useCallback((y,k=mf)=>{if(u.has(y))return;let I=setTimeout(()=>{u.delete(y),m({type:4,toastId:y})},k);u.set(y,I)},[]);f.useEffect(()=>{if(l)return;let y=Date.now(),k=s.map(I=>{if(I.duration===1/0)return;let j=(I.duration||0)+I.pauseDuration-(y-I.createdAt);if(j<0){I.visible&&at.dismiss(I.id);return}return setTimeout(()=>at.dismiss(I.id,o),j)});return()=>{k.forEach(I=>I&&clearTimeout(I))}},[s,l,o]);let m=f.useCallback(bo(o),[o]),g=f.useCallback(()=>{m({type:5,time:Date.now()})},[m]),x=f.useCallback((y,k)=>{m({type:1,toast:{id:y,height:k}})},[m]),w=f.useCallback(()=>{l&&m({type:6,time:Date.now()})},[l,m]),b=f.useCallback((y,k)=>{let{reverseOrder:I=!1,gutter:j=8,defaultPosition:v}=k||{},N=s.filter(B=>(B.position||v)===(y.position||v)&&B.height),V=N.findIndex(B=>B.id===y.id),O=N.filter((B,G)=>G<V&&B.visible).length;return N.filter(B=>B.visible).slice(...I?[O+1]:[0,O]).reduce((B,G)=>B+(G.height||0)+j,0)},[s]);return f.useEffect(()=>{s.forEach(y=>{if(y.dismissed)h(y.id,y.removeDelay);else{let k=u.get(y.id);k&&(clearTimeout(k),u.delete(y.id))}})},[s,h]),{toasts:s,handlers:{updateHeight:x,startPause:g,endPause:w,calculateOffset:b}}},pf=wn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,gf=wn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ff=wn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xf=Kn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${gf} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ff} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,bf=wn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,yf=Kn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${bf} 1s linear infinite;
`,wf=wn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,vf=wn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,kf=Kn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${vf} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,jf=Kn("div")`
  position: absolute;
`,Nf=Kn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Sf=wn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Cf=Kn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Sf} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,zf=({toast:a})=>{let{icon:o,type:s,iconTheme:l}=a;return o!==void 0?typeof o=="string"?f.createElement(Cf,null,o):o:s==="blank"?null:f.createElement(Nf,null,f.createElement(yf,{...l}),s!=="loading"&&f.createElement(jf,null,s==="error"?f.createElement(xf,{...l}):f.createElement(kf,{...l})))},Tf=a=>`
0% {transform: translate3d(0,${a*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ef=a=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${a*-150}%,-1px) scale(.6); opacity:0;}
`,_f="0%{opacity:0;} 100%{opacity:1;}",Mf="0%{opacity:1;} 100%{opacity:0;}",Lf=Kn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Pf=Kn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Af=(a,o)=>{let s=a.includes("top")?1:-1,[l,u]=Gm()?[_f,Mf]:[Tf(s),Ef(s)];return{animation:o?`${wn(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${wn(u)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ff=f.memo(({toast:a,position:o,style:s,children:l})=>{let u=a.height?Af(a.position||o||"top-center",a.visible):{opacity:0},h=f.createElement(zf,{toast:a}),m=f.createElement(Pf,{...a.ariaProps},io(a.message,a));return f.createElement(Lf,{className:a.className,style:{...u,...s,...a.style}},typeof l=="function"?l({icon:h,message:m}):f.createElement(f.Fragment,null,h,m))});rf(f.createElement);var Df=({id:a,className:o,style:s,onHeightUpdate:l,children:u})=>{let h=f.useCallback(m=>{if(m){let g=()=>{let x=m.getBoundingClientRect().height;l(a,x)};g(),new MutationObserver(g).observe(m,{subtree:!0,childList:!0,characterData:!0})}},[a,l]);return f.createElement("div",{ref:h,className:o,style:s},u)},If=(a,o)=>{let s=a.includes("top"),l=s?{top:0}:{bottom:0},u=a.includes("center")?{justifyContent:"center"}:a.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Gm()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(s?1:-1)}px)`,...l,...u}},Of=xo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ji=16,Rf=({reverseOrder:a,position:o="top-center",toastOptions:s,gutter:l,children:u,toasterId:h,containerStyle:m,containerClassName:g})=>{let{toasts:x,handlers:w}=hf(s,h);return f.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:Ji,left:Ji,right:Ji,bottom:Ji,pointerEvents:"none",...m},className:g,onMouseEnter:w.startPause,onMouseLeave:w.endPause},x.map(b=>{let y=b.position||o,k=w.calculateOffset(b,{reverseOrder:a,gutter:l,defaultPosition:o}),I=If(y,k);return f.createElement(Df,{id:b.id,key:b.id,onHeightUpdate:w.updateHeight,className:b.visible?Of:"",style:I},b.type==="custom"?io(b.message,b):u?u(b):f.createElement(Ff,{toast:b,position:y}))}))},ge=at;const Zm=f.createContext(void 0),$f=({children:a,onNavigate:o})=>{const[s,l]=f.useState(null),[u,h]=f.useState(!0),[m,g]=f.useState(!1),x=async()=>{try{const v=(await Ie.get("/user/me")).data?.data;if(!v)throw new Error("No user data");const N={id:v.id,username:v.username||"",fullName:v.fullName,email:v.email,role:(v.role||"USER").toUpperCase(),avatarUrl:v.avatarUrl||"",level:v.level||1,points:v.points||0,streak:v.streak||0,longestStreak:v.longestStreak||0,joinDate:v.joinDate,lastLoginDate:v.lastLoginDate,status:v.status,vocabularyProgress:v.vocabularyProgress||0,kanjiProgress:v.kanjiProgress||0,grammarProgress:v.grammarProgress||0,exerciseProgress:v.exerciseProgress||0};l(N),localStorage.setItem("nekoUser",JSON.stringify(N))}catch(j){console.error("Load user failed:",j);const v=localStorage.getItem("nekoUser");if(v)try{l(JSON.parse(v))}catch{l(null)}else l(null);j?.response?.status===401&&b()}};f.useEffect(()=>{(async()=>{const v=localStorage.getItem("accessToken"),N=localStorage.getItem("nekoSplashSeen")==="true";if(g(N),v)await x();else{const V=localStorage.getItem("nekoUser");if(V)try{l(JSON.parse(V))}catch{localStorage.removeItem("nekoUser")}}h(!1)})()},[]);const w=async(j,v)=>{try{const N=await Qg(j,v);return N?.token?(localStorage.setItem("accessToken",N.token),N.refreshToken&&localStorage.setItem("refreshToken",N.refreshToken),await x(),ge.success("Đăng nhập thành công! Chào mừng trở lại 😻"),window.location.reload(),!0):(ge.error("Đăng nhập thất bại! Kiểm tra email/mật khẩu 😿"),!1)}catch(N){return N.response?.status===401?ge.error("Email hoặc mật khẩu sai! 😿"):ge.error("Lỗi đăng nhập. Mèo đang kiểm tra... 😿"),!1}},b=()=>{l(null),g(!1),localStorage.removeItem("nekoUser"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("nekoSplashSeen"),ge.success("Đăng xuất thành công! Hẹn gặp lại nhé 👋"),o?.("landing"),window.location.reload()},y=j=>{if(!s)return;const v={...s,...j};l(v),localStorage.setItem("nekoUser",JSON.stringify(v))},k=async()=>{if(localStorage.getItem("accessToken"))try{await x()}catch{ge.error("Không thể cập nhật thông tin 😿")}},I=()=>{g(!0),localStorage.setItem("nekoSplashSeen","true")};return t.jsx(Zm.Provider,{value:{user:s,loading:u,hasSeenSplash:m,login:w,logout:b,updateUser:y,refreshUser:k,markSplashAsSeen:I,onNavigate:o},children:a})},vn=()=>{const a=f.useContext(Zm);if(!a)throw new Error("useAuth must be used within AuthProvider");return a},Hf="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function $t(a){const[o,s]=f.useState(!1),l=()=>{s(!0)},{src:u,alt:h,style:m,className:g,...x}=a;return o?t.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${g??""}`,style:m,children:t.jsx("div",{className:"flex items-center justify-center w-full h-full",children:t.jsx("img",{src:Hf,alt:"Error loading image",...x,"data-original-url":u})})}):t.jsx("img",{src:u,alt:h,className:g,style:m,...x,onError:l})}function Yf({onComplete:a}){return f.useEffect(()=>{const o=setTimeout(()=>{a()},3500);return()=>clearTimeout(o)},[a]),t.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFC7EA] via-[#D8C8FF] to-[#C7FFF1] animate-fade-in",children:[t.jsx("div",{className:"absolute inset-0 overflow-hidden",children:t.jsxs("div",{className:"absolute inset-0 flex",children:[t.jsx("div",{className:"flex-shrink-0 w-screen h-full",children:t.jsx($t,{src:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_61.jpg",alt:"Yuumi Magical Cat",className:"w-full h-full object-cover object-center",style:{filter:"brightness(0.88) contrast(1.12) saturate(1.2)"}})}),t.jsx("div",{className:"flex-shrink-0 w-screen h-full",children:t.jsx($t,{src:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_49.jpg",alt:"Yuumi Magical Cat 2",className:"w-full h-full object-cover",style:{filter:"brightness(0.88) contrast(1.12) saturate(1.2)"}})}),t.jsx("div",{className:"flex-shrink-0 w-screen h-full",children:t.jsx($t,{src:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_50.jpg",alt:"Yuumi Magical Cat",className:"w-full h-full object-cover",style:{filter:"brightness(0.88) contrast(1.12) saturate(1.2)"}})}),t.jsx("div",{className:"flex-shrink-0 w-screen h-full",children:t.jsx($t,{src:"https://wiki.leagueoflegends.com/en-us/images/Yuumi_YuubeeSkin.jpg?250dd",alt:"Yuumi 2 repeat",className:"w-full h-full object-cover",style:{filter:"brightness(0.88) contrast(1.12) saturate(1.2)"}})})]})}),t.jsx("div",{className:"relative mb-8 animate-bounce-slow",children:t.jsxs("div",{className:"relative w-32 h-32 sm:w-40 sm:h-40 mx-auto",children:[t.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 blur-xl opacity-60 animate-pulse"}),t.jsx($t,{src:"https://ih1.redbubble.net/image.5481873298.3314/st,small,507x507-pad,600x600,f8f8f8.jpg",alt:"Cute Cat Icon",className:"relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-6 border-white/90",style:{animation:"wiggle 4s ease-in-out infinite"}})]})}),t.jsx("h1",{className:"hero-text-glow text-4xl mb-8 text-white animate-pulse-soft tracking-wide",children:"🐾猫日本語🐾"}),t.jsx("p",{className:"hero-text-glow text-4xl sm:text-5xl lg:text-6xl text-white mb-12 animate-fade-in-delay",children:"🐾ようこそ！🐾"}),t.jsx("div",{className:"w-80 h-3 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm",children:t.jsx("div",{className:"h-full bg-gradient-to-r from-[#FFC7EA] to-[#D8C8FF] rounded-full animate-load-bar relative",children:t.jsxs("div",{className:"absolute inset-0 flex items-center justify-evenly",children:[t.jsx("span",{className:"text-white opacity-70 animate-pulse",children:"🐾"}),t.jsx("span",{className:"text-white opacity-70 animate-pulse delay-100",children:"🐾"}),t.jsx("span",{className:"text-white opacity-70 animate-pulse delay-200",children:"🐾"})]})})}),t.jsx("style",{children:`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes load-bar {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-in 0.3s both;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .animate-load-bar {
          animation: load-bar 2.5s ease-in-out forwards;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
          .hero-text-glow {
    text-shadow: 
      0 0 20px #FF69B4,
      0 0 40px #A020F0,
      0 0 60px #00FFFF,
      0 0 80px #FF69B4,
      0 0 100px #A020F0,
      0 4px 20px rgba(0,0,0,0.9);
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
  }
     
      `})]})}function eh(){return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:[t.jsx("div",{className:"float-container",children:t.jsx("div",{className:"float-track h-full",children:[...Array(2)].map((a,o)=>t.jsxs("div",{className:"float-set inline-flex",children:[t.jsx("div",{className:"w-screen h-screen flex-shrink-0",children:t.jsx($t,{src:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_61.jpg",alt:"Yuumi",className:"w-full h-full object-cover",style:{filter:"brightness(0.92) contrast(1.15) saturate(1.3)"}})}),t.jsx("div",{className:"w-screen h-screen flex-shrink-0",children:t.jsx($t,{src:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_49.jpg",alt:"Yuumi",className:"w-full h-full object-cover",style:{filter:"brightness(0.92) contrast(1.15) saturate(1.3)"}})}),t.jsx("div",{className:"w-screen h-screen flex-shrink-0",children:t.jsx($t,{src:"https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FYuumi_50.jpg&w=1200&q=75",alt:"Yuumi",className:"w-full h-full object-cover",style:{filter:"brightness(0.92) contrast(1.15) saturate(1.3)"}})}),t.jsx("div",{className:"w-screen h-screen flex-shrink-0",children:t.jsx($t,{src:"https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FYuumi_0.jpg&w=1200&q=75",alt:"Yuumi",className:"w-full h-full object-cover",style:{filter:"brightness(0.92) contrast(1.15) saturate(1.3)"}})})]},o))})}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-black/55 via-purple-900/35 to-pink-900/45 pointer-events-none"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"}),t.jsx("div",{className:"absolute top-0 left-0 w-96 h-96 bg-pink-400/25 rounded-full blur-3xl animate-pulse"}),t.jsx("div",{className:"absolute bottom-0 right-0 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-pulse delay-1000"})]}),t.jsx("style",{children:`
        .float-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .float-track {
          display: inline-flex;
          width: max-content;
          animation: float-left-to-right 160s linear infinite;
        }

        .float-set {
          display: inline-flex;
        }

        @keyframes float-left-to-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `})]})}function Bf(){const[a,o]=f.useState(""),[s,l]=f.useState(""),[u,h]=f.useState(!1),[m,g]=f.useState(""),{login:x}=vn(),w=async b=>{b.preventDefault(),g(""),h(!0);try{await x(a,s)||g("Tên đăng nhập hoặc mật khẩu không đúng!")}catch{g("Đã có lỗi xảy ra. Vui lòng thử lại!")}finally{h(!1)}};return t.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[t.jsx(eh,{}),t.jsx("div",{className:"absolute inset-0"}),t.jsx("div",{className:"absolute inset-0 pointer-events-none",children:Array.from({length:20}).map((b,y)=>t.jsx("div",{className:"absolute text-3xl animate-sakura-fall",style:{left:`${Math.random()*100}%`,top:`${-30+Math.random()*20}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${8+Math.random()*4}s`},children:"🌸"},y))}),t.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8",children:[t.jsxs("div",{className:"text-center mb-8 animate-fade-in-scale",children:[t.jsx("h1",{className:"hero-text-glow text-5xl sm:text-6xl lg:text-7xl text-white mb-4",children:"🐾 猫日本語 🐾"}),t.jsx("p",{className:"hero-text-glow text-3xl sm:text-4xl text-white",children:"にゃんこログイン"})]}),t.jsx("div",{className:"mb-8 animate-bounce-gentle",children:t.jsxs("div",{className:"relative w-32 h-32 sm:w-40 sm:h-40 mx-auto",children:[t.jsx("div",{className:"glowing-gradient-aura"}),t.jsx("div",{className:"spinning-gradient-blur"}),t.jsx("div",{className:"relative z-10 w-full h-full flex items-center justify-center",children:t.jsx($t,{src:"https://ih1.redbubble.net/image.5481873298.3314/st,small,507x507-pad,600x600,f8f8f8.jpg",alt:"Neko Nihongo",className:"profile-avatar-effect"})}),t.jsx("div",{className:"pulsing-pink-ring"})]})}),t.jsx("div",{className:"w-full max-w-md animate-slide-up",children:t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"halo-glow-neko"}),t.jsx("div",{className:"glass-panel-card",children:t.jsxs("form",{onSubmit:w,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsxs("label",{className:"block mb-2 text-gray-700",children:[t.jsx("span",{className:"mr-2 text-xl",children:"Email"})," 📧"]}),t.jsx("input",{type:"email",value:a,placeholder:"admin@neko.jp",onChange:b=>o(b.target.value),required:!0,disabled:u,className:`input-neko-focus ${m?"input-shake":""}`})]}),t.jsxs("div",{children:[t.jsxs("label",{className:"block mb-2 text-gray-700",children:[t.jsx("span",{className:"mr-2 text-xl",children:"Password"})," 🔐"]}),t.jsx("input",{type:"password",value:s,placeholder:"••••••••",onChange:b=>l(b.target.value),required:!0,disabled:u,className:`input-neko-focus ${m?"input-shake":""}`})]}),m&&t.jsx("div",{className:"text-center animate-scale-in",children:t.jsx("p",{className:"alert-error-neko",children:m})}),t.jsxs("button",{type:"submit",disabled:u,className:"btn-gradient-neko",children:[t.jsx("span",{className:"relative z-10 flex items-center justify-center gap-3",children:u?t.jsxs(t.Fragment,{children:["Đang đăng nhập..."," ",t.jsx("span",{className:"animate-spin text-2xl",children:"🐱"})]}):t.jsxs(t.Fragment,{children:["ĐĂNG NHẬP ",t.jsx("span",{className:"text-3xl",children:"🐾"})]})}),t.jsx("div",{className:"full-hover-gradient-overlay"})]})]})})]})})]}),t.jsx("style",{children:`
      .full-hover-gradient-overlay {
  /* absolute */
  position: absolute;
  
  /* inset-0 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; /* Bao phủ hoàn toàn phần tử cha */
  
  /* bg-linear-to-r from-purple-600 to-pink-600 */
  background-image: linear-gradient(to right, #9333ea, #db2777);
  /* Purple-600: #9333ea, Pink-600: #db2777 */
  
  /* opacity-0 */
  opacity: 0;
  
  /* transition-opacity duration-300 */
  transition: opacity 300ms ease-in-out;
}

/* group-hover:opacity-100 (Áp dụng khi di chuột qua phần tử cha có class 'group') */
.group:hover .full-hover-gradient-overlay {
  opacity: 1;
}
      .glass-panel-card {
  /* relative */
  position: relative;
  
  /* bg-white */
  background-color: #ffffff; /* Nền trắng (Tailwind mặc định sẽ không có opacity) */
  /* Nếu bạn muốn hiệu ứng mờ (glass effect) rõ ràng, bạn nên dùng bg-white/opacity, 
     nhưng theo yêu cầu thì giữ nguyên #ffffff cho bg-white. */
  
  /* rounded-[32px] */
  border-radius: 2rem; /* 32px (Ưu tiên giá trị tùy chỉnh này) */
  
  /* backdrop-blur-2xl */
  backdrop-filter: blur(40px); 
  
  /* p-8 */
  padding: 2rem; /* 32px */
  
  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
  
  /* border-4 */
  border-width: 4px; 
  
  /* border-white/50 */
  border-color: rgba(255, 255, 255, 0.5); /* Viền trắng mờ 50% */
}

/* Thiết lập cho màn hình nhỏ (sm) - min-width: 640px */
@media (min-width: 640px) {
  .glass-panel-card {
    /* sm:p-10 */
    padding: 2.5rem; /* 40px */
  }
}
      .pulsing-pink-ring {
  /* absolute */
  position: absolute;
  
  /* inset-0 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; /* Bao phủ hoàn toàn phần tử cha */
  
  /* rounded-full */
  border-radius: 9999px; /* Hình tròn */
  
  /* ring-8 ring-pink-400/30 (Sử dụng box-shadow để mô phỏng ring) */
  box-shadow: 0 0 0 8px rgba(244, 114, 182, 0.3);
  /* Ring 8px, màu hồng 400, độ mờ 30% */
  
  /* z-index (Đảm bảo lớp này nằm dưới nội dung chính) */
  z-index: -1; 
  
  /* animate-ping-slow (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  /* Sử dụng keyframes 'ping' để phóng to và làm mờ */
  animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Keyframes cho hiệu ứng ping-slow */
@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2); /* Phóng to gấp 2 lần */
    opacity: 0;        /* Làm mờ hoàn toàn */
  }
}
      .profile-avatar-effect {
  /* w-28, h-28 */
  width: 7rem;  /* 112px */
  height: 7rem; /* 112px */
  
  /* rounded-full */
  border-radius: 9999px;
  
  /* object-cover */
  object-fit: cover; /* Đảm bảo hình ảnh bao phủ hết container */
  
  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* border-6 border-white/95 */
  border-width: 6px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.95); /* Viền trắng dày */
  
  /* ring-4 ring-pink-300/60 (Sử dụng box-shadow để mô phỏng ring) */
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25), /* Shadow-2xl */
    0 0 0 4px rgba(249, 168, 212, 0.6);   /* Ring 4px, màu hồng nhạt mờ */

  /* transition-all duration-500 */
  transition: all 500ms ease-in-out; 
}

/* Kích thước cho màn hình nhỏ (sm) - min-width: 640px */
@media (min-width: 640px) {
  .profile-avatar-effect {
    /* sm:w-36, sm:h-36 */
    width: 9rem;  /* 144px */
    height: 9rem; /* 144px */
  }
}

/* Các hiệu ứng hover */
.profile-avatar-effect:hover {
  /* hover:ring-pink-400/90 (Thay đổi lớp ring hiện tại) */
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25), /* Shadow-2xl giữ nguyên */
    0 0 0 4px rgba(244, 114, 182, 0.9);   /* Ring 4px, màu hồng đậm hơn và rõ hơn */
    
  /* hover:scale-110 */
  transform: scale(1.1) rotate(-6deg); 
  
  /* hover:-rotate-6 */
  /* transform: rotate(-6deg); đã được gộp vào transform: scale(1.1) ở trên */
}
      .spinning-gradient-blur {
  /* absolute */
  position: absolute;
  
  /* inset-2 */
  top: 0.5rem;    /* 8px */
  right: 0.5rem;  /* 8px */
  bottom: 0.5rem; /* 8px */
  left: 0.5rem;   /* 8px */
  /* Tạo viền đệm 8px bên trong phần tử cha */
  
  /* rounded-full */
  border-radius: 9999px; /* Hình tròn */
  
  /* bg-linear-to-br from-pink-300 to-purple-400 */
  background-image: linear-gradient(to bottom right, #f9a8d4, #c084fc);
  /* Pink-300: #f9a8d4, Purple-400: #c084fc */
  
  /* blur-xl */
  filter: blur(20px); 
  
  /* opacity-50 */
  opacity: 0.5;
  
  /* z-index (Thường cần thiết để đặt phía sau) */
  z-index: -1; 
  
  /* animate-spin-slow (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: spin-slow 8s linear infinite; /* Tốc độ xoay chậm hơn */
}

/* Keyframes cho hiệu ứng spin-slow */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
      .glowing-gradient-aura {
  /* absolute */
  position: absolute;
  
  /* inset-0 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; /* Bao phủ hoàn toàn phần tử cha */
  
  /* rounded-full */
  border-radius: 9999px; /* Hình tròn */
  
  /* bg-linear-to-br from-pink-400 via-purple-400 to-indigo-500 */
  background-image: linear-gradient(to bottom right, #f472b6, #c084fc, #6366f1);
  /* Pink-400: #f472b6, Purple-400: #c084fc, Indigo-500: #6366f1 */
  
  /* blur-3xl */
  filter: blur(48px); /* Làm mờ rất mạnh */
  
  /* opacity-60 */
  opacity: 0.6;
  
  /* z-index (Thường cần thiết để đặt phía sau) */
  z-index: -1; 
  
  /* animate-pulse-slow (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Keyframes cho hiệu ứng pulse-slow (giảm/tăng độ mờ chậm) */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.4;
  }
}
                .hero-text-glow {
          text-shadow: 
            0 0 20px #FF69B4,
            0 0 40px #A020F0,
            0 0 60px #00FFFF,
            0 0 80px #FF69B4,
            0 0 100px #A020F0,
            0 4px 20px rgba(0,0,0,0.9);
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
        }

        @keyframes scroll-bg {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100vw); }
        }

        .animate-scroll-bg {
          animation: scroll-bg 30s linear infinite;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        @keyframes fade-in-scale {
          0% { 
            opacity: 0;
            transform: scale(0);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out;
        }

        @keyframes slide-up {
          0% { 
            opacity: 0;
            transform: translateY(50px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.3s both;
        }

        @keyframes scale-in {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        @keyframes sakura-fall {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
          }
          100% {
            transform: translateY(100vh) rotate(360deg) translateX(50px);
          }
        }

        .animate-sakura-fall {
          animation: sakura-fall 10s linear infinite;
        }

        @keyframes wiggle-1 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
        }

        .animate-wiggle-1 {
          animation: wiggle-1 2s ease-in-out infinite;
        }

        @keyframes wiggle-2 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }

        .animate-wiggle-2 {
          animation: wiggle-2 2s ease-in-out infinite 0.5s;
        }

        @keyframes wiggle-3 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }

        .animate-wiggle-3 {
          animation: wiggle-3 2s ease-in-out infinite 1s;
        }

        @keyframes wiggle-4 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
        }

        .animate-wiggle-4 {
          animation: wiggle-4 2s ease-in-out infinite 1.5s;
        }

        @keyframes confetti {
          0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(var(--confetti-x), calc(var(--confetti-y) / 2)) scale(1) rotate(calc(var(--confetti-rotate) / 2));
            opacity: 1;
          }
          100% {
            transform: translate(var(--confetti-x), var(--confetti-y)) scale(0.8) rotate(var(--confetti-rotate));
            opacity: 0;
          }
        }

        .animate-confetti {
          animation: confetti 2.5s ease-out forwards;
        }

        input::placeholder {
          color: #d8b4d8;
        }

        input:focus {
          transform: translateY(-2px);
        }

        /* Paw cursor effect */
        button:hover {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23ff69b4"><text y="20" font-size="20">🐾</text></svg>') 12 12, pointer;
        }
        .input-neko-focus {
    /* Trạng thái mặc định */
    width: 100%;
    padding: 1.5rem 1.5rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    border: 4px solid #FBB6CE;                    /* border-pink-300 */
    color: #1F2937;
    font-size: 1.125rem;
    font-weight: 600;
    outline: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 25px -5px rgba(236, 72, 153, 0.15);
  }

  .input-neko-focus::placeholder {
    color: rgba(168, 85, 247, 0.6);               /* tím nhạt cho placeholder */
  }

  /* KHI FOCUS – ĐẸP NHƯ ƯỚC MƠ */
  .input-neko-focus:focus {
    border-color: #A855F7;                        /* border-purple-500 */
    box-shadow: 
      0 0 0 4px rgba(168, 85, 247, 0.3),          /* focus:ring-4 + focus:ring-purple-200 */
      0 20px 40px -10px rgba(168, 85, 247, 0.35);
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 1);
  }

  /* Hiệu ứng khi đã nhập chữ (không còn placeholder) */
  .input-neko-focus:not(:placeholder-shown) {
    border-color: #F472B6;                        /* hồng đậm hơn một chút */
  }

  /* Optional: rung nhẹ khi sai */
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }
  .input-shake {
    animation: shake 0.5s ease-in-out;
    border-color: #EF4444 !important;
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.3) !important;
  }

  .alert-error-neko {
    color: #EF4444;                    /* text-red-500 */
    background-color: #FEE2E2;         /* bg-red-100 */
    border: 3px solid #FCA5A5;         /* viền đỏ hồng cute thêm */
    border-radius: 1rem;               /* rounded-2xl */
    padding: 1rem 1.5rem;              /* px-6 py-4 → mình làm to hơn tí cho dễ đọc */
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(239, 68, 68, 0.25);
    backdrop-filter: blur(10px);
    animation: shake 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    max-width: 420px;
    margin: 1rem auto;
  }

  /* Icon cảnh báo (tùy chọn thêm) */
  .alert-error-neko::before {
    content: "Warning";
    font-size: 1.8rem;
  }

  /* Animation shake siêu mượt + rung mạnh hơn */
  @keyframes shake {
    0%, 100%   { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-12px); }
    20%, 40%, 60%, 80%      { transform: translateX(12px); }
  }

  /* Khi hover → rung thêm lần nữa (cực kỳ cute) */
  .alert-error-neko:hover {
    animation: shake 0.8s ease-in-out;
    background-color: #FECACA;   /* đỏ nhạt hơn khi hover */
  }

  .btn-gradient-neko {
    /* Kích thước & layout */
    width: 100%;
    padding-top: 1.25rem;      /* py-5 */
    padding-bottom: 1.25rem;
    border-radius: 1rem;       /* rounded-2xl */
    font-weight: 800;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    text-align: center;

    /* Gradient chính xác như Tailwind */
    background: linear-gradient(to right, #ec4899, #a855f7, #ec4899); /* from-pink-500 → via-purple-500 → to-pink-500 */
    color: white;
    border: none;
    cursor: pointer;

    /* Bóng đổ */
    box-shadow: 0 10px 25px -5px rgba(236, 72, 153, 0.4),
                0 20px 40px -12px rgba(168, 85, 247, 0.35);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    /* Hiệu ứng hover */
    &:hover {
      box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.5),
                  0 35px 60px -15px rgba(168, 85, 247, 0.45);
      transform: scale(1.05);
    }

    /* Hiệu ứng click */
    &:active {
      transform: scale(0.95);
    }

    /* Hiệu ứng sóng lấp lánh khi hover (cực kỳ kawaii max level) */
    position: relative;
    overflow: hidden;
  }

  .btn-gradient-neko::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.7s;
  }

  .btn-gradient-neko:hover::before {
    left: 100%;
  }

  /* Icon hoặc text bên trong vẫn căn giữa đẹp */
  .btn-gradient-neko > * {
    position: relative;
    z-index: 10;
  }
  
  .halo-glow-neko {
    /* Đè ra ngoài phần tử cha 1px mỗi cạnh → tạo hiệu ứng viền phát sáng */
    position: absolute;
    inset: -1px;                     /* -inset-1 = top:-1px right:-1px bottom:-1px left:-1px */

    /* Gradient siêu rực */
    background: linear-gradient(
      to right,
      #ec4899 0%,      /* from-pink-500 */
      #a855f7 50%,     /* via-purple-500 */
      #06b6d4 100%     /* to-cyan-500 */
    );

    border-radius: 1.5rem;           /* rounded-3xl */
    filter: blur(20px);              /* blur-xl */
    opacity: 0.75;

    /* Hiệu ứng nhấp nháy nhẹ nhàng */
    animation: pulseGlow 3s ease-in-out infinite;
    z-index: -1;                     /* luôn nằm dưới nội dung chính */
  }

  /* Pulse mượt hơn + sáng tối nhịp nhàng */
  @keyframes pulseGlow {
    0%, 100% {
      opacity: 0.65;
      transform: scale(1);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }

  /* Khi hover lên phần tử cha → sáng bùng lên luôn! */
  .group:hover .halo-glow-neko {
    opacity: 1;
    filter: blur(24px);
    animation-duration: 1.5s;
  }
    
      `})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kf=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,s,l)=>l?l.toUpperCase():s.toLowerCase()),im=a=>{const o=Kf(a);return o.charAt(0).toUpperCase()+o.slice(1)},th=(...a)=>a.filter((o,s,l)=>!!o&&o.trim()!==""&&l.indexOf(o)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=f.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:u="",children:h,iconNode:m,...g},x)=>f.createElement("svg",{ref:x,...Vf,width:o,height:o,stroke:a,strokeWidth:l?Number(s)*24/Number(o):s,className:th("lucide",u),...g},[...m.map(([w,b])=>f.createElement(w,b)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(a,o)=>{const s=f.forwardRef(({className:l,...u},h)=>f.createElement(qf,{ref:h,iconNode:o,className:th(`lucide-${Uf(im(a))}`,`lucide-${a}`,l),...u}));return s.displayName=im(a),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],om=Le("activity",Gf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nh=Le("arrow-left",Wf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],sm=Le("bell",Qf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Un=Le("book-open",Xf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Zf=Le("calendar",Jf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]],tt=Le("cat",ex);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]],nx=Le("chart-no-axes-column-increasing",tx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oo=Le("check",rx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fl=Le("chevron-down",ax);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],dt=Le("chevron-left",ix);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xt=Le("chevron-right",ox);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],lx=Le("chevron-up",sx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],bn=Le("circle-alert",cx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],yn=Le("circle-check-big",dx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mx=Le("circle-check",ux);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Dl=Le("circle-help",hx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Il=Le("circle-x",px);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],fx=Le("clipboard-check",gx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],dr=Le("clock",xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],xl=Le("copy",bx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Fa=Le("database",yx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],rh=Le("download",wx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]],kx=Le("dumbbell",vx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ah=Le("eye",jx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hr=Le("file-text",Nx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Cx=Le("grid-3x3",Sx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Tx=Le("grip-vertical",zx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],_x=Le("hash",Ex);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Vl=Le("house",Mx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Px=Le("info",Lx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Fx=Le("key",Ax);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],ih=Le("languages",Dx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],so=Le("list",Ix);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],bl=Le("loader-circle",Ox);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],$x=Le("log-out",Rx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],lo=Le("message-square",Hx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],yo=Le("refresh-cw",Yx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],oh=Le("rotate-ccw",Bx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Ur=Le("search",Ux);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],sh=Le("send",Kx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Wt=Le("sparkles",Vx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Gx=Le("square-check-big",qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Qx=Le("square-x",Wx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Ol=Le("square",Xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Zx=Le("star",Jx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],co=Le("trash-2",eb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Rr=Le("triangle-alert",tb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],rb=Le("type",nb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ql=Le("user",ab);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Kr=Le("x",ib);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],sb=Le("zap",ob);function lb({onNavigate:a}){return t.jsxs("div",{className:"subtle-gradient-background",children:[t.jsx("section",{className:"container animate-fade-in mx-auto px-4 sm:px-6 py-16 lg:py-24",children:t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[t.jsx("button",{onClick:()=>a("hirakata-selector"),className:"interactive-elevated-card",children:t.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[t.jsx("div",{className:"triple-gradient-bouncing-circle",children:t.jsx(rb,{className:"w-10 h-10 text-white"})}),t.jsx("h3",{className:"responsive-gray-text",children:"Bảng Chữ Cái"}),t.jsx("p",{className:"responsive-text-caption",children:"Học Hiragana & Katakana - Nền tảng tiếng Nhật"}),t.jsxs("div",{className:"flex gap-2 pt-2",children:[t.jsx("span",{className:"text-2xl animate-wiggle delay-3",children:"🃏"}),t.jsx("span",{className:"text-2xl",children:"✨"})]})]})}),t.jsx("button",{onClick:()=>a("vocabulary-selector"),className:"interactive-elevated-card",children:t.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[t.jsx("div",{className:"pulsing-gradient-circle",children:t.jsx(ih,{className:"w-10 h-10 text-white"})}),t.jsx("h3",{className:"responsive-gray-text",children:"Từ Vựng"}),t.jsx("p",{className:"responsive-text-caption",children:"Học từ vựng tiếng Nhật cơ bản"}),t.jsxs("div",{className:"flex gap-2 pt-2",children:[t.jsx("span",{className:"text-2xl animate-wiggle",children:"😺"}),t.jsx("span",{className:"text-2xl",children:"📚"})]})]})}),t.jsx("button",{onClick:()=>a("grammar-selector"),className:"interactive-elevated-card",children:t.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[t.jsx("div",{className:"subtle-bouncing-gradient-circle",children:t.jsx(Un,{className:"w-10 h-10 text-white"})}),t.jsx("h3",{className:"responsive-gray-text",children:"Ngữ Pháp"}),t.jsx("p",{className:"responsive-text-caption",children:"Khám phá cấu trúc câu và ngữ pháp tiếng Nhật một cách dễ hiểu"}),t.jsxs("div",{className:"flex gap-2 pt-2",children:[t.jsx("span",{className:"text-2xl animate-wiggle delay-1",children:"🤓"}),t.jsx("span",{className:"text-2xl",children:"📖"})]})]})}),t.jsx("button",{onClick:()=>a("kanji-selector"),className:"interactive-elevated-card",children:t.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[t.jsx("div",{className:"bouncing-gradient-circle-alt",children:t.jsx(Hr,{className:"w-10 h-10 text-white"})}),t.jsx("h3",{className:"responsive-gray-text",children:"Kanji"}),t.jsx("p",{className:"responsive-text-caption",children:"Học chữ Kanji với ý nghĩa và cách đọc On-Kun chi tiết"}),t.jsxs("div",{className:"flex gap-2 pt-2",children:[t.jsx("span",{className:"text-2xl animate-wiggle delay-2",children:"✍️"}),t.jsx("span",{className:"text-2xl",children:"📝"})]})]})}),t.jsx("button",{onClick:()=>a("exercise-selector"),className:"interactive-elevated-card",children:t.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[t.jsx("div",{className:"triple-gradient-bouncing-circle-v2",children:t.jsx(fx,{className:"w-10 h-10 text-white"})}),t.jsx("h3",{className:"responsive-gray-text",children:"Bài Tập"}),t.jsx("p",{className:"responsive-text-caption",children:"Làm bài tập trắc nghiệm để kiểm tra kiến thức của bạn"}),t.jsxs("div",{className:"flex gap-2 pt-2",children:[t.jsx("span",{className:"text-2xl animate-wiggle delay-4",children:"📝"}),t.jsx("span",{className:"text-2xl",children:"💯"})]})]})})]})}),t.jsx("div",{className:"fixed bottom-10 right-10 pointer-events-none z-50 hidden lg:block",children:t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:`w-40 h-40 
               sm:w-24 sm:h-24 
               md:w-28 md:h-28 
               lg:w-32 lg:h-32 
               xl:w-36 xl:h-36 
               rounded-full object-cover 
               shadow-2xl 
               animate-fly 
               drop-shadow-2xl`,style:{filter:"drop-shadow(0 10px 20px rgba(255, 182, 233, 0.4))"}})}),t.jsx("style",{children:`
      .triple-gradient-bouncing-circle-v2 {
  /* w-20 h-20 */
  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  
  /* rounded-full */
  border-radius: 9999px; /* Hình tròn */
  
  /* bg-gradient-to-br from-[#D8C8FF] via-[#FFC7EA] to-[#FFF6E9] */
  background-image: linear-gradient(to bottom right, #D8C8FF, #FFC7EA, #FFF6E9);
  /* Tím nhạt -> Hồng nhạt -> Kem nhạt */
  
  /* flex items-center justify-center */
  display: flex;
  align-items: center; /* Căn giữa dọc */
  justify-content: center; /* Căn giữa ngang */
  
  /* transition (Thêm vào để hiệu ứng tắt/bật animation mượt mà hơn) */
  transition: transform 0.5s;
}

/* Keyframes cho hiệu ứng bounce-subtle (nhảy nhẹ và chậm) */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%); /* Nhảy lên 5% */
  }
}

/* group-hover:animate-bounce-subtle */
/* Áp dụng animation khi di chuột qua phần tử cha có class 'group' */
.group:hover .triple-gradient-bouncing-circle-v2 {
  animation: bounce-subtle 1.5s infinite; /* Animation chậm 1.5s và lặp lại */
}
      
      .triple-gradient-bouncing-circle {
  /* w-20 h-20 */
  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  
  /* rounded-full */
  border-radius: 9999px; /* Hình tròn */
  
  /* bg-gradient-to-br from-[#FFC7EA] via-[#D8C8FF] to-[#C7FFF1] */
  background-image: linear-gradient(to bottom right, #FFC7EA, #D8C8FF, #C7FFF1);
  /* Hồng nhạt -> Tím nhạt -> Xanh ngọc nhạt */
  
  /* flex items-center justify-center */
  display: flex;
  align-items: center; /* Căn giữa dọc */
  justify-content: center; /* Căn giữa ngang */
  
  /* transition (Thêm vào để hiệu ứng tắt/bật animation mượt mà hơn) */
  transition: transform 0.5s;
}

/* Keyframes cho hiệu ứng bounce-subtle (nhảy nhẹ và chậm) */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%); /* Nhảy lên 5% */
  }
}

/* group-hover:animate-bounce-subtle */
/* Áp dụng animation khi di chuột qua phần tử cha có class 'group' */
.group:hover .triple-gradient-bouncing-circle {
  animation: bounce-subtle 1.5s infinite; /* Animation chậm 1.5s và lặp lại */
}

.interactive-elevated-card {
  /* group */
  /* Lớp đánh dấu cho phần tử cha, không có thuộc tính CSS trực tiếp. */

  /* rounded-[32px] */
  border-radius: 2rem; /* 32px */
  
  /* p-6 */
  padding: 1.5rem; /* 24px */
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
  
  /* transform (Thiết lập trạng thái mặc định: không có dịch chuyển, scale 1) */
  transform: translateY(0) scale(1);
  
  /* transition-all duration-300 */
  transition: all 300ms ease-in-out; 
  
  /* cursor-pointer */
  cursor: pointer;
}

/* Kích thước đệm cho màn hình nhỏ (sm) - min-width: 640px */
@media (min-width: 640px) {
  .interactive-elevated-card {
    /* sm:p-8 */
    padding: 2rem; /* 32px */
  }
}

/* Các hiệu ứng hover */
.interactive-elevated-card:hover {
  /* hover:shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* hover:scale-105 và hover:-translate-y-2 */
  /* Gộp cả hai biến đổi vào thuộc tính transform */
  transform: translateY(-0.5rem) scale(1.05); /* -translate-y-2 = -0.5rem (8px) */
}
      .bouncing-gradient-circle-alt {
  /* w-20 h-20 */
  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  
  /* rounded-full */
  border-radius: 9999px; /* Hình tròn */
  
  /* bg-gradient-to-br from-[#C7FFF1] to-[#FFC7EA] */
  background-image: linear-gradient(to bottom right, #C7FFF1, #FFC7EA);
  /* Xanh ngọc nhạt sang Hồng nhạt */
  
  /* flex items-center justify-center */
  display: flex;
  align-items: center; /* Căn giữa dọc */
  justify-content: center; /* Căn giữa ngang */
  
  /* transition (Thêm vào để hiệu ứng tắt/bật animation mượt mà hơn) */
  transition: transform 0.5s;
}

/* Keyframes cho hiệu ứng bounce-subtle (nhảy nhẹ và chậm) */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%); /* Nhảy lên 5% */
  }
}

/* group-hover:animate-bounce-subtle */
/* Áp dụng animation khi di chuột qua phần tử cha có class 'group' */
.group:hover .bouncing-gradient-circle-alt {
  animation: bounce-subtle 1.5s infinite; /* Animation chậm 1.5s và lặp lại */
}
      .interactive-elevated-card {
  /* group */
  /* Lớp đánh dấu cho phần tử cha, không có thuộc tính CSS trực tiếp. */
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); /* Nền trắng mờ 80% */
  
  /* rounded-[32px] */
  border-radius: 2rem; /* 32px */
  
  /* p-6 */
  padding: 1.5rem; /* 24px */
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
  
  /* transform (Chỉ định transform để transition hoạt động) */
  /* Thiết lập trạng thái mặc định: không có dịch chuyển, scale 1 */
  transform: translateY(0) scale(1);
  
  /* transition-all duration-300 */
  transition: all 300ms ease-in-out; 
  
  /* cursor-pointer */
  cursor: pointer;
}

/* Kích thước đệm cho màn hình nhỏ (sm) - min-width: 640px */
@media (min-width: 640px) {
  .interactive-elevated-card {
    /* sm:p-8 */
    padding: 2rem; /* 32px */
  }
}

/* Các hiệu ứng hover */
.interactive-elevated-card:hover {
  /* hover:shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* hover:scale-105 và hover:-translate-y-2 */
  /* Gộp cả hai biến đổi vào thuộc tính transform */
  transform: translateY(-0.5rem) scale(1.05); /* -translate-y-2 = -0.5rem (8px) */
}
      .interactive-elevated-card {
  /* group */
  /* Lớp đánh dấu cho phần tử cha, không có thuộc tính CSS trực tiếp. */
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); /* Nền trắng mờ 80% */
  
  /* rounded-[32px] */
  border-radius: 2rem; /* 32px */
  
  /* p-6 */
  padding: 1.5rem; /* 24px */
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
  
  /* transform (Chỉ định transform để transition hoạt động) */
  transform: translate(0, 0) scale(1);
  
  /* transition-all duration-300 */
  transition: all 300ms ease-in-out; 
  
  /* cursor-pointer */
  cursor: pointer;
}

/* Kích thước đệm cho màn hình nhỏ (sm) - min-width: 640px */
@media (min-width: 640px) {
  .interactive-elevated-card {
    /* sm:p-8 */
    padding: 2rem; /* 32px */
  }
}

/* Các hiệu ứng hover */
.interactive-elevated-card:hover {
  /* hover:shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* hover:scale-105 và hover:-translate-y-2 */
  /* Gộp cả hai biến đổi vào thuộc tính transform */
  transform: translateY(-0.5rem) scale(1.05); /* -translate-y-2 = -0.5rem (8px) */
}
      .subtle-bouncing-gradient-circle {
  /* w-20 h-20 */
  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  
  /* rounded-full */
  border-radius: 9999px; /* Hình tròn */
  
  /* bg-gradient-to-br from-[#D8C8FF] to-[#C7FFF1] */
  background-image: linear-gradient(to bottom right, #D8C8FF, #C7FFF1);
  /* Tím nhạt sang Xanh ngọc nhạt */
  
  /* flex items-center justify-center */
  display: flex;
  align-items: center; /* Căn giữa dọc */
  justify-content: center; /* Căn giữa ngang */
  
  /* transition (Thêm vào để hiệu ứng tắt/bật animation mượt mà hơn) */
  transition: transform 0.5s;
}

/* Keyframes cho hiệu ứng bounce-subtle (nhảy nhẹ và chậm) */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%); /* Nhảy lên 5% */
  }
}

/* group-hover:animate-bounce-subtle */
/* Áp dụng animation khi di chuột qua phần tử cha có class 'group' */
.group:hover .subtle-bouncing-gradient-circle {
  animation: bounce-subtle 1.5s infinite; /* Animation chậm 1.5s và lặp lại */
}
      .responsive-text-caption {
  /* text-sm */
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  
  /* text-gray-600 */
  color: #4b5563; 
}

/* Kích thước cho màn hình nhỏ (sm) - min-width: 640px */
@media (min-width: 640px) {
  .responsive-text-caption {
    /* sm:text-base */
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }
}
      .responsive-gray-text {
  /* text-xl */
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  
  /* text-gray-800 */
  color: #1f2937; 
}

/* Kích thước cho màn hình nhỏ (sm) - min-width: 640px */
@media (min-width: 640px) {
  .responsive-gray-text {
    /* sm:text-2xl */
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
  }
}
      .pulsing-gradient-circle {
  /* w-20 h-20 */
  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  
  /* rounded-full */
  border-radius: 9999px; /* Hình tròn */
  
  /* bg-gradient-to-br from-[#FFC7EA] to-[#D8C8FF] */
  background-image: linear-gradient(to bottom right, #FFC7EA, #D8C8FF);
  
  /* flex items-center justify-center */
  display: flex;
  align-items: center; /* Căn giữa dọc */
  justify-content: center; /* Căn giữa ngang */
  
  /* transition (Thêm vào để hiệu ứng tắt/bật animation mượt mà hơn) */
  transition: transform 0.5s;
}

/* Keyframes cho hiệu ứng bounce-subtle (nhảy nhẹ và chậm) */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%); /* Nhảy lên 5% */
  }
}
/* group-hover:animate-bounce-subtle */
/* Áp dụng animation khi di chuột qua phần tử cha có class 'group' */
.group:hover .pulsing-gradient-circle {
  animation: bounce-subtle 1.5s infinite; /* Animation chậm 1.5s và lặp lại */
}
.subtle-gradient-background {
  /* min-h-screen */
  min-height: 100vh; /* Chiều cao tối thiểu bằng chiều cao của viewport */

  background-attachment: fixed; /* (Thường được thêm vào để gradient toàn màn hình mượt mà) */
}
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes fly {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-50px, -30px); }
          50% { transform: translate(-100px, 0); }
          75% { transform: translate(-50px, 30px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes sakura-fall {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        @keyframes sparkle {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-5px); opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 1s ease-in-out infinite;
        }

        .animate-fly {
          animation: fly 10s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }

        .delay-1 {
          animation-delay: 0.3s;
        }

        .delay-2 {
          animation-delay: 0.6s;
        }

        .delay-3 {
          animation-delay: 0.9s;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-sakura-fall {
          animation: sakura-fall 3s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

                .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
                  @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function Pt({message:a="Đang tải từ vựng mèo...",duration:o=1500,onComplete:s}){return f.useEffect(()=>{if(o>0){const l=setTimeout(()=>{s?.()},o);return()=>clearTimeout(l)}},[o,s]),t.jsxs("div",{className:"fixed-gradient-background",children:[t.jsx("div",{className:"relative mb-12 animate-bounce-slow",children:t.jsxs("div",{className:"relative w-40 h-40 mx-auto",children:[t.jsx("div",{className:"pulsing-gradient-glow"}),t.jsx($t,{src:"https://ih1.redbubble.net/image.5481873298.3314/st,small,507x507-pad,600x600,f8f8f8.jpg",alt:"Neko Loading",className:"profile-image-styled",style:{animation:"wiggle 3s ease-in-out infinite"}})]})}),t.jsx("h1",{className:"hero-text-glow hero-section-title",children:"猫日本語"}),t.jsx("p",{className:"pulsing-main-title",children:a}),t.jsx("div",{className:"loading-bar-shell-blur",children:t.jsx("div",{className:"loading-bar-indicator",children:t.jsx("div",{className:"absolute inset-0 flex items-center justify-evenly",children:[...Array(6)].map((l,u)=>t.jsx("span",{className:"text-white text-2xl animate-bounce",style:{animationDelay:`${u*.15}s`}},u))})})}),t.jsx("style",{children:`
      @keyframes load-bar {
  0% {
    width: 0%;
  }
  50% {
    width: 75%;
  }
  100% {
    width: 100%;
  }
}

.loading-bar-indicator {
  height: 100%;
  background-image: linear-gradient(to right, #f472b6, #8b5cf6, #22d3ee);
  border-radius: 9999px;
  position: relative;
  /* Giả định animation chạy liên tục và điều chỉnh tốc độ, có thể thay đổi tùy ý */
  animation: load-bar 1.5s infinite ease-in-out; 
}

      .loading-bar-shell-blur {
  width: 24rem;
  height: 1rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 9999px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
      @keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.pulsing-main-title {
  /* text-3xl */
  font-size: 1.875rem;
  /* text-white */
  color: #ffffff;
  /* font-bold */
  font-weight: 700;
  /* animate-pulse-soft */
  animation: pulse-soft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  /* mb-12 */
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .pulsing-main-title {
    /* md:text-4xl */
    font-size: 2.25rem;
  }
}
      .hero-section-title {
  /* text-5xl */
  font-size: 3rem; 
  /* font-black */
  font-weight: 900; 
  /* text-white */
  color: #ffffff;
  /* mb-6 */
  margin-bottom: 1.5rem; 
  /* tracking-wider */
  letter-spacing: 0.05em; 
  /* hero-text-glow (Tạo hiệu ứng phát sáng nhẹ màu trắng) */
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
}

@media (min-width: 768px) {
  .hero-section-title {
    /* md:text-6xl */
    font-size: 3.75rem; 
  }
}
      .profile-image-styled {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-width: 8px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.9);
}

      @keyframes pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.35;
  }
}

.pulsing-gradient-glow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 9999px;
  background-image: linear-gradient(to bottom right, #fbcfe8, #a855f7);
  filter: blur(40px);
  opacity: 0.7;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
      .fixed-gradient-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #FFC7EA, #D8C8FF, #C7FFF1);
}
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        @keyframes pulse-soft {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes load-bar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
        .animate-load-bar {
          animation: load-bar 1.4s ease-out forwards;
        }
        .hero-text-glow {
          text-shadow: 0 0 20px #ff69b4, 0 0 40px #a020f0, 0 0 60px #00ffff,
            0 0 80px #ff69b4, 0 0 100px #a020f0, 0 4px 20px rgba(0, 0, 0, 0.9);
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8));
        }
      `})]})}function Lt({isOpen:a,onClose:o,title:s="Thông báo từ mèo",message:l}){return a?t.jsxs("div",{className:"modal-overlay-fade-in",children:[t.jsxs("div",{className:"modal-card-styled",children:[t.jsxs("div",{className:"w-32 h-32 mx-auto mb-6 relative",children:[t.jsx("div",{className:"pulsing-gradient-soft-glow"}),t.jsx(tt,{className:"w-full h-full extra-large-wiggle"})]}),t.jsx("h2",{className:"section-title-bold",children:s}),t.jsx("p",{className:"paragraph-styled-large",children:l}),t.jsx("button",{onClick:o,className:"gradient-cta-button",children:"Được rồi mèo ơi!"})]}),t.jsx("style",{children:`
      .gradient-cta-button {
  /* px-12 py-5 */
  padding-left: 3rem; 
  padding-right: 3rem; 
  padding-top: 1.25rem; 
  padding-bottom: 1.25rem; 
  
  /* bg-gradient-to-r from-pink-500 to-purple-600 */
  background-image: linear-gradient(to right, #ec4899, #7c3aed);
  
  /* text-white */
  color: #ffffff;
  
  /* rounded-2xl */
  border-radius: 1rem;
  
  /* text-2xl */
  font-size: 1.5rem;
  
  /* font-bold */
  font-weight: 700;
  
  /* transition-all */
  transition: all 150ms ease-in-out;
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

/* Các hiệu ứng hover */
.gradient-cta-button:hover {
  /* hover:scale-110 */
  transform: scale(1.1);
}
      .paragraph-styled-large {
  font-size: 1.5rem;
  color: #374151;
  margin-bottom: 2.5rem;
  line-height: 1.625;
}
      
      @keyframes wiggle-slow {
  0%, 100% {
    transform: rotate(-0.5deg);
  }
  50% {
    transform: rotate(0.5deg);
  }
}

.extra-large-wiggle {
  position: relative;
  z-index: 10;
  font-size: 8rem; /* text-9xl (128px) */
  animation: wiggle-slow 6s ease-in-out infinite;
}
      .section-title-bold {
  font-size: 2.25rem;
  font-weight: 900;
  color: #7c3aed;
  margin-bottom: 1rem;
}
      @keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.3;
  }
}

.pulsing-gradient-soft-glow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 9999px;
  background-image: linear-gradient(to bottom right, #fbcfe8, #a855f7);
  filter: blur(24px);
  opacity: 0.6;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
      @keyframes bounce-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  70% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.modal-card-styled {
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 2.5rem;
  max-width: 28rem; /* max-w-md */
  width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1);
  animation: bounce-in 400ms ease-out forwards;
}
      @keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-overlay-fade-in {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: fade-in 300ms ease-out forwards;
}
        @keyframes wiggle-slow {
          0%,
          100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-wiggle-slow {
          animation: wiggle-slow 3s ease-in-out infinite;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `})]}):null}const cb=[];function db({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState(null),[h,m]=f.useState(""),[g,x]=f.useState(1),[w,b]=f.useState(1),[y,k]=f.useState(!0),[I,j]=f.useState(""),[v,N]=f.useState(!1),V=12,O=12;f.useEffect(()=>{(async()=>{try{const xe=(await Ie.get("/vocabulary/lessons")).data.data||[];await new Promise(W=>setTimeout(W,600)),s(xe)}catch(A){if(console.error("Lỗi khi tải từ vựng:",A),A.response?.status===401){alert("Phiên đăng nhập hết hạn! Mèo đưa bạn về trang đăng nhập nhé"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("nekoUser"),a("login");return}s(cb||[]),j("Không thể kết nối đến server! Mèo đã tải dữ liệu mẫu cho bạn rồi")}finally{setTimeout(()=>{k(!1)},600)}})()},[a]);const B=()=>{if(!l||l.words.length===0){N(!0);return}let C=[...l.words];C.length>10&&(C=C.sort(()=>Math.random()-.5).slice(0,10));const A="vocabulary",xe={lessonId:l.id,lessonTitle:l.title,words:C,originPage:A};localStorage.setItem("nekoFlashcardData",JSON.stringify(xe)),localStorage.setItem("nekoFlashcardAllWords",JSON.stringify({words:l.words,originPage:A})),requestAnimationFrame(()=>a("flashcard"))},G=f.useMemo(()=>{if(!h.trim())return[];let C=[];if(h){const A=h.toLowerCase();o.forEach(xe=>{xe.words.forEach(W=>{(W.japanese.toLowerCase().includes(A)||W.kanji.toLowerCase().includes(A)||W.vietnamese.toLowerCase().includes(A))&&C.push({word:W,lessonId:xe.id})})})}return C.slice(0,20)},[h,o]),te=Math.ceil(o.length/V),de=o.slice((g-1)*V,g*V),q=l?l.words.slice((w-1)*O,w*O):[],le=l?Math.ceil(l.words.length/O):0;return y?t.jsx(Pt,{message:"Đang tải từ vựng mèo..."}):I?t.jsx("div",{className:"min-h-screen flex items-center justify-center",children:t.jsx("p",{className:"text-3xl font-bold text-red-400",children:I})}):t.jsxs("div",{className:"min-h-screen",children:[t.jsxs("main",{className:"relative z-10 container mx-auto px-4 py-12",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("h1",{className:"relative z-10 mb-12 md:mb-16",children:[t.jsx("div",{className:"absolute inset-0 -z-10 rounded-3xl"}),t.jsx("span",{className:"hero-section-title hero-text-glow",children:"Từ Vựng Tiếng Nhật"})]}),t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx("div",{className:"relative group ",children:t.jsxs("div",{className:"glass-effect-container animate-fade-in",children:[t.jsx("div",{className:"element-overlay-positioned",children:t.jsx(Ur,{className:"icon-centered-left",strokeWidth:5})}),t.jsx("input",{type:"text",placeholder:"Tìm từ vựng... (猫, neko, mèo, bài 10...)",value:h,onChange:C=>{m(C.target.value),u(null)},className:"transparent-search-input"})]})}),G.length>0&&t.jsxs("div",{className:"mt-10 max-w-4xl mx-auto space-y-4 animate-fade-in",children:[t.jsxs("p",{className:"pulsing-centered-text",children:["Tìm thấy ",G.length," kết quả"]}),G.map(({word:C,lessonId:A},xe)=>t.jsxs("div",{className:"glass-card-hover-effect",children:[t.jsx("div",{className:"full-gradient-hover-effect"}),t.jsxs("div",{className:"flex items-center justify-between gap-6",children:[t.jsxs("div",{className:"flex-1 text-left",children:[t.jsx("p",{className:"rainbow-glow-title",children:C.japanese}),t.jsx("p",{className:"small-rainbow-glow",children:C.kanji})]}),t.jsxs("div",{className:"text-right",children:[t.jsx("p",{className:"white-rainbow-glow-bold",children:C.vietnamese}),t.jsxs("p",{className:"small-white-rainbow-glow",children:["Bài ",A]})]})]})]},xe))]})]})]}),l?t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("div",{className:"flex  items-center justify-right mb-10",children:t.jsxs("div",{className:"w-full  flex flex-col items-center gap-4",children:[t.jsx("h2",{className:" text-3xl hero-text-glow text-white",children:l.title}),t.jsx("button",{onClick:()=>u(null),className:"button",children:"← Tất cả bài học"})]})}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4",children:q.map((C,A)=>t.jsx("div",{className:"glassmorphism-card animate-fade-in",children:t.jsxs("div",{className:"text-center space-y-4",children:[t.jsx("p",{className:"text-5xl font-black text-black",children:C.japanese}),t.jsx("p",{className:"text-4xl text-cyan-200",children:C.kanji}),t.jsx("p",{className:"text-3xl text-black font-medium",children:C.vietnamese})]})},A))},`${l?.id||"none"}-${w}`),le>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-16",children:[t.jsx("button",{onClick:()=>b(C=>Math.max(1,C-1)),disabled:w===1,className:"circular-icon-button","aria-label":"Previous words page",children:t.jsx(dt,{className:"w-6 h-6 text-white"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:le},(C,A)=>t.jsx("button",{onClick:()=>b(A+1),"aria-label":`Go to page ${A+1}`,className:`rounded-full transition-all duration-200 flex items-center justify-center ${w===A+1?"custom-element":"button-icon-effect"}`,children:w===A+1?A+1:""},A))}),t.jsx("button",{onClick:()=>b(C=>Math.min(le,C+1)),disabled:w===le,className:"circular-icon-button","aria-label":"Next words page",children:t.jsx(xt,{className:"w-6 h-6 text-white"})})]})]}):t.jsx(t.Fragment,{children:t.jsxs("div",{className:"max-w-7xl mx-auto ",children:[t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-8 mb-16",children:de.map(C=>t.jsxs("button",{onClick:()=>{u(C),b(1),m("")},className:"responsive-hover-card animate-fade-in",children:[t.jsx("div",{className:"text-gray-800 animate-pulse-soft",children:t.jsx(tt,{className:"relative w-full h-full"})}),t.jsxs("div",{className:"text-center py-6",children:[t.jsxs("p",{className:"hero-text-glow text-white text-4xl",children:["Bài ",C.id]}),t.jsx("p",{className:"hero-text-glow text-2xl text-white  mt-2 px-4 line-clamp-2",children:C.title})]})]},C.id))},g),te>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-12",children:[t.jsx("button",{onClick:()=>x(C=>Math.max(1,C-1)),disabled:g===1,className:"custom-button","aria-label":"Previous lessons page",children:t.jsx(dt,{className:"w-6 h-6 text-black"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:te},(C,A)=>t.jsx("button",{onClick:()=>x(A+1),"aria-label":`Go to lesson page ${A+1}`,className:`rounded-full transition-all duration-200 flex items-center justify-center ${g===A+1?"custom-element":"button-icon-effect"}`,children:g===A+1?A+1:""},A))}),t.jsx("button",{onClick:()=>x(C=>Math.min(te,C+1)),disabled:g===te,className:"circular-icon-button","aria-label":"Next lessons page",children:t.jsx(xt,{className:"w-6 h-6 text-black"})})]})]})})]}),t.jsx("div",{className:"fixed bottom-10 right-10 z-50 hidden lg:block",children:t.jsxs("div",{className:"relative group cursor-pointer",onClick:B,children:[t.jsxs("div",{className:"tooltip-slide-out",children:[t.jsxs("div",{className:"colored-border-label",children:[t.jsx("p",{className:"text-xl font-bold drop-shadow-md",children:"Đi học flashcard nào!"}),t.jsx("div",{className:"absolute bottom-0 right-8 translate-y-full",children:t.jsx("div",{className:"triangle-down-pink"})})]}),t.jsx("div",{className:"absolute bottom-full mb-2 right-12 text-4xl animate-bounce",children:"✨"})]}),t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:"responsive-circular-image-hover",style:{filter:"drop-shadow(0 10px 20px rgba(255, 182, 233, 0.6))"}}),t.jsx("div",{className:"circular-gradient-hover-glow"})]})}),t.jsx("style",{children:`

      .circular-gradient-hover-glow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 9999px;
  background-image: linear-gradient(to right, 
    rgba(244, 114, 182, 0.3), /* Pink-400/30 */
    rgba(168, 85, 247, 0.3)  /* Purple-400/30 */
  );
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  filter: blur(24px); 
}

.group:hover .circular-gradient-hover-glow {
  opacity: 1;
}

      @keyframes fly {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(-1deg);
  }
}

.responsive-circular-image-hover {
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  object-fit: cover;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: fly 6s ease-in-out infinite; 
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
  transform: scale(1) rotate(0deg);
  transition: all 300ms ease-in-out;
  border-width: 4px;
  border-style: solid;
  border-color: #f9a8d4;
}

@media (min-width: 640px) {
  .responsive-circular-image-hover {
    width: 6rem;
    height: 6rem;
  }
}

@media (min-width: 768px) {
  .responsive-circular-image-hover {
    width: 7rem;
    height: 7rem;
  }
}

@media (min-width: 1024px) {
  .responsive-circular-image-hover {
    width: 8rem;
    height: 8rem;
  }
}

@media (min-width: 1280px) {
  .responsive-circular-image-hover {
    width: 9rem;
    height: 9rem;
  }
}

.group:hover .responsive-circular-image-hover {
  transform: scale(1.1) rotate(12deg);
}
      .triangle-down-pink {
  width: 0;
  height: 0;
  border-left-width: 8px;
  border-left-style: solid;
  border-left-color: transparent;
  border-right-width: 8px;
  border-right-style: solid;
  border-right-color: transparent;
  border-top-width: 8px;
  border-top-style: solid;
  border-top-color: #f9a8d4;
}

      .colored-border-label {
  background-color: #ffffff;
  color: #6d28d9;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  border-width: 4px;
  border-style: solid;
  border-color: #f9a8d4;
}
      .tooltip-slide-out {
  position: absolute;
  bottom: 100%; 
  margin-bottom: 1rem; 
  right: 0; 
  transform: translateX(2rem); 
  opacity: 0; 
  transition: all 500ms ease-in-out; 
  pointer-events: none;
}

.group:hover .tooltip-slide-out {
  opacity: 1; 
  transform: translateX(0); 
}
      .pulsing-animation {
  /* Khai báo animation: pulse, chu kỳ 2s, lặp vô hạn, timing function default */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Định nghĩa keyframes cho hiệu ứng pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1; /* Bắt đầu và kết thúc với độ mờ đầy đủ */
  }
  50% {
    opacity: 0.4; /* Giảm độ mờ xuống 40% ở giữa chu kỳ */
  }
}
      .bold-subheading-style {
  /* text-2xl */
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* opacity-90 */
  opacity: 0.9; 
  
  /* mt-2 */
  margin-top: 0.5rem; /* 8px */
}
  .responsive-hover-card {
  /* group */
  /* Lớp đánh dấu cho phần tử cha, không có thuộc tính CSS trực tiếp. */
  
  /* relative */
  position: relative;
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); /* Nền trắng mờ 80% */
  
  /* rounded-[32px] */
  border-radius: 2rem; /* 32px */
  
  /* p-8 */
  padding: 2rem; /* 32px */
  
  /* transition-all duration-500 */
  transition: all 500ms ease-in-out; 
  
  /* overflow-hidden */
  overflow: hidden; 
}

/* hover:scale-105 */
.responsive-hover-card:hover {
  transform: scale(1.05); /* Phóng to 5% khi di chuột */
}
      .pulsing-centered-text {
  /* text-center */
  text-align: center;
  
  /* text-white */
  color: #ffffff;
  
  /* font-bold */
  font-weight: 700;
  
  /* text-xl */
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  
  /* mb-6 */
  margin-bottom: 1.5rem; /* 24px */
  
  /* animate-pulse */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Keyframes cho hiệu ứng pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
      .full-screen-gradient-center {
  /* min-h-screen */
  min-height: 100vh; /* Chiều cao tối thiểu bằng chiều cao của viewport */
  
  /* flex */
  display: flex;
  
  /* items-center */
  align-items: center; /* Căn giữa dọc các item con */
  
  /* justify-center */
  justify-content: center; /* Căn giữa ngang các item con */
  
  /* bg-gradient-to-br */
  background-image: linear-gradient(to bottom right, #581c87, #831843);
  /* from-purple-900 (#581c87) */
  /* to-pink-900 (#831843) */
}
      .centered-circle-transition {
  /* rounded-full */
  border-radius: 9999px; 
  
  /* transition-all duration-200 */
  transition: all 200ms ease-in-out; 
  
  /* flex */
  display: flex;
  
  /* items-center */
  align-items: center; /* Căn giữa dọc */
  
  /* justify-center */
  justify-content: center; /* Căn giữa ngang */
}
      .glassmorphism-card {
  /* bg-white */
  background-color: #ffffff;
  /* rounded-[32px] (Ưu tiên giá trị tùy chỉnh này) */
  border-radius: 2rem; /* 32px */
  
  /* p-8 */
  padding: 2rem; /* 32px */
  
  /* border-2 */
  border-width: 2px;
  
  /* border-white/40 */
  border-color: rgba(255, 255, 255, 0.4); 
  
  /* transition-all duration-400 */
  transition: all 400ms ease-in-out; 
  
  /* shadow-xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

/* Các hiệu ứng hover */
.glassmorphism-card:hover {
  /* hover:border-pink-400 */
  border-color: #f472b6; 
  
  /* hover:bg-white/80 */
  background-color: rgba(255, 255, 255, 0.80); 
  
  /* hover:scale-105 */
  transform: scale(1.05);
}
      .small-white-rainbow-glow {
  /* text-lg */
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  
  /* text-white */
  color: #ffffff; 
  
  /* mt-2 */
  margin-top: 0.5rem; /* 8px */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền để chữ sáng hơn */
    0 0 3px rgba(255, 255, 255, 0.9),
    /* Các lớp bóng mờ màu neon chính */
    0 0 8px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 12px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 16px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
}
      .white-rainbow-glow-bold {
  /* text-3xl */
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* text-white */
  color: #ffffff; 
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Tập trung vào các lớp bóng mờ màu neon để làm nổi bật chữ trắng */
  text-shadow: 
    /* Lớp bóng mờ trắng nhẹ làm nền */
    0 0 4px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon chính */
    0 0 10px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 15px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 20px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
    
  /* drop-shadow-lg bị loại bỏ do không phù hợp với hiệu ứng glow của chữ trắng */
  filter: none; /* Đảm bảo không có drop-shadow */
}
      
      .small-rainbow-glow {
  /* text-2xl */
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  
  /* text-white */
  color: #ffffff; 
  
  /* mt-1 */
  margin-top: 0.25rem; /* 4px */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền */
    0 0 2px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon */
    0 0 5px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 8px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 12px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
}
      .rainbow-glow-title {
  /* text-4xl */
  font-size: 2.25rem; /* 36px */
  line-height: 2.5rem; /* 40px */
  
  /* font-black */
  font-weight: 900; 
  
  /* text-white */
  color: #ffffff; /* Giữ nguyên màu chữ trắng */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow, không dùng filter: drop-shadow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền */
    0 0 4px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon */
    0 0 10px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 15px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 20px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
    
    /* Có thể thêm các màu khác nếu muốn đầy đủ dải cầu vồng */
}
      .full-gradient-hover-effect {
  /* absolute */
  position: absolute;
  
  /* inset-0 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; /* Bao phủ hoàn toàn phần tử cha */
  
  /* rounded-2xl */
  border-radius: 1rem; /* 16px */
  
  /* bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 */
  background: linear-gradient(to right, #ec4899, #a855f7, #06b6d4);
  
  /* opacity-0 */
  opacity: 0;
  
  /* blur-xl */
  filter: blur(20px); 
  
  /* transition-opacity duration-500 */
  transition: opacity 500ms ease-in-out;
  
  /* -z-10 */
  z-index: -10; /* Đặt lớp này ra phía sau nội dung chính */
}

/* group-hover:opacity-100 (Áp dụng khi di chuột qua phần tử cha có class 'group') */
.group:hover .full-gradient-hover-effect {
  opacity: 1;
}
      .glass-card-hover-effect {
  /* relative */
  position: relative;
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); /* Nền trắng mờ 80% */
  
  /* border */
  border-width: 1px; 
  
  /* border-white/30 */
  border-color: rgba(255, 255, 255, 0.3); 
  
  /* rounded-2xl */
  border-radius: 1rem; /* 16px */
  
  /* p-6 */
  padding: 1.5rem; /* 24px */
  
  /* transition-all duration-400 */
  transition: all 400ms ease-in-out; 
  
  /* shadow-xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); 
}

/* hover:border-pink-400, hover:bg-white/20, hover:scale-[1.02], hover:shadow-2xl, hover:shadow-pink-500/30 */
.glass-card-hover-effect:hover {
  /* hover:border-pink-400 */
  border-color: #f472b6; 
  
  /* hover:bg-white/20 */
  background-color: rgba(255, 255, 255, 0.2); 
  
  /* hover:scale-[1.02] */
  transform: scale(1.02);
  
  /* hover:shadow-2xl (Kết hợp với shadow màu hồng) */
  box-shadow: 
    /* shadow-2xl */
    0 25px 50px -12px rgba(0, 0, 0, 0.25), 
    /* hover:shadow-pink-500/30 */
    0 0 15px rgba(236, 72, 153, 0.3); /* Giá trị gần đúng cho shadow màu hồng */
}
      .transparent-search-input {
  /* w-full */
  width: 100%;
  
  /* py-8 */
  padding-top: 2rem;    /* 32px */
  padding-bottom: 2rem; /* 32px */
  
  /* pl-28 */
  padding-left: 7rem;   /* 112px */
  
  /* pr-10 */
  padding-right: 2.5rem; /* 40px */
  
  /* text-3xl */
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  
  /* font-black */
  font-weight: 900; 
  
  /* text-white */
  color: #ffffff; 
  
  /* bg-transparent */
  background-color: transparent; 
  
  /* text-center */
  text-align: center; 
}

/* focus:outline-none */
.transparent-search-input:focus {
  outline: 0; /* Loại bỏ viền focus mặc định của trình duyệt */
}

/* placeholder:text-white/70 và placeholder:font-bold */
.transparent-search-input::placeholder {
  color: rgba(255, 255, 255, 0.7); /* Màu trắng mờ 70% */
  font-weight: 700; /* In đậm */
}
      .element-overlay-positioned {
  /* absolute */
  position: absolute;
  
  /* left-8 */
  left: 2rem; /* 32px */
  
  /* top-1/2 */
  top: 50%;
  
  /* -translate-y-1/2 */
  transform: translateY(-50%); /* Căn giữa dọc */
  
  /* pointer-events-none */
  pointer-events: none; /* NGĂN CHẶN tương tác chuột/chạm */
  
  /* z-20 */
  z-index: 20; 
}
      .icon-centered-left {
  /* absolute */
  position: absolute;
  
  /* left-8 */
  left: 2rem; /* 32px */
  
  /* top-1/2 */
  top: 50%;
  
  /* -translate-y-1/2 */
  transform: translateY(-50%); /* Dùng để căn giữa dọc (Vertical centering) */
  
  /* w-12 */
  width: 3rem; /* 48px */
  
  /* h-12 */
  height: 3rem; /* 48px */
  
  /* text-white */
  color: #ffffff;
  
  /* z-20 */
  z-index: 20; 
  
  /* drop-shadow-neon (CSS Tùy chỉnh gần đúng cho hiệu ứng neon) */
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px #f472b6);
  /* Hoặc sử dụng text-shadow nếu đây là icon dạng chữ: */
  /* text-shadow: 0 0 5px #fff, 0 0 10px #f472b6; */
}
      .glass-effect-container {
  /* relative */
  position: relative;
  
  /* bg-black/50 */
  background-color: rgba(0, 0, 0, 0.5); /* Nền đen mờ 50% */
  
  /* backdrop-blur-2xl */
  backdrop-filter: blur(40px); /* Hiệu ứng làm mờ nền phía sau */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* border-4 */
  border-width: 4px; 
  
  /* border-white/40 */
  border-color: rgba(255, 255, 255, 0.4); /* Viền trắng mờ 40% */
  
  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Bóng lớn */
  
  /* ring-8 ring-white/10 (Tạo hiệu ứng "ring" bằng box-shadow inset hoặc outline/viền thứ hai) */
  /* Sử dụng box-shadow để mô phỏng hiệu ứng ring */
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25), /* Shadow-2xl */
    0 0 0 8px rgba(255, 255, 255, 0.1); /* Ring 8px, màu trắng 10% */

  /* overflow-hidden */
  overflow: hidden; 
}

/* LƯU Ý QUAN TRỌNG VỀ backdrop-filter:
Để đảm bảo backdrop-filter hoạt động, phần tử này phải có độ trong suốt (opacity < 1) hoặc màu nền sử dụng rgba() (như bg-black/50 đã làm).
*/
      .pulsing-gradient-aura {
  /* absolute */
  position: absolute;
  
  /* -inset-3 */
  top: -0.75rem;    /* -12px */
  bottom: -0.75rem; /* -12px */
  left: -0.75rem;   /* -12px */
  right: -0.75rem;  /* -12px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-linear-to-r from-pink-400 via-purple-500 to-cyan-400 */
  background: linear-gradient(to right, #f472b6, #8b5cf6, #22d3ee);
  
  /* blur-xl */
  filter: blur(24px); 
  
  /* opacity-60 */
  opacity: 0.6;
  
  /* z-index */
  z-index: -1; /* Đảm bảo hiệu ứng nằm dưới nội dung chính */
  
  /* transition (để chuyển đổi opacity mượt mà) */
  transition: opacity 150ms ease-in-out;
  
  /* animate-border-spin */
  animation: border-spin 3s linear infinite; 
  
  /* delay-75 */
  animation-delay: 75ms; 
}

/* group-focus-within:opacity-90 (Sử dụng selector lồng nhau) */
/* Áp dụng cho phần tử mẹ có class 'group' và bên trong nó có phần tử đang focus */
.group:focus-within .pulsing-gradient-aura {
  opacity: 0.9;
}

/* Keyframes cho hiệu ứng border-spin (giả định) */
@keyframes border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
      .gradient-border-effect {
  /* absolute */
  position: absolute;
  
  /* -inset-1.5 */
  top: -0.375rem;    /* -6px */
  bottom: -0.375rem; /* -6px */
  left: -0.375rem;   /* -6px */
  right: -0.375rem;  /* -6px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-linear-to-r from-pink-500 via-purple-600 to-cyan-500 */
  background: linear-gradient(to right, #ec4899, #9333ea, #06b6d4);
  
  /* opacity-90 */
  opacity: 0.9;
  
  /* animate-border-spin (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: border-spin 3s linear infinite; 
  z-index: -1; /* Thường được dùng để đặt lớp này dưới nội dung chính */
}

/* group-focus-within:opacity-100 (Sử dụng selector lồng nhau) */
/* Áp dụng cho phần tử mẹ có class 'group' và bên trong nó có phần tử đang focus */
.group:focus-within .gradient-border-effect,
.gradient-border-effect:focus { /* Chỉ sử dụng focus trực tiếp nếu không phải group */
  opacity: 1;
}

/* Keyframes cho hiệu ứng border-spin (giả định) */
@keyframes border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
      .hero-section-title {
  /* relative */
  position: relative;
  
  /* block */
  display: block; 
  
  /* p-x (padding-left và padding-right) */
  padding-left: 2.5rem;  /* 40px */
  padding-right: 2.5rem; /* 40px */
  
  /* p-y (padding-top và padding-bottom) */
  padding-top: 2rem;    /* 32px */
  padding-bottom: 2rem; /* 32px */
  
  /* font-black */
  font-weight: 900; 
  
  /* tracking-wider */
  letter-spacing: 0.05em; 
  
  /* text-white */
  color: #ffffff; 
  
  /* drop-shadow-2xl (Giá trị gần đúng, có thể phức tạp hơn) */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
  
  /* -translate-y-3 */
  transform: translateY(-0.75rem); /* -12px */
  
  /* text-6xl (Giá trị mặc định cho text-6xl) */
  font-size: 3.75rem; /* 60px */
  line-height: 1; 
  
  /* hero-text-glow (CSS Tùy chỉnh gần đúng cho hiệu ứng glow) */
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f687b3; /* Ánh sáng trắng và hồng nhạt */
  
  /* animate-pulse-soft (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Kích thước text cho màn hình nhỏ (sm:text-6xl) */
/* Cùng giá trị mặc định, không cần media query */

/* Thiết lập cho màn hình trung bình (md) - min-width: 768px */
@media (min-width: 768px) {
  .hero-section-title {
    /* md:px-14 */
    padding-left: 3.5rem;  /* 56px */
    padding-right: 3.5rem; /* 56px */
    
    /* md:py-10 */
    padding-top: 2.5rem;    /* 40px */
    padding-bottom: 2.5rem; /* 40px */
    
    /* md:text-7xl */
    font-size: 4.5rem; /* 72px */
    line-height: 1;
    
    /* md:-translate-y-4 */
    transform: translateY(-1rem); /* -16px */
  }
}

/* Thiết lập cho màn hình lớn (lg) - min-width: 1024px */
@media (min-width: 1024px) {
  .hero-section-title {
    /* lg:px-20 */
    padding-left: 5rem;  /* 80px */
    padding-right: 5rem; /* 80px */
    
    /* lg:py-12 */
    padding-top: 3rem;    /* 48px */
    padding-bottom: 3rem; /* 48px */
    
    /* lg:text-10xl (Không có trong Tailwind mặc định, tôi dùng 9xl + 1/2) */
    font-size: 8rem; /* 128px */ 
    line-height: 1;
    
    /* lg:-translate-y-5 */
    transform: translateY(-1.25rem); /* -20px */
  }
}

/* Keyframes cho hiệu ứng pulse-soft (giả định) */
@keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}
      .circular-shadow-button {
  /* p-4 */
  padding: 1rem; /* 16px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); 
  
  /* transition */
  transition: all 150ms ease-in-out; 
}

/* hover:bg-pink-200 */
.circular-shadow-button:hover {
  background-color: #fecaca; /* pink-200 */
}

/* disabled:opacity-50 */
.circular-shadow-button:disabled {
  opacity: 0.5;
}

      .circular-icon-button {
  /* p-4 */
  padding: 1rem; /* 16px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3); 
  
  /* transition và transform */
  transition: all 150ms ease-in-out; /* Giá trị mặc định cho transition */
}

/* md:p-5 */
@media (min-width: 768px) {
  .circular-icon-button {
    padding: 1.25rem; /* 20px */
  }
}

/* hover:bg-pink-200, hover:scale-105 */
.circular-icon-button:hover {
  background-color: #fecaca; /* pink-200 */
  transform: scale(1.05);
}

/* disabled:opacity-50 */
.circular-icon-button:disabled {
  opacity: 0.5;
}
      .button-icon-effect {
  /* bg-white/90 */
  background-color: rgba(255, 255, 255, 0.9);
  
  /* w-6 */
  width: 1.5rem; /* 24px */
  
  /* h-6 */
  height: 1.5rem; /* 24px */
  
  /* transition (Thêm vào để hiệu ứng scale mượt mà) */
  transition: transform 150ms ease-in-out; 
}

/* md:w-8 và md:h-8 */
@media (min-width: 768px) {
  .button-icon-effect {
    width: 2rem; /* 32px */
    height: 2rem; /* 32px */
  }
}

/* hover:scale-110 */
.button-icon-effect:hover {
  transform: scale(1.1);
}
      .custom-element {
  /* bg-pink-400 */
  background-color: #f472b6; 
  
  /* text-white */
  color: #ffffff; 
  
  /* px-4 */
  padding-left: 1rem;  /* 16px */
  padding-right: 1rem; /* 16px */
  
  /* h-10 */
  height: 2.5rem; /* 40px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
}

/* md:h-12 */
@media (min-width: 768px) {
  .custom-element {
    height: 3rem; /* 48px */
  }
}

      .custom-button {
  /* p-4 */
  padding: 1rem; 
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3); 
  
  /* transition */
  transition: all 150ms ease-in-out; /* Giá trị mặc định cho transition */
  
  /* transform */
  /* Chỉ là một lớp đánh dấu, không thêm thuộc tính CSS riêng biệt */
}
  .button {
  /* px-8 py-4 -> padding: 1rem top/bottom, 2rem left/right */
  padding: 1rem 2rem;
  /* bg-white */
  background-color: #ffffff;
  /* backdrop-blur-xl approximation */
  backdrop-filter: blur(8px);
  /* rounded-full */
  border-radius: 9999px;
  /* text-black font-bold */
  color: #000000;
  font-weight: 700;
  /* smooth hover */
  transition: background-color 150ms ease, transform 150ms ease;
}
.button:hover {
  /* hover:bg-white/60 */
  background-color: rgba(255,255,255,0.6);
}

/* md:p-5 */
@media (min-width: 768px) {
  .custom-button {
    padding: 1.25rem;
  }
}

/* hover:bg-pink-200, hover:scale-105 */
.custom-button:hover {
  background-color: #fecaca; /* pink-200 */
  transform: scale(1.05);
}

/* disabled:opacity-50 */
.custom-button:disabled {
  opacity: 0.5;
  /* Thêm disabled:pointer-events-none nếu bạn muốn chặn click */
}
      @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
       .hero-text-glow {
    text-shadow: 
      0 0 20px #FF69B4,
      0 0 40px #A020F0,
      0 0 60px #00FFFF,
      0 0 80px #FF69B4,
      0 0 100px #A020F0,
      0 4px 20px rgba(0,0,0,0.9);
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));

     @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }    
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
              .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
                  @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
  `}),t.jsx(Lt,{isOpen:v,onClose:()=>N(!1),title:"Meow meow...",message:l?"Bài này chưa có từ vựng nào cả... Mèo buồn quá!":"Hãy chọn 1 bài học trước nhé"})]})}const on=a=>{if(!a)return null;if(a.includes("<"))return t.jsx("span",{dangerouslySetInnerHTML:{__html:a}});const o=/([\u4e00-\u9faf\u3005\u30a0-\u30ff\u3040-\u309f]+)[(（]([\u3040-\u309f\u30a0-\u30ff\s]+)[)）]/g,s=[];let l=0,u;for(;(u=o.exec(a))!==null;){u.index>l&&s.push(t.jsx("span",{children:a.substring(l,u.index)},`text-${l}`));const h=u[1],m=u[2];s.push(t.jsxs("ruby",{children:[h,t.jsx("rt",{children:m})]},`ruby-${u.index}`)),l=u.index+u[0].length}return l<a.length&&s.push(t.jsx("span",{children:a.substring(l)},`text-${l}`)),s.length===0?t.jsx("span",{children:a}):t.jsx(t.Fragment,{children:s})},lm=a=>{const o=/（(.*?)）|［(.*?)］/g,s=[];let l;for(;(l=o.exec(a))!==null;){const u=l[1]||l[2];if(u){const h=u.split(/[、,]/).map(m=>m.trim()).filter(Boolean);h.length>=2&&s.push({fullMatch:l[0],options:h,startIndex:l.index,endIndex:l.index+l[0].length})}}return s};function ub({isOpen:a,onClose:o,lessonId:s,lessonTitle:l,userId:u,onSuccess:h,onError:m}){const[g,x]=f.useState([]),[w,b]=f.useState(!0),[y,k]=f.useState(!1),[I,j]=f.useState({}),[v,N]=f.useState({}),[V,O]=f.useState(600),[B,G]=f.useState(!1),[te,de]=f.useState(!1),[q,le]=f.useState(!1),[C,A]=f.useState(!1),[xe,W]=f.useState(""),[Y,P]=f.useState([]),[ue,he]=f.useState(null),ne=f.useRef(null),[M,X]=f.useState({});f.useEffect(()=>{a||(x([]),b(!0),k(!1),j({}),N({}),O(600),G(!1),de(!1),le(!1),he(null),A(!1),W(""),P([]),X({}))},[a]),f.useEffect(()=>{if(!a||B)return;if(!s||s<=0||!u||u<=0){m&&m("ID bài học hoặc người dùng không hợp lệ","validation");return}(async()=>{try{b(!0);try{(await Ie.get(`/grammar-tests/check?lesson_id=${s}`)).data.hasSubmitted&&de(!0)}catch{}const E=await Ie.get(`/grammar/mini-test/questions?lesson_id=${s}`);if(E.data.success&&Array.isArray(E.data.data)){const D=E.data.data.map((re,ee)=>({id:re.id||ee+1,lesson_id:re.lessonId||s,example:re.example||"",question_type:re.type||"fill_blank",raw_text:(re.text||"").replace(re.example||"","").trim(),points:re.points||10,options:re.options||null}));x(D);const Q={};D.forEach(re=>{if(re.question_type==="rearrange"||re.question_type==="reorder"){const ee=re.raw_text.split(`
`);for(const Ce of ee)if(Ce.includes("→")||Ce.includes("／")||Ce.includes("/")){const ie=(Ce.split("→")[0]||Ce).replace("例：","").replace("例","").trim().split(/[／\/]/).map(we=>we.trim()).filter(we=>we&&!we.includes("例")&&!we.includes("→"));if(ie.length>0){Q[re.id]=ie;break}}}}),N(Q)}else m&&m("Không thể tải câu hỏi. Dữ liệu không đúng định dạng.","server")}catch{m&&m("Không thể tải câu hỏi. Vui lòng thử lại sau.","server")}finally{b(!1)}})()},[a,s,u,B,m]),f.useEffect(()=>{if(!a||V<=0||B||q||C)return;const se=setInterval(()=>O(E=>E-1),1e3);return()=>clearInterval(se)},[V,a,B,q,C]),f.useEffect(()=>{V===0&&a&&!B&&!q&&!C&&je()},[V,a,B,q,C]);const Z=se=>{const E=Math.floor(se/60).toString().padStart(2,"0"),D=(se%60).toString().padStart(2,"0");return`${E}:${D}`},z=()=>{const se=[];return g.forEach(E=>{if(E.question_type==="rearrange"||E.question_type==="reorder")return;const D=I[E.id]||{};if(E.question_type==="multiple_choice")E.raw_text.split(`
`).filter(re=>re.trim()).forEach((re,ee)=>{lm(re).forEach((U,ie)=>{const we=parseInt(`${E.id}${ee}${ie}`);(!D[we]||D[we].trim()==="")&&(se.includes(E.id)||se.push(E.id))})});else if(E.question_type==="fill_blank"){const Q=/（\s*）|＿{2,}|_{2,}|【\s*】|\[ \]|___+/g;E.raw_text.split(`
`).filter(ee=>ee.trim()).forEach((ee,Ce)=>{(ee.match(Q)||[]).forEach((ie,we)=>{const ze=parseInt(`${E.id}${Ce}${we}`);(!D[ze]||D[ze].trim()==="")&&(se.includes(E.id)||se.push(E.id))})})}}),se},$=(se,E,D)=>{he({questionId:E,index:D}),se.dataTransfer.setData("text/plain",`${E}-${D}`),se.dataTransfer.effectAllowed="move"},be=se=>{se.preventDefault(),se.dataTransfer.dropEffect="move"},J=()=>{he(null)},me=(se,E,D)=>{if(se.preventDefault(),!ue||ue.questionId!==E)return;const Q=ue.index;if(Q===D)return;const re=[...v[E]||[]],[ee]=re.splice(Q,1);re.splice(D,0,ee),N({...v,[E]:re}),j(Ce=>({...Ce,[E]:{0:re.join(" ")}}))},fe=(se,E,D)=>{j(Q=>{const re={...Q[se]||{}};return{...Q,[se]:{...re,[E]:D}}})},je=async()=>{await Me(!0)},Te=async()=>{await Me(!1)},Me=async se=>{try{if(k(!0),!se){const re=z();if(re.length>0){const ee=re.map(Ce=>{const U=g.findIndex(ie=>ie.id===Ce);return U!==-1?U+1:"Unknown"});X({...I}),P(re),W(`Vui lòng điền đầy đủ các ô trống trong nhóm câu hỏi: ${ee.join(", ")}`),A(!0),k(!1);return}}const E={};g.forEach(re=>{if(re.question_type==="rearrange"||re.question_type==="reorder"){const ee=v[re.id]||[];E[re.id.toString()]=[ee.join(" ")]}else{const ee=I[re.id]||{},U=Object.keys(ee).map(Number).sort((ie,we)=>ie-we).map(ie=>ee[ie]);E[re.id.toString()]=U}});const D={userId:Number(u),lessonId:Number(s),answers:E,timeSpent:se?600:Math.max(0,600-V),submittedAt:new Date().toISOString()},Q=await Ie.post("/grammar-tests/submit",D,{timeout:1e4});Q.data.success?(G(!0),h&&h({lessonId:s,lessonTitle:l,timeSpent:se?600:Math.max(0,600-V),questionCount:g.length}),le(!0),setTimeout(()=>{o()},300)):Q.data.message?.includes("đã nộp bài")||Q.data.message?.includes("nộp bài này rồi")?(G(!0),h&&h({lessonId:s,lessonTitle:l,timeSpent:se?600:Math.max(0,600-V),questionCount:g.length}),le(!0),setTimeout(()=>{o()},300)):m&&m(Q.data.message||"Nộp bài không thành công!","server")}catch(E){let D="Có lỗi xảy ra khi nộp bài!",Q="server";if(E.code==="ECONNABORTED"||E.message.includes("timeout"))D="Request timeout. Vui lòng thử lại.",Q="timeout";else if(E.code==="ERR_NETWORK"||E.message.includes("Network"))D="Mất kết nối mạng. Vui lòng kiểm tra kết nối và thử lại.",Q="server";else if(E.response?.status===400){const re=E.response.data;if(re.message?.includes("đã nộp bài")||re.message?.includes("nộp bài này rồi")){G(!0),h&&h({lessonId:s,lessonTitle:l,timeSpent:se?600:Math.max(0,600-V),questionCount:g.length}),le(!0),setTimeout(()=>{o()},300);return}else D=re.message||"Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",Q="validation"}else E.response?.status===401?(D="Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",Q="server"):E.response?.status===500&&(D="Lỗi máy chủ. Vui lòng thử lại sau.",Q="server");m&&m(D,Q)}finally{k(!1)}},K=()=>{A(!1),j(M),setTimeout(()=>{const se=document.querySelector(`[data-question-id="${Y[0]}"]`);se&&(se.scrollIntoView({behavior:"smooth",block:"center"}),se.classList.add("highlight-empty"),setTimeout(()=>{se.classList.remove("highlight-empty")},3e3))},100)},Fe=se=>{if(se.question_type==="rearrange"||se.question_type==="reorder"){const D=v[se.id]||[];return D.length===0?t.jsx("div",{className:"question-content-container",children:t.jsx("div",{className:"fill-blank-line",children:on(se.raw_text)})}):t.jsxs("div",{className:"rearrange-container",children:[t.jsx("div",{className:"rearrange-instruction",children:t.jsx("p",{children:"Kéo và thả các từ dưới đây để sắp xếp thành câu đúng:"})}),t.jsx("div",{className:"rearrange-words",children:D.map((Q,re)=>t.jsxs("div",{draggable:!0,onDragStart:ee=>$(ee,se.id,re),onDragOver:be,onDragEnd:J,onDrop:ee=>me(ee,se.id,re),className:`rearrange-word ${ue?.questionId===se.id&&ue.index===re?"dragging":""}`,children:[t.jsx(Tx,{className:"drag-handle"}),t.jsx("span",{children:on(Q)})]},re))}),t.jsxs("div",{className:"rearrange-preview",children:[t.jsx("p",{className:"preview-label",children:"Câu đã sắp xếp:"}),t.jsx("div",{className:"preview-text",children:D.map((Q,re)=>t.jsxs("span",{className:"preview-word",children:[on(Q),re<D.length-1&&" "]},re))})]})]})}const E=se.raw_text.split(`
`).filter(D=>D.trim());return t.jsx("div",{className:"question-content-container",children:E.map((D,Q)=>{if(se.question_type==="fill_blank"){const re=/（\s*）|＿{2,}|_{2,}|【\s*】|\[ \]|___+/g,ee=[];let Ce,U=0,ie=0;for(re.lastIndex=0;(Ce=re.exec(D))!==null;){Ce.index>U&&ee.push({type:"text",content:D.substring(U,Ce.index)});const we=parseInt(`${se.id}${Q}${ie}`);ee.push({type:"input",index:we,content:Ce[0]}),ie++,U=Ce.index+Ce[0].length}return U<D.length&&ee.push({type:"text",content:D.substring(U)}),t.jsx("div",{className:"fill-blank-line",children:ee.map((we,ze)=>{if(we.type==="text")return t.jsx("span",{children:on(we.content)},`text-${Q}-${ze}`);{const Pe=we.index,Be=I[se.id]?.[Pe]||"";return t.jsx("input",{type:"text",value:Be,onChange:ut=>{fe(se.id,Pe,ut.target.value)},className:"blank-input-field",placeholder:"Điền...",autoComplete:"off"},`input-${se.id}-${Q}-${ze}`)}})},Q)}if(se.question_type==="multiple_choice"){const re=lm(D);if(re.length===0)return t.jsx("div",{className:"multiple-choice-line",children:on(D)},Q);let ee=0;const Ce=[];let U=0;if(re.forEach((ie,we)=>{if(ie.startIndex>ee){const Be=D.substring(ee,ie.startIndex);Ce.push(t.jsx("span",{children:on(Be)},`text-${Q}-${we}`))}const ze=parseInt(`${se.id}${Q}${U}`),Pe=I[se.id]?.[ze];Ce.push(t.jsx("span",{className:"choice-container",children:ie.options.map((Be,ut)=>{const ln=Pe===Be;return t.jsx("button",{type:"button",onClick:()=>{fe(se.id,ze,Be)},className:`choice-button ${ln?"choice-button-selected":"choice-button-default"}`,children:on(Be)},`opt-${Q}-${U}-${ut}`)})},`choice-${Q}-${U}`)),U++,ee=ie.endIndex}),ee<D.length){const ie=D.substring(ee);Ce.push(t.jsx("span",{children:on(ie)},`text-after-${Q}`))}return t.jsx("div",{className:"multiple-choice-line",children:Ce},Q)}return t.jsx("div",{className:"fill-blank-line",children:on(D)},Q)})})};return a?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:`test-modal-container ${q?"fade-out":""}`,children:[t.jsxs("div",{className:"test-modal",children:[t.jsxs("div",{className:"modal-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx("div",{className:"header-icon",children:t.jsx(Wt,{className:"sparkles-icon"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"modal-title",children:"Mini Test"}),t.jsxs("p",{className:"lesson-title",children:[l," ",t.jsxs("span",{className:"lesson-id-badge",children:["ID: ",s]})]})]})]}),t.jsxs("div",{className:"header-right",children:[t.jsxs("div",{className:`timer-display ${V<60?"timer-warning":""} ${V<300?"timer-low":""}`,children:[t.jsx(dr,{className:"timer-icon"}),t.jsx("span",{className:"timer-value",children:Z(V)})]}),t.jsx("button",{onClick:o,className:"close-modal-button",children:t.jsx(Kr,{className:"close-icon"})})]})]}),t.jsx("div",{className:"modal-body",ref:ne,children:w?t.jsxs("div",{className:"loading-container",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("p",{children:"Đang tải câu hỏi..."}),t.jsxs("p",{className:"debug-info",children:["Lesson ID: ",s," | User ID: ",u]})]}):t.jsx("div",{className:"questions-container",children:g.length===0?t.jsxs("div",{className:"no-questions-message",children:[t.jsx("p",{children:"Không tìm thấy câu hỏi cho bài học này."}),t.jsxs("div",{className:"debug-info",children:[t.jsxs("p",{children:["Lesson ID: ",s]}),t.jsxs("p",{children:["User ID: ",u]})]}),t.jsx("button",{onClick:o,className:"close-no-questions-button",children:"Đóng"})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"questions-stats",children:[t.jsxs("span",{className:"stat-badge",children:["Tổng: ",g.length," nhóm câu"]}),t.jsxs("span",{className:"stat-badge",children:["Thời gian: ",Z(V)]}),t.jsxs("span",{className:"stat-badge",children:["Lesson ID: ",s]})]}),g.map((se,E)=>t.jsxs("div",{className:"question-card","data-question-id":se.id,children:[t.jsxs("div",{className:"question-badge",children:["Nhóm câu ",E+1]}),t.jsxs("div",{className:"question-content",children:[t.jsxs("div",{className:"instruction-hint",children:[t.jsx(Dl,{className:"hint-icon"}),t.jsxs("div",{children:[t.jsx("p",{className:"hint-title",children:"Hướng dẫn:"}),t.jsx("p",{children:se.question_type==="fill_blank"?"Điền từ thích hợp vào ô trống.":se.question_type==="multiple_choice"?"Chọn đáp án đúng trong các ngoặc tròn (...) hoặc ngoặc vuông ［...］.":se.question_type==="rearrange"||se.question_type==="reorder"?"Kéo và thả các từ để sắp xếp thành câu đúng.":"Sắp xếp lại các từ/cụm từ."}),t.jsxs("p",{className:"hint-points",children:["(Tổng cộng: ",se.points," điểm)"]})]})]}),se.example&&t.jsxs("div",{className:"example-section",children:[t.jsx("p",{className:"example-label",children:"Ví dụ (Rei)"}),t.jsx("div",{className:"example-content",children:on(se.example)})]}),t.jsx("div",{className:"main-question-content",children:Fe(se)})]})]},se.id))]})})}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("div",{className:"submit-debug-info",children:t.jsxs("span",{children:["Debug: LessonID=",s," | UserID=",u," | Time=",Z(V)]})}),t.jsx("button",{onClick:Te,disabled:y||V<=0||g.length===0,className:`submit-button ${y?"submitting":""}`,children:y?t.jsx("div",{className:"submit-spinner"}):V<=0?"Hết giờ":t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Nộp bài"}),t.jsx(sh,{className:"submit-icon"})]})})]})]}),t.jsx("style",{children:`
          .test-modal-container {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            padding: 1rem;
            font-family: sans-serif;
            animation: fadeIn 0.3s ease-out;
          }
          
          .fade-out {
            animation: fadeOut 0.3s ease-out forwards;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes fadeOut {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0.95);
            }
          }
          
          .test-modal {
            background: #FDFCFE;
            width: 100%;
            max-width: 96rem;
            height: 90vh;
            border-radius: 32px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.5);
            animation: slideInUp 0.4s ease-out;
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .modal-header {
            flex: none;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            background: white;
            border-bottom: 1px solid #f3f4f6;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          }
          
          .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .header-icon {
            background: #f3e8ff;
            padding: 0.75rem;
            border-radius: 1rem;
          }
          
          .sparkles-icon {
            color: #7c3aed;
            width: 1.5rem;
            height: 1.5rem;
          }
          
          .modal-title {
            font-size: 1.5rem;
            font-weight: 900;
            color: #1f2937;
            letter-spacing: -0.025em;
          }
          
          .lesson-title {
            color: #6b7280;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .lesson-id-badge {
            font-size: 0.75rem;
            background: #e5e7eb;
            padding: 0.125rem 0.5rem;
            border-radius: 0.375rem;
            color: #6b7280;
            font-family: monospace;
          }
          
          .header-right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }
          
          .timer-display {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;
            border-radius: 9999px;
            font-weight: bold;
            font-size: 1.125rem;
            transition: all 0.2s;
            background: #f3f4f6;
            color: #374151;
          }
          
          .timer-low {
            background: #fef3c7;
            color: #d97706;
            animation: pulse 2s infinite;
          }
          
          .timer-warning {
            background: #fef2f2;
            color: #dc2626;
            animation: pulse 1s infinite;
          }
          
          .timer-icon {
            width: 1.25rem;
            height: 1.25rem;
          }
          
          .timer-value {
            font-variant-numeric: tabular-nums;
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          
          .close-modal-button {
            padding: 0.75rem;
            border-radius: 9999px;
            transition: background-color 0.2s;
            color: #9ca3af;
            background: none;
            border: none;
            cursor: pointer;
          }
          
          .close-modal-button:hover {
            background: #f3f4f6;
            color: #4b5563;
          }
          
          .close-icon {
            width: 1.75rem;
            height: 1.75rem;
          }
          
          .modal-body {
            flex: 1;
            overflow-y: auto;
            background: rgba(249, 250, 251, 0.5);
            padding: 1.5rem;
          }
          
          @media (min-width: 768px) {
            .modal-body {
              padding: 2.5rem;
            }
          }
          
          .loading-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #9ca3af;
            gap: 1rem;
          }
          
          .loading-spinner {
            animation: spin 1s linear infinite;
            width: 2.5rem;
            height: 2.5rem;
            border: 4px solid #7c3aed;
            border-top-color: transparent;
            border-radius: 9999px;
          }
          
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          
          .debug-info {
            font-size: 0.75rem;
            color: #6b7280;
            background: #f3f4f6;
            padding: 0.5rem;
            border-radius: 0.375rem;
            font-family: monospace;
            margin-top: 0.5rem;
          }
          
          .questions-container {
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
            padding-bottom: 5rem;
          }
          
          .questions-stats {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }
          
          .stat-badge {
            font-size: 0.875rem;
            background: #e0e7ff;
            color: #3730a3;
            padding: 0.375rem 0.75rem;
            border-radius: 9999px;
            font-weight: 500;
          }
          
          .no-questions-message {
            text-align: center;
            padding: 3rem;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            max-width: 32rem;
            margin: 0 auto;
            color: #6b7280;
          }
          
          .close-no-questions-button {
            margin-top: 1rem;
            padding: 0.75rem 2rem;
            background: #7c3aed;
            color: white;
            border-radius: 0.5rem;
            font-weight: bold;
            transition: background-color 0.2s;
            border: none;
            cursor: pointer;
          }
          
          .close-no-questions-button:hover {
            background: #6d28d9;
          }
          
          .question-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            border: 1px solid #f3f4f6;
            position: relative;
            margin-bottom: 3rem;
            transition: box-shadow 0.3s;
          }
          
          .question-card.highlight-empty {
            animation: shake 0.5s ease-in-out;
            border-color: #f59e0b !important;
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1) !important;
          }
          
          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            10%, 30%, 50%, 70%, 90% {
              transform: translateX(-5px);
            }
            20%, 40%, 60%, 80% {
              transform: translateX(5px);
            }
          }
          
          .question-card:hover {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          }
          
          .question-badge {
            position: absolute;
            left: -0.75rem;
            top: 2rem;
            background: #7c3aed;
            color: white;
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
            border-radius: 0 9999px 9999px 0;
            font-weight: bold;
            font-size: 0.875rem;
            box-shadow: 0 10px 15px rgba(124, 58, 237, 0.1);
          }
          
          .question-content {
            padding-left: 1.5rem;
          }
          
          .instruction-hint {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            color: #d97706;
            background: rgba(254, 243, 199, 0.3);
            padding: 1rem;
            border-radius: 0.75rem;
            border: 1px solid #fef3c7;
            margin-bottom: 1.5rem;
          }
          
          .hint-icon {
            flex-shrink: 0;
            margin-top: 0.125rem;
            width: 1.25rem;
            height: 1.25rem;
          }
          
          .hint-title {
            font-weight: bold;
            margin-bottom: 0.25rem;
          }
          
          .hint-points {
            color: rgba(217, 119, 6, 0.8);
            font-size: 0.75rem;
            margin-top: 0.25rem;
          }
          
          .example-section {
            margin-bottom: 2rem;
            padding-left: 1rem;
            border-left: 4px solid #bfdbfe;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }
          
          .example-label {
            font-size: 0.875rem;
            color: #3b82f6;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
          }
          
          .example-content {
            font-size: 1.125rem;
            color: #4b5563;
            font-weight: 500;
          }
          
          .main-question-content {
            position: relative;
          }
          
          .question-content-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .fill-blank-line, .multiple-choice-line {
            line-height: 3.5rem;
            font-size: 1.25rem;
            color: #1f2937;
            word-break: break-word;
          }
          
          .blank-input-field {
            display: inline-flex;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            width: 8rem;
            height: 2.5rem;
            text-align: center;
            color: #7c3aed;
            font-weight: bold;
            background: #faf5ff;
            border: 2px solid #d8b4fe;
            border-radius: 0.25rem;
            transition: all 0.2s;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            padding: 0 0.5rem;
            font-size: 1rem;
          }
          
          .blank-input-field:focus {
            border-color: #7c3aed;
            background: white;
            outline: none;
            box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
          }
          
          .blank-input-field::placeholder {
            color: #c4b5fd;
          }
          
          .choice-container {
            display: inline-flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            vertical-align: middle;
          }
          
          .choice-button {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: bold;
            border: 2px solid;
            transition: all 0.2s;
            transform: scale(1);
            cursor: pointer;
            white-space: nowrap;
          }
          
          .choice-button:hover {
            transform: scale(1.05);
          }
          
          .choice-button-selected {
            background: #7c3aed;
            color: white;
            border-color: #7c3aed;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .choice-button-default {
            background: white;
            color: #4b5563;
            border-color: #d1d5db;
          }
          
          .choice-button-default:hover {
            border-color: #c4b5fd;
            color: #7c3aed;
          }
          
          /* Rearrange styles */
          .rearrange-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 1rem;
          }
          
          .rearrange-instruction {
            color: #6b7280;
            font-size: 0.95rem;
            padding: 0.75rem;
            background: #f8fafc;
            border-radius: 0.5rem;
            border-left: 4px solid #7c3aed;
          }
          
          .rearrange-words {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            padding: 1rem;
            background: #faf5ff;
            border-radius: 1rem;
            min-height: 120px;
            border: 2px dashed #d8b4fe;
          }
          
          .rearrange-word {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            background: white;
            border: 2px solid #e9d5ff;
            border-radius: 0.75rem;
            cursor: move;
            user-select: none;
            transition: all 0.2s;
            box-shadow: 0 2px 4px rgba(124, 58, 237, 0.1);
          }
          
          .rearrange-word:hover {
            border-color: #c4b5fd;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(124, 58, 237, 0.15);
          }
          
          .rearrange-word.dragging {
            opacity: 0.5;
            border-style: dashed;
            background: #f3e8ff;
          }
          
          .drag-handle {
            color: #a78bfa;
            width: 1rem;
            height: 1rem;
            cursor: grab;
          }
          
          .rearrange-word:active .drag-handle {
            cursor: grabbing;
          }
          
          .rearrange-preview {
            padding: 1.25rem;
            background: white;
            border-radius: 1rem;
            border: 2px solid #e0e7ff;
          }
          
          .preview-label {
            font-weight: 600;
            color: #4f46e5;
            margin-bottom: 0.75rem;
            font-size: 0.95rem;
          }
          
          .preview-text {
            font-size: 1.25rem;
            line-height: 2;
            color: #1f2937;
            min-height: 2.5rem;
            padding: 0.5rem;
            background: #f8fafc;
            border-radius: 0.5rem;
          }
          
          .preview-word {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            margin: 0.125rem;
            background: #e0e7ff;
            border-radius: 0.25rem;
          }
          
          .modal-footer {
            flex: none;
            padding: 1.5rem;
            background: white;
            border-top: 1px solid #f3f4f6;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            z-index: 20;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.02);
          }
          
          .submit-debug-info {
            text-align: center;
            font-size: 0.75rem;
            color: #6b7280;
            font-family: monospace;
            background: #f3f4f6;
            padding: 0.5rem;
            border-radius: 0.375rem;
          }
          
          .submit-button {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            background-image: linear-gradient(to right, #7c3aed, #db2777);
            color: white;
            padding-left: 3rem;
            padding-right: 3rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-radius: 1rem;
            font-size: 1.25rem;
            font-weight: bold;
            box-shadow: 0 10px 25px rgba(124, 58, 237, 0.1);
            transition: all 0.2s;
            width: 100%;
            min-width: 300px;
            border: none;
            cursor: pointer;
          }
          
          .submit-button:disabled {
            opacity: 0.5;
            transform: translateY(0);
            box-shadow: none;
            cursor: not-allowed;
          }
          
          @media (min-width: 768px) {
            .submit-button {
              width: auto;
              align-self: center;
            }
          }
          
          .submit-button:hover:not(:disabled) {
            box-shadow: 0 15px 30px rgba(124, 58, 237, 0.2);
            transform: translateY(-0.25rem);
          }
          
          .submit-spinner {
            animation: spin 1s linear infinite;
            width: 1.5rem;
            height: 1.5rem;
            border: 2px solid white;
            border-top-color: transparent;
            border-radius: 9999px;
          }
          
          .submit-icon {
            width: 1.375rem;
            height: 1.375rem;
            transition: transform 0.2s;
          }
          
          .submit-button:hover:not(:disabled) .submit-icon {
            transform: translateX(0.25rem);
          }
          
          .modal-body::-webkit-scrollbar {
            width: 8px;
          }
          
          .modal-body::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .modal-body::-webkit-scrollbar-thumb {
            background-color: #E9D5FF;
            border-radius: 20px;
            border: 3px solid transparent;
            background-clip: content-box;
          }
          
          .modal-body::-webkit-scrollbar-thumb:hover {
            background-color: #C084FC;
          }
          
          ruby {
            ruby-align: center;
          }
        `})]}),C&&t.jsxs("div",{className:"validation-modal-overlay",children:[t.jsxs("div",{className:"validation-modal",children:[t.jsxs("div",{className:"validation-modal-header",children:[t.jsx(bn,{className:"validation-alert-icon"}),t.jsx("h3",{className:"validation-modal-title",children:"Thiếu thông tin"})]}),t.jsxs("div",{className:"validation-modal-body",children:[t.jsx("p",{children:xe}),t.jsx("p",{className:"validation-hint",children:"Vui lòng kiểm tra lại các câu hỏi và điền đầy đủ thông tin."})]}),t.jsx("div",{className:"validation-modal-footer",children:t.jsx("button",{onClick:K,className:"validation-confirm-button",children:"Xác nhận"})})]}),t.jsx("style",{children:`
            .validation-modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.5);
              backdrop-filter: blur(4px);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 100000;
              padding: 1rem;
            }
            
            .validation-modal {
              background: white;
              border-radius: 1rem;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
              width: 100%;
              max-width: 400px;
              overflow: hidden;
              animation: slideInUp 0.3s ease-out;
            }
            
            .validation-modal-header {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              padding: 1.5rem;
              background: #fef3c7;
              border-bottom: 1px solid #fde68a;
            }
            
            .validation-alert-icon {
              color: #d97706;
              width: 1.5rem;
              height: 1.5rem;
            }
            
            .validation-modal-title {
              font-size: 1.25rem;
              font-weight: bold;
              color: #92400e;
              margin: 0;
            }
            
            .validation-modal-body {
              padding: 1.5rem;
              color: #4b5563;
            }
            
            .validation-hint {
              margin-top: 0.75rem;
              color: #6b7280;
              font-size: 0.875rem;
            }
            
            .validation-modal-footer {
              padding: 1rem 1.5rem;
              background: #f9fafb;
              border-top: 1px solid #e5e7eb;
              display: flex;
              justify-content: flex-end;
            }
            
            .validation-confirm-button {
              padding: 0.5rem 1.5rem;
              background: #7c3aed;
              color: white;
              border-radius: 0.5rem;
              font-weight: bold;
              border: none;
              cursor: pointer;
              transition: background-color 0.2s;
            }
            
            .validation-confirm-button:hover {
              background: #6d28d9;
            }
          `})]})]}):null}const yl=12,or=3;function mb({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState(null),[h,m]=f.useState(1),[g,x]=f.useState(1),[w,b]=f.useState(!0),[y,k]=f.useState(""),[I,j]=f.useState([]),[v,N]=f.useState(!1),[V,O]=f.useState(new Set),[B,G]=f.useState(0),[te,de]=f.useState(!1),[q,le]=f.useState(!1),[C,A]=f.useState(""),[xe,W]=f.useState("validation"),[Y,P]=f.useState(!1),[ue,he]=f.useState(!1),[ne,M]=f.useState(null);f.useEffect(()=>{const E=localStorage.getItem("completedMiniTests");E&&O(new Set(JSON.parse(E)));const D=localStorage.getItem("nekoUser");if(D)try{const Q=JSON.parse(D);G(Q.id||Q.userId||0)}catch(Q){console.error("Error parsing user data:",Q)}},[]),f.useEffect(()=>{(async()=>{try{const Q=(await Ie.get("/grammar/lessons")).data.data||[];await new Promise(re=>setTimeout(re,600)),s(Q),k("")}catch(D){if(console.error("❌ Lỗi khi tải ngữ pháp:",D),D.response?.status===401){alert("Phiên đăng nhập hết hạn! Mèo đưa bạn về trang đăng nhập nhé"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("nekoUser"),a("login");return}k("Không thể kết nối đến server! Mèo đang cố gắng...")}finally{setTimeout(()=>b(!1),600)}})()},[a]);const X=Math.ceil(o.length/yl),Z=o.slice((h-1)*yl,h*yl),z=l?o.find(E=>E.id===l):null,$=z?.grammar.slice((g-1)*or,g*or)||[],be=E=>{j(D=>D.includes(E)?D.filter(Q=>Q!==E):[...D,E])},[J,me]=f.useState({}),fe=(E,D)=>{me(Q=>({...Q,[E]:{...Q[E],[D]:!Q[E]?.[D]}}))},je=()=>{l&&z&&B?N(!0):l?B||Me("Vui lòng đăng nhập để làm bài test!"):Me("Vui lòng chọn bài học để làm bài test!")},Te=E=>{M(E),de(!0)},Me=(E,D="server")=>{A(E),W(D),le(!0)},K=E=>{if(Te(E),N(!1),l){const D=new Set(V);D.add(l),O(D),localStorage.setItem("completedMiniTests",JSON.stringify(Array.from(D)))}},Fe=(E,D="server")=>{Me(E,D),N(!1)},se=E=>{const D=Math.floor(E/60).toString().padStart(2,"0"),Q=(E%60).toString().padStart(2,"0");return`${D}:${Q}`};return w?t.jsx(Pt,{message:"Mèo đang chuẩn bị bài học ngữ pháp cho bạn..."}):y&&o.length===0?t.jsx("div",{className:"full-page-dark-gradient-center",children:t.jsxs("div",{className:"text-center text-white",children:[t.jsx(tt,{className:"text-9xl animate-bounce"}),t.jsx("p",{className:"text-4xl font-bold mb-8",children:y}),t.jsx("button",{onClick:()=>window.location.reload(),className:"px-10 py-5 bg-white/20 backdrop-blur-xl rounded-2xl hover:bg-white/30 transition-all text-2xl font-bold",children:"Thử lại"})]})}):t.jsxs("div",{className:"subtle-gradient-background-relative",children:[t.jsxs("main",{className:"container mx-auto px-4 py-12 relative z-10",children:[t.jsx("div",{className:"text-center mb-12",children:t.jsx("h1",{className:"hero-title-style hero-text-glow",children:"Ngữ Pháp Tiếng Nhật"})}),!l&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12",children:Z.map(E=>t.jsxs("button",{onClick:()=>{u(E.id),x(1)},className:"interactive-blur-card",children:[t.jsx(tt,{className:"text-gray-800 animate-pulse-soft w-full h-full"}),t.jsxs("div",{className:"text-center",children:[t.jsxs("p",{className:"hero-text-glow text-white text-4xl",children:["Bài ",E.id]}),t.jsx("p",{className:"hero-text-glow text-2xl text-white mt-2 px-4 line-clamp-2",children:E.title})]})]},E.id))}),X>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-12",children:[t.jsx("button",{onClick:()=>m(E=>Math.max(1,E-1)),disabled:h===1,className:"custom-button",children:t.jsx(dt,{className:"w-6 h-6 text-black"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:X},(E,D)=>t.jsx("button",{onClick:()=>m(D+1),className:`rounded-full transition-all duration-200 flex items-center justify-center ${h===D+1?"custom-element":"button-icon-effect"}`,children:h===D+1?D+1:""},D))}),t.jsx("button",{onClick:()=>m(E=>Math.min(X,E+1)),disabled:h===X,className:"circular-icon-button",children:t.jsx(xt,{className:"w-6 h-6 text-black"})})]})]}),l&&z&&t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("div",{className:"w-full flex flex-col items-center gap-4 mb-12",children:t.jsx("button",{onClick:()=>u(null),className:"glass-pill-button",children:"← Tất cả bài học"})}),t.jsxs("h1",{className:"text-5xl hero-text-glow text-white text-center animate-fade-in mb-12",children:["Bài ",l,": ",z.title]}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-1 gap-10",children:$.map((E,D)=>{const Q=(g-1)*or+D,re=I.includes(Q);return t.jsxs("div",{className:"glassmorphism-hover-card",children:[t.jsx("h4",{className:"large-purple-heading text-center mb-6",children:E.title}),t.jsxs("div",{className:"subtle-gradient-panel mb-6",children:[t.jsx("p",{className:"pink-bold-label",children:"Ý NGHĨA"}),t.jsx("p",{className:"large-bold-text",children:E.meaning})]}),t.jsxs("button",{onClick:()=>fe(Q,"explanation"),className:"interactive-gradient-row-spaced",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(Un,{className:"icon-indigo-standard"}),t.jsx("span",{className:"purple-heading-bold",children:"Giải thích chi tiết"})]}),t.jsx(Fl,{className:`icon-purple-transition ${J[Q]?.explanation?"rotate-180":""}`})]}),J[Q]?.explanation&&t.jsx("div",{className:"subtle-purple-card animate-fade-in mb-8",children:t.jsx("p",{className:"preformatted-text-large whitespace-pre-line",children:E.explanation})}),t.jsxs("button",{onClick:()=>be(Q),className:"gradient-interactive-row",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(Wt,{className:"icon-yellow-highlight"}),t.jsx("span",{className:"purple-heading-bold",children:"Ví dụ"})]}),t.jsx(Fl,{className:`icon-purple-transition ${re?"rotate-180":""}`})]}),re&&t.jsx("div",{className:"space-y-6 animate-fade-in",children:E.examples.map((ee,Ce)=>t.jsxs("div",{className:"interactive-white-card",children:[t.jsx("div",{className:"section-title-style",dangerouslySetInnerHTML:{__html:ee.japanese}}),t.jsx("div",{className:"flex-text-style font-medium",dangerouslySetInnerHTML:{__html:ee.vietnamese}})]},Ce))}),t.jsxs("div",{className:"footer-flex-bar",children:[t.jsx("span",{className:"wiggle-title",children:"🐾"}),t.jsx("span",{className:"wiggle-title",children:"🐾"}),t.jsx("span",{className:"wiggle-title",children:"🐾"})]})]},D)})}),z.grammar.length>or&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-16",children:[t.jsx("button",{onClick:()=>x(E=>Math.max(1,E-1)),disabled:g===1,className:"custom-button",children:t.jsx(dt,{className:"w-6 h-6 text-black"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:Math.ceil(z.grammar.length/or)},(E,D)=>t.jsx("button",{onClick:()=>x(D+1),className:`rounded-full transition-all duration-200 flex items-center justify-center ${g===D+1?"custom-element":"button-icon-effect"}`,children:g===D+1?D+1:""},D))}),t.jsx("button",{onClick:()=>x(E=>Math.min(E+1,Math.ceil(z.grammar.length/or))),disabled:g*or>=z.grammar.length,className:"circular-icon-button",children:t.jsx(xt,{className:"w-6 h-6 text-black"})})]})]})]}),t.jsx("div",{className:"fixed bottom-10 right-10 z-50 hidden lg:block",children:t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:"w-40 h-40 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full object-cover shadow-2xl animate-fly drop-shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300",style:{filter:"drop-shadow(0 10px 20px rgba(255, 182, 233, 0.4))"},onClick:je,title:l?"Làm bài test cho bài học này!":"Chọn bài học để làm test"})}),t.jsx(ub,{isOpen:v,onClose:()=>N(!1),lessonId:l||0,lessonTitle:z?.title||"",userId:B,onSuccess:K,onError:Fe}),te&&ne&&t.jsx("div",{className:`modal-overlay success-overlay ${Y?"fade-out":""}`,children:t.jsxs("div",{className:"submission-success-modal",children:[t.jsx("div",{className:"success-icon-container",children:t.jsx(mx,{className:"success-icon"})}),t.jsx("h2",{className:"success-title",children:"Đã gửi bài thành công!"}),t.jsx("p",{className:"success-message",children:"Chờ feedback từ admin nhé. Mèo sẽ thông báo cho bạn khi có kết quả."}),t.jsxs("div",{className:"success-stats",children:[t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Bài học:"}),t.jsxs("span",{className:"stat-value",children:["#",ne.lessonId]})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Thời gian làm:"}),t.jsx("span",{className:"stat-value",children:se(ne.timeSpent)})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Số nhóm câu:"}),t.jsx("span",{className:"stat-value",children:ne.questionCount})]})]}),t.jsx("button",{onClick:()=>{P(!0),setTimeout(()=>{de(!1),P(!1),M(null)},300)},className:"close-success-button",children:"Đóng"})]})}),q&&t.jsx("div",{className:`modal-overlay error-overlay ${ue?"fade-out":""}`,children:t.jsxs("div",{className:"submission-error-modal",children:[t.jsx("div",{className:`error-icon-container ${xe}`,children:xe==="validation"?t.jsx(bn,{className:"error-icon"}):t.jsx(Rr,{className:"error-icon"})}),t.jsx("h2",{className:"error-title",children:xe==="validation"?"Thiếu thông tin":"Có lỗi xảy ra"}),t.jsx("p",{className:"error-message",children:C}),xe==="validation"&&t.jsx("div",{className:"error-hint",children:t.jsxs("p",{children:["💡 ",t.jsx("strong",{children:"Mẹo:"})," Hãy kiểm tra lại tất cả các ô trống và chọn đáp án."]})}),xe==="server"&&t.jsx("div",{className:"error-hint",children:t.jsxs("p",{children:["⚠️ ",t.jsx("strong",{children:"Khắc phục:"})," Kiểm tra kết nối mạng và thử lại."]})}),xe==="timeout"&&t.jsx("div",{className:"error-hint",children:t.jsxs("p",{children:["⏱️ ",t.jsx("strong",{children:"Timeout:"})," Request mất quá nhiều thời gian. Vui lòng thử lại."]})}),t.jsxs("div",{className:"error-actions",children:[t.jsx("button",{onClick:()=>{he(!0),setTimeout(()=>{le(!1),he(!1),A("")},300)},className:"error-button primary",children:xe==="validation"?"Tiếp tục làm bài":xe==="timeout"?"Thử lại":"Hiểu rồi"}),xe==="server"&&t.jsx("button",{onClick:()=>{he(!0),setTimeout(()=>{le(!1),he(!1),A("")},300)},className:"error-button secondary",children:"Đóng"})]})]})}),t.jsx("style",{children:`
        @keyframes fly {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(2deg);
          }
          50% {
            transform: translateY(-5px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }
        
        .animate-fly {
          animation: fly 4s ease-in-out infinite;
        }

        .icon-yellow-highlight {
          width: 1.5rem;
          height: 1.5rem;
          color: #eab308;
        }
        
        .icon-indigo-standard {
          width: 1.5rem;
          height: 1.5rem;
          color: #6366f1;
        }
        
        .icon-purple-transition {
          width: 2rem;
          height: 2rem;
          color: #9333ea;
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        
        .interactive-gradient-row-spaced {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background-image: linear-gradient(to right, #fce7f6, #ede9fe);
          border-radius: 1rem;
          transition: all 150ms ease-in-out;
          margin-bottom: 1.5rem;
          cursor: pointer;
          border: none;
        }
        
        .interactive-gradient-row-spaced:hover {
          background-image: linear-gradient(to right, #fbcfe8, #ddd6fe);
          transform: translateY(-2px);
        }
        
        .purple-heading-bold {
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: 700;
          color: #7e22ce;
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        
        .wiggle-title {
          font-size: 2.25rem;
          animation: wiggle 1s ease-in-out infinite;
        }
        
        .full-page-dark-gradient-center {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(to bottom right, #581c87, #831843);
        }
        
        .subtle-purple-card {
          background-color: rgba(243, 232, 255, 0.5);
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        
        .button-icon-effect {
          background-color: rgba(255, 255, 255, 0.9);
          width: 1.5rem;
          height: 1.5rem;
          transition: transform 150ms ease-in-out;
        }
        
        .custom-element {
          background-color: #f472b6;
          color: #ffffff;
          padding-left: 1rem;
          padding-right: 1rem;
          height: 2.5rem;
          font-weight: 700;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        }
        
        .gradient-interactive-row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          background-image: linear-gradient(to right, #fce7f6, #ede9fe);
          border-radius: 1rem;
          transition: all 150ms ease-in-out;
          margin-bottom: 1.5rem;
        }
        
        .gradient-interactive-row:hover {
          background-image: linear-gradient(to right, #fbcfe8, #ddd6fe);
        }
        
        .preformatted-text-large {
          font-size: 1.875rem;
          color: #1f2937;
          line-height: 1.625;
          white-space: pre-line;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .full-bounce-pink-element {
          position: relative;
          width: 100%;
          height: 100%;
          color: #ec4899;
          animation: bounce 1s infinite;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
        }
        
        .footer-flex-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #f3e8ff;
        }
        
        .flex-text-style {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: #4b5563;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .section-title-style {
          font-size: 1.875rem;
          font-weight: 900;
          color: #1f2937;
          margin-bottom: 0.75rem;
          line-height: 1.625;
        }
        
        .interactive-white-card {
          background-color: #ffffff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -4px rgba(0, 0, 0, 0.1);
          border: 2px solid #fbcfe8;
          transition: all 300ms ease-in-out;
        }
        
        .interactive-white-card:hover {
          border-color: #ec4899;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 8px 10px -6px rgba(0, 0, 0, 0.1);
          transform: translateY(-0.25rem);
        }
        
        .large-bold-text {
          font-size: 2rem;
          line-height: 2rem;
          font-weight: 700;
          color: #1f2937;
        }
        
        .pink-bold-label {
          font-size: 1.45rem;
          line-height: 1.25rem;
          font-weight: 700;
          color: #be185d;
          margin-bottom: 0.5rem;
        }
        
        .subtle-gradient-panel {
          background-image: linear-gradient(to right, #fce7f3, #f3e8ff);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }
        
        .large-purple-heading {
          font-size: 2.875rem;
          line-height: 2.25rem;
          font-weight: 900;
          color: #6d28d9;
          letter-spacing: -0.025em;
        }
        
        .glassmorphism-hover-card {
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 2rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 4px solid #e9d5ff;
          transition: all 500ms ease-in-out;
        }
        
        .glassmorphism-hover-card:hover {
          border-color: #f472b6;
          transform: scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 10px 15px -3px rgba(236, 72, 153, 0.3),
            0 4px 6px -4px rgba(236, 72, 153, 0.3);
        }
        
        .glass-pill-button {
          padding: 1rem 2rem;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 9999px;
          color: #000000;
          font-weight: 700;
          transition: background-color 300ms ease-in-out;
        }
        
        .glass-pill-button:hover {
          background-color: rgba(255, 255, 255, 0.6);
        }
        
        .interactive-blur-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 2rem;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 4px solid #d8b4fe;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: all 500ms ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        
        .interactive-blur-card:hover {
          border-color: #ec4899;
          transform: scale(1.1);
        }
        
        .hero-title-style {
          position: relative;
          display: block;
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
          font-size: 3.75rem;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.3);
          transform: translateY(-0.75rem);
          animation: pulse-soft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @media (min-width: 768px) {
          .hero-title-style {
            padding-left: 3.5rem;
            padding-right: 3.5rem;
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
            font-size: 4.5rem;
            transform: translateY(-1rem);
          }
        }
        
        @media (min-width: 1024px) {
          .hero-title-style {
            padding-left: 5rem;
            padding-right: 5rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
            font-size: 8rem;
            transform: translateY(-1.25rem);
          }
        }
        
        .subtle-gradient-background-relative {
          min-height: 100vh;
          position: relative;
          background-attachment: fixed;
        }
        
        @keyframes pulse-soft {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
        
        .hero-text-glow {
          text-shadow: 0 0 20px #ff69b4, 0 0 40px #a020f0, 0 0 60px #00ffff,
            0 0 80px #ff69b4, 0 0 100px #a020f0, 0 4px 20px rgba(0, 0, 0, 0.9);
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8));
        }
        
        .custom-button {
          padding: 1rem 1.25rem;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.9);
          transition: all 150ms ease-in-out;
        }
        
        .custom-button:hover {
          background-color: #fecaca;
          transform: scale(1.03);
        }
        
        .custom-button:disabled {
          opacity: 0.5;
        }
        
        .button-icon-effect {
          background-color: rgba(255, 255, 255, 0.9);
          width: 1.5rem;
          height: 1.5rem;
          transition: transform 150ms ease-in-out;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (min-width: 768px) {
          .button-icon-effect {
            width: 2rem;
            height: 2rem;
          }
        }
        
        .button-icon-effect:hover {
          transform: scale(1.1);
        }
        
        @media (min-width: 768px) {
          .custom-element {
            height: 3rem;
          }
        }
        
        .circular-icon-button {
          padding: 0.75rem;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.3);
          transition: all 150ms ease-in-out;
        }
        
        .circular-icon-button:hover {
          background-color: #fecaca;
          transform: scale(1.05);
        }
        
        .circular-icon-button:disabled {
          opacity: 0.5;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100000;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }
        
        .success-overlay, .error-overlay {
          animation: fadeIn 0.3s ease-out;
        }
        
        .fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.95);
          }
        }
        
        .submission-success-modal {
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          max-width: 32rem;
          width: 100%;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
          animation: slideInUp 0.4s ease-out;
        }
        
        .success-icon-container {
          width: 5rem;
          height: 5rem;
          background: #dcfce7;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1.5rem;
        }
        
        .success-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #16a34a;
        }
        
        .success-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        
        .success-message {
          color: #6b7280;
          margin-bottom: 2rem;
          line-height: 1.5;
          font-size: 1.125rem;
        }
        
        .success-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }
        
        .stat-value {
          font-size: 1.25rem;
          font-weight: bold;
          color: #7c3aed;
        }
        
        .close-success-button {
          width: 100%;
          padding: 0.875rem;
          background: #111827;
          color: white;
          border-radius: 0.75rem;
          font-weight: bold;
          transition: background-color 0.2s;
          border: none;
          cursor: pointer;
        }
        
        .close-success-button:hover {
          background: #1f2937;
        }
        
        .submission-error-modal {
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          max-width: 36rem;
          width: 100%;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
          animation: slideInUp 0.4s ease-out;
        }
        
        .error-icon-container {
          width: 5rem;
          height: 5rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1.5rem;
        }
        
        .error-icon-container.validation {
          background: #fef3c7;
          border: 2px solid #f59e0b;
        }
        
        .error-icon-container.server {
          background: #fee2e2;
          border: 2px solid #ef4444;
        }
        
        .error-icon-container.timeout {
          background: #f3f4f6;
          border: 2px solid #6b7280;
        }
        
        .error-icon {
          width: 2.5rem;
          height: 2.5rem;
        }
        
        .error-icon-container.validation .error-icon {
          color: #d97706;
        }
        
        .error-icon-container.server .error-icon {
          color: #dc2626;
        }
        
        .error-icon-container.timeout .error-icon {
          color: #6b7280;
        }
        
        .error-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        
        .error-message {
          color: #6b7280;
          margin-bottom: 1.5rem;
          line-height: 1.5;
          background: #f9fafb;
          padding: 1rem;
          border-radius: 0.75rem;
          border-left: 4px solid #e5e7eb;
          text-align: left;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        
        .error-hint {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }
        
        .error-hint p {
          margin: 0;
          color: #0369a1;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        .error-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .error-button {
          flex: 1;
          padding: 0.875rem;
          border-radius: 0.75rem;
          font-weight: bold;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }
        
        .error-button.primary {
          background: #111827;
          color: white;
        }
        
        .error-button.primary:hover {
          background: #1f2937;
          transform: translateY(-2px);
        }
        
        .error-button.secondary {
          background: white;
          color: #111827;
          border: 2px solid #e5e7eb;
        }
        
        .error-button.secondary:hover {
          background: #f9fafb;
          border-color: #d1d5db;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function hb({kanji:a,onClose:o}){const s=f.useRef(null);f.useEffect(()=>{if(!s.current)return;s.current.innerHTML="";const m=a.kanji.charCodeAt(0).toString(16).padStart(5,"0");return fetch(`https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${m}.svg`).then(g=>{if(g.ok)return g.text();throw new Error("No SVG")}).then(g=>{const b=new DOMParser().parseFromString(g,"image/svg+xml").documentElement;b.querySelectorAll("text").forEach(j=>{j.style.fill="#dc2626",j.style.fontWeight="bold",j.style.fontSize="10px",j.style.fontFamily="sans-serif",j.style.textAnchor="middle",j.style.dominantBaseline="middle",j.style.filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"});const k=new XMLSerializer().serializeToString(b);s.current.innerHTML=k,s.current.querySelectorAll("path").forEach((j,v)=>{const N=j.getTotalLength();j.style.strokeDasharray=`${N}`,j.style.strokeDashoffset=`${N}`,j.style.animation=`draw 1s ease-in-out ${v*.3}s forwards`,j.style.stroke="#111827",j.style.fill="none",j.style.strokeWidth="10",j.style.strokeLinecap="round",j.style.strokeLinejoin="round"})}).catch(()=>{console.warn(`[KanjiVG] Không load SVG cho "${a.kanji}". Dùng placeholder.`);const g=h(a.strokes||4);s.current.innerHTML=g}),()=>{s.current&&(s.current.innerHTML="")}},[a.kanji]);const l=()=>{const m=s.current;if(!m)return;const g=m.querySelector("svg");if(!g)return;g.querySelectorAll("path").forEach((w,b)=>{const y=w.cloneNode(!0);w.parentNode?.replaceChild(y,w);const k=y.getTotalLength();y.style.strokeDasharray=`${k}`,y.style.strokeDashoffset=`${k}`,y.style.animation=`draw 1s ease-in-out ${b*.3}s forwards`})},u=m=>{m.target===m.currentTarget&&o()},h=m=>{let g="";for(let y=0;y<m;y++){const k=y*360/m,I=160+Math.cos(k*Math.PI/180)*100,j=160+Math.sin(k*Math.PI/180)*100,v=160+Math.cos((k+60)*Math.PI/180)*(100*.6),N=160+Math.sin((k+60)*Math.PI/180)*(100*.6);g+=`<path d="M${I},${j} L160,160 L${v},${N}" stroke="#111827" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none" />`}return`
      <svg width="320" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="100%" height="100%" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="6,6" />
        ${g}
      </svg>
    `};return t.jsxs("div",{className:"modal-overlay-blurred",onClick:u,children:[t.jsxs("div",{className:"modal-card-premium",children:[t.jsxs("div",{className:"modal-header-divider",children:[t.jsx("h2",{className:"heading-dark-xl",children:"Chi tiết chữ Kanji"}),t.jsx("button",{onClick:o,className:"icon-button-circle","aria-label":"Đóng",children:t.jsx(Kr,{className:"icon-gray-medium"})})]}),t.jsxs("div",{className:"p-8 md:p-12 space-y-12",children:[t.jsxs("div",{className:"responsive-hero-grid",children:[t.jsx("div",{className:"flex items-center justify-center h-full px-4",children:t.jsx("div",{className:"bg-gray-50 rounded-2xl w-full h-full flex items-center justify-center shadow-inner",children:t.jsx("div",{className:"display-ultra-massive",children:a.kanji})})}),t.jsx("div",{className:"flex flex-col h-full justify-center",children:t.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[t.jsx("div",{ref:s,className:"w-full h-full flex items-center justify-center kanji-svg-container",style:{maxWidth:"320px",maxHeight:"320px",minHeight:"200px"}}),t.jsx("button",{onClick:l,className:"btn-icon-minimal",children:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})})]})})]}),t.jsxs("div",{className:"responsive-grid-layout",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("p",{className:"label-medium-gray",children:"Âm On (音読み)"}),t.jsx("p",{className:"heading-display-lg",children:a.on})]}),t.jsxs("div",{children:[t.jsx("p",{className:"label-medium-gray",children:"Âm Kun (訓読み)"}),t.jsx("p",{className:"heading-display-lg",children:a.kun||"—"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"label-medium-gray",children:"Âm Hán Việt"}),t.jsx("p",{className:"heading-display-lg",children:a.hanViet})]})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("p",{className:"label-medium-gray",children:"Ý nghĩa"}),t.jsx("p",{className:"heading-display-lg",children:a.meaning})]}),t.jsxs("div",{children:[t.jsx("p",{className:"label-medium-gray",children:"Số nét"}),t.jsxs("p",{className:"heading-display-lg",children:[a.strokes," nét"]})]})]})]}),t.jsxs("div",{className:"mt-12",children:[t.jsx("p",{className:"label-medium-gray mb-6",children:"Từ ghép phổ biến"}),t.jsx("div",{className:"bg-gray-50 rounded-2xl p-8",children:a.compounds.length>0?t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsx("div",{className:"space-y-6",children:a.compounds.slice(0,Math.ceil(a.compounds.length/2)).map((m,g)=>t.jsxs("div",{className:"border-b border-gray-200 pb-6 last:border-0 last:pb-0",children:[t.jsx("p",{className:"text-2xl font-bold text-gray-900",children:m.word}),t.jsx("p",{className:"text-lg text-gray-600 mt-2",children:m.reading}),t.jsx("p",{className:"text-lg text-gray-700 mt-3 leading-relaxed",children:m.meaning})]},g))}),t.jsx("div",{className:"space-y-6",children:a.compounds.slice(Math.ceil(a.compounds.length/2)).map((m,g)=>t.jsxs("div",{className:"border-b border-gray-200 pb-6 last:border-0 last:pb-0",children:[t.jsx("p",{className:"text-2xl font-bold text-gray-900",children:m.word}),t.jsx("p",{className:"text-lg text-gray-600 mt-2",children:m.reading}),t.jsx("p",{className:"text-lg text-gray-700 mt-3 leading-relaxed",children:m.meaning})]},g))})]}):t.jsx("p",{className:"text-center text-gray-500 italic py-8",children:"Chưa có từ ghép nào"})})]})]})]}),t.jsx("style",{children:`
 .btn-icon-minimal {
  /* Hiển thị flex để căn giữa icon */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Kích thước nút nhỏ gọn (44px x 44px là kích thước tối thiểu tốt cho cảm ứng) */
  width: 44px;
  height: 44px;
  padding: 0; /* Loại bỏ padding vì kích thước đã cố định */

  /* Nền trong suốt hoặc xám rất nhẹ */
  background-color: transparent; 
  color: #4b5563; /* Màu icon mặc định (xám) */

  /* Hình tròn hoàn hảo */
  border-radius: 9999px; 

  /* Không có đường viền */
  border: none;
  cursor: pointer;

  /* Hiệu ứng chuyển động mượt mà */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* Loại bỏ shadow mặc định nếu có */
  box-shadow: none;
}

/* Hiệu ứng Hover: Nền xám nhạt và icon đậm hơn */
.btn-icon-minimal:hover {
  background-color: #e5e7eb; /* Nền xám nhạt khi hover */
  color: #1f2937; /* Icon đậm hơn */
  transform: translateY(-1px); /* Nhích nhẹ */
}

/* Hiệu ứng Active (Khi nhấn) */
.btn-icon-minimal:active {
  background-color: #d1d5db; /* Nền đậm hơn chút khi nhấn */
  transform: translateY(0);
}
      .kanji-svg-container > svg {
  width: 100%;
  height: 100%;
  max-width: 280px;
  max-height: 280px;
  object-fit: contain;
}
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .display-ultra-massive {
          font-size: 8rem;
          font-weight: 500;
          color: #111827;
          line-height: 1;
          user-select: none;
          transition: font-size 0.3s ease-in-out;
        }
        @media (min-width: 768px) {
          .display-ultra-massive {
            font-size: 160px;
          }
        }
        @media (min-width: 1024px) {
          .display-ultra-massive {
            font-size: 200px;
          }
        }
        .flex-center-both-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100%;
        }
        .description-text-spaced {
          margin-top: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
          color: #4b5563;
          text-align: center;
        }
        .interactive-empty-state-box {
          text-align: center;
          padding: 2rem;
          background-color: #f9fafb;
          border-radius: 1rem;
          transition: all 150ms ease;
        }
        .interactive-empty-state-box:hover {
          background-color: #f3f4f6;
        }
        .heading-display-lg {
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        .label-medium-gray {
          font-size: 1.125rem;
          line-height: 1.75rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 0.5rem;
        }
        .responsive-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .responsive-grid-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .responsive-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .responsive-hero-grid {
            gap: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .responsive-hero-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .icon-gray-medium {
          width: 1.75rem;
          height: 1.75rem;
          color: #4b5563;
        }
        .icon-button-circle {
          padding: 0.75rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background-color: transparent;
          cursor: pointer;
          transition: background-color 150ms ease;
        }
        .icon-button-circle:hover {
          background-color: #f3f4f6;
        }
        .heading-dark-xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        .modal-header-divider {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;
          border-bottom: 1px solid #e5e7eb;
          background-color: #ffffff;
        }
        .modal-card-premium {
          background-color: #ffffff;
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          width: 100%;
          max-width: 56rem;
          margin-left: 1rem;
          margin-right: 1rem;
          max-height: 90vh;
          overflow-y: auto;
        }
        .modal-overlay-blurred {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
      `})]})}const wl=12,vl=12;function pb({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState(null),[h,m]=f.useState(1),[g,x]=f.useState(1),[w,b]=f.useState(""),[y,k]=f.useState(!0),[I,j]=f.useState(""),[v,N]=f.useState(null),[V,O]=f.useState(!1);f.useEffect(()=>{(async()=>{try{k(!0);const xe=(await Ie.get("/kanji/lessons")).data.data||[];s(xe),j("")}catch(A){if(console.error("❌ Lỗi khi tải Kanji:",A),A.response?.status===401){alert("Phiên đăng nhập hết hạn! Mèo đưa bạn về trang đăng nhập nhé"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("nekoUser"),a("login");return}j("Không thể tải dữ liệu Kanji. Mèo đang cố gắng...")}finally{setTimeout(()=>k(!1),600)}})()},[a]);const B=()=>{if(!l||l.kanjiList.length===0){O(!0);return}let C=[];if(l.kanjiList.forEach(xe=>{xe.compounds&&xe.compounds.length>0&&(C=C.concat(xe.compounds))}),C.length===0){alert("Bài học này chưa có từ ghép để học flashcard!");return}let A=[...C];A.length>10&&(A=A.sort(()=>Math.random()-.5).slice(0,10)),localStorage.setItem("nekoFlashcardKanjiData",JSON.stringify({lessonId:l.id,lessonTitle:l.title,compounds:A,allCompounds:C})),requestAnimationFrame(()=>a("flashcard-kanji"))},G=Math.ceil(o.length/wl),te=f.useMemo(()=>o.slice((h-1)*wl,h*wl),[o,h]),de=f.useMemo(()=>{if(!w.trim())return[];const C=w.trim(),A=[];return o.forEach(W=>{W.kanjiList.forEach(Y=>{Y.compounds&&Y.compounds.length>0&&Y.compounds.forEach(P=>{if(P.word.includes(C)){const ue=W.kanjiList.filter(he=>P.word.includes(he.kanji));A.push({type:"compound",word:P.word,reading:P.reading,meaning:P.meaning,lessonId:W.id,lessonTitle:W.title,kanjiList:ue})}})})}),A.length===0&&o.forEach(W=>{W.kanjiList.forEach(Y=>{const P=(Y.kanji||"").toLowerCase(),ue=(Y.on||"").toLowerCase(),he=(Y.kun||"").toLowerCase(),ne=(Y.hanViet||"").toLowerCase(),M=(Y.meaning||"").toLowerCase(),X=C.toLowerCase();(P.includes(X)||ue.includes(X)||he.includes(X)||ne.includes(X)||M.includes(X))&&A.push({type:"kanji",lessonId:W.id,lessonTitle:W.title,kanjiList:[Y]})})}),A.filter((W,Y,P)=>Y===P.findIndex(ue=>ue.type==="compound"?ue.word===W.word:ue.kanjiList[0].kanji===W.kanjiList[0].kanji))},[w,o]),q=f.useMemo(()=>l?l.kanjiList.slice((g-1)*vl,g*vl):[],[l,g]),le=l?Math.ceil(l.kanjiList.length/vl):0;return y?t.jsx(Pt,{message:"Mèo đang chuẩn bị bài học Kanji cho bạn..."}):I&&o.length===0?t.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900",children:t.jsxs("div",{className:"text-center text-white",children:[t.jsx("div",{className:"text-9xl animate-bounce",children:"Meow"}),t.jsx("p",{className:"text-4xl font-bold mb-8",children:I}),t.jsx("button",{onClick:()=>window.location.reload(),className:"px-10 py-5 bg-white/20 backdrop-blur-xl rounded-2xl hover:bg-white/30 transition-all text-2xl font-bold",children:"Thử lại"})]})}):t.jsxs("div",{className:"min-h-screen",children:[t.jsxs("main",{className:"relative z-10 container mx-auto px-4 py-12",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("h1",{className:"relative z-10 mb-12 md:mb-16",children:[t.jsx("div",{className:"absolute inset-0 -z-10 rounded-3xl"}),t.jsx("span",{className:"hero-section-title hero-text-glow",children:"Học Chữ Kanji"})]}),t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx("div",{className:"relative group",children:t.jsxs("div",{className:"glass-effect-container animate-fade-in",children:[t.jsx("div",{className:"element-overlay-positioned",children:t.jsx(Ur,{className:"icon-centered-left",strokeWidth:5})}),t.jsx("input",{type:"text",placeholder:"Tìm Kanji... (猫, 。。。)",value:w,onChange:C=>{b(C.target.value),u(null)},className:"transparent-search-input"})]})}),de.length>0&&t.jsxs("div",{className:"mt-10 max-w-4xl mx-auto space-y-6 animate-fade-in",children:[t.jsxs("p",{className:"pulsing-centered-text text-2xl md:text-3xl",children:["Tìm thấy ",de.length,' kết quả cho "',w,'"']}),de.map((C,A)=>t.jsxs("div",{className:"glass-card-hover-effect cursor-pointer group",onClick:()=>{C.kanjiList.length>0&&N(C.kanjiList[0])},style:{animationDelay:`${A*.1}s`},children:[t.jsx("div",{className:"full-gradient-hover-effect"}),t.jsx("div",{className:"relative z-10 p-8 md:p-10",children:C.type==="compound"?t.jsxs("div",{className:"text-center space-y-6 max-w-4xl mx-auto p-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h2",{className:"rainbow-glow-title",children:C.word}),t.jsx("p",{className:"text-3xl md:text-2xl text-black font-semibold italic",children:C.reading}),t.jsxs("p",{className:"text-3xl md:text-2xl text-black font-semibold italic",children:["「 ",C.meaning," 」"]})]}),t.jsxs("div",{className:"inline-block px-4 py-1 text-3xl md:text-base",children:["📚 Bài ",C.lessonId," –"," ",t.jsx("span",{className:"text-black",children:C.lessonTitle})]}),C.kanjiList.map(xe=>t.jsxs("div",{className:"kanji-crystal-card",children:[t.jsx("div",{className:"absolute -top-4 -right-4 w-16 h-16 text-black"}),t.jsx("p",{className:"text-5xl font-black rainbow-glow-title mb-4",children:xe.kanji}),t.jsxs("div",{className:"space-y-1",children:[t.jsx("p",{className:"text-3xl text-black font-bold leading-tight",children:xe.meaning}),t.jsx("div",{className:"w-8 mx-auto my-2"}),t.jsxs("p",{className:"text-2xl text-white/50 leading-relaxed uppercase tracking-tighter",children:[t.jsxs("span",{className:"block",children:["On: ",xe.on]}),t.jsxs("span",{className:"block",children:["Kun: ",xe.kun]})]})]})]},xe.kanji))]}):t.jsxs("div",{className:"flex items-center justify-between gap-6",children:[t.jsxs("div",{className:"flex-1 text-left",children:[t.jsx("p",{className:"rainbow-glow-title text-5xl md:text-6xl font-black",children:C.kanjiList[0].kanji}),t.jsxs("p",{className:"small-rainbow-glow text-xl md:text-2xl mt-2",children:[C.kanjiList[0].on," /"," ",C.kanjiList[0].kun]})]}),t.jsxs("div",{className:"text-right",children:[t.jsx("p",{className:"white-rainbow-glow-bold text-2xl md:text-3xl",children:C.kanjiList[0].meaning}),t.jsxs("p",{className:"small-white-rainbow-glow text-lg mt-3",children:["Bài ",C.lessonId," •"," ",C.kanjiList[0].strokes," nét"]})]})]})})]},A))]})]})]}),l?t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("div",{className:"flex items-center justify-center mb-10",children:t.jsxs("div",{className:"w-full flex flex-col items-center gap-4",children:[t.jsx("h2",{className:"text-3xl hero-text-glow text-white",children:l.title}),t.jsx("button",{onClick:()=>u(null),className:"button",children:"← Tất cả bài học"})]})}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-4",children:q.map((C,A)=>t.jsx("button",{onClick:()=>N(C),className:"kanji-simple-card animate-fade-in",children:t.jsx("p",{className:"text-8xl text-black font-black",children:C.kanji})},A))},`${l?.id||"none"}-${g}`),le>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-16",children:[t.jsx("button",{onClick:()=>x(C=>Math.max(1,C-1)),disabled:g===1,className:"custom-button","aria-label":"Previous kanji page",children:t.jsx(dt,{className:"w-6 h-6 text-white"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:le},(C,A)=>t.jsx("button",{onClick:()=>x(A+1),"aria-label":`Go to page ${A+1}`,className:`rounded-full transition-all duration-200 flex items-center justify-center ${g===A+1?"custom-element":"button-icon-effect"}`,children:g===A+1?A+1:""},A))}),t.jsx("button",{onClick:()=>x(C=>Math.min(le,C+1)),disabled:g===le,className:"circular-icon-button","aria-label":"Next kanji page",children:t.jsx(xt,{className:"w-6 h-6 text-white"})})]})]}):t.jsx(t.Fragment,{children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-8 mb-16",children:te.map(C=>t.jsxs("button",{onClick:()=>{u(C),x(1),b("")},className:"responsive-hover-card animate-fade-in",children:[t.jsx("div",{className:"text-gray-800 animate-pulse-soft",children:t.jsx(tt,{className:"relative w-full h-full"})}),t.jsxs("div",{className:"text-center py-6",children:[t.jsxs("p",{className:"hero-text-glow text-white text-4xl",children:["Bài ",C.id]}),t.jsx("p",{className:"hero-text-glow text-2xl text-white mt-2 px-4 line-clamp-2",children:C.title})]})]},C.id))},h),G>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-12",children:[t.jsx("button",{onClick:()=>m(C=>Math.max(1,C-1)),disabled:h===1,className:"custom-button","aria-label":"Previous lessons page",children:t.jsx(dt,{className:"w-6 h-6 text-black"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:G},(C,A)=>t.jsx("button",{onClick:()=>m(A+1),"aria-label":`Go to lesson page ${A+1}`,className:`rounded-full transition-all duration-200 flex items-center justify-center ${h===A+1?"custom-element":"button-icon-effect"}`,children:h===A+1?A+1:""},A))}),t.jsx("button",{onClick:()=>m(C=>Math.min(G,C+1)),disabled:h===G,className:"circular-icon-button","aria-label":"Next lessons page",children:t.jsx(xt,{className:"w-6 h-6 text-black"})})]})]})})]}),t.jsx("div",{className:"fixed bottom-10 right-10 z-50 hidden lg:block",children:t.jsxs("div",{className:"relative group cursor-pointer",onClick:B,children:[t.jsxs("div",{className:"tooltip-slide-out",children:[t.jsxs("div",{className:"colored-border-label",children:[t.jsx("p",{className:"text-xl font-bold drop-shadow-md",children:"Học flashcard Kanji từ bài hiện tại nào mèo ơi! 🐾"}),t.jsx("div",{className:"absolute bottom-0 right-8 translate-y-full",children:t.jsx("div",{className:"triangle-down-pink"})})]}),t.jsx("div",{className:"absolute bottom-full mb-2 right-12 text-4xl animate-bounce",children:"✨"})]}),t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:"responsive-circular-image-hover",style:{filter:"drop-shadow(0 10px 20px rgba(255, 182, 233, 0.6))"}}),t.jsx("div",{className:"circular-gradient-hover-glow"})]})}),v&&t.jsx(hb,{kanji:v,onClose:()=>N(null)}),t.jsx(Lt,{isOpen:V,onClose:()=>O(!1),title:"Meow meow...",message:l?"Bài này chưa có từ vựng nào cả... Mèo buồn quá!":"Hãy chọn 1 bài học trước nhé"}),t.jsx("style",{children:`
      .kanji-simple-card {
  /* Nền trắng có độ trong suốt để tạo hiệu ứng kính */
  background-color: rgba(255, 255, 255, 0.9); 
  
  /* Bo góc cực lớn 32px */
  border-radius: 2rem; 
  
  /* Khoảng cách bên trong rộng rãi */
  padding: 3rem 2rem;
  min-height: 200px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Viền trắng mờ tạo độ dày cho mặt kính */
  border: 2px solid rgba(255, 255, 255, 0.4);
  
  /* Hiệu ứng bóng đổ đa tầng (shadow-xl) */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
              0 8px 10px -6px rgba(0, 0, 0, 0.1);
  
  /* Chuyển động mượt 400ms */
  transition: all 400ms ease-in-out;
  cursor: pointer;
  
  /* Quan trọng: Hiệu ứng làm mờ lớp nền phía sau (nếu có màu nền) */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Hiệu ứng Hover giống style Glassmorphism */
.kanji-simple-card:hover {
  /* Phóng lớn nhẹ 105% */
  transform: scale(1.05);
  
  /* Viền chuyển sang màu hồng đặc trưng của bạn */
  border-color: #f472b6; 
  
  /* Nền trong suốt hơn một chút khi hover */
  background-color: rgba(255, 255, 255, 0.8);
  
  /* Đổ bóng sâu hơn khi thẻ nổi lên */
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15);
}

/* Hiệu ứng khi nhấn */
.kanji-simple-card:active {
  transform: scale(0.98);
}

      .kanji-crystal-card {
  position: relative; /* relative */
  
  /* bg-white/10 + backdrop-blur-xl */
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px); /* xl blur thường là 24px */
  -webkit-backdrop-filter: blur(24px);

  /* rounded-[32px] */
  border-radius: 32px;
  padding: 1.5rem; /* p-6 */
  
  /* border border-white/20 */
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Tránh tràn nội dung khi hover hoặc có hiệu ứng ánh sáng */
  overflow: hidden; /* overflow-hidden */

  /* transition-all duration-500 */
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

/* Hiệu ứng Hover chuyên nghiệp */
.kanji-crystal-card:hover {
  /* hover:border-white/40 + hover:bg-white/15 */
  border-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.15);
  
  /* hover:-translate-y-2 */
  transform: translateY(-8px);
  
  /* Tăng cường bóng đổ khi thẻ nổi lên */
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4);
}
.rainbow-glow-title {
  /* Kích thước cực đại: 60px (mobile) -> 72px (desktop) */
  font-size: clamp(3.75rem, 10vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em; /* Thu hẹp một chút để các khối màu đặc hơn */

  /* Gradient 5 màu rực rỡ */
  background: linear-gradient(
    45deg, 
    #ff3366, #ffcc00, #33ff99, #00ccff, #9933ff
  );
  background-size: 300% auto;
  -webkit-background-clip: text;
  
  /* Hiệu ứng chuyển động màu mượt mà */
  animation: rainbow-flow 6s ease infinite;

  /* drop-shadow-2xl: Đổ bóng cực sâu để tách lớp */
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3));

  /* Khử răng cưa cực mạnh cho font lớn */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@keyframes rainbow-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

        .circular-gradient-hover-glow {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 9999px;
          background-image: linear-gradient(to right, 
            rgba(244, 114, 182, 0.3),
            rgba(168, 85, 247, 0.3)
          );
          opacity: 0;
          transition: opacity 500ms ease-in-out;
          filter: blur(24px);
        }

        .group:hover .circular-gradient-hover-glow {
          opacity: 1;
        }

        @keyframes fly {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
          100% {
            transform: translateY(0) rotate(-1deg);
          }
        }

        .responsive-circular-image-hover {
          width: 10rem;
          height: 10rem;
          border-radius: 9999px;
          object-fit: cover;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: fly 6s ease-in-out infinite;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
          transform: scale(1) rotate(0deg);
          transition: all 300ms ease-in-out;
          border-width: 4px;
          border-style: solid;
          border-color: #f9a8d4;
        }

        @media (min-width: 640px) {
          .responsive-circular-image-hover {
            width: 6rem;
            height: 6rem;
          }
        }

        @media (min-width: 768px) {
          .responsive-circular-image-hover {
            width: 7rem;
            height: 7rem;
          }
        }

        @media (min-width: 1024px) {
          .responsive-circular-image-hover {
            width: 8rem;
            height: 8rem;
          }
        }

        @media (min-width: 1280px) {
          .responsive-circular-image-hover {
            width: 9rem;
            height: 9rem;
          }
        }

        .group:hover .responsive-circular-image-hover {
          transform: scale(1.1) rotate(12deg);
        }

        .triangle-down-pink {
          width: 0;
          height: 0;
          border-left-width: 8px;
          border-left-style: solid;
          border-left-color: transparent;
          border-right-width: 8px;
          border-right-style: solid;
          border-right-color: transparent;
          border-top-width: 8px;
          border-top-style: solid;
          border-top-color: #f9a8d4;
        }

        .colored-border-label {
          background-color: #ffffff;
          color: #6d28d9;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          white-space: nowrap;
          border-width: 4px;
          border-style: solid;
          border-color: #f9a8d4;
        }

        .tooltip-slide-out {
          position: absolute;
          bottom: 100%;
          margin-bottom: 1rem;
          right: 0;
          transform: translateX(2rem);
          opacity: 0;
          transition: all 500ms ease-in-out;
          pointer-events: none;
        }

        .group:hover .tooltip-slide-out {
          opacity: 1;
          transform: translateX(0);
        }

        .pulsing-animation {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        .responsive-hover-card {
          position: relative;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 2rem;
          padding: 2rem;
          transition: all 500ms ease-in-out;
          overflow: hidden;
        }

        .responsive-hover-card:hover {
          transform: scale(1.05);
        }

        .pulsing-centered-text {
          text-align: center;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 1.75rem;
          margin-bottom: 1.5rem;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .glassmorphism-card {
          background-color: #ffffff;
          border-radius: 2rem;
          padding: 2rem;
          border-width: 2px;
          border-color: rgba(255, 255, 255, 0.4);
          transition: all 400ms ease-in-out;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }

        .glassmorphism-card:hover {
          border-color: #f472b6;
          background-color: rgba(255, 255, 255, 0.80);
          transform: scale(1.05);
        }

        .small-white-rainbow-glow {
          font-size: 1.125rem;
          line-height: 1.75rem;
          color: #ffffff;
          margin-top: 0.5rem;
          text-shadow: 
            0 0 3px rgba(255, 255, 255, 0.9),
            0 0 8px rgba(255, 0, 150, 0.9),
            0 0 12px rgba(147, 51, 234, 0.9),
            0 0 16px rgba(6, 182, 212, 0.9);
        }

        .white-rainbow-glow-bold {
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 
            0 0 4px rgba(255, 255, 255, 0.8),
            0 0 10px rgba(255, 0, 150, 0.9),
            0 0 15px rgba(147, 51, 234, 0.9),
            0 0 20px rgba(6, 182, 212, 0.9);
          filter: none;
        }

        .small-rainbow-glow {
          font-size: 1.5rem;
          line-height: 2rem;
          color: #ffffff;
          margin-top: 0.25rem;
          text-shadow: 
            0 0 2px rgba(255, 255, 255, 0.8),
            0 0 5px rgba(255, 0, 150, 0.9),
            0 0 8px rgba(147, 51, 234, 0.9),
            0 0 12px rgba(6, 182, 212, 0.9);
        }

        .rainbow-glow-title {
          font-size: 3.25rem;
          line-height: 2.5rem;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 
            0 0 4px rgba(255, 255, 255, 0.8),
            0 0 10px rgba(255, 0, 150, 0.9),
            0 0 15px rgba(147, 51, 234, 0.9),
            0 0 20px rgba(6, 182, 212, 0.9);
        }

        .full-gradient-hover-effect {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 1rem;
          background: linear-gradient(to right, #ec4899, #a855f7, #06b6d4);
          opacity: 0;
          filter: blur(20px);
          transition: opacity 500ms ease-in-out;
          z-index: -10;
        }

        .group:hover .full-gradient-hover-effect {
          opacity: 1;
        }

        .glass-card-hover-effect {
          position: relative;
          background-color: rgba(255, 255, 255, 0.8);
          border-width: 1px;
          border-color: rgba(255, 255, 255, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          transition: all 400ms ease-in-out;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }

        .glass-card-hover-effect:hover {
          border-color: #f472b6;
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.02);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 15px rgba(236, 72, 153, 0.3);
        }

        .transparent-search-input {
          width: 100%;
          padding-top: 2rem;
          padding-bottom: 2rem;
          padding-left: 7rem;
          padding-right: 2.5rem;
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 900;
          color: #ffffff;
          background-color: transparent;
          text-align: center;
        }

        .transparent-search-input:focus {
          outline: 0;
        }

        .transparent-search-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 700;
        }

        .element-overlay-positioned {
          position: absolute;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 20;
        }

        .icon-centered-left {
          position: absolute;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
          width: 3rem;
          height: 3rem;
          color: #ffffff;
          z-index: 20;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px #f472b6);
        }

        .glass-effect-container {
          position: relative;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(40px);
          border-radius: 9999px;
          border-width: 4px;
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 8px rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .hero-section-title {
          position: relative;
          display: block;
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
          transform: translateY(-0.75rem);
          font-size: 3.75rem;
          line-height: 1;
          text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f687b3;
          animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @media (min-width: 768px) {
          .hero-section-title {
            padding-left: 3.5rem;
            padding-right: 3.5rem;
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
            font-size: 4.5rem;
            line-height: 1;
            transform: translateY(-1rem);
          }
        }

        @media (min-width: 1024px) {
          .hero-section-title {
            padding-left: 5rem;
            padding-right: 5rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
            font-size: 8rem;
            line-height: 1;
            transform: translateY(-1.25rem);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        .circular-icon-button {
          padding: 1rem;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.3);
          transition: all 150ms ease-in-out;
        }

        @media (min-width: 768px) {
          .circular-icon-button {
            padding: 1.25rem;
          }
        }

        .circular-icon-button:hover {
          background-color: #fecaca;
          transform: scale(1.05);
        }

        .circular-icon-button:disabled {
          opacity: 0.5;
        }

        .button-icon-effect {
          background-color: rgba(255, 255, 255, 0.9);
          width: 1.5rem;
          height: 1.5rem;
          transition: transform 150ms ease-in-out;
        }

        @media (min-width: 768px) {
          .button-icon-effect {
            width: 2rem;
            height: 2rem;
          }
        }

        .button-icon-effect:hover {
          transform: scale(1.1);
        }

        .custom-element {
          background-color: #f472b6;
          color: #ffffff;
          padding-left: 1rem;
          padding-right: 1rem;
          height: 2.5rem;
          font-weight: 700;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 768px) {
          .custom-element {
            height: 3rem;
          }
        }

        .custom-button {
          padding: 1rem;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.3);
          transition: all 150ms ease-in-out;
        }

        .button {
          padding: 1rem 2rem;
          background-color: #ffffff;
          backdrop-filter: blur(8px);
          border-radius: 9999px;
          color: #000000;
          font-weight: 700;
          transition: background-color 150ms ease, transform 150ms ease;
        }

        .button:hover {
          background-color: rgba(255,255,255,0.6);
        }

        @media (min-width: 768px) {
          .custom-button {
            padding: 1.25rem;
          }
        }

        .custom-button:hover {
          background-color: #fecaca;
          transform: scale(1.05);
        }

        .custom-button:disabled {
          opacity: 0.5;
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .hero-text-glow {
          text-shadow: 
            0 0 20px #FF69B4,
            0 0 40px #A020F0,
            0 0 60px #00FFFF,
            0 0 80px #FF69B4,
            0 0 100px #A020F0,
            0 4px 20px rgba(0,0,0,0.9);
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function gb({currentPage:a,onNavigate:o}){const s=[{id:"landing",label:"Trang chủ",icon:Vl},{id:"hirakata-selector",label:"Bảng chữ cái",icon:Un},{id:"vocabulary-selector",label:"Từ vựng",icon:ih},{id:"grammar-selector",label:"Ngữ pháp",icon:Un},{id:"kanji-selector",label:"Kanji",icon:Hr},{id:"exercise-selector",label:"Bài tập",icon:kx},{id:"mypage",label:"MyPage",icon:ql},{id:"logout",label:"Thoát",icon:$x,itemId:"nav-logout",isLogout:!0}],{user:l,logout:u}=vn(),[h,m]=f.useState(!1),[g,x]=f.useState(0);f.useEffect(()=>{l?.role==="USER"&&(async()=>{try{const k=await Ie.get("/user/mini-test/feedback-count");x(k.data.count||0)}catch(k){console.error("Lỗi lấy số feedback:",k)}})()},[l]);const w=()=>{m(!0)},b=()=>{m(!1),u()};return l?t.jsxs("nav",{className:"header-sticky-blur",children:[t.jsx("div",{className:"container mx-auto px-4 sm:px-6",children:t.jsxs("div",{className:"flex items-center justify-between h-16",children:[t.jsxs("button",{onClick:()=>o("landing"),className:"flex items-center gap-4 group",style:{cursor:"pointer"},children:[t.jsx($t,{src:"https://i.ibb.co/1fK2RY6J/icon.jpg",alt:"Neko Nihongo",style:{width:"56px",height:"56px",borderRadius:"16px",objectFit:"cover",boxShadow:"0 10px 25px -5px rgba(236, 72, 153, 0.5)",border:"4px solid rgba(255, 255, 255, 0.9)",transition:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"},className:"group:hover .group-transform-effect"}),t.jsx("span",{className:"hidden sm:block text-2xl font-extrabold",style:{background:"linear-gradient(to right, #F472B6, #C084FC, #A78BFA)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Neko Nihongo"})]}),t.jsxs("div",{className:"hidden md:flex items-center gap-1",children:[s.map(y=>{const k=y.icon,I=a===y.id,j=y.isLogout;return t.jsxs("button",{onClick:()=>j?w():o(y.id),className:`flex-button-style ${j?"text-shadow-hover-effect":I?"gradient-text-shadow":"red-text-hover-gradient"}`,children:[t.jsx(k,{className:`w-4 h-4 ${j?"group-hover-rotate":""}`}),t.jsx("span",{className:`small-text-bold-transition${y.isLogout?"text-hover-shadow-effect":"text-gray-800"}`,children:y.label})]},y.id)}),l.role==="USER"&&t.jsx("div",{className:"relative ml-4",children:t.jsxs("button",{onClick:()=>o("user-mini-test-submissions"),className:"p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all",children:[t.jsx(sm,{className:"w-6 h-6 text-black"}),g>0&&t.jsx("span",{className:"badge-error-pulse",children:g>9?"9+":g})]})})]}),t.jsxs("div",{className:"flex md:hidden items-center gap-2",children:[s.map(y=>{const k=y.icon,I=a===y.id,j=y.isLogout;return t.jsx("button",{onClick:()=>j?w():o(y.id),className:`small-padding-rounded-transition ${j?"hover-text-scale":I?"hover-black-scale":"gray-text-hover-pink"}`,title:y.label,children:t.jsx(k,{className:`w-5 h-5 ${j?"group-hover-rotate":""}`})},y.id)}),l.role==="USER"&&t.jsx("div",{className:"relative",children:t.jsxs("button",{onClick:()=>o("user-mini-test-submissions"),className:"p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all",children:[t.jsx(sm,{className:"w-6 h-6 text-white"}),g>0&&t.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse",children:g>9?"9+":g})]})})]})]})}),h&&t.jsxs("div",{className:"fixed inset-0 z-[9999] flex min-h-screen items-center justify-center px-4",children:[t.jsx("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-md",onClick:()=>m(!1)}),t.jsx("div",{className:"relative w-full max-w-md",children:t.jsx("div",{className:"my-20 sm:my-0",children:t.jsxs("div",{className:"modal-card-neko",children:[t.jsx("div",{className:"text-9xl text-center mb-6 drop-shadow-lg"}),t.jsx("h3",{className:"title-logout-neko",children:"Thoát hả em?"}),t.jsx("p",{className:"text-center text-red-600 mb-10 text-lg font-medium leading-relaxed",children:"Are you sure??"}),t.jsxs("div",{className:"grid-layout-2",children:[t.jsx("button",{onClick:()=>m(!1),className:"btn-stay-neko",children:"Học tiếp"}),t.jsx("button",{onClick:b,className:"btn-logout-danger-neko",children:"Thoát"})]}),t.jsx("div",{className:"absolute -top-10 -right-10 text-8xl animate-wiggle-1 opacity-90"})]})})})]}),t.jsx("style",{children:`
      .badge-error-pulse {
  /* Vị trí tuyệt đối */
  position: absolute;
  top: -0.25rem;    /* tương ứng -top-1 (1 * 0.25rem = 4px) */
  right: -0.25rem;  /* tương ứng -right-1 */

  /* Kích thước & Hình dạng */
  width: 1.25rem;   /* tương ứng w-5 (20px) */
  height: 1.25rem;  /* tương ứng h-5 (20px) */
  border-radius: 9999px; /* tương ứng rounded-full */

  /* Màu sắc & Font */
  background-color: #ef4444; /* đỏ red-500 */
  color: #ffffff;
  font-size: 0.75rem;        /* tương ứng text-xs (12px) */
  font-weight: 700;          /* tương ứng font-bold */

  /* Căn giữa số/nội dung bên trong */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Hiệu ứng nhấp nháy */
  animation: pulse-animation 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Định nghĩa hiệu ứng animate-pulse */
@keyframes pulse-animation {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
      .group-hover-rotate {
  /* transition duration-500 */
  /* Áp dụng transition cho thuộc tính transform để việc xoay diễn ra mượt mà */
  transition: transform 500ms ease-in-out; 
}

/* group-hover:rotate-180 */
/* Áp dụng khi di chuột qua phần tử cha có class 'group' */
.group:hover .group-hover-rotate {
  transform: rotate(180deg);
}
      .gray-text-hover-pink {
  /* text-gray-600 */
  color: #4b5563; 
  
  /* transition (Thêm vào để hiệu ứng hover mượt mà) */
  transition: background-color 300ms ease-in-out; 
}

/* Các hiệu ứng hover */
.gray-text-hover-pink:hover {
  /* hover:bg-[#FFC7EA]/20 (Màu hồng nhạt #FFC7EA với độ mờ 20%) */
  background-color: rgba(255, 199, 234, 0.2); 
}
      .hover-black-scale {
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
  
  /* scale-110 (Phần tử này được phóng to 110% mặc định) */
  transform: scale(1.1);
  
  /* transition (Thêm vào để hiệu ứng hover mượt mà) */
  transition: all 300ms ease-in-out; 
}

/* Các hiệu ứng hover (hover:text-black) */
.hover-black-scale:hover {
  /* hover:text-black */
  color: #000000; /* Màu đen */
  
  /* Các thuộc tính khác (shadow, scale) giữ nguyên trừ khi có lớp hover tương ứng */
}
      .small-padding-rounded-transition {
  /* p-2 */
  padding: 0.5rem; /* 8px */
  
  /* rounded-[12px] */
  border-radius: 0.75rem; /* 12px */
  
  /* transition-all duration-300 */
  transition: all 300ms ease-in-out; 
}
      .hover-text-scale {
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
  
  /* scale-110 (Phần tử này được phóng to 110% mặc định, thường là lỗi nếu muốn scale khi hover) */
  /* Nếu bạn muốn hiệu ứng chỉ xảy ra khi hover, lớp này phải là hover:scale-110 */
  /* Ở đây tôi giữ nguyên theo yêu cầu: scale(1.1) là trạng thái mặc định. */
  transform: scale(1.1);
  
  /* transition (Thêm vào để hiệu ứng hover mượt mà) */
  transition: all 300ms ease-in-out; 
}

/* Các hiệu ứng hover (hover:text-red-600) */
.hover-text-scale:hover {
  /* hover:text-red-600 */
  color: #dc2626; /* Màu đỏ 600 */
  
  /* Các thuộc tính khác (shadow, scale) giữ nguyên trừ khi có lớp hover tương ứng */
}
      .text-hover-shadow-effect {
  /* text-red-600 */
  color: #dc2626; 
  
  /* drop-shadow-md */
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));
  
  /* transition (Thêm vào để hiệu ứng hover mượt mà) */
  transition: all 300ms ease-in-out; 
}

/* group-hover:text-red-400 và group-hover:drop-shadow-xl */
/* Áp dụng khi di chuột qua phần tử cha có class 'group' */
.group:hover .text-hover-shadow-effect {
  /* group-hover:text-red-400 */
  color: #f87171; 
  
  /* group-hover:drop-shadow-xl */
  filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));
}
      .small-text-bold-transition {
  /* text-sm */
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* transition-all duration-300 */
  transition: all 300ms ease-in-out; 
}
      .group-hover-rotate {
  /* transition duration-500 */
  transition: transform 500ms ease-in-out; 
}

/* group-hover:rotate-180 */
/* Áp dụng khi di chuột qua phần tử cha có class 'group' */
.group:hover .group-hover-rotate {
  transform: rotate(180deg);
}
      .red-text-hover-gradient {
  /* text-red-600 */
  color: #dc2626; 
  
  /* transition (Thêm vào để hiệu ứng hover mượt mà) */
  transition: background-image 300ms ease-in-out; 
}

/* Các hiệu ứng hover */
.red-text-hover-gradient:hover {
  /* hover:bg-linear-to-r hover:from-[#FFC7EA]/20 hover:to-[#D8C8FF]/20 */
  background-image: linear-gradient(to right, 
    rgba(255, 199, 234, 0.2), /* #FFC7EA/20 */
    rgba(216, 200, 255, 0.2)  /* #D8C8FF/20 */
  );
  
  /* Đảm bảo nền được áp dụng */
  background-clip: padding-box; 
}
      .gradient-text-shadow {
  /* bg-linear-to-r from-[#FFC7EA] to-[#D8C8FF] */
  background-image: linear-gradient(to right, #FFC7EA, #D8C8FF);
  
  /* text-red-600 */
  color: #dc2626; 
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
  
  /* scale-105 */
  transform: scale(1.05);
  
  /* transition (Thêm vào để đảm bảo hiệu ứng scale mượt mà) */
  transition: all 300ms ease-in-out; 
}
      .text-shadow-hover-effect {
  /* text-black */
  color: #000000;
  
  /* shadow-lg */
  /* Áp dụng box-shadow (cho phần tử) hoặc filter: drop-shadow (cho văn bản). 
     Nếu áp dụng cho văn bản, cần dùng filter. Ta dùng box-shadow mặc định. */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
  
  /* scale-105 (Áp dụng transform cơ bản) */
  transform: scale(1.05);
  
  /* transition (Thêm vào để hiệu ứng hover mượt mà) */
  transition: all 300ms ease-in-out; 
}

/* Các hiệu ứng hover */
.text-shadow-hover-effect:hover {
  /* hover:shadow-red-500/60 */
  /* Thay đổi box-shadow sang màu đỏ 500 (#ef4444) với độ mờ 60% */
  box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.6), 0 4px 6px -4px rgba(239, 68, 68, 0.6);
  
  /* Khi dùng hover:shadow mà không có hover:scale, ta giữ nguyên scale. 
     Tuy nhiên, lớp scale-105 nằm ngoài hover, nên nó đã được áp dụng. 
     Nếu muốn scale chỉ xảy ra khi hover, cần thêm lớp hover:scale-105. 
     Ở đây ta giữ nguyên scale 1.05 cho cả hai trạng thái. */
}
      .flex-button-style {
  /* flex */
  display: flex;
  
  /* items-center */
  align-items: center; /* Căn giữa dọc các item con */
  
  /* gap-2 */
  gap: 0.5rem; /* 8px - Khoảng cách giữa các item con */
  
  /* px-4 */
  padding-left: 1rem;  /* 16px */
  padding-right: 1rem; /* 16px */
  
  /* py-2 */
  padding-top: 0.5rem;    /* 8px */
  padding-bottom: 0.5rem; /* 8px */
  
  /* rounded-[16px] */
  border-radius: 1rem; /* 16px */
  
  /* transition-all duration-300 */
  transition: all 300ms ease-in-out; 
}
      /* Đảm bảo phần tử này có transition đã được định nghĩa ở lớp CSS cơ bản */

.group:hover .group-transform-effect {
  /* group-hover:scale-125 và group-hover:-rotate-6 */
  /* Gộp cả hai biến đổi vào thuộc tính transform */
  transform: scale(1.25) rotate(-6deg);
  
  /* group-hover:shadow-pink-500/60 */
  /* Sử dụng box-shadow để tạo bóng đổ màu hồng */
  box-shadow: 0 10px 15px -3px rgba(236, 72, 153, 0.6), 0 4px 6px -4px rgba(236, 72, 153, 0.6); 
  /* (Giá trị box-shadow tương đương với một shadow trung bình, màu hồng 500 với độ mờ 60%) */
}
      .header-sticky-blur {
  /* sticky top-0 */
  position: sticky;
  top: 0;
  
  /* z-50 */
  z-index: 50;
  
  /* bg-white/95 */
  background-color: rgba(255, 255, 255, 0.95); /* Nền trắng gần như đục */
  
  /* backdrop-blur-md */
  backdrop-filter: blur(12px); /* Làm mờ nền phía sau (hiệu ứng kính mờ) */
  
  /* shadow-sm */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* Bóng đổ mỏng */
  
  /* border-b */
  border-bottom-width: 1px;
  border-style: solid; /* Cần thiết để viền hiển thị */
  
  /* border-[#FFC7EA]/20 (Màu hồng nhạt #FFC7EA) */
  border-bottom-color: rgba(255, 199, 234, 0.2); /* Viền dưới hồng nhạt mờ 20% */
}
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
          /* TEXT ĐỎ RỰC GLOBAL CHO NÚT LOGOUT – SIÊU MẠNH, SIÊU ĐỎ, SIÊU DỄ SỢ */
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
  font-weight: 900 !important;
  text-shadow: 0 2px 6px rgba(220, 38, 38, 0.5) !important;
  letter-spacing: 0.8px !important;
}

/* Hover → đỏ sáng + phát sáng neon */
.text-red-600:hover {
  color: #ef4444 !important;
  text-shadow: 
    0 0 12px rgba(239, 68, 68, 0.9),
    0 4px 12px rgba(239, 68, 68, 0.6) !important;
  transform: translateY(-1px);
  transition: all 0.3s ease !important;
}

/* Đảm bảo chữ "Thoát" luôn đỏ rực dù có class gì đi nữa */
#nav-logout span,
button[title="Thoát"] span,
button:has(svg[data-icon="log-out"]) span,
span:where(.text-red-600) {
  @apply text-red-600 !important;
  
}
  .btn-stay-neko {
    padding: 1.25rem 2rem;               /* py-5 */
    border-radius: 1rem;                 /* rounded-2xl */
    font-weight: 700;                    /* font-bold */
    font-size: 1.25rem;                  /* text-xl */
    color: #7e22ce;                      /* text-purple-700 */
    
    /* Gradient nền */
    background: linear-gradient(to right, #e9d5ff, #fbcfe8); /* from-purple-100 → to-pink-100 */
    
    box-shadow: 0 10px 25px -5px rgba(168, 34, 222, 0.3),
                0 20px 40px -12px rgba(236, 72, 153, 0.25);
    
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border: none;
    position: relative;
    overflow: hidden;
  }

  /* Hover – đậm màu hơn + phóng to */
  .btn-stay-neko:hover {
    background: linear-gradient(to right, #ddd6fe, #f9a8d4); /* hover:from-purple-200 → hover:to-pink-200 */
    transform: scale(1.05);
    box-shadow: 0 20px 40px -10px rgba(168, 34, 222, 0.4),
                0 30px 60px -15px rgba(236, 72, 153, 0.35);
  }

  /* Khi nhấn – bẹp xuống tí */
  .btn-stay-neko:active {
    transform: scale(0.95);
  }

  /* Hiệu ứng sóng lấp lánh khi hover – siêu kawaii */
  .btn-stay-neko::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.7s;
  }

  .btn-stay-neko:hover::before {
    left: 100%;
  }
    .btn-logout-danger-neko {
    padding: 1.25rem 2rem;                    /* py-5 */
    border-radius: 1rem;                      /* rounded-2xl */
    font-weight: 800;                         /* font-bold + mạnh hơn tí */
    font-size: 1.25rem;                       /* text-xl */
    color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);

    /* Gradient đỏ → hồng đậm */
    background: linear-gradient(to right, #ef4444, #ec4899); /* from-red-500 → to-pink-600 */

    box-shadow: 
      0 15px 35px -5px rgba(239, 68, 68, 0.5),
      0 25px 50px -12px rgba(236, 72, 153, 0.4);

    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  /* HOVER – đỏ hơn, đậm hơn, to hơn */
  .btn-logout-danger-neko:hover {
    background: linear-gradient(to right, #dc2626, #db2777); /* from-red-600 → to-pink-700 */
    transform: scale(1.05);
    box-shadow: 
      0 25px 50px -10px rgba(239, 68, 68, 0.6),
      0 35px 70px -15px rgba(236, 72, 153, 0.5);
  }

  /* KHI NHẤN – bẹp xuống + rung nhẹ */
  .btn-logout-danger-neko:active {
    transform: scale(0.95);
  }

  /* SÓNG LẤP LÁNH SIÊU SANG – chạy ngang khi hover */
  */
  .btn-logout-danger-neko::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.8s;
  }

  .btn-logout-danger-neko:hover::before {
    left: 100%;
  }

  /* Hiệu ứng rung nhẹ khi hover (thêm drama) */
  .btn-logout-danger-neko:hover {
    animation: microShake 0.5s ease-in-out;
  }

  @keyframes microShake {
    0%, 100% { transform: translateX(0) scale(1.05); }
    25%      { transform: translateX(-4px) scale(1.05); }
     }
    .title-logout-neko {
    font-size: 2.25rem;                    /* text-4xl */
    line-height: 1.2;
    font-weight: 900;                      /* font-black */
    text-align: center;
    margin-bottom: 1rem;                   /* mb-4 */

    /* Gradient hồng → tím đậm */
    background: linear-gradient(to right, #ec4899, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    /* Thêm phát sáng + bóng chữ cho nổi bần bật */
    text-shadow: 
      0 4px 15px rgba(236, 72, 153, 0.4),
      0 8px 25px rgba(168, 85, 247, 0.3);

    /* Hiệu ứng nhẹ khi modal hiện */
    animation: titleGlow 3s ease-in-out infinite alternate;
  }

  @keyframes titleGlow {
    from {
      text-shadow: 
        0 4px 15px rgba(236, 72, 153, 0.4),
        0 8px 25px rgba(168, 85, 247, 0.3);
    }
    to {
      text-shadow: 
        0 4px 25px rgba(236, 72, 153, 0.6),
        0 10px 40px rgba(168, 85, 247, 0.5);
    }
  }

  /* Mobile nhỏ hơn tí cho đẹp */
  @media (max-width: 480px) {
    .title-logout-neko {
      font-size: 2rem;
    }
  }
    .modal-card-neko {
    position: relative;
    background: rgba(255, 255, 255, 0.80);       /* bg-white/80 */
    backdrop-filter: blur(24px);                 /* backdrop-blur-xl */
    -webkit-backdrop-filter: blur(24px);
    border-radius: 32px;                         /* rounded-[32px] */
    
    /* Bóng đổ siêu to */
    box-shadow: 
      0 25px 50px -12px rgba(236, 72, 153, 0.35),
      0 35px 70px -15px rgba(168, 85, 247, 0.25),
      0 0 80px rgba(236, 72, 153, 0.15);

    padding: 2rem;                               /* p-8 */
  }

  @media (min-width: 640px) {
    .modal-card-neko {
      padding: 2.5rem 3rem;                      /* sm:p-10 */
    }
  }

  /* Viền hồng phấn + viền phát sáng tím */
  .modal-card-neko {
    border: 4px solid rgba(236, 146, 255, 0.60);  /* border-pink-300/60 */
    outline: 4px solid rgba(182, 146, 255, 0.20); /* ring-4 ring-purple-300/20 */
    outline-offset: 4px;
  }

  /* Hiệu ứng slide-up mượt như bơ */
  .modal-card-neko {
    animation: slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    transform: translateY(60px);
    opacity: 0;
  }

  @keyframes slideUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Bonus: hover nhẹ → nổi lên tí cho sang */
  .modal-card-neko:hover {
    transform: translateY(-6px);
    box-shadow: 
      0 35px 70px -10px rgba(236, 72, 153, 0.45),
      0 45px 90px -20px rgba(168, 85, 247, 0.35);
    transition: all 0.5s ease;
  }
    .grid-layout-2 {
  /* Thiết lập Grid */
  display: grid;
  
  /* grid-cols-2: Chia làm 2 cột bằng nhau */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  
  /* gap-5: Khoảng cách giữa các ô là 1.25rem (20px) */
  gap: 1.25rem;
  
  /* Căn chỉnh mặc định */
  width: 100%;
  margin-bottom: 1.25rem;
}

/* Responsive: Trên màn hình điện thoại rất nhỏ (dưới 480px) 
   nên cân nhắc chuyển về 1 cột nếu nội dung bên trong quá dài */
@media (max-width: 480px) {
  .grid-layout-2-mobile-friendly {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
      `}),h&&t.jsxs("div",{className:"fixed inset-0 z-[9999] flex min-h-screen items-center justify-center px-4",children:[t.jsx("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-md",onClick:()=>m(!1)}),t.jsx("div",{className:"relative w-full max-w-md",children:t.jsx("div",{className:"my-20 sm:my-0",children:t.jsxs("div",{className:"modal-card-neko",children:[t.jsx("div",{className:"text-9xl text-center mb-6 drop-shadow-lg"}),t.jsx("h3",{className:"title-logout-neko",children:"Thoát hả em?"}),t.jsx("p",{className:"text-center text-red-600 mb-10 text-lg font-medium leading-relaxed",children:"Are you sure??"}),t.jsxs("div",{className:"grid-layout-2",children:[t.jsx("button",{onClick:()=>m(!1),className:"btn-stay-neko",children:"Học tiếp"}),t.jsx("button",{onClick:b,className:"btn-logout-danger-neko",children:"Thoát"})]}),t.jsx("div",{className:"absolute -top-10 -right-10 text-8xl animate-wiggle-1 opacity-90"})]})})})]})]}):null}function Rl(){const a=["https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_BattlePrincipalSkin.jpg/340px-Yuumi_BattlePrincipalSkin.jpg?5d070","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_YuubeeSkin.jpg/340px-Yuumi_YuubeeSkin.jpg?250dd","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_ShibaSkin.jpg/340px-Yuumi_ShibaSkin.jpg?dc19c","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_CyberCatSkin.jpg/340px-Yuumi_CyberCatSkin.jpg?03976","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_NightbringerSkin.jpg/340px-Yuumi_NightbringerSkin.jpg?5e09c","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_BattlePrincipal_%28Base%29.png/183px-Yuumi_BattlePrincipal_%28Base%29.png?266ce","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_CyberCat_%28Base%29.png/183px-Yuumi_CyberCat_%28Base%29.png?b8289","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_Nightbringer_%28Base%29.png/183px-Yuumi_Nightbringer_%28Base%29.png?cd44c","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_Shiba_%28Base%29.png/183px-Yuumi_Shiba_%28Base%29.png?c8059","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_HeartseekerSkin.jpg/340px-Yuumi_HeartseekerSkin.jpg?6b7cb","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_BewitchingSkin.jpg/340px-Yuumi_BewitchingSkin.jpg?285ea","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_EDGSkin.jpg/340px-Yuumi_EDGSkin.jpg?24c47","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_Bewitching_%28Base%29.png/183px-Yuumi_Bewitching_%28Base%29.png?e91eb","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_EDG_%28Base%29.png/183px-Yuumi_EDG_%28Base%29.png?56669","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_Heartseeker_%28Base%29.png/183px-Yuumi_Heartseeker_%28Base%29.png?ecb84","https://wiki.leagueoflegends.com/en-us/images/thumb/Yuumi_PrestigeCyberCatSkin.jpg/340px-Yuumi_PrestigeCyberCatSkin.jpg?b1c3a"];return t.jsxs("footer",{className:"relative py-16 mt-20",style:{position:"fixed",bottom:0,left:0,width:"100%",pointerEvents:"none"},children:[t.jsxs("div",{className:"absolute inset-0",children:[a.map((o,s)=>t.jsx("div",{className:"absolute",style:{top:`${20+s%3*7}%`,left:"-80px",animation:"floatRight 28s linear infinite",animationDelay:`${s*1.7}s`},children:t.jsx("img",{src:o,alt:"Neko",className:"w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-xl border-4 border-white/90 hover:scale-110 transition-transform duration-300"})},s)),[...Array(6)].map((o,s)=>t.jsx("div",{className:"absolute text-4xl opacity-60",style:{top:`${15+s*12}%`,left:"-80px",animation:"floatRight 32s linear infinite",animationDelay:`${s*4}s`},children:"🌸"},`sakura-${s}`))]}),t.jsx("style",{children:`
        @keyframes floatRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100vw + 200px));
          }
        }
      `})]})}function fb({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState(0),[h,m]=f.useState(!1),[g,x]=f.useState(!1),[w,b]=f.useState("Flashcard Mèo"),[y,k]=f.useState(!0),[I,j]=f.useState(!1),[v,N]=f.useState(""),[V,O]=f.useState("Meow meow..."),[B,G]=f.useState(!1),[te,de]=f.useState(!1),[q,le]=f.useState(!1),[C,A]=f.useState("");f.useEffect(()=>{setTimeout(()=>k(!1),1e3);let M=!1;(()=>{const Z=localStorage.getItem("nekoFlashcardData");if(!Z){console.warn("Không có dữ liệu flashcard trong localStorage"),N("Không có dữ liệu flashcard! Mèo đưa bạn về trang từ vựng nhé..."),j(!0);return}try{const z=JSON.parse(Z);s(z.words||[]),b(z.lessonTitle||"Flashcard Mèo"),M=!0}catch{O("Meow meow..."),N("Dữ liệu flashcard bị lỗi rồi! Mèo đưa bạn về trang từ vựng nhé..."),j(!0)}})()},[a]);const xe=()=>{const M=localStorage.getItem("nekoFlashcardData");let X="vocabulary-n5";if(M)try{const Z=JSON.parse(M);Z.originPage&&(X=Z.originPage)}catch{console.warn("Lỗi parse flashcard data")}localStorage.removeItem("nekoFlashcardData"),localStorage.removeItem("nekoFlashcardAllWords"),a(X)};if(y)return t.jsx(Pt,{message:"Mèo đang chuẩn bị flashcard siêu dễ thương cho bạn...",duration:0});if(I)return t.jsx(Lt,{isOpen:I,onClose:()=>{j(!1),a("vocabulary")},title:V,message:v});if(o.length===0)return t.jsx(Lt,{isOpen:!0,onClose:()=>a("vocabulary"),title:"Meow meow...",message:"Không có từ vựng để học rồi! Mèo đưa bạn về trang từ vựng nhé"});const W=o[l],Y=o.length>0?(l%10+1)/10*100:0,P=()=>m(M=>!M),ue=()=>{l>0&&(u(M=>M-1),m(!1))},he=()=>{l===o.length-1?x(!0):(u(M=>M+1),m(!1))},ne=()=>{const M=localStorage.getItem("nekoFlashcardAllWords");if(!M){G(!0);return}const X=JSON.parse(M),Z=new Set(o.map(be=>be.japanese)),z=X.filter(be=>!Z.has(be.japanese));let $=[];if(z.length>=10)$=[...z].sort(()=>Math.random()-.5).slice(0,10),A("Mèo đã chọn 10 từ mới hoàn toàn khác lần trước cho bạn rồi đấy!"),le(!0);else if(z.length>0){$=[...z];const be=10-z.length,J=X.filter(me=>Z.has(me.japanese)).sort(()=>Math.random()-.5).slice(0,be);$.push(...J),A("Chỉ còn ít từ mới thôi, mèo bù thêm vài từ cũ để bạn ôn lại nhé!"),le(!0)}else $=[...X].sort(()=>Math.random()-.5).slice(0,10),de(!0);s(be=>[...be,...$]),u(be=>be+1),m(!1),x(!1)};return t.jsxs("div",{className:"soft-gradient-background",children:[t.jsxs("main",{className:"container mx-auto px-4 py-12 flex flex-col items-center",children:[t.jsx("div",{className:"pt-12 pb-6 px-4 flex flex-col items-center",children:t.jsx("h1",{className:"text-center text-5xl md:text-6xl font-black text-white drop-shadow-2xl mb-8 hero-text-glow leading-tight",children:w})}),t.jsx("div",{className:"w-full max-w-2xl mb-8",children:t.jsx("div",{className:"progress-bar-shell",children:t.jsx("div",{className:"progress-bar-fill-animated",style:{width:`${Y}%`},children:t.jsx("div",{className:"bouncing-absolute-badge",children:"🐾🐾🐾"})})})}),t.jsx("div",{className:"relative w-full max-w-2xl h-96 mb-12 perspective-1000",children:t.jsxs("div",{onClick:P,className:`flashcard-inner ${h?"flipped":""} w-full h-full cursor-pointer`,children:[t.jsxs("div",{className:"flashcard-front-face",children:[t.jsx("p",{className:"huge-dark-title",children:W.japanese}),W.kanji&&W.kanji!==W.japanese&&t.jsx("p",{className:"sub-text-muted",children:W.kanji}),t.jsx("p",{className:"caption-text-muted",children:"Nhấn để xem nghĩa"}),t.jsx(tt,{className:"absolute-wiggle-icon"})]}),t.jsxs("div",{className:"flashcard-back-face",children:[t.jsx("p",{className:"centered-hero-text",children:W.vietnamese}),W.hanViet&&t.jsx("div",{className:"mt-6 text-center",children:t.jsxs("p",{className:"HanViet",children:["Âm Hán: ",W.hanViet]})}),t.jsx("p",{className:"caption-text-white-subtle",children:"Nhấn để quay lại"}),t.jsx(Wt,{className:"absolute-pulsing-icon"})]})]})}),t.jsxs("div",{className:"flex items-center justify-center gap-12 mt-16",children:[t.jsxs("button",{onClick:ue,disabled:l===0,className:"interactive-glass-card",children:[t.jsx("div",{className:"gradient-blur-effect"}),t.jsx(dt,{className:"interactive-icon",strokeWidth:4}),t.jsx(tt,{className:"bouncing-top-left-icon"})]}),t.jsxs("div",{className:"relative",children:[t.jsx(tt,{className:"bouncing-pink-icon-shadow",strokeWidth:3}),t.jsx(Wt,{className:"absolute-pulsing-corner-icon"}),t.jsx(Wt,{className:"absolute-pulsing-bottom-icon"})]}),t.jsxs("button",{onClick:he,className:"interactive-gradient-cta-card interactive-gradient-cta-card:hover",children:[t.jsx("div",{className:"glass-blur-effect group:hover glass-blur-effect"}),t.jsx("div",{className:"hover-gradient-glow-effect group:hover hover-gradient-glow-effect "}),t.jsxs("div",{className:"flex-centered-text-row",children:[t.jsx("span",{className:"heavy-shadowed-title",children:l===o.length-1?"HOÀN THÀNH!":"TIẾP THEO"}),l!==o.length-1&&t.jsx(xt,{className:"pulsing-element-medium",strokeWidth:5}),l===o.length-1&&t.jsxs("div",{className:"flex gap-2",children:[t.jsx("span",{className:"text-6xl bouncing-animation",children:"🥂"}),t.jsx("span",{className:"text-6xl bouncing-animation",children:"🎉"}),t.jsx("span",{className:"text-6xl bouncing-animation",children:"🍻"})]})]}),t.jsx(tt,{className:"absolute-wiggle-corner-icon"})]})]}),g&&t.jsx("div",{className:"modal-backdrop-dark",children:t.jsxs("div",{className:"modal-card-large",children:[t.jsx(tt,{className:"bouncing-pink-icon-large"}),t.jsx("h2",{className:"section-title-xl-bold",children:"Siêu giỏi!"}),t.jsx("p",{className:"paragraph-large-spaced",children:"Mèo tự hào về bạn lắm!"}),t.jsxs("div",{className:"flex gap-8 justify-center",children:[t.jsx("button",{onClick:ne,className:"gradient-cta-button-large gradient-cta-button-large:hover",children:"Học tiếp!"}),t.jsx("button",{onClick:xe,className:"gray-cta-button-large gray-cta-button-large:hover",children:"Về trang trước"})]})]})})]}),t.jsx("style",{children:`
      .gray-cta-button-large {
  /* px-12 py-6 */
  padding-left: 3rem; 
  padding-right: 3rem; 
  padding-top: 1.5rem; 
  padding-bottom: 1.5rem; 
  
  /* bg-gray-400 */
  background-color: #9ca3af;
  
  /* text-white */
  color: #ffffff;
  
  /* rounded-2xl */
  border-radius: 1rem;
  
  /* text-2xl */
  font-size: 1.5rem;
  
  /* font-bold */
  font-weight: 700;
  
  /* transition-all */
  transition: all 150ms ease-in-out;
}

/* Các hiệu ứng hover */
.gray-cta-button-large:hover {
  /* hover:scale-105 */
  transform: scale(1.05);
}
      .gradient-cta-button-large {
  /* px-12 py-6 */
  padding-left: 3rem; 
  padding-right: 3rem; 
  padding-top: 1.5rem; 
  padding-bottom: 1.5rem; 
  
  /* bg-gradient-to-r from-pink-500 to-purple-600 */
  background-image: linear-gradient(to right, #ec4899, #7c3aed);
  
  /* text-white */
  color: #ffffff;
  
  /* rounded-2xl */
  border-radius: 1rem;
  
  /* text-2xl */
  font-size: 1.5rem;
  
  /* font-bold */
  font-weight: 700;
  
  /* transition-all */
  transition: all 150ms ease-in-out;
}

/* Các hiệu ứng hover */
.gradient-cta-button-large:hover {
  /* hover:scale-110 */
  transform: scale(1.1);
}
      .paragraph-large-spaced {
  font-size: 1.5rem;
  color: #374151;
  margin-bottom: 2.5rem;
}
      .section-title-xl-bold {
  font-size: 3rem;
  font-weight: 900;
  color: #7c3aed;
  margin-bottom: 1rem;
}
      
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-pink-icon-large {
  width: 8rem;
  height: 8rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  color: #ec4899;
  animation: bounce 1s infinite;
}
      .modal-card-large {
  background-color: #ffffff;
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 3rem; /* p-12 */
  max-width: 32rem; /* max-w-lg */
  width: 100%;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
}
      .modal-backdrop-dark {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  /* bg-black/70 */
  background-color: rgba(0, 0, 0, 0.7);
  
  /* flex items-center justify-center */
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* z-50 */
  z-index: 50;
}
      @keyframes wiggle {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

.absolute-wiggle-corner-icon {
  position: absolute;
  bottom: -1.5rem;
  right: -1.5rem;
  width: 4rem;
  height: 4rem;
  color: rgba(255, 255, 255, 0.8);
  animation: wiggle 1s ease-in-out infinite;
}
      @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulsing-element-medium {
  width: 3.5rem;
  height: 3.5rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
      .heavy-shadowed-title {
  font-size: 2.25rem;
  font-weight: 900;
  
  /* drop-shadow-2xl (Tailwind dùng filter: drop-shadow, thường áp dụng cho hình dạng không phải hình chữ nhật) */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
}
      .flex-centered-text-row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem; /* gap-6 */
  color: #ffffff;
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-animation {
  animation: bounce 1s infinite;
}
      .glass-blur-effect {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3);
  
  /* blur-2xl (40px) */
  filter: blur(40px); 
  
  /* transition-all duration-700 */
  transition: all 700ms ease-in-out;
}

/* Tương tác Hover (Giả định phần tử cha có lớp '.group') */
.group:hover .glass-blur-effect {
  /* group-hover:blur-3xl (64px) */
  filter: blur(64px); 
}
      .interactive-gradient-cta-card {
  /* relative */
  position: relative;
  
  /* px-16 py-10 */
  padding-left: 4rem; 
  padding-right: 4rem; 
  padding-top: 2.5rem; 
  padding-bottom: 2.5rem; 
  
  /* bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 */
  background-image: linear-gradient(to bottom right, #ec4899, #7c3aed, #06b6d4);
  
  /* rounded-3xl */
  border-radius: 1.5rem;
  
  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* transform (Trạng thái ban đầu) */
  transform: scale(1);
  
  /* transition-all duration-500 */
  transition: all 500ms ease-in-out;
  
  /* overflow-hidden */
  overflow: hidden;
}

/* Tương tác Hover */
.interactive-gradient-cta-card:hover {
  /* hover:shadow-cyan-500/70 */
  box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.7); /* Tùy chỉnh bóng đổ màu xanh ngọc */
  
  /* hover:scale-110 */
  transform: scale(1.1);
}
      @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.absolute-pulsing-bottom-icon {
  position: absolute;
  bottom: -1rem;
  left: -1rem;
  width: 2rem;
  height: 2rem;
  color: #c084fc;
  
  /* animate-pulse */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  /* delay-300 (Độ trễ trước khi animation bắt đầu) */
  animation-delay: 300ms;
}
      @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.absolute-pulsing-corner-icon {
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 2.5rem;
  height: 2.5rem;
  color: #facc15;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-pink-icon-shadow {
  width: 6rem;
  height: 6rem;
  color: #ec4899;
  animation: bounce 1s infinite;
  
  /* drop-shadow-2xl (Tailwind dùng filter: drop-shadow, thường áp dụng cho hình dạng không phải hình chữ nhật) */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-top-left-icon {
  position: absolute;
  top: -1rem;
  left: -1rem;
  width: 3rem;
  height: 3rem;
  color: #ec4899;
  animation: bounce 1s infinite;
}
      .interactive-icon {
  width: 4rem;
  height: 4rem;
  color: #7c3aed;
  transition: color 150ms ease-in-out;
}

.group:hover .interactive-icon {
  color: #4c1d95;
}
      .gradient-blur-effect {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to right, 
    rgba(244, 114, 182, 0.2), 
    rgba(126, 34, 206, 0.2)
  );
  border-radius: 1.5rem;
  filter: blur(24px); 
  transition: all 150ms ease-in-out;
}

.group:hover .gradient-blur-effect {
  filter: blur(40px);
}
      .interactive-glass-card {
  position: relative;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1);
  transition: all 300ms ease-in-out;
}

.interactive-glass-card:hover {
  box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.5);
  transform: scale(1.1);
}

.interactive-glass-card[disabled] {
  opacity: 0.4;
  transform: scale(1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
  cursor: not-allowed;
}
      @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.absolute-pulsing-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  color: #fcd34d;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
      .caption-text-white-subtle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 1.5rem;
}

.HanViet{
font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
}
      .centered-hero-text {
  font-size: 4.00rem;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
}
.flashcard-back-face {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #ec4899, #7c3aed);
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  /* Cần thiết cho hiệu ứng lật 3D */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  
  /* *************************************** */
  /* BỔ SUNG: Xoay mặt sau 180 độ theo trục Y */
  /* *************************************** */
  transform: rotateY(180deg); 
}

/* @keyframes wiggle (Giữ nguyên) */
@keyframes wiggle {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

.absolute-wiggle-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  color: #f472b6;
  animation: wiggle 1s ease-in-out infinite;
}
      .caption-text-muted {
  font-size: 1.125rem;
  color: #6b7280;
  margin-top: 2rem;
}
      .sub-text-muted {
  font-size: 3rem;
  color: #a855f7;
  margin-top: 1rem;
  opacity: 0.8;
}
      .huge-dark-title {
  font-size: 6rem;
  font-weight: 900;
  color: #1f2937;
}
      .flashcard-front-face {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  /* Cần thiết cho hiệu ứng lật 3D */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-absolute-badge {
  position: absolute;
  right: 0;
  top: 50%;
  
  /* -translate-y-1/2 translate-x-1/2 */
  transform: translateY(-50%) translateX(50%);
  
  font-size: 1.5rem;
  animation: bounce 1s infinite;
}
      .progress-bar-fill-animated {
  height: 100%;
  background-image: linear-gradient(to right, #f472b6, #7c3aed);
  transition: all 500ms ease-in-out;
  position: relative;
}
  .progress-bar-shell {
  height: 2rem;
  background-color: #ffffff;
  border-radius: 9999px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
      .metadata-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
}
      .glass-button {
  /* px-10 py-5 */
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  
  /* bg-white/20 */
  background-color: rgba(255, 255, 255, 0.2);
  
  /* backdrop-blur-xl */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  
  /* rounded-2xl */
  border-radius: 1rem;
  
  /* text-white text-2xl font-bold */
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  
  /* transition-all */
  transition: all 150ms ease-in-out;
}

/* Các hiệu ứng hover */
.glass-button:hover {
  /* hover:bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3);
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-pink-icon {
  width: 10rem;
  height: 10rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  animation: bounce 1s infinite;
  color: #f472b6;
}
      .dark-full-screen-center {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #581c87, #831843);
}
  .soft-gradient-background {
  min-height: 100vh;
}
        .perspective-1000 {
          perspective: 1000px;
        }
        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .flashcard-inner.flipped {
          transform: rotateY(180deg);
        }
        .flashcard-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 32px;
        }
        .flashcard-back {
          transform: rotateY(180deg);
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .hero-text-glow {
          text-shadow: 0 0 20px #ff69b4, 0 0 40px #a020f0, 0 0 60px #00ffff,
            0 0 80px #ff69b4, 0 0 100px #a020f0, 0 4px 20px rgba(0, 0, 0, 0.9);
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8));
        }
      `})]})}function cm({onNavigate:a,category:o="vocabulary",level:s="n5"}){const[l,u]=f.useState([]),[h,m]=f.useState(null),[g,x]=f.useState([]),[w,b]=f.useState([]),[y,k]=f.useState(!1),[I,j]=f.useState(0),[v,N]=f.useState(!0),V=f.useRef(!1),[O,B]=f.useState(!1),{user:G,updateUser:te,refreshUser:de}=vn(),q=!!G,[le,C]=f.useState(1),A=10,xe=Math.ceil(l.length/A),W=(le-1)*A,Y=l.slice(W,W+A),P=J=>{J>=1&&J<=xe&&(C(J),window.scrollTo({top:0,behavior:"smooth"}))};f.useEffect(()=>{(async()=>{try{const me=`/exercises/${o}/${s}`;await new Promise(je=>setTimeout(je,600));const fe=await Ie.get(me);fe.data&&Array.isArray(fe.data)&&fe.data.length>0?u(fe.data):(u([]),ge("Bài tập này sẽ sớm ra mắt nhé! Mèo đang chuẩn bị rất kỹ đây 😺",{icon:"⏳",duration:1e3}))}catch(me){console.error("❌ Lỗi tải bài tập:",me),me.response?.status===401?(ge.error("Phiên đăng nhập hết hạn rồi... Mèo đưa bạn về đăng nhập nhé 😿",{duration:6e3}),setTimeout(()=>a("login"),3e3)):ge.error("Không tải được bài tập. Mèo đang kiểm tra lại... 😿")}finally{setTimeout(()=>N(!1),600)}})()},[o,s,a]),f.useEffect(()=>()=>{V.current=!1},[]);const ue=async J=>{await ge.promise(Ie.get(`/exercises/${J}`),{loading:"Mèo đang chuẩn bị bài tập... 🐱",success:me=>{const fe=me.data;if(!fe.questions||fe.questions.length===0)throw new Error("no_questions");const je=[...fe.questions].sort(()=>Math.random()-.5);return m(fe),x(je),b(new Array(je.length).fill(null)),k(!1),j(0),`Sẵn sàng làm bài "${fe.title}" rồi! 🎉`},error:me=>me.message==="no_questions"?"Bài tập này chưa có câu hỏi. Mèo sẽ bổ sung sớm nhé! 😿":"Không tải được bài tập này. Mèo đang kiểm tra lại... 😿"},{success:{duration:1e3},error:{duration:3e3}})},he=(J,me)=>{const fe=[...w];fe[J]=me,b(fe)},ne=async()=>{let J=0;g.forEach((me,fe)=>{const je=["A","B","C","D"].indexOf(me.correctOption);w[fe]===je&&J++}),j(J),k(!0),ge.success(`Nộp bài thành công! Bạn được ${J}/${g.length} điểm! 🎉`,{duration:2e3}),G?.id&&h?await be(J,g.length):ge("Bạn chưa đăng nhập. Kết quả sẽ không được lưu. Hãy đăng nhập để nhận điểm nhé! 😺",{icon:"🔒",duration:4e3})},M=()=>{if(h){const J=[...h.questions].sort(()=>Math.random()-.5);x(J),b(new Array(h.questions.length).fill(null)),k(!1),j(0)}},X=()=>{m(null),k(!1),C(1)},Z=(J,me)=>{const fe=J/me;return fe<=.3?"Cố lên nào mèo con ơi 😿":fe<=.6?"Khá lắm rồi, cố thêm chút nữa 💪":fe<=.9?"Giỏi quá đi 😸":"Tuyệt vời! Mèo tự hào về bạn 🎉"},z=(J,me)=>{const fe=J/me;return fe<=.3?"😿":fe<=.6?"😼":fe<=.9?"😸":"😻"},$=(J,me)=>{const je={n5:1,n4:2,n3:3,n2:4,n1:5}[me.toLowerCase()]||1;return J==="grammar"?je+1:je},be=async(J,me)=>{if(!G?.id||!h)return ge.error("Không thể lưu kết quả. Vui lòng đăng nhập lại! 🔒"),null;B(!0);const fe=ge.loading("Đang lưu kết quả... ⏳");try{const je=$(o,s),Te={correctAnswers:J,totalQuestions:me,difficultyLevel:je,exerciseType:o.toUpperCase(),exerciseId:h.id,exerciseTitle:h.title||`Bài tập ${o} ${s}`},K=(await Ie.post("/exercises/submit",Te)).data.data;return K.leveledUp?ge.success(t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold mb-2",children:"🎉 LEVEL UP! 🎉"}),t.jsxs("div",{className:"text-lg mb-1",children:["Level ",K.oldLevel," → Level ",K.newLevel]}),t.jsxs("div",{className:"text-sm",children:["+",K.pointsEarned," điểm • Tổng: ",K.totalPoints," điểm"]}),t.jsx("div",{className:"text-xs mt-2",children:K.message})]}),{duration:5e3}):ge.success(t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-lg font-bold",children:"✅ Hoàn thành bài tập!"}),t.jsxs("div",{children:["+",K.pointsEarned," điểm • Tổng: ",K.totalPoints," điểm"]})]}),{duration:3e3}),te({points:K.totalPoints,level:K.newLevel,streak:K.streak}),setTimeout(async()=>{try{console.log("[DEBUG] Checking activity logs after 2 seconds...")}catch(Fe){console.error("[DEBUG] Error checking logs:",Fe)}},2e3),await de(),K}catch(je){return console.error("❌ Lỗi khi lưu kết quả:",je),je.response&&(console.error("[DEBUG] Error response status:",je.response.status),console.error("[DEBUG] Error response data:",je.response.data),console.error("[DEBUG] Error response headers:",je.response.headers)),je.response?.status===401?(ge.error("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại!"),setTimeout(()=>a("login"),2e3)):ge.error("Không thể lưu kết quả bài tập. Vui lòng thử lại!"),null}finally{B(!1),ge.dismiss(fe)}};return v&&!h?t.jsx(Pt,{message:"Mèo đang chuẩn bị bài tập..."}):t.jsxs("div",{className:"min-h-screen relative",children:[t.jsxs("main",{className:"container mx-auto px-4 py-12 relative z-10",children:[t.jsxs("div",{className:"text-center mb-16 animate-bounce-in",children:[t.jsxs("div",{className:"flex items-center justify-center gap-4 mb-6",children:[t.jsx("span",{className:"text-6xl animate-float-custom",children:"📝"}),t.jsxs("h1",{className:"header-title",children:["Bài Tập ",o==="grammar"?"Ngữ Pháp":"Từ Vựng"," ",s.toUpperCase()]}),t.jsx("span",{className:"text-6xl animate-float-custom",style:{animationDelay:"0.5s"},children:"✨"})]}),t.jsxs("p",{className:"header-subtitle",children:["Làm bài trắc nghiệm để củng cố"," ",t.jsx("span",{className:"text-highlight-pink",children:o==="grammar"?"ngữ pháp":"từ vựng"})," ",s.toUpperCase()," cùng mèo nhé!"]}),t.jsx("div",{className:`px-4 py-2 rounded-full text-sm font-medium ${q?"bg-green-500/20 text-green-300":"bg-red-500/20 text-red-300"}`})]}),!h&&t.jsxs("div",{className:"max-w-4xl mx-auto animate-fade-in",children:[t.jsxs("div",{className:"main-glass-container",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("span",{className:"text-5xl",children:"📚"}),t.jsxs("h2",{className:"exercise-title",children:["Bài tập"," ",o==="grammar"?"Ngữ pháp":o==="kanji"?"Kanji":"Từ vựng"," ",s.toUpperCase()]})]}),t.jsxs("p",{className:"exercise-meta",children:["Tổng cộng"," ",t.jsx("span",{className:"text-accent-purple",children:l.length})," ","bài • Trang ",le,"/",xe]})]}),t.jsx("div",{className:"space-y-4",children:Y.length===0?t.jsx("p",{className:"text-center text-white text-xl py-20",children:"Chưa có bài tập nào cho phần này 😿"}):Y.map((J,me)=>t.jsx("button",{onClick:()=>ue(J.id),className:"glass-card-item group",style:{animationDelay:`${me*.1}s`},children:t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"fbadge-icon",children:t.jsx("span",{className:"text-xl",children:J.lessonNumber})}),t.jsxs("div",{className:"flex-1 text-left",children:[t.jsx("h3",{className:"exercise-card-title",children:J.title}),t.jsx("p",{className:"exercise-card-desc",children:J.description}),t.jsx("div",{className:"exercise-card-meta",children:t.jsxs("span",{children:["📝 ",J.totalQuestions||10," câu hỏi"]})})]})]})},J.id))}),xe>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-16",children:[t.jsx("button",{onClick:()=>P(le-1),disabled:le===1,className:"circular-icon-button","aria-label":"Previous page",children:t.jsx(dt,{className:"w-6 h-6 text-white"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:xe},(J,me)=>t.jsx("button",{onClick:()=>P(me+1),className:`rounded-full transition-all duration-200 flex items-center justify-center w-12 h-12 text-lg font-bold ${le===me+1?"custom-element":"button-icon-effect"}`,children:me+1},me+1))}),t.jsx("button",{onClick:()=>P(le+1),disabled:le===xe,className:"circular-icon-button","aria-label":"Next page",children:t.jsx(xt,{className:"w-6 h-6 text-white"})})]})]}),h&&!y&&t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("button",{onClick:X,className:"glass-button-back",children:[t.jsx(nh,{className:"back-icon"}),t.jsx("span",{children:"Quay lại danh sách"})]}),t.jsxs("div",{className:"exercise-header-card",children:[t.jsx("h2",{className:"text-4xl mb-3 drop-shadow-lg",children:h.title}),t.jsx("p",{className:"text-black text-2xl leading-relaxed",children:h.description}),t.jsxs("div",{className:"mt-6 flex items-center gap-4 text-xl",children:[t.jsxs("span",{children:["📝 ",g.length," câu hỏi"]}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:["✅ ",w.filter(J=>J!==null).length,"/",g.length," đã trả lời"]})]})]}),t.jsx("div",{className:"space-y-6",children:g.map((J,me)=>(["A","B","C","D"].indexOf(J.correctOption),t.jsxs("div",{className:"question-card",style:{animationDelay:`${me*.05}s`},children:[t.jsxs("div",{className:"question-row",children:[t.jsx("div",{className:"circle-badge",children:t.jsx("span",{className:"text-lg",children:me+1})}),t.jsx("h3",{className:"question-text",children:J.questionText})]}),t.jsx("div",{className:"space-y-3 ml-16",children:[{text:J.optionA,key:"A"},{text:J.optionB,key:"B"},{text:J.optionC,key:"C"},{text:J.optionD,key:"D"}].map(({text:fe,key:je},Te)=>{const Me=w.length>me&&w[me]===Te;return t.jsx("button",{onClick:()=>he(me,Te),className:`option-button ${Me?"option-selected":"exercise-card-item"}`,children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`check-circle ${Me?"check-circle-selected":"check-circle-default"}`,children:Me&&t.jsx("div",{className:"inner-dot"})}),t.jsx("span",{className:"option-text",children:fe})]})},je)})})]},J.id)))}),t.jsx("div",{className:"mt-10 flex justify-center",children:t.jsx("button",{onClick:ne,disabled:w.some(J=>J===null)||O,className:"submit-button",children:O?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full mr-2"}),t.jsx("span",{className:"font-bold",children:"Đang xử lý..."})]}):t.jsxs(t.Fragment,{children:[t.jsx(yn,{className:"check-icon"}),t.jsx("span",{className:"font-bold",children:"Nộp bài"})]})})}),!q&&t.jsx("div",{className:"mt-4 text-center text-yellow-300 text-sm",children:"⚠️ Bạn chưa đăng nhập. Kết quả sẽ không được lưu!"})]}),y&&h&&t.jsxs("div",{className:"max-w-2xl mx-auto",children:[t.jsxs("div",{className:"result-card",children:[t.jsx("div",{className:"score-display",children:z(I,h.questions.length)}),t.jsx("h2",{className:"result-title",children:"Kết quả của bạn"}),t.jsx("div",{className:"mb-6",children:t.jsxs("span",{className:"result-score",children:[I,"/",h.questions.length]})}),t.jsx("p",{className:"result-message",children:Z(I,h.questions.length)}),!q&&t.jsx("div",{className:"mt-4 p-3 bg-yellow-500/20 rounded-lg",children:t.jsx("p",{className:"text-yellow-300 text-sm",children:"⚠️ Kết quả chưa được lưu vì bạn chưa đăng nhập"})}),t.jsxs("div",{className:"flex flex-wrap justify-center gap-6 mt-10",children:[t.jsxs("button",{onClick:M,className:"action-button",children:[t.jsx(oh,{className:"w-6 h-6"}),t.jsx("span",{className:"text-xl font-bold",children:"Làm lại"})]}),t.jsxs("button",{onClick:X,className:"action-button-secondary",children:[t.jsx(so,{className:"w-6 h-6"}),t.jsx("span",{className:"text-xl font-bold",children:"Danh sách"})]})]})]}),t.jsxs("div",{className:"mt-10 space-y-4",children:[t.jsx("h3",{className:"result-header",children:"Chi tiết câu trả lời ✨"}),g.map((J,me)=>{const fe=w[me],je=["A","B","C","D"].indexOf(J.correctOption),Te=fe===je,Me=[J.optionA,J.optionB,J.optionC,J.optionD];return t.jsx("div",{className:`review-card ${Te?"card-correct":"card-wrong"}`,style:{animationDelay:`${me*.05}s`},children:t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:`index-badge ${Te?"bg-correct-soft":"bg-wrong-soft"}`,children:Te?t.jsx(yn,{className:"icon-correct"}):t.jsx(Il,{className:"icon-wrong"})}),t.jsxs("div",{className:"flex-1",children:[t.jsx("p",{className:"text-black text-2xl mb-4 drop-shadow-lg",children:J.questionText}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[t.jsx("span",{className:"text-2xl font-medium text-gray-600",children:"Bạn chọn:"}),t.jsx("span",{className:`answer-badge-2xl ${Te?"answer-badge-correct-2xl":"answer-badge-wrong-2xl"}`,children:fe!==null?Me[fe]:"Chưa chọn"})]}),!Te&&t.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[t.jsx("span",{className:"label-correct-text",children:"Đáp án đúng:"}),t.jsx("span",{className:"answer-badge-3xl",children:Me[je]})]}),J.explanation&&t.jsx("div",{className:"explanation-box",children:t.jsxs("p",{className:"explanation-content",children:[t.jsx("span",{className:"explanation-title",children:"💡 Giải thích:"}),J.explanation]})})]})]})]})},J.id)})]})]})]}),t.jsx("div",{className:"fixed bottom-10 right-10 pointer-events-none z-50 hidden lg:block",children:t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:"w-40 h-40 rounded-full object-cover shadow-2xl animate-fly drop-shadow-2xl",style:{filter:"drop-shadow(0 10px 20px rgba(255, 182, 233, 0.4))"}})}),t.jsx("style",{children:`
           .circular-icon-button {
  /* p-4 */
  padding: 1rem; /* 16px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3); 
  
  /* transition và transform */
  transition: all 150ms ease-in-out; /* Giá trị mặc định cho transition */
}

/* md:p-5 */
@media (min-width: 768px) {
  .circular-icon-button {
    padding: 1.25rem; /* 20px */
  }
}

/* hover:bg-pink-200, hover:scale-105 */
.circular-icon-button:hover {
  background-color: #fecaca; /* pink-200 */
  transform: scale(1.05);
}

/* disabled:opacity-50 */
.circular-icon-button:disabled {
  opacity: 0.5;
}
            .button-icon-effect {
  /* bg-white/90 */
  background-color: rgba(255, 255, 255, 0.9);
  
  /* w-6 */
  width: 1.5rem; /* 24px */
  
  /* h-6 */
  height: 1.5rem; /* 24px */
  
  /* transition (Thêm vào để hiệu ứng scale mượt mà) */
  transition: transform 150ms ease-in-out; 
}

/* md:w-8 và md:h-8 */
@media (min-width: 768px) {
  .button-icon-effect {
    width: 2rem; /* 32px */
    height: 2rem; /* 32px */
  }
}

/* hover:scale-110 */
.button-icon-effect:hover {
  transform: scale(1.1);
}
           .custom-element {
  /* bg-pink-400 */
  background-color: #f472b6; 
  
  /* text-white */
  color: #ffffff; 
  
  /* px-4 */
  padding-left: 1rem;  /* 16px */
  padding-right: 1rem; /* 16px */
  
  /* h-10 */
  height: 2.5rem; /* 40px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
}

/* md:h-12 */
@media (min-width: 768px) {
  .custom-element {
    height: 3rem; /* 48px */
  }
}
      .bubble-item {
  /* Kích thước & Hình dạng */
  width: 3rem;                /* w-12 */
  height: 3rem;               /* h-12 */
  border-radius: 9999px;      /* rounded-full */
  
  /* Font & Layout */
  display: flex;              /* flex */
  align-items: center;        /* items-center */
  justify-content: center;   /* justify-center */
  font-size: 1.125rem;        /* text-lg */
  font-weight: 700;           /* font-bold */
  
  /* Hiệu ứng chuyển cảnh */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); /* duration-200 */
  
  /* Chống răng cưa khi xoay hoặc phóng to */
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  user-select: none;
}

/* Hiệu ứng tương tác mặc định */
.bubble-item:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.bubble-item:active {
  transform: scale(0.9);
}
            .custom-button {
  /* p-4 */
  padding: 1rem; 
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3); 
  
  /* transition */
  transition: all 150ms ease-in-out; /* Giá trị mặc định cho transition */
  
  /* transform */
  /* Chỉ là một lớp đánh dấu, không thêm thuộc tính CSS riêng biệt */
}
      /* Tiêu đề bài tập nhỏ */
.exercise-card-title {
  /* text-2xl */
  font-size: 1.5rem;
  font-weight: 800;
  /* Dùng Gray-900 thay vì Black thuần để tinh tế hơn */
  color: #111827; 
  margin-bottom: 0.5rem;
  /* Shadow nhẹ để nổi khối, không làm nhòe chữ */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05));
}

/* Mô tả ngắn */
.exercise-card-desc {
  /* text-xl */
  font-size: 1.25rem;
  line-height: 1.625;
  /* Gray-600 giúp mắt dễ lướt qua nội dung phụ */
  color: #4b5563;
  font-weight: 400;
}

/* Badge thông tin (số câu hỏi) */
.exercise-card-meta {
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  /* Màu tím thương hiệu của bạn */
  color: #7e22ce; 
  font-weight: 600;
  /* Thêm nền nhẹ cho meta để nó chuyên nghiệp hơn */
  background: rgba(126, 34, 206, 0.08);
  padding: 4px 12px;
  border-radius: 8px;
  width: fit-content;
}
      .text-accent-purple {
  /* text-purple-700 (#7e22ce) */
  color: #7e22ce;
  
  /* font-bold */
  font-weight: 700;

  /* Giúp chữ nổi bật hơn trên nền trắng mờ */
  letter-spacing: -0.01em;
  
  /* Tạo một lớp shadow cực mảnh để chữ không bị nhòe bởi backdrop-blur của thẻ cha */
  filter: drop-shadow(0 1px 1px rgba(126, 34, 206, 0.1));

  /* Khi nằm trên nền tối, màu này có thể tự động sáng lên một chút (tùy chọn) */
  transition: color 0.2s ease;
}

/* Hiệu ứng hover nhẹ nếu là liên kết hoặc số có thể tương tác */
.text-accent-purple:hover {
  color: #9333ea; /* Purple-600 */
}
      /* Tiêu đề Bài tập: Sắc nét và có chiều sâu */
.exercise-title {
  /* text-4xl (36px) */
  font-size: 2.25rem;
  font-weight: 900;
  color:#8034eb;

  /* Thay hero-text-glow bằng drop-shadow đa lớp để chữ nổi bật trên nền kính */
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) 
          drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
  
  letter-spacing: -0.01em;
}

/* Phần mô tả: Tinh tế và dễ đọc */
.exercise-meta {
  /* text-2xl (24px) */
  font-size: 1.5rem;
  margin-top: 1rem;
  
  /* Thay text-black bằng Gray-800 để giảm độ gắt, tạo cảm giác cao cấp */
  color: #1f2937; 
  font-weight: 500;
  
  /* Thêm độ mờ nhẹ để hài hòa với phong cách kính */
  opacity: 0.9;
}

/* Dấu chấm ngăn cách (Bullet point) */
.separator-dot {
  color: #ec4899; /* Màu hồng để tạo điểm nhấn đồng bộ với action-button */
  margin: 0 0.5rem;
  font-weight: 900;
}
      .icon-main-purple {
  /* w-16 h-16 (64px) */
  width: 4rem;
  height: 4rem;

  /* text-purple-600 (#9333ea) */
  color: #9333ea;

  /* drop-shadow-lg */
  /* Tạo độ nổi khối mạnh mẽ cho icon trên nền kính */
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) 
          drop-shadow(0 4px 3px rgba(147, 51, 234, 0.2));

  /* Đảm bảo icon SVG hiển thị mượt mà */
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Thêm hiệu ứng chuyển động nếu cần */
  transition: transform 0.3s ease;
}

.icon-main-purple:hover {
  /* Hiệu ứng tương tác nhẹ khi di chuột */
  transform: scale(1.1) rotate(5deg);
}
      .decorative-divider {
  /* w-24 (96px) h-1 (4px) */
  width: 6rem;
  height: 4px;
  
  /* mx-auto mt-8 */
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;

  /* bg-gradient-to-r from-transparent via-white/40 to-transparent */
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.4) 50%,
    transparent
  );

  /* Thêm hiệu ứng nhòe để đường kẻ trông mềm mại hơn */
  filter: blur(0.5px);
  
  /* Bo tròn nhẹ đầu đường kẻ */
  border-radius: 9999px;
}
      .text-highlight-pink {
  /* text-pink-200 (#fbcfe8) */
  color: #fbcfe8;
  
  /* font-bold */
  font-weight: 700;

  /* Hiệu ứng bóng chữ để nổi bật trên mọi loại nền */
  text-shadow: 0 0 10px rgba(236, 72, 153, 0.3);
  
  /* Thêm một chút gradient nhẹ nếu muốn chữ có chiều sâu hơn */
  background: linear-gradient(to bottom right, #fdf2f8, #fbcfe8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Đảm bảo chữ vẫn rõ nét */
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
}
      /* Tiêu đề chính sắc nét */
.header-title {
  /* text-5xl md:text-6xl */
  font-size: clamp(6rem, 8vw, 4rem); 
  font-weight: 900;
  color: #ffffff;
  
  /* Bỏ hero-text-glow, thay bằng drop-shadow sắc sảo */
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2));
  
  /* Thêm gradient nhẹ để tạo chiều sâu */
  background: linear-gradient(to bottom, #ffffff 70%, #fbcfe8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  letter-spacing: -0.02em;
}

/* Script mô tả bên dưới */
.header-subtitle {
  font-size: 2.00rem; 
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  
  /* Đổ bóng nhẹ để đọc được trên nền gradient màu sắc */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  
  max-width: 42rem; /* max-w-2xl */
  margin: 0 auto;
}

/* Hiệu ứng float nhẹ nhàng cho emoji */
@keyframes float-gentle {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}
.animate-float-custom {
  animation: float-gentle 3s ease-in-out infinite;
}
      .explanation-box {
  /* mt-4 p-6 (Tăng padding một chút để chữ 2xl không bị ngộp) */
  margin-top: 1.5rem;
  padding: 1.5rem;

  /* bg-white/60 + Glassmorphism */
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  /* rounded-[16px] */
  border-radius: 16px;

  /* border border-white/40 (Tăng độ sáng viền để tách biệt với thẻ cha) */
  border: 1px solid rgba(255, 255, 255, 0.4);

  /* Thêm một chút shadow nội khối để tạo chiều sâu nhã nhặn */
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 4px 6px rgba(0, 0, 0, 0.02);
}

.explanation-title {
  /* Màu tím hoặc hồng từ dải màu Gradient của bạn để tạo điểm nhấn */
  color: #9333ea; 
  font-weight: 800;
  margin-right: 0.5rem;
}

.explanation-content {
  /* text-2xl leading-relaxed */
  font-size: 1.5rem;
  line-height: 1.625;
  color: #1f2937; /* Gray-800: Đủ tối để đọc văn bản dài không mỏi mắt */
}
      /* Nhãn "Đáp án đúng:" */
.label-correct-text {
  font-size: 1.5rem; /* text-2xl */
  color: #4b5563; /* Gray-600 thay vì white/70 để rõ nét trên nền sáng */
  font-weight: 600;
}

/* Badge Đáp án đúng khổng lồ */
.answer-badge-3xl {
  /* text-3xl (30px) */
  font-size: 1.875rem;
  line-height: 2.25rem;
  
  /* Cực đậm để khẳng định đáp án */
  font-weight: 900; 
  
  /* Padding rộng hơn cho bõ với kích thước 3xl */
  padding: 0.75rem 1.75rem;
  
  /* Bo góc lớn đồng bộ với hệ thống */
  border-radius: 16px;
  
  display: inline-flex;
  align-items: center;
  
  /* Màu sắc xanh lá chủ đạo của sự chính xác */
  background-color: rgba(34, 197, 94, 0.2);
  color: #15803d; /* Green-700 */
  
  /* Viền và đổ bóng tạo độ nổi (Depth) */
  border: 2px solid rgba(34, 197, 94, 0.3);
  box-shadow: 0 10px 20px -5px rgba(34, 197, 94, 0.2);
}
 .answer-badge-2xl {
  /* text-2xl (24px) */
  font-size: 1.5rem;
  line-height: 2rem;
  
  /* Tăng độ dày chữ để cân bằng với kích thước lớn */
  font-weight: 800; 
  
  /* Điều chỉnh lại padding cho phù hợp với chữ 2xl */
  padding: 0.75rem 1.5rem;
  
  border-radius: 16px; /* Tăng bo góc một chút cho cân đối với size chữ */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  /* Hiệu ứng shadow sâu hơn một chút vì badge đã lớn hơn */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Trạng thái Đúng 2xl */
.answer-badge-correct-2xl {
  background-color: rgba(34, 197, 94, 0.15);
  color: #16a34a; /* Green-600 */
  border-color: rgba(34, 197, 94, 0.3);
}

/* Trạng thái Sai 2xl */
.answer-badge-wrong-2xl {
  background-color: rgba(239, 68, 68, 0.15);
  color: #dc2626; /* Red-600 */
  border-color: rgba(239, 68, 68, 0.3);
}
      .icon-wrong {
  /* w-7 h-7 (28px) */
  width: 1.75rem;
  height: 1.75rem;

  /* text-red-500 */
  color: #ef4444;

  display: inline-block;
  vertical-align: middle;
  
  /* Thêm hiệu ứng Shadow đỏ nhạt để nổi bật trên nền Glassmorphism */
  filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.2));
}

/* Hiệu ứng rung nhẹ khi icon xuất hiện (báo lỗi) */
.icon-wrong-animated {
  composes: icon-wrong;
  animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-3px, 0, 0); }
  40%, 60% { transform: translate3d(3px, 0, 0); }
}
      .icon-correct {
  /* w-7 h-7 (28px) */
  width: 1.75rem;
  height: 1.75rem;

  /* text-green-500 */
  color: #22c55e;

  /* Đảm bảo icon dạng SVG hiển thị đúng kích thước */
  display: inline-block;
  vertical-align: middle;
  
  /* Thêm hiệu ứng Shadow mỏng để icon sắc nét trên nền kính */
  filter: drop-shadow(0 2px 4px rgba(34, 197, 94, 0.2));
}
      .bg-wrong-soft {
  /* bg-red-500/20 */
  background-color: rgba(239, 68, 68, 0.2);

  /* Glassmorphism: Tạo độ mờ nhẹ cho phần nền đỏ */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  /* Bo góc nhẹ nhàng để đồng bộ với thẻ chính */
  border-radius: 12px;

  /* Màu chữ đỏ đậm để đảm bảo độ tương phản (Accessibility) */
  color: #b91c1c; 
  font-weight: 600;
}
      .bg-correct-soft {
  /* bg-green-500/20 */
  background-color: rgba(34, 197, 94, 0.2);

  /* Đồng bộ Glassmorphism: Làm mờ hậu cảnh nhẹ */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  /* Để text bên trong dễ đọc hơn trên nền này */
  color: #15803d; /* Màu xanh lá đậm (green-700) */
}
      .index-badge {
  /* flex-shrink-0: Đảm bảo vòng tròn không bị méo khi text dài */
  flex-shrink: 0;

  /* w-12 h-12 (48px) */
  width: 3rem;
  height: 3rem;

  /* rounded-full */
  border-radius: 9999px;

  /* flex items-center justify-center */
  display: flex;
  align-items: center;
  justify-content: center;

  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* Style màu sắc đồng bộ (Trắng kính mờ) */
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  /* Text bên trong */
  color: #9333ea; /* Màu tím chủ đạo */
  font-weight: 800;
  font-size: 1.125rem;
}
      .card-wrong {
  /* border-red-400/50 */
  border: 2px solid rgba(248, 113, 113, 0.5);

  /* shadow-[0_0_20px_rgba(239,68,68,0.3)] */
  /* Hiệu ứng phát sáng (Glow) sắc đỏ cảnh báo nhẹ */
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);

  /* Background trắng hồng nhạt để đồng bộ với nền kính mờ */
  background-color: rgba(254, 242, 242, 0.8);
  
  /* Hỗ trợ kính mờ đặc trưng */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  
  transition: all 0.3s ease-in-out;
}
      .card-correct {
  /* border-green-400/50 */
  /* Sử dụng mã HEX #4ade80 với độ mờ 0.5 */
  border: 2px solid rgba(74, 222, 128, 0.5);

  /* shadow-[0_0_20px_rgba(34,197,94,0.3)] */
  /* Hiệu ứng phát sáng (Glow) màu xanh lá dịu nhẹ */
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);

  /* Background đồng bộ (Thêm chút xanh nhạt để phân biệt) */
  background-color: rgba(240, 253, 244, 0.8);
  
  /* Hỗ trợ kính mờ */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  
  transition: all 0.3s ease-in-out;
}
      .review-card {
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8);
  
  /* Hiệu ứng kính mờ đặc trưng */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  /* rounded-[24px] */
  border-radius: 24px;

  /* p-6 (24px) */
  padding: 1.5rem;

  /* border-2 */
  border-width: 2px;
  border-style: solid;
  
  /* Màu viền mặc định (Trắng mờ để đồng bộ Glassmorphism) */
  border-color: rgba(255, 255, 255, 0.5);

  /* Shadow nhẹ hơn thẻ chính để tạo phân cấp layer */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

  margin-bottom: 1rem;
  transition: transform 0.2s ease;
}

/* Trạng thái khi câu hỏi đó làm sai */
.review-card.is-wrong {
  border-color: rgba(244, 114, 114, 0.4); /* Màu đỏ hồng nhạt */
  background-color: rgba(255, 245, 245, 0.9);
}

/* Trạng thái khi câu hỏi đó làm đúng */
.review-card.is-correct {
  border-color: rgba(52, 211, 153, 0.4); /* Màu xanh mint nhạt */
  background-color: rgba(240, 253, 244, 0.9);
}
      .result-header {
  /* text-4xl (36px) */
  font-size: 2.25rem;
  
  /* text-center */
  text-align: center;
  
  /* mb-8 (32px) */
  margin-bottom: 2rem;

  /* Thay thế hero-text-glow bằng màu trắng tinh khiết có độ sâu */
  color: #ffffff;
  font-weight: 800;
  
  /* drop-shadow-lg kết hợp với hiệu ứng Layering */
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) 
          drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));

  /* Thêm một chút Letter Spacing để chữ sang hơn */
  letter-spacing: -0.02em;
  
  /* Animation nhẹ nhàng khi xuất hiện */
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
      .action-button-secondary {
  /* px-10 py-5 */
  padding: 1.25rem 2.5rem;

  /* bg-white/80 + Glassmorphism */
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* rounded-[24px] */
  border-radius: 24px;

  /* flex items-center gap-3 */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  /* text-black & border */
  color: #1a1a1a;
  font-weight: 700;
  font-size: 1.125rem;
  /* Thêm viền mỏng để định hình trên nền sáng */
  border: 1px solid rgba(255, 255, 255, 0.4);

  /* shadow-xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);

  /* transition-all */
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

/* hover:scale-110 */
.action-button-secondary:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.1);
  color: #ec4899; /* Chuyển màu chữ sang hồng khi hover để tạo điểm nhấn đồng bộ */
}

.action-button-secondary:active {
  transform: scale(0.95);
}
      .action-button {
  /* px-10 py-5 */
  padding: 1.25rem 2.5rem;

  /* bg-gradient-to-r from-pink-500 to-purple-600 */
  background: linear-gradient(to right, #ec4899, #9333ea);

  /* rounded-[24px] */
  border-radius: 24px;

  /* flex items-center gap-3 */
  display: flex;
  align-items: center;
  gap: 0.75rem;

  /* text-white shadow-xl */
  color: #ffffff;
  font-weight: 700;
  border: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  /* transition-all hover:scale-110 */
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Thêm chút đàn hồi cho mượt */
  cursor: pointer;
}

.action-button:hover {
  transform: scale(1.1);
  filter: brightness(1.1);
  box-shadow: 0 25px 30px -5px rgba(147, 51, 234, 0.3);
}

.action-button:active {
  transform: scale(0.95);
}
      /* Tiêu đề chính */
.result-title {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 800;
  color: #1a1a1a; /* Màu xám đen đồng bộ với câu hỏi */
  margin-bottom: 1.5rem; /* mb-6 */
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

/* Con số điểm số - Trái tim của màn hình */
.result-score {
  font-size: 5rem; /* text-7xl - 80px */
  font-weight: 900;
  margin-bottom: 1.5rem; /* mb-6 */
  
  /* Tạo Gradient Pink-Purple đồng bộ */
  background: linear-gradient(135deg, #FF77BC 0%, #9333EA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Đổ bóng sâu để con số nổi hẳn lên */
  filter: drop-shadow(0 10px 15px rgba(147, 51, 234, 0.3));
  display: inline-block;
}

/* Thông điệp khen ngợi */
.result-message {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 600;
  color: #4b5563; /* Gray-600 dịu mắt */
  margin-bottom: 2.5rem; /* mb-10 */
  line-height: 1.4;
}
      .score-display {
  /* text-9xl */
  font-size: 8rem; /* 128px */
  line-height: 1;

  /* mb-6 */
  margin-bottom: 1.5rem; /* 24px */

  /* drop-shadow-2xl */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));

  /* animate-bounce */
  animation: bounce 1s infinite;

  /* Để đồng bộ với các phần trước, hãy thêm Gradient cho chữ */
  background: linear-gradient(to bottom, #FF77BC, #9333EA);
  -webkit-background-clip: text;
  font-weight: 900; /* Extra Bold */
  display: inline-block;
}

/* Định nghĩa hiệu ứng Bounce (Nhảy) */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
      .result-card {
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8);
  
  /* Hỗ trợ hiệu ứng kính mờ (Đồng bộ với các thẻ trước) */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  /* rounded-[32px] */
  border-radius: 32px;

  /* p-12 (48px) */
  padding: 3rem;

  /* text-center */
  text-align: center;

  /* border border-white/20 */
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Đảm bảo nội dung căn giữa trong flexbox cha */
  max-width: 600px;
  width: 90%;
  margin: 2rem auto;
}
      /* Trạng thái mặc định của icon */
.check-icon {
  width: 1.5rem;  /* w-6 (24px) */
  height: 1.5rem; /* h-6 (24px) */
  
  /* transition-all duration-500 */
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Đảm bảo xoay quanh tâm */
  transform-origin: center;
}

/* Hiệu ứng khi thẻ cha (nút Nộp bài) được hover */
/* Tương ứng với group-hover:rotate-[360deg] group-hover:scale-125 */
.submit-button:hover .check-icon {
  transform: rotate(360deg) scale(1.25);
}

/* Hiệu ứng khi nút bị disabled (tùy chọn để đồng bộ) */
.submit-button:disabled .check-icon {
  transform: none;
  opacity: 0.5;
}
      .submit-button {
  /* flex items-center gap-3 */
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */

  /* bg-gradient-to-r from-pink-500 to-purple-600 */
  background: linear-gradient(to right, #ec4899, #9333ea);

  /* px-12 py-5 */
  padding: 1.25rem 3rem;

  /* rounded-[24px] */
  border-radius: 24px;

  /* text-white */
  color: #ffffff;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;

  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* transition-all duration-300 */
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

/* hover:scale-105 */
.submit-button:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
}

/* Trạng thái disabled (khi chưa làm hết bài) */
.submit-button:disabled {
  /* disabled:opacity-50 */
  opacity: 0.5;

  /* disabled:cursor-not-allowed */
  cursor: not-allowed;

  /* disabled:hover:scale-100 */
  transform: scale(1);
}
      /* Trạng thái mặc định (Chưa chọn) */
.option-text {
  /* Thay text-black bằng màu xám đậm dịu mắt */
  color: #2d3436; 
  font-weight: 500;
  font-size: 1.75rem;
  transition: all 0.3s ease;
  opacity: 0.9;
}

/* Trạng thái khi được chọn (Selected) */
.selected .option-text {
  /* Chuyển sang màu tím đậm hoặc hồng đậm để tiệp màu với Check-circle */
  color: #6c5ce7; /* Một tông tím trung tính */
  font-weight: 700;
  opacity: 1;
  /* Hiệu ứng đổ bóng nhẹ cho chữ nếu muốn nổi bật hơn */
  text-shadow: 0px 0px 1px rgba(108, 92, 231, 0.2);
}
      .inner-dot {
  /* w-3 h-3 (12px x 12px) */
  width: 0.75rem;
  height: 0.75rem;

  /* rounded-full */
  border-radius: 9999px;

  /* bg-gradient-to-br from-[#FFC7EA] to-[#D8C8FF] */
  background: linear-gradient(135deg, #FFC7EA 0%, #D8C8FF 100%);

  /* animate-scale-in */
  animation: scale-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Định nghĩa Animation Scale In */
@keyframes scale-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
      .check-circle-default {
  /* border-white/60 */
  border: 2px solid rgba(255, 255, 255, 0.6);

  /* bg-white/10 */
  background-color: rgba(255, 255, 255, 0.1);

  /* Giữ hình dạng tròn và kích thước cố định */
  border-radius: 9999px;
  width: 1.5rem;  /* 24px */
  height: 1.5rem; /* 24px */
  
  /* Hỗ trợ kính mờ (Tùy chọn thêm để đồng bộ style) */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  /* Chống bóp méo trong flexbox */
  flex-shrink: 0;
  
  /* Chuyển cảnh mượt mà khi đổi sang Selected */
  transition: all 0.3s ease;
}
      .check-circle-selected {
  /* border-pink-400 */
  border: 2px solid #f472b6;

  /* bg-white */
  background-color: #ffffff;

  /* shadow-[0_0_10px_rgba(255,199,234,0.5)] */
  /* Đây là hiệu ứng phát sáng nhẹ (glow) màu hồng */
  box-shadow: 0 0 10px rgba(255, 199, 234, 0.5);

  /* Để đảm bảo vòng tròn không bị móp khi text dài */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
      .question-text {
  /* flex-1 */
  flex: 1 1 0%;
  min-width: 0; /* Đảm bảo text không phá vỡ layout flexbox */

  /* text-[#1a1a1a] */
  color: #1a1a1a;

  /* text-xl (thường là 20px) */
  font-size: 2.00rem;
  line-height: 1.75rem;

  /* font-bold */
  font-weight: 700;

  /* leading-relaxed */
  line-height: 1.625;

  /* pt-2 (8px) */
  padding-top: 0.5rem;

  /* Bổ sung để hiển thị tốt trên di động */
  word-wrap: break-word;
  overflow-wrap: break-word;
}
      .check-circle {
  /* flex-shrink-0 (Quan trọng: giữ vòng tròn không bị méo) */
  flex-shrink: 0;

  /* w-6 h-6 (24px x 24px) */
  width: 1.5rem;
  height: 1.5rem;

  /* rounded-full */
  border-radius: 9999px;

  /* border-2 */
  border-width: 2px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.4);

  /* flex items-center justify-center */
  display: flex;
  align-items: center;
  justify-content: center;

  /* transition-all */
  transition: all 0.2s ease-in-out;
}

/* Khi đáp án được chọn (Selected State) */
.selected .check-circle {
  background-color: white;
  border-color: white;
  transform: scale(1.1);
}
      .exercise-card-item {
  /* glass-card: Nền kính mờ cơ bản */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px; /* Thường dùng 20-24px cho card list */

  /* text-white/80 */
  color: rgba(255, 255, 255, 0.8);

  /* border-white/20 */
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* transition-all */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

/* Hiệu ứng Hover */
.exercise-card-item:hover {
  /* hover:border-white/40 */
  border-color: rgba(255, 255, 255, 0.4);

  /* hover:scale-[1.01] */
  transform: scale(1.01);

  /* Thường đi kèm với việc làm sáng chữ hơn */
  color: #ffffff;
  background: rgba(255, 255, 255, 0.15);
}
      .option-selected {
  /* bg-gradient-to-r from-pink-400 to-purple-500 */
  background: linear-gradient(to right, #f472b6, #a855f7);

  /* text-white */
  color: #ffffff;

  /* border-transparent */
  border-color: transparent;

  /* shadow-2xl (Đổ bóng cực đại) */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* scale-105 (Phóng lớn 5%) */
  transform: scale(1.05);

  /* Các thuộc tính hỗ trợ */
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* Hiệu ứng "nảy" nhẹ */
  cursor: pointer;
}
      .option-button {
  /* w-full text-left */
  width: 100%;
  text-align: left;

  /* p-4 (16px) */
  padding: 1rem;

  /* rounded-[16px] */
  border-radius: 16px;

  /* border-2 */
  border-width: 2px;
  border-style: solid;

  /* transition-all duration-300 */
  transition: all 0.3s ease-in-out;

  /* Mặc định nên có màu để tránh bị "tàng hình" */
  background-color: rgba(255, 255, 255, 0.5);
  border-color: #e5e7eb; /* gray-200 */
  color: #1f2937; /* gray-800 */
  
  cursor: pointer;
  outline: none;
}

/* Hiệu ứng khi hover hoặc được chọn (kết hợp với logic React) */
.option-button:hover {
  border-color: #D8C8FF;
  background-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
}
      .circle-badge {
  /* flex-shrink-0 (Chống bẹp khi nội dung bên cạnh dài) */
  flex-shrink: 0;

  /* w-12 h-12 (48px x 48px) */
  width: 3rem;
  height: 3rem;

  /* bg-gradient-to-br from-[#FFC7EA] to-[#D8C8FF] */
  background: linear-gradient(to bottom right, #FFC7EA, #D8C8FF);

  /* rounded-full (Hình tròn) */
  border-radius: 9999px;

  /* flex items-center justify-center */
  display: flex;
  align-items: center;
  justify-content: center;

  /* text-white */
  color: #ffffff;

  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
      .question-row {
  /* flex */
  display: flex;

  /* items-start (Căn lề ở phía trên đỉnh) */
  align-items: flex-start;

  /* gap-4 (16px) */
  gap: 1rem;

  /* mb-6 (24px) */
  margin-bottom: 1.5rem;
}
      .question-card {
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8);

  /* rounded-[24px] */
  border-radius: 24px;

  /* p-6 (24px) */
  padding: 1.5rem;

  /* border border-white/20 */
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* Hỗ trợ hiển thị mờ (Glassmorphism) */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Hỗ trợ Safari */
}
      .exercise-header-card {
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8);

  /* rounded-[32px] */
  border-radius: 32px;

  /* p-8 (32px) */
  padding: 2rem;

  /* mb-8 (32px) */
  margin-bottom: 2rem;

  /* text-black */
  color: #000000;

  /* border border-white/20 */
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* Glassmorphism hiệu ứng mờ nền */
  backdrop-filter: blur(16px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
      .back-icon {
  /* w-5 h-5 (20px x 20px) */
  width: 1.25rem;
  height: 1.25rem;

  /* transition-transform */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Đảm bảo icon là khối để dùng được transform */
  display: inline-block;
}

/* group-hover:-translate-x-2 */
/* Khi thẻ cha (nút) được hover, icon dịch sang trái 0.5rem (8px) */
.group:hover .back-icon {
  transform: translateX(-0.5rem);
}
      .glass-button-back {
  /* glass-button (Tùy biến theo style chung của bạn) */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* flex items-center gap-2 */
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */

  /* text-white/90 */
  color: rgba(255, 255, 255, 0.9);

  /* px-6 py-3 rounded-[20px] */
  padding: 0.75rem 1.5rem;
  border-radius: 20px;

  /* mb-8 */
  margin-bottom: 2rem;

  /* transition & cursor */
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
}

/* hover:text-white & hiệu ứng bóng đổ nhẹ */
.glass-button-back:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(255, 199, 234, 0.3);
}

/* Hiệu ứng cho icon mũi tên khi hover (nếu dùng group-hover) */
.glass-button-back:hover .icon-arrow {
  transform: translateX(-4px);
  transition: transform 0.3s ease;
}
      .action-icon {
  /* flex-shrink-0 */
  flex-shrink: 0;

  /* text-3xl (30px) */
  font-size: 1.875rem;
  line-height: 2.25rem;

  /* transition-transform (Thời gian chuyển động) */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* group-hover:translate-x-2 */
/* Khi thẻ cha (.group) được hover, icon dịch chuyển 0.5rem (8px) */
.exercise-card:hover .action-icon {
  transform: translateX(0.5rem);
}
      .main-glass-container {
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8);

  /* rounded-[32px] */
  border-radius: 32px;

  /* p-8 (32px) */
  padding: 2rem;

  /* mb-8 (32px) */
  margin-bottom: 2rem;

  /* border border-white/20 */
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* Hiệu ứng bổ trợ để giống Glassmorphism thực thụ */
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}
      .badge-icon {
  /* flex-shrink-0 */
  flex-shrink: 0;

  /* w-14 h-14 (56px x 56px) */
  width: 3.5rem;
  height: 3.5rem;

  /* bg-gradient-to-br from-[#FFC7EA] to-[#D8C8FF] */
  background: linear-gradient(to bottom right, #FFC7EA, #D8C8FF);

  /* rounded-[16px] */
  border-radius: 16px;

  /* flex items-center justify-center */
  display: flex;
  align-items: center;
  justify-content: center;

  /* text-white */
  color: #ffffff;

  /* transition-transform */
  transition: transform 0.3s ease;

  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* group-hover:scale-110 */
/* Lưu ý: .group-container là class của thẻ cha bọc ngoài */
.group-container:hover .badge-icon {
  transform: scale(1.1);
}
      .glass-card-item {
  /* w-full */
  width: 100%;

  /* bg-white/80 (Trắng đục 80%) */
  background-color: rgba(255, 255, 255, 0.8);

  /* rounded-[24px] */
  border-radius: 24px;

  /* p-6 (24px) */
  padding: 1.5rem;

  /* border border-white/10 */
  border: 1px solid rgba(255, 255, 255, 0.1);

  /* transition-all duration-300 */
  transition: all 0.3s ease-in-out;

  /* Để hiệu ứng kính mờ đẹp hơn, nên thêm thuộc tính này */
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* hover:scale-[1.02] */
.glass-card-item:hover {
  transform: scale(1.02);
  
  /* hover:border-white/30 */
  border-color: rgba(255, 255, 255, 0.3);
  
  /* Thêm đổ bóng nhẹ khi hover để tăng cảm giác nổi khối */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
        .glass-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(20px); box-shadow: 0 8px 32px rgba(0,0,0,0.37); }
        .glass-button { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); }
        .glass-button:hover { background: rgba(255,255,255,0.15); box-shadow: 0 0 20px rgba(255,199,234,0.5); }

        @keyframes bounce-in { 0% { opacity: 0; transform: scale(0.9) translateY(-30px); } 50% { transform: scale(1.05); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-in { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes sparkle { 0%,100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }

        .animate-bounce-in { animation: bounce-in 0.8s cubic-bezier(0.68,-0.55,0.265,1.55); }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
        .animate-slide-in { animation: slide-in 0.6s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }

        .hero-text-glow {
          text-shadow: 0 0 20px #FF69B4, 0 0 40px #A020F0, 0 0 60px #00FFFF, 0 0 80px #FF69B4, 0 0 100px #A020F0, 0 4px 20px rgba(0,0,0,0.9);
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
        }
      `})]})}function xb({onNavigate:a}){const{user:o,loading:s}=vn();return console.log("[MyPage] Render triggered"),console.log("[MyPage] authLoading:",s),console.log("[MyPage] user:",o),f.useEffect(()=>{if(console.log("[MyPage] useEffect run"),console.log("[MyPage] authLoading:",s),console.log("[MyPage] user:",o),s){console.log("[MyPage] Auth loading → chờ...");return}if(!o){console.log("[MyPage] No user → redirect login"),a("login");return}o.role==="ADMIN"?(console.log("[MyPage] ADMIN → navigate to admin dashboard"),a("admin")):(console.log("[MyPage] USER → navigate to user mypage"),a("user"))},[s,o,a]),s?t.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("p",{className:"text-indigo-600 text-2xl mt-6 font-bold",children:"Đang kiểm tra thông tin mèo..."}),t.jsx("p",{className:"text-gray-600 mt-2",children:"にゃん... chờ chút nhé! 🐱"})]})}):t.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-9xl animate-bounce mb-8",children:"🐱"}),t.jsx("p",{className:"text-4xl font-bold text-purple-700 animate-pulse",children:"Đang đưa mèo về nhà..."})]})})}function bb({onNavigate:a}){const{user:o,loading:s}=vn(),l="https://ui-avatars.com/api/?background=4f46e5&color=fff&name=",[u,h]=f.useState([]),[m,g]=f.useState(null),[x,w]=f.useState(!1),[b,y]=f.useState(""),[k,I]=f.useState({username:"",email:"",fullName:"",role:"USER",level:1,points:0,streak:0,status:"ACTIVE",password:"123456"}),[j,v]=f.useState(!0),[N,V]=f.useState(""),[O,B]=f.useState("ALL"),[G,te]=f.useState("ALL"),[de,q]=f.useState("joinDate"),[le,C]=f.useState("desc"),[A,xe]=f.useState(1),W=8,[Y,P]=f.useState(0);f.useEffect(()=>{if(!s){if(!o){ge.error("Bạn cần đăng nhập để truy cập 😿"),a("login");return}if(o.role!=="ADMIN"){ge.error("Bạn không có quyền truy cập trang admin 😿"),a("landing");return}ue(),he()}},[s,o,a]);const ue=async()=>{try{v(!0);const K=await Ie.get("/admin/users");let Fe=K.data?.data||K.data||[];Fe=Fe.map(se=>({...se,status:se.status||"ACTIVE"})),h(Fe),Fe.length>0&&!m&&g(Fe[0])}catch(K){K.response?.status===401||K.response?.status===403?(ge.error("Phiên hết hạn hoặc không có quyền 😿"),a("login")):ge.error("Không tải được danh sách user 😿")}finally{v(!1)}},he=async()=>{try{const K=await Ie.get("/admin/mini-test/pending-count");P(K.data.count||0)}catch(K){K.response?.status===401&&a("login")}},ne=async()=>{if(!k.username?.trim()||!k.email?.trim()){alert("Vui lòng nhập tên đăng nhập và email!");return}try{const K={username:k.username.trim(),email:k.email.trim(),fullName:k.fullName?.trim()||null,avatarUrl:k.avatarUrl?.trim()||null,password:k.password?.trim()||"123456",role:k.role||"USER",level:k.level||1,points:k.points||0,streak:k.streak||0,status:k.status||"ACTIVE"};await Ie.post("/admin/users",K),alert("🎉 Tạo user thành công!"),z(),ue()}catch(K){const Fe=K.response?.data?.message||"Tạo user thất bại";alert(`❌ ${Fe}`)}},M=async()=>{if(!k.id||!k.username?.trim()||!k.email?.trim()){alert("Thông tin không hợp lệ!");return}try{const K={username:k.username.trim(),email:k.email.trim(),fullName:k.fullName?.trim()||null,avatarUrl:k.avatarUrl?.trim()||null,role:k.role||"USER",level:k.level||1,points:k.points||0,streak:k.streak||0,status:k.status||"ACTIVE"};await Ie.put(`/admin/users/${k.id}`,K),ge.success("✅ Cập nhật thành công!"),z(),await ue()}catch(K){ge.error(`❌ ${K.response?.data?.message||"Cập nhật thất bại"}`)}},X=async K=>{if(window.confirm("Bạn có chắc chắn muốn xóa user này?"))try{await Ie.delete(`/admin/users/${K}`),alert("🗑️ Xóa user thành công!"),ue(),m?.id===K&&g(u[0]||null)}catch(Fe){alert(`❌ ${Fe.response?.data?.message||"Xóa thất bại"}`)}},Z=(K,Fe)=>{y(K),I(K==="edit"&&Fe?{...Fe,password:""}:{username:"",email:"",fullName:"",role:"USER",level:1,points:0,streak:0,status:"ACTIVE",password:"123456"}),w(!0)},z=()=>{w(!1),y(""),I({username:"",email:"",fullName:"",role:"USER",level:1,points:0,streak:0,status:"ACTIVE",password:"123456"})},$=(K="ACTIVE")=>{switch(K){case"ACTIVE":return{text:"Đang hoạt động",className:"badge-success"};case"INACTIVE":return{text:"Không hoạt động",className:"badge-inactive"};case"BANNED":return{text:"Đã khóa",className:"badge-danger"};default:return{text:"Đang hoạt động",className:"badge-success"}}},J=[...u.filter(K=>{const Fe=K.username.toLowerCase().includes(N.toLowerCase())||K.email.toLowerCase().includes(N.toLowerCase())||K.fullName?.toLowerCase().includes(N.toLowerCase())||!1,se=O==="ALL"||K.role===O,E=G==="ALL"||K.status===G;return Fe&&se&&E})].sort((K,Fe)=>{let se,E;switch(de){case"level":se=K.level,E=Fe.level;break;case"points":se=K.points,E=Fe.points;break;case"joinDate":se=new Date(K.joinDate).getTime(),E=new Date(Fe.joinDate).getTime();break;case"username":se=K.username.toLowerCase(),E=Fe.username.toLowerCase();break;default:return 0}return le==="asc"?se>E?1:-1:se<E?1:-1}),me=Math.ceil(J.length/W),fe=(A-1)*W,je=J.slice(fe,fe+W),Te=K=>{xe(K)},Me=()=>{a("landing")};return s?t.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("p",{className:"text-indigo-600 text-xl mt-4",children:"Đang kiểm tra quyền truy cập..."})]})}):!o||o.role!=="ADMIN"?null:j?t.jsx("div",{className:"main-layout",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("p",{className:"text-indigo-600 text-lg",children:"Đang tải dữ liệu admin..."})]})}):t.jsxs("div",{className:"app-container",children:[t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"header-container",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"section-title",children:"Admin Dashboard 👑"}),t.jsx("p",{className:"text-gray-600 mt-1",children:"Quản lý người dùng hệ thống"})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsxs("button",{onClick:()=>Z("create"),className:"success-button",children:[t.jsx("span",{className:"text-lg",children:"+"})," Thêm User"]}),t.jsxs("button",{onClick:()=>a("historytracking"),className:"btn-primary-gradient",children:["📊 ",t.jsx("span",{className:"truncate",children:"Lịch sử hoạt động"})]}),t.jsxs("button",{onClick:()=>a("test-management"),className:"btn-secondary-gradient relative",children:["📝 ",t.jsx("span",{className:"truncate",children:"Quản lý Mini Test"}),Y>0&&t.jsx("span",{className:"badge-pulse",children:Y>9?"9+":Y})]}),t.jsx("button",{onClick:Me,className:"danger-button",children:"Quay lại"})]})]}),t.jsxs("div",{className:"responsive-grid",children:[t.jsxs("div",{className:"content-card",children:[t.jsx("div",{className:"sub-title",children:u.length}),t.jsx("div",{className:"helper-text",children:"Tổng số user"})]}),t.jsxs("div",{className:"content-card",children:[t.jsx("div",{className:"sub-title",children:u.filter(K=>K.role==="ADMIN").length}),t.jsx("div",{className:"helper-text",children:"Admin"})]}),t.jsxs("div",{className:"content-card",children:[t.jsx("div",{className:"sub-title",children:u.filter(K=>K.status==="ACTIVE").length}),t.jsx("div",{className:"helper-text",children:"Đang hoạt động"})]}),t.jsxs("div",{className:"content-card",children:[t.jsx("div",{className:"sub-title",children:u.reduce((K,Fe)=>K+Fe.points,0).toLocaleString()}),t.jsx("div",{className:"helper-text",children:"Tổng điểm"})]})]}),t.jsxs("div",{className:"premium-card",children:[t.jsx("div",{className:"p-4 border-b",children:t.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[t.jsx("div",{className:"flex-1",children:t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:"text",placeholder:"Tìm kiếm user...",value:N,onChange:K=>V(K.target.value),className:"search-input"}),t.jsx("div",{className:"absolute-icon",children:"🔍"})]})}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("select",{value:O,onChange:K=>B(K.target.value),className:"input-standard",children:[t.jsx("option",{value:"ALL",children:"Tất cả vai trò"}),t.jsx("option",{value:"USER",children:"User"}),t.jsx("option",{value:"ADMIN",children:"Admin"})]}),t.jsxs("select",{value:G,onChange:K=>te(K.target.value),className:"input-standard",children:[t.jsx("option",{value:"ALL",children:"Tất cả trạng thái"}),t.jsx("option",{value:"ACTIVE",children:"Đang hoạt động"}),t.jsx("option",{value:"INACTIVE",children:"Không hoạt động"}),t.jsx("option",{value:"BANNED",children:"Đã khóa"})]}),t.jsxs("select",{value:de,onChange:K=>q(K.target.value),className:"input-standard",children:[t.jsx("option",{value:"joinDate",children:"Mới nhất"}),t.jsx("option",{value:"username",children:"Tên A-Z"}),t.jsx("option",{value:"level",children:"Level cao nhất"}),t.jsx("option",{value:"points",children:"Nhiều điểm nhất"})]}),t.jsx("button",{onClick:()=>C(le==="asc"?"desc":"asc"),className:"secondary-item",children:le==="asc"?"↑":"↓"})]})]})}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{className:"bg-gray-50",children:t.jsxs("tr",{children:[t.jsx("th",{className:"table-header-cell",children:"User"}),t.jsx("th",{className:"table-header-cell",children:"Thông tin"}),t.jsx("th",{className:"table-header-cell",children:"Stats"}),t.jsx("th",{className:"table-header-cell",children:"Trạng thái"}),t.jsx("th",{className:"table-header-cell",children:"Hành động"})]})}),t.jsx("tbody",{className:"divide-y divide-gray-200",children:je.map(K=>{const Fe=$(K.status);return t.jsxs("tr",{className:`hover:bg-indigo-50 transition-colors cursor-pointer ${m?.id===K.id?"bg-indigo-50":""}`,onClick:()=>g(K),children:[t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:K.avatarUrl||`${l}${K.username}`,alt:K.username,className:"avatar-style",onError:se=>{se.currentTarget.src=`${l}${K.username}`}}),t.jsxs("div",{children:[t.jsx("div",{className:"font-medium text-gray-900",children:K.username}),K.fullName&&t.jsx("div",{className:"text-sm text-gray-500",children:K.fullName})]})]})}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{className:"text-gray-900",children:K.email}),t.jsx("div",{className:"text-gray-500 capitalize",children:K.role.toLowerCase()})]})}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"font-bold text-indigo-600",children:K.level}),t.jsx("div",{className:"text-xs text-gray-500",children:"Level"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"font-bold text-purple-600",children:K.points}),t.jsx("div",{className:"text-xs text-gray-500",children:"Điểm"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"font-bold text-orange-600",children:K.streak||0}),t.jsx("div",{className:"text-xs text-gray-500",children:"Streak"})]})]})}),t.jsxs("td",{className:"p-4",children:[t.jsx("span",{className:`badge-base ${Fe.className}`,children:Fe.text}),t.jsx("div",{className:"text-xs text-gray-500 mt-1",children:new Date(K.joinDate).toLocaleDateString("vi-VN")})]}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:se=>{se.stopPropagation(),Z("edit",K)},className:"chip-button",children:"Sửa"}),t.jsx("button",{onClick:se=>{se.stopPropagation(),X(K.id)},className:"chip-button",children:"Xóa"})]})})]},K.id)})})]})}),me>1&&t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"text-sm text-gray-500",children:["Hiển thị ",fe+1,"-",Math.min(fe+W,J.length)," của"," ",J.length," user"]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>Te(A-1),disabled:A===1,className:"step-button",children:"← Trước"}),[...Array(Math.min(5,me))].map((K,Fe)=>{let se;return me<=5||A<=3?se=Fe+1:A>=me-2?se=me-4+Fe:se=A-2+Fe,t.jsx("button",{onClick:()=>Te(se),className:`input-mini ${A===se?"btn-primary":"hover:bg-gray-50"}`,children:se},Fe)}),t.jsx("button",{onClick:()=>Te(A+1),disabled:A===me,className:"btn-nav",children:"Sau →"})]})]})]}),m&&t.jsxs("div",{className:"main-card",children:[t.jsx("h2",{className:"section-title",children:"Chi tiết User"}),t.jsxs("div",{className:"responsive-grid",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex-header",children:[t.jsx("img",{src:m.avatarUrl||`${l}${m.username}`,alt:m.username,className:"profile-avatar-lg",onError:K=>{K.currentTarget.src=`${l}${m.username}`}}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900",children:m.username}),t.jsx("p",{className:"text-gray-600",children:m.email}),m.fullName&&t.jsx("p",{className:"text-gray-700",children:m.fullName})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"text-sm text-gray-500",children:"Role"}),t.jsx("div",{className:"font-medium text-gray-900 capitalize",children:m.role.toLowerCase()})]}),t.jsxs("div",{children:[t.jsx("label",{className:"text-sm text-gray-500",children:"Trạng thái"}),t.jsx("div",{className:"font-medium",children:t.jsx("span",{className:`tag-flat ${$(m.status).className}`,children:$(m.status).text})})]}),t.jsxs("div",{children:[t.jsx("label",{className:"text-sm text-gray-500",children:"Ngày tham gia"}),t.jsx("div",{className:"font-medium text-gray-900",children:new Date(m.joinDate).toLocaleDateString("vi-VN",{year:"numeric",month:"long",day:"numeric"})})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Thống kê học tập"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between mb-1",children:[t.jsx("span",{className:"text-sm text-gray-600",children:"Level"}),t.jsxs("span",{className:"text-sm font-medium text-indigo-600",children:["Cấp ",m.level]})]}),t.jsx("div",{className:"progress-container",children:t.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(m.level*10,100)}%`}})})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between mb-1",children:[t.jsx("span",{className:"text-sm text-gray-600",children:"Điểm"}),t.jsxs("span",{className:"text-sm font-medium text-purple-600",children:[m.points.toLocaleString()," điểm"]})]}),t.jsx("div",{className:"progress-container",children:t.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(m.points/1e4*100,100)}%`}})})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between mb-1",children:[t.jsx("span",{className:"text-sm text-gray-600",children:"Streak"}),t.jsxs("span",{className:"text-sm font-medium text-orange-600",children:[m.streak||0," ngày"]})]}),t.jsx("div",{className:"progress-container",children:t.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min((m.streak||0)/30*100,100)}%`}})})]})]}),t.jsx("div",{className:"mt-8 pt-6 border-t",children:t.jsx("button",{onClick:()=>Z("edit",m),className:"btn-gradient",children:"Chỉnh sửa User"})})]})]})]}),x&&t.jsx("div",{className:"modal-overlay",children:t.jsx("div",{className:"modal-content-box",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex justify-between items-center mb-6",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:b==="create"?"Tạo User Mới":"Chỉnh sửa User"}),t.jsx("button",{onClick:z,className:"text-gray-400 hover:text-gray-600 text-2xl",children:"×"})]}),t.jsxs("div",{className:"content-grid-compact",children:[t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Tên đăng nhập *"}),t.jsx("input",{type:"text",value:k.username||"",onChange:K=>I({...k,username:K.target.value}),className:"input-smart",placeholder:"username",required:!0})]}),t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Email *"}),t.jsx("input",{type:"email",value:k.email||"",onChange:K=>I({...k,email:K.target.value}),className:"input-smart",placeholder:"email@example.com",required:!0})]}),t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Họ và tên"}),t.jsx("input",{type:"text",value:k.fullName||"",onChange:K=>I({...k,fullName:K.target.value}),className:"input-smart",placeholder:"Nguyễn Văn A"})]}),b==="create"&&t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Mật khẩu"}),t.jsx("input",{type:"text",value:k.password||"",onChange:K=>I({...k,password:K.target.value}),className:"input-smart",placeholder:"Để trống = 123456"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Avatar URL"}),t.jsx("input",{type:"text",value:k.avatarUrl||"",onChange:K=>I({...k,avatarUrl:K.target.value}),className:"input-smart",placeholder:"https://example.com/avatar.jpg"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Vai trò"}),t.jsxs("select",{value:k.role||"USER",onChange:K=>I({...k,role:K.target.value}),className:"input-smart",children:[t.jsx("option",{value:"USER",children:"User"}),t.jsx("option",{value:"ADMIN",children:"Admin"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Trạng thái"}),t.jsxs("select",{value:k.status||"ACTIVE",onChange:K=>I({...k,status:K.target.value}),className:"input-smart",children:[t.jsx("option",{value:"ACTIVE",children:"Đang hoạt động"}),t.jsx("option",{value:"INACTIVE",children:"Không hoạt động"}),t.jsx("option",{value:"BANNED",children:"Đã khóa"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Level"}),t.jsx("input",{type:"number",value:k.level||1,onChange:K=>I({...k,level:parseInt(K.target.value)||1}),className:"input-smart",min:"1"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"content-grid-compact",children:"Điểm"}),t.jsx("input",{type:"number",value:k.points||0,onChange:K=>I({...k,points:parseInt(K.target.value)||0}),className:"input-smart",min:"0"})]})]}),t.jsxs("div",{className:"flex gap-4 mt-8",children:[t.jsx("button",{onClick:b==="create"?ne:M,className:"btn-premium-flex",children:b==="create"?"Tạo User":"Cập nhật"}),t.jsx("button",{onClick:z,className:"btn-secondary-flex",children:"Hủy"})]})]})})})]}),t.jsx("style",{children:`
      .btn-secondary-gradient {
      position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
  background-size: 200% auto; /* Để tạo hiệu ứng di chuyển gradient */
  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.btn-secondary-gradient:hover {
  background-position: right center; /* Di chuyển gradient */
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(168, 85, 247, 0.4);
  filter: brightness(1.1);
}

.btn-secondary-gradient:active {
  transform: translateY(0);
  filter: brightness(0.95);
}
  .badge-pulse {position: absolute;top: -0.5rem;right: -0.5rem; width: 1.5rem;  height: 1.5rem; background-color: #ef4444; color: #ffffff;            font-size: 0.75rem;        
  border-radius: 9999px; display: flex;align-items: center;justify-content: center;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }@keyframes pulse {0%, 100% {opacity: 1;}50% {opacity: .5;}}
        .badge-inactive { background-color: #f3f4f6; color: #1f2937; padding: 0.125rem 0.625rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; display: inline-flex; align-items: center; }
        .badge-danger { background-color: #fee2e2; color: #991b1b; padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; }
        .badge-success { background-color: #dcfce7; color: #166534; padding-left: 0.625rem; padding-right: 0.625rem; padding-top: 0.125rem; padding-bottom: 0.125rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; }
        .btn-primary-gradient { flex: 1 1 0%; padding: 0.5rem 0.5rem; background: linear-gradient(to right, #9333ea, #4f46e5); color: #ffffff; border-radius: 0.5rem; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.875rem; transition: all 0.2s; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .btn-primary-gradient:hover { background: linear-gradient(to right, #7e22ce, #4338ca); }
        .btn-secondary-flex { flex: 1 1 0%; padding: 0.75rem 1.5rem; background-color: #f3f4f6; color: #374151; border-radius: 0.5rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s ease; }
        .btn-secondary-flex:hover { background-color: #e5e7eb; }
        .btn-secondary-flex:active { transform: scale(0.98); }
        .btn-premium-flex { flex: 1 1 0%; padding: 0.75rem 1.5rem; background: linear-gradient(to right, #4f46e5, #9333ea); color: #ffffff; border-radius: 0.5rem; font-weight: 600; box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: none; cursor: pointer; }
        .btn-premium-flex:hover { background: linear-gradient(to right, #4338ca, #7e22ce); transform: translateY(-2px); box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.4); }
        .input-smart { width: 100%; padding: 0.5rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; outline: none; transition: all 0.2s ease-in-out; }
        .input-smart:focus { border-color: #6366f1; box-shadow: 0 0 0 4px #e0e7ff; }
        .content-grid-compact { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; }
        @media (min-width: 768px) { .content-grid-compact { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        .modal-content-box { background-color: #ffffff; border-radius: 1rem; width: 100%; max-width: 42rem; max-height: 90vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .modal-content-box::-webkit-scrollbar { width: 6px; }
        .modal-content-box::-webkit-scrollbar-thumb { background-color: #e2e8f0; border-radius: 10px; }
        .modal-overlay { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; padding: 1rem; z-index: 50; backdrop-filter: blur(4px); }
        .btn-gradient { width: 100%; padding: 0.5rem 1rem; background: linear-gradient(to right, #6366f1, #9333ea); color: #ffffff; border-radius: 0.5rem; font-weight: 500; border: none; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); transition: all 0.3s ease; }
        .btn-gradient:hover { background: linear-gradient(to right, #4f46e5, #7e22ce); box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3); transform: translateY(-1px); }
        .progress-bar-fill { background-color: #4f46e5; height: 0.5rem; border-radius: 9999px; transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1); width: 0%; }
        .tag-flat { display: inline-flex; align-items: center; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 500; line-height: 1rem; white-space: nowrap; }
        .profile-avatar-lg { width: 5rem; height: 5rem; border: 4px solid #ffffff; border-radius: 9999px; object-fit: cover; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); background-color: #f3f4f6; }
        .flex-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .responsive-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) { .responsive-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        .main-card { margin-top: 1.5rem; background-color: #ffffff; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
        .btn-nav { padding: 0.25rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; background-color: #ffffff; color: #374151; font-size: 0.875rem; cursor: pointer; transition: all 0.2s ease; }
        .btn-nav:hover:not(:disabled) { background-color: #f9fafb; border-color: #9ca3af; }
        .btn-nav:disabled { opacity: 0.5; cursor: not-allowed; background-color: #f3f4f6; }
        .btn-primary { background-color: #4f46e5; color: #ffffff; border: 1px solid #4f46e5; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
        .btn-primary:hover { background-color: #4338ca; border-color: #4338ca; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .btn-primary:active { transform: scale(0.96); }
        .input-mini { width: 2.5rem; padding: 0.25rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; text-align: center; appearance: none; -moz-appearance: textfield; }
        .input-mini::-webkit-inner-spin-button, .input-mini::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        .step-button { padding: 0.25rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; background-color: #ffffff; color: #374151; cursor: pointer; transition: all 0.2s; }
        .step-button:hover:not(:disabled) { background-color: #f9fafb; }
        .step-button:disabled { opacity: 0.5; cursor: not-allowed; background-color: #f3f4f6; }
        .progress-container { width: 100%; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem; overflow: hidden; }
        .card-footer { padding: 1rem; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; background-color: transparent; }
        .chip-button { padding: 0.25rem 0.75rem; font-size: 0.875rem; line-height: 1.25rem; background-color: #eff6ff; color: #2563eb; border-radius: 0.5rem; font-weight: 500; border: none; cursor: pointer; display: inline-flex; align-items: center; transition: all 0.2s ease-in-out; }
        .chip-button:hover { background-color: #dbeafe; color: #1d4ed8; }
        .chip-button:active { transform: scale(0.95); }
        .badge-base { display: inline-flex; align-items: center; padding: 0.125rem 0.625rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; white-space: nowrap; }
        .avatar-style { width: 2.5rem; height: 2.5rem; border-radius: 9999px; border: 2px solid #e0e7ff; object-fit: cover; flex-shrink: 0; }
        .table-header-cell { padding: 1rem; text-align: left; font-size: 0.875rem; line-height: 1.25rem; font-weight: 600; color: #374151; -webkit-font-smoothing: antialiased; }
        .secondary-item { padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; background-color: #ffffff; color: #374151; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: background-color 0.2s ease, border-color 0.2s ease; }
        .secondary-item:hover { background-color: #f9fafb; border-color: #9ca3af; }
        .secondary-item:active { background-color: #f3f4f6; transform: scale(0.98); }
        .input-standard { padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; outline: none; background-color: #ffffff; width: 100%; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
        .input-standard:focus { border-color: #6366f1; box-shadow: 0 0 0 2px #e0e7ff; }
        .absolute-icon { position: absolute; left: 0.75rem; top: 0.625rem; color: #9ca3af; pointer-events: none; display: flex; align-items: center; }
        .search-input { width: 100%; padding: 0.5rem 1rem 0.5rem 2.5rem; border: 1px solid #d1d5db; border-radius: 0.5rem; outline: none; transition: all 0.2s ease-in-out; background-color: #ffffff; }
        .search-input:focus { border-color: #6366f1; box-shadow: 0 0 0 2px #e0e7ff; }
        .premium-card { background-color: #ffffff; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); overflow: hidden; isolation: isolate; }
        .helper-text { font-size: 0.875rem; line-height: 1.25rem; color: #6b7280; font-weight: 400; -webkit-font-smoothing: antialiased; }
        .sub-title { font-size: 1.5rem; line-height: 2rem; font-weight: 700; color: #4f46e5; letter-spacing: -0.01em; }
        .content-card { background-color: #ffffff; border-radius: 0.75rem; padding: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid rgba(226, 232, 240, 0.8); }
        .section-title { font-size: 1.875rem; line-height: 2.25rem; font-weight: 700; color: #3730a3; letter-spacing: -0.025em; -webkit-font-smoothing: antialiased; }
        @media (min-width: 768px) { .section-title { font-size: 2.25rem; } }
        .responsive-grid { display: grid; margin-bottom: 1.5rem; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; }
        @media (min-width: 768px) { .responsive-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        .danger-button { display: inline-flex; align-items: center; padding: 0.5rem 1rem; color: #ffffff; font-weight: 500; text-align: center; border-radius: 0.5rem; border: none; cursor: pointer; background: linear-gradient(to right, #ef4444, #e11d48); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .danger-button:hover { background: linear-gradient(to right, #dc2626, #be123c); transform: translateY(-1px); box-shadow: 0 10px 15px -3px rgba(225, 29, 72, 0.2); }
        .danger-button:active { transform: scale(0.98); }
        .success-button { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; color: #ffffff; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; background: linear-gradient(to right, #22c55e, #059669); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .success-button:hover { background: linear-gradient(to right, #16a34a, #047857); transform: translateY(-1px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .success-button:active { transform: translateY(0); }
        .header-container { margin-bottom: 1.5rem; display: flex; flex-direction: column; align-items: flex-start; gap: 1rem; }
        @media (min-width: 768px) { .header-container { flex-direction: row; justify-content: space-between; align-items: center; } }
        .app-container { min-height: 100vh; background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #eef2ff 100%); padding: 1rem; }
        @media (min-width: 768px) { .app-container { padding: 1.5rem; } }
        .loading-spinner { width: 4rem; height: 4rem; border: 4px solid #e0e7ff; border-top-color: #4f46e5; border-radius: 50%; animation: spin 1s linear infinite; margin-left: auto; margin-right: auto; margin-bottom: 1rem; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .main-layout { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f8fafc, #eef2ff); background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); background-blend-mode: overlay; opacity: 0.95; padding: 2rem; }
      `})]})}function yb({onNavigate:a}){const{user:o,updateUser:s,refreshUser:l,loading:u}=vn(),[h,m]=f.useState(!0),[g,x]=f.useState(!1),[w,b]=f.useState(""),[y,k]=f.useState(0),I="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'><rect width='100%' height='100%' fill='%23f3e8ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%236b21a8' font-family='Arial, sans-serif'>Avatar</text></svg>";if(f.useEffect(()=>{const te=setTimeout(()=>{m(!1)},600);return()=>clearTimeout(te)},[]),f.useEffect(()=>{o&&b(o.avatarUrl||"")},[o]),f.useEffect(()=>{(async()=>{try{const de=await Ie.get("/user/mini-test/feedback-count");k(de.data.count||0)}catch(de){console.error("Lỗi lấy số feedback:",de)}})()},[]),!o)return t.jsx("div",{className:"mypage-loading-state",children:t.jsx("p",{children:"Đang tải thông tin mèo..."})});if(u||h)return t.jsx(Pt,{message:"Mèo đang chuẩn bị MyPage cho bạn... 😻"});const j=(te=0)=>te<30?1:te<70?2:te<120?3:te<180?4:te<250?5:te<330?6:te<420?7:te<520?8:te<630?9:te<750?10:10+Math.floor((te-630)/150),v=te=>te<=10?[30,70,120,180,250,330,420,520,630,750][te-1]||750:630+(te-9)*150,N=j(o.points),V=v(N),O=Math.min(o.points/V*100,100),B=V-o.points,G=async()=>{if(!w.trim()){ge.error("Vui lòng nhập URL hợp lệ! 😿");return}try{const te=await Ie.patch("/user/me/avatar",{avatarUrl:w.trim()}),de=te.data?.data?.avatarUrl||te.data?.avatarUrl||w.trim();s({avatarUrl:de}),await l(),ge.success("Cập nhật avatar thành công! 😻"),x(!1)}catch{ge.error("Không thể cập nhật avatar 😿")}};return t.jsxs("div",{className:"neko-mypage-wrapper",children:[t.jsxs("div",{className:"neko-mypage-container",children:[t.jsxs("header",{className:"neko-top-bar",children:[t.jsxs("h1",{className:"neko-page-title",children:["マイページ ",t.jsx("span",{className:"sakura",children:"🌸"})]}),t.jsxs("button",{onClick:()=>a("landing"),className:"neko-btn-back",children:[t.jsx("span",{children:"✕"})," Đóng"]})]}),t.jsxs("section",{className:"neko-hero-card",children:[t.jsxs("div",{className:"neko-avatar-wrapper",children:[t.jsxs("div",{className:"neko-avatar-main",children:[t.jsx("img",{src:o.avatarUrl||I,alt:"Avatar",onError:te=>{te.currentTarget.src=I,te.currentTarget.onerror=null}}),t.jsx("button",{className:"neko-edit-badge",onClick:()=>x(!0),children:"✏️"})]}),g&&t.jsxs("div",{className:"neko-avatar-edit-modal",children:[t.jsx("input",{type:"text",value:w,onChange:te=>b(te.target.value),placeholder:"Dán link ảnh vào đây..."}),t.jsxs("div",{className:"neko-edit-actions",children:[t.jsx("button",{onClick:G,className:"neko-btn-save",children:"Lưu"}),t.jsx("button",{onClick:()=>x(!1),className:"neko-btn-cancel",children:"Hủy"})]})]})]}),t.jsxs("div",{className:"neko-hero-info",children:[t.jsx("h2",{className:"neko-user-name",children:o.fullName||o.username}),t.jsxs("div",{className:"neko-user-badges",children:[t.jsx("span",{className:"neko-badge-role",children:o.role==="ADMIN"?"🛡️ Quản trị viên":"🐾 Học viên Neko"}),t.jsxs("span",{className:"neko-badge-level",children:["Cấp độ ",N]})]})]})]}),t.jsxs("div",{className:"neko-dashboard-grid",children:[t.jsxs("div",{className:"neko-info-column",children:[t.jsxs("div",{className:"neko-card-simple",children:[t.jsx("div",{className:"neko-card-icon",children:"📧"}),t.jsxs("div",{className:"neko-card-body",children:[t.jsx("label",{children:"Email liên hệ"}),t.jsx("p",{children:o.email})]})]}),t.jsxs("div",{className:"neko-card-simple",children:[t.jsx("div",{className:"neko-card-icon",children:"📅"}),t.jsxs("div",{className:"neko-card-body",children:[t.jsx("label",{children:"Gia nhập Neko"}),t.jsx("p",{children:new Date(o.joinDate||"").toLocaleDateString("vi-VN")})]})]}),t.jsxs("button",{className:"neko-cta-card",onClick:()=>a("user-mini-test-submissions"),children:[t.jsxs("div",{className:"neko-cta-content",children:[t.jsx("div",{className:"neko-cta-icon",children:"📝"}),t.jsxs("div",{className:"neko-cta-text",children:[t.jsx("h3",{children:"Bài Mini Test"}),t.jsx("p",{children:"Xem kết quả & feedback"})]})]}),y>0&&t.jsx("span",{className:"neko-notif-pill",children:y})]})]}),t.jsxs("div",{className:"neko-stats-column",children:[t.jsxs("div",{className:"neko-card-glass neko-level-stats",children:[t.jsxs("div",{className:"neko-stat-header",children:[t.jsx("h3",{children:"Tiến trình Cấp độ"}),t.jsxs("span",{className:"neko-stat-value",children:[Math.round(O),"%"]})]}),t.jsx("div",{className:"neko-progress-outer",children:t.jsx("div",{className:"neko-progress-inner",style:{width:`${O}%`}})}),t.jsx("p",{className:"neko-stat-hint",children:N<100?`Cần thêm ${B} điểm để lên Level ${N+1}`:"Bạn đã đạt đỉnh cao! 🎉"})]}),t.jsxs("div",{className:"neko-stats-row",children:[t.jsxs("div",{className:"neko-card-glass neko-stat-mini",children:[t.jsx("span",{className:"neko-mini-icon",children:"🎯"}),t.jsx("label",{children:"Tổng điểm"}),t.jsx("div",{className:"neko-mini-value",children:o.points})]}),t.jsxs("div",{className:"neko-card-glass neko-stat-mini",children:[t.jsx("span",{className:"neko-mini-icon",children:"🔥"}),t.jsx("label",{children:"Chuỗi Streak"}),t.jsxs("div",{className:"neko-mini-value",children:[o.streak||0," ngày"]})]})]}),t.jsxs("div",{className:"neko-card-glass neko-streak-info",children:[t.jsxs("p",{children:["🚀 Kỷ lục cao nhất:"," ",t.jsxs("strong",{children:[o.longestStreak||0," ngày"]})]}),t.jsxs("p",{className:"neko-last-login",children:["Lần cuối học:"," ",o.lastLoginDate?new Date(o.lastLoginDate).toLocaleDateString("vi-VN"):"Hôm nay"]})]})]})]})]}),t.jsx("style",{children:`
        /* Thêm font-family hỗ trợ tiếng Việt */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap');
        
        .neko-mypage-wrapper {
          min-height: 100vh;
          background: #fdf2f8;
          background-image: radial-gradient(#fbcfe8 0.5px, transparent 0.5px);
          background-size: 24px 24px;
          padding: 2rem 1rem;
          font-family: 'Be Vietnam Pro', 'Inter', system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .neko-mypage-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* TOP BAR */
        .neko-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .neko-page-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #6b21a8;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-btn-back {
          background: white;
          border: 2px solid #e9d5ff;
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          font-weight: 700;
          color: #7c3aed;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
        }

        .neko-btn-back:hover {
          background: #f3e8ff;
          transform: translateY(-2px);
        }

        /* HERO CARD */
        .neko-hero-card {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 10px 25px -5px rgba(107, 33, 168, 0.1);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .neko-hero-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; height: 120px;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          z-index: 0;
        }

        .neko-avatar-wrapper {
          position: relative;
          z-index: 1;
          margin-bottom: 1.5rem;
        }

        .neko-avatar-main {
          position: relative;
          width: 160px;
          height: 160px;
        }

        .neko-avatar-main img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .neko-edit-badge {
          position: absolute;
          bottom: 5px;
          right: 5px;
          background: #7c3aed;
          border: 3px solid white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
        }

        .neko-user-name {
          font-size: 2.2rem;
          color: #1e1b4b;
          margin: 0.5rem 0;
          font-weight: 800;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-user-badges {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 1rem;
        }

        .neko-badge-role {
          background: #dbeafe;
          color: #1e40af;
          padding: 0.5rem 1.2rem;
          border-radius: 99px;
          font-weight: 700;
          font-size: 1rem;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-badge-level {
          background: #fef3c7;
          color: #92400e;
          padding: 0.5rem 1.2rem;
          border-radius: 99px;
          font-weight: 700;
          font-size: 1rem;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        /* DASHBOARD GRID */
        .neko-dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
        }

        /* CARDS */
        .neko-card-simple {
          background: white;
          padding: 1.5rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 1rem;
          border: 1px solid #f3e8ff;
        }

        .neko-card-icon {
          font-size: 2rem;
          background: #f5f3ff;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
        }

        .neko-card-body label {
          display: block;
          font-size: 0.9rem;
          color: #6b7280;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-card-body p {
          font-size: 1.2rem;
          font-weight: 700;
          color: #4b5563;
          margin: 0;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        /* CTA CARD (Submission) */
        .neko-cta-card {
          width: 100%;
          background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
          border: none;
          padding: 2rem;
          border-radius: 24px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
          text-align: left;
          font-family: inherit;
        }

        .neko-cta-card:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 30px rgba(124, 58, 237, 0.4);
        }

        .neko-cta-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .neko-cta-icon {
          font-size: 2.5rem;
        }

        .neko-cta-text h3 {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 800;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-cta-text p {
          margin: 0;
          opacity: 0.9;
          font-size: 1rem;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-notif-pill {
          background: #f43f5e;
          padding: 0.4rem 1rem;
          border-radius: 12px;
          font-weight: 800;
          border: 2px solid rgba(255,255,255,0.3);
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        /* STATS RIGHT COLUMN */
        .neko-card-glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid white;
          border-radius: 24px;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }

        .neko-stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .neko-stat-header h3 {
          margin: 0;
          color: #6b21a8;
          font-weight: 800;
          font-size: 1.3rem;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-stat-value {
          font-weight: 900;
          color: #7c3aed;
          font-size: 1.4rem;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-progress-outer {
          height: 16px;
          background: #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
        }

        .neko-progress-inner {
          height: 100%;
          background: linear-gradient(to right, #a855f7, #ec4899);
          border-radius: 10px;
          transition: width 1s ease-out;
        }

        .neko-stat-hint {
          margin-top: 0.8rem;
          font-size: 0.95rem;
          color: #6b7280;
          font-weight: 600;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .neko-stat-mini {
          text-align: center;
        }

        .neko-mini-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .neko-stat-mini label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #6b7280;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-mini-value {
          font-size: 1.8rem;
          font-weight: 900;
          color: #1e1b4b;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        /* EDIT AVATAR INPUT */
        .neko-avatar-edit-modal {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 1.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          width: 300px;
          z-index: 10;
          margin-top: 10px;
        }

        .neko-avatar-edit-modal input {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #e9d5ff;
          border-radius: 10px;
          margin-bottom: 1rem;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
          font-size: 1rem;
        }

        .neko-edit-actions {
          display: flex;
          gap: 10px;
        }

        .neko-btn-save {
          flex: 1;
          background: #7c3aed;
          color: white;
          border: none;
          padding: 0.6rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
        }

        .neko-btn-cancel {
          flex: 1;
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 0.6rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
        }

        .neko-streak-info p {
          margin: 0.5rem 0;
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
        }

        .neko-last-login {
          color: #6b7280;
          font-size: 0.9rem;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .neko-dashboard-grid {
            grid-template-columns: 1fr;
          }
          .neko-hero-card {
            padding: 2rem 1rem;
          }
          .neko-page-title {
            font-size: 1.8rem;
          }
          .neko-user-name {
            font-size: 1.8rem;
          }
          .neko-avatar-edit-modal {
            width: 250px;
          }
        }
      `})]})}function wb({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState([]),[h,m]=f.useState(0),[g,x]=f.useState(!1),[w,b]=f.useState(!1),[y,k]=f.useState("Flashcard Kanji"),[I,j]=f.useState(!0),[v,N]=f.useState(!1),[V,O]=f.useState(""),[B,G]=f.useState("Meow meow..."),[te,de]=f.useState(!1),[q,le]=f.useState(!1),[C,A]=f.useState(!1),[xe,W]=f.useState("");if(f.useEffect(()=>{const X=setTimeout(()=>j(!1),1e3);let Z=!1;(()=>{const be=localStorage.getItem("nekoFlashcardKanjiData");if(!be){console.warn("Không có dữ liệu flashcard Kanji trong localStorage"),O("Không có dữ liệu flashcard Kanji! Mèo đưa bạn về trang Kanji nhé..."),N(!0);return}try{const J=JSON.parse(be);s(J.compounds||[]),u(J.allCompounds||[]),k(J.lessonTitle||"Flashcard Kanji"),Z=!0}catch{G("Meow meow..."),O("Dữ liệu flashcard Kanji bị lỗi rồi! Mèo đưa bạn về trang Kanji nhé..."),N(!0)}})();const $=setTimeout(()=>{Z&&localStorage.removeItem("nekoFlashcardKanjiData")},1500);return()=>{clearTimeout(X),clearTimeout($)}},[a]),I)return t.jsx(Pt,{message:"Mèo đang chuẩn bị flashcard Kanji cho bạn nhé..."});if(v)return t.jsx(Lt,{isOpen:v,onClose:()=>{N(!1),a("kanji")},title:B,message:V});if(o.length===0)return t.jsx(Lt,{isOpen:!0,onClose:()=>a("kanji"),title:"Meow meow...",message:"Không có từ ghép Kanji để học rồi! Mèo đưa bạn về trang Kanji nhé"});const Y=o[h],P=o.length>0?(h%10+1)/10*100:0,ue=()=>x(X=>!X),he=()=>{h>0&&(m(X=>X-1),x(!1))},ne=()=>{h===o.length-1?b(!0):(m(X=>X+1),x(!1))},M=()=>{if(l.length===0){de(!0);return}const X=new Set(o.map($=>$.word)),Z=l.filter($=>!X.has($.word));let z=[];if(Z.length>=10)z=[...Z].sort(()=>Math.random()-.5).slice(0,10),W("Mèo đã chọn 10 từ ghép mới hoàn toàn khác lần trước cho bạn rồi đấy!"),A(!0);else if(Z.length>0){z=[...Z];const $=10-Z.length,be=l.filter(J=>X.has(J.word)).sort(()=>Math.random()-.5).slice(0,$);z.push(...be),W("Chỉ còn ít từ mới thôi, mèo bù thêm vài từ cũ để bạn ôn lại nhé!"),A(!0)}else z=[...l].sort(()=>Math.random()-.5).slice(0,10),le(!0);s($=>[...$,...z]),m($=>$+1),x(!1),b(!1)};return t.jsxs("div",{className:"soft-gradient-background",children:[t.jsxs("main",{className:"container mx-auto px-4 py-12 flex flex-col items-center",children:[t.jsx("div",{className:"pt-12 pb-6 px-4 flex flex-col items-center",children:t.jsx("h1",{className:"text-center text-5xl md:text-6xl font-black text-white drop-shadow-2xl mb-8 hero-text-glow leading-tight",children:y})}),t.jsx("div",{className:"w-full max-w-2xl mb-8",children:t.jsx("div",{className:"progress-bar-shell",children:t.jsx("div",{className:"progress-bar-fill-animated",style:{width:`${P}%`},children:t.jsx("div",{className:"bouncing-absolute-badge",children:"🐾🐾🐾"})})})}),t.jsx("div",{className:"relative w-full max-w-2xl h-96 mb-12 perspective-1000",children:t.jsxs("div",{onClick:ue,className:`flashcard-inner ${g?"flipped":""} w-full h-full cursor-pointer`,children:[t.jsxs("div",{className:"flashcard-front-face",children:[t.jsx("p",{className:"huge-dark-title",children:Y.word}),t.jsx("p",{className:"caption-text-muted",children:"Nhấn để xem nghĩa"}),t.jsx(tt,{className:"absolute-wiggle-icon"})]}),t.jsxs("div",{className:"flashcard-back-face",children:[t.jsx("p",{className:"centered-hero-text",children:Y.meaning}),t.jsx("p",{className:"caption-text-white-subtle",children:Y.reading}),t.jsx("p",{className:"caption-text-white-subtle",children:"Nhấn để quay lại"}),t.jsx(Wt,{className:"absolute-pulsing-icon"})]})]})}),t.jsxs("div",{className:"flex items-center justify-center gap-12 mt-16",children:[t.jsxs("button",{onClick:he,disabled:h===0,className:"interactive-glass-card",children:[t.jsx("div",{className:"gradient-blur-effect"}),t.jsx(dt,{className:"interactive-icon",strokeWidth:4}),t.jsx(tt,{className:"bouncing-top-left-icon"})]}),t.jsxs("div",{className:"relative",children:[t.jsx(tt,{className:"bouncing-pink-icon-shadow",strokeWidth:3}),t.jsx(Wt,{className:"absolute-pulsing-corner-icon"}),t.jsx(Wt,{className:"absolute-pulsing-bottom-icon"})]}),t.jsxs("button",{onClick:ne,className:"interactive-gradient-cta-card",children:[t.jsx("div",{className:"glass-blur-effect"}),t.jsx("div",{className:"hover-gradient-glow-effect group:hover hover-gradient-glow-effect"}),t.jsxs("div",{className:"flex-centered-text-row",children:[t.jsx("span",{className:"heavy-shadowed-title",children:h===o.length-1?"HOÀN THÀNH!":"TIẾP THEO"}),h!==o.length-1&&t.jsx(xt,{className:"pulsing-element-medium",strokeWidth:5}),h===o.length-1&&t.jsxs("div",{className:"flex gap-2",children:[t.jsx("span",{className:"text-6xl bouncing-animation",children:"🥂"}),t.jsx("span",{className:"text-6xl bouncing-animation",children:"🎉"}),t.jsx("span",{className:"text-6xl bouncing-animation",children:"🍻"})]})]}),t.jsx(tt,{className:"absolute-wiggle-corner-icon"})]})]}),w&&t.jsx("div",{className:"modal-backdrop-dark",children:t.jsxs("div",{className:"modal-card-large",children:[t.jsx(tt,{className:"bouncing-pink-icon-large"}),t.jsx("h2",{className:"section-title-xl-bold",children:"Siêu giỏi!"}),t.jsx("p",{className:"paragraph-large-spaced",children:"Bạn đã học xong 10 từ ghép Kanji! Mèo tự hào về bạn lắm!"}),t.jsxs("div",{className:"flex gap-8 justify-center",children:[t.jsx("button",{onClick:M,className:"gradient-cta-button-large",children:"Học tiếp 10 từ nữa!"}),t.jsx("button",{onClick:()=>a("kanji"),className:"gray-cta-button-large",children:"Về trang Kanji"})]})]})}),te&&t.jsx(Lt,{isOpen:te,onClose:()=>{de(!1),a("kanji")},title:"Meow meow...",message:"Mèo lạc mất danh sách từ rồi! Mèo đưa bạn về trang Kanji nhé..."}),q&&t.jsx(Lt,{isOpen:q,onClose:()=>le(!1),title:"Tuyệt vời quá đi!!!",message:"Bạn đã học hết bài này rồi! Mèo tự hào về bạn lắm luôn á! Giờ mèo cho ôn lại 10 từ ngẫu nhiên nhé!"}),C&&t.jsx(Lt,{isOpen:C,onClose:()=>A(!1),title:"Meow meow!!!",message:xe})]}),t.jsx("style",{children:`
        /* Ví dụ một phần để minh họa */
        .soft-gradient-background {
          min-height: 100vh;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .flashcard-inner.flipped {
          transform: rotateY(180deg);
        }
        .flashcard-front-face,
        .flashcard-back-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 32px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .flashcard-front-face {
          background-color: #ffffff;
        }
        .flashcard-back-face {
          background-image: linear-gradient(to bottom right, #ec4899, #7c3aed);
          transform: rotateY(180deg);
        }
        .huge-dark-title {
          font-size: 6rem;
          font-weight: 900;
          color: #1f2937;
        }
        .centered-hero-text {
          font-size: 3.75rem;
          font-weight: 900;
          color: #ffffff;
          text-align: center;
        }
        .caption-text-muted {
          font-size: 1.125rem;
          color: #6b7280;
          margin-top: 2rem;
        }
        .caption-text-white-subtle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 1.5rem;
        }
              .gray-cta-button-large {
  /* px-12 py-6 */
  padding-left: 3rem; 
  padding-right: 3rem; 
  padding-top: 1.5rem; 
  padding-bottom: 1.5rem; 
  
  /* bg-gray-400 */
  background-color: #9ca3af;
  
  /* text-white */
  color: #ffffff;
  
  /* rounded-2xl */
  border-radius: 1rem;
  
  /* text-2xl */
  font-size: 1.5rem;
  
  /* font-bold */
  font-weight: 700;
  
  /* transition-all */
  transition: all 150ms ease-in-out;
}

/* Các hiệu ứng hover */
.gray-cta-button-large:hover {
  /* hover:scale-105 */
  transform: scale(1.05);
}
      .gradient-cta-button-large {
  /* px-12 py-6 */
  padding-left: 3rem; 
  padding-right: 3rem; 
  padding-top: 1.5rem; 
  padding-bottom: 1.5rem; 
  
  /* bg-gradient-to-r from-pink-500 to-purple-600 */
  background-image: linear-gradient(to right, #ec4899, #7c3aed);
  
  /* text-white */
  color: #ffffff;
  
  /* rounded-2xl */
  border-radius: 1rem;
  
  /* text-2xl */
  font-size: 1.5rem;
  
  /* font-bold */
  font-weight: 700;
  
  /* transition-all */
  transition: all 150ms ease-in-out;
}

/* Các hiệu ứng hover */
.gradient-cta-button-large:hover {
  /* hover:scale-110 */
  transform: scale(1.1);
}
      .paragraph-large-spaced {
  font-size: 1.5rem;
  color: #374151;
  margin-bottom: 2.5rem;
}
      .section-title-xl-bold {
  font-size: 3rem;
  font-weight: 900;
  color: #7c3aed;
  margin-bottom: 1rem;
}
      
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-pink-icon-large {
  width: 8rem;
  height: 8rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  color: #ec4899;
  animation: bounce 1s infinite;
}
      .modal-card-large {
  background-color: #ffffff;
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 3rem; /* p-12 */
  max-width: 32rem; /* max-w-lg */
  width: 100%;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
}
      .modal-backdrop-dark {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  /* bg-black/70 */
  background-color: rgba(0, 0, 0, 0.7);
  
  /* flex items-center justify-center */
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* z-50 */
  z-index: 50;
}
      @keyframes wiggle {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

.absolute-wiggle-corner-icon {
  position: absolute;
  bottom: -1.5rem;
  right: -1.5rem;
  width: 4rem;
  height: 4rem;
  color: rgba(255, 255, 255, 0.8);
  animation: wiggle 1s ease-in-out infinite;
}
      @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulsing-element-medium {
  width: 3.5rem;
  height: 3.5rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
      .heavy-shadowed-title {
  font-size: 2.25rem;
  font-weight: 900;
  
  /* drop-shadow-2xl (Tailwind dùng filter: drop-shadow, thường áp dụng cho hình dạng không phải hình chữ nhật) */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
}
      .flex-centered-text-row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem; /* gap-6 */
  color: #ffffff;
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-animation {
  animation: bounce 1s infinite;
}
  .glass-blur-effect {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3);
  
  /* blur-2xl (40px) */
  filter: blur(40px); 
  
  /* transition-all duration-700 */
  transition: all 700ms ease-in-out;
}

/* Tương tác Hover (Giả định phần tử cha có lớp '.group') */
.group:hover .glass-blur-effect {
  /* group-hover:blur-3xl (64px) */
  filter: blur(64px); 
}
      .interactive-gradient-cta-card {
  /* relative */
  position: relative;
  
  /* px-16 py-10 */
  padding-left: 4rem; 
  padding-right: 4rem; 
  padding-top: 2.5rem; 
  padding-bottom: 2.5rem; 
  
  /* bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 */
  background-image: linear-gradient(to bottom right, #ec4899, #7c3aed, #06b6d4);
  
  /* rounded-3xl */
  border-radius: 1.5rem;
  
  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* transform (Trạng thái ban đầu) */
  transform: scale(1);
  
  /* transition-all duration-500 */
  transition: all 500ms ease-in-out;
  
  /* overflow-hidden */
  overflow: hidden;
}

/* Tương tác Hover */
.interactive-gradient-cta-card:hover {
  /* hover:shadow-cyan-500/70 */
  box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.7); /* Tùy chỉnh bóng đổ màu xanh ngọc */
  
  /* hover:scale-110 */
  transform: scale(1.1);
}
      @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.absolute-pulsing-bottom-icon {
  position: absolute;
  bottom: -1rem;
  left: -1rem;
  width: 2rem;
  height: 2rem;
  color: #c084fc;
  
  /* animate-pulse */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  /* delay-300 (Độ trễ trước khi animation bắt đầu) */
  animation-delay: 300ms;
}
      @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.absolute-pulsing-corner-icon {
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 2.5rem;
  height: 2.5rem;
  color: #facc15;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-pink-icon-shadow {
  width: 6rem;
  height: 6rem;
  color: #ec4899;
  animation: bounce 1s infinite;
  
  /* drop-shadow-2xl (Tailwind dùng filter: drop-shadow, thường áp dụng cho hình dạng không phải hình chữ nhật) */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-top-left-icon {
  position: absolute;
  top: -1rem;
  left: -1rem;
  width: 3rem;
  height: 3rem;
  color: #ec4899;
  animation: bounce 1s infinite;
}
      .interactive-icon {
  width: 4rem;
  height: 4rem;
  color: #7c3aed;
  transition: color 150ms ease-in-out;
}

.group:hover .interactive-icon {
  color: #4c1d95;
}
      .gradient-blur-effect {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to right, 
    rgba(244, 114, 182, 0.2), 
    rgba(126, 34, 206, 0.2)
  );
  border-radius: 1.5rem;
  filter: blur(24px); 
  transition: all 150ms ease-in-out;
}

.group:hover .gradient-blur-effect {
  filter: blur(40px);
}
      .interactive-glass-card {
  position: relative;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1);
  transition: all 300ms ease-in-out;
}

.interactive-glass-card:hover {
  box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.5);
  transform: scale(1.1);
}

.interactive-glass-card[disabled] {
  opacity: 0.4;
  transform: scale(1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
  cursor: not-allowed;
}
      @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.absolute-pulsing-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  color: #fcd34d;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
      .caption-text-white-subtle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 1.5rem;
}
      .centered-hero-text {
  font-size: 3.75rem;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
}
.flashcard-back-face {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #ec4899, #7c3aed);
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  /* Cần thiết cho hiệu ứng lật 3D */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  
  /* *************************************** */
  /* BỔ SUNG: Xoay mặt sau 180 độ theo trục Y */
  /* *************************************** */
  transform: rotateY(180deg); 
}

/* @keyframes wiggle (Giữ nguyên) */
@keyframes wiggle {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

.absolute-wiggle-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  color: #f472b6;
  animation: wiggle 1s ease-in-out infinite;
}
      .caption-text-muted {
  font-size: 1.125rem;
  color: #6b7280;
  margin-top: 2rem;
}
      .sub-text-muted {
  font-size: 3rem;
  color: #a855f7;
  margin-top: 1rem;
  opacity: 0.8;
}
      .huge-dark-title {
  font-size: 6rem;
  font-weight: 900;
  color: #1f2937;
}
  .flashcard-front-face {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  /* Cần thiết cho hiệu ứng lật 3D */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
  @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-absolute-badge {
  position: absolute;
  right: 0;
  top: 50%;
  
  /* -translate-y-1/2 translate-x-1/2 */
  transform: translateY(-50%) translateX(50%);
  
  font-size: 1.5rem;
  animation: bounce 1s infinite;
}
  .progress-bar-fill-animated {
  height: 100%;
  background-image: linear-gradient(to right, #f472b6, #7c3aed);
  transition: all 500ms ease-in-out;
  position: relative;
}
  .progress-bar-shell {
  height: 2rem;
  background-color: #ffffff;
  border-radius: 9999px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
  .glass-button {
  /* px-10 py-5 */
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  
  /* bg-white/20 */
  background-color: rgba(255, 255, 255, 0.2);
  
  /* backdrop-blur-xl */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  
  /* rounded-2xl */
  border-radius: 1rem;
  
  /* text-white text-2xl font-bold */
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  
  /* transition-all */
  transition: all 150ms ease-in-out;
}

/* Các hiệu ứng hover */
.glass-button:hover {
  /* hover:bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3);
}
      @keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bouncing-pink-icon {
  width: 10rem;
  height: 10rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  animation: bounce 1s infinite;
  color: #f472b6;
}
      .dark-full-screen-center {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #581c87, #831843);
}
  .soft-gradient-background {
  min-height: 100vh;
}
        .perspective-1000 {
          perspective: 1000px;
        }
        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .flashcard-inner.flipped {
          transform: rotateY(180deg);
        }
        .flashcard-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 32px;
        }
        .flashcard-back {
          transform: rotateY(180deg);
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .hero-text-glow {
          text-shadow: 0 0 20px #ff69b4, 0 0 40px #a020f0, 0 0 60px #00ffff,
            0 0 80px #ff69b4, 0 0 100px #a020f0, 0 4px 20px rgba(0, 0, 0, 0.9);
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8));
        }
      `})]})}const dm="http://localhost:8080/api",vb=[{id:"minna",title:"Minna no Nihongo",subtitle:"Giáo trình chuẩn Nhật Bản",description:"Học theo bài có cấu trúc rõ ràng, phù hợp người mới bắt đầu",icon:"📚",available:!0},{id:"n5",title:"JLPT N5",subtitle:"~800 từ vựng chuẩn thi",description:"Học theo ngày, flashcard thông minh, dễ đạt chứng chỉ",icon:"🎯",available:!0,count:0},{id:"n4",title:"JLPT N4",subtitle:"~1,500 từ vựng chuẩn thi",description:"Nâng cao trình độ, mở rộng vốn từ thông dụng",icon:"📘",available:!0,count:0},{id:"n3",title:"JLPT N3",subtitle:"~3,700 từ vựng chuẩn thi",description:"Trình độ trung cấp, giao tiếp thực tế",icon:"📗",available:!0,count:0},{id:"n2",title:"JLPT N2",subtitle:"~6,000 từ vựng chuẩn thi",description:"Thông thạo tiếng Nhật trong công việc",icon:"📙",available:!0,count:0},{id:"n1",title:"JLPT N1",subtitle:"~10,000 từ vựng chuẩn thi",description:"Trình độ cao cấp, thành thạo như người bản xứ",icon:"📕",available:!0,count:0}];function kb({onNavigate:a}){const[o,s]=f.useState(!1),[l,u]=f.useState({title:"",message:""}),[h,m]=f.useState(vb),[g,x]=f.useState(!0),[w,b]=f.useState(null),y=async()=>{x(!0),b(null);try{const v=[...h];for(let N=1;N<v.length;N++){const V=v[N];if(V.id.startsWith("n"))try{const O=await fetch(`${dm}/vocabulary/${V.id.toUpperCase()}/count`);if(!O.ok){console.warn(`API không trả về cho ${V.id}, giữ nguyên trạng thái mặc định`);continue}const B=await O.json();B.success&&(v[N]={...V,available:!0,count:B.count||0,subtitle:`~${B.count?.toLocaleString()||"0"} từ vựng chuẩn thi`})}catch(O){console.error(`Lỗi khi gọi API cho ${V.id}:`,O)}}m(v)}catch(v){console.error("Lỗi khi lấy số lượng từ vựng:",v)}finally{x(!1)}};f.useEffect(()=>{y()},[]);const k=async v=>{if(!h.find(B=>B.id===v)){u({title:"Lỗi",message:"Không tìm thấy lộ trình học này. Vui lòng thử lại!"}),s(!0);return}if(v.startsWith("n")){x(!0);try{const B=await fetch(`${dm}/vocabulary/${v.toUpperCase()}/count`);if(!B.ok)console.warn(`API không khả dụng cho ${v}, vẫn cho phép truy cập`);else{const G=await B.json();G.success||console.warn(`Dữ liệu ${v} chưa sẵn sàng, vẫn cho phép truy cập`),G.count===0&&console.warn(`Dữ liệu ${v} đang trống, vẫn cho phép truy cập`)}}catch(B){console.error("Lỗi kiểm tra API:",B)}finally{x(!1)}}const O={minna:"vocabulary",n5:"vocabulary-n5",n4:"vocabulary-n4",n3:"vocabulary-n3",n2:"vocabulary-n2",n1:"vocabulary-n1"}[v];O&&a(O)},I=()=>{s(!1)},j=()=>{y(),b(null)};return t.jsxs("div",{className:"min-h-screen relative",children:[t.jsxs("main",{className:"relative z-10 container mx-auto px-4 py-16 md:py-24 animate-fade-in",children:[t.jsxs("div",{className:"text-center mb-16 md:mb-24",children:[t.jsx("h1",{className:"hero-section-title hero-text-glow",children:"Chọn lộ trình học"}),t.jsx("p",{className:"lead-text",children:"Mèo đã chuẩn bị sẵn phong cách học siêu hay cho bạn rồi đấy! 🐾"})]}),g?t.jsxs("div",{className:"flex justify-center items-center py-20",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("span",{className:"ml-4 text-white text-xl",children:"Đang tải dữ liệu..."})]}):w?t.jsxs("div",{className:"error-container text-center py-20",children:[t.jsx("p",{className:"text-red-300 text-xl mb-4",children:w}),t.jsx("button",{onClick:j,className:"retry-button",children:"Thử lại"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"grid-container",children:h.map((v,N)=>t.jsxs("button",{onClick:()=>k(v.id),className:"glass-card",style:{animationDelay:`${.3+N*.15}s`},disabled:g,children:[t.jsx("div",{className:"gradient-overlay"}),t.jsxs("div",{className:"subtle-overlay",children:[t.jsx("div",{className:"glow-orb orb-top"}),t.jsx("div",{className:"glow-orb orb-bottom"})]}),v.count!==void 0&&v.count>0&&t.jsxs("div",{className:"vocab-count-badge",children:[v.count.toLocaleString()," từ"]}),v.count!==void 0&&v.count===0&&t.jsx("div",{className:"empty-data-badge",children:"Đang cập nhật"}),t.jsxs("div",{className:"relative z-10 p-8 md:p-12 text-center",children:[t.jsx("div",{className:"hero-text",children:v.icon}),t.jsx("h2",{className:"card-title",children:v.title}),t.jsx("p",{className:"card-subtitle",children:v.subtitle}),t.jsx("p",{className:"card-description",children:v.description}),t.jsxs("div",{className:"flex-container",children:[t.jsx("span",{children:v.id==="minna"?"Bấm để bắt đầu":v.count&&v.count>0?`Học ${v.count.toLocaleString()} từ`:"Xem chi tiết"}),t.jsx("span",{className:"moving-icon",children:v.count&&v.count>0?"→":"🔍"})]})]})]},v.id))}),t.jsxs("div",{className:"footer-container text-center",style:{animationDelay:"1.2s"},children:[t.jsx("p",{className:"accent-text",children:"Tất cả các cấp độ đều đã được mở khóa! Bắt đầu từ N5 và tiến lên dần nhé! 💕"}),t.jsx("div",{className:"bouncing-icon",children:"🐾"})]})]})]}),o&&t.jsx("div",{className:"modal-overlay",onClick:I,children:t.jsx("div",{className:"modal-container",onClick:v=>v.stopPropagation(),children:t.jsxs("div",{className:"modal-content",children:[t.jsx("h3",{className:"modal-title",children:l.title}),t.jsx("p",{className:"modal-message",children:l.message}),t.jsx("div",{className:"modal-actions",children:t.jsx("button",{onClick:I,className:"modal-button",children:"Đã hiểu"})})]})})}),t.jsx("style",{children:`
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid-container {
          max-width: 72rem;
          margin-left: auto;
          margin-right: auto;
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        @media (min-width: 640px) {
          .grid-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 3rem;
          }
        }

        @media (min-width: 1280px) {
          .grid-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 4rem;
          }
        }

        .lead-text {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        @media (min-width: 768px) {
          .lead-text {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        }

        .bouncing-icon {
          font-size: 3.75rem;
          line-height: 1;
          display: inline-block;
          animation: bounce 1s infinite;
        }

        @media (min-width: 768px) {
          .bouncing-icon {
            font-size: 6rem;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .accent-text {
          font-size: 1.5rem;
          line-height: 2rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .accent-text {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        }

        @media (min-width: 768px) {
          .footer-container {
            margin-top: 8rem;
          }
        }

        .moving-icon {
          font-size: 2.25rem;
          line-height: 2.5rem;
          display: inline-block;
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .glass-card:hover .moving-icon {
          transform: translateX(1.5rem);
        }

        .flex-container {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          vertical-align: middle;
        }

        @media (min-width: 768px) {
          .flex-container {
            font-size: 1.5rem;
          }
        }

        .card-description {
          font-size: 1.125rem;
          color: #ffffff;
          line-height: 1.625;
          max-width: 28rem;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2.5rem;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (min-width: 768px) {
          .card-description {
            font-size: 1.25rem;
          }
        }

        .card-subtitle {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .card-subtitle {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }

        .card-title {
          font-size: 2.25rem;
          line-height: 2.5rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1rem;
          filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) 
                  drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
        }

        @media (min-width: 768px) {
          .card-title {
            font-size: 3rem;
            line-height: 1;
          }
        }

        .hero-text {
          font-size: 6rem;
          line-height: 1;
          margin-bottom: 2rem;
          display: inline-block; 
          transition: transform 0.5s ease;
          will-change: transform;
        }

        @media (min-width: 768px) {
          .hero-text {
            font-size: 8rem;
          }
        }

        .glass-card:hover .hero-text {
          transform: scale(1.1);
        }

        .glow-orb {
          position: absolute;
          width: 24rem;
          height: 24rem;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          filter: blur(64px);
          pointer-events: none;
          z-index: 0;
        }

        .orb-top {
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
        }

        .orb-bottom {
          bottom: 0;
          right: 0;
          transform: translate(50%, 50%);
        }

        .subtle-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: white;
          opacity: 0;
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .glass-card:hover .subtle-overlay {
          opacity: 0.4;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
          opacity: 0;
          transition: opacity 0.7s ease;
          z-index: 0;
        }

        .glass-card:hover .gradient-overlay {
          opacity: 1;
        }

        .glass-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeIn 0.8s ease-out forwards; 
          opacity: 0;
        }

        .glass-card:hover {
          transform: scale(1.05) translateY(-24px);
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6);
        }

        .glass-card:disabled {
          cursor: not-allowed;
          opacity: 0.8;
        }

        .glass-card:disabled:hover {
          transform: none;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .hero-section-title {
          position: relative;
          display: block;
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) 
                  drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
          transform: translateY(-0.75rem);
          font-size: 3.75rem;
          line-height: 1;
          text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f687b3;
          animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @media (min-width: 768px) {
          .hero-section-title {
            padding-left: 3.5rem;
            padding-right: 3.5rem;
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
            font-size: 4.5rem;
            line-height: 1;
            transform: translateY(-1rem);
          }
        }

        @media (min-width: 1024px) {
          .hero-section-title {
            padding-left: 5rem;
            padding-right: 5rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
            font-size: 8rem;
            line-height: 1;
            transform: translateY(-1.25rem);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        .hero-text-glow {
          text-shadow: 
            0 0 20px #FF69B4,
            0 0 40px #A020F0,
            0 0 60px #00FFFF,
            0 0 80px #FF69B4,
            0 0 100px #A020F0,
            0 4px 20px rgba(0,0,0,0.9);
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          max-width: 500px;
          width: 100%;
          overflow: hidden;
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-content {
          padding: 2.5rem;
          text-align: center;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .modal-message {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .modal-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .modal-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
        }

        .modal-button:active {
          transform: translateY(0);
        }

        /* Vocabulary Count Badge */
        .vocab-count-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          animation: pulse 2s infinite;
        }

        /* Empty Data Badge */
        .empty-data-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #ff9966 0%, #ff5e62 100%);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(79, 172, 254, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(79, 172, 254, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(79, 172, 254, 0);
          }
        }

        /* Loading Spinner */
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          border-top-color: #667eea;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Error Container */
        .error-container {
          max-width: 500px;
          margin: 0 auto;
        }

        .retry-button {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(245, 87, 108, 0.3);
        }

        .retry-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(245, 87, 108, 0.4);
        }

        /* Opacity utilities */
        .opacity-60 {
          opacity: 0.6;
        }
      `})]})}function jb({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState([]),[h,m]=f.useState(null);f.useEffect(()=>{(async()=>{try{const[y,k]=await Promise.all([Ie.get("/categories"),Ie.get("/levels")]);s(y.data),u(k.data.sort((I,j)=>j.level.localeCompare(I.level)))}catch(y){ge.error("Không tải được dữ liệu. Mèo đang sửa đây... 😿"),console.error(y)}})()},[]);const g=b=>{m(b)},x=b=>{if(!h)return;const y=h.name.toLowerCase(),k=b.level.toLowerCase();y==="vocabulary"&&k==="n5"||y==="grammar"&&k==="n5"||y==="kanji"&&k==="n5"?a("exercise",{category:y,level:k}):ge("Bài tập này sẽ sớm ra mắt nhé! Mèo đang chuẩn bị rất kỹ đây 😺",{icon:"⏳",duration:1e3})},w=()=>{m(null)};return t.jsxs("div",{className:"min-h-screen relative",children:[t.jsxs("main",{className:"relative z-10 container mx-auto px-4 py-16 md:py-24 animate-fade-in",children:[t.jsxs("div",{className:"text-center mb-16 md:mb-24",children:[t.jsx("h1",{className:"hero-section-title hero-text-glow",children:h?`Bài tập ${h.displayName}`:"Chọn loại bài tập"}),t.jsx("p",{className:"lead-text",children:h?"Chọn cấp độ JLPT bạn muốn luyện tập nào!":"Mèo đã chuẩn bị sẵn các loại bài tập siêu hay cho bạn rồi đấy! 🐾"})]}),!h&&t.jsx("div",{className:"grid-container",children:o.map((b,y)=>t.jsxs("button",{onClick:()=>g(b),className:"glass-card group",style:{animationDelay:`${.3+y*.2}s`},children:[t.jsx("div",{className:`gradient-overlay ${b.name==="VOCABULARY"?"rainbow-gradient":b.name==="GRAMMAR"?"ocean-gradient":"nature-gradient"}`}),t.jsxs("div",{className:"subtle-overlay",children:[t.jsx("div",{className:"glow-orb orb-top"}),t.jsx("div",{className:"glow-orb orb-bottom"})]}),t.jsxs("div",{className:"relative z-10 p-10 md:p-16 text-center",children:[t.jsx("div",{className:"hero-text group-hover:scale-110 transition-transform duration-500",children:b.name==="VOCABULARY"?"📚":b.name==="GRAMMAR"?"✍️":"🖌️"}),t.jsx("h2",{className:"card-title",children:b.displayName}),t.jsx("p",{className:"card-subtitle",children:"Học theo cấp độ JLPT"}),t.jsx("p",{className:"card-description",children:b.description}),t.jsxs("div",{className:"flex-container",children:[t.jsx("span",{children:"Bấm để chọn"}),t.jsx("span",{className:"moving-icon",children:"→"})]})]})]},b.id))}),h&&t.jsxs("div",{className:"max-w-6xl mx-auto",children:[t.jsxs("button",{onClick:w,className:"glass-button",children:[t.jsx("span",{className:"text-2xl group-hover:-translate-x-2 transition-transform",children:"←"}),t.jsx("span",{children:"Quay lại chọn loại"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:l.map((b,y)=>{const k=h.name.toLowerCase(),I=b.level.toLowerCase(),j=k==="vocabulary"&&I==="n5"||k==="grammar"&&I==="n5"||k==="kanji"&&I==="n5";return t.jsxs("button",{onClick:()=>j&&x(b),disabled:!j,className:`glass-card relative overflow-hidden transition-all duration-500 ${j?"hover:scale-105 cursor-pointer":"opacity-70 cursor-not-allowed"}`,style:{animationDelay:`${y*.15}s`},children:[t.jsxs("div",{className:"relative z-10 p-8 text-center",children:[t.jsx("div",{className:"text-6xl mb-4",children:j?"🎯":"🔒"}),t.jsx("h3",{className:"text-3xl font-black text-white mb-2 drop-shadow-lg",children:b.displayName}),t.jsx("p",{className:"text-xl text-white/90 mb-6",children:b.level==="N5"?"Cơ bản nhất":b.level==="N4"?"Nền tảng vững":b.level==="N3"?"Trung cấp":b.level==="N2"?"Nâng cao":"Thành thạo"}),t.jsx("div",{className:"text-lg font-bold text-white",children:j?"Bắt đầu ngay →":"Sắp ra mắt..."})]}),!j&&t.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center z-20",children:t.jsx("p",{className:"text-2xl text-white font-bold animate-pulse",children:"Coming Soon ✨"})})]},b.id)})})]}),t.jsxs("div",{className:"footer-container text-center",style:{animationDelay:"0.8s"},children:[t.jsx("p",{className:"accent-text",children:"Dù bạn chọn loại bài nào, mèo cũng sẽ đồng hành cùng bạn đến cùng nhé! 💕"}),t.jsx("div",{className:"bouncing-icon",children:"🐾"})]})]}),t.jsx("style",{children:`
      /* Dải màu cho Vocabulary */
.rainbow-gradient {
  background: linear-gradient(135deg, #f472b6, #a855f7); /* Pink to Purple */
}

/* Dải màu cho Grammar */
.ocean-gradient {
  background: linear-gradient(135deg, #60a5fa, #06b6d4); /* Blue to Cyan */
}

/* Dải màu cho Các mục khác (Ví dụ: Kanji/Listen) */
.nature-gradient {
  background: linear-gradient(135deg, #4ade80, #14b8a6); /* Green to Teal */
}

/* Lớp phủ chung để tạo độ trong suốt và hiệu ứng kính */
.gradient-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.2; /* Độ mờ nhẹ để không che mất nội dung */
  transition: opacity 0.3s ease;
}

.group:hover .gradient-overlay {
  opacity: 0.4; /* Sáng lên khi di chuột vào thẻ cha */
}
      .glass-button {
  /* Layout & Spacing */
  display: flex;                /* flex */
  align-items: center;          /* items-center */
  gap: 0.5rem;                  /* gap-2 */
  margin-bottom: 3rem;          /* mb-12 (48px) */
  padding: 0.75rem 1.5rem;      /* py-3 px-6 */
  
  /* Style & Shape */
  border-radius: 20px;          /* rounded-[20px] */
  color: rgba(255, 255, 255, 0.9); /* text-white/90 */
  font-weight: 700;
  
  /* Glassmorphism Effect */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* Animation */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* transition-all */
  cursor: pointer;
}

/* Hiệu ứng hover cho text và nền */
.glass-button:hover {
  color: #ffffff;               /* hover:text-white */
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}
      .rainbow-gradient {
  /* from-pink-400 (#f472b6) to-purple-500 (#a855f7) */
  background: linear-gradient(135deg, #f472b6, #a855f7);
  
  /* Để áp dụng cho chữ (Text Gradient) */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
      .main-viewport {
  /* min-h-screen: Chiếm toàn bộ chiều cao trình duyệt */
  min-height: 100vh;

  /* flex items-center justify-center: Căn giữa nội dung tuyệt đối */
  display: flex;
  align-items: center;
  justify-content: center;

  /* bg-gradient-to-br from-pink-100 to-purple-100 */
  background: linear-gradient(135deg, #fce4ec, #f3e5f5);

  /* Chống cuộn ngang không mong muốn */
  overflow-x: hidden;
  
  /* Đảm bảo nội dung không bị dính sát mép trên mobile */
  padding: 1rem;
}
                           .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
                  @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      .grid-container {
  /* max-w-6xl (1152px) */
  max-width: 72rem;
  
  /* mx-auto (Căn giữa toàn bộ lưới) */
  margin-left: auto;
  margin-right: auto;

  /* grid grid-cols-1 */
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  /* gap-12 (48px) */
  gap: 3rem;
  
  padding: 1rem; /* Padding nhỏ để không bị dính sát mép màn hình điện thoại */
}

/* lg:grid-cols-3 & lg:gap-20 (Màn hình từ 1024px trở lên) */
@media (min-width: 1024px) {
  .grid-container {
    /* Chia làm 3 cột bằng nhau */
    grid-template-columns: repeat(2, minmax(0, 1fr));
    
    /* gap-20 (80px) */
    gap: 5rem;
  }
}
      .lead-text {
  /* text-xl (20px) */
  font-size: 1.25rem;
  line-height: 1.75rem;

  /* text-white/90 */
  color: rgba(255, 255, 255, 0.9);

  /* font-medium */
  font-weight: 500;

  /* max-w-4xl (896px) */
  max-width: 56rem;

  /* mx-auto (Căn giữa khối văn bản) */
  margin-left: auto;
  margin-right: auto;

  /* Căn giữa nội dung chữ */
  text-align: center;
}

/* md:text-3xl (Màn hình từ 768px trở lên - 30px) */
@media (min-width: 768px) {
  .lead-text {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
      .bouncing-icon {
  /* text-6xl (60px) */
  font-size: 3.75rem;
  line-height: 1;

  /* Cấu hình để animation hoạt động tốt */
  display: inline-block;

  /* animate-bounce */
  animation: bounce 1s infinite;
}

/* md:text-8xl (Màn hình từ 768px trở lên - 96px) */
@media (min-width: 768px) {
  .bouncing-icon {
    font-size: 6rem;
  }
}

/* Định nghĩa Keyframes cho animate-bounce (Chuẩn Tailwind) */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
      .accent-text {
  /* text-2xl (24px) */
  font-size: 1.5rem;
  line-height: 2rem;

  /* text-white/90 (Độ trong suốt 90%) */
  color: rgba(255, 255, 255, 0.9);

  /* font-medium */
  font-weight: 500;

  /* mb-6 (24px) */
  margin-bottom: 1.5rem;
}

/* md:text-3xl (Màn hình từ 768px trở lên - 30px) */
@media (min-width: 768px) {
  .accent-text {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}

/* md:mt-32 (Màn hình từ 768px trở lên - 128px) */
@media (min-width: 768px) {
  .footer-container {
    margin-top: 8rem;
  }
}

      .moving-icon {
  /* text-4xl */
  font-size: 2.25rem; /* 36px */
  line-height: 2.5rem;

  /* Cấu hình để transform hoạt động */
  display: inline-block;

  /* transition-transform duration-500 */
  transition: transform 0.5s ease;
  will-change: transform;
}

/* group-hover:translate-x-6 */
/* Khi di chuột vào .glass-card (group), icon dịch sang phải 1.5rem (24px) */
.glass-card:hover .moving-icon {
  transform: translateX(1.5rem);
}
      .flex-container {
  /* inline-flex items-center gap-4 */
  display: inline-flex;
  align-items: center;
  gap: 1rem; /* 4 * 4px = 16px */

  /* text-white text-xl font-bold */
  color: #ffffff;
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  
  /* Đảm bảo căn chỉnh mượt mà */
  vertical-align: middle;
}

/* md:text-2xl (Màn hình từ 768px trở lên) */
@media (min-width: 768px) {
  .flex-container {
    font-size: 1.5rem; /* 24px */
  }
}
      .card-description {
  /* text-lg (18px) */
  font-size: 1.125rem;
  
  /* text-white */
  color: #ffffff;
  
  /* leading-relaxed (line-height: 1.625) */
  line-height: 1.625;
  
  /* max-w-md (448px) */
  max-width: 28rem;
  
  /* mx-auto (Căn giữa theo chiều ngang) */
  margin-left: auto;
  margin-right: auto;
  
  /* mb-10 (10 * 4px = 40px) */
  margin-bottom: 2.5rem;
  
  /* Đảm bảo chữ trông mịn hơn trên nền tối */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* md:text-xl (Màn hình từ 768px trở lên - 20px) */
@media (min-width: 768px) {
  .card-description {
    font-size: 1.25rem;
  }
}
      .card-subtitle {
  /* text-xl (20px) */
  font-size: 1.25rem;
  line-height: 1.75rem;

  /* text-white */
  color: #ffffff;

  /* font-semibold */
  font-weight: 600;

  /* mb-6 (6 * 4px = 24px) */
  margin-bottom: 1.5rem;
}

/* md:text-2xl (Màn hình từ 768px trở lên - 24px) */
@media (min-width: 768px) {
  .card-subtitle {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
      .card-title {
  /* text-4xl */
  font-size: 2.25rem; /* 36px */
  line-height: 2.5rem;
  
  /* font-black */
  font-weight: 900;
  
  /* text-white */
  color: #ffffff;
  
  /* mb-4 (4 * 4px) */
  margin-bottom: 1rem;
  
  /* drop-shadow-lg */
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) 
          drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
}

/* md:text-5xl (Màn hình từ 768px trở lên) */
@media (min-width: 768px) {
  .card-title {
    font-size: 3rem; /* 48px */
    line-height: 1;
  }
}
  .hero-text {
  /* text-8xl */
  font-size: 6rem; /* 96px */
  line-height: 1;
  margin-bottom: 2rem; /* mb-8 (8 * 4px = 32px) */
  
  /* Cấu hình để transform hoạt động mượt mà */
  display: inline-block; 
  transition: transform 0.5s ease; /* duration-500 */
  will-change: transform; /* Tối ưu hiệu năng cho trình duyệt */
}

/* md:text-9xl (Dành cho màn hình từ 768px trở lên) */
@media (min-width: 768px) {
  .hero-text {
    font-size: 8rem; /* 128px */
  }
}

/* group-hover:scale-110 */
/* Khi di chuột vào .glass-card thì .hero-text sẽ phóng to */
.glass-card:hover .hero-text {
  transform: scale(1.1);
}
      /* Class dùng chung cho cả 2 vầng sáng */
.glow-orb {
  position: absolute;
  width: 24rem; /* w-96 */
  height: 24rem; /* h-96 */
  background-color: rgba(255, 255, 255, 0.3); /* bg-white/30 */
  border-radius: 50%; /* rounded-full */
  filter: blur(64px); /* blur-3xl */
  pointer-events: none;
  z-index: 0;
}

/* Vị trí góc trên trái */
.orb-top {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

/* Vị trí góc dưới phải (Mã bạn vừa gửi) */
.orb-bottom {
  bottom: 0;
  right: 0;
  /* translate-x-48 translate-y-48 = dịch chuyển ra ngoài 50% */
  transform: translate(50%, 50%);
}
      .subtle-overlay {
  /* absolute inset-0 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Giả sử bạn muốn phủ màu trắng hoặc màu chủ đạo của thương hiệu */
  background-color: white; 

  /* opacity-0 và transition-opacity duration-700 */
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  
  pointer-events: none; /* Đảm bảo lớp này không ngăn cản việc click vào nội dung */
}

/* group-hover:opacity-40 */
.glass-card:hover .subtle-overlay {
  opacity: 0.4;
}
      .gradient-overlay {
  /* absolute inset-0 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* bg-gradient-to-br (Ví dụ: từ xanh sang tím) */
  background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));

  /* opacity-0 + transition-opacity duration-700 */
  opacity: 0;
  transition: opacity 0.7s ease;
  z-index: 0; /* Đảm bảo nằm dưới nội dung */
}

/* group-hover:opacity-100 */
.glass-card:hover .gradient-overlay {
  opacity: 1;
}

/* Đảm bảo nội dung luôn hiển thị trên lớp gradient */
.content {
  position: relative;
  z-index: 1;
}
      .glass-card {
  /* Cấu trúc cơ bản */
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem; /* rounded-3xl */
  
  /* Hiệu ứng Glassmorphism */
  background-color: rgba(255, 255, 255, 0.1); /* bg-white/10 */
  backdrop-filter: blur(24px); /* backdrop-blur-xl */
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2); /* border-white/20 */
  
  /* Đổ bóng và Chuyển cảnh */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); /* shadow-2xl */
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1); /* duration-700 */
  
  /* Animation khi load trang */
  animation: fadeIn 0.8s ease-out forwards;
}

/* Hiệu ứng Hover (Hover state) */
.glass-card:hover {
  transform: scale(1.05) translateY(-24px); /* hover:scale-105 hover:-translate-y-6 */
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6); /* hover:shadow-3xl */
}

  .hero-section-title {
  /* relative */
  position: relative;
  
  /* block */
  display: block; 
  
  /* p-x (padding-left và padding-right) */
  padding-left: 2.5rem;  /* 40px */
  padding-right: 2.5rem; /* 40px */
  
  /* p-y (padding-top và padding-bottom) */
  padding-top: 2rem;    /* 32px */
  padding-bottom: 2rem; /* 32px */
  
  /* font-black */
  font-weight: 900; 
  
  /* tracking-wider */
  letter-spacing: 0.05em; 
  
  /* text-white */
  color: #ffffff; 
  
  /* drop-shadow-2xl (Giá trị gần đúng, có thể phức tạp hơn) */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
  
  /* -translate-y-3 */
  transform: translateY(-0.75rem); /* -12px */
  
  /* text-6xl (Giá trị mặc định cho text-6xl) */
  font-size: 3.75rem; /* 60px */
  line-height: 1; 
  
  /* hero-text-glow (CSS Tùy chỉnh gần đúng cho hiệu ứng glow) */
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f687b3; /* Ánh sáng trắng và hồng nhạt */
  
  /* animate-pulse-soft (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Kích thước text cho màn hình nhỏ (sm:text-6xl) */
/* Cùng giá trị mặc định, không cần media query */

/* Thiết lập cho màn hình trung bình (md) - min-width: 768px */
@media (min-width: 768px) {
  .hero-section-title {
    /* md:px-14 */
    padding-left: 3.5rem;  /* 56px */
    padding-right: 3.5rem; /* 56px */
    
    /* md:py-10 */
    padding-top: 2.5rem;    /* 40px */
    padding-bottom: 2.5rem; /* 40px */
    
    /* md:text-7xl */
    font-size: 4.5rem; /* 72px */
    line-height: 1;
    
    /* md:-translate-y-4 */
    transform: translateY(-1rem); /* -16px */
  }
}

/* Thiết lập cho màn hình lớn (lg) - min-width: 1024px */
@media (min-width: 1024px) {
  .hero-section-title {
    /* lg:px-20 */
    padding-left: 5rem;  /* 80px */
    padding-right: 5rem; /* 80px */
    
    /* lg:py-12 */
    padding-top: 3rem;    /* 48px */
    padding-bottom: 3rem; /* 48px */
    
    /* lg:text-10xl (Không có trong Tailwind mặc định, tôi dùng 9xl + 1/2) */
    font-size: 8rem; /* 128px */ 
    line-height: 1;
    
    /* lg:-translate-y-5 */
    transform: translateY(-1.25rem); /* -20px */
  }
}

/* Keyframes cho hiệu ứng pulse-soft (giả định) */
@keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}
      .circular-shadow-button {
  /* p-4 */
  padding: 1rem; /* 16px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); 
  
  /* transition */
  transition: all 150ms ease-in-out; 
}

/* hover:bg-pink-200 */
.circular-shadow-button:hover {
  background-color: #fecaca; /* pink-200 */
}

/* disabled:opacity-50 */
.circular-shadow-button:disabled {
  opacity: 0.5;
}
    .hero-text-glow {
    text-shadow: 
      0 0 20px #FF69B4,
      0 0 40px #A020F0,
      0 0 60px #00FFFF,
      0 0 80px #FF69B4,
      0 0 100px #A020F0,
      0 4px 20px rgba(0,0,0,0.9);
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));

     @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }    
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
                  @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
      `})]})}const um="http://localhost:8080/api",Nb=[{id:"minna",title:"Minna no Nihongo",subtitle:"Giáo trình chuẩn Nhật Bản",description:"Học ngữ pháp theo bài có cấu trúc rõ ràng, phù hợp người mới bắt đầu",icon:"📘",available:!0},{id:"n5",title:"JLPT N5",subtitle:"~100 cấu trúc cơ bản",description:"Tóm tắt ngữ pháp quan trọng nhất cho kỳ thi JLPT N5",icon:"🎯",available:!0,count:0},{id:"n4",title:"JLPT N4",subtitle:"~150 cấu trúc trung cấp",description:"Ngữ pháp N4 sẽ sớm ra mắt để bạn chinh phục cấp độ tiếp theo!",icon:"📈",available:!0,count:0},{id:"n3",title:"JLPT N3",subtitle:"~350 cấu trúc trung cấp",description:"Ngữ pháp trình độ trung cấp, chuẩn bị cho kỳ thi JLPT N3",icon:"📊",available:!0,count:0},{id:"n2",title:"JLPT N2",subtitle:"~600 cấu trúc nâng cao",description:"Ngữ pháp trình độ cao cấp, đang trong quá trình phát triển",icon:"📙",available:!0,count:0},{id:"n1",title:"JLPT N1",subtitle:"~1000 cấu trúc thành thạo",description:"Ngữ pháp trình độ thượng cấp, đang trong quá trình phát triển",icon:"📕",available:!0,count:0}];function Sb({onNavigate:a}){const[o,s]=f.useState(!1),[l,u]=f.useState({title:"",message:""}),[h,m]=f.useState(Nb),[g,x]=f.useState(!0),[w,b]=f.useState(null),y=async()=>{x(!0),b(null);try{const v=[...h];for(let N=1;N<v.length;N++){const V=v[N];if(V.id.startsWith("n"))try{const O=await fetch(`${um}/grammar/jlpt/${V.id.toUpperCase()}/count`);if(!O.ok){console.warn(`API không trả về cho ${V.id}, giữ nguyên trạng thái mặc định`);continue}const B=await O.json();B.success&&B.data!==void 0?v[N]={...V,available:!0,count:B.data||0,subtitle:`~${B.data?.toLocaleString()||"0"} cấu trúc ngữ pháp`}:B.success===!1&&console.warn(`API trả về không thành công cho ${V.id}:`,B.message)}catch(O){console.error(`Lỗi khi gọi API cho ${V.id}:`,O)}}m(v)}catch(v){console.error("Lỗi khi lấy số lượng ngữ pháp:",v),b("Không thể kết nối đến máy chủ. Vui lòng thử lại sau.")}finally{x(!1)}};f.useEffect(()=>{y()},[]);const k=async v=>{if(!h.find(B=>B.id===v)){u({title:"Lỗi",message:"Không tìm thấy lộ trình học này. Vui lòng thử lại!"}),s(!0);return}if(v.startsWith("n")){x(!0);try{const B=await fetch(`${um}/grammar/jlpt/${v.toUpperCase()}/count`);if(!B.ok)console.warn(`API không khả dụng cho ${v}, vẫn cho phép truy cập`);else{const G=await B.json();G.success||console.warn(`Dữ liệu ${v} chưa sẵn sàng, vẫn cho phép truy cập`),G.data===0&&console.warn(`Dữ liệu ${v} đang trống, vẫn cho phép truy cập`)}}catch(B){console.error("Lỗi kiểm tra API:",B)}finally{x(!1)}}const O={minna:"grammar",n5:"grammar-n5",n4:"grammar-n4",n3:"grammar-n3",n2:"grammar-n2",n1:"grammar-n1"}[v];O&&a(O)},I=()=>{s(!1)},j=()=>{y(),b(null)};return t.jsxs("div",{className:"grammar-selector-container",children:[o&&t.jsxs("div",{className:"grammar-selector-error-modal",children:[t.jsx("div",{className:"error-modal-overlay",onClick:I}),t.jsxs("div",{className:"error-modal-content",children:[t.jsxs("div",{className:"error-modal-header",children:[t.jsx("div",{className:"error-modal-icon",children:"⚠️"}),t.jsx("h3",{className:"error-modal-title",children:"Thông báo"})]}),t.jsx("div",{className:"error-modal-body",children:t.jsx("p",{children:l.message})}),t.jsx("div",{className:"error-modal-actions",children:t.jsx("button",{className:"error-modal-button",onClick:I,autoFocus:!0,children:"Đã hiểu"})})]})]}),t.jsxs("main",{className:"grammar-selector-main",children:[t.jsxs("div",{className:"grammar-selector-header",children:[t.jsx("h1",{className:"grammar-selector-title",children:"Chọn lộ trình Ngữ pháp"}),t.jsx("p",{className:"grammar-selector-subtitle",children:"Mèo đã chuẩn bị sẵn các phong cách học ngữ pháp siêu hay cho bạn rồi đấy! 🐾"})]}),g?t.jsxs("div",{className:"loading-container",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("span",{className:"loading-text",children:"Đang tải dữ liệu..."})]}):w?t.jsxs("div",{className:"error-container",children:[t.jsx("p",{className:"error-text",children:w}),t.jsx("button",{onClick:j,className:"retry-button",children:"Thử lại"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"grammar-selector-grid",children:h.map((v,N)=>t.jsxs("button",{onClick:()=>k(v.id),className:`grammar-card ${v.available?"grammar-card-available":"grammar-card-disabled"}`,style:{animationDelay:`${.3+N*.15}s`},disabled:g,children:[t.jsx("div",{className:`grammar-card-gradient ${v.id==="minna"?"gradient-minna":v.id==="n5"?"gradient-n5":v.id==="n4"?"gradient-n4":v.id==="n3"?"gradient-n3":v.id==="n2"?"gradient-n2":"gradient-n1"}`}),t.jsxs("div",{className:"grammar-card-glow",children:[t.jsx("div",{className:"glow-orb glow-orb-top"}),t.jsx("div",{className:"glow-orb glow-orb-bottom"})]}),v.count!==void 0&&v.count>0&&t.jsxs("div",{className:"grammar-count-badge",children:[v.count.toLocaleString()," cấu trúc"]}),v.count!==void 0&&v.count===0&&t.jsx("div",{className:"empty-data-badge",children:"Đang cập nhật"}),t.jsxs("div",{className:"grammar-card-content",children:[t.jsx("div",{className:"grammar-card-icon",children:v.icon}),t.jsx("h2",{className:"grammar-card-title",children:v.title}),t.jsx("p",{className:"grammar-card-subtitle",children:v.subtitle}),t.jsx("p",{className:"grammar-card-description",children:v.description}),t.jsxs("div",{className:"grammar-card-action",children:[t.jsx("span",{children:v.id==="minna"?"Bấm để bắt đầu":v.count&&v.count>0?`Học ${v.count.toLocaleString()} cấu trúc`:"Xem chi tiết"}),t.jsx("span",{className:"action-arrow",children:v.count&&v.count>0?"→":"🔍"})]})]})]},v.id))}),t.jsxs("div",{className:"grammar-selector-footer",children:[t.jsx("p",{className:"footer-text",children:"Tất cả các cấp độ đều đã được mở khóa! Bắt đầu từ N5 và tiến lên dần nhé! 💕"}),t.jsx("div",{className:"footer-icon",children:"🐾"})]})]})]}),t.jsx("style",{children:`
        .grammar-selector-container {
          min-height: 100vh;
          position: relative;
        }

        .grammar-selector-main {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 72rem;
          margin: 0 auto;
          padding: 4rem 1rem;
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .grammar-selector-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .grammar-selector-title {
          position: relative;
          display: block;
          padding: 2rem 2.5rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))
                  drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
          transform: translateY(-0.75rem);
          font-size: 3.75rem;
          line-height: 1;
          text-shadow: 
            0 0 20px #FF69B4,
            0 0 40px #A020F0,
            0 0 60px #00FFFF,
            0 0 80px #FF69B4,
            0 0 100px #A020F0,
            0 4px 20px rgba(0,0,0,0.9);
          animation: pulse-soft 2s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .grammar-selector-title {
            padding: 2.5rem 3.5rem;
            font-size: 4.5rem;
            transform: translateY(-1rem);
          }
        }

        @media (min-width: 1024px) {
          .grammar-selector-title {
            padding: 3rem 5rem;
            font-size: 8rem;
            transform: translateY(-1.25rem);
          }
        }

        .grammar-selector-subtitle {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          max-width: 56rem;
          margin: 0 auto;
          text-align: center;
        }

        @media (min-width: 768px) {
          .grammar-selector-subtitle {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        }

        /* Loading và Error Styles */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 0;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          border-top-color: #667eea;
          animation: spin 1s ease-in-out infinite;
          margin-bottom: 1rem;
        }

        .loading-text {
          color: white;
          font-size: 1.25rem;
        }

        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 0;
          text-align: center;
        }

        .error-text {
          color: #fca5a5;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .retry-button {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(245, 87, 108, 0.3);
        }

        .retry-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(245, 87, 108, 0.4);
        }

        /* Grid Layout */
        .grammar-selector-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem;
          max-width: 72rem;
          margin: 0 auto;
          padding: 1rem;
        }

        @media (min-width: 768px) {
          .grammar-selector-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .grammar-selector-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
        }

        /* Card Styles */
        .grammar-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
          min-height: 400px;
          width: 100%;
        }

        .grammar-card-available {
          cursor: pointer;
        }

        .grammar-card-available:hover {
          transform: scale(1.05) translateY(-1.5rem);
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6);
        }

        .grammar-card-disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .grammar-card-disabled:hover {
          transform: none;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .grammar-card-gradient {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          transition: opacity 0.3s ease;
        }

        .gradient-minna {
          background: linear-gradient(135deg, #60a5fa, #06b6d4);
        }

        .gradient-n5 {
          background: linear-gradient(135deg, #f472b6, #a855f7);
        }

        .gradient-n4 {
          background: linear-gradient(135deg, #4ade80, #14b8a6);
        }

        .gradient-n3 {
          background: linear-gradient(135deg, #fbbf24, #f97316);
        }

        .gradient-n2 {
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .gradient-n1 {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
        }

        .grammar-card-available:hover .grammar-card-gradient {
          opacity: 0.4;
        }

        .grammar-card-glow {
          position: absolute;
          inset: 0;
          background-color: white;
          opacity: 0;
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .grammar-card-available:hover .grammar-card-glow {
          opacity: 0.4;
        }

        .glow-orb {
          position: absolute;
          width: 24rem;
          height: 24rem;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          filter: blur(64px);
          pointer-events: none;
          z-index: 0;
        }

        .glow-orb-top {
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
        }

        .glow-orb-bottom {
          bottom: 0;
          right: 0;
          transform: translate(50%, 50%);
        }

        .grammar-card-content {
          position: relative;
          z-index: 1;
          padding: 2rem;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .grammar-card-content {
            padding: 2.5rem;
          }
        }

        .grammar-card-icon {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 1.5rem;
          display: inline-block;
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .grammar-card-available:hover .grammar-card-icon {
          transform: scale(1.1);
        }

        .grammar-card-title {
          font-size: 2rem;
          line-height: 2.25rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.5rem;
          filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) 
                  drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
        }

        @media (min-width: 768px) {
          .grammar-card-title {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
        }

        .grammar-card-subtitle {
          font-size: 1.125rem;
          line-height: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .grammar-card-subtitle {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }

        .grammar-card-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (min-width: 768px) {
          .grammar-card-description {
            font-size: 1.125rem;
            line-height: 1.625;
          }
        }

        .grammar-card-action {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 700;
          vertical-align: middle;
        }

        @media (min-width: 768px) {
          .grammar-card-action {
            font-size: 1.25rem;
          }
        }

        .action-arrow {
          font-size: 1.5rem;
          display: inline-block;
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .grammar-card-available:hover .action-arrow {
          transform: translateX(0.75rem);
        }

        /* Grammar Count Badge */
        .grammar-count-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          animation: pulse 2s infinite;
        }

        /* Empty Data Badge */
        .empty-data-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #ff9966 0%, #ff5e62 100%);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Footer */
        .grammar-selector-footer {
          margin-top: 4rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .grammar-selector-footer {
            margin-top: 6rem;
          }
        }

        .footer-text {
          font-size: 1.5rem;
          line-height: 2rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .footer-text {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        }

        .footer-icon {
          font-size: 3.75rem;
          line-height: 1;
          display: inline-block;
          animation: bounce 1s infinite;
        }

        @media (min-width: 768px) {
          .footer-icon {
            font-size: 6rem;
          }
        }

        /* Error Modal */
        .grammar-selector-error-modal {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: error-modal-fade-in 0.2s ease;
          opacity: 0;
        }

        .error-modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
        }

        .error-modal-content {
          position: relative;
          background: #1f2937;
          border-radius: 1rem;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          animation: error-modal-slide-up 0.3s ease;
        }

        .error-modal-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem;
          background: rgba(220, 38, 38, 0.1);
          border-bottom: 1px solid rgba(220, 38, 38, 0.2);
        }

        .error-modal-icon {
          font-size: 1.5rem;
        }

        .error-modal-title {
          margin: 0;
          color: #fca5a5;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .error-modal-body {
          padding: 1.5rem;
        }

        .error-modal-body p {
          margin: 0;
          color: #e5e7eb;
          line-height: 1.5;
        }

        .error-modal-actions {
          padding: 0 1.5rem 1.5rem;
          display: flex;
          justify-content: flex-end;
        }

        .error-modal-button {
          padding: 0.75rem 1.5rem;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .error-modal-button:hover {
          background: #b91c1c;
        }

        .error-modal-button:focus {
          outline: 2px solid #fca5a5;
          outline-offset: 2px;
        }

        /* Animations */
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(79, 172, 254, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(79, 172, 254, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(79, 172, 254, 0);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes error-modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes error-modal-slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .grammar-selector-grid {
            gap: 2rem;
          }

          .grammar-card {
            margin: 0 0.5rem;
          }

          .error-modal-content {
            width: 95%;
          }
        }

        @media (max-width: 640px) {
          .grammar-selector-title {
            font-size: 2.5rem;
            padding: 1.5rem 1rem;
          }

          .grammar-selector-subtitle {
            font-size: 1.125rem;
            line-height: 1.5rem;
          }

          .grammar-card-content {
            padding: 1.5rem;
          }

          .grammar-card-icon {
            font-size: 3rem;
          }

          .error-modal-header {
            padding: 1.25rem;
          }

          .error-modal-body {
            padding: 1.25rem;
          }

          .error-modal-actions {
            padding: 0 1.25rem 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .grammar-selector-title {
            font-size: 2rem;
            padding: 1rem;
          }

          .grammar-selector-grid {
            grid-template-columns: 1fr;
          }

          .footer-text {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }

          .footer-icon {
            font-size: 3rem;
          }
        }
      `})]})}const mm="http://localhost:8080/api",Gt={"jlpt-n5":100,"jlpt-n4":200,"jlpt-n3":400,"jlpt-n2":1e3,"jlpt-n1":2e3},kl=[{id:"minna",title:"Minna no Nihongo",subtitle:"Kanji theo giáo trình chuẩn",description:"Học Kanji theo bài Minna – có nét viết, ví dụ, từ ghép",icon:"📖",available:!0,gradient:"from-green-400 to-teal-500"},{id:"jlpt-n5",title:"JLPT N5",subtitle:"~100 Kanji cơ bản",description:"Danh sách Kanji chính thức cho kỳ thi JLPT N5",icon:"🎯",available:!0,gradient:"from-pink-400 to-purple-500",count:Gt["jlpt-n5"]},{id:"jlpt-n4",title:"JLPT N4",subtitle:"~200 Kanji",description:"Danh sách Kanji chính thức cho kỳ thi JLPT N4",icon:"📚",available:!0,gradient:"from-blue-400 to-cyan-500",count:Gt["jlpt-n4"]},{id:"jlpt-n3",title:"JLPT N3",subtitle:"~400 Kanji",description:"Danh sách Kanji chính thức cho kỳ thi JLPT N3",icon:"🔥",available:!0,gradient:"from-orange-400 to-red-500",count:Gt["jlpt-n3"]},{id:"jlpt-n2",title:"JLPT N2",subtitle:"~1000 Kanji",description:"Danh sách Kanji chính thức cho kỳ thi JLPT N2",icon:"🚀",available:!0,gradient:"from-purple-400 to-pink-500",count:Gt["jlpt-n2"]},{id:"jlpt-n1",title:"JLPT N1",subtitle:"~2000 Kanji",description:"Danh sách Kanji chính thức cho kỳ thi JLPT N1",icon:"🏆",available:!0,gradient:"from-yellow-400 to-red-500",count:Gt["jlpt-n1"]}];function Cb({onNavigate:a}){const[o,s]=f.useState(!1),[l,u]=f.useState({title:"",message:""}),[h,m]=f.useState(kl),[g,x]=f.useState(!0),[w,b]=f.useState(null),[y,k]=f.useState(null),I=async()=>{x(!0),b(null);try{const N=[...kl];for(let V=0;V<N.length;V++){const O=N[V];if(O.id.startsWith("jlpt-")){const B=O.id.split("-")[1].toUpperCase();try{const G=await fetch(`${mm}/kanji/jlpt/${B}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(G.ok){const te=await G.json();te.success&&te.data&&(N[V]={...O,count:te.data.length,subtitle:`~${te.data.length.toLocaleString()} Kanji chuẩn thi`})}else G.status===401||G.status===404?(console.log(`API ${O.id} không khả dụng, dùng giá trị mặc định`),N[V]={...O,count:Gt[O.id],subtitle:`~${Gt[O.id].toLocaleString()} Kanji chuẩn thi`}):(console.warn(`API lỗi ${G.status} cho ${O.id}`),N[V]={...O,count:Gt[O.id],subtitle:`~${Gt[O.id].toLocaleString()} Kanji chuẩn thi`})}catch(G){console.error(`Lỗi network cho ${O.id}:`,G),N[V]={...O,count:Gt[O.id],subtitle:`~${Gt[O.id].toLocaleString()} Kanji chuẩn thi`}}}}m(N)}catch(N){console.error("Lỗi khi lấy số lượng Kanji:",N),m(kl),b("Không thể kết nối đến máy chủ. Đang sử dụng dữ liệu mặc định.")}finally{x(!1)}};f.useEffect(()=>{I()},[]);const j=async N=>{const V=h.find(O=>O.id===N);if(!V){u({title:"Lỗi",message:"Không tìm thấy lộ trình học này. Vui lòng thử lại!"}),s(!0);return}if(!V.available){u({title:"Đang phát triển",message:"Tính năng này đang được phát triển. Vui lòng quay lại sau!"}),s(!0);return}if(N==="minna")a("kanji");else if(N.startsWith("jlpt-")){const O=N.split("-")[1].toUpperCase();k(N);try{const B=await fetch(`${mm}/kanji/jlpt/${O}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!B.ok)if(B.status===401)ge.error(`Vui lòng đăng nhập để truy cập Kanji ${O}. 😿`);else if(B.status===404)ge.error(`API cho Kanji ${O} chưa được triển khai. Đang chuyển sang trang thử nghiệm...`);else{ge.error(`Không thể tải Kanji ${O}. Vui lòng thử lại sau! 😿`);return}const G=await B.json();if(G.success&&G.data&&G.data.length>0){const de={N5:"kanji-n5",N4:"jlpt-kanji-n4",N3:"jlpt-kanji-n3",N2:"jlpt-kanji-n2",N1:"jlpt-kanji-n1"}[O]||"kanji-n5";a(de),ge.success(`Đã tìm thấy ${G.data.length} Kanji ${O}! 🎉`)}else ge.error(`Chưa có Kanji ${O} trong database. Mèo sẽ sớm thêm nhé! 🐾`)}catch(B){console.error(`Lỗi khi tải Kanji ${O}:`,B),ge.error(`Không thể tải Kanji ${O}. Vui lòng kiểm tra kết nối! 😿`)}finally{k(null)}}},v=()=>{s(!1)};return t.jsxs("div",{className:"min-h-screen relative",children:[t.jsxs("main",{className:"relative z-10 container mx-auto px-4 py-16 md:py-24 animate-fade-in",children:[t.jsxs("div",{className:"text-center mb-16 md:mb-24",children:[t.jsx("h1",{className:"hero-section-title hero-text-glow",children:"Chọn lộ trình học Kanji"}),t.jsx("p",{className:"lead-text",children:"Mèo đã chuẩn bị sẵn các cách học Kanji siêu hay cho bạn rồi đây! 🐾"})]}),g?t.jsxs("div",{className:"flex justify-center items-center py-20",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("span",{className:"ml-4 text-white text-xl",children:"Đang tải dữ liệu..."})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"grid-container",children:h.map((N,V)=>{const O=y===N.id,B=!N.available;return t.jsxs("button",{onClick:()=>j(N.id),className:"glass-card",style:{animationDelay:`${.3+V*.15}s`},disabled:B||O,children:[t.jsx("div",{className:`gradient-overlay bg-gradient-to-br ${N.gradient}`}),t.jsxs("div",{className:"subtle-overlay",children:[t.jsx("div",{className:"glow-orb orb-top"}),t.jsx("div",{className:"glow-orb orb-bottom"})]}),N.count!==void 0&&N.count>0&&t.jsxs("div",{className:"vocab-count-badge",children:[N.count.toLocaleString()," Kanji"]}),N.count!==void 0&&N.count===0&&t.jsx("div",{className:"empty-data-badge",children:"Đang cập nhật"}),B&&t.jsx("div",{className:"coming-soon-badge",children:"Sắp ra mắt"}),t.jsxs("div",{className:"relative z-10 p-8 md:p-12 text-center",children:[O?t.jsx("div",{className:"hero-text",children:t.jsx("div",{className:"loading-spinner-small"})}):t.jsx("div",{className:"hero-text",children:N.icon}),t.jsx("h2",{className:"card-title",children:N.title}),t.jsx("p",{className:"card-subtitle",children:N.subtitle}),t.jsx("p",{className:"card-description",children:N.description}),t.jsxs("div",{className:"flex-container",children:[t.jsx("span",{children:O?"Đang tải...":B?"Sắp ra mắt...":N.id==="minna"?"Bấm để bắt đầu":N.count&&N.count>0?`Học ${N.count.toLocaleString()} Kanji`:"Xem chi tiết"}),!O&&!B&&t.jsx("span",{className:"moving-icon",children:N.count&&N.count>0?"→":"🔍"})]})]})]},N.id)})}),t.jsxs("div",{className:"footer-container text-center",style:{animationDelay:"1.2s"},children:[t.jsx("p",{className:"accent-text",children:"Học Kanji cùng mèo – nhớ lâu, viết đẹp, dùng chuẩn! Mèo tin bạn làm được 💪🖌️"}),t.jsx("div",{className:"bouncing-icon",children:"🐾"})]})]})]}),o&&t.jsx("div",{className:"modal-overlay",onClick:v,children:t.jsx("div",{className:"modal-container",onClick:N=>N.stopPropagation(),children:t.jsxs("div",{className:"modal-content",children:[t.jsx("h3",{className:"modal-title",children:l.title}),t.jsx("p",{className:"modal-message",children:l.message}),t.jsx("div",{className:"modal-actions",children:t.jsx("button",{onClick:v,className:"modal-button",children:"Đã hiểu"})})]})})}),t.jsx("style",{children:`
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid-container {
          max-width: 72rem;
          margin-left: auto;
          margin-right: auto;
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        @media (min-width: 640px) {
          .grid-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 3rem;
          }
        }

        @media (min-width: 1280px) {
          .grid-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 4rem;
          }
        }

        .lead-text {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        @media (min-width: 768px) {
          .lead-text {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        }

        .bouncing-icon {
          font-size: 3.75rem;
          line-height: 1;
          display: inline-block;
          animation: bounce 1s infinite;
        }

        @media (min-width: 768px) {
          .bouncing-icon {
            font-size: 6rem;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .accent-text {
          font-size: 1.5rem;
          line-height: 2rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .accent-text {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        }

        @media (min-width: 768px) {
          .footer-container {
            margin-top: 8rem;
          }
        }

        .moving-icon {
          font-size: 2.25rem;
          line-height: 2.5rem;
          display: inline-block;
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .glass-card:hover .moving-icon {
          transform: translateX(1.5rem);
        }

        .flex-container {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          vertical-align: middle;
        }

        @media (min-width: 768px) {
          .flex-container {
            font-size: 1.5rem;
          }
        }

        .card-description {
          font-size: 1.125rem;
          color: #ffffff;
          line-height: 1.625;
          max-width: 28rem;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2.5rem;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (min-width: 768px) {
          .card-description {
            font-size: 1.25rem;
          }
        }

        .card-subtitle {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .card-subtitle {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }

        .card-title {
          font-size: 2.25rem;
          line-height: 2.5rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1rem;
          filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) 
                  drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
        }

        @media (min-width: 768px) {
          .card-title {
            font-size: 3rem;
            line-height: 1;
          }
        }

        .hero-text {
          font-size: 6rem;
          line-height: 1;
          margin-bottom: 2rem;
          display: inline-block; 
          transition: transform 0.5s ease;
          will-change: transform;
        }

        @media (min-width: 768px) {
          .hero-text {
            font-size: 8rem;
          }
        }

        .glass-card:hover .hero-text {
          transform: scale(1.1);
        }

        .glow-orb {
          position: absolute;
          width: 24rem;
          height: 24rem;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          filter: blur(64px);
          pointer-events: none;
          z-index: 0;
        }

        .orb-top {
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
        }

        .orb-bottom {
          bottom: 0;
          right: 0;
          transform: translate(50%, 50%);
        }

        .subtle-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: white;
          opacity: 0;
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .glass-card:hover .subtle-overlay {
          opacity: 0.4;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.7s ease;
          z-index: 0;
        }

        .glass-card:hover .gradient-overlay {
          opacity: 1;
        }

        .glass-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeIn 0.8s ease-out forwards; 
          opacity: 0;
        }

        .glass-card:hover {
          transform: scale(1.05) translateY(-24px);
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6);
        }

        .glass-card:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .glass-card:disabled:hover {
          transform: none;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .hero-section-title {
          position: relative;
          display: block;
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) 
                  drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
          transform: translateY(-0.75rem);
          font-size: 3.75rem;
          line-height: 1;
          text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f687b3;
          animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @media (min-width: 768px) {
          .hero-section-title {
            padding-left: 3.5rem;
            padding-right: 3.5rem;
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
            font-size: 4.5rem;
            line-height: 1;
            transform: translateY(-1rem);
          }
        }

        @media (min-width: 1024px) {
          .hero-section-title {
            padding-left: 5rem;
            padding-right: 5rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
            font-size: 8rem;
            line-height: 1;
            transform: translateY(-1.25rem);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        .hero-text-glow {
          text-shadow: 
            0 0 20px #FF69B4,
            0 0 40px #A020F0,
            0 0 60px #00FFFF,
            0 0 80px #FF69B4,
            0 0 100px #A020F0,
            0 4px 20px rgba(0,0,0,0.9);
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          max-width: 500px;
          width: 100%;
          overflow: hidden;
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-content {
          padding: 2.5rem;
          text-align: center;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .modal-message {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .modal-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .modal-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
        }

        .modal-button:active {
          transform: translateY(0);
        }

        /* Kanji Count Badge */
        .vocab-count-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          animation: pulse 2s infinite;
        }

        /* Empty Data Badge */
        .empty-data-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #ff9966 0%, #ff5e62 100%);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Coming Soon Badge */
        .coming-soon-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(79, 172, 254, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(79, 172, 254, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(79, 172, 254, 0);
          }
        }

        /* Loading Spinner */
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          border-top-color: #667eea;
          animation: spin 1s ease-in-out infinite;
        }

        .loading-spinner-small {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Error Container */
        .error-container {
          max-width: 500px;
          margin: 0 auto;
        }

        .retry-button {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(245, 87, 108, 0.3);
        }

        .retry-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(245, 87, 108, 0.4);
        }
      `})]})}function Xt(a){const o=Object.prototype.toString.call(a);return a instanceof Date||typeof a=="object"&&o==="[object Date]"?new a.constructor(+a):typeof a=="number"||o==="[object Number]"||typeof a=="string"||o==="[object String]"?new Date(a):new Date(NaN)}function mr(a,o){return a instanceof Date?new a.constructor(o):new Date(o)}const lh=6048e5,zb=864e5;let Tb={};function wo(){return Tb}function Da(a,o){const s=wo(),l=o?.weekStartsOn??o?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0,u=Xt(a),h=u.getDay(),m=(h<l?7:0)+h-l;return u.setDate(u.getDate()-m),u.setHours(0,0,0,0),u}function uo(a){return Da(a,{weekStartsOn:1})}function ch(a){const o=Xt(a),s=o.getFullYear(),l=mr(a,0);l.setFullYear(s+1,0,4),l.setHours(0,0,0,0);const u=uo(l),h=mr(a,0);h.setFullYear(s,0,4),h.setHours(0,0,0,0);const m=uo(h);return o.getTime()>=u.getTime()?s+1:o.getTime()>=m.getTime()?s:s-1}function hm(a){const o=Xt(a);return o.setHours(0,0,0,0),o}function pm(a){const o=Xt(a),s=new Date(Date.UTC(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds()));return s.setUTCFullYear(o.getFullYear()),+a-+s}function Eb(a,o){const s=hm(a),l=hm(o),u=+s-pm(s),h=+l-pm(l);return Math.round((u-h)/zb)}function _b(a){const o=ch(a),s=mr(a,0);return s.setFullYear(o,0,4),s.setHours(0,0,0,0),uo(s)}function Mb(a){return a instanceof Date||typeof a=="object"&&Object.prototype.toString.call(a)==="[object Date]"}function Lb(a){if(!Mb(a)&&typeof a!="number")return!1;const o=Xt(a);return!isNaN(Number(o))}function Pb(a){const o=Xt(a),s=mr(a,0);return s.setFullYear(o.getFullYear(),0,1),s.setHours(0,0,0,0),s}const Ab={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Fb=(a,o,s)=>{let l;const u=Ab[a];return typeof u=="string"?l=u:o===1?l=u.one:l=u.other.replace("{{count}}",o.toString()),s?.addSuffix?s.comparison&&s.comparison>0?"in "+l:l+" ago":l};function jl(a){return(o={})=>{const s=o.width?String(o.width):a.defaultWidth;return a.formats[s]||a.formats[a.defaultWidth]}}const Db={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ib={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ob={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Rb={date:jl({formats:Db,defaultWidth:"full"}),time:jl({formats:Ib,defaultWidth:"full"}),dateTime:jl({formats:Ob,defaultWidth:"full"})},$b={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Hb=(a,o,s,l)=>$b[a];function Pa(a){return(o,s)=>{const l=s?.context?String(s.context):"standalone";let u;if(l==="formatting"&&a.formattingValues){const m=a.defaultFormattingWidth||a.defaultWidth,g=s?.width?String(s.width):m;u=a.formattingValues[g]||a.formattingValues[m]}else{const m=a.defaultWidth,g=s?.width?String(s.width):a.defaultWidth;u=a.values[g]||a.values[m]}const h=a.argumentCallback?a.argumentCallback(o):o;return u[h]}}const Yb={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Bb={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ub={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Kb={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Vb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Gb=(a,o)=>{const s=Number(a),l=s%100;if(l>20||l<10)switch(l%10){case 1:return s+"st";case 2:return s+"nd";case 3:return s+"rd"}return s+"th"},Wb={ordinalNumber:Gb,era:Pa({values:Yb,defaultWidth:"wide"}),quarter:Pa({values:Bb,defaultWidth:"wide",argumentCallback:a=>a-1}),month:Pa({values:Ub,defaultWidth:"wide"}),day:Pa({values:Kb,defaultWidth:"wide"}),dayPeriod:Pa({values:Vb,defaultWidth:"wide",formattingValues:qb,defaultFormattingWidth:"wide"})};function Aa(a){return(o,s={})=>{const l=s.width,u=l&&a.matchPatterns[l]||a.matchPatterns[a.defaultMatchWidth],h=o.match(u);if(!h)return null;const m=h[0],g=l&&a.parsePatterns[l]||a.parsePatterns[a.defaultParseWidth],x=Array.isArray(g)?Xb(g,y=>y.test(m)):Qb(g,y=>y.test(m));let w;w=a.valueCallback?a.valueCallback(x):x,w=s.valueCallback?s.valueCallback(w):w;const b=o.slice(m.length);return{value:w,rest:b}}}function Qb(a,o){for(const s in a)if(Object.prototype.hasOwnProperty.call(a,s)&&o(a[s]))return s}function Xb(a,o){for(let s=0;s<a.length;s++)if(o(a[s]))return s}function Jb(a){return(o,s={})=>{const l=o.match(a.matchPattern);if(!l)return null;const u=l[0],h=o.match(a.parsePattern);if(!h)return null;let m=a.valueCallback?a.valueCallback(h[0]):h[0];m=s.valueCallback?s.valueCallback(m):m;const g=o.slice(u.length);return{value:m,rest:g}}}const Zb=/^(\d+)(th|st|nd|rd)?/i,e1=/\d+/i,t1={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},n1={any:[/^b/i,/^(a|c)/i]},r1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},a1={any:[/1/i,/2/i,/3/i,/4/i]},i1={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},o1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},s1={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},l1={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},c1={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},d1={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},u1={ordinalNumber:Jb({matchPattern:Zb,parsePattern:e1,valueCallback:a=>parseInt(a,10)}),era:Aa({matchPatterns:t1,defaultMatchWidth:"wide",parsePatterns:n1,defaultParseWidth:"any"}),quarter:Aa({matchPatterns:r1,defaultMatchWidth:"wide",parsePatterns:a1,defaultParseWidth:"any",valueCallback:a=>a+1}),month:Aa({matchPatterns:i1,defaultMatchWidth:"wide",parsePatterns:o1,defaultParseWidth:"any"}),day:Aa({matchPatterns:s1,defaultMatchWidth:"wide",parsePatterns:l1,defaultParseWidth:"any"}),dayPeriod:Aa({matchPatterns:c1,defaultMatchWidth:"any",parsePatterns:d1,defaultParseWidth:"any"})},m1={code:"en-US",formatDistance:Fb,formatLong:Rb,formatRelative:Hb,localize:Wb,match:u1,options:{weekStartsOn:0,firstWeekContainsDate:1}};function h1(a){const o=Xt(a);return Eb(o,Pb(o))+1}function p1(a){const o=Xt(a),s=+uo(o)-+_b(o);return Math.round(s/lh)+1}function dh(a,o){const s=Xt(a),l=s.getFullYear(),u=wo(),h=o?.firstWeekContainsDate??o?.locale?.options?.firstWeekContainsDate??u.firstWeekContainsDate??u.locale?.options?.firstWeekContainsDate??1,m=mr(a,0);m.setFullYear(l+1,0,h),m.setHours(0,0,0,0);const g=Da(m,o),x=mr(a,0);x.setFullYear(l,0,h),x.setHours(0,0,0,0);const w=Da(x,o);return s.getTime()>=g.getTime()?l+1:s.getTime()>=w.getTime()?l:l-1}function g1(a,o){const s=wo(),l=o?.firstWeekContainsDate??o?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,u=dh(a,o),h=mr(a,0);return h.setFullYear(u,0,l),h.setHours(0,0,0,0),Da(h,o)}function f1(a,o){const s=Xt(a),l=+Da(s,o)-+g1(s,o);return Math.round(l/lh)+1}function Ye(a,o){const s=a<0?"-":"",l=Math.abs(a).toString().padStart(o,"0");return s+l}const Yn={y(a,o){const s=a.getFullYear(),l=s>0?s:1-s;return Ye(o==="yy"?l%100:l,o.length)},M(a,o){const s=a.getMonth();return o==="M"?String(s+1):Ye(s+1,2)},d(a,o){return Ye(a.getDate(),o.length)},a(a,o){const s=a.getHours()/12>=1?"pm":"am";switch(o){case"a":case"aa":return s.toUpperCase();case"aaa":return s;case"aaaaa":return s[0];case"aaaa":default:return s==="am"?"a.m.":"p.m."}},h(a,o){return Ye(a.getHours()%12||12,o.length)},H(a,o){return Ye(a.getHours(),o.length)},m(a,o){return Ye(a.getMinutes(),o.length)},s(a,o){return Ye(a.getSeconds(),o.length)},S(a,o){const s=o.length,l=a.getMilliseconds(),u=Math.trunc(l*Math.pow(10,s-3));return Ye(u,o.length)}},Or={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},gm={G:function(a,o,s){const l=a.getFullYear()>0?1:0;switch(o){case"G":case"GG":case"GGG":return s.era(l,{width:"abbreviated"});case"GGGGG":return s.era(l,{width:"narrow"});case"GGGG":default:return s.era(l,{width:"wide"})}},y:function(a,o,s){if(o==="yo"){const l=a.getFullYear(),u=l>0?l:1-l;return s.ordinalNumber(u,{unit:"year"})}return Yn.y(a,o)},Y:function(a,o,s,l){const u=dh(a,l),h=u>0?u:1-u;if(o==="YY"){const m=h%100;return Ye(m,2)}return o==="Yo"?s.ordinalNumber(h,{unit:"year"}):Ye(h,o.length)},R:function(a,o){const s=ch(a);return Ye(s,o.length)},u:function(a,o){const s=a.getFullYear();return Ye(s,o.length)},Q:function(a,o,s){const l=Math.ceil((a.getMonth()+1)/3);switch(o){case"Q":return String(l);case"QQ":return Ye(l,2);case"Qo":return s.ordinalNumber(l,{unit:"quarter"});case"QQQ":return s.quarter(l,{width:"abbreviated",context:"formatting"});case"QQQQQ":return s.quarter(l,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(l,{width:"wide",context:"formatting"})}},q:function(a,o,s){const l=Math.ceil((a.getMonth()+1)/3);switch(o){case"q":return String(l);case"qq":return Ye(l,2);case"qo":return s.ordinalNumber(l,{unit:"quarter"});case"qqq":return s.quarter(l,{width:"abbreviated",context:"standalone"});case"qqqqq":return s.quarter(l,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(l,{width:"wide",context:"standalone"})}},M:function(a,o,s){const l=a.getMonth();switch(o){case"M":case"MM":return Yn.M(a,o);case"Mo":return s.ordinalNumber(l+1,{unit:"month"});case"MMM":return s.month(l,{width:"abbreviated",context:"formatting"});case"MMMMM":return s.month(l,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(l,{width:"wide",context:"formatting"})}},L:function(a,o,s){const l=a.getMonth();switch(o){case"L":return String(l+1);case"LL":return Ye(l+1,2);case"Lo":return s.ordinalNumber(l+1,{unit:"month"});case"LLL":return s.month(l,{width:"abbreviated",context:"standalone"});case"LLLLL":return s.month(l,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(l,{width:"wide",context:"standalone"})}},w:function(a,o,s,l){const u=f1(a,l);return o==="wo"?s.ordinalNumber(u,{unit:"week"}):Ye(u,o.length)},I:function(a,o,s){const l=p1(a);return o==="Io"?s.ordinalNumber(l,{unit:"week"}):Ye(l,o.length)},d:function(a,o,s){return o==="do"?s.ordinalNumber(a.getDate(),{unit:"date"}):Yn.d(a,o)},D:function(a,o,s){const l=h1(a);return o==="Do"?s.ordinalNumber(l,{unit:"dayOfYear"}):Ye(l,o.length)},E:function(a,o,s){const l=a.getDay();switch(o){case"E":case"EE":case"EEE":return s.day(l,{width:"abbreviated",context:"formatting"});case"EEEEE":return s.day(l,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(l,{width:"short",context:"formatting"});case"EEEE":default:return s.day(l,{width:"wide",context:"formatting"})}},e:function(a,o,s,l){const u=a.getDay(),h=(u-l.weekStartsOn+8)%7||7;switch(o){case"e":return String(h);case"ee":return Ye(h,2);case"eo":return s.ordinalNumber(h,{unit:"day"});case"eee":return s.day(u,{width:"abbreviated",context:"formatting"});case"eeeee":return s.day(u,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(u,{width:"short",context:"formatting"});case"eeee":default:return s.day(u,{width:"wide",context:"formatting"})}},c:function(a,o,s,l){const u=a.getDay(),h=(u-l.weekStartsOn+8)%7||7;switch(o){case"c":return String(h);case"cc":return Ye(h,o.length);case"co":return s.ordinalNumber(h,{unit:"day"});case"ccc":return s.day(u,{width:"abbreviated",context:"standalone"});case"ccccc":return s.day(u,{width:"narrow",context:"standalone"});case"cccccc":return s.day(u,{width:"short",context:"standalone"});case"cccc":default:return s.day(u,{width:"wide",context:"standalone"})}},i:function(a,o,s){const l=a.getDay(),u=l===0?7:l;switch(o){case"i":return String(u);case"ii":return Ye(u,o.length);case"io":return s.ordinalNumber(u,{unit:"day"});case"iii":return s.day(l,{width:"abbreviated",context:"formatting"});case"iiiii":return s.day(l,{width:"narrow",context:"formatting"});case"iiiiii":return s.day(l,{width:"short",context:"formatting"});case"iiii":default:return s.day(l,{width:"wide",context:"formatting"})}},a:function(a,o,s){const u=a.getHours()/12>=1?"pm":"am";switch(o){case"a":case"aa":return s.dayPeriod(u,{width:"abbreviated",context:"formatting"});case"aaa":return s.dayPeriod(u,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return s.dayPeriod(u,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(u,{width:"wide",context:"formatting"})}},b:function(a,o,s){const l=a.getHours();let u;switch(l===12?u=Or.noon:l===0?u=Or.midnight:u=l/12>=1?"pm":"am",o){case"b":case"bb":return s.dayPeriod(u,{width:"abbreviated",context:"formatting"});case"bbb":return s.dayPeriod(u,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return s.dayPeriod(u,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(u,{width:"wide",context:"formatting"})}},B:function(a,o,s){const l=a.getHours();let u;switch(l>=17?u=Or.evening:l>=12?u=Or.afternoon:l>=4?u=Or.morning:u=Or.night,o){case"B":case"BB":case"BBB":return s.dayPeriod(u,{width:"abbreviated",context:"formatting"});case"BBBBB":return s.dayPeriod(u,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(u,{width:"wide",context:"formatting"})}},h:function(a,o,s){if(o==="ho"){let l=a.getHours()%12;return l===0&&(l=12),s.ordinalNumber(l,{unit:"hour"})}return Yn.h(a,o)},H:function(a,o,s){return o==="Ho"?s.ordinalNumber(a.getHours(),{unit:"hour"}):Yn.H(a,o)},K:function(a,o,s){const l=a.getHours()%12;return o==="Ko"?s.ordinalNumber(l,{unit:"hour"}):Ye(l,o.length)},k:function(a,o,s){let l=a.getHours();return l===0&&(l=24),o==="ko"?s.ordinalNumber(l,{unit:"hour"}):Ye(l,o.length)},m:function(a,o,s){return o==="mo"?s.ordinalNumber(a.getMinutes(),{unit:"minute"}):Yn.m(a,o)},s:function(a,o,s){return o==="so"?s.ordinalNumber(a.getSeconds(),{unit:"second"}):Yn.s(a,o)},S:function(a,o){return Yn.S(a,o)},X:function(a,o,s){const l=a.getTimezoneOffset();if(l===0)return"Z";switch(o){case"X":return xm(l);case"XXXX":case"XX":return sr(l);case"XXXXX":case"XXX":default:return sr(l,":")}},x:function(a,o,s){const l=a.getTimezoneOffset();switch(o){case"x":return xm(l);case"xxxx":case"xx":return sr(l);case"xxxxx":case"xxx":default:return sr(l,":")}},O:function(a,o,s){const l=a.getTimezoneOffset();switch(o){case"O":case"OO":case"OOO":return"GMT"+fm(l,":");case"OOOO":default:return"GMT"+sr(l,":")}},z:function(a,o,s){const l=a.getTimezoneOffset();switch(o){case"z":case"zz":case"zzz":return"GMT"+fm(l,":");case"zzzz":default:return"GMT"+sr(l,":")}},t:function(a,o,s){const l=Math.trunc(a.getTime()/1e3);return Ye(l,o.length)},T:function(a,o,s){const l=a.getTime();return Ye(l,o.length)}};function fm(a,o=""){const s=a>0?"-":"+",l=Math.abs(a),u=Math.trunc(l/60),h=l%60;return h===0?s+String(u):s+String(u)+o+Ye(h,2)}function xm(a,o){return a%60===0?(a>0?"-":"+")+Ye(Math.abs(a)/60,2):sr(a,o)}function sr(a,o=""){const s=a>0?"-":"+",l=Math.abs(a),u=Ye(Math.trunc(l/60),2),h=Ye(l%60,2);return s+u+o+h}const bm=(a,o)=>{switch(a){case"P":return o.date({width:"short"});case"PP":return o.date({width:"medium"});case"PPP":return o.date({width:"long"});case"PPPP":default:return o.date({width:"full"})}},uh=(a,o)=>{switch(a){case"p":return o.time({width:"short"});case"pp":return o.time({width:"medium"});case"ppp":return o.time({width:"long"});case"pppp":default:return o.time({width:"full"})}},x1=(a,o)=>{const s=a.match(/(P+)(p+)?/)||[],l=s[1],u=s[2];if(!u)return bm(a,o);let h;switch(l){case"P":h=o.dateTime({width:"short"});break;case"PP":h=o.dateTime({width:"medium"});break;case"PPP":h=o.dateTime({width:"long"});break;case"PPPP":default:h=o.dateTime({width:"full"});break}return h.replace("{{date}}",bm(l,o)).replace("{{time}}",uh(u,o))},b1={p:uh,P:x1},y1=/^D+$/,w1=/^Y+$/,v1=["D","DD","YY","YYYY"];function k1(a){return y1.test(a)}function j1(a){return w1.test(a)}function N1(a,o,s){const l=S1(a,o,s);if(console.warn(l),v1.includes(a))throw new RangeError(l)}function S1(a,o,s){const l=a[0]==="Y"?"years":"days of the month";return`Use \`${a.toLowerCase()}\` instead of \`${a}\` (in \`${o}\`) for formatting ${l} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const C1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z1=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,T1=/^'([^]*?)'?$/,E1=/''/g,_1=/[a-zA-Z]/;function ym(a,o,s){const l=wo(),u=l.locale??m1,h=l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1,m=l.weekStartsOn??l.locale?.options?.weekStartsOn??0,g=Xt(a);if(!Lb(g))throw new RangeError("Invalid time value");let x=o.match(z1).map(b=>{const y=b[0];if(y==="p"||y==="P"){const k=b1[y];return k(b,u.formatLong)}return b}).join("").match(C1).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const y=b[0];if(y==="'")return{isToken:!1,value:M1(b)};if(gm[y])return{isToken:!0,value:b};if(y.match(_1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:b}});u.localize.preprocessor&&(x=u.localize.preprocessor(g,x));const w={firstWeekContainsDate:h,weekStartsOn:m,locale:u};return x.map(b=>{if(!b.isToken)return b.value;const y=b.value;(j1(y)||k1(y))&&N1(y,o,String(a));const k=gm[y[0]];return k(g,y,u.localize,w)}).join("")}function M1(a){const o=a.match(T1);return o?o[1].replace(E1,"'"):a}function L1({onNavigate:a}){const{user:o}=vn(),[s,l]=f.useState([]),[u,h]=f.useState(!0),[m,g]=f.useState(new Date().toISOString().split("T")[0]),[x,w]=f.useState(1),b=10,y=1e3;if(!o)return t.jsx("div",{className:"app-wrapper",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"}),t.jsx("p",{className:"text-lg text-gray-600",children:"Đang kiểm tra quyền truy cập..."})]})});if(o.role!=="ADMIN")return t.jsxs("div",{className:"app-wrapper",children:[t.jsxs("div",{className:"text-center max-w-md mx-auto p-8",children:[t.jsx("div",{className:"status-circle-error",children:t.jsx("span",{className:"text-4xl",children:"🚫"})}),t.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Truy cập bị từ chối"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Bạn không có quyền xem trang này. Chỉ Quản trị viên mới được phép."}),t.jsx("button",{onClick:()=>a("mypage"),className:"px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium",children:"Quay lại MyPage"})]}),t.jsx(Rl,{})]});f.useEffect(()=>{(async()=>{const le=localStorage.getItem("accessToken");if(!le){ge.error("Không tìm thấy token!"),setTimeout(()=>a("login"),3e3);return}try{h(!0);const C=await Qe.get("http://localhost:8080/api/admin/activity-logs",{headers:{Authorization:`Bearer ${le}`,"Content-Type":"application/json"},timeout:1e4,withCredentials:!0});let A=[];C.data&&typeof C.data=="object"&&(C.data.data&&Array.isArray(C.data.data)?A=C.data.data:Array.isArray(C.data)?A=C.data:C.data.logs&&Array.isArray(C.data.logs)&&(A=C.data.logs)),A.sort((xe,W)=>new Date(W.timestamp).getTime()-new Date(xe.timestamp).getTime()),l(A),A.length>0&&ge.success(`Đã tải ${A.length} hoạt động!`)}catch(C){C.response?.status===401?(ge.error("Phiên đăng nhập hết hạn!"),setTimeout(()=>a("login"),3e3)):C.response?.status===403?(ge.error("Bạn không có quyền admin!"),setTimeout(()=>a("mypage"),3e3)):C.response?.status===404?ge.error("Endpoint không tồn tại!"):C.response?.status===500?ge.error("Lỗi server!"):ge.error("Lỗi tải lịch sử hoạt động!")}finally{h(!1)}})()},[a]);const k=s.filter(q=>new Date(q.timestamp).toISOString().split("T")[0]===m),I=Math.ceil(k.length/b),j=(x-1)*b,v=j+b,N=k.slice(j,v);f.useEffect(()=>{w(1)},[m]);const V=()=>{a("admin")},O=()=>{h(!0),l([]);const q=localStorage.getItem("accessToken");if(!q){ge.error("Không tìm thấy token!"),setTimeout(()=>a("login"),3e3);return}Qe.get("http://localhost:8080/api/admin/activity-logs",{headers:{Authorization:`Bearer ${q}`}}).then(le=>{let C=[];le.data?.data&&Array.isArray(le.data.data)?C=le.data.data:Array.isArray(le.data)&&(C=le.data),C.sort((A,xe)=>new Date(xe.timestamp).getTime()-new Date(A.timestamp).getTime()),l(C),ge.success(`Đã tải ${C.length} hoạt động!`,{duration:y})}).catch(le=>{ge.error("Lỗi refresh dữ liệu!",{duration:y})}).finally(()=>{h(!1)})},B=q=>{w(q)},G=()=>{w(q=>Math.max(1,q-1))},te=()=>{w(q=>Math.min(I,q+1))},de=async q=>{try{await Ie.delete(`/admin/activity-logs/${q}`),ge.success("Xóa log thành công! 😻");const le=s.filter(C=>C.id!==q);l(le)}catch{ge.error("Xóa log thất bại 😿")}};return t.jsxs("div",{className:"app-container",children:[t.jsxs("div",{className:"main-container",children:[t.jsx("div",{className:"mb-8",children:t.jsxs("div",{className:"responsive-bar",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"sub-info-row",children:[t.jsx("div",{className:"icon-box-purple",children:t.jsx(om,{className:"icon-standard"})}),t.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Lịch sử Hoạt động"})]}),t.jsx("p",{className:"text-gray-600 ml-15",children:"Xem lại các hoạt động của người dùng trong hệ thống"})]}),t.jsxs("div",{className:"flex-row-center",children:[t.jsxs("button",{onClick:O,className:"btn-secondary","aria-label":"Refresh",children:[t.jsx(yo,{className:"w-4 h-4"}),t.jsx("span",{className:"hidden sm:inline",children:"Refresh"})]}),t.jsxs("button",{onClick:V,className:"btn-danger","aria-label":"Back to Dashboard",children:[t.jsx(nh,{className:"w-4 h-4"}),t.jsx("span",{className:"hidden sm:inline",children:"Back"})]})]})]})}),t.jsx("div",{className:"card-container",children:t.jsxs("div",{className:"flex-adaptive-end",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx("label",{className:"label-style",children:"Chọn ngày"}),t.jsxs("div",{className:"relative",children:[t.jsx(Zf,{className:"absolute-icon-center-y"}),t.jsx("input",{type:"date",value:m,onChange:q=>g(q.target.value),className:"date-input",max:new Date().toISOString().split("T")[0]})]})]}),t.jsxs("div",{className:"flex-split-divider",children:[t.jsxs("div",{className:"grid-2-cols",children:[t.jsxs("div",{children:[t.jsx("p",{className:"sub-label-text",children:"Ngày đã chọn"}),t.jsx("p",{className:"text-heading-title",children:ym(new Date(m),"MMM dd, yyyy")})]}),t.jsxs("div",{children:[t.jsx("p",{className:"sub-label-text",children:"Số record"}),t.jsx("p",{className:"text-highlight-title",children:k.length})]})]}),t.jsx("div",{className:"divider-top",children:t.jsxs("p",{className:"text-body-small",children:["Tổng số log trong hệ thống:"," ",t.jsx("span",{className:"text-label-bold",children:s.length})]})})]})]})}),u&&t.jsx("div",{className:"card-spacious",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"spinner"}),t.jsx("p",{className:"text-lg text-gray-600",children:"Đang tải lịch sử hoạt động..."})]})}),!u&&t.jsx("div",{className:"card-container-clean",children:k.length===0?t.jsxs("div",{className:"text-center py-16 px-4",children:[t.jsx("div",{className:"avatar-placeholder-center",children:t.jsx(om,{className:"w-10 h-10 text-gray-400"})}),t.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Không có hoạt động nào"}),t.jsx("p",{className:"text-gray-600 mb-1",children:"Không có hoạt động nào cho ngày đã chọn"}),t.jsx("p",{className:"text-sm text-gray-500",children:"Thử chọn ngày khác hoặc nhấn nút Refresh."})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"scroll-container-x",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"header-surface",children:[t.jsx("th",{className:"table-header",children:"Thời gian"}),t.jsx("th",{className:"table-header",children:"Tên người dùng"}),t.jsx("th",{className:"table-header",children:"Hành động"})]})}),t.jsx("tbody",{className:"divide-y-custom > * + *",children:N.map((q,le)=>t.jsxs("tr",{className:`hover-item ${le%2===0?"bg-white":"bg-gray-50/50"}`,children:[t.jsx("td",{className:"table-cell text-gray-600",children:ym(new Date(q.timestamp),"HH:mm:ss dd/MM/yyyy")}),t.jsx("td",{className:"table-cell",children:t.jsx("span",{className:"font-semibold text-purple-700",children:q.username})}),t.jsx("td",{className:"table-cell text-gray-700",children:q.action}),t.jsx("td",{className:"px-6 py-4 text-right",children:t.jsx("button",{onClick:C=>{C.stopPropagation(),window.confirm("Bạn có chắc chắn muốn xóa log này?")&&de(q.id)},className:"text-red-600 hover:text-red-800 font-medium text-sm",children:"Xóa"})})]},q.id))})]})}),I>1&&t.jsx("div",{className:"card-footer",children:t.jsxs("div",{className:"flex-adaptive-between",children:[t.jsxs("div",{className:"text-sm text-gray-600",children:["Showing"," ",t.jsx("span",{className:"font-medium text-gray-900",children:j+1})," ","to"," ",t.jsx("span",{className:"font-medium text-gray-900",children:Math.min(v,k.length)})," ","of"," ",t.jsx("span",{className:"font-medium text-gray-900",children:k.length})," ","logs"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:G,disabled:x===1,className:"pagination-btn","aria-label":"Previous page",children:t.jsx(dt,{className:"w-5 h-5"})}),t.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:I},(q,le)=>le+1).filter(q=>q===1||q===I||Math.abs(q-x)<=1).map((q,le,C)=>{const A=le>0&&q-C[le-1]>1;return t.jsxs("div",{className:"flex items-center",children:[A&&t.jsx("span",{className:"px-2 text-gray-400",children:"..."}),t.jsx("button",{onClick:()=>B(q),className:`pagination-number ${x===q?"pagination-number-active":""}`,children:q})]},q)})}),t.jsx("button",{onClick:te,disabled:x===I,className:"pagination-btn","aria-label":"Next page",children:t.jsx(xt,{className:"w-5 h-5"})})]})]})})]})})]}),t.jsx("div",{className:"mt-16",children:t.jsx(Rl,{})}),t.jsx("style",{children:`
      .hover-item {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms; /* Tốc độ chuyển đổi mặc định của Tailwind */
}

.hover-item:hover {
  background-color: #f9fafb; /* gray-50 */
}
      .divide-y-custom > * + * {
  border-top-width: 1px;
  border-color: #f3f4f6; /* gray-100 */
}
      .header-surface {
  background-color: #f9fafb; /* gray-50 */
  border-bottom: 1px solid #e5e7eb; /* gray-200 */
}
      .scroll-container-x {
  overflow-x: auto;
  white-space: nowrap; /* Thường dùng để tránh các phần tử xuống dòng */
  -webkit-overflow-scrolling: touch; /* Giúp cuộn mượt hơn trên iOS */
}

/* Tùy chỉnh thanh cuộn cho gọn (Chrome/Safari) */
.scroll-container-x::-webkit-scrollbar {
  height: 4px;
}
.scroll-container-x::-webkit-scrollbar-thumb {
  background: #e5e7eb; /* gray-200 */
  border-radius: 10px;
}
      .card-footer {
  padding-left: 1.5rem;  /* 24px */
  padding-right: 1.5rem; /* 24px */
  padding-top: 1rem;     /* 16px */
  padding-bottom: 1rem;  /* 16px */
  border-top: 1px solid #e5e7eb; /* gray-200 */
  background-color: #f9fafb;     /* gray-50 */
}
      .flex-adaptive-between {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
}

@media (min-width: 640px) {
  .flex-adaptive-between {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
      .avatar-placeholder-center {
  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  background-color: #f3f4f6; /* gray-100 */
  border-radius: 9999px; /* rounded-full */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem; /* 16px */
}
      .card-container-clean {
  background-color: #ffffff;
  border-radius: 1rem; /* 16px */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  overflow: hidden; /* Cắt các phần tử con tràn ra ngoài góc bo tròn */
}
      .spinner {
  animation: spin 1s linear infinite;
  border-radius: 9999px; /* rounded-full */
  height: 3rem; /* 48px */
  width: 3rem;  /* 48px */
  border-bottom-width: 2px;
  border-color: #9333ea; /* border-purple-600 */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem; /* 16px */
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
      .card-spacious {
  background-color: #ffffff;
  border-radius: 1rem; /* 16px */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  padding: 4rem; /* 64px (p-16) */
}
      .text-label-bold {
  font-weight: 600;
  color: #111827; /* gray-900 */
}
      .text-body-small {
  font-size: 0.875rem; /* 14px */
  color: #4b5563; /* gray-600 */
  line-height: 1.25rem; /* 20px */
}
      .divider-top {
  margin-top: 0.75rem; /* 12px */
  padding-top: 0.75rem; /* 12px */
  border-top: 1px solid #f3f4f6; /* gray-100 */
}
      .text-highlight-title {
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
  color: #9333ea; /* purple-600 */
}
      .text-heading-title {
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
  color: #111827; /* gray-900 */
}
      .sub-label-text {
  font-size: 0.75rem; /* 12px */
  color: #6b7280; /* gray-500 */
  margin-bottom: 0.25rem; /* 4px */
}
      .grid-2-cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem; /* 16px */
}
      .flex-split-divider {
  flex: 1 1 0%;
}

@media (min-width: 640px) {
  .flex-split-divider {
    border-left: 1px solid #e5e7eb; /* gray-200 */
    padding-left: 1.5rem; /* 24px */
  }
}
      .absolute-icon-center-y {
  position: absolute;
  left: 0.75rem; /* 12px */
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem; /* 20px */
  height: 1.25rem;
  color: #9ca3af; /* gray-400 */
}
      .label-style {
  display: block;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  color: #374151; /* gray-700 */
  margin-bottom: 0.5rem; /* 8px */
}
      .flex-adaptive-end {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
}

@media (min-width: 640px) {
  .flex-adaptive-end {
    flex-direction: row;
    align-items: flex-end; /* Căn lề dưới các phần tử */
  }
}
      .card-container {
  background-color: #ffffff;
  border-radius: 1rem; /* 16px */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  padding: 1.5rem; /* 24px */
  margin-bottom: 1.5rem;
}
      .flex-row-center {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */
}
      .icon-standard {
  width: 1.5rem;
  height: 1.5rem;
  color: #9333ea;
}
      .icon-box-purple {
  /* w-12 h-12: Kích thước 3rem (48px) - Chuẩn vàng cho UI điện thoại */
  width: 3rem;
  height: 3rem;

  /* bg-purple-100: Màu tím nhạt thanh lịch */
  background-color: #f3e8ff;

  /* rounded-xl: Bo góc 0.75rem (12px), tạo cảm giác "mềm mại nhưng vẫn vững chãi" */
  border-radius: 0.75rem;

  /* flex items-center justify-center: Căn giữa icon hoàn hảo */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Hiệu ứng tương tác */
  transition: all 0.2s ease;
  cursor: pointer;
}

.icon-box-purple:hover {
  background-color: #e9d5ff; /* purple-200 */
  transform: translateY(-2px);
}
      .sub-info-row {
  /* flex items-center: Căn giữa Icon và Chữ theo trục dọc để không bị lệch */
  display: flex;
  align-items: center;

  /* gap-3: Khoảng cách giữa icon và chữ là 0.75rem (12px) */
  gap: 0.75rem;

  /* mb-2: Khoảng cách 8px với dòng bên dưới */
  margin-bottom: 0.5rem;
}
      .responsive-bar {
  display: flex;
  /* Mặc định cho Mobile: Xếp chồng các phần tử theo cột */
  flex-direction: column;
  gap: 1rem; /* gap-4 */
}

/* Từ màn hình Small (sm: 640px) trở lên */
@media (min-width: 640px) {
  .responsive-bar {
    /* Chuyển sang hàng ngang */
    flex-direction: row;
    /* Căn giữa các phần tử theo trục dọc */
    align-items: center;
    /* Đẩy các phần tử ra hai đầu (Ví dụ: Tiêu đề bên trái, Nút bấm bên phải) */
    justify-content: space-between;
  }
}
      .main-container {
  /* max-w-7xl: Giới hạn chiều rộng tối đa khoảng 1280px */
  max-width: 80rem;
  
  /* mx-auto: Căn giữa khối này khi màn hình rộng hơn 1280px */
  margin-left: auto;
  margin-right: auto;

  /* py-8: Khoảng cách trên dưới 2rem (32px) để nội dung không chạm mép trình duyệt */
  padding-top: 2rem;
  padding-bottom: 2rem;

  /* Padding ngang thay đổi theo kích thước màn hình (Responsive Padding) */
  padding-left: 1rem;   /* Mặc định cho Mobile (px-4) */
  padding-right: 1rem;
}

/* Tablet (sm: 640px) */
@media (min-width: 640px) {
  .main-container {
    padding-left: 1.5rem; /* px-6 */
    padding-right: 1.5rem;
  }
}

/* Desktop lớn (lg: 1024px) */
@media (min-width: 1024px) {
  .main-container {
    padding-left: 2rem; /* px-8 */
    padding-right: 2rem;
  }
}
      .app-container {
  /* min-h-screen: Chiều cao tối thiểu bằng 100% khung nhìn người dùng */
  min-height: 100vh;

  /* bg-gray-50: Màu xám cực nhẹ (#f9fafb) */
  background-color: #f9fafb;

  /* Thường đi kèm với Flexbox để căn giữa nội dung */
  display: flex;
  flex-direction: column;
}
      .status-circle-error {
  /* w-20 h-20: Kích thước 80px x 80px */
  width: 5rem;
  height: 5rem;

  /* bg-red-100: Màu nền hồng nhạt nhẹ nhàng */
  background-color: #fee2e2;

  /* rounded-full: Biến hình vuông thành hình tròn hoàn hảo */
  border-radius: 9999px;

  /* flex items-center justify-center: Căn giữa icon bên trong tuyệt đối */
  display: flex;
  align-items: center;
  justify-content: center;

  /* mx-auto mb-6: Căn giữa khối và tạo khoảng cách 24px với nội dung dưới */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  
  /* Hiệu ứng xuất hiện (tùy chọn) */
  animation: scale-up 0.3s ease-out;
}

@keyframes scale-up {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
      .app-wrapper {
  /* min-h-screen: Chiều cao tối thiểu bằng 100% chiều cao màn hình thiết bị */
  min-height: 100vh;

  /* flex items-center justify-center: "Phép thuật" căn giữa mọi thứ */
  display: flex;
  align-items: center;     /* Căn giữa theo chiều dọc */
  justify-content: center;  /* Căn giữa theo chiều ngang */

  /* bg-gray-50: Màu trắng khói, giúp các khối màu trắng (như Flashcard) nổi bật lên */
  background-color: #f9fafb;
  
  /* Đảm bảo nội dung không dính sát mép trên Mobile */
  padding: 1.5rem;
}
        /* Button Styles */
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          color: #374151;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 0.75rem;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background-color: #f9fafb;
          border-color: #d1d5db;
        }

        .btn-danger {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 0.75rem;
          transition: all 0.2s;
        }

        .btn-danger:hover {
          background-color: #fee2e2;
          border-color: #fca5a5;
        }

        /* Date Input */
        .date-input {
          width: 100%;
          padding: 0.625rem 1rem 0.625rem 2.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.875rem;
          color: #111827;
          transition: all 0.2s;
        }

        .date-input:focus {
          outline: none;
          border-color: #7c3aed;
          ring: 2px;
          ring-color: rgba(124, 58, 237, 0.1);
        }

        /* Table Styles */
        .table-header {
          padding: 1rem 1.5rem;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #6b7280;
        }

        .table-cell {
          padding: 1rem 1.5rem;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* Pagination Styles */
        .pagination-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border: 1px solid #e5e7eb;
          background-color: #ffffff;
          color: #6b7280;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }

        .pagination-btn:hover:not(:disabled) {
          background-color: #f9fafb;
          border-color: #d1d5db;
          color: #111827;
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.5rem;
          height: 2.5rem;
          padding: 0 0.5rem;
          border: 1px solid transparent;
          background-color: transparent;
          color: #6b7280;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }

        .pagination-number:hover {
          background-color: #f3f4f6;
          color: #111827;
        }

        .pagination-number-active {
          background-color: #7c3aed;
          color: #ffffff;
          border-color: #7c3aed;
        }

        .pagination-number-active:hover {
          background-color: #6d28d9;
          color: #ffffff;
        }

        /* Responsive Table */
        @media (max-width: 640px) {
          .table-header,
          .table-cell {
            padding: 0.75rem 1rem;
            font-size: 0.8125rem;
          }
        }
      `})]})}function mh({character:a,type:o,onClose:s}){const l=f.useRef(null),[u,h]=f.useState(!1);f.useEffect(()=>{if(!a)return;let g=!0;return h(!0),(async()=>{const w=Array.from(a.character);try{const b=await Promise.all(w.map(async j=>{const v=j.charCodeAt(0).toString(16).padStart(5,"0"),N=await fetch(`https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${v}.svg`);return N.ok?await N.text():null}));if(!g||!l.current)return;l.current.innerHTML="";const y=document.createElement("div");y.className="svg-composite-wrapper";let k=0;const I=new DOMParser;b.forEach((j,v)=>{if(!j)return;const V=I.parseFromString(j,"image/svg+xml").documentElement;V.removeAttribute("width"),V.removeAttribute("height"),V.setAttribute("preserveAspectRatio","xMidYMid meet"),V.classList.add(v===0?"main-svg":"sub-svg"),V.querySelectorAll("text").forEach(B=>B.style.display="none"),V.querySelectorAll("path").forEach(B=>{const G=B,te=G.getTotalLength();G.style.strokeDasharray=`${te}`,G.style.strokeDashoffset=`${te}`;const de=k*.25;G.style.animation=`draw-stroke 0.7s ease-in-out ${de}s forwards`,G.style.stroke="#1e293b",G.style.strokeWidth="8",G.style.fill="none",G.style.strokeLinecap="round",k++}),y.appendChild(V)}),y.children.length===0?l.current.innerHTML='<div class="error-msg">Dữ liệu nét vẽ đang được cập nhật</div>':l.current.appendChild(y)}catch(b){console.error("SVG Render Error:",b)}finally{g&&h(!1)}})(),()=>{g=!1,l.current&&(l.current.innerHTML="")}},[a]);const m=g=>{g.stopPropagation();const x=l.current?.querySelectorAll("path");x&&x.forEach((w,b)=>{const y=w;y.style.animation="none",y.getBoundingClientRect();const k=y.getTotalLength();y.style.strokeDashoffset=`${k}`,y.style.animation=`draw-stroke 0.7s ease-in-out ${b*.25}s forwards`})};return a?t.jsx("div",{className:"modal-backdrop",onClick:g=>g.target===g.currentTarget&&s(),children:t.jsxs("div",{className:"modal-card",children:[t.jsxs("div",{className:"modal-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("h2",{className:"title-text",children:["Chi tiết ",o==="hiragana"?"Hiragana":"Katakana"]}),t.jsx("span",{className:`type-badge ${o}`,children:o==="hiragana"?"ひらがな":"カタカナ"})]}),t.jsx("button",{onClick:s,className:"btn-close",children:t.jsx(Kr,{size:20})})]}),t.jsxs("div",{className:"modal-content",children:[t.jsxs("div",{className:"visual-grid",children:[t.jsxs("div",{className:"display-box-wrapper",children:[t.jsx("div",{className:"display-box grid-paper",children:t.jsxs("div",{className:`char-static-container ${a.character.length>1?"is-compound":""}`,children:[t.jsx("span",{className:"char-unit",children:a.character[0]}),a.character[1]&&t.jsx("span",{className:"char-unit sub",children:a.character[1]})]})}),t.jsx("div",{className:"box-caption",children:"Ký tự mẫu"})]}),t.jsxs("div",{className:"display-box-wrapper",children:[t.jsxs("div",{className:"display-box grid-paper svg-render-area",children:[t.jsx("div",{ref:l,style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}),u&&t.jsx("div",{className:"loading-spinner-overlay",children:t.jsx("div",{className:"loading-spinner"})})]}),t.jsxs("button",{onClick:m,className:"btn-replay",disabled:u,children:[t.jsx(oh,{size:16}),t.jsx("span",{children:"Xem nét vẽ"})]})]})]}),t.jsxs("div",{className:"info-layout",children:[t.jsx("div",{className:"info-column",children:t.jsxs("div",{className:"info-group",children:[t.jsx("label",{className:"label-caps",children:"Cách đọc (Romaji)"}),t.jsx("div",{className:"val-romaji",children:a.romanji})]})}),t.jsx("div",{className:"info-column",children:t.jsxs("div",{className:"info-group",children:[t.jsx("label",{className:"label-caps",children:"Loại chữ"}),t.jsxs("div",{className:"desc-card",children:[t.jsx("p",{className:"desc-highlight",children:o==="hiragana"?"Chữ mềm":"Chữ cứng"}),t.jsx("p",{className:"desc-sub",children:a.character.length>1?"Âm ghép (Yoon)":"Âm đơn"})]})]})})]})]}),t.jsx("style",{children:`
          .modal-backdrop { position: fixed; inset: 0; z-index: 999; background: rgba(15,23,42,0.8); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; padding: 1.5rem; }
          .modal-card { background: white; width: 100%; max-width: 800px; border-radius: 2rem; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); max-height: 95vh; display: flex; flex-direction: column; }
          .modal-header { padding: 1.5rem 2rem; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; }
          .header-left { display: flex; align-items: center; gap: 1rem; }
          .title-text { font-size: 1.25rem; font-weight: 800; color: #0f172a; }
          .type-badge { padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.75rem; font-weight: 700; }
          .type-badge.hiragana { background: #eff6ff; color: #2563eb; }
          .type-badge.katakana { background: #fef2f2; color: #dc2626; }
          .btn-close { background: #f8fafc; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; color: #64748b; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
          .btn-close:hover { background: #fee2e2; color: #ef4444; transform: rotate(90deg); }
          .modal-content { padding: 2rem; overflow-y: auto; }
          .visual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2.5rem; }
          .display-box-wrapper { display: flex; flex-direction: column; align-items: center; width: 100%; }
          .display-box { width: 100%; aspect-ratio: 1/1; max-width: 280px; background: white; border: 2px solid #e2e8f0; border-radius: 1.25rem; position: relative; overflow: hidden; }
          .grid-paper { background-image: linear-gradient(to right, #f1f5f9 2px, transparent 2px), linear-gradient(to bottom, #f1f5f9 2px, transparent 2px); background-size: 50% 50%; background-position: center; }
          .char-static-container { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
          .char-unit { font-size: 10rem; font-family: serif; color: #1e293b; line-height: 1; flex: 1; text-align: center; }
          .is-compound { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: -1rem; /* Tạo khoảng cách âm nếu cần */
}

.is-compound .char-unit { 
  font-size: 7.5rem; /* Tăng nhẹ kích thước chữ chính */
  flex: 0 1 auto; 
  margin-right: -0.5rem; /* Kéo chữ chính về bên phải */
}
  .is-compound .char-unit.sub { 
  font-size: 4.5rem; 
  flex: 0 1 auto; 
  align-self: flex-end; 
  margin-bottom: 12%; 
  margin-left: -1.5rem;
}
          .svg-composite-wrapper { display: flex; align-items: center; justify-content: center; width: 90%; height: 90%; }
          .main-svg { flex: 0.7; height: 85%; width: auto; }
          .sub-svg { flex: 0.4; height: 55%; width: auto; align-self: flex-end; margin-bottom: 5%; margin-left: -5%; }
          .btn-replay { margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem; background: #0f172a; color: white; padding: 0.75rem 1.5rem; border-radius: 0.75rem; border: none; cursor: pointer; font-size: 0.875rem; font-weight: 600; }
          .btn-replay:disabled { opacity: 0.5; cursor: not-allowed; }
          .info-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
          .val-romaji { font-size: 2.5rem; font-weight: 900; color: #2563eb; }
          .val-strokes { font-size: 2rem; font-weight: 800; }
          .desc-card { background: #f8fafc; padding: 1rem; border-radius: 0.75rem; border-left: 4px solid #3b82f6; }
          .loading-spinner-overlay { position: absolute; inset: 0; display: flex; items-center; justify-content: center; background: rgba(255,255,255,0.7); z-index: 10; }
          .loading-spinner { width: 40px; height: 40px; border: 4px solid #f1f5f9; border-top: 4px solid #3b82f6; border-radius: 50%; animation: spin 1s linear infinite; }
          @keyframes draw-stroke { to { stroke-dashoffset: 0; } }
          @keyframes spin { to { transform: rotate(360deg); } }
          @media (max-width: 640px) { .visual-grid, .info-layout { grid-template-columns: 1fr; } }
        `})]})}):null}function hh({isOpen:a,onClose:o,lessons:s,selectedIds:l,onSelectedChange:u,onConfirm:h,type:m}){if(!a)return null;const g=l.size,x=s.filter(w=>l.has(w.id)).reduce((w,b)=>w+b.total_characters,0);return t.jsxs("div",{className:"modal-overlay",children:[t.jsxs("div",{className:"modal-container",children:[t.jsxs("div",{className:"modal-header",children:[t.jsxs("div",{children:[t.jsxs("h2",{className:"modal-title",children:["Luyện tập ",m==="hiragana"?"Hiragana":"Katakana"]}),t.jsx("p",{className:"modal-subtitle",children:"Chọn các bài học để bắt đầu thử thách ngay!"})]}),t.jsx("button",{onClick:o,className:"close-btn",children:"×"})]}),t.jsx("div",{className:"lesson-grid",children:s.map(w=>{const b=l.has(w.id);return t.jsxs("label",{className:`lesson-card ${b?"active":""}`,children:[t.jsxs("div",{className:"checkbox-wrapper",children:[t.jsx("input",{type:"checkbox",checked:b,onChange:y=>{const k=new Set(l);y.target.checked?k.add(w.id):k.delete(w.id),u(k)}}),t.jsx("span",{className:"custom-checkbox"})]}),t.jsxs("div",{className:"lesson-info",children:[t.jsxs("span",{className:"lesson-label",children:["Bài ",w.id]}),t.jsx("p",{className:"lesson-name",children:w.title}),t.jsxs("p",{className:"lesson-stats",children:[w.total_characters," ký tự"]})]})]},w.id)})}),t.jsx("div",{className:"modal-footer",children:t.jsxs("button",{onClick:h,disabled:g===0,className:"confirm-btn",children:[t.jsx("span",{children:"Bắt đầu ôn tập"}),g>0&&t.jsxs("small",{className:"btn-badge",children:[g," bài • ",x," ký tự"]})]})})]}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .modal-container {
          background: #ffffff;
          width: 100%;
          max-width: 650px;
          max-height: 85vh;
          border-radius: 32px;
          padding: 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 8px 0;
          background: linear-gradient(90deg, #6366f1, #d946ef);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .modal-subtitle {
          color: #64748b;
          font-size: 0.95rem;
          margin: 0;
        }

        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
          transform: rotate(90deg);
        }

        .lesson-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          overflow-y: auto;
          padding-right: 8px;
          margin-bottom: 30px;
        }

        /* Responsive cho mobile */
        @media (max-width: 640px) {
          .lesson-grid { grid-template-columns: 1fr; }
          .modal-container { padding: 24px; }
        }

        .lesson-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: 20px;
          border: 2px solid #f1f5f9;
          background: #fff;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .lesson-card:hover {
          border-color: #e2e8f0;
          background: #f8fafc;
          transform: translateY(-2px);
        }

        .lesson-card.active {
          border-color: #6366f1;
          background: #f5f3ff;
          box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.1);
        }

        /* Checkbox Custom */
        .checkbox-wrapper {
          position: relative;
          width: 24px;
          height: 24px;
        }

        .checkbox-wrapper input {
          opacity: 0;
          position: absolute;
          cursor: pointer;
        }

        .custom-checkbox {
          position: absolute;
          top: 0;
          left: 0;
          height: 24px;
          width: 24px;
          background-color: #fff;
          border: 2px solid #cbd5e1;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .lesson-card.active .custom-checkbox {
          background-color: #6366f1;
          border-color: #6366f1;
        }

        .custom-checkbox:after {
          content: "";
          position: absolute;
          display: none;
          left: 7px;
          top: 3px;
          width: 6px;
          height: 11px;
          border: solid white;
          border-width: 0 2.5px 2.5px 0;
          transform: rotate(45deg);
        }

        .lesson-card.active .custom-checkbox:after {
          display: block;
        }

        .lesson-info {
          display: flex;
          flex-direction: column;
        }

        .lesson-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.05em;
        }

        .lesson-name {
          font-weight: 700;
          color: #334155;
          margin: 2px 0;
        }

        .lesson-stats {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
        }

        .modal-footer {
          display: flex;
          justify-content: center;
        }

        .confirm-btn {
          width: 100%;
          padding: 18px;
          border-radius: 20px;
          border: none;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
        }

        .confirm-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 25px -5px rgba(99, 102, 241, 0.5);
          filter: brightness(1.1);
        }

        .confirm-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .confirm-btn:disabled {
          background: #cbd5e1;
          box-shadow: none;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .btn-badge {
          font-size: 0.8rem;
          opacity: 0.9;
          font-weight: 400;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Scrollbar tinh tế */
        .lesson-grid::-webkit-scrollbar { width: 6px; }
        .lesson-grid::-webkit-scrollbar-track { background: transparent; }
        .lesson-grid::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}})]})}const Nl=12,Sl=12;function P1({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState([]),[h,m]=f.useState(null),[g,x]=f.useState(1),[w,b]=f.useState(1),[y,k]=f.useState(!0),[I,j]=f.useState(""),[v,N]=f.useState(null),[V,O]=f.useState(!1),[B,G]=f.useState(!1),[te,de]=f.useState(new Set);f.useEffect(()=>{(async()=>{try{k(!0);const ue=await Ie.get("/hiragana");let he=ue.data.data||ue.data.hiragana||ue.data;if(Array.isArray(he)){const ne=he.map(M=>({id:M.id,character:M["`character`"]||M.character||"?",romanji:M.romanji||"",unicode:M.unicode||"",stroke_order:M.stroke_order||0}));await new Promise(M=>setTimeout(M,600)),s(ne),u(q(ne))}else j("Không thể đọc dữ liệu từ server.")}catch{j("Lỗi kết nối server.")}finally{setTimeout(()=>k(!1),600)}})()},[]);const q=P=>{const ue=["Nguyên âm","Hàng KA","Hàng SA","Hàng TA","Hàng NA","Hàng HA","Hàng MA","Hàng YA","Hàng RA","Hàng WA","Hàng GA (゛)","Hàng ZA (゛)","Hàng DA (゛)","Hàng BA (゛)","Hàng PA (゜)","Âm ghép (Yoon)"];return[P.slice(0,5),P.slice(5,10),P.slice(10,15),P.slice(15,20),P.slice(20,25),P.slice(25,30),P.slice(30,35),P.slice(35,38),P.slice(38,43),P.slice(43,46),P.slice(46,51),P.slice(51,56),P.slice(56,61),P.slice(61,66),P.slice(66,71),P.slice(71,P.length)].map((ne,M)=>({id:M+1,title:ue[M]||`Nhóm ${M+1}`,description:`Học các ký tự ${ue[M]||"nhóm"}`,total_characters:ne.length,characters:ne}))},le=()=>{G(!0),de(h?new Set([h.id]):new Set)},C=()=>{if(te.size===0){O(!0);return}const ue=l.filter(X=>te.has(X.id)).flatMap(X=>X.characters),he=Array.from(new Map(ue.map(X=>[X.character,X])).values()),ne=[...he].sort(()=>Math.random()-.5),M={type:"hiragana",lessonTitle:`Ôn ${te.size} bài (${he.length} ký tự)`,characters:ne};localStorage.setItem("nekoFlashcardHiraKata",JSON.stringify(M)),G(!1),a("flashcard-hirakata")},A=Math.ceil(l.length/Nl),xe=l.slice((g-1)*Nl,g*Nl),W=h?.characters.slice((w-1)*Sl,w*Sl)||[],Y=Math.ceil((h?.characters.length||0)/Sl);return y?t.jsx(Pt,{message:"Mèo đang chuẩn bị bảng chữ cái..."}):t.jsxs("div",{className:"min-h-screen",children:[t.jsxs("main",{className:"relative z-10 container mx-auto px-4 py-12",children:[t.jsx("div",{className:"text-center mb-12",children:t.jsx("h1",{className:"relative z-10 mb-12 md:mb-16",children:t.jsx("span",{className:"hero-section-title hero-text-glow",children:"Học Hiragana"})})}),h?t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"flex flex-col items-center mb-12",children:[t.jsx("div",{className:"lesson-header-container",children:t.jsx("div",{className:"header-wrapper",children:t.jsx("h2",{className:"text-4xl hero-text-glow text-white mb-6",children:h.title})})}),t.jsx("button",{onClick:()=>m(null),className:"button py-3 px-8 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all font-bold",children:"← Quay lại danh sách"})]}),t.jsx("div",{className:"grid-container",children:W.map(P=>t.jsx("div",{className:"glassmorphism-card animate-fade-in group cursor-pointer",onClick:()=>N(P),children:t.jsx("div",{className:"text-center space-y-4",children:t.jsx("p",{className:"text-7xl font-light text-black group-hover:scale-110 transition-transform",style:{fontFamily:"'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif"},children:P.character})})},P.id))}),Y>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-16",children:[t.jsx("button",{className:"custom-button",onClick:()=>b(P=>Math.max(1,P-1)),disabled:w===1,children:t.jsx(dt,{className:"w-6 h-6 text-black"})}),t.jsx("button",{className:"custom-button",onClick:()=>b(P=>Math.min(Y,P+1)),disabled:w===Y,children:t.jsx(xt,{className:"w-6 h-6 text-black"})})]})]}):t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",children:xe.map(P=>t.jsxs("button",{onClick:()=>{m(P),b(1)},className:"responsive-hover-card animate-fade-in",children:[t.jsx("div",{className:"text-gray-800 animate-pulse-soft flex justify-center",children:t.jsx(tt,{className:"relative w-full h-full"})}),t.jsxs("div",{className:"text-center py-6",children:[t.jsxs("p",{className:"hero-text-glow text-white text-4xl",children:["Bài ",P.id]}),t.jsx("p",{className:"hero-text-glow text-2xl text-white mt-2 px-4 line-clamp-1",children:P.title})]})]},P.id))}),A>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-12",children:[t.jsx("button",{className:"custom-button",onClick:()=>x(P=>Math.max(1,P-1)),disabled:g===1,children:t.jsx(dt,{className:"w-6 h-6 text-black"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:A},(P,ue)=>t.jsx("button",{onClick:()=>x(ue+1),className:`rounded-full w-10 h-10 flex items-center justify-center transition-all ${g===ue+1?"bg-white text-purple-600 font-bold scale-110 shadow-lg":"bg-white/20 text-white"}`,children:ue+1},ue))}),t.jsx("button",{className:"custom-button",onClick:()=>x(P=>Math.min(A,P+1)),disabled:g===A,children:t.jsx(xt,{className:"w-6 h-6 text-black"})})]})]})]}),t.jsx("div",{className:"fixed bottom-10 right-10 z-50 hidden lg:block",children:t.jsxs("div",{className:"relative group cursor-pointer",onClick:le,children:[t.jsx("div",{className:"tooltip-slide-out",children:t.jsxs("div",{className:"colored-border-label",children:[t.jsx("p",{className:"text-xl font-bold",children:"Chọn bài để ôn Flashcard! 🐾"}),t.jsx("div",{className:"absolute bottom-0 right-8 translate-y-full",children:t.jsx("div",{className:"triangle-down-pink"})})]})}),t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:"responsive-circular-image-hover"}),t.jsx("div",{className:"circular-gradient-hover-glow"})]})}),t.jsx(hh,{isOpen:B,onClose:()=>G(!1),lessons:l,selectedIds:te,onSelectedChange:de,onConfirm:C,type:"hiragana"}),v&&t.jsx(mh,{character:{...v,strokeOrder:v.stroke_order},type:"hiragana",onClose:()=>N(null)}),t.jsx(Lt,{isOpen:V,onClose:()=>O(!1),title:"Meow meow...",message:"Hãy chọn ít nhất 1 bài để ôn flashcard nhé!"}),t.jsx("style",{children:`
      /* Mặc định cho thiết bị di động (grid-cols-2) */
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem; /* Tương đương gap-6 (6 * 0.25rem) */
}

/* Cho màn hình Medium - Tablet (md:grid-cols-5) */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

/* Cho màn hình Large - Desktop (lg:grid-cols-5) */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
      .lesson-header-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.header-wrapper {
  transform: translateY(-20px); /* Điều chỉnh số này (ví dụ -30px, -40px) để đẩy cao hơn */
  transition: transform 0.3s ease; /* Hiệu ứng mượt nếu tiêu đề thay đổi */
}
      .circular-gradient-hover-glow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 9999px;
  background-image: linear-gradient(to right, 
    rgba(244, 114, 182, 0.3), /* Pink-400/30 */
    rgba(168, 85, 247, 0.3)  /* Purple-400/30 */
  );
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  filter: blur(24px); 
}

.group:hover .circular-gradient-hover-glow {
  opacity: 1;
}

      @keyframes fly {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(-1deg);
  }
}

.responsive-circular-image-hover {
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  object-fit: cover;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: fly 6s ease-in-out infinite; 
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
  transform: scale(1) rotate(0deg);
  transition: all 300ms ease-in-out;
  border-width: 4px;
  border-style: solid;
  border-color: #f9a8d4;
}

@media (min-width: 640px) {
  .responsive-circular-image-hover {
    width: 6rem;
    height: 6rem;
  }
}

@media (min-width: 768px) {
  .responsive-circular-image-hover {
    width: 7rem;
    height: 7rem;
  }
}

@media (min-width: 1024px) {
  .responsive-circular-image-hover {
    width: 8rem;
    height: 8rem;
  }
}

@media (min-width: 1280px) {
  .responsive-circular-image-hover {
    width: 9rem;
    height: 9rem;
  }
}

.group:hover .responsive-circular-image-hover {
  transform: scale(1.1) rotate(12deg);
}
      .triangle-down-pink {
  width: 0;
  height: 0;
  border-left-width: 8px;
  border-left-style: solid;
  border-left-color: transparent;
  border-right-width: 8px;
  border-right-style: solid;
  border-right-color: transparent;
  border-top-width: 8px;
  border-top-style: solid;
  border-top-color: #f9a8d4;
}

      .colored-border-label {
  background-color: #ffffff;
  color: #6d28d9;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  border-width: 4px;
  border-style: solid;
  border-color: #f9a8d4;
}
      .tooltip-slide-out {
  position: absolute;
  bottom: 100%; 
  margin-bottom: 1rem; 
  right: 0; 
  transform: translateX(2rem); 
  opacity: 0; 
  transition: all 500ms ease-in-out; 
  pointer-events: none;
}

.group:hover .tooltip-slide-out {
  opacity: 1; 
  transform: translateX(0); 
}
      .pulsing-animation {
  /* Khai báo animation: pulse, chu kỳ 2s, lặp vô hạn, timing function default */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Định nghĩa keyframes cho hiệu ứng pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1; /* Bắt đầu và kết thúc với độ mờ đầy đủ */
  }
  50% {
    opacity: 0.4; /* Giảm độ mờ xuống 40% ở giữa chu kỳ */
  }
}
      .bold-subheading-style {
  /* text-2xl */
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* opacity-90 */
  opacity: 0.9; 
  
  /* mt-2 */
  margin-top: 0.5rem; /* 8px */
}
  .responsive-hover-card {
  /* group */
  /* Lớp đánh dấu cho phần tử cha, không có thuộc tính CSS trực tiếp. */
  
  /* relative */
  position: relative;
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); /* Nền trắng mờ 80% */
  
  /* rounded-[32px] */
  border-radius: 2rem; /* 32px */
  
  /* p-8 */
  padding: 2rem; /* 32px */
  
  /* transition-all duration-500 */
  transition: all 500ms ease-in-out; 
  
  /* overflow-hidden */
  overflow: hidden; 
}

/* hover:scale-105 */
.responsive-hover-card:hover {
  transform: scale(1.05); /* Phóng to 5% khi di chuột */
}
      .pulsing-centered-text {
  /* text-center */
  text-align: center;
  
  /* text-white */
  color: #ffffff;
  
  /* font-bold */
  font-weight: 700;
  
  /* text-xl */
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  
  /* mb-6 */
  margin-bottom: 1.5rem; /* 24px */
  
  /* animate-pulse */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Keyframes cho hiệu ứng pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
      .full-screen-gradient-center {
  /* min-h-screen */
  min-height: 100vh; /* Chiều cao tối thiểu bằng chiều cao của viewport */
  
  /* flex */
  display: flex;
  
  /* items-center */
  align-items: center; /* Căn giữa dọc các item con */
  
  /* justify-center */
  justify-content: center; /* Căn giữa ngang các item con */
  
  /* bg-gradient-to-br */
  background-image: linear-gradient(to bottom right, #581c87, #831843);
  /* from-purple-900 (#581c87) */
  /* to-pink-900 (#831843) */
}
      .centered-circle-transition {
  /* rounded-full */
  border-radius: 9999px; 
  
  /* transition-all duration-200 */
  transition: all 200ms ease-in-out; 
  
  /* flex */
  display: flex;
  
  /* items-center */
  align-items: center; /* Căn giữa dọc */
  
  /* justify-center */
  justify-content: center; /* Căn giữa ngang */
}
      .glassmorphism-card {
  /* bg-white */
  background-color: #ffffff;
  /* rounded-[32px] (Ưu tiên giá trị tùy chỉnh này) */
  border-radius: 2rem; /* 32px */
  
  /* p-8 */
  padding: 2rem; /* 32px */
  
  /* border-2 */
  border-width: 2px;
  
  /* border-white/40 */
  border-color: rgba(255, 255, 255, 0.4); 
  
  /* transition-all duration-400 */
  transition: all 400ms ease-in-out; 
  
  /* shadow-xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

/* Các hiệu ứng hover */
.glassmorphism-card:hover {
  /* hover:border-pink-400 */
  border-color: #f472b6; 
  
  /* hover:bg-white/80 */
  background-color: rgba(255, 255, 255, 0.80); 
  
  /* hover:scale-105 */
  transform: scale(1.05);
}
      .small-white-rainbow-glow {
  /* text-lg */
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  
  /* text-white */
  color: #ffffff; 
  
  /* mt-2 */
  margin-top: 0.5rem; /* 8px */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền để chữ sáng hơn */
    0 0 3px rgba(255, 255, 255, 0.9),
    /* Các lớp bóng mờ màu neon chính */
    0 0 8px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 12px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 16px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
}
      .white-rainbow-glow-bold {
  /* text-3xl */
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* text-white */
  color: #ffffff; 
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Tập trung vào các lớp bóng mờ màu neon để làm nổi bật chữ trắng */
  text-shadow: 
    /* Lớp bóng mờ trắng nhẹ làm nền */
    0 0 4px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon chính */
    0 0 10px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 15px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 20px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
    
  /* drop-shadow-lg bị loại bỏ do không phù hợp với hiệu ứng glow của chữ trắng */
  filter: none; /* Đảm bảo không có drop-shadow */
}
      
      .small-rainbow-glow {
  /* text-2xl */
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  
  /* text-white */
  color: #ffffff; 
  
  /* mt-1 */
  margin-top: 0.25rem; /* 4px */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền */
    0 0 2px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon */
    0 0 5px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 8px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 12px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
}
      .rainbow-glow-title {
  /* text-4xl */
  font-size: 2.25rem; /* 36px */
  line-height: 2.5rem; /* 40px */
  
  /* font-black */
  font-weight: 900; 
  
  /* text-white */
  color: #ffffff; /* Giữ nguyên màu chữ trắng */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow, không dùng filter: drop-shadow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền */
    0 0 4px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon */
    0 0 10px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 15px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 20px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
    
    /* Có thể thêm các màu khác nếu muốn đầy đủ dải cầu vồng */
}
      .full-gradient-hover-effect {
  /* absolute */
  position: absolute;
  
  /* inset-0 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; /* Bao phủ hoàn toàn phần tử cha */
  
  /* rounded-2xl */
  border-radius: 1rem; /* 16px */
  
  /* bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 */
  background: linear-gradient(to right, #ec4899, #a855f7, #06b6d4);
  
  /* opacity-0 */
  opacity: 0;
  
  /* blur-xl */
  filter: blur(20px); 
  
  /* transition-opacity duration-500 */
  transition: opacity 500ms ease-in-out;
  
  /* -z-10 */
  z-index: -10; /* Đặt lớp này ra phía sau nội dung chính */
}

/* group-hover:opacity-100 (Áp dụng khi di chuột qua phần tử cha có class 'group') */
.group:hover .full-gradient-hover-effect {
  opacity: 1;
}
      .glass-card-hover-effect {
  /* relative */
  position: relative;
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); /* Nền trắng mờ 80% */
  
  /* border */
  border-width: 1px; 
  
  /* border-white/30 */
  border-color: rgba(255, 255, 255, 0.3); 
  
  /* rounded-2xl */
  border-radius: 1rem; /* 16px */
  
  /* p-6 */
  padding: 1.5rem; /* 24px */
  
  /* transition-all duration-400 */
  transition: all 400ms ease-in-out; 
  
  /* shadow-xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); 
}

/* hover:border-pink-400, hover:bg-white/20, hover:scale-[1.02], hover:shadow-2xl, hover:shadow-pink-500/30 */
.glass-card-hover-effect:hover {
  /* hover:border-pink-400 */
  border-color: #f472b6; 
  
  /* hover:bg-white/20 */
  background-color: rgba(255, 255, 255, 0.2); 
  
  /* hover:scale-[1.02] */
  transform: scale(1.02);
  
  /* hover:shadow-2xl (Kết hợp với shadow màu hồng) */
  box-shadow: 
    /* shadow-2xl */
    0 25px 50px -12px rgba(0, 0, 0, 0.25), 
    /* hover:shadow-pink-500/30 */
    0 0 15px rgba(236, 72, 153, 0.3); /* Giá trị gần đúng cho shadow màu hồng */
}
      .transparent-search-input {
  /* w-full */
  width: 100%;
  
  /* py-8 */
  padding-top: 2rem;    /* 32px */
  padding-bottom: 2rem; /* 32px */
  
  /* pl-28 */
  padding-left: 7rem;   /* 112px */
  
  /* pr-10 */
  padding-right: 2.5rem; /* 40px */
  
  /* text-3xl */
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  
  /* font-black */
  font-weight: 900; 
  
  /* text-white */
  color: #ffffff; 
  
  /* bg-transparent */
  background-color: transparent; 
  
  /* text-center */
  text-align: center; 
}

/* focus:outline-none */
.transparent-search-input:focus {
  outline: 0; /* Loại bỏ viền focus mặc định của trình duyệt */
}

/* placeholder:text-white/70 và placeholder:font-bold */
.transparent-search-input::placeholder {
  color: rgba(255, 255, 255, 0.7); /* Màu trắng mờ 70% */
  font-weight: 700; /* In đậm */
}
      .element-overlay-positioned {
  /* absolute */
  position: absolute;
  
  /* left-8 */
  left: 2rem; /* 32px */
  
  /* top-1/2 */
  top: 50%;
  
  /* -translate-y-1/2 */
  transform: translateY(-50%); /* Căn giữa dọc */
  
  /* pointer-events-none */
  pointer-events: none; /* NGĂN CHẶN tương tác chuột/chạm */
  
  /* z-20 */
  z-index: 20; 
}
      .icon-centered-left {
  /* absolute */
  position: absolute;
  
  /* left-8 */
  left: 2rem; /* 32px */
  
  /* top-1/2 */
  top: 50%;
  
  /* -translate-y-1/2 */
  transform: translateY(-50%); /* Dùng để căn giữa dọc (Vertical centering) */
  
  /* w-12 */
  width: 3rem; /* 48px */
  
  /* h-12 */
  height: 3rem; /* 48px */
  
  /* text-white */
  color: #ffffff;
  
  /* z-20 */
  z-index: 20; 
  
  /* drop-shadow-neon (CSS Tùy chỉnh gần đúng cho hiệu ứng neon) */
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px #f472b6);
  /* Hoặc sử dụng text-shadow nếu đây là icon dạng chữ: */
  /* text-shadow: 0 0 5px #fff, 0 0 10px #f472b6; */
}
      .glass-effect-container {
  /* relative */
  position: relative;
  
  /* bg-black/50 */
  background-color: rgba(0, 0, 0, 0.5); /* Nền đen mờ 50% */
  
  /* backdrop-blur-2xl */
  backdrop-filter: blur(40px); /* Hiệu ứng làm mờ nền phía sau */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* border-4 */
  border-width: 4px; 
  
  /* border-white/40 */
  border-color: rgba(255, 255, 255, 0.4); /* Viền trắng mờ 40% */
  
  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Bóng lớn */
  
  /* ring-8 ring-white/10 (Tạo hiệu ứng "ring" bằng box-shadow inset hoặc outline/viền thứ hai) */
  /* Sử dụng box-shadow để mô phỏng hiệu ứng ring */
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25), /* Shadow-2xl */
    0 0 0 8px rgba(255, 255, 255, 0.1); /* Ring 8px, màu trắng 10% */

  /* overflow-hidden */
  overflow: hidden; 
}

/* LƯU Ý QUAN TRỌNG VỀ backdrop-filter:
Để đảm bảo backdrop-filter hoạt động, phần tử này phải có độ trong suốt (opacity < 1) hoặc màu nền sử dụng rgba() (như bg-black/50 đã làm).
*/
      .pulsing-gradient-aura {
  /* absolute */
  position: absolute;
  
  /* -inset-3 */
  top: -0.75rem;    /* -12px */
  bottom: -0.75rem; /* -12px */
  left: -0.75rem;   /* -12px */
  right: -0.75rem;  /* -12px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-linear-to-r from-pink-400 via-purple-500 to-cyan-400 */
  background: linear-gradient(to right, #f472b6, #8b5cf6, #22d3ee);
  
  /* blur-xl */
  filter: blur(24px); 
  
  /* opacity-60 */
  opacity: 0.6;
  
  /* z-index */
  z-index: -1; /* Đảm bảo hiệu ứng nằm dưới nội dung chính */
  
  /* transition (để chuyển đổi opacity mượt mà) */
  transition: opacity 150ms ease-in-out;
  
  /* animate-border-spin */
  animation: border-spin 3s linear infinite; 
  
  /* delay-75 */
  animation-delay: 75ms; 
}

/* group-focus-within:opacity-90 (Sử dụng selector lồng nhau) */
/* Áp dụng cho phần tử mẹ có class 'group' và bên trong nó có phần tử đang focus */
.group:focus-within .pulsing-gradient-aura {
  opacity: 0.9;
}

/* Keyframes cho hiệu ứng border-spin (giả định) */
@keyframes border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
      .gradient-border-effect {
  /* absolute */
  position: absolute;
  
  /* -inset-1.5 */
  top: -0.375rem;    /* -6px */
  bottom: -0.375rem; /* -6px */
  left: -0.375rem;   /* -6px */
  right: -0.375rem;  /* -6px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-linear-to-r from-pink-500 via-purple-600 to-cyan-500 */
  background: linear-gradient(to right, #ec4899, #9333ea, #06b6d4);
  
  /* opacity-90 */
  opacity: 0.9;
  
  /* animate-border-spin (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: border-spin 3s linear infinite; 
  z-index: -1; /* Thường được dùng để đặt lớp này dưới nội dung chính */
}

/* group-focus-within:opacity-100 (Sử dụng selector lồng nhau) */
/* Áp dụng cho phần tử mẹ có class 'group' và bên trong nó có phần tử đang focus */
.group:focus-within .gradient-border-effect,
.gradient-border-effect:focus { /* Chỉ sử dụng focus trực tiếp nếu không phải group */
  opacity: 1;
}

/* Keyframes cho hiệu ứng border-spin (giả định) */
@keyframes border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
      .hero-section-title {
  /* relative */
  position: relative;
  
  /* block */
  display: block; 
  
  /* p-x (padding-left và padding-right) */
  padding-left: 2.5rem;  /* 40px */
  padding-right: 2.5rem; /* 40px */
  
  /* p-y (padding-top và padding-bottom) */
  padding-top: 2rem;    /* 32px */
  padding-bottom: 2rem; /* 32px */
  
  /* font-black */
  font-weight: 900; 
  
  /* tracking-wider */
  letter-spacing: 0.05em; 
  
  /* text-white */
  color: #ffffff; 
  
  /* drop-shadow-2xl (Giá trị gần đúng, có thể phức tạp hơn) */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
  
  /* -translate-y-3 */
  transform: translateY(-0.75rem); /* -12px */
  
  /* text-6xl (Giá trị mặc định cho text-6xl) */
  font-size: 3.75rem; /* 60px */
  line-height: 1; 
  
  /* hero-text-glow (CSS Tùy chỉnh gần đúng cho hiệu ứng glow) */
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f687b3; /* Ánh sáng trắng và hồng nhạt */
  
  /* animate-pulse-soft (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Kích thước text cho màn hình nhỏ (sm:text-6xl) */
/* Cùng giá trị mặc định, không cần media query */

/* Thiết lập cho màn hình trung bình (md) - min-width: 768px */
@media (min-width: 768px) {
  .hero-section-title {
    /* md:px-14 */
    padding-left: 3.5rem;  /* 56px */
    padding-right: 3.5rem; /* 56px */
    
    /* md:py-10 */
    padding-top: 2.5rem;    /* 40px */
    padding-bottom: 2.5rem; /* 40px */
    
    /* md:text-7xl */
    font-size: 4.5rem; /* 72px */
    line-height: 1;
    
    /* md:-translate-y-4 */
    transform: translateY(-1rem); /* -16px */
  }
}

/* Thiết lập cho màn hình lớn (lg) - min-width: 1024px */
@media (min-width: 1024px) {
  .hero-section-title {
    /* lg:px-20 */
    padding-left: 5rem;  /* 80px */
    padding-right: 5rem; /* 80px */
    
    /* lg:py-12 */
    padding-top: 3rem;    /* 48px */
    padding-bottom: 3rem; /* 48px */
    
    /* lg:text-10xl (Không có trong Tailwind mặc định, tôi dùng 9xl + 1/2) */
    font-size: 8rem; /* 128px */ 
    line-height: 1;
    
    /* lg:-translate-y-5 */
    transform: translateY(-1.25rem); /* -20px */
  }
}

/* Keyframes cho hiệu ứng pulse-soft (giả định) */
@keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}
      .circular-shadow-button {
  /* p-4 */
  padding: 1rem; /* 16px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); 
  
  /* transition */
  transition: all 150ms ease-in-out; 
}

/* hover:bg-pink-200 */
.circular-shadow-button:hover {
  background-color: #fecaca; /* pink-200 */
}

/* disabled:opacity-50 */
.circular-shadow-button:disabled {
  opacity: 0.5;
}

      .circular-icon-button {
  /* p-4 */
  padding: 1rem; /* 16px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3); 
  
  /* transition và transform */
  transition: all 150ms ease-in-out; /* Giá trị mặc định cho transition */
}

/* md:p-5 */
@media (min-width: 768px) {
  .circular-icon-button {
    padding: 1.25rem; /* 20px */
  }
}

/* hover:bg-pink-200, hover:scale-105 */
.circular-icon-button:hover {
  background-color: #fecaca; /* pink-200 */
  transform: scale(1.05);
}

/* disabled:opacity-50 */
.circular-icon-button:disabled {
  opacity: 0.5;
}
      .button-icon-effect {
  /* bg-white/90 */
  background-color: rgba(255, 255, 255, 0.9);
  
  /* w-6 */
  width: 1.5rem; /* 24px */
  
  /* h-6 */
  height: 1.5rem; /* 24px */
  
  /* transition (Thêm vào để hiệu ứng scale mượt mà) */
  transition: transform 150ms ease-in-out; 
}

/* md:w-8 và md:h-8 */
@media (min-width: 768px) {
  .button-icon-effect {
    width: 2rem; /* 32px */
    height: 2rem; /* 32px */
  }
}

/* hover:scale-110 */
.button-icon-effect:hover {
  transform: scale(1.1);
}
      .custom-element {
  /* bg-pink-400 */
  background-color: #f472b6; 
  
  /* text-white */
  color: #ffffff; 
  
  /* px-4 */
  padding-left: 1rem;  /* 16px */
  padding-right: 1rem; /* 16px */
  
  /* h-10 */
  height: 2.5rem; /* 40px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
}

/* md:h-12 */
@media (min-width: 768px) {
  .custom-element {
    height: 3rem; /* 48px */
  }
}

      .custom-button {
  /* p-4 */
  padding: 1rem; 
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3); 
  
  /* transition */
  transition: all 150ms ease-in-out; /* Giá trị mặc định cho transition */
  
  /* transform */
  /* Chỉ là một lớp đánh dấu, không thêm thuộc tính CSS riêng biệt */
}
  .button {
  /* px-8 py-4 -> padding: 1rem top/bottom, 2rem left/right */
  padding: 1rem 2rem;
  /* bg-white */
  background-color: #ffffff;
  /* backdrop-blur-xl approximation */
  backdrop-filter: blur(8px);
  /* rounded-full */
  border-radius: 9999px;
  /* text-black font-bold */
  color: #000000;
  font-weight: 700;
  /* smooth hover */
  transition: background-color 150ms ease, transform 150ms ease;
}
.button:hover {
  /* hover:bg-white/60 */
  background-color: rgba(255,255,255,0.6);
}

/* md:p-5 */
@media (min-width: 768px) {
  .custom-button {
    padding: 1.25rem;
  }
}

/* hover:bg-pink-200, hover:scale-105 */
.custom-button:hover {
  background-color: #fecaca; /* pink-200 */
  transform: scale(1.05);
}

/* disabled:opacity-50 */
.custom-button:disabled {
  opacity: 0.5;
  /* Thêm disabled:pointer-events-none nếu bạn muốn chặn click */
}
      @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
       .hero-text-glow {
    text-shadow: 
      0 0 20px #FF69B4,
      0 0 40px #A020F0,
      0 0 60px #00FFFF,
      0 0 80px #FF69B4,
      0 0 100px #A020F0,
      0 4px 20px rgba(0,0,0,0.9);
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));

     @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }    
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
              .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
                  @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }   
  `})]})}const Cl=12,zl=12;function A1({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState([]),[h,m]=f.useState(null),[g,x]=f.useState(1),[w,b]=f.useState(1),[y,k]=f.useState(!0),[I,j]=f.useState(""),[v,N]=f.useState(null),[V,O]=f.useState(!1),[B,G]=f.useState(!1),[te,de]=f.useState(new Set);f.useEffect(()=>{(async()=>{try{k(!0);const ue=await Ie.get("/katakana");let he=ue.data.data||ue.data.katakana||ue.data;if(Array.isArray(he)){const ne=he.map(M=>({id:M.id,character:M["`character`"]||M.character||"?",romanji:M.romanji||"",unicode:M.unicode||"",stroke_order:M.stroke_order||0}));await new Promise(M=>setTimeout(M,600)),s(ne),u(q(ne))}else j("Không thể đọc dữ liệu từ server.")}catch{j("Lỗi kết nối server.")}finally{setTimeout(()=>k(!1),600)}})()},[]);const q=P=>{const ue=["Nguyên âm","Hàng KA","Hàng SA","Hàng TA","Hàng NA","Hàng HA","Hàng MA","Hàng YA","Hàng RA","Hàng WA","Hàng GA (゛)","Hàng ZA (゛)","Hàng DA (゛)","Hàng BA (゛)","Hàng PA (゜)","Âm ghép (Yoon)"];return[P.slice(0,5),P.slice(5,10),P.slice(10,15),P.slice(15,20),P.slice(20,25),P.slice(25,30),P.slice(30,35),P.slice(35,38),P.slice(38,43),P.slice(43,46),P.slice(46,51),P.slice(51,56),P.slice(56,61),P.slice(61,66),P.slice(66,71),P.slice(71,P.length)].map((ne,M)=>({id:M+1,title:ue[M]||`Nhóm ${M+1}`,description:`Học các ký tự Katakana ${ue[M]||"nhóm"}`,total_characters:ne.length,characters:ne}))},le=()=>{G(!0),de(h?new Set([h.id]):new Set)},C=()=>{if(te.size===0){O(!0);return}const ue=l.filter(X=>te.has(X.id)).flatMap(X=>X.characters),he=Array.from(new Map(ue.map(X=>[X.character,X])).values()),ne=[...he].sort(()=>Math.random()-.5),M={type:"katakana",lessonTitle:`Ôn ${te.size} bài Katakana (${he.length} ký tự)`,characters:ne};localStorage.setItem("nekoFlashcardHiraKata",JSON.stringify(M)),G(!1),a("flashcard-hirakata")},A=Math.ceil(l.length/Cl),xe=l.slice((g-1)*Cl,g*Cl),W=h?.characters.slice((w-1)*zl,w*zl)||[],Y=Math.ceil((h?.characters.length||0)/zl);return y?t.jsx(Pt,{message:"Mèo đang chuẩn bị bảng chữ Katakana..."}):t.jsxs("div",{className:"min-h-screen",children:[t.jsxs("main",{className:"relative z-10 container mx-auto px-4 py-12",children:[t.jsx("div",{className:"text-center mb-12",children:t.jsx("h1",{className:"relative z-10 mb-12 md:mb-16",children:t.jsx("span",{className:"hero-section-title hero-text-glow",children:"Học Katakana"})})}),h?t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"flex flex-col items-center mb-12",children:[t.jsx("div",{className:"lesson-header-container",children:t.jsx("div",{className:"header-wrapper",children:t.jsx("h2",{className:"text-4xl hero-text-glow text-white mb-6",children:h.title})})}),t.jsx("button",{onClick:()=>m(null),className:"button py-3 px-8 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all font-bold",children:"← Quay lại danh sách"})]}),t.jsx("div",{className:"grid-container",children:W.map(P=>t.jsx("div",{className:"glassmorphism-card animate-fade-in group cursor-pointer",onClick:()=>N(P),children:t.jsx("div",{className:"text-center space-y-4",children:t.jsx("p",{className:"text-7xl font-light text-black group-hover:scale-110 transition-transform",style:{fontFamily:"'Noto Sans JP', sans-serif"},children:P.character})})},P.id))}),Y>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-16",children:[t.jsx("button",{className:"custom-button",onClick:()=>b(P=>Math.max(1,P-1)),disabled:w===1,children:t.jsx(dt,{className:"w-6 h-6 text-black"})}),t.jsx("button",{className:"custom-button",onClick:()=>b(P=>Math.min(Y,P+1)),disabled:w===Y,children:t.jsx(xt,{className:"w-6 h-6 text-black"})})]})]}):t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",children:xe.map(P=>t.jsxs("button",{onClick:()=>{m(P),b(1)},className:"responsive-hover-card animate-fade-in",children:[t.jsx("div",{className:"text-gray-800 animate-pulse-soft flex justify-center",children:t.jsx(tt,{className:"relative w-full h-full"})}),t.jsxs("div",{className:"text-center py-6",children:[t.jsxs("p",{className:"hero-text-glow text-white text-4xl",children:["Bài ",P.id]}),t.jsx("p",{className:"hero-text-glow text-2xl text-white mt-2 px-4 line-clamp-1",children:P.title})]})]},P.id))}),A>1&&t.jsxs("div",{className:"flex justify-center items-center gap-6 mt-12",children:[t.jsx("button",{className:"custom-button",onClick:()=>x(P=>Math.max(1,P-1)),disabled:g===1,children:t.jsx(dt,{className:"w-6 h-6 text-black"})}),t.jsx("div",{className:"flex gap-3 items-center",children:Array.from({length:A},(P,ue)=>t.jsx("button",{onClick:()=>x(ue+1),className:`rounded-full w-10 h-10 flex items-center justify-center transition-all ${g===ue+1?"bg-white text-purple-600 font-bold scale-110 shadow-lg":"bg-white/20 text-white"}`,children:ue+1},ue))}),t.jsx("button",{className:"custom-button",onClick:()=>x(P=>Math.min(A,P+1)),disabled:g===A,children:t.jsx(xt,{className:"w-6 h-6 text-black"})})]})]})]}),t.jsx("div",{className:"fixed bottom-10 right-10 z-50 hidden lg:block",children:t.jsxs("div",{className:"relative group cursor-pointer",onClick:le,children:[t.jsx("div",{className:"tooltip-slide-out",children:t.jsxs("div",{className:"colored-border-label",children:[t.jsx("p",{className:"text-xl font-bold",children:"Ôn Flashcard Katakana! 🐾"}),t.jsx("div",{className:"absolute bottom-0 right-8 translate-y-full",children:t.jsx("div",{className:"triangle-down-pink"})})]})}),t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:"responsive-circular-image-hover"}),t.jsx("div",{className:"circular-gradient-hover-glow"})]})}),t.jsx(hh,{isOpen:B,onClose:()=>G(!1),lessons:l,selectedIds:te,onSelectedChange:de,onConfirm:C,type:"katakana"}),v&&t.jsx(mh,{character:{...v,strokeOrder:v.stroke_order},type:"katakana",onClose:()=>N(null)}),t.jsx(Lt,{isOpen:V,onClose:()=>O(!1),title:"Meow meow...",message:"Hãy chọn ít nhất 1 bài để ôn flashcard Katakana nhé!"}),t.jsx("style",{children:`
        @keyframes fly {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0) rotate(-1deg); }
        }

        .responsive-circular-image-hover {
          width: 10rem;
          height: 10rem;
          border-radius: 9999px;
          object-fit: cover;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: fly 6s ease-in-out infinite;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
          transform: scale(1) rotate(0deg);
          transition: all 300ms ease-in-out;
          border-width: 4px;
          border-style: solid;
          border-color: #f9a8d4;
        }

        @media (min-width: 640px) { .responsive-circular-image-hover { width: 6rem; height: 6rem; } }
        @media (min-width: 768px) { .responsive-circular-image-hover { width: 7rem; height: 7rem; } }
        @media (min-width: 1024px) { .responsive-circular-image-hover { width: 8rem; height: 8rem; } }
        @media (min-width: 1280px) { .responsive-circular-image-hover { width: 9rem; height: 9rem; } }

        .group:hover .responsive-circular-image-hover {
          transform: scale(1.1) rotate(12deg);
        }

             /* Mặc định cho thiết bị di động (grid-cols-2) */
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem; /* Tương đương gap-6 (6 * 0.25rem) */
}

/* Cho màn hình Medium - Tablet (md:grid-cols-5) */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

/* Cho màn hình Large - Desktop (lg:grid-cols-5) */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
      .lesson-header-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.header-wrapper {
  transform: translateY(-20px); /* Điều chỉnh số này (ví dụ -30px, -40px) để đẩy cao hơn */
  transition: transform 0.3s ease; /* Hiệu ứng mượt nếu tiêu đề thay đổi */
}
      .circular-gradient-hover-glow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 9999px;
  background-image: linear-gradient(to right, 
    rgba(244, 114, 182, 0.3), /* Pink-400/30 */
    rgba(168, 85, 247, 0.3)  /* Purple-400/30 */
  );
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  filter: blur(24px); 
}

.group:hover .circular-gradient-hover-glow {
  opacity: 1;
}

      @keyframes fly {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(-1deg);
  }
}

.responsive-circular-image-hover {
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  object-fit: cover;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: fly 6s ease-in-out infinite; 
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
  transform: scale(1) rotate(0deg);
  transition: all 300ms ease-in-out;
  border-width: 4px;
  border-style: solid;
  border-color: #f9a8d4;
}

@media (min-width: 640px) {
  .responsive-circular-image-hover {
    width: 6rem;
    height: 6rem;
  }
}

@media (min-width: 768px) {
  .responsive-circular-image-hover {
    width: 7rem;
    height: 7rem;
  }
}

@media (min-width: 1024px) {
  .responsive-circular-image-hover {
    width: 8rem;
    height: 8rem;
  }
}

@media (min-width: 1280px) {
  .responsive-circular-image-hover {
    width: 9rem;
    height: 9rem;
  }
}

.group:hover .responsive-circular-image-hover {
  transform: scale(1.1) rotate(12deg);
}
      .triangle-down-pink {
  width: 0;
  height: 0;
  border-left-width: 8px;
  border-left-style: solid;
  border-left-color: transparent;
  border-right-width: 8px;
  border-right-style: solid;
  border-right-color: transparent;
  border-top-width: 8px;
  border-top-style: solid;
  border-top-color: #f9a8d4;
}

      .colored-border-label {
  background-color: #ffffff;
  color: #6d28d9;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  border-width: 4px;
  border-style: solid;
  border-color: #f9a8d4;
}
      .tooltip-slide-out {
  position: absolute;
  bottom: 100%; 
  margin-bottom: 1rem; 
  right: 0; 
  transform: translateX(2rem); 
  opacity: 0; 
  transition: all 500ms ease-in-out; 
  pointer-events: none;
}

.group:hover .tooltip-slide-out {
  opacity: 1; 
  transform: translateX(0); 
}
      .pulsing-animation {
  /* Khai báo animation: pulse, chu kỳ 2s, lặp vô hạn, timing function default */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Định nghĩa keyframes cho hiệu ứng pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1; /* Bắt đầu và kết thúc với độ mờ đầy đủ */
  }
  50% {
    opacity: 0.4; /* Giảm độ mờ xuống 40% ở giữa chu kỳ */
  }
}
      .bold-subheading-style {
  /* text-2xl */
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* opacity-90 */
  opacity: 0.9; 
  
  /* mt-2 */
  margin-top: 0.5rem; /* 8px */
}
  .responsive-hover-card {
  /* group */
  /* Lớp đánh dấu cho phần tử cha, không có thuộc tính CSS trực tiếp. */
  
  /* relative */
  position: relative;
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); /* Nền trắng mờ 80% */
  
  /* rounded-[32px] */
  border-radius: 2rem; /* 32px */
  
  /* p-8 */
  padding: 2rem; /* 32px */
  
  /* transition-all duration-500 */
  transition: all 500ms ease-in-out; 
  
  /* overflow-hidden */
  overflow: hidden; 
}

/* hover:scale-105 */
.responsive-hover-card:hover {
  transform: scale(1.05); /* Phóng to 5% khi di chuột */
}
      .pulsing-centered-text {
  /* text-center */
  text-align: center;
  
  /* text-white */
  color: #ffffff;
  
  /* font-bold */
  font-weight: 700;
  
  /* text-xl */
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  
  /* mb-6 */
  margin-bottom: 1.5rem; /* 24px */
  
  /* animate-pulse */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Keyframes cho hiệu ứng pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
      .full-screen-gradient-center {
  /* min-h-screen */
  min-height: 100vh; /* Chiều cao tối thiểu bằng chiều cao của viewport */
  
  /* flex */
  display: flex;
  
  /* items-center */
  align-items: center; /* Căn giữa dọc các item con */
  
  /* justify-center */
  justify-content: center; /* Căn giữa ngang các item con */
  
  /* bg-gradient-to-br */
  background-image: linear-gradient(to bottom right, #581c87, #831843);
  /* from-purple-900 (#581c87) */
  /* to-pink-900 (#831843) */
}
      .centered-circle-transition {
  /* rounded-full */
  border-radius: 9999px; 
  
  /* transition-all duration-200 */
  transition: all 200ms ease-in-out; 
  
  /* flex */
  display: flex;
  
  /* items-center */
  align-items: center; /* Căn giữa dọc */
  
  /* justify-center */
  justify-content: center; /* Căn giữa ngang */
}
      .glassmorphism-card {
  /* bg-white */
  background-color: #ffffff;
  /* rounded-[32px] (Ưu tiên giá trị tùy chỉnh này) */
  border-radius: 2rem; /* 32px */
  
  /* p-8 */
  padding: 2rem; /* 32px */
  
  /* border-2 */
  border-width: 2px;
  
  /* border-white/40 */
  border-color: rgba(255, 255, 255, 0.4); 
  
  /* transition-all duration-400 */
  transition: all 400ms ease-in-out; 
  
  /* shadow-xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

/* Các hiệu ứng hover */
.glassmorphism-card:hover {
  /* hover:border-pink-400 */
  border-color: #f472b6; 
  
  /* hover:bg-white/80 */
  background-color: rgba(255, 255, 255, 0.80); 
  
  /* hover:scale-105 */
  transform: scale(1.05);
}
      .small-white-rainbow-glow {
  /* text-lg */
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  
  /* text-white */
  color: #ffffff; 
  
  /* mt-2 */
  margin-top: 0.5rem; /* 8px */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền để chữ sáng hơn */
    0 0 3px rgba(255, 255, 255, 0.9),
    /* Các lớp bóng mờ màu neon chính */
    0 0 8px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 12px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 16px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
}
      .white-rainbow-glow-bold {
  /* text-3xl */
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* text-white */
  color: #ffffff; 
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Tập trung vào các lớp bóng mờ màu neon để làm nổi bật chữ trắng */
  text-shadow: 
    /* Lớp bóng mờ trắng nhẹ làm nền */
    0 0 4px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon chính */
    0 0 10px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 15px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 20px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
    
  /* drop-shadow-lg bị loại bỏ do không phù hợp với hiệu ứng glow của chữ trắng */
  filter: none; /* Đảm bảo không có drop-shadow */
}
      
      .small-rainbow-glow {
  /* text-2xl */
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  
  /* text-white */
  color: #ffffff; 
  
  /* mt-1 */
  margin-top: 0.25rem; /* 4px */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền */
    0 0 2px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon */
    0 0 5px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 8px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 12px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
}
      .rainbow-glow-title {
  /* text-4xl */
  font-size: 2.25rem; /* 36px */
  line-height: 2.5rem; /* 40px */
  
  /* font-black */
  font-weight: 900; 
  
  /* text-white */
  color: #ffffff; /* Giữ nguyên màu chữ trắng */
  
  /* text-glow-rainbow (CSS Tùy chỉnh: Hiệu ứng phát sáng cầu vồng rực rỡ) */
  /* Sử dụng text-shadow để tạo hiệu ứng glow, không dùng filter: drop-shadow */
  text-shadow: 
    /* Lớp bóng mờ trắng làm nền */
    0 0 4px rgba(255, 255, 255, 0.8),
    /* Các lớp bóng mờ màu neon */
    0 0 10px rgba(255, 0, 150, 0.9),  /* Hồng đậm (Fuschia) */
    0 0 15px rgba(147, 51, 234, 0.9),  /* Tím (Violet) */
    0 0 20px rgba(6, 182, 212, 0.9);   /* Xanh ngọc (Cyan) */
    
    /* Có thể thêm các màu khác nếu muốn đầy đủ dải cầu vồng */
}
      .full-gradient-hover-effect {
  /* absolute */
  position: absolute;
  
  /* inset-0 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; /* Bao phủ hoàn toàn phần tử cha */
  
  /* rounded-2xl */
  border-radius: 1rem; /* 16px */
  
  /* bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 */
  background: linear-gradient(to right, #ec4899, #a855f7, #06b6d4);
  
  /* opacity-0 */
  opacity: 0;
  
  /* blur-xl */
  filter: blur(20px); 
  
  /* transition-opacity duration-500 */
  transition: opacity 500ms ease-in-out;
  
  /* -z-10 */
  z-index: -10; /* Đặt lớp này ra phía sau nội dung chính */
}

/* group-hover:opacity-100 (Áp dụng khi di chuột qua phần tử cha có class 'group') */
.group:hover .full-gradient-hover-effect {
  opacity: 1;
}
      .glass-card-hover-effect {
  /* relative */
  position: relative;
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); /* Nền trắng mờ 80% */
  
  /* border */
  border-width: 1px; 
  
  /* border-white/30 */
  border-color: rgba(255, 255, 255, 0.3); 
  
  /* rounded-2xl */
  border-radius: 1rem; /* 16px */
  
  /* p-6 */
  padding: 1.5rem; /* 24px */
  
  /* transition-all duration-400 */
  transition: all 400ms ease-in-out; 
  
  /* shadow-xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); 
}

/* hover:border-pink-400, hover:bg-white/20, hover:scale-[1.02], hover:shadow-2xl, hover:shadow-pink-500/30 */
.glass-card-hover-effect:hover {
  /* hover:border-pink-400 */
  border-color: #f472b6; 
  
  /* hover:bg-white/20 */
  background-color: rgba(255, 255, 255, 0.2); 
  
  /* hover:scale-[1.02] */
  transform: scale(1.02);
  
  /* hover:shadow-2xl (Kết hợp với shadow màu hồng) */
  box-shadow: 
    /* shadow-2xl */
    0 25px 50px -12px rgba(0, 0, 0, 0.25), 
    /* hover:shadow-pink-500/30 */
    0 0 15px rgba(236, 72, 153, 0.3); /* Giá trị gần đúng cho shadow màu hồng */
}
      .transparent-search-input {
  /* w-full */
  width: 100%;
  
  /* py-8 */
  padding-top: 2rem;    /* 32px */
  padding-bottom: 2rem; /* 32px */
  
  /* pl-28 */
  padding-left: 7rem;   /* 112px */
  
  /* pr-10 */
  padding-right: 2.5rem; /* 40px */
  
  /* text-3xl */
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  
  /* font-black */
  font-weight: 900; 
  
  /* text-white */
  color: #ffffff; 
  
  /* bg-transparent */
  background-color: transparent; 
  
  /* text-center */
  text-align: center; 
}

/* focus:outline-none */
.transparent-search-input:focus {
  outline: 0; /* Loại bỏ viền focus mặc định của trình duyệt */
}

/* placeholder:text-white/70 và placeholder:font-bold */
.transparent-search-input::placeholder {
  color: rgba(255, 255, 255, 0.7); /* Màu trắng mờ 70% */
  font-weight: 700; /* In đậm */
}
      .element-overlay-positioned {
  /* absolute */
  position: absolute;
  
  /* left-8 */
  left: 2rem; /* 32px */
  
  /* top-1/2 */
  top: 50%;
  
  /* -translate-y-1/2 */
  transform: translateY(-50%); /* Căn giữa dọc */
  
  /* pointer-events-none */
  pointer-events: none; /* NGĂN CHẶN tương tác chuột/chạm */
  
  /* z-20 */
  z-index: 20; 
}
      .icon-centered-left {
  /* absolute */
  position: absolute;
  
  /* left-8 */
  left: 2rem; /* 32px */
  
  /* top-1/2 */
  top: 50%;
  
  /* -translate-y-1/2 */
  transform: translateY(-50%); /* Dùng để căn giữa dọc (Vertical centering) */
  
  /* w-12 */
  width: 3rem; /* 48px */
  
  /* h-12 */
  height: 3rem; /* 48px */
  
  /* text-white */
  color: #ffffff;
  
  /* z-20 */
  z-index: 20; 
  
  /* drop-shadow-neon (CSS Tùy chỉnh gần đúng cho hiệu ứng neon) */
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px #f472b6);
  /* Hoặc sử dụng text-shadow nếu đây là icon dạng chữ: */
  /* text-shadow: 0 0 5px #fff, 0 0 10px #f472b6; */
}
      .glass-effect-container {
  /* relative */
  position: relative;
  
  /* bg-black/50 */
  background-color: rgba(0, 0, 0, 0.5); /* Nền đen mờ 50% */
  
  /* backdrop-blur-2xl */
  backdrop-filter: blur(40px); /* Hiệu ứng làm mờ nền phía sau */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* border-4 */
  border-width: 4px; 
  
  /* border-white/40 */
  border-color: rgba(255, 255, 255, 0.4); /* Viền trắng mờ 40% */
  
  /* shadow-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Bóng lớn */
  
  /* ring-8 ring-white/10 (Tạo hiệu ứng "ring" bằng box-shadow inset hoặc outline/viền thứ hai) */
  /* Sử dụng box-shadow để mô phỏng hiệu ứng ring */
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25), /* Shadow-2xl */
    0 0 0 8px rgba(255, 255, 255, 0.1); /* Ring 8px, màu trắng 10% */

  /* overflow-hidden */
  overflow: hidden; 
}

/* LƯU Ý QUAN TRỌNG VỀ backdrop-filter:
Để đảm bảo backdrop-filter hoạt động, phần tử này phải có độ trong suốt (opacity < 1) hoặc màu nền sử dụng rgba() (như bg-black/50 đã làm).
*/
      .pulsing-gradient-aura {
  /* absolute */
  position: absolute;
  
  /* -inset-3 */
  top: -0.75rem;    /* -12px */
  bottom: -0.75rem; /* -12px */
  left: -0.75rem;   /* -12px */
  right: -0.75rem;  /* -12px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-linear-to-r from-pink-400 via-purple-500 to-cyan-400 */
  background: linear-gradient(to right, #f472b6, #8b5cf6, #22d3ee);
  
  /* blur-xl */
  filter: blur(24px); 
  
  /* opacity-60 */
  opacity: 0.6;
  
  /* z-index */
  z-index: -1; /* Đảm bảo hiệu ứng nằm dưới nội dung chính */
  
  /* transition (để chuyển đổi opacity mượt mà) */
  transition: opacity 150ms ease-in-out;
  
  /* animate-border-spin */
  animation: border-spin 3s linear infinite; 
  
  /* delay-75 */
  animation-delay: 75ms; 
}

/* group-focus-within:opacity-90 (Sử dụng selector lồng nhau) */
/* Áp dụng cho phần tử mẹ có class 'group' và bên trong nó có phần tử đang focus */
.group:focus-within .pulsing-gradient-aura {
  opacity: 0.9;
}

/* Keyframes cho hiệu ứng border-spin (giả định) */
@keyframes border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
      .gradient-border-effect {
  /* absolute */
  position: absolute;
  
  /* -inset-1.5 */
  top: -0.375rem;    /* -6px */
  bottom: -0.375rem; /* -6px */
  left: -0.375rem;   /* -6px */
  right: -0.375rem;  /* -6px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-linear-to-r from-pink-500 via-purple-600 to-cyan-500 */
  background: linear-gradient(to right, #ec4899, #9333ea, #06b6d4);
  
  /* opacity-90 */
  opacity: 0.9;
  
  /* animate-border-spin (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: border-spin 3s linear infinite; 
  z-index: -1; /* Thường được dùng để đặt lớp này dưới nội dung chính */
}

/* group-focus-within:opacity-100 (Sử dụng selector lồng nhau) */
/* Áp dụng cho phần tử mẹ có class 'group' và bên trong nó có phần tử đang focus */
.group:focus-within .gradient-border-effect,
.gradient-border-effect:focus { /* Chỉ sử dụng focus trực tiếp nếu không phải group */
  opacity: 1;
}

/* Keyframes cho hiệu ứng border-spin (giả định) */
@keyframes border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
      .hero-section-title {
  /* relative */
  position: relative;
  
  /* block */
  display: block; 
  
  /* p-x (padding-left và padding-right) */
  padding-left: 2.5rem;  /* 40px */
  padding-right: 2.5rem; /* 40px */
  
  /* p-y (padding-top và padding-bottom) */
  padding-top: 2rem;    /* 32px */
  padding-bottom: 2rem; /* 32px */
  
  /* font-black */
  font-weight: 900; 
  
  /* tracking-wider */
  letter-spacing: 0.05em; 
  
  /* text-white */
  color: #ffffff; 
  
  /* drop-shadow-2xl (Giá trị gần đúng, có thể phức tạp hơn) */
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
  
  /* -translate-y-3 */
  transform: translateY(-0.75rem); /* -12px */
  
  /* text-6xl (Giá trị mặc định cho text-6xl) */
  font-size: 3.75rem; /* 60px */
  line-height: 1; 
  
  /* hero-text-glow (CSS Tùy chỉnh gần đúng cho hiệu ứng glow) */
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f687b3; /* Ánh sáng trắng và hồng nhạt */
  
  /* animate-pulse-soft (CSS Tùy chỉnh: Tạo keyframes và áp dụng) */
  animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Kích thước text cho màn hình nhỏ (sm:text-6xl) */
/* Cùng giá trị mặc định, không cần media query */

/* Thiết lập cho màn hình trung bình (md) - min-width: 768px */
@media (min-width: 768px) {
  .hero-section-title {
    /* md:px-14 */
    padding-left: 3.5rem;  /* 56px */
    padding-right: 3.5rem; /* 56px */
    
    /* md:py-10 */
    padding-top: 2.5rem;    /* 40px */
    padding-bottom: 2.5rem; /* 40px */
    
    /* md:text-7xl */
    font-size: 4.5rem; /* 72px */
    line-height: 1;
    
    /* md:-translate-y-4 */
    transform: translateY(-1rem); /* -16px */
  }
}

/* Thiết lập cho màn hình lớn (lg) - min-width: 1024px */
@media (min-width: 1024px) {
  .hero-section-title {
    /* lg:px-20 */
    padding-left: 5rem;  /* 80px */
    padding-right: 5rem; /* 80px */
    
    /* lg:py-12 */
    padding-top: 3rem;    /* 48px */
    padding-bottom: 3rem; /* 48px */
    
    /* lg:text-10xl (Không có trong Tailwind mặc định, tôi dùng 9xl + 1/2) */
    font-size: 8rem; /* 128px */ 
    line-height: 1;
    
    /* lg:-translate-y-5 */
    transform: translateY(-1.25rem); /* -20px */
  }
}

/* Keyframes cho hiệu ứng pulse-soft (giả định) */
@keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}
      .circular-shadow-button {
  /* p-4 */
  padding: 1rem; /* 16px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/80 */
  background-color: rgba(255, 255, 255, 0.8); 
  
  /* transition */
  transition: all 150ms ease-in-out; 
}

/* hover:bg-pink-200 */
.circular-shadow-button:hover {
  background-color: #fecaca; /* pink-200 */
}

/* disabled:opacity-50 */
.circular-shadow-button:disabled {
  opacity: 0.5;
}

      .circular-icon-button {
  /* p-4 */
  padding: 1rem; /* 16px */
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3); 
  
  /* transition và transform */
  transition: all 150ms ease-in-out; /* Giá trị mặc định cho transition */
}

/* md:p-5 */
@media (min-width: 768px) {
  .circular-icon-button {
    padding: 1.25rem; /* 20px */
  }
}

/* hover:bg-pink-200, hover:scale-105 */
.circular-icon-button:hover {
  background-color: #fecaca; /* pink-200 */
  transform: scale(1.05);
}

/* disabled:opacity-50 */
.circular-icon-button:disabled {
  opacity: 0.5;
}
      .button-icon-effect {
  /* bg-white/90 */
  background-color: rgba(255, 255, 255, 0.9);
  
  /* w-6 */
  width: 1.5rem; /* 24px */
  
  /* h-6 */
  height: 1.5rem; /* 24px */
  
  /* transition (Thêm vào để hiệu ứng scale mượt mà) */
  transition: transform 150ms ease-in-out; 
}

/* md:w-8 và md:h-8 */
@media (min-width: 768px) {
  .button-icon-effect {
    width: 2rem; /* 32px */
    height: 2rem; /* 32px */
  }
}

/* hover:scale-110 */
.button-icon-effect:hover {
  transform: scale(1.1);
}
      .custom-element {
  /* bg-pink-400 */
  background-color: #f472b6; 
  
  /* text-white */
  color: #ffffff; 
  
  /* px-4 */
  padding-left: 1rem;  /* 16px */
  padding-right: 1rem; /* 16px */
  
  /* h-10 */
  height: 2.5rem; /* 40px */
  
  /* font-bold */
  font-weight: 700; 
  
  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); 
}

/* md:h-12 */
@media (min-width: 768px) {
  .custom-element {
    height: 3rem; /* 48px */
  }
}

      .custom-button {
  /* p-4 */
  padding: 1rem; 
  
  /* rounded-full */
  border-radius: 9999px; 
  
  /* bg-white/30 */
  background-color: rgba(255, 255, 255, 0.3); 
  
  /* transition */
  transition: all 150ms ease-in-out; /* Giá trị mặc định cho transition */
  
  /* transform */
  /* Chỉ là một lớp đánh dấu, không thêm thuộc tính CSS riêng biệt */
}
  .button {
  /* px-8 py-4 -> padding: 1rem top/bottom, 2rem left/right */
  padding: 1rem 2rem;
  /* bg-white */
  background-color: #ffffff;
  /* backdrop-blur-xl approximation */
  backdrop-filter: blur(8px);
  /* rounded-full */
  border-radius: 9999px;
  /* text-black font-bold */
  color: #000000;
  font-weight: 700;
  /* smooth hover */
  transition: background-color 150ms ease, transform 150ms ease;
}
.button:hover {
  /* hover:bg-white/60 */
  background-color: rgba(255,255,255,0.6);
}

/* md:p-5 */
@media (min-width: 768px) {
  .custom-button {
    padding: 1.25rem;
  }
}

/* hover:bg-pink-200, hover:scale-105 */
.custom-button:hover {
  background-color: #fecaca; /* pink-200 */
  transform: scale(1.05);
}

/* disabled:opacity-50 */
.custom-button:disabled {
  opacity: 0.5;
  /* Thêm disabled:pointer-events-none nếu bạn muốn chặn click */
}
      @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
       .hero-text-glow {
    text-shadow: 
      0 0 20px #FF69B4,
      0 0 40px #A020F0,
      0 0 60px #00FFFF,
      0 0 80px #FF69B4,
      0 0 100px #A020F0,
      0 4px 20px rgba(0,0,0,0.9);
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));

     @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }    
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
              .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
                  @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function F1({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState(0),[h,m]=f.useState(!1),[g,x]=f.useState(!1),[w,b]=f.useState(!0),[y,k]=f.useState(null),[I,j]=f.useState(!1);if(f.useEffect(()=>{const q=setTimeout(()=>b(!1),1e3);return(()=>{const C=localStorage.getItem("nekoFlashcardHiraKata");if(!C){j(!0);return}try{const A=JSON.parse(C);if(!A.characters||!Array.isArray(A.characters)||A.characters.length===0)throw new Error("Invalid flashcard data");k(A),s(A.characters)}catch{j(!0)}})(),()=>clearTimeout(q)},[]),w)return t.jsx(Pt,{message:"Mèo đang chuẩn bị flashcard HiraKata cho bạn nhé..."});if(I)return t.jsx(Lt,{isOpen:!0,onClose:()=>a(y?.originPage||"landing"),title:"Oops!",message:"Không có dữ liệu flashcard hoặc dữ liệu không hợp lệ!"});if(!y||o.length===0)return t.jsx(Lt,{isOpen:!0,onClose:()=>a("landing"),title:"Meow...",message:"Flashcard trống! Mèo sẽ đưa bạn về trang chính"});const v=o[l],N=o.length>0?(l+1)/o.length*100:0,V=y.lessonTitle||`Flashcard ${y.type==="hiragana"?"Hiragana":"Katakana"}`,O=()=>m(q=>!q),B=()=>{l>0&&(u(q=>q-1),m(!1))},G=()=>{l===o.length-1?x(!0):(u(q=>q+1),m(!1))},te=()=>{u(0),m(!1),x(!1)},de=()=>{localStorage.removeItem("nekoFlashcardHiraKata"),a(y.originPage||y.type)};return t.jsxs("div",{className:"flashcard-page-container",children:[t.jsxs("main",{className:"flashcard-main-content",children:[t.jsx("div",{className:"flashcard-header",children:t.jsx("h1",{className:"flashcard-title",children:V})}),t.jsxs("div",{className:"progress-section",children:[t.jsx("div",{className:"progress-info",children:t.jsxs("span",{className:"progress-text",children:["Ký tự ",t.jsx("span",{className:"progress-current",children:l+1})," ","/ ",o.length]})}),t.jsx("div",{className:"progress-bar",children:t.jsx("div",{className:"progress-fill",style:{width:`${N}%`},children:t.jsx("div",{className:"progress-badge",children:"🐾"})})})]}),t.jsx("div",{className:"flashcard-container",children:t.jsxs("div",{onClick:O,className:`flashcard-inner ${h?"flipped":""}`,children:[t.jsxs("div",{className:"flashcard-front",children:[t.jsx("p",{className:"character-display",children:v.character}),t.jsx("p",{className:"flip-hint",children:"Nhấn để xem cách đọc"}),t.jsx(tt,{className:"flip-icon"})]}),t.jsxs("div",{className:"flashcard-back",children:[t.jsx("p",{className:"romanji-display",children:v.romanji}),t.jsx("p",{className:"back-hint",children:"Nhấn để quay lại"}),t.jsx(Wt,{className:"sparkle-icon"})]})]})}),t.jsxs("div",{className:"navigation-buttons",children:[t.jsx("button",{onClick:B,disabled:l===0,className:"nav-button prev-button",children:t.jsx(dt,{className:"nav-icon",strokeWidth:4})}),t.jsxs("div",{className:"decorative-icon",children:[t.jsx(tt,{className:"bouncing-cat",strokeWidth:3}),t.jsx(Wt,{className:"sparkle-corner"})]}),t.jsxs("button",{onClick:G,className:"nav-button next-button",children:[t.jsx("span",{className:"button-text",children:l===o.length-1?"XONG RỒI!":"TIẾP THEO"}),l!==o.length-1?t.jsx(xt,{className:"next-icon",strokeWidth:5}):t.jsx("span",{className:"celebration-icon",children:"🎉"})]})]}),g&&t.jsx("div",{className:"modal-overlay",children:t.jsxs("div",{className:"end-modal",children:[t.jsxs("div",{className:"modal-header",children:[t.jsx(tt,{className:"modal-cat",strokeWidth:2.5}),t.jsx(Wt,{className:"modal-sparkle"})]}),t.jsx("h2",{className:"modal-title",children:"Siêu tuyệt vời!"}),t.jsxs("p",{className:"modal-message",children:["Bạn đã hoàn thành bài học này một cách xuất sắc! ",t.jsx("br",{}),"Mèo rất tự hào về sự chăm chỉ của bạn đấy! 🐾"]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{onClick:te,className:"action-button restart-button",children:"Học lại từ đầu nhé!"}),t.jsx("button",{onClick:de,className:"action-button return-button",children:"Về trang chính"})]})]})})]}),t.jsx("style",{children:`
        .flashcard-page-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .flashcard-main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .flashcard-header {
          padding: 3rem 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .flashcard-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 900;
          color: white;
          text-shadow: 0 0 20px #ff69b4, 0 0 40px #a020f0, 0 4px 20px rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .progress-section {
          width: 100%;
          max-width: 800px;
          margin-bottom: 2rem;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 0.5rem;
          padding: 0 0.5rem;
        }

        .progress-text {
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .progress-current {
          color: #fbbf24;
          font-size: 1.5rem;
        }

        .progress-bar {
          height: 2rem;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(to right, #f472b6, #7c3aed);
          transition: width 500ms ease-in-out;
          position: relative;
        }

        .progress-badge {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(50%, -50%);
          animation: bounce 1s infinite;
        }

        .flashcard-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          height: 24rem;
          margin-bottom: 3rem;
          perspective: 1000px;
        }

        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .flashcard-inner.flipped {
          transform: rotateY(180deg);
        }

        .flashcard-front, .flashcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .flashcard-front {
          background-color: white;
        }

        .flashcard-back {
          background: linear-gradient(to bottom right, #ec4899, #7c3aed);
          transform: rotateY(180deg);
        }

        .character-display {
          font-size: 8rem;
          font-weight: 900;
          color: #1f2937;
          margin: 0;
        }

        .romanji-display {
          font-size: 6rem;
          font-weight: 900;
          color: white;
          text-align: center;
          margin: 0;
        }

        .flip-hint {
          font-size: 1.125rem;
          color: #6b7280;
          margin-top: 2rem;
        }

        .back-hint {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 1.5rem;
        }

        .flip-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 3rem;
          height: 3rem;
          color: #f472b6;
          animation: wiggle 1s infinite;
        }

        .sparkle-icon {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          width: 3rem;
          height: 3rem;
          color: white;
          animation: pulse 2s infinite;
        }

        .navigation-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          margin-top: 4rem;
        }

        .nav-button {
          position: relative;
          padding: 1.5rem;
          border-radius: 1.5rem;
          border: none;
          cursor: pointer;
          transition: all 300ms;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .prev-button {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          color: #4f46e5;
        }

        .prev-button:hover:not(:disabled) {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
        }

        .prev-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .next-button {
          background: linear-gradient(to bottom right, #ec4899, #7c3aed, #06b6d4);
          color: white;
          padding: 1.5rem 3rem;
          overflow: hidden;
          transition: all 500ms ease-in-out;
        }

        .next-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.5);
        }

        .nav-icon, .next-icon {
          width: 2rem;
          height: 2rem;
        }

        .button-text {
          font-size: 1.5rem;
          font-weight: 900;
          filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
          margin-right: 1rem;
        }

        .next-icon {
          animation: pulse 1.5s infinite;
        }

        .celebration-icon {
          font-size: 2.5rem;
          margin-left: 1rem;
          animation: bounce 1s infinite;
        }

        .decorative-icon {
          position: relative;
        }

        .bouncing-cat {
          width: 4rem;
          height: 4rem;
          color: #ec4899;
          animation: bounce 1s infinite;
          filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2));
        }

        .sparkle-corner {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 1.5rem;
          height: 1.5rem;
          color: #fbbf24;
          animation: pulse 2s infinite;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1.25rem;
        }

        .end-modal {
          background: white;
          padding: 3rem;
          border-radius: 2.5rem;
          max-width: 500px;
          width: 100%;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: modalIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-header {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .modal-cat {
          width: 6rem;
          height: 6rem;
          color: #ec4899;
          margin: auto;
          animation: bounce 1s infinite;
        }

        .modal-sparkle {
          position: absolute;
          top: -10px;
          right: 30%;
          width: 2rem;
          height: 2rem;
          color: #fbbf24;
          animation: pulse 2s infinite;
        }

        .modal-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #1e293b;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }

        .modal-message {
          font-size: 1.15rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .modal-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-button {
          padding: 1.25rem 2rem;
          border-radius: 1.25rem;
          font-size: 1.2rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .restart-button {
          background: linear-gradient(to right, #ec4899, #7c3aed);
          color: white;
          box-shadow: 0 10px 15px -3px rgba(236, 72, 153, 0.3);
        }

        .restart-button:hover {
          transform: scale(1.03) translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(236, 72, 153, 0.4);
          filter: brightness(1.1);
        }

        .return-button {
          background-color: #f1f5f9;
          color: #64748b;
        }

        .return-button:hover {
          background-color: #e2e8f0;
          color: #1e293b;
          transform: scale(1.03);
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); }
          50% { transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes modalIn {
          from { transform: scale(0.8) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        @media (max-width: 768px) {
          .flashcard-title {
            font-size: 2rem;
          }

          .flashcard-container {
            height: 18rem;
          }

          .character-display {
            font-size: 5rem;
          }

          .romanji-display {
            font-size: 4rem;
          }

          .navigation-buttons {
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .nav-button {
            padding: 1rem;
          }

          .next-button {
            padding: 1rem 2rem;
          }

          .button-text {
            font-size: 1.125rem;
          }

          .end-modal {
            padding: 2rem;
          }

          .modal-title {
            font-size: 2rem;
          }
        }
      `})]})}function D1({onNavigate:a}){const o=[{id:"hiragana",title:"Hiragana",char:"あ",subtitle:"Bảng chữ mềm",description:"Linh hồn của từ thuần Nhật, trợ từ và ngữ pháp căn bản.",hoverClass:"hiragana-gradient"},{id:"katakana",title:"Katakana",char:"ア",subtitle:"Bảng chữ cứng",description:"Chìa khóa để đọc từ mượn nước ngoài, tên riêng và từ tượng thanh.",hoverClass:"katakana-gradient"}];return t.jsxs("div",{className:"min-h-screen relative overflow-hidden",children:[t.jsxs("main",{className:"relative z-10 container mx-auto px-4 py-16 md:py-24 animate-fade-in",children:[t.jsxs("div",{className:"text-center mb-16 md:mb-24",children:[t.jsx("h1",{className:"hero-section-title hero-text-glow",children:"Chọn bảng chữ cái"}),t.jsx("p",{className:"lead-text",children:"Bắt đầu hành trình chinh phục tiếng Nhật cùng mèo nhé! 🐾"})]}),t.jsx("div",{className:"grid-container",children:o.map((s,l)=>t.jsxs("button",{onClick:()=>a(s.id),className:"glass-card",style:{animationDelay:`${.3+l*.2}s`},children:[t.jsx("div",{className:`gradient-overlay ${s.hoverClass}`}),t.jsxs("div",{className:"subtle-overlay",children:[t.jsx("div",{className:"glow-orb orb-top"}),t.jsx("div",{className:"glow-orb orb-bottom"})]}),t.jsxs("div",{className:"relative z-10 p-10 md:p-16 text-center",children:[t.jsx("div",{className:"hero-text",children:s.char}),t.jsx("h2",{className:"card-title",children:s.title}),t.jsx("p",{className:"card-subtitle",children:s.subtitle}),t.jsx("p",{className:"card-description",children:s.description}),t.jsxs("div",{className:"flex-container",children:[t.jsx("span",{children:"Bắt đầu ngay"}),t.jsx("span",{className:"moving-icon",children:"→"})]})]})]},s.id))}),t.jsxs("div",{className:"footer-container text-center",style:{animationDelay:"0.8s"},children:[t.jsx("p",{className:"accent-text",children:"Học mỗi ngày một ít, mèo tin bạn sẽ làm được! ✨"}),t.jsx("div",{className:"bouncing-icon",children:"🐱"})]})]}),t.jsx("style",{children:`
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .hero-section-title {
          position: relative;
          display: block;
          font-weight: 900;
          color: #ffffff;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
          font-size: 3.5rem;
          line-height: 1;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        @media (min-width: 768px) { .hero-section-title { font-size: 4.5rem; } }
        @media (min-width: 1024px) { .hero-section-title { font-size: 7rem; } }

        .hero-text-glow {
          text-shadow: 0 0 20px #FF69B4, 0 0 40px #A020F0, 0 0 60px #00FFFF;
          animation: pulse-soft 2s ease-in-out infinite;
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }

        .lead-text {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          max-width: 56rem;
          margin: 0 auto;
          text-align: center;
        }

        .grid-container {
          max-width: 72rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          padding: 1rem;
        }

        @media (min-width: 1024px) {
          .grid-container { grid-template-columns: repeat(2, 1fr); gap: 5rem; }
        }

        .glass-card {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .glass-card:hover {
          transform: scale(1.05) translateY(-24px);
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6);
        }

        /* Gradient Overlays */
        .gradient-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.7s ease;
          z-index: 0;
        }
        .glass-card:hover .gradient-overlay { opacity: 1; }
        .hiragana-gradient { background: linear-gradient(to bottom right, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3)); }
        .katakana-gradient { background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3)); }

        .hero-text {
          font-size: 6rem;
          color: white;
          margin-bottom: 2rem;
          display: inline-block;
          transition: transform 0.5s ease;
        }
        .glass-card:hover .hero-text { transform: scale(1.1) rotate(5deg); }

        .card-title { font-size: 3rem; font-weight: 900; color: white; margin-bottom: 1rem; }
        .card-subtitle { font-size: 1.5rem; font-weight: 600; color: white; margin-bottom: 1.5rem; }
        .card-description { font-size: 1.125rem; color: white; line-height: 1.6; max-width: 28rem; margin: 0 auto 2.5rem; }

        .flex-container {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .moving-icon {
          display: inline-block;
          transition: transform 0.5s ease;
        }
        .glass-card:hover .moving-icon { transform: translateX(1.5rem); }

        .glow-orb {
          position: absolute;
          width: 20rem;
          height: 20rem;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          filter: blur(64px);
          z-index: 0;
        }
        .orb-top { top: 0; left: 0; transform: translate(-50%, -50%); }
        .orb-bottom { bottom: 0; right: 0; transform: translate(50%, 50%); }

        .subtle-overlay {
          position: absolute;
          inset: 0;
          background-color: white;
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .glass-card:hover .subtle-overlay { opacity: 0.1; }

        .footer-container { margin-top: 6rem; }
        .accent-text { font-size: 1.5rem; color: rgba(255, 255, 255, 0.9); margin-bottom: 1.5rem; }
        .bouncing-icon { font-size: 4rem; animation: bounce 1s infinite; display: inline-block; }

        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); }
          50% { transform: translateY(0); }
        }
      `})]})}function I1({test:a,isOpen:o,onClose:s,onSubmitFeedback:l,onDeleteTest:u,onShowCorrectAnswers:h,position:m={x:100,y:100},onPositionChange:g}){const[x,w]=f.useState(""),[b,y]=f.useState(null),[k,I]=f.useState({}),[j,v]=f.useState(m),[N,V]=f.useState(!1),[O,B]=f.useState({x:0,y:0}),[G,te]=f.useState(!1),[de,q]=f.useState([]),[le,C]=f.useState(null),[A,xe]=f.useState(!1),[W,Y]=f.useState(!0),[P,ue]=f.useState(!1),[he,ne]=f.useState({isOpen:!1,title:"",message:""}),M=f.useRef(null);f.useEffect(()=>{if(a){w(a.feedback||""),y(a.score??null),C(null);const U={};a.answers&&a.answers.forEach(ie=>{const we=`${ie.questionId}_${ie.subQuestionIndex}`;ie.isCorrect!==void 0&&(U[we]=ie.isCorrect)}),I(U),$()}},[a]),f.useEffect(()=>()=>{M.current&&clearTimeout(M.current)},[]),f.useEffect(()=>{v(m)},[m]);const X=f.useCallback(()=>{const U=["token","access_token","auth_token","user_token","jwt_token","jwt","authToken","accessToken","user","auth","nekonihongo_token","admin_token"];for(const we of U){const ze=localStorage.getItem(we);if(ze)return ze}for(const we of U){const ze=sessionStorage.getItem(we);if(ze)return ze}const ie=document.cookie.split(";");for(const we of ie){const ze=we.trim();for(const Pe of U)if(ze.startsWith(`${Pe}=`))return ze.substring(Pe.length+1)}return null},[]),Z=(U,ie)=>{ne({isOpen:!0,title:U,message:ie})},z=()=>{ne({isOpen:!1,title:"",message:""})},$=async()=>{if(!a||!a.lessonId){ge.error("Không tìm thấy bài học để lấy câu hỏi");return}M.current&&(clearTimeout(M.current),M.current=null),te(!0),C(null);try{const U=X();if(!U)throw new Error("Bạn chưa đăng nhập. Vui lòng đăng nhập và thử lại.");const ie={Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${U}`},we=`/api/grammar/mini-test/questions?lesson_id=${a.lessonId}`,ze=await fetch(we,{headers:ie,credentials:"include",method:"GET"});if(!ze.ok){const ln=`/grammar/mini-test/questions?lesson_id=${a.lessonId}`,kn=await fetch(ln,{headers:ie,credentials:"include",method:"GET"});if(!kn.ok)throw new Error(`Không thể kết nối đến server. Status: ${ze.status}`);const Vn=kn.headers.get("content-type");if(!Vn||!Vn.includes("application/json")){const hr=await kn.text();throw new Error("Server trả về dữ liệu không đúng định dạng JSON")}const Ya=await kn.json(),Jt=be(Ya);if(!Jt||Jt.length===0)throw new Error("Không tìm thấy câu hỏi trong phản hồi");q(Jt),ge.success(`Đã tải ${Jt.length} câu hỏi từ server`);return}const Pe=ze.headers.get("content-type");if(!Pe||!Pe.includes("application/json")){const ln=await ze.text();throw new Error("Server trả về dữ liệu không đúng định dạng JSON")}const Be=await ze.json(),ut=be(Be);if(!ut||ut.length===0)throw new Error("Không tìm thấy câu hỏi trong phản hồi");q(ut),ge.success(`Đã tải ${ut.length} câu hỏi từ server`)}catch(U){const ie=U.message||"Không thể kết nối đến server";C(ie),ge.error(`Lỗi: ${ie}`),Z("Lỗi khi tải câu hỏi",ie)}finally{te(!1)}},be=U=>U?Array.isArray(U)?U.map(ie=>J(ie)):U.data&&Array.isArray(U.data)?U.data.map(ie=>J(ie)):U.questions&&Array.isArray(U.questions)?U.questions.map(ie=>J(ie)):[]:[],J=U=>({id:U.id||0,lesson_id:U.lesson_id||U.lessonId||0,example:U.example||null,type:U.type||"fill_blank",text:U.text||U.questionText||U.content||"",options:U.options||null,correct_answer:U.correct_answer||U.correctAnswer||"",points:U.points||10,explanation:U.explanation||U.hint||null,created_at:U.created_at||U.createdAt||new Date().toISOString(),updated_at:U.updated_at||U.updatedAt||new Date().toISOString()}),me=U=>{U.preventDefault(),V(!0),B({x:U.clientX-j.x,y:U.clientY-j.y})},fe=f.useCallback(U=>{if(!N)return;const ie=U.clientX-O.x,we=U.clientY-O.y,ze=Math.max(0,Math.min(ie,window.innerWidth-1e3)),Pe=Math.max(0,Math.min(we,window.innerHeight-700)),Be={x:ze,y:Pe};v(Be),g&&g(Be)},[N,O,g]),je=f.useCallback(()=>{V(!1)},[]);f.useEffect(()=>{if(N)return document.addEventListener("mousemove",fe),document.addEventListener("mouseup",je),()=>{document.removeEventListener("mousemove",fe),document.removeEventListener("mouseup",je)}},[N,fe,je]);const Te=(U,ie,we)=>{const ze=`${U}_${ie}`;I(Pe=>({...Pe,[ze]:we})),setTimeout(()=>Me(),100)},Me=()=>{if(!a?.answers)return 0;a.answers.length;const ie=Object.values(k).filter(Boolean).length;return y(ie),ie},K=()=>{if(!a?.answers)return;const U={};a.answers.forEach(ie=>{const we=`${ie.questionId}_${ie.subQuestionIndex}`;U[we]=!0}),I(U),Me(),ge.success("Đã chấm tất cả câu là ĐÚNG")},Fe=()=>{if(!a?.answers)return;const U={};a.answers.forEach(ie=>{const we=`${ie.questionId}_${ie.subQuestionIndex}`;U[we]=!1}),I(U),Me(),ge.success("Đã chấm tất cả câu là SAI")},se=()=>{if(!a?.answers||de.length===0){ge.error("Không thể tự động chấm: thiếu dữ liệu câu hỏi");return}const U={};let ie=0;a.answers.forEach(we=>{const ze=`${we.questionId}_${we.subQuestionIndex}`;if(k[ze]!==void 0){U[ze]=k[ze],k[ze]&&ie++;return}U[ze]=!0,ie++}),I(U),y(ie),ue(!0),ge.success(`Đã tự động chấm: ${ie}/${a.answers.length} câu đúng`)},E=async()=>{if(!a)return;if(!x.trim()){ge.error("Vui lòng nhập phản hồi cho học viên");return}xe(!0);const U=b||Me()||0;try{await l(a.id,x.trim(),U),ge.success("Đã gửi phản hồi thành công"),s()}catch(ie){const we=ie.message||"Lỗi khi gửi phản hồi";Z("Lỗi khi gửi phản hồi",we)}finally{xe(!1)}},D=async()=>{if(!(!a||!window.confirm("Bạn có chắc muốn xóa bài test này? Hành động này không thể hoàn tác.")))try{await u(a.id),ge.success("Đã xóa bài test thành công"),s()}catch(ie){const we=ie.message||"Lỗi khi xóa bài test";Z("Lỗi khi xóa bài test",we)}},Q=a?.answers?.length||0,re=Object.keys(k).length,ee=Object.values(k).filter(Boolean).length,Ce=Q>0?re/Q*100:0;return!o||!a?null:t.jsxs(t.Fragment,{children:[he.isOpen&&t.jsxs("div",{className:"error-modal-overlay",children:[t.jsxs("div",{className:"error-modal",children:[t.jsxs("div",{className:"error-modal-header",children:[t.jsx(bn,{size:24,className:"error-modal-icon"}),t.jsx("h3",{className:"error-modal-title",children:he.title})]}),t.jsx("div",{className:"error-modal-content",children:t.jsx("p",{children:he.message})}),t.jsx("div",{className:"error-modal-actions",children:t.jsx("button",{onClick:z,className:"error-modal-button",children:"Đóng"})})]}),t.jsx("style",{children:`
            .error-modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.5);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              animation: fadeIn 0.2s ease;
            }

            .error-modal {
              background: white;
              border-radius: 12px;
              width: 90%;
              max-width: 500px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              overflow: hidden;
              animation: slideUp 0.3s ease;
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .error-modal-header {
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 20px 24px;
              background: #fef2f2;
              border-bottom: 1px solid #fecaca;
            }

            .error-modal-icon {
              color: #dc2626;
              flex-shrink: 0;
            }

            .error-modal-title {
              margin: 0;
              color: #dc2626;
              font-size: 18px;
              font-weight: 600;
            }

            .error-modal-content {
              padding: 24px;
              color: #4b5563;
              line-height: 1.6;
              font-size: 14px;
            }

            .error-modal-content p {
              margin: 0;
            }

            .error-modal-actions {
              padding: 0 24px 24px;
              display: flex;
              justify-content: flex-end;
            }

            .error-modal-button {
              padding: 10px 24px;
              background: #dc2626;
              color: white;
              border: none;
              border-radius: 8px;
              font-weight: 500;
              cursor: pointer;
              transition: background 0.2s;
            }

            .error-modal-button:hover {
              background: #b91c1c;
            }
          `})]}),t.jsxs("div",{className:"modal-container draggable-modal",style:{position:"fixed",left:`${j.x}px`,top:`${j.y}px`,zIndex:1001},children:[t.jsxs("div",{className:"modal-header draggable-header",onMouseDown:me,style:{cursor:N?"grabbing":"grab"},children:[t.jsxs("div",{className:"modal-header-content",children:[t.jsxs("h2",{className:"modal-title",children:[t.jsx(lo,{size:24}),"Chấm điểm bài test",G&&t.jsxs("span",{className:"loading-badge",children:[t.jsx(bl,{size:14,className:"animate-spin"}),"Đang tải..."]})]}),t.jsxs("div",{className:"modal-subtitle-section",children:[t.jsxs("div",{className:"user-info",children:[t.jsx(ql,{size:16}),t.jsx("span",{children:a.userName||`User ${a.userId}`}),t.jsx("span",{className:"email-text",children:a.userEmail})]}),t.jsxs("div",{className:"lesson-info",children:[t.jsx(Un,{size:16}),t.jsxs("span",{children:["Bài ",a.lessonId,": ",a.lessonTitle||"Chưa có tiêu đề"]})]}),t.jsxs("div",{className:"time-info",children:[t.jsx(dr,{size:16}),t.jsxs("span",{children:["Nộp lúc: ",new Date(a.submittedAt).toLocaleString("vi-VN")]})]})]})]}),t.jsx("button",{onClick:s,className:"close-button",children:t.jsx(Kr,{size:24})})]}),t.jsxs("div",{className:"progress-section",children:[t.jsxs("div",{className:"progress-header",children:[t.jsx("h3",{children:"Tiến độ chấm điểm"}),t.jsxs("div",{className:"progress-info",children:[t.jsxs("span",{className:"progress-text",children:[re,"/",Q," câu đã chấm",P&&t.jsxs("span",{className:"auto-grade-badge",children:[t.jsx(yn,{size:12}),"Đã tự động chấm"]})]}),t.jsxs("span",{className:"lesson-id",children:["Bài ",a.lessonId]})]})]}),t.jsx("div",{className:"progress-bar-container",children:t.jsx("div",{className:"progress-bar",style:{width:`${Ce}%`}})}),t.jsxs("div",{className:"progress-stats",children:[t.jsxs("div",{className:"stat-item",children:[t.jsx(oo,{size:16,className:"stat-icon correct"}),t.jsx("span",{className:"stat-count correct",children:ee}),t.jsx("span",{className:"stat-label",children:"Đúng"})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx(Il,{size:16,className:"stat-icon incorrect"}),t.jsx("span",{className:"stat-count incorrect",children:re-ee}),t.jsx("span",{className:"stat-label",children:"Sai"})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx(bn,{size:16,className:"stat-icon pending"}),t.jsx("span",{className:"stat-count pending",children:Q-re}),t.jsx("span",{className:"stat-label",children:"Chưa chấm"})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx(Fa,{size:16,className:"stat-icon info"}),t.jsx("span",{className:"stat-count info",children:de.length}),t.jsx("span",{className:"stat-label",children:"Câu hỏi"})]})]})]}),t.jsxs("div",{className:"header-actions",children:[t.jsxs("div",{className:"action-buttons-group",children:[t.jsx("button",{onClick:$,className:"view-questions-button",disabled:G,children:G?t.jsxs(t.Fragment,{children:[t.jsx(bl,{size:16,className:"animate-spin"}),"Đang tải..."]}):t.jsxs(t.Fragment,{children:[t.jsx(rh,{size:16}),"Tải câu hỏi từ DB"]})}),t.jsxs("button",{onClick:se,className:"auto-grade-button",disabled:de.length===0||G,children:[t.jsx(yn,{size:16}),"Chấm tự động"]}),t.jsxs("button",{onClick:()=>Y(!W),className:"toggle-questions-button",children:[t.jsx(so,{size:16}),W?"Ẩn câu hỏi":"Hiện câu hỏi"]})]}),t.jsx("div",{className:"questions-info",children:t.jsxs("span",{className:"questions-text",children:[t.jsx(_x,{size:14}),de.length," câu hỏi trong DB"]})})]}),le&&t.jsx("div",{className:"error-section",children:t.jsxs("div",{className:"error-message",children:[t.jsx(bn,{size:20}),t.jsxs("div",{className:"error-content",children:[t.jsx("strong",{children:"Lỗi khi tải câu hỏi:"}),t.jsx("p",{className:"error-detail",children:le}),t.jsx("div",{className:"error-actions",children:t.jsxs("button",{onClick:$,className:"retry-button",disabled:G,children:[t.jsx(yo,{size:14}),"Thử lại"]})})]})]})}),W&&de.length>0&&t.jsxs("div",{className:"grammar-questions-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsxs("h3",{className:"section-title",children:[t.jsx(Hr,{size:20}),"Danh sách câu hỏi trong bài (",de.length," câu)"]}),t.jsxs("div",{className:"scoring-info",children:[t.jsx(Dl,{size:16}),t.jsx("span",{children:"Hiển thị tất cả câu hỏi từ bảng grammar_questions cho bài học này"})]})]}),t.jsx("div",{className:"grammar-questions-list",children:de.map((U,ie)=>t.jsxs("div",{className:"grammar-question-card",children:[t.jsx("div",{className:"grammar-question-header",children:t.jsxs("div",{className:"grammar-question-header-left",children:[t.jsxs("span",{className:"grammar-question-number",children:["Câu ",ie+1]}),t.jsx("span",{className:"grammar-question-type",children:U.type==="fill_blank"?"Điền vào chỗ trống":U.type==="multiple_choice"?"Trắc nghiệm":U.type==="rearrange"?"Sắp xếp":U.type}),t.jsxs("span",{className:"grammar-question-points",children:[U.points," điểm"]})]})}),t.jsx("div",{className:"grammar-question-content",children:t.jsxs("div",{className:"grammar-question-text-section",children:[t.jsx("div",{className:"grammar-question-text",children:U.text.split(`
`).map((we,ze)=>t.jsx("div",{className:"grammar-question-line",children:we},ze))}),U.example&&t.jsxs("div",{className:"grammar-question-example",children:[t.jsx("strong",{children:"Ví dụ:"})," ",U.example]}),U.explanation&&t.jsxs("div",{className:"grammar-question-explanation",children:[t.jsx("strong",{children:"Giải thích:"})," ",U.explanation]}),U.correct_answer&&t.jsxs("div",{className:"grammar-question-correct-answer",children:[t.jsx("strong",{children:"Đáp án đúng:"})," ",t.jsx("code",{children:U.correct_answer})]})]})})]},U.id))})]}),t.jsxs("div",{className:"user-answers-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsxs("h3",{className:"section-title",children:[t.jsx(so,{size:20}),"Câu trả lời của học viên (",Q," câu)"]}),t.jsxs("div",{className:"scoring-info",children:[t.jsx(Dl,{size:16}),t.jsx("span",{children:"Chấm điểm thủ công bằng cách chọn Đúng/Sai cho từng câu trả lời"})]})]}),Q===0?t.jsx("div",{className:"no-answers-message",children:t.jsxs("p",{children:[t.jsx(Px,{size:20}),"Học viên chưa trả lời câu hỏi nào."]})}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"bulk-actions",children:[t.jsxs("button",{onClick:K,className:"bulk-correct-button",children:[t.jsx(Gx,{size:16}),"Chấm tất cả là ĐÚNG"]}),t.jsxs("button",{onClick:Fe,className:"bulk-incorrect-button",children:[t.jsx(Ol,{size:16}),"Chấm tất cả là SAI"]}),t.jsxs("button",{onClick:Me,className:"calculate-score-button",children:[t.jsx(O1,{size:16}),"Tính điểm"]})]}),t.jsx("div",{className:"user-answers-list",children:a.answers?.map((U,ie)=>{const we=`${U.questionId}_${U.subQuestionIndex}`,ze=k[we]!==void 0,Pe=k[we];return t.jsxs("div",{className:"user-answer-card",children:[t.jsxs("div",{className:"user-answer-header",children:[t.jsxs("div",{className:"user-answer-info",children:[t.jsxs("span",{className:"answer-index",children:["Câu ",ie+1,U.subQuestionIndex>0&&` (Phần ${U.subQuestionIndex+1})`]}),t.jsxs("span",{className:"answer-question-id",children:["ID câu hỏi: ",U.questionId]}),U.questionType&&t.jsxs("span",{className:"answer-type",children:["Loại: ",U.questionType]})]}),t.jsxs("div",{className:"answer-check-controls",children:[t.jsxs("button",{onClick:()=>Te(U.questionId,U.subQuestionIndex,!0),className:`check-button ${ze&&Pe?"active-correct":""}`,children:[t.jsx(oo,{size:16}),t.jsx("span",{children:"Đúng"})]}),t.jsxs("button",{onClick:()=>Te(U.questionId,U.subQuestionIndex,!1),className:`check-button ${ze&&!Pe?"active-incorrect":""}`,children:[t.jsx(Il,{size:16}),t.jsx("span",{children:"Sai"})]})]})]}),t.jsxs("div",{className:"user-answer-content",children:[t.jsxs("div",{className:"user-answer-text",children:[t.jsx("strong",{children:"Câu trả lời:"}),t.jsx("div",{className:"answer-value",children:U.userAnswer||"(Chưa trả lời)"})]}),U.questionText&&t.jsxs("div",{className:"original-question",children:[t.jsx("strong",{children:"Câu hỏi gốc:"}),t.jsx("div",{className:"question-text",children:U.questionText})]}),U.explanation&&t.jsxs("div",{className:"answer-explanation",children:[t.jsx("strong",{children:"Giải thích (nếu có):"})," ",U.explanation]})]}),t.jsxs("div",{className:"user-answer-footer",children:[t.jsxs("div",{className:"answer-status",children:[t.jsx("span",{className:"status-label",children:"Trạng thái:"}),t.jsx("span",{className:`status-badge ${ze?Pe?"status-correct":"status-incorrect":"status-unchecked"}`,children:ze?Pe?"✓ Đã chấm Đúng":"✗ Đã chấm Sai":"Chưa chấm"})]}),ze&&t.jsxs("div",{className:"score-display",children:[t.jsx("span",{className:"score-label",children:"Điểm:"}),t.jsx("span",{className:"score-value",children:Pe?"1":"0"})]})]})]},ie)})})]})]}),t.jsxs("div",{className:"score-summary",children:[t.jsxs("div",{className:"score-info",children:[t.jsxs("h3",{children:[t.jsx(Zx,{size:20}),"Điểm số"]}),t.jsxs("div",{className:"score-display",children:[t.jsx("span",{className:"score-value",children:b!==null?b:0}),t.jsxs("span",{className:"score-max",children:["/",Q," điểm"]})]}),t.jsxs("div",{className:"score-percentage",children:["(",Q>0?Math.round((b||0)/Q*100):0,"%)"]})]}),t.jsx("div",{className:"score-actions",children:t.jsx("button",{onClick:Me,className:"calculate-button",children:"Tính điểm từ chấm thủ công"})})]}),t.jsxs("div",{className:"feedback-section",children:[t.jsxs("h3",{children:[t.jsx(lo,{size:20}),"Phản hồi của Admin"]}),t.jsx("textarea",{value:x,onChange:U=>w(U.target.value),placeholder:"Nhập phản hồi chi tiết cho học viên (nhận xét về bài làm, gợi ý cải thiện, lời khen...)",className:"feedback-textarea",rows:4}),a.feedback&&a.feedbackAt&&t.jsxs("div",{className:"previous-feedback",children:[t.jsx("strong",{children:"Phản hồi trước:"}),t.jsx("p",{children:a.feedback}),t.jsxs("small",{children:["Lúc: ",new Date(a.feedbackAt).toLocaleString("vi-VN")]})]})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{onClick:D,className:"delete-button",children:[t.jsx(Qx,{size:16}),"Xóa bài test"]}),t.jsxs("div",{className:"submit-buttons",children:[t.jsx("button",{onClick:s,className:"cancel-button",children:"Hủy"}),t.jsx("button",{onClick:E,disabled:!x.trim()||A,className:"submit-button",children:A?t.jsxs(t.Fragment,{children:[t.jsx(bl,{size:16,className:"animate-spin"}),"Đang gửi..."]}):t.jsxs(t.Fragment,{children:[t.jsx(sh,{size:16}),"Gửi phản hồi (",b!==null?b:0," điểm)"]})})]})]}),t.jsx("style",{children:`
          .modal-container {
            background: white;
            border-radius: 1rem;
            box-shadow:
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(0, 0, 0, 0.05);
            width: 1000px;
            max-height: 90vh;
            overflow: hidden auto;
            pointer-events: auto;
            min-width: 800px;
            min-height: 600px;
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .modal-header {
            padding: 1.25rem 1.5rem;
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            user-select: none;
          }

          .modal-header-content {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            flex: 1;
          }

          .modal-title {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0;
          }

          .loading-badge {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.75rem;
            margin-left: 10px;
          }

          .modal-subtitle-section {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .user-info,
          .lesson-info,
          .time-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            opacity: 0.9;
          }

          .email-text {
            font-style: italic;
            opacity: 0.8;
            margin-left: 0.5rem;
          }

          .close-button {
            color: white;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 0.5rem;
            padding: 0.5rem;
            transition: background-color 0.2s;
            border: none;
            cursor: pointer;
            flex-shrink: 0;
          }

          .close-button:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .progress-section {
            padding: 1.25rem 1.5rem;
            background: #f8fafc;
            border-bottom: 1px solid #e5e7eb;
          }

          .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }

          .progress-header h3 {
            margin: 0;
            color: #1f2937;
            font-size: 1.125rem;
          }

          .progress-info {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .progress-text {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: #6b7280;
          }

          .auto-grade-badge {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            background: #10b981;
            color: white;
            padding: 0.125rem 0.5rem;
            border-radius: 12px;
            font-size: 0.75rem;
          }

          .lesson-id {
            padding: 0.25rem 0.75rem;
            background: #e0f2fe;
            color: #0369a1;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
          }

          .progress-bar-container {
            height: 0.5rem;
            background: #e5e7eb;
            border-radius: 9999px;
            overflow: hidden;
            margin-bottom: 1rem;
          }

          .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
            border-radius: 9999px;
            transition: width 0.3s ease;
          }

          .progress-stats {
            display: flex;
            gap: 2rem;
          }

          .stat-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .stat-icon {
            border-radius: 50%;
            padding: 0.25rem;
          }

          .stat-icon.correct { color: #10b981; background: #dcfce7; }
          .stat-icon.incorrect { color: #ef4444; background: #fee2e2; }
          .stat-icon.pending { color: #f59e0b; background: #fef3c7; }
          .stat-icon.info { color: #3b82f6; background: #dbeafe; }

          .stat-count {
            font-size: 1.25rem;
            font-weight: 700;
          }

          .stat-count.correct { color: #10b981; }
          .stat-count.incorrect { color: #ef4444; }
          .stat-count.pending { color: #f59e0b; }
          .stat-count.info { color: #3b82f6; }

          .stat-label {
            font-size: 0.875rem;
            color: #6b7280;
          }

          .header-actions {
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .action-buttons-group {
            display: flex;
            gap: 0.75rem;
            flex-wrap: wrap;
          }

          .questions-info {
            padding: 0.5rem 0.75rem;
            background: #f3f4f6;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: #6b7280;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .questions-text {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .view-questions-button,
          .auto-grade-button,
          .toggle-questions-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.625rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
          }

          .view-questions-button {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
          }

          .view-questions-button:hover:not(:disabled) {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            transform: translateY(-1px);
          }

          .auto-grade-button {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
          }

          .auto-grade-button:hover:not(:disabled) {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            transform: translateY(-1px);
          }

          .toggle-questions-button {
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            color: white;
          }

          .toggle-questions-button:hover:not(:disabled) {
            background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
            transform: translateY(-1px);
          }

          .view-questions-button:disabled,
          .auto-grade-button:disabled,
          .toggle-questions-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none !important;
          }

          .error-section {
            padding: 1.5rem;
            background: #fef2f2;
            border-bottom: 1px solid #fecaca;
          }

          .error-message {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            color: #dc2626;
            font-size: 0.875rem;
          }

          .error-content {
            flex: 1;
          }

          .error-content strong {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 1rem;
          }

          .error-detail {
            margin: 0 0 1rem 0;
            line-height: 1.5;
            color: #991b1b;
          }

          .error-actions {
            display: flex;
            gap: 0.75rem;
            margin-bottom: 0.5rem;
          }

          .retry-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s;
            background: #dc2626;
            color: white;
          }

          .retry-button:hover:not(:disabled) {
            background: #b91c1c;
          }

          .retry-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          /* Grammar Questions Section */
          .grammar-questions-section {
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
          }

          .section-header {
            margin-bottom: 1.5rem;
          }

          .section-title {
            margin: 0 0 0.5rem 0;
            color: #1f2937;
            font-size: 1.125rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .scoring-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem;
            background: #f0f9ff;
            color: #0369a1;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            border-left: 3px solid #0ea5e9;
          }

          .grammar-questions-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .grammar-question-card {
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            overflow: hidden;
            background: white;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          }

          .grammar-question-header {
            padding: 1rem 1.25rem;
            background: #f9fafb;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e5e7eb;
          }

          .grammar-question-header-left {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-wrap: wrap;
          }

          .grammar-question-number {
            padding: 0.375rem 0.875rem;
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            font-size: 0.875rem;
            font-weight: 500;
            border-radius: 9999px;
            min-width: 70px;
            text-align: center;
          }

          .grammar-question-type {
            padding: 0.25rem 0.75rem;
            background: #f3f4f6;
            color: #4b5563;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 0.375rem;
          }

          .grammar-question-points {
            padding: 0.25rem 0.75rem;
            background: #fef3c7;
            color: #92400e;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 0.375rem;
          }

          .grammar-question-content {
            padding: 1.5rem;
            background: white;
          }

          .grammar-question-text-section {
            margin-bottom: 1rem;
          }

          .grammar-question-text {
            font-size: 0.875rem;
            color: #1f2937;
            line-height: 1.6;
            white-space: pre-wrap;
            margin-bottom: 1rem;
          }

          .grammar-question-line {
            margin-bottom: 0.5rem;
          }

          .grammar-question-example {
            padding: 0.75rem;
            background: #fefce8;
            border-radius: 0.375rem;
            margin-bottom: 0.75rem;
            font-size: 0.875rem;
            color: #854d0e;
            border-left: 3px solid #f59e0b;
          }

          .grammar-question-explanation {
            padding: 0.75rem;
            background: #f0f9ff;
            border-radius: 0.375rem;
            margin-bottom: 0.75rem;
            font-size: 0.875rem;
            color: #0369a1;
            border-left: 3px solid #0ea5e9;
          }

          .grammar-question-correct-answer {
            padding: 0.75rem;
            background: #f0fdf4;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            color: #065f46;
            border-left: 3px solid #10b981;
          }

          .grammar-question-correct-answer code {
            background: #d1fae5;
            padding: 0.125rem 0.25rem;
            border-radius: 0.25rem;
            font-family: monospace;
            margin-left: 0.5rem;
          }

          /* User Answers Section */
          .user-answers-section {
            padding: 1.5rem;
          }

          .no-answers-message {
            padding: 2rem;
            text-align: center;
            background: #f3f4f6;
            border-radius: 0.5rem;
            margin: 1.5rem;
            color: #6b7280;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }

          .bulk-actions {
            display: flex;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
            padding: 1rem;
            background: #f9fafb;
            border-radius: 0.5rem;
            border: 1px solid #e5e7eb;
          }

          .bulk-correct-button,
          .bulk-incorrect-button,
          .calculate-score-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
            font-size: 0.875rem;
          }

          .bulk-correct-button {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
          }

          .bulk-correct-button:hover {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            transform: translateY(-1px);
          }

          .bulk-incorrect-button {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
          }

          .bulk-incorrect-button:hover {
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            transform: translateY(-1px);
          }

          .calculate-score-button {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
          }

          .calculate-score-button:hover {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            transform: translateY(-1px);
          }

          .user-answers-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .user-answer-card {
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            overflow: hidden;
            background: white;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          }

          .user-answer-header {
            padding: 1rem 1.25rem;
            background: #f9fafb;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e5e7eb;
          }

          .user-answer-info {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-wrap: wrap;
          }

          .answer-index {
            font-weight: 600;
            color: #1f2937;
            font-size: 0.875rem;
          }

          .answer-question-id {
            padding: 0.25rem 0.75rem;
            background: #e0f2fe;
            color: #0369a1;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 0.375rem;
            border: 1px solid #bae6fd;
          }

          .answer-type {
            padding: 0.25rem 0.75rem;
            background: #f3f4f6;
            color: #4b5563;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 0.375rem;
          }

          .answer-check-controls {
            display: flex;
            gap: 0.5rem;
          }

          .check-button {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            padding: 0.5rem 0.875rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            transition: all 0.2s;
            background: #f3f4f6;
            color: #374151;
            border: 1px solid transparent;
            cursor: pointer;
          }

          .check-button.active-correct {
            background: #dcfce7;
            color: #166534;
            border-color: #86efac;
          }

          .check-button.active-incorrect {
            background: #fee2e2;
            color: #991b1b;
            border-color: #fca5a5;
          }

          .check-button:hover:not(.active-correct):not(.active-incorrect) {
            background: #e5e7eb;
          }

          .user-answer-content {
            padding: 1.5rem;
            background: white;
          }

          .user-answer-text {
            margin-bottom: 1rem;
          }

          .user-answer-text strong {
            display: block;
            margin-bottom: 0.5rem;
            color: #374151;
            font-size: 0.875rem;
          }

          .answer-value {
            padding: 0.75rem;
            background: #f8fafc;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: #1f2937;
            border: 1px solid #e5e7eb;
            white-space: pre-wrap;
            word-break: break-word;
          }

          .original-question {
            margin-bottom: 1rem;
          }

          .original-question strong {
            display: block;
            margin-bottom: 0.5rem;
            color: #374151;
            font-size: 0.875rem;
          }

          .question-text {
            padding: 0.75rem;
            background: #f9fafb;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: #6b7280;
            border: 1px solid #e5e7eb;
            white-space: pre-wrap;
            word-break: break-word;
          }

          .answer-explanation {
            padding: 0.75rem;
            background: #f0f9ff;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: #0369a1;
            border-left: 3px solid #0ea5e9;
          }

          .user-answer-footer {
            padding: 1rem 1.25rem;
            border-top: 1px solid #e5e7eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fafafa;
          }

          .answer-status {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .status-label {
            font-size: 0.875rem;
            color: #6b7280;
          }

          .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
          }

          .status-correct {
            background: #dcfce7;
            color: #166534;
          }

          .status-incorrect {
            background: #fee2e2;
            color: #991b1b;
          }

          .status-unchecked {
            background: #f3f4f6;
            color: #6b7280;
          }

          .score-display {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .score-label {
            font-size: 0.875rem;
            color: #6b7280;
          }

          .score-value {
            font-weight: 600;
            color: #1e40af;
            font-size: 0.875rem;
          }

          .score-summary {
            padding: 1.5rem;
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            border-top: 1px solid #e5e7eb;
          }

          .score-info h3 {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0 0 0.5rem 0;
            color: #1e40af;
            font-size: 1.125rem;
          }

          .score-display {
            display: flex;
            align-items: baseline;
            gap: 0.25rem;
            margin-bottom: 0.25rem;
          }

          .score-value {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e40af;
          }

          .score-max {
            font-size: 1.5rem;
            color: #3b82f6;
          }

          .score-percentage {
            font-size: 1rem;
            color: #6b7280;
          }

          .score-actions {
            display: flex;
            gap: 0.75rem;
            margin-top: 1rem;
          }

          .calculate-button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            font-size: 0.875rem;
          }

          .calculate-button:hover {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            transform: translateY(-1px);
          }

          .feedback-section {
            padding: 1.5rem;
            border-top: 1px solid #e5e7eb;
          }

          .feedback-section h3 {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0 0 1rem 0;
            color: #1f2937;
            font-size: 1.125rem;
          }

          .feedback-textarea {
            width: 100%;
            padding: 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.75rem;
            resize: none;
            transition: all 0.2s;
            font-family: inherit;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            min-height: 100px;
          }

          .feedback-textarea:focus {
            outline: none;
            border-color: transparent;
            box-shadow:
              0 0 0 2px #3b82f6,
              0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          .previous-feedback {
            padding: 1rem;
            background: #f3f4f6;
            border-radius: 0.5rem;
            border-left: 4px solid #9ca3af;
          }

          .previous-feedback strong {
            display: block;
            margin-bottom: 0.5rem;
            color: #374151;
          }

          .previous-feedback p {
            margin: 0 0 0.5rem 0;
            color: #4b5563;
            font-size: 0.875rem;
          }

          .previous-feedback small {
            color: #9ca3af;
            font-size: 0.75rem;
          }

          .action-buttons {
            padding: 1.5rem;
            border-top: 1px solid #e5e7eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f9fafb;
          }

          .delete-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: #fee2e2;
            color: #dc2626;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
          }

          .delete-button:hover {
            background: #fecaca;
          }

          .submit-buttons {
            display: flex;
            gap: 0.75rem;
          }

          .cancel-button {
            padding: 0.75rem 1.5rem;
            border: 1px solid #d1d5db;
            background: white;
            color: #374151;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.2s;
            cursor: pointer;
          }

          .cancel-button:hover {
            background: #f3f4f6;
          }

          .submit-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
          }

          .submit-button:hover:not(:disabled) {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            transform: translateY(-1px);
          }

          .submit-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `})]})]})}const O1=a=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[t.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),t.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),t.jsx("line",{x1:"8",y1:"10",x2:"16",y2:"10"}),t.jsx("line",{x1:"8",y1:"14",x2:"12",y2:"14"}),t.jsx("line",{x1:"14",y1:"14",x2:"16",y2:"14"}),t.jsx("line",{x1:"8",y1:"18",x2:"12",y2:"18"}),t.jsx("line",{x1:"14",y1:"18",x2:"16",y2:"18"})]});function R1({lessonId:a,isOpen:o,onClose:s,position:l={x:600,y:100},onPositionChange:u}){const[h,m]=f.useState([]),[g,x]=f.useState(!1),[w,b]=f.useState([]),[y,k]=f.useState(l),[I,j]=f.useState(!1),[v,N]=f.useState({x:0,y:0}),[V,O]=f.useState(null);f.useEffect(()=>{o&&a&&B()},[o,a]),f.useEffect(()=>{k(l)},[l]);const B=async()=>{try{x(!0);const Y=await Ie.get(`/admin/questions/lesson/${a}/correct-answers`);if(Y.data.success&&Array.isArray(Y.data.data)){const ue=Y.data.data.map(he=>({id:he.id,lessonId:he.lessonId,type:he.type||"fill_blank",text:he.text||"",correct_answer:he.correctAnswer||"",points:he.points||10,example:he.example,options:he.options}));m(ue),b(ue.map(he=>he.id))}else m([]),ge.error("Không có dữ liệu câu hỏi cho bài học này")}catch{ge.error("Không thể tải thông tin câu hỏi"),m([])}finally{x(!1)}},G=Y=>{Y.preventDefault(),j(!0),N({x:Y.clientX-y.x,y:Y.clientY-y.y})},te=Y=>{if(!I)return;const P=Y.clientX-v.x,ue=Y.clientY-v.y,he=Math.max(0,Math.min(P,window.innerWidth-800)),ne=Math.max(0,Math.min(ue,window.innerHeight-600)),M={x:he,y:ne};k(M),u&&u(M)},de=()=>{j(!1)};f.useEffect(()=>{if(I)return document.addEventListener("mousemove",te),document.addEventListener("mouseup",de),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",de)}},[I,v]);const q=Y=>{w.includes(Y)?b(w.filter(P=>P!==Y)):b([...w,Y])},le=()=>{h.length!==0&&(w.length===h.length?b([]):b(h.map(Y=>Y.id)))},C=Y=>{navigator.clipboard.writeText(Y).then(()=>ge.success("Đã copy vào clipboard")).catch(()=>ge.error("Không thể copy"))},A=Y=>{const P={...Y,metadata:{copiedAt:new Date().toISOString(),lessonId:a}};navigator.clipboard.writeText(JSON.stringify(P,null,2)).then(()=>ge.success("Đã copy toàn bộ dữ liệu")).catch(()=>ge.error("Không thể copy"))},xe=()=>{const Y=h.some(P=>P.correct_answer!==void 0&&P.correct_answer!==null&&P.correct_answer.trim()!=="");return t.jsxs("div",{className:"database-warning",children:[t.jsxs("div",{className:"warning-header",children:[t.jsx(Rr,{size:20}),t.jsx("span",{className:"warning-title",children:"VẤN ĐỀ DATABASE"})]}),t.jsx("div",{className:"warning-content",children:Y?t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"warning-message",children:t.jsx("strong",{children:"Chỉ một số câu hỏi có correct_answer"})}),t.jsx("div",{className:"warning-details",children:t.jsxs("p",{children:["Trong ",h.length," câu hỏi, chỉ có"," ",h.filter(P=>P.correct_answer&&P.correct_answer.trim()!=="").length," ","câu có dữ liệu correct_answer."]})})]}):t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"warning-message",children:t.jsx("strong",{children:'Trường "correct_answer" KHÔNG TỒN TẠI trong database!'})}),t.jsxs("div",{className:"warning-details",children:[t.jsxs("p",{children:["Đã kiểm tra ",h.length," câu hỏi, không có câu nào có trường correct_answer."]}),t.jsx("p",{children:"Điều này có nghĩa:"}),t.jsxs("ul",{className:"warning-list",children:[t.jsxs("li",{children:["Bảng ",t.jsx("code",{children:"grammar_questions"})," không có cột"," ",t.jsx("code",{children:"correct_answer"})]}),t.jsx("li",{children:"Hoặc cột này tồn tại nhưng API không trả về"}),t.jsx("li",{children:"Hoặc dữ liệu chưa được nhập vào cột này"})]})]})]})}),t.jsxs("div",{className:"warning-actions",children:[t.jsxs("button",{className:"action-button",onClick:()=>{ge.success("Đã mở DevTools Console")},children:[t.jsx(Ur,{size:14})," Xem Console"]}),t.jsxs("button",{className:"action-button",onClick:B,children:[t.jsx(sb,{size:14})," Refresh Data"]})]})]})},W=Y=>{const P=Y.correct_answer!==void 0,ue=Y.correct_answer||"",he=!ue||ue.trim()==="";return t.jsxs("div",{className:"question-details",children:[!P||he?t.jsxs("div",{className:"data-warning-section",children:[t.jsx("div",{className:"warning-icon",children:t.jsx(Rr,{size:20})}),t.jsxs("div",{className:"warning-text",children:[t.jsx("div",{className:"warning-title",children:"CỘT CORRECT_ANSWER KHÔNG CÓ DỮ LIỆU"}),t.jsx("div",{className:"warning-description",children:P?"Trường correct_answer tồn tại nhưng giá trị là rỗng hoặc null.":"Trường correct_answer không tồn tại trong đối tượng API trả về."})]})]}):null,t.jsxs("div",{className:"detail-section",children:[t.jsxs("div",{className:"detail-header",children:[t.jsx(Hr,{size:16}),t.jsx("span",{children:"Nội dung câu hỏi (text)"})]}),t.jsx("div",{className:"detail-content",children:t.jsx("pre",{className:"question-text",children:Y.text||"(Không có nội dung)"})})]}),Y.example&&t.jsxs("div",{className:"detail-section",children:[t.jsxs("div",{className:"detail-header",children:[t.jsx(Un,{size:16}),t.jsx("span",{children:"Ví dụ (example)"})]}),t.jsx("div",{className:"detail-content",children:t.jsx("pre",{className:"example-text",children:Y.example})})]}),t.jsxs("div",{className:"detail-section",children:[t.jsxs("div",{className:"detail-header",children:[t.jsx(Fa,{size:16}),t.jsxs("span",{children:["Dữ liệu cột correct_answer",P?" (ĐÃ TỒN TẠI)":" (KHÔNG TỒN TẠI)"]})]}),t.jsx("div",{className:"detail-content",children:P?he?t.jsxs("div",{className:"empty-field-warning",children:[t.jsxs("div",{className:"empty-header",children:[t.jsx(Rr,{size:16}),t.jsx("span",{className:"empty-title",children:"TRƯỜNG TỒN TẠI NHƯNG RỖNG"})]}),t.jsxs("div",{className:"empty-content",children:[t.jsxs("p",{children:["Trường ",t.jsx("code",{children:"correct_answer"})," tồn tại nhưng giá trị là rỗng hoặc chỉ có khoảng trắng."]}),t.jsxs("div",{className:"empty-value",children:[t.jsx("span",{className:"value-label",children:"Giá trị:"}),t.jsxs("pre",{className:"value-content",children:['"',ue,'"']})]}),t.jsxs("div",{className:"empty-stats",children:[t.jsxs("span",{className:"stat",children:["Độ dài: ",ue.length]}),t.jsxs("span",{className:"stat",children:["Chỉ có khoảng trắng:"," ",ue.trim()===""?"Có":"Không"]})]})]})]}):t.jsxs("div",{className:"correct-answer-display",children:[t.jsxs("div",{className:"answer-header",children:[t.jsx("span",{className:"answer-label",children:"Giá trị cột correct_answer:"}),t.jsx("button",{className:"copy-button",onClick:()=>C(ue),title:"Copy to clipboard",children:t.jsx(xl,{size:14})})]}),t.jsx("div",{className:"answer-content",children:t.jsx("pre",{className:"answer-value",children:ue})}),t.jsxs("div",{className:"answer-info",children:[t.jsxs("span",{className:"info-item",children:["Độ dài: ",ue.length," ký tự"]}),t.jsxs("span",{className:"info-item",children:["Loại: ",Y.type]})]})]}):t.jsxs("div",{className:"missing-field-warning",children:[t.jsxs("div",{className:"missing-header",children:[t.jsx(Fx,{size:16}),t.jsx("span",{className:"missing-title",children:"TRƯỜNG KHÔNG TỒN TẠI"})]}),t.jsxs("div",{className:"missing-content",children:[t.jsxs("p",{children:["Đối tượng từ API ",t.jsx("strong",{children:"KHÔNG có thuộc tính"})," ",t.jsx("code",{children:"correct_answer"})]}),t.jsx("p",{className:"missing-subtitle",children:"Các trường có sẵn:"}),t.jsx("ul",{className:"available-fields",children:Object.keys(Y).map((ne,M)=>t.jsxs("li",{children:[t.jsx("code",{children:ne}),": ",typeof Y[ne],Array.isArray(Y[ne])?` (${Y[ne].length} items)`:Y[ne]?` = "${Y[ne]}"`:""]},M))})]})]})})]}),Y.options&&t.jsxs("div",{className:"detail-section",children:[t.jsxs("div",{className:"detail-header",children:[t.jsx(Fa,{size:16}),t.jsxs("span",{children:["Options Data (",Y.options.length," items)"]})]}),t.jsx("div",{className:"detail-content",children:t.jsxs("div",{className:"options-container",children:[t.jsx("div",{className:"options-header",children:t.jsxs("span",{className:"options-label",children:["Kiểu dữ liệu:"," ",Array.isArray(Y.options)?"Array":typeof Y.options]})}),t.jsx("div",{className:"options-list",children:Array.isArray(Y.options)?Y.options.map((ne,M)=>t.jsxs("div",{className:"option-item",children:[t.jsxs("div",{className:"option-header",children:[t.jsxs("span",{className:"option-index",children:["Option ",M+1]}),t.jsxs("span",{className:"option-type",children:["(",typeof ne,")"]})]}),t.jsx("div",{className:"option-content",children:typeof ne=="object"?JSON.stringify(ne,null,2):String(ne)})]},M)):t.jsx("pre",{className:"raw-options",children:JSON.stringify(Y.options,null,2)})})]})})]}),t.jsxs("div",{className:"detail-section",children:[t.jsxs("div",{className:"detail-header",children:[t.jsx(Fa,{size:16}),t.jsx("span",{children:"Raw Data (Toàn bộ đối tượng từ API)"})]}),t.jsx("div",{className:"detail-content",children:t.jsxs("div",{className:"raw-data-container",children:[t.jsx("div",{className:"raw-data-header",children:t.jsxs("button",{className:"copy-button",onClick:()=>A(Y),title:"Copy toàn bộ dữ liệu",children:[t.jsx(xl,{size:14})," Copy JSON"]})}),t.jsx("pre",{className:"raw-data-json",children:JSON.stringify(Y,null,2)})]})})]}),t.jsx("div",{className:"metadata",children:t.jsx("table",{className:"metadata-table",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"label",children:"ID:"}),t.jsx("td",{className:"value",children:Y.id})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"label",children:"Lesson ID:"}),t.jsx("td",{className:"value",children:Y.lessonId})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"label",children:"Type:"}),t.jsx("td",{className:"value",children:Y.type})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"label",children:"Points:"}),t.jsx("td",{className:"value",children:Y.points})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"label",children:"Has correct_answer:"}),t.jsx("td",{className:"value",children:P?"Có":"Không"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"label",children:"Has Options:"}),t.jsx("td",{className:"value",children:Y.options?`Có (${Y.options.length})`:"Không"})]})]})})})]})};return o?t.jsxs("div",{className:"modal-container draggable-modal",style:{position:"fixed",left:`${y.x}px`,top:`${y.y}px`,zIndex:1002},children:[t.jsxs("div",{className:"modal-header draggable-header",onMouseDown:G,style:{cursor:I?"grabbing":"grab"},children:[t.jsxs("div",{className:"modal-header-content",children:[t.jsxs("h2",{className:"modal-title",children:[t.jsx(Fa,{size:24}),"Debug Database - Bài ",a]}),t.jsxs("div",{className:"modal-subtitle",children:[t.jsx("span",{children:"Kiểm tra cấu trúc database và dữ liệu correct_answer"}),V&&t.jsxs("span",{className:"api-count",children:["API trả về: ",V.count," bản ghi"]})]})]}),t.jsx("button",{onClick:s,className:"close-button",children:t.jsx(Kr,{size:24})})]}),g?t.jsxs("div",{className:"loading-state",children:[t.jsx("div",{className:"loading-spinner",children:t.jsx("div",{className:"spinner"})}),t.jsx("p",{className:"loading-text",children:"Đang tải dữ liệu từ database..."})]}):t.jsxs("div",{className:"modal-content",children:[xe(),t.jsxs("div",{className:"actions-section",children:[t.jsxs("div",{className:"questions-count",children:["Tổng: ",h.length," bản ghi từ grammar_questions",t.jsxs("span",{className:"correct-count",children:["Có correct_answer:"," ",h.filter(Y=>Y.correct_answer&&Y.correct_answer.trim()!=="").length]})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsx("button",{onClick:B,className:"refresh-button",children:"Refresh Data"}),t.jsx("button",{onClick:le,className:"toggle-all-button",children:w.length===h.length?"Thu gọn tất cả":"Mở rộng tất cả"})]})]}),h.length>0?t.jsx("div",{className:"questions-list",children:h.map((Y,P)=>{const ue=w.includes(Y.id),he=Y.correct_answer!==void 0,ne=!Y.correct_answer||Y.correct_answer.trim()==="";return t.jsxs("div",{className:"question-card",children:[t.jsxs("div",{className:"question-header",onClick:()=>q(Y.id),children:[t.jsxs("div",{className:"question-header-left",children:[t.jsxs("span",{className:"question-number",children:["#",P+1," (ID ",Y.id,")"]}),t.jsx("span",{className:"question-type",children:Y.type}),t.jsxs("span",{className:"question-points",children:[Y.points," điểm"]}),he?ne?t.jsxs("span",{className:"warning-badge",children:[t.jsx(Rr,{size:14})," Empty Value"]}):t.jsx("span",{className:"success-badge",children:"✓ Has Answer"}):t.jsxs("span",{className:"error-badge",children:[t.jsx(Rr,{size:14})," Missing Field"]})]}),t.jsxs("div",{className:"question-header-right",children:[t.jsx("button",{className:"copy-full-button",onClick:M=>{M.stopPropagation(),A(Y)},title:"Copy toàn bộ dữ liệu câu hỏi",children:t.jsx(xl,{size:14})}),t.jsx("span",{className:"expand-icon",children:ue?t.jsx(lx,{size:20}):t.jsx(Fl,{size:20})})]})]}),ue&&W(Y)]},Y.id)})}):t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-icon",children:t.jsx(ah,{size:48})}),t.jsx("h3",{className:"empty-title",children:"Không có dữ liệu"}),t.jsxs("p",{className:"empty-description",children:["Bài học ",a," chưa có bản ghi trong bảng grammar_questions"]}),t.jsx("button",{onClick:B,className:"retry-button",children:"Thử lại"})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("div",{className:"footer-info",children:t.jsxs("span",{children:["Database: grammar_questions | Lesson: ",a," | Tìm thấy:"," ",h.length," câu hỏi"]})}),t.jsx("button",{onClick:s,className:"close-modal-button",children:"Đóng"})]}),t.jsx("style",{children:`
        .modal-container {
          background: white;
          border-radius: 1rem;
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(0, 0, 0, 0.05);
          width: 1100px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          pointer-events: auto;
          resize: both;
          min-width: 800px;
          min-height: 600px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .database-warning {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          border-radius: 0.75rem;
          padding: 1.25rem;
          margin-bottom: 1.5rem;
          border: 2px solid #fecaca;
        }

        .warning-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .warning-title {
          font-weight: 700;
          font-size: 1.125rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .warning-content {
          margin-bottom: 1rem;
        }

        .warning-message {
          margin: 0 0 0.75rem 0;
          font-size: 1rem;
        }

        .warning-details {
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
        }

        .warning-list {
          margin: 0.5rem 0 0 1rem;
          padding: 0;
        }

        .warning-list li {
          margin-bottom: 0.25rem;
        }

        .warning-actions {
          display: flex;
          gap: 0.75rem;
        }

        .action-button {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .data-warning-section {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: #fef3f2;
          border-radius: 0.5rem;
          border: 1px solid #fed7d7;
          margin-bottom: 1.5rem;
        }

        .warning-icon {
          color: #dc2626;
          flex-shrink: 0;
        }

        .warning-text {
          flex: 1;
        }

        .warning-text .warning-title {
          color: #dc2626;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
        }

        .warning-text .warning-description {
          color: #7c2d12;
          font-size: 0.875rem;
        }

        .missing-field-warning,
        .empty-field-warning {
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        .missing-field-warning {
          background: #fef3f2;
          border: 2px solid #fed7d7;
        }

        .empty-field-warning {
          background: #fffbeb;
          border: 2px solid #fde68a;
        }

        .missing-header,
        .empty-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .missing-title,
        .empty-title {
          font-weight: 700;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .missing-title {
          color: #dc2626;
        }

        .empty-title {
          color: #92400e;
        }

        .missing-content,
        .empty-content {
          color: #1f2937;
        }

        .missing-content p,
        .empty-content p {
          margin: 0 0 0.75rem 0;
          font-size: 0.875rem;
        }

        .missing-subtitle {
          font-weight: 600;
          color: #374151;
          margin-top: 1rem !important;
        }

        .available-fields {
          margin: 0.5rem 0 0 1rem;
          padding: 0;
          list-style: none;
        }

        .available-fields li {
          padding: 0.25rem 0;
          font-family: ui-monospace, monospace;
          font-size: 0.75rem;
          color: #1f2937;
        }

        .available-fields code {
          background: #e5e7eb;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-family: ui-monospace, monospace;
        }

        .empty-value {
          margin: 1rem 0;
          padding: 0.75rem;
          background: white;
          border-radius: 0.375rem;
          border: 1px solid #e5e7eb;
        }

        .value-label {
          font-weight: 600;
          color: #6b7280;
          font-size: 0.75rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .value-content {
          margin: 0;
          color: #dc2626;
          font-family: ui-monospace, monospace;
          font-size: 0.75rem;
          white-space: pre-wrap;
          word-break: break-all;
        }

        .empty-stats {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
        }

        .stat {
          padding: 0.25rem 0.5rem;
          background: #f3f4f6;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .raw-data-container {
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .raw-data-header {
          padding: 0.75rem;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: flex-end;
        }

        .raw-data-json {
          margin: 0;
          padding: 1rem;
          background: white;
          color: #1f2937;
          font-family: ui-monospace, monospace;
          font-size: 0.75rem;
          line-height: 1.4;
          white-space: pre-wrap;
          max-height: 300px;
          overflow-y: auto;
        }

        .error-badge {
          padding: 0.375rem 0.75rem;
          background: #fee2e2;
          color: #dc2626;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .warning-badge {
          padding: 0.375rem 0.75rem;
          background: #fef3c7;
          color: #92400e;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .success-badge {
          padding: 0.375rem 0.75rem;
          background: #d1fae5;
          color: #065f46;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .correct-count {
          margin-left: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: #d1fae5;
          color: #065f46;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .api-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: ui-monospace, monospace;
          font-size: 0.875rem;
        }

        .draggable-header {
          user-select: none;
        }

        .modal-header {
          padding: 1.25rem 1.5rem;
          background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-header-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .modal-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .modal-subtitle {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .close-button {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 0.5rem;
          transition: background-color 0.2s;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          flex: 1;
        }

        .loading-spinner {
          position: relative;
          margin-bottom: 1rem;
        }

        .spinner {
          width: 3rem;
          height: 3rem;
          border: 3px solid #e5e7eb;
          border-top-color: #4338ca;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loading-text {
          color: #6b7280;
          font-weight: 500;
          font-size: 0.875rem;
        }

        .modal-content {
          padding: 1.25rem;
          overflow-y: auto;
          flex: 1;
        }

        .actions-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .action-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .questions-count {
          padding: 0.5rem 0.75rem;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          display: flex;
          align-items: center;
        }

        .refresh-button {
          padding: 0.5rem 1rem;
          background: #10b981;
          color: white;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .refresh-button:hover {
          background: #059669;
        }

        .toggle-all-button {
          padding: 0.5rem 1rem;
          background: #f3f4f6;
          color: #374151;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .toggle-all-button:hover {
          background: #e5e7eb;
        }

        .questions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .question-card {
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          overflow: hidden;
          background: white;
        }

        .question-header {
          padding: 1rem 1.25rem;
          background: #f9fafb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .question-header:hover {
          background: #f3f4f6;
        }

        .question-header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .question-number {
          padding: 0.375rem 0.875rem;
          background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%);
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 9999px;
          min-width: 80px;
          text-align: center;
        }

        .question-type {
          padding: 0.375rem 0.75rem;
          background: #ede9fe;
          color: #5b21b6;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
        }

        .question-points {
          padding: 0.375rem 0.75rem;
          background: #fef3c7;
          color: #92400e;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .question-header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .copy-full-button {
          padding: 0.375rem;
          background: #dbeafe;
          color: #1d4ed8;
          border-radius: 0.375rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .copy-full-button:hover {
          background: #bfdbfe;
        }

        .expand-icon {
          color: #6b7280;
        }

        .question-details {
          padding: 1.5rem;
          background: white;
        }

        .detail-section {
          margin-bottom: 1.5rem;
        }

        .detail-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 0.75rem;
          padding-bottom: 0.375rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .detail-content {
          padding: 1rem;
          background: #f9fafb;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }

        .question-text,
        .example-text {
          margin: 0;
          color: #1f2937;
          line-height: 1.6;
          white-space: pre-wrap;
          font-family: inherit;
          font-size: 0.875rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .correct-answer-display {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .answer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .answer-label {
          font-weight: 600;
          color: #4338ca;
          font-size: 0.875rem;
        }

        .copy-button {
          padding: 0.375rem;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 0.375rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .copy-button:hover {
          background: #c7d2fe;
        }

        .answer-content {
          padding: 1rem;
          background: white;
          border-radius: 0.5rem;
          border: 2px solid #c7d2fe;
          max-height: 300px;
          overflow-y: auto;
        }

        .answer-value {
          margin: 0;
          color: #3730a3;
          line-height: 1.6;
          white-space: pre-wrap;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.875rem;
        }

        .answer-info {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .info-item {
          padding: 0.25rem 0.5rem;
          background: #f3f4f6;
          border-radius: 0.25rem;
        }

        .options-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .options-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .options-label {
          font-weight: 600;
          color: #7c3aed;
          font-size: 0.875rem;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .option-item {
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .option-header {
          padding: 0.5rem 0.75rem;
          background: #f5f3ff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e5e7eb;
        }

        .option-index {
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b7280;
        }

        .option-type {
          font-size: 0.625rem;
          font-weight: 600;
          color: #059669;
          background: #d1fae5;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
        }

        .option-content {
          margin: 0;
          padding: 0.75rem;
          background: white;
          color: #374151;
          line-height: 1.4;
          white-space: pre-wrap;
          font-family: ui-monospace, monospace;
          font-size: 0.75rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .raw-options {
          margin: 0;
          padding: 0.75rem;
          background: white;
          border-radius: 0.375rem;
          border: 1px solid #e5e7eb;
          font-family: ui-monospace, monospace;
          font-size: 0.75rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .metadata {
          margin-top: 1.5rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
        }

        .metadata-table {
          width: 100%;
          border-collapse: collapse;
        }

        .metadata-table tr {
          border-bottom: 1px solid #e2e8f0;
        }

        .metadata-table tr:last-child {
          border-bottom: none;
        }

        .metadata-table td {
          padding: 0.5rem;
        }

        .metadata-table .label {
          color: #64748b;
          font-weight: 500;
          width: 150px;
        }

        .metadata-table .value {
          color: #1e293b;
          font-family: ui-monospace, monospace;
          font-size: 0.875rem;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          text-align: center;
        }

        .empty-icon {
          color: #9ca3af;
          margin-bottom: 1rem;
        }

        .empty-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 0.5rem 0;
        }

        .empty-description {
          color: #6b7280;
          max-width: 24rem;
          margin: 0 0 1rem 0;
          font-size: 0.875rem;
        }

        .retry-button {
          padding: 0.5rem 1rem;
          background: #3b82f6;
          color: white;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
        }

        .retry-button:hover {
          background: #2563eb;
        }

        .modal-footer {
          padding: 1rem 1.25rem;
          border-top: 1px solid #e5e7eb;
          background: #f9fafb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-info {
          font-size: 0.75rem;
          color: #6b7280;
          font-family: ui-monospace, monospace;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .close-modal-button {
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
        }

        .close-modal-button:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: translateY(-1px);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }

        .answer-content::-webkit-scrollbar {
          width: 6px;
        }

        .answer-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .answer-content::-webkit-scrollbar-thumb {
          background: #c7d2fe;
          border-radius: 3px;
        }

        .answer-content::-webkit-scrollbar-thumb:hover {
          background: #a5b4fc;
        }

        .raw-data-json::-webkit-scrollbar,
        .option-content::-webkit-scrollbar {
          width: 4px;
        }

        .raw-data-json::-webkit-scrollbar-track,
        .option-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }

        .raw-data-json::-webkit-scrollbar-thumb,
        .option-content::-webkit-scrollbar-thumb {
          background: #ddd6fe;
          border-radius: 2px;
        }
      `})]}):null}function $1({onNavigate:a}){const{user:o}=vn(),[s,l]=f.useState([]),[u,h]=f.useState([]),[m,g]=f.useState(!0),[x,w]=f.useState(null),[b,y]=f.useState(!1),[k,I]=f.useState(!1),[j,v]=f.useState("pending"),[N,V]=f.useState(""),[O,B]=f.useState(0),[G,te]=f.useState({}),[de,q]=f.useState(1),[le]=f.useState(10),[C,A]=f.useState({x:50,y:50}),[xe,W]=f.useState({x:550,y:50}),[Y,P]=f.useState([]),[ue,he]=f.useState(!1),[ne,M]=f.useState(!1);f.useEffect(()=>{if(!o){a("login");return}if(o.role!=="ADMIN"){ge.error("Bạn không có quyền truy cập trang quản trị"),a("landing");return}Z(),z()},[o,a]),f.useEffect(()=>{let E=s;if(j==="pending"?E=E.filter(D=>D.status==="pending"):j==="feedbacked"&&(E=E.filter(D=>D.status==="feedbacked")),N){const D=N.toLowerCase();E=E.filter(Q=>Q.userName?.toLowerCase().includes(D)||Q.userEmail?.toLowerCase().includes(D)||Q.lessonTitle?.toLowerCase().includes(D)||Q.lessonId.toString().includes(N))}h(E),q(1)},[s,j,N]),f.useEffect(()=>{P([]),he(!1)},[u]);const X=async E=>{try{const D=[...new Set(E)],Q=D.map(Ce=>Ie.get(`/admin/users/${Ce}`).catch(()=>null)),re=await Promise.all(Q),ee={};re.forEach((Ce,U)=>{Ce&&Ce.data&&(ee[D[U]]={name:Ce.data.data?.fullName||Ce.data.data?.username||`User ${D[U]}`,email:Ce.data.data?.email||"N/A"})}),te(Ce=>({...Ce,...ee}))}catch{}},Z=async()=>{try{g(!0);const E=await Ie.get("/admin/mini-test/submissions");let D=[];E.data.data&&Array.isArray(E.data.data)?D=E.data.data:Array.isArray(E.data)&&(D=E.data);const Q=D.map(ee=>{let Ce=[];if(ee.answers)try{if(typeof ee.answers=="string"){const ie=JSON.parse(ee.answers),we=[];Object.entries(ie).forEach(([ze,Pe])=>{const Be=parseInt(ze);Array.isArray(Pe)?Pe.forEach((ut,ln)=>{we.push({questionId:Be,userAnswer:String(ut),subQuestionIndex:ln,originalAnswer:JSON.stringify(ut)})}):we.push({questionId:Be,userAnswer:String(Pe),subQuestionIndex:0,originalAnswer:String(Pe)})}),Ce=we}else if(Array.isArray(ee.answers))Ce=ee.answers.map((ie,we)=>({questionId:ie.questionId||ie.question_id||we+1,userAnswer:ie.userAnswer||ie.user_answer||ie.answer||String(ie),isCorrect:ie.isCorrect||ie.is_correct||void 0,correctAnswer:ie.correctAnswer||ie.correct_answer||void 0,subQuestionIndex:ie.subQuestionIndex||0,originalAnswer:JSON.stringify(ie)}));else if(typeof ee.answers=="object"){const ie=[];Object.entries(ee.answers).forEach(([we,ze])=>{const Pe=parseInt(we);Array.isArray(ze)?ze.forEach((Be,ut)=>{ie.push({questionId:Pe,userAnswer:String(Be),subQuestionIndex:ut,originalAnswer:JSON.stringify(Be)})}):ie.push({questionId:Pe,userAnswer:String(ze),subQuestionIndex:0,originalAnswer:String(ze)})}),Ce=ie}}catch{}let U="pending";if(ee.status){const ie=String(ee.status).toLowerCase();ie==="feedbacked"?U="feedbacked":ie==="pending"?U="pending":U=ee.feedback||ee.score!==null?"feedbacked":"pending"}else U=ee.feedback||ee.score!==null?"feedbacked":"pending";return{id:ee.id,userId:ee.userId||ee.user_id,userName:ee.userName||ee.user_name||`User ${ee.userId||ee.user_id}`,userEmail:ee.userEmail||ee.user_email||"N/A",lessonId:ee.lessonId||ee.lesson_id,lessonTitle:ee.lessonTitle||ee.lesson_title||`Bài ${ee.lessonId||ee.lesson_id}`,score:ee.score!==void 0?ee.score:null,status:U,feedback:ee.feedback||ee.admin_feedback||null,feedbackAt:ee.feedbackAt||ee.feedback_at||null,submittedAt:ee.submittedAt||ee.submitted_at||ee.created_at||new Date().toISOString(),answers:Ce,timeSpent:ee.timeSpent||ee.time_spent||0}});l(Q);const re=Q.filter(ee=>!G[ee.userId]).map(ee=>ee.userId);re.length>0&&X(re)}catch(E){ge.error(E.response?.data?.message||"Lỗi khi tải danh sách bài test"),l([])}finally{g(!1)}},z=async()=>{try{const E=await Ie.get("/admin/mini-test/pending-count");B(E.data.count||E.data||0)}catch{B(0)}},$=E=>{P(D=>{if(D.includes(E)){const Q=D.filter(re=>re!==E);return he(!1),Q}else{const Q=[...D,E];return Q.length===se.length&&he(!0),Q}})},be=()=>{if(ue)P([]),he(!1);else{const E=se.map(D=>D.id);P(E),he(!0)}},J=async()=>{if(Y.length===0){ge.error("Vui lòng chọn ít nhất một bài test để xóa");return}if(window.confirm(`Bạn có chắc muốn xóa ${Y.length} bài test đã chọn? Hành động này không thể hoàn tác.`))try{M(!0);const E=await Ie.post("/admin/mini-test/batch-delete",{ids:Y});if(E.data.success){const D=E.data.successCount||0,Q=E.data.failedCount||0;if(D>0){const re=E.data.successIds||[];l(ee=>ee.filter(Ce=>!re.includes(Ce.id))),h(ee=>ee.filter(Ce=>!re.includes(Ce.id))),P(ee=>ee.filter(Ce=>!re.includes(Ce)))}D>0&&Q===0?ge.success(`Đã xóa thành công ${D} bài test`):D>0&&Q>0?ge.success(`Đã xóa thành công ${D} bài test, ${Q} bài không thể xóa`):ge.error("Không thể xóa các bài test đã chọn"),await z()}else ge.error(E.data.message||"Có lỗi xảy ra khi xóa nhiều bài test")}catch(E){let D="Có lỗi xảy ra khi xóa nhiều bài test";E.response?.data?.message&&(D=E.response.data.message),ge.error(D),Z()}finally{M(!1)}},me=async E=>{if(window.confirm("Bạn có chắc muốn xóa bài test này? Hành động này không thể hoàn tác."))try{const D=await Ie.delete(`/admin/mini-test/submission/${E}`);if(D.data&&D.data.success===!0)l(Q=>Q.filter(re=>re.id!==E)),h(Q=>Q.filter(re=>re.id!==E)),P(Q=>Q.filter(re=>re!==E)),x&&x.id===E&&(w(null),y(!1),I(!1)),await z(),ge.success(D.data.message||"Đã xóa bài test thành công!");else throw new Error(D.data?.message||"Xóa thất bại (không rõ lý do)")}catch(D){let Q="Có lỗi xảy ra khi xóa bài test";D.response?D.response.status===403?Q="Không có quyền xóa bài test này":D.response.status===404?(Q="Bài test không tồn tại hoặc đã bị xóa",l(re=>re.filter(ee=>ee.id!==E)),h(re=>re.filter(ee=>ee.id!==E)),P(re=>re.filter(ee=>ee!==E))):Q=`Lỗi ${D.response.status}: ${D.response.data?.message||D.response.data?.error||"Không rõ lỗi"}`:D.message&&(Q=D.message),ge.error(Q),Z()}},fe=E=>{w(E),y(!0),I(!1),A({x:50,y:50}),W({x:550,y:50})},je=async(E,D,Q)=>{try{const re={feedback:D.trim(),score:Q};await Ie.post(`/admin/mini-test/submission/${E}/feedback`,re);try{await Ie.post("/notifications",{user_id:x?.userId,type:"test_reviewed",title:`Phản hồi bài Mini Test - Bài ${x?.lessonId}`,message:`Giáo viên đã chấm điểm bài test của bạn: ${re.score} điểm. Hãy kiểm tra phản hồi chi tiết!`,related_id:E})}catch{}return Z(),z(),ge.success(`Đã gửi phản hồi và chấm điểm ${re.score} thành công!`),Promise.resolve()}catch(re){return ge.error(re.response?.data?.message||"Có lỗi xảy ra khi gửi phản hồi"),Promise.reject(re)}},Te=()=>{const D=["ID","Học viên","Email","Bài học","Điểm","Trạng thái","Thời gian nộp","Thời gian phản hồi","Thời gian làm bài (phút)"],Q=u.map(Pe=>[Pe.id,Pe.userName||`User ${Pe.userId}`,Pe.userEmail||"N/A",Pe.lessonTitle||`Bài ${Pe.lessonId}`,Pe.score!==null&&Pe.score!==void 0?Pe.score.toString().replace(".",","):"Chưa chấm",Pe.status==="pending"?"Chờ duyệt":"Đã phản hồi",Me(Pe.submittedAt),Pe.feedbackAt?Me(Pe.feedbackAt):"Chưa phản hồi",Pe.timeSpent?Math.round(Pe.timeSpent/60):"0"]),re=[D.join(","),...Q.map(Pe=>Pe.map(Be=>typeof Be=="string"&&(Be.includes(",")||Be.includes(`
`)||Be.includes('"'))?`"${Be.replace(/"/g,'""')}"`:`"${Be}"`).join(","))].join(`
`),ee=new Blob(["\uFEFF"+re],{type:"text/csv;charset=utf-8;"}),Ce=window.URL.createObjectURL(ee),U=document.createElement("a");U.href=Ce;const ie=new Date,we=ie.toLocaleDateString("vi-VN").replace(/\//g,"-"),ze=ie.toLocaleTimeString("vi-VN").replace(/:/g,"-");U.download=`bai-test-${we}_${ze}.csv`,document.body.appendChild(U),U.click(),document.body.removeChild(U),window.URL.revokeObjectURL(Ce),ge.success("Đã xuất file CSV thành công!")},Me=E=>{if(!E)return"";const D=new Date(E),Q=D.getDate().toString().padStart(2,"0"),re=(D.getMonth()+1).toString().padStart(2,"0"),ee=D.getFullYear(),Ce=D.getHours().toString().padStart(2,"0"),U=D.getMinutes().toString().padStart(2,"0");return`${Q}/${re}/${ee} ${Ce}:${U}`},K=Math.ceil(u.length/le),Fe=(de-1)*le,se=u.slice(Fe,Fe+le);return t.jsxs("div",{className:"test-management-page",children:[(b||k)&&t.jsx("div",{className:"modal-overlay",onClick:()=>{y(!1),I(!1)}}),t.jsxs("div",{className:"page-container",children:[t.jsxs("header",{className:"page-header",children:[t.jsxs("div",{className:"header-content",children:[t.jsx("div",{className:"header-left",children:t.jsxs("button",{className:"back-button",onClick:()=>a("landing"),children:[t.jsx(Vl,{size:20}),t.jsx("span",{children:"Trang chính"})]})}),t.jsxs("div",{className:"header-center",children:[t.jsx("h1",{className:"page-title",children:"Quản lý Mini Test"}),t.jsx("p",{className:"page-subtitle",children:"Xem và phản hồi bài test của học viên"})]}),t.jsxs("div",{className:"header-actions",children:[Y.length>0&&t.jsxs("button",{className:"batch-delete-button",onClick:J,disabled:ne,children:[t.jsx(co,{size:16}),ne?"Đang xóa...":`Xóa (${Y.length})`]}),t.jsxs("button",{className:"export-button",onClick:Te,children:[t.jsx(rh,{size:16}),"Xuất CSV"]}),t.jsxs("button",{className:"refresh-button",onClick:Z,children:[t.jsx(yo,{size:16}),"Làm mới"]})]})]}),t.jsxs("div",{className:"stats-grid",children:[t.jsx("div",{className:"stat-card total",children:t.jsxs("div",{className:"stat-content",children:[t.jsxs("div",{children:[t.jsx("p",{className:"stat-label",children:"Tổng bài nộp"}),t.jsx("p",{className:"stat-value",children:s.length})]}),t.jsx("div",{className:"stat-icon",children:t.jsx(Un,{size:24})})]})}),t.jsx("div",{className:"stat-card pending",children:t.jsxs("div",{className:"stat-content",children:[t.jsxs("div",{children:[t.jsx("p",{className:"stat-label",children:"Chờ duyệt"}),t.jsx("p",{className:"stat-value",children:s.filter(E=>E.status==="pending").length})]}),t.jsx("div",{className:"stat-icon",children:t.jsx(dr,{size:24})})]})}),t.jsx("div",{className:"stat-card reviewed",children:t.jsxs("div",{className:"stat-content",children:[t.jsxs("div",{children:[t.jsx("p",{className:"stat-label",children:"Đã duyệt"}),t.jsx("p",{className:"stat-value",children:s.filter(E=>E.status==="feedbacked").length})]}),t.jsx("div",{className:"stat-icon",children:t.jsx(yn,{size:24})})]})})]}),t.jsxs("div",{className:"controls-section",children:[t.jsxs("div",{className:"filter-tabs",children:[t.jsxs("button",{className:`filter-tab ${j==="all"?"active":""}`,onClick:()=>v("all"),children:["Tất cả (",s.length,")"]}),t.jsxs("button",{className:`filter-tab ${j==="pending"?"active":""}`,onClick:()=>v("pending"),children:[t.jsx(dr,{size:14}),"Chờ duyệt (",s.filter(E=>E.status==="pending").length,")"]}),t.jsxs("button",{className:`filter-tab ${j==="feedbacked"?"active":""}`,onClick:()=>v("feedbacked"),children:[t.jsx(yn,{size:14}),"Đã phản hồi (",s.filter(E=>E.status==="feedbacked").length,")"]})]}),t.jsxs("div",{className:"search-box",children:[t.jsx(Ur,{className:"search-icon"}),t.jsx("input",{type:"text",placeholder:"Tìm theo tên học viên, email hoặc bài học...",value:N,onChange:E=>V(E.target.value),className:"search-input"})]})]})]}),t.jsx("main",{className:"main-content",children:m?t.jsxs("div",{className:"loading-container",children:[t.jsx("div",{className:"spinner"}),t.jsx("p",{children:"Đang tải danh sách bài test..."})]}):u.length>0?t.jsxs(t.Fragment,{children:[Y.length>0&&t.jsx("div",{className:"selection-info-bar",children:t.jsxs("div",{className:"selection-info-content",children:[t.jsxs("span",{className:"selected-count",children:["Đã chọn: ",Y.length," bài test"]}),t.jsx("button",{className:"clear-selection",onClick:()=>P([]),children:"Bỏ chọn tất cả"})]})}),t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"tests-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{width:"50px"},children:t.jsx("div",{className:"checkbox-header",onClick:be,children:ue?t.jsx(oo,{size:16}):t.jsx(Ol,{size:16})})}),t.jsx("th",{children:"Học viên"}),t.jsx("th",{children:"Bài học"}),t.jsx("th",{children:"Điểm"}),t.jsx("th",{children:"Trạng thái"}),t.jsx("th",{children:"Thời gian nộp"}),t.jsx("th",{children:"Thao tác"})]})}),t.jsx("tbody",{children:se.map(E=>{const D=G[E.userId]||{},Q=D.name||E.userName,re=D.email||E.userEmail,ee=Y.includes(E.id);return t.jsxs("tr",{className:ee?"selected-row":"",children:[t.jsx("td",{children:t.jsx("div",{className:"test-checkbox",onClick:()=>$(E.id),children:ee?t.jsx(oo,{size:16}):t.jsx(Ol,{size:16})})}),t.jsx("td",{children:t.jsxs("div",{className:"user-cell",children:[t.jsx("div",{className:"user-avatar",children:t.jsx(ql,{size:16})}),t.jsxs("div",{children:[t.jsx("p",{className:"user-name",children:Q}),t.jsx("p",{className:"user-email",children:re})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"lesson-cell",children:[t.jsx(Un,{size:14}),t.jsxs("span",{children:["Bài ",E.lessonId]}),t.jsx("span",{className:"lesson-title",children:E.lessonTitle})]})}),t.jsx("td",{children:t.jsx("div",{className:`score-badge ${E.score==null?"pending":E.score>=7?"good":E.score>=5?"average":"poor"}`,children:E.score??"Chưa chấm"})}),t.jsx("td",{children:t.jsx("div",{className:`status-badge ${E.status}`,children:E.status==="pending"?t.jsxs(t.Fragment,{children:[t.jsx(dr,{size:12}),"Chờ duyệt"]}):t.jsxs(t.Fragment,{children:[t.jsx(yn,{size:12}),"Đã phản hồi"]})})}),t.jsx("td",{children:t.jsxs("div",{className:"time-cell",children:[t.jsx("div",{className:"date",children:new Date(E.submittedAt).toLocaleDateString("vi-VN")}),t.jsx("div",{className:"time",children:new Date(E.submittedAt).toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})})]})}),t.jsx("td",{children:t.jsxs("div",{className:"action-buttons",children:[t.jsx("button",{className:"review-button",onClick:()=>fe(E),title:"Chấm điểm",children:t.jsx(lo,{size:16})}),t.jsx("button",{className:"delete-button",onClick:()=>me(E.id),title:"Xóa bài test",children:t.jsx(co,{size:16})})]})})]},E.id)})})]})}),K>1&&t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"pagination-button",onClick:()=>q(E=>Math.max(1,E-1)),disabled:de===1,children:t.jsx(dt,{size:16})}),Array.from({length:Math.min(5,K)},(E,D)=>{let Q;return K<=5||de<=3?Q=D+1:de>=K-2?Q=K-4+D:Q=de-2+D,t.jsx("button",{className:`pagination-page ${de===Q?"active":""}`,onClick:()=>q(Q),children:Q},Q)}),t.jsx("button",{className:"pagination-button",onClick:()=>q(E=>Math.min(K,E+1)),disabled:de===K,children:t.jsx(xt,{size:16})})]})]}):t.jsxs("div",{className:"empty-state",children:[t.jsx(bn,{size:48}),t.jsx("h3",{children:"Không tìm thấy bài test nào"}),t.jsx("p",{children:N?"Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc tìm kiếm":"Học viên chưa nộp bài test nào cho các bài học ngữ pháp"}),N&&t.jsx("button",{className:"clear-search",onClick:()=>V(""),children:"Xóa bộ lọc tìm kiếm"})]})})]}),b&&t.jsx(I1,{test:x,isOpen:b,onClose:()=>y(!1),onSubmitFeedback:je,onDeleteTest:me,onShowCorrectAnswers:()=>I(!0),position:C,onPositionChange:A}),k&&x&&t.jsx(R1,{lessonId:x.lessonId,isOpen:k,onClose:()=>I(!1),position:xe,onPositionChange:W}),t.jsx("style",{children:`
        .test-management-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          padding: 1.5rem;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1000;
        }

        .page-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .header-left {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
        }

        .header-center {
          flex: 1;
          text-align: center;
        }

        .header-right {
          flex: 0 0 auto;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          background: #10b981;
          color: white;
        }

        .back-button:hover {
          background: #059669;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.5rem 0;
        }

        .page-subtitle {
          color: #6b7280;
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .batch-delete-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          background: #dc2626;
          color: white;
        }

        .batch-delete-button:hover:not(:disabled) {
          background: #b91c1c;
        }

        .batch-delete-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .export-button,
        .refresh-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .export-button {
          background: #374151;
          color: white;
        }

        .export-button:hover {
          background: #4b5563;
        }

        .refresh-button {
          background: #3b82f6;
          color: white;
        }

        .refresh-button:hover {
          background: #2563eb;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid;
        }

        .stat-card.total {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-color: #bfdbfe;
        }

        .stat-card.pending {
          background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
          border-color: #fde68a;
        }

        .stat-card.reviewed {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border-color: #bbf7d0;
        }

        .stat-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .stat-card.total .stat-label {
          color: #2563eb;
        }

        .stat-card.pending .stat-label {
          color: #d97706;
        }

        .stat-card.reviewed .stat-label {
          color: #059669;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .stat-icon {
          color: rgba(0, 0, 0, 0.1);
        }

        .stat-card.total .stat-icon {
          color: #3b82f6;
        }

        .stat-card.pending .stat-icon {
          color: #f59e0b;
        }

        .stat-card.reviewed .stat-icon {
          color: #10b981;
        }

        .controls-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .filter-tabs {
          display: flex;
          gap: 0.5rem;
          background: #f3f4f6;
          padding: 0.25rem;
          border-radius: 0.75rem;
        }

        .filter-tab {
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          background: transparent;
          color: #6b7280;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-tab.active {
          background: white;
          color: #1f2937;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        .filter-tab:hover:not(.active) {
          background: rgba(255, 255, 255, 0.5);
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          width: 1.25rem;
          height: 1.25rem;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 1px solid #d1d5db;
          border-radius: 0.75rem;
          background: white;
          font-size: 0.875rem;
          transition: all 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .main-content {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .selection-info-bar {
          background: linear-gradient(90deg, #dbeafe 0%, #bfdbfe 100%);
          padding: 0.75rem 1.5rem;
          border-bottom: 1px solid #93c5fd;
        }

        .selection-info-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .selected-count {
          font-weight: 600;
          color: #1e40af;
        }

        .clear-selection {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clear-selection:hover {
          background: #3b82f6;
          color: white;
        }

        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          color: #6b7280;
        }

        .loading-container .spinner {
          width: 3rem;
          height: 3rem;
          border: 3px solid #e5e7eb;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        .table-container {
          overflow-x: auto;
        }

        .tests-table {
          width: 100%;
          border-collapse: collapse;
        }

        .tests-table thead {
          background: #f9fafb;
        }

        .tests-table th {
          padding: 1rem 1.5rem;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #e5e7eb;
          cursor: default;
        }

        .tests-table tbody tr {
          border-bottom: 1px solid #f3f4f6;
          transition: background-color 0.15s;
        }

        .tests-table tbody tr:hover {
          background: #f9fafb;
        }

        .tests-table tbody tr.selected-row {
          background: #eff6ff;
        }

        .tests-table tbody tr.selected-row:hover {
          background: #dbeafe;
        }

        .tests-table td {
          padding: 1rem 1.5rem;
          font-size: 0.875rem;
        }

        .checkbox-header {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          cursor: pointer;
          color: #6b7280;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .checkbox-header:hover {
          background: #e5e7eb;
          color: #374151;
        }

        .test-checkbox {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          cursor: pointer;
          color: #6b7280;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .test-checkbox:hover {
          background: #e5e7eb;
          color: #374151;
        }

        .test-checkbox svg {
          pointer-events: none;
        }

        .user-cell {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .user-name {
          font-weight: 500;
          color: #1f2937;
          margin: 0 0 0.125rem 0;
        }

        .user-email {
          color: #6b7280;
          font-size: 0.75rem;
          margin: 0;
        }

        .lesson-cell {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4b5563;
        }

        .lesson-title {
          color: #9ca3af;
          font-size: 0.75rem;
        }

        .score-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          min-width: 60px;
          text-align: center;
        }

        .score-badge.pending {
          background: #f3f4f6;
          color: #6b7280;
        }

        .score-badge.good {
          background: #dcfce7;
          color: #166534;
        }

        .score-badge.average {
          background: #fef3c7;
          color: #92400e;
        }

        .score-badge.poor {
          background: #fee2e2;
          color: #991b1b;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .status-badge.pending {
          background: #fffbeb;
          color: #92400e;
        }

        .status-badge.feedbacked {
          background: #f0fdf4;
          color: #166534;
        }

        .time-cell {
          color: #6b7280;
        }

        .date {
          font-weight: 500;
        }

        .time {
          font-size: 0.75rem;
        }

        .action-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .review-button,
        .delete-button {
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .review-button {
          background: #dbeafe;
          color: #2563eb;
        }

        .review-button:hover {
          background: #bfdbfe;
        }

        .delete-button {
          background: #fee2e2;
          color: #dc2626;
        }

        .delete-button:hover {
          background: #fecaca;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem;
          border-top: 1px solid #e5e7eb;
        }

        .pagination-button,
        .pagination-page {
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid #d1d5db;
          background: white;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
          min-width: 2.5rem;
          text-align: center;
        }

        .pagination-button:hover:not(:disabled),
        .pagination-page:hover:not(.active) {
          background: #f3f4f6;
        }

        .pagination-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-page.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          color: #6b7280;
        }

        .empty-state h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
          margin: 1rem 0 0.5rem 0;
        }

        .empty-state p {
          margin: 0 0 1rem 0;
          max-width: 24rem;
        }

        .clear-search {
          padding: 0.5rem 1rem;
          background: #3b82f6;
          color: white;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
        }

        .clear-search:hover {
          background: #2563eb;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .controls-section {
            flex-direction: column;
          }
          
          .search-box {
            max-width: 100%;
          }

          .header-actions {
            flex-wrap: wrap;
          }

          .batch-delete-button,
          .export-button,
          .refresh-button,
          .back-button {
            font-size: 0.75rem;
            padding: 0.5rem 0.75rem;
          }

          .header-content {
            flex-direction: column;
            gap: 1rem;
          }

          .header-left,
          .header-center,
          .header-actions {
            width: 100%;
            justify-content: center;
          }

          .back-button {
            justify-content: center;
            width: 100%;
          }
        }
      `})]})}function H1({onNavigate:a}){const[o,s]=f.useState([]),[l,u]=f.useState(null),[h,m]=f.useState(!0),[g,x]=f.useState(""),[w,b]=f.useState("all"),[y,k]=f.useState("grid"),[I,j]=f.useState(""),[v,N]=f.useState({open:!1,message:"",title:""});f.useEffect(()=>{V()},[]);const V=async()=>{try{m(!0),j("Đang tải dữ liệu...");const C=await Ie.get("/user/mini-test/submissions");let A=[];if(Array.isArray(C.data))A=C.data;else if(C.data?.data&&Array.isArray(C.data.data))A=C.data.data;else if(C.data?.success&&Array.isArray(C.data.data))A=C.data.data;else if(C.data&&typeof C.data=="object"){const Y=Object.keys(C.data).find(P=>Array.isArray(C.data[P]));Y?A=C.data[Y]:A=[C.data]}const xe=A.map((W,Y)=>{let P=[];if(W.answers)if(Array.isArray(W.answers))P=W.answers.filter(ne=>ne!=null).map(ne=>({question_id:Number(ne.question_id||ne.questionId||0),user_answer:String(ne.user_answer||ne.userAnswer||ne.answer||ne||"")})).filter(ne=>ne.question_id>0);else if(typeof W.answers=="string")try{const ne=JSON.parse(W.answers);Array.isArray(ne)?P=ne.filter(M=>M!=null).map(M=>({question_id:Number(M.question_id||M.questionId||0),user_answer:String(M.user_answer||M.userAnswer||M.answer||"")})).filter(M=>M.question_id>0):typeof ne=="object"&&ne!==null&&(P=Object.entries(ne).map(([M,X])=>{let Z=0,z="";return X&&typeof X=="object"?(Z=Number(X.question_id||X.questionId||M.replace("question_","").replace("q","")),z=String(X.user_answer||X.userAnswer||X.answer||"")):(Z=Number(M.replace("question_","").replace("q","")),z=String(X||"")),{question_id:Z||0,user_answer:z}}).filter(M=>M.question_id>0))}catch{N({open:!0,title:"Lỗi Parse Dữ Liệu",message:"Không thể phân tích dữ liệu câu trả lời từ server."})}else typeof W.answers=="object"&&W.answers!==null&&(P=Object.entries(W.answers).map(([ne,M])=>{let X=0,Z="";return M&&typeof M=="object"?(X=Number(M.question_id||M.questionId||ne.replace("question_","").replace("q","")),Z=String(M.user_answer||M.userAnswer||M.answer||"")):(X=Number(ne.replace("question_","").replace("q","")),Z=String(M||"")),{question_id:X||0,user_answer:Z}}).filter(ne=>ne.question_id>0));let ue=W.lesson_title||W.lesson?.title||W.lesson?.name||`Bài ${W.lesson_id||W.lessonId||"N/A"}`;return{id:W.id||W.submission_id||Y+1,lesson_id:W.lesson_id||W.lessonId||W.lesson?.id||0,lesson_title:ue,answers:P.sort((ne,M)=>ne.question_id-M.question_id),submitted_at:W.submitted_at||W.submittedAt||W.created_at||W.createdAt||new Date().toISOString(),feedback:W.feedback||W.admin_feedback||null,feedback_at:W.feedback_at||W.feedbackAt||W.feedbackDate||null,status:W.status||"pending",score:W.score||W.total_score||void 0,total_questions:W.total_questions||W.question_count||P.length||0,time_spent:W.time_spent||W.timeSpent||void 0}}).filter(W=>W.lesson_id>0&&W.id>0);j(`Đã tải ${xe.length} bài nộp`),s(xe)}catch(C){C.response?(j(`Lỗi ${C.response.status}`),C.response.status===404?N({open:!0,title:"Không tìm thấy endpoint",message:"Endpoint API không tồn tại hoặc bị lỗi. Vui lòng thử lại sau!"}):C.response.status===500&&N({open:!0,title:"Lỗi Server",message:"Lỗi server. Vui lòng thử lại sau!"})):C.request?(j("Không nhận được phản hồi"),N({open:!0,title:"Lỗi Kết Nối",message:"Không thể kết nối đến server! Vui lòng kiểm tra kết nối mạng."})):(j(`Lỗi: ${C.message}`),N({open:!0,title:"Lỗi Kết Nối",message:"Lỗi kết nối! Vui lòng thử lại."})),s([])}finally{m(!1)}},O=o.filter(C=>{const A=C.lesson_title.toLowerCase().includes(g.toLowerCase())||C.lesson_id.toString().includes(g),xe=w==="all"||C.status===w;return A&&xe}),B=async C=>{if(confirm("Bạn có chắc muốn xóa bài nộp này?"))try{await Ie.delete(`/user/mini-test/submission/${C}`),ge.success("Đã xóa bài nộp!"),V(),l?.id===C&&u(null)}catch{N({open:!0,title:"Lỗi Xóa Bài Nộp",message:"Không thể xóa bài nộp. Vui lòng thử lại sau!"})}},G=C=>{switch(C){case"feedbacked":case"reviewed":return t.jsx(yn,{className:"status-icon status-icon--checked"});case"pending":return t.jsx(dr,{className:"status-icon status-icon--pending"});default:return t.jsx(bn,{className:"status-icon status-icon--unknown"})}},te=C=>{switch(C){case"feedbacked":case"reviewed":return"Đã chấm";case"pending":return"Chờ chấm";default:return"Không xác định"}},de=C=>{try{const A=new Date(C);return isNaN(A.getTime())?"N/A":A.toLocaleDateString("vi-VN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"N/A"}},q=()=>{a("landing")},le=()=>{N({open:!1,message:"",title:""})};return t.jsxs("div",{className:"submissions-container",children:[t.jsxs("div",{className:"submissions-wrapper",children:[t.jsxs("div",{className:"submissions-header",children:[t.jsxs("div",{className:"submissions-header-content",children:[t.jsxs("div",{className:"header-left-controls",children:[t.jsx("button",{onClick:()=>a("user"),className:"submissions-back-button",children:t.jsx(dt,{})}),t.jsx("button",{onClick:q,className:"submissions-home-button",title:"Về trang chủ",children:t.jsx(Vl,{})})]}),t.jsxs("div",{className:"submissions-title-section",children:[t.jsx("h1",{className:"submissions-main-title",children:"Bài Mini Test của tôi"}),t.jsx("p",{className:"submissions-subtitle",children:"Quản lý và xem kết quả các bài test đã làm"})]}),t.jsxs("div",{className:"submissions-view-toggle",children:[t.jsxs("button",{onClick:()=>k("grid"),className:`view-toggle-button ${y==="grid"?"view-toggle-button--active":""}`,children:[t.jsx(Cx,{}),"Grid"]}),t.jsxs("button",{onClick:()=>k("list"),className:`view-toggle-button ${y==="list"?"view-toggle-button--active":""}`,children:[t.jsx(so,{}),"List"]})]})]}),t.jsx("div",{className:"submissions-filter-section",children:t.jsxs("div",{className:"filter-section-content",children:[t.jsxs("div",{className:"search-container",children:[t.jsx(Ur,{className:"search-icon"}),t.jsx("input",{type:"text",placeholder:"Tìm kiếm bài học...",value:g,onChange:C=>x(C.target.value),className:"search-input"})]}),t.jsxs("div",{className:"filter-controls",children:[t.jsxs("select",{value:w,onChange:C=>b(C.target.value),className:"status-filter",children:[t.jsx("option",{value:"all",children:"Tất cả trạng thái"}),t.jsx("option",{value:"pending",children:"Chờ chấm"}),t.jsx("option",{value:"feedbacked",children:"Đã chấm"}),t.jsx("option",{value:"reviewed",children:"Đã xem xét"})]}),t.jsxs("button",{onClick:V,className:"refresh-button",children:[t.jsx(yo,{}),"Làm mới"]})]})]})})]}),h?t.jsxs("div",{className:"loading-state",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("p",{className:"loading-text",children:"Đang tải bài nộp..."}),I&&t.jsx("p",{className:"loading-debug",children:I})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"stats-grid",children:[t.jsxs("div",{className:"stat-card",children:[t.jsx("div",{className:"stat-icon-wrapper stat-icon--total",children:t.jsx(Hr,{className:"stat-icon"})}),t.jsxs("div",{className:"stat-content",children:[t.jsx("div",{className:"stat-value",children:o.length}),t.jsx("div",{className:"stat-label",children:"Tổng bài nộp"})]})]}),t.jsxs("div",{className:"stat-card",children:[t.jsx("div",{className:"stat-icon-wrapper stat-icon--graded",children:t.jsx(yn,{className:"stat-icon"})}),t.jsxs("div",{className:"stat-content",children:[t.jsx("div",{className:"stat-value",children:o.filter(C=>C.status==="feedbacked"||C.status==="reviewed").length}),t.jsx("div",{className:"stat-label",children:"Đã chấm"})]})]}),t.jsxs("div",{className:"stat-card",children:[t.jsx("div",{className:"stat-icon-wrapper stat-icon--pending",children:t.jsx(dr,{className:"stat-icon"})}),t.jsxs("div",{className:"stat-content",children:[t.jsx("div",{className:"stat-value",children:o.filter(C=>C.status==="pending").length}),t.jsx("div",{className:"stat-label",children:"Chờ chấm"})]})]}),t.jsxs("div",{className:"stat-card",children:[t.jsx("div",{className:"stat-icon-wrapper stat-icon--average",children:t.jsx(nx,{className:"stat-icon"})}),t.jsxs("div",{className:"stat-content",children:[t.jsx("div",{className:"stat-value",children:o.filter(C=>C.score).length>0?(o.reduce((C,A)=>C+(A.score||0),0)/o.filter(C=>C.score).length).toFixed(1):"0.0"}),t.jsx("div",{className:"stat-label",children:"Điểm TB"})]})]})]}),O.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx(Hr,{className:"empty-state-icon"}),t.jsx("p",{className:"empty-state-title",children:"Không tìm thấy bài nộp nào"}),t.jsx("p",{className:"empty-state-description",children:g?"Thử tìm kiếm với từ khóa khác":o.length===0?"Bạn chưa có bài nộp nào. Hãy làm bài test để bắt đầu!":"Không có bài nộp nào phù hợp với bộ lọc"}),t.jsx("button",{onClick:V,className:"empty-state-button",children:"Thử tải lại"})]}):y==="grid"?t.jsx("div",{className:"submissions-grid",children:O.map(C=>t.jsx("div",{className:"submission-card",children:t.jsxs("div",{className:"submission-card-content",children:[t.jsxs("div",{className:"submission-header",children:[t.jsxs("div",{className:"submission-title-section",children:[t.jsxs("span",{className:"lesson-badge",children:["Bài ",C.lesson_id]}),t.jsx("h3",{className:"lesson-title",children:C.lesson_title})]}),t.jsxs("div",{className:"submission-status",children:[G(C.status),t.jsx("span",{className:"status-text",children:te(C.status)})]})]}),t.jsxs("div",{className:"submission-details",children:[t.jsxs("div",{className:"detail-row",children:[t.jsx("span",{className:"detail-label",children:"Ngày nộp:"}),t.jsx("span",{className:"detail-value",children:de(C.submitted_at)})]}),t.jsxs("div",{className:"detail-row",children:[t.jsx("span",{className:"detail-label",children:"Số câu:"}),t.jsx("span",{className:"detail-value",children:C.total_questions})]}),C.time_spent&&t.jsxs("div",{className:"detail-row",children:[t.jsx("span",{className:"detail-label",children:"Thời gian:"}),t.jsxs("span",{className:"detail-value",children:[Math.floor(C.time_spent/60),":",String(C.time_spent%60).padStart(2,"0")]})]}),C.score!==void 0&&t.jsxs("div",{className:"detail-row",children:[t.jsx("span",{className:"detail-label",children:"Điểm:"}),t.jsxs("span",{className:`score-value ${C.score>=5?"score-pass":"score-fail"}`,children:[C.score,"/",C.total_questions]})]})]}),t.jsxs("div",{className:"submission-actions",children:[t.jsxs("button",{onClick:()=>u(C),className:"view-detail-button",children:[t.jsx(ah,{}),"Xem chi tiết (",C.answers.length," câu)"]}),t.jsx("button",{onClick:()=>B(C.id),className:"delete-button",title:"Xóa bài nộp",children:t.jsx(co,{})})]})]})},C.id))}):t.jsx("div",{className:"submissions-table-container",children:t.jsxs("table",{className:"submissions-table",children:[t.jsx("thead",{className:"table-header",children:t.jsxs("tr",{children:[t.jsx("th",{className:"table-header-cell",children:"Bài học"}),t.jsx("th",{className:"table-header-cell",children:"Trạng thái"}),t.jsx("th",{className:"table-header-cell",children:"Điểm"}),t.jsx("th",{className:"table-header-cell",children:"Ngày nộp"}),t.jsx("th",{className:"table-header-cell",children:"Số câu"}),t.jsx("th",{className:"table-header-cell",children:"Thao tác"})]})}),t.jsx("tbody",{className:"table-body",children:O.map(C=>t.jsxs("tr",{className:"table-row",children:[t.jsx("td",{className:"table-cell",children:t.jsxs("div",{className:"lesson-cell",children:[t.jsxs("div",{className:"lesson-number",children:["Bài ",C.lesson_id]}),t.jsx("div",{className:"lesson-name",children:C.lesson_title})]})}),t.jsx("td",{className:"table-cell",children:t.jsxs("div",{className:"status-cell",children:[G(C.status),te(C.status)]})}),t.jsx("td",{className:"table-cell",children:C.score!==void 0?t.jsxs("span",{className:`table-score ${C.score>=5?"score-pass":"score-fail"}`,children:[C.score,"/",C.total_questions]}):t.jsx("span",{className:"no-score",children:"--"})}),t.jsx("td",{className:"table-cell",children:de(C.submitted_at)}),t.jsx("td",{className:"table-cell",children:t.jsx("span",{className:"answer-count",children:C.answers.length})}),t.jsx("td",{className:"table-cell",children:t.jsxs("div",{className:"action-buttons",children:[t.jsx("button",{onClick:()=>u(C),className:"view-button",children:"Xem"}),t.jsx("button",{onClick:()=>B(C.id),className:"delete-table-button",children:"Xóa"})]})})]},C.id))})]})})]})]}),v.open&&t.jsx("div",{className:"error-modal-overlay",children:t.jsxs("div",{className:"error-modal",children:[t.jsxs("div",{className:"error-modal-header",children:[t.jsx(bn,{className:"error-modal-icon"}),t.jsx("h3",{className:"error-modal-title",children:v.title}),t.jsx("button",{onClick:le,className:"error-modal-close",children:t.jsx(Kr,{})})]}),t.jsx("div",{className:"error-modal-body",children:t.jsx("p",{children:v.message})}),t.jsxs("div",{className:"error-modal-footer",children:[t.jsx("button",{onClick:le,className:"error-modal-button",children:"Đóng"}),t.jsx("button",{onClick:()=>{le(),V()},className:"error-modal-button retry",children:"Thử lại"})]})]})}),l&&t.jsx("div",{className:"detail-modal-overlay",children:t.jsxs("div",{className:"detail-modal",children:[t.jsxs("div",{className:"modal-header",children:[t.jsxs("div",{className:"modal-title-section",children:[t.jsxs("h2",{className:"modal-title",children:["Bài ",l.lesson_id,": ",l.lesson_title]}),t.jsxs("div",{className:"modal-subtitle",children:[t.jsxs("p",{children:["Nộp ngày: ",de(l.submitted_at)]}),l.time_spent&&t.jsxs("p",{children:["Thời gian làm bài: ",Math.floor(l.time_spent/60)," ","phút ",l.time_spent%60," giây"]}),t.jsxs("p",{children:["Trạng thái: ",te(l.status)]})]})]}),t.jsx("button",{onClick:()=>u(null),className:"modal-close-button",children:"✕"})]}),t.jsxs("div",{className:"modal-content",children:[t.jsxs("div",{className:"answers-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h3",{className:"section-title",children:"Câu trả lời của bạn"}),t.jsxs("span",{className:"section-count",children:[l.answers.length," câu hỏi"]})]}),l.answers.length===0?t.jsxs("div",{className:"empty-answers",children:[t.jsx(bn,{className:"empty-answers-icon"}),t.jsx("p",{children:"Không có câu trả lời nào được ghi nhận"}),t.jsx("p",{className:"empty-notes",children:"Có thể do:"}),t.jsxs("ul",{className:"empty-reasons",children:[t.jsx("li",{children:"• Backend chưa xử lý đúng dữ liệu answers"}),t.jsx("li",{children:"• Dữ liệu answers trong database bị lỗi"}),t.jsx("li",{children:"• Frontend không parse được format của answers"})]})]}):t.jsx("div",{className:"answers-list",children:l.answers.map((C,A)=>t.jsxs("div",{className:"answer-item",children:[t.jsxs("div",{className:"answer-header",children:[t.jsxs("div",{className:"answer-info",children:[t.jsxs("span",{className:"question-number",children:["Câu ",C.question_id]}),t.jsxs("span",{className:"question-index",children:["#",A+1]})]}),t.jsxs("span",{className:"question-id",children:["ID: ",C.question_id]})]}),t.jsx("div",{className:"answer-content",children:C.user_answer||"(Không có câu trả lời)"})]},A))})]}),l.feedback&&t.jsxs("div",{className:"feedback-section",children:[t.jsx("h3",{className:"section-title",children:"Phản hồi từ giáo viên"}),t.jsx("div",{className:"feedback-content",children:t.jsxs("div",{className:"feedback-header",children:[t.jsx(lo,{className:"feedback-icon"}),t.jsxs("div",{className:"feedback-details",children:[l.feedback_at&&t.jsxs("p",{className:"feedback-date",children:["Ngày feedback: ",de(l.feedback_at)]}),t.jsx("div",{className:"feedback-text",children:l.feedback})]})]})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("div",{className:"action-buttons-group",children:t.jsxs("button",{onClick:()=>{confirm("Bạn có chắc muốn xóa bài nộp này?")&&B(l.id)},className:"modal-delete-button",children:[t.jsx(co,{}),"Xóa bài nộp"]})}),t.jsx("button",{onClick:()=>u(null),className:"modal-close-action",children:"Đóng"})]})]})]})}),t.jsx("style",{children:`
        /* Global Styles */
        .submissions-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 1rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .submissions-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Controls */
        .header-left-controls {
          display: flex;
          gap: 0.5rem;
        }

        .submissions-home-button {
          padding: 0.75rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submissions-home-button:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px) scale(1.05);
          background: #667eea;
          color: white;
        }

        .submissions-home-button svg {
          width: 24px;
          height: 24px;
          color: #4b5563;
          transition: color 0.3s ease;
        }

        .submissions-home-button:hover svg {
          color: white;
        }

        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 6rem 2rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          animation: fadeIn 0.6s ease;
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid #e5e7eb;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 2rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-text {
          font-size: 1.25rem;
          color: #4b5563;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .loading-debug {
          color: #9ca3af;
          font-size: 0.875rem;
          font-family: 'SF Mono', monospace;
          background: #f3f4f6;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          display: inline-block;
        }

        /* Header Section */
        .submissions-header {
          margin-bottom: 2rem;
          animation: fadeIn 0.6s ease;
        }

        .submissions-header-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .submissions-back-button {
          padding: 0.75rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submissions-back-button:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px) scale(1.05);
        }

        .submissions-back-button svg {
          width: 24px;
          height: 24px;
          color: #4b5563;
          transition: color 0.3s ease;
        }

        .submissions-back-button:hover svg {
          color: #7c3aed;
        }

        .submissions-title-section {
          flex: 1;
          min-width: 300px;
        }

        .submissions-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .submissions-subtitle {
          color: #6b7280;
          font-size: 1rem;
          font-weight: 500;
        }

        .submissions-view-toggle {
          display: flex;
          gap: 0.5rem;
          background: white;
          padding: 0.25rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .view-toggle-button {
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .view-toggle-button:hover {
          background: #f3f4f6;
          transform: translateY(-1px);
        }

        .view-toggle-button--active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .view-toggle-button svg {
          width: 16px;
          height: 16px;
        }

        /* Filter Section */
        .submissions-filter-section {
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          margin-bottom: 1.5rem;
          animation: slideUp 0.7s ease;
        }

        .filter-section-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .filter-section-content {
            flex-direction: row;
            align-items: center;
          }
        }

        .search-container {
          position: relative;
          flex: 1;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: #9ca3af;
          z-index: 2;
        }

        .search-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 0.9375rem;
          outline: none;
          transition: all 0.3s ease;
          background: #f9fafb;
        }

        .search-input:focus {
          border-color: #7c3aed;
          background: white;
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
        }

        .filter-controls {
          display: flex;
          gap: 0.75rem;
        }

        .status-filter {
          padding: 0.875rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          background: #f9fafb;
          font-size: 0.9375rem;
          color: #374151;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 160px;
        }

        .status-filter:focus {
          outline: none;
          border-color: #7c3aed;
          background: white;
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
        }

        .refresh-button {
          padding: 0.875rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .refresh-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .refresh-button:active {
          transform: translateY(0);
        }

        .refresh-button svg {
          width: 16px;
          height: 16px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
          animation: slideUp 0.8s ease;
        }

        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-card:nth-child(1) { --gradient-start: #667eea; --gradient-end: #764ba2; }
        .stat-card:nth-child(2) { --gradient-start: #10b981; --gradient-end: #059669; }
        .stat-card:nth-child(3) { --gradient-start: #f59e0b; --gradient-end: #d97706; }
        .stat-card:nth-child(4) { --gradient-start: #3b82f6; --gradient-end: #1d4ed8; }

        .stat-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .stat-icon--total {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
          color: #667eea;
        }

        .stat-icon--graded {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15));
          color: #10b981;
        }

        .stat-icon--pending {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.15));
          color: #f59e0b;
        }

        .stat-icon--average {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(29, 78, 216, 0.15));
          color: #3b82f6;
        }

        .stat-icon {
          width: 28px;
          height: 28px;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.375rem;
          font-feature-settings: "tnum";
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-value {
          transform: translateY(-2px);
        }

        .stat-icon--total + .stat-content .stat-value { color: #667eea; }
        .stat-icon--graded + .stat-content .stat-value { color: #10b981; }
        .stat-icon--pending + .stat-content .stat-value { color: #f59e0b; }
        .stat-icon--average + .stat-content .stat-value { color: #3b82f6; }

        .stat-label {
          color: #6b7280;
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          animation: fadeIn 0.9s ease;
        }

        .empty-state-icon {
          width: 80px;
          height: 80px;
          color: #e5e7eb;
          margin: 0 auto 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .empty-state-title {
          font-size: 1.5rem;
          color: #4b5563;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .empty-state-description {
          color: #9ca3af;
          font-size: 1rem;
          max-width: 400px;
          margin: 0 auto 2rem;
          line-height: 1.5;
        }

        .empty-state-button {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .empty-state-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        /* Grid View */
        .submissions-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.75rem;
          animation: fadeIn 1s ease;
        }

        @media (min-width: 768px) {
          .submissions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1200px) {
          .submissions-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .submission-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border: 2px solid transparent;
        }

        .submission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .submission-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
          border-color: #e5e7eb;
        }

        .submission-card:hover::before {
          opacity: 1;
        }

        .submission-card-content {
          padding: 1.75rem;
        }

        .submission-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f3f4f6;
        }

        .submission-title-section {
          flex: 1;
          padding-right: 1rem;
        }

        .lesson-badge {
          display: inline-block;
          padding: 0.375rem 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 20px;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .lesson-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 0.75rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .submission-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.375rem;
        }

        .status-icon {
          width: 24px;
          height: 24px;
        }

        .status-icon--checked {
          color: #10b981;
        }

        .status-icon--pending {
          color: #f59e0b;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .status-icon--unknown {
          color: #6b7280;
        }

        .status-text {
          font-size: 0.8125rem;
          font-weight: 600;
          white-space: nowrap;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          background: #f9fafb;
        }

        .status-icon--checked + .status-text { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .status-icon--pending + .status-text { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
        .status-icon--unknown + .status-text { background: #f3f4f6; color: #6b7280; }

        .submission-details {
          margin-bottom: 1.75rem;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          padding: 0.5rem 0;
          transition: all 0.2s ease;
        }

        .detail-row:hover {
          background: #f9fafb;
          padding: 0.5rem;
          border-radius: 8px;
        }

        .detail-label {
          color: #6b7280;
          font-size: 0.9375rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .detail-label::before {
          content: '•';
          color: #9ca3af;
        }

        .detail-value {
          font-weight: 600;
          font-size: 0.9375rem;
          color: #374151;
        }

        .score-value {
          font-weight: 800;
          font-size: 1rem;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .score-pass {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .score-fail {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }

        .submission-actions {
          display: flex;
          gap: 0.75rem;
        }

        .view-detail-button {
          flex: 1;
          padding: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 0.9375rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .view-detail-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .view-detail-button:active {
          transform: translateY(0);
        }

        .view-detail-button svg {
          width: 18px;
          height: 18px;
        }

        .delete-button {
          padding: 1rem;
          color: #ef4444;
          background: transparent;
          border: 2px solid #fecaca;
          cursor: pointer;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .delete-button:hover {
          background: #fef2f2;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
        }

        .delete-button svg {
          width: 18px;
          height: 18px;
        }

        /* Table View */
        .submissions-table-container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          animation: fadeIn 1s ease;
        }

        .submissions-table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-header {
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
        }

        .table-header-cell {
          padding: 1.25rem 1.75rem;
          text-align: left;
          font-size: 0.875rem;
          font-weight: 700;
          color: #4b5563;
          border-bottom: 2px solid #e5e7eb;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .table-body {
          background: white;
        }

        .table-row {
          border-bottom: 1px solid #f3f4f6;
          transition: all 0.3s ease;
        }

        .table-row:hover {
          background-color: #f9fafb;
          transform: scale(1.01);
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-cell {
          padding: 1.25rem 1.75rem;
          font-size: 0.9375rem;
        }

        .lesson-cell {
          display: flex;
          flex-direction: column;
        }

        .lesson-number {
          font-weight: 700;
          margin-bottom: 0.375rem;
          color: #667eea;
        }

        .lesson-name {
          color: #6b7280;
          font-weight: 500;
        }

        .status-cell {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .table-score {
          font-weight: 800;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .score-pass {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .score-fail {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }

        .no-score {
          color: #9ca3af;
          font-style: italic;
        }

        .answer-count {
          font-weight: 700;
          color: #374151;
        }

        .action-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .view-button {
          padding: 0.625rem 1.25rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .view-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .delete-table-button {
          padding: 0.625rem 1.25rem;
          color: #ef4444;
          background: transparent;
          border: 2px solid #fecaca;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .delete-table-button:hover {
          background: #fef2f2;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
        }

        /* Error Modal */
        .error-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 10000;
          animation: modalFadeIn 0.4s ease;
        }

        .error-modal {
          background: white;
          border-radius: 24px;
          max-width: 500px;
          width: 100%;
          overflow: hidden;
          animation: modalSlideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .error-modal-header {
          padding: 1.5rem;
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 2px solid #fecaca;
        }

        .error-modal-icon {
          width: 32px;
          height: 32px;
          color: #dc2626;
          flex-shrink: 0;
        }

        .error-modal-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #7c2d12;
          margin: 0;
          flex: 1;
        }

        .error-modal-close {
          padding: 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #7c2d12;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .error-modal-close:hover {
          background: rgba(220, 38, 38, 0.1);
          transform: rotate(90deg);
        }

        .error-modal-close svg {
          width: 24px;
          height: 24px;
        }

        .error-modal-body {
          padding: 2rem;
          color: #4b5563;
          font-size: 1.125rem;
          line-height: 1.6;
        }

        .error-modal-footer {
          padding: 1.5rem;
          background: #f9fafb;
          border-top: 1px solid #e5e7eb;
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .error-modal-button {
          padding: 1rem 2rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .error-modal-button {
          background: #e5e7eb;
          color: #374151;
        }

        .error-modal-button.retry {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .error-modal-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .error-modal-button.retry:hover {
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        /* Detail Modal */
        .detail-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 9999;
          animation: modalFadeIn 0.4s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; backdrop-filter: blur(0); }
          to { opacity: 1; backdrop-filter: blur(8px); }
        }

        .detail-modal {
          background: white;
          border-radius: 24px;
          max-width: 56rem;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          animation: modalSlideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          padding: 2rem;
          border-bottom: 2px solid #f3f4f6;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
        }

        .modal-title-section {
          flex: 1;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 1rem;
          line-height: 1.3;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .modal-subtitle {
          color: #6b7280;
          font-size: 0.9375rem;
        }

        .modal-subtitle p {
          margin-bottom: 0.375rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal-subtitle p:last-child {
          margin-bottom: 0;
        }

        .modal-close-button {
          padding: 0.75rem;
          background: white;
          border: 2px solid #e5e7eb;
          cursor: pointer;
          color: #6b7280;
          border-radius: 12px;
          font-size: 1.5rem;
          line-height: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-left: 1rem;
          flex-shrink: 0;
        }

        .modal-close-button:hover {
          background: #f3f4f6;
          color: #ef4444;
          transform: rotate(90deg);
          border-color: #fecaca;
        }

        .modal-content {
          padding: 2rem;
          overflow-y: auto;
          max-height: calc(90vh - 160px);
        }

        /* Answers Section */
        .answers-section {
          margin-bottom: 2.5rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f3f4f6;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
        }

        .section-count {
          color: #9ca3af;
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          background: #f3f4f6;
          border-radius: 20px;
        }

        .empty-answers {
          text-align: center;
          padding: 3rem 2rem;
          border: 3px dashed #e5e7eb;
          border-radius: 16px;
          color: #6b7280;
          background: #fafafa;
        }

        .empty-answers-icon {
          width: 60px;
          height: 60px;
          color: #d1d5db;
          margin: 0 auto 1.5rem;
        }

        .empty-notes {
          font-size: 1rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #4b5563;
          font-weight: 600;
        }

        .empty-reasons {
          list-style: none;
          padding: 0;
          margin: 0.75rem auto 0;
          max-width: 400px;
          text-align: left;
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .empty-reasons li {
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
        }

        .empty-reasons li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #667eea;
        }

        .answers-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .answer-item {
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          background: white;
        }

        .answer-item:hover {
          background: #f9fafb;
          border-color: #d1d5db;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
        }

        .answer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .answer-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .question-number {
          font-weight: 700;
          color: #4f46e5;
          font-size: 1.125rem;
        }

        .question-index {
          font-size: 0.875rem;
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-weight: 600;
        }

        .question-id {
          font-size: 0.8125rem;
          color: #9ca3af;
          font-family: 'SF Mono', monospace;
          background: #f3f4f6;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
        }

        .answer-content {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 12px;
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
          font-size: 0.9375rem;
          color: #374151;
          word-break: break-word;
          white-space: pre-wrap;
          line-height: 1.6;
          border: 1px solid #e5e7eb;
        }

        /* Feedback Section */
        .feedback-section {
          margin-bottom: 2.5rem;
        }

        .feedback-content {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 2px solid #bae6fd;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(14, 165, 233, 0.1);
        }

        .feedback-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .feedback-icon {
          width: 24px;
          height: 24px;
          color: #0ea5e9;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .feedback-details {
          flex: 1;
        }

        .feedback-date {
          color: #0369a1;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feedback-date::before {
          content: '📅';
          font-size: 0.875rem;
        }

        .feedback-text {
          background: white;
          padding: 1.25rem;
          border-radius: 12px;
          border: 1px solid #dbeafe;
          color: #1f2937;
          white-space: pre-wrap;
          font-size: 0.9375rem;
          line-height: 1.7;
          font-weight: 500;
        }

        /* Modal Actions */
        .modal-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
        }

        .action-buttons-group {
          display: flex;
          gap: 1rem;
        }

        .modal-delete-button {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9375rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }

        .modal-delete-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
        }

        .modal-delete-button:active {
          transform: translateY(0);
        }

        .modal-delete-button svg {
          width: 18px;
          height: 18px;
        }

        .modal-close-action {
          padding: 1rem 2rem;
          background: #f3f4f6;
          color: #374151;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          cursor: pointer;
          font-size: 0.9375rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-close-action:hover {
          background: #e5e7eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Scrollbar Styling */
        .modal-content::-webkit-scrollbar {
          width: 10px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 5px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 5px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #5a6fd8 0%, #6a419b 100%);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .submissions-main-title {
            font-size: 2rem;
          }
          
          .stat-value {
            font-size: 1.875rem;
          }
          
          .modal-title {
            font-size: 1.5rem;
          }
          
          .modal-actions {
            flex-direction: column;
            gap: 1rem;
          }
          
          .action-buttons-group {
            width: 100%;
          }
          
          .modal-close-action {
            width: 100%;
          }

          .error-modal-footer {
            flex-direction: column;
          }

          .error-modal-button {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .submissions-header-content {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          
          .header-left-controls {
            align-self: flex-start;
          }
          
          .submissions-view-toggle {
            align-self: flex-start;
          }
          
          .filter-controls {
            flex-direction: column;
            width: 100%;
          }
          
          .status-filter {
            width: 100%;
          }
          
          .refresh-button {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}const Y1=10;function Vr({onNavigate:a,level:o}){const[s,l]=f.useState([]),[u,h]=f.useState(!0),[m,g]=f.useState(""),[x,w]=f.useState(""),[b,y]=f.useState(1),[k,I]=f.useState(0),[j,v]=f.useState(""),N={N5:{title:"JLPT N5",wordsPerDay:10,description:"Trình độ sơ cấp"},N4:{title:"JLPT N4",wordsPerDay:15,description:"Trình độ sơ trung cấp"},N3:{title:"JLPT N3",wordsPerDay:20,description:"Trình độ trung cấp"},N2:{title:"JLPT N2",wordsPerDay:25,description:"Trình độ thượng trung cấp"},N1:{title:"JLPT N1",wordsPerDay:30,description:"Trình độ cao cấp"}};f.useEffect(()=>{const q=N[o]||N.N5;v(q.title)},[o]),f.useEffect(()=>{(async()=>{try{h(!0);const C=(await Ie.get(`/vocabulary/${o.toUpperCase()}?page=1&size=2000`)).data?.data||[],xe=(await Ie.get(`/vocabulary/${o.toUpperCase()}/count`)).data?.count||0;await new Promise(W=>setTimeout(W,600)),l(C),I(xe)}catch(le){console.error(`Lỗi tải ${o}:`,le),g(`Không tải được từ vựng ${o}. Mèo đang cố gắng...`)}finally{setTimeout(()=>{h(!1)},600)}})()},[o]);const V=s.filter(q=>x.trim()?q.tuVung.toLowerCase().includes(x.toLowerCase())||q.hanTu.toLowerCase().includes(x.toLowerCase())||q.tiengViet.toLowerCase().includes(x.toLowerCase()):!0),O=N[o]?.wordsPerDay||Y1,B=Math.ceil(V.length/O),G=V.slice((b-1)*O,b*O),te=()=>{if(G.length===0){ge("Ngày này chưa có từ để học flashcard! 😿",{icon:"😿"});return}let q=[...G];q.length>10&&(q=q.sort(()=>Math.random()-.5).slice(0,10));const le=q.map(W=>({japanese:W.tuVung,kanji:W.hanTu||W.tuVung,vietnamese:W.tiengViet})),C=G.map(W=>({japanese:W.tuVung,kanji:W.hanTu||W.tuVung,vietnamese:W.tiengViet})),A=`vocabulary-${o.toLowerCase()}`,xe={lessonId:`${o}-Day${b}`,lessonTitle:`${j} - Ngày ${b}`,words:le,originPage:A};localStorage.setItem("nekoFlashcardData",JSON.stringify(xe)),localStorage.setItem("nekoFlashcardAllWords",JSON.stringify({words:C,originPage:A})),requestAnimationFrame(()=>a("flashcard"))};if(u)return t.jsx(Pt,{message:`Mèo đang chuẩn bị từ vựng ${j}...`});if(m)return t.jsx("div",{className:"text-center text-red-500 text-3xl py-20",children:m});const de=N[o]||N.N5;return t.jsxs("div",{className:"min-h-screen",children:[t.jsxs("main",{className:"relative z-10 mb-12 md:mb-16",children:[t.jsxs("h1",{className:"hero-section-title hero-text-glow",children:["Từ Vựng ",j," (~",k>0?k.toLocaleString():s.length," từ)"]}),t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("p",{className:"white-rainbow-glow-bold",children:de.description}),t.jsxs("p",{className:"small-rainbow-glow",children:["Học theo ngày – ",O," từ mỗi ngày"]})]}),t.jsx("div",{className:"max-w-4xl mx-auto mb-10",children:t.jsxs("div",{className:"glass-effect-container",children:[t.jsx("div",{className:"element-overlay-positioned",children:t.jsx(Ur,{className:"icon-centered-left",strokeWidth:5})}),t.jsx("input",{type:"text",placeholder:"Tìm từ... (人, hito, người...)",value:x,onChange:q=>{w(q.target.value),y(1)},className:"transparent-search-input"})]})}),t.jsx("div",{className:"text-center mb-10",children:t.jsxs("div",{className:"flex-center-group",children:[t.jsx("button",{onClick:()=>y(q=>Math.max(1,q-1)),disabled:b===1,className:"btn-primary",children:"← Ngày trước"}),t.jsxs("span",{className:"btn-secondary",children:["Ngày ",b," / ",B," (",G.length," từ)"]}),t.jsx("button",{onClick:()=>y(q=>Math.min(B,q+1)),disabled:b===B,className:"btn-primary",children:"Ngày sau →"})]})}),t.jsx("div",{className:"main-container-glass",children:t.jsxs("table",{className:"w-full text-left border-collapse",children:[t.jsx("thead",{className:"bg-gradient-pink-purple",children:t.jsxs("tr",{children:[t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"STT"}),t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"Từ vựng"}),t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"Hán tự"}),t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"Nghĩa"})]})}),t.jsx("tbody",{className:"bg-white",children:G.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"p-12 text-center text-gray-500 text-2xl",children:"Không có từ nào trong ngày này 😿"})}):G.map(q=>t.jsxs("tr",{className:"list-item-hover",children:[t.jsx("td",{className:"p-6 text-center font-medium",children:q.stt}),t.jsx("td",{className:"p-6",children:t.jsx("span",{className:"text-4xl font-black text-center text-gray-900",children:q.tuVung})}),t.jsx("td",{className:"text-center",children:t.jsx("span",{className:"text-3xl text-black font-bold",children:q.hanTu||"-"})}),t.jsx("td",{className:"p-6 text-4xl text-center text-gray-800",children:q.tiengViet})]},`${q.stt}-${q.tuVung}`))})]})}),t.jsx("div",{className:"fixed bottom-10 right-10 z-50 hidden lg:block",children:t.jsxs("div",{className:"relative group cursor-pointer",onClick:te,children:[t.jsxs("div",{className:"tooltip-slide-out",children:[t.jsxs("div",{className:"colored-border-label",children:[t.jsxs("p",{className:"text-xl font-bold drop-shadow-md",children:["Học flashcard 10 từ ngày ",b," nào mèo ơi! 🐾"]}),t.jsx("div",{className:"absolute bottom-0 right-8 translate-y-full",children:t.jsx("div",{className:"triangle-down-pink"})})]}),t.jsx("div",{className:"absolute bottom-full mb-2 right-12 text-4xl animate-bounce",children:"✨"})]}),t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:"responsive-circular-image-hover",style:{filter:"drop-shadow(0 10px 20px rgba(255, 182, 233, 0.6))"}}),t.jsx("div",{className:"circular-gradient-hover-glow"})]})})]}),t.jsx("style",{children:`
        .flex-center-group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin: 2rem 0;
        }
        
        .btn-secondary {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        
        .btn-secondary:hover {
          background-color: rgba(0, 0, 0, 0.7);
          transform: scale(1.05);
        }
        
        .btn-primary {
          padding: 0.75rem 1.5rem;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 9999px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          color: #1e293b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background-color: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .list-item-hover {
          border-bottom: 1px solid #e5e7eb;
          transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .list-item-hover:hover {
          background-color: rgba(253, 242, 248, 0.7);
        }
        
        .bg-gradient-pink-purple {
          background: linear-gradient(to right, #ec4899, #9333ea);
          color: #ffffff;
        }
        
        .main-container-glass {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          overflow-x: auto;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          width: 100%;
        }
        
        .circular-gradient-hover-glow {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 9999px;
          background-image: linear-gradient(to right, 
            rgba(244, 114, 182, 0.3),
            rgba(168, 85, 247, 0.3)
          );
          opacity: 0;
          transition: opacity 500ms ease-in-out;
          filter: blur(24px);
        }
        
        .group:hover .circular-gradient-hover-glow {
          opacity: 1;
        }
        
        @keyframes fly {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
          100% {
            transform: translateY(0) rotate(-1deg);
          }
        }
        
        .responsive-circular-image-hover {
          width: 10rem;
          height: 10rem;
          border-radius: 9999px;
          object-fit: cover;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: fly 6s ease-in-out infinite;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
          transform: scale(1) rotate(0deg);
          transition: all 300ms ease-in-out;
          border-width: 4px;
          border-style: solid;
          border-color: #f9a8d4;
        }
        
        @media (min-width: 640px) {
          .responsive-circular-image-hover {
            width: 6rem;
            height: 6rem;
          }
        }
        
        @media (min-width: 768px) {
          .responsive-circular-image-hover {
            width: 7rem;
            height: 7rem;
          }
        }
        
        @media (min-width: 1024px) {
          .responsive-circular-image-hover {
            width: 8rem;
            height: 8rem;
          }
        }
        
        @media (min-width: 1280px) {
          .responsive-circular-image-hover {
            width: 9rem;
            height: 9rem;
          }
        }
        
        .group:hover .responsive-circular-image-hover {
          transform: scale(1.1) rotate(12deg);
        }
        
        .triangle-down-pink {
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #f9a8d4;
        }
        
        .colored-border-label {
          background-color: #ffffff;
          color: #6d28d9;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          white-space: nowrap;
          border: 4px solid #f9a8d4;
        }
        
        .tooltip-slide-out {
          position: absolute;
          bottom: 100%;
          margin-bottom: 1rem;
          right: 0;
          transform: translateX(2rem);
          opacity: 0;
          transition: all 500ms ease-in-out;
          pointer-events: none;
        }
        
        .group:hover .tooltip-slide-out {
          opacity: 1;
          transform: translateX(0);
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        .white-rainbow-glow-bold {
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 
            0 0 4px rgba(255, 255, 255, 0.8),
            0 0 10px rgba(255, 0, 150, 0.9),
            0 0 15px rgba(147, 51, 234, 0.9),
            0 0 20px rgba(6, 182, 212, 0.9);
          filter: none;
        }
        
        .small-rainbow-glow {
          font-size: 1.5rem;
          line-height: 2rem;
          color: #ffffff;
          margin-top: 0.25rem;
          text-shadow: 
            0 0 2px rgba(255, 255, 255, 0.8),
            0 0 5px rgba(255, 0, 150, 0.9),
            0 0 8px rgba(147, 51, 234, 0.9),
            0 0 12px rgba(6, 182, 212, 0.9);
        }
        
        .transparent-search-input {
          width: 100%;
          padding: 2rem 2.5rem 2rem 7rem;
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 900;
          color: #ffffff;
          background-color: transparent;
          text-align: center;
        }
        
        .transparent-search-input:focus {
          outline: 0;
        }
        
        .transparent-search-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 700;
        }
        
        .element-overlay-positioned {
          position: absolute;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 20;
        }
        
        .icon-centered-left {
          position: absolute;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
          width: 3rem;
          height: 3rem;
          color: #ffffff;
          z-index: 20;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px #f472b6);
        }
        
        .glass-effect-container {
          position: relative;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(40px);
          border-radius: 9999px;
          border-width: 4px;
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 8px rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }
        
        .hero-section-title {
          position: relative;
          display: block;
          padding: 2rem 2.5rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
          transform: translateY(-0.75rem);
          font-size: 3.75rem;
          line-height: 1;
          text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f687b3;
          animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @media (min-width: 768px) {
          .hero-section-title {
            padding: 2.5rem 3.5rem;
            font-size: 4.5rem;
            line-height: 1;
            transform: translateY(-1rem);
          }
        }
        
        @media (min-width: 1024px) {
          .hero-section-title {
            padding: 3rem 5rem;
            font-size: 8rem;
            line-height: 1;
            transform: translateY(-1.25rem);
          }
        }
        
        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }
        
        .hero-text-glow {
          text-shadow: 
            0 0 20px #FF69B4,
            0 0 40px #A020F0,
            0 0 60px #00FFFF,
            0 0 80px #FF69B4,
            0 0 100px #A020F0,
            0 4px 20px rgba(0,0,0,0.9);
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
        }
      `})]})}function B1({onNavigate:a}){return t.jsx(Vr,{level:"N5",onNavigate:a})}function U1({onNavigate:a}){return t.jsx(Vr,{level:"N4",onNavigate:a})}function K1({onNavigate:a}){return t.jsx(Vr,{level:"N3",onNavigate:a})}function V1({onNavigate:a}){return t.jsx(Vr,{level:"N2",onNavigate:a})}function q1({onNavigate:a}){return t.jsx(Vr,{level:"N1",onNavigate:a})}const Zi=5;function qr({level:a,onNavigate:o}){const[s,l]=f.useState([]),[u,h]=f.useState(!0),[m,g]=f.useState(1),x=a.toUpperCase();f.useEffect(()=>{(async()=>{try{const k=await Ie.get(`/grammar/jlpt/${x}`);if(await new Promise(I=>setTimeout(I,600)),k.data&&k.data.success){const I=k.data.data;I&&Array.isArray(I)?I.length>0?l(I):(l([]),ge(`Chưa có cấu trúc ngữ pháp nào cho ${x}. Mèo sẽ sớm cập nhật thêm nhé! 😺`,{icon:"😺",duration:2e3})):(l([]),ge("Dữ liệu không hợp lệ. Mèo đang kiểm tra lại... 😿",{icon:"😿",duration:2e3}))}else Array.isArray(k.data)?l(k.data):(l([]),ge("Dữ liệu không hợp lệ. Mèo đang kiểm tra lại... 😿",{icon:"😿",duration:2e3}))}catch(k){console.error("Error fetching grammar:",k),k.response?.status===401?(alert(`Phiên đăng nhập của bạn đã hết hạn!
Mèo sẽ đưa bạn về trang đăng nhập ngay đây 😿`),ge.error("Phiên đăng nhập hết hạn rồi... Mèo đưa bạn về đăng nhập nhé 😿",{duration:2e3}),setTimeout(()=>{o("login")},1e3)):k.response?.status===404?ge.error(`API endpoint cho ${x} chưa sẵn sàng. Mèo đang sửa đây... 😿`,{duration:3e3}):ge.error(`Không tải được dữ liệu ngữ pháp ${x}. Mèo đang sửa đây... 😿`,{duration:3e3})}finally{setTimeout(()=>{h(!1)},600)}})()},[o,x]);const w=Math.ceil(s.length/Zi),b=s.slice((m-1)*Zi,m*Zi);return u?t.jsx(Pt,{message:`Mèo đang chuẩn bị ngữ pháp ${x}...`}):t.jsxs("div",{className:"min-h-screen",children:[t.jsxs("main",{className:"relative z-10 mb-12 md:mb-16",children:[t.jsxs("h1",{className:"hero-section-title hero-text-glow text-center",children:["Ngữ pháp JLPT ",x," (~",s.length," cấu trúc)"]}),t.jsxs("div",{className:"text-center mb-10",children:[t.jsx("p",{className:"text-white text-3xl mb-4",children:"Học theo ngày – 5 cấu trúc mỗi ngày"}),t.jsxs("div",{className:"flex-center-group",children:[t.jsx("button",{onClick:()=>g(y=>Math.max(1,y-1)),disabled:m===1,className:"btn-primary",children:"← Ngày trước"}),t.jsxs("span",{className:"btn-secondary",children:["Ngày ",m," / ",w," (",b.length," cấu trúc)"]}),t.jsx("button",{onClick:()=>g(y=>Math.min(w,y+1)),disabled:m===w,className:"btn-primary",children:"Ngày sau →"})]})]}),t.jsx("div",{className:"main-container-glass",children:t.jsxs("table",{className:"w-full text-left border-collapse",children:[t.jsx("thead",{className:"bg-gradient-pink-purple",children:t.jsxs("tr",{children:[t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"STT"}),t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"Cấu trúc"}),t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"Nghĩa"}),t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"Ví dụ"}),t.jsx("th",{className:"p-6 text-lg text-center font-bold",children:"Dịch ví dụ"})]})}),t.jsx("tbody",{className:"bg-white",children:b.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,className:"p-12 text-center text-gray-500 text-2xl",children:s.length===0?`Chưa có dữ liệu ngữ pháp ${x}. Mèo sẽ cập nhật sớm! 😺`:"Không có cấu trúc nào trong ngày này 😿"})}):b.map((y,k)=>t.jsxs("tr",{className:"list-item-hover",children:[t.jsx("td",{className:"p-6 text-center font-medium",children:(m-1)*Zi+k+1}),t.jsx("td",{className:"p-6 text-center",children:t.jsx("span",{className:"text-3xl font-black text-gray-900",children:y.pattern})}),t.jsx("td",{className:"p-6 text-center text-2xl text-gray-800",children:y.meaning}),t.jsx("td",{className:"p-6 text-xl text-gray-700 leading-relaxed",children:y.example}),t.jsx("td",{className:"p-6 text-xl text-gray-800",children:y.exampleMeaning})]},y.id))})]})})]}),t.jsx("style",{children:`
        .flex-center-group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin: 2rem 0;
        }
        
        .btn-secondary {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        
        .btn-secondary:hover {
          background-color: rgba(0, 0, 0, 0.7);
          transform: scale(1.05);
        }
        
        .btn-primary {
          padding: 0.75rem 1.5rem;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 9999px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          color: #1e293b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background-color: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-primary:disabled:hover {
          background-color: rgba(255, 255, 255, 0.8);
          transform: none;
          box-shadow: none;
        }
        
        .list-item-hover {
          border-bottom: 1px solid #e5e7eb;
          transition-property: background-color, border-color, color, fill, stroke;
          transition-duration: 200ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .list-item-hover:hover {
          background-color: rgba(253, 242, 248, 0.7);
        }
        
        .bg-gradient-pink-purple {
          background: linear-gradient(to right, #ec4899, #9333ea);
          color: #ffffff;
        }
        
        .main-container-glass {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          overflow-x: auto;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          width: 100%;
        }
        
        .hero-section-title {
          position: relative;
          display: block;
          padding: 2rem 2.5rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))
                  drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04));
          transform: translateY(-0.75rem);
          font-size: 3.75rem;
          line-height: 1;
          text-shadow: 
            0 0 20px #FF69B4,
            0 0 40px #A020F0,
            0 0 60px #00FFFF,
            0 0 80px #FF69B4,
            0 0 100px #A020F0,
            0 4px 20px rgba(0,0,0,0.9);
          animation: pulse-soft 2s ease-in-out infinite;
        }
        
        @media (min-width: 768px) {
          .hero-section-title {
            padding: 2.5rem 3.5rem;
            font-size: 4.5rem;
            transform: translateY(-1rem);
          }
        }
        
        @media (min-width: 1024px) {
          .hero-section-title {
            padding: 3rem 5rem;
            font-size: 8rem;
            transform: translateY(-1.25rem);
          }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .hero-text-glow {
          text-shadow: 
            0 0 20px #FF69B4,
            0 0 40px #A020F0,
            0 0 60px #00FFFF,
            0 0 80px #FF69B4,
            0 0 100px #A020F0,
            0 4px 20px rgba(0,0,0,0.9);
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
      `})]})}function G1({onNavigate:a}){return t.jsx(qr,{level:"n5",onNavigate:a})}function W1({onNavigate:a}){return t.jsx(qr,{level:"n4",onNavigate:a})}function Q1({onNavigate:a}){return t.jsx(qr,{level:"n3",onNavigate:a})}function X1({onNavigate:a}){return t.jsx(qr,{level:"n2",onNavigate:a})}function J1({onNavigate:a}){return t.jsx(qr,{level:"n1",onNavigate:a})}const Tl=10;function Gr({level:a="N5",onNavigate:o}){const[s,l]=f.useState([]),[u,h]=f.useState(!0),[m,g]=f.useState(1),[x,w]=f.useState("");f.useEffect(()=>{let j=!1;(async()=>{try{const N=await Ie.get(`/kanji/jlpt/${a}`);if(N.data&&N.data.success&&Array.isArray(N.data.data))if(N.data.data.length>0){const V=N.data.data.map((O,B)=>({id:O.id||B+1,stt:(B+1).toString(),kanji:O.kanji||O.character||"",hanViet:O.hanViet||O.han_viet||O.meaning||"",meaning:O.meaning||O.meanings?.join?.(", ")||"",onYomi:O.onyomi||O.onYomi||O.on_reading||"",kunYomi:O.kunyomi||O.kunYomi||O.kun_reading||"",level:O.level||a}));l(V),await new Promise(O=>setTimeout(O,600))}else l([]),j||(j=!0,ge(`Chưa có Kanji ${a} nào. Mèo sẽ sớm cập nhật nhé! 😺`,{icon:"😺",duration:1e3}))}catch(N){console.error(`💥 [KANJI ${a}] Lỗi API:`,N)}finally{setTimeout(()=>h(!1),600)}})()},[a]);const b=s.filter(j=>x.trim()?j.kanji.includes(x)||j.hanViet&&j.hanViet.toLowerCase().includes(x.toLowerCase())||j.meaning.toLowerCase().includes(x.toLowerCase()):!0),y=Math.ceil(b.length/Tl),k=b.slice((m-1)*Tl,m*Tl),I=()=>{if(k.length===0)return ge("Ngày này chưa có Kanji! 😿");const j=k.map(v=>({japanese:v.kanji,kanji:v.kanji,vietnamese:v.meaning,onYomi:v.onYomi||"-",kunYomi:v.kunYomi||"-",hanViet:v.hanViet,level:v.level}));localStorage.setItem("nekoFlashcardData",JSON.stringify({lessonId:`Kanji${a}-Day${m}`,lessonTitle:`Kanji ${a} - Ngày ${m}`,words:j,originPage:`jlpt-kanji-${a.toLowerCase()}`})),o("flashcard")};return u?t.jsx(Pt,{message:`Mèo đang vẽ Kanji ${a}...`}):t.jsxs("div",{className:"kanji-page-wrapper",children:[t.jsxs("main",{className:"kanji-main-content",children:[t.jsxs("h1",{className:"hero-section-title hero-text-glow",children:["Kanji JLPT ",a," (~",s.length," chữ)"]}),t.jsxs("div",{className:"search-section",children:[t.jsxs("div",{className:"search-input-wrapper",children:[t.jsx("input",{type:"text",placeholder:`Tìm kiếm Kanji ${a}, âm Hán, nghĩa...`,value:x,onChange:j=>w(j.target.value),className:"kanji-search-input"}),t.jsx("span",{className:"search-icon",children:"🔍"})]}),x&&t.jsxs("p",{className:"search-result-count",children:["Tìm thấy ",b.length," kết quả"]})]}),t.jsxs("div",{className:"pagination-container",children:[t.jsx("p",{className:"pagination-subtitle",children:"Học theo ngày – 10 Kanji mỗi ngày"}),t.jsxs("div",{className:"pagination-controls",children:[t.jsx("button",{onClick:()=>g(j=>Math.max(1,j-1)),disabled:m===1,className:"btn-nav",children:"← Ngày trước"}),t.jsxs("div",{className:"day-indicator",children:["Ngày ",m," / ",y]}),t.jsx("button",{onClick:()=>g(j=>Math.min(y,j+1)),disabled:m===y,className:"btn-nav",children:"Ngày sau →"})]})]}),t.jsx("div",{className:"kanji-table-glass",children:t.jsxs("table",{className:"kanji-data-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Kanji"}),t.jsx("th",{children:"Âm Hán"}),t.jsx("th",{children:"Nghĩa"}),t.jsx("th",{children:"Âm On"}),t.jsx("th",{children:"Âm Kun"})]})}),t.jsx("tbody",{children:k.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,className:"empty-state",children:x?`Không tìm thấy kết quả nào cho "${x}" 😿`:"Ngày này chưa có Kanji 😿"})}):k.map(j=>t.jsxs("tr",{className:"kanji-row",children:[t.jsx("td",{className:"cell-kanji",children:t.jsxs("div",{className:"kanji-display",children:[t.jsx("span",{className:"kanji-char",children:j.kanji}),t.jsxs("span",{className:"kanji-stt",children:["#",j.stt]})]})}),t.jsx("td",{className:"cell-hanviet",children:j.hanViet||"-"}),t.jsx("td",{className:"cell-meaning",children:j.meaning}),t.jsxs("td",{className:"cell-onyomi",children:[t.jsx("span",{className:"reading-text",children:j.onYomi||"-"}),j.onYomi&&t.jsx("span",{className:"reading-label",children:"(On)"})]}),t.jsxs("td",{className:"cell-kunyomi",children:[t.jsx("span",{className:"reading-text",children:j.kunYomi||"-"}),j.kunYomi&&t.jsx("span",{className:"reading-label",children:"(Kun)"})]})]},`${j.id}-${j.kanji}`))})]})}),t.jsx("div",{className:"floating-neko-container",children:t.jsxs("div",{className:"neko-trigger",onClick:I,children:[t.jsx("div",{className:"neko-tooltip",children:t.jsxs("div",{className:"tooltip-content",children:["Học flashcard 10 Kanji ",a," ngày ",m," nào mèo ơi! 🖌️🐾"]})}),t.jsxs("div",{className:"neko-image-wrapper",children:[t.jsx("img",{src:"https://i.pinimg.com/1200x/8c/98/00/8c9800bb4841e7daa0a3db5f7db8a4b7.jpg",alt:"Flying Neko",className:"neko-image"}),t.jsx("div",{className:"neko-glow"})]})]})})]}),t.jsx("style",{children:`
        /* --- Page Layout --- */
        .kanji-page-wrapper {
          min-height: 100 screen;
          padding: 2rem 1rem;
        }

        .kanji-main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 5rem;
        }

        /* --- Hero Title & Glow --- */
        .hero-section-title {
          text-align: center;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 2rem;
          font-size: clamp(2.5rem, 8vw, 6rem);
          line-height: 1.1;
        }

        .hero-text-glow {
          text-shadow: 
            0 0 20px rgba(236, 72, 153, 0.7),
            0 0 40px rgba(147, 51, 234, 0.5);
          animation: pulse-soft 3s infinite;
        }

        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.98); opacity: 0.9; }
        }

        /* --- Search Section --- */
        .search-section {
          max-width: 42rem;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .kanji-search-input {
          width: 100%;
          padding: 1.25rem 4rem 1.25rem 2rem;
          font-size: 1.25rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.1);
          color: white;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .kanji-search-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          border-color: #f472b6;
          box-shadow: 0 0 20px rgba(244, 114, 182, 0.3);
        }

        .search-icon {
          position: absolute;
          right: 1.5rem;
          font-size: 1.5rem;
        }

        .search-result-count {
          color: rgba(255, 255, 255, 0.7);
          margin-top: 0.75rem;
        }

        /* --- Pagination --- */
        .pagination-container {
          text-align: center;
          margin-bottom: 3rem;
        }

        .pagination-subtitle {
          color: white;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .pagination-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn-nav {
          padding: 0.75rem 1.75rem;
          background: white;
          color: #1e293b;
          border-radius: 9999px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-nav:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 10px 15px rgba(0,0,0,0.3);
          background: #fdf2f8;
        }

        .btn-nav:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .day-indicator {
          padding: 0.75rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border-radius: 9999px;
          font-weight: 700;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(5px);
        }

        /* --- Table Styling --- */
        .kanji-table-glass {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
        }

        .kanji-data-table {
          width: 100%;
          border-collapse: collapse;
          text-align: center;
        }

        .kanji-data-table thead {
          background: linear-gradient(90deg, #ec4899, #9333ea);
          color: white;
        }

        .kanji-data-table th {
          padding: 1.5rem;
          font-size: 1.4rem;
        }

        .kanji-row {
          border-bottom: 1px solid #eee;
          transition: all 0.2s ease;
        }

        .kanji-row:hover {
          background: #fff5f8;
          transform: scale(1.005);
        }

        /* --- Cell Specifics --- */
        .cell-kanji { padding: 1.5rem; }
        .kanji-char { font-size: 4rem; font-weight: 900; display: block; color: #111; }
        .kanji-stt { font-size: 0.8rem; color: #999; }
        
        .cell-hanviet { font-size: 1.6rem; font-weight: 700; color: #1d4ed8; }
        .cell-meaning { font-size: 1.5rem; color: #374151; max-width: 250px; }
        
        .reading-text { display: block; font-size: 1.4rem; font-weight: 700; color: #7e22ce; }
        .reading-label { font-size: 0.75rem; color: #999; }
        .cell-kunyomi .reading-text { color: #1d4ed8; }

        .empty-state { padding: 4rem; font-size: 1.5rem; color: #666; }

        /* --- Floating Neko (FAB) --- */
        .floating-neko-container {
          position: fixed;
          bottom: 2.5rem;
          right: 2.5rem;
          z-index: 100;
        }

        .neko-trigger {
          position: relative;
          cursor: pointer;
        }

        .neko-image-wrapper {
          position: relative;
          width: 8rem;
          height: 8rem;
        }

        .neko-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #f9a8d4;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          animation: fly 4s ease-in-out infinite;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .neko-trigger:hover .neko-image {
          transform: scale(1.15) rotate(10deg);
        }

        .neko-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, #f472b6, #a855f7);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.4s;
          z-index: -1;
        }

        .neko-trigger:hover .neko-glow { opacity: 0.6; }

        .neko-tooltip {
          position: absolute;
          bottom: 110%;
          right: 0;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s;
          pointer-events: none;
        }

        .neko-trigger:hover .neko-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        .tooltip-content {
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 1.25rem;
          border: 3px solid #f9a8d4;
          white-space: nowrap;
          color: #6d28d9;
          font-weight: 800;
          box-shadow: 0 10px 15px rgba(0,0,0,0.2);
        }

        @keyframes fly {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* --- Responsive --- */
        @media (max-width: 768px) {
          .floating-neko-container { display: none; }
          .kanji-data-table th:nth-child(4),
          .kanji-data-table td:nth-child(4),
          .kanji-data-table th:nth-child(5),
          .kanji-data-table td:nth-child(5) {
            display: none;
          }
        }
      `})]})}function wm({onNavigate:a}){return t.jsx(Gr,{level:"N5",onNavigate:a})}function Z1({onNavigate:a}){return t.jsx(Gr,{level:"N4",onNavigate:a})}function e5({onNavigate:a}){return t.jsx(Gr,{level:"N3",onNavigate:a})}function t5({onNavigate:a}){return t.jsx(Gr,{level:"N2",onNavigate:a})}function n5({onNavigate:a}){return t.jsx(Gr,{level:"N1",onNavigate:a})}function r5(){const{user:a,hasSeenSplash:o,loading:s,markSplashAsSeen:l}=vn(),[u,h]=f.useState("landing"),[m,g]=f.useState(null),x=(y,k)=>{h(y),g(k||null),window.scrollTo({top:0,behavior:"smooth"})};if(f.useEffect(()=>{document.title="Neko Nihongo - Học Tiếng Nhật Dễ Thương";const y=document.querySelector('meta[name="description"]');if(y)y.setAttribute("content","Học tiếng Nhật theo phong cách kawaii dễ thương cùng mèo Neko! Từ vựng, Ngữ pháp, Kanji và Flashcard giúp bạn học hiệu quả hơn.");else{const k=document.createElement("meta");k.name="description",k.content="Học tiếng Nhật theo phong cách kawaii dễ thương cùng mèo Neko! Từ vựng, Ngữ pháp, Kanji và Flashcard giúp bạn học hiệu quả hơn.",document.head.appendChild(k)}},[]),s)return t.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center",children:[t.jsxs("div",{className:"text-center animate-bounce-in",children:[t.jsx("div",{className:"text-8xl mb-6 animate-bounce",children:"🐱"}),t.jsx("div",{className:"w-16 h-16 border-4 border-[#FFC7EA]/30 border-t-[#FFC7EA] rounded-full animate-spin mx-auto mb-4"}),t.jsx("p",{className:"text-gray-700 text-xl",children:"にゃん…"})]}),t.jsx("style",{children:`
          @keyframes bounce-in {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-bounce-in { animation: bounce-in 0.5s ease-out; }
        `})]});if(!a)return t.jsx(Bf,{});if(!o)return t.jsx(Yf,{onComplete:l});const w=u==="mypage"||u==="admin"||u==="user"||u==="user-mini-test-submissions",b=u==="user-mini-test-submissions";return t.jsxs("div",{className:"min-h-screen page-transition",children:[!w&&!b&&t.jsx(eh,{}),t.jsxs("div",{className:"relative z-10 min-h-screen",children:[!w&&!b&&t.jsx(gb,{currentPage:u,onNavigate:x}),u==="landing"&&t.jsx(lb,{onNavigate:x}),u==="hiragana"&&t.jsx(P1,{onNavigate:x}),u==="katakana"&&t.jsx(A1,{onNavigate:x}),u==="flashcard-hirakata"&&t.jsx(F1,{onNavigate:x}),u==="vocabulary"&&t.jsx(db,{onNavigate:x}),u==="grammar"&&t.jsx(mb,{onNavigate:x}),u==="kanji"&&t.jsx(pb,{onNavigate:x}),u==="flashcard"&&t.jsx(fb,{onNavigate:x}),u==="flashcard-kanji"&&t.jsx(wb,{onNavigate:x}),u==="mypage"&&t.jsx(xb,{onNavigate:x}),u==="admin"&&t.jsx(bb,{onNavigate:x}),u==="test-management"&&t.jsx($1,{onNavigate:x}),u==="user"&&t.jsx(yb,{onNavigate:x}),u==="vocabulary-selector"&&t.jsx(kb,{onNavigate:x}),u==="grammar-selector"&&t.jsx(Sb,{onNavigate:x}),u==="vocabulary-n5"&&t.jsx(B1,{onNavigate:x}),u==="vocabulary-n4"&&t.jsx(U1,{onNavigate:x}),u==="vocabulary-n3"&&t.jsx(K1,{onNavigate:x}),u==="vocabulary-n2"&&t.jsx(V1,{onNavigate:x}),u==="vocabulary-n1"&&t.jsx(q1,{onNavigate:x}),u==="vocabulary-jlpt"&&t.jsx(Vr,{level:m?.level||"N5",onNavigate:x}),u==="grammar-n5"&&t.jsx(G1,{onNavigate:x}),u==="grammar-n4"&&t.jsx(W1,{onNavigate:x}),u==="grammar-n3"&&t.jsx(Q1,{onNavigate:x}),u==="grammar-n2"&&t.jsx(X1,{onNavigate:x}),u==="grammar-n1"&&t.jsx(J1,{onNavigate:x}),u==="grammar-jlpt"&&t.jsx(qr,{level:m?.level||"N5",onNavigate:x}),u==="exercise-selector"&&t.jsx(jb,{onNavigate:x}),u==="exercise"&&t.jsx(cm,{onNavigate:x,category:m?.category||"vocabulary",level:m?.level||"n5"}),(u==="exercise-n5"||u==="exercise-grammar-n5"||u==="exercise-kanji-n5")&&t.jsx(cm,{onNavigate:x}),u==="kanji-selector"&&t.jsx(Cb,{onNavigate:x}),u==="kanji-n5"&&t.jsx(wm,{onNavigate:x}),u==="jlpt-kanji-n5"&&t.jsx(wm,{onNavigate:x}),u==="jlpt-kanji-n4"&&t.jsx(Z1,{onNavigate:x}),u==="jlpt-kanji-n3"&&t.jsx(e5,{onNavigate:x}),u==="jlpt-kanji-n2"&&t.jsx(t5,{onNavigate:x}),u==="jlpt-kanji-n1"&&t.jsx(n5,{onNavigate:x}),u==="jlpt-kanji"&&t.jsx(Gr,{level:m?.level||"N5",onNavigate:x}),u==="historytracking"&&t.jsx(L1,{onNavigate:x}),u==="hirakata-selector"&&t.jsx(D1,{onNavigate:x}),u==="user-mini-test-submissions"&&t.jsx(H1,{onNavigate:x}),t.jsx(Rf,{position:"top-center",reverseOrder:!1,gutter:12,toastOptions:{duration:5e3,style:{background:"rgba(255, 255, 255, 0.9)",color:"#000",borderRadius:"24px",padding:"16px 24px",boxShadow:"0 10px 30px rgba(255, 182, 233, 0.4)",backdropFilter:"blur(10px)",border:"2px solid rgba(255, 199, 234, 0.5)",fontSize:"18px",fontWeight:"600"},success:{icon:"😻",style:{borderColor:"#77FFD9",boxShadow:"0 10px 30px rgba(119, 255, 217, 0.4)"}},error:{icon:"😿",style:{borderColor:"#FF77C2",boxShadow:"0 10px 30px rgba(255, 119, 194, 0.4)"}},loading:{icon:"🐱"}}}),!w&&!b&&t.jsx(Rl,{})]})]})}function a5(){return t.jsx($f,{children:t.jsx(r5,{})})}wp.createRoot(document.getElementById("root")).render(t.jsx(hp.StrictMode,{children:t.jsx("div",{className:"font-mplus antialiased",children:t.jsx(a5,{})})}));
