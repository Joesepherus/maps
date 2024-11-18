/*Copyright 2010-2024 Simplemaps.com
html5countrymapv4.501 - trial version
Use pursuant to license agreement at https://simplemaps.com/license */

/* shifty - v1.5.3 - http://jeremyckahn.github.io/shifty, embedded within map logic*/

/* Raphaël 2.1.2 (tweaked, always global)- JavaScript Vector Library, Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com), Copyright © 2008-2016 Sencha Labs (http://sencha.com), Licensed under the MIT (http://raphaeljs.com/license.html) license. */
!(function (t) {
  var e, f, p, a, d, g, x, y, m;
  t.eve =
    ((e = "0.4.2"),
    (f = "hasOwnProperty"),
    (p = /[\.\/]/),
    (a = function () {}),
    (d = function (t, e) {
      return t - e;
    }),
    ((m = function (t, e) {
      t = String(t);
      var r,
        i = x,
        n = Array.prototype.slice.call(arguments, 2),
        s = m.listeners(t),
        a = 0,
        o = [],
        l = {},
        h = [],
        u = g;
      g = t;
      for (var c = (x = 0), f = s.length; c < f; c++)
        "zIndex" in s[c] &&
          (o.push(s[c].zIndex), s[c].zIndex < 0 && (l[s[c].zIndex] = s[c]));
      for (o.sort(d); o[a] < 0; )
        if (((r = l[o[a++]]), h.push(r.apply(e, n)), x)) return (x = i), h;
      for (c = 0; c < f; c++)
        if ("zIndex" in (r = s[c]))
          if (r.zIndex == o[a]) {
            if ((h.push(r.apply(e, n)), x)) break;
            do {
              if (((r = l[o[++a]]) && h.push(r.apply(e, n)), x)) break;
            } while (r);
          } else l[r.zIndex] = r;
        else if ((h.push(r.apply(e, n)), x)) break;
      return (x = i), (g = u), h.length ? h : null;
    })._events = y =
      { n: {} }),
    (m.listeners = function (t) {
      for (
        var e,
          r,
          i,
          n,
          s,
          a,
          o = t.split(p),
          l = y,
          h = [l],
          u = [],
          c = 0,
          f = o.length;
        c < f;
        c++
      ) {
        for (a = [], n = 0, s = h.length; n < s; n++)
          for (r = [(l = h[n].n)[o[c]], l["*"]], i = 2; i--; )
            (e = r[i]) && (a.push(e), (u = u.concat(e.f || [])));
        h = a;
      }
      return u;
    }),
    (m.on = function (t, e) {
      if (((t = String(t)), "function" != typeof e)) return function () {};
      for (var r = t.split(p), i = y, n = 0, s = r.length; n < s; n++)
        i =
          ((i = i.n).hasOwnProperty(r[n]) && i[r[n]]) || (i[r[n]] = { n: {} });
      for (i.f = i.f || [], n = 0, s = i.f.length; n < s; n++)
        if (i.f[n] == e) return a;
      return (
        i.f.push(e),
        function (t) {
          +t == +t && (e.zIndex = +t);
        }
      );
    }),
    (m.f = function (t) {
      var e = [].slice.call(arguments, 1);
      return function () {
        m.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
      };
    }),
    (m.stop = function () {
      x = 1;
    }),
    (m.nt = function (t) {
      return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(g) : g;
    }),
    (m.nts = function () {
      return g.split(p);
    }),
    (m.off = m.unbind =
      function (t, e) {
        if (t) {
          for (
            var r, i, n, s = t.split(p), a = [y], o = 0, l = s.length;
            o < l;
            o++
          )
            for (u = 0; u < a.length; u += n.length - 2) {
              if (((n = [u, 1]), (r = a[u].n), "*" != s[o]))
                r[s[o]] && n.push(r[s[o]]);
              else for (i in r) r[f](i) && n.push(r[i]);
              a.splice.apply(a, n);
            }
          for (o = 0, l = a.length; o < l; o++)
            for (r = a[o]; r.n; ) {
              if (e) {
                if (r.f) {
                  for (u = 0, c = r.f.length; u < c; u++)
                    if (r.f[u] == e) {
                      r.f.splice(u, 1);
                      break;
                    }
                  r.f.length || delete r.f;
                }
                for (i in r.n)
                  if (r.n[f](i) && r.n[i].f) {
                    for (var h = r.n[i].f, u = 0, c = h.length; u < c; u++)
                      if (h[u] == e) {
                        h.splice(u, 1);
                        break;
                      }
                    h.length || delete r.n[i].f;
                  }
              } else
                for (i in (delete r.f, r.n))
                  r.n[f](i) && r.n[i].f && delete r.n[i].f;
              r = r.n;
            }
        } else m._events = y = { n: {} };
      }),
    (m.once = function (t, e) {
      var r = function () {
        return m.unbind(t, r), e.apply(this, arguments);
      };
      return m.on(t, r);
    }),
    (m.version = e),
    (m.toString = function () {
      return "You are running Eve " + e;
    }),
    m);
})(this),
  (function (t) {
    !(function (t, N) {
      function j(t) {
        if (j.is(t, "function")) return i ? t() : N.on("raphael.DOMload", t);
        if (j.is(t, v))
          return j._engine.create[x](j, t.splice(0, 3 + j.is(t[0], F))).add(t);
        var e = Array.prototype.slice.call(arguments, 0);
        if (j.is(e[e.length - 1], "function")) {
          var r = e.pop();
          return i
            ? r.call(j._engine.create[x](j, e))
            : N.on("raphael.DOMload", function () {
                r.call(j._engine.create[x](j, e));
              });
        }
        return j._engine.create[x](j, arguments);
      }
      (j.version = "2.1.0"), (j.eve = N);
      function s(t, e) {
        return I(t) - I(e);
      }
      function e(t, e, r, i) {
        return (
          null == i && (i = r),
          [
            ["M", t, e],
            ["m", 0, -i],
            ["a", r, i, 0, 1, 1, 0, 2 * i],
            ["a", r, i, 0, 1, 1, 0, -2 * i],
            ["z"],
          ]
        );
      }
      var i,
        E = /[, ]+/,
        a = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
        n = /\{(\d+)\}/g,
        L = "hasOwnProperty",
        d = { doc: document, win: t },
        r = {
          was: Object.prototype[L].call(d.win, "Raphael"),
          is: d.win.Raphael,
        },
        o = function () {
          this.ca = this.customAttributes = {};
        },
        x = "apply",
        M = "concat",
        g =
          "ontouchstart" in d.win ||
          (d.win.DocumentTouch && d.doc instanceof DocumentTouch),
        w = " ",
        P = String,
        z = "split",
        l =
          "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[
            z
          ](w),
        h = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend",
        },
        y = P.prototype.toLowerCase,
        B = Math,
        _ = B.max,
        k = B.min,
        S = B.abs,
        m = B.pow,
        T = B.PI,
        F = "number",
        u = "string",
        v = "array",
        c = Object.prototype.toString,
        f =
          ((j._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i),
          /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        p = { NaN: 1, Infinity: 1, "-Infinity": 1 },
        R = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        C = B.round,
        I = parseFloat,
        b = parseInt,
        A = P.prototype.toUpperCase,
        q = (j._availableAttrs = {
          "arrow-end": "none",
          "arrow-start": "none",
          blur: 0,
          "clip-rect": "0 0 1e9 1e9",
          cursor: "default",
          cx: 0,
          cy: 0,
          fill: "#fff",
          "fill-opacity": 1,
          font: '10px "Arial"',
          "font-family": '"Arial"',
          "font-size": "10",
          "font-style": "normal",
          "font-weight": 400,
          gradient: 0,
          height: 0,
          href: "http://raphaeljs.com/",
          "letter-spacing": 0,
          opacity: 1,
          path: "M0,0",
          r: 0,
          rx: 0,
          ry: 0,
          src: "",
          stroke: "#000",
          "stroke-dasharray": "",
          "stroke-linecap": "butt",
          "stroke-linejoin": "butt",
          "stroke-miterlimit": 0,
          "stroke-opacity": 1,
          "stroke-width": 1,
          target: "_blank",
          "text-anchor": "middle",
          title: "Raphael",
          transform: "",
          width: 0,
          x: 0,
          y: 0,
        }),
        D = (j._availableAnimAttrs = {
          blur: F,
          "clip-rect": "csv",
          cx: F,
          cy: F,
          fill: "colour",
          "fill-opacity": F,
          "font-size": F,
          height: F,
          opacity: F,
          path: "path",
          r: F,
          rx: F,
          ry: F,
          stroke: "colour",
          "stroke-opacity": F,
          "stroke-width": F,
          transform: "transform",
          width: F,
          x: F,
          y: F,
        }),
        V =
          /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        O = { hs: 1, rg: 1 },
        Y = /,?([achlmqrstvxz]),?/gi,
        G =
          /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        W =
          /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        X =
          /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        H =
          ((j._radial_gradient =
            /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
          {}),
        U = function (t) {
          return t;
        },
        $ = (j._rectPath = function (t, e, r, i, n) {
          return n
            ? [
                ["M", t + n, e],
                ["l", r - 2 * n, 0],
                ["a", n, n, 0, 0, 1, n, n],
                ["l", 0, i - 2 * n],
                ["a", n, n, 0, 0, 1, -n, n],
                ["l", 2 * n - r, 0],
                ["a", n, n, 0, 0, 1, -n, -n],
                ["l", 0, 2 * n - i],
                ["a", n, n, 0, 0, 1, n, -n],
                ["z"],
              ]
            : [["M", t, e], ["l", r, 0], ["l", 0, i], ["l", -r, 0], ["z"]];
        }),
        Z = (j._getPath = {
          path: function (t) {
            return t.attr("path");
          },
          circle: function (t) {
            t = t.attrs;
            return e(t.cx, t.cy, t.r);
          },
          ellipse: function (t) {
            t = t.attrs;
            return e(t.cx, t.cy, t.rx, t.ry);
          },
          rect: function (t) {
            t = t.attrs;
            return $(t.x, t.y, t.width, t.height, t.r);
          },
          image: function (t) {
            t = t.attrs;
            return $(t.x, t.y, t.width, t.height);
          },
          text: function (t) {
            t = t._getBBox();
            return $(t.x, t.y, t.width, t.height);
          },
          set: function (t) {
            t = t._getBBox();
            return $(t.x, t.y, t.width, t.height);
          },
        }),
        Q = (j.mapPath = function (t, e) {
          if (!e) return t;
          for (var r, i, n, s, a, o = 0, l = (t = Ct(t)).length; o < l; o++)
            for (n = 1, s = (a = t[o]).length; n < s; n += 2)
              (r = e.x(a[n], a[n + 1])),
                (i = e.y(a[n], a[n + 1])),
                (a[n] = r),
                (a[n + 1] = i);
          return t;
        });
      if (
        ((j._g = d),
        (j.type =
          d.win.SVGAngle ||
          d.doc.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#BasicStructure",
            "1.1"
          )
            ? "SVG"
            : "VML"),
        "VML" == j.type)
      ) {
        var J,
          K = d.doc.createElement("div");
        if (
          ((K.innerHTML = '<v:shape adj="1"/>'),
          ((J = K.firstChild).style.behavior = "url(#default#VML)"),
          !J || "object" != typeof J.adj)
        )
          return (j.type = "");
        K = null;
      }
      function tt(t) {
        if ("function" == typeof t || Object(t) !== t) return t;
        var e,
          r = new t.constructor();
        for (e in t) t[L](e) && (r[e] = tt(t[e]));
        return r;
      }
      (j.svg = !(j.vml = "VML" == j.type)),
        (j._Paper = o),
        (j.fn = K = o.prototype = j.prototype),
        (j._id = 0),
        (j._oid = 0),
        (j.is = function (t, e) {
          return "finite" == (e = y.call(e))
            ? !p[L](+t)
            : "array" == e
            ? t instanceof Array
            : ("null" == e && null === t) ||
              (e == typeof t && null !== t) ||
              ("object" == e && t === Object(t)) ||
              ("array" == e && Array.isArray && Array.isArray(t)) ||
              c.call(t).slice(8, -1).toLowerCase() == e;
        }),
        (j.angle = function (t, e, r, i, n, s) {
          if (null != n) return j.angle(t, e, n, s) - j.angle(r, i, n, s);
          (r = t - r), (i = e - i);
          return r || i ? (180 + (180 * B.atan2(-i, -r)) / T + 360) % 360 : 0;
        }),
        (j.rad = function (t) {
          return ((t % 360) * T) / 180;
        }),
        (j.deg = function (t) {
          return ((180 * t) / T) % 360;
        }),
        (j.snapTo = function (t, e, r) {
          if (((r = j.is(r, "finite") ? r : 10), j.is(t, v))) {
            for (var i = t.length; i--; ) if (S(t[i] - e) <= r) return t[i];
          } else {
            var n = e % (t = +t);
            if (n < r) return e - n;
            if (t - r < n) return e - n + t;
          }
          return e;
        });
      j.createUUID = (function (t, e) {
        return function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
            .replace(t, e)
            .toUpperCase();
        };
      })(/[xy]/g, function (t) {
        var e = (16 * B.random()) | 0;
        return ("x" == t ? e : (3 & e) | 8).toString(16);
      });
      j.setWindow = function (t) {
        N("raphael.setWindow", j, d.win, t),
          (d.win = t),
          (d.doc = d.win.document),
          j._engine.initWin && j._engine.initWin(d.win);
      };
      function et() {
        return "hsb(" + [this.h, this.s, this.b] + ")";
      }
      function rt() {
        return "hsl(" + [this.h, this.s, this.l] + ")";
      }
      function it() {
        return this.hex;
      }
      function nt(t, e, r) {
        var i;
        return (
          null == e &&
            j.is(t, "object") &&
            "r" in t &&
            "g" in t &&
            "b" in t &&
            ((r = t.b), (e = t.g), (t = t.r)),
          null == e &&
            j.is(t, u) &&
            ((t = (i = j.getRGB(t)).r), (e = i.g), (r = i.b)),
          (1 < t || 1 < e || 1 < r) && ((t /= 255), (e /= 255), (r /= 255)),
          [t, e, r]
        );
      }
      function st(t, e, r, i) {
        return (
          (r = {
            r: (t *= 255),
            g: (e *= 255),
            b: (r *= 255),
            hex: j.rgb(t, e, r),
            toString: it,
          }),
          j.is(i, "finite") && (r.opacity = i),
          r
        );
      }
      var at = function (t) {
        if (j.vml) {
          var r,
            i = /^\s+|\s+$/g;
          try {
            var e = new ActiveXObject("htmlfile");
            e.write("<body>"), e.close(), (r = e.body);
          } catch (t) {
            r = createPopup().document.body;
          }
          var n = r.createTextRange();
          at = ot(function (t) {
            try {
              r.style.color = P(t).replace(i, "");
              var e = n.queryCommandValue("ForeColor");
              return (
                "#" +
                (
                  "000000" +
                  (e =
                    ((255 & e) << 16) |
                    (65280 & e) |
                    ((16711680 & e) >>> 16)).toString(16)
                ).slice(-6)
              );
            } catch (t) {
              return "none";
            }
          });
        } else {
          var s = d.doc.createElement("i");
          (s.title = "Raphaël Colour Picker"),
            (s.style.display = "none"),
            d.doc.body.appendChild(s),
            (at = ot(function (t) {
              return (
                (s.style.color = t),
                d.doc.defaultView
                  .getComputedStyle(s, "")
                  .getPropertyValue("color")
              );
            }));
        }
        return at(t);
      };
      function ot(n, s, a) {
        function o() {
          var t = Array.prototype.slice.call(arguments, 0),
            e = t.join("␀"),
            r = (o.cache = o.cache || {}),
            i = (o.count = o.count || []);
          return (
            r[L](e)
              ? (function (t, e) {
                  for (var r = 0, i = t.length; r < i; r++)
                    if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                })(i, e)
              : (1e3 <= i.length && delete r[i.shift()],
                i.push(e),
                (r[e] = n[x](s, t))),
            a ? a(r[e]) : r[e]
          );
        }
        return o;
      }
      (j.color = function (t) {
        var e;
        return (
          j.is(t, "object") && "h" in t && "s" in t && "b" in t
            ? ((e = j.hsb2rgb(t)),
              (t.r = e.r),
              (t.g = e.g),
              (t.b = e.b),
              (t.hex = e.hex))
            : j.is(t, "object") && "h" in t && "s" in t && "l" in t
            ? ((e = j.hsl2rgb(t)),
              (t.r = e.r),
              (t.g = e.g),
              (t.b = e.b),
              (t.hex = e.hex))
            : (j.is(t, "string") && (t = j.getRGB(t)),
              j.is(t, "object") && "r" in t && "g" in t && "b" in t
                ? ((e = j.rgb2hsl(t)),
                  (t.h = e.h),
                  (t.s = e.s),
                  (t.l = e.l),
                  (e = j.rgb2hsb(t)),
                  (t.v = e.b))
                : ((t = { hex: "none" }).r =
                    t.g =
                    t.b =
                    t.h =
                    t.s =
                    t.v =
                    t.l =
                      -1)),
          (t.toString = it),
          t
        );
      }),
        (j.hsb2rgb = function (t, e, r, i) {
          var n, s, a;
          return (
            this.is(t, "object") &&
              "h" in t &&
              "s" in t &&
              "b" in t &&
              ((r = t.b), (e = t.s), (i = (t = t.h).o)),
            (s =
              (a = r * e) * (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
            (r = e = n = r - a),
            st(
              (r += [a, s, 0, 0, s, a][(t = ~~t)]),
              (e += [s, a, a, s, 0, 0][t]),
              (n += [0, 0, s, a, a, s][t]),
              i
            )
          );
        }),
        (j.hsl2rgb = function (t, e, r, i) {
          var n, s, a;
          return (
            this.is(t, "object") &&
              "h" in t &&
              "s" in t &&
              "l" in t &&
              ((r = t.l), (e = t.s), (t = t.h)),
            (1 < t || 1 < e || 1 < r) && ((t /= 360), (e /= 100), (r /= 100)),
            (s =
              (a = 2 * e * (r < 0.5 ? r : 1 - r)) *
              (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
            (r = e = n = r - a / 2),
            st(
              (r += [a, s, 0, 0, s, a][(t = ~~t)]),
              (e += [s, a, a, s, 0, 0][t]),
              (n += [0, 0, s, a, a, s][t]),
              i
            )
          );
        }),
        (j.rgb2hsb = function (t, e, r) {
          var i, n;
          return (
            (t = (r = nt(t, e, r))[0]),
            (e = r[1]),
            (r = r[2]),
            {
              h:
                ((((0 == (n = (i = _(t, e, r)) - k(t, e, r))
                  ? null
                  : i == t
                  ? (e - r) / n
                  : i == e
                  ? (r - t) / n + 2
                  : (t - e) / n + 4) +
                  360) %
                  6) *
                  60) /
                360,
              s: 0 == n ? 0 : n / i,
              b: i,
              toString: et,
            }
          );
        }),
        (j.rgb2hsl = function (t, e, r) {
          var i, n, s;
          return (
            (t = (r = nt(t, e, r))[0]),
            (e = r[1]),
            (r = r[2]),
            (i = ((n = _(t, e, r)) + (s = k(t, e, r))) / 2),
            {
              h:
                ((((0 == (s = n - s)
                  ? null
                  : n == t
                  ? (e - r) / s
                  : n == e
                  ? (r - t) / s + 2
                  : (t - e) / s + 4) +
                  360) %
                  6) *
                  60) /
                360,
              s: 0 == s ? 0 : i < 0.5 ? s / (2 * i) : s / (2 - 2 * i),
              l: i,
              toString: rt,
            }
          );
        }),
        (j._path2string = function () {
          return this.join(",").replace(Y, "$1");
        });
      j._preload = function (t, e) {
        var r = d.doc.createElement("img");
        (r.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
          (r.onload = function () {
            e.call(this), (this.onload = null), d.doc.body.removeChild(this);
          }),
          (r.onerror = function () {
            d.doc.body.removeChild(this);
          }),
          d.doc.body.appendChild(r),
          (r.src = t);
      };
      function lt() {
        return this.hex;
      }
      function ht(t, e) {
        for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
          var s = [
            { x: +t[i - 2], y: +t[i - 1] },
            { x: +t[i], y: +t[i + 1] },
            { x: +t[i + 2], y: +t[i + 3] },
            { x: +t[i + 4], y: +t[i + 5] },
          ];
          e
            ? i
              ? n - 4 == i
                ? (s[3] = { x: +t[0], y: +t[1] })
                : n - 2 == i &&
                  ((s[2] = { x: +t[0], y: +t[1] }),
                  (s[3] = { x: +t[2], y: +t[3] }))
              : (s[0] = { x: +t[n - 2], y: +t[n - 1] })
            : n - 4 == i
            ? (s[3] = s[2])
            : i || (s[0] = { x: +t[i], y: +t[i + 1] }),
            r.push([
              "C",
              (-s[0].x + 6 * s[1].x + s[2].x) / 6,
              (-s[0].y + 6 * s[1].y + s[2].y) / 6,
              (s[1].x + 6 * s[2].x - s[3].x) / 6,
              (s[1].y + 6 * s[2].y - s[3].y) / 6,
              s[2].x,
              s[2].y,
            ]);
        }
        return r;
      }
      (j.getRGB = ot(function (t) {
        if (!t || (t = P(t)).indexOf("-") + 1)
          return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
        if ("none" == t)
          return { r: -1, g: -1, b: -1, hex: "none", toString: lt };
        O[L](t.toLowerCase().substring(0, 2)) ||
          "#" == t.charAt() ||
          (t = at(t));
        var e,
          r,
          i,
          n,
          s,
          a = t.match(f);
        return a
          ? (a[2] &&
              ((i = b(a[2].substring(5), 16)),
              (r = b(a[2].substring(3, 5), 16)),
              (e = b(a[2].substring(1, 3), 16))),
            a[3] &&
              ((i = b((t = a[3].charAt(3)) + t, 16)),
              (r = b((t = a[3].charAt(2)) + t, 16)),
              (e = b((t = a[3].charAt(1)) + t, 16))),
            a[4] &&
              ((s = a[4][z](V)),
              (e = I(s[0])),
              "%" == s[0].slice(-1) && (e *= 2.55),
              (r = I(s[1])),
              "%" == s[1].slice(-1) && (r *= 2.55),
              (i = I(s[2])),
              "%" == s[2].slice(-1) && (i *= 2.55),
              "rgba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
              s[3] && "%" == s[3].slice(-1) && (n /= 100)),
            a[5]
              ? ((s = a[5][z](V)),
                (e = I(s[0])),
                "%" == s[0].slice(-1) && (e *= 2.55),
                (r = I(s[1])),
                "%" == s[1].slice(-1) && (r *= 2.55),
                (i = I(s[2])),
                "%" == s[2].slice(-1) && (i *= 2.55),
                ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                  (e /= 360),
                "hsba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                s[3] && "%" == s[3].slice(-1) && (n /= 100),
                j.hsb2rgb(e, r, i, n))
              : a[6]
              ? ((s = a[6][z](V)),
                (e = I(s[0])),
                "%" == s[0].slice(-1) && (e *= 2.55),
                (r = I(s[1])),
                "%" == s[1].slice(-1) && (r *= 2.55),
                (i = I(s[2])),
                "%" == s[2].slice(-1) && (i *= 2.55),
                ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                  (e /= 360),
                "hsla" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                s[3] && "%" == s[3].slice(-1) && (n /= 100),
                j.hsl2rgb(e, r, i, n))
              : (((a = { r: e, g: r, b: i, toString: lt }).hex =
                  "#" +
                  (16777216 | i | (r << 8) | (e << 16)).toString(16).slice(1)),
                j.is(n, "finite") && (a.opacity = n),
                a))
          : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
      }, j)),
        (j.hsb = ot(function (t, e, r) {
          return j.hsb2rgb(t, e, r).hex;
        })),
        (j.hsl = ot(function (t, e, r) {
          return j.hsl2rgb(t, e, r).hex;
        })),
        (j.rgb = ot(function (t, e, r) {
          return (
            "#" + (16777216 | r | (e << 8) | (t << 16)).toString(16).slice(1)
          );
        })),
        (j.getColor = function (t) {
          var e = (this.getColor.start = this.getColor.start || {
              h: 0,
              s: 1,
              b: t || 0.75,
            }),
            t = this.hsb2rgb(e.h, e.s, e.b);
          return (
            (e.h += 0.075),
            1 < e.h &&
              ((e.h = 0),
              (e.s -= 0.2),
              e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })),
            t.hex
          );
        }),
        (j.getColor.reset = function () {
          delete this.start;
        }),
        (j.parsePathString = function (t) {
          if (!t) return null;
          var e = ut(t);
          if (e.arr) return bt(e.arr);
          var s = {
              a: 7,
              c: 6,
              h: 1,
              l: 2,
              m: 2,
              r: 4,
              q: 4,
              s: 4,
              t: 2,
              v: 1,
              z: 0,
            },
            a = [];
          return (
            j.is(t, v) && j.is(t[0], v) && (a = bt(t)),
            a.length ||
              P(t).replace(G, function (t, e, r) {
                var i = [],
                  n = e.toLowerCase();
                if (
                  (r.replace(X, function (t, e) {
                    e && i.push(+e);
                  }),
                  "m" == n &&
                    2 < i.length &&
                    (a.push([e][M](i.splice(0, 2))),
                    (n = "l"),
                    (e = "m" == e ? "l" : "L")),
                  "r" == n)
                )
                  a.push([e][M](i));
                else
                  for (
                    ;
                    i.length >= s[n] &&
                    (a.push([e][M](i.splice(0, s[n]))), s[n]);

                  );
              }),
            (a.toString = j._path2string),
            (e.arr = bt(a)),
            a
          );
        }),
        (j.parseTransformString = ot(function (t) {
          if (!t) return null;
          var n = [];
          return (
            j.is(t, v) && j.is(t[0], v) && (n = bt(t)),
            n.length ||
              P(t).replace(W, function (t, e, r) {
                var i = [];
                y.call(e);
                r.replace(X, function (t, e) {
                  e && i.push(+e);
                }),
                  n.push([e][M](i));
              }),
            (n.toString = j._path2string),
            n
          );
        }));
      var ut = function (e) {
        var r = (ut.ps = ut.ps || {});
        return (
          r[e] ? (r[e].sleep = 100) : (r[e] = { sleep: 100 }),
          setTimeout(function () {
            for (var t in r)
              r[L](t) && t != e && (r[t].sleep--, r[t].sleep || delete r[t]);
          }),
          r[e]
        );
      };
      function ct(t, e, r, i, n) {
        return (
          t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) -
          3 * e +
          3 * r
        );
      }
      function ft(t, e, r, i, n, s, a, o, l) {
        null == l && (l = 1);
        for (
          var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2,
            u = [
              -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
              0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
            ],
            c = [
              0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
              0.1069, 0.1069, 0.0472, 0.0472,
            ],
            f = 0,
            p = 0;
          p < 12;
          p++
        ) {
          var d = h * u[p] + h,
            g = ct(d, t, r, n, a),
            d = ct(d, e, i, s, o),
            d = g * g + d * d;
          f += c[p] * B.sqrt(d);
        }
        return h * f;
      }
      function pt(t, e, r) {
        var i = j.bezierBBox(t),
          n = j.bezierBBox(e);
        if (!j.isBBoxIntersect(i, n)) return r ? 0 : [];
        for (
          var i = ft.apply(0, t),
            n = ft.apply(0, e),
            s = _(~~(i / 5), 1),
            a = _(~~(n / 5), 1),
            o = [],
            l = [],
            h = {},
            u = r ? 0 : [],
            c = 0;
          c < s + 1;
          c++
        ) {
          var f = j.findDotsAtSegment.apply(j, t.concat(c / s));
          o.push({ x: f.x, y: f.y, t: c / s });
        }
        for (c = 0; c < a + 1; c++)
          (f = j.findDotsAtSegment.apply(j, e.concat(c / a))),
            l.push({ x: f.x, y: f.y, t: c / a });
        for (c = 0; c < s; c++)
          for (var p = 0; p < a; p++) {
            var d = o[c],
              g = o[c + 1],
              x = l[p],
              y = l[p + 1],
              m = S(g.x - d.x) < 0.001 ? "y" : "x",
              v = S(y.x - x.x) < 0.001 ? "y" : "x",
              b = (function (t, e, r, i, n, s, a, o) {
                if (
                  !(
                    _(t, r) < k(n, a) ||
                    k(t, r) > _(n, a) ||
                    _(e, i) < k(s, o) ||
                    k(e, i) > _(s, o)
                  )
                ) {
                  var l = (t * i - e * r) * (n - a) - (t - r) * (n * o - s * a),
                    h = (t * i - e * r) * (s - o) - (e - i) * (n * o - s * a),
                    u = (t - r) * (s - o) - (e - i) * (n - a);
                  if (u) {
                    var c = l / u,
                      l = h / u,
                      h = +c.toFixed(2),
                      u = +l.toFixed(2);
                    if (
                      !(
                        h < +k(t, r).toFixed(2) ||
                        h > +_(t, r).toFixed(2) ||
                        h < +k(n, a).toFixed(2) ||
                        h > +_(n, a).toFixed(2) ||
                        u < +k(e, i).toFixed(2) ||
                        u > +_(e, i).toFixed(2) ||
                        u < +k(s, o).toFixed(2) ||
                        u > +_(s, o).toFixed(2)
                      )
                    )
                      return { x: c, y: l };
                  }
                }
              })(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
            b &&
              h[b.x.toFixed(4)] != b.y.toFixed(4) &&
              ((h[b.x.toFixed(4)] = b.y.toFixed(4)),
              (d = d.t + S((b[m] - d[m]) / (g[m] - d[m])) * (g.t - d.t)),
              (x = x.t + S((b[v] - x[v]) / (y[v] - x[v])) * (y.t - x.t)),
              0 <= d &&
                d <= 1.001 &&
                0 <= x &&
                x <= 1.001 &&
                (r
                  ? u++
                  : u.push({ x: b.x, y: b.y, t1: k(d, 1), t2: k(x, 1) })));
          }
        return u;
      }
      function dt(t, e, r) {
        (t = j._path2curve(t)), (e = j._path2curve(e));
        for (
          var i, n, s, a, o, l, h, u, c, f, p = r ? 0 : [], d = 0, g = t.length;
          d < g;
          d++
        ) {
          var x = t[d];
          if ("M" == x[0]) (i = o = x[1]), (n = l = x[2]);
          else {
            n =
              "C" == x[0]
                ? ((i = (c = [i, n].concat(x.slice(1)))[6]), c[7])
                : ((c = [i, n, i, n, o, l, o, l]), (i = o), l);
            for (var y = 0, m = e.length; y < m; y++) {
              var v = e[y];
              if ("M" == v[0]) (s = h = v[1]), (a = u = v[2]);
              else {
                a =
                  "C" == v[0]
                    ? ((s = (f = [s, a].concat(v.slice(1)))[6]), f[7])
                    : ((f = [s, a, s, a, h, u, h, u]), (s = h), u);
                var b = pt(c, f, r);
                if (r) p += b;
                else {
                  for (var _ = 0, w = b.length; _ < w; _++)
                    (b[_].segment1 = d),
                      (b[_].segment2 = y),
                      (b[_].bez1 = c),
                      (b[_].bez2 = f);
                  p = p.concat(b);
                }
              }
            }
          }
        }
        return p;
      }
      (j.findDotsAtSegment = function (t, e, r, i, n, s, a, o, l) {
        var h = 1 - l,
          u = m(h, 3),
          c = m(h, 2),
          f = l * l,
          p = f * l,
          d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * a,
          g = u * e + 3 * c * l * i + 3 * h * l * l * s + p * o,
          u = t + 2 * l * (r - t) + f * (n - 2 * r + t),
          c = e + 2 * l * (i - e) + f * (s - 2 * i + e),
          p = r + 2 * l * (n - r) + f * (a - 2 * n + r),
          f = i + 2 * l * (s - i) + f * (o - 2 * s + i),
          r = h * t + l * r,
          i = h * e + l * i,
          a = h * n + l * a,
          l = h * s + l * o,
          o = 90 - (180 * B.atan2(u - p, c - f)) / T;
        return (
          (p < u || c < f) && (o += 180),
          {
            x: d,
            y: g,
            m: { x: u, y: c },
            n: { x: p, y: f },
            start: { x: r, y: i },
            end: { x: a, y: l },
            alpha: o,
          }
        );
      }),
        (j.bezierBBox = function (t, e, r, i, n, s, a, o) {
          j.is(t, "array") || (t = [t, e, r, i, n, s, a, o]);
          t = kt.apply(null, t);
          return {
            x: t.min.x,
            y: t.min.y,
            x2: t.max.x,
            y2: t.max.y,
            width: t.max.x - t.min.x,
            height: t.max.y - t.min.y,
          };
        }),
        (j.isPointInsideBBox = function (t, e, r) {
          return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
        }),
        (j.isBBoxIntersect = function (t, e) {
          var r = j.isPointInsideBBox;
          return (
            r(e, t.x, t.y) ||
            r(e, t.x2, t.y) ||
            r(e, t.x, t.y2) ||
            r(e, t.x2, t.y2) ||
            r(t, e.x, e.y) ||
            r(t, e.x2, e.y) ||
            r(t, e.x, e.y2) ||
            r(t, e.x2, e.y2) ||
            (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
              ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
          );
        }),
        (j.pathIntersection = function (t, e) {
          return dt(t, e);
        }),
        (j.pathIntersectionNumber = function (t, e) {
          return dt(t, e, 1);
        }),
        (j.isPointInsidePath = function (t, e, r) {
          var i = j.pathBBox(t);
          return (
            j.isPointInsideBBox(i, e, r) &&
            dt(
              t,
              [
                ["M", e, r],
                ["H", i.x2 + 10],
              ],
              1
            ) %
              2 ==
              1
          );
        }),
        (j._removedFactory = function (t) {
          return function () {
            N(
              "raphael.log",
              null,
              "Raphaël: you are calling to method “" +
                t +
                "” of removed object",
              t
            );
          };
        });
      function gt(t, e, r, i) {
        return [t, e, r, i, r, i];
      }
      function xt(t, e, r, i, n, s) {
        return [
          (1 / 3) * t + (2 / 3) * r,
          (1 / 3) * e + (2 / 3) * i,
          (1 / 3) * n + (2 / 3) * r,
          (1 / 3) * s + (2 / 3) * i,
          n,
          s,
        ];
      }
      function yt(t, e, r, i, n, s, a, o, l) {
        var h = 1 - l;
        return {
          x:
            m(h, 3) * t + 3 * m(h, 2) * l * r + 3 * h * l * l * n + m(l, 3) * a,
          y:
            m(h, 3) * e + 3 * m(h, 2) * l * i + 3 * h * l * l * s + m(l, 3) * o,
        };
      }
      function mt(t) {
        var e = t[0];
        switch (e.toLowerCase()) {
          case "t":
            return [e, 0, 0];
          case "m":
            return [e, 1, 0, 0, 1, 0, 0];
          case "r":
            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
          case "s":
            return 5 == t.length
              ? [e, 1, 1, t[3], t[4]]
              : 3 == t.length
              ? [e, 1, 1]
              : [e, 1];
        }
      }
      var vt = (j.pathBBox = function (t) {
          var e = ut(t);
          if (e.bbox) return tt(e.bbox);
          if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
          for (
            var r,
              i,
              n = 0,
              s = 0,
              a = [],
              o = [],
              l = 0,
              h = (t = Ct(t)).length;
            l < h;
            l++
          )
            "M" == (i = t[l])[0]
              ? ((n = i[1]), (s = i[2]), a.push(n), o.push(s))
              : ((r = kt(n, s, i[1], i[2], i[3], i[4], i[5], i[6])),
                (a = a[M](r.min.x, r.max.x)),
                (o = o[M](r.min.y, r.max.y)),
                (n = i[5]),
                (s = i[6]));
          var u = k[x](0, a),
            c = k[x](0, o),
            f = _[x](0, a),
            p = _[x](0, o),
            d = f - u,
            g = p - c,
            g = {
              x: u,
              y: c,
              x2: f,
              y2: p,
              width: d,
              height: g,
              cx: u + d / 2,
              cy: c + g / 2,
            };
          return (e.bbox = tt(g)), g;
        }),
        bt = function (t) {
          t = tt(t);
          return (t.toString = j._path2string), t;
        },
        o = (j._pathToRelative = function (t) {
          var e = ut(t);
          if (e.rel) return bt(e.rel);
          (j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t));
          var r = [],
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            o = 0;
          "M" == t[0][0] &&
            ((s = i = t[0][1]), (a = n = t[0][2]), o++, r.push(["M", i, n]));
          for (var l = o, h = t.length; l < h; l++) {
            var u = (r[l] = []),
              c = t[l];
            if (c[0] != y.call(c[0]))
              switch (((u[0] = y.call(c[0])), u[0])) {
                case "a":
                  (u[1] = c[1]),
                    (u[2] = c[2]),
                    (u[3] = c[3]),
                    (u[4] = c[4]),
                    (u[5] = c[5]),
                    (u[6] = +(c[6] - i).toFixed(3)),
                    (u[7] = +(c[7] - n).toFixed(3));
                  break;
                case "v":
                  u[1] = +(c[1] - n).toFixed(3);
                  break;
                case "m":
                  (s = c[1]), (a = c[2]);
                default:
                  for (var f = 1, p = c.length; f < p; f++)
                    u[f] = +(c[f] - (f % 2 ? i : n)).toFixed(3);
              }
            else {
              (u = r[l] = []), "m" == c[0] && ((s = c[1] + i), (a = c[2] + n));
              for (var d = 0, g = c.length; d < g; d++) r[l][d] = c[d];
            }
            var x = r[l].length;
            switch (r[l][0]) {
              case "z":
                (i = s), (n = a);
                break;
              case "h":
                i += +r[l][x - 1];
                break;
              case "v":
                n += +r[l][x - 1];
                break;
              default:
                (i += +r[l][x - 2]), (n += +r[l][x - 1]);
            }
          }
          return (r.toString = j._path2string), (e.rel = bt(r)), r;
        }),
        _t = (j._pathToAbsolute = function (t) {
          var e = ut(t);
          if (e.abs) return bt(e.abs);
          if (
            ((j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t)),
            !t || !t.length)
          )
            return [["M", 0, 0]];
          var r = [],
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            o = 0;
          "M" == t[0][0] &&
            ((s = i = +t[0][1]), (a = n = +t[0][2]), o++, (r[0] = ["M", i, n]));
          for (
            var l,
              h,
              u =
                3 == t.length &&
                "M" == t[0][0] &&
                "R" == t[1][0].toUpperCase() &&
                "Z" == t[2][0].toUpperCase(),
              c = o,
              f = t.length;
            c < f;
            c++
          ) {
            if ((r.push((l = [])), (h = t[c])[0] != A.call(h[0])))
              switch (((l[0] = A.call(h[0])), l[0])) {
                case "A":
                  (l[1] = h[1]),
                    (l[2] = h[2]),
                    (l[3] = h[3]),
                    (l[4] = h[4]),
                    (l[5] = h[5]),
                    (l[6] = +(h[6] + i)),
                    (l[7] = +(h[7] + n));
                  break;
                case "V":
                  l[1] = +h[1] + n;
                  break;
                case "H":
                  l[1] = +h[1] + i;
                  break;
                case "R":
                  for (
                    var p = [i, n][M](h.slice(1)), d = 2, g = p.length;
                    d < g;
                    d++
                  )
                    (p[d] = +p[d] + i), (p[++d] = +p[d] + n);
                  r.pop(), (r = r[M](ht(p, u)));
                  break;
                case "M":
                  (s = +h[1] + i), (a = +h[2] + n);
                default:
                  for (d = 1, g = h.length; d < g; d++)
                    l[d] = +h[d] + (d % 2 ? i : n);
              }
            else if ("R" == h[0])
              (p = [i, n][M](h.slice(1))),
                r.pop(),
                (r = r[M](ht(p, u))),
                (l = ["R"][M](h.slice(-2)));
            else for (var x = 0, y = h.length; x < y; x++) l[x] = h[x];
            switch (l[0]) {
              case "Z":
                (i = s), (n = a);
                break;
              case "H":
                i = l[1];
                break;
              case "V":
                n = l[1];
                break;
              case "M":
                (s = l[l.length - 2]), (a = l[l.length - 1]);
              default:
                (i = l[l.length - 2]), (n = l[l.length - 1]);
            }
          }
          return (r.toString = j._path2string), (e.abs = bt(r)), r;
        }),
        wt = function (t, e, r, i, n, s, a, o, l, h) {
          var u = (120 * T) / 180,
            c = (T / 180) * (+n || 0),
            f = [],
            p = ot(function (t, e, r) {
              return {
                x: t * B.cos(r) - e * B.sin(r),
                y: t * B.sin(r) + e * B.cos(r),
              };
            });
          h
            ? ((b = h[0]), (_ = h[1]), (m = h[2]), (v = h[3]))
            : ((t = (g = p(t, e, -c)).x),
              (e = g.y),
              (o = (g = p(o, l, -c)).x),
              (l = g.y),
              B.cos((T / 180) * n),
              B.sin((T / 180) * n),
              1 <
                (y =
                  ((x = (t - o) / 2) * x) / (r * r) +
                  ((d = (e - l) / 2) * d) / (i * i)) &&
                ((r *= y = B.sqrt(y)), (i *= y)),
              (g = r * r),
              (y = i * i),
              (m =
                ((g =
                  (s == a ? -1 : 1) *
                  B.sqrt(
                    S((g * y - g * d * d - y * x * x) / (g * d * d + y * x * x))
                  )) *
                  r *
                  d) /
                  i +
                (t + o) / 2),
              (v = (g * -i * x) / r + (e + l) / 2),
              (b = B.asin(((e - v) / i).toFixed(9))),
              (_ = B.asin(((l - v) / i).toFixed(9))),
              (b = t < m ? T - b : b) < 0 && (b = 2 * T + b),
              (_ = o < m ? T - _ : _) < 0 && (_ = 2 * T + _),
              a && _ < b && (b -= 2 * T),
              !a && b < _ && (_ -= 2 * T));
          var d,
            g,
            x,
            y = _ - b;
          S(y) > u &&
            ((d = _),
            (g = o),
            (x = l),
            (_ = b + u * (a && b < _ ? 1 : -1)),
            (o = m + r * B.cos(_)),
            (l = v + i * B.sin(_)),
            (f = wt(o, l, r, i, n, 0, a, g, x, [_, d, m, v]))),
            (y = _ - b);
          var m = B.cos(b),
            v = B.sin(b),
            b = B.cos(_),
            _ = B.sin(_),
            y = B.tan(y / 4),
            r = (4 / 3) * r * y,
            i = (4 / 3) * i * y,
            y = [t, e],
            m = [t + r * v, e - i * m],
            b = [o + r * _, l - i * b],
            l = [o, l];
          if (((m[0] = 2 * y[0] - m[0]), (m[1] = 2 * y[1] - m[1]), h))
            return [m, b, l][M](f);
          for (
            var w = [], k = 0, C = (f = [m, b, l][M](f).join()[z](",")).length;
            k < C;
            k++
          )
            w[k] = k % 2 ? p(f[k - 1], f[k], c).y : p(f[k], f[k + 1], c).x;
          return w;
        },
        kt = ot(function (t, e, r, i, n, s, a, o) {
          var l,
            h = n - 2 * r + t - (a - 2 * n + r),
            u = 2 * (r - t) - 2 * (n - r),
            c = t - r,
            f = (-u + B.sqrt(u * u - 4 * h * c)) / 2 / h,
            p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h,
            d = [e, o],
            g = [t, a];
          return (
            "1e12" < S(f) && (f = 0.5),
            "1e12" < S(p) && (p = 0.5),
            0 < f &&
              f < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
            0 < p &&
              p < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
            (h = s - 2 * i + e - (o - 2 * s + i)),
            (c = e - i),
            (f =
              (-(u = 2 * (i - e) - 2 * (s - i)) + B.sqrt(u * u - 4 * h * c)) /
              2 /
              h),
            (p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h),
            "1e12" < S(f) && (f = 0.5),
            "1e12" < S(p) && (p = 0.5),
            0 < f &&
              f < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
            0 < p &&
              p < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
            {
              min: { x: k[x](0, g), y: k[x](0, d) },
              max: { x: _[x](0, g), y: _[x](0, d) },
            }
          );
        }),
        Ct = (j._path2curve = ot(
          function (t, e) {
            var r = !e && ut(t);
            if (!e && r.curve) return bt(r.curve);
            function i(t, e, r) {
              var i, n;
              if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
              switch ((t[0] in { T: 1, Q: 1 } || (e.qx = e.qy = null), t[0])) {
                case "M":
                  (e.X = t[1]), (e.Y = t[2]);
                  break;
                case "A":
                  t = ["C"][M](wt[x](0, [e.x, e.y][M](t.slice(1))));
                  break;
                case "S":
                  (n =
                    "C" == r || "S" == r
                      ? ((i = 2 * e.x - e.bx), 2 * e.y - e.by)
                      : ((i = e.x), e.y)),
                    (t = ["C", i, n][M](t.slice(1)));
                  break;
                case "T":
                  "Q" == r || "T" == r
                    ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                    : ((e.qx = e.x), (e.qy = e.y)),
                    (t = ["C"][M](xt(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                  break;
                case "Q":
                  (e.qx = t[1]),
                    (e.qy = t[2]),
                    (t = ["C"][M](xt(e.x, e.y, t[1], t[2], t[3], t[4])));
                  break;
                case "L":
                  t = ["C"][M](gt(e.x, e.y, t[1], t[2]));
                  break;
                case "H":
                  t = ["C"][M](gt(e.x, e.y, t[1], e.y));
                  break;
                case "V":
                  t = ["C"][M](gt(e.x, e.y, e.x, t[1]));
                  break;
                case "Z":
                  t = ["C"][M](gt(e.x, e.y, e.X, e.Y));
              }
              return t;
            }
            function n(t, e) {
              if (7 < t[e].length) {
                t[e].shift();
                for (var r = t[e]; r.length; )
                  t.splice(e++, 0, ["C"][M](r.splice(0, 6)));
                t.splice(e, 1), (c = _(a.length, (o && o.length) || 0));
              }
            }
            function s(t, e, r, i, n) {
              t &&
                e &&
                "M" == t[n][0] &&
                "M" != e[n][0] &&
                (e.splice(n, 0, ["M", i.x, i.y]),
                (r.bx = 0),
                (r.by = 0),
                (r.x = t[n][1]),
                (r.y = t[n][2]),
                (c = _(a.length, (o && o.length) || 0)));
            }
            for (
              var a = _t(t),
                o = e && _t(e),
                l = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                h = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                u = 0,
                c = _(a.length, (o && o.length) || 0);
              u < c;
              u++
            ) {
              (a[u] = i(a[u], l)),
                n(a, u),
                o && (o[u] = i(o[u], h)),
                o && n(o, u),
                s(a, o, l, h, u),
                s(o, a, h, l, u);
              var f = a[u],
                p = o && o[u],
                d = f.length,
                g = o && p.length;
              (l.x = f[d - 2]),
                (l.y = f[d - 1]),
                (l.bx = I(f[d - 4]) || l.x),
                (l.by = I(f[d - 3]) || l.y),
                (h.bx = o && (I(p[g - 4]) || h.x)),
                (h.by = o && (I(p[g - 3]) || h.y)),
                (h.x = o && p[g - 2]),
                (h.y = o && p[g - 1]);
            }
            return o || (r.curve = bt(a)), o ? [a, o] : a;
          },
          null,
          bt
        )),
        Bt =
          ((j._parseDots = ot(function (t) {
            for (var e = [], r = 0, i = t.length; r < i; r++) {
              var n = {},
                s = t[r].match(/^([^:]*):?([\d\.]*)/);
              if (((n.color = j.getRGB(s[1])), n.color.error)) return null;
              (n.color = n.color.hex),
                s[2] && (n.offset = s[2] + "%"),
                e.push(n);
            }
            for (r = 1, i = e.length - 1; r < i; r++)
              if (!e[r].offset) {
                for (
                  var a = I(e[r - 1].offset || 0), o = 0, l = r + 1;
                  l < i;
                  l++
                )
                  if (e[l].offset) {
                    o = e[l].offset;
                    break;
                  }
                o || ((o = 100), (l = i));
                for (var h = ((o = I(o)) - a) / (l - r + 1); r < l; r++)
                  (a += h), (e[r].offset = a + "%");
              }
            return e;
          })),
          (j._tear = function (t, e) {
            t == e.top && (e.top = t.prev),
              t == e.bottom && (e.bottom = t.next),
              t.next && (t.next.prev = t.prev),
              t.prev && (t.prev.next = t.next);
          })),
        St =
          ((j._tofront = function (t, e) {
            e.top !== t &&
              (Bt(t, e),
              (t.next = null),
              (t.prev = e.top),
              (e.top.next = t),
              (e.top = t));
          }),
          (j._toback = function (t, e) {
            e.bottom !== t &&
              (Bt(t, e),
              (t.next = e.bottom),
              (t.prev = null),
              (e.bottom.prev = t),
              (e.bottom = t));
          }),
          (j._insertafter = function (t, e, r) {
            Bt(t, r),
              e == r.top && (r.top = t),
              e.next && (e.next.prev = t),
              (t.next = e.next),
              ((t.prev = e).next = t);
          }),
          (j._insertbefore = function (t, e, r) {
            Bt(t, r),
              e == r.bottom && (r.bottom = t),
              e.prev && (e.prev.next = t),
              (t.prev = e.prev),
              ((e.prev = t).next = e);
          }),
          (j.toMatrix = function (t, e) {
            var r = vt(t),
              t = {
                _: { transform: "" },
                getBBox: function () {
                  return r;
                },
              };
            return Tt(t, e), t.matrix;
          })),
        Tt =
          ((j.transformPath = function (t, e) {
            return Q(t, St(t, e));
          }),
          (j._extractTransform = function (t, e) {
            if (null == e) return t._.transform;
            e = P(e).replace(/\.{3}|\u2026/g, t._.transform || "");
            var r,
              i = j.parseTransformString(e),
              n = 0,
              e = 0,
              s = 1,
              a = 1,
              o = t._,
              l = new Nt();
            if (((o.transform = i || []), i))
              for (var h = 0, u = i.length; h < u; h++) {
                var c,
                  f,
                  p,
                  d,
                  g,
                  x = i[h],
                  y = x.length,
                  m = P(x[0]).toLowerCase(),
                  v = x[0] != m,
                  b = v ? l.invert() : 0;
                "t" == m && 3 == y
                  ? v
                    ? ((c = b.x(0, 0)),
                      (f = b.y(0, 0)),
                      (p = b.x(x[1], x[2])),
                      (d = b.y(x[1], x[2])),
                      l.translate(p - c, d - f))
                    : l.translate(x[1], x[2])
                  : "r" == m
                  ? 2 == y
                    ? ((g = g || t.getBBox(1)),
                      l.rotate(x[1], g.x + g.width / 2, g.y + g.height / 2),
                      (n += x[1]))
                    : 4 == y &&
                      (v
                        ? ((p = b.x(x[2], x[3])),
                          (d = b.y(x[2], x[3])),
                          l.rotate(x[1], p, d))
                        : l.rotate(x[1], x[2], x[3]),
                      (n += x[1]))
                  : "s" == m
                  ? 2 == y || 3 == y
                    ? ((g = g || t.getBBox(1)),
                      l.scale(
                        x[1],
                        x[y - 1],
                        g.x + g.width / 2,
                        g.y + g.height / 2
                      ),
                      (s *= x[1]),
                      (a *= x[y - 1]))
                    : 5 == y &&
                      (v
                        ? ((p = b.x(x[3], x[4])),
                          (d = b.y(x[3], x[4])),
                          l.scale(x[1], x[2], p, d))
                        : l.scale(x[1], x[2], x[3], x[4]),
                      (s *= x[1]),
                      (a *= x[2]))
                  : "m" == m &&
                    7 == y &&
                    l.add(x[1], x[2], x[3], x[4], x[5], x[6]),
                  (o.dirtyT = 1),
                  (t.matrix = l);
              }
            (t.matrix = l),
              (o.sx = s),
              (o.sy = a),
              (o.deg = n),
              (o.dx = r = l.e),
              (o.dy = e = l.f),
              1 == s && 1 == a && !n && o.bbox
                ? ((o.bbox.x += +r), (o.bbox.y += +e))
                : (o.dirtyT = 1);
          })),
        At = (j._equaliseTransform = function (t, e) {
          (e = P(e).replace(/\.{3}|\u2026/g, t)),
            (t = j.parseTransformString(t) || []),
            (e = j.parseTransformString(e) || []);
          for (
            var r, i, n, s, a = _(t.length, e.length), o = [], l = [], h = 0;
            h < a;
            h++
          ) {
            if (
              ((n = t[h] || mt(e[h])),
              (s = e[h] || mt(n)),
              n[0] != s[0] ||
                ("r" == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3])) ||
                ("s" == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])))
            )
              return;
            for (
              o[h] = [], l[h] = [], r = 0, i = _(n.length, s.length);
              r < i;
              r++
            )
              r in n && (o[h][r] = n[r]), r in s && (l[h][r] = s[r]);
          }
          return { from: o, to: l };
        });
      function Nt(t, e, r, i, n, s) {
        null != t
          ? ((this.a = +t),
            (this.b = +e),
            (this.c = +r),
            (this.d = +i),
            (this.e = +n),
            (this.f = +s))
          : ((this.a = 1),
            (this.b = 0),
            (this.c = 0),
            (this.d = 1),
            (this.e = 0),
            (this.f = 0));
      }
      (j._getContainer = function (t, e, r, i) {
        var n = null != i || j.is(t, "object") ? t : d.doc.getElementById(t);
        if (null != n)
          return n.tagName
            ? null == e
              ? {
                  container: n,
                  width: n.style.pixelWidth || n.offsetWidth,
                  height: n.style.pixelHeight || n.offsetHeight,
                }
              : { container: n, width: e, height: r }
            : { container: 1, x: t, y: e, width: r, height: i };
      }),
        (j.pathToRelative = o),
        (j._engine = {}),
        (j.path2curve = Ct),
        (j.matrix = function (t, e, r, i, n, s) {
          return new Nt(t, e, r, i, n, s);
        }),
        (function (t) {
          function i(t) {
            return t[0] * t[0] + t[1] * t[1];
          }
          function n(t) {
            var e = B.sqrt(i(t));
            t[0] && (t[0] /= e), t[1] && (t[1] /= e);
          }
          (t.add = function (t, e, r, i, n, s) {
            var a,
              o,
              l,
              h,
              u = [[], [], []],
              c = [
                [this.a, this.c, this.e],
                [this.b, this.d, this.f],
                [0, 0, 1],
              ],
              f = [
                [t, r, n],
                [e, i, s],
                [0, 0, 1],
              ];
            for (
              t &&
                t instanceof Nt &&
                (f = [
                  [t.a, t.c, t.e],
                  [t.b, t.d, t.f],
                  [0, 0, 1],
                ]),
                a = 0;
              a < 3;
              a++
            )
              for (o = 0; o < 3; o++) {
                for (l = h = 0; l < 3; l++) h += c[a][l] * f[l][o];
                u[a][o] = h;
              }
            (this.a = u[0][0]),
              (this.b = u[1][0]),
              (this.c = u[0][1]),
              (this.d = u[1][1]),
              (this.e = u[0][2]),
              (this.f = u[1][2]);
          }),
            (t.invert = function () {
              var t = this,
                e = t.a * t.d - t.b * t.c;
              return new Nt(
                t.d / e,
                -t.b / e,
                -t.c / e,
                t.a / e,
                (t.c * t.f - t.d * t.e) / e,
                (t.b * t.e - t.a * t.f) / e
              );
            }),
            (t.clone = function () {
              return new Nt(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (t.translate = function (t, e) {
              this.add(1, 0, 0, 1, t, e);
            }),
            (t.scale = function (t, e, r, i) {
              null == e && (e = t),
                (r || i) && this.add(1, 0, 0, 1, r, i),
                this.add(t, 0, 0, e, 0, 0),
                (r || i) && this.add(1, 0, 0, 1, -r, -i);
            }),
            (t.rotate = function (t, e, r) {
              (t = j.rad(t)), (e = e || 0), (r = r || 0);
              var i = +B.cos(t).toFixed(9),
                t = +B.sin(t).toFixed(9);
              this.add(i, t, -t, i, e, r), this.add(1, 0, 0, 1, -e, -r);
            }),
            (t.x = function (t, e) {
              return t * this.a + e * this.c + this.e;
            }),
            (t.y = function (t, e) {
              return t * this.b + e * this.d + this.f;
            }),
            (t.get = function (t) {
              return +this[P.fromCharCode(97 + t)].toFixed(4);
            }),
            (t.toString = function () {
              return j.svg
                ? "matrix(" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ].join() +
                    ")"
                : [
                    this.get(0),
                    this.get(2),
                    this.get(1),
                    this.get(3),
                    0,
                    0,
                  ].join();
            }),
            (t.toFilter = function () {
              return (
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                this.get(0) +
                ", M12=" +
                this.get(2) +
                ", M21=" +
                this.get(1) +
                ", M22=" +
                this.get(3) +
                ", Dx=" +
                this.get(4) +
                ", Dy=" +
                this.get(5) +
                ", sizingmethod='auto expand')"
              );
            }),
            (t.offset = function () {
              return [this.e.toFixed(4), this.f.toFixed(4)];
            }),
            (t.split = function () {
              var t = {};
              (t.dx = this.e), (t.dy = this.f);
              var e = [
                [this.a, this.c],
                [this.b, this.d],
              ];
              (t.scalex = B.sqrt(i(e[0]))),
                n(e[0]),
                (t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                (e[1] = [
                  e[1][0] - e[0][0] * t.shear,
                  e[1][1] - e[0][1] * t.shear,
                ]),
                (t.scaley = B.sqrt(i(e[1]))),
                n(e[1]),
                (t.shear /= t.scaley);
              var r = -e[0][1],
                e = e[1][1];
              return (
                e < 0
                  ? ((t.rotate = j.deg(B.acos(e))),
                    r < 0 && (t.rotate = 360 - t.rotate))
                  : (t.rotate = j.deg(B.asin(r))),
                (t.isSimple = !(
                  +t.shear.toFixed(9) ||
                  (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                )),
                (t.isSuperSimple =
                  !+t.shear.toFixed(9) &&
                  t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                  !t.rotate),
                (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                t
              );
            }),
            (t.toTransformString = function (t) {
              t = t || this[z]();
              return t.isSimple
                ? ((t.scalex = +t.scalex.toFixed(4)),
                  (t.scaley = +t.scaley.toFixed(4)),
                  (t.rotate = +t.rotate.toFixed(4)),
                  (t.dx || t.dy ? "t" + [t.dx, t.dy] : "") +
                    (1 != t.scalex || 1 != t.scaley
                      ? "s" + [t.scalex, t.scaley, 0, 0]
                      : "") +
                    (t.rotate ? "r" + [t.rotate, 0, 0] : ""))
                : "m" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ];
            });
        })(Nt.prototype);
      o =
        navigator.userAgent.match(/Version\/(.*?)\s/) ||
        navigator.userAgent.match(/Chrome\/(\d+)/);
      ("Apple Computer, Inc." == navigator.vendor &&
        ((o && o[1] < 4) || "iP" == navigator.platform.slice(0, 2))) ||
      ("Google Inc." == navigator.vendor && o && o[1] < 8)
        ? (K.safari = function () {
            var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr(
              { stroke: "none" }
            );
            setTimeout(function () {
              t.remove();
            });
          })
        : (K.safari = function () {});
      function Et() {
        this.returnValue = !1;
      }
      function Lt() {
        return this.originalEvent.preventDefault();
      }
      function Mt() {
        this.cancelBubble = !0;
      }
      function Pt() {
        return this.originalEvent.stopPropagation();
      }
      function zt(t) {
        var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
          r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
        return { x: t.clientX + r, y: t.clientY + e };
      }
      function Ft(t) {
        for (
          var e,
            r = t.clientX,
            i = t.clientY,
            n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
            s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
            a = It.length;
          a--;

        ) {
          if (((e = It[a]), g && t.touches)) {
            for (var o, l = t.touches.length; l--; )
              if ((o = t.touches[l]).identifier == e.el._drag.id) {
                (r = o.clientX),
                  (i = o.clientY),
                  (t.originalEvent || t).preventDefault();
                break;
              }
          } else t.preventDefault();
          var h,
            u = e.el.node,
            c = u.nextSibling,
            f = u.parentNode,
            p = u.style.display;
          d.win.opera && f.removeChild(u),
            (u.style.display = "none"),
            (h = e.el.paper.getElementByPoint(r, i)),
            (u.style.display = p),
            d.win.opera && (c ? f.insertBefore(u, c) : f.appendChild(u)),
            h && N("raphael.drag.over." + e.el.id, e.el, h),
            (r += s),
            (i += n),
            N(
              "raphael.drag.move." + e.el.id,
              e.move_scope || e.el,
              r - e.el._drag.x,
              i - e.el._drag.y,
              r,
              i,
              t
            );
        }
      }
      for (
        var Rt = d.doc.addEventListener
            ? function (s, t, a, o) {
                function e(t) {
                  var e = zt(t);
                  return a.call(o, t, e.x, e.y);
                }
                return (
                  s.addEventListener(t, e, !1),
                  g &&
                    h[t] &&
                    s.addEventListener(
                      h[t],
                      function (t) {
                        for (
                          var e = zt(t),
                            r = t,
                            i = 0,
                            n = t.targetTouches && t.targetTouches.length;
                          i < n;
                          i++
                        )
                          if (t.targetTouches[i].target == s) {
                            ((t = t.targetTouches[i]).originalEvent = r),
                              (t.preventDefault = Lt),
                              (t.stopPropagation = Pt);
                            break;
                          }
                        return a.call(o, t, e.x, e.y);
                      },
                      !1
                    ),
                  function () {
                    return (
                      s.removeEventListener(t, e, !1),
                      g && h[t] && s.removeEventListener(h[t], e, !1),
                      !0
                    );
                  }
                );
              }
            : d.doc.attachEvent
            ? function (t, e, i, n) {
                function r(t) {
                  t = t || d.win.event;
                  var e =
                      d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    r =
                      d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                    r = t.clientX + r,
                    e = t.clientY + e;
                  return (
                    (t.preventDefault = t.preventDefault || Et),
                    (t.stopPropagation = t.stopPropagation || Mt),
                    i.call(n, t, r, e)
                  );
                }
                t.attachEvent("on" + e, r);
                return function () {
                  return t.detachEvent("on" + e, r), !0;
                };
              }
            : void 0,
          It = [],
          jt = function (t) {
            j.unmousemove(Ft).unmouseup(jt);
            for (var e, r = It.length; r--; )
              ((e = It[r]).el._drag = {}),
                N(
                  "raphael.drag.end." + e.el.id,
                  e.end_scope || e.start_scope || e.move_scope || e.el,
                  t
                );
            It = [];
          },
          qt = (j.el = {}),
          Dt = l.length;
        Dt--;

      )
        !(function (i) {
          (j[i] = qt[i] =
            function (t, e) {
              return (
                j.is(t, "function") &&
                  ((this.events = this.events || []),
                  this.events.push({
                    name: i,
                    f: t,
                    unbind: Rt(
                      this.shape || this.node || d.doc,
                      i,
                      t,
                      e || this
                    ),
                  })),
                this
              );
            }),
            (j["un" + i] = qt["un" + i] =
              function (t) {
                for (var e = this.events || [], r = e.length; r--; )
                  e[r].name != i ||
                    (!j.is(t, "undefined") && e[r].f != t) ||
                    (e[r].unbind(),
                    e.splice(r, 1),
                    e.length || delete this.events);
                return this;
              });
        })(l[Dt]);
      (qt.data = function (t, e) {
        var r = (H[this.id] = H[this.id] || {});
        if (0 == arguments.length) return r;
        if (1 != arguments.length)
          return (r[t] = e), N("raphael.data.set." + this.id, this, e, t), this;
        if (j.is(t, "object")) {
          for (var i in t) t[L](i) && this.data(i, t[i]);
          return this;
        }
        return N("raphael.data.get." + this.id, this, r[t], t), r[t];
      }),
        (qt.removeData = function (t) {
          return (
            null == t ? (H[this.id] = {}) : H[this.id] && delete H[this.id][t],
            this
          );
        }),
        (qt.getData = function () {
          return tt(H[this.id] || {});
        }),
        (qt.hover = function (t, e, r, i) {
          return this.mouseover(t, r).mouseout(e, i || r);
        }),
        (qt.unhover = function (t, e) {
          return this.unmouseover(t).unmouseout(e);
        });
      var Vt = [];
      (qt.drag = function (o, l, h, u, c, f) {
        function t(t) {
          (t.originalEvent || t).preventDefault();
          var e = t.clientX,
            r = t.clientY,
            i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
            n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
          if (((this._drag.id = t.identifier), g && t.touches))
            for (var s, a = t.touches.length; a--; )
              if (
                ((s = t.touches[a]),
                (this._drag.id = s.identifier),
                s.identifier == this._drag.id)
              ) {
                (e = s.clientX), (r = s.clientY);
                break;
              }
          (this._drag.x = e + n),
            (this._drag.y = r + i),
            It.length || j.mousemove(Ft).mouseup(jt),
            It.push({ el: this, move_scope: u, start_scope: c, end_scope: f }),
            l && N.on("raphael.drag.start." + this.id, l),
            o && N.on("raphael.drag.move." + this.id, o),
            h && N.on("raphael.drag.end." + this.id, h),
            N(
              "raphael.drag.start." + this.id,
              c || u || this,
              t.clientX + n,
              t.clientY + i,
              t
            );
        }
        return (
          (this._drag = {}),
          Vt.push({ el: this, start: t }),
          this.mousedown(t),
          this
        );
      }),
        (qt.onDragOver = function (t) {
          t
            ? N.on("raphael.drag.over." + this.id, t)
            : N.unbind("raphael.drag.over." + this.id);
        }),
        (qt.undrag = function () {
          for (var t = Vt.length; t--; )
            Vt[t].el == this &&
              (this.unmousedown(Vt[t].start),
              Vt.splice(t, 1),
              N.unbind("raphael.drag.*." + this.id));
          Vt.length || j.unmousemove(Ft).unmouseup(jt), (It = []);
        }),
        (K.circle = function (t, e, r) {
          r = j._engine.circle(this, t || 0, e || 0, r || 0);
          return this.__set__ && this.__set__.push(r), r;
        }),
        (K.rect = function (t, e, r, i, n) {
          n = j._engine.rect(this, t || 0, e || 0, r || 0, i || 0, n || 0);
          return this.__set__ && this.__set__.push(n), n;
        }),
        (K.ellipse = function (t, e, r, i) {
          i = j._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
          return this.__set__ && this.__set__.push(i), i;
        }),
        (K.path = function (t) {
          !t || j.is(t, u) || j.is(t[0], v) || (t += "");
          var e = j._engine.path(j.format[x](j, arguments), this);
          return this.__set__ && this.__set__.push(e), e;
        }),
        (K.image = function (t, e, r, i, n) {
          n = j._engine.image(
            this,
            t || "about:blank",
            e || 0,
            r || 0,
            i || 0,
            n || 0
          );
          return this.__set__ && this.__set__.push(n), n;
        }),
        (K.text = function (t, e, r) {
          r = j._engine.text(this, t || 0, e || 0, P(r));
          return this.__set__ && this.__set__.push(r), r;
        }),
        (K.set = function (t) {
          j.is(t, "array") ||
            (t = Array.prototype.splice.call(arguments, 0, arguments.length));
          var e = new re(t);
          return (
            this.__set__ && this.__set__.push(e),
            (e.paper = this),
            (e.type = "set"),
            e
          );
        }),
        (K.setStart = function (t) {
          this.__set__ = t || this.set();
        }),
        (K.setFinish = function (t) {
          var e = this.__set__;
          return delete this.__set__, e;
        }),
        (K.setSize = function (t, e) {
          return j._engine.setSize.call(this, t, e);
        }),
        (K.setViewBox = function (t, e, r, i, n) {
          return j._engine.setViewBox.call(this, t, e, r, i, n);
        }),
        (K.top = K.bottom = null),
        (K.raphael = j);
      function Ot() {
        return this.x + w + this.y + w + this.width + " × " + this.height;
      }
      (K.getElementByPoint = function (t, e) {
        var r,
          i,
          n,
          s,
          a,
          o = this.canvas,
          l = d.doc.elementFromPoint(t, e);
        if (
          (d.win.opera &&
            "svg" == l.tagName &&
            ((i = (r = o).getBoundingClientRect()),
            (n = r.ownerDocument),
            (s = n.body),
            (a = n.documentElement),
            (r = a.clientTop || s.clientTop || 0),
            (n = a.clientLeft || s.clientLeft || 0),
            (s = {
              y: i.top + (d.win.pageYOffset || a.scrollTop || s.scrollTop) - r,
              x:
                i.left +
                (d.win.pageXOffset || a.scrollLeft || s.scrollLeft) -
                n,
            }),
            ((n = o.createSVGRect()).x = t - s.x),
            (n.y = e - s.y),
            (n.width = n.height = 1),
            (n = o.getIntersectionList(n, null)).length &&
              (l = n[n.length - 1])),
          !l)
        )
          return null;
        for (; l.parentNode && l != o.parentNode && !l.raphael; )
          l = l.parentNode;
        return (
          l == this.canvas.parentNode && (l = o),
          (l = l && l.raphael ? this.getById(l.raphaelid) : null)
        );
      }),
        (K.getElementsByBBox = function (e) {
          var r = this.set();
          return (
            this.forEach(function (t) {
              j.isBBoxIntersect(t.getBBox(), e) && r.push(t);
            }),
            r
          );
        }),
        (K.getById = function (t) {
          for (var e = this.bottom; e; ) {
            if (e.id == t) return e;
            e = e.next;
          }
          return null;
        }),
        (K.forEach = function (t, e) {
          for (var r = this.bottom; r; ) {
            if (!1 === t.call(e, r)) return this;
            r = r.next;
          }
          return this;
        }),
        (K.getElementsByPoint = function (e, r) {
          var i = this.set();
          return (
            this.forEach(function (t) {
              t.isPointInside(e, r) && i.push(t);
            }),
            i
          );
        }),
        (qt.isPointInside = function (t, e) {
          var r = (this.realPath = Z[this.type](this));
          return (
            this.attr("transform") &&
              this.attr("transform").length &&
              (r = j.transformPath(r, this.attr("transform"))),
            j.isPointInsidePath(r, t, e)
          );
        }),
        (qt.getBBox = function (t) {
          if (this.removed) return {};
          var e = this._;
          return t
            ? ((!e.dirty && e.bboxwt) ||
                ((this.realPath = Z[this.type](this)),
                (e.bboxwt = vt(this.realPath)),
                (e.bboxwt.toString = Ot),
                (e.dirty = 0)),
              e.bboxwt)
            : ((!e.dirty && !e.dirtyT && e.bbox) ||
                ((!e.dirty && this.realPath) ||
                  ((e.bboxwt = 0), (this.realPath = Z[this.type](this))),
                (e.bbox = vt(Q(this.realPath, this.matrix))),
                (e.bbox.toString = Ot),
                (e.dirty = e.dirtyT = 0)),
              e.bbox);
        }),
        (qt.clone = function () {
          if (this.removed) return null;
          var t = this.paper[this.type]().attr(this.attr());
          return this.__set__ && this.__set__.push(t), t;
        }),
        (qt.glow = function (t) {
          if ("text" == this.type) return null;
          for (
            var e = {
                width:
                  ((t = t || {}).width || 10) +
                  (+this.attr("stroke-width") || 1),
                fill: t.fill || !1,
                opacity: t.opacity || 0.5,
                offsetx: t.offsetx || 0,
                offsety: t.offsety || 0,
                color: t.color || "#000",
              },
              r = e.width / 2,
              i = this.paper,
              n = i.set(),
              s = this.realPath || Z[this.type](this),
              s = this.matrix ? Q(s, this.matrix) : s,
              a = 1;
            a < 1 + r;
            a++
          )
            n.push(
              i.path(s).attr({
                stroke: e.color,
                fill: e.fill ? e.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +((e.width / r) * a).toFixed(3),
                opacity: +(e.opacity / r).toFixed(3),
              })
            );
          return n.insertBefore(this).translate(e.offsetx, e.offsety);
        });
      function Yt(t, e, r, i, n, s, a, o, l) {
        return null == l
          ? ft(t, e, r, i, n, s, a, o)
          : j.findDotsAtSegment(
              t,
              e,
              r,
              i,
              n,
              s,
              a,
              o,
              (function (t, e, r, i, n, s, a, o, l) {
                if (!(l < 0 || ft(t, e, r, i, n, s, a, o) < l)) {
                  for (
                    var h = 0.5, u = 1 - h, c = ft(t, e, r, i, n, s, a, o, u);
                    0.01 < S(c - l);

                  )
                    c = ft(
                      t,
                      e,
                      r,
                      i,
                      n,
                      s,
                      a,
                      o,
                      (u += (c < l ? 1 : -1) * (h /= 2))
                    );
                  return u;
                }
              })(t, e, r, i, n, s, a, o, l)
            );
      }
      var o = function (p, d) {
          return function (t, e, r) {
            for (
              var i,
                n,
                s,
                a,
                o,
                l = "",
                h = {},
                u = 0,
                c = 0,
                f = (t = Ct(t)).length;
              c < f;
              c++
            ) {
              if ("M" == (s = t[c])[0]) (i = +s[1]), (n = +s[2]);
              else {
                if (
                  e <
                  u + (a = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6]))
                ) {
                  if (d && !h.start) {
                    if (
                      ((l += [
                        "C" +
                          (o = Yt(
                            i,
                            n,
                            s[1],
                            s[2],
                            s[3],
                            s[4],
                            s[5],
                            s[6],
                            e - u
                          )).start.x,
                        o.start.y,
                        o.m.x,
                        o.m.y,
                        o.x,
                        o.y,
                      ]),
                      r)
                    )
                      return l;
                    (h.start = l),
                      (l = [
                        "M" + o.x,
                        o.y + "C" + o.n.x,
                        o.n.y,
                        o.end.x,
                        o.end.y,
                        s[5],
                        s[6],
                      ].join()),
                      (u += a),
                      (i = +s[5]),
                      (n = +s[6]);
                    continue;
                  }
                  if (!p && !d)
                    return {
                      x: (o = Yt(
                        i,
                        n,
                        s[1],
                        s[2],
                        s[3],
                        s[4],
                        s[5],
                        s[6],
                        e - u
                      )).x,
                      y: o.y,
                      alpha: o.alpha,
                    };
                }
                (u += a), (i = +s[5]), (n = +s[6]);
              }
              l += s.shift() + s;
            }
            return (
              (h.end = l),
              (o = p
                ? u
                : d
                ? h
                : j.findDotsAtSegment(
                    i,
                    n,
                    s[0],
                    s[1],
                    s[2],
                    s[3],
                    s[4],
                    s[5],
                    1
                  )).alpha && (o = { x: o.x, y: o.y, alpha: o.alpha }),
              o
            );
          };
        },
        Gt = o(1),
        Wt = o(),
        Xt = o(0, 1);
      (j.getTotalLength = Gt),
        (j.getPointAtLength = Wt),
        (j.getSubpath = function (t, e, r) {
          if (this.getTotalLength(t) - r < 1e-6) return Xt(t, e).end;
          r = Xt(t, r, 1);
          return e ? Xt(r, e).end : r;
        }),
        (qt.getTotalLength = function () {
          var t = this.getPath();
          if (t)
            return this.node.getTotalLength
              ? this.node.getTotalLength()
              : Gt(t);
        }),
        (qt.getPointAtLength = function (t) {
          var e = this.getPath();
          if (e) return Wt(e, t);
        }),
        (qt.getPath = function () {
          var t,
            e = j._getPath[this.type];
          if ("text" != this.type && "set" != this.type)
            return e && (t = e(this)), t;
        }),
        (qt.getSubpath = function (t, e) {
          var r = this.getPath();
          if (r) return j.getSubpath(r, t, e);
        });
      o = j.easing_formulas = {
        linear: function (t) {
          return t;
        },
        "<": function (t) {
          return m(t, 1.7);
        },
        ">": function (t) {
          return m(t, 0.48);
        },
        "<>": function (t) {
          var e = 0.48 - t / 1.04,
            r = B.sqrt(0.1734 + e * e),
            t = r - e,
            e = -r - e,
            e =
              m(S(t), 1 / 3) * (t < 0 ? -1 : 1) +
              m(S(e), 1 / 3) * (e < 0 ? -1 : 1) +
              0.5;
          return 3 * (1 - e) * e * e + e * e * e;
        },
        backIn: function (t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        backOut: function (t) {
          return --t * t * (2.70158 * t + 1.70158) + 1;
        },
        elastic: function (t) {
          return t == !!t
            ? t
            : m(2, -10 * t) * B.sin((2 * T * (t - 0.075)) / 0.3) + 1;
        },
        bounce: function (t) {
          var e = 7.5625,
            r = 2.75,
            t =
              t < 1 / r
                ? e * t * t
                : t < 2 / r
                ? e * (t -= 1.5 / r) * t + 0.75
                : t < 2.5 / r
                ? e * (t -= 2.25 / r) * t + 0.9375
                : e * (t -= 2.625 / r) * t + 0.984375;
          return t;
        },
      };
      (o.easeIn = o["ease-in"] = o["<"]),
        (o.easeOut = o["ease-out"] = o[">"]),
        (o.easeInOut = o["ease-in-out"] = o["<>"]),
        (o["back-in"] = o.backIn),
        (o["back-out"] = o.backOut);
      var Ht = [],
        Ut =
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          t.msRequestAnimationFrame ||
          function (t) {
            setTimeout(t, 16);
          },
        $t = function () {
          for (var t = +new Date(), e = 0; e < Ht.length; e++) {
            var r = Ht[e];
            if (!r.el.removed && !r.paused) {
              var i,
                n = t - r.start,
                s = r.ms,
                a = r.easing,
                o = r.from,
                l = r.diff,
                h = r.to,
                u = (r.t, r.el),
                c = {},
                f = {};
              if (
                (r.initstatus
                  ? ((n =
                      ((r.initstatus * r.anim.top - r.prev) /
                        (r.percent - r.prev)) *
                      s),
                    (r.status = r.initstatus),
                    delete r.initstatus,
                    r.stop && Ht.splice(e--, 1))
                  : (r.status =
                      (r.prev + (r.percent - r.prev) * (n / s)) / r.anim.top),
                !(n < 0))
              )
                if (n < s) {
                  var p,
                    d = a(n / s);
                  for (p in o)
                    if (o[L](p)) {
                      switch (D[p]) {
                        case F:
                          b = +o[p] + d * s * l[p];
                          break;
                        case "colour":
                          b =
                            "rgb(" +
                            [
                              Zt(C(o[p].r + d * s * l[p].r)),
                              Zt(C(o[p].g + d * s * l[p].g)),
                              Zt(C(o[p].b + d * s * l[p].b)),
                            ].join(",") +
                            ")";
                          break;
                        case "path":
                          b = [];
                          for (var g = 0, x = o[p].length; g < x; g++) {
                            b[g] = [o[p][g][0]];
                            for (var y = 1, m = o[p][g].length; y < m; y++)
                              b[g][y] = +o[p][g][y] + d * s * l[p][g][y];
                            b[g] = b[g].join(w);
                          }
                          b = b.join(w);
                          break;
                        case "transform":
                          if (l[p].real)
                            for (b = [], g = 0, x = o[p].length; g < x; g++)
                              for (
                                b[g] = [o[p][g][0]], y = 1, m = o[p][g].length;
                                y < m;
                                y++
                              )
                                b[g][y] = o[p][g][y] + d * s * l[p][g][y];
                          else {
                            function v(t) {
                              return +o[p][t] + d * s * l[p][t];
                            }
                            var b = [["m", v(0), v(1), v(2), v(3), v(4), v(5)]];
                          }
                          break;
                        case "csv":
                          if ("clip-rect" == p)
                            for (b = [], g = 4; g--; )
                              b[g] = +o[p][g] + d * s * l[p][g];
                          break;
                        default:
                          var _ = [][M](o[p]);
                          for (
                            b = [], g = u.paper.customAttributes[p].length;
                            g--;

                          )
                            b[g] = +_[g] + d * s * l[p][g];
                      }
                      c[p] = b;
                    }
                  u.attr(c),
                    (function (t, e, r) {
                      setTimeout(function () {
                        N("raphael.anim.frame." + t, e, r);
                      });
                    })(u.id, u, r.anim);
                } else {
                  if (
                    (!(function (t, e, r) {
                      setTimeout(function () {
                        N("raphael.anim.frame." + e.id, e, r),
                          N("raphael.anim.finish." + e.id, e, r),
                          j.is(t, "function") && t.call(e);
                      });
                    })(r.callback, u, r.anim),
                    u.attr(h),
                    Ht.splice(e--, 1),
                    1 < r.repeat && !r.next)
                  ) {
                    for (i in h) h[L](i) && (f[i] = r.totalOrigin[i]);
                    r.el.attr(f),
                      Kt(
                        r.anim,
                        r.el,
                        r.anim.percents[0],
                        null,
                        r.totalOrigin,
                        r.repeat - 1
                      );
                  }
                  r.next &&
                    !r.stop &&
                    Kt(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
                }
            }
          }
          j.svg && u && u.paper && u.paper.safari(), Ht.length && Ut($t);
        },
        Zt = function (t) {
          return 255 < t ? 255 : t < 0 ? 0 : t;
        };
      function Qt(t, e, r, i, n, s) {
        var a,
          l = 3 * e,
          h = 3 * (i - e) - l,
          u = 1 - l - h,
          o = 3 * r,
          c = 3 * (n - r) - o,
          f = 1 - o - c;
        function p(t) {
          return ((u * t + h) * t + l) * t;
        }
        return (
          (a = (function (t, e) {
            var r, i, n, s, a, o;
            for (n = t, o = 0; o < 8; o++) {
              if (((s = p(n) - t), S(s) < e)) return n;
              if (S((a = (3 * u * n + 2 * h) * n + l)) < 1e-6) break;
              n -= s / a;
            }
            if (((i = 1), (n = t) < (r = 0))) return r;
            if (i < n) return i;
            for (; r < i; ) {
              if (((s = p(n)), S(s - t) < e)) return n;
              s < t ? (r = n) : (i = n), (n = (i - r) / 2 + r);
            }
            return n;
          })(t, (a = 1 / (200 * s)))),
          ((f * a + c) * a + o) * a
        );
      }
      function Jt(t, e) {
        var r = [],
          i = {};
        if (((this.ms = e), (this.times = 1), t)) {
          for (var n in t) t[L](n) && ((i[I(n)] = t[n]), r.push(I(n)));
          r.sort(s);
        }
        (this.anim = i), (this.top = r[r.length - 1]), (this.percents = r);
      }
      function Kt(t, e, r, i, n, s) {
        r = I(r);
        var a,
          o,
          l,
          h,
          u,
          c = t.ms,
          f = {},
          p = {},
          d = {};
        if (i)
          for (x = 0, y = Ht.length; x < y; x++) {
            var g = Ht[x];
            if (g.el.id == e.id && g.anim == t) {
              g.percent != r ? (Ht.splice(x, 1), (l = 1)) : (o = g),
                e.attr(g.totalOrigin);
              break;
            }
          }
        else i = +p;
        for (var x = 0, y = t.percents.length; x < y; x++) {
          if (t.percents[x] == r || t.percents[x] > i * t.top) {
            (r = t.percents[x]),
              (u = t.percents[x - 1] || 0),
              (c = (c / t.top) * (r - u)),
              (h = t.percents[x + 1]),
              (a = t.anim[r]);
            break;
          }
          i && e.attr(t.anim[t.percents[x]]);
        }
        if (a) {
          if (o) (o.initstatus = i), (o.start = new Date() - o.ms * i);
          else {
            for (var m in a)
              if (a[L](m) && (D[L](m) || e.paper.customAttributes[L](m)))
                switch (
                  ((f[m] = e.attr(m)),
                  null == f[m] && (f[m] = q[m]),
                  (p[m] = a[m]),
                  D[m])
                ) {
                  case F:
                    d[m] = (p[m] - f[m]) / c;
                    break;
                  case "colour":
                    f[m] = j.getRGB(f[m]);
                    var v = j.getRGB(p[m]);
                    d[m] = {
                      r: (v.r - f[m].r) / c,
                      g: (v.g - f[m].g) / c,
                      b: (v.b - f[m].b) / c,
                    };
                    break;
                  case "path":
                    var b = Ct(f[m], p[m]),
                      _ = b[1];
                    for (
                      f[m] = b[0], d[m] = [], x = 0, y = f[m].length;
                      x < y;
                      x++
                    ) {
                      d[m][x] = [0];
                      for (var w = 1, k = f[m][x].length; w < k; w++)
                        d[m][x][w] = (_[x][w] - f[m][x][w]) / c;
                    }
                    break;
                  case "transform":
                    (v = e._), (b = At(v[m], p[m]));
                    if (b)
                      for (
                        f[m] = b.from,
                          p[m] = b.to,
                          d[m] = [],
                          d[m].real = !0,
                          x = 0,
                          y = f[m].length;
                        x < y;
                        x++
                      )
                        for (
                          d[m][x] = [f[m][x][0]], w = 1, k = f[m][x].length;
                          w < k;
                          w++
                        )
                          d[m][x][w] = (p[m][x][w] - f[m][x][w]) / c;
                    else {
                      (b = e.matrix || new Nt()),
                        (v = {
                          _: { transform: v.transform },
                          getBBox: function () {
                            return e.getBBox(1);
                          },
                        });
                      (f[m] = [b.a, b.b, b.c, b.d, b.e, b.f]),
                        Tt(v, p[m]),
                        (p[m] = v._.transform),
                        (d[m] = [
                          (v.matrix.a - b.a) / c,
                          (v.matrix.b - b.b) / c,
                          (v.matrix.c - b.c) / c,
                          (v.matrix.d - b.d) / c,
                          (v.matrix.e - b.e) / c,
                          (v.matrix.f - b.f) / c,
                        ]);
                    }
                    break;
                  case "csv":
                    var C = P(a[m])[z](E),
                      B = P(f[m])[z](E);
                    if ("clip-rect" == m)
                      for (f[m] = B, d[m] = [], x = B.length; x--; )
                        d[m][x] = (C[x] - f[m][x]) / c;
                    p[m] = C;
                    break;
                  default:
                    for (
                      C = [][M](a[m]),
                        B = [][M](f[m]),
                        d[m] = [],
                        x = e.paper.customAttributes[m].length;
                      x--;

                    )
                      d[m][x] = ((C[x] || 0) - (B[x] || 0)) / c;
                }
            var S,
              T = a.easing,
              A = j.easing_formulas[T];
            if (
              ((A =
                A ||
                ((A = P(T).match(R)) && 5 == A.length
                  ? ((S = A),
                    function (t) {
                      return Qt(t, +S[1], +S[2], +S[3], +S[4], c);
                    })
                  : U)),
              (T = a.start || t.start || +new Date()),
              (g = {
                anim: t,
                percent: r,
                timestamp: T,
                start: T + (t.del || 0),
                status: 0,
                initstatus: i || 0,
                stop: !1,
                ms: c,
                easing: A,
                from: f,
                diff: d,
                to: p,
                el: e,
                callback: a.callback,
                prev: u,
                next: h,
                repeat: s || t.times,
                origin: e.attr(),
                totalOrigin: n,
              }),
              Ht.push(g),
              i &&
                !o &&
                !l &&
                ((g.stop = !0), (g.start = new Date() - c * i), 1 == Ht.length))
            )
              return $t();
            l && (g.start = new Date() - g.ms * i), 1 == Ht.length && Ut($t);
          }
          N("raphael.anim.start." + e.id, e, t);
        }
      }
      function te(t) {
        for (var e = 0; e < Ht.length; e++)
          Ht[e].el.paper == t && Ht.splice(e--, 1);
      }
      (qt.animateWith = function (t, e, r, i, n, s) {
        var a = this;
        if (a.removed) return s && s.call(a), a;
        s = r instanceof Jt ? r : j.animation(r, i, n, s);
        Kt(s, a, s.percents[0], null, a.attr());
        for (var o = 0, l = Ht.length; o < l; o++)
          if (Ht[o].anim == e && Ht[o].el == t) {
            Ht[l - 1].start = Ht[o].start;
            break;
          }
        return a;
      }),
        (qt.onAnimation = function (t) {
          return (
            t
              ? N.on("raphael.anim.frame." + this.id, t)
              : N.unbind("raphael.anim.frame." + this.id),
            this
          );
        }),
        (Jt.prototype.delay = function (t) {
          var e = new Jt(this.anim, this.ms);
          return (e.times = this.times), (e.del = +t || 0), e;
        }),
        (Jt.prototype.repeat = function (t) {
          var e = new Jt(this.anim, this.ms);
          return (e.del = this.del), (e.times = B.floor(_(t, 0)) || 1), e;
        }),
        (j.animation = function (t, e, r, i) {
          if (t instanceof Jt) return t;
          (!j.is(r, "function") && r) || ((i = i || r || null), (r = null)),
            (e = +e || 0);
          var n,
            s,
            a = {};
          for (s in (t = Object(t)))
            t[L](s) &&
              I(s) != s &&
              I(s) + "%" != s &&
              ((n = !0), (a[s] = t[s]));
          return n
            ? (r && (a.easing = r),
              i && (a.callback = i),
              new Jt({ 100: a }, e))
            : new Jt(t, e);
        }),
        (qt.animate = function (t, e, r, i) {
          var n = this;
          if (n.removed) return i && i.call(n), n;
          i = t instanceof Jt ? t : j.animation(t, e, r, i);
          return Kt(i, n, i.percents[0], null, n.attr()), n;
        }),
        (qt.setTime = function (t, e) {
          return t && null != e && this.status(t, k(e, t.ms) / t.ms), this;
        }),
        (qt.status = function (t, e) {
          var r,
            i,
            n = [],
            s = 0;
          if (null != e) return Kt(t, this, -1, k(e, 1)), this;
          for (r = Ht.length; s < r; s++)
            if ((i = Ht[s]).el.id == this.id && (!t || i.anim == t)) {
              if (t) return i.status;
              n.push({ anim: i.anim, status: i.status });
            }
          return t ? 0 : n;
        }),
        (qt.pause = function (t) {
          for (var e = 0; e < Ht.length; e++)
            Ht[e].el.id != this.id ||
              (t && Ht[e].anim != t) ||
              (!1 !== N("raphael.anim.pause." + this.id, this, Ht[e].anim) &&
                (Ht[e].paused = !0));
          return this;
        }),
        (qt.resume = function (t) {
          for (var e, r = 0; r < Ht.length; r++)
            Ht[r].el.id != this.id ||
              (t && Ht[r].anim != t) ||
              ((e = Ht[r]),
              !1 !== N("raphael.anim.resume." + this.id, this, e.anim) &&
                (delete e.paused, this.status(e.anim, e.status)));
          return this;
        }),
        (qt.stop = function (t) {
          for (var e = 0; e < Ht.length; e++)
            Ht[e].el.id != this.id ||
              (t && Ht[e].anim != t) ||
              (!1 !== N("raphael.anim.stop." + this.id, this, Ht[e].anim) &&
                Ht.splice(e--, 1));
          return this;
        }),
        N.on("raphael.remove", te),
        N.on("raphael.clear", te),
        (qt.toString = function () {
          return "Raphaël’s object";
        });
      var ee,
        re = function (t) {
          if (((this.items = []), (this.length = 0), (this.type = "set"), t))
            for (var e = 0, r = t.length; e < r; e++)
              !t[e] ||
                (t[e].constructor != qt.constructor &&
                  t[e].constructor != re) ||
                ((this[this.items.length] = this.items[this.items.length] =
                  t[e]),
                this.length++);
        },
        ie = re.prototype;
      for (ee in ((ie.push = function () {
        for (var t, e, r = 0, i = arguments.length; r < i; r++)
          !(t = arguments[r]) ||
            (t.constructor != qt.constructor && t.constructor != re) ||
            ((this[(e = this.items.length)] = this.items[e] = t),
            this.length++);
        return this;
      }),
      (ie.pop = function () {
        return this.length && delete this[this.length--], this.items.pop();
      }),
      (ie.forEach = function (t, e) {
        for (var r = 0, i = this.items.length; r < i; r++)
          if (!1 === t.call(e, this.items[r], r)) return this;
        return this;
      }),
      qt))
        qt[L](ee) &&
          (ie[ee] = (function (r) {
            return function () {
              var e = arguments;
              return this.forEach(function (t) {
                t[r][x](t, e);
              });
            };
          })(ee));
      (ie.attr = function (t, e) {
        if (t && j.is(t, v) && j.is(t[0], "object"))
          for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]);
        else
          for (var n = 0, s = this.items.length; n < s; n++)
            this.items[n].attr(t, e);
        return this;
      }),
        (ie.clear = function () {
          for (; this.length; ) this.pop();
        }),
        (ie.splice = function (t, e, r) {
          (t = t < 0 ? _(this.length + t, 0) : t),
            (e = _(0, k(this.length - t, e)));
          for (var i = [], n = [], s = [], a = 2; a < arguments.length; a++)
            s.push(arguments[a]);
          for (a = 0; a < e; a++) n.push(this[t + a]);
          for (; a < this.length - t; a++) i.push(this[t + a]);
          var o = s.length;
          for (a = 0; a < o + i.length; a++)
            this.items[t + a] = this[t + a] = a < o ? s[a] : i[a - o];
          for (a = this.items.length = this.length -= e - o; this[a]; )
            delete this[a++];
          return new re(n);
        }),
        (ie.exclude = function (t) {
          for (var e = 0, r = this.length; e < r; e++)
            if (this[e] == t) return this.splice(e, 1), !0;
        }),
        (ie.animate = function (t, e, r, i) {
          (!j.is(r, "function") && r) || (i = r || null);
          var n,
            s = this.items.length,
            a = s,
            o = this;
          if (!s) return this;
          i &&
            (n = function () {
              --s || i.call(o);
            }),
            (r = j.is(r, u) ? r : n);
          for (
            var l = j.animation(t, e, r, n), h = this.items[--a].animate(l);
            a--;

          )
            this.items[a] &&
              !this.items[a].removed &&
              this.items[a].animateWith(h, l, l),
              (this.items[a] && !this.items[a].removed) || s--;
          return this;
        }),
        (ie.insertAfter = function (t) {
          for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
          return this;
        }),
        (ie.getBBox = function () {
          for (
            var t, e = [], r = [], i = [], n = [], s = this.items.length;
            s--;

          )
            this.items[s].removed ||
              ((t = this.items[s].getBBox()),
              e.push(t.x),
              r.push(t.y),
              i.push(t.x + t.width),
              n.push(t.y + t.height));
          return {
            x: (e = k[x](0, e)),
            y: (r = k[x](0, r)),
            x2: (i = _[x](0, i)),
            y2: (n = _[x](0, n)),
            width: i - e,
            height: n - r,
          };
        }),
        (ie.clone = function (t) {
          t = this.paper.set();
          for (var e = 0, r = this.items.length; e < r; e++)
            t.push(this.items[e].clone());
          return t;
        }),
        (ie.toString = function () {
          return "Raphaël‘s set";
        }),
        (ie.glow = function (r) {
          var i = this.paper.set();
          return (
            this.forEach(function (t, e) {
              t = t.glow(r);
              null != t &&
                t.forEach(function (t, e) {
                  i.push(t);
                });
            }),
            i
          );
        }),
        (ie.isPointInside = function (e, r) {
          var i = !1;
          return (
            this.forEach(function (t) {
              if (t.isPointInside(e, r))
                return console.log("runned"), !(i = !0);
            }),
            i
          );
        }),
        (j.registerFont = function (t) {
          if (!t.face) return t;
          this.fonts = this.fonts || {};
          var e,
            r = { w: t.w, face: {}, glyphs: {} },
            i = t.face["font-family"];
          for (e in t.face) t.face[L](e) && (r.face[e] = t.face[e]);
          if (
            (this.fonts[i] ? this.fonts[i].push(r) : (this.fonts[i] = [r]),
            !t.svg)
          )
            for (var n in ((r.face["units-per-em"] = b(
              t.face["units-per-em"],
              10
            )),
            t.glyphs))
              if (t.glyphs[L](n)) {
                var s = t.glyphs[n];
                if (
                  ((r.glyphs[n] = {
                    w: s.w,
                    k: {},
                    d:
                      s.d &&
                      "M" +
                        s.d.replace(/[mlcxtrv]/g, function (t) {
                          return (
                            { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[
                              t
                            ] || "M"
                          );
                        }) +
                        "z",
                  }),
                  s.k)
                )
                  for (var a in s.k) s[L](a) && (r.glyphs[n].k[a] = s.k[a]);
              }
          return t;
        }),
        (K.getFont = function (t, e, r, i) {
          if (
            ((i = i || "normal"),
            (r = r || "normal"),
            (e =
              +e ||
              { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] ||
              400),
            j.fonts)
          ) {
            var n,
              s = j.fonts[t];
            if (!s) {
              var a,
                o = new RegExp(
                  "(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)",
                  "i"
                );
              for (a in j.fonts)
                if (j.fonts[L](a) && o.test(a)) {
                  s = j.fonts[a];
                  break;
                }
            }
            if (s)
              for (
                var l = 0, h = s.length;
                l < h &&
                ((n = s[l]).face["font-weight"] != e ||
                  (n.face["font-style"] != r && n.face["font-style"]) ||
                  n.face["font-stretch"] != i);
                l++
              );
            return n;
          }
        }),
        (K.print = function (t, e, r, i, n, s, a, o) {
          (s = s || "middle"),
            (a = _(k(a || 0, 1), -1)),
            (o = _(k(o || 1, 3), 1));
          var l,
            h = P(r)[z](""),
            u = 0,
            c = 0,
            f = "";
          if ((j.is(i, "string") && (i = this.getFont(i)), i)) {
            l = (n || 16) / i.face["units-per-em"];
            for (
              var p,
                d,
                n = i.face.bbox[z](E),
                g = +n[0],
                x = n[3] - n[1],
                y = 0,
                m = +n[1] + ("baseline" == s ? x + +i.face.descent : x / 2),
                v = 0,
                b = h.length;
              v < b;
              v++
            )
              "\n" == h[v]
                ? ((c = d = u = 0), (y += x * o))
                : ((p = (c && i.glyphs[h[v - 1]]) || {}),
                  (d = i.glyphs[h[v]]),
                  (u += c
                    ? (p.w || i.w) + ((p.k && p.k[h[v]]) || 0) + i.w * a
                    : 0),
                  (c = 1)),
                d &&
                  d.d &&
                  (f += j.transformPath(d.d, [
                    "t",
                    u * l,
                    y * l,
                    "s",
                    l,
                    l,
                    g,
                    m,
                    "t",
                    (t - g) / l,
                    (e - m) / l,
                  ]));
          }
          return this.path(f).attr({ fill: "#000", stroke: "none" });
        }),
        (K.add = function (t) {
          if (j.is(t, "array"))
            for (var e, r = this.set(), i = 0, n = t.length; i < n; i++)
              (e = t[i] || {}), a[L](e.type) && r.push(this[e.type]().attr(e));
          return r;
        }),
        (j.format = function (t, e) {
          var r = j.is(e, v) ? [0][M](e) : arguments;
          return (
            t &&
              j.is(t, u) &&
              r.length - 1 &&
              (t = t.replace(n, function (t, e) {
                return null == r[++e] ? "" : r[e];
              })),
            t || ""
          );
        }),
        (j.fullfill = (function () {
          var e = /\{([^\}]+)\}/g,
            n = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
          return function (t, i) {
            return String(t).replace(e, function (t, e) {
              return (
                (r = t),
                (s = t = i),
                e.replace(n, function (t, e, r, i, n) {
                  (e = e || i),
                    s &&
                      (e in s && (s = s[e]),
                      "function" == typeof s && n && (s = s()));
                }),
                (s = (null == s || s == t ? r : s) + "")
              );
              var r, s;
            });
          };
        })()),
        (j.ninja = function () {
          return r.was ? (d.win.Raphael = r.is) : delete t.Raphael, j;
        }),
        (j.st = ie),
        (function (e, t, r) {
          null == e.readyState &&
            e.addEventListener &&
            (e.addEventListener(
              t,
              (r = function () {
                e.removeEventListener(t, r, !1), (e.readyState = "complete");
              }),
              !1
            ),
            (e.readyState = "loading")),
            (function t() {
              /in/.test(e.readyState)
                ? setTimeout(t, 9)
                : j.eve("raphael.DOMload");
            })();
        })(document, "DOMContentLoaded"),
        N.on("raphael.DOMload", function () {
          i = !0;
        }),
        (function () {
          if (j.svg) {
            var k = "hasOwnProperty",
              C = String,
              g = parseFloat,
              x = parseInt,
              y = Math,
              m = y.max,
              v = y.abs,
              b = y.pow,
              _ = /[, ]+/,
              f = j.eve,
              w = "http://www.w3.org/1999/xlink",
              B = {
                block: "M5,0 0,2.5 5,5z",
                classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                open: "M6,1 1,3.5 6,6",
                oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z",
              },
              S = {};
            j.toString = function () {
              return (
                "Your browser supports SVG.\nYou are running Raphaël " +
                this.version
              );
            };
            function T(t, e) {
              var i = "linear",
                r = t.id + e,
                n = 0.5,
                s = 0.5,
                a = t.node,
                o = t.paper,
                l = a.style,
                h = j._g.doc.getElementById(r);
              if (!h) {
                if (
                  ((e = (e = C(e).replace(
                    j._radial_gradient,
                    function (t, e, r) {
                      return (
                        (i = "radial"),
                        e &&
                          r &&
                          ((n = g(e)),
                          (r = 2 * (0.5 < (s = g(r))) - 1),
                          0.25 < b(n - 0.5, 2) + b(s - 0.5, 2) &&
                            (s = y.sqrt(0.25 - b(n - 0.5, 2)) * r + 0.5) &&
                            0.5 != s &&
                            (s = s.toFixed(5) - 1e-5 * r)),
                        ""
                      );
                    }
                  )).split(/\s*\-\s*/)),
                  "linear" == i)
                ) {
                  var u = e.shift(),
                    u = -g(u);
                  if (isNaN(u)) return null;
                  var c = [0, 0, y.cos(j.rad(u)), y.sin(j.rad(u))],
                    u = 1 / (m(v(c[2]), v(c[3])) || 1);
                  (c[2] *= u),
                    (c[3] *= u),
                    c[2] < 0 && ((c[0] = -c[2]), (c[2] = 0)),
                    c[3] < 0 && ((c[1] = -c[3]), (c[3] = 0));
                }
                var f = j._parseDots(e);
                if (!f) return null;
                if (
                  ((r = r.replace(/[\(\)\s,\xb0#]/g, "_")),
                  t.gradient &&
                    r != t.gradient.id &&
                    (o.defs.removeChild(t.gradient), delete t.gradient),
                  !t.gradient)
                ) {
                  (h = L(i + "Gradient", { id: r })),
                    (t.gradient = h),
                    L(
                      h,
                      "radial" == i
                        ? { fx: n, fy: s }
                        : {
                            x1: c[0],
                            y1: c[1],
                            x2: c[2],
                            y2: c[3],
                            gradientTransform: t.matrix.invert(),
                          }
                    ),
                    o.defs.appendChild(h);
                  for (var p = 0, d = f.length; p < d; p++)
                    h.appendChild(
                      L("stop", {
                        offset: f[p].offset || (p ? "100%" : "0%"),
                        "stop-color": f[p].color || "#fff",
                      })
                    );
                }
              }
              return (
                L(a, {
                  fill: "url(#" + r + ")",
                  opacity: 1,
                  "fill-opacity": 1,
                }),
                (l.fill = ""),
                (l.opacity = 1),
                (l.fillOpacity = 1)
              );
            }
            function A(t) {
              var e = t.getBBox(1);
              L(t.pattern, {
                patternTransform:
                  t.matrix.invert() + " translate(" + e.x + "," + e.y + ")",
              });
            }
            function N(t, e, r) {
              if ("path" == t.type) {
                for (
                  var i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    u,
                    c,
                    f = C(e).toLowerCase().split("-"),
                    p = t.paper,
                    d = r ? "end" : "start",
                    g = t.node,
                    x = t.attrs,
                    y = x["stroke-width"],
                    m = f.length,
                    v = "classic",
                    b = 3,
                    _ = 3,
                    w = 5;
                  m--;

                )
                  switch (f[m]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                      v = f[m];
                      break;
                    case "wide":
                      _ = 5;
                      break;
                    case "narrow":
                      _ = 2;
                      break;
                    case "long":
                      b = 5;
                      break;
                    case "short":
                      b = 2;
                  }
                for (u in ((u =
                  "open" == v
                    ? ((b += 2),
                      (_ += 2),
                      (w += 2),
                      (l = 1),
                      (n = r ? 4 : 1),
                      { fill: "none", stroke: x.stroke })
                    : ((n = l = b / 2), { fill: x.stroke, stroke: "none" })),
                t._.arrows
                  ? r
                    ? (t._.arrows.endPath && S[t._.arrows.endPath]--,
                      t._.arrows.endMarker && S[t._.arrows.endMarker]--)
                    : (t._.arrows.startPath && S[t._.arrows.startPath]--,
                      t._.arrows.startMarker && S[t._.arrows.startMarker]--)
                  : (t._.arrows = {}),
                "none" != v
                  ? ((s = "raphael-marker-" + v),
                    (a = "raphael-marker-" + d + v + b + _),
                    j._g.doc.getElementById(s)
                      ? S[s]++
                      : (p.defs.appendChild(
                          L(L("path"), {
                            "stroke-linecap": "round",
                            d: B[v],
                            id: s,
                          })
                        ),
                        (S[s] = 1)),
                    (o = j._g.doc.getElementById(a))
                      ? (S[a]++, (h = o.getElementsByTagName("use")[0]))
                      : ((o = L(L("marker"), {
                          id: a,
                          markerHeight: _,
                          markerWidth: b,
                          orient: "auto",
                          refX: n,
                          refY: _ / 2,
                        })),
                        (h = L(L("use"), {
                          "xlink:href": "#" + s,
                          transform:
                            (r
                              ? "rotate(180 " + b / 2 + " " + _ / 2 + ") "
                              : "") +
                            "scale(" +
                            b / w +
                            "," +
                            _ / w +
                            ")",
                          "stroke-width": (1 / ((b / w + _ / w) / 2)).toFixed(
                            4
                          ),
                        })),
                        o.appendChild(h),
                        p.defs.appendChild(o),
                        (S[a] = 1)),
                    L(h, u),
                    (l = l * ("diamond" != v && "oval" != v)),
                    (h = r
                      ? ((i = t._.arrows.startdx * y || 0),
                        j.getTotalLength(x.path) - l * y)
                      : ((i = l * y),
                        j.getTotalLength(x.path) -
                          (t._.arrows.enddx * y || 0))),
                    ((u = {})["marker-" + d] = "url(#" + a + ")"),
                    (h || i) && (u.d = j.getSubpath(x.path, i, h)),
                    L(g, u),
                    (t._.arrows[d + "Path"] = s),
                    (t._.arrows[d + "Marker"] = a),
                    (t._.arrows[d + "dx"] = l),
                    (t._.arrows[d + "Type"] = v),
                    (t._.arrows[d + "String"] = e))
                  : ((h = r
                      ? ((i = t._.arrows.startdx * y || 0),
                        j.getTotalLength(x.path) - i)
                      : ((i = 0),
                        j.getTotalLength(x.path) -
                          (t._.arrows.enddx * y || 0))),
                    t._.arrows[d + "Path"] &&
                      L(g, { d: j.getSubpath(x.path, i, h) }),
                    delete t._.arrows[d + "Path"],
                    delete t._.arrows[d + "Marker"],
                    delete t._.arrows[d + "dx"],
                    delete t._.arrows[d + "Type"],
                    delete t._.arrows[d + "String"]),
                S))
                  !S[k](u) ||
                    S[u] ||
                    ((c = j._g.doc.getElementById(u)) &&
                      c.parentNode.removeChild(c));
              }
            }
            function E(t, e, r) {
              if ((e = l[C(e).toLowerCase()])) {
                for (
                  var i = t.attrs["stroke-width"] || "1",
                    n =
                      { round: i, square: i, butt: 0 }[
                        t.attrs["stroke-linecap"] || r["stroke-linecap"]
                      ] || 0,
                    s = [],
                    a = e.length;
                  a--;

                )
                  s[a] = e[a] * i + (a % 2 ? 1 : -1) * n;
                L(t.node, { "stroke-dasharray": s.join(",") });
              }
            }
            function p(t, e) {
              var r,
                i = t.node,
                n = t.attrs,
                s = i.style.visibility;
              for (r in ((i.style.visibility = "hidden"), e))
                if (e[k](r) && j._availableAttrs[k](r)) {
                  var a = e[r];
                  switch (((n[r] = a), r)) {
                    case "blur":
                      t.blur(a);
                      break;
                    case "href":
                    case "title":
                      var o = L("title"),
                        l = j._g.doc.createTextNode(a);
                      o.appendChild(l), i.appendChild(o);
                      break;
                    case "target":
                      var h = i.parentNode;
                      "a" != h.tagName.toLowerCase() &&
                        ((o = L("a")),
                        h.insertBefore(o, i),
                        o.appendChild(i),
                        (h = o)),
                        "target" == r
                          ? h.setAttributeNS(
                              w,
                              "show",
                              "blank" == a ? "new" : a
                            )
                          : h.setAttributeNS(w, r, a);
                      break;
                    case "cursor":
                      i.style.cursor = a;
                      break;
                    case "transform":
                      t.transform(a);
                      break;
                    case "arrow-start":
                      N(t, a);
                      break;
                    case "arrow-end":
                      N(t, a, 1);
                      break;
                    case "clip-rect":
                      var u,
                        l = C(a).split(_);
                      4 == l.length &&
                        (t.clip &&
                          t.clip.parentNode.parentNode.removeChild(
                            t.clip.parentNode
                          ),
                        (h = L("clipPath")),
                        (u = L("rect")),
                        (h.id = j.createUUID()),
                        L(u, { x: l[0], y: l[1], width: l[2], height: l[3] }),
                        h.appendChild(u),
                        t.paper.defs.appendChild(h),
                        L(i, { "clip-path": "url(#" + h.id + ")" }),
                        (t.clip = u)),
                        a ||
                          ((u = i.getAttribute("clip-path")) &&
                            ((d = j._g.doc.getElementById(
                              u.replace(/(^url\(#|\)$)/g, "")
                            )) && d.parentNode.removeChild(d),
                            L(i, { "clip-path": "" }),
                            delete t.clip));
                      break;
                    case "path":
                      "path" == t.type &&
                        (L(i, {
                          d: a ? (n.path = j._pathToAbsolute(a)) : "M0,0",
                        }),
                        (t._.dirty = 1),
                        t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1)));
                      break;
                    case "width":
                      if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fx)) break;
                      (r = "x"), (a = n.x);
                    case "x":
                      n.fx && (a = -n.x - (n.width || 0));
                    case "rx":
                      if ("rx" == r && "rect" == t.type) break;
                    case "cx":
                      i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                      break;
                    case "height":
                      if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fy)) break;
                      (r = "y"), (a = n.y);
                    case "y":
                      n.fy && (a = -n.y - (n.height || 0));
                    case "ry":
                      if ("ry" == r && "rect" == t.type) break;
                    case "cy":
                      i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                      break;
                    case "r":
                      "rect" == t.type
                        ? L(i, { rx: a, ry: a })
                        : i.setAttribute(r, a),
                        (t._.dirty = 1);
                      break;
                    case "src":
                      "image" == t.type && i.setAttributeNS(w, "href", a);
                      break;
                    case "stroke-width":
                      (1 == t._.sx && 1 == t._.sy) ||
                        (a /= m(v(t._.sx), v(t._.sy)) || 1),
                        t.paper._vbSize && (a *= t.paper._vbSize),
                        i.setAttribute(r, a),
                        n["stroke-dasharray"] && E(t, n["stroke-dasharray"], e),
                        t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1));
                      break;
                    case "stroke-dasharray":
                      E(t, a, e);
                      break;
                    case "fill":
                      if (C(a).match(j._ISURL)) {
                        L(i, { fill: a });
                        break;
                      }
                      var c,
                        f,
                        p = j.getRGB(a);
                      if (p.error) {
                        if (
                          ("circle" == t.type ||
                            "ellipse" == t.type ||
                            "r" != C(a).charAt()) &&
                          T(t, a)
                        ) {
                          !("opacity" in n || "fill-opacity" in n) ||
                            ((c = j._g.doc.getElementById(
                              i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                            )) &&
                              ((f = c.getElementsByTagName("stop")),
                              L(f[f.length - 1], {
                                "stop-opacity":
                                  ("opacity" in n ? n.opacity : 1) *
                                  ("fill-opacity" in n ? n["fill-opacity"] : 1),
                              }))),
                            (n.gradient = a),
                            (n.fill = "none");
                          break;
                        }
                      } else
                        delete e.gradient,
                          delete n.gradient,
                          !j.is(n.opacity, "undefined") &&
                            j.is(e.opacity, "undefined") &&
                            L(i, { opacity: n.opacity }),
                          !j.is(n["fill-opacity"], "undefined") &&
                            j.is(e["fill-opacity"], "undefined") &&
                            L(i, { "fill-opacity": n["fill-opacity"] });
                      p[k]("opacity") &&
                        L(i, {
                          "fill-opacity":
                            1 < p.opacity ? p.opacity / 100 : p.opacity,
                        });
                    case "stroke":
                      (p = j.getRGB(a)),
                        i.setAttribute(r, p.hex),
                        "stroke" == r &&
                          p[k]("opacity") &&
                          L(i, {
                            "stroke-opacity":
                              1 < p.opacity ? p.opacity / 100 : p.opacity,
                          }),
                        "stroke" == r &&
                          t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1));
                      break;
                    case "gradient":
                      ("circle" != t.type &&
                        "ellipse" != t.type &&
                        "r" == C(a).charAt()) ||
                        T(t, a);
                      break;
                    case "opacity":
                      n.gradient &&
                        !n[k]("stroke-opacity") &&
                        L(i, { "stroke-opacity": 1 < a ? a / 100 : a });
                    case "fill-opacity":
                      if (n.gradient) {
                        (c = j._g.doc.getElementById(
                          i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                        )) &&
                          ((f = c.getElementsByTagName("stop")),
                          L(f[f.length - 1], { "stop-opacity": a }));
                        break;
                      }
                    default:
                      "font-size" == r && (a = x(a, 10) + "px");
                      var d = r.replace(/(\-.)/g, function (t) {
                        return t.substring(1).toUpperCase();
                      });
                      (i.style[d] = a), (t._.dirty = 1), i.setAttribute(r, a);
                  }
                }
              M(t, e), (i.style.visibility = s);
            }
            function o(t, e) {
              ((this[0] = this.node = t).raphael = !0),
                (this.id = j._oid++),
                (t.raphaelid = this.id),
                (this.matrix = j.matrix()),
                (this.realPath = null),
                (this.paper = e),
                (this.attrs = this.attrs || {}),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  deg: 0,
                  dx: 0,
                  dy: 0,
                  dirty: 1,
                }),
                e.bottom || (e.bottom = this),
                (this.prev = e.top),
                e.top && (e.top.next = this),
                ((e.top = this).next = null);
            }
            var L = function (t, e) {
                if (e)
                  for (var r in ("string" == typeof t && (t = L(t)), e))
                    e[k](r) &&
                      ("xlink:" == r.substring(0, 6)
                        ? t.setAttributeNS(w, r.substring(6), C(e[r]))
                        : t.setAttribute(r, C(e[r])));
                else
                  (t = j._g.doc.createElementNS(
                    "http://www.w3.org/2000/svg",
                    t
                  )).style &&
                    (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return t;
              },
              l = {
                "": [0],
                none: [0],
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3],
              },
              M = function (t, e) {
                if (
                  "text" == t.type &&
                  (e[k]("text") ||
                    e[k]("font") ||
                    e[k]("font-size") ||
                    e[k]("x") ||
                    e[k]("y"))
                ) {
                  var r = t.attrs,
                    i = t.node,
                    n = i.firstChild
                      ? x(
                          j._g.doc.defaultView
                            .getComputedStyle(i.firstChild, "")
                            .getPropertyValue("font-size"),
                          10
                        )
                      : 10;
                  if (e[k]("text")) {
                    for (r.text = e.text; i.firstChild; )
                      i.removeChild(i.firstChild);
                    for (
                      var s,
                        a = C(e.text).split("\n"),
                        o = [],
                        l = 0,
                        h = a.length;
                      l < h;
                      l++
                    )
                      (s = L("tspan")),
                        l && L(s, { dy: 1.2 * n, x: r.x }),
                        s.appendChild(j._g.doc.createTextNode(a[l])),
                        i.appendChild(s),
                        (o[l] = s);
                  } else
                    for (
                      l = 0, h = (o = i.getElementsByTagName("tspan")).length;
                      l < h;
                      l++
                    )
                      l ? L(o[l], { dy: 1.2 * n, x: r.x }) : L(o[0], { dy: 0 });
                  L(i, { x: r.x, y: r.y }), (t._.dirty = 1);
                  (t = t._getBBox()), (t = r.y - (t.y + t.height / 2));
                  t && j.is(t, "finite") && L(o[0], { dy: t });
                }
              },
              t = j.el;
            ((o.prototype = t).constructor = o),
              (j._engine.path = function (t, e) {
                var r = L("path");
                e.canvas && e.canvas.appendChild(r);
                e = new o(r, e);
                return (
                  (e.type = "path"),
                  p(e, { fill: "none", stroke: "#000", path: t }),
                  e
                );
              }),
              (t.rotate = function (t, e, r) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 &&
                      ((e = g(t[1])), (r = g(t[2]))),
                    (t = g(t[0])),
                    null == r && (e = r),
                    (null != e && null != r) ||
                      ((e = (i = this.getBBox(1)).x + i.width / 2),
                      (r = i.y + i.height / 2)),
                    this.transform(this._.transform.concat([["r", t, e, r]]))),
                  this
                );
                var i;
              }),
              (t.scale = function (t, e, r, i) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 &&
                      ((e = g(t[1])), (r = g(t[2])), (i = g(t[3]))),
                    (t = g(t[0])),
                    null == e && (e = t),
                    null == i && (r = i),
                    (null != r && null != i) || (n = this.getBBox(1)),
                    (r = null == r ? n.x + n.width / 2 : r),
                    (i = null == i ? n.y + n.height / 2 : i),
                    this.transform(
                      this._.transform.concat([["s", t, e, r, i]])
                    )),
                  this
                );
                var n;
              }),
              (t.translate = function (t, e) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 && (e = g(t[1])),
                    (t = g(t[0]) || 0),
                    (e = +e || 0),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                  this
                );
              }),
              (t.transform = function (t) {
                var e = this._;
                return null == t
                  ? e.transform
                  : (j._extractTransform(this, t),
                    this.clip &&
                      L(this.clip, { transform: this.matrix.invert() }),
                    this.pattern && A(this),
                    this.node && L(this.node, { transform: this.matrix }),
                    (1 == e.sx && 1 == e.sy) ||
                      ((e = this.attrs[k]("stroke-width")
                        ? this.attrs["stroke-width"]
                        : 1),
                      this.attr({ "stroke-width": e })),
                    this);
              }),
              (t.hide = function () {
                return (
                  this.removed ||
                    this.paper.safari((this.node.style.display = "none")),
                  this
                );
              }),
              (t.show = function () {
                return (
                  this.removed ||
                    this.paper.safari((this.node.style.display = "")),
                  this
                );
              }),
              (t.remove = function () {
                if (!this.removed && this.node.parentNode) {
                  var t,
                    e = this.paper;
                  for (t in (e.__set__ && e.__set__.exclude(this),
                  f.unbind("raphael.*.*." + this.id),
                  this.gradient && e.defs.removeChild(this.gradient),
                  j._tear(this, e),
                  "a" == this.node.parentNode.tagName.toLowerCase()
                    ? this.node.parentNode.parentNode.removeChild(
                        this.node.parentNode
                      )
                    : this.node.parentNode.removeChild(this.node),
                  this))
                    this[t] =
                      "function" == typeof this[t]
                        ? j._removedFactory(t)
                        : null;
                  this.removed = !0;
                }
              }),
              (t._getBBox = function () {
                var t;
                "none" == this.node.style.display && (this.show(), (t = !0));
                var e = {};
                try {
                  e = this.node.getBBox();
                } catch (t) {
                } finally {
                  e = e || {};
                }
                return t && this.hide(), e;
              }),
              (t.attr = function (t, e) {
                if (this.removed) return this;
                if (null == t) {
                  var r,
                    i = {};
                  for (r in this.attrs)
                    this.attrs[k](r) && (i[r] = this.attrs[r]);
                  return (
                    i.gradient &&
                      "none" == i.fill &&
                      (i.fill = i.gradient) &&
                      delete i.gradient,
                    (i.transform = this._.transform),
                    i
                  );
                }
                if (null == e && j.is(t, "string")) {
                  if (
                    "fill" == t &&
                    "none" == this.attrs.fill &&
                    this.attrs.gradient
                  )
                    return this.attrs.gradient;
                  if ("transform" == t) return this._.transform;
                  for (
                    var n = t.split(_), s = {}, a = 0, o = n.length;
                    a < o;
                    a++
                  )
                    (t = n[a]) in this.attrs
                      ? (s[t] = this.attrs[t])
                      : j.is(this.paper.customAttributes[t], "function")
                      ? (s[t] = this.paper.customAttributes[t].def)
                      : (s[t] = j._availableAttrs[t]);
                  return o - 1 ? s : s[n[0]];
                }
                if (null == e && j.is(t, "array")) {
                  for (s = {}, a = 0, o = t.length; a < o; a++)
                    s[t[a]] = this.attr(t[a]);
                  return s;
                }
                var l, h;
                for (h in (null != e
                  ? ((l = {})[t] = e)
                  : null != t && j.is(t, "object") && (l = t),
                l))
                  f("raphael.attr." + h + "." + this.id, this, l[h]);
                for (h in this.paper.customAttributes)
                  if (
                    this.paper.customAttributes[k](h) &&
                    l[k](h) &&
                    j.is(this.paper.customAttributes[h], "function")
                  ) {
                    var u,
                      c = this.paper.customAttributes[h].apply(
                        this,
                        [].concat(l[h])
                      );
                    for (u in ((this.attrs[h] = l[h]), c))
                      c[k](u) && (l[u] = c[u]);
                  }
                return p(this, l), this;
              }),
              (t.toFront = function () {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase()
                  ? this.node.parentNode.parentNode.appendChild(
                      this.node.parentNode
                    )
                  : this.node.parentNode.appendChild(this.node);
                var t = this.paper;
                return t.top != this && j._tofront(this, t), this;
              }),
              (t.toBack = function () {
                if (this.removed) return this;
                var t = this.node.parentNode;
                "a" == t.tagName.toLowerCase()
                  ? t.parentNode.insertBefore(
                      this.node.parentNode,
                      this.node.parentNode.parentNode.firstChild
                    )
                  : t.firstChild != this.node &&
                    t.insertBefore(this.node, this.node.parentNode.firstChild),
                  j._toback(this, this.paper);
                this.paper;
                return this;
              }),
              (t.insertAfter = function (t) {
                if (this.removed) return this;
                var e = t.node || t[t.length - 1].node;
                return (
                  e.nextSibling
                    ? e.parentNode.insertBefore(this.node, e.nextSibling)
                    : e.parentNode.appendChild(this.node),
                  j._insertafter(this, t, this.paper),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                if (this.removed) return this;
                var e = t.node || t[0].node;
                return (
                  e.parentNode.insertBefore(this.node, e),
                  j._insertbefore(this, t, this.paper),
                  this
                );
              }),
              (t.blur = function (t) {
                var e,
                  r,
                  i = this;
                return (
                  0 != +t
                    ? ((e = L("filter")),
                      (r = L("feGaussianBlur")),
                      (i.attrs.blur = t),
                      (e.id = j.createUUID()),
                      L(r, { stdDeviation: +t || 1.5 }),
                      e.appendChild(r),
                      i.paper.defs.appendChild(e),
                      (i._blur = e),
                      L(i.node, { filter: "url(#" + e.id + ")" }))
                    : (i._blur &&
                        (i._blur.parentNode.removeChild(i._blur),
                        delete i._blur,
                        delete i.attrs.blur),
                      i.node.removeAttribute("filter")),
                  i
                );
              }),
              (j._engine.circle = function (t, e, r, i) {
                var n = L("circle");
                t.canvas && t.canvas.appendChild(n);
                t = new o(n, t);
                return (
                  (t.attrs = {
                    cx: e,
                    cy: r,
                    r: i,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "circle"),
                  L(n, t.attrs),
                  t
                );
              }),
              (j._engine.rect = function (t, e, r, i, n, s) {
                var a = L("rect");
                t.canvas && t.canvas.appendChild(a);
                t = new o(a, t);
                return (
                  (t.attrs = {
                    x: e,
                    y: r,
                    width: i,
                    height: n,
                    r: s || 0,
                    rx: s || 0,
                    ry: s || 0,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "rect"),
                  L(a, t.attrs),
                  t
                );
              }),
              (j._engine.ellipse = function (t, e, r, i, n) {
                var s = L("ellipse");
                t.canvas && t.canvas.appendChild(s);
                t = new o(s, t);
                return (
                  (t.attrs = {
                    cx: e,
                    cy: r,
                    rx: i,
                    ry: n,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "ellipse"),
                  L(s, t.attrs),
                  t
                );
              }),
              (j._engine.image = function (t, e, r, i, n, s) {
                var a = L("image");
                L(a, {
                  x: r,
                  y: i,
                  width: n,
                  height: s,
                  preserveAspectRatio: "none",
                }),
                  a.setAttributeNS(w, "href", e),
                  t.canvas && t.canvas.appendChild(a);
                t = new o(a, t);
                return (
                  (t.attrs = { x: r, y: i, width: n, height: s, src: e }),
                  (t.type = "image"),
                  t
                );
              }),
              (j._engine.text = function (t, e, r, i) {
                var n = L("text");
                t.canvas && t.canvas.appendChild(n);
                t = new o(n, t);
                return (
                  (t.attrs = {
                    x: e,
                    y: r,
                    "text-anchor": "middle",
                    text: i,
                    font: j._availableAttrs.font,
                    stroke: "none",
                    fill: "#000",
                  }),
                  (t.type = "text"),
                  p(t, t.attrs),
                  t
                );
              }),
              (j._engine.setSize = function (t, e) {
                return (
                  (this.width = t || this.width),
                  (this.height = e || this.height),
                  this.canvas.setAttribute("width", this.width),
                  this.canvas.setAttribute("height", this.height),
                  this._viewBox && this.setViewBox.apply(this, this._viewBox),
                  this
                );
              }),
              (j._engine.create = function () {
                var t = j._getContainer.apply(0, arguments),
                  e = t && t.container,
                  r = t.x,
                  i = t.y,
                  n = t.width,
                  s = t.height;
                if (!e) throw new Error("SVG container not found.");
                var a,
                  o = L("svg"),
                  t = "overflow:hidden;",
                  r = r || 0,
                  i = i || 0;
                return (
                  L(o, {
                    height: (s = s || 342),
                    version: 1.1,
                    width: (n = n || 512),
                    xmlns: "http://www.w3.org/2000/svg",
                  }),
                  1 == e
                    ? ((o.style.cssText =
                        t +
                        "position:absolute;left:" +
                        r +
                        "px;top:" +
                        i +
                        "px"),
                      j._g.doc.body.appendChild(o),
                      (a = 1))
                    : ((o.style.cssText = t + "position:relative"),
                      e.firstChild
                        ? e.insertBefore(o, e.firstChild)
                        : e.appendChild(o)),
                  ((e = new j._Paper()).width = n),
                  (e.height = s),
                  (e.canvas = o),
                  e.clear(),
                  (e._left = e._top = 0),
                  a && (e.renderfix = function () {}),
                  e.renderfix(),
                  e
                );
              }),
              (j._engine.setViewBox = function (t, e, r, i, n) {
                f("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                var s,
                  a = m(r / this.width, i / this.height),
                  o = this.top,
                  l = n ? "meet" : "xMinYMin",
                  h =
                    null == t
                      ? (this._vbSize && (a = 1),
                        delete this._vbSize,
                        "0 0 " + this.width + " " + this.height)
                      : ((this._vbSize = a), t + " " + e + " " + r + " " + i);
                for (
                  L(this.canvas, { viewBox: h, preserveAspectRatio: l });
                  a && o;

                )
                  (s = "stroke-width" in o.attrs ? o.attrs["stroke-width"] : 1),
                    o.attr({ "stroke-width": s }),
                    (o._.dirty = 1),
                    (o._.dirtyT = 1),
                    (o = o.prev);
                return (this._viewBox = [t, e, r, i, !!n]), this;
              }),
              (j.prototype.renderfix = function () {
                var e,
                  r = this.canvas,
                  t = r.style;
                try {
                  e = r.getScreenCTM() || r.createSVGMatrix();
                } catch (t) {
                  e = r.createSVGMatrix();
                }
                var i = -e.e % 1,
                  n = -e.f % 1;
                (i || n) &&
                  (i &&
                    ((this._left = (this._left + i) % 1),
                    (t.left = this._left + "px")),
                  n &&
                    ((this._top = (this._top + n) % 1),
                    (t.top = this._top + "px")));
              }),
              (j.prototype.clear = function () {
                j.eve("raphael.clear", this);
                for (var t = this.canvas; t.firstChild; )
                  t.removeChild(t.firstChild);
                (this.bottom = this.top = null),
                  (this.desc = L("desc")).appendChild(
                    j._g.doc.createTextNode("Created with Raphaël " + j.version)
                  ),
                  t.appendChild(this.desc),
                  t.appendChild((this.defs = L("defs")));
              }),
              (j.prototype.remove = function () {
                for (var t in (f("raphael.remove", this),
                this.canvas.parentNode &&
                  this.canvas.parentNode.removeChild(this.canvas),
                this))
                  this[t] =
                    "function" == typeof this[t] ? j._removedFactory(t) : null;
              });
            var e,
              r = j.st;
            for (e in t)
              t[k](e) &&
                !r[k](e) &&
                (r[e] = (function (r) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[r].apply(t, e);
                    });
                  };
                })(e));
          }
        })(),
        (function () {
          if (j.vml) {
            function g(t, e, r) {
              var i = j.matrix();
              return i.rotate(-t, 0.5, 0.5), { dx: i.x(e, r), dy: i.y(e, r) };
            }
            function v(t, e, r, i, n, s) {
              var a,
                o = t._,
                l = t.matrix,
                h = o.fillpos,
                u = t.node,
                c = u.style,
                f = 1,
                p = "",
                d = M / e,
                t = M / r;
              (c.visibility = "hidden"),
                e &&
                  r &&
                  ((u.coordsize = x(d) + A + x(t)),
                  (c.rotation = s * (e * r < 0 ? -1 : 1)),
                  s && ((i = (a = g(s, i, n)).dx), (n = a.dy)),
                  e < 0 && (p += "x"),
                  r < 0 && (p += " y") && (f = -1),
                  (c.flip = p),
                  (u.coordorigin = i * -d + A + n * -t),
                  (h || o.fillsize) &&
                    ((t = (t = u.getElementsByTagName(S)) && t[0]),
                    u.removeChild(t),
                    h &&
                      ((a = g(s, l.x(h[0], h[1]), l.y(h[0], h[1]))),
                      (t.position = a.dx * f + A + a.dy * f)),
                    o.fillsize &&
                      (t.size =
                        o.fillsize[0] * x(e) + A + o.fillsize[1] * x(r)),
                    u.appendChild(t)),
                  (c.visibility = "visible"));
            }
            var b = "hasOwnProperty",
              _ = String,
              w = parseFloat,
              c = Math,
              k = c.round,
              C = c.max,
              B = c.min,
              x = c.abs,
              S = "fill",
              T = /[, ]+/,
              f = j.eve,
              A = " ",
              N = {
                M: "m",
                L: "l",
                C: "c",
                Z: "x",
                m: "t",
                l: "r",
                c: "v",
                z: "x",
              },
              E = /([clmz]),?([^clmz]*)/gi,
              i = / progid:\S+Blur\([^\)]+\)/g,
              L = /-?[^,\s-]+/g,
              h = "position:absolute;left:0;top:0;width:1px;height:1px",
              M = 21600,
              P = { path: 1, rect: 1, image: 1 },
              z = { circle: 1, ellipse: 1 };
            j.toString = function () {
              return (
                "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                this.version
              );
            };
            function F(t, e, r) {
              for (
                var i = _(e).toLowerCase().split("-"),
                  r = r ? "end" : "start",
                  n = i.length,
                  s = "classic",
                  a = "medium",
                  o = "medium";
                n--;

              )
                switch (i[n]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    s = i[n];
                    break;
                  case "wide":
                  case "narrow":
                    o = i[n];
                    break;
                  case "long":
                  case "short":
                    a = i[n];
                }
              t = t.node.getElementsByTagName("stroke")[0];
              (t[r + "arrow"] = s),
                (t[r + "arrowlength"] = a),
                (t[r + "arrowwidth"] = o);
            }
            function p(t, e) {
              t.attrs = t.attrs || {};
              var r,
                i,
                n,
                s,
                a,
                o,
                l,
                h = t.node,
                u = t.attrs,
                c = h.style,
                f =
                  P[t.type] &&
                  (e.x != u.x ||
                    e.y != u.y ||
                    e.width != u.width ||
                    e.height != u.height ||
                    e.cx != u.cx ||
                    e.cy != u.cy ||
                    e.rx != u.rx ||
                    e.ry != u.ry ||
                    e.r != u.r),
                p =
                  z[t.type] &&
                  (u.cx != e.cx ||
                    u.cy != e.cy ||
                    u.r != e.r ||
                    u.rx != e.rx ||
                    u.ry != e.ry),
                d = t;
              for (r in e) e[b](r) && (u[r] = e[r]);
              if (
                (f && ((u.path = j._getPath[t.type](t)), (t._.dirty = 1)),
                e.href && (h.href = e.href),
                e.title && (h.title = e.title),
                e.target && (h.target = e.target),
                e.cursor && (c.cursor = e.cursor),
                "blur" in e && t.blur(e.blur),
                ((e.path && "path" == t.type) || f) &&
                  ((h.path = (function (t) {
                    var e = /[ahqstv]/gi,
                      r = j._pathToAbsolute;
                    if (
                      (_(t).match(e) && (r = j._path2curve),
                      (e = /[clmz]/g),
                      r == j._pathToAbsolute && !_(t).match(e))
                    ) {
                      var i = _(t).replace(E, function (t, e, r) {
                        var i = [],
                          n = "m" == e.toLowerCase(),
                          s = N[e];
                        return (
                          r.replace(L, function (t) {
                            n &&
                              2 == i.length &&
                              ((s += i + N["m" == e ? "l" : "L"]), (i = [])),
                              i.push(k(t * M));
                          }),
                          s + i
                        );
                      });
                      return i;
                    }
                    for (
                      var n, s, a = r(t), i = [], o = 0, l = a.length;
                      o < l;
                      o++
                    ) {
                      (n = a[o]),
                        "z" == (s = a[o][0].toLowerCase()) && (s = "x");
                      for (var h = 1, u = n.length; h < u; h++)
                        s += k(n[h] * M) + (h != u - 1 ? "," : "");
                      i.push(s);
                    }
                    return i.join(A);
                  })(
                    ~_(u.path).toLowerCase().indexOf("r")
                      ? j._pathToAbsolute(u.path)
                      : u.path
                  )),
                  "image" == t.type &&
                    ((t._.fillpos = [u.x, u.y]),
                    (t._.fillsize = [u.width, u.height]),
                    v(t, 1, 1, 0, 0, 0))),
                "transform" in e && t.transform(e.transform),
                p &&
                  ((s = +u.cx),
                  (i = +u.cy),
                  (p = +u.rx || +u.r || 0),
                  (n = +u.ry || +u.r || 0),
                  (h.path = j.format(
                    "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                    k((s - p) * M),
                    k((i - n) * M),
                    k((s + p) * M),
                    k((i + n) * M),
                    k(s * M)
                  )),
                  (t._.dirty = 1)),
                "clip-rect" in e &&
                  (4 == (i = _(e["clip-rect"]).split(T)).length &&
                    ((i[2] = +i[2] + +i[0]),
                    (i[3] = +i[3] + +i[1]),
                    ((s = (n = h.clipRect || j._g.doc.createElement("div"))
                      .style).clip = j.format(
                      "rect({1}px {2}px {3}px {0}px)",
                      i
                    )),
                    h.clipRect ||
                      ((s.position = "absolute"),
                      (s.top = 0),
                      (s.left = 0),
                      (s.width = t.paper.width + "px"),
                      (s.height = t.paper.height + "px"),
                      h.parentNode.insertBefore(n, h),
                      n.appendChild(h),
                      (h.clipRect = n))),
                  e["clip-rect"] ||
                    (h.clipRect && (h.clipRect.style.clip = "auto"))),
                t.textpath &&
                  ((o = t.textpath.style),
                  e.font && (o.font = e.font),
                  e["font-family"] &&
                    (o.fontFamily =
                      '"' +
                      e["font-family"]
                        .split(",")[0]
                        .replace(/^['"]+|['"]+$/g, "") +
                      '"'),
                  e["font-size"] && (o.fontSize = e["font-size"]),
                  e["font-weight"] && (o.fontWeight = e["font-weight"]),
                  e["font-style"] && (o.fontStyle = e["font-style"])),
                "arrow-start" in e && F(d, e["arrow-start"]),
                "arrow-end" in e && F(d, e["arrow-end"], 1),
                (null == e.opacity &&
                  null == e["stroke-width"] &&
                  null == e.fill &&
                  null == e.src &&
                  null == e.stroke &&
                  null == e["stroke-width"] &&
                  null == e["stroke-opacity"] &&
                  null == e["fill-opacity"] &&
                  null == e["stroke-dasharray"] &&
                  null == e["stroke-miterlimit"] &&
                  null == e["stroke-linejoin"] &&
                  null == e["stroke-linecap"]) ||
                  ((o = (o = h.getElementsByTagName(S)) && o[0]) || (o = R(S)),
                  "image" == t.type && e.src && (o.src = e.src),
                  e.fill && (o.on = !0),
                  (null != o.on && "none" != e.fill && null !== e.fill) ||
                    (o.on = !1),
                  o.on &&
                    e.fill &&
                    ((g = _(e.fill).match(j._ISURL))
                      ? (o.parentNode == h && h.removeChild(o),
                        (o.rotate = !0),
                        (o.src = g[1]),
                        (o.type = "tile"),
                        (a = t.getBBox(1)),
                        (o.position = a.x + A + a.y),
                        (t._.fillpos = [a.x, a.y]),
                        j._preload(g[1], function () {
                          t._.fillsize = [this.offsetWidth, this.offsetHeight];
                        }))
                      : ((o.color = j.getRGB(e.fill).hex),
                        (o.src = ""),
                        (o.type = "solid"),
                        j.getRGB(e.fill).error &&
                          (d.type in { circle: 1, ellipse: 1 } ||
                            "r" != _(e.fill).charAt()) &&
                          I(d, e.fill, o) &&
                          ((u.fill = "none"),
                          (u.gradient = e.fill),
                          (o.rotate = !1)))),
                  ("fill-opacity" in e || "opacity" in e) &&
                    ((l =
                      ((+u["fill-opacity"] + 1 || 2) - 1) *
                      ((+u.opacity + 1 || 2) - 1) *
                      ((+j.getRGB(e.fill).o + 1 || 2) - 1)),
                    (l = B(C(l, 0), 1)),
                    (o.opacity = l),
                    o.src && (o.color = "none")),
                  h.appendChild(o),
                  (a = !1),
                  (g =
                    h.getElementsByTagName("stroke") &&
                    h.getElementsByTagName("stroke")[0]) ||
                    (a = g = R("stroke")),
                  ((e.stroke && "none" != e.stroke) ||
                    e["stroke-width"] ||
                    null != e["stroke-opacity"] ||
                    e["stroke-dasharray"] ||
                    e["stroke-miterlimit"] ||
                    e["stroke-linejoin"] ||
                    e["stroke-linecap"]) &&
                    (g.on = !0),
                  ("none" != e.stroke &&
                    null !== e.stroke &&
                    null != g.on &&
                    0 != e.stroke &&
                    0 != e["stroke-width"]) ||
                    (g.on = !1),
                  (o = j.getRGB(e.stroke)),
                  g.on && e.stroke && (g.color = o.hex),
                  (l =
                    ((+u["stroke-opacity"] + 1 || 2) - 1) *
                    ((+u.opacity + 1 || 2) - 1) *
                    ((+o.o + 1 || 2) - 1)),
                  (o = 0.75 * (w(e["stroke-width"]) || 1)),
                  (l = B(C(l, 0), 1)),
                  null == e["stroke-width"] && (o = u["stroke-width"]),
                  e["stroke-width"] && (g.weight = o),
                  o && o < 1 && (l *= o) && (g.weight = 1),
                  (g.opacity = l),
                  e["stroke-linejoin"] &&
                    (g.joinstyle = e["stroke-linejoin"] || "miter"),
                  (g.miterlimit = e["stroke-miterlimit"] || 8),
                  e["stroke-linecap"] &&
                    (g.endcap =
                      "butt" == e["stroke-linecap"]
                        ? "flat"
                        : "square" == e["stroke-linecap"]
                        ? "square"
                        : "round"),
                  e["stroke-dasharray"] &&
                    ((l = {
                      "-": "shortdash",
                      ".": "shortdot",
                      "-.": "shortdashdot",
                      "-..": "shortdashdotdot",
                      ". ": "dot",
                      "- ": "dash",
                      "--": "longdash",
                      "- .": "dashdot",
                      "--.": "longdashdot",
                      "--..": "longdashdotdot",
                    }),
                    (g.dashstyle = l[b](e["stroke-dasharray"])
                      ? l[e["stroke-dasharray"]]
                      : "")),
                  a && h.appendChild(g)),
                "text" == d.type)
              ) {
                d.paper.canvas.style.display = "";
                var h = d.paper.span,
                  g = u.font && u.font.match(/\d+(?:\.\d*)?(?=px)/),
                  c = h.style;
                u.font && (c.font = u.font),
                  u["font-family"] && (c.fontFamily = u["font-family"]),
                  u["font-weight"] && (c.fontWeight = u["font-weight"]),
                  u["font-style"] && (c.fontStyle = u["font-style"]),
                  (g = w(u["font-size"] || (g && g[0])) || 10),
                  (c.fontSize = 100 * g + "px"),
                  d.textpath.string &&
                    (h.innerHTML = _(d.textpath.string)
                      .replace(/</g, "&#60;")
                      .replace(/&/g, "&#38;")
                      .replace(/\n/g, "<br>"));
                h = h.getBoundingClientRect();
                (d.W = u.w = (h.right - h.left) / 100),
                  (d.H = u.h = (h.bottom - h.top) / 100),
                  (d.X = u.x),
                  (d.Y = u.y + d.H / 2),
                  ("x" in e || "y" in e) &&
                    (d.path.v = j.format(
                      "m{0},{1}l{2},{1}",
                      k(u.x * M),
                      k(u.y * M),
                      k(u.x * M) + 1
                    ));
                for (
                  var x = [
                      "x",
                      "y",
                      "text",
                      "font",
                      "font-family",
                      "font-weight",
                      "font-style",
                      "font-size",
                    ],
                    y = 0,
                    m = x.length;
                  y < m;
                  y++
                )
                  if (x[y] in e) {
                    d._.dirty = 1;
                    break;
                  }
                switch (u["text-anchor"]) {
                  case "start":
                    (d.textpath.style["v-text-align"] = "left"),
                      (d.bbx = d.W / 2);
                    break;
                  case "end":
                    (d.textpath.style["v-text-align"] = "right"),
                      (d.bbx = -d.W / 2);
                    break;
                  default:
                    (d.textpath.style["v-text-align"] = "center"), (d.bbx = 0);
                }
                d.textpath.style["v-text-kern"] = !0;
              }
            }
            function u(t, e) {
              ((this[0] = this.node = t).raphael = !0),
                (this.id = j._oid++),
                (t.raphaelid = this.id),
                (this.X = 0),
                (this.Y = 0),
                (this.attrs = {}),
                (this.paper = e),
                (this.matrix = j.matrix()),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  dx: 0,
                  dy: 0,
                  deg: 0,
                  dirty: 1,
                  dirtyT: 1,
                }),
                e.bottom || (e.bottom = this),
                (this.prev = e.top),
                e.top && (e.top.next = this),
                ((e.top = this).next = null);
            }
            var R,
              I = function (t, e, r) {
                t.attrs = t.attrs || {};
                t.attrs;
                var i = Math.pow,
                  n = "linear",
                  s = ".5 .5";
                if (
                  ((t.attrs.gradient = e),
                  (e = (e = _(e).replace(
                    j._radial_gradient,
                    function (t, e, r) {
                      return (
                        (n = "radial"),
                        e &&
                          r &&
                          ((e = w(e)),
                          (r = w(r)),
                          0.25 < i(e - 0.5, 2) + i(r - 0.5, 2) &&
                            (r =
                              c.sqrt(0.25 - i(e - 0.5, 2)) *
                                (2 * (0.5 < r) - 1) +
                              0.5),
                          (s = e + A + r)),
                        ""
                      );
                    }
                  )).split(/\s*\-\s*/)),
                  "linear" == n)
                ) {
                  var a = e.shift(),
                    a = -w(a);
                  if (isNaN(a)) return null;
                }
                var o = j._parseDots(e);
                if (!o) return null;
                if (((t = t.shape || t.node), o.length)) {
                  t.removeChild(r),
                    (r.on = !0),
                    (r.method = "none"),
                    (r.color = o[0].color),
                    (r.color2 = o[o.length - 1].color);
                  for (var l = [], h = 0, u = o.length; h < u; h++)
                    o[h].offset && l.push(o[h].offset + A + o[h].color);
                  (r.colors = l.length ? l.join() : "0% " + r.color),
                    "radial" == n
                      ? ((r.type = "gradientTitle"),
                        (r.focus = "100%"),
                        (r.focussize = "0 0"),
                        (r.focusposition = s),
                        (r.angle = 0))
                      : ((r.type = "gradient"), (r.angle = (270 - a) % 360)),
                    t.appendChild(r);
                }
                return 1;
              },
              t = j.el;
            ((u.prototype = t).constructor = u),
              (t.transform = function (t) {
                if (null == t) return this._.transform;
                var e,
                  r = this.paper._viewBoxShift,
                  i = r
                    ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy]
                    : "";
                r &&
                  (e = t =
                    _(t).replace(/\.{3}|\u2026/g, this._.transform || "")),
                  j._extractTransform(this, i + t);
                var n = this.matrix.clone(),
                  s = this.skew,
                  a = this.node,
                  o = ~_(this.attrs.fill).indexOf("-"),
                  r = !_(this.attrs.fill).indexOf("url(");
                return (
                  n.translate(1, 1),
                  r || o || "image" == this.type
                    ? ((s.matrix = "1 0 0 1"),
                      (s.offset = "0 0"),
                      (i = n.split()),
                      (o && i.noRotation) || !i.isSimple
                        ? ((a.style.filter = n.toFilter()),
                          (t = this.getBBox()),
                          (r = this.getBBox(1)),
                          (o = t.x - r.x),
                          (r = t.y - r.y),
                          (a.coordorigin = o * -M + A + r * -M),
                          v(this, 1, 1, o, r, 0))
                        : ((a.style.filter = ""),
                          v(this, i.scalex, i.scaley, i.dx, i.dy, i.rotate)))
                    : ((a.style.filter = ""),
                      (s.matrix = _(n)),
                      (s.offset = n.offset())),
                  e && (this._.transform = e),
                  this
                );
              }),
              (t.rotate = function (t, e, r) {
                return this.removed
                  ? this
                  : null != t
                  ? ((t = _(t).split(T)).length - 1 &&
                      ((e = w(t[1])), (r = w(t[2]))),
                    (t = w(t[0])),
                    null == r && (e = r),
                    (null != e && null != r) ||
                      ((e = (i = this.getBBox(1)).x + i.width / 2),
                      (r = i.y + i.height / 2)),
                    (this._.dirtyT = 1),
                    this.transform(this._.transform.concat([["r", t, e, r]])),
                    this)
                  : void 0;
                var i;
              }),
              (t.translate = function (t, e) {
                return (
                  this.removed ||
                    ((t = _(t).split(T)).length - 1 && (e = w(t[1])),
                    (t = w(t[0]) || 0),
                    (e = +e || 0),
                    this._.bbox && ((this._.bbox.x += t), (this._.bbox.y += e)),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                  this
                );
              }),
              (t.scale = function (t, e, r, i) {
                return (
                  this.removed ||
                    ((t = _(t).split(T)).length - 1 &&
                      ((e = w(t[1])),
                      (r = w(t[2])),
                      (i = w(t[3])),
                      isNaN(r) && (r = null),
                      isNaN(i) && (i = null)),
                    (t = w(t[0])),
                    null == e && (e = t),
                    null == i && (r = i),
                    (null != r && null != i) || (n = this.getBBox(1)),
                    (r = null == r ? n.x + n.width / 2 : r),
                    (i = null == i ? n.y + n.height / 2 : i),
                    this.transform(
                      this._.transform.concat([["s", t, e, r, i]])
                    ),
                    (this._.dirtyT = 1)),
                  this
                );
                var n;
              }),
              (t.hide = function () {
                return this.removed || (this.node.style.display = "none"), this;
              }),
              (t.show = function () {
                return this.removed || (this.node.style.display = ""), this;
              }),
              (t._getBBox = function () {
                return this.removed
                  ? {}
                  : {
                      x: this.X + (this.bbx || 0) - this.W / 2,
                      y: this.Y - this.H,
                      width: this.W,
                      height: this.H,
                    };
              }),
              (t.remove = function () {
                if (!this.removed && this.node.parentNode) {
                  for (var t in (this.paper.__set__ &&
                    this.paper.__set__.exclude(this),
                  j.eve.unbind("raphael.*.*." + this.id),
                  j._tear(this, this.paper),
                  this.node.parentNode.removeChild(this.node),
                  this.shape && this.shape.parentNode.removeChild(this.shape),
                  this))
                    this[t] =
                      "function" == typeof this[t]
                        ? j._removedFactory(t)
                        : null;
                  this.removed = !0;
                }
              }),
              (t.attr = function (t, e) {
                if (this.removed) return this;
                if (null == t) {
                  var r,
                    i = {};
                  for (r in this.attrs)
                    this.attrs[b](r) && (i[r] = this.attrs[r]);
                  return (
                    i.gradient &&
                      "none" == i.fill &&
                      (i.fill = i.gradient) &&
                      delete i.gradient,
                    (i.transform = this._.transform),
                    i
                  );
                }
                if (null == e && j.is(t, "string")) {
                  if (
                    t == S &&
                    "none" == this.attrs.fill &&
                    this.attrs.gradient
                  )
                    return this.attrs.gradient;
                  for (
                    var n = t.split(T), s = {}, a = 0, o = n.length;
                    a < o;
                    a++
                  )
                    (t = n[a]) in this.attrs
                      ? (s[t] = this.attrs[t])
                      : j.is(this.paper.customAttributes[t], "function")
                      ? (s[t] = this.paper.customAttributes[t].def)
                      : (s[t] = j._availableAttrs[t]);
                  return o - 1 ? s : s[n[0]];
                }
                if (this.attrs && null == e && j.is(t, "array")) {
                  for (s = {}, a = 0, o = t.length; a < o; a++)
                    s[t[a]] = this.attr(t[a]);
                  return s;
                }
                var l, h;
                for (h in (null != e && ((l = {})[t] = e),
                null == e && j.is(t, "object") && (l = t),
                l))
                  f("raphael.attr." + h + "." + this.id, this, l[h]);
                if (l) {
                  for (h in this.paper.customAttributes)
                    if (
                      this.paper.customAttributes[b](h) &&
                      l[b](h) &&
                      j.is(this.paper.customAttributes[h], "function")
                    ) {
                      var u,
                        c = this.paper.customAttributes[h].apply(
                          this,
                          [].concat(l[h])
                        );
                      for (u in ((this.attrs[h] = l[h]), c))
                        c[b](u) && (l[u] = c[u]);
                    }
                  l.text &&
                    "text" == this.type &&
                    (this.textpath.string = l.text),
                    p(this, l);
                }
                return this;
              }),
              (t.toFront = function () {
                return (
                  this.removed || this.node.parentNode.appendChild(this.node),
                  this.paper &&
                    this.paper.top != this &&
                    j._tofront(this, this.paper),
                  this
                );
              }),
              (t.toBack = function () {
                return (
                  this.removed ||
                    (this.node.parentNode.firstChild != this.node &&
                      (this.node.parentNode.insertBefore(
                        this.node,
                        this.node.parentNode.firstChild
                      ),
                      j._toback(this, this.paper))),
                  this
                );
              }),
              (t.insertAfter = function (t) {
                return (
                  this.removed ||
                    (t.constructor == j.st.constructor && (t = t[t.length - 1]),
                    t.node.nextSibling
                      ? t.node.parentNode.insertBefore(
                          this.node,
                          t.node.nextSibling
                        )
                      : t.node.parentNode.appendChild(this.node),
                    j._insertafter(this, t, this.paper)),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                return (
                  this.removed ||
                    (t.constructor == j.st.constructor && (t = t[0]),
                    t.node.parentNode.insertBefore(this.node, t.node),
                    j._insertbefore(this, t, this.paper)),
                  this
                );
              }),
              (t.blur = function (t) {
                var e = this.node.runtimeStyle,
                  r = (r = e.filter).replace(i, "");
                return (
                  0 != +t
                    ? ((this.attrs.blur = t),
                      (e.filter =
                        r +
                        A +
                        " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                        (+t || 1.5) +
                        ")"),
                      (e.margin = j.format("-{0}px 0 0 -{0}px", k(+t || 1.5))))
                    : ((e.filter = r), (e.margin = 0), delete this.attrs.blur),
                  this
                );
              }),
              (j._engine.path = function (t, e) {
                var r = R("shape");
                (r.style.cssText = h),
                  (r.coordsize = M + A + M),
                  (r.coordorigin = e.coordorigin);
                var i = new u(r, e),
                  n = { fill: "none", stroke: "#000" };
                t && (n.path = t),
                  (i.type = "path"),
                  (i.path = []),
                  (i.Path = ""),
                  p(i, n),
                  e.canvas.appendChild(r);
                e = R("skew");
                return (
                  (e.on = !0),
                  r.appendChild(e),
                  (i.skew = e),
                  i.transform(""),
                  i
                );
              }),
              (j._engine.rect = function (t, e, r, i, n, s) {
                var a = j._rectPath(e, r, i, n, s),
                  o = t.path(a),
                  t = o.attrs;
                return (
                  (o.X = t.x = e),
                  (o.Y = t.y = r),
                  (o.W = t.width = i),
                  (o.H = t.height = n),
                  (t.r = s),
                  (t.path = a),
                  (o.type = "rect"),
                  o
                );
              }),
              (j._engine.ellipse = function (t, e, r, i, n) {
                (t = t.path()), t.attrs;
                return (
                  (t.X = e - i),
                  (t.Y = r - n),
                  (t.W = 2 * i),
                  (t.H = 2 * n),
                  (t.type = "ellipse"),
                  p(t, { cx: e, cy: r, rx: i, ry: n }),
                  t
                );
              }),
              (j._engine.circle = function (t, e, r, i) {
                (t = t.path()), t.attrs;
                return (
                  (t.X = e - i),
                  (t.Y = r - i),
                  (t.W = t.H = 2 * i),
                  (t.type = "circle"),
                  p(t, { cx: e, cy: r, r: i }),
                  t
                );
              }),
              (j._engine.image = function (t, e, r, i, n, s) {
                var a = j._rectPath(r, i, n, s),
                  o = t.path(a).attr({ stroke: "none" }),
                  l = o.attrs,
                  h = o.node,
                  t = h.getElementsByTagName(S)[0];
                return (
                  (l.src = e),
                  (o.X = l.x = r),
                  (o.Y = l.y = i),
                  (o.W = l.width = n),
                  (o.H = l.height = s),
                  (l.path = a),
                  (o.type = "image"),
                  t.parentNode == h && h.removeChild(t),
                  (t.rotate = !0),
                  (t.src = e),
                  (t.type = "tile"),
                  (o._.fillpos = [r, i]),
                  (o._.fillsize = [n, s]),
                  h.appendChild(t),
                  v(o, 1, 1, 0, 0, 0),
                  o
                );
              }),
              (j._engine.text = function (t, e, r, i) {
                var n = R("shape"),
                  s = R("path"),
                  a = R("textpath");
                (e = e || 0),
                  (r = r || 0),
                  (i = i || ""),
                  (s.v = j.format(
                    "m{0},{1}l{2},{1}",
                    k(e * M),
                    k(r * M),
                    k(e * M) + 1
                  )),
                  (s.textpathok = !0),
                  (a.string = _(i)),
                  (a.on = !0),
                  (n.style.cssText = h),
                  (n.coordsize = M + A + M),
                  (n.coordorigin = "0 0");
                var o = new u(n, t),
                  l = {
                    fill: "#000",
                    stroke: "none",
                    font: j._availableAttrs.font,
                    text: i,
                  };
                (o.shape = n),
                  (o.path = s),
                  (o.textpath = a),
                  (o.type = "text"),
                  (o.attrs.text = _(i)),
                  (o.attrs.x = e),
                  (o.attrs.y = r),
                  (o.attrs.w = 1),
                  (o.attrs.h = 1),
                  p(o, l),
                  n.appendChild(a),
                  n.appendChild(s),
                  t.canvas.appendChild(n);
                t = R("skew");
                return (
                  (t.on = !0),
                  n.appendChild(t),
                  (o.skew = t),
                  o.transform(""),
                  o
                );
              }),
              (j._engine.setSize = function (t, e) {
                var r = this.canvas.style;
                return (
                  (this.width = t) == +t && (t += "px"),
                  (this.height = e) == +e && (e += "px"),
                  (r.width = t),
                  (r.height = e),
                  (r.clip = "rect(0 " + t + " " + e + " 0)"),
                  this._viewBox &&
                    j._engine.setViewBox.apply(this, this._viewBox),
                  this
                );
              }),
              (j._engine.setViewBox = function (t, e, r, i, n) {
                j.eve("raphael.setViewBox", this, this._viewBox, [
                  t,
                  e,
                  r,
                  i,
                  n,
                ]);
                var s,
                  a = this.width,
                  o = this.height,
                  l = 1 / C(r / a, i / o);
                return (
                  n &&
                    (r * (s = o / i) < a && (t -= (a - r * s) / 2 / s),
                    i * (a = a / r) < o && (e -= (o - i * a) / 2 / a)),
                  (this._viewBox = [t, e, r, i, !!n]),
                  (this._viewBoxShift = { dx: -t, dy: -e, scale: l }),
                  this.forEach(function (t) {
                    t.transform("...");
                  }),
                  this
                );
              }),
              (j._engine.initWin = function (t) {
                var e = t.document;
                e.createStyleSheet().addRule(
                  ".rvml",
                  "behavior:url(#default#VML)"
                );
                try {
                  e.namespaces.rvml ||
                    e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                    (R = function (t) {
                      return e.createElement("<rvml:" + t + ' class="rvml">');
                    });
                } catch (t) {
                  R = function (t) {
                    return e.createElement(
                      "<" +
                        t +
                        ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                    );
                  };
                }
              }),
              j._engine.initWin(j._g.win),
              (j._engine.create = function () {
                var t = j._getContainer.apply(0, arguments),
                  e = t.container,
                  r = t.height,
                  i = t.width,
                  n = t.x,
                  s = t.y;
                if (!e) throw new Error("VML container not found.");
                var a = new j._Paper(),
                  o = (a.canvas = j._g.doc.createElement("div")),
                  t = o.style,
                  n = n || 0,
                  s = s || 0,
                  i = i || 512,
                  r = r || 342;
                return (
                  (a.width = i) == +i && (i += "px"),
                  (a.height = r) == +r && (r += "px"),
                  (a.coordsize = 216e5 + A + 216e5),
                  (a.coordorigin = "0 0"),
                  (a.span = j._g.doc.createElement("span")),
                  (a.span.style.cssText =
                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                  o.appendChild(a.span),
                  (t.cssText = j.format(
                    "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                    i,
                    r
                  )),
                  1 == e
                    ? (j._g.doc.body.appendChild(o),
                      (t.left = n + "px"),
                      (t.top = s + "px"),
                      (t.position = "absolute"))
                    : e.firstChild
                    ? e.insertBefore(o, e.firstChild)
                    : e.appendChild(o),
                  (a.renderfix = function () {}),
                  a
                );
              }),
              (j.prototype.clear = function () {
                j.eve("raphael.clear", this),
                  (this.canvas.innerHTML = ""),
                  (this.span = j._g.doc.createElement("span")),
                  (this.span.style.cssText =
                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                  this.canvas.appendChild(this.span),
                  (this.bottom = this.top = null);
              }),
              (j.prototype.remove = function () {
                for (var t in (j.eve("raphael.remove", this),
                this.canvas.parentNode.removeChild(this.canvas),
                this))
                  this[t] =
                    "function" == typeof this[t] ? j._removedFactory(t) : null;
                return !0;
              });
            var e,
              r = j.st;
            for (e in t)
              t[b](e) &&
                !r[b](e) &&
                (r[e] = (function (r) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[r].apply(t, e);
                    });
                  };
                })(e));
          }
        })(),
        r.was ? (d.win.Raphael = j) : (t.Raphael = j);
    })(t, t.eve);
  })(this);

/* Map path and default settings - you can edit this */
var simplemaps_countrymap_mapinfo = {
  map_name: "country",
  initial_view: { x: -400, y: -200, x2: 1000, y2: 1000 },
  state_bbox_array: {},
  paths: {
    PH01: "m 144.04804,404.2442 0.61914,0.17188 0.58594,0.80469 0.80273,0.36718 0.87696,1.24219 0.58593,0.6582 0.29102,0.58399 0.29297,0.58594 0.58398,0.43945 0.21875,0.21875 0.94922,-0.0742 0.29297,-0.21875 0.95117,-0.36523 0.58399,-0.14649 1.02343,-0.14648 0.65625,-0.0723 0.80664,-0.0723 0.94922,-0.36524 0.87696,-0.2207 1.0957,-0.22071 h 1.0957 l 0.36524,-0.14453 0.87695,-0.21875 0.43945,-0.14648 0.94922,-0.14648 0.95117,-0.65821 0.65625,-0.0723 0.36719,-0.14649 0.94922,-0.29101 0.87695,-0.29297 1.16797,-0.0742 h 0.6582 l 0.95118,-0.21875 0.65625,-0.2207 0.73046,-0.29297 h 0.51368 l 0.50976,-0.0723 0.73047,0.0723 0.19336,0.31054 0.0293,-0.0918 0.51172,-0.22071 0.14648,-0.29101 0.58399,-0.29297 0.36523,-0.14648 0.58398,-0.36524 0.29102,-0.29297 0.36719,-0.36523 0.36523,-0.36524 0.58594,-0.58593 0.73047,-0.58594 0.36523,-0.50977 0.36524,-0.36718 0.6582,-0.50977 0.58398,-0.58789 0.4375,-0.6582 0.36524,-0.36329 0.43945,-0.29492 0.4375,-0.58398 0.43945,-0.36719 0.36524,-0.51172 0.29101,-0.6582 0.4375,-0.29102 0.58594,-0.36523 0.58399,-0.51367 0.29297,-0.51172 0.6582,-0.43946 0.36523,-0.87695 0.4375,-0.14453 0.29297,-0.21875 0.36524,-0.51367 0.36523,-0.58399 0.6582,-0.21875 0.21875,-0.43945 0.36719,-0.43945 0.36328,-0.51172 0.65821,-0.29102 0.36523,-0.58593 0.29297,-0.36524 0.875,-0.0742 0.29297,-0.21875 0.14648,-0.36718 -0.0723,-0.51172 0.58398,-0.80469 0.58398,-0.58594 0.73047,-0.58398 0.36719,-0.14649 0.4375,-0.58398 0.29297,-0.36719 0.58398,-0.58398 0.36524,-0.29297 0.43945,-0.36524 0.21875,-0.29296 0.14649,-0.29297 0.29296,-0.36524 0.14454,-0.36523 0.43945,-0.58594 0.58398,-0.51172 0.21875,-0.29297 0.73243,-0.58593 0.29101,-0.14454 0.51172,-0.51367 0.29297,-0.29297 0.29297,-0.36328 0.36328,-0.2207 0.43945,-0.0723 h 0.51176 l 0.36523,0.36328 0.36524,0.14844 h 0.36719 l 0.29101,-0.0742 h 0.4375 l 0.51367,-0.36523 0.21875,-0.80469 0.14649,-0.51172 0.21875,-0.87695 0.36523,-0.87891 0.73047,-0.6582 0.6582,-0.58594 0.36524,-0.43945 0.87695,-0.4375 0.36524,-0.43945 0.58398,-0.73047 0.43945,-0.65821 0.14453,-0.36523 0.58594,-0.36719 0.29102,-0.29101 0.2207,-0.29297 0.80274,-0.4375 0.36718,-0.36719 0.14453,-0.87695 0.36719,-0.21875 0.73047,-0.36719 0.10156,0.0391 0.19532,-0.77539 0.14453,-0.58398 v -1.09766 l 0.21875,-0.80469 0.2207,-1.31445 1.0957,-0.80469 0.21875,-0.2207 1.09766,-0.6582 0.4375,-0.73047 0.36523,-0.2207 0.4375,-0.36524 0.95118,-0.43945 0.14648,-0.73047 0.73047,-0.58594 0.58398,-1.3164 0.22071,-0.87696 0.36523,-0.80469 0.0723,-1.09765 0.29297,-0.73047 0.29101,-0.80469 v -0.95117 l 0.14649,-0.51367 0.58398,-0.87696 0.36523,-0.73046 0.58399,-0.65821 0.6582,-0.58593 0.14649,-0.14649 0.36523,-0.29297 0.36523,-0.36523 0.29297,-0.21875 0.58399,-0.2207 0.2207,-0.36524 0.29102,-0.58594 0.29297,-0.4375 0.51171,-0.58593 0.36524,-0.36524 0.36523,-0.51172 0.43946,-0.43945 0.21875,-0.4375 0.875,-0.51367 0.36718,-0.36524 0.36524,-0.8789 0.29101,-0.36328 0.65821,-0.36719 0.36523,-0.4375 0.36524,-0.73242 0.36523,-1.02344 0.36719,-0.4375 -0.0742,-0.95117 v -1.09766 l 0.0742,-0.87695 -0.14649,-1.02539 -0.29297,-0.65821 -0.4375,-0.87695 -0.43945,-0.51172 -0.36523,-0.36719 -0.29102,-0.58398 -0.36523,-0.80469 -0.14649,-0.87695 -0.4375,-0.6582 -0.36523,-0.80469 -0.58399,-0.58594 -0.6582,-1.02344 -0.29297,-0.21875 -0.36523,-0.80468 -0.36524,-0.36524 -0.4375,-0.66015 -0.58594,-0.36524 -0.58398,-0.6582 -0.4375,-0.36719 -0.36523,-0.65625 -0.29102,-0.66016 -0.6582,-0.14648 -0.73047,-0.36523 -0.87695,-0.0723 -0.87696,-0.14648 -0.6582,-0.4375 -0.29297,-0.36524 -0.29102,-0.80469 -0.0723,-0.8789 v -0.73047 l -0.2207,-0.58594 -0.4375,-0.43945 -0.21875,-0.51172 v -0.23242 l -0.88282,-0.13672 h -0.51171 l -0.73047,-0.36719 -0.51172,-0.14453 -0.58594,-0.29297 -0.875,-0.58594 -0.80469,-0.51171 -1.0957,-0.29102 -0.6582,-0.29297 -0.36524,-0.36523 -1.02344,-0.65821 -0.80273,-0.36718 -0.73047,-0.51172 -0.51367,-0.51172 -0.58399,-0.36524 -0.36523,-0.51171 -0.14648,-0.66016 -0.21875,-0.6582 -0.29297,-0.51172 -0.73047,-0.58399 -0.6582,-0.73242 -0.58399,-0.58398 -1.46289,-0.29297 -1.0957,0.0742 -1.09571,-0.21875 -0.51171,-0.36719 -0.29297,-0.58399 -0.58399,-0.29296 -0.73047,-0.36524 -0.58398,-0.29297 -0.29297,-0.51172 -0.29297,-0.6582 -0.875,-0.36719 -0.51172,-0.58398 -0.51172,-0.58594 -0.36523,-0.14648 -0.36523,-0.80274 -0.58594,-0.21875 -0.73047,-0.29297 -0.87695,-0.51171 -0.36524,-0.51172 -0.29297,-0.36524 -0.58398,-0.36719 -0.87695,-0.80468 -0.29297,-0.36524 -0.80274,-0.51367 -0.95117,-0.51172 -0.36328,-0.50976 -0.6582,-0.95118 -0.80469,-0.36718 -0.94727,-0.65821 -0.58593,-0.80468 -0.58594,-0.14453 -0.94922,-0.65821 -0.29102,-0.6582 -0.6582,-0.29297 -0.58398,-0.73047 -0.51172,-0.51172 -0.51172,-0.51172 -0.80469,-0.51171 -1.02344,-0.58594 -0.29101,-0.58399 -0.58594,-0.6582 -0.80273,-0.51367 -0.65821,-0.29102 -0.14648,-0.58594 -0.14649,-0.51171 -0.94921,-0.21875 -0.36524,-0.65821 -0.6582,-0.51172 -0.95117,-0.66015 -0.51172,-0.29102 -0.36524,-0.51367 -0.80468,-0.36523 -0.14649,-0.29102 -0.36523,-0.58594 -0.58399,-0.36523 -0.51172,-0.21875 -0.36718,-0.51367 -0.73047,-0.36524 -0.58399,-0.36523 -0.36523,-0.58594 -0.6582,-0.6582 -0.80274,-0.51172 -0.6582,-0.29297 -0.58399,-0.6582 -0.6582,-0.51172 -0.58398,-0.73047 -0.51172,-0.73047 -0.80469,-0.2207 -0.29102,-0.58399 -0.73242,-0.29297 -0.6582,-0.21875 -0.36523,-0.58593 -0.51172,-0.36524 -0.58594,-0.73047 -0.65625,-0.36523 -0.36524,-0.51172 -0.2207,-0.51367 -0.0723,-0.65625 0.29296,-0.73242 0.21875,-0.36524 0.51172,-0.80469 0.0723,-0.51171 v -0.65821 l 0.0742,-0.87695 0.29101,-0.87891 0.0742,-0.73046 -0.0742,-0.80469 0.21875,-0.51172 0.36524,-0.58594 v -0.51172 l 0.2207,-0.80469 0.29102,-1.09765 0.21875,-0.6582 0.14648,-0.80469 0.51172,-1.24414 0.21875,-0.87696 0.29297,-1.09765 0.58398,-1.60742 0.36524,-1.02539 0.14648,-0.95118 0.14649,-1.02343 0.1582,-0.41016 -0.44727,-0.18359 -0.80468,-0.29297 h -0.65821 l -0.6582,-0.21875 -1.02149,-0.36719 -0.95117,-0.51172 -0.87695,-0.36523 -0.80469,-0.29297 h -0.65625 l -0.6582,-0.0723 -0.6582,-0.36523 -0.21875,-0.73242 v -0.58594 l 0.14648,-0.51172 0.14453,-0.6582 0.2207,-0.66016 0.29102,-0.6582 0.29297,-0.36524 0.51172,-0.73047 0.21875,-0.58593 0.21875,-0.80469 0.51172,-0.95117 0.29297,-0.58399 0.36523,-0.80664 0.51172,-0.73047 0.29297,-0.73242 0.29297,-0.6582 0.14453,-0.80469 0.51172,-0.6582 0.36523,-0.87696 0.0742,-0.80468 -0.51172,-0.58594 -0.87695,-0.29102 -0.87891,-0.2207 h -0.65625 l -0.87695,-0.0723 -1.82813,0.21875 -0.94922,0.36523 -0.6582,0.51172 -0.29297,0.95312 -0.29101,0.87696 -0.36524,0.51367 -0.36523,0.58398 -0.22071,0.58594 -0.21874,0.95117 -0.36524,0.36524 -0.65625,0.36523 -0.2207,0.29297 -1.09571,0.58594 -1.16796,0.94922 -0.65821,0.58593 -0.21875,0.73047 -0.66015,0.95117 -0.14453,0.87696 -0.65821,0.6582 -0.29297,1.17188 -0.36523,0.87695 -0.14649,0.51172 -0.51171,0.21875 -0.36719,-0.14649 -0.73047,-0.80468 -0.58399,-0.80469 -0.73046,-1.02344 -0.51172,-0.58594 -0.87696,-0.36523 -0.73046,-0.0723 -0.80469,0.14649 -0.87695,0.36523 -0.51172,0.58399 -0.21875,0.80468 v 0.73243 l 0.14453,0.87695 0.6582,0.87695 0.14648,0.95117 0.14649,0.80469 -0.21875,0.51172 -0.36524,0.2207 -1.9746,0.36328 h -1.97461 -1.3125 l -2.41211,-0.21875 -2.41211,-0.14453 h -2.33985 l -1.97461,0.0723 h -0.875 -1.60742 -1.24414 -1.24219 l -1.0957,-0.0723 -1.90039,0.0723 -0.95117,0.2207 -0.51172,0.36328 -0.51172,0.73242 -0.51172,0.58399 -0.87695,0.58594 -0.72852,-0.14649 -0.73242,-0.58594 -0.29101,-0.65624 -0.14649,-0.51368 -0.51172,-0.65625 -0.6582,-0.36718 -0.73047,0.0742 -0.36523,0.14649 -0.73047,0.29101 h -0.58594 l -0.875,-0.29101 -0.80469,-0.29297 -1.16992,-0.21875 h -0.6582 l -1.24219,-0.14648 -0.6582,-0.29297 h -0.94922 l -0.95117,0.58593 -0.65625,0.51172 -0.73047,0.51172 -0.73047,0.21875 -0.6582,0.36719 -1.53516,0.73047 h -0.87695 l -1.16993,0.36523 -0.87695,0.21875 -1.46094,-0.29101 -1.09765,-0.14649 h -1.02149 -0.51171 l -0.58399,-0.14648 -0.36328,-0.1543 -0.01,0.0801 -1.02343,-0.4375 -4.3125,-0.29297 h -4.01953 -8.40626 l -6.503901,-0.21875 -0.583985,-0.58594 -1.535156,-0.14648 -1.753906,0.2207 0.07227,1.16992 0.732421,1.53711 0.802735,1.53516 0.878906,1.53711 0.583984,0.73047 0.802735,1.53711 0.804687,1.24414 0.804688,0.94922 0.658203,0.80468 11.400389,0.65821 v 0.004 c 0.003,-4e-5 1.02344,-0.0137 2.57812,-0.0117 4.67113,0.005 14.1334,0.13537 15.0918,1.09375 1.27785,1.27786 3.28657,7.66575 1.82617,6.93555 -1.46041,-0.7302 -4.92969,-4.19726 -4.92969,-4.19726 l -6.9375,0.72851 3.10352,14.05664 0.54883,1.64453 4.5625,-0.73047 0.73047,0.73047 -5.11133,2.73828 3.28711,14.23829 4.09961,-0.16407 0.18164,2.41016 -4.14453,0.45898 -0.16797,0.0332 0.10156,1.74023 4.34766,-0.39062 0.20507,2.73047 -4.38867,0.45898 0.10352,1.76172 4.41601,-0.45508 0.12891,1.70312 -4.44531,0.44922 0.13672,2.33204 4.48632,-0.38086 0.14258,1.90625 -4.50195,0.64257 0.10352,1.76954 4.54687,-0.43165 0.18164,2.42579 -4.58203,0.49804 0.11133,1.89844 4.63476,-0.21484 0.15235,2.03906 -7.02344,0.49023 c -0.57358,-0.71754 -1.17766,-1.44926 -1.79297,-2.15429 l -0.91211,-1.31641 -0.25,0.0332 c -0.0387,-0.0409 -0.0767,-0.0788 -0.11523,-0.11914 l 0.28711,-0.0254 -13.56836,-19.58203 -2.73828,2.55664 c 0,0 -0.9125,1.27841 0.73046,4.19922 1.64296,2.92081 7.84961,11.5 7.84961,11.5 l 1.625,1.84766 3.54883,-0.30274 c 0.18898,0.29968 0.3814,0.60971 0.57813,0.9336 l 0.63672,1.35546 -24.003907,3.91797 -0.07422,3.4375 1.027343,2.92188 0.433594,3.07617 0.882813,0.72656 26.480467,-3.31054 5.88867,-1.14649 1.17188,0.14649 0.58398,1.31445 0.29102,1.90234 -3.55469,0.15625 -9.49219,5.47657 -2.18945,2.92187 11.13476,12.04687 2.27539,-4.73242 2.6543,-8.04492 1.51172,-3.14258 0.10352,1.41016 0.20898,2.82812 3.27148,0.73243 0.10547,2.0957 -5.66406,5.14648 1.37891,1.44532 5.83789,-4.94922 2.37304,1.73437 -6.15625,5.36914 1.66602,1.74805 5.49414,-5.38281 2.28125,1.1875 -6.06445,5.98633 1.35351,1.41992 5.99024,-5.76367 1.55078,1.64257 -5.8711,5.8711 1.69532,1.77734 5.91015,-5.82226 1.82618,1.91601 -6.14258,5.57813 2.29687,2.4082 4.28906,-4.47656 0.0234,-0.27735 c 0,0 3.18373,-4.14362 3.54883,-4.32617 0.3651,-0.18255 1.18555,1.64258 1.18555,1.64258 0,0 -1.00418,0.6375 -1.73438,1.45898 -0.2944,0.33122 -0.48094,1.73652 -0.60351,3.28907 l 0.60156,1 4.8125,3.77539 1.67187,-1.03516 3.22461,6.45117 4.75977,1.33985 0.30078,2.33984 0.49414,0.0156 0.59375,2.17773 0.73242,1.31641 0.21875,1.39062 1.09766,1.39063 0.80273,2.12109 0.50977,1.60742 0.87695,1.39063 0.43946,1.09765 1.02148,1.39063 0.73047,1.60937 0.4375,1.60938 0.58594,1.38867 0.80468,1.68359 0.73047,1.38868 0.51172,2.19531 z",
    PH02: "m 321.23913,423.5784 -0.65821,0.14648 -0.65625,0.21875 -0.22265,0.36719 -0.875,0.21875 -0.58594,0.0742 -0.94727,0.51172 -0.95117,0.0723 h -1.02344 l -0.58398,0.14649 h -0.36523 l -1.53516,0.0742 h -0.51172 l -0.4375,-0.14844 -0.36523,-0.0723 -0.0156,-0.006 -0.20508,0.37305 -0.14648,0.73242 v 0.4375 l 0.0723,0.58594 0.21875,0.51172 v 0.73242 l -0.21875,0.80469 -0.0723,0.65625 -0.36328,0.51367 -0.58789,0.29102 -0.36328,0.51367 -0.22071,0.29101 -0.58594,0.22266 -1.3125,0.87695 -0.14648,0.36524 v 0.29297 l -0.14648,0.58398 v 0.51172 0.58594 0.58398 l -0.14649,0.58789 -0.51172,1.0957 -0.4375,0.58594 -0.14648,0.36524 -0.80274,0.87695 -0.29296,0.87695 -0.14649,0.58789 -0.73047,0.87696 -0.80469,0.51171 -0.36523,-0.0723 -0.58398,-0.14453 -0.43946,-0.22266 -0.29101,-0.51172 v -0.4375 l -0.4375,-0.8789 -0.65821,-0.65625 -0.36718,-0.14844 h -1.02344 l -0.51172,0.36719 -0.50977,0.58593 v 0.73047 0.87696 l 0.29102,0.58398 0.58594,0.36523 0.36523,0.36719 0.58399,0.6582 0.36523,0.4375 0.2207,0.73243 v 0.4375 0.51172 l 0.0723,0.80468 0.36523,0.51367 0.29297,0.58399 0.14649,0.58398 0.73047,0.88086 0.58398,0.36328 h 0.36524 l 0.80468,0.65821 0.4375,0.14648 0.43946,0.4375 0.58398,0.58594 0.36523,0.6582 0.36524,0.14649 0.51172,0.58398 0.51367,0.51367 0.4375,0.36524 0.58398,0.14648 0.36524,0.4375 0.21875,0.36524 0.43945,0.29296 0.65625,0.36524 0.32227,0.13867 0.0332,-0.28711 0.65625,-1.02344 0.80469,-0.14648 0.58398,0.2207 h 0.51172 l 0.6582,-0.2207 h 0.73047 l 0.94727,0.14648 0.51367,0.29297 h 1.32813 l 1.0957,-0.0742 h 0.8789 l 1.16797,-0.14453 0.58399,-0.2207 0.21875,-0.43945 0.0742,-0.51172 -0.0742,-0.58399 -0.14453,-0.36718 v -0.65821 l -0.0742,-0.73047 v -0.21875 -0.73046 -0.51368 l 0.0742,-0.80468 0.29296,-0.73047 0.0723,-0.65821 0.21875,-0.58593 0.14453,-0.36524 v -0.36523 l 0.22071,-0.29297 0.21874,-0.29297 0.29493,-0.29297 0.4375,-0.51172 0.36523,-0.21875 0.36524,-0.29492 0.51171,-0.14453 0.51172,-0.14844 0.65625,-0.21679 0.43946,-0.36719 0.72851,-0.4375 0.58594,-0.36524 0.29101,-0.29296 0.36524,-0.51172 0.36719,-0.58789 0.14453,-0.58204 0.36523,-0.66015 0.21875,-0.51172 0.22266,-0.6582 0.51172,-0.29102 h 0.95117 l 0.94922,-0.0742 h 0.58398 l 0.73047,-0.29101 0.50977,-0.22071 0.36523,-0.51367 0.22266,-0.2207 h 0.002 l 0.0684,-0.2168 -0.2207,-0.36523 -0.36524,-0.80469 -0.4375,-0.36719 -0.36523,-0.4375 -0.36524,-0.36523 -0.4375,-0.43946 -0.36523,-0.29296 -0.14649,-0.29297 -0.0723,-0.72852 -0.0742,-0.58594 v -0.80664 l -0.14453,-0.73047 -0.21875,-0.58398 -0.58594,-0.6582 -0.51172,-0.36719 -0.43945,-0.36524 -0.87695,-0.51171 -0.51368,-0.4375 -1.38671,-0.66016 -0.4375,-0.14453 -0.73243,-0.58594 -1.02343,-0.36523 -0.36524,-0.29297 -0.29101,-0.29297 -0.51368,-0.4375 -0.58203,-0.43945 z",
    PH03: "m 393.71625,168.916 0.17773,-0.31055 0.21875,-0.80469 0.73047,-0.58398 0.58594,-0.73242 0.21875,-0.73047 0.58398,-0.73047 0.87696,-0.58594 0.21875,-1.02344 0.58789,-0.51171 0.51172,-0.58594 0.29101,-0.36524 0.36719,-0.73046 0.36328,-0.29297 0.29102,-0.51368 0.29296,-0.73046 0.29297,-0.58594 0.14649,-0.51172 0.29101,-0.73242 0.29297,-0.6582 0.29297,-0.80469 0.36524,-0.65821 0.51171,-0.80468 0.29102,-0.51368 0.29297,-0.94921 0.51172,-0.58594 0.58398,-1.31641 0.0742,-1.02344 v -0.87695 l -0.21875,-1.02344 -0.0742,-0.80664 v -0.65625 -0.95117 l -0.14453,-0.95117 -0.2207,-0.80469 -0.14453,-0.80664 v -1.0957 -0.80469 l -0.29297,-0.51172 -0.14649,-0.95117 -0.14453,-0.73242 v -0.80469 l 0.29102,-0.80469 v -0.51171 -0.65821 -0.14648 l -0.14649,-0.80469 v -1.09766 -0.51172 -1.24218 -0.66016 l 0.14649,-0.73047 0.29297,-0.6582 v -0.87891 l 0.29296,-0.87695 V 128.666 l -0.0723,-0.58399 v -0.73047 l 0.14453,-0.6582 0.14649,-0.8789 v -0.73243 -0.73047 l 0.0742,-1.02343 v -0.58594 l 0.29102,-1.02148 0.36523,-1.31836 0.0703,-0.29102 0.22265,-0.73047 0.29297,-0.8789 0.72852,-0.95118 0.2207,-0.80468 0.2207,-0.87696 0.14453,-0.80468 -0.0703,-0.73243 0.21875,-0.51171 v -1.02344 l 0.21875,-0.58399 0.0723,-0.8789 0.29297,-1.16993 0.0742,-0.80468 v -0.73047 l -0.0742,-0.95117 0.36718,-0.58594 0.58399,-1.02344 1.02148,-1.75586 0.14649,-0.58398 0.50976,-1.31641 0.80469,-1.24414 0.29297,-1.02344 0.36328,-1.09765 0.36719,-1.02344 0.51172,-1.09766 0.50976,-0.87695 0.14844,-0.80469 0.65625,-1.46289 0.58594,-0.6582 0.0723,-1.02344 0.58399,-0.73242 0.14648,-0.80469 0.21875,-0.36523 0.14649,-0.66016 0.73046,-1.0957 0.14649,-0.87891 0.58203,-0.94922 0.22266,-0.58593 0.14453,-0.58399 0.58594,-1.02539 0.29296,-0.73047 0.65625,-1.24414 0.58399,-1.0957 0.36523,-0.95117 0.29297,-1.09766 0.36524,-0.87695 0.6582,-1.31641 0.21875,-0.2207 0.21875,-0.73047 0.29297,-0.87695 0.80469,-1.31836 0.36523,-1.24219 0.29101,-1.09766 0.87696,-1.24414 0.51367,-1.7539 0.21875,-0.95118 0.2207,-0.51171 0.94922,-1.60938 0.29297,-0.6582 0.29102,-0.58399 0.29297,-0.8789 0.2207,-0.73047 0.80273,-0.58594 0.58594,-0.80273 0.65625,-1.16993 0.36719,-0.29296 0.50976,-0.65821 0.51172,-0.8789 0.73047,-0.51172 0.29297,-0.87891 0.51172,-1.09765 0.73047,-0.36524 0.29297,-1.02344 0.14648,-0.51367 0.2168,-0.6582 0.29297,-0.80469 0.58593,-0.87695 v -0.80469 l 0.14649,-0.73242 0.29101,-0.87696 0.29297,-0.58398 v -0.58594 l 0.2207,-0.73047 0.36329,-1.02343 -0.0723,-1.02344 v -0.73242 -1.31641 -0.6582 l -0.0723,-1.24414 -0.21876,-0.87696 -0.66015,-0.2207 -1.75195,-0.6582 -0.73243,-0.65821 -0.65625,-0.14648 -0.58593,-0.36523 0.14843,-0.43946 -0.58593,-0.21875 -0.73047,-0.29297 -0.58594,-0.29296 -0.73047,-0.51172 -0.94922,-0.585941 -0.36523,-0.21875 -0.80469,-0.583984 -1.24219,-0.660156 -0.65625,-0.144531 -1.02343,-0.367188 -0.21875,-0.365234 -1.02344,-0.658204 h -0.58399 l -0.73242,0.07227 -0.50976,0.148438 h -0.73243 -0.58398 l -0.51172,-0.07422 -0.4375,-0.21875 h -0.29297 l -0.29297,-0.292969 v -0.4375 l 0.14453,-0.439453 0.22071,-0.804687 0.2207,-0.583985 0.29102,-0.585937 0.14453,-0.658204 v -0.511718 l 0.0742,-1.023438 0.36328,-0.583984 0.2207,-0.951172 v -0.951172 l 0.0723,-0.511719 -0.0723,-0.513671 -0.29297,-0.730469 -0.21875,-0.804688 -0.0723,-0.730469 -0.14649,-0.660156 0.0723,-0.658203 0.58789,-0.804687 0.21875,-0.146485 0.36523,-0.730469 v -0.732421 -0.75 -0.511719 l -0.51367,-1.31836 V 15.20897 l -0.29297,-0.876953 -0.14453,-0.730469 -0.0723,-0.660156 -0.0723,-0.583985 -0.2207,-0.732422 -0.14649,-0.876953 -0.0723,-0.804687 -0.0742,-1.244141 -0.0723,-0.876953 0.0723,-0.730469 0.36523,-0.367187 0.58594,-0.292969 0.58398,-0.146484 0.65821,-0.511719 0.51172,-0.21875 0.51172,-0.365234 0.29296,-0.511719 V 3.943345 l -0.29296,-0.511719 -0.21876,-0.730469 -0.0742,-0.804687 -0.0723,-0.511719 -0.14648,-0.732422 0.14648,-0.804687 0.14648,-0.365235 0.51172,-0.658203 0.65625,-0.292969 0.80274,-0.511718 0.66015,-0.292969 0.50977,0.144531 h 0.95117 l 0.58399,-0.21875 h 0.95117 l 0.95117,0.292969 h 1.24219 l 0.94726,-0.292969 0.22071,-0.365234 0.14453,-0.658203 v -0.876953 l -0.0723,-0.878907 0.0723,-0.730468 0.36523,-0.658203 0.65821,-0.878907 0.73046,-0.802734 0.36524,-0.148438 0.87695,-0.730468 0.36524,-0.365235 0.36718,-0.583984 0.36328,-0.292969 0.14649,-0.583984 v -0.660157 l -0.0723,-0.291015 v -0.658203 -1.097656 l -0.36523,-0.511719 v -0.806641 -0.658203 l -0.2207,-0.804687 -0.14649,-0.951172 v -0.804688 l -0.14453,-0.951172 v -0.804687 l 0.21875,-0.732422 0.87695,-1.023438 0.80469,-0.730468 0.73047,-0.585938 0.2207,-0.365234 0.58399,-0.658203 0.58398,-0.804688 0.51172,-0.585937 0.29297,-1.095703 0.29101,-0.878907 0.29297,-0.21875 0.65821,-0.21875 0.73047,-0.146484 0.80468,-0.07227 0.94922,-0.148437 1.46094,-0.583985 0.58594,-0.658203 0.73046,-0.292968 0.58399,-0.658204 0.87695,-0.21875 0.72852,-0.21875 0.36719,-0.292968 0.51367,-0.658204 0.65625,-0.146484 0.51172,-0.583984 0.51171,-0.732422 0.51172,-0.658203 0.51172,-0.585938 0.0742,-0.802734 0.29102,-0.585938 0.51172,-0.658203 0.58593,-0.730468 0.14453,-0.365235 0.21875,-0.732422 0.29297,-0.730469 0.36719,-1.24414 0.14649,-0.583984 V -41.9883 l -0.0723,-0.876953 -0.14649,-0.292969 -1.25585,1.019532 -0.29297,0.585937 -1.3125,-0.511719 -0.87696,-0.292968 -0.8789,-0.21875 h -0.80664 l -1.45899,-0.07227 h -1.02343 l -1.60743,0.07227 -2.1914,-0.07227 -1.16993,-0.07422 h -1.02148 l -1.16992,0.07422 -1.02344,0.07227 -2.1914,0.146484 h -1.16993 l -1.02343,0.583984 -1.53321,0.21875 -0.87695,0.07422 -1.24219,0.21875 h -1.46289 l -0.80469,0.220703 -1.31445,0.144531 h -0.6582 -0.36524 l -0.87695,0.292969 -1.16992,0.07227 h -1.16797 l -0.80469,0.292969 h -1.24219 -0.73046 l -0.73047,-0.07227 h -1.09766 l -0.72851,0.146484 -0.65626,-0.07422 h -0.95117 l -1.02343,0.07422 -0.73047,-0.220703 h -0.73243 l -0.58398,-0.146484 -0.58398,-0.291016 -0.36133,-0.292969 -0.66016,-0.365234 -1.02344,-0.292969 -1.02343,-0.07227 -1.89844,0.291015 -0.73047,0.367188 h -0.36523 l -0.29102,0.365234 -0.66016,0.367188 -0.80273,0.730469 -0.6582,0.583984 -0.73047,1.171875 -0.6582,0.876953 v 1.023438 l 0.51171,1.097656 v 1.097656 l -0.65625,1.169922 -0.80468,1.169922 -0.80469,1.097656 -1.0957,0.732422 -0.87696,0.365234 -1.02343,0.585938 -0.21876,0.65625 -0.58398,1.02539 -0.29297,0.876954 -1.0957,0.292968 -1.24219,-0.365234 h -1.3164 l -1.31641,0.21875 -1.24219,0.07422 -0.6582,-0.07422 -1.60547,0.07422 -1.02344,0.146484 -0.875,0.583984 -0.73242,0.511719 -0.73047,0.439453 -0.6582,0.07227 -0.80469,-0.292969 -0.36523,-0.583984 0.0742,-0.4375 -0.14454,-0.511719 -0.36523,-0.658203 -0.51172,-0.439453 -0.58398,-0.583985 -0.73243,0.21875 -0.58398,0.878907 -0.16602,0.884765 0.22266,0.138672 0.36328,0.511719 v 0.367187 l -0.0723,1.023438 0.0723,1.169922 v 0.951172 0.583984 l -0.0723,0.878906 0.0723,0.876953 0.0762,1.023438 0.14258,0.951172 -0.14258,0.876953 v 0.585937 1.023438 l 0.0703,0.511719 v 0.804687 l -0.14649,0.732422 -0.21875,0.730469 -0.50976,0.511718 -0.58594,0.292969 -0.6582,0.21875 -0.65625,0.07422 h -0.73047 -0.94922 l -0.65821,0.21875 h -0.73046 l -0.80469,0.732422 -0.80274,0.291016 -0.22265,0.732421 -0.36328,0.365235 -0.80469,0.367187 -0.29297,0.365235 -0.51172,1.023437 -0.29101,0.658203 -0.51368,0.365235 -0.73046,0.730468 -0.51172,0.367188 -0.73047,0.291015 -0.80274,0.07422 -0.6582,0.07227 h -0.51172 l -0.6582,-0.07227 -1.3125,0.07227 -1.16797,-0.07227 h -0.66016 -1.02343 l -0.94922,-0.07422 -2.48438,0.878907 -1.09765,0.511719 -1.09571,0.658203 -0.94922,1.537109 -0.73242,1.023438 -0.36523,1.023437 -0.29297,0.511719 -0.21875,0.513672 0.21875,0.511718 v 0.804688 1.46289 l -0.36524,1.023438 0.14649,1.025391 -0.36523,1.169921 -0.58399,1.097657 -0.72851,1.316406 -0.29297,0.511719 -0.22071,0.802734 -0.65625,0.513672 v 0.730469 l -0.29492,0.511719 -0.51172,0.513671 -0.80273,0.876953 -0.73047,0.583985 -0.14453,0.732422 -0.6582,0.804687 -0.94922,1.095703 -0.73047,0.658203 -0.66016,1.171876 -0.65625,0.730468 -1.16992,0.511719 -1.0957,0.292969 -0.87696,0.513672 -1.02539,0.509765 -0.50976,0.220703 -0.73243,0.876954 -0.50976,0.660156 -0.80274,0.21875 h -1.24414 l -1.46093,0.07227 -1.24219,0.07422 h -2.11914 -2.04688 l -1.89843,0.146484 -1.75586,0.21875 -0.87696,0.21875 -0.51171,0.732422 -0.29297,-0.07422 h -0.58399 -0.80469 l -0.36523,-0.292969 -0.73047,-0.291016 -0.29297,0.146485 -0.65625,1.24414 -0.29101,0.583985 -0.29297,0.658203 -0.36524,-0.07227 -0.51171,-0.513672 -0.8125,-0.580078 -0.72852,-0.585937 -0.29492,-0.144532 h -0.80274 l -0.29297,1.314453 -0.73046,0.513672 -0.80274,0.21875 -0.51172,0.292969 -0.6582,0.21875 -0.6582,-0.658203 -0.65821,-0.585938 -0.58398,-0.730468 -0.73047,-1.023438 -1.16992,-0.292968 -1.82617,0.07422 -0.94922,0.511719 -0.51367,0.365234 -0.65821,0.292969 -0.87695,0.07227 h -1.97266 l -1.53515,0.07422 h -1.09571 -1.09765 -1.02344 l -1.0957,0.07227 -1.75391,0.07227 -1.31445,0.146484 h -0.80469 -1.02344 -0.36523 l -0.94922,-0.07227 -0.87695,0.365235 -0.87696,0.07227 -0.87695,-0.292968 h -0.80469 l -0.58398,-0.144532 -1.46289,0.511719 h -1.60547 -1.68359 l -1.24219,0.07227 -1.09571,0.07422 h -0.95117 -1.16797 l -1.0957,-0.07422 h -1.02344 -1.24218 l -1.4629,0.07422 h -1.16796 -0.87696 l -1.0957,0.21875 -0.51172,0.876953 -1.0957,0.878906 -0.51172,0.730469 -0.73047,0.878906 -0.0742,0.511719 -0.80273,0.583984 -0.36719,0.585938 -0.73047,0.511718 -0.21875,1.097657 -0.87695,0.951172 -0.58399,0.511718 -0.87695,0.730461 -0.73047,0.65821 -0.87695,0.0742 -0.87695,-0.29297 -0.65821,-0.36524 -0.29297,-0.804681 -0.0723,-0.585937 v -0.583985 l -0.21875,-1.169922 v -0.804687 l -0.73047,-0.585937 -1.16992,-0.292969 h -1.02344 l -0.58398,-0.144531 -1.09571,0.144531 -0.21875,0.513672 v 0.949218 l 0.14453,1.097657 0.14649,0.730468 -0.0723,0.367188 -0.80273,0.949215 -0.80469,0.80469 -0.58594,0.36719 -0.87695,0.73046 -0.80273,0.29297 -1.02344,0.21875 -0.58399,0.73047 -0.51171,1.09766 v 1.16992 l -0.0723,0.95117 0.14648,0.95117 -0.14648,1.02539 -0.36523,1.02344 -0.73243,0.87696 -0.50976,0.87695 -0.65821,0.73242 -1.02343,0.58398 -0.73047,0.22071 -0.29102,0.65625 -0.58594,0.51367 -0.6582,0.21875 -1.16797,0.14648 h -1.24414 l -1.0957,0.0723 -1.31641,0.36523 -1.0957,0.22071 h -1.16992 l -1.02344,0.29101 -0.65625,0.51172 -0.14648,0.58594 -0.65821,0.2207 -0.58398,0.29102 -0.29102,0.36719 -0.73047,-0.0742 -0.58398,-0.29297 h -0.95117 l -0.58399,-0.14649 -0.87695,0.0742 -1.02344,0.36524 -0.29297,0.51172 -0.87695,0.21874 -0.58398,0.29297 -0.21875,0.65821 0.14453,0.80664 0.6582,-0.22071 0.36524,0.29297 0.51171,0.87696 0.51172,0.51367 0.36524,0.36523 0.73047,0.95117 0.0742,0.80469 -0.14649,0.6582 -0.51172,0.73243 -0.51172,0.58398 -0.29297,0.6582 -0.36523,0.51172 -0.51172,0.21875 h -0.36523 l -1.02344,0.22071 -1.02344,0.29297 -0.87695,0.29101 -0.29102,0.29297 -0.29297,0.73242 v 0.87695 l -0.58593,0.36524 -0.73047,0.14648 -0.50977,0.29297 -0.73242,0.14649 -1.02148,0.14648 -0.73047,0.51172 -1.09571,0.51172 -0.80468,0.73242 -0.36524,0.36719 -0.2207,0.73047 -0.14453,1.02343 -0.36524,0.80469 -0.6582,0.6582 -0.51172,0.29297 -0.51172,0.29102 -0.58398,0.2207 -0.87695,0.58399 -0.29297,0.73242 -0.29297,0.65625 v 0.80469 l 0.51172,0.66015 0.51172,0.80469 0.0742,0.36523 0.14649,0.36524 -0.58594,1.02344 -0.0723,0.66015 -0.22071,0.65821 v 0.65624 0.51954 0.36718 l -0.0723,0.87696 v 0.95117 l 0.29101,0.51172 v 1.16992 l 0.29297,0.95117 0.29102,0.87695 v 0.73243 l -0.14649,1.60937 -0.14453,0.87695 -0.36523,0.87696 -0.14649,0.95117 -0.14648,0.95117 -0.36524,0.87695 -0.29296,0.87696 -0.0742,0.6582 -0.0723,0.58594 -0.14648,1.02344 0.0742,0.80468 0.87696,1.68164 0.36523,0.51172 0.29297,0.58399 0.50977,1.16992 v 0.66016 l -0.58399,1.02343 -0.51172,0.80469 -0.58398,0.6582 -0.58398,0.87696 -0.73243,0.95117 -0.0723,0.80469 -0.21875,0.95117 -0.0723,0.73047 -0.0723,0.8789 0.0723,0.87696 0.21875,0.58593 0.36524,0.65625 0.29296,0.58594 0.14649,0.51172 h 0.6582 0.21875 l 0.58399,-0.58398 0.51172,-0.66016 0.51171,-0.51172 0.58594,-0.21875 1.02149,-0.21875 h 1.24218 l 0.95118,0.6582 0.21875,0.65821 v 0.87695 0.73047 l 0.14453,0.6582 0.2207,0.51172 0.21875,0.58594 0.80273,0.36523 0.51368,0.51172 0.50976,0.29297 0.22071,0.36523 0.36523,0.51172 0.87695,0.87891 0.36524,0.6582 0.21875,0.51172 0.51172,0.29297 0.51171,0.29102 0.29297,0.58593 0.21875,0.51172 0.36524,0.36524 0.6582,0.58593 0.58398,0.51172 0.36524,0.36524 0.21875,0.36523 0.36719,0.21875 0.73047,0.73242 0.5039,0.60938 0.29297,0.58594 0.29102,0.51171 0.58593,0.51172 0.51172,0.21875 0.80274,0.36719 0.58398,0.51172 v 0.87695 l 0.0742,1.02539 0.0742,0.51172 -0.36524,0.73047 -0.51171,0.51172 -0.21875,1.02539 -0.51368,0.6582 -0.36328,1.02344 -0.0742,1.02344 -0.21875,0.95117 -0.58398,0.80469 -0.0742,0.73242 -0.0742,0.36523 -0.58398,0.80469 -0.65821,0.58399 -0.6582,0.51171 -0.36328,0.58399 -0.58594,0.66015 -0.29101,0.51172 -0.51368,0.65821 -0.80273,0.58398 -0.58594,0.66016 -0.80273,0.6582 -0.6582,0.73242 -0.58399,0.87696 -1.02344,0.6582 -0.21875,0.58398 -0.58593,0.58594 -0.65625,0.51172 -0.36524,0.29297 -0.29297,0.58398 -0.6582,0.80469 -0.36523,0.6582 -0.51172,0.21875 0.14648,0.14649 -0.36523,0.29297 -0.29297,0.36328 -0.36328,0.51367 -0.58399,0.51172 -0.51367,0.36718 -0.65625,0.65821 -0.73242,0.51172 -0.875,0.58398 -0.95117,1.31641 -0.73047,0.6582 -0.51172,0.87695 -0.51172,0.36719 -0.6582,0.58399 -0.58399,0.6582 -0.87695,0.58594 -0.51172,0.80273 -0.58398,0.58594 -0.80274,0.95117 -0.58398,0.29297 -0.65821,0.6582 -0.80468,0.95117 -0.65821,0.51172 -0.50976,0.36524 -0.36524,0.29297 -0.29296,0.73046 -0.73047,0.58594 -0.73047,0.58399 -0.36719,0.36523 -0.36523,0.51172 -0.36524,0.87891 -0.51172,0.50976 -0.36523,0.0742 -0.58399,0.51172 -0.29296,0.66015 -0.36524,0.36524 -0.51172,0.14453 -0.36523,0.6582 -0.58399,0.73243 -0.6582,0.21875 -0.36523,0.6582 -0.51172,0.36523 -0.36524,0.22071 -0.36523,0.36523 -0.21875,0.73047 -0.36524,0.36523 -0.58593,0.21875 -0.51172,0.73243 -0.51172,0.58593 -0.51172,0.58399 -0.51172,0.58594 -0.50976,0.21874 -0.58594,0.65821 -0.51172,0.29297 -0.36523,0.65625 -0.58399,0.80664 -0.73047,0.36523 -0.29297,0.51172 -0.36523,0.29297 -0.6582,0.73047 -0.65625,0.51172 -0.51172,0.66015 -0.51172,0.29297 -0.51172,0.21875 -0.2207,0.58399 -0.80274,0.58398 -0.58398,0.87891 -0.51172,0.36523 -0.51172,0.58399 -0.2207,0.66015 v 0.87696 0.58398 l 0.0742,1.53711 0.0723,0.73047 v 1.02539 1.24414 0.94922 l 0.0723,2.34179 v 0.51172 1.24414 0.58399 l -0.0723,0.80469 -0.29101,1.46289 -0.36719,0.80468 -0.29102,0.80469 -0.36523,0.6582 -1.46289,-0.14648 -0.36524,0.95117 -0.65625,0.95313 -0.2207,0.87695 -0.0703,0.51172 -0.51367,1.02344 -0.58399,0.6582 -0.29297,0.58594 -0.36328,0.58398 v 0.80469 l -0.51367,0.87695 -0.50977,1.02344 -0.51171,0.73242 -0.29297,0.36524 -0.29297,0.6582 -0.29102,0.73047 -0.2207,0.73242 -0.29102,0.51172 -0.51171,0.95117 -0.29297,0.73242 -0.29102,0.95117 -0.36719,0.73047 -0.21875,0.36524 -0.21875,1.17187 -0.6582,0.65625 -0.50977,0.87695 -0.0742,1.0254 -0.51172,0.58398 -0.21875,0.95117 -0.73047,0.87891 -0.36719,1.02344 -0.29101,0.8789 -0.21876,1.0957 -0.29296,0.95118 -0.29297,0.80468 -0.21875,0.58594 -0.0742,0.73047 -0.14649,1.09766 -0.29101,0.95117 -0.58594,0.95117 -0.36523,0.58399 -0.29102,0.8789 -0.2207,0.58399 -0.0723,0.6582 -0.14648,1.09765 v 1.09766 0.73047 0.87695 l 0.21875,1.16992 0.2207,0.73047 0.14649,0.87696 0.21875,1.02539 0.36523,1.24414 v 0.95117 0.58398 l -0.36523,0.95118 -0.14649,1.02343 -0.14648,0.95118 -0.36524,1.02539 -0.58398,1.60742 -0.29297,1.09765 -0.21875,0.87696 -0.51172,1.24414 -0.14648,0.80469 -0.21875,0.6582 -0.29102,1.09765 -0.2207,0.80469 v 0.51172 l -0.36524,0.58594 -0.21875,0.51172 0.0742,0.80469 -0.0742,0.73046 -0.29101,0.87891 -0.0742,0.87695 v 0.65821 l -0.0723,0.51171 -0.51172,0.80469 -0.21875,0.36524 -0.29296,0.73242 0.0723,0.65625 0.2207,0.51367 0.36524,0.51172 0.65625,0.36523 0.58594,0.73047 0.51172,0.36524 0.36523,0.58593 0.6582,0.21875 0.73242,0.29297 0.29102,0.58399 0.80469,0.2207 0.51172,0.73047 0.58398,0.73047 0.6582,0.51172 0.58399,0.6582 0.6582,0.29297 0.80274,0.51172 0.6582,0.6582 0.36523,0.58594 0.58399,0.36523 0.73047,0.36524 0.36718,0.51367 0.51172,0.21875 0.58399,0.36523 0.36523,0.58594 0.14649,0.29102 0.80468,0.36523 0.36524,0.51367 0.51172,0.29102 0.95117,0.66015 0.6582,0.51172 0.36524,0.65821 0.94921,0.21875 0.14649,0.51171 0.14648,0.58594 0.65821,0.29102 0.80273,0.51367 0.58594,0.6582 0.29101,0.58399 1.02344,0.58594 0.80469,0.51171 0.51172,0.51172 0.51172,0.51172 0.58398,0.73047 0.6582,0.29297 0.29102,0.6582 0.94922,0.65821 0.58594,0.14453 0.58593,0.80468 0.94727,0.65821 0.80469,0.36718 0.6582,0.95118 0.36328,0.50976 0.95117,0.51172 0.80274,0.51367 0.29297,0.36524 0.87695,0.80468 0.58398,0.36719 0.29297,0.36524 0.36524,0.51172 0.87695,0.51171 0.73047,0.29297 0.58594,0.21875 0.36523,0.80274 0.36523,0.14648 0.51172,0.58594 0.51172,0.58398 0.875,0.36719 0.29297,0.6582 0.29297,0.51172 0.58398,0.29297 0.73047,0.36524 0.58399,0.29296 0.29297,0.58399 0.51171,0.36719 1.09571,0.21875 1.0957,-0.0742 1.46289,0.29297 0.58399,0.58398 0.6582,0.73242 0.73047,0.58399 0.29297,0.51172 0.21875,0.6582 0.14648,0.66016 0.36523,0.51171 0.58399,0.36524 0.51367,0.51172 0.73047,0.51172 0.80273,0.36718 1.02344,0.65821 0.36524,0.36523 0.6582,0.29297 1.0957,0.29102 0.80469,0.51171 0.875,0.58594 0.58594,0.29297 0.51172,0.14453 0.73047,0.36719 h 0.51171 l 0.88282,0.13672 v -0.79102 l 0.73047,-0.36523 0.4375,-0.58399 0.29296,-0.36718 0.36328,-0.51172 0.58594,-0.51172 0.36524,-0.36524 0.58398,-0.87695 0.36524,-0.36719 0.43945,-1.02343 0.14453,-0.29297 0.14648,-0.36524 0.14649,-0.36523 0.21875,-0.58594 0.36523,-0.87695 0.21875,-0.65821 0.14649,-0.36523 0.21875,-0.80469 v -0.51367 l 0.29297,-0.36328 0.14648,-0.58594 0.14453,-0.36523 0.36719,-0.80664 0.14453,-0.51172 0.36524,-0.87695 0.14648,-0.29297 0.0723,-1.09571 0.14649,-0.36523 0.21875,-0.58594 0.14648,-0.36523 0.21875,-0.58594 0.0742,-0.73047 v -0.36523 l 0.14649,-0.51172 0.36523,-0.51367 0.58399,-0.29102 h 0.73242 0.58398 l 0.80274,0.21875 0.51172,0.43945 0.36523,0.36524 0.80469,0.51172 0.14648,0.29101 0.36524,0.36719 0.29101,0.36523 0.58594,0.4375 0.73047,0.36719 0.36523,0.14453 0.43945,0.51367 0.36524,0.21875 0.58398,0.36524 0.58399,0.29297 h 0.6582 0.87695 l 1.09571,0.14648 0.80469,-0.14648 h 0.58593 l 1.02149,-0.21875 0.95117,0.14648 0.4375,0.0742 0.73047,0.0723 1.02344,0.36523 0.36523,0.36719 1.02344,0.36523 0.73047,0.29297 0.73046,0.36524 0.87696,0.36718 0.4375,0.36524 0.87695,0.51172 0.58399,0.14648 1.31445,0.51172 0.2207,0.14648 0.94922,0.58399 0.51172,0.36523 0.4375,0.51172 0.58398,0.87891 0.29297,0.6582 0.43946,1.16992 0.0703,0.36524 0.29297,0.95117 0.43945,0.36523 0.51172,0.0742 0.94922,-0.36523 0.6582,-0.36524 0.6582,-0.29492 0.36524,-0.21875 0.29297,-0.36523 0.58398,-0.21875 0.6582,-0.29297 0.87696,-0.58399 0.14648,-0.36718 0.65625,-0.51172 0.87891,-0.36524 0.50976,-0.43945 0.87696,-0.80469 0.73046,-0.36523 0.4375,-0.29102 0.87696,0.0723 0.80469,0.14648 0.875,0.36524 0.87695,0.14453 0.36523,0.0742 0.58594,0.14648 0.94922,0.51172 0.87695,0.36719 0.95117,-0.0742 0.875,-0.21875 1.16993,-0.14844 1.02343,-0.21875 0.95118,-0.14648 1.0957,-0.14649 1.24219,-0.14648 h 0.6582 0.4375 l 0.6582,0.0742 0.36524,0.21875 0.21875,0.51367 0.14648,0.36523 0.4375,0.36524 0.29297,0.58594 0.29297,0.58398 0.14453,0.36523 0.14648,0.87891 0.14649,0.36523 0.21875,0.4375 0.36719,0.73243 0.29101,0.4375 0.29297,0.95117 0.29297,0.29297 0.29297,0.58398 0.21875,0.6582 0.14648,0.58594 0.21875,0.36524 0.36524,0.29296 0.58398,0.0723 0.58399,-0.14648 0.51171,-0.21875 1.09766,-0.51172 0.36523,-0.22071 1.38868,-0.73046 0.51172,-0.29102 0.43945,-0.14648 1.0957,-0.58594 1.09571,-0.4375 0.43945,-0.14649 0.36523,-0.14648 0.73047,-0.0742 0.73047,0.14648 h 0.0723 l 0.51171,0.51172 0.51172,0.80469 0.14649,0.66016 0.36523,0.73047 0.36524,0.58398 0.58398,0.80664 0.29297,0.73047 0.36523,0.43945 0.65625,0.87696 0.58594,1.02343 v 1.02539 1.4629 l -0.0723,0.58398 -0.14649,0.36523 -0.14648,1.09766 0.14648,1.60937 v 0.73243 l 0.21875,1.38867 -0.14648,0.73242 -0.14649,1.02344 -0.14453,0.73047 v 0.29297 l -0.14648,1.24414 -0.36524,1.09765 -0.0742,0.51172 -0.21875,0.73047 -0.0723,0.36523 -0.29297,0.51368 -0.29102,0.80468 v 0.87696 l -0.14648,0.87695 -0.14649,0.43945 -0.14648,0.58594 -0.14453,0.65625 -0.14649,0.80664 -0.29296,0.80274 -0.0723,0.36718 v 0.36524 l 0.14649,0.6582 -0.21876,0.43945 -0.14648,0.4375 -0.29297,0.58594 -0.0703,0.36524 -0.14844,0.6582 -0.0723,0.58594 v 0.36523 l 0.36523,0.4375 0.29297,0.2207 0.51172,0.14649 h 0.51172 l 1.31445,-0.14649 h 0.51172 l 0.2168,0.37696 0.375,-0.23633 0.6582,-0.51172 0.4375,-0.14648 0.43945,-0.0742 0.36524,-0.21875 0.51172,-0.21875 0.58398,-0.14649 1.38672,-0.4375 0.43945,-0.21875 h 0.80469 l 1.02148,-0.29297 0.29297,-0.14648 0.80469,-0.51172 h 0.58398 l 0.58399,-0.21875 0.36523,-0.14648 0.80469,-0.21875 0.58398,-0.0742 0.51172,-0.29102 0.43946,-0.14648 0.58593,-0.29297 0.80274,-0.14649 1.24219,-0.29101 0.58398,-0.14649 0.80469,-0.2207 h 0.87695 l 0.36523,-0.21875 0.58399,-0.14648 0.80469,-0.29102 0.73242,-0.14648 1.01953,-0.21875 0.58594,-0.29297 h 1.16797 l 1.09765,-0.14649 1.02149,-0.14453 0.6582,-0.14648 1.02344,-0.0742 h 1.0957 1.16992 1.24219 l 0.87695,0.14648 1.46289,0.43946 0.58399,0.0723 0.80469,0.21875 0.87695,0.0742 h 0.73047 l 0.8789,0.43945 1.02149,0.36524 0.51172,0.51172 0.4375,0.29297 0.51367,0.4375 1.09765,0.36523 0.4375,0.14649 0.51172,0.2207 1.09571,0.4375 0.58398,0.36523 0.80469,0.43946 0.58594,0.29296 0.43945,0.21875 0.58203,0.36524 h 1.09766 1.02343 l 0.65821,-0.21875 0.4375,-0.58594 0.2207,-0.36523 v -0.58399 l 0.21875,-0.73242 0.29297,-0.80273 -0.0742,-0.22071 -0.21875,-0.73047 -0.0742,-0.36523 v -1.09766 l -0.14453,-0.73242 -0.0723,-0.58398 v -0.87696 -0.58593 -0.87696 l -0.14844,-0.73046 v -0.66016 l -0.50977,-1.46094 -0.21875,-0.6582 v -0.58594 l 0.14453,-0.73047 0.14649,-1.16992 0.14648,-0.95117 v -0.36524 -0.8789 -0.65821 l 0.14649,-0.58398 0.14453,-0.43945 v -0.36524 l 0.14844,-0.58594 0.21679,-0.87695 v -0.21875 l 0.22071,-0.4375 v -0.87695 l 0.14648,-0.58594 0.14453,-0.6582 0.21875,-0.80469 0.43945,-0.58594 0.22071,-0.36523 0.58203,-0.14649 1.09961,-0.0723 0.58398,0.14648 0.58399,0.14649 0.4375,0.36523 0.36718,0.21875 0.14453,0.36719 0.36524,0.21875 0.36719,0.43945 0.21875,0.58399 0.36523,0.36718 0.36524,0.4375 0.58593,0.43946 0.36524,0.21875 0.29101,0.36718 0.43946,0.73047 0.36328,0.43946 0.43945,0.21875 0.36328,0.58593 0.43946,0.36524 0.51171,0.43945 0.87696,0.14649 0.36523,-0.0742 0.36524,-0.29297 0.36523,-0.58399 0.51172,-0.14648 0.29297,-0.29102 0.36523,-0.58593 0.14453,-0.65821 -0.0723,-0.43945 v -0.58398 l 0.14648,-0.36524 0.14844,-0.51172 0.0723,-0.66015 v -0.80469 l -0.36718,-0.87695 -0.21875,-0.36524 -0.36524,-0.58594 -0.36328,-1.02343 -0.22265,-0.58399 -0.36329,-0.43945 -0.29296,-0.36719 -0.51172,-0.51172 -0.43946,-0.4375 -0.58593,-1.02539 -0.14454,-0.36523 -0.21874,-0.36524 -0.22071,-0.58593 -0.4375,-0.58399 -0.29297,-0.36523 -0.36328,-0.58594 -0.36719,-0.73047 -0.21875,-0.58594 -0.36523,-0.4375 -0.87695,-0.58593 -0.29297,-0.29102 -0.65821,-0.51172 -0.51171,-0.58594 -0.36524,-0.36523 -0.80469,-0.29297 -0.72851,-0.29297 -0.6582,-0.36523 -0.65821,-0.6582 -0.73047,-0.65821 -0.80468,-0.8789 -0.36329,-0.14649 -1.0957,-0.21875 -0.2207,-0.43945 -0.87695,-0.6582 -0.22266,-0.36524 -1.0957,-0.51172 -0.51368,-0.36523 -0.50976,-0.36719 -0.58399,-0.73047 -1.02343,-0.73047 -0.43946,-0.51172 -0.14453,-0.36718 -0.29297,-0.73047 -0.2207,-0.36524 -0.36328,-0.58593 -0.36523,-0.29297 -0.36524,-0.51172 -0.51367,-1.38867 -0.2168,-0.80469 -0.58789,-1.31641 v -0.8789 l 0.14844,-0.50977 0.21875,-0.66016 0.29297,-0.58398 -0.22071,-0.58398 -0.0723,-0.66016 -0.43945,-1.0957 -0.65625,-0.29297 -0.80469,-0.87891 -0.73047,-0.4375 -0.87695,-0.36719 -0.87696,-0.58398 -0.58398,-1.09766 -0.58594,-0.43945 -0.14453,-0.4375 0.4375,-0.95117 0.36719,-0.43946 0.51172,-0.51171 0.0723,-0.65821 0.14649,-0.58593 v -0.58399 l -0.73047,-0.36523 -0.29297,-0.36524 -0.21875,-0.29297 -0.36524,-0.21875 -0.43945,-0.58593 -0.51172,-0.29297 -0.50976,-0.51172 -0.51367,-0.51172 -0.14649,-0.29102 0.29102,-0.36718 0.2207,-0.29102 0.14648,-0.58398 -0.2207,-0.43946 -0.14648,-0.36523 v -0.36524 l -0.14453,-0.58593 0.29296,-0.51172 v -0.51172 l -0.14648,-0.73242 -0.14648,-0.43945 -0.14454,-0.14454 v -0.58593 l 0.36328,-0.36524 0.22071,-0.6582 -0.14649,-0.29297 -0.21875,-0.36719 0.14453,-0.4375 0.44141,-0.36523 0.72852,-0.36719 0.29297,-0.14453 0.58398,-0.58594 1.09766,-0.36523 0.87695,-0.58594 0.36523,-0.0723 0.80469,-0.95117 0.29102,-0.21875 0.29492,-0.58594 0.0703,-0.29101 0.22266,-0.95117 v -0.73242 -0.73047 -0.80469 l -0.0742,-0.58398 v -0.43946 l -0.0742,-0.58398 -0.21875,-0.87891 v -0.87695 l 0.14453,-0.51172 0.22266,-0.4375 0.36328,-0.14648 0.36328,-0.87696 0.58594,-1.24414 0.43945,-0.43945 0.87695,-0.36524 0.29297,-0.51171 0.0703,-0.43946 v -0.36523 l 0.36719,-0.66016 0.14453,-0.29101 0.36719,-0.29297 0.2207,-0.51172 0.36329,-0.58399 0.0742,-0.36718 0.36524,-0.58399 0.14453,-0.43945 0.4375,-0.87695 0.29492,-0.58399 0.29297,-0.66016 0.58203,-0.87695 0.14844,-0.4375 0.51172,-0.73242 0.29101,-0.73047 0.14649,-0.58398 0.21875,-0.43946 0.2207,-0.51172 0.14453,-0.29296 0.22266,-0.43946 0.14453,-0.4375 0.29297,-0.58593 0.36523,-0.73047 0.22071,-0.51172 0.0723,-0.51172 0.21875,-0.6582 0.29297,-0.36719 0.21875,-0.51172 0.29297,-0.6582 0.4375,-0.95117 0.2207,-0.4375 0.21875,-0.58594 v -0.58399 l 0.14649,-0.8789 0.21875,-0.65821 v -0.87695 -0.58594 l -0.14453,-0.51172 v -0.6582 l 0.0723,-0.6582 -0.0723,-0.36524 v -0.58593 l 0.0723,-0.43946 v -0.51172 l 0.0723,-0.73046 v -1.31641 l -0.21875,-1.09766 -0.4375,-0.87695 -0.36328,-0.43945 -0.14844,-0.43946 -0.36524,-0.36328 -0.21875,-0.58593 -0.14648,-0.36524 -0.51172,-1.09766 -0.21875,-0.36523 -0.51172,-0.73242 -0.14648,-0.29297 -0.29297,-0.51172 -0.29102,-0.73047 -0.2207,-0.36523 -0.0723,-0.80664 -0.4375,-0.65821 -0.58789,-0.87695 -0.36328,-0.43945 -0.21875,-0.14649 -0.2207,-0.58398 -0.36524,-1.09766 0.14649,-0.36523 0.36523,-0.21875 0.6543,0.21875 0.58789,0.0723 0.87695,0.43946 0.875,0.29101 0.51368,0.0742 1.24218,0.36524 0.80274,0.21875 0.58789,0.2207 0.875,0.4375 0.87891,0.36523 0.4375,0.29297 1.09374,0.51172 0.43946,0.36719 1.02539,0.36523 0.73047,0.0723 0.875,0.14648 0.14648,0.0742 0.43946,0.0723 0.80273,-0.4375 0.36523,-0.51172 0.51172,-0.95117 0.14649,-0.43946 0.58398,-0.87695 0.36524,-1.09766 0.36328,-0.58593 0.36718,-0.29102 0.87696,-0.73242 0.51367,-0.36524 0.87695,-1.02343 0.58203,-0.80469 0.65821,-0.29297 0.58398,-0.14648 0.29492,-0.51172 0.29297,-0.36524 0.6543,-0.51172 0.43945,-0.58593 0.29102,-0.43946 0.0723,-0.21875 0.22071,-0.87695 0.36523,-0.80469 0.21875,-0.6582 0.29297,-0.58594 0.0723,-1.02343 0.2207,-0.65821 0.36523,-0.21875 0.36524,-0.51172 0.21875,-0.80664 0.36523,-0.58398 0.58594,-0.80469 0.36523,-0.58594 0.14649,-0.4375 0.21875,-0.8789 0.36523,-0.58399 0.58399,-0.58594 0.36523,-0.87695 0.21875,-0.36523 0.36524,-0.73047 0.14648,-0.29297 0.29102,-0.36523 0.36523,-0.66016 0.21875,-0.58399 0.36719,-0.80468 0.36523,-0.80469 0.29102,-0.73047 0.29297,-0.8789 0.73242,-1.31446 0.0703,-0.14648 0.58594,-0.95117 0.65625,-0.80469 0.66015,-0.58594 0.29102,-0.36523 1.02148,-0.58594 0.65821,-0.58399 0.4375,-0.14648 0.95117,0.36523 0.0723,0.87891 v 0.73047 0.58594 l 0.14649,0.4375 0.14844,0.43945 0.28906,0.6582 0.14844,0.36719 0.14453,0.36523 0.2207,0.51172 0.36328,0.29297 0.58594,0.29297 0.43945,0.36328 0.4375,0.43946 0.14453,0.29296 0.58594,0.21875 0.58399,-0.0723 0.14648,-0.6582 0.43945,-0.95118 0.14453,-0.58593 0.43946,-1.24219 0.0723,-0.43945 0.22071,-0.73047 0.14453,-0.87696 0.0742,-0.6582 0.14648,-0.80469 0.2207,-0.8789 0.0723,-0.58399 0.4375,-0.73242 0.21875,-0.58398 0.2207,-0.73243 0.51172,-0.80468 0.73047,-0.65821 0.58398,-0.73047 0.73047,-0.36718 0.65821,-0.51172 0.72851,-0.51172 0.65821,-0.58594 0.14648,-0.58398 0.87695,-0.6582 0.14649,-0.65821 0.65625,-0.66015 0.51367,-0.87696 0.65625,-0.29297 1.16992,-0.95117 0.6582,-0.14453 c 0,0 0.19991,-0.007 0.20313,-0.008 z",
    PH04: "m 131.00289,469.62701 0.80273,-0.1836 1.09571,-0.66015 1.82617,-0.14454 1.60937,-0.29492 2.19141,-0.58398 1.82812,-0.36524 1.46094,-0.51367 1.46094,0.14649 0.87695,-0.14649 2.04688,-0.43945 0.94922,-0.36524 1.24414,0.14844 1.75195,-0.14844 1.75391,-0.36328 1.60937,-0.29297 0.58398,0.0723 h 1.68165 l 1.02343,-0.21875 1.46094,-0.0742 1.31445,-0.36719 1.02344,-0.4375 1.31445,-0.36523 1.16993,-0.65625 0.65625,-0.2207 1.82812,-0.51172 1.09766,-0.58594 1.16797,-0.58398 1.68164,-0.36719 0.72851,0.58594 0.58594,0.80468 0.0723,0.65821 0.29296,0.73242 v 0.58398 l 0.36524,1.09766 0.36523,0.6582 0.21875,0.80469 0.14649,0.87695 v 0.58594 l -0.36524,0.58594 v 0.6582 l 0.21875,0.36523 0.0742,0.58594 v 1.02339 l -0.58398,0.80469 -0.36719,0.72851 -0.50977,0.36719 -0.58593,0.36523 0.14648,0.51172 -0.36523,0.80469 0.14648,0.58789 0.14453,1.16992 0.14844,1.16993 v 0.65625 l 0.21875,1.17187 0.36523,0.87695 -0.29296,0.58594 0.51171,1.39063 -0.14453,1.0957 -0.0742,1.46484 0.36524,1.53711 0.2207,1.09571 v 0.8789 l 0.14649,0.80469 -0.43946,1.0957 -0.36523,0.58789 -0.58399,1.16993 -0.36328,0.87695 -0.73242,0.87695 -0.14648,0.87891 -0.58399,0.87695 -0.29101,0.87891 -0.0723,1.02148 v 0.95313 0.87695 0.80469 l 0.21875,1.17187 0.14453,0.80274 0.43946,1.60937 0.36523,0.2207 0.58398,0.65625 0.87696,0.80469 0.51172,0.29492 0.0723,1.68164 0.0742,0.87696 0.36328,0.8789 -0.14453,1.02344 -0.14648,1.31641 -0.36524,0.36523 -0.2207,1.09766 0.0742,0.73047 v 0.51367 l 0.21875,0.50976 0.51172,0.22071 1.02343,0.0742 0.51172,0.21875 0.58399,0.2207 0.58593,0.50976 0.58399,0.29493 0.36523,-0.0742 0.51172,-0.80274 0.58399,-0.51171 0.2207,-0.43946 0.29101,-0.73047 0.14649,-0.51367 -0.0723,-0.51367 0.29102,-0.58203 0.36523,-0.58789 0.0742,-0.58399 0.87696,-0.14843 1.0957,-0.14454 1.16992,-0.14648 0.21875,-0.36523 0.58398,-0.51172 -0.0723,-0.51368 0.14648,-0.58398 0.51172,-0.36719 0.4375,-0.2207 1.31641,0.0762 0.87695,0.29102 0.51172,0.14648 1.0957,0.21875 1.02344,0.14649 0.94922,0.14648 0.43945,0.43945 0.73047,0.87696 0.21875,0.29297 0.36719,0.51171 0.58398,0.51368 0.36524,0.58398 0.29101,0.58399 0.43946,0.51367 1.0957,-0.36524 0.29297,-0.51172 0.36523,-0.36718 0.29297,-0.51172 0.73047,-0.29297 0.43945,-0.6582 0.0723,-1.39063 0.36523,-0.73047 0.58399,-1.0957 0.43945,-0.22266 0.80274,-0.87695 0.43945,-0.36523 1.02148,-0.73047 h 1.09571 l 0.58593,0.14648 1.16797,0.87695 0.51172,1.02344 0.58594,0.58594 0.50976,0.80469 0.36524,0.58398 0.58594,0.87891 0.58398,0.36523 0.6582,0.58594 0.58399,0.58594 0.87695,1.0957 0.2207,0.66016 0.4375,0.80273 1.09571,0.58398 0.51172,0.14844 1.53515,-0.58789 0.43946,-0.36523 1.7539,-0.65625 0.65625,-0.73047 1.38867,-0.36524 1.02344,0.36524 0.6582,0.73047 0.14649,0.87695 0.29297,0.51172 0.36523,0.80664 0.58399,0.58594 0.43945,0.80468 0.50977,0.73047 0.29296,0.65625 0.65821,0.80664 0.36523,0.58399 0.73047,0.8789 1.68164,0.0742 2.04492,0.36328 0.65821,-0.14453 0.58398,0.51172 1.24219,-0.4375 1.46289,-0.66015 0.73047,-0.36524 1.38867,0.36524 1.46094,0.14648 1.02343,-0.14648 0.14649,-0.36524 0.87695,-0.36719 0.36524,-0.58203 0.6582,-0.43945 1.46094,-0.36524 1.02539,-0.14843 0.80273,-0.14453 0.80469,0.14453 0.29101,0.14843 1.02344,-0.2207 0.36719,-0.0723 1.02148,0.36523 0.95118,0.29297 0.73046,-0.14648 0.87696,0.36523 0.19531,0.4707 c 0.0151,-0.1473 0.0879,-0.99414 0.0879,-0.99414 v -0.2207 l -0.14453,-0.29102 -0.14649,-0.29297 -0.29296,-0.36718 -0.21875,-0.36524 -0.36524,-0.6582 -0.29297,-0.51172 -0.0723,-0.4375 -0.14649,-0.36719 -0.21875,-0.29297 -0.29297,-0.43945 -0.29296,-0.58203 -0.14649,-0.4375 -0.36523,-0.36719 -0.14649,-0.29297 -0.36523,-0.36523 -0.14649,-0.36523 -0.14648,-0.36719 -0.14453,-0.2168 -0.51367,-0.51367 -0.21875,-0.36524 -0.36524,-0.80468 -0.29297,-0.51368 -0.36523,-0.73046 -0.36524,-0.51368 -0.14648,-0.29101 -0.29102,-0.73242 -0.29296,-0.4375 -0.29102,-0.58594 -0.29297,-0.80469 -0.29101,-0.6582 -0.22071,-0.36524 -0.36523,-0.36523 -0.36524,-0.73047 -0.14453,-0.36523 -0.36523,-0.51172 -0.36719,-0.65821 -0.36328,-0.51367 -0.29297,-0.4375 -0.29101,-0.43945 -0.51368,-0.80469 -0.14453,-0.21875 -0.14648,-0.29297 -0.0723,-0.21875 -0.43945,-0.66015 -0.29102,-0.36328 -0.14648,-0.36719 -0.2207,-0.51172 -0.29297,-0.36523 -0.14453,-0.29297 -0.0742,-0.51172 -0.0723,-0.2207 -0.51172,-0.58399 -0.36718,-0.87695 -0.14454,-0.29297 -0.2207,-0.51367 -0.0723,-0.29297 -0.29102,-0.29297 -0.36719,-0.29297 -0.29101,-0.51172 -0.14649,-0.29297 -0.29297,-0.36523 -0.65625,-1.38867 -0.14648,-0.36719 -0.36524,-0.58399 -0.6582,-0.58593 -0.29297,-0.73242 -0.51172,-0.72852 -0.29101,-0.58594 -0.29297,-0.58593 -0.14453,-0.4375 -0.51367,-0.73047 -0.36328,-0.51368 -0.51172,-0.29101 -0.29297,-1.16992 -0.51172,-1.24414 -0.21875,-0.29297 -0.43945,-0.87696 -0.58399,-0.73242 -0.51172,-0.51172 -0.51172,-0.73047 -0.21875,-0.29296 -0.21875,-0.51172 -0.43945,-0.66016 -0.21875,-0.51172 -0.29297,-0.29297 -0.0723,-0.14453 -0.73047,-0.80468 -0.51172,-0.36719 -0.36524,-0.29297 h -0.87695 l -0.73242,0.14648 -0.29102,-0.0742 -0.58398,-0.21875 -0.36523,-0.14648 -0.36524,-0.14648 -0.51172,-0.29297 -0.36523,-0.0723 -0.65821,-0.14648 -0.6582,-0.14844 -0.51172,-0.14453 -0.14648,-0.0723 -1.60742,-0.80469 -0.65821,-0.2207 -0.21875,-0.51172 -0.36523,-0.66015 -0.58399,-0.36524 -0.6582,-0.29101 -0.29101,0.0723 -0.43946,0.73242 -0.58398,0.29102 -0.94922,-0.36523 -0.51172,-0.58594 -0.2207,-0.58399 -0.29102,-0.4375 -0.58398,-0.58593 h -0.73047 l -0.36524,0.14453 -0.87695,0.29297 -0.6582,0.29492 h -1.02149 l -0.73242,0.0723 -0.58398,0.14453 -1.02149,0.0742 -0.51367,-0.0742 -0.51172,-0.51171 -0.29101,-0.29297 -0.21875,-0.29102 -0.22071,-0.6582 0.22071,-0.51172 0.21875,-0.51367 0.21875,-0.36328 0.0723,-0.29297 v -0.58594 l 0.14649,-0.80469 0.14648,-0.51367 0.29102,-0.6582 v -0.65625 l 0.0742,-0.22071 0.14453,-0.51171 0.14648,-0.58594 0.29297,-0.51172 0.21875,-0.36523 0.14453,-0.73243 0.2207,-0.65625 0.0742,-0.2207 -0.0742,-0.36523 -0.14648,-0.73047 -0.21875,-1.02539 0.0742,-0.72852 v -0.58594 l -0.0742,-0.8789 v -0.65821 -0.4375 l 0.29102,-1.09765 0.14648,-0.36524 -0.0742,-0.4375 -0.29101,-0.2207 -0.43946,-0.29297 -0.36523,-0.14648 -0.80469,-0.0723 -1.97266,0.0723 -0.80468,0.14648 -1.09571,0.29297 -0.80273,0.0723 -0.36719,0.29296 -0.58398,0.0723 -0.65821,-0.14453 -0.21875,-0.58594 -0.0723,-0.43945 0.14648,-0.65625 v -0.51172 l -0.21875,-0.58594 v -0.29297 l 0.21875,-0.73242 0.4375,-1.02148 0.29102,-0.36719 0.2207,-0.73047 0.14649,-0.29297 0.0723,-0.58594 0.14649,-0.65624 v -0.43946 l 0.0723,-0.29101 0.14649,-0.36524 -0.0723,-0.6582 -0.0742,-0.2207 -0.14453,-0.51368 -0.14648,-0.36523 -0.29297,-0.4375 -0.29102,-0.43945 -0.14648,-0.29102 -0.21875,-0.6582 -0.0742,-0.58594 -0.21875,-0.6582 -0.21875,-0.36328 -0.21875,-0.29493 -0.21875,-0.36523 -0.0742,-0.43945 v -0.50977 l 0.14648,-0.58789 0.51172,-0.73047 0.29297,-0.29101 0.29297,-0.65821 -0.0742,-0.51367 0.21875,-0.58594 v -0.65625 l -0.51172,-0.58593 -0.29297,-0.65821 -0.36523,-0.58398 -0.6582,-0.14649 -0.72852,-0.14843 -0.2207,-0.21875 -0.29102,-0.94922 -0.29297,-0.58594 -0.4375,-0.58594 -0.36523,-0.36328 -0.36719,-0.0742 -0.29101,-0.29297 -0.58594,-0.2207 h -0.29102 l -0.36523,0.0723 -0.80469,-0.2168 -0.21875,-0.43945 -0.51172,-0.14649 -0.6582,-0.21875 -0.73047,-0.29297 -0.73047,-0.51172 -0.80273,-0.4375 -0.87891,-0.36718 -0.21875,-0.29297 -0.58398,-0.51172 -0.58399,-0.29297 -0.51367,-0.21875 -0.80273,-0.14648 -0.58399,-0.51172 -0.51367,-0.80664 -0.58398,-0.36328 -0.36524,-0.36719 -0.21875,-0.51172 -0.2207,-0.29297 -0.6582,-0.51172 -0.21876,-0.73047 0.14649,-0.36718 0.0723,-0.29297 -0.4375,-0.36524 -0.14649,-0.58398 -0.29101,-0.80469 -0.14649,-0.58594 -0.2207,-0.95117 -0.21875,-0.51172 v -1.02343 l -0.29297,-0.65821 -0.14453,-0.80469 v -0.58593 l 0.21875,-0.29297 0.0742,-0.58399 -0.22071,-0.87695 -0.21875,-0.6582 -0.21875,-0.95117 -0.14648,-0.51368 -0.4375,-0.65625 -0.43945,-0.51367 -0.14454,-0.58398 0.14454,-0.43946 -0.36524,-0.58593 -0.73047,-0.0723 -0.50976,0.0723 h -0.51368 l -0.73046,0.29297 -0.65625,0.2207 -0.95118,0.21875 h -0.6582 l -1.16797,0.0742 -0.87695,0.29297 -0.94922,0.29101 -0.36719,0.14649 -0.65625,0.0723 -0.95117,0.65821 -0.94922,0.14648 -0.43945,0.14648 -0.87695,0.21875 -0.36524,0.14453 h -1.0957 l -1.0957,0.22071 -0.87696,0.2207 -0.94922,0.36524 -0.80664,0.0723 -0.65625,0.0723 -1.02343,0.14648 -0.58399,0.14649 -0.95117,0.36523 -0.29297,0.21875 -0.94922,0.0742 -0.21875,-0.21875 -0.58398,-0.43945 -0.29297,-0.58594 -0.29102,-0.58399 -0.58593,-0.6582 -0.87696,-1.24219 -0.80273,-0.36718 -0.58594,-0.80469 -0.61914,-0.17188 -0.0547,0.38086 -0.87695,0.58594 -0.73047,0.51172 -0.87695,0.58594 -0.51172,0.51172 -2.04688,0.43945 -0.58593,0.87695 -0.875,0.73047 -1.09766,0.58594 -1.38672,0.73242 -1.08008,0.81445 -1.24414,0.51172 -1.24218,1.24219 -0.0742,2.5625 -0.29102,1.46094 1.02344,2.19531 v 2.19336 c 0,0.659 0.4375,2.04883 0.4375,2.04883 l 0.51367,1.3164 c 0,0 1.02148,2.63275 1.02148,3.21875 0,0.585 0.29297,4.46289 0.29297,4.46289 l 0.51172,0.80469 0.58594,2.63086 0.4375,3.14648 -1.02344,-0.21875 -0.875,0.29102 -0.87695,0.73242 -0.80469,0.80469 -1.02344,0.58594 -0.51172,4.53515 v 5.33789 l -0.29296,3.14649 0.51367,14.26367 z",
    PH05: "m 209.65503,135.32031 -0.71679,0.23828 -1.35352,0.79687 -1.19531,0.79492 -0.71485,0.63672 -0.32031,0.95703 -0.39648,0.55664 0.0781,0.7168 0.24024,0.7168 0.23828,0.875 0.71679,1.03515 0.0801,0.95508 0.1582,1.51367 -0.0801,0.95508 v 0.875 l 0.31836,0.79688 0.24023,1.27343 -0.16016,0.63672 -1.27343,1.19532 -0.55664,0.55664 -0.79688,0.79687 -0.79687,0.7168 -0.63672,0.7168 -0.7168,0.55664 -1.19336,-0.16016 -0.87695,-0.63672 -1.19336,-0.7168 -0.87695,-0.875 -0.55664,-0.71679 -0.87696,-0.63672 -1.27344,-0.79688 -0.23828,-0.23828 -0.71679,-0.71679 -1.03516,-1.03516 -0.7168,-0.47656 -0.79687,-0.7168 -0.7168,-0.39844 -1.11328,-0.7168 -0.95508,-0.71679 -0.95703,-0.31836 -1.27344,-0.1582 -0.95507,-0.0801 -0.63672,0.0801 -0.79688,0.31835 -0.63672,0.7168 -0.23828,0.39649 -0.47851,0.71679 -1.03516,1.11524 -0.55664,0.47656 -0.95703,0.32031 -0.79492,0.31836 -0.95704,0.15821 -1.27343,0.63671 -0.39844,0.79688 -0.47656,1.03515 -0.47852,0.79493 -0.39844,0.79687 v 1.27344 l -0.23828,0.87695 -0.31836,0.7168 -0.55664,1.19336 -0.24023,0.63672 -0.0781,0.79687 0.23828,0.55664 0.55665,0.95508 v 0.63672 l -0.47657,0.55859 -0.87695,0.15821 -0.875,0.63672 -0.39844,0.95703 -0.39844,1.19336 v 0.71679 1.03516 l -0.16015,0.875 -0.63672,1.59375 -0.7168,0.875 -0.79492,0.31836 -0.31836,0.79687 -0.87695,0.55664 0.24023,0.63672 0.79492,0.79688 0.0801,0.63672 0.55664,0.55664 1.03516,0.55859 0.87695,0.23828 1.27344,0.47657 0.79688,0.63867 1.11328,0.31836 1.19531,0.47656 0.79687,0.63672 0.39844,0.79687 0.39649,0.63672 0.0801,1.19531 v 0.47657 l -0.47851,0.71679 h -0.875 -0.875 l -0.87695,0.16016 h -1.11524 l -1.11328,0.39648 -0.47852,0.7168 -0.39843,0.31836 -0.95508,0.79687 -0.39844,0.31836 -0.875,0.31836 -0.79687,1.03516 -0.55664,0.39844 -0.79688,0.71679 -0.95508,0.55665 -0.87695,0.79687 -0.95508,0.47656 -0.55664,0.63672 -0.47852,0.55859 -0.875,0.95508 -0.79687,0.875 -0.47852,0.0801 h -1.03515 l -1.27344,0.16016 -1.03516,0.31836 -0.875,0.55664 -1.19531,0.875 -0.875,0.63867 -0.7168,0.47656 -0.63671,0.63672 -0.79688,0.47852 -0.55664,0.31836 -0.47852,0.63671 -0.55664,0.63672 -0.95703,0.39844 -0.79492,0.63672 -1.03516,0.31836 -0.95507,0.39844 -0.7168,0.39843 -0.87695,0.31836 -0.63672,0.31836 -0.79688,0.39844 h -0.875 l -0.55664,-0.31836 -0.7168,-0.55859 -0.24023,-0.63672 -0.31836,-0.79492 -0.39844,-0.7168 -0.79492,-0.31836 -0.71679,0.0781 -1.11524,0.16016 -0.55664,0.39844 -1.19531,-0.24024 -0.47657,0.39844 -0.95703,0.0801 h -0.95507 l -0.47657,-0.31836 -0.39843,-0.31836 -0.63672,-0.31836 -1.03516,-0.0801 h -1.19531 l -0.7168,0.23828 -0.63672,0.63672 -0.875,0.32032 -1.19531,0.0781 -0.7168,-0.31836 -0.79492,-0.63672 -0.79687,-0.0801 h -0.87696 l -1.35351,0.0801 h -1.27349 l -1.19336,0.47852 -0.79687,0.31836 -0.87696,0.47656 -0.39648,0.63672 -0.87695,0.63867 -0.7168,0.39649 -0.875,0.55859 -0.39844,0.47656 -0.39844,0.24024 h -1.51172 l -1.43359,0.0781 h -1.03516 l -0.71679,0.0801 -0.79688,0.39844 -0.23828,0.63672 -0.55859,0.47851 -0.47657,0.1582 h -0.63671 l -1.19532,-0.23828 -1.35351,-0.55664 -1.11524,-0.39844 -0.95507,-0.63671 -0.47657,-0.5586 -1.19531,-0.31836 h -0.55664 l -0.7168,0.47852 -0.39843,0.31836 -0.23829,0.63672 -0.16015,0.79687 0.31836,0.79492 0.0801,0.47852 0.0801,0.875 -0.16015,0.47852 v 0.71679 l 0.23828,0.63672 0.0801,0.875 0.16015,0.16016 0.79493,0.55664 0.55859,0.55664 0.39844,0.79687 0.63671,0.63672 0.47657,0.7168 -0.23828,0.39844 -0.31836,0.0801 -0.23828,0.47657 -0.24024,0.95508 -0.39648,0.39843 -0.39844,0.16016 -0.39844,0.39844 0.0801,0.79492 0.23828,0.63672 0.39844,0.63672 0.63672,0.63867 0.55664,0.31836 0.55859,0.71484 0.55664,0.47852 1.03516,0.71679 0.79687,0.7168 0.23829,0.95508 -0.23829,0.875 -0.47851,0.55859 -0.55664,0.55664 -0.87696,0.79688 -0.55664,0.47656 -0.87695,0.7168 -0.55664,0.47851 -0.39844,0.79492 0.0801,0.31836 0.55664,0.95703 0.39844,0.39649 0.39844,0.79687 0.31836,0.7168 0.0801,0.79688 v 0.875 l -0.39843,0.31836 -1.03516,0.0801 -1.03516,0.15821 -0.55664,0.31836 -1.03515,0.71679 -0.63672,0.7168 -0.47852,0.63672 -0.55664,0.24023 -0.55859,0.63672 v 0.7168 l 0.24023,0.47656 0.63672,0.39844 0.55664,0.16016 0.55664,-0.0801 1.67383,-0.7168 0.55664,-0.39844 0.875,-0.39844 1.83203,0.24024 0.79688,0.39648 0.47656,0.79688 0.47852,0.7168 0.23828,0.63671 0.16015,0.875 -0.0801,0.95704 0.23828,0.79492 v 0.47851 0.875 l 0.55859,1.11524 0.1582,0.63672 0.47852,0.55664 1.11523,0.31836 1.99024,0.31836 1.83008,0.32031 1.11523,0.47656 0.87695,1.03516 0.47657,1.03515 0.24023,0.95508 -0.16016,1.03516 -0.16015,0.875 0.24023,0.63672 1.5918,0.0801 h 1.27344 1.59375 0.875 l 1.99023,-0.0781 h 2.31055 l 2.38867,0.1582 2.38867,0.23828 h 1.35352 1.99023 l 1.99024,-0.39648 0.39843,-0.24023 0.23828,-0.47657 -0.1582,-0.79687 -0.16015,-0.95508 -0.39844,-0.95508 -0.15821,-0.87695 v -0.7168 l 0.23829,-0.79492 0.47851,-0.55859 0.875,-0.39649 0.79688,-0.16015 0.71679,0.0801 0.875,0.39844 0.47852,0.55664 0.79687,0.95508 0.55664,0.79687 0.7168,0.79493 0.39844,0.16015 0.47656,-0.23828 0.16016,-0.47851 0.39843,-0.875 0.31836,-1.19532 0.63672,-0.63672 0.15821,-0.875 0.63867,-0.95507 0.23828,-0.7168 0.63672,-0.55859 1.19336,-0.95508 1.11523,-0.55664 0.24024,-0.31836 0.63671,-0.39844 0.39649,-0.39844 0.24023,-0.95508 0.23828,-0.55664 0.39844,-0.55859 0.39844,-0.47656 0.31836,-0.87696 0.31836,-0.95507 0.63672,-0.47657 0.95508,-0.39843 1.83203,-0.24024 0.875,0.0801 h 0.63867 l 0.875,0.23828 0.875,0.32031 0.47851,0.55664 -0.0801,0.79688 -0.39844,0.875 -0.47656,0.63672 -0.16016,0.79687 -0.31836,0.63672 -0.31836,0.7168 -0.47656,0.7168 -0.39844,0.79492 -0.31836,0.55859 -0.47851,0.95508 -0.23829,0.79492 -0.24023,0.5586 -0.47656,0.71679 -0.31836,0.39649 -0.31836,0.63672 -0.24023,0.63867 -0.15821,0.63672 -0.16015,0.47656 v 0.55859 l 0.24023,0.7168 0.63672,0.39648 0.63672,0.0801 h 0.63672 l 0.79687,0.31836 0.875,0.39844 0.95508,0.47851 1.03516,0.39649 0.63671,0.24023 h 0.63868 l 0.79492,0.31836 0.58594,0.1875 0.17773,-0.46094 v -0.58398 -0.95117 l -0.36523,-1.24414 -0.21875,-1.02539 -0.14649,-0.87696 -0.2207,-0.73047 -0.21875,-1.16992 v -0.87695 -0.73047 -1.09766 l 0.14648,-1.09765 0.0723,-0.6582 0.2207,-0.58399 0.29102,-0.8789 0.36523,-0.58399 0.58594,-0.95117 0.29101,-0.95117 0.14649,-1.09766 0.0742,-0.73047 0.21875,-0.58594 0.29297,-0.80468 0.29296,-0.95118 0.21876,-1.0957 0.29101,-0.8789 0.36719,-1.02344 0.73047,-0.87891 0.21875,-0.95117 0.51172,-0.58398 0.0742,-1.0254 0.50977,-0.87695 0.6582,-0.65625 0.21875,-1.17187 0.21875,-0.36524 0.36719,-0.73047 0.29102,-0.95117 0.29297,-0.73242 0.51171,-0.95117 0.29102,-0.51172 0.2207,-0.73242 0.29102,-0.73047 0.29297,-0.6582 0.29297,-0.36524 0.51171,-0.73242 0.50977,-1.02344 0.51367,-0.87695 v -0.80469 l 0.36328,-0.58398 0.29297,-0.58594 0.58399,-0.6582 0.51367,-1.02344 0.0703,-0.51172 0.2207,-0.87695 0.65625,-0.95313 0.36524,-0.95117 1.46289,0.14648 0.36523,-0.6582 0.29102,-0.80469 0.36719,-0.80468 0.29101,-1.46289 0.0723,-0.80469 v -0.58399 -1.24414 -0.51172 l -0.0723,-2.34179 v -0.94922 -1.24414 -1.02539 l -0.0723,-0.73047 -0.0742,-1.53711 v -0.58398 -0.87696 l 0.2207,-0.66015 0.51172,-0.58399 0.51172,-0.36523 0.58398,-0.87891 0.80274,-0.58398 0.2207,-0.58399 0.51172,-0.21875 0.51172,-0.29297 0.51172,-0.66015 0.65625,-0.51172 0.6582,-0.73047 0.36523,-0.29297 0.29297,-0.51172 0.73047,-0.36523 0.58399,-0.80664 0.36523,-0.65625 0.51172,-0.29297 0.58594,-0.65821 0.50976,-0.21874 0.51172,-0.58594 0.51172,-0.58399 0.51172,-0.58593 0.51172,-0.73243 0.58593,-0.21875 0.36524,-0.36523 0.21875,-0.73047 0.36523,-0.36523 0.36524,-0.22071 0.51172,-0.36523 0.36523,-0.6582 0.6582,-0.21875 0.58399,-0.73243 0.36523,-0.6582 0.51172,-0.14453 0.36524,-0.36524 0.29296,-0.66015 0.58399,-0.51172 0.36523,-0.0742 0.51172,-0.50976 0.36524,-0.87891 0.36523,-0.51172 0.36719,-0.36523 0.73047,-0.58399 0.73047,-0.58594 0.29296,-0.73046 0.36524,-0.29297 0.50976,-0.36524 0.65821,-0.51172 0.80468,-0.95117 0.65821,-0.6582 0.58398,-0.29297 0.80274,-0.95117 0.58398,-0.58594 0.51172,-0.80273 0.87695,-0.58594 0.58399,-0.6582 0.6582,-0.58399 0.51172,-0.36719 0.51172,-0.87695 0.73047,-0.6582 0.95117,-1.31641 0.875,-0.58398 0.73242,-0.51172 0.65625,-0.65821 0.51367,-0.36718 0.58399,-0.51172 0.36328,-0.51367 0.29297,-0.36328 0.36523,-0.29297 -0.14648,-0.14649 0.51172,-0.21875 0.36523,-0.6582 0.6582,-0.80469 0.29297,-0.58398 0.36524,-0.29297 0.65625,-0.51172 0.58593,-0.58594 0.21875,-0.58398 1.02344,-0.6582 0.58399,-0.87696 0.6582,-0.73242 0.80273,-0.6582 0.58594,-0.66016 0.80273,-0.58398 0.51368,-0.65821 0.29101,-0.51172 0.58594,-0.66015 0.36328,-0.58399 0.6582,-0.51171 0.65821,-0.58399 0.58398,-0.80469 0.0742,-0.36523 0.0742,-0.73242 0.37305,-0.51367 -0.66407,-0.11329 h -1.0332 l -0.7168,0.0801 -1.35351,-0.0801 -1.19531,-0.39843 -0.875,-0.23828 h -0.95704 -0.79492 l -0.55859,-0.0801 -1.35352,-0.23828 h -1.27343 l -0.875,-0.23829 -0.79688,-0.31835 h -1.19531 -1.35352 z",
    PH06: "m 254.2372,-58.435504 -0.73047,0.144531 -0.94921,0.585937 -0.29297,0.730469 -0.73047,0.148438 -1.02344,-0.148438 -0.36523,-0.21875 -0.36524,-0.07227 -1.09765,0.146485 -0.65625,0.583984 -0.73047,0.658203 -0.95118,0.585938 -1.24218,0.146484 -0.51172,-0.21875 -0.73047,0.07227 -0.58398,-0.511719 -0.95118,-1.244141 -0.87695,-0.144531 -0.51172,0.21875 -0.51172,1.242188 v 1.171875 l -0.14648,2.046875 -0.50977,0.732422 -0.51172,0.365234 -0.58593,-0.146484 -0.0723,-0.146485 -1.82617,-0.363281 -0.36719,0.21875 -0.0723,0.804688 -0.36524,0.804687 -0.58398,1.169922 -0.51172,0.365234 -0.6582,0.292969 h -0.73047 l -0.36524,0.511719 -0.36523,0.292969 -0.80469,0.146484 -0.65625,0.146484 -0.95117,0.365235 -0.14649,0.658203 0.80469,0.585937 0.6582,0.585938 1.02344,0.292969 0.65821,0.509765 0.94921,0.732422 0.14649,0.730469 -0.36719,0.367187 -0.73047,0.363281 -0.21875,0.732422 -0.51172,0.292969 -0.36523,0.658203 v 0.583985 0.585937 l 0.65625,0.583984 0.29297,0.585938 0.21875,0.804688 -0.21875,0.365234 -1.09571,0.07227 -0.87695,0.367187 -0.94922,0.583984 -0.51172,0.365235 -0.29296,0.876953 -0.21875,0.732422 -0.29297,0.951172 v 0.876953 0.732422 l -0.0723,0.658203 -0.6582,0.951172 -0.29102,0.730468 v 0.951172 l -0.36718,0.585938 v 0.583984 0.804688 l -0.14454,0.730468 -0.58398,1.171875 -0.14648,1.316407 -0.51172,0.876953 -0.14649,0.876953 -0.0723,1.025391 -0.22071,0.730468 -0.29101,0.585938 v 0.730468 l -0.21875,0.658204 -0.14649,0.732422 -0.2207,0.804687 v 0.730469 l -0.29102,1.023437 -0.51171,0.511719 -0.58399,0.292969 h -0.95117 l -0.80274,0.146484 -0.51171,0.291016 -0.65821,0.511719 -0.6582,0.367187 -0.80273,0.144531 -0.73047,0.148438 -0.73047,0.583984 -0.73047,0.146484 -0.58398,0.07227 -0.73047,0.365234 -0.58399,0.292969 -0.36523,0.146485 -0.58594,0.365234 -0.80469,0.144531 -0.80273,0.294922 -0.95117,0.291016 -0.80274,0.21875 -0.36719,0.367187 -0.875,0.21875 -0.95117,0.511719 -0.80468,0.146484 -0.65821,0.144532 -0.29101,0.367187 -0.73047,0.21875 -0.65821,0.146484 -0.73242,0.21875 -0.94922,0.658204 -0.58398,0.146484 -0.80469,0.220703 -0.87695,0.21875 -0.58399,0.291016 -0.80468,0.365234 -0.51172,0.365235 -0.73047,0.220703 -1.16797,0.365234 -1.09766,0.291016 -0.80468,0.292968 -0.58399,0.585938 -1.24218,0.291015 -0.65626,0.585938 -0.87695,0.365234 -1.46289,0.513672 -0.80469,0.21875 -1.24218,0.292969 -0.58399,0.21875 -0.73047,0.365234 -2.11914,0.804688 -0.87695,0.513672 -0.80469,0.365234 -0.80273,0.291016 -1.02344,0.367187 -0.6582,0.365235 -1.16992,0.365234 -1.16797,0.146484 -0.73047,0.291016 -0.34375,0.115234 0.0996,0.322266 0.58398,0.876953 1.02344,0.658203 0.14648,0.804688 0.51172,0.660156 0.36524,0.583984 0.29296,0.658203 0.58399,0.951172 0.6582,0.804688 0.65625,0.658203 0.14649,0.658203 0.51172,0.806641 0.58398,0.949219 0.95117,1.023437 0.51172,1.097656 0.73047,0.732422 0.29297,0.804688 0.50976,0.365234 0.73243,0.365234 0.80273,0.658203 0.58594,0.292969 0.21875,0.585938 0.51172,0.65625 0.73047,0.220703 0.36523,0.146484 0.58398,0.511719 0.36719,0.583984 0.80274,0.585938 0.6582,0.511719 0.58398,0.511718 0.36524,0.292969 0.51172,0.585938 0.87695,0.291015 0.58398,0.513672 0.58594,0.949219 0.14453,0.367187 0.36719,0.583985 0.36523,1.097656 0.0742,0.658203 v 0.951164 l -0.36718,0.804688 -0.73047,0.585937 -0.65625,0.291016 -1.16992,0.585937 -0.58399,0.146484 -0.73047,0.583985 -0.29297,0.876953 v 0.585938 l 0.51172,0.732421 0.0723,0.730469 -0.21875,0.583984 -0.0723,0.658208 0.36524,0.80468 V 38.1016 L 193.78,38.90629 v 0.51172 0.80469 l 0.0723,0.80469 0.0742,0.80468 v 0.65821 l -0.0742,1.24414 -0.36524,0.87695 -0.6582,0.29297 -0.58398,0.80469 -0.21875,0.58398 -0.29297,0.36719 -0.58399,0.80469 -0.87695,1.09765 -0.58398,0.73047 -0.36524,0.6582 -0.21875,0.58399 v 0.66016 l 0.36523,0.58398 0.50977,0.51172 0.6582,0.29297 0.36524,0.29101 0.36523,0.65821 0.0742,0.36718 0.36524,0.65821 0.51171,0.58398 v 0.58594 l 0.29102,0.51172 0.51367,0.80273 0.21875,0.80664 0.29102,0.36524 0.29297,0.8789 0.14453,0.73047 v 0.95117 l -0.14453,0.80469 -0.14649,0.73047 -0.58398,0.36719 -1.02344,0.14453 h -1.0957 l -0.73047,0.0742 h -0.87696 l -0.36523,-0.29297 -0.6582,-0.29297 -0.51172,-0.0723 -0.58399,-0.6582 -0.14453,-0.73242 -0.8789,-0.36524 h -0.80274 l -0.87695,0.36524 -0.73047,0.14648 -1.16992,0.0723 -1.0957,-0.14453 -0.73047,-0.14649 0.21875,0.73047 0.36718,0.6582 -0.0742,0.58594 v 0.51172 l 0.6582,0.65625 0.14648,0.51367 0.29102,0.51172 0.14844,0.73047 0.65625,1.09766 0.14648,0.73242 0.36523,0.80469 0.51172,0.95117 0.0742,0.94922 -0.2207,0.58593 -0.36524,0.87696 -0.80273,0.95117 -0.14648,0.6582 -0.51172,0.73242 -0.36524,0.51172 -0.36718,0.65821 -0.29102,0.58398 -0.36719,0.58398 -0.14453,0.66016 -0.36719,0.95117 -0.21875,0.73047 -0.0723,1.02344 -0.29297,0.73047 -0.0742,0.95117 v 0.51172 l 0.14648,0.80664 0.0742,0.58398 0.14649,0.65821 0.0723,0.73242 0.21875,0.87695 v 0.87696 l 0.36719,0.51367 v 0.87695 l 0.0723,0.73242 0.29297,0.36524 0.14453,0.36523 0.58398,0.21875 0.51172,0.29297 0.51172,0.14648 0.80469,0.58399 0.94921,0.2207 1.02344,0.36328 0.51367,0.29297 0.65625,0.29297 0.73047,0.29297 0.80274,0.0723 0.58398,0.36524 0.36719,0.51172 0.51172,0.2207 0.58398,0.29297 0.36524,0.0723 1.16992,0.0742 1.09766,-0.0742 h 0.875 l 0.80468,-0.14648 0.58399,-0.0723 1.16992,-0.14649 1.31445,-0.2207 0.36524,-0.36328 0.51172,-0.36719 0.6582,-0.29297 0.875,-0.0723 0.73242,-0.14648 h 0.73047 l 0.14648,0.6582 -0.14648,0.58399 -0.0723,0.58593 0.14453,0.58399 0.36719,0.87695 0.58399,0.80664 0.14648,0.36524 0.21875,0.58594 0.6582,0.65624 0.0723,0.51368 0.87695,0.6582 0.65821,0.29297 1.0957,0.36523 1.0957,-0.0723 h 0.73047 l 0.78906,0.14648 -0.64258,-1.23047 -0.0742,-0.80468 0.14648,-1.02344 0.0723,-0.58594 0.0742,-0.6582 0.29296,-0.87696 0.36524,-0.87695 0.14648,-0.95117 0.14649,-0.95117 0.36523,-0.87696 0.14453,-0.87695 0.14649,-1.60937 v -0.73243 l -0.29102,-0.87695 -0.29297,-0.95117 v -1.16992 l -0.29101,-0.51172 v -0.95117 l 0.0723,-0.87696 v -0.36718 -0.51954 -0.65624 l 0.22071,-0.65821 0.0723,-0.66015 0.58594,-1.02344 -0.14649,-0.36524 -0.0742,-0.36523 -0.51172,-0.80469 -0.51172,-0.66015 v -0.80469 l 0.29297,-0.65625 0.29297,-0.73242 0.87695,-0.58399 0.58398,-0.2207 0.51172,-0.29102 0.51172,-0.29297 0.6582,-0.6582 0.36524,-0.80469 0.14453,-1.02343 0.2207,-0.73047 0.36524,-0.36719 0.80468,-0.73242 1.09571,-0.51172 0.73047,-0.51172 1.02148,-0.14648 0.73242,-0.14649 0.50977,-0.29297 0.73047,-0.14648 0.58593,-0.36524 v -0.87695 l 0.29297,-0.73242 0.29102,-0.29297 0.87695,-0.29101 1.02344,-0.29297 1.02344,-0.22071 h 0.36523 l 0.51172,-0.21875 0.36523,-0.51172 0.29297,-0.6582 0.51172,-0.58398 0.51172,-0.73243 0.14649,-0.6582 -0.0742,-0.80469 -0.73047,-0.95117 -0.36524,-0.36523 -0.51172,-0.51367 -0.51171,-0.87696 -0.36524,-0.29297 -0.6582,0.22071 -0.14453,-0.80664 0.21875,-0.65821 0.58398,-0.29297 0.87695,-0.21874 0.29297,-0.51172 1.02344,-0.36524 0.87695,-0.0742 0.58399,0.14649 h 0.95117 l 0.58398,0.29297 0.73047,0.0742 0.29102,-0.36719 0.58398,-0.29102 0.65821,-0.2207 0.14648,-0.58594 0.65625,-0.51172 1.02344,-0.29101 h 1.16992 l 1.0957,-0.22071 1.31641,-0.36523 1.0957,-0.0723 h 1.24414 l 1.16797,-0.14648 0.6582,-0.21875 0.58594,-0.51367 0.29102,-0.65625 0.73047,-0.22071 1.02343,-0.58398 0.65821,-0.73242 0.50976,-0.87695 0.73243,-0.87696 0.36523,-1.02344 0.14648,-1.02539 -0.14648,-0.95117 0.0723,-0.95117 v -1.16992 l 0.51171,-1.09766 0.58399,-0.73047 1.02344,-0.21875 0.80273,-0.29297 0.87695,-0.73046 0.58594,-0.36719 0.80469,-0.80469 0.80273,-0.949218 0.0723,-0.367188 -0.14649,-0.730468 -0.14453,-1.097657 v -0.949218 l 0.21875,-0.513672 1.09571,-0.144531 0.58398,0.144531 h 1.02344 l 1.16992,0.292969 0.73047,0.585937 v 0.804687 l 0.21875,1.169922 v 0.583985 l 0.0723,0.585937 0.29297,0.804684 0.65821,0.36524 0.87695,0.29297 0.87695,-0.0742 0.73047,-0.65821 0.87695,-0.730464 0.58399,-0.511718 0.87695,-0.951172 0.21875,-1.097657 0.73047,-0.511718 0.36719,-0.585938 0.80273,-0.583984 0.0742,-0.511719 0.73047,-0.878906 0.51172,-0.730469 1.0957,-0.878906 0.51172,-0.876953 1.0957,-0.21875 h 0.87696 1.16796 l 1.4629,-0.07422 h 1.24218 1.02344 l 1.0957,0.07422 h 1.16797 0.95117 l 1.09571,-0.07422 1.24219,-0.07227 h 1.68359 1.60547 l 1.46289,-0.511719 0.58398,0.144532 h 0.80469 l 0.87695,0.292968 0.87696,-0.07227 0.87695,-0.365235 0.94922,0.07227 h 0.36523 1.02344 0.80469 l 1.31445,-0.146484 1.75391,-0.07227 1.0957,-0.07227 h 1.02344 1.09765 1.09571 l 1.53515,-0.07422 h 1.97266 l 0.87695,-0.07227 0.65821,-0.292969 0.51367,-0.365234 0.94922,-0.511719 1.82617,-0.07422 1.16992,0.292968 0.73047,1.023438 0.58398,0.730468 0.65821,0.585938 0.6582,0.658203 0.6582,-0.21875 0.51172,-0.292969 0.80274,-0.21875 0.73046,-0.513672 0.29297,-1.314453 h 0.80274 l 0.29492,0.144532 0.72852,0.585937 0.8125,0.580078 0.51171,0.513672 0.36524,0.07227 0.29297,-0.658203 0.29101,-0.583985 0.65625,-1.24414 0.29297,-0.146485 0.73047,0.291016 0.36523,0.292969 h 0.80469 0.58399 l 0.29297,0.07422 0.51171,-0.732422 0.87696,-0.21875 1.75586,-0.21875 1.89843,-0.146484 h 2.04688 2.11914 l 1.24219,-0.07422 1.46093,-0.07227 h 1.24414 l 0.80274,-0.21875 0.50976,-0.660156 0.73243,-0.876954 0.50976,-0.220703 1.02539,-0.509765 0.87696,-0.513672 1.0957,-0.292969 1.16992,-0.511719 0.65625,-0.730468 0.66016,-1.171876 0.73047,-0.658203 0.94922,-1.095703 0.6582,-0.804687 0.14453,-0.732422 0.73047,-0.583985 0.80273,-0.876953 0.51172,-0.513671 0.29492,-0.511719 V 12.42973 l 0.65625,-0.513672 0.22071,-0.802734 0.29297,-0.511719 0.72851,-1.316406 0.58399,-1.097657 0.36523,-1.169921 -0.14649,-1.025391 0.36524,-1.023438 V 3.505902 2.701214 l -0.21875,-0.511718 0.21875,-0.513672 0.29297,-0.511719 0.36523,-1.023437 0.73242,-1.023438 0.94922,-1.537109 1.09571,-0.658203 1.09765,-0.511719 2.48438,-0.878907 0.94922,0.07422 h 1.02343 0.66016 l 1.16797,0.07227 1.3125,-0.07227 0.6582,0.07227 h 0.51172 l 0.6582,-0.07227 0.80274,-0.07422 0.73047,-0.291015 0.51172,-0.367188 0.73046,-0.730468 0.51368,-0.365235 0.29101,-0.658203 0.51172,-1.023437 0.29297,-0.365235 0.80469,-0.367187 0.36328,-0.365235 0.22265,-0.732421 0.80274,-0.291016 0.80469,-0.732422 h 0.73046 l 0.65821,-0.21875 h 0.94922 0.73047 l 0.65625,-0.07422 0.6582,-0.21875 0.58594,-0.292969 0.50976,-0.511718 0.21875,-0.730469 0.14649,-0.732422 v -0.804687 l -0.0703,-0.511719 v -1.023438 -0.585937 l 0.14258,-0.876953 -0.14258,-0.951172 -0.0762,-1.023438 -0.0723,-0.876953 0.0723,-0.878906 v -0.583984 -0.951172 l -0.0723,-1.169922 0.0723,-1.023438 v -0.367187 l -0.36328,-0.511719 1.33203,-2.048828 -0.0723,-0.07227 -0.73243,0.21875 -0.58398,0.878907 -0.21875,1.169921 -0.87695,0.65625 -0.22071,0.878907 -0.0723,0.365234 -0.29297,0.07422 -0.36524,0.146484 -0.51171,0.21875 h -1.60743 -1.02343 l -0.51172,-0.146484 -0.51172,-0.21875 -0.14649,-0.367188 -0.0703,-0.511718 v -0.583985 l 0.0703,-0.660156 -0.29101,-0.730469 -0.58399,-0.876953 -0.95117,-0.367187 -0.65625,0.146484 -0.2207,0.511719 -0.94922,0.585937 -0.14648,0.65625 -0.36524,0.585938 -0.36523,0.951172 -0.29102,0.732422 -0.2207,1.023437 -0.0703,0.658203 -0.36719,0.292969 -0.21875,0.658203 -0.36524,0.07422 -0.36523,0.144531 h -0.94922 l -0.66015,-0.07227 -0.58204,-0.220703 -0.2207,-0.730469 -0.36523,-0.511718 v -0.585931 -0.730468 l -0.29296,-0.511719 -0.51172,-0.292969 -0.58203,0.07422 -0.95313,0.21875 -0.87695,0.146484 -0.29102,0.583985 -0.65625,0.146484 -0.8789,0.365234 -0.36328,0.220703 -0.66016,0.292969 -0.73047,0.07031 -0.94726,-0.07031 -0.51563,-0.07422 -0.14453,-0.220703 v -0.730468 -0.660157 l 0.21875,-0.583984 0.58398,-0.730469 0.29297,-0.658203 0.29102,-0.585937 0.29297,-0.658204 0.0723,-0.658203 -0.29101,-0.511719 -0.80274,-1.097656 -0.36718,-0.21875 -0.21875,-0.513672 0.14648,-0.511718 0.29102,-0.658204 -0.29102,-0.804687 -0.29102,-0.658203 -0.73242,-0.367188 -0.50976,0.148438 h -0.80469 -1.02539 l -0.73047,0.21875 -0.51172,0.144531 -0.2168,0.367188 h -0.8789 l -0.36328,-0.07422 -0.29297,-0.876953 v -0.804688 l 0.0723,-0.583984 -0.29296,-0.804688 -0.50977,-0.367187 -1.46289,-0.146484 -0.29297,0.220703 -0.0723,0.511718 -0.0742,1.023438 v 0.951172 1.02539 l -0.36524,0.876953 -0.29101,0.658204 -0.51368,0.660156 -0.21679,0.583984 -1.02539,0.07227 -0.36524,-0.07227 -0.2168,-0.658203 0.14454,-0.804687 0.0723,-0.878907 -0.29101,-0.511718 -0.73047,-0.292969 -0.80469,-0.511719 -0.58594,-0.146484 h -1.46093 l -0.65821,-0.21875 -0.21679,-0.292969 -0.22071,-0.583984 -0.2207,-1.097657 -0.29102,-0.730468 -0.51172,-0.730469 -0.14648,-0.585938 -0.51172,-0.730468 -0.21875,-0.585938 -0.29297,-0.291016 -0.36328,0.291016 -0.58594,1.025391 -0.29297,0.65625 -0.36523,0.876953 -0.29297,0.513672 -0.0723,1.023437 -1.68164,0.365235 -0.65821,0.365234 -1.24219,0.732422 -0.50976,0.292969 -0.58594,0.804687 -0.65625,0.511719 -0.51367,0.21875 -1.5332,0.367187 h -0.58594 l -0.36524,-0.148437 v -0.365235 l 0.65821,-0.876953 0.0742,-0.658203 -0.22071,-0.804687 v -1.097657 l 0.0723,-0.804687 -0.29297,-0.951172 -0.36328,-0.658203 -0.80664,-0.291016 -1.02149,-0.292968 h -0.73046 l -0.36719,0.07422 -0.51172,0.730469 -0.21875,0.658203 -1.46289,0.513672 -0.72852,0.07227 h -0.8789 -0.87696 l -0.94922,0.365234 -0.73046,0.07422 -0.65821,-0.146485 v -0.511718 -0.585938 l 0.36524,-0.804687 v -0.951172 l -0.21875,-0.730469 -0.14649,-0.804687 -0.51172,-0.658203 -0.51171,-0.585938 -0.29297,-0.365234 -0.50977,-0.292969 -0.80469,-0.144531 -0.58593,0.365234 -0.875,0.292969 -0.22071,0.367187 -0.58398,0.804688 -0.29492,0.511718 -0.21875,0.511719 -0.21875,0.511719 -0.95117,0.660156 -0.14454,0.876953 -0.36523,0.21875 -0.80469,0.292969 -0.58398,-0.146484 -0.51172,-0.511719 -0.51172,-0.658203 -0.14648,-0.730469 -0.0723,-0.804687 0.14453,-0.585938 0.14649,-1.023437 0.14648,-0.658203 -0.0742,-0.876954 -0.21875,-0.876953 -0.29297,-0.660156 -0.36523,-0.292969 -1.02149,0.07422 -0.73242,0.585937 -0.50982,1.023431 -0.87891,0.511719 -0.65625,0.292969 -0.36719,0.146484 -0.875,0.21875 -0.58594,-0.21875 v -0.585938 l -0.21874,-0.730468 0.0742,-1.097657 -0.14843,-0.365234 -0.21875,-1.244141 -0.21875,-1.242187 -0.14649,-0.658203 v -0.658203 l -0.87695,-0.365235 -0.58399,-0.148437 -0.6582,-0.21875 -0.36523,-0.07227 -0.36524,-0.07422 h -0.51172 l -0.51172,0.146485 -0.51171,-0.583985 -0.29297,-0.365234 -0.21875,-0.585938 -0.21875,-0.658203 -0.14649,-0.365234 -0.36523,-0.365234 -0.36719,-0.583985 h -0.73047 l -0.58398,0.583985 -0.58399,0.658203 -0.58398,0.365234 h -0.87695 l -0.58399,-0.365234 -0.21875,-0.585938 -0.36719,-0.802734 -0.6582,-0.585938 h -0.73047 -0.21875 l -0.87695,0.146485 -1.46094,-0.146485 -0.73047,-0.21875 h -0.58398 l -1.68164,-0.21875 -0.80469,0.292969 -0.95117,0.511719 -0.58399,0.21875 -0.58398,0.367187 -0.58398,-0.146484 -0.58399,-0.292969 -0.14844,-0.511718 -0.0703,-0.511719 0.0703,-1.097657 0.14844,-0.292968 -0.29297,-0.804688 -0.58398,-0.511719 -0.73047,-0.291015 -1.02344,-0.21875 h -0.87695 l -0.73047,-0.292969 h -0.58398 l -1.60743,-0.367187 -0.95117,0.07227 -1.16797,-0.144532 -0.6582,0.21875 -0.87695,0.220703 -0.65821,0.07227 -1.0957,0.146485 -0.58398,0.292969 -0.95118,0.21875 -0.94921,-0.07422 h -0.80469 l -1.24219,-0.21875 -0.72851,-0.585938 -0.58594,-0.291016 -0.36524,-0.146484 -1.09765,-0.146484 -0.58399,-0.07227 -1.31445,-0.146485 -0.6582,-0.07227 z",
    PH07: "m 295.79833,323.77234 c -0.0261,-0.0103 -0.05,-0.023 -0.0762,-0.0332 h -0.58399 l -0.6582,0.14649 h -0.58398 l -0.87696,0.0723 -0.87695,0.51172 -0.58398,0.36524 -0.73047,0.2207 -0.43946,0.14648 -0.4375,0.21875 h -0.58398 -0.95117 l -0.29102,-0.14648 -0.51367,-0.21875 -0.94922,-0.14648 -0.80469,0.0723 -0.87696,-0.0723 -0.58398,-0.0742 h -1.16993 l -0.36523,-0.0723 -0.6582,-0.0742 h -0.36524 l -0.87695,-0.21875 -0.58398,-0.14648 -0.29102,-0.14649 -0.6582,0.0723 -0.36524,0.36719 -0.58594,-0.0742 -0.4375,0.36719 -0.36523,0.4375 -0.43945,0.58593 -0.29102,0.4375 -0.4375,0.36524 -0.29297,0.14648 -0.51172,0.58594 -0.4375,0.4375 -0.58593,0.51172 -0.21875,0.51367 -0.58399,0.29102 -0.58398,0.36718 -0.36719,0.51172 -0.51172,0.4375 -0.51172,0.29297 -0.36523,0.14648 -0.58399,0.58399 -0.4375,0.36719 -0.51171,0.51172 -0.29297,0.58398 -0.87696,0.58594 -0.4375,0.51172 -0.29297,0.51172 -0.87695,0.58593 -0.58594,0.4375 -0.65625,0.43946 -0.29296,0.58398 -0.14454,0.14648 -0.73242,0.36524 -0.4375,0.51172 -0.14648,0.51367 -0.875,0.80469 -1.31641,0.58398 -0.4375,0.21875 -0.21875,0.14649 -0.87695,0.14648 h -0.65821 l -1.53515,0.36523 -0.73047,0.36524 -0.36523,0.29297 -0.36524,0.14648 -0.87695,0.14649 -0.73047,0.21875 -0.73047,0.21875 -0.6582,0.14648 -0.58399,0.4375 -0.36523,0.0742 -1.16992,0.36523 h -1.02149 l -0.95117,0.58594 -0.58398,0.29297 -0.43946,0.14453 -0.87695,0.36719 -0.36328,0.0723 h -0.87891 -0.87695 l -1.02149,-0.36523 -0.43945,-0.36719 -0.36523,-0.21875 -0.58399,-0.21875 -0.8789,-0.58398 -0.36524,-0.29297 -0.73047,-0.6582 -0.4375,-0.4375 -0.58398,-0.65821 -0.36524,-0.29297 -0.51171,-0.73046 -0.94922,-0.36719 -0.87891,-0.4375 -0.58398,-0.29102 -0.36524,-0.29297 -0.58594,-0.29297 -0.58398,-0.21874 -0.58398,-0.21876 -0.80469,-0.51171 -0.36524,-0.14649 -0.6582,-0.43945 -0.65625,-0.29102 -0.80469,-0.14648 -0.51171,-0.14649 -0.80469,-0.14648 -1.16797,-0.14648 h -0.58594 l -0.16601,0.082 -0.0547,0.65234 v 1.09766 l 0.0742,0.95117 -0.36719,0.4375 -0.36523,1.02344 -0.36524,0.73242 -0.36523,0.4375 -0.65821,0.36719 -0.29101,0.36328 -0.36524,0.8789 -0.36718,0.36524 -0.875,0.51367 -0.21875,0.4375 -0.43946,0.43945 -0.36523,0.51172 -0.36524,0.36524 -0.51171,0.58593 -0.29297,0.4375 -0.29102,0.58594 -0.2207,0.36524 -0.58399,0.2207 -0.29297,0.21875 -0.36523,0.36523 -0.36523,0.29297 -0.14649,0.14649 -0.6582,0.58593 -0.58399,0.65821 -0.36523,0.73046 -0.58398,0.87696 -0.14649,0.51367 v 0.95117 l -0.29101,0.80469 -0.29297,0.73047 -0.0723,1.09765 -0.36523,0.80469 -0.22071,0.87696 -0.58398,1.3164 -0.73047,0.58594 -0.14648,0.73047 -0.95118,0.43945 -0.4375,0.36524 -0.36523,0.2207 -0.4375,0.73047 -1.09766,0.6582 -0.21875,0.2207 -1.0957,0.80469 -0.2207,1.31445 -0.21875,0.80469 v 1.09766 l -0.14453,0.58398 -0.19532,0.77539 0.48243,0.18164 0.6582,0.58399 0.29101,0.2207 0.51368,0.4375 0.58398,0.21875 0.72852,0.51172 1.02343,0.51367 0.51172,0.14453 0.36719,0.43946 0.58398,0.80468 0.58399,0.29297 0.87695,0.43946 0.58399,0.36328 0.36523,0.36718 0.58398,0.21875 0.87696,0.43946 0.6582,0.36523 0.58399,0.36719 0.80468,0.4375 0.58399,0.43945 1.0957,0.65625 0.95117,0.43945 0.58399,0.4375 0.4375,0.51368 0.87695,0.29101 0.6582,0.21875 0.58399,0.58594 0.4375,0.14453 0.87695,0.58594 0.36719,0.36523 0.36523,0.43946 0.58399,0.51172 0.73047,0.36523 0.29101,0.58594 0.80469,0.36523 0.80469,0.80469 0.4375,0.51172 0.87695,0.51172 0.29101,0.36523 0.43946,0.6582 0.4375,0.58594 0.51172,0.29297 0.58398,0.58398 0.73047,0.22071 0.58398,0.29101 0.36524,0.58594 0.43945,0.58399 0.65625,0.51171 0.36719,0.4375 0.50976,0.36719 0.36524,0.21875 0.29297,0.51367 0.58594,0.36524 0.50976,0.73047 0.51367,0.29297 0.50977,0.29296 0.6582,0.65821 0.29297,0.21875 0.29102,0.36523 0.29296,0.36719 1.16993,0.51172 0.94922,0.21875 1.31445,0.0723 0.95117,0.0742 h 1.31445 l 0.94922,0.0742 0.58594,-0.14844 0.58398,-0.14453 1.09571,-0.36719 0.51172,-0.36523 0.51171,-0.14648 0.36524,-0.29297 1.0957,-0.14453 h 1.09766 l 0.36523,-0.0742 0.36524,-0.36524 0.36523,-0.29297 0.73047,-0.21875 1.16992,-0.14648 1.02149,-0.0723 0.36523,-0.0742 h 0.80469 l 0.43945,0.36718 0.29102,-0.14844 0.58593,-0.21874 h 0.73047 l 0.51172,0.0742 h 0.80274 1.09765 l 0.14649,-0.0742 0.58398,0.0742 0.87695,-0.14843 1.38868,-0.14454 h 0.58398 0.80469 0.73047 0.73048 l 0.4375,0.21876 0.51171,0.0723 1.02344,-0.0723 h 0.58399 l 0.95117,0.0723 0.65625,0.14648 1.09765,0.14649 h 1.53516 l 0.72461,-0.0469 0.45702,-0.68554 0.4375,-0.36328 0.22071,-0.36719 0.58398,-0.4375 0.4375,-0.58594 0.36523,-0.36523 0.51173,-0.4375 0.51172,-0.43946 0.73047,-0.58398 0.50976,-0.51172 0.58594,-0.66016 0.58399,-0.4375 0.51172,-0.2207 0.51171,-0.58398 0.21875,-0.73047 0.58594,-0.36719 0.58399,-0.6582 0.2207,-0.36524 0.36328,-0.4375 0.29297,-0.4414 0.58594,-0.58399 0.14453,-1.09765 0.14648,-0.80469 v -0.58399 -0.95117 l 0.14649,-0.36523 v -1.09766 -0.58398 -0.58594 -0.6582 l 0.14648,-0.65821 0.29102,-0.87695 0.36718,-0.80469 0.65625,-0.51367 0.36719,-0.29101 0.58399,-0.87891 v -0.14649 l 0.14453,-0.58398 0.2207,-0.43945 0.29297,-0.21875 0.50976,-1.38867 0.4375,-0.58594 0.36523,-0.73047 0.36719,-0.4375 0.36523,-0.66016 0.36328,-0.21875 0.0742,-0.29297 0.4375,-0.87695 0.58594,-1.02344 0.14453,-0.58593 0.36719,-1.09571 0.14648,-0.58593 v -0.65821 l -0.0742,-0.6582 -0.0723,-0.58594 -0.14649,-0.58398 v -0.87696 -0.36718 -0.58399 l 0.0723,-0.6582 -0.14453,-0.58594 v -0.36523 l -0.21875,-0.43946 v -0.58398 l -0.14648,-0.43945 -0.14648,-0.66016 v -0.51172 l 0.0723,-0.58398 0.1465,-0.58594 v -0.58398 l -0.0723,-0.58594 -0.14648,-0.80274 v -0.58593 l 0.14648,-0.73047 0.14649,-0.36719 v -0.80469 l -0.29297,-0.51172 h -0.51172 l -1.31446,0.14649 h -0.51172 l -0.51172,-0.14649 -0.29297,-0.2207 -0.36523,-0.4375 v -0.36523 l 0.0723,-0.58594 0.14844,-0.6582 0.0703,-0.36524 0.29297,-0.58594 0.14648,-0.4375 0.21876,-0.43945 -0.14649,-0.6582 v -0.36524 l 0.0723,-0.36718 0.29296,-0.80274 0.14649,-0.80664 0.14453,-0.65625 0.14648,-0.58594 0.14649,-0.43945 0.14648,-0.87695 v -0.87696 l 0.29102,-0.80468 0.29297,-0.51368 0.0723,-0.36523 0.21875,-0.73047 0.0742,-0.51172 0.36524,-1.09765 0.14648,-1.24414 v -0.29297 l 0.14453,-0.73047 0.14649,-1.02344 0.14648,-0.73242 -0.21875,-1.38867 v -0.73243 z",
    PH08: "m 209.46289,367.34375 -0.73047,0.36719 -0.36719,0.21875 -0.14453,0.87695 -0.36718,0.36719 -0.80274,0.4375 -0.2207,0.29297 -0.29102,0.29101 -0.58594,0.36719 -0.14453,0.36523 -0.43945,0.65821 -0.58398,0.73047 -0.36524,0.43945 -0.87695,0.4375 -0.36524,0.43945 -0.6582,0.58594 -0.73047,0.6582 -0.36523,0.87891 -0.21875,0.87695 -0.14649,0.51172 -0.21875,0.80469 -0.51367,0.36523 h -0.4375 l -0.29101,0.0742 h -0.36719 l -0.36524,-0.14844 -0.36523,-0.36328 h -0.51172 l -0.43945,0.0723 -0.36328,0.2207 -0.29297,0.36328 -0.29297,0.29297 -0.51172,0.51367 -0.29101,0.14454 -0.73243,0.58593 -0.21875,0.29297 -0.58398,0.51172 -0.43945,0.58594 -0.14454,0.36523 -0.29296,0.36524 -0.14649,0.29297 -0.21875,0.29296 -0.43945,0.36524 -0.36524,0.29297 -0.58398,0.58398 -0.29297,0.36719 -0.4375,0.58398 -0.36719,0.14649 -0.73047,0.58398 -0.58398,0.58594 -0.58398,0.80469 0.0723,0.51172 -0.14648,0.36718 -0.29297,0.21875 -0.875,0.0742 -0.29297,0.36524 -0.36523,0.58593 -0.65821,0.29102 -0.36328,0.51172 -0.36719,0.43945 -0.21875,0.43945 -0.6582,0.21875 -0.36523,0.58399 -0.36524,0.51367 -0.29297,0.21875 -0.4375,0.14453 -0.36523,0.87695 -0.6582,0.43946 -0.29297,0.51172 -0.58399,0.51367 -0.58594,0.36523 -0.4375,0.29102 -0.29101,0.6582 -0.36524,0.51172 -0.43945,0.36719 -0.4375,0.58398 -0.43945,0.29492 -0.36524,0.36329 -0.4375,0.6582 -0.58398,0.58789 -0.6582,0.50977 -0.36524,0.36718 -0.36523,0.50977 -0.73047,0.58594 -0.58594,0.58593 -0.36523,0.36524 -0.36719,0.36523 -0.29102,0.29297 -0.58398,0.36524 -0.36523,0.14648 -0.58399,0.29297 -0.14648,0.29101 -0.51172,0.22071 c 0,0 -0.0405,0.0733 -0.041,0.0742 l 0.1836,0.29296 -0.14454,0.43946 0.14454,0.58398 0.43945,0.51367 0.4375,0.65625 0.14648,0.51368 0.21875,0.95117 0.21875,0.6582 0.22071,0.87695 -0.0742,0.58399 -0.21875,0.29297 v 0.58593 l 0.14453,0.80469 0.29297,0.65821 v 1.02343 l 0.21875,0.51172 0.2207,0.95117 0.14649,0.58594 0.29101,0.80469 0.14649,0.58398 0.4375,0.36524 -0.0723,0.29297 -0.14649,0.36718 0.21876,0.73047 0.6582,0.51172 0.2207,0.29297 0.21875,0.51172 0.36524,0.36719 0.58398,0.36328 0.51367,0.80664 0.58399,0.51172 0.80273,0.14648 0.51367,0.21875 0.58399,0.29297 0.58398,0.51172 0.21875,0.29297 0.87891,0.36718 0.80273,0.4375 0.73047,0.51172 0.73047,0.29297 0.6582,0.21875 0.51172,0.14649 0.21875,0.43945 0.80469,0.2168 0.36523,-0.0723 h 0.29102 l 0.58594,0.2207 0.29101,0.29297 0.36719,0.0742 0.36523,0.36328 0.4375,0.58594 0.29297,0.58594 0.29102,0.94922 0.2207,0.21875 0.72852,0.14843 0.6582,0.14649 0.36523,0.58398 0.29297,0.65821 0.51172,0.58593 v 0.65625 l -0.21875,0.58594 0.0742,0.51367 -0.29297,0.65821 -0.29297,0.29101 -0.51172,0.73047 -0.14648,0.58789 v 0.50977 l 0.0742,0.43945 0.21875,0.36523 0.21875,0.29493 0.21875,0.36328 0.21875,0.6582 0.0742,0.58594 0.21875,0.6582 0.14648,0.29102 0.29102,0.43945 0.29297,0.4375 0.14648,0.36523 0.14453,0.51368 0.0742,0.2207 0.0723,0.6582 -0.14649,0.36524 -0.0723,0.29101 v 0.43946 l -0.14649,0.65624 -0.0723,0.58594 -0.14649,0.29297 -0.2207,0.73047 -0.29102,0.36719 -0.4375,1.02148 -0.21875,0.73242 v 0.29297 l 0.21875,0.58594 v 0.51172 l -0.14648,0.65625 0.0723,0.43945 0.21875,0.58594 0.65821,0.14453 0.58398,-0.0723 0.36719,-0.29296 0.80273,-0.0723 1.09571,-0.29297 0.80468,-0.14648 1.97266,-0.0723 0.80469,0.0723 0.36523,0.14648 0.43946,0.29297 0.29101,0.2207 0.0742,0.4375 -0.14648,0.36524 -0.29102,1.09765 v 0.4375 0.65821 l 0.0742,0.8789 v 0.58594 l -0.0742,0.72852 0.21875,1.02539 0.14648,0.73047 0.0742,0.36523 -0.0742,0.2207 -0.2207,0.65625 -0.14453,0.73243 -0.21875,0.36523 -0.29297,0.51172 -0.14648,0.58594 -0.14453,0.51171 -0.0742,0.22071 v 0.65625 l -0.29102,0.6582 -0.14648,0.51367 -0.14649,0.80469 v 0.58594 l -0.0723,0.29297 -0.21875,0.36328 -0.21875,0.51367 -0.22071,0.51172 0.22071,0.6582 0.21875,0.29102 0.29101,0.29297 0.51172,0.51171 0.51367,0.0742 1.02149,-0.0742 0.58398,-0.14453 0.73242,-0.0723 h 1.02149 l 0.6582,-0.29492 0.87695,-0.29297 0.36524,-0.14453 h 0.73047 l 0.58398,0.58593 0.29102,0.4375 0.2207,0.58399 0.51172,0.58594 0.94922,0.36523 0.58398,-0.29102 0.43946,-0.73242 0.29101,-0.0723 0.6582,0.29101 0.58399,0.36524 0.36523,0.66015 0.21875,0.51172 0.65821,0.2207 1.60742,0.80469 0.14648,0.0723 0.51172,0.14453 0.6582,0.14844 0.65821,0.14648 0.36523,0.0723 0.51172,0.29297 0.36524,0.14648 0.36523,0.14648 0.58398,0.21875 0.29102,0.0742 0.73242,-0.14648 h 0.67969 l 0.13086,-0.4336 0.29101,-0.66015 -0.0723,-0.80469 -0.29102,-0.94922 -0.14648,-0.87695 v -1.24219 l 0.73047,-0.51367 0.80468,0.0723 1.16797,-0.65821 1.09571,-0.66015 0.36523,-0.36524 0.6582,-0.51172 0.95118,-0.29297 1.02343,-0.51171 0.36524,-0.65625 1.0957,-0.73047 h 1.0957 l 0.87891,-0.22266 0.72852,-0.58398 0.95117,-0.36328 0.87695,-0.22266 0.80273,-0.51172 0.22071,-0.51172 0.65625,-0.6582 0.80469,-0.2207 1.46289,-0.58399 0.73046,-0.14648 1.02344,-0.0742 0.50977,-0.0723 0.51172,0.0723 0.73047,0.0742 0.80468,0.58398 0.58399,0.14649 0.80469,0.29296 0.58398,0.0723 0.94922,-0.51172 0.29297,-0.58398 0.80468,-0.36524 0.87696,-0.80469 0.94922,-0.66015 1.02343,-0.58399 0.875,-0.14648 0.87696,-0.21875 1.02343,-0.14649 1.24415,-0.36523 1.02148,-0.21875 0.29297,-0.51367 0.6582,-1.09766 0.6582,-0.58593 0.14454,-0.58399 0.29296,-0.73047 0.21875,-0.8789 v -0.87696 l 0.29297,-0.6582 0.21875,-0.6582 0.58399,-0.73243 0.51172,-0.58398 0.73047,-0.73047 0.58398,-0.14648 0.87695,-0.29297 0.87696,0.14648 1.31445,0.51172 0.73047,-0.2207 h 0.95117 l 0.94922,-0.14649 1.53515,-0.2207 0.95118,-0.36523 0.94921,-0.58399 0.80274,-1.16992 0.2207,-0.73242 0.73047,-1.02344 0.29297,-0.58398 v -0.80469 -0.80664 -1.16992 l -0.14844,-1.02149 -0.50976,-0.80664 -0.58594,-0.58594 -0.50977,-0.58398 -0.73242,-0.51367 -0.21875,-0.36524 -0.6582,-0.6582 -0.29297,-0.36523 -0.80273,-1.09766 -0.36524,-0.58398 -0.29297,-0.5879 -0.80273,-0.50976 -0.29297,-0.51367 -0.6582,-0.73047 -0.58399,-0.51172 -0.21875,-0.73047 -0.36523,-0.58789 -0.51172,-0.73047 v -1.68359 -0.94922 -0.73047 -1.16992 l 0.0742,-0.95117 0.36328,-1.24219 0.6582,-0.58789 0.14649,-0.65625 -0.36524,-1.02344 -0.51172,-0.95117 -0.51172,-1.46289 0.14649,-2.19336 0.68164,-3.26563 -1.14844,-3.25195 10.33203,4.5918 3.63477,-4.01953 0.1914,-2.48633 2.29688,-1.91406 -0.38281,-3.25196 -2.8711,-2.29687 -2.80468,-8.32032 -1.38868,0.14454 -0.87695,0.14843 -0.58398,-0.0742 -0.14649,0.0742 h -1.09765 -0.80274 l -0.51172,-0.0742 h -0.73047 l -0.58593,0.21874 -0.29102,0.14844 -0.43945,-0.36718 h -0.80469 l -0.36523,0.0742 -1.02149,0.0723 -1.16992,0.14648 -0.73047,0.21875 -0.36523,0.29297 -0.36524,0.36524 -0.36523,0.0742 h -1.09766 l -1.0957,0.14453 -0.36524,0.29297 -0.51171,0.14648 -0.51172,0.36523 -1.09571,0.36719 -0.58398,0.14453 -0.58594,0.14844 -0.94922,-0.0742 h -1.31445 l -0.95117,-0.0742 -1.31445,-0.0723 -0.94922,-0.21875 -1.16993,-0.51172 -0.29296,-0.36719 -0.29102,-0.36523 -0.29297,-0.21875 -0.6582,-0.65821 -0.50977,-0.29296 -0.51367,-0.29297 -0.50976,-0.73047 -0.58594,-0.36524 -0.29297,-0.51367 -0.36524,-0.21875 -0.50976,-0.36719 -0.36719,-0.4375 -0.65625,-0.51171 -0.43945,-0.58399 -0.36524,-0.58594 -0.58398,-0.29101 -0.73047,-0.22071 -0.58398,-0.58398 -0.51172,-0.29297 -0.4375,-0.58594 -0.43946,-0.6582 -0.29101,-0.36523 -0.87695,-0.51172 -0.4375,-0.51172 -0.80469,-0.80469 -0.80469,-0.36523 -0.29101,-0.58594 -0.73047,-0.36523 -0.58399,-0.51172 -0.36523,-0.43946 -0.36719,-0.36523 -0.87695,-0.58594 -0.4375,-0.14453 -0.58399,-0.58594 -0.6582,-0.21875 -0.87695,-0.29101 -0.4375,-0.51368 -0.58399,-0.4375 -0.95117,-0.43945 -1.0957,-0.65625 -0.58399,-0.43945 -0.80468,-0.4375 -0.58399,-0.36719 -0.6582,-0.36523 -0.87696,-0.43946 -0.58398,-0.21875 -0.36523,-0.36718 -0.58399,-0.36328 -0.87695,-0.43946 -0.58399,-0.29297 -0.58398,-0.80468 -0.36719,-0.43946 -0.51172,-0.14453 -1.02343,-0.51367 -0.72852,-0.51172 -0.58398,-0.21875 -0.51368,-0.4375 -0.29101,-0.2207 -0.6582,-0.58399 z m 1.89063,22.91797 9.05273,3.33398 -3.45508,8.9336 -8.93164,-3.2168 z",
    PH09: "m 288.19433,600.00202 -0.20898,-0.14063 -2.48437,-0.36719 -1.02344,-0.6582 -0.87696,-0.87695 -1.31445,1.09765 -1.09765,0.14649 -1.89844,-0.14649 0.36328,2.48633 -1.02149,0.36524 -0.87695,0.80664 -1.3164,0.4375 -1.46094,0.80468 -1.09571,0.65821 -1.90039,0.87695 -0.80273,1.09961 -0.58399,1.60742 -0.8789,0.36524 -1.02149,0.36523 -1.24414,0.80469 -1.0957,0.80468 -0.57031,0.69727 -0.0879,0.10938 v 35.54882 l -1.09571,0.87891 -1.24218,0.65625 -1.90039,0.80469 -1.60743,1.02539 -1.68164,0.58398 -1.82812,1.09766 -2.33789,1.46289 -2.5586,0.87695 -1.46093,1.09961 -2.48438,0.87696 -1.90234,1.09765 -2.26367,1.0957 -2.5586,1.09961 -1.3164,0.87696 -0.94922,0.6582 -1.82813,0.87891 -1.24218,0.6582 -1.60743,0.65625 -1.16992,0.73242 -1.67969,0.6582 -1.24218,0.80469 -1.68164,0.87695 -1.24219,0.58594 -1.31445,0.65821 -1.46094,0.80468 -0.57813,0.27735 -1.25,0.59961 -0.6582,1.68359 -0.58399,1.82812 -0.80273,1.9004 -0.6582,1.60937 -0.58399,2.04883 -0.80468,2.12109 -0.87696,2.04883 v 3.72852 l 0.65625,1.02343 v 4.83008 l 0.58594,1.02149 v 2.56054 l -1.0957,0.58594 -0.87696,0.87695 -0.58398,1.31446 -0.80469,1.24609 -0.80469,1.02344 -0.4375,0.80469 -1.02343,1.68164 -0.80469,0.66015 -0.6582,0.65821 -0.65625,1.3164 -0.80469,1.02149 -0.6582,1.31836 -0.87696,1.46093 -0.4375,0.36524 -0.58398,1.46484 -0.80469,1.60938 -0.87695,0.87695 -0.65821,1.02344 -0.80468,1.3164 -0.65821,1.09766 -0.80273,1.60937 -0.6582,1.24415 -0.65625,1.31445 -0.65821,0.6582 -0.80468,1.02344 -0.14649,0.87891 -0.875,0.80468 -0.66015,1.68164 -0.65626,1.09961 v 4.24024 l -0.36523,0.6582 -0.43945,0.58398 v 3.58399 l -0.36524,0.58789 0.14649,1.0957 -0.43946,0.43946 0.14649,3.36328 -0.58399,0.66015 0.21875,0.87696 0.21875,0.14648 -0.80468,0.80469 v 1.24414 l -0.65821,1.31641 -0.6582,1.68359 -0.14453,0.80469 -0.43945,0.87695 -0.36524,1.02344 -0.58398,0.8789 -0.36524,1.09766 -0.51367,1.0957 -0.36328,0.80469 -0.73242,0.51367 -0.36524,0.80469 -1.02148,1.02344 -1.09766,1.16992 -0.58398,1.02344 c -0.001,10e-5 -0.003,-10e-5 -0.004,0 v 1.67578 l -0.36328,0.87695 -0.51367,0.6582 -0.58399,0.87891 -0.21874,0.87695 -0.4375,0.58594 0.0723,0.87891 0.36524,1.02148 0.58398,2.12305 0.6582,1.24219 0.29297,0.87695 0.58399,1.31641 0.0723,1.09765 0.58594,0.36719 0.94922,1.09766 0.29297,1.0957 0.65625,1.16992 0.2207,1.31836 0.14648,0.43945 1.09571,0.28907 1.38867,0.88085 1.82812,0.36133 0.94922,0.58789 1.24219,0.4375 1.31641,0.66016 -0.14649,0.72851 -0.2207,0.87891 -0.0723,1.02344 -0.4375,1.60937 -0.21875,1.83008 -0.29297,1.53516 -0.0859,0.7793 -0.0606,0.5371 -0.14648,1.31446 -0.36524,1.09765 -0.58398,1.46485 -0.80469,0.72851 -0.51172,1.31836 -0.2207,0.25781 -2.72852,6.8086 0.0274,0.61328 -0.36524,0.80469 -0.2207,0.6582 -0.0723,1.5332 -0.0723,1.24414 -0.21875,0.80469 0.14648,0.87891 0.14649,0.87695 -0.29297,0.58594 v 0.8789 l 0.43945,0.65821 -0.58398,0.80273 0.29101,0.58594 -0.29101,0.6582 -0.14649,2.63282 -0.14648,1.68164 0.2207,1.09961 -0.0742,3.58398 0.14649,1.60937 -0.36524,1.31446 -0.0742,1.02539 -0.14453,0.87695 0.14453,0.58399 -0.14453,0.95312 0.14453,0.36524 -0.51172,0.43945 -0.29101,1.82617 -0.21875,1.46484 -0.22071,1.83008 -0.36328,0.87696 -0.29296,1.38867 -0.14649,0.87695 -0.58398,1.31836 v 1.60742 l -0.4375,1.53711 -0.29297,1.60938 -0.36524,1.31445 -0.36523,1.90234 0.14648,1.31641 -0.0723,-1.16992 0.95117,-0.36719 0.94922,-0.51172 1.82617,-0.87891 1.39063,-0.43945 1.0957,-0.65625 1.82617,-0.6582 0.87695,-0.65625 1.97461,-0.73242 0.58399,-0.51367 1.0957,-0.43946 1.46094,-0.65625 0.8789,-0.58594 1.60547,-0.58398 0.65821,-0.36523 1.46093,-0.5879 0.87696,-0.51171 0.95117,-0.2168 0.6582,-0.73242 0.4375,-0.36524 1.90039,-0.36523 0.65821,-0.66016 0.4375,-0.58398 0.6582,-1.31836 0.51172,-0.29102 1.0957,-0.36523 0.51172,-0.58594 0.58594,-0.4375 0.65625,-0.36719 1.02343,-0.65625 0.58399,-0.58593 0.21875,-0.58399 0.43945,-0.36523 0.87695,-0.66016 0.51172,-0.58398 0.65821,-0.65821 0.87695,-0.36718 0.73047,-0.73047 0.65625,-0.58399 0.87695,-0.80468 0.2207,-0.73243 0.87696,-0.4375 1.82812,-0.36718 0.94922,-0.4375 0.80469,-0.4375 1.24219,-0.36524 0.58398,-0.58398 1.0957,-0.95313 0.65821,-0.80469 0.8789,-0.73046 0.58399,-1.09571 0.80273,-0.51562 0.14649,-0.94922 0.6582,-0.58594 0.4375,-0.36328 0.73047,-0.36523 0.58398,-0.58594 0.51172,-0.58594 0.58594,-1.09766 0.29101,-0.94921 0.36524,-0.66016 0.51172,-0.87695 0.51172,-1.09766 0.58398,-1.02539 0.36719,-0.36328 0.6582,-0.36524 0.65625,-0.29296 0.58399,-0.14454 0.2207,-0.51562 0.58398,-0.14453 1.16992,-0.14844 0.58399,0.22266 0.58398,0.58398 0.51172,-0.14648 0.73047,-0.29297 0.14649,-0.51172 0.43945,-0.66016 0.50976,-1.02148 0.73243,-0.36524 0.58398,-0.22265 0.58399,-0.4375 0.6582,-0.58399 0.58398,-0.2207 0.87696,-0.51172 0.65625,-0.58398 0.58593,-0.22071 1.09571,-0.6582 0.87695,-0.4375 0.80469,-0.58398 1.0957,-0.51368 0.6582,-0.73046 1.46094,-0.51172 0.36523,-0.44141 1.02344,-0.50976 0.58399,-0.14649 0.51172,0.14649 0.4375,0.58593 0.36718,0.65625 0.21875,0.73047 0.14649,0.80469 0.21875,0.73242 0.36523,0.51172 0.29297,0.58594 0.36524,0.72851 0.58398,0.58789 0.0742,0.58399 0.58203,0.80469 0.43945,0.6582 0.14649,0.43945 0.8789,-0.73242 h 1.53321 l 1.16796,-0.0723 0.87696,0.14649 0.6582,-0.14649 0.87695,-0.58398 0.94922,-1.02344 0.51172,-0.58593 0.29297,-0.36524 0.36524,-0.29297 0.51171,-0.29297 0.51172,-0.29297 0.58399,-0.29101 0.95117,-0.14844 0.29101,-0.29101 0.4375,-0.36524 0.29297,-0.73047 0.36524,-1.09765 0.51172,-0.58399 0.29297,-1.09961 -0.14649,-0.87695 0.14649,-0.87891 0.0723,-0.80468 0.14648,-0.58594 0.36524,-1.09766 0.21875,-0.94922 v -0.8789 l 0.14648,-0.73047 0.65821,-0.14649 0.87695,0.14649 0.58398,0.66015 0.29297,-0.14843 0.73047,-0.80469 0.36524,-0.87695 0.21875,-0.51172 0.6582,-0.66016 0.36523,-0.80469 0.29297,-0.87695 0.65821,-0.94922 0.58398,-0.51562 0.4375,-0.58399 0.6582,-0.4375 0.36524,-0.51367 0.51172,-0.36328 0.43945,-0.29297 0.29297,-0.0723 0.36328,0.14454 0.58398,0.73242 0.14649,0.65625 0.51172,0.51367 0.36523,0.58398 0.4375,0.5879 0.73047,0.58398 0.36719,0.58594 0.36523,0.87695 v 0.29297 l 0.58399,0.51172 0.58398,0.51172 0.36328,0.58789 0.36719,0.14453 0.29102,0.87695 0.95117,1.02539 1.02148,0.80469 1.02344,1.31641 0.6582,0.58398 0.87695,0.95117 1.16993,0.73047 0.29101,0.43945 0.58594,0.65625 h 1.0957 l 1.31446,0.58789 0.87695,0.0703 1.82812,0.51367 0.50977,0.36523 v 1.60743 l 0.0742,-0.21876 v -1.82812 l -0.51172,-0.36523 -1.82617,-0.51172 -0.87695,-0.0723 -1.31641,-0.58789 h -1.0957 l -0.58399,-0.65625 -0.29297,-0.4375 -1.16797,-0.73242 -0.87695,-0.95313 -0.6582,-0.58398 -1.02344,-1.31445 -1.02344,-0.80469 -0.94922,-1.02539 -0.29297,-0.87696 -0.36523,-0.14843 -0.36523,-0.58399 -0.58594,-0.51172 -0.73047,-0.87695 v -0.29297 l -0.21875,-0.51172 -0.36523,-0.58593 -0.73047,-0.58399 -0.4375,-0.58789 -0.36719,-0.58398 -0.51172,-0.51367 -0.14648,-0.65626 -0.58399,-0.73046 -0.6582,-0.73243 -0.14649,-0.94921 -1.02343,-0.80469 -0.4375,-1.09961 -1.02344,-0.6582 -0.87695,-0.14649 h -0.4375 l -0.58594,0.51172 -0.51172,0.36719 h -1.0957 -0.87696 l -0.51171,-0.36719 -0.14649,-0.65625 -0.4375,-0.43945 v -0.51367 -0.36524 l -0.0742,-0.94922 -0.36523,-0.36523 -0.14453,-1.31641 -0.14649,-1.3164 -0.14648,-1.31641 0.21875,-1.90235 0.14648,-0.72851 0.36524,-0.66016 0.58398,-0.21875 0.58399,-0.87695 -0.0723,-1.82813 -0.58399,-0.58593 -1.0957,-0.29492 -0.87695,-0.58204 -0.51172,-1.09961 v -1.09765 l -0.0742,-1.0957 -0.29101,-1.24415 v -1.31835 l -0.43164,-1.60157 v -1.60937 l -0.51368,-1.82813 -0.21875,-2.04687 v -1.2461 l -0.51172,-1.31445 -0.21875,-1.90234 v -2.19336 l -0.0723,-1.39063 -0.51172,-1.3164 -0.0742,-2.11914 v -2.04883 l 0.2207,-2.19531 0.21875,-1.68165 0.21875,-1.60937 0.21875,-2.33984 -0.0742,-2.70703 0.29296,-5.04688 0.43946,-1.68164 0.0723,-4.68164 -0.0723,-3.51367 0.29101,-2.9961 0.29297,-1.83007 0.0723,-4.31641 -0.0703,-3.21875 0.29101,-3.95117 v -1.82617 l 0.0742,-1.53711 0.73047,-5.26563 -0.0742,-1.90234 -0.0723,-1.90039 v -2.85547 l 0.0723,-4.24024 -0.21875,-3.6582 v -2.70508 -4.31445 -3.51172 l 0.0723,-3.36328 0.0723,-2.70703 0.29297,-2.41406 -0.0742,-1.09766 1.24219,-0.51367 0.29297,-0.80469 1.02343,-1.39063 0.58399,-0.51171 0.51172,-1.90235 0.0742,-2.92383 -0.51172,-2.63672 -0.0723,-2.55859 0.4375,-1.31641 0.0742,-1.83007 -0.0742,-2.70508 -0.0723,-1.82813 -0.0723,-2.12109 v -2.41406 l 0.29102,-3.14649 0.21875,-1.38867 0.87695,-3.21875 0.80469,-2.85351 -0.22071,-1.60743 1.24414,-1.60937 0.29102,-2.04688 0.43945,-2.05078 1.31446,-3.14453 0.51172,-2.85351 0.80468,-2.41407 0.87696,-2.56054 z",
    PH10: "m 383.75085,283.21298 -0.61719,-0.35937 -0.29102,0.0742 -0.36719,0.0723 -0.58398,0.21875 -0.36523,0.14649 -0.65821,0.14648 -1.0957,0.14453 -0.87695,0.0742 -0.87696,0.29297 -0.80273,0.21875 -0.36719,0.14648 -0.36523,0.14649 -0.29297,0.14648 h -0.65625 l -0.36328,-0.14648 h -0.36524 l -0.29297,0.14648 -0.14648,0.29297 -0.29297,0.36524 h -0.73047 l -0.51172,-0.22071 -0.29101,-0.4375 -0.58594,-0.36523 -0.58398,-0.21875 -0.58594,-0.0742 -0.73047,-0.21875 -0.36523,-0.14844 -0.65626,0.0742 -0.51171,-0.21875 -0.36719,-0.14648 -0.50977,-0.4375 -0.29297,-0.14649 -0.72851,-0.14648 -0.36524,-0.14649 -0.73242,-0.14648 -0.4375,-0.14648 -0.6582,-0.14454 -0.87695,-0.14648 -0.58399,-0.0742 h -0.73242 l -0.58398,-0.0723 h -0.36524 -1.0957 -0.58399 l -0.58593,-0.0742 -1.09766,-0.14649 -0.73047,-0.21875 -0.58398,0.0742 -0.4375,-0.14844 -0.36524,-0.21875 -0.43945,-0.80468 -0.4375,-0.36524 -0.6582,-0.36523 -0.58594,-0.22071 -0.4375,-0.14648 -0.87891,0.2207 -0.58398,0.14453 -0.87891,0.36524 -0.29101,0.21875 -0.4375,0.14648 -0.36719,0.0742 -0.36524,0.21875 -0.29296,0.21875 -0.29102,0.21875 -0.29297,0.14844 -0.58594,-0.14844 -0.4375,-0.14453 -0.36718,-0.36719 -0.36133,-0.4375 -0.36719,-0.36523 -0.36328,-0.36719 -0.58594,-0.36523 -0.36523,-0.36524 -0.58203,-0.36523 -0.36719,-0.36719 -0.36524,-0.36523 -0.36523,-0.73243 -0.51172,-0.36523 -0.6582,-0.36524 -0.36524,-0.14648 -0.29296,0.51172 -0.0742,0.80469 -0.0723,0.51172 v 0.36523 0.6582 l -0.0723,0.51172 v 0.58594 0.4375 0.51172 0.51172 l -0.14453,0.36718 -0.21875,0.58399 -0.14648,0.43945 -0.36524,0.36524 -0.29296,0.43945 -0.58399,0.58398 -0.29101,0.36719 -0.14649,0.51172 -0.36523,0.29102 -0.87891,0.51171 -0.36523,0.43946 -0.51172,0.58398 -0.65625,0.58594 -0.4375,0.14453 -0.36524,0.36719 -0.51171,0.36523 -0.1836,0.30078 v 0.002 l 0.17969,0.44531 0.0723,0.66016 0.22071,0.58398 -0.29297,0.58398 -0.21875,0.66016 -0.14844,0.50977 v 0.8789 l 0.58789,1.31641 0.2168,0.80469 0.51367,1.38867 0.36524,0.51172 0.36523,0.29297 0.36328,0.58593 0.2207,0.36524 0.29297,0.73047 0.14453,0.36718 0.43946,0.51172 1.02343,0.73047 0.58399,0.73047 0.50976,0.36719 0.51368,0.36523 1.0957,0.51172 0.22266,0.36524 0.87695,0.6582 0.2207,0.43945 1.0957,0.21875 0.36329,0.14649 0.80468,0.8789 0.73047,0.65821 0.65821,0.6582 0.6582,0.36523 0.72851,0.29297 0.80469,0.29297 0.36524,0.36523 0.51171,0.58594 0.65821,0.51172 0.29297,0.29102 0.87695,0.58593 0.36523,0.4375 0.21875,0.58594 0.36719,0.73047 0.36328,0.58594 0.29297,0.36523 0.4375,0.58399 0.22071,0.58593 0.21874,0.36524 0.14454,0.36523 0.58593,1.02539 0.43946,0.4375 0.51172,0.51172 0.29296,0.36719 0.36329,0.43945 0.22265,0.58399 0.36328,1.02343 0.36524,0.58594 0.21875,0.36524 0.36718,0.87695 v 0.80469 l -0.0723,0.66015 -0.14844,0.51172 -0.14648,0.36524 v 0.58398 l 0.0723,0.43945 -0.14453,0.65821 -0.36523,0.58593 -0.29297,0.29102 -0.51172,0.14648 -0.36523,0.58399 -0.36524,0.29297 -0.36523,0.0742 -0.87696,-0.14649 -0.51171,-0.43945 -0.43946,-0.36524 -0.36328,-0.58593 -0.43945,-0.21875 -0.36328,-0.43946 -0.43946,-0.73047 -0.29101,-0.36718 -0.36524,-0.21875 -0.58593,-0.43946 -0.36524,-0.4375 -0.36523,-0.36718 -0.21875,-0.58399 -0.36719,-0.43945 -0.36524,-0.21875 -0.14453,-0.36719 -0.36718,-0.21875 -0.4375,-0.36523 -0.58399,-0.14649 -0.58398,-0.14648 -1.09961,0.0723 -0.58203,0.14649 -0.22071,0.36523 -0.43945,0.58594 -0.21875,0.80469 -0.14453,0.6582 -0.14648,0.58594 v 0.87695 l -0.22071,0.4375 v 0.21875 l -0.21679,0.87695 -0.14844,0.58594 v 0.36524 l -0.14453,0.43945 -0.14649,0.58398 v 0.65821 0.8789 0.36524 l -0.14648,0.95117 -0.14649,1.16992 -0.14453,0.73047 v 0.58594 l 0.21875,0.6582 0.50977,1.46094 v 0.66016 l 0.14844,0.73046 v 0.87696 0.58593 0.87696 l 0.0723,0.58398 0.14453,0.73242 v 1.09766 l 0.0742,0.36523 0.21875,0.73047 0.0742,0.22071 -0.29297,0.80273 -0.21875,0.73242 v 0.58399 l -0.2207,0.36523 -0.4375,0.58594 -0.65821,0.21875 h -1.02343 -1.09766 l -0.58203,-0.36524 -0.43945,-0.21875 -0.58594,-0.29296 -0.80469,-0.43946 -0.58398,-0.36523 -1.09571,-0.4375 -0.51172,-0.2207 -0.4375,-0.14649 -1.09765,-0.36523 -0.51367,-0.4375 -0.4375,-0.29297 -0.51172,-0.51172 -1.02149,-0.36524 -0.8789,-0.43945 h -0.73047 l -0.87695,-0.0742 -0.80469,-0.21875 -0.58399,-0.0723 -1.46289,-0.43946 -0.87695,-0.14648 h -1.24219 -1.16992 -1.0957 l -1.02344,0.0742 -0.6582,0.14648 -1.02149,0.14453 -1.09765,0.14649 h -1.16797 l -0.58594,0.29297 -1.01953,0.21875 -0.73242,0.14648 -0.80469,0.29102 -0.58399,0.14648 -0.36523,0.21875 h -0.87695 l -0.80469,0.2207 -0.58398,0.14649 -1.24219,0.29101 -0.80274,0.14649 -0.58593,0.29297 -0.43946,0.14648 -0.51172,0.29102 -0.58398,0.0742 -0.80469,0.21875 -0.36523,0.14648 -0.58399,0.21875 h -0.58398 l -0.80469,0.51172 -0.29297,0.14648 -1.02148,0.29297 H 301.286 l -0.43945,0.21875 -1.38672,0.4375 -0.58398,0.14649 -0.51172,0.21875 -0.36524,0.21875 -0.43945,0.0742 -0.4375,0.14648 -0.6582,0.51172 -0.375,0.23633 0.0762,0.13476 v 0.80469 l -0.14649,0.36719 -0.14648,0.73047 v 0.58593 l 0.14648,0.80274 0.0723,0.58594 v 0.58398 l -0.14649,0.58594 -0.0723,0.58398 v 0.51172 l 0.14648,0.66016 0.14649,0.43945 v 0.58398 l 0.21875,0.43946 v 0.36523 l 0.14453,0.58594 -0.0723,0.6582 v 0.58399 0.36718 0.87696 l 0.14649,0.58398 0.0723,0.58594 0.0742,0.6582 v 0.65821 l -0.14648,0.58593 -0.36719,1.09571 -0.14453,0.58593 -0.58594,1.02344 -0.4375,0.87695 -0.0742,0.29297 -0.36328,0.21875 -0.36523,0.66016 -0.36719,0.4375 -0.36524,0.73047 -0.4375,0.58594 -0.50976,1.38867 -0.29297,0.21875 -0.2207,0.43945 -0.14453,0.58398 v 0.14649 l -0.58399,0.87891 -0.36719,0.29101 -0.65625,0.51367 -0.36718,0.80469 -0.29102,0.87695 -0.14648,0.65821 v 0.6582 0.58594 0.58398 1.09766 l -0.14649,0.36523 v 0.95117 0.58399 l -0.14648,0.80469 -0.14453,1.09765 -0.58594,0.58399 -0.29297,0.4414 -0.36328,0.4375 -0.2207,0.36524 -0.58399,0.6582 -0.58594,0.36719 -0.21875,0.73047 -0.51171,0.58398 -0.51172,0.2207 -0.58399,0.4375 -0.58594,0.66016 -0.50976,0.51172 -0.73047,0.58398 -0.51172,0.43946 -0.51172,0.4375 -0.36523,0.36523 -0.4375,0.58594 -0.58399,0.4375 -0.2207,0.36719 -0.4375,0.36328 -0.45703,0.68554 0.44531,-0.0273 0.51172,0.14649 0.36524,0.51171 0.4375,0.58594 0.87695,0.58399 0.36719,0.58593 0.65625,0.58399 0.36718,0.43945 0.94922,0.73047 2.41211,1.16992 0.36524,0.36719 1.16797,0.36523 2.04687,0.0723 1.16797,0.14648 h 0.51367 l 0.65625,0.58399 0.87695,0.51367 0.80469,0.36523 0.65625,0.58399 0.73047,0.36719 0.58398,0.58398 0.58594,0.36523 0.29102,0.43946 0.80468,0.4375 0.51172,0.6582 0.36524,0.29297 0.29101,0.2207 0.29297,0.36328 0.51172,0.36524 0.36524,0.36719 0.36523,0.29296 1.02344,0.4375 0.51172,0.0742 0.6582,0.29297 0.58594,0.4375 1.31445,0.6582 0.29297,0.14649 1.0957,0.29297 0.58399,0.21875 0.51172,0.14648 1.04101,0.59375 0.58399,0.36524 0.36523,0.43945 0.43945,0.58594 0.36524,0.36523 0.87695,0.58594 v 0.36328 l 0.36523,0.51367 v 0.58594 l -0.36523,0.80469 -0.0723,0.36328 -0.36718,0.66016 -0.0723,0.51171 -0.36523,0.4375 -0.36524,0.43946 -0.36328,0.4375 -0.36719,0.58398 -0.29101,0.51367 -0.29297,0.36524 -0.21875,0.36523 -0.43945,0.65821 -0.4375,1.09765 -0.51172,0.51172 -0.21875,0.58594 -0.51172,0.6582 -0.0742,0.73047 -0.14648,0.58594 -0.0723,0.29101 0.0723,0.58789 0.58593,0.51172 0.21875,0.36524 1.09571,0.14648 1.02539,-0.0742 0.58398,0.36719 0.51172,0.21875 0.875,0.36719 0.87891,0.29101 0.36523,0.0723 0.4375,0.14844 h 0.51172 l 1.53516,-0.0742 h 0.36523 l 0.58398,-0.14649 h 1.02344 l 0.95117,-0.0723 0.94727,-0.51172 0.58594,-0.0742 0.875,-0.21875 0.22265,-0.36719 0.65625,-0.21875 0.65821,-0.14648 1.02343,0.29297 0.58203,0.43945 0.51368,0.4375 0.29101,0.29297 0.36524,0.29297 1.02343,0.36523 0.73243,0.58594 0.4375,0.14453 1.38671,0.66016 0.51368,0.4375 0.87695,0.51171 0.43945,0.36524 0.51172,0.36719 0.58594,0.6582 0.21875,0.58398 0.14453,0.73047 v 0.80664 l 0.0742,0.58594 0.0723,0.72852 0.14649,0.29297 0.36523,0.29296 0.4375,0.43946 0.36524,0.36523 0.36523,0.4375 0.4375,0.36719 0.36524,0.80469 0.2207,0.36523 -0.0684,0.2168 h 0.94531 l 0.58399,0.29297 0.51367,0.22265 0.51172,0.14453 0.80469,0.0742 0.58398,0.29297 0.29102,0.58399 0.29492,0.51367 0.14453,0.51172 0.14648,0.4375 0.0742,0.29297 -0.0742,0.29296 v 0.21875 l -0.0723,0.36719 v 0.29297 l 0.0723,0.2168 0.14649,0.36719 0.14453,0.51171 0.0742,0.58594 -0.0742,0.51172 v 0.36523 0.51172 l 0.0742,0.29297 0.28906,0.14649 0.73242,-0.21875 0.21875,-0.0723 0.65821,-0.0742 h 0.95117 0.94922 l 0.51171,0.36524 0.73047,0.29101 1.02344,0.0742 0.51172,-0.14648 0.72851,-0.29297 0.58399,-0.21875 0.36523,-0.29297 0.51172,-0.2207 0.80469,0.0742 0.95313,0.0742 0.4375,-0.0742 h 1.02343 l 0.65625,-0.14648 1.24219,-0.36719 h 0.2207 l 0.51172,-0.29101 0.80469,-0.43946 0.36523,-0.0723 0.80274,-0.21875 0.43945,-0.0742 0.58399,-0.14453 0.58593,-0.36719 0.14453,-0.2168 1.09766,-0.29296 0.36523,0.21874 0.21876,0.14454 0.51367,-0.14454 0.36523,-0.29296 0.2168,0.21875 h 0.29297 l 0.73242,0.0742 0.80273,0.0742 1.60742,0.14454 0.95118,0.0723 0.6582,0.14844 1.01953,0.21875 h 0.73047 l 0.58594,-0.0723 0.36523,0.58399 0.36524,0.21875 0.21875,0.58593 0.29296,0.29297 0.29297,0.36524 0.4375,0.43945 0.14649,0.2207 0.21875,0.4375 0.0742,0.4375 0.0723,0.51172 0.21875,0.58594 0.14649,0.58398 0.21875,0.43946 0.0723,0.36523 c 0,0 -0.0907,0.12531 -0.0918,0.12696 l 0.82421,0.0977 0.94922,0.0742 0.36719,-0.22266 0.87695,-0.0703 0.6543,-0.14648 0.6582,-0.22071 0.65821,-0.21875 0.51172,-0.14843 0.73046,-0.0723 h 0.51368 0.65625 0.80273 l 0.6582,-0.21875 1.09766,-0.14648 0.65625,-0.0723 h 1.02344 l 0.73242,-0.14648 0.72852,-0.22071 0.73242,-0.21875 1.02343,-0.0723 0.80274,-0.14649 h 0.80469 l 1.31445,-0.14648 0.87695,-0.14649 0.51367,-0.36523 0.58399,-0.36523 0.36523,-0.58594 0.14453,-0.58594 v -0.58398 l -0.0723,-0.87696 v -0.73242 -0.73047 l 0.29297,-0.58398 0.65625,-0.51367 0.2207,-0.51368 -0.29297,-0.80273 -0.73047,-0.0742 -0.58398,-0.73047 -0.58399,-0.14648 -1.16992,-0.51367 -0.8789,-0.36329 -0.72852,-0.51367 -0.80469,-0.36523 -0.29297,-0.51367 0.14649,-0.65625 0.36523,-0.58594 0.22071,-0.73242 0.36328,-0.50977 0.51172,-0.29492 0.51172,-0.73047 0.29296,-0.65625 0.80469,-0.6582 0.36328,-0.65821 v -0.73046 l -0.875,-0.51563 -0.51367,-0.50976 -0.87695,-0.22071 -0.65625,-0.36328 -0.51172,-0.51562 -0.58399,-0.2168 -0.51171,-0.29492 -0.58399,-0.21875 -0.36719,-0.51172 -0.73046,-0.51367 -1.3125,-0.73047 -0.87891,-0.51172 -0.36524,-0.51172 -0.6582,-0.29297 -1.16992,-0.36719 -0.94922,-0.2207 -1.0957,-0.0723 -0.94922,-0.0703 -0.66016,-0.0742 -0.50976,-0.14648 -0.0742,-0.21875 -0.14453,-0.73242 -0.22266,-0.58399 -0.0703,-0.80468 -0.0742,-0.73047 -0.29102,-0.80664 0.14453,-0.80469 -0.0723,-0.80469 -0.2207,-0.58594 -0.21875,-0.8789 v -0.80469 -0.87695 -0.29297 -0.51172 -1.02344 l -0.14453,-0.51172 -0.14649,-0.51171 -0.0723,-0.80665 -0.2207,-0.6582 -0.0723,-0.87695 -0.21875,-0.73047 0.0723,-0.80469 0.14453,-0.6582 0.29297,-0.29297 0.65821,-0.36523 0.73046,-0.36719 h 0.72852 l 0.58594,0.36719 0.36718,0.14453 0.65625,-0.22071 0.29297,-0.87695 0.80274,-0.51172 0.36523,-0.87695 0.65821,-0.58594 0.6582,-0.6582 0.36523,-0.36524 0.73047,-0.2207 0.87695,0.29297 0.72852,0.36719 0.73242,0.21875 0.875,0.29101 0.73242,0.66016 0.65625,0.21875 0.80469,0.2207 0.95117,0.21875 0.51172,0.2207 0.80274,0.50977 1.02343,0.51367 h 0.87696 l 0.95117,-0.80468 0.29101,-0.65821 0.29297,-0.58594 0.51172,-0.65625 0.94922,-0.51367 0.80469,-0.51172 1.31445,-0.29297 0.6582,-0.14648 1.09766,-0.36523 0.94922,-0.58399 0.36523,-0.6582 0.72852,-0.51367 0.29297,-0.94922 -0.0703,-0.65821 -0.21289,-0.50976 -1.60743,-0.0742 -0.58398,0.21875 h -1.31641 l -1.02148,-0.14453 -0.87891,-0.22266 -0.94922,-0.14453 -0.6582,0.0742 -0.36328,-0.51367 -0.36524,-0.80469 -0.36523,-0.73242 -0.58594,-0.29102 -0.87695,-0.95117 -1.0957,-0.6582 -0.51368,-0.6582 -0.94726,-0.0742 -0.51367,-0.21875 -0.21875,-0.58399 -0.22071,-0.80468 -0.14648,-0.95118 -0.14453,-0.80468 -0.58594,-0.14649 -1.24219,-0.14648 -0.36523,0.0742 -0.72852,0.51171 -0.58789,0.36524 -0.50976,0.0742 h -1.46289 l -1.16993,0.0723 -0.94921,-0.21875 h -1.75391 l -0.80469,-0.0723 -0.65625,-0.21875 -0.51172,-0.14649 -0.0742,-0.29297 0.21875,-0.58398 0.51563,-0.36719 0.58398,-0.87695 0.51172,-0.36524 0.65625,-0.58593 0.58594,-1.09571 0.58398,-0.36718 0.6543,-1.09571 0.66016,-0.66015 1.02148,-0.87696 0.65821,-0.80468 0.6582,-0.95118 0.29297,-0.58398 0.50976,-0.51172 0.29297,-0.58594 1.02344,-0.6582 0.29297,-0.8789 0.29297,-0.65821 0.58398,-0.36523 0.80469,-0.36719 0.73047,-0.6582 0.51172,-0.29102 0.94921,-0.29297 0.73243,-0.36523 1.3125,-0.87695 0.29296,-0.36524 0.80665,-0.36719 1.16796,-0.58398 0.65821,-0.36524 0.65625,-0.36718 0.58398,-0.29297 0.51367,-0.65625 0.29102,-0.73242 0.0723,-0.51172 0.36524,-1.24414 0.51172,-0.80274 v -0.95312 -0.65821 l -0.29297,-0.6582 -0.21875,-0.73047 0.21875,-0.80469 v -0.8789 l -0.21875,-0.80274 -0.0742,-0.58593 -0.14453,-0.80469 -0.29102,-1.02344 v -0.66015 l 0.21875,-0.87696 0.0723,-0.80469 v -0.73242 l 0.0742,-0.51172 0.29297,-1.16992 -0.0723,-0.95117 v -0.36523 -0.94922 l 0.21875,-0.65821 0.58399,-0.29296 0.36523,-0.36719 0.58398,-0.21875 0.29297,-0.80469 0.29297,-0.36523 0.58399,-0.73243 0.58398,-0.36523 0.51367,-0.51367 0.14453,-0.51172 0.29297,-0.58398 0.21875,-0.65821 -0.14453,-0.58594 -0.29297,-1.46289 v -0.51172 -0.6582 -0.51172 l -0.29101,-0.6582 -0.0723,-1.02344 v -0.73242 -1.02344 l -0.14648,-0.29297 -0.0762,-0.95507 v -0.29102 -0.73242 -0.6582 l -0.22071,-0.80469 -0.29297,-0.80469 -0.21875,-0.66016 -0.0723,-0.51171 v -1.02344 -0.36719 -1.02344 -0.58398 l -0.22071,-0.87891 -0.21875,-0.87695 -0.2207,-0.95117 -0.14453,-0.51172 0.0723,-1.09766 -0.22071,-0.36523 -0.14453,-0.95117 0.0742,-0.87696 -0.14648,-0.58398 0.0723,-0.36719 -0.21875,-1.53516 v -0.36718 -0.51172 -0.73047 l -0.14648,-0.6582 -0.51172,-0.73047 -0.0723,-0.73242 v -0.36524 -0.29297 -0.51172 l 0.0723,-0.6582 v -0.51172 -0.51172 l -0.29297,-0.80468 -0.2168,-0.65821 -0.14648,-0.66015 -0.0742,-0.94922 v -0.58594 l -0.21875,-1.02344 0.0742,-0.6582 -0.2207,-0.6582 -0.0742,-0.65821 v -0.95117 -0.73047 l -0.21875,-0.80468 -0.29102,-0.51172 -0.51367,-0.36719 -0.51172,-0.51172 -0.51172,-0.36523 -0.51172,-0.29297 -0.51172,-0.73047 -0.58398,-0.36524 -0.36524,-0.36718 -0.95117,-0.14453 h -0.95117 l -1.60742,-0.22071 h -0.72852 l -1.02343,-0.21875 -1.31446,-0.14648 -0.36523,-0.36524 0.0742,-0.87695 -0.22071,-0.95117 -0.14648,-0.29297 -0.14648,-0.80469 -0.21875,-0.80469 -0.29297,-0.87695 -0.14453,-1.16992 -0.29297,-0.66016 v -0.65625 l -0.0742,-0.51367 -0.36524,-0.58398 -0.14648,-0.80469 v -0.80469 l -0.14453,-0.87695 0.0723,-0.87891 0.36524,-0.21875 v -0.8789 l 0.29297,-0.73047 0.0742,-0.87695 0.21875,-1.09766 0.14453,-0.80469 c 0.0939,-0.18837 0.37675,-0.35332 0.61133,-0.51758 z",
    PH11: "m 394.04022,169.57917 c -0.55208,-0.0414 -1.12716,-0.0723 -1.67383,-0.11523 l -0.68164,0.55468 -0.65625,0.29297 -0.51367,0.87696 -0.65625,0.66015 -0.14649,0.65821 -0.87695,0.6582 -0.14648,0.58398 -0.65821,0.58594 -0.72851,0.51172 -0.65821,0.51172 -0.73047,0.36718 -0.58398,0.73047 -0.73047,0.65821 -0.51172,0.80468 -0.2207,0.73243 -0.21875,0.58398 -0.4375,0.73242 -0.0723,0.58399 -0.2207,0.8789 -0.14648,0.80469 -0.0742,0.6582 -0.14453,0.87696 -0.22071,0.73047 -0.0723,0.43945 -0.43946,1.24219 -0.14453,0.58593 -0.43945,0.95118 -0.14648,0.6582 -0.58399,0.0723 -0.58594,-0.21875 -0.14453,-0.29296 -0.4375,-0.43946 -0.43945,-0.36328 -0.58594,-0.29297 -0.36328,-0.29297 -0.2207,-0.51172 -0.14453,-0.36523 -0.14844,-0.36719 -0.28906,-0.6582 -0.14844,-0.43945 -0.14649,-0.4375 v -0.58594 -0.73047 l -0.0723,-0.87891 -0.95117,-0.36523 -0.4375,0.14648 -0.65821,0.58399 -1.02148,0.58594 -0.29102,0.36523 -0.66015,0.58594 -0.65625,0.80469 -0.58594,0.95117 -0.0703,0.14648 -0.73242,1.31446 -0.29297,0.8789 -0.29102,0.73047 -0.36523,0.80469 -0.36719,0.80468 -0.21875,0.58399 -0.36523,0.66016 -0.29102,0.36523 -0.14648,0.29297 -0.36524,0.73047 -0.21875,0.36523 -0.36523,0.87695 -0.58399,0.58594 -0.36523,0.58399 -0.21875,0.8789 -0.14649,0.4375 -0.36523,0.58594 -0.58594,0.80469 -0.36523,0.58398 -0.21875,0.80664 -0.36524,0.51172 -0.36523,0.21875 -0.2207,0.65821 -0.0723,1.02343 -0.29297,0.58594 -0.21875,0.6582 -0.36523,0.80469 -0.22071,0.87695 -0.0723,0.21875 -0.29102,0.43946 -0.43945,0.58593 -0.6543,0.51172 -0.29297,0.36524 -0.29492,0.51172 -0.58398,0.14648 -0.65821,0.29297 -0.58203,0.80469 -0.87695,1.02343 -0.51367,0.36524 -0.87696,0.73242 -0.36718,0.29102 -0.36328,0.58593 -0.36524,1.09766 -0.58398,0.87695 -0.14649,0.43946 -0.51172,0.95117 -0.36523,0.51172 -0.80273,0.4375 -0.43946,-0.0723 -0.14648,-0.0742 -0.875,-0.14648 -0.73047,-0.0723 -1.02539,-0.36523 -0.43946,-0.36719 -1.09374,-0.51172 -0.4375,-0.29297 -0.87891,-0.36523 -0.875,-0.4375 -0.58789,-0.2207 -0.80274,-0.21875 -1.24218,-0.36524 -0.51368,-0.0742 -0.875,-0.29101 -0.87695,-0.43946 -0.58789,-0.0723 -0.6543,-0.21875 -0.36523,0.21875 -0.14649,0.36523 0.36524,1.09766 0.2207,0.58398 0.21875,0.14649 0.36328,0.43945 0.58789,0.87695 0.4375,0.65821 0.0723,0.80664 0.2207,0.36523 0.29102,0.73047 0.29297,0.51172 0.14648,0.29297 0.51172,0.73242 0.21875,0.36523 0.51172,1.09766 0.14648,0.36524 0.21875,0.58593 0.36524,0.36328 0.14844,0.43946 0.36328,0.43945 0.4375,0.87695 0.21875,1.09766 v 1.31641 l -0.0723,0.73046 v 0.51172 l -0.0723,0.43946 v 0.58593 l 0.0723,0.36524 -0.0723,0.6582 v 0.6582 l 0.14453,0.51172 v 0.58594 0.87695 l -0.21875,0.65821 -0.14649,0.8789 v 0.58399 l -0.21875,0.58594 -0.2207,0.4375 -0.4375,0.95117 -0.29297,0.6582 -0.21875,0.51172 -0.29297,0.36719 -0.21875,0.6582 -0.0723,0.51172 -0.22071,0.51172 -0.36523,0.73047 -0.29297,0.58593 -0.14453,0.4375 -0.22266,0.43946 -0.14453,0.29296 -0.2207,0.51172 -0.21875,0.43946 -0.14649,0.58398 -0.29101,0.73047 -0.51172,0.73242 -0.14844,0.4375 -0.58203,0.87695 -0.29297,0.66016 -0.29492,0.58399 -0.4375,0.87695 -0.14453,0.43945 -0.36524,0.58399 -0.0742,0.36718 -0.36329,0.58399 -0.2207,0.51172 -0.36719,0.29297 -0.14453,0.29101 -0.36719,0.66016 v 0.36523 l -0.0703,0.43946 -0.29297,0.51171 -0.87695,0.36524 -0.43945,0.43945 -0.58594,1.24414 -0.36328,0.87696 -0.36328,0.14648 -0.22266,0.4375 -0.14453,0.51172 v 0.87695 l 0.21875,0.87891 0.0742,0.58398 v 0.43946 l 0.0742,0.58398 v 0.80469 0.73047 0.73242 l -0.22266,0.95117 -0.0703,0.29101 -0.29492,0.58594 -0.29102,0.21875 -0.80469,0.95117 -0.36523,0.0723 -0.87695,0.58594 -1.09766,0.36523 -0.58398,0.58594 -0.29297,0.14453 -0.72852,0.36719 -0.44141,0.36523 -0.14453,0.4375 0.21875,0.36719 0.14649,0.29297 -0.22071,0.6582 -0.36328,0.36524 v 0.58593 l 0.14454,0.14454 0.14648,0.43945 0.14648,0.73242 v 0.51172 l -0.29296,0.51172 0.14453,0.58593 v 0.36524 l 0.14648,0.36523 0.2207,0.43946 -0.14648,0.58398 -0.2207,0.29102 -0.29102,0.36718 0.14649,0.29102 0.51367,0.51172 0.50976,0.51172 0.51172,0.29297 0.43945,0.58593 0.36524,0.21875 0.21875,0.29297 0.29297,0.36524 0.73047,0.36523 v 0.58399 l -0.14649,0.58593 -0.0723,0.65821 -0.51172,0.51171 -0.36719,0.43946 -0.4375,0.95117 0.14453,0.4375 0.58594,0.43945 0.58398,1.09766 0.87696,0.58398 0.87695,0.36719 0.73047,0.4375 0.80469,0.87891 0.65625,0.29297 0.25976,0.65039 0.1836,-0.30274 0.51171,-0.36523 0.36524,-0.36719 0.4375,-0.14453 0.65625,-0.58594 0.51172,-0.58398 0.36523,-0.43946 0.87891,-0.51171 0.36523,-0.29102 0.14649,-0.51172 0.29101,-0.36719 0.58399,-0.58398 0.29296,-0.43945 0.36524,-0.36524 0.14648,-0.43945 0.21875,-0.58399 0.14453,-0.36718 v -0.51172 -0.51172 -0.4375 -0.58594 l 0.0723,-0.51172 v -0.6582 -0.36523 l 0.0723,-0.51172 0.0742,-0.80469 0.29296,-0.51172 0.36524,0.14648 0.6582,0.36524 0.51172,0.36523 0.36523,0.73243 0.36524,0.36523 0.36719,0.36719 0.58203,0.36523 0.36523,0.36524 0.58594,0.36523 0.36328,0.36719 0.36719,0.36523 0.36133,0.4375 0.36718,0.36719 0.4375,0.14453 0.58594,0.14844 0.29297,-0.14844 0.29102,-0.21875 0.29296,-0.21875 0.36524,-0.21875 0.36719,-0.0742 0.4375,-0.14648 0.29101,-0.21875 0.87891,-0.36524 0.58398,-0.14453 0.87891,-0.2207 0.4375,0.14648 0.58594,0.22071 0.6582,0.36523 0.4375,0.36524 0.43945,0.80468 0.36524,0.21875 0.4375,0.14844 0.58398,-0.0742 0.73047,0.21875 1.09766,0.14649 0.58593,0.0742 h 0.58399 1.0957 0.36524 l 0.58398,0.0723 h 0.73242 l 0.58399,0.0742 0.87695,0.14648 0.6582,0.14454 0.4375,0.14648 0.73242,0.14648 0.36524,0.14649 0.72851,0.14648 0.29297,0.14649 0.50977,0.4375 0.36719,0.14648 0.51171,0.21875 0.65626,-0.0742 0.36523,0.14844 0.73047,0.21875 0.58594,0.0742 0.58398,0.21875 0.58594,0.36523 0.29101,0.4375 0.51172,0.22071 h 0.73047 l 0.29297,-0.36524 0.14648,-0.29297 0.29297,-0.14648 h 0.36524 l 0.36328,0.14648 h 0.65625 l 0.29297,-0.14648 0.36523,-0.14649 0.36719,-0.14648 0.80273,-0.21875 0.87696,-0.29297 0.87695,-0.0742 1.0957,-0.14453 0.65821,-0.14648 0.36523,-0.14649 0.58398,-0.21875 0.36719,-0.0723 0.29102,-0.0742 0.61719,0.35937 c 0.13028,-0.0912 0.15701,-0.15606 0.33984,-0.28711 l 0.65625,-0.36523 0.36523,-0.29297 0.36524,-0.36523 0.6582,-0.29297 0.6582,-0.21875 0.51172,-0.14649 0.65821,-0.36523 0.36328,-0.36524 0.43945,-0.58593 0.14648,-0.51172 0.14454,-0.58594 0.0723,-0.87695 -0.0723,-0.21875 -0.14454,-0.4375 v -0.87891 -0.51172 l -0.0742,-0.87695 -0.14649,-0.51172 -0.0703,-0.95117 v -0.36719 l -0.0742,-0.58398 0.0742,-0.65821 0.14453,-0.36523 0.29102,-0.6582 0.14648,-0.87696 -0.0742,-0.51367 -0.0723,-0.87695 v -0.51172 l 0.29296,-0.4375 0.14649,-0.58594 -0.14649,-0.58398 v -0.65821 -0.6582 -0.58594 -1.02343 l 0.22071,-0.95118 0.0723,-0.58593 0.21875,-0.87696 0.36524,-0.4375 v -0.36718 -0.58399 -0.95312 l 0.50976,-0.4375 0.0762,-0.58399 0.14648,-0.58593 0.36328,-0.36524 0.58398,-0.21875 h 1.09766 0.80274 1.02343 l 0.51367,0.0723 0.875,-0.0723 h 1.16993 l 1.0957,0.0723 0.95117,-0.0723 1.02344,0.14649 0.65625,-0.14649 0.29297,-0.36523 0.14648,-0.73243 -0.14648,-0.29296 v -0.36524 l 0.29297,-0.58594 0.29101,-0.58398 0.0723,-0.4375 0.29492,-0.58594 0.29102,-0.6582 0.51171,-0.87695 0.51172,-0.51172 v -0.65821 l 0.58399,-0.29297 0.58593,-0.51171 0.36524,-0.51368 0.36523,-0.36523 0.36524,-0.36523 0.51172,-0.14649 0.58398,-0.36719 0.6582,-0.29297 0.73047,-0.14453 0.51368,0.0723 h 0.72851 l 0.36523,0.2207 0.43946,0.14453 0.58398,0.0742 0.36719,0.14649 0.51172,0.58398 0.4375,0.29297 0.36523,0.36523 0.58594,0.29297 0.58398,0.14649 0.65626,0.21875 0.58593,0.29297 0.51172,0.29101 0.29297,0.43945 0.36523,0.66016 0.36524,0.51172 0.4375,0.36523 0.87695,0.14649 0.6582,-0.14649 h 0.58399 l 0.58594,-0.14648 0.65625,-0.14453 0.36523,-0.14649 0.58594,-0.14648 0.29297,-0.14648 0.36328,-0.14454 0.80469,-0.29296 h 0.29297 l 0.58398,-0.14649 0.43945,-0.14648 0.14453,-0.36524 0.21875,-0.36523 0.36524,-0.58594 0.43945,-0.21875 0.58594,0.14648 1.31445,0.36524 0.58203,0.14648 0.66016,0.43946 0.36328,0.21875 0.43945,0.14648 0.43946,0.36524 0.58398,0.14648 0.36719,0.14648 0.36133,0.14454 0.43945,0.2207 0.58398,0.29297 1.16993,0.36523 0.51171,0.14649 0.36524,0.21875 0.36523,0.14648 0.36524,0.14453 0.58398,0.36719 0.65821,0.29101 0.73046,0.22071 0.43946,0.29101 0.87695,0.14649 h 0.51172 v -0.65821 -0.43945 -0.80469 l -0.14649,-0.58398 -0.36523,-0.87695 -0.14648,-0.80469 -0.14453,-0.43945 -0.36524,-0.58594 -0.21875,-0.58399 -0.22266,-0.73242 v -0.58398 -0.6582 l 0.14844,-0.58399 0.14453,-0.58594 -0.0703,-0.58398 v -0.51367 l -0.14648,-0.36524 v -0.58594 l -0.0742,-0.65624 v -0.80665 l -0.14453,-0.4375 v -0.87695 l -0.0742,-0.51367 0.0742,-0.36523 0.14453,-0.29102 0.0742,-0.36719 0.14648,-0.29297 0.14453,-0.36523 0.14649,-0.51172 -0.14649,-0.36523 -0.14453,-0.36719 v -0.29102 l 0.14453,-0.29297 0.14649,-0.29296 0.29101,-0.4375 v -0.65821 -0.80664 l 0.0742,-0.94922 v -0.36719 -0.51171 -0.43946 l 0.21875,-0.6582 0.14649,-0.58398 0.14648,-0.51172 0.14453,-0.29297 0.0742,-0.58399 0.29101,-0.8789 0.0742,-0.87696 v -1.03906 l 0.14454,-0.87695 v -1.02539 l 0.36523,-0.95117 0.0723,-0.21875 0.14648,-0.65821 v -0.87695 l 0.51172,-0.58594 0.43945,-0.58398 0.29102,-0.73047 0.14453,-0.87695 v -0.95313 l 0.51367,-0.87695 0.21875,-0.43945 0.0742,-0.58399 0.14453,-0.51172 0.14648,-0.29297 0.51172,-0.21875 0.58594,-0.36523 0.73047,-0.2207 1.02148,-0.21875 1.09571,-0.0742 0.73242,-0.21875 0.94922,-0.29297 0.36328,-0.4375 0.14648,-1.09766 0.14844,-0.58594 0.0703,-0.51171 0.22071,-0.95118 0.14453,-1.3164 v -0.87696 l 0.21875,-0.51171 0.29297,-0.66016 0.14648,-0.58399 0.14648,-0.4375 v -0.58593 l -0.36523,-0.80469 -0.36523,-0.43945 -0.50977,-0.43946 -0.36523,-0.58398 -0.29297,-0.36523 -0.58399,-0.87696 -0.36523,-0.43945 -0.29492,-0.51172 -0.36524,-0.58594 -0.36523,-0.36523 -0.36524,-0.58399 -0.21875,-0.51367 -0.42773,-0.88086 -0.29297,-0.58594 -0.29297,-0.73046 -0.36523,-0.51172 -0.36328,-0.43946 -0.58399,-0.6582 -0.29297,-0.29297 -0.0742,-0.36523 -0.2207,-0.80469 -0.36328,-0.4375 -0.36523,-0.36719 -0.36524,-0.36523 v -0.58594 l -0.14648,-0.36523 v -0.65821 -0.8789 l 0.4375,-0.80469 0.14843,-0.58398 -0.0742,-0.87696 v -0.36718 -0.36524 l 0.0742,-0.36523 -0.29492,-0.95118 -0.58398,-0.73046 -0.73047,-0.65821 -0.87695,-0.29297 -0.94922,-0.29297 -0.87696,-0.4375 -0.58593,-0.43945 -0.58399,-0.36523 -1.24219,-0.36524 -0.80468,-0.36718 -0.65625,-0.14649 -0.87891,-0.65625 -0.58398,0.0723 -0.87696,0.2207 -0.50976,0.51172 -0.29297,0.29101 -0.29297,0.22071 -0.36523,0.6582 -0.0742,0.43945 -0.0703,0.36328 -0.14649,0.51368 -0.0723,0.73047 0.14649,0.51171 -0.0742,0.36524 -0.36523,0.6582 -0.51172,0.29297 -0.65625,0.36719 -0.14844,0.21875 -0.73047,0.36523 -0.72851,0.21875 -0.73047,0.14649 -0.73047,-0.21875 -0.73242,-0.65821 -0.58399,-0.2207 -0.36523,-0.21875 -0.51367,-0.36523 -0.14258,-0.51172 -0.44141,-0.58399 -0.80273,-0.80468 -0.58399,-0.51368 -0.14648,-0.29101 -0.14453,-0.58399 -0.14649,-0.43945 0.14649,-0.73047 v -0.51172 -0.36718 l -0.14649,-0.73047 -0.14453,-0.51172 -0.14648,-0.58594 -0.36719,-0.21875 -0.36523,-0.51172 -0.58399,-0.36523 -0.51172,-0.36719 -0.29101,-0.87695 -0.0742,-0.73047 -0.87891,-0.43945 -0.72851,0.14648 -0.65821,0.21875 -0.51172,0.14648 h -0.36523 l -0.58594,-0.14648 -0.4375,-0.21875 -0.36523,-0.58398 -0.14649,-0.51368 -0.14648,-0.58398 -0.36524,-0.58399 -0.36523,-0.43945 -0.58398,-0.14648 -1.09571,0.0742 -0.4414,0.36523 -0.50977,0.95117 -0.14453,0.36524 -0.36524,0.87695 -0.43945,0.43945 -0.87695,0.58594 -0.58594,0.0723 -0.87695,0.14648 -0.29297,-0.29297 -0.4375,-0.29297 -0.80469,-0.4375 h -0.58398 l -0.58399,0.4375 -0.14648,0.51367 -0.29297,0.87696 v 0.51367 l -0.21861,0.58386 -0.14648,0.80469 -0.58399,0.73242 -0.58594,0.14453 h -0.80468 l -0.36329,-0.14453 -0.73242,-0.36718 -0.50976,-0.58399 -0.0742,-0.29297 v -0.73047 l 0.22266,-0.51171 -0.0742,-0.87891 v -0.80469 l 0.14453,-0.94922 0.2207,-0.51367 -0.51367,-0.51172 -0.58399,-0.36523 -0.36328,-0.51367 -0.29492,-0.58399 -0.87695,-0.36523 -0.21875,-0.14649 -0.87891,-0.36523 -0.65625,-0.58594 -0.14453,-0.29101 -0.36523,-0.51172 -0.36524,-0.36719 z",
    PH12: "m 135.44756,558.71295 1.46388,0.90077 1.46388,0.67557 0.90085,0.90077 1.23866,0.90077 1.46388,1.35116 0.56303,1.01336 6.98158,-0.11259 1.12605,0.67557 0.78825,0.90077 5.96811,-0.11259 v 3.60308 l -0.78823,0.78817 v 1.01337 l -0.78825,0.56298 -1.01345,0.56298 v 1.57634 l -0.56303,1.12597 1.01345,0.56298 -1.01345,0.67557 0.67563,1.80154 0.22522,1.80155 1.23866,0.78817 1.6891,0.45039 2.47733,0.90077 1.46387,1.01336 1.23867,0.56298 1.68909,0.56298 0.45043,0.78818 1.12606,1.91413 0.56302,1.23857 1.23868,1.35115 0.78823,1.35115 1.23868,1.80154 0.56302,1.68895 0.67564,1.68894 0.67563,0.90077 1.35128,0.56298 1.23867,0.45039 1.23866,1.35115 v 19.02876 l -0.67563,0.90077 0.78823,1.01337 0.67564,1.23856 -0.33781,0.90077 -0.33783,1.57635 v 1.46375 l 0.56303,1.35115 1.46388,-0.11259 1.6891,-1.01337 1.9143,0.45039 0.67564,0.78817 1.57648,0.45038 2.02691,0.56299 0.45042,0.90076 1.46388,0.2252 2.02691,1.01336 1.46388,1.46375 1.01345,1.35116 0.90085,1.57635 1.23867,1.01337 -0.11261,1.68893 0.56303,1.01337 0.11261,1.68895 1.80169,0.78817 1.01346,-1.12597 1.35127,0.3378 1.57649,1.23856 0.22521,1.35115 -0.22521,1.23856 -0.45043,1.23856 0.45043,0.22519 1.57648,0.33779 1.12606,1.01336 1.12606,0.67559 -0.45042,1.01336 0.67564,0.90077 -1.12606,0.56298 1.01345,1.01336 -0.11261,4.27866 -1.01345,0.67558 -0.45043,1.57635 v 1.68894 l 0.78825,1.68894 1.01345,1.68895 1.46388,0.67557 1.8017,0.33779 2.0269,0.78818 2.25213,1.01336 1.57648,0.56298 1.46388,0.67558 1.23866,0.45039 0.3378,-0.45039 0.90085,0.1126 1.01348,0.33779 2.13952,0.33778 1.01348,0.56299 0.28149,1.23855 -1.18235,2.02671 -0.56305,1.80156 -0.78823,1.91417 -0.67568,1.57632 -0.56298,2.02671 -0.7883,2.13933 -0.90078,2.02678 v 3.71565 l 0.6756,1.01339 v 4.84159 l 0.56305,1.01339 v 2.58971 l -1.1261,0.56301 -0.90086,0.90077 -0.56298,1.35117 -0.78826,1.23855 -0.78824,1.01332 -0.45042,0.78816 -1.01346,1.68901 -0.78824,0.67555 -0.67564,0.67554 -0.67563,1.35117 -0.78825,1.01339 -0.67563,1.35116 -0.90085,1.46371 -0.45043,0.33785 -0.56303,1.4637 -0.78823,1.57633 -0.90085,0.90077 -0.67564,1.0134 -0.78824,1.35116 -0.67564,1.12594 -0.78824,1.57639 -0.67564,1.23855 -0.67563,1.35117 -0.67564,0.67554 -0.78824,1.01339 -0.11261,0.90078 -0.90084,0.78816 -0.67565,1.68894 -0.67563,1.12593 v 4.27866 l -0.33782,0.67562 -0.45042,0.56293 v 3.6031 l -0.33782,0.56301 0.11261,1.12593 -0.45043,0.45039 0.1126,3.37788 -0.56303,0.67562 0.22522,0.90077 0.22521,0.11254 -0.78824,0.78817 v 1.23862 l -0.67564,1.35109 -0.67563,1.68894 -0.11261,0.78823 -0.45042,0.90078 -0.33782,1.01332 -0.56303,0.90078 -0.33782,1.06966 -0.50673,1.06966 -0.33782,0.78816 -0.73194,0.50674 -0.39412,0.78816 -1.01345,1.01332 -1.12606,1.01339 -0.61482,0.25699 -1.41193,-0.53842 -1.06976,-0.67555 -0.50672,-0.67561 -1.858,-1.29483 -0.61934,-0.67561 -0.67563,-0.50666 -2.08322,-0.67555 -1.85799,-0.563 -1.57649,-0.45039 -0.61933,-0.33778 -0.22521,-0.45038 0.0563,-1.18228 0.61933,-0.67555 0.95715,-0.95712 0.28152,-0.9007 0.33782,-0.90078 0.16891,-1.06966 0.0563,-0.73189 -0.50672,-1.40744 -0.45042,-0.67562 -0.73194,-1.29482 -0.39412,-0.61927 -0.61934,-0.78824 -0.28151,-0.78816 -0.33782,-0.73189 -0.33782,-0.78816 -0.33782,-0.90078 -0.95715,-0.84443 -0.33782,-0.67562 -0.78824,-0.56293 -0.56303,-0.67562 -0.61933,-0.73182 -0.33782,-0.67562 -0.33782,-0.73189 -0.22521,-0.56293 -0.56303,-1.126 v -0.56293 l -0.0563,-0.56301 -0.28151,-0.50673 -1.01345,-0.67555 -2.02691,0.16889 -1.91431,-0.50666 -0.84454,-0.61927 -0.33782,-1.18228 v -1.23855 l -0.22521,-1.18228 -0.33782,-0.78816 0.11261,-0.90078 0.1689,-2.1956 -0.45042,-1.68894 -0.28151,-1.74528 -0.56304,-1.29482 -0.84454,-1.29489 -1.01346,-1.35117 -0.56303,-1.23855 -1.23866,-1.80155 -0.56303,-1.29482 -1.46388,-1.01339 -1.35127,-0.56293 -0.73194,-0.56301 -0.90085,-0.39412 0.16891,-0.73189 0.45042,-1.01331 0.50673,-0.45039 0.11261,-2.30822 -0.39412,-1.57639 -0.16891,-1.18221 0.0563,-1.12601 -0.45042,-1.29482 -0.22522,-0.95704 -0.33782,-1.2949 -0.45042,-1.18228 -0.28152,-0.90077 -1.52017,-0.0563 -0.67564,0.39412 -1.40758,0.16889 -1.35127,-0.28151 -0.33782,-0.8445 0.11261,-2.08298 -0.0563,-1.12601 -0.11261,-2.13933 -0.73194,-0.45039 -1.06976,-0.78816 -0.56303,-0.50666 -0.22521,-1.40743 0.0563,-1.01339 -0.67564,-1.12594 -0.45042,-1.01339 -0.50673,-0.90078 -0.61933,-1.63267 -0.50673,-1.1822 -0.39412,-1.40751 0.11261,-1.12593 0.0563,-1.91417 -0.22521,-1.01332 -0.16891,-1.12601 -0.33782,-1.01332 -1.57649,-0.50673 -1.01345,-0.61928 -1.63278,-0.56293 -1.29497,-0.33784 -1.18237,-0.56293 -0.78824,-0.50674 -1.01346,-0.39404 -1.29497,-0.39412 -1.40757,-0.78816 -1.01345,-1.18228 -0.73194,-0.61927 -1.40758,-1.12594 -1.52018,-1.35116 -0.50673,-0.90078 -0.67564,-0.50666 -1.18235,-0.73189 -1.01346,-1.23855 -1.01345,-0.67562 -1.01346,-1.1822 -0.67564,-0.95712 -0.56303,-1.52006 -0.1126,-1.01331 -0.28152,-1.23855 -0.28151,-1.12601 -0.67564,-1.23855 -0.67564,-1.35117 -0.39412,-0.84443 -0.45042,-0.67562 -0.11261,-0.84443 -0.61933,-0.67562 -0.67564,-1.06966 -0.1126,-0.84444 -0.73194,-0.95712 -0.28151,-0.84443 0.2252,-0.50666 0.16891,-0.78823 0.39412,-0.33778 -0.50672,-0.61927 -0.28151,-0.73189 0.50672,-0.61928 -0.28152,-0.50665 v -0.7319 l 0.39412,-0.563 -0.39412,-0.22516 0.0563,-1.12593 0.1126,-0.61928 0.39412,-0.45038 -0.67563,-0.61928 -0.33782,-0.45039 0.84454,-0.61927 -0.73193,-0.78824 0.67564,-0.78816 -0.39413,-0.84443 0.16891,-0.33785 0.39413,-0.95704 0.0563,-1.29483 v -1.52005 l -0.28151,-1.01339 -0.39412,-0.73189 -0.50673,-0.78816 -0.50672,-1.06966 -0.33783,-0.73189 -0.45042,-0.61928 -0.16891,-0.73189 -0.28152,-0.61927 -0.50672,-0.67555 -0.50673,-0.90078 -0.45043,-0.73189 -0.39411,-1.01332 -0.39412,-1.01339 -0.11261,-0.90078 0.0563,-1.52005 0.0563,-0.563 -0.39412,-0.90078 -0.50673,-1.06966 -0.39412,-1.12593 -0.50673,-0.61928 -0.33782,-0.61927 -0.22521,-1.46378 -0.84455,-0.45039 -0.0563,-1.12594 0.28151,-1.40743 0.33782,-0.73189 1.12606,-0.84451 0.50672,-0.50666 0.50673,-0.22516 0.50673,-0.33784 0.73194,-0.61928 1.18236,-0.45039 0.73194,-1.12593 0.39412,-0.73189 -0.16891,-1.01332 -0.73194,-0.33782 -1.52018,-0.28148 -0.61933,-0.45039 -0.11261,-1.18226 0.45043,-0.90077 0.28151,-0.95707 0.56303,-1.12596 0.50673,-0.78818 1.06976,-0.22518 1.46388,0.16889 1.18236,0.28149 0.90085,0.50668 h 0.78824 l 1.06976,-0.56298 -0.73194,-1.29486 -0.16891,-1.23856 -0.84454,-0.50668 -0.60814,-1.14014 -0.52742,-1.00262 -0.68453,-1.00786 -1.45112,-2.50727 2.43567,-1.25358 1.01067,-1.41482 1.41495,-0.5053 1.92029,-1.2127 0.80854,-0.70741 2.12242,-1.41482 0.50534,-1.01059 1.21281,-1.51588 1.21281,-0.60636 0.80854,-0.40423 0.3032,-0.90953 1.21281,-1.21271 0.70748,-0.50529 0.90961,-0.50529 0.50533,-1.11166 0.80855,-0.70741 0.3032,-0.80847 0.50533,-0.70741 0.80854,-0.90953 0.40427,-1.31376 0.10107,-1.01059 1.21281,-0.90953 0.50534,-1.01058 0.52792,-0.52376 z",
    PH13: "m 132.77819,557.91408 2.82617,0.98633 1.46094,0.87891 1.46289,0.65625 0.875,0.87891 1.24219,0.8789 1.46289,1.31446 0.58398,1.02343 6.94336,-0.14648 1.0957,0.66015 0.80274,0.87696 5.99414,-0.14649 v 3.58399 l -0.80469,0.80468 v 1.02344 l -0.80273,0.58594 -1.02344,0.58594 v 1.60937 l -0.58594,1.09766 1.02344,0.58398 -1.02344,0.65821 0.6582,1.82812 0.21876,1.83008 1.24218,0.80469 1.68164,0.4375 2.48438,0.87695 1.46094,1.02539 1.24414,0.58399 1.67968,0.58593 0.43946,0.80469 1.0957,1.90039 0.58594,1.24414 1.24218,1.31641 0.80274,1.31445 1.24414,1.83008 0.58398,1.68164 0.65821,1.68359 0.6582,0.87891 1.31445,0.58398 1.24219,0.4375 1.24219,1.31641 v 19.01953 l -0.6582,0.87891 0.80468,1.02344 0.65821,1.24218 -0.36719,0.87891 -0.36328,1.60742 v 1.46289 l 0.58398,1.31641 1.46094,-0.14649 1.68164,-1.02343 1.90039,0.43945 0.6582,0.80469 1.60743,0.4375 2.04492,0.58593 0.43945,0.87891 1.46094,0.21875 2.04492,1.02539 1.46094,1.46094 1.02343,1.3164 0.87696,1.60938 1.24219,1.02344 -0.14649,1.68359 0.58594,1.02148 0.14453,1.68555 1.82813,0.80469 1.02343,-1.09766 1.31446,0.36524 1.60742,1.24218 0.2207,1.31641 -0.2207,1.24219 -0.4375,1.24414 0.4375,0.2207 1.60742,0.36524 1.09766,1.02148 1.0957,0.66016 -0.4375,1.02539 0.65625,0.87695 -1.0957,0.58399 1.02343,1.02343 -0.14648,4.24024 -1.02344,0.66015 -0.4375,1.60938 v 1.68164 l 0.80469,1.68164 1.02344,1.68555 1.46093,0.65625 1.82813,0.36523 2.04492,0.80664 2.26563,1.02344 1.60937,0.58398 1.46094,0.66016 1.24219,0.4375 0.36718,-0.4375 0.87696,0.14453 1.02148,0.36524 2.11914,0.36718 1.02344,0.58594 0.80469,0.87695 0.16015,0.0645 0.57813,-0.27735 1.46094,-0.80468 1.31445,-0.65821 1.24219,-0.58594 1.68164,-0.87695 1.24218,-0.80469 1.67969,-0.6582 1.16992,-0.73242 1.60743,-0.65625 1.24218,-0.6582 1.82813,-0.87891 0.94922,-0.6582 1.3164,-0.87696 2.5586,-1.09961 2.26367,-1.0957 1.90234,-1.09765 2.48438,-0.87696 1.46093,-1.09961 2.5586,-0.87695 2.33789,-1.46289 1.82812,-1.09766 1.68164,-0.58398 1.60743,-1.02539 1.90039,-0.80469 1.24218,-0.65625 1.09571,-0.87891 v -35.54882 l 0.0879,-0.10938 -0.24024,-0.11523 -0.14648,-0.65821 -0.0723,-0.8789 -0.0723,-0.65625 -0.22071,-0.58594 v -0.4375 l 0.0742,-0.58594 0.14649,-0.51172 -0.0723,-0.51367 -0.29297,-0.6582 v -0.36524 l -0.0723,-0.51171 0.87695,-1.09766 -0.58594,-0.87891 -0.14453,-0.87695 0.36524,-0.36524 0.4375,-0.6582 -0.65821,-0.58398 -0.0723,-0.73242 0.14648,-0.80469 0.21875,-0.36524 0.0723,-0.36718 -0.14453,-0.58399 -0.22071,-0.51172 -0.14453,-0.51367 0.4375,-0.51172 0.0723,-0.36523 -0.0723,-0.58594 -0.29297,-0.58398 -0.21875,-0.36524 -0.14648,-0.36523 0.51172,-0.73242 0.14648,-0.80469 -0.21875,-0.6582 -0.14648,-0.36524 0.21875,-0.87695 0.14648,-0.51172 -0.29101,-0.73242 -0.14649,-0.36328 0.21875,-0.36719 0.29102,-0.4375 0.0742,-0.87891 0.36523,-0.73047 0.29297,-0.58593 0.14648,-0.58399 0.14649,-0.6582 0.14648,-0.58594 0.14649,-0.51172 0.21875,-0.36523 0.0723,-0.87891 0.21875,-0.73242 v -0.65625 l 0.36524,-0.58594 0.43945,-1.31445 0.14649,-0.43945 v -0.73047 l 0.21874,-0.65821 0.14649,-0.95117 0.4375,-0.80469 v -0.87695 l -0.21875,-0.58789 -0.29102,-0.73047 -0.2207,-0.8789 -0.21875,-0.36329 -0.36523,-1.02343 -0.21875,-0.51368 -0.21875,-0.65624 -0.14844,-0.58594 0.36719,-1.31641 -0.0742,-1.0957 0.14648,-1.02539 0.0723,-0.58399 0.14648,-0.6582 0.0723,-0.80469 v -0.36718 l 0.14648,-0.36524 0.14649,-0.87695 0.14453,-0.73242 -0.0723,-0.51172 v -0.4375 l 0.0723,-0.58594 0.36719,-1.68164 0.14648,-0.80664 0.0723,-0.65821 v -0.6582 l 0.14649,-0.58398 0.14453,-0.58399 0.14648,-0.66015 -0.21874,-0.80469 -0.0742,-0.87695 0.36718,-0.87891 0.14454,-0.87891 v -0.58398 l 0.14648,-0.80469 0.2207,-0.51172 0.14453,-0.80468 0.14649,-0.29493 -0.14649,-0.87695 -0.14453,-0.51172 -0.29297,-0.80469 -0.0742,-1.3164 v -0.58399 l 0.29296,-0.51367 -0.36523,-0.94922 0.14648,-0.36718 -0.14648,-0.58399 -0.36523,-1.09765 v -0.36524 l 0.36523,-0.66016 -0.0723,-0.94921 -0.36718,-0.73047 -0.0723,-0.73242 v -0.95118 -0.87695 l -0.0742,-0.51172 v -0.6582 l 0.0742,-0.66016 0.14649,-0.80469 -0.22071,-0.73046 -0.80273,-0.29297 -0.58399,-0.87891 -0.95117,-0.50976 -0.36523,-0.36719 -1.38867,-0.58399 -0.43946,-0.14648 -0.80273,-0.36524 -1.02344,-0.58398 -0.73047,-0.51172 -0.58398,-0.14844 -0.73047,-0.4375 -0.58399,-0.6582 -0.80468,-0.58398 -0.94922,-0.22071 -1.02344,-0.58398 -0.80469,-0.43945 -0.51172,-0.36524 -1.68164,-0.80469 -1.16797,-0.58398 -0.6582,0.0723 -0.87695,0.58398 -0.36524,0.14648 -0.87695,0.51172 -0.51172,0.21875 -0.87695,0.51367 h -0.58399 l -1.0957,-0.58593 -0.14648,-0.73047 -0.4375,-0.73047 -0.29297,-0.58594 -0.36719,-0.58398 -0.14648,-0.36719 -0.58399,-0.58594 -0.36523,-0.87695 -0.87696,-0.36523 -0.73046,0.14648 -0.95118,-0.29297 -1.02148,-0.36523 -0.36719,0.0723 -1.02344,0.2207 -0.29101,-0.14843 -0.80469,-0.14453 -0.80273,0.14453 -1.02539,0.14843 -1.46094,0.36524 -0.6582,0.43945 -0.36524,0.58203 -0.87695,0.36719 -0.14649,0.36524 -1.02343,0.14648 -1.46094,-0.14648 -1.38867,-0.36524 -0.73047,0.36524 -1.46289,0.66015 -1.24219,0.4375 -0.58398,-0.51172 -0.65821,0.14453 -2.04492,-0.36328 -1.68164,-0.0742 -0.73047,-0.8789 -0.36523,-0.58399 -0.65821,-0.80664 -0.29296,-0.65625 -0.50977,-0.73047 -0.43945,-0.80468 -0.58399,-0.58594 -0.36523,-0.80664 -0.29297,-0.51172 -0.14649,-0.87695 -0.6582,-0.73047 -1.02344,-0.36524 -1.38867,0.36524 -0.65625,0.73047 -1.7539,0.65625 -0.43946,0.36523 -1.53515,0.58789 -0.51172,-0.14844 -1.09571,-0.58398 -0.4375,-0.80273 -0.2207,-0.66016 -0.87695,-1.0957 -0.58399,-0.58594 -0.6582,-0.58594 -0.58398,-0.36523 -0.58594,-0.87891 -0.36524,-0.58398 -0.50976,-0.80469 -0.58594,-0.58594 -0.51172,-1.02344 -1.16797,-0.87695 -0.58593,-0.14648 h -1.09571 l -1.02148,0.73047 -0.43945,0.36523 -0.80274,0.87695 -0.43945,0.22266 -0.58399,1.0957 -0.36523,0.73047 -0.0723,1.39063 -0.43945,0.6582 -0.73047,0.29297 -0.29297,0.51172 -0.36523,0.36718 -0.29297,0.51172 -1.0957,0.36524 -0.43946,-0.51367 -0.29101,-0.58399 -0.36524,-0.58398 -0.58398,-0.51368 -0.36719,-0.51171 -0.21875,-0.29297 -0.73047,-0.87696 -0.43945,-0.43945 -0.94922,-0.14648 -1.02344,-0.14649 -1.0957,-0.21875 -0.51172,-0.14648 -0.87695,-0.29102 -1.31641,-0.0762 -0.4375,0.2207 -0.51172,0.36719 -0.14648,0.58398 0.0723,0.51368 -0.58398,0.51172 -0.21875,0.36523 -1.16992,0.14648 -1.0957,0.14454 -0.87696,0.14843 -0.0742,0.58399 -0.36523,0.58789 -0.29102,0.58203 0.0723,0.51367 -0.14649,0.51367 -0.29101,0.73047 -0.2207,0.43946 -0.58399,0.51171 -0.51172,0.80274 -0.36523,0.0742 -0.58399,-0.29493 -0.58593,-0.50976 -0.58399,-0.2207 -0.51172,-0.21875 -1.02343,-0.0742 -0.51172,-0.22071 -0.21875,-0.50976 v -0.51367 l -0.0742,-0.73047 0.2207,-1.09766 0.36524,-0.36523 0.14648,-1.31641 0.14453,-1.02344 -0.36328,-0.8789 -0.0742,-0.87696 -0.0723,-1.68164 -0.51172,-0.29492 -0.87696,-0.80469 -0.58398,-0.65625 -0.36523,-0.2207 -0.43946,-1.60937 -0.14453,-0.80274 -0.21875,-1.17187 v -0.80469 -0.87695 -0.95313 l 0.0723,-1.02148 0.29101,-0.87891 0.58399,-0.87695 0.14648,-0.87891 0.73242,-0.87695 0.36328,-0.87695 0.58399,-1.16993 0.36523,-0.58789 0.43946,-1.0957 -0.14649,-0.80469 v -0.8789 l -0.2207,-1.09571 -0.36524,-1.53711 0.0742,-1.46484 0.14453,-1.0957 -0.51171,-1.39063 0.29296,-0.58594 -0.36523,-0.87695 -0.21875,-1.17187 v -0.65625 l -0.14844,-1.16993 -0.14453,-1.16992 -0.14648,-0.58789 0.36523,-0.80469 -0.14648,-0.51172 0.58593,-0.36523 0.50977,-0.36719 0.36719,-0.72851 0.58398,-0.80469 v -1.02344 l -0.0742,-0.58594 -0.21875,-0.36523 v -0.6582 l 0.36524,-0.58594 v -0.58594 l -0.14649,-0.87695 -0.21875,-0.80469 -0.36523,-0.6582 -0.36524,-1.09766 v -0.58398 l -0.29296,-0.73242 -0.0723,-0.65821 -0.58594,-0.80468 -0.72851,-0.58594 -1.68164,0.36719 -1.16797,0.58398 -1.09766,0.58594 -1.82812,0.51172 -0.65625,0.2207 -1.16993,0.65625 -1.31445,0.36523 -1.02344,0.4375 -1.31445,0.36719 -1.46094,0.0742 -1.02343,0.21875 h -1.68165 l -0.58398,-0.0723 -1.60937,0.29297 -1.75391,0.36328 -1.75195,0.14844 -1.24414,-0.14844 -0.94922,0.36524 -2.04688,0.43945 -0.87695,0.14649 -1.46094,-0.14649 -1.46094,0.51367 -1.82812,0.36524 -2.19141,0.58398 -1.60937,0.29492 -1.82617,0.14454 -1.09571,0.66015 -0.80273,0.1836 v 0.0352 l 0.21875,1.68555 0.29101,1.60742 v 2.05078 l -0.87695,2.85156 0.29297,2.1211 v 4.7539 l -0.0742,3.73047 -0.80273,1.90039 0.21875,2.1211 c 0,0 -0.43772,1.53734 -0.51172,1.90234 -0.073,0.366 -0.51172,0.87695 -0.51172,0.87695 l -0.4375,1.24415 -0.51172,1.09765 -0.73242,0.51172 -0.29102,0.73047 -0.80469,1.24414 -0.50976,1.31641 -0.87695,1.24218 -0.73243,1.09766 -0.73046,1.53516 -0.73047,1.39257 -0.80469,2.41407 -0.58398,1.38867 -0.51172,0.4375 -0.58399,0.80664 -0.29297,0.8789 v 1.31446 l 1.24219,0.73047 2.41211,0.80468 2.04688,0.73243 1.31445,0.80468 2.33984,0.58399 1.38867,0.87695 2.33789,0.73242 2.5586,0.51368 1.38867,0.80468 2.11914,0.80469 1.38867,0.80469 3.14453,1.02344 2.84961,0.21874 2.11914,1.02344 1.31641,0.51172 1.31641,0.2207 -0.51172,0.51172 -0.87696,3.80664 -0.58593,2.9961 -0.80469,1.90234 -0.80273,1.60938 -0.51172,2.04882 c 0,0 -0.43872,1.24143 -0.51172,1.60743 -0.073,0.438 -0.0742,1.09765 -0.0742,1.09765 l -0.43945,1.02539 -0.4375,1.02149 -0.4375,1.09765 -0.87696,0.73047 -0.58593,0.51367 -0.51172,1.24219 -5.62696,0.80469 -0.73047,0.58594 -1.60742,0.80664 -0.29297,2.12109 -0.51172,1.31445 -0.0723,2.63477 -0.58398,0.80469 -0.29297,0.80469 -0.73047,1.02343 -0.0742,0.58594 z",
    PH14: "m 74.567335,127.06444 0.15039,-0.60547 0.29297,-0.80469 0.1543,-0.6543 0.58398,-0.73242 0.51172,-0.29102 0.36524,0.51172 0.65624,0.58399 0.36719,0.58398 0.80274,0.58594 0.36523,0.36523 0.6582,0.58594 h 0.51172 l 0.95118,-0.51172 1.16796,-0.80468 0.51172,-0.22071 0.65821,-0.58398 0.36718,-0.29297 0.58399,-0.14453 0.58398,-0.29297 0.80274,-0.36524 0.2207,-0.58593 0.73047,-0.36524 0.94922,-0.29297 0.36718,-0.73046 0.65821,-0.21875 0.73047,-0.0742 0.36523,0.29297 0.29102,0.95117 -0.14649,0.87695 0.0742,0.51172 0.14649,0.6582 0.0723,0.58399 v 1.02539 l 0.51172,0.87695 0.58398,0.73242 0.51172,0.65625 0.21875,0.51367 0.36524,0.65821 0.58398,0.6582 0.29297,0.51172 0.36523,0.58594 0.22071,0.51172 v 0.58398 l 0.14453,0.58594 v 0.51172 l 0.21875,0.58398 0.29297,0.51367 0.36719,0.29297 0.14453,0.36328 0.14648,0.36719 0.14649,0.36523 0.36523,0.73243 0.51172,0.36328 0.21875,0.51367 0.21875,0.58398 0.2207,0.65821 0.21875,0.51172 0.21875,0.73046 0.21875,0.51368 0.29297,0.65625 0.29102,1.24414 0.36718,0.6582 0.14453,0.51367 0.29297,0.58399 0.21875,0.51367 0.36524,0.51172 0.51172,0.29101 1.023425,0.51367 0.36524,0.21875 0.51172,0.73243 0.51172,0.73047 0.73046,0.95117 0.51172,0.29297 0.36524,0.73046 v 0.65821 l 0.36523,0.58593 0.29297,0.36524 0.29102,0.6582 0.51171,0.36524 0.21876,0.6582 v 0.36719 l -0.0742,0.6582 v 0.73047 l 0.2207,0.73242 -0.0723,0.80274 -0.14648,0.58593 v 0.80469 l -0.14649,0.73047 -0.14648,0.73047 v 0.36719 l 0.14648,0.87695 v 0.36523 l 0.0742,0.36524 0.29297,1.02343 0.14453,0.29297 0.14844,0.80469 -0.14844,0.87695 0.36719,0.22071 v 0.6582 0.87695 0.58594 0.36524 l 0.14453,0.29101 h 0.66016 l 0.58398,-0.87695 0.58399,-0.73242 0.36523,-0.29102 0.36524,-0.80469 0.29296,-0.58593 0.72852,-0.95118 0.14648,-0.6582 0.58594,-0.87695 0.58399,-0.36524 0.73047,-0.58593 0.36523,-0.51172 0.58594,-0.14649 0.36523,-0.21875 h 0.95117 1.09571 0.36523 l 1.0957,0.0742 0.58399,0.21875 0.87695,0.58399 0.58399,0.2207 0.51172,0.14648 0.36523,0.36524 1.09766,0.21875 h 1.0957 l 0.73047,0.0723 h 1.68164 0.58398 l 0.87696,0.21875 0.21875,0.80469 -0.14649,0.51367 -0.21875,0.36328 -0.14648,0.58594 -0.0723,0.6582 -0.14648,0.51368 v 0.58398 l 0.29297,0.51172 0.29101,0.51172 0.51172,0.29297 0.21875,0.58593 0.6582,0.73047 0.29297,0.65821 0.51172,0.2207 0.73047,-0.14649 0.51172,-0.21874 0.58398,0.36523 0.65821,-0.14649 0.58398,-0.29296 0.29297,-0.65625 0.94922,-0.14649 h 0.73047 l 0.80468,0.51172 0.36524,0.29102 0.51172,0.58593 0.51172,0.58399 0.14453,0.66015 0.14648,1.02344 v 0.36524 l -0.0723,0.51171 v 0.65821 0.95312 l 0.36523,0.65625 0.29102,0.14649 0.51171,0.29297 0.73047,0.29296 0.36719,0.58399 0.73047,0.36523 0.65625,0.36524 h 0.73047 l 0.87695,0.29297 h 1.09766 1.0957 1.24219 l 0.6582,0.0723 0.58399,0.22071 0.51171,0.36523 0.58399,0.29297 0.36523,0.36523 0.36524,0.73243 0.65625,0.58398 0.6582,0.36523 0.36719,0.58399 0.875,0.36719 0.73047,0.51171 1.3164,-0.6582 0.87696,-0.36523 0.29101,-0.36719 0.95117,-0.36524 0.65821,-0.0723 1.02148,-0.6582 0.87891,-0.36524 0.875,-0.66015 0.87695,-0.58399 0.6582,-0.51172 0.80274,-0.51172 0.29297,-0.51367 0.2207,-0.29297 0.87695,-0.65625 0.21875,-0.36718 0.14649,-0.51172 0.29101,-0.65821 0.51172,-0.6582 1.68164,-1.02539 0.80274,-0.58398 0.73242,-0.58399 0.29297,-0.73242 0.73047,-0.36524 0.73047,-0.21874 0.73046,-0.14649 0.51172,-0.0742 h 0.73047 l 0.46289,0.19922 0.20117,-0.55664 0.80469,-0.29102 0.73047,-0.8789 0.6582,-1.60938 0.14649,-0.87695 v -1.02344 -0.73047 l 0.36328,-1.17187 0.36523,-0.95117 0.87696,-0.65821 0.87695,-0.14453 0.51172,-0.58593 v -0.65821 l -0.58594,-0.95117 -0.21875,-0.58398 0.0742,-0.80469 0.21875,-0.65821 0.58594,-1.16992 0.29101,-0.73047 0.21875,-0.8789 v -1.24219 l 0.36524,-0.80469 0.51172,-0.80468 0.51171,-1.02344 0.36524,-0.80469 1.24219,-0.6582 0.95117,-0.14649 0.80273,-0.29492 0.95117,-0.29101 0.58399,-0.51172 1.02344,-1.09766 0.51172,-0.73047 0.21874,-0.36523 0.65821,-0.73242 0.80273,-0.29297 0.65821,-0.0723 0.94921,0.0723 1.24219,0.14648 0.58594,0.51367 0.94922,0.73047 1.09765,0.73047 0.73047,0.36719 0.80274,0.73047 0.73047,0.51172 1.02343,1.02343 0.73047,0.73243 0.21875,0.21874 1.24414,0.80469 0.87696,0.65821 0.58398,0.73046 0.87695,0.87891 1.16797,0.73047 0.87696,0.6582 1.16992,0.14649 0.72851,-0.58594 0.65821,-0.73047 0.80468,-0.73047 0.80469,-0.80469 0.58399,-0.58593 1.24218,-1.16993 0.14649,-0.6582 -0.21875,-1.24414 -0.29297,-0.80273 v -0.87891 l 0.0742,-0.95117 -0.14649,-1.53711 -0.0742,-0.94922 -0.73046,-1.02344 -0.21875,-0.8789 -0.21875,-0.73047 -0.0742,-0.73047 0.36718,-0.58594 0.29102,-0.94922 0.73242,-0.66015 1.16797,-0.80469 1.31641,-0.80469 0.73047,-0.21875 h 0.58398 1.31641 1.16992 l 0.80273,0.29297 0.87696,0.21875 h 1.24218 l 1.31446,0.21875 0.58593,0.0723 h 0.80469 0.95117 l 0.875,0.2207 1.16993,0.36523 1.31445,0.0723 0.73242,-0.0723 h 1.02148 l 0.51172,0.0723 -0.51953,2.29297 0.375,-0.51563 0.0742,-0.36523 0.0742,-0.73242 0.58398,-0.80469 0.21875,-0.95117 0.0742,-1.02344 0.36328,-1.02344 0.51368,-0.6582 0.21875,-1.02539 0.51171,-0.51172 0.36524,-0.73047 -0.0742,-0.51172 -0.0742,-1.02539 v -0.87695 l -0.58398,-0.51172 -0.80274,-0.36719 -0.51172,-0.21875 -0.58593,-0.51172 -0.29102,-0.51171 -0.29297,-0.58594 -0.5039,-0.60938 -0.73047,-0.73242 -0.36719,-0.21875 -0.21875,-0.36523 -0.36524,-0.36524 -0.58398,-0.51172 -0.6582,-0.58593 -0.36524,-0.36524 -0.21875,-0.51172 -0.29297,-0.58593 -0.51171,-0.29102 -0.51172,-0.29297 -0.21875,-0.51172 -0.36524,-0.6582 -0.87695,-0.87891 -0.36523,-0.51172 -0.22071,-0.36523 -0.50976,-0.29297 -0.51368,-0.51172 -0.80273,-0.36523 -0.21875,-0.58594 -0.2207,-0.51172 -0.14453,-0.6582 v -0.73047 -0.87695 l -0.21875,-0.65821 -0.95118,-0.6582 h -1.24218 l -1.02149,0.21875 -0.58594,0.21875 -0.51171,0.51172 -0.51172,0.66016 -0.58399,0.58398 h -0.21875 -0.6582 l -0.14649,-0.51172 -0.29296,-0.58594 -0.36524,-0.65625 -0.21875,-0.58593 -0.0723,-0.87696 0.0723,-0.8789 0.0723,-0.73047 0.21875,-0.95117 0.0723,-0.80469 0.73243,-0.95117 0.58398,-0.87696 0.58398,-0.6582 0.51172,-0.80469 0.58399,-1.02343 v -0.66016 l -0.50977,-1.16992 -0.29297,-0.58399 -0.36523,-0.51172 -0.29297,-0.5625 c -0.0526,-0.003 -0.73047,-0.0352 -0.73047,-0.0352 h -0.73047 l -1.0957,0.0723 -1.0957,-0.36523 -0.65821,-0.29297 -0.87695,-0.6582 -0.0723,-0.51368 -0.6582,-0.65624 -0.21875,-0.58594 -0.14648,-0.36524 -0.58399,-0.80664 -0.36719,-0.87695 -0.14453,-0.58399 0.0723,-0.58593 0.14648,-0.58399 -0.14648,-0.6582 h -0.73047 l -0.73242,0.14648 -0.875,0.0723 -0.6582,0.29297 -0.51172,0.36719 -0.36524,0.36328 -1.31445,0.2207 -1.16992,0.14649 -0.58399,0.0723 -0.80468,0.14648 h -0.875 l -1.09766,0.0742 -1.16992,-0.0742 -0.36524,-0.0723 -0.58398,-0.29297 -0.51172,-0.2207 -0.36719,-0.51172 -0.58398,-0.36524 -0.80274,-0.0723 -0.73047,-0.29297 -0.65625,-0.29297 -0.51367,-0.29297 -1.02344,-0.36328 -0.94921,-0.2207 -0.80469,-0.58399 -0.51172,-0.14648 -0.51172,-0.29297 -0.58398,-0.21875 -0.14453,-0.36523 -0.29297,-0.36524 -0.0723,-0.73242 v -0.87695 l -0.36719,-0.51367 v -0.87696 l -0.21875,-0.87695 -0.0723,-0.73242 -0.14649,-0.65821 -0.0742,-0.58398 -0.14648,-0.80664 v -0.51172 l 0.0742,-0.95117 0.29297,-0.73047 0.0723,-1.02344 0.21875,-0.73047 0.36719,-0.95117 0.14453,-0.66016 0.36719,-0.58398 0.29102,-0.58398 0.36718,-0.65821 0.36524,-0.51172 0.51172,-0.73242 0.14648,-0.6582 0.80273,-0.95117 0.36524,-0.87696 0.2207,-0.58593 -0.0742,-0.94922 -0.51172,-0.95117 -0.36523,-0.80469 -0.14648,-0.73242 -0.65625,-1.09766 -0.14844,-0.73047 -0.29102,-0.51172 -0.14648,-0.51367 -0.6582,-0.65625 v -0.51172 l 0.0742,-0.58594 -0.36718,-0.6582 -0.21875,-0.73047 0.73047,0.14649 1.0957,0.14453 1.16992,-0.0723 0.73047,-0.14648 0.87695,-0.36524 h 0.80274 l 0.8789,0.36524 0.14453,0.73242 0.58399,0.6582 0.51172,0.0723 0.6582,0.29297 0.36523,0.29297 h 0.87696 l 0.73047,-0.0742 h 1.0957 l 1.02344,-0.14453 0.58398,-0.36719 0.14649,-0.73047 0.14453,-0.80469 v -0.95117 l -0.14453,-0.73047 -0.29297,-0.8789 -0.29102,-0.36524 -0.21875,-0.80664 -0.51367,-0.80273 -0.29102,-0.51172 v -0.58594 l -0.51171,-0.58398 -0.36524,-0.65821 -0.0742,-0.36718 -0.36523,-0.65821 -0.36524,-0.29101 -0.6582,-0.29297 -0.50977,-0.51172 -0.36523,-0.58398 v -0.66016 l 0.21875,-0.58399 0.36524,-0.6582 0.58398,-0.73047 0.87695,-1.09765 0.58399,-0.80469 0.29297,-0.36719 0.21875,-0.58398 0.58398,-0.80469 0.6582,-0.29297 0.36524,-0.87695 0.0742,-1.24414 v -0.65821 l -0.0742,-0.80468 -0.0723,-0.80469 v -0.80469 -0.51172 l 0.14649,-0.80469 v -0.73242 l -0.36524,-0.80468 0.0723,-0.658208 0.21875,-0.583984 -0.0723,-0.730469 -0.51172,-0.732421 V 33.27342 l 0.29297,-0.876953 0.73047,-0.583985 0.58399,-0.146484 1.16992,-0.585937 0.65625,-0.291016 0.73047,-0.585937 0.36718,-0.804688 v -0.951172 l -0.0742,-0.658203 -0.36523,-1.097656 -0.36719,-0.583985 -0.14453,-0.367187 -0.58594,-0.949219 -0.58398,-0.513672 -0.87695,-0.291015 -0.51172,-0.585938 -0.36524,-0.292969 -0.58398,-0.511718 -0.6582,-0.511719 -0.80274,-0.585938 -0.36719,-0.583984 -0.58398,-0.511719 -0.36523,-0.146484 -0.73047,-0.220703 -0.51172,-0.65625 -0.21875,-0.585938 -0.58594,-0.292969 -0.80273,-0.658203 -0.73243,-0.365234 -0.50976,-0.365234 -0.29297,-0.804688 -0.73047,-0.732422 -0.51172,-1.097656 -0.95117,-1.023437 -0.58398,-0.949219 -0.51172,-0.806641 -0.14649,-0.658203 -0.65625,-0.658203 -0.6582,-0.804688 -0.58399,-0.951172 -0.29296,-0.658203 -0.36524,-0.583984 -0.51172,-0.660156 -0.14648,-0.804688 -1.02344,-0.658203 -0.58398,-0.876953 0.1914,-0.419922 -0.60547,0.201172 -0.6582,0.439453 -0.58398,-0.876953 -0.87696,-1.097656 -0.51171,-0.658203 -1.24415,-1.025391 -1.16796,-0.658203 h -0.95118 l -1.97265,0.292969 -1.24219,0.365234 -1.60742,0.660156 -0.66016,0.658203 -0.94726,0.365235 0.36328,1.609375 -1.46094,0.583984 -0.87695,0.658203 -0.73047,0.511719 h -1.09766 l -0.36328,0.732422 -0.0742,1.535156 -0.36523,1.169922 -0.21875,1.683594 0.21875,0.949218 v 0.951172 l -0.65821,1.169922 0.14649,0.658203 0.51172,1.023438 0.29101,0.660156 0.36719,0.949219 0.0723,1.023437 -0.51172,0.806641 -0.80274,0.583984 -0.66015,0.21875 -0.58399,0.146485 -1.0957,0.513672 -0.80469,0.365234 -1.24219,0.365234 -0.94921,0.146485 -1.09571,-0.21875 -0.36523,-0.148438 -0.95117,-0.291015 -0.51172,-0.513672 -0.58399,-0.291016 -0.36718,-0.367187 -0.875,-0.292969 -0.80469,-0.511719 h -1.02344 l -0.58398,0.146484 -0.36524,0.658204 -0.21875,0.732422 -0.0742,0.365234 -0.0723,0.804687 -0.51172,0.511719 -0.58594,0.951172 -0.36523,0.658203 -0.58399,0.511719 -0.58594,1.169922 -0.36523,0.878906 -0.29101,1.169922 -0.58594,0.583984 -0.29102,1.097656 -0.0742,0.878907 -0.50976,0.511719 -0.58399,0.365234 -0.2207,0.878906 -0.51172,1.023438 -0.58398,0.658203 -0.36524,0.876953 -0.14648,0.511719 -0.51172,0.876953 -0.51172,0.878906 -0.21875,1.02344 v 1.02344 l 0.0742,0.95117 0.0703,0.95117 0.14844,0.80469 v 1.09765 0.51172 1.24414 0.6582 l 0.0723,0.65821 0.0723,0.87695 -0.21875,0.95117 v 1.02344 1.09766 0.80468 l 0.0742,0.58594 0.14453,1.46094 v 1.02344 l 0.2207,0.95117 0.36524,1.16992 0.14648,0.80664 0.51172,1.02344 0.58399,1.3164 0.14648,1.09766 0.95117,0.73242 0.21875,0.87696 0.0742,1.46289 v 0.80468 0.65821 l -0.73242,0.14648 -0.73047,0.0723 -0.6582,0.14648 h -0.875 l -0.58399,0.87891 -0.36719,0.36523 -0.73046,0.0723 -0.80469,0.0742 -0.875,0.14648 -0.51172,-0.0742 h -0.80469 l -0.65625,-0.0742 -0.6582,0.14649 -0.58399,-0.0723 -1.24414,-0.14648 -0.875,-0.29297 -0.73242,-0.36523 -0.58398,-0.14649 -0.51172,-0.14453 -0.94922,-0.14648 -0.95117,0.6582 -0.80469,0.51172 -1.0957,0.51367 -0.95117,0.0723 -0.94922,0.21875 -0.87696,0.80469 -0.73046,0.51172 -1.02344,0.6582 -0.36524,0.51172 -0.87695,0.65821 -0.73047,0.58593 -0.80273,0.36524 -0.80469,0.29297 -0.36719,-0.14649 -0.58398,-0.36523 -0.73047,-0.58399 -0.58399,-0.73242 -0.14648,-0.6582 -0.14648,-0.58594 -0.51172,-0.36523 -0.65625,-0.21875 h -0.36719 l -0.94922,0.36523 -0.6582,0.29297 -1.46094,0.58398 -1.16992,0.65821 -0.73047,0.36523 -0.875,0.36719 -0.6582,0.29101 -0.95117,0.51368 -0.73047,0.29101 -0.58399,0.80469 -0.29297,0.51172 -0.29297,0.58594 -0.29101,0.58398 -0.6582,0.2207 -0.73047,0.29102 -0.80469,0.36523 -0.50977,0.22071 -0.513665,0.29297 -0.80273,0.51171 -0.51172,0.36524 -1.24219,0.29101 -0.80273,0.73047 h -1.02539 l -0.29102,-0.58398 -0.14648,-0.58399 -0.0723,-0.95117 -0.29297,-0.51172 -0.29101,-0.58593 -0.58594,-0.65821 -0.36524,-0.0723 -0.6582,-0.65821 -0.51172,-0.51172 -0.36523,-0.6582 -0.6875,-0.58008 -0.51172,-0.58593 -0.65625,-0.80469 -0.51367,-0.66016 -0.14453,-0.80468 -0.0742,-0.87696 v -0.36523 -0.65821 l -0.0723,-0.51171 -0.36523,-0.66016 -0.29102,-0.50977 -0.36719,-0.51367 v -0.73047 l -0.36523,-0.36523 -0.36523,-0.36524 -0.21875,-0.58593 v -0.0723 l -0.80469,-1.02539 -0.36524,-0.6582 -0.14648,-0.51172 -0.29297,-0.6582 -0.65625,-0.58399 -0.21875,-0.73047 -0.0742,-0.6582 -0.80469,-0.58594 -0.6582,-0.51172 -0.65625,-0.29101 h -0.80469 L 80.864205,55 l -0.14454,-0.73242 -0.21874,-0.80273 -0.22071,-0.87891 -0.0723,-0.6582 -0.36524,-0.87696 -0.29297,-0.6582 -0.36523,-0.87891 -0.36524,-0.73046 -0.36523,-0.65821 -0.51172,-0.21875 -0.51172,-0.58593 -0.36718,-0.51172 -0.50977,-0.51172 -0.36523,-0.36524 -0.36719,-0.51367 -0.36328,-0.36523 -1.02344,-0.14649 h -0.87695 l -1.02344,0.0742 -0.87696,0.14649 -0.73046,0.14648 -1.46094,0.51172 -0.58594,0.87695 h -1.02344 -1.53515 -0.875002 l -0.730469,-0.14453 -0.585938,-0.29297 -0.876953,-0.6582 -0.511719,-0.73242 -0.292968,-0.36524 -0.65625,-0.58398 -0.513672,-0.58594 -0.291016,-0.6582 -0.146484,-0.58399 V 41.3242 40.74022 l -0.511719,-0.87696 -0.511719,-0.58593 -0.949219,-0.29102 -0.951171,-0.2207 -0.876953,-0.0723 -1.095704,-0.14648 h -0.876953 -0.730469 l -1.097656,-0.0723 h -1.095703 -0.583984 l -0.660157,0.14063 -0.658203,0.6582 -1.021484,0.21875 -0.365234,0.51367 -0.292969,0.95117 -0.365234,0.87696 -0.146485,0.73242 -0.365234,0.58398 -0.07227,0.95117 -0.365234,0.80469 -0.658203,0.58399 -0.583985,0.36523 -0.292969,0.36719 h -1.607421 l -1.314453,0.14453 h -0.951172 l -1.607422,-0.0723 -1.095703,-0.2207 -0.804688,-0.29101 -0.730469,-0.29297 -0.292968,-0.36524 -0.876954,-0.29297 -1.023437,-0.51171 -0.876953,-0.51172 -0.65625,-0.36524 -0.804688,-0.29297 -0.730468,-0.29297 -0.658204,-0.36523 -0.513671,-0.29297 -1.167969,-0.29297 -0.804688,0.0742 -0.365234,0.6582 v 0.73243 l -0.07422,0.80468 -0.583984,0.29297 -0.365235,0.80274 v 0.95312 0.65821 0.80468 l 0.21875,0.65821 0.07422,0.87695 0.07227,0.6582 0.07227,0.58594 v 0.58398 l 0.658204,0.95118 0.21875,0.73046 0.146484,0.58594 0.876953,0.36524 0.949219,0.51172 0.365234,0.95117 0.658203,0.80468 0.291016,0.65821 0.146484,0.6582 0.07422,0.51367 0.511719,0.73047 v 0.80469 l 0.291015,0.51172 v 0.51172 l -0.07227,0.6582 0.365234,0.58594 0.367188,0.73047 0.144531,0.73242 0.146484,0.73242 0.365235,0.73047 0.292969,0.58594 0.585937,0.51171 0.363281,1.16993 0.585938,0.73242 0.21875,0.51172 0.365234,0.14453 0.511719,1.09765 0.511719,0.58594 0.144531,0.87695 0.585937,0.51172 0.730469,1.02539 0.146485,0.51172 0.21875,0.73047 0.658203,0.80469 0.292968,0.36719 0.365235,0.51172 0.21875,0.51171 0.658203,0.73047 0.365234,0.80469 0.513672,0.73242 0.583985,0.51172 0.21875,0.6582 0.511718,0.73047 0.292969,0.51368 0.146484,0.87695 0.291016,1.09765 0.07227,0.73243 0.220703,0.87695 0.146484,0.6582 v 0.73242 l 0.21875,0.80469 0.07227,1.02344 0.146484,0.58594 0.365234,0.58398 0.658204,0.36524 0.511718,0.73046 0.146485,0.58594 0.509765,0.65821 0.367188,0.51171 0.583984,0.58399 0.658203,0.6582 0.21875,0.66016 0.21875,0.6582 0.365235,0.36524 0.292968,0.51171 0.802735,0.36719 0.146484,0.36524 0.07422,0.36523 0.363281,0.58398 0.585938,0.58594 0.365234,0.36524 0.730469,0.73242 0.292969,1.02344 0.291015,0.58398 0.365235,0.51367 0.730468,0.65625 0.511719,0.73242 0.292969,0.36524 0.511719,0.58398 0.583984,0.58594 0.365234,0.58398 0.365235,0.58594 0.511719,0.95117 0.292968,0.58399 0.365235,0.21875 0.511718,0.36719 0.65625,0.80468 0.583985,0.95117 0.513672,0.80469 0.509765,0.36524 0.292969,0.6582 0.365234,0.80469 0.585938,0.66015 0.949219,1.09571 0.583984,0.8789 0.146484,0.65821 0.291016,0.36523 0.583985,0.51172 0.80273,0.51172 0.22071,0.58594 0.58398,1.02343 0.51172,0.66016 0.36523,0.50977 0.95118,1.09765 0.36328,0.80664 0.51367,0.21875 0.58398,0.6582 0.36328,0.51172 0.22071,0.51172 0.51172,0.95117 0.58398,0.73243 0.36719,0.51172 0.36523,0.6582 0.51172,0.6582 0.36524,0.66016 0.21875,0.65625 z",
    PH15: "m 74.56735,127.06457 0.0781,0.13086 0.29297,0.6582 -0.21876,0.80469 -0.14648,0.6582 -0.29297,0.80469 -0.21875,0.87695 -0.21875,0.58594 -0.36719,0.80468 -0.21875,0.58594 -0.29101,1.02149 -0.36719,-1.16993 -0.29297,0.58594 -0.21875,0.36524 -0.65625,0.29297 -0.29297,0.6582 -0.73047,0.43945 -0.0723,0.51172 -0.73242,0.58398 -0.875,1.24415 -0.73047,0.58593 -0.87891,0.73047 -0.36328,0.6582 -0.36523,0.36524 -1.095706,-0.0723 -0.951172,-0.51172 -0.802734,-0.58398 -0.658204,-0.95117 -0.292968,-0.66016 -0.730469,-0.4375 -0.730469,-0.58398 -0.804687,-0.65821 -0.292969,-0.51367 -0.802734,-0.80468 -0.365235,-0.14649 -0.511719,-0.21875 -0.585937,-0.73047 -0.509766,-0.2207 -0.513672,-0.36524 -0.21875,-0.66015 -0.509765,-0.58399 -0.658203,-0.51171 -0.220703,-0.36719 -0.658204,-0.51172 -0.583984,-0.6582 -0.509766,-0.36524 -0.585937,-0.58594 -0.730469,-0.51171 -0.730469,-0.87696 -0.583984,-0.51367 -0.513672,-0.29102 -0.365234,-0.51171 -0.365235,-0.22071 -0.365234,-0.58398 -0.511719,-0.36719 -0.511719,-0.51172 -0.365234,-0.29297 -0.365234,-0.58398 -0.367188,-0.2207 -0.583984,-0.73047 -0.146484,-0.51172 -0.511719,-0.36524 -0.583985,-0.51367 -0.658203,-0.36328 -0.365234,-0.36719 -0.291016,-0.29101 -0.804687,-0.36719 -0.511719,-0.36523 -0.220703,-0.58594 -0.511719,-0.21875 -0.365234,-0.51172 -0.730469,-0.73047 -0.365234,-0.36523 -0.365235,-0.58594 -0.511719,-0.21875 -0.511718,-0.36524 -0.292969,-0.36718 -0.365234,-0.51172 -0.730469,-0.65821 -0.146484,-0.51171 -0.583985,-0.29102 -0.291015,-0.51172 -0.730469,-0.6582 -0.732422,-0.36719 -0.509766,-0.51172 -0.511719,-0.29297 -0.292968,-0.51171 -0.730469,-0.51172 -0.730469,-0.73047 -0.511718,-0.66016 -0.660157,-0.29101 -0.509765,-0.73243 -0.730469,-0.36523 -0.259766,-0.25977 -0.173828,0.1836 -0.658203,0.95117 -0.365234,1.02344 -0.658204,0.73047 -0.876953,1.02539 -0.658203,0.6582 -1.242187,0.87695 -1.095703,0.51172 -0.876954,0.14649 -1.095703,0.14648 -1.167968,0.29297 -0.658203,0.36523 -0.660157,0.36524 -0.582031,0.51172 -0.585938,0.51367 -0.365234,0.51172 v 0.51172 l 0.07227,0.6582 0.21875,0.80469 0.804687,0.87695 0.365235,0.73242 v 0.87695 l 0.730468,0.36524 0.876954,0.95117 h 0.804687 l 0.511719,0.29297 0.511718,0.29102 0.730469,0.51171 0.21875,0.65821 0.07422,0.6582 v 0.58594 l 0.365234,0.36523 0.365235,0.65821 0.730469,0.73242 0.220703,0.36523 0.07227,0.6582 v 0.73047 l -0.292968,0.58594 -0.658204,0.36524 -0.21875,0.36523 0.291016,0.80469 0.292969,0.58398 0.365234,0.58594 0.365235,0.51172 0.365234,0.0742 0.365234,0.36523 0.583985,0.6582 0.365234,0.29102 0.367187,0.36719 0.876954,0.6582 0.21875,0.36523 0.509765,0.22071 0.732422,0.21875 1.021485,0.0723 1.097656,0.14649 h 0.730468 l 0.804688,0.29297 0.728516,0.65625 0.804687,0.8789 0.658203,0.51172 0.365235,0.36719 0.583984,0.29297 0.658203,0.51172 1.021484,0.6582 0.367188,0.21875 1.097656,0.51172 0.363282,0.21875 0.658203,0.2207 0.730468,0.29297 0.876953,0.58398 0.658204,0.29297 0.949218,0.58399 0.876954,0.51172 0.658203,0.36718 0.583984,0.36524 0.802734,0.87695 0.732422,0.58594 0.365235,0.21875 0.511718,0.51172 0.292969,0.58398 0.583985,0.36719 0.802734,0.58398 0.148437,0.65821 v 0.6582 l -0.292968,0.6582 -0.511719,0.65821 -0.365234,0.2207 -0.21875,0.51172 -0.146485,0.6582 -0.365234,0.65625 v 0.58594 l 0.146484,0.80469 0.875,0.6582 0.367188,0.6582 0.509765,0.36524 0.292969,0.36718 0.07227,0.36524 0.220703,0.51172 0.583984,0.6582 0.658203,0.51172 0.511719,0.6582 0.07227,0.58594 0.585937,0.6582 0.511719,0.51172 0.291016,0.58399 0.367187,0.58593 0.365234,0.95118 v 0.6582 l 0.144532,0.58594 0.146484,0.51172 0.146484,0.58398 0.21875,0.36719 0.292969,0.73047 0.220703,0.51171 0.363281,0.87696 0.220704,0.73047 0.21875,0.73242 0.365234,0.80469 0.21875,0.58398 0.146484,0.73242 0.21875,0.51172 0.292969,0.51172 0.658203,1.02539 v 0.87695 l 0.509766,0.58399 v 0.8789 l 0.367187,0.58399 0.363282,0.6582 0.585937,0.58594 0.291016,0.80469 0.513672,0.51172 0.509765,0.29296 0.732422,0.21875 0.511719,0.29297 0.365234,-0.29297 0.583985,0.58594 0.583984,0.36524 0.730469,0.58593 0.292968,0.51172 0.36524,0.4375 0.14648,0.36524 0.51172,0.36718 0.29297,0.51172 0.58398,0.58399 0.36524,0.36718 0.14453,0.65821 0.14648,0.36523 0.51172,0.73047 0.51172,0.58594 0.58399,0.58398 0.58398,0.66016 0.21875,0.94922 -0.0723,0.80468 0.36524,0.66016 0.29297,0.73047 0.36523,0.66016 0.51172,0.87695 0.14648,0.51172 v 0.58398 l 0.36524,0.73047 0.14648,0.58594 -0.0723,0.36523 v 0.51172 l 0.14453,0.80469 0.14648,0.14648 0.58399,0.95118 0.14648,0.36523 0.0742,0.87695 0.14453,1.09766 v 0.58398 l 0.0742,0.51368 0.0742,0.6582 v 0.73047 l 0.14453,0.73242 0.0742,0.6582 -0.0742,1.09766 0.2207,0.73047 -0.14648,0.87695 v 0.29297 l 0.36523,1.02344 0.21875,0.80468 0.21875,0.73047 0.51368,0.87891 0.72851,1.02344 0.29297,0.14648 0.51172,0.80469 0.29101,0.51172 0.29297,0.6582 0.29102,0.80469 0.58594,0.95117 0.29101,0.51172 0.36524,0.58594 0.14648,0.36523 0.6582,0.95117 0.94922,0.51172 h 0.87696 l 1.0957,-0.0723 0.14648,-0.36719 0.95118,-0.21875 0.875,-0.21875 0.6582,-0.36719 0.29297,-0.73242 0.29101,-0.51172 h 0.51172 l 0.87695,-0.58398 0.22071,-0.29297 0.73047,-0.0742 0.6582,0.14648 0.58398,0.58594 0.21875,0.80273 v 0.51172 l 0.58594,0.0742 0.58399,0.73242 0.73046,0.80469 0.36719,0.36524 0.14453,0.51171 0.36719,0.73243 0.29102,0.51171 0.0742,0.65821 -0.0742,0.58398 -0.50977,0.22071 -0.51367,1.02343 -0.0723,0.65821 0.14649,0.73046 0.6582,0.36719 0.29102,0.51172 0.21875,0.36524 0.51171,0.73046 0.65821,0.65821 0.80469,0.58594 0.36523,0.29101 0.73242,0.58594 0.50977,0.51172 0.51172,0.87695 0.36523,0.36523 0.6582,0.73243 0.51172,0.51172 0.36524,0.80273 0.0684,0.2793 0.66992,-0.47852 0.58594,-0.29101 1.02148,-0.14649 1.02539,-0.0742 0.36524,-0.29101 v -0.87891 -0.80469 l -0.29297,-0.73047 -0.4375,-0.73047 -0.36524,-0.36718 -0.58594,-0.95117 -0.0723,-0.29102 0.36523,-0.80469 0.58399,-0.51172 0.87695,-0.73242 0.58398,-0.51172 0.87696,-0.80468 0.58398,-0.58594 0.51367,-0.58399 0.21875,-0.87695 -0.21875,-0.95117 -0.80468,-0.73047 -1.02344,-0.73242 -0.58399,-0.51172 -0.58398,-0.73047 -0.58594,-0.29297 -0.6582,-0.6582 -0.36523,-0.6582 -0.29297,-0.51172 -0.0723,-0.80469 0.36524,-0.36523 0.36718,-0.14649 0.36524,-0.36719 0.21875,-0.95117 0.21875,-0.51172 0.29297,-0.0742 0.21875,-0.36523 -0.51172,-0.73047 -0.65625,-0.66016 -0.36719,-0.80273 -0.58398,-0.58594 -0.58399,-0.51172 -0.14648,-0.14648 -0.0742,-0.87695 -0.21875,-0.65821 v -0.73047 l 0.14648,-0.51367 -0.0723,-0.80468 -0.0723,-0.51172 -0.29297,-0.80469 0.14649,-0.80469 0.21875,-0.6582 0.36523,-0.29297 0.73047,-0.51172 h 0.58398 l 1.16993,0.29102 0.51172,0.58593 0.94921,0.65821 1.09766,0.36523 1.31445,0.58594 1.16992,0.21875 h 0.65821 l 0.51172,-0.14649 0.58398,-0.51367 0.2207,-0.6582 0.80274,-0.36523 0.73242,-0.0742 h 1.02149 l 1.46093,-0.0723 h 1.53516 l 0.36719,-0.2207 0.36523,-0.51172 0.87695,-0.58399 0.72852,-0.36523 0.87695,-0.6582 0.36719,-0.66016 0.875,-0.51172 0.80469,-0.29297 1.16797,-0.51172 h 1.24414 l 1.38867,0.0723 h 0.87695 l 0.80274,0.0742 0.80468,0.6582 0.73047,0.29297 1.16992,-0.0742 0.87696,-0.29101 0.6582,-0.66016 0.72852,-0.21875 h 1.16992 l 1.02344,0.0742 0.6582,0.29297 0.36523,0.29101 0.51172,0.29297 h 0.94922 l 0.95117,-0.0723 0.51172,-0.36719 1.16992,0.2207 0.58399,-0.36523 1.0957,-0.14844 0.72852,-0.0723 0.80468,0.29297 0.36524,0.73047 0.29297,0.80469 0.21875,0.6582 0.73047,0.58594 0.58398,0.29102 h 0.87695 l 0.80469,-0.36524 0.65625,-0.29297 0.87695,-0.29101 0.73243,-0.36524 0.94921,-0.36719 1.02344,-0.29101 0.80469,-0.6582 0.94726,-0.36719 0.58594,-0.65625 0.51172,-0.66016 0.58399,-0.29101 0.80468,-0.51368 0.65821,-0.65624 0.73046,-0.51368 0.87696,-0.65625 1.16797,-0.8789 0.8789,-0.58594 1.02149,-0.29297 1.24414,-0.14453 h 1.02148 l 0.51367,-0.0742 0.80274,-0.87695 0.87695,-0.95117 0.51172,-0.58594 0.58594,-0.65821 0.95117,-0.51171 0.875,-0.80469 0.95117,-0.58399 0.80274,-0.73242 0.58398,-0.36523 0.80469,-1.02344 0.87695,-0.29297 0.36719,-0.29297 0.94922,-0.80468 0.36523,-0.29297 0.51172,-0.73047 1.0957,-0.36524 h 1.09571 l 0.87695,-0.14648 h 0.87695 0.87696 l 0.51171,-0.73242 v -0.51172 l -0.0723,-1.16992 -0.36524,-0.65821 -0.36523,-0.80468 -0.80469,-0.65821 -1.16992,-0.51367 -1.0957,-0.29297 -0.80469,-0.65625 -1.24219,-0.51367 -0.87695,-0.21875 -1.02148,-0.58594 -0.58399,-0.58398 -0.0742,-0.6582 -0.80273,-0.80469 -0.22071,-0.6582 0.87696,-0.58594 0.0898,-0.24805 -0.46289,-0.19922 h -0.73047 l -0.51172,0.0742 -0.73046,0.14649 -0.73047,0.21874 -0.73047,0.36524 -0.29297,0.73242 -0.73242,0.58399 -0.80274,0.58398 -1.68164,1.02539 -0.51172,0.6582 -0.29101,0.65821 -0.14649,0.51172 -0.21875,0.36718 -0.87695,0.65625 -0.2207,0.29297 -0.29297,0.51367 -0.80274,0.51172 -0.6582,0.51172 -0.87695,0.58399 -0.875,0.66015 -0.87891,0.36524 -1.02148,0.6582 -0.65821,0.0723 -0.95117,0.36524 -0.29101,0.36719 -0.87696,0.36523 -1.3164,0.6582 -0.73047,-0.51171 -0.875,-0.36719 -0.36719,-0.58399 -0.6582,-0.36523 -0.65625,-0.58398 -0.36524,-0.73243 -0.36523,-0.36523 -0.58399,-0.29297 -0.51171,-0.36523 -0.58399,-0.22071 -0.6582,-0.0723 h -1.24219 -1.0957 -1.09766 l -0.87695,-0.29297 h -0.73047 l -0.65625,-0.36524 -0.73047,-0.36523 -0.36719,-0.58399 -0.73047,-0.29296 -0.51171,-0.29297 -0.29102,-0.14649 -0.36523,-0.65625 v -0.95312 -0.65821 l 0.0723,-0.51171 v -0.36524 l -0.14648,-1.02344 -0.14453,-0.66015 -0.51172,-0.58399 -0.51172,-0.58593 -0.36524,-0.29102 -0.80468,-0.51172 h -0.73047 l -0.94922,0.14649 -0.29297,0.65625 -0.58398,0.29296 -0.65821,0.14649 -0.58398,-0.36523 -0.51172,0.21874 -0.73047,0.14649 -0.51172,-0.2207 -0.29297,-0.65821 -0.6582,-0.73047 -0.21875,-0.58593 -0.51172,-0.29297 -0.29101,-0.51172 -0.29297,-0.51172 v -0.58398 l 0.14648,-0.51368 0.0723,-0.6582 0.14648,-0.58594 0.21875,-0.36328 0.14649,-0.51367 -0.21875,-0.80469 -0.87696,-0.21875 h -0.58398 -1.68164 l -0.73047,-0.0723 h -1.0957 l -1.09766,-0.21875 -0.36523,-0.36524 -0.51172,-0.14648 -0.58399,-0.2207 -0.87695,-0.58399 -0.58399,-0.21875 -1.0957,-0.0742 h -0.36523 -1.09571 -0.95117 l -0.36523,0.21875 -0.58594,0.14649 -0.36523,0.51172 -0.73047,0.58593 -0.58399,0.36524 -0.58594,0.87695 -0.14648,0.6582 -0.72852,0.95118 -0.29296,0.58593 -0.36524,0.80469 -0.36523,0.29102 -0.58399,0.73242 -0.58398,0.87695 h -0.66016 l -0.14453,-0.29101 v -0.36524 -0.58594 -0.87695 -0.6582 l -0.36719,-0.22071 0.14844,-0.87695 -0.14844,-0.80469 -0.14453,-0.29297 -0.29297,-1.02343 -0.0742,-0.36524 v -0.36523 l -0.14648,-0.87695 v -0.36719 l 0.14648,-0.73047 0.14649,-0.73047 v -0.80469 l 0.14648,-0.58593 0.0723,-0.80274 -0.2207,-0.73242 v -0.73047 l 0.0742,-0.6582 v -0.36719 l -0.21876,-0.6582 -0.51171,-0.36524 -0.29102,-0.6582 -0.29297,-0.36524 -0.36523,-0.58593 v -0.65821 l -0.36524,-0.73046 -0.51172,-0.29297 -0.73046,-0.95117 -0.51172,-0.73047 -0.51172,-0.73243 -0.36524,-0.21875 -1.02343,-0.51367 -0.51172,-0.29101 -0.36524,-0.51172 -0.21875,-0.51367 -0.29297,-0.58399 -0.14453,-0.51367 -0.36718,-0.6582 -0.29102,-1.24414 -0.29297,-0.65625 -0.21875,-0.51368 -0.21875,-0.73046 -0.21875,-0.51172 -0.2207,-0.65821 -0.21875,-0.58398 -0.21875,-0.51367 -0.51172,-0.36328 -0.36523,-0.73243 -0.14649,-0.36523 -0.14648,-0.36719 -0.14453,-0.36328 -0.36719,-0.29297 -0.29297,-0.51367 -0.21875,-0.58398 v -0.51172 l -0.14453,-0.58594 v -0.58398 l -0.22071,-0.51172 -0.36523,-0.58594 -0.29297,-0.51172 -0.58398,-0.6582 -0.36524,-0.65821 -0.21875,-0.51367 -0.51172,-0.65625 -0.58398,-0.73242 -0.51172,-0.87695 V 125.584 l -0.0723,-0.58399 -0.14649,-0.6582 -0.0742,-0.51172 0.14649,-0.87695 -0.29102,-0.95117 -0.36523,-0.29297 -0.73047,0.0742 -0.65821,0.21875 -0.36718,0.73046 -0.94922,0.29297 -0.73047,0.36524 -0.2207,0.58593 -0.80274,0.36524 -0.58398,0.29297 -0.58399,0.14453 -0.36718,0.29297 -0.65821,0.58398 -0.51172,0.22071 -1.16796,0.80468 -0.95118,0.51172 h -0.51172 l -0.6582,-0.58594 -0.36523,-0.36523 -0.80274,-0.58594 -0.36719,-0.58398 -0.65624,-0.58399 -0.36524,-0.51172 -0.51172,0.29102 -0.58398,0.73242 -0.1543,0.6543 -0.29297,0.80469 z",
    PH16: "m 269.368,390.917l2.804,8.321l2.871,2.296l0.383,3.252l-2.297,1.914l-0.191,2.487l-3.635,4.019l-10.332,-4.592l1.149,3.252l-0.682,3.266l-0.146,2.193l0.511,1.463l0.512,0.951l0.365,1.024l-0.146,0.656l-0.658,0.588l-0.364,1.242l-0.074,0.951l0,1.17l0,0.731l0,0.949l0,1.684l0.512,0.73l0.365,0.588l0.219,0.73l0.584,0.512l0.658,0.731l0.293,0.513l0.803,0.51l0.293,0.588l0.365,0.584l0.803,1.098l0.293,0.365l0.658,0.658l0.218,0.365l0.733,0.514l0.51,0.584l0.586,0.586l0.509,0.807l0.149,1.021l0,1.17l0,0.807l0,0.804l-0.293,0.584l-0.731,1.024l-0.22,0.732l-0.803,1.17l-0.949,0.584l-0.951,0.365l-1.536,0.221l-0.949,0.146l-0.951,0l-0.73,0.221l-1.315,-0.512l-0.877,-0.146l-0.877,0.293l-0.584,0.146l-0.73,0.731l-0.512,0.584l-0.584,0.732l-0.219,0.658l-0.293,0.659l0,0.877l-0.218,0.879l-0.293,0.73l-0.145,0.584l-0.658,0.586l-0.658,1.098l-0.293,0.513l-1.022,0.219l-1.244,0.365l-1.023,0.147l-0.877,0.218l-0.875,0.147l-1.024,0.584l-0.949,0.66l-0.877,0.805l-0.805,0.365l-0.293,0.584l-0.949,0.512l-0.584,-0.073l-0.804,-0.293l-0.584,-0.146l-0.805,-0.584l-0.731,-0.074l-0.511,-0.073l-0.51,0.073l-1.024,0.074l-0.73,0.146l-1.463,0.584l-0.805,0.221l-0.656,0.658l-0.221,0.512l-0.802,0.512l-0.877,0.222l-0.951,0.364l-0.729,0.584l-0.879,0.222l-1.096,0l-1.095,0.731l-0.365,0.656l-1.024,0.512l-0.951,0.293l-0.658,0.511l-0.366,0.366l-1.095,0.66l-1.168,0.658l-0.805,-0.072l-0.73,0.513l0,1.243l0.146,0.877l0.291,0.949l0.072,0.805l-0.109,0.246c0.068,0.378,0.133,0.728,0.201,1.101l0.049,0.039l0.512,0.367l0.73,0.805l0.073,0.145l0.293,0.293l0.218,0.511l0.44,0.661l0.218,0.511l0.219,0.293l0.512,0.731l0.512,0.511l0.584,0.733l0.439,0.877l0.219,0.293l0.512,1.244l0.293,1.17l0.511,0.291l0.364,0.513l0.513,0.731l0.145,0.437l0.293,0.586l0.291,0.586l0.511,0.729l0.293,0.732l0.659,0.586l0.365,0.584l0.146,0.367l0.657,1.389l0.293,0.365l0.146,0.293l0.291,0.512l0.367,0.293l0.291,0.293l0.073,0.293l0.22,0.514l0.145,0.293l0.367,0.876l0.512,0.584l0.072,0.221l0.074,0.512l0.145,0.293l0.293,0.365l0.22,0.512l0.147,0.367l0.291,0.363l0.439,0.66l0.073,0.219l0.146,0.293l0.145,0.219l0.513,0.805l0.291,0.439l0.293,0.438l0.364,0.513l0.367,0.658l0.365,0.512l0.145,0.365l0.365,0.731l0.365,0.365l0.221,0.365l0.291,0.658l0.293,0.805l0.291,0.586l0.293,0.438l0.291,0.732l0.146,0.291l0.365,0.514l0.366,0.73l0.293,0.514l0.365,0.805l0.219,0.365l0.513,0.513l0.145,0.217l0.146,0.367l0.147,0.366l0.365,0.365l0.147,0.293l0.365,0.367l0.146,0.438l0.293,0.582l0.293,0.439l0.219,0.293l0.146,0.367l0.073,0.438l0.293,0.511l0.365,0.659l0.219,0.365l0.293,0.367l0.146,0.293l0.145,0.291l0,0.221l-0.121,0.91l0.203,0.49l0.584,0.586l0.146,0.367l0.367,0.584l0.293,0.586l0.438,0.731l0.146,0.73l1.096,0.586l0.584,0l0.877,-0.514l0.512,-0.218l0.877,-0.512l0.365,-0.147l0.877,-0.584l0.658,-0.072l1.168,0.584l1.682,0.805l0.511,0.365l0.805,0.44l1.023,0.583l0.95,0.221l0.804,0.584l0.584,0.658l0.731,0.438l0.584,0.148l0.73,0.512l1.024,0.584l0.802,0.365l0.44,0.147l1.389,0.584l0.365,0.367l0.951,0.51l0.584,0.879l0.803,0.293l0.22,0.73l-0.146,0.805l-0.074,0.66l0,0.658l0.074,0.512l0,0.877l0,0.951l0.072,0.732l0.367,0.731l0.073,0.949l-0.366,0.66l0,0.365l0.366,1.098l0.146,0.584l-0.146,0.367l0.365,0.949l-0.293,0.514l0,0.584l0.074,1.317l0.293,0.804l0.145,0.512l0.146,0.877l-0.146,0.295l-0.145,0.804l-0.221,0.512l-0.146,0.805l0,0.584l-0.145,0.879l-0.367,0.879l0.074,0.877l0.219,0.804l-0.146,0.66l-0.145,0.584l-0.146,0.584l0,0.659l-0.073,0.658l-0.146,0.807l-0.367,1.681l-0.073,0.586l0,0.438l0.073,0.511l-0.145,0.733l-0.146,0.877l-0.147,0.365l0,0.367l-0.072,0.805l-0.147,0.658l-0.072,0.584l-0.146,1.025l0.074,1.096l-0.367,1.316l0.148,0.586l0.219,0.657l0.219,0.513l0.365,1.024l0.219,0.363l0.22,0.879l0.291,0.73l0.219,0.588l0,0.877l-0.437,0.805l-0.147,0.951l-0.219,0.658l0,0.731l-0.146,0.439l-0.44,1.315l-0.365,0.586l0,0.656l-0.219,0.732l-0.072,0.879l-0.219,0.365l-0.146,0.512l-0.147,0.586l-0.146,0.658l-0.147,0.584l-0.293,0.586l-0.365,0.731l-0.074,0.879l-0.291,0.437l-0.219,0.367l0.147,0.364l0.291,0.732l-0.147,0.512l-0.219,0.877l0.147,0.365l0.219,0.658l-0.147,0.805l-0.512,0.732l0.147,0.365l0.219,0.366l0.293,0.584l0.072,0.586l-0.072,0.365l-0.438,0.512l0.145,0.513l0.22,0.512l0.145,0.584l-0.072,0.367l-0.219,0.365l-0.147,0.805l0.073,0.732l0.658,0.584l-0.438,0.659l-0.298,0.298c-0.001,0.18,-0.001,0.248,-0.002,0.456l0.08,0.488l0.586,0.879l-0.659,0.824c0.004,0.477,0.011,0.996,0.018,1.518l0.129,0.291l0.072,0.513l-0.146,0.512l-0.037,0.287c0.006,0.29,0.02,0.613,0.027,0.91l0.156,0.412l0.073,0.657l0.072,0.878l0.146,0.659l-0.38,-0.399c0.008,0.249,0.014,0.485,0.023,0.735l0.51,0.589l0,-0.701l0.658,-0.806l1.096,-0.805l1.244,-0.805l1.021,-0.365l0.879,-0.365l0.584,-1.608l0.803,-1.099l1.9,-0.877l1.096,-0.658l1.461,-0.805l1.316,-0.438l0.877,-0.806l1.022,-0.365l-0.364,-2.487l1.899,0.147l1.098,-0.147l1.314,-1.097l0.877,0.877l1.023,0.658l2.485,0.367l0.219,0.113l0.365,-0.994l1.242,-2.926l0.512,-2.633l1.023,-1.83l2.412,-6.802l0.584,-1.389l0.805,-1.391l0.584,-1.609l0.072,-1.098l0.586,-1.095l0.51,-1.684l0.732,-2.561l0,-3l0.803,-2.121l-0.072,-2.048l0,-4.461l0.511,-1.098l0.073,-2.049l0.293,-2.119l0.072,-1.609l0.293,-2.926l0.293,-1.684l0.072,-1.39l0.438,-1.682l0.22,-2.121l0.438,-2.854l0.584,-1.609l0.584,-1.902l1.098,-2.119l0.437,-1.829l0.584,-1.902l0.293,-1.391l0.805,-2.048l0.877,-1.682l0.437,-1.902l0.512,-1.389l1.1,-2.195l0.509,-0.877l0.731,-1.024l0.291,-1.097l0.879,-0.731l0.511,-0.877l0.438,-0.732l0.584,-2.194l0.221,-1.244l1.242,-0.879l1.533,-0.804l1.023,-0.877l1.61,-0.731l2.191,-0.806l1.098,-1.389l1.605,-0.438l0.805,-0.439l0.584,0.586l0.293,0.584l0.293,1.683l0.219,1.534l1.095,0.732l0.805,0.221l1.096,0.439l1.607,0.805l0.293,0.51l0.877,0.515l1.096,0.438l1.099,0.584l1.096,0.805l1.096,0.732l1.9,0.072l2.119,0.073l1.096,-0.805l2.561,-0.805l2.119,-0.219l2.047,-0.877l1.679,-0.515l2.412,-1.535l1.315,-0.805l1.39,-0.805l0.438,-1.097l0.73,-0.805l0.584,-1.607l0.512,-2.342l0.512,-1.317l0.584,-0.806l0.514,-0.877l0.585,-1.901l0.51,-1.609l0.438,-0.73l0.439,-1.61l-0.074,-1.244l-0.293,-1.021l0,-1.61l0,-0.879l0.732,-1.316l0,-0.438l0.731,-1.388l0.221,-1.319l1.021,-1.244l1.389,-1.314l0.804,-1.242l1.389,-1.1l1.242,-0.512l2.047,-0.293l0.438,-0.584l1.828,-0.293l1.39,-0.804l1.241,-0.44l1.39,-1.025l1.389,-1.022l0.803,-0.22l1.095,0.294l1.536,0.584l1.095,0.731l1.317,1.025l1.023,1.242l1.242,0.733l1.315,1.021l1.097,0.586l1.022,0.584l0.807,0.588l2.117,0l1.681,-0.804l1.096,-0.733l1.902,-0.805l2.19,-1.392l1.607,-0.51l-1.17,0.365l-0.437,-0.365l-0.44,-0.295l-0.802,-0.437l-1.243,-0.512l-0.804,-0.438l-0.584,-0.222l-0.805,-0.582l-0.658,-0.44l-0.438,-0.146l-0.513,-0.291l-0.584,-0.073l-0.656,-0.292l-0.293,-0.366l-0.147,-0.367l-0.291,-1.025l-0.148,-0.584l0,-0.584l0.076,-0.586l0.072,-0.365l0,-0.512l0,-0.367l-0.148,-0.438l-0.145,-0.512l-0.074,-0.22l0.074,-0.438l0,-0.584l0,-0.584l0,-0.584l-0.074,-0.22l-0.219,-0.659l-0.144,-0.367l-0.293,-0.51l-0.147,-0.22l-0.365,-0.514l-0.221,-0.437l-0.291,-0.147l-0.658,-0.221l-0.293,-0.144l-0.293,-0.295l-0.144,-0.219l-0.147,-0.365l-0.293,-0.145l-0.363,-0.22l-0.295,-0.586l-0.291,-0.219l-0.514,-0.146l-0.289,-0.292l-0.439,-0.439l-0.366,-0.586l-0.437,-0.293l-0.441,-0.365l-0.291,-0.219l-0.366,-0.439l-0.22,-0.293l-0.366,-0.364l-0.218,-0.293l-0.877,-0.585l-0.293,-0.366l-0.145,-0.22l-0.221,-0.512l-0.658,-0.584l-0.365,-0.221l-0.219,-0.219l-0.509,-0.439l-0.223,-0.293l-0.438,-0.365l-0.511,-0.512l-0.438,-0.365l-0.732,-0.514l-0.147,-0.219l-0.511,-0.513l-0.44,-0.364l-0.291,-0.439l-0.144,-0.219l-0.221,-0.439l-0.219,-0.293l-0.805,-0.584l-0.293,-0.44l-0.365,-0.22l-0.584,-0.731l-0.584,-0.365l-0.586,-0.73l-0.218,-0.514l0.074,-0.291l0.072,-0.074l1.242,0.146l0.949,0.074l0.284,-0.172c-0.171,-0.015,-1.965,-0.127,-1.965,-0.127l-0.073,-0.365l-0.218,-0.439l-0.147,-0.584l-0.218,-0.586l-0.073,-0.512l-0.074,-0.437l-0.219,-0.438l-0.146,-0.221l-0.438,-0.439l-0.293,-0.365l-0.293,-0.293l-0.218,-0.586l-0.366,-0.219l-0.365,-0.584l-0.586,0.072l-0.73,0l-1.02,-0.218l-0.658,-0.149l-0.951,-0.072l-1.608,-0.145l-0.802,-0.074l-0.733,-0.074l-0.293,0l-0.217,-0.219l-0.365,0.293l-0.513,0.145l-0.219,-0.145l-0.365,-0.219l-1.098,0.293l-0.145,0.217l-0.586,0.367l-0.584,0.145l-0.439,0.074l-0.803,0.219l-0.365,0.072l-0.805,0.44l-0.511,0.291l-0.221,0l-1.242,0.367l-0.657,0.146l-1.023,0l-0.437,0.075l-0.954,-0.075l-0.804,-0.074l-0.512,0.221l-0.365,0.293l-0.584,0.219l-0.729,0.293l-0.511,0.146l-1.024,-0.074l-0.73,-0.291l-0.512,-0.365l-0.949,0l-0.951,0l-0.659,0.074l-0.218,0.072l-0.733,0.219l-0.289,-0.147l-0.074,-0.293l0,-0.511l0,-0.366l0.074,-0.511l-0.074,-0.586l-0.145,-0.512l-0.146,-0.367l-0.072,-0.217l0,-0.293l0.072,-0.367l0,-0.219l0.074,-0.293l-0.074,-0.293l-0.147,-0.437l-0.144,-0.512l-0.295,-0.514l-0.291,-0.584l-0.584,-0.293l-0.805,-0.074l-0.511,-0.144l-0.514,-0.223l-0.584,-0.293l-0.947,0l-0.223,0.221l-0.365,0.513l-0.51,0.221l-0.73,0.291l-0.584,0l-0.95,0.074l-0.951,0l-0.512,0.291l-0.222,0.659l-0.219,0.511l-0.365,0.66l-0.145,0.582l-0.367,0.588l-0.365,0.512l-0.291,0.293l-0.586,0.365l-0.729,0.438l-0.439,0.367l-0.656,0.217l-0.512,0.148l-0.512,0.145l-0.365,0.295l-0.365,0.218l-0.438,0.512l-0.295,0.293l-0.218,0.293l-0.221,0.293l0,0.365l-0.145,0.365l-0.218,0.586l-0.073,0.659l-0.293,0.73l-0.074,0.805l0,0.513l0,0.731l0,0.219l0.074,0.73l0,0.658l0.145,0.367l0.074,0.584l-0.074,0.512l-0.219,0.44l-0.584,0.22l-1.168,0.145l-0.879,0l-1.095,0.074l-1.329,0l-0.513,-0.293l-0.948,-0.146l-0.73,0l-0.658,0.22l-0.512,0l-0.584,-0.22l-0.805,0.146l-0.656,1.024l-0.021,0.189l-0.334,-0.041l-0.657,-0.365l-0.439,-0.293l-0.219,-0.365l-0.365,-0.438l-0.584,-0.146l-0.437,-0.366l-0.514,-0.513l-0.512,-0.584l-0.365,-0.147l-0.365,-0.658l-0.584,-0.586l-0.44,-0.437l-0.437,-0.147l-0.805,-0.658l-0.365,0l-0.584,-0.363l-0.731,-0.881l-0.146,-0.584l-0.293,-0.584l-0.365,-0.514l-0.073,-0.805l0,-0.511l0,-0.438l-0.22,-0.732l-0.366,-0.438l-0.584,-0.658l-0.365,-0.367l-0.586,-0.365l-0.291,-0.584l0,-0.877l0,-0.731l0.51,-0.586l0.512,-0.367l1.023,0l0.367,0.149l0.659,0.656l0.437,0.879l0,0.437l0.291,0.512l0.44,0.223l0.584,0.144l0.365,0.072l0.804,-0.511l0.731,-0.877l0.146,-0.588l0.293,-0.877l0.803,-0.877l0.147,-0.365l0.437,-0.586l0.512,-1.096l0.146,-0.588l0,-0.584l0,-0.586l0,-0.511l0.147,-0.584l0,-0.293l0.146,-0.366l1.313,-0.877l0.586,-0.222l0.22,-0.291l0.364,-0.514l0.588,-0.291l0.363,-0.514l0.072,-0.656l0.219,-0.805l0,-0.732l-0.219,-0.512l-0.072,-0.586l0,-0.437l0.146,-0.733l0.629,-0.281l-0.043,-0.014l-0.365,-0.072l-0.879,-0.291l-0.875,-0.367l-0.512,-0.219l-0.584,-0.367l-1.025,0.074l-1.096,-0.146l-0.218,-0.365l-0.586,-0.512l-0.073,-0.588l0.073,-0.291l0.146,-0.586l0.074,-0.73l0.512,-0.659l0.219,-0.586l0.511,-0.511l0.438,-1.098l0.439,-0.658l0.219,-0.365l0.293,-0.366l0.291,-0.513l0.367,-0.584l0.364,-0.438l0.365,-0.439l0.365,-0.438l0.072,-0.512l0.368,-0.66l0.072,-0.363l0.365,-0.805l0,-0.586l-0.365,-0.513l0,-0.364l-0.877,-0.585l-0.365,-0.366l-0.44,-0.586l-0.365,-0.439l-0.584,-0.365l-1.041,-0.594l-0.512,-0.147l-0.584,-0.218l-1.095,-0.293l-0.293,-0.147l-1.315,-0.658l-0.586,-0.437l-0.658,-0.293l-0.512,-0.075l-1.023,-0.437l-0.365,-0.293l-0.366,-0.367l-0.511,-0.366l-0.293,-0.363l-0.291,-0.221l-0.366,-0.292l-0.511,-0.659l-0.805,-0.437l-0.291,-0.44l-0.586,-0.365l-0.584,-0.584l-0.73,-0.367l-0.657,-0.584l-0.804,-0.365l-0.877,-0.514l-0.656,-0.584l-0.514,0l-1.168,-0.146l-2.047,-0.073l-1.168,-0.365l-0.365,-0.367l-2.412,-1.17l-0.95,-0.731l-0.367,-0.439l-0.656,-0.584l-0.367,-0.586l-0.877,-0.584l-0.438,-0.586l-0.365,-0.512l-0.512,-0.146l-1.169,0.074l-1.536,0l-1.097,-0.146l-0.657,-0.147l-0.951,-0.072l-0.584,0l-1.023,0.072l-0.512,-0.072l-0.437,-0.219l-0.731,0l-0.73,0l-0.805,0l-0.584,0z",
    PH17: "m 10.852435,89.81855 -0.292969,0.14649 -0.583985,0.36328 H 9.245013 L 8.219622,90.0373 7.196185,89.89082 H 6.246966 5.368059 l -0.583984,0.36523 -0.365234,0.51367 -0.365235,1.09571 -0.365234,1.09765 0.07227,1.31641 0.583984,1.16992 0.21875,1.46289 -0.144531,0.66016 -0.292969,1.02344 v 0.36718 l -0.365234,0.51172 -0.583985,0.58399 -0.292968,0.58593 -0.291016,0.73047 -0.511719,0.58399 -0.07422,0.80664 -0.583984,0.58398 -0.513672,0.22071 -0.291016,0.36523 -0.583984,0.6582 -0.511719,0.65821 -0.511718,0.36523 -0.291016,0.36719 -0.511719,0.51172 -0.511718,0.51172 -0.511719,0.58593 -0.365235,0.36328 -0.804687,0.58594 -0.802735,0.14649 -0.511718,0.6582 -0.949219,0.80469 -0.804687,0.29101 -0.658204,0.87891 -0.804687,0.29297 -0.65625,0.6582 c 0,0 -0.510469,0.21997 -0.730469,0.29297 -0.568067,0.25247 -1.346306,0.65032 -2.021484,0.94726 l 0.707031,0.58985 1.097656,0.95117 1.535157,0.51172 0.583984,0.58398 0.583984,0.51172 0.65625,0.29297 0.585938,1.09766 0.4375,0.8789 1.169922,1.31446 0.583984,0.4414 0.804688,1.90039 0.949218,0.51172 1.607422,0.87695 1.023438,0.73243 0.951172,0.73047 0.65625,0.58593 0.730468,0.87696 1.681641,0.87695 0.4375,0.51172 0.730469,0.8789 0.804687,0.94922 0.658203,0.43946 0.365235,0.36718 0.802734,0.58399 0.802734,0.80859 0.730469,0.80469 0.730469,0.66016 0.291015,0.58398 1.169922,1.83008 0.511719,0.29101 0.804688,0.73243 0.658203,0.80273 0.730468,0.95117 1.460938,0.51172 0.658203,0.87695 1.023438,0.80469 0.730468,0.6582 0.4375,0.66016 0.804688,0.6582 0.802734,0.73047 0.658203,0.80469 0.732422,0.36523 0.876953,0.65821 -0.804687,0.58593 -0.658203,1.53516 0.220703,1.53711 0.65625,0.73047 0.730469,0.87891 0.658203,0.6582 0.876953,0.80469 0.730469,0.73046 0.658203,2.70508 0.658203,2.3418 0.802734,0.6582 0.732422,1.53711 0.876953,0.65821 0.509766,0.87695 1.023437,0.58594 1.316407,1.02343 0.804687,0.58594 0.802734,0.6582 0.951172,1.09766 0.802735,0.6582 0.658203,1.38868 0.658203,0.58593 0.65625,0.65821 0.658203,1.68164 0.876953,0.58398 0.732422,1.6836 0.730469,1.39062 1.535156,1.53516 0.583984,0.58593 0.804688,0.73047 0.65625,0.95117 0.804688,1.53711 1.023437,0.65821 0.583984,0.80468 0.511719,1.31641 0.802734,0.58398 0.876954,0.95118 0.876953,1.53711 0.802734,0.73047 0.585938,0.80468 0.730468,1.53711 0.730469,1.31641 0.876953,0.95117 0.583985,0.6582 0.804687,1.39063 0.65625,0.6582 0.658203,1.53516 0.876953,0.80468 0.730469,0.73047 0.730469,1.46485 0.730469,0.80468 0.951172,0.87696 0.730468,0.58398 0.730469,1.46289 0.585937,0.73243 0.875,1.60742 0.730469,1.53711 0.658203,1.09765 0.804688,1.60938 0.658203,1.46289 0.804682,0.6582 0.875,1.02344 0.80469,1.31641 0.58398,1.46289 0.65821,0.80468 1.02344,1.60938 0.51171,1.16992 0.87696,1.53516 0.73047,1.02539 0.6582,0.4375 -0.58399,0.43945 -0.80468,0.73047 -0.65821,0.73242 -1.38867,0.58398 -0.4375,1.16993 0.0723,3.80273 0.87695,0.73242 0.94922,1.75391 0.58398,0.58594 0.73047,1.38867 0.80469,0.95312 0.10156,0.22266 0.0391,-0.006 0.65624,1.44531 0.5918,0.45899 0.11914,0.10742 0.9043,0.76758 0.80469,1.97461 0.65625,0.95117 0.6582,1.39062 0.73242,0.80469 0.80274,1.53711 0.80468,0.6582 0.50977,1.53516 1.24414,0.87891 0.51172,0.73047 0.87695,0.6582 0.73047,1.60937 0.58594,0.58399 -0.13672,1.08984 0.36328,0.1543 0.58399,0.14648 h 0.51171 1.02149 l 1.09765,0.14649 1.46094,0.29101 0.87695,-0.21875 1.16993,-0.36523 h 0.87695 l 1.53516,-0.73047 0.6582,-0.36719 0.73047,-0.21875 0.73047,-0.51172 0.65625,-0.51172 0.95117,-0.58593 h 0.94922 l 0.6582,0.29297 1.242193,0.14648 h 0.6582 l 1.16992,0.21875 0.80469,0.29297 0.875,0.29101 h 0.58594 l 0.73047,-0.29101 0.36523,-0.14649 0.73047,-0.0742 0.6582,0.36718 0.51172,0.65625 0.14649,0.51368 0.29101,0.65624 0.73242,0.58594 0.72852,0.14649 0.87695,-0.58594 0.51172,-0.58399 0.51172,-0.73242 0.51172,-0.36328 0.95117,-0.2207 1.90039,-0.0723 0.16016,0.01 0.0586,-0.59375 0.14649,-0.87891 0.14648,-1.02344 -0.21875,-0.95117 -0.51367,-1.02343 -0.875,-1.02344 -1.09766,-0.51172 -1.7539,-0.29297 -1.97266,-0.29297 -1.0957,-0.29101 -0.51172,-0.58594 -0.14649,-0.6582 -0.58398,-1.09766 v -0.87695 -0.51172 l -0.2207,-0.80469 0.0742,-0.95117 -0.14648,-0.87891 -0.21875,-0.6582 -0.51172,-0.73047 -0.51172,-0.80469 -0.80469,-0.29297 -1.82617,-0.21875 -0.8789,0.36524 -0.58399,0.36523 -1.681643,0.73242 -0.58398,0.0723 -0.58399,-0.14648 -0.6582,-0.36524 -0.21875,-0.51172 v -0.73242 l 0.58398,-0.6582 0.58594,-0.21875 0.50977,-0.66016 0.6582,-0.73047 0.35352,-0.2539 -0.0684,-0.2793 -0.36524,-0.80273 -0.51172,-0.51172 -0.6582,-0.73243 -0.36523,-0.36523 -0.51172,-0.87695 -0.50977,-0.51172 -0.73242,-0.58594 -0.36523,-0.29101 -0.80469,-0.58594 -0.65821,-0.65821 -0.51171,-0.73046 -0.21875,-0.36524 -0.29102,-0.51172 -0.6582,-0.36719 -0.14649,-0.73046 0.0723,-0.65821 0.51367,-1.02343 0.50977,-0.22071 0.0742,-0.58398 -0.0742,-0.65821 -0.29102,-0.51171 -0.36719,-0.73243 -0.14453,-0.51171 -0.36719,-0.36524 -0.73046,-0.80469 -0.58399,-0.73242 -0.58594,-0.0742 v -0.51172 l -0.21875,-0.80273 -0.58398,-0.58594 -0.6582,-0.14648 -0.73047,0.0742 -0.22071,0.29297 -0.87695,0.58398 h -0.51172 l -0.29101,0.51172 -0.29297,0.73242 -0.6582,0.36719 -0.875,0.21875 -0.95118,0.21875 -0.14648,0.36719 -1.0957,0.0723 h -0.87696 l -0.94922,-0.51172 -0.6582,-0.95117 -0.14648,-0.36523 -0.36524,-0.58594 -0.29101,-0.51172 -0.58594,-0.95117 -0.29102,-0.80469 -0.29297,-0.6582 -0.29101,-0.51172 -0.51172,-0.80469 -0.29297,-0.14648 -0.72851,-1.02344 -0.51368,-0.87891 -0.21875,-0.73047 -0.21875,-0.80468 -0.36523,-1.02344 v -0.29297 l 0.14648,-0.87695 -0.2207,-0.73047 0.0742,-1.09766 -0.0742,-0.6582 -0.14453,-0.73242 v -0.73047 l -0.0742,-0.6582 -0.0742,-0.51368 v -0.58398 l -0.14453,-1.09766 -0.0742,-0.87695 -0.14648,-0.36523 -0.58399,-0.95118 -0.14648,-0.14648 -0.14453,-0.80469 v -0.51172 l 0.0723,-0.36523 -0.14648,-0.58594 -0.36524,-0.73047 v -0.58398 l -0.14648,-0.51172 -0.51172,-0.87695 -0.36523,-0.66016 -0.29297,-0.73047 -0.36524,-0.66016 0.0723,-0.80468 -0.21875,-0.94922 -0.58398,-0.66016 -0.58399,-0.58398 -0.51172,-0.58594 -0.51172,-0.73047 -0.14648,-0.36523 -0.14453,-0.65821 -0.36524,-0.36718 -0.58398,-0.58399 -0.29297,-0.51172 -0.51172,-0.36718 -0.14648,-0.36524 -0.36524,-0.4375 -0.292963,-0.51172 -0.730469,-0.58593 -0.583984,-0.36524 -0.583985,-0.58594 -0.365234,0.29297 -0.511719,-0.29297 -0.732422,-0.21875 -0.509765,-0.29296 -0.513672,-0.51172 -0.291016,-0.80469 -0.585937,-0.58594 -0.363282,-0.6582 -0.367187,-0.58399 v -0.8789 l -0.509766,-0.58399 v -0.87695 l -0.658203,-1.02539 -0.292969,-0.51172 -0.21875,-0.51172 -0.146484,-0.73242 -0.21875,-0.58398 -0.365234,-0.80469 -0.21875,-0.73242 -0.220704,-0.73047 -0.363281,-0.87696 -0.220703,-0.51171 -0.292969,-0.73047 -0.21875,-0.36719 -0.146484,-0.58398 -0.146484,-0.51172 -0.144532,-0.58594 v -0.6582 l -0.365234,-0.95118 -0.367187,-0.58593 -0.291016,-0.58399 -0.511719,-0.51172 -0.585937,-0.6582 -0.07227,-0.58594 -0.511719,-0.6582 -0.658203,-0.51172 -0.583984,-0.6582 -0.220703,-0.51172 -0.07227,-0.36524 -0.292969,-0.36718 -0.509765,-0.36524 -0.367188,-0.6582 -0.875,-0.6582 -0.146484,-0.80469 v -0.58594 l 0.365234,-0.65625 0.146485,-0.6582 0.21875,-0.51172 0.365234,-0.2207 0.511719,-0.65821 0.292968,-0.6582 v -0.6582 l -0.148437,-0.65821 -0.802734,-0.58398 -0.583985,-0.36719 -0.292969,-0.58398 -0.511718,-0.51172 -0.365235,-0.21875 -0.732422,-0.58594 -0.802734,-0.87695 -0.583984,-0.36524 -0.658203,-0.36718 -0.876954,-0.51172 -0.949218,-0.58399 -0.658204,-0.29297 -0.876953,-0.58398 -0.730468,-0.29297 -0.658203,-0.2207 -0.363282,-0.21875 -1.097656,-0.51172 -0.367188,-0.21875 -1.021484,-0.6582 -0.658203,-0.51172 -0.583984,-0.29297 -0.365235,-0.36719 -0.658203,-0.51172 -0.804687,-0.8789 -0.728516,-0.65625 -0.804688,-0.29297 h -0.730468 l -1.097656,-0.14649 -1.021485,-0.0723 -0.732422,-0.21875 -0.509765,-0.22071 -0.21875,-0.36523 -0.876954,-0.6582 -0.367187,-0.36719 -0.365234,-0.29102 -0.583985,-0.6582 -0.365234,-0.36523 -0.365234,-0.0742 -0.365235,-0.51172 -0.365234,-0.58594 -0.292969,-0.58398 -0.291016,-0.80469 0.21875,-0.36523 0.658204,-0.36524 0.292968,-0.58594 v -0.73047 l -0.07227,-0.6582 -0.220703,-0.36523 -0.730469,-0.73242 -0.365235,-0.65821 -0.365234,-0.36523 v -0.58606 l -0.07422,-0.6582 -0.21875,-0.65821 -0.730469,-0.51171 -0.511718,-0.29102 -0.511719,-0.29297 h -0.804687 l -0.876954,-0.95117 -0.730468,-0.36524 v -0.87695 l -0.365235,-0.73242 -0.804687,-0.87695 -0.21875,-0.80469 -0.07227,-0.6582 v -0.51172 l 0.365234,-0.51172 0.585938,-0.51367 0.582031,-0.51172 0.660157,-0.36524 0.658203,-0.36523 1.167968,-0.29297 1.095703,-0.14648 0.876954,-0.14649 1.095703,-0.51172 1.242187,-0.87695 0.658203,-0.6582 0.876953,-1.02539 0.658204,-0.73047 0.365234,-1.02344 0.658203,-0.95117 0.173828,-0.1836 -0.398437,-0.39843 -0.511719,-0.51172 -0.291016,-0.36524 -1.097656,-0.87695 -0.583984,-0.66016 -0.802735,-0.6582 -0.583984,-0.58398 -0.732422,-0.73243 -0.802734,-0.73046 -0.585938,-0.80469 L 22.979553,99.91425 22.32135,99.25605 21.735412,98.74433 21.444396,98.3791 20.7901,97.78925 20.424865,97.27754 20.057678,96.61933 19.254943,96.2541 18.889709,95.96113 18.37799,95.44941 l -0.513672,-0.58594 -0.728515,-0.58398 -0.07422,-0.0742 -0.365234,-0.73047 -0.730469,-0.29297 -0.730469,-0.58398 -0.583984,-0.6582 -0.802735,-0.65821 -0.585937,-0.6582 -0.583985,-0.51172 -0.876953,-0.2207 z",
    PH18: "m 224.18309,296.24304 -0.58398,0.29102 -0.36523,0.51367 -0.14649,0.51172 v 0.36523 l -0.0742,0.73047 -0.21875,0.58594 -0.14648,0.36523 -0.21875,0.58594 -0.14649,0.36523 -0.0723,1.09571 -0.14648,0.29297 -0.36524,0.87695 -0.14453,0.51172 -0.36719,0.80664 -0.14453,0.36523 -0.14648,0.58594 -0.29297,0.36328 v 0.51367 l -0.21875,0.80469 -0.14649,0.36523 -0.21875,0.65821 -0.36523,0.87695 -0.21875,0.58594 -0.14649,0.36523 -0.14648,0.36524 -0.14453,0.29297 -0.43945,1.02343 -0.36524,0.36719 -0.58398,0.87695 -0.36524,0.36524 -0.58594,0.51172 -0.36328,0.51172 -0.29296,0.36718 -0.4375,0.58399 -0.73047,0.36523 v 1.02344 l 0.21875,0.51172 0.4375,0.43945 0.2207,0.58594 v 0.73047 l 0.0723,0.8789 0.29102,0.80469 0.29297,0.36524 0.6582,0.4375 0.87696,0.14648 0.87695,0.0723 0.73047,0.36523 0.6582,0.14648 0.29102,0.66016 0.36523,0.65625 0.4375,0.36719 0.58398,0.6582 0.58594,0.36524 0.4375,0.66015 0.36524,0.36524 0.36523,0.80468 0.29297,0.21875 0.6582,1.02344 0.58399,0.58594 0.36523,0.80469 0.4375,0.6582 0.14649,0.87695 0.36523,0.80469 0.29102,0.58398 0.36523,0.36719 0.43945,0.51172 0.4375,0.87695 0.29297,0.65821 0.14649,1.02539 -0.0195,0.22461 0.16601,-0.082 h 0.58594 l 1.16797,0.14648 0.80469,0.14648 0.51171,0.14649 0.80469,0.14648 0.65625,0.29102 0.6582,0.43945 0.36524,0.14649 0.80469,0.51171 0.58398,0.21876 0.58398,0.21874 0.58594,0.29297 0.36524,0.29297 0.58398,0.29102 0.87891,0.4375 0.94922,0.36719 0.51171,0.73046 0.36524,0.29297 0.58398,0.65821 0.4375,0.4375 0.73047,0.6582 0.36524,0.29297 0.8789,0.58398 0.58399,0.21875 0.36523,0.21875 0.43945,0.36719 1.02149,0.36523 h 0.87695 0.87891 l 0.36328,-0.0723 0.87695,-0.36719 0.43946,-0.14453 0.58398,-0.29297 0.95117,-0.58594 h 1.02149 l 1.16992,-0.36523 0.36523,-0.0742 0.58399,-0.4375 0.6582,-0.14648 0.73047,-0.21875 0.73047,-0.21875 0.87695,-0.14649 0.36524,-0.14648 0.36523,-0.29297 0.73047,-0.36524 1.53515,-0.36523 h 0.65821 l 0.87695,-0.14648 0.21875,-0.14649 0.4375,-0.21875 1.31641,-0.58398 0.875,-0.80469 0.14648,-0.51367 0.4375,-0.51172 0.73242,-0.36524 0.14454,-0.14648 0.29296,-0.58398 0.65625,-0.43946 0.58594,-0.4375 0.87695,-0.58593 0.29297,-0.51172 0.4375,-0.51172 0.87696,-0.58594 0.29297,-0.58398 0.51171,-0.51172 0.4375,-0.36719 0.58399,-0.58399 0.36523,-0.14648 0.51172,-0.29297 0.51172,-0.4375 0.36719,-0.51172 0.58398,-0.36718 0.58399,-0.29102 0.21875,-0.51367 0.58593,-0.51172 0.4375,-0.4375 0.51172,-0.58594 0.29297,-0.14648 0.4375,-0.36524 0.29102,-0.4375 0.43945,-0.58593 0.36523,-0.4375 0.4375,-0.36719 0.58594,0.0742 0.36524,-0.36719 0.6582,-0.0723 0.29102,0.14649 0.58398,0.14648 0.87695,0.21875 h 0.36524 l 0.6582,0.0742 0.36523,0.0723 h 1.16993 l 0.58398,0.0742 0.87695,0.0723 0.80469,-0.0723 0.94922,0.14648 0.51367,0.21875 0.29102,0.14648 h 0.95117 0.58398 l 0.4375,-0.21875 0.43946,-0.14648 0.73047,-0.2207 0.58398,-0.36524 0.87695,-0.51172 0.87696,-0.0723 h 0.58398 l 0.6582,-0.14649 h 0.58399 c 0.0262,0.0103 0.05,0.0229 0.0762,0.0332 l -0.002,-0.0293 0.14648,-1.09766 0.14649,-0.36523 0.0723,-0.58398 v -1.4629 -1.02539 l -0.58594,-1.02343 -0.65625,-0.87696 -0.36523,-0.43945 -0.29297,-0.73047 -0.58398,-0.80664 -0.36524,-0.58398 -0.36523,-0.73047 -0.14649,-0.66016 -0.51172,-0.80469 -0.51171,-0.51172 h -0.0723 l -0.73048,-0.14648 -0.73047,0.0742 -0.36523,0.14648 -0.43945,0.14649 -1.09571,0.4375 -1.0957,0.58594 -0.43945,0.14648 -0.51172,0.29102 -1.38868,0.73046 -0.36523,0.22071 -1.09766,0.51172 -0.51171,0.21875 -0.58399,0.14648 -0.58398,-0.0723 -0.36524,-0.29296 -0.21875,-0.36524 -0.14648,-0.58594 -0.21875,-0.6582 -0.29297,-0.58398 -0.29297,-0.29297 -0.29297,-0.95117 -0.29101,-0.4375 -0.36719,-0.73243 -0.21875,-0.4375 -0.14649,-0.36523 -0.14648,-0.87891 -0.14453,-0.36523 -0.29297,-0.58398 -0.29297,-0.58594 -0.4375,-0.36524 -0.14648,-0.36523 -0.21875,-0.51367 -0.36524,-0.21875 -0.6582,-0.0742 h -0.4375 -0.6582 l -1.24219,0.14648 -1.0957,0.14649 -0.95118,0.14648 -1.02343,0.21875 -1.16993,0.14844 -0.875,0.21875 -0.95117,0.0742 -0.87695,-0.36719 -0.94922,-0.51172 -0.58594,-0.14648 -0.36523,-0.0742 -0.87695,-0.14453 -0.875,-0.36524 -0.80469,-0.14648 -0.87696,-0.0723 -0.4375,0.29102 -0.73046,0.36523 -0.87696,0.80469 -0.50976,0.43945 -0.87891,0.36524 -0.65625,0.51172 -0.14648,0.36718 -0.87696,0.58399 -0.6582,0.29297 -0.58398,0.21875 -0.29297,0.36523 -0.36524,0.21875 -0.6582,0.29492 -0.6582,0.36524 -0.94922,0.36523 -0.51172,-0.0742 -0.43945,-0.36523 -0.29297,-0.95117 -0.0703,-0.36524 -0.43946,-1.16992 -0.29297,-0.6582 -0.58398,-0.87891 -0.4375,-0.51172 -0.51172,-0.36523 -0.94922,-0.58399 -0.2207,-0.14648 -1.31445,-0.51172 -0.58399,-0.14648 -0.87695,-0.51172 -0.4375,-0.36524 -0.87696,-0.36718 -0.73046,-0.36524 -0.73047,-0.29297 -1.02344,-0.36523 -0.36523,-0.36719 -1.02344,-0.36523 -0.73047,-0.0723 -0.4375,-0.0742 -0.95117,-0.14648 -1.02149,0.21875 h -0.58593 l -0.80469,0.14648 -1.09571,-0.14648 h -0.87695 -0.6582 l -0.58399,-0.29297 -0.58398,-0.36524 -0.36524,-0.21875 -0.43945,-0.51367 -0.36523,-0.14453 -0.73047,-0.36719 -0.58594,-0.4375 -0.29101,-0.36523 -0.36524,-0.36719 -0.14648,-0.29101 -0.80469,-0.51172 -0.36523,-0.36524 -0.51172,-0.43945 -0.80274,-0.21875 h -0.58398 z",
  },
  names: {
    PH01: "Manila",
    PH02: "Pateros",
    PH03: "Quezon",
    PH04: "Pasay",
    PH05: "Caloocan South",
    PH06: "Caloocan North",
    PH07: "Mandaluyong",
    PH08: "Makati",
    PH09: "Muntinlupa",
    PH10: "Pasig",
    PH11: "Marikina",
    PH12: "Las Piñas",
    PH13: "Parañaque",
    PH14: "Valenzuela",
    PH15: "Malabon",
    PH16: "Taguig",
    PH17: "Navotas",
    PH18: "San Juan",
  },
  default_regions: {},
  proj: "mercator",
  default_labels: {},
  proj_coordinates: [
    { x: 266.9, y: 910.2, lat: 5.479041, lng: 117.438064 },
    { x: 525.9, y: 552.7, lat: 12.065711, lng: 122.269444 },
    { x: 733.1, y: 92.6, lat: 20.299048, lng: 126.134548 },
  ],
};

/* Map logic - do not edit */
!(function (e) {
  var t,
    o,
    r,
    n = {};
  (function () {
    var e,
      t,
      o,
      r,
      n,
      s,
      a,
      l,
      c,
      p,
      m,
      u = this || Function("return this")(),
      d = (function () {
        "use strict";
        var e,
          t,
          o,
          r,
          n,
          s = "linear",
          a =
            Date.now ||
            function () {
              return +new Date();
            },
          l = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : a;
        function c() {}
        function p(e, t) {
          for (var o in e) Object.hasOwnProperty.call(e, o) && t(o);
        }
        function m(e, t) {
          return (
            p(t, function (o) {
              e[o] = t[o];
            }),
            e
          );
        }
        function d(e, t) {
          p(t, function (o) {
            void 0 === e[o] && (e[o] = t[o]);
          });
        }
        function f(t, o, r, n, s, a, l) {
          var c,
            p,
            m,
            u,
            d,
            f,
            h = t < a ? 0 : (t - a) / s;
          for (d in o) {
            o.hasOwnProperty(d) &&
              ((f = "function" == typeof (f = l[d]) ? f : e[f]),
              (o[d] =
                ((c = r[d]),
                (p = n[d]),
                (m = f),
                (u = h),
                c + (p - c) * m(u))));
          }
          return o;
        }
        function h(e, t, o, r) {
          return e + (t - e) * o(r);
        }
        function y(e, t) {
          var o = _.prototype.filter,
            r = e._filterArgs;
          p(o, function (n) {
            void 0 !== o[n][t] && o[n][t].apply(e, r);
          });
        }
        function $(e, t, s, a, c, p, m, u, d, h, $) {
          (n = t + s + a),
            (o = Math.min($ || l(), n)),
            (r = n <= o),
            (n = a - (n - o)),
            e.isPlaying() &&
              (r
                ? (d(m, e._attachment, n), e.stop(!0))
                : ((e._scheduleId = h(e._timeoutHandler, 1e3 / 60)),
                  y(e, "beforeTween"),
                  o < t + s
                    ? f(1, c, p, m, 1, 1, u)
                    : f(o, c, p, m, a, t + s, u),
                  y(e, "afterTween"),
                  d(c, e._attachment, n)));
        }
        function v(e, t) {
          var o = {},
            r = typeof t;
          return (
            p(
              e,
              "string" == r || "function" == r
                ? function (e) {
                    o[e] = t;
                  }
                : function (e) {
                    o[e] || (o[e] = t[e] || s);
                  }
            ),
            o
          );
        }
        function _(e, o) {
          (this._currentState = e || {}),
            (this._configured = !1),
            (this._scheduleFunction = t),
            void 0 !== o && this.setConfig(o);
        }
        return (
          (t =
            ("undefined" != typeof window &&
              (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                (window.mozCancelRequestAnimationFrame &&
                  window.mozRequestAnimationFrame))) ||
            setTimeout),
          (_.prototype.tween = function (e) {
            return this._isTweening
              ? this
              : ((void 0 === e && this._configured) || this.setConfig(e),
                (this._timestamp = l()),
                this._start(this.get(), this._attachment),
                this.resume());
          }),
          (_.prototype.setConfig = function (e) {
            (e = e || {}),
              (this._configured = !0),
              (this._attachment = e.attachment),
              (this._pausedAtTime = null),
              (this._scheduleId = null),
              (this._delay = e.delay || 0),
              (this._start = e.start || c),
              (this._step = e.step || c),
              (this._finish = e.finish || c),
              (this._duration = e.duration || 500),
              (this._currentState = m({}, e.from || this.get())),
              (this._originalState = this.get()),
              (this._targetState = m({}, e.to || this.get()));
            var t = this;
            this._timeoutHandler = function () {
              $(
                t,
                t._timestamp,
                t._delay,
                t._duration,
                t._currentState,
                t._originalState,
                t._targetState,
                t._easing,
                t._step,
                t._scheduleFunction
              );
            };
            var o = this._currentState,
              r = this._targetState;
            return (
              d(r, o),
              (this._easing = v(o, e.easing || s)),
              (this._filterArgs = [o, this._originalState, r, this._easing]),
              y(this, "tweenCreated"),
              this
            );
          }),
          (_.prototype.get = function () {
            return m({}, this._currentState);
          }),
          (_.prototype.set = function (e) {
            this._currentState = e;
          }),
          (_.prototype.pause = function () {
            return (this._pausedAtTime = l()), (this._isPaused = !0), this;
          }),
          (_.prototype.resume = function () {
            return (
              this._isPaused && (this._timestamp += l() - this._pausedAtTime),
              (this._isPaused = !1),
              (this._isTweening = !0),
              this._timeoutHandler(),
              this
            );
          }),
          (_.prototype.seek = function (e) {
            e = Math.max(e, 0);
            var t = l();
            return (
              this._timestamp + e === 0 ||
                ((this._timestamp = t - e),
                this.isPlaying() ||
                  ((this._isTweening = !0),
                  (this._isPaused = !1),
                  $(
                    this,
                    this._timestamp,
                    this._delay,
                    this._duration,
                    this._currentState,
                    this._originalState,
                    this._targetState,
                    this._easing,
                    this._step,
                    this._scheduleFunction,
                    t
                  ),
                  this.pause())),
              this
            );
          }),
          (_.prototype.stop = function (e) {
            return (
              (this._isTweening = !1),
              (this._isPaused = !1),
              (this._timeoutHandler = c),
              (
                u.cancelAnimationFrame ||
                u.webkitCancelAnimationFrame ||
                u.oCancelAnimationFrame ||
                u.msCancelAnimationFrame ||
                u.mozCancelRequestAnimationFrame ||
                u.clearTimeout
              )(this._scheduleId),
              e &&
                (y(this, "beforeTween"),
                f(
                  1,
                  this._currentState,
                  this._originalState,
                  this._targetState,
                  1,
                  0,
                  this._easing
                ),
                y(this, "afterTween"),
                y(this, "afterTweenEnd"),
                this._finish.call(this, this._currentState, this._attachment)),
              this
            );
          }),
          (_.prototype.isPlaying = function () {
            return this._isTweening && !this._isPaused;
          }),
          (_.prototype.setScheduleFunction = function (e) {
            this._scheduleFunction = e;
          }),
          (_.prototype.dispose = function () {
            for (var e in this) this.hasOwnProperty(e) && delete this[e];
          }),
          (_.prototype.filter = {}),
          (e = _.prototype.formula =
            {
              linear: function (e) {
                return e;
              },
            }),
          m(_, {
            now: l,
            each: p,
            tweenProps: f,
            tweenProp: h,
            applyFilter: y,
            shallowCopy: m,
            defaults: d,
            composeEasingObject: v,
          }),
          "function" == typeof SHIFTY_DEBUG_NOW && (u.timeoutHandler = $),
          (u.Tweenable = _)
        );
      })();
    function f(e) {
      t.each(e, function (t) {
        var o = e[t];
        "string" == typeof o && o.match(l) && (e[t] = $(l, o, h));
      });
    }
    function h(e) {
      var t;
      return (
        "rgb(" +
        (e =
          (3 === (t = (t = e).replace(/#/, "")).length &&
            (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
          (p[0] = y(t.substr(0, 2))),
          (p[1] = y(t.substr(2, 2))),
          (p[2] = y(t.substr(4, 2))),
          p))[0] +
        "," +
        e[1] +
        "," +
        e[2] +
        ")"
      );
    }
    function y(e) {
      return parseInt(e, 16);
    }
    function $(e, t, o) {
      var r = t.match(e),
        n = t.replace(e, c);
      if (r)
        for (var s, a = r.length, l = 0; l < a; l++)
          (s = r.shift()), (n = n.replace(c, o(s)));
      return n;
    }
    function v(e) {
      for (
        var t = e.match(n), o = t.length, r = e.match(a)[0], s = 0;
        s < o;
        s++
      )
        r += parseInt(t[s], 10) + ",";
      return r.slice(0, -1) + ")";
    }
    function _(e, o) {
      t.each(o, function (t) {
        for (var r = b(e[t]), n = r.length, s = 0; s < n; s++)
          e[o[t].chunkNames[s]] = +r[s];
        delete e[t];
      });
    }
    function g(e, o) {
      t.each(o, function (t) {
        var r = e[t],
          n = (function (e, t) {
            m.length = 0;
            for (var o = t.length, r = 0; r < o; r++) m.push(e[t[r]]);
            return m;
          })(
            (function (e, t) {
              for (var o, r = {}, n = t.length, s = 0; s < n; s++)
                (r[(o = t[s])] = e[o]), delete e[o];
              return r;
            })(e, o[t].chunkNames),
            o[t].chunkNames
          ),
          r = (function (e, t) {
            for (var o = e, r = t.length, n = 0; n < r; n++)
              o = o.replace(c, +t[n].toFixed(4));
            return o;
          })(o[t].formatString, n);
        e[t] = $(s, r, v);
      });
    }
    function b(e) {
      return e.match(n);
    }
    d.shallowCopy(d.prototype.formula, {
      easeInQuad: function (e) {
        return Math.pow(e, 2);
      },
      easeOutQuad: function (e) {
        return -(Math.pow(e - 1, 2) - 1);
      },
      easeInOutQuad: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      },
      easeInCubic: function (e) {
        return Math.pow(e, 3);
      },
      easeOutCubic: function (e) {
        return Math.pow(e - 1, 3) + 1;
      },
      easeInOutCubic: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      },
      easeInQuart: function (e) {
        return Math.pow(e, 4);
      },
      easeOutQuart: function (e) {
        return -(Math.pow(e - 1, 4) - 1);
      },
      easeInOutQuart: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      },
      easeInQuint: function (e) {
        return Math.pow(e, 5);
      },
      easeOutQuint: function (e) {
        return Math.pow(e - 1, 5) + 1;
      },
      easeInOutQuint: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      },
      easeInSine: function (e) {
        return 1 - Math.cos(e * (Math.PI / 2));
      },
      easeOutSine: function (e) {
        return Math.sin(e * (Math.PI / 2));
      },
      easeInOutSine: function (e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      },
      easeInExpo: function (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      },
      easeOutExpo: function (e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
      },
      easeInOutExpo: function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --e));
      },
      easeInCirc: function (e) {
        return -(Math.sqrt(1 - e * e) - 1);
      },
      easeOutCirc: function (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      },
      easeInOutCirc: function (e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      },
      easeOutBounce: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      easeInBack: function (e) {
        return e * e * (2.70158 * e - 1.70158);
      },
      easeOutBack: function (e) {
        return --e * e * (2.70158 * e + 1.70158) + 1;
      },
      easeInOutBack: function (e) {
        var t = 1.70158;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      elastic: function (e) {
        return (
          -1 *
            Math.pow(4, -8 * e) *
            Math.sin(((6 * e - 1) * (2 * Math.PI)) / 2) +
          1
        );
      },
      swingFromTo: function (e) {
        var t = 1.70158;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      swingFrom: function (e) {
        return e * e * (2.70158 * e - 1.70158);
      },
      swingTo: function (e) {
        return --e * e * (2.70158 * e + 1.70158) + 1;
      },
      bounce: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      bouncePast: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      },
      easeFromTo: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      },
      easeFrom: function (e) {
        return Math.pow(e, 4);
      },
      easeTo: function (e) {
        return Math.pow(e, 0.25);
      },
    }),
      (d.setBezierFunction = function (e, t, o, r, n) {
        var s,
          a,
          l,
          c,
          p =
            ((s = t),
            (a = o),
            (l = r),
            (c = n),
            function (e) {
              return (function e(t, o, r, n, s, a) {
                var l,
                  c = 0,
                  p = 0,
                  m = 0,
                  u = 0,
                  d = 0,
                  f = 0;
                function h(e) {
                  return ((c * e + p) * e + m) * e;
                }
                function y(e) {
                  return 0 <= e ? e : 0 - e;
                }
                return (
                  (c = 1 - (m = 3 * o) - (p = 3 * (n - o) - m)),
                  (((u = 1 - (f = 3 * r) - (d = 3 * (s - r) - f)) *
                    (l = (function (e, t) {
                      var o, r, n, s, a, l, u;
                      for (n = e, l = 0; l < 8; l++) {
                        if (y((s = h(n) - e)) < t) return n;
                        if (1e-6 > y((a = (3 * c * (u = n) + 2 * p) * u + m)))
                          break;
                        n -= s / a;
                      }
                      if (((r = 1), (n = e) < (o = 0))) return o;
                      if (r < n) return r;
                      for (; o < r && !(y((s = h(n)) - e) < t); )
                        s < e ? (o = n) : (r = n), (n = 0.5 * (r - o) + o);
                      return n;
                    })(t, (l = 0.005))) +
                    d) *
                    l +
                    f) *
                    l
                );
              })(e, s, a, l, c, 1);
            });
        return (
          (p.displayName = e),
          (p.x1 = t),
          (p.y1 = o),
          (p.x2 = r),
          (p.y2 = n),
          (d.prototype.formula[e] = p)
        );
      }),
      (d.unsetBezierFunction = function (e) {
        delete d.prototype.formula[e];
      }),
      ((e = new d())._filterArgs = []),
      (d.interpolate = function (t, o, r, n, s) {
        var a = d.shallowCopy({}, t),
          l = s || 0,
          s = d.composeEasingObject(t, n || "linear");
        return (
          e.set({}),
          ((n = e._filterArgs).length = 0),
          (n[0] = a),
          (n[1] = t),
          (n[2] = o),
          (n[3] = s),
          d.applyFilter(e, "tweenCreated"),
          d.applyFilter(e, "beforeTween"),
          (s = d.tweenProps(r, a, t, o, 1, l, s)),
          d.applyFilter(e, "afterTween"),
          s
        );
      }),
      (t = d),
      (o = /(\d|\-|\.)/),
      (r = /([^\-0-9\.]+)/g),
      (s = RegExp(
        "rgb\\(" +
          (n = /[0-9.\-]+/g).source +
          /,\s*/.source +
          n.source +
          /,\s*/.source +
          n.source +
          "\\)",
        "g"
      )),
      (a = /^.*\(/),
      (l = /#([0-9]|[a-f]){3,6}/gi),
      (c = "VAL"),
      (p = []),
      (m = []),
      (t.prototype.filter.token = {
        tweenCreated: function (e, n, s, a) {
          var l, p;
          f(e),
            f(n),
            f(s),
            (this._tokenData =
              ((l = e),
              (p = {}),
              t.each(l, function (e) {
                var t,
                  n,
                  s = l[e];
                "string" == typeof s &&
                  ((t = b(s)),
                  (p[e] = {
                    formatString:
                      ((s = (n = s).match(r))
                        ? (1 === s.length || n.charAt(0).match(o)) &&
                          s.unshift("")
                        : (s = ["", ""]),
                      s.join(c)),
                    chunkNames: (function (e, t) {
                      for (var o = [], r = e.length, n = 0; n < r; n++)
                        o.push("_" + t + "_" + n);
                      return o;
                    })(t, e),
                  }));
              }),
              p));
        },
        beforeTween: function (e, o, r, n) {
          var s, a;
          (s = n),
            (a = this._tokenData),
            t.each(a, function (e) {
              var t = a[e].chunkNames,
                o = t.length,
                r = s[e];
              if ("string" == typeof r)
                for (
                  var n = r.split(" "), l = n[n.length - 1], c = 0;
                  c < o;
                  c++
                )
                  s[t[c]] = n[c] || l;
              else for (c = 0; c < o; c++) s[t[c]] = r;
              delete s[e];
            }),
            _(e, this._tokenData),
            _(o, this._tokenData),
            _(r, this._tokenData);
        },
        afterTween: function (e, o, r, n) {
          var s, a;
          g(e, this._tokenData),
            g(o, this._tokenData),
            g(r, this._tokenData),
            (s = n),
            (a = this._tokenData),
            t.each(a, function (e) {
              var t = a[e].chunkNames,
                o = t.length,
                r = s[t[0]];
              if ("string" == typeof r) {
                for (var n = "", l = 0; l < o; l++)
                  (n += " " + s[t[l]]), delete s[t[l]];
                s[e] = n.substr(1);
              } else s[e] = r;
            });
        },
      });
  }).call(null),
    (function (e, t) {
      (e = e || "docReady"), (t = t || window);
      var o = [],
        r = !1,
        n = !1;
      function s() {
        if (!r) {
          r = !0;
          for (var e = 0; e < o.length; e++) o[e].fn.call(window, o[e].ctx);
          o = [];
        }
      }
      function a() {
        "complete" === document.readyState && s();
      }
      t[e] = function (e, t) {
        if (r) {
          setTimeout(function () {
            e(t);
          }, 1);
          return;
        }
        o.push({ fn: e, ctx: t }),
          "complete" !== document.readyState &&
          (document.attachEvent || "interactive" !== document.readyState)
            ? n ||
              (document.addEventListener
                ? (document.addEventListener("DOMContentLoaded", s, !1),
                  window.addEventListener("load", s, !1))
                : (document.attachEvent("onreadystatechange", a),
                  window.attachEvent("onload", s)),
              (n = !0))
            : setTimeout(s, 1);
      };
    })("docReady", n),
    (t = window.console),
    (o = window.Object),
    (r = window.Array),
    (void 0 === t || void 0 === t.log) && ((t = {}).log = function () {}),
    "function" != typeof o.create &&
      (o.create = function (e) {
        function t() {}
        return (t.prototype = e), new t();
      }),
    r.prototype.forEach ||
      (r.prototype.forEach = function (e, t) {
        for (var o = 0, r = this.length; o < r; ++o)
          e.call(t, this[o], o, this);
      }),
    (Object.size = function (e) {
      var t,
        o = 0;
      for (t in e) e.hasOwnProperty(t) && o++;
      return o;
    });
  var s = (function () {
      var e = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera\sMini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        iPad: function () {
          return (
            null !== navigator.userAgent.match(/Macintosh/i) &&
            !!navigator.maxTouchPoints &&
            !!(navigator.maxTouchPoints > 0)
          );
        },
        any: function () {
          return (
            e.Android() ||
            e.BlackBerry() ||
            e.iOS() ||
            e.Opera() ||
            e.Windows() ||
            e.iPad()
          );
        },
      };
      function t(e, t) {
        var o = e[0],
          r = e[1],
          n = Raphael.transformPath("M" + o + "," + r, t).toString(),
          s = /M(-?\d+.?\d*),(-?\d+.?\d*)/.exec(n);
        return [s[1], s[2]];
      }
      function o(e) {
        return Math.min.apply(Math, e);
      }
      function r(e) {
        return Math.max.apply(Math, e);
      }
      return {
        min: o,
        max: r,
        addEvent: function e(t, o, r) {
          t.attachEvent
            ? ((t["e" + o + r] = r),
              (t[o + r] = function () {
                t["e" + o + r](window.event);
              }),
              t.attachEvent("on" + o, t[o + r]))
            : t.addEventListener(o, r, !1);
        },
        isMobile: e,
        linePath: function e(t, o, r, n) {
          var s = { x: t, y: o },
            a = { x: r, y: n };
          return "M" + s.x + " " + s.y + " L" + a.x + " " + a.y;
        },
        clone: function e(t) {
          if ("object" != typeof t || null === t) return t;
          var o = t.constructor();
          for (var r in t) o[r] = e(t[r]);
          return o;
        },
        isFunction: function e(t) {
          return t && "[object Function]" === {}.toString.call(t);
        },
        findPos: function e(t) {
          function o(e, t) {
            if (e.currentStyle) var o = e.currentStyle[t];
            else if (window.getComputedStyle)
              var o = window.getComputedStyle(e, null)[t];
            return o;
          }
          var r,
            n = o(document.body, "position");
          "relative" == n &&
            document.body.style.setProperty("position", "static"),
            o(document.body, "position");
          for (
            var s = (r = 0), a = t, l = !1;
            (a = a.parentNode) && a != document.body;

          )
            (s -= a.scrollLeft || 0),
              (r -= a.scrollTop || 0),
              "fixed" == o(a, "position") && (l = !0);
          if (l && !window.opera) {
            var c,
              p =
                ((c = document.getElementsByTagName("html")[0]),
                c.scrollTop && document.documentElement.scrollTop
                  ? [c.scrollLeft, c.scrollTop]
                  : c.scrollTop || document.documentElement.scrollTop
                  ? [
                      c.scrollLeft + document.documentElement.scrollLeft,
                      c.scrollTop + document.documentElement.scrollTop,
                    ]
                  : document.body.scrollTop
                  ? [document.body.scrollLeft, document.body.scrollTop]
                  : [0, 0]);
            (s += p[0]), (r += p[1]);
          }
          do (s += t.offsetLeft), (r += t.offsetTop);
          while ((t = t.offsetParent));
          return document.body.style.setProperty("position", n), [s, r];
        },
        replaceAll: function e(t, o, r) {
          return t.replace(RegExp(o, "g"), r);
        },
        rotate_bbox: function e(n, s) {
          var a = [n.x, n.y],
            l = [n.x2, n.y],
            c = [n.x, n.y2],
            p = [n.x2, n.y2],
            m = t(a, s),
            u = t(l, s),
            d = t(c, s),
            f = t(p, s),
            h = [m[0], u[0], d[0], f[0]],
            y = [m[1], u[1], d[1], f[1]],
            $ = o(h),
            v = r(h),
            _ = o(y),
            g = r(y);
          return { x: $, y: _, x2: v, y2: g, width: v - $, height: g - _ };
        },
        rotate: t,
        bbox_union: function e(t) {
          for (var o = [], r = [], n = [], a = [], l = 0; l < t.length; l++) {
            var c = t[l];
            o.push(c.x), r.push(c.x2), a.push(c.y), n.push(c.y2);
          }
          var p = s.min(o),
            m = s.max(r),
            u = s.min(a),
            d = s.max(n);
          return { x: p, x2: m, y: u, y2: d, width: m - p, height: d - u };
        },
        distance: function e(t, o) {
          var r = t.x,
            n = t.y,
            s = o.x,
            a = o.y,
            l = s - r,
            c = a - n;
          return Math.sqrt(c * c + l * l);
        },
        distance_lnglat: function e(t, o) {
          var r = t.lng,
            n = t.lat,
            s = o.lng,
            a = o.lat;
          function l(e) {
            return e * (Math.PI / 180);
          }
          function c(e) {
            return Math.pow(e, 2);
          }
          n = l(n);
          var p,
            m,
            u,
            d,
            f = (a = l(a)) - n,
            h = l(s - r),
            y =
              12756.274 *
              Math.asin(
                Math.sqrt(
                  c(Math.sin(f / 2)) +
                    Math.cos(n) * Math.cos(a) * c(Math.sin(h / 2))
                )
              );
          return (
            console.log(y),
            (y =
              ((p = (n + a) * 0.5),
              (m = y),
              m * Math.cos((d = ((u = p) * Math.PI) / 180)))),
            console.log(y),
            y
          );
        },
        x_in_array: function e(t, o) {
          for (var r = o.length; r--; ) if (o[r] === t) return !0;
          return !1;
        },
        clear_sets: function e(t) {
          for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.forEach(function (e) {
              e.remove();
            }),
              r.splice(0, r.length);
          }
        },
        delete_element: function e(t) {
          t.parentNode && t.parentNode.removeChild(t);
        },
        to_float: function e(t) {
          var o = parseFloat(t);
          return !isNaN(o) && o;
        },
        callback_closure: function e(t, o) {
          return function () {
            return o(t);
          };
        },
        load_script: function e(t, o) {
          var r = document.createElement("script");
          (r.type = "text/javascript"),
            r.readyState
              ? (r.onreadystatechange = function () {
                  ("loaded" == r.readyState || "complete" == r.readyState) &&
                    ((r.onreadystatechange = null), o());
                })
              : (r.onload = function () {
                  o();
                }),
            (r.src = t),
            document.getElementsByTagName("head")[0].appendChild(r);
        },
        is_in_range: function e(t, o) {
          let r = t.split(":").map(Number);
          if (1 === r.length) return o <= r[0];
          let [n, s] = r;
          return o >= s && o <= n;
        },
        new_style: function e(t) {
          var o = document.getElementsByTagName("head")[0],
            r = document.createElement("style");
          return (
            (r.type = "text/css"),
            (r.media = "screen"),
            r.styleSheet
              ? (r.styleSheet.cssText = t)
              : r.appendChild(document.createTextNode(t)),
            o.appendChild(r),
            r
          );
        },
      };
    })(),
    a = !!window[e + "_mapdata"] && window[e + "_mapdata"],
    l = !!window[e + "_mapinfo"] && window[e + "_mapinfo"],
    c = e.substring(0, e.length - 3).replace("simplemaps_", ""),
    p = !0,
    m = !1,
    u = [],
    d = {
      rounded_box:
        "m2.158.263h5.684c1.05 0 1.895.845 1.895 1.895v5.684c0 1.05-.845 1.895-1.895 1.895h-5.684c-1.05 0-1.895-.845-1.895-1.895v-5.684c0-1.05.845-1.895 1.895-1.895z",
      plus: "m4.8 1.5c-.111 0-.2.089-.2.2v3h-2.9c-.111 0-.2.134-.2.3 0 .166.089.3.2.3h2.9v3c0 .111.089.2.2.2h.2c.111 0 .2-.089.2-.2v-3h3.1c.111 0 .2-.134.2-.3 0-.166-.089-.3-.2-.3h-3.1v-3c0-.111-.089-.2-.2-.2z",
      minus:
        "m1.8 4.7h6.6c.111 0 .2.134.2.3 0 .166-.089.3-.2.3h-6.6c-.111 0-.2-.134-.2-.3 0-.166.089-.3.2-.3",
      arrow:
        "m7.07 8.721c2.874-1.335 2.01-5.762-2.35-5.661v-1.778l-3.445 2.694 3.445 2.843v-1.818c3.638-.076 3.472 2.802 2.35 3.721z",
    },
    f = {
      mapdata: a,
      mapinfo: l,
      load: h,
      hooks: s.clone({
        over_state: !1,
        over_region: !1,
        over_location: !1,
        out_state: !1,
        out_region: !1,
        out_location: !1,
        click_state: !1,
        click_region: !1,
        click_location: !1,
        close_popup: !1,
        zoomable_click_state: !1,
        zoomable_click_region: !1,
        complete: !1,
        refresh_complete: !1,
        zooming_complete: !1,
        viewbox_updated: !1,
        back: !1,
        ready: !1,
        click_xy: !1,
      }),
      plugin_hooks: s.clone({
        over_state: [],
        over_region: [],
        over_location: [],
        out_state: [],
        out_region: [],
        out_location: [],
        click_state: [],
        click_region: [],
        click_location: [],
        preclick_state: [],
        preclick_region: [],
        preclick_location: [],
        close_popup: [],
        zoomable_click_state: [],
        zoomable_click_region: [],
        complete: [],
        refresh_complete: [],
        zooming_complete: [],
        viewbox_updated: [],
        back: [],
        ready: [],
        click_xy: [],
      }),
      copy: function () {
        var e = {
          mapdata: s.clone(this.mapdata),
          mapinfo: s.clone(this.mapinfo),
          hooks: s.clone(this.hooks),
          plugin_hooks: s.clone(this.plugin_hooks),
          copy: this.copy,
          load: h,
        };
        return u.push(e), e;
      },
      create: function () {
        var t = {
          mapdata: !!window[e + "_mapdata"] && s.clone(window[e + "_mapdata"]),
          mapinfo: !!window[e + "_mapinfo"] && s.clone(window[e + "_mapinfo"]),
          hooks: s.clone(this.hooks),
          plugin_hooks: s.clone(this.plugin_hooks),
          copy: this.copy,
          load: h,
        };
        return u.push(t), t;
      },
      mobile_device: !!s.isMobile.any(),
      loaded: !1,
    };
  function h() {
    var e,
      t,
      o,
      r,
      a,
      l,
      u,
      f,
      h,
      y,
      $,
      v,
      _,
      g,
      b,
      x,
      w,
      k,
      z,
      P,
      E,
      A,
      C,
      S,
      j,
      B,
      T,
      I,
      F,
      O,
      L,
      M,
      N,
      D,
      R,
      q,
      H,
      V,
      W,
      X,
      Y,
      Q,
      Z,
      U,
      G,
      J,
      K,
      ee,
      et,
      eo,
      ei,
      er,
      en,
      es,
      ea,
      el,
      ec,
      ep,
      em,
      eu,
      e8,
      ed,
      ef,
      eh,
      ey,
      e$,
      ev,
      e_,
      eg,
      e0,
      eb,
      ex,
      e3,
      ew,
      ek,
      e1,
      ez,
      e5,
      eP,
      e6,
      e4,
      e2,
      e7,
      eE,
      eA,
      eC,
      eS,
      ej,
      eB,
      eT,
      eI,
      eF,
      eO,
      eL,
      eM,
      eN,
      eD,
      eR,
      eq,
      eH,
      eV,
      eW,
      eX,
      eY,
      eQ,
      eZ,
      eU,
      eG,
      eJ,
      eK,
      e9,
      te,
      tt,
      to,
      ti,
      tr,
      tn,
      ts,
      ta,
      tl,
      tc,
      tp,
      tm,
      tu,
      t8,
      td,
      tf,
      th,
      ty,
      t$,
      tv,
      t_,
      tg,
      t0,
      tb,
      tx,
      t3,
      tw,
      tk,
      t1,
      tz,
      t5,
      tP,
      t6 = this,
      t4 = t6.mapdata,
      t2 = t6.mapinfo;
    if (!t4 || !t2) {
      console.log("The mapdata or mapinfo object is missing or corrupted.");
      return;
    }
    var t7 = t6.hooks,
      tE = t6.plugin_hooks,
      tA =
        !!t4.main_settings.backgroundmap_js_url &&
        "no" != t4.main_settings.backgroundmap_js_url &&
        t4.main_settings.backgroundmap_js_url;
    function tC(e, t) {
      var o = t7[e];
      o && o.apply(null, t);
      for (var r = t6.plugin_hooks[e], n = 0; n < r.length; n++) {
        var o = r[n];
        o && o.apply(null, t);
      }
    }
    var g = void 0 === t4.main_settings.div ? "map" : t4.main_settings.div;
    if (!document.getElementById(g))
      return (
        console.log(
          "Can't find target for map #" +
            g +
            ".  Check mapdata.main_settings.div"
        ),
        !1
      );
    function tS() {
      (A =
        !!a.backgroundmap_tiles_url &&
        "no" != a.backgroundmap_tiles_url &&
        a.backgroundmap_tiles_url),
        (C =
          !!a.background_image_url &&
          "no" != a.background_image_url &&
          a.background_image_url),
        (S = !!a.background_image_bbox && a.background_image_bbox),
        (X = "yes" == a.background_transparent || A ? 0 : 1),
        (Q = a.label_size ? a.label_size : 22),
        (Z = a.label_color ? a.label_color : "#ffffff"),
        (U = "yes" == a.url_new_tab),
        (G = a.location_opacity ? a.location_opacity : 1),
        (J = "yes" == a.js_hooks),
        (K = a.border_size ? a.border_size : 1.5),
        (ee = a.popup_color ? a.popup_color : "#ffffff"),
        (O = a.popup_orientation ? a.popup_orientation : "auto"),
        (F = a.popup_centered ? a.popup_centered : "auto"),
        (eo = a.popup_opacity ? a.popup_opacity : 0.9),
        (ei = a.popup_shadow > -1 ? a.popup_shadow : 1),
        (er = a.popup_corners ? a.popup_corners : 5),
        (en = "yes" == a.popup_nocss),
        (et = !!a.popup_maxwidth && a.popup_maxwidth),
        (es = a.popup_font
          ? a.popup_font
          : "12px/1.5 Verdana, Arial, Helvetica, sans-serif"),
        (Y = "no" != a.zoom_out_incrementally),
        (W = a.adjacent_opacity ? a.adjacent_opacity : 0.3),
        (j = a.zoom_time ? a.zoom_time : 0.5),
        (T = a.zoom_increment ? a.zoom_increment : 2),
        (B = "no" != a.zoom_mobile),
        (q = a.fade_time ? 1e3 * a.fade_time : 200),
        (V = t4.labels),
        (I = a.custom_shapes ? a.custom_shapes : {}),
        (N = !!a.initial_back && "no" != a.initial_back && a.initial_back),
        (H = "yes" == a.hide_eastern_labels),
        (D = a.link_text ? a.link_text : "View Website"),
        (L = !!a.order_number && a.order_number),
        (M = a.zoom_percentage ? a.zoom_percentage : 0.99);
    }
    function tj(e) {
      return "on_click" == e || ("detect" == e && !!em);
    }
    function tB(e) {
      return "off" == e;
    }
    var tT = !1;
    function tI(e) {
      if (
        (t2.calibrate
          ? (((e1 = {}).x = -1 * t2.calibrate.x_adjust),
            (e1.y = -1 * t2.calibrate.y_adjust),
            (e1.x2 = e1.x + t2.calibrate.width),
            (e1.y2 = (e1.x2 - e1.x) / t2.calibrate.ratio))
          : (e1 = t2.initial_view),
        (e5 = (ew = e1.x2 - e1.x) / (ek = e1.y2 - e1.y)),
        eh.style.setProperty("width", ""),
        ey.style.setProperty("width", ""),
        _
          ? ((eb = eh.offsetWidth) < 1 && (eb = eh.parentNode.offsetWidth),
            ey.style.setProperty("width", eb + "px"))
          : ((eb =
              void 0 !== a.width && a.width && "auto" != a.width
                ? a.width
                : a.height && "auto" != a.height
                ? a.height * e5
                : 800),
            eh.style.setProperty("width", eb + "px")),
        (eb *= 1),
        (ex = eb / e5),
        (l = ew / 1e3),
        ef.style.setProperty("height", ex + "px"),
        a.height &&
          _ &&
          "auto" != a.height &&
          ((eb = (ex = a.height) * e5),
          map.style.setProperty("text-align", "center"),
          ey.style.setProperty("text-align", "left"),
          ey.style.setProperty("width", eb + "px"),
          ey.style.setProperty("display", "inline-block"),
          ef.style.setProperty("height", ex + "px")),
        eg.style.setProperty("width", eb + "px"),
        eg.style.setProperty("height", ex + "px"),
        !e)
      ) {
        if (((e3 = eb / ew), (ez = 1), $)) {
          var t = [];
          for (var o in t2.state_bbox_array) {
            var r = t2.state_bbox_array[o];
            t.push(r);
          }
          var n,
            c = s.bbox_union(t);
          e0 =
            "r" +
            $ +
            "," +
            0.5 * (c.x2 + c.x) * e3 +
            "," +
            0.5 * (c.y2 + c.y) * e3;
          var p = s.rotate_bbox(e1, e0);
          (ew = p.width), (ek = p.height);
        }
        (eS = "s" + e3 + "," + e3 + ",0,0"), (eC = $ ? eS + e0 : eS);
      }
    }
    function tF(e) {
      if (
        t4.legend &&
        t4.legend.entries &&
        !(t4.legend.entries.length < 1) &&
        (!el || !ea)
      ) {
        e && e_ && (e_.innerHTML = "");
        var t = {};
        e_.style.setProperty("left", "0em"),
          e_.style.setProperty("bottom", "0em"),
          e_.style.setProperty("padding", ".8em"),
          e_.style.setProperty("lineHeight", "1em"),
          e_.style.setProperty(
            "background-color",
            el ? "#ffffff" : "rgba(186, 186, 186, 0.2)"
          );
        var o = document.createElement("ul");
        o.style.setProperty("display", "inline-block"),
          o.style.setProperty("list-style-type", "none"),
          o.style.setProperty("margin", "0"),
          o.style.setProperty("padding", "0"),
          e_.appendChild(o);
        var r =
          "#" +
          g +
          "_holder .sm_legend_item{float: left; cursor: pointer; margin-right: .75em; margin-bottom: .4em; margin-top: .4em;} #" +
          g +
          "_holder{font: " +
          es +
          ";}";
        s.new_style(r);
        for (var n = t4.legend.entries, a = 0; a < n.length; a++) m(a, n[a]);
        var l = t4.legend.html;
        l && "no" != l
          ? (e_.innerHTML = l)
          : (function e() {
              for (var t = 0; t < n.length; t++) {
                var r = n[t];
                (r.shape = r.shape ? r.shape : "circle"),
                  (r.color = r.color ? r.color : "#cecece"),
                  (r.type = r.type ? r.type : "location");
                var s = document.createElement("li");
                s.setAttribute("class", "sm_legend_item"),
                  s.setAttribute("data-id", t);
                var a = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                if (
                  (a.setAttributeNS(
                    "http://www.w3.org/2000/xmlns/",
                    "xmlns:xlink",
                    "http://www.w3.org/1999/xlink"
                  ),
                  a.style.setProperty("display", "inline-block"),
                  a.style.setProperty("margin-right", ".2em"),
                  a.style.setProperty("width", "1em"),
                  a.style.setProperty("height", "1em"),
                  a.style.setProperty("stroke", "#ffffff"),
                  a.style.setProperty("stroke-width", "3"),
                  a.style.setProperty("fill", "#ff0067"),
                  a.style.setProperty("vertical-align", "-0.15em"),
                  "circle" == r.shape)
                ) {
                  var l = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle"
                  );
                  l.setAttribute("cx", "50"),
                    l.setAttribute("cy", "50"),
                    l.setAttribute("r", "40");
                } else if ("square" == r.shape) {
                  var l = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect"
                  );
                  l.setAttribute("x", "10"),
                    l.setAttribute("y", "10"),
                    l.setAttribute("width", "80"),
                    l.setAttribute("height", "80");
                } else {
                  var c = o3[r.shape],
                    l = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path"
                    );
                  l.setAttribute("d", c),
                    a.setAttribute("width", "1.5"),
                    a.setAttribute("height", "1.5"),
                    l.setAttribute("stroke-width", ".1");
                }
                ["square", "circle"].indexOf(r.shape) > -1
                  ? (l.setAttribute("stroke-width", "10"),
                    a.setAttribute("viewBox", "0 0 100 100"),
                    a.setAttribute("width", "100"),
                    a.setAttribute("height", "100"))
                  : ["diamond", "star"].indexOf(r.shape) > -1
                  ? (a.setAttribute("viewBox", "-.5 -.6 1 1.2"),
                    a.setAttribute("height", "1.8"))
                  : ["triangle"].indexOf(r.shape) > -1
                  ? (a.setAttribute("viewBox", "-.6 -.7 1.2 1.1"),
                    a.setAttribute("width", "1.8"),
                    a.setAttribute("height", "1.8"))
                  : ["heart"].indexOf(r.shape) > -1
                  ? (a.setAttribute("viewBox", "-.7 -.5 1.3 1"),
                    a.setAttribute("width", "2"))
                  : ["marker"].indexOf(r.shape) > -1 &&
                    (a.setAttribute("viewBox", "-.6 -.9 1.1 .8"),
                    a.setAttribute("width", "1.7"),
                    a.setAttribute("height", "1.7")),
                  l.setAttribute("fill", r.color),
                  l.setAttribute("stroke", "white"),
                  a.appendChild(l),
                  s.appendChild(a);
                var p = document.createTextNode(r.name);
                s.appendChild(p), o.appendChild(s);
              }
            })();
        for (
          var c = ey.getElementsByClassName("sm_legend_item"), a = 0;
          a < c.length;
          a++
        )
          s.addEvent(c[a], "mouseover", p), s.addEvent(c[a], "mousedown", p);
      }
      function p() {
        for (var e = t[this.dataset.id], o = 0; o < e.length; o++) {
          var r = e[o].sm;
          ("state" == r.type ? tg : oU)(r.id);
        }
      }
      function m(e, o) {
        t[e] = [];
        var r = "state" == o.type ? tp : t$;
        for (var n in r) {
          var s = r[n];
          o.ids
            ? o.ids.split(",").indexOf(s.sm.id) > -1 && t[e].push(s)
            : s.sm.attributes.fill != o.color || s.sm.hide || t[e].push(s);
        }
      }
    }
    function tO(e, t, o) {
      if ((void 0 === o && (o = "location" == e ? 4 : 1), "location" == e))
        var r = t$[t];
      else if ("state" == e) var r = tp[t];
      else if ("region" != e) return !1;
      else var r = tm[t];
      var n = function () {
        var e = r.sm.on_click;
        (r.sm.on_click = !0),
          (r.sm.content = o8(r)),
          oZ(r.sm.type, r.sm.id, function t() {
            (r.sm.on_click = e), (r.sm.content = o8(r));
          });
      };
      if ("state" == e) {
        function s() {
          r.sm.zoomable || r.sm.region ? oX(r.sm.id, n) : n();
        }
        o4(k, s);
      } else if ("location" == e) {
        function s() {
          oY(r.sm.id, o, n);
        }
        o4(k, s);
      } else if ("region" == e) {
        function s() {
          var e,
            t,
            o = 1;
          (e = r.sm.bbox),
            (t = n),
            void 0 === o && (o = 4),
            void 0 === t && (t = function () {}),
            om({ sm: { type: "manual", zp: o, bbox: e } }, !1, function () {
              t(), tR();
            });
        }
        o4(k, s);
      }
    }
    var tL = !1,
      tM = !1;
    function tN() {
      if (p) {
        if (location.hostname.match("simplemaps.com")) {
          p = !1;
          return;
        }
        if (tL) {
          if (Math.random() > 0.05) return;
          s.delete_element(tL);
        }
        tL = document.createElement("div");
        var e = m ? "20px" : "5px";
        (tL.style.cssText =
          "overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom:" +
          e +
          " !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;"),
          ef.appendChild(tL),
          (tL.innerHTML =
            '<a style="overflow: visible !important; clip-path: none !important; opacity: 1 !important;  filter: opacity(1) !important; transform: none !important; display: block !important; visibility: visible !important; font: 18px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; font-weight: bold !important; float: right !important; color: #000000 !important; text-decoration: none !important;" href="https://simplemaps.com" title="For evaluation use only.">Simplemaps.com Trial</a>'),
          !el && 503 != tL.innerHTML.length && (ef.innerHTML = "");
      }
    }
    function tD() {
      eq.hide(), ed.style.setProperty("display", "none");
    }
    function tR() {
      eq.show(), ed.style.setProperty("display", "block");
    }
    function tq() {
      (te = t4.locations),
        (eZ = []),
        (eU = []),
        (eK = []),
        (e9 = []),
        (eG = []),
        (ti = []),
        !(function () {
          var e = {};
          if (
            ((e.color = !1),
            (e.hover_color = !1),
            (e.opacity = a.region_opacity ? a.region_opacity : 1),
            (e.hover_opacity = a.region_hover_opacity
              ? a.region_hover_opacity
              : 0.6),
            (e.url = !1),
            (e.description = !1),
            (e.description_mobile = !1),
            (e.inactive = !1),
            (e.zoomable = !0),
            (e.hide_name = "yes" == a.region_hide_name),
            (e.popup = a.region_popups ? a.region_popups : eu),
            (e.cascade = "yes" == a.region_cascade_all),
            (e.zoom_percentage = M),
            (e.x = !1),
            (e.y = !1),
            (e.x2 = !1),
            (e.y2 = !1),
            P)
          )
            for (var t in P)
              for (var o = 0; o < P[t].states.length; o++)
                eK[P[t].states[o]] = t;
          for (var r in P)
            for (var n in ((eG[r] = Object.create(e)),
            P[r].url && (eG[r].zoomable = !1),
            P[r]))
              "default" != P[r][n] && (eG[r][n] = P[r][n]),
                "yes" == P[r][n] && (eG[r][n] = !0),
                "no" == P[r][n] && (eG[r][n] = !1);
        })(),
        (function () {
          for (var e in ((tt = function (e) {
            var t = {};
            (t.color = a.state_color),
              (t.display = a.state_display ? a.state_display : 1),
              (t.geojson_url = !!a.state_geojson_url && a.state_geojson_url),
              (t.geojson_field = a.state_geojson_field
                ? a.state_geojson_field
                : "id"),
              (t.geojson_value =
                !!a.state_geojson_value && a.state_geojson_value),
              (t.type = a.state_type ? a.state_type : "default"),
              (t.image_url = !!a.state_image_url && a.state_image_url),
              (t.image_size = a.state_image_size ? a.state_image_size : "auto"),
              (t.image_position = a.state_image_position
                ? a.state_image_position
                : "center"),
              (t.image_x = a.state_image_x ? a.state_image_x : "0"),
              (t.image_y = a.state_image_y ? a.state_image_y : "0"),
              (t.image_color = !!a.state_image_color && a.state_image_color),
              (t.image_background_opacity = a.image_background_opacity
                ? a.image_background_opacity
                : "1"),
              (t.image_hover_url =
                !!a.state_image_hover_url && a.state_image_hover_url),
              (t.image_hover_size = a.state_image_hover_size
                ? a.state_image_hover_size
                : "auto"),
              (t.image_hover_position = a.state_image_hover_position
                ? a.state_image_hover_position
                : "center"),
              (t.image_hover_x = a.state_image_hover_x
                ? a.state_image_hover_x
                : "0"),
              (t.image_hover_y = a.state_image_hover_y
                ? a.state_image_hover_y
                : "0"),
              (t.image_hover_color =
                !!a.state_image_hover_color && a.state_image_hover_color),
              (t.pulse_size = a.state_pulse_size ? a.state_pulse_size : 1.1),
              (t.pulse_speed = a.state_pulse_speed ? a.state_pulse_speed : 1);
            var o = a.state_pulse_color;
            (t.pulse_color = !!o && "auto" != o && o),
              (t.hover_color = a.state_hover_color),
              (t.image_source = !1),
              (t.description = a.state_description),
              (t.url = a.state_url),
              (t.inactive = "yes" == a.all_states_inactive),
              (t.hide = "yes" == a.all_states_hidden),
              (t.hide_label = !1),
              (t.hide_name = "yes" == a.state_hide_name),
              (t.border_color = a.border_color ? a.border_color : "#ffffff"),
              (t.border_hover_color =
                !!a.border_hover_color && a.border_hover_color),
              (t.border_hover_size =
                !!a.border_hover_size && a.border_hover_size),
              (t.emphasize = "yes"),
              (t.zoom_percentage = M),
              (t.zoomable = "yes" == a.all_states_zoomable),
              (t.popup = a.state_popups ? a.state_popups : eu),
              (t.opacity = a.state_opacity ? a.state_opacity : 1),
              (t.hover_opacity = a.state_hover_opacity
                ? a.state_hover_opacity
                : 1),
              (t.description_mobile =
                !!a.state_description_mobile && state_description_mobile),
              (t.path = !1),
              (t.level = 0),
              (t.link_text = D);
            var n = !!eK[e] && eK[e];
            for (var s in (n && eG[n].hide && (t.hide = !0),
            n &&
              eG[n].cascade &&
              (eG[n].color && (t.color = eG[n].color),
              eG[n].hover_color && (t.hover_color = eG[n].hover_color),
              eG[n].description && (t.description = eG[n].description),
              eG[n].url && (t.url = eG[n].url),
              eG[n].inactive && (t.inactive = eG[n].inactive),
              eG[n].hide && (t.hide = eG[n].hide)),
            (eZ[e] = Object.create(t)),
            "us" == c &&
              ("GU" == e || "PR" == e || "VI" == e || "MP" == e || "AS" == e) &&
              (eZ[e].hide = "yes"),
            "us" == c &&
              H &&
              ("VT" == e ||
                "NJ" == e ||
                "DE" == e ||
                "DC" == e ||
                "NH" == e ||
                "MA" == e ||
                "CT" == e ||
                "RI" == e ||
                "MD" == e) &&
              (eZ[e].hide_label = "yes"),
            r[e]))
              "default" != r[e][s] && (eZ[e][s] = r[e][s]),
                "yes" == r[e][s] && (eZ[e][s] = !0),
                "no" == r[e][s] && (eZ[e][s] = !1);
            "off" == a.state_hover_color && (eZ[e].hover_color = eZ[e].color);
          }),
          (eJ = {}),
          t2.paths))
            eJ[e] = !0;
          for (var e in t4.state_specific)
            t4.state_specific[e] &&
              (t4.state_specific[e].path ||
                t4.state_specific[e].feature ||
                t4.main_settings.state_geojson_url ||
                t4.state_specific[e].geojson_url) &&
              (eJ[e] = !0);
          for (var e in eJ) tt(e);
        })(),
        (function () {
          var e = {};
          (e.font_family = a.label_font ? a.label_font : "arial,sans-serif"),
            (e.color = a.label_color ? a.label_color : "white"),
            (e.hover_color = a.label_hover_color
              ? a.label_hover_color
              : e.color),
            (e.opacity =
              a.label_opacity || "0" == a.label_opacity ? a.label_opacity : 1),
            (e.hover_opacity = a.label_hover_opacity
              ? a.label_hover_opacity
              : e.opacity),
            (e.size = Q),
            (e.hide = "yes" == a.hide_labels),
            (e.line = !1),
            (e.scale = !!a.label_scale && a.label_scale),
            (e.scale_limit = a.scale_limit ? a.scale_limit : 0.0625),
            (e.rotate = a.label_rotate ? a.label_rotate : 0),
            (e.line_color = a.label_line_color
              ? a.label_line_color
              : "#000000"),
            (e.line_size = a.label_line_size ? a.label_line_size : "1"),
            (e.line_x = !1),
            (e.line_y = !1),
            (e.parent_type = "state"),
            (e.parent_id = !1),
            (e.anchor = a.label_anchor ? a.label_anchor : "middle"),
            (e.pill = !1),
            (e.width = !!a.pill_width && a.pill_width),
            (e.x = !1),
            (e.y = !1),
            (e.name = "Not Named"),
            (e.pill_radius = a.pill_radius ? a.pill_radius : "auto"),
            (e.display = !!a.label_display && a.label_display),
            (e.display_ids = !1),
            (e.id = !1),
            (e.level = 3);
          var t = "no" == a.import_labels ? {} : t2.default_labels,
            o = function (o) {
              for (var r in ((e9[o] = Object.create(e)), t[o]))
                "default" != t[o][r] && (e9[o][r] = t[o][r]),
                  "yes" == t[o][r] && (e9[o][r] = !0),
                  "no" == t[o][r] && (e9[o][r] = !1);
            },
            r = function (t) {
              for (var o in (e9[t] || (e9[t] = Object.create(e)), V[t]))
                "default" != V[t][o] && (e9[t][o] = V[t][o]),
                  "yes" == V[t][o] && (e9[t][o] = !0),
                  "no" == V[t][o] && (e9[t][o] = !1);
            };
          for (var n in t) o(n);
          for (var n in V) r(n);
          to = function (e) {
            o(e), r(e);
          };
        })(),
        (function () {
          var e = {},
            t = em
              ? a.scale_limit_mobile
                ? a.scale_limit_mobile
                : 0.4
              : 0.0625;
          (e.scale_limit = a.scale_limit ? a.scale_limit : t),
            (e.geojson_url =
              !!a.location_geojson_url && a.location_geojson_url),
            (e.geojson_field = a.location_geojson_field
              ? a.location_geojson_field
              : "id"),
            (e.geojson_value =
              !!a.location_geojson_value && a.location_geojson_value),
            (e.color = a.location_color ? a.location_color : "#FF0067"),
            (e.hover_color =
              !!a.location_hover_color && a.location_hover_color),
            (e.border = a.location_border ? a.location_border : 1.5),
            (e.border_color = a.location_border_color
              ? a.location_border_color
              : "#FFFFFF"),
            (e.hover_border = a.location_hover_border
              ? a.location_hover_border
              : 2),
            (e.size = a.location_size),
            (e.description = a.location_description),
            (e.description_mobile =
              !!a.location_description_mobile && location_description_mobile),
            (e.url = a.location_url),
            (e.inactive = "yes" == a.all_locations_inactive),
            (e.type = a.location_type),
            (e.position = "top"),
            (e.level = 5),
            (e.pulse = "yes" == a.location_pulse),
            (e.pulse_size = a.location_pulse_size ? a.location_pulse_size : 4),
            (e.pulse_speed = a.location_pulse_speed
              ? a.location_pulse_speed
              : 0.5);
          var o = a.location_pulse_color;
          for (var r in ((e.pulse_color = !!o && "auto" != o && o),
          (e.image_source = a.location_image_source
            ? a.location_image_source
            : ""),
          (e.hide = a.all_locations_hide ? a.all_locations_hide : "no"),
          (e.opacity = G),
          (e.scale = !a.location_scale || a.location_scale),
          (e.hover_opacity =
            !!a.location_hover_opacity && a.location_hover_opacity),
          (e.image_source = a.location_image_source
            ? a.location_image_source
            : ""),
          (e.image_url = !!a.location_image_url && a.location_image_url),
          (e.image_position = a.location_image_position
            ? a.location_image_position
            : "center"),
          (e.image_hover_source = a.location_image_hover_source
            ? a.location_image_hover_source
            : ""),
          (e.image_hover_url =
            !!a.location_image_hover_url && a.location_image_hover_url),
          (e.image_hover_position = a.location_image_hover_position
            ? a.location_image_hover_position
            : "center"),
          (e.popup = a.location_popups ? a.location_popups : eu),
          (e.x = !1),
          (e.y = !1),
          (e.link_text = D),
          (e.display = a.location_display ? a.location_display : "all"),
          (e.display_ids = !1),
          (e.hide = "yes" == a.all_locations_hidden),
          (e.hide_name = "yes" == a.location_hide_name),
          void 0 == e.type && (e.type = "square"),
          te)) {
            for (var n in ((eU[r] = Object.create(e)), te[r])) {
              if ("overwrite_image_location" == n) {
                eU[r].image_url = te[r][n];
                continue;
              }
              "region" == n && (eU[r].display = "region"),
                "default" != te[r][n] && (eU[r][n] = te[r][n]),
                "yes" == te[r][n] && (eU[r][n] = !0),
                "no" == te[r][n] && (eU[r][n] = !1);
            }
            eU[r].hover_opacity || (eU[r].hover_opacity = eU[r].opacity),
              eU[r].hover_color || (eU[r].hover_color = eU[r].color);
          }
        })(),
        (function () {
          var e = {};
          (e.color = a.line_color ? a.line_color : "#000000"),
            (e.size = a.line_size ? a.line_size : 1.5),
            (e.dash = a.line_dash ? a.line_dash : ""),
            (e.origin_location = !1),
            (e.destination_location = !1),
            (e.angle = !1),
            (e.level = 2);
          var t = t4.lines ? t4.lines : t4.borders;
          for (var o in t)
            for (var r in ((ti[o] = Object.create(e)), t[o]))
              "default" != t[o][r] && (ti[o][r] = t[o][r]),
                "yes" == t[o][r] && (ti[o][r] = !0),
                "no" == t[o][r] && (ti[o][r] = !1);
        })();
    }
    var tH = !1,
      tV = !1,
      tW = !1;
    function tX(e, t, o, r, n) {
      function s(e) {
        var t = [];
        if (!e) return null;
        var o = e.geometry.type,
          r = e.geometry.coordinates;
        if ("Polygon" === o) for (var n = 0; n < r.length; n++) t.push(c(r[n]));
        else if ("MultiPolygon" === o)
          for (var s = 0; s < r.length; s++)
            for (var a = 0; a < r[s].length; a++) t.push(c(r[s][a]));
        else if ("LineString" === o) t.push(c(r));
        else if ("MultiLineString" === o)
          for (var l = 0; l < r.length; l++) t.push(c(r[l]));
        function c(e) {
          for (var t = [], o = 0; o < e.length; o++) {
            var r = tZ(e[o][1], e[o][0]),
              n = [parseFloat(r.x.toFixed(4)), parseFloat(r.y.toFixed(4))];
            t.push(n);
          }
          return (
            "M " +
            t
              .map(function (e) {
                return e.join(",");
              })
              .join(" L ") +
            " Z"
          );
        }
        return t.join(" ");
      }
      function a(e, t, o) {
        if (!e || !e.features || !Array.isArray(e.features)) return !1;
        for (let r of e.features)
          if (r.properties && r.properties[t] === o) return r;
        return !1;
      }
      var l = (function e(t, o) {
        var r = {},
          n = 0;
        for (var s in t) "geojson" === o[s].type && ((r[s] = n), n++);
        return r;
      })(t, o);
      if (e.feature) var c = s(e.feature);
      else {
        var p = (function e(t) {
          if (!t) return !1;
          var o = new XMLHttpRequest();
          o.open("GET", t, !1);
          try {
            if ((o.send(), 200 !== o.status))
              return (
                console.error("Error loading GeoJSON:", o.statusText), null
              );
            return JSON.parse(o.responseText);
          } catch (r) {
            return console.error("Request failed:", r), null;
          }
        })(e.geojson_url);
        if (e.geojson_value) u = a(p, e.geojson_field, e.geojson_value);
        else if ("geojson" == e.type && e.geojson_field && "state" == n)
          u = a(p, e.geojson_field, r);
        else
          var m = l[r],
            u = p.features[m];
        var c = s(u);
      }
      return c;
    }
    function tY(e, t, o, r, n) {
      var s = e.x,
        a = e.y,
        l = e.lat,
        c = e.lng,
        p = t.x,
        m = t.y,
        u = t.lat,
        d = t.lng,
        f = o.x,
        h = o.y,
        y = o.lat,
        $ = o.lng,
        v = (m - h) * (s - f) + (f - p) * (a - h),
        _ = ((m - h) * (r - f) + (f - p) * (n - h)) / v,
        g = ((h - a) * (r - f) + (s - f) * (n - h)) / v,
        b = 1 - _ - g;
      return { lat: _ * l + g * u + b * y, lng: _ * c + g * d + b * $ };
    }
    function tQ(e, t) {
      var o = t2.proj_coordinates;
      function r(e, t) {
        for (var o in t) {
          var r = t[o];
          if (r.x == e.x || r.y == e.y) return !1;
        }
        return !0;
      }
      o.sort(function (o, r) {
        var n;
        return (
          Math.sqrt(Math.pow(o.x - e, 2) + Math.pow(o.y - t, 2)) -
          Math.sqrt(Math.pow(r.x - e, 2) + Math.pow(r.y - t, 2))
        );
      });
      var n = [o[0]];
      for (i in o)
        if (!(i < 1)) {
          var s = o[i];
          if ((r(s, n) && n.push(s), n.length > 2)) break;
        }
      return (function e(t, o, r, n, s) {
        var a, l;
        function c(e, t) {
          return {
            x: 6378137 * t * (Math.PI / 180),
            y: 6378137 * Math.log(Math.tan(Math.PI / 4 + e * (Math.PI / 360))),
          };
        }
        let p = c(t.lat, t.lng),
          m = c(o.lat, o.lng),
          u = c(r.lat, r.lng),
          d = t.x - r.x,
          f = t.y - r.y,
          h = o.x - r.x,
          y = o.y - r.y,
          $ = p.x - u.x,
          v = p.y - u.y,
          _ = m.x - u.x,
          g = m.y - u.y,
          b = d * y - h * f,
          x =
            (($ * y - _ * f) / b) * (n - r.x) +
            ((_ * d - $ * h) / b) * (s - r.y) +
            u.x,
          w =
            ((v * y - g * f) / b) * (n - r.x) +
            ((g * d - v * h) / b) * (s - r.y) +
            u.y,
          k =
            ((a = x),
            {
              lat: Math.atan(Math.sinh((l = w) / 6378137)) * (180 / Math.PI),
              lng: (a / 6378137) * (180 / Math.PI),
            });
        return k;
      })(n[0], n[1], n[2], e, t);
    }
    function tZ(e, t) {
      if ("lambert" == t2.proj)
        var o = function e(t) {
          var o = Math.PI,
            r = 0.017453293 * t.lat,
            n = 0.017453293 * t.lng,
            s =
              Math.log(0.8386705593173225 * (1 / 0.7071067659112366)) /
              Math.log(
                Math.tan(0.25 * o + 0.3926990925) *
                  (1 / Math.tan(0.25 * o + 0.2879793345))
              ),
            a =
              (0.8386705593173225 *
                Math.pow(Math.tan(0.25 * o + 0.2879793345), s)) /
              s,
            l = a * Math.pow(1 / Math.tan(0.25 * o + 0.5 * r), s);
          return {
            x: l * Math.sin(s * (n - 1.57079637)),
            y:
              a * Math.pow(1 / Math.tan(0.25 * o + 0.3926990925), s) -
              l * Math.cos(s * (n - 1.57079637)),
          };
        };
      else if ("xy" == t2.proj)
        var o = function e(t) {
          return { x: t.lng, y: t.lat };
        };
      else if ("robinson_pacific" == t2.proj)
        var o = function e(t) {
          var o = t.lng - 150;
          return o < -180 && (o += 360), n({ lat: t.lat, lng: o });
        };
      else if ("mercator" == t2.proj)
        var o = function e(t, o = 6378137) {
          var r,
            n = t.lat * (Math.PI / 180);
          return {
            x: o * t.lng * (Math.PI / 180),
            y: o * Math.log(Math.tan(Math.PI / 4 + n / 2)),
          };
        };
      else var o = n;
      var r = { lat: e, lng: t };
      function n(e) {
        var t,
          o,
          r = 5,
          n = function (e) {
            return e < 0 ? -1 : 1;
          },
          s = n(e.lng),
          a = n(e.lat),
          l = Math.abs(e.lng),
          c = Math.abs(e.lat),
          p = ((t = c - 1e-10), Math.floor(t / r) * r),
          m = (p = 0 == c ? 0 : p) + 5,
          u = p / 5,
          d = m / 5,
          f = (c - p) / 5,
          h = [
            0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851,
            0.814752, 0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645,
            0.67777182, 0.64475739, 0.60987582, 0.57134484, 0.52729731,
            0.48562614, 0.45167814,
          ],
          y = [
            0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556,
            0.5868982, 0.67182264, 0.75336633, 0.83518048, 0.91537187,
            0.99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062,
            1.31998003, 1.3523,
          ];
        return {
          x: ((h[d] - h[u]) * f + h[u]) * l * 0.017453293 * s * 1,
          y: ((y[d] - y[u]) * f + y[u]) * a * 1,
        };
      }
      var a = t2.proj_coordinates;
      function l(e, t, r, n) {
        var a,
          l,
          c,
          p,
          m,
          u,
          d,
          f,
          h,
          y,
          $,
          v,
          _,
          g,
          b,
          x,
          w,
          k = o(e),
          z = o(t),
          P = o(r),
          E = o(n),
          A = s.distance(k, z),
          C = s.distance(k, P),
          S = s.distance(z, P),
          j = s.distance(t, r),
          B = S / j,
          T =
            ((a = t.x),
            (l = t.y),
            (c = A / B),
            (p = r.x),
            (m = r.y),
            (u = C / B),
            (f = p - a),
            (y = Math.sqrt((h = m - l) * h + f * f)),
            (g = a + (f * (d = (c * c - u * u + y * y) / (2 * y))) / y),
            (b = l + (h * d) / y),
            (v = -h * (($ = Math.sqrt(c * c - d * d)) / y)),
            (_ = f * ($ / y)),
            (x = g + v),
            { opt1: { x: x, y: (w = b + _) }, opt2: { x: g - v, y: b - _ } }),
          I = s.distance(k, E) / B,
          F = Math.abs(s.distance(T.opt1, n) - I),
          O = Math.abs(s.distance(T.opt2, n) - I);
        return F < O
          ? { x: T.opt1.x, y: T.opt1.y }
          : { x: T.opt2.x, y: T.opt2.y };
      }
      function c(e, t, o) {
        var r = /lat[ ]?<([-]?\d+[\.]?\d+)/g.exec(d);
        if (r && e > s.to_float(r[1])) return !1;
        var n = /lat[ ]?>([-]?\d+[\.]?\d+)/g.exec(d);
        if (n && e < s.to_float(n[1])) return !1;
        var a = /lng[ ]?<([-]?\d+[\.]?\d+)/g.exec(d);
        if (a && t > s.to_float(a[1])) return !1;
        var l = /lng[ ]?>([-]?\d+[\.]?\d+)/g.exec(d);
        return !(l && t < s.to_float(l[1]));
      }
      var p = t2.proj_rules;
      if (p)
        for (var m = 0; m < p.length; m++) {
          var u = p[m],
            d = u.condition;
          if (c(e, t, u.condition)) {
            var f = u.points;
            return l(r, a[f[0]], a[f[1]], a[f[2]]);
          }
        }
      return l(r, a[0], a[1], a[2]);
    }
    var tU = !1;
    function tG(e) {
      if (e.sm.zooming_dimensions) return e.sm.zooming_dimensions;
      var t,
        o = s.rotate_bbox(e.sm.bbox, eC),
        r = o.x,
        n = o.y,
        a = o.width,
        l = o.height,
        c = e.sm.zp,
        p = ew * e3,
        m = ek * e3;
      return (
        (r -= (a / c - a) * 0.5),
        (n -= (l / c - l) * 0.5),
        (a /= c) / (l /= c) > e5
          ? ((n -= (m * (t = a / p) - l) / 2), (l = a / e5))
          : ((r -= (p * (t = l / m) - a) / 2), (a = l * e5)),
        { x: r, y: n, w: a, h: l, r: t }
      );
    }
    function tJ(e) {
      if (e) {
        eF.stop();
        for (var t = 0; t < e.sm.states.length; ++t) {
          var o = tp[e.sm.states[t]];
          o.attr(o.sm.attributes), oP(o, "reset", !1, "state");
        }
      }
    }
    function tK() {
      tu &&
        "state" == tu.sm.type &&
        tu.sm.attributes &&
        (tu.sm.ignore_hover || tu.attr(tu.sm.attributes), oP(tu, "out"));
    }
    function t9(e) {
      if (e) {
        e.stop(), e.attr(e.sm.attributes);
        for (var t = 0; t < e.sm.states.length; ++t)
          oP(tp[e.sm.states[t]], "reset", !1, "region");
      }
    }
    function oe() {
      eO.forEach(function (e) {
        -1 != e.sm.id && t9(e);
      });
    }
    function ot(e, t) {
      var o,
        r,
        n,
        a = e.sm.display,
        l = t.sm.type;
      if ("all" == a || ("out" == a && "out" == l)) return !0;
      if ("region" == a && "region" == l) {
        return (
          (o = e),
          (r = t),
          (n = o.sm.point0),
          o.sm.display_ids
            ? o.sm.display_ids.indexOf(r.sm.id) > -1
            : !!Raphael.isPointInsideBBox(r.sm.bbox, n.x, n.y)
        );
      }
      if ("state" == a && "state" == l)
        return (function e(t, o) {
          var r = t.sm.point0;
          if (t.sm.display_ids) return t.sm.display_ids.indexOf(o.sm.id) > -1;
          if (Raphael.isPointInsideBBox(o.sm.bbox, r.x, r.y)) {
            var n = t2.paths[o.sm.id];
            if (Raphael.isPointInsidePath(n, r.x, r.y)) return !0;
          }
          return !1;
        })(e, t);
      var c = s.is_in_range(a.toString(), ez - 1e-4);
      if (e.sm.parent && "state" == e.sm.parent.sm.type) {
        var p = s.is_in_range(e.sm.parent.sm.display.toString(), ez - 1e-4);
        return c && p;
      }
      return c;
    }
    function oo(e, t, o) {
      var r = { transform: t };
      ea || em || o ? e.attr(r) : e.animate(r, 1e3 * j);
    }
    function oi() {
      for (id in tp) {
        var e = tp[id],
          t = e.sm.display;
        ("all" == t || "out" == t) && (t = 1),
          s.is_in_range(t.toString(), ez - 1e-4) && !e.sm.hide
            ? e.show()
            : e.hide();
      }
      for (id in ty) {
        var o = ty[id],
          t = o.sm.parent.sm.display;
        ("all" == t || "out" == t) && (t = 1),
          s.is_in_range(t.toString(), ez - 1e-4) && !o.sm.hide
            ? o.show()
            : o.hide();
      }
    }
    function or(e, t) {
      var o,
        r,
        n = e.sm.type;
      tD(),
        (o = e),
        (r = t),
        eL.hide(),
        eL.forEach(function (e) {
          if (!e.sm.hide && (ot(e, o) && e.show(), e.sm.scale)) {
            var t = ez > e.sm.scale_limit ? ez : e.sm.scale_limit,
              n = ox(e, t * e3);
            oo(e, n, r);
          }
        }),
        (function e(t, o) {
          for (var r in (eD.hide(), td)) {
            var n = td[r];
            if (!n.sm.hide) {
              if ((ot(n, t) && tf[n.sm.id].show(), n.sm.line)) {
                var s = ob(n);
                n.sm.line.attr({ path: s, transform: eC });
              }
              if (n.sm.scale) {
                var a = ez > n.sm.scale_limit ? ez : n.sm.scale_limit,
                  l = ox(n, a * e3);
                oo(n, l, o), n.sm.pill && oo(ty[n.sm.id], l, o);
              }
            }
          }
        })(e, t),
        s.x_in_array(n, ["state", "region", "out"]) && oe(),
        "region" == n
          ? tJ(e)
          : "state" == n
          ? tJ(tm[e.sm.region])
          : "manual" == n &&
            eO.forEach(function (e) {
              -1 != e.sm.id &&
                (e.sm.zooming_dimensions.r > ez && e.sm.zoomable
                  ? tJ(e)
                  : t9(e));
            }),
        "out" != n && "manual" != n
          ? (eF.stop(),
            eI.stop(),
            eF.attr({ "fill-opacity": W }),
            eI.attr({ "fill-opacity": W }),
            e.stop(),
            e.attr({ "fill-opacity": 1 }),
            e.sm.labels.forEach(function (e) {
              e.sm &&
                e.sm.pill &&
                (e.sm.pill.stop(), e.sm.pill.attr({ "fill-opacity": 1 }));
            }),
            e.animate(
              { "stroke-width": e.sm.border_hover_size * (eb / ew) * l * 1.25 },
              1e3 * j
            ))
          : (eF.attr({ "fill-opacity": 1 }), eI.attr({ "fill-opacity": 1 })),
        eF.animate({ "stroke-width": K * (eb / ew) * l * 1.25 }, 1e3 * j),
        oi();
    }
    function on(e) {
      x && "-1" != b && "region" == e.sm.type
        ? !!N && tR()
        : "state" == e.sm.type || "region" == e.sm.type || N
        ? tR()
        : v && "out" != e.sm.type && tR();
    }
    function os(e) {
      return { x: e.x, y: e.y, w: e.w, h: e.h };
    }
    function oa() {
      k.sm && z && (tP.hide(), (z = !1), k.sm && t3.call(k), (ep = !1));
    }
    var ol = !1;
    function oc(e) {
      var t = tQ(e.x / e3, e.y / e3 + e.h / e3),
        o = tQ(e.x / e3 + e.w / e3, e.y / e3);
      return [
        [t.lng, t.lat],
        [o.lng, o.lat],
      ];
    }
    function op(e) {
      tC("viewbox_updated", [e]), ol && ol.fitBounds(oc(e), { animate: !1 });
    }
    function om(e, t, o) {
      if (!tH) {
        oa(),
          o7 && (o7.stop(), (o7 = !1)),
          o2 && e != o2 && t3.call(o2),
          (k = !1),
          (tn = e),
          tP.hide(),
          (z = !1),
          (tH = !0),
          (e.sm.zooming_dimensions = tG(e));
        var r = os(e.sm.zooming_dimensions),
          a = os(tu.sm.zooming_dimensions);
        (ez = e.sm.zooming_dimensions.r),
          or(e, t),
          ea || (em && !B) || t
            ? ((ta = r), eP.setViewBox(r.x, r.y, r.w, r.h, !1), l())
            : (ts = (n.Tweenable ? new n.Tweenable() : new Tweenable()).tween({
                from: a,
                to: r,
                duration: 1e3 * j,
                easing: "easeOutQuad",
                step: function (e) {
                  var t;
                  (ta = t = e), eP.setViewBox(t.x, t.y, t.w, t.h, !1), op(t);
                },
                finish: function () {
                  l(r);
                },
              }));
      }
      function l() {
        on(e, t),
          (tu = e),
          (tH = !1),
          (ep = !1),
          op(e.sm.zooming_dimensions),
          (t6.zoom_level = tu.sm.type),
          (t6.zoom_level_id = !!tu.sm.id && tu.sm.id),
          (t6.zoom_ratio = ez),
          tC("zooming_complete", []),
          s.isFunction(o) && o();
      }
    }
    function ou(e) {
      var t = "",
        o = {};
      for (var r in t2.paths) {
        var n,
          s = t2.paths[r];
        s = Raphael._pathToAbsolute(s);
        var a = Raphael.pathBBox(s);
        n = a.x2 - a.x < 10 ? 10 : 1;
        var l = Math.round(a.x * n) / n,
          c = Math.round(a.y * n) / n,
          p = Math.round(a.y2 * n) / n;
        (t +=
          "'" +
          r +
          "':{x: " +
          l +
          ",y:" +
          c +
          ",x2:" +
          Math.round(a.x2 * n) / n +
          ",y2:" +
          p +
          "},"),
          (o[r] = a);
      }
      return (
        (t = t.substring(0, t.length - 1)),
        (t += "}"),
        e || console.log("The new state_bbox_array is: \n\n{" + t),
        o
      );
    }
    function o8(e) {
      var t = e.sm.description,
        o =
          '<a id="xpic_sm_' +
          g +
          '" href="#"><img src="data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%20256%20256%22%20height%3D%22256px%22%20id%3D%22Layer_1%22%20version%3D%221.1%22%20viewBox%3D%220%200%20256%20256%22%20width%3D%22256px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M137.051%2C128l75.475-75.475c2.5-2.5%2C2.5-6.551%2C0-9.051s-6.551-2.5-9.051%2C0L128%2C118.949L52.525%2C43.475%20%20c-2.5-2.5-6.551-2.5-9.051%2C0s-2.5%2C6.551%2C0%2C9.051L118.949%2C128l-75.475%2C75.475c-2.5%2C2.5-2.5%2C6.551%2C0%2C9.051%20%20c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875s3.275-0.625%2C4.525-1.875L128%2C137.051l75.475%2C75.475c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875%20%20s3.275-0.625%2C4.525-1.875c2.5-2.5%2C2.5-6.551%2C0-9.051L137.051%2C128z%22%2F%3E%3C%2Fsvg%3E" style="width: 100%" alt="Close" border="0" /></a>',
        r = '<a style="line-height: 1.5" id="xpic_sm_' + g + '">X</a>',
        n = ea ? r : o;
      n = '<div class="xmark_sm">' + n + "</div>";
      var a = e.sm.url ? e.sm.url : "",
        l = a,
        c = "javascript:" == l.substring(0, 11),
        p = s.replaceAll(l, "'", '"'),
        m = U
          ? 'return (function(e){window.open("' +
            a +
            '","_blank"); return false})()'
          : c
          ? 'return (function(){window.location.href="' +
            a +
            '"; return false;})()'
          : 'return (function(){window.top.location.href="' +
            a +
            '"; return false;})()';
      c && (m = "(function(){" + p + "})()");
      var u = e.sm.description_mobile
        ? e.sm.description_mobile
        : '<div class="tt_mobile_sm"><a tabindex="0" onkeydown="if (event.keyCode == 13) this.click()" class="btn_simplemaps" onClick=\'' +
          m +
          "'>" +
          e.sm.link_text +
          "</a></div>";
      e.sm.on_click || ((n = ""), (u = "")),
        "" != e.sm.url || e.sm.description_mobile || (u = "");
      var d =
        "" == t ? (d = "") : '<div class="tt_custom_sm"; />' + t + "</div>";
      return (
        '<div class="tt_sm"><div>' +
        (e.sm.hide_name
          ? ""
          : '<div class="tt_name_sm">' + e.sm.name + "</div>") +
        n +
        '<div style="clear: both;"></div></div>' +
        d +
        u +
        "</div></div>"
      );
    }
    function od(e, t) {
      var o = e.sm.zooming_dimensions;
      if (o.w > t.sm.zooming_dimensions.w) return !1;
      var r = t.sm.bbox,
        n = { x: r.x * e3, y: r.y * e3, x2: r.x2 * e3, y2: r.y2 * e3 },
        s = o.x + o.w / 2,
        a = o.y + o.h / 2;
      return !!(s > n.x) && !!(a > n.y) && !!(s < n.x2) && !!(a < n.y2);
    }
    function of(e, t) {
      var o = t.hover ? "_hover" : "",
        r = g + "_pattern_" + e.sm.id + o,
        n = document.getElementById(r);
      n && s.delete_element(n);
      var a = ef.firstChild,
        c = a.namespaceURI,
        p = a.querySelector("defs"),
        m = document.createElementNS(c, "pattern"),
        u = e.sm.id;
      (m.id = r), m.setAttribute("patternUnits", "objectBoundingBox");
      var d = document.createElementNS(c, "image"),
        f = document.createElementNS(c, "rect"),
        h = t.image_color ? t.image_color : t.color;
      f.setAttribute("fill", "#ffffff"),
        f.setAttribute("opacity", t.bg_opacity),
        d.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t.image_url
        ),
        m.appendChild(f),
        m.appendChild(d),
        p.appendChild(m),
        a.appendChild(p);
      var y = t.image_position,
        v = "auto" == t.image_size,
        _ = "repeat" == y,
        b = "manual" == y,
        x = "center" == y,
        w = Raphael.pathBBox(t2.paths[u]),
        k = w.x2 - w.x,
        z = w.y2 - w.y,
        P = k / z;
      return (
        Raphael._preload(t.image_url, function () {
          var e,
            o,
            r,
            n = this.offsetWidth,
            s = this.offsetHeight,
            a = n / s,
            c =
              ((r = t.image_size),
              v
                ? _ || b
                  ? (r =
                      a > 1 ? (n > k ? 1 : n / k) : s > z ? 1 / P : s / z / P)
                  : x && ((r = a / P), a > P || (r = 1 / r))
                : r > 1 && (r = (t.image_size * l) / k),
              r),
            p = k * c,
            u = p / a,
            y = 0,
            g = 0;
          if (
            (_
              ? ((e = c), (o = (c * P) / a))
              : b
              ? ((e = 1), (o = 1), (y = t.image_x * k), (g = t.image_y * z))
              : x &&
                ((e = 1), (o = 1), (y = 0.5 * (k - p)), (g = 0.5 * (z - u))),
            f.setAttribute("x", 0),
            f.setAttribute("y", 0),
            f.setAttribute("width", k),
            f.setAttribute("height", z),
            f.setAttribute("fill", h),
            f.setAttribute("opacity", "1"),
            m.setAttribute("y", 0),
            m.setAttribute("x", 0),
            m.setAttribute("y", 0),
            m.setAttribute("width", e),
            m.setAttribute("height", o),
            d.setAttribute("x", y),
            d.setAttribute("y", g),
            d.setAttribute("width", p),
            $)
          ) {
            var w = y + 0.5 * p,
              E = g + 0.5 * u;
            d.setAttribute(
              "transform",
              "rotate(-" + $ + "," + w + "," + E + ")"
            );
          }
          d.setAttribute("height", u);
        }),
        'url("#' + m.id + '")'
      );
    }
    t6.get_latlng_bounds = oc;
    var oh = !1;
    function oy(e) {
      e || ((tc = {}), (tp = {})), (oh = t2.state_bbox_array);
      var t = K * e3 * l * 1.25;
      for (var r in ((tl = function (e) {
        var r = !tp[e],
          n = eZ[e];
        !n.path &&
          (n.geojson_value || n.feature || "geojson" == n.type) &&
          (n.path = tX(n, oh, eZ, e, "state"));
        var s = n.path ? n.path : t2.paths[e],
          c = r ? eP.path(s) : tp[e];
        r && (c.sm = { id: e }),
          ea || c.node.setAttribute("class", "sm_state sm_state_" + e);
        var p = {
            fill: n.color,
            opacity: n.opacity,
            stroke: n.border_color,
            cursor: "pointer",
            "stroke-opacity": 1,
            "stroke-width": t,
            "stroke-linejoin": "round",
          },
          m = n.border_hover_color ? n.border_hover_color : a.border_color,
          u = n.border_hover_size ? n.border_hover_size : K,
          d = u * e3 * l * 1.25,
          f = {
            opacity: n.hover_opacity,
            fill: n.hover_color,
            stroke: m,
            "stroke-width": d,
          };
        if (((c.sm.image = !1), n.image_url && !ea)) {
          var h = {
              hover: !1,
              image_url: n.image_url,
              image_size: n.image_size,
              image_position: n.image_position,
              image_x: n.image_x,
              image_y: n.image_y,
              image_color: n.image_color,
              bg_opacity: n.image_background_opacity,
            },
            y = of(c, h);
          if (((c.sm.image = !0), (p.fill = y), n.image_hover_url)) {
            var h = {
                hover: !0,
                image_url: n.image_hover_url,
                image_size: n.image_hover_size,
                image_position: n.image_hover_position,
                image_x: n.image_hover_x,
                image_y: n.image_hover_y,
                image_color: n.image_hover_color,
                bg_opacity: n.image_background_opacity,
              },
              y = of(c, h);
            f.fill = y;
          } else f.fill = y;
        }
        n.inactive && (p.cursor = "default"),
          n.image_source &&
            ((c.sm.ignore_hover = !0),
            (p.fill = "url(" + o + n.image_source + ")")),
          (n.border_hover_color || n.border_hover_size) && n.emphasize
            ? (c.sm.emphasizable = !0)
            : (c.sm.emphasizable = !1),
          (c.sm.border_hover_size = u),
          c.attr(p),
          c.transform(eC),
          (c.sm.attributes = p),
          (c.sm.over_attributes = f),
          (c.sm.description = n.description),
          (c.sm.adjacent_attributes = { "fill-opacity": W }),
          (c.sm.hide = n.hide),
          (c.sm.display = n.display),
          (c.sm.link_text = n.link_text),
          (c.sm.hide_label = n.hide_label),
          (c.sm.hide_name = n.hide_name),
          r && (c.sm.region = !1),
          (c.sm.name = n.name ? n.name : t2.names[e]),
          c.sm.name || (c.sm.name = e),
          (c.sm.url = n.url),
          (c.sm.inactive = n.inactive),
          (c.sm.on_click = tj(n.popup)),
          (c.sm.popup_off = tB(n.popup)),
          (c.sm.labels = []),
          (c.sm.zp = n.zoom_percentage),
          (c.sm.zoomable = n.zoomable),
          (c.sm.level = n.level),
          (c.sm.description_mobile = n.description_mobile),
          (c.sm.type = "state"),
          (c.sm.hide_labels = n.hide_label),
          (c.sm.content = o8(c));
        var $ = oh[e];
        $ || ($ = Raphael.pathBBox(s));
        var v = { x: $.x, x2: $.x2, y: $.y, y2: $.y2 };
        (c.sm.bbox = v),
          (c.sm.bbox.width = v.x2 - v.x),
          (c.sm.bbox.height = v.y2 - v.y),
          (c.sm.pulse_speed = n.pulse_speed),
          (c.sm.pulse_size = n.pulse_size),
          (c.sm.pulse_color = n.pulse_color ? n.pulse_color : n.border_color),
          c.sm.hide ? c.hide() : r && e2.push(c),
          r && ((tp[e] = c), eF.push(c));
      }),
      eJ))
        tl(r);
      tl[-1], eF.hide();
    }
    function o$() {
      eB.attr({ fill: a.background_color, "fill-opacity": X, stroke: "none" });
    }
    var ov = !1;
    function o_(e) {
      if ((e || (tm = {}), P))
        for (var t in P) {
          var o = eG[t],
            r = P[t],
            n = e ? tm[t] : eP.set();
          if (!e) {
            if (((n.sm = {}), (n.sm.states = []), tm[t])) {
              console.log("Duplicate Regions");
              continue;
            }
            for (var a = [], l = 0; l < r.states.length; l++) {
              var c = r.states[l],
                p = tp[c];
              if (!p) {
                console.log(c + " does not exist");
                continue;
              }
              if (p.sm.region) {
                console.log(p.sm.name + " already assigned to a region");
                continue;
              }
              (p.sm.region = t),
                n.sm.states.push(c),
                (ea && p.sm.ignore_hover && (o.color || o.hover_color)) ||
                  n.push(p),
                a.push(p.sm.bbox);
            }
            o.x &&
              o.y &&
              o.x2 &&
              o.y2 &&
              (a = [{ x: o.x, y: o.y, x2: o.x2, y2: o.y2 }]),
              (n.sm.bbox = s.bbox_union(a));
          }
          var m = { "fill-opacity": o.opacity, cursor: "pointer" },
            u = { "fill-opacity": o.hover_opacity };
          o.color && (m.fill = o.color),
            o.hover_color && (u.fill = o.hover_color),
            o.inactive && (m.cursor = "default"),
            (n.sm.attributes = m),
            (n.sm.name = r.name),
            (n.sm.description = o.description),
            (n.sm.description_mobile = o.description_mobile),
            (n.sm.url = o.url),
            (n.sm.labels = eP.set()),
            (n.sm.on_click = tj(o.popup)),
            (n.sm.over_attributes = u),
            (n.sm.hide_name = o.hide_name),
            (n.sm.adjacent_attributes = { "fill-opacity": W }),
            (n.sm.zoomable = o.zoomable),
            (n.sm.popup_off = tB(o.popup)),
            (n.sm.zp = o.zoom_percentage),
            (n.sm.inactive = o.inactive),
            (n.sm.type = "region"),
            (n.sm.id = t),
            (n.sm.content = o8(n)),
            e || (eO.push(n), (tm[t] = n)),
            (n.sm.zooming_dimensions = tG(n));
        }
      if (!e) {
        tm[-1] = {};
        var d = tm[-1];
        (d.sm = {}), (d.sm.type = "out"), (d.sm.zp = 1);
        var f = s.clone(e1);
        if (
          ((f.width = f.x2 - f.x),
          (f.height = f.y2 - f.y),
          (d.sm.bbox = f),
          (d.sm.zooming_dimensions = tG(d)),
          (tu = d),
          "object" == typeof b
            ? (((t8 = {}).sm = { type: "manual", zp: 1, bbox: b }),
              (t8.sm.zooming_dimensions = tG(t8)),
              (b = -1),
              (x = !1))
            : -1 == b ||
              b in tm ||
              (b in tp
                ? ((ov = tp[b]), (x = !1))
                : console.log(
                    "The initial_zoom is not the id of a region or state"
                  ),
              (b = -1)),
          y)
        ) {
          tm[-2] = {};
          var h = tm[-2];
          h.sm = { type: "manual", zp: 1 };
          var $ = tG(tm[b]),
            v = $.w,
            _ = $.h,
            g = $.w * (y - 1) * 0.5,
            w = $.h * (y - 1) * 0.5;
          h.sm.zooming_dimensions = {
            x: $.x - g,
            y: $.y - w,
            w: v * y,
            h: _ * y,
            r: y,
          };
        }
      }
    }
    function og(e) {
      var t = e.getBBox(!0);
      if (ea) {
        var o = e._getBBox(!0);
        t.height = o.height;
      }
      var r = 0.5 * t.width,
        n = 0.5 * t.height,
        s = e.sm.point0;
      return {
        x: s.x - r,
        y: s.y - n,
        x2: s.x + r,
        y2: s.y + n,
        width: t.width,
        height: t.height,
      };
    }
    function o0() {
      for (var e in (s.clear_sets([eD, e4, eI]),
      (td = {}),
      (ty = {}),
      (tf = {}),
      (e9 = e9.reverse()),
      (th = function (e) {
        var t = e9[e],
          o = !1,
          r = !1;
        if (e9.hasOwnProperty(e)) {
          var n = !td[e],
            c = eP.set(),
            p = { x: 1 * t.x, y: 1 * t.y },
            m = {},
            u = !1,
            d = !1;
          if (
            ("state" == t.parent_type
              ? (u = tp[t.parent_id])
              : "region" == t.parent_type
              ? (u = tm[t.parent_id])
              : "location" == t.parent_type && (u = t$[t.parent_id]),
            !t.x && !t.y && u)
          ) {
            if ("location" == u.sm.type)
              (r = !0),
                (m.x = u.sm.x),
                (m.y = u.sm.y),
                (p = u.sm.point0),
                (o = !0),
                u.sm.auto_size && (d = !0);
            else if ("state" == u.sm.type) {
              var f = u.sm.bbox;
              if (f.cx && f.cy)
                var h = S,
                  y = j;
              else
                var h = (f.x + f.x2) / 2,
                  y = (f.y + f.y2) / 2;
              (t.x = h), (t.y = y), (m.x = h), (m.y = y), (p = { x: h, y: y });
            }
          }
          if ((t.parent_type, !u)) {
            console.log("The following object does not exist: " + e);
            return;
          }
          if (("Not Named" == t.name && u && (t.name = u.sm.id), n)) {
            if (!r) {
              var $ = s.rotate([t.x, t.y], eC);
              m = { x: $[0], y: $[1] };
            }
            var v = eP.text(m.x, m.y, t.name);
            td[e] = v;
          } else var v = td[e];
          (v.sm = {}),
            (v.sm.hide = t.hide),
            u && (u.sm.hide_label || u.sm.hide) && (v.sm.hide = !0),
            (v.sm.parent = u),
            u.sm.labels.push(v),
            u.sm.region && tm[u.sm.region].sm.labels.push(v);
          var _ = {
              "stroke-width": 0,
              fill: t.color,
              "font-size": t.size,
              "font-weight": "bold",
              cursor: "pointer",
              "font-family": t.font_family,
              "text-anchor": t.anchor,
              opacity: t.opacity,
            },
            g = { fill: t.hover_color, opacity: t.hover_opacity },
            b = { fill: t.color, opacity: t.opacity };
          if (
            (u.sm.inactive && (_.cursor = "default"),
            v.attr(_),
            (v.sm.attributes = _),
            (v.sm.over_attributes = g),
            (v.sm.out_attributes = b),
            (v.sm.type = "label"),
            (v.sm.id = e),
            (v.sm.scale = o || t.scale),
            (v.sm.scale_limit = t.scale_limit),
            (v.sm.x = m.x),
            (v.sm.y = m.y),
            (v.sm.level = s.to_float(u.sm.level) + 0.1),
            (v.sm.point0 = p),
            (v.sm.line_x = t.line_x),
            (v.sm.line_y = t.line_y),
            (v.sm.line = !1),
            (v.sm.rotate = t.rotate),
            v.transform(ox(v, e3)),
            t.display
              ? (v.sm.display = t.display)
              : "region" == t.parent_type
              ? (v.sm.display = "out")
              : "location" == t.parent_type
              ? (v.sm.display = u.sm.display)
              : (v.sm.display = a.labels_display ? a.labels_display : "all"),
            (v.sm.display_ids = !!t.display_ids && t.display_ids),
            (t.line || t.pill || d) && (v.sm.bbox = og(v)),
            "auto" == t.display && "state" == t.parent_type)
          ) {
            (v.sm.display = 1e-4), v.sm.bbox || (v.sm.bbox = og(v));
            var x = [
                0.99, 0.501, 0.251, 0.1251, 0.06251, 0.031251, 0.0156255,
                0.00781275,
              ],
              w = t2.paths[u.sm.id],
              k = u.sm.bbox;
            for (var z in x) {
              var P = x[z],
                E = og(v),
                A = E.width * P * 0.5,
                C = E.height * P * 0.5,
                S = 0.5 * (E.x2 + E.x),
                j = 0.5 * (E.y2 + E.y),
                h = S - A,
                B = S + A,
                y = j - C,
                T = j + C,
                I = h > k.x && B < k.x2,
                F = y > k.y && T < k.y2;
              if (I && F) {
                var O = Raphael.isPointInsidePath(w, h, y),
                  L = Raphael.isPointInsidePath(w, B, y),
                  M = Raphael.isPointInsidePath(w, h, T),
                  N = Raphael.isPointInsidePath(w, B, T),
                  D = O && L && M && N,
                  R = E.width / P < ew;
                if (D && R) {
                  v.sm.display = P;
                  break;
                }
              }
              if (!v.sm.scale) break;
            }
          }
          if (t.line) {
            var q = ob(v),
              H = eP.path(q),
              V = t.line_size * l * e3 * 1.25,
              W = {
                stroke: t.line_color,
                cursor: "pointer",
                "stroke-width": V,
              };
            H.attr(W),
              (H.sm = {}),
              (H.sm.type = "label"),
              (v.sm.pill = !1),
              (H.sm.size = t.line_size),
              (H.sm.id = e),
              (H.sm.level = t.level),
              (v.sm.line = H),
              e4.push(H),
              c.push(H);
          }
          if ("state" == u.sm.type && t.pill) {
            var X = v.sm.bbox,
              Y = 1.45 * X.width,
              Q = t.width ? t.width : Y,
              Z = 1.15 * X.height,
              h = v.sm.x - 0.5 * Q,
              y = v.sm.y - 0.5 * Z,
              U = "auto" != t.pill_radius ? t.pill_radius : Z / 5;
            if (ty[e]) var G = ty[e];
            else {
              var G = eP.rect(h, y, Q, Z, U);
              ty[e] = G;
            }
            if (
              (G.transform(ox(v, e3)),
              (G.sm = {}),
              (G.sm.parent = u),
              (G.sm.level = u.sm.level),
              (G.sm.attributes = s.clone(u.sm.attributes)),
              u.sm.image && (G.sm.attributes.fill = eZ[u.sm.id].color),
              (G.sm.over_attributes = s.clone(u.sm.over_attributes)),
              u.sm.image &&
                (G.sm.over_attributes.fill = eZ[u.sm.id].hover_color),
              (G.sm.adjacent_attributes = s.clone(u.sm.adjacent_attributes)),
              G.attr(G.sm.attributes),
              s.x_in_array(v.sm.display, ["state", "all"]) &&
                (u.sm.bbox = s.bbox_union([u.sm.bbox, v.sm.bbox])),
              s.x_in_array(v.sm.display, ["region", "all"]) && u.sm.region)
            ) {
              var J = tm[u.sm.region];
              (J.sm.bbox = s.bbox_union([J.sm.bbox, v.sm.bbox])),
                (J.sm.zooming_dimensions = !1),
                (J.sm.zooming_dimensions = tG(J));
            }
            (v.sm.pill = G), eI.push(G), c.push(G), c.push(v);
          } else c.push(v);
          if (
            (("out" != v.sm.display && "all" != v.sm.display) || v.sm.hide
              ? c.hide()
              : eA.push(c),
            "location" != v.sm.parent.sm.type || v.sm.line || e7.push(c),
            eD.push(c),
            (tf[e] = c),
            ea || v.node.setAttribute("class", "sm_label sm_label_" + e),
            d)
          ) {
            var K =
                ((a.location_auto_padding
                  ? 1 + 2 * a.location_auto_padding
                  : 1.3) *
                  v.sm.bbox.width) /
                l,
              ee = v.sm.parent,
              et = ee.sm.labels,
              eo = ee.sm.shape_type;
            "triangle" == eo ? (K *= 1.3) : "star" == eo && (K *= 2);
            var ei = ee.sm.id;
            (eU[ei].size = K), tv(ei);
            var ee = t$[ei];
            (v.sm.parent = ee),
              (ee.sm.labels = et),
              ee.sm.labels.push(v),
              (ee.sm.auto_size = !0);
          }
        }
      }),
      e9))
        th(e);
      eD.hide();
    }
    function ob(e) {
      var t = e.sm.bbox,
        o = t.x2 - t.x,
        r = t.y2 - t.y,
        n = e.sm.scale ? ez : 1,
        a = 0.5 * (1 - n) * o,
        l = 0.5 * (1 - n) * r,
        c = e.sm.line_x,
        p = e.sm.line_y,
        m = !c || !p,
        u = e.sm.parent.sm.type;
      if ("location" == u && m)
        (c = e.sm.parent.sm.point0.x), (p = e.sm.parent.sm.point0.y);
      else if ("state" == u && m) {
        var d = e.sm.parent.sm.bbox;
        (c = 0.5 * (d.x2 + d.x)), (p = 0.5 * (d.y2 + d.y));
      }
      var f = { x: c, y: p },
        h = [];
      h.push({ x: t.x2 - a, y: 0.5 * (t.y + t.y2) }),
        h.push({ x: t.x + a, y: 0.5 * (t.y + t.y2) }),
        h.push({ x: 0.5 * (t.x + t.x2), y: t.y + l }),
        h.push({ x: 0.5 * (t.x + t.x2), y: t.y2 - l });
      var y = {};
      for (var $ in h) {
        var v = h[$],
          _ = s.distance(v, f);
        (0 == $ || _ < y.distance) &&
          ((y.label = v), (y.location = f), (y.distance = _));
      }
      return s.linePath(y.label.x, y.label.y, y.location.x, y.location.y);
    }
    function ox(e, t, o, r, n, s) {
      var a = void 0 === r ? e.sm.x : r,
        l = void 0 === n ? e.sm.y : n;
      return (
        void 0 === o && (o = "0,0"),
        void 0 === s && (s = e.sm.rotate),
        "t " + o + " s" + t + "," + t + "," + a + "," + l + "r" + s
      );
    }
    var o3 = {
      triangle: "M -0.57735,.3333 .57735,.3333 0,-.6666 Z",
      diamond: "M 0,-0.5 -0.4,0 0,0.5 0.4,0 Z",
      marker:
        "m-.015-.997c-.067 0-.13.033-.18.076-.061.054-.099.136-.092.219-.0001.073.034.139.068.201.058.104.122.206.158.32.021.058.039.117.058.175.006.009.011-.004.011-.009.037-.125.079-.249.144-.362.043-.08.095-.157.124-.244.022-.075.016-.161-.026-.229-.048-.08-.134-.136-.227-.146-.013-.0001-.027-.0001-.04-.0001z",
      heart:
        "m-.275-.5c-.137.003-.257.089-.3.235-.073.379.348.539.58.765.202-.262.596-.33.576-.718-.017-.086-.065-.157-.13-.206-.087-.066-.208-.089-.311-.05-.055.02-.106.053-.143.098-.065-.081-.169-.127-.272-.125",
      star: "m0-.549c-.044.126-.084.252-.125.379-.135.0001-.271.0001-.405.002.108.078.216.155.323.233-.002.029-.016.057-.023.085-.032.099-.066.199-.097.298.049-.031.095-.068.143-.101.062-.044.124-.089.185-.133.109.077.216.158.326.233-.04-.127-.082-.253-.123-.379.109-.079.219-.156.327-.236-.135-.0001-.27-.002-.405-.003-.042-.126-.081-.252-.125-.377",
    };
    function ow(e) {
      for (var t in I) o3[t] = I[t];
      var r = [];
      for (var t in o3) r.push(t);
      for (var t in (s.clear_sets([eL]),
      (t$ = {}),
      (tv = function (e) {
        var t = "center",
          n = eU[e];
        if ("image" != n.type)
          var a = {
              "stroke-width": n.border * e3 * l,
              stroke: n.border_color,
              fill: n.color,
              opacity: n.opacity,
              cursor: "pointer",
            },
            c = {
              "stroke-width": n.hover_border * e3 * l,
              stroke: n.border_color,
              fill: n.hover_color,
              opacity: n.hover_opacity,
              cursor: "pointer",
            };
        else {
          t = n.image_position;
          var a = { cursor: "pointer" },
            c = { cursor: "pointer" };
        }
        n.inactive && (a.cursor = "default");
        var p = eU[e].type,
          m = n.size * l;
        if (n.x && n.y) {
          var u = {};
          (u.x = n.x), (u.y = n.y);
        } else var u = tZ(n.lat, n.lng);
        var d = s.rotate([u.x, u.y], eC),
          f = { x: d[0], y: d[1] };
        if ("auto" == n.size) {
          var h = { sm: {} };
          (h.sm.display = n.display),
            (h.sm.auto_size = !0),
            (h.sm.type = "location"),
            (h.sm.hide_label = !1),
            (h.sm.labels = []),
            (h.sm.point0 = u),
            (h.sm.x = f.x),
            (h.sm.y = f.y),
            (h.sm.shape_type = p),
            (h.sm.id = e),
            (t$[e] = h);
          return;
        }
        if ("circle" == p)
          var y = eP.circle(f.x, f.y, 0.5 * m),
            $ = {
              x: f.x - 0.5 * m * ez,
              y: f.y - 0.5 * m * ez,
              x2: f.x + 0.5 * m * ez,
              y2: f.y + 0.5 * m * ez,
            };
        else if (s.x_in_array(p, r)) {
          var v = m,
            _ = "S" + v + "," + v + ",0,0 T" + f.x + "," + f.y,
            g = Raphael.transformPath(o3[p], _).toString() + "Z";
          "marker" == p && (t = "bottom-center");
          var $ = Raphael.pathBBox(g),
            y = eP.path(g);
        } else if ("path" == p && eU[e].path) {
          var $ = Raphael.pathBBox(g),
            y = eP.path(eU[e].path);
          n.scale = !1;
        } else if ("geojson" == p) {
          var g = tX(eU[e], te, eU, e, "location"),
            $ = Raphael.pathBBox(g);
          n.scale = !1;
          var y = eP.path(g);
        } else if ("image" == p) {
          var b = n.image_url ? n.image_url : o + n.image_source,
            y = eP.image(b, 0, 0);
          (a.src = b), (y.sm = {});
          var $ = !1;
          if (
            (Raphael._preload(b, function () {
              var e = this.width / this.height,
                o = m,
                r = o * e,
                n = f.x - r / 2,
                s = "bottom-center" == t ? f.y - o : f.y - o / 2;
              y.attr({ height: o, width: r, x: n, y: s }),
                (y.sm.bbox = { x: n, y: s, x2: n + r, y2: s + o });
            }),
            n.image_hover_url || n.image_hover_source)
          ) {
            var x = n.image_hover_url
              ? n.image_hover_url
              : o + n.image_hover_source;
            c.src = x;
          }
        } else
          var w = m,
            k = w,
            z = f.x - k / 2,
            P = f.y - w / 2,
            y = eP.rect(z, P, k, w),
            $ = { x: z, y: P, x2: z + k, y2: P + ex };
        (y.sm = {}),
          (y.sm.image = "image" == p),
          (y.sm.attributes = a),
          y.attr(a),
          (y.sm.link_text = n.link_text),
          (y.sm.original_transform = eC),
          (y.sm.over_attributes = c),
          (y.sm.id = e),
          (y.sm.name = n.name),
          (y.sm.scale = n.scale),
          (y.sm.scale_limit = n.scale_limit),
          (y.sm.position = t),
          (y.sm.url = n.url),
          (y.sm.type = "location"),
          (y.sm.shape_type = p),
          (y.sm.description = n.description),
          (y.sm.description_mobile = n.description_mobile),
          (y.sm.inactive = n.inactive),
          (y.sm.on_click = tj(n.popup)),
          (y.sm.popup_off = tB(n.popup)),
          (y.sm.pulse = n.pulse),
          (y.sm.level = n.level),
          "bottom" == n.position && (y.sm.level = -1),
          (y.sm.pulse_speed = n.pulse_speed),
          (y.sm.pulse_size = n.pulse_size),
          (y.sm.pulse_color = n.pulse_color ? n.pulse_color : n.color),
          (y.sm.x = f.x),
          (y.sm.y = f.y),
          (y.sm.point0 = u),
          (y.sm.bbox = $),
          (y.sm.labels = []),
          (y.sm.size = m),
          (y.sm.hide = n.hide),
          (y.sm.hide_name = n.hide_name),
          (y.sm.display = n.display),
          (y.sm.display_ids = !!n.display_ids && n.display_ids),
          y.transform(ox(y, ez * e3)),
          ("region" == y.sm.display || "state" == y.sm.display || n.hide) &&
            y.hide(),
          (y.sm.content = o8(y)),
          eL.push(y),
          (t$[e] = y),
          ea || y.node.setAttribute("class", "sm_location sm_location_" + e);
      }),
      te))
        tv(t);
    }
    function ok(e) {
      if (!e.sm) return e;
      var t = t6.zoom_level,
        o = t6.zoom_level_id,
        r = !!e.sm.region && tm[e.sm.region];
      if (!r) return e;
      if ("out" == t) return r;
      if ("region" == t) return o == r.sm.id ? e : r;
      if ("state" == t) return tp[o].sm.region === r.sm.id ? e : r;
      if ("manual" == t)
        return ez > r.sm.zooming_dimensions.r || !r.sm.zoomable ? r : e;
    }
    function o1(e) {
      var t = t6.zoom_level,
        o = t6.zoom_level_id;
      if ("state" == t) return o != e.sm.id;
      if ("region" != t) return !1;
      var r = !!e.sm.region && tm[e.sm.region];
      return !r || (o != r.sm.id && void 0);
    }
    var oz = function (e, t, o, r) {
        void 0 == o && (o = !1),
          void 0 == r && (r = !1),
          r ||
            (r =
              "over" == t
                ? e.sm.over_attributes
                : "adjacent" == t
                ? e.sm.adjacent_attributes
                : e.sm.attributes),
          !o || e.sm.image ? e.attr(r) : e.animate(r, q);
      },
      o5 = function (e, t, o) {
        if ((void 0 == o && (o = !1), "state" == o))
          var r,
            n = e.sm.parent;
        else if ("region" == o) var n = tm[e.sm.parent.sm.region];
        else var n = ok(e.sm.parent);
        if (
          ((r =
            "over" == t
              ? s.clone(n.sm.over_attributes)
              : "adjacent" == t
              ? s.clone(n.sm.adjacent_attributes)
              : s.clone(n.sm.attributes)),
          n.sm.image && "state" == n.sm.type)
        ) {
          var a = eZ[n.sm.id];
          "over" == t ? (r.fill = a.hover_color) : (r.fill = a.color);
        }
        oz(e, t, !1, r);
      };
    function oP(e, t, o, r) {
      if (e.sm.labels) {
        var n;
        e.sm.labels.forEach(function (e) {
          if (e.sm) {
            var n = e.sm.pill;
            "over" == t
              ? (e.stop(), oz(e, "over"), n && o5(n, "over"))
              : ("reset" == t || "out" == t) &&
                (oz(e, "out"),
                n && (o5(n, "out", r), o && o5(n, "adjacent", r)));
          }
        });
      }
    }
    var o6 = !1,
      o4 = function (e, t) {
        if (!e.sm || !e) {
          s.isFunction(t) && t();
          return;
        }
        var o = !!e.sm.image || (!!em && !!v);
        if ((tP.hide(), o1(e)))
          e.sm.ignore_hover || e.animate(e.sm.attributes, q, r),
            e.animate(e.sm.adjacent_attributes, q, r),
            oP(e, "out", !0);
        else {
          if (
            (ea && "location" == e.sm.type && "image" == e.sm.shape_type) ||
            !e ||
            !e.sm
          )
            return;
          e.sm.ignore_hover ||
            (o
              ? (e.attr(e.sm.attributes), r())
              : e.animate(e.sm.attributes, q, r)),
            oP(e, "out");
        }
        function r() {
          s.isFunction(t) && t();
        }
      },
      o2 = !1,
      o7 = !1;
    function oE(e) {
      if (e.touches) {
        var t = e.changedTouches ? e.changedTouches[0] : e.touches[0];
        return { x: t.clientX, y: t.clientY };
      }
      var o = el ? e.clientY + document.documentElement.scrollTop : e.pageY;
      return {
        x: el ? e.clientX + document.documentElement.scrollLeft : e.pageX,
        y: o,
      };
    }
    var oA = function () {
        oa();
      },
      oC = {};
    function oS() {
      var e = [eF, eL, eD, e4, eI];
      all = [];
      for (var t = 0; t < e.length; t++)
        for (var o = 0; o < e[t].length; o++)
          if (e[t][o].length > 0)
            for (var r = 0; r < e[t][o].length; r++) all.push(e[t][o][r]);
          else all.push(e[t][o]);
      var n = (function e(t) {
          for (var o = {}, r = 0; r < t.length; r++) {
            var n = t[r],
              a = n.sm.level.toString();
            o[a] || (o[a] = []), o[a].push(n);
          }
          var l = [];
          for (var a in o) o.hasOwnProperty(a) && l.push(s.to_float(a));
          l.sort(function (e, t) {
            return t - e;
          });
          for (var c = [], p = {}, m = 0; m < l.length; m++) {
            for (var u = o[l[m]], d = eP.set(), f = 0; f < u.length; f++)
              d.push(u[f]);
            d.push(eP.circle(0, 0, 0));
            var h = l[m].toString();
            d.items.reverse(), (p[h] = d), c.push(d);
          }
          return [c, p];
        })(all),
        a = n[0];
      oC = n[1];
      for (var t = 0; t < a.length; t++) a[t].toBack();
      ej.toBack();
    }
    function oj(e) {
      !e &&
        (ec
          ? (eF.mouseup(tb), ej.mouseup(oA), eq.mouseup(tz), ej.mouseup(oQ))
          : (eF.hover(tx, t3),
            eF.click(tb),
            ej.click(oA),
            eq.click(tz),
            ej.hover(oQ, oQ)),
        _ &&
          (function e() {
            var t;
            function o() {
              oB();
            }
            (t5 = function () {
              clearTimeout(t), (t = setTimeout(o, 200));
            }),
              window.addEventListener
                ? (window.addEventListener("resize", t5, !1),
                  window.addEventListener("orientationchange", t5, !1))
                : (window.attachEvent("resize", t5, !1),
                  window.attachEvent("orientationchange", t5, !1)),
              ea &&
                (document.body.onresize = function () {
                  o();
                });
          })(),
        v &&
          (eF.touchstart(tb),
          eF.touchend(tb),
          eq.touchend(t1),
          (function e() {
            function t(e) {
              var t = oE(e),
                s = t.x,
                a = t.y,
                l = (r - s) * o.r,
                c = (n - a) * o.r,
                p = 5 * o.r;
              return (
                (Math.abs(l) > p || Math.abs(c) > p) && (tV = !0),
                { x: o.x + l, y: o.y + c, w: o.w, h: o.h, r: o.r }
              );
            }
            var o,
              r,
              n,
              a = !1;
            function l(e) {
              if (z) return !1;
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                (o = { x: ta.x, y: ta.y, w: ta.w, h: ta.h, r: ta.w / ew / e3 }),
                (a = !0);
              var t = oE(e);
              (r = t.x), (n = t.y), tP.hide(), tP.pos(e);
            }
            function c(e) {
              if (a && (!e.touches || !(e.touches.length > 1))) {
                var o = t(e);
                eP.setViewBox(o.x, o.y, o.w, o.h), op(o);
              }
            }
            function p(e) {
              if (!a || !tV) {
                (tV = !1), (a = !1);
                return;
              }
              var o = t(e);
              eP.setViewBox(o.x, o.y, o.w, o.h),
                (ta = o),
                ((tu = { sm: {} }).sm.zooming_dimensions = ta),
                (tu.sm.type = "manual"),
                (a = !1),
                setTimeout(function () {
                  tV = !1;
                }, 1),
                tR();
            }
            s.addEvent(ef, "mousedown", l),
              s.addEvent(ef, "mousemove", c),
              s.addEvent(ef, "mouseup", p),
              s.addEvent(ef, "mouseleave", p),
              s.addEvent(ef, "touchstart", l),
              s.addEvent(ef, "touchmove", c),
              s.addEvent(ef, "touchend", p);
          })(),
          (function e() {
            var t = !1;
            function o(e) {
              if (!tH && e.touches && e.touches.length > 1) {
                tW = !0;
                var o,
                  r,
                  n,
                  a =
                    ((r = {
                      x: (o = e).touches[0].pageX,
                      y: o.touches[0].pageY,
                    }),
                    (n = { x: o.touches[1].pageX, y: o.touches[1].pageY }),
                    s.distance(r, n));
                if (t) {
                  var l = a - t;
                  Math.abs(l) > 10 && (l > 0 ? eX() : eY(), (t = a));
                } else t = a;
              }
            }
            s.addEvent(ey, "touchstart", o),
              s.addEvent(ey, "touchmove", o),
              s.addEvent(ey, "touchend", function e(o) {
                (t = !1),
                  setTimeout(function () {
                    tW = !1;
                  }, 100);
              });
          })()),
        (eh.mouseIsOver = !1),
        (eh.onmouseover = function () {
          this.mouseIsOver = !0;
        }),
        (eh.onmouseout = function () {
          this.mouseIsOver = !1;
        }),
        (eh.onwheel = function (e) {
          eh.mouseIsOver &&
            v &&
            E &&
            (e.preventDefault(), e.deltaY < 0 ? eX() : eY());
        }),
        s.addEvent(document, "keyup", function e(t) {
          "auto" == f &&
            (ey.contains(document.activeElement)
              ? ev.style.setProperty("display", "block")
              : ev.style.setProperty("display", "none"));
        })),
        eL.hover(tx, t3),
        eL.click(tb),
        eD.hover(tw, tk),
        eD.click(t0),
        v && (eL.touchend(tb), eL.touchstart(tb), eD.touchend(t0));
    }
    function oB() {
      if (!(eh.offsetWidth < 1)) {
        tI(!0),
          eP.setSize(eb, ex),
          setTimeout(function () {
            op(ta);
          }, 50);
        var e = K * (eb / ew) * l * 1.25;
        eF &&
          eL &&
          (eF.forEach(function (t) {
            t.attr({ "stroke-width": e }),
              (t.sm.attributes["stroke-width"] = e),
              (t.sm.over_attributes["stroke-width"] =
                t.sm.border_hover_size * (eb / ew) * l * 1.25);
          }),
          eL.forEach(function (e) {
            "image" != eU[e.sm.id].type &&
              ((e.sm.attributes["stroke-width"] =
                eU[e.sm.id].border * (eb / ew) * l * 1.25),
              (e.sm.over_attributes["stroke-width"] =
                eU[e.sm.id].hover_border * (eb / ew) * l * 1.25),
              e.attr({ "stroke-width": e.sm.attributes["stroke-width"] }));
          }),
          e4.forEach(function (e) {
            var t = e.sm.size * (eb / ew) * l * 1.25;
            e.attr({ "stroke-width": t });
          }),
          eE.forEach(function (e) {
            var t = e.sm.size * (eb / ew) * l * 1.25;
            e.attr({ "stroke-width": t });
          })),
          tN();
        var t = eb / 2 > 250 ? eb / 2 : 250;
        tr = et || t;
      }
    }
    function oT(e) {
      var t = y ? tm[-2] : tm[b],
        o = tm[b];
      if ((N || tD(), !e)) {
        if (ov) var r = ov;
        else if (t8) var r = t8;
        else var r = t;
        om(r, (!ov && !t8) || !y);
      }
      if (x && -1 != b) {
        ej.show(), N || tD();
        for (var n = 0; n < o.sm.states.length; n++) {
          var s = tp[o.sm.states[n]];
          s.sm.hide || s.show();
        }
        for (var n in td) {
          var a = td[n],
            l = tf[n];
          a.sm.parent &&
            "state" == a.sm.parent.sm.type &&
            (a.sm.parent.sm.region != o.sm.id || !a.sm.parent.sm.region) &&
            ((a.sm.hide = !0), l.hide());
        }
        eE.forEach(function (e) {
          Raphael.isPointInsideBBox(o.sm.bbox, e.sm.bbox.x, e.sm.bbox.y) &&
            e.show();
        }),
          !e && y && om(tm[b]);
        return;
      }
      ej.show(),
        e2.show(),
        eA.show(),
        oi(),
        eE.show(),
        e || !y || ov || t8 || om(tm[b]);
    }
    function oI(e) {
      tS(),
        tq(),
        oy(!0),
        o_(!0),
        ow(!0),
        o0(),
        o$(),
        or(tu, !0),
        oS(),
        oj(!0),
        oB(),
        oT(!0),
        on(tu),
        il(),
        oN(!0),
        tC("refresh_complete", []),
        tF(!0),
        s.isFunction(e) && e();
    }
    function oF(n) {
      var p,
        j,
        B,
        I,
        L,
        M,
        D,
        q,
        H,
        W,
        X,
        Q,
        Z,
        G,
        J,
        K,
        e0,
        e5,
        eZ,
        eU,
        eG,
        eJ,
        eK,
        e9,
        te,
        tt,
        to,
        tn;
      if (
        ((t4 = t6.mapdata),
        (t2 = t6.mapinfo),
        ef && delete window.paper,
        ia(),
        (r = t4.state_specific),
        (a = t4.main_settings),
        (j = (p = document.getElementsByTagName("script"))[p.length - 1].src),
        (B = "no" != a.back_image && a.back_image),
        (e = "no" != a.back_image_url && a.back_image_url),
        (o =
          (t = "default" != a.images_directory && a.images_directory) ||
          j.substring(0, j.lastIndexOf("/countrymap.js") + 1) + "map_images/"),
        !e && B && (e = o + B),
        (ea = "VML" == Raphael.type),
        (el = !!window.document.documentMode),
        (ec = !!s.isMobile.iOS()),
        (em = !!s.isMobile.any()),
        (eu = a.pop_ups ? a.pop_ups : a.popups),
        (e8 =
          void 0 === a.mobile_scaling && "no" != a.mobile_scaling
            ? 1
            : a.mobile_scaling),
        (ep = !1),
        (tT = tB(eu)),
        (g = void 0 === a.div ? "map" : a.div),
        (b = void 0 === a.initial_zoom ? -1 : a.initial_zoom),
        (x = "yes" == a.initial_zoom_solo && -1 != b),
        (y =
          void 0 !== a.fly_in_from && "no" != a.fly_in_from && a.fly_in_from),
        (_ = "responsive" == a.width),
        "0" == ($ = !!a.rotate && a.rotate) && ($ = !1),
        (R = "no" != a.zoom),
        (v = "yes" == a.manual_zoom),
        (f = void 0 === a.keyboard_navigation ? "auto" : a.keyboard_navigation),
        (h = void 0 === a.legend_position ? "inside" : a.legend_position),
        (E = "no" != a.allow_scrolling),
        (P = !!t2.default_regions && !!R && t2.default_regions),
        t4.regions && (P = t4.regions),
        t4.labels && (V = t4.labels),
        (w = !1),
        (k = !1),
        (z = !1),
        (u = !1),
        (function e() {
          if ("continent" != c) return !1;
          var t = 0;
          for (var o in t2.paths) t++;
          return t > 8;
        })())
      ) {
        alert("The continent map can't be used with other data.");
        return;
      }
      tS(),
        (function e() {
          if (
            ((eh = document.getElementById(g)),
            (ey =
              !!document.getElementById(g + "_holder") &&
              document.getElementById(g + "_holder")))
          ) {
            eh.removeChild(ey);
            var t = document.getElementById("tt_sm_" + g);
            t && t.parentNode.removeChild(t);
          }
          (ey = document.createElement("div")),
            (ed = document.createElement("div")),
            (ev = document.createElement("div")),
            (e$ = document.createElement("div")),
            (ef = document.createElement("div")),
            (e_ = document.createElement("div")),
            (eg = document.createElement("div")),
            (ed.id = g + "_outer"),
            (e$.id = g + "_zoom"),
            (ev.id = g + "_access"),
            (e_.id = g + "_legend"),
            (eg.id = g + "_background"),
            (ef.id = g + "_inner"),
            (ey.id = g + "_holder"),
            ey.style.setProperty("position", "relative"),
            ey.setAttribute("tabIndex", 0),
            ey.style.setProperty("outline", "none"),
            ef.style.setProperty("position", "relative"),
            ed.style.setProperty("position", "absolute"),
            e$.style.setProperty("position", "absolute"),
            ev.style.setProperty("position", "absolute"),
            ev.style.setProperty("max-width", "75%"),
            eg.style.setProperty("position", "absolute"),
            e_.style.setProperty(
              "position",
              "inside" == h ? "absolute" : "relative"
            ),
            e$.style.setProperty("z-index", "1"),
            ed.style.setProperty("z-index", "1"),
            ev.style.setProperty("z-index", "1"),
            eg.style.setProperty("z-index", "-1"),
            eg.style.setProperty("visibility", "hidden"),
            eg.style.setProperty("width", "1000px"),
            eg.style.setProperty("height", "636px"),
            eg.style.setProperty("top", "0"),
            eg.style.setProperty("left", "0"),
            ev.style.setProperty("display", "yes" == f ? "block" : "none"),
            e_.style.setProperty("z-index", "1"),
            eh.appendChild(ey),
            ey.appendChild(e$),
            ey.appendChild(ed),
            ey.appendChild(ev),
            ey.appendChild(ef),
            ey.appendChild(e_),
            ey.appendChild(eg);
        })(),
        tI(),
        (function e() {
          var t = a.backgroundmap_tiles_url;
          if (t) {
            var o = simplemaps_backgroundmap.pmtiles;
            s.new_style(simplemaps_backgroundmap.css);
            var r = t2.initial_view,
              n = tQ(r.x, r.y2),
              l = tQ(r.x2, r.y),
              c = [];
            (c[0] = n.lng), (c[1] = n.lat), (c[2] = l.lng), (c[3] = l.lat);
            var p = [
                [c["0"], c["1"]],
                [c["2"], c["3"]],
              ],
              m = {
                version: simplemaps_backgroundmap.settings.version,
                glyphs: simplemaps_backgroundmap.settings.glyphs,
                sources: { protomaps: { type: "vector" } },
                layers: simplemaps_backgroundmap.settings.layers,
              };
            t &&
              (t.includes("pmtiles")
                ? (m.sources.protomaps.url = "pmtiles://" + t)
                : ((m.sources.protomaps.tiles = []),
                  m.sources.protomaps.tiles.push(t)));
            var u = new o.Protocol();
            maplibregl.addProtocol("pmtiles", u.tile),
              (ol = new maplibregl.Map({
                container: eg.id,
                attributionControl: !1,
                style: m,
              })),
              (t6.maplibre = ol),
              ol.once("load", () => {
                ol.fitBounds(p, { padding: 0, animate: !1 }),
                  eg.style.setProperty("visibility", "visible");
              });
          }
        })(),
        (function e() {
          if (
            ((ej = (eP = Raphael(ef, eb, ex)).set()),
            (eB = eP.rect(e1.x - 2 * ew, e1.y - 2 * ek, 5 * ew, 5 * ek)),
            C)
          ) {
            C.indexOf("/osm/noattr/") > -1 && (m = !0);
            var t = S || e1;
            (eT = eP.image(C, t.x, t.y, t.x2 - t.x, t.y2 - t.y)), ej.push(eT);
          }
          A && (m = !0),
            ej.push(eB),
            ej.transform(eS),
            ej.hide(),
            (eF = eP.set()),
            (e2 = eP.set()),
            (eO = eP.set()),
            (eL = eP.set()),
            (eM = eP.set()),
            (eN = eP.set()),
            (eD = eP.set()),
            (e7 = eP.set()),
            (eA = eP.set()),
            (eE = eP.set()),
            (eI = eP.set()),
            (e4 = eP.set()),
            (e6 = eP.set()).push(eF, eL, ej, eD, eE);
        })(),
        tN(),
        (function e() {
          if (
            ((tM = document.createElement("div")).style.setProperty(
              "overflow",
              "visible",
              "important"
            ),
            tM.style.setProperty("clip-path", "none", "important"),
            tM.style.setProperty("display", "inline", "important"),
            tM.style.setProperty("opacity", "1", "important"),
            tM.style.setProperty("transform", "none", "important"),
            tM.style.setProperty("visibility", "visibible", "important"),
            tM.style.setProperty("z-index", "1", "important"),
            tM.style.setProperty("position", "absolute", "important"),
            tM.style.setProperty("filter", "opacity(1)", "important"),
            tM.style.setProperty("right", "5px", "important"),
            tM.style.setProperty("bottom", "5px", "important"),
            ef.appendChild(tM),
            m)
          ) {
            var t = document.createElement("a");
            (t.href = "https://www.openstreetmap.org/copyright"),
              (t.title = "Background \xa9 OpenStreetMap contributors"),
              (t.innerHTML = "&copy; OSM"),
              t.style.setProperty(
                "font",
                "12px Verdana, Arial, Helvetica, sans-serif",
                "important"
              ),
              t.style.setProperty("cursor", "pointer", "important"),
              t.style.setProperty("float", "right", "important"),
              t.style.setProperty("color", "#000000", "important"),
              t.style.setProperty("text-decoration", "none", "important"),
              t.style.setProperty("marginLeft", ".5em"),
              tM.appendChild(t);
          }
        })(),
        en ||
          (function e() {
            if (!tU) {
              var t = p([
                  "borderRadius",
                  "MozBorderRadius",
                  "WebkitBorderRadius",
                ]),
                o = em ? 2 * er : er,
                r = eb / 2 > 250 ? eb / 2 : 250;
              tr = et || r;
              var n = p(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]),
                a = n
                  ? n +
                    ": " +
                    3 * ei +
                    "px " +
                    3 * ei +
                    "px " +
                    4 * ei +
                    "px rgba(0,0,0,.5);"
                  : "";
              if ((ei < 0.01 && (a = ""), em)) {
                var l = /(\d+)(px|em|rem)(.*)/g.exec(es);
                es = parseFloat(l[1]) * e8 + l[2] + l[3];
              }
              var c =
                ".tt_mobile_sm{margin-top: .4em;} .tt_sm{" +
                (t ? t + ": " + o + "px;" : "") +
                a +
                "z-index: 1000000; background-color: " +
                ee +
                "; padding: .6em; opacity:" +
                eo +
                "; font: " +
                es +
                "; color: black;} .tt_name_sm{float: left; font-weight: bold} .tt_custom_sm{overflow: hidden;}";
              (c +=
                ".btn_simplemaps{color: black;text-decoration: none;background: #ffffff;display: inline-block;padding: .5em .5em;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: .3em;}    .btn_simplemaps:hover{  text-decoration: underline;}"),
                (c +=
                  ".xmark_sm{float: " +
                  (ea ? "left" : "right") +
                  "; margin-left: .5em; cursor: pointer; line-height: 0px; width: 1.3em !important;}"),
                s.new_style(c),
                (tU = !0);
            }
            function p(e) {
              for (var t = document.documentElement, o = 0; o < e.length; o++)
                if (e[o] in t.style) {
                  var r = e[o];
                  return (r = (r = (r = (r = (r = r.replace(
                    "borderRadius",
                    "border-radius"
                  )).replace("MozBorderRadius", "-moz-border-radius")).replace(
                    "WebkitBorderRadius",
                    "-webkit-border-radius"
                  )).replace("boxShadow", "box-shadow")).replace(
                    "MozBoxShadow",
                    "-moz-box-shadow"
                  )).replace("WebkitBoxShadow", "-webkit-box-shadow");
                }
            }
          })(),
        (tP =
          ((X = (W = s.findPos(ef))[0]),
          (Q = W[1]),
          (H = 0),
          (Z = 0),
          {
            create: function () {
              (q = document.createElement("div")).setAttribute(
                "id",
                "tt_sm_" + g
              ),
                q.style.setProperty("position", "absolute"),
                q.style.setProperty("display", "none"),
                ef.appendChild(q),
                (ef.onmousemove = this.pos),
                (q.onmousemove = this.pos);
            },
            show: function (e) {
              !tT &&
                ((u = !1),
                null == q && tP.create(),
                q.style.setProperty("display", "block"),
                q.style.setProperty("z-index", 2),
                q.style.setProperty("max-width", tr + "px"),
                (q.innerHTML = e.sm.content),
                tP.update_pos(e));
            },
            reset_pos: function (e, t, o) {
              void 0 == q && tP.create(), tP.set_pos(0 + t, 0 + e, o);
            },
            update_pos: function (e) {
              tP.set_pos(I, L, e);
            },
            pos: function (e, t) {
              t && ((I = t.u), (L = t.l), (I -= Q), (L -= X));
              var o = ef.getBoundingClientRect();
              o &&
                e &&
                (e.clientX &&
                  ((I = e.clientY - o.top), (L = e.clientX - o.left)),
                e.touches &&
                  e.touches[0] &&
                  ((I = e.touches[0].clientY - o.top),
                  (L = e.touches[0].clientX - o.left))),
                !tT && !w && !u && (!z || !ep) && tP.set_pos(I, L);
            },
            set_pos: function (e, t, o) {
              if (q) {
                if (
                  !(
                    o &&
                    o.sm.on_click &&
                    ("yes" == F || ("auto" == F && eb < 401))
                  ) &&
                  e &&
                  t
                ) {
                  if (((M = 0 + 0.5 * eb), (D = 0 + 0.5 * ex), t > M && e > D))
                    r = 4;
                  else if (t < M && e > D) r = 3;
                  else if (t > M && e < D) r = 2;
                  else var r = 1;
                  "below" == O
                    ? (3 == r && (r = 1), 4 == r && (r = 2))
                    : "above" == O && (1 == r && (r = 3), 2 == r && (r = 4)),
                    1 == r
                      ? (q.style.setProperty("bottom", "auto"),
                        q.style.setProperty("top", e + 5 + "px"),
                        q.style.setProperty("left", t + 5 + 5 + "px"),
                        q.style.setProperty("right", "auto"))
                      : 2 == r
                      ? (q.style.setProperty("bottom", "auto"),
                        q.style.setProperty("top", e + 5 + "px"),
                        q.style.setProperty("right", eb - t + 5 + "px"),
                        q.style.setProperty("left", "auto"))
                      : 3 == r
                      ? (q.style.setProperty("bottom", ex - e + 5 + "px"),
                        q.style.setProperty("top", "auto"),
                        q.style.setProperty("left", t + 5 + 3 + "px"),
                        q.style.setProperty("right", "auto"))
                      : (q.style.setProperty("bottom", ex - e + 5 + "px"),
                        q.style.setProperty("top", "auto"),
                        q.style.setProperty("right", eb - t + 5 + "px"),
                        q.style.setProperty("left", "auto"));
                } else {
                  q.style.setProperty("top", "-100px"),
                    q.style.setProperty("left", "-100px"),
                    q.style.setProperty("bottom", "auto"),
                    q.style.setProperty("right", "auto"),
                    (H = parseInt(q.offsetHeight, 10));
                  var n =
                      eb - (Z = parseInt(q.offsetWidth, 10)) > 0
                        ? 0.5 * (eb - Z)
                        : 0,
                    s = ex - H > 0 ? 0.5 * (ex - H) : 0;
                  q.style.setProperty("top", s + "px"),
                    q.style.setProperty("left", n + "px"),
                    q.style.setProperty("right", "auto"),
                    q.style.setProperty("bottom", "auto");
                }
              }
            },
            hide: function () {
              void 0 != q && q.style.setProperty("display", "none"),
                (W = s.findPos(ef)) && ((X = W[0]), (Q = W[1]));
            },
          })),
        (K = a.navigation_color ? a.navigation_color : "#f7f7f7"),
        (e0 = a.navigation_border_color
          ? a.navigation_border_color
          : "#636363"),
        (e5 = a.navigation_opacity ? a.navigation_opacity : 0.8),
        (eZ = a.arrow_color ? a.arrow_color : K),
        (eU = a.arrow_color_border ? a.arrow_color_border : e0),
        (eG = a.arrow_border_color ? a.arrow_border_color : eU),
        (eJ = void 0 === a.navigation_size ? 40 : a.navigation_size),
        (eK =
          void 0 === a.navigation_size_mobile
            ? e8 * eJ
            : a.navigation_size_mobile),
        (e9 = em ? eK : eJ),
        (te = "yes" == a.arrow_box ? 1 : 0),
        (tt = e9 *= 1),
        (to = 0.1 * e9),
        (tn = e9 / 10),
        (function t() {
          eq = eP.set();
          var o = e9,
            r = e9;
          if (e) {
            var n = new Image();
            (n.onload = function () {
              (G = n.width), (J = n.height), s();
            }),
              (n.src = e);
          } else s();
          function s() {
            if (e) {
              var t = (eR = Raphael(ed, G, J)).image(e, 0, 0, G, J);
              (tt = J), t.attr({ cursor: "pointer" }), eq.push(t), eq.click(tz);
            } else {
              var n = (eR = Raphael(ed, o, r)).path(d.rounded_box).attr({
                  fill: eZ,
                  "stroke-width": 1,
                  stroke: eG,
                  "stroke-opacity": te,
                  "fill-opacity": 0,
                  cursor: "pointer",
                }),
                s = eR.path(d.arrow).attr({
                  stroke: eG,
                  "stroke-width": 1.5,
                  "stroke-opacity": 1,
                  fill: eZ,
                  "fill-opacity": 1,
                  cursor: "pointer",
                });
              (eq = eP.set()).push(n, s),
                eq.transform("S" + tn + "," + tn + ",0,0 T0,0");
            }
            N || tD(),
              ed.style.setProperty("left", to + "px"),
              ed.style.setProperty("top", to + "px"),
              v &&
                (function e() {
                  eW = Raphael(e$, e9, 2 * e9 + to);
                  var t = d.plus,
                    o = d.minus,
                    r = d.rounded_box,
                    n = eW.path(r).attr({
                      fill: K,
                      "stroke-width": 1,
                      stroke: e0,
                      "stroke-opacity": 1,
                      "fill-opacity": e5,
                      cursor: "pointer",
                    }),
                    s = eW.path(t).attr({
                      "stroke-width": 0,
                      "stroke-opacity": 0,
                      fill: e0,
                      "fill-opacity": 1,
                      opacity: 1,
                      cursor: "pointer",
                    });
                  (eH = eP.set()).push(n, s);
                  var a = "S" + tn + "," + tn + ",0,0 T0,0";
                  eH.transform(a);
                  var l = eW.path(r).attr({
                      fill: K,
                      "stroke-width": 1,
                      stroke: e0,
                      "stroke-opacity": 1,
                      "fill-opacity": e5,
                      cursor: "pointer",
                    }),
                    c = eW.path(o).attr({
                      "stroke-width": 0,
                      "stroke-opacity": 0,
                      fill: e0,
                      "fill-opacity": 1,
                      opacity: 1,
                      cursor: "pointer",
                    });
                  (eV = eP.set()).push(l, c);
                  var a = "S" + tn + "," + tn + ",0,0 T0," + (e9 + to);
                  function p(e, t) {
                    if ((void 0 === t && (t = "z"), k && "region" != k.sm.type))
                      t3.call(k, !0, function () {
                        (k = !1), p(e);
                      });
                    else {
                      if (
                        "z" == t &&
                        !(function e(t) {
                          var o = tu.sm.zooming_dimensions.w / t,
                            r = t < 1;
                          if (-1 != b && ("manual" == tu.sm.type || x)) {
                            var n = tm[b].sm.zooming_dimensions.w;
                            if (r && o > n - 1 && (od(tu, tm[b]) || x))
                              return om(tm[b]), !1;
                          }
                          return (
                            !r ||
                            !(o > tm[-1].sm.zooming_dimensions.w - 1) ||
                            (x || om(tm[-1]), !1)
                          );
                        })(e)
                      )
                        return;
                      var o = { sm: { type: "manual", zp: 1 } };
                      ts &&
                        (((tu = {
                          sm: { type: "manual", zp: 1 },
                        }).sm.zooming_dimensions = ta),
                        (tu.sm.bbox = {
                          x: ta.x / e3,
                          y: ta.y / e3,
                          width: ta.w / e3,
                          height: ta.h / e3,
                        }));
                      var r = (function e(t, o) {
                        var r = tu.sm.zooming_dimensions.w,
                          n = tu.sm.zooming_dimensions.h,
                          s = tu.sm.zooming_dimensions.x,
                          a = tu.sm.zooming_dimensions.y;
                        if ("x" == o)
                          var s =
                            tu.sm.zooming_dimensions.x +
                            tu.sm.zooming_dimensions.w * t;
                        else if ("y" == o)
                          var a =
                            tu.sm.zooming_dimensions.y +
                            tu.sm.zooming_dimensions.h * t;
                        else
                          var r = tu.sm.zooming_dimensions.w / t,
                            n = tu.sm.zooming_dimensions.h / t,
                            s =
                              tu.sm.zooming_dimensions.x +
                              (tu.sm.zooming_dimensions.w - r) / 2,
                            a =
                              tu.sm.zooming_dimensions.y +
                              (tu.sm.zooming_dimensions.h - n) / 2;
                        var l = r / (ew * e3);
                        return { x: s, y: a, w: r, h: n, r: l };
                      })(e, t);
                      if (!r) return;
                      (o.sm.zooming_dimensions = r), om(o);
                    }
                  }
                  eV.transform(a),
                    e$.style.setProperty("top", tt + 2 * to + "px"),
                    e$.style.setProperty("left", to + "px"),
                    (eV = eP.set()).push(l, c),
                    (eX = function () {
                      p(T);
                    }),
                    (eQ = function (e, t) {
                      p(e, t);
                    }),
                    (eY = function () {
                      p(1 / T);
                    }),
                    (t6.zoom_in = eX),
                    (t6.zoom_out = eY),
                    eH.click(eX),
                    eV.click(eY),
                    eH.touchend(eX),
                    eV.touchend(eY);
                })();
          }
        })(),
        tq(),
        o$(),
        oy(),
        o_(),
        setTimeout(function () {
          var e;
          ow(),
            o0(),
            (function e() {
              var t = t4.lines ? t4.lines : t4.borders;
              if (t) {
                for (var o in t) {
                  var r = t[o],
                    n = ti[o],
                    s = n.size * (eb / ew) * l * 1.25,
                    a = !1;
                  if (n.origin_location && n.destination_location) {
                    var c = t$[n.origin_location].sm.point0,
                      p = t$[n.destination_location].sm.point0;
                    if (
                      ((a =
                        "M " + c.x + "," + c.y + " " + p.x + "," + p.y + " Z"),
                      n.angle)
                    ) {
                      var m = parseFloat(n.angle);
                      if (m > -61 && m < 61) {
                        c.x <= p.x && (m *= -1);
                        var u = Raphael.transformPath(
                            a,
                            "R" + m + "," + c.x + "," + c.y + "S2"
                          ).toString(),
                          d = Raphael.transformPath(a, "R-90S2").toString(),
                          f = Raphael.pathIntersection(u, d)[0];
                        a =
                          "M " +
                          c.x +
                          "," +
                          c.y +
                          " C" +
                          c.x +
                          "," +
                          c.y +
                          "," +
                          f.x +
                          "," +
                          f.y +
                          "," +
                          p.x +
                          "," +
                          p.y;
                      }
                    }
                  }
                  var h = a || r.path,
                    y = eP.path(h);
                  y.transform(eC),
                    y.attr({
                      stroke: n.color,
                      fill: "none",
                      cursor: "pointer",
                      "stroke-dasharray": [n.dash],
                      "stroke-width": s,
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": 4,
                    }),
                    (y.sm = {}),
                    (y.sm.size = n.size),
                    (y.sm.level = n.level),
                    (y.sm.bbox = y.getBBox(!0)),
                    ea || y.node.setAttribute("class", "sm_line sm_line_" + o),
                    eE.push(y);
                }
                eE.hide();
              }
            })(),
            (function e() {
              ev.style.setProperty("right", "0em"),
                ev.style.setProperty("top", "0em");
              var t =
                  void 0 === a.navigate_title ? "Navigate" : a.navigate_title,
                o = void 0 === a.keyboard_omit ? "" : a.keyboard_omit;
              if (!(o.indexOf("navigat") > -1)) {
                var r = document.createElement("select");
                r.options.add(new Option(t, "-1")),
                  r.options.add(new Option("Back", "back")),
                  v &&
                    (r.options.add(new Option("Zoom in", "in")),
                    r.options.add(new Option("Zoom out", "out")),
                    r.options.add(new Option("Left", "left")),
                    r.options.add(new Option("Right", "right")),
                    r.options.add(new Option("Up", "up")),
                    r.options.add(new Option("Down", "down"))),
                  r.style.setProperty("margin-right", ".5em"),
                  r.style.setProperty("margin-top", ".5em"),
                  r.style.setProperty("float", "left"),
                  ev.appendChild(r),
                  (r.onchange = function (e) {
                    if ("-1" == this.value) return !1;
                    "back" == this.value && t1(),
                      "out" == this.value && eY(),
                      "in" == this.value && eX(),
                      "left" == this.value && eQ("-.25", "x"),
                      "right" == this.value && eQ(".25", "x"),
                      "up" == this.value && eQ("-.25", "y"),
                      "down" == this.value && eQ(".25", "y"),
                      setTimeout(function () {
                        r.value = "-1";
                      }, 1e3);
                  });
              }
              var n = void 0 === a.states_title ? "States" : a.states_title,
                l = void 0 === a.regions_title ? "Regions" : a.regions_title,
                c = {
                  state: { title: n, array: tp },
                  location: {
                    title:
                      void 0 === a.locations_title
                        ? "Locations"
                        : a.locations_title,
                    array: t$,
                  },
                  region: { title: l, array: tm },
                };
              for (var p in c) {
                var m = c[p],
                  u = o.indexOf(p) > -1,
                  d = Object.size(m.array);
                if (!(d < 1) && (!(d < 2) || "region" != p) && !u) {
                  var f = document.createElement("select");
                  f.options.add(new Option(m.title, "-1")),
                    f.style.setProperty("margin-right", ".5em"),
                    f.style.setProperty("margin-top", ".5em"),
                    f.style.setProperty("float", "left");
                  var h = [];
                  for (var y in m.array) h.push(m.array[y]);
                  for (
                    var $ = h.sort(function (e, t) {
                        return e.sm.name > t.sm.name ? 1 : -1;
                      }),
                      y = 0;
                    y < $.length;
                    y++
                  ) {
                    var _ = $[y];
                    "out" != _.sm.type &&
                      !_.sm.inactive &&
                      !_.sm.hide &&
                      f.options.add(new Option(_.sm.name, _.sm.id));
                  }
                  (f.onchange = s.callback_closure(
                    { entry: m, dropdown: f },
                    function (e) {
                      var t = e.dropdown,
                        o = e.entry;
                      if ("-1" == t.value) return !1;
                      var r,
                        n = o.array[t.value];
                      tO(n.sm.type, n.sm.id);
                    }
                  )),
                    ev.appendChild(f);
                }
              }
            })(),
            tF(),
            oe(),
            oS(),
            tP.create(),
            (tw = function () {
              this.sm.parent && tx.call(this.sm.parent);
            }),
            (tk = function () {
              this.sm.parent && t3.call(this.sm.parent);
            }),
            (t0 = function (e) {
              this.sm.parent && tb.call(this.sm.parent, e);
            }),
            (t_ = function (e, t) {
              if (e.sm.pulse || t) {
                var o = e.sm.shape_type;
                if ("location" == e.sm.type && "image" != o && !(ez < 0.05)) {
                  var r = e.clone();
                  r.toFront();
                  var n = 1 * e.sm.pulse_size,
                    s = {
                      "stroke-width": 4 * e.attrs["stroke-width"],
                      "stroke-opacity": 0,
                    };
                  r.attr({ "fill-opacity": 0, stroke: e.sm.pulse_color });
                  var a = function () {
                      r.remove();
                    },
                    l = e.sm.scale ? ez : 1,
                    c = (n - 1) * 0.5 * e.sm.size * l * e3,
                    p =
                      "bottom-center" == e.sm.position
                        ? ox(e, l * e3 * n, "0," + c)
                        : ox(e, l * e3 * n);
                  (s.transform = p),
                    r.animate(s, 1e3 * e.sm.pulse_speed, "ease-out", a);
                }
              }
            }),
            (tg = function (e) {
              if (!ea || !el)
                for (
                  var t = Array.isArray(e) ? e : [e], o = 0;
                  o < t.length;
                  o++
                ) {
                  var r = tp[t[o]];
                  if (!r || !r.sm || ez < 0.05) return;
                  var n = r.clone(),
                    s = 1 * r.sm.pulse_size,
                    a = {
                      "stroke-width":
                        4 *
                        (r.attrs["stroke-width"] ? r.attrs["stroke-width"] : 1),
                      "stroke-opacity": 0,
                      "fill-opacity": 0,
                    };
                  n.attr({ "fill-opacity": 0, stroke: r.sm.pulse_color });
                  var l = function () {
                      n.remove();
                    },
                    c = r.sm.bbox;
                  (r.sm.x = (c.x2 + c.x) / 2),
                    (r.sm.y = (c.y2 + c.y) / 2),
                    (r.sm.rotate = 0);
                  var p = ox(r, s, "0,0");
                  (a.transform = eC + p),
                    r.sm.bbox,
                    n.animate(a, 1e3 * r.sm.pulse_speed, "ease-out", l);
                }
            }),
            (tx = function () {
              if (
                (tN(),
                oN(),
                oQ(),
                (this.id || "set" != !this.type) && !o6 && !oK)
              ) {
                var e = ok(this);
                if (e.sm.on_click) var t = !0;
                if (((tT = e.sm.popup_off), !tV && !tW && !tH && (!z || !ep))) {
                  if (o2 && !w) return !1;
                  if (((o2 = this), e)) {
                    if (
                      ((function e(t) {
                        if (t.sm.labels) {
                          var o;
                          t.sm.labels.forEach(function (e) {
                            t.sm.inactive
                              ? e.attr({ cursor: "default" })
                              : e.attr({ cursor: "pointer" });
                          });
                        }
                      })(e),
                      !e.sm.inactive)
                    ) {
                      if (
                        ((function e(t) {
                          if ("state" == t.sm.type && t.sm.emphasizable) {
                            var o = oC[t.sm.level.toString()];
                            o &&
                              ((o6 = !0),
                              t.insertBefore(o[o.length - 1]),
                              setTimeout(function () {
                                o6 = !1;
                              }, 1));
                          }
                        })(e),
                        oD(e),
                        t)
                      ) {
                        if (!z) {
                          if (
                            (e.stop(),
                            ea &&
                              "location" == e.sm.type &&
                              "image" == e.sm.shape_type)
                          )
                            return;
                          e.sm.ignore_hover || (oz(e, "over"), t_(e)),
                            oP(e, "over");
                        }
                      } else {
                        if (
                          (tP.show(e),
                          e.stop(),
                          ea &&
                            "location" == e.sm.type &&
                            "image" == e.sm.shape_type)
                        )
                          return;
                        e.sm.ignore_hover ||
                          (oz(e, "over"), oP(e, "over"), t_(e), tg(e));
                      }
                    }
                  }
                }
              }
            }),
            (t3 = function (e, t) {
              if (
                ((t && "function" == typeof t) || (t = !1),
                !tH && !oK && ((o2 = !1), this.id || "set" != !this.type))
              ) {
                var o = ok(this);
                if (o && o.sm && !o.sm.inactive) {
                  if ((oR(o), ep)) (z && !0 !== e) || (o4(o, t), (o7 = o));
                  else {
                    if ((tP.hide(), o1(o))) {
                      if (tH) return !1;
                      o.sm.ignore_hover || oz(o, "out", !0),
                        oz(o, "adjacent", !0),
                        oP(o, "out", !0);
                    } else {
                      if (
                        ea &&
                        "location" == o.sm.type &&
                        "image" == o.sm.shape_type
                      )
                        return;
                      o.sm.ignore_hover || oz(o, "out", !0), oP(o, "out");
                    }
                    o4(o, t);
                  }
                }
              }
            }),
            (e = !1),
            (tb = function (t) {
              if (!tH && !tV && !tW) {
                var o = ok(this);
                if (
                  o &&
                  o.sm &&
                  !o.sm.inactive &&
                  ((o.sm.on_click && !o.sm.popup_off) || !e)
                ) {
                  tN();
                  var r = !!t && "touchstart" == t.type;
                  if (
                    (em &&
                      !r &&
                      ((e = !0),
                      setTimeout(function () {
                        e = !1;
                      }, 500)),
                    e || oa(),
                    oH(o, t),
                    !t6.ignore_clicks)
                  ) {
                    if (
                      ((ep = o.sm.on_click),
                      !t ||
                        ((!z || "touchend" != t.type) &&
                          (z || "touchstart" != t.type)))
                    ) {
                      if (
                        (ep && tP.update_pos(),
                        (tT = o.sm.popup_off),
                        o.sm.zoomable &&
                          ("region" == o.sm.type ||
                            tu != o ||
                            "out" == o.sm.type))
                      )
                        oV(o, t),
                          oQ(),
                          k && k.sm
                            ? t3.call(k, !0, function () {
                                om(o), (k = o);
                              })
                            : (om(o), (k = o));
                      else if (ep) {
                        k != o &&
                          k &&
                          ((n = o),
                          (s = k),
                          "state" != n.sm.type ||
                            "region" != s.sm.type ||
                            s.sm.id != n.sm.region) &&
                          o4(k),
                          t && tP.pos(t),
                          tP.show(o),
                          (z = !0),
                          oP(o, "over"),
                          t_(o),
                          (ea &&
                            "location" == o.sm.type &&
                            "image" == o.sm.shape_type) ||
                            o.sm.ignore_hover ||
                            o.attr(o.sm.over_attributes),
                          (k = o);
                        var n,
                          s,
                          a = document.getElementById("xpic_sm_" + g);
                        a &&
                          (a.onclick = function () {
                            return (
                              tP.hide(),
                              (z = !1),
                              k.sm && t3.call(k),
                              (ep = !1),
                              tC("close_popup", []),
                              !1
                            );
                          }),
                          oq(o, t);
                      } else {
                        var l = o.sm.url;
                        if ("" != l && !it) {
                          var c = "javascript" == l.substring(0, 10);
                          !U || c
                            ? c
                              ? (window.location.href = l)
                              : (window.top.location.href = l)
                            : (window.open(l, "_blank"), tP.hide());
                        }
                        oq(o, t), o4(o);
                      }
                    }
                  }
                }
              }
            }),
            (t1 = function (e) {
              if (
                (void 0 === e && (e = !1),
                tC("back", []),
                ("out" == tu.sm.type || ("region" == tu.sm.type && x)) && N)
              )
                window.location.href = "javascript:" + N;
              else if (Y && "state" == tu.sm.type && tu.sm.region)
                k
                  ? t3.call(k, !0, function () {
                      om(tm[tu.sm.region]);
                    })
                  : om(tm[tu.sm.region], !1, e);
              else {
                var t = od(tu, tm[b]),
                  o = "manual" == tu.sm.type && t ? tm[b] : tm[-1];
                k && k.sm && "region" != k.sm.type
                  ? t3.call(k, !0, function () {
                      om(o);
                    })
                  : om(o, !1, e);
              }
            }),
            (tz = function () {
              t1();
            }),
            oj(),
            oT(),
            il(),
            tC("complete", []),
            s.isFunction(n) && n(),
            oN();
        }, 1);
    }
    var oO = !1,
      oL = function (e, t) {
        if (!oO || e || t) {
          oO = !0;
          var o = function (t) {
            var o = el
                ? event.clientX + document.documentElement.scrollLeft
                : t.pageX,
              r = el
                ? event.clientY + document.documentElement.scrollTop
                : t.pageY,
              n = s.findPos(ef),
              a = n[0],
              l = n[1],
              c = tu.sm.zooming_dimensions,
              p = (c.r * eb) / e3,
              m = (c.r * ex) / e3,
              u = c.x / e3 + (p * (o - a)) / eb,
              d = c.y / e3 + (m * (r - l)) / ex,
              f =
                "You clicked on\nx: " +
                (u = Math.round(1e5 * u) / 1e5) +
                ",\ny: " +
                (d = Math.round(1e5 * d) / 1e5) +
                ",";
            e && console.log(f), tC("click_xy", [{ x: u, y: d }]);
          };
          t || eF.click(o), eD.click(o);
        }
      },
      oM = function () {
        oL(!0);
      },
      oN = function (e) {
        (t7.click_xy || tE.click_xy.length > 0) && oL(!1, e);
      },
      oD = function (e) {
        var t = e.sm.type;
        "state" == t && tC("over_state", [e.sm.id]),
          "location" == t && tC("over_location", [e.sm.id]),
          "region" == t && tC("over_region", [e.sm.id]);
      },
      oR = function (e) {
        var t = e.sm.type;
        "state" == t && tC("out_state", [e.sm.id]),
          "location" == t && tC("out_location", [e.sm.id]),
          "region" == t && tC("out_region", [e.sm.id]);
      },
      oq = function (e, t) {
        var o = e.sm.type;
        "state" == o && tC("click_state", [e.sm.id, t]),
          "region" == o && tC("click_region", [e.sm.id, t]),
          "location" == o && tC("click_location", [e.sm.id, t]);
      },
      oH = function (e, t) {
        var o = e.sm.type;
        "state" == o && tC("preclick_state", [e.sm.id, t]),
          "region" == o && tC("preclick_region", [e.sm.id, t]),
          "location" == o && tC("preclick_location", [e.sm.id, t]);
      },
      oV = function (e, t) {
        var o = e.sm.type;
        "state" == o && tC("zoomable_click_state", [e.sm.id, t]),
          "region" == o && tC("zoomable_click_region", [e.sm.id, t]);
      };
    function oW(e, t) {
      om(tm[e], !1, t);
    }
    function oX(e, t) {
      om(tp[e], !1, t);
    }
    function oY(e, t, o) {
      void 0 === t && (t = 4), void 0 === o && (o = function () {});
      var r = { sm: { type: "manual", zp: t } },
        n = t$[e],
        s = n.sm.size * e3 * t,
        a = (s * ek) / ew,
        l = n.sm.x - 0.5 * s,
        c = n.sm.y - 0.5 * a,
        p = s / (ew * e3);
      (r.sm.zooming_dimensions = { x: l, y: c, w: s, h: a, r: p }),
        om(r, !1, function () {
          o(), tR();
        });
    }
    function oQ() {
      if ((o2 && t3.call(o2), w)) (w = !1), !ep && (tP.hide(), (z = !1));
    }
    function oZ(e, t, o) {
      if ((void 0 === o && (o = function () {}), "state" == e)) var r = tp[t];
      else if ("region" == e) var r = tm[t];
      else var r = t$[t];
      var n = r.sm.on_click,
        s = tu.sm.zooming_dimensions;
      if ("location" != e) {
        var a = r.sm.bbox,
          l = (a.x + a.x2) * 0.5,
          c = (a.y + a.y2) * 0.5;
        (l *= e3), (c *= e3);
      } else
        var l = r.sm.x,
          c = r.sm.y;
      var p = (l - s.x) / ez,
        m = (c - s.y) / ez,
        d = p > 1.1 * eb || m > 1.1 * ex,
        f = !r.sm.region && "region" == t6.zoom_level;
      return d || f
        ? oW("-1", function () {
            oZ(e, t, o);
          })
        : r.sm.region && "out" == t6.zoom_level
        ? oW(r.sm.region, function () {
            oZ(e, t, o);
          })
        : ((w = !0),
          n ? tb.call(r) : tx.call(r),
          tP.reset_pos(p, m, r),
          (u = !0),
          (w = !1),
          o(),
          !0);
    }
    function oU(e) {
      var t = t$[e];
      t && t_(t, !0);
    }
    function oG() {
      tP.hide(), (z = !1), ep ? t3.call(k) : o2 && t3.call(o2);
    }
    function oJ(e, t) {
      tt(e);
      var o = tp[e].sm.labels;
      tl(e);
      for (var r = 0; r < o.length; r++) {
        var n = o[r].sm.id;
        to(n), th(n);
      }
      s.isFunction(t) && t();
    }
    var oK = !1;
    function o9() {
      (oK = !0), tP.hide();
    }
    var oK = !1;
    function ie() {
      oK = !1;
    }
    var it = !1;
    function io() {
      it = !0;
    }
    var it = !1;
    function ii() {
      it = !1;
    }
    function ir(e) {
      t1(e);
    }
    function is(e) {
      tg(e);
    }
    function ia() {
      (t6.calibrate = ou),
        (t6.get_xy = oM),
        (t6.proj = tZ),
        (t6.inverse_proj = tQ),
        (t6.load = oF),
        (t6.region_zoom = oW),
        (t6.state_zoom = oX),
        (t6.zoom_in = !1),
        (t6.zoom_out = !1),
        (t6.location_zoom = oY),
        (t6.zoom_to_popup = tO),
        (t6.back = ir),
        (t6.popup = oZ),
        (t6.pulse = oU),
        (t6.pulse_state = is),
        (t6.popup_hide = oG),
        (t6.zoom_level = "out"),
        (t6.ignore_clicks = !1),
        (t6.zoom_level_id = !1),
        (t6.disable_urls = io),
        (t6.enable_urls = ii),
        (t6.disable_popups = o9),
        (t6.enable_popups = ie),
        (t6.refresh = oI),
        (t6.refresh_state = oJ),
        (t6.loaded = !0),
        (t6.resize = oB),
        (t6.trial = p),
        (t6.zoom_ratio = 1);
    }
    function il() {
      (t6.states = tp),
        (t6.regions = tm),
        (t6.locations = t$),
        (t6.labels = td),
        (t6.tooltip = tP);
    }
    if ((ia(), tA)) {
      var ic = function () {
        setTimeout(function () {
          oF();
        }, 1);
      };
      s.load_script(tA, ic);
    } else oF();
  }
  (window[e] = f),
    n.docReady(function () {
      if (
        ((function e(t, o) {
          var r = f.hooks[t];
          r && r.apply(null, o);
          for (var n = f.plugin_hooks[t], s = 0; s < n.length; s++) {
            var r = n[s];
            r && r.apply(null, o);
          }
        })("ready"),
        !window[e].loaded)
      )
        for (var t = 0; t < u.length; t++) {
          var o = u[t];
          o &&
            o.mapdata &&
            "no" != o.mapdata.main_settings.auto_load &&
            (function (e) {
              setTimeout(function () {
                e.load();
              }, 1);
            })(o);
        }
    }),
    u.push(f);
})("simplemaps_countrymap");