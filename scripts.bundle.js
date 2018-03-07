/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
jQuery.noConflict();

;addComment={moveForm:function(d,f,i,c){var m=this,a,h=m.I(d),b=m.I(i),l=m.I("cancel-comment-reply-link"),j=m.I("comment_parent"),k=m.I("comment_post_ID");if(!h||!b||!l||!j){return}m.respondId=i;c=c||false;if(!m.I("wp-temp-form-div")){a=document.createElement("div");a.id="wp-temp-form-div";a.style.display="none";b.parentNode.insertBefore(a,b)}h.parentNode.insertBefore(b,h.nextSibling);if(k&&c){k.value=c}j.value=f;l.style.display="";l.onclick=function(){var n=addComment,e=n.I("wp-temp-form-div"),o=n.I(n.respondId);if(!e||!o){return}n.I("comment_parent").value="0";e.parentNode.insertBefore(o,e);e.parentNode.removeChild(e);this.style.display="none";this.onclick=null;return false};try{m.I("comment").focus()}catch(g){}return false},I:function(a){return document.getElementById(a)}};
;/*

Quicksand 1.2.2

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

*/

(function ($) {
    $.fn.quicksand = function (collection, customOptions) {     
        var options = {
            duration: 750,
            easing: 'swing',
            attribute: 'data-id', // attribute to recognize same items within source and dest
            adjustHeight: 'auto', // 'dynamic' animates height during shuffling (slow), 'auto' adjusts it before or after the animation, false leaves height constant
            useScaling: true, // disable it if you're not using scaling effect or want to improve performance
            enhancement: function(c) {}, // Visual enhacement (eg. font replacement) function for cloned elements
            selector: '> *',
            dx: 0,
            dy: 0
        };
        $.extend(options, customOptions);
        
        if ($.browser.msie || (typeof($.fn.scale) == 'undefined')) {
            // Got IE and want scaling effect? Kiss my ass.
            options.useScaling = false;
        }
        
        var callbackFunction;
        if (typeof(arguments[1]) == 'function') {
            var callbackFunction = arguments[1];
        } else if (typeof(arguments[2] == 'function')) {
            var callbackFunction = arguments[2];
        }
    
        
        return this.each(function (i) {
            var val;
            var animationQueue = []; // used to store all the animation params before starting the animation; solves initial animation slowdowns
            var $collection = $(collection).clone(); // destination (target) collection
            var $sourceParent = $(this); // source, the visible container of source collection
            var sourceHeight = $(this).css('height'); // used to keep height and document flow during the animation
            
            var destHeight;
            var adjustHeightOnCallback = false;
            
            var offset = $($sourceParent).offset(); // offset of visible container, used in animation calculations
            var offsets = []; // coordinates of every source collection item            
            
            var $source = $(this).find(options.selector); // source collection items
            
            // Replace the collection and quit if IE6
            if ($.browser.msie && $.browser.version.substr(0,1)<7) {
                $sourceParent.html('').append($collection);
                return;
            }

            // Gets called when any animation is finished
            var postCallbackPerformed = 0; // prevents the function from being called more than one time
            var postCallback = function () {
                
                if (!postCallbackPerformed) {
                    postCallbackPerformed = 1;
                    
                    // hack: 
                    // used to be: $sourceParent.html($dest.html()); // put target HTML into visible source container
                    // but new webkit builds cause flickering when replacing the collections
                    $toDelete = $sourceParent.find('> *');
                    $sourceParent.prepend($dest.find('> *'));
                    $toDelete.remove();
                         
                    if (adjustHeightOnCallback) {
                        $sourceParent.css('height', destHeight);
                    }
                    options.enhancement($sourceParent); // Perform custom visual enhancements on a newly replaced collection
                    if (typeof callbackFunction == 'function') {
                        callbackFunction.call(this);
                    }                    
                }
            };
            
            // Position: relative situations
            var $correctionParent = $sourceParent.offsetParent();
            var correctionOffset = $correctionParent.offset();
            if ($correctionParent.css('position') == 'relative') {
                if ($correctionParent.get(0).nodeName.toLowerCase() == 'body') {

                } else {
                    correctionOffset.top += (parseFloat($correctionParent.css('border-top-width')) || 0);
                    correctionOffset.left +=( parseFloat($correctionParent.css('border-left-width')) || 0);
                }
            } else {
                correctionOffset.top -= (parseFloat($correctionParent.css('border-top-width')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('border-left-width')) || 0);
                correctionOffset.top -= (parseFloat($correctionParent.css('margin-top')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('margin-left')) || 0);
            }
            
            // perform custom corrections from options (use when Quicksand fails to detect proper correction)
            if (isNaN(correctionOffset.left)) {
                correctionOffset.left = 0;
            }
            if (isNaN(correctionOffset.top)) {
                correctionOffset.top = 0;
            }
            
            correctionOffset.left -= options.dx;
            correctionOffset.top -= options.dy;

            // keeps nodes after source container, holding their position
            $sourceParent.css('height', $(this).height());
            
            // get positions of source collections
            $source.each(function (i) {
                offsets[i] = $(this).offset();
            });
            
            // stops previous animations on source container
            $(this).stop();
            var dx = 0; var dy = 0;
            $source.each(function (i) {
                $(this).stop(); // stop animation of collection items
                var rawObj = $(this).get(0);
                if (rawObj.style.position == 'absolute') {
                    dx = -options.dx;
                    dy = -options.dy;
                } else {
                    dx = options.dx;
                    dy = options.dy;                    
                }

                rawObj.style.position = 'absolute';
                rawObj.style.margin = '0';

                rawObj.style.top = (offsets[i].top - parseFloat(rawObj.style.marginTop) - correctionOffset.top + dy) + 'px';
                rawObj.style.left = (offsets[i].left - parseFloat(rawObj.style.marginLeft) - correctionOffset.left + dx) + 'px';
            });
                    
            // create temporary container with destination collection
            var $dest = $($sourceParent).clone();
            var rawDest = $dest.get(0);
            rawDest.innerHTML = '';
            rawDest.setAttribute('id', '');
            rawDest.style.height = 'auto';
            rawDest.style.width = $sourceParent.width() + 'px';
            $dest.append($collection);      
            // insert node into HTML
            // Note that the node is under visible source container in the exactly same position
            // The browser render all the items without showing them (opacity: 0.0)
            // No offset calculations are needed, the browser just extracts position from underlayered destination items
            // and sets animation to destination positions.
            $dest.insertBefore($sourceParent);
            $dest.css('opacity', 0.0);
            rawDest.style.zIndex = -1;
            
            rawDest.style.margin = '0';
            rawDest.style.position = 'absolute';
            rawDest.style.top = offset.top - correctionOffset.top + 'px';
            rawDest.style.left = offset.left - correctionOffset.left + 'px';
            
            
    
            

            if (options.adjustHeight === 'dynamic') {
                // If destination container has different height than source container
                // the height can be animated, adjusting it to destination height
                $sourceParent.animate({height: $dest.height()}, options.duration, options.easing);
            } else if (options.adjustHeight === 'auto') {
                destHeight = $dest.height();
                if (parseFloat(sourceHeight) < parseFloat(destHeight)) {
                    // Adjust the height now so that the items don't move out of the container
                    $sourceParent.css('height', destHeight);
                } else {
                    //  Adjust later, on callback
                    adjustHeightOnCallback = true;
                }
            }
                
            // Now it's time to do shuffling animation
            // First of all, we need to identify same elements within source and destination collections    
            $source.each(function (i) {
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    
                    val = options.attribute($(this));
                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                if (destElement.length) {
                    // The item is both in source and destination collections
                    // It it's under different position, let's move it
                    if (!options.useScaling) {
                        animationQueue.push(
                                            {
                                                element: $(this), 
                                                animation: 
                                                    {top: destElement.offset().top - correctionOffset.top, 
                                                     left: destElement.offset().left - correctionOffset.left, 
                                                     opacity: 1.0
                                                    }
                                            });

                    } else {
                        animationQueue.push({
                                            element: $(this), 
                                            animation: {top: destElement.offset().top - correctionOffset.top, 
                                                        left: destElement.offset().left - correctionOffset.left, 
                                                        opacity: 1.0, 
                                                        scale: '1.0'
                                                       }
                                            });

                    }
                } else {
                    // The item from source collection is not present in destination collections
                    // Let's remove it
                    if (!options.useScaling) {
                        animationQueue.push({element: $(this), 
                                             animation: {opacity: '0.0'}});
                    } else {
                        animationQueue.push({element: $(this), animation: {opacity: '0.0', 
                                         scale: '0.0'}});
                    }
                }
            });
            
            $collection.each(function (i) {
                // Grab all items from target collection not present in visible source collection
                
                var sourceElement = [];
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    val = options.attribute($(this));
                    $source.each(function() {
                        if (options.attribute(this) == val) {
                            sourceElement = $(this);
                            return false;
                        }
                    });                 

                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    sourceElement = $source.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                
                var animationOptions;
                if (sourceElement.length === 0) {
                    // No such element in source collection...
                    if (!options.useScaling) {
                        animationOptions = {
                            opacity: '1.0'
                        };
                    } else {
                        animationOptions = {
                            opacity: '1.0',
                            scale: '1.0'
                        };
                    }
                    // Let's create it
                    d = destElement.clone();
                    var rawDestElement = d.get(0);
                    rawDestElement.style.position = 'absolute';
                    rawDestElement.style.margin = '0';
                    rawDestElement.style.top = destElement.offset().top - correctionOffset.top + 'px';
                    rawDestElement.style.left = destElement.offset().left - correctionOffset.left + 'px';
                    d.css('opacity', 0.0); // IE
                    if (options.useScaling) {
                        d.css('transform', 'scale(0.0)');
                    }
                    d.appendTo($sourceParent);
                    
                    animationQueue.push({element: $(d), 
                                         animation: animationOptions});
                }
            });
            
            $dest.remove();
            options.enhancement($sourceParent); // Perform custom visual enhancements during the animation
            for (i = 0; i < animationQueue.length; i++) {
                animationQueue[i].element.animate(animationQueue[i].animation, options.duration, options.easing, postCallback);
            }
        });
    };
})(jQuery);
;(function($) {
    $.fn.tipsy = function(options) {

        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        return this.each(function() {
            
            var opts = $.fn.tipsy.elementOptions(this, options);
            
            $(this).hover(function() {

                $.data(this, 'cancel.tipsy', true);

                var tip = $.data(this, 'active.tipsy');
                if (!tip) {
                    tip = $('<div class="tipsy"><div class="tipsy-inner"/></div>');
                    tip.css({position: 'absolute', zIndex: 100000});
                    $.data(this, 'active.tipsy', tip);
                }

                if ($(this).attr('title') || typeof($(this).attr('original-title')) != 'string') {
                    $(this).attr('original-title', $(this).attr('title') || '').removeAttr('title');
                }

                var title;
                if (typeof opts.title == 'string') {
                    title = $(this).attr(opts.title == 'title' ? 'original-title' : opts.title);
                } else if (typeof opts.title == 'function') {
                    title = opts.title.call(this);
                }

                tip.find('.tipsy-inner')[opts.html ? 'html' : 'text'](title || opts.fallback);

                var pos = $.extend({}, $(this).offset(), {width: this.offsetWidth, height: this.offsetHeight});
                tip.get(0).className = 'tipsy'; // reset classname in case of dynamic gravity
                tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);
                var actualWidth = tip[0].offsetWidth, actualHeight = tip[0].offsetHeight;
                var gravity = (typeof opts.gravity == 'function') ? opts.gravity.call(this) : opts.gravity;

                switch (gravity.charAt(0)) {
                    case 'n':
                        tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-north');
                        break;
                    case 's':
                        tip.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-south');
                        break;
                    case 'e':
                        tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}).addClass('tipsy-east');
                        break;
                    case 'w':
                        tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}).addClass('tipsy-west');
                        break;
                }

                if (opts.fade) {
                    tip.css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: 0.8});
                } else {
                    tip.css({visibility: 'visible'});
                }

            }, function() {
                $.data(this, 'cancel.tipsy', false);
                var self = this;
                setTimeout(function() {
                    if ($.data(this, 'cancel.tipsy')) return;
                    var tip = $.data(self, 'active.tipsy');
                    if (opts.fade) {
                        tip.stop().fadeOut(function() { $(this).remove(); });
                    } else {
                        tip.remove();
                    }
                }, 100);

            });
            
        });
        
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.defaults = {
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        title: 'title'
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
})(jQuery);

;/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.2
------------------------------------------------------------------------- */

(function($){$.prettyPhoto={version:'3.1.2'};$.fn.prettyPhoto=function(pp_settings){pp_settings=jQuery.extend({animation_speed:'fast',slideshow:5000,autoplay_slideshow:false,opacity:0.80,show_title:true,allow_resize:true,default_width:500,default_height:344,counter_separator_label:'/',theme:'pp_default',horizontal_padding:20,hideflash:false,wmode:'opaque',autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class="pp_pic_holder"><div class="ppt">&nbsp;</div><div class="pp_top"><div class="pp_left"></div><div class="pp_middle"></div><div class="pp_right"></div></div><div class="pp_content_container"><div class="pp_left"><div class="pp_right"><div class="pp_content"><div class="pp_loaderIcon"></div><div class="pp_fade"><a href="#" class="pp_expand" title="Expand the image">Expand</a><div class="pp_hoverContainer"><a class="pp_next" href="#">next</a><a class="pp_previous" href="#">previous</a></div><div id="pp_full_res"></div><div class="pp_details"><div class="pp_nav"><a href="#" class="pp_arrow_previous">Previous</a><p class="currentTextHolder">0/0</p><a href="#" class="pp_arrow_next">Next</a></div><p class="pp_description"></p>{pp_social}<a class="pp_close" href="#">Close</a></div></div></div></div></div></div><div class="pp_bottom"><div class="pp_left"></div><div class="pp_middle"></div><div class="pp_right"></div></div></div><div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"><a href="#" class="pp_arrow_previous">Previous</a><div><ul>{gallery}</ul></div><a href="#" class="pp_arrow_next">Next</a></div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:'',social_tools:'<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>'},pp_settings);var matchedObjects=this,percentBased=false,pp_dimensions,pp_open,pp_contentHeight,pp_contentWidth,pp_containerHeight,pp_containerWidth,windowHeight=$(window).height(),windowWidth=$(window).width(),pp_slideshow;doresize=true,scroll_pos=_get_scroll();$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){_center_overlay();_resize_overlay();});if(pp_settings.keyboard_shortcuts){$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){if(typeof $pp_pic_holder!='undefined'){if($pp_pic_holder.is(':visible')){switch(e.keyCode){case 37:$.prettyPhoto.changePage('previous');e.preventDefault();break;case 39:$.prettyPhoto.changePage('next');e.preventDefault();break;case 27:if(!settings.modal)
$.prettyPhoto.close();e.preventDefault();break;};};};});};$.prettyPhoto.initialize=function(){settings=pp_settings;if(settings.theme=='pp_default')settings.horizontal_padding=16;if(settings.ie6_fallback&&$.browser.msie&&parseInt($.browser.version)==6)settings.theme="light_square";theRel=$(this).attr('rel');galleryRegExp=/\[(?:.*)\]/;isSet=(galleryRegExp.exec(theRel))?true:false;pp_images=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr('rel').indexOf(theRel)!=-1)return $(n).attr('href');}):$.makeArray($(this).attr('href'));pp_titles=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr('rel').indexOf(theRel)!=-1)return($(n).find('img').attr('alt'))?$(n).find('img').attr('alt'):"";}):$.makeArray($(this).find('img').attr('alt'));pp_descriptions=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr('rel').indexOf(theRel)!=-1)return($(n).attr('title'))?$(n).attr('title'):"";}):$.makeArray($(this).attr('title'));set_position=jQuery.inArray($(this).attr('href'),pp_images);rel_index=(isSet)?set_position:$("a[rel^='"+theRel+"']").index($(this));_build_overlay(this);if(settings.allow_resize)
$(window).bind('scroll.prettyphoto',function(){_center_overlay();});$.prettyPhoto.open();return false;}
$.prettyPhoto.open=function(event){if(typeof settings=="undefined"){settings=pp_settings;if($.browser.msie&&$.browser.version==6)settings.theme="light_square";pp_images=$.makeArray(arguments[0]);pp_titles=(arguments[1])?$.makeArray(arguments[1]):$.makeArray("");pp_descriptions=(arguments[2])?$.makeArray(arguments[2]):$.makeArray("");isSet=(pp_images.length>1)?true:false;set_position=0;_build_overlay(event.target);}
if($.browser.msie&&$.browser.version==6)$('select').css('visibility','hidden');if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden');_checkPosition($(pp_images).size());$('.pp_loaderIcon').show();if($ppt.is(':hidden'))$ppt.css('opacity',0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find('.currentTextHolder').text((set_position+1)+settings.counter_separator_label+$(pp_images).size());if(pp_descriptions[set_position]!=""){$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));}else{$pp_pic_holder.find('.pp_description').hide();}
movie_width=(parseFloat(getParam('width',pp_images[set_position])))?getParam('width',pp_images[set_position]):settings.default_width.toString();movie_height=(parseFloat(getParam('height',pp_images[set_position])))?getParam('height',pp_images[set_position]):settings.default_height.toString();percentBased=false;if(movie_height.indexOf('%')!=-1){movie_height=parseFloat(($(window).height()*parseFloat(movie_height)/100)-150);percentBased=true;}
if(movie_width.indexOf('%')!=-1){movie_width=parseFloat(($(window).width()*parseFloat(movie_width)/100)-150);percentBased=true;}
$pp_pic_holder.fadeIn(function(){(settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined")?$ppt.html(unescape(pp_titles[set_position])):$ppt.html('&nbsp;');imgPreloader="";skipInjection=false;switch(_getFileType(pp_images[set_position])){case'image':imgPreloader=new Image();nextImage=new Image();if(isSet&&set_position<$(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image();if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find('#pp_full_res')[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){pp_dimensions=_fitToViewport(imgPreloader.width,imgPreloader.height);_showContent();};imgPreloader.onerror=function(){alert('Image cannot be loaded. Make sure the path is correct and image exist.');$.prettyPhoto.close();};imgPreloader.src=pp_images[set_position];break;case'youtube':pp_dimensions=_fitToViewport(movie_width,movie_height);movie='http://www.youtube.com/embed/'+getParam('v',pp_images[set_position]);(getParam('rel',pp_images[set_position]))?movie+="?rel="+getParam('rel',pp_images[set_position]):movie+="?rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case'vimeo':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=pp_images[set_position];var regExp=/http:\/\/(www\.)?vimeo.com\/(\d+)/;var match=movie_id.match(regExp);movie='http://player.vimeo.com/video/'+match[2]+'?title=0&amp;byline=0&amp;portrait=0';if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=pp_dimensions['width']+'/embed/?moog_width='+pp_dimensions['width'];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);break;case'quicktime':pp_dimensions=_fitToViewport(movie_width,movie_height);pp_dimensions['height']+=15;pp_dimensions['contentHeight']+=15;pp_dimensions['containerHeight']+=15;toInject=settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case'flash':pp_dimensions=_fitToViewport(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf('flashvars')+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf('?'));toInject=settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);break;case'iframe':pp_dimensions=_fitToViewport(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf('iframe')-1);toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);break;case'ajax':doresize=false;pp_dimensions=_fitToViewport(movie_width,movie_height);doresize=true;skipInjection=true;$.get(pp_images[set_position],function(responseHTML){toInject=settings.inline_markup.replace(/{content}/g,responseHTML);$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();});break;case'custom':pp_dimensions=_fitToViewport(movie_width,movie_height);toInject=settings.custom_markup;break;case'inline':myClone=$(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();doresize=false;pp_dimensions=_fitToViewport($(myClone).width(),$(myClone).height());doresize=true;$(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());break;};if(!imgPreloader&&!skipInjection){$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();};});return false;};$.prettyPhoto.changePage=function(direction){currentGalleryPage=0;if(direction=='previous'){set_position--;if(set_position<0)set_position=$(pp_images).size()-1;}else if(direction=='next'){set_position++;if(set_position>$(pp_images).size()-1)set_position=0;}else{set_position=direction;};rel_index=set_position;if(!doresize)doresize=true;$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');_hideContent(function(){$.prettyPhoto.open();});};$.prettyPhoto.changeGalleryPage=function(direction){if(direction=='next'){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0;}else if(direction=='previous'){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage;}else{currentGalleryPage=direction;};slide_speed=(direction=='next'||direction=='previous')?settings.animation_speed:0;slide_to=currentGalleryPage*(itemsPerPage*itemWidth);$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);};$.prettyPhoto.startSlideshow=function(){if(typeof pp_slideshow=='undefined'){$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){$.prettyPhoto.stopSlideshow();return false;});pp_slideshow=setInterval($.prettyPhoto.startSlideshow,settings.slideshow);}else{$.prettyPhoto.changePage('next');};}
$.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});clearInterval(pp_slideshow);pp_slideshow=undefined;}
$.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;$.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){$(this).remove();});$pp_overlay.fadeOut(settings.animation_speed,function(){if($.browser.msie&&$.browser.version==6)$('select').css('visibility','visible');if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible');$(this).remove();$(window).unbind('scroll.prettyphoto');settings.callback();doresize=true;pp_open=false;delete settings;});};function _showContent(){$('.pp_loaderIcon').hide();projectedTop=scroll_pos['scrollTop']+((windowHeight/2)-(pp_dimensions['containerHeight']/2));if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find('.pp_content').animate({height:pp_dimensions['contentHeight'],width:pp_dimensions['contentWidth']},settings.animation_speed);$pp_pic_holder.animate({'top':projectedTop,'left':(windowWidth/2)-(pp_dimensions['containerWidth']/2),width:pp_dimensions['containerWidth']},settings.animation_speed,function(){$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed);if(isSet&&_getFileType(pp_images[set_position])=="image"){$pp_pic_holder.find('.pp_hoverContainer').show();}else{$pp_pic_holder.find('.pp_hoverContainer').hide();}
if(pp_dimensions['resized']){$('a.pp_expand,a.pp_contract').show();}else{$('a.pp_expand').hide();}
if(settings.autoplay_slideshow&&!pp_slideshow&&!pp_open)$.prettyPhoto.startSlideshow();if(settings.deeplinking)
setHashtag();settings.changepicturecallback();pp_open=true;});_insert_gallery();};function _hideContent(callback){$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){$('.pp_loaderIcon').show();callback();});};function _checkPosition(setCount){(setCount>1)?$('.pp_nav').show():$('.pp_nav').hide();};function _fitToViewport(width,height){resized=false;_getDimensions(width,height);imageWidth=width,imageHeight=height;if(((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight))&&doresize&&settings.allow_resize&&!percentBased){resized=true,fitting=false;while(!fitting){if((pp_containerWidth>windowWidth)){imageWidth=(windowWidth-200);imageHeight=(height/width)*imageWidth;}else if((pp_containerHeight>windowHeight)){imageHeight=(windowHeight-200);imageWidth=(width/height)*imageHeight;}else{fitting=true;};pp_containerHeight=imageHeight,pp_containerWidth=imageWidth;};_getDimensions(imageWidth,imageHeight);if((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight)){_fitToViewport(pp_containerWidth,pp_containerHeight)};};return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(pp_containerHeight),containerWidth:Math.floor(pp_containerWidth)+(settings.horizontal_padding*2),contentHeight:Math.floor(pp_contentHeight),contentWidth:Math.floor(pp_contentWidth),resized:resized};};function _getDimensions(width,height){width=parseFloat(width);height=parseFloat(height);$pp_details=$pp_pic_holder.find('.pp_details');$pp_details.width(width);detailsHeight=parseFloat($pp_details.css('marginTop'))+parseFloat($pp_details.css('marginBottom'));$pp_details=$pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({'position':'absolute','top':-10000});detailsHeight+=$pp_details.height();detailsHeight=(detailsHeight<=34)?36:detailsHeight;if($.browser.msie&&$.browser.version==7)detailsHeight+=8;$pp_details.remove();$pp_title=$pp_pic_holder.find('.ppt');$pp_title.width(width);titleHeight=parseFloat($pp_title.css('marginTop'))+parseFloat($pp_title.css('marginBottom'));$pp_title=$pp_title.clone().appendTo($('body')).css({'position':'absolute','top':-10000});titleHeight+=$pp_title.height();$pp_title.remove();pp_contentHeight=height+detailsHeight;pp_contentWidth=width;pp_containerHeight=pp_contentHeight+titleHeight+$pp_pic_holder.find('.pp_top').height()+$pp_pic_holder.find('.pp_bottom').height();pp_containerWidth=width;}
function _getFileType(itemSrc){if(itemSrc.match(/youtube\.com\/watch/i)){return'youtube';}else if(itemSrc.match(/vimeo\.com/i)){return'vimeo';}else if(itemSrc.match(/\b.mov\b/i)){return'quicktime';}else if(itemSrc.match(/\b.swf\b/i)){return'flash';}else if(itemSrc.match(/\biframe=true\b/i)){return'iframe';}else if(itemSrc.match(/\bajax=true\b/i)){return'ajax';}else if(itemSrc.match(/\bcustom=true\b/i)){return'custom';}else if(itemSrc.substr(0,1)=='#'){return'inline';}else{return'image';};};function _center_overlay(){if(doresize&&typeof $pp_pic_holder!='undefined'){scroll_pos=_get_scroll();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=(windowHeight/2)+scroll_pos['scrollTop']-(contentHeight/2);if(projectedTop<0)projectedTop=0;if(contentHeight>windowHeight)
return;$pp_pic_holder.css({'top':projectedTop,'left':(windowWidth/2)+scroll_pos['scrollLeft']-(contentwidth/2)});};};function _get_scroll(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};};};function _resize_overlay(){windowHeight=$(window).height(),windowWidth=$(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height($(document).height()).width(windowWidth);};function _insert_gallery(){if(isSet&&settings.overlay_gallery&&_getFileType(pp_images[set_position])=="image"&&(settings.ie6_fallback&&!($.browser.msie&&parseInt($.browser.version)==6))){itemWidth=52+5;navWidth=(settings.theme=="facebook"||settings.theme=="pp_default")?50:30;itemsPerPage=Math.floor((pp_dimensions['containerWidth']-100-navWidth)/itemWidth);itemsPerPage=(itemsPerPage<pp_images.length)?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();}else{$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();};galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css('margin-left',-((galleryWidth/2)+(navWidth/2))).find('div:first').width(galleryWidth+5).find('ul').width(fullGalleryWidth).find('li.selected').removeClass('selected');goToPage=(Math.floor(set_position/itemsPerPage)<totalPage)?Math.floor(set_position/itemsPerPage):totalPage;$.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');}else{$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');}}
function _build_overlay(caller){settings.markup=settings.markup.replace('{pp_social}',(settings.social_tools)?settings.social_tools:'');$('body').append(settings.markup);$pp_pic_holder=$('.pp_pic_holder'),$ppt=$('.ppt'),$pp_overlay=$('div.pp_overlay');if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var i=0;i<pp_images.length;i++){if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname='default';img_src='';}else{classname='';img_src=pp_images[i];}
toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";};toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find('#pp_full_res').after(toInject);$pp_gallery=$('.pp_pic_holder .pp_gallery'),$pp_gallery_li=$pp_gallery.find('li');$pp_gallery.find('.pp_arrow_next').click(function(){$.prettyPhoto.changeGalleryPage('next');$.prettyPhoto.stopSlideshow();return false;});$pp_gallery.find('.pp_arrow_previous').click(function(){$.prettyPhoto.changeGalleryPage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_content').hover(function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();},function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();});itemWidth=52+5;$pp_gallery_li.each(function(i){$(this).find('a').click(function(){$.prettyPhoto.changePage(i);$.prettyPhoto.stopSlideshow();return false;});});};if(settings.slideshow){$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
$pp_pic_holder.find('.pp_nav .pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});}
$pp_pic_holder.attr('class','pp_pic_holder '+settings.theme);$pp_overlay.css({'opacity':0,'height':$(document).height(),'width':$(window).width()}).bind('click',function(){if(!settings.modal)$.prettyPhoto.close();});$('a.pp_close').bind('click',function(){$.prettyPhoto.close();return false;});$('a.pp_expand').bind('click',function(e){if($(this).hasClass('pp_expand')){$(this).removeClass('pp_expand').addClass('pp_contract');doresize=false;}else{$(this).removeClass('pp_contract').addClass('pp_expand');doresize=true;};_hideContent(function(){$.prettyPhoto.open();});return false;});$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){$.prettyPhoto.changePage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){$.prettyPhoto.changePage('next');$.prettyPhoto.stopSlideshow();return false;});_center_overlay();};if(!pp_alreadyInitialized&&getHashtag()){pp_alreadyInitialized=true;hashIndex=getHashtag();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf('/'));setTimeout(function(){$("a[rel^='"+hashRel+"']:eq("+hashIndex+")").trigger('click');},50);}
return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize);};function getHashtag(){url=location.href;hashtag=(url.indexOf('#!')!=-1)?decodeURI(url.substring(url.indexOf('#!')+2,url.length)):false;return hashtag;};function setHashtag(){if(typeof theRel=='undefined')return;location.hash='!'+theRel+'/'+rel_index+'/';};function getParam(name,url){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(url);return(results==null)?"":results[1];}})(jQuery);var pp_alreadyInitialized=false;
;/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999 (13-NOV-2011)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($, undefined) {

var ver = '2.9999';

// if $.support is not defined (pre jQuery 1.3) add what I need
if ($.support == undefined) {
	$.support = {
		opacity: !($.browser.msie)
	};
}

function debug(s) {
	$.fn.cycle.debug && log(s);
}		
function log() {
	window.console && console.log && console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
	return el.cyclePause;
}


// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in first arg == 'resume') and indicates
//	 that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
		
		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards)}, startTime);
		}
	});
};

