function(e, t, n) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(57)
      , o = a(r)
      , i = n(103)
      , l = a(i)
      , s = n(447)
      , u = a(s)
      , c = n(67)
      , d = a(c)
      , f = "undefined" == typeof window
      , p = "pre" === Object({
        NODE_ENV: "production"
    }).CLIENT_ENV ? "https://pre-main.xiami.com" : ""
      , m = u.default.create({
        withCredentials: !0,
        baseURL: f ? "" : p,
        retry: f ? 0 : 2
    });

    l.default = JSON.stringify;

    f = false
    m.interceptors.request.use(function(e) {
        e._url || (e._url = e.url);
        var t = "";
        if (void 0 === e._retryed ? e.params ? (t = (0,
        l.default)(e.params),
        e.params = {
            _q: t
        }) : e.params = {} : e.params._q && (t = e.params._q),
        !f) {
            var n = document.cookie.match(/(?:^|;\s*)xm_sg_tk=([^;]*)/)
              , a = n && n[1];
            if (a) {
                var r = (0,
                d.default)(a.split("_")[0] + "_xmMain_" + e._url + "_" + t);
                e.params._s = r
            }
            var o = "DIl58SLFxFNndSV1GFNnMQVYkx1PP5tKe1siZu/86PR1u/Wh1Ptd+WOZsHHWxysSfAOhNJpdVWsdVJNsfJ8Sxd8WKVvNfAS8aS8fAOzYARzPyPc3JvtnPHjTdKfESTdnuTW6ZPvk2pNDh4uFzotgdMEFkzQ5wZVXl2Pf1/Y6hLK0OnCNxBj3+nb0v72gZ6b0td+WOZsHHWxysSo/0y9D2K42SaB8Y/+aD2K42SaB8Y/+ahU+WOZsHcrxysooUeND";
            window.uabModule ? e.headers["XM-UA"] = window.uabModule.getUA() || o : e.headers["XM-UA"] = o
        }
        console.log(e)
        return e
    }),
    m.interceptors.response.use(function(e) {
        var t = function() {
            var t = e.data.code;
            if ("SUCCESS" !== t) {
                if (!f) {
                    if ("NEED_LOGIN" === t) {
                        var a = n(176)
                          , r = n(9)
                          , o = r.popupLogin;
                        a.dispatch(o(!0))
                    }
                    if ("SG_TOKEN_EMPTY" === t || "SG_TOKEN_EXPIRED" === t || "SG_EMPTY" === t) {
                        var i = e.config;
                        if (i && i.retry && (i._retryed = i._retryed || 0,
                        i._retryed < i.retry))
                            return i._retryed += 1,
                            m(i)
                    }
                }
                throw new Error("SYSTEM_ERROR_" + t)
            }
            if ("SUCCESS" !== e.data.result.status)
                throw new Error(e.data.result.status + "::" + e.data.result.msg);
            return e.data.result.data
        };
        return !f && window.sufei ? new o.default(function(n) {
            sufei.check(e.data, function(a) {
                if (a)
                    n(t());
                else {
                    var r = e.config;
                    r._retryed = (r._retryed || 0) + 1,
                    n(m(r))
                }
            })
        }
        ) : t()
    }),
    t.default = m,
    e.exports = t.default
}

a.prototype.request = function(e) {
    "string" == typeof e && (e = o.merge({
        url: arguments[0]
    }, arguments[1])),
    e = o.merge(r, this.defaults, {
        method: "get"
    }, e),
    e.method = e.method.toLowerCase();
    var t = [l, void 0]
      , n = Promise.resolve(e);
    for (this.interceptors.request.forEach(function(e) {
        t.unshift(e.fulfilled, e.rejected)
    }),
    this.interceptors.response.forEach(function(e) {
        t.push(e.fulfilled, e.rejected)
    }); t.length; )
        n = n.then(t.shift(), t.shift());
    return n
}