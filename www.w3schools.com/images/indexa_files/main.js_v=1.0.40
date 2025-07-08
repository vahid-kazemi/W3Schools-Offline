/*
  User session script
*/

window.UserSession = {
  // _tmpAccessTokenCleanupTimeout: null,
  _fetchTimeout: 15000, // in ms
  _refreshUserSessionState: {
    inProgress: false,
    awaitingResult: {},
  },
  _cookies: null,
  loggedIn: null,
  processingRes: null,
  _cognito: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_uG9SGX7Wd',
    clientId: 'd1grqml0emh7votkb0gtrrn0'
  },
  _profileBaseUrl: 'https://profile.w3schools.com',
};

UserSession.onProcessingCompleted = function (callback, lookupIntensity) {
  if (UserSession.processingRes !== null) {
    return callback(UserSession.processingRes);
  }

  var lookupRetries = 256;

  if (typeof lookupIntensity === 'undefined') {
    lookupIntensity = 100; // ms
  }

  var lookupInterval = setInterval(function () {
    if (UserSession.processingRes !== null) {
      clearInterval(lookupInterval);

      return callback(UserSession.processingRes);
    }

    lookupRetries--;

    if (!lookupRetries) {
      clearInterval(lookupInterval);

      callback({
        error: {
          code: 'USPCLT',
          description: 'User session processing completed lookup timeout'
        },
        data: null,
      });
    }
  }, lookupIntensity);
};

UserSession.getCognitoIssuerUrl = function (cognitoCfg) {
  return 'https://cognito-idp.' + cognitoCfg.region + '.amazonaws.com/' + cognitoCfg.userPoolId;
};

UserSession.verifyUserSession = function (
  cognitoCfg,
) {
  var output = {
    error: {
      code: 'FPVUS',
      description: 'Failed performing "verifyUserSession"',
    },
    data: {},
  };

  var userSessionStatusCode = UserSession.getCookie('userSession'); // userSessionStatusCode
  var userSessionMetaRawStr = UserSession.getCookie('userSessionMeta');
  var accessToken = UserSession.getCookie('accessToken');

  var userSessionStatusCodeIsSet = typeof userSessionStatusCode !== 'undefined' && userSessionStatusCode;
  var userSessionMetaIsSet = typeof userSessionMetaRawStr !== 'undefined' && userSessionMetaRawStr;
  var accessTokenIsSet = typeof accessToken !== 'undefined' && accessToken;

  if (
    !accessTokenIsSet
    && !userSessionStatusCodeIsSet // long time no visit on new sessions
  ) { // backwards compatible
    output.error = {
      code: 'USNF', // legacy code
      description: 'User session not found',
      meta: {
        origin: 'verifyUserSession',
      },
    };

    return output;
  } else if (
    userSessionStatusCodeIsSet
    && userSessionStatusCode === '0' // UserSessionStatusCodeEnum.LoggedOut
  ) { // new flow backwards compatible ( new states are fine )
    output.error = {
      code: 'USNF', // legacy code
      description: 'User session not found',
      meta: {
        origin: 'verifyUserSession',
        legacy: false,
        logOut: true,
        flow: 'Explicit "userSessionStatusCode" flag',
      },
    };

    return output;
  } else if (
    userSessionStatusCodeIsSet
    && userSessionStatusCode === '-1' // UserSessionStatusCodeEnum.LegacySendToRefresh
  ) { // backwards compatible ( previously "userSession" cookie was set to "-1" and user was redirected to profile refresh page )
    output.error = {
      code: 'USSBR', // legacy code
      description: 'User session should be refreshed via redirect',
      meta: {
        legacy: true,
        flow: 'Explicit "userSessionStatusCode" flag',
      }
    };

    return output;
  } else if (
    userSessionStatusCodeIsSet
    && userSessionStatusCode === '-2' // UserSessionStatusCodeEnum.LoginRequired
  ) { // new flow backwards compatible ( new states are fine )
    output.error = {
      code: 'USLA',
      description: 'User should login again',
      meta: {
        legacy: false,
        flow: 'Explicit "userSessionStatusCode" flag',
      }
    };

    return output;
  } else if (
    userSessionStatusCodeIsSet
    && userSessionStatusCode === '-3' // UserSessionStatusCodeEnum.RefreshRequired
  ) { // new flow backwards compatible ( new states are fine )
    output.error = {
      code: 'ATSBR',
      description: 'Access token should be refreshed',
      meta: {
        legacy: !userSessionMetaIsSet,
        flow: 'Explicit "userSessionStatusCode" flag',
      }
    };

    return output;
  } else if ( // backwards compatible
    !userSessionMetaIsSet // previously "userSessionMeta" cookie did not exist -> legacy flow
    && userSessionStatusCodeIsSet
    && !accessTokenIsSet
  ) {
    output.error = {
      code: 'USHE', // legacy code
      description: 'User session has expired',
      meta: {
        legacy: true,
      }
    };

    return output;
  } else if (userSessionMetaIsSet) { // new flow backwards compatible
    var getUserSessionCookieMetaRes = UserSession.getUserSessionCookieMeta();

    if (getUserSessionCookieMetaRes.error.code !== '0') {
      output.error = {
        code: 'USMINV',
        description: 'User session meta is not valid',
        meta: {
          legacy: false,
          getUserSessionCookieMetaRes: getUserSessionCookieMetaRes,
        }
      };

      return output;
    }

    var currentUts = Util.getCurrentUts();

    if (getUserSessionCookieMetaRes.data.rtexp < currentUts) {
      output.error = {
        code: 'RTHE',
        description: 'Refresh token has expired',
        meta: {
          legacy: false,
        }
      };

      return output;
    } else if (getUserSessionCookieMetaRes.data.atexp < currentUts) {
      output.error = {
        code: 'ATHE',
        description: 'Access token has expired',
        meta: {
          legacy: false,
        }
      };

      return output;
    }
  }

  var verifyAccessTokenRes = UserSession.verifyAccessToken(
    cognitoCfg,
    accessToken,
  );

  if (verifyAccessTokenRes.error.code !== '0') {
    output.error = verifyAccessTokenRes.error;

    return output;
  }

  output.data = verifyAccessTokenRes.data;

  output.error = { code: '0' };

  return output;
};

UserSession.verifyAccessToken = function (
  cognitoCfg,
  accessToken,
) {
  var output = {
    error: {
      code: 'FPVAT',
      description: 'Failed performing "verifyAccessToken"',
    },
    data: {},
  };

  var accessTokenMeta = UserSession.parseAccessToken(accessToken);

  if (accessTokenMeta.error.code !== '0') {
    output.error = accessTokenMeta.error;

    return output;
  }

  output.data = accessTokenMeta.data;

  var claim = accessTokenMeta.data.payload;

  var issuer = UserSession.getCognitoIssuerUrl(cognitoCfg);

  if (claim.iss !== issuer) {
    output.error = {
      code: 'ATINVCIDNM',
      description: 'Access token is not valid. Claim issuer does not match',
      meta: {
        accessToken: accessToken,
        issuer: issuer,
        claim: claim,
      }
    };

    return output;
  }

  if (claim.token_use !== 'access') {
    output.error = {
      code: 'ATINVCUINA',
      description: 'Access token is not valid. Claim use is not access',
      meta: {
        accessToken: accessToken,
        claim: claim,
      }
    };

    return output;
  }

  output.error = { code: '0' };

  return output;
};