function triggerPause(cont, byHover, onPager) {
	var opts = $(cont).data('cycle.opts');
	var paused = !!cont.cyclePause;
	if (paused && opts.paused)
		opts.paused(cont, opts, byHover, onPager);
	else if (!paused && opts.resumed)
		opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop == undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'destroy':
		case 'stop':
			var opts = $(cont).data('cycle.opts');
			if (!opts)
				return false;
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			opts.elements && $(opts.elements).stop();
			$(cont).removeData('cycle.opts');
			if (options == 'destroy')
				destroy(opts);
			return false;
		case 'toggle':
			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
			checkInstantResume(cont.cyclePause, arg2, cont);
			triggerPause(cont);
			return false;
		case 'pause':
			cont.cyclePause = 1;
			triggerPause(cont);
			return false;
		case 'resume':
			cont.cyclePause = 0;
			checkInstantResume(false, arg2, cont);
			triggerPause(cont);
			return false;
		case 'prev':
		case 'next':
			var opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		};
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
	
	function checkInstantResume(isPaused, arg2, cont) {
		if (!isPaused && arg2 === true) { // resume now!
			var options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not resume');
				return false;
			}
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			go(options.elements, options, 1, !options.backwards);
		}
	}
};

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
};

// unbind event handlers
function destroy(opts) {
	if (opts.next)
		$(opts.next).unbind(opts.prevNextEvent);
	if (opts.prev)
		$(opts.prev).unbind(opts.prevNextEvent);
	
	if (opts.pager || opts.pagerAnchorBuilder)
		$.each(opts.pagerAnchors || [], function() {
			this.unbind().remove();
		});
	opts.pagerAnchors = null;
	if (opts.destroy) // callback
		opts.destroy(opts);
};

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	var startingSlideSpecified;
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
	if (meta)
		opts = $.extend(opts, meta);
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.backwards); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide != undefined) {
		opts.startingSlide = parseInt(opts.startingSlide,10);
		if (opts.startingSlide >= els.length || opts.startSlide < 0)
			opts.startingSlide = 0; // catch bogus input
		else 
			startingSlideSpecified = true;
	}
	else if (opts.backwards)
		opts.startingSlide = els.length - 1;
	else
		opts.startingSlide = 0;

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		if (startingSlideSpecified) {
			// try to find the specified starting slide and if found set start slide index in the map accordingly
			for ( var cnt = 0; cnt < els.length; cnt++ ) {
				if ( opts.startingSlide == opts.randomMap[cnt] ) {
					opts.randomIndex = cnt;
				}
			}
		}
		else {
			opts.randomIndex = 1;
			opts.startingSlide = opts.randomMap[1];
		}
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z;
		if (opts.backwards)
			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
		else
			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z)
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit) {
		if (!opts.aspect) {
	        if (opts.width)
	            $slides.width(opts.width);
	        if (opts.height && opts.height != 'auto')
	            $slides.height(opts.height);
		} else {
			$slides.each(function(){
				var $slide = $(this);
				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
				if( opts.width && $slide.width() != opts.width ) {
					$slide.width( opts.width );
					$slide.height( opts.width / ratio );
				}

				if( opts.height && $slide.height() < opts.height ) {
					$slide.height( opts.height );
					$slide.width( opts.height * ratio );
				}
			});
		}
	}

	if (opts.center && ((!opts.fit) || opts.aspect)) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
				"margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
			});
		});
	}

	if (opts.center && !opts.fit && !opts.slideResize) {
	  	$slides.each(function(){
	    	var $slide = $(this);
	    	$slide.css({
	      		"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
	      		"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
	    	});
	  	});
	}
		
	// stretch container
	var reshape = opts.containerResize && !$cont.innerHeight();
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
	}

	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
	if (opts.pause)
		$cont.hover(
			function(){
				pauseFlag = true;
				this.cyclePause++;
				triggerPause(cont, true);
			},
			function(){
				pauseFlag && this.cyclePause--;
				triggerPause(cont, true);
			}
		);

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

		if ( $el.is('img') ) {
			// sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
			// an image is being downloaded and the markup did not include sizing info (height/width attributes);
			// there seems to be some "default" sizes used in this situation
			var loadingIE	= ($.browser.msie  && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
			var loadingFF	= ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
			var loadingOp	= ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
			var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loadingIE || loadingFF || loadingOp || loadingOther) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options)}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.cssAfter = opts.cssAfter || {};
	opts.cssFirst = opts.cssFirst || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout,10);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		
		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.backwards)
		opts.nextSlide = opts.startingSlide == 0 ? (els.length-1) : opts.startingSlide-1;
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (!opts.skipInitializationCallbacks) {
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
	}
	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1)});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0)});
	if (opts.pager || opts.pagerAnchorBuilder)
		buildPager(els,opts);

	exposeAddSlide(opts, els);

	return opts;
};

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
};

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (p in txs) {
			tx = txs[p];
			if (txs.hasOwnProperty(p) && $.isFunction(tx))
				opts.fxs.push(p);
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
};

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		// add the slide to the random map and resort
		if (opts.random) {
			opts.randomMap.push(opts.slideCount-1);
			opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		}

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$s.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager || opts.pagerAnchorBuilder)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		debug('manualTrump in go(), stopping active transition');
		$(els).stop(true,true);
		opts.busy = 0;
	}
	// don't begin another timeout-based transition if there is one active
	if (opts.busy) {
		debug('transition active, ignoring new tx request');
		return;
	}

	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	var changed = false;
	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
		changed = true;
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (fwd && (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length))
				opts.lastFx = 0;
			else if (!fwd && (opts.lastFx == undefined || --opts.lastFx < 0))
				opts.lastFx = opts.fxs.length - 1;
			fx = opts.fxs[opts.lastFx];
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			opts.busy = 0;
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
			if (!p.cycleStop) {
				// queue next transition
				queueNext();
			}
		};

		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
		
		// get ready to perform the transition
		opts.busy = 1;
		if (opts.fxFn) // fx function provided?
			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else
			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
	}
	else {
		queueNext();
	}

	if (changed || opts.nextSlide == opts.currSlide) {
		// calculate the next slide
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length) {
				opts.randomIndex = 0;
				opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
			}
			opts.nextSlide = opts.randomMap[opts.randomIndex];
			if (opts.nextSlide == opts.currSlide)
				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
		}
		else if (opts.backwards) {
			var roll = (opts.nextSlide - 1) < 0;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = 1;
				opts.currSlide = 0;
			}
			else {
				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
				opts.currSlide = roll ? 0 : opts.nextSlide+1;
			}
		}
		else { // sequence
			var roll = (opts.nextSlide + 1) == els.length;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = els.length-2;
				opts.currSlide = els.length-1;
			}
			else {
				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
			}
		}
	}
	if (changed && opts.pager)
		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
	
	function queueNext() {
		// stage the next transition
		var ms = 0, timeout = opts.timeout;
		if (opts.timeout && !opts.continuous) {
			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
         if (opts.fx == 'shuffle')
            ms -= opts.speedOut;
      }
		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
			ms = 10;
		if (ms > 0)
			p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards) }, ms);
	}
};

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
};

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
	var val = moveForward ? 1 : -1;
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
	if ($.isFunction(cb))
		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, moveForward);
	return false;
};

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
};

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder)) {
		a = opts.pagerAnchorBuilder(i,el);
		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
	}
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone[0]);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	opts.pagerAnchors =  opts.pagerAnchors || [];
	opts.pagerAnchors.push($a);
	
	var pagerFn = function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
		if ($.isFunction(cb))
			cb(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
	}
	
	if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
		$a.hover(pagerFn, function(){/* no-op */} );
	}
	else {
		$a.bind(opts.pagerEvent, pagerFn);
	}
	
	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
		$a.bind('click.cycle', function(){return false;}); // suppress click
	
	var cont = opts.$cont[0];
	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
	if (opts.pauseOnPagerHover) {
		$a.hover(
			function() { 
				pauseFlag = true;
				cont.cyclePause++; 
				triggerPause(cont,true,true);
			}, function() { 
				pauseFlag && cont.cyclePause--; 
				triggerPause(cont,true,true);
			} 
		);
	}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	debug('applying clearType background-color hack');
	function hex(s) {
		s = parseInt(s,10).toString(16);
		return s.length < 2 ? '0'+s : s;
	};
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v && v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	};
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
};

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	if (typeof opts.cssBefore.opacity == 'undefined')
		opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (opts.slideResize && w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (opts.slideResize && h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {
		$n.animate(opts.animIn, speedIn, easeIn, function() {
			cb();
		});
	};
	$l.animate(opts.animOut, speedOut, easeOut, function() {
		$l.css(opts.cssAfter);
		if (!opts.sync) 
			fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
	activePagerClass: 'activeSlide', // class name used for the active pager link
	after:		   null,  // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
	allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
	animIn:		   null,  // properties that define how the slide animates in
	animOut:	   null,  // properties that define how the slide animates out
	aspect:		   false,  // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
	autostop:	   0,	  // true to end slideshow after X transitions (where X == slide count)
	autostopCount: 0,	  // number of transitions (optionally used with autostop to define X)
	backwards:     false, // true to start slideshow at last slide and move backwards through the stack
	before:		   null,  // transition callback (scope set to element to be shown):	 function(currSlideElement, nextSlideElement, options, forwardFlag)
	center: 	   null,  // set to true to have cycle add top/left margin to each slide (use with width and height options)
	cleartype:	   !$.support.opacity,  // true if clearType corrections should be applied (for IE)
	cleartypeNoBg: false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
	containerResize: 1,	  // resize container to fit largest slide
	continuous:	   0,	  // true to start next transition immediately after current one completes
	cssAfter:	   null,  // properties that defined the state of the slide after transitioning out
	cssBefore:	   null,  // properties that define the initial state of the slide before transitioning in
	delay:		   0,	  // additional delay (in ms) for first transition (hint: can be negative)
	easeIn:		   null,  // easing for "in" transition
	easeOut:	   null,  // easing for "out" transition
	easing:		   null,  // easing method for both in and out transitions
	end:		   null,  // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
	fastOnEvent:   0,	  // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
	fit:		   0,	  // force slides to fit container
	fx:			  'fade', // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
	fxFn:		   null,  // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
	height:		  'auto', // container height (if the 'fit' option is true, the slides will be set to this height as well)
	manualTrump:   true,  // causes manual transition to stop an active transition instead of being ignored
	metaAttr:     'cycle',// data- attribute that holds the option data for the slideshow
	next:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
	nowrap:		   0,	  // true to prevent slideshow from wrapping
	onPagerEvent:  null,  // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
	onPrevNextEvent: null,// callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
	pager:		   null,  // element, jQuery object, or jQuery selector string for the element to use as pager container
	pagerAnchorBuilder: null, // callback fn for building anchor links:  function(index, DOMelement)
	pagerEvent:	  'click.cycle', // name of event which drives the pager navigation
	pause:		   0,	  // true to enable "pause on hover"
	pauseOnPagerHover: 0, // true to pause when hovering over pager link
	prev:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
	prevNextEvent:'click.cycle',// event which drives the manual transition to the previous or next slide
	random:		   0,	  // true for random, false for sequence (not applicable to shuffle fx)
	randomizeEffects: 1,  // valid when multiple effects are used; true to make the effect sequence random
	requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
	requeueTimeout: 250,  // ms delay for requeue
	rev:		   0,	  // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
	shuffle:	   null,  // coords for shuffle animation, ex: { top:15, left: 200 }
	skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
	slideExpr:	   null,  // expression for selecting slides (if something other than all children is required)
	slideResize:   1,     // force slide width/height to fixed size before every transition
	speed:		   1000,  // speed of the transition (any valid fx speed value)
	speedIn:	   null,  // speed of the 'in' transition
	speedOut:	   null,  // speed of the 'out' transition
	startingSlide: undefined,	  // zero-based index of the first slide to be displayed
	sync:		   1,	  // true if in/out transitions should occur simultaneously
	timeout:	   4000,  // milliseconds between slide transitions (0 to disable auto advance)
	timeoutFn:     null,  // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
	updateActivePagerLink: null, // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
	width:         null   // container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
	opts.before.push(function(curr,next,opts,w,h,rev) {
		$(curr).css('zIndex',opts.slideCount + (!rev === true ? 1 : 0));
		$(next).css('zIndex',opts.slideCount + (!rev === true ? 0 : 1));
	});
	opts.animIn.opacity = 1;
	opts.animOut.opacity = 0;
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.cssFirst.top = 0;
	opts.animIn.top = 0;
	opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst.top = 0;
	opts.cssBefore.top = -h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = -w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.width = 'show';
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animIn.height = 'show';
	opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		if (opts.rev)
			fwd = !fwd;
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++)
				fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z,10)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
		opts.animOut.width = next.cycleW;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.height = 0;
	opts.animIn.top = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
	});
	opts.cssFirst.top = 0;
	opts.cssFirst.left = 0;
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
	});
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
	opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = w;
	opts.animIn.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = h;
	opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = this.cycleH;
		opts.animOut.top = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = next.cycleH;
		opts.animOut.top = curr.cycleH/2;
		opts.animOut.height = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2,10);
			var left = parseInt(w/2,10);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count),10) : 0;
			var ll = l ? l - parseInt(step * (l/count),10) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);

;/*
    AnythingSlider v1.7.8
    Original by Chris Coyier: http://css-tricks.com
    Get the latest version: https://github.com/ProLoser/AnythingSlider

    To use the navigationFormatter function, you must have a function that
    accepts two paramaters, and returns a string of HTML text.

    index = integer index (1 based);
    panel = jQuery wrapped LI item this tab references
    @return = Must return a string of HTML/Text

    navigationFormatter: function(index, panel){
        return "Panel #" + index; // This would have each tab with the text 'Panel #X' where X = index
    }
*/

