function highlightClassicSubNavActiveLinks(subNavId) {
  var subNavBarElm = document.getElementById(subNavId);

  if (subNavBarElm) {
    var currentUrlPathSlashesCount = window.location.pathname.split('/').length - 1;

    // we expect at least one parent directory for each topic
    if (currentUrlPathSlashesCount < 2) {
      return;
    }

    var currentUrl = 'https://' + window.location.hostname + window.location.pathname;
    var currentBaseUrlDirPath = 'https://' + window.location.hostname + '/';

    var subNavLinks = subNavBarElm.getElementsByTagName("A");

    var getDirPath = function (path) {
      var pathChunks = path.split('/');
      pathChunks.pop();
      return pathChunks.join('/');
    }

    for (var i = 0; i < subNavLinks.length; i++) {
      var subNavLinkUrl = subNavLinks[i].href;

      if (currentUrl === subNavLinkUrl) {
        subNavLinks[i].classList.add('active');
        // break;
      } else {
        var subNavLinkDirPath = getDirPath(subNavLinkUrl) + '/';

        if (currentBaseUrlDirPath === subNavLinkDirPath) {
          continue;
        }

        if (currentUrl.indexOf(subNavLinkDirPath) === 0) {
          subNavLinks[i].classList.add('active');
          // break;
        }
      }
    }
  }
}
highlightClassicSubNavActiveLinks('topnav');

function w3sFindInnerElements(parentElement, queryStr, callback) {
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

function w3sElementAddClass(elm, className, context) {
  // console.log("w3sElementAddClass: ", {
  //   elm,
  //   className,
  //   context,
  // });

  if (!elm) {
    return;
  }

  if (typeof elm.classList !== "undefined") {
    elm.classList.add(className);
  } else {
    elm.className += " " + className;
  }
};

function w3sElementRemoveClass(elm, className) {
  if (!elm) {
    return;
  }

  if (typeof elm.classList !== "undefined") {
    elm.classList.remove(className);
  } else {
    elm.className = elm.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

function w3sElementContainsClass(elm, className) {
  if (!elm) {
    return false;
  }

  if (typeof elm.classList !== "undefined") {
    return elm.classList.contains(className);
  } else {
    var classes = elm.className.split(/\s+/);
    return classes.indexOf(className) !== -1;
  }
};

function w3sElementTriggerCustomEvent(element, eventName, eventData) {
  try {
    // Check if the browser supports the CustomEvent constructor
    if (typeof CustomEvent === "function") {
      // Modern browsers
      var event = new CustomEvent(eventName, { detail: eventData });
      element.dispatchEvent(event);
    } else if (document.createEvent) {
      // For IE9+
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, eventData);
      element.dispatchEvent(event);
    } else {
      // IE8 and below
      var event = document.createEventObject();
      event.detail = eventData;
      element.fireEvent("on" + eventName, event);
    }
  } catch (exc) {
    console.error("w3sElementTriggerCustomEvent: ", exc);
  }
};

function w3sScrollToMiddle(targetElm, scrollElm) {
  if (
    !targetElm
    || !scrollElm
  ) {
    return false;
  }

  // Target element's top position relative to its parent (scrollElm)
  var teTop = targetElm.offsetTop;
  var teHeight = targetElm.offsetHeight;

  // Height of the scrollable element
  var seHeight = scrollElm.clientHeight;

  // Calculate the middle position of the target element
  var teMiddle = teTop + (teHeight / 2);

  // Calculate the new scroll position to bring the target element to the middle of the scrollable element
  var newScrollTop = teMiddle - (seHeight / 2);

  // Apply the new scroll position to the scrollable element
  scrollElm.scrollTop = newScrollTop;

  return true;
};

function open_menu() {
  var x, m;
  m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));
  if (m && m.style.display == "block") {
    close_menu();
    w3sElementTriggerCustomEvent(m, 'w3sSideNavClose', null);
  } else {
    w3_close_all_nav();  
    if (m) {
      m.style.display = "block";

      if (m.getAttribute("data-scrolled") !== "true") {
        sidemenuitemintoview();
      }
    }

    if (document.getElementsByClassName) {
      x = document.getElementsByClassName("chapter")
      for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
      }
      x = document.getElementsByClassName("nav")
      for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
      }
      x = document.getElementsByClassName("sharethis")
      for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
      }
    }
    fix_sidemenu();
    w3sElementTriggerCustomEvent(m, 'w3sSideNavOpen', null);
  }
}
function close_menu() {
  var m;
  m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));
  if (m) m.style.display = "none";  
  if (document.getElementsByClassName) {
    x = document.getElementsByClassName("chapter")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }
    x = document.getElementsByClassName("nav")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }
    x = document.getElementsByClassName("sharethis")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }            
  }
}
if (window.addEventListener) {
  window.addEventListener("scroll", function () {fix_sidemenu(); });
  window.addEventListener("resize", function () {fix_sidemenu(); });  
  window.addEventListener("touchmove", function () {fix_sidemenu(); });  
  window.addEventListener("load", function () {fix_sidemenu(); });
} else if (window.attachEvent) {
  window.attachEvent("onscroll", function () {fix_sidemenu(); });
  window.attachEvent("onresize", function () {fix_sidemenu(); });  
  window.attachEvent("ontouchmove", function () {fix_sidemenu(); });
  window.attachEvent("onload", function () {fix_sidemenu(); });
}
function fix_sidemenu() {
  const fw = document.getElementById("footerwrapper");
  if (fw) {
    const iw = window.innerWidth;    
    if (iw < 992) {
      const lmi = document.getElementById("leftmenuinner");
      if (lmi) {lmi.style.height = '';}
    } else {
      const ch = fw.getBoundingClientRect().top;
      if (ch) {
        let h = Math.min(window.innerHeight, ch);
        h = Math.max(h, 0);
        const lmi = document.getElementById("leftmenuinner");
        if (lmi) {lmi.style.height = h + "px";}
      }
    }
  }
  const srb = document.getElementById("scroll_right_btn");
  if (srb) {
    let winwidth = document.documentElement.clientWidth;
    let a = winwidth - 1750;
    let b;
    if (a <= 0) {
      b = 0;
    } else {
      b = a / 2;
    }
    srb.style.right = b + "px";
  }
    
return false;
  var w, top;
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  top = scrolltop()    
/*  if (w < 993 && w > 600) {
    if (top == 0) {
      document.getElementById("sidenav").style.top = "144px";
    }
    if (top > 0 && top < 100) {
      document.getElementById("sidenav").style.top = (144 - top) + "px";      
    }
    if (top > 100) {
      document.getElementById("sidenav").style.top = document.getElementById("topnav").offsetHeight + "px";
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";    
      document.getElementById("topnav").style.top = "0";
    } else {
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
    }
    document.getElementById("leftmenuinner").style.paddingTop = "0";
  } else {*/


    if (top == 0) {
      document.getElementById("sidenav").style.top = "118px";      
    }
    if (top > 0 && top < 73) {
      document.getElementById("sidenav").style.top = (118 - top) + "px";      
    }
    if (top > 73) {
      document.getElementById("sidenav").style.top = "44px";
      if (w > 992) {document.getElementById("leftmenuinner").style.paddingTop = "44px";}
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";
      document.getElementById("topnav").style.top = "0";
      document.getElementById("myAccordion").style.paddingTop = "44px";
    } else {
      if (w > 992) {
        document.getElementById("leftmenuinner").style.paddingTop = (118 - top) + "px";
      } else { //ELSEN ER NY
        document.getElementById("leftmenuinner").style.paddingTop = 0;
      }
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("myAccordion").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
    }
/*  }*/
}