UserSession.parseAccessToken = function (
  accessToken,
  parseHeader,
) {
  var output = {
    error: {
      code: '0'
    },
    data: {},
  };

  if (
    typeof accessToken === 'undefined'
    || !accessToken
  ) {
    output.error = {
      code: 'USNF', // legacy code
      description: 'User session not found'
    };

    return output;
  }

  try {
    var accessTokenSections = accessToken.split('.');

    if (accessTokenSections.length < 3) { // maybe in future we may have more than 3 chunks
      output.error = {
        code: 'ATINVWNOTS',
        description: 'Access token is not valid. Wrong number of token sections',
        meta: {
          accessToken: accessToken,
          accessTokenSections: accessTokenSections,
        }
      };

      return output;
    }

    var accessTokenHeader = undefined;

    if (typeof parseHeader !== 'undefined' && parseHeader) {
      var accessTokenHeaderEncodedStr = accessTokenSections[0];

      var accessTokenHeaderDecodedStrRes = UserSession.decodeBase64UrlEncodedJwtSection(accessTokenHeaderEncodedStr);

      if (accessTokenHeaderDecodedStrRes.error.code !== '0') {
        output.error = {
          code: 'ATINVFDTTH',
          description: 'Access token is not valid. Failed decoding the token header',
          meta: {
            accessToken: accessToken,
            accessTokenHeaderEncodedStr: accessTokenHeaderEncodedStr,
            decodingError: accessTokenHeaderDecodedStrRes.error
          }
        };

        return output;
      }

      var accessTokenHeaderParseRes = Util.parseJson(
        accessTokenHeaderDecodedStrRes.data, // jsonStr
        ['kid', 'alg'], // requiredFields
      );

      if (accessTokenHeaderParseRes.error.code !== '0') {
        output.error = {
          code: 'ATINVFPTH',
          description: 'Access token is not valid. Failed parsing token header',
          meta: {
            accessToken: accessToken,
            accessTokenHeaderEncodedStr: accessTokenHeaderEncodedStr,
            accessTokenHeaderDecodedStr: accessTokenHeaderDecodedStrRes.data,
            parseError: accessTokenHeaderParseRes.error
          }
        };

        return output;
      }

      accessTokenHeader = accessTokenHeaderParseRes.data;
    }

    var accessTokenPayloadEncodedStr = accessTokenSections[1];

    var accessTokenPayloadDecodedStrRes = UserSession.decodeBase64UrlEncodedJwtSection(accessTokenPayloadEncodedStr);

    if (accessTokenPayloadDecodedStrRes.error.code !== '0') {
      output.error = {
        code: 'ATINVFDTTP',
        description: 'Access token is not valid. Failed decoding the token payload',
        meta: {
          accessToken: accessToken,
          accessTokenPayloadEncodedStr: accessTokenPayloadEncodedStr,
          decodingError: accessTokenPayloadDecodedStrRes.error
        }
      };

      return output;
    }

    var accessTokenPayloadParseRes = Util.parseJson(
      accessTokenPayloadDecodedStrRes.data, // jsonStr
      [
        'sub',
        // 'event_id',
        'token_use',
        'scope',
        'auth_time',
        'iss',
        'exp',
        'iat',
        'jti',
        'client_id',
        'username',
      ], // requiredFields
    );

    if (accessTokenPayloadParseRes.error.code !== '0') {
      output.error = {
        code: 'ATINVFPTP',
        description: 'Access token is not valid. Failed parsing token payload',
        meta: {
          accessToken: accessToken,
          accessTokenPayloadEncodedStr: accessTokenPayloadEncodedStr,
          accessTokenPayloadDecodedStr: accessTokenPayloadDecodedStrRes.data,
          parseError: accessTokenPayloadParseRes.error
        }
      };

      return output;
    }

    var accessTokenPayload = accessTokenPayloadParseRes.data;

    var accessTokenExpiryUts = parseInt(accessTokenPayload.exp);

    var accessTokenExpiryDto = new Date(accessTokenExpiryUts * 1000);

    var accessTokenTtl = 43200 - 60; // 12 hours in seconds - 1 minute to invalidate slightly earlier

    var localCurrentUts = Util.getCurrentUts();

    var accessTokenLocalExpiryUts = localCurrentUts + accessTokenTtl;

    var accessTokenLocalExpiryDto = new Date(accessTokenLocalExpiryUts * 1000);

    output.data = {
      rawStr: accessToken,
      header: accessTokenHeader,
      payload: accessTokenPayload,
      expiryDto: accessTokenExpiryDto,
      expiryUts: accessTokenExpiryUts,
      ttl: accessTokenTtl,
      localCurrentUts: localCurrentUts,
      localExpiryUts: accessTokenLocalExpiryUts,
      localExpiryDto: accessTokenLocalExpiryDto,
    };
  } catch (exc) {
    output.error = Util.getMetaPreparedFromException(exc);
  }

  return output;
};

UserSession.getUserSessionCookieMeta = function () {
  var output = {
    error: {
      code: '1',
      description: 'Failed performing "getUserSessionCookieMeta"'
    },
    data: {},
  };

  var userSessionMetaRawStr = UserSession.getCookie('userSessionMeta');

  if (
    typeof userSessionMetaRawStr === 'undefined'
    || !userSessionMetaRawStr
  ) {
    output.error = {
      code: 'USMCINP',
      description: 'User session meta cookie is not present',
    };

    return output;
  }

  var userSessionMetaRawStrDecodeRes = UserSession.getCookieValueDecodedStr(
    userSessionMetaRawStr,
    1, // atob
  );

  if (userSessionMetaRawStrDecodeRes.error.code !== '0') {
    output.error = {
      code: 'DFUSMC',
      description: 'Failed decoding user session meta cookie',
      meta: {
        userSessionMetaRawStr: userSessionMetaRawStr,
        userSessionMetaRawStrDecodeRes: userSessionMetaRawStrDecodeRes,
      }
    };

    return output;
  }

  var userSessionMetaRawJsonStr = userSessionMetaRawStrDecodeRes.data;

  if (userSessionMetaRawJsonStr.indexOf('{') !== 0) {
    output.error = {
      code: 'USMCINV1',
      description: 'User session meta cookie is not valid',
      meta: {
        userSessionMetaRawStr: userSessionMetaRawStr,
        userSessionMetaRawJsonStr: userSessionMetaRawJsonStr,
      },
    };

    return output;
  }

  var userSessionMetaParseRes = Util.parseJson(
    userSessionMetaRawJsonStr,
    [
      'id',
      'iss',
      'atexp',
      'rtexp',
    ],
  );

  if (userSessionMetaParseRes.error.code !== '0') {
    output.error = {
      code: 'FPUSMC',
      description: 'Failed parsing user session meta cookie',
      meta: {
        userSessionMetaRawJsonStr: userSessionMetaRawJsonStr,
        userSessionMetaParseRes: userSessionMetaParseRes,
      },
    };

    return output;
  }

  output.data = userSessionMetaParseRes.data;

  output.error = { code: '0' };

  return output;
};