;(function($) {

    $.anythingSlider = function(el, options) {

        var base = this, o;

        // Wraps the ul in the necessary divs and then gives Access to jQuery element
        base.el = el;
        base.$el = $(el).addClass('anythingBase').wrap('<div class="anythingSlider"><div class="anythingWindow" /></div>');

        // Add a reverse reference to the DOM object
        base.$el.data("AnythingSlider", base);

        base.init = function(){

            // Added "o" to be used in the code instead of "base.options" which doesn't get modifed by the compiler - reduces size by ~1k
            base.options = o = $.extend({}, $.anythingSlider.defaults, options);

            base.initialized = false;
            if ($.isFunction(o.onBeforeInitialize)) { base.$el.bind('before_initialize', o.onBeforeInitialize); }
            base.$el.trigger('before_initialize', base);

            // Cache existing DOM elements for later
            // base.$el = original ul
            // for wrap - get parent() then closest in case the ul has "anythingSlider" class
            base.$wrapper = base.$el.parent().closest('div.anythingSlider').addClass('anythingSlider-' + o.theme);
            base.$window = base.$el.closest('div.anythingWindow');
            base.win = window;
            base.$win = $(base.win);

            base.$controls = $('<div class="anythingControls"></div>').appendTo( (o.appendControlsTo !== null && $(o.appendControlsTo).length) ? $(o.appendControlsTo) : base.$wrapper);
            base.$startStop = $('<a href="#" class="start-stop"></a>');
            if (o.buildStartStop) {
                base.$startStop.appendTo( (o.appendStartStopTo !== null && $(o.appendStartStopTo).length) ? $(o.appendStartStopTo) : base.$controls );
            }
            base.$nav = $('<ul class="thumbNav" />').appendTo( (o.appendNavigationTo !== null && $(o.appendNavigationTo).length) ? $(o.appendNavigationTo) : base.$controls );

            // Set up a few defaults & get details
            base.flag    = false; // event flag to prevent multiple calls (used in control click/focusin)
            base.playing = o.autoPlay; // slideshow state; removed "startStopped" option
            base.slideshow = false; // slideshow flag needed to correctly trigger slideshow events
            base.hovered = false; // actively hovering over the slider
            base.panelSize = [];  // will contain dimensions and left position of each panel
            base.currentPage = o.startPanel = parseInt(o.startPanel,10) || 1; // make sure this isn't a string
            o.changeBy = parseInt(o.changeBy,10) || 1;
            base.adj = (o.infiniteSlides) ? 0 : 1; // adjust page limits for infinite or limited modes
            base.width = base.$el.width();
            base.height = base.$el.height();
            base.outerPad = [ base.$wrapper.innerWidth() - base.$wrapper.width(), base.$wrapper.innerHeight() - base.$wrapper.height() ];
            if (o.playRtl) { base.$wrapper.addClass('rtl'); }

            // Expand slider to fit parent
            if (o.expand) {
                base.$outer = base.$wrapper.parent();
                base.$window.css({ width: '100%', height: '100%' }); // needed for Opera
                base.checkResize();
            }

            // Build start/stop button
            if (o.buildStartStop) { base.buildAutoPlay(); }

            // Build forwards/backwards buttons
            if (o.buildArrows) { base.buildNextBackButtons(); }

            // can't lock autoplay it if it's not enabled
            if (!o.autoPlay) { o.autoPlayLocked = false; }

            base.updateSlider();

            base.$lastPage = base.$currentPage;

            // Get index (run time) of this slider on the page
            base.runTimes = $('div.anythingSlider').index(base.$wrapper) + 1;
            base.regex = new RegExp('panel' + base.runTimes + '-(\\d+)', 'i'); // hash tag regex
            if (base.runTimes === 1) { base.makeActive(); } // make the first slider on the page active

            // Make sure easing function exists.
            if (!$.isFunction($.easing[o.easing])) { o.easing = "swing"; }

            // If pauseOnHover then add hover effects
            if (o.pauseOnHover) {
                base.$wrapper.hover(function() {
                    if (base.playing) {
                        base.$el.trigger('slideshow_paused', base);
                        base.clearTimer(true);
                    }
                }, function() {
                    if (base.playing) {
                        base.$el.trigger('slideshow_unpaused', base);
                        base.startStop(base.playing, true);
                    }
                });
            }

            // If a hash can not be used to trigger the plugin, then go to start panel
            base.setCurrentPage(base.gotoHash() || o.startPage, false);

            // Hide/Show navigation & play/stop controls
            base.slideControls(false);
            base.$wrapper.bind('mouseenter mouseleave', function(e){
                base.hovered = (e.type === "mouseenter") ? true : false;
                base.slideControls( base.hovered, false );
            });

            // Add keyboard navigation
            $(document).keyup(function(e){
                // Stop arrow keys from working when focused on form items
                if (o.enableKeyboard && base.$wrapper.is('.activeSlider') && !e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                    switch (e.which) {
                        case 39: // right arrow
                            base.goForward();
                            break;
                        case 37: //left arrow
                            base.goBack();
                            break;
                    }
                }
            });

            // Fix tabbing through the page, but don't change the view if the link is in view (showMultiple = true)
            base.$items.delegate('a', 'focus.AnythingSlider', function(e){
                var panel = $(this).closest('.panel'),
                 indx = base.$items.index(panel) + base.adj;
                base.$items.find('.focusedLink').removeClass('focusedLink');
                $(this).addClass('focusedLink');
                base.$window.scrollLeft(0);
                if (!panel.is('.activePage') && base.currentPage + o.showMultiple - 1 > indx) {
                    base.gotoPage(indx);
                    e.preventDefault();
                }
            });

            // Binds events
            var triggers = "slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed".split(" ");
            $.each("onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete".split(" "), function(i,f){
                if ($.isFunction(o[f])){
                    base.$el.bind(triggers[i], o[f]);
                }
            });
            if ($.isFunction(o.onSlideComplete)){
                // Added setTimeout (zero time) to ensure animation is complete... see this bug report: http://bugs.jquery.com/ticket/7157
                base.$el.bind('slide_complete', function(){
                    setTimeout(function(){ o.onSlideComplete(base); }, 0);
                });
            }
            base.initialized = true;
            base.$el.trigger('initialized', base);

            // trigger the slideshow
            base.startStop(base.playing);

        };

        // called during initialization & to update the slider if a panel is added or deleted
        base.updateSlider = function(){
            // needed for updating the slider
            base.$el.children('.cloned').remove();
            base.$nav.empty();
            // set currentPage to 1 in case it was zero - occurs when adding slides after removing them all
            base.currentPage = base.currentPage || 1;

            base.$items = base.$el.children();
            base.pages = base.$items.length;
            o.showMultiple = parseInt(o.showMultiple,10) || 1; // only integers allowed

            if (o.showMultiple > 1) {
                if (o.showMultiple > base.pages) { o.showMultiple = base.pages; }
                base.adjustMultiple = (o.infiniteSlides && base.pages > 1) ? 0 : o.showMultiple - 1;
                base.pages = base.$items.length - base.adjustMultiple;
            }

            // Hide navigation & player if there is only one page
            base.$controls
                .add(base.$nav)
                .add(base.$startStop)
                .add(base.$forward)
                .add(base.$back)[(base.pages <= 1) ? 'hide' : 'show']();
            if (base.pages > 1) {
                // Build/update navigation tabs
                base.buildNavigation();
            }

            // Top and tail the list with 'visible' number of items, top has the last section, and tail has the first
            // This supports the "infinite" scrolling, also ensures any cloned elements don't duplicate an ID
            // Moved removeAttr before addClass otherwise IE7 ignores the addClass: http://bugs.jquery.com/ticket/9871
            if (o.infiniteSlides && base.pages > 1) {
                base.$el.prepend( base.$items.filter(':last').clone().removeAttr('id').addClass('cloned') );
                // Add support for multiple sliders shown at the same time
                if (o.showMultiple > 1) {
                    base.$el.append( base.$items.filter(':lt(' + o.showMultiple + ')').clone().removeAttr('id').addClass('cloned').addClass('multiple') );
                } else {
                    base.$el.append( base.$items.filter(':first').clone().removeAttr('id').addClass('cloned') );
                }
                base.$el.find('.cloned').each(function(){
                    // disable all focusable elements in cloned panels to prevent shifting the panels by tabbing
                    $(this).find('a,input,textarea,select,button,area').attr('disabled', 'disabled');
                    $(this).find('[id]').removeAttr('id');
                });
            }

            // We just added two items, time to re-cache the list, then get the dimensions of each panel
            base.$items = base.$el.children().addClass('panel');
            base.setDimensions();

            // Set the dimensions of each panel
            if (o.resizeContents) {
                base.$items.css('width', base.width);
                base.$wrapper.css('width', base.getDim(base.currentPage)[0]);
                base.$wrapper.add(base.$items).css('height', base.height);
            } else {
                base.$win.load(function(){ base.setDimensions(); }); // set dimensions after all images load
            }

            if (base.currentPage > base.pages) {
                base.currentPage = base.pages;
            }
            base.setCurrentPage(base.currentPage, false);
            base.$nav.find('a').eq(base.currentPage - 1).addClass('cur'); // update current selection

        };

        // Creates the numbered navigation links
        base.buildNavigation = function() {
            if (o.buildNavigation && (base.pages > 1)) {
                var t, $a;
                base.$items.filter(':not(.cloned)').each(function(i) {
                    var index = i + 1;
                    t = ((index === 1) ? 'first' : '') + ((index === base.pages) ? 'last' : '');
                    $a = $('<a href="#"></a>').addClass('panel' + index).wrap('<li class="' + t + '" />');
                    base.$nav.append($a.parent()); // use $a.parent() so it will add <li> instead of only the <a> to the <ul>

                    // If a formatter function is present, use it
                    if ($.isFunction(o.navigationFormatter)) {
                        t = o.navigationFormatter(index, $(this));
                        $a.html('<span>' + t + '</span>');
                        // Add formatting to title attribute if text is hidden
                        if (parseInt($a.find('span').css('text-indent'),10) < 0) { $a.addClass(o.tooltipClass).attr('title', t); }
                    } else {
                        $a.html('<span>' + index + '</span>');
                    }

                    $a.bind(o.clickControls, function(e) {
                        if (!base.flag && o.enableNavigation) {
                            // prevent running functions twice (once for click, second time for focusin)
                            base.flag = true; setTimeout(function(){ base.flag = false; }, 100);
                            base.gotoPage(index);
                            if (o.hashTags) { base.setHash(index); }
                        }
                        e.preventDefault();
                    });
                });

                // Add navigation tab scrolling
                if (o.navigationSize !== false && parseInt(o.navigationSize,10) < base.pages) {
                    if (!base.$controls.find('.anythingNavWindow').length){
                        base.$nav
                            .before('<ul><li class="prev"><a href="#"><span>' + o.backText + '</span></a></li></ul>')
                            .after('<ul><li class="next"><a href="#"><span>' + o.forwardText + '</span></a></li></ul>')
                            .wrap('<div class="anythingNavWindow"></div>');
                    }
                    base.navWidths = base.$nav.find('li').map(function(){ return $(this).innerWidth(); }).get();
                    base.navLeft = 1;
                    // add 5 pixels to make sure the tabs don't wrap to the next line
                    base.$nav.width( base.navWidth( 1, base.pages + 1 ) + 5 );
                    base.$controls.find('.anythingNavWindow')
                        .width( base.navWidth( 1, o.navigationSize + 1 ) ).end()
                        .find('.prev,.next').bind(o.clickControls, function(e) {
                            if (!base.flag) {
                                base.flag = true; setTimeout(function(){ base.flag = false; }, 200);
                                base.navWindow( base.navLeft + o.navigationSize * ( $(this).is('.prev') ? -1 : 1 ) );
                            }
                            e.preventDefault();
                        });
                }

            }
        };

        base.navWidth = function(x,y){
            var s = Math.min(x,y),
                e = Math.max(x,y),
                w = 0;
            for (; s < e; s++) {
                w += base.navWidths[s-1] || 0;
            }
            return w;
        };

        base.navWindow = function(n){
            var p = base.pages - o.navigationSize + 1;
            n = (n <= 1) ? 1 : (n > 1 && n < p) ? n : p;
            if (n !== base.navLeft) {
                base.$controls.find('.anythingNavWindow').animate(
                    { scrollLeft: base.navWidth(1, n), width: base.navWidth(n, n + o.navigationSize) },
                    { queue: false, duration: o.animationTime });
                base.navLeft = n;
            }
        };

        // Creates the Forward/Backward buttons
        base.buildNextBackButtons = function() {
            base.$forward = $('<span class="arrow forward"><a href="#"><span>' + o.forwardText + '</span></a></span>');
            base.$back = $('<span class="arrow back"><a href="#"><span>' + o.backText + '</span></a></span>');

            // Bind to the forward and back buttons
            base.$back.bind(o.clickBackArrow, function(e) {
                // prevent running functions twice (once for click, second time for swipe)
                if (o.enableArrows && !base.flag) {
                    base.flag = true; setTimeout(function(){ base.flag = false; }, 100);
                    base.goBack();
                }
                e.preventDefault();
            });
            base.$forward.bind(o.clickForwardArrow, function(e) {
                // prevent running functions twice (once for click, second time for swipe)
                if (o.enableArrows && !base.flag) {
                    base.flag = true; setTimeout(function(){ base.flag = false; }, 100);
                    base.goForward();
                }
                e.preventDefault();
            });
            // using tab to get to arrow links will show they have focus (outline is disabled in css)
            base.$back.add(base.$forward).find('a').bind('focusin focusout',function(){
             $(this).toggleClass('hover');
            });

            // Append elements to page
            base.$back.appendTo( (o.appendBackTo !== null && $(o.appendBackTo).length) ? $(o.appendBackTo) : base.$wrapper );
            base.$forward.appendTo( (o.appendForwardTo !== null && $(o.appendForwardTo).length) ? $(o.appendForwardTo) : base.$wrapper );

            base.$arrowWidth = base.$forward.width(); // assuming the left & right arrows are the same width - used for toggle
        };

        // Creates the Start/Stop button
        base.buildAutoPlay = function(){
            base.$startStop
                .html('<span>' + (base.playing ? o.stopText : o.startText) + '</span>')
                .bind(o.clickSlideshow, function(e) {
                    if (o.enableStartStop) {
                        base.startStop(!base.playing);
                        base.makeActive();
                        if (base.playing && !o.autoPlayDelayed) {
                            base.goForward(true);
                        }
                    }
                    e.preventDefault();
                })
                // show button has focus while tabbing
                .bind('focusin focusout',function(){
                    $(this).toggleClass('hover');
                });
        };

        // Adjust slider dimensions on parent element resize
        base.checkResize = function(stopTimer){
            clearTimeout(base.resizeTimer);
            base.resizeTimer = setTimeout(function(){
                var w = base.$outer.width() - base.outerPad[0],
                    h = (base.$outer[0].tagName === "BODY" ? base.$win.height() : base.$outer.height()) - base.outerPad[1];
                // base.width = width of one panel, so multiply by # of panels; outerPad is padding added for arrows.
                if (base.width * o.showMultiple !== w || base.height !== h) {
                    base.setDimensions(); // adjust panel sizes
                    // make sure page is lined up (use 1 millisecond animation time, because "0||x" ignores zeros)
                    base.gotoPage(base.currentPage, base.playing, null, 1);
                }
                if (typeof(stopTimer) === 'undefined'){ base.checkResize(); }
            }, 500);
        };

        // Set panel dimensions to either resize content or adjust panel to content
        base.setDimensions = function(){
            var w, h, c, leftEdge = 0,
                // determine panel width
                pw = (o.showMultiple > 1) ? base.width || base.$window.width()/o.showMultiple : base.$window.width(),
                winw = base.$win.width();
            if (o.expand){
                w = base.$outer.width() - base.outerPad[0];
                base.height = h = base.$outer.height() - base.outerPad[1];
                base.$wrapper.add(base.$window).add(base.$items).css({ width: w, height: h });
                base.width = pw = (o.showMultiple > 1) ? w/o.showMultiple : w;
            }
            base.$items.each(function(i){
                c = $(this).children();
                if (o.resizeContents){
                    // resize panel
                    w = base.width;
                    $(this).css({ width: w, height: base.height });
                    if (c.length && c[0].tagName === "EMBED") { c.attr({ width: '100%', height: '100%' }); } // needed for IE7; also c.length > 1 in IE7
                    // resize panel contents, if solitary (wrapped content or solitary image)
                    if (c.length === 1){
                        c.css({ width: '100%', height: '100%' });
                    }
                } else {
                    // get panel width & height and save it
                    w = $(this).width(); // if not defined, it will return the width of the ul parent
                    if (c.length === 1 && w >= winw){
                        w = (c.width() >= winw) ? pw : c.width(); // get width of solitary child
                        c.css('max-width', w);   // set max width for all children
                    }
                    $(this).css('width', w); // set width of panel
                    h = $(this).outerHeight(); // get height after setting width
                    $(this).css('height', h);
                }
                base.panelSize[i] = [w,h,leftEdge];
                leftEdge += w;
            });
            // Set total width of slider, Note that this is limited to 32766 by Opera - option removed
            base.$el.css('width', leftEdge);
        };

        // get dimension of multiple panels, as needed
        base.getDim = function(page){
            if (base.pages < 1 || isNaN(page)) { return [ base.width, base.height ]; } // prevent errors when base.panelSize is empty
            page = (o.infiniteSlides && base.pages > 1) ? page : page - 1;
            var i,
                w = base.panelSize[page][0],
                h = base.panelSize[page][1];
            if (o.showMultiple > 1) {
                for (i=1; i < o.showMultiple; i++) {
                    w += base.panelSize[(page + i)%o.showMultiple][0];
                    h = Math.max(h, base.panelSize[page + i][1]);
                }
            }
            return [w,h];
        };

        base.goForward = function(autoplay) {
            base.gotoPage(base.currentPage + o.changeBy * (o.playRtl ? -1 : 1), autoplay);
        };

        base.goBack = function(autoplay) {
            base.gotoPage(base.currentPage + o.changeBy * (o.playRtl ? 1 : -1), autoplay);
        };

        base.gotoPage = function(page, autoplay, callback, time) {
            if (autoplay !== true) {
                autoplay = false;
                base.startStop(false);
                base.makeActive();
            }
            if (o.changeBy !== 1){
                if (page < 0) { page += base.pages; }
                if (page > base.pages) { page -= base.pages; }
            }
            if (base.pages <= 1) { return; } // prevents animation
            base.$lastPage = base.$currentPage;
            if (typeof(page) !== "number") {
                page = o.startPanel;
                base.setCurrentPage(page);
            }

            // pause YouTube videos before scrolling or prevent change if playing
            if (autoplay && o.isVideoPlaying(base)) { return; }

            if (page > base.pages + 1 - base.adj) { page = (!o.infiniteSlides && !o.stopAtEnd) ? 1 : base.pages; }
            if (page < base.adj ) { page = (!o.infiniteSlides && !o.stopAtEnd) ? base.pages : 1; }
            base.currentPage = ( page > base.pages ) ? base.pages : ( page < 1 ) ? 1 : base.currentPage;
            base.$currentPage = base.$items.eq(base.currentPage - base.adj);
            base.exactPage = page;
            base.$targetPage = base.$items.eq( (page === 0) ? base.pages - base.adj : (page > base.pages) ? 1 - base.adj : page - base.adj );
            time = time || o.animationTime;
            // don't trigger events when time = 1 - to prevent FX from firing multiple times on page resize
            if (time > 1) { base.$el.trigger('slide_init', base); }

            base.slideControls(true, false);

            // When autoplay isn't passed, we stop the timer
            if (autoplay !== true) { autoplay = false; }
            // Stop the slider when we reach the last page, if the option stopAtEnd is set to true
            if (!autoplay || (o.stopAtEnd && page === base.pages)) { base.startStop(false); }

            if (time > 1) { base.$el.trigger('slide_begin', base); }

            // delay starting slide animation
            setTimeout(function(){
                // resize slider if content size varies
                if (!o.resizeContents) {
                    // animating the wrapper resize before the window prevents flickering in Firefox
                    var d = base.getDim(page);
                    base.$wrapper.filter(':not(:animated)').animate(
                        // prevent animating a dimension to zero
                        { width: d[0] || base.width, height: d[1] || base.height },
                        { queue: false, duration: time, easing: o.easing }
                    );
                }
                // Animate Slider
                base.$el.filter(':not(:animated)').animate(
                    { left : -base.panelSize[(o.infiniteSlides && base.pages > 1) ? page : page - 1][2] },
                    { queue: false, duration: time, easing: o.easing, complete: function(){ base.endAnimation(page, callback, time); } }
                );
            }, parseInt(o.delayBeforeAnimate, 10) || 0);
        };

        base.endAnimation = function(page, callback, time){
            if (page === 0) {
                base.$el.css('left', -base.panelSize[base.pages][2]);
                page = base.pages;
            } else if (page > base.pages) {
                // reset back to start position
                base.$el.css('left', -base.panelSize[1][2]);
                page = 1;
            }
            base.exactPage = page;
            base.setCurrentPage(page, false);
            // Add active panel class
            base.$items.removeClass('activePage').eq(page - base.adj).addClass('activePage');

            if (!base.hovered) { base.slideControls(false); }

            if (time > 1) { base.$el.trigger('slide_complete', base); }
            // callback from external slide control: $('#slider').anythingSlider(4, function(slider){ })
            if (typeof callback === 'function') { callback(base); }

            // Continue slideshow after a delay
            if (o.autoPlayLocked && !base.playing) {
                setTimeout(function(){
                    base.startStop(true);
                // subtract out slide delay as the slideshow waits that additional time.
                }, o.resumeDelay - (o.autoPlayDelayed ? o.delay : 0));
            }
        };

        base.setCurrentPage = function(page, move) {
            page = parseInt(page, 10);
            if (base.pages < 1 || page === 0 || isNaN(page)) { return; }
            if (page > base.pages + 1 - base.adj) { page = base.pages - base.adj; }
            if (page < base.adj ) { page = 1; }

            // Set visual
            if (o.buildNavigation){
                base.$nav
                    .find('.cur').removeClass('cur').end()
                    .find('a').eq(page - 1).addClass('cur');
            }

            // hide/show arrows based on infinite scroll mode
            if (!o.infiniteSlides && o.stopAtEnd){
                base.$wrapper
                    .find('span.forward')[ page === base.pages ? 'addClass' : 'removeClass']('disabled').end()
                    .find('span.back')[ page === 1 ? 'addClass' : 'removeClass']('disabled');
                if (page === base.pages && base.playing) { base.startStop(); }
            }

            // Only change left if move does not equal false
            if (!move) {
                var d = base.getDim(page);
                base.$wrapper
                    .css({ width: d[0], height: d[1] })
                    .add(base.$window).scrollLeft(0); // reset in case tabbing changed this scrollLeft - probably overly redundant
                base.$el.css('left', -base.panelSize[(o.infiniteSlides && base.pages > 1) ? page : page - 1][2] );
            }
            // Update local variable
            base.currentPage = page;
            base.$currentPage = base.$items.removeClass('activePage').eq(page - base.adj).addClass('activePage');

        };

        base.makeActive = function(){
            // Set current slider as active so keyboard navigation works properly
            if (!base.$wrapper.is('.activeSlider')){
                $('.activeSlider').removeClass('activeSlider');
                base.$wrapper.addClass('activeSlider');
            }
        };

        // This method tries to find a hash that matches an ID and panel-X
        // If either found, it tries to find a matching item
        // If that is found as well, then it returns the page number
        base.gotoHash = function(){
            var h = base.win.location.hash,
                i = h.indexOf('&'),
                n = h.match(base.regex);
            if (n === null && !/^#&/.test(h)) {
                // #quote2&panel1-3&panel3-3
                h = h.substring(0, (i >= 0 ? i : h.length));
                // ensure the element is in the same slider
                n = ($(h).closest('.anythingBase')[0] === base.el) ? $(h).closest('.panel').index() : null;
            } else if (n !== null) {
                // #&panel1-3&panel3-3
                n = (o.hashTags) ? parseInt(n[1],10) : null;
            }
            return n;
        };

        base.setHash = function(n){
            var s = 'panel' + base.runTimes + '-',
                h = base.win.location.hash;
            if ( typeof h !== 'undefined' ) {
                base.win.location.hash = (h.indexOf(s) > 0) ? h.replace(base.regex, s + n) : h + "&" + s + n;
            }
        };

        // Slide controls (nav and play/stop button up or down)
        base.slideControls = function(toggle){
            var dir = (toggle) ? 'slideDown' : 'slideUp',
                t1 = (toggle) ? 0 : o.animationTime,
                t2 = (toggle) ? o.animationTime: 0,
                op = (toggle) ? 1 : 0,
                sign = (toggle) ? 0 : 1; // 0 = visible, 1 = hidden
            if (o.toggleControls) {
                base.$controls.stop(true,true).delay(t1)[dir](o.animationTime/2).delay(t2);
            }
            if (o.buildArrows && o.toggleArrows) {
                if (!base.hovered && base.playing) { sign = 1; op = 0; } // don't animate arrows during slideshow
                base.$forward.stop(true,true).delay(t1).animate({ right: sign * base.$arrowWidth, opacity: op }, o.animationTime/2);
                base.$back.stop(true,true).delay(t1).animate({ left: sign * base.$arrowWidth, opacity: op }, o.animationTime/2);
            }
        };

        base.clearTimer = function(paused){
            // Clear the timer only if it is set
            if (base.timer) {
                base.win.clearInterval(base.timer);
                if (!paused && base.slideshow) {
                    base.$el.trigger('slideshow_stop', base);
                    base.slideshow = false;
                }
            }
        };

        // Pass startStop(false) to stop and startStop(true) to play
        base.startStop = function(playing, paused) {
            if (playing !== true) { playing = false; }  // Default if not supplied is false
            base.playing = playing;

            if (playing && !paused) {
                base.$el.trigger('slideshow_start', base);
                base.slideshow = true;
            }

            // Toggle playing and text
            if (o.buildStartStop) {
                base.$startStop.toggleClass('playing', playing).find('span').html( playing ? o.stopText : o.startText );
                // add button text to title attribute if it is hidden by text-indent
                if (parseInt(base.$startStop.find('span').css('text-indent'),10) < 0) {
                    base.$startStop.addClass(o.tooltipClass).attr( 'title', playing ? o.stopText : o.startText );
                }
            }

            // Pause slideshow while video is playing
            if (playing){
                base.clearTimer(true); // Just in case this was triggered twice in a row
                base.timer = base.win.setInterval(function() {
                    // prevent autoplay if video is playing
                    if ( !o.isVideoPlaying(base) ) {
                        base.goForward(true);
                    // stop slideshow if resume if false
                    } else if (!o.resumeOnVideoEnd) {
                        base.startStop();
                    }
                }, o.delay);
            } else {
                base.clearTimer();
            }
        };

        // Trigger the initialization
        base.init();
    };

    $.anythingSlider.defaults = {
        // Appearance
        theme               : "default", // Theme name, add the css stylesheet manually
        expand              : false,     // If true, the entire slider will expand to fit the parent element
        resizeContents      : true,      // If true, solitary images/objects in the panel will expand to fit the viewport
        showMultiple        : false,     // Set this value to a number and it will show that many slides at once
        easing              : "swing",   // Anything other than "linear" or "swing" requires the easing plugin or jQuery UI

        buildArrows         : true,      // If true, builds the forwards and backwards buttons
        buildNavigation     : true,      // If true, builds a list of anchor links to link to each panel
        buildStartStop      : true,      // ** If true, builds the start/stop button

        appendForwardTo     : null,      // Append forward arrow to a HTML element (jQuery Object, selector or HTMLNode), if not null
        appendBackTo        : null,      // Append back arrow to a HTML element (jQuery Object, selector or HTMLNode), if not null
        appendControlsTo    : null,      // Append controls (navigation + start-stop) to a HTML element (jQuery Object, selector or HTMLNode), if not null
        appendNavigationTo  : null,      // Append navigation buttons to a HTML element (jQuery Object, selector or HTMLNode), if not null
        appendStartStopTo   : null,      // Append start-stop button to a HTML element (jQuery Object, selector or HTMLNode), if not null

        toggleArrows        : false,     // If true, side navigation arrows will slide out on hovering & hide @ other times
        toggleControls      : false,     // if true, slide in controls (navigation + play/stop button) on hover and slide change, hide @ other times

        startText           : "Start",   // Start button text
        stopText            : "Stop",    // Stop button text
        forwardText         : "&raquo;", // Link text used to move the slider forward (hidden by CSS, replaced with arrow image)
        backText            : "&laquo;", // Link text used to move the slider back (hidden by CSS, replace with arrow image)
        tooltipClass        : "tooltip", // Class added to navigation & start/stop button (text copied to title if it is hidden by a negative text indent)

        // Function
        enableArrows        : true,      // if false, arrows will be visible, but not clickable.
        enableNavigation    : true,      // if false, navigation links will still be visible, but not clickable.
        enableStartStop     : true,      // if false, the play/stop button will still be visible, but not clickable. Previously "enablePlay"
        enableKeyboard      : true,      // if false, keyboard arrow keys will not work for this slider.

        // Navigation
        startPanel          : 1,         // This sets the initial panel
        changeBy            : 1,         // Amount to go forward or back when changing panels.
        hashTags            : true,      // Should links change the hashtag in the URL?
        infiniteSlides      : true,      // if false, the slider will not wrap & not clone any panels
        navigationFormatter : null,      // Details at the top of the file on this use (advanced use)
        navigationSize      : false,     // Set this to the maximum number of visible navigation tabs; false to disable

        // Slideshow options
        autoPlay            : false,     // If true, the slideshow will start running; replaces "startStopped" option
        autoPlayLocked      : false,     // If true, user changing slides will not stop the slideshow
        autoPlayDelayed     : false,     // If true, starting a slideshow will delay advancing slides; if false, the slider will immediately advance to the next slide when slideshow starts
        pauseOnHover        : true,      // If true & the slideshow is active, the slideshow will pause on hover
        stopAtEnd           : false,     // If true & the slideshow is active, the slideshow will stop on the last page. This also stops the rewind effect when infiniteSlides is false.
        playRtl             : false,     // If true, the slideshow will move right-to-left

        // Times
        delay               : 3000,      // How long between slideshow transitions in AutoPlay mode (in milliseconds)
        resumeDelay         : 15000,     // Resume slideshow after user interaction, only if autoplayLocked is true (in milliseconds).
        animationTime       : 600,       // How long the slideshow transition takes (in milliseconds)
        delayBeforeAnimate  : 0,         // How long to pause slide animation before going to the desired slide (used if you want your "out" FX to show).

        // Callbacks - removed from options to reduce size - they still work

        // Interactivity
        clickForwardArrow   : "click",         // Event used to activate forward arrow functionality (e.g. add jQuery mobile's "swiperight")
        clickBackArrow      : "click",         // Event used to activate back arrow functionality (e.g. add jQuery mobile's "swipeleft")
        clickControls       : "click focusin", // Events used to activate navigation control functionality
        clickSlideshow      : "click",         // Event used to activate slideshow play/stop button

        // Video
        resumeOnVideoEnd    : true,      // If true & the slideshow is active & a supported video is playing, it will pause the autoplay until the video is complete
        addWmodeToObject    : "opaque",  // If your slider has an embedded object, the script will automatically add a wmode parameter with this setting
        isVideoPlaying      : function(base){ return false; } // return true if video is playing or false if not - used by video extension

    };

    $.fn.anythingSlider = function(options, callback) {

        return this.each(function(){
            var page, anySlide = $(this).data('AnythingSlider');

            // initialize the slider but prevent multiple initializations
            if ((typeof(options)).match('object|undefined')){
                if (!anySlide) {
                    (new $.anythingSlider(this, options));
                } else {
                    anySlide.updateSlider();
                }
            // If options is a number, process as an external link to page #: $(element).anythingSlider(#)
            } else if (/\d/.test(options) && !isNaN(options) && anySlide) {
                page = (typeof(options) === "number") ? options : parseInt($.trim(options),10); // accepts "  2  "
                // ignore out of bound pages
                if ( page >= 1 && page <= anySlide.pages ) {
                    anySlide.gotoPage(page, false, callback); // page #, autoplay, one time callback
                }
            }
        });
    };

})(jQuery);

