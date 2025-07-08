/*
  Common dependencies
*/

/* js-cookie v3.0.0-rc.1 | MIT */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var n = e.Cookies, r = e.Cookies = t(); r.noConflict = function () { return e.Cookies = n, r } }()) }(this, function () { "use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) e[r] = n[r] } return e } var t = { read: function (e) { return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }; return function n(r, o) { function i(t, n, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), n = r.write(n, t); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + n + c } } return Object.create({ set: i, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var n = document.cookie ? document.cookie.split("; ") : [], o = {}, i = 0; i < n.length; i++) { var c = n[i].split("="), u = c.slice(1).join("="); '"' === u[0] && (u = u.slice(1, -1)); try { var f = t.read(c[0]); if (o[f] = r.read(u, f), e === f) break } catch (e) { } } return e ? o[e] : o } }, remove: function (t, n) { i(t, "", e({}, n, { expires: -1 })) }, withAttributes: function (t) { return n(this.converter, e({}, this.attributes, t)) }, withConverter: function (t) { return n(e({}, this.converter, t), this.attributes) } }, { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(r) } }) }(t, { path: "/" }) });

/* base64.js | https://gist.github.com/chrisveness/e121cffb51481bd1c142 | MIT */
function Base64Encode(r){if(/([^\u0000-\u00ff])/.test(r))throw Error("String must be ASCII");var t,e,n,o,h,a,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=[],c="";if((a=r.length%3)>0)for(;a++<3;)c+="=",r+="\0";for(a=0;a<r.length;a+=3)e=(t=r.charCodeAt(a)<<16|r.charCodeAt(a+1)<<8|r.charCodeAt(a+2))>>18&63,n=t>>12&63,o=t>>6&63,h=63&t,f[a/3]=i.charAt(e)+i.charAt(n)+i.charAt(o)+i.charAt(h);return r=(r=f.join("")).slice(0,r.length-c.length)+c}function Base64Decode(r){if(!/^[a-z0-9+/]+={0,2}$/i.test(r)||r.length%4!=0)throw Error("Not base64 string");for(var t,e,n,o,h,a,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=[],c=0;c<r.length;c+=4)t=(a=i.indexOf(r.charAt(c))<<18|i.indexOf(r.charAt(c+1))<<12|(o=i.indexOf(r.charAt(c+2)))<<6|(h=i.indexOf(r.charAt(c+3))))>>>16&255,e=a>>>8&255,n=255&a,f[c/4]=String.fromCharCode(t,e,n),64==h&&(f[c/4]=String.fromCharCode(t,e)),64==o&&(f[c/4]=String.fromCharCode(t));return r=f.join("")};

if (typeof window.atob === 'undefined') {
  window.atob = Base64Decode;
}

if (typeof window.btoa === 'undefined') {
  window.btoa = Base64Encode;
}

/* cross-browser shim that fully implements element.classList | http://purl.eligrey.com/github/classList.js/blob/master/classList.js | Unlicense */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","The token must not contain space characters.");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return~a(this,t+"")},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",~a(this,t)||(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=a(this,t);~e;)this.splice(e,1),r=!0,e=a(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.replace=function(t,e){var n=a(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(p){void 0!==p.number&&-2146823252!==p.number||(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),i=n.indexOf(t+"");~i&&(n=n.slice(i),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}());

/* String.prototype.startsWith() polyfill */
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (str, pos) {
    if (pos) {
      return this.slice(pos || 0, str.length) === str;
    } else {
      return this.indexOf(str) === 0;
    }
  };
}

/* Object.keys() polyfill | https://vanillajstoolkit.com/polyfills/objectkeys/ | MIT */
if (!Object.keys) {
  Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

/*
  Util
  Version: 1.0.0
*/

window.Util = {
  _debug: {},
};

Util.getCurrentUts = function () {
  return Math.floor((new Date()).getTime() / 1000);
};

Util.getCurrentUtms = function () {
  return (new Date()).getTime();
};

Util.getDictSnapshot = function (data, refFallback) {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (exc) {
    console.error(exc);
  }

  if (typeof refFallback === 'undefined') {
    refFallback = true;
  }

  return refFallback ? data : {};
};

Util.isDebugMode = function (context) {
  if (typeof this._debug[context] !== 'undefined') {
    return this._debug[context];
  }

  if (
    localStorage.getItem(context + '.debug') === 'true'
    || Cookies.get(context + '.debug') === 'true'
  ) {
    this._debug[context] = true;
  } else {
    this._debug[context] = false;
  }

  return this._debug[context];
};

Util.logDebug = function (context, message, data, logRawData) {
  if (!Util.isDebugMode(context)) {
    return;
  }

  if (typeof logRawData === 'undefined') {
    logRawData = false;
  }

  if (typeof data === 'undefined') {
    console.log(Util.getCurrentUtms().toString() + ' ' + context + ' -> ' + message);
  } else {
    console.log(Util.getCurrentUtms().toString() + ' ' + context + ' -> ' + message, logRawData ? data : Util.getDictSnapshot(data));
  }
};

Util.logWarning = function (context, message, data, logRawData) {
  if (typeof logRawData === 'undefined') {
    logRawData = false;
  }

  if (typeof data === 'undefined') {
    console.warn(Util.getCurrentUtms().toString() + ' ' + context + ' -> ' + message);
  } else {
    console.warn(Util.getCurrentUtms().toString() + ' ' + context + ' -> ' + message, logRawData ? data : Util.getDictSnapshot(data));
  }
};

Util.logError = function (context, message, data, logRawData) {
  if (typeof logRawData === 'undefined') {
    logRawData = false;
  }

  if (typeof message !== 'string') { // handy for traceback logs
    console.error(message);

    return;
  }

  if (typeof data === 'undefined') {
    console.error(Util.getCurrentUtms().toString() + ' ' + context + ' -> ' + message);
  } else {
    console.error(Util.getCurrentUtms().toString() + ' ' + context + ' -> ' + message, logRawData ? data : Util.getDictSnapshot(data));
  }
};

Util._isDebugMode = function () {
  return Util.isDebugMode('Util');
};

Util._logDebug = function (message, data, logRawData) {
  return Util.logDebug('Util', message, data, logRawData);
};

Util._logError = function (message, data, logRawData) {
  return Util.logError('Util', message, data, logRawData);
};

Util.attachCss = function (params) {
  var cssId = params.id;
  var cssPath = params.path;
  var callback = params.callback;

  if (document.getElementById(cssId)) {
    return;
  }

  var cssElm = document.createElement('link');

  cssElm.id = cssId;
  cssElm.rel = 'stylesheet';
  cssElm.type = 'text/css';
  cssElm.href = cssPath;

  if (typeof callback === 'function') {
    cssElm.onload = callback;
  }

  document.head.appendChild(cssElm);
};

Util.attachScript = function (params) {
  var scriptId = params.id;
  var scriptPath = params.path;
  var entityName = params.entityName;
  var callback = params.callback;

  if (document.getElementById(scriptId)) {
    return;
  }

  var scriptElm = document.createElement('script');

  scriptElm.id = scriptId;
  scriptElm.type = 'text/javascript';
  scriptElm.src = scriptPath;

  document.head.appendChild(scriptElm);

  if (
    typeof entityName !== 'undefined'
    && typeof callback === 'function'
  ) {
    Util.objFieldOnSetCallback({
      scopeRef: window,
      fieldName: entityName,
      callback: callback
    });
  }
};

Util.ObjFieldLookupControlState = function () { // state class
  this.lazyHalt = false; // waits lookup interval to complete
  this._halt = undefined;
  this._completed = undefined;
  this._elapsedTime = undefined; // milliseconds
};

Util.objFieldOnSetCallback = function (params) {
  var scopeRef = (typeof params.scopeRef !== 'undefined') ? params.scopeRef : window;
  var fieldName = params.fieldName;
  var callback = params.callback;

  var explicitValueEqualsIsSet = false;
  var explicitValueNotEqualsIsSet = false;

  var explicitValue = undefined;

  if (typeof params.fieldValue !== 'undefined') {
    explicitValue = params.fieldValue;

    if (typeof params.fieldValueEquals !== 'undefined') {
      explicitValueEqualsIsSet = params.fieldValueEquals === true;
    } else {
      explicitValueEqualsIsSet = true; // defaults to equal check
    }

    explicitValueNotEqualsIsSet = !explicitValueEqualsIsSet;
  }

  var lookupControlRef = (typeof params.lookupControlRef !== 'undefined') ? params.lookupControlRef : new Util.ObjFieldLookupControlState();
  var lookupTimeout = (typeof params.lookupTimeout !== 'undefined') ? params.lookupTimeout : 300; // seconds
  var lookupIntervalStep = (typeof params.lookupIntervalStep !== 'undefined') ? params.lookupIntervalStep : 5;
  var debug = (typeof params.debug !== 'undefined') ? params.debug : false;

  var intervalHandler = null;

  lookupControlRef._completed = false;
  lookupControlRef._elapsedTime = 0;

  lookupControlRef._halt = function () {
    clearInterval(intervalHandler);
    if (lookupControlRef._completed) {
      return;
    }
    lookupControlRef._completed = true;
    callback({
      error: {
        code: 'OFOSCHLT',
        description: 'objFieldOnSetCallback halt',
        meta: {
          fieldName: fieldName
        }
      },
      data: scopeRef[fieldName]
    });
  };

  var _fieldMeetsConditions = function (scopeRef) {
    var fieldIsSet = typeof scopeRef[fieldName] !== 'undefined';

    if (explicitValueEqualsIsSet) {
      return (fieldIsSet && scopeRef[fieldName] === explicitValue);
    }

    if (explicitValueNotEqualsIsSet) {
      return (fieldIsSet && scopeRef[fieldName] !== explicitValue);
    }

    return fieldIsSet;
  }

  if (_fieldMeetsConditions(scopeRef)) {
    lookupControlRef._completed = true;
    lookupControlRef._halt = undefined;

    callback({
      error: {
        code: '0'
      },
      data: scopeRef[fieldName]
    });
    return;
  }

  var lookupTimeoutMs = lookupTimeout * 1000;

  intervalHandler = setInterval(function () {
    if (debug) {
      console.log('lookupControlRef: ' + JSON.stringify(lookupControlRef));
    }

    if (lookupControlRef.lazyHalt) {
      clearInterval(intervalHandler);
      lookupControlRef._completed = true;
      lookupControlRef._halt = undefined;
      callback({
        error: {
          code: 'OFOSCLHLT',
          description: 'objFieldOnSetCallback lazy halt',
          meta: {
            fieldName: fieldName
          }
        },
        data: scopeRef[fieldName]
      });
      return;
    }

    if (_fieldMeetsConditions(scopeRef)) {
      clearInterval(intervalHandler);
      lookupControlRef._completed = true;
      lookupControlRef._halt = undefined;
      callback({
        error: {
          code: '0'
        },
        data: scopeRef[fieldName]
      });
      return;
    }

    lookupControlRef._elapsedTime += lookupIntervalStep;

    if (lookupControlRef._elapsedTime >= lookupTimeoutMs) {
      clearInterval(intervalHandler);
      lookupControlRef._completed = true;
      lookupControlRef._halt = undefined;
      callback({
        error: {
          code: 'OFOSCTO',
          description: 'objFieldOnSetCallback timeout',
          meta: {
            fieldName: fieldName,
            lookupTimeout: lookupTimeout
          }
        },
        data: scopeRef[fieldName]
      });
      return;
    }
  }, lookupIntervalStep);
};

Util.getMetaPreparedFromException = function (exc) {
  Util._logDebug('getMetaPreparedFromException');

  if (Util._isDebugMode()) {
    Util._logError(exc);
  }

  var output = {
    code: '2',
    description: 'Internal error',
  };

  // if (exc instanceof Exception) {
  //   output.code = exc.code;
  //   output.description = exc.description;

  //   if (typeof exc.meta !== 'undefined') {
  //     output.meta = exc.meta;
  //   }
  // } else
  if (exc instanceof Error) {
    output.description = exc.message;
  } else if (typeof exc === 'string') {
    output.description = exc;
  }

  return output;
};

Util.parseJson = function (
  jsonStr,
  requiredFields,
) {
  var output = {
    error: {
      code: '1',
      description: 'Failed to parse JSON'
    },
    data: {},
  };

  try {
    output.data = JSON.parse(jsonStr);

    if (typeof requiredFields !== 'undefined') {
      for (var i = 0; i < requiredFields.length; i++) {
        var key = requiredFields[i];

        if (
          typeof output.data[key] === 'undefined'
        ) {
          output.error = {
            code: 'FINPID',
            description: 'Field is not present in data',
            meta: {
              key: key,
            }
          };

          return output;
        }
      }
    }

    output.error = { code: '0' };
  } catch (exc) {
    output.error = Util.getMetaPreparedFromException(exc);
  }

  return output;
};

Util.fetch = function (params) {
  var context = (typeof params.context !== 'undefined') ? params.context : 'Unknown';
  var method = (typeof params.method !== 'undefined') ? params.method : 'POST';
  var url = params.url;
  var data = params.data;
  var callback = params.callback;
  var reqTimeout = (typeof params.reqTimeout !== 'undefined') ? params.reqTimeout : 15000; // milliseconds
  var headers = (typeof params.headers !== 'undefined') ? params.headers : {};
  var sendCookies = (typeof params.sendCookies !== 'undefined') ? params.sendCookies : false; // aka withCredentials
  var withUserSession = (typeof params.withUserSession !== 'undefined') ? params.withUserSession : true; // access token auth header
  var handleUserSessionRefresh = (typeof params.handleUserSessionRefresh !== 'undefined') ? params.handleUserSessionRefresh : withUserSession;
  var handleUserSessionRedirection = (typeof params.handleUserSessionRedirection !== 'undefined') ? params.handleUserSessionRedirection : undefined;
  var retriedAfterUserSessionRefresh = (typeof params.retriedAfterUserSessionRefresh !== 'undefined') ? params.retriedAfterUserSessionRefresh : false;
  var prepareResponseData = (typeof params.prepareResponseData !== 'undefined') ? params.prepareResponseData : true;

  var xhr = new XMLHttpRequest();

  var reqRes = {
    error: {
      code: '0'
    },
    context: context,
    status: 0,
    contentType: undefined,
    dataStr: '',
    data: null,
  };

  var submitResponse = function (_reqRes) {
    Util._logDebug('fetch -> submitResponse -> init -> reqRes: ', _reqRes);

    if (
      prepareResponseData
      && _reqRes.contentType
      && _reqRes.contentType.indexOf('application/json') !== -1
    ) {
      var parseJsonRes = Util.parseJson(_reqRes.dataStr);

      if (parseJsonRes.error.code !== '0') {
        if (_reqRes.error.code === '0') {
          _reqRes.error = parseJsonRes.error;
        }

        _reqRes.data = parseJsonRes.data;
      } else {
        if (typeof parseJsonRes.data.error !== 'undefined') {
          _reqRes.error = parseJsonRes.data.error;
        }

        if (typeof parseJsonRes.data.data !== 'undefined') {
          _reqRes.data = parseJsonRes.data.data;
        } else {
          _reqRes.data = parseJsonRes.data;
        }
      }
    }

    Util._logDebug('fetch -> submitResponse -> callback -> reqRes: ', _reqRes);

    callback(_reqRes);
  };

  var reqTimeout = setTimeout(function () {
    reqRes.error = {
      code: 'RWTE',
      description: 'Request wait time exceeded'
    };

    submitResponse(reqRes);
  }, reqTimeout);

  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      clearTimeout(reqTimeout);

      reqRes.status = this.status;
      reqRes.dataStr = this.responseText;
      reqRes.contentType = this.getResponseHeader('Content-Type');

      if (typeof reqRes.status !== 'undefined' && reqRes.status) {
        if (reqRes.status == 401) {
          reqRes.error = {
            code: 'UNAUTHORIZED',
            description: 'Request unauthorized'
          };
        } else if (!(reqRes.status >= 200 && reqRes.status < 300)) {
          reqRes.error = {
            code: 'RSC_' + reqRes.status,
            description: (typeof this.statusText !== 'undefined' && this.statusText) ? this.statusText : 'Request failed'
          };
        }
      } else {
        reqRes.error = {
          code: 'RTWNSC', // Request terminated with no status code
          description: 'Request failed'
        };
      }

      if (
        withUserSession
        && reqRes.error.code === 'UNAUTHORIZED'
        && !retriedAfterUserSessionRefresh
      ) {
        UserSession.changeStatusCodeInUserSessionCookies('-3'); // UserSessionStatusCodeEnum.RefreshRequired

        UserSession.processUserSession({
          context: context + ' -> Util -> fetch -> attempt',
          handleRefresh: handleUserSessionRefresh,
          handleRedirection: handleUserSessionRedirection,
          callback: function (userSessionVerificationRes) {
            if (typeof reqRes.error.meta === 'undefined') {
              reqRes.error.meta = {};
            }

            reqRes.error.meta.userSessionVerificationRes = userSessionVerificationRes;

            if (userSessionVerificationRes.error.code === '0') { // session seems fine, retry to send the same request
              params.retriedAfterUserSessionRefresh = true;
              params.context = context + ' -> retry';
              Util.fetch(params);
            } else {
              submitResponse(reqRes);
            }
          }
        });
      } else {
        submitResponse(reqRes);
      }
    }
  };

  var submitRequest = function () {
    xhr.open(method, url, true);

    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }

    if (withUserSession) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + Cookies.get('accessToken'));
    }

    xhr.withCredentials = sendCookies;

    // Util._logDebug('fetch -> submitRequest -> data: ', data);

    xhr.send(data);
  };

  if (withUserSession) {
    UserSession.processUserSession({
      context: context + ' -> Util -> fetch -> init',
      handleRefresh: handleUserSessionRefresh,
      handleRedirection: false,
      callback: function (userSessionVerificationRes) {
        if (userSessionVerificationRes.error.code === '0') {
          submitRequest();
        } else {
          clearTimeout(reqTimeout);

          if (handleUserSessionRedirection) {
            UserSession.userSessionRedirectionLogicHandler(userSessionVerificationRes);
          }

          reqRes.error = userSessionVerificationRes.error;

          submitResponse(reqRes);
        }
      }
    });
  } else {
    submitRequest();
  }
};

