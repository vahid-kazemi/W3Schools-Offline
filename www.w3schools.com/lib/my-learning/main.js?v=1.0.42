"use strict";

/*
  MyLearning script
*/

window.MyLearning = {
  progressTrackingVersion: '1.0.2',
  // WARNING! Bump with care as it invalidates user's progress
  _isIframed: null,
  _iframeOriginIndex: -1,
  _iframeSendBackLocationAndLessonMeta: false,
  _iframeParentSentMessages: {},
  pages_read_count: 0,
  total_pages_count: 0,
  user_progress_collected: false,
  _w3sBaseUrl: 'https://www.w3schools.com',
  _profileBaseUrl: 'https://profile.w3schools.com',
  _dashboardBaseUrl: 'https://pathfinder.w3schools.com',
  _linkTargetAttr: '',
  _baseUrl: 'https://my-learning.w3schools.com',
  _apiBaseUrl: 'https://myl-api.w3schools.com',
  lessonInitialized: null,
  lessonFinished: null,
  lessonFinishedListeners: {},
  // key: listenerId, value: callback
  localStorageAmount: 5242880,
  // 5MB
  localStorageUsedAmount: 0,
  localStorageTrackingAmount: 3145728,
  // 3MB
  localStorageTrackingMaxCount: 1000,
  // pageIsHome: boolean,
  // topicId: string,
  // chapterId: string,
  // pageType: string,
  // lessonId: string,
  // lessonFullName: string,
  // lessonFinishedOnInit: boolean,
  // lessonMeta: any,
  // lessonStateFetched: boolean,
  ps: '',
  _uiTemplates: {},
  _uiSidenavPatchLayoutDebouncer: null
};
MyLearning._isDebugMode = function () {
  return Util.isDebugMode('MyLearning');
};
MyLearning._logDebug = function (message, data, logRawData) {
  return Util.logDebug('MyLearning', message, data, logRawData);
};
MyLearning._logWarning = function (message, data, logRawData) {
  return Util.logWarning('MyLearning', message, data, logRawData);
};
MyLearning._logError = function (message, data, logRawData) {
  return Util.logError('MyLearning', message, data, logRawData);
};
MyLearning.isIframed = function () {
  if (MyLearning._isIframed !== null) {
    return MyLearning._isIframed;
  }
  try {
    MyLearning._isIframed = window.self !== window.top;
  } catch (e) {
    MyLearning._isIframed = true;
  }
  return MyLearning._isIframed;
};
MyLearning._iframeInit = function () {
  MyLearning._logDebug('_iframeInit');
  window.open = function (url, target, features) {
    MyLearning._logDebug('window.open -> url, target, features: ', {
      url: url,
      target: target,
      features: features
    });

    // if url on same domain, open in parent window
    if (url.indexOf('https://www.w3schools.com') === 0) {
      window.location.href = url;
    } else {
      window.parent.postMessage({
        'action': 'OPEN_URL',
        'data': {
          'url': url,
          'target': target,
          'features': features
        }
      }, '*');
    }
  };
  window.addEventListener('message', function (message) {
    if (MyLearning._isDebugMode()) {
      console.log(message); // raw
    }
    MyLearning._logDebug('message: ', message);
    var whitelistedOrigins = ['https://profile.w3schools.com', 'https://pathfinder.w3schools.com', 'https://my-learning.w3schools.com', 'https://spaces.w3schools.com', 'https://billing.w3schools.com', 'https://campus.w3schools.com'
    // #dev ,'https://pathfinder-local.w3schools.com:3000'
    ];
    var iframeOriginIndex = whitelistedOrigins.indexOf(message.origin);
    if (iframeOriginIndex === -1) {
      // MyLearning._logWarning('Invalid iframe origin: ', message.origin);
      // MyLearning._isIframed = false;
      return;
    }
    MyLearning._iframeOriginIndex = iframeOriginIndex;
    var action = '';
    var data = null;
    if (typeof message.data.type !== 'undefined') {
      action = message.data.type;
      data = message.data.value;
    } else if (typeof message.data.action !== 'undefined') {
      action = message.data.action;
      data = message.data.data;
    }
    MyLearning._logDebug('message -> action, data: ', {
      action: action,
      data: data
    });
    if (action === 'INIT') {
      MyLearning._iframeInitHandle(data);
    } else if (action === 'FETCH_LOCATION') {
      MyLearning._iframeFetchLocationHandle(data);
    } else if (action === 'FETCH_NEXT_PREV_BTNS') {
      MyLearning._iframeFetchNextPrevBtns(data);
    } else if (action === 'UPDATE_NEXT_PREV_BTNS') {
      MyLearning._iframeUpdateNextPrevBtns(data);
    }
  });
};
MyLearning._iframeFetchNextPrevBtns = function (data) {
  MyLearning._logDebug('_iframeFetchNextPrevBtns -> data: ', data);
  var nextPrevWrapperElms = document.querySelectorAll('.nextprev');
  var nextPrevBtns = {
    "top": {
      "prev": {
        "href": "",
        "text": ""
      },
      "next": {
        "href": "",
        "text": ""
      }
    },
    "bottom": {
      "prev": {
        "href": "",
        "text": ""
      },
      "next": {
        "href": "",
        "text": ""
      }
    }
  };
  if (nextPrevWrapperElms.length) {
    var fetchPrevNextBtns = function fetchPrevNextBtns(btnGroup, links) {
      if (links.length > 0) {
        btnGroup.prev.href = links[0].getAttribute('href') || "";
        btnGroup.prev.text = links[0].innerText || "";
      }
      if (links.length > 1) {
        btnGroup.next.href = links[1].getAttribute('href') || "";
        btnGroup.next.text = links[1].innerText || "";
      }
    };
    var topNextPrevBtnElms = nextPrevWrapperElms[0].querySelectorAll('a');
    fetchPrevNextBtns(nextPrevBtns.top, topNextPrevBtnElms);
    if (nextPrevWrapperElms.length > 1) {
      var bottomNextPrevBtnElms = nextPrevWrapperElms[1].querySelectorAll('a');
      fetchPrevNextBtns(nextPrevBtns.bottom, bottomNextPrevBtnElms);
    }
  }
  window.parent.postMessage({
    'action': 'SHARING_NEXT_PREV_BTNS_DATA',
    'data': {
      'nextPrevBtns': nextPrevBtns
    }
  }, '*');
};
MyLearning._iframeUpdateNextPrevBtns = function (data) {
  MyLearning._logDebug('_iframeUpdateNextPrevBtns -> data: ', data);
  var nextPrevWrapperElms = document.querySelectorAll('.nextprev');
  if (nextPrevWrapperElms.length) {
    var isPrevNextUrlAllowed = function isPrevNextUrlAllowed(url) {
      var whitelistedOrigins = ['https://www.w3schools.com', 'https://pathfinder.w3schools.com', '/', '#'
      // #dev ,'https://pathfinder-local.w3schools.com:3000'
      ];
      for (var i = 0; i < whitelistedOrigins.length; i++) {
        if (url.indexOf(whitelistedOrigins[i]) === 0) {
          return true;
        }
      }
      return false;
    };
    var setPrevNextBtns = function setPrevNextBtns(btnGroup, links) {
      if (links.length > 0 && typeof btnGroup.prev !== 'undefined') {
        if (btnGroup.prev.href && isPrevNextUrlAllowed(btnGroup.prev.href)) {
          links[0].setAttribute('href', btnGroup.prev.href);
        }
        if (btnGroup.prev.text) {
          links[0].innerText = btnGroup.prev.text;
        }
        if (btnGroup.prev.addClass) {
          links[0].classList.add(btnGroup.prev.addClass);
        }
        if (btnGroup.prev.removeClass) {
          links[0].classList.remove(btnGroup.prev.removeClass);
        }
      }
      if (links.length > 1 && typeof btnGroup.next !== 'undefined') {
        if (btnGroup.next.href && isPrevNextUrlAllowed(btnGroup.next.href)) {
          links[1].setAttribute('href', btnGroup.next.href);
        }
        if (btnGroup.next.text) {
          links[1].innerText = btnGroup.next.text;
        }
        if (btnGroup.next.addClass) {
          links[1].classList.add(btnGroup.next.addClass);
        }
        if (btnGroup.next.removeClass) {
          links[1].classList.remove(btnGroup.next.removeClass);
        }
      }
    };
    var nextPrevBtns = {
      "top": {},
      "bottom": {}
    };
    var setByShortcut = false;
    if (typeof data.prev !== 'undefined') {
      nextPrevBtns.top.prev = data.prev;
      nextPrevBtns.bottom.prev = data.prev;
      setByShortcut = true;
    }
    if (typeof data.next !== 'undefined') {
      nextPrevBtns.top.next = data.next;
      nextPrevBtns.bottom.next = data.next;
      setByShortcut = true;
    }
    if (!setByShortcut) {
      nextPrevBtns = data;
    }
    if (typeof nextPrevBtns.top !== 'undefined') {
      var topNextPrevBtnElms = nextPrevWrapperElms[0].querySelectorAll('a');
      setPrevNextBtns(nextPrevBtns.top, topNextPrevBtnElms);
    }
    if (typeof nextPrevBtns.bottom !== 'undefined') {
      var bottomNextPrevBtnElms = nextPrevWrapperElms[1].querySelectorAll('a');
      setPrevNextBtns(nextPrevBtns.bottom, bottomNextPrevBtnElms);
    }
  }
};
MyLearning._iframeInitHandle = function (data) {
  MyLearning._logDebug('_iframeInitHandle -> data: ', {
    data: data
  });
  if (typeof data !== 'undefined') {
    if (typeof data.sendBackLocationAndLessonMeta !== 'undefined' && data.sendBackLocationAndLessonMeta === true) {
      MyLearning._iframeSendBackLocationAndLessonMeta = true;
      MyLearning._iframeParentPushLocation();
      if (MyLearning.lessonFinished) {
        MyLearning._iframeParentPushLessonMeta('COMPLETED_LESSON');
      } else if (MyLearning.lessonInitialized) {
        MyLearning._iframeParentPushLessonMeta('INITIALIZED_LESSON');
      }
    }
    if (typeof data.hideElements !== 'undefined' && data.hideElements.length) {
      MyLearning._logDebug('_iframeInitHandle -> hideElements -> selectors: ', data.hideElements);
      Util.loopArray(data.hideElements, function (selector) {
        var elms = document.querySelectorAll(selector);
        MyLearning._logDebug('_iframeInitHandle -> hideElements -> elms: ', elms);
        Util.loopArray(elms, function (elm) {
          elm.style.display = 'none';
        });
      });
    }
  }
};
MyLearning._iframeParentPushLocation = function () {
  MyLearning._logDebug('_iframeParentPushLocation');
  window.parent.postMessage({
    'action': 'SHARING_LOCATION',
    'data': {
      'location': {
        'href': window.location.href,
        'hostname': window.location.hostname,
        'pathname': window.location.pathname
      }
    }
  }, '*');
};
MyLearning._iframeParentPushLessonMeta = function (action) {
  MyLearning._logDebug('_iframeParentPushLessonMeta -> action: ', {
    action: action,
    debounce: MyLearning._iframeParentSentMessages[action]
  });
  if (typeof MyLearning._iframeParentSentMessages[action] !== 'undefined') {
    return;
  }
  MyLearning._iframeParentSentMessages[action] = true;
  var message = {
    'action': action,
    'data': {
      'lessonMeta': MyLearning.lessonMeta,
      'location': {
        'href': window.location.href,
        'hostname': window.location.hostname,
        'pathname': window.location.pathname
      }
    }
  };
  MyLearning._logDebug('_iframeParentPushLessonMeta -> message: ', message);
  window.parent.postMessage(message, '*');
};
MyLearning._iframeFetchLocationHandle = function (prs) {
  MyLearning._logDebug('_iframeFetchLocationHandle -> prs: ', prs);
  MyLearning._iframeParentPushLocation();
};
MyLearning._apiNameToPathMap = {
  'api.meta': '/api/classic/get-set-topic-progress',
  'api.exercise.get': '/api/classic/get-exercises-progress',
  'api.exercise.set': '/api/classic/set-exercises-progress',
  'api.v2.exercise.set': '/api/classic/v2/set-exercises-progress',
  'api.quiz.set_score': '/api/classic/set-quiz-progress',
  'api.bookmarks': '/api/classic/bookmarks'
};
MyLearning.getUrl = function (apiName) {
  this._logDebug('getUrl: ', apiName);
  return MyLearning._apiBaseUrl + this._apiNameToPathMap[apiName];
};
// << classic