UserSession.getAccessTokenCookieLifespan = function (
  userSessionMeta,
  userSessionLifespan,
) {
  var output = {
    error: {
      code: '1',
      description: 'Failed performing "getAccessTokenCookieLifespan"'
    },
    data: {},
  };

  var currentUts = Util.getCurrentUts();

  var expiryUts = 0;

  if (typeof userSessionLifespan !== 'undefined') {
    if (userSessionLifespan.accessTokenExpiryUiUts > userSessionLifespan.refreshTokenExpiryUiUts) { // possible on last refresh
      expiryUts = userSessionLifespan.accessTokenExpiryUiUts;
    } else {
      expiryUts = userSessionLifespan.refreshTokenExpiryUiUts;
    }
  } else if (typeof userSessionMeta === 'undefined') {
    var getUserSessionCookieMetaRes = UserSession.getUserSessionCookieMeta();

    if (getUserSessionCookieMetaRes.error.code !== '0') {
      output.error = getUserSessionCookieMetaRes.error;

      return output;
    }

    userSessionMeta = getUserSessionCookieMetaRes.data;
  }

  if (
    expiryUts === 0
    && typeof userSessionMeta !== 'undefined'
  ) {
    if (userSessionMeta.atexp > userSessionMeta.rtexp) { // possible on last refresh
      expiryUts = userSessionMeta.atexp;
    } else {
      expiryUts = userSessionMeta.rtexp;
    }
  }

  output.data = {
    currentUts: currentUts,
    expiryUts: expiryUts,
    expiryDto: new Date(expiryUts * 1000),
    ttl: expiryUts - currentUts,
  };

  output.error = { code: '0' };

  return output;
};

UserSession.changeStatusCodeInUserSessionCookies = function (newStatusCode) {
  var userSessionCookieTtl = 7776000; // 90 days in seconds
  var userSessionCookieExpiryUts = Util.getCurrentUts() + userSessionCookieTtl;
  var userSessionCookieExpiryDto = new Date(userSessionCookieExpiryUts * 1000);

  UserSession.resetCookie({
    name: 'userSession', // userSessionStatusCode
    value: newStatusCode,
    maxAge: userSessionCookieTtl,
    expires: userSessionCookieExpiryDto,
  });

  var userSessionMetaRawStr = UserSession.getCookie('userSessionMeta');

  if (
    typeof userSessionMetaRawStr !== 'undefined'
    && userSessionMetaRawStr
  ) {
    // reseting only to sync the expiry date-time with "userSession" cookie
    UserSession.resetCookie({
      name: 'userSessionMeta',
      value: userSessionMetaRawStr,
      maxAge: userSessionCookieTtl,
      expires: userSessionCookieExpiryDto,
    });
  }
};

UserSession.upsertActiveUserSessionCookies = function (
  accessToken,
  userInfoCookie,
  sessionLifespan,
  sessionId,
) {
  var output = {
    error: {
      code: '1',
      description: 'Failed performing "upsertActiveUserSessionCookies"',
    },
    data: {},
  };

  var userSessionCookieTtl = 7776000; // 90 days in seconds
  var userSessionCookieExpiryUts = sessionLifespan.currentUiUts + userSessionCookieTtl;
  var userSessionCookieExpiryDto = new Date(userSessionCookieExpiryUts * 1000);

  if (typeof sessionId === 'undefined') { // previously initialized
    var getUserSessionCookieMetaRes = UserSession.getUserSessionCookieMeta();

    if (getUserSessionCookieMetaRes.error.code !== '0') {
      output.error = {
        code: 'FRUSM',
        description: 'Failed retrieving user session meta',
        meta: {
          getUserSessionCookieMetaRes: getUserSessionCookieMetaRes,
        }
      };

      return output;
    }

    sessionId = getUserSessionCookieMetaRes.data.id;
  }

  var userSessionMeta = {
    id: sessionId,
    iss: sessionLifespan.refreshTokenBaseUiUts,
    atexp: sessionLifespan.accessTokenExpiryUiUts,
    rtexp: sessionLifespan.refreshTokenExpiryUiUts,
  };

  var getAccessTokenCookieLifespanRes = UserSession.getAccessTokenCookieLifespan(
    undefined,
    sessionLifespan,
  );

  UserSession._logDebug('upsertActiveUserSessionCookies -> getAccessTokenCookieLifespanRes: ', getAccessTokenCookieLifespanRes);

  if (getAccessTokenCookieLifespanRes.error.code !== '0') {
    output.error = {
      code: 'FRATCL',
      description: 'Failed retrieving access token cookie lifespan',
      meta: {
        getAccessTokenCookieLifespanRes: getAccessTokenCookieLifespanRes,
      }
    };

    return output;
  }

  var userSessionMetaEncodingRes = UserSession.getCookieValueEncodedStr(
    JSON.stringify(userSessionMeta),
    1, // btoa
  );

  if (userSessionMetaEncodingRes.error.code !== '0') {
    output.error = {
      code: 'FEUSMD',
      description: 'Failed encoding user session meta data',
      meta: {
        userSessionMetaEncodingRes: userSessionMetaEncodingRes,
      }
    };

    return output;
  }

  UserSession.resetCookie({
    name: 'userSession', // userSessionStatusCode
    value: '1', // UserSessionStatusCodeEnum.Active
    maxAge: userSessionCookieTtl,
    expires: userSessionCookieExpiryDto,
  });

  UserSession.resetCookie({
    name: 'userSessionMeta',
    value: userSessionMetaEncodingRes.data,
    maxAge: userSessionCookieTtl,
    expires: userSessionCookieExpiryDto,
  });

  var accessTokenTtl = getAccessTokenCookieLifespanRes.data.ttl;
  var accessTokenExpiryDto = getAccessTokenCookieLifespanRes.data.expiryDto;

  UserSession.resetCookie({
    name: 'accessToken',
    value: accessToken,
    maxAge: accessTokenTtl,
    expires: accessTokenExpiryDto,
  });

  UserSession.resetCookie({
    name: '__c_u_i_1', // userInfoCookie
    value: userInfoCookie,
    maxAge: accessTokenTtl,
    expires: accessTokenExpiryDto,
  });

  output.data = userSessionMeta;

  output.data.statusCode = '1'; // UserSessionStatusCodeEnum.Active

  output.error = { code: '0' };

  return output;
};

/**
 * @deprecated Legacy user session refresh logic kept for backwards compatibility.
 * Redirect to profile then refresh and bring the user back to current location
 */
UserSession.refreshUserSessionViaRedirect = function (context, originUrl, reason) {
  UserSession._logDebug('refreshUserSessionViaRedirect -> init: ', {
    context: context,
    originUrl: originUrl,
  });

  UserSession.setUserSessionCookieDebugMeta({
    origin: originUrl,
    context: context,
    description: 'refreshUserSessionViaRedirect',
    reason: reason,
    prevStatusCode: UserSession.getCookie('userSession'),
    newStatusCode: '-1', // UserSessionStatusCodeEnum.LegacySendToRefresh
  });

  UserSession.changeStatusCodeInUserSessionCookies(
    '-1', // UserSessionStatusCodeEnum.LegacySendToRefresh
  );

  var redirectUrl = UserSession._profileBaseUrl + '/refresh-session?redirect_url=' + encodeURIComponent(originUrl);

  UserSession._logDebug('refreshUserSessionViaRedirect -> redirectUrl: ', redirectUrl);

  if (
    localStorage.getItem('skipRedirect') === 'true'
    && UserSession._isDebugMode()
  ) {
    debugger;

    return;
  }

  window.location.href = redirectUrl;
};

/**
 * Redirect to profile for re-sign in and bring the user back to current location
 */
UserSession.restartUserSessionViaRedirect = function (context, originUrl, reason) {
  UserSession._logDebug('restartUserSessionViaRedirect -> init: ', {
    context: context,
    originUrl: originUrl,
  });

  UserSession.setUserSessionCookieDebugMeta({
    origin: originUrl,
    context: context,
    description: 'restartUserSessionViaRedirect',
    reason: reason,
    prevStatusCode: UserSession.getCookie('userSession'),
    newStatusCode: '-2', // UserSessionStatusCodeEnum.LoginRequired
  });

  UserSession.changeStatusCodeInUserSessionCookies(
    '-2', // UserSessionStatusCodeEnum.LoginRequired
  );

  var redirectUrl = UserSession._profileBaseUrl + '/log-in?redirect_url=' + encodeURIComponent(originUrl)

  UserSession._logDebug('restartUserSessionViaRedirect -> redirectUrl: ', redirectUrl);

  if (
    localStorage.getItem('skipRedirect') === 'true'
    && UserSession._isDebugMode()
  ) {
    debugger;

    return;
  }

  window.location.href = redirectUrl;
};