Util.elementIsInViewport = function (elm) {
  var rect = elm.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

Util.elementIsAboveViewport = function (elm) {
  var rect = elm.getBoundingClientRect();
  if (rect.top < 0) return true;
  return false;
};

Util.elementIsVisible = function (elm) {
  // Check if the element is not in the document
  if (elm.offsetParent === null) {
    return false;
  }

  // Check for the display property inline or via the style attribute
  if (elm.style.display === 'none' || elm.style.visibility === 'hidden') {
    return false;
  }

  // Check for the display property by traversing up the DOM tree
  var parent = elm.parentNode;
  while (parent && parent.style) {
    if (parent.style.display === 'none' || parent.style.visibility === 'hidden') {
      return false;
    }
    parent = parent.parentNode;
  }

  // If none of the above, the element is likely visible
  return true;
};

Util.findInnerElements = function (parentElement, queryStr, callback) {
  var output = [];

  var hasCallback = typeof callback !== 'undefined';

  var elements = parentElement.querySelectorAll(queryStr);

  for (var index = 0; index < elements.length; index++) {
    output.push(elements[index]);

    if (hasCallback) {
      callback(elements[index], index);
    }
  }

  return output;
};

Util.getInnerElement = function (parentElement, queryStr) {
  var elms = Util.findInnerElements(parentElement, queryStr);

  if (elms.length) {
    return elms[0];
  }

  return undefined;
};

Util.loopArray = function (arr, callback) {
  for (var index = 0; index < arr.length; index++) {
    callback(arr[index], index);
  }
};

Util.loopObj = function (obj, callback) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      callback(obj[key], key);
    }
  }
};

