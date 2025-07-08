"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var TopNavBar = {
  defaultHeight: '88px',
  mainNavHeightPx: 56,
  secondaryNavHeightPx: 32,
  fullHeight: '100vh',
  element: document.getElementById('top-nav-bar'),
  // searchFromBox: false,
  // fullScreenNav: false,
  // fullScreenSearchResults: false,
  parentLayoutNotifier: null,
  parentRedirectNotifier: null,
  inIframe: null,
  location: null,
  parentViewport: null,
  // set only in iframe
  env: null,
  loggedIn: null,
  configured: false,
  hasNetworkSecondaryNav: false,
  mobileNavScrollInterval: null,
  _w3sBaseUrl: 'https://www.w3schools.com',
  _profileBaseUrl: 'https://profile.w3schools.com',
  _dashboardBaseUrl: 'https://pathfinder.w3schools.com',
  _spacesBaseUrl: 'https://spaces.w3schools.com',
  _myLearningBaseUrl: 'https://my-learning.w3schools.com',
  _myLearningApiBaseUrl: 'https://myl-api.w3schools.com',
  _billingBaseUrl: 'https://billing.w3schools.com',
  altProfileBaseUrl: 'https://www.w3profile.com',
  pathfinderApiBaseUrl: 'https://api.kai.w3sapi.com/pathfinder',
  _profileAuthUrl: 'https://auth.w3spaces.com',
  _googleAppClientId: '398874333579-u9rrotjv4vu07ut6l3844d6mspcadqds.apps.googleusercontent.com',
  _recaptchaSiteKey: '6Lcw4wscAAAAAHwbESe78xTTKjnQfqe-b6LEkVBk',
  profilePictureUrl: null,
  _debug: null,
  cachedUserData: null,
  dropdownVisible: false,
  loginDropdownVisible: false,
  signupDropdownVisible: false,
  userPool: null,
  _isLoginLoading: false,
  _isSignupLoading: false,
  _userFullName: null,
  resetPasswordDropdownVisible: false,
  _capslockOn: false,
  _isEmailConfirmationDropDownVisible: false,
  _emailInput: null,
  _pollEmailVerificationInterval: null,
  _showEmailVerifyStepFirst: false
};
window.TopNavBar = TopNavBar;
TopNavBar._menuSectionsInTab = {
  'tutorials': ['tutorials_html_css_links_list', 'tutorials_data_analytics_links_list_desktop', 'tutorials_web_building_links_list_desktop', 'tutorials_javascript_links_list', 'tutorials_backend_links_list'],
  'exercises': ['exercises_html_css_links_list', 'exercises_data_analytics_links_list_desktop', 'exercises_javascript_links_list', 'exercises_backend_links_list'],
  'certified': ['certified_html_css_links_list', 'certified_data_analytics_links_list_desktop', 'certified_programs_links_list_desktop', 'certified_javascript_links_list', 'certified_backend_links_list']
};
TopNavBar._findInnerElements = function (parentElement, queryStr, callback) {
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
TopNavBar._getInnerElement = function (parentElement, queryStr) {
  var elms = TopNavBar._findInnerElements(parentElement, queryStr);
  if (elms.length) {
    return elms[0];
  }
  return undefined;
};
TopNavBar._loopArray = function (arr, callback) {
  for (var index = 0; index < arr.length; index++) {
    callback(arr[index], index);
  }
};
TopNavBar._loopObj = function (obj, callback) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      callback(obj[key], key);
    }
  }
};
TopNavBar._inIframe = function () {
  if (TopNavBar.inIframe !== null) {
    return TopNavBar.inIframe;
  }
  try {
    TopNavBar.inIframe = window.self !== window.top;
  } catch (e) {
    TopNavBar.inIframe = true;
  }
  return TopNavBar.inIframe;
};
TopNavBar._isDebugMode = function () {
  if (TopNavBar._debug !== null) {
    return TopNavBar._debug;
  }
  if (localStorage.getItem('TopNavBar.debug') === 'true') {
    TopNavBar._debug = true;
  } else {
    TopNavBar._debug = false;
  }
  return TopNavBar._debug;
};
TopNavBar._logDebug = function (message, data) {
  if (!TopNavBar._isDebugMode()) {
    return;
  }
  if (typeof data === 'undefined') {
    console.log('TopNavBar -> ' + message);
  } else {
    console.log('TopNavBar -> ' + message, data);
  }
};
TopNavBar._logWarning = function (message, data) {
  if (typeof data === 'undefined') {
    console.warn('TopNavBar -> ' + message);
  } else {
    console.warn('TopNavBar -> ' + message, data);
  }
};
TopNavBar.isExpanded = function () {
  var navs = ['#nav_tutorials', '#nav_exercises', '#nav_certified', '#nav_services'

  // '.tnb-mobile-nav',
  ];
  for (var i = 0; i < navs.length; i++) {
    var element = TopNavBar.element.querySelector(navs[i]);
    if (element && element.style.display !== 'none' && element.style.display !== '') {
      return true;
    }
  }
  if (TopNavBar.element.querySelector('.tnb-mobile-nav').classList.contains('tnb-active')) {
    return true;
  }
  return TopNavBar.googleSearchResultsShown();
};
TopNavBar._sendParentInitMessage = function () {
  window.parent.postMessage({
    'action': 'INIT',
    'expanded': false,
    'initHeight': TopNavBar.defaultHeight,
    // legacy
    'fullHeight': TopNavBar.fullHeight,
    'mainNavHeightPx': TopNavBar.mainNavHeightPx,
    'secondaryNavHeightPx': TopNavBar.secondaryNavHeightPx,
    'rightSectionBoundingClientRect': TopNavBar.element.querySelector('.tnb-right-section').getBoundingClientRect()
  }, '*');
};
TopNavBar._applyNoUpsellUiTweaks = function () {
  // action can't be reverted

  TopNavBar._findInnerElements(TopNavBar.element, '.tnb-paid-service', function (paidServiceElm) {
    paidServiceElm.remove();
  });
  TopNavBar._findInnerElements(TopNavBar.element, '.tnb-upgrade', function (upgradeElm) {
    upgradeElm.classList.add('w3-hide');
  });
};
TopNavBar.postInitConfig = function (prs) {
  TopNavBar._logDebug('postInitConfig');
  // return;

  // can be checked to avoid configuring twice
  TopNavBar.configured = true;
  if (typeof prs.sendParentInitMessage !== 'undefined' && prs.sendParentInitMessage === true) {
    // optional prop required in billing setup
    TopNavBar._sendParentInitMessage();
  }
  TopNavBar.env = prs.env;
  TopNavBar.location = prs.location; // location required fields: href, hostname, pathname

  if (typeof prs.viewport !== 'undefined') {
    TopNavBar.parentViewport = prs.viewport;
  }
  TopNavBar.hasNetworkSecondaryNav = TopNavBar.env === 'network' && !TopNavBar.lite;
  if (!TopNavBar.hasNetworkSecondaryNav) {
    // check if child element #secondary-top-nav-bar exists
    if (TopNavBar.element.querySelector('#secondary-top-nav-bar')) {
      TopNavBar.hasNetworkSecondaryNav = true;
    }
  }
  if (TopNavBar.hasNetworkSecondaryNav) {
    SecondaryTopNavBar.postInitConfig(prs);
  }

  // execution order priority: high
  TopNavBar._applyUserSessionUiTweaks({
    loggedIn: prs.loggedIn,
    subscriptionPlan: prs.subscriptionPlan
  });

  // execution order priority: mid
  if (TopNavBar.env === 'network') {
    Util.patchAuthLinks({
      loggedIn: prs.loggedIn,
      currentUrl: TopNavBar.location.href
    });
  } else {
    Util.patchAuthLinks({
      loggedIn: prs.loggedIn
    });
  }
  var featureFlags = prs.featureFlags;
  if (typeof featureFlags === 'undefined') {
    featureFlags = {
      'noUpsell': false
    };
  }

  // execution order priority: low
  if (featureFlags.noUpsell) {
    TopNavBar._applyNoUpsellUiTweaks();
  }
};
TopNavBar._createChevronButton = function () {
  var chevronButton = document.createElement('button');
  chevronButton.className = 'tnb-profile-chevron-btn';
  chevronButton.setAttribute('aria-label', 'Toggle profile menu');
  chevronButton.setAttribute('title', 'Open profile menu');
  var chevronSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  chevronSvg.setAttribute('viewBox', '0 0 16 16');
  chevronSvg.setAttribute('width', '14');
  chevronSvg.setAttribute('height', '14');
  chevronSvg.setAttribute('fill', 'currentColor');
  chevronSvg.classList.add('profile-chevron');
  var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('fill-rule', 'evenodd');
  g.setAttribute('transform', 'translate(-448 -544)');
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill-rule', 'nonzero');
  path.setAttribute('d', 'M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z');
  g.appendChild(path);
  chevronSvg.appendChild(g);
  chevronButton.appendChild(chevronSvg);
  chevronButton.addEventListener('click', function (event) {
    event.stopPropagation();
    TopNavBar.handleProfileClick(event);
  });
  return chevronButton;
};
TopNavBar.renderProfilePicture = function (profilePictureUrl, cache) {
  if (typeof cache === 'undefined') {
    cache = true;
  }
  if (cache) {
    try {
      localStorage.setItem('profilePicture', encodeURIComponent(UserSession.getSessionId() + '|' + profilePictureUrl));
    } catch (exc) {
      console.error('renderProfilePicture -> cache -> error: ', {
        'profilePictureUrl': profilePictureUrl,
        'exc': exc
      });
    }
  }
  var userProfilePictureElm = TopNavBar._getInnerElement(TopNavBar.element, '.user-profile-picture');

  // already set -> update
  if (userProfilePictureElm) {
    TopNavBar.profilePictureUrl = profilePictureUrl;
    userProfilePictureElm.style.backgroundImage = "url('" + profilePictureUrl + "')";
    return;
  }
  var userProfileBtnElm = TopNavBar._getInnerElement(TopNavBar.element, '.user-profile-btn');
  if (!userProfileBtnElm) {
    return;
  }
  TopNavBar.profilePictureUrl = profilePictureUrl;
  var defaultProfileIcon = userProfileBtnElm.querySelector('.user-profile-icon');
  if (defaultProfileIcon) {
    defaultProfileIcon.style.display = 'none';
  }
  var existingProgress = userProfileBtnElm.querySelector('.user-progress');
  var existingProgressStar = userProfileBtnElm.querySelector('.user-progress-star');
  var existingProgressPoint = userProfileBtnElm.querySelector('.user-progress-point');
  var existingChevron = userProfileBtnElm.querySelector('.tnb-profile-chevron-btn');
  var userProfilePictureWrapper = document.createElement('div');
  userProfilePictureWrapper.className = 'user-profile-picture-wrapper';
  userProfilePictureWrapper.style.display = 'flex';
  userProfilePictureWrapper.style.alignItems = 'center';
  var userProfilePicture = document.createElement('div');
  userProfilePicture.className = 'user-profile-picture';
  userProfilePicture.style.backgroundImage = "url('" + profilePictureUrl + "')";
  userProfilePictureWrapper.appendChild(userProfilePicture);
  var userProfileName = userProfileBtnElm.querySelector('.user-profile-btn-name');
  if (userProfileName) {
    userProfileBtnElm.insertBefore(userProfilePictureWrapper, userProfileName);
    return;
  }
  if (existingProgress) {
    userProfileBtnElm.insertBefore(userProfilePictureWrapper, existingProgress);
  } else if (existingProgressStar) {
    userProfileBtnElm.insertBefore(userProfilePictureWrapper, existingProgressStar);
  } else if (existingProgressPoint) {
    userProfileBtnElm.insertBefore(userProfilePictureWrapper, existingProgressPoint);
  }
  if (!existingChevron) {
    var chevronButton = TopNavBar._createChevronButton();
    userProfileBtnElm.appendChild(chevronButton);
  }
  userProfileBtnElm.insertBefore(userProfilePictureWrapper, existingChevron);
  userProfileBtnElm.classList.add('user-authenticated');
};
TopNavBar.renderName = function (firstName, lastName, cache) {
  return; // Disable rendering of user name for now

  if (typeof cache === 'undefined') {
    cache = true;
  }
  if (cache) {
    try {
      localStorage.setItem('tnb-user-first-name', encodeURIComponent(UserSession.getSessionId() + '|' + firstName));
    } catch (exc) {
      console.error('renderName -> cache -> error: ', {
        'userFirstName': firstName,
        'exc': exc
      });
    }
  }
  var userProfileBtnElm = TopNavBar._getInnerElement(TopNavBar.element, '.user-profile-btn');
  if (!userProfileBtnElm) {
    return;
  }
  var existingChevron = userProfileBtnElm.querySelector('.tnb-profile-chevron-btn');
  var existingUserProfileName = userProfileBtnElm.querySelector('.user-profile-btn-name');
  if (existingUserProfileName) {
    existingUserProfileName.innerHTML = "<span class=\"tnb-user-profile-btn-name-text\">".concat(firstName ? firstName : 'User', "</span>");
    return;
  }
  var userProfileName = document.createElement('div');
  userProfileName.className = 'tnb-user-profile-btn-name';
  userProfileName.innerHTML = "<span class=\"tnb-user-profile-btn-name-text\">".concat(firstName ? firstName : 'User', "</span>");
  if (!existingChevron) {
    var chevronButton = TopNavBar._createChevronButton();
    userProfileBtnElm.appendChild(chevronButton);
  }
  userProfileBtnElm.insertBefore(userProfileName, existingChevron);
};
TopNavBar.rerenderDropdownUserName = function (firstName, lastName) {
  if (TopNavBar.cachedUserData) {
    TopNavBar.cachedUserData.fullName = "".concat(firstName, " ").concat(lastName);
    TopNavBar.cachedUserData.firstName = firstName;
    TopNavBar.cachedUserData.lastName = lastName;
  }
  var dropdownElm = document.getElementById('tnb-profile-dropdown');
  if (dropdownElm) {
    dropdownElm.querySelector('.user-name').innerHTML = "".concat(firstName, " ").concat(lastName);
  }
};
TopNavBar._applyUserSessionUiTweaks = function (prs) {
  TopNavBar._logDebug('_applyUserSessionUiTweaks -> prs: ', prs);
  var loggedIn = prs.loggedIn;
  var subscriptionPlan = prs.subscriptionPlan;
  var initialLoggedInState = TopNavBar.loggedIn;
  var loggedInStateChanged = TopNavBar.loggedIn !== loggedIn;
  TopNavBar.loggedIn = loggedIn;
  TopNavBar._logDebug('_applyUserSessionUiTweaks -> state: ', {
    'loggedIn': loggedIn,
    'initialLoggedInState': initialLoggedInState,
    'loggedInStateChanged': loggedInStateChanged,
    'subscriptionPlan': subscriptionPlan
  });
  if (loggedIn) {
    TopNavBar._findInnerElements(document, '.user-authenticated', function (elm) {
      elm.classList.remove('w3-hide');
    });
    TopNavBar._findInnerElements(document, '.user-anonymous', function (elm) {
      elm.classList.add('w3-hide');
    });
    TopNavBar._findInnerElements(document, '.user-profile-btn-divider', function (elm) {
      elm.style.display = 'block';
    });
    var userProfileBtnElm = TopNavBar._getInnerElement(TopNavBar.element, '.user-profile-btn');
    if (userProfileBtnElm && !userProfileBtnElm.querySelector('.tnb-profile-chevron-btn')) {
      userProfileBtnElm.appendChild(TopNavBar._createChevronButton());
      userProfileBtnElm.addEventListener('click', function (event) {
        if (!event.target.closest('.tnb-profile-chevron-btn')) {
          TopNavBar.handleProfileClick(event);
        }
      });

      // var chevronBtn = userProfileBtnElm.querySelector('.tnb-profile-chevron-btn');
      // if (chevronBtn) {
      //   chevronBtn.style.visibility = 'hidden';
      // }

      // var defaultProfileIcon = userProfileBtnElm.querySelector('.user-profile-icon');
      // if (defaultProfileIcon) {
      //   defaultProfileIcon.style.visibility = 'hidden';
      // }

      // var loader = userProfileBtnElm.querySelector('.loader');
      // if (loader) {
      //   loader.style.display = 'block';
      // }
    }
    if (subscriptionPlan === 'diamond') {
      TopNavBar._findInnerElements(TopNavBar.element, '.tnb-upgrade', function (elm) {
        elm.classList.add('w3-hide');
      });
    } else {
      TopNavBar._findInnerElements(TopNavBar.element, '.tnb-upgrade', function (elm) {
        elm.classList.remove('w3-hide');
      });
    }
    try {
      var cachedProfilePictureKeyValEncoded = localStorage.getItem('profilePicture');
      TopNavBar._logDebug('_applyUserSessionUiTweaks -> profile picture -> cachedProfilePictureKeyValEncoded: ', {
        'cachedProfilePictureKeyValEncoded': cachedProfilePictureKeyValEncoded
      });
      if (cachedProfilePictureKeyVal !== null) {
        var cachedProfilePictureKeyVal = decodeURIComponent(cachedProfilePictureKeyValEncoded);
        var userSessionId = UserSession.getSessionId();
        TopNavBar._logDebug('_applyUserSessionUiTweaks -> profile picture -> cachedProfilePictureKeyVal: ', {
          'cachedProfilePictureKeyVal': cachedProfilePictureKeyVal,
          'userSessionId': userSessionId
        });
        if (cachedProfilePictureKeyVal.indexOf(userSessionId + '|') === 0) {
          // Extract profile picture URL from the cached value
          var profilePictureUrl = cachedProfilePictureKeyVal.split('|', 2)[1];
          TopNavBar._logDebug('_applyUserSessionUiTweaks -> profile picture -> profilePictureUrl: ', {
            'profilePictureUrl': profilePictureUrl
          });
          TopNavBar.profilePictureUrl = profilePictureUrl;
          TopNavBar.renderProfilePicture(profilePictureUrl, false);

          // defaultProfileIcon.style.visibility = 'visible';
          // loader.style.display = 'none';
          // chevronBtn.style.visibility = 'visible';
        }
      }
    } catch (exc) {
      console.error('_applyUserSessionUiTweaks -> profile picture -> error: ', {
        'exc': exc
      });
    }
    try {
      var cachedUserNameKeyValEncoded = localStorage.getItem('tnb-user-first-name');
      TopNavBar._logDebug('_applyUserSessionUiTweaks -> user name -> cachedUserNameKeyValEncoded: ', {
        'cachedUserNameKeyValEncoded': cachedUserNameKeyValEncoded
      });
      if (cachedUserNameKeyValEncoded !== null) {
        var cachedUserNameKeyVal = decodeURIComponent(cachedUserNameKeyValEncoded);
        var userSessionId = UserSession.getSessionId();
        TopNavBar._logDebug('_applyUserSessionUiTweaks -> user name -> cachedUserNameKeyVal: ', {
          'cachedUserNameKeyVal': cachedUserNameKeyVal,
          'userSessionId': userSessionId
        });
        if (cachedUserNameKeyVal.indexOf(userSessionId + '|') === 0) {
          var firstName = cachedUserNameKeyVal.split('|', 2)[1];
          TopNavBar._logDebug('_applyUserSessionUiTweaks -> user name -> firstName: ', {
            'firstName': firstName
          });
          TopNavBar.renderName(firstName, '', true);

          // defaultProfileIcon.style.visibility = 'visible';
          // loader.style.display = 'none';
          // chevronBtn.style.visibility = 'visible';
        }
      }
    } catch (exc) {
      console.error('_applyUserSessionUiTweaks -> user name -> error: ', {
        'exc': exc
      });
    }
    if (TopNavBar.profilePictureUrl === null) {
      TopNavBar.profilePictureUrl = ''; // flag that fetch was initialized
    }
    TopNavBar.prefetchUserData();
  } else {
    // anonymous
    TopNavBar._findInnerElements(document, '.user-authenticated', function (elm) {
      elm.classList.add('w3-hide');
    });
    TopNavBar._findInnerElements(document, '.user-anonymous', function (elm) {
      elm.classList.remove('w3-hide');
    });
    TopNavBar._findInnerElements(TopNavBar.element, '.tnb-upgrade', function (elm) {
      elm.classList.add('w3-hide');
    });
  }
};
TopNavBar.prefetchUserData = function () {
  if (!TopNavBar.cachedUserData) {
    TopNavBar._myLearningStateLookup().then(function (mylStateLookupRes) {
      TopNavBar._logDebug('prefetchUserData -> mylStateLookupRes: ', mylStateLookupRes);
      return TopNavBar.fetchUserData(mylStateLookupRes.data);
    }).then(function (userData) {
      TopNavBar._logDebug('prefetchUserData -> userData: ', userData);
    })["catch"](function (error) {
      TopNavBar._logWarning('prefetchUserData -> error: ', error);
    });
  }
};
TopNavBar.init = function () {
  TopNavBar._logDebug('init');
  TopNavBar.location = window.location;

  // execution order priority: high
  TopNavBar.initUserPreferredTheme();

  // Add resize handler for profile dropdown
  window.addEventListener('resize', function () {
    if (TopNavBar.dropdownVisible) {
      TopNavBar.hideProfileDropdown();
    }
  });
  window.addEventListener('resize', function () {
    var rightSection = document.querySelector('.tnb-right-section');
    if (!rightSection) {
      return;
    }
    var dropdownElements = [document.getElementById('tnb-signup-dropdown-emailConfirmationForm'), document.getElementById('tnb-login-dropdown-loginForm'), document.getElementById('tnb-signup-dropdown-signupForm'), document.getElementById('tnb-signup-dropdown-confirm-reset-password-form'), document.getElementById('tnb-signup-dropdown-reset-password-form')];
    for (var _i = 0, _dropdownElements = dropdownElements; _i < _dropdownElements.length; _i++) {
      var dropdownElm = _dropdownElements[_i];
      if (dropdownElm) {
        TopNavBar._positionDropdown(dropdownElm, rightSection);
      }
    }
  });

  // Remove any existing event listeners before adding new ones
  if (!TopNavBar._eventListenersInitialized) {
    document.addEventListener('click', function (event) {
      if (TopNavBar.dropdownVisible) {
        var profileBtn = document.querySelector('.user-profile-btn');
        if (!profileBtn) return;
        if (TopNavBar.env === 'network' || TopNavBar._inIframe()) {
          if (!profileBtn.contains(event.target)) {
            TopNavBar.hideProfileDropdown();
            return;
          }
        }
        var dropdownElm = document.getElementById('tnb-profile-dropdown');
        if (!dropdownElm) return;
        if (event.target.id === 'tnb-profile-dropdown-bottom-spacer' || !(dropdownElm.contains(event.target) || profileBtn.contains(event.target))) {
          TopNavBar.hideProfileDropdown();
        }
      }
    });
    document.addEventListener('click', function (event) {
      var _Array$from, _Array$from2;
      var loginBtn = document.querySelector('.tnb-login-btn');
      var loginForm = document.getElementById('tnb-login-dropdown-loginForm');
      var loginLink = document.getElementById('tnb-signup-dropdown-login-link');
      var returnToLoginBtnResetPassword = document.getElementById('tnb-return-to-sign-in-reset-password');
      var returnToLoginBtn = document.getElementById('tnb-return-to-sign-in');
      var resetPassword = document.getElementById('tnb-login-dropdown-reset-password');
      var resetPasswordForm = document.getElementById('tnb-signup-dropdown-reset-password-form');
      var signupLink = document.getElementById('tnb-login-dropdown-signup-link');
      var signupForm = document.getElementById('tnb-signup-dropdown-signupForm');
      var nordPassAutoFillPortal = document.getElementsByTagName('nordpass-autofill-portal');
      var nordPassPortal = document.getElementsByTagName('nordpass-portal');
      var verifyEmailDropDown = document.getElementById('tnb-signup-dropdown-emailConfirmationForm');
      if (TopNavBar._isLoginLoading || TopNavBar._isSignupLoading) {
        return;
      }
      if (loginLink !== null && loginLink !== void 0 && loginLink.contains(event.target) || returnToLoginBtn !== null && returnToLoginBtn !== void 0 && returnToLoginBtn.contains(event.target) || returnToLoginBtnResetPassword !== null && returnToLoginBtnResetPassword !== void 0 && returnToLoginBtnResetPassword.contains(event.target) || resetPassword !== null && resetPassword !== void 0 && resetPassword.contains(event.target) || signupLink !== null && signupLink !== void 0 && signupLink.contains(event.target) || signupForm !== null && signupForm !== void 0 && signupForm.contains(event.target) || (_Array$from = Array.from(nordPassPortal !== null && nordPassPortal !== void 0 ? nordPassPortal : [])) !== null && _Array$from !== void 0 && _Array$from.some(function (portal) {
        return portal.contains(event.target);
      }) || (_Array$from2 = Array.from(nordPassAutoFillPortal !== null && nordPassAutoFillPortal !== void 0 ? nordPassAutoFillPortal : [])) !== null && _Array$from2 !== void 0 && _Array$from2.some(function (portal) {
        return portal.contains(event.target);
      })) {
        return;
      }
      if (loginBtn !== null && loginBtn !== void 0 && loginBtn.contains(event.target) && TopNavBar._isEmailConfirmationDropDownVisible) {
        TopNavBar.hideEmailConfirmationDropDown();
        TopNavBar._showEmailVerifyStepFirst = true;
        return;
      }
      if (loginBtn !== null && loginBtn !== void 0 && loginBtn.contains(event.target) && TopNavBar.resetPasswordDropdownVisible) {
        TopNavBar.hideResetPasswordDropDown();
        // TopNavBar.showLoginDropdown();
        return;
      }
      if (TopNavBar.resetPasswordDropdownVisible && !(resetPasswordForm !== null && resetPasswordForm !== void 0 && resetPasswordForm.contains(event.target))) {
        TopNavBar.hideResetPasswordDropDown();
        return;
      }
      if (!(verifyEmailDropDown !== null && verifyEmailDropDown !== void 0 && verifyEmailDropDown.contains(event.target)) && TopNavBar._isEmailConfirmationDropDownVisible) {
        TopNavBar.hideEmailConfirmationDropDown();
        TopNavBar._showEmailVerifyStepFirst = true;
        return;
      }
      if (!(loginForm !== null && loginForm !== void 0 && loginForm.contains(event.target)) && TopNavBar.loginDropdownVisible) {
        TopNavBar.hideLoginDropdown();
        return;
      }
      if (!(loginBtn !== null && loginBtn !== void 0 && loginBtn.contains(event.target)) && TopNavBar.signupDropdownVisible) {
        TopNavBar.hideSignupDropdown();
        return;
      }
      if (!(loginBtn !== null && loginBtn !== void 0 && loginBtn.contains(event.target))) {
        return;
      }
      if (TopNavBar._showEmailVerifyStepFirst) {
        TopNavBar.showEmailConfirmationDropDown();
        return;
      }
      if (!(verifyEmailDropDown !== null && verifyEmailDropDown !== void 0 && verifyEmailDropDown.contains(event.target)) && TopNavBar._isEmailConfirmationDropDownVisible) {
        TopNavBar.hideEmailConfirmationDropDown();
        TopNavBar._showEmailVerifyStepFirst = true;
        return;
      }
      if (TopNavBar.loginDropdownVisible || TopNavBar.signupDropdownVisible || TopNavBar._isEmailConfirmationDropDownVisible) {
        TopNavBar.hideLoginDropdown();
        TopNavBar.hideResetPasswordDropDown();
        TopNavBar.hideSignupDropdown();
        TopNavBar.hideEmailConfirmationDropDown();
      } else {
        TopNavBar.showLoginDropdown();
      }
    });
    document.addEventListener('click', function (event) {
      var _Array$from3, _Array$from4, _Array$from5;
      var signupBtn = document.querySelector('.tnb-signup-btn');
      var signupForm = document.getElementById('tnb-signup-dropdown-signupForm');
      var signupLink = document.getElementById('tnb-login-dropdown-signup-link');
      var togglePasswordButtons = document.querySelectorAll('.toggle-password-visibility');
      var nordPassAutoFillPortal = document.getElementsByTagName('nordpass-autofill-portal');
      var nordPassPortal = document.getElementsByTagName('nordpass-portal');
      if (signupLink !== null && signupLink !== void 0 && signupLink.contains(event.target) || (_Array$from3 = Array.from(togglePasswordButtons !== null && togglePasswordButtons !== void 0 ? togglePasswordButtons : [])) !== null && _Array$from3 !== void 0 && _Array$from3.some(function (btn) {
        return btn.contains(event.target);
      }) || (_Array$from4 = Array.from(nordPassPortal !== null && nordPassPortal !== void 0 ? nordPassPortal : [])) !== null && _Array$from4 !== void 0 && _Array$from4.some(function (portal) {
        return portal.contains(event.target);
      }) || (_Array$from5 = Array.from(nordPassAutoFillPortal !== null && nordPassAutoFillPortal !== void 0 ? nordPassAutoFillPortal : [])) !== null && _Array$from5 !== void 0 && _Array$from5.some(function (portal) {
        return portal.contains(event.target);
      })) {
        return;
      }
      if (TopNavBar._isSignupLoading) {
        return;
      }
      if (!(signupForm !== null && signupForm !== void 0 && signupForm.contains(event.target)) && TopNavBar.signupDropdownVisible) {
        TopNavBar.hideSignupDropdown();
        return;
      }
      if (!(signupBtn !== null && signupBtn !== void 0 && signupBtn.contains(event.target))) {
        return;
      }
      if (TopNavBar.signupDropdownVisible) {
        TopNavBar.hideSignupDropdown();
      } else {
        TopNavBar.showSignupDropdown();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        var signupBtn = document.querySelector('.tnb-signup-btn');
        var loginBtn = document.querySelector('.tnb-login-btn');
        if (document.activeElement === signupBtn) {
          if (TopNavBar.signupDropdownVisible && !TopNavBar._isSignupLoading) {
            TopNavBar.hideSignupDropdown();
          } else {
            TopNavBar.showSignupDropdown();
            TopNavBar.hideLoginDropdown();
          }
        }
        if (document.activeElement === loginBtn) {
          if (TopNavBar.loginDropdownVisible && !TopNavBar._isLoginLoading) {
            TopNavBar.hideLoginDropdown();
          } else {
            TopNavBar.showLoginDropdown();
            TopNavBar.hideSignupDropdown();
          }
        }
      }
      if (event.key === 'Escape') {
        var _document$getElementB;
        if (TopNavBar.loginDropdownVisible && !TopNavBar._isLoginLoading) {
          TopNavBar.hideLoginDropdown();
        }
        if (TopNavBar.signupDropdownVisible && !TopNavBar._isSignupLoading) {
          TopNavBar.hideSignupDropdown();
        }
        if (((_document$getElementB = document.getElementById('tnb-signup-dropdown-emailConfirmationForm')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.style.display) === 'block') {
          document.getElementById('tnb-signup-dropdown-emailConfirmationForm').style.display = 'none';
        }
      }
    });
    TopNavBar._eventListenersInitialized = true;
  }

  // blind lookup
  var uicCookieData = UserSession.getUicCookie();
  var loggedIn = uicCookieData !== null;
  var subscriptionPlan = 'free';
  if (loggedIn) {
    subscriptionPlan = uicCookieData.plan || 'free';
  }
  TopNavBar.loggedIn = loggedIn;
  TopNavBar._logDebug('init -> data: ', {
    'uicCookieData': uicCookieData,
    'loggedIn': loggedIn,
    'subscriptionPlan': subscriptionPlan
  });
  Util.patchAuthLinks({
    loggedIn: loggedIn
  });

  // execution order priority: high
  TopNavBar._applyUserSessionUiTweaks({
    loggedIn: loggedIn,
    subscriptionPlan: subscriptionPlan
  });
  var iframedTopNavBar = TopNavBar._inIframe();

  // execution order priority: high
  if (iframedTopNavBar) {
    TopNavBar._iframeInit();
  }

  // execution order priority: low
  TopNavBar._attachMenuSortLogic();

  // execution order priority: low
  TopNavBar._attachNavEscapeListeners();
  if (iframedTopNavBar) {
    var explicitCurrentUrl = Util.getUrlQueryParam('currentUrl');
    TopNavBar._logDebug('init -> explicitCurrentUrl: ', {
      explicitCurrentUrl: explicitCurrentUrl
    });
    if (explicitCurrentUrl) {
      TopNavBar.postInitConfig({
        env: 'network',
        location: Util.getUrlParsed(explicitCurrentUrl),
        loggedIn: loggedIn,
        subscriptionPlan: subscriptionPlan
      });
    }
  } else {
    TopNavBar.postInitConfig({
      env: 'classic',
      location: window.location,
      loggedIn: loggedIn,
      subscriptionPlan: subscriptionPlan
    });
  }
  if (TopNavBar.env === 'classic') {
    var _window$UserSession, _window;
    TopNavBar.userPool = new AmazonCognitoIdentity.CognitoUserPool({
      UserPoolId: (_window$UserSession = window.UserSession) === null || _window$UserSession === void 0 || (_window$UserSession = _window$UserSession._cognito) === null || _window$UserSession === void 0 ? void 0 : _window$UserSession.userPoolId,
      ClientId: (_window = window) === null || _window === void 0 || (_window = _window.UserSession) === null || _window === void 0 || (_window = _window._cognito) === null || _window === void 0 ? void 0 : _window.clientId
    });
  }
  if (!loggedIn && TopNavBar.env === 'classic') {
    // setTimeout(() => TopNavBar.renderGoogleOneTap(), 1000);
  }
};
TopNavBar._handleParentResize = function (data) {
  TopNavBar._logDebug('_handleParentResize -> data: ', data);
  if (typeof data.viewport !== 'undefined') {
    TopNavBar.parentViewport = data.viewport;
  }
};
TopNavBar._callFunc = function (funcName, funcArgs) {
  if (funcName.indexOf('_') === 0) {
    // private function/method
    TopNavBar._logWarning('Function call forbidden -> funcName, funcArgs: ', {
      'funcName': funcName,
      'funcArgs': funcArgs
    });
    return false;
  }
  if (typeof TopNavBar[funcName] !== 'function') {
    TopNavBar._logWarning("Function doesn't exist -> funcName, funcArgs: ", {
      'funcName': funcName,
      'funcArgs': funcArgs
    });
    return false;
  }
  if (typeof funcArgs !== 'undefined') {
    return TopNavBar[funcName].apply(null, funcArgs);
  } else {
    return TopNavBar[funcName]();
  }
};
TopNavBar._iframeInit = function () {
  window.addEventListener('message', function (message) {
    TopNavBar._logDebug('message: ', message);
    var whitelistedOrigins = ['https://profile.w3schools.com', 'https://pathfinder.w3schools.com', 'https://my-learning.w3schools.com', 'https://spaces.w3schools.com', 'https://billing.w3schools.com', 'https://campus.w3schools.com'];
    if (!whitelistedOrigins.includes(message.origin)) {
      return;
    }
    var action = '';
    var data = null;
    if (typeof message.data.type !== 'undefined') {
      action = message.data.type;
      data = message.data.value;
    } else if (typeof message.data.action !== 'undefined') {
      action = message.data.action;
      data = message.data.data;
    }
    TopNavBar._logDebug('message -> action, data: ', {
      action: action,
      data: data
    });
    if (action === 'CONFIG') {
      TopNavBar.postInitConfig(data);
    } else if (action === 'CALL_FUNCTION') {
      TopNavBar._callFunc(data.funcName, data.funcArgs);
    } else if (action === 'RESIZE') {
      TopNavBar._handleParentResize(data);
    } else if (action === 'TOGGLE_PROFILE_DROPDOWN') {
      if (TopNavBar.dropdownVisible) {
        TopNavBar.hideProfileDropdown();
      } else {
        TopNavBar.showProfileDropdown();
      }
    }
  });
  TopNavBar._sendParentInitMessage();
  TopNavBar.element.addEventListener('click', function (event) {
    TopNavBar.notifyParentAboutLayout('on click', event);
  });
  TopNavBar.element.addEventListener('keyup', function (event) {
    TopNavBar.notifyParentAboutLayout('on keyup', event);
  });
  TopNavBar.element.addEventListener('resize', function (event) {
    TopNavBar.notifyParentAboutLayout('on resize', event);
  });
};
TopNavBar.notifyParentAboutLayout = function (context, event) {
  if (!TopNavBar._inIframe()) {
    return;
  }
  TopNavBar._logDebug('notifyParentAboutLayout -> context, event: ', {
    'context': context,
    'event': event
  });
  clearTimeout(TopNavBar.parentLayoutNotifier);
  TopNavBar.parentLayoutNotifier = setTimeout(function () {
    var expanded = TopNavBar.isExpanded();
    window.parent.postMessage({
      'context': context,
      'action': 'LAYOUT',
      'expanded': expanded,
      'iframeHeight': expanded ? TopNavBar.fullHeight : TopNavBar.defaultHeight,
      // legacy
      'placeholderHeight': TopNavBar.defaultHeight,
      // legacy
      'fullHeight': TopNavBar.fullHeight,
      'mainNavHeightPx': TopNavBar.mainNavHeightPx,
      'secondaryNavHeightPx': TopNavBar.secondaryNavHeightPx,
      'rightSectionBoundingClientRect': TopNavBar.element.querySelector('.tnb-right-section').getBoundingClientRect()
    }, '*');
  }, 100);
};
TopNavBar.notifyParentAboutRedirect = function (context, redirectUrl) {
  if (!TopNavBar._inIframe()) {
    return;
  }
  TopNavBar._logDebug('notifyParentAboutRedirect -> context, redirectUrl: ', {
    'context': context,
    'redirectUrl': redirectUrl
  });
  clearTimeout(TopNavBar.parentRedirectNotifier);
  TopNavBar.parentRedirectNotifier = setTimeout(function () {
    window.parent.postMessage({
      'context': context,
      'action': 'REDIRECT',
      'url': redirectUrl
    }, '*');
  }, 100);
};
TopNavBar._attachNavEscapeListeners = function () {
  var navIds = ['tutorials', 'exercises', 'certified', 'services'];
  TopNavBar._loopArray(navIds, function (navId) {
    document.getElementById('nav_' + navId).addEventListener('keydown', function (event) {
      if (event.code === 'Escape') {
        TopNavBar.closeNavItem(navId);
      }
    });
  });
};

// < Google Search

TopNavBar.googleSearchInit = function () {
  TopNavBar._logDebug('googleSearchInit');
  var gSearchScriptElm = document.getElementById('gSearch');
  if (gSearchScriptElm == null) {
    var cx = uic_r_y();
    var gSearchScriptElmToInject = document.createElement('script');
    gSearchScriptElmToInject.id = 'gSearch';
    gSearchScriptElmToInject.type = 'text/javascript';
    gSearchScriptElmToInject.async = true;
    gSearchScriptElmToInject.src = 'https://www.google.com/cse/cse.js?cx=' + cx;
    var firstScriptElm = document.getElementsByTagName('script')[0];
    firstScriptElm.parentNode.insertBefore(gSearchScriptElmToInject, firstScriptElm);
  }
  TopNavBar.googleSearchFocusInput();
};
TopNavBar.googleSearchFocusInput = function () {
  TopNavBar._logDebug('googleSearchFocusInput');
  document.getElementById('tnb-google-search-input').focus();
};
TopNavBar.googleSearchResultsShown = function () {
  var googleSearchResults = TopNavBar.element.querySelector('.gsc-results-wrapper-overlay.gsc-results-wrapper-visible');
  return !!googleSearchResults;
};
TopNavBar.googleSearchResultsShownCallback = function (callback) {
  if (TopNavBar.googleSearchResultsShown()) {
    return callback();
  }
  var lookupAttempts = 512; // ~ 1 minute

  var lookupInterval = setInterval(function () {
    if (TopNavBar.googleSearchResultsShown()) {
      clearInterval(lookupInterval);
      return callback();
    }
    lookupAttempts--;
    if (!lookupAttempts) {
      console.error('TopNavBar -> googleSearchResultsShownCallback -> timeout');
      return clearInterval(lookupInterval);
    }
  }, 100);
};
TopNavBar._googleSearchPatchResultLinks = function () {
  TopNavBar._findInnerElements(document.getElementById('googleSearch'), '.gsc-results a', function (linkElm) {
    linkElm.setAttribute('target', '_blank');
  });
};
TopNavBar.googleSearchShowMobileContainer = function () {
  document.getElementById('tnb-google-search-container').classList.add('tnb-mobile-active');
};
TopNavBar.googleSearchHideMobileContainer = function () {
  document.getElementById('tnb-google-search-container').classList.remove('tnb-mobile-active');
};
TopNavBar._getElementPos = function (elm) {
  var rect = elm.getBoundingClientRect();
  return {
    'left': rect.left + window.scrollX,
    'top': rect.top + window.scrollY
  };
};
TopNavBar._iframeProxyFloatingComponent = function (context, id, action, prs) {
  if (!(TopNavBar.env === 'network' || TopNavBar._inIframe())) {
    return;
  }
  if (typeof prs === 'undefined') {
    prs = {};
  }
  var floatingComponent = prs;
  floatingComponent.id = id;
  floatingComponent.action = action;
  window.parent.postMessage({
    'context': context,
    'action': 'PROXY_FLOATING_COMPONENT',
    'floatingComponent': floatingComponent
  }, '*');
};
TopNavBar.mountSearchSuggestionsLogic = function () {
  var searchSuggestionsElm = document.getElementById('tnb-search-suggestions');
  if (!searchSuggestionsElm) {
    return;
  }
  var searchEntireW3schoolsBtn = searchSuggestionsElm.querySelector('#search-entire-w3schools-btn');
  if (searchEntireW3schoolsBtn) {
    searchEntireW3schoolsBtn.addEventListener('click', TopNavBar.googleSearchSubmit);
  }
};
TopNavBar.unmountSearchSuggestionsLogic = function () {
  var searchSuggestionsElm = document.getElementById('tnb-search-suggestions');
  if (!searchSuggestionsElm) {
    return;
  }
  var searchEntireW3schoolsBtn = searchSuggestionsElm.querySelector('#search-entire-w3schools-btn');
  if (searchEntireW3schoolsBtn) {
    searchEntireW3schoolsBtn.removeEventListener('click', TopNavBar.googleSearchSubmit);
  }
};
TopNavBar.handleRedirect = function (context, redirectUrl) {
  TopNavBar._logDebug('handleRedirect -> context: redirectUrl: ', {
    'context': context,
    'redirectUrl': redirectUrl
  });
  if (redirectUrl.indexOf('http') !== 0) {
    if (redirectUrl.indexOf('/') !== 0) {
      redirectUrl = '/' + redirectUrl;
    }
    redirectUrl = window.location.protocol + '//' + window.location.hostname + redirectUrl;
    TopNavBar._logDebug('handleRedirect -> patched redirectUrl: ', redirectUrl);
  }
  if (TopNavBar.env === 'network' || TopNavBar._inIframe()) {
    TopNavBar.notifyParentAboutRedirect(context, redirectUrl);
  } else {
    window.location.href = redirectUrl;
  }
};
TopNavBar.searchWithSuggestions = function (inp) {
  var searchSuggestionsElm,
    val,
    i,
    l,
    resultIndexes = [],
    resultTexts = [],
    html = '',
    classAtt = '',
    pos1,
    posNext,
    cc,
    c0,
    c1,
    c2,
    stillgo,
    needle,
    dd;
  val = inp.value.trim().toUpperCase();
  if (val == '') {
    TopNavBar.closeSearchSuggestions();
    return false;
  }
  TopNavBar.unmountSearchSuggestionsLogic();
  searchSuggestionsElm = document.getElementById('tnb-search-suggestions');
  // searchSuggestionsElm.innerHTML = '';
  // searchSuggestionsElm.style.display = 'none';

  for (i = 0; i < array_search_suggestions.length; i++) {
    if (array_search_suggestions[i][3]) {
      stillgo = false;
      needle = array_search_suggestions[i][3];
      if (!Array.isArray(needle)) needle = [needle];
      for (var y in needle) {
        if (val.indexOf(needle[y].toUpperCase()) > -1) stillgo = true;
      }
      if (stillgo == false) continue;
    }
    if (array_search_suggestions[i][0].toUpperCase().substr(0, val.length) == val || array_search_suggestions[i][2].toUpperCase().substr(0, val.length) == val) {
      if (resultTexts.indexOf(array_search_suggestions[i][2]) == -1) {
        resultIndexes.push(i);
        resultTexts.push(array_search_suggestions[i][2]);
        if (resultIndexes.length > 5) break;
      }
    }
  }
  for (i = 0; i < array_search_suggestions.length; i++) {
    if (array_search_suggestions[i][3]) {
      stillgo = false;
      needle = array_search_suggestions[i][3];
      if (!Array.isArray(needle)) needle = [needle];
      for (var _y in needle) {
        if (val.indexOf(needle[_y].toUpperCase()) > -1) stillgo = true;
      }
      if (stillgo == false) continue;
    }
    if (resultIndexes.indexOf(i) == -1 && (array_search_suggestions[i][0].toUpperCase().indexOf(val) > -1 || array_search_suggestions[i][2].toUpperCase().indexOf(val) > -1)) {
      if (resultTexts.indexOf(array_search_suggestions[i][2]) == -1) {
        resultIndexes.push(i);
        resultTexts.push(array_search_suggestions[i][2]);
        if (resultIndexes.length > 5) break;
      }
    }
  }
  for (i = 0; i < resultIndexes.length; i++) {
    cc = array_search_suggestions[resultIndexes[i]][2];
    pos1 = cc.toUpperCase().indexOf(val);
    dd = '';
    while (pos1 > -1) {
      c0 = cc.substr(0, pos1);
      c1 = '<span class="span_search">' + cc.substr(pos1, val.length) + '</span>';
      c2 = cc.substr(pos1 + val.length);
      dd += c0 + c1;
      posNext = c2.toUpperCase().indexOf(val);
      if (posNext > -1) {
        cc = c2;
        pos1 = posNext;
      } else {
        cc = dd + c2;
        pos1 = -1;
      }
    }
    classAtt = '';
    if (html == '') classAtt = ' search_active';
    html += '<a class="search_item search-suggestion-link' + classAtt + '" href="' + array_search_suggestions[resultIndexes[i]][1] + '">' + cc + '</a>';
  }
  classAtt = '';
  if (html == '') classAtt = ' search_active';
  html += '<button class="search_item' + classAtt + '" id="search-entire-w3schools-btn" style="border-top:1px solid #ddd;">Search W3Schools</button>';
  searchSuggestionsElm.innerHTML = html;
  if (TopNavBar.env === 'network' || TopNavBar._inIframe()) {
    searchSuggestionsElm.style.opacity = '0';
  }
  searchSuggestionsElm.style.display = 'block';
  var dispos = document.getElementById('tnb-google-search-container');
  if (dispos) {
    searchSuggestionsElm.style.left = dispos.getBoundingClientRect().left + 'px';
  }
  TopNavBar.mountSearchSuggestionsLogic();
  TopNavBar._iframeProxyFloatingComponent('TopNavBar.searchWithSuggestions', 'tnb-search-suggestions', 'UPSERT', {
    'tagName': searchSuggestionsElm.tagName.toLowerCase(),
    'class': searchSuggestionsElm.getAttribute('class'),
    'innerHtml': html,
    'styles': {
      'display': 'block'
    },
    'mountFuncName': 'mountSearchSuggestionsLogic',
    'unmountFuncName': 'unmountSearchSuggestionsLogic'
    // 'pos': TopNavBar._getElementPos(searchSuggestionsElm)
  });
};
TopNavBar.searchFieldLostFocus = function (event) {
  window.setTimeout(function () {
    TopNavBar.closeSearchSuggestions();
  }, 500);
};
TopNavBar.googleSearchAttachKeyPressHandler = function (event) {
  var x,
    n,
    nn,
    i,
    cc = 0,
    dd;
  var keycode = event.keyCode;
  if (keycode === 38 || keycode === 40) {
    //up || down
    //x = TopNavBar.element.getElementsByClassName("search_item");
    x = document.getElementsByClassName('search_item');
    for (i = 0; i < x.length; i++) {
      if (x[i].className.indexOf('search_active') > -1) {
        x[i].className = 'search_item';
        n = i;
        break;
      }
    }
    if (keycode === 38) {
      nn = n - 1;
      if (nn < 0) nn = 0;
    }
    if (keycode === 40) {
      nn = n + 1;
      if (nn >= x.length) nn = nn - 1;
    }
    x[nn].className = 'search_item search_active';
  }
  if (keycode === 13) {
    //enter
    event.preventDefault();
    //x = TopNavBar.element.getElementsByClassName("search_item");
    x = document.getElementsByClassName('search_item');
    if (x.length === 0) {
      cc = 1;
    }
    for (i = 0; i < x.length; i++) {
      if (x[i].className.indexOf('search_active') > -1) {
        n = x[i].getAttribute('href');
        // if (n.indexOf("#search-entire-w3schools") > -1) {
        if (x[i].getAttribute('id') === 'search-entire-w3schools-btn') {
          cc = 1;
        }
        break;
      }
    }
    if (cc === 1) {
      TopNavBar.googleSearchSubmit();
      TopNavBar.closeSearchSuggestions();
    } else {
      if (n !== null) {
        TopNavBar.handleRedirect('TopNavBar.googleSearchAttachKeyPressHandler', n);
      }
    }
  }
};
TopNavBar.googleSearchInitializedCallback = function (callback) {
  if ((typeof google === "undefined" ? "undefined" : _typeof(google)) == 'object') {
    return callback();
  }
  var lookupAttempts = 512; // ~ 1 minute

  var lookupInterval = setInterval(function () {
    if ((typeof google === "undefined" ? "undefined" : _typeof(google)) == 'object') {
      clearInterval(lookupInterval);
      return callback();
    }
    lookupAttempts--;
    if (!lookupAttempts) {
      console.error('TopNavBar -> googleSearchInitializedCallback -> timeour');
      return clearInterval(lookupInterval);
    }
  }, 100);
};
TopNavBar.googleSearchGetInputValue = function () {
  return document.getElementById('tnb-google-search-input').value;
};
TopNavBar.googleSearchSubmit = function () {
  TopNavBar._logDebug('googleSearchSubmit');
  TopNavBar.googleSearchInit();
  if (!TopNavBar.googleSearchGetInputValue()) {
    TopNavBar._logDebug('googleSearchSubmit -> empty input');
    return;
  }
  TopNavBar.googleSearchInitializedCallback(TopNavBar.googleSearchExecute);
};
TopNavBar.googleSearchExecute = function () {
  var googleSearchInputValue = TopNavBar.googleSearchGetInputValue();
  var googleSearchExecuteRes = google.search.cse.element.getElement('standard0').execute(googleSearchInputValue);
  TopNavBar._logDebug('googleSearchExecute -> googleSearchInputValue, googleSearchExecuteRes: ', {
    'googleSearchInputValue': googleSearchInputValue,
    'googleSearchExecuteRes': googleSearchExecuteRes
  });
  TopNavBar.googleSearchResultsShownCallback(function () {
    TopNavBar._googleSearchPatchResultLinks();
    if (TopNavBar._inIframe()) {
      TopNavBar.notifyParentAboutLayout('on google search results', {
        'inputValue': googleSearchInputValue
      });
    }
  });
};

// > Google Search

TopNavBar.openMenu = function () {
  var accordionNavElm = TopNavBar.element.querySelector('.tnb-mobile-nav');
  var accordionNavBtnElm = TopNavBar.element.querySelector('.tnb-menu-btn');
  if (accordionNavElm.classList.contains('tnb-active')) {
    accordionNavElm.classList.remove('tnb-active');
    accordionNavBtnElm.getElementsByTagName('i')[0].style.display = 'inline';
    accordionNavBtnElm.getElementsByTagName('i')[1].style.display = 'none';
    TopNavBar.closeAllNavItems();
    TopNavBar.closeMenu();
  } else {
    accordionNavElm.classList.add('tnb-active');
    accordionNavBtnElm.getElementsByTagName('i')[0].style.display = 'none';
    accordionNavBtnElm.getElementsByTagName('i')[1].style.display = 'inline';
  }
  TopNavBar.notifyParentAboutLayout('on menu open (toggle)');
};
TopNavBar.closeMenu = function () {
  TopNavBar.element.querySelector('.tnb-mobile-nav').classList.remove('tnb-active');
  var accordionNavBtnElm = TopNavBar.element.querySelector('.tnb-menu-btn');
  accordionNavBtnElm.getElementsByTagName('i')[0].style.display = 'inline';
  accordionNavBtnElm.getElementsByTagName('i')[1].style.display = 'none';
  TopNavBar.notifyParentAboutLayout('on menu close');
};
TopNavBar._closeMobileNav = function (sectionWrapperElm) {
  sectionWrapperElm.classList.remove('tnb-active');
  sectionWrapperElm.querySelector('.tnb-mobile-nav-section-body').innerHTML = '';
  var sectionToggleBtnElm = sectionWrapperElm.querySelector('.tnb-mobile-nav-section-toggle-btn');
  sectionToggleBtnElm.classList.remove('tnb-active');
  var sectionToggleBtnIconElm = sectionToggleBtnElm.querySelector('.tnb-icon');
  sectionToggleBtnIconElm.classList.remove('fa-caret-up');
  sectionToggleBtnIconElm.classList.add('fa-caret-down');
};
TopNavBar._openMobileNav = function (sectionWrapperElm, sectionId) {
  var sectionBodyElm = sectionWrapperElm.querySelector('.tnb-mobile-nav-section-body');
  sectionBodyElm.innerHTML = TopNavBar.element.querySelector('#nav_' + sectionId).innerHTML;
  var sectionFilterInputElm = sectionBodyElm.querySelector('.filter-input');
  if (sectionFilterInputElm) {
    sectionFilterInputElm.removeAttribute('oninput');
    sectionFilterInputElm.addEventListener('input', function (event) {
      TopNavBar.filter(event, 'sectionxs_' + sectionId);
    });
  }
  var sectionFilterClearBtnElm = sectionBodyElm.querySelector('.filter-clear-btn');
  if (sectionFilterClearBtnElm) {
    sectionFilterClearBtnElm.removeAttribute('onclick');
    sectionFilterClearBtnElm.addEventListener('click', function (event) {
      TopNavBar.clearFilter(event, 'sectionxs_' + sectionId);
    });
  }
  var sectionToggleBtnElm = sectionWrapperElm.querySelector('.tnb-mobile-nav-section-toggle-btn');
  sectionToggleBtnElm.classList.add('tnb-active');
  var sectionToggleBtnIconElm = sectionToggleBtnElm.querySelector('.tnb-icon');
  sectionToggleBtnIconElm.classList.remove('fa-caret-down');
  sectionToggleBtnIconElm.classList.add('fa-caret-up');
  sectionWrapperElm.classList.add('tnb-active');
  setTimeout(function () {
    TopNavBar._scrollMobileNav(sectionWrapperElm);
  }, 50);
};
TopNavBar._scrollMobileNav = function (targetElm, smoothScroll, scrollTopValue) {
  clearInterval(TopNavBar.mobileNavScrollInterval);
  var scrollElm = TopNavBar.element.querySelector('#tnb-mobile-nav');
  var scrollElmOffset = scrollElm.getBoundingClientRect();
  var targetElmOffset = targetElm.getBoundingClientRect();
  TopNavBar._logDebug('_scrollMobileNav: ', {
    'scrollElm': scrollElm,
    'scrollElm.scrollTop': scrollElm.scrollTop,
    'scrollElmOffset': scrollElmOffset,
    'targetElmOffset': targetElmOffset,
    'scrollTopValue': scrollTopValue
  });
  if (typeof smoothScroll === 'undefined') {
    smoothScroll = true;
  }
  if (typeof scrollTopValue === 'undefined') {
    scrollTopValue = targetElmOffset.top + scrollElm.scrollTop - scrollElmOffset.top - 1;
  }
  TopNavBar._logDebug('_scrollMobileNav -> scrollTopValue: ', scrollTopValue);
  TopNavBar._logDebug('_scrollMobileNav -> scrollElm.scrollTop: ', scrollElm.scrollTop);
  TopNavBar._logDebug('_scrollMobileNav -> scrollTopValue - scrollElm.scrollTop: ', scrollTopValue - scrollElm.scrollTop);
  if (scrollTopValue === scrollElm.scrollTop) {
    return;
  }
  if (!smoothScroll) {
    scrollElm.scrollTop = scrollTopValue;
    return;
  }
  var scrollIntervalDelay = 2;
  var scrollAmount = 0;
  var scrollAmountPerIntervalTick = 0;
  if (scrollElm.scrollTop < scrollTopValue) {
    scrollAmount = scrollTopValue - scrollElm.scrollTop;
    scrollAmountPerIntervalTick = scrollAmount / 50 + 10;
    TopNavBar._logDebug('_scrollMobileNav -> scrollAmount (add): ', scrollAmount);
    TopNavBar._logDebug('_scrollMobileNav -> scrollAmountPerIntervalTick (add): ', scrollAmountPerIntervalTick);
    TopNavBar.mobileNavScrollInterval = setInterval(function () {
      scrollElm.scrollTop += scrollAmountPerIntervalTick;
      if (scrollElm.scrollTop >= scrollTopValue) {
        scrollElm.scrollTop = scrollTopValue;
        clearInterval(TopNavBar.mobileNavScrollInterval);
      }
    }, scrollIntervalDelay);
  } else {
    scrollAmount = scrollElm.scrollTop - scrollTopValue;
    scrollAmountPerIntervalTick = scrollAmount / 50 + 10;
    TopNavBar._logDebug('_scrollMobileNav -> scrollAmount (sub): ', scrollAmount);
    TopNavBar._logDebug('_scrollMobileNav -> scrollAmountPerIntervalTick (sub): ', scrollAmountPerIntervalTick);
    TopNavBar.mobileNavScrollInterval = setInterval(function () {
      scrollElm.scrollTop -= scrollAmountPerIntervalTick;
      if (scrollElm.scrollTop <= scrollTopValue) {
        scrollElm.scrollTop = scrollTopValue;
        clearInterval(TopNavBar.mobileNavScrollInterval);
      }
    }, scrollIntervalDelay);
  }
};
TopNavBar.toggleMobileNav = function (event, sectionId) {
  var sectionToggleBtnElm = event.target.classList.contains('w3-button') ? event.target : event.target.parentElement;
  var sectionWrapperElm = sectionToggleBtnElm.parentElement;
  if (sectionWrapperElm.classList.contains('tnb-active')) {
    // close current section
    TopNavBar._closeMobileNav(sectionWrapperElm);
    setTimeout(function () {
      // TopNavBar._scrollMobileNav(sectionWrapperElm, false, 0);
      TopNavBar._scrollMobileNav(sectionWrapperElm, true, 0);
    }, 50);
  } else {
    // open section
    // check/close other open sections
    TopNavBar._findInnerElements(TopNavBar.element, '.tnb-mobile-nav-section.tnb-active', function (sectionWrapperElm) {
      TopNavBar._closeMobileNav(sectionWrapperElm);
    });
    TopNavBar._openMobileNav(sectionWrapperElm, sectionId);
  }
};
TopNavBar.openNavItem = function (navId) {
  if (TopNavBar.element.querySelector('#nav_' + navId).style.display === 'block') {
    TopNavBar.closeNavItem(navId);
    TopNavBar.element.classList.remove('full-screen');
  } else {
    TopNavBar.closeAllNavItems();
    TopNavBar.element.classList.add('full-screen');
    TopNavBar.element.querySelector('#nav_' + navId).style.display = 'block';
    TopNavBar.element.querySelector('#nav_' + navId).focus();
    if (TopNavBar.element.querySelector('#navbtn_' + navId)) {
      TopNavBar.element.querySelector('#navbtn_' + navId).getElementsByTagName('i')[0].style.display = 'none';
      TopNavBar.element.querySelector('#navbtn_' + navId).getElementsByTagName('i')[1].style.display = 'inline';
      TopNavBar.element.querySelector('#navbtn_' + navId).classList.add('mystyle');
    }
    TopNavBar.notifyParentAboutLayout('on nav item open', {
      'navId': navId
    });
  }
};
TopNavBar.closeNavItem = function (navId) {
  var navItemElm = TopNavBar.element.querySelector('#nav_' + navId);
  if (!navItemElm) {
    return;
  }
  navItemElm.style.display = 'none';
  TopNavBar.element.classList.remove('full-screen');
  if (navId !== 'services') {
    try {
      var inputAltEvent = new Event('input', {
        'bubbles': true,
        'cancelable': true
      });
      navItemElm.querySelector('input').value = '';
      navItemElm.querySelector('input').dispatchEvent(inputAltEvent);
    } catch (exc) {
      console.error(exc);
    }
  }
  if (TopNavBar.element.querySelector('#navbtn_' + navId)) {
    TopNavBar.element.querySelector('#navbtn_' + navId).getElementsByTagName('i')[0].style.display = 'inline';
    TopNavBar.element.querySelector('#navbtn_' + navId).getElementsByTagName('i')[1].style.display = 'none';
    TopNavBar.element.querySelector('#navbtn_' + navId).classList.remove('mystyle');
  }
  TopNavBar.notifyParentAboutLayout('on nav item close', {
    'navId': navId
  });
};
TopNavBar.closeSearchSuggestions = function () {
  TopNavBar.unmountSearchSuggestionsLogic();
  var searchSuggestionsElm = document.getElementById('tnb-search-suggestions');
  searchSuggestionsElm.style.display = 'none';
  searchSuggestionsElm.innerHTML = '';
  TopNavBar._iframeProxyFloatingComponent('TopNavBar.closeSearchSuggestions', 'tnb-search-suggestions', 'REMOVE', {
    // 'mountFuncName': 'mountSearchSuggestionsLogic',
    'unmountFuncName': 'unmountSearchSuggestionsLogic'
  });
};

// < menu filter
TopNavBar.allMenuItemsInCategoryAreHidden = function (menu, category) {
  var elements = menu.querySelectorAll("[data-category=\"".concat(category, "\"]"));
  for (var i = 0; i < elements.length; i++) {
    if (!elements[i].classList.contains('d-none')) {
      return false;
    }
  }
  return true;
};
TopNavBar.clearFilter = function (event, sectionId) {
  var filterInnerWrapperElm = event.target.classList.contains('filter-clear-btn') ? event.target.parentElement : event.target.parentElement.parentElement;
  var filterInputElm = filterInnerWrapperElm.querySelector('.filter-input');
  // console.log('filterInputElm: ', filterInputElm);

  if (filterInputElm) {
    filterInputElm.value = '';
  }
  TopNavBar.filter(event, sectionId, '');
};
TopNavBar._filterServices = function (event, sectionId, filterValue) {
  // TopNavBar._logDebug('filterValue: ', filterValue);

  var sectionElm = TopNavBar.element.querySelector('#' + sectionId);
  var serviceboxesElm = sectionElm.querySelector('.serviceboxes');
  var noMatchElm = serviceboxesElm.querySelector('#no-match');
  if (noMatchElm) {
    noMatchElm.remove();
  }
  if (!filterValue) {
    TopNavBar._findInnerElements(serviceboxesElm, '.servicebox', function (elm) {
      elm.style.display = 'block';
    });
  } else {
    var matchFound = false;
    TopNavBar._findInnerElements(serviceboxesElm, '.servicebox', function (elm) {
      // TopNavBar._logDebug('elm.textContent: ', elm.textContent);
      if (elm.textContent.toLowerCase().indexOf(filterValue) !== -1) {
        elm.style.display = 'block';
        matchFound = true;
      } else {
        elm.style.display = 'none';
      }
    });
    if (!matchFound) {
      var noMatchMessage = document.createElement('div');
      noMatchMessage.id = 'no-match';
      noMatchMessage.textContent = 'No matches found';
      noMatchMessage.style.marginTop = '25px';
      noMatchMessage.style.textAlign = 'center';
      serviceboxesElm.appendChild(noMatchMessage);
    }
  }
};
TopNavBar.filter = function (event, sectionId, altValue) {
  var filterValue = typeof altValue !== 'undefined' ? altValue : event.target.value.toLowerCase();
  if (sectionId === 'nav_services' || sectionId === 'sectionxs_services') {
    return TopNavBar._filterServices(event, sectionId, filterValue);
  }
  var sectionElm = TopNavBar.element.querySelector('#' + sectionId);
  var noMatchElm = sectionElm.querySelector('#no-match');
  if (noMatchElm) {
    noMatchElm.remove();
  }
  if (sectionId !== 'nav_tutorials' && sectionId !== 'sectionxs_tutorials') {
    TopNavBar._findInnerElements(sectionElm, '.black-box-container', function (elm) {
      elm.style.display = 'block';
    });
  }
  var uniqueCategoriesDeduplicator = {};
  TopNavBar._findInnerElements(sectionElm, '[data-category]', function (elm) {
    uniqueCategoriesDeduplicator[elm.getAttribute('data-category')] = true;
  });
  var uniqueCategories = Object.keys(uniqueCategoriesDeduplicator);
  TopNavBar._findInnerElements(sectionElm, '[data-name]', function (elm) {
    var dataName = elm.getAttribute('data-name');
    if (!dataName.includes(filterValue)) {
      elm.classList.remove('d-block');
      elm.classList.add('d-none');
    } else {
      elm.classList.remove('d-none');
      elm.classList.add('d-block');
    }
  });
  var emptyCategories = [];
  uniqueCategories.forEach(function (category) {
    var allHidden = TopNavBar.allMenuItemsInCategoryAreHidden(sectionElm, category);
    if (allHidden) {
      emptyCategories.push(category);
    }

    // hide section heading element if all inner items are hidden
    TopNavBar._findInnerElements(sectionElm, "[data-heading=\"".concat(category, "_title\"]"), function (headingElm) {
      if (allHidden) {
        headingElm.classList.add('d-none');
      } else {
        headingElm.classList.remove('d-none');
      }
    });
  });

  // Checks if all categories are empty, if true displays a message "No match found..."
  if (emptyCategories.length === uniqueCategories.length) {
    var noMatchMessage = document.createElement('div');
    noMatchMessage.id = 'no-match';
    noMatchMessage.textContent = 'No matches found';
    noMatchMessage.style.marginTop = '25px';
    noMatchMessage.style.textAlign = 'center';
    sectionElm.querySelector('.w3-content').appendChild(noMatchMessage);
    if (sectionId !== 'nav_tutorials' && sectionId !== 'sectionxs_tutorials') {
      TopNavBar._findInnerElements(sectionElm, '.black-box-container', function (elm) {
        elm.style.display = 'none';
      });
    }
  }
};

// > menu filter
TopNavBar.sortMenu = function (sectionId, type) {
  var section = TopNavBar.element.querySelector('#nav_' + sectionId);
  var linkLists = TopNavBar._menuSectionsInTab[sectionId].map(function (listId) {
    return section.querySelector("#".concat(listId));
  });
  if (type.toLowerCase() === 'alphabetically') {
    linkLists.forEach(function (list) {
      var divsArray = TopNavBar._findInnerElements(list, 'div');

      // Sort the child divs.
      divsArray.sort(function (a, b) {
        var aText = a.querySelector('a').innerText;
        var bText = b.querySelector('a').innerText;
        return aText.toLowerCase().localeCompare(bText.toLowerCase());
      });

      // Append each sorted div back into the parent.
      divsArray.forEach(function (div) {
        list.appendChild(div);
      });
    });
  } else {
    linkLists.forEach(function (section) {
      var divsArray = TopNavBar._findInnerElements(section, 'div');
      // Sort based on original index.
      divsArray.sort(function (a, b) {
        return a.dataset.originalIndex - b.dataset.originalIndex;
      });
      // Append each sorted div back into the parent.
      divsArray.forEach(function (div) {
        section.appendChild(div);
      });
    });
  }
};
TopNavBar.closeAllNavItems = function () {
  TopNavBar.closeNavItem('tutorials');
  TopNavBar.closeNavItem('exercises');
  TopNavBar.closeNavItem('certified');
  TopNavBar.closeNavItem('services');
  TopNavBar.element.classList.remove('full-screen');
  TopNavBar.closeSearchSuggestions();
};
TopNavBar.initUserPreferredTheme = function () {
  TopNavBar.toggleUserPreferredTheme(true);
};
TopNavBar.toggleUserPreferredTheme = function (init) {
  if (typeof init === 'undefined') {
    init = false;
  }

  // var codeTheme = localStorage.getItem('preferredmode');
  var pageTheme = localStorage.getItem('preferredpagemode');
  if (!init) {
    if (pageTheme == 'dark') {
      pageTheme = 'light';
    } else {
      pageTheme = 'dark';
    }
  }
  var bodyClassName = document.body.className.replace('darktheme', '').replace('darkpagetheme', '').replace('  ', ' ');
  if (pageTheme == 'dark') {
    bodyClassName += ' darktheme';
    bodyClassName += ' darkpagetheme';
  }
  document.body.className = bodyClassName;
  localStorage.setItem('preferredmode', pageTheme);
  localStorage.setItem('preferredpagemode', pageTheme);
};

// generic one
TopNavBar.mouseHandler = function (event, elm, closingOrExtra) {
  TopNavBar._logDebug('mouseHandler -> args: ', arguments);
  if (typeof closingOrExtra === 'undefined') {
    closingOrExtra = false;
  }
  var icon = elm.querySelector('i');
  if (event.type === 'keydown') {
    if (event.code !== 'Enter') return;
    if (event.code === 'Enter') {
      if (elm.id.includes('close-nav-x')) {
        TopNavBar.closeNavItem(closingOrExtra); // closingOrExtra in this case is 'tutorials' | 'exercises' | 'certified' | 'services'
        return;
      }
      var modalonEnter = elm.nextElementSibling;
      icon.className = modalonEnter.style.display === 'block' ? 'fa fa-caret-down filter-caret' : 'fa fa-caret-up filter-caret';
      modalonEnter.style.display = modalonEnter.style.display === 'block' ? 'none' : 'block';
    } else {
      event.preventDefault();
    }
  } else if (elm.id.includes('close-nav-x')) {
    TopNavBar.closeNavItem(closingOrExtra); // closingOrExtra in this case is 'tutorials' | 'exercises' | 'certified' | 'services'
  } else {
    var modalonKeydown = elm.querySelector('.filter-modal-container');
    icon.className = closingOrExtra ? 'fa fa-caret-down filter-caret' : 'fa fa-caret-up filter-caret';
    modalonKeydown.style.display = closingOrExtra ? 'none' : 'block';
  }
};
TopNavBar._attachMenuSortLogic = function () {
  TopNavBar._logDebug('_attachMenuSortLogic');

  // used for restoring original sort order
  var storeOriginalSortIndexes = function storeOriginalSortIndexes() {
    var menus = [];
    TopNavBar._loopObj(TopNavBar._menuSectionsInTab, function (tabListIds, tabId) {
      menus.push(tabListIds.map(function (listId) {
        return TopNavBar.element.querySelector("#nav_".concat(tabId)).querySelector("#".concat(listId));
      }));
    });
    menus.forEach(function (lists) {
      lists.forEach(function (list) {
        TopNavBar._findInnerElements(list, 'div', function (divElm, divElmIndex) {
          divElm.dataset.originalIndex = divElmIndex;
        });
      });
    });
  };
  storeOriginalSortIndexes();
  var attachSortBtnEventListeners = function attachSortBtnEventListeners(sortBtnElm) {
    sortBtnElm.addEventListener('mouseenter', function (event) {
      TopNavBar.mouseHandler(event, sortBtnElm, false);
    });
    sortBtnElm.addEventListener('mouseleave', function (event) {
      TopNavBar.mouseHandler(event, sortBtnElm, true);
    });
    sortBtnElm.addEventListener('focusout', function (event) {
      var isClickInside = sortBtnElm.contains(event.relatedTarget);
      if (!isClickInside) {
        sortBtnElm.querySelector('.filter-modal-container').style.display = 'none';
      }
    });
  };
  var enabledSortNavs = ['tutorials', 'exercises', 'certified'];
  TopNavBar._loopArray(enabledSortNavs, function (sortNav) {
    var sortBtnElm = TopNavBar.element.querySelector('#' + sortNav + '-sort-btn');
    if (sortBtnElm) {
      attachSortBtnEventListeners(sortBtnElm);
      var sortFilterContainer = sortBtnElm.querySelector('.filter-modal');
      TopNavBar._logDebug('sortNav, sortFilterContainer: ', {
        sortNav: sortNav,
        sortFilterContainer: sortFilterContainer
      });
      if (sortFilterContainer) {
        TopNavBar._findInnerElements(sortFilterContainer, 'button', function (buttonElm) {
          buttonElm.addEventListener('click', function (event) {
            TopNavBar._logDebug('sortNav click: ', {
              sortNav: sortNav,
              eventTarget: event.target
            });
            var sortBy = event.target.innerText;
            TopNavBar.element.querySelector("#".concat(sortNav, "-active-sorting")).textContent = sortBy;
            var sortByBtn = sortFilterContainer.querySelector("#".concat(sortNav, "-").concat(sortBy.toLowerCase()));
            sortFilterContainer.querySelector('.w3-button.active').classList.remove('active');
            sortByBtn.classList.add('active');
            TopNavBar.sortMenu(sortNav, sortBy);
          });
        });
      }
    }
  });
};
TopNavBar._tweakElement = function (prs) {
  TopNavBar.logDebug('_tweakElement -> prs: ', prs);
  if (typeof prs === 'undefined') {
    TopNavBar.logError('_tweakElement -> prs is undefined');
    return;
  }
  if (typeof prs.selector === 'undefined') {
    TopNavBar.logError('_tweakElement -> prs.selector is undefined');
    return;
  }
  var wrapperElm = TopNavBar.element;
  if (typeof prs.wrapper !== 'undefined') {
    if (prs.wrapper === 'SecondaryNav') {
      if (TopNavBar.hasNetworkSecondaryNav) {
        wrapperElm = TopNavBar.element.querySelector('#secondary-top-nav-bar');
      } else {
        wrapperElm = document.getElementById('subtopnav');
      }
    }
  }
  var elm = wrapperElm.querySelector(prs.selector);
  if (!elm) {
    TopNavBar.logError('_tweakElement -> element not found: ', {
      'selector': prs.selector
    });
    return;
  }
  if (typeof prs.addClass !== 'undefined') {
    elm.classList.add(prs.addClass);
  } else if (typeof prs.addClasses !== 'undefined') {
    TopNavBar._loopArray(prs.addClasses, function (className) {
      elm.classList.add(className);
    });
  }
  if (typeof prs.removeClass !== 'undefined') {
    elm.classList.remove(prs.addClass);
  } else if (typeof prs.removeClasses !== 'undefined') {
    TopNavBar._loopArray(prs.removeClasses, function (className) {
      elm.classList.remove(className);
    });
  }
  if (typeof prs.setAttributes !== 'undefined') {
    TopNavBar._loopObj(prs.setAttributes, function (value, key) {
      elm.setAttribute(key, value);
    });
  }
  if (typeof prs.removeAttributes !== 'undefined') {
    TopNavBar._loopArray(prs.removeAttributes, function (attrName) {
      elm.removeAttribute(attrName);
    });
  }
  if (typeof prs.setStyles !== 'undefined') {
    TopNavBar._loopObj(prs.setStyles, function (value, key) {
      elm.style[key] = value;
    });
  }
  if (typeof prs.removeStyles !== 'undefined') {
    TopNavBar._loopArray(prs.removeStyles, function (styleName) {
      elm.style.removeProperty(styleName);
    });
  }
  if (typeof prs.setText !== 'undefined') {
    elm.textContent = prs.setText;
  }
  if (typeof prs.setHtml !== 'undefined') {
    elm.innerHTML = prs.setHtml;
  }
  if (typeof prs.remove !== 'undefined' && prs.remove) {
    elm.remove();
  }
};
TopNavBar.iframeTweakElements = function (prs) {
  TopNavBar.logDebug('iframeTweakElements -> prs: ', prs);
  if (!TopNavBar.inIframe) {
    TopNavBar.logError('iframeTweakElements -> not in iframe');
    return;
  }
  if (Array.isArray(prs)) {
    TopNavBar._loopArray(prs, function (elmPrs) {
      TopNavBar._tweakElement(elmPrs);
    });
  } else {
    TopNavBar._tweakElement(prs);
  }
};
TopNavBar.tutorialPaths = ['html', 'css', 'bootstrap', 'bootstrap3', 'bootstrap4', 'bootstrap5', 'w3css', 'sass', 'colors', 'icons', 'graphics', 'charsets', 'ai', 'gen_ai', 'python', 'dsa', 'datascience', 'python', 'statistics', 'excel', 'googlesheets', 'js', 'react', 'jquery', 'vue', 'angular', 'js', 'appml', 'w3js', 'python', 'sql', 'mysql', 'php', 'java', 'c', 'cpp', 'cs', 'r', 'kotlin', 'go', 'django', 'postgresql', 'typescript', 'asp', 'nodejs', 'git', 'mongodb', 'xml'];
TopNavBar._encryptData = function (data) {
  // Simple XOR encryption with a fixed key
  var key = 'w3s_k3y_2024';
  var encrypted = '';
  for (var i = 0; i < data.length; i++) {
    encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return btoa(encrypted);
};
TopNavBar._decryptData = function (encryptedData) {
  try {
    var key = 'w3s_k3y_2024';
    var data = atob(encryptedData);
    var decrypted = '';
    for (var i = 0; i < data.length; i++) {
      decrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return decrypted;
  } catch (e) {
    console.error('Failed to decrypt tutorial data');
    return null;
  }
};
TopNavBar.setLastVisitedTutorial = function (tutorialData) {
  try {
    if (TopNavBar.env === 'network' || TopNavBar._inIframe()) {
      return; // cache can be set only from classic
    }
    if (!tutorialData || _typeof(tutorialData) !== 'object') {
      throw new Error('Invalid tutorial data');
    }
    var requiredFields = ['topicName', 'lessonName', 'lessonRelPath', 'progress'];
    for (var _i2 = 0, _requiredFields = requiredFields; _i2 < _requiredFields.length; _i2++) {
      var field = _requiredFields[_i2];
      if (typeof tutorialData[field] === 'string' && !tutorialData[field].trim()) {
        throw new Error("Missing or invalid ".concat(field));
      }
    }

    // tutorialData.lessonRelPath = tutorialData.lessonRelPath.replace(/[^a-zA-Z0-9/_.-]/g, '');

    // if (
    //   !(TopNavBar.env === 'network' || TopNavBar._inIframe()) &&
    //   TopNavBar.tutorialPaths.includes(window.location.pathname.split('/')[1])
    // ) {
    var now = new Date();
    var expiryDate = new Date(now.setMonth(now.getMonth() + 1));
    var cookieData = TopNavBar._encryptData(JSON.stringify(_objectSpread(_objectSpread({}, tutorialData), {}, {
      timestamp: Date.now()
    })));
    document.cookie = "__up1_w3s2025_1=".concat(cookieData, "; expires=").concat(expiryDate.toUTCString(), "; path=/; domain=.w3schools.com; SameSite=Strict").concat(window.location.protocol === 'https:' ? '; Secure' : '');
    TopNavBar._logDebug('Cookie written:', {
      topicName: tutorialData.topicName,
      lessonName: tutorialData.lessonName,
      lessonRelPath: tutorialData.lessonRelPath,
      progress: tutorialData.progress,
      expires: expiryDate.toUTCString()
    });
    // }
  } catch (e) {
    console.error('Failed to set tutorial cookie:', e);
  }
};
TopNavBar.getLastVisitedTutorial = function () {
  try {
    /*
    if (TopNavBar.env === 'network' || TopNavBar._inIframe()) {
      return null;
    }
    */

    var cookies = document.cookie.split(';');
    var tutorialCookie = cookies.find(function (c) {
      return c.trim().startsWith('__up1_w3s2025_1=');
    });
    if (!tutorialCookie) {
      TopNavBar._logDebug('No tutorial cookie found');
      return null;
    }
    var encryptedData = tutorialCookie.split('=')[1];
    var decryptedData = TopNavBar._decryptData(encryptedData);
    if (!decryptedData) {
      TopNavBar._logDebug('Failed to decrypt cookie data');
      return null;
    }
    var tutorialData = JSON.parse(decryptedData);
    var requiredFields = ['topicName', 'lessonName', 'lessonRelPath', 'progress', 'timestamp'];
    for (var _i3 = 0, _requiredFields2 = requiredFields; _i3 < _requiredFields2.length; _i3++) {
      var field = _requiredFields2[_i3];
      if (!tutorialData[field]) {
        return null;
      }
    }

    // Check if cookie is expired (1 month)
    if (Date.now() - tutorialData.timestamp > 30 * 24 * 60 * 60 * 1000) {
      return null;
    }

    // Sanitize path before returning
    // tutorialData.lessonRelPath = tutorialData.lessonRelPath.replace(/[^a-zA-Z0-9/_.-]/g, '');

    var result = {
      topicName: tutorialData.topicName,
      // lessonName: tutorialData.lessonName.replace(/^[-\s]+|[-\s]+$/g, '') || 'HOME',
      lessonName: tutorialData.lessonName,
      lessonRelPath: tutorialData.lessonRelPath,
      progress: tutorialData.progress,
      lessonsScore: 0,
      // TODO: cleanup
      lessonsTotal: 1 // TODO: cleanup
    };
    TopNavBar._logDebug('Cookie read:', _objectSpread(_objectSpread({}, result), {}, {
      timestamp: tutorialData.timestamp,
      age: Math.round((Date.now() - tutorialData.timestamp) / (1000 * 60 * 60 * 24)) + ' days'
    }));
    return result;
  } catch (e) {
    console.error('Failed to read tutorial cookie:', e);
    return null;
  }
};
TopNavBar._myLearningStateLookup = function () {
  return new Promise(function (resolve) {
    if (TopNavBar._inIframe()) {
      resolve({
        error: {
          code: 'IFRAMED',
          description: 'Iframed'
        },
        data: null
      });
    }
    if (typeof MyLearning === 'undefined') {
      resolve({
        error: {
          code: 'ENV_NOT_FOUND',
          description: 'Env not found'
        },
        data: null
      });
    }
    Util.objFieldOnSetCallback({
      scopeRef: MyLearning,
      fieldName: 'lessonStateFetched',
      callback: function callback(res) {
        if (MyLearning.lessonStateFetched) {
          resolve({
            error: res.error,
            data: MyLearning
          });
        } else {
          resolve({
            error: {
              code: 'MYL_STATE_NOT_FETCHED',
              description: 'My learning state not fetched'
            },
            data: null
          });
        }
      }
    });
  });
};
TopNavBar._extractCurrentProgressFromMyLearningState = function (mylState) {
  if (mylState.pageType !== 'lesson') {
    return null;
  }
  var _mylState$lessonFullN = mylState.lessonFullName.split(/\s*-\s*/),
    _mylState$lessonFullN2 = _slicedToArray(_mylState$lessonFullN, 3),
    topicName = _mylState$lessonFullN2[0],
    chapterName = _mylState$lessonFullN2[1],
    lessonName = _mylState$lessonFullN2[2];
  var output = {
    topicName: topicName,
    lessonName: lessonName,
    lessonRelPath: window.location.pathname.substring(1),
    // remove leading slash
    progress: Math.min(Math.round(mylState.pages_read_count / mylState.total_pages_count * 100), 100)
  };
  TopNavBar._logDebug('_extractCurrentProgressFromMyLearningState -> output: ', output);
  return output;
};
TopNavBar.fetchUserData = function (mylState) {
  return new Promise(function (resolve) {
    if (TopNavBar.cachedUserData) {
      TopNavBar._logDebug('fetchUserData -> cached: ', TopNavBar.cachedUserData);
      return resolve(TopNavBar.cachedUserData);
    }

    // var rightSection = document.querySelector('.tnb-right-section');
    // if (rightSection) {
    //   var loader = rightSection.querySelector('.loader');
    //   if (loader) {
    //     loader.style.visibility = 'visible';
    //   }
    // }

    Promise.all([new Promise(function (resolveProfile) {
      Util.fetch({
        context: 'TopNavBar -> fetchUserData -> profile',
        method: 'GET',
        url: TopNavBar.pathfinderApiBaseUrl + '/profile-api/profile/basic-lite?fields=personal',
        prepareResponseData: true,
        withUserSession: true,
        handleUserSessionRefresh: false,
        handleUserSessionRedirection: false,
        callback: function callback(reqRes) {
          var _reqRes$data;
          if (reqRes.error.code === '0' && (_reqRes$data = reqRes.data) !== null && _reqRes$data !== void 0 && _reqRes$data.personal) {
            var _reqRes$data$personal = reqRes.data.personal,
              firstName = _reqRes$data$personal.firstName,
              lastName = _reqRes$data$personal.lastName,
              profilePicture = _reqRes$data$personal.profilePicture;
            var fullName = "".concat(firstName, " ").concat(lastName).trim();
            resolveProfile({
              fullName: fullName,
              firstName: firstName,
              lastName: lastName
            });

            // var loader = rightSection.querySelector('.loader');
            // if (loader) {
            //   loader.style.display = 'none';
            // }
            // var defaultProfileIcon = rightSection.querySelector('.user-profile-icon');
            // if (defaultProfileIcon) {
            //   defaultProfileIcon.style.visibility = 'visible';
            // }

            // const chevronBtn = rightSection.querySelector('.tnb-profile-chevron-btn');
            // if (chevronBtn) {
            //   chevronBtn.style.visibility = 'visible';
            // }

            if (profilePicture) {
              TopNavBar.renderProfilePicture(TopNavBar.altProfileBaseUrl + '/' + profilePicture);
            }
            TopNavBar.renderName(firstName, lastName, true);
          } else {
            console.error('Error fetching profile data:', reqRes);
            resolveProfile(null);
            TopNavBar._logWarning('TopNavBar -> _applyUserSessionUiTweaks -> profile picture -> reqRes: ', reqRes);
          }
        }
      });
    }), new Promise(function (resolveProgress) {
      Util.fetch({
        context: 'TopNavBar -> fetchUserData -> progress',
        method: 'GET',
        url: "".concat(TopNavBar._myLearningApiBaseUrl, "/api/user/state?lite=true&withBookmarks=true"),
        prepareResponseData: true,
        withUserSession: true,
        handleUserSessionRefresh: false,
        handleUserSessionRedirection: false,
        callback: function callback(reqRes) {
          if (reqRes.error.code === '0' && reqRes.data) {
            resolveProgress(reqRes.data);
          } else {
            console.error('Error fetching progress data:', reqRes);
            resolveProgress(null);
          }
        }
      });
    })]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        profileData = _ref2[0],
        progressData = _ref2[1];
      TopNavBar._logDebug('fetchUserData -> profileData, progressData', {
        profileData: profileData,
        progressData: progressData
      });
      TopNavBar.mylUserLiteState = progressData;
      if (!profileData) {
        resolve(null);
        return;
      }
      if (typeof mylState !== 'undefined' && mylState !== null) {
        var _currentProgress = TopNavBar._extractCurrentProgressFromMyLearningState(mylState);
        if (_currentProgress !== null) {
          // Set cookie for current tutorial
          TopNavBar.setLastVisitedTutorial(_currentProgress);
        } else {
          _currentProgress = TopNavBar.getLastVisitedTutorial();
        }
        TopNavBar.cachedUserData = _objectSpread(_objectSpread({}, profileData), {}, {
          currentProgress: _currentProgress
        });
        resolve(TopNavBar.cachedUserData);
        return;
      }
      var currentTopic = null;
      var mostRecentTopic = null;
      var mostRecentTime = 0;

      // Try to get last visited from cookie first
      currentTopic = TopNavBar.getLastVisitedTutorial();
      if (progressData !== null && progressData !== void 0 && progressData.topics) {
        var shouldShowCurrentTopic = TopNavBar.tutorialPaths.includes(window.location.pathname.split('/')[1]);
        var currentPath = shouldShowCurrentTopic ? window.location.pathname.split('/')[1] : null;

        // Only override cookie if we're on a tutorial page and not in network/iframe
        if (shouldShowCurrentTopic && currentPath && !(TopNavBar.env === 'network' || TopNavBar._inIframe())) {
          var _document$querySelect;
          var tutorialTitle = document.title.replace(' Tutorial', '').replace(' | W3Schools', '') || ((_document$querySelect = document.querySelector('h1')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.textContent) || currentPath.toUpperCase();
          var defaultTopic = {
            topicName: tutorialTitle.split(' ')[0],
            lessonName: tutorialTitle.split(' ').slice(1).join(' ').replace(/^[-\s]+|[-\s]+$/g, '') || 'HOME',
            lessonRelPath: window.location.pathname.substring(1),
            lessonsScore: 0,
            lessonsTotal: 1
          };
          currentTopic = defaultTopic;

          // Set cookie for current tutorial
          TopNavBar.setLastVisitedTutorial({
            topicName: defaultTopic.topicName,
            lessonName: defaultTopic.lessonName,
            lessonRelPath: defaultTopic.lessonRelPath,
            progress: 0
          });
          Object.entries(progressData.topics).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              uuid = _ref4[0],
              topic = _ref4[1];
            if (topic.lessonRelPath && topic.lessonRelPath.startsWith(currentPath + '/')) {
              currentTopic = _objectSpread(_objectSpread({}, topic), {}, {
                topicName: defaultTopic.topicName,
                lessonName: defaultTopic.lessonName
              });
            }
          });
        }

        // If we have a cookie topic, try to find matching progress
        if (currentTopic) {
          var cookieTopicPath = currentTopic.lessonRelPath.split('/')[0];
          var foundProgress = false;
          Object.entries(progressData.topics).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
              uuid = _ref6[0],
              topic = _ref6[1];
            if (topic.lessonRelPath && topic.lessonRelPath.startsWith(cookieTopicPath + '/')) {
              // Keep cookie's topic/lesson names but get progress data
              currentTopic = _objectSpread(_objectSpread({}, topic), {}, {
                topicName: currentTopic.topicName,
                lessonName: currentTopic.lessonName,
                lessonRelPath: currentTopic.lessonRelPath
              });
              foundProgress = true;
              return;
            }
          });
          if (!foundProgress) {
            // Keep cookie data but with default progress values
            currentTopic = _objectSpread(_objectSpread({}, currentTopic), {}, {
              lessonsScore: 0,
              lessonsTotal: 1
            });
          }
        } else if (mostRecentTopic) {
          // No cookie, fall back to most recent topic's data
          var pathParts = mostRecentTopic.lessonRelPath.split('/');
          var topicPath = pathParts[0];
          var topicName = topicPath.charAt(0).toUpperCase() + topicPath.slice(1);
          var lessonName = pathParts.slice(1).join('/').replace(/-/g, ' ').replace('.php', '').replace(/^[-\s]+|[-\s]+$/g, '') || 'HOME';
          currentTopic = _objectSpread(_objectSpread({}, mostRecentTopic), {}, {
            topicName: topicName,
            lessonName: lessonName
          });
        }

        // Find most recent topic
        Object.entries(progressData.topics).forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
            uuid = _ref8[0],
            topic = _ref8[1];
          var interactionTime = Math.max(topic.lessonInteractionUts || 0, topic.exerciseInteractionUts || 0, topic.quizInteractionUts || 0);
          if (interactionTime > mostRecentTime) {
            mostRecentTime = interactionTime;
            mostRecentTopic = topic;
          }
        });
      }
      var progressTopic = currentTopic || mostRecentTopic;
      var currentProgress = progressTopic ? {
        topicName: progressTopic.topicName,
        lessonName: progressTopic.lessonName.replace(/^[-\s]+|[-\s]+$/g, '').replace(/^to\s+/i, ''),
        lessonRelPath: progressTopic.lessonRelPath,
        progress: Math.round((progressTopic.lessonsScore || 0) / progressTopic.lessonsTotal * 100)
      } : null;
      TopNavBar.cachedUserData = _objectSpread(_objectSpread({}, profileData), {}, {
        currentProgress: currentProgress
      });
      resolve(TopNavBar.cachedUserData);
    });
  });
};
TopNavBar.getViewportDimensions = function () {
  TopNavBar._logDebug('getViewportDimensions');
  if (typeof TopNavBar.parentViewport !== 'undefined' && TopNavBar.parentViewport !== null) {
    TopNavBar._logWarning('getViewportDimensions -> serving cached parentViewport dimensions');
    return TopNavBar.parentViewport;
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};
TopNavBar.handleProfileClick = function (event) {
  event.preventDefault();
  event.stopPropagation();
  TopNavBar._logDebug('handleProfileClick -> dropdownVisible: ', {
    dropdownVisible: TopNavBar.dropdownVisible
  });
  if (TopNavBar.dropdownVisible) {
    TopNavBar.hideProfileDropdown();
  } else {
    TopNavBar.showProfileDropdown();
  }
};
TopNavBar.prepareProfileDropdownStylesOnShow = function (anchorElmBoundingClientRect) {
  var profileDropdownElm = document.getElementById('tnb-profile-dropdown');
  if (!profileDropdownElm || !anchorElmBoundingClientRect) {
    return null;
  }

  // Ensure the dropdown is visible so its dimensions can be measured.
  profileDropdownElm.style.display = 'block';
  var vieport = TopNavBar.getViewportDimensions();
  var styles = {
    display: 'block'
  };

  // Position dropdown relative to anchor element
  var gapRight = vieport.width - anchorElmBoundingClientRect.right;
  styles.right = (gapRight < 20 ? 0 : gapRight) + 'px';
  styles.left = 'auto';

  // Force layout update to compute dropdown dimensions
  var dropdownRect = profileDropdownElm.getBoundingClientRect();
  var gapLeft = dropdownRect.left;
  if (gapRight < gapLeft && gapRight < 20) {
    styles.right = '0px';
    styles.left = 'auto';
  } else if (dropdownRect.left < 0 && dropdownRect.right > vieport.width) {
    styles.left = '0px';
    styles.right = '0px';
    styles.width = '100%';
  } else if (dropdownRect.left < 0) {
    styles.left = '0px';
    styles.right = 'auto';
  } else if (dropdownRect.right > vieport.width) {
    styles.right = '0px';
    styles.left = 'auto';
  }

  // Set max-height to viewport height
  styles.maxHeight = vieport.height + 'px';
  return styles;
};
var _pollForShowPlanSelectionAndUpdateProfileDropDownLinks = function () {
  var interval = undefined;
  return [function () {
    interval = setInterval(function () {
      if (!document.cookie.includes('showPlanSelection')) {
        TopNavBar._revertProfileDropDownLinksToOriginal();
        clearInterval(interval);
      }
    }, 1000);
  }, function () {
    if (interval) {
      clearInterval(interval);
    }
  }];
}();
TopNavBar.pollForShowPlanSelectionAndUpdateProfileDropDownLinks = _pollForShowPlanSelectionAndUpdateProfileDropDownLinks[0];
TopNavBar.stopPollingForShowPlanSelectionAndUpdateProfileDropDownLinks = _pollForShowPlanSelectionAndUpdateProfileDropDownLinks[1];
TopNavBar.showProfileDropdown = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(force) {
    var _UserSession$getUicCo, _userData$currentProg;
    var chevronBtn, chevron, mylStateLookupRes, userData, userName, subscriptionPlan, badgeClass, logoutLink, badgeText, lastActivityOnSamePage, isShowPlanSelectionCookieSetAndIsClassic, getDashboardLink, getSpacesLink, getMyLearningLink, getBillingLink, getProfileLink, dropdownContent, dropdownElm, dropdownStyles, key, logoutBtn;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          getProfileLink = function _getProfileLink(path) {
            var url = "".concat(TopNavBar._profileBaseUrl, "/").concat(path || '');
            return isShowPlanSelectionCookieSetAndIsClassic ? "".concat(TopNavBar._profileBaseUrl, "/plan-selection?redirect_url=").concat(encodeURIComponent(url)) : url;
          };
          getBillingLink = function _getBillingLink(path) {
            var url = "".concat(TopNavBar._billingBaseUrl, "/").concat(path || '');
            return isShowPlanSelectionCookieSetAndIsClassic ? "".concat(TopNavBar._profileBaseUrl, "/plan-selection?redirect_url=").concat(encodeURIComponent(url)) : url;
          };
          getMyLearningLink = function _getMyLearningLink(path) {
            var url = "".concat(TopNavBar._myLearningBaseUrl, "/").concat(path || '');
            return isShowPlanSelectionCookieSetAndIsClassic ? "".concat(TopNavBar._profileBaseUrl, "/plan-selection?redirect_url=").concat(encodeURIComponent(url)) : url;
          };
          getSpacesLink = function _getSpacesLink() {
            return isShowPlanSelectionCookieSetAndIsClassic ? "".concat(TopNavBar._profileBaseUrl, "/plan-selection?redirect_url=").concat(encodeURIComponent(TopNavBar._spacesBaseUrl)) : TopNavBar._spacesBaseUrl;
          };
          getDashboardLink = function _getDashboardLink(path) {
            var url = "".concat(TopNavBar._dashboardBaseUrl, "/").concat(path || '');
            return isShowPlanSelectionCookieSetAndIsClassic ? "".concat(TopNavBar._profileBaseUrl, "/plan-selection?redirect_url=").concat(encodeURIComponent(url)) : url;
          };
          if (typeof force === 'undefined') {
            force = false;
          }
          if (!(TopNavBar.dropdownVisible && !force)) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return");
        case 8:
          TopNavBar.dropdownVisible = true;

          // Update chevron rotation
          chevronBtn = document.querySelector('.tnb-profile-chevron-btn');
          if (chevronBtn) {
            chevronBtn.classList.add('active');
          }
          chevron = document.querySelector('.profile-chevron');
          if (chevron) {
            chevron.setAttribute('class', 'fa fa-caret-up profile-chevron');
          }
          _context.next = 15;
          return TopNavBar._myLearningStateLookup();
        case 15:
          mylStateLookupRes = _context.sent;
          TopNavBar._logDebug('showProfileDropdown -> mylStateLookupRes: ', mylStateLookupRes);
          _context.next = 19;
          return TopNavBar.fetchUserData(mylStateLookupRes.data);
        case 19:
          userData = _context.sent;
          TopNavBar._logDebug('showProfileDropdown -> userData: ', userData);
          userName = userData ? userData.fullName : 'User';
          subscriptionPlan = ((_UserSession$getUicCo = UserSession.getUicCookie()) === null || _UserSession$getUicCo === void 0 ? void 0 : _UserSession$getUicCo.plan) || 'free';
          badgeClass = subscriptionPlan === 'free' ? 'access-badge-purple' : 'access-badge-green';
          logoutLink = TopNavBar.env === 'network' || TopNavBar._inIframe() ? TopNavBar._profileBaseUrl + '/logout' + "?redirect_url=".concat(encodeURIComponent(TopNavBar._w3sBaseUrl)) : '';
          badgeText = subscriptionPlan === 'free' ? 'Upgrade to Plus' : subscriptionPlan.toUpperCase() + ' PLAN';
          lastActivityOnSamePage = !(TopNavBar.env === 'network' || TopNavBar._inIframe()) && (userData === null || userData === void 0 || (_userData$currentProg = userData.currentProgress) === null || _userData$currentProg === void 0 ? void 0 : _userData$currentProg.lessonRelPath) === window.location.pathname.substring(1);
          isShowPlanSelectionCookieSetAndIsClassic = TopNavBar.env === 'classic' && document.cookie.includes('showPlanSelection');
          if (isShowPlanSelectionCookieSetAndIsClassic) {
            TopNavBar.pollForShowPlanSelectionAndUpdateProfileDropDownLinks();
          }
          dropdownContent = "\n    <div class=\"inner-wrapper\">\n      <div class=\"user-header\">\n        <div class=\"user-info\">\n          <div class=\"user-name\">".concat(userName, "</div>\n          <a href=\"").concat(getProfileLink('profile'), "\" class=\"open-profile tnb-dropdown-links-url\" style=\"font-size: 12px; font-weight: 300 !important;\">\n            Edit profile \n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M6 12L10 8L6 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n          </a>\n        </div>\n        ").concat(subscriptionPlan === 'free' ? "<a href=\"".concat(TopNavBar._w3sBaseUrl, "/plus/index.php\" target=\"_blank\" class=\"access-badge ").concat(badgeClass, "\">").concat(badgeText, "</a>") : "<div class=\"access-badge ".concat(badgeClass, "\">").concat(badgeText, "</div>"), "\n      </div>\n\n      ").concat(userData !== null && userData !== void 0 && userData.currentProgress && userData.currentProgress.topicName && userData.currentProgress.lessonName ? "\n        <div class=\"current-progress\">\n          <div class=\"course-info\">\n            <div class=\"course-type\">".concat(userData.currentProgress.topicName, " \u2022 Tutorial</div>\n\n            <div class=\"progress-wrapper\">\n              <div class=\"progress-label\">").concat(userData.currentProgress.progress, "% Completed</div>\n              <div class=\"progress-bar\">\n                <div class=\"progress\" style=\"width: ").concat(userData.currentProgress.progress, "%\"></div>\n              </div>\n            </div>\n\n            ").concat(lastActivityOnSamePage ? "\n              <div class=\"last-activity\">\n                <div class=\"label\">Current Page:</div>\n                <div class=\"lesson-name\">".concat(userData.currentProgress.lessonName, "</div>\n              </div>\n            ") : "\n              <div class=\"last-activity\">\n                <div class=\"label-wrapper\">\n                  <div class=\"label\">Last Activity:</div>\n                  <a href=\"".concat(TopNavBar._w3sBaseUrl, "/").concat(userData.currentProgress.lessonRelPath, "\" class=\"resume-link\">\n                    Resume \n                    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path d=\"M6 3L12 8L6 13V3Z\" fill=\"#04AA6D\"/>\n                    </svg>\n                  </a>\n                </div>\n                <div class=\"lesson-name\">").concat(userData.currentProgress.lessonName, "</div>\n              </div>\n            "), "\n          </div>\n        </div>\n      ") : '', "\n      <div class=\"-nav-menu\">\n        <a href=\"").concat(getDashboardLink(), "\" class=\"tnb-dropdown-links-url\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"12\" cy=\"12\" r=\"10\"/>\n            <polyline points=\"12 6 12 12 16 14\"/>\n          </svg>\n          Dashboard\n        </a>\n        <a href=\"").concat(getDashboardLink('tutorials'), "\" class=\"tnb-dropdown-links-url\">\n          <svg width=\"20\" height=\"20\" fill=\"currentColor\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1\"/>\n          </svg>\n          Tutorials\n        </a>\n        <a href=\"").concat(getDashboardLink('bookmarks'), "\" class=\"tnb-dropdown-links-url\">\n          <svg width=\"18\" height=\"18\" style=\"margin: 0 1px;\" stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 384 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z\"></path></svg>\n          Bookmarks\n        </a>\n        <a href=\"").concat(getDashboardLink('learning-paths'), "\" class=\"tnb-dropdown-links-url\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\"/>\n            <path d=\"M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z\"/>\n            <path d=\"M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5\"/>\n          </svg>\n          Learning Paths\n        </a>\n        <a href=\"").concat(getDashboardLink('courses'), "\" class=\"tnb-dropdown-links-url\">\n          <svg width=\"20\" height=\"20\" fill=\"currentColor\" stroke=\"currentColor\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M990.848 696.304V438.16l16.096-8.496c10.464-5.44 17.055-16.225 17.183-28.032.128-11.777-6.256-22.689-16.592-28.368l-481.44-257.6c-9.631-5.28-21.28-5.249-30.976.095l-478.8 257.92C6.126 379.36-.177 390.143-.113 401.84s6.496 22.4 16.817 27.97l210.384 111.983c-2.64 4.656-4.272 9.968-4.272 15.696v270.784c0 9.12 3.905 17.84 10.72 23.904 6.945 6.16 73.441 60.096 276.753 60.096 202.592 0 270.88-50.976 278-56.784 7.44-6.064 11.744-15.152 11.744-24.784V552.976c0-4.496-.944-8.768-2.608-12.64l129.424-68.369V696.48c-18.976 11.104-31.84 31.472-31.84 55.024 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.697-13.04-44.145-32.16-55.2zM736.031 812.368c-25.152 12.096-91.712 35.904-225.744 35.904-134.88 0-199.936-25.344-223.472-37.536V573.6l207.808 110.624a31.896 31.896 0 0 0 15.184 3.84 31.675 31.675 0 0 0 14.816-3.664l211.408-111.664v239.632zM510.063 619.81l-411.6-218.561 412.32-220.976 413.6 220.336z\"/>\n          </svg>\n          Courses\n        </a>\n        <a href=\"").concat(getSpacesLink(), "\" class=\"tnb-dropdown-links-url\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M8 11C8 10.8674 8.05268 10.7402 8.14645 10.6464C8.24021 10.5527 8.36739 10.5 8.5 10.5H11.5C11.6326 10.5 11.7598 10.5527 11.8536 10.6464C11.9473 10.7402 12 10.8674 12 11C12 11.1326 11.9473 11.2598 11.8536 11.3536C11.7598 11.4473 11.6326 11.5 11.5 11.5H8.5C8.36739 11.5 8.24021 11.4473 8.14645 11.3536C8.05268 11.2598 8 11.1326 8 11ZM5.854 6.146C5.80751 6.09951 5.75232 6.06264 5.69158 6.03748C5.63084 6.01232 5.56574 5.99937 5.5 5.99937C5.43426 5.99937 5.36916 6.01232 5.30842 6.03748C5.24768 6.06264 5.19249 6.09951 5.146 6.146C5.09951 6.19249 5.06264 6.24768 5.03748 6.30842C5.01232 6.36916 4.99937 6.43426 4.99937 6.5C4.99937 6.56574 5.01232 6.63084 5.03748 6.69158C5.06264 6.75232 5.09951 6.80751 5.146 6.854L6.793 8.5L5.146 10.146C5.09951 10.1925 5.06264 10.2477 5.03748 10.3084C5.01232 10.3692 4.99937 10.4343 4.99937 10.5C4.99937 10.5657 5.01232 10.6308 5.03748 10.6916C5.06264 10.7523 5.09951 10.8075 5.146 10.854C5.23989 10.9479 5.36722 11.0006 5.5 11.0006C5.56574 11.0006 5.63084 10.9877 5.69158 10.9625C5.75232 10.9374 5.80751 10.9005 5.854 10.854L7.854 8.854C7.90056 8.80755 7.93751 8.75238 7.96271 8.69163C7.98792 8.63089 8.00089 8.56577 8.00089 8.5C8.00089 8.43423 7.98792 8.36911 7.96271 8.30837C7.93751 8.24762 7.90056 8.19245 7.854 8.146L5.854 6.146Z\" fill=\"currentColor\"/>\n            <path d=\"M4 3C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H16C16.5304 17 17.0391 16.7893 17.4142 16.4142C17.7893 16.0391 18 15.5304 18 15V5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3H4ZM16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V15C17 15.2652 16.8946 15.5196 16.7071 15.7071C16.5196 15.8946 16.2652 16 16 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H16Z\" fill=\"currentColor\"/>\n          </svg>\n          Spaces\n        </a>\n        <a href=\"").concat(getMyLearningLink('certificates'), "\" class=\"tnb-dropdown-links-url\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 256 256\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M126,136a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12h48A6,6,0,0,1,126,136Zm-6-38H72a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm110,62.62V224a6,6,0,0,1-9,5.21l-25-14.3-25,14.3a6,6,0,0,1-9-5.21V198H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216a14,14,0,0,1,14,14V87.38a49.91,49.91,0,0,1,0,73.24ZM196,86a38,38,0,1,0,38,38A38,38,0,0,0,196,86ZM162,186V160.62a50,50,0,0,1,56-81.51V56a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V184a2,2,0,0,0,2,2Zm56-17.11a49.91,49.91,0,0,1-44,0v44.77l19-10.87a6,6,0,0,1,6,0l19,10.87Z\"/>\n          </svg>\n          Certificates\n        </a>\n        <div class=\"profile-menu-divider\"></div>\n        <a href=\"").concat(getBillingLink('account'), "\" class=\"tnb-dropdown-links-url\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 512 512\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z\"/>\n          </svg>\n          Billing\n        </a>\n        <div class=\"profile-menu-divider\"></div>\n        <a ").concat(logoutLink ? "href=\"".concat(logoutLink, "\"") : '', " class=\"logout\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M7.42857 2H14.2857C15.2325 2 16 2.79594 16 3.77778V16.2222C16 17.2041 15.2325 18 14.2857 18H7.42857M4 10L7.42857 6.44444M4 10L7.42857 13.5556M4 10H12.5714\" stroke=\"#DB1B1B\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n          Log out\n        </a>\n      </div>\n    </div>\n    <div id=\"tnb-profile-dropdown-bottom-spacer\" style=\"height: ").concat(TopNavBar.mainNavHeightPx, "px;\"></div>\n  ");
          if (TopNavBar.env === 'network' || TopNavBar._inIframe()) {
            TopNavBar.notifyParentAboutLayout('on profile dropdown show', {
              expanded: true,
              height: TopNavBar.fullHeight
            });
            TopNavBar._iframeProxyFloatingComponent('TopNavBar.showProfileDropdown', 'tnb-profile-dropdown', 'UPSERT', {
              tagName: 'div',
              id: 'tnb-profile-dropdown',
              "class": 'tnb-profile-dropdown',
              innerHtml: dropdownContent,
              mountFuncName: 'mountProfileDropdownLogic',
              unmountFuncName: 'unmountProfileDropdownLogic'
            });
          } else {
            dropdownElm = document.getElementById('tnb-profile-dropdown');
            if (!dropdownElm) {
              dropdownElm = document.createElement('div');
              dropdownElm.id = 'tnb-profile-dropdown';
              dropdownElm.className = 'tnb-profile-dropdown';
              document.querySelector('.tnb-right-section').appendChild(dropdownElm); // Changed from profileBtn to rightSection
            }
            dropdownElm.innerHTML = dropdownContent;
            dropdownStyles = TopNavBar.prepareProfileDropdownStylesOnShow(TopNavBar.element.querySelector('.tnb-right-section').getBoundingClientRect());
            for (key in dropdownStyles) {
              dropdownElm.style[key] = dropdownStyles[key];
            }
            logoutBtn = dropdownElm.querySelector('.logout');
            logoutBtn.style.cursor = 'pointer';
            logoutBtn.addEventListener('click', function () {
              UserSession.deleteUserSession(function () {
                window.location.reload();
              });
              TopNavBar.hideProfileDropdown();
            });
          }
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref9.apply(this, arguments);
  };
}();
TopNavBar.hideProfileDropdown = function () {
  if (TopNavBar.dropdownVisible === false) {
    return;
  }
  TopNavBar.stopPollingForShowPlanSelectionAndUpdateProfileDropDownLinks();
  TopNavBar.dropdownVisible = false;

  // Update chevron rotation
  var chevronBtn = document.querySelector('.tnb-profile-chevron-btn');
  if (chevronBtn) {
    chevronBtn.classList.remove('active');
  }
  var chevron = document.querySelector('.profile-chevron');
  if (chevron) {
    chevron.setAttribute('class', 'fa fa-caret-down profile-chevron');
  }
  if (TopNavBar.env === 'network' || TopNavBar._inIframe()) {
    TopNavBar._iframeProxyFloatingComponent('TopNavBar.hideProfileDropdown', 'tnb-profile-dropdown', 'REMOVE', {
      unmountFuncName: 'unmountProfileDropdownLogic'
    });

    // TopNavBar.notifyParentAboutLayout('on profile dropdown hide', {
    //   expanded: false
    // });
  } else {
    var dropdownElm = document.getElementById('tnb-profile-dropdown');
    if (dropdownElm) {
      dropdownElm.style.display = 'none';
    }
  }
};

// TopNavBar.mountProfileDropdownLogic = function () {
//   var dropdownElm = document.getElementById('tnb-profile-dropdown');

//   if (!dropdownElm) {
//     return;
//   }

var handleLogoutClick = function handleLogoutClick(event) {
  event.preventDefault();
  TopNavBar.handleRedirect('TopNavBar.mountProfileDropdownLogic', this.href);
};

//   var handleLinkClick = function (event) {
//     event.preventDefault();
//     TopNavBar.handleRedirect('TopNavBar.mountProfileDropdownLogic', this.href);
//   };

//   var logoutBtn = dropdownElm.querySelector('.logout');
//   if (logoutBtn) {
//     logoutBtn.addEventListener('click', handleLogoutClick.bind(logoutBtn));
//     logoutBtn._boundClickHandler = handleLogoutClick;
//   }

//   var links = dropdownElm.querySelectorAll('a:not(.logout)');
//   links.forEach(function (link) {
//     link.addEventListener('click', handleLinkClick.bind(link));
//     link._boundClickHandler = handleLinkClick;
//   });
// };

// TopNavBar.unmountProfileDropdownLogic = function () {
//   var dropdownElm = document.getElementById('tnb-profile-dropdown');

//   if (!dropdownElm) {
//     return;
//   }

//   var logoutBtn = dropdownElm.querySelector('.logout');
//   if (logoutBtn && logoutBtn._boundClickHandler) {
//     logoutBtn.removeEventListener('click', logoutBtn._boundClickHandler.bind(logoutBtn));
//     delete logoutBtn._boundClickHandler;
//   }

//   var links = dropdownElm.querySelectorAll('a:not(.logout)');
//   links.forEach(function (link) {
//     if (link._boundClickHandler) {
//       link.removeEventListener('click', link._boundClickHandler.bind(link));
//       delete link._boundClickHandler;
//     }
//   });
// };

TopNavBar._signInUser = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email, password) {
    var cognitoUser, authenticationDetails;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cognitoUser = new AmazonCognitoIdentity.CognitoUser({
            Username: email,
            Pool: TopNavBar.userPool
          });
          authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: email,
            Password: password
          });
          _context2.next = 4;
          return new Promise(function (resolve, reject) {
            cognitoUser.authenticateUser(authenticationDetails, {
              onSuccess: function onSuccess(cognitoUserSession) {
                var cognitoAccessToken = cognitoUserSession.getAccessToken();
                var cognitoRefreshToken = cognitoUserSession.getRefreshToken().getToken();
                var expiresAt = cognitoAccessToken.getExpiration();
                var cognitoAccessTokenJwt = cognitoAccessToken.getJwtToken();
                var expiresAtDate = new Date(expiresAt * 1000);
                UserSession.resetCookie({
                  name: 'accessToken',
                  value: cognitoAccessTokenJwt,
                  expires: expiresAtDate
                });
                UserSession.registerBackendUserSession({
                  accessToken: cognitoAccessTokenJwt,
                  refreshToken: cognitoRefreshToken,
                  legacy: false
                }, function () {
                  cognitoUser.getUserAttributes(function (err, attributes) {
                    if (err) {
                      console.log(err);
                    } else {
                      var _attributes$find;
                      if (((_attributes$find = attributes.find(function (attribute) {
                        return attribute.Name === 'custom:isFirstLogin';
                      })) === null || _attributes$find === void 0 ? void 0 : _attributes$find.Value) === 'true') {
                        document.cookie = 'showPlanSelection=true; path=/; domain=.w3schools.com; secure; samesite=strict';
                      }
                      window.location.reload();
                    }
                  });
                });
              },
              onFailure: function onFailure(err) {
                reject(err);
              },
              newPasswordRequired: function newPasswordRequired(userAttributes, requiredAttributes) {
                TopNavBar.hideLoginDropdown();
                TopNavBar.showConfirmResetPasswordDropDown(requiredAttributes, email, cognitoUser);
              }
            });
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2, _x3) {
    return _ref10.apply(this, arguments);
  };
}();
TopNavBar.socialLoginButtonsContent = "\n <div class=\"social-buttons\">\n      <button type=\"button\" class=\"social-button google\" onclick=\"TopNavBar.handleSocialLogin('Google')\" title=\"Google\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 48 48\">\n          <path fill=\"#EA4335\"\n            d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\" />\n          <path fill=\"#4285F4\"\n            d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\" />\n          <path fill=\"#FBBC05\"\n            d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\" />\n          <path fill=\"#34A853\"\n            d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\" />\n          <path fill=\"none\" d=\"M0 0h48v48H0z\" />\n        </svg>\n      </button>\n      <button type=\"button\" class=\"social-button facebook\" onclick=\"TopNavBar.handleSocialLogin('Facebook')\" title=\"Facebook\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"#0080ff\">\n          <path\n            d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\" />\n        </svg>\n      </button>\n      <button type=\"button\" class=\"social-button github\" onclick=\"TopNavBar.handleSocialLogin('Github')\" title=\"GitHub\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"currentColor\">\n           <path\n        fillRule=\"evenodd\"\n        clipRule=\"evenodd\"\n        d=\"M9.00194 0C13.9726 0 18.0019 4.13093 18.0019 9.22763C18.0019 13.3037 15.4261 16.7615 11.8522 17.9828C11.3959 18.0737 11.2339 17.7856 11.2339 17.5399C11.2339 17.2357 11.2447 16.2421 11.2447 15.0073C11.2447 14.1469 10.9567 13.5854 10.6336 13.2992C12.6379 13.0706 14.7439 12.2902 14.7439 8.74599C14.7439 7.73799 14.3947 6.91543 13.8169 6.26923C13.9105 6.03613 14.2192 5.09755 13.7287 3.82675C13.7287 3.82675 12.9745 3.5795 11.2564 4.77289C10.5373 4.56859 9.76694 4.4658 9.00194 4.4622C8.23694 4.4658 7.46745 4.56859 6.74925 4.77289C5.02935 3.5795 4.27335 3.82675 4.27335 3.82675C3.78465 5.09755 4.09335 6.03613 4.18605 6.26923C3.61095 6.91543 3.25905 7.73799 3.25905 8.74599C3.25905 12.2812 5.36055 13.0735 7.35945 13.3066C7.10205 13.537 6.86895 13.9435 6.78795 14.5402C6.27495 14.776 4.97175 15.1841 4.16895 13.7738C4.16895 13.7738 3.69285 12.8871 2.78925 12.8223C2.78925 12.8223 1.91175 12.8107 2.72805 13.3831C2.72805 13.3831 3.31755 13.6666 3.72705 14.7331C3.72705 14.7331 4.25535 16.3801 6.75915 15.8221C6.76365 16.5934 6.77175 17.3203 6.77175 17.5399C6.77175 17.7838 6.60614 18.0692 6.15704 17.9837C2.58045 16.7642 0.00195312 13.3046 0.00195312 9.22763C0.00195312 4.13093 4.03215 0 9.00194 0Z\"\n        fill=\"#282A35\"\n      />\n        </svg>\n      </button>\n      <button type=\"button\" class=\"social-button feide\" onclick=\"TopNavBar.handleSocialLogin('Feide')\" title=\"Feide\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 32 38\" fill=\"currentColor\">\n              <defs></defs>\n      <rect\n        className=\"cls-1\"\n        x=\"27.99\"\n        y=\"20.34\"\n        width=\"4.24\"\n        height=\"10.18\"\n        fill=\"#1f4698\"\n      ></rect>\n      <polygon\n        className=\"cls-1\"\n        points=\"18.23 23.31 13.99 23.31 13.99 34.76 4.24 34.76 4.24 20.34 0 20.34 0 35.61 0.02 35.61 0.02 39 32.23 39 32.23 34.76 18.23 34.76 18.23 23.31\"\n        fill=\"#1f4698\"\n      ></polygon>\n      <circle\n        className=\"cls-1\"\n        cx=\"16.11\"\n        cy=\"16.53\"\n        r=\"2.54\"\n        fill=\"#1f4698\"\n      ></circle>\n      <path\n        fill=\"#1f4698\"\n        className=\"cls-1\"\n        d=\"M16.11,4.24A11.87,11.87,0,0,1,28,16.1h4.25A16.11,16.11,0,0,0,0,16.1H4.25A11.87,11.87,0,0,1,16.11,4.24Z\"\n      ></path>\n        </svg>\n      </button>\n    </div>\n    ";
TopNavBar.handleSocialLogin = function handleSocialLogin(provider, email) {
  if (email) {
    email = encodeURIComponent(email);
  }

  // Generate random state
  var state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  // Generate code_verifier (random string between 43-128 characters)
  var generateCodeVerifier = function generateCodeVerifier() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
    var result = '';
    var length = 128; // Choose a length between 43-128
    for (var i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  var codeVerifier = generateCodeVerifier();
  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 10 * 60 * 1000); // 10 minutes
  document.cookie = "code_verifier=".concat(codeVerifier, "; expires=").concat(expirationDate.toUTCString(), "; path=/; domain=.w3schools.com; secure; samesite=strict");
  document.cookie = "state=".concat(state, "; expires=").concat(expirationDate.toUTCString(), "; path=/; domain=.w3schools.com; secure; samesite=strict");

  // Generate code_challenge (base64url encoded SHA-256 hash of code_verifier)
  var generateCodeChallenge = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(verifier) {
      var encoder, data, digest, binary, base64;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            encoder = new TextEncoder();
            data = encoder.encode(verifier);
            _context3.next = 4;
            return window.crypto.subtle.digest('SHA-256', data);
          case 4:
            digest = _context3.sent;
            binary = String.fromCharCode.apply(String, _toConsumableArray(new Uint8Array(digest)));
            base64 = btoa(binary); // Convert to base64url
            return _context3.abrupt("return", base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''));
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function generateCodeChallenge(_x4) {
      return _ref11.apply(this, arguments);
    };
  }();
  _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var codeChallenge, redirectUri, url, width, height, left, top, redirectUrl, popup, checkForAccessToken;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return generateCodeChallenge(codeVerifier);
        case 2:
          codeChallenge = _context4.sent;
          redirectUri = encodeURIComponent("".concat(TopNavBar._profileBaseUrl, "/social-login"));
          url = "".concat(TopNavBar._profileAuthUrl, "/oauth2/authorize?redirect_uri=").concat(redirectUri, "&response_type=code&client_id=d1grqml0emh7votkb0gtrrn0&identity_provider=").concat(provider, "&scope=openid%20aws.cognito.signin.user.admin&state=").concat(state, "&code_challenge=").concat(codeChallenge, "&code_challenge_method=S256&").concat(email ? "login_hint=".concat(email) : '');
          width = 450;
          height = 450;
          left = (window.innerWidth - width) / 2;
          top = (window.innerHeight - height) / 2;
          redirectUrl = window.location.href;
          document.cookie = "socialLoginRedirectUrl=".concat(redirectUrl, "; path=/; domain=.w3schools.com; secure; samesite=strict");
          popup = window.open(url, '_blank', "width=".concat(width, ",height=").concat(height, ",left=").concat(left, ",top=").concat(top, ",popup=1"));
          if (!popup || popup.closed || typeof popup.closed === 'undefined') {
            window.location.href = url;
          }
          TopNavBar.hideLoginDropdown();
          TopNavBar.hideSignupDropdown();
          checkForAccessToken = setInterval(function () {
            var cookies = document.cookie.split(';');
            var accessTokenCookie = cookies.find(function (cookie) {
              return cookie.trim().startsWith('accessToken=');
            });
            if (accessTokenCookie) {
              clearInterval(checkForAccessToken);
              UserSession.getUserAttributesViaAccessTokenCookie(accessTokenCookie.split('=')[1], function (res) {
                var _res$UserAttributes;
                if ((res === null || res === void 0 || (_res$UserAttributes = res.UserAttributes) === null || _res$UserAttributes === void 0 || (_res$UserAttributes = _res$UserAttributes.find(function (attribute) {
                  return attribute.Name === 'custom:isFirstLogin';
                })) === null || _res$UserAttributes === void 0 ? void 0 : _res$UserAttributes.Value) === 'true' && !res.Username.includes('Feide_')) {
                  document.cookie = 'showPlanSelection=true; path=/; domain=.w3schools.com; secure; samesite=strict';
                }
                window.location.reload();
              });
            }
          }, 1000);
          setTimeout(function () {
            clearInterval(checkForAccessToken);
          }, 5 * 60 * 1000);
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }))();
};
TopNavBar.decodeJwtResponse = function (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};
window.TopNavBar_handleGoogleLogin = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(response) {
    var setLoading, loginBtn, csrfToken, res, dataStr, _JSON$parse, AccessToken, RefreshToken, ExpiresIn, expiresAtDate;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          setLoading = function _setLoading(button, isLoading) {
            var text = button.querySelector('.button-text');
            var loader = button.querySelector('.button-loader');
            button.disabled = isLoading;
            text.style.opacity = isLoading ? '0' : '1';
            loader.style.display = isLoading ? 'block' : 'none';
          };
          loginBtn = document.getElementById('tnb-login-btn');
          _context5.prev = 2;
          setLoading(loginBtn, true);

          // // Generate a CSRF token
          csrfToken = crypto.randomUUID(); // // Store the CSRF token in a cookie
          document.cookie = "g_csrf_token=".concat(csrfToken, "; path=/; domain=.w3schools.com; secure; samesite=strict; max-age=3600");
          _context5.next = 8;
          return new Promise(function (resolve, reject) {
            Util.fetch({
              context: 'TopNavBar -> TopNavBar_handleGoogleLogin',
              method: 'POST',
              url: TopNavBar._profileBaseUrl + '/api/google/onetap',
              prepareResponseData: true,
              withUserSession: false,
              handleUserSessionRefresh: false,
              handleUserSessionRedirection: false,
              sendCookies: true,
              data: JSON.stringify({
                credential: response.credential,
                'g_csrf_token': csrfToken
              }),
              callback: function callback(reqRes) {
                if (reqRes.error.code === '0') {
                  resolve(reqRes);
                } else {
                  reject(reqRes);
                }
              }
            });
          });
        case 8:
          res = _context5.sent;
          if (res.error.code === '0') {
            dataStr = res.dataStr;
            _JSON$parse = JSON.parse(dataStr), AccessToken = _JSON$parse.AccessToken, RefreshToken = _JSON$parse.RefreshToken, ExpiresIn = _JSON$parse.ExpiresIn;
            expiresAtDate = new Date();
            expiresAtDate.setSeconds(expiresAtDate.getSeconds() + ExpiresIn);
            UserSession.resetCookie({
              name: 'accessToken',
              value: AccessToken,
              expires: expiresAtDate
            });
            UserSession.registerBackendUserSession({
              accessToken: AccessToken,
              refreshToken: RefreshToken,
              legacy: false
            }, function () {
              window.location.reload();
            });
          }
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](2);
          setLoading(loginBtn, false);
          console.error('Error handling Google login:', _context5.t0);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 12]]);
  }));
  return function (_x5) {
    return _ref13.apply(this, arguments);
  };
}();
TopNavBar.showLoginDropdown = function () {
  TopNavBar.loginDropdownVisible = true;
  function setLoading(button, isLoading) {
    var text = button.querySelector('.button-text');
    var loader = button.querySelector('.button-loader');
    button.disabled = isLoading;
    text.style.opacity = isLoading ? '0' : '1';
    loader.style.display = isLoading ? 'block' : 'none';
  }
  function getErrorMessage(err) {
    var commonErrors = {
      UserNotFoundException: 'Invalid username or password',
      NotAuthorizedException: 'Invalid username or password',
      UsernameExistsException: 'This username is already taken',
      InvalidPasswordException: 'Password must be at least 8 characters long and contain uppercase, lowercase, numbers and special characters',
      InvalidParameterException: 'Please check your input and try again',
      CodeMismatchException: 'Invalid verification code',
      ExpiredCodeException: 'Verification code has expired',
      TooManyRequestsException: 'Too many attempts. Please try again later',
      InvalidEmailRoleAccessPolicyException: 'Unable to send email. Please try again later'
    };
    var errorCode = err.code || err.name;
    return commonErrors[errorCode] || err.message || 'An unexpected error occurred';
  }
  var loginDropdownContent = "\n   <div class=\"tnb-login-dropdown-form-container\" id=\"tnb-login-dropdown-loginForm\">\n    <div class=\"auth-header\">\n      <button class=\"dropdown-close-btn\" id=\"tnb-login-dropdown-close-btn\" aria-label=\"Close\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <line x1=\"5\" y1=\"5\" x2=\"15\" y2=\"15\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"15\" y1=\"5\" x2=\"5\" y2=\"15\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        </svg>\n      </button>\n      <div class=\"auth-title\">Sign in</div>\n      <div class=\"auth-subtitle\">Get access to more learning features</div>\n    </div>\n\n    <p class=\"switch-form\">\n      Don't have an account? <a id=\"tnb-login-dropdown-signup-link\">Register</a>\n    </p>\n\n    ".concat(TopNavBar.socialLoginButtonsContent, "\n\n    <div class=\"divider\">\n      <span>or</span>\n    </div>\n\n    <form id=\"loginFormElement\">\n      <div class=\"form-group\">\n        <input type=\"email\" id=\"tnb-login-dropdown-email\" autocomplete=\"email\" spellcheck=\"false\" autocapitalize=\"off\" placeholder=\"Email\" required />\n      </div>\n      <div class=\"form-group tnb-login-dropdown-password-container\">\n        <div style=\"position: relative;\">\n          <input type=\"password\" id=\"tnb-login-dropdown-password\" autocomplete=\"current-password\" placeholder=\"Password\" required> \n          <button type=\"button\" id=\"toggle-password-visibility\">\n          <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z\" fill=\"black\"/>\n            <path d=\"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C9.933 9.5 11.5 7.933 11.5 6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5Z\" fill=\"black\"/>\n          </svg>    \n        </button>\n        </input>\n          <div id=\"capslock-indicator\" title=\"Caps Lock is ON\" style=\"display: none; position: absolute; right: 30px; top: 50%; transform: translateY(-50%); color: #c00; font-size: 12px;\">\n            <svg width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect x=\"0.5\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFD278\" fill-opacity=\"0.6\"/>\n            <path d=\"M11.7554 5.34653C12.1586 4.88449 12.8414 4.88449 13.2446 5.34653L19.7219 12.7681C20.3331 13.4683 19.8708 14.6144 18.9773 14.6144H16.0725V17.9036C16.0725 18.5091 15.6155 19 15.0518 19H9.94824C9.38452 19 8.92753 18.5091 8.92753 17.9036V14.6144H6.02273C5.12916 14.6144 4.66694 13.4683 5.27809 12.7681L11.7554 5.34653ZM18.9773 13.5179L12.5 6.09641L6.02273 13.5179H8.92753C9.49125 13.5179 9.94824 14.0088 9.94824 14.6144V17.9036H15.0518V14.6144C15.0518 14.0088 15.5087 13.5179 16.0725 13.5179H18.9773Z\" fill=\"#91640A\"/>\n            </svg>\n          </div>\n        </div>\n      </div>\n\n    <div class=\"forgot-password\" id=\"tnb-login-dropdown-reset-password\">\n      Forgot your password?\n    </div>\n\n      <div id=\"loginStatus\" class=\"status\"></div>\n      <button type=\"submit\">\n        <span class=\"button-text\">Sign In</span>\n        <span class=\"button-loader\"></span>\n      </button>\n    </form>\n\n  </div>\n  ");
  var rightSection = document.querySelector('.tnb-right-section');
  var dropdownElm = document.getElementById('tnb-login-dropdown-loginForm');
  if (!dropdownElm) {
    dropdownElm = document.createElement('div');
    dropdownElm.id = 'tnb-login-dropdown-loginForm';
    dropdownElm.className = 'tnb-login-dropdown-loginForm';
    rightSection.appendChild(dropdownElm); // Changed from profileBtn to rightSection
  }
  dropdownElm.innerHTML = loginDropdownContent;
  dropdownElm.style.display = 'block';
  dropdownElm.style.position = 'fixed';
  TopNavBar._positionDropdown(dropdownElm, rightSection);
  var loginForm = document.getElementById('tnb-login-dropdown-loginForm');
  // Remove any existing submit event listeners to avoid duplicates
  var clonedLoginForm = loginForm.cloneNode(true);
  loginForm.parentNode.replaceChild(clonedLoginForm, loginForm);
  var togglePasswordButton = document.getElementById('toggle-password-visibility');
  togglePasswordButton.addEventListener('click', function () {
    var passwordInput = document.getElementById('tnb-login-dropdown-password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.innerHTML = "\n      <svg width=\"16\" height=\"14\" viewBox=\"0 0 16 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M10.7904 11.9117L9.17617 10.2975C8.80858 10.4286 8.41263 10.5 8 10.5C6.067 10.5 4.5 8.933 4.5 7.00001C4.5 6.58738 4.5714 6.19143 4.70253 5.82384L2.64112 3.76243C0.938717 5.27903 0 7.00001 0 7.00001C0 7.00001 3 12.5 8 12.5C9.01539 12.5 9.9483 12.2732 10.7904 11.9117Z\" fill=\"black\"/>\n        <path d=\"M5.20967 2.08834C6.05172 1.72683 6.98462 1.50001 8 1.50001C13 1.50001 16 7.00001 16 7.00001C16 7.00001 15.0613 8.72098 13.3589 10.2376L11.2975 8.17615C11.4286 7.80857 11.5 7.41263 11.5 7.00001C11.5 5.06701 9.933 3.50001 8 3.50001C7.58738 3.50001 7.19144 3.57141 6.82386 3.70253L5.20967 2.08834Z\" fill=\"black\"/>\n        <path d=\"M5.52485 6.64616C5.50847 6.76175 5.5 6.87989 5.5 7.00001C5.5 8.38072 6.61929 9.50001 8 9.50001C8.12012 9.50001 8.23825 9.49154 8.35385 9.47516L5.52485 6.64616Z\" fill=\"black\"/>\n        <path d=\"M10.4752 7.35383L7.64618 4.52485C7.76176 4.50848 7.87989 4.50001 8 4.50001C9.38071 4.50001 10.5 5.6193 10.5 7.00001C10.5 7.12011 10.4915 7.23824 10.4752 7.35383Z\" fill=\"black\"/>\n        <path d=\"M13.6464 13.3536L1.64645 1.35356L2.35355 0.646454L14.3536 12.6465L13.6464 13.3536Z\" fill=\"black\"/>\n      </svg>\n\n      ";
    } else {
      passwordInput.type = 'password';
      this.innerHTML = "\n      <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z\" fill=\"black\"/>\n<path d=\"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C9.933 9.5 11.5 7.933 11.5 6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5Z\" fill=\"black\"/>\n</svg>\n";
    }
  });
  var signupLink = document.getElementById('tnb-login-dropdown-signup-link');
  signupLink.addEventListener('click', function () {
    TopNavBar.hideLoginDropdown();
    TopNavBar.showSignupDropdown();
  });
  var resetPassword = document.getElementById('tnb-login-dropdown-reset-password');
  resetPassword.addEventListener('click', function () {
    TopNavBar.hideLoginDropdown();
    TopNavBar.showResetPasswordDropDown();
  });
  var capsLockIndicator = document.getElementById('capslock-indicator');
  var passwordInput = document.getElementById('tnb-login-dropdown-password');
  if (capsLockIndicator) {
    document.addEventListener('keydown', function (e) {
      if (!(e !== null && e !== void 0 && e.getModifierState)) return;
      if (e !== null && e !== void 0 && e.getModifierState('CapsLock')) {
        TopNavBar._capslockOn = true;
      } else {
        TopNavBar._capslockOn = false;
      }
      if (document.activeElement === passwordInput) {
        if (TopNavBar._capslockOn) {
          capsLockIndicator.style.display = 'block';
        } else {
          capsLockIndicator.style.display = 'none';
        }
      }
    });
    document.addEventListener('keyup', function (e) {
      if (!(e !== null && e !== void 0 && e.getModifierState)) return;
      if (e !== null && e !== void 0 && e.getModifierState('CapsLock')) {
        TopNavBar._capslockOn = true;
      } else {
        TopNavBar._capslockOn = false;
      }
      if (document.activeElement === passwordInput) {
        if (TopNavBar._capslockOn) {
          capsLockIndicator.style.display = 'block';
        } else {
          capsLockIndicator.style.display = 'none';
        }
      }
    });
  }
  passwordInput.addEventListener('focus', function (e) {
    if (TopNavBar._capslockOn) {
      capsLockIndicator.style.display = 'block';
    } else {
      capsLockIndicator.style.display = 'none';
    }
  });
  passwordInput.addEventListener('blur', function (e) {
    capsLockIndicator.style.display = 'none';
  });
  var emailInput = document.getElementById('tnb-login-dropdown-email');
  if (emailInput) {
    emailInput.value = TopNavBar._emailInput;
    emailInput.addEventListener('input', function (e) {
      TopNavBar._emailInput = e.target.value;
    });
  }
  var closeBtn = document.getElementById('tnb-login-dropdown-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', TopNavBar.hideLoginDropdown);
  }

  // Add the event listener to the fresh clone
  clonedLoginForm.addEventListener('submit', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
      var button, status, email, password, userStatus, cognitoUser;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            e.preventDefault();
            button = e.target.querySelector("button[type='submit']");
            status = e.target.querySelector('#loginStatus');
            setLoading(e.target.querySelector("button[type='submit']"), true);
            status.textContent = status.textContent || '';
            email = document.getElementById('tnb-login-dropdown-email').value;
            password = document.getElementById('tnb-login-dropdown-password').value;
            _context6.prev = 7;
            TopNavBar._isLoginLoading = true;
            _context6.next = 11;
            return TopNavBar._signInUser(email, password);
          case 11:
            _context6.next = 39;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](7);
            console.log('error', _context6.t0);
            if (!_context6.t0.message.includes('Password attempts exceeded')) {
              _context6.next = 22;
              break;
            }
            status.textContent = 'Password attempts exceeded';
            status.classList.add('error');
            setLoading(button, false);
            TopNavBar._isLoginLoading = false;
            return _context6.abrupt("return");
          case 22:
            _context6.next = 24;
            return function () {
              return new Promise(function (resolve, reject) {
                UserSession.checkUserCognitoStatusByEmail(email, function (userStatus) {
                  resolve(userStatus);
                });
              });
            }();
          case 24:
            userStatus = _context6.sent;
            if (!((userStatus === null || userStatus === void 0 ? void 0 : userStatus.status) === 'UNCONFIRMED')) {
              _context6.next = 35;
              break;
            }
            TopNavBar._signUpUserName = userStatus.username;
            TopNavBar._signUpEmail = email;
            TopNavBar._signUpPassword = password;
            cognitoUser = new AmazonCognitoIdentity.CognitoUser({
              Username: userStatus.username,
              Pool: TopNavBar.userPool
            });
            cognitoUser.resendConfirmationCode(function (err, result) {
              if (err) {
                console.error(err);
              }
            });
            TopNavBar.hideLoginDropdown();
            TopNavBar.showEmailConfirmationDropDown();
            TopNavBar._isLoginLoading = false;
            return _context6.abrupt("return");
          case 35:
            status.textContent = getErrorMessage(_context6.t0);
            status.classList.add('error');
            setLoading(button, false);
            TopNavBar._isLoginLoading = false;
          case 39:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[7, 13]]);
    }));
    return function (_x6) {
      return _ref14.apply(this, arguments);
    };
  }());
};
TopNavBar.hideLoginDropdown = function () {
  var loginForm = document.getElementById('tnb-login-dropdown-loginForm');
  if (loginForm) {
    loginForm.style.display = 'none';
    TopNavBar.loginDropdownVisible = false;
  }
};
TopNavBar.signUpUser = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(email, password, firstName, lastName, emailConsent, captchaToken) {
    var attributeList, validationData, username;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          attributeList = [new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: 'email',
            Value: email.toLowerCase()
          }), new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: 'given_name',
            Value: firstName
          }), new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: 'family_name',
            Value: lastName
          }), new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: 'custom:meta',
            Value: JSON.stringify({
              emailConsent: emailConsent
            })
          }), new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: 'custom:isFirstLogin',
            Value: 'true'
          })];
          validationData = [];
          if (captchaToken) {
            attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
              Name: 'custom:recaptcha_token',
              Value: captchaToken
            }));
            validationData.push({
              Name: 'recaptcha_token',
              Value: captchaToken
            });
          }
          username = crypto.randomUUID();
          return _context7.abrupt("return", new Promise(function (resolve, reject) {
            TopNavBar.userPool.signUp(username, password, attributeList, validationData, function (err, result) {
              if (err) reject(err);else {
                TopNavBar._signUpPassword = password;
                TopNavBar._signUpEmail = email;
                TopNavBar._signUpUserName = username;
                resolve(result);
              }
            });
          }));
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x7, _x8, _x9, _x10, _x11, _x12) {
    return _ref15.apply(this, arguments);
  };
}();
TopNavBar.showSignupDropdown = function () {
  TopNavBar.signupDropdownVisible = true;
  function setLoading(button, isLoading) {
    var text = button.querySelector('.button-text');
    var loader = button.querySelector('.button-loader');
    button.disabled = isLoading;
    text.style.opacity = isLoading ? '0' : '1';
    loader.style.display = isLoading ? 'block' : 'none';
  }
  function getErrorMessage(err) {
    var commonErrors = {
      UserNotFoundException: 'Invalid username or password',
      NotAuthorizedException: 'Invalid username or password',
      UsernameExistsException: 'This username is already taken',
      InvalidPasswordException: 'Password must be at least 8 characters long and contain uppercase, lowercase, numbers and special characters',
      InvalidParameterException: 'Please check your input and try again',
      CodeMismatchException: 'Invalid verification code',
      ExpiredCodeException: 'Verification code has expired',
      TooManyRequestsException: 'Too many attempts. Please try again later',
      InvalidEmailRoleAccessPolicyException: 'Unable to send email. Please try again later'
    };
    var errorCode = err.code || err.name;
    return (commonErrors[errorCode] || err.message || 'An unexpected error occurred').replace('PreSignUp failed with error', '').replace('logging in', 'signing in').replace(/[.]$/m, '').trim();
  }
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validateName(name) {
    var nameRegex = /^[a-zA-Z\s-]+$/;
    var hasSpecialChars = /[^a-zA-Z\s-]/.test(name);
    if (hasSpecialChars) {
      return {
        valid: false,
        message: 'Name cannot contain special characters or numbers'
      };
    }
    return {
      valid: nameRegex.test(name),
      message: nameRegex.test(name) ? '' : 'Name can only contain letters, spaces, and hyphens'
    };
  }
  function validatePassword(password) {
    var PWD_RULES = [{
      regexp: /.{8,}/,
      title: '8 characters'
    }, {
      regexp: /[A-Z]/,
      title: 'one uppercase letter'
    }, {
      regexp: /[a-z]/,
      title: 'one lowercase letter'
    }, {
      regexp: /[0-9]/,
      title: 'one number'
    }, {
      regexp: /[^A-Za-z0-9]/,
      title: 'one special character'
    }];
    var rulesNotPassed = [].concat(PWD_RULES, [{
      regexp: /^[\S]+.*[\S]+$/,
      title: 'no trailing whitespace'
    }]).filter(function (rule) {
      return !rule.regexp.test(password);
    });
    if (rulesNotPassed.length) {
      var rule = rulesNotPassed[0].title.toLowerCase();
      return {
        valid: false,
        message: rule.includes('8') || rule.includes('whitespace') ? "Password requires ".concat(rule) : "Password requires at least ".concat(rule)
      };
    }
    return {
      valid: true,
      message: ''
    };
  }
  function validateForm(email, password, firstName, lastName, status) {
    if (!email || !password || !firstName || !lastName) {
      status.textContent = 'Please fill in all fields';
      status.classList.add('error');
      return false;
    }
    if (!validateEmail(email)) {
      status.textContent = 'Please enter a valid email address';
      status.classList.add('error');
      return false;
    }
    if (!validateName(firstName) || !validateName(lastName)) {
      status.textContent = 'Add a name that only contains letters - and no special characters.';
      status.classList.add('error');
      return false;
    }
    var passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      status.textContent = passwordValidation.message;
      status.classList.add('error');
      return false;
    }
    return true;
  }
  var signupDropdownContent = "\n  <div class=\"tnb-signup-dropdown-form-container\" id=\"tnb-signup-dropdown-signupForm\">\n     <div class=\"auth-header\">\n      <button class=\"dropdown-close-btn\" id=\"tnb-signup-dropdown-close-btn\" aria-label=\"Close\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <line x1=\"5\" y1=\"5\" x2=\"15\" y2=\"15\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"15\" y1=\"5\" x2=\"5\" y2=\"15\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        </svg>\n      </button>\n      <div class=\"auth-title\">Create your account</div>\n    </div>\n\n    <p class=\"switch-form\">\n      Already have an account? <a id=\"tnb-signup-dropdown-login-link\">Sign In</a>\n    </p>\n\n    ".concat(TopNavBar.socialLoginButtonsContent, "\n\n    <div class=\"divider\">\n      <span>or</span>\n    </div>\n\n    <form id=\"signupFormElement\">\n      <div class=\"form-group\">\n        <input type=\"text\" id=\"tnb-signup-first-name\" autocomplete=\"given-name\" placeholder=\"First Name\" required />\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" id=\"tnb-signup-last-name\" autocomplete=\"family-name\" placeholder=\"Last Name\" required />\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" id=\"tnb-signup-email\" autocomplete=\"email\" spellcheck=\"false\" autocapitalize=\"off\" placeholder=\"Email\" required style=\"text-transform: lowercase;\" />\n      </div>\n      <div class=\"form-group\" style=\"position: relative;\">\n        <input type=\"password\" id=\"tnb-signup-password\" autocomplete=\"new-password\" minlength=\"8\" placeholder=\"Password\" required />\n        <button type=\"button\" id=\"signup-toggle-password-visibility\" class=\"toggle-password-visibility\" tabindex=\"-1\">\n          <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z\" fill=\"black\"/>\n            <path d=\"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C9.933 9.5 11.5 7.933 11.5 6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5Z\" fill=\"black\"/>\n          </svg>    \n        </button>\n        <div id=\"password-requirements-popover\" class=\"password-requirements-popover\"></div>\n      </div>\n      <div class=\"form-group checkbox-group\">\n        <input type=\"checkbox\" id=\"tnb-signup-email-consent\" checked />\n        <label for=\"emailConsent\" class=\"checkbox-label\">Email me with news and updates</label>\n      </div>\n      <div class=\"form-group checkbox-group\">\n        <label for=\"termsConsent\" class=\"checkbox-label\">\n          By signing up you agree to our\n          <a href=\"https://www.w3schools.com/about/about_copyright.asp\" target=\"_blank\" rel=\"noopener noreferrer\">Terms\n            of Service</a>\n          and\n          <a href=\"https://www.w3schools.com/about/about_privacy.asp\" target=\"_blank\" rel=\"noopener noreferrer\">Privacy\n            Policy</a>\n        </label>\n      </div>\n      <div id=\"signupStatus\" class=\"status\"></div>\n      <button type=\"submit\">\n        <span class=\"button-text\">Create account</span>\n        <span class=\"button-loader\"></span>\n      </button>\n    </form>\n\n    <p class=\"recaptcha-notice\">\n      This site is protected by reCAPTCHA and the Google\n      <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Privacy Policy</a>\n      and\n      <a href=\"https://policies.google.com/terms\" target=\"_blank\">Terms of Service</a>\n      apply.\n    </p>\n\n    <div id=\"g-recaptcha\"></div>\n  </div>\n  ");
  var rightSection = document.querySelector('.tnb-right-section');
  var dropdownElm = document.getElementById('tnb-signup-dropdown-signupForm');
  if (!dropdownElm) {
    dropdownElm = document.createElement('div');
    dropdownElm.id = 'tnb-signup-dropdown-signupForm';
    dropdownElm.className = 'tnb-signup-dropdown-signupForm';
    rightSection.appendChild(dropdownElm);
  }
  dropdownElm.innerHTML = signupDropdownContent;
  dropdownElm.style.display = 'block';
  dropdownElm.style.position = 'fixed';
  TopNavBar._positionDropdown(dropdownElm, rightSection);
  var signupForm = document.getElementById('tnb-signup-dropdown-signupForm');
  var clonedSignupForm = signupForm.cloneNode(true);
  signupForm.parentNode.replaceChild(clonedSignupForm, signupForm);
  var loginLink = document.getElementById('tnb-signup-dropdown-login-link');
  loginLink.addEventListener('click', function () {
    TopNavBar.hideSignupDropdown();
    TopNavBar.showLoginDropdown();
  });

  // Toggle password visibility
  var togglePasswordButton = document.getElementById('signup-toggle-password-visibility');
  togglePasswordButton.addEventListener('click', function () {
    var passwordInput = document.getElementById('tnb-signup-password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.innerHTML = "\n      <svg width=\"16\" height=\"14\" viewBox=\"0 0 16 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M10.7904 11.9117L9.17617 10.2975C8.80858 10.4286 8.41263 10.5 8 10.5C6.067 10.5 4.5 8.933 4.5 7.00001C4.5 6.58738 4.5714 6.19143 4.70253 5.82384L2.64112 3.76243C0.938717 5.27903 0 7.00001 0 7.00001C0 7.00001 3 12.5 8 12.5C9.01539 12.5 9.9483 12.2732 10.7904 11.9117Z\" fill=\"black\"/><path d=\"M5.20967 2.08834C6.05172 1.72683 6.98462 1.50001 8 1.50001C13 1.50001 16 7.00001 16 7.00001C16 7.00001 15.0613 8.72098 13.3589 10.2376L11.2975 8.17615C11.4286 7.80857 11.5 7.41263 11.5 7.00001C11.5 5.06701 9.933 3.50001 8 3.50001C7.58738 3.50001 7.19144 3.57141 6.82386 3.70253L5.20967 2.08834Z\" fill=\"black\"/><path d=\"M5.52485 6.64616C5.50847 6.76175 5.5 6.87989 5.5 7.00001C5.5 8.38072 6.61929 9.50001 8 9.50001C8.12012 9.50001 8.23825 9.49154 8.35385 9.47516L5.52485 6.64616Z\" fill=\"black\"/><path d=\"M10.4752 7.35383L7.64618 4.52485C7.76176 4.50848 7.87989 4.50001 8 4.50001C9.38071 4.50001 10.5 5.6193 10.5 7.00001C10.5 7.12011 10.4915 7.23824 10.4752 7.35383Z\" fill=\"black\"/><path d=\"M13.6464 13.3536L1.64645 1.35356L2.35355 0.646454L14.3536 12.6465L13.6464 13.3536Z\" fill=\"black\"/></svg>";
    } else {
      passwordInput.type = 'password';
      this.innerHTML = "\n        <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z\" fill=\"black\"/><path d=\"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C9.933 9.5 11.5 7.933 11.5 6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5Z\" fill=\"black\"/></svg>";
    }
  });
  var passwordInput = document.getElementById('tnb-signup-password');
  passwordInput.addEventListener('input', function () {
    var validation = validatePassword(this.value);
    this.setCustomValidity(validation.valid ? '' : validation.message);
  });

  // passwordInput.addEventListener('focus', function () {
  //   const validation = validatePassword(this.value);
  //   this.reportValidity();
  // });

  var firstNameInput = document.getElementById('tnb-signup-first-name');
  firstNameInput.addEventListener('input', function () {
    var validation = validateName(this.value);
    this.setCustomValidity(validation.valid ? '' : validation.message);
  });
  var lastNameInput = document.getElementById('tnb-signup-last-name');
  lastNameInput.addEventListener('input', function () {
    var validation = validateName(this.value);
    this.setCustomValidity(validation.valid ? '' : validation.message);
  });
  clonedSignupForm.addEventListener('submit', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            e.preventDefault();
            grecaptcha.execute();
          case 2:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x13) {
      return _ref16.apply(this, arguments);
    };
  }());
  var closeBtn = document.getElementById('tnb-signup-dropdown-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', TopNavBar.hideSignupDropdown);
  }
  var onSubmit = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(token) {
      var button, status, email, password, firstName, lastName, emailConsent, recaptchaToken;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            button = clonedSignupForm.querySelector("button[type='submit']");
            status = clonedSignupForm.querySelector('#signupStatus');
            setLoading(clonedSignupForm.querySelector("button[type='submit']"), true);
            TopNavBar._isSignupLoading = true;
            email = document.getElementById('tnb-signup-email').value;
            password = document.getElementById('tnb-signup-password').value;
            firstName = document.getElementById('tnb-signup-first-name').value.trim();
            lastName = document.getElementById('tnb-signup-last-name').value.trim();
            emailConsent = document.getElementById('tnb-signup-email-consent').checked;
            if (validateForm(email, password, firstName, lastName, status)) {
              _context9.next = 14;
              break;
            }
            setLoading(button, false);
            TopNavBar._isSignupLoading = false;
            grecaptcha.reset();
            return _context9.abrupt("return");
          case 14:
            recaptchaToken = {
              value: token,
              origin: 'ReCaptchaV2',
              action: 'signUpUser'
            };
            grecaptcha.reset();
            _context9.prev = 16;
            _context9.next = 19;
            return TopNavBar.signUpUser(email, password, firstName, lastName, emailConsent, JSON.stringify(recaptchaToken));
          case 19:
            TopNavBar.hideSignupDropdown();
            TopNavBar.showEmailConfirmationDropDown();
            _context9.next = 28;
            break;
          case 23:
            _context9.prev = 23;
            _context9.t0 = _context9["catch"](16);
            console.error(_context9.t0);
            status.textContent = getErrorMessage(_context9.t0);
            status.classList.add('error');
          case 28:
            _context9.prev = 28;
            setLoading(button, false);
            TopNavBar._isSignupLoading = false;
            return _context9.finish(28);
          case 32:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[16, 23, 28, 32]]);
    }));
    return function onSubmit(_x14) {
      return _ref17.apply(this, arguments);
    };
  }();
  grecaptcha.render('g-recaptcha', {
    'sitekey': TopNavBar._recaptchaSiteKey,
    'callback': onSubmit,
    'size': 'invisible',
    'badge': 'bottomright'
  });
  (function setupPasswordPopover() {
    var passwordInput = document.getElementById('tnb-signup-password');
    var popover = document.getElementById('password-requirements-popover');
    if (!passwordInput || !popover) return;
    var PWD_RULES = [{
      regexp: /.{8,}/,
      title: '8 characters'
    }, {
      regexp: /[A-Z]/,
      title: 'One uppercase letter'
    }, {
      regexp: /[a-z]/,
      title: 'One lowercase letter'
    }, {
      regexp: /[0-9]/,
      title: 'One number'
    }, {
      regexp: /[^A-Za-z0-9]/,
      title: 'One special character'
    }];
    function renderPopover(password) {
      var html = '<ul>';
      var allPassed = true;
      for (var _i4 = 0, _PWD_RULES = PWD_RULES; _i4 < _PWD_RULES.length; _i4++) {
        var rule = _PWD_RULES[_i4];
        var passed = rule.regexp.test(password);
        if (!passed) allPassed = false;
        html += "<li class=\"".concat(passed ? 'passed' : '', "\"><span class=\"checkmark\"></span> ").concat(rule.title, "</li>");
      }
      html += '</ul>';
      popover.innerHTML = html;
      if (allPassed && popover.classList.contains('active')) {
        popover.classList.remove('active');
        popover.classList.add('fade-out');
        setTimeout(function () {
          popover.classList.remove('fade-out');
          popover.style.display = 'none';
        }, 600);
      } else if (!allPassed) {
        popover.classList.remove('fade-out');
        if (document.activeElement === passwordInput) {
          popover.classList.add('active');
          popover.style.display = 'block';
        }
      }
    }
    function showPopover() {
      popover.classList.add('active');
    }
    function hidePopover() {
      popover.classList.remove('active');
      popover.classList.remove('fade-out');
      popover.style.display = 'none';
    }
    passwordInput.addEventListener('focus', function () {
      renderPopover(passwordInput.value);
      showPopover();
    });
    passwordInput.addEventListener('input', function () {
      renderPopover(passwordInput.value);
    });
    passwordInput.addEventListener('blur', function () {
      hidePopover();
    });
  })();
  (function suppressPasswordInvalidPopover() {
    var passwordFields = [document.getElementById('tnb-signup-password')].filter(Boolean);
    passwordFields.forEach(function (field) {
      field.addEventListener('invalid', function (e) {
        e.preventDefault();
        field.focus();
      });
    });
  })();
};
TopNavBar.hideSignupDropdown = function () {
  var signupForm = document.getElementById('tnb-signup-dropdown-signupForm');
  if (signupForm) {
    signupForm.style.display = 'none';
    TopNavBar.signupDropdownVisible = false;
  }
};
TopNavBar.showEmailConfirmationDropDown = function () {
  TopNavBar._isEmailConfirmationDropDownVisible = true;
  function setLoading(button, isLoading) {
    var text = button.querySelector('.button-text');
    var loader = button.querySelector('.button-loader');
    button.disabled = isLoading;
    text.style.opacity = isLoading ? '0' : '1';
    loader.style.display = isLoading ? 'block' : 'none';
  }
  function showError(message, messageTitle) {
    var emailVerificationMessage = document.getElementById('tnb-email-verification-message-group');
    if (emailVerificationMessage) {
      emailVerificationMessage.style.display = 'none';
    }
    var verificationStatus = document.getElementById('tnb-verification-status');
    if (verificationStatus) {
      verificationStatus.textContent = message;
    }
    var emailVerificationLogo = document.getElementById('tnb-email-verification-logo');
    if (emailVerificationLogo) {
      emailVerificationLogo.innerHTML = "\n      <svg width=\"32\" height=\"28\" viewBox=\"0 0 32 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.8768 2.03139C15.9116 2.0121 15.955 2 16.0031 2C16.0512 2 16.0946 2.0121 16.1293 2.03139C16.1593 2.04806 16.199 2.07852 16.2388 2.14625L29.9527 25.4796C30.024 25.6009 30.0226 25.728 29.957 25.8463C29.9241 25.9056 29.8829 25.9447 29.8475 25.9667C29.8181 25.9849 29.7801 26 29.717 26H2.28918C2.22607 26 2.18809 25.9849 2.15864 25.9667C2.12326 25.9447 2.08211 25.9056 2.04922 25.8463C1.98361 25.728 1.98217 25.6009 2.05349 25.4796L15.7674 2.14625C15.8072 2.07852 15.8469 2.04806 15.8768 2.03139ZM17.963 1.13284C17.0753 -0.377614 14.9309 -0.377614 14.0432 1.13284L0.329252 24.4662C-0.584814 26.0214 0.512557 28 2.28918 28H29.717C31.4936 28 32.591 26.0214 31.6769 24.4662L17.963 1.13284Z\" fill=\"#CE5347\"/>\n        <path d=\"M14.0031 22C14.0031 20.8954 14.8985 20 16.0031 20C17.1077 20 18.0031 20.8954 18.0031 22C18.0031 23.1046 17.1077 24 16.0031 24C14.8985 24 14.0031 23.1046 14.0031 22Z\" fill=\"#CE5347\"/>\n        <path d=\"M14.199 9.99008C14.0925 8.92457 14.9292 8 16 8C17.0708 8 17.9075 8.92457 17.801 9.99007L17.0995 17.005C17.043 17.5698 16.5677 18 16 18C15.4323 18 14.957 17.5698 14.9005 17.005L14.199 9.99008Z\" fill=\"#CE5347\"/>\n      </svg>\n";
    }
    var emailVerificationTitle = document.getElementById('tnb-email-verification-title');
    if (emailVerificationTitle) {
      emailVerificationTitle.textContent = messageTitle;
    }
  }
  var emailConfirmationDropDownContent = "\n  <div class=\"tnb-signup-dropdown-form-container\" id=\"tnb-signup-dropdown-emailConfirmationForm\">\n    <div class=\"auth-header\">\n      <button class=\"dropdown-close-btn\" id=\"tnb-email-confirmation-close-btn\" aria-label=\"Close\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <line x1=\"5\" y1=\"5\" x2=\"15\" y2=\"15\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"15\" y1=\"5\" x2=\"5\" y2=\"15\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        </svg>\n      </button>\n      <div class=\"auth-header-logo\" id=\"tnb-email-verification-logo\">\n      <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M16.9412 2.6352C16.3529 2.32147 15.6471 2.32147 15.0588 2.6352L3.05882 9.0352C2.4071 9.38278 2 10.0613 2 10.7999V12.4337L13.5 19.3337L16 17.8337L18.5 19.3337L30 12.4337V10.7999C30 10.0613 29.5929 9.38278 28.9412 9.0352L16.9412 2.6352ZM30 14.7661L20.4436 20.4999L30 26.2337V14.7661ZM29.9305 28.5244L16 20.1661L2.06948 28.5244C2.29991 29.3746 3.07693 29.9999 4 29.9999H28C28.9231 29.9999 29.7001 29.3746 29.9305 28.5244ZM2 26.2337L11.5563 20.4999L2 14.7661V26.2337ZM14.1176 0.87049C15.2941 0.243039 16.7059 0.24304 17.8824 0.870491L29.8824 7.27049C31.1858 7.96567 32 9.32265 32 10.7999V27.9999C32 30.209 30.2091 31.9999 28 31.9999H4C1.79086 31.9999 0 30.209 0 27.9999V10.7999C0 9.32265 0.814193 7.96567 2.11765 7.27049L14.1176 0.87049Z\" fill=\"#333333\"/>\n      </svg>\n      </div>\n      <div class=\"auth-title\" id=\"tnb-email-verification-title\">Verify your email</div>\n    </div>\n    \n    <div class=\"tnb-email-verification-message-group\" id=\"tnb-email-verification-message-group\">\n      <h3 class=\"verify-email-message-title\">Check your inbox</h3>\n      <p class=\"verify-email-message\"> We just sent you a link, click it to verify your email and finish signing up</p>\n    </div>\n    \n    <div id=\"tnb-verification-status\"></div>\n    \n    <div class=\"form-group\" style=\"margin-top: 15px; text-align: center;\">\n      <button id=\"tnb-resend-link\" type=\"submit\">\n        <span class=\"button-text\">Send the link again</span>\n        <span class=\"button-loader button-loader-send-link\"></span>\n      </button>\n    </div>\n    \n     <p class=\"switch-form\">\n     <a id=\"tnb-return-to-sign-in\" class=\"tnb-return-to-sign-in\"> Return to <span class=\"tnb-return-to-sign-in-text\">Sign In</span></a>\n     </p>\n     \n  </div>\n  ";
  var rightSection = document.querySelector('.tnb-right-section');
  var dropdownElm = document.getElementById('tnb-signup-dropdown-emailConfirmationForm');
  if (!dropdownElm) {
    dropdownElm = document.createElement('div');
    dropdownElm.id = 'tnb-signup-dropdown-emailConfirmationForm';
    dropdownElm.className = 'tnb-signup-dropdown-emailConfirmationForm';
    rightSection.appendChild(dropdownElm);
  }
  dropdownElm.innerHTML = emailConfirmationDropDownContent;
  dropdownElm.style.display = 'block';
  dropdownElm.style.position = 'fixed';
  TopNavBar._positionDropdown(dropdownElm, rightSection);
  var closeBtn = dropdownElm.querySelector('#tnb-email-confirmation-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', TopNavBar.hideEmailConfirmationDropDown);
    TopNavBar._showEmailVerifyStepFirst = true;
  }
  var resendLinkButton = document.getElementById('tnb-resend-link');
  var verificationStatus = document.getElementById('tnb-verification-status');
  resendLinkButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var cognitoUser;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          cognitoUser = new AmazonCognitoIdentity.CognitoUser({
            Username: TopNavBar._signUpUserName,
            Pool: TopNavBar.userPool
          });
          setLoading(resendLinkButton, true);
          _context10.prev = 2;
          _context10.next = 5;
          return new Promise(function (resolve, reject) {
            cognitoUser.resendConfirmationCode(function (err, result) {
              if (err) reject(err);else resolve(result);
            });
          });
        case 5:
          verificationStatus.textContent = 'Verification email has been resent. Please check your inbox.';
          verificationStatus.classList.remove('error');
          verificationStatus.classList.add('success');
          _context10.next = 14;
          break;
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](2);
          console.error(_context10.t0);
          showError('Failed to resend verification email. Please contact support.', 'Failed to resend verification email');
        case 14:
          _context10.prev = 14;
          setLoading(resendLinkButton, false);
          return _context10.finish(14);
        case 17:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 10, 14, 17]]);
  })));
  var pollCount = 0;
  var maxPolls = 60;
  var interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var userStatus, _verificationStatus, emailVerificationMessage, emailVerificationTitle, emailVerificationLogo, resendSection, returnToLogin;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (!(!TopNavBar._signUpEmail || !TopNavBar._signUpPassword)) {
            _context11.next = 3;
            break;
          }
          clearInterval(interval);
          return _context11.abrupt("return");
        case 3:
          pollCount++;
          if (!(pollCount >= maxPolls)) {
            _context11.next = 8;
            break;
          }
          clearInterval(interval);
          showError('Verification timeout. Please try logging in again.', 'Verification timeout');
          return _context11.abrupt("return");
        case 8:
          _context11.next = 10;
          return function () {
            return new Promise(function (resolve, reject) {
              UserSession.checkUserCognitoStatusByEmail(TopNavBar._signUpEmail, function (userStatus) {
                resolve(userStatus);
              });
            });
          }();
        case 10:
          userStatus = _context11.sent;
          if (!((userStatus === null || userStatus === void 0 ? void 0 : userStatus.status) === 'CONFIRMED')) {
            _context11.next = 32;
            break;
          }
          clearInterval(interval);
          _verificationStatus = document.getElementById('tnb-verification-status');
          emailVerificationMessage = document.getElementById('tnb-email-verification-message-group');
          if (_verificationStatus) {
            _verificationStatus.textContent = "You'll be logged in automatically - just a moment...";
            _verificationStatus.classList.add('success');
          }
          emailVerificationTitle = document.getElementById('tnb-email-verification-title');
          if (emailVerificationTitle) {
            emailVerificationTitle.textContent = 'Your email is verified!';
          }
          if (emailVerificationMessage) {
            emailVerificationMessage.style.display = 'none';
          }
          emailVerificationLogo = document.getElementById('tnb-email-verification-logo');
          if (emailVerificationLogo) {
            emailVerificationLogo.innerHTML = "\n        <svg width=\"32\" height=\"28\" viewBox=\"0 0 32 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M4 0C1.79086 0 0 1.79086 0 4V20L5.16772e-05 20.0206C0.01112 22.2202 1.79772 24 4 24H15C15.5523 24 16 23.5523 16 23C16 22.4477 15.5523 22 15 22H4C3.0743 22 2.29549 21.3711 2.06753 20.5172L13.3483 13.5752L16 15.1662L30 6.76619V13C30 13.5523 30.4477 14 31 14C31.5523 14 32 13.5523 32 13V4C32 1.79086 30.2091 0 28 0H4ZM11.4162 12.4159L2 18.2104V6.76619L11.4162 12.4159ZM2 4.43381V4C2 2.89543 2.89543 2 4 2H28C29.1046 2 30 2.89543 30 4V4.43381L16 12.8338L2 4.43381Z\" fill=\"#04AA6D\"/>\n          <path d=\"M32 21C32 24.866 28.866 28 25 28C21.134 28 18 24.866 18 21C18 17.134 21.134 14 25 14C28.866 14 32 17.134 32 21ZM28.0145 17.6425C27.5409 17.3584 26.9267 17.5119 26.6425 17.9855L24.3015 21.8872L23.2071 20.7929C22.8166 20.4024 22.1834 20.4024 21.7929 20.7929C21.4024 21.1834 21.4024 21.8166 21.7929 22.2071L23.3401 23.7543C24.0301 24.4443 25.1849 24.3022 25.687 23.4654L28.3575 19.0145C28.6416 18.5409 28.4881 17.9267 28.0145 17.6425Z\" fill=\"#04AA6D\"/>\n        </svg>";
          }

          // Hide the resend button section and return to login button
          resendSection = dropdownElm.querySelector('.form-group[style*="text-align: center"]');
          returnToLogin = dropdownElm.querySelector('.switch-form');
          if (resendSection) {
            resendSection.style.display = 'none';
          }
          if (returnToLogin) {
            returnToLogin.style.display = 'none';
          }
          _context11.prev = 25;
          _context11.next = 28;
          return TopNavBar._signInUser(TopNavBar._signUpEmail, TopNavBar._signUpPassword);
        case 28:
          _context11.prev = 28;
          TopNavBar.hideEmailConfirmationDropDown();
          TopNavBar._showEmailVerifyStepFirst = false;
          return _context11.finish(28);
        case 32:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[25,, 28, 32]]);
  })), 5000);
  TopNavBar._pollEmailVerificationInterval = interval;
  var returnToLoginBtn = document.getElementById('tnb-return-to-sign-in');
  returnToLoginBtn.addEventListener('click', function () {
    clearInterval(interval);
    TopNavBar.hideEmailConfirmationDropDown();
    TopNavBar.showLoginDropdown();
    TopNavBar._showEmailVerifyStepFirst = false;
  });
};
TopNavBar.hideEmailConfirmationDropDown = function () {
  var emailConfirmationDropDown = document.getElementById('tnb-signup-dropdown-emailConfirmationForm');
  if (TopNavBar._pollEmailVerificationInterval) {
    clearInterval(TopNavBar._pollEmailVerificationInterval);
  }
  if (emailConfirmationDropDown) {
    TopNavBar._isEmailConfirmationDropDownVisible = false;
    emailConfirmationDropDown.style.display = 'none';
  }
};
TopNavBar.showResetPasswordDropDown = function () {
  TopNavBar.resetPasswordDropdownVisible = true;
  function setLoading(button, isLoading) {
    var text = button.querySelector('.button-text');
    var loader = button.querySelector('.button-loader');
    button.disabled = isLoading;
    text.style.opacity = isLoading ? '0' : '1';
    loader.style.display = isLoading ? 'block' : 'none';
  }
  var resetPasswordContent = "\n  <div class=\"tnb-signup-dropdown-form-container\" id=\"tnb-signup-dropdown-reset-password-form\">\n    <div class=\"auth-header\">\n      <button class=\"dropdown-close-btn\" id=\"tnb-reset-password-dropdown-close-btn\" aria-label=\"Close\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <line x1=\"5\" y1=\"5\" x2=\"15\" y2=\"15\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"15\" y1=\"5\" x2=\"5\" y2=\"15\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        </svg>\n      </button>\n      <div class=\"auth-header-logo\" id=\"tnb-email-verification-logo\">\n      <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M16.9412 2.6352C16.3529 2.32147 15.6471 2.32147 15.0588 2.6352L3.05882 9.0352C2.4071 9.38278 2 10.0613 2 10.7999V12.4337L13.5 19.3337L16 17.8337L18.5 19.3337L30 12.4337V10.7999C30 10.0613 29.5929 9.38278 28.9412 9.0352L16.9412 2.6352ZM30 14.7661L20.4436 20.4999L30 26.2337V14.7661ZM29.9305 28.5244L16 20.1661L2.06948 28.5244C2.29991 29.3746 3.07693 29.9999 4 29.9999H28C28.9231 29.9999 29.7001 29.3746 29.9305 28.5244ZM2 26.2337L11.5563 20.4999L2 14.7661V26.2337ZM14.1176 0.87049C15.2941 0.243039 16.7059 0.24304 17.8824 0.870491L29.8824 7.27049C31.1858 7.96567 32 9.32265 32 10.7999V27.9999C32 30.209 30.2091 31.9999 28 31.9999H4C1.79086 31.9999 0 30.209 0 27.9999V10.7999C0 9.32265 0.814193 7.96567 2.11765 7.27049L14.1176 0.87049Z\" fill=\"#333333\"/>\n      </svg>\n      </div>\n      <div class=\"auth-title\" id=\"tnb-email-verification-title\">Reset your password</div>\n    </div>\n\n    <p class=\"reset-password-message\">If the account exists, we will email you instructions to reset the password.</p>\n\n    <form id=\"tnb-reset-password-form\">\n      <div class=\"form-group\">\n        <input type=\"email\" id=\"tnb-reset-password-email\" autocomplete=\"email\" spellcheck=\"false\" autocapitalize=\"off\" placeholder=\"Enter your email address\" required />\n      </div>\n      <div id=\"tnb-verification-status-reset-password\"></div>\n      <button type=\"submit\" id=\"tnb-send-reset-password\">\n        <span class=\"button-text\">Send reset link</span>\n        <span class=\"button-loader\"></span>\n      </button>\n    </form>\n    <p class=\"switch-form reset-password-switch-form\">\n      <a id=\"tnb-return-to-sign-in-reset-password\" class=\"tnb-return-to-sign-in\"> Return to <span class=\"tnb-return-to-sign-in-text\">Sign In</span></a>\n    </p>\n  </div>\n  ";
  var rightSection = document.querySelector('.tnb-right-section');
  var dropdownElm = document.getElementById('tnb-signup-dropdown-reset-password-form');
  if (!dropdownElm) {
    dropdownElm = document.createElement('div');
    dropdownElm.id = 'tnb-signup-dropdown-reset-password-form';
    dropdownElm.className = 'tnb-signup-dropdown-reset-password-form';
    rightSection.appendChild(dropdownElm);
  }
  dropdownElm.innerHTML = resetPasswordContent;
  dropdownElm.style.display = 'block';
  dropdownElm.style.position = 'fixed';
  TopNavBar._positionDropdown(dropdownElm, rightSection);
  var closeBtn = dropdownElm.querySelector('#tnb-reset-password-dropdown-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', TopNavBar.hideResetPasswordDropDown);
  }
  var emailInput = document.getElementById('tnb-reset-password-email');
  if (emailInput) {
    emailInput.value = TopNavBar._emailInput;
    emailInput.addEventListener('input', function (e) {
      TopNavBar._emailInput = e.target.value;
    });
  }
  var form = document.getElementById('tnb-reset-password-form');
  var status = document.getElementById('tnb-verification-status-reset-password');
  form.addEventListener('submit', /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e) {
      var button, email, cognitoUser;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            e.preventDefault();
            button = form.querySelector("button[type='submit']");
            setLoading(button, true);
            status.textContent = '';
            status.classList.remove('error', 'success');
            email = document.getElementById('tnb-reset-password-email').value.trim();
            if (email) {
              _context12.next = 11;
              break;
            }
            status.textContent = 'Please enter your email address.';
            status.classList.add('error');
            setLoading(button, false);
            return _context12.abrupt("return");
          case 11:
            cognitoUser = new AmazonCognitoIdentity.CognitoUser({
              Username: email,
              Pool: TopNavBar.userPool
            });
            cognitoUser.forgotPassword({
              onSuccess: function onSuccess() {
                status.innerHTML = "We've sent an email to ".concat(email, " with instructions. <br> Check the spam folder if the email doesn't show up. <br> We sent it from login@w3schools.com");
                status.classList.remove('error');
                status.classList.add('success');
                var sendResetLinkButton = document.getElementById('tnb-send-reset-password');
                sendResetLinkButton.style.display = 'none';
                setLoading(button, false);
              },
              onFailure: function onFailure(err) {
                status.textContent = err.message || 'Failed to send reset link.';
                status.classList.remove('success');
                status.classList.add('error');
                setLoading(button, false);
              }
            });
          case 13:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function (_x15) {
      return _ref20.apply(this, arguments);
    };
  }());

  // Return to login link
  var returnToLoginBtn = document.getElementById('tnb-return-to-sign-in-reset-password');
  returnToLoginBtn.addEventListener('click', function () {
    TopNavBar.hideResetPasswordDropDown();
    TopNavBar.showLoginDropdown();
  });
};
TopNavBar.hideResetPasswordDropDown = function () {
  var resetPasswordDropDown = document.getElementById('tnb-signup-dropdown-reset-password-form');
  if (resetPasswordDropDown) {
    TopNavBar.resetPasswordDropdownVisible = false;
    resetPasswordDropDown.style.display = 'none';
  }
};
TopNavBar.showConfirmResetPasswordDropDown = function (requiredAttributes, email, cognitoUser) {
  var _document$getElementB2, _document$getElementB3;
  function validatePassword(password) {
    var PWD_RULES = [{
      regexp: /.{8,}/,
      title: '8 characters'
    }, {
      regexp: /[A-Z]/,
      title: 'one uppercase letter'
    }, {
      regexp: /[a-z]/,
      title: 'one lowercase letter'
    }, {
      regexp: /[0-9]/,
      title: 'one number'
    }, {
      regexp: /[^A-Za-z0-9]/,
      title: 'one special character'
    }];
    var rulesNotPassed = [].concat(PWD_RULES, [{
      regexp: /^[\S]+.*[\S]+$/,
      title: 'no trailing whitespace'
    }]).filter(function (rule) {
      return !rule.regexp.test(password);
    });
    if (rulesNotPassed.length) {
      var rule = rulesNotPassed[0].title.toLowerCase();
      return {
        valid: false,
        message: rule.includes('8') || rule.includes('whitespace') ? "Password requires ".concat(rule) : "Password requires at least ".concat(rule)
      };
    }
    return {
      valid: true,
      message: ''
    };
  }
  function setLoading(button, isLoading) {
    var text = button.querySelector('.button-text');
    var loader = button.querySelector('.button-loader');
    button.disabled = isLoading;
    text.style.opacity = isLoading ? '0' : '1';
    loader.style.display = isLoading ? 'block' : 'none';
  }
  var confirmResetPasswordDropDownContent = "\n  <div class=\"tnb-signup-dropdown-form-container\" id=\"tnb-signup-dropdown-confirm-reset-password-form\">\n    <div class=\"auth-header\">\n      <div class=\"auth-header-logo\" id=\"tnb-email-verification-logo\"></div>\n      <div class=\"auth-title\">Change Password</div>\n      <p>Please enter your new password below.</p>\n    </div>\n    <form id=\"tnb-confirm-reset-password-form\">\n      <div class=\"form-group\">\n        <div class=\"password-input-container\">\n          <input type=\"password\" id=\"tnb-confirm-reset-password\" name=\"password\" required minlength=\"8\" placeholder=\"New password\">\n            <div class=\"password-requirements-popover\" id=\"password-requirements-popover\"></div>\n            <button type=\"button\" id=\"reset-password-toggle-password-visibility\" class=\"toggle-password-visibility\" tabindex=\"-1\">\n              <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z\" fill=\"black\"/>\n                <path d=\"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C9.933 9.5 11.5 7.933 11.5 6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5Z\" fill=\"black\"/>\n              </svg>\n            </button>\n          </input>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"password-input-container\">\n          <input type=\"password\" id=\"tnb-confirm-reset-password-confirm\" name=\"confirmPassword\" required placeholder=\"Confirm new password\">\n          <button type=\"button\" id=\"confirm-reset-password-toggle-password-visibility\" class=\"toggle-password-visibility\" tabindex=\"-1\">\n            <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z\" fill=\"black\"/>\n              <path d=\"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C9.933 9.5 11.5 7.933 11.5 6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5Z\" fill=\"black\"/>\n            </svg>\n          </button>\n          </input>\n        </div>\n      </div>\n      <div id=\"resetPasswordStatus\" class=\"status\"></div>\n      <button type=\"submit\" id=\"tnb-confirm-reset-password-submit\">\n        <span class=\"button-text\">Change password</span>\n        <span class=\"button-loader\"></span>\n      </button>\n      <button type=\"button\" id=\"tnb-return-to-sign-in-after-success\" style=\"display:none;\">Return to Sign In</button>\n    </form>\n  </div>\n  ";
  var rightSection = document.querySelector('.tnb-right-section');
  var dropdownElm = document.getElementById('tnb-signup-dropdown-confirm-reset-password-form');
  if (!dropdownElm) {
    dropdownElm = document.createElement('div');
    dropdownElm.id = 'tnb-signup-dropdown-confirm-reset-password-form';
    dropdownElm.className = 'tnb-signup-dropdown-confirm-reset-password-form';
    rightSection.appendChild(dropdownElm);
  }
  dropdownElm.innerHTML = confirmResetPasswordDropDownContent;
  dropdownElm.style.display = 'block';
  dropdownElm.style.position = 'fixed';
  TopNavBar._positionDropdown(dropdownElm, rightSection);

  // Toggle password visibility for both fields3
  (_document$getElementB2 = document.getElementById('reset-password-toggle-password-visibility')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', function () {
    var passwordInput = document.getElementById('tnb-confirm-reset-password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.innerHTML = "\n      <svg width=\"16\" height=\"14\" viewBox=\"0 0 16 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M10.7904 11.9117L9.17617 10.2975C8.80858 10.4286 8.41263 10.5 8 10.5C6.067 10.5 4.5 8.933 4.5 7.00001C4.5 6.58738 4.5714 6.19143 4.70253 5.82384L2.64112 3.76243C0.938717 5.27903 0 7.00001 0 7.00001C0 7.00001 3 12.5 8 12.5C9.01539 12.5 9.9483 12.2732 10.7904 11.9117Z\" fill=\"black\"/><path d=\"M5.20967 2.08834C6.05172 1.72683 6.98462 1.50001 8 1.50001C13 1.50001 16 7.00001 16 7.00001C16 7.00001 15.0613 8.72098 13.3589 10.2376L11.2975 8.17615C11.4286 7.80857 11.5 7.41263 11.5 7.00001C11.5 5.06701 9.933 3.50001 8 3.50001C7.58738 3.50001 7.19144 3.57141 6.82386 3.70253L5.20967 2.08834Z\" fill=\"black\"/><path d=\"M5.52485 6.64616C5.50847 6.76175 5.5 6.87989 5.5 7.00001C5.5 8.38072 6.61929 9.50001 8 9.50001C8.12012 9.50001 8.23825 9.49154 8.35385 9.47516L5.52485 6.64616Z\" fill=\"black\"/><path d=\"M10.4752 7.35383L7.64618 4.52485C7.76176 4.50848 7.87989 4.50001 8 4.50001C9.38071 4.50001 10.5 5.6193 10.5 7.00001C10.5 7.12011 10.4915 7.23824 10.4752 7.35383Z\" fill=\"black\"/><path d=\"M13.6464 13.3536L1.64645 1.35356L2.35355 0.646454L14.3536 12.6465L13.6464 13.3536Z\" fill=\"black\"/></svg>";
    } else {
      passwordInput.type = 'password';
      this.innerHTML = "\n        <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z\" fill=\"black\"/><path d=\"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C9.933 9.5 11.5 7.933 11.5 6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5Z\" fill=\"black\"/></svg>";
    }
  });
  (_document$getElementB3 = document.getElementById('confirm-reset-password-toggle-password-visibility')) === null || _document$getElementB3 === void 0 || _document$getElementB3.addEventListener('click', function () {
    var passwordInput = document.getElementById('tnb-confirm-reset-password-confirm');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.innerHTML = "\n      <svg width=\"16\" height=\"14\" viewBox=\"0 0 16 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M10.7904 11.9117L9.17617 10.2975C8.80858 10.4286 8.41263 10.5 8 10.5C6.067 10.5 4.5 8.933 4.5 7.00001C4.5 6.58738 4.5714 6.19143 4.70253 5.82384L2.64112 3.76243C0.938717 5.27903 0 7.00001 0 7.00001C0 7.00001 3 12.5 8 12.5C9.01539 12.5 9.9483 12.2732 10.7904 11.9117Z\" fill=\"black\"/><path d=\"M5.20967 2.08834C6.05172 1.72683 6.98462 1.50001 8 1.50001C13 1.50001 16 7.00001 16 7.00001C16 7.00001 15.0613 8.72098 13.3589 10.2376L11.2975 8.17615C11.4286 7.80857 11.5 7.41263 11.5 7.00001C11.5 5.06701 9.933 3.50001 8 3.50001C7.58738 3.50001 7.19144 3.57141 6.82386 3.70253L5.20967 2.08834Z\" fill=\"black\"/><path d=\"M5.52485 6.64616C5.50847 6.76175 5.5 6.87989 5.5 7.00001C5.5 8.38072 6.61929 9.50001 8 9.50001C8.12012 9.50001 8.23825 9.49154 8.35385 9.47516L5.52485 6.64616Z\" fill=\"black\"/><path d=\"M10.4752 7.35383L7.64618 4.52485C7.76176 4.50848 7.87989 4.50001 8 4.50001C9.38071 4.50001 10.5 5.6193 10.5 7.00001C10.5 7.12011 10.4915 7.23824 10.4752 7.35383Z\" fill=\"black\"/><path d=\"M13.6464 13.3536L1.64645 1.35356L2.35355 0.646454L14.3536 12.6465L13.6464 13.3536Z\" fill=\"black\"/></svg>";
    } else {
      passwordInput.type = 'password';
      this.innerHTML = "\n        <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z\" fill=\"black\"/><path d=\"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C9.933 9.5 11.5 7.933 11.5 6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5Z\" fill=\"black\"/></svg>";
    }
  });

  // Custom validity for password fields
  var passwordInput = dropdownElm.querySelector('#tnb-confirm-reset-password');
  var confirmPasswordInput = dropdownElm.querySelector('#tnb-confirm-reset-password-confirm');
  passwordInput.addEventListener('input', function () {
    var validation = validatePassword(this.value);
    this.setCustomValidity(validation.valid ? '' : validation.message);
    // Also check confirm password
    if (confirmPasswordInput.value && this.value !== confirmPasswordInput.value) {
      confirmPasswordInput.setCustomValidity('Passwords do not match.');
    } else {
      confirmPasswordInput.setCustomValidity('');
    }
  });
  confirmPasswordInput.addEventListener('input', function () {
    if (this.value !== passwordInput.value) {
      this.setCustomValidity('Passwords do not match.');
    } else {
      this.setCustomValidity('');
    }
  });
  var form = document.getElementById('tnb-confirm-reset-password-form');
  var status = document.getElementById('resetPasswordStatus');
  form.addEventListener('submit', /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e) {
      var password, confirmPassword, submitBtn, passwordValidation;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            e.preventDefault();
            status.textContent = '';
            status.classList.remove('error', 'success');
            password = passwordInput.value;
            confirmPassword = confirmPasswordInput.value;
            submitBtn = document.getElementById('tnb-confirm-reset-password-submit');
            setLoading(submitBtn, true);
            if (password) {
              _context13.next = 12;
              break;
            }
            status.textContent = 'Please enter a new password.';
            status.classList.add('error');
            setLoading(submitBtn, false);
            return _context13.abrupt("return");
          case 12:
            passwordValidation = validatePassword(password);
            if (passwordValidation.valid) {
              _context13.next = 18;
              break;
            }
            status.textContent = passwordValidation.message;
            status.classList.add('error');
            setLoading(submitBtn, false);
            return _context13.abrupt("return");
          case 18:
            if (!(password !== confirmPassword)) {
              _context13.next = 23;
              break;
            }
            status.textContent = 'Passwords do not match.';
            status.classList.add('error');
            setLoading(submitBtn, false);
            return _context13.abrupt("return");
          case 23:
            if (email) {
              _context13.next = 28;
              break;
            }
            status.textContent = 'Missing email. Please start the reset process again.';
            status.classList.add('error');
            setLoading(submitBtn, false);
            return _context13.abrupt("return");
          case 28:
            cognitoUser.completeNewPasswordChallenge(password, requiredAttributes, {
              onSuccess: function onSuccess() {
                status.textContent = 'Your password has been reset successfully. You can now sign in.';
                status.classList.remove('error');
                status.classList.add('success');
                setLoading(submitBtn, false);
                // Hide submit button and show return to sign in button
                var submitBtnElm = document.getElementById('tnb-confirm-reset-password-submit');
                var returnBtnElm = document.getElementById('tnb-return-to-sign-in-after-success');
                if (submitBtnElm && returnBtnElm) {
                  submitBtnElm.style.display = 'none';
                  returnBtnElm.style.display = '';
                  returnBtnElm.onclick = function () {
                    TopNavBar.hideConfirmResetPasswordDropDown();
                    TopNavBar.showLoginDropdown();
                  };
                }
              },
              onFailure: function onFailure(err) {
                status.textContent = err.message || 'Failed to reset password.';
                status.classList.remove('success');
                status.classList.add('error');
                setLoading(submitBtn, false);
              }
            });
          case 29:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return function (_x16) {
      return _ref21.apply(this, arguments);
    };
  }());
  (function setupPasswordPopoverConfirmPassword() {
    var passwordInput = document.getElementById('tnb-confirm-reset-password');
    var popover = document.getElementById('password-requirements-popover');
    if (!passwordInput || !popover) return;
    var PWD_RULES = [{
      regexp: /.{8,}/,
      title: '8 characters'
    }, {
      regexp: /[A-Z]/,
      title: 'One uppercase letter'
    }, {
      regexp: /[a-z]/,
      title: 'One lowercase letter'
    }, {
      regexp: /[0-9]/,
      title: 'One number'
    }, {
      regexp: /[^A-Za-z0-9]/,
      title: 'One special character'
    }];
    function renderPopover(password) {
      var html = '<div class="popover-columns" style="display: flex; gap: 24px;">';
      html += '<ul style="margin:0; padding:0; list-style:none;">';
      var allPassed = true;
      for (var i = 0; i < 3; i++) {
        var rule = PWD_RULES[i];
        var passed = rule.regexp.test(password);
        if (!passed) allPassed = false;
        html += "<li class=\"".concat(passed ? 'passed' : '', "\"><span class=\"checkmark\"></span> ").concat(rule.title, "</li>");
      }
      html += '</ul>';
      html += '<ul style="margin:0; padding:0; list-style:none;">';
      for (var _i5 = 3; _i5 < PWD_RULES.length; _i5++) {
        var _rule = PWD_RULES[_i5];
        var _passed = _rule.regexp.test(password);
        if (!_passed) allPassed = false;
        html += "<li class=\"".concat(_passed ? 'passed' : '', "\"><span class=\"checkmark\"></span> ").concat(_rule.title, "</li>");
      }
      html += '</ul>';
      html += '</div>';
      popover.innerHTML = html;
      if (allPassed && popover.classList.contains('active')) {
        popover.classList.remove('active');
        popover.classList.add('fade-out');
        setTimeout(function () {
          popover.classList.remove('fade-out');
          popover.style.display = 'none';
        }, 600);
      } else if (!allPassed) {
        popover.classList.remove('fade-out');
        if (document.activeElement === passwordInput) {
          popover.classList.add('active');
          popover.style.display = 'block';
        }
      }
    }
    function showPopover() {
      popover.classList.add('active');
    }
    function hidePopover() {
      popover.classList.remove('active');
      popover.classList.remove('fade-out');
      popover.style.display = 'none';
    }
    passwordInput.addEventListener('focus', function () {
      renderPopover(passwordInput.value);
      showPopover();
    });
    passwordInput.addEventListener('input', function () {
      renderPopover(passwordInput.value);
    });
    passwordInput.addEventListener('blur', function () {
      hidePopover();
    });
  })();
  (function suppressPasswordInvalidPopover() {
    var passwordFields = [document.getElementById('tnb-confirm-reset-password')].filter(Boolean);
    passwordFields.forEach(function (field) {
      field.addEventListener('invalid', function (e) {
        e.preventDefault();
        field.focus();
      });
    });
  })();
};
TopNavBar.hideConfirmResetPasswordDropDown = function () {
  var confirmResetPasswordDropDown = document.getElementById('tnb-signup-dropdown-confirm-reset-password-form');
  if (confirmResetPasswordDropDown) {
    confirmResetPasswordDropDown.style.display = 'none';
  }
};
TopNavBar._positionDropdown = function (dropdownElm, rightSection) {
  if (rightSection && dropdownElm) {
    var topNavContainer = document.getElementById('pagetop') || document.body;
    var viewportWidth = document.body.clientWidth;
    var offset = (viewportWidth - topNavContainer.clientWidth) / 2;
    dropdownElm.style.right = offset + 'px';
    dropdownElm.style.left = 'auto';
  }
};
window.TopNavBar_google_data_moment_callback = function (response) {
  var oneYearFromNow = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
  try {
    if (response.isSkippedMoment()) {
      var existingGoogleOneTapSkippedCookie = document.cookie.split('; ').find(function (row) {
        return row.startsWith('google_one_tap_skipped=');
      });
      if (existingGoogleOneTapSkippedCookie) {
        var cookieValue = JSON.parse(existingGoogleOneTapSkippedCookie.split('=')[1]);
        var new_i_l = cookieValue.i_l + 1;
        var now = new Date();
        switch (new_i_l) {
          case 1:
            now.setMinutes(now.getMinutes() + 1);
            break;
          case 2:
            now.setDate(now.getDate() + 1);
            break;
          case 3:
            now.setDate(now.getDate() + 7);
            break;
          case 4:
            now.setMonth(now.getMonth() + 1);
            break;
        }
        var new_i_p = now.getTime();
        document.cookie = "google_one_tap_skipped={\"i_p\":".concat(new_i_p, ",\"i_l\":").concat(new_i_l, "}; path=/; samesite=strict; secure; expires=").concat(oneYearFromNow.toUTCString());
        return;
      }
      var twoHoursFromNow = new Date(new Date().getTime() + 1000 * 60 * 60 * 2);
      document.cookie = "google_one_tap_skipped={\"i_p\":".concat(twoHoursFromNow.getTime(), ",\"i_l\":1}; path=/; samesite=strict; secure; expires=").concat(oneYearFromNow.toUTCString());
    }
  } catch (err) {
    console.error('TopNavBar_google_data_moment_callback -> err: ', err);
    var oneMonthFromNow = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
    document.cookie = "google_one_tap_skipped={\"i_p\":".concat(oneMonthFromNow, ",\"i_l\":1}; path=/; samesite=strict; secure; expires=").concat(oneYearFromNow.toUTCString());
  }
};
TopNavBar._revertProfileDropDownLinksToOriginal = function () {
  var dropdownElm = document.getElementById('tnb-profile-dropdown');
  var dashboardUrl = dropdownElm.querySelectorAll('.tnb-dropdown-links-url');
  dashboardUrl.forEach(function (url) {
    var href = url.href;
    var redirectUrl = href.split('?')[1];
    var originalUrl = redirectUrl.split('redirect_url=')[1];
    var originalUrlDecoded = decodeURIComponent(originalUrl);
    url.href = originalUrlDecoded;
  });
};
// TopNavBar.renderGoogleOneTap = function () {
//   const oneTapDiv = document.createElement('div');
//   oneTapDiv.id = 'g_id_onload';
//   oneTapDiv.setAttribute('data-client_id', TopNavBar._googleAppClientId);
//   oneTapDiv.setAttribute('data-context', 'signin');
//   oneTapDiv.setAttribute('data-callback', 'TopNavBar_handleGoogleLogin');
//   // oneTapDiv.setAttribute('data-cancel_on_tap_outside', 'true');
//   oneTapDiv.setAttribute('data-itp_support', 'true');
//   oneTapDiv.setAttribute('data-moment_callback', 'TopNavBar_google_data_moment_callback');