// UserSession.logOut = function () {
//   UserSession.changeStatusCodeInUserSessionCookies(
//     '0', // UserSessionStatusCodeEnum.LoggedOut
//   );

//   UserSession.loggedIn = false;
// };

UserSession._sleep = function (
  ms,
  callback,
) {
  setTimeout(callback, ms);
};

UserSession._refreshBackendUserSession = function (
  context,
  callback,
) {
  UserSession._logDebug('(1) _refreshBackendUserSession -> init: ', {
    context: context,
  });

  var accessToken = UserSession.getCookie('accessToken');

  if (
    typeof accessToken === 'undefined'
    || !accessToken
  ) {
    var output = {
      error: {
        code: 'RUS_ATINPIC',
        description: 'Access token is not present in cookies',
        meta: {
          context: context,
        }
      },
      data: null,
    };

    UserSession._logDebug('(E1) _refreshBackendUserSession -> context, output: ', {
      context: context,
      output: output,
    });

    return callback(output);
  }

  // UserSession.removeCookie('accessToken'); // it's restored later on successful refresh

  // UserSession.resetCookie({
  //   name: 'xAccessToken',
  //   value: accessToken,
  //   maxAge: UserSession._fetchTimeout / 1000, // seconds
  // });

  UserSession.legacyFetch(
    'POST',
    UserSession._profileBaseUrl + '/api/user/session',
    {
      method: 'PATCH',
      currentUiUts: Util.getCurrentUts(),
    },
    function (reqRes) {
      // UserSession.removeCookie('xAccessToken');

      var output = {
        error: {
          code: 'RUS_FRRD',
          description: 'Failed retrieving response data',
          meta: {
            context: context,
          }
        },
        data: null,
      };

      if (
        reqRes.error.code === '0'
        && reqRes.dataStr
      ) {
        var reqResDataParseRes = Util.parseJson(
          reqRes.dataStr, // jsonStr
          [
            'error',
            'data',
          ], // requiredFields
        );

        UserSession._logDebug('(2) _refreshBackendUserSession -> context, reqResDataParseRes: ', {
          context: context,
          reqResDataParseRes: reqResDataParseRes,
        });

        if (reqResDataParseRes.error.code !== '0') {
          output.error = {
            code: 'RUS_RDINVFPP',
            description: 'Response data is not valid. Failed parsing payload',
            meta: {
              context: context,
              reqResDataStr: reqRes.dataStr,
              reqResDataParseRes: reqResDataParseRes,
            }
          };

          UserSession._logDebug('(E2) _refreshBackendUserSession -> context, output: ', {
            context: context,
            output: output,
          });

          return callback(output);
        } else {
          output = reqResDataParseRes.data;

          if (
            typeof output.error === 'undefined'
            || typeof output.error.code === 'undefined'
          ) {
            output.error = {
              code: 'RUS_RDINVMESC',
              description: 'Response data is not valid. Missing error status code',
              meta: {
                context: context,
                reqRes: Util.getDictSnapshot(reqResDataParseRes.data, false),
              }
            };

            UserSession._logDebug('(E3) _refreshBackendUserSession -> context, output: ', {
              context: context,
              output: output,
            });

            return callback(output);
          }

          if (output.error.code !== '0') {
            output.error = {
              code: 'RUS_FRUS',
              description: 'Failed refreshing user session',
              meta: {
                context: context,
                reqRes: Util.getDictSnapshot(reqResDataParseRes.data, false),
              }
            };

            UserSession._logDebug('(E4) _refreshBackendUserSession -> context, output: ', {
              context: context,
              output: output,
            });

            return callback(output);
          }
        }
      }

      UserSession._logDebug('(FIN) _refreshBackendUserSession -> context, output: ', {
        context: context,
        output: output,
      });

      callback(output);
    }
  );
};

UserSession._callbackParallelRefreshUserSessionExecutionResponse = function (
  context,
  awaitId,
  iteration,
  callback,
) {
  UserSession._logDebug('(1) _callbackParallelRefreshUserSessionExecutionResponse -> context, awaitId, iteration: ', {
    context: context,
    awaitId: awaitId,
    iteration: iteration,
  });

  if (typeof UserSession._refreshUserSessionState.awaitingResult[awaitId] === 'undefined') { // should never happen
    var res = {
      error: {
        code: 'AIDINPIQRUSSAR1',
        description: 'Await id is not present in queue "refreshUserSessionState.awaitingResult"',
        meta: {
          context: context,
          awaitId: awaitId,
          iteration: iteration,
        }
      },
      data: {},
    };

    UserSession._logDebug('(E1) _callbackParallelRefreshUserSessionExecutionResponse -> context, awaitId, iteration, res: ', {
      context: context,
      awaitId: awaitId,
      iteration: iteration,
      res: res,
    });

    return callback(res);
  }

  if (iteration === 30) {
    delete UserSession._refreshUserSessionState.awaitingResult[awaitId]; // release

    var res = {
      error: {
        code: 'MRRWPAPRUSER',
        description: 'Maximum recursion reached while perfofrming "_awaitParallelRefreshUserSessionExecutionResponse"',
        meta: {
          context: context,
          awaitId: awaitId,
          iteration: iteration,
        }
      },
      data: {},
    };

    UserSession._logDebug('(E2) _callbackParallelRefreshUserSessionExecutionResponse -> context, awaitId, iteration, res: ', {
      context: context,
      awaitId: awaitId,
      iteration: iteration,
      res: res,
    });

    return callback(res);
  }

  setTimeout(function () {
    if (typeof UserSession._refreshUserSessionState.awaitingResult[awaitId] === 'undefined') { // should never happen
      var res = {
        error: {
          code: 'AIDINPIQRUSSAR2',
          description: 'Await id is not present in queue "refreshUserSessionState.awaitingResult"',
          meta: {
            context: context,
            awaitId: awaitId,
            iteration: iteration,
          }
        },
        data: {},
      };

      UserSession._logDebug('(E3) _callbackParallelRefreshUserSessionExecutionResponse -> context, awaitId, iteration, res: ', {
        context: context,
        awaitId: awaitId,
        iteration: iteration,
        res: res,
      });

      return callback(res);
    }

    if (UserSession._refreshUserSessionState.awaitingResult[awaitId] !== null) { // response is ready
      var res = Util.getDictSnapshot(UserSession._refreshUserSessionState.awaitingResult[awaitId]);

      delete UserSession._refreshUserSessionState.awaitingResult[awaitId]; // release

      UserSession._logDebug('(2) _callbackParallelRefreshUserSessionExecutionResponse -> context, awaitId, iteration, res: ', {
        context: context,
        awaitId: awaitId,
        iteration: iteration,
        res: res,
      });

      if (typeof res.error.meta === 'undefined') {
        res.error.meta = {};
      }

      res.error.meta.context = context;
      res.error.meta.awaitId = awaitId;
      res.error.meta.iteration = iteration;

      callback(res);
    } else { // response is not ready yet
      UserSession._callbackParallelRefreshUserSessionExecutionResponse(context, awaitId, ++iteration, callback);
    }
  }, 500);
};

UserSession._awaitParallelRefreshUserSessionExecutionResponse = function (
  context,
  awaitId,
  callback,
) {
  UserSession._callbackParallelRefreshUserSessionExecutionResponse(context, awaitId, 0, function (res) {
    if (
      res.error.code !== '0'
      && res.error.code.indexOf('RUS_') !== 0
    ) { // if no 'RUS_' prefix -> add it
      res.error.code = 'RUS_' + res.error.code;
    }

    UserSession._logDebug('_awaitParallelRefreshUserSessionExecutionResponse -> context, awaitId, res: ', {
      context: context,
      awaitId: awaitId,
      res: res,
    });

    callback(res);
  });
};

UserSession.refreshUserSession = function (
  context,
  callback,
  _altRefreshBackendUserSession,
  _sleepBeforeInit, // ms
) {
  UserSession._logDebug('(1) refreshUserSession -> init: ', {
    context: context,
    refreshUserSessionState: Util.getDictSnapshot(UserSession._refreshUserSessionState), // TODO: (mid) remove after WEB-2419 release
    _altRefreshBackendUserSession: _altRefreshBackendUserSession,
    _sleepBeforeInit: _sleepBeforeInit,
  });

  if (typeof _sleepBeforeInit !== 'undefined' && _sleepBeforeInit > 0) {
    return UserSession._sleep(_sleepBeforeInit, UserSession.refreshUserSession.bind(null, context, callback, _altRefreshBackendUserSession, undefined));
  }

  if (UserSession._refreshUserSessionState.inProgress) {
    var awaitId = Util.getCurrentUtms() + ''; // unique enough

    UserSession._refreshUserSessionState.awaitingResult[awaitId] = null;

    return UserSession._awaitParallelRefreshUserSessionExecutionResponse(context, awaitId, callback);
  }

  UserSession._refreshUserSessionState.inProgress = true;

  var _refreshBackendUserSession;

  if (typeof _altRefreshBackendUserSession !== 'undefined') {
    _refreshBackendUserSession = _altRefreshBackendUserSession;
  } else {
    _refreshBackendUserSession = UserSession._refreshBackendUserSession;
  }

  _refreshBackendUserSession(context, function (refreshBackendUserSessionRes) {
    var output = refreshBackendUserSessionRes;

    var recentlyConsumed = output.error.code === '0'
      && typeof output.data.recentlyConsumed !== 'undefined'
      && output.data.recentlyConsumed;

    if (recentlyConsumed) { // check cookies once more
      var verifyUserSessionRes = UserSession.verifyUserSession({
        cognitoCfg: UserSession._cognito,
      });

      if (verifyUserSessionRes.error.code !== '0') {
        output.error = {
          code: 'RUS_RSTWCRBNWSCBF',
          description: 'Refresh session tokens were consumed recently but no working session can be found',
          meta: {
            context: context,
            verifyUserSessionRes: verifyUserSessionRes,
          }
        };
      }
    }

    if (output.error.code === '0' && !recentlyConsumed) { // refreshed just fine
      var upsertActiveUserSessionCookiesRes = UserSession.upsertActiveUserSessionCookies(
        output.data.accessToken,
        output.data.userInfoCookie,
        output.data.sessionLifespan,
      );

      UserSession._logDebug('(2) refreshUserSession -> context, upsertActiveUserSessionCookiesRes: ', {
        context: context,
        upsertActiveUserSessionCookiesRes: upsertActiveUserSessionCookiesRes,
      });

      if (upsertActiveUserSessionCookiesRes.error.code !== '0') {
        output.error = {
          code: 'RUS_FUAUSC',
          description: 'Failed upserting active user session cookies',
          meta: {
            context: context,
            upsertActiveUserSessionCookiesRes: upsertActiveUserSessionCookiesRes,
          }
        };
      }
    }

    UserSession._logDebug('(3) refreshUserSession -> context, output: ', {
      context: context,
      output: output,
    });

    if (output.error.code !== '0') { // a new log-in is required
      UserSession._logDebug('(4) refreshUserSession -> new log-in required -> context, output: ', {
        context: context,
        output: output,
      });

      UserSession.setUserSessionCookieDebugMeta({
        origin: window.location.href,
        context: context,
        description: 'refreshUserSession',
        reason: output,
        prevStatusCode: UserSession.getCookie('userSession'),
        newStatusCode: '-2', // UserSessionStatusCodeEnum.LoginRequired
      });

      UserSession.changeStatusCodeInUserSessionCookies(
        '-2', // UserSessionStatusCodeEnum.LoginRequired
      );
    }

    if (typeof output.error.meta === 'undefined') {
      output.error.meta = {};
    }

    output.error.meta.context = context;

    UserSession._refreshUserSessionState.inProgress = false;

    UserSession._logDebug('(5) refreshUserSession -> before return -> context, refreshUserSessionState: ', {
      context: context,
      refreshUserSessionState: Util.getDictSnapshot(UserSession._refreshUserSessionState), // TODO: (mid) remove after WEB-2419 release
    });

    var awaitingResultIds = Object.keys(UserSession._refreshUserSessionState.awaitingResult);

    if (awaitingResultIds.length) {
      for (var awaitIdIndex = 0; awaitIdIndex < awaitingResultIds.length; awaitIdIndex++) {
        var awaitId = awaitingResultIds[awaitIdIndex];

        UserSession._refreshUserSessionState.awaitingResult[awaitId] = output;
      }
    }

    callback(output);
  });
};

UserSession.userSessionRedirectionLogicHandler = function (userSessionVerificationRes) {
  UserSession._logDebug('userSessionRedirectionLogicHandler -> userSessionVerificationRes: ', userSessionVerificationRes);

  if (userSessionVerificationRes.error.code === '0') {
    return;
  }

  if (
    userSessionVerificationRes.error.code === 'USSBR' // User session should be refreshed via redirect
    || userSessionVerificationRes.error.code === 'USHE' // User session has expired
    || userSessionVerificationRes.error.code === 'ATHE' // Access token has expired
    || userSessionVerificationRes.error.code === 'ATSBR' // Access token should be refreshed
  ) { // refresh
    if (
      typeof userSessionVerificationRes.error.meta !== 'undefined'
      && typeof userSessionVerificationRes.error.meta.legacy !== 'undefined'
      && userSessionVerificationRes.error.meta.legacy
    ) { // refresh the old way
      UserSession.refreshUserSessionViaRedirect(
        'userSessionRedirectionLogicHandler',
        window.location.href,
        userSessionVerificationRes,
      );
    }
  } else if (
    userSessionVerificationRes.error.code === 'USLA' // User should login again
    || userSessionVerificationRes.error.code === 'USMINV' // User session meta is not valid
    || userSessionVerificationRes.error.code === 'RTHE' // Refresh token has expired
    || userSessionVerificationRes.error.code.indexOf('RUS_') === 0 // failed backend refresh user session attempt
  ) {
    UserSession.restartUserSessionViaRedirect(
      'userSessionRedirectionLogicHandler',
      window.location.href,
      userSessionVerificationRes,
    );
  }
};