Util.getProgressPercentage = function (currentAmount, totalAmount, round) {
  if (!currentAmount || !totalAmount) {
    return 0;
  }

  if (typeof round === 'undefined') {
    round = true;
  }

  var percentage = (currentAmount / totalAmount) * 100;

  if (round) {
    return Math.ceil(percentage);
  }

  return percentage;
};

Util.isEmptyObject = function (obj) {
  if (typeof obj === 'object' && obj !== null) {
    // Check if the object has any own property
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
  }

  return true;
};

Util.allObjectFieldsAreSet = function (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var value = obj[key];

      if (value === undefined || value === null || value === '') {
        return false;
      }
    }
  }

  return true;
};

Util.patchAllAuthLinksHelper = function (prs) {
  var searchLogInUrl = prs.searchLogInUrl;
  var replaceLogInUrl = prs.replaceLogInUrl;
  var searchSignUpUrl = prs.searchSignUpUrl;
  var replaceSignUpUrl = prs.replaceSignUpUrl;
  var origin = prs.origin;

  var links = document.querySelectorAll('a'); // Select all anchor tags

  var networkServices = [
    'spaces.w3schools.com',
    'pathfinder.w3schools.com',
    'billing.w3schools.com'
  ];

  var isExplicitRedirectToNetworkService = function (url) {
    for (var i = 0; i < networkServices.length; i++) {
      if (url.indexOf('redirect_url=https%3A%2F%2F' + networkServices[i]) !== -1) {
        return true;
      }
    }

    return false;
  };

  for (var i = 0; i < links.length; i++) {
    var match = false;
    var link = links[i];

    if (link.getAttribute('data-skip-href-patch') === 'true') {
      continue;
    }

    var linkHref = link.href;

    if (linkHref.indexOf(searchLogInUrl) === 0) {
      match = true;

      if (isExplicitRedirectToNetworkService(linkHref)) {
        if (linkHref.indexOf('origin=') === -1) {
          link.href = linkHref + '&origin=' + origin;
        }
      } else {
        link.href = replaceLogInUrl;
      }
    } else if (linkHref.indexOf(searchSignUpUrl) === 0) {
      match = true;

      if (isExplicitRedirectToNetworkService(linkHref)) {
        if (linkHref.indexOf('origin=') === -1) {
          link.href = linkHref + '&origin=' + origin;
        }
      } else {
        link.href = replaceSignUpUrl;
      }
    }

    if (match) {
      Util._logDebug('_patchAllAuthLinksHelper -> initialHref, patchedHref: ', {
        'initialHref': linkHref,
        'patchedHref': link.href
      });
    }
  }
};