//   const topNavBar = document.getElementById('top-nav-bar');

//   if (topNavBar) {
//     topNavBar.appendChild(oneTapDiv);
//   }
// };

// < legacy mapping
window.w3_open = TopNavBar.openMenu;
window.w3_close = TopNavBar.closeMenu;
window.w3_open_nav = TopNavBar.openNavItem;
window.w3_close_nav = TopNavBar.closeNavItem;
window.w3_close_all_topnav = TopNavBar.closeAllNavItems;
window.open_search = TopNavBar.googleSearchFocusInput;
window.gSearch = TopNavBar.googleSearchInit;
// > legacy mapping

TopNavBar.init();

// window.onload = function () {
//   if (!TopNavBar.loggedIn && TopNavBar.env === 'classic') {
//     google.accounts.id.initialize({
//       client_id: TopNavBar._googleAppClientId,
//       callback: TopNavBar_handleGoogleLogin,
//       context: 'Sign in',
//       'itp_support': true
//     });

//     const googleOneTapSkippedCookie = document.cookie
//       .split('; ')
//       .find(row => row.startsWith('google_one_tap_skipped='));

//     if (!googleOneTapSkippedCookie) {
//       google.accounts.id.prompt(TopNavBar_google_data_moment_callback);
//       return;
//     }