UserSession.processUserSession = function (params, legacyArg) {
  // interface IProcessUserSessionParams {
  //   context: string;
  //   callback: (verificationRes) => void;
  //   handleRefresh?: boolean;
  //   handleRedirection?: boolean;
  // }

  // handle legacy arguments for backwards compatibility // TODO: (low) update legacy calls
  if (typeof params === 'function') {
    params = {
      context: 'Unknown (legacy call)',
      callback: params,
      handleRedirection: legacyArg,
    };
  }

  var handleRefresh = (typeof params.handleRefresh !== 'undefined') ? params.handleRefresh : true;
  params.handleRefresh = handleRefresh;
  var handleRedirection = (typeof params.handleRedirection !== 'undefined') ? params.handleRedirection : false;
  params.handleRedirection = handleRedirection;

  var cognitoCfg = UserSession._cognito;

  var userSessionVerificationRes = UserSession.verifyUserSession(
    cognitoCfg,
  );

  UserSession._logDebug('processUserSession -> context, userSessionVerificationRes: ', {
    context: params.context,
    userSessionVerificationRes: userSessionVerificationRes,
  });

  function _processResult(params, verificationRes) {
    UserSession.processingRes = verificationRes;
    UserSession.loggedIn = verificationRes.error.code === '0';

    UserSession._logDebug('processUserSession -> _processResult -> loggedIn: ', UserSession.loggedIn);

    if (params.handleRedirection) {
      UserSession.userSessionRedirectionLogicHandler(verificationRes);
    }

    params.callback(verificationRes);
  }

  if (
    userSessionVerificationRes.error.code === 'USSBR' // User session should be refreshed via redirect
    || userSessionVerificationRes.error.code === 'USHE' // User session has expired
    || userSessionVerificationRes.error.code === 'ATHE' // Access token has expired
    || userSessionVerificationRes.error.code === 'ATSBR' // Access token should be refreshed
  ) { // refresh
    if (
      handleRefresh
      && !userSessionVerificationRes.error.meta.legacy
    ) {
      UserSession.refreshUserSession('UserSession.processUserSession', function (refreshUserSessionRes) {
        if (refreshUserSessionRes.error.code === '0') { // we expect all cookies to be updated
          userSessionVerificationRes = UserSession.verifyUserSession(
            cognitoCfg,
          );
        } else {
          userSessionVerificationRes = refreshUserSessionRes;

          if (typeof userSessionVerificationRes.error.meta === 'undefined') {
            userSessionVerificationRes.error.meta = {};
          }

          userSessionVerificationRes.error.meta.origin = 'refreshUserSession';
        }

        UserSession._logDebug('processUserSession -> refreshUserSession -> userSessionVerificationRes: ', userSessionVerificationRes);

        _processResult(params, userSessionVerificationRes);
      });
    } else {
      _processResult(params, userSessionVerificationRes);
    }
  } else {
    _processResult(params, userSessionVerificationRes);
  }
};

UserSession._getUserSessionCookieDebugMeta = function () {
  var output = {
    error: {
      code: '1',
      description: 'Failed performing "_getUserSessionCookieDebugMeta"'
    },
    data: {},
  };

  var userSessionDebugMetaRawStr = UserSession.getCookie('userSessionDebugMeta');

  if (
    typeof userSessionDebugMetaRawStr === 'undefined'
    || !userSessionDebugMetaRawStr
  ) {
    output.error = {
      code: 'USDMCINP',
      description: 'User session debug meta cookie is not present',
    };

    return output;
  }

  var userSessionDebugMetaRawStrDecodeRes = UserSession.getCookieValueDecodedStr(
    userSessionDebugMetaRawStr
  );

  if (userSessionDebugMetaRawStrDecodeRes.error.code !== '0') {
    output.error = {
      code: 'DFUSDMC',
      description: 'Failed decoding user session debug meta cookie',
      meta: {
        userSessionDebugMetaRawStr: userSessionDebugMetaRawStr,
        userSessionDebugMetaRawStrDecodeRes: userSessionDebugMetaRawStrDecodeRes,
      }
    };

    return output;
  }

  var userSessionDebugMetaRawJsonStr = userSessionDebugMetaRawStrDecodeRes.data;

  if (userSessionDebugMetaRawJsonStr.indexOf('{') !== 0) {
    output.error = {
      code: 'USDMCINV1',
      description: 'User session debug meta cookie is not valid',
      meta: {
        userSessionDebugMetaRawStr,
        userSessionDebugMetaRawJsonStr,
      },
    };

    return output;
  }

  var userSessionDebugMetaParseRes = Util.parseJson(
    userSessionDebugMetaRawJsonStr,
  );

  if (userSessionDebugMetaParseRes.error.code !== '0') {
    output.error = {
      code: 'FPUSDMC',
      description: 'Failed parsing user session debug meta cookie',
      meta: {
        userSessionDebugMetaRawJsonStr,
        userSessionDebugMetaParseRes,
      },
    };

    return output;
  }

  output.data = userSessionDebugMetaParseRes.data;

  output.error = { code: '0' };

  return output;
};

UserSession.setUserSessionCookieDebugMeta = function (debugMeta) {
  UserSession._logDebug('setUserSessionCookieDebugMeta -> debugMeta: ', debugMeta);

  if (!UserSession._isDebugMode()) {
    return;
  }

  var currentUts = Util.getCurrentUts();
  var cookieTtl = 7776000; // 90 days in seconds
  var cookieExpiryUts = currentUts + cookieTtl;
  var cookieExpiryDto = new Date(cookieExpiryUts * 1000);

  var getUserSessionCookieDebugMetaRes = UserSession._getUserSessionCookieDebugMeta();

  if (getUserSessionCookieDebugMetaRes.error.code === '0') {
    debugMeta.prevDebugMeta = getUserSessionCookieDebugMetaRes.data;
  }

  debugMeta.currentUts = currentUts;
  debugMeta.currentDtfs = new Date(currentUts * 1000).toString();

  var userSessionDebugMetaEncodingRes = UserSession.getCookieValueEncodedStr(
    JSON.stringify(debugMeta)
  );

  UserSession._logDebug('setUserSessionCookieDebugMeta -> userSessionDebugMetaEncodingRes: ', userSessionDebugMetaEncodingRes);

  if (userSessionDebugMetaEncodingRes.error.code === '0') {
    UserSession.resetCookie({
      name: 'userSessionDebugMeta',
      value: userSessionDebugMetaEncodingRes.data,
      maxAge: cookieTtl,
      expires: cookieExpiryDto,
    });
  }
};
// > debug

// < utils
UserSession._isDebugMode = function () {
  return Util.isDebugMode('UserSession');
}

UserSession._logDebug = function (message, data, logRawData) {
  return Util.logDebug('UserSession', message, data, logRawData);
}

UserSession._logError = function (message, data, logRawData) {
  return Util.logError('UserSession', message, data, logRawData);
}

// < cookie
UserSession.setCookie = function (prs) {
  try {
    var cookieName = prs.name;

    delete prs.name;

    var cookieVal = prs.value;

    delete prs.value;

    if (typeof prs.maxAge !== 'undefined') {
      if (typeof prs.expires === 'undefined') {
        prs.expires = new Date((Util.getCurrentUts() + prs.maxAge) * 1000);
      }

      delete prs.maxAge;
    }

    if (typeof prs.domain === 'undefined') {
      prs.domain = '.w3schools.com';
    }

    if (typeof prs.path === 'undefined') {
      prs.path = '/';
    }

    if (typeof prs.secure === 'undefined') {
      prs.secure = true;
    }

    if (typeof prs.sameSite === 'undefined') {
      prs.sameSite = 'strict';
    }

    UserSession._logDebug('setCookie -> cookieName, cookieVal, prs: ', {
      cookieName: cookieName,
      cookieVal: cookieVal,
      prs: prs,
    });

    if (UserSession._cookies === null) {
      UserSession._cookies = Cookies;
    }

    UserSession._cookies.set(cookieName, cookieVal, prs);
  } catch (exc) {
    var error = Util.getMetaPreparedFromException(exc);

    UserSession._logDebug('setCookie -> error: ', error);
  }
};