Util.patchAuthLinks = function (prs) {
  if (typeof prs === 'undefined') {
    prs = {};
  }

  var loggedIn = typeof prs.loggedIn !== 'undefined' ? prs.loggedIn : false;
  var currentUrl = typeof prs.currentUrl !== 'undefined' ? prs.currentUrl : window.location.href;
  var currentUrlEncoded = encodeURIComponent(currentUrl);

  if (loggedIn) {
    Util.patchAllAuthLinksHelper({
      searchLogInUrl: 'https://profile.w3schools.com/log-in',
      replaceLogInUrl: 'https://profile.w3schools.com/log-in',
      searchSignUpUrl: 'https://profile.w3schools.com/sign-up', // hidden
      replaceSignUpUrl: 'https://profile.w3schools.com/sign-up', // hidden
      origin: currentUrlEncoded
    });
  } else {
    Util.patchAllAuthLinksHelper({
      searchLogInUrl: 'https://profile.w3schools.com/log-in',
      replaceLogInUrl: 'https://profile.w3schools.com/log-in?redirect_url=' + currentUrlEncoded,
      searchSignUpUrl: 'https://profile.w3schools.com/sign-up',
      replaceSignUpUrl: 'https://profile.w3schools.com/sign-up?redirect_url=' + currentUrlEncoded,
      origin: currentUrlEncoded
    });
  }
};