function sidemenuitemintoview() {
  var a, b;
  a = document.getElementById("leftmenuinnerinner");
  if (!a || !a.getElementsByClassName) {return false;}
  b = a.getElementsByClassName("active");
  if (b.length < 1) {return false;}

  var o = 0; // active element max offset top
  var e = null; // active element ref with max offset top

  for (var li = 0; li < b.length; li++) {
    var le = b[li];

    if (le.offsetTop > o) {
      o = le.offsetTop;

      e = le;
    }
  }

  var s = w3sScrollToMiddle(e, a);

  var m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));

  if (m) {
    m.setAttribute("data-scrolled", s ? "true" : "false");
  }
};

function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}

function xxxchangecodetheme() {
  var cc = document.body.className;
  if (cc.indexOf("darktheme") > -1) {
    document.body.className = cc.replace("darktheme", "");
    localStorage.setItem("preferredmode", "light");
  } else {
    document.body.className += " darktheme";
    localStorage.setItem("preferredmode", "dark");
  }
}
function changecodetheme(n) {
  var cc = document.body.className;
  if (cc.indexOf("darktheme") > -1) {
    document.body.className = cc.replace("darktheme", "");
    document.body.className = document.body.className.replace("  ", " ");
    localStorage.setItem("preferredmode", "light");
  } else {
    document.body.className += " darktheme";
    document.body.className = document.body.className.replace("  ", " ");    
    localStorage.setItem("preferredmode", "dark");
  }
  if (n == 2) {
    cc = document.body.className;
    if (cc.indexOf("darkpagetheme") > -1) {
      document.body.className = cc.replace("darkpagetheme", "");
      document.body.className = document.body.className.replace("  ", " ");    
      localStorage.setItem("preferredpagemode", "light");
    } else {
      document.body.className += " darkpagetheme";
      document.body.className = document.body.className.replace("  ", " ");    
      localStorage.setItem("preferredpagemode", "dark");
    }
  }
}

function click_login_btn() {
  w3_open_nav("login");
}

function w3_close_all_nav() {
  w3_close_all_topnav();
  close_menu();
}

(function () {
  var x, y, i, a, aa, b, bb, c, cc, d, dd, m, tn, oa, ohe, obe;
  m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));
  if (m) {
    x = m.getElementsByTagName("A");
    dd = document.location.href;
    if (dd.indexOf("quiztest") > -1) {
      d = dd;
    } else {
      d = dd.split('?')[0]; // added split to show active regardless of parameters
    }
    for (i = 0; i < x.length; i++) {
      if (dd.indexOf("quiztest") > -1) {
        aa = x[i].href;
        //console.log("Haystack: " + d);
        //console.log("Needle: " + aa);
      } else {
        aa = x[i].href.split('?')[0];  // added split to show active regardless of parameters
      }
      bb = false;
      if (d.substr(-1, 1) == "/" && (aa.indexOf("default.asp") > -1 ||  aa.indexOf("index.php") > -1)) bb = true;
      if (d.indexOf(aa) >= 0 || bb) {
        w3sElementAddClass(x[i], "active");
        y = x[i].nextElementSibling;
        if (y && (y.className.indexOf("ref_overview") > -1 || y.className.indexOf("tut_overview") > -1)) {
          ohe = x[i]; // overview header element
          obe = y; // overview body element
          y.style.display = "block";
          w3sElementAddClass(x[i], "active_overview");

          oa = y.getElementsByTagName("a")[0];

          if (oa && oa.href.split('?')[0].indexOf(aa) >= 0) {
            w3sElementAddClass(oa, "active");
          }

          if (x[i].addEventListener) {
            cc = true;
            var lessonGroupToggleElm = x[i];

            lessonGroupToggleElm.addEventListener("click", function () {
              if (cc == true) {
                w3sElementRemoveClass(lessonGroupToggleElm, "open");
                w3sElementAddClass(lessonGroupToggleElm, "closed");
                y.style.display = "none";
                event.preventDefault();
                cc = false;
              } else {
                w3sElementRemoveClass(lessonGroupToggleElm, "closed");
                w3sElementAddClass(lessonGroupToggleElm, "open");
                y.style.display = "block";
                cc = true;
                event.preventDefault();
              }
            });
          }
        } else if (x[i].parentElement.className.indexOf("ref_overview") > -1) {
          x[i].parentElement.style.display = "block";
          w3sElementAddClass(x[i].parentElement.previousElementSibling, "active");
          w3sElementAddClass(x[i].parentElement.previousElementSibling, "activesub");
        } else if (x[i].parentElement.className.indexOf("tut_overview") > -1) {
          x[i].parentElement.style.display = "block";
          w3sElementAddClass(x[i].parentElement.previousElementSibling, "active");
          w3sElementAddClass(x[i].parentElement.previousElementSibling, "active_overview");
        }
        break;
      } else if (d.indexOf("/tags/att_") > -1) {
         c = d.substring(d.indexOf("/tags/att_") + 10, d.lastIndexOf("_"));
         if (x[i].href == d.substr(0, d.indexOf("/tags/")) + "/tags/tag_" + c + ".asp") {
           w3sElementAddClass(x[i], "active");
         }
      } else if (d.indexOf("/howto/default_page") > -1) {
         if (x[i].href.indexOf("default.asp") > -1) {
           w3sElementAddClass(x[i], "active");
         }
      }
    }

    if (ohe && obe) {
      var activeOverviewElementLinks = w3sFindInnerElements(obe, "a.active");

      if (activeOverviewElementLinks.length > 0) {
        w3sElementAddClass(ohe, "active-links-present");
        w3sElementAddClass(obe, "active-links-present");
      } else {
        w3sElementAddClass(ohe, "active-links-absent");
        w3sElementAddClass(obe, "active-links-absent");
      }
    }

    sidemenuitemintoview();
  }
  tn = (document.getElementById("topnav") || document.getElementById("subtopnav"));
  x = tn.getElementsByTagName("A");
  for (i = 0; i < x.length; i++) {
    a = document.location.pathname;
    b = x[i].pathname;
    if ((x[i].parentNode.tagName == "LI" || (a != "/" && x[i].parentNode.className.indexOf("w3-bar") > -1) && a.substr(0, a.indexOf("/",1)) ==  b.substr(0, b.indexOf("/",1)))) {
      w3sElementAddClass(x[i], "active");
    }
  }
  if (window.addEventListener) { 
    document.getElementById("main").addEventListener("click", w3_close_all_nav, true);
    if (m) m.addEventListener("click", w3_close_all_topnav, true);
    document.getElementById("right").addEventListener("click", w3_close_all_nav, true);
    document.getElementById("main").addEventListener("wheel", w3_close_all_nav, true);
    document.getElementById("main").addEventListener("touchstart", w3_close_all_nav, true);
  } else if (window.attachEvent) {         
    document.getElementById("main").attachEvent("onclick", w3_close_all_nav);
    if (m) m.attachEvent("onclick", w3_close_all_topnav);
    document.getElementById("right").attachEvent("onclick", w3_close_all_nav);
  }
  if ('ontouchstart' in window || 'onmsgesturechange' in window) {
    if (document.getElementById("leftmenuinnerinner")) document.getElementById("leftmenuinnerinner").style.overflowY = "scroll";
  }

  MyLearning.uiSidenavPatch();
})();
(function () {
  var a, b, c, cc, d, e, l, ll, i, j, r, n;
  a = document.getElementsByClassName("w3-example");
  l = a.length;
  for (i = 0; i < l; i++) {
    r = [];
    b = a[i].querySelectorAll("[data-tab-header]");
    ll = b.length;
    n = 0;
    for (j = 0; j < ll; j++) {
      if (b[j].getAttribute("data-active-tab") == "true") n = j;
      r.push(b[j]);
    }
    ll = r.length;
    if (ll > 0) {
      c = document.createElement("DIV");
      c.classList.add("w3-example-tabs")
      d = document.createElement("DIV");
      d.classList.add("w3-example-tabs-header-container");
      for (j = 0; j < ll; j++) {
        e = document.createElement("DIV");
        e.classList.add("w3-example-tab-header")
        if (j == n) {
          e.classList.add("active-tab");
          r[n].style.display = "block";
        }
        e.innerHTML = b[j].getAttribute("data-tab-header");
        e.addEventListener("click", activate_example_tab);
        d.appendChild(e);
      }
      c.appendChild(d);
      a[i].insertBefore(c, a[i].querySelectorAll("[data-tab-header]")[0]);
    }
  }
})();
(function () {
  var exercise = document.getElementById("exercisecontainer")
  if (exercise) {
    var src = exercise.getAttribute("src");
    var extensions = (exercise.getAttribute("data-extensions") || "asp");
    var s = document.createElement("script");
    s.src = src;
    document.getElementById("exercisecontainer").appendChild(s);
    var filename = src.replace(".js", "1");
    window.addEventListener("load", load_quiz);
  }
  function insert_exercise() {
    var qobj, l, i = 0, a = "";
    qobj = qobjects[0];
    if (qobj.draganddroptext) {
      var x, l, i = 0, a = "", b, cl = 2, ddquestion = qobj.draganddropquestion, ddtext = qobj.draganddroptext, resttxt;
      a = "<h2>Exercise<span class='questionmark w3-tooltip'><span style='display:block;text-align:left;'>?</span>";
      a += "<span class='w3-text' style='padding:0 20px 30px 20px'><b>What is this?</b><br>";
      a += "Test your skills by answering a few questions about the topics of this page</span></span></h2>";
      a += "<div id='qobj_question'></div>";
      a += "<div id='qobj_drag_and_drop'></div>";
      a += "<div id='qobj_code_area'></div>";
      document.getElementById("exercisecontainer").innerHTML = a;
      a = "";
      for (i = 0; i < qobj.options.length; i++) {
        a += "<div";
         a += " class='dragoptioncontainer'";
         a += " id='dragoptioncontainer" + i + "'";       
         a += " ondragenter='handleDragBackEnter(this, " + i + ")'";
         a += " ontouchmove='handleDragBackEnter(this, " + i + ")'";       
         a += " ondragleave='handleDragBackLeave(this)'";
         a += " ondrop='handleDragBackDrop(this)'";
         a += " ontouchleave='handleDragBackLeave(this)'";
         a += " ontouchend='handleDragBackDrop(this)'";
         a += ">";
          a += "<div";
           a += " class='dragoption'";
           a += " id='dragoption" + i + "'";
           a += " draggable='true'";
           a += " ondragstart='handleDragStart(this, " + i + ")'";
           a += " ondragend='handleDragEnd(this, " + i + ")'";
           a += " onclick='click_drag_option(" + i + ")'";
           a += " ontouchstart='handleDragStart(this, " + i + ")'";
           a += " ontouchmove='touch_ttt_move(event)'";
           a += " ontouchend='handleDragEnd(this, " + i + ")'";
           a += " style='touch-action: none;'>";
        a += qobj.options[i];
        a += "</div></div>";
      }
      document.getElementById("qobj_code_area").innerHTML = "<div id='qobj_drag_and_drop_options'>" + a + "</div>";
      x = document.getElementsByClassName("dragoption");
      l = x.length;
      for (i = 0; i < l; i++) {
        if (x[i].innerText.length > cl) cl = x[i].innerText.length;
      }
      cl = cl + 4;
      resttxt = ddtext;
      i = -1;
      while (resttxt.indexOf("___") > -1) {
        ddanswers.push(-1);
        i++;
        a = "<span";
         a += " class='ddcontainer'";
         a += " id='ddcontainer" + i + "'";
         a += " style='width:" + cl + "ch;'";
         a += " ondragenter='handleDragEnter(this, " + i + ")'";
         a += " ondragleave='handleDragLeave(this)'";
         a += " ondrop='handleDragDrop(this)'";
         a += " ontouchleave='handleDragLeave(this)'";
         a += " ontouchend='handleDragDrop(this)'"
         a += ">";
          a += " <span";
           a += " class='ddanswer'";
           a += " id='ddanswer" + i + "'";
           a += " onclick='remove_drag_option(" + i + ")'";
           a += " draggable='true'";
           a += " ondragstart='handleDragBackStart(this, " + i + ")'";
           a += " ondragend='handleDragBackEnd(this, " + i + ")'";
           a += " ondtouchstart='handleDragBackStart(this, " + i + ")'";
           a += " ontouchmove='touch_ttt_move_back(this, event)'";         
           a += " ontouchend='handleDragBackEnd(this, " + i + ")'";
           a += " style='touch-action: none;'>";         
        a += "</span></span>";
        ddtext = ddtext.replace("___", a);
        resttxt = resttxt.substr(resttxt.indexOf("___") + 3);
      }      
      document.getElementById("qobj_drag_and_drop").innerHTML = ddtext;
      document.getElementById("qobj_drag_and_drop").style.display = "block";
      document.getElementById("qobj_question").innerHTML = ddquestion;
      a = "<form action='exercise." + extensions + "?x=" + filename + "' method='post' target='_blank' rel='opener'>";
      a += "<input type='hidden' id='formanswer' name='formanswer'>";
      a += "<br><br><button type='submit' class='ws-btn' onclick='fill_dd_formanswer()'>Submit Answer &raquo;</button></form>";
      document.getElementById("exercisecontainer").innerHTML += a;
      document.getElementById("exercisecontainer").addEventListener("dragover", (event) => {
        event.preventDefault();
      });
    } else {
      a = "<h2>Exercise<span class='questionmark w3-tooltip'><span style='display:block;text-align:left;'>?</span><span class='w3-text' style='padding:0 20px 30px 20px'><b>What is this?</b><br>Test your skills by answering a few questions about the topics of this page</span></span></h2>";
      a += "<p>" + qobj.question + "</p><br>";
      a += "<form action='exercise." + extensions + "?x=" + filename + "' method='post' target='_blank' rel='opener'>";
      l = qobj.options.length;
      for (i = 0; i < l; i++) {
        a += "<div class='quizoption'>";
        a += "<input type='radio' name='quizoption' id='quizoption" + i + "' value='" + i + "'>";
        a += "<label for='quizoption" + i + "'>" + qobj.options[i] + "</label>";
        a += "</div>";
      }
      a += "<br><button type='submit' class='ws-btn'>Submit Answer &raquo;</button>";
      document.getElementById("exercisecontainer").innerHTML = a;
    }
  }
  function click_option(event) {
    var a, x = event.srcElement;
    if (x.tagName != "DIV") return false;
    a = x.getElementsByTagName("INPUT")[0];
    a.checked = true;  
  }
  function load_quiz() {
    insert_exercise()
    var x, l, i = 0;
    x = document.getElementsByClassName("quizoption");
    l = x.length;
    for (i = 0; i < l; i++) {
      x[i].addEventListener("click", click_option);
    }
  }
})();
function fill_dd_formanswer() {
  document.getElementById("formanswer").value = ddanswers;
}
var current_mode = "question";
var ttt_option_bottom = "none";
var ttt_option_top = "none";
var ttt_container_bottom = "none";
var ttt_container_top = "none";
var ttt_container_from_top = "none";
var active_ddcontainer = 0;
var active_dragback_option = -1;
var ddanswers = [];
function set_no_dd() {
  ttt_option_bottom = "none";
  ttt_option_top = "none";
  ttt_container_bottom = "none";
  ttt_container_top = "none";
  ttt_container_from_top = "none";
}
//document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
function touch_ttt_move(e) {
  var x, y, z, n;
  x = e.touches[0].pageX;
  y = e.touches[0].pageY;  
  z = document.elementFromPoint(x, y);
  if (z.id && z.id.indexOf("ddcontainer") > -1) {
    n = z.id.substr(11);
    active_ddcontainer = n;
    ttt_container_top = n;
  }
}
function touch_ttt_move_back(elmnt, e) {
  var x, y, z, n = -1, m = -1;
  x = e.touches[0].pageX;
  y = e.touches[0].pageY;  
  z = document.elementFromPoint(x, y);
  if (z.id && z.id.indexOf("dragoptioncontainer") > -1) {
    n = z.id.substr(19);
    ttt_container_bottom = n;
  } else if (z.id && z.id.indexOf("ddcontainer") > -1) {
    n = z.id.substr(11);
    m = elmnt.id.substr(8);
    active_ddcontainer = n;
    ttt_container_top = m;
    ttt_container_from_top = m;
    ttt_option_top = ddanswers[m];
  }
}
function remove_drag_option(i) {
  var a, x = document.getElementById("ddanswer" + i);
  x.style.visibility = "hidden";
  a = document.getElementsByClassName("dragoption")[ddanswers[i]];
  ddanswers[i] = -1;
  a.style.visibility = "visible";
  set_active_ddcontainer();
}
function click_drag_option(i) {
  if (active_ddcontainer == -1) return false;
  var a, x = document.getElementById("dragoption" + i);
  ddanswers[active_ddcontainer] = i;
  a = document.getElementsByClassName("ddanswer")[active_ddcontainer];
  a.style.visibility = "visible";
  a.innerHTML = x.innerHTML;
  x.style.visibility = "hidden";
  set_active_ddcontainer();
}
function set_active_ddcontainer() {
  var i;
  for (i = 0; i < ddanswers.length; i++) {
    if (ddanswers[i] == -1) {
      active_ddcontainer = i;
      return false;
    }
  }
  active_ddcontainer = -1;
}
function handleDragStart(x, i) {
  ttt_option_bottom = i;
  ttt_container_bottom = i;
  x.style.opacity = '0.4';
  event.dataTransfer.dropEffect = "move";
}
function handleDragBackStart(x, i) {
  ttt_container_from_top = i;
  ttt_option_top = ddanswers[i];
  active_dragback_option = i;
  x.style.opacity = '0.4';
  event.dataTransfer.dropEffect = "move";
}
function handleDragEnd(x, i) {
  x.style.opacity = '1';
  if (ttt_container_top == "none") {
  } else {
    if (ddanswers[ttt_container_top] == -1) click_drag_option(i);
  }
  set_active_ddcontainer();
  set_no_dd();
}
function handleDragBackEnd(x, i) {
  x.style.opacity = '1';
  if (ttt_container_bottom == "none" && ttt_container_top == "none") {
  } else if (ttt_container_bottom != "none") {
    remove_drag_option(i);  
    document.getElementById("dragoption" + ttt_container_bottom).style.opacity = '1'; 
  } else if (ttt_container_top != "none") {
    if (ddanswers[ttt_container_top] == -1) {
      click_drag_option(ttt_option_top);
      document.getElementById("ddanswer" + ttt_container_from_top).style.visibility = "hidden";
      ddanswers[ttt_container_from_top] = -1;
    }
  }
  set_active_ddcontainer();
  set_no_dd();
}
function handleDragEnter(x, i) {
  ttt_container_top = i;
  active_ddcontainer = i;
  if ((ttt_container_from_top != ttt_container_top) && ddanswers[ttt_container_top] == -1) {
    x.style.outline = '1px solid #aaaaaa';
  }
}
function handleDragBackEnter(x, i) {
  if (ttt_option_top == "none") return false;
  ttt_container_bottom = i;
  var dropcontainertext = document.getElementById("dragoption" + i).innerHTML;
  var dropoptiontext = document.getElementById("ddanswer" + active_dragback_option).innerHTML;  
  if (dropcontainertext == dropoptiontext) {
    x.style.outline = '1px solid #aaaaaa';
  }
}
function handleDragLeave(x) {
  ttt_container_top = "none";
  x.style.outline = 'none';
}
function handleDragBackLeave(x) {
  ttt_container_bottom = "none";
  x.style.outline = 'none';
}
function handleDragDrop(x) {
  x.style.outline = 'none';
}
function handleDragBackDrop(x) {
  x.style.outline = 'none';
}
function activate_example_tab(event) {
  var a, b, c, d = -1, l, i;
  a = event.target;
  b = a.parentNode.parentNode.parentNode;
  c = b.querySelectorAll("[data-tab-header]");
  l = c.length;
  for (i = 0; i < l; i++) {
    c[i].style.display = "none";
    if (b.getElementsByClassName("w3-example-tab-header")[i]) b.getElementsByClassName("w3-example-tab-header")[i].classList.remove("active-tab");
    if (a.innerText == c[i].getAttribute("data-tab-header")) d = i;
  }
  c[d].style.display = "block";
  a.classList.add("active-tab");
}