;(function( window, $, undefined ) {
	
	/*
	* smartresize: debounced resize event for jQuery
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery.smartresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/

	var $event = $.event, resizeTimeout;

	$event.special.smartresize 	= {
		setup: function() {
			$(this).bind( "resize", $event.special.smartresize.handler );
		},
		teardown: function() {
			$(this).unbind( "resize", $event.special.smartresize.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args 	= arguments;

			// set correct event type
			event.type = "smartresize";

			if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
			resizeTimeout = setTimeout(function() {
				jQuery.event.handle.apply( context, args );
			}, execAsap === "execAsap"? 0 : 100 );
		}
	};

	$.fn.smartresize 			= function( fn ) {
		return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
	};
	
	$.Slideshow 				= function( options, element ) {
	
		this.$el			= $( element );
		
		/***** images ****/
		
		// list of image items
		this.$list			= this.$el.find('ul.ei-slider-large');
		// image items
		this.$imgItems		= this.$list.children('li');
		// total number of items
		this.itemsCount		= this.$imgItems.length;
		// images
		this.$images		= this.$imgItems.find('img:first');
		
		/***** thumbs ****/
		
		// thumbs wrapper
		this.$sliderthumbs	= this.$el.find('ul.ei-slider-thumbs').hide();
		// slider elements
		this.$sliderElems	= this.$sliderthumbs.children('li');
		// sliding div
		this.$sliderElem	= this.$sliderthumbs.children('li.ei-slider-element');
		// thumbs
		this.$thumbs		= this.$sliderElems.not('.ei-slider-element');
		
		// initialize slideshow
		this._init( options );
		
	};
	
	$.Slideshow.defaults 		= {
		// animation types:
		// "sides" : new slides will slide in from left / right
		// "center": new slides will appear in the center
		animation			: 'sides', // sides || center
		// if true the slider will automatically slide, and it will only stop if the user clicks on a thumb
		autoplay			: false,
		// interval for the slideshow
		slideshow_interval	: 3000,
		// speed for the sliding animation
		speed			: 800,
		// easing for the sliding animation
		easing			: '',
		// percentage of speed for the titles animation. Speed will be speed * titlesFactor
		titlesFactor		: 0.60,
		// titles animation speed
		titlespeed			: 800,
		// titles animation easing
		titleeasing			: '',
		// maximum width for the thumbs in pixels
		thumbMaxWidth		: 150,
		slidesLoaded        : function() {}
    };
	
	$.Slideshow.prototype 		= {
		_init 				: function( options ) {
			
			this.options 		= $.extend( true, {}, $.Slideshow.defaults, options );
			
			// set the opacity of the title elements and the image items
			this.$imgItems.css( 'opacity', 0 );
			this.$imgItems.find('div.ei-title > *').css( 'opacity', 0 );
			
			// index of current visible slider
			this.current		= 0;
			
			var _self			= this;
			
			// preload images
			// add loading status
			if ( $('.ei-slider-loading').length = 0 )
			     this.$loading		= $('<div class="ei-slider-loading">Loading</div>').prependTo( _self.$el );
		    else
			     this.$loading		= $('.ei-slider-loading');
			
			$.when( this._preloadImages() ).done( function() {
				
				// hide loading status
				_self.$loading.hide();
				
				// calculate size and position for each image
				_self._setImagesSize();
				
				// configure thumbs container
				_self._initThumbs();
				
				// show first
				_self.$imgItems.eq( _self.current ).css({
					'opacity' 	: 1,
					'z-index'	: 10
				}).show().find('div.ei-title > *').css( 'opacity', 1 );
				
				// if autoplay is true
				if( _self.options.autoplay ) {
				
					_self._startSlideshow();
				
				}
				
				// initialize the events
				_self._initEvents();
			
			});
			
			_self.options.slidesLoaded();
			
		},
		_preloadImages		: function() {
			
			// preloads all the large images
			
			var _self	= this,
				loaded	= 0;
			
			return $.Deferred(
			
				function(dfd) {
			
					_self.$images.each( function( i ) {
						
						$('<img/>').load( function() {
						
							if( ++loaded === _self.itemsCount ) {
							
								dfd.resolve();
								
							}
						
						}).attr( 'src', $(this).attr('src') );
					
					});
					
				}
				
			).promise();
			
		},
		_setImagesSize		: function() {
			
			// save ei-slider's width
			this.elWidth	= this.$el.width();
			
			var _self	= this;
			
			this.$images.each( function( i ) {
				
				var $img	= $(this);
					imgDim	= _self._getImageDim( $img.attr('src') );
					
				$img.css({
					width		: imgDim.width,
					height		: imgDim.height,
					marginLeft	: imgDim.left,
					marginTop	: imgDim.top
				});
				
			});
		
		},
		_getImageDim		: function( src ) {
			
			var $img    = new Image();
							
			$img.src    = src;
					
			var c_w		= this.elWidth,
				c_h		= this.$el.height(),
				r_w		= c_h / c_w,
				
				i_w		= $img.width,
				i_h		= $img.height,
				r_i		= i_h / i_w,
				new_w, new_h, new_left, new_top;
					
			if( r_w > r_i ) {
				
				new_h	= c_h;
				new_w	= c_h / r_i;
			
			}
			else {
			
				new_h	= c_w * r_i;
				new_w	= c_w;
			
			}
					
			return {
				width	: new_w,
				height	: new_h,
				left	: ( c_w - new_w ) / 2,
				top		: ( c_h - new_h ) / 2
			};
		
		},
		_initThumbs			: function() {
		
			// set the max-width of the slider elements to the one set in the plugin's options
			// also, the width of each slider element will be 100% / total number of elements
			this.$sliderElems.css({
				'max-width' : this.options.thumbMaxWidth + 'px',
				'width'		: 100 / this.itemsCount + '%'
			});
			
			// set the max-width of the slider and show it
			this.$sliderthumbs.css( 'max-width', this.options.thumbMaxWidth * this.itemsCount + 'px' ).show();
			
		},
		_startSlideshow		: function() {
		
			var _self	= this;
			
			this.slideshow	= setTimeout( function() {
				
				var pos;
				
				( _self.current === _self.itemsCount - 1 ) ? pos = 0 : pos = _self.current + 1;
				
				_self._slideTo( pos );
				
				if( _self.options.autoplay ) {
				
					_self._startSlideshow();
				
				}
			
			}, this.options.slideshow_interval);
		
		},
		// shows the clicked thumb's slide
		_slideTo			: function( pos ) {
			
			// return if clicking the same element or if currently animating
			if( pos === this.current || this.isAnimating )
				return false;
			
			this.isAnimating	= true;
			
			var $currentSlide	= this.$imgItems.eq( this.current ),
				$nextSlide		= this.$imgItems.eq( pos ),
				_self			= this,
				
				preCSS			= {zIndex	: 10},
				animCSS			= {opacity	: 1};
			
			// new slide will slide in from left or right side
			if( this.options.animation === 'sides' ) {
				
				preCSS.left		= ( pos > this.current ) ? -1 * this.elWidth : this.elWidth;
				animCSS.left	= 0;
			
			}	
			
			// titles animation
			$nextSlide.find('div.ei-title > h2')
					  .css( 'margin-right', 50 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginRight : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
					  .end()
					  .find('div.ei-title > h3')
					  .css( 'margin-right', -50 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginRight : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
			
			$.when(
				
				// fade out current titles
				$currentSlide.css( 'z-index' , 1 ).find('div.ei-title > *').stop().fadeOut( this.options.speed / 2, function() {
					// reset style
					$(this).show().css( 'opacity', 0 );	
				}),
				
				// animate next slide in
				$nextSlide.css( preCSS ).stop().animate( animCSS, this.options.speed, this.options.easing ),
				
				// "sliding div" moves to new position
				this.$sliderElem.stop().animate({
					left	: this.$thumbs.eq( pos ).position().left
				}, this.options.speed )
				
			).done( function() {
				
				// reset values
				$currentSlide.css( 'opacity' , 0 ).find('div.ei-title > *').css( 'opacity', 0 );
					_self.current	= pos;
					_self.isAnimating		= false;
				
				});
				
		},
		_initEvents			: function() {
			
			var _self	= this;
			
			// window resize
			$(window).bind( 'smartresize.eislideshow', function( event ) {
				
				// resize the images
				_self._setImagesSize();
			
				// reset position of thumbs sliding div
				_self.$sliderElem.css( 'left', _self.$thumbs.eq( _self.current ).position().left );
			
			});
			
			// click the thumbs
			this.$thumbs.bind( 'click.eislideshow', function( event ) {
				
				if( _self.options.autoplay ) {
				
					clearTimeout( _self.slideshow );
					_self.options.autoplay	= false;
				
				}
				
				var $thumb	= $(this),
					idx		= $thumb.index() - 1; // exclude sliding div
					
				_self._slideTo( idx );
				
				return false;
			
			});
			
		}
	};
	
	var logError 				= function( message ) {
		
		if ( this.console ) {
			
			console.error( message );
			
		}
		
	};
	
	$.fn.eislideshow			= function( options ) {
	
		if ( typeof options === 'string' ) {
		
			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {
			
				var instance = $.data( this, 'eislideshow' );
				
				if ( !instance ) {
					logError( "cannot call methods on eislideshow prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for eislideshow instance" );
					return;
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
			
				var instance = $.data( this, 'eislideshow' );
				if ( !instance ) {
					$.data( this, 'eislideshow', new $.Slideshow( options, this ) );
				}
			
			});
		
		}
		
		return this;
		
	};
	
})( window, jQuery );
;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;  (function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,r="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,s=r?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,q="fade"===c.animation,p=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!q)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();p&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(b===39||b===37)){b=b===39?a.getTarget("next"):b===37?a.getTarget("prev"):false;a.flexAnimate(b,c.pauseOnAction)}});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=g<0?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&
 a.pause()},function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());r&&c.touch&&f.touch();(!q||q&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),
 g=b.index();!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===
 c.controlNav?'<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",s,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});r&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(s,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});r&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(s,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 r&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(s,function(b){b.preventDefault();if(d(this).hasClass(e+"pause")){a.manualPause=true;a.manualPlay=false;a.pause()}else{a.manualPause=false;a.manualPlay=true;a.play()}});r&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+
 "pause").addClass(e+"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!q&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/o+2:1),a.setProps(f+j,"setTouch"))}function g(){if(a.animatingTo===
 a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>o/2)?a.flexAnimate(l,c.pauseOnAction):a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchmove",b,!1);i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,o,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),o=l?a.h:a.w,k=Number(new Date),f=h&&
 m&&a.animatingTo===a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*o:(a.currentSlide+a.cloneOffset)*o,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),q?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||q){var c=q?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){p&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(p&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(q)a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,
 c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup);else{var o=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*o:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*o:m?(a.count-1-b+a.cloneOffset)*o:(b+a.cloneOffset)*o;a.setProps(b,
 "",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(o)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(o)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!q&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===
 a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};
 a.canAdvance=function(b,g){var d=p?a.pagingCount-1:a.last;return g?!0:p&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:p&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&!p?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-
 1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?
 "translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(q)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",
 position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*
 (a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+
 "active-slide")};a.doMath=function(){var b=a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===
 a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>
 a.last&&(a.currentSlide-=1,a.animatingTo-=1),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,
 a.slides).remove():l&&m?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,
 directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?
 i.selector:".slides > li");1===c.length?(c.fadeIn(400),i.start&&i.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);
;/*
 
	Awkward Showcase - jQuery plugin 
	http://www.jquery.com
	http://www.awkwardgroup.com/sandbox/awkward-showcase-a-jquery-plugin
	http://demo.awkwardgroup.com/showcase
	Version: 1.1.1

	Copyright (C) 2011 Awkward Group (http://www.awkwardgroup.com)
	Licensed under Attribution-ShareAlike 3.0 Unported
	http://creativecommons.org/licenses/by-sa/3.0/

	Markup example for jQuery("#showcase").awShowcase();
 
	<div id="showcase" class="showcase">
		<!-- Each child div in #showcase represents a slide -->
		<div class="showcase-slide">
			<!-- Put the slide content in a div with the class .showcase-content -->
			<div class="showcase-content">
				<!-- If the slide contains multiple elements you should wrap them in a div with the class .showcase-content-wrapper. 
				We usually wrap even if there is only one element, because it looks better. :-) -->
				<div class="showcase-content-wrapper">
					<img src="images/01.jpg" alt="01" />
				</div>
			</div>
			<!-- Put the caption content in a div with the class .showcase-caption -->
			<div class="showcase-caption">
				The Caption
			</div>
			<!-- Put the tooltips in a div with the class .showcase-tooltips. -->
			<div class="showcase-tooltips">
				<!-- Each anchor in .showcase-tooltips represents a tooltip. The coords attribute represents the position of the tooltip. -->
				<a href="http://www.awkward.se" coords="634,130">
					<!-- The content of the anchor-tag is displayed in the tooltip. -->
					This is a tooltip that displays the anchor html in a nice way.
				</a>
				<a href="http://www.awkward.se" coords="356, 172">
					<!-- You can add multiple elements to the anchor-tag which are display in the tooltip. -->
					<img src="images/glasses.png" />
					<span style="display: block; font-weight: bold; padding: 3px 0 3px 0; text-align: center;">
						White Glasses: 500$
					</span>
				</a>
			</div>
		</div>
		<div class="showcase-slide">
			<div class="showcase-content">
				<div class="showcase-content-wrapper">
					Content...
				</div>
			</div>
		</div>
	</div>

*/

(function(jQuery) {

	jQuery.fn.awShowcase = function(options) {
	
		// Default configuration properties
		var defaults =
		{
			content_width           : 938,
			content_height          : 360,
			fit_to_parent           : false,
			auto                    : false,
			interval                : 3000,
			continuous              : false,
			loading                 : true,
			tooltip_width           : 200,
			tooltip_icon_width      : 32,
			tooltip_icon_height     : 32,
			tooltip_offsetx         : 18,
			tooltip_offsety         : 0,
			arrows                  : true,
			buttons                 : true,
			btn_numbers             : false,
			keybord_keys            : false,
			mousetrace              : false, /* Trace x and y coordinates for the mouse */
			pauseonover             : true,
			stoponclick             : true,
			transition              : 'hslide', /* hslide / vslide / fade */
			transition_delay        : 300,
			transition_speed        : 500,
			show_caption            : 'onload', /* onload / onhover / show */
			thumbnails              : false,
			thumbnails_position     : 'outside-last', /* outside-last / outside-first / inside-last / inside-first */
			thumbnails_direction    : 'vertical', /* vertical / horizontal */
			thumbnails_slidex       : 0, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
			dynamic_height          : false, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
			speed_change            : false, /* This prevents user from swithing more then one slide at once */
			viewline                : false, /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. */
			fullscreen_width_x      : 15,
			custom_function         : null
		};

		// *****************
		// SET UP THE PLUGIN
		// *****************
		
		// Declare and set up some important variables
		options = jQuery.extend(defaults, options);
		var current_id = 0;
		var previous_id = 0;
		var break_loop = false;
		var pause_loop = false;
		var myInterval = null;
		var showcase = jQuery(this);
		var showcase_width = options.content_width;
		var animating = false;
		// Viewline specific variables
		var content_viewline_width = 10000;
		var animation_distance = 0;
		var old_animation_distance = 0;
		var remaining_width = 0;
		
		// Set up the content wrapper
		var content_container = jQuery(document.createElement('div'))
			.css('overflow', 'hidden')
			.css('position', 'relative')
			.addClass('showcase-content-container')
			.prependTo(showcase);
			
		// Set up the showcase for hundred percent width
		if (options.fit_to_parent)
		{
			showcase_width = jQuery(showcase).width() + options.fullscreen_width_x;
		}
		
		// Set up the showcase for Viewline Mayhem
		if (options.viewline)
		{
			options.thumbnails = false;
			options.dynamic_height = false;
			content_container.css('width', content_viewline_width);
			showcase.css('overflow', 'hidden');
			$('.showcase-arrow-previous').hide();
		}
		
		// Set up content and create the content and thumbnail array
		var contentArray = [];
		var thumbnailArray = [];
		var content_count = 0;
		showcase.children('.showcase-slide').each(function()
		{
			// Get content
			var object = jQuery(this);
			content_count++;
	
			// If thumbnails are activated
			if (options.thumbnails)
			{
				// Get thumbnail and put in array
				var thumb = object.find('.showcase-thumbnail');
				thumbnailArray.push(thumb);
				thumb.remove();
			}
			
			// Set content width and height
			var object_width = object.find('.showcase-content').children().width();
			var object_height = object.find('.showcase-content').children().height();
			
			// Add content html in array and remove it from DOM
			contentArray.push(object.html());
			object.remove();
			
			// Get correct content
			var new_object = getContent(content_count-1);
			if (options.viewline || content_count === 1) { content_container.append(new_object); } 
			
			// Viewline setup
			if (options.viewline)
			{
				new_object.css('position', 'relative');
				new_object.css('float', 'left');
				new_object.css('width', object_width);
			}
			
			// Set content and content container load height
			if (options.dynamic_height)
			{
				new_object.css('height', object_height);
				if (content_count === 1) { content_container.css('height', object_height); }
			}
			else
			{
				new_object.css('height', options.content_height);
				if (content_count === 1) { content_container.css('height', options.content_height); }
			}
			
			if (options.viewline || content_count === 1)
			{
				displayAnchors(new_object);
				displayCaption(new_object);
				
				if (options.show_caption === 'show')
				{
					jQuery(new_object).find('.showcase-caption').show();
				}
			}
		});
		
		// Declare and set up the thumbnail wrapper
		var thumb_wrapper;
		var thumbnailStretch = 0;
		var thumbnailsPerPage = 0;
		if (options.thumbnails)
		{
			// Create wrapper
			thumb_container = jQuery('<div />');
			thumb_restriction = jQuery('<div />');
			thumb_wrapper = jQuery('<div />');
			
			// Add content to thumbnail wrapper
			for (i = thumbnailArray.length-1; i >= 0; --i)
			{
				var thumbnail = jQuery(thumbnailArray[i]).css({'overflow' : 'hidden'});
				thumbnail.attr('id', 'showcase-thumbnail-' + i);
				thumbnail.addClass((i === 0) ? 'active' : '');
				thumbnail.click(function(a, b)
				{
					// This function is used to extract the correct i value on click
					return function()
					{
						// Disable auto change on click
						if (myInterval) { pause_loop = true; clearInterval(myInterval); }
						changeContent(a, b);
					};
				}(i, ''));	
				thumb_wrapper.prepend(thumbnail);
			}
			
			// Style and position thumbnail container and content wrapper
			// + insert thumbnail container
			if (options.thumbnails_position === 'outside-first' || options.thumbnails_position === 'outside-last')
			{
				if (options.thumbnails_direction !== 'horizontal')
				{
					/* outside & vertical */
					content_container.css('float', 'left');
					content_container.css('width', options.content_width);
					thumb_container.css('float', 'left');
					thumb_container.css('height', options.content_height);
				}
				else
				{
					/* outside & horizontal */
					jQuery(thumb_wrapper).find('.showcase-thumbnail').css('float', 'left');
					//jQuery(thumb_wrapper).append(jQuery('<div />').addClass('clear'));
				}
				
				if (options.thumbnails_position === 'outside-last')
				{
					/* outside-last */
					showcase.append(thumb_container);
					if (options.thumbnails_direction !== 'horizontal') { showcase.append(jQuery('<div />').addClass('clear')); }
				}
				else
				{
					/* outside-first */
					showcase.prepend(thumb_container);
					if (options.thumbnails_direction !== 'horizontal') { showcase.append(jQuery('<div />').addClass('clear')); }
				}
			}
			else
			{
				thumb_container.css({'position' : 'absolute', 'z-index' : 20});
				if (options.thumbnails_direction === 'horizontal') 
				{
					/* inside & horizontal */
					thumb_container.css({'left' : 0, 'right' : 0});
					jQuery(thumb_wrapper).find('.showcase-thumbnail').css('float', 'left');
					jQuery(thumb_wrapper).append(jQuery('<div />').addClass('clear'));
					
					/* inside first */
					if (options.thumbnails_position === 'inside-first') { thumb_container.css('top', 0); }
					/* inside last */
					else { thumb_container.css('bottom', 0); }
				}
				else 
				{
					/* inside & vertical */
					thumb_container.css({'top' : 0, 'bottom' : 0});
					/* inside first */
					if (options.thumbnails_position === 'inside-first') { thumb_container.css('left', 0); }
					/* inside last */
					else { thumb_container.css('right', 0); }
				}
				content_container.prepend(thumb_container);
			}
			
			// Add class and style to thumbnail container
			thumb_container.addClass('showcase-thumbnail-container');
			thumb_container.css('overflow', 'hidden');
			
			// Add class and style to thumbnail restriction
			thumb_restriction.addClass('showcase-thumbnail-restriction');
			thumb_restriction.css({'overflow' : 'hidden', 'position' : 'relative'});
			if (options.thumbnails_direction === 'horizontal') { thumb_restriction.css({'float' : 'left'}); }
			
			// Add class and style to thumbnail wrapper 
			thumb_wrapper.addClass('showcase-thumbnail-wrapper');
			if (options.thumbnails_direction === 'horizontal') { thumb_wrapper.addClass('showcase-thumbnail-wrapper-horizontal'); }
			else { thumb_wrapper.addClass('showcase-thumbnail-wrapper-vertical'); }
			thumb_wrapper.css('position', 'relative');
			
			// Append wrapper and restriction
			thumb_restriction.append(thumb_wrapper);
			thumb_container.append(thumb_restriction);
			
			// Add backward button
			var buttonBackward = jQuery('<div class="showcase-thumbnail-button-backward" />');
			if (options.thumbnails_direction !== 'horizontal')
			{
				buttonBackward.html('<span class="showcase-thumbnail-vertical"><span>Up</span></span>');
			}
			else
			{
				buttonBackward.css({'float' : 'left'});
				buttonBackward.html('<span class="showcase-thumbnail-horizontal"><span>Left</span></span>');
			}
			buttonBackward.click(function() { slideThumbnailWrapper('backward', false, true); });
			thumb_container.prepend(buttonBackward);
			
			// Add forward button
			var buttonForward = jQuery('<div class="showcase-thumbnail-button-forward" />');
			if (options.thumbnails_direction !== 'horizontal')
			{
				buttonForward.html('<span class="showcase-thumbnail-vertical"><span>Down</span></span>');
			}
			else
			{
				buttonForward.css({'float' : 'left'});
				buttonForward.html('<span class="showcase-thumbnail-horizontal"><span>Right</span></span>');
			}
			buttonForward.click(function() { slideThumbnailWrapper('forward', false, true); });
			thumb_container.append(buttonForward);
			
			// Set the number of thumbnails per page.
			var thumbnailVisibleStretch = 0;
			if (options.thumbnails_direction !== 'horizontal')
			{
				thumbnailVisibleStretch = getElementHeight(thumb_wrapper, false);
				thumbnailVisibleStretch += (getElementHeight(buttonBackward)) + (getElementHeight(buttonForward));
				while (thumbnailVisibleStretch < options.content_height)
				{
					thumbnailVisibleStretch += getElementHeight(jQuery(thumbnailArray[0]));
					thumbnailsPerPage++;
				}
			}
			else
			{
				thumbnailVisibleStretch = getElementWidth(thumb_wrapper, false);
				thumbnailVisibleStretch += (getElementWidth(buttonBackward)) + (getElementWidth(buttonForward));
				
				while (thumbnailVisibleStretch < showcase_width)
				{
					thumbnailVisibleStretch += getElementWidth(jQuery(thumbnailArray[0]));
					thumbnailsPerPage++;
				}
			}
			
			// Hide buttons if they're not necessary
			if (thumbnailsPerPage+1 > thumbnailArray.length)
			{
				if (options.thumbnails_direction !== 'horizontal')
				{
					thumb_restriction.css('margin-top', getElementHeight(buttonBackward));
				}
				else
				{
					thumb_restriction.css('margin-left', getElementWidth(buttonBackward));
				}
				buttonBackward.hide();
				buttonForward.hide();
			}
			
			// Set thumbnail restriction height or width
			if (options.thumbnails_direction !== 'horizontal')
			{
				var buttonsHeight = (getElementHeight(buttonBackward)) + (getElementHeight(buttonForward));
				thumb_restriction.css('height', options.content_height - buttonsHeight);
			}
			else
			{
				var buttonsWidth = (getElementWidth(buttonBackward)) + (getElementWidth(buttonForward));
				thumb_restriction.css('width',  showcase_width-buttonsWidth);
			}
			
			// Set thumbnail wrapper width
			if (options.thumbnails_direction === 'horizontal')
			{
				jQuery('.showcase-thumbnail').each(function() { thumbnailStretch += getElementWidth(jQuery(this)); });
				thumb_wrapper.css('width', thumbnailStretch);
			}
			else { jQuery('.showcase-thumbnail').each(function() { thumbnailStretch += getElementHeight(jQuery(this)); }); }
		}
		
		// Set showcase width and height
		if (options.thumbnails && options.thumbnails_position.indexOf("outside") !== -1 && options.thumbnails_direction !== 'horizontal' && !options.viewline)
		{
			showcase.css('width', showcase_width + getElementWidth(thumb_wrapper, true, false));
		}
		else if  (!options.fit_to_parent) { showcase.css('width', showcase_width); }
		
		// Turn on/off auto slide
		if (content_count > 1 && options.auto) { myInterval = window.setInterval(autoChange, options.interval); }
		
		// Pause auto on mouse over
		if (options.auto && options.pauseonover)
		{
			showcase.mouseenter(function() { break_loop = true; clearInterval(myInterval); });
			showcase.mouseleave(function()
			{
				if (!pause_loop)
				{
					break_loop = false; myInterval = window.setInterval(autoChange, options.interval);
				}
			});
		}
		
		// Adding navigation arrows
		if (options.arrows && content_count > 1)
		{
			// Left arrow
			jQuery(document.createElement('div'))
				.addClass('showcase-arrow-previous')
				.prependTo(showcase)
				.click(function() {
					// Disable auto change on click
					if (myInterval)
					{
						if (options.stoponclick) { pause_loop = true; }
						clearInterval(myInterval);
					}
					changeContent((current_id === 0) ? content_count-1 : parseInt(current_id)-1, 'previous');
				});
			// Right arrow
			jQuery(document.createElement('div'))
				.addClass('showcase-arrow-next')
				.prependTo(showcase)
				.click(function() {
					// Disable auto change on click
					if (myInterval)
					{
						if (options.stoponclick) { pause_loop = true; }
						clearInterval(myInterval);
					}
					changeContent(current_id+1, 'next');
				});
				
			if (options.viewline) { jQuery('.showcase-arrow-previous').hide(); }
		}
		
		// Adding navigation buttons
		if (options.buttons && content_count > 1)
		{
			// Create button wrapper
			jQuery(document.createElement('div'))
				.css('clear', 'both')
				.addClass('showcase-button-wrapper')
				.appendTo(showcase);
			i = 0;
			// Add button for each content
			while (i < content_count)
			{
				jQuery(document.createElement('span'))
					.attr('id', 'showcase-navigation-button-' + i)
					.addClass((i === 0) ? 'active' : '')
					// Add numbers or unicode
					.html((options.btn_numbers) ? parseInt(i)+1 : '&#9679;')
					.click(function(a, b)
					{
						// This function is used to extract the correct i value on click
						return function()
						{
							// Disable auto change on click
							if (myInterval)
							{
								if (options.stoponclick) { pause_loop = true; }
								clearInterval(myInterval);
							}
							changeContent(a, b);
						};
					}(i, ''))
					.appendTo(jQuery(showcase).find('.showcase-button-wrapper'));
				i++;
			}
		}
		
		// Activating the keybord arrow keys
		if (options.keybord_keys)
		{
			jQuery(document).keydown(function(e)
			{
				// Disable auto change on click
				if (options.stoponclick) { pause_loop = true; }
				if (myInterval) clearInterval(myInterval);
				
				// Left arrow
				if (e.keyCode === 37) {
					changeContent((current_id === 0) ? content_count-1 : parseInt(current_id)-1, 'previous');
				}
				
				// Right arrow
				if (e.keyCode === 39) {
					changeContent((current_id === content_count-1) ? 0 : parseInt(current_id)+1, 'next');
				}
			});
		}      
					
		// A function that runs on content change, if it exists.
		if (typeof options.onload == 'function')
		{ 	
			options.onload();
		}
		
		
		// *************
		// THE FUNCTIONS
		// *************
		
		// Returns the specified content (by array id)
		function getContent(id) {
		
			var new_content = jQuery(document.createElement('div'))
				.attr('id', 'showcase-content-' + id)
				.css('overflow', 'hidden')
				.css('position', 'absolute')
				.addClass('showcase-content')
				.html(contentArray[id]);
			
			// Set content width
			if (!options.viewline) { new_content.css('width', options.content_width); }
			
			// Position the content wrapper if showcase width is set to hundred percent
			if (options.fit_to_parent && !options.viewline) { new_content.css('left', (showcase_width/2)-options.content_width/2); }
			
			return new_content;
		}
		
		// Function that runs when content is set to change automatically
		function autoChange() {
		
			// Set next content id
			var nextID = parseInt(current_id)+1;
			// If the next id is outside the array and continuous is set to true set the id to 0
			if (nextID === content_count && options.continuous) { nextID = 0; }
			// If continuous is set to false break the auto change
			else if (nextID === content_count && !options.continuous) { break_loop = true; clearInterval(myInterval); }
			// Don't change the content if the auto change is broken
			if (!break_loop) { changeContent(nextID, 'next'); }
		}
		
		// Changes the content (no explanation/comments needed :)
		function changeContent(id, direction) {
			
			// If the next content isn't the current content
			if (current_id !== id && !animating) {
				
				var obj;
				var obj2;
				var delay = 0;
				var i;
				
				// Set left/right position if showcase is set to full width
				var lrpos = (options.fit_to_parent) ? (showcase_width/2)-(options.content_width/2) : 0;
				
				// If we want to display the next content
				if ((id > current_id && direction !== 'previous') || direction === 'next') {
				
					if (options.viewline) {
						
						if (current_id < content_count-1) {
						
							// Prevent uggly transitions
							if (!options.speed_change) { animating = true; }
						
							// BugFix
							updateContentViewlineWidth();
								
							// Pause Autoplay
							if (options.pauseonover) { window.clearInterval(myInterval); }
							
							// First we check if the content will fill the screen after animation.
							remaining_width = 0;
							
							// Loop trough the content array to find out 
							// the total width for the content that remains.
							for (i=current_id+1, len=content_count; i<len; ++i)
							{
								obj = addedContentArray[i];
								remaining_width += obj.find('.showcase-content').children().width();
							}
							
							// If the remaining width is wider than the browser window.
							if (remaining_width > showcase_width)
							{
								old_animation_distance = animation_distance;
								animation_distance -= addedContentArray[current_id].find('.showcase-content').children().width();
							}
							else if (jQuery('.showcase-arrow-next').is(':visible')) 
							{
								old_animation_distance = animation_distance;
								animation_distance = -(content_viewline_width - (remaining_width + (showcase_width - remaining_width)));
								jQuery('.showcase-arrow-next').fadeOut(300);
							}
							
							content_container.animate({left: animation_distance + 'px'}, options.transition_speed, function() { animating = false; });
							
							// Change current content id (if content is finished)
							if (jQuery('.showcase-arrow-next').is(':visible')) { current_id++; }
							
							jQuery('.showcase-arrow-previous').fadeIn(300);
						}
					}
					else {
					
						// Prevent uggly transitions
						if (!options.speed_change) { animating = true; }
						
						// Get current and next content element
						obj = jQuery(showcase).find('#showcase-content-' + parseInt(current_id));
						obj2 = getContent(id);
						
						// Append next element and set height
						content_container.append(obj2);
						if (options.dynamic_height) { obj2.css('height', obj2.find('.showcase-content').children().height()); }
						else { obj2.css('height', options.content_height); }
						
						// Animate height first if next content is not as high
						if (obj.find('.showcase-content').children().height() > obj2.find('.showcase-content').children().height() && options.dynamic_height) {
						
							content_container.stop(true, true).animate({ height: obj2.find('.showcase-content').children().height() }, 200);
							delay = 100;
						}
						
						// Animate current element
						if (options.transition === 'hslide') {
						
							jQuery(obj).delay(delay).animate({ left: -(options.content_width) }, options.transition_speed+options.transition_delay, function() { obj.remove(); });
						}
						else if (options.transition === 'vslide') {
						
							jQuery(obj).delay(delay).animate({ top: -(options.content_height) }, options.transition_speed+options.transition_delay, function() { obj.remove(); });
						}
						else {
						
							jQuery(obj).delay(delay).fadeOut(options.transition_speed, function() { obj.remove(); });
						}
						
						// This will hide them, not display them :)
						displayAnchors(obj, true);
						displayCaption(obj, true);
						
						// Animate next element
						if (options.transition === 'hslide') {
						
							obj2.css('left', showcase_width);
							jQuery(obj2).delay(delay).animate({ left: lrpos }, options.transition_speed, function() {
									displayAnchors(obj2);
									displayCaption(obj2);
									afterAnimation(obj2);
								}
							);
						}
						else if (options.transition === 'vslide') {
						
							obj2.css('top', showcase.height());
							jQuery(obj2).delay(delay).animate({ top: '0px' }, options.transition_speed, function() {
									displayAnchors(obj2);
									displayCaption(obj2);
									afterAnimation(obj2);
								}
							);
						}
						else {
							
							obj2.css('left', lrpos);
							obj2.css('display', 'none');
							jQuery(obj2).delay(delay).fadeIn(options.transition_speed, function()
								{
									displayAnchors(obj2);
									displayCaption(obj2);
									afterAnimation(obj2);
								}
							);
						}
					}
				}
				// If we want to display the previous content
				else if (id < current_id || direction === 'previous') {
					
					if (options.viewline) {
					
						if (current_id !== 0) {
						
							// Prevent uggly transitions
							if (!options.speed_change) { animating = true; }
							
							// BugFix
							updateContentViewlineWidth();
							
							// Pause Autoplay
							if (options.pauseonover) { window.clearInterval(myInterval); }
							
							content_container.animate({left: old_animation_distance + 'px'}, options.transition_speed, function() { animating = false; });
							
							// Set animation distance
							animation_distance = old_animation_distance;
							
							// Change current content id
							current_id--;
							
							if (current_id === 0) { jQuery('.showcase-arrow-previous').fadeOut(300); }
							
							// Set old distance
							old_id = current_id - 1;
							sub_width = jQuery(addedContentArray[old_id]).width();
							old_animation_distance = old_animation_distance + sub_width;
						}
						
						jQuery('.showcase-arrow-next').fadeIn(300);
					}
					else {
					
						// Prevent uggly transitions
						if (!options.speed_change) { animating = true; }
						
						// Get current and next content element
						obj = jQuery(showcase).find('#showcase-content-' + parseInt(current_id));
						obj2 = getContent(id);
						
						// Append next element and set height
						content_container.append(obj2);
						if (options.dynamic_height) { obj2.css('height', obj2.find('.showcase-content').children().height()); }
						else { obj2.css('height', options.content_height); }
						
						// Animate height first if next content is not as high
						if (obj.find('.showcase-content').children().height() > obj2.find('.showcase-content').children().height() && options.dynamic_height) {
						
							content_container.stop(true, true).animate({ height: obj2.find('.showcase-content').children().height()}, 200);
							delay = 100;
						}
						
						// Animate current element
						if (options.transition === 'hslide') {
						
							jQuery(obj).delay(delay).animate({
								left: (showcase_width) + 'px'
								}, options.transition_speed+options.transition_delay, function() {
									displayAnchors(obj, true);
									displayCaption(obj, true);
									obj.remove();
							});
						}
						else if (options.transition === 'vslide') {
						
							jQuery(obj).delay(delay).animate({
								top: (options.content_height) + 'px'
								}, options.transition_speed+options.transition_delay, function(){
									displayAnchors(obj, true);
									displayCaption(obj, true);
									obj.remove();
							});
						}
						else {
						
							jQuery(obj).delay(delay).fadeOut(options.transition_speed, function() {
								displayAnchors(obj, true);
								displayCaption(obj, true);
								obj.remove();
							});
						}
						
						// Animate next element
						if (options.transition === 'hslide')
						{
							obj2.css('left', '-' + options.content_width + 'px');
							jQuery(obj2).delay(delay).animate({
								left: lrpos
								}, options.transition_speed, function() {
									displayAnchors(obj2);
									displayCaption(obj2);
									afterAnimation(obj2);
							});
						}
						else if (options.transition === 'vslide')
						{
							obj2.css('top', '-' +  showcase.height() + 'px');
							jQuery(obj2).delay(delay).animate({
								top: '0px'
								}, options.transition_speed, function() {
									displayAnchors(obj2);
									displayCaption(obj2);
									afterAnimation(obj2);
							});
						}
						else 
						{
							obj2.css('left', lrpos);
							obj2.css('display', 'none');	
							jQuery(obj2).delay(delay).fadeIn(options.transition_speed, function() {
								displayAnchors(obj2);
								displayCaption(obj2);
								afterAnimation(obj2);
							});
						}
						content_container.append(obj2);
					}
				}
				
				if(!options.viewline)
				{
					// Change previous and current content id
					previous_id = current_id;
					current_id = id;
							
					// Slide thumbnail wrapper
					if (options.thumbnails)
					{
						if ((current_id > previous_id && direction !== 'previous') || direction === 'next')
						{
							slideThumbnailWrapper('forward', true);
						}
						else if (current_id < previous_id || direction === 'previous')
						{
							slideThumbnailWrapper('backward', true);
						}
					}
					
					// Change click handlers for arrows
					if (options.arrows)
					{
						jQuery(showcase).find('.showcase-arrow-previous')
							.unbind('click')
							.click(function() {
								if (myInterval)
								{
									if (options.stoponclick) { pause_loop = true; }
									clearInterval(myInterval);
								}
								changeContent((current_id === 0) ? content_count-1 : parseInt(current_id)-1, 'previous');
							});
							jQuery(showcase).find('.showcase-arrow-next')
							.unbind('click')
							.click(function() {
								if (myInterval)
								{
									if (options.stoponclick) { pause_loop = true; }
									clearInterval(myInterval);
								}
								changeContent((current_id === content_count-1) ? 0 : parseInt(current_id)+1, 'next');
							});
					}
					
					// Change active class for thumbnails
					if (options.thumbnails)
					{
						i = 0;
						showcase.find('.showcase-thumbnail').each(function()
						{
							var object = jQuery(this);
							object.removeClass('active');
							if (i === current_id) { object.addClass('active'); }
							i++;
						});
					}
					
					// If caption is set to 'show'
					if (options.show_caption === 'show') { jQuery(obj2).find('.showcase-caption').show(); }
				}
				
				// Change active class for buttons
				if (options.buttons)
				{
					i = 0;
					showcase.find('.showcase-button-wrapper span').each(function()
					{
						var object = jQuery(this);
						object.removeClass('active');
						if (i === current_id) { object.addClass('active'); }
						i++;
					});
				}
					
				// A function that runs on content change, if it exists.
				if (typeof options.custom_function == 'function')
				{ 	
					options.custom_function();
				}
			}
		}
		
		function afterAnimation(obj)
		{
			if (options.dynamic_height) { content_container.stop(true, true).animate({ height: obj.find('.showcase-content').children().height() }, 200); }
			animating = false;
		}
		
		// Slide thumbnail wrapper
		var thumbnailSlidePosition = 0;
		function slideThumbnailWrapper(direction, check, backwardforward)
		{
			var doTheSlide = true;
			var thumbnailHeightOrWidth = getElementHeight(jQuery(thumb_wrapper).find('.showcase-thumbnail'));
			if (options.thumbnails_direction === 'horizontal')
			{
				thumbnailHeightOrWidth = getElementWidth(jQuery(thumb_wrapper).find('.showcase-thumbnail'));
			}
			var multiplySlidePosition = 1;
			
			// Set slide x
			if (options.thumbnails_slidex === 0) { options.thumbnails_slidex = thumbnailsPerPage; }
			
			// Check if we need to do the slide
			if (check)
			{
				var thumbnailSlidePositionCopy = thumbnailSlidePosition;
				var thumbnailsScrolled = 0;
				while (thumbnailSlidePositionCopy < 0)
				{
					if (options.thumbnails_direction === 'horizontal')
					{
						thumbnailSlidePositionCopy += getElementWidth(jQuery(thumbnailArray[0]));
					}
					else
					{
						thumbnailSlidePositionCopy += getElementHeight(jQuery(thumbnailArray[0]));
					}
					thumbnailsScrolled++;
				}
				
				var firstVisible = thumbnailsScrolled;
				var lastVisible = thumbnailsPerPage + thumbnailsScrolled -1;
				
				// Check if the next active thumbnail is outside the visible area
				if (current_id >= firstVisible && current_id <= lastVisible) { doTheSlide = false; }
				
				// If the next active thumbnail is far away..
				var distance;
				if ((current_id - lastVisible) > options.thumbnails_slidex)
				{
					distance = current_id - lastVisible;
					
					while (distance > options.thumbnails_slidex)
					{
						distance -= options.thumbnails_slidex;
						multiplySlidePosition++;
					}
				}
				else if ((firstVisible - current_id) > options.thumbnails_slidex)
				{
					distance =  firstVisible - current_id;
					
					while (distance > options.thumbnails_slidex)
					{
						distance -= options.thumbnails_slidex;
						multiplySlidePosition++;
					}
				}
				else { multiplySlidePosition = 1; }
			}
			
			if (direction === 'forward' && doTheSlide)
			{
				if (options.thumbnails_direction === 'vertical' && options.content_height < (thumbnailStretch + thumbnailSlidePosition))
				{
					thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition);
				}
				else if (options.thumbnails_direction === 'horizontal' && options.content_width < (thumbnailStretch + thumbnailSlidePosition))
				{
					thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition);
				}
				else if (current_id === 0)
				{
					if (!backwardforward) { thumbnailSlidePosition = 0; }
				}
				if (options.thumbnails_direction === 'horizontal') { thumb_wrapper.animate({ left: thumbnailSlidePosition }, 300); }
				else { thumb_wrapper.animate({ top: thumbnailSlidePosition }, 300); }
			}
			else if (doTheSlide)
			{
				if (thumbnailSlidePosition < 0)
				{
					thumbnailSlidePosition += thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition);
				}
				else if (current_id === content_count-1)
				{
					if (!backwardforward)
					{
						thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition);
					}
				}
				else { thumbnailSlidePosition = 0; }
				if (options.thumbnails_direction === 'horizontal') { thumb_wrapper.animate({ left: thumbnailSlidePosition }, 300); }
				else { thumb_wrapper.animate({ top: thumbnailSlidePosition }, 300); }
			}
		}
		
		// Displays the caption
		function displayCaption(container, fadeOut)
		{
			var caption = container.find('.showcase-caption');
			if (!fadeOut)
			{
				if (options.show_caption === 'onload') { caption.fadeIn(300); }
				else if (options.show_caption === 'onhover')
				{
					jQuery(container).mouseenter(function()
					{
						caption.fadeIn(300);
					});
					
					jQuery(container).mouseleave(function()
					{
						caption.stop(true, true).fadeOut(100);
					});
				}
			}
			else { caption.stop(true, true).fadeOut(300); }
		}
		
		// Displays the anchors in the current slide
		function displayAnchors(container, fadeOut)
		{
			// Get each anchor tooltip
			container.find('.showcase-tooltips a').each(function()
			{
				if (!fadeOut)
				{
					// Get coordinates
					var coords = jQuery(this).attr('coords');
					coords = coords.split(',');
					
					// Style and position anchor
					jQuery(this).addClass('showcase-plus-anchor');
					jQuery(this).css('position', 'absolute');
					jQuery(this).css('display', 'none');
					jQuery(this).css('width', options.tooltip_icon_width);
					jQuery(this).css('height', options.tooltip_icon_height);
					jQuery(this).css('left', parseInt(coords[0]) - (parseInt(options.tooltip_icon_width)/2));
					jQuery(this).css('top', parseInt(coords[1]) - (parseInt(options.tooltip_icon_height)/2));
					var content = jQuery(this).html();
					jQuery(this).mouseenter(function()
					{
						animateTooltip(container, coords[0], coords[1], content);
					});
					jQuery(this).mouseleave(function()
					{
						animateTooltip(container, coords[0], coords[1], content);
					});
					jQuery(this).html('');
					jQuery(this).fadeIn(300);
				}
				else
				{
					jQuery(this).stop(true, true).fadeOut(300);
				}
			});
		}
		
		// Controls the animation for the tooltips
		var tooltip = null;
		function animateTooltip(container, x, y, content)
		{
			// if tooltip is null (doesn't exsist)
			if (tooltip === null)
			{
				// Create the tooltip
				tooltip = jQuery(document.createElement('div'))
					.addClass('showcase-tooltip')
					.css('display', 'none')
					.css('position', 'absolute')
					.css('max-width', options.tooltip_width)
					.html(content);
				container.append(tooltip);
				
				// Position the tooltip (this is where we try not to display the tooltip outside the content wrapper)
				var tooltip_paddingx = parseInt(tooltip.css('padding-right'))*2 + parseInt(tooltip.css('border-right-width'))*2;
				var tooltip_paddingy = parseInt(tooltip.css('padding-bottom'))*2 + parseInt(tooltip.css('border-bottom-width'))*2;
				lastx = parseInt(x) + tooltip.width() + tooltip_paddingx;
				lasty = parseInt(y) + tooltip.height() + tooltip_paddingy;
				
				if (lastx < options.content_width)
				{
					tooltip.css('left', parseInt(x) + parseInt(options.tooltip_offsetx));
				}
				else
				{
					tooltip.css('left', (parseInt(x) - parseInt(options.tooltip_offsetx)) - (parseInt(tooltip.width()) + parseInt(options.tooltip_offsetx)));
				}
				
				if (lasty < options.content_height)
				{
					tooltip.css('top', parseInt(y) + parseInt(options.tooltip_offsety));
				}
				else
				{
					tooltip.css('top', (parseInt(y) - parseInt(options.tooltip_offsety)) - (parseInt(tooltip.height()) + parseInt(tooltip_paddingy)));
				}
				
				// Fade in the tooltip
				tooltip.fadeIn(400);
			}
			else
			{
				// Fade out the tooltip
				tooltip.fadeOut(400);
				// Remove it from the DOM
				tooltip.remove();
				// And set the variable to null
				tooltip = null;
			}
		}
		
		/* Returns the correct height for the element, including padding and borders. */
		function getElementHeight(el, incHeight, incMargin, incPadding, incBorders)
		{
			incHeight = typeof(incHeight) !== 'undefined' ? incHeight : true;
			incMargin = typeof(incMargin) !== 'undefined' ? incMargin : true;
			incPadding = typeof(incPadding) !== 'undefined' ? incPadding : true;
			incBorders = typeof(incBorders) !== 'undefined' ? incBorders : true;
			var elHeight = (incHeight) ? jQuery((el)).height() : 0;
			var elMargin = (incMargin) ? parseFloat(jQuery((el)).css('margin-top')) + parseFloat(jQuery(el).css('margin-bottom')) : 0;
			var elPadding = (incPadding) ? parseFloat(jQuery((el)).css('padding-top')) + parseFloat(jQuery(el).css('padding-bottom')) : 0;
			var elBorder = (incBorders) ? parseFloat(jQuery((el)).css('border-top-width')) + parseFloat(jQuery((el)).css('border-bottom-width')) : 0;
			elHeight += elMargin + elPadding + elBorder;
			return elHeight;
		}
		
		/* Returns the correct width for the element, including width, margin, padding and borders. */
		function getElementWidth(el, incWidth, incMargin, incPadding, incBorders)
		{
			incWidth = typeof(incWidth) !== 'undefined' ? incWidth : true;
			incMargin = typeof(incMargin) !== 'undefined' ? incMargin : true;
			incPadding = typeof(incPadding) !== 'undefined' ? incPadding : true;
			incBorders = typeof(incBorders) !== 'undefined' ? incBorders : true;
			var elWidth = (incWidth) ? jQuery((el)).width() : 0;
			var elMargin = (incMargin) ? parseFloat(jQuery((el)).css('margin-left')) + parseFloat(jQuery(el).css('margin-right')) : 0;
			var elPadding = (incPadding) ? parseFloat(jQuery((el)).css('padding-left')) + parseFloat(jQuery((el)).css('padding-right')) : 0;
			var elBorder = (incBorders) ? parseFloat(jQuery((el)).css('border-left-width')) + parseFloat(jQuery((el)).css('border-right-width')) : 0;
			elWidth += elMargin + elPadding + elBorder;
			return elWidth;
		}
		
		// Traces the mouse position (used for positioning anchors)
		if (options.mousetrace)
		{
			// Create the div tha displays the coordinates
			var mousetrace = jQuery(document.createElement('div'))
				.css('position', 'absolute')
				.css('top', '0')
				.css('background-color', '#fff')
				.css('color', '#000')
				.css('padding', '3px 5px')
				.css('x-index', '30')
				.html('X: 0 Y: 0');
			showcase.append(mousetrace);
			var offset = showcase.offset();
			
			// Print the coordinates
			content_container.mousemove(function(e){ mousetrace.html('X: ' + (e.pageX - offset.left)  + ' Y: ' + (e.pageY - offset.top)); });
		}
		
		// Show all content on one page
		jQuery('#awOnePageButton').click(function showInOnePage()
		{
			if (jQuery('.view-page').is(':visible'))
			{
				var temp_container = jQuery(document.createElement('div'));
				temp_container.addClass('showcase-onepage');
				showcase.before(temp_container);
				
				// Disable auto change on click
				if (myInterval) { pause_loop = true; clearInterval(myInterval); }
				
				jQuery(this).find('.view-page').hide();
				jQuery(this).find('.view-slide').show();
				showcase.hide();
			
				$.each(contentArray, function(index, value)
				{
					obj = getContent(index);
					obj.css('position', 'relative');
					temp_container.append(obj);
					
					displayAnchors(obj);
					displayCaption(obj);
					
					if (options.dynamic_height) { obj.css('height', obj.find('.showcase-content').children().height()); }
					else { obj.css('height', options.content_height); }
				});
				
				var clear = jQuery(document.createElement('div'));
				clear.addClass('clear');
				temp_container.append(clear);
			}
			else
			{
				jQuery('.showcase-onepage').remove();
				jQuery(this).find('.view-page').show();
				jQuery(this).find('.view-slide').hide();
				showcase.show();
			}
			
			return false;
		});
		
		// The correct width is returned when all content is fully loaded.
		var addedContentArray = [];
		function updateContentViewlineWidth()
		{
			content_viewline_width = 0;
			content_container.children('div').each(function()
			{
				content_viewline_width += jQuery(this).find('.showcase-content').children().width();
				addedContentArray.push(jQuery(this));
			});
		}
		
		// Remove loading class
		showcase.removeClass('showcase-load');
	};

})(jQuery);
;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(6(a){a.4q.17=6(c){4((3g c).2D("4t|4i")){19 3.T(6(a){4L b(3,c)})}y{4(c=="8"){7 d=a(3).8("2z");4(d){19 d}}y{19 3.T(6(b){7 d=a(3).8("2z");4(d){4(!d.g.18){4(3g c=="4B"){4(c>0&&c<d.g.1a+1&&c!=d.g.U){d.2i(c)}}y{1O(c){B"W":d.o.1X();d.W("2m");C;B"X":d.o.2h();d.X("2m");C;B"16":4(!d.g.Y){d.o.3U();d.g.15=p;d.16()}C}}}4((d.g.Y||!d.g.Y&&d.g.15)&&c=="10"){d.o.3K();d.g.15=r;d.g.w.9(\'L[u*="1D.1H"], L[u*="1I.1o"]\').T(6(){1C(a(3).8("2r"))});d.10()}}})}}};7 b=6(c,d){7 e=3;e.$35=a(c).V("5-2O");e.$35.8("2z",e);e.3p=6(){e.o=a.3d({},b.3q,d);e.g=a.3d({},b.38);4(a(c).9(".5-11").N==1){e.o.1R=r;e.o.32=r;e.o.2k=r;e.o.2s=r;e.o.1d=0;e.o.27=r;e.o.1e=p;e.o.S=1}e.g.2K=a(c)[0].1x.E;a(c).9(\'.5-11, *[G*="5-s"]\').T(6(){4(a(3).t("22")||a(3).t("1x")){4(a(3).t("22")){7 b=a(3).t("22").1F().P(";")}y{7 b=a(3).t("1x").1F().P(";")}1B(x=0;x<b.N;x++){1t=b[x].P(":");4(1t[0].1h("4r")!=-1){1t[1]=e.3n(1t[1])}a(3).8(a.2p(1t[0]),a.2p(1t[1]))}}a(3).8("44",a(3)[0].1x.M);a(3).8("47",a(3)[0].1x.R)});a(c).9(\'*[G*="5-2U-"]\').T(6(){7 b=a(3).t("G").P(" ");1B(7 d=0;d<b.N;d++){4(b[d].1h("5-2U-")!=-1){7 e=F(b[d].P("5-2U-")[1]);a(3).12(6(b){b.1j();a(c).17(e)})}}});e.g.1a=a(c).9(".5-11").N;e.o.S=e.o.S<e.g.1a+1?e.o.S:1;e.o.S=e.o.S<1?1:e.o.S;e.g.1g=1;4(e.o.20){e.g.1g=0}a(c).9(\'L[u*="1D.1H"]\').T(6(){4(a(3).1f(\'[G*="5-s"]\')){7 b=a(3);a.36("2W://4k.3z.2Z/4I/3h/4u/"+a(3).t("u").P("34/")[1].P("?")[0]+"?v=2&4h=42&3J=?",6(a){b.8("23",F(a["4e"]["4j$4x"]["4l$3W"]["4s"])*2A)});7 c=a("<1k>").V("5-1E").K(a(3).1f());a("<1y>").K(c).V("5-1A").t("u","2W://1y.3z.2Z/4N/"+a(3).t("u").P("34/")[1].P("?")[0]+"/"+e.o.3S);a("<1k>").K(c).V("5-3V");a(3).1f().q({E:a(3).E(),Q:a(3).Q()}).12(6(){e.g.18=p;4(e.g.1b){4(e.o.1e!=r){e.g.1b=r}e.g.15=p}y{e.g.15=e.g.Y}4(e.o.1e!=r){e.10()}e.g.2j=p;a(3).9("L").t("u",a(3).9("L").8("1U"));a(3).9(".5-1E").13(e.g.v.d).2V(e.g.v.2C,6(){4(e.o.1e=="29"&&e.g.15==p){7 a=2t(6(){e.16()},b.8("23")-e.g.v.d);b.8("2r",a)}e.g.18=r})});7 d="&";4(a(3).t("u").1h("?")==-1){d="?"}a(3).8("1U",a(3).t("u")+d+"3H=1");a(3).t("u","")}});a(c).9(\'L[u*="1I.1o"]\').T(6(){4(a(3).1f(\'[G*="5-s"]\')){7 b=a(3);7 c=a("<1k>").V("5-1E").K(a(3).1f());a.36("2W://1o.2Z/3h/4O/4c/"+a(3).t("u").P("4c/")[1].P("?")[0]+".42?3J=?",6(d){a("<1y>").K(c).V("5-1A").t("u",d[0]["4g"]);b.8("23",F(d[0]["3W"])*2A);a("<1k>").K(c).V("5-3V")});a(3).1f().q({E:a(3).E(),Q:a(3).Q()}).12(6(){e.g.18=p;4(e.g.1b){4(e.o.1e!=r){e.g.1b=r}e.g.15=p}y{e.g.15=e.g.Y}4(e.o.1e!=r){e.10()}e.g.2j=p;a(3).9("L").t("u",a(3).9("L").8("1U"));a(3).9(".5-1E").13(e.g.v.d).2V(e.g.v.2C,6(){4(e.o.1e=="29"&&e.g.15==p){7 a=2t(6(){e.16()},b.8("23")-e.g.v.d);b.8("2r",a)}e.g.18=r})});7 d="&";4(a(3).t("u").1h("?")==-1){d="?"}a(3).8("1U",a(3).t("u")+d+"3H=1");a(3).t("u","")}});4(e.o.20){e.o.S=e.o.S-1==0?e.g.1a:e.o.S-1}e.g.U=e.o.S;e.g.w=a(c).9(".5-11:1v("+(e.g.U-1)+")");e.g.D=6(){19 a(c).E()};e.g.H=6(){19 a(c).Q()};4(e.o.2T){7 f=a("<1y>").K(a(c)).t("u",e.o.2T).t("1x",e.o.3Z);4(e.o.2Y!=r){a("<a>").K(a(c)).t("1i",e.o.2Y).t("4m",e.o.3Q).q({4E:"1m",4n:"1m"}).4C(f)}}a(c).9(".5-11").4D(\'<1k G="5-1K"></1k>\');4(a(c).q("31")=="4A"){a(c).q("31","4z")}a(c).9(".5-1K").q({4v:e.o.48});4(e.o.2X){a(c).9(".5-1K").q({4w:"1M("+e.o.2X+")"})}a(c).9(".5-3G").q({1n:-(e.g.D()/2)+"1S",1q:-(e.g.H()/2)+"1S"});4(e.o.32){a(\'<a G="5-J-W" 1i="#" />\').12(6(b){b.1j();a(c).17("W")}).K(a(c));a(\'<a G="5-J-X" 1i="#" />\').12(6(b){b.1j();a(c).17("X")}).K(a(c))}4(e.o.2k||e.o.2s){a(\'<1k G="5-A-J-1r" />\').K(a(c));4(e.o.2s){a(\'<2v G="5-A-1J" />\').K(a(c).9(".5-A-J-1r"));1B(x=1;x<e.g.1a+1;x++){a(\'<a 1i="#"></a>\').K(a(c).9(".5-A-1J")).12(6(b){b.1j();a(c).17(a(3).3I()+1)})}a(c).9(".5-A-1J a:1v("+(e.o.S-1)+")").V("5-J-1c")}4(e.o.2k){a(\'<a G="5-J-16" 1i="#" />\').12(6(b){b.1j();a(c).17("16")}).3E(a(c).9(".5-A-J-1r"));a(\'<a G="5-J-10" 1i="#" />\').12(6(b){b.1j();a(c).17("10")}).K(a(c).9(".5-A-J-1r"))}y{a(\'<2v G="5-J-3y 5-J-4y" />\').3E(a(c).9(".5-A-J-1r"));a(\'<2v G="5-J-3y 5-J-4F" />\').K(a(c).9(".5-A-J-1r"))}}4(e.o.3C&&a(c).9(".5-11").N>1){a("3O").2q("4M",6(a){4(!e.g.18){4(a.3k==37){e.o.1X();e.W("2m")}y 4(a.3k==39){e.o.2h();e.X("2m")}}})}4("4K"4J 1L&&a(c).9(".5-11").N>1&&e.o.3D){a(c).2q("4G",6(a){7 b=a.1s?a.1s:a.3w.1s;4(b.N==1){e.g.2o=e.g.1G=b[0].3A}});a(c).2q("4H",6(a){7 b=a.1s?a.1s:a.3w.1s;4(b.N==1){e.g.1G=b[0].3A}4(3v.3o(e.g.2o-e.g.1G)>45){a.1j()}});a(c).2q("4f",6(b){4(3v.3o(e.g.2o-e.g.1G)>45){4(e.g.2o-e.g.1G>0){e.o.2h();a(c).17("X")}y{e.o.1X();a(c).17("W")}}})}4(e.o.3c==p&&a(c).9(".5-11").N>1){a(c).9(".5-1K").4p(6(){e.o.3N();4(e.g.Y){e.10();e.g.1b=p}},6(){4(e.g.1b==p){e.16();e.g.1b=r}})}a(c).V("5-"+e.o.2l);7 g=e.o.3a+e.o.2l+"/2l.q";4(3t.3s){3t.3s(g)}y{a(\'<4o 22="4S" 1i="\'+g+\'" 5A="5l/q" />\').K(a("5j"))}4(e.o.20==p){4(e.o.1R){e.g.Y=p}e.X()}y{e.1Q(e.g.w,6(){e.g.w.30(2A,6(){a(3).V("5-1c");4(e.o.28){a(3).13(a(3).8("1N")+25).3l(6(){a(3).9(".5-1A").12();a(3).43()})}});4(e.o.1R){e.16()}})}a(1L).5k(6(){e.1z(e.g.w,6(){19})});a(c).13(5p).3l(6(){e.1z(e.g.w,6(){19},p)});e.o.3T(a(c))};e.16=6(){4(e.g.Y){4(e.g.14=="W"&&e.o.3u){e.W()}y{e.X()}}y{e.g.Y=p;e.33()}};e.33=6(){7 b=a(c).9(".5-1c").8("3m")?F(a(c).9(".5-1c").8("3m")):e.o.3x;1C(e.g.1P);e.g.1P=1L.2t(6(){e.16()},b)};e.10=6(){1C(e.g.1P);e.g.Y=r};e.3n=6(b){4(a.2p(b.1F())=="5u"||a.2p(b.1F())=="5t"){19 b.1F()}y{19 b.O("5s","5q").O("5m","5r").O("5w","5n").O("5v","5y").O("5D","5G").O("5z","5B").O("5x","5C").O("5F","5E").O("5o","5h").O("4Z","4Y").O("50","51").O("52","4X").O("4W","4R")}};e.W=6(a){4(e.g.U<2){e.g.1g+=1}4(e.g.1g>e.o.1d&&e.o.1d>0&&!a){e.g.1g=0;e.10();4(e.o.27==r){e.o.1d=0}}y{7 b=e.g.U<2?e.g.1a:e.g.U-1;e.g.14="W";e.2i(b,e.g.14)}};e.X=6(a){4(!(e.g.U<e.g.1a)){e.g.1g+=1}4(e.g.1g>e.o.1d&&e.o.1d>0&&!a){e.g.1g=0;e.10();4(e.o.27==r){e.o.1d=0}}y{7 b=e.g.U<e.g.1a?e.g.U+1:1;e.g.14="X";e.2i(b,e.g.14)}};e.2i=6(b,d){4(e.g.2j==p){e.g.2j=r;e.g.Y=e.g.15;e.g.w.9(\'L[u*="1D.1H"], L[u*="1I.1o"]\').T(6(){a(3).1f().9(".5-1E").30(e.g.v.2B,6(){a(3).1f().9("L").t("u","")})})}a(c).9(\'L[u*="1D.1H"], L[u*="1I.1o"]\').T(6(){1C(a(3).8("2r"))});1C(e.g.1P);e.g.24=b;e.g.I=a(c).9(".5-11:1v("+(e.g.24-1)+")");4(!d){4(e.g.U<e.g.24){e.g.14="X"}y{e.g.14="W"}}7 f=0;4(a(c).9(\'L[u*="1D.1H"], L[u*="1I.1o"]\').N){f=e.g.v.2B}2t(6(){e.1Q(e.g.I,6(){e.1w()})},f)};e.1Q=6(b,c){4(e.o.1Q){7 d=[];7 f=0;4(b.q("1p-1u")!="1m"&&b.q("1p-1u").1h("1M")!=-1){7 g=b.q("1p-1u");g=g.2D(/1M\\((.*)\\)/)[1].O(/"/3b,"");d.2M(g)}b.9("1y").T(6(){d.2M(a(3).t("u"))});b.9("*").T(6(){4(a(3).q("1p-1u")!="1m"&&a(3).q("1p-1u").1h("1M")!=-1){7 b=a(3).q("1p-1u");b=b.2D(/1M\\((.*)\\)/)[1].O(/"/3b,"");d.2M(b)}});4(d.N==0){e.1z(b,c)}y{1B(x=0;x<d.N;x++){a("<1y>").4Q(6(){4(++f==d.N){e.1z(b,c)}}).t("u",d[x])}}}y{e.1z(b,c)}};e.1z=6(b,c,d){4(!d){b.q({2u:"3F",4d:"5i"})}e.41();1B(7 f=0;f<b.49().N;f++){7 g=b.49(":1v("+f+")");7 h=g.8("44");7 i=g.8("47");4(h&&h.1h("%")!=-1){g.q({M:e.g.D()/2S*F(h)-g.40()/2})}4(i&&i.1h("%")!=-1){g.q({R:e.g.H()/2S*F(i)-g.2Q()/2})}}4(!d){b.q({2u:"1m",4d:"4T"})}c();a(3).43()};e.41=6(){4(a(c).21(".5-1W-1V-2O").N){a(c).21(".5-1W-1V-3M").q({Q:a(c).2Q(p)});a(c).21(".5-1W-1V-2O").q({Q:a(c).2Q(p)});a(c).21(".5-1W-1V-3M").q({E:a(1L).E(),M:-a(1L).E()/2});4(e.g.2K.P("%")!=-1){7 b=F(e.g.2K);7 d=a("3O").E()/2S*b-(a(c).40()-a(c).E());a(c).E(d)}}a(c).9(".5-1K").q({E:e.g.D(),Q:e.g.H()});4(e.g.w&&e.g.I){e.g.w.q({E:e.g.D(),Q:e.g.H()});e.g.I.q({E:e.g.D(),Q:e.g.H()})}y{a(c).9(".5-11").q({E:e.g.D(),Q:e.g.H()})}a(c).9(".5-3G").q({1n:-(e.g.D()/2)+"1S",1q:-(e.g.H()/2)+"1S"})};e.1w=6(){e.o.4a();e.g.18=p;e.g.I.V("5-3R");7 b=2P=2d=2N=2e=2y=26=2E=1T=4P=2g=4U="29";7 d=2G=e.g.D();7 f=2F=e.g.H();7 g=e.g.14=="W"?e.g.w:e.g.I;7 h=g.8("1l")?g.8("1l"):e.o.4b;7 i=e.g.3B[e.g.14][h];4(i=="M"||i=="Z"){d=2d=2G=26=0;2g=0}4(i=="R"||i=="A"){f=b=2F=2e=0;1T=0}1O(i){B"M":2P=2e=0;1T=-e.g.D();C;B"Z":b=2y=0;1T=e.g.D();C;B"R":2N=26=0;2g=-e.g.H();C;B"A":2d=2E=0;2g=e.g.53;C}e.g.w.q({M:b,Z:2P,R:2d,A:2N});e.g.I.q({E:2G,Q:2F,M:2e,Z:2y,R:26,A:2E});7 j=e.g.w.8("2a")?F(e.g.w.8("2a")):e.o.2H;7 k=e.g.w.8("2b")?F(e.g.w.8("2b")):e.o.2L;7 l=e.g.w.8("2f")?e.g.w.8("2f"):e.o.2R;e.g.w.13(j+k/54).1w({E:d,Q:f},k,l,6(){e.g.w=e.g.I;e.g.U=e.g.24;a(c).9(".5-11").2w("5-1c");a(c).9(".5-11:1v("+(e.g.U-1)+")").V("5-1c").2w("5-3R");a(c).9(".5-A-1J a").2w("5-J-1c");a(c).9(".5-A-1J a:1v("+(e.g.U-1)+")").V("5-J-1c");e.g.18=r;e.o.46();4(e.g.Y){e.33()}});e.g.w.9(\' > *[G*="5-s"]\').T(6(){7 b=a(3).8("1l")?a(3).8("1l"):i;7 c,d;1O(b){B"M":c=-e.g.D();d=0;C;B"Z":c=e.g.D();d=0;C;B"R":d=-e.g.H();c=0;C;B"A":d=e.g.H();c=0;C}7 f=a(3).8("3Y")?a(3).8("3Y"):r;1O(f){B"M":c=e.g.D();d=0;C;B"Z":c=-e.g.D();d=0;C;B"R":d=e.g.H();c=0;C;B"A":d=-e.g.H();c=0;C}7 g=e.g.w.8("3X")?F(e.g.w.8("3X")):e.o.3f;7 h=F(a(3).t("G").P("5-s")[1])*g;7 j=a(3).8("2a")?F(a(3).8("2a")):e.o.2H;7 k=a(3).8("2b")?F(a(3).8("2b")):e.o.2L;7 l=a(3).8("2f")?a(3).8("2f"):e.o.2R;4(f=="2c"||!f&&b=="2c"){a(3).13(j).2V(k,l)}y{a(3).10().13(j).1w({1n:-c*h,1q:-d*h},k,l)}});7 m=e.g.I.8("1N")?F(e.g.I.8("1N")):e.o.2J;7 n=e.g.I.8("1Z")?F(e.g.I.8("1Z")):e.o.2x;7 o=e.g.I.8("1Y")?e.g.I.8("1Y"):e.o.2I;e.g.I.13(j+m).1w({E:e.g.D(),Q:e.g.H()},n,o);e.g.I.9(\' > *[G*="5-s"]\').T(6(){7 b=a(3).8("1l")?a(3).8("1l"):i;7 c,d;1O(b){B"M":c=-e.g.D();d=0;C;B"Z":c=e.g.D();d=0;C;B"R":d=-e.g.H();c=0;C;B"A":d=e.g.H();c=0;C;B"2c":d=0;c=0;C}7 f=e.g.I.8("3L")?F(e.g.I.8("3L")):e.o.3e;7 g=F(a(3).t("G").P("5-s")[1])*f;7 h=a(3).8("1N")?F(a(3).8("1N")):e.o.2J;7 k=a(3).8("1Z")?F(a(3).8("1Z")):e.o.2x;7 l=a(3).8("1Y")?a(3).8("1Y"):e.o.2I;4(b=="2c"){a(3).q({2u:"1m",1n:0,1q:0}).13(j+h).30(k,l,6(){4(e.o.28==p){a(3).9(".5-1A").12()}})}y{a(3).q({2u:"3F",1n:c*g,1q:d*g}).10().13(j+h).1w({1n:0,1q:0},k,l,6(){4(e.o.28==p){a(3).9(".5-1A").12()}})}})};e.3p()};b.3q={1R:p,S:1,3u:r,3C:p,3D:p,1Q:p,32:p,2k:p,2s:p,2l:"5d",3a:"/5c/5e/",3c:p,48:"5f",2X:r,20:r,2T:r,3Z:"31: 5g; z-3I: 5b; M: 3P; R: 3P;",2Y:r,3Q:"5a",1d:0,27:p,28:p,1e:"29",3S:"56.55",3T:6(){},3U:6(){},3K:6(){},3N:6(){},4a:6(){},46:6(){},1X:6(){},2h:6(){},4b:"Z",3x:57,3e:.45,3f:.45,2x:3i,2L:3i,2I:"3j",2R:"3j",2J:0,2H:0};b.38={58:"2.0",1b:r,Y:r,18:r,1a:2n,14:"X",1P:2n,D:2n,H:2n,3B:{W:{M:"Z",Z:"M",R:"A",A:"R"},X:{M:"M",Z:"Z",R:"R",A:"A"}},v:{d:3r,2C:59,2B:3r}}})(4V)',62,353,'|||this|if|ls|function|var|data|find||||||||||||||||true|css|false||attr|src||curLayer||else||bottom|case|break|sliderWidth|width|parseInt|class|sliderHeight|nextLayer|nav|appendTo|iframe|left|length|replace|split|height|top|firstLayer|each|curLayerIndex|addClass|prev|next|autoSlideshow|right|stop|layer|click|delay|prevNext|originalAutoSlideshow|start|layerSlider|isAnimating|return|layersNum|paused|active|loops|autoPauseSlideshow|parent|nextLoop|indexOf|href|preventDefault|div|slidedirection|none|marginLeft|vimeo|background|marginTop|wrapper|touches|param|image|eq|animate|style|img|makeResponsive|videopreview|for|clearTimeout|www|vpcontainer|toLowerCase|touchEndX|youtu|player|slidebuttons|inner|window|url|delayin|switch|slideTimer|imgPreload|autoStart|px|layerMarginLeft|videoSrc|forceresponsive|wp|cbPrev|easingin|durationin|animateFirstLayer|closest|rel|videoDuration|nextLayerIndex||nextLayerTop|forceLoopNum|autoPlayVideos|auto|delayout|durationout|fade|curLayerTop|nextLayerLeft|easingout|layerMarginTop|cbNext|change|pausedByVideo|navStartStop|skin|clicked|null|touchStartX|trim|bind|videoTimer|navButtons|setTimeout|display|span|removeClass|durationIn|nextLayerRight|LayerSlider|1e3|fi|fo|match|nextLayerBottom|nextLayerHeight|nextLayerWidth|delayOut|easingIn|delayIn|sliderOriginalWidth|durationOut|push|curLayerBottom|container|curLayerRight|outerHeight|easingOut|100|yourLogo|linkto|fadeOut|http|globalBGImage|yourLogoLink|com|fadeIn|position|navPrevNext|timer|embed|el|getJSON||global||skinsPath|gi|pauseOnHover|extend|parallaxIn|parallaxOut|typeof|api|1500|easeInOutQuint|which|queue|slidedelay|ieEasing|abs|init|options|500|createStyleSheet|document|twoWaySlideshow|Math|originalEvent|slideDelay|sides|youtube|clientX|slideDirections|keybNav|touchNav|prependTo|block|bg|autoplay|index|callback|cbStop|parallaxin|helper|cbPause|body|10px|yourLogoTarget|animating|youtubePreview|cbInit|cbStart|playvideo|duration|parallaxout|slideoutdirection|yourLogoStyle|outerWidth|resizeSlider|json|dequeue|originalLeft||cbAnimStop|originalTop|globalBGColor|children|cbAnimStart|slideDirection|video|visibility|entry|touchend|thumbnail_large|alt|undefined|media|gdata|yt|target|outline|link|hover|fn|easing|seconds|object|videos|backgroundColor|backgroundImage|group|sideleft|relative|static|number|append|wrapAll|textDecoration|sideright|touchstart|touchmove|feeds|in|ontouchstart|new|keydown|vi|v2|layerMarginRight|load|Bounce|stylesheet|visible|layerMarginBottom|jQuery|bounce|Back|Circ|circ|elastic|Elastic|back|sliderHeight89|80|jpg|maxresdefault|4e3|version|750|_blank|1001|layerslider|lightskin|skins|transparent|absolute|Expo|hidden|head|resize|text|easein|easeOut|expo|150|easeInOut|easeIn|easeinout|linear|swing|quad|easeout|quint|Quad|cubic|type|Cubic|Quint|quart|Sine|sine|Quart'.split('|'),0,{}))

;/* JS for Shortcode */
(function($){

$(document).ready(function(){
	
	// socials
	$('a.socials, a.socials-small').tipsy({fade:true, gravity:'s'});
	
	// toggle
	$('.toggle-content:not(.opened), .content-tab:not(.opened)').hide(); 
    $('.tab-index a').click(function(){           
        $(this).parent().next().slideToggle(300, 'easeOutExpo');
        $(this).parent().toggleClass('tab-opened tab-closed');
        $(this).children('span').toggleClass('icon-plus-sign icon-minus-sign');
        $(this).attr('title', ($(this).attr('title') == 'Close') ? 'Open' : 'Close');
        return false;
    });
    
    // tabs
    $( '.features-tab-container' ).yiw_features_tab();
    $('.tabs-container').yiw_tabs({
        tabNav  : 'ul.tabs',
        tabDivs : '.border-box'
    });
    
    //newsletter form
    var input_newsletter = $('.newsletter-section .text-field');
    var prev_input_newsletter_val = null;
    
    input_newsletter.focus(function() {
        if( $( this ).val() == '' ) {
            prev_input_newsletter_val = $( this ).val();
            $( this ).prev( 'label' ).hide();
        }
       
    input_newsletter.blur(function(){ 
        if( $(this).val() == '' ) {   
            $(this).val(prev_input_newsletter_val);
            $( this ).prev( 'label' ).show();
        }
        }); 
    });
    
    //flickr rss
    $( '.widget_flickrRSS img' ).hover(
        function() {
            $( this ).stop( true, true ).animate( { 'opacity' : 0.6 } );
        },
        function() {
            $( this ).stop( true, true ).animate( { 'opacity' : 1 } );
        }
    );
    
    /*
    // image lightbox
    $('a.thumb.video, a.thumb.img').hover(function(){
        $('<a class="zoom">zoom</a>').appendTo(this).css({
            dispay:'block', 
            opacity:0, 
            height:$(this).children('img').height(), 
            width:$(this).children('img').width(),
            'top':$(this).css('padding-top'),
            'left':$(this).css('padding-left'),
            padding:0}).animate({opacity:0.4}, 500);
        },        
        function(){           
            $('.zoom').fadeOut(500, function(){$(this).remove()});
        }
    );
    
    $("a[rel^='prettyPhoto']").prettyPhoto({
        slideshow:5000,
        theme: 'pp_default', 
        autoplay_slideshow:false,
        deeplinking: false,
        show_title:false
    });
	*/
});

})(jQuery);

// features tab plugin
(function($) {
    $.fn.yiw_features_tab = function( options ) {
        var config = {
            'tabNav' : 'ul.features-tab-labels',
            'tabDivs': 'div.features-tab-wrapper'
        };
        
        if( options ) $.extend( config, options );
        
        this.each( function () {
           var tabNav  = $( config.tabNav, this );
           var tabDivs = $( config.tabDivs, this );
           var labelNumber = tabNav.children( 'li' ).length;
           
           tabDivs.children( 'div' ).hide();
           
           var currentDiv = tabDivs.children( 'div' ).eq( tabNav.children( 'li.current-feature' ).index() );
           currentDiv.show();
           
           $( 'li', tabNav ).hover( function() {
               if( !$( this ).hasClass( 'current-feature' ) ) {
                   var currentDiv = tabDivs.children( 'div' ).eq( $( this ).index() );
                   tabNav.children( 'li' ).removeClass( 'current-feature' );
                   
                   $( this ).addClass( 'current-feature' );

                   tabDivs.children( 'div' ).hide().removeClass( 'current-feature' );
                   currentDiv.fadeIn( 'slow' );
                   
//                    if( tabNav.height() >= ( tabDivs.parent( 'div' ).height() - 1 ) && labelNumber == ( $( this ).index() + 1 ) ) {
//                        $( this ).css({
//                            'border-bottom'                     : 'none',
//                            'border-bottom-left-radius'         : '5px',
//                            '-webkit-border-bottom-left-radius' : '5px',
//                            '-moz-border-radius-bottomleft'     : '5px'
//                        });
//                    }
                   
                   //alert( tabNav.height() + '-' + ( tabDivs.parent( 'div' ).height() - 1 ) );
               }            
           });       
           
        });
    }
})(jQuery);

// tabs plugin
(function($) {
    $.fn.yiw_tabs = function(options) {
        // valori di default
        var config = {
            'tabNav': 'ul.tabs',
            'tabDivs': '.containers',
            'currentClass': 'current'
        };      
 
        if (options) $.extend(config, options);
    	
    	this.each(function() {   
        	var tabNav = $(config.tabNav, this);
        	var tabDivs = $(config.tabDivs, this);
        	var activeTab;
        	var maxHeight = 0;
        	
        	// height of tabs
//         	$('li', tabNav).each(function(){
//                 var tabHeight = $(this).height();
//                 if ( tabHeight > maxHeight )
//                     maxHeight = tabHeight;
//             });
//             $('li h4', tabNav).each(function(){
//                 $(this).height(maxHeight-40);
//             });
        	
            tabDivs.children('div').hide();
    	
    	    if ( $('li.'+config.currentClass+' a', tabNav).length > 0 )
               activeTab = '#' + $('li.'+config.currentClass+' a', tabNav).attr('href').split('#')[1]; 
        	else
        	   activeTab = '#' + $('li:first-child a', tabNav).attr('href').split('#')[1];
                        
        	$(activeTab).show().addClass('showing');
            $('li:first-child a', tabNav).parents('li').addClass(config.currentClass);
        	
        	$('a', tabNav).click(function(){
        		var id = '#' + $(this).attr('href').split('#')[1];
        		var thisLink = $(this);
        		
        		$('li.'+config.currentClass, tabNav).removeClass(config.currentClass);
        		$(this).parents('li').addClass(config.currentClass);
        		
        		$('.showing', tabDivs).fadeOut(200, function(){
        			$(this).removeClass('showing');
        			$(id).fadeIn(200).addClass('showing');
        		});
        		
        		return false;
        	});   
        });
    }
})(jQuery);     

;// ColorBox v1.3.19.3 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function Z(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function $(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function _(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function ab(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function bb(){var b,c=a.data(P,e);c==null?(K=a.extend({},d),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=a.extend({},c);for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function cb(b,c){a.event.trigger(b),c&&c.call(P)}function db(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(K.loop||y[Q+1])a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function eb(b){U||(P=b,bb(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e),c;return b&&(c=b.rel||this.rel),c===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1)),S||(S=T=!0,r.show(),K.returnFocus&&a(P).blur().one(l,function(){a(this).focus()}),q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=_(K.initialWidth,"x"),K.h=_(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),cb(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()),W.load(!0))}function fb(){!r&&b.body&&(Y=!1,z=a(c),r=Z(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}).hide(),q=Z(X,"Overlay",o?"position:absolute":"").hide(),s=Z(X,"Wrapper"),t=Z(X,"Content").append(A=Z(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Z(X,"LoadingOverlay").add(Z(X,"LoadingGraphic")),D=Z(X,"Title"),E=Z(X,"Current"),G=Z(X,"Next"),H=Z(X,"Previous"),F=Z(X,"Slideshow").bind(h,db),I=Z(X,"Close")),s.append(Z(X).append(Z(X,"TopLeft"),u=Z(X,"TopCenter"),Z(X,"TopRight")),Z(X,!1,"clear:left").append(v=Z(X,"MiddleLeft"),t,w=Z(X,"MiddleRight")),Z(X,!1,"clear:left").append(Z(X,"BottomLeft"),x=Z(X,"BottomCenter"),Z(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Z(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function gb(){return r?(Y||(Y=!0,L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))}),a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),eb(this))})),!0):!1}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=!a.support.opacity&&!a.support.style,o=n&&!c.XMLHttpRequest,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div",Y;if(a.colorbox)return;a(fb),W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},fb();if(gb()){if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b))}).addClass(g),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&eb(f[0])}return f},W.position=function(a,b){function i(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset(),g,h;z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),g=z.scrollTop(),h=z.scrollLeft(),K.fixed&&!o?(e.top-=g,e.left-=h,r.css({position:"fixed"})):(c=g,d=h,r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-_(K.right,"x"),0):K.left!==!1?d+=_(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-_(K.bottom,"y"),0):K.top!==!1?c+=_(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){i(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+f,W.position)},1),b&&b()},step:function(){i(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=_(a.width,"x")-O-M),a.innerWidth&&(K.w=_(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=_(a.height,"y")-N-L),a.innerHeight&&(K.h=_(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Z(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function s(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p,q;if(!S)return;l=function(){clearTimeout(V),C.hide(),cb(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[$(-1),$(1)];while(c=y[b.pop()])q=a.data(c,e),q&&q.href?(o=q.href,a.isFunction(o)&&(o=o.call(c))):o=c.href,ab(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Z("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,s):s()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||bb(),cb(m),cb(i,K.onLoad),K.h=K.height?_(K.height,"y")-N-L:K.innerHeight&&_(K.innerHeight,"y"),K.w=K.width?_(K.width,"x")-O-M:K.innerWidth&&_(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=_(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=_(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Z(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):ab(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Z(X,"Error").html(K.imgError))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Z(X,"Error").html(K.xhrError):a(this).contents())})},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=$(1),W.load())},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=$(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,cb(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),cb(m),A.remove(),setTimeout(function(){U=!1,cb(l,K.onClosed)},1)}))},W.remove=function(){a([]).add(r).add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g).die()},W.element=function(){return a(P)},W.settings=d})(jQuery,document,this);
;/*
 * tweetable 1.6 - jQuery twitter feed generator plugin
 *
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * With modifications from Philipp Robbel (http://www.robbel.com/) and Patrick DW (stackoverflow)
 * for IE compatibility.
 *
 * Revision: $Id: jquery.tweetable.js 2011-01-06 $ 
 *
 */
(function ($) {
    //define the tweetable plugin
    $.fn.tweetable = function (options) {
        //specify the plugins defauls
        var defaults = {
            limit: 5, 						//number of tweets to show
            username: 'philipbeel', 	//@username tweets to display
            time: false, 					//display date
            replies: false,				//filter out @replys
            position: 'append',			//append position
            listClass: 'tweets-widget',			//append position
            loaded: function() {}
        };
        //overwrite the defaults
        var options = $.extend(defaults, options);
		//loop through each instance
        return this.each(function (options) {
			//assign our initial vars
            var act = $(this);
            var $tweetList;
            var tweetMonth = '';
            var shortMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var api = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=";
            var count = "&count=";
            //do a JSON request to twitters API
            $.getJSON(api + defaults.username + count + defaults.limit + "&callback=?", act, function (data) {
				//loop through twitters response
                $.each(data, function (i, item) {
					//check for the first loop
                    if (i == 0) {
                    	//create an unordered list to store tweets in
                        $tweetList = $('<ul class="'+defaults.listClass+'">')[defaults.position.toLowerCase() + 'To'](act);
                    }
                    //handle @reply filtering if required
                    if (defaults.replies === false) {
                        if (item.in_reply_to_status_id === null) {
                            $tweetList.append('<li class="tweet_content_' + i + '"><p class="tweet_link_' + i + '">' + item.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2')+'</p></li>');
                        }
                    } else {
                        $tweetList.append('<li class="tweet_content_' + i + '"><p class="tweet_link_' + i + '">' + item.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2') + '</p></li>');
                    }
                    //display the tiem of tweet if required
                    if (defaults.time == true) {
                    	for(var iterate=0; iterate<=12; iterate++) {
                    		if(shortMonths[iterate] == item.created_at.substr(4, 3)) {
								tweetMonth = iterate + 1;
								if(tweetMonth < 10) {
									tweetMonth = '0' + tweetMonth;
								}
	                   		} 	
                    	}
                        $('.tweet_link_' + i).append('<p class="meta"> @' + item.created_at.substr(8, 2) + '/' + tweetMonth + '/' + item.created_at.substr(26,4) + ' ' + item.created_at.substr(11,8) + '</p>');
                    }
                });
                
                defaults.loaded();
                //close the unordered list
               });
        });
    }
})(jQuery);
;(function($) {          

jQuery( document ).ready( function( $ ) {
	$('body').removeClass('no_js');
    //Adds navigation submenus indicators
    $('div.menu ul > li').each(function(){
        if( $('ul', this).length > 0 )
            $(this).children('a').append('<span class="sub-indicator"> &raquo;</span>');
    });                  
    
    // menu in responsive, with select
    if( $('body').hasClass('responsive') ) {  
        $('#nav').parent().after('<div class="menu-select"></div>');
        $('#nav').clone().appendTo('.menu-select');  
        $('.menu-select #nav').attr('id', 'nav-select').after('<div class="arrow-icon"></div>');
                  
        $( '#nav-select' ).hide().mobileMenu({
            subMenuDash : '-'
        });
//         
//         $( '#nav > ul, #nav .menu > ul' ).hide();
    }
    
    //play, zoom on image hover
	var yit_lightbox;
	(yit_lightbox = function(){
	    jQuery('a.thumb.video, a.thumb.img, img.thumb.img, img.thumb.project, .work-thumbnail a, .three-columns li a, .onlytitle, .overlay_a img, .nozoom img').hover(
	        function()
	        {
	            jQuery(this).next('.overlay').fadeIn(500);
	            jQuery(this).next('.overlay').children('.lightbox, .details, .lightbox-video').animate({
	                bottom:'40%'
	            }, 300);
	            
	            jQuery(this).next('.overlay').children('.title').animate({
	                top:'30%'
	            }, 300);
	        }
	    );
	    
	    jQuery( '.overlay' ).hover(
	        function() {},
	        function()
	        {
	            jQuery(this).children('.lightbox, .details, .lightbox-video').animate({
	                bottom:'0%'
	            }, 300);
	            jQuery(this).children('.title').animate({
	                top:'0%'
	            }, 300);
	            jQuery(this).fadeOut(300);
	        }
	    );
	    
	    // image lightbox
	    $('a.thumb.video, a.thumb.img, a.related_detail, a.related_proj, a.related_video, a.related_title, a.project, a.onlytitle').hover(function(){
	        $('<a class="zoom"></a>').appendTo(this).css({
	            dispay:'block', 
	            opacity:0, 
	            height:$(this).children('img').height(), 
	            width:$(this).children('img').width(),
	            'top': $(this).parents('.portfolio-filterable').length ? '-1px' : $(this).css('padding-top'),
	            'left':$(this).parents('.portfolio-filterable').length ? '-1px' : $(this).css('padding-left'),
	            padding:0}).append('<span>' + $(this).attr('title') + '</span>').animate({opacity:0.7}, 500);
	        },        
	        function(){           
	            $('.zoom').fadeOut(500, function(){$(this).remove()});
	        }
	    );
	    
	    $('.zoom').live('click', function(){
	    	if( $.browser.msie ) {
	    		$(this).attr('href', $(this).parent().attr('href'));
	    	}
	    });
	    
	    if( jQuery( 'body' ).hasClass( 'isMobile' ) ) {
	        jQuery("a.thumb.img, .overlay_img, .section .related_proj").colorbox({
	            transition:'elastic',
	            rel:'lightbox',
	    		fixed:true,
	    		maxWidth: '100%',
	    		maxHeight: '100%',
	    		opacity : 0.7
	        });
	        
	        jQuery(".section .related_lightbox").colorbox({
	            transition:'elastic',
	            rel:'lightbox2',
	    		fixed:true,
	    		maxWidth: '100%',
	    		maxHeight: '100%',
	    		opacity : 0.7
	        });
	    } else {
	        jQuery("a.thumb.img, .overlay_img, .section.portfolio .related_proj").colorbox({
	            transition:'elastic',
	            rel:'lightbox',
	    		fixed:true,
	    		maxWidth: '80%',
	    		maxHeight: '80%',
	    		opacity : 0.7
	        });   
	        
	        jQuery(".section.portfolio .related_lightbox").colorbox({
	            transition:'elastic',
	            rel:'lightbox2',
	    		fixed:true,
	    		maxWidth: '80%',
	    		maxHeight: '80%',
	    		opacity : 0.7
	        });   
	    }
	    
	    jQuery("a.thumb.video, .overlay_video, .section.portfolio .related_video").colorbox({
	        transition:'elastic',
	        rel:'lightbox',
			fixed:true,
			maxWidth: '60%',
			maxHeight: '80%',
	        innerWidth: '60%',
	        innerHeight: '80%',
			opacity : 0.7,
	        iframe: true,
	        onOpen: function() { $( '#cBoxContent' ).css({ "-webkit-overflow-scrolling": "touch" }) }
	    });
	    jQuery(".section.portfolio .lightbox_related_video").colorbox({
	        transition:'elastic',
	        rel:'lightbox2',
			fixed:true,
			maxWidth: '60%',
			maxHeight: '80%',
	        innerWidth: '60%',
	        innerHeight: '80%',
			opacity : 0.7,
	        iframe: true,
	        onOpen: function() { $( '#cBoxContent' ).css({ "-webkit-overflow-scrolling": "touch" }) }
	    });
	})();      

    function megamenu_dropdown() {
        /* === DROPDOWN */
        //Dropdown show/hide functions
        var cur_height = $( '#header div.menu.megamenu > ul' ).height();
        var show_dropdown = function() {
            if( $( this ).children( '.sub-menu, .children' ).length != 0 ) {    
                var height = 0;
                $( '.sub-menu, .children' ).each( function( ) {
                    
                    if( $( this ).parent().parent().parent().hasClass( 'menu' ) ) {
                        if( $( this ).height() > height )
                            { height = $( this ).height(); }
                    }
                } ); 
                
                var menu_height = height + cur_height + 20;
                $( '#header div.menu.megamenu > ul' ).stop( true, true ).animate( { height: menu_height } );
                $( '#header div.menu.megamenu > ul' ).addClass('box-shadow'); 
    
                /*
                if( $( '#menu-shadow' ).css( 'bottom' ) == '28px' ) {
                    if( !$( 'body' ).hasClass( 'page-template-home-php' ) && !$( 'body' ).hasClass( 'home' ) ) {
                        $( '#menu-shadow' ).animate( { bottom : '-' + ( menu_height - cur_height - 6 - parseInt( $( '#header div.menu > ul' ).css( 'margin-top' ) ) ) } ).show();
                    } else {
                        $( '#menu-shadow' ).animate( { bottom : '-' + ( menu_height - cur_height - 6 ) } ).show();
                    }
                }
                */
            }   
        }
        
        var hide_dropdown = function() {  
            $( '#header div.menu.megamenu > ul' ).stop( true, true ).animate( { height: cur_height } );
            $( '#header div.menu.megamenu > ul' ).removeClass('box-shadow');
            //$( '#menu-shadow' ).animate( { bottom : '28px' } ).hide();    
        }
        
        $( '#header div.menu.megamenu > ul > li' ).hover( show_dropdown );
        $( '#header div.menu.megamenu' ).hover( function() {}, hide_dropdown );
        
        //Dropdown shadow
        $( '#menu-shadow' ).hide();
        /*
        $( '#menu-shadow' ).css({
            'width' : $( 'body' ).hasClass( 'stretched' ) ? $( window ).outerWidth() : $( '#header .inner' ).width(),
            'left'  : '0px'
        });
        */
        
        //Stretched menu. DAMNED MENU!
        yit_stretch_the_menu();
        
        $( window ).resize( function() {
            yit_stretch_the_menu();  
        } );
    }
    
    function classic_dropdown() {
        var show_dropdown = function()
        {        
            var options;
            
            containerWidth = $('#header').width();
            marginRight = $('.classic ul#nav > li').css('margin-right');
            submenuWidth = $('.classic #nav ul.sub-menu').width();
            offsetMenuRight = $(this).position().left + submenuWidth;
            leftPos = -18;
            
            if ( offsetMenuRight > containerWidth )
                options = { left:leftPos - ( offsetMenuRight - containerWidth ) };    
            else
                options = {};
            
            $('ul.sub-menu:not(ul.sub-menu li > ul.sub-menu), ul.children:not(ul.children li > ul.children)', this).css(options).stop(true, true).fadeIn(300);    
        }
        
        var hide_dropdown = function()
        {
            $('ul.sub-menu:not(ul.sub-menu li > ul.sub-menu), ul.children:not(ul.children li > ul.children)', this).fadeOut(300);    
        }
            
        $('ul#nav > li').hover( show_dropdown, hide_dropdown ); 
        
        $('#nav li ul.sub-menu li, #nav li ul.children li').hover(
            function()
            {                  
                var options;
                
                containerWidth = $('#header').width();
                containerOffsetRight = $('#header').offset().left + containerWidth;
                submenuWidth = $('ul.sub-menu, ul.children', this).parent().width();
                offsetMenuRight = $(this).offset().left + submenuWidth * 2;
                leftPos = -10;
                
                if ( offsetMenuRight > containerOffsetRight )
                    $(this).addClass('left');
                    
                $('ul.sub-menu, ul.children', this).stop(true, true).fadeIn(300);
            },
        
            function()
            {
                $('ul.sub-menu, ul.children', this).fadeOut(300);
            }
        );   
    }  
    
    if ( $('#header .menu').hasClass('megamenu') ) {
        megamenu_dropdown();    
    } else {
        classic_dropdown();
    }
    
    //Form fields shadow
    $( 'form input[type="text"], form textarea' ).focus(function() {
        if( $( this ).hasClass( 'error' ) ) {
            $( this ).addClass( 'formRed' ).addClass( 'formShadowRed' );
        } else {
            $( this ).addClass( 'formBlue' );
        } 
    });
    
    $( 'form input[type="text"], form textarea' ).blur(function() {
        $( this ).removeClass( 'formBlue' ).removeClass( 'formGrey' ).removeClass( 'formShadowRed' );
    }); 
            
              
    //FILTERABLE
    if( $('.portfolio-filterable').length > 0 ) {
    	$('.gallery-categories-disabled, .portfolio-categories-disabled').addClass('gallery-categories-quicksand');
    }
    
    
    $(".gallery-wrap .internal_page_item .overlay, .section .related_project .overlay").css({opacity:0});
	$(".gallery-wrap .internal_page_item, .section .related_project > div").live( 'mouseover mouseout', function(event){ 
		if ( event.type == 'mouseover' ) $('.overlay', this).show().stop(true,false).animate({ opacity: .7 }, "fast"); 
		if ( event.type == 'mouseout' )  $('.overlay', this).animate({ opacity: 0 }, "fast", function(){ $(this).hide() }); 
	});
	
    var read_button = function(class_names) {
        
        var r = {
            selected: false,
            type: 0
        };
        
        for (var i=0; i < class_names.length; i++) {
            
            if (class_names[i].indexOf('selected-') == 0) {
                r.selected = true;
            }
        
            if (class_names[i].indexOf('segment-') == 0) {
                r.segment = class_names[i].split('-')[1];
            }
        };
        
        return r;
        
    };

    var determine_sort = function($buttons) {
        var $selected = $buttons.parent().filter('[class*="selected-"]');
        return $selected.find('a').attr('data-value');
    };

    var determine_kind = function($buttons) {
        var $selected = $buttons.parent().filter('[class*="selected-"]');
        return $selected.find('a').attr('data-value');
    };

    var $preferences = {
        duration: 500,
        adjustHeight: 'auto'
    }

    var $list = jQuery('.gallery-wrap');
    var $data = $list.clone();

    var $controls = jQuery('.portfolio-categories-quicksand, .gallery-categories-quicksand');

    $controls.each(function(i) {

        var $control = jQuery(this);
        var $buttons = $control.find('a');
        var height_list = $list.height();
        
        $('li:first-child', $control).addClass('selected');

        $buttons.bind('click', function(e) {

            var $button = jQuery(this);
            var $button_container = $button.parent();
            var button_properties = read_button($button_container.attr('class').split(' '));      
            var selected = button_properties.selected;
            var button_segment = button_properties.segment;

            if (!selected) {

                $buttons.parent().removeClass();
                $button_container.addClass('selected selected-' + button_segment).parent().children('li:first-child').addClass('first');

                var sorting_type = determine_sort($controls.eq(1).find('a'));
                var sorting_kind = determine_kind($controls.eq(0).find('a'));

                if (sorting_kind == 'all') {
                    var $filtered_data = $data.find('li');
                } else {
                    var $filtered_data = $data.find('li.' + sorting_kind);
                }

                var $sorted_data = $filtered_data.sorted({
                    by: function(v) {
                        return $(v).find('strong').text().toLowerCase();
                    }
                });

                $list.quicksand($sorted_data, $preferences, function () {
                        yit_lightbox();
                        
                        var current_height = $list.height();       
                        //$('.hentry-post').animate( { 'min-height':$list.height() }, 300 );
                        
                        
                        
                        var postsPerRow = ( $('.layout-sidebar-right').length > 0 || $('.layout-sidebar-left').length > 0 ) ? 3 : 4;
                        
                        $('.gallery-wrap li')
                            .removeClass('group')
                            .each(function(i){
                                $(this).find('div')
                                    //.removeClass('internal_page_item_first') 
                                    .removeClass('internal_page_item_last');
                                
                                if( (i % postsPerRow) == 0 ) {
                                    //$(this).addClass('group');
                                    //$(this).find('div').addClass('internal_page_item_first'); 
                                } else if((i % postsPerRow) == 2) {
                                    $(this).find('div').addClass('internal_page_item_last');
                                }
                            });
                            
                        $('.gallery-wrap:first').css('height',0);
                        
                });
    
            }
    
            e.preventDefault();
            
        });
    
    });
    
	//$('.gallery-categories-disabled, .portfolio-categories-disabled').live('click', function(e){
	//	e.preventDefault();
	//});

//ipad and iphone fix
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) ||   (navigator.userAgent.match(/iPad/i))) {
	$('#nav > li > a').click(function(){
		if( !$(this).hasClass('clickable') ) {
			$(this).addClass('clickable');
			return false;			
		}
	});
}

});

                           
        
    $.fn.sorted = function(customOptions) {
        var options = {
            reversed: false,
            by: function(a) {
                return a.text();
            }
        };

        $.extend(options, customOptions);

        $data = jQuery(this);
        arr = $data.get();
        arr.sort(function(a, b) {

            var valA = options.by($(a));
            var valB = options.by($(b));
    
            if (options.reversed) {
                return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;              
            } else {        
                return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;  
            }
    
        });

        return $(arr);

    };
    
    function yit_stretch_the_menu() { 
        if( $( 'body' ).hasClass( 'stretched' ) && $( window ).outerWidth() > 1024 ) {
            $( '#header .inner:not(.menu-select)' ).width( $( window ).width() );
            
            var space = ( ( $( window ).width() - $( '#primary .inner' ).width() ) / 2 ) + 'px';
            $( '#header div.menu > ul > li:first-child, #logo' ).css( 'margin-left', space  );
            $( '#sidebar-header' ).css( 'margin-right', space ).css( 'width', '41%' );
        } else {
            $( '#header div.menu > ul > li:first-child, #logo' ).css( 'margin-left', 0 );
        }
    }




})(jQuery);


;jQuery(document).ready(function($){     
    
    // contact                           
    var error = true;      
    
    function addLoading( e )
    {
		$(e).val( '{wait}'.replace('{wait}', contactForm.wait) ).attr('disabled', true);
	}    
    
    function removeLoading( e )
    {
		$(e).val(value_submit).attr('disabled', false);
	}
	
	function addError(msg, e, effect)
	{
		error = true;           
		$(e).removeClass('icon success');
		$(e).addClass('icon error');
		$(e).parents('li').find('.msg-error').text(msg);	
		if( effect !== undefined && effect == true )
		{
			$(e).css({position:'relative'}).animate({left:-10}, 100).animate({left:10}, 100).animate({left:-5}, 100).animate({left:5}, 100).animate({left:0}, 100);
		}
	}                 
	
	function addSuccess(e)
	{                                     
		$(e).addClass('icon success');	
	}
	
	function removeError(e)
	{
		error = false;
		$(e).parents('li').find('.msg-error').text('');     
		$(e).removeClass('icon error');
        $(e).removeClass( 'formRed')
		addSuccess(e);
	}           
    	
	$('.contact-form .required').blur(function(){             
		var name = $(this).attr('name').match( /(.*)\[(.*)\]/ );
		var id_form = $(this).parents('.contact-form').find('input[name="id_form"]').val(); 
		
		jQuery.globalEval( 'var msg = messages_form_'+id_form+'.'+name[2] );  
		
		if( $(this).val() == '' )
			addError( msg, this );       
		else               
			removeError(this);
	});                
	
	$('.contact-form .email-validate').blur(function(){             
		var expr = /^[_a-z0-9+-]+(\.[_a-z0-9+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/;
		var name = $(this).attr('name').match( /(.*)\[(.*)\]/ );       
		var id_form = $(this).parents('.contact-form').find('input[name="id_form"]').val();
		
		jQuery.globalEval( 'var msg = messages_form_'+id_form+'.'+name[2] );
		
		if( ( $(this).val() != '' && !expr.test( $(this).val() ) ) || ( $(this).is('.required') && $(this).val() == '' ) )  
			addError( msg, this );            
		else 
			removeError(this);
	});    
    
	$('.contact-form').submit(function(){
		addLoading( '.contact-form input:submit' );  
	});       
   
});   
;/**
 * jQuery Mobile Menu 
 * Turn unordered list menu into dropdown select menu
 * version 1.0(31-OCT-2011)
 * 
 * Built on top of the jQuery library
 *   http://jquery.com
 * 
 * Documentation
 * 	 http://github.com/mambows/mobilemenu
 */
(function($){
$.fn.mobileMenu = function(options) {

	var defaults = {
			defaultText: 'Navigate to...',
			className: 'select-menu',
			subMenuClass: 'sub-menu',
			subMenuDash: '&ndash;'
		},
		settings = $.extend( defaults, options ),
		el = $(this);

	this.each(function(){
		// ad class to submenu list
		el.find('ul').addClass(settings.subMenuClass);

		// Create base menu
		$('<select />',{
			'class' : settings.className
		}).insertAfter( el );

		// Create default option
		$('<option />', {
			"value"		: '#',
			"text"		: settings.defaultText
		}).appendTo( '.' + settings.className );

		// Create select option from menu
		el.find('a').each(function(){
			var $this 	= $(this),
					optText	= '&nbsp;' + $this.text(),
					optSub	= $this.parents( '.' + settings.subMenuClass ),
					len			= optSub.length,
					dash;

			// if menu has sub menu
			if( $this.parents('ul').hasClass( settings.subMenuClass ) ) {
				dash = Array( len+1 ).join( settings.subMenuDash );
				optText = dash + optText;
			}

			// Now build menu and append it
			$('<option />', {
				"value"	: this.href,
				"html"	: optText,
				"selected" : (this.href == window.location.href)
			}).appendTo( '.' + settings.className );

		}); // End el.find('a').each

		// Change event on select element
		$('.' + settings.className).change(function(){
			var locations = $(this).val();
			if( locations !== '#' ) {
				window.location.href = $(this).val();
			};
		});

	}); // End this.each

	return this;

};
})(jQuery);
;
//# sourceMappingURL=scripts.bundle.js.map