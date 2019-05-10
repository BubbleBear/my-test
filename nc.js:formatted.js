/* v1.2.26,1.2.29,1 2018-10-25 09:33:12 */
!function() {
    function cond() {
        return Math.random()
    }
    function chkQuerySet() {
        var e, t = window[QUERY_KEY];
        return isNaN(t) ? (e = location.href.split(QUERY_KEY + "=")[1],
        t = parseFloat(e),
        void (isNaN(t) || (GREY_RATIO = t))) : void (GREY_RATIO = t)
    }
    var GREY_RATIO = 1
      , QUERY_KEY = "aq-nc-grey-ratio"
      , STABLE_ACTION = function() {}
      , NEW_ACTION = function() {
        !function(e) {
            function t(i) {
                if (n[i])
                    return n[i].exports;
                var o = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(o.exports, o, o.exports, t),
                o.l = !0,
                o.exports
            }
            var n = {};
            return t.m = e,
            t.c = n,
            t.i = function(e) {
                return e
            }
            ,
            t.d = function(e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }
            ,
            t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e["default"]
                }
                : function() {
                    return e
                }
                ;
                return t.d(n, "a", n),
                n
            }
            ,
            t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            t.p = "",
            t(t.s = 106)
        }([, function(e, t, n) {
            "use strict";
            function i(e, t, n) {
                if (e) {
                    var i = 0
                      , o = e.length;
                    if (o === +o)
                        for (; i < o && t.call(n, e[i], i, e) !== !1; i++)
                            ;
                    else
                        for (i in e)
                            if (e.hasOwnProperty(i) && t.call(n, e[i], i, e) === !1)
                                break
                }
            }
            function o(e, t) {
                if (!t)
                    return !1;
                if (e.classList) {
                    for (var n = t.split(/\s+/), i = 0; i < n.length; i++)
                        if (!e.classList.contains(n[i]))
                            return !1;
                    return !0
                }
                return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className)
            }
            function a(e, t) {
                t && !o(e, t) && (e.classList ? e.classList.add.apply(e.classList, t.split(/\s+/)) : e.className += " " + t)
            }
            function r(e, t) {
                t && o(e, t) && (e.classList ? e.classList.remove.apply(e.classList, t.split(/\s+/)) : e.className = e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""))
            }
            function c(e) {
                var t = [];
                for (var n in e)
                    e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t.join("&")
            }
            function s(e) {
                for (var t = e.offsetLeft, n = e.offsetParent; null !== n; )
                    t += n.offsetLeft,
                    n = n.offsetParent;
                return t
            }
            function l(e) {
                for (var t = e.offsetTop, n = e.offsetParent; null !== n; )
                    t += n.offsetTop,
                    n = n.offsetParent;
                return t
            }
            var d = window
              , u = document
              , p = n(2)
              , _ = t.rndId = function(e) {
                return ((e || "") + Math.random()).replace(".", "")
            }
            ;
            t.each = i,
            t.hasClass = o,
            t.addClass = a,
            t.removeClass = r,
            t.toggleClass = function(e, t) {
                o(e, t) ? r(e, t) : a(e, t)
            }
            ,
            t.getElementsByClassName = function(e, t, n) {
                if (t = t || u,
                n = n || "*",
                u.getElementsByClassName)
                    return t.getElementsByClassName(e);
                for (var i = [], a = "*" === n && t.all ? t.all : t.getElementsByTagName(n), r = a.length; --r >= 0; )
                    o(a[r], e) && i.push(a[r]);
                return i
            }
            ,
            t.setCookie = function(e, t, n) {
                n = n || 7;
                var i = new Date;
                i.setTime(i.getTime() + 864e5 * n),
                document.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", i.toGMTString()].join("")
            }
            ,
            t.send = function(e) {
                var t = _("_nc_r_")
                  , n = d[t] = new Image;
                n.onload = n.onerror = function() {
                    d[t] = null
                }
                ,
                n.src = e
            }
            ,
            t.obj2param = c,
            t.addHourStamp = function(e, t) {
                var n = Math.floor((new Date).getTime() / (36e5 * (t || 2)))
                  , i = e.indexOf("?") === -1 ? "?" : "&";
                return e + i + "_t=" + n
            }
            ;
            var f = {};
            t.isIEX = function(e) {
                if (e in f)
                    return f[e];
                var t = u.createElement("b");
                return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->",
                f[e] = 1 === t.getElementsByTagName("i").length
            }
            ;
            var s = t.getElementLeft = function(e) {
                for (var t = e.offsetLeft, n = e.offsetParent; null !== n; )
                    t += n.offsetLeft,
                    n = n.offsetParent;
                return t
            }
              , l = t.getElementTop = function(e) {
                for (var t = e.offsetTop, n = e.offsetParent; null !== n; )
                    t += n.offsetTop,
                    n = n.offsetParent;
                return t
            }
            ;
            t.getClientRect = function(e) {
                var t = u.documentElement.scrollTop;
                if (u.documentElement.scrollLeft,
                e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect();
                    return {
                        left: n.left,
                        right: n.right,
                        top: n.top - t,
                        bottom: n.bottom - t
                    }
                }
                var i = s(e)
                  , o = l(e);
                return {
                    left: i,
                    right: i + e.offsetWidth,
                    top: o,
                    bottom: o + e.offsetHeight
                }
            }
            ,
            t.getOffset = function(e) {
                var t = e.target;
                void 0 === t.offsetLeft && (t = t.parentNode);
                var n = g(t)
                  , i = {
                    x: d.pageXOffset + e.clientX,
                    y: d.pageYOffset + e.clientY
                };
                return {
                    offsetX: i.x - n.x,
                    offsetY: i.y - n.y
                }
            }
            ;
            var g = t.getPageCoord = function(e) {
                for (var t = {
                    x: 0,
                    y: 0
                }; e; )
                    t.x += e.offsetLeft,
                    t.y += e.offsetTop,
                    e = e.offsetParent;
                return t
            }
              , h = {
                before: function(e, t) {
                    return function() {
                        return e.call(this),
                        t.apply(this, arguments)
                    }
                },
                after: function(e, t) {
                    return function() {
                        var n = e.apply(this, arguments);
                        return t.call(this, n, arguments),
                        n
                    }
                }
            };
            t.decorator = h,
            t.mix = function(e) {
                for (var t, n, i = [].slice.call(arguments), o = i.length, a = 1; a < o; a++) {
                    t = i[a];
                    for (n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                return e
            }
            ,
            t.clone = function(e) {
                var t = {};
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }
            ,
            t.addHandler = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }
            ,
            t.removeHandler = function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }
            ,
            t.getEvent = function(e) {
                return e ? e : d.event
            }
            ,
            t.getTarget = function(e) {
                return e.target || e.srcElement
            }
            ,
            t.bind = function(e, t) {
                var n = [].slice
                  , i = n.call(arguments, 2)
                  , o = function() {}
                  , a = function() {
                    return e.apply(this instanceof o ? this : t, i.concat(n.call(arguments)))
                };
                return o.prototype = e.prototype,
                a.prototype = new o,
                a
            }
            ,
            t.imageLoaded = function(e) {
                var t = p.defer()
                  , n = new Image;
                return n.onload = function() {
                    t.resolve(this)
                }
                ,
                n.onerror = function(e) {
                    t.reject({
                        type: "img",
                        error: e
                    })
                }
                ,
                setTimeout(function() {
                    t.reject({
                        type: "img",
                        error: "timeout"
                    })
                }, 5e3),
                n.src = e,
                t.promise
            }
            ,
            t.request = function(e) {
                var t = p.defer()
                  , n = e.data || {}
                  , i = ("jsonp_" + Math.random()).replace(".", "");
                d[i] = function(e) {
                    t.resolve(e)
                }
                ,
                n[e.callback || "callback"] = i,
                t.promise.always(function() {
                    try {
                        delete d[i]
                    } catch (e) {
                        d[i] = null
                    }
                });
                var o = u.createElement("script");
                o.src = e.url + (e.url.indexOf("?") === -1 ? "?" : "&") + c(n);
                var a = u.getElementsByTagName("script")[0];
                return a.parentNode.insertBefore(o, a),
                setTimeout(function() {
                    t.reject({
                        type: "request",
                        error: "timeout"
                    })
                }, 5e3),
                t.promise
            }
            ,
            t.getElementLeft = s,
            t.getElementTop = l
        }
        , function(e, t, n) {
            "use strict";
            function i(e) {
                return this instanceof i ? (this._state = l,
                this._onFulfilled = [],
                this._onRejected = [],
                this._value = null,
                this._reason = null,
                void (p(e) && e(r(this.resolve, this), r(this.reject, this)))) : new i(e)
            }
            function o(e, t, n) {
                return function(i) {
                    if (p(t))
                        try {
                            var o = t(i);
                            a(o) ? o.then(function(t) {
                                e.resolve(t)
                            }, function(t) {
                                e.reject(t)
                            }) : e.resolve(o)
                        } catch (r) {
                            e.reject(r)
                        }
                    else
                        e[n](i)
                }
            }
            function a(e) {
                return e && p(e.then)
            }
            function r(e, t) {
                var n = [].slice
                  , i = n.call(arguments, 2)
                  , o = function() {}
                  , a = function() {
                    return e.apply(this instanceof o ? this : t, i.concat(n.call(arguments)))
                };
                return o.prototype = e.prototype,
                a.prototype = new o,
                a
            }
            function c(e) {
                return function(t) {
                    return {}.toString.call(t) == "[object " + e + "]"
                }
            }
            function s(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    t(e[n], n)
            }
            var l = 0
              , d = 1
              , u = 2;
            i.prototype = {
                constructor: i,
                then: function(e, t) {
                    var n = new i
                      , a = o(n, e, "resolve")
                      , r = o(n, t, "reject");
                    return this._state === d ? a(this._value) : this._state === u ? r(this._reason) : (this._onFulfilled.push(a),
                    this._onRejected.push(r)),
                    n
                },
                resolve: function(e) {
                    this._state === l && (this._state = d,
                    this._value = e,
                    s(this._onFulfilled, function(t) {
                        t(e)
                    }),
                    this._onFulfilled = [])
                },
                reject: function(e) {
                    this._state === l && (this._state = u,
                    this._reason = e,
                    s(this._onRejected, function(t) {
                        t(e)
                    }),
                    this._onRejected = [])
                },
                "catch": function(e) {
                    return this.then(null, e)
                },
                always: function(e) {
                    return this.then(e, e)
                }
            },
            i.defer = function() {
                var e = {};
                return e.promise = new i(function(t, n) {
                    e.resolve = t,
                    e.reject = n
                }
                ),
                e
            }
            ,
            i.race = function(e) {
                var t = i.defer();
                return e.length,
                s(e, function(e) {
                    e.then(function(e) {
                        t.resolve(e)
                    }, function(e) {
                        t.reject(e)
                    })
                }),
                t.promise
            }
            ,
            i.all = function(e) {
                var t = i.defer()
                  , n = e.length
                  , o = [];
                return s(e, function(e, i) {
                    e.then(function(e) {
                        o[i] = e,
                        n--,
                        0 === n && t.resolve(o)
                    }, function(e) {
                        t.reject(e)
                    })
                }),
                t.promise
            }
            ,
            i.resolve = function(e) {
                return new i(function(t) {
                    t(e)
                }
                )
            }
            ,
            i.reject = function(e) {
                return new i(function(t, n) {
                    n(e)
                }
                )
            }
            ;
            var p = c("Function");
            e.exports = i
        }
        , function(e, t, n) {
            "use strict";
            function i(e) {
                var t = ("_nc_r_" + Math.random()).replace(/\./, "")
                  , n = a[t] = new Image;
                n.onload = n.onerror = function() {
                    a[t] = null
                }
                ,
                n.src = e
            }
            var o = (n(4).URL_MAP,
            "//cf.aliyun.com/scratchCardSlide/dataReport.jsonp")
              , a = window;
            t.log = function(e, t) {
                var n, a, r = t || o, c = ["a", "t", "scene", "ns", "jsv", "usa", "p", "jsType", "os", "em", "ec"], s = [], l = c.length;
                for (n = 0; n < l; n++)
                    a = c[n],
                    e.hasOwnProperty(a) && s.push(a + "=" + encodeURIComponent(e[a]));
                s.push("r=" + Math.random()),
                i(r + "?" + s.join("&"))
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1)
              , o = {
                log: "//log.mmstat.com/",
                gm: "//gm.mmstat.com/",
                gj: "//gj.mmstat.com/"
            };
            t.mmstat_base = o;
            var a = i.isIEX(8)
              , r = i.isIEX(7)
              , c = i.isIEX(6)
              , s = !!(c || r || a)
              , l = document.getElementsByTagName("script")
              , d = "";
            if (null != l && l.length >= 1)
                for (var u = l.length - 1; u >= 0; u--)
                    if (l[u].src.indexOf("ncpc/nc.js") != -1) {
                        d = l[u].src;
                        break
                    }
            var p = "";
            p = d.indexOf("g.alicdn.com") != -1 ? "//g.alicdn.com/AWSC/AWSC/awsc.js" : "//aeis.alicdn.com/AWSC/AWSC/awsc.js";
            var _ = {
                0: {
                    analyze: s ? "//cf2.aliyun.com/nocaptcha/analyze.jsonp" : "//cf.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "//cf.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "//diablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "//diablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "//diablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "//diablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: s ? "//cf2.aliyun.com/captcha/checkcode.jsonp" : "//cf.aliyun.com/captcha/checkcode.jsonp",
                    cc: "//diablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "//diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    umid_Url: "//g.alicdn.com/security/umscript/3.3.35/um.js",
                    uab_Url: p,
                    umid_serUrl: "https://ynuf.aliapp.org/service/um.json",
                    api_prepare: "//cf.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "//cf.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "//cf.aliyun.com/scratchCardSlide/analyze.jsonp"
                },
                1: {
                    analyze: "//cfus.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "//cfus.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "//usdiablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "//usdiablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "//usdiablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "//usdiablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: "//cfus.aliyun.com/captcha/checkcode.jsonp",
                    cc: "//usdiablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "//usdiablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    umid_Url: "//aeis.alicdn.com/security/umscript/3.3.35/um.js",
                    uab_Url: p,
                    umid_serUrl: "https://us.ynuf.aliapp.org/service/um.json",
                    api_prepare: "//cfus.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "//cfus.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "//cfus.aliyun.com/scratchCardSlide/analyze.jsonp"
                },
                2: {
                    analyze: "//cfun.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "//cfun.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "//diablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "//diablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "//diablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "//diablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: "//cfun.aliyun.com/captcha/checkcode.jsonp",
                    cc: "//diablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "//diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    umid_Url: "//g.alicdn.com/security/umscript/3.3.35/um.js",
                    uab_Url: p,
                    umid_serUrl: "https://ynuf.aliapp.org/service/um.json",
                    api_prepare: "//cfun.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "//cfun.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "//cfun.aliyun.com/scratchCardSlide/analyze.jsonp"
                }
            };
            t.URL_MAP = _
        }
        , function(e, t, n) {
            "use strict";
            var i = window
              , o = n(1);
            o.loadScript = n(104).loadScript;
            var a = {};
            o.getImgSize = function(e, t) {
                a[e] && t(null, a[e]);
                var n = new Image;
                n.onreadystatechange = function() {
                    n.readyState
                }
                ,
                n.onload = function() {
                    var i = n.naturalWidth ? [n.naturalWidth, n.naturalHeight] : [n.width, n.height];
                    a[e] = i,
                    t(null, i)
                }
                ,
                n.onerror = function(e) {
                    t(e)
                }
                ,
                n.src = e
            }
            ,
            o.addEventHandler = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, function(e) {
                    return n(e || i.event)
                }) : e["on" + t] = function(e) {
                    return n(e || i.event)
                }
            }
            ,
            o.on = o.addEventHandler,
            o.map = function(e, t) {
                for (var n = [], i = 0, o = e.length; i < o; i++)
                    n.push(t(e[i], i));
                return n
            }
            ,
            o.getOS = n(18),
            o.obj2style = function(e) {
                var t = ""
                  , n = void 0;
                for (n in e)
                    e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
                return t
            }
            ,
            o.fill = function(e, t) {
                if ("function" == typeof e.fill)
                    e.fill(t);
                else
                    for (var n = 0, i = e.length; n < i; n++)
                        e[n] = t;
                return e
            }
            ,
            e.exports = o
        }
        , function(e, t, n) {
            "use strict";
            t.v = 948
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function o(e, t) {
                var n, i, o = t ? {} : e;
                for (n in e)
                    e.hasOwnProperty(n) && (i = e[n],
                    "string" == typeof i && (i = [i]),
                    o[n] = '<span class="nc-lang-cnt" data-nc-lang="' + n + '">' + a(h[n], i) + "</span>");
                return o
            }
            function a(e, t) {
                return (e + "").replace(/\\?\{\s*([^{}\s]+)\s*\}/g, function(e, n) {
                    return "\\" === e.charAt(0) ? e.slice(1) : t[n] || ""
                })
            }
            function r(e, t) {
                var n, i = m[e] = m[e] || {};
                t = o(t, !0);
                for (n in t)
                    t.hasOwnProperty(n) && (i[n] = t[n])
            }
            function c(e, t) {
                return e.replace(/(javascript:noCaptcha.reset\()(\))/gi, "$1" + t + "$2")
            }
            var s, l, d = "javascript:noCaptcha.reset()", u = "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", p = "http://survey.taobao.com/survey/40BtED_K?token=%TOKEN", _ = "http://survey.taobao.com/survey/Q0dcgfAv?token=%TOKEN", f = "https://survey.taobao.com/survey/AMnMVgrS4?type=%TYPE&str=%STR", g = "{0}", h = {
                _startTEXT: g,
                _yesTEXT: "<b>{0}</b>",
                _noTEXT: g,
                _errorTEXT: g,
                _errorClickTEXT: g,
                _errorActionTimeout: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _errorLOADING: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _errorTooMuch: '{0}<a target="_blank" href="{1}">{2}</a>',
                _errorTooMuchClick: '{0}<a target="_blank" href="{1}">{2}</a>',
                _errorVerify: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _Loading: "<b>{0}</b>",
                _errorServer: g,
                _error300: '{0}<a href="{1}">{2}</a>{3}',
                _errorNetwork: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _infoTEXT: g,
                _submit: g,
                _learning: g,
                _closeHelp: g,
                _slideToVerify: g,
                _notVerified: g,
                _captcha: g,
                _OK: g,
                _sthWrong: g,
                _reload: g,
                _feedback: g,
                _cc_select: g,
                _cc_title: g,
                _cc_fail: g,
                _wait: g,
                _cc_refresh: g,
                _verify: g,
                _cancel: g,
                _retry: g,
                _cc_contact: '{0}<a href="{1}" target="_blank">{2}</a>',
                _cc_img_fail: g,
                _cc_req_fail: g,
                _close: g,
                _ggk_start: g,
                _ggk_net_err: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_too_fast: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_action_timeout: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_fail: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_success: g
            }, m = {
                cn: {
                    _startTEXT: "\u8bf7\u6309\u4f4f\u6ed1\u5757\uff0c\u62d6\u52a8\u5230\u6700\u53f3\u8fb9",
                    _yesTEXT: "\u9a8c\u8bc1\u901a\u8fc7",
                    _noTEXT: "\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u9a8c\u8bc1\u7801",
                    _errorTEXT: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
                    _errorClickTEXT: "\u9a8c\u8bc1\u7801\u70b9\u51fb\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5",
                    _errorLOADING: ["\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7", d, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                    _errorTooMuch: ["\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                    _errorTooMuchClick: ["\u70b9\u51fb\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                    _errorVerify: ["\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7", d, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                    _Loading: "\u52a0\u8f7d\u4e2d",
                    _errorServer: "\u670d\u52a1\u5668\u9519\u8bef\u6216\u8005\u8d85\u65f6",
                    _error300: ["\u54ce\u5440\uff0c\u51fa\u9519\u4e86\uff0c\u70b9\u51fb", d, "\u5237\u65b0", "\u518d\u6765\u4e00\u6b21"],
                    _errorNetwork: ["\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7", d, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                    _infoTEXT: "",
                    _submit: "\u63d0\u4ea4",
                    _learning: "\u4e86\u89e3\u65b0\u529f\u80fd",
                    _closeHelp: "\u5173\u95ed\u5e2e\u52a9",
                    _slideToVerify: "\u5411\u53f3\u6ed1\u52a8\u9a8c\u8bc1",
                    _notVerified: "\u9a8c\u8bc1\u672a\u901a\u8fc7",
                    _captcha: "\u9a8c\u8bc1\u7801",
                    _OK: "\u786e\u5b9a",
                    _sthWrong: "\u975e\u5e38\u62b1\u6b49\uff0c\u8fd9\u51fa\u9519\u4e86...",
                    _reload: "\u5237\u65b0",
                    _feedback: "\u53cd\u9988",
                    _cc_select: "\u8bf7\u9009\u62e9\u56fe\u7247\u9a8c\u8bc1",
                    _cc_title: "\u8bf7\u9009\u62e9\u4e0b\u9762\u4e0e\u5de6\u56fe\u540c\u4e00\u7c7b\u522b\u7684\u56fe\u7247",
                    _cc_fail: "\u56fe\u7247\u9009\u62e9\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u8bd5",
                    _wait: "\u8bf7\u7a0d\u5019",
                    _cc_refresh: "\u6362\u4e00\u6279",
                    _verify: "\u9a8c\u8bc1",
                    _cancel: "\u53d6\u6d88",
                    _retry: "\u91cd\u8bd5",
                    _cc_contact: ["\u9047\u5230\u95ee\u9898\u4e86\uff1f", u, "\u70b9\u6b64\u53cd\u9988"],
                    _cc_img_fail: "\u56fe\u7247\u9a8c\u8bc1\u7801\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u5e76\u91cd\u8bd5\u3002",
                    _cc_req_fail: "\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u5e76\u91cd\u8bd5\u3002",
                    _close: "\u5173\u95ed",
                    _ggk_guide: "\u8bf7\u6441\u4f4f\u9f20\u6807\u5de6\u952e\uff0c\u522e\u51fa\u4e24\u53ea\u5c0f\u9e21",
                    _ggk_start: "",
                    _ggk_net_err: ["\u7f51\u7edc\u5b9e\u5728\u4e0d\u7ed9\u529b<br/>\u8bf7", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8bf7", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8bf7", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_fail: ["\u5440\uff0c\u5c0f\u9e21\u9003\u8dd1\u4e86<br/>\u8bf7", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u9e21\uff0c\u7ee7\u7eed\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427"
                },
                tw: {
                    _startTEXT: "\u8acb\u6309\u4f4f\u6ed1\u584a\uff0c\u62d6\u52d5\u5230\u6700\u53f3\u908a",
                    _yesTEXT: "\u9a57\u8b49\u901a\u904e",
                    _noTEXT: "\u8acb\u5728\u4e0b\u65b9\u8f38\u5165\u9a57\u8b49\u78bc",
                    _errorTEXT: "\u9a57\u8b49\u78bc\u8f38\u5165\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165",
                    _errorClickTEXT: "\u9a57\u8b49\u78bc\u9ede\u64ca\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66",
                    _errorLOADING: ["\u52a0\u8f09\u5931\u6557\uff0c\u8acb", d, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                    _errorTooMuch: ["\u8f38\u5165\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                    _errorTooMuchClick: ["\u9ede\u64ca\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                    _errorVerify: ["\u9a57\u8b49\u5931\u6557\uff0c\u8acb", d, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                    _Loading: "\u52a0\u8f09\u4e2d",
                    _errorServer: "\u670d\u52d9\u5668\u932f\u8aa4\u6216\u8005\u8d85\u6642",
                    _error300: ["\u54ce\u5440\uff0c\u51fa\u932f\u4e86\uff0c\u9ede\u64ca", d, "\u5237\u65b0", "\u518d\u4f86\u58f9\u6b21"],
                    _errorNetwork: ["\u7db2\u7d61\u4e0d\u7d66\u529b\uff0c\u8acb", d, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                    _infoTEXT: "",
                    _submit: "\u63d0\u4ea4",
                    _learning: "\u4e86\u89e3\u65b0\u529f\u80fd",
                    _closeHelp: "\u5173\u95ed\u5e2e\u52a9",
                    _slideToVerify: "\u5411\u53f3\u6ed1\u52d5\u9a57\u8b49",
                    _notVerified: "\u9a57\u8b49\u672a\u901a\u904e",
                    _captcha: "\u9a57\u8b49\u78bc",
                    _OK: "\u78ba\u5b9a",
                    _sthWrong: "\u975e\u5e38\u62b1\u6b49\uff0c\u9019\u51fa\u932f\u4e86...",
                    _reload: "\u5237\u65b0",
                    _feedback: "\u53cd\u994b",
                    _ggk_guide: "\u8acb\u6309\u4f4f\u6ed1\u9f20\u5de6\u9375\uff0c\u522e\u51fa\u5169\u96bb\u5c0f\u96de",
                    _ggk_start: "",
                    _ggk_net_err: ["\u7db2\u8def\u5be6\u5728\u4e0d\u7d66\u529b<br/>\u8acb", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u6620\u554f\u984c"],
                    _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8acb", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u6620\u554f\u984c"],
                    _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8acb", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u6620\u554f\u984c"],
                    _ggk_fail: ["\u5440\uff0c\u5c0f\u96de\u9003\u8dd1\u4e86<br/>\u8acb", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u6620\u554f\u984c"],
                    _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u96de\uff0c\u7e7c\u7e8c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427"
                },
                en: (s = {
                    _startTEXT: "Please slide to verify",
                    _yesTEXT: "Verified",
                    _noTEXT: "Please input verification code",
                    _errorTEXT: "Please try again",
                    _errorClickTEXT: "Please try again",
                    _errorLOADING: ["Loading failed, ", d, "refresh", " or ", _, "provide feedback"],
                    _errorTooMuch: ["Please try again or ", _, "provide feedback"],
                    _errorTooMuchClick: ["Please try again or ", _, "provide feedback"],
                    _errorVerify: ["Verify failed, ", d, "refresh", " or ", _, "provide feedback"],
                    _errorServer: "Server Error",
                    _Loading: "Loading",
                    _error300: ["Oops... something's wrong. Please ", d, "refresh", " and try again."],
                    _errorNetwork: ["Net Err. Please ", d, "refresh", ", or ", _, "feedback"],
                    _infoTEXT: "",
                    _submit: "Submit",
                    _learning: "help",
                    _closeHelp: "Close",
                    _slideToVerify: "slide to verify",
                    _notVerified: "Not Verified",
                    _captcha: "Captcha",
                    _OK: "OK",
                    _sthWrong: "Sorry, something wrong....",
                    _reload: "Reload",
                    _feedback: "Feedback",
                    _ggk_action_timeout: ["Action timeout, ", d, "refresh", " or ", _, "provide feedback"],
                    _ggk_guide: "Hold your left mouse button down to scratch out two chickens",
                    _ggk_start: "",
                    _ggk_net_err: ["Problem with the network<br/>Please", d, "try again", "or", f, "report your problem"],
                    _ggk_too_fast: ["You were being too fast<br/>Please", d, "try again", "or", f, "report your problem"]
                },
                i(s, "_ggk_action_timeout", ["You've been idled for too long<br/>Please", d, "try again", "or", f, "report your problem"]),
                i(s, "_ggk_fail", ["Oops, the chickens ran away<br/>Please", d, "try again", "or", f, "report your problem"]),
                i(s, "_ggk_success", "Congratulations! You've got the chickens!"),
                s)
            };
            for (l in m)
                m.hasOwnProperty(l) && o(m[l]);
            m.zh_CN = m.cn,
            m.zh_TW = m.tw,
            m.en_US = m.en,
            t.language = m,
            t.upLang = r,
            t.upResetIndex = c
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function() {
                var e = [];
                return e.toString = function() {
                    for (var e = [], t = 0; t < this.length; t++) {
                        var n = this[t];
                        n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                    }
                    return e.join("")
                }
                ,
                e.i = function(t, n) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var i = {}, o = 0; o < this.length; o++) {
                        var a = this[o][0];
                        "number" == typeof a && (i[a] = !0)
                    }
                    for (o = 0; o < t.length; o++) {
                        var r = t[o];
                        "number" == typeof r[0] && i[r[0]] || (n && !r[2] ? r[2] = n : n && (r[2] = "(" + r[2] + ") and (" + n + ")"),
                        e.push(r))
                    }
                }
                ,
                e
            }
        }
        , function(e, t, n) {
            "use strict";
            t.names = {
                init: "init",
                ready: "ready",
                actionstart: "actionstart",
                actionend: "actionend",
                beforeverify: "beforeverify",
                afterverify: "afterverify",
                error: "error",
                fail: "fail",
                success: "success",
                switchevent: "switch",
                slide_start: "slide_start",
                slide_end: "slide_end",
                before_code: "before_code",
                after_code: "after_code",
                error300: "error300"
            },
            t.deprecated = {
                slide_start: "actionstart",
                slide_end: "actionend",
                before_code: "beforeverify",
                after_code: "afterverify",
                error300: "error"
            }
        }
        , function(e, t) {
            function n(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n]
                      , o = p[i.id];
                    if (o) {
                        o.refs++;
                        for (var a = 0; a < o.parts.length; a++)
                            o.parts[a](i.parts[a]);
                        for (; a < i.parts.length; a++)
                            o.parts.push(s(i.parts[a], t))
                    } else {
                        for (var r = [], a = 0; a < i.parts.length; a++)
                            r.push(s(i.parts[a], t));
                        p[i.id] = {
                            id: i.id,
                            refs: 1,
                            parts: r
                        }
                    }
                }
            }
            function i(e) {
                for (var t = [], n = {}, i = 0; i < e.length; i++) {
                    var o = e[i]
                      , a = o[0]
                      , r = o[1]
                      , c = o[2]
                      , s = o[3]
                      , l = {
                        css: r,
                        media: c,
                        sourceMap: s
                    };
                    n[a] ? n[a].parts.push(l) : t.push(n[a] = {
                        id: a,
                        parts: [l]
                    })
                }
                return t
            }
            function o(e, t) {
                var n = g()
                  , i = v[v.length - 1];
                if ("top" === e.insertAt)
                    i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                    v.push(t);
                else {
                    if ("bottom" !== e.insertAt)
                        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(t)
                }
            }
            function a(e) {
                e.parentNode.removeChild(e);
                var t = v.indexOf(e);
                t >= 0 && v.splice(t, 1)
            }
            function r(e) {
                var t = document.createElement("style");
                return t.type = "text/css",
                o(e, t),
                t
            }
            function c(e) {
                var t = document.createElement("link");
                return t.rel = "stylesheet",
                o(e, t),
                t
            }
            function s(e, t) {
                var n, i, o;
                if (t.singleton) {
                    var s = m++;
                    n = h || (h = r(t)),
                    i = l.bind(null, n, s, !1),
                    o = l.bind(null, n, s, !0)
                } else
                    e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t),
                    i = u.bind(null, n),
                    o = function() {
                        a(n),
                        n.href && URL.revokeObjectURL(n.href)
                    }
                    ) : (n = r(t),
                    i = d.bind(null, n),
                    o = function() {
                        a(n)
                    }
                    );
                return i(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        i(e = t)
                    } else
                        o()
                }
            }
            function l(e, t, n, i) {
                var o = n ? "" : i.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = b(t, o);
                else {
                    var a = document.createTextNode(o)
                      , r = e.childNodes;
                    r[t] && e.removeChild(r[t]),
                    r.length ? e.insertBefore(a, r[t]) : e.appendChild(a)
                }
            }
            function d(e, t) {
                var n = t.css
                  , i = t.media;
                if (i && e.setAttribute("media", i),
                e.styleSheet)
                    e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
            function u(e, t) {
                var n = t.css
                  , i = t.sourceMap;
                i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var o = new Blob([n],{
                    type: "text/css"
                })
                  , a = e.href;
                e.href = URL.createObjectURL(o),
                a && URL.revokeObjectURL(a)
            }
            var p = {}
              , _ = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)),
                    t
                }
            }
              , f = _(function() {
                return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
            })
              , g = _(function() {
                return document.head || document.getElementsByTagName("head")[0]
            })
              , h = null
              , m = 0
              , v = [];
            e.exports = function(e, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                    throw new Error("The style-loader cannot be used in a non-browser environment");
                t = t || {},
                "undefined" == typeof t.singleton && (t.singleton = f()),
                "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
                var o = i(e);
                return n(o, t),
                function(e) {
                    for (var a = [], r = 0; r < o.length; r++) {
                        var c = o[r]
                          , s = p[c.id];
                        s.refs--,
                        a.push(s)
                    }
                    if (e) {
                        var l = i(e);
                        n(l, t)
                    }
                    for (var r = 0; r < a.length; r++) {
                        var s = a[r];
                        if (0 === s.refs) {
                            for (var d = 0; d < s.parts.length; d++)
                                s.parts[d]();
                            delete p[s.id]
                        }
                    }
                }
            }
            ;
            var b = function() {
                var e = [];
                return function(t, n) {
                    return e[t] = n,
                    e.filter(Boolean).join("\n")
                }
            }()
        }
        , , , function(e, t, n) {
            "use strict";
            !function() {
                var n = {
                    VERSION: "2.4.0",
                    Result: {
                        SUCCEEDED: 1,
                        NOTRANSITION: 2,
                        CANCELLED: 3,
                        PENDING: 4
                    },
                    Error: {
                        INVALID_TRANSITION: 100,
                        PENDING_TRANSITION: 200,
                        INVALID_CALLBACK: 300
                    },
                    WILDCARD: "*",
                    ASYNC: "async",
                    create: function(e, t) {
                        var i = "string" == typeof e.initial ? {
                            state: e.initial
                        } : e.initial
                          , o = e.terminal || e["final"]
                          , a = t || e.target || {}
                          , r = e.events || []
                          , c = e.callbacks || {}
                          , s = {}
                          , l = {}
                          , d = function(e) {
                            var t = Array.isArray(e.from) ? e.from : e.from ? [e.from] : [n.WILDCARD];
                            s[e.name] = s[e.name] || {};
                            for (var i = 0; i < t.length; i++)
                                l[t[i]] = l[t[i]] || [],
                                l[t[i]].push(e.name),
                                s[e.name][t[i]] = e.to || t[i];
                            e.to && (l[e.to] = l[e.to] || [])
                        };
                        i && (i.event = i.event || "startup",
                        d({
                            name: i.event,
                            from: "none",
                            to: i.state
                        }));
                        for (var u = 0; u < r.length; u++)
                            d(r[u]);
                        for (var p in s)
                            s.hasOwnProperty(p) && (a[p] = n.buildEvent(p, s[p]));
                        for (var p in c)
                            c.hasOwnProperty(p) && (a[p] = c[p]);
                        return a.current = "none",
                        a.is = function(e) {
                            return Array.isArray(e) ? e.indexOf(this.current) >= 0 : this.current === e
                        }
                        ,
                        a.can = function(e) {
                            return !this.transition && void 0 !== s[e] && (s[e].hasOwnProperty(this.current) || s[e].hasOwnProperty(n.WILDCARD))
                        }
                        ,
                        a.cannot = function(e) {
                            return !this.can(e)
                        }
                        ,
                        a.transitions = function() {
                            return (l[this.current] || []).concat(l[n.WILDCARD] || [])
                        }
                        ,
                        a.isFinished = function() {
                            return this.is(o)
                        }
                        ,
                        a.error = e.error || function(e, t, n, i, o, a, r) {
                            throw r || a
                        }
                        ,
                        a.states = function() {
                            return Object.keys(l).sort()
                        }
                        ,
                        i && !i.defer && a[i.event](),
                        a
                    },
                    doCallback: function(e, t, i, o, a, r) {
                        if (t)
                            try {
                                return t.apply(e, [i, o, a].concat(r))
                            } catch (c) {
                                return e.error(i, o, a, r, n.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", c)
                            }
                    },
                    beforeAnyEvent: function(e, t, i, o, a) {
                        return n.doCallback(e, e.onbeforeevent, t, i, o, a)
                    },
                    afterAnyEvent: function(e, t, i, o, a) {
                        return n.doCallback(e, e.onafterevent || e.onevent, t, i, o, a)
                    },
                    leaveAnyState: function(e, t, i, o, a) {
                        return n.doCallback(e, e.onleavestate, t, i, o, a)
                    },
                    enterAnyState: function(e, t, i, o, a) {
                        return n.doCallback(e, e.onenterstate || e.onstate, t, i, o, a)
                    },
                    changeState: function(e, t, i, o, a) {
                        return n.doCallback(e, e.onchangestate, t, i, o, a)
                    },
                    beforeThisEvent: function(e, t, i, o, a) {
                        return n.doCallback(e, e["onbefore" + t], t, i, o, a)
                    },
                    afterThisEvent: function(e, t, i, o, a) {
                        return n.doCallback(e, e["onafter" + t] || e["on" + t], t, i, o, a)
                    },
                    leaveThisState: function(e, t, i, o, a) {
                        return n.doCallback(e, e["onleave" + i], t, i, o, a)
                    },
                    enterThisState: function(e, t, i, o, a) {
                        return n.doCallback(e, e["onenter" + o] || e["on" + o], t, i, o, a)
                    },
                    beforeEvent: function(e, t, i, o, a) {
                        if (!1 === n.beforeThisEvent(e, t, i, o, a) || !1 === n.beforeAnyEvent(e, t, i, o, a))
                            return !1
                    },
                    afterEvent: function(e, t, i, o, a) {
                        n.afterThisEvent(e, t, i, o, a),
                        n.afterAnyEvent(e, t, i, o, a)
                    },
                    leaveState: function(e, t, i, o, a) {
                        var r = n.leaveThisState(e, t, i, o, a)
                          , c = n.leaveAnyState(e, t, i, o, a);
                        return !1 !== r && !1 !== c && (n.ASYNC === r || n.ASYNC === c ? n.ASYNC : void 0)
                    },
                    enterState: function(e, t, i, o, a) {
                        n.enterThisState(e, t, i, o, a),
                        n.enterAnyState(e, t, i, o, a)
                    },
                    buildEvent: function(e, t) {
                        return function() {
                            var i = this.current
                              , o = t[i] || (t[n.WILDCARD] != n.WILDCARD ? t[n.WILDCARD] : i) || i
                              , a = Array.prototype.slice.call(arguments);
                            if (this.transition)
                                return this.error(e, i, o, a, n.Error.PENDING_TRANSITION, "event " + e + " inappropriate because previous transition did not complete");
                            if (this.cannot(e))
                                return this.error(e, i, o, a, n.Error.INVALID_TRANSITION, "event " + e + " inappropriate in current state " + this.current);
                            if (!1 === n.beforeEvent(this, e, i, o, a))
                                return n.Result.CANCELLED;
                            if (i === o)
                                return n.afterEvent(this, e, i, o, a),
                                n.Result.NOTRANSITION;
                            var r = this;
                            this.transition = function() {
                                return r.transition = null,
                                r.current = o,
                                n.enterState(r, e, i, o, a),
                                n.changeState(r, e, i, o, a),
                                n.afterEvent(r, e, i, o, a),
                                n.Result.SUCCEEDED
                            }
                            ,
                            this.transition.cancel = function() {
                                r.transition = null,
                                n.afterEvent(r, e, i, o, a)
                            }
                            ;
                            var c = n.leaveState(this, e, i, o, a);
                            return !1 === c ? (this.transition = null,
                            n.Result.CANCELLED) : n.ASYNC === c ? n.Result.PENDING : this.transition ? this.transition() : void 0
                        }
                    }
                };
                "undefined" != typeof e && e.exports && (t = e.exports = n),
                t.StateMachine = n
            }()
        }
        , , , , function(e, t, n) {
            "use strict";
            t.fail = function(e) {
                throw new Error("NC Fail: " + e)
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function() {
                var e = navigator.userAgent;
                return /Windows/.test(e) ? "win" : /Macintosh/.test(e) ? "mac" : /Android/.test(e) ? "Android" : /(iPhone|iPad)/.test(e) ? "iOS" : /Linux/.test(e) ? "linux" : "unknow"
            }
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                if ("string" == typeof t && t.indexOf(".") !== -1) {
                    var n = t.split(".")
                      , o = n[0]
                      , a = n.slice(1).join(".");
                    return e.hasOwnProperty(o) ? i(e[o], a) : ""
                }
                return e.hasOwnProperty(t) ? e[t] : ""
            }
            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e.replace(/\{\{([\w\.]+)\}\}/g, function(e, n) {
                    return i(t, n)
                })
            }
            t.render = o
        }
        , function(e, t, n) {
            "use strict";
            function i(e) {
                var t, n = "", i = f.getElementById("umFlash");
                if (i && !n)
                    try {
                        t = i.getCookie(e) || "",
                        n = t
                    } catch (o) {}
                try {
                    _.localStorage && !n && (t = localStorage[e] || "",
                    n = t)
                } catch (o) {}
                if (_.navigator.cookieEnabled && !n) {
                    var a = f.cookie.indexOf(e + "=");
                    if (a != -1) {
                        a += e.length + 1;
                        var r = f.cookie.indexOf(";", a);
                        r == -1 && (r = f.cookie.length),
                        t = decodeURIComponent(f.cookie.substring(a, r)) || "",
                        n = t
                    }
                }
                return n
            }
            function o(e, t, n) {
                n = n || 7;
                var i = new Date;
                i.setTime(i.getTime() + 864e5 * n),
                f.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", i.toGMTString()].join("")
            }
            function a() {
                var e, t = /Firefox/.test(navigator.userAgent);
                if (t)
                    try {
                        e = localStorage.getItem(g)
                    } catch (n) {}
                return e = e || i(g),
                e || (e = h + r(11),
                o(g, e, 3650)),
                e
            }
            function r(e) {
                for (var t = ""; t.length < e; )
                    t += Math.random().toString().substr(2);
                return t.substring(t.length - e)
            }
            function c() {
                var e = _._sec_module = _._sec_module || {};
                if (d = e.token)
                    return d;
                var t = a();
                return d = t + h + r(3),
                e.token = d,
                d
            }
            function s() {
                if (u)
                    return u;
                var e = "_umdata";
                try {
                    _.localStorage && (u = localStorage.getItem(e))
                } catch (t) {}
                return u ? u : (u = i(e),
                u || "")
            }
            function l() {
                return p ? p : p = s() || c()
            }
            var d, u, p, _ = window, f = document, g = "_uab_collina", h = _.pointman && pointman._now ? pointman._now : (new Date).getTime();
            t.getSecToken = c,
            t.getNCToken = l
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                this.id = function(e) {
                    return 0 === e.indexOf("#") ? r.getElementById(e.slice(1)) : r.getElementById(e)
                }
                ,
                this.tag = function(e) {
                    var t = e.split(" ");
                    return this.id(t[0]).getElementsByTagName(t[1])
                }
                ,
                this.toggle = function(e) {
                    var t = this.id(e);
                    "none" == t.style.display || "" === t.style.display ? t.style.display = "block" : t.style.display = "none"
                }
                ,
                this.clone = function(e) {
                    var t, n, i = e;
                    if (e && ((n = e instanceof Array) || e instanceof Object)) {
                        i = n ? [] : {};
                        for (t in e)
                            e.hasOwnProperty(t) && (i[t] = this.clone(e[t]))
                    }
                    return i
                }
                ,
                this.extend = function(e, t, n) {
                    var i, o;
                    if (t instanceof Array)
                        for (i = 0,
                        o = t.length; i < o; i++)
                            this.extend(e, t[i], n);
                    for (i in t)
                        i in e && t.hasOwnProperty(i) && (e[i] = t[i]);
                    return e
                }
                ,
                this.objUpdate = function(e, t) {
                    var n;
                    for (n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                ,
                this.loadjs = function(e, t, n) {
                    function i() {
                        clearTimeout(l),
                        s || (s = !0,
                        t())
                    }
                    var o = r.createElement("script");
                    o.type = "text/javascript";
                    var a = n || "";
                    c.getElementsByClassName(a),
                    o.className = a;
                    var s;
                    o.onreadystatechange = function() {
                        "loaded" != o.readyState && "complete" != o.readyState || (o.onreadystatechange = null,
                        i())
                    }
                    ,
                    o.onload = i,
                    o.src = e,
                    o.onerror = function(e) {
                        t(e),
                        o.onload = null
                    }
                    ;
                    var l = setTimeout(function() {
                        o.onerror("timeout")
                    }, 2e4)
                      , d = r.getElementsByTagName("script")[0];
                    d.parentNode.insertBefore(o, d)
                }
                ,
                this.jsonp = function(n) {
                    var i = 0;
                    n.timeout = e.timeout || 3e3,
                    n.times = e.times || 3;
                    var o;
                    if (n = n || {},
                    !n.url || !n.callback)
                        throw new Error("\u53c2\u6570\u4e0d\u5408\u6cd5");
                    var c = ("jsonp_" + Math.random()).replace(".", "")
                      , s = r.getElementsByTagName("script")[0]
                      , l = "";
                    n.data ? (n.data[n.callback] = c,
                    l += t(n.data)) : l += n.callback + "=" + c;
                    var d = r.createElement("script");
                    s.parentNode.insertBefore(d, s),
                    a[c] = function(e) {
                        a[c] = function() {
                            report("\u56de\u8c03\u5df2\u6267\u884c\u8fc7,\u4e0d\u518d\u6267\u884c"),
                            a[c] = null
                        }
                        ;
                        try {
                            d.parentNode && d.parentNode.removeChild(d)
                        } catch (t) {}
                        clearInterval(o),
                        n.success && n.success(e)
                    }
                    ,
                    d.src = n.url + (n.url.indexOf("?") == -1 ? "?" : "&") + l,
                    n.timeout && (o = setInterval(function() {
                        i++;
                        var e;
                        if (i >= n.times) {
                            a[c] = function() {}
                            ,
                            clearInterval(o);
                            try {
                                d.parentNode && d.parentNode.removeChild(d)
                            } catch (t) {}
                            n.fail(1)
                        } else
                            try {
                                d.parentNode && d.parentNode.removeChild(d),
                                d = r.createElement("script"),
                                e = r.getElementsByTagName("script")[0],
                                e.parentNode.insertBefore(d, e),
                                d.src = n.url + (n.url.indexOf("?") == -1 ? "?" : "&") + l + "&t=" + Math.random()
                            } catch (t) {}
                    }, n.timeout))
                }
                ,
                this.obj2str = function n(e) {
                    var t, i = [], a = n;
                    if ("string" == typeof e)
                        return '"' + e.replace(/(['"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"';
                    if ("undefined" == typeof e)
                        return "undefined";
                    if ("object" == ("undefined" == typeof e ? "undefined" : o(e))) {
                        if (null === e)
                            return "null";
                        if (e.sort) {
                            for (t = 0; t < e.length; t++)
                                i.push(a(e[t]));
                            i = "[" + i.join() + "]"
                        } else {
                            for (t in e)
                                e.hasOwnProperty(t) && i.push('"' + t + '":' + a(e[t]));
                            i = "{" + i.join() + "}"
                        }
                        return i
                    }
                    return e.toString()
                }
                ,
                this.addHandler = function(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                }
                ,
                this.removeEvt = function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                }
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , a = window
              , r = document
              , c = n(1);
            t.BaseFun = i
        }
        , function(e, t, n) {
            "use strict";
            var i = n(20)
              , o = {
                renderTo: "",
                isEnabled: !0,
                foreign: 0,
                cssUrl: !1,
                uaUrl: "",
                appkey: "",
                trans: {},
                token: i.getNCToken(),
                elementID: "",
                audio: !1,
                timeout: 3e3,
                times: 3,
                is_Opt: 0,
                language: "cn",
                umidServer: "h",
                scene: "",
                is_tbLogin: 0,
                tb_errMsg: "",
                glog: .05,
                apimap: {},
                callback: function() {},
                error: function() {},
                verifycallback: function() {}
            };
            t.default_opt = o
        }
        , function(e, t, n) {
            "use strict";
            var i = "//cf.aliyun.com";
            e.exports = {
                min_width: 300,
                min_height: 100,
                default_stroke_width: 16,
                min_events_count: 30,
                max_retry: 3,
                api_prepare: i + "/scratchCardSlide/prepare.jsonp",
                api_report: i + "/scratchCardSlide/dataReport.jsonp",
                api_analyze: i + "/scratchCardSlide/analyze.jsonp",
                obj_ok: "//img.alicdn.com/tfs/TB1OLQ7SFXXXXaoapXXXXXXXXXX-57-70.png",
                obj_fail: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                obj_size: 70,
                bg_back: "//img.alicdn.com/tps/TB1ml9hPFXXXXcjXFXXXXXXXXXX-100-80.png",
                bg_front: "//img.alicdn.com/tps/TB1531mPFXXXXc_XpXXXXXXXXXX-100-80.png",
                err_TIMEOUT_uab: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_TIMEOUT_um: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_fail_prepare: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_fail_analyze: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                grid_size: 8,
                action_timeout: 6e4,
                default_options: {
                    language: "cn",
                    objects: ["//img.alicdn.com/tfs/TB1NYk7SFXXXXcWaXXXXXXXXXXX-57-69.png", "//img.alicdn.com/tfs/TB12q8sSVXXXXcSXFXXXXXXXXXX-57-67.png"],
                    elements: ["//img.alicdn.com/tfs/TB1NYk7SFXXXXcWaXXXXXXXXXXX-57-69.png", "//img.alicdn.com/tfs/TB12q8sSVXXXXcSXFXXXXXXXXXX-57-67.png"],
                    obj_ok: "//img.alicdn.com/tfs/TB1OLQ7SFXXXXaoapXXXXXXXXXX-57-70.png",
                    obj_fail: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                    obj_error: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                    bg_front: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC",
                    bg_back_prepared: "//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png",
                    bg_back: "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
                    bg_back_fail: "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
                    bg_back_pass: "//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png"
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                var n, i, a = t ? {} : e;
                for (n in e)
                    e.hasOwnProperty(n) && (i = e[n],
                    "string" == typeof i && (i = [i]),
                    a[n] = '<span class="nc-lang-cnt" data-nc-lang="' + n + '">' + o(p[n], i) + "</span>");
                return a
            }
            function o(e, t) {
                return (e + "").replace(/\\?\{\s*([^{}\s]+)\s*\}/g, function(e, n) {
                    return "\\" === e.charAt(0) ? e.slice(1) : t[n] || ""
                })
            }
            function a(e, t) {
                var n, o = _[e] = _[e] || {};
                t = i(t, !0);
                for (n in t)
                    t.hasOwnProperty(n) && (o[n] = t[n])
            }
            function r(e, t) {
                var n, o = {}, a = _[e] = _[e] || {};
                for (n in a)
                    a.hasOwnProperty(n) && (o[n] = a[n]);
                t = i(t, !0);
                for (n in t)
                    t.hasOwnProperty(n) && (o[n] = t[n]);
                return o
            }
            function c(e, t) {
                return e.replace(/(javascript:noCaptcha.reset\()(\))/gi, "$1" + t + "$2")
            }
            var s, l = "javascript:noCaptcha.reset()", d = "https://survey.taobao.com/survey/AMnMVgrS4?type=%TYPE&str=%STR", u = "{0}", p = {
                _ggk_guide: "{0}",
                _ggk_start: u,
                _ggk_net_err: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_too_fast: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_action_timeout: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_fail: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_success: u,
                _ggk_loading: "{0}"
            }, _ = {
                cn: {
                    _ggk_guide: "\u8bf7\u6441\u4f4f\u9f20\u6807\u5de6\u952e\uff0c\u522e\u51fa\u4e24\u53ea\u5c0f\u9e21",
                    _ggk_start: "",
                    _ggk_net_err: ["\u7f51\u7edc\u5b9e\u5728\u4e0d\u7ed9\u529b<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_fail: ["\u5440\uff0c\u5c0f\u9e21\u9003\u8dd1\u4e86<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u9e21\uff0c\u7ee7\u7eed\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427",
                    _ggk_loading: "\u52a0\u8f7d\u4e2d"
                },
                tw: {
                    _ggk_guide: "\u8acb\u6309\u4f4f\u6ed1\u9f20\u5de6\u9375\uff0c\u522e\u51fa\u5169\u96bb\u5c0f\u96de",
                    _ggk_start: "",
                    _ggk_net_err: ["\u7db2\u8def\u5be6\u5728\u4e0d\u7d66\u529b<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u6620\u554f\u984c"],
                    _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u6620\u554f\u984c"],
                    _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u6620\u554f\u984c"],
                    _ggk_fail: ["\u5440\uff0c\u5c0f\u96de\u9003\u8dd1\u4e86<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u6620\u554f\u984c"],
                    _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u96de\uff0c\u7e7c\u7e8c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427",
                    _ggk_loading: "\u52a0\u8f09\u4e2d"
                },
                en: {
                    _ggk_guide: "Hold your left mouse button down to scratch out two chickens",
                    _ggk_start: "",
                    _ggk_net_err: ["Problem with the network<br/>Please ", l, "try again ", "or", d, " report your problem"],
                    _ggk_too_fast: ["You were being too fast<br/>Please ", l, "try again ", "or", d, " report your problem"],
                    _ggk_action_timeout: ["You've been idled for too long<br/>Please ", l, "try again ", "or", d, " report your problem"],
                    _ggk_fail: ["Oops, the chickens ran away<br/>Please ", l, "try again ", "or", d, " report your problem"],
                    _ggk_success: "Congratulations! You've got the chickens!",
                    _ggk_loading: "Loading"
                },
                es_ES: {
                    _ggk_guide: "Mant\xe9n pulsado el bot\xf3n izquierdo del rat\xf3n para rascar dos pollos",
                    _ggk_start: "",
                    _ggk_net_err: ["Hay problemas con la red.", l, "Vuelve a intentarlo ", "o", d, " informa del problema"],
                    _ggk_too_fast: ["\xa1Has sido demasiado r\xe1pido.", l, "Vuelve a intentarlo ", "o", d, " informa del problema"],
                    _ggk_action_timeout: ["Se ha acabado el tiempo.", l, "Vuelve a intentarlo ", "o", d, " informa del problema"],
                    _ggk_fail: ["\xa1Vaya! Los pollos han huido.", l, "Vuelve a intentarlo ", "o", d, " informa del problema"],
                    _ggk_loading: "Cargando",
                    _ggk_success: "\xa1Enhorabuena! \xa1Has atrapado los pollos!"
                },
                pl_PL: {
                    _ggk_guide: "Przytrzymaj lewy przycisk myszy, aby zdoby\u0107 dwa kurczaki",
                    _ggk_start: "",
                    _ggk_net_err: ["Problem z sieci\u0105.", l, "Spr\xf3buj ponownie ", "lub", d, " zg\u0142o\u015b sw\xf3j problem"],
                    _ggk_too_fast: ["Za szybko.", l, "Spr\xf3buj ponownie ", "lub", d, " zg\u0142o\u015b sw\xf3j problem"],
                    _ggk_action_timeout: ["Bezczynno\u015b\u0107 trwa\u0142a zbyt d\u0142ugo.", l, "Spr\xf3buj ponownie ", "lub", d, " zg\u0142o\u015b sw\xf3j problem"],
                    _ggk_fail: ["Ups, kurczaki uciek\u0142y.", l, "Spr\xf3buj ponownie ", "lub", d, " zg\u0142o\u015b sw\xf3j problem"],
                    _ggk_loading: "\u0141aduj\u0119",
                    _ggk_success: "Gratulacje! Uda\u0142o Ci si\u0119 zdoby\u0107 kurczaki!"
                },
                fr_FR: {
                    _ggk_guide: "Maintenez appuy\xe9 le bouton gauche de la souris pour gratter deux poulets",
                    _ggk_start: "",
                    _ggk_net_err: ["Probl\xe8me de r\xe9seau.", l, "Veuillez r\xe9essayer ", "ou", d, " signaler votre probl\xe8me"],
                    _ggk_too_fast: ["Vous avez \xe9t\xe9 trop rapide.", l, "Veuillez r\xe9essayer ", "ou", d, " signaler votre probl\xe8me"],
                    _ggk_action_timeout: ["D\xe9lai d'attente d\xe9pass\xe9.", l, "Veuillez r\xe9essayer ", "ou", d, " signaler votre probl\xe8me"],
                    _ggk_fail: ["Oups, les poulets se sont enfuit.", l, "Veuillez r\xe9essayer ", "ou", d, " signaler votre probl\xe8me"],
                    _ggk_loading: "Chargement",
                    _ggk_success: "Bravo\xa0! Les poulets sont \xe0 vous'!"
                },
                de_DE: {
                    _ggk_guide: "Halten Sie die linke Maustaste gedr\xfcckt, um zwei H\xfchner zu kratzen",
                    _ggk_start: "",
                    _ggk_net_err: ["Netzwerkproblem. Bitte.", l, "versuchen Sie es erneut ", "oder", d, " melden Sie ein Problem"],
                    _ggk_too_fast: ["Zu schnell. Bitte.", l, "versuchen Sie es erneut ", "oder", d, " melden Sie ein Problem"],
                    _ggk_action_timeout: ["Zeit\xfcberschreitung, bitte.", l, "versuchen Sie es erneut ", "oder", d, " melden Sie ein Problem"],
                    _ggk_fail: ["Hoppla, die H\xfchner sind davongelaufen.", l, "versuchen Sie es erneut ", "oder", d, " melden Sie ein Problem"],
                    _ggk_loading: "Lade",
                    _ggk_success: "Gl\xfcckwunsch! Sie haben die H\xfchner erwischt!"
                },
                it_IT: {
                    _ggk_guide: "Tieni premuto il tasto sinistro del mouse per grattare due polli",
                    _ggk_start: "",
                    _ggk_net_err: ["Problemi con la rete.", l, "Riprova ", "o", d, " segnala il problema"],
                    _ggk_too_fast: ["Sei stato troppo veloce.", l, "Riprova ", "o", d, " segnala il problema"],
                    _ggk_action_timeout: ["Tempo scaduto.", l, "Riprova ", "o", d, " segnala il problema"],
                    _ggk_fail: ["Ops... i polli sono scappati.", l, "Riprova ", "o", d, " segnala il problema"],
                    _ggk_loading: "Sto caricando",
                    _ggk_success: "Complimenti! Hai preso i polli!"
                },
                ru_RU: {
                    _ggk_guide: "\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u0436\u0430\u0442\u043e\u0439 \u043b\u0435\u0432\u0443\u044e \u043a\u043d\u043e\u043f\u043a\u0443 \u043c\u044b\u0448\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0446\u0430\u0440\u0430\u043f\u0430\u0442\u044c \u0434\u0432\u0443\u0445 \u0446\u044b\u043f\u043b\u044f\u0442",
                    _ggk_start: "",
                    _ggk_net_err: ["\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u0435\u0442\u044c\u044e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", d, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                    _ggk_too_fast: ["\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u044b\u0441\u0442\u0440\u043e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", d, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                    _ggk_action_timeout: ["\u0412\u0440\u0435\u043c\u044f \u0438\u0441\u0442\u0435\u043a\u043b\u043e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", d, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                    _ggk_fail: ["\u041e\u0439, \u0446\u044b\u043f\u043b\u044f\u0442\u0430 \u0443\u0431\u0435\u0436\u0430\u043b\u0438.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", d, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                    _ggk_loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                    _ggk_success: "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! \u0412\u044b \u043f\u043e\u0439\u043c\u0430\u043b\u0438 \u0446\u044b\u043f\u043b\u044f\u0442!"
                },
                ja_JP: {
                    _ggk_guide: "\u30de\u30a6\u30b9\u306e\u5de6\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u30662\u5339\u306e\u30cb\u30ef\u30c8\u30ea\u3092\u6d88\u3057\u307e\u3059",
                    _ggk_start: "",
                    _ggk_net_err: ["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", d, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                    _ggk_too_fast: ["\u901f\u3059\u304e\u307e\u3059.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", d, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                    _ggk_action_timeout: ["\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", d, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                    _ggk_fail: ["\u304a\u3063\u3068\u3001\u30cb\u30ef\u30c8\u30ea\u304c\u9003\u3052\u3066\u3057\u307e\u3044\u307e\u3057\u305f.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", d, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                    _ggk_loading: "\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059",
                    _ggk_success: "\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01\u30cb\u30ef\u30c8\u30ea\u3092\u6355\u307e\u3048\u3089\u308c\u307e\u3057\u305f!"
                },
                ko_KR: {
                    _ggk_guide: "\uc67c\ucabd \ub9c8\uc6b0\uc2a4 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ub2ed \ub450 \ub9c8\ub9ac\ub97c \uc9c0\uc6b0\uc138\uc694",
                    _ggk_start: "",
                    _ggk_net_err: ["\ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4\u3059.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", d, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                    _ggk_too_fast: ["\ub108\ubb34 \ube60\ub985\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", d, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                    _ggk_action_timeout: ["\uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", d, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                    _ggk_fail: ["\uc774\ub7f0, \ub2ed\uc774 \ub2ec\uc544\ub0ac\uc2b5\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", d, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                    _ggk_loading: "\ub85c\ub529",
                    _ggk_success: "\ucd95\ud558\ud569\ub2c8\ub2e4! \ub2ed\uc744 \uc7a1\uc73c\uc168\uad70\uc694!"
                },
                ar_SA: {
                    _ggk_guide: "\u0627\u0633\u062a\u0645\u0631 \u0641\u064a \u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0627\u0648\u0633 \u0627\u0644\u0623\u064a\u0633\u0631 \u0644\u062d\u0630\u0641 \u062f\u062c\u0627\u062c\u062a\u064a\u0646",
                    _ggk_start: "",
                    _ggk_net_err: ["\u062a\u0648\u062c\u062f \u0645\u0634\u0643\u0644\u0629 \u0628\u0627\u0644\u0634\u0628\u0643\u0629. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", d, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                    _ggk_too_fast: ["\u0643\u0646\u062a \u0633\u0631\u064a\u0639\u064b\u0627 \u062c\u062f\u064b\u0627. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", d, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                    _ggk_action_timeout: ["\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u0645\u0647\u0644\u0629\u060c \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", d, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                    _ggk_fail: ["\u0639\u0630\u0631\u064b\u0627\u060c \u0644\u0642\u062f \u0647\u0631\u0628\u062a \u0627\u0644\u062f\u062c\u0627\u062c\u0627\u062a. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", d, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                    _ggk_loading: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
                    _ggk_success: "\u062a\u0647\u0627\u0646\u064a\u0646\u0627! \u0644\u0642\u062f \u062d\u0635\u0644\u062a \u0639\u0644\u0649 \u0627\u0644\u062f\u062c\u0627\u062c\u062a\u064a\u0646!"
                },
                tr_TR: {
                    _ggk_guide: "2 adet tavu\u011fun \xfcst\xfcn\xfc \xe7izmek i\xe7in farenin sol tu\u015funu bas\u0131l\u0131 tutun",
                    _ggk_start: "",
                    _ggk_net_err: ["A\u011fla ilgili bir sorun. L\xfctfen.", l, "tekrar deneyin ", "veya", d, " sorununuzu bildirin"],
                    _ggk_too_fast: ["Fazla h\u0131zl\u0131yd\u0131n\u0131z. L\xfctfen.", l, "tekrar deneyin ", "veya", d, " sorununuzu bildirin"],
                    _ggk_action_timeout: ["S\xfcre doldu, l\xfctfen.", l, "tekrar deneyin ", "veya", d, " sorununuzu bildirin"],
                    _ggk_fail: ["T\xfch, tavuklar ka\xe7t\u0131. L\xfctfen.", l, "tekrar deneyin ", "veya", d, " sorununuzu bildirin"],
                    _ggk_loading: "Y\xfckleniyor",
                    _ggk_success: "Tebrikler! Tavuklar\u0131 ald\u0131n\u0131z!"
                },
                th_TH: {
                    _ggk_guide: "\u0e01\u0e14\u0e1b\u0e38\u0e21\u0e40\u0e21\u0e32\u0e2a\u0e4c\u0e14\u0e49\u0e32\u0e19\u0e0b\u0e49\u0e32\u0e22\u0e04\u0e49\u0e32\u0e07\u0e44\u0e27\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e02\u0e39\u0e14\u0e40\u0e2d\u0e32\u0e44\u0e01\u0e48\u0e2a\u0e2d\u0e07\u0e15\u0e31\u0e27",
                    _ggk_start: "",
                    _ggk_net_err: ["\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", d, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                    _ggk_too_fast: ["\u0e04\u0e38\u0e13\u0e17\u0e33\u0e40\u0e23\u0e47\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", d, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                    _ggk_action_timeout: ["\u0e2b\u0e21\u0e14\u0e40\u0e27\u0e25\u0e32.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", d, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                    _ggk_fail: ["\u0e2d\u0e38\u0e4a\u0e1b\u0e2a\u0e4c \u0e44\u0e01\u0e48\u0e27\u0e34\u0e48\u0e07\u0e2b\u0e19\u0e35\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", d, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                    _ggk_loading: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14",
                    _ggk_success: "\u0e02\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e22\u0e34\u0e19\u0e14\u0e35! \u0e04\u0e38\u0e13\u0e08\u0e31\u0e1a\u0e44\u0e01\u0e48\u0e44\u0e14\u0e49!"
                },
                vi_VN: {
                    _ggk_guide: "Nh\u1ea5n gi\u1eef n\xfat chu\u1ed9t tr\xe1i \u0111\u1ec3 c\xe0o ra hai con g\xe0",
                    _ggk_start: "",
                    _ggk_net_err: ["M\u1ea1ng g\u1eb7p s\u1ef1 c\u1ed1.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", d, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                    _ggk_too_fast: ["B\u1ea1n \u0111\xe3 qu\xe1 nhanh.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", d, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                    _ggk_action_timeout: ["H\u1ebft gi\u1edd.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", d, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                    _ggk_fail: ["R\u1ea5t ti\u1ebfc, l\u0169 g\xe0 \u0111\xe3 ch\u1ea1y \u0111i r\u1ed3i.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", d, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                    _ggk_loading: "\u0110ang t\u1ea3i",
                    _ggk_success: "Xin ch\xfac m\u1eebng! B\u1ea1n \u0111\xe3 b\u1eaft \u0111\u01b0\u1ee3c g\xe0!"
                },
                nl_NL: {
                    _ggk_guide: "Houd de linkermuisknop ingedrukt om twee kippen weg te strepen",
                    _ggk_start: "",
                    _ggk_net_err: ["Probleem met het netwerk.", l, "Probeer het opnieuw ", "of", d, " rapporteer uw probleem"],
                    _ggk_too_fast: ["U was te snel.", l, "Probeer het opnieuw ", "of", d, " rapporteer uw probleem"],
                    _ggk_action_timeout: ["Time-out.", l, "Probeer het opnieuw ", "of", d, " rapporteer uw probleem"],
                    _ggk_fail: ["Oeps, de kippen zijn weggerend.", l, "Probeer het opnieuw ", "of", d, " rapporteer uw probleem"],
                    _ggk_loading: "Laden",
                    _ggk_success: "Gefeliciteerd! U hebt de kippen!"
                },
                iw_HE: {
                    _ggk_guide: "\u05d4\u05d7\u05d6\u05e7 \u05d0\u05ea \u05dc\u05d7\u05e6\u05df \u05d4\u05e2\u05db\u05d1\u05e8 \u05d4\u05e9\u05de\u05d0\u05dc\u05d9 \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05d2\u05e8\u05d3 \u05d5\u05dc\u05d7\u05e9\u05d5\u05e3 \u05e9\u05ea\u05d9 \u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea",
                    _ggk_start: "",
                    _ggk_net_err: ["\u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", d, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                    _ggk_too_fast: ["\u05d4\u05d9\u05d9\u05ea \u05de\u05d4\u05d9\u05e8 \u05de\u05d3\u05d9.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", d, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                    _ggk_action_timeout: ["\u05d4\u05d6\u05de\u05df \u05ea\u05dd.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", d, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                    _ggk_fail: ["\u05d0\u05d5\u05e4\u05e1, \u05d4\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea \u05d1\u05e8\u05d7\u05d5.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", d, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                    _ggk_loading: "\u05d8\u05d5\u05e2\u05df",
                    _ggk_success: "\u05de\u05d6\u05dc \u05d8\u05d5\u05d1! \u05d4\u05e9\u05d2\u05ea \u05d0\u05ea \u05d4\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea!"
                },
                in_ID: {
                    _ggk_guide: "Tahan tombol mouse kiri Anda untuk menggurat dua ekor ayam",
                    _ggk_start: "",
                    _ggk_net_err: ["Masalah dengan jaringan.", l, "Coba lagi ", "atau", d, " laporkan masalah Anda"],
                    _ggk_too_fast: ["Anda terlalu cepat.", l, "Coba lagi ", "atau", d, " laporkan masalah Anda"],
                    _ggk_action_timeout: ["Waktu habis.", l, "Coba lagi ", "atau", d, " laporkan masalah Anda"],
                    _ggk_fail: ["Ups, ayamnya lari.", l, "Coba lagi ", "atau", d, " laporkan masalah Anda"],
                    _ggk_loading: "Memuat",
                    _ggk_success: "Selamat! Anda mendapatkan ayamnya!"
                }
            };
            for (s in _)
                _.hasOwnProperty(s) && i(_[s]);
            _.zh_CN = _.cn,
            _.zh_TW = _.tw,
            _.en_US = _.en,
            _.iw_IL = _.iw_HE,
            _.pt_PT = _.pt_BR,
            _.ar_MA = _.ar_SA,
            t.language = _,
            t.upLang = a,
            t.replaceLang = r,
            t.upResetIndex = c
        }
        , function(e, t, n) {
            t = e.exports = n(8)(),
            t.push([e.i, ".nc-container div#nc-loading-circle {\n  background: transparent;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.nc-container div#nc-loading-circle .sk-circle {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.nc-container #nc-loading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #818181;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n.nc-container #nc-loading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.nc-container #nc-loading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.nc-container #nc-loading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.nc-container #nc-loading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.nc-container #nc-loading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.nc-container #nc-loading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.nc-container #nc-loading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.nc-container #nc-loading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.nc-container #nc-loading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.nc-container #nc-loading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.nc-container #nc-loading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.nc-container #nc-loading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.nc-container #nc-loading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.nc-container #nc-loading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.nc-container #nc-loading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.nc-container #nc-loading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.nc-container #nc-loading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.nc-container #nc-loading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.nc-container #nc-loading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.nc-container #nc-loading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.nc-container #nc-loading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.nc-container #nc-loading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n.nc-container .scale_text2 #nc-loading-circle .sk-circle:before {\n  background-color: #fff;\n}\n", ""])
        }
        , function(e, t, n) {
            var i = n(25);
            "string" == typeof i && (i = [[e.i, i, ""]]),
            n(10)(i, {}),
            i.locals && (e.exports = i.locals)
        }
        , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
            "use strict";
            var i = window
              , o = n(1);
            t.makeLog = function(e) {
                function t(e, t, n) {
                    var i = o.obj2param({
                        appkey: encodeURIComponent(e),
                        token: encodeURIComponent(t),
                        flag: n
                    });
                    o.send(a + "?cache=" + Math.random() + "&gmkey=evt&gokey=" + encodeURIComponent(i))
                }
                function n(t) {
                    i.console && void 0;
                    var n = e + "jstracker.2"
                      , a = o.obj2param({
                        type: "9",
                        id: "jstracker",
                        v: "1",
                        nick: "",
                        islogin: "",
                        msg: t,
                        file: "",
                        ua: "",
                        line: "",
                        scrolltop: "",
                        screen: "",
                        t: +new Date
                    });
                    o.send(n + "?" + a)
                }
                e = e || "//gm.mmstat.com/";
                var a = e + "aq.1.1.3"
                  , r = {};
                return r.log = t,
                r.report = n,
                r
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(5);
            t.init = function(e) {
                var t = e.fsm;
                t.onenteractiontimeout = function() {
                    i.addClass(e.el, "nc-fail")
                }
                ,
                t.onleaveactiontimeout = function() {
                    i.removeClass(e.el, "nc-fail")
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterdestroyed = function() {
                    e.el.innerHTML = ""
                }
                ,
                t.onleavedestroyed = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onentererror = function() {}
                ,
                t.onleaveerror = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(5)
              , o = n(23);
            t.init = function(e) {
                var t = e.fsm
                  , n = i.mix({}, o.default_options, e.options || {});
                t.onenterfail = function() {
                    var t = (e.index > 0 ? e.index : 1,
                    e.scrape.prefix);
                    i.addClass(e.el, "nc-fail");
                    var o = document.getElementById(t + "container");
                    if (o && n.bg_back_fail) {
                        var a = i.getElementsByClassName("nc-bg", o)[0];
                        a && (a.style.background = "url(" + n.bg_back_fail + ")")
                    }
                }
                ,
                t.onleavefail = function() {
                    i.removeClass(e.el, "nc-fail")
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterinitially = function() {}
                ,
                t.onleaveinitially = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterload_error = function() {}
                ,
                t.onleaveload_error = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(127)
              , o = n(128)
              , a = n(126)
              , r = n(5)
              , c = a.names
              , s = n(2);
            t.init = function(e) {
                var t = e.fsm;
                t.onenterloading = function() {
                    UA_Opt.resetSA && UA_Opt.resetSA();
                    var n = e.scrape || o.create(e);
                    e.scrape = n,
                    s.resolve().then(function() {
                        var t = e._custom_state._on_loading;
                        return t = Array.isArray(t) ? t : [],
                        t.length > 0 ? s.all(r.map(t, function(e) {
                            return e()
                        })) : 0
                    }).then(function() {
                        return new s(function(t, n) {
                            i.load(e, function(e) {
                                return e ? n(e) : t()
                            })
                        }
                        )
                    }).then(function() {
                        var t = e._custom_state.loading;
                        return t = Array.isArray(t) ? t : [],
                        t.length > 0 ? s.all(r.map(t, function(e) {
                            return e()
                        })) : 0
                    }).then(function() {
                        return new s(function(t, i) {
                            o.render(n, function(n) {
                                return n ? void i(n) : (e.fire(c.ready),
                                void t())
                            })
                        }
                        )
                    }).then(function() {
                        return t.load()
                    })["catch"](function(e) {
                        t.loaderror()
                    })
                }
                ,
                t.onleaveloading = function() {
                    e.on_leave_loading && e.on_leave_loading()
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterneed_two_step_verify = function() {}
                ,
                t.onleaveneed_two_step_verify = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(5)
              , o = n(23);
            t.init = function(e) {
                var t = e.fsm
                  , n = i.mix({}, o.default_options, e.options || {});
                t.onenterpass = function() {
                    var t = (e.index > 0 ? e.index : 1,
                    e.scrape.prefix);
                    i.addClass(e.el, "nc-pass");
                    var o = document.getElementById(t + "container");
                    if (o && n.bg_back_pass) {
                        var a = i.getElementsByClassName("nc-bg", o)[0];
                        a && (a.style.background = "url(" + n.bg_back_pass + ")")
                    }
                }
                ,
                t.onleavepass = function() {
                    i.removeClass(e.el, "nc-pass")
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterready = function() {}
                ,
                t.onleaveready = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterreseting = function() {
                    t.resetdone()
                }
                ,
                t.onleavereseting = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterts_error = function() {}
                ,
                t.onleavets_error = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterts_fail = function() {}
                ,
                t.onleavets_fail = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterts_loading = function() {}
                ,
                t.onleavets_loading = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterts_pass = function() {}
                ,
                t.onleavets_pass = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterts_ready = function() {}
                ,
                t.onleavets_ready = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterts_verifying = function() {}
                ,
                t.onleavets_verifying = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            t.init = function(e) {
                var t = e.fsm;
                t.onenterverifying = function() {}
                ,
                t.onleaveverifying = function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = n(4)
        }
        , function(e, t, n) {
            "use strict";
            !function(e, t) {
                var n = e.createElement("style");
                if (e.getElementsByTagName("head")[0].appendChild(n),
                n.styleSheet)
                    n.styleSheet.disabled || (n.styleSheet.cssText = t);
                else
                    try {
                        n.innerHTML = t
                    } catch (i) {
                        n.innerText = t
                    }
            }()
        }
        , , function(e, t, n) {
            "use strict";
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
                if (e !== Object(e))
                    throw TypeError("Object.getPrototypeOf called on non-object");
                return e.__proto__ || e.constructor.prototype || Object.prototype
            }
            ),
            "function" != typeof Object.getOwnPropertyNames && (Object.getOwnPropertyNames = function(e) {
                if (e !== Object(e))
                    throw TypeError("Object.getOwnPropertyNames called on non-object");
                var t, n = [];
                for (t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                return n
            }
            ),
            "function" != typeof Object.create && (Object.create = function(e, t) {
                function n() {}
                if ("object" !== ("undefined" == typeof e ? "undefined" : i(e)))
                    throw TypeError();
                n.prototype = e;
                var o = new n;
                if (e && (o.constructor = n),
                void 0 !== t) {
                    if (t !== Object(t))
                        throw TypeError();
                    Object.defineProperties(o, t)
                }
                return o
            }
            ),
            function() {
                if (!Object.defineProperty || !function() {
                    try {
                        return Object.defineProperty({}, "x", {}),
                        !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                    var e = Object.defineProperty;
                    Object.defineProperty = function(t, n, i) {
                        if (e)
                            try {
                                return e(t, n, i)
                            } catch (o) {}
                        if (t !== Object(t))
                            throw TypeError("Object.defineProperty called on non-object");
                        return Object.prototype.__defineGetter__ && "get"in i && Object.prototype.__defineGetter__.call(t, n, i.get),
                        Object.prototype.__defineSetter__ && "set"in i && Object.prototype.__defineSetter__.call(t, n, i.set),
                        "value"in i && (t[n] = i.value),
                        t
                    }
                }
            }(),
            "function" != typeof Object.defineProperties && (Object.defineProperties = function(e, t) {
                if (e !== Object(e))
                    throw TypeError("Object.defineProperties called on non-object");
                var n;
                for (n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(e, n, t[n]);
                return e
            }
            ),
            Object.keys || (Object.keys = function(e) {
                if (e !== Object(e))
                    throw TypeError("Object.keys called on non-object");
                var t, n = [];
                for (t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                return n
            }
            ),
            Function.prototype.bind || (Function.prototype.bind = function(e) {
                if ("function" != typeof this)
                    throw TypeError("Bind must be called on a function");
                var t = Array.prototype.slice.call(arguments, 1)
                  , n = this
                  , i = function() {}
                  , o = function() {
                    return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
                return this.prototype && (i.prototype = this.prototype),
                o.prototype = new i,
                o
            }
            ),
            Array.isArray = Array.isArray || function(e) {
                return Boolean(e && "[object Array]" === Object.prototype.toString.call(Object(e)))
            }
            ,
            Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if (0 === n)
                    return -1;
                var i = 0;
                if (arguments.length > 0 && (i = Number(arguments[1]),
                isNaN(i) ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))),
                i >= n)
                    return -1;
                for (var o = i >= 0 ? i : Math.max(n - Math.abs(i), 0); o < n; o++)
                    if (o in t && t[o] === e)
                        return o;
                return -1
            }
            ),
            Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if (0 === n)
                    return -1;
                var i = n;
                arguments.length > 1 && (i = Number(arguments[1]),
                i !== i ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i))));
                for (var o = i >= 0 ? Math.min(i, n - 1) : n - Math.abs(i); o >= 0; o--)
                    if (o in t && t[o] === e)
                        return o;
                return -1
            }
            ),
            Array.prototype.every || (Array.prototype.every = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if ("function" != typeof e)
                    throw TypeError();
                var i, o = arguments[1];
                for (i = 0; i < n; i++)
                    if (i in t && !e.call(o, t[i], i, t))
                        return !1;
                return !0
            }
            ),
            Array.prototype.some || (Array.prototype.some = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if ("function" != typeof e)
                    throw TypeError();
                var i, o = arguments[1];
                for (i = 0; i < n; i++)
                    if (i in t && e.call(o, t[i], i, t))
                        return !0;
                return !1
            }
            ),
            Array.prototype.forEach || (Array.prototype.forEach = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if ("function" != typeof e)
                    throw TypeError();
                var i, o = arguments[1];
                for (i = 0; i < n; i++)
                    i in t && e.call(o, t[i], i, t)
            }
            ),
            Array.prototype.map || (Array.prototype.map = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if ("function" != typeof e)
                    throw TypeError();
                var i = [];
                i.length = n;
                var o, a = arguments[1];
                for (o = 0; o < n; o++)
                    o in t && (i[o] = e.call(a, t[o], o, t));
                return i
            }
            ),
            Array.prototype.filter || (Array.prototype.filter = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if ("function" != typeof e)
                    throw TypeError();
                var i, o = [], a = arguments[1];
                for (i = 0; i < n; i++)
                    if (i in t) {
                        var r = t[i];
                        e.call(a, r, i, t) && o.push(r)
                    }
                return o
            }
            ),
            Array.prototype.reduce || (Array.prototype.reduce = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if ("function" != typeof e)
                    throw TypeError();
                if (0 === n && 1 === arguments.length)
                    throw TypeError();
                var i, o = 0;
                if (arguments.length >= 2)
                    i = arguments[1];
                else
                    for (; ; ) {
                        if (o in t) {
                            i = t[o++];
                            break
                        }
                        if (++o >= n)
                            throw TypeError()
                    }
                for (; o < n; )
                    o in t && (i = e.call(void 0, i, t[o], o, t)),
                    o++;
                return i
            }
            ),
            Array.prototype.reduceRight || (Array.prototype.reduceRight = function(e) {
                if (void 0 === this || null === this)
                    throw TypeError();
                var t = Object(this)
                  , n = t.length >>> 0;
                if ("function" != typeof e)
                    throw TypeError();
                if (0 === n && 1 === arguments.length)
                    throw TypeError();
                var i, o = n - 1;
                if (arguments.length >= 2)
                    i = arguments[1];
                else
                    for (; ; ) {
                        if (o in this) {
                            i = this[o--];
                            break
                        }
                        if (--o < 0)
                            throw TypeError()
                    }
                for (; o >= 0; )
                    o in t && (i = e.call(void 0, i, t[o], o, t)),
                    o--;
                return i
            }
            ),
            String.prototype.trim || (String.prototype.trim = function() {
                return String(this).replace(/^\s+/, "").replace(/\s+$/, "");
            }
            ),
            Date.now || (Date.now = function() {
                return Number(new Date)
            }
            ),
            Date.prototype.toISOString || (Date.prototype.toISOString = function() {
                function e(e) {
                    return ("00" + e).slice(-2)
                }
                function t(e) {
                    return ("000" + e).slice(-3)
                }
                return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + t(this.getUTCMilliseconds()) + "Z"
            }
            )
        }
        , function(e, t, n) {
            "use strict";
            function i(e) {
                var t;
                e && (t = e.filename + "") && (t = t.split("?")[0],
                t.match(/(\/ncpc\/nc\.js$)|(\/uab\.js$)|(umscript.*\/um\.js$)/) && (a.console && void 0,
                o()))
            }
            function o(e) {
                "function" == typeof ncDowngrade ? (ncDowngrade(),
                e && a.__nc && a.__nc.show()) : e || setTimeout(function() {
                    o(1)
                }, 100)
            }
            var a = window;
            a.addEventListener ? a.addEventListener("error", i, !0) : a.attachEvent && a.attachEvent("onerror", i)
        }
        , function(e, t, n) {
            "use strict";
            var i, o, a = "//g.alicdn.com/sd/ncpc/nc.css", r = document.getElementsByTagName("link"), c = r.length;
            try {
                for (i = 0; i < c; i++)
                    o = r[i],
                    o.href && o.href.indexOf(a) != -1 && (o.disabled = !0)
            } catch (s) {}
        }
        , function(e, t, n) {
            "use strict";
            var i = n(5);
            t.makeNC = function(e, t) {
                function o(e) {
                    var n = new s(e);
                    d[t.index] = n.__nc;
                    var o = ["on", "reset", "reload", "show", "hide", "upLang", "getToken", "destroy", "getTrans", "setTrans"];
                    return i.map(o, function(e) {
                        n[e] = function() {
                            if (this.is_destroyed)
                                return this;
                            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                                n[i] = arguments[i];
                            var o = this.__nc[e].apply(this.__nc, n);
                            return "destroy" === e && (this.is_destroyed = !0),
                            "getToken" === e || "getTrans" === e || "setTrans" === e ? o : this
                        }
                    }),
                    n
                }
                function a(e) {
                    var n = new l(e,t,c);
                    return d[t.index] = n,
                    n
                }
                function r(e) {
                    return e && "scrape" === e.type ? a(e) : o(e)
                }
                var c = {}
                  , s = n(113).makeNC(e, t, c)
                  , l = n(120).NC2
                  , d = [];
                return window.outer_nc_list = [],
                r.config = function(e) {
                    i.mix(c, e)
                }
                ,
                r.getByIndex = function(e) {
                    return d[e]
                }
                ,
                r.reset = function(e) {
                    var t = r.getByIndex(e);
                    t ? t.reset() : window.outer_nc_list && window.outer_nc_list[e].reset()
                }
                ,
                r
            }
        }
        , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
            "use strict";
            function i(e, t, n) {
                var i = void 0
                  , o = a.createElement("script");
                o.src = e;
                var c = void 0;
                o.onreadystatechange = function() {
                    var e = o.readyState;
                    if ("loaded" === e || "complete" === e) {
                        if (i)
                            return;
                        i = !0,
                        o.onreadystatechange = null,
                        t("ok")
                    }
                }
                ,
                o.onload = function() {
                    i || (i = !0,
                    o.onload = null,
                    o.parentNode.removeChild(o),
                    c != -1 && (clearTimeout(c),
                    t("ok")))
                }
                ,
                o.onerror = function() {
                    i || (i = !0,
                    o.onerror = null,
                    o.parentNode.removeChild(o),
                    c != -1 && (clearTimeout(c),
                    t("err")))
                }
                ,
                c = setTimeout(function() {
                    i || (i = !0,
                    c = -1,
                    t(r))
                }, n || 5e3);
                var s = a.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(o, s)
            }
            function o(e, t, n, o) {
                function a() {
                    c++;
                    var d = e.indexOf("?") > -1 ? "&" : "?"
                      , u = e;
                    c > 1 && (u = e + d + "__retry=" + c),
                    i(u, function(e) {
                        if (s)
                            return void t(r);
                        if ("ok" === e)
                            t(e);
                        else {
                            if (e === r || c >= o)
                                return void t(r);
                            l = setTimeout(function() {
                                a()
                            }, 3e3)
                        }
                    }, n)
                }
                o = o || 3;
                var c = 0
                  , s = void 0
                  , l = void 0
                  , d = void 0;
                t = function(e) {
                    return function() {
                        d || (d = !0,
                        clearTimeout(l),
                        e.apply(null, arguments))
                    }
                }(t),
                a(),
                setTimeout(function() {
                    s = !0,
                    t(r)
                }, n)
            }
            var a = document
              , r = "timeout";
            t.loadScript = o
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                return "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
            }
            t.init = function(e) {
                window.__sc_uaboption = new Object,
                e.is_Opt ? (UA_Opt.MPInterval = i("MPInterval", 4),
                UA_Opt.MMInterval = i("MMInterval", 5),
                UA_Opt.MaxMCLog = i("MaxMCLog", 12),
                UA_Opt.MaxKSLog = i("MaxKSLog", 14),
                UA_Opt.MaxMPLog = i("MaxMPLog", 5),
                UA_Opt.MaxFocusLog = i("MaxFocusLog", 6),
                UA_Opt.SendInterval = i("SendInterval", 5),
                UA_Opt.SendMethod = i("SendMethod", 8),
                UA_Opt.GPInterval = i("GPInterval", 50),
                UA_Opt.MaxGPLog = i("MaxGPLog", 1),
                UA_Opt.MaxTCLog = i("MaxTCLog", 12),
                UA_Opt.Flag = i("Flag", 2980046),
                window.__sc_uaboption.MPInterval = i("MPInterval", 4),
                window.__sc_uaboption.MMInterval = i("MMInterval", 5),
                window.__sc_uaboption.MaxMCLog = i("MaxMCLog", 12),
                window.__sc_uaboption.MaxKSLog = i("MaxKSLog", 14),
                window.__sc_uaboption.MaxMPLog = i("MaxMPLog", 5),
                window.__sc_uaboption.MaxFocusLog = i("MaxFocusLog", 6),
                window.__sc_uaboption.SendInterval = i("SendInterval", 5),
                window.__sc_uaboption.SendMethod = i("SendMethod", 8),
                window.__sc_uaboption.GPInterval = i("GPInterval", 50),
                window.__sc_uaboption.MaxGPLog = i("MaxGPLog", 1),
                window.__sc_uaboption.MaxTCLog = i("MaxTCLog", 12),
                window.__sc_uaboption.Flag = i("Flag", 2980046),
                window.__sc_uaboption.OnlyHost = i("OnlyHost", 1),
                window.__sc_uaboption.MaxMTLog = i("MaxMTLog", 500),
                window.__sc_uaboption.MinMTDwnLog = i("MinMTDwnLog", 30),
                window.__sc_uaboption.MaxNGPLog = i("MaxNGPLog", 1),
                window.__sc_uaboption.sIDs = i("sIDs", ["_n1t|_n1z|nocaptcha|-stage-1"]),
                window.__sc_uaboption.mIDs = i("mIDs", ["nc-canvas", "click2slide-btn"])) : (UA_Opt.SendInterval = 5,
                UA_Opt.SendMethod = 8,
                UA_Opt.MaxMCLog = 12,
                UA_Opt.MaxKSLog = 14,
                UA_Opt.MaxMPLog = 5,
                UA_Opt.MaxGPLog = 1,
                UA_Opt.MaxTCLog = 12,
                UA_Opt.GPInterval = 50,
                UA_Opt.MPInterval = 4,
                UA_Opt.MMInterval = 5,
                UA_Opt.MaxFocusLog = 6,
                UA_Opt.isSendError = 1,
                UA_Opt.Flag = 2980046,
                window.__sc_uaboption.SendInterval = 5,
                window.__sc_uaboption.SendMethod = 8,
                window.__sc_uaboption.MaxMCLog = 12,
                window.__sc_uaboption.MaxKSLog = 14,
                window.__sc_uaboption.MaxMPLog = 5,
                window.__sc_uaboption.MaxGPLog = 1,
                window.__sc_uaboption.MaxTCLog = 12,
                window.__sc_uaboption.GPInterval = 50,
                window.__sc_uaboption.MPInterval = 4,
                window.__sc_uaboption.MMInterval = 5,
                window.__sc_uaboption.MaxFocusLog = 6,
                window.__sc_uaboption.isSendError = 1,
                window.__sc_uaboption.Flag = 2980046,
                window.__sc_uaboption.OnlyHost = 1,
                window.__sc_uaboption.MaxMTLog = 500,
                window.__sc_uaboption.MinMTDwnLog = 30,
                window.__sc_uaboption.MaxNGPLog = 1,
                window.__sc_uaboption.sIDs = ["_n1t|_n1z|nocaptcha|-stage-1"],
                window.__sc_uaboption.mIDs = ["nc-canvas", "click2slide-btn"])
            }
        }
        , function(e, t, n) {
            "use strict";
            !function(e) {
                var t = "_nc_initialized";
                if (!e[t]) {
                    e[t] = 1;
                    var i = n(6).v;
                    window.console || (window.console = {
                        log: function() {
                            return 0
                        }
                    }),
                    n(71),
                    n(73),
                    n(69),
                    n(72);
                    var o = e.pointman && "19" == pointman._z
                      , a = {}
                      , r = {
                        has_pointman: o,
                        index: 0,
                        js_type: "pc",
                        v: i
                    };
                    e.UA_Opt = e.UA_Opt || {};
                    var c = n(74).makeNC(a, r);
                    c.v = i,
                    a.init = function() {}
                    ,
                    r.has_pointman && (a.noCaptcha = c,
                    pointman.define("nc", function() {
                        return a
                    })),
                    e.noCaptcha = c
                }
            }(window)
        }
        , , function(e, t, n) {
            "use strict";
            function i(e, t, n) {
                var i = e.prefix
                  , r = 1
                  , u = navigator && navigator.userAgent || ""
                  , p = /Firefox\/([\d.]*)/.test(u)
                  , _ = u.indexOf("Windows") !== -1
                  , f = (new Date).getTime()
                  , g = (new Date).getTime()
                  , h = a.head || a.getElementsByTagName("head")[0] || a.documentElement
                  , m = function(e) {
                    return a.getElementById(e)
                }
                  , v = {
                    "default": 4,
                    number: 6,
                    "150_40": 4,
                    login_wan3: 4,
                    login_wan10: 6
                }
                  , b = d.isIEX(8)
                  , y = new s(function(e, t) {
                    return b ? void t() : void d.imageLoaded("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==").then(function(n) {
                        1 === n.width && 1 === n.height ? e() : t()
                    }, t)
                }
                )
                  , k = function(e) {
                    this.lang = e.lang;
                    var t = "//diablo.alibaba.com";
                    this.config = {
                        apiserver: e.apiserver || t,
                        type: e.type || "default",
                        codeLength: e.checkCodeLength || v[e.type || "default"],
                        identity: e.identity || "",
                        sessionid: e.sessionid || "",
                        element: e.element || null,
                        a: e.a,
                        t: e.t,
                        n: e.n,
                        lang: e.lang,
                        scene: e.scene,
                        p: e.p
                    },
                    this.tipText = {};
                    var n, i = l[e.lang] || l.en;
                    for (n in i)
                        i.hasOwnProperty(n) && (this.tipText[n] = e[n] || i[n]);
                    this.service = {
                        imgURL: "{apiserver}/get_img?sessionid={sessionid}&identity={identity}&type={type}",
                        checkImgURL: "{apiserver}/check_img?sessionid={sessionid}&identity={identity}&type={type}",
                        checkAudioURL: "//cf.aliyun.com/captcha/checkcode.jsonp?csessionid={sessionid}&identity={identity}",
                        audioURL: "{apiserver}/captcha/audio/get.jsonp?identity={identity}&sessionid={sessionid}",
                        audioURL_pre: "{apiserver}/captcha/audio/pre_get.jsonp?identity={identity}&sessionid={sessionid}"
                    },
                    this.cache = {
                        codeType: "img",
                        oldCode: null,
                        lastCheckCode: "",
                        checkedCode: null,
                        checkState: "notstart",
                        audio: null,
                        audioPlayer: null,
                        callback: null,
                        captchaToken: null
                    }
                };
                return k.prototype = {
                    render: function() {
                        var e = this
                          , t = e.config;
                        if (!t.element)
                            return !1;
                        "[object String]" == Object.prototype.toString.call(t.element) && (t.element = m(t.element));
                        for (var n in this.service)
                            if (this.service.hasOwnProperty(n)) {
                                var i = this.service[n];
                                i = i.replace("{apiserver}", t.apiserver).replace("{identity}", t.identity).replace("{sessionid}", t.sessionid).replace("{type}", t.type),
                                this.service[n] = i
                            }
                        return e.renderCode(),
                        this
                    },
                    renderCode: function() {
                        function e() {
                            var e = p || m(i + "omeo-code-key");
                            e.value = e.value.replace(/[^\w\d]/g, "")
                        }
                        function o() {
                            var e, t = _, i = -1;
                            for (f.stopAudio(); "body" !== t.tagName.toLowerCase(); ) {
                                if (e = t.getAttribute("data-nc-idx"),
                                null !== e) {
                                    i = e;
                                    break
                                }
                                t = t.parentNode
                            }
                            try {
                                noCaptcha.getByIndex(parseInt(i)).reload(),
                                n(c.switchevent, {
                                    from: "audio",
                                    to: "scale"
                                })
                            } catch (o) {
                                report("reload failed")
                            }
                            return !1
                        }
                        var r = this
                          , s = r.tipText
                          , l = r.config
                          , d = a.createElement("div")
                          , u = l.element;
                        d.className = "omeo-box",
                        d.innerHTML = '<div class="omeo-code omeo-img-active" id="' + i + 'omeo-code"><div class="omeo-code-img"><img id="' + i + 'omeo-code-imgwrap" data-action="refreshImg" src="' + r.service.imgURL + '" onmousedown="return false;"/><a data-action="refreshImg" href="javascript:;" onmousedown="return false;" title="' + s.refresh + '" class="nc_iconfont btn_refresh omeo-code-refresh">&#xe607;</a><a data-action="switchToAudio" href="javascript:;" onmousedown="return false;" title="' + s.audioText + '" class="omeo-switch"></a></div><div class="omeo-code-audio"><div id="' + i + 'omeo-code-audiobox" class="omeo-code-audiobox omeo-code-audiobox-playing"><a data-action="replayAudio" href="javascript:;">' + s.clickPlay + '</a><span id="' + i + 'omeo-audio-process" class="omeo-audio-process"></span><b>' + s.audioTips + '</b></div><a id="' + i + 'omeo-refresh-audio" data-action="refreshAudio" href="javascript:;" onmousedown="return false;" title="' + s.refresh + '" class="nc_iconfont omeo-code-refresh">&#xe607;</a><i id="' + i + '_voice_close" class="nc_voice_close nc_iconfont" >&#xe600;</i><a data-action="switchToImg" href="javascript:;" onmousedown="return false;" title="' + s.imgText + '" class="omeo-switch"></a></div></div><div class="omeo-code-echo"><input id="' + i + 'omeo-code-key" type="text" name="code" maxlength="6" placeholder="' + s.placeholder + '" /><span class="omeo-code-state" id="' + i + 'omeo-code-state"></span></div>',
                        u.appendChild(d);
                        var p = m(i + "omeo-code-key");
                        u.addEventListener ? (u.addEventListener("click", function(e) {
                            r.triggerEvent(e)
                        }, !1),
                        m(i + "omeo-code-imgwrap").addEventListener("error", function() {
                            r.log({
                                e: "IMGERROR"
                            }),
                            "img" == r.cache.codeType && r.refreshCode()
                        }, !1),
                        p.addEventListener("blur", function() {
                            e(),
                            r.validateCode({
                                code: m(i + "omeo-code-key").value.replace(/^\s|\s$/g, "")
                            })
                        }, !1),
                        p.addEventListener("keyup", function() {
                            e(),
                            r.listenerCodeType(this.value.replace(/^\s|\s$/g, ""))
                        }, !1),
                        p.addEventListener("paste", function(e) {
                            e.preventDefault()
                        }, !0)) : (u.attachEvent("onclick", function(e) {
                            return r.triggerEvent(e),
                            !1
                        }),
                        m(i + "omeo-code-imgwrap").attachEvent("onerror", function() {
                            r.log({
                                e: "IMGERROR"
                            }),
                            "img" == r.cache.codeType && r.refreshCode()
                        }),
                        p.attachEvent("onblur", function() {
                            e(),
                            r.validateCode({
                                code: m(i + "omeo-code-key").value.replace(/^\s|\s$/g, "")
                            })
                        }),
                        p.attachEvent("onkeyup", function() {
                            e(),
                            r.listenerCodeType(m(i + "omeo-code-key").value.replace(/^\s|\s$/g, ""))
                        }),
                        p.attachEvent("onpaste", function() {
                            return !1
                        }));
                        var _ = t.id(i + "_voice_close")
                          , f = this;
                        t.addHandler(_, "click", o)
                    },
                    listenerCodeType: function(e) {
                        this.cache.oldCode && this.cache.oldCode.length !== this.config.codeLength || 1 !== e.length || (g = (new Date).getTime()),
                        this.cache.oldCode = e,
                        e.length == this.config.codeLength && this.validateCode({
                            code: e
                        })
                    },
                    updateAudioBoxWidth: function() {
                        var e = 7
                          , t = m(i + "wrapper").offsetWidth
                          , n = m(i + "omeo-refresh-audio").offsetWidth
                          , o = m(i + "_voice_close").offsetWidth
                          , a = m(i + "omeo-code-key").offsetWidth
                          , r = t - n - o - a - e;
                        m(i + "omeo-code-audiobox").style.width = r + "px"
                    },
                    triggerEvent: function(e) {
                        var t = e.target || e.srcElement
                          , n = t.getAttribute("data-action");
                        try {
                            m(i + "omeo-code-key").focus()
                        } catch (e) {}
                        "refreshAudio" === n && this.refreshCode(),
                        "switchToAudio" === n && (this.cache.codeType = "audio",
                        this.switchCode({
                            type: "audio"
                        })),
                        "replayAudio" == n && this.playAudio()
                    },
                    resetPlayer: function(e) {
                        var t = m(i + "omeo-audio-process");
                        t.style.width = 0,
                        "playing" == e.state ? t.parentNode.className = "omeo-code-audiobox omeo-code-audiobox-playing" : t.parentNode.className = "omeo-code-audiobox",
                        this.updateAudioBoxWidth()
                    },
                    refreshCode: function() {
                        var e = m(i + "omeo-code-state");
                        e.className = "omeo-code-state",
                        e.innerHTML = "",
                        o.__progtid && clearInterval(o.__progtid),
                        m(i + "omeo-code-key").value = "",
                        this.resetPlayer({
                            state: "playing"
                        }),
                        this.playAudio(),
                        f = g = (new Date).getTime()
                    },
                    switchCode: function(e) {
                        "img" == e.type ? (this.stopAudio(),
                        m(i + "omeo-code").className = "omeo-code omeo-img-active") : (m(i + "omeo-code").className = "omeo-code omeo-audio-active",
                        this.resetPlayer({
                            state: "playing"
                        }),
                        !this.audioSupport || p || (m(i + "omeo-refresh-audio").style.display = ""),
                        this.playAudio()),
                        this.cache.checkState = "notstart",
                        this.cache.checkedCode = null;
                        var t;
                        t = m(i + "omeo-code-state"),
                        t.className = "omeo-code-state",
                        t.innerHTML = "",
                        t = m(i + "omeo-code-key"),
                        t.value = "",
                        t.focus(),
                        this.cache.oldCode && this.refreshCode(),
                        f = g = (new Date).getTime()
                    },
                    playErrAudio: function() {
                        var e = "//g.alicdn.com/sd/ncpc/images/"
                          , t = e + "error.wav"
                          , n = e + "error_en.mp3"
                          , i = "cn" == this.lang || "zh_CN" == this.lang;
                        this.playAudio(i ? t : n)
                    },
                    playAudio: function(e) {
                        function t(t) {
                            var n;
                            t && (e = t.result.data[0],
                            this.cache.captchaToken = t.result.captchaToken),
                            n = e.indexOf(".mp3") > -1 ? "audio/mpeg" : "audio/x-wav";
                            var c;
                            if (this.audioSupport)
                                this.cache.audio = new Audio,
                                c = a.createElement("source"),
                                c.type = n,
                                c.src = e,
                                this.cache.audio.appendChild(c),
                                this.cache.audio.load(),
                                this.cache.audio.play(),
                                this.bindAudioProgress();
                            else if (this.isIE) {
                                var s = a.createElement("bgsound");
                                s.setAttribute("id", "omeo-bgsound-audio" + r),
                                s.setAttribute("autostart", "true"),
                                s.setAttribute("src", e),
                                h.appendChild(s),
                                this.cache.audioPlayer = m(i + "omeo-bgsound-audio" + r),
                                this.resetPlayer({
                                    state: "playing"
                                });
                                var l = 0
                                  , d = this;
                                o.__progtid && clearInterval(o.__progtid),
                                o.__progtid = setInterval(function() {
                                    l += 10,
                                    l > 100 && (l = 100),
                                    d.updateProgress(l),
                                    l >= 100 && clearInterval(o.__progtid)
                                }, 1e3)
                            } else
                                h.appendChild('<embed src="' + e + '" id="' + i + "omeo-flash-audio" + r + '" ' + (_ ? 'type="application/x-mplayer2"' : 'type="' + n + '"') + " autostart hidden />"),
                                this.cache.audioPlayer = m(i + "omeo-flash-audio" + r),
                                this.updateProgress("NOPROGRESS")
                        }
                        var n = this;
                        if (n.stopAudio(),
                        e)
                            t.call(n);
                        else {
                            var c = y.then(function() {
                                e = n.service.audioURL
                            }, function() {
                                e = n.service.audioURL_pre
                            }).then(function() {
                                var i = {
                                    url: e,
                                    callback: "callback",
                                    data: {}
                                };
                                return d.request(i).then(function(e) {
                                    return e.success && 0 === e.result.resultCode ? void t.call(n, e) : s.reject({
                                        type: "request",
                                        code: e.result.resultCode,
                                        msg: e.result.message
                                    })
                                })
                            });
                            c["catch"](function(e) {
                                /^(request)$/.test(e.type)
                            })
                        }
                    },
                    bindAudioProgress: function() {
                        var e = this
                          , t = e.cache;
                        t.audio.addEventListener("timeupdate", function() {
                            null !== m(i + "omeo-audio-process") && (!p || this.duration && this.duration !== 1 / 0 ? e.updateProgress(parseInt(100 * this.currentTime / this.duration)) : e.updateProgress(100))
                        }, t.audio),
                        t.audio.addEventListener("ended", function() {
                            e.updateProgress(100)
                        }, t.audio)
                    },
                    updateProgress: function(e) {
                        switch (e) {
                        case -1:
                            break;
                        case 100:
                            this.resetPlayer({
                                state: "end"
                            });
                            break;
                        case "NOPROGRESS":
                            this.resetPlayer({
                                state: "end"
                            });
                            break;
                        default:
                            m(i + "omeo-audio-process").style.width = e + "%"
                        }
                    },
                    stopAudio: function() {
                        var e = this.cache;
                        this.audioSupport ? e.audio && e.audio.pause() : e.audioPlayer && (e.audioPlayer.src = "",
                        e.audioPlayer.parentNode.removeChild(this.cache.audioPlayer),
                        e.audioPlayer = null)
                    },
                    replayAudio: function() {
                        this.audioSupport && this.cache.audio && (this.resetPlayer({
                            state: "playing"
                        }),
                        this.cache.audio.currentTime = 0,
                        this.cache.audio.pause(),
                        this.cache.audio.play())
                    },
                    loadResource: function(e, t) {
                        var n = null;
                        /\.css/g.test(e) ? (a.createStyleSheet && a.createStyleSheet(e),
                        n = a.createElement("link"),
                        n.rel = "stylesheet",
                        n.href = e) : (n = a.createElement("script"),
                        n.src = e),
                        "onload"in n ? n.onload = function() {
                            t && t()
                        }
                        : n.onreadystatechange = function() {
                            /loaded|complete/.test(n.readyState) && t && t()
                        }
                        ,
                        h.appendChild(n)
                    },
                    isIE: function() {
                        return !!/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(u)
                    }(),
                    audioSupport: function() {
                        try {
                            return "Audio"in o && (new Audio).canPlayType("audio/x-wav")
                        } catch (e) {
                            return !1
                        }
                    }(),
                    validateCode: function(e) {
                        var n = this
                          , a = m(i + "omeo-code-state")
                          , c = "omeocode" + r + (+new Date).toString().substr(-6, 6)
                          , s = n.service.checkAudioURL;
                        if (n.cache.checkedCode && n.cache.checkedCode === n.cache.oldCode)
                            return !1;
                        if (n.cache.lastCheckCode == e.code)
                            return !1;
                        if (n.cache.lastCheckCode = e.code,
                        n.cache.checkedCode = null,
                        "checking" == n.cache.checkState)
                            return !1;
                        if (n.cache.checkState = "checking",
                        /^[a-z0-9]{4,6}$/gi.test(e.code)) {
                            var l = {
                                checkcode: function() {
                                    var i = {};
                                    return i.answer = e.code,
                                    i.captchaToken = n.cache.captchaToken,
                                    t.obj2str(i)
                                }(),
                                callback: c,
                                a: n.config.a,
                                t: n.config.t,
                                n: n.config.n,
                                lang: n.config.lang,
                                scene: n.config.scene
                            };
                            s += "&" + d.obj2param(l),
                            o[c] = function(t) {
                                var o = {};
                                if (t.success && 100 == t.result.code) {
                                    n.cache.checkedCode = e.code,
                                    a.className = "omeo-code-state omeo-code-state-success",
                                    a.innerHTML = "",
                                    n.cache.checkState = "success",
                                    o = {
                                        message: "success"
                                    };
                                    var r = (new Date).getTime();
                                    n.log({
                                        t1: r - g,
                                        t2: r - f,
                                        s: t && "SUCCESS." === t.message,
                                        t: n.cache.codeType
                                    })
                                } else
                                    a.className = "omeo-code-state omeo-code-state-error",
                                    a.innerHTML = n.tipText.codeError,
                                    setTimeout(function() {
                                        var e = m(i + "omeo-code-state");
                                        e && (e.className = "",
                                        e.innerHTML = "",
                                        m(i + "omeo-code-key").value = "")
                                    }, 3e3),
                                    n.cache.checkState = "codeError",
                                    o = {
                                        message: "error"
                                    },
                                    m(i + "omeo-code-key").select(),
                                    "true" == t.refresh && n.refreshCode();
                                n.cache.callback && n.cache.callback(o)
                            }
                            ,
                            n.loadResource(s)
                        } else
                            n.cache.checkState = "codeError",
                            a.className = "omeo-code-state omeo-code-state-error",
                            a.innerHTML = "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
                            n.playErrAudio(),
                            setTimeout(function() {
                                var e = m(i + "omeo-code-state");
                                e && (e.className = "",
                                e.innerHTML = "",
                                e = m(i + "omeo-code-key"),
                                e.value = "",
                                e.focus(),
                                n.resetPlayer({
                                    state: "playing"
                                }),
                                n.playAudio())
                            }, 5e3)
                    },
                    check: function(e) {
                        "success" == this.cache.checkState && e && e({
                            message: "success"
                        }),
                        "codeError" == this.cache.checkState && e && e({
                            message: "error"
                        }),
                        this.cache.callback = e
                    },
                    log: function() {}
                },
                k
            }
            var o = window
              , a = document
              , r = n(9)
              , c = r.names
              , s = n(2)
              , l = n(112).language
              , d = n(1);
            n(21),
            t.init = i
        }
        , function(e, t, n) {
            "use strict";
            function i() {
                var e = r.createElement("style");
                e.appendChild(r.createTextNode(""));
                var t = r.getElementsByTagName("script")
                  , n = t[t.length - 1];
                return n.parentNode.insertBefore(e, n),
                e.sheet
            }
            function o(e, t, n, i) {
                "number" != typeof i && (i = 1),
                "insertRule"in e ? e.insertRule(t + "{" + n + "}", i) : "addRule"in e && e.addRule(t, n, i)
            }
            function a(e) {
                var t = r.createElement("style");
                t.type = "text/css",
                t.className = "nc-style",
                t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e;
                var n = r.getElementsByTagName("script")
                  , i = n[n.length - 1];
                i.parentNode.insertBefore(t, i)
            }
            var r = document;
            e.exports = {
                createSheet: i,
                addCSSRule: o,
                insertCSS: a
            }
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                return this.options = e || {},
                this.params = t || {},
                this.init(),
                this
            }
            function o(e) {
                var t = p.defer()
                  , n = e.data || {}
                  , i = ("jsonp_" + Math.random()).replace(".", "");
                s[i] = function(e) {
                    t.resolve(e)
                }
                ,
                n[e.callback || "callback"] = i,
                t.promise.always(function() {
                    try {
                        delete s[i]
                    } catch (e) {
                        s[i] = null
                    }
                });
                var o = l.createElement("script");
                o.src = e.url + (e.url.indexOf("?") === -1 ? "?" : "&") + _.obj2param(n);
                var a = l.getElementsByTagName("script")[0];
                return a.parentNode.insertBefore(o, a),
                setTimeout(function() {
                    t.reject({
                        type: "request",
                        error: "timeout"
                    })
                }, 5e3),
                t.promise
            }
            function a(e) {
                var t = p.defer()
                  , n = new Image;
                return n.onload = function() {
                    t.resolve(this)
                }
                ,
                n.onerror = function(e) {
                    t.reject({
                        type: "img",
                        error: e
                    })
                }
                ,
                setTimeout(function() {
                    t.reject({
                        type: "img",
                        error: "timeout"
                    })
                }, 5e3),
                n.src = e,
                t.promise
            }
            function r(e) {
                e.style.display = "block"
            }
            function c(e) {
                e.style.display = "none"
            }
            var s = window
              , l = document
              , d = l.documentElement
              , u = function() {}
              , p = n(2)
              , _ = n(1)
              , f = n(4).URL_MAP
              , g = n(7).language
              , h = _.isIEX(8)
              , m = new p(function(e, t) {
                return h ? void t() : void a("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==").then(function(n) {
                    1 === n.width && 1 === n.height ? e() : t()
                }, t)
            }
            )
              , v = p.reject({
                type: "destroy"
            })
              , b = "&#xe60e;"
              , y = "&#xe607;"
              , k = "&#xe60a;"
              , x = "&#xe60b;"
              , w = {
                INITIAL: 0,
                READY: 1,
                LOADING: 2,
                LOAD_FAIL: 3,
                LOADED: 4,
                VERIFING: 5
            }
              , T = "nc-cc"
              , E = {};
            _.each(w, function(e, t) {
                E[e] = T + "-status-" + t.toLowerCase().replace("_", "-")
            }),
            i.prototype = {
                init: function() {
                    this.initProps(),
                    this.render(),
                    this.bindEvents(),
                    this.setStatus(w.READY),
                    this.updateCaptcha(!0)
                },
                setStatus: function(e) {
                    var t = this.status;
                    e !== t && (this.status = e,
                    E[t] && _.removeClass(this.$container, E[t]),
                    E[e] && _.addClass(this.$container, E[e]))
                },
                initProps: function() {
                    this.status = w.INITIAL,
                    this.prefix = this.options.prefix,
                    this.nc = this.options.nc,
                    this.urls = f[this.options.foreign] || f[0],
                    this.language = g[this.options.language],
                    this.$container = l.getElementById(this.prefix + "cc"),
                    this.clickIndex = 0,
                    this.onerror = this.options.onerror || u,
                    this.onfail = this.options.onfail || u,
                    this.onsuccess = this.options.onsuccess || u
                },
                render: function() {
                    var e = this.language
                      , t = '\n<div class="' + T + '-body"></div>\n<div class="' + T + '-tip"><i class="nc_iconfont">' + k + "</i>" + e._cc_fail + '</div>\n<div class="' + T + '-footer">\n<div class="' + T + '-wait">\n<i class="' + T + '-loading-img"></i>' + e._wait + '\n</div>\n<div class="' + T + '-refresh" data-action="refresh"><i class="nc_iconfont" data-action="refresh">' + y + "</i>" + e._cc_refresh + '</div>\n<div class="' + T + "-btn " + T + '-confirm" data-action="confirm">' + e._verify + '</div>\n<div class="' + T + '-cancel" data-action="close"><i class="nc_iconfont" data-action="close">' + b + "</i>" + e._cancel + '</div>\n</div>\n<div class="' + T + '-mask"></div>\n<div class="' + T + '-arrow-1"></div>\n<div class="' + T + '-arrow-2"></div>\n';
                    this.$container.innerHTML = t,
                    r(this.$container),
                    this.pin(),
                    _.each(["body", "footer", "tip", "confirm", "wait", "refresh", "mask"], function(e) {
                        this["$" + e] = this.klass(e)[0]
                    }, this)
                },
                pin: function() {
                    var e = this.options.$wrapper
                      , t = e.offsetWidth
                      , n = _.getElementLeft(e)
                      , i = _.getElementTop(e)
                      , o = this.$container.offsetWidth
                      , a = s.innerWidth || d && d.clientWidth || l.body.clientWidth
                      , r = "";
                    a - t - n > o ? (r = "right",
                    this.$container.style.left = (t - 150) / 2 + 108 + 30 + "px") : n > o && (r = "left",
                    this.$container.style.left = -(o + 25 - (t - 150) / 2) + "px"),
                    i < 339 && (this.$container.style.top = -i + 5 + "px"),
                    r && _.addClass(this.$container, T + "-" + r)
                },
                updateCaptcha: function(e) {
                    var t = this
                      , n = this.language;
                    if (this.status !== w.LOADING) {
                        this.setStatus(w.LOADING),
                        e ? this.$body.innerHTML = '\n<div class="' + T + '-loading">\n<i class="' + T + '-loading-img"></i>\n' + n._wait + "\n</div>\n" : (c(this.$refresh),
                        r(this.$wait));
                        var i = m.then(function() {
                            return t.urls.cc
                        }, function() {
                            return t.urls.cc_pre
                        }).then(function(e) {
                            var n = t.options;
                            return o({
                                url: e,
                                data: {
                                    sessionid: n.csessionid,
                                    identity: n.appkey,
                                    style: n.value,
                                    type: "SUDOKU_IMG",
                                    token: n.token
                                }
                            })
                        }).then(function(e) {
                            return t.hasDestroy() ? v : e.success && 0 === e.result.resultCode ? (t.captchaToken = e.result.captchaToken,
                            p.all([a(e.result.data[0]), a(e.result.data[1])])) : p.reject({
                                type: "request",
                                code: e.result.resultCode,
                                msg: e.result.message
                            })
                        }).then(function(e) {
                            return t.hasDestroy() ? v : (t.setStatus(w.LOADED),
                            void t.renderImg(e[0], e[1]))
                        });
                        e || i.always(function() {
                            r(t.$refresh),
                            c(t.$wait)
                        }),
                        i["catch"](function(n) {
                            /^(request|img)$/.test(n.type) && (t[n.type + "Fail"](e),
                            t.onerror())
                        })
                    }
                },
                bindEvents: function() {
                    var e = this.nc
                      , t = {};
                    t[w.LOAD_FAIL] = {
                        retry: function() {
                            c(this.$mask),
                            this.updateCaptcha()
                        }
                    },
                    t[w.LOADED] = {
                        refresh: function() {
                            c(this.$tip),
                            this.updateCaptcha()
                        },
                        confirm: this.confirm,
                        select: this.select
                    },
                    this._handler = _.bind(function(n) {
                        n = _.getEvent(n);
                        var i = _.getTarget(n)
                          , o = i.getAttribute("data-nc-lang") ? i.parentNode.getAttribute("data-action") : i.getAttribute("data-action");
                        o && ("close" === o && (this.destroy(),
                        e.reset()),
                        t[this.status] && t[this.status][o] && t[this.status][o].call(this, i, n))
                    }, this),
                    _.addHandler(this.$container, "click", this._handler)
                },
                select: function(e, t) {
                    if (_.toggleClass(e, T + "-selected"),
                    _.hasClass(e, T + "-selected")) {
                        var n = t.pageX
                          , i = t.pageY;
                        void 0 === n && (n = t.clientX + (l.body.scrollLeft || d.scrollLeft)),
                        void 0 === i && (i = t.clientY + (l.body.scrollTop || d.scrollTop));
                        var o = _.getPageCoord(e.parentNode);
                        e.setAttribute("data-x", n - o.x),
                        e.setAttribute("data-y", i - o.y),
                        e.setAttribute("data-ci", this.clickIndex++)
                    }
                    var a = this.klass("selected")
                      , r = a.length;
                    0 === r ? _.addClass(this.$confirm, T + "-disabled") : _.removeClass(this.$confirm, T + "-disabled"),
                    c(this.$tip)
                },
                confirm: function() {
                    var e = this
                      , t = (e.nc,
                    this.klass("selected"));
                    if (0 !== t.length && this.status !== w.VERIFING) {
                        this.setStatus(w.VERIFING),
                        t = [].slice.call(t),
                        t.sort(function(e, t) {
                            var n, i = parseInt(e.getAttribute("data-ci"), 10), o = parseInt(t.getAttribute("data-ci"), 10);
                            return n = i == o ? 0 : i > o ? 1 : -1
                        });
                        var n = [];
                        _.each(t, function(e) {
                            n.push("[" + [e.getAttribute("data-x"), e.getAttribute("data-y"), e.getAttribute("data-i")].join(",") + "]")
                        }),
                        n = "[" + n.join(",") + "]",
                        o({
                            url: this.urls.checkcode,
                            data: {
                                csessionid: this.options.csessionid,
                                checkcode: this.params.obj2str({
                                    answer: n,
                                    captchaToken: this.captchaToken
                                }),
                                a: this.options.appkey,
                                t: this.options.token,
                                n: s._n || "",
                                p: "{}",
                                r: Math.random(),
                                lang: this.options.language,
                                v: this.params.v
                            }
                        }).then(function(t) {
                            return e.hasDestroy() ? v : void (t.success && 100 === t.result.code ? (e.onsuccess(t.result.sig),
                            e.destroy()) : (e.updateCaptcha(),
                            r(e.$tip),
                            e.onfail()))
                        })["catch"](function(t) {
                            "request" === t.type && (e.requestFail(),
                            e.onerror())
                        })
                    }
                },
                renderImg: function(e, t) {
                    for (var n = "", i = 0; i < 9; i++)
                        n += '<a href="javascript:void(0);" class="' + T + '-item" data-action="select" data-i="' + i + '"><i class="nc_iconfont">' + x + "</i></a>";
                    this.$body.innerHTML = '\n<div class="' + T + '-header">\n<div class="' + T + '-img1-box"></div>\n<div class="' + T + '-txt">' + this.language._cc_title + '</div>\n</div>\n<div class="' + T + '-img2-box">\n<div class="' + T + '-items">\n<div class="' + T + '-items-inner">\n' + n + "\n</div>\n</div>\n</div>\n",
                    this.klass("img1-box")[0].appendChild(e),
                    this.klass("img2-box")[0].appendChild(t),
                    _.addClass(this.$confirm, T + "-disabled")
                },
                imgFail: function(e) {
                    this.setStatus(w.LOAD_FAIL);
                    var t = this.$body
                      , n = this.language
                      , i = "close";
                    e ? c(this.$footer) : (t = this.$mask,
                    i = "retry",
                    r(t));
                    var o = n._cc_contact.replace("%TOKEN", this.options.token);
                    t.innerHTML = '\n<div class="' + T + '-fail">\n<div class="' + T + '-fail-inner">\n<p>' + n._cc_img_fail + '</p>\n<div class="' + T + '-fail-action">\n<div class="' + T + '-btn" data-action="' + i + '">' + n._retry + '</div>\n<a href="javascript:void(0);" data-action="close">' + n._cancel + '</a>\n</div>\n<div class="' + T + '-contact">\n' + o + "\n</div>\n</div>\n</div>\n"
                },
                requestFail: function(e) {
                    var t = this.language
                      , n = t._cc_contact.replace("%TOKEN", this.options.token);
                    this.setStatus(w.LOAD_FAIL),
                    this.$body.innerHTML = '\n<div class="' + T + '-fail">\n<div class="' + T + '-fail-inner">\n<p>' + t._cc_req_fail + '</p>\n<div class="' + T + '-fail-action">\n<div class="' + T + '-btn" data-action="close">' + t._close + '</div>\n</div>\n<div class="' + T + '-contact">\n' + n + "\n</div>\n</div>\n</div>\n",
                    c(this.$footer)
                },
                unbindEvents: function() {
                    _.removeHandler(this.$container, "click", this._handler)
                },
                klass: function(e) {
                    return _.getElementsByClassName([T, e].join("-"), this.$container)
                },
                destroy: function() {
                    c(this.$container),
                    this.unbindEvents(),
                    this.$container.innerHTML = "";
                    for (var e in this)
                        this.hasOwnProperty(e) && delete this[e];
                    this.destroy = u
                },
                hasDestroy: function() {
                    return this.destroy === u
                }
            },
            e.exports = i
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t, n, i) {
                var a;
                for (a in i)
                    i.hasOwnProperty(a) && (n[a] = i[a]);
                var c = n[t];
                if (c) {
                    e.opt.language = t;
                    var l, d = e.opt.renderTo;
                    d && (l = r.getElementById(d)) && (s.addClass(l, "nc-lang-" + t),
                    o(l, c))
                }
            }
            function o(e, t) {
                var n, i, o, a, r = e.getElementsByTagName("*"), c = "data-nc-lang";
                for (n = 0; n < r.length; n++)
                    i = r[n],
                    o = i.getAttribute(c),
                    o && (a = t[o]) && a && !function(e, t) {
                        setTimeout(function() {
                            e.innerHTML = t.replace(/^\s*<span[^>]*?>|<\/span>\s*$/g, "")
                        }, 1)
                    }(i, a)
            }
            function a(e, t, n) {
                window.nc_ex_lang = function(o) {
                    i(e, t, n, o)
                }
                ;
                var o = "script"
                  , a = r.createElement(o);
                a.charset = "utf-8",
                a.src = c;
                var s = r.getElementsByTagName(o)[0];
                s.parentNode.insertBefore(a, s)
            }
            var r = document
              , c = "//g.alicdn.com/sd/ncpc/lang-ex.js?t=" + Math.floor((new Date).getTime() / 846e5)
              , s = n(1);
            t.loadExLang = a
        }
        , function(e, t, n) {
            "use strict";
            var i = {
                cn: {
                    placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                    audioText: "\u83b7\u53d6\u8bed\u97f3\u9a8c\u8bc1\u7801",
                    imgText: "\u83b7\u53d6\u56fe\u7247\u9a8c\u8bc1\u7801",
                    refresh: "\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801",
                    codeError: "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u5373\u5c06\u64ad\u653e\u4e0b\u4e00\u6bb5",
                    clickPlay: "\u70b9\u51fb\u64ad\u653e\u8bed\u97f3",
                    audioTips: "\u8bf7\u4ed4\u7ec6\u6536\u542c"
                },
                en: {
                    placeholder: "enter the code",
                    audioText: "retrieve pass code from the audio",
                    imgText: "retrieve pass code from the image",
                    refresh: "retrieve pass code again",
                    codeError: "Incorrect pass code, please try again",
                    clickPlay: "click to play the audio",
                    audioTips: "please listen carefully"
                }
            };
            i.zh_CN = i.cn,
            i.en_US = i.en,
            t.language = i
        }
        , function(e, t, n) {
            "use strict";
            var i = n(114)
              , o = n(116).makeScale
              , a = n(9)
              , r = n(1)
              , c = n(21).BaseFun
              , s = n(4).mmstat_base;
            t.makeNC = function(e, t, l) {
                function d(e, i, a, c) {
                    var l = n(49).makeLog(i.foreign ? s.gj : s.gm)
                      , d = i.glog;
                    "boolean" != typeof t._b_glog && (t._b_glog = d && "number" == typeof d && Math.random() < d);
                    var u = function(e) {
                        t._b_glog && !h[e] && l.log(i.appkey, UA_Opt.Token || i.token, e);
                        var n = a[e];
                        if (n && n.length) {
                            var o, r = [];
                            for (o = 1; o < arguments.length; o++)
                                r.push(arguments[o]);
                            for (o = 0; o < n.length; o++)
                                if (n[o].apply(null, r) === !1)
                                    return !1
                        }
                    };
                    return u = r.decorator.after(u, function(t) {
                        t === !1 && setTimeout(function() {
                            var t = window.outer_nc_list[e];
                            t && t.reload()
                        }, 1)
                    }),
                    [o(c, t, u), u]
                }
                function u(o) {
                    o = r.mix(r.clone(g), o),
                    t.index++,
                    t.prefix = o.prefix || "nc_" + t.index + "_",
                    n(115).reg(o);
                    var a = {}
                      , s = {}
                      , l = new c(o,r.obj2param)
                      , u = d(t.index, o, a, l)
                      , p = u[0]
                      , _ = u[1]
                      , f = i.makeNoCaptcha(e, s, t, a, p, _, l)
                      , h = new f;
                    return h._index = t.index,
                    h.init(o),
                    h
                }
                function p(e) {
                    e && this.init(e)
                }
                function _(e) {
                    p.prototype[e] = function() {
                        if (this.is_destroyed)
                            return this;
                        var t = f[this.index]
                          , n = t[e].apply(t, arguments);
                        return "destroy" === e && (this.is_destroyed = !0),
                        "getToken" === e || "getTrans" === e || "setTrans" === e ? n : this
                    }
                }
                var f = [];
                window.outer_nc_list = [];
                var g = l || {}
                  , h = a.deprecated;
                p.reset = function(e) {
                    var t = f[e];
                    t && t.reset && t.reset()
                }
                ,
                p.config = function(e) {
                    r.mix(g, e)
                }
                ,
                p.getByIndex = function(e) {
                    return window.outer_nc_list[e]
                }
                ,
                p.prototype = {
                    init: function(e) {
                        var n = u(e);
                        return this.index = t.index,
                        this.__nc = n,
                        f[this.index] = n,
                        window.outer_nc_list[this.index] = this,
                        this
                    }
                };
                var m, v = ["on", "reset", "reload", "show", "hide", "upLang", "getToken", "destroy", "getTrans", "setTrans"];
                for (m = 0; m < v.length; m++)
                    _(v[m]);
                return p
            }
        }
        , function(module, exports, __webpack_require__) {
            "use strict";
            function makeNoCaptcha(module_nc, opt, inn_vars, nc_events, Scale, onNCEvent, _) {
                function _upResetIndex(e) {
                    return upResetIndex(e, nc_index)
                }
                function _getToken() {
                    return opt.token || UA_Opt.Token || umx.getToken()
                }
                function showError(e, t) {
                    var n, i = t ? '<span class="nc-errcode"> (' + t + ")</span>" : "";
                    n = e ? language[opt.language]._errorNetwork + i : language[opt.language]._errorLOADING + i,
                    n = n.replace("%TOKEN", opt.token),
                    n = _upResetIndex(n),
                    _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + n + "</div>",
                    el_render_to && util.removeClass(el_render_to, "show-click-captcha")
                }
                function NoCaptcha() {}
                var nc_index = inn_vars.index, nc_prefix = inn_vars.prefix, scale_btn = nc_prefix + "n1z", scale_bar = nc_prefix + "n1t", TEXTELEM, gErrTimes = 0, ajaxURL, clsCheckCode = m_checkcode.init(inn_vars, _, onNCEvent), objCheckCode, tpl = makeTemplate({
                    idx: nc_index,
                    prefix: nc_prefix
                }), glog = __webpack_require__(49).makeLog(opt.foreign ? mmstat_base.gj : mmstat_base.gm), report = glog.report, reportLoadJSError = function(e, t) {
                    report2.log({
                        a: opt.appkey,
                        t: _getToken(),
                        scene: opt.scene,
                        ns: "",
                        jsv: inn_vars.v,
                        usa: navigator.userAgent,
                        p: "",
                        jsType: "pc",
                        os: "",
                        em: t,
                        ec: e
                    })
                }, el_render_to, showHelp = makeShowHelp(opt, _, inn_vars), loading_circle_html = '\n        <div id="nc-loading-circle" class="nc-loading-circle">\n          <div class="sk-circle1 sk-circle"></div>\n          <div class="sk-circle2 sk-circle"></div>\n          <div class="sk-circle3 sk-circle"></div>\n          <div class="sk-circle4 sk-circle"></div>\n          <div class="sk-circle5 sk-circle"></div>\n          <div class="sk-circle6 sk-circle"></div>\n          <div class="sk-circle7 sk-circle"></div>\n          <div class="sk-circle8 sk-circle"></div>\n          <div class="sk-circle9 sk-circle"></div>\n          <div class="sk-circle10 sk-circle"></div>\n          <div class="sk-circle11 sk-circle"></div>\n          <div class="sk-circle12 sk-circle"></div>\n        </div>\n    ', isIE8 = util.isIEX(8), isIE9 = util.isIEX(9);
                (isIE8 || isIE9) && (loading_circle_html = "");
                var supportDataURI = new Promise(function(e, t) {
                    return isIE8 ? void t() : void util.imageLoaded("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==").then(function(n) {
                        1 === n.width && 1 === n.height ? e() : t()
                    }, t)
                }
                );
                return NoCaptcha.prototype = {
                    init: function(e) {
                        win.__nc = this,
                        module_nc.nc = this;
                        var t = default_opt.language;
                        e.foreign && (t = "en",
                        default_opt.language = t),
                        _.objUpdate(opt, default_opt),
                        _.objUpdate(opt, e),
                        opt.token || (opt.token = default_opt.token),
                        this.opt = opt,
                        language[opt.language] || (loadExLang(this, opt.language, language),
                        opt.language = t),
                        this.render_to = opt.renderTo,
                        this.render_to && (el_render_to = _.id(this.render_to)),
                        el_render_to && util.addClass(el_render_to, "nc-container"),
                        opt.is_tbLogin && (tb_login = __webpack_require__(118).makeTBLogin(inn_vars)),
                        ajaxURL = URL_MAP[opt.foreign] || URL_MAP[0],
                        ajaxURL = util.mix(ajaxURL, opt.apimap),
                        ajaxURL.uab_Url = opt.uaUrl || ajaxURL.uab_Url;
                        try {
                            this.initializationReport()
                        } catch (n) {}
                        var i;
                        if (opt.renderTo && opt.appkey && opt.token) {
                            i = _.id(opt.renderTo);
                            var o = Math.min(i.offsetWidth, i.parentNode.offsetWidth);
                            !opt.customWidth && o > 300 && (opt.customWidth = 300),
                            this.updateWidth(opt.customWidth),
                            i.setAttribute("data-nc-idx", inn_vars.index.toString()),
                            i && (i.innerHTML = '<div id="' + nc_prefix + 'nocaptcha"><div id="' + nc_prefix + 'wrapper" class="nc_wrapper"><div id="' + nc_prefix + '_n1t_loading" class="nc_scale"><div id="' + nc_prefix + '_bg" class="nc_bg" style="width: 0;"></div><div id="' + nc_prefix + '_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + loading_circle_html + "</div></div></div></div>"),
                            UA_Opt.LogVal = "_n",
                            this.inituab(),
                            this.afterUA()
                        }
                        if (opt.logo && css.insertCSS(".nc-container .nc_scale .scale_text {background-image: url(" + NC_LOGO_URL + "); background-repeat: repeat-x;}"),
                        opt.cssUrl)
                            if (doc.createStyleSheet)
                                doc.createStyleSheet(opt.cssUrl);
                            else {
                                var a = doc.createElement("link");
                                a.type = "text/css",
                                a.rel = "stylesheet",
                                a.className = "nc-custom-style-" + nc_index,
                                a.href = inn_vars.has_pointman ? util.addHourStamp(opt.cssUrl) : opt.cssUrl;
                                var r = doc.getElementsByTagName("script")[0];
                                r.parentNode.insertBefore(a, r)
                            }
                        onNCEvent(event_names.init)
                    },
                    on: function(e, t) {
                        var n = window.console
                          , i = event_deprecated[e];
                        i && n && n.warn && n.warn("NC: Event '" + e + "' will be deprecated, use '" + i + "' instead."),
                        nc_events[e] = nc_events[e] || [],
                        nc_events[e].push(t)
                    },
                    initializationReport: function() {
                        var e = ("initializeJsonp_" + Math.random()).replace(".", "")
                          , t = ajaxURL.initialize + "?a=" + encodeURIComponent(opt.appkey) + "&t=" + encodeURIComponent(opt.token) + "&scene=" + encodeURIComponent(opt.scene) + "&lang=" + opt.language + "&v=v1.2.17&href=" + encodeURIComponent(location.href.split("?")[0]) + "&comm={}&callback=" + e
                          , n = document.createElement("script")
                          , i = document.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(n, i),
                        window[e] = function(e) {}
                        ,
                        n.src = t
                    },
                    updateWidth: function(e, t) {
                        if (e) {
                            var n, i, o = "undefined" == typeof e ? "undefined" : _typeof(e);
                            "number" == o ? n = e : i = "string" == o ? _.id(e) : e,
                            i && (n = i.offsetWidth),
                            n && (this.c_width = n,
                            this.__is_c_width_setted = 1,
                            this.try2setWidth(nc_prefix + "wrapper"),
                            this.updateCSS(nc_prefix, n, t))
                        }
                    },
                    updateCSS: function(e, t, n) {
                        var i = util.isIEX(6)
                          , o = util.isIEX(7)
                          , a = i || o ? " !important" : "";
                        css.insertCSS((n ? "" : ".nc-container #" + e + "wrapper,.nc-container.tb-login #" + e + "wrapper{width:" + t + "px}\n") + [".nc-container .imgCaptcha", ".nc-container .clickCaptcha"].join(",") + "{width:" + (t - 2) + "px" + a + ";}\n" + [".nc-container.tb-login .imgCaptcha", ".nc-container.tb-login .clickCaptcha"].join(",") + "{width:" + t + "px" + a + ";}\n" + [".nc-container.tb-login .imgCaptcha .captcha-error", ".nc-container.tb-login .clickCaptcha .captcha-error"].join(",") + "{width:" + (t - 8) + "px" + a + ";}\n.nc-container.tb-login .errloading, .nc-container .errloading {width:" + (t - 10) + "px;}")
                    },
                    updateAudioBoxWidth: function(e, t, n) {
                        var i = _.id(e + "omeo-refresh-audio").offsetWidth
                          , o = _.id(e + "_voice_close").offsetWidth
                          , a = _.id(e + "omeo-code-key").offsetWidth
                          , r = t - i - o - a - n;
                        _.id(e + "omeo-code-audiobox").style.width = r + "px"
                    },
                    try2setWidth: function(e, t) {
                        "string" == typeof e && (e = _.id(e)),
                        t = t || this.c_width || (el_render_to ? el_render_to.offsetWidth : 0),
                        t && e && e.style && (e.style.width = t + "px")
                    },
                    inituab: function() {
                        this.initUaParam();
                        var e = this;
                        UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                        _.loadjs(util.addHourStamp(ajaxURL.uab_Url), function(t) {
                            if ("timeout" === t)
                                showError(!0, ERR_CODE_UABTIMEOUT),
                                report("loaduab failed"),
                                reportLoadJSError(LOAD_JS_TIMEOUT, "uab.js timeout");
                            else
                                try {
                                    var n = function() {
                                        e.__uab && (clearInterval(i),
                                        "timeout" === e.__uab && (showError(!0, ERR_CODE_UABTIMEOUT),
                                        report("loaduab failed")))
                                    };
                                    AWSC.use("uab", function(t, n) {
                                        "loaded" === t ? e.__uab = n : "timeout" === t && (e.__uab = "timeout")
                                    });
                                    var i = setInterval(n, 100);
                                    n()
                                } catch (o) {
                                    report("uab die")
                                }
                        }, "nc-required-js-" + nc_index + " nc-uab-script")
                    },
                    initUaParam: function() {
                        function e(e, t) {
                            UA_Opt[e] = "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
                        }
                        function t(e, t) {
                            n.__uaoption[e] = "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
                        }
                        opt.is_Opt ? (e("MPInterval", 4),
                        e("MaxMCLog", 12),
                        e("MaxKSLog", 14),
                        e("MaxMPLog", 5),
                        e("MaxFocusLog", 6),
                        e("SendInterval", 5),
                        e("SendMethod", 8),
                        e("GPInterval", 50),
                        e("MaxGPLog", 1),
                        e("MaxTCLog", 12),
                        e("Flag", 2980046)) : (UA_Opt.SendInterval = 5,
                        UA_Opt.SendMethod = 8,
                        UA_Opt.MaxMCLog = 12,
                        UA_Opt.MaxKSLog = 14,
                        UA_Opt.MaxMPLog = 5,
                        UA_Opt.MaxGPLog = 1,
                        UA_Opt.MaxTCLog = 12,
                        UA_Opt.GPInterval = 50,
                        UA_Opt.MPInterval = 4,
                        UA_Opt.MaxFocusLog = 6,
                        UA_Opt.isSendError = 1,
                        UA_Opt.Flag = 2980046),
                        this.__uaoption = new Object;
                        var n = this;
                        opt.is_Opt ? (t("SendInterval", 5),
                        t("SendMethod", 8),
                        t("MaxMCLog", 12),
                        t("MaxKSLog", 14),
                        t("MaxMPLog", 5),
                        t("MaxGPLog", 1),
                        t("MaxTCLog", 12),
                        t("GPInterval", 50),
                        t("MPInterval", 4),
                        t("MaxFocusLog", 6),
                        t("Flag", 2980046),
                        t("OnlyHost", 1),
                        t("MaxMTLog", 500),
                        t("MinMTDwnLog", 30),
                        t("MaxNGPLog", 1),
                        t("sIDs", ["_n1t|_n1z|nocaptcha|-stage-1"]),
                        t("hook", 1),
                        t("font", 1),
                        t("api", 1)) : (n.__uaoption.SendInterval = 5,
                        n.__uaoption.SendMethod = 8,
                        n.__uaoption.isSendError = 1,
                        n.__uaoption.MaxMCLog = 12,
                        n.__uaoption.MaxKSLog = 14,
                        n.__uaoption.MaxMPLog = 5,
                        n.__uaoption.MaxGPLog = 1,
                        n.__uaoption.MaxTCLog = 12,
                        n.__uaoption.GPInterval = 50,
                        n.__uaoption.MPInterval = 4,
                        n.__uaoption.MaxFocusLog = 6,
                        n.__uaoption.Flag = 2980046,
                        n.__uaoption.OnlyHost = 1,
                        n.__uaoption.MaxMTLog = 500,
                        n.__uaoption.MinMTDwnLog = 30,
                        n.__uaoption.MaxNGPLog = 1,
                        n.__uaoption.sIDs = ["_n1t|_n1z|nocaptcha|-stage-1"],
                        n.__uaoption.mIDs = ["nc-canvas", "click2slide-btn"],
                        n.__uaoption.hook = 1,
                        n.__uaoption.font = 1,
                        n.__uaoption.api = 1)
                    },
                    afterUA: function() {
                        if ("undefined" == typeof umx)
                            this.initUM();
                        else {
                            var e = doc.getElementById("_umfp")
                              , t = (new Date).getTime();
                            umx.init({
                                timeout: opt.timeout,
                                timestamp: t,
                                token: opt.token,
                                serviceUrl: ajaxURL.umid_serUrl,
                                appName: opt.appkey,
                                enableFlash: !1,
                                containers: {
                                    flash: e,
                                    dcp: e
                                }
                            }),
                            this.afterUM()
                        }
                    },
                    initUM: function() {
                        var e = this;
                        _.loadjs(ajaxURL.umid_Url, function(t) {
                            if ("timeout" === t)
                                showError(!0, ERR_CODE_UMTIMEOUT),
                                reportLoadJSError(LOAD_JS_TIMEOUT, "um.js timeout");
                            else {
                                try {
                                    if (t) {
                                        if (--default_opt.times > 0)
                                            return void setTimeout(function() {
                                                e.initUM()
                                            }, 500);
                                        report("initUM")
                                    }
                                    var n = document.getElementById("_umfp")
                                      , i = (new Date).getTime();
                                    umx.init({
                                        timeout: opt.timeout,
                                        timestamp: i,
                                        token: opt.token,
                                        serviceUrl: ajaxURL.umid_serUrl,
                                        appName: opt.appkey,
                                        enableFlash: !1,
                                        containers: {
                                            flash: n,
                                            dcp: n
                                        },
                                        closeImage: !1
                                    })
                                } catch (t) {
                                    report("umx die")
                                }
                                e.afterUM()
                            }
                        }, "nc-required-js-" + nc_index + " nc-umid-script")
                    },
                    afterUM: function() {
                        function e() {
                            win.__acjs ? (t.reload(),
                            clearInterval(o),
                            onNCEvent(event_names.ready)) : i++ > 100 && (showError(!0, ERR_CODE_UABTIMEOUT),
                            clearInterval(o))
                        }
                        if (!this.__nc_afterUM) {
                            this.__nc_afterUM = !0;
                            var t = this;
                            if ("undefined" == typeof umx)
                                return report("afterUM"),
                                void showError(!0, ERR_CODE_UMXUNDEFINED);
                            var n, i = 0;
                            setTimeout(function() {
                                n = !0
                            }, 3e3);
                            var o = setInterval(e, 100);
                            e()
                        }
                    },
                    __reload_voicebtn: function() {
                        var e, t = _.id(nc_prefix + "_voicebtn"), n = this;
                        _.addHandler(t, "keydown", function i(e) {
                            var n = e || window.event;
                            13 != n.keyCode && 13 != n.which || (_.removeEvt(t, "keydown", i),
                            t.click())
                        }),
                        t.onclick = function() {
                            function t() {
                                a || umx.getStatus() ? (clearInterval(c),
                                _.jsonp({
                                    url: ajaxURL.analyze,
                                    callback: "callback",
                                    data: {
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: n.__uab.getUA && n.__uab.getUA(n.__uaoption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        _a: "audio",
                                        p: _.obj2str(opt.trans),
                                        lang: opt.language,
                                        scene: opt.scene,
                                        v: inn_vars.v
                                    },
                                    success: i,
                                    fail: function() {
                                        e && report("audio fail")
                                    }
                                })) : r++ > 100 && (showError(!0, ERR_CODE_UMXRETRYLIMIT),
                                clearInterval(c))
                            }
                            function i(t) {
                                function i(e) {
                                    if (e.success)
                                        if (100 == e.result.code)
                                            n.userCallback(objCheckCode.config.sessionid, e.result.value, e.result.sig);
                                        else if (900 == e.result.code) {
                                            UA_Opt.reload && UA_Opt.reload();
                                            var t = _.id(nc_prefix + "_captcha_text")
                                              , i = language[opt.language]._errorClickTEXT;
                                            ++gErrTimes > MAX_ERR_TIME && (i = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token)),
                                            t.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + i,
                                            t.style.visibility = "visible"
                                        } else
                                            300 != e.result.code && 69634 != e.result.code || (report("block"),
                                            _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>",
                                            onNCEvent(event_names.error),
                                            onNCEvent(event_names.error300));
                                    else
                                        n.errorCallback()
                                }
                                if (e) {
                                    var a = t.result;
                                    a && (objCheckCode || (objCheckCode = new clsCheckCode({
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: n.__uab.getUA && n.__uab.getUA(n.__uaoption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        type: "150_40",
                                        identity: opt.appkey,
                                        sessionid: a.csessionid,
                                        element: o,
                                        codeType: "audio",
                                        lang: opt.language,
                                        scene: opt.scene,
                                        p: _.obj2str(opt.trans)
                                    }),
                                    objCheckCode.check(function(e) {
                                        "success" != e.message && (objCheckCode.playErrAudio(),
                                        setTimeout(function() {
                                            var e = _.id(nc_prefix + "omeo-refresh-audio");
                                            e && e.click()
                                        }, 5e3)),
                                        "success" == e.message && _.jsonp({
                                            url: ajaxURL.checkcode,
                                            callback: "callback",
                                            data: {
                                                csessionid: a.csessionid,
                                                checkcode: function() {
                                                    var e = {};
                                                    return e.answer = objCheckCode.cache.lastCheckCode,
                                                    _.obj2str(e)
                                                }(),
                                                a: opt.appkey,
                                                t: opt.token,
                                                n: n.__uab.getUA && n.__uab.getUA(n.__uaoption) || win._n || "",
                                                p: "{}",
                                                r: Math.random(),
                                                lang: opt.language,
                                                v: inn_vars.v
                                            },
                                            success: i,
                                            fail: function(e) {
                                                n.errorCallback(e)
                                            }
                                        })
                                    }),
                                    objCheckCode.render(),
                                    onNCEvent(event_names.switchevent, {
                                        from: "scale",
                                        to: "audio"
                                    }),
                                    objCheckCode.switchCode({
                                        type: "audio"
                                    })))
                                }
                            }
                            var o = _.id(nc_prefix + "_voice");
                            if (_.id(nc_prefix + "imgCaptcha").style.display = "none",
                            _.id(nc_prefix + "clickCaptcha").style.display = "none",
                            e)
                                return e = !1,
                                o.style.display = "none",
                                objCheckCode && objCheckCode.stopAudio(),
                                clearInterval(win.__progtid),
                                n.reset(),
                                !1;
                            e = !0,
                            o.style.display = "block",
                            objCheckCode && (objCheckCode.resetPlayer({
                                state: "end"
                            }),
                            objCheckCode.switchCode({
                                type: "audio"
                            }));
                            var a, r = 0;
                            setTimeout(function() {
                                a = !0
                            }, 3e3);
                            var c = setInterval(t, 100);
                            t()
                        }
                    },
                    reload: function() {
                        objCheckCode = null,
                        clearInterval(win.__progtid);
                        var e = _.id(opt.renderTo);
                        e && (e.innerHTML = tpl,
                        util.addClass(el_render_to, "nc-container")),
                        opt.audio && (_.id(nc_prefix + "_voicebtn").style.display = "block",
                        util.addClass(_.id(nc_prefix + "n1t"), "is_audio")),
                        tb_login && tb_login.init(this.render_to, el_render_to, opt.customFloatHeight),
                        this.__reload_voicebtn();
                        var t = _.id(nc_prefix + "_helpbtn");
                        t && (navigator.userAgent.indexOf("MSIE 6.0") >= 0 && (t.style.display = "none"),
                        t.innerHTML = language[opt.language]._learning,
                        t.onclick = function() {
                            setTimeout(showHelp, 100)
                        }
                        ),
                        TEXTELEM = _.tag(scale_bar + " div")[1],
                        inn_vars.TEXTELEM = TEXTELEM,
                        opt.isEnabled && new Scale(scale_btn,scale_bar,this)
                    },
                    reset: function() {
                        this.__nc_afterUM = !1,
                        win.UA_Opt && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token);
                        var e;
                        opt.renderTo && opt.appkey && opt.token && (e = _.id(opt.renderTo),
                        e && util.addClass(el_render_to, "nc-container"),
                        e.innerHTML = '<div id="' + nc_prefix + 'nocaptcha"><div id="' + nc_prefix + 'wrapper" class="nc_wrapper"><div id="' + nc_prefix + '_n1t_loading" class="nc_scale"><div id="' + nc_prefix + '_bg" class="nc_bg" style="width: 0;"></div><div id="' + nc_prefix + '_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + loading_circle_html + "</div></div></div></div>",
                        "undefined" == typeof win.acjs ? this.loaduab() : (UA_Opt.LogVal = "_n",
                        this.initUaParam(),
                        UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                        UA_Opt.reload && UA_Opt.reload()),
                        this.afterUA())
                    },
                    show: function() {
                        el_render_to && (el_render_to.style.display = "block",
                        tb_login && tb_login.adjustPosition(opt.customFloatHeight),
                        this.is_show = !0)
                    },
                    hide: function() {
                        el_render_to && (el_render_to.style.display = "none",
                        this.is_show = !1)
                    },
                    getTrans: function() {
                        return opt.trans
                    },
                    setTrans: function(e) {
                        return e && (opt.trans = e),
                        opt.trans
                    },
                    loaduab: function() {
                        UA_Opt.LogVal = "_n",
                        this.initUaParam(),
                        UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                        _.loadjs(util.addHourStamp(ajaxURL.uab_Url), function(e) {
                            "timeout" === e && (showError(!0, ERR_CODE_UABTIMEOUT),
                            report("loaduab failed"));
                            try {
                                UA_Opt.reload()
                            } catch (t) {
                                report("uab die")
                            }
                        }, "nc-required-js-" + nc_index + " nc-uab-script")
                    },
                    enabled: function() {
                        return new Scale(scale_btn,scale_bar,this)
                    },
                    errorCallback: function(e) {
                        var t = _.id(scale_bar)
                          , n = this
                          , i = t.getElementsByTagName("span")
                          , o = t.getElementsByTagName("div");
                        if (onNCEvent(event_names.fail),
                        0 !== i.length && 0 !== o.length) {
                            var a = i[0]
                              , r = o[0];
                            showError(e),
                            util.addClass(r, "orange"),
                            util.addClass(a, "reload"),
                            _.addHandler(t, "click", function() {
                                UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                                UA_Opt.reload && UA_Opt.reload(),
                                n.reload(),
                                _.removeEvt(t, "click")
                            }),
                            e && opt.error && opt.error(language[opt.language]._errorServer)
                        }
                    },
                    getElementLeft: function(e) {
                        for (var t = e.offsetLeft, n = e.offsetParent; null !== n; )
                            t += n.offsetLeft,
                            n = n.offsetParent;
                        return t
                    },
                    getElementTop: function(e) {
                        for (var t = e.offsetTop, n = e.offsetParent; null !== n; )
                            t += n.offsetTop,
                            n = n.offsetParent;
                        return t
                    },
                    getNcSession: function(e) {
                        return parseInt(e.offsetWidth + "a" + e.offsetHeight + "a" + this.getElementLeft(e) + "a" + this.getElementTop(e), 11).toString(16)
                    },
                    onScaleReady: function onScaleReady(elem) {
                        function waitForUmx() {
                            if (is_umx_getStatus_timeout || umx.getStatus()) {
                                clearInterval(timer);
                                try {
                                    UA_Opt.sendSA()
                                } catch (e) {}
                                _.jsonp({
                                    url: ajaxURL.analyze,
                                    callback: "callback",
                                    data: {
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: me.__uab.getUA && me.__uab.getUA(me.__uaoption) || win[UA_Opt.LogVal || "_n"] || "",
                                        p: _.obj2str(trans),
                                        scene: opt.scene || (inn_vars.has_pointman ? pointman.config.common.scene : "") || "",
                                        asyn: 0,
                                        lang: opt.language,
                                        v: inn_vars.v
                                    },
                                    success: function(e) {
                                        me.onScaleReadyCallback(e, elem)
                                    },
                                    fail: function(e) {
                                        report("onScaleReady"),
                                        showError(!0, ERR_CODE_ANALYZETIMEOUT)
                                    }
                                })
                            } else
                                retry++ > 100 && (showError(!0, ERR_CODE_UMXRETRYLIMIT),
                                clearInterval(timer))
                        }
                        var trans = opt.trans || {};
                        "string" == typeof trans && (trans = eval("0," + trans));
                        for (var arr = opt.elementID || [], i = 0; i < arr.length; i++) {
                            var id = arr[i]
                              , el = doc.getElementById(id);
                            el && (trans[id] = el.value)
                        }
                        try {
                            trans.ncSessionID = this.getNcSession(document.getElementById("nc_" + this._index + "_n1t"))
                        } catch (e) {
                            trans.ncSessionID = "0"
                        }
                        var me = this;
                        TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html,
                        util.addClass(inn_vars.TEXTELEM, "nc-align-center"),
                        util.addClass(TEXTELEM, "scale_text2");
                        var retry = 0, is_umx_getStatus_timeout;
                        setTimeout(function() {
                            is_umx_getStatus_timeout = !0
                        }, 3e3);
                        var timer = setInterval(waitForUmx, 100);
                        waitForUmx()
                    },
                    onScaleReadyCallback: function(e, t) {
                        if (e.success) {
                            var n = e.result
                              , i = n.code;
                            if (0 === i)
                                _.id(scale_btn).className = "nc_iconfont btn_ok",
                                _.id(scale_btn).innerHTML = icon_ok_sign,
                                TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                util.removeClass(t.btn.parentNode, "nc_err"),
                                this.userCallback(n.csessionid, "pass", n.value);
                            else if (UA_Opt.reload && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                            UA_Opt.reload && UA_Opt.reload()),
                            util.addClass(t.btn, "nc_iconfont btn_warn"),
                            util.addClass(t.btn.parentNode, "nc_err"),
                            t.btn.innerHTML = icon_warn,
                            t.bar = _.tag(scale_bar + " div")[0],
                            TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html,
                            "function" == typeof opt.verifycallback && 300 != i && opt.verifycallback(n),
                            100 == i)
                                this.__inn = 1,
                                this.onScale100(n.csessionid, n.value);
                            else if (200 == i)
                                this.__inn = 1,
                                this.onScale200(n.csessionid, n.value);
                            else if (260 == i)
                                this.onScale260(n.csessionid, n.value);
                            else if (300 == i || 69634 == i) {
                                var o = function(e, t, n) {
                                    for (var i = 0, o = t, a = e.length; o < a; )
                                        i <<= 3,
                                        i += e.charCodeAt(o),
                                        o += n;
                                    i < 0 && (i = 0 - i);
                                    for (var r = "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", c = ""; i >= 58; ) {
                                        var s = i % 58;
                                        c = r[s] + c,
                                        i = (i - s) / 58
                                    }
                                    c += r[(new Date).getDate()];
                                    var l = c.length;
                                    return l > 6 && (c = c.substr(l - 6, l - 1)),
                                    c
                                };
                                report("block"),
                                util.removeClass(inn_vars.TEXTELEM, "nc-align-center"),
                                _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "(error:" + o(opt.token, 0, 1) + ")</div>",
                                onNCEvent(event_names.error),
                                onNCEvent(event_names.error300)
                            }
                        } else
                            this.errorCallback()
                    },
                    onScale100: function e(t, n, i) {
                        var o = e
                          , a = i || this
                          , r = this
                          , c = _.tag(nc_prefix + "clickCaptcha div");
                        this.__inn && (this.__inn = 0,
                        _.addHandler(_.id(nc_prefix + "_btn_2"), "click", function() {
                            o.call(a, t, n)
                        }));
                        var s, l = setTimeout(function() {
                            l = -1,
                            s || (showError(!0, ERR_CODE_UABTIMEOUT),
                            report("captcha timeout"))
                        }, 5e3);
                        onNCEvent(event_names.beforeverify),
                        onNCEvent(event_names.before_code),
                        supportDataURI.then(function() {
                            return ajaxURL.get_captcha
                        }, function() {
                            return ajaxURL.get_captcha_pre
                        }).then(function(e) {
                            _.jsonp({
                                url: e,
                                callback: "callback",
                                data: {
                                    sessionid: t,
                                    identity: opt.appkey,
                                    style: n,
                                    lang: opt.language,
                                    v: inn_vars.v
                                },
                                success: function(e) {
                                    if (e.result.question && (e.result.question = e.result.question.replace(/<span[^>]+?>/g, "<i>"),
                                    e.result.question = e.result.question.replace(/<\/span[^>]*?>/g, "</i>"),
                                    a.captchaToken = e.result.captchaToken),
                                    s = !0,
                                    l != -1) {
                                        if (clearTimeout(l),
                                        !e.result.tags)
                                            return report("no tag"),
                                            void showError(!0, ERR_CODE_CAPTCHA_NOTAG);
                                        var i = _.id(nc_prefix + "clickCaptcha");
                                        i && (i.style.display = "block",
                                        a.__is_c_width_setted || a.updateWidth(_.id(nc_prefix + "wrapper"), 1)),
                                        el_render_to && util.addClass(el_render_to, "show-click-captcha");
                                        var d = opt.appkey + "&sessionid"
                                          , u = e.result.question.split(e.result.tags[0])
                                          , p = u.shift();
                                        util.removeClass(inn_vars.TEXTELEM, "nc-align-center"),
                                        _.id(nc_prefix + "_scale_text") && (e.result.question.indexOf("<i>") == -1 ? _.id(nc_prefix + "_scale_text").innerHTML = p + "<i>\u201c" + e.result.tags[0] + "\u201d</i>" + u.join(e.result.tags[0]) : _.id(nc_prefix + "_scale_text").innerHTML = e.result.question),
                                        tb_login && tb_login.getInform(_.id(nc_prefix + "clickCaptcha"), module_nc.nc),
                                        c[1].innerHTML = '<img src="' + e.result.data + '" >';
                                        var f, g = c[1].getElementsByTagName("img")[0];
                                        g.onload = function() {
                                            f = !0,
                                            h != -1 && clearTimeout(h)
                                        }
                                        ,
                                        g.onerror = function() {
                                            report("captcha onerror"),
                                            showError()
                                        }
                                        ;
                                        var h = setTimeout(function() {
                                            h = -1,
                                            f || (showError(!0, ERR_CODE_IMAGE_TIMEOUT),
                                            report("captcha timeout"))
                                        }, 5e3);
                                        _.addHandler(g, "click", function(e) {
                                            util.addClass(inn_vars.TEXTELEM, "nc-align-center"),
                                            TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html,
                                            _.jsonp({
                                                url: ajaxURL.checkcode,
                                                callback: "callback",
                                                data: {
                                                    csessionid: t,
                                                    checkcode: function() {
                                                        var t = {};
                                                        return t.imgid = d,
                                                        t.w = g.width.toString(),
                                                        t.h = g.height.toString(),
                                                        t.x = void 0 === e.offsetX ? util.getOffset(e).offsetX : e.offsetX,
                                                        t.y = void 0 === e.offsetY ? util.getOffset(e).offsetY : e.offsetY,
                                                        t.x = parseInt(t.x).toString(),
                                                        t.y = parseInt(t.y).toString(),
                                                        t.captchaToken = a.captchaToken,
                                                        _.obj2str(t)
                                                    }(),
                                                    a: opt.appkey,
                                                    t: opt.token,
                                                    n: r.__uab.getUA && r.__uab.getUA(r.__uaoption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                                    p: "{}",
                                                    r: Math.random(),
                                                    lang: opt.language,
                                                    v: inn_vars.v
                                                },
                                                success: function(e) {
                                                    var i = _.id(scale_btn);
                                                    if (e.success)
                                                        if (100 == e.result.code)
                                                            i.className = "nc_iconfont btn_ok",
                                                            i.innerHTML = icon_ok_sign,
                                                            util.addClass(inn_vars.TEXTELEM, "nc-align-center"),
                                                            _.tag(scale_bar + " div")[0].className = "nc_bg",
                                                            TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                                            util.removeClass(i.parentNode, "nc_err"),
                                                            _.toggle(nc_prefix + "clickCaptcha"),
                                                            el_render_to && util.removeClass(el_render_to, "show-click-captcha"),
                                                            a.userCallback && a.userCallback(t, n, e.result.sig);
                                                        else if (900 == e.result.code) {
                                                            UA_Opt.reload && UA_Opt.reload(),
                                                            o.call(a, t, n, a);
                                                            var r = _.id(nc_prefix + "_captcha_text")
                                                              , c = language[opt.language]._errorClickTEXT;
                                                            ++gErrTimes > MAX_ERR_TIME && (c = language[opt.language]._errorTooMuchClick.replace("%TOKEN", opt.token)),
                                                            r.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + c,
                                                            r.style.visibility = "visible"
                                                        } else
                                                            300 != e.result.code && 69634 != e.result.code || (report("block"),
                                                            _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>",
                                                            onNCEvent(event_names.error),
                                                            onNCEvent(event_names.error300));
                                                    else
                                                        a.errorCallback()
                                                },
                                                fail: function(e) {
                                                    a.errorCallback(e)
                                                }
                                            })
                                        }),
                                        onNCEvent(event_names.afterverify),
                                        onNCEvent(event_names.after_code)
                                    }
                                },
                                fail: function() {
                                    _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._errorLOADING) + "</div>",
                                    a.errorCallback(!0)
                                }
                            })
                        })
                    },
                    onScale200: function t(e, n) {
                        function i(e) {
                            var t = _.id(nc_prefix + "captcha_input");
                            return (g = t.value.replace(/[^\w\/]/gi, "")) ? (g.length > f.length ? p.push(g.slice(f.length)) : g.length < f.length ? p.push("bsp") : p.push("oth"),
                            void (f = g)) : (f = "",
                            void p.push("oth"))
                        }
                        function o() {
                            var t = _.tag(nc_prefix + "imgCaptcha input")[0].value;
                            if (t) {
                                var i = {
                                    ksl: p.slice(0, 20)
                                };
                                _.jsonp({
                                    url: ajaxURL.checkcode,
                                    callback: "callback",
                                    data: {
                                        csessionid: e,
                                        checkcode: function() {
                                            var e = {};
                                            return e.answer = t,
                                            e.captchaToken = s.captchaToken,
                                            _.obj2str(e)
                                        }(),
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: a.__uab.getUA && a.__uab.getUA(a.__uaoption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        p: _.obj2str(i),
                                        lang: opt.language,
                                        v: inn_vars.v
                                    },
                                    success: function(t) {
                                        if (t.success) {
                                            var i = _.id(scale_btn)
                                              , o = _.tag(nc_prefix + "imgCaptcha div")[2];
                                            if (100 == t.result.code)
                                                i.className = "nc_iconfont btn_ok",
                                                i.innerHTML = icon_ok_sign,
                                                _.tag(scale_bar + " div")[0].className = "nc_bg",
                                                TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                                util.addClass(inn_vars.TEXTELEM, "nc-align-center"),
                                                util.removeClass(i.parentNode, "nc_err"),
                                                o.style.borderTopColor = "#e5e5e5",
                                                _.toggle(nc_prefix + "imgCaptcha"),
                                                s.userCallback.call(this, e, n, t.result.sig);
                                            else if (900 == t.result.code) {
                                                var a = _.tag(nc_prefix + "imgCaptcha input")[0];
                                                a && (a.value = ""),
                                                UA_Opt.reload && UA_Opt.reload(),
                                                c.call(s, e, n);
                                                var r = language[opt.language]._errorTEXT;
                                                ++gErrTimes > MAX_ERR_TIME && (r = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token));
                                                var l = _.id(nc_prefix + "_captcha_img_text");
                                                l.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + r,
                                                l.style.display = "block",
                                                l.style.visibility = "visible",
                                                o.style.borderTopColor = "red"
                                            } else
                                                300 != t.result.code && 69634 != t.result.code || (report("block"),
                                                _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>",
                                                onNCEvent(event_names.error),
                                                onNCEvent(event_names.error300))
                                        } else
                                            s.errorCallback();
                                        p = [],
                                        f = ""
                                    },
                                    fail: function(e) {
                                        s.errorCallback(e)
                                    }
                                })
                            }
                        }
                        onNCEvent(event_names.beforeverify),
                        onNCEvent(event_names.before_code);
                        var a = this
                          , r = _.id(nc_prefix + "imgCaptcha");
                        r && (this.__is_c_width_setted || this.updateWidth(_.id(nc_prefix + "wrapper"), 1));
                        var c = t
                          , s = this
                          , l = _.tag(nc_prefix + "imgCaptcha div")
                          , d = supportDataURI.then(function() {
                            return ajaxURL.get_img
                        }, function() {
                            return ajaxURL.get_img_pre
                        }).then(function(t) {
                            var i = opt;
                            return util.request({
                                url: t,
                                data: {
                                    sessionid: e,
                                    identity: i.appkey,
                                    token: opt.token,
                                    style: n
                                }
                            })
                        }).then(function(e) {
                            return e.success && 0 === e.result.resultCode ? (s.captchaToken = e.result.captchaToken,
                            util.imageLoaded(e.result.data[0])) : Promise.reject({
                                type: "request",
                                code: e.result.resultCode,
                                msg: e.result.message
                            })
                        }).then(function(t) {
                            r.style.display = "block",
                            l[1].innerHTML = "",
                            l[1].appendChild(t);
                            var i = l[1].getElementsByTagName("img")[0];
                            _.addHandler(i, "click", function() {
                                c.call(s, e, n)
                            }),
                            TEXTELEM.innerHTML = language[opt.language]._noTEXT,
                            tb_login && tb_login.getInform(_.id(nc_prefix + "imgCaptcha"), module_nc.nc),
                            util.removeClass(inn_vars.TEXTELEM, "nc-align-center"),
                            _.id(nc_prefix + "scale_submit").innerHTML = language[opt.language]._submit
                        });
                        d["catch"](function(e) {
                            /^(request)$/.test(e.type) ? showError(!0, ERR_CODE_IMAGE_REQUEST_ERROR) : /^(img)$/.test(e.type) && showError()
                        });
                        var u, p = [], f = "", g = "";
                        this.__inn && (this.__inn = 0,
                        _.addHandler(_.id(nc_prefix + "scale_submit"), "click", o),
                        _.addHandler(_.id(nc_prefix + "_btn_2"), "click", function() {
                            c.call(this, e, n)
                        }),
                        window.addEventListener ? _.id(nc_prefix + "captcha_input").addEventListener("input", i) : _.id(nc_prefix + "captcha_input").attachEvent("onpropertychange", function(e) {
                            "value" === e.propertyName && i()
                        }),
                        u = _.id(nc_prefix + "imgCaptcha"),
                        u && (u = u.getElementsByTagName("input")[0]) && _.addHandler(u, "keydown", function(e) {
                            if (e = e || window.event,
                            13 == e.keyCode || 13 == e.which)
                                return o(),
                                e.preventDefault ? e.preventDefault() : window.event.returnValue = !1,
                                !1
                        })),
                        onNCEvent(event_names.afterverify),
                        onNCEvent(event_names.after_code)
                    },
                    onScale260: function(e, t) {
                        var n = this;
                        onNCEvent(event_names.beforeverify),
                        onNCEvent(event_names.before_code),
                        TEXTELEM.innerHTML = language[opt.language]._cc_select,
                        this.imgCategoryCaptcha = new ImgCategoryCaptcha(util.mix({
                            nc: this,
                            prefix: nc_prefix,
                            $wrapper: _.id(nc_prefix + "wrapper"),
                            csessionid: e,
                            value: t,
                            onfail: function() {
                                onNCEvent(event_names.fail)
                            },
                            onerror: function() {
                                onNCEvent(event_names.error),
                                onNCEvent(event_names.error300)
                            },
                            onsuccess: function(i) {
                                var o = _.id(scale_btn);
                                o.className = "nc_iconfont btn_ok",
                                o.innerHTML = icon_ok_sign,
                                TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                util.removeClass(o.parentNode, "nc_err");
                                try {
                                    n.userCallback(e, t, i)
                                } catch (a) {
                                    throw a
                                }
                            }
                        }, opt),{
                            v: inn_vars.v,
                            obj2str: _.obj2str
                        }),
                        onNCEvent(event_names.afterverify),
                        onNCEvent(event_names.after_code)
                    },
                    userCallback: function(e, t, n) {
                        var i = {
                            csessionid: e || null,
                            value: t || null,
                            sig: n || null,
                            token: _getToken()
                        };
                        opt.callback && opt.callback.call(this, i),
                        onNCEvent(event_names.success, i)
                    },
                    upLang: function(e, t) {
                        return _upLang(e, t)
                    },
                    getToken: function() {
                        return _getToken()
                    },
                    destroy: function() {
                        el_render_to.innerHTML = "";
                        var e, t, n, i = util.getElementsByClassName("nc-custom-style-" + nc_index);
                        if (util.getElementsByClassName("nc-required-js-" + nc_index),
                        e = i.length,
                        e > 0)
                            for (t = 0; t < e; t++)
                                n = i[0].parentNode,
                                n && n.removeChild(i[0])
                    }
                },
                NoCaptcha
            }
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , win = window, doc = document, tb_login, util = __webpack_require__(1), ImgCategoryCaptcha = __webpack_require__(110), mmstat_base = __webpack_require__(4).mmstat_base, URL_MAP = __webpack_require__(4).URL_MAP, language = __webpack_require__(7).language, _upLang = __webpack_require__(7).upLang, upResetIndex = __webpack_require__(7).upResetIndex, loadExLang = __webpack_require__(111).loadExLang, makeTemplate = __webpack_require__(119).makeTemplate, m_checkcode = __webpack_require__(108), makeShowHelp = __webpack_require__(117).makeShowHelp, default_opt = __webpack_require__(22).default_opt, report2 = __webpack_require__(3), css = __webpack_require__(109), MAX_ERR_TIME = 3, NC_LOGO_URL = "//img.alicdn.com/tfs/TB1itI1PVXXXXXTXVXXXXXXXXXX-52-32.png", ERR_CODE_ANALYZETIMEOUT = "00", ERR_CODE_UABTIMEOUT = "01", ERR_CODE_UMTIMEOUT = "02", ERR_CODE_UMXUNDEFINED = "04", ERR_CODE_UMXRETRYLIMIT = "08", ERR_CODE_CAPTCHA_NOTAG = "16", ERR_CODE_IMAGE_TIMEOUT = "32", ERR_CODE_IMAGE_REQUEST_ERROR = "64", LOAD_JS_TIMEOUT = "LOAD_JS_TIMEOUT", icon_warn = "&#xe60a;", icon_ok_sign = "&#xe60b;", icon_close = "&#xe609;", m_event = __webpack_require__(9), event_names = m_event.names, event_deprecated = m_event.deprecated, Promise = __webpack_require__(2);
            exports.makeNoCaptcha = makeNoCaptcha
        }
        , function(e, t, n) {
            "use strict";
            t.reg = function(e) {
                if (location.hostname.indexOf("alipay.com") !== -1) {
                    var t = e.renderTo;
                    if (t && "string" == typeof t) {
                        t = t.replace("#", "");
                        var n = document.getElementById(t);
                        if (n) {
                            var i = n.parentNode;
                            i && "_umfp" == i.id && (e.customWidth = e.customWidth || 300)
                        }
                    }
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            function i() {
                var e = navigator.userAgent;
                return !/Firefox|MSIE/.test(e)
            }
            function o(e, t, n) {
                function o(e, n, o) {
                    t.TEXTELEM && (t.TEXTELEM.innerHTML = s[o.opt.language || l.language]._startTEXT,
                    i() && c.addClass(t.TEXTELEM, "slidetounlock")),
                    this.btn = r.getElementById(e),
                    this.bar = r.getElementById(n),
                    this.txt = r.getElementById(u + "_scale_text"),
                    this.step = this.bar.getElementsByTagName("DIV")[0],
                    this.init(o)
                }
                var u = t.prefix;
                return o.prototype = {
                    init: function(t) {
                        function i(i) {
                            function a() {
                                s.btn.onmousedown = null,
                                s.txt.onmousedown = null,
                                e.removeEvt(l, "mousemove", r),
                                e.removeEvt(l, "mouseup", f),
                                e.removeEvt(l, "touchmove", h),
                                e.removeEvt(l, "touchend", g),
                                e.removeEvt(s.btn, "touchstart", o),
                                e.removeEvt(s.txt, "touchstart", o);
                                var i = {};
                                i.btn = s.btn,
                                i.bar = s.bar.childNodes[1],
                                n(d.actionend),
                                n(d.slide_end),
                                t.onScaleReady(i)
                            }
                            function r(e) {
                                m || (n(d.actionstart),
                                n(d.slide_start),
                                m = !0);
                                var t = (e || p.event).clientX
                                  , i = _.min(y, _.max(-2, k + (t - v)));
                                s.btn.style.left = i + "px",
                                s.ondrag(_.round(100 * _.max(0, i / y)), i);
                                var o = x + s.bar.offsetWidth;
                                if (t >= o && (i < y || t - k < y))
                                    return void f.call(this);
                                var r = c.getClientRect(s.btn).left;
                                i != y && t - r - b != y || a()
                            }
                            function f() {
                                var t = parseInt(s.btn.style.left);
                                t < y && (c.addClass(s.btn, "button_move"),
                                c.addClass(e.id(u + "_bg"), "bg_move"),
                                s.btn.style.left = "0px",
                                s.ondrag(0, 0),
                                setTimeout(function() {
                                    c.removeClass(s.btn, "button_move"),
                                    c.removeClass(e.id(u + "_bg"), "bg_move")
                                }, 500)),
                                e.removeEvt(this, "touchmove", h),
                                e.removeEvt(l, "touchmove", h),
                                e.removeEvt(l, "mousemove", r),
                                e.removeEvt(l, "mouseup", f)
                            }
                            function g(e) {
                                f.call(this, e.touches[0])
                            }
                            function h(e) {
                                e.preventDefault(),
                                r.call(this, e.touches[0])
                            }
                            var m = !1
                              , v = (i || p.event).clientX
                              , b = s.btn.offsetWidth
                              , y = s.bar.offsetWidth - b
                              , k = s.btn.offsetLeft
                              , x = c.getClientRect(s.bar).left;
                            e.addHandler(l, "mousemove", r),
                            e.addHandler(l, "mouseup", f),
                            e.addHandler(l, "touchmove", h),
                            e.addHandler(l, "touchend", g)
                        }
                        function o(e) {
                            e.preventDefault(),
                            i.call(this, e.touches[0])
                        }
                        var s = this
                          , l = r
                          , p = a
                          , _ = Math;
                        s.btn.onmousedown = i,
                        s.txt.onmousedown = i,
                        e.addHandler(s.btn, "touchstart", o),
                        e.addHandler(s.txt, "touchstart", o),
                        s.bar.onselectstart = function() {
                            return !1
                        }
                    },
                    ondrag: function(e, t) {
                        this.step.style.width = Math.max(0, t) + "px"
                    },
                    text: function() {}
                },
                o
            }
            var a = window
              , r = document
              , c = n(1)
              , s = n(7).language
              , l = n(22).default_opt
              , d = n(9).names;
            t.makeScale = o
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t, n) {
                function i() {
                    c || (c = r()),
                    c()
                }
                function r() {
                    function n() {
                        var e = o.createElement("div");
                        return e.innerHTML = r,
                        e.firstChild
                    }
                    function i() {
                        function n() {
                            var t = 0
                              , n = 260
                              , i = setInterval(function() {
                                t += 5,
                                t > n ? (p.innerHTML = a[e.language]._Loading,
                                t > n + 100 && (p.innerHTML = a[e.language]._yesTEXT,
                                clearInterval(i),
                                setTimeout(function() {
                                    _.click()
                                }, 2e3))) : (f.style.left = s + 20 + t + "px",
                                u.style.left = t + "px",
                                p.style.width = t + "px")
                            }, 16)
                        }
                        p.innerHTML = "",
                        c.style.display = "block";
                        var i = t.id(e.renderTo)
                          , r = i.getBoundingClientRect()
                          , s = r.left
                          , l = r.top + 20 + o.body.scrollTop;
                        d.style.left = s + "px",
                        d.style.top = l + "px",
                        u.style.left = s - 10 + "px",
                        f.style.left = s + 20 + "px",
                        f.style.top = l + 20 + "px",
                        _.style.left = s + 200 + "px",
                        _.style.top = l + 90 + "px",
                        n()
                    }
                    var r = '<div id="' + s + '_help" class="nc_help"><div class="mask"></div><div id="' + s + '_slide_box" class="nc_scale"><div id="' + s + '_slide_button"></div><div id="' + s + '_slide_text" class="scale_text"></div><div id="' + s + '_slide_bg"></div></div><div id="' + s + '_btn_close"></div><div id="' + s + '_hand"></div>'
                      , c = n(r);
                    o.body.appendChild(c),
                    c.style.display = "none",
                    c.style.width = o.body.scrollWidth + "px",
                    c.style.height = o.body.scrollHeight + "px";
                    var l = t.id(s + "_slide_text");
                    l.innerHTML = a[e.language]._startTEXT;
                    var d = t.id(s + "_slide_box")
                      , u = t.id(s + "_slide_button")
                      , p = t.id(s + "_slide_bg")
                      , _ = t.id(s + "_btn_close")
                      , f = t.id(s + "_hand");
                    return _.innerHTML = a[e.language]._closeHelp,
                    _.onclick = function() {
                        c.style.display = "none"
                    }
                    ,
                    i
                }
                var c, s = n.prefix;
                return i
            }
            var o = document
              , a = n(7).language;
            t.makeShowHelp = i
        }
        , function(e, t, n) {
            "use strict";
            function i(e) {
                function t(e) {
                    return o.getElementById(e)
                }
                function i(e) {
                    if (!e)
                        return 0;
                    for (var t = e.offsetTop, n = e.offsetParent; n; )
                        t += n.offsetTop,
                        n = n.offsetParent;
                    return t
                }
                function a(e, t) {
                    var n, i, o, a = e.getElementsByTagName("div");
                    for (n = 0; n < a.length; n++)
                        if (i = a[n],
                        o = i.className,
                        o && o.indexOf(t) > -1)
                            return i;
                    return null
                }
                function r(e) {
                    var n = t(g + "_scale_text")
                      , i = a(e, "captcha-error");
                    i || (i = o.createElement("div"),
                    i.className = "captcha-error login-msg error",
                    e.appendChild(i)),
                    i.innerHTML = ["<i class='nc_iconfont icon_ban'>&#xe603;</i>", "<p class='error'>", n.innerHTML, "</p>"].join("")
                }
                function c(e, t) {
                    var n = e.className;
                    n.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) || (e.className = (e.className + " " + t).replace(/^\s+|\s+$/g, ""))
                }
                function s() {
                    var e = 0
                      , n = t("J_Message");
                    return n && (e = n.offsetHeight),
                    e
                }
                function l() {
                    s() > 0 && f && c(f, "nc-tm-min-fix")
                }
                function d(e) {
                    if (f) {
                        var n;
                        m && (n = t(g + "_btn_1")) && (n.style.position = "absolute",
                        n.style.top = "77px",
                        n.style.right = "0");
                        var o = f.className || ""
                          , a = "tb-login";
                        o.indexOf(a) == -1 && (f.className = (o + " " + a).replace(/^\s+|\s+$/g, "")),
                        f.className.match(/\bnc-old-login\b/) && (p = !0);
                        var r;
                        if (r = t("J_LoginBox") || t("J_Login") || h.getElementsByClassName("nc-outer-box")[0]) {
                            var c = p ? 0 : 2
                              , u = i(f)
                              , _ = d;
                            if (u <= 0) {
                                if (_._count > 100)
                                    return;
                                return _._count = (_._count || 0) + 1,
                                void setTimeout(_, 100)
                            }
                            var v, b, y = i(r) - u, k = r.getBoundingClientRect();
                            "number" == typeof e ? (v = e,
                            b = 1) : v = k.height ? k.height : k.bottom - k.top;
                            var x, w;
                            w = t(g + "imgCaptcha"),
                            w && (w.style.top = y + c + "px",
                            x = v - c - 66,
                            b && (x -= 13),
                            b || 0 !== s() || (w.style.minHeight = "290px",
                            x -= 10),
                            w.style.height = x + "px",
                            b && (w.style.minHeight = 0)),
                            w = t(g + "clickCaptcha"),
                            w && (w.style.top = y + c + "px",
                            p ? (l(),
                            x = v + 30,
                            x < 255 && (x = 255),
                            w.style.height = x + "px") : (l(),
                            x = v - c - 30,
                            b && (x -= 8),
                            w.style.height = x + "px"),
                            b && (w.style.minHeight = 0))
                        }
                    }
                }
                function u(e, t, n) {
                    _ = e,
                    f = t,
                    d(n)
                }
                var p, _, f, g = e.prefix, h = n(1), m = h.isIEX(6);
                return {
                    init: u,
                    adjustPosition: d,
                    getInform: r
                }
            }
            var o = document;
            t.makeTBLogin = i
        }
        , function(e, t, n) {
            "use strict";
            function i(e) {
                var t = e.prefix
                  , n = '\n<div id="' + t + 'wrapper" class="nc_wrapper">\n<div id="' + t + 'n1t" class="nc_scale">\n<div id="' + t + '_bg" class="nc_bg"></div>\n<span id="' + t + 'n1z" class="nc_iconfont btn_slide">&#xe601;</span>\n<div id="' + t + '_scale_text" class="scale_text"></div>\n<div id="' + t + 'clickCaptcha" class="clickCaptcha">\n<div class="clickCaptcha_text">\n<b id="' + t + '_captcha_text" class="nc_captch_text"></b>\n<i id="' + t + '_btn_2" class="nc_iconfont nc_btn_2 btn_refresh">&#xe607;</i>\n</div>\n<div class="clickCaptcha_img"></div>\n<div class="clickCaptcha_btn"></div>\n</div>\n<div id="' + t + 'imgCaptcha" class="imgCaptcha">\n<div class="imgCaptcha_text"><input id="' + t + 'captcha_input" maxlength="6" type="text" style="ime-mode:disabled"></div>\n<div class="imgCaptcha_img" id="' + t + '_imgCaptcha_img"></div>\n<i id="' + t + '_btn_1" class="nc_iconfont nc_btn_1 btn_refresh"\n    onclick="document.getElementById(\'' + t + '_imgCaptcha_img\').children[0].click()">&#xe607;</i>\n<div class="imgCaptcha_btn">\n<div id="' + t + '_captcha_img_text" class="nc_captcha_img_text"></div>\n<div id="' + t + 'scale_submit" class="nc_scale_submit"></div>\n</div>\n</div>\n<div id="' + t + 'cc" class="nc-cc"></div>\n<i id="' + t + '_voicebtn" tabindex="0" role="button" class="nc_voicebtn nc_iconfont" style="display:none" >&#xe604;</i>\n<b id="' + t + '_helpbtn" class="nc_helpbtn"></b>\n</div>\n<div id="' + t + '_voice" class="nc_voice"></div>\n</div>\n';
                return n
            }
            t.makeTemplate = i
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n),
                    i && e(t, i),
                    t
                }
            }()
              , a = n(13)
              , r = n(17)
              , c = n(5)
              , s = n(125).default_opt
              , l = n(3)
              , d = n(2)
              , u = [{
                name: "init",
                from: "initially",
                to: "loading"
            }, {
                name: "load",
                from: "loading",
                to: "ready"
            }, {
                name: "loaderror",
                from: ["loading", "ready"],
                to: "load_error"
            }, {
                name: "continueloading",
                from: "load_error",
                to: "loading"
            }, {
                name: "verify",
                from: ["ready", "fail"],
                to: "verifying"
            }, {
                name: "timeout",
                from: "ready",
                to: "actiontimeout"
            }, {
                name: "verifyfail",
                from: ["ready", "verifying"],
                to: "fail"
            }, {
                name: "verifyerror",
                from: "verifying",
                to: "error"
            }, {
                name: "verifytwostep",
                from: "verifying",
                to: "need_two_step_verify"
            }, {
                name: "verifypass",
                from: "verifying",
                to: "pass"
            }, {
                name: "reset",
                from: ["*"],
                to: "reseting"
            }, {
                name: "resetdone",
                from: "reseting",
                to: "loading"
            }, {
                name: "destroy",
                from: ["*"],
                to: "destroyed"
            }, {
                name: "showtwostep",
                from: "need_two_step_verify",
                to: "ts_loading"
            }, {
                name: "ts_load",
                from: "ts_loading",
                to: "ts_ready"
            }, {
                name: "ts_verify",
                from: ["ts_ready", "ts_fail"],
                to: "ts_verifying"
            }, {
                name: "ts_verifyfail",
                from: "ts_verifying",
                to: "ts_fail"
            }, {
                name: "ts_verifyerror",
                from: "ts_verifying",
                to: "ts_error"
            }, {
                name: "ts_verifyerror2",
                from: "ts_error",
                to: "error"
            }, {
                name: "ts_verifypass",
                from: "ts_verifying",
                to: "ts_pass"
            }, {
                name: "ts_passed",
                from: "ts_pass",
                to: "pass"
            }]
              , p = function() {
                function e(t, n, o) {
                    i(this, e);
                    var a = s.language;
                    t.foreign && (a = "en",
                    s.language = a),
                    this.options = c.mix({}, a, o, t),
                    this.inn_vars = n,
                    n.index++,
                    this.index = n.index,
                    this.jsv = n.v,
                    this.el = document.getElementById(t.renderTo.replace(/^#/, "")),
                    this.el || r.fail("'renderTo'(" + t.renderTo + ") does not match any node."),
                    this.makeFSM(),
                    this.initStates(),
                    this.event_listeners = {},
                    this._custom_state = {},
                    this.fsm.init()
                }
                return o(e, [{
                    key: "makeFSM",
                    value: function() {
                        var e = this;
                        this.fsm = a.create({
                            initial: "initially",
                            events: u
                        }),
                        this.fsm.onenterstate = function(t, n, i) {
                            if ("loading" !== i) {
                                var o = e._custom_state[i];
                                Array.isArray(o) && d.all(c.map(o, function(e) {
                                    return e()
                                }))
                            }
                        }
                    }
                }, {
                    key: "initStates",
                    value: function() {
                        var e = this;
                        c.map(u, function(t) {
                            n(135)("./" + t.to).init(e)
                        })
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        (this.event_listeners[e] = this.event_listeners[e] || []).push(t)
                    }
                }, {
                    key: "reg",
                    value: function(e, t) {
                        this._custom_state[e] = this._custom_state[e] || [],
                        this._custom_state[e].push(t)
                    }
                }, {
                    key: "fire",
                    value: function(e) {
                        for (var t = this.event_listeners[e] = this.event_listeners[e] || [], n = 0; n < t.length && t[n].call() !== !1; n++)
                            ;
                    }
                }, {
                    key: "reload",
                    value: function() {
                        this.fsm.reset()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.fsm.reset()
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.el.style.display = "block"
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.el.style.display = "none"
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.is_destroyed || (this.fsm.destroy(),
                        this.is_destroyed = !0)
                    }
                }, {
                    key: "_log",
                    value: function(e, t, n) {
                        var i = this.options
                          , o = i.token || UA_Opt.Token || ("undefined" != typeof umx && umx.getToken ? umx.getToken() : "");
                        l.log({
                            a: i.appkey,
                            t: o,
                            scene: i.scene,
                            ns: "",
                            jsv: this.jsv,
                            usa: navigator.userAgent,
                            p: n,
                            jsType: "pc",
                            os: c.getOS(),
                            em: t,
                            ec: e
                        })
                    }
                }]),
                e
            }();
            t.NC2 = p
        }
        , function(e, t, n) {
            "use strict";
            e.exports = n(21).BaseFun
        }
        , function(module, exports, __webpack_require__) {
            "use strict";
            function _classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var _slicedToArray = function() {
                function e(e, t) {
                    var n = []
                      , i = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var r, c = e[Symbol.iterator](); !(i = (r = c.next()).done) && (n.push(r.value),
                        !t || n.length !== t); i = !0)
                            ;
                    } catch (s) {
                        o = !0,
                        a = s
                    } finally {
                        try {
                            !i && c["return"] && c["return"]()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t))
                        return t;
                    if (Symbol.iterator in Object(t))
                        return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }()
              , _createClass = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n),
                    i && e(t, i),
                    t
                }
            }()
              , html = __webpack_require__(124).html
              , kvTpl = __webpack_require__(19)
              , BaseFn = __webpack_require__(121)
              , util = __webpack_require__(5)
              , cfg = __webpack_require__(23)
              , URL_MAP = __webpack_require__(68).URL_MAP
              , language = __webpack_require__(24).language
              , replaceLang = __webpack_require__(24).replaceLang
              , upResetIndex = __webpack_require__(24).upResetIndex
              , Promise = __webpack_require__(2)
              , Report = __webpack_require__(3)
              , doc = document
              , getElementById = function(e) {
                return doc.getElementById(e)
            }
              , styleEl = function(e, t, n) {
                return e.style[t] = n
            }
              , ERR_CODE_API_FAIL = "SCRAPE_API_FAIL"
              , FAIL_PREPARE = "fail_prepare"
              , FAIL_ANALYZE = "fail_analyze"
              , win = window;
            __webpack_require__(26),
            __webpack_require__(133);
            var obj_w = -1
              , obj_h = -1
              , Scrape = function() {
                function Scrape(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _classCallCheck(this, Scrape),
                    this.nc = e,
                    this.prefix = e.prefix || "nc_" + e.index + "_",
                    this.root = e.el;
                    var n = {};
                    if (t.foreign && (n.language = n.language || "en"),
                    this.options = util.mix({}, cfg.default_options, n, e.options || {}, t),
                    this._last_x = -1,
                    this._last_y = -1,
                    this.stroke_size = t.stroke_size || cfg.default_stroke_width,
                    this.svr_data = {},
                    this._t_action = null,
                    this.is_downgraded = !1,
                    this._lang = language[this.options.language] || language.cn,
                    this.options.upLang)
                        for (var i in this.options.upLang)
                            this._lang = replaceLang(i, this.options.upLang[i]);
                    this.scrapeStart = !1,
                    this.showingHow = !1,
                    this.mousedown = !1,
                    this.baseFn = new BaseFn(this.options,util.obj2param),
                    this.reg();
                    var o = URL_MAP[this.options.foreign] || URL_MAP[0];
                    this.ajaxURL = util.mix(o, this.options.apimap);
                    var a = this;
                    window.report = function(e) {
                        a.report.call(a, e)
                    }
                }
                return _createClass(Scrape, [{
                    key: "reg",
                    value: function() {
                        var e = this
                          , t = this.nc;
                        t.reg("_on_loading", function() {
                            return e.loading_render()
                        }),
                        t.reg("loading", function() {
                            return e.loading_initGetSize()
                        }),
                        t.reg("verifying", function() {
                            return e.verifyMethod()
                        }),
                        t.reg("load_error", function() {
                            return e.on_load_error()
                        }),
                        t.reg("pass", function() {
                            return e.on_pass()
                        }),
                        t.reg("fail", function() {
                            return e.on_fail()
                        }),
                        t.reg("reseting", function() {
                            return e.on_reseting()
                        }),
                        t.reg("actiontimeout", function() {
                            return e.on_actiontimeout()
                        }),
                        t.on_leave_loading = function() {
                            return e.on_leave_loading()
                        }
                    }
                }, {
                    key: "report",
                    value: function(e) {
                        var t = this;
                        Report.log({
                            a: t.options.appkey,
                            t: t.options.token,
                            ns: UA_VERSION,
                            jsv: t.nc.inn_vars.v,
                            scene: t.options.scene,
                            jsType: t.nc.inn_vars.js_type,
                            usa: navigator.userAgent,
                            os: util.getOS(),
                            p: e || ""
                        }, t.ajaxURL.api_report)
                    }
                }, {
                    key: "loading_initGetSize",
                    value: function() {
                        var e = this
                          , t = this.options.objects;
                        return Promise.all(util.map(t, function(e) {
                            return new Promise(function(t, n) {
                                util.getImgSize(e, function(e, i) {
                                    e ? n([0, 0]) : t(i)
                                })
                            }
                            )
                        })).then(function(t) {
                            var n = 0
                              , i = 0;
                            util.map(t, function(e) {
                                n = Math.max(n, e[0]),
                                i = Math.max(i, e[1])
                            }),
                            e.obj_w = n,
                            e.obj_h = i
                        })["catch"](function(t) {
                            e.nc.fsm.loaderror()
                        })
                    }
                }, {
                    key: "on_leave_loading",
                    value: function() {
                        this.hideEl("loading")
                    }
                }, {
                    key: "on_reseting",
                    value: function() {
                        var e = this;
                        return Promise.resolve().then(function() {
                            return window.__sc__uab.resetSA && window.__sc__uab.resetSA(),
                            e.loading_render()
                        })
                    }
                }, {
                    key: "getParamOl",
                    value: function() {
                        var e = this.el_nc_canvas
                          , t = util.getElementLeft(e)
                          , n = util.getElementTop(e);
                        return {
                            x: t,
                            y: n
                        }
                    }
                }, {
                    key: "loading_sendInitReq",
                    value: function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            var i = e.options
                              , o = e.getParamOl()
                              , a = window.__sc__uab.getUA && window.__sc__uab.getUA(window.__sc_uaboption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || ""
                              , r = a.length > 3 ? a.slice(0, 3) : "";
                            e.baseFn.jsonp({
                                url: e.ajaxURL.api_prepare,
                                data: {
                                    a: i.appkey,
                                    t: i.token,
                                    scene: i.scene,
                                    jsType: e.nc.inn_vars.js_type,
                                    ol: '{"x":' + o.x + ',"y":' + o.y + "}",
                                    os: util.getOS(),
                                    w: e.size.width,
                                    h: e.size.height,
                                    ow: e.obj_w,
                                    oh: e.obj_h,
                                    v: e.nc.inn_vars.v,
                                    uav: r
                                },
                                callback: "callback",
                                success: function(i) {
                                    if (!i.success)
                                        return void n("data fail");
                                    if (!i.result || !i.result.result)
                                        return void n("bad data");
                                    try {
                                        e._prepare_result = i.result.result,
                                        e.parsePrepareData(e._prepare_result)
                                    } catch (o) {
                                        return void n("prepare data parse fail!")
                                    }
                                    e.putObjects();
                                    var a = e.getEl("inform");
                                    a.style.display = "block",
                                    a.innerHTML = e._lang._ggk_start,
                                    e.showHow(),
                                    e.scrapeStart = !1,
                                    util.addClass(e.root, "nc-prepared"),
                                    util.removeClass(e.root, "nc-state-load-error");
                                    var r = (e.nc.index > 0 ? e.nc.index : 1,
                                    e.getEl("container"));
                                    if (r && e.options.bg_back_prepared) {
                                        var c = util.getElementsByClassName("nc-bg", r)[0];
                                        c && (c.style.background = "url(" + e.options.bg_back_prepared + ")")
                                    }
                                    t()
                                },
                                fail: function() {
                                    n("net fail")
                                }
                            })
                        }
                        )["catch"](function(t) {
                            e.nc._err = FAIL_PREPARE,
                            e.nc.fsm.loaderror()
                        })
                    }
                }, {
                    key: "parsePrepareData",
                    value: function parsePrepareData(result) {
                        try {
                            result = UA_Opt.decryptJSON(result)
                        } catch (e) {
                            throw e
                        }
                        if (!result.success)
                            throw new Error("decrypt fail2!");
                        result = result.data;
                        var data = result.replace(/&quot;/g, '"');
                        eval("data = " + data),
                        this.stroke_size = data.brushWidth,
                        this.svr_data = data,
                        this.session_id = data.sessionId
                    }
                }, {
                    key: "getEl",
                    value: function(e) {
                        return getElementById(this.prefix + e)
                    }
                }, {
                    key: "putObjects",
                    value: function() {
                        var e = this
                          , t = this.svr_data
                          , n = t.objectPoints
                          , i = n.points;
                        if (this._points = i,
                        !i || !Array.isArray(i) || i.length !== n.objectPointsCount)
                            throw new Error("Bad data: objectPoints.length is not equal to objectCounts!");
                        var o = this.getEl("bg");
                        o.innerHTML = util.map(i, function(t, n) {
                            var i = t.x
                              , o = t.y
                              , a = i - e.obj_w / 2
                              , r = o - e.obj_h / 2
                              , c = e.options.elements
                              , s = c[n % c.length];
                            return '<img src="' + s + '" class="nc-scrape-icon" style="left:' + a + "px;top:" + r + 'px;">'
                        }).join("\n")
                    }
                }, {
                    key: "getSize",
                    value: function() {
                        var e = {
                            width: this.options.width,
                            height: this.options.height
                        }
                          , t = this.options.hasOwnProperty("width")
                          , n = this.options.hasOwnProperty("height")
                          , i = this.getEl("nc-canvas");
                        return this.el_nc_canvas = i,
                        t || (e.width = i.offsetWidth),
                        e.width < cfg.min_width && (e.width = cfg.min_width),
                        styleEl(i, "width", e.width + "px"),
                        n || (e.height = i.offsetHeight),
                        e.height < cfg.min_height && (e.height = cfg.min_height),
                        styleEl(i, "height", e.height + "px"),
                        e
                    }
                }, {
                    key: "render_bg",
                    value: function() {
                        this.el_bg = this.getEl("bg"),
                        styleEl(this.el_bg, "width", this.size.width + "px"),
                        styleEl(this.el_bg, "height", this.size.height + "px")
                    }
                }, {
                    key: "mkGridId",
                    value: function(e, t) {
                        return [this.prefix, "grid", e, t].join("-")
                    }
                }, {
                    key: "render_surface_dg",
                    value: function() {
                        var e = this
                          , t = this.getEl("canvas-dg")
                          , n = this.size.width
                          , i = this.size.height;
                        t.style.width = n + "px",
                        t.style.height = i + "px",
                        t.style.display = "block";
                        for (var o = cfg.grid_size, a = Math.ceil(n / o), r = Math.ceil(i / o), c = [], s = this.options.bg_back, l = 0; l < r; l++)
                            for (var d = 0; d < a; d++) {
                                var u = o * l
                                  , p = o * d
                                  , _ = {
                                    width: o + "px",
                                    height: o + "px",
                                    top: u + "px",
                                    left: p + "px",
                                    "background-image": "url(" + s + ")",
                                    "background-position": "-" + p + "px -" + u + "px"
                                }
                                  , f = this.mkGridId(d, l)
                                  , g = '<div id="' + f + '" class="nc-canvas-dg-grid" style="' + util.obj2style(_) + '"></div>';
                                c.push(g)
                            }
                        t.innerHTML = c.join("");
                        var h = this.getEl("inform");
                        util.on(h, "touchstart", function(t) {
                            return e.eventDown(t)
                        }),
                        util.on(h, "mousedown", function(t) {
                            return e.eventDown(t)
                        }),
                        util.on(t, "touchstart", function(t) {
                            return e.eventDown(t)
                        }),
                        util.on(document, "touchend", function(t) {
                            return e.eventUp(t)
                        }),
                        util.on(t, "touchmove", function(t) {
                            return e.eventMove(t)
                        }),
                        util.on(t, "mousedown", function(t) {
                            return e.eventDown(t)
                        }),
                        util.on(document, "mouseup", function(t) {
                            return e.eventUp(t)
                        }),
                        util.on(t, "mousemove", function(t) {
                            return e.eventMove(t)
                        })
                    }
                }, {
                    key: "render_surface",
                    value: function() {
                        var e = this;
                        this.hideEl("canvas-dg");
                        var t = this.el_canvas
                          , n = this.ctx
                          , i = this.size;
                        t.width = i.width,
                        t.height = i.height;
                        var o = this.getEl("cover");
                        o.style.width = i.width + "px",
                        o.style.height = i.height + "px";
                        var a = this.getEl("inform");
                        n.fillStyle = "#ffffff",
                        n.fillRect(0, 0, i.width, i.height);
                        for (var r = this.nc.index > 0 ? this.nc.index : 1, c = 0; c < util.getElementsByClassName("nc_bg").length; c++) {
                            var s = util.getElementsByClassName("nc_bg")[c];
                            s && this.options.bg_back && c === r - 1 && (s.style.background = "url(" + this.options.bg_back + ")")
                        }
                        var l = new Image;
                        l.src = this.options.bg_front,
                        l.onload = function() {
                            n.globalCompositeOperation = "source-over";
                            for (var e = l.naturalWidth ? [l.naturalWidth, l.naturalHeight] : [l.width, l.height], t = _slicedToArray(e, 2), o = t[0], a = t[1], r = Math.ceil(i.width / o), c = Math.ceil(i.height / a), s = 0; s < c; s++)
                                for (var d = 0; d < r; d++)
                                    n.drawImage(l, d * o, s * a);
                            n.globalCompositeOperation = "destination-out"
                        }
                        ,
                        l.onerror = function() {
                            n.globalCompositeOperation = "destination-out"
                        }
                        ,
                        util.on(a, "touchstart", function(t) {
                            return e.eventDown(t)
                        }),
                        util.on(a, "mousedown", function(t) {
                            return e.eventDown(t)
                        }),
                        util.on(t, "touchstart", function(t) {
                            return e.eventDown(t)
                        }),
                        util.on(document, "touchend", function(t) {
                            return e.eventUp(t)
                        }),
                        util.on(t, "touchmove", function(t) {
                            return e.eventMove(t)
                        }),
                        util.on(t, "mousedown", function(t) {
                            return e.eventDown(t)
                        }),
                        util.on(document, "mouseup", function(t) {
                            return e.eventUp(t)
                        }),
                        util.on(t, "mousemove", function(t) {
                            return e.eventMove(t)
                        })
                    }
                }, {
                    key: "getPos",
                    value: function(e) {
                        var t = (doc.documentElement.scrollLeft || doc.body.scrollLeft,
                        doc.documentElement.scrollTop || doc.body.scrollTop,
                        this.options.renderTo)
                          , n = getElementById(0 === t.indexOf("#") ? t.slice(1) : t)
                          , i = 0
                          , o = 0;
                        "absolute" == n.style.position && (i = n.offsetLeft,
                        o = n.offsetTop);
                        var a = this.getEl("nc-canvas")
                          , r = e.clientX - a.getBoundingClientRect().left
                          , c = e.clientY - a.getBoundingClientRect().top;
                        return [r, c]
                    }
                }, {
                    key: "_clearTo_dg",
                    value: function(e, t) {
                        var n = Math.floor(e / cfg.grid_size)
                          , i = Math.floor(t / cfg.grid_size)
                          , o = this.mkGridId(n, i)
                          , a = document.getElementById(o);
                        util.addClass(a, "nc-clean");
                        var r = this._grid_x_count * i + n;
                        this.matrix[r] = 0
                    }
                }, {
                    key: "_clearTo",
                    value: function(e, t) {
                        if (this.is_downgraded)
                            return this._clearTo_dg(e, t);
                        var n = this.ctx;
                        n.fillStyle = "#fff",
                        n.beginPath(),
                        n.arc(e, t, this.stroke_size / 2, 0, 2 * Math.PI),
                        n.fill(),
                        this._last_x >= 0 && this._last_y >= 0 && (n.beginPath(),
                        n.lineWidth = this.stroke_size,
                        n.moveTo(this._last_x, this._last_y),
                        n.lineTo(e, t),
                        n.stroke()),
                        this._last_x = e,
                        this._last_y = t
                    }
                }, {
                    key: "_calcRegion",
                    value: function(e, t, n, i) {
                        for (var o = this.ctx.getImageData(e, t, n, i).data, a = 0, r = 0; r < o.length; r += 4)
                            o[r] && o[r + 1] && o[r + 2] && o[r + 3] && a++;
                        return 1 - a / n / i
                    }
                }, {
                    key: "_calcRegion_dg",
                    value: function(e, t, n, i) {
                        for (var o = cfg.grid_size, a = Math.floor(e / o), r = Math.floor(t / o), c = Math.floor(n / o), s = Math.floor(i / o), l = 0, d = r; d < r + s; d++)
                            for (var u = a; u < a + c; u++) {
                                var p = this._grid_x_count * d + u;
                                l += this.matrix[p]
                            }
                        return 1 - l / c / s
                    }
                }, {
                    key: "calc_dg",
                    value: function() {
                        var e = this
                          , t = void 0
                          , n = void 0
                          , i = this.matrix.reduce(function(e, t) {
                            return e + t
                        }, 0);
                        t = 1 - i / this._grid_sum;
                        var o = this.is_downgraded ? .7 : .9
                          , a = this.obj_w / 2 * o
                          , r = this.obj_h / 2 * o;
                        return n = util.map(this._points, function(t) {
                            var n = t.x
                              , i = t.y;
                            return e._calcRegion_dg(n - a, i - r, e.obj_w, e.obj_h)
                        }),
                        {
                            r_all: t,
                            r_objects: n
                        }
                    }
                }, {
                    key: "calc",
                    value: function() {
                        var e = this;
                        if (this.is_downgraded)
                            return this.calc_dg();
                        var t = this.size
                          , n = t.width
                          , i = t.height
                          , o = this._calcRegion(0, 0, n, i)
                          , a = this.obj_w / 2
                          , r = this.obj_h / 2
                          , c = util.map(this._points, function(t) {
                            var n = t.x
                              , i = t.y;
                            return e._calcRegion(n - a, i - r, e.obj_w, e.obj_h)
                        });
                        return {
                            r_all: o,
                            r_objects: c
                        }
                    }
                }, {
                    key: "checkEnd",
                    value: function(e, t) {
                        var n = 0 === t.filter(function(e) {
                            return e < .5
                        }).length;
                        if ((e > .9 || n) && window.__sc__uab.isReadyForSC(window.__sc_uaboption.mIDs))
                            this.verify();
                        else if (e > .9 && n) {
                            try {} catch (i) {}
                            win._n_bak = win._n;
                            var o = [win._n_bak, this.baseFn.obj2str(this._prepare_result)];
                            this.nc._err = "3A",
                            this._fail_msg = this._updateSurveyUrl(this._lang._ggk_too_fast, o),
                            this.verify_fail()
                        }
                    }
                }, {
                    key: "verify",
                    value: function() {
                        var e = this.nc.fsm;
                        e.can("verify") && this.nc.fsm.verify()
                    }
                }, {
                    key: "verifyMethod",
                    value: function verifyMethod() {
                        var _this10 = this
                          , options = this.options;
                        return clearTimeout(this._t_action),
                        new Promise(function(resolve, reject) {
                            try {} catch (e) {
                                reject(e.message)
                            }
                            var trans = options.trans || {};
                            "string" == typeof trans && (trans = eval("0," + trans));
                            for (var arr = options.elementID || [], i = 0; i < arr.length; i++) {
                                var id = arr[i]
                                  , el = doc.getElementById(id);
                                el && (trans[id] = el.value)
                            }
                            win._n_bak = win._n,
                            _this10.baseFn.jsonp({
                                url: _this10.ajaxURL.api_analyze,
                                callback: "callback",
                                data: {
                                    a: options.appkey,
                                    t: options.token,
                                    s: _this10.session_id,
                                    n: window.__sc__uab.getUA && window.__sc__uab.getUA(window.__sc_uaboption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                    p: _this10.baseFn.obj2str(trans),
                                    scene: options.scene,
                                    jsType: _this10.nc.inn_vars.js_type,
                                    lang: options.language,
                                    v: _this10.nc.inn_vars.v
                                },
                                success: function(e) {
                                    if (e.success && e.result && e.result.success) {
                                        var t = e.result.result;
                                        if (0 === t.code)
                                            return _this10.verify_ok(t),
                                            void resolve();
                                        _this10.nc._err = _this10.nc._err || "4A"
                                    }
                                    reject(e.msg)
                                },
                                fail: function(e) {
                                    _this10.nc._err = _this10.nc._err || FAIL_ANALYZE;
                                    var t = _this10._lang._ggk_net_err;
                                    t = _this10._updateSurveyUrl(t),
                                    _this10._fail_msg = t,
                                    reject("net fail!")
                                }
                            })
                        }
                        ).then(function() {
                            UA_Opt.reload(),
                            window.__sc__uab.resetSA()
                        })["catch"](function(e) {
                            UA_Opt.reload(),
                            window.__sc__uab.resetSA(),
                            _this10.nc._err = _this10.nc._err || "4A",
                            _this10.verify_fail()
                        })
                    }
                }, {
                    key: "verify_ok",
                    value: function(e) {
                        this.verify_result = e,
                        this.nc.fsm.verifypass()
                    }
                }, {
                    key: "verify_fail",
                    value: function(e) {
                        this.nc.fsm.verifyfail()
                    }
                }, {
                    key: "_upResetIndex",
                    value: function(e) {
                        return upResetIndex(e, this.nc.index)
                    }
                }, {
                    key: "_mkErrInfo",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                          , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                          , i = this.options
                          , o = e
                          , a = [i.appkey, i.token, i.scene]
                          , r = "";
                        switch (e) {
                        case FAIL_PREPARE:
                            !n && this.nc._log(FAIL_PREPARE, "prepare timeout", "{code: 401}"),
                            o = "2A",
                            r = "401";
                            break;
                        case FAIL_ANALYZE:
                            !n && this.nc._log(FAIL_ANALYZE, "analyze timeout", "{code: 404}"),
                            o = "2D",
                            r = "404";
                            break;
                        case "TIMEOUT_uab":
                            !n && this.nc._log("TIMEOUT_uab", "uab.js timeout", "{code: 403}"),
                            o = "2C",
                            r = "403";
                            break;
                        case "TIMEOUT_um":
                            !n && this.nc._log("TIMEOUT_um", "um.js timeout", "{code: 402}"),
                            o = "2B",
                            r = "402"
                        }
                        switch (o) {
                        case "3A":
                            a = a.concat(t),
                            !n && this.nc._log("ERR_SLIDE_TOO_FAST", "too few mp", "{code: 201, str:" + a + "}"),
                            r = "201";
                            break;
                        case "4A":
                            t = [this.session_id, win._n_bak],
                            a = a.concat(t),
                            !n && this.nc._log(ERR_CODE_API_FAIL + "_analyze", "blocked", "{code: 101, str:" + a + "}"),
                            r = "101";
                            break;
                        case "5A":
                            t = [this.session_id, win._n_bak],
                            a = a.concat(t),
                            !n && this.nc._log(ERR_CODE_API_FAIL + "_analyze", "blocked", "{code: 301, str:" + a + "}"),
                            r = "301"
                        }
                        return i.failCallback && i.failCallback("{code: " + r + ", str:" + a + "}"),
                        {
                            type: o,
                            str: a.map(function(e) {
                                return encodeURIComponent(e)
                            }).join(":-o")
                        }
                    }
                }, {
                    key: "_updateSurveyUrl",
                    value: function(e, t, n) {
                        e = e.replace(/%TOKEN\b/, this.options.token);
                        var i = this._mkErrInfo(this.nc._err, t, n);
                        return e = e.replace(/%TYPE\b/, i.type),
                        e = e.replace(/%STR\b/, i.str),
                        e = this._upResetIndex(e)
                    }
                }, {
                    key: "on_load_error",
                    value: function(e) {
                        var t = this;
                        return new Promise(function(e, n) {
                            util.addClass(t.root, "nc-state-load-error"),
                            util.removeClass(t.root, "nc-prepared");
                            var i = function o() {
                                var n = t.getEl("load-error")
                                  , i = void 0
                                  , a = t.getEl("cover");
                                if (!t.size || !a)
                                    return void setTimeout(o, 10);
                                t.showEl("load-error"),
                                i = t.size ? t.size.height : a.offsetHeight,
                                n.style.marginTop = (i - 80) / 2 + "px";
                                var r = t._lang._ggk_net_err;
                                r = t._updateSurveyUrl(r),
                                t.getEl("load-error-msg").innerHTML = r,
                                t.tryToUpdateErrIcon(),
                                e()
                            };
                            i()
                        }
                        )
                    }
                }, {
                    key: "on_pass",
                    value: function() {
                        var e = this;
                        return clearTimeout(this._t_action),
                        Promise.resolve().then(function() {
                            if (e.options.is_tbLogin) {
                                e.hideEl("canvas-dg");
                                var t = e.getEl("nc-canvas");
                                t.innerHTML = '<div class="nc-tblogin-verify-success"><span><i class="ncpc_iconfont icon_ok">&#xe626;</i>\u9a8c\u8bc1\u5b8c\u6210</span></div>',
                                t.style.width = "300px",
                                t.style.height = "31px",
                                t.style.backgroundColor = "#D8FADF";
                                var n = e.options.callback;
                                "function" == typeof n && n(e.verify_result)
                            } else {
                                e.hideEl("canvas-dg");
                                var i = e.getEl("ok");
                                i.style.marginTop = (e.size.height - 80) / 2 + "px",
                                e.getEl("ok-msg").innerHTML = e._lang._ggk_success;
                                var o = e.options.callback;
                                "function" == typeof o && o(e.verify_result)
                            }
                        })
                    }
                }, {
                    key: "getErrIcon",
                    value: function(e) {
                        return this.options.obj_error
                    }
                }, {
                    key: "tryToUpdateErrIcon",
                    value: function() {
                        var e = this.getEl("fail-icon")
                          , t = this.getEl("load-error-icon");
                        if (t.src = e.src = this.options.obj_fail,
                        this.nc._err) {
                            var n = this.getErrIcon(this.nc._err);
                            n && (t.src = e.src = n)
                        }
                        this.nc._err = ""
                    }
                }, {
                    key: "on_fail",
                    value: function() {
                        var e = this;
                        return clearTimeout(this._t_action),
                        Promise.resolve().then(function() {
                            e.is_downgraded && e.hideEl("canvas-dg");
                            var t = e.getEl("fail");
                            t.style.marginTop = (e.size.height - 80) / 2 + "px";
                            var n = e._fail_msg || e._lang._ggk_fail;
                            n = e._updateSurveyUrl(n, "", !0),
                            e.getEl("fail-msg").innerHTML = n,
                            e._fail_msg = "",
                            e.tryToUpdateErrIcon();
                            var i = e.options.error;
                            "function" == typeof i && i()
                        })
                    }
                }, {
                    key: "actionTimeout",
                    value: function() {
                        this.nc.fsm.timeout()
                    }
                }, {
                    key: "on_actiontimeout",
                    value: function() {
                        var e = this;
                        return Promise.resolve().then(function() {
                            var t = e.getEl("fail");
                            t.style.marginTop = (e.size.height - 80) / 2 + "px",
                            e.hideEl("canvas-dg"),
                            e.nc._err = "5A";
                            var n = e._lang._ggk_action_timeout;
                            n = e._updateSurveyUrl(n),
                            e.getEl("fail-msg").innerHTML = n;
                            var i = e.options.error;
                            "function" == typeof i && i()
                        })
                    }
                }, {
                    key: "eventDown",
                    value: function(e) {
                        try {
                            e.preventDefault()
                        } catch (t) {}
                        if ("ready" == this.nc.fsm.current) {
                            this.scrapeStart || (this._last_x = -1,
                            this._last_y = -1,
                            this.render_surface()),
                            this.showingHow = !1,
                            this.scrapeStart = !0,
                            this.mousedown = !0,
                            this.getEl("inform").style.display = "none",
                            this.offsetX = this.el_nc_canvas.offsetLeft,
                            this.offsetY = this.el_nc_canvas.offsetTop;
                            var n = this.getPos(e)
                              , i = _slicedToArray(n, 2)
                              , o = i[0]
                              , a = i[1];
                            this._clearTo(o, a),
                            this._old_onselectstart = doc.body.onselectstart,
                            this._old_ondrag = doc.body.ondrag,
                            this.is_downgraded && (doc.body.onselectstart = doc.body.ondrag = function() {
                                return !1
                            }
                            )
                        }
                    }
                }, {
                    key: "eventMove",
                    value: function(e) {
                        var t = this;
                        try {
                            e.preventDefault()
                        } catch (n) {}
                        if (this.mousedown) {
                            clearTimeout(this._t_action),
                            "ready" === this.nc.fsm.current && (this._t_action = setTimeout(function() {
                                t.actionTimeout()
                            }, cfg.action_timeout)),
                            e.changedTouches && (e = e.changedTouches[e.changedTouches.length - 1]);
                            var i = this.getPos(e)
                              , o = _slicedToArray(i, 2)
                              , a = o[0]
                              , r = o[1];
                            this._clearTo(a, r);
                            var c = this.calc()
                              , s = c.r_all
                              , l = c.r_objects;
                            this.checkEnd(s, l)
                        }
                    }
                }, {
                    key: "eventUp",
                    value: function() {
                        this.mousedown = !1,
                        this._last_x = -1,
                        this._last_y = -1,
                        this.is_downgraded && (doc.body.onselectstart = this._old_onselectstart,
                        doc.body.ondrag = this._old_ondrag),
                        this._old_onselectstart = null,
                        this._old_ondrag = null
                    }
                }, {
                    key: "mkMatrix",
                    value: function() {
                        var e = this.size
                          , t = e.width
                          , n = e.height
                          , i = cfg.grid_size
                          , o = Math.ceil(t / i)
                          , a = Math.ceil(n / i)
                          , r = o * a;
                        this._grid_x_count = o,
                        this.matrix = util.fill(new Array(r), 1),
                        this._grid_sum = r
                    }
                }, {
                    key: "downgrade",
                    value: function() {
                        this.is_downgraded = !0,
                        this.mkMatrix()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var e = this
                          , t = this.getEl("btn-refresh")
                          , n = this.getEl("btn-info");
                        util.on(t, "touchend", function(t) {
                            try {
                                t.preventDefault()
                            } catch (t) {}
                            e.nc.reset()
                        }),
                        util.on(t, "mouseup", function(t) {
                            if (e.scrapeStart) {
                                try {
                                    t.preventDefault()
                                } catch (t) {}
                                e.nc.reset()
                            }
                        }),
                        util.on(n, "touchend", function(t) {
                            try {
                                t.preventDefault()
                            } catch (t) {}
                            e.showHow()
                        }),
                        util.on(n, "mouseup", function(t) {
                            try {
                                t.preventDefault()
                            } catch (t) {}
                            e.showHow()
                        })
                    }
                }, {
                    key: "showHow",
                    value: function() {
                        if (!this.showingHow && !this.scrapeStart) {
                            var e = this.getEl("show-how")
                              , t = [[20, 6], [19, 7], [18, 10], [17, 13], [15, 15], [13, 18], [11, 24], [8, 27], [6, 32], [5, 36], [3, 41], [2, 44], [1, 47], [1, 49], [0, 55], [0, 58], [0, 64], [0, 67], [0, 68], [0, 68], [1, 68], [3, 68], [5, 68], [6, 68], [8, 67], [10, 65], [12, 63], [14, 61], [16, 59], [18, 56], [22, 53], [26, 48], [31, 43], [36, 37], [41, 31], [45, 27], [49, 24], [58, 17], [61, 14], [64, 12], [67, 9], [69, 8], [70, 7], [72, 6], [73, 6], [72, 7], [71, 9], [70, 11], [67, 15], [66, 20], [63, 26], [62, 30], [61, 35], [60, 40], [59, 43], [58, 45], [58, 49], [57, 51], [57, 52], [57, 54], [57, 55], [57, 56], [57, 57], [58, 57], [62, 57], [65, 55], [78, 47], [84, 43], [89, 38], [96, 33], [101, 28], [105, 25], [108, 22], [112, 19], [115, 17], [118, 15], [120, 13], [122, 12], [125, 10], [128, 9], [129, 8], [131, 7], [132, 7], [133, 7], [133, 10], [133, 15], [132, 24], [131, 29], [129, 35], [128, 39], [128, 42], [127, 45], [127, 48], [127, 49], [127, 51], [127, 52], [127, 52], [128, 52], [131, 50], [135, 46], [141, 42], [149, 37], [156, 32], [162, 26], [167, 22], [172, 19], [175, 16], [177, 14], [180, 12], [183, 11], [185, 9], [189, 8], [191, 6], [193, 4], [199, 1], [201, 0], [203, 0], [204, 0], [204, 2], [204, 5], [204, 11], [204, 15], [201, 21], [200, 26], [200, 32], [199, 36], [199, 40], [199, 44], [199, 46], [199, 47], [199, 48], [200, 48], [201, 48], [204, 47], [206, 46], [209, 44], [211, 43], [215, 39], [218, 36], [222, 33], [226, 30], [228, 28], [231, 24], [234, 21], [237, 19], [239, 17], [241, 16], [242, 15], [243, 14], [244, 12], [245, 11], [246, 10], [247, 9]]
                              , n = 2
                              , i = 0
                              , o = 0
                              , a = t.length;
                            e.style.display = "block",
                            e.style.left = "0px";
                            var r = this
                              , c = function s() {
                                return r.scrapeStart ? void (e.style.display = "none") : (r.showingHow = !0,
                                void (i < a ? (e.style.left = t[i][0] + "px",
                                e.style.top = t[i][1] + 5 + "px",
                                0 == i && r.render_surface(),
                                r._clearTo(t[i][0] + 20, t[i][1] + 5),
                                i++,
                                setTimeout(s, 10)) : (o++,
                                o < n ? (r._last_x = -1,
                                r._last_y = -1,
                                i = 0,
                                setTimeout(s, 500)) : (r._last_x = -1,
                                r._last_y = -1,
                                e.style.display = "none",
                                r.render_surface(),
                                r.showingHow = !1))))
                            };
                            c()
                        }
                    }
                }, {
                    key: "showEl",
                    value: function(e) {
                        var t = this.getEl(e);
                        t && (t.style.display = "block")
                    }
                }, {
                    key: "hideEl",
                    value: function(e) {
                        var t = this.getEl(e);
                        t && (t.style.display = "none")
                    }
                }, {
                    key: "loading_render",
                    value: function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            try {
                                var i = e.nc;
                                if (e.root.innerHTML = kvTpl.render(html, {
                                    nc: i,
                                    prefix: e.prefix,
                                    inform: "",
                                    loading: e._lang._ggk_loading,
                                    obj_ok: e.options.obj_ok,
                                    obj_error: e.options.obj_error
                                }),
                                e.showEl("loading"),
                                e.hideEl("load-error"),
                                e.getEl("title").innerHTML = e._lang._ggk_guide,
                                e.bindEvents(),
                                e.size = e.getSize(),
                                e.getEl("container").style.width = e.size.width + "px",
                                e.render_bg(),
                                e.el_canvas = e.getEl("canvas"),
                                !e.el_canvas.getContext || !(e.ctx = e.el_canvas.getContext("2d")))
                                    return e.downgrade(),
                                    e.render_surface_dg(),
                                    void t();
                                e.render_surface(),
                                t()
                            } catch (o) {
                                n(o)
                            }
                        }
                        )
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                            return 0
                        }
                          , t = this.loading_sendInitReq();
                        t.then(e)["catch"](e)
                    }
                }]),
                Scrape
            }();
            module.exports = Scrape
        }
        , function(e, t, n) {
            "use strict";
            var i = n(122);
            t.create = function(e, t) {
                return new i(e,t)
            }
        }
        , function(e, t, n) {
            "use strict";
            t.html = '<div id="{{prefix}}container" class="nc-container nc-scrape"><div id="{{prefix}}for-tmp" class="nc-for-tmp"></div><div id="{{prefix}}toolbar" class="nc-toolbar"><span id="{{prefix}}title" class="nc-title">{{title}}</span> <span class="nc-btns"><i id="{{prefix}}btn-refresh" class="nc_iconfont icon_refresh">&#xe607;</i> <i id="{{prefix}}btn-info" class="nc_iconfont icon_info">&#xe602;</i></span></div><div id="{{prefix}}nc-canvas" class="nc-canvas"><div id="{{prefix}}bg" class="nc-bg"></div><div id="{{prefix}}cover" class="nc-cover"><canvas id="{{prefix}}canvas" class="nc-canvas-node"></canvas><div id="{{prefix}}canvas-dg" class="nc-canvas-dg" unselectable="on" style="-moz-user-select:none;-webkit-user-select:none" onselectstart="return false"></div><div id="{{prefix}}ok" class="nc-verify-ok"><img src="{{obj_ok}}" alt=""><div><i class="ncpc_iconfont icon_success">&#xe686;</i><span id="{{prefix}}ok-msg"></span></div></div><div id="{{prefix}}fail" class="nc-verify-fail"><img id="{{prefix}}fail-icon" src="{{obj_error}}" alt=""><div><i class="ncpc_iconfont icon_error">&#xe604;</i><span id="{{prefix}}fail-msg"></span></div></div><div id="{{prefix}}loading" class="nc-loading"><div id="nc-loading-circle" class="nc-loading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div><span>{{loading}}</span></div><div id="{{prefix}}inform" class="nc-inform">{{inform}}</div><div id="{{prefix}}load-error" class="nc-load-error"><img id="{{prefix}}load-error-icon" src="{{obj_error}}" alt=""><div><i class="ncpc_iconfont icon_error">&#xe604;</i><span id="{{prefix}}load-error-msg">Load Error!</span></div></div></div><div id="{{prefix}}show-how" class="nc-show-how"></div></div></div>'
        }
        , function(e, t, n) {
            "use strict";
            e.exports = n(22)
        }
        , function(e, t, n) {
            "use strict";
            e.exports = n(9)
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t, n) {
                function i(e) {
                    a || (a = !0,
                    e || o(),
                    t(e))
                }
                var a = void 0
                  , r = d[e.foreign] || d[0];
                r = l.mix(r, e.apimap),
                UA_Opt.LogVal = "_n",
                u.init(e),
                UA_Opt.sendMethod = 8,
                UA_Opt.Token = (new Date).getTime() + ":" + e.token,
                l.loadScript(l.addHourStamp(r.uab_Url), function(e) {
                    if (AWSC) {
                        var t = function() {
                            if (window.__sc__uab) {
                                if (clearInterval(n),
                                "timeout" === window.__sc__uab)
                                    return void i(p);
                                i(e)
                            }
                        };
                        AWSC.use("uab", function(e, t) {
                            "loaded" === e ? window.__sc__uab = t : "timeout" === e && (window.__sc__uab = "timeout")
                        });
                        var n = setInterval(t, 100);
                        t()
                    } else
                        i(p)
                }, n, e.retryTimes),
                setTimeout(function() {
                    i(p)
                }, n)
            }
            function o() {}
            function a(e, t, n) {
                function i(e) {
                    o || (o = !0,
                    e || r(),
                    t(e))
                }
                var o = void 0;
                if ("undefined" != typeof umx)
                    return void i();
                var a = d[e.foreign] || d[0];
                a = l.mix(a, e.apimap),
                l.loadScript(a.umid_Url, function(t) {
                    if (t === p)
                        return void i(t);
                    var n = s.getElementById("_umfp")
                      , o = (new Date).getTime();
                    try {
                        umx.init({
                            timeout: e.timeout,
                            timestamp: o,
                            token: e.token,
                            serviceUrl: a.umid_serUrl,
                            appName: e.appkey,
                            enableFlash: !1,
                            containers: {
                                flash: n,
                                dcp: n
                            },
                            closeImage: !1
                        }),
                        i()
                    } catch (r) {
                        i(r)
                    }
                }, n, e.retryTimes),
                setTimeout(function() {
                    i(p)
                }, n)
            }
            function r() {
                function e() {
                    (n || umx.getStatus()) && c.__acjs ? clearInterval(i) : t++ > 100 && clearInterval(i)
                }
                if (!_) {
                    _ = !0;
                    var t = 0
                      , n = void 0;
                    setTimeout(function() {
                        n = !0
                    }, 3e3);
                    var i = setInterval(e, 100);
                    e()
                }
            }
            var c = window
              , s = document
              , l = n(5)
              , d = n(68).URL_MAP
              , u = n(105)
              , p = (n(3),
            "timeout")
              , _ = void 0;
            t.load = function(e, t) {
                var n = void 0
                  , o = void 0
                  , r = void 0
                  , c = e.options
                  , s = c.timeout || 1e4;
                i(c, function(i) {
                    n = 1;
                    var a = i == p;
                    !r && o && (a && (e._err = "TIMEOUT_uab"),
                    t(a),
                    r = 1)
                }, s),
                a(c, function(i) {
                    o = 1;
                    var a = i == p;
                    !r && n && (a && (e._err = "TIMEOUT_um"),
                    t(a),
                    r = 1)
                }, s)
            }
        }
        , function(e, t, n) {
            "use strict";
            n(129);
            var i = n(123);
            t.create = function(e) {
                return i.create(e, {})
            }
            ,
            t.render = function(e, t) {
                e.render(t)
            }
        }
        , function(e, t, n) {
            "use strict";
            !function(e, t) {
                var n = e.createElement("style");
                if (e.getElementsByTagName("head")[0].appendChild(n),
                n.styleSheet)
                    n.styleSheet.disabled || (n.styleSheet.cssText = t);
                else
                    try {
                        n.innerHTML = t
                    } catch (i) {
                        n.innerText = t
                    }
            }(document, ".nc-wrapper.nc-ggk{font-size:12px}")
        }
        , , function(e, t, n) {
            t = e.exports = n(8)(),
            t.push([e.i, '.nc-container.nc-scrape {\n  font-size: 12px;\n  line-height: 20px;\n}\n.nc-container.nc-scrape a {\n  text-decoration: none;\n}\n.nc-container.nc-scrape .nc-toolbar {\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns {\n  float: right;\n  height: 30px;\n  overflow: hidden;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i {\n  cursor: pointer;\n  margin-right: 5px;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i.icon_refresh {\n  color: #999;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i.icon_info {\n  color: #e98e0c;\n}\n.nc-container.nc-scrape .nc-canvas {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.nc-container.nc-scrape .nc-canvas .nc-bg {\n  position: absolute;\n  background: #ccc url("https://img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png");\n}\n.nc-container.nc-scrape .nc-canvas .nc-bg img.nc-scrape-icon {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover canvas {\n  position: absolute;\n  background-color: transparent;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg-grid {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg-grid.nc-clean {\n  background: transparent !important;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-inform,\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-loading {\n  font-size: 14px;\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  width: 100%;\n  line-height: 1.3em;\n  text-align: center;\n  margin-top: -0.65em;\n  color: #3c3c3c;\n}\n.nc-container.nc-scrape .nc-canvas .nc-show-how {\n  position: absolute;\n  display: none;\n  background: url("https://img.alicdn.com/tfs/TB153uISVXXXXc2XpXXXXXXXXXX-26-36.png") no-repeat;\n  width: 68px;\n  height: 53px;\n  z-index: 10;\n  top: 20px;\n  margin-left: 20px;\n}\n.nc-container.nc-scrape .nc-canvas .nc-tblogin-verify-success {\n  text-align: center;\n  vertical-align: middle;\n  line-height: 31px;\n}\n.nc-container.nc-scrape .nc-canvas .nc-tblogin-verify-success .icon_ok {\n  margin-right: 10px;\n  color: #78c430;\n  position: relative;\n  top: 1px;\n}\n.nc-container.nc-scrape .nc-verify-ok,\n.nc-container.nc-scrape .nc-verify-fail,\n.nc-container.nc-scrape .nc-load-error {\n  display: none;\n  margin: auto;\n  height: 80px;\n  width: 250px;\n  text-align: center;\n  font-size: 14px;\n  color: #3c3c3c;\n  line-height: 20px;\n}\n.nc-container.nc-scrape .nc-verify-ok img,\n.nc-container.nc-scrape .nc-verify-fail img,\n.nc-container.nc-scrape .nc-load-error img {\n  display: block;\n  vertical-align: middle;\n  float: left;\n  margin-right: 10px;\n}\n.nc-container.nc-scrape .nc-verify-ok>div,\n.nc-container.nc-scrape .nc-verify-fail>div,\n.nc-container.nc-scrape .nc-load-error>div {\n  width: 180px;\n  height: 80px;\n  display: table;\n}\n.nc-container.nc-scrape .nc-verify-ok>div .icon_error,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_error,\n.nc-container.nc-scrape .nc-load-error>div .icon_error,\n.nc-container.nc-scrape .nc-verify-ok>div .icon_success,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_success,\n.nc-container.nc-scrape .nc-load-error>div .icon_success {\n  position: relative;\n  top: 18px;\n  margin-right: 5px;\n  color: #f40;\n}\n.nc-container.nc-scrape .nc-verify-ok>div .icon_success,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_success,\n.nc-container.nc-scrape .nc-load-error>div .icon_success {\n  color: #78c430;\n}\n.nc-container.nc-scrape .nc-verify-ok>div>span,\n.nc-container.nc-scrape .nc-verify-fail>div>span,\n.nc-container.nc-scrape .nc-load-error>div>span {\n  display: table-cell;\n  vertical-align: middle;\n  height: 80px;\n  text-align: left;\n}\n.nc-pass .nc-container.nc-scrape .nc-toolbar .nc-btns {\n  visibility: hidden;\n}\n.nc-pass .nc-container.nc-scrape .nc-bg img {\n  display: none;\n}\n.nc-pass .nc-container.nc-scrape .nc-cover canvas,\n.nc-pass .nc-container.nc-scrape .nc-cover .nc-verify-fail {\n  display: none;\n}\n.nc-pass .nc-container.nc-scrape .nc-verify-ok {\n  display: block;\n}\n.nc-pass .nc-container.nc-scrape .nc-canvas .nc-bg {\n  background: #bbf0c6 url("https://img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png");\n}\n.nc-fail .nc-container.nc-scrape .nc-canvas .nc-bg {\n  background: url("https://img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png");\n}\n.nc-fail .nc-container.nc-scrape .nc-canvas .nc-bg img {\n  display: none;\n}\n.nc-fail .nc-container.nc-scrape .nc-cover canvas,\n.nc-fail .nc-container.nc-scrape .nc-cover .nc-verify-ok,\n.nc-fail .nc-container.nc-scrape .nc-cover .nc-canvas-dg {\n  display: none;\n}\n.nc-fail .nc-container.nc-scrape .nc-verify-fail {\n  display: block;\n}\n.nc-state-load-error .nc-container.nc-scrape .nc-load-error {\n  display: block;\n}\n.nc-state-load-error .nc-container.nc-scrape canvas,\n.nc-state-load-error .nc-container.nc-scrape .nc-inform {\n  display: none;\n}\n.nc-prepared .nc-container.nc-scrape .nc-bg {\n  background: #ccc url("https://img.alicdn.com/tfs/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png");\n}\n.nc-container.nc-scrape #nc-loading-circle {\n  margin: 0 10px;\n}\n.nc-container.nc-scrape #nc-loading-circle .sk-circle:before {\n  background-color: #fff;\n}\n', ""]);
        }
        , , function(e, t, n) {
            var i = n(131);
            "string" == typeof i && (i = [[e.i, i, ""]]),
            n(10)(i, {}),
            i.locals && (e.exports = i.locals)
        }
        , , function(e, t, n) {
            function i(e) {
                return n(o(e))
            }
            function o(e) {
                var t = a[e];
                if (!(t + 1))
                    throw new Error("Cannot find module '" + e + "'.");
                return t
            }
            var a = {
                "./actiontimeout": 50,
                "./actiontimeout.js": 50,
                "./destroyed": 51,
                "./destroyed.js": 51,
                "./error": 52,
                "./error.js": 52,
                "./fail": 53,
                "./fail.js": 53,
                "./initially": 54,
                "./initially.js": 54,
                "./load_error": 55,
                "./load_error.js": 55,
                "./loading": 56,
                "./loading.js": 56,
                "./need_two_step_verify": 57,
                "./need_two_step_verify.js": 57,
                "./pass": 58,
                "./pass.js": 58,
                "./ready": 59,
                "./ready.js": 59,
                "./reseting": 60,
                "./reseting.js": 60,
                "./ts_error": 61,
                "./ts_error.js": 61,
                "./ts_fail": 62,
                "./ts_fail.js": 62,
                "./ts_loading": 63,
                "./ts_loading.js": 63,
                "./ts_pass": 64,
                "./ts_pass.js": 64,
                "./ts_ready": 65,
                "./ts_ready.js": 65,
                "./ts_verifying": 66,
                "./ts_verifying.js": 66,
                "./verifying": 67,
                "./verifying.js": 67
            };
            i.keys = function() {
                return Object.keys(a)
            }
            ,
            i.resolve = o,
            e.exports = i,
            i.id = 135
        }
        ])
    };
    chkQuerySet(),
    cond() > GREY_RATIO ? STABLE_ACTION() : NEW_ACTION()
}();