// function gTra(el) {
//   var gtra = document.createElement('script'); gtra.id = 'gTra'; gtra.type = 'text/javascript'; gtra.async = true;
//   gtra.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//   var el = document.getElementById('gTra');
//   if (el == null) {
//     var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gtra, s);
//   }
//   open_translate(el);
// };
function searchfield_focus(obj) {
  obj.style.color = "";
  obj.style.fontStyle = "";
  if (obj.value == "Search w3schools.com") {obj.value = "";}
}
var addr = document.location.href;
function displayError() {
//  document.getElementById("err_url").value = addr;
  document.getElementById("err_form").style.display = "block";
//  document.getElementById("err_email").focus();
//  hideSent();
}
function hideError() {
  document.getElementById("err_form").style.display = "none";
}
function reportError() {
  if (document.getElementById("err_message").style.display == "block") {
    document.getElementById("err_message").style.display = "none";
  } else {
    document.getElementById("err_message").style.display = "block";
  }
}
function hideSent() {
  document.getElementById("err_sent").style.display = "none";
}
function sendErr() {
  var xmlhttp;
  var err_url = document.getElementById("err_url").value;
  var err_email = document.getElementById("err_email").value;
  var err_desc = document.getElementById("err_desc").value;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("POST", "/err_sup.asp", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("err_url=" + err_url + "&err_email=" + err_email + "&err_desc=" + escape(err_desc));
  document.getElementById("err_desc").value = "";
  hideError();
  document.getElementById("err_sent").style.display = "block";
}
function clickFBLike() {
  document.getElementById("fblikeframe").style.display = 'block';
  document.getElementById("popupDIV").innerHTML = "<iframe src='/fblike.asp?r=" + Math.random() + "' frameborder='no' style='height:200px;width:250px;'></iframe><br><button onclick='hideFBLike()' class='w3-btn w3-black'>Close</button>";
}
function hideFBLike() {
  document.getElementById("fblikeframe").style.display = 'none';
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: false,
    gaTrack: true,
    gaId: 'UA-3855518-1',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
function printPage() {
  var content = document.getElementById("main").innerHTML;
  var css = "", i, j, c = document.getElementById("main").cloneNode(true);
  for (i = 0; i < c.childNodes.length; i++) {
    if (c.childNodes[i].nodeType == 1 && (c.childNodes[i].getAttribute("id") == "mainLeaderboard" || c.childNodes[i].getAttribute("id") == "midcontentadcontainer")) {
      c.removeChild(c.childNodes[i]);
      content = c.innerHTML;
    }
  }
  var head = document.getElementsByTagName("head")[0].innerHTML;
  var myWindow=window.open('','','');
  myWindow.document.write("<html><head>"+head+"<style>body{padding:15px;}@media print {.printbtn {display:none;}}</style></head><body><button class='printbtn' onclick='window.print()'>Print Page</button><br><br>"+content+"<p><a href='/about/about_copyright.asp'>Copyright 1999-2019</a> by Refsnes Data. All Rights Reserved.</p></body></html>");
}

/* w3codecolor ver 1.32 by w3schools.com */
(
function w3CodeColor() {
  var x, i, j, k, l, modes = ["html", "js", "java", "css", "sql", "python"];
  if (!document.getElementsByClassName) {return;}
  k = modes.length;
  for (j = 0; j < k; j++) {
    x = document.getElementsByClassName(modes[j] + "High");
    l = x.length;
    for (i = 0; i < l; i++) {
//      if (modes[j] == "react") {
//        codemirrorize(x[i]);
//      } else {
        x[i].innerHTML = w3CodeColorize(x[i].innerHTML + " ", modes[j]);
//      }
    }
}
/*
function codemirrorize(x) {
  var txt = x.innerText;
  x.innerHTML = "";
  var myCodeMirror = CodeMirror(x, 
    {
      mode: "jsx",
      value: txt,
      readOnly: true
    });

}
*/
function w3CodeColorize(x, lang) {
  var tagcolor = "#999"; //mediumblue
  var tagnamecolor = "#905"; //brown
  var attributecolor = "#005cc5"; //red
  var attributevaluecolor = "green"; //mediumblue
  var commentcolor = "slategray"; //green
  var doctypecolor = "slategray"; //green
  var cssselectorcolor = "#07a"; //brown
  var csspropertycolor = "#d73a49"; //red
  var csspropertyvaluecolor = "green"; //"mediumblue"
  var cssdelimitercolor = "#999"; //black
  var cssimportantcolor = "#d73a49"; //"#DD4A68"; //red

  var tagcolor = "#999"; //mediumblue
  var tagnamecolor = "#905"; //brown
  var attributecolor = "green"; //"#690" //red
  var attributevaluecolor = "#005cc5"; //mediumblue
  var commentcolor = "slategray"; //green
  var cssselectorcolor = "green"; //brown
  var csspropertycolor = "#905"; //red
  var csspropertyvaluecolor = "black"; //"mediumblue"
  var cssdelimitercolor = "#999"; //black
  var cssimportantcolor = "#d73a49"; //red

  var cssselectorcolor = "#905"; //brown
  var csspropertycolor = "#d73a49"; //red
  var csspropertyvaluecolor = "#005cc5"; //"#07a"; //"mediumblue"
  var cssdelimitercolor = "#999"; //black
  var cssimportantcolor = "#d73a49"; //red
  
  var doctypecolor = "slategray"; //green

  var jscolor = "black";
  var jskeywordcolor = "#005cc5"; //"mediumblue";
  var jsstringcolor = "green"; //"brown";
  var jsstringtempcolor = "#f50"; //orange
  var jsregexpcolor = "#e90"; //"#f50"; //orange  
  var jsnumbercolor = "#905"; //red
  var jspropertycolor = "black";

  var javacolor = "black";
  var javakeywordcolor =  "#005cc5"; //"mediumblue";
  var javastringcolor = "green"; //"brown";
  var javanumbercolor = "#905"; //"red";
  var javapropertycolor = "black";

  var kotlincolor = "black";
  var kotlinkeywordcolor = "mediumblue";
  var kotlinstringcolor = "brown";
  var kotlinnumbercolor = "red";
  var kotlinpropertycolor = "black";

  var phptagcolor = "#d73a49"; //red
  var phpcolor = "black";
  var phpkeywordcolor = "#005cc5"; //mediumblue
  var phpglobalcolor = "goldenrod";
  var phpstringcolor = "green"; //"brown
  var phpnumbercolor = "#905"; //red

  var pythoncolor = "black";
  var pythonkeywordcolor = "#005cc5"; //mediumblue
  var pythonstringcolor = "green" //"#22863a"; //brown
  var pythonnumbercolor = "#905"; //red

  var angularstatementcolor = "#d73a49"; //red

  var sqlcolor = "black";
  var sqlkeywordcolor = "#005cc5"; //mediumblue
  var sqlstringcolor = "green"; //brown
  var sqlnumbercolor = "#905"; //

  if (!lang) {lang = "html"; }
  if (lang == "html") {return htmlMode(x);}
  if (lang == "css") {return cssMode(x);}
  if (lang == "js") {return jsMode(x);}
  if (lang == "java") {return javaMode(x);}
  if (lang == "kotlin") {return kotlinMode(x);}
  if (lang == "php") {return phpMode(x);}
  if (lang == "sql") {return sqlMode(x);}  
  if (lang == "python") {return pythonMode(x);}
  return x;
  function extract(str, start, end, func, repl) {
    var s, e, d = "", a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end, s);
      if (e == -1) {e = str.length;}
      if (repl) {
        a.push(func(str.substring(s, e + (end.length))));      
        str = str.substring(0, s) + repl + str.substr(e + (end.length));
      } else {
        d += str.substring(0, s);
        d += func(str.substring(s, e + (end.length)));
        str = str.substr(e + (end.length));
      }
    }
    this.rest = d + str;
    this.arr = a;
  }
  function htmlMode(txt) {
    var rest = txt, done = "", php, comment, dctype, angular, startpos, endpos, note, i;
    php = new extract(rest, "&lt;\\?php", "?&gt;", phpMode, "W3PHPPOS");
    rest = php.rest;
    comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "W3HTMLCOMMENTPOS");
    rest = comment.rest;
    dctype = new extract(rest, "&lt;!DOCTYPE", "&gt;", doctypeMode, "W3HTMLDOCTYPEPOS");
    rest = dctype.rest;
    while (rest.indexOf("&lt;") > -1) {
      note = "";
      startpos = rest.indexOf("&lt;");
      if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {note = "css";}
      if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {note = "javascript";}        
      endpos = rest.indexOf("&gt;", startpos);
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += tagMode(rest.substring(startpos, endpos + 4));
      rest = rest.substr(endpos + 4);
      if (note == "css") {
        endpos = rest.indexOf("&lt;/style&gt;");
        if (endpos > -1) {
          done += cssMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
      if (note == "javascript") {
        endpos = rest.indexOf("&lt;/script&gt;");
        if (endpos > -1) {
          done += jsMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
    }
    rest = done + rest;
    angular = new extract(rest, "{{", "}}", angularMode);
    rest = angular.rest;
    for (i = 0; i < dctype.arr.length; i++) {
      rest = rest.replace("W3HTMLDOCTYPEPOS", dctype.arr[i]);
    }
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3HTMLCOMMENTPOS", comment.arr[i]);
    }
    for (i = 0; i < php.arr.length; i++) {
        rest = rest.replace("W3PHPPOS", php.arr[i]);
    }
    return rest;
  }
  function tagMode(txt) {
    var rest = txt, done = "", startpos, endpos, result;
    while (rest.search(/(\s|<br>)/) > -1) {    
      startpos = rest.search(/(\s|<br>)/);
      endpos = rest.indexOf("&gt;");
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeMode(rest.substring(startpos, endpos));
      rest = rest.substr(endpos);
    }
    result = done + rest;
    result = "<span class='tagcolor' style=color:" + tagcolor + ">&lt;</span>" + result.substring(4);
    if (result.substr(result.length - 4, 4) == "&gt;") {
      result = result.substring(0, result.length - 4) + "<span class='tagcolor' style=color:" + tagcolor + ">&gt;</span>";
    }
    return "<span class='tagnamecolor' style=color:" + tagnamecolor + ">" + result + "</span>";
  }
  function attributeMode(txt) {
    var rest = txt, done = "", startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
    while (rest.indexOf("=") > -1) {
      endpos = -1;
      startpos = rest.indexOf("=");
      singlefnuttpos = rest.indexOf("'", startpos);
      doublefnuttpos = rest.indexOf('"', startpos);
      spacepos = rest.indexOf(" ", startpos + 2);
      if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
        endpos = rest.indexOf(" ", startpos);      
      } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
      } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
      }
      if (!endpos || endpos == -1 || endpos < startpos) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeValueMode(rest.substring(startpos, endpos + 1));
      rest = rest.substr(endpos + 1);
    }
    return "<span class='attributecolor' style=color:" + attributecolor + ">" + done + rest + "</span>";
  }
  function attributeValueMode(txt) {
    return "<span class='attributevaluecolor' style=color:" + attributevaluecolor + ">" + txt + "</span>";
  }
  function angularMode(txt) {
    return "<span class='angularstatementcolor' style=color:" + angularstatementcolor + ">" + txt + "</span>";
  }
  function commentMode(txt) {
    return "<span class='commentcolor' style=color:" + commentcolor + ">" + txt + "</span>";
  }
  function doctypeMode(txt) {
    return "<span class='doctypecolor' style=color:" + doctypecolor + ">" + txt + "</span>";
  }
  function cssMode(txt) {
    var rest = txt, done = "", s, e, comment, i, midz, c, cc;
    comment = new extract(rest, /\/\*/, "*/", commentMode, "W3CSSCOMMENTPOS");
    rest = comment.rest;
    while (rest.search("{") > -1) {
      s = rest.search("{");
      midz = rest.substr(s + 1);
      cc = 1;
      c = 0;
      for (i = 0; i < midz.length; i++) {
        if (midz.substr(i, 1) == "{") {cc++; c++}
        if (midz.substr(i, 1) == "}") {cc--;}
        if (cc == 0) {break;}
      }
      if (cc != 0) {c = 0;}
      e = s;
      for (i = 0; i <= c; i++) {
        e = rest.indexOf("}", e + 1);
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s + 1);
      done += cssPropertyMode(rest.substring(s + 1, e));
      rest = rest.substr(e);
    }
    rest = done + rest;
    rest = rest.replace(/{/g, "<span class='cssdelimitercolor' style=color:" + cssdelimitercolor + ">{</span>");
    rest = rest.replace(/}/g, "<span class='cssdelimitercolor' style=color:" + cssdelimitercolor + ">}</span>");
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3CSSCOMMENTPOS", comment.arr[i]);
    }
    return "<span class='cssselectorcolor' style=color:" + cssselectorcolor + ">" + rest + "</span>";
  }
  function cssPropertyMode(txt) {
    var rest = txt, done = "", s, e, n, loop;
    if (rest.indexOf("{") > -1 ) { return cssMode(rest); }
    while (rest.search(":") > -1) {
      s = rest.search(":");
      loop = true;
      n = s;
      while (loop == true) {
        loop = false;
        e = rest.indexOf(";", n);
        if (rest.substring(e - 5, e + 1) == "&nbsp;") {
          loop = true;
          n = e + 1;
        }
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s);
      done += cssPropertyValueMode(rest.substring(s, e + 1));
      rest = rest.substr(e + 1);
    }
    return "<span class='csspropertycolor' style=color:" + csspropertycolor + ">" + done + rest + "</span>";
  }
  function cssPropertyValueMode(txt) {
    var rest = txt, done = "", s;
    rest = "<span class='cssdelimitercolor' style=color:" + cssdelimitercolor + ">:</span>" + rest.substring(1);
    while (rest.search(/!important/i) > -1) {
      s = rest.search(/!important/i);
      done += rest.substring(0, s);
      done += cssImportantMode(rest.substring(s, s + 10));
      rest = rest.substr(s + 10);
    }
    result = done + rest;    
    if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
      result = result.substring(0, result.length - 1) + "<span class='cssdelimitercolor' style=color:" + cssdelimitercolor + ">;</span>";
    }
    return "<span class='csspropertyvaluecolor' style=color:" + csspropertyvaluecolor + ">" + result + "</span>";
  }
  function cssImportantMode(txt) {
    return "<span class='cssimportantcolor' style=color:" + cssimportantcolor + ";font-weight:bold;>" + txt + "</span>";
  }
  function jsMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      regexppos = getRegExpPos(rest, jsRegExpMode);
      sfnuttpos = getPos(rest, "'", "'", jsStringMode);
      dfnuttpos = getPos(rest, '"', '"', jsStringMode);
      bfnuttpos = getPos(rest, '`', '`', jsStringTempMode);      
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], regexppos[0], sfnuttpos[0], dfnuttpos[0], bfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, regexppos, sfnuttpos, dfnuttpos, bfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span class='jscolor' style=color:" + jscolor + ">" + rest + "</span>";
  }
  function jsRegExpMode(txt) {
    return "<span class='jsregexpcolor' style=color:" + jsregexpcolor + ">" + txt + "</span>";
  }
  function jsStringMode(txt) {
    return "<span class='jsstringcolor' style=color:" + jsstringcolor + ">" + txt + "</span>";
  }
  function jsStringTempMode(txt) {
    return "<span class='jsstringtempcolor' style=color:" + jsstringtempcolor + ">" + txt + "</span>";
  }
  function jsKeywordMode(txt) {
    return "<span class='jskeywordcolor' style=color:" + jskeywordcolor + ">" + txt + "</span>";
  }
  function jsNumberMode(txt) {
    return "<span class='jsnumbercolor' style=color:" + jsnumbercolor + ">" + txt + "</span>";
  }
  function jsPropertyMode(txt) {
    return "<span class='jspropertycolor' style=color:" + jspropertycolor + ">" + txt + "</span>";
  }
  function getRegExpPos(txt, func) {
    var pos1, cc, pos2 = 0, mArr, i, len, patt, modOK = false;
    pos1 = txt.search(/\/.+?\//);
    if (pos1 > -1) {
      len = txt.match(/\/.+?\//)[0].length; 
      patt = /\W/g;
      cc = txt.match(/\/.+?\//)[0];
      pos2 = cc.length;
      mArr = ["img", "igm", "mig", "mgi", "gim", "gmi", "im", "ig", "mi", "mg", "gi", "gm", "i", "m", "g"];
      for (i = 0; i < mArr.length; i++) {
        re = new RegExp(`\\b^${mArr[i]}\\b`, 'gi');
        if (txt.substr(pos1+pos2).search(re) > -1) {
          modOK = true;
          pos2 = pos2 + mArr[i].length;
        }
      }
      //console.log(txt.substr(pos1 + len - 2,1));
      //console.log((txt.substr(pos1 + len - 2,1)!= "<"));
      if ((cc.indexOf("<br>") == -1 && txt.substr(pos1 + len,1)!= "/" && txt.substr(pos1 + len,1).match(patt) && txt.substr(pos1 - 1,1).match(patt)  && txt.substr(pos1 - 1,1) !="/") || modOK == true && txt.substr(pos1 + len - 2,1)!= "<") {
      } else {
        pos1 = -1;
        pos2 = 0;
      }
    }
    return [pos1, pos1 + pos2, func];
  }
  function getDotPos(txt, func) {
    var x, i, j, s, e, arr = [".","<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      for (j = 0; j < x.length; j++) {
        cc = x[j];
        for (i = 0; i < arr.length; i++) {
          if (cc.indexOf(arr[i]) > -1) {
            e = j;
            return [s + 1, e + s + 1, func];
          }
        }
      }
    }
    return [-1, -1, func];
  }
  function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i][0] > -1) {
        if (arr.length == 0 || arguments[i][0] < arr[0]) {arr = arguments[i];}
      }
    }
    if (arr.length == 0) {arr = arguments[i];}
    return arr;
  }
  function javaMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", javaStringMode);
      dfnuttpos = getPos(rest, '"', '"', javaStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, javaNumberMode);
      keywordpos = getKeywordPos("java", rest, javaKeywordMode);
      dotpos = getDotPos(rest, javaPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span class='javacolor' style=color:" + javacolor + ">" + rest + "</span>";
  }
  function javaStringMode(txt) {
    return "<span class='javastringcolor' style=color:" + javastringcolor + ">" + txt + "</span>";
  }
  function javaKeywordMode(txt) {
    return "<span class='javakeywordcolor' style=color:" + javakeywordcolor + ">" + txt + "</span>";
  }
  function javaNumberMode(txt) {
    return "<span class='javanumbercolor' style=color:" + javanumbercolor + ">" + txt + "</span>";
  }
  function javaPropertyMode(txt) {
    return "<span class='javapropertycolor' style=color:" + javapropertycolor + ">" + txt + "</span>";
  }
  function kotlinMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", kotlinStringMode);
      dfnuttpos = getPos(rest, '"', '"', kotlinStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, kotlinNumberMode);
      keywordpos = getKeywordPos("kotlin", rest, kotlinKeywordMode);
      dotpos = getDotPos(rest, kotlinPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span class='kotlincolor' style=color:" + kotlincolor + ">" + rest + "</span>";
  }
  function kotlinStringMode(txt) {
    return "<span class='kotlinstringcolor' style=color:" + kotlinstringcolor + ">" + txt + "</span>";
  }
  function kotlinKeywordMode(txt) {
    return "<span class='kotlinkeywordcolor' style=color:" + kotlinkeywordcolor + ">" + txt + "</span>";
  }
  function kotlinNumberMode(txt) {
    return "<span class='kotlinnumbercolor' style=color:" + kotlinnumbercolor + ">" + txt + "</span>";
  }
  function kotlinPropertyMode(txt) {
    return "<span class='kotlinpropertycolor' style=color:" + kotlinpropertycolor + ">" + txt + "</span>";
  }
  function sqlMode(txt) {
    var rest = txt, y, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", sqlStringMode);
      dfnuttpos = getPos(rest, '"', '"', sqlStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /--/, "<br>", commentMode);      
      numpos = getNumPos(rest, sqlNumberMode);
      keywordpos = getKeywordPos("sql", rest, sqlKeywordMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    return "<span class='sqlcolor' style=color:" + sqlcolor + ">" + rest + "</span>";
  }
  function sqlStringMode(txt) {
    return "<span class='sqlstringcolor' style=color:" + sqlstringcolor + ">" + txt + "</span>";
  }
  function sqlKeywordMode(txt) {
    return "<span class='sqlkeywordcolor' style=color:" + sqlkeywordcolor + ">" + txt + "</span>";
  }
  function sqlNumberMode(txt) {
    return "<span class='sqlnumbercolor' style=color:" + sqlnumbercolor + ">" + txt + "</span>";
  }
  function phpMode(txt) {
    var rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", phpStringMode);
      dfnuttpos = getPos(rest, '"', '"', phpStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      comhashpos = getPos(rest, "#", "<br>", commentMode);
      numpos = getNumPos(rest, phpNumberMode);
      keywordpos = getKeywordPos("php", rest, phpKeywordMode);      
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], comhashpos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    rest = "<span class='phptagcolor' style=color:" + phptagcolor + ">&lt;" + rest.substr(4, 4) + "</span>" + rest.substring(8);
    if (rest.substr(rest.length - 5, 5) == "?&gt;") {
      rest = rest.substring(0, rest.length - 5) + "<span class='phptagcolor' style=color:" + phptagcolor + ">?&gt;</span>";
    }
    return "<span class='phpcolor' style=color:" + phpcolor + ">" + rest + "</span>";
  }
  function phpStringMode(txt) {
    return "<span class='phpstringcolor' style=color:" + phpstringcolor + ">" + txt + "</span>";
  }
  function phpNumberMode(txt) {
    return "<span class='phpnumbercolor' style=color:" + phpnumbercolor + ">" + txt + "</span>";
  }
  function phpKeywordMode(txt) {
    var glb = ["$GLOBALS","$_SERVER","$_REQUEST","$_POST","$_GET","$_FILES","$_ENV","$_COOKIE","$_SESSION"];
    if (glb.indexOf(txt.toUpperCase()) > -1) {
      if (glb.indexOf(txt) > -1) {
        return "<span class='phpglobalcolor' style=color:" + phpglobalcolor + ">" + txt + "</span>";
      } else {
        return txt;
      }
    } else {
      return "<span class='phpkeywordcolor' style=color:" + phpkeywordcolor + ">" + txt + "</span>";
    }
  }
  function pythonMode(txt) {
    var rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", pythonStringMode);
      dfnuttpos = getPos(rest, '"', '"', pythonStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comhashpos = getPos(rest, "#", "<br>", commentMode);
      numpos = getNumPos(rest, pythonNumberMode);
      keywordpos = getKeywordPos("python", rest, pythonKeywordMode);      
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comhashpos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comhashpos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    return "<span class='pythoncolor' style=color:" + pythoncolor + ">" + rest + "</span>";
  }
  function pythonStringMode(txt) {
    return "<span class='pythonstringcolor' style=color:" + pythonstringcolor + ">" + txt + "</span>";
  }
  function pythonNumberMode(txt) {
    return "<span class='pythonnumbercolor' style=color:" + pythonnumbercolor + ">" + txt + "</span>";
  }
  function pythonKeywordMode(txt) {
    return "<span class='pythonkeywordcolor' style=color:" + pythonkeywordcolor + ">" + txt + "</span>";
  }
  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ == "js") {
      words = ["abstract","arguments","async","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
      "do","double","else","enum","eval","event","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
      "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
      "super","switch","synchronized","then","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"];
    } else if (typ == "java") {
      words = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
      "do","double","else","enum","eval","event","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
      "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
      "super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield",
      "String"];
    } else if (typ == "kotlin") {
      words = ['package','as','typealias','class','interface','this','super','val','operator','var','fun','for','is','in','This','throw','return',
      'annotation','break','continue','object','if','else','while','do','try','when','!in','!is','as?','file','import','where','by','get','set',
      'abstract','enum','open','inner','override','private','public','internal','protected','catch','finally','out','final','vararg','reified',
      'dynamic','companion','constructor','init','sealed','field','property','receiver','param','sparam','lateinit','data','inline','noinline',
      'tailrec','external','annotation','crossinline','const','operator','infix','suspend','actual','expect','setparam','Boolean','Byte','Character',
      'CharSequence','Class','ClassLoader','Cloneable','Comparable','Compiler','Double','Exception','Float','Integer','Long','Math','Number','Object',
      'Package','Pair','Process','Runtime','Runnable','SecurityManager','Short','StackTraceElement','StrictMath','String','StringBuffer','System',
      'Thread','ThreadGroup','ThreadLocal','Throwable','Triple','Void','Annotation','Any','BooleanArray','ByteArray','Char','CharArray',
      'DeprecationLevel','DoubleArray','Enum','FloatArray','Function','Int','IntArray','Lazy','LazyThreadSafetyMode','LongArray','Nothing','ShortArray','Unit'];
    } else if (typ == "php") {
      words = ["$GLOBALS","$_SERVER","$_REQUEST","$_POST","$_GET","$_FILES","$_ENV","$_COOKIE","$_SESSION",
      "__halt_compiler","abstract","and","array","as","break","callable","case","catch","class","clone","const","continue","declare","default",
      "die","do","echo","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","eval","exit","extends","final","for",
      "foreach","function","global","goto","if","implements","include","include_once","instanceof","insteadof","interface","isset","list","namespace","new",
      "or","print","private","protected","public","require","require_once","return","static","switch","throw","trait","try","unset","use","var","while","xor"];
    } else if (typ == "sql") {
      words = ["ADD","EXTERNAL","PROCEDURE","ALL","FETCH","PUBLIC","ALTER","FILE","RAISERROR","AND","FILLFACTOR","READ","ANY","READTEXT","AS","FOREIGN",
      "RECONFIGURE","ASC","FREETEXT","REFERENCES","AUTHORIZATION","FREETEXTTABLE","REPLICATION","BACKUP","FROM","RESTORE","BEGIN","FULL","RESTRICT","BETWEEN",
      "FUNCTION","RETURN","BREAK","GOTO","REVERT","BROWSE","GRANT","REVOKE","BULK","GROUP","RIGHT","BY","HAVING","ROLLBACK","CASCADE","HOLDLOCK","ROWCOUNT",
      "CASE","IDENTITY","ROWGUIDCOL","CHECK","IDENTITY_INSERT","RULE","CHECKPOINT","IDENTITYCOL","SAVE","CLOSE","IF","SCHEMA","CLUSTERED","IN",
      "SECURITYAUDIT","COALESCE","INDEX","SELECT","COLLATE","INNER","SEMANTICKEYPHRASETABLE","COLUMN","INSERT","SEMANTICSIMILARITYDETAILSTABLE","COMMIT",
      "INTERSECT","SEMANTICSIMILARITYTABLE","COMPUTE","INTO","SESSION_USER","CONSTRAINT","IS","SET","CONTAINS","JOIN","SETUSER","CONTAINSTABLE","KEY",
      "SHUTDOWN","CONTINUE","KILL","SOME","CONVERT","LEFT","STATISTICS","CREATE","LIKE","SYSTEM_USER","CROSS","LINENO","TABLE","CURRENT","LOAD","TABLESAMPLE",
      "CURRENT_DATE","MERGE","TEXTSIZE","CURRENT_TIME","NATIONAL","THEN","CURRENT_TIMESTAMP","NOCHECK","TO","CURRENT_USER","NONCLUSTERED","TOP","CURSOR",
      "NOT","TRAN","DATABASE","NULL","TRANSACTION","DBCC","NULLIF","TRIGGER","DEALLOCATE","OF","TRUNCATE","DECLARE","OFF","TRY_CONVERT","DEFAULT","OFFSETS",
      "TSEQUAL","DELETE","ON","UNION","DENY","OPEN","UNIQUE","DESC","OPENDATASOURCE","UNPIVOT","DISK","OPENQUERY","UPDATE","DISTINCT","OPENROWSET",
      "UPDATETEXT","DISTRIBUTED","OPENXML","USE","DOUBLE","OPTION","USER","DROP","OR","VALUES","DUMP","ORDER","VARYING","ELSE","OUTER","VIEW","END",
      "OVER","WAITFOR","ERRLVL","PERCENT","WHEN","ESCAPE","PIVOT","WHERE","EXCEPT","PLAN","WHILE","EXEC","PRECISION","WITH","EXECUTE","PRIMARY",
      "WITHIN GROUP","EXISTS","PRINT","WRITETEXT","EXIT","PROC","LIMIT","MODIFY","COUNT","REPLACE"];
    } else if (typ == "python") {
      words = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "False", "finally", "for", "from", "global", "if", "import",
      "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in", "abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr",
      "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr",
      "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max",
      "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice",
      "sorted", "staticmethod", "str", "sum", "super", "tuple", "True", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];
    }
    for (i = 0; i < words.length; i++) {
      if (typ == "php" || typ == "sql") {
        pos = txt.toLowerCase().indexOf(words[i].toLowerCase());
      } else {
        pos = txt.indexOf(words[i]);
      }
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length,1).match(patt) && txt.substr(pos - 1,1).match(patt)) {
          if (pos > -1 && (rpos == -1 || pos < rpos)) {
            rpos = pos;
            rpos2 = rpos + words[i].length;
          }
        }
      } 
    }
    return [rpos, rpos2, func];
  }
  function getPos(txt, start, end, func) {
    var s, e;
    s = txt.search(start);
    e = txt.indexOf(end, s + (end.length));
    if (e == -1) {e = txt.length;}
    return [s, e + (end.length), func];
  }
  function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
    for (i = 0; i < txt.length; i++) {
      for (j = 0; j < arr.length; j++) {
        c = txt.substr(i, arr[j].length);
        if (c == arr[j]) {
          if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
            continue;
          }
          endpos = i;
          if (startpos < endpos) {
            word = txt.substring(startpos, endpos);
            //console.log(word + " " + isNaN(word));
            if (!isNaN(word)) {return [startpos, endpos, func];}
          }
          i += arr[j].length;
          startpos = i;
          i -= 1;
          break;
        }
      }
    }  
    return [-1, -1, func];
  }  
}
}
)();
/*
(
function setThemeMode() {
  var x = localStorage.getItem("preferredmode");
  var y = localStorage.getItem("preferredpagemode");  
  if (x == "dark") {
    document.body.className += " darktheme";
  }
  if (y == "dark") {
    document.body.className += " darkpagetheme";
  }
})();
*/