Util.getUrlParsed = function (url) {
  var parseHelper = document.createElement("a");
  parseHelper.href = url;
  parseHelper.href = parseHelper.href;

  if (parseHelper.host === "") {
    var protocolAndHost = window.location.protocol + "//" + window.location.host;

    if (url.charAt(1) === "/") {
      parseHelper.href = protocolAndHost + url;
    } else {
      var currentPath = ("/" + parseHelper.pathname).match(/.*\//)[0];
      parseHelper.href = protocolAndHost + currentPath + url;
    }
  }

  var output = {};

  var props = ['host', 'hostname', 'hash', 'href', 'port', 'protocol', 'search'];

  for (var i = 0, n = props.length; i < n; i++) {
    output[props[i]] = parseHelper[props[i]];
  }

  output.pathname = (parseHelper.pathname.charAt(0) !== "/" ? "/" : "") + parseHelper.pathname;

  if (
    (
      typeof output.hostname === 'undefined'
      || !output.hostname
    ) && typeof output.host !== 'undefined'
  ) {
    output.hostname = output.host;
  }

  Util._logDebug('getUrlParsed -> output: ', output);

  return output;
};

Util.getUrlQueryParam = function (param, location) {
  if (typeof location === 'undefined') {
    location = window.location;
  }

  var search = location.search.substring(1); // Remove the "?" at the start
  var params = search.split('&');

  for (var i = 0; i < params.length; i++) {
    var pair = params[i].split('='); // Extract [key, value] pair

    if (decodeURIComponent(pair[0]) === param) {
      return decodeURIComponent(pair[1] || "");
    }
  }

  return null;
};

Util.itemIsNotInList = function (list, item) {
  return list.indexOf(item) === -1;
};

Util.getStrByteSize = function (string) {
  var size = 0;

  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);

    if (code <= 0x7f) {
      size += 1;
    } else if (code <= 0x7ff) {
      size += 2;
    } else if (code >= 0xd800 && code <= 0xdbff) {
      // Surrogate pair means 4 bytes
      size += 4;
      i++; // Skip the next code unit, which is the second part of the surrogate pair
    } else {
      size += 3;
    }
  }

  return size;
};