// < common

MyLearning.uiFetchTemplate = function (fetchUrl, _callback) {
  if (typeof MyLearning._uiTemplates[fetchUrl] !== 'undefined') {
    return MyLearning._uiTemplates[fetchUrl];
  }
  Util.fetch({
    context: 'MyLearning',
    method: 'GET',
    url: fetchUrl,
    sendCookies: false,
    withUserSession: false,
    prepareResponseData: false,
    callback: function callback(fetchRes) {
      MyLearning._logDebug('uiFetchTemplate -> fetchUrl, fetchRes: ', {
        fetchUrl: fetchUrl,
        fetchRes: fetchRes
      });
      var output = {
        error: {
          code: '1',
          description: 'Failed performing "MyLearning.uiFetchTemplate"'
        },
        data: null
      };
      if (fetchRes.error.code === '0') {
        output.data = fetchRes.dataStr;
        output.error = {
          code: '0'
        };
      } else {
        output.error = fetchRes.error;
      }
      MyLearning._uiTemplates[fetchUrl] = output;
      if (typeof _callback !== 'undefined') {
        _callback(output);
      }
    }
  });
};
MyLearning.uiPrepareTemplateHtml = function (template, params) {
  var output = template;
  Object.keys(params).forEach(function (key) {
    var placeholder = '{{ ' + key + ' }}';
    output = output.replace(new RegExp(placeholder, 'g'), params[key]);
  });
  return output;
};
MyLearning.makePostRequest = function (url, data, callback) {
  Util.fetch({
    context: 'MyLearning -> makePostRequest',
    method: 'POST',
    url: url,
    data: data,
    callback: callback,
    withUserSession: true,
    handleUserSessionRedirection: true,
    // TODO: (mid) revisit this flag
    prepareResponseData: false,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};
MyLearning.getCircleMeta = function (xx, yy, r, aD) {
  var aR = (aD - 90) * Math.PI / 180.0;
  return {
    x: xx + r * Math.cos(aR),
    y: yy + r * Math.sin(aR)
  };
};
MyLearning.getProfileIconCirclesRendered = function (x, y, r, sa, ea) {
  var s = MyLearning.getCircleMeta(x, y, r, ea);
  var e = MyLearning.getCircleMeta(x, y, r, sa);
  var f = ea - sa <= 180 ? "0" : "1";
  return ["M", s.x, s.y, "A", r, r, 0, f, 0, e.x, e.y].join(" ");
};
MyLearning.loadUser = function (context, _callback2) {
  this._logDebug('loadUser -> args: ', [context]);
  UserSession.processUserSession({
    context: context + ' -> MyLearning -> loadUser',
    handleRedirection: true,
    callback: function callback(userSessionVerificationRes) {
      if (context === 'footer') {
        MyLearning._footerLoadUser();
      }
      if (!TopNavBar.configured) {
        TopNavBar.postInitConfig({
          env: 'classic',
          loggedIn: UserSession.loggedIn === true,
          subscriptionPlan: UserSession.getUserSubscriptionPlan(),
          location: window.location
        });
      }
      if (UserSession.loggedIn === true) {
        Util.attachScript({
          id: 'pathfinder-script',
          path: '/lib/pathfinder/main.js',
          entityName: 'Pathfinder',
          callback: function callback(res) {
            if (res.error.code === '0') {
              Pathfinder.init();
            } else {
              console.error('Failed loading pathfinder util -> error: ', res.error);
            }
          }
        });
      }
      if (typeof _callback2 !== 'undefined') {
        _callback2(userSessionVerificationRes);
      }
    }
  });
};
MyLearning.getStrWithPrefixRemoved = function (str, subStr) {
  var extractedChunk = str.slice(0, subStr.length);
  if (extractedChunk === subStr) {
    return str.slice(subStr.length);
  }
  return str;
};
// > common

MyLearning._showToastNotification = function (prs) {
  if (typeof window.ToastNotification !== 'undefined') {
    return ToastNotification.show(prs);
  }
  Util.attachScript({
    id: 'toast-notification-script',
    path: '/lib/toast-notification/main.js?v=1.0.6',
    entityName: 'ToastNotification',
    callback: function callback(res) {
      MyLearning._logDebug('ToastNotification loaded -> res: ', res);
      if (res.error.code === '0') {
        // ToastNotification.init();
        ToastNotification.show(prs);
      } else {
        console.error('Failed loading toast notification module -> error: ', res.error);
      }
    }
  });

  // Util.objFieldOnSetCallback({
  //   scopeRef: window,
  //   fieldName: 'ToastNotification',
  //   callback: function (res) {
  //     if (res.error.code === '0') {
  //       ToastNotification.show(prs);
  //     }
  //   }
  // });
};
MyLearning.toggleBookmark = function (topicId, itemId, itemType) {
  MyLearning._logDebug('toggleBookmark -> args: ', [topicId, itemId, itemType]);
  var newBookmarkedState = !MyLearning.bookmarked;
  Util.fetch({
    context: 'MyLearning -> toggleBookmark',
    method: MyLearning.bookmarked ? 'DELETE' : 'PUT',
    url: MyLearning.getUrl('api.bookmarks') + '/' + topicId + '/' + itemId + '?type=' + itemType,
    callback: function callback(res) {
      MyLearning._logDebug('toggleBookmark -> res: ', res);
      if (res.error.code === '0') {
        MyLearning.bookmarked = newBookmarkedState;
        MyLearning._logDebug('toggleBookmark -> MyLearning.bookmarked: ', newBookmarkedState);
      }
    }
  });
  if (newBookmarkedState) {
    MyLearning._showToastNotification({
      title: 'Saved to bookmarks',
      subtitle: 'You can view your saved lessons anytime.',
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></svg>',
      showCloseBtn: false,
      theme: 'success',
      onClick: function onClick() {
        window.location.href = MyLearning._dashboardBaseUrl + '/bookmarks';
        return false;
      },
      duration: 4000
    });
  } else {
    MyLearning._showToastNotification({
      title: 'Removed from bookmarks',
      subtitle: 'This lesson has been removed from your saved items.',
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path></svg>',
      showCloseBtn: false,
      theme: 'warning',
      onClick: function onClick() {
        window.location.href = MyLearning._dashboardBaseUrl + '/bookmarks';
        return false;
      },
      duration: 4000
    });
  }
  // MyLearning._showToastNotification({
  //   title: newBookmarkedState ? 'Saved to bookmarks' : 'Removed from bookmarks',
  //   subtitle: newBookmarkedState ? 'You can view your saved lessons anytime.' : 'This lesson has been removed from your saved items.',
  //   icon: '<svg witdth="16" height="16" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></svg>',
  //   withCloseBtn: false,
  //   duration: 8000,
  // });
};
MyLearning._currentPageIsNeitherLessonOrRef = function () {
  var urlPath = window.location.pathname,
    urlPathWlo = MyLearning.getStrWithPrefixRemoved(urlPath, '/'); // wlo - without leading slash

  var intermediatePage = ['bootstrap/bootstrap_ver.asp'];
  for (var i = 0; i < intermediatePage.length; i++) {
    if (urlPathWlo === intermediatePage[i]) {
      return true;
    }
  }
  return false;
};
MyLearning.renderBookmarkBtn = function (topicId, itemId, itemType) {
  MyLearning._logDebug('renderBookmarkBtn -> args: ', [topicId, itemId, itemType]);
  if (MyLearning._currentPageIsNeitherLessonOrRef()) {
    MyLearning._logDebug('renderBookmarkBtn -> neither lesson nor ref page');
    return;
  }

  // Use the global state as the initial state.
  // Ensure MyLearning.bookmarked is defined (true or false)
  var bookmarked = MyLearning.bookmarked;
  if (typeof bookmarked === 'undefined' || bookmarked === null) {
    bookmarked = false;
  }

  // Get the main container and its first h1 element
  var mainContainer = document.getElementById('main');
  if (!mainContainer) {
    MyLearning._logError('renderBookmarkBtn: #main container not found');
    return;
  }
  var h1Elements = mainContainer.getElementsByTagName('h1');
  if (!h1Elements.length) {
    MyLearning._logError('renderBookmarkBtn: No h1 element found inside #main');
    return;
  }
  var h1Element = h1Elements[0];
  h1Element.classList.add('with-bookmark');

  // Function to update the UI based on the current bookmark state.
  var updateIconState = function updateIconState(onToggle) {
    var bookmarkedState = onToggle ? !MyLearning.bookmarked : MyLearning.bookmarked;
    MyLearning._logDebug('updateIconState -> prs: ', {
      'MyLearning.bookmarked': MyLearning.bookmarked,
      'bookmarkedState': bookmarkedState,
      'onToggle': onToggle
    });
    var bookmarkBtn = document.getElementById('bookmark-btn');
    if (!bookmarkBtn) return;

    // Assume the first child is the "on" icon and the second is the "off" icon.
    var iconOn = bookmarkBtn.childNodes[0];
    var iconOff = bookmarkBtn.childNodes[1];
    if (iconOn && iconOff) {
      // Update the classes based on the new state stored in newBookmarkedState
      iconOn.className = '-svg-icon -on' + (bookmarkedState ? ' -active' : '');
      iconOff.className = '-svg-icon -off' + (bookmarkedState ? '' : ' -active');
      bookmarkBtn.title = bookmarkedState ? 'Click to remove bookmark' : 'Click to add bookmark';
    }
  };

  // If the bookmark button already exists, just update its state.
  var bookmarkBtn = document.getElementById('bookmark-btn');
  if (bookmarkBtn) {
    updateIconState(false);
  } else {
    // Create the bookmark button container
    bookmarkBtn = document.createElement('div');
    bookmarkBtn.id = 'bookmark-btn';
    bookmarkBtn.className = 'bookmark-btn';
    bookmarkBtn.title = 'Click to add bookmark';

    // Create the "on" icon element
    var iconOn = document.createElement('div');
    iconOn.className = '-svg-icon -on' + (bookmarked ? ' -active' : '');
    iconOn.style.cssText = '-webkit-mask: url(/lib/my-learning/icon/main/bookmark-on.svg) no-repeat center;' + 'mask: url(/lib/my-learning/icon/main/bookmark-on.svg) no-repeat center;' + '-webkit-mask-size: auto 100%; mask-size: auto 100%;';

    // Create the "off" icon element
    var iconOff = document.createElement('div');
    iconOff.className = '-svg-icon -off' + (bookmarked ? '' : ' -active');
    iconOff.style.cssText = '-webkit-mask: url(/lib/my-learning/icon/main/bookmark-off.svg) no-repeat center;' + 'mask: url(/lib/my-learning/icon/main/bookmark-off.svg) no-repeat center;' + '-webkit-mask-size: auto 100%; mask-size: auto 100%;';

    // Append the icon elements to the bookmark button container
    bookmarkBtn.appendChild(iconOn);
    bookmarkBtn.appendChild(iconOff);

    // Attach the click event handler in an IE9-friendly way
    var clickHandler = function clickHandler() {
      if (UserSession.loggedIn) {
        // Call the backend toggle function (it might be asynchronous)
        MyLearning.toggleBookmark(topicId, itemId, itemType);

        // Update the UI with the new state
        updateIconState(true);
      } else {
        setTimeout(function () {
          TopNavBar.showBookmarkLoginModal();
        }, 0);
      }
    };
    if (bookmarkBtn.addEventListener) {
      bookmarkBtn.addEventListener('click', clickHandler, false);
    } else if (bookmarkBtn.attachEvent) {
      bookmarkBtn.attachEvent('onclick', clickHandler);
    } else {
      bookmarkBtn.onclick = clickHandler;
    }

    // Inject the bookmark button as the first child of the first h1 element inside #main
    if (h1Element.firstChild) {
      h1Element.insertBefore(bookmarkBtn, h1Element.firstChild);
    } else {
      h1Element.appendChild(bookmarkBtn);
    }
  }
};
MyLearning.lookupBookmarkState = function (topicId, itemId, itemType) {
  MyLearning._logDebug('lookupBookmarkState -> args: ', [topicId, itemId, itemType]);
  if (!topicId || !itemId) {
    return;
  }
  if (typeof MyLearning.bookmarked !== 'undefined') {
    MyLearning.renderBookmarkBtn(topicId, itemId, itemType);
    return;
  }
  Util.objFieldOnSetCallback({
    scopeRef: TopNavBar,
    fieldName: 'mylUserLiteState',
    callback: function callback(res) {
      MyLearning._logDebug('TopNavBar.mylUserLiteState -> res: ', res);
      if (res.error.code === '0') {
        // check if lesson is bookmarked
        var topicBookmarks = res.data.bookmarks; // array

        var bookmarked = false;
        var lookupPageBookmarks = itemType === 'page';
        if (typeof topicBookmarks !== 'undefined') {
          for (var i = 0; i < topicBookmarks.length; i++) {
            if (topicBookmarks[i].topicId === topicId && typeof topicBookmarks[i].bookmarks !== 'undefined') {
              var topicBookmarks = lookupPageBookmarks ? topicBookmarks[i].pageBookmarks : topicBookmarks[i].bookmarks; // map

              if (typeof topicBookmarks !== 'undefined' && typeof topicBookmarks[itemId] !== 'undefined') {
                bookmarked = true;
                break;
              }
            }
          }
        }
        MyLearning.bookmarked = bookmarked;
        MyLearning.renderBookmarkBtn(topicId, itemId, itemType);
      } else {
        MyLearning._logError('TopNavBar.mylUserLiteState -> res: ', res);
      }
    }
  });
};
MyLearning._getQuizPageMeta = function () {
  if (typeof MyLearning._currentPageQuizMetaCache !== 'undefined') {
    return MyLearning._currentPageQuizMetaCache;
  }
  var urlPath = window.location.pathname,
    urlPathWlo = MyLearning.getStrWithPrefixRemoved(urlPath, '/'),
    // wlo - without leading slash
    isQuizPage = false,
    pathMetaStr = null,
    pathMeta = null;
  if (urlPathWlo.indexOf('quiztest/quiztest') === 0) {
    isQuizPage = true;
    pathMetaStr = sessionStorage.getItem(urlPath);
    if (pathMetaStr !== null) {
      try {
        pathMeta = JSON.parse(pathMetaStr);
        if (typeof pathMeta.isQuizPage !== 'undefined') {
          isQuizPage = pathMeta.isQuizPage;
        }
      } catch (exc) {
        MyLearning._logError('_getQuizPageMeta -> Failed parsing pathMetaStr -> error: ', exc);
      }
    }
  }
  MyLearning._currentPageQuizMetaCache = {
    isQuizPage: isQuizPage,
    pathMetaStr: pathMetaStr,
    pathMeta: pathMeta
  };
  return MyLearning._currentPageQuizMetaCache;
};
MyLearning._currentPageLessonMeta = function () {
  if (typeof MyLearning._currentPageLessonMetaCache !== 'undefined') {
    return MyLearning._currentPageLessonMetaCache;
  }
  var quizPageMeta = MyLearning._getQuizPageMeta();
  if (quizPageMeta.isQuizPage) {
    MyLearning._currentPageLessonMetaCache = null;
    return MyLearning._currentPageLessonMetaCache;
  }
  var urlPath = window.location.pathname,
    urlPathWlo = MyLearning.getStrWithPrefixRemoved(urlPath, '/'); // wlo - without leading slash

  MyLearning._logDebug('_currentPageLessonMeta -> urlPath, urlPathWlo: ', {
    urlPath: urlPath,
    urlPathWlo: urlPathWlo
  });
  if (MyLearning._currentPageIsNeitherLessonOrRef()) {
    MyLearning._currentPageLessonMetaCache = null;
    return MyLearning._currentPageLessonMetaCache;
  }

  // prefixes for lesson and ref page paths
  var lessonPathPrefixes = ["accessibility", "angular", "asp", "aws", "aws/ml", "aws/serverless", "bash", "bootstrap", "bootstrap4", "bootstrap5", "c", "cpp", "cs", "css", "cybersecurity", "datascience", "django", "dsa", "excel", "git", "go", "html", "java", "jquery", "js", "kotlin", "mongodb", "mysql", "nodejs", "php", "postgresql", "programming", "python", "python/numpy", "python/pandas", "python/scipy", "quiztest", "r", "react", "rust", "sass", "sql", "statistics", "typescript", "vue", "w3css", "xml", "appml", "charsets", "colors", "cssref", "graphics", "icons", "jsref", "tags", "w3js"];
  for (var i = 0; i < lessonPathPrefixes.length; i++) {
    if (urlPathWlo.indexOf(lessonPathPrefixes[i] + '/') === 0) {
      MyLearning._currentPageLessonMetaCache = {
        isLessonPage: true
      };
      return MyLearning._currentPageLessonMetaCache;
    }
  }
  MyLearning._currentPageLessonMetaCache = null;
  return MyLearning._currentPageLessonMetaCache;
};
MyLearning._renderBookmarkBtnForAnonymousUser = function () {
  MyLearning._logDebug('_renderBookmarkBtnForAnonymousUser -> init');
  MyLearning.renderBookmarkBtn('', '', '');
};

// < footer
MyLearning._footerLoadUser = function () {
  // on lessons this is the first request, on quiz the only one
  this._logDebug('_footerLoadUser');
  if (!UserSession.loggedIn) {
    var currentPageLessonMeta = MyLearning._currentPageLessonMeta();
    if (currentPageLessonMeta !== null && currentPageLessonMeta.isLessonPage) {
      MyLearning._renderBookmarkBtnForAnonymousUser();
    }
    MyLearning.lessonStateFetched = false;
    return;
  }
  var quizPageMeta = MyLearning._getQuizPageMeta();
  if (quizPageMeta.isQuizPage) {
    if (quizPageMeta.pathMeta !== null) {
      MyLearning.renderUserProgress(quizPageMeta.pathMeta.reqRes.type, quizPageMeta.pathMeta.reqRes.raw);
    } else {
      MyLearning.renderUserProgress('T', 'T{"a":0,"b":0}'); // T - unused state, stands for "Temporary/Transitory"
    }
    MyLearning.lessonStateFetched = false;
    return;
  }

  // show the user active session first and update the progress when we have it on hands
  MyLearning.renderUserProgress('T', 'T{"a":0,"b":0}'); // T - unused state, stands for "Temporary/Transitory"

  var x,
    y,
    pos,
    foldername,
    filename,
    typ,
    cc,
    pathname = window.location.pathname;
  if (pathname.substr(0, 1) == "/") {
    pathname = pathname.substr(1);
  }
  pos = pathname.indexOf("/");
  foldername = pathname.substr(0, pos);
  if (pathname.indexOf("pandas") > -1) {
    foldername = "python/pandas";
  }
  if (pathname.indexOf("numpy") > -1) {
    foldername = "python/numpy";
  }
  if (pathname.indexOf("scipy") > -1) {
    foldername = "python/scipy";
  }
  filename = pathname.substr(pos + 1);
  typ = foldername;
  var v = '1';
  if (foldername == "quiztest") {
    cc = window.location.href;
    pos = cc.indexOf("qtest=");
    typ = cc.substr(pos + 6);
  } else {
    v = '2';
  }
  var reqDataStr = "v=" + v + "&a=" + foldername + "&b=" + filename + "&c=" + typ + "&d=0&p=" + encodeURIComponent(window.location.pathname);

  // initial request to get the user progress
  MyLearning.makePostRequest(MyLearning.getUrl('api.meta'), reqDataStr, function (reqRes) {
    if (reqRes.error.code === '0' && reqRes.status === 200) {
      var y = reqRes.dataStr;
      var x = y.substr(0, 1);
      MyLearning._logDebug('_footerLoadUser -> req_res -> x: ', x);
      if (x == "F" || x == "G" || x == "H" || x == "I" || x == "J" || x == "K" || x == "L" || x == "M" || x == "Q") {
        var reqResDataParseRes = Util.parseJson(y.substr(1));
        if (reqResDataParseRes.error.code === '0') {
          var reqResData = reqResDataParseRes.data;
          MyLearning._logDebug('_footerLoadUser -> reqResData: ', reqResData);
          if (typeof reqResData.topicId !== 'undefined') {
            MyLearning.topicId = reqResData.topicId;
          }
          if (typeof reqResData.chapterId !== 'undefined') {
            MyLearning.chapterId = reqResData.chapterId;
          }
          if (typeof reqResData.isHome !== 'undefined') {
            MyLearning.pageIsHome = reqResData.isHome;
            var currentPath = Util.removeStrPrefix(window.location.pathname, '/');
            MyLearning._uiSidenavFlagCompletedLinks([currentPath]);
          }
          if (typeof reqResData.type !== 'undefined') {
            MyLearning.pageType = reqResData.type;
          }
          if (typeof reqResData.pageId !== 'undefined') {
            MyLearning.pageId = reqResData.pageId;
            if (reqResData.pageId) {
              MyLearning.renderBookmarkBtn(MyLearning.topicId, MyLearning.pageId, 'page');
            }
          } else if (typeof reqResData.lessonId !== 'undefined') {
            MyLearning.lessonId = reqResData.lessonId;
            if (reqResData.lessonId) {
              MyLearning.renderBookmarkBtn(MyLearning.topicId, MyLearning.lessonId, 'lesson');
            }
          }
          if (typeof reqResData.pageFullName !== 'undefined') {
            MyLearning.pageFullName = reqResData.pageFullName;
          } else if (typeof reqResData.lessonFullName !== 'undefined') {
            MyLearning.lessonFullName = reqResData.lessonFullName;
          }
          if (typeof reqResData.ps !== 'undefined') {
            MyLearning.ps = reqResData.ps;
          }
          MyLearning.lessonFinishedOnInit = x === 'I';
          MyLearning.lessonMeta = reqResData;
          MyLearning.lessonMeta.completedOnInit = MyLearning.lessonFinishedOnInit;
          MyLearning.lessonInitialized = true;
          var isIframed = MyLearning.isIframed();
          MyLearning._logDebug('Lesson initialized', {
            'MyLearning.isIframed()': isIframed,
            'MyLearning._iframeSendBackLocationAndLessonMeta': MyLearning._iframeSendBackLocationAndLessonMeta,
            'MyLearning.lessonMeta': MyLearning.lessonMeta
          });
          if (isIframed) {
            if (MyLearning._iframeSendBackLocationAndLessonMeta) {
              MyLearning._iframeParentPushLessonMeta('INITIALIZED_LESSON');
            }
          } else {
            if (typeof reqResData.pageId !== 'undefined') {
              MyLearning.lookupBookmarkState(reqResData.topicId, reqResData.pageId, 'page');
            } else {
              MyLearning.lookupBookmarkState(reqResData.topicId, reqResData.lessonId, 'lesson');
            }
          }
        }
        MyLearning.user_progress_collected = true;
        MyLearning.renderUserProgress(x, y); // this one sets the scroll event

        if (quizPageMeta.isQuizPage) {
          sessionStorage.setItem(window.location.pathname, JSON.stringify({
            'isQuizPage': true,
            'reqRes': {
              'type': x,
              'raw': y
            }
          }));
        }
      }
      MyLearning.lessonStateFetched = true;
    }
  });
};
MyLearning._checkIfGotToTheBottomOfThePageDebouncer = null;
MyLearning._checkIfGotToTheBottomOfThePage = function () {
  clearTimeout(MyLearning._checkIfGotToTheBottomOfThePageDebouncer);
  MyLearning._checkIfGotToTheBottomOfThePageDebouncer = setTimeout(function () {
    var userProfileBottomWrapperElm = document.querySelector('.user-profile-bottom-wrapper');
    var reachedUserProfileBottomWrapperElm = Util.elementIsInViewport(userProfileBottomWrapperElm) || Util.elementIsAboveViewport(userProfileBottomWrapperElm);
    if (reachedUserProfileBottomWrapperElm) {
      MyLearning._logDebug('_checkIfGotToTheBottomOfThePage: ', true);
      window.removeEventListener('scroll', MyLearning._checkIfGotToTheBottomOfThePage);
      if (UserSession.loggedIn) {
        MyLearning._handleFinishedPageAuthenticated();
      } else {
        MyLearning._handleFinishedPageAnonymous();
      }
    }
  }, 100);
};
MyLearning._findInnerElements = function (parentElement, queryStr, callback) {
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
MyLearning._loopArray = function (arr, callback) {
  for (var index = 0; index < arr.length; index++) {
    callback(arr[index], index);
  }
};
MyLearning.renderUserProgress = function (cc, obj) {
  this._logDebug('renderUserProgress -> args: ', [cc, obj]);
  var x,
    degrees = 0,
    // color1,
    // color2,
    jsonobj;
  if (document.getElementById("top-nav-bar")) {
    if (cc == "I" || cc == "J" || cc == "H" || cc == "G" || cc == "O" || cc == "Q") {
      jsonobj = JSON.parse(obj.substr(1));
      this.pages_read_count = jsonobj.b;
      this.total_pages_count = jsonobj.a;
      x = Math.round(this.pages_read_count / this.total_pages_count * 100);
      degrees = x * 3.6;
      if (degrees > 359) degrees = 359.99;
    }

    // if (cc == "Q") {
    //   color1 = "rgba(44, 156, 202, 0.1)";
    //   color2 = "rgba(44, 156, 202, 1)";
    // } else {
    //   color1 = "rgba(4, 170, 109, 0.1)";
    //   color2 = "rgba(4, 170, 109, 1)";
    // }

    if (cc == "I" || cc == "J" || cc == "H" || cc == "G") {
      window.addEventListener('scroll', MyLearning._checkIfGotToTheBottomOfThePage);
      MyLearning._checkIfGotToTheBottomOfThePage();
    }

    // MyLearning._findInnerElements(document, '.user-progress-circle1', function (userProgressCircle1Elm) {
    //   if (cc == "Q") {
    //     userProgressCircle1Elm.setAttribute("stroke", "rgba(44, 156, 202, 0.1)");
    //   } else {
    //     userProgressCircle1Elm.setAttribute("stroke", "rgba(4, 170, 109, 0.1)");
    //   }

    //   // if (cc != "L" && cc != "F") {
    //   //   userProgressCircle1Elm.setAttribute("d", MyLearning.getProfileIconCirclesRendered(26, 35, 20, 0, 359.99));
    //   // }
    // });

    MyLearning._findInnerElements(document, '.user-progress-circle2', function (userProgressCircle2Elm) {
      // if (cc == "Q") {
      //   userProgressCircle2Elm.setAttribute("stroke", "rgba(44, 156, 202, 1)");
      // } else {
      //   userProgressCircle2Elm.setAttribute("stroke", "rgba(4, 170, 109, 1)");
      // }

      if (cc != "L" && cc != "F") {
        userProgressCircle2Elm.setAttribute("d", MyLearning.getProfileIconCirclesRendered(26, 35, 20, 0, degrees));
      }
    });
    if (cc == "Q") {
      if (degrees == 359.99) {
        MyLearning._findInnerElements(document, '.user-progress-star', function (userProgressStarElm) {
          userProgressStarElm.classList.add("up-active");
        });
      }
    }
  }

  // ga('send', 'event', 'user', 'login');
};
MyLearning._handleFinishedPageAuthenticated = function () {
  this._logDebug('_handleFinishedPageAuthenticated');
  if (!UserSession.loggedIn || !this.user_progress_collected) {
    this._logDebug('_handleFinishedPageAuthenticated -> jumping out');
    return;
  }
  var x,
    y,
    pos,
    foldername,
    filename,
    typ,
    pathname = window.location.pathname;
  if (pathname.substr(0, 1) == "/") {
    pathname = pathname.substr(1);
  }
  pos = pathname.indexOf("/");
  foldername = pathname.substr(0, pos);
  if (pathname.indexOf("pandas") > -1) {
    foldername = "python/pandas";
  }
  if (pathname.indexOf("numpy") > -1) {
    foldername = "python/numpy";
  }
  if (pathname.indexOf("scipy") > -1) {
    foldername = "python/scipy";
  }
  filename = pathname.substr(pos + 1);
  typ = foldername;
  var reqDataStr = "a=" + foldername + "&b=" + filename + "&c=" + typ + "&d=1&p=" + encodeURIComponent(window.location.pathname) + "&ps=" + MyLearning.ps;

  // subsequent request to update the user progress
  MyLearning.makePostRequest(MyLearning.getUrl('api.meta'), reqDataStr, function (reqRes) {
    if (reqRes.error.code === '0' && reqRes.status === 200) {
      var y = reqRes.dataStr;
      var x = y.substr(0, 1);
      if (x == "O") {
        if (MyLearning.pageType === 'lesson') {
          MyLearning.registerPointForFinishedLesson(x);
        }
        var currentPath = Util.removeStrPrefix(window.location.pathname, '/');
        MyLearning._uiSidenavFlagCompletedLinks([currentPath]);
      }
    }
  });
};
MyLearning.registerPointForFinishedLesson = function () {
  MyLearning._logDebug('registerPointForFinishedLesson');
  if (document.getElementById("top-nav-bar")) {
    if (typeof MyLearning.lessonFinishedOnInit === 'undefined' || MyLearning.lessonFinishedOnInit === false) {
      this.pages_read_count++;
      MyLearning.renderProgress(this.pages_read_count / this.total_pages_count * 100, true);
      if (typeof TopNavBar !== 'undefined' && typeof TopNavBar.cachedUserData !== 'undefined' && typeof TopNavBar.cachedUserData.currentProgress !== 'undefined') {
        // MyLearning._logDebug('registerPointForFinishedLesson -> updating top nav bar', {
        //   'TopNavBar': TopNavBar,
        // });

        TopNavBar.cachedUserData.currentProgress.progress = Math.min(Math.round(MyLearning.pages_read_count / MyLearning.total_pages_count * 100), 100);
        if (TopNavBar.dropdownVisible) {
          TopNavBar.showProfileDropdown(true); // re-render
        }
      }
    }
    MyLearning.lessonFinished = true;
    if (MyLearning.isIframed() && MyLearning._iframeSendBackLocationAndLessonMeta) {
      MyLearning._iframeParentPushLessonMeta('COMPLETED_LESSON');
    }
    MyLearning.notifyListenersOnFinishedLesson();
  }
};
MyLearning.notifyListenersOnFinishedLesson = function () {
  MyLearning._logDebug('notifyListenersOnFinishedLesson');
  for (var listenerId in MyLearning.lessonFinishedListeners) {
    MyLearning.lessonFinishedListeners[listenerId]();
  }
};
MyLearning.renderProgress = function (percentPoints, isSinglePoint) {
  MyLearning._logDebug('renderProgress -> percentPoints: ', percentPoints);
  if (typeof isSinglePoint === 'undefined') {
    isSinglePoint = false;
  }
  var degrees = 0,
    completed = false;
  degrees = Math.round(percentPoints) * 3.6;
  if (degrees > 359) {
    degrees = 359.99;
    completed = true;
  }
  ;
  MyLearning._findInnerElements(document, '.user-progress-circle2', function (userProgressCircle2Elm) {
    userProgressCircle2Elm.setAttribute('d', MyLearning.getProfileIconCirclesRendered(26, 35, 20, 0, degrees));
  });
  if (completed) {
    MyLearning._findInnerElements(document, '.user-progress-star', function (userProgressStarElm) {
      userProgressStarElm.classList.add('up-active');
    });
  } else {
    if (isSinglePoint) {
      MyLearning._findInnerElements(document, '.user-progress-point', function (userProgressPointElm) {
        userProgressPointElm.classList.add('up-active');
      });
    }
  }
};
MyLearning.removeFooterProfileBtn = function () {
  document.getElementById('user-profile-bottom-wrapper').remove();
};
MyLearning.showQuizScoreProfileBtn = function () {
  document.getElementById('user-profile-quiz-score-wrapper').classList.remove('w3-hide');
};
// > footer
// >> classic

MyLearning._uiSidenavPatchLayout = function (event) {
  MyLearning._logDebug('_uiSidenavPatchLayout -> event: ', {
    event: event
  });
  clearTimeout(MyLearning._uiSidenavPatchLayoutDebouncer);
  var timeoutDelay = event === true ? 0 : 500;
  MyLearning._uiSidenavPatchLayoutDebouncer = setTimeout(function () {
    var sidenavElm = document.getElementById('leftmenuinnerinner');
    if (sidenavElm) {
      var linkElms = Util.findInnerElements(sidenavElm, 'a');
      var minHeight = 0;
      for (var i = 0; i < linkElms.length; i++) {
        var linkElm = linkElms[i];
        if (i === 0) {
          // assuming the first link will always be a one liner
          minHeight = linkElm.offsetHeight;
          continue;
        }
        var presentHeightClass = linkElm.getAttribute('data-height-class');
        if (linkElm.offsetHeight === minHeight) {
          if (presentHeightClass) {
            linkElm.classList.remove(presentHeightClass);
            linkElm.removeAttribute('data-height-class');
          }
          continue;
        }
        var relativeHeightRatio = Math.ceil(linkElm.offsetHeight / minHeight);

        // MyLearning._logDebug('_uiSidenavPatchLayout -> linkElm: ', {
        //   linkElm: linkElm,
        //   offsetHeight: linkElm.offsetHeight,
        //   minHeight: minHeight,
        //   relativeHeightRatio: relativeHeightRatio
        // });

        var heightClass = '-height-' + relativeHeightRatio;
        if (presentHeightClass) {
          if (presentHeightClass === heightClass) {
            continue;
          } else {
            linkElm.classList.remove(presentHeightClass);
          }
        }
        linkElm.classList.add(heightClass);
        linkElm.setAttribute('data-height-class', heightClass);
      }
    }
  }, timeoutDelay);
};
MyLearning._uiSidenavPatchClasses = function () {
  MyLearning._logDebug('_uiSidenavPatchClasses');
  var sidenavElm = document.getElementById('leftmenuinnerinner');
  MyLearning._logDebug('_uiSidenavPatchClasses -> sidenavElm: ', {
    sidenavElm: sidenavElm
  });
  if (sidenavElm) {
    var tutChapterElms = Util.findInnerElements(sidenavElm, '.tut_overview');
    for (var i = 0; i < tutChapterElms.length; i++) {
      var tutChapterElm = tutChapterElms[i];
      tutChapterElm.classList.add('overview_body');
      var tutChapterLinkElm = Util.findPreviousElementSibling(tutChapterElm);
      if (tutChapterLinkElm && tutChapterLinkElm.tagName === 'A') {
        tutChapterLinkElm.classList.add('overview_header');
      }
    }
    var refChapterElms = Util.findInnerElements(sidenavElm, '.ref_overview');
    for (var i = 0; i < refChapterElms.length; i++) {
      var refChapterElm = refChapterElms[i];
      refChapterElm.classList.add('overview_body');
      var refChapterLinkElm = Util.findPreviousElementSibling(refChapterElm);
      if (refChapterLinkElm && refChapterLinkElm.tagName === 'A') {
        refChapterLinkElm.classList.add('overview_header');
      }
    }

    // patch dropdown links
    var prevElm = null;
    for (var i = 0; i < sidenavElm.children.length; i++) {
      var childElm = sidenavElm.children[i];
      if (childElm.tagName === 'DIV' && childElm.classList.contains('overview_body') && prevElm !== null && prevElm.tagName === 'A') {
        var linkInnerIconElm = document.createElement('span');
        linkInnerIconElm.classList.add('w3s-accordion');
        prevElm.append(linkInnerIconElm);
      }
      prevElm = childElm;
    }
  }
};
MyLearning.uiSidenavPatch = function () {
  MyLearning._logDebug('uiSidenavPatch');
  MyLearning._uiSidenavPatchClasses();
  MyLearning._uiSidenavPatchLayout();
  window.addEventListener('resize', MyLearning._uiSidenavPatchLayout);
};
MyLearning._uiSidenavEnableCheckmarks = function () {
  MyLearning._logDebug('_uiSidenavEnableCheckmarks');
  var sidenavElm = document.getElementById('leftmenuinnerinner');
  if (sidenavElm) {
    sidenavElm.classList.add('checkmarks-enabled');
  }
};
MyLearning._uiSidenavFlagCompletedLinks = function (completed) {
  MyLearning._logDebug('_uiSidenavFlagCompletedLinks -> completed: ', completed);
  var sidenavElm = document.getElementById('leftmenuinnerinner');
  if (sidenavElm) {
    var completedMap = {};
    var currentHost = window.location.protocol + '//' + window.location.host;
    if (typeof completed !== 'undefined') {
      for (var i = 0; i < completed.length; i++) {
        completedMap[currentHost + '/' + completed[i]] = true;
      }
    }
    var linkElms = sidenavElm.getElementsByTagName('a');
    for (var i = 0; i < linkElms.length; i++) {
      var linkElm = linkElms[i];
      if (linkElm.classList.contains('overview_header')) {
        continue;
      }
      var linkHref = linkElm.href;

      // remove query string
      if (linkHref.indexOf('?') !== 0) {
        linkHref = linkHref.split('?')[0];
      }
      if (typeof completedMap[linkHref] !== 'undefined') {
        linkElm.classList.add('done');
      }
    }
    var linkChapterElms = Util.findInnerElements(sidenavElm, 'a.overview_header');
    if (linkChapterElms.length) {
      for (var i = 0; i < linkChapterElms.length; i++) {
        var linkChapterElm = linkChapterElms[i];

        // MyLearning._logDebug('_uiSidenavFlagCompletedLinks -> linkChapterElm: ', {
        //   linkChapterElm: linkChapterElm
        // });

        var chapterWrapperElm = Util.findNextElementSibling(linkChapterElm);

        // MyLearning._logDebug('_uiSidenavFlagCompletedLinks -> chapterWrapperElm: ', {
        //   chapterWrapperElm: chapterWrapperElm,
        // });

        if (chapterWrapperElm && chapterWrapperElm.classList.contains('overview_body')) {
          var chapterLinkElms = Util.findInnerElements(chapterWrapperElm, 'a');
          var chapterCompleted = true;
          for (var j = 0; j < chapterLinkElms.length; j++) {
            var chapterLinkElm = chapterLinkElms[j];
            if (!chapterLinkElm.classList.contains('done')) {
              chapterCompleted = false;
              break;
            }
          }
          if (chapterCompleted) {
            linkChapterElm.classList.add('done');
          }
        }
      }
    }
  }
};
MyLearning._pushAnonymouslyTrackedProgress = function (progressTrackingMeta, _callback3) {
  var output = {
    error: {
      code: '1',
      description: 'Failed performing "MyLearning._pushAnonymouslyTrackedProgress"'
    },
    data: null
  };
  Util.fetch({
    context: 'Pathfinder',
    method: 'POST',
    url: MyLearning._apiBaseUrl + '/api/classic/bulk-upsert-progress',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      currentUts: Util.getCurrentUts(),
      createdUts: progressTrackingMeta.createdUts,
      updatedUts: progressTrackingMeta.updatedUts,
      size: progressTrackingMeta.size,
      list: progressTrackingMeta.list,
      sig: progressTrackingMeta.sig,
      currentTopicId: MyLearning.topicId
    }),
    sendCookies: false,
    withUserSession: true,
    prepareResponseData: true,
    callback: function callback(fetchRes) {
      MyLearning._logDebug('_pushAnonymouslyTrackedProgress -> fetchRes: ', fetchRes);
      if (fetchRes.error.code === '0') {
        output.data = fetchRes.data;
      } else {
        output.error = fetchRes.error;
      }
      if (output.error.code === '1') {
        output.error = {
          code: '0'
        };
      }
      if (typeof _callback3 !== 'undefined') {
        _callback3(output);
      }
    }
  });
};
MyLearning._fetchAnonymousProgressTrackingMeta = function () {
  MyLearning._logDebug('_fetchAnonymousProgressTrackingMeta');
  var output = {
    error: {
      code: '1',
      description: 'Failed performing "MyLearning._fetchAnonymousProgressTrackingMeta"'
    },
    data: null
  };
  try {
    var progressTrackingMetaJsonStr = localStorage.getItem('MyLearning.tracking');
    if (progressTrackingMetaJsonStr) {
      var progressTrackingMetaParseRes = Util.parseJson(progressTrackingMetaJsonStr, ['version', 'createdUts', 'updatedUts', 'size', 'list', 'sig']);
      if (progressTrackingMetaParseRes.error.code === '0') {
        var progressTrackingMetaRaw = progressTrackingMetaParseRes.data;
        if (progressTrackingMetaRaw.version !== MyLearning.progressTrackingVersion) {
          output.error = {
            code: 'VERSION_MISMATCH',
            description: 'Cached progress version mismatch',
            meta: progressTrackingMetaRaw
          };
          localStorage.removeItem('MyLearning.tracking');
          return output;
        }
        output.data = {
          raw: progressTrackingMetaJsonStr,
          prepared: progressTrackingMetaRaw
        };
        if (Array.isArray(progressTrackingMetaRaw.list)) {
          if (!progressTrackingMetaRaw.list.length) {
            output.error = {
              code: 'NOT_FOUND',
              description: 'No tracking data found'
            };
            localStorage.removeItem('MyLearning.tracking');
          }
        } else {
          output.error = {
            code: 'INVALID_DATA_TYPE',
            description: 'Cached progress is corrupted',
            meta: progressTrackingMetaRaw
          };
          localStorage.removeItem('MyLearning.tracking');
        }
      } else {
        output.error = {
          code: 'PARSE_ERROR',
          description: 'Failed parsing progressTrackingMetaRaw',
          meta: progressTrackingMetaParseRes.error
        };
        localStorage.removeItem('MyLearning.tracking');
      }
    } else {
      output.error = {
        code: 'NOT_FOUND',
        description: 'No tracking data found'
      };
    }
    if (output.error.code === '1') {
      output.error = {
        code: '0'
      };
    }
  } catch (exc) {
    MyLearning._logError('MyLearning._fetchAnonymousProgressTrackingMeta', exc);
    output.error = Util.getMetaPreparedFromException(exc);
    output.error.code = '2';
  }
  return output;
};
MyLearning._handleAnonymousProgressTracking = function () {
  MyLearning._logDebug('_handleAnonymousProgressTracking');
  return;
  var fetchAnonymousProgressTrackingMetaRes = MyLearning._fetchAnonymousProgressTrackingMeta();
  MyLearning._logDebug('fetchAnonymousProgressTrackingMetaRes: ', fetchAnonymousProgressTrackingMetaRes);

  // storing the anonymous progress for later
  MyLearning._fetchAnonymousProgressTrackingMetaRes = fetchAnonymousProgressTrackingMetaRes;

  // anonymous progress is present
  if (fetchAnonymousProgressTrackingMetaRes.error.code === '0') {
    var anonymousProgressTrackingMeta = fetchAnonymousProgressTrackingMetaRes.data;
    MyLearning._uiSidenavFlagCompletedLinks(MyLearning._getPathsListFromAnonymousProgressTrackingList(anonymousProgressTrackingMeta.prepared.list));
    if (UserSession.loggedIn === true) {
      MyLearning._pushAnonymouslyTrackedProgress(anonymousProgressTrackingMeta.prepared, function (res) {
        MyLearning._logDebug('_pushAnonymouslyTrackedProgress -> res: ', res);
        if (res.error.code === '0') {
          localStorage.removeItem('MyLearning.tracking');
          if (typeof res.data.completed !== 'undefined') {
            MyLearning._uiSidenavFlagCompletedLinks(res.data.completed);
          }
        } else {
          MyLearning._logError('_pushAnonymouslyTrackedProgress -> res: ', res);
        }
      });
    }
  }
  if (UserSession.loggedIn === false) {
    window.addEventListener('scroll', MyLearning._checkIfGotToTheBottomOfThePage);
    MyLearning._checkIfGotToTheBottomOfThePage();
  }
};
MyLearning._pathIsNotInAnonymousProgressTrackingList = function (list, path) {
  MyLearning._logDebug('_pathIsNotInAnonymousProgressTrackingList -> list, path: ', {
    list: list,
    path: path
  });
  if (!list.length) {
    return true;
  }
  var isPresent = false;
  for (var i = 0; i < list.length; i++) {
    if (list[i][0] === path) {
      isPresent = true;
      break;
    }
  }
  return !isPresent;
};
MyLearning._getPathsListFromAnonymousProgressTrackingList = function (list) {
  var output = [];
  for (var i = 0; i < list.length; i++) {
    output.push(list[i][0]);
  }
  return output;
};
MyLearning._handleFinishedPageAnonymous = function () {
  MyLearning._logDebug('_handleFinishedPageAnonymous');
  return;
  var fetchAnonymousProgressTrackingMetaRes = MyLearning._fetchAnonymousProgressTrackingMetaRes;
  var anonymousProgressTrackingMeta;
  var currentUts = Util.getCurrentUts();

  // anonymous progress is present
  if (fetchAnonymousProgressTrackingMetaRes.error.code === '0') {
    anonymousProgressTrackingMeta = fetchAnonymousProgressTrackingMetaRes.data.prepared;
  } else {
    anonymousProgressTrackingMeta = {
      version: MyLearning.progressTrackingVersion,
      createdUts: currentUts,
      updatedUts: currentUts,
      size: 0,
      list: [],
      sig: ''
    };
  }
  var currentPath = Util.removeStrPrefix(window.location.pathname, '/');
  MyLearning._logDebug('_handleFinishedPageAnonymous -> anonymousProgressTrackingMeta: ', anonymousProgressTrackingMeta);
  var saveProgressInfoModalNotificationRate = 5; // every 5th lesson

  var nrOfVisitedPages = anonymousProgressTrackingMeta.list.length;
  if (anonymousProgressTrackingMeta.list.length < MyLearning.localStorageTrackingMaxCount) {
    if (MyLearning._pathIsNotInAnonymousProgressTrackingList(anonymousProgressTrackingMeta.list, currentPath)) {
      Util.attachScript({
        id: 'my-learning-cbups-script',
        path: '/lib/my-learning/cbups.js',
        entityName: 'Cbups',
        callback: function callback(res) {
          if (res.error.code === '0') {
            var listItem = [currentPath, Cbups.generateId(currentPath)];
            anonymousProgressTrackingMeta.size += Util.getStrByteSize(JSON.stringify(listItem));
            var listItemIndex = anonymousProgressTrackingMeta.list.length;
            anonymousProgressTrackingMeta.list.push(listItem);
            anonymousProgressTrackingMeta.sig = Cbups.getSignature({
              prevSig: anonymousProgressTrackingMeta.sig,
              list: anonymousProgressTrackingMeta.list,
              index: listItemIndex
            });
            anonymousProgressTrackingMeta.updatedUts = Util.getCurrentUts();
            localStorage.setItem('MyLearning.tracking', JSON.stringify(anonymousProgressTrackingMeta));
            MyLearning._uiSidenavFlagCompletedLinks([currentPath]);
            MyLearning._logDebug('_handleFinishedPageAnonymous -> anonymousProgressTrackingMeta -> updated: ', anonymousProgressTrackingMeta);
            if (MyLearningSaveProgressInfoModal._doNotShowAgain()) {
              return;
            }
            nrOfVisitedPages = anonymousProgressTrackingMeta.list.length;
            if (anonymousProgressTrackingMeta.list.length % saveProgressInfoModalNotificationRate === 0) {
              MyLearningSaveProgressInfoModal._show({
                nrOfVisitedPages: nrOfVisitedPages,
                nrOfInitialRenders: Math.floor(nrOfVisitedPages / saveProgressInfoModalNotificationRate)
              });
            } else if (MyLearningSaveProgressInfoModal._renderedButNotSeen()) {
              MyLearningSaveProgressInfoModal._show({
                nrOfVisitedPages: nrOfVisitedPages,
                nrOfInitialRenders: Math.floor(nrOfVisitedPages / saveProgressInfoModalNotificationRate)
              });
            }
          } else {
            console.error('Failed loading my learning cbups -> error: ', res.error);
          }
        }
      });
    } else {
      if (MyLearningSaveProgressInfoModal._renderedButNotSeen()) {
        MyLearningSaveProgressInfoModal._show({
          nrOfVisitedPages: nrOfVisitedPages,
          nrOfInitialRenders: Math.floor(nrOfVisitedPages / saveProgressInfoModalNotificationRate)
        });
      }
    }
  } else {
    MyLearning._logError('_handleFinishedPageAnonymous -> user reached max tracking limit');
    if (MyLearningSaveProgressInfoModal._renderedButNotSeen()) {
      MyLearningSaveProgressInfoModal._show({
        nrOfVisitedPages: nrOfVisitedPages,
        nrOfInitialRenders: Math.floor(nrOfVisitedPages / saveProgressInfoModalNotificationRate)
      });
    }
  }
};
MyLearning.init = function () {
  MyLearning._logDebug('init: ', MyLearning.version);
  Util.objFieldOnSetCallback({
    scopeRef: UserSession,
    fieldName: 'loggedIn',
    // not null after UserSession.processUserSession is done processing
    fieldValue: null,
    fieldValueEquals: false,
    callback: function callback(res) {
      MyLearning._logDebug('UserSession.loggedIn -> res: ', res);
      if (res.error.code === '0') {
        // MyLearning._handleAnonymousProgressTracking();

        if (UserSession.loggedIn === true) {
          MyLearning._uiSidenavEnableCheckmarks();
          Util.objFieldOnSetCallback({
            scopeRef: MyLearning,
            fieldName: 'lessonStateFetched',
            callback: function callback(res) {
              MyLearning._logDebug('MyLearning.lessonStateFetched -> res: ', res);
              if (res.error.code === '0' && typeof MyLearning.lessonMeta !== 'undefined') {
                MyLearning._uiSidenavFlagCompletedLinks(MyLearning.lessonMeta.completed);
              } else {
                MyLearning._logError('MyLearning.lessonStateFetched -> res: ', res);
              }
            }
          });
        }
      } else {
        MyLearning._logError('UserSession.loggedIn -> res: ', res);
      }
    }
  });
  if (MyLearning.isIframed()) {
    MyLearning._iframeInit();
  }

  // MyLearningSaveProgressInfoModal._show({
  //   nrOfVisitedPages: 5,
  //   nrOfInitialRenders: 1
  // });
};
window.MyLearningSaveProgressInfoModal = {
  _elm: null,
  _rendered: false,
  _seen: false
};
MyLearningSaveProgressInfoModal._onResize = function () {
  if (!MyLearningSaveProgressInfoModal._rendered) {
    return;
  }
  var modalElm = MyLearningSaveProgressInfoModal._elm;
  var sideNavCalcElm = document.getElementById('w3s-sidenav-width-calc');
  if (sideNavCalcElm) {
    var sideNavWidth = Util.getElementWidth(sideNavCalcElm);
    modalElm.style.width = sideNavWidth ? sideNavWidth : '205px';
  }
};
MyLearningSaveProgressInfoModal._onClose = function (event) {
  event.stopPropagation();
  if (!MyLearningSaveProgressInfoModal._rendered) {
    return;
  }
  MyLearningSaveProgressInfoModal._detachEvents();
  MyLearningSaveProgressInfoModal._rendered = false;
  setTimeout(function () {
    MyLearningSaveProgressInfoModal._elm.remove();
    MyLearningSaveProgressInfoModal._elm = null;
  }, 300);
};
MyLearningSaveProgressInfoModal._onDontShowAgainToggle = function () {
  if (!MyLearningSaveProgressInfoModal._rendered) {
    return;
  }
  var modalElm = MyLearningSaveProgressInfoModal._elm;
  var checkboxWrapperElm = Util.getInnerElement(modalElm, '.-dont-show-again');
  if (checkboxWrapperElm) {
    if (checkboxWrapperElm.classList.contains('-checked')) {
      checkboxWrapperElm.classList.remove('-checked');
      if (Cookies.get('MyLearning.saveProgressInfoModalState') === '-1') {
        Cookies.remove('MyLearning.saveProgressInfoModalState');
      }
    } else {
      checkboxWrapperElm.classList.add('-checked');
      Cookies.set('MyLearning.saveProgressInfoModalState', '-1', {
        expires: 365
      }); // do not show again during one year
    }
  }
};
MyLearningSaveProgressInfoModal._sideNavIsVisible = function () {
  var sideNavIsVisible = Util.getWindowWidth() > 992;
  MyLearning._logDebug('MyLearningSaveProgressInfoModal._sideNavIsVisible: ', sideNavIsVisible);
  return sideNavIsVisible;
};
MyLearningSaveProgressInfoModal._attachEvents = function () {
  if (!MyLearningSaveProgressInfoModal._rendered) {
    return;
  }
  var modalElm = MyLearningSaveProgressInfoModal._elm;
  window.addEventListener('resize', MyLearningSaveProgressInfoModal._onResize);
  Util.getInnerElement(modalElm, '.-close-btn').addEventListener('click', MyLearningSaveProgressInfoModal._onClose);
  Util.getInnerElement(modalElm, '.-dont-show-again').addEventListener('click', MyLearningSaveProgressInfoModal._onDontShowAgainToggle);
  document.getElementById('sidenav').addEventListener('w3sSideNavOpen', MyLearningSaveProgressInfoModal._onSideNavOpen);
  setTimeout(function () {
    if (MyLearningSaveProgressInfoModal._sideNavIsVisible()) {
      MyLearningSaveProgressInfoModal._seen = true;
      Cookies.set('MyLearning.saveProgressInfoModalState', '2'); // rendered and seen
    }
  }, 300); // slide up animation duration
};
MyLearningSaveProgressInfoModal._onSideNavOpen = function (event) {
  MyLearning._logDebug('MyLearningSaveProgressInfoModal._onSideNavOpen -> event: ', event);
  if (MyLearningSaveProgressInfoModal._rendered && !MyLearningSaveProgressInfoModal._seen) {
    setTimeout(function () {
      MyLearningSaveProgressInfoModal._seen = true;
      Cookies.set('MyLearning.saveProgressInfoModalState', '2'); // rendered and seen
    }, 300); // slide up animation duration
  }
};
MyLearningSaveProgressInfoModal._detachEvents = function () {
  if (!MyLearningSaveProgressInfoModal._rendered) {
    return;
  }
  var modalElm = MyLearningSaveProgressInfoModal._elm;
  window.removeEventListener('resize', MyLearningSaveProgressInfoModal._onResize);
  Util.getInnerElement(modalElm, '.-close-btn').removeEventListener('click', MyLearningSaveProgressInfoModal._onClose);
  Util.getInnerElement(modalElm, '.-dont-show-again').removeEventListener('click', MyLearningSaveProgressInfoModal._onDontShowAgainToggle);
  document.getElementById('sidenav').removeEventListener('w3sSideNavOpen', MyLearningSaveProgressInfoModal._onSideNavOpen);
};
MyLearningSaveProgressInfoModal._renderedButNotSeen = function () {
  return Cookies.get('MyLearning.saveProgressInfoModalState') === '1';
};
MyLearningSaveProgressInfoModal._doNotShowAgain = function () {
  return Cookies.get('MyLearning.saveProgressInfoModalState') === '-1';
};
MyLearningSaveProgressInfoModal._show = function (prs) {
  if (UserSession.loggedIn === true) {
    return;
  }
  var nrOfVisitedPages = prs.nrOfVisitedPages;
  var nrOfInitialRenders = prs.nrOfInitialRenders; // Math.floor(nrOfVisitedPages / saveProgressInfoModalNotificationRate)

  MyLearning._logDebug('MyLearningSaveProgressInfoModal._show -> prs: ', prs);

  // if on desktop after 50 visited pages
  if (MyLearningSaveProgressInfoModal._sideNavIsVisible() && nrOfInitialRenders > 10) {
    return;
  }
  MyLearning.uiFetchTemplate('/lib/my-learning/html/user-anonymous/save-progress-info-modal.tmpl.html', function (templateFetchRes) {
    if (templateFetchRes.error.code === '0') {
      if (MyLearningSaveProgressInfoModal._rendered) {
        return;
      }
      MyLearningSaveProgressInfoModal._rendered = true;
      var wrapperElm = document.getElementById('leftmenuinner');
      var wrapperInnerElm = document.getElementById('leftmenuinnerinner');
      if (!wrapperElm || !wrapperInnerElm) {
        MyLearning._logError('MyLearningSaveProgressInfoModal._show -> wrapper elm not found');
        return;
      }
      var sideNavCalcElm = document.createElement('div');
      sideNavCalcElm.id = 'w3s-sidenav-width-calc';
      sideNavCalcElm.className = '-width-calc';
      wrapperInnerElm.appendChild(sideNavCalcElm);
      var sideNavWidth = Util.getElementWidth(sideNavCalcElm);
      var tmpPlaceholderElm = document.createElement('div');
      tmpPlaceholderElm.innerHTML = MyLearning.uiPrepareTemplateHtml(templateFetchRes.data, {
        width: sideNavWidth ? sideNavWidth : '205px',
        nrOfVisitedPages: nrOfVisitedPages,
        // doNotShowAgain: nrOfInitialRenders > 10 ? 'checked' : 'not-checked'
        doNotShowAgain: 'not-checked',
        authRedirectUrl: encodeURIComponent(window.location.href)
      });
      wrapperElm.appendChild(tmpPlaceholderElm.firstChild);
      var modalElm = document.getElementById('w3s-myl-save-progress-info-modal');
      if (!modalElm) {
        MyLearning._logError('MyLearningSaveProgressInfoModal._show -> modal elm not found');
        return;
      }
      MyLearningSaveProgressInfoModal._elm = modalElm;
      Cookies.set('MyLearning.saveProgressInfoModalState', '1'); // rendered but not seen

      MyLearningSaveProgressInfoModal._attachEvents();
    }
  });
};
MyLearning.extractFillInTheBlanksAnswers = function (wrapper) {
  MyLearning._logDebug('extractFillInTheBlanksAnswers -> wrapper: ', wrapper);
  var inputs = wrapper.getElementsByClassName('editablesection');
  var output = [];
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    // var key = input.name || input.id || i;

    // output.push({
    //   key: key,
    //   value: input.value
    // });

    output.push(input.value);
  }
  return output;
};
MyLearning.extractDragAndDropAnswers = function (wrapper) {
  MyLearning._logDebug('extractDragAndDropAnswers -> wrapper: ', wrapper);
  var spans = wrapper.getElementsByClassName('ddanswer');
  var output = [];
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    output.push(span.innerHTML);
  }
  return output;
};
MyLearning.extractOptionsAnswers = function (wrapper) {
  MyLearning._logDebug('extractOptionsAnswers -> wrapper: ', wrapper);
  var radios = wrapper.querySelectorAll('.quizoption input[type="radio"]');

  // check if none found
  if (!radios.length) {
    MyLearning._logError('extractOptionsAnswers -> no radios found');
    return [];
  }
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      var label = wrapper.querySelector('label[for="' + radios[i].id + '"]');
      if (label) {
        return [{
          index: parseInt(radios[i].value, 10),
          value: label.innerHTML.trim()
        }];
      }
    }
  }
  return [];
};
MyLearning.submitExerciseAnswer = function (data) {
  MyLearning._logDebug('submitExerciseAnswer: ', {
    data: data
  });
  if (data.answers.length === 0) {
    MyLearning._logError('submitExerciseAnswer -> no answers found');
    return;
  }
  if (UserSession.loggedIn !== true) {
    return;
  }
  Util.fetch({
    context: 'MyLearning -> submitExerciseAnswer',
    method: 'POST',
    url: MyLearning.getUrl('api.v2.exercise.set'),
    data: JSON.stringify(data),
    withUserSession: true,
    handleUserSessionRedirection: false,
    prepareResponseData: false,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
MyLearning.init();

// if (window.addEventListener) {
//   window.addEventListener('load', MyLearning.init);
// } else if (window.attachEvent) {
//   window.attachEvent('onload', MyLearning.init);
// }