UserSession.removeCookie = function (cookieName) {
  try {
    if (UserSession._cookies === null) {
      UserSession._cookies = Cookies;
    }

    UserSession._cookies.remove(cookieName);
  } catch (exc) {
    var error = Util.getMetaPreparedFromException(exc);

    UserSession._logDebug('removeCookie -> error: ', error);
  }
};

UserSession.removeCookieNew = function (cookieName, domain, path) {
  var cookieToRemove = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=${path}; SameSite=strict`;
  document.cookie = cookieToRemove;
}

UserSession.getCookie = function (cookieName) {
  try {
    if (UserSession._cookies === null) {
      UserSession._cookies = Cookies;
    }

    return UserSession._cookies.get(cookieName);
  } catch (exc) {
    var error = Util.getMetaPreparedFromException(exc);

    UserSession._logDebug('getCookie -> error: ', error);
  }

  return;
};

UserSession._b64RemovePadding = function (str) {
  return str.replace(/={1,2}$/, '');
};

UserSession.getCookieValueEncodedStr = function (
  str,
  mode,
) {
  var output = {
    error: {
      code: '1',
      description: 'Failed performing "getCookieValueEncodedStr"',
      meta: {
        rawStr: str,
      },
    },
    data: '',
  };

  try {
    if (typeof mode === 'undefined') {
      mode = 2;
    }

    if (mode === 2) {
      output.data = UserSession._b64RemovePadding(btoa(encodeURIComponent(str)));
    } else {
      output.data = btoa(str);
    }

    output.error = { code: '0' };
  } catch (exc) {
    output.error = Util.getMetaPreparedFromException(exc);

    if (typeof output.error.meta === 'undefined') {
      output.error.meta = {};
    }

    output.error.meta.rawStr = str;

    UserSession._logError('UserSession -> getCookieValueEncodedStr -> str: ', str);
    UserSession._logError('UserSession -> getCookieValueEncodedStr -> exc: ');
    UserSession._logError(exc);
    UserSession._logError('UserSession -> getCookieValueEncodedStr -> output: ', output);
  }

  return output;
};

UserSession._b64AddPadding = function (str) {
  return str + Array((4 - str.length % 4) % 4 + 1).join('=');
};

UserSession.getCookieValueDecodedStr = (
  str,
  mode,
) => {
  var output = {
    error: {
      code: '1',
      description: 'Failed performing "getCookieValueDecodedStr"',
      meta: {
        encodedStr: str,
      },
    },
    data: '',
  };

  try {
    if (typeof mode === 'undefined') {
      mode = 2;
    }

    if (mode === 2) {
      output.data = decodeURIComponent(atob(UserSession._b64AddPadding(str)));
    } else {
      output.data = atob(str);
    }

    output.error = { code: '0' };
  } catch (exc) {
    output.error = Util.getMetaPreparedFromException(exc);

    if (typeof output.error.meta === 'undefined') {
      output.error.meta = {};
    }

    output.error.meta.encodedStr = str;

    UserSession._logError('UserSession -> getCookieValueDecodedStr -> str: ', str);
    UserSession._logError('UserSession -> getCookieValueDecodedStr -> exc: ');
    UserSession._logError(exc);
    UserSession._logError('UserSession -> getCookieValueDecodedStr -> output: ', output);
  }

  return output;
};

UserSession.resetCookie = function (prs) {
  UserSession.removeCookie(prs.name);

  UserSession.setCookie(prs);
};
// > cookie

UserSession.getUicCookie = function () {
  try {
    var cookieData = UserSession.getCookie('__c_u_i_1');

    if (typeof cookieData === 'undefined') {
      return null;
    }

    var rs = function (str) {
      return str.split('').reverse().join('');
    };

    var unpacked;
    unpacked = rs(cookieData.slice(-10) + cookieData.slice(0, -10));
    unpacked = rs(atob(unpacked + Array(((4 - (unpacked.length % 4)) % 4) + 1).join('=')));

    try {
      unpacked = JSON.parse(decodeURIComponent(unpacked));
    } catch (exc) {
      unpacked = JSON.parse(unpacked);
    }

    var nowUTS = new Date().getTime() + new Date().getTimezoneOffset() * 60000;

    if (typeof unpacked['_exp'] === 'undefined') {
      throw Error('Cookie data is not valid');
    } else if (Math.round(nowUTS / 1000) >= unpacked['_exp']) {
      throw Error('Cookie data has expired');
    }

    // delete unpacked['_exp'];

    UserSession._logDebug('getUicCookie -> output: ', unpacked);

    return unpacked;
  } catch (exc) {
    if (UserSession._isDebugMode()) {
      UserSession._logError(exc);
    }
  }

  return null;
}

UserSession.getUserSubscriptionPlan = function (fallbackResult) {
  try {
    var getUicCookieRes = UserSession.getUicCookie();

    if (getUicCookieRes) {
      return getUicCookieRes.plan;
    }
  } catch (exc) {
    if (UserSession._isDebugMode()) {
      UserSession._logError(exc);
    }
  }

  if (typeof fallbackResult === 'undefined') {
    fallbackResult = 'free';
  }

  return fallbackResult;
}

UserSession.legacyFetch = function (method, url, data, callback, config) {
  UserSession._logDebug('legacyFetch -> method, url, data, config: ', {
    method: method,
    url: url,
    data: data,
    config: config,
  });

  var xhr = new XMLHttpRequest();

  var reqRes = {
    error: {
      code: '0'
    },
    status: 0,
    dataStr: '',
  };

  var reqTimeout = setTimeout(function () {
    reqRes.error = {
      code: 'RWTE',
      description: 'Request wait time exceeded'
    };

    UserSession._logDebug('legacyFetch -> timeout -> reqRes: ', reqRes);

    callback(reqRes);
  }, UserSession._fetchTimeout);

  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      clearTimeout(reqTimeout);

      reqRes.status = this.status;
      reqRes.dataStr = this.responseText;

      if (
        typeof reqRes.status !== 'undefined'
        && reqRes.status
      ) {
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

      UserSession._logDebug('legacyFetch -> callback -> reqRes: ', reqRes);

      callback(reqRes);
    }
  };

  xhr.open(method, url, true);
  xhr.withCredentials = true;
  if (config && config.withCredentials === false) {
    xhr.withCredentials = false;
  }

  if (typeof config !== 'undefined') {
    if (
      typeof config.headers !== 'undefined'
      && config.headers.length
    ) {
      for (var headerIndex = 0; headerIndex < config.headers.length; headerIndex++) {
        var headerKeyValue = config.headers[headerIndex];

        xhr.setRequestHeader(headerKeyValue[0], headerKeyValue[1]);
      }
    }
  }

  if (
    typeof data !== 'undefined'
    && data !== null
  ) {
    if (config && !config.skipDefaultContentType) {
      xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    }
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
};

UserSession.decodeBase64UrlEncodedJwtSection = function (encodedStr) {
  var output = {
    error: {
      code: '0'
    },
    data: '',
  };

  try {
    encodedStr = encodedStr
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    output.data = decodeURIComponent(atob(encodedStr)
      .split('')
      .map(function (char) {
        return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''));
  } catch (exc) {
    output.error = Util.getMetaPreparedFromException(exc);
  }

  return output;
};
// > utils

UserSession.getSessionId = function () {
  var output = null;

  var getUserSessionCookieMetaRes = UserSession.getUserSessionCookieMeta();

  if (getUserSessionCookieMetaRes.error.code !== '0') {
    output.error = {
      code: 'USMINV',
      description: 'User session meta is not valid',
      meta: {
        legacy: false,
        getUserSessionCookieMetaRes: getUserSessionCookieMetaRes,
      }
    };

    return output;
  }

  output = getUserSessionCookieMetaRes.data.id;

  UserSession._logDebug('getSessionId: ', {
    'getUserSessionCookieMetaRes': getUserSessionCookieMetaRes,
    'output': output
  });

  return output;
};

UserSession.refreshUserinfoToken = async function (expiryUts, callback) {
  var accessToken = UserSession.getCookie('accessToken');

  if (!accessToken) {
    return;
  }

  UserSession.legacyFetch(
    'GET',
    UserSession._profileBaseUrl + '/api/user/info-cookie' + '?cookieExpiryUts=' + expiryUts,
    {},
    function (userInfoCookieFetchRes) {

      var userInfoCookieFetch = JSON.parse(userInfoCookieFetchRes.dataStr);

      if (userInfoCookieFetch.error.code !== '0') {
        output.error = userInfoCookieFetchRes.error;

        return output;
      }

      if (userInfoCookieFetch && userInfoCookieFetch.data && userInfoCookieFetch.data.userInfoCookie) {

        UserSession.setCookie({
          name: '__c_u_i_1', // userInfoCookie
          value: userInfoCookieFetch.data.userInfoCookie,
          expires: new Date(expiryUts * 1000)
        });
      }

      callback();
    },
    {
      headers: [['x-access-token', accessToken]]
    }
  );
}

UserSession.registerBackendUserSession = function ({
  accessToken,
  refreshToken,
  legacy
}, callback) {
  UserSession.legacyFetch(
    'POST',
    UserSession._profileBaseUrl + '/api/user/session',
    {
      method: 'POST',
      cognitoAccessToken: accessToken,
      cognitoRefreshToken: refreshToken,
      currentUiUts: Math.floor(new Date().getTime() / 1000),
      legacy: legacy
    },
    function (registerBackendUserSessionRes) {
      var registerBackendUserSessionRes = JSON.parse(registerBackendUserSessionRes.dataStr);

      if (registerBackendUserSessionRes && registerBackendUserSessionRes.data && registerBackendUserSessionRes.data.error && registerBackendUserSessionRes.data.error.code !== '0') {
        return;
      }
      if (registerBackendUserSessionRes !== undefined && registerBackendUserSessionRes.data !== undefined && registerBackendUserSessionRes.data.userInfoCookie !== undefined && registerBackendUserSessionRes.data.sessionId !== undefined && registerBackendUserSessionRes.data.sessionLifespan !== undefined) {

        var upsertActiveUserSessionCookiesRes = UserSession.upsertActiveUserSessionCookies(
          accessToken,
          registerBackendUserSessionRes.data.userInfoCookie,
          registerBackendUserSessionRes.data.sessionLifespan,
          registerBackendUserSessionRes.data.sessionId,
        );

        if (upsertActiveUserSessionCookiesRes && upsertActiveUserSessionCookiesRes.error && upsertActiveUserSessionCookiesRes.error.code !== '0') {
          return;
        }

        UserSession.loggedIn = true;
      }



      callback();
    },
    {
      headers: [['x-access-token', accessToken]]
    }
  )
}

UserSession.deleteUserSession = function (callback) {
  var accessToken = UserSession.getCookie('accessToken');

  if (!accessToken) {
    return;
  }

  UserSession.legacyFetch(
    'POST',
    UserSession._profileBaseUrl + '/api/user/session',
    {
      method: 'DELETE',
    },
    function (deleteUserSessionRes) {
      var deleteUserSessionRes = JSON.parse(deleteUserSessionRes.dataStr);

      // if (deleteUserSessionRes && deleteUserSessionRes.data && deleteUserSessionRes.data.error && deleteUserSessionRes.data.error.code !== '0') {
      //   return;
      // }

      UserSession.removeCookieNew('accessToken', '.w3schools.com', '/');
      UserSession.removeCookieNew('userSessionMeta', '.w3schools.com', '/');
      UserSession.removeCookieNew('userSession', '.w3schools.com', '/');
      UserSession.removeCookieNew('__c_u_i_1', '.w3schools.com', '/');
      UserSession.removeCookieNew('refreshToken', '.w3schools.com', '/');



      callback();
    },
    {
      headers: [['x-access-token', accessToken]]
    }
  );
}

UserSession.checkUserCognitoStatusByEmail = function (email, callback) {
  UserSession.legacyFetch(
    'POST',
    UserSession._profileBaseUrl + '/api/info',
    {
      email: email
    },
    function (checkUserCognitoStatusByEmailRes) {

      var checkUserCognitoStatusByEmailRes = JSON.parse(checkUserCognitoStatusByEmailRes.dataStr);

      if (checkUserCognitoStatusByEmailRes && checkUserCognitoStatusByEmailRes.data && checkUserCognitoStatusByEmailRes.data.error && checkUserCognitoStatusByEmailRes.data.error.code !== '0') {
        return;
      }

      callback(checkUserCognitoStatusByEmailRes);
    },
  );
}

UserSession.getUserAttributesViaAccessTokenCookie = function (accessToken, callback) {
  UserSession.legacyFetch(
    "POST",
    "https://cognito-idp.us-east-1.amazonaws.com/",
    {
      AccessToken: accessToken,
    },
    function (getUserAttributesViaAccessTokenCookieRes) {
       var getUserAttributesViaAccessTokenCookieRes = JSON.parse(
         getUserAttributesViaAccessTokenCookieRes.dataStr
       );

       if (
         getUserAttributesViaAccessTokenCookieRes &&
         getUserAttributesViaAccessTokenCookieRes.data &&
         getUserAttributesViaAccessTokenCookieRes.data.error &&
         getUserAttributesViaAccessTokenCookieRes.data.error.code !== "0"
       ) {
         return;
       }

       callback(getUserAttributesViaAccessTokenCookieRes);
    },
    {
      headers: [
        ["x-amz-target", "AWSCognitoIdentityProviderService.GetUser"],
        ["content-type", "application/x-amz-json-1.1"],
      ],
      withCredentials: false,
      skipDefaultContentType: true,
    }
  );
}

// < tmp
UserSession._tmpMimicExpiredAccessToken = function () {
  if (!UserSession._isDebugMode()) {
    return;
  }

  var getUserSessionCookieMetaRes = UserSession.getUserSessionCookieMeta();

  if (getUserSessionCookieMetaRes.error.code === '0') {
    var userSessionMeta = getUserSessionCookieMetaRes.data;

    userSessionMeta.atexp = userSessionMeta.iss;

    UserSession.resetCookie({
      name: 'userSessionMeta',
      value: UserSession.getCookieValueEncodedStr(
        JSON.stringify(userSessionMeta),
        1, // btoa
      ).data,
    });

    // trigger cookies ttl sync
    UserSession.changeStatusCodeInUserSessionCookies(UserSession.getCookie('userSession'));
  }
};

UserSession._tmpMimicExpiredRefreshToken = function () {
  if (!UserSession._isDebugMode()) {
    return;
  }

  var getUserSessionCookieMetaRes = UserSession.getUserSessionCookieMeta();

  if (getUserSessionCookieMetaRes.error.code === '0') {
    var userSessionMeta = getUserSessionCookieMetaRes.data;

    userSessionMeta.atexp = userSessionMeta.iss;
    userSessionMeta.rtexp = userSessionMeta.iss;

    UserSession.resetCookie({
      name: 'userSessionMeta',
      value: UserSession.getCookieValueEncodedStr(
        JSON.stringify(userSessionMeta),
        1, // btoa
      ).data,
    });

    // trigger cookies ttl sync
    UserSession.changeStatusCodeInUserSessionCookies(UserSession.getCookie('userSession'));
  }
};
// > tmp