Util.getLocalStorageUsedSpace = function () {
  var b = 0; // bytes

  for (var key in window.localStorage) {
    if (window.localStorage.hasOwnProperty(key)) {
      b += key.length + localStorage.getItem(key).length;
    }
  }

  return b;
};

Util.setInLocalStorage = function (key, value) {
  var output = {
    error: {
      code: '1',
      description: 'Failed to set k/v in local storage'
    }
  };

  try {
    localStorage.setItem(key, value);

    output.error = { code: '0' };
  } catch (exc) {
    Util._logError('setInLocalStorage -> exc: ', {
      exc: exc
    });
    output.error = Util.getMetaPreparedFromException(exc);
    output.error.code = '2';
  }

  return output;
};

Util.removeStrPrefix = function (str, prefix) {
  if (str.indexOf(prefix) === 0) {
    return str.substr(prefix.length);
  }

  return str;
};

Util.getElementWidth = function (elm) {
  if (!elm) {
    return null;
  }

  var width = null;

  if (window.getComputedStyle) {
    width = window.getComputedStyle(elm, null).getPropertyValue('width');
  } else {
    width = element.style.width;

    if (!width && elm.currentStyle) {
      width = element.currentStyle.width;
    }
  }

  return width;
};

Util.getWindowWidth = function () {
  var width = 0;

  // For IE and other browsers that support it
  if (document.documentElement && document.documentElement.clientWidth) {
    width = document.documentElement.clientWidth;
  }
  // For older versions of IE
  else if (document.body && document.body.clientWidth) {
    width = document.body.clientWidth;
  }
  // As a last resort, use window.innerWidth (not supported in IE8 and earlier)
  else if (window.innerWidth) {
    width = window.innerWidth;
  }

  return width;
};

Util.findNextElementSibling = function (element) {
  if (typeof element.nextElementSibling !== 'undefined') {
    return element.nextElementSibling;
  } else {
    // Fallback for older browsers like IE8
    var nextSibling = element.nextSibling;
    while (nextSibling && nextSibling.nodeType !== 1) {
      nextSibling = nextSibling.nextSibling;
    }
    return nextSibling;
  }
};

Util.findPreviousElementSibling = function (element) {
  if (typeof element.previousElementSibling !== 'undefined') {
    return element.previousElementSibling;
  } else {
    // Fallback for older browsers like IE8
    var previousSibling = element.previousSibling;
    while (previousSibling && previousSibling.nodeType !== 1) {
      previousSibling = previousSibling.previousSibling;
    }
    return previousSibling;
  }
};