//     try {
//       const cookieValue = JSON.parse(googleOneTapSkippedCookie.split('=')[1]);
//       const now = new Date();
//       if (now.getTime() < cookieValue.i_p) {
//         return;
//       }

//       google.accounts.id.prompt(TopNavBar_google_data_moment_callback);
//     } catch (err) {
//       document.cookie = `google_one_tap_skipped=; path=/; samesite=strict; secure; expires=${new Date(
//         0
//       ).toUTCString()}`;
//     }
//   }
// };

TopNavBar.showBookmarkLoginModal = function () {
  var existingModal = document.getElementById('w3s-bookmark-login-modal');
  if (existingModal) existingModal.remove();
  var modal = document.createElement('div');
  modal.id = 'w3s-bookmark-login-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.5)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '9999';
  modal.style.fontFamily = 'Source Sans Pro, sans-serif';
  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.remove();
    }
  };
  var content = document.createElement('div');
  content.style.background = '#fff';
  content.style.borderRadius = '5px';
  content.style.maxWidth = '400px';
  content.style.width = '100%';
  content.style.padding = '30px';
  content.style.position = 'relative';
  content.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  content.style.boxSizing = 'border-box';
  var closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '15px';
  closeBtn.style.border = 'none';
  closeBtn.style.background = 'none';
  closeBtn.style.fontSize = '24px';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.color = '#777';
  closeBtn.style.lineHeight = '1';
  closeBtn.onclick = function () {
    modal.remove();
  };
  var title = document.createElement('h2');
  title.textContent = 'Create an account to bookmark';
  title.style.margin = '0 0 15px 0';
  title.style.fontSize = '24px';
  title.style.fontWeight = '500';
  title.style.color = '#282A35';
  var description = document.createElement('p');
  description.textContent = 'Easily access your favorite tutorials and track your progress across the website';
  description.style.margin = '0 0 25px 0';
  description.style.fontSize = '16px';
  description.style.lineHeight = '1.5';
  description.style.color = '#555';
  var createBtn = document.createElement('button');
  createBtn.className = 'w3-btn w3s-green';
  createBtn.textContent = 'Create Free Account';
  createBtn.style.background = '#04AA6D';
  createBtn.style.color = '#fff';
  createBtn.style.fontWeight = '600';
  createBtn.style.fontSize = '14px';
  createBtn.style.border = 'none';
  createBtn.style.borderRadius = '4px';
  createBtn.style.padding = '12px 0';
  createBtn.style.width = '100%';
  createBtn.style.cursor = 'pointer';
  createBtn.style.marginBottom = '15px';
  createBtn.onclick = function () {
    modal.remove();
    setTimeout(function () {
      TopNavBar.showSignupDropdown();
    }, 0);
  };
  var loginText = document.createElement('div');
  loginText.style.textAlign = 'center';
  loginText.style.fontSize = '15px';
  loginText.style.color = '#555';
  var loginSpan = document.createElement('span');
  loginSpan.textContent = 'Already have an account? ';
  var loginLink = document.createElement('a');
  loginLink.textContent = 'Sign in';
  loginLink.href = 'javascript:void(0)';
  loginLink.style.color = '#04AA6D';
  loginLink.style.textDecoration = 'none';
  loginLink.style.fontWeight = 'bold';
  loginLink.onclick = function (e) {
    e.preventDefault();
    modal.remove();
    setTimeout(function () {
      TopNavBar.showLoginDropdown();
    }, 0);
  };
  loginText.appendChild(loginSpan);
  loginText.appendChild(loginLink);
  content.appendChild(closeBtn);
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(createBtn);
  content.appendChild(loginText);
  modal.appendChild(content);
  document.body.appendChild(modal);
};
