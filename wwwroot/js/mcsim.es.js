function ge(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
function me(m) {
  if (m.__esModule)
    return m;
  var u = m.default;
  if (typeof u == "function") {
    var y = function b() {
      if (this instanceof b) {
        var x = [null];
        x.push.apply(x, arguments);
        var w = Function.bind.apply(u, x);
        return new w();
      }
      return u.apply(this, arguments);
    };
    y.prototype = u.prototype;
  } else
    y = {};
  return Object.defineProperty(y, "__esModule", { value: !0 }), Object.keys(m).forEach(function(b) {
    var x = Object.getOwnPropertyDescriptor(m, b);
    Object.defineProperty(y, b, x.get ? x : {
      enumerable: !0,
      get: function() {
        return m[b];
      }
    });
  }), y;
}
var ve = { exports: {} };
(function(m) {
  (function() {
    var u = {
      de_DE: {
        identifier: "de-DE",
        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        shortMonths: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d.%m.%Y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%T",
          x: "%D"
        }
      },
      en_CA: {
        identifier: "en-CA",
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        ordinalSuffixes: [
          "st",
          "nd",
          "rd",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "st",
          "nd",
          "rd",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "st"
        ],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d/%m/%y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%r",
          x: "%D"
        }
      },
      en_US: {
        identifier: "en-US",
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        ordinalSuffixes: [
          "st",
          "nd",
          "rd",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "st",
          "nd",
          "rd",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "st"
        ],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%m/%d/%y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%r",
          x: "%D"
        }
      },
      es_MX: {
        identifier: "es-MX",
        days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", " diciembre"],
        shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d/%m/%Y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%T",
          x: "%D"
        }
      },
      fr_FR: {
        identifier: "fr-FR",
        days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        shortMonths: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d/%m/%Y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%T",
          x: "%D"
        }
      },
      it_IT: {
        identifier: "it-IT",
        days: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
        shortDays: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
        months: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
        shortMonths: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d/%m/%Y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%T",
          x: "%D"
        }
      },
      nl_NL: {
        identifier: "nl-NL",
        days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d-%m-%y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%T",
          x: "%D"
        }
      },
      pt_BR: {
        identifier: "pt-BR",
        days: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
        shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        months: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
        shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d-%m-%Y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%T",
          x: "%D"
        }
      },
      ru_RU: {
        identifier: "ru-RU",
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        shortDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm",
        formats: {
          c: "%a %d %b %Y %X",
          D: "%d.%m.%y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%T",
          x: "%D"
        }
      },
      tr_TR: {
        identifier: "tr-TR",
        days: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        shortDays: ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cts"],
        months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        shortMonths: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        AM: "ÖÖ",
        PM: "ÖS",
        am: "ÖÖ",
        pm: "ÖS",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d-%m-%Y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%T",
          x: "%D"
        }
      },
      // By michaeljayt<michaeljayt@gmail.com>
      // https://github.com/michaeljayt/strftime/commit/bcb4c12743811d51e568175aa7bff3fd2a77cef3
      zh_CN: {
        identifier: "zh-CN",
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        shortDays: ["日", "一", "二", "三", "四", "五", "六"],
        months: ["一月份", "二月份", "三月份", "四月份", "五月份", "六月份", "七月份", "八月份", "九月份", "十月份", "十一月份", "十二月份"],
        shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        AM: "上午",
        PM: "下午",
        am: "上午",
        pm: "下午",
        formats: {
          c: "%a %d %b %Y %X %Z",
          D: "%d/%m/%y",
          F: "%Y-%m-%d",
          R: "%H:%M",
          r: "%I:%M:%S %p",
          T: "%H:%M:%S",
          v: "%e-%b-%Y",
          X: "%r",
          x: "%D"
        }
      }
    }, y = u.en_US, b = new x(y, 0, !1);
    m.exports = b, typeof Date.now != "function" && (Date.now = function() {
      return +/* @__PURE__ */ new Date();
    });
    function x(s, i, o) {
      var l = s || y, d = i || 0, g = o || !1, v = 0, _;
      function p(O, k) {
        var P;
        if (k) {
          if (P = k.getTime(), g) {
            var E = r(k);
            if (k = new Date(P + E + d), r(k) !== E) {
              var X = r(k);
              k = new Date(P + X + d);
            }
          }
        } else {
          var F = Date.now();
          F > v ? (v = F, _ = new Date(v), P = v, g && (_ = new Date(v + r(_) + d))) : P = v, k = _;
        }
        return C(O, k, l, P);
      }
      function C(O, k, P, F) {
        for (var E = "", X = null, z = !1, N = O.length, J = !1, T = 0; T < N; T++) {
          var j = O.charCodeAt(T);
          if (z === !0) {
            if (j === 45) {
              X = "";
              continue;
            } else if (j === 95) {
              X = " ";
              continue;
            } else if (j === 48) {
              X = "0";
              continue;
            } else if (j === 58) {
              J && c("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"), J = !0;
              continue;
            }
            switch (j) {
              case 37:
                E += "%";
                break;
              case 65:
                E += P.days[k.getDay()];
                break;
              case 66:
                E += P.months[k.getMonth()];
                break;
              case 67:
                E += w(Math.floor(k.getFullYear() / 100), X);
                break;
              case 68:
                E += C(P.formats.D, k, P, F);
                break;
              case 70:
                E += C(P.formats.F, k, P, F);
                break;
              case 72:
                E += w(k.getHours(), X);
                break;
              case 73:
                E += w(f(k.getHours()), X);
                break;
              case 76:
                E += D(Math.floor(F % 1e3));
                break;
              case 77:
                E += w(k.getMinutes(), X);
                break;
              case 80:
                E += k.getHours() < 12 ? P.am : P.pm;
                break;
              case 82:
                E += C(P.formats.R, k, P, F);
                break;
              case 83:
                E += w(k.getSeconds(), X);
                break;
              case 84:
                E += C(P.formats.T, k, P, F);
                break;
              case 85:
                E += w(e(k, "sunday"), X);
                break;
              case 87:
                E += w(e(k, "monday"), X);
                break;
              case 88:
                E += C(P.formats.X, k, P, F);
                break;
              case 89:
                E += k.getFullYear();
                break;
              case 90:
                if (g && d === 0)
                  E += "GMT";
                else {
                  var R = t(k);
                  E += R || "";
                }
                break;
              case 97:
                E += P.shortDays[k.getDay()];
                break;
              case 98:
                E += P.shortMonths[k.getMonth()];
                break;
              case 99:
                E += C(P.formats.c, k, P, F);
                break;
              case 100:
                E += w(k.getDate(), X);
                break;
              case 101:
                E += w(k.getDate(), X ?? " ");
                break;
              case 104:
                E += P.shortMonths[k.getMonth()];
                break;
              case 106:
                var I = new Date(k.getFullYear(), 0, 1), K = Math.ceil((k.getTime() - I.getTime()) / (1e3 * 60 * 60 * 24));
                E += D(K);
                break;
              case 107:
                E += w(k.getHours(), X ?? " ");
                break;
              case 108:
                E += w(f(k.getHours()), X ?? " ");
                break;
              case 109:
                E += w(k.getMonth() + 1, X);
                break;
              case 110:
                E += `
`;
                break;
              case 111:
                var K = k.getDate();
                P.ordinalSuffixes ? E += String(K) + (P.ordinalSuffixes[K - 1] || h(K)) : E += String(K) + h(K);
                break;
              case 112:
                E += k.getHours() < 12 ? P.AM : P.PM;
                break;
              case 114:
                E += C(P.formats.r, k, P, F);
                break;
              case 115:
                E += Math.floor(F / 1e3);
                break;
              case 116:
                E += "	";
                break;
              case 117:
                var K = k.getDay();
                E += K === 0 ? 7 : K;
                break;
              case 118:
                E += C(P.formats.v, k, P, F);
                break;
              case 119:
                E += k.getDay();
                break;
              case 120:
                E += C(P.formats.x, k, P, F);
                break;
              case 121:
                E += ("" + k.getFullYear()).slice(2);
                break;
              case 122:
                if (g && d === 0)
                  E += J ? "+00:00" : "+0000";
                else {
                  var M;
                  d !== 0 ? M = d / (60 * 1e3) : M = -k.getTimezoneOffset();
                  var A = M < 0 ? "-" : "+", L = J ? ":" : "", B = Math.floor(Math.abs(M / 60)), W = Math.abs(M % 60);
                  E += A + w(B) + L + w(W);
                }
                break;
              default:
                z && (E += "%"), E += O[T];
                break;
            }
            X = null, z = !1;
            continue;
          }
          if (j === 37) {
            z = !0;
            continue;
          }
          E += O[T];
        }
        return E;
      }
      var S = p;
      return S.localize = function(O) {
        return new x(O || l, d, g);
      }, S.localizeByIdentifier = function(O) {
        var k = u[O];
        return k ? S.localize(k) : (c('[WARNING] No locale found with identifier "' + O + '".'), S);
      }, S.timezone = function(O) {
        var k = d, P = g, F = typeof O;
        if (F === "number" || F === "string")
          if (P = !0, F === "string") {
            var E = O[0] === "-" ? -1 : 1, X = parseInt(O.slice(1, 3), 10), z = parseInt(O.slice(3, 5), 10);
            k = E * (60 * X + z) * 60 * 1e3;
          } else
            F === "number" && (k = O * 60 * 1e3);
        return new x(l, k, P);
      }, S.utc = function() {
        return new x(l, d, !0);
      }, S;
    }
    function w(s, i) {
      return i === "" || s > 9 ? s : (i == null && (i = "0"), i + s);
    }
    function D(s) {
      return s > 99 ? s : s > 9 ? "0" + s : "00" + s;
    }
    function f(s) {
      return s === 0 ? 12 : s > 12 ? s - 12 : s;
    }
    function e(s, i) {
      i = i || "sunday";
      var o = s.getDay();
      i === "monday" && (o === 0 ? o = 6 : o--);
      var l = Date.UTC(s.getFullYear(), 0, 1), d = Date.UTC(s.getFullYear(), s.getMonth(), s.getDate()), g = Math.floor((d - l) / 864e5), v = (g + 7 - o) / 7;
      return Math.floor(v);
    }
    function h(s) {
      var i = s % 10, o = s % 100;
      if (o >= 11 && o <= 13 || i === 0 || i >= 4)
        return "th";
      switch (i) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
      }
    }
    function r(s) {
      return (s.getTimezoneOffset() || 0) * 6e4;
    }
    function t(s, i) {
      return a(s, i) || n(s);
    }
    function a(s, i) {
      if (i == null)
        return null;
      var o = s.toLocaleString(i, { timeZoneName: "short" }).match(/\s([\w]+)$/);
      return o && o[1];
    }
    function n(s) {
      var i = s.toString().match(/\(([\w\s]+)\)/);
      return i && i[1];
    }
    function c(s) {
      typeof console < "u" && typeof console.warn == "function" && console.warn(s);
    }
  })();
})(ve);
var pe = {};
const _e = {}, ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _e
}, Symbol.toStringTag, { value: "Module" })), $t = /* @__PURE__ */ me(ye);
(function(m) {
  /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
  var u = u || { version: "3.6.3" };
  if (m.fabric = u, typeof document < "u" && typeof window < "u")
    document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? u.document = document : u.document = document.implementation.createHTMLDocument(""), u.window = window;
  else {
    var y = $t, b = new y.JSDOM(
      decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"),
      {
        features: {
          FetchExternalResources: ["img"]
        },
        resources: "usable"
      }
    ).window;
    u.document = b.document, u.jsdomImplForWrapper = $t.implForWrapper, u.nodeCanvas = $t.Canvas, u.window = b, DOMParser = u.window.DOMParser;
  }
  u.isTouchSupported = "ontouchstart" in u.window || "ontouchstart" in u.document || u.window && u.window.navigator && u.window.navigator.maxTouchPoints > 0, u.isLikelyNode = typeof Buffer < "u" && typeof window > "u", u.SHARED_ATTRIBUTES = [
    "display",
    "transform",
    "fill",
    "fill-opacity",
    "fill-rule",
    "opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-linecap",
    "stroke-dashoffset",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "id",
    "paint-order",
    "vector-effect",
    "instantiated_by_use",
    "clip-path"
  ], u.DPI = 96, u.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", u.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/ig, u.reNonWord = /[ \n\.,;!\?\-]/, u.fontPaths = {}, u.iMatrix = [1, 0, 0, 1, 0, 0], u.svgNS = "http://www.w3.org/2000/svg", u.perfLimitSizeTotal = 2097152, u.maxCacheSideLimit = 4096, u.minCacheSideLimit = 256, u.charWidthsCache = {}, u.textureSize = 2048, u.disableStyleCopyPaste = !1, u.enableGLFiltering = !0, u.devicePixelRatio = u.window.devicePixelRatio || u.window.webkitDevicePixelRatio || u.window.mozDevicePixelRatio || 1, u.browserShadowBlurConstant = 1, u.arcToSegmentsCache = {}, u.boundsOfCurveCache = {}, u.cachesBoundsOfCurve = !0, u.forceGLPutImageData = !1, u.initFilterBackend = function() {
    if (u.enableGLFiltering && u.isWebglSupported && u.isWebglSupported(u.textureSize))
      return console.log("max texture size: " + u.maxTextureSize), new u.WebglFilterBackend({ tileSize: u.textureSize });
    if (u.Canvas2dFilterBackend)
      return new u.Canvas2dFilterBackend();
  }, typeof document < "u" && typeof window < "u" && (window.fabric = u), function() {
    function f(t, a) {
      if (this.__eventListeners[t]) {
        var n = this.__eventListeners[t];
        a ? n[n.indexOf(a)] = !1 : u.util.array.fill(n, !1);
      }
    }
    function e(t, a) {
      if (this.__eventListeners || (this.__eventListeners = {}), arguments.length === 1)
        for (var n in t)
          this.on(n, t[n]);
      else
        this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(a);
      return this;
    }
    function h(t, a) {
      if (!this.__eventListeners)
        return this;
      if (arguments.length === 0)
        for (t in this.__eventListeners)
          f.call(this, t);
      else if (arguments.length === 1 && typeof arguments[0] == "object")
        for (var n in t)
          f.call(this, n, t[n]);
      else
        f.call(this, t, a);
      return this;
    }
    function r(t, a) {
      if (!this.__eventListeners)
        return this;
      var n = this.__eventListeners[t];
      if (!n)
        return this;
      for (var c = 0, s = n.length; c < s; c++)
        n[c] && n[c].call(this, a || {});
      return this.__eventListeners[t] = n.filter(function(i) {
        return i !== !1;
      }), this;
    }
    u.Observable = {
      observe: e,
      stopObserving: h,
      fire: r,
      on: e,
      off: h,
      trigger: r
    };
  }(), u.Collection = {
    _objects: [],
    /**
     * Adds objects to collection, Canvas or Group, then renders canvas
     * (if `renderOnAddRemove` is not `false`).
     * in case of Group no changes to bounding box are made.
     * Objects should be instances of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the add method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
    add: function() {
      if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
        for (var f = 0, e = arguments.length; f < e; f++)
          this._onObjectAdded(arguments[f]);
      return this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    /**
     * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
     * An object should be an instance of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the insertAt method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {Object} object Object to insert
     * @param {Number} index Index to insert object at
     * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
     * @return {Self} thisArg
     * @chainable
     */
    insertAt: function(f, e, h) {
      var r = this._objects;
      return h ? r[e] = f : r.splice(e, 0, f), this._onObjectAdded && this._onObjectAdded(f), this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    /**
     * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
    remove: function() {
      for (var f = this._objects, e, h = !1, r = 0, t = arguments.length; r < t; r++)
        e = f.indexOf(arguments[r]), e !== -1 && (h = !0, f.splice(e, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[r]));
      return this.renderOnAddRemove && h && this.requestRenderAll(), this;
    },
    /**
     * Executes given function for each object in this group
     * @param {Function} callback
     *                   Callback invoked with current object as first argument,
     *                   index - as second and an array of all objects - as third.
     *                   Callback is invoked in a context of Global Object (e.g. `window`)
     *                   when no `context` argument is given
     *
     * @param {Object} context Context (aka thisObject)
     * @return {Self} thisArg
     * @chainable
     */
    forEachObject: function(f, e) {
      for (var h = this.getObjects(), r = 0, t = h.length; r < t; r++)
        f.call(e, h[r], r, h);
      return this;
    },
    /**
     * Returns an array of children objects of this instance
     * Type parameter introduced in 1.3.10
     * since 2.3.5 this method return always a COPY of the array;
     * @param {String} [type] When specified, only objects of this type are returned
     * @return {Array}
     */
    getObjects: function(f) {
      return typeof f > "u" ? this._objects.concat() : this._objects.filter(function(e) {
        return e.type === f;
      });
    },
    /**
     * Returns object at specified index
     * @param {Number} index
     * @return {Self} thisArg
     */
    item: function(f) {
      return this._objects[f];
    },
    /**
     * Returns true if collection contains no objects
     * @return {Boolean} true if collection is empty
     */
    isEmpty: function() {
      return this._objects.length === 0;
    },
    /**
     * Returns a size of a collection (i.e: length of an array containing its objects)
     * @return {Number} Collection size
     */
    size: function() {
      return this._objects.length;
    },
    /**
     * Returns true if collection contains an object
     * @param {Object} object Object to check against
     * @return {Boolean} `true` if collection contains an object
     */
    contains: function(f) {
      return this._objects.indexOf(f) > -1;
    },
    /**
     * Returns number representation of a collection complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this._objects.reduce(function(f, e) {
        return f += e.complexity ? e.complexity() : 0, f;
      }, 0);
    }
  }, u.CommonMethods = {
    /**
     * Sets object's properties from options
     * @param {Object} [options] Options object
     */
    _setOptions: function(f) {
      for (var e in f)
        this.set(e, f[e]);
    },
    /**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Gradient to
     */
    _initGradient: function(f, e) {
      f && f.colorStops && !(f instanceof u.Gradient) && this.set(e, new u.Gradient(f));
    },
    /**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Pattern to
     * @param {Function} [callback] callback to invoke after pattern load
     */
    _initPattern: function(f, e, h) {
      f && f.source && !(f instanceof u.Pattern) ? this.set(e, new u.Pattern(f, h)) : h && h();
    },
    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initClipping: function(f) {
      if (!(!f.clipTo || typeof f.clipTo != "string")) {
        var e = u.util.getFunctionBody(f.clipTo);
        typeof e < "u" && (this.clipTo = new Function("ctx", e));
      }
    },
    /**
     * @private
     */
    _setObject: function(f) {
      for (var e in f)
        this._set(e, f[e]);
    },
    /**
     * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
     * @param {String|Object} key Property name or object (if object, iterate over the object properties)
     * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function(f, e) {
      return typeof f == "object" ? this._setObject(f) : typeof e == "function" && f !== "clipTo" ? this._set(f, e(this.get(f))) : this._set(f, e), this;
    },
    _set: function(f, e) {
      this[f] = e;
    },
    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param {String} property Property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function(f) {
      var e = this.get(f);
      return typeof e == "boolean" && this.set(f, !e), this;
    },
    /**
     * Basic getter
     * @param {String} property Property name
     * @return {*} value of a property
     */
    get: function(f) {
      return this[f];
    }
  }, function(f) {
    var e = Math.sqrt, h = Math.atan2, r = Math.pow, t = Math.PI / 180, a = Math.PI / 2;
    u.util = {
      /**
       * Calculate the cos of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
      cos: function(n) {
        if (n === 0)
          return 1;
        n < 0 && (n = -n);
        var c = n / a;
        switch (c) {
          case 1:
          case 3:
            return 0;
          case 2:
            return -1;
        }
        return Math.cos(n);
      },
      /**
       * Calculate the sin of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
      sin: function(n) {
        if (n === 0)
          return 0;
        var c = n / a, s = 1;
        switch (n < 0 && (s = -1), c) {
          case 1:
            return s;
          case 2:
            return 0;
          case 3:
            return -s;
        }
        return Math.sin(n);
      },
      /**
       * Removes value from an array.
       * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
       * @static
       * @memberOf fabric.util
       * @param {Array} array
       * @param {*} value
       * @return {Array} original array
       */
      removeFromArray: function(n, c) {
        var s = n.indexOf(c);
        return s !== -1 && n.splice(s, 1), n;
      },
      /**
       * Returns random number between 2 specified ones.
       * @static
       * @memberOf fabric.util
       * @param {Number} min lower limit
       * @param {Number} max upper limit
       * @return {Number} random value (between min and max)
       */
      getRandomInt: function(n, c) {
        return Math.floor(Math.random() * (c - n + 1)) + n;
      },
      /**
       * Transforms degrees to radians.
       * @static
       * @memberOf fabric.util
       * @param {Number} degrees value in degrees
       * @return {Number} value in radians
       */
      degreesToRadians: function(n) {
        return n * t;
      },
      /**
       * Transforms radians to degrees.
       * @static
       * @memberOf fabric.util
       * @param {Number} radians value in radians
       * @return {Number} value in degrees
       */
      radiansToDegrees: function(n) {
        return n / t;
      },
      /**
       * Rotates `point` around `origin` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {fabric.Point} point The point to rotate
       * @param {fabric.Point} origin The origin of the rotation
       * @param {Number} radians The radians of the angle for the rotation
       * @return {fabric.Point} The new rotated point
       */
      rotatePoint: function(n, c, s) {
        n.subtractEquals(c);
        var i = u.util.rotateVector(n, s);
        return new u.Point(i.x, i.y).addEquals(c);
      },
      /**
       * Rotates `vector` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {Object} vector The vector to rotate (x and y)
       * @param {Number} radians The radians of the angle for the rotation
       * @return {Object} The new rotated point
       */
      rotateVector: function(n, c) {
        var s = u.util.sin(c), i = u.util.cos(c), o = n.x * i - n.y * s, l = n.x * s + n.y * i;
        return {
          x: o,
          y: l
        };
      },
      /**
       * Apply transform t to point p
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Point} p The point to transform
       * @param  {Array} t The transform
       * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
       * @return {fabric.Point} The transformed point
       */
      transformPoint: function(n, c, s) {
        return s ? new u.Point(
          c[0] * n.x + c[2] * n.y,
          c[1] * n.x + c[3] * n.y
        ) : new u.Point(
          c[0] * n.x + c[2] * n.y + c[4],
          c[1] * n.x + c[3] * n.y + c[5]
        );
      },
      /**
       * Returns coordinates of points's bounding rectangle (left, top, width, height)
       * @param {Array} points 4 points array
       * @param {Array} [transform] an array of 6 numbers representing a 2x3 transform matrix
       * @return {Object} Object with left, top, width, height properties
       */
      makeBoundingBoxFromPoints: function(n, c) {
        if (c)
          for (var s = 0; s < n.length; s++)
            n[s] = u.util.transformPoint(n[s], c);
        var i = [n[0].x, n[1].x, n[2].x, n[3].x], o = u.util.array.min(i), l = u.util.array.max(i), d = l - o, g = [n[0].y, n[1].y, n[2].y, n[3].y], v = u.util.array.min(g), _ = u.util.array.max(g), p = _ - v;
        return {
          left: o,
          top: v,
          width: d,
          height: p
        };
      },
      /**
       * Invert transformation t
       * @static
       * @memberOf fabric.util
       * @param {Array} t The transform
       * @return {Array} The inverted transform
       */
      invertTransform: function(n) {
        var c = 1 / (n[0] * n[3] - n[1] * n[2]), s = [c * n[3], -c * n[1], -c * n[2], c * n[0]], i = u.util.transformPoint({ x: n[4], y: n[5] }, s, !0);
        return s[4] = -i.x, s[5] = -i.y, s;
      },
      /**
       * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
       * @static
       * @memberOf fabric.util
       * @param {Number|String} number number to operate on
       * @param {Number} fractionDigits number of fraction digits to "leave"
       * @return {Number}
       */
      toFixed: function(n, c) {
        return parseFloat(Number(n).toFixed(c));
      },
      /**
       * Converts from attribute value to pixel value if applicable.
       * Returns converted pixels or original value not converted.
       * @param {Number|String} value number to operate on
       * @param {Number} fontSize
       * @return {Number|String}
       */
      parseUnit: function(n, c) {
        var s = /\D{0,2}$/.exec(n), i = parseFloat(n);
        switch (c || (c = u.Text.DEFAULT_SVG_FONT_SIZE), s[0]) {
          case "mm":
            return i * u.DPI / 25.4;
          case "cm":
            return i * u.DPI / 2.54;
          case "in":
            return i * u.DPI;
          case "pt":
            return i * u.DPI / 72;
          case "pc":
            return i * u.DPI / 72 * 12;
          case "em":
            return i * c;
          default:
            return i;
        }
      },
      /**
       * Function which always returns `false`.
       * @static
       * @memberOf fabric.util
       * @return {Boolean}
       */
      falseFunction: function() {
        return !1;
      },
      /**
       * Returns klass "Class" object of given namespace
       * @memberOf fabric.util
       * @param {String} type Type of object (eg. 'circle')
       * @param {String} namespace Namespace to get klass "Class" object from
       * @return {Object} klass "Class"
       */
      getKlass: function(n, c) {
        return n = u.util.string.camelize(n.charAt(0).toUpperCase() + n.slice(1)), u.util.resolveNamespace(c)[n];
      },
      /**
       * Returns array of attributes for given svg that fabric parses
       * @memberOf fabric.util
       * @param {String} type Type of svg element (eg. 'circle')
       * @return {Array} string names of supported attributes
       */
      getSvgAttributes: function(n) {
        var c = [
          "instantiated_by_use",
          "style",
          "id",
          "class"
        ];
        switch (n) {
          case "linearGradient":
            c = c.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
            break;
          case "radialGradient":
            c = c.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
            break;
          case "stop":
            c = c.concat(["offset", "stop-color", "stop-opacity"]);
            break;
        }
        return c;
      },
      /**
       * Returns object of given namespace
       * @memberOf fabric.util
       * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
       * @return {Object} Object for given namespace (default fabric)
       */
      resolveNamespace: function(n) {
        if (!n)
          return u;
        var c = n.split("."), s = c.length, i, o = f || u.window;
        for (i = 0; i < s; ++i)
          o = o[c[i]];
        return o;
      },
      /**
       * Loads image element from given url and passes it to a callback
       * @memberOf fabric.util
       * @param {String} url URL representing an image
       * @param {Function} callback Callback; invoked with loaded image
       * @param {*} [context] Context to invoke callback in
       * @param {Object} [crossOrigin] crossOrigin value to set image element to
       */
      loadImage: function(n, c, s, i) {
        if (!n) {
          c && c.call(s, n);
          return;
        }
        var o = u.util.createImage(), l = function() {
          c && c.call(s, o), o = o.onload = o.onerror = null;
        };
        o.onload = l, o.onerror = function() {
          u.log("Error loading " + o.src), c && c.call(s, null, !0), o = o.onload = o.onerror = null;
        }, n.indexOf("data") !== 0 && i && (o.crossOrigin = i), n.substring(0, 14) === "data:image/svg" && (o.onload = null, u.util.loadImageInDom(o, l)), o.src = n;
      },
      /**
       * Attaches SVG image with data: URL to the dom
       * @memberOf fabric.util
       * @param {Object} img Image object with data:image/svg src
       * @param {Function} callback Callback; invoked with loaded image
       * @return {Object} DOM element (div containing the SVG image)
       */
      loadImageInDom: function(n, c) {
        var s = u.document.createElement("div");
        s.style.width = s.style.height = "1px", s.style.left = s.style.top = "-100%", s.style.position = "absolute", s.appendChild(n), u.document.querySelector("body").appendChild(s), n.onload = function() {
          c(), s.parentNode.removeChild(s), s = null;
        };
      },
      /**
       * Creates corresponding fabric instances from their object representations
       * @static
       * @memberOf fabric.util
       * @param {Array} objects Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * @param {String} namespace Namespace to get klass "Class" object from
       * @param {Function} reviver Method for further parsing of object elements,
       * called after each fabric object created.
       */
      enlivenObjects: function(n, c, s, i) {
        n = n || [];
        var o = [], l = 0, d = n.length;
        function g() {
          ++l === d && c && c(o.filter(function(v) {
            return v;
          }));
        }
        if (!d) {
          c && c(o);
          return;
        }
        n.forEach(function(v, _) {
          if (!v || !v.type) {
            g();
            return;
          }
          var p = u.util.getKlass(v.type, s);
          p.fromObject(v, function(C, S) {
            S || (o[_] = C), i && i(v, C, S), g();
          });
        });
      },
      /**
       * Create and wait for loading of patterns
       * @static
       * @memberOf fabric.util
       * @param {Array} patterns Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * called after each fabric object created.
       */
      enlivenPatterns: function(n, c) {
        n = n || [];
        function s() {
          ++o === l && c && c(i);
        }
        var i = [], o = 0, l = n.length;
        if (!l) {
          c && c(i);
          return;
        }
        n.forEach(function(d, g) {
          d && d.source ? new u.Pattern(d, function(v) {
            i[g] = v, s();
          }) : (i[g] = d, s());
        });
      },
      /**
       * Groups SVG elements (usually those retrieved from SVG document)
       * @static
       * @memberOf fabric.util
       * @param {Array} elements SVG elements to group
       * @param {Object} [options] Options object
       * @param {String} path Value to set sourcePath to
       * @return {fabric.Object|fabric.Group}
       */
      groupSVGElements: function(n, c, s) {
        var i;
        return n && n.length === 1 ? n[0] : (c && (c.width && c.height ? c.centerPoint = {
          x: c.width / 2,
          y: c.height / 2
        } : (delete c.width, delete c.height)), i = new u.Group(n, c), typeof s < "u" && (i.sourcePath = s), i);
      },
      /**
       * Populates an object with properties of another object
       * @static
       * @memberOf fabric.util
       * @param {Object} source Source object
       * @param {Object} destination Destination object
       * @return {Array} properties Properties names to include
       */
      populateWithProperties: function(n, c, s) {
        if (s && Object.prototype.toString.call(s) === "[object Array]")
          for (var i = 0, o = s.length; i < o; i++)
            s[i] in n && (c[s[i]] = n[s[i]]);
      },
      /**
       * Draws a dashed line between two points
       *
       * This method is used to draw dashed line around selection area.
       * See <a href="http://stackoverflow.com/questions/4576724/dotted-stroke-in-canvas">dotted stroke in canvas</a>
       *
       * @param {CanvasRenderingContext2D} ctx context
       * @param {Number} x  start x coordinate
       * @param {Number} y start y coordinate
       * @param {Number} x2 end x coordinate
       * @param {Number} y2 end y coordinate
       * @param {Array} da dash array pattern
       */
      drawDashedLine: function(n, c, s, i, o, l) {
        var d = i - c, g = o - s, v = e(d * d + g * g), _ = h(g, d), p = l.length, C = 0, S = !0;
        for (n.save(), n.translate(c, s), n.moveTo(0, 0), n.rotate(_), c = 0; v > c; )
          c += l[C++ % p], c > v && (c = v), n[S ? "lineTo" : "moveTo"](c, 0), S = !S;
        n.restore();
      },
      /**
       * Creates canvas element
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
      createCanvasElement: function() {
        return u.document.createElement("canvas");
      },
      /**
       * Creates a canvas element that is a copy of another and is also painted
       * @param {CanvasElement} canvas to copy size and content of
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
      copyCanvasElement: function(n) {
        var c = u.util.createCanvasElement();
        return c.width = n.width, c.height = n.height, c.getContext("2d").drawImage(n, 0, 0), c;
      },
      /**
       * since 2.6.0 moved from canvas instance to utility.
       * @param {CanvasElement} canvasEl to copy size and content of
       * @param {String} format 'jpeg' or 'png', in some browsers 'webp' is ok too
       * @param {Number} quality <= 1 and > 0
       * @static
       * @memberOf fabric.util
       * @return {String} data url
       */
      toDataURL: function(n, c, s) {
        return n.toDataURL("image/" + c, s);
      },
      /**
       * Creates image element (works on client and node)
       * @static
       * @memberOf fabric.util
       * @return {HTMLImageElement} HTML image element
       */
      createImage: function() {
        return u.document.createElement("img");
      },
      /**
       * @static
       * @memberOf fabric.util
       * @deprecated since 2.0.0
       * @param {fabric.Object} receiver Object implementing `clipTo` method
       * @param {CanvasRenderingContext2D} ctx Context to clip
       */
      clipContext: function(n, c) {
        c.save(), c.beginPath(), n.clipTo(c), c.clip();
      },
      /**
       * Multiply matrix A by matrix B to nest transformations
       * @static
       * @memberOf fabric.util
       * @param  {Array} a First transformMatrix
       * @param  {Array} b Second transformMatrix
       * @param  {Boolean} is2x2 flag to multiply matrices as 2x2 matrices
       * @return {Array} The product of the two transform matrices
       */
      multiplyTransformMatrices: function(n, c, s) {
        return [
          n[0] * c[0] + n[2] * c[1],
          n[1] * c[0] + n[3] * c[1],
          n[0] * c[2] + n[2] * c[3],
          n[1] * c[2] + n[3] * c[3],
          s ? 0 : n[0] * c[4] + n[2] * c[5] + n[4],
          s ? 0 : n[1] * c[4] + n[3] * c[5] + n[5]
        ];
      },
      /**
       * Decomposes standard 2x3 matrix into transform components
       * @static
       * @memberOf fabric.util
       * @param  {Array} a transformMatrix
       * @return {Object} Components of transform
       */
      qrDecompose: function(n) {
        var c = h(n[1], n[0]), s = r(n[0], 2) + r(n[1], 2), i = e(s), o = (n[0] * n[3] - n[2] * n[1]) / i, l = h(n[0] * n[2] + n[1] * n[3], s);
        return {
          angle: c / t,
          scaleX: i,
          scaleY: o,
          skewX: l / t,
          skewY: 0,
          translateX: n[4],
          translateY: n[5]
        };
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle] angle in degrees
       * @return {Number[]} transform matrix
       */
      calcRotateMatrix: function(n) {
        if (!n.angle)
          return u.iMatrix.concat();
        var c = u.util.degreesToRadians(n.angle), s = u.util.cos(c), i = u.util.sin(c);
        return [s, i, -i, s, 0, 0];
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet.
       * is called DimensionsTransformMatrix because those properties are the one that influence
       * the size of the resulting box of the object.
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewX]
       * @return {Number[]} transform matrix
       */
      calcDimensionsMatrix: function(n) {
        var c = typeof n.scaleX > "u" ? 1 : n.scaleX, s = typeof n.scaleY > "u" ? 1 : n.scaleY, i = [
          n.flipX ? -c : c,
          0,
          0,
          n.flipY ? -s : s,
          0,
          0
        ], o = u.util.multiplyTransformMatrices, l = u.util.degreesToRadians;
        return n.skewX && (i = o(
          i,
          [1, 0, Math.tan(l(n.skewX)), 1],
          !0
        )), n.skewY && (i = o(
          i,
          [1, Math.tan(l(n.skewY)), 0, 1],
          !0
        )), i;
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle]
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.translateX]
       * @param  {Number} [options.translateY]
       * @return {Number[]} transform matrix
       */
      composeMatrix: function(n) {
        var c = [1, 0, 0, 1, n.translateX || 0, n.translateY || 0], s = u.util.multiplyTransformMatrices;
        return n.angle && (c = s(c, u.util.calcRotateMatrix(n))), (n.scaleX || n.scaleY || n.skewX || n.skewY || n.flipX || n.flipY) && (c = s(c, u.util.calcDimensionsMatrix(n))), c;
      },
      /**
       * Returns a transform matrix that has the same effect of scaleX, scaleY and skewX.
       * Is deprecated for composeMatrix. Please do not use it.
       * @static
       * @deprecated since 3.4.0
       * @memberOf fabric.util
       * @param  {Number} scaleX
       * @param  {Number} scaleY
       * @param  {Number} skewX
       * @return {Number[]} transform matrix
       */
      customTransformMatrix: function(n, c, s) {
        return u.util.composeMatrix({ scaleX: n, scaleY: c, skewX: s });
      },
      /**
       * reset an object transform state to neutral. Top and left are not accounted for
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to transform
       */
      resetObjectTransform: function(n) {
        n.scaleX = 1, n.scaleY = 1, n.skewX = 0, n.skewY = 0, n.flipX = !1, n.flipY = !1, n.rotate(0);
      },
      /**
       * Extract Object transform values
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to read from
       * @return {Object} Components of transform
       */
      saveObjectTransform: function(n) {
        return {
          scaleX: n.scaleX,
          scaleY: n.scaleY,
          skewX: n.skewX,
          skewY: n.skewY,
          angle: n.angle,
          left: n.left,
          flipX: n.flipX,
          flipY: n.flipY,
          top: n.top
        };
      },
      /**
       * Returns string representation of function body
       * @param {Function} fn Function to get body of
       * @return {String} Function body
       */
      getFunctionBody: function(n) {
        return (String(n).match(/function[^{]*\{([\s\S]*)\}/) || {})[1];
      },
      /**
       * Returns true if context has transparent pixel
       * at specified location (taking tolerance into account)
       * @param {CanvasRenderingContext2D} ctx context
       * @param {Number} x x coordinate
       * @param {Number} y y coordinate
       * @param {Number} tolerance Tolerance
       */
      isTransparent: function(n, c, s, i) {
        i > 0 && (c > i ? c -= i : c = 0, s > i ? s -= i : s = 0);
        var o = !0, l, d, g = n.getImageData(c, s, i * 2 || 1, i * 2 || 1), v = g.data.length;
        for (l = 3; l < v && (d = g.data[l], o = d <= 0, o !== !1); l += 4)
          ;
        return g = null, o;
      },
      /**
       * Parse preserveAspectRatio attribute from element
       * @param {string} attribute to be parsed
       * @return {Object} an object containing align and meetOrSlice attribute
       */
      parsePreserveAspectRatioAttribute: function(n) {
        var c = "meet", s = "Mid", i = "Mid", o = n.split(" "), l;
        return o && o.length && (c = o.pop(), c !== "meet" && c !== "slice" ? (l = c, c = "meet") : o.length && (l = o.pop())), s = l !== "none" ? l.slice(1, 4) : "none", i = l !== "none" ? l.slice(5, 8) : "none", {
          meetOrSlice: c,
          alignX: s,
          alignY: i
        };
      },
      /**
       * Clear char widths cache for the given font family or all the cache if no
       * fontFamily is specified.
       * Use it if you know you are loading fonts in a lazy way and you are not waiting
       * for custom fonts to load properly when adding text objects to the canvas.
       * If a text object is added when its own font is not loaded yet, you will get wrong
       * measurement and so wrong bounding boxes.
       * After the font cache is cleared, either change the textObject text content or call
       * initDimensions() to trigger a recalculation
       * @memberOf fabric.util
       * @param {String} [fontFamily] font family to clear
       */
      clearFabricFontCache: function(n) {
        n = (n || "").toLowerCase(), n ? u.charWidthsCache[n] && delete u.charWidthsCache[n] : u.charWidthsCache = {};
      },
      /**
       * Given current aspect ratio, determines the max width and height that can
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Number} ar aspect ratio
       * @param {Number} maximumArea Maximum area you want to achieve
       * @return {Object.x} Limited dimensions by X
       * @return {Object.y} Limited dimensions by Y
       */
      limitDimsByArea: function(n, c) {
        var s = Math.sqrt(c * n), i = Math.floor(c / s);
        return { x: Math.floor(s), y: i };
      },
      capValue: function(n, c, s) {
        return Math.max(n, Math.min(c, s));
      },
      /**
       * Finds the scale for the object source to fit inside the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to fit into destination
       */
      findScaleToFit: function(n, c) {
        return Math.min(c.width / n.width, c.height / n.height);
      },
      /**
       * Finds the scale for the object source to cover entirely the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to cover destination
       */
      findScaleToCover: function(n, c) {
        return Math.max(c.width / n.width, c.height / n.height);
      },
      /**
       * given an array of 6 number returns something like `"matrix(...numbers)"`
       * @memberOf fabric.util
       * @param {Array} trasnform an array with 6 numbers
       * @return {String} transform matrix for svg
       * @return {Object.y} Limited dimensions by Y
       */
      matrixToSVG: function(n) {
        return "matrix(" + n.map(function(c) {
          return u.util.toFixed(c, u.Object.NUM_FRACTION_DIGITS);
        }).join(" ") + ")";
      }
    };
  }(m), function() {
    var f = Array.prototype.join;
    function e(a, n, c, s, i, o, l) {
      var d = f.call(arguments);
      if (u.arcToSegmentsCache[d])
        return u.arcToSegmentsCache[d];
      var g = Math.PI, v = l * g / 180, _ = u.util.sin(v), p = u.util.cos(v), C = 0, S = 0;
      c = Math.abs(c), s = Math.abs(s);
      var O = -p * a * 0.5 - _ * n * 0.5, k = -p * n * 0.5 + _ * a * 0.5, P = c * c, F = s * s, E = k * k, X = O * O, z = P * F - P * E - F * X, N = 0;
      if (z < 0) {
        var J = Math.sqrt(1 - z / (P * F));
        c *= J, s *= J;
      } else
        N = (i === o ? -1 : 1) * Math.sqrt(z / (P * E + F * X));
      var T = N * c * k / s, j = -N * s * O / c, R = p * T - _ * j + a * 0.5, I = _ * T + p * j + n * 0.5, K = r(1, 0, (O - T) / c, (k - j) / s), M = r((O - T) / c, (k - j) / s, (-O - T) / c, (-k - j) / s);
      o === 0 && M > 0 ? M -= 2 * g : o === 1 && M < 0 && (M += 2 * g);
      for (var A = Math.ceil(Math.abs(M / g * 2)), L = [], B = M / A, W = 8 / 3 * Math.sin(B / 4) * Math.sin(B / 4) / Math.sin(B / 2), Y = K + B, U = 0; U < A; U++)
        L[U] = h(K, Y, p, _, c, s, R, I, W, C, S), C = L[U][4], S = L[U][5], K = Y, Y += B;
      return u.arcToSegmentsCache[d] = L, L;
    }
    function h(a, n, c, s, i, o, l, d, g, v, _) {
      var p = u.util.cos(a), C = u.util.sin(a), S = u.util.cos(n), O = u.util.sin(n), k = c * i * S - s * o * O + l, P = s * i * S + c * o * O + d, F = v + g * (-c * i * C - s * o * p), E = _ + g * (-s * i * C + c * o * p), X = k + g * (c * i * O + s * o * S), z = P + g * (s * i * O - c * o * S);
      return [
        F,
        E,
        X,
        z,
        k,
        P
      ];
    }
    function r(a, n, c, s) {
      var i = Math.atan2(n, a), o = Math.atan2(s, c);
      return o >= i ? o - i : 2 * Math.PI - (i - o);
    }
    u.util.drawArc = function(a, n, c, s) {
      for (var i = s[0], o = s[1], l = s[2], d = s[3], g = s[4], v = s[5], _ = s[6], p = [[], [], [], []], C = e(v - n, _ - c, i, o, d, g, l), S = 0, O = C.length; S < O; S++)
        p[S][0] = C[S][0] + n, p[S][1] = C[S][1] + c, p[S][2] = C[S][2] + n, p[S][3] = C[S][3] + c, p[S][4] = C[S][4] + n, p[S][5] = C[S][5] + c, a.bezierCurveTo.apply(a, p[S]);
    }, u.util.getBoundsOfArc = function(a, n, c, s, i, o, l, d, g) {
      for (var v = 0, _ = 0, p, C = [], S = e(d - a, g - n, c, s, o, l, i), O = 0, k = S.length; O < k; O++)
        p = t(v, _, S[O][0], S[O][1], S[O][2], S[O][3], S[O][4], S[O][5]), C.push({ x: p[0].x + a, y: p[0].y + n }), C.push({ x: p[1].x + a, y: p[1].y + n }), v = S[O][4], _ = S[O][5];
      return C;
    };
    function t(a, n, c, s, i, o, l, d) {
      var g;
      if (u.cachesBoundsOfCurve && (g = f.call(arguments), u.boundsOfCurveCache[g]))
        return u.boundsOfCurveCache[g];
      var v = Math.sqrt, _ = Math.min, p = Math.max, C = Math.abs, S = [], O = [[], []], k, P, F, E, X, z, N, J;
      P = 6 * a - 12 * c + 6 * i, k = -3 * a + 9 * c - 9 * i + 3 * l, F = 3 * c - 3 * a;
      for (var T = 0; T < 2; ++T) {
        if (T > 0 && (P = 6 * n - 12 * s + 6 * o, k = -3 * n + 9 * s - 9 * o + 3 * d, F = 3 * s - 3 * n), C(k) < 1e-12) {
          if (C(P) < 1e-12)
            continue;
          E = -F / P, 0 < E && E < 1 && S.push(E);
          continue;
        }
        N = P * P - 4 * F * k, !(N < 0) && (J = v(N), X = (-P + J) / (2 * k), 0 < X && X < 1 && S.push(X), z = (-P - J) / (2 * k), 0 < z && z < 1 && S.push(z));
      }
      for (var j, R, I = S.length, K = I, M; I--; )
        E = S[I], M = 1 - E, j = M * M * M * a + 3 * M * M * E * c + 3 * M * E * E * i + E * E * E * l, O[0][I] = j, R = M * M * M * n + 3 * M * M * E * s + 3 * M * E * E * o + E * E * E * d, O[1][I] = R;
      O[0][K] = a, O[1][K] = n, O[0][K + 1] = l, O[1][K + 1] = d;
      var A = [
        {
          x: _.apply(null, O[0]),
          y: _.apply(null, O[1])
        },
        {
          x: p.apply(null, O[0]),
          y: p.apply(null, O[1])
        }
      ];
      return u.cachesBoundsOfCurve && (u.boundsOfCurveCache[g] = A), A;
    }
    u.util.getBoundsOfCurve = t;
  }(), function() {
    var f = Array.prototype.slice;
    function e(n, c) {
      for (var s = f.call(arguments, 2), i = [], o = 0, l = n.length; o < l; o++)
        i[o] = s.length ? n[o][c].apply(n[o], s) : n[o][c].call(n[o]);
      return i;
    }
    function h(n, c) {
      return a(n, c, function(s, i) {
        return s >= i;
      });
    }
    function r(n, c) {
      return a(n, c, function(s, i) {
        return s < i;
      });
    }
    function t(n, c) {
      for (var s = n.length; s--; )
        n[s] = c;
      return n;
    }
    function a(n, c, s) {
      if (!(!n || n.length === 0)) {
        var i = n.length - 1, o = c ? n[i][c] : n[i];
        if (c)
          for (; i--; )
            s(n[i][c], o) && (o = n[i][c]);
        else
          for (; i--; )
            s(n[i], o) && (o = n[i]);
        return o;
      }
    }
    u.util.array = {
      fill: t,
      invoke: e,
      min: r,
      max: h
    };
  }(), function() {
    function f(h, r, t) {
      if (t)
        if (!u.isLikelyNode && r instanceof Element)
          h = r;
        else if (r instanceof Array) {
          h = [];
          for (var a = 0, n = r.length; a < n; a++)
            h[a] = f({}, r[a], t);
        } else if (r && typeof r == "object")
          for (var c in r)
            c === "canvas" ? h[c] = f({}, r[c]) : r.hasOwnProperty(c) && (h[c] = f({}, r[c], t));
        else
          h = r;
      else
        for (var c in r)
          h[c] = r[c];
      return h;
    }
    function e(h, r) {
      return f({}, h, r);
    }
    u.util.object = {
      extend: f,
      clone: e
    }, u.util.object.extend(u.util, u.Observable);
  }(), function() {
    function f(a) {
      return a.replace(/-+(.)?/g, function(n, c) {
        return c ? c.toUpperCase() : "";
      });
    }
    function e(a, n) {
      return a.charAt(0).toUpperCase() + (n ? a.slice(1) : a.slice(1).toLowerCase());
    }
    function h(a) {
      return a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function r(a) {
      var n = 0, c, s = [];
      for (n = 0, c; n < a.length; n++)
        (c = t(a, n)) !== !1 && s.push(c);
      return s;
    }
    function t(a, n) {
      var c = a.charCodeAt(n);
      if (isNaN(c))
        return "";
      if (c < 55296 || c > 57343)
        return a.charAt(n);
      if (55296 <= c && c <= 56319) {
        if (a.length <= n + 1)
          throw "High surrogate without following low surrogate";
        var s = a.charCodeAt(n + 1);
        if (56320 > s || s > 57343)
          throw "High surrogate without following low surrogate";
        return a.charAt(n) + a.charAt(n + 1);
      }
      if (n === 0)
        throw "Low surrogate without preceding high surrogate";
      var i = a.charCodeAt(n - 1);
      if (55296 > i || i > 56319)
        throw "Low surrogate without preceding high surrogate";
      return !1;
    }
    u.util.string = {
      camelize: f,
      capitalize: e,
      escapeXml: h,
      graphemeSplit: r
    };
  }(), function() {
    var f = Array.prototype.slice, e = function() {
    }, h = function() {
      for (var c in { toString: 1 })
        if (c === "toString")
          return !1;
      return !0;
    }(), r = function(c, s, i) {
      for (var o in s)
        o in c.prototype && typeof c.prototype[o] == "function" && (s[o] + "").indexOf("callSuper") > -1 ? c.prototype[o] = function(l) {
          return function() {
            var d = this.constructor.superclass;
            this.constructor.superclass = i;
            var g = s[l].apply(this, arguments);
            if (this.constructor.superclass = d, l !== "initialize")
              return g;
          };
        }(o) : c.prototype[o] = s[o], h && (s.toString !== Object.prototype.toString && (c.prototype.toString = s.toString), s.valueOf !== Object.prototype.valueOf && (c.prototype.valueOf = s.valueOf));
    };
    function t() {
    }
    function a(c) {
      for (var s = null, i = this; i.constructor.superclass; ) {
        var o = i.constructor.superclass.prototype[c];
        if (i[c] !== o) {
          s = o;
          break;
        }
        i = i.constructor.superclass.prototype;
      }
      return s ? arguments.length > 1 ? s.apply(this, f.call(arguments, 1)) : s.call(this) : console.log("tried to callSuper " + c + ", method not found in prototype chain", this);
    }
    function n() {
      var c = null, s = f.call(arguments, 0);
      typeof s[0] == "function" && (c = s.shift());
      function i() {
        this.initialize.apply(this, arguments);
      }
      i.superclass = c, i.subclasses = [], c && (t.prototype = c.prototype, i.prototype = new t(), c.subclasses.push(i));
      for (var o = 0, l = s.length; o < l; o++)
        r(i, s[o], c);
      return i.prototype.initialize || (i.prototype.initialize = e), i.prototype.constructor = i, i.prototype.callSuper = a, i;
    }
    u.util.createClass = n;
  }(), function() {
    var f = !!u.document.createElement("div").attachEvent;
    u.util.addListener = function(h, r, t, a) {
      h && h.addEventListener(r, t, f ? !1 : a);
    }, u.util.removeListener = function(h, r, t, a) {
      h && h.removeEventListener(r, t, f ? !1 : a);
    };
    function e(h) {
      var r = h.changedTouches;
      return r && r[0] ? r[0] : h;
    }
    u.util.getPointer = function(h) {
      var r = h.target, t = u.util.getScrollLeftTop(r), a = e(h);
      return {
        x: a.clientX + t.left,
        y: a.clientY + t.top
      };
    };
  }(), function() {
    function f(n, c) {
      var s = n.style;
      if (!s)
        return n;
      if (typeof c == "string")
        return n.style.cssText += ";" + c, c.indexOf("opacity") > -1 ? a(n, c.match(/opacity:\s*(\d?\.?\d*)/)[1]) : n;
      for (var i in c)
        if (i === "opacity")
          a(n, c[i]);
        else {
          var o = i === "float" || i === "cssFloat" ? typeof s.styleFloat > "u" ? "cssFloat" : "styleFloat" : i;
          s[o] = c[i];
        }
      return n;
    }
    var e = u.document.createElement("div"), h = typeof e.style.opacity == "string", r = typeof e.style.filter == "string", t = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, a = function(n) {
      return n;
    };
    h ? a = function(n, c) {
      return n.style.opacity = c, n;
    } : r && (a = function(n, c) {
      var s = n.style;
      return n.currentStyle && !n.currentStyle.hasLayout && (s.zoom = 1), t.test(s.filter) ? (c = c >= 0.9999 ? "" : "alpha(opacity=" + c * 100 + ")", s.filter = s.filter.replace(t, c)) : s.filter += " alpha(opacity=" + c * 100 + ")", n;
    }), u.util.setStyle = f;
  }(), function() {
    var f = Array.prototype.slice;
    function e(d) {
      return typeof d == "string" ? u.document.getElementById(d) : d;
    }
    var h, r = function(d) {
      return f.call(d, 0);
    };
    try {
      h = r(u.document.childNodes) instanceof Array;
    } catch {
    }
    h || (r = function(d) {
      for (var g = new Array(d.length), v = d.length; v--; )
        g[v] = d[v];
      return g;
    });
    function t(d, g) {
      var v = u.document.createElement(d);
      for (var _ in g)
        _ === "class" ? v.className = g[_] : _ === "for" ? v.htmlFor = g[_] : v.setAttribute(_, g[_]);
      return v;
    }
    function a(d, g) {
      d && (" " + d.className + " ").indexOf(" " + g + " ") === -1 && (d.className += (d.className ? " " : "") + g);
    }
    function n(d, g, v) {
      return typeof g == "string" && (g = t(g, v)), d.parentNode && d.parentNode.replaceChild(g, d), g.appendChild(d), g;
    }
    function c(d) {
      for (var g = 0, v = 0, _ = u.document.documentElement, p = u.document.body || {
        scrollLeft: 0,
        scrollTop: 0
      }; d && (d.parentNode || d.host) && (d = d.parentNode || d.host, d === u.document ? (g = p.scrollLeft || _.scrollLeft || 0, v = p.scrollTop || _.scrollTop || 0) : (g += d.scrollLeft || 0, v += d.scrollTop || 0), !(d.nodeType === 1 && d.style.position === "fixed")); )
        ;
      return { left: g, top: v };
    }
    function s(d) {
      var g, v = d && d.ownerDocument, _ = { left: 0, top: 0 }, p = { left: 0, top: 0 }, C, S = {
        borderLeftWidth: "left",
        borderTopWidth: "top",
        paddingLeft: "left",
        paddingTop: "top"
      };
      if (!v)
        return p;
      for (var O in S)
        p[S[O]] += parseInt(i(d, O), 10) || 0;
      return g = v.documentElement, typeof d.getBoundingClientRect < "u" && (_ = d.getBoundingClientRect()), C = c(d), {
        left: _.left + C.left - (g.clientLeft || 0) + p.left,
        top: _.top + C.top - (g.clientTop || 0) + p.top
      };
    }
    var i;
    u.document.defaultView && u.document.defaultView.getComputedStyle ? i = function(d, g) {
      var v = u.document.defaultView.getComputedStyle(d, null);
      return v ? v[g] : void 0;
    } : i = function(d, g) {
      var v = d.style[g];
      return !v && d.currentStyle && (v = d.currentStyle[g]), v;
    }, function() {
      var d = u.document.documentElement.style, g = "userSelect" in d ? "userSelect" : "MozUserSelect" in d ? "MozUserSelect" : "WebkitUserSelect" in d ? "WebkitUserSelect" : "KhtmlUserSelect" in d ? "KhtmlUserSelect" : "";
      function v(p) {
        return typeof p.onselectstart < "u" && (p.onselectstart = u.util.falseFunction), g ? p.style[g] = "none" : typeof p.unselectable == "string" && (p.unselectable = "on"), p;
      }
      function _(p) {
        return typeof p.onselectstart < "u" && (p.onselectstart = null), g ? p.style[g] = "" : typeof p.unselectable == "string" && (p.unselectable = ""), p;
      }
      u.util.makeElementUnselectable = v, u.util.makeElementSelectable = _;
    }(), function() {
      function d(g, v) {
        var _ = u.document.getElementsByTagName("head")[0], p = u.document.createElement("script"), C = !0;
        p.onload = /** @ignore */
        p.onreadystatechange = function(S) {
          if (C) {
            if (typeof this.readyState == "string" && this.readyState !== "loaded" && this.readyState !== "complete")
              return;
            C = !1, v(S || u.window.event), p = p.onload = p.onreadystatechange = null;
          }
        }, p.src = g, _.appendChild(p);
      }
      u.util.getScript = d;
    }();
    function o(d) {
      var g = u.jsdomImplForWrapper(d);
      return g._canvas || g._image;
    }
    function l(d) {
      if (u.isLikelyNode) {
        var g = u.jsdomImplForWrapper(d);
        g && (g._image = null, g._canvas = null, g._currentSrc = null, g._attributes = null, g._classList = null);
      }
    }
    u.util.getById = e, u.util.toArray = r, u.util.makeElement = t, u.util.addClass = a, u.util.wrapElement = n, u.util.getScrollLeftTop = c, u.util.getElementOffset = s, u.util.getElementStyle = i, u.util.getNodeCanvas = o, u.util.cleanUpJsdomNode = l;
  }(), function() {
    function f(r, t) {
      return r + (/\?/.test(r) ? "&" : "?") + t;
    }
    function e() {
    }
    function h(r, t) {
      t || (t = {});
      var a = t.method ? t.method.toUpperCase() : "GET", n = t.onComplete || function() {
      }, c = new u.window.XMLHttpRequest(), s = t.body || t.parameters;
      return c.onreadystatechange = function() {
        c.readyState === 4 && (n(c), c.onreadystatechange = e);
      }, a === "GET" && (s = null, typeof t.parameters == "string" && (r = f(r, t.parameters))), c.open(a, r, !0), (a === "POST" || a === "PUT") && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send(s), c;
    }
    u.util.request = h;
  }(), u.log = console.log, u.warn = console.warn, function() {
    function f() {
      return !1;
    }
    function e(c, s, i, o) {
      return -i * Math.cos(c / o * (Math.PI / 2)) + i + s;
    }
    function h(c) {
      a(function(s) {
        c || (c = {});
        var i = s || +/* @__PURE__ */ new Date(), o = c.duration || 500, l = i + o, d, g = c.onChange || f, v = c.abort || f, _ = c.onComplete || f, p = c.easing || e, C = "startValue" in c ? c.startValue : 0, S = "endValue" in c ? c.endValue : 100, O = c.byValue || S - C;
        c.onStart && c.onStart(), function k(P) {
          d = P || +/* @__PURE__ */ new Date();
          var F = d > l ? o : d - i, E = F / o, X = p(F, C, O, o), z = Math.abs((X - C) / O);
          if (v()) {
            _(S, 1, 1);
            return;
          }
          if (d > l) {
            g(S, 1, 1), _(S, 1, 1);
            return;
          } else
            g(X, z, E), a(k);
        }(i);
      });
    }
    var r = u.window.requestAnimationFrame || u.window.webkitRequestAnimationFrame || u.window.mozRequestAnimationFrame || u.window.oRequestAnimationFrame || u.window.msRequestAnimationFrame || function(c) {
      return u.window.setTimeout(c, 1e3 / 60);
    }, t = u.window.cancelAnimationFrame || u.window.clearTimeout;
    function a() {
      return r.apply(u.window, arguments);
    }
    function n() {
      return t.apply(u.window, arguments);
    }
    u.util.animate = h, u.util.requestAnimFrame = a, u.util.cancelAnimFrame = n;
  }(), function() {
    function f(h, r, t) {
      var a = "rgba(" + parseInt(h[0] + t * (r[0] - h[0]), 10) + "," + parseInt(h[1] + t * (r[1] - h[1]), 10) + "," + parseInt(h[2] + t * (r[2] - h[2]), 10);
      return a += "," + (h && r ? parseFloat(h[3] + t * (r[3] - h[3])) : 1), a += ")", a;
    }
    function e(h, r, t, a) {
      var n = new u.Color(h).getSource(), c = new u.Color(r).getSource();
      a = a || {}, u.util.animate(u.util.object.extend(a, {
        duration: t || 500,
        startValue: n,
        endValue: c,
        byValue: c,
        easing: function(s, i, o, l) {
          var d = a.colorEasing ? a.colorEasing(s, l) : 1 - Math.cos(s / l * (Math.PI / 2));
          return f(i, o, d);
        }
      }));
    }
    u.util.animateColor = e;
  }(), function() {
    function f(T, j, R, I) {
      return T < Math.abs(j) ? (T = j, I = R / 4) : j === 0 && T === 0 ? I = R / (2 * Math.PI) * Math.asin(1) : I = R / (2 * Math.PI) * Math.asin(j / T), { a: T, c: j, p: R, s: I };
    }
    function e(T, j, R) {
      return T.a * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * R - T.s) * (2 * Math.PI) / T.p);
    }
    function h(T, j, R, I) {
      return R * ((T = T / I - 1) * T * T + 1) + j;
    }
    function r(T, j, R, I) {
      return T /= I / 2, T < 1 ? R / 2 * T * T * T + j : R / 2 * ((T -= 2) * T * T + 2) + j;
    }
    function t(T, j, R, I) {
      return R * (T /= I) * T * T * T + j;
    }
    function a(T, j, R, I) {
      return -R * ((T = T / I - 1) * T * T * T - 1) + j;
    }
    function n(T, j, R, I) {
      return T /= I / 2, T < 1 ? R / 2 * T * T * T * T + j : -R / 2 * ((T -= 2) * T * T * T - 2) + j;
    }
    function c(T, j, R, I) {
      return R * (T /= I) * T * T * T * T + j;
    }
    function s(T, j, R, I) {
      return R * ((T = T / I - 1) * T * T * T * T + 1) + j;
    }
    function i(T, j, R, I) {
      return T /= I / 2, T < 1 ? R / 2 * T * T * T * T * T + j : R / 2 * ((T -= 2) * T * T * T * T + 2) + j;
    }
    function o(T, j, R, I) {
      return -R * Math.cos(T / I * (Math.PI / 2)) + R + j;
    }
    function l(T, j, R, I) {
      return R * Math.sin(T / I * (Math.PI / 2)) + j;
    }
    function d(T, j, R, I) {
      return -R / 2 * (Math.cos(Math.PI * T / I) - 1) + j;
    }
    function g(T, j, R, I) {
      return T === 0 ? j : R * Math.pow(2, 10 * (T / I - 1)) + j;
    }
    function v(T, j, R, I) {
      return T === I ? j + R : R * (-Math.pow(2, -10 * T / I) + 1) + j;
    }
    function _(T, j, R, I) {
      return T === 0 ? j : T === I ? j + R : (T /= I / 2, T < 1 ? R / 2 * Math.pow(2, 10 * (T - 1)) + j : R / 2 * (-Math.pow(2, -10 * --T) + 2) + j);
    }
    function p(T, j, R, I) {
      return -R * (Math.sqrt(1 - (T /= I) * T) - 1) + j;
    }
    function C(T, j, R, I) {
      return R * Math.sqrt(1 - (T = T / I - 1) * T) + j;
    }
    function S(T, j, R, I) {
      return T /= I / 2, T < 1 ? -R / 2 * (Math.sqrt(1 - T * T) - 1) + j : R / 2 * (Math.sqrt(1 - (T -= 2) * T) + 1) + j;
    }
    function O(T, j, R, I) {
      var K = 1.70158, M = 0, A = R;
      if (T === 0)
        return j;
      if (T /= I, T === 1)
        return j + R;
      M || (M = I * 0.3);
      var L = f(A, R, M, K);
      return -e(L, T, I) + j;
    }
    function k(T, j, R, I) {
      var K = 1.70158, M = 0, A = R;
      if (T === 0)
        return j;
      if (T /= I, T === 1)
        return j + R;
      M || (M = I * 0.3);
      var L = f(A, R, M, K);
      return L.a * Math.pow(2, -10 * T) * Math.sin((T * I - L.s) * (2 * Math.PI) / L.p) + L.c + j;
    }
    function P(T, j, R, I) {
      var K = 1.70158, M = 0, A = R;
      if (T === 0)
        return j;
      if (T /= I / 2, T === 2)
        return j + R;
      M || (M = I * (0.3 * 1.5));
      var L = f(A, R, M, K);
      return T < 1 ? -0.5 * e(L, T, I) + j : L.a * Math.pow(2, -10 * (T -= 1)) * Math.sin((T * I - L.s) * (2 * Math.PI) / L.p) * 0.5 + L.c + j;
    }
    function F(T, j, R, I, K) {
      return K === void 0 && (K = 1.70158), R * (T /= I) * T * ((K + 1) * T - K) + j;
    }
    function E(T, j, R, I, K) {
      return K === void 0 && (K = 1.70158), R * ((T = T / I - 1) * T * ((K + 1) * T + K) + 1) + j;
    }
    function X(T, j, R, I, K) {
      return K === void 0 && (K = 1.70158), T /= I / 2, T < 1 ? R / 2 * (T * T * (((K *= 1.525) + 1) * T - K)) + j : R / 2 * ((T -= 2) * T * (((K *= 1.525) + 1) * T + K) + 2) + j;
    }
    function z(T, j, R, I) {
      return R - N(I - T, 0, R, I) + j;
    }
    function N(T, j, R, I) {
      return (T /= I) < 1 / 2.75 ? R * (7.5625 * T * T) + j : T < 2 / 2.75 ? R * (7.5625 * (T -= 1.5 / 2.75) * T + 0.75) + j : T < 2.5 / 2.75 ? R * (7.5625 * (T -= 2.25 / 2.75) * T + 0.9375) + j : R * (7.5625 * (T -= 2.625 / 2.75) * T + 0.984375) + j;
    }
    function J(T, j, R, I) {
      return T < I / 2 ? z(T * 2, 0, R, I) * 0.5 + j : N(T * 2 - I, 0, R, I) * 0.5 + R * 0.5 + j;
    }
    u.util.ease = {
      /**
       * Quadratic easing in
       * @memberOf fabric.util.ease
       */
      easeInQuad: function(T, j, R, I) {
        return R * (T /= I) * T + j;
      },
      /**
       * Quadratic easing out
       * @memberOf fabric.util.ease
       */
      easeOutQuad: function(T, j, R, I) {
        return -R * (T /= I) * (T - 2) + j;
      },
      /**
       * Quadratic easing in and out
       * @memberOf fabric.util.ease
       */
      easeInOutQuad: function(T, j, R, I) {
        return T /= I / 2, T < 1 ? R / 2 * T * T + j : -R / 2 * (--T * (T - 2) - 1) + j;
      },
      /**
       * Cubic easing in
       * @memberOf fabric.util.ease
       */
      easeInCubic: function(T, j, R, I) {
        return R * (T /= I) * T * T + j;
      },
      easeOutCubic: h,
      easeInOutCubic: r,
      easeInQuart: t,
      easeOutQuart: a,
      easeInOutQuart: n,
      easeInQuint: c,
      easeOutQuint: s,
      easeInOutQuint: i,
      easeInSine: o,
      easeOutSine: l,
      easeInOutSine: d,
      easeInExpo: g,
      easeOutExpo: v,
      easeInOutExpo: _,
      easeInCirc: p,
      easeOutCirc: C,
      easeInOutCirc: S,
      easeInElastic: O,
      easeOutElastic: k,
      easeInOutElastic: P,
      easeInBack: F,
      easeOutBack: E,
      easeInOutBack: X,
      easeInBounce: z,
      easeOutBounce: N,
      easeInOutBounce: J
    };
  }(), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.extend, r = e.util.object.clone, t = e.util.toFixed, a = e.util.parseUnit, n = e.util.multiplyTransformMatrices, c = [
      "path",
      "circle",
      "polygon",
      "polyline",
      "ellipse",
      "rect",
      "line",
      "image",
      "text"
    ], s = ["symbol", "image", "marker", "pattern", "view", "svg"], i = ["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"], o = ["symbol", "g", "a", "svg", "clipPath", "defs"], l = {
      cx: "left",
      x: "left",
      r: "radius",
      cy: "top",
      y: "top",
      display: "visible",
      visibility: "visible",
      transform: "transformMatrix",
      "fill-opacity": "fillOpacity",
      "fill-rule": "fillRule",
      "font-family": "fontFamily",
      "font-size": "fontSize",
      "font-style": "fontStyle",
      "font-weight": "fontWeight",
      "letter-spacing": "charSpacing",
      "paint-order": "paintFirst",
      "stroke-dasharray": "strokeDashArray",
      "stroke-dashoffset": "strokeDashOffset",
      "stroke-linecap": "strokeLineCap",
      "stroke-linejoin": "strokeLineJoin",
      "stroke-miterlimit": "strokeMiterLimit",
      "stroke-opacity": "strokeOpacity",
      "stroke-width": "strokeWidth",
      "text-decoration": "textDecoration",
      "text-anchor": "textAnchor",
      opacity: "opacity",
      "clip-path": "clipPath",
      "clip-rule": "clipRule",
      "vector-effect": "strokeUniform"
    }, d = {
      stroke: "strokeOpacity",
      fill: "fillOpacity"
    }, g = "font-size", v = "clip-path";
    e.svgValidTagNamesRegEx = C(c), e.svgViewBoxElementsRegEx = C(s), e.svgInvalidAncestorsRegEx = C(i), e.svgValidParentsRegEx = C(o), e.cssRules = {}, e.gradientDefs = {}, e.clipPaths = {};
    function _(M) {
      return M in l ? l[M] : M;
    }
    function p(M, A, L, B) {
      var W = Object.prototype.toString.call(A) === "[object Array]", Y;
      if ((M === "fill" || M === "stroke") && A === "none")
        A = "";
      else if (M === "vector-effect")
        A = A === "non-scaling-stroke";
      else if (M === "strokeDashArray")
        A === "none" ? A = null : A = A.replace(/,/g, " ").split(/\s+/).map(parseFloat);
      else if (M === "transformMatrix")
        L && L.transformMatrix ? A = n(
          L.transformMatrix,
          e.parseTransformAttribute(A)
        ) : A = e.parseTransformAttribute(A);
      else if (M === "visible")
        A = A !== "none" && A !== "hidden", L && L.visible === !1 && (A = !1);
      else if (M === "opacity")
        A = parseFloat(A), L && typeof L.opacity < "u" && (A *= L.opacity);
      else if (M === "textAnchor")
        A = A === "start" ? "left" : A === "end" ? "right" : "center";
      else if (M === "charSpacing")
        Y = a(A, B) / B * 1e3;
      else if (M === "paintFirst") {
        var U = A.indexOf("fill"), G = A.indexOf("stroke"), A = "fill";
        (U > -1 && G > -1 && G < U || U === -1 && G > -1) && (A = "stroke");
      } else {
        if (M === "href" || M === "xlink:href")
          return A;
        Y = W ? A.map(a) : a(A, B);
      }
      return !W && isNaN(Y) ? A : Y;
    }
    function C(M) {
      return new RegExp("^(" + M.join("|") + ")\\b", "i");
    }
    function S(M) {
      for (var A in d)
        if (!(typeof M[d[A]] > "u" || M[A] === "")) {
          if (typeof M[A] > "u") {
            if (!e.Object.prototype[A])
              continue;
            M[A] = e.Object.prototype[A];
          }
          if (M[A].indexOf("url(") !== 0) {
            var L = new e.Color(M[A]);
            M[A] = L.setAlpha(t(L.getAlpha() * M[d[A]], 2)).toRgba();
          }
        }
      return M;
    }
    function O(M, A) {
      var L, B = [], W, Y, U;
      for (Y = 0, U = A.length; Y < U; Y++)
        L = A[Y], W = M.getElementsByTagName(L), B = B.concat(Array.prototype.slice.call(W));
      return B;
    }
    e.parseTransformAttribute = function() {
      function M(Q, rt) {
        var ht = e.util.cos(rt[0]), dt = e.util.sin(rt[0]), Rt = 0, Et = 0;
        rt.length === 3 && (Rt = rt[1], Et = rt[2]), Q[0] = ht, Q[1] = dt, Q[2] = -dt, Q[3] = ht, Q[4] = Rt - (ht * Rt - dt * Et), Q[5] = Et - (dt * Rt + ht * Et);
      }
      function A(Q, rt) {
        var ht = rt[0], dt = rt.length === 2 ? rt[1] : rt[0];
        Q[0] = ht, Q[3] = dt;
      }
      function L(Q, rt, ht) {
        Q[ht] = Math.tan(e.util.degreesToRadians(rt[0]));
      }
      function B(Q, rt) {
        Q[4] = rt[0], rt.length === 2 && (Q[5] = rt[1]);
      }
      var W = e.iMatrix, Y = e.reNum, U = "(?:\\s+,?\\s*|,\\s*)", G = "(?:(skewX)\\s*\\(\\s*(" + Y + ")\\s*\\))", Z = "(?:(skewY)\\s*\\(\\s*(" + Y + ")\\s*\\))", tt = "(?:(rotate)\\s*\\(\\s*(" + Y + ")(?:" + U + "(" + Y + ")" + U + "(" + Y + "))?\\s*\\))", ot = "(?:(scale)\\s*\\(\\s*(" + Y + ")(?:" + U + "(" + Y + "))?\\s*\\))", et = "(?:(translate)\\s*\\(\\s*(" + Y + ")(?:" + U + "(" + Y + "))?\\s*\\))", it = "(?:(matrix)\\s*\\(\\s*(" + Y + ")" + U + "(" + Y + ")" + U + "(" + Y + ")" + U + "(" + Y + ")" + U + "(" + Y + ")" + U + "(" + Y + ")\\s*\\))", nt = "(?:" + it + "|" + et + "|" + ot + "|" + tt + "|" + G + "|" + Z + ")", st = "(?:" + nt + "(?:" + U + "*" + nt + ")*)", ft = "^\\s*(?:" + st + "?)\\s*$", Ot = new RegExp(ft), Ht = new RegExp(nt, "g");
      return function(Q) {
        var rt = W.concat(), ht = [];
        if (!Q || Q && !Ot.test(Q))
          return rt;
        Q.replace(Ht, function(Rt) {
          var Et = new RegExp(nt).exec(Rt).filter(function(de) {
            return !!de;
          }), fe = Et[1], kt = Et.slice(2).map(parseFloat);
          switch (fe) {
            case "translate":
              B(rt, kt);
              break;
            case "rotate":
              kt[0] = e.util.degreesToRadians(kt[0]), M(rt, kt);
              break;
            case "scale":
              A(rt, kt);
              break;
            case "skewX":
              L(rt, kt, 2);
              break;
            case "skewY":
              L(rt, kt, 1);
              break;
            case "matrix":
              rt = kt;
              break;
          }
          ht.push(rt.concat()), rt = W.concat();
        });
        for (var dt = ht[0]; ht.length > 1; )
          ht.shift(), dt = e.util.multiplyTransformMatrices(dt, ht[0]);
        return dt;
      };
    }();
    function k(M, A) {
      var L, B;
      M.replace(/;\s*$/, "").split(";").forEach(function(W) {
        var Y = W.split(":");
        L = Y[0].trim().toLowerCase(), B = Y[1].trim(), A[L] = B;
      });
    }
    function P(M, A) {
      var L, B;
      for (var W in M)
        typeof M[W] > "u" || (L = W.toLowerCase(), B = M[W], A[L] = B);
    }
    function F(M, A) {
      var L = {};
      for (var B in e.cssRules[A])
        if (E(M, B.split(" ")))
          for (var W in e.cssRules[A][B])
            L[W] = e.cssRules[A][B][W];
      return L;
    }
    function E(M, A) {
      var L, B = !0;
      return L = z(M, A.pop()), L && A.length && (B = X(M, A)), L && B && A.length === 0;
    }
    function X(M, A) {
      for (var L, B = !0; M.parentNode && M.parentNode.nodeType === 1 && A.length; )
        B && (L = A.pop()), M = M.parentNode, B = z(M, L);
      return A.length === 0;
    }
    function z(M, A) {
      var L = M.nodeName, B = M.getAttribute("class"), W = M.getAttribute("id"), Y, U;
      if (Y = new RegExp("^" + L, "i"), A = A.replace(Y, ""), W && A.length && (Y = new RegExp("#" + W + "(?![a-zA-Z\\-]+)", "i"), A = A.replace(Y, "")), B && A.length)
        for (B = B.split(" "), U = B.length; U--; )
          Y = new RegExp("\\." + B[U] + "(?![a-zA-Z\\-]+)", "i"), A = A.replace(Y, "");
      return A.length === 0;
    }
    function N(M, A) {
      var L;
      if (M.getElementById && (L = M.getElementById(A)), L)
        return L;
      var B, W, Y, U = M.getElementsByTagName("*");
      for (W = 0, Y = U.length; W < Y; W++)
        if (B = U[W], A === B.getAttribute("id"))
          return B;
    }
    function J(M) {
      for (var A = O(M, ["use", "svg:use"]), L = 0; A.length && L < A.length; ) {
        var B = A[L], W = (B.getAttribute("xlink:href") || B.getAttribute("href")).substr(1), Y = B.getAttribute("x") || 0, U = B.getAttribute("y") || 0, G = N(M, W).cloneNode(!0), Z = (G.getAttribute("transform") || "") + " translate(" + Y + ", " + U + ")", tt, ot = A.length, et, it, nt, st, ft = e.svgNS;
        if (j(G), /^svg$/i.test(G.nodeName)) {
          var Ot = G.ownerDocument.createElementNS(ft, "g");
          for (it = 0, nt = G.attributes, st = nt.length; it < st; it++)
            et = nt.item(it), Ot.setAttributeNS(ft, et.nodeName, et.nodeValue);
          for (; G.firstChild; )
            Ot.appendChild(G.firstChild);
          G = Ot;
        }
        for (it = 0, nt = B.attributes, st = nt.length; it < st; it++)
          et = nt.item(it), !(et.nodeName === "x" || et.nodeName === "y" || et.nodeName === "xlink:href" || et.nodeName === "href") && (et.nodeName === "transform" ? Z = et.nodeValue + " " + Z : G.setAttribute(et.nodeName, et.nodeValue));
        G.setAttribute("transform", Z), G.setAttribute("instantiated_by_use", "1"), G.removeAttribute("id"), tt = B.parentNode, tt.replaceChild(G, B), A.length === ot && L++;
      }
    }
    var T = new RegExp(
      "^\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*$"
    );
    function j(M) {
      var A = M.getAttribute("viewBox"), L = 1, B = 1, W = 0, Y = 0, U, G, Z, tt, ot = M.getAttribute("width"), et = M.getAttribute("height"), it = M.getAttribute("x") || 0, nt = M.getAttribute("y") || 0, st = M.getAttribute("preserveAspectRatio") || "", ft = !A || !e.svgViewBoxElementsRegEx.test(M.nodeName) || !(A = A.match(T)), Ot = !ot || !et || ot === "100%" || et === "100%", Ht = ft && Ot, Q = {}, rt = "", ht = 0, dt = 0;
      if (Q.width = 0, Q.height = 0, Q.toBeParsed = Ht, Ht)
        return Q;
      if (ft)
        return Q.width = a(ot), Q.height = a(et), Q;
      if (W = -parseFloat(A[1]), Y = -parseFloat(A[2]), U = parseFloat(A[3]), G = parseFloat(A[4]), Q.minX = W, Q.minY = Y, Q.viewBoxWidth = U, Q.viewBoxHeight = G, Ot ? (Q.width = U, Q.height = G) : (Q.width = a(ot), Q.height = a(et), L = Q.width / U, B = Q.height / G), st = e.util.parsePreserveAspectRatioAttribute(st), st.alignX !== "none" && (st.meetOrSlice === "meet" && (B = L = L > B ? B : L), st.meetOrSlice === "slice" && (B = L = L > B ? L : B), ht = Q.width - U * L, dt = Q.height - G * L, st.alignX === "Mid" && (ht /= 2), st.alignY === "Mid" && (dt /= 2), st.alignX === "Min" && (ht = 0), st.alignY === "Min" && (dt = 0)), L === 1 && B === 1 && W === 0 && Y === 0 && it === 0 && nt === 0)
        return Q;
      if ((it || nt) && (rt = " translate(" + a(it) + " " + a(nt) + ") "), Z = rt + " matrix(" + L + " 0 0 " + B + " " + (W * L + ht) + " " + (Y * B + dt) + ") ", Q.viewboxTransform = e.parseTransformAttribute(Z), M.nodeName === "svg") {
        for (tt = M.ownerDocument.createElementNS(e.svgNS, "g"); M.firstChild; )
          tt.appendChild(M.firstChild);
        M.appendChild(tt);
      } else
        tt = M, Z = tt.getAttribute("transform") + Z;
      return tt.setAttribute("transform", Z), Q;
    }
    function R(M, A) {
      for (; M && (M = M.parentNode); )
        if (M.nodeName && A.test(M.nodeName.replace("svg:", "")) && !M.getAttribute("instantiated_by_use"))
          return !0;
      return !1;
    }
    e.parseSVGDocument = function(M, A, L, B) {
      if (M) {
        J(M);
        var W = e.Object.__uid++, Y, U, G = j(M), Z = e.util.toArray(M.getElementsByTagName("*"));
        if (G.crossOrigin = B && B.crossOrigin, G.svgUid = W, Z.length === 0 && e.isLikelyNode) {
          Z = M.selectNodes('//*[name(.)!="svg"]');
          var tt = [];
          for (Y = 0, U = Z.length; Y < U; Y++)
            tt[Y] = Z[Y];
          Z = tt;
        }
        var ot = Z.filter(function(it) {
          return j(it), e.svgValidTagNamesRegEx.test(it.nodeName.replace("svg:", "")) && !R(it, e.svgInvalidAncestorsRegEx);
        });
        if (!ot || ot && !ot.length) {
          A && A([], {});
          return;
        }
        var et = {};
        Z.filter(function(it) {
          return it.nodeName.replace("svg:", "") === "clipPath";
        }).forEach(function(it) {
          var nt = it.getAttribute("id");
          et[nt] = e.util.toArray(it.getElementsByTagName("*")).filter(function(st) {
            return e.svgValidTagNamesRegEx.test(st.nodeName.replace("svg:", ""));
          });
        }), e.gradientDefs[W] = e.getGradientDefs(M), e.cssRules[W] = e.getCSSRules(M), e.clipPaths[W] = et, e.parseElements(ot, function(it, nt) {
          A && (A(it, G, nt, Z), delete e.gradientDefs[W], delete e.cssRules[W], delete e.clipPaths[W]);
        }, r(G), L, B);
      }
    };
    function I(M, A) {
      var L = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"], B = "xlink:href", W = A.getAttribute(B).substr(1), Y = N(M, W);
      if (Y && Y.getAttribute(B) && I(M, Y), L.forEach(function(G) {
        Y && !A.hasAttribute(G) && Y.hasAttribute(G) && A.setAttribute(G, Y.getAttribute(G));
      }), !A.children.length)
        for (var U = Y.cloneNode(!0); U.firstChild; )
          A.appendChild(U.firstChild);
      A.removeAttribute(B);
    }
    var K = new RegExp(
      "(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + e.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + e.reNum + "))?\\s+(.*)"
    );
    h(e, {
      /**
       * Parses a short font declaration, building adding its properties to a style object
       * @static
       * @function
       * @memberOf fabric
       * @param {String} value font declaration
       * @param {Object} oStyle definition
       */
      parseFontDeclaration: function(M, A) {
        var L = M.match(K);
        if (L) {
          var B = L[1], W = L[3], Y = L[4], U = L[5], G = L[6];
          B && (A.fontStyle = B), W && (A.fontWeight = isNaN(parseFloat(W)) ? W : parseFloat(W)), Y && (A.fontSize = a(Y)), G && (A.fontFamily = G), U && (A.lineHeight = U === "normal" ? 1 : U);
        }
      },
      /**
       * Parses an SVG document, returning all of the gradient declarations found in it
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
       */
      getGradientDefs: function(M) {
        var A = [
          "linearGradient",
          "radialGradient",
          "svg:linearGradient",
          "svg:radialGradient"
        ], L = O(M, A), B, W = 0, Y = {};
        for (W = L.length; W--; )
          B = L[W], B.getAttribute("xlink:href") && I(M, B), Y[B.getAttribute("id")] = B;
        return Y;
      },
      /**
       * Returns an object of attributes' name/value, given element and an array of attribute names;
       * Parses parent "g" nodes recursively upwards.
       * @static
       * @memberOf fabric
       * @param {DOMElement} element Element to parse
       * @param {Array} attributes Array of attributes to parse
       * @return {Object} object containing parsed attributes' names/values
       */
      parseAttributes: function(M, A, L) {
        if (M) {
          var B, W = {}, Y, U;
          typeof L > "u" && (L = M.getAttribute("svgUid")), M.parentNode && e.svgValidParentsRegEx.test(M.parentNode.nodeName) && (W = e.parseAttributes(M.parentNode, A, L));
          var G = A.reduce(function(st, ft) {
            return B = M.getAttribute(ft), B && (st[ft] = B), st;
          }, {}), Z = h(
            F(M, L),
            e.parseStyleAttribute(M)
          );
          G = h(
            G,
            Z
          ), Z[v] && M.setAttribute(v, Z[v]), Y = U = W.fontSize || e.Text.DEFAULT_SVG_FONT_SIZE, G[g] && (G[g] = Y = a(G[g], U));
          var tt, ot, et = {};
          for (var it in G)
            tt = _(it), ot = p(tt, G[it], W, Y), et[tt] = ot;
          et && et.font && e.parseFontDeclaration(et.font, et);
          var nt = h(W, et);
          return e.svgValidParentsRegEx.test(M.nodeName) ? nt : S(nt);
        }
      },
      /**
       * Transforms an array of svg elements to corresponding fabric.* instances
       * @static
       * @memberOf fabric
       * @param {Array} elements Array of elements to parse
       * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
       * @param {Object} [options] Options object
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       */
      parseElements: function(M, A, L, B, W) {
        new e.ElementsParser(M, A, L, B, W).parse();
      },
      /**
       * Parses "style" attribute, retuning an object with values
       * @static
       * @memberOf fabric
       * @param {SVGElement} element Element to parse
       * @return {Object} Objects with values parsed from style attribute of an element
       */
      parseStyleAttribute: function(M) {
        var A = {}, L = M.getAttribute("style");
        return L && (typeof L == "string" ? k(L, A) : P(L, A)), A;
      },
      /**
       * Parses "points" attribute, returning an array of values
       * @static
       * @memberOf fabric
       * @param {String} points points attribute string
       * @return {Array} array of points
       */
      parsePointsAttribute: function(M) {
        if (!M)
          return null;
        M = M.replace(/,/g, " ").trim(), M = M.split(/\s+/);
        var A = [], L, B;
        for (L = 0, B = M.length; L < B; L += 2)
          A.push({
            x: parseFloat(M[L]),
            y: parseFloat(M[L + 1])
          });
        return A;
      },
      /**
       * Returns CSS rules for a given SVG document
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} CSS rules of this document
       */
      getCSSRules: function(M) {
        var A = M.getElementsByTagName("style"), L, B, W = {}, Y;
        for (L = 0, B = A.length; L < B; L++) {
          var U = A[L].textContent || "";
          U = U.replace(/\/\*[\s\S]*?\*\//g, ""), U.trim() !== "" && (Y = U.match(/[^{]*\{[\s\S]*?\}/g), Y = Y.map(function(G) {
            return G.trim();
          }), Y.forEach(function(G) {
            var Z = G.match(/([\s\S]*?)\s*\{([^}]*)\}/), tt = {}, ot = Z[2].trim(), et = ot.replace(/;$/, "").split(/\s*;\s*/);
            for (L = 0, B = et.length; L < B; L++) {
              var it = et[L].split(/\s*:\s*/), nt = it[0], st = it[1];
              tt[nt] = st;
            }
            G = Z[1], G.split(",").forEach(function(ft) {
              ft = ft.replace(/^svg/i, "").trim(), ft !== "" && (W[ft] ? e.util.object.extend(W[ft], tt) : W[ft] = e.util.object.clone(tt));
            });
          }));
        }
        return W;
      },
      /**
       * Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
       * Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
       * @memberOf fabric
       * @param {String} url
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
      loadSVGFromURL: function(M, A, L, B) {
        M = M.replace(/^\n\s*/, "").trim(), new e.util.request(M, {
          method: "get",
          onComplete: W
        });
        function W(Y) {
          var U = Y.responseXML;
          if (U && !U.documentElement && e.window.ActiveXObject && Y.responseText && (U = new ActiveXObject("Microsoft.XMLDOM"), U.async = "false", U.loadXML(Y.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ""))), !U || !U.documentElement)
            return A && A(null), !1;
          e.parseSVGDocument(U.documentElement, function(G, Z, tt, ot) {
            A && A(G, Z, tt, ot);
          }, L, B);
        }
      },
      /**
       * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
       * @memberOf fabric
       * @param {String} string
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
      loadSVGFromString: function(M, A, L, B) {
        M = M.trim();
        var W;
        if (typeof e.window.DOMParser < "u") {
          var Y = new e.window.DOMParser();
          Y && Y.parseFromString && (W = Y.parseFromString(M, "text/xml"));
        } else
          e.window.ActiveXObject && (W = new ActiveXObject("Microsoft.XMLDOM"), W.async = "false", W.loadXML(M.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, "")));
        e.parseSVGDocument(W.documentElement, function(U, G, Z, tt) {
          A(U, G, Z, tt);
        }, L, B);
      }
    });
  }(m), u.ElementsParser = function(f, e, h, r, t, a) {
    this.elements = f, this.callback = e, this.options = h, this.reviver = r, this.svgUid = h && h.svgUid || 0, this.parsingOptions = t, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = a;
  }, function(f) {
    f.parse = function() {
      this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
    }, f.createObjects = function() {
      var e = this;
      this.elements.forEach(function(h, r) {
        h.setAttribute("svgUid", e.svgUid), e.createObject(h, r);
      });
    }, f.findTag = function(e) {
      return u[u.util.string.capitalize(e.tagName.replace("svg:", ""))];
    }, f.createObject = function(e, h) {
      var r = this.findTag(e);
      if (r && r.fromElement)
        try {
          r.fromElement(e, this.createCallback(h, e), this.options);
        } catch (t) {
          u.log(t);
        }
      else
        this.checkIfDone();
    }, f.createCallback = function(e, h) {
      var r = this;
      return function(t) {
        var a;
        r.resolveGradient(t, h, "fill"), r.resolveGradient(t, h, "stroke"), t instanceof u.Image && t._originalElement && (a = t.parsePreserveAspectRatioAttribute(h)), t._removeTransformMatrix(a), r.resolveClipPath(t, h), r.reviver && r.reviver(h, t), r.instances[e] = t, r.checkIfDone();
      };
    }, f.extractPropertyDefinition = function(e, h, r) {
      var t = e[h], a = this.regexUrl;
      if (a.test(t)) {
        a.lastIndex = 0;
        var n = a.exec(t)[1];
        return a.lastIndex = 0, u[r][this.svgUid][n];
      }
    }, f.resolveGradient = function(e, h, r) {
      var t = this.extractPropertyDefinition(e, r, "gradientDefs");
      if (t) {
        var a = h.getAttribute(r + "-opacity"), n = u.Gradient.fromElement(t, e, a, this.options);
        e.set(r, n);
      }
    }, f.createClipPathCallback = function(e, h) {
      return function(r) {
        r._removeTransformMatrix(), r.fillRule = r.clipRule, h.push(r);
      };
    }, f.resolveClipPath = function(e, h) {
      var r = this.extractPropertyDefinition(e, "clipPath", "clipPaths"), t, a, n, c, s, i;
      if (r) {
        c = [], n = u.util.invertTransform(e.calcTransformMatrix());
        for (var o = r[0].parentNode, l = h; l.parentNode && l.getAttribute("clip-path") !== e.clipPath; )
          l = l.parentNode;
        l.parentNode.appendChild(o);
        for (var d = 0; d < r.length; d++)
          t = r[d], a = this.findTag(t), a.fromElement(
            t,
            this.createClipPathCallback(e, c),
            this.options
          );
        c.length === 1 ? r = c[0] : r = new u.Group(c), s = u.util.multiplyTransformMatrices(
          n,
          r.calcTransformMatrix()
        ), r.clipPath && this.resolveClipPath(r, l);
        var i = u.util.qrDecompose(s);
        r.flipX = !1, r.flipY = !1, r.set("scaleX", i.scaleX), r.set("scaleY", i.scaleY), r.angle = i.angle, r.skewX = i.skewX, r.skewY = 0, r.setPositionByOrigin({ x: i.translateX, y: i.translateY }, "center", "center"), e.clipPath = r;
      } else
        delete e.clipPath;
    }, f.checkIfDone = function() {
      --this.numElements === 0 && (this.instances = this.instances.filter(function(e) {
        return e != null;
      }), this.callback(this.instances, this.elements));
    };
  }(u.ElementsParser.prototype), function(f) {
    var e = f.fabric || (f.fabric = {});
    if (e.Point) {
      e.warn("fabric.Point is already defined");
      return;
    }
    e.Point = h;
    function h(r, t) {
      this.x = r, this.y = t;
    }
    h.prototype = /** @lends fabric.Point.prototype */
    {
      type: "point",
      constructor: h,
      /**
       * Adds another point to this one and returns another one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point instance with added values
       */
      add: function(r) {
        return new h(this.x + r.x, this.y + r.y);
      },
      /**
       * Adds another point to this one
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
      addEquals: function(r) {
        return this.x += r.x, this.y += r.y, this;
      },
      /**
       * Adds value to this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point} new Point with added value
       */
      scalarAdd: function(r) {
        return new h(this.x + r, this.y + r);
      },
      /**
       * Adds value to this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      scalarAddEquals: function(r) {
        return this.x += r, this.y += r, this;
      },
      /**
       * Subtracts another point from this point and returns a new one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point object with subtracted values
       */
      subtract: function(r) {
        return new h(this.x - r.x, this.y - r.y);
      },
      /**
       * Subtracts another point from this point
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
      subtractEquals: function(r) {
        return this.x -= r.x, this.y -= r.y, this;
      },
      /**
       * Subtracts value from this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      scalarSubtract: function(r) {
        return new h(this.x - r, this.y - r);
      },
      /**
       * Subtracts value from this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      scalarSubtractEquals: function(r) {
        return this.x -= r, this.y -= r, this;
      },
      /**
       * Multiplies this point by a value and returns a new one
       * TODO: rename in scalarMultiply in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      multiply: function(r) {
        return new h(this.x * r, this.y * r);
      },
      /**
       * Multiplies this point by a value
       * TODO: rename in scalarMultiplyEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      multiplyEquals: function(r) {
        return this.x *= r, this.y *= r, this;
      },
      /**
       * Divides this point by a value and returns a new one
       * TODO: rename in scalarDivide in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      divide: function(r) {
        return new h(this.x / r, this.y / r);
      },
      /**
       * Divides this point by a value
       * TODO: rename in scalarDivideEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      divideEquals: function(r) {
        return this.x /= r, this.y /= r, this;
      },
      /**
       * Returns true if this point is equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      eq: function(r) {
        return this.x === r.x && this.y === r.y;
      },
      /**
       * Returns true if this point is less than another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      lt: function(r) {
        return this.x < r.x && this.y < r.y;
      },
      /**
       * Returns true if this point is less than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      lte: function(r) {
        return this.x <= r.x && this.y <= r.y;
      },
      /**
      
      	     * Returns true if this point is greater another one
      	     * @param {fabric.Point} that
      	     * @return {Boolean}
      	     */
      gt: function(r) {
        return this.x > r.x && this.y > r.y;
      },
      /**
       * Returns true if this point is greater than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      gte: function(r) {
        return this.x >= r.x && this.y >= r.y;
      },
      /**
       * Returns new point which is the result of linear interpolation with this one and another one
       * @param {fabric.Point} that
       * @param {Number} t , position of interpolation, between 0 and 1 default 0.5
       * @return {fabric.Point}
       */
      lerp: function(r, t) {
        return typeof t > "u" && (t = 0.5), t = Math.max(Math.min(1, t), 0), new h(this.x + (r.x - this.x) * t, this.y + (r.y - this.y) * t);
      },
      /**
       * Returns distance from this point and another one
       * @param {fabric.Point} that
       * @return {Number}
       */
      distanceFrom: function(r) {
        var t = this.x - r.x, a = this.y - r.y;
        return Math.sqrt(t * t + a * a);
      },
      /**
       * Returns the point between this point and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      midPointFrom: function(r) {
        return this.lerp(r);
      },
      /**
       * Returns a new point which is the min of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      min: function(r) {
        return new h(Math.min(this.x, r.x), Math.min(this.y, r.y));
      },
      /**
       * Returns a new point which is the max of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      max: function(r) {
        return new h(Math.max(this.x, r.x), Math.max(this.y, r.y));
      },
      /**
       * Returns string representation of this point
       * @return {String}
       */
      toString: function() {
        return this.x + "," + this.y;
      },
      /**
       * Sets x/y of this point
       * @param {Number} x
       * @param {Number} y
       * @chainable
       */
      setXY: function(r, t) {
        return this.x = r, this.y = t, this;
      },
      /**
       * Sets x of this point
       * @param {Number} x
       * @chainable
       */
      setX: function(r) {
        return this.x = r, this;
      },
      /**
       * Sets y of this point
       * @param {Number} y
       * @chainable
       */
      setY: function(r) {
        return this.y = r, this;
      },
      /**
       * Sets x/y of this point from another point
       * @param {fabric.Point} that
       * @chainable
       */
      setFromPoint: function(r) {
        return this.x = r.x, this.y = r.y, this;
      },
      /**
       * Swaps x/y of this point and another point
       * @param {fabric.Point} that
       */
      swap: function(r) {
        var t = this.x, a = this.y;
        this.x = r.x, this.y = r.y, r.x = t, r.y = a;
      },
      /**
       * return a cloned instance of the point
       * @return {fabric.Point}
       */
      clone: function() {
        return new h(this.x, this.y);
      }
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {});
    if (e.Intersection) {
      e.warn("fabric.Intersection is already defined");
      return;
    }
    function h(r) {
      this.status = r, this.points = [];
    }
    e.Intersection = h, e.Intersection.prototype = /** @lends fabric.Intersection.prototype */
    {
      constructor: h,
      /**
       * Appends a point to intersection
       * @param {fabric.Point} point
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
      appendPoint: function(r) {
        return this.points.push(r), this;
      },
      /**
       * Appends points to intersection
       * @param {Array} points
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
      appendPoints: function(r) {
        return this.points = this.points.concat(r), this;
      }
    }, e.Intersection.intersectLineLine = function(r, t, a, n) {
      var c, s = (n.x - a.x) * (r.y - a.y) - (n.y - a.y) * (r.x - a.x), i = (t.x - r.x) * (r.y - a.y) - (t.y - r.y) * (r.x - a.x), o = (n.y - a.y) * (t.x - r.x) - (n.x - a.x) * (t.y - r.y);
      if (o !== 0) {
        var l = s / o, d = i / o;
        0 <= l && l <= 1 && 0 <= d && d <= 1 ? (c = new h("Intersection"), c.appendPoint(new e.Point(r.x + l * (t.x - r.x), r.y + l * (t.y - r.y)))) : c = new h();
      } else
        s === 0 || i === 0 ? c = new h("Coincident") : c = new h("Parallel");
      return c;
    }, e.Intersection.intersectLinePolygon = function(r, t, a) {
      var n = new h(), c = a.length, s, i, o, l;
      for (l = 0; l < c; l++)
        s = a[l], i = a[(l + 1) % c], o = h.intersectLineLine(r, t, s, i), n.appendPoints(o.points);
      return n.points.length > 0 && (n.status = "Intersection"), n;
    }, e.Intersection.intersectPolygonPolygon = function(r, t) {
      var a = new h(), n = r.length, c;
      for (c = 0; c < n; c++) {
        var s = r[c], i = r[(c + 1) % n], o = h.intersectLinePolygon(s, i, t);
        a.appendPoints(o.points);
      }
      return a.points.length > 0 && (a.status = "Intersection"), a;
    }, e.Intersection.intersectPolygonRectangle = function(r, t, a) {
      var n = t.min(a), c = t.max(a), s = new e.Point(c.x, n.y), i = new e.Point(n.x, c.y), o = h.intersectLinePolygon(n, s, r), l = h.intersectLinePolygon(s, c, r), d = h.intersectLinePolygon(c, i, r), g = h.intersectLinePolygon(i, n, r), v = new h();
      return v.appendPoints(o.points), v.appendPoints(l.points), v.appendPoints(d.points), v.appendPoints(g.points), v.points.length > 0 && (v.status = "Intersection"), v;
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {});
    if (e.Color) {
      e.warn("fabric.Color is already defined.");
      return;
    }
    function h(t) {
      t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1]);
    }
    e.Color = h, e.Color.prototype = /** @lends fabric.Color.prototype */
    {
      /**
       * @private
       * @param {String|Array} color Color value to parse
       */
      _tryParsingColor: function(t) {
        var a;
        t in h.colorNameMap && (t = h.colorNameMap[t]), t === "transparent" && (a = [255, 255, 255, 0]), a || (a = h.sourceFromHex(t)), a || (a = h.sourceFromRgb(t)), a || (a = h.sourceFromHsl(t)), a || (a = [0, 0, 0, 1]), a && this.setSource(a);
      },
      /**
       * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
       * @private
       * @param {Number} r Red color value
       * @param {Number} g Green color value
       * @param {Number} b Blue color value
       * @return {Array} Hsl color
       */
      _rgbToHsl: function(t, a, n) {
        t /= 255, a /= 255, n /= 255;
        var c, s, i, o = e.util.array.max([t, a, n]), l = e.util.array.min([t, a, n]);
        if (i = (o + l) / 2, o === l)
          c = s = 0;
        else {
          var d = o - l;
          switch (s = i > 0.5 ? d / (2 - o - l) : d / (o + l), o) {
            case t:
              c = (a - n) / d + (a < n ? 6 : 0);
              break;
            case a:
              c = (n - t) / d + 2;
              break;
            case n:
              c = (t - a) / d + 4;
              break;
          }
          c /= 6;
        }
        return [
          Math.round(c * 360),
          Math.round(s * 100),
          Math.round(i * 100)
        ];
      },
      /**
       * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @return {Array}
       */
      getSource: function() {
        return this._source;
      },
      /**
       * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @param {Array} source
       */
      setSource: function(t) {
        this._source = t;
      },
      /**
       * Returns color representation in RGB format
       * @return {String} ex: rgb(0-255,0-255,0-255)
       */
      toRgb: function() {
        var t = this.getSource();
        return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
      },
      /**
       * Returns color representation in RGBA format
       * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
       */
      toRgba: function() {
        var t = this.getSource();
        return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + t[3] + ")";
      },
      /**
       * Returns color representation in HSL format
       * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
       */
      toHsl: function() {
        var t = this.getSource(), a = this._rgbToHsl(t[0], t[1], t[2]);
        return "hsl(" + a[0] + "," + a[1] + "%," + a[2] + "%)";
      },
      /**
       * Returns color representation in HSLA format
       * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
       */
      toHsla: function() {
        var t = this.getSource(), a = this._rgbToHsl(t[0], t[1], t[2]);
        return "hsla(" + a[0] + "," + a[1] + "%," + a[2] + "%," + t[3] + ")";
      },
      /**
       * Returns color representation in HEX format
       * @return {String} ex: FF5555
       */
      toHex: function() {
        var t = this.getSource(), a, n, c;
        return a = t[0].toString(16), a = a.length === 1 ? "0" + a : a, n = t[1].toString(16), n = n.length === 1 ? "0" + n : n, c = t[2].toString(16), c = c.length === 1 ? "0" + c : c, a.toUpperCase() + n.toUpperCase() + c.toUpperCase();
      },
      /**
       * Returns color representation in HEXA format
       * @return {String} ex: FF5555CC
       */
      toHexa: function() {
        var t = this.getSource(), a;
        return a = Math.round(t[3] * 255), a = a.toString(16), a = a.length === 1 ? "0" + a : a, this.toHex() + a.toUpperCase();
      },
      /**
       * Gets value of alpha channel for this color
       * @return {Number} 0-1
       */
      getAlpha: function() {
        return this.getSource()[3];
      },
      /**
       * Sets value of alpha channel for this color
       * @param {Number} alpha Alpha value 0-1
       * @return {fabric.Color} thisArg
       */
      setAlpha: function(t) {
        var a = this.getSource();
        return a[3] = t, this.setSource(a), this;
      },
      /**
       * Transforms color to its grayscale representation
       * @return {fabric.Color} thisArg
       */
      toGrayscale: function() {
        var t = this.getSource(), a = parseInt((t[0] * 0.3 + t[1] * 0.59 + t[2] * 0.11).toFixed(0), 10), n = t[3];
        return this.setSource([a, a, a, n]), this;
      },
      /**
       * Transforms color to its black and white representation
       * @param {Number} threshold
       * @return {fabric.Color} thisArg
       */
      toBlackWhite: function(t) {
        var a = this.getSource(), n = (a[0] * 0.3 + a[1] * 0.59 + a[2] * 0.11).toFixed(0), c = a[3];
        return t = t || 127, n = Number(n) < Number(t) ? 0 : 255, this.setSource([n, n, n, c]), this;
      },
      /**
       * Overlays color with another color
       * @param {String|fabric.Color} otherColor
       * @return {fabric.Color} thisArg
       */
      overlayWith: function(t) {
        t instanceof h || (t = new h(t));
        var a = [], n = this.getAlpha(), c = 0.5, s = this.getSource(), i = t.getSource(), o;
        for (o = 0; o < 3; o++)
          a.push(Math.round(s[o] * (1 - c) + i[o] * c));
        return a[3] = n, this.setSource(a), this;
      }
    }, e.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, e.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, e.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, e.Color.colorNameMap = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgrey: "#A9A9A9",
      darkgreen: "#006400",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgrey: "#D3D3D3",
      lightgreen: "#90EE90",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32"
    };
    function r(t, a, n) {
      return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (a - t) * 6 * n : n < 1 / 2 ? a : n < 2 / 3 ? t + (a - t) * (2 / 3 - n) * 6 : t;
    }
    e.Color.fromRgb = function(t) {
      return h.fromSource(h.sourceFromRgb(t));
    }, e.Color.sourceFromRgb = function(t) {
      var a = t.match(h.reRGBa);
      if (a) {
        var n = parseInt(a[1], 10) / (/%$/.test(a[1]) ? 100 : 1) * (/%$/.test(a[1]) ? 255 : 1), c = parseInt(a[2], 10) / (/%$/.test(a[2]) ? 100 : 1) * (/%$/.test(a[2]) ? 255 : 1), s = parseInt(a[3], 10) / (/%$/.test(a[3]) ? 100 : 1) * (/%$/.test(a[3]) ? 255 : 1);
        return [
          parseInt(n, 10),
          parseInt(c, 10),
          parseInt(s, 10),
          a[4] ? parseFloat(a[4]) : 1
        ];
      }
    }, e.Color.fromRgba = h.fromRgb, e.Color.fromHsl = function(t) {
      return h.fromSource(h.sourceFromHsl(t));
    }, e.Color.sourceFromHsl = function(t) {
      var a = t.match(h.reHSLa);
      if (a) {
        var n = (parseFloat(a[1]) % 360 + 360) % 360 / 360, c = parseFloat(a[2]) / (/%$/.test(a[2]) ? 100 : 1), s = parseFloat(a[3]) / (/%$/.test(a[3]) ? 100 : 1), i, o, l;
        if (c === 0)
          i = o = l = s;
        else {
          var d = s <= 0.5 ? s * (c + 1) : s + c - s * c, g = s * 2 - d;
          i = r(g, d, n + 1 / 3), o = r(g, d, n), l = r(g, d, n - 1 / 3);
        }
        return [
          Math.round(i * 255),
          Math.round(o * 255),
          Math.round(l * 255),
          a[4] ? parseFloat(a[4]) : 1
        ];
      }
    }, e.Color.fromHsla = h.fromHsl, e.Color.fromHex = function(t) {
      return h.fromSource(h.sourceFromHex(t));
    }, e.Color.sourceFromHex = function(t) {
      if (t.match(h.reHex)) {
        var a = t.slice(t.indexOf("#") + 1), n = a.length === 3 || a.length === 4, c = a.length === 8 || a.length === 4, s = n ? a.charAt(0) + a.charAt(0) : a.substring(0, 2), i = n ? a.charAt(1) + a.charAt(1) : a.substring(2, 4), o = n ? a.charAt(2) + a.charAt(2) : a.substring(4, 6), l = c ? n ? a.charAt(3) + a.charAt(3) : a.substring(6, 8) : "FF";
        return [
          parseInt(s, 16),
          parseInt(i, 16),
          parseInt(o, 16),
          parseFloat((parseInt(l, 16) / 255).toFixed(2))
        ];
      }
    }, e.Color.fromSource = function(t) {
      var a = new h();
      return a.setSource(t), a;
    };
  }(m), function() {
    function f(a, n) {
      var c = a.getAttribute("style"), s = a.getAttribute("offset") || 0, i, o, l, d;
      if (s = parseFloat(s) / (/%$/.test(s) ? 100 : 1), s = s < 0 ? 0 : s > 1 ? 1 : s, c) {
        var g = c.split(/\s*;\s*/);
        for (g[g.length - 1] === "" && g.pop(), d = g.length; d--; ) {
          var v = g[d].split(/\s*:\s*/), _ = v[0].trim(), p = v[1].trim();
          _ === "stop-color" ? i = p : _ === "stop-opacity" && (l = p);
        }
      }
      return i || (i = a.getAttribute("stop-color") || "rgb(0,0,0)"), l || (l = a.getAttribute("stop-opacity")), i = new u.Color(i), o = i.getAlpha(), l = isNaN(parseFloat(l)) ? 1 : parseFloat(l), l *= o * n, {
        offset: s,
        color: i.toRgb(),
        opacity: l
      };
    }
    function e(a) {
      return {
        x1: a.getAttribute("x1") || 0,
        y1: a.getAttribute("y1") || 0,
        x2: a.getAttribute("x2") || "100%",
        y2: a.getAttribute("y2") || 0
      };
    }
    function h(a) {
      return {
        x1: a.getAttribute("fx") || a.getAttribute("cx") || "50%",
        y1: a.getAttribute("fy") || a.getAttribute("cy") || "50%",
        r1: 0,
        x2: a.getAttribute("cx") || "50%",
        y2: a.getAttribute("cy") || "50%",
        r2: a.getAttribute("r") || "50%"
      };
    }
    var r = u.util.object.clone;
    u.Gradient = u.util.createClass(
      /** @lends fabric.Gradient.prototype */
      {
        /**
         * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
        offsetX: 0,
        /**
         * Vertical offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
        offsetY: 0,
        /**
         * A transform matrix to apply to the gradient before painting.
         * Imported from svg gradients, is not applied with the current transform in the center.
         * Before this transform is applied, the origin point is at the top left corner of the object
         * plus the addition of offsetY and offsetX.
         * @type Number[]
         * @default null
         */
        gradientTransform: null,
        /**
         * coordinates units for coords.
         * If `pixels`, the number of coords are in the same unit of width / height.
         * If set as `percentage` the coords are still a number, but 1 means 100% of width
         * for the X and 100% of the height for the y. It can be bigger than 1 and negative.
         * allowed values pixels or percentage.
         * @type String
         * @default 'pixels'
         */
        gradientUnits: "pixels",
        /**
         * Gradient type linear or radial
         * @type String
         * @default 'pixels'
         */
        type: "linear",
        /**
         * Constructor
         * @param {Object} options Options object with type, coords, gradientUnits and colorStops
         * @param {Object} [options.type] gradient type linear or radial
         * @param {Object} [options.gradientUnits] gradient units
         * @param {Object} [options.offsetX] SVG import compatibility
         * @param {Object} [options.offsetY] SVG import compatibility
         * @param {Object[]} options.colorStops contains the colorstops.
         * @param {Object} options.coords contains the coords of the gradient
         * @param {Number} [options.coords.x1] X coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.y1] Y coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.x2] X coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.y2] Y coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.r1] only for radial gradient, radius of the inner circle
         * @param {Number} [options.coords.r2] only for radial gradient, radius of the external circle
         * @return {fabric.Gradient} thisArg
         */
        initialize: function(a) {
          a || (a = {}), a.coords || (a.coords = {});
          var n, c = this;
          Object.keys(a).forEach(function(s) {
            c[s] = a[s];
          }), this.id ? this.id += "_" + u.Object.__uid++ : this.id = u.Object.__uid++, n = {
            x1: a.coords.x1 || 0,
            y1: a.coords.y1 || 0,
            x2: a.coords.x2 || 0,
            y2: a.coords.y2 || 0
          }, this.type === "radial" && (n.r1 = a.coords.r1 || 0, n.r2 = a.coords.r2 || 0), this.coords = n, this.colorStops = a.colorStops.slice();
        },
        /**
         * Adds another colorStop
         * @param {Object} colorStop Object with offset and color
         * @return {fabric.Gradient} thisArg
         */
        addColorStop: function(a) {
          for (var n in a) {
            var c = new u.Color(a[n]);
            this.colorStops.push({
              offset: parseFloat(n),
              color: c.toRgb(),
              opacity: c.getAlpha()
            });
          }
          return this;
        },
        /**
         * Returns object representation of a gradient
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object}
         */
        toObject: function(a) {
          var n = {
            type: this.type,
            coords: this.coords,
            colorStops: this.colorStops,
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            gradientUnits: this.gradientUnits,
            gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
          };
          return u.util.populateWithProperties(this, n, a), n;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of an gradient
         * @param {Object} object Object to create a gradient for
         * @return {String} SVG representation of an gradient (linear/radial)
         */
        toSVG: function(a, o) {
          var c = r(this.coords, !0), s, i, o = o || {}, l, d, g = r(this.colorStops, !0), v = c.r1 > c.r2, _ = this.gradientTransform ? this.gradientTransform.concat() : u.iMatrix.concat(), p = -this.offsetX, C = -this.offsetY, S = !!o.additionalTransform, O = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
          if (g.sort(function(X, z) {
            return X.offset - z.offset;
          }), O === "objectBoundingBox" ? (p /= a.width, C /= a.height) : (p += a.width / 2, C += a.height / 2), a.type === "path" && (p -= a.pathOffset.x, C -= a.pathOffset.y), _[4] -= p, _[5] -= C, d = 'id="SVGID_' + this.id + '" gradientUnits="' + O + '"', d += ' gradientTransform="' + (S ? o.additionalTransform + " " : "") + u.util.matrixToSVG(_) + '" ', this.type === "linear" ? l = [
            "<linearGradient ",
            d,
            ' x1="',
            c.x1,
            '" y1="',
            c.y1,
            '" x2="',
            c.x2,
            '" y2="',
            c.y2,
            `">
`
          ] : this.type === "radial" && (l = [
            "<radialGradient ",
            d,
            ' cx="',
            v ? c.x1 : c.x2,
            '" cy="',
            v ? c.y1 : c.y2,
            '" r="',
            v ? c.r1 : c.r2,
            '" fx="',
            v ? c.x2 : c.x1,
            '" fy="',
            v ? c.y2 : c.y1,
            `">
`
          ]), this.type === "radial") {
            if (v)
              for (g = g.concat(), g.reverse(), s = 0, i = g.length; s < i; s++)
                g[s].offset = 1 - g[s].offset;
            var k = Math.min(c.r1, c.r2);
            if (k > 0) {
              var P = Math.max(c.r1, c.r2), F = k / P;
              for (s = 0, i = g.length; s < i; s++)
                g[s].offset += F * (1 - g[s].offset);
            }
          }
          for (s = 0, i = g.length; s < i; s++) {
            var E = g[s];
            l.push(
              "<stop ",
              'offset="',
              E.offset * 100 + "%",
              '" style="stop-color:',
              E.color,
              typeof E.opacity < "u" ? ";stop-opacity: " + E.opacity : ";",
              `"/>
`
            );
          }
          return l.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), l.join("");
        },
        /* _TO_SVG_END_ */
        /**
         * Returns an instance of CanvasGradient
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Object} object the fabric.Object for which the gradient is
         * @return {CanvasGradient}
         */
        toLive: function(a, n) {
          var c, s = u.util.object.clone(this.coords), i, o, l = s.x1, d = s.y1, g = s.x2, v = s.y2, _ = this.colorStops;
          if (this.type) {
            for (n instanceof u.Text && this.gradientUnits === "percentage" && (l *= n.width, d *= n.height, g *= n.width, v *= n.height), this.type === "linear" ? c = a.createLinearGradient(l, d, g, v) : this.type === "radial" && (c = a.createRadialGradient(l, d, s.r1, g, v, s.r2)), i = 0, o = _.length; i < o; i++) {
              var p = _[i].color, C = _[i].opacity, S = _[i].offset;
              typeof C < "u" && (p = new u.Color(p).setAlpha(C).toRgba()), c.addColorStop(S, p);
            }
            return c;
          }
        }
      }
    ), u.util.object.extend(u.Gradient, {
      /* _FROM_SVG_START_ */
      /**
       * Returns {@link fabric.Gradient} instance from an SVG element
       * @static
       * @memberOf fabric.Gradient
       * @param {SVGGradientElement} el SVG gradient element
       * @param {fabric.Object} instance
       * @param {String} opacityAttr A fill-opacity or stroke-opacity attribute to multiply to each stop's opacity.
       * @param {Object} svgOptions an object containing the size of the SVG in order to parse correctly graidents
       * that uses gradientUnits as 'userSpaceOnUse' and percentages.
       * @param {Object.number} viewBoxWidth width part of the viewBox attribute on svg
       * @param {Object.number} viewBoxHeight height part of the viewBox attribute on svg
       * @param {Object.number} width width part of the svg tag if viewBox is not specified
       * @param {Object.number} height height part of the svg tag if viewBox is not specified
       * @return {fabric.Gradient} Gradient instance
       * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
       * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
       */
      fromElement: function(a, n, c, s) {
        var i = parseFloat(c) / (/%$/.test(c) ? 100 : 1);
        i = i < 0 ? 0 : i > 1 ? 1 : i, isNaN(i) && (i = 1);
        var o = a.getElementsByTagName("stop"), l, d = a.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", g = a.getAttribute("gradientTransform") || "", v = [], _, p, C = 0, S = 0, O;
        for (a.nodeName === "linearGradient" || a.nodeName === "LINEARGRADIENT" ? (l = "linear", _ = e(a)) : (l = "radial", _ = h(a)), p = o.length; p--; )
          v.push(f(o[p], i));
        O = u.parseTransformAttribute(g), t(n, _, s, d), d === "pixels" && (C = -n.left, S = -n.top);
        var k = new u.Gradient({
          id: a.getAttribute("id"),
          type: l,
          coords: _,
          colorStops: v,
          gradientUnits: d,
          gradientTransform: O,
          offsetX: C,
          offsetY: S
        });
        return k;
      },
      /* _FROM_SVG_END_ */
      /**
       * Returns {@link fabric.Gradient} instance from its object representation
       * this function is uniquely used by Object.setGradient and is deprecated with it.
       * @static
       * @deprecated since 3.4.0
       * @memberOf fabric.Gradient
       * @param {Object} obj
       * @param {Object} [options] Options object
       */
      forObject: function(a, n) {
        return n || (n = {}), t(a, n.coords, n.gradientUnits, {
          // those values are to avoid errors. this function is uniquely used by
          viewBoxWidth: 100,
          viewBoxHeight: 100
        }), new u.Gradient(n);
      }
    });
    function t(a, n, c, s) {
      var i, o;
      Object.keys(n).forEach(function(l) {
        i = n[l], i === "Infinity" ? o = 1 : i === "-Infinity" ? o = 0 : (o = parseFloat(n[l], 10), typeof i == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(i) && (o *= 0.01, s === "pixels" && ((l === "x1" || l === "x2" || l === "r2") && (o *= c.viewBoxWidth || c.width), (l === "y1" || l === "y2") && (o *= c.viewBoxHeight || c.height)))), n[l] = o;
      });
    }
  }(), function() {
    var f = u.util.toFixed;
    u.Pattern = u.util.createClass(
      /** @lends fabric.Pattern.prototype */
      {
        /**
         * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
         * @type String
         * @default
         */
        repeat: "repeat",
        /**
         * Pattern horizontal offset from object's left/top corner
         * @type Number
         * @default
         */
        offsetX: 0,
        /**
         * Pattern vertical offset from object's left/top corner
         * @type Number
         * @default
         */
        offsetY: 0,
        /**
         * crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @type String
         * @default
         */
        crossOrigin: "",
        /**
         * transform matrix to change the pattern, imported from svgs.
         * @type Array
         * @default
         */
        patternTransform: null,
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @param {Function} [callback] function to invoke after callback init.
         * @return {fabric.Pattern} thisArg
         */
        initialize: function(e, h) {
          if (e || (e = {}), this.id = u.Object.__uid++, this.setOptions(e), !e.source || e.source && typeof e.source != "string") {
            h && h(this);
            return;
          }
          if (typeof u.util.getFunctionBody(e.source) < "u")
            this.source = new Function(u.util.getFunctionBody(e.source)), h && h(this);
          else {
            var r = this;
            this.source = u.util.createImage(), u.util.loadImage(e.source, function(t) {
              r.source = t, h && h(r);
            }, null, this.crossOrigin);
          }
        },
        /**
         * Returns object representation of a pattern
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of a pattern instance
         */
        toObject: function(e) {
          var h = u.Object.NUM_FRACTION_DIGITS, r, t;
          return typeof this.source == "function" ? r = String(this.source) : typeof this.source.src == "string" ? r = this.source.src : typeof this.source == "object" && this.source.toDataURL && (r = this.source.toDataURL()), t = {
            type: "pattern",
            source: r,
            repeat: this.repeat,
            crossOrigin: this.crossOrigin,
            offsetX: f(this.offsetX, h),
            offsetY: f(this.offsetY, h),
            patternTransform: this.patternTransform ? this.patternTransform.concat() : null
          }, u.util.populateWithProperties(this, t, e), t;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of a pattern
         * @param {fabric.Object} object
         * @return {String} SVG representation of a pattern
         */
        toSVG: function(e) {
          var h = typeof this.source == "function" ? this.source() : this.source, r = h.width / e.width, t = h.height / e.height, a = this.offsetX / e.width, n = this.offsetY / e.height, c = "";
          return (this.repeat === "repeat-x" || this.repeat === "no-repeat") && (t = 1, n && (t += Math.abs(n))), (this.repeat === "repeat-y" || this.repeat === "no-repeat") && (r = 1, a && (r += Math.abs(a))), h.src ? c = h.src : h.toDataURL && (c = h.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + a + '" y="' + n + '" width="' + r + '" height="' + t + `">
<image x="0" y="0" width="` + h.width + '" height="' + h.height + '" xlink:href="' + c + `"></image>
</pattern>
`;
        },
        /* _TO_SVG_END_ */
        setOptions: function(e) {
          for (var h in e)
            this[h] = e[h];
        },
        /**
         * Returns an instance of CanvasPattern
         * @param {CanvasRenderingContext2D} ctx Context to create pattern
         * @return {CanvasPattern}
         */
        toLive: function(e) {
          var h = typeof this.source == "function" ? this.source() : this.source;
          return !h || typeof h.src < "u" && (!h.complete || h.naturalWidth === 0 || h.naturalHeight === 0) ? "" : e.createPattern(h, this.repeat);
        }
      }
    );
  }(), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.toFixed;
    if (e.Shadow) {
      e.warn("fabric.Shadow is already defined.");
      return;
    }
    e.Shadow = e.util.createClass(
      /** @lends fabric.Shadow.prototype */
      {
        /**
         * Shadow color
         * @type String
         * @default
         */
        color: "rgb(0,0,0)",
        /**
         * Shadow blur
         * @type Number
         */
        blur: 0,
        /**
         * Shadow horizontal offset
         * @type Number
         * @default
         */
        offsetX: 0,
        /**
         * Shadow vertical offset
         * @type Number
         * @default
         */
        offsetY: 0,
        /**
         * Whether the shadow should affect stroke operations
         * @type Boolean
         * @default
         */
        affectStroke: !1,
        /**
         * Indicates whether toObject should include default values
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * When `false`, the shadow will scale with the object.
         * When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
         * default to false
         * @type Boolean
         * @default
         */
        nonScaling: !1,
        /**
         * Constructor
         * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")
         * @return {fabric.Shadow} thisArg
         */
        initialize: function(r) {
          typeof r == "string" && (r = this._parseShadow(r));
          for (var t in r)
            this[t] = r[t];
          this.id = e.Object.__uid++;
        },
        /**
         * @private
         * @param {String} shadow Shadow value to parse
         * @return {Object} Shadow object with color, offsetX, offsetY and blur
         */
        _parseShadow: function(r) {
          var t = r.trim(), a = e.Shadow.reOffsetsAndBlur.exec(t) || [], n = t.replace(e.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
          return {
            color: n.trim(),
            offsetX: parseInt(a[1], 10) || 0,
            offsetY: parseInt(a[2], 10) || 0,
            blur: parseInt(a[3], 10) || 0
          };
        },
        /**
         * Returns a string representation of an instance
         * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
         * @return {String} Returns CSS3 text-shadow declaration
         */
        toString: function() {
          return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of a shadow
         * @param {fabric.Object} object
         * @return {String} SVG representation of a shadow
         */
        toSVG: function(r) {
          var t = 40, a = 40, n = e.Object.NUM_FRACTION_DIGITS, c = e.util.rotateVector(
            { x: this.offsetX, y: this.offsetY },
            e.util.degreesToRadians(-r.angle)
          ), s = 20, i = new e.Color(this.color);
          return r.width && r.height && (t = h((Math.abs(c.x) + this.blur) / r.width, n) * 100 + s, a = h((Math.abs(c.y) + this.blur) / r.height, n) * 100 + s), r.flipX && (c.x *= -1), r.flipY && (c.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + a + '%" height="' + (100 + 2 * a) + '%" x="-' + t + '%" width="' + (100 + 2 * t) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + h(this.blur ? this.blur / 2 : 0, n) + `"></feGaussianBlur>
	<feOffset dx="` + h(c.x, n) + '" dy="' + h(c.y, n) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + i.toRgb() + '" flood-opacity="' + i.getAlpha() + `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
        },
        /* _TO_SVG_END_ */
        /**
         * Returns object representation of a shadow
         * @return {Object} Object representation of a shadow instance
         */
        toObject: function() {
          if (this.includeDefaultValues)
            return {
              color: this.color,
              blur: this.blur,
              offsetX: this.offsetX,
              offsetY: this.offsetY,
              affectStroke: this.affectStroke,
              nonScaling: this.nonScaling
            };
          var r = {}, t = e.Shadow.prototype;
          return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function(a) {
            this[a] !== t[a] && (r[a] = this[a]);
          }, this), r;
        }
      }
    ), e.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/;
  }(m), function() {
    if (u.StaticCanvas) {
      u.warn("fabric.StaticCanvas is already defined.");
      return;
    }
    var f = u.util.object.extend, e = u.util.getElementOffset, h = u.util.removeFromArray, r = u.util.toFixed, t = u.util.transformPoint, a = u.util.invertTransform, n = u.util.getNodeCanvas, c = u.util.createCanvasElement, s = new Error("Could not initialize `canvas` element");
    u.StaticCanvas = u.util.createClass(
      u.CommonMethods,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(i, o) {
          o || (o = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(i, o);
        },
        /**
         * Background color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
         * @type {(String|fabric.Pattern)}
         * @default
         */
        backgroundColor: "",
        /**
         * Background image of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setBackgroundImage}.
         * <b>Backwards incompatibility note:</b> The "backgroundImageOpacity"
         * and "backgroundImageStretch" properties are deprecated since 1.3.9.
         * Use {@link fabric.Image#opacity}, {@link fabric.Image#width} and {@link fabric.Image#height}.
         * since 2.4.0 image caching is active, please when putting an image as background, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
        backgroundImage: null,
        /**
         * Overlay color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
         * @since 1.3.9
         * @type {(String|fabric.Pattern)}
         * @default
         */
        overlayColor: "",
        /**
         * Overlay image of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setOverlayImage}.
         * <b>Backwards incompatibility note:</b> The "overlayImageLeft"
         * and "overlayImageTop" properties are deprecated since 1.3.9.
         * Use {@link fabric.Image#left} and {@link fabric.Image#top}.
         * since 2.4.0 image caching is active, please when putting an image as overlay, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
        overlayImage: null,
        /**
         * Indicates whether toObject/toDatalessObject should include default values
         * if set to false, takes precedence over the object value.
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * Indicates whether objects' state should be saved
         * @type Boolean
         * @default
         */
        stateful: !1,
        /**
         * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove},
         * {@link fabric.StaticCanvas.moveTo}, {@link fabric.StaticCanvas.clear} and many more, should also re-render canvas.
         * Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
         * since the renders are quequed and executed one per frame.
         * Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
         * Left default to true to do not break documentation and old app, fiddles.
         * @type Boolean
         * @default
         */
        renderOnAddRemove: !0,
        /**
         * Function that determines clipping of entire canvas area
         * Being passed context as first argument.
         * If you are using code minification, ctx argument can be minified/manglied you should use
         * as a workaround `var ctx = arguments[0];` in the function;
         * See clipping canvas area in {@link https://github.com/kangax/fabric.js/wiki/FAQ}
         * @deprecated since 2.0.0
         * @type Function
         * @default
         */
        clipTo: null,
        /**
         * Indicates whether object controls (borders/controls) are rendered above overlay image
         * @type Boolean
         * @default
         */
        controlsAboveOverlay: !1,
        /**
         * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
         * @type Boolean
         * @default
         */
        allowTouchScrolling: !1,
        /**
         * Indicates whether this canvas will use image smoothing, this is on by default in browsers
         * @type Boolean
         * @default
         */
        imageSmoothingEnabled: !0,
        /**
         * The transformation (in the format of Canvas transform) which focuses the viewport
         * @type Array
         * @default
         */
        viewportTransform: u.iMatrix.concat(),
        /**
         * if set to false background image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        backgroundVpt: !0,
        /**
         * if set to false overlya image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        overlayVpt: !0,
        /**
         * Callback; invoked right before object is about to be scaled/rotated
         * @deprecated since 2.3.0
         * Use before:transform event
         */
        onBeforeScaleRotate: function() {
        },
        /**
         * When true, canvas is scaled by devicePixelRatio for better rendering on retina screens
         * @type Boolean
         * @default
         */
        enableRetinaScaling: !0,
        /**
         * Describe canvas element extension over design
         * properties are tl,tr,bl,br.
         * if canvas is not zoomed/panned those points are the four corner of canvas
         * if canvas is viewportTransformed you those points indicate the extension
         * of canvas element in plain untrasformed coordinates
         * The coordinates get updated with @method calcViewportBoundaries.
         * @memberOf fabric.StaticCanvas.prototype
         */
        vptCoords: {},
        /**
         * Based on vptCoords and object.aCoords, skip rendering of objects that
         * are not included in current viewport.
         * May greatly help in applications with crowded canvas and use of zoom/pan
         * If One of the corner of the bounding box of the object is on the canvas
         * the objects get rendered.
         * @memberOf fabric.StaticCanvas.prototype
         * @type Boolean
         * @default
         */
        skipOffscreen: !0,
        /**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the canvas has rendered, and the context is placed in the
         * top left corner of the canvas.
         * clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true
         * @type fabric.Object
         */
        clipPath: void 0,
        /**
         * @private
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         */
        _initStatic: function(i, o) {
          var l = this.requestRenderAllBound;
          this._objects = [], this._createLowerCanvas(i), this._initOptions(o), this._setImageSmoothing(), this.interactive || this._initRetinaScaling(), o.overlayImage && this.setOverlayImage(o.overlayImage, l), o.backgroundImage && this.setBackgroundImage(o.backgroundImage, l), o.backgroundColor && this.setBackgroundColor(o.backgroundColor, l), o.overlayColor && this.setOverlayColor(o.overlayColor, l), this.calcOffset();
        },
        /**
         * @private
         */
        _isRetinaScaling: function() {
          return u.devicePixelRatio !== 1 && this.enableRetinaScaling;
        },
        /**
         * @private
         * @return {Number} retinaScaling if applied, otherwise 1;
         */
        getRetinaScaling: function() {
          return this._isRetinaScaling() ? u.devicePixelRatio : 1;
        },
        /**
         * @private
         */
        _initRetinaScaling: function() {
          if (this._isRetinaScaling()) {
            var i = u.devicePixelRatio;
            this.__initRetinaScaling(i, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(i, this.upperCanvasEl, this.contextTop);
          }
        },
        __initRetinaScaling: function(i, o, l) {
          o.setAttribute("width", this.width * i), o.setAttribute("height", this.height * i), l.scale(i, i);
        },
        /**
         * Calculates canvas element offset relative to the document
         * This method is also attached as "resize" event handler of window
         * @return {fabric.Canvas} instance
         * @chainable
         */
        calcOffset: function() {
          return this._offset = e(this.lowerCanvasEl), this;
        },
        /**
         * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
         * @param {Function} callback callback to invoke when image is loaded and set as an overlay
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
         * @example <caption>Normal overlayImage with left/top = 0</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage with different properties</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage loaded from cross-origin</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
        setOverlayImage: function(i, o, l) {
          return this.__setBgOverlayImage("overlayImage", i, o, l);
        },
        /**
         * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
         * @param {Function} callback Callback to invoke when image is loaded and set as background
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/djnr8o7a/28/|jsFiddle demo}
         * @example <caption>Normal backgroundImage with left/top = 0</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage with different properties</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage loaded from cross-origin</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
        // TODO: fix stretched examples
        setBackgroundImage: function(i, o, l) {
          return this.__setBgOverlayImage("backgroundImage", i, o, l);
        },
        /**
         * Sets {@link fabric.StaticCanvas#overlayColor|foreground color} for this canvas
         * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set foreground color to
         * @param {Function} callback Callback to invoke when foreground color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
         * @example <caption>Normal overlayColor - color value</caption>
         * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
        setOverlayColor: function(i, o) {
          return this.__setBgOverlayColor("overlayColor", i, o);
        },
        /**
         * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
         * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
         * @param {Function} callback Callback to invoke when background color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
         * @example <caption>Normal backgroundColor - color value</caption>
         * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
        setBackgroundColor: function(i, o) {
          return this.__setBgOverlayColor("backgroundColor", i, o);
        },
        /**
         * @private
         * @see {@link http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-imagesmoothingenabled|WhatWG Canvas Standard}
         */
        _setImageSmoothing: function() {
          var i = this.getContext();
          i.imageSmoothingEnabled = i.imageSmoothingEnabled || i.webkitImageSmoothingEnabled || i.mozImageSmoothingEnabled || i.msImageSmoothingEnabled || i.oImageSmoothingEnabled, i.imageSmoothingEnabled = this.imageSmoothingEnabled;
        },
        /**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
         * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
         * @param {(fabric.Image|String|null)} image fabric.Image instance, URL of an image or null to set background or overlay to
         * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
         */
        __setBgOverlayImage: function(i, o, l, d) {
          return typeof o == "string" ? u.util.loadImage(o, function(g) {
            if (g) {
              var v = new u.Image(g, d);
              this[i] = v, v.canvas = this;
            }
            l && l(g);
          }, this, d && d.crossOrigin) : (d && o.setOptions(d), this[i] = o, o && (o.canvas = this), l && l(o)), this;
        },
        /**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
         * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
         * @param {(Object|String|null)} color Object with pattern information, color value or null
         * @param {Function} [callback] Callback is invoked when color is set
         */
        __setBgOverlayColor: function(i, o, l) {
          return this[i] = o, this._initGradient(o, i), this._initPattern(o, i, l), this;
        },
        /**
         * @private
         */
        _createCanvasElement: function() {
          var i = c();
          if (!i || (i.style || (i.style = {}), typeof i.getContext > "u"))
            throw s;
          return i;
        },
        /**
         * @private
         * @param {Object} [options] Options object
         */
        _initOptions: function(i) {
          var o = this.lowerCanvasEl;
          this._setOptions(i), this.width = this.width || parseInt(o.width, 10) || 0, this.height = this.height || parseInt(o.height, 10) || 0, this.lowerCanvasEl.style && (o.width = this.width, o.height = this.height, o.style.width = this.width + "px", o.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
        },
        /**
         * Creates a bottom canvas
         * @private
         * @param {HTMLElement} [canvasEl]
         */
        _createLowerCanvas: function(i) {
          i && i.getContext ? this.lowerCanvasEl = i : this.lowerCanvasEl = u.util.getById(i) || this._createCanvasElement(), u.util.addClass(this.lowerCanvasEl, "lower-canvas"), this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
        },
        /**
         * Returns canvas width (in px)
         * @return {Number}
         */
        getWidth: function() {
          return this.width;
        },
        /**
         * Returns canvas height (in px)
         * @return {Number}
         */
        getHeight: function() {
          return this.height;
        },
        /**
         * Sets width of this canvas instance
         * @param {Number|String} value                         Value to set width to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setWidth: function(i, o) {
          return this.setDimensions({ width: i }, o);
        },
        /**
         * Sets height of this canvas instance
         * @param {Number|String} value                         Value to set height to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setHeight: function(i, o) {
          return this.setDimensions({ height: i }, o);
        },
        /**
         * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
         * @param {Object}        dimensions                    Object with width/height properties
         * @param {Number|String} [dimensions.width]            Width of canvas element
         * @param {Number|String} [dimensions.height]           Height of canvas element
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        setDimensions: function(i, o) {
          var l;
          o = o || {};
          for (var d in i)
            l = i[d], o.cssOnly || (this._setBackstoreDimension(d, i[d]), l += "px", this.hasLostContext = !0), o.backstoreOnly || this._setCssDimension(d, l);
          return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(), this._initRetinaScaling(), this._setImageSmoothing(), this.calcOffset(), o.cssOnly || this.requestRenderAll(), this;
        },
        /**
         * Helper for setting width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {Number} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        _setBackstoreDimension: function(i, o) {
          return this.lowerCanvasEl[i] = o, this.upperCanvasEl && (this.upperCanvasEl[i] = o), this.cacheCanvasEl && (this.cacheCanvasEl[i] = o), this[i] = o, this;
        },
        /**
         * Helper for setting css width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {String} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        _setCssDimension: function(i, o) {
          return this.lowerCanvasEl.style[i] = o, this.upperCanvasEl && (this.upperCanvasEl.style[i] = o), this.wrapperEl && (this.wrapperEl.style[i] = o), this;
        },
        /**
         * Returns canvas zoom level
         * @return {Number}
         */
        getZoom: function() {
          return this.viewportTransform[0];
        },
        /**
         * Sets viewport transform of this canvas instance
         * @param {Array} vpt the transform in the form of context.transform
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setViewportTransform: function(i) {
          var o = this._activeObject, l, d = !1, g = !0, v, _;
          for (this.viewportTransform = i, v = 0, _ = this._objects.length; v < _; v++)
            l = this._objects[v], l.group || l.setCoords(d, g);
          return o && o.type === "activeSelection" && o.setCoords(d, g), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Sets zoom level of this canvas instance, zoom centered around point
         * @param {fabric.Point} point to zoom with respect to
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        zoomToPoint: function(i, o) {
          var l = i, d = this.viewportTransform.slice(0);
          i = t(i, a(this.viewportTransform)), d[0] = o, d[3] = o;
          var g = t(i, d);
          return d[4] += l.x - g.x, d[5] += l.y - g.y, this.setViewportTransform(d);
        },
        /**
         * Sets zoom level of this canvas instance
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setZoom: function(i) {
          return this.zoomToPoint(new u.Point(0, 0), i), this;
        },
        /**
         * Pan viewport so as to place point at top left corner of canvas
         * @param {fabric.Point} point to move to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        absolutePan: function(i) {
          var o = this.viewportTransform.slice(0);
          return o[4] = -i.x, o[5] = -i.y, this.setViewportTransform(o);
        },
        /**
         * Pans viewpoint relatively
         * @param {fabric.Point} point (position vector) to move by
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        relativePan: function(i) {
          return this.absolutePan(new u.Point(
            -i.x - this.viewportTransform[4],
            -i.y - this.viewportTransform[5]
          ));
        },
        /**
         * Returns &lt;canvas> element corresponding to this instance
         * @return {HTMLCanvasElement}
         */
        getElement: function() {
          return this.lowerCanvasEl;
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was added
         */
        _onObjectAdded: function(i) {
          this.stateful && i.setupState(), i._set("canvas", this), i.setCoords(), this.fire("object:added", { target: i }), i.fire("added");
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
        _onObjectRemoved: function(i) {
          this.fire("object:removed", { target: i }), i.fire("removed"), delete i.canvas;
        },
        /**
         * Clears specified context of canvas element
         * @param {CanvasRenderingContext2D} ctx Context to clear
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clearContext: function(i) {
          return i.clearRect(0, 0, this.width, this.height), this;
        },
        /**
         * Returns context of canvas where objects are drawn
         * @return {CanvasRenderingContext2D}
         */
        getContext: function() {
          return this.contextContainer;
        },
        /**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clear: function() {
          return this._objects.length = 0, this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Renders the canvas
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAll: function() {
          var i = this.contextContainer;
          return this.renderCanvas(i, this._objects), this;
        },
        /**
         * Function created to be instance bound at initialization
         * used in requestAnimationFrame rendering
         * Let the fabricJS call it. If you call it manually you could have more
         * animationFrame stacking on to of each other
         * for an imperative rendering, use canvas.renderAll
         * @private
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAndReset: function() {
          this.isRendering = 0, this.renderAll();
        },
        /**
         * Append a renderAll request to next animation frame.
         * unless one is already in progress, in that case nothing is done
         * a boolean flag will avoid appending more.
         * @return {fabric.Canvas} instance
         * @chainable
         */
        requestRenderAll: function() {
          return this.isRendering || (this.isRendering = u.util.requestAnimFrame(this.renderAndResetBound)), this;
        },
        /**
         * Calculate the position of the 4 corner of canvas with current viewportTransform.
         * helps to determinate when an object is in the current rendering viewport using
         * object absolute coordinates ( aCoords )
         * @return {Object} points.tl
         * @chainable
         */
        calcViewportBoundaries: function() {
          var i = {}, o = this.width, l = this.height, d = a(this.viewportTransform);
          return i.tl = t({ x: 0, y: 0 }, d), i.br = t({ x: o, y: l }, d), i.tr = new u.Point(i.br.x, i.tl.y), i.bl = new u.Point(i.tl.x, i.br.y), this.vptCoords = i, i;
        },
        cancelRequestedRender: function() {
          this.isRendering && (u.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
        },
        /**
         * Renders background, objects, overlay and controls.
         * @param {CanvasRenderingContext2D} ctx
         * @param {Array} objects to render
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderCanvas: function(i, o) {
          var l = this.viewportTransform, d = this.clipPath;
          this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(i), this.fire("before:render", { ctx: i }), this.clipTo && u.util.clipContext(this, i), this._renderBackground(i), i.save(), i.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._renderObjects(i, o), i.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(i), this.clipTo && i.restore(), d && (d.canvas = this, d.shouldCache(), d._transformDone = !0, d.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(i)), this._renderOverlay(i), this.controlsAboveOverlay && this.interactive && this.drawControls(i), this.fire("after:render", { ctx: i });
        },
        /**
         * Paint the cached clipPath on the lowerCanvasEl
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawClipPathOnCanvas: function(i) {
          var o = this.viewportTransform, l = this.clipPath;
          i.save(), i.transform(o[0], o[1], o[2], o[3], o[4], o[5]), i.globalCompositeOperation = "destination-in", l.transform(i), i.scale(1 / l.zoomX, 1 / l.zoomY), i.drawImage(l._cacheCanvas, -l.cacheTranslationX, -l.cacheTranslationY), i.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} objects to render
         */
        _renderObjects: function(i, o) {
          var l, d;
          for (l = 0, d = o.length; l < d; ++l)
            o[l] && o[l].render(i);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {string} property 'background' or 'overlay'
         */
        _renderBackgroundOrOverlay: function(i, o) {
          var l = this[o + "Color"], d = this[o + "Image"], g = this.viewportTransform, v = this[o + "Vpt"];
          if (!(!l && !d)) {
            if (l) {
              i.save(), i.beginPath(), i.moveTo(0, 0), i.lineTo(this.width, 0), i.lineTo(this.width, this.height), i.lineTo(0, this.height), i.closePath(), i.fillStyle = l.toLive ? l.toLive(i, this) : l, v && i.transform(g[0], g[1], g[2], g[3], g[4], g[5]), i.transform(1, 0, 0, 1, l.offsetX || 0, l.offsetY || 0);
              var _ = l.gradientTransform || l.patternTransform;
              _ && i.transform(_[0], _[1], _[2], _[3], _[4], _[5]), i.fill(), i.restore();
            }
            d && (i.save(), v && i.transform(g[0], g[1], g[2], g[3], g[4], g[5]), d.render(i), i.restore());
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderBackground: function(i) {
          this._renderBackgroundOrOverlay(i, "background");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderOverlay: function(i) {
          this._renderBackgroundOrOverlay(i, "overlay");
        },
        /**
         * Returns coordinates of a center of canvas.
         * Returned value is an object with top and left properties
         * @return {Object} object with "top" and "left" number values
         */
        getCenter: function() {
          return {
            top: this.height / 2,
            left: this.width / 2
          };
        },
        /**
         * Centers object horizontally in the canvas
         * @param {fabric.Object} object Object to center horizontally
         * @return {fabric.Canvas} thisArg
         */
        centerObjectH: function(i) {
          return this._centerObject(i, new u.Point(this.getCenter().left, i.getCenterPoint().y));
        },
        /**
         * Centers object vertically in the canvas
         * @param {fabric.Object} object Object to center vertically
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        centerObjectV: function(i) {
          return this._centerObject(i, new u.Point(i.getCenterPoint().x, this.getCenter().top));
        },
        /**
         * Centers object vertically and horizontally in the canvas
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        centerObject: function(i) {
          var o = this.getCenter();
          return this._centerObject(i, new u.Point(o.left, o.top));
        },
        /**
         * Centers object vertically and horizontally in the viewport
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObject: function(i) {
          var o = this.getVpCenter();
          return this._centerObject(i, o);
        },
        /**
         * Centers object horizontally in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObjectH: function(i) {
          var o = this.getVpCenter();
          return this._centerObject(i, new u.Point(o.x, i.getCenterPoint().y)), this;
        },
        /**
         * Centers object Vertically in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObjectV: function(i) {
          var o = this.getVpCenter();
          return this._centerObject(i, new u.Point(i.getCenterPoint().x, o.y));
        },
        /**
         * Calculate the point in canvas that correspond to the center of actual viewport.
         * @return {fabric.Point} vpCenter, viewport center
         * @chainable
         */
        getVpCenter: function() {
          var i = this.getCenter(), o = a(this.viewportTransform);
          return t({ x: i.left, y: i.top }, o);
        },
        /**
         * @private
         * @param {fabric.Object} object Object to center
         * @param {fabric.Point} center Center point
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        _centerObject: function(i, o) {
          return i.setPositionByOrigin(o, "center", "center"), i.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Returs dataless JSON representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {String} json string
         */
        toDatalessJSON: function(i) {
          return this.toDatalessObject(i);
        },
        /**
         * Returns object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(i) {
          return this._toObjectMethod("toObject", i);
        },
        /**
         * Returns dataless object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(i) {
          return this._toObjectMethod("toDatalessObject", i);
        },
        /**
         * @private
         */
        _toObjectMethod: function(i, o) {
          var l = this.clipPath, d = {
            version: u.version,
            objects: this._toObjects(i, o)
          };
          return l && (d.clipPath = this._toObject(this.clipPath, i, o)), f(d, this.__serializeBgOverlay(i, o)), u.util.populateWithProperties(this, d, o), d;
        },
        /**
         * @private
         */
        _toObjects: function(i, o) {
          return this._objects.filter(function(l) {
            return !l.excludeFromExport;
          }).map(function(l) {
            return this._toObject(l, i, o);
          }, this);
        },
        /**
         * @private
         */
        _toObject: function(i, o, l) {
          var d;
          this.includeDefaultValues || (d = i.includeDefaultValues, i.includeDefaultValues = !1);
          var g = i[o](l);
          return this.includeDefaultValues || (i.includeDefaultValues = d), g;
        },
        /**
         * @private
         */
        __serializeBgOverlay: function(i, o) {
          var l = {}, d = this.backgroundImage, g = this.overlayImage;
          return this.backgroundColor && (l.background = this.backgroundColor.toObject ? this.backgroundColor.toObject(o) : this.backgroundColor), this.overlayColor && (l.overlay = this.overlayColor.toObject ? this.overlayColor.toObject(o) : this.overlayColor), d && !d.excludeFromExport && (l.backgroundImage = this._toObject(d, i, o)), g && !g.excludeFromExport && (l.overlayImage = this._toObject(g, i, o)), l;
        },
        /* _TO_SVG_START_ */
        /**
         * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
         * a zoomed canvas will then produce zoomed SVG output.
         * @type Boolean
         * @default
         */
        svgViewportTransformation: !0,
        /**
         * Returns SVG representation of canvas
         * @function
         * @param {Object} [options] Options object for SVG output
         * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
         * @param {Object} [options.viewBox] SVG viewbox object
         * @param {Number} [options.viewBox.x] x-cooridnate of viewbox
         * @param {Number} [options.viewBox.y] y-coordinate of viewbox
         * @param {Number} [options.viewBox.width] Width of viewbox
         * @param {Number} [options.viewBox.height] Height of viewbox
         * @param {String} [options.encoding=UTF-8] Encoding of SVG output
         * @param {String} [options.width] desired width of svg with or without units
         * @param {String} [options.height] desired height of svg with or without units
         * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
         * @return {String} SVG string
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#serialization}
         * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
         * @example <caption>Normal SVG output</caption>
         * var svg = canvas.toSVG();
         * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
         * var svg = canvas.toSVG({suppressPreamble: true});
         * @example <caption>SVG output with viewBox attribute</caption>
         * var svg = canvas.toSVG({
         *   viewBox: {
         *     x: 100,
         *     y: 100,
         *     width: 200,
         *     height: 300
         *   }
         * });
         * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
         * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
         * @example <caption>Modify SVG output with reviver function</caption>
         * var svg = canvas.toSVG(null, function(svg) {
         *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
         * });
         */
        toSVG: function(i, o) {
          i || (i = {}), i.reviver = o;
          var l = [];
          return this._setSVGPreamble(l, i), this._setSVGHeader(l, i), this.clipPath && l.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(l, "background"), this._setSVGBgOverlayImage(l, "backgroundImage", o), this._setSVGObjects(l, o), this.clipPath && l.push(`</g>
`), this._setSVGBgOverlayColor(l, "overlay"), this._setSVGBgOverlayImage(l, "overlayImage", o), l.push("</svg>"), l.join("");
        },
        /**
         * @private
         */
        _setSVGPreamble: function(i, o) {
          o.suppressPreamble || i.push(
            '<?xml version="1.0" encoding="',
            o.encoding || "UTF-8",
            `" standalone="no" ?>
`,
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
            `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`
          );
        },
        /**
         * @private
         */
        _setSVGHeader: function(i, o) {
          var l = o.width || this.width, d = o.height || this.height, g, v = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', _ = u.Object.NUM_FRACTION_DIGITS;
          o.viewBox ? v = 'viewBox="' + o.viewBox.x + " " + o.viewBox.y + " " + o.viewBox.width + " " + o.viewBox.height + '" ' : this.svgViewportTransformation && (g = this.viewportTransform, v = 'viewBox="' + r(-g[4] / g[0], _) + " " + r(-g[5] / g[3], _) + " " + r(this.width / g[0], _) + " " + r(this.height / g[3], _) + '" '), i.push(
            "<svg ",
            'xmlns="http://www.w3.org/2000/svg" ',
            'xmlns:xlink="http://www.w3.org/1999/xlink" ',
            'version="1.1" ',
            'width="',
            l,
            '" ',
            'height="',
            d,
            '" ',
            v,
            `xml:space="preserve">
`,
            "<desc>Created with Fabric.js ",
            u.version,
            `</desc>
`,
            `<defs>
`,
            this.createSVGFontFacesMarkup(),
            this.createSVGRefElementsMarkup(),
            this.createSVGClipPathMarkup(o),
            `</defs>
`
          );
        },
        createSVGClipPathMarkup: function(i) {
          var o = this.clipPath;
          return o ? (o.clipPathId = "CLIPPATH_" + u.Object.__uid++, '<clipPath id="' + o.clipPathId + `" >
` + this.clipPath.toClipPathSVG(i.reviver) + `</clipPath>
`) : "";
        },
        /**
         * Creates markup containing SVG referenced elements like patterns, gradients etc.
         * @return {String}
         */
        createSVGRefElementsMarkup: function() {
          var i = this, o = ["background", "overlay"].map(function(l) {
            var d = i[l + "Color"];
            if (d && d.toLive) {
              var g = i[l + "Vpt"], v = i.viewportTransform, _ = {
                width: i.width / (g ? v[0] : 1),
                height: i.height / (g ? v[3] : 1)
              };
              return d.toSVG(
                _,
                { additionalTransform: g ? u.util.matrixToSVG(v) : "" }
              );
            }
          });
          return o.join("");
        },
        /**
         * Creates markup containing SVG font faces,
         * font URLs for font faces must be collected by developers
         * and are not extracted from the DOM by fabricjs
         * @param {Array} objects Array of fabric objects
         * @return {String}
         */
        createSVGFontFacesMarkup: function() {
          var i = "", o = {}, l, d, g, v, _, p, C, S, O, k = u.fontPaths, P = [];
          for (this._objects.forEach(function E(X) {
            P.push(X), X._objects && X._objects.forEach(E);
          }), S = 0, O = P.length; S < O; S++)
            if (l = P[S], d = l.fontFamily, !(l.type.indexOf("text") === -1 || o[d] || !k[d]) && (o[d] = !0, !!l.styles)) {
              g = l.styles;
              for (_ in g) {
                v = g[_];
                for (C in v)
                  p = v[C], d = p.fontFamily, !o[d] && k[d] && (o[d] = !0);
              }
            }
          for (var F in o)
            i += [
              `		@font-face {
`,
              "			font-family: '",
              F,
              `';
`,
              "			src: url('",
              k[F],
              `');
`,
              `		}
`
            ].join("");
          return i && (i = [
            '	<style type="text/css">',
            `<![CDATA[
`,
            i,
            "]]>",
            `</style>
`
          ].join("")), i;
        },
        /**
         * @private
         */
        _setSVGObjects: function(i, o) {
          var l, d, g, v = this._objects;
          for (d = 0, g = v.length; d < g; d++)
            l = v[d], !l.excludeFromExport && this._setSVGObject(i, l, o);
        },
        /**
         * @private
         */
        _setSVGObject: function(i, o, l) {
          i.push(o.toSVG(l));
        },
        /**
         * @private
         */
        _setSVGBgOverlayImage: function(i, o, l) {
          this[o] && !this[o].excludeFromExport && this[o].toSVG && i.push(this[o].toSVG(l));
        },
        /**
         * @private
         */
        _setSVGBgOverlayColor: function(i, o) {
          var l = this[o + "Color"], d = this.viewportTransform, g = this.width, v = this.height;
          if (l)
            if (l.toLive) {
              var _ = l.repeat, p = u.util.invertTransform(d), C = this[o + "Vpt"], S = C ? u.util.matrixToSVG(p) : "";
              i.push(
                '<rect transform="' + S + " translate(",
                g / 2,
                ",",
                v / 2,
                ')"',
                ' x="',
                l.offsetX - g / 2,
                '" y="',
                l.offsetY - v / 2,
                '" ',
                'width="',
                _ === "repeat-y" || _ === "no-repeat" ? l.source.width : g,
                '" height="',
                _ === "repeat-x" || _ === "no-repeat" ? l.source.height : v,
                '" fill="url(#SVGID_' + l.id + ')"',
                `></rect>
`
              );
            } else
              i.push(
                '<rect x="0" y="0" width="100%" height="100%" ',
                'fill="',
                l,
                '"',
                `></rect>
`
              );
        },
        /* _TO_SVG_END_ */
        /**
         * Moves an object or the objects of a multiple selection
         * to the bottom of the stack of drawn objects
         * @param {fabric.Object} object Object to send to back
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        sendToBack: function(i) {
          if (!i)
            return this;
          var o = this._activeObject, l, d, g;
          if (i === o && i.type === "activeSelection")
            for (g = o._objects, l = g.length; l--; )
              d = g[l], h(this._objects, d), this._objects.unshift(d);
          else
            h(this._objects, i), this._objects.unshift(i);
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Moves an object or the objects of a multiple selection
         * to the top of the stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        bringToFront: function(i) {
          if (!i)
            return this;
          var o = this._activeObject, l, d, g;
          if (i === o && i.type === "activeSelection")
            for (g = o._objects, l = 0; l < g.length; l++)
              d = g[l], h(this._objects, d), this._objects.push(d);
          else
            h(this._objects, i), this._objects.push(i);
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Moves an object or a selection down in stack of drawn objects
         * An optional paramter, intersecting allowes to move the object in behind
         * the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        sendBackwards: function(i, o) {
          if (!i)
            return this;
          var l = this._activeObject, d, g, v, _, p, C = 0;
          if (i === l && i.type === "activeSelection")
            for (p = l._objects, d = 0; d < p.length; d++)
              g = p[d], v = this._objects.indexOf(g), v > 0 + C && (_ = v - 1, h(this._objects, g), this._objects.splice(_, 0, g)), C++;
          else
            v = this._objects.indexOf(i), v !== 0 && (_ = this._findNewLowerIndex(i, v, o), h(this._objects, i), this._objects.splice(_, 0, i));
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * @private
         */
        _findNewLowerIndex: function(i, o, l) {
          var d, g;
          if (l)
            for (d = o, g = o - 1; g >= 0; --g) {
              var v = i.intersectsWithObject(this._objects[g]) || i.isContainedWithinObject(this._objects[g]) || this._objects[g].isContainedWithinObject(i);
              if (v) {
                d = g;
                break;
              }
            }
          else
            d = o - 1;
          return d;
        },
        /**
         * Moves an object or a selection up in stack of drawn objects
         * An optional paramter, intersecting allowes to move the object in front
         * of the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        bringForward: function(i, o) {
          if (!i)
            return this;
          var l = this._activeObject, d, g, v, _, p, C = 0;
          if (i === l && i.type === "activeSelection")
            for (p = l._objects, d = p.length; d--; )
              g = p[d], v = this._objects.indexOf(g), v < this._objects.length - 1 - C && (_ = v + 1, h(this._objects, g), this._objects.splice(_, 0, g)), C++;
          else
            v = this._objects.indexOf(i), v !== this._objects.length - 1 && (_ = this._findNewUpperIndex(i, v, o), h(this._objects, i), this._objects.splice(_, 0, i));
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * @private
         */
        _findNewUpperIndex: function(i, o, l) {
          var d, g, v;
          if (l)
            for (d = o, g = o + 1, v = this._objects.length; g < v; ++g) {
              var _ = i.intersectsWithObject(this._objects[g]) || i.isContainedWithinObject(this._objects[g]) || this._objects[g].isContainedWithinObject(i);
              if (_) {
                d = g;
                break;
              }
            }
          else
            d = o + 1;
          return d;
        },
        /**
         * Moves an object to specified level in stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @param {Number} index Position to move to
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        moveTo: function(i, o) {
          return h(this._objects, i), this._objects.splice(o, 0, i), this.renderOnAddRemove && this.requestRenderAll();
        },
        /**
         * Clears a canvas element and dispose objects
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        dispose: function() {
          return this.isRendering && (u.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(i) {
            i.dispose && i.dispose();
          }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, u.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
        },
        /**
         * Returns a string representation of an instance
         * @return {String} string representation of an instance
         */
        toString: function() {
          return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
        }
      }
    ), f(u.StaticCanvas.prototype, u.Observable), f(u.StaticCanvas.prototype, u.Collection), f(u.StaticCanvas.prototype, u.DataURLExporter), f(
      u.StaticCanvas,
      /** @lends fabric.StaticCanvas */
      {
        /**
         * @static
         * @type String
         * @default
         */
        EMPTY_JSON: '{"objects": [], "background": "white"}',
        /**
         * Provides a way to check support of some of the canvas methods
         * (either those of HTMLCanvasElement itself, or rendering context)
         *
         * @param {String} methodName Method to check support for;
         *                            Could be one of "setLineDash"
         * @return {Boolean | null} `true` if method is supported (or at least exists),
         *                          `null` if canvas element or context can not be initialized
         */
        supports: function(i) {
          var o = c();
          if (!o || !o.getContext)
            return null;
          var l = o.getContext("2d");
          if (!l)
            return null;
          switch (i) {
            case "setLineDash":
              return typeof l.setLineDash < "u";
            default:
              return null;
          }
        }
      }
    ), u.StaticCanvas.prototype.toJSON = u.StaticCanvas.prototype.toObject, u.isLikelyNode && (u.StaticCanvas.prototype.createPNGStream = function() {
      var i = n(this.lowerCanvasEl);
      return i && i.createPNGStream();
    }, u.StaticCanvas.prototype.createJPEGStream = function(i) {
      var o = n(this.lowerCanvasEl);
      return o && o.createJPEGStream(i);
    });
  }(), u.BaseBrush = u.util.createClass(
    /** @lends fabric.BaseBrush.prototype */
    {
      /**
       * Color of a brush
       * @type String
       * @default
       */
      color: "rgb(0, 0, 0)",
      /**
       * Width of a brush, has to be a Number, no string literals
       * @type Number
       * @default
       */
      width: 1,
      /**
       * Shadow object representing shadow of this shape.
       * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
       * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
       * @type fabric.Shadow
       * @default
       */
      shadow: null,
      /**
       * Line endings style of a brush (one of "butt", "round", "square")
       * @type String
       * @default
       */
      strokeLineCap: "round",
      /**
       * Corner style of a brush (one of "bevel", "round", "miter")
       * @type String
       * @default
       */
      strokeLineJoin: "round",
      /**
       * Maximum miter length (used for strokeLineJoin = "miter") of a brush's
       * @type Number
       * @default
       */
      strokeMiterLimit: 10,
      /**
       * Stroke Dash Array.
       * @type Array
       * @default
       */
      strokeDashArray: null,
      /**
       * Sets shadow of an object
       * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
       * @return {fabric.Object} thisArg
       * @chainable
       */
      setShadow: function(f) {
        return this.shadow = new u.Shadow(f), this;
      },
      /**
       * Sets brush styles
       * @private
       */
      _setBrushStyles: function() {
        var f = this.canvas.contextTop;
        f.strokeStyle = this.color, f.lineWidth = this.width, f.lineCap = this.strokeLineCap, f.miterLimit = this.strokeMiterLimit, f.lineJoin = this.strokeLineJoin, u.StaticCanvas.supports("setLineDash") && f.setLineDash(this.strokeDashArray || []);
      },
      /**
       * Sets the transformation on given context
       * @param {RenderingContext2d} ctx context to render on
       * @private
       */
      _saveAndTransform: function(f) {
        var e = this.canvas.viewportTransform;
        f.save(), f.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
      },
      /**
       * Sets brush shadow styles
       * @private
       */
      _setShadow: function() {
        if (this.shadow) {
          var f = this.canvas, e = this.shadow, h = f.contextTop, r = f.getZoom();
          f && f._isRetinaScaling() && (r *= u.devicePixelRatio), h.shadowColor = e.color, h.shadowBlur = e.blur * r, h.shadowOffsetX = e.offsetX * r, h.shadowOffsetY = e.offsetY * r;
        }
      },
      needsFullRender: function() {
        var f = new u.Color(this.color);
        return f.getAlpha() < 1 || !!this.shadow;
      },
      /**
       * Removes brush shadow styles
       * @private
       */
      _resetShadow: function() {
        var f = this.canvas.contextTop;
        f.shadowColor = "", f.shadowBlur = f.shadowOffsetX = f.shadowOffsetY = 0;
      }
    }
  ), function() {
    u.PencilBrush = u.util.createClass(
      u.BaseBrush,
      /** @lends fabric.PencilBrush.prototype */
      {
        /**
         * Discard points that are less than `decimate` pixel distant from each other
         * @type Number
         * @default 0.4
         */
        decimate: 0.4,
        /**
         * Constructor
         * @param {fabric.Canvas} canvas
         * @return {fabric.PencilBrush} Instance of a pencil brush
         */
        initialize: function(f) {
          this.canvas = f, this._points = [];
        },
        /**
         * Invoked inside on mouse down and mouse move
         * @param {Object} pointer
         */
        _drawSegment: function(f, e, h) {
          var r = e.midPointFrom(h);
          return f.quadraticCurveTo(e.x, e.y, r.x, r.y), r;
        },
        /**
         * Inovoked on mouse down
         * @param {Object} pointer
         */
        onMouseDown: function(f, e) {
          this.canvas._isMainEvent(e.e) && (this._prepareForDrawing(f), this._captureDrawingPath(f), this._render());
        },
        /**
         * Inovoked on mouse move
         * @param {Object} pointer
         */
        onMouseMove: function(f, e) {
          if (this.canvas._isMainEvent(e.e) && this._captureDrawingPath(f) && this._points.length > 1)
            if (this.needsFullRender())
              this.canvas.clearContext(this.canvas.contextTop), this._render();
            else {
              var h = this._points, r = h.length, t = this.canvas.contextTop;
              this._saveAndTransform(t), this.oldEnd && (t.beginPath(), t.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(t, h[r - 2], h[r - 1], !0), t.stroke(), t.restore();
            }
        },
        /**
         * Invoked on mouse up
         */
        onMouseUp: function(f) {
          return this.canvas._isMainEvent(f.e) ? (this.oldEnd = void 0, this._finalizeAndAddPath(), !1) : !0;
        },
        /**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
        _prepareForDrawing: function(f) {
          var e = new u.Point(f.x, f.y);
          this._reset(), this._addPoint(e), this.canvas.contextTop.moveTo(e.x, e.y);
        },
        /**
         * @private
         * @param {fabric.Point} point Point to be added to points array
         */
        _addPoint: function(f) {
          return this._points.length > 1 && f.eq(this._points[this._points.length - 1]) ? !1 : (this._points.push(f), !0);
        },
        /**
         * Clear points array and set contextTop canvas style.
         * @private
         */
        _reset: function() {
          this._points = [], this._setBrushStyles(), this._setShadow();
        },
        /**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
        _captureDrawingPath: function(f) {
          var e = new u.Point(f.x, f.y);
          return this._addPoint(e);
        },
        /**
         * Draw a smooth path on the topCanvas using quadraticCurveTo
         * @private
         */
        _render: function() {
          var f = this.canvas.contextTop, e, h, r = this._points[0], t = this._points[1];
          if (this._saveAndTransform(f), f.beginPath(), this._points.length === 2 && r.x === t.x && r.y === t.y) {
            var a = this.width / 1e3;
            r = new u.Point(r.x, r.y), t = new u.Point(t.x, t.y), r.x -= a, t.x += a;
          }
          for (f.moveTo(r.x, r.y), e = 1, h = this._points.length; e < h; e++)
            this._drawSegment(f, r, t), r = this._points[e], t = this._points[e + 1];
          f.lineTo(r.x, r.y), f.stroke(), f.restore();
        },
        /**
         * Converts points to SVG path
         * @param {Array} points Array of points
         * @return {String} SVG path
         */
        convertPointsToSVGPath: function(f) {
          var e = [], h, r = this.width / 1e3, t = new u.Point(f[0].x, f[0].y), a = new u.Point(f[1].x, f[1].y), n = f.length, c = 1, s = 0, i = n > 2;
          for (i && (c = f[2].x < a.x ? -1 : f[2].x === a.x ? 0 : 1, s = f[2].y < a.y ? -1 : f[2].y === a.y ? 0 : 1), e.push("M ", t.x - c * r, " ", t.y - s * r, " "), h = 1; h < n; h++) {
            if (!t.eq(a)) {
              var o = t.midPointFrom(a);
              e.push("Q ", t.x, " ", t.y, " ", o.x, " ", o.y, " ");
            }
            t = f[h], h + 1 < f.length && (a = f[h + 1]);
          }
          return i && (c = t.x > f[h - 2].x ? 1 : t.x === f[h - 2].x ? 0 : -1, s = t.y > f[h - 2].y ? 1 : t.y === f[h - 2].y ? 0 : -1), e.push("L ", t.x + c * r, " ", t.y + s * r), e;
        },
        /**
         * Creates fabric.Path object to add on canvas
         * @param {String} pathData Path data
         * @return {fabric.Path} Path to add on canvas
         */
        createPath: function(f) {
          var e = new u.Path(f, {
            fill: null,
            stroke: this.color,
            strokeWidth: this.width,
            strokeLineCap: this.strokeLineCap,
            strokeMiterLimit: this.strokeMiterLimit,
            strokeLineJoin: this.strokeLineJoin,
            strokeDashArray: this.strokeDashArray
          });
          return this.shadow && (this.shadow.affectStroke = !0, e.setShadow(this.shadow)), e;
        },
        /**
         * Decimate poins array with the decimate value
         */
        decimatePoints: function(f, e) {
          if (f.length <= 2)
            return f;
          var h = this.canvas.getZoom(), r = Math.pow(e / h, 2), t, a = f.length - 1, n = f[0], c = [n], s;
          for (t = 1; t < a; t++)
            s = Math.pow(n.x - f[t].x, 2) + Math.pow(n.y - f[t].y, 2), s >= r && (n = f[t], c.push(n));
          return c.length === 1 && c.push(new u.Point(c[0].x, c[0].y)), c;
        },
        /**
         * On mouseup after drawing the path on contextTop canvas
         * we use the points captured to create an new fabric path object
         * and add it to the fabric canvas.
         */
        _finalizeAndAddPath: function() {
          var f = this.canvas.contextTop;
          f.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
          var e = this.convertPointsToSVGPath(this._points).join("");
          if (e === "M 0 0 Q 0 0 0 0 L 0 0") {
            this.canvas.requestRenderAll();
            return;
          }
          var h = this.createPath(e);
          this.canvas.clearContext(this.canvas.contextTop), this.canvas.add(h), this.canvas.requestRenderAll(), h.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: h });
        }
      }
    );
  }(), u.CircleBrush = u.util.createClass(
    u.BaseBrush,
    /** @lends fabric.CircleBrush.prototype */
    {
      /**
       * Width of a brush
       * @type Number
       * @default
       */
      width: 10,
      /**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.CircleBrush} Instance of a circle brush
       */
      initialize: function(f) {
        this.canvas = f, this.points = [];
      },
      /**
       * Invoked inside on mouse down and mouse move
       * @param {Object} pointer
       */
      drawDot: function(f) {
        var e = this.addPoint(f), h = this.canvas.contextTop;
        this._saveAndTransform(h), this.dot(h, e), h.restore();
      },
      dot: function(f, e) {
        f.fillStyle = e.fill, f.beginPath(), f.arc(e.x, e.y, e.radius, 0, Math.PI * 2, !1), f.closePath(), f.fill();
      },
      /**
       * Invoked on mouse down
       */
      onMouseDown: function(f) {
        this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(f);
      },
      /**
       * Render the full state of the brush
       * @private
       */
      _render: function() {
        var f = this.canvas.contextTop, e, h, r = this.points;
        for (this._saveAndTransform(f), e = 0, h = r.length; e < h; e++)
          this.dot(f, r[e]);
        f.restore();
      },
      /**
       * Invoked on mouse move
       * @param {Object} pointer
       */
      onMouseMove: function(f) {
        this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(f), this._render()) : this.drawDot(f);
      },
      /**
       * Invoked on mouse up
       */
      onMouseUp: function() {
        var f = this.canvas.renderOnAddRemove, e, h;
        this.canvas.renderOnAddRemove = !1;
        var r = [];
        for (e = 0, h = this.points.length; e < h; e++) {
          var t = this.points[e], a = new u.Circle({
            radius: t.radius,
            left: t.x,
            top: t.y,
            originX: "center",
            originY: "center",
            fill: t.fill
          });
          this.shadow && a.setShadow(this.shadow), r.push(a);
        }
        var n = new u.Group(r);
        n.canvas = this.canvas, this.canvas.add(n), this.canvas.fire("path:created", { path: n }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = f, this.canvas.requestRenderAll();
      },
      /**
       * @param {Object} pointer
       * @return {fabric.Point} Just added pointer point
       */
      addPoint: function(f) {
        var e = new u.Point(f.x, f.y), h = u.util.getRandomInt(
          Math.max(0, this.width - 20),
          this.width + 20
        ) / 2, r = new u.Color(this.color).setAlpha(u.util.getRandomInt(0, 100) / 100).toRgba();
        return e.radius = h, e.fill = r, this.points.push(e), e;
      }
    }
  ), u.SprayBrush = u.util.createClass(
    u.BaseBrush,
    /** @lends fabric.SprayBrush.prototype */
    {
      /**
       * Width of a spray
       * @type Number
       * @default
       */
      width: 10,
      /**
       * Density of a spray (number of dots per chunk)
       * @type Number
       * @default
       */
      density: 20,
      /**
       * Width of spray dots
       * @type Number
       * @default
       */
      dotWidth: 1,
      /**
       * Width variance of spray dots
       * @type Number
       * @default
       */
      dotWidthVariance: 1,
      /**
       * Whether opacity of a dot should be random
       * @type Boolean
       * @default
       */
      randomOpacity: !1,
      /**
       * Whether overlapping dots (rectangles) should be removed (for performance reasons)
       * @type Boolean
       * @default
       */
      optimizeOverlapping: !0,
      /**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.SprayBrush} Instance of a spray brush
       */
      initialize: function(f) {
        this.canvas = f, this.sprayChunks = [];
      },
      /**
       * Invoked on mouse down
       * @param {Object} pointer
       */
      onMouseDown: function(f) {
        this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(f), this.render(this.sprayChunkPoints);
      },
      /**
       * Invoked on mouse move
       * @param {Object} pointer
       */
      onMouseMove: function(f) {
        this.addSprayChunk(f), this.render(this.sprayChunkPoints);
      },
      /**
       * Invoked on mouse up
       */
      onMouseUp: function() {
        var f = this.canvas.renderOnAddRemove;
        this.canvas.renderOnAddRemove = !1;
        for (var e = [], h = 0, r = this.sprayChunks.length; h < r; h++)
          for (var t = this.sprayChunks[h], a = 0, n = t.length; a < n; a++) {
            var c = new u.Rect({
              width: t[a].width,
              height: t[a].width,
              left: t[a].x + 1,
              top: t[a].y + 1,
              originX: "center",
              originY: "center",
              fill: this.color
            });
            e.push(c);
          }
        this.optimizeOverlapping && (e = this._getOptimizedRects(e));
        var s = new u.Group(e);
        this.shadow && s.setShadow(this.shadow), this.canvas.add(s), this.canvas.fire("path:created", { path: s }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = f, this.canvas.requestRenderAll();
      },
      /**
       * @private
       * @param {Array} rects
       */
      _getOptimizedRects: function(f) {
        var e = {}, h, r, t;
        for (r = 0, t = f.length; r < t; r++)
          h = f[r].left + "" + f[r].top, e[h] || (e[h] = f[r]);
        var a = [];
        for (h in e)
          a.push(e[h]);
        return a;
      },
      /**
       * Render new chunk of spray brush
       */
      render: function(f) {
        var e = this.canvas.contextTop, h, r;
        for (e.fillStyle = this.color, this._saveAndTransform(e), h = 0, r = f.length; h < r; h++) {
          var t = f[h];
          typeof t.opacity < "u" && (e.globalAlpha = t.opacity), e.fillRect(t.x, t.y, t.width, t.width);
        }
        e.restore();
      },
      /**
       * Render all spray chunks
       */
      _render: function() {
        var f = this.canvas.contextTop, e, h;
        for (f.fillStyle = this.color, this._saveAndTransform(f), e = 0, h = this.sprayChunks.length; e < h; e++)
          this.render(this.sprayChunks[e]);
        f.restore();
      },
      /**
       * @param {Object} pointer
       */
      addSprayChunk: function(f) {
        this.sprayChunkPoints = [];
        var e, h, r, t = this.width / 2, a;
        for (a = 0; a < this.density; a++) {
          e = u.util.getRandomInt(f.x - t, f.x + t), h = u.util.getRandomInt(f.y - t, f.y + t), this.dotWidthVariance ? r = u.util.getRandomInt(
            // bottom clamp width to 1
            Math.max(1, this.dotWidth - this.dotWidthVariance),
            this.dotWidth + this.dotWidthVariance
          ) : r = this.dotWidth;
          var n = new u.Point(e, h);
          n.width = r, this.randomOpacity && (n.opacity = u.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(n);
        }
        this.sprayChunks.push(this.sprayChunkPoints);
      }
    }
  ), u.PatternBrush = u.util.createClass(
    u.PencilBrush,
    /** @lends fabric.PatternBrush.prototype */
    {
      getPatternSrc: function() {
        var f = 20, e = 5, h = u.util.createCanvasElement(), r = h.getContext("2d");
        return h.width = h.height = f + e, r.fillStyle = this.color, r.beginPath(), r.arc(f / 2, f / 2, f / 2, 0, Math.PI * 2, !1), r.closePath(), r.fill(), h;
      },
      getPatternSrcFunction: function() {
        return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
      },
      /**
       * Creates "pattern" instance property
       */
      getPattern: function() {
        return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), "repeat");
      },
      /**
       * Sets brush styles
       */
      _setBrushStyles: function() {
        this.callSuper("_setBrushStyles"), this.canvas.contextTop.strokeStyle = this.getPattern();
      },
      /**
       * Creates path
       */
      createPath: function(f) {
        var e = this.callSuper("createPath", f), h = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2);
        return e.stroke = new u.Pattern({
          source: this.source || this.getPatternSrcFunction(),
          offsetX: -h.x,
          offsetY: -h.y
        }), e;
      }
    }
  ), function() {
    var f = u.util.getPointer, e = u.util.degreesToRadians, h = u.util.radiansToDegrees, r = Math.atan2, t = Math.abs, a = u.StaticCanvas.supports("setLineDash"), n = 0.5;
    u.Canvas = u.util.createClass(
      u.StaticCanvas,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(s, i) {
          i || (i = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(s, i), this._initInteractive(), this._createCacheCanvas();
        },
        /**
         * When true, objects can be transformed by one side (unproportionally)
         * @type Boolean
         * @default
         */
        uniScaleTransform: !1,
        /**
         * Indicates which key enable unproportional scaling
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        uniScaleKey: "shiftKey",
        /**
         * When true, objects use center point as the origin of scale transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: !1,
        /**
         * When true, objects use center point as the origin of rotate transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: !1,
        /**
         * Indicates which key enable centered Transform
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        centeredKey: "altKey",
        /**
         * Indicates which key enable alternate action on corner
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        altActionKey: "shiftKey",
        /**
         * Indicates that canvas is interactive. This property should not be changed.
         * @type Boolean
         * @default
         */
        interactive: !0,
        /**
         * Indicates whether group selection should be enabled
         * @type Boolean
         * @default
         */
        selection: !0,
        /**
         * Indicates which key or keys enable multiple click selection
         * Pass value as a string or array of strings
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or empty or containing any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.2
         * @type String|Array
         * @default
         */
        selectionKey: "shiftKey",
        /**
         * Indicates which key enable alternative selection
         * in case of target overlapping with active object
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * For a series of reason that come from the general expectations on how
         * things should work, this feature works only for preserveObjectStacking true.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.5
         * @type null|String
         * @default
         */
        altSelectionKey: null,
        /**
         * Color of selection
         * @type String
         * @default
         */
        selectionColor: "rgba(100, 100, 255, 0.3)",
        // blue
        /**
         * Default dash array pattern
         * If not empty the selection border is dashed
         * @type Array
         */
        selectionDashArray: [],
        /**
         * Color of the border of selection (usually slightly darker than color of selection itself)
         * @type String
         * @default
         */
        selectionBorderColor: "rgba(255, 255, 255, 0.3)",
        /**
         * Width of a line used in object/group selection
         * @type Number
         * @default
         */
        selectionLineWidth: 1,
        /**
         * Select only shapes that are fully contained in the dragged selection rectangle.
         * @type Boolean
         * @default
         */
        selectionFullyContained: !1,
        /**
         * Default cursor value used when hovering over an object on canvas
         * @type String
         * @default
         */
        hoverCursor: "move",
        /**
         * Default cursor value used when moving an object on canvas
         * @type String
         * @default
         */
        moveCursor: "move",
        /**
         * Default cursor value used for the entire canvas
         * @type String
         * @default
         */
        defaultCursor: "default",
        /**
         * Cursor value used during free drawing
         * @type String
         * @default
         */
        freeDrawingCursor: "crosshair",
        /**
         * Cursor value used for rotation point
         * @type String
         * @default
         */
        rotationCursor: "crosshair",
        /**
         * Cursor value used for disabled elements ( corners with disabled action )
         * @type String
         * @since 2.0.0
         * @default
         */
        notAllowedCursor: "not-allowed",
        /**
         * Default element class that's given to wrapper (div) element of canvas
         * @type String
         * @default
         */
        containerClass: "canvas-container",
        /**
         * When true, object detection happens on per-pixel basis rather than on per-bounding-box
         * @type Boolean
         * @default
         */
        perPixelTargetFind: !1,
        /**
         * Number of pixels around target pixel to tolerate (consider active) during object detection
         * @type Number
         * @default
         */
        targetFindTolerance: 0,
        /**
         * When true, target detection is skipped when hovering over canvas. This can be used to improve performance.
         * @type Boolean
         * @default
         */
        skipTargetFind: !1,
        /**
         * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
         * After mousedown, mousemove creates a shape,
         * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-4#free_drawing}
         * @type Boolean
         * @default
         */
        isDrawingMode: !1,
        /**
         * Indicates whether objects should remain in current stack position when selected.
         * When false objects are brought to top and rendered as part of the selection group
         * @type Boolean
         * @default
         */
        preserveObjectStacking: !1,
        /**
         * Indicates the angle that an object will lock to while rotating.
         * @type Number
         * @since 1.6.7
         * @default
         */
        snapAngle: 0,
        /**
         * Indicates the distance from the snapAngle the rotation will lock to the snapAngle.
         * When `null`, the snapThreshold will default to the snapAngle.
         * @type null|Number
         * @since 1.6.7
         * @default
         */
        snapThreshold: null,
        /**
         * Indicates if the right click on canvas can output the context menu or not
         * @type Boolean
         * @since 1.6.5
         * @default
         */
        stopContextMenu: !1,
        /**
         * Indicates if the canvas can fire right click events
         * @type Boolean
         * @since 1.6.5
         * @default
         */
        fireRightClick: !1,
        /**
         * Indicates if the canvas can fire middle click events
         * @type Boolean
         * @since 1.7.8
         * @default
         */
        fireMiddleClick: !1,
        /**
         * Keep track of the subTargets for Mouse Events
         * @type fabric.Object[]
         */
        targets: [],
        /**
         * Keep track of the hovered target
         * @type fabric.Object
         * @private
         */
        _hoveredTarget: null,
        /**
         * hold the list of nested targets hovered
         * @type fabric.Object[]
         * @private
         */
        _hoveredTargets: [],
        /**
         * @private
         */
        _initInteractive: function() {
          this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = u.PencilBrush && new u.PencilBrush(this), this.calcOffset();
        },
        /**
         * Divides objects in two groups, one to render immediately
         * and one to render as activeGroup.
         * @return {Array} objects to render immediately and pushes the other in the activeGroup.
         */
        _chooseObjectsToRender: function() {
          var s = this.getActiveObjects(), i, o, l;
          if (s.length > 0 && !this.preserveObjectStacking) {
            o = [], l = [];
            for (var d = 0, g = this._objects.length; d < g; d++)
              i = this._objects[d], s.indexOf(i) === -1 ? o.push(i) : l.push(i);
            s.length > 1 && (this._activeObject._objects = l), o.push.apply(o, l);
          } else
            o = this._objects;
          return o;
        },
        /**
         * Renders both the top canvas and the secondary container canvas.
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAll: function() {
          this.contextTopDirty && !this._groupSelector && !this.isDrawingMode && (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && this.renderTopLayer(this.contextTop);
          var s = this.contextContainer;
          return this.renderCanvas(s, this._chooseObjectsToRender()), this;
        },
        renderTopLayer: function(s) {
          s.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(s), this.contextTopDirty = !0), s.restore();
        },
        /**
         * Method to render only the top canvas.
         * Also used to render the group selection box.
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        renderTop: function() {
          var s = this.contextTop;
          return this.clearContext(s), this.renderTopLayer(s), this.fire("after:render"), this;
        },
        /**
         * Resets the current transform to its original values and chooses the type of resizing based on the event
         * @private
         */
        _resetCurrentTransform: function() {
          var s = this._currentTransform;
          s.target.set({
            scaleX: s.original.scaleX,
            scaleY: s.original.scaleY,
            skewX: s.original.skewX,
            skewY: s.original.skewY,
            left: s.original.left,
            top: s.original.top
          }), this._shouldCenterTransform(s.target) ? (s.originX !== "center" && (s.originX === "right" ? s.mouseXSign = -1 : s.mouseXSign = 1), s.originY !== "center" && (s.originY === "bottom" ? s.mouseYSign = -1 : s.mouseYSign = 1), s.originX = "center", s.originY = "center") : (s.originX = s.original.originX, s.originY = s.original.originY);
        },
        /**
         * Checks if point is contained within an area of given object
         * @param {Event} e Event object
         * @param {fabric.Object} target Object to test against
         * @param {Object} [point] x,y object of point coordinates we want to check.
         * @return {Boolean} true if point is contained within an area of given object
         */
        containsPoint: function(s, i, o) {
          var l = !0, d = o || this.getPointer(s, l), g;
          return i.group && i.group === this._activeObject && i.group.type === "activeSelection" ? g = this._normalizePointer(i.group, d) : g = { x: d.x, y: d.y }, i.containsPoint(g) || i._findTargetCorner(d);
        },
        /**
         * @private
         */
        _normalizePointer: function(s, i) {
          var o = s.calcTransformMatrix(), l = u.util.invertTransform(o), d = this.restorePointerVpt(i);
          return u.util.transformPoint(d, l);
        },
        /**
         * Returns true if object is transparent at a certain location
         * @param {fabric.Object} target Object to check
         * @param {Number} x Left coordinate
         * @param {Number} y Top coordinate
         * @return {Boolean}
         */
        isTargetTransparent: function(s, i, o) {
          if (s.shouldCache() && s._cacheCanvas && s !== this._activeObject) {
            var l = this._normalizePointer(s, { x: i, y: o }), d = Math.max(s.cacheTranslationX + l.x * s.zoomX, 0), g = Math.max(s.cacheTranslationY + l.y * s.zoomY, 0), C = u.util.isTransparent(
              s._cacheContext,
              Math.round(d),
              Math.round(g),
              this.targetFindTolerance
            );
            return C;
          }
          var v = this.contextCache, _ = s.selectionBackgroundColor, p = this.viewportTransform;
          s.selectionBackgroundColor = "", this.clearContext(v), v.save(), v.transform(p[0], p[1], p[2], p[3], p[4], p[5]), s.render(v), v.restore(), s === this._activeObject && s._renderControls(v, {
            hasBorders: !1,
            transparentCorners: !1
          }, {
            hasBorders: !1
          }), s.selectionBackgroundColor = _;
          var C = u.util.isTransparent(
            v,
            i,
            o,
            this.targetFindTolerance
          );
          return C;
        },
        /**
         * takes an event and determins if selection key has been pressed
         * @private
         * @param {Event} e Event object
         */
        _isSelectionKeyPressed: function(s) {
          var i = !1;
          return Object.prototype.toString.call(this.selectionKey) === "[object Array]" ? i = !!this.selectionKey.find(function(o) {
            return s[o] === !0;
          }) : i = s[this.selectionKey], i;
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _shouldClearSelection: function(s, i) {
          var o = this.getActiveObjects(), l = this._activeObject;
          return !i || i && l && o.length > 1 && o.indexOf(i) === -1 && l !== i && !this._isSelectionKeyPressed(s) || i && !i.evented || i && !i.selectable && l && l !== i;
        },
        /**
         * centeredScaling from object can't override centeredScaling from canvas.
         * this should be fixed, since object setting should take precedence over canvas.
         * @private
         * @param {fabric.Object} target
         */
        _shouldCenterTransform: function(s) {
          if (s) {
            var i = this._currentTransform, o;
            return i.action === "scale" || i.action === "scaleX" || i.action === "scaleY" ? o = this.centeredScaling || s.centeredScaling : i.action === "rotate" && (o = this.centeredRotation || s.centeredRotation), o ? !i.altKey : i.altKey;
          }
        },
        /**
         * @private
         */
        _getOriginFromCorner: function(s, i) {
          var o = {
            x: s.originX,
            y: s.originY
          };
          return i === "ml" || i === "tl" || i === "bl" ? o.x = "right" : (i === "mr" || i === "tr" || i === "br") && (o.x = "left"), i === "tl" || i === "mt" || i === "tr" ? o.y = "bottom" : (i === "bl" || i === "mb" || i === "br") && (o.y = "top"), o;
        },
        /**
         * @private
         * @param {Boolean} alreadySelected true if target is already selected
         * @param {String} corner a string representing the corner ml, mr, tl ...
         * @param {Event} e Event object
         * @param {fabric.Object} [target] inserted back to help overriding. Unused
         */
        _getActionFromCorner: function(s, i, o) {
          if (!i || !s)
            return "drag";
          switch (i) {
            case "mtr":
              return "rotate";
            case "ml":
            case "mr":
              return o[this.altActionKey] ? "skewY" : "scaleX";
            case "mt":
            case "mb":
              return o[this.altActionKey] ? "skewX" : "scaleY";
            default:
              return "scale";
          }
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _setupCurrentTransform: function(s, i, o) {
          if (i) {
            var l = this.getPointer(s), d = i._findTargetCorner(this.getPointer(s, !0)), g = this._getActionFromCorner(o, d, s, i), v = this._getOriginFromCorner(i, d);
            this._currentTransform = {
              target: i,
              action: g,
              corner: d,
              scaleX: i.scaleX,
              scaleY: i.scaleY,
              skewX: i.skewX,
              skewY: i.skewY,
              // used by transation
              offsetX: l.x - i.left,
              offsetY: l.y - i.top,
              originX: v.x,
              originY: v.y,
              ex: l.x,
              ey: l.y,
              lastX: l.x,
              lastY: l.y,
              // unsure they are usefull anymore.
              // left: target.left,
              // top: target.top,
              theta: e(i.angle),
              // end of unsure
              width: i.width * i.scaleX,
              mouseXSign: 1,
              mouseYSign: 1,
              shiftKey: s.shiftKey,
              altKey: s[this.centeredKey],
              original: u.util.saveObjectTransform(i)
            }, this._currentTransform.original.originX = v.x, this._currentTransform.original.originY = v.y, this._resetCurrentTransform(), this._beforeTransform(s);
          }
        },
        /**
         * Translates object by "setting" its left/top
         * @private
         * @param {Number} x pointer's x coordinate
         * @param {Number} y pointer's y coordinate
         * @return {Boolean} true if the translation occurred
         */
        _translateObject: function(s, i) {
          var o = this._currentTransform, l = o.target, d = s - o.offsetX, g = i - o.offsetY, v = !l.get("lockMovementX") && l.left !== d, _ = !l.get("lockMovementY") && l.top !== g;
          return v && l.set("left", d), _ && l.set("top", g), v || _;
        },
        /**
         * Check if we are increasing a positive skew or lower it,
         * checking mouse direction and pressed corner.
         * @private
         */
        _changeSkewTransformOrigin: function(s, i, o) {
          var l = "originX", d = { 0: "center" }, g = i.target.skewX, v = "left", _ = "right", p = i.corner === "mt" || i.corner === "ml" ? 1 : -1, C = 1;
          s = s > 0 ? 1 : -1, o === "y" && (g = i.target.skewY, v = "top", _ = "bottom", l = "originY"), d[-1] = v, d[1] = _, i.target.flipX && (C *= -1), i.target.flipY && (C *= -1), g === 0 ? (i.skewSign = -p * s * C, i[l] = d[-s]) : (g = g > 0 ? 1 : -1, i.skewSign = g, i[l] = d[g * p * C]);
        },
        /**
         * Skew object by mouse events
         * @private
         * @param {Number} x pointer's x coordinate
         * @param {Number} y pointer's y coordinate
         * @param {String} by Either 'x' or 'y'
         * @return {Boolean} true if the skewing occurred
         */
        _skewObject: function(s, i, o) {
          var l = this._currentTransform, d = l.target, g = !1, v = d.get("lockSkewingX"), _ = d.get("lockSkewingY");
          if (v && o === "x" || _ && o === "y")
            return !1;
          var p = d.getCenterPoint(), C = d.toLocalPoint(new u.Point(s, i), "center", "center")[o], S = d.toLocalPoint(new u.Point(l.lastX, l.lastY), "center", "center")[o], O, k, P = d._getTransformedDimensions();
          return this._changeSkewTransformOrigin(C - S, l, o), O = d.toLocalPoint(new u.Point(s, i), l.originX, l.originY)[o], k = d.translateToOriginPoint(p, l.originX, l.originY), g = this._setObjectSkew(O, l, o, P), l.lastX = s, l.lastY = i, d.setPositionByOrigin(k, l.originX, l.originY), g;
        },
        /**
         * Set object skew
         * @private
         * @return {Boolean} true if the skewing occurred
         */
        _setObjectSkew: function(s, i, o, l) {
          var d = i.target, g, v = !1, _ = i.skewSign, p, C, S, O, k, P, F, E;
          return o === "x" ? (S = "y", O = "Y", k = "X", F = 0, E = d.skewY) : (S = "x", O = "X", k = "Y", F = d.skewX, E = 0), C = d._getTransformedDimensions(F, E), P = 2 * Math.abs(s) - C[o], P <= 2 ? g = 0 : (g = _ * Math.atan(P / d["scale" + k] / (C[S] / d["scale" + O])), g = u.util.radiansToDegrees(g)), v = d["skew" + k] !== g, d.set("skew" + k, g), d["skew" + O] !== 0 && (p = d._getTransformedDimensions(), g = l[S] / p[S] * d["scale" + O], d.set("scale" + O, g)), v;
        },
        /**
         * Scales object by invoking its scaleX/scaleY methods
         * @private
         * @param {Number} x pointer's x coordinate
         * @param {Number} y pointer's y coordinate
         * @param {String} by Either 'x' or 'y' - specifies dimension constraint by which to scale an object.
         *                    When not provided, an object is scaled by both dimensions equally
         * @return {Boolean} true if the scaling occurred
         */
        _scaleObject: function(s, i, o) {
          var l = this._currentTransform, d = l.target, g = d.lockScalingX, v = d.lockScalingY, _ = d.lockScalingFlip;
          if (g && v)
            return !1;
          var p = d.translateToOriginPoint(d.getCenterPoint(), l.originX, l.originY), C = d.toLocalPoint(new u.Point(s, i), l.originX, l.originY), S = d._getTransformedDimensions(), O = !1;
          return this._setLocalMouse(C, l), O = this._setObjectScale(C, l, g, v, o, _, S), d.setPositionByOrigin(p, l.originX, l.originY), O;
        },
        /**
         * @private
         * @return {Boolean} true if the scaling occurred
         */
        _setObjectScale: function(s, i, o, l, d, g, v) {
          var _ = i.target, p = !1, C = !1, S = !1, O = s.x * _.scaleX / v.x, k = s.y * _.scaleY / v.y, P = _.scaleX !== O, F = _.scaleY !== k;
          if (i.newScaleX = O, i.newScaleY = k, u.Textbox && d === "x" && _ instanceof u.Textbox) {
            var E = _.width * (s.x / v.x);
            return E >= _.getMinWidth() ? (S = E !== _.width, _.set("width", E), S) : !1;
          }
          return g && O <= 0 && O < _.scaleX && (p = !0, s.x = 0), g && k <= 0 && k < _.scaleY && (C = !0, s.y = 0), d === "equally" && !o && !l ? S = this._scaleObjectEqually(s, _, i, v) : d ? d === "x" && !_.get("lockUniScaling") ? p || o || _.set("scaleX", O) && (S = P) : d === "y" && !_.get("lockUniScaling") && (C || l || _.set("scaleY", k) && (S = F)) : (p || o || _.set("scaleX", O) && (S = S || P), C || l || _.set("scaleY", k) && (S = S || F)), p || C || this._flipObject(i, d), S;
        },
        /**
         * @private
         * @return {Boolean} true if the scaling occurred
         */
        _scaleObjectEqually: function(s, i, o, l) {
          var d = s.y + s.x, g = l.y * o.original.scaleY / i.scaleY + l.x * o.original.scaleX / i.scaleX, v, _ = s.x < 0 ? -1 : 1, p = s.y < 0 ? -1 : 1, C, S;
          return C = _ * Math.abs(o.original.scaleX * d / g), S = p * Math.abs(o.original.scaleY * d / g), v = C !== i.scaleX || S !== i.scaleY, i.set("scaleX", C), i.set("scaleY", S), v;
        },
        /**
         * @private
         */
        _flipObject: function(s, i) {
          s.newScaleX < 0 && i !== "y" && (s.originX === "left" ? s.originX = "right" : s.originX === "right" && (s.originX = "left")), s.newScaleY < 0 && i !== "x" && (s.originY === "top" ? s.originY = "bottom" : s.originY === "bottom" && (s.originY = "top"));
        },
        /**
         * @private
         */
        _setLocalMouse: function(s, i) {
          var o = i.target, l = this.getZoom(), d = o.padding / l;
          i.originX === "right" ? s.x *= -1 : i.originX === "center" && (s.x *= i.mouseXSign * 2, s.x < 0 && (i.mouseXSign = -i.mouseXSign)), i.originY === "bottom" ? s.y *= -1 : i.originY === "center" && (s.y *= i.mouseYSign * 2, s.y < 0 && (i.mouseYSign = -i.mouseYSign)), t(s.x) > d ? s.x < 0 ? s.x += d : s.x -= d : s.x = 0, t(s.y) > d ? s.y < 0 ? s.y += d : s.y -= d : s.y = 0;
        },
        /**
         * Rotates object by invoking its rotate method
         * @private
         * @param {Number} x pointer's x coordinate
         * @param {Number} y pointer's y coordinate
         * @return {Boolean} true if the rotation occurred
         */
        _rotateObject: function(s, i) {
          var o = this._currentTransform, l = o.target, d, d = l.translateToOriginPoint(l.getCenterPoint(), o.originX, o.originY);
          if (l.lockRotation)
            return !1;
          var g = r(o.ey - d.y, o.ex - d.x), v = r(i - d.y, s - d.x), _ = h(v - g + o.theta), p = !0;
          if (l.snapAngle > 0) {
            var C = l.snapAngle, S = l.snapThreshold || C, O = Math.ceil(_ / C) * C, k = Math.floor(_ / C) * C;
            Math.abs(_ - k) < S ? _ = k : Math.abs(_ - O) < S && (_ = O);
          }
          return _ < 0 && (_ = 360 + _), _ %= 360, l.angle === _ ? p = !1 : (l.angle = _, l.setPositionByOrigin(d, o.originX, o.originY)), p;
        },
        /**
         * Set the cursor type of the canvas element
         * @param {String} value Cursor type of the canvas element.
         * @see http://www.w3.org/TR/css3-ui/#cursor
         */
        setCursor: function(s) {
          this.upperCanvasEl.style.cursor = s;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx to draw the selection on
         */
        _drawSelection: function(s) {
          var i = this._groupSelector, o = i.left, l = i.top, d = t(o), g = t(l);
          if (this.selectionColor && (s.fillStyle = this.selectionColor, s.fillRect(
            i.ex - (o > 0 ? 0 : -o),
            i.ey - (l > 0 ? 0 : -l),
            d,
            g
          )), !(!this.selectionLineWidth || !this.selectionBorderColor))
            if (s.lineWidth = this.selectionLineWidth, s.strokeStyle = this.selectionBorderColor, this.selectionDashArray.length > 1 && !a) {
              var v = i.ex + n - (o > 0 ? 0 : d), _ = i.ey + n - (l > 0 ? 0 : g);
              s.beginPath(), u.util.drawDashedLine(s, v, _, v + d, _, this.selectionDashArray), u.util.drawDashedLine(s, v, _ + g - 1, v + d, _ + g - 1, this.selectionDashArray), u.util.drawDashedLine(s, v, _, v, _ + g, this.selectionDashArray), u.util.drawDashedLine(s, v + d - 1, _, v + d - 1, _ + g, this.selectionDashArray), s.closePath(), s.stroke();
            } else
              u.Object.prototype._setLineDash.call(this, s, this.selectionDashArray), s.strokeRect(
                i.ex + n - (o > 0 ? 0 : d),
                i.ey + n - (l > 0 ? 0 : g),
                d,
                g
              );
        },
        /**
         * Method that determines what object we are clicking on
         * the skipGroup parameter is for internal use, is needed for shift+click action
         * 11/09/2018 TODO: would be cool if findTarget could discern between being a full target
         * or the outside part of the corner.
         * @param {Event} e mouse event
         * @param {Boolean} skipGroup when true, activeGroup is skipped and only objects are traversed through
         * @return {fabric.Object} the target found
         */
        findTarget: function(s, i) {
          if (!this.skipTargetFind) {
            var o = !0, l = this.getPointer(s, o), d = this._activeObject, g = this.getActiveObjects(), v, _;
            if (this.targets = [], g.length > 1 && !i && d === this._searchPossibleTargets([d], l) || g.length === 1 && d._findTargetCorner(l))
              return d;
            if (g.length === 1 && d === this._searchPossibleTargets([d], l))
              if (this.preserveObjectStacking)
                v = d, _ = this.targets, this.targets = [];
              else
                return d;
            var p = this._searchPossibleTargets(this._objects, l);
            return s[this.altSelectionKey] && p && v && p !== v && (p = v, this.targets = _), p;
          }
        },
        /**
         * Checks point is inside the object.
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @param {fabric.Object} obj Object to test against
         * @param {Object} [globalPointer] x,y object of point coordinates relative to canvas used to search per pixel target.
         * @return {Boolean} true if point is contained within an area of given object
         * @private
         */
        _checkTarget: function(s, i, o) {
          if (i && i.visible && i.evented && this.containsPoint(null, i, s))
            if ((this.perPixelTargetFind || i.perPixelTargetFind) && !i.isEditing) {
              var l = this.isTargetTransparent(i, o.x, o.y);
              if (!l)
                return !0;
            } else
              return !0;
        },
        /**
         * Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted
         * @param {Array} [objects] objects array to look into
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @return {fabric.Object} object that contains pointer
         * @private
         */
        _searchPossibleTargets: function(s, i) {
          for (var o, l = s.length, d; l--; ) {
            var g = s[l], v = g.group && g.group.type !== "activeSelection" ? this._normalizePointer(g.group, i) : i;
            if (this._checkTarget(v, g, i)) {
              o = s[l], o.subTargetCheck && o instanceof u.Group && (d = this._searchPossibleTargets(o._objects, i), d && this.targets.push(d));
              break;
            }
          }
          return o;
        },
        /**
         * Returns pointer coordinates without the effect of the viewport
         * @param {Object} pointer with "x" and "y" number values
         * @return {Object} object with "x" and "y" number values
         */
        restorePointerVpt: function(s) {
          return u.util.transformPoint(
            s,
            u.util.invertTransform(this.viewportTransform)
          );
        },
        /**
         * Returns pointer coordinates relative to canvas.
         * Can return coordinates with or without viewportTransform.
         * ignoreZoom false gives back coordinates that represent
         * the point clicked on canvas element.
         * ignoreZoom true gives back coordinates after being processed
         * by the viewportTransform ( sort of coordinates of what is displayed
         * on the canvas where you are clicking.
         * ignoreZoom true = HTMLElement coordinates relative to top,left
         * ignoreZoom false, default = fabric space coordinates, the same used for shape position
         * To interact with your shapes top and left you want to use ignoreZoom true
         * most of the time, while ignoreZoom false will give you coordinates
         * compatible with the object.oCoords system.
         * of the time.
         * @param {Event} e
         * @param {Boolean} ignoreZoom
         * @return {Object} object with "x" and "y" number values
         */
        getPointer: function(s, i) {
          if (this._absolutePointer && !i)
            return this._absolutePointer;
          if (this._pointer && i)
            return this._pointer;
          var o = f(s), l = this.upperCanvasEl, d = l.getBoundingClientRect(), g = d.width || 0, v = d.height || 0, _;
          (!g || !v) && ("top" in d && "bottom" in d && (v = Math.abs(d.top - d.bottom)), "right" in d && "left" in d && (g = Math.abs(d.right - d.left))), this.calcOffset(), o.x = o.x - this._offset.left, o.y = o.y - this._offset.top, i || (o = this.restorePointerVpt(o));
          var p = this.getRetinaScaling();
          return p !== 1 && (o.x /= p, o.y /= p), g === 0 || v === 0 ? _ = { width: 1, height: 1 } : _ = {
            width: l.width / g,
            height: l.height / v
          }, {
            x: o.x * _.width,
            y: o.y * _.height
          };
        },
        /**
         * @private
         * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
         */
        _createUpperCanvas: function() {
          var s = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), i = this.lowerCanvasEl, o = this.upperCanvasEl;
          o ? o.className = "" : (o = this._createCanvasElement(), this.upperCanvasEl = o), u.util.addClass(o, "upper-canvas " + s), this.wrapperEl.appendChild(o), this._copyCanvasStyle(i, o), this._applyCanvasStyle(o), this.contextTop = o.getContext("2d");
        },
        /**
         * @private
         */
        _createCacheCanvas: function() {
          this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
        },
        /**
         * @private
         */
        _initWrapperElement: function() {
          this.wrapperEl = u.util.wrapElement(this.lowerCanvasEl, "div", {
            class: this.containerClass
          }), u.util.setStyle(this.wrapperEl, {
            width: this.width + "px",
            height: this.height + "px",
            position: "relative"
          }), u.util.makeElementUnselectable(this.wrapperEl);
        },
        /**
         * @private
         * @param {HTMLElement} element canvas element to apply styles on
         */
        _applyCanvasStyle: function(s) {
          var i = this.width || s.width, o = this.height || s.height;
          u.util.setStyle(s, {
            position: "absolute",
            width: i + "px",
            height: o + "px",
            left: 0,
            top: 0,
            "touch-action": this.allowTouchScrolling ? "manipulation" : "none",
            "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none"
          }), s.width = i, s.height = o, u.util.makeElementUnselectable(s);
        },
        /**
         * Copy the entire inline style from one element (fromEl) to another (toEl)
         * @private
         * @param {Element} fromEl Element style is copied from
         * @param {Element} toEl Element copied style is applied to
         */
        _copyCanvasStyle: function(s, i) {
          i.style.cssText = s.style.cssText;
        },
        /**
         * Returns context of canvas where object selection is drawn
         * @return {CanvasRenderingContext2D}
         */
        getSelectionContext: function() {
          return this.contextTop;
        },
        /**
         * Returns &lt;canvas> element on which object selection is drawn
         * @return {HTMLCanvasElement}
         */
        getSelectionElement: function() {
          return this.upperCanvasEl;
        },
        /**
         * Returns currently active object
         * @return {fabric.Object} active object
         */
        getActiveObject: function() {
          return this._activeObject;
        },
        /**
         * Returns an array with the current selected objects
         * @return {fabric.Object} active object
         */
        getActiveObjects: function() {
          var s = this._activeObject;
          return s ? s.type === "activeSelection" && s._objects ? s._objects.slice(0) : [s] : [];
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
        _onObjectRemoved: function(s) {
          s === this._activeObject && (this.fire("before:selection:cleared", { target: s }), this._discardActiveObject(), this.fire("selection:cleared", { target: s }), s.fire("deselected")), s === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", s);
        },
        /**
         * @private
         * Compares the old activeObject with the current one and fires correct events
         * @param {fabric.Object} obj old activeObject
         */
        _fireSelectionEvents: function(s, i) {
          var o = !1, l = this.getActiveObjects(), d = [], g = [], v = { e: i };
          s.forEach(function(_) {
            l.indexOf(_) === -1 && (o = !0, _.fire("deselected", v), g.push(_));
          }), l.forEach(function(_) {
            s.indexOf(_) === -1 && (o = !0, _.fire("selected", v), d.push(_));
          }), s.length > 0 && l.length > 0 ? (v.selected = d, v.deselected = g, v.updated = d[0] || g[0], v.target = this._activeObject, o && this.fire("selection:updated", v)) : l.length > 0 ? (l.length === 1 && (v.target = d[0], this.fire("object:selected", v)), v.selected = d, v.target = this._activeObject, this.fire("selection:created", v)) : s.length > 0 && (v.deselected = g, this.fire("selection:cleared", v));
        },
        /**
         * Sets given object as the only active object on canvas
         * @param {fabric.Object} object Object to set as an active one
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        setActiveObject: function(s, i) {
          var o = this.getActiveObjects();
          return this._setActiveObject(s, i), this._fireSelectionEvents(o, i), this;
        },
        /**
         * @private
         * @param {Object} object to set as active
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {Boolean} true if the selection happened
         */
        _setActiveObject: function(s, i) {
          return this._activeObject === s || !this._discardActiveObject(i, s) || s.onSelect({ e: i }) ? !1 : (this._activeObject = s, !0);
        },
        /**
         * @private
         */
        _discardActiveObject: function(s, i) {
          var o = this._activeObject;
          if (o) {
            if (o.onDeselect({ e: s, object: i }))
              return !1;
            this._activeObject = null;
          }
          return !0;
        },
        /**
         * Discards currently active object and fire events. If the function is called by fabric
         * as a consequence of a mouse event, the event is passed as a parameter and
         * sent to the fire function for the custom events. When used as a method the
         * e param does not have any application.
         * @param {event} e
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        discardActiveObject: function(s) {
          var i = this.getActiveObjects(), o = this.getActiveObject();
          return i.length && this.fire("before:selection:cleared", { target: o, e: s }), this._discardActiveObject(s), this._fireSelectionEvents(i, s), this;
        },
        /**
         * Clears a canvas element and removes all event listeners
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        dispose: function() {
          var s = this.wrapperEl;
          return this.removeListeners(), s.removeChild(this.upperCanvasEl), s.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach(function(i) {
            u.util.cleanUpJsdomNode(this[i]), this[i] = void 0;
          }.bind(this)), s.parentNode && s.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, u.StaticCanvas.prototype.dispose.call(this), this;
        },
        /**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clear: function() {
          return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
        },
        /**
         * Draws objects' controls (borders/controls)
         * @param {CanvasRenderingContext2D} ctx Context to render controls on
         */
        drawControls: function(s) {
          var i = this._activeObject;
          i && i._renderControls(s);
        },
        /**
         * @private
         */
        _toObject: function(s, i, o) {
          var l = this._realizeGroupTransformOnObject(s), d = this.callSuper("_toObject", s, i, o);
          return this._unwindGroupTransformOnObject(s, l), d;
        },
        /**
         * Realises an object's group transformation on it
         * @private
         * @param {fabric.Object} [instance] the object to transform (gets mutated)
         * @returns the original values of instance which were changed
         */
        _realizeGroupTransformOnObject: function(s) {
          if (s.group && s.group.type === "activeSelection" && this._activeObject === s.group) {
            var i = ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"], o = {};
            return i.forEach(function(l) {
              o[l] = s[l];
            }), this._activeObject.realizeTransform(s), o;
          } else
            return null;
        },
        /**
         * Restores the changed properties of instance
         * @private
         * @param {fabric.Object} [instance] the object to un-transform (gets mutated)
         * @param {Object} [originalValues] the original values of instance, as returned by _realizeGroupTransformOnObject
         */
        _unwindGroupTransformOnObject: function(s, i) {
          i && s.set(i);
        },
        /**
         * @private
         */
        _setSVGObject: function(s, i, o) {
          var l = this._realizeGroupTransformOnObject(i);
          this.callSuper("_setSVGObject", s, i, o), this._unwindGroupTransformOnObject(i, l);
        },
        setViewportTransform: function(s) {
          this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), u.StaticCanvas.prototype.setViewportTransform.call(this, s);
        }
      }
    );
    for (var c in u.StaticCanvas)
      c !== "prototype" && (u.Canvas[c] = u.StaticCanvas[c]);
  }(), function() {
    var f = {
      mt: 0,
      // n
      tr: 1,
      // ne
      mr: 2,
      // e
      br: 3,
      // se
      mb: 4,
      // s
      bl: 5,
      // sw
      ml: 6,
      // w
      tl: 7
      // nw
    }, e = u.util.addListener, h = u.util.removeListener, r = 3, t = 2, a = 1, n = { passive: !1 };
    function c(s, i) {
      return s.button && s.button === i - 1;
    }
    u.util.object.extend(
      u.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Map of cursor style values for each of the object controls
         * @private
         */
        cursorMap: [
          "n-resize",
          "ne-resize",
          "e-resize",
          "se-resize",
          "s-resize",
          "sw-resize",
          "w-resize",
          "nw-resize"
        ],
        /**
         * Contains the id of the touch event that owns the fabric transform
         * @type Number
         * @private
         */
        mainTouchId: null,
        /**
         * Adds mouse listeners to canvas
         * @private
         */
        _initEventListeners: function() {
          this.removeListeners(), this._bindEvents(), this.addOrRemove(e, "add");
        },
        /**
         * return an event prefix pointer or mouse.
         * @private
         */
        _getEventPrefix: function() {
          return this.enablePointerEvents ? "pointer" : "mouse";
        },
        addOrRemove: function(s, i) {
          var o = this.upperCanvasEl, l = this._getEventPrefix();
          s(u.window, "resize", this._onResize), s(o, l + "down", this._onMouseDown), s(o, l + "move", this._onMouseMove, n), s(o, l + "out", this._onMouseOut), s(o, l + "enter", this._onMouseEnter), s(o, "wheel", this._onMouseWheel), s(o, "contextmenu", this._onContextMenu), s(o, "dblclick", this._onDoubleClick), s(o, "dragover", this._onDragOver), s(o, "dragenter", this._onDragEnter), s(o, "dragleave", this._onDragLeave), s(o, "drop", this._onDrop), this.enablePointerEvents || s(o, "touchstart", this._onTouchStart, n), typeof eventjs < "u" && i in eventjs && (eventjs[i](o, "gesture", this._onGesture), eventjs[i](o, "drag", this._onDrag), eventjs[i](o, "orientation", this._onOrientationChange), eventjs[i](o, "shake", this._onShake), eventjs[i](o, "longpress", this._onLongPress));
        },
        /**
         * Removes all event listeners
         */
        removeListeners: function() {
          this.addOrRemove(h, "remove");
          var s = this._getEventPrefix();
          h(u.document, s + "up", this._onMouseUp), h(u.document, "touchend", this._onTouchEnd, n), h(u.document, s + "move", this._onMouseMove, n), h(u.document, "touchmove", this._onMouseMove, n);
        },
        /**
         * @private
         */
        _bindEvents: function() {
          this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._simpleEventHandler.bind(this, "drop"), this.eventsBound = !0);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js gesture
         * @param {Event} [self] Inner Event object
         */
        _onGesture: function(s, i) {
          this.__onTransformGesture && this.__onTransformGesture(s, i);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js drag
         * @param {Event} [self] Inner Event object
         */
        _onDrag: function(s, i) {
          this.__onDrag && this.__onDrag(s, i);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on wheel event
         */
        _onMouseWheel: function(s) {
          this.__onMouseWheel(s);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseOut: function(s) {
          var i = this._hoveredTarget;
          this.fire("mouse:out", { target: i, e: s }), this._hoveredTarget = null, i && i.fire("mouseout", { e: s });
          var o = this;
          this._hoveredTargets.forEach(function(l) {
            o.fire("mouse:out", { target: i, e: s }), l && i.fire("mouseout", { e: s });
          }), this._hoveredTargets = [], this._iTextInstances && this._iTextInstances.forEach(function(l) {
            l.isEditing && l.hiddenTextarea.focus();
          });
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseenter
         */
        _onMouseEnter: function(s) {
          !this.currentTransform && !this.findTarget(s) && (this.fire("mouse:over", { target: null, e: s }), this._hoveredTarget = null, this._hoveredTargets = []);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js orientation change
         * @param {Event} [self] Inner Event object
         */
        _onOrientationChange: function(s, i) {
          this.__onOrientationChange && this.__onOrientationChange(s, i);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
        _onShake: function(s, i) {
          this.__onShake && this.__onShake(s, i);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
        _onLongPress: function(s, i) {
          this.__onLongPress && this.__onLongPress(s, i);
        },
        /**
         * prevent default to allow drop event to be fired
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         */
        _onDragOver: function(s) {
          s.preventDefault();
          var i = this._simpleEventHandler("dragover", s);
          this._fireEnterLeaveEvents(i, s);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onContextMenu: function(s) {
          return this.stopContextMenu && (s.stopPropagation(), s.preventDefault()), !1;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onDoubleClick: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "dblclick"), this._resetTransformEventData(s);
        },
        /**
         * Return a the id of an event.
         * returns either the pointerId or the identifier or 0 for the mouse event
         * @private
         * @param {Event} evt Event object
         */
        getPointerId: function(s) {
          var i = s.changedTouches;
          return i ? i[0] && i[0].identifier : this.enablePointerEvents ? s.pointerId : -1;
        },
        /**
         * Determines if an event has the id of the event that is considered main
         * @private
         * @param {evt} event Event object
         */
        _isMainEvent: function(s) {
          return s.isPrimary === !0 ? !0 : s.isPrimary === !1 ? !1 : s.type === "touchend" && s.touches.length === 0 ? !0 : s.changedTouches ? s.changedTouches[0].identifier === this.mainTouchId : !0;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onTouchStart: function(s) {
          s.preventDefault(), this.mainTouchId === null && (this.mainTouchId = this.getPointerId(s)), this.__onMouseDown(s), this._resetTransformEventData();
          var i = this.upperCanvasEl, o = this._getEventPrefix();
          e(u.document, "touchend", this._onTouchEnd, n), e(u.document, "touchmove", this._onMouseMove, n), h(i, o + "down", this._onMouseDown);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseDown: function(s) {
          this.__onMouseDown(s), this._resetTransformEventData();
          var i = this.upperCanvasEl, o = this._getEventPrefix();
          h(i, o + "move", this._onMouseMove, n), e(u.document, o + "up", this._onMouseUp), e(u.document, o + "move", this._onMouseMove, n);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onTouchEnd: function(s) {
          if (!(s.touches.length > 0)) {
            this.__onMouseUp(s), this._resetTransformEventData(), this.mainTouchId = null;
            var i = this._getEventPrefix();
            h(u.document, "touchend", this._onTouchEnd, n), h(u.document, "touchmove", this._onMouseMove, n);
            var o = this;
            this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
              e(o.upperCanvasEl, i + "down", o._onMouseDown), o._willAddMouseDown = 0;
            }, 400);
          }
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        _onMouseUp: function(s) {
          this.__onMouseUp(s), this._resetTransformEventData();
          var i = this.upperCanvasEl, o = this._getEventPrefix();
          this._isMainEvent(s) && (h(u.document, o + "up", this._onMouseUp), h(u.document, o + "move", this._onMouseMove, n), e(i, o + "move", this._onMouseMove, n));
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        _onMouseMove: function(s) {
          !this.allowTouchScrolling && s.preventDefault && s.preventDefault(), this.__onMouseMove(s);
        },
        /**
         * @private
         */
        _onResize: function() {
          this.calcOffset();
        },
        /**
         * Decides whether the canvas should be redrawn in mouseup and mousedown events.
         * @private
         * @param {Object} target
         */
        _shouldRender: function(s) {
          var i = this._activeObject;
          return !!i != !!s || i && s && i !== s ? !0 : (i && i.isEditing, !1);
        },
        /**
         * Method that defines the actions when mouse is released on canvas.
         * The method resets the currentTransform parameters, store the image corner
         * position in the image object and render the canvas on top.
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        __onMouseUp: function(s) {
          var i, o = this._currentTransform, l = this._groupSelector, d = !1, g = !l || l.left === 0 && l.top === 0;
          if (this._cacheTransformEventData(s), i = this._target, this._handleEvent(s, "up:before"), c(s, r)) {
            this.fireRightClick && this._handleEvent(s, "up", r, g);
            return;
          }
          if (c(s, t)) {
            this.fireMiddleClick && this._handleEvent(s, "up", t, g), this._resetTransformEventData();
            return;
          }
          if (this.isDrawingMode && this._isCurrentlyDrawing) {
            this._onMouseUpInDrawingMode(s);
            return;
          }
          this._isMainEvent(s) && (o && (this._finalizeCurrentTransform(s), d = o.actionPerformed), g || (this._maybeGroupObjects(s), d || (d = this._shouldRender(i))), i && (i.isMoving = !1), this._setCursorFromEvent(s, i), this._handleEvent(s, "up", a, g), this._groupSelector = null, this._currentTransform = null, i && (i.__corner = 0), d ? this.requestRenderAll() : g || this.renderTop());
        },
        /**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @return {Fabric.Object} target return the the target found, for internal reasons.
         */
        _simpleEventHandler: function(s, i) {
          var o = this.findTarget(i), l = this.targets, d = {
            e: i,
            target: o,
            subTargets: l
          };
          if (this.fire(s, d), o && o.fire(s, d), !l)
            return o;
          for (var g = 0; g < l.length; g++)
            l[g].fire(s, d);
          return o;
        },
        /**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @param {fabric.Object} targetObj receiving event
         * @param {Number} [button] button used in the event 1 = left, 2 = middle, 3 = right
         * @param {Boolean} isClick for left button only, indicates that the mouse up happened without move.
         */
        _handleEvent: function(s, i, o, l) {
          var d = this._target, g = this.targets || [], v = {
            e: s,
            target: d,
            subTargets: g,
            button: o || a,
            isClick: l || !1,
            pointer: this._pointer,
            absolutePointer: this._absolutePointer,
            transform: this._currentTransform
          };
          this.fire("mouse:" + i, v), d && d.fire("mouse" + i, v);
          for (var _ = 0; _ < g.length; _++)
            g[_].fire("mouse" + i, v);
        },
        /**
         * @private
         * @param {Event} e send the mouse event that generate the finalize down, so it can be used in the event
         */
        _finalizeCurrentTransform: function(s) {
          var i = this._currentTransform, o = i.target, l, d = {
            e: s,
            target: o,
            transform: i
          };
          o._scaling && (o._scaling = !1), o.setCoords(), (i.actionPerformed || this.stateful && o.hasStateChanged()) && (i.actionPerformed && (l = this._addEventOptions(d, i), this._fire(l, d)), this._fire("modified", d));
        },
        /**
         * Mutate option object in order to add by property and give back the event name.
         * @private
         * @param {Object} options to mutate
         * @param {Object} transform to inspect action from
         */
        _addEventOptions: function(s, i) {
          var o, l;
          switch (i.action) {
            case "scaleX":
              o = "scaled", l = "x";
              break;
            case "scaleY":
              o = "scaled", l = "y";
              break;
            case "skewX":
              o = "skewed", l = "x";
              break;
            case "skewY":
              o = "skewed", l = "y";
              break;
            case "scale":
              o = "scaled", l = "equally";
              break;
            case "rotate":
              o = "rotated";
              break;
            case "drag":
              o = "moved";
              break;
          }
          return s.by = l, o;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseDownInDrawingMode: function(s) {
          this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(s).requestRenderAll(), this.clipTo && u.util.clipContext(this, this.contextTop);
          var i = this.getPointer(s);
          this.freeDrawingBrush.onMouseDown(i, { e: s, pointer: i }), this._handleEvent(s, "down");
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        _onMouseMoveInDrawingMode: function(s) {
          if (this._isCurrentlyDrawing) {
            var i = this.getPointer(s);
            this.freeDrawingBrush.onMouseMove(i, { e: s, pointer: i });
          }
          this.setCursor(this.freeDrawingCursor), this._handleEvent(s, "move");
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        _onMouseUpInDrawingMode: function(s) {
          this.clipTo && this.contextTop.restore();
          var i = this.getPointer(s);
          this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: s, pointer: i }), this._handleEvent(s, "up");
        },
        /**
         * Method that defines the actions when mouse is clicked on canvas.
         * The method inits the currentTransform parameters and renders all the
         * canvas so the current image can be placed on the top canvas and the rest
         * in on the container one.
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        __onMouseDown: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "down:before");
          var i = this._target;
          if (c(s, r)) {
            this.fireRightClick && this._handleEvent(s, "down", r);
            return;
          }
          if (c(s, t)) {
            this.fireMiddleClick && this._handleEvent(s, "down", t);
            return;
          }
          if (this.isDrawingMode) {
            this._onMouseDownInDrawingMode(s);
            return;
          }
          if (this._isMainEvent(s) && !this._currentTransform) {
            var o = this._pointer;
            this._previousPointer = o;
            var l = this._shouldRender(i), d = this._shouldGroup(s, i);
            if (this._shouldClearSelection(s, i) ? this.discardActiveObject(s) : d && (this._handleGrouping(s, i), i = this._activeObject), this.selection && (!i || !i.selectable && !i.isEditing && i !== this._activeObject) && (this._groupSelector = {
              ex: o.x,
              ey: o.y,
              top: 0,
              left: 0
            }), i) {
              var g = i === this._activeObject;
              i.selectable && this.setActiveObject(i, s), i === this._activeObject && (i.__corner || !d) && this._setupCurrentTransform(s, i, g);
            }
            this._handleEvent(s, "down"), (l || d) && this.requestRenderAll();
          }
        },
        /**
         * reset cache form common information needed during event processing
         * @private
         */
        _resetTransformEventData: function() {
          this._target = null, this._pointer = null, this._absolutePointer = null;
        },
        /**
         * Cache common information needed during event processing
         * @private
         * @param {Event} e Event object fired on event
         */
        _cacheTransformEventData: function(s) {
          this._resetTransformEventData(), this._pointer = this.getPointer(s, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(s) || null;
        },
        /**
         * @private
         */
        _beforeTransform: function(s) {
          var i = this._currentTransform;
          this.stateful && i.target.saveState(), this.fire("before:transform", {
            e: s,
            transform: i
          }), i.corner && this.onBeforeScaleRotate(i.target);
        },
        /**
         * Method that defines the actions when mouse is hovering the canvas.
         * The currentTransform parameter will define whether the user is rotating/scaling/translating
         * an image or neither of them (only hovering). A group selection is also possible and would cancel
         * all any other type of action.
         * In case of an image transformation only the top canvas will be rendered.
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        __onMouseMove: function(s) {
          this._handleEvent(s, "move:before"), this._cacheTransformEventData(s);
          var i, o;
          if (this.isDrawingMode) {
            this._onMouseMoveInDrawingMode(s);
            return;
          }
          if (this._isMainEvent(s)) {
            var l = this._groupSelector;
            l ? (o = this._pointer, l.left = o.x - l.ex, l.top = o.y - l.ey, this.renderTop()) : this._currentTransform ? this._transformObject(s) : (i = this.findTarget(s) || null, this._setCursorFromEvent(s, i), this._fireOverOutEvents(i, s)), this._handleEvent(s, "move"), this._resetTransformEventData();
          }
        },
        /**
         * Manage the mouseout, mouseover events for the fabric object on the canvas
         * @param {Fabric.Object} target the target where the target from the mousemove event
         * @param {Event} e Event object fired on mousemove
         * @private
         */
        _fireOverOutEvents: function(s, i) {
          var o = this._hoveredTarget, l = this._hoveredTargets, d = this.targets, g = Math.max(l.length, d.length);
          this.fireSyntheticInOutEvents(s, i, {
            oldTarget: o,
            evtOut: "mouseout",
            canvasEvtOut: "mouse:out",
            evtIn: "mouseover",
            canvasEvtIn: "mouse:over"
          });
          for (var v = 0; v < g; v++)
            this.fireSyntheticInOutEvents(d[v], i, {
              oldTarget: l[v],
              evtOut: "mouseout",
              evtIn: "mouseover"
            });
          this._hoveredTarget = s, this._hoveredTargets = this.targets.concat();
        },
        /**
         * Manage the dragEnter, dragLeave events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the onDrag event
         * @param {Event} e Event object fired on ondrag
         * @private
         */
        _fireEnterLeaveEvents: function(s, i) {
          var o = this._draggedoverTarget, l = this._hoveredTargets, d = this.targets, g = Math.max(l.length, d.length);
          this.fireSyntheticInOutEvents(s, i, {
            oldTarget: o,
            evtOut: "dragleave",
            evtIn: "dragenter"
          });
          for (var v = 0; v < g; v++)
            this.fireSyntheticInOutEvents(d[v], i, {
              oldTarget: l[v],
              evtOut: "dragleave",
              evtIn: "dragenter"
            });
          this._draggedoverTarget = s;
        },
        /**
         * Manage the synthetic in/out events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the supported events
         * @param {Event} e Event object fired
         * @param {Object} config configuration for the function to work
         * @param {String} config.targetName property on the canvas where the old target is stored
         * @param {String} [config.canvasEvtOut] name of the event to fire at canvas level for out
         * @param {String} config.evtOut name of the event to fire for out
         * @param {String} [config.canvasEvtIn] name of the event to fire at canvas level for in
         * @param {String} config.evtIn name of the event to fire for in
         * @private
         */
        fireSyntheticInOutEvents: function(s, i, o) {
          var l, d, g = o.oldTarget, v, _, p = g !== s, C = o.canvasEvtIn, S = o.canvasEvtOut;
          p && (l = { e: i, target: s, previousTarget: g }, d = { e: i, target: g, nextTarget: s }), _ = s && p, v = g && p, v && (S && this.fire(S, d), g.fire(o.evtOut, d)), _ && (C && this.fire(C, l), s.fire(o.evtIn, l));
        },
        /**
         * Method that defines actions when an Event Mouse Wheel
         * @param {Event} e Event object fired on mouseup
         */
        __onMouseWheel: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "wheel"), this._resetTransformEventData();
        },
        /**
         * @private
         * @param {Event} e Event fired on mousemove
         */
        _transformObject: function(s) {
          var i = this.getPointer(s), o = this._currentTransform;
          o.reset = !1, o.target.isMoving = !0, o.shiftKey = s.shiftKey, o.altKey = s[this.centeredKey], this._beforeScaleTransform(s, o), this._performTransformAction(s, o, i), o.actionPerformed && this.requestRenderAll();
        },
        /**
         * @private
         */
        _performTransformAction: function(s, i, o) {
          var l = o.x, d = o.y, g = i.action, v = !1, _ = {
            target: i.target,
            e: s,
            transform: i,
            pointer: o
          };
          g === "rotate" ? (v = this._rotateObject(l, d)) && this._fire("rotating", _) : g === "scale" ? (v = this._onScale(s, i, l, d)) && this._fire("scaling", _) : g === "scaleX" ? (v = this._scaleObject(l, d, "x")) && this._fire("scaling", _) : g === "scaleY" ? (v = this._scaleObject(l, d, "y")) && this._fire("scaling", _) : g === "skewX" ? (v = this._skewObject(l, d, "x")) && this._fire("skewing", _) : g === "skewY" ? (v = this._skewObject(l, d, "y")) && this._fire("skewing", _) : (v = this._translateObject(l, d), v && (this._fire("moving", _), this.setCursor(_.target.moveCursor || this.moveCursor))), i.actionPerformed = i.actionPerformed || v;
        },
        /**
         * @private
         */
        _fire: function(s, i) {
          this.fire("object:" + s, i), i.target.fire(s, i);
        },
        /**
         * @private
         */
        _beforeScaleTransform: function(s, i) {
          if (i.action === "scale" || i.action === "scaleX" || i.action === "scaleY") {
            var o = this._shouldCenterTransform(i.target);
            (o && (i.originX !== "center" || i.originY !== "center") || // Switch from center-based resize to normal one
            !o && i.originX === "center" && i.originY === "center") && (this._resetCurrentTransform(), i.reset = !0);
          }
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {Object} transform current transform
         * @param {Number} x mouse position x from origin
         * @param {Number} y mouse position y from origin
         * @return {Boolean} true if the scaling occurred
         */
        _onScale: function(s, i, o, l) {
          return this._isUniscalePossible(s, i.target) ? (i.currentAction = "scale", this._scaleObject(o, l)) : (!i.reset && i.currentAction === "scale" && this._resetCurrentTransform(), i.currentAction = "scaleEqually", this._scaleObject(o, l, "equally"));
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target current target
         * @return {Boolean} true if unproportional scaling is possible
         */
        _isUniscalePossible: function(s, i) {
          return (s[this.uniScaleKey] || this.uniScaleTransform) && !i.get("lockUniScaling");
        },
        /**
         * Sets the cursor depending on where the canvas is being hovered.
         * Note: very buggy in Opera
         * @param {Event} e Event object
         * @param {Object} target Object that the mouse is hovering, if so.
         */
        _setCursorFromEvent: function(s, i) {
          if (!i)
            return this.setCursor(this.defaultCursor), !1;
          var o = i.hoverCursor || this.hoverCursor, l = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, d = (!l || !l.contains(i)) && i._findTargetCorner(this.getPointer(s, !0));
          d ? this.setCursor(this.getCornerCursor(d, i, s)) : (i.subTargetCheck && this.targets.concat().reverse().map(function(g) {
            o = g.hoverCursor || o;
          }), this.setCursor(o));
        },
        /**
         * @private
         */
        getCornerCursor: function(s, i, o) {
          return this.actionIsDisabled(s, i, o) ? this.notAllowedCursor : s in f ? this._getRotatedCornerCursor(s, i, o) : s === "mtr" && i.hasRotatingPoint ? this.rotationCursor : this.defaultCursor;
        },
        actionIsDisabled: function(s, i, o) {
          return s === "mt" || s === "mb" ? o[this.altActionKey] ? i.lockSkewingX : i.lockScalingY : s === "ml" || s === "mr" ? o[this.altActionKey] ? i.lockSkewingY : i.lockScalingX : s === "mtr" ? i.lockRotation : this._isUniscalePossible(o, i) ? i.lockScalingX && i.lockScalingY : i.lockScalingX || i.lockScalingY;
        },
        /**
         * @private
         */
        _getRotatedCornerCursor: function(s, i, o) {
          var l = Math.round(i.angle % 360 / 45);
          return l < 0 && (l += 8), l += f[s], o[this.altActionKey] && f[s] % 2 === 0 && (l += 2), l %= 8, this.cursorMap[l];
        }
      }
    );
  }(), function() {
    var f = Math.min, e = Math.max;
    u.util.object.extend(
      u.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         * @return {Boolean}
         */
        _shouldGroup: function(h, r) {
          var t = this._activeObject;
          return t && this._isSelectionKeyPressed(h) && r && r.selectable && this.selection && (t !== r || t.type === "activeSelection") && !r.onSelect({ e: h });
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _handleGrouping: function(h, r) {
          var t = this._activeObject;
          t.__corner || r === t && (r = this.findTarget(h, !0), !r || !r.selectable) || (t && t.type === "activeSelection" ? this._updateActiveSelection(r, h) : this._createActiveSelection(r, h));
        },
        /**
         * @private
         */
        _updateActiveSelection: function(h, r) {
          var t = this._activeObject, a = t._objects.slice(0);
          t.contains(h) ? (t.removeWithUpdate(h), this._hoveredTarget = h, this._hoveredTargets = this.targets.concat(), t.size() === 1 && this._setActiveObject(t.item(0), r)) : (t.addWithUpdate(h), this._hoveredTarget = t, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(a, r);
        },
        /**
         * @private
         */
        _createActiveSelection: function(h, r) {
          var t = this.getActiveObjects(), a = this._createGroup(h);
          this._hoveredTarget = a, this._setActiveObject(a, r), this._fireSelectionEvents(t, r);
        },
        /**
         * @private
         * @param {Object} target
         */
        _createGroup: function(h) {
          var r = this._objects, t = r.indexOf(this._activeObject) < r.indexOf(h), a = t ? [this._activeObject, h] : [h, this._activeObject];
          return this._activeObject.isEditing && this._activeObject.exitEditing(), new u.ActiveSelection(a, {
            canvas: this
          });
        },
        /**
         * @private
         * @param {Event} e mouse event
         */
        _groupSelectedObjects: function(h) {
          var r = this._collectObjects(h), t;
          r.length === 1 ? this.setActiveObject(r[0], h) : r.length > 1 && (t = new u.ActiveSelection(r.reverse(), {
            canvas: this
          }), this.setActiveObject(t, h));
        },
        /**
         * @private
         */
        _collectObjects: function(h) {
          for (var r = [], t, a = this._groupSelector.ex, n = this._groupSelector.ey, c = a + this._groupSelector.left, s = n + this._groupSelector.top, i = new u.Point(f(a, c), f(n, s)), o = new u.Point(e(a, c), e(n, s)), l = !this.selectionFullyContained, d = a === c && n === s, g = this._objects.length; g-- && (t = this._objects[g], !(!(!t || !t.selectable || !t.visible) && (l && t.intersectsWithRect(i, o) || t.isContainedWithinRect(i, o) || l && t.containsPoint(i) || l && t.containsPoint(o)) && (r.push(t), d))); )
            ;
          return r.length > 1 && (r = r.filter(function(v) {
            return !v.onSelect({ e: h });
          })), r;
        },
        /**
         * @private
         */
        _maybeGroupObjects: function(h) {
          this.selection && this._groupSelector && this._groupSelectedObjects(h), this.setCursor(this.defaultCursor), this._groupSelector = null;
        }
      }
    );
  }(), function() {
    u.util.object.extend(
      u.StaticCanvas.prototype,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
         * @param {Object} [options] Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by, to have consistent
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 2.0.0
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
         * @example <caption>Generate jpeg dataURL with lower quality</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'jpeg',
         *   quality: 0.8
         * });
         * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   left: 100,
         *   top: 100,
         *   width: 200,
         *   height: 200
         * });
         * @example <caption>Generate double scaled png dataURL</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   multiplier: 2
         * });
         */
        toDataURL: function(f) {
          f || (f = {});
          var e = f.format || "png", h = f.quality || 1, r = (f.multiplier || 1) * (f.enableRetinaScaling ? this.getRetinaScaling() : 1), t = this.toCanvasElement(r, f);
          return u.util.toDataURL(t, e, h);
        },
        /**
         * Create a new HTMLCanvas element painted with the current canvas content.
         * No need to resize the actual one or repaint it.
         * Will transfer object ownership to a new canvas, paint it, and set everything back.
         * This is an intermediary step used to get to a dataUrl but also it is useful to
         * create quick image copies of a canvas without passing for the dataUrl string
         * @param {Number} [multiplier] a zoom factor.
         * @param {Object} [cropping] Cropping informations
         * @param {Number} [cropping.left] Cropping left offset.
         * @param {Number} [cropping.top] Cropping top offset.
         * @param {Number} [cropping.width] Cropping width.
         * @param {Number} [cropping.height] Cropping height.
         */
        toCanvasElement: function(f, e) {
          f = f || 1, e = e || {};
          var h = (e.width || this.width) * f, r = (e.height || this.height) * f, t = this.getZoom(), a = this.width, n = this.height, c = t * f, s = this.viewportTransform, i = (s[4] - (e.left || 0)) * f, o = (s[5] - (e.top || 0)) * f, l = this.interactive, d = [c, 0, 0, c, i, o], g = this.enableRetinaScaling, v = u.util.createCanvasElement(), _ = this.contextTop;
          return v.width = h, v.height = r, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = d, this.width = h, this.height = r, this.calcViewportBoundaries(), this.renderCanvas(v.getContext("2d"), this._objects), this.viewportTransform = s, this.width = a, this.height = n, this.calcViewportBoundaries(), this.interactive = l, this.enableRetinaScaling = g, this.contextTop = _, v;
        }
      }
    );
  }(), u.util.object.extend(
    u.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Populates canvas with data from the specified dataless JSON.
       * JSON format must conform to the one of {@link fabric.Canvas#toDatalessJSON}
       * @deprecated since 1.2.2
       * @param {String|Object} json JSON string or object
       * @param {Function} callback Callback, invoked when json is parsed
       *                            and corresponding objects (e.g: {@link fabric.Image})
       *                            are initialized
       * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
       * @return {fabric.Canvas} instance
       * @chainable
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
       */
      loadFromDatalessJSON: function(f, e, h) {
        return this.loadFromJSON(f, e, h);
      },
      /**
       * Populates canvas with data from the specified JSON.
       * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
       * @param {String|Object} json JSON string or object
       * @param {Function} callback Callback, invoked when json is parsed
       *                            and corresponding objects (e.g: {@link fabric.Image})
       *                            are initialized
       * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
       * @return {fabric.Canvas} instance
       * @chainable
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
       * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
       * @example <caption>loadFromJSON</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
       * @example <caption>loadFromJSON with reviver</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
       *   // `o` = json object
       *   // `object` = fabric.Object instance
       *   // ... do some stuff ...
       * });
       */
      loadFromJSON: function(f, e, h) {
        if (f) {
          var r = typeof f == "string" ? JSON.parse(f) : u.util.object.clone(f), t = this, a = r.clipPath, n = this.renderOnAddRemove;
          return this.renderOnAddRemove = !1, delete r.clipPath, this._enlivenObjects(r.objects, function(c) {
            t.clear(), t._setBgOverlay(r, function() {
              a ? t._enlivenObjects([a], function(s) {
                t.clipPath = s[0], t.__setupCanvas.call(t, r, c, n, e);
              }) : t.__setupCanvas.call(t, r, c, n, e);
            });
          }, h), this;
        }
      },
      /**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Array} restored canvas objects
       * @param {Function} cached renderOnAddRemove callback
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
      __setupCanvas: function(f, e, h, r) {
        var t = this;
        e.forEach(function(a, n) {
          t.insertAt(a, n);
        }), this.renderOnAddRemove = h, delete f.objects, delete f.backgroundImage, delete f.overlayImage, delete f.background, delete f.overlay, this._setOptions(f), this.renderAll(), r && r();
      },
      /**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
      _setBgOverlay: function(f, e) {
        var h = {
          backgroundColor: !1,
          overlayColor: !1,
          backgroundImage: !1,
          overlayImage: !1
        };
        if (!f.backgroundImage && !f.overlayImage && !f.background && !f.overlay) {
          e && e();
          return;
        }
        var r = function() {
          h.backgroundImage && h.overlayImage && h.backgroundColor && h.overlayColor && e && e();
        };
        this.__setBgOverlay("backgroundImage", f.backgroundImage, h, r), this.__setBgOverlay("overlayImage", f.overlayImage, h, r), this.__setBgOverlay("backgroundColor", f.background, h, r), this.__setBgOverlay("overlayColor", f.overlay, h, r);
      },
      /**
       * @private
       * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
       * @param {(Object|String)} value Value to set
       * @param {Object} loaded Set loaded property to true if property is set
       * @param {Object} callback Callback function to invoke after property is set
       */
      __setBgOverlay: function(f, e, h, r) {
        var t = this;
        if (!e) {
          h[f] = !0, r && r();
          return;
        }
        f === "backgroundImage" || f === "overlayImage" ? u.util.enlivenObjects([e], function(a) {
          t[f] = a[0], h[f] = !0, r && r();
        }) : this["set" + u.util.string.capitalize(f, !0)](e, function() {
          h[f] = !0, r && r();
        });
      },
      /**
       * @private
       * @param {Array} objects
       * @param {Function} callback
       * @param {Function} [reviver]
       */
      _enlivenObjects: function(f, e, h) {
        if (!f || f.length === 0) {
          e && e([]);
          return;
        }
        u.util.enlivenObjects(f, function(r) {
          e && e(r);
        }, null, h);
      },
      /**
       * @private
       * @param {String} format
       * @param {Function} callback
       */
      _toDataURL: function(f, e) {
        this.clone(function(h) {
          e(h.toDataURL(f));
        });
      },
      /**
       * @private
       * @param {String} format
       * @param {Number} multiplier
       * @param {Function} callback
       */
      _toDataURLWithMultiplier: function(f, e, h) {
        this.clone(function(r) {
          h(r.toDataURLWithMultiplier(f, e));
        });
      },
      /**
       * Clones canvas instance
       * @param {Object} [callback] Receives cloned instance as a first argument
       * @param {Array} [properties] Array of properties to include in the cloned canvas and children
       */
      clone: function(f, e) {
        var h = JSON.stringify(this.toJSON(e));
        this.cloneWithoutData(function(r) {
          r.loadFromJSON(h, function() {
            f && f(r);
          });
        });
      },
      /**
       * Clones canvas instance without cloning existing data.
       * This essentially copies canvas dimensions, clipping properties, etc.
       * but leaves data empty (so that you can populate it with your own)
       * @param {Object} [callback] Receives cloned instance as a first argument
       */
      cloneWithoutData: function(f) {
        var e = u.util.createCanvasElement();
        e.width = this.width, e.height = this.height;
        var h = new u.Canvas(e);
        h.clipTo = this.clipTo, this.backgroundImage ? (h.setBackgroundImage(this.backgroundImage.src, function() {
          h.renderAll(), f && f(h);
        }), h.backgroundImageOpacity = this.backgroundImageOpacity, h.backgroundImageStretch = this.backgroundImageStretch) : f && f(h);
      }
    }
  ), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.extend, r = e.util.object.clone, t = e.util.toFixed, a = e.util.string.capitalize, n = e.util.degreesToRadians, c = e.StaticCanvas.supports("setLineDash"), s = !e.isLikelyNode, i = 2;
    e.Object || (e.Object = e.util.createClass(
      e.CommonMethods,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Type of an object (rect, circle, path, etc.).
         * Note that this property is meant to be read-only and not meant to be modified.
         * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
         * @type String
         * @default
         */
        type: "object",
        /**
         * Horizontal origin of transformation of an object (one of "left", "right", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
        originX: "left",
        /**
         * Vertical origin of transformation of an object (one of "top", "bottom", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
        originY: "top",
        /**
         * Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}
         * @type Number
         * @default
         */
        top: 0,
        /**
         * Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}
         * @type Number
         * @default
         */
        left: 0,
        /**
         * Object width
         * @type Number
         * @default
         */
        width: 0,
        /**
         * Object height
         * @type Number
         * @default
         */
        height: 0,
        /**
         * Object scale factor (horizontal)
         * @type Number
         * @default
         */
        scaleX: 1,
        /**
         * Object scale factor (vertical)
         * @type Number
         * @default
         */
        scaleY: 1,
        /**
         * When true, an object is rendered as flipped horizontally
         * @type Boolean
         * @default
         */
        flipX: !1,
        /**
         * When true, an object is rendered as flipped vertically
         * @type Boolean
         * @default
         */
        flipY: !1,
        /**
         * Opacity of an object
         * @type Number
         * @default
         */
        opacity: 1,
        /**
         * Angle of rotation of an object (in degrees)
         * @type Number
         * @default
         */
        angle: 0,
        /**
         * Angle of skew on x axes of an object (in degrees)
         * @type Number
         * @default
         */
        skewX: 0,
        /**
         * Angle of skew on y axes of an object (in degrees)
         * @type Number
         * @default
         */
        skewY: 0,
        /**
         * Size of object's controlling corners (in pixels)
         * @type Number
         * @default
         */
        cornerSize: 13,
        /**
         * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
         * @type Boolean
         * @default
         */
        transparentCorners: !0,
        /**
         * Default cursor value used when hovering over this object on canvas
         * @type String
         * @default
         */
        hoverCursor: null,
        /**
         * Default cursor value used when moving this object on canvas
         * @type String
         * @default
         */
        moveCursor: null,
        /**
         * Padding between object and its controlling borders (in pixels)
         * @type Number
         * @default
         */
        padding: 0,
        /**
         * Color of controlling borders of an object (when it's active)
         * @type String
         * @default
         */
        borderColor: "rgba(102,153,255,0.75)",
        /**
         * Array specifying dash pattern of an object's borders (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
        borderDashArray: null,
        /**
         * Color of controlling corners of an object (when it's active)
         * @type String
         * @default
         */
        cornerColor: "rgba(102,153,255,0.5)",
        /**
         * Color of controlling corners of an object (when it's active and transparentCorners false)
         * @since 1.6.2
         * @type String
         * @default
         */
        cornerStrokeColor: null,
        /**
         * Specify style of control, 'rect' or 'circle'
         * @since 1.6.2
         * @type String
         */
        cornerStyle: "rect",
        /**
         * Array specifying dash pattern of an object's control (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
        cornerDashArray: null,
        /**
         * When true, this object will use center point as the origin of transformation
         * when being scaled via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: !1,
        /**
         * When true, this object will use center point as the origin of transformation
         * when being rotated via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: !0,
        /**
         * Color of object's fill
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        fill: "rgb(0,0,0)",
        /**
         * Fill rule used to fill an object
         * accepted values are nonzero, evenodd
         * <b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `fabric.Object#globalCompositeOperation` instead)
         * @type String
         * @default
         */
        fillRule: "nonzero",
        /**
         * Composite rule used for canvas globalCompositeOperation
         * @type String
         * @default
         */
        globalCompositeOperation: "source-over",
        /**
         * Background color of an object.
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        backgroundColor: "",
        /**
         * Selection Background color of an object. colored layer behind the object when it is active.
         * does not mix good with globalCompositeOperation methods.
         * @type String
         * @default
         */
        selectionBackgroundColor: "",
        /**
         * When defined, an object is rendered via stroke and this property specifies its color
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        stroke: null,
        /**
         * Width of a stroke used to render this object
         * @type Number
         * @default
         */
        strokeWidth: 1,
        /**
         * Array specifying dash pattern of an object's stroke (stroke must be defined)
         * @type Array
         */
        strokeDashArray: null,
        /**
         * Line offset of an object's stroke
         * @type Number
         * @default
         */
        strokeDashOffset: 0,
        /**
         * Line endings style of an object's stroke (one of "butt", "round", "square")
         * @type String
         * @default
         */
        strokeLineCap: "butt",
        /**
         * Corner style of an object's stroke (one of "bevil", "round", "miter")
         * @type String
         * @default
         */
        strokeLineJoin: "miter",
        /**
         * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
         * @type Number
         * @default
         */
        strokeMiterLimit: 4,
        /**
         * Shadow object representing shadow of this shape
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * Opacity of object's controlling borders when object is active and moving
         * @type Number
         * @default
         */
        borderOpacityWhenMoving: 0.4,
        /**
         * Scale factor of object's controlling borders
         * bigger number will make a thicker border
         * border is 1, so this is basically a border tickness
         * since there is no way to change the border itself.
         * @type Number
         * @default
         */
        borderScaleFactor: 1,
        /**
         * Transform matrix (similar to SVG's transform matrix)
         * This property has been depreacted. Since caching and and qrDecompose this
         * property can be handled with the standard top,left,scaleX,scaleY,angle and skewX.
         * A documentation example on how to parse and merge a transformMatrix will be provided before
         * completely removing it in fabric 4.0
         * If you are starting a project now, DO NOT use it.
         * @deprecated since 3.2.0
         * @type Array
         */
        transformMatrix: null,
        /**
         * Minimum allowed scale value of an object
         * @type Number
         * @default
         */
        minScaleLimit: 0,
        /**
         * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
         * But events still fire on it.
         * @type Boolean
         * @default
         */
        selectable: !0,
        /**
         * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
         * @type Boolean
         * @default
         */
        evented: !0,
        /**
         * When set to `false`, an object is not rendered on canvas
         * @type Boolean
         * @default
         */
        visible: !0,
        /**
         * When set to `false`, object's controls are not displayed and can not be used to manipulate object
         * @type Boolean
         * @default
         */
        hasControls: !0,
        /**
         * When set to `false`, object's controlling borders are not rendered
         * @type Boolean
         * @default
         */
        hasBorders: !0,
        /**
         * When set to `false`, object's controlling rotating point will not be visible or selectable
         * @type Boolean
         * @default
         */
        hasRotatingPoint: !0,
        /**
         * Offset for object's controlling rotating point (when enabled via `hasRotatingPoint`)
         * @type Number
         * @default
         */
        rotatingPointOffset: 40,
        /**
         * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
         * @type Boolean
         * @default
         */
        perPixelTargetFind: !1,
        /**
         * When `false`, default object's values are not included in its serialization
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * Function that determines clipping of an object (context is passed as a first argument).
         * If you are using code minification, ctx argument can be minified/manglied you should use
         * as a workaround `var ctx = arguments[0];` in the function;
         * Note that context origin is at the object's center point (not left/top corner)
         * @deprecated since 2.0.0
         * @type Function
         */
        clipTo: null,
        /**
         * When `true`, object horizontal movement is locked
         * @type Boolean
         * @default
         */
        lockMovementX: !1,
        /**
         * When `true`, object vertical movement is locked
         * @type Boolean
         * @default
         */
        lockMovementY: !1,
        /**
         * When `true`, object rotation is locked
         * @type Boolean
         * @default
         */
        lockRotation: !1,
        /**
         * When `true`, object horizontal scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingX: !1,
        /**
         * When `true`, object vertical scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingY: !1,
        /**
         * When `true`, object non-uniform scaling is locked
         * @type Boolean
         * @default
         */
        lockUniScaling: !1,
        /**
         * When `true`, object horizontal skewing is locked
         * @type Boolean
         * @default
         */
        lockSkewingX: !1,
        /**
         * When `true`, object vertical skewing is locked
         * @type Boolean
         * @default
         */
        lockSkewingY: !1,
        /**
         * When `true`, object cannot be flipped by scaling into negative values
         * @type Boolean
         * @default
         */
        lockScalingFlip: !1,
        /**
         * When `true`, object is not exported in OBJECT/JSON
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        excludeFromExport: !1,
        /**
         * When `true`, object is cached on an additional canvas.
         * When `false`, object is not cached unless necessary ( clipPath )
         * default to true
         * @since 1.7.0
         * @type Boolean
         * @default true
         */
        objectCaching: s,
        /**
         * When `true`, object properties are checked for cache invalidation. In some particular
         * situation you may want this to be disabled ( spray brush, very big, groups)
         * or if your application does not allow you to modify properties for groups child you want
         * to disable it for groups.
         * default to false
         * since 1.7.0
         * @type Boolean
         * @default false
         */
        statefullCache: !1,
        /**
         * When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
         * too much and will be redrawn with correct details at the end of scaling.
         * this setting is performance and application dependant.
         * default to true
         * since 1.7.0
         * @type Boolean
         * @default true
         */
        noScaleCache: !0,
        /**
         * When `false`, the stoke width will scale with the object.
         * When `true`, the stroke will always match the exact pixel size entered for stroke width.
         * default to false
         * @since 2.6.0
         * @type Boolean
         * @default false
         * @type Boolean
         * @default false
         */
        strokeUniform: !1,
        /**
         * When set to `true`, object's cache will be rerendered next render call.
         * since 1.7.0
         * @type Boolean
         * @default true
         */
        dirty: !0,
        /**
         * keeps the value of the last hovered corner during mouse move.
         * 0 is no corner, or 'mt', 'ml', 'mtr' etc..
         * It should be private, but there is no harm in using it as
         * a read-only property.
         * @type number|string|any
         * @default 0
         */
        __corner: 0,
        /**
         * Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")
         * @type String
         * @default
         */
        paintFirst: "fill",
        /**
         * List of properties to consider when checking if state
         * of an object is changed (fabric.Object#hasStateChanged)
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow clipTo visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "),
        /**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
        cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
        /**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the object has rendered, and the context is placed in the center
         * of the object cacheCanvas.
         * If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'
         * @type fabric.Object
         */
        clipPath: void 0,
        /**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will make the object clip to the outside of the clipPath
         * since 2.4.0
         * @type boolean
         * @default false
         */
        inverted: !1,
        /**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will have its top and left relative to canvas, and will
         * not be influenced by the object transform. This will make the clipPath relative
         * to the canvas, but clipping just a particular object.
         * WARNING this is beta, this feature may change or be renamed.
         * since 2.4.0
         * @type boolean
         * @default false
         */
        absolutePositioned: !1,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(o) {
          o && this.setOptions(o);
        },
        /**
         * Create a the canvas used to keep the cached copy of the object
         * @private
         */
        _createCacheCanvas: function() {
          this._cacheProperties = {}, this._cacheCanvas = e.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
        },
        /**
         * Limit the cache dimensions so that X * Y do not cross fabric.perfLimitSizeTotal
         * and each side do not cross fabric.cacheSideLimit
         * those numbers are configurable so that you can get as much detail as you want
         * making bargain with performances.
         * @param {Object} dims
         * @param {Object} dims.width width of canvas
         * @param {Object} dims.height height of canvas
         * @param {Object} dims.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @param {Object} dims.zoomY zoomY zoom value to unscale the canvas before drawing cache
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _limitCacheSize: function(o) {
          var l = e.perfLimitSizeTotal, d = o.width, g = o.height, v = e.maxCacheSideLimit, _ = e.minCacheSideLimit;
          if (d <= v && g <= v && d * g <= l)
            return d < _ && (o.width = _), g < _ && (o.height = _), o;
          var p = d / g, C = e.util.limitDimsByArea(p, l), S = e.util.capValue, O = S(_, C.x, v), k = S(_, C.y, v);
          return d > O && (o.zoomX /= d / O, o.width = O, o.capped = !0), g > k && (o.zoomY /= g / k, o.height = k, o.capped = !0), o;
        },
        /**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @return {Object}.x width of object to be cached
         * @return {Object}.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _getCacheCanvasDimensions: function() {
          var o = this.getTotalObjectScaling(), l = this._getTransformedDimensions(0, 0), d = l.x * o.scaleX / this.scaleX, g = l.y * o.scaleY / this.scaleY;
          return {
            // for sure this ALIASING_LIMIT is slightly creating problem
            // in situation in which the cache canvas gets an upper limit
            // also objectScale contains already scaleX and scaleY
            width: d + i,
            height: g + i,
            zoomX: o.scaleX,
            zoomY: o.scaleY,
            x: d,
            y: g
          };
        },
        /**
         * Update width and height of the canvas for cache
         * returns true or false if canvas needed resize.
         * @private
         * @return {Boolean} true if the canvas has been resized
         */
        _updateCacheCanvas: function() {
          var o = this.canvas;
          if (this.noScaleCache && o && o._currentTransform) {
            var l = o._currentTransform.target, d = o._currentTransform.action;
            if (this === l && d.slice && d.slice(0, 5) === "scale")
              return !1;
          }
          var g = this._cacheCanvas, v = this._limitCacheSize(this._getCacheCanvasDimensions()), _ = e.minCacheSideLimit, p = v.width, C = v.height, S, O, k = v.zoomX, P = v.zoomY, F = p !== this.cacheWidth || C !== this.cacheHeight, E = this.zoomX !== k || this.zoomY !== P, X = F || E, z = 0, N = 0, J = !1;
          if (F) {
            var T = this._cacheCanvas.width, j = this._cacheCanvas.height, R = p > T || C > j, I = (p < T * 0.9 || C < j * 0.9) && T > _ && j > _;
            J = R || I, R && !v.capped && (p > _ || C > _) && (z = p * 0.1, N = C * 0.1);
          }
          return X ? (J ? (g.width = Math.ceil(p + z), g.height = Math.ceil(C + N)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, g.width, g.height)), S = v.x / 2, O = v.y / 2, this.cacheTranslationX = Math.round(g.width / 2 - S) + S, this.cacheTranslationY = Math.round(g.height / 2 - O) + O, this.cacheWidth = p, this.cacheHeight = C, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(k, P), this.zoomX = k, this.zoomY = P, !0) : !1;
        },
        /**
         * Sets object's properties from options
         * @param {Object} [options] Options object
         */
        setOptions: function(o) {
          this._setOptions(o), this._initGradient(o.fill, "fill"), this._initGradient(o.stroke, "stroke"), this._initClipping(o), this._initPattern(o.fill, "fill"), this._initPattern(o.stroke, "stroke");
        },
        /**
         * Transforms context when rendering an object
         * @param {CanvasRenderingContext2D} ctx Context
         */
        transform: function(o) {
          var l;
          this.group && !this.group._transformDone ? l = this.calcTransformMatrix() : l = this.calcOwnMatrix(), o.transform(l[0], l[1], l[2], l[3], l[4], l[5]);
        },
        /**
         * Returns an object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(o) {
          var l = e.Object.NUM_FRACTION_DIGITS, d = {
            type: this.type,
            version: e.version,
            originX: this.originX,
            originY: this.originY,
            left: t(this.left, l),
            top: t(this.top, l),
            width: t(this.width, l),
            height: t(this.height, l),
            fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
            stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
            strokeWidth: t(this.strokeWidth, l),
            strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
            strokeLineCap: this.strokeLineCap,
            strokeDashOffset: this.strokeDashOffset,
            strokeLineJoin: this.strokeLineJoin,
            // TODO: add this before release
            // strokeUniform:            this.strokeUniform,
            strokeMiterLimit: t(this.strokeMiterLimit, l),
            scaleX: t(this.scaleX, l),
            scaleY: t(this.scaleY, l),
            angle: t(this.angle, l),
            flipX: this.flipX,
            flipY: this.flipY,
            opacity: t(this.opacity, l),
            shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
            visible: this.visible,
            clipTo: this.clipTo && String(this.clipTo),
            backgroundColor: this.backgroundColor,
            fillRule: this.fillRule,
            paintFirst: this.paintFirst,
            globalCompositeOperation: this.globalCompositeOperation,
            transformMatrix: this.transformMatrix ? this.transformMatrix.concat() : null,
            skewX: t(this.skewX, l),
            skewY: t(this.skewY, l)
          };
          return this.clipPath && (d.clipPath = this.clipPath.toObject(o), d.clipPath.inverted = this.clipPath.inverted, d.clipPath.absolutePositioned = this.clipPath.absolutePositioned), e.util.populateWithProperties(this, d, o), this.includeDefaultValues || (d = this._removeDefaultValues(d)), d;
        },
        /**
         * Returns (dataless) object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toDatalessObject: function(o) {
          return this.toObject(o);
        },
        /**
         * @private
         * @param {Object} object
         */
        _removeDefaultValues: function(o) {
          var l = e.util.getKlass(o.type).prototype, d = l.stateProperties;
          return d.forEach(function(g) {
            if (!(g === "left" || g === "top")) {
              o[g] === l[g] && delete o[g];
              var v = Object.prototype.toString.call(o[g]) === "[object Array]" && Object.prototype.toString.call(l[g]) === "[object Array]";
              v && o[g].length === 0 && l[g].length === 0 && delete o[g];
            }
          }), o;
        },
        /**
         * Returns a string representation of an instance
         * @return {String}
         */
        toString: function() {
          return "#<fabric." + a(this.type) + ">";
        },
        /**
         * Return the object scale factor counting also the group scaling
         * @return {Object} object with scaleX and scaleY properties
         */
        getObjectScaling: function() {
          var o = e.util.qrDecompose(this.calcTransformMatrix());
          return { scaleX: Math.abs(o.scaleX), scaleY: Math.abs(o.scaleY) };
        },
        /**
         * Return the object scale factor counting also the group scaling, zoom and retina
         * @return {Object} object with scaleX and scaleY properties
         */
        getTotalObjectScaling: function() {
          var o = this.getObjectScaling(), l = o.scaleX, d = o.scaleY;
          if (this.canvas) {
            var g = this.canvas.getZoom(), v = this.canvas.getRetinaScaling();
            l *= g * v, d *= g * v;
          }
          return { scaleX: l, scaleY: d };
        },
        /**
         * Return the object opacity counting also the group property
         * @return {Number}
         */
        getObjectOpacity: function() {
          var o = this.opacity;
          return this.group && (o *= this.group.getObjectOpacity()), o;
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Object} thisArg
         */
        _set: function(o, l) {
          var d = o === "scaleX" || o === "scaleY", g = this[o] !== l, v = !1;
          return d && (l = this._constrainScale(l)), o === "scaleX" && l < 0 ? (this.flipX = !this.flipX, l *= -1) : o === "scaleY" && l < 0 ? (this.flipY = !this.flipY, l *= -1) : o === "shadow" && l && !(l instanceof e.Shadow) ? l = new e.Shadow(l) : o === "dirty" && this.group && this.group.set("dirty", l), this[o] = l, g && (v = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(o) > -1 ? (this.dirty = !0, v && this.group.set("dirty", !0)) : v && this.stateProperties.indexOf(o) > -1 && this.group.set("dirty", !0)), this;
        },
        /**
         * This callback function is called by the parent group of an object every
         * time a non-delegated property changes on the group. It is passed the key
         * and value as parameters. Not adding in this function's signature to avoid
         * Travis build error about unused variables.
         */
        setOnGroup: function() {
        },
        /**
         * Retrieves viewportTransform from Object's canvas if possible
         * @method getViewportTransform
         * @memberOf fabric.Object.prototype
         * @return {Array}
         */
        getViewportTransform: function() {
          return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : e.iMatrix.concat();
        },
        /*
         * @private
         * return if the object would be visible in rendering
         * @memberOf fabric.Object.prototype
         * @return {Boolean}
         */
        isNotVisible: function() {
          return this.opacity === 0 || this.width === 0 && this.height === 0 && this.strokeWidth === 0 || !this.visible;
        },
        /**
         * Renders an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(o) {
          this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (o.save(), this._setupCompositeOperation(o), this.drawSelectionBackground(o), this.transform(o), this._setOpacity(o), this._setShadow(o, this), this.transformMatrix && o.transform.apply(o, this.transformMatrix), this.clipTo && e.util.clipContext(this, o), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(o)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(o), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), this.clipTo && o.restore(), o.restore());
        },
        renderCache: function(o) {
          o = o || {}, this._cacheCanvas || this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, o.forClipping), this.dirty = !1);
        },
        /**
         * Remove cacheCanvas and its dimensions from the objects
         */
        _removeCacheCanvas: function() {
          this._cacheCanvas = null, this.cacheWidth = 0, this.cacheHeight = 0;
        },
        /**
         * return true if the object will draw a stroke
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an aproximation and be fast.
         * wrote to avoid extra caching, it has to return true when stroke happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the stroke is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
        hasStroke: function() {
          return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
        },
        /**
         * return true if the object will draw a fill
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an aproximation and be fast.
         * wrote to avoid extra caching, it has to return true when fill happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the fill is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
        hasFill: function() {
          return this.fill && this.fill !== "transparent";
        },
        /**
         * When set to `true`, force the object to have its own cache, even if it is inside a group
         * it may be needed when your object behave in a particular way on the cache and always needs
         * its own isolated canvas to render correctly.
         * Created to be overridden
         * since 1.7.12
         * @returns Boolean
         */
        needsItsOwnCache: function() {
          return !!(this.paintFirst === "stroke" && this.hasFill() && this.hasStroke() && typeof this.shadow == "object" || this.clipPath);
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * Read as: cache if is needed, or if the feature is enabled but we are not already caching.
         * @return {Boolean}
         */
        shouldCache: function() {
          return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching;
        },
        /**
         * Check if this object or a child object will cast a shadow
         * used by Group.shouldCache to know if child has a shadow recursively
         * @return {Boolean}
         */
        willDrawShadow: function() {
          return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
        },
        /**
         * Execute the drawing operation for an object clipPath
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawClipPathOnCache: function(o) {
          var l = this.clipPath;
          if (o.save(), l.inverted ? o.globalCompositeOperation = "destination-out" : o.globalCompositeOperation = "destination-in", l.absolutePositioned) {
            var d = e.util.invertTransform(this.calcTransformMatrix());
            o.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
          }
          l.transform(o), o.scale(1 / l.zoomX, 1 / l.zoomY), o.drawImage(l._cacheCanvas, -l.cacheTranslationX, -l.cacheTranslationY), o.restore();
        },
        /**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawObject: function(o, l) {
          var d = this.fill, g = this.stroke;
          l ? (this.fill = "black", this.stroke = "", this._setClippingProperties(o)) : (this._renderBackground(o), this._setStrokeStyles(o, this), this._setFillStyles(o, this)), this._render(o), this._drawClipPath(o), this.fill = d, this.stroke = g;
        },
        _drawClipPath: function(o) {
          var l = this.clipPath;
          l && (l.canvas = this.canvas, l.shouldCache(), l._transformDone = !0, l.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(o));
        },
        /**
         * Paint the cached copy of the object on the target context.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawCacheOnCanvas: function(o) {
          o.scale(1 / this.zoomX, 1 / this.zoomY), o.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
        },
        /**
         * Check if cache is dirty
         * @param {Boolean} skipCanvas skip canvas checks because this object is painted
         * on parent canvas.
         */
        isCacheDirty: function(o) {
          if (this.isNotVisible())
            return !1;
          if (this._cacheCanvas && !o && this._updateCacheCanvas())
            return !0;
          if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
            if (this._cacheCanvas && !o) {
              var l = this.cacheWidth / this.zoomX, d = this.cacheHeight / this.zoomY;
              this._cacheContext.clearRect(-l / 2, -d / 2, l, d);
            }
            return !0;
          }
          return !1;
        },
        /**
         * Draws a background for the object big as its untransformed dimensions
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderBackground: function(o) {
          if (this.backgroundColor) {
            var l = this._getNonTransformedDimensions();
            o.fillStyle = this.backgroundColor, o.fillRect(
              -l.x / 2,
              -l.y / 2,
              l.x,
              l.y
            ), this._removeShadow(o);
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _setOpacity: function(o) {
          this.group && !this.group._transformDone ? o.globalAlpha = this.getObjectOpacity() : o.globalAlpha *= this.opacity;
        },
        _setStrokeStyles: function(o, l) {
          l.stroke && (o.lineWidth = l.strokeWidth, o.lineCap = l.strokeLineCap, o.lineDashOffset = l.strokeDashOffset, o.lineJoin = l.strokeLineJoin, o.miterLimit = l.strokeMiterLimit, o.strokeStyle = l.stroke.toLive ? l.stroke.toLive(o, this) : l.stroke);
        },
        _setFillStyles: function(o, l) {
          l.fill && (o.fillStyle = l.fill.toLive ? l.fill.toLive(o, this) : l.fill);
        },
        _setClippingProperties: function(o) {
          o.globalAlpha = 1, o.strokeStyle = "transparent", o.fillStyle = "#000000";
        },
        /**
         * @private
         * Sets line dash
         * @param {CanvasRenderingContext2D} ctx Context to set the dash line on
         * @param {Array} dashArray array representing dashes
         * @param {Function} alternative function to call if browser does not support lineDash
         */
        _setLineDash: function(o, l, d) {
          !l || l.length === 0 || (1 & l.length && l.push.apply(l, l), c ? o.setLineDash(l) : d && d(o));
        },
        /**
         * Renders controls and borders for the object
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         */
        _renderControls: function(o, l) {
          var d = this.getViewportTransform(), g = this.calcTransformMatrix(), v, _, p;
          l = l || {}, _ = typeof l.hasBorders < "u" ? l.hasBorders : this.hasBorders, p = typeof l.hasControls < "u" ? l.hasControls : this.hasControls, g = e.util.multiplyTransformMatrices(d, g), v = e.util.qrDecompose(g), o.save(), o.translate(v.translateX, v.translateY), o.lineWidth = 1 * this.borderScaleFactor, this.group || (o.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), l.forActiveSelection ? (o.rotate(n(v.angle)), _ && this.drawBordersInGroup(o, v, l)) : (o.rotate(n(this.angle)), _ && this.drawBorders(o, l)), p && this.drawControls(o, l), o.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _setShadow: function(o) {
          if (this.shadow) {
            var l = this.shadow, d = this.canvas, g, v = d && d.viewportTransform[0] || 1, _ = d && d.viewportTransform[3] || 1;
            l.nonScaling ? g = { scaleX: 1, scaleY: 1 } : g = this.getObjectScaling(), d && d._isRetinaScaling() && (v *= e.devicePixelRatio, _ *= e.devicePixelRatio), o.shadowColor = l.color, o.shadowBlur = l.blur * e.browserShadowBlurConstant * (v + _) * (g.scaleX + g.scaleY) / 4, o.shadowOffsetX = l.offsetX * v * g.scaleX, o.shadowOffsetY = l.offsetY * _ * g.scaleY;
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _removeShadow: function(o) {
          this.shadow && (o.shadowColor = "", o.shadowBlur = o.shadowOffsetX = o.shadowOffsetY = 0);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} filler fabric.Pattern or fabric.Gradient
         * @return {Object} offset.offsetX offset for text rendering
         * @return {Object} offset.offsetY offset for text rendering
         */
        _applyPatternGradientTransform: function(o, l) {
          if (!l || !l.toLive)
            return { offsetX: 0, offsetY: 0 };
          var d = l.gradientTransform || l.patternTransform, g = -this.width / 2 + l.offsetX || 0, v = -this.height / 2 + l.offsetY || 0;
          return l.gradientUnits === "percentage" ? o.transform(this.width, 0, 0, this.height, g, v) : o.transform(1, 0, 0, 1, g, v), d && o.transform(d[0], d[1], d[2], d[3], d[4], d[5]), { offsetX: g, offsetY: v };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderPaintInOrder: function(o) {
          this.paintFirst === "stroke" ? (this._renderStroke(o), this._renderFill(o)) : (this._renderFill(o), this._renderStroke(o));
        },
        /**
         * @private
         * function that actually render something on the context.
         * empty here to allow Obects to work on tests to benchmark fabric functionalites
         * not related to rendering
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function() {
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderFill: function(o) {
          this.fill && (o.save(), this._applyPatternGradientTransform(o, this.fill), this.fillRule === "evenodd" ? o.fill("evenodd") : o.fill(), o.restore());
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderStroke: function(o) {
          if (!(!this.stroke || this.strokeWidth === 0)) {
            if (this.shadow && !this.shadow.affectStroke && this._removeShadow(o), o.save(), this.strokeUniform && this.group) {
              var l = this.getObjectScaling();
              o.scale(1 / l.scaleX, 1 / l.scaleY);
            } else
              this.strokeUniform && o.scale(1 / this.scaleX, 1 / this.scaleY);
            this._setLineDash(o, this.strokeDashArray, this._renderDashedStroke), this.stroke.toLive && this.stroke.gradientUnits === "percentage" ? this._applyPatternForTransformedGradient(o, this.stroke) : this._applyPatternGradientTransform(o, this.stroke), o.stroke(), o.restore();
          }
        },
        /**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drwabacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Gradient} filler a fabric gradient instance
         */
        _applyPatternForTransformedGradient: function(o, l) {
          var d = this._limitCacheSize(this._getCacheCanvasDimensions()), g = e.util.createCanvasElement(), v, _ = this.canvas.getRetinaScaling(), p = d.x / this.scaleX / _, C = d.y / this.scaleY / _;
          g.width = p, g.height = C, v = g.getContext("2d"), v.beginPath(), v.moveTo(0, 0), v.lineTo(p, 0), v.lineTo(p, C), v.lineTo(0, C), v.closePath(), v.translate(p / 2, C / 2), v.scale(
            d.zoomX / this.scaleX / _,
            d.zoomY / this.scaleY / _
          ), this._applyPatternGradientTransform(v, l), v.fillStyle = l.toLive(o), v.fill(), o.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), o.scale(
            _ * this.scaleX / d.zoomX,
            _ * this.scaleY / d.zoomY
          ), o.strokeStyle = v.createPattern(g, "no-repeat");
        },
        /**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
        _findCenterFromElement: function() {
          return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
        },
        /**
         * This function is an helper for svg import. it decompose the transformMatrix
         * and assign properties to object.
         * untransformed coordinates
         * @private
         * @chainable
         */
        _assignTransformMatrixProps: function() {
          if (this.transformMatrix) {
            var o = e.util.qrDecompose(this.transformMatrix);
            this.flipX = !1, this.flipY = !1, this.set("scaleX", o.scaleX), this.set("scaleY", o.scaleY), this.angle = o.angle, this.skewX = o.skewX, this.skewY = 0;
          }
        },
        /**
         * This function is an helper for svg import. it removes the transform matrix
         * and set to object properties that fabricjs can handle
         * @private
         * @param {Object} preserveAspectRatioOptions
         * @return {thisArg}
         */
        _removeTransformMatrix: function(o) {
          var l = this._findCenterFromElement();
          this.transformMatrix && (this._assignTransformMatrixProps(), l = e.util.transformPoint(l, this.transformMatrix)), this.transformMatrix = null, o && (this.scaleX *= o.scaleX, this.scaleY *= o.scaleY, this.cropX = o.cropX, this.cropY = o.cropY, l.x += o.offsetLeft, l.y += o.offsetTop, this.width = o.width, this.height = o.height), this.setPositionByOrigin(l, "center", "center");
        },
        /**
         * Clones an instance, using a callback method will work for every object.
         * @param {Function} callback Callback is invoked with a clone as a first argument
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         */
        clone: function(o, l) {
          var d = this.toObject(l);
          this.constructor.fromObject ? this.constructor.fromObject(d, o) : e.Object._fromObject("Object", d, o);
        },
        /**
         * Creates an instance of fabric.Image out of an object
         * could make use of both toDataUrl or toCanvasElement.
         * @param {Function} callback callback, invoked with an instance as a first argument
         * @param {Object} [options] for clone as image, passed to toDataURL
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {fabric.Object} thisArg
         */
        cloneAsImage: function(o, l) {
          var d = this.toCanvasElement(l);
          return o && o(new e.Image(d)), this;
        },
        /**
         * Converts an object into a HTMLCanvas element
         * @param {Object} options Options object
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {HTMLCanvasElement} Returns DOM element <canvas> with the fabric.Object
         */
        toCanvasElement: function(o) {
          o || (o = {});
          var l = e.util, d = l.saveObjectTransform(this), g = this.group, v = this.shadow, _ = Math.abs, p = (o.multiplier || 1) * (o.enableRetinaScaling ? e.devicePixelRatio : 1);
          delete this.group, o.withoutTransform && l.resetObjectTransform(this), o.withoutShadow && (this.shadow = null);
          var C = e.util.createCanvasElement(), S = this.getBoundingRect(!0, !0), O = this.shadow, k, P = { x: 0, y: 0 }, F, E, X;
          O && (F = O.blur, O.nonScaling ? k = { scaleX: 1, scaleY: 1 } : k = this.getObjectScaling(), P.x = 2 * Math.round(_(O.offsetX) + F) * _(k.scaleX), P.y = 2 * Math.round(_(O.offsetY) + F) * _(k.scaleY)), E = S.width + P.x, X = S.height + P.y, C.width = Math.ceil(E), C.height = Math.ceil(X);
          var z = new e.StaticCanvas(C, {
            enableRetinaScaling: !1,
            renderOnAddRemove: !1,
            skipOffscreen: !1
          });
          o.format === "jpeg" && (z.backgroundColor = "#fff"), this.setPositionByOrigin(new e.Point(z.width / 2, z.height / 2), "center", "center");
          var N = this.canvas;
          z.add(this);
          var J = z.toCanvasElement(p || 1, o);
          return this.shadow = v, this.set("canvas", N), g && (this.group = g), this.set(d).setCoords(), z._objects = [], z.dispose(), z = null, J;
        },
        /**
         * Converts an object into a data-url-like string
         * @param {Object} options Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         */
        toDataURL: function(o) {
          return o || (o = {}), e.util.toDataURL(this.toCanvasElement(o), o.format || "png", o.quality || 1);
        },
        /**
         * Returns true if specified type is identical to the type of an instance
         * @param {String} type Type to check against
         * @return {Boolean}
         */
        isType: function(o) {
          return this.type === o;
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance (is 1 unless subclassed)
         */
        complexity: function() {
          return 1;
        },
        /**
         * Returns a JSON representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} JSON
         */
        toJSON: function(o) {
          return this.toObject(o);
        },
        /**
         * Sets gradient (fill or stroke) of an object
         * percentages for x1,x2,y1,y2,r1,r2 together with gradientUnits 'pixels', are not supported.
         * <b>Backwards incompatibility note:</b> This method was named "setGradientFill" until v1.1.0
         * @param {String} property Property name 'stroke' or 'fill'
         * @param {Object} [options] Options object
         * @param {String} [options.type] Type of gradient 'radial' or 'linear'
         * @param {Number} [options.x1=0] x-coordinate of start point
         * @param {Number} [options.y1=0] y-coordinate of start point
         * @param {Number} [options.x2=0] x-coordinate of end point
         * @param {Number} [options.y2=0] y-coordinate of end point
         * @param {Number} [options.r1=0] Radius of start point (only for radial gradients)
         * @param {Number} [options.r2=0] Radius of end point (only for radial gradients)
         * @param {Object} [options.colorStops] Color stops object eg. {0: 'ff0000', 1: '000000'}
         * @param {Object} [options.gradientTransform] transformMatrix for gradient
         * @return {fabric.Object} thisArg
         * @chainable
         * @deprecated since 3.4.0
         * @see {@link http://jsfiddle.net/fabricjs/58y8b/|jsFiddle demo}
         * @example <caption>Set linear gradient</caption>
         * object.setGradient('fill', {
         *   type: 'linear',
         *   x1: -object.width / 2,
         *   y1: 0,
         *   x2: object.width / 2,
         *   y2: 0,
         *   colorStops: {
         *     0: 'red',
         *     0.5: '#005555',
         *     1: 'rgba(0,0,255,0.5)'
         *   }
         * });
         * canvas.renderAll();
         * @example <caption>Set radial gradient</caption>
         * object.setGradient('fill', {
         *   type: 'radial',
         *   x1: 0,
         *   y1: 0,
         *   x2: 0,
         *   y2: 0,
         *   r1: object.width / 2,
         *   r2: 10,
         *   colorStops: {
         *     0: 'red',
         *     0.5: '#005555',
         *     1: 'rgba(0,0,255,0.5)'
         *   }
         * });
         * canvas.renderAll();
         */
        setGradient: function(o, l) {
          l || (l = {});
          var d = { colorStops: [] };
          return d.type = l.type || (l.r1 || l.r2 ? "radial" : "linear"), d.coords = {
            x1: l.x1,
            y1: l.y1,
            x2: l.x2,
            y2: l.y2
          }, d.gradientUnits = l.gradientUnits || "pixels", (l.r1 || l.r2) && (d.coords.r1 = l.r1, d.coords.r2 = l.r2), d.gradientTransform = l.gradientTransform, e.Gradient.prototype.addColorStop.call(d, l.colorStops), this.set(o, e.Gradient.forObject(this, d));
        },
        /**
         * Sets pattern fill of an object
         * @param {Object} options Options object
         * @param {(String|HTMLImageElement)} options.source Pattern source
         * @param {String} [options.repeat=repeat] Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
         * @param {Number} [options.offsetX=0] Pattern horizontal offset from object's left/top corner
         * @param {Number} [options.offsetY=0] Pattern vertical offset from object's left/top corner
         * @param {Function} [callback] Callback to invoke when image set as a pattern
         * @return {fabric.Object} thisArg
         * @chainable
         * @deprecated since 3.5.0
         * @see {@link http://jsfiddle.net/fabricjs/QT3pa/|jsFiddle demo}
         * @example <caption>Set pattern</caption>
         * object.setPatternFill({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat'
         * },canvas.renderAll.bind(canvas));
         */
        setPatternFill: function(o, l) {
          return this.set("fill", new e.Pattern(o, l));
        },
        /**
         * Sets {@link fabric.Object#shadow|shadow} of an object
         * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
         * @param {String} [options.color=rgb(0,0,0)] Shadow color
         * @param {Number} [options.blur=0] Shadow blur
         * @param {Number} [options.offsetX=0] Shadow horizontal offset
         * @param {Number} [options.offsetY=0] Shadow vertical offset
         * @return {fabric.Object} thisArg
         * @chainable
         * @deprecated since 3.5.0
         * @see {@link http://jsfiddle.net/fabricjs/7gvJG/|jsFiddle demo}
         * @example <caption>Set shadow with string notation</caption>
         * object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
         * canvas.renderAll();
         * @example <caption>Set shadow with object notation</caption>
         * object.setShadow({
         *   color: 'red',
         *   blur: 10,
         *   offsetX: 20,
         *   offsetY: 20
         * });
         * canvas.renderAll();
         */
        setShadow: function(o) {
          return this.set("shadow", o ? new e.Shadow(o) : null);
        },
        /**
         * Sets "color" of an instance (alias of `set('fill', &hellip;)`)
         * @param {String} color Color value
         * @return {fabric.Object} thisArg
         * @deprecated since 3.5.0
         * @chainable
         */
        setColor: function(o) {
          return this.set("fill", o), this;
        },
        /**
         * Sets "angle" of an instance with centered rotation
         * @param {Number} angle Angle value (in degrees)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        rotate: function(o) {
          var l = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
          return l && this._setOriginToCenter(), this.set("angle", o), l && this._resetOrigin(), this;
        },
        /**
         * Centers object horizontally on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        centerH: function() {
          return this.canvas && this.canvas.centerObjectH(this), this;
        },
        /**
         * Centers object horizontally on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenterH: function() {
          return this.canvas && this.canvas.viewportCenterObjectH(this), this;
        },
        /**
         * Centers object vertically on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        centerV: function() {
          return this.canvas && this.canvas.centerObjectV(this), this;
        },
        /**
         * Centers object vertically on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenterV: function() {
          return this.canvas && this.canvas.viewportCenterObjectV(this), this;
        },
        /**
         * Centers object vertically and horizontally on canvas to which is was added last
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        center: function() {
          return this.canvas && this.canvas.centerObject(this), this;
        },
        /**
         * Centers object on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenter: function() {
          return this.canvas && this.canvas.viewportCenterObject(this), this;
        },
        /**
         * Returns coordinates of a pointer relative to an object
         * @param {Event} e Event to operate upon
         * @param {Object} [pointer] Pointer to operate upon (instead of event)
         * @return {Object} Coordinates of a pointer (x, y)
         */
        getLocalPointer: function(o, l) {
          l = l || this.canvas.getPointer(o);
          var d = new e.Point(l.x, l.y), g = this._getLeftTopCoords();
          return this.angle && (d = e.util.rotatePoint(
            d,
            g,
            n(-this.angle)
          )), {
            x: d.x - g.x,
            y: d.y - g.y
          };
        },
        /**
         * Sets canvas globalCompositeOperation for specific object
         * custom composition operation for the particular object can be specified using globalCompositeOperation property
         * @param {CanvasRenderingContext2D} ctx Rendering canvas context
         */
        _setupCompositeOperation: function(o) {
          this.globalCompositeOperation && (o.globalCompositeOperation = this.globalCompositeOperation);
        }
      }
    ), e.util.createAccessors && e.util.createAccessors(e.Object), h(e.Object.prototype, e.Observable), e.Object.NUM_FRACTION_DIGITS = 2, e.Object._fromObject = function(o, l, d, g) {
      var v = e[o];
      l = r(l, !0), e.util.enlivenPatterns([l.fill, l.stroke], function(_) {
        typeof _[0] < "u" && (l.fill = _[0]), typeof _[1] < "u" && (l.stroke = _[1]), e.util.enlivenObjects([l.clipPath], function(p) {
          l.clipPath = p[0];
          var C = g ? new v(l[g], l) : new v(l);
          d && d(C);
        });
      });
    }, e.Object.__uid = 0);
  }(m), function() {
    var f = u.util.degreesToRadians, e = {
      left: -0.5,
      center: 0,
      right: 0.5
    }, h = {
      top: -0.5,
      center: 0,
      bottom: 0.5
    };
    u.util.object.extend(
      u.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Translates the coordinates from a set of origin to another (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} fromOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @param {String} toOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} toOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToGivenOrigin: function(r, t, a, n, c) {
          var s = r.x, i = r.y, o, l, d;
          return typeof t == "string" ? t = e[t] : t -= 0.5, typeof n == "string" ? n = e[n] : n -= 0.5, o = n - t, typeof a == "string" ? a = h[a] : a -= 0.5, typeof c == "string" ? c = h[c] : c -= 0.5, l = c - a, (o || l) && (d = this._getTransformedDimensions(), s = r.x + o * d.x, i = r.y + l * d.y), new u.Point(s, i);
        },
        /**
         * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToCenterPoint: function(r, t, a) {
          var n = this.translateToGivenOrigin(r, t, a, "center", "center");
          return this.angle ? u.util.rotatePoint(n, r, f(this.angle)) : n;
        },
        /**
         * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
         * @param {fabric.Point} center The point which corresponds to center of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToOriginPoint: function(r, t, a) {
          var n = this.translateToGivenOrigin(r, "center", "center", t, a);
          return this.angle ? u.util.rotatePoint(n, r, f(this.angle)) : n;
        },
        /**
         * Returns the real center coordinates of the object
         * @return {fabric.Point}
         */
        getCenterPoint: function() {
          var r = new u.Point(this.left, this.top);
          return this.translateToCenterPoint(r, this.originX, this.originY);
        },
        /**
         * Returns the coordinates of the object based on center coordinates
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @return {fabric.Point}
         */
        // getOriginPoint: function(center) {
        //   return this.translateToOriginPoint(center, this.originX, this.originY);
        // },
        /**
         * Returns the coordinates of the object as if it has a different origin
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        getPointByOrigin: function(r, t) {
          var a = this.getCenterPoint();
          return this.translateToOriginPoint(a, r, t);
        },
        /**
         * Returns the point in local coordinates
         * @param {fabric.Point} point The point relative to the global coordinate system
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        toLocalPoint: function(r, t, a) {
          var n = this.getCenterPoint(), c, s;
          return typeof t < "u" && typeof a < "u" ? c = this.translateToGivenOrigin(n, "center", "center", t, a) : c = new u.Point(this.left, this.top), s = new u.Point(r.x, r.y), this.angle && (s = u.util.rotatePoint(s, n, -f(this.angle))), s.subtractEquals(c);
        },
        /**
         * Returns the point in global coordinates
         * @param {fabric.Point} The point relative to the local coordinate system
         * @return {fabric.Point}
         */
        // toGlobalPoint: function(point) {
        //   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
        // },
        /**
         * Sets the position of the object taking into consideration the object's origin
         * @param {fabric.Point} pos The new position of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {void}
         */
        setPositionByOrigin: function(r, t, a) {
          var n = this.translateToCenterPoint(r, t, a), c = this.translateToOriginPoint(n, this.originX, this.originY);
          this.set("left", c.x), this.set("top", c.y);
        },
        /**
         * @param {String} to One of 'left', 'center', 'right'
         */
        adjustPosition: function(r) {
          var t = f(this.angle), a = this.getScaledWidth(), n = u.util.cos(t) * a, c = u.util.sin(t) * a, s, i;
          typeof this.originX == "string" ? s = e[this.originX] : s = this.originX - 0.5, typeof r == "string" ? i = e[r] : i = r - 0.5, this.left += n * (i - s), this.top += c * (i - s), this.setCoords(), this.originX = r;
        },
        /**
         * Sets the origin/position of the object to it's center point
         * @private
         * @return {void}
         */
        _setOriginToCenter: function() {
          this._originalOriginX = this.originX, this._originalOriginY = this.originY;
          var r = this.getCenterPoint();
          this.originX = "center", this.originY = "center", this.left = r.x, this.top = r.y;
        },
        /**
         * Resets the origin/position of the object to it's original origin
         * @private
         * @return {void}
         */
        _resetOrigin: function() {
          var r = this.translateToOriginPoint(
            this.getCenterPoint(),
            this._originalOriginX,
            this._originalOriginY
          );
          this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = r.x, this.top = r.y, this._originalOriginX = null, this._originalOriginY = null;
        },
        /**
         * @private
         */
        _getLeftTopCoords: function() {
          return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
        }
      }
    );
  }(), function() {
    function f(t) {
      return [
        new u.Point(t.tl.x, t.tl.y),
        new u.Point(t.tr.x, t.tr.y),
        new u.Point(t.br.x, t.br.y),
        new u.Point(t.bl.x, t.bl.y)
      ];
    }
    var e = u.util.degreesToRadians, h = u.util.multiplyTransformMatrices, r = u.util.transformPoint;
    u.util.object.extend(
      u.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Describe object's corner position in canvas element coordinates.
         * properties are tl,mt,tr,ml,mr,bl,mb,br,mtr for the main controls.
         * each property is an object with x, y and corner.
         * The `corner` property contains in a similar manner the 4 points of the
         * interactive area of the corner.
         * The coordinates depends from this properties: width, height, scaleX, scaleY
         * skewX, skewY, angle, strokeWidth, viewportTransform, top, left, padding.
         * The coordinates get updated with @method setCoords.
         * You can calculate them without updating with @method calcCoords;
         * @memberOf fabric.Object.prototype
         */
        oCoords: null,
        /**
         * Describe object's corner position in canvas object absolute coordinates
         * properties are tl,tr,bl,br and describe the four main corner.
         * each property is an object with x, y, instance of Fabric.Point.
         * The coordinates depends from this properties: width, height, scaleX, scaleY
         * skewX, skewY, angle, strokeWidth, top, left.
         * Those coordinates are useful to understand where an object is. They get updated
         * with oCoords but they do not need to be updated when zoom or panning change.
         * The coordinates get updated with @method setCoords.
         * You can calculate them without updating with @method calcCoords(true);
         * @memberOf fabric.Object.prototype
         */
        aCoords: null,
        /**
         * storage for object transform matrix
         */
        ownMatrixCache: null,
        /**
         * storage for object full transform matrix
         */
        matrixCache: null,
        /**
         * return correct set of coordinates for intersection
         */
        getCoords: function(t, a) {
          this.oCoords || this.setCoords();
          var n = t ? this.aCoords : this.oCoords;
          return f(a ? this.calcCoords(t) : n);
        },
        /**
         * Checks if object intersects with an area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with an area formed by 2 points
         */
        intersectsWithRect: function(t, a, n, c) {
          var s = this.getCoords(n, c), i = u.Intersection.intersectPolygonRectangle(
            s,
            t,
            a
          );
          return i.status === "Intersection";
        },
        /**
         * Checks if object intersects with another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with another object
         */
        intersectsWithObject: function(t, a, n) {
          var c = u.Intersection.intersectPolygonPolygon(
            this.getCoords(a, n),
            t.getCoords(a, n)
          );
          return c.status === "Intersection" || t.isContainedWithinObject(this, a, n) || this.isContainedWithinObject(t, a, n);
        },
        /**
         * Checks if object is fully contained within area of another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area of another object
         */
        isContainedWithinObject: function(t, a, n) {
          for (var c = this.getCoords(a, n), s = 0, i = t._getImageLines(
            n ? t.calcCoords(a) : a ? t.aCoords : t.oCoords
          ); s < 4; s++)
            if (!t.containsPoint(c[s], i))
              return !1;
          return !0;
        },
        /**
         * Checks if object is fully contained within area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area formed by 2 points
         */
        isContainedWithinRect: function(t, a, n, c) {
          var s = this.getBoundingRect(n, c);
          return s.left >= t.x && s.left + s.width <= a.x && s.top >= t.y && s.top + s.height <= a.y;
        },
        /**
         * Checks if point is inside the object
         * @param {fabric.Point} point Point to check against
         * @param {Object} [lines] object returned from @method _getImageLines
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if point is inside the object
         */
        containsPoint: function(t, s, n, c) {
          var s = s || this._getImageLines(
            c ? this.calcCoords(n) : n ? this.aCoords : this.oCoords
          ), i = this._findCrossPoints(t, s);
          return i !== 0 && i % 2 === 1;
        },
        /**
         * Checks if object is contained within the canvas with current viewportTransform
         * the check is done stopping at first point that appears on screen
         * @param {Boolean} [calculate] use coordinates of current position instead of .aCoords
         * @return {Boolean} true if object is fully or partially contained within canvas
         */
        isOnScreen: function(t) {
          if (!this.canvas)
            return !1;
          for (var a = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br, c = this.getCoords(!0, t), s, i = 0; i < 4; i++)
            if (s = c[i], s.x <= n.x && s.x >= a.x && s.y <= n.y && s.y >= a.y)
              return !0;
          return this.intersectsWithRect(a, n, !0, t) ? !0 : this._containsCenterOfCanvas(a, n, t);
        },
        /**
         * Checks if the object contains the midpoint between canvas extremities
         * Does not make sense outside the context of isOnScreen and isPartiallyOnScreen
         * @private
         * @param {Fabric.Point} pointTL Top Left point
         * @param {Fabric.Point} pointBR Top Right point
         * @param {Boolean} calculate use coordinates of current position instead of .oCoords
         * @return {Boolean} true if the object contains the point
         */
        _containsCenterOfCanvas: function(t, a, n) {
          var c = { x: (t.x + a.x) / 2, y: (t.y + a.y) / 2 };
          return !!this.containsPoint(c, null, !0, n);
        },
        /**
         * Checks if object is partially contained within the canvas with current viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is partially contained within canvas
         */
        isPartiallyOnScreen: function(t) {
          if (!this.canvas)
            return !1;
          var a = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br;
          return this.intersectsWithRect(a, n, !0, t) ? !0 : this._containsCenterOfCanvas(a, n, t);
        },
        /**
         * Method that returns an object with the object edges in it, given the coordinates of the corners
         * @private
         * @param {Object} oCoords Coordinates of the object corners
         */
        _getImageLines: function(t) {
          return {
            topline: {
              o: t.tl,
              d: t.tr
            },
            rightline: {
              o: t.tr,
              d: t.br
            },
            bottomline: {
              o: t.br,
              d: t.bl
            },
            leftline: {
              o: t.bl,
              d: t.tl
            }
          };
        },
        /**
         * Helper method to determine how many cross points are between the 4 object edges
         * and the horizontal line determined by a point on canvas
         * @private
         * @param {fabric.Point} point Point to check
         * @param {Object} lines Coordinates of the object being evaluated
         */
        // remove yi, not used but left code here just in case.
        _findCrossPoints: function(t, a) {
          var n, c, s, i, o, l = 0, d;
          for (var g in a)
            if (d = a[g], !(d.o.y < t.y && d.d.y < t.y) && !(d.o.y >= t.y && d.d.y >= t.y) && (d.o.x === d.d.x && d.o.x >= t.x ? o = d.o.x : (n = 0, c = (d.d.y - d.o.y) / (d.d.x - d.o.x), s = t.y - n * t.x, i = d.o.y - c * d.o.x, o = -(s - i) / (n - c)), o >= t.x && (l += 1), l === 2))
              break;
          return l;
        },
        /**
         * Returns coordinates of object's bounding rectangle (left, top, width, height)
         * the box is intended as aligned to axis of canvas.
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords / .aCoords
         * @return {Object} Object with left, top, width, height properties
         */
        getBoundingRect: function(t, a) {
          var n = this.getCoords(t, a);
          return u.util.makeBoundingBoxFromPoints(n);
        },
        /**
         * Returns width of an object's bounding box counting transformations
         * before 2.0 it was named getWidth();
         * @return {Number} width value
         */
        getScaledWidth: function() {
          return this._getTransformedDimensions().x;
        },
        /**
         * Returns height of an object bounding box counting transformations
         * before 2.0 it was named getHeight();
         * @return {Number} height value
         */
        getScaledHeight: function() {
          return this._getTransformedDimensions().y;
        },
        /**
         * Makes sure the scale is valid and modifies it if necessary
         * @private
         * @param {Number} value
         * @return {Number}
         */
        _constrainScale: function(t) {
          return Math.abs(t) < this.minScaleLimit ? t < 0 ? -this.minScaleLimit : this.minScaleLimit : t === 0 ? 1e-4 : t;
        },
        /**
         * Scales an object (equally by x and y)
         * @param {Number} value Scale factor
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scale: function(t) {
          return this._set("scaleX", t), this._set("scaleY", t), this.setCoords();
        },
        /**
         * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New width value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scaleToWidth: function(t, a) {
          var n = this.getBoundingRect(a).width / this.getScaledWidth();
          return this.scale(t / this.width / n);
        },
        /**
         * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New height value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scaleToHeight: function(t, a) {
          var n = this.getBoundingRect(a).height / this.getScaledHeight();
          return this.scale(t / this.height / n);
        },
        /**
         * Calculates and returns the .coords of an object.
         * @return {Object} Object with tl, tr, br, bl ....
         * @chainable
         */
        calcCoords: function(t) {
          var a = this._calcRotateMatrix(), n = this._calcTranslateMatrix(), c = h(n, a), s = this.getViewportTransform(), i = t ? c : h(s, c), o = this._getTransformedDimensions(), l = o.x / 2, d = o.y / 2, g = r({ x: -l, y: -d }, i), v = r({ x: l, y: -d }, i), _ = r({ x: -l, y: d }, i), p = r({ x: l, y: d }, i);
          if (!t) {
            var C = this.padding, S = e(this.angle), O = u.util.cos(S), k = u.util.sin(S), P = O * C, F = k * C, E = P + F, X = P - F;
            C && (g.x -= X, g.y -= E, v.x += E, v.y -= X, _.x -= E, _.y += X, p.x += X, p.y += E);
            var z = new u.Point((g.x + _.x) / 2, (g.y + _.y) / 2), N = new u.Point((v.x + g.x) / 2, (v.y + g.y) / 2), J = new u.Point((p.x + v.x) / 2, (p.y + v.y) / 2), T = new u.Point((p.x + _.x) / 2, (p.y + _.y) / 2), j = new u.Point(N.x + k * this.rotatingPointOffset, N.y - O * this.rotatingPointOffset);
          }
          var R = {
            // corners
            tl: g,
            tr: v,
            br: p,
            bl: _
          };
          return t || (R.ml = z, R.mt = N, R.mr = J, R.mb = T, R.mtr = j), R;
        },
        /**
         * Sets corner position coordinates based on current angle, width and height.
         * See {@link https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords|When-to-call-setCoords}
         * @param {Boolean} [ignoreZoom] set oCoords with or without the viewport transform.
         * @param {Boolean} [skipAbsolute] skip calculation of aCoords, useful in setViewportTransform
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setCoords: function(t, a) {
          return this.oCoords = this.calcCoords(t), a || (this.aCoords = this.calcCoords(!0)), t || this._setCornerCoords && this._setCornerCoords(), this;
        },
        /**
         * calculate rotation matrix of an object
         * @return {Array} rotation matrix for the object
         */
        _calcRotateMatrix: function() {
          return u.util.calcRotateMatrix(this);
        },
        /**
         * calculate the translation matrix for an object transform
         * @return {Array} rotation matrix for the object
         */
        _calcTranslateMatrix: function() {
          var t = this.getCenterPoint();
          return [1, 0, 0, 1, t.x, t.y];
        },
        transformMatrixKey: function(t) {
          var a = "_", n = "";
          return !t && this.group && (n = this.group.transformMatrixKey(t) + a), n + this.top + a + this.left + a + this.scaleX + a + this.scaleY + a + this.skewX + a + this.skewY + a + this.angle + a + this.originX + a + this.originY + a + this.width + a + this.height + a + this.strokeWidth + this.flipX + this.flipY;
        },
        /**
         * calculate transform matrix that represents the current transformations from the
         * object's properties.
         * @param {Boolean} [skipGroup] return transform matrix for object not counting parent transformations
         * @return {Array} transform matrix for the object
         */
        calcTransformMatrix: function(t) {
          if (t)
            return this.calcOwnMatrix();
          var a = this.transformMatrixKey(), n = this.matrixCache || (this.matrixCache = {});
          if (n.key === a)
            return n.value;
          var c = this.calcOwnMatrix();
          return this.group && (c = h(this.group.calcTransformMatrix(), c)), n.key = a, n.value = c, c;
        },
        /**
         * calculate transform matrix that represents the current transformations from the
         * object's properties, this matrix does not include the group transformation
         * @return {Array} transform matrix for the object
         */
        calcOwnMatrix: function() {
          var t = this.transformMatrixKey(!0), a = this.ownMatrixCache || (this.ownMatrixCache = {});
          if (a.key === t)
            return a.value;
          var n = this._calcTranslateMatrix();
          return this.translateX = n[4], this.translateY = n[5], a.key = t, a.value = u.util.composeMatrix(this), a.value;
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         * @deprecated since 3.4.0, please use fabric.util._calcDimensionsTransformMatrix
         * not including or including flipX, flipY to emulate the flipping boolean
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _calcDimensionsTransformMatrix: function(t, a, n) {
          return u.util.calcDimensionsMatrix({
            skewX: t,
            skewY: a,
            scaleX: this.scaleX * (n && this.flipX ? -1 : 1),
            scaleY: this.scaleY * (n && this.flipY ? -1 : 1)
          });
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _getNonTransformedDimensions: function() {
          var t = this.strokeWidth, a = this.width + t, n = this.height + t;
          return { x: a, y: n };
        },
        /*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * The skewX and skewY parameters are used in the skewing logic path and
         * do not provide something useful to common use cases.
         * @param {Number} [skewX], a value to override current skewX
         * @param {Number} [skewY], a value to override current skewY
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _getTransformedDimensions: function(t, a) {
          typeof t > "u" && (t = this.skewX), typeof a > "u" && (a = this.skewY);
          var n = this._getNonTransformedDimensions(), c, s, i = t === 0 && a === 0;
          if (this.strokeUniform ? (c = this.width, s = this.height) : (c = n.x, s = n.y), i)
            return this._finalizeDimensions(c * this.scaleX, s * this.scaleY);
          c /= 2, s /= 2;
          var o = [
            {
              x: -c,
              y: -s
            },
            {
              x: c,
              y: -s
            },
            {
              x: -c,
              y: s
            },
            {
              x: c,
              y: s
            }
          ], l = u.util.calcDimensionsMatrix({
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: t,
            skewY: a
          }), d = u.util.makeBoundingBoxFromPoints(o, l);
          return this._finalizeDimensions(d.width, d.height);
        },
        /*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param Number width width of the bbox
         * @param Number height height of the bbox
         * @private
         * @return {Object} .x finalized width dimension
         * @return {Object} .y finalized height dimension
         */
        _finalizeDimensions: function(t, a) {
          return this.strokeUniform ? { x: t + this.strokeWidth, y: a + this.strokeWidth } : { x: t, y: a };
        },
        /*
         * Calculate object dimensions for controls, including padding and canvas zoom.
         * private
         */
        _calculateCurrentDimensions: function() {
          var t = this.getViewportTransform(), a = this._getTransformedDimensions(), n = u.util.transformPoint(a, t, !0);
          return n.scalarAdd(2 * this.padding);
        }
      }
    );
  }(), u.util.object.extend(
    u.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * Moves an object to the bottom of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
      sendToBack: function() {
        return this.group ? u.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
      },
      /**
       * Moves an object to the top of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
      bringToFront: function() {
        return this.group ? u.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
      },
      /**
       * Moves an object down in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      sendBackwards: function(f) {
        return this.group ? u.StaticCanvas.prototype.sendBackwards.call(this.group, this, f) : this.canvas && this.canvas.sendBackwards(this, f), this;
      },
      /**
       * Moves an object up in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      bringForward: function(f) {
        return this.group ? u.StaticCanvas.prototype.bringForward.call(this.group, this, f) : this.canvas && this.canvas.bringForward(this, f), this;
      },
      /**
       * Moves an object to specified level in stack of drawn objects
       * @param {Number} index New position of object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      moveTo: function(f) {
        return this.group && this.group.type !== "activeSelection" ? u.StaticCanvas.prototype.moveTo.call(this.group, this, f) : this.canvas && this.canvas.moveTo(this, f), this;
      }
    }
  ), function() {
    function f(h, r) {
      if (r) {
        if (r.toLive)
          return h + ": url(#SVGID_" + r.id + "); ";
        var t = new u.Color(r), a = h + ": " + t.toRgb() + "; ", n = t.getAlpha();
        return n !== 1 && (a += h + "-opacity: " + n.toString() + "; "), a;
      } else
        return h + ": none; ";
    }
    var e = u.util.toFixed;
    u.util.object.extend(
      u.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
        getSvgStyles: function(h) {
          var r = this.fillRule ? this.fillRule : "nonzero", t = this.strokeWidth ? this.strokeWidth : "0", a = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", n = this.strokeDashOffset ? this.strokeDashOffset : "0", c = this.strokeLineCap ? this.strokeLineCap : "butt", s = this.strokeLineJoin ? this.strokeLineJoin : "miter", i = this.strokeMiterLimit ? this.strokeMiterLimit : "4", o = typeof this.opacity < "u" ? this.opacity : "1", l = this.visible ? "" : " visibility: hidden;", d = h ? "" : this.getSvgFilter(), g = f("fill", this.fill), v = f("stroke", this.stroke);
          return [
            v,
            "stroke-width: ",
            t,
            "; ",
            "stroke-dasharray: ",
            a,
            "; ",
            "stroke-linecap: ",
            c,
            "; ",
            "stroke-dashoffset: ",
            n,
            "; ",
            "stroke-linejoin: ",
            s,
            "; ",
            "stroke-miterlimit: ",
            i,
            "; ",
            g,
            "fill-rule: ",
            r,
            "; ",
            "opacity: ",
            o,
            ";",
            d,
            l
          ].join("");
        },
        /**
         * Returns styles-string for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @param {Boolean} useWhiteSpace a boolean to include an additional attribute in the style.
         * @return {String}
         */
        getSvgSpanStyles: function(h, r) {
          var t = "; ", n = h.fontFamily ? "font-family: " + (h.fontFamily.indexOf("'") === -1 && h.fontFamily.indexOf('"') === -1 ? "'" + h.fontFamily + "'" : h.fontFamily) + t : "", a = h.strokeWidth ? "stroke-width: " + h.strokeWidth + t : "", n = n, c = h.fontSize ? "font-size: " + h.fontSize + "px" + t : "", s = h.fontStyle ? "font-style: " + h.fontStyle + t : "", i = h.fontWeight ? "font-weight: " + h.fontWeight + t : "", o = h.fill ? f("fill", h.fill) : "", l = h.stroke ? f("stroke", h.stroke) : "", d = this.getSvgTextDecoration(h), g = h.deltaY ? "baseline-shift: " + -h.deltaY + "; " : "";
          return d && (d = "text-decoration: " + d + t), [
            l,
            a,
            n,
            c,
            s,
            i,
            d,
            o,
            g,
            r ? "white-space: pre; " : ""
          ].join("");
        },
        /**
         * Returns text-decoration property for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @return {String}
         */
        getSvgTextDecoration: function(h) {
          return ["overline", "underline", "line-through"].filter(function(r) {
            return h[r.replace("-", "")];
          }).join(" ");
        },
        /**
         * Returns filter for svg shadow
         * @return {String}
         */
        getSvgFilter: function() {
          return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
        },
        /**
         * Returns id attribute for svg output
         * @return {String}
         */
        getSvgCommons: function() {
          return [
            this.id ? 'id="' + this.id + '" ' : "",
            this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""
          ].join("");
        },
        /**
         * Returns transform-string for svg-export
         * @param {Boolean} use the full transform or the single object one.
         * @return {String}
         */
        getSvgTransform: function(h, r) {
          var t = h ? this.calcTransformMatrix() : this.calcOwnMatrix(), a = 'transform="' + u.util.matrixToSVG(t);
          return a + (r || "") + this.getSvgTransformMatrix() + '" ';
        },
        /**
         * Returns transform-string for svg-export from the transform matrix of single elements
         * @return {String}
         */
        getSvgTransformMatrix: function() {
          return this.transformMatrix ? " " + u.util.matrixToSVG(this.transformMatrix) : "";
        },
        _setSVGBg: function(h) {
          if (this.backgroundColor) {
            var r = u.Object.NUM_FRACTION_DIGITS;
            h.push(
              "		<rect ",
              this._getFillAttributes(this.backgroundColor),
              ' x="',
              e(-this.width / 2, r),
              '" y="',
              e(-this.height / 2, r),
              '" width="',
              e(this.width, r),
              '" height="',
              e(this.height, r),
              `"></rect>
`
            );
          }
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(h) {
          return this._createBaseSVGMarkup(this._toSVG(h), { reviver: h });
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(h) {
          return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(h), { reviver: h });
        },
        /**
         * @private
         */
        _createBaseClipPathSVGMarkup: function(h, r) {
          r = r || {};
          var t = r.reviver, a = r.additionalTransform || "", n = [
            this.getSvgTransform(!0, a),
            this.getSvgCommons()
          ].join(""), c = h.indexOf("COMMON_PARTS");
          return h[c] = n, t ? t(h.join("")) : h.join("");
        },
        /**
         * @private
         */
        _createBaseSVGMarkup: function(h, r) {
          r = r || {};
          var t = r.noStyle, a = r.reviver, n = t ? "" : 'style="' + this.getSvgStyles() + '" ', c = r.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", s = this.clipPath, i = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", o = s && s.absolutePositioned, l = this.stroke, d = this.fill, g = this.shadow, v, _ = [], p, C = h.indexOf("COMMON_PARTS"), S = r.additionalTransform;
          return s && (s.clipPathId = "CLIPPATH_" + u.Object.__uid++, p = '<clipPath id="' + s.clipPathId + `" >
` + s.toClipPathSVG(a) + `</clipPath>
`), o && _.push(
            "<g ",
            c,
            this.getSvgCommons(),
            ` >
`
          ), _.push(
            "<g ",
            this.getSvgTransform(!1),
            o ? "" : c + this.getSvgCommons(),
            ` >
`
          ), v = [
            n,
            i,
            t ? "" : this.addPaintOrder(),
            " ",
            S ? 'transform="' + S + '" ' : ""
          ].join(""), h[C] = v, d && d.toLive && _.push(d.toSVG(this)), l && l.toLive && _.push(l.toSVG(this)), g && _.push(g.toSVG(this)), s && _.push(p), _.push(h.join("")), _.push(`</g>
`), o && _.push(`</g>
`), a ? a(_.join("")) : _.join("");
        },
        addPaintOrder: function() {
          return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
        }
      }
    );
  }(), function() {
    var f = u.util.object.extend, e = "stateProperties";
    function h(t, a, n) {
      var c = {}, s = !0;
      n.forEach(function(i) {
        c[i] = t[i];
      }), f(t[a], c, s);
    }
    function r(t, a, n) {
      if (t === a)
        return !0;
      if (Array.isArray(t)) {
        if (!Array.isArray(a) || t.length !== a.length)
          return !1;
        for (var c = 0, s = t.length; c < s; c++)
          if (!r(t[c], a[c]))
            return !1;
        return !0;
      } else if (t && typeof t == "object") {
        var i = Object.keys(t), o;
        if (!a || typeof a != "object" || !n && i.length !== Object.keys(a).length)
          return !1;
        for (var c = 0, s = i.length; c < s; c++)
          if (o = i[c], o !== "canvas" && !r(t[o], a[o]))
            return !1;
        return !0;
      }
    }
    u.util.object.extend(
      u.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Returns true if object state (one of its state properties) was changed
         * @param {String} [propertySet] optional name for the set of property we want to save
         * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
         */
        hasStateChanged: function(t) {
          t = t || e;
          var a = "_" + t;
          return Object.keys(this[a]).length < this[t].length ? !0 : !r(this[a], this, !0);
        },
        /**
         * Saves state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
        saveState: function(t) {
          var a = t && t.propertySet || e, n = "_" + a;
          return this[n] ? (h(this, n, this[a]), t && t.stateProperties && h(this, n, t.stateProperties), this) : this.setupState(t);
        },
        /**
         * Setups state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
        setupState: function(t) {
          t = t || {};
          var a = t.propertySet || e;
          return t.propertySet = a, this["_" + a] = {}, this.saveState(t), this;
        }
      }
    );
  }(), function() {
    var f = u.util.degreesToRadians;
    u.util.object.extend(
      u.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * The object interactivity controls.
         * @private
         */
        _controlsVisibility: null,
        /**
         * Determines which corner has been clicked
         * @private
         * @param {Object} pointer The pointer indicating the mouse position
         * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
         */
        _findTargetCorner: function(e) {
          if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
            return !1;
          var h = e.x, r = e.y, t, a;
          this.__corner = 0;
          for (var n in this.oCoords)
            if (this.isControlVisible(n) && !(n === "mtr" && !this.hasRotatingPoint) && !(this.get("lockUniScaling") && (n === "mt" || n === "mr" || n === "mb" || n === "ml")) && (a = this._getImageLines(this.oCoords[n].corner), t = this._findCrossPoints({ x: h, y: r }, a), t !== 0 && t % 2 === 1))
              return this.__corner = n, n;
          return !1;
        },
        /**
         * Sets the coordinates of the draggable boxes in the corners of
         * the image used to scale/rotate it.
         * @private
         */
        _setCornerCoords: function() {
          var e = this.oCoords, h = f(45 - this.angle), r = this.cornerSize * 0.707106, t = r * u.util.cos(h), a = r * u.util.sin(h), n, c;
          for (var s in e)
            n = e[s].x, c = e[s].y, e[s].corner = {
              tl: {
                x: n - a,
                y: c - t
              },
              tr: {
                x: n + t,
                y: c - a
              },
              bl: {
                x: n - t,
                y: c + a
              },
              br: {
                x: n + a,
                y: c + t
              }
            };
        },
        /**
         * Draws a colored layer behind the object, inside its selection borders.
         * Requires public options: padding, selectionBackgroundColor
         * this function is called when the context is transformed
         * has checks to be skipped when the object is on a staticCanvas
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawSelectionBackground: function(e) {
          if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this)
            return this;
          e.save();
          var h = this.getCenterPoint(), r = this._calculateCurrentDimensions(), t = this.canvas.viewportTransform;
          return e.translate(h.x, h.y), e.scale(1 / t[0], 1 / t[3]), e.rotate(f(this.angle)), e.fillStyle = this.selectionBackgroundColor, e.fillRect(-r.x / 2, -r.y / 2, r.x, r.y), e.restore(), this;
        },
        /**
         * Draws borders of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawBorders: function(e, h) {
          h = h || {};
          var r = this._calculateCurrentDimensions(), t = this.borderScaleFactor, a = r.x + t, n = r.y + t, c = typeof h.hasRotatingPoint < "u" ? h.hasRotatingPoint : this.hasRotatingPoint, s = typeof h.hasControls < "u" ? h.hasControls : this.hasControls, i = typeof h.rotatingPointOffset < "u" ? h.rotatingPointOffset : this.rotatingPointOffset;
          if (e.save(), e.strokeStyle = h.borderColor || this.borderColor, this._setLineDash(e, h.borderDashArray || this.borderDashArray, null), e.strokeRect(
            -a / 2,
            -n / 2,
            a,
            n
          ), c && this.isControlVisible("mtr") && s) {
            var o = -n / 2;
            e.beginPath(), e.moveTo(0, o), e.lineTo(0, o - i), e.stroke();
          }
          return e.restore(), this;
        },
        /**
         * Draws borders of an object's bounding box when it is inside a group.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {object} options object representing current object parameters
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawBordersInGroup: function(e, h, r) {
          r = r || {};
          var t = { x: this.width, y: this.height }, a = u.util.composeMatrix({
            scaleX: h.scaleX,
            scaleY: h.scaleY,
            skewX: h.skewX
          }), n = u.util.transformPoint(t, a), c = this.strokeWidth, s = this.borderScaleFactor, i = n.x + c * (this.strokeUniform ? this.canvas.getZoom() : h.scaleX) + s, o = n.y + c * (this.strokeUniform ? this.canvas.getZoom() : h.scaleY) + s;
          return e.save(), this._setLineDash(e, r.borderDashArray || this.borderDashArray, null), e.strokeStyle = r.borderColor || this.borderColor, e.strokeRect(
            -i / 2,
            -o / 2,
            i,
            o
          ), e.restore(), this;
        },
        /**
         * Draws corners of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: cornerSize, padding
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawControls: function(e, h) {
          h = h || {};
          var r = this._calculateCurrentDimensions(), t = r.x, a = r.y, n = h.cornerSize || this.cornerSize, c = -(t + n) / 2, s = -(a + n) / 2, i = typeof h.transparentCorners < "u" ? h.transparentCorners : this.transparentCorners, o = typeof h.hasRotatingPoint < "u" ? h.hasRotatingPoint : this.hasRotatingPoint, l = i ? "stroke" : "fill";
          return e.save(), e.strokeStyle = e.fillStyle = h.cornerColor || this.cornerColor, this.transparentCorners || (e.strokeStyle = h.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(e, h.cornerDashArray || this.cornerDashArray, null), this._drawControl(
            "tl",
            e,
            l,
            c,
            s,
            h
          ), this._drawControl(
            "tr",
            e,
            l,
            c + t,
            s,
            h
          ), this._drawControl(
            "bl",
            e,
            l,
            c,
            s + a,
            h
          ), this._drawControl(
            "br",
            e,
            l,
            c + t,
            s + a,
            h
          ), this.get("lockUniScaling") || (this._drawControl(
            "mt",
            e,
            l,
            c + t / 2,
            s,
            h
          ), this._drawControl(
            "mb",
            e,
            l,
            c + t / 2,
            s + a,
            h
          ), this._drawControl(
            "mr",
            e,
            l,
            c + t,
            s + a / 2,
            h
          ), this._drawControl(
            "ml",
            e,
            l,
            c,
            s + a / 2,
            h
          )), o && this._drawControl(
            "mtr",
            e,
            l,
            c + t / 2,
            s - this.rotatingPointOffset,
            h
          ), e.restore(), this;
        },
        /**
         * @private
         */
        _drawControl: function(e, h, r, t, a, n) {
          if (n = n || {}, !!this.isControlVisible(e)) {
            var c = this.cornerSize, s = !this.transparentCorners && this.cornerStrokeColor;
            switch (n.cornerStyle || this.cornerStyle) {
              case "circle":
                h.beginPath(), h.arc(t + c / 2, a + c / 2, c / 2, 0, 2 * Math.PI, !1), h[r](), s && h.stroke();
                break;
              default:
                this.transparentCorners || h.clearRect(t, a, c, c), h[r + "Rect"](t, a, c, c), s && h.strokeRect(t, a, c, c);
            }
          }
        },
        /**
         * Returns true if the specified control is visible, false otherwise.
         * @param {String} controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @returns {Boolean} true if the specified control is visible, false otherwise
         */
        isControlVisible: function(e) {
          return this._getControlsVisibility()[e];
        },
        /**
         * Sets the visibility of the specified control.
         * @param {String} controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @param {Boolean} visible true to set the specified control visible, false otherwise
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setControlVisible: function(e, h) {
          return this._getControlsVisibility()[e] = h, this;
        },
        /**
         * Sets the visibility state of object controls.
         * @param {Object} [options] Options object
         * @param {Boolean} [options.bl] true to enable the bottom-left control, false to disable it
         * @param {Boolean} [options.br] true to enable the bottom-right control, false to disable it
         * @param {Boolean} [options.mb] true to enable the middle-bottom control, false to disable it
         * @param {Boolean} [options.ml] true to enable the middle-left control, false to disable it
         * @param {Boolean} [options.mr] true to enable the middle-right control, false to disable it
         * @param {Boolean} [options.mt] true to enable the middle-top control, false to disable it
         * @param {Boolean} [options.tl] true to enable the top-left control, false to disable it
         * @param {Boolean} [options.tr] true to enable the top-right control, false to disable it
         * @param {Boolean} [options.mtr] true to enable the middle-top-rotate control, false to disable it
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setControlsVisibility: function(e) {
          e || (e = {});
          for (var h in e)
            this.setControlVisible(h, e[h]);
          return this;
        },
        /**
         * Returns the instance of the control visibility set for this object.
         * @private
         * @returns {Object}
         */
        _getControlsVisibility: function() {
          return this._controlsVisibility || (this._controlsVisibility = {
            tl: !0,
            tr: !0,
            br: !0,
            bl: !0,
            ml: !0,
            mt: !0,
            mr: !0,
            mb: !0,
            mtr: !0
          }), this._controlsVisibility;
        },
        /**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to deselect this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
        onDeselect: function() {
        },
        /**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to select this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
        onSelect: function() {
        }
      }
    );
  }(), u.util.object.extend(
    u.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Animation duration (in ms) for fx* methods
       * @type Number
       * @default
       */
      FX_DURATION: 500,
      /**
       * Centers object horizontally with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
      fxCenterObjectH: function(f, e) {
        e = e || {};
        var h = function() {
        }, r = e.onComplete || h, t = e.onChange || h, a = this;
        return u.util.animate({
          startValue: f.left,
          endValue: this.getCenter().left,
          duration: this.FX_DURATION,
          onChange: function(n) {
            f.set("left", n), a.requestRenderAll(), t();
          },
          onComplete: function() {
            f.setCoords(), r();
          }
        }), this;
      },
      /**
       * Centers object vertically with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
      fxCenterObjectV: function(f, e) {
        e = e || {};
        var h = function() {
        }, r = e.onComplete || h, t = e.onChange || h, a = this;
        return u.util.animate({
          startValue: f.top,
          endValue: this.getCenter().top,
          duration: this.FX_DURATION,
          onChange: function(n) {
            f.set("top", n), a.requestRenderAll(), t();
          },
          onComplete: function() {
            f.setCoords(), r();
          }
        }), this;
      },
      /**
       * Same as `fabric.Canvas#remove` but animated
       * @param {fabric.Object} object Object to remove
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
      fxRemove: function(f, e) {
        e = e || {};
        var h = function() {
        }, r = e.onComplete || h, t = e.onChange || h, a = this;
        return u.util.animate({
          startValue: f.opacity,
          endValue: 0,
          duration: this.FX_DURATION,
          onChange: function(n) {
            f.set("opacity", n), a.requestRenderAll(), t();
          },
          onComplete: function() {
            a.remove(f), r();
          }
        }), this;
      }
    }
  ), u.util.object.extend(
    u.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * Animates object's properties
       * @param {String|Object} property Property to animate (if string) or properties to animate (if object)
       * @param {Number|Object} value Value to animate property to (if string was given first) or options object
       * @return {fabric.Object} thisArg
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#animation}
       * @chainable
       *
       * As object — multiple properties
       *
       * object.animate({ left: ..., top: ... });
       * object.animate({ left: ..., top: ... }, { duration: ... });
       *
       * As string — one property
       *
       * object.animate('left', ...);
       * object.animate('left', { duration: ... });
       *
       */
      animate: function() {
        if (arguments[0] && typeof arguments[0] == "object") {
          var f = [], e, h;
          for (e in arguments[0])
            f.push(e);
          for (var r = 0, t = f.length; r < t; r++)
            e = f[r], h = r !== t - 1, this._animate(e, arguments[0][e], arguments[1], h);
        } else
          this._animate.apply(this, arguments);
        return this;
      },
      /**
       * @private
       * @param {String} property Property to animate
       * @param {String} to Value to animate to
       * @param {Object} [options] Options object
       * @param {Boolean} [skipCallbacks] When true, callbacks like onchange and oncomplete are not invoked
       */
      _animate: function(f, e, h, r) {
        var t = this, a;
        e = e.toString(), h ? h = u.util.object.clone(h) : h = {}, ~f.indexOf(".") && (a = f.split("."));
        var n = a ? this.get(a[0])[a[1]] : this.get(f);
        "from" in h || (h.from = n), ~e.indexOf("=") ? e = n + parseFloat(e.replace("=", "")) : e = parseFloat(e), u.util.animate({
          startValue: h.from,
          endValue: e,
          byValue: h.by,
          easing: h.easing,
          duration: h.duration,
          abort: h.abort && function() {
            return h.abort.call(t);
          },
          onChange: function(c, s, i) {
            a ? t[a[0]][a[1]] = c : t.set(f, c), !r && h.onChange && h.onChange(c, s, i);
          },
          onComplete: function(c, s, i) {
            r || (t.setCoords(), h.onComplete && h.onComplete(c, s, i));
          }
        });
      }
    }
  ), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.extend, r = e.util.object.clone, t = { x1: 1, x2: 1, y1: 1, y2: 1 }, a = e.StaticCanvas.supports("setLineDash");
    if (e.Line) {
      e.warn("fabric.Line is already defined");
      return;
    }
    e.Line = e.util.createClass(
      e.Object,
      /** @lends fabric.Line.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "line",
        /**
         * x value or first line edge
         * @type Number
         * @default
         */
        x1: 0,
        /**
         * y value or first line edge
         * @type Number
         * @default
         */
        y1: 0,
        /**
         * x value or second line edge
         * @type Number
         * @default
         */
        x2: 0,
        /**
         * y value or second line edge
         * @type Number
         * @default
         */
        y2: 0,
        cacheProperties: e.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
        /**
         * Constructor
         * @param {Array} [points] Array of points
         * @param {Object} [options] Options object
         * @return {fabric.Line} thisArg
         */
        initialize: function(c, s) {
          c || (c = [0, 0, 0, 0]), this.callSuper("initialize", s), this.set("x1", c[0]), this.set("y1", c[1]), this.set("x2", c[2]), this.set("y2", c[3]), this._setWidthHeight(s);
        },
        /**
         * @private
         * @param {Object} [options] Options
         */
        _setWidthHeight: function(c) {
          c || (c = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in c ? c.left : this._getLeftToOriginX(), this.top = "top" in c ? c.top : this._getTopToOriginY();
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         */
        _set: function(c, s) {
          return this.callSuper("_set", c, s), typeof t[c] < "u" && this._setWidthHeight(), this;
        },
        /**
         * @private
         * @return {Number} leftToOriginX Distance from left edge of canvas to originX of Line.
         */
        _getLeftToOriginX: n(
          {
            // property names
            origin: "originX",
            axis1: "x1",
            axis2: "x2",
            dimension: "width"
          },
          {
            // possible values of origin
            nearest: "left",
            center: "center",
            farthest: "right"
          }
        ),
        /**
         * @private
         * @return {Number} topToOriginY Distance from top edge of canvas to originY of Line.
         */
        _getTopToOriginY: n(
          {
            // property names
            origin: "originY",
            axis1: "y1",
            axis2: "y2",
            dimension: "height"
          },
          {
            // possible values of origin
            nearest: "top",
            center: "center",
            farthest: "bottom"
          }
        ),
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(c) {
          if (c.beginPath(), !this.strokeDashArray || this.strokeDashArray && a) {
            var s = this.calcLinePoints();
            c.moveTo(s.x1, s.y1), c.lineTo(s.x2, s.y2);
          }
          c.lineWidth = this.strokeWidth;
          var i = c.strokeStyle;
          c.strokeStyle = this.stroke || c.fillStyle, this.stroke && this._renderStroke(c), c.strokeStyle = i;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderDashedStroke: function(c) {
          var s = this.calcLinePoints();
          c.beginPath(), e.util.drawDashedLine(c, s.x1, s.y1, s.x2, s.y2, this.strokeDashArray), c.closePath();
        },
        /**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
        _findCenterFromElement: function() {
          return {
            x: (this.x1 + this.x2) / 2,
            y: (this.y1 + this.y2) / 2
          };
        },
        /**
         * Returns object representation of an instance
         * @methd toObject
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(c) {
          return h(this.callSuper("toObject", c), this.calcLinePoints());
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         */
        _getNonTransformedDimensions: function() {
          var c = this.callSuper("_getNonTransformedDimensions");
          return this.strokeLineCap === "butt" && (this.width === 0 && (c.y -= this.strokeWidth), this.height === 0 && (c.x -= this.strokeWidth)), c;
        },
        /**
         * Recalculates line points given width and height
         * @private
         */
        calcLinePoints: function() {
          var c = this.x1 <= this.x2 ? -1 : 1, s = this.y1 <= this.y2 ? -1 : 1, i = c * this.width * 0.5, o = s * this.height * 0.5, l = c * this.width * -0.5, d = s * this.height * -0.5;
          return {
            x1: i,
            x2: l,
            y1: o,
            y2: d
          };
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var c = this.calcLinePoints();
          return [
            "<line ",
            "COMMON_PARTS",
            'x1="',
            c.x1,
            '" y1="',
            c.y1,
            '" x2="',
            c.x2,
            '" y2="',
            c.y2,
            `" />
`
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), e.Line.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), e.Line.fromElement = function(c, s, i) {
      i = i || {};
      var o = e.parseAttributes(c, e.Line.ATTRIBUTE_NAMES), l = [
        o.x1 || 0,
        o.y1 || 0,
        o.x2 || 0,
        o.y2 || 0
      ];
      s(new e.Line(l, h(o, i)));
    }, e.Line.fromObject = function(c, s) {
      function i(l) {
        delete l.points, s && s(l);
      }
      var o = r(c, !0);
      o.points = [c.x1, c.y1, c.x2, c.y2], e.Object._fromObject("Line", o, i, "points");
    };
    function n(c, s) {
      var i = c.origin, o = c.axis1, l = c.axis2, d = c.dimension, g = s.nearest, v = s.center, _ = s.farthest;
      return function() {
        switch (this.get(i)) {
          case g:
            return Math.min(this.get(o), this.get(l));
          case v:
            return Math.min(this.get(o), this.get(l)) + 0.5 * this.get(d);
          case _:
            return Math.max(this.get(o), this.get(l));
        }
      };
    }
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = Math.PI;
    if (e.Circle) {
      e.warn("fabric.Circle is already defined.");
      return;
    }
    e.Circle = e.util.createClass(
      e.Object,
      /** @lends fabric.Circle.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "circle",
        /**
         * Radius of this circle
         * @type Number
         * @default
         */
        radius: 0,
        /**
         * Start angle of the circle, moving clockwise
         * deprectated type, this should be in degree, this was an oversight.
         * probably will change to degrees in next major version
         * @type Number
         * @default 0
         */
        startAngle: 0,
        /**
         * End angle of the circle
         * deprectated type, this should be in degree, this was an oversight.
         * probably will change to degrees in next major version
         * @type Number
         * @default 2Pi
         */
        endAngle: h * 2,
        cacheProperties: e.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Circle} thisArg
         */
        _set: function(t, a) {
          return this.callSuper("_set", t, a), t === "radius" && this.setRadius(a), this;
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(t) {
          return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(t));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var t, a = 0, n = 0, c = (this.endAngle - this.startAngle) % (2 * h);
          if (c === 0)
            t = [
              "<circle ",
              "COMMON_PARTS",
              'cx="' + a + '" cy="' + n + '" ',
              'r="',
              this.radius,
              `" />
`
            ];
          else {
            var s = e.util.cos(this.startAngle) * this.radius, i = e.util.sin(this.startAngle) * this.radius, o = e.util.cos(this.endAngle) * this.radius, l = e.util.sin(this.endAngle) * this.radius, d = c > h ? "1" : "0";
            t = [
              '<path d="M ' + s + " " + i,
              " A " + this.radius + " " + this.radius,
              " 0 ",
              +d + " 1",
              " " + o + " " + l,
              '" ',
              "COMMON_PARTS",
              ` />
`
            ];
          }
          return t;
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
        _render: function(t) {
          t.beginPath(), t.arc(
            0,
            0,
            this.radius,
            this.startAngle,
            this.endAngle,
            !1
          ), this._renderPaintInOrder(t);
        },
        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRadiusX: function() {
          return this.get("radius") * this.get("scaleX");
        },
        /**
         * Returns vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRadiusY: function() {
          return this.get("radius") * this.get("scaleY");
        },
        /**
         * Sets radius of an object (and updates width accordingly)
         * @return {fabric.Circle} thisArg
         */
        setRadius: function(t) {
          return this.radius = t, this.set("width", t * 2).set("height", t * 2);
        }
      }
    ), e.Circle.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), e.Circle.fromElement = function(t, a) {
      var n = e.parseAttributes(t, e.Circle.ATTRIBUTE_NAMES);
      if (!r(n))
        throw new Error("value of `r` attribute is required and can not be negative");
      n.left = (n.left || 0) - n.radius, n.top = (n.top || 0) - n.radius, a(new e.Circle(n));
    };
    function r(t) {
      return "radius" in t && t.radius >= 0;
    }
    e.Circle.fromObject = function(t, a) {
      return e.Object._fromObject("Circle", t, a);
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {});
    if (e.Triangle) {
      e.warn("fabric.Triangle is already defined");
      return;
    }
    e.Triangle = e.util.createClass(
      e.Object,
      /** @lends fabric.Triangle.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "triangle",
        /**
         * Width is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
        width: 100,
        /**
         * Height is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
        height: 100,
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(h) {
          var r = this.width / 2, t = this.height / 2;
          h.beginPath(), h.moveTo(-r, t), h.lineTo(0, -t), h.lineTo(r, t), h.closePath(), this._renderPaintInOrder(h);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderDashedStroke: function(h) {
          var r = this.width / 2, t = this.height / 2;
          h.beginPath(), e.util.drawDashedLine(h, -r, t, 0, -t, this.strokeDashArray), e.util.drawDashedLine(h, 0, -t, r, t, this.strokeDashArray), e.util.drawDashedLine(h, r, t, -r, t, this.strokeDashArray), h.closePath();
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var h = this.width / 2, r = this.height / 2, t = [
            -h + " " + r,
            "0 " + -r,
            h + " " + r
          ].join(",");
          return [
            "<polygon ",
            "COMMON_PARTS",
            'points="',
            t,
            '" />'
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), e.Triangle.fromObject = function(h, r) {
      return e.Object._fromObject("Triangle", h, r);
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = Math.PI * 2;
    if (e.Ellipse) {
      e.warn("fabric.Ellipse is already defined.");
      return;
    }
    e.Ellipse = e.util.createClass(
      e.Object,
      /** @lends fabric.Ellipse.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "ellipse",
        /**
         * Horizontal radius
         * @type Number
         * @default
         */
        rx: 0,
        /**
         * Vertical radius
         * @type Number
         * @default
         */
        ry: 0,
        cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @return {fabric.Ellipse} thisArg
         */
        initialize: function(r) {
          this.callSuper("initialize", r), this.set("rx", r && r.rx || 0), this.set("ry", r && r.ry || 0);
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Ellipse} thisArg
         */
        _set: function(r, t) {
          switch (this.callSuper("_set", r, t), r) {
            case "rx":
              this.rx = t, this.set("width", t * 2);
              break;
            case "ry":
              this.ry = t, this.set("height", t * 2);
              break;
          }
          return this;
        },
        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRx: function() {
          return this.get("rx") * this.get("scaleX");
        },
        /**
         * Returns Vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRy: function() {
          return this.get("ry") * this.get("scaleY");
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(r) {
          return this.callSuper("toObject", ["rx", "ry"].concat(r));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          return [
            "<ellipse ",
            "COMMON_PARTS",
            'cx="0" cy="0" ',
            'rx="',
            this.rx,
            '" ry="',
            this.ry,
            `" />
`
          ];
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
        _render: function(r) {
          r.beginPath(), r.save(), r.transform(1, 0, 0, this.ry / this.rx, 0, 0), r.arc(
            0,
            0,
            this.rx,
            0,
            h,
            !1
          ), r.restore(), this._renderPaintInOrder(r);
        }
      }
    ), e.Ellipse.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), e.Ellipse.fromElement = function(r, t) {
      var a = e.parseAttributes(r, e.Ellipse.ATTRIBUTE_NAMES);
      a.left = (a.left || 0) - a.rx, a.top = (a.top || 0) - a.ry, t(new e.Ellipse(a));
    }, e.Ellipse.fromObject = function(r, t) {
      return e.Object._fromObject("Ellipse", r, t);
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.extend;
    if (e.Rect) {
      e.warn("fabric.Rect is already defined");
      return;
    }
    e.Rect = e.util.createClass(
      e.Object,
      /** @lends fabric.Rect.prototype */
      {
        /**
         * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: e.Object.prototype.stateProperties.concat("rx", "ry"),
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "rect",
        /**
         * Horizontal border radius
         * @type Number
         * @default
         */
        rx: 0,
        /**
         * Vertical border radius
         * @type Number
         * @default
         */
        ry: 0,
        cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(r) {
          this.callSuper("initialize", r), this._initRxRy();
        },
        /**
         * Initializes rx/ry attributes
         * @private
         */
        _initRxRy: function() {
          this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(r) {
          var t = this.rx ? Math.min(this.rx, this.width / 2) : 0, a = this.ry ? Math.min(this.ry, this.height / 2) : 0, n = this.width, c = this.height, s = -this.width / 2, i = -this.height / 2, o = t !== 0 || a !== 0, l = 1 - 0.5522847498;
          r.beginPath(), r.moveTo(s + t, i), r.lineTo(s + n - t, i), o && r.bezierCurveTo(s + n - l * t, i, s + n, i + l * a, s + n, i + a), r.lineTo(s + n, i + c - a), o && r.bezierCurveTo(s + n, i + c - l * a, s + n - l * t, i + c, s + n - t, i + c), r.lineTo(s + t, i + c), o && r.bezierCurveTo(s + l * t, i + c, s, i + c - l * a, s, i + c - a), r.lineTo(s, i + a), o && r.bezierCurveTo(s, i + l * a, s + l * t, i, s + t, i), r.closePath(), this._renderPaintInOrder(r);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderDashedStroke: function(r) {
          var t = -this.width / 2, a = -this.height / 2, n = this.width, c = this.height;
          r.beginPath(), e.util.drawDashedLine(r, t, a, t + n, a, this.strokeDashArray), e.util.drawDashedLine(r, t + n, a, t + n, a + c, this.strokeDashArray), e.util.drawDashedLine(r, t + n, a + c, t, a + c, this.strokeDashArray), e.util.drawDashedLine(r, t, a + c, t, a, this.strokeDashArray), r.closePath();
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(r) {
          return this.callSuper("toObject", ["rx", "ry"].concat(r));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var r = -this.width / 2, t = -this.height / 2;
          return [
            "<rect ",
            "COMMON_PARTS",
            'x="',
            r,
            '" y="',
            t,
            '" rx="',
            this.rx,
            '" ry="',
            this.ry,
            '" width="',
            this.width,
            '" height="',
            this.height,
            `" />
`
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), e.Rect.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), e.Rect.fromElement = function(r, t, a) {
      if (!r)
        return t(null);
      a = a || {};
      var n = e.parseAttributes(r, e.Rect.ATTRIBUTE_NAMES);
      n.left = n.left || 0, n.top = n.top || 0, n.height = n.height || 0, n.width = n.width || 0;
      var c = new e.Rect(h(a ? e.util.object.clone(a) : {}, n));
      c.visible = c.visible && c.width > 0 && c.height > 0, t(c);
    }, e.Rect.fromObject = function(r, t) {
      return e.Object._fromObject("Rect", r, t);
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.extend, r = e.util.array.min, t = e.util.array.max, a = e.util.toFixed;
    if (e.Polyline) {
      e.warn("fabric.Polyline is already defined");
      return;
    }
    e.Polyline = e.util.createClass(
      e.Object,
      /** @lends fabric.Polyline.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "polyline",
        /**
         * Points array
         * @type Array
         * @default
         */
        points: null,
        cacheProperties: e.Object.prototype.cacheProperties.concat("points"),
        /**
         * Constructor
         * @param {Array} points Array of points (where each point is an object with x and y)
         * @param {Object} [options] Options object
         * @return {fabric.Polyline} thisArg
         * @example
         * var poly = new fabric.Polyline([
         *     { x: 10, y: 10 },
         *     { x: 50, y: 30 },
         *     { x: 40, y: 70 },
         *     { x: 60, y: 50 },
         *     { x: 100, y: 150 },
         *     { x: 40, y: 100 }
         *   ], {
         *   stroke: 'red',
         *   left: 100,
         *   top: 100
         * });
         */
        initialize: function(n, c) {
          c = c || {}, this.points = n || [], this.callSuper("initialize", c), this._setPositionDimensions(c);
        },
        _setPositionDimensions: function(n) {
          var c = this._calcDimensions(n), s;
          this.width = c.width, this.height = c.height, n.fromSVG || (s = this.translateToGivenOrigin(
            { x: c.left - this.strokeWidth / 2, y: c.top - this.strokeWidth / 2 },
            "left",
            "top",
            this.originX,
            this.originY
          )), typeof n.left > "u" && (this.left = n.fromSVG ? c.left : s.x), typeof n.top > "u" && (this.top = n.fromSVG ? c.top : s.y), this.pathOffset = {
            x: c.left + this.width / 2,
            y: c.top + this.height / 2
          };
        },
        /**
         * Calculate the polygon min and max point from points array,
         * returning an object with left, top, widht, height to measure the
         * polygon size
         * @return {Object} object.left X coordinate of the polygon leftmost point
         * @return {Object} object.top Y coordinate of the polygon topmost point
         * @return {Object} object.width distance between X coordinates of the polygon leftmost and rightmost point
         * @return {Object} object.height distance between Y coordinates of the polygon topmost and bottommost point
         * @private
         */
        _calcDimensions: function() {
          var n = this.points, c = r(n, "x") || 0, s = r(n, "y") || 0, i = t(n, "x") || 0, o = t(n, "y") || 0, l = i - c, d = o - s;
          return {
            left: c,
            top: s,
            width: l,
            height: d
          };
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(n) {
          return h(this.callSuper("toObject", n), {
            points: this.points.concat()
          });
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          for (var n = [], c = this.pathOffset.x, s = this.pathOffset.y, i = e.Object.NUM_FRACTION_DIGITS, o = 0, l = this.points.length; o < l; o++)
            n.push(
              a(this.points[o].x - c, i),
              ",",
              a(this.points[o].y - s, i),
              " "
            );
          return [
            "<" + this.type + " ",
            "COMMON_PARTS",
            'points="',
            n.join(""),
            `" />
`
          ];
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        commonRender: function(n) {
          var c, s = this.points.length, i = this.pathOffset.x, o = this.pathOffset.y;
          if (!s || isNaN(this.points[s - 1].y))
            return !1;
          n.beginPath(), n.moveTo(this.points[0].x - i, this.points[0].y - o);
          for (var l = 0; l < s; l++)
            c = this.points[l], n.lineTo(c.x - i, c.y - o);
          return !0;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(n) {
          this.commonRender(n) && this._renderPaintInOrder(n);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderDashedStroke: function(n) {
          var c, s;
          n.beginPath();
          for (var i = 0, o = this.points.length; i < o; i++)
            c = this.points[i], s = this.points[i + 1] || c, e.util.drawDashedLine(n, c.x, c.y, s.x, s.y, this.strokeDashArray);
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance
         */
        complexity: function() {
          return this.get("points").length;
        }
      }
    ), e.Polyline.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(), e.Polyline.fromElementGenerator = function(n) {
      return function(c, s, i) {
        if (!c)
          return s(null);
        i || (i = {});
        var o = e.parsePointsAttribute(c.getAttribute("points")), l = e.parseAttributes(c, e[n].ATTRIBUTE_NAMES);
        l.fromSVG = !0, s(new e[n](o, h(l, i)));
      };
    }, e.Polyline.fromElement = e.Polyline.fromElementGenerator("Polyline"), e.Polyline.fromObject = function(n, c) {
      return e.Object._fromObject("Polyline", n, c, "points");
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {});
    if (e.Polygon) {
      e.warn("fabric.Polygon is already defined");
      return;
    }
    e.Polygon = e.util.createClass(
      e.Polyline,
      /** @lends fabric.Polygon.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "polygon",
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(h) {
          this.commonRender(h) && (h.closePath(), this._renderPaintInOrder(h));
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderDashedStroke: function(h) {
          this.callSuper("_renderDashedStroke", h), h.closePath();
        }
      }
    ), e.Polygon.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(), e.Polygon.fromElement = e.Polyline.fromElementGenerator("Polygon"), e.Polygon.fromObject = function(h, r) {
      return e.Object._fromObject("Polygon", h, r, "points");
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.array.min, r = e.util.array.max, t = e.util.object.extend, a = Object.prototype.toString, n = e.util.drawArc, c = e.util.toFixed, s = {
      m: 2,
      l: 2,
      h: 1,
      v: 1,
      c: 6,
      s: 4,
      q: 4,
      t: 2,
      a: 7
    }, i = {
      m: "l",
      M: "L"
    };
    if (e.Path) {
      e.warn("fabric.Path is already defined");
      return;
    }
    e.Path = e.util.createClass(
      e.Object,
      /** @lends fabric.Path.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "path",
        /**
         * Array of path points
         * @type Array
         * @default
         */
        path: null,
        cacheProperties: e.Object.prototype.cacheProperties.concat("path", "fillRule"),
        stateProperties: e.Object.prototype.stateProperties.concat("path"),
        /**
         * Constructor
         * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
         * @param {Object} [options] Options object
         * @return {fabric.Path} thisArg
         */
        initialize: function(o, l) {
          l = l || {}, this.callSuper("initialize", l), o || (o = []);
          var d = a.call(o) === "[object Array]";
          this.path = d ? o : o.match && o.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi), this.path && (d || (this.path = this._parsePath()), e.Polyline.prototype._setPositionDimensions.call(this, l));
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
        _renderPathCommands: function(o) {
          var l, d = null, g = 0, v = 0, _ = 0, p = 0, C = 0, S = 0, O, k, P = -this.pathOffset.x, F = -this.pathOffset.y;
          o.beginPath();
          for (var E = 0, X = this.path.length; E < X; ++E) {
            switch (l = this.path[E], l[0]) {
              case "l":
                _ += l[1], p += l[2], o.lineTo(_ + P, p + F);
                break;
              case "L":
                _ = l[1], p = l[2], o.lineTo(_ + P, p + F);
                break;
              case "h":
                _ += l[1], o.lineTo(_ + P, p + F);
                break;
              case "H":
                _ = l[1], o.lineTo(_ + P, p + F);
                break;
              case "v":
                p += l[1], o.lineTo(_ + P, p + F);
                break;
              case "V":
                p = l[1], o.lineTo(_ + P, p + F);
                break;
              case "m":
                _ += l[1], p += l[2], g = _, v = p, o.moveTo(_ + P, p + F);
                break;
              case "M":
                _ = l[1], p = l[2], g = _, v = p, o.moveTo(_ + P, p + F);
                break;
              case "c":
                O = _ + l[5], k = p + l[6], C = _ + l[3], S = p + l[4], o.bezierCurveTo(
                  _ + l[1] + P,
                  // x1
                  p + l[2] + F,
                  // y1
                  C + P,
                  // x2
                  S + F,
                  // y2
                  O + P,
                  k + F
                ), _ = O, p = k;
                break;
              case "C":
                _ = l[5], p = l[6], C = l[3], S = l[4], o.bezierCurveTo(
                  l[1] + P,
                  l[2] + F,
                  C + P,
                  S + F,
                  _ + P,
                  p + F
                );
                break;
              case "s":
                O = _ + l[3], k = p + l[4], d[0].match(/[CcSs]/) === null ? (C = _, S = p) : (C = 2 * _ - C, S = 2 * p - S), o.bezierCurveTo(
                  C + P,
                  S + F,
                  _ + l[1] + P,
                  p + l[2] + F,
                  O + P,
                  k + F
                ), C = _ + l[1], S = p + l[2], _ = O, p = k;
                break;
              case "S":
                O = l[3], k = l[4], d[0].match(/[CcSs]/) === null ? (C = _, S = p) : (C = 2 * _ - C, S = 2 * p - S), o.bezierCurveTo(
                  C + P,
                  S + F,
                  l[1] + P,
                  l[2] + F,
                  O + P,
                  k + F
                ), _ = O, p = k, C = l[1], S = l[2];
                break;
              case "q":
                O = _ + l[3], k = p + l[4], C = _ + l[1], S = p + l[2], o.quadraticCurveTo(
                  C + P,
                  S + F,
                  O + P,
                  k + F
                ), _ = O, p = k;
                break;
              case "Q":
                O = l[3], k = l[4], o.quadraticCurveTo(
                  l[1] + P,
                  l[2] + F,
                  O + P,
                  k + F
                ), _ = O, p = k, C = l[1], S = l[2];
                break;
              case "t":
                O = _ + l[1], k = p + l[2], d[0].match(/[QqTt]/) === null ? (C = _, S = p) : (C = 2 * _ - C, S = 2 * p - S), o.quadraticCurveTo(
                  C + P,
                  S + F,
                  O + P,
                  k + F
                ), _ = O, p = k;
                break;
              case "T":
                O = l[1], k = l[2], d[0].match(/[QqTt]/) === null ? (C = _, S = p) : (C = 2 * _ - C, S = 2 * p - S), o.quadraticCurveTo(
                  C + P,
                  S + F,
                  O + P,
                  k + F
                ), _ = O, p = k;
                break;
              case "a":
                n(o, _ + P, p + F, [
                  l[1],
                  l[2],
                  l[3],
                  l[4],
                  l[5],
                  l[6] + _ + P,
                  l[7] + p + F
                ]), _ += l[6], p += l[7];
                break;
              case "A":
                n(o, _ + P, p + F, [
                  l[1],
                  l[2],
                  l[3],
                  l[4],
                  l[5],
                  l[6] + P,
                  l[7] + F
                ]), _ = l[6], p = l[7];
                break;
              case "z":
              case "Z":
                _ = g, p = v, o.closePath();
                break;
            }
            d = l;
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
        _render: function(o) {
          this._renderPathCommands(o), this._renderPaintInOrder(o);
        },
        /**
         * Returns string representation of an instance
         * @return {String} string representation of an instance
         */
        toString: function() {
          return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(o) {
          return t(this.callSuper("toObject", o), {
            path: this.path.map(function(l) {
              return l.slice();
            })
          });
        },
        /**
         * Returns dataless object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(o) {
          var l = this.toObject(["sourcePath"].concat(o));
          return l.sourcePath && delete l.path, l;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var o = this.path.map(function(l) {
            return l.join(" ");
          }).join(" ");
          return [
            "<path ",
            "COMMON_PARTS",
            'd="',
            o,
            '" stroke-linecap="round" ',
            `/>
`
          ];
        },
        _getOffsetTransform: function() {
          var o = e.Object.NUM_FRACTION_DIGITS;
          return " translate(" + c(-this.pathOffset.x, o) + ", " + c(-this.pathOffset.y, o) + ")";
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(o) {
          var l = this._getOffsetTransform();
          return "	" + this._createBaseClipPathSVGMarkup(
            this._toSVG(),
            { reviver: o, additionalTransform: l }
          );
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(o) {
          var l = this._getOffsetTransform();
          return this._createBaseSVGMarkup(this._toSVG(), { reviver: o, additionalTransform: l });
        },
        /* _TO_SVG_END_ */
        /**
         * Returns number representation of an instance complexity
         * @return {Number} complexity of this instance
         */
        complexity: function() {
          return this.path.length;
        },
        /**
         * @private
         */
        _parsePath: function() {
          for (var o = [], l = [], d, g, v = e.rePathCommand, _, p, C = 0, S, O = this.path.length; C < O; C++) {
            for (d = this.path[C], p = d.slice(1).trim(), l.length = 0; _ = v.exec(p); )
              l.push(_[0]);
            S = [d.charAt(0)];
            for (var k = 0, P = l.length; k < P; k++)
              g = parseFloat(l[k]), isNaN(g) || S.push(g);
            var F = S[0], E = s[F.toLowerCase()], X = i[F] || F;
            if (S.length - 1 > E)
              for (var z = 1, N = S.length; z < N; z += E)
                o.push([F].concat(S.slice(z, z + E))), F = X;
            else
              o.push(S);
          }
          return o;
        },
        /**
         * @private
         */
        _calcDimensions: function() {
          for (var o = [], l = [], d, g = null, v = 0, _ = 0, p = 0, C = 0, S = 0, O = 0, k, P, F, E = 0, X = this.path.length; E < X; ++E) {
            switch (d = this.path[E], d[0]) {
              case "l":
                p += d[1], C += d[2], F = [];
                break;
              case "L":
                p = d[1], C = d[2], F = [];
                break;
              case "h":
                p += d[1], F = [];
                break;
              case "H":
                p = d[1], F = [];
                break;
              case "v":
                C += d[1], F = [];
                break;
              case "V":
                C = d[1], F = [];
                break;
              case "m":
                p += d[1], C += d[2], v = p, _ = C, F = [];
                break;
              case "M":
                p = d[1], C = d[2], v = p, _ = C, F = [];
                break;
              case "c":
                k = p + d[5], P = C + d[6], S = p + d[3], O = C + d[4], F = e.util.getBoundsOfCurve(
                  p,
                  C,
                  p + d[1],
                  // x1
                  C + d[2],
                  // y1
                  S,
                  // x2
                  O,
                  // y2
                  k,
                  P
                ), p = k, C = P;
                break;
              case "C":
                S = d[3], O = d[4], F = e.util.getBoundsOfCurve(
                  p,
                  C,
                  d[1],
                  d[2],
                  S,
                  O,
                  d[5],
                  d[6]
                ), p = d[5], C = d[6];
                break;
              case "s":
                k = p + d[3], P = C + d[4], g[0].match(/[CcSs]/) === null ? (S = p, O = C) : (S = 2 * p - S, O = 2 * C - O), F = e.util.getBoundsOfCurve(
                  p,
                  C,
                  S,
                  O,
                  p + d[1],
                  C + d[2],
                  k,
                  P
                ), S = p + d[1], O = C + d[2], p = k, C = P;
                break;
              case "S":
                k = d[3], P = d[4], g[0].match(/[CcSs]/) === null ? (S = p, O = C) : (S = 2 * p - S, O = 2 * C - O), F = e.util.getBoundsOfCurve(
                  p,
                  C,
                  S,
                  O,
                  d[1],
                  d[2],
                  k,
                  P
                ), p = k, C = P, S = d[1], O = d[2];
                break;
              case "q":
                k = p + d[3], P = C + d[4], S = p + d[1], O = C + d[2], F = e.util.getBoundsOfCurve(
                  p,
                  C,
                  S,
                  O,
                  S,
                  O,
                  k,
                  P
                ), p = k, C = P;
                break;
              case "Q":
                S = d[1], O = d[2], F = e.util.getBoundsOfCurve(
                  p,
                  C,
                  S,
                  O,
                  S,
                  O,
                  d[3],
                  d[4]
                ), p = d[3], C = d[4];
                break;
              case "t":
                k = p + d[1], P = C + d[2], g[0].match(/[QqTt]/) === null ? (S = p, O = C) : (S = 2 * p - S, O = 2 * C - O), F = e.util.getBoundsOfCurve(
                  p,
                  C,
                  S,
                  O,
                  S,
                  O,
                  k,
                  P
                ), p = k, C = P;
                break;
              case "T":
                k = d[1], P = d[2], g[0].match(/[QqTt]/) === null ? (S = p, O = C) : (S = 2 * p - S, O = 2 * C - O), F = e.util.getBoundsOfCurve(
                  p,
                  C,
                  S,
                  O,
                  S,
                  O,
                  k,
                  P
                ), p = k, C = P;
                break;
              case "a":
                F = e.util.getBoundsOfArc(
                  p,
                  C,
                  d[1],
                  d[2],
                  d[3],
                  d[4],
                  d[5],
                  d[6] + p,
                  d[7] + C
                ), p += d[6], C += d[7];
                break;
              case "A":
                F = e.util.getBoundsOfArc(
                  p,
                  C,
                  d[1],
                  d[2],
                  d[3],
                  d[4],
                  d[5],
                  d[6],
                  d[7]
                ), p = d[6], C = d[7];
                break;
              case "z":
              case "Z":
                p = v, C = _;
                break;
            }
            g = d, F.forEach(function(I) {
              o.push(I.x), l.push(I.y);
            }), o.push(p), l.push(C);
          }
          var z = h(o) || 0, N = h(l) || 0, J = r(o) || 0, T = r(l) || 0, j = J - z, R = T - N;
          return {
            left: z,
            top: N,
            width: j,
            height: R
          };
        }
      }
    ), e.Path.fromObject = function(o, l) {
      if (typeof o.sourcePath == "string") {
        var d = o.sourcePath;
        e.loadSVGFromURL(d, function(g) {
          var v = g[0];
          v.setOptions(o), l && l(v);
        });
      } else
        e.Object._fromObject("Path", o, l, "path");
    }, e.Path.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(["d"]), e.Path.fromElement = function(o, l, d) {
      var g = e.parseAttributes(o, e.Path.ATTRIBUTE_NAMES);
      g.fromSVG = !0, l(new e.Path(g.d, t(g, d)));
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.array.min, r = e.util.array.max;
    e.Group || (e.Group = e.util.createClass(
      e.Object,
      e.Collection,
      /** @lends fabric.Group.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "group",
        /**
         * Width of stroke
         * @type Number
         * @default
         */
        strokeWidth: 0,
        /**
         * Indicates if click, mouseover, mouseout events & hoverCursor should also check for subtargets
         * @type Boolean
         * @default
         */
        subTargetCheck: !1,
        /**
         * Groups are container, do not render anything on theyr own, ence no cache properties
         * @type Array
         * @default
         */
        cacheProperties: [],
        /**
         * setOnGroup is a method used for TextBox that is no more used since 2.0.0 The behavior is still
         * available setting this boolean to true.
         * @type Boolean
         * @since 2.0.0
         * @default
         */
        useSetOnGroup: !1,
        /**
         * Constructor
         * @param {Object} objects Group objects
         * @param {Object} [options] Options object
         * @param {Boolean} [isAlreadyGrouped] if true, objects have been grouped already.
         * @return {Object} thisArg
         */
        initialize: function(t, a, n) {
          a = a || {}, this._objects = [], n && this.callSuper("initialize", a), this._objects = t || [];
          for (var c = this._objects.length; c--; )
            this._objects[c].group = this;
          if (n)
            this._updateObjectsACoords();
          else {
            var s = a && a.centerPoint;
            a.originX !== void 0 && (this.originX = a.originX), a.originY !== void 0 && (this.originY = a.originY), s || this._calcBounds(), this._updateObjectsCoords(s), delete a.centerPoint, this.callSuper("initialize", a);
          }
          this.setCoords();
        },
        /**
         * @private
         * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
         */
        _updateObjectsACoords: function() {
          for (var t = !0, a = !0, n = this._objects.length; n--; )
            this._objects[n].setCoords(t, a);
        },
        /**
         * @private
         * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
         */
        _updateObjectsCoords: function(a) {
          for (var a = a || this.getCenterPoint(), n = this._objects.length; n--; )
            this._updateObjectCoords(this._objects[n], a);
        },
        /**
         * @private
         * @param {Object} object
         * @param {fabric.Point} center, current center of group.
         */
        _updateObjectCoords: function(t, a) {
          var n = t.left, c = t.top, s = !0, i = !0;
          t.set({
            left: n - a.x,
            top: c - a.y
          }), t.group = this, t.setCoords(s, i);
        },
        /**
         * Returns string represenation of a group
         * @return {String}
         */
        toString: function() {
          return "#<fabric.Group: (" + this.complexity() + ")>";
        },
        /**
         * Adds an object to a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
        addWithUpdate: function(t) {
          return this._restoreObjectsState(), e.util.resetObjectTransform(this), t && (this._objects.push(t), t.group = this, t._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
        },
        /**
         * Removes an object from a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
        removeWithUpdate: function(t) {
          return this._restoreObjectsState(), e.util.resetObjectTransform(this), this.remove(t), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
        },
        /**
         * @private
         */
        _onObjectAdded: function(t) {
          this.dirty = !0, t.group = this, t._set("canvas", this.canvas);
        },
        /**
         * @private
         */
        _onObjectRemoved: function(t) {
          this.dirty = !0, delete t.group;
        },
        /**
         * @private
         */
        _set: function(t, a) {
          var n = this._objects.length;
          if (this.useSetOnGroup)
            for (; n--; )
              this._objects[n].setOnGroup(t, a);
          if (t === "canvas")
            for (; n--; )
              this._objects[n]._set(t, a);
          e.Object.prototype._set.call(this, t, a);
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(t) {
          var a = this.includeDefaultValues, n = this._objects.map(function(s) {
            var i = s.includeDefaultValues;
            s.includeDefaultValues = a;
            var o = s.toObject(t);
            return s.includeDefaultValues = i, o;
          }), c = e.Object.prototype.toObject.call(this, t);
          return c.objects = n, c;
        },
        /**
         * Returns object representation of an instance, in dataless mode.
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(t) {
          var a, n = this.sourcePath;
          if (n)
            a = n;
          else {
            var c = this.includeDefaultValues;
            a = this._objects.map(function(i) {
              var o = i.includeDefaultValues;
              i.includeDefaultValues = c;
              var l = i.toDatalessObject(t);
              return i.includeDefaultValues = o, l;
            });
          }
          var s = e.Object.prototype.toDatalessObject.call(this, t);
          return s.objects = a, s;
        },
        /**
         * Renders instance on a given context
         * @param {CanvasRenderingContext2D} ctx context to render instance on
         */
        render: function(t) {
          this._transformDone = !0, this.callSuper("render", t), this._transformDone = !1;
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group is already cached.
         * @return {Boolean}
         */
        shouldCache: function() {
          var t = e.Object.prototype.shouldCache.call(this);
          if (t) {
            for (var a = 0, n = this._objects.length; a < n; a++)
              if (this._objects[a].willDrawShadow())
                return this.ownCaching = !1, !1;
          }
          return t;
        },
        /**
         * Check if this object or a child object will cast a shadow
         * @return {Boolean}
         */
        willDrawShadow: function() {
          if (e.Object.prototype.willDrawShadow.call(this))
            return !0;
          for (var t = 0, a = this._objects.length; t < a; t++)
            if (this._objects[t].willDrawShadow())
              return !0;
          return !1;
        },
        /**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
        isOnACache: function() {
          return this.ownCaching || this.group && this.group.isOnACache();
        },
        /**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawObject: function(t) {
          for (var a = 0, n = this._objects.length; a < n; a++)
            this._objects[a].render(t);
          this._drawClipPath(t);
        },
        /**
         * Check if cache is dirty
         */
        isCacheDirty: function(t) {
          if (this.callSuper("isCacheDirty", t))
            return !0;
          if (!this.statefullCache)
            return !1;
          for (var a = 0, n = this._objects.length; a < n; a++)
            if (this._objects[a].isCacheDirty(!0)) {
              if (this._cacheCanvas) {
                var c = this.cacheWidth / this.zoomX, s = this.cacheHeight / this.zoomY;
                this._cacheContext.clearRect(-c / 2, -s / 2, c, s);
              }
              return !0;
            }
          return !1;
        },
        /**
         * Retores original state of each of group objects (original state is that which was before group was created).
         * @private
         * @return {fabric.Group} thisArg
         * @chainable
         */
        _restoreObjectsState: function() {
          return this._objects.forEach(this._restoreObjectState, this), this;
        },
        /**
         * Realises the transform from this group onto the supplied object
         * i.e. it tells you what would happen if the supplied object was in
         * the group, and then the group was destroyed. It mutates the supplied
         * object.
         * @param {fabric.Object} object
         * @return {fabric.Object} transformedObject
         */
        realizeTransform: function(t) {
          var a = t.calcTransformMatrix(), n = e.util.qrDecompose(a), c = new e.Point(n.translateX, n.translateY);
          return t.flipX = !1, t.flipY = !1, t.set("scaleX", n.scaleX), t.set("scaleY", n.scaleY), t.skewX = n.skewX, t.skewY = n.skewY, t.angle = n.angle, t.setPositionByOrigin(c, "center", "center"), t;
        },
        /**
         * Restores original state of a specified object in group
         * @private
         * @param {fabric.Object} object
         * @return {fabric.Group} thisArg
         */
        _restoreObjectState: function(t) {
          return this.realizeTransform(t), t.setCoords(), delete t.group, this;
        },
        /**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
        destroy: function() {
          return this._objects.forEach(function(t) {
            t.set("dirty", !0);
          }), this._restoreObjectsState();
        },
        /**
         * make a group an active selection, remove the group from canvas
         * the group has to be on canvas for this to work.
         * @return {fabric.ActiveSelection} thisArg
         * @chainable
         */
        toActiveSelection: function() {
          if (this.canvas) {
            var t = this._objects, a = this.canvas;
            this._objects = [];
            var n = this.toObject();
            delete n.objects;
            var c = new e.ActiveSelection([]);
            return c.set(n), c.type = "activeSelection", a.remove(this), t.forEach(function(s) {
              s.group = c, s.dirty = !0, a.add(s);
            }), c.canvas = a, c._objects = t, a._activeObject = c, c.setCoords(), c;
          }
        },
        /**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
        ungroupOnCanvas: function() {
          return this._restoreObjectsState();
        },
        /**
         * Sets coordinates of all objects inside group
         * @return {fabric.Group} thisArg
         * @chainable
         */
        setObjectsCoords: function() {
          var t = !0, a = !0;
          return this.forEachObject(function(n) {
            n.setCoords(t, a);
          }), this;
        },
        /**
         * @private
         */
        _calcBounds: function(t) {
          for (var a = [], n = [], c, s, i = ["tr", "br", "bl", "tl"], o = 0, l = this._objects.length, d, g = i.length, v = !0; o < l; ++o)
            for (c = this._objects[o], c.setCoords(v), d = 0; d < g; d++)
              s = i[d], a.push(c.oCoords[s].x), n.push(c.oCoords[s].y);
          this._getBounds(a, n, t);
        },
        /**
         * @private
         */
        _getBounds: function(t, a, n) {
          var c = new e.Point(h(t), h(a)), s = new e.Point(r(t), r(a)), i = c.y || 0, o = c.x || 0, l = s.x - c.x || 0, d = s.y - c.y || 0;
          this.width = l, this.height = d, n || this.setPositionByOrigin({ x: o, y: i }, "left", "top");
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        _toSVG: function(t) {
          for (var a = ["<g ", "COMMON_PARTS", ` >
`], n = 0, c = this._objects.length; n < c; n++)
            a.push("		", this._objects[n].toSVG(t));
          return a.push(`</g>
`), a;
        },
        /**
         * Returns styles-string for svg-export, specific version for group
         * @return {String}
         */
        getSvgStyles: function() {
          var t = typeof this.opacity < "u" && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", a = this.visible ? "" : " visibility: hidden;";
          return [
            t,
            this.getSvgFilter(),
            a
          ].join("");
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(t) {
          for (var a = [], n = 0, c = this._objects.length; n < c; n++)
            a.push("	", this._objects[n].toClipPathSVG(t));
          return this._createBaseClipPathSVGMarkup(a, { reviver: t });
        }
        /* _TO_SVG_END_ */
      }
    ), e.Group.fromObject = function(t, a) {
      var n = t.objects, c = e.util.object.clone(t, !0);
      if (delete c.objects, typeof n == "string") {
        e.loadSVGFromURL(n, function(s) {
          var i = e.util.groupSVGElements(s, t, n);
          i.set(c), a && a(i);
        });
        return;
      }
      e.util.enlivenObjects(n, function(s) {
        e.util.enlivenObjects([t.clipPath], function(i) {
          var o = e.util.object.clone(t, !0);
          o.clipPath = i[0], delete o.objects, a && a(new e.Group(s, o, !0));
        });
      });
    });
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {});
    e.ActiveSelection || (e.ActiveSelection = e.util.createClass(
      e.Group,
      /** @lends fabric.ActiveSelection.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "activeSelection",
        /**
         * Constructor
         * @param {Object} objects ActiveSelection objects
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(h, r) {
          r = r || {}, this._objects = h || [];
          for (var t = this._objects.length; t--; )
            this._objects[t].group = this;
          r.originX && (this.originX = r.originX), r.originY && (this.originY = r.originY), this._calcBounds(), this._updateObjectsCoords(), e.Object.prototype.initialize.call(this, r), this.setCoords();
        },
        /**
         * Change te activeSelection to a normal group,
         * High level function that automatically adds it to canvas as
         * active object. no events fired.
         * @since 2.0.0
         * @return {fabric.Group}
         */
        toGroup: function() {
          var h = this._objects.concat();
          this._objects = [];
          var r = e.Object.prototype.toObject.call(this), t = new e.Group([]);
          if (delete r.type, t.set(r), h.forEach(function(n) {
            n.canvas.remove(n), n.group = t;
          }), t._objects = h, !this.canvas)
            return t;
          var a = this.canvas;
          return a.add(t), a._activeObject = t, t.setCoords(), t;
        },
        /**
         * If returns true, deselection is cancelled.
         * @since 2.0.0
         * @return {Boolean} [cancel]
         */
        onDeselect: function() {
          return this.destroy(), !1;
        },
        /**
         * Returns string representation of a group
         * @return {String}
         */
        toString: function() {
          return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * @return {Boolean}
         */
        shouldCache: function() {
          return !1;
        },
        /**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
        isOnACache: function() {
          return !1;
        },
        /**
         * Renders controls and borders for the object
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         * @param {Object} [childrenOverride] properties to override the children overrides
         */
        _renderControls: function(h, r, t) {
          h.save(), h.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", h, r), t = t || {}, typeof t.hasControls > "u" && (t.hasControls = !1), typeof t.hasRotatingPoint > "u" && (t.hasRotatingPoint = !1), t.forActiveSelection = !0;
          for (var a = 0, n = this._objects.length; a < n; a++)
            this._objects[a]._renderControls(h, t);
          h.restore();
        }
      }
    ), e.ActiveSelection.fromObject = function(h, r) {
      e.util.enlivenObjects(h.objects, function(t) {
        delete h.objects, r && r(new e.ActiveSelection(t, h, !0));
      });
    });
  }(m), function(f) {
    var e = u.util.object.extend;
    if (f.fabric || (f.fabric = {}), f.fabric.Image) {
      u.warn("fabric.Image is already defined.");
      return;
    }
    u.Image = u.util.createClass(
      u.Object,
      /** @lends fabric.Image.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "image",
        /**
         * crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @type String
         * @default
         */
        crossOrigin: "",
        /**
         * Width of a stroke.
         * For image quality a stroke multiple of 2 gives better results.
         * @type Number
         * @default
         */
        strokeWidth: 0,
        /**
         * When calling {@link fabric.Image.getSrc}, return value from element src with `element.getAttribute('src')`.
         * This allows for relative urls as image src.
         * @since 2.7.0
         * @type Boolean
         * @default
         */
        srcFromAttribute: !1,
        /**
         * private
         * contains last value of scaleX to detect
         * if the Image got resized after the last Render
         * @type Number
         */
        _lastScaleX: 1,
        /**
         * private
         * contains last value of scaleY to detect
         * if the Image got resized after the last Render
         * @type Number
         */
        _lastScaleY: 1,
        /**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
        _filterScalingX: 1,
        /**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
        _filterScalingY: 1,
        /**
         * minimum scale factor under which any resizeFilter is triggered to resize the image
         * 0 will disable the automatic resize. 1 will trigger automatically always.
         * number bigger than 1 are not implemented yet.
         * @type Number
         */
        minimumScaleTrigger: 0.5,
        /**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: u.Object.prototype.stateProperties.concat("cropX", "cropY"),
        /**
         * key used to retrieve the texture representing this image
         * @since 2.0.0
         * @type String
         * @default
         */
        cacheKey: "",
        /**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
        cropX: 0,
        /**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
        cropY: 0,
        /**
         * Constructor
         * @param {HTMLImageElement | String} element Image element
         * @param {Object} [options] Options object
         * @param {function} [callback] callback function to call after eventual filters applied.
         * @return {fabric.Image} thisArg
         */
        initialize: function(h, r) {
          r || (r = {}), this.filters = [], this.cacheKey = "texture" + u.Object.__uid++, this.callSuper("initialize", r), this._initElement(h, r);
        },
        /**
         * Returns image element which this instance if based on
         * @return {HTMLImageElement} Image element
         */
        getElement: function() {
          return this._element || {};
        },
        /**
         * Sets image element for this instance to a specified one.
         * If filters defined they are applied to new image.
         * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
         * @param {HTMLImageElement} element
         * @param {Object} [options] Options object
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setElement: function(h, r) {
          return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = h, this._originalElement = h, this._initConfig(r), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
        },
        /**
         * Delete a single texture if in webgl mode
         */
        removeTexture: function(h) {
          var r = u.filterBackend;
          r && r.evictCachesForKey && r.evictCachesForKey(h);
        },
        /**
         * Delete textures, reference to elements and eventually JSDOM cleanup
         */
        dispose: function() {
          this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(function(h) {
            u.util.cleanUpJsdomNode(this[h]), this[h] = void 0;
          }.bind(this));
        },
        /**
         * Sets crossOrigin value (on an instance and corresponding image element)
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setCrossOrigin: function(h) {
          return this.crossOrigin = h, this._element.crossOrigin = h, this;
        },
        /**
         * Returns original size of an image
         * @return {Object} Object with "width" and "height" properties
         */
        getOriginalSize: function() {
          var h = this.getElement();
          return {
            width: h.naturalWidth || h.width,
            height: h.naturalHeight || h.height
          };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _stroke: function(h) {
          if (!(!this.stroke || this.strokeWidth === 0)) {
            var r = this.width / 2, t = this.height / 2;
            h.beginPath(), h.moveTo(-r, -t), h.lineTo(r, -t), h.lineTo(r, t), h.lineTo(-r, t), h.lineTo(-r, -t), h.closePath();
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderDashedStroke: function(h) {
          var r = -this.width / 2, t = -this.height / 2, a = this.width, n = this.height;
          h.save(), this._setStrokeStyles(h, this), h.beginPath(), u.util.drawDashedLine(h, r, t, r + a, t, this.strokeDashArray), u.util.drawDashedLine(h, r + a, t, r + a, t + n, this.strokeDashArray), u.util.drawDashedLine(h, r + a, t + n, r, t + n, this.strokeDashArray), u.util.drawDashedLine(h, r, t + n, r, t, this.strokeDashArray), h.closePath(), h.restore();
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(h) {
          var r = [];
          this.filters.forEach(function(a) {
            a && r.push(a.toObject());
          });
          var t = e(
            this.callSuper(
              "toObject",
              ["crossOrigin", "cropX", "cropY"].concat(h)
            ),
            {
              src: this.getSrc(),
              filters: r
            }
          );
          return this.resizeFilter && (t.resizeFilter = this.resizeFilter.toObject()), t;
        },
        /**
         * Returns true if an image has crop applied, inspecting values of cropX,cropY,width,hight.
         * @return {Boolean}
         */
        hasCrop: function() {
          return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var h = [], r = [], t, a = -this.width / 2, n = -this.height / 2, c = "";
          if (this.hasCrop()) {
            var s = u.Object.__uid++;
            h.push(
              '<clipPath id="imageCrop_' + s + `">
`,
              '	<rect x="' + a + '" y="' + n + '" width="' + this.width + '" height="' + this.height + `" />
`,
              `</clipPath>
`
            ), c = ' clip-path="url(#imageCrop_' + s + ')" ';
          }
          if (r.push(
            "	<image ",
            "COMMON_PARTS",
            'xlink:href="',
            this.getSvgSrc(!0),
            '" x="',
            a - this.cropX,
            '" y="',
            n - this.cropY,
            // we're essentially moving origin of transformation from top/left corner to the center of the shape
            // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
            // so that object's center aligns with container's left/top
            '" width="',
            this._element.width || this._element.naturalWidth,
            '" height="',
            this._element.height || this._element.height,
            '"',
            c,
            `></image>
`
          ), this.stroke || this.strokeDashArray) {
            var i = this.fill;
            this.fill = null, t = [
              "	<rect ",
              'x="',
              a,
              '" y="',
              n,
              '" width="',
              this.width,
              '" height="',
              this.height,
              '" style="',
              this.getSvgStyles(),
              `"/>
`
            ], this.fill = i;
          }
          return this.paintFirst !== "fill" ? h = h.concat(t, r) : h = h.concat(r, t), h;
        },
        /* _TO_SVG_END_ */
        /**
         * Returns source of an image
         * @param {Boolean} filtered indicates if the src is needed for svg
         * @return {String} Source of an image
         */
        getSrc: function(h) {
          var r = h ? this._element : this._originalElement;
          return r ? r.toDataURL ? r.toDataURL() : this.srcFromAttribute ? r.getAttribute("src") : r.src : this.src || "";
        },
        /**
         * Sets source of an image
         * @param {String} src Source string (URL)
         * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
         * @param {Object} [options] Options object
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setSrc: function(h, r, t) {
          return u.util.loadImage(h, function(a) {
            this.setElement(a, t), this._setWidthHeight(), r && r(this);
          }, this, t && t.crossOrigin), this;
        },
        /**
         * Returns string representation of an instance
         * @return {String} String representation of an instance
         */
        toString: function() {
          return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
        },
        applyResizeFilters: function() {
          var h = this.resizeFilter, r = this.minimumScaleTrigger, t = this.getTotalObjectScaling(), a = t.scaleX, n = t.scaleY, c = this._filteredEl || this._originalElement;
          if (this.group && this.set("dirty", !0), !h || a > r && n > r) {
            this._element = c, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = a, this._lastScaleY = n;
            return;
          }
          u.filterBackend || (u.filterBackend = u.initFilterBackend());
          var s = u.util.createCanvasElement(), i = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, o = c.width, l = c.height;
          s.width = o, s.height = l, this._element = s, this._lastScaleX = h.scaleX = a, this._lastScaleY = h.scaleY = n, u.filterBackend.applyFilters(
            [h],
            c,
            o,
            l,
            this._element,
            i
          ), this._filterScalingX = s.width / this._originalElement.width, this._filterScalingY = s.height / this._originalElement.height;
        },
        /**
         * Applies filters assigned to this image (from "filters" array) or from filter param
         * @method applyFilters
         * @param {Array} filters to be applied
         * @param {Boolean} forResizing specify if the filter operation is a resize operation
         * @return {thisArg} return the fabric.Image object
         * @chainable
         */
        applyFilters: function(h) {
          if (h = h || this.filters || [], h = h.filter(function(c) {
            return c && !c.isNeutralState();
          }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), h.length === 0)
            return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
          var r = this._originalElement, t = r.naturalWidth || r.width, a = r.naturalHeight || r.height;
          if (this._element === this._originalElement) {
            var n = u.util.createCanvasElement();
            n.width = t, n.height = a, this._element = n, this._filteredEl = n;
          } else
            this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, t, a), this._lastScaleX = 1, this._lastScaleY = 1;
          return u.filterBackend || (u.filterBackend = u.initFilterBackend()), u.filterBackend.applyFilters(
            h,
            this._originalElement,
            t,
            a,
            this._element,
            this.cacheKey
          ), (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) && (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(h) {
          this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(h), this._renderPaintInOrder(h);
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * This is the special image version where we would like to avoid caching where possible.
         * Essentially images do not benefit from caching. They may require caching, and in that
         * case we do it. Also caching an image usually ends in a loss of details.
         * A full performance audit should be done.
         * @return {Boolean}
         */
        shouldCache: function() {
          return this.needsItsOwnCache();
        },
        _renderFill: function(h) {
          var r = this._element, t = this.width, a = this.height, n = Math.min(r.naturalWidth || r.width, t * this._filterScalingX), c = Math.min(r.naturalHeight || r.height, a * this._filterScalingY), s = -t / 2, i = -a / 2, o = Math.max(0, this.cropX * this._filterScalingX), l = Math.max(0, this.cropY * this._filterScalingY);
          r && h.drawImage(r, o, l, n, c, s, i, t, a);
        },
        /**
         * needed to check if image needs resize
         * @private
         */
        _needsResize: function() {
          var h = this.getTotalObjectScaling();
          return h.scaleX !== this._lastScaleX || h.scaleY !== this._lastScaleY;
        },
        /**
         * @private
         */
        _resetWidthHeight: function() {
          this.set(this.getOriginalSize());
        },
        /**
         * The Image class's initialization method. This method is automatically
         * called by the constructor.
         * @private
         * @param {HTMLImageElement|String} element The element representing the image
         * @param {Object} [options] Options object
         */
        _initElement: function(h, r) {
          this.setElement(u.util.getById(h), r), u.util.addClass(this.getElement(), u.Image.CSS_CANVAS);
        },
        /**
         * @private
         * @param {Object} [options] Options object
         */
        _initConfig: function(h) {
          h || (h = {}), this.setOptions(h), this._setWidthHeight(h), this._element && this.crossOrigin && (this._element.crossOrigin = this.crossOrigin);
        },
        /**
         * @private
         * @param {Array} filters to be initialized
         * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
         */
        _initFilters: function(h, r) {
          h && h.length ? u.util.enlivenObjects(h, function(t) {
            r && r(t);
          }, "fabric.Image.filters") : r && r();
        },
        /**
         * @private
         * Set the width and the height of the image object, using the element or the
         * options.
         * @param {Object} [options] Object with width/height properties
         */
        _setWidthHeight: function(h) {
          h || (h = {});
          var r = this.getElement();
          this.width = h.width || r.naturalWidth || r.width || 0, this.height = h.height || r.naturalHeight || r.height || 0;
        },
        /**
         * Calculate offset for center and scale factor for the image in order to respect
         * the preserveAspectRatio attribute
         * @private
         * @return {Object}
         */
        parsePreserveAspectRatioAttribute: function() {
          var h = u.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), r = this._element.width, t = this._element.height, a = 1, n = 1, c = 0, s = 0, i = 0, o = 0, l, d = this.width, g = this.height, v = { width: d, height: g };
          return h && (h.alignX !== "none" || h.alignY !== "none") ? (h.meetOrSlice === "meet" && (a = n = u.util.findScaleToFit(this._element, v), l = (d - r * a) / 2, h.alignX === "Min" && (c = -l), h.alignX === "Max" && (c = l), l = (g - t * n) / 2, h.alignY === "Min" && (s = -l), h.alignY === "Max" && (s = l)), h.meetOrSlice === "slice" && (a = n = u.util.findScaleToCover(this._element, v), l = r - d / a, h.alignX === "Mid" && (i = l / 2), h.alignX === "Max" && (i = l), l = t - g / n, h.alignY === "Mid" && (o = l / 2), h.alignY === "Max" && (o = l), r = d / a, t = g / n)) : (a = d / r, n = g / t), {
            width: r,
            height: t,
            scaleX: a,
            scaleY: n,
            offsetLeft: c,
            offsetTop: s,
            cropX: i,
            cropY: o
          };
        }
      }
    ), u.Image.CSS_CANVAS = "canvas-img", u.Image.prototype.getSvgSrc = u.Image.prototype.getSrc, u.Image.fromObject = function(h, r) {
      var t = u.util.object.clone(h);
      u.util.loadImage(t.src, function(a, n) {
        if (n) {
          r && r(null, n);
          return;
        }
        u.Image.prototype._initFilters.call(t, t.filters, function(c) {
          t.filters = c || [], u.Image.prototype._initFilters.call(t, [t.resizeFilter], function(s) {
            t.resizeFilter = s[0], u.util.enlivenObjects([t.clipPath], function(i) {
              t.clipPath = i[0];
              var o = new u.Image(a, t);
              r(o);
            });
          });
        });
      }, null, t.crossOrigin);
    }, u.Image.fromURL = function(h, r, t) {
      u.util.loadImage(h, function(a) {
        r && r(new u.Image(a, t));
      }, null, t && t.crossOrigin);
    }, u.Image.ATTRIBUTE_NAMES = u.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin".split(" ")), u.Image.fromElement = function(h, r, t) {
      var a = u.parseAttributes(h, u.Image.ATTRIBUTE_NAMES);
      u.Image.fromURL(
        a["xlink:href"],
        r,
        e(t ? u.util.object.clone(t) : {}, a)
      );
    };
  }(m), u.util.object.extend(
    u.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * @private
       * @return {Number} angle value
       */
      _getAngleValueForStraighten: function() {
        var f = this.angle % 360;
        return f > 0 ? Math.round((f - 1) / 90) * 90 : Math.round(f / 90) * 90;
      },
      /**
       * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
       * @return {fabric.Object} thisArg
       * @chainable
       */
      straighten: function() {
        return this.rotate(this._getAngleValueForStraighten()), this;
      },
      /**
       * Same as {@link fabric.Object.prototype.straighten} but with animation
       * @param {Object} callbacks Object with callback functions
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.Object} thisArg
       * @chainable
       */
      fxStraighten: function(f) {
        f = f || {};
        var e = function() {
        }, h = f.onComplete || e, r = f.onChange || e, t = this;
        return u.util.animate({
          startValue: this.get("angle"),
          endValue: this._getAngleValueForStraighten(),
          duration: this.FX_DURATION,
          onChange: function(a) {
            t.rotate(a), r();
          },
          onComplete: function() {
            t.setCoords(), h();
          }
        }), this;
      }
    }
  ), u.util.object.extend(
    u.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Straightens object, then rerenders canvas
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
      straightenObject: function(f) {
        return f.straighten(), this.requestRenderAll(), this;
      },
      /**
       * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
      fxStraightenObject: function(f) {
        return f.fxStraighten({
          onChange: this.requestRenderAllBound
        }), this;
      }
    }
  ), function() {
    function f(h, r) {
      var t = "precision " + r + ` float;
void main(){}`, a = h.createShader(h.FRAGMENT_SHADER);
      return h.shaderSource(a, t), h.compileShader(a), !!h.getShaderParameter(a, h.COMPILE_STATUS);
    }
    u.isWebglSupported = function(h) {
      if (u.isLikelyNode)
        return !1;
      h = h || u.WebglFilterBackend.prototype.tileSize;
      var r = document.createElement("canvas"), t = r.getContext("webgl") || r.getContext("experimental-webgl"), a = !1;
      if (t) {
        u.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), a = u.maxTextureSize >= h;
        for (var n = ["highp", "mediump", "lowp"], c = 0; c < 3; c++)
          if (f(t, n[c])) {
            u.webGlPrecision = n[c];
            break;
          }
      }
      return this.isSupported = a, a;
    }, u.WebglFilterBackend = e;
    function e(h) {
      h && h.tileSize && (this.tileSize = h.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
    }
    e.prototype = /** @lends fabric.WebglFilterBackend.prototype */
    {
      tileSize: 2048,
      /**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you problably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
      resources: {},
      /**
       * Setup a WebGL context suitable for filtering, and bind any needed event handlers.
       */
      setupGLContext: function(h, r) {
        this.dispose(), this.createWebGLCanvas(h, r), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(h, r);
      },
      /**
       * Pick a method to copy data from GL context to 2d canvas.  In some browsers using
       * putImageData is faster than drawImage for that specific operation.
       */
      chooseFastestCopyGLTo2DMethod: function(h, r) {
        var t = typeof window.performance < "u", a;
        try {
          new ImageData(1, 1), a = !0;
        } catch {
          a = !1;
        }
        var n = typeof ArrayBuffer < "u", c = typeof Uint8ClampedArray < "u";
        if (t && a && n && c) {
          var s = u.util.createCanvasElement(), i = new ArrayBuffer(h * r * 4);
          if (u.forceGLPutImageData) {
            this.imageBuffer = i, this.copyGLTo2D = D;
            return;
          }
          var o = {
            imageBuffer: i,
            destinationWidth: h,
            destinationHeight: r,
            targetCanvas: s
          }, l, d, g;
          s.width = h, s.height = r, l = window.performance.now(), w.call(o, this.gl, o), d = window.performance.now() - l, l = window.performance.now(), D.call(o, this.gl, o), g = window.performance.now() - l, d > g ? (this.imageBuffer = i, this.copyGLTo2D = D) : this.copyGLTo2D = w;
        }
      },
      /**
       * Create a canvas element and associated WebGL context and attaches them as
       * class properties to the GLFilterBackend class.
       */
      createWebGLCanvas: function(h, r) {
        var t = u.util.createCanvasElement();
        t.width = h, t.height = r;
        var a = {
          alpha: !0,
          premultipliedAlpha: !1,
          depth: !1,
          stencil: !1,
          antialias: !1
        }, n = t.getContext("webgl", a);
        n || (n = t.getContext("experimental-webgl", a)), n && (n.clearColor(0, 0, 0, 0), this.canvas = t, this.gl = n);
      },
      /**
       * Attempts to apply the requested filters to the source provided, drawing the filtered output
       * to the provided target canvas.
       *
       * @param {Array} filters The filters to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} source The source to be filtered.
       * @param {Number} width The width of the source input.
       * @param {Number} height The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       * @param {String|undefined} cacheKey A key used to cache resources related to the source. If
       * omitted, caching will be skipped.
       */
      applyFilters: function(h, r, t, a, n, c) {
        var s = this.gl, i;
        c && (i = this.getCachedTexture(c, r));
        var o = {
          originalWidth: r.width || r.originalWidth,
          originalHeight: r.height || r.originalHeight,
          sourceWidth: t,
          sourceHeight: a,
          destinationWidth: t,
          destinationHeight: a,
          context: s,
          sourceTexture: this.createTexture(s, t, a, !i && r),
          targetTexture: this.createTexture(s, t, a),
          originalTexture: i || this.createTexture(s, t, a, !i && r),
          passes: h.length,
          webgl: !0,
          aPosition: this.aPosition,
          programCache: this.programCache,
          pass: 0,
          filterBackend: this,
          targetCanvas: n
        }, l = s.createFramebuffer();
        return s.bindFramebuffer(s.FRAMEBUFFER, l), h.forEach(function(d) {
          d && d.applyTo(o);
        }), x(o), this.copyGLTo2D(s, o), s.bindTexture(s.TEXTURE_2D, null), s.deleteTexture(o.sourceTexture), s.deleteTexture(o.targetTexture), s.deleteFramebuffer(l), n.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), o;
      },
      /**
       * Detach event listeners, remove references, and clean up caches.
       */
      dispose: function() {
        this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
      },
      /**
       * Wipe out WebGL-related caches.
       */
      clearWebGLCaches: function() {
        this.programCache = {}, this.textureCache = {};
      },
      /**
       * Create a WebGL texture object.
       *
       * Accepts specific dimensions to initialize the textuer to or a source image.
       *
       * @param {WebGLRenderingContext} gl The GL context to use for creating the texture.
       * @param {Number} width The width to initialize the texture at.
       * @param {Number} height The height to initialize the texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source for the texture data.
       * @returns {WebGLTexture}
       */
      createTexture: function(h, r, t, a) {
        var n = h.createTexture();
        return h.bindTexture(h.TEXTURE_2D, n), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), a ? h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, a) : h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, r, t, 0, h.RGBA, h.UNSIGNED_BYTE, null), n;
      },
      /**
       * Can be optionally used to get a texture from the cache array
       *
       * If an existing texture is not found, a new texture is created and cached.
       *
       * @param {String} uniqueId A cache key to use to find an existing texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source to use to create the
       * texture cache entry if one does not already exist.
       */
      getCachedTexture: function(h, r) {
        if (this.textureCache[h])
          return this.textureCache[h];
        var t = this.createTexture(
          this.gl,
          r.width,
          r.height,
          r
        );
        return this.textureCache[h] = t, t;
      },
      /**
       * Clear out cached resources related to a source image that has been
       * filtered previously.
       *
       * @param {String} cacheKey The cache key provided when the source image was filtered.
       */
      evictCachesForKey: function(h) {
        this.textureCache[h] && (this.gl.deleteTexture(this.textureCache[h]), delete this.textureCache[h]);
      },
      copyGLTo2D: w,
      /**
       * Attempt to extract GPU information strings from a WebGL context.
       *
       * Useful information when debugging or blacklisting specific GPUs.
       *
       * @returns {Object} A GPU info object with renderer and vendor strings.
       */
      captureGPUInfo: function() {
        if (this.gpuInfo)
          return this.gpuInfo;
        var h = this.gl, r = { renderer: "", vendor: "" };
        if (!h)
          return r;
        var t = h.getExtension("WEBGL_debug_renderer_info");
        if (t) {
          var a = h.getParameter(t.UNMASKED_RENDERER_WEBGL), n = h.getParameter(t.UNMASKED_VENDOR_WEBGL);
          a && (r.renderer = a.toLowerCase()), n && (r.vendor = n.toLowerCase());
        }
        return this.gpuInfo = r, r;
      }
    };
  }();
  function x(f) {
    var e = f.targetCanvas, h = e.width, r = e.height, t = f.destinationWidth, a = f.destinationHeight;
    (h !== t || r !== a) && (e.width = t, e.height = a);
  }
  function w(f, e) {
    var h = f.canvas, r = e.targetCanvas, t = r.getContext("2d");
    t.translate(0, r.height), t.scale(1, -1);
    var a = h.height - r.height;
    t.drawImage(
      h,
      0,
      a,
      r.width,
      r.height,
      0,
      0,
      r.width,
      r.height
    );
  }
  function D(f, e) {
    var h = e.targetCanvas, r = h.getContext("2d"), t = e.destinationWidth, a = e.destinationHeight, n = t * a * 4, c = new Uint8Array(this.imageBuffer, 0, n), s = new Uint8ClampedArray(this.imageBuffer, 0, n);
    f.readPixels(0, 0, t, a, f.RGBA, f.UNSIGNED_BYTE, c);
    var i = new ImageData(s, t, a);
    r.putImageData(i, 0, 0);
  }
  (function() {
    var f = function() {
    };
    u.Canvas2dFilterBackend = e;
    function e() {
    }
    e.prototype = /** @lends fabric.Canvas2dFilterBackend.prototype */
    {
      evictCachesForKey: f,
      dispose: f,
      clearWebGLCaches: f,
      /**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
      resources: {},
      /**
       * Apply a set of filters against a source image and draw the filtered output
       * to the provided destination canvas.
       *
       * @param {EnhancedFilter} filters The filter to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} sourceElement The source to be filtered.
       * @param {Number} sourceWidth The width of the source input.
       * @param {Number} sourceHeight The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       */
      applyFilters: function(h, r, t, a, n) {
        var c = n.getContext("2d");
        c.drawImage(r, 0, 0, t, a);
        var s = c.getImageData(0, 0, t, a), i = c.getImageData(0, 0, t, a), o = {
          sourceWidth: t,
          sourceHeight: a,
          imageData: s,
          originalEl: r,
          originalImageData: i,
          canvasEl: n,
          ctx: c,
          filterBackend: this
        };
        return h.forEach(function(l) {
          l.applyTo(o);
        }), (o.imageData.width !== t || o.imageData.height !== a) && (n.width = o.imageData.width, n.height = o.imageData.height), c.putImageData(o.imageData, 0, 0), o;
      }
    };
  })(), u.Image = u.Image || {}, u.Image.filters = u.Image.filters || {}, u.Image.filters.BaseFilter = u.util.createClass(
    /** @lends fabric.Image.filters.BaseFilter.prototype */
    {
      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: "BaseFilter",
      /**
       * Array of attributes to send with buffers. do not modify
       * @private
       */
      vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
void main() {
vTexCoord = aPosition;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
      fragmentSource: `precision highp float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
}`,
      /**
       * Constructor
       * @param {Object} [options] Options object
       */
      initialize: function(f) {
        f && this.setOptions(f);
      },
      /**
       * Sets filter's properties from options
       * @param {Object} [options] Options object
       */
      setOptions: function(f) {
        for (var e in f)
          this[e] = f[e];
      },
      /**
       * Compile this filter's shader program.
       *
       * @param {WebGLRenderingContext} gl The GL canvas context to use for shader compilation.
       * @param {String} fragmentSource fragmentShader source for compilation
       * @param {String} vertexSource vertexShader source for compilation
       */
      createProgram: function(f, e, h) {
        e = e || this.fragmentSource, h = h || this.vertexSource, u.webGlPrecision !== "highp" && (e = e.replace(
          /precision highp float/g,
          "precision " + u.webGlPrecision + " float"
        ));
        var r = f.createShader(f.VERTEX_SHADER);
        if (f.shaderSource(r, h), f.compileShader(r), !f.getShaderParameter(r, f.COMPILE_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            "Vertex shader compile error for " + this.type + ": " + f.getShaderInfoLog(r)
          );
        var t = f.createShader(f.FRAGMENT_SHADER);
        if (f.shaderSource(t, e), f.compileShader(t), !f.getShaderParameter(t, f.COMPILE_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            "Fragment shader compile error for " + this.type + ": " + f.getShaderInfoLog(t)
          );
        var a = f.createProgram();
        if (f.attachShader(a, r), f.attachShader(a, t), f.linkProgram(a), !f.getProgramParameter(a, f.LINK_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            'Shader link error for "${this.type}" ' + f.getProgramInfoLog(a)
          );
        var n = this.getAttributeLocations(f, a), c = this.getUniformLocations(f, a) || {};
        return c.uStepW = f.getUniformLocation(a, "uStepW"), c.uStepH = f.getUniformLocation(a, "uStepH"), {
          program: a,
          attributeLocations: n,
          uniformLocations: c
        };
      },
      /**
       * Return a map of attribute names to WebGLAttributeLocation objects.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take attribute locations.
       * @returns {Object} A map of attribute names to attribute locations.
       */
      getAttributeLocations: function(f, e) {
        return {
          aPosition: f.getAttribLocation(e, "aPosition")
        };
      },
      /**
       * Return a map of uniform names to WebGLUniformLocation objects.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take uniform locations.
       * @returns {Object} A map of uniform names to uniform locations.
       */
      getUniformLocations: function() {
        return {};
      },
      /**
       * Send attribute data from this filter to its shader program on the GPU.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} attributeLocations A map of shader attribute names to their locations.
       */
      sendAttributeData: function(f, e, h) {
        var r = e.aPosition, t = f.createBuffer();
        f.bindBuffer(f.ARRAY_BUFFER, t), f.enableVertexAttribArray(r), f.vertexAttribPointer(r, 2, f.FLOAT, !1, 0, 0), f.bufferData(f.ARRAY_BUFFER, h, f.STATIC_DRAW);
      },
      _setupFrameBuffer: function(f) {
        var e = f.context, h, r;
        f.passes > 1 ? (h = f.destinationWidth, r = f.destinationHeight, (f.sourceWidth !== h || f.sourceHeight !== r) && (e.deleteTexture(f.targetTexture), f.targetTexture = f.filterBackend.createTexture(e, h, r)), e.framebufferTexture2D(
          e.FRAMEBUFFER,
          e.COLOR_ATTACHMENT0,
          e.TEXTURE_2D,
          f.targetTexture,
          0
        )) : (e.bindFramebuffer(e.FRAMEBUFFER, null), e.finish());
      },
      _swapTextures: function(f) {
        f.passes--, f.pass++;
        var e = f.targetTexture;
        f.targetTexture = f.sourceTexture, f.sourceTexture = e;
      },
      /**
       * Generic isNeutral implementation for one parameter based filters.
       * Used only in image applyFilters to discard filters that will not have an effect
       * on the image
       * Other filters may need their own verison ( ColorMatrix, HueRotation, gamma, ComposedFilter )
       * @param {Object} options
       **/
      isNeutralState: function() {
        var f = this.mainParameter, e = u.Image.filters[this.type].prototype;
        if (f)
          if (Array.isArray(e[f])) {
            for (var h = e[f].length; h--; )
              if (this[f][h] !== e[f][h])
                return !1;
            return !0;
          } else
            return e[f] === this[f];
        else
          return !1;
      },
      /**
       * Apply this filter to the input image data provided.
       *
       * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      applyTo: function(f) {
        f.webgl ? (this._setupFrameBuffer(f), this.applyToWebGL(f), this._swapTextures(f)) : this.applyTo2d(f);
      },
      /**
       * Retrieves the cached shader.
       * @param {Object} options
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      retrieveShader: function(f) {
        return f.programCache.hasOwnProperty(this.type) || (f.programCache[this.type] = this.createProgram(f.context)), f.programCache[this.type];
      },
      /**
       * Apply this filter using webgl.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.originalTexture The texture of the original input image.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      applyToWebGL: function(f) {
        var e = f.context, h = this.retrieveShader(f);
        f.pass === 0 && f.originalTexture ? e.bindTexture(e.TEXTURE_2D, f.originalTexture) : e.bindTexture(e.TEXTURE_2D, f.sourceTexture), e.useProgram(h.program), this.sendAttributeData(e, h.attributeLocations, f.aPosition), e.uniform1f(h.uniformLocations.uStepW, 1 / f.sourceWidth), e.uniform1f(h.uniformLocations.uStepH, 1 / f.sourceHeight), this.sendUniformData(e, h.uniformLocations), e.viewport(0, 0, f.destinationWidth, f.destinationHeight), e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
      },
      bindAdditionalTexture: function(f, e, h) {
        f.activeTexture(h), f.bindTexture(f.TEXTURE_2D, e), f.activeTexture(f.TEXTURE0);
      },
      unbindAdditionalTexture: function(f, e) {
        f.activeTexture(e), f.bindTexture(f.TEXTURE_2D, null), f.activeTexture(f.TEXTURE0);
      },
      getMainParameter: function() {
        return this[this.mainParameter];
      },
      setMainParameter: function(f) {
        this[this.mainParameter] = f;
      },
      /**
       * Send uniform data from this filter to its shader program on the GPU.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} uniformLocations A map of shader uniform names to their locations.
       */
      sendUniformData: function() {
      },
      /**
       * If needed by a 2d filter, this functions can create an helper canvas to be used
       * remember that options.targetCanvas is available for use till end of chain.
       */
      createHelpLayer: function(f) {
        if (!f.helpLayer) {
          var e = document.createElement("canvas");
          e.width = f.sourceWidth, e.height = f.sourceHeight, f.helpLayer = e;
        }
      },
      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function() {
        var f = { type: this.type }, e = this.mainParameter;
        return e && (f[e] = this[e]), f;
      },
      /**
       * Returns a JSON representation of an instance
       * @return {Object} JSON
       */
      toJSON: function() {
        return this.toObject();
      }
    }
  ), u.Image.filters.BaseFilter.fromObject = function(f, e) {
    var h = new u.Image.filters[f.type](f);
    return e && e(h), h;
  }, function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.ColorMatrix = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.ColorMatrix.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "ColorMatrix",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
uniform mat4 uColorMatrix;
uniform vec4 uConstants;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color *= uColorMatrix;
color += uConstants;
gl_FragColor = color;
}`,
        /**
         * Colormatrix for pixels.
         * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
         * outside the -1, 1 range.
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Array} matrix array of 20 numbers.
         * @default
         */
        matrix: [
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ],
        mainParameter: "matrix",
        /**
         * Lock the colormatrix on the color part, skipping alpha, manly for non webgl scenario
         * to save some calculation
         */
        colorsOnly: !0,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(t) {
          this.callSuper("initialize", t), this.matrix = this.matrix.slice(0);
        },
        /**
         * Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(t) {
          var a = t.imageData, n = a.data, c = n.length, s = this.matrix, i, o, l, d, g, v = this.colorsOnly;
          for (g = 0; g < c; g += 4)
            i = n[g], o = n[g + 1], l = n[g + 2], v ? (n[g] = i * s[0] + o * s[1] + l * s[2] + s[4] * 255, n[g + 1] = i * s[5] + o * s[6] + l * s[7] + s[9] * 255, n[g + 2] = i * s[10] + o * s[11] + l * s[12] + s[14] * 255) : (d = n[g + 3], n[g] = i * s[0] + o * s[1] + l * s[2] + d * s[3] + s[4] * 255, n[g + 1] = i * s[5] + o * s[6] + l * s[7] + d * s[8] + s[9] * 255, n[g + 2] = i * s[10] + o * s[11] + l * s[12] + d * s[13] + s[14] * 255, n[g + 3] = i * s[15] + o * s[16] + l * s[17] + d * s[18] + s[19] * 255);
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uColorMatrix: t.getUniformLocation(a, "uColorMatrix"),
            uConstants: t.getUniformLocation(a, "uConstants")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          var n = this.matrix, c = [
            n[0],
            n[1],
            n[2],
            n[3],
            n[5],
            n[6],
            n[7],
            n[8],
            n[10],
            n[11],
            n[12],
            n[13],
            n[15],
            n[16],
            n[17],
            n[18]
          ], s = [n[4], n[9], n[14], n[19]];
          t.uniformMatrix4fv(a.uColorMatrix, !1, c), t.uniform4fv(a.uConstants, s);
        }
      }
    ), e.Image.filters.ColorMatrix.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Brightness = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Brightness.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Brightness",
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBrightness;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += uBrightness;
gl_FragColor = color;
}`,
        /**
         * Brightness value, from -1 to 1.
         * translated to -255 to 255 for 2d
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Number} brightness
         * @default
         */
        brightness: 0,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "brightness",
        /**
        * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
        *
        * @param {Object} options
        * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
        */
        applyTo2d: function(t) {
          if (this.brightness !== 0) {
            var a = t.imageData, n = a.data, c, s = n.length, i = Math.round(this.brightness * 255);
            for (c = 0; c < s; c += 4)
              n[c] = n[c] + i, n[c + 1] = n[c + 1] + i, n[c + 2] = n[c + 2] + i;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uBrightness: t.getUniformLocation(a, "uBrightness")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          t.uniform1f(a.uBrightness, this.brightness);
        }
      }
    ), e.Image.filters.Brightness.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.extend, r = e.Image.filters, t = e.util.createClass;
    r.Convolute = t(
      r.BaseFilter,
      /** @lends fabric.Image.filters.Convolute.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Convolute",
        /*
         * Opaque value (true/false)
         */
        opaque: !1,
        /*
         * matrix for the filter, max 9x9
         */
        matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: {
          Convolute_3_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_3_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_5_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_5_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_7_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_7_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_9_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_9_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`
        },
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Convolute.prototype
         * @param {Object} [options] Options object
         * @param {Boolean} [options.opaque=false] Opaque value (true/false)
         * @param {Array} [options.matrix] Filter matrix
         */
        /**
        * Retrieves the cached shader.
        * @param {Object} options
        * @param {WebGLRenderingContext} options.context The GL context used for rendering.
        * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
        */
        retrieveShader: function(a) {
          var n = Math.sqrt(this.matrix.length), c = this.type + "_" + n + "_" + (this.opaque ? 1 : 0), s = this.fragmentSource[c];
          return a.programCache.hasOwnProperty(c) || (a.programCache[c] = this.createProgram(a.context, s)), a.programCache[c];
        },
        /**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(a) {
          var n = a.imageData, c = n.data, s = this.matrix, i = Math.round(Math.sqrt(s.length)), o = Math.floor(i / 2), l = n.width, d = n.height, g = a.ctx.createImageData(l, d), v = g.data, _ = this.opaque ? 1 : 0, p, C, S, O, k, P, F, E, X, z, N, J, T;
          for (N = 0; N < d; N++)
            for (z = 0; z < l; z++) {
              for (k = (N * l + z) * 4, p = 0, C = 0, S = 0, O = 0, T = 0; T < i; T++)
                for (J = 0; J < i; J++)
                  F = N + T - o, P = z + J - o, !(F < 0 || F >= d || P < 0 || P >= l) && (E = (F * l + P) * 4, X = s[T * i + J], p += c[E] * X, C += c[E + 1] * X, S += c[E + 2] * X, _ || (O += c[E + 3] * X));
              v[k] = p, v[k + 1] = C, v[k + 2] = S, _ ? v[k + 3] = c[k + 3] : v[k + 3] = O;
            }
          a.imageData = g;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(a, n) {
          return {
            uMatrix: a.getUniformLocation(n, "uMatrix"),
            uOpaque: a.getUniformLocation(n, "uOpaque"),
            uHalfSize: a.getUniformLocation(n, "uHalfSize"),
            uSize: a.getUniformLocation(n, "uSize")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(a, n) {
          a.uniform1fv(n.uMatrix, this.matrix);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            opaque: this.opaque,
            matrix: this.matrix
          });
        }
      }
    ), e.Image.filters.Convolute.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Grayscale = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Grayscale.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Grayscale",
        fragmentSource: {
          average: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float average = (color.r + color.b + color.g) / 3.0;
gl_FragColor = vec4(average, average, average, color.a);
}`,
          lightness: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
gl_FragColor = vec4(average, average, average, col.a);
}`,
          luminosity: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
gl_FragColor = vec4(average, average, average, col.a);
}`
        },
        /**
         * Grayscale mode, between 'average', 'lightness', 'luminosity'
         * @param {String} type
         * @default
         */
        mode: "average",
        mainParameter: "mode",
        /**
         * Apply the Grayscale operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(t) {
          var a = t.imageData, n = a.data, c, s = n.length, i, o = this.mode;
          for (c = 0; c < s; c += 4)
            o === "average" ? i = (n[c] + n[c + 1] + n[c + 2]) / 3 : o === "lightness" ? i = (Math.min(n[c], n[c + 1], n[c + 2]) + Math.max(n[c], n[c + 1], n[c + 2])) / 2 : o === "luminosity" && (i = 0.21 * n[c] + 0.72 * n[c + 1] + 0.07 * n[c + 2]), n[c] = i, n[c + 1] = i, n[c + 2] = i;
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(t) {
          var a = this.type + "_" + this.mode;
          if (!t.programCache.hasOwnProperty(a)) {
            var n = this.fragmentSource[this.mode];
            t.programCache[a] = this.createProgram(t.context, n);
          }
          return t.programCache[a];
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uMode: t.getUniformLocation(a, "uMode")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          var n = 1;
          t.uniform1i(a.uMode, n);
        },
        /**
         * Grayscale filter isNeutralState implementation
         * The filter is never neutral
         * on the image
         **/
        isNeutralState: function() {
          return !1;
        }
      }
    ), e.Image.filters.Grayscale.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Invert = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Invert.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Invert",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform int uInvert;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
if (uInvert == 1) {
gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
} else {
gl_FragColor = color;
}
}`,
        /**
         * Filter invert. if false, does nothing
         * @param {Boolean} invert
         * @default
         */
        invert: !0,
        mainParameter: "invert",
        /**
         * Apply the Invert operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(t) {
          var a = t.imageData, n = a.data, c, s = n.length;
          for (c = 0; c < s; c += 4)
            n[c] = 255 - n[c], n[c + 1] = 255 - n[c + 1], n[c + 2] = 255 - n[c + 2];
        },
        /**
         * Invert filter isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
        isNeutralState: function() {
          return !this.invert;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uInvert: t.getUniformLocation(a, "uInvert")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          t.uniform1i(a.uInvert, this.invert);
        }
      }
    ), e.Image.filters.Invert.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.extend, r = e.Image.filters, t = e.util.createClass;
    r.Noise = t(
      r.BaseFilter,
      /** @lends fabric.Image.filters.Noise.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Noise",
        /**
         * Fragment source for the noise program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uStepH;
uniform float uNoise;
uniform float uSeed;
varying vec2 vTexCoord;
float rand(vec2 co, float seed, float vScale) {
return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
}
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
gl_FragColor = color;
}`,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "noise",
        /**
         * Noise value, from
         * @param {Number} noise
         * @default
         */
        noise: 0,
        /**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(a) {
          if (this.noise !== 0) {
            var n = a.imageData, c = n.data, s, i = c.length, o = this.noise, l;
            for (s = 0, i = c.length; s < i; s += 4)
              l = (0.5 - Math.random()) * o, c[s] += l, c[s + 1] += l, c[s + 2] += l;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(a, n) {
          return {
            uNoise: a.getUniformLocation(n, "uNoise"),
            uSeed: a.getUniformLocation(n, "uSeed")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(a, n) {
          a.uniform1f(n.uNoise, this.noise / 255), a.uniform1f(n.uSeed, Math.random());
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            noise: this.noise
          });
        }
      }
    ), e.Image.filters.Noise.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Pixelate = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Pixelate.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Pixelate",
        blocksize: 4,
        mainParameter: "blocksize",
        /**
         * Fragment source for the Pixelate program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBlocksize;
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
float blockW = uBlocksize * uStepW;
float blockH = uBlocksize * uStepW;
int posX = int(vTexCoord.x / blockW);
int posY = int(vTexCoord.y / blockH);
float fposX = float(posX);
float fposY = float(posY);
vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
vec4 color = texture2D(uTexture, squareCoords);
gl_FragColor = color;
}`,
        /**
         * Apply the Pixelate operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          var a = t.imageData, n = a.data, c = a.height, s = a.width, i, o, l, d, g, v, _, p, C, S, O;
          for (o = 0; o < c; o += this.blocksize)
            for (l = 0; l < s; l += this.blocksize)
              for (i = o * 4 * s + l * 4, d = n[i], g = n[i + 1], v = n[i + 2], _ = n[i + 3], S = Math.min(o + this.blocksize, c), O = Math.min(l + this.blocksize, s), p = o; p < S; p++)
                for (C = l; C < O; C++)
                  i = p * 4 * s + C * 4, n[i] = d, n[i + 1] = g, n[i + 2] = v, n[i + 3] = _;
        },
        /**
         * Indicate when the filter is not gonna apply changes to the image
         **/
        isNeutralState: function() {
          return this.blocksize === 1;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uBlocksize: t.getUniformLocation(a, "uBlocksize"),
            uStepW: t.getUniformLocation(a, "uStepW"),
            uStepH: t.getUniformLocation(a, "uStepH")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          t.uniform1f(a.uBlocksize, this.blocksize);
        }
      }
    ), e.Image.filters.Pixelate.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.extend, r = e.Image.filters, t = e.util.createClass;
    r.RemoveColor = t(
      r.BaseFilter,
      /** @lends fabric.Image.filters.RemoveColor.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "RemoveColor",
        /**
         * Color to remove, in any format understood by fabric.Color.
         * @param {String} type
         * @default
         */
        color: "#FFFFFF",
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
gl_FragColor.a = 0.0;
}
}`,
        /**
         * distance to actual color, as value up or down from each r,g,b
         * between 0 and 1
         **/
        distance: 0.02,
        /**
         * For color to remove inside distance, use alpha channel for a smoother deletion
         * NOT IMPLEMENTED YET
         **/
        useAlpha: !1,
        /**
         * Constructor
         * @memberOf fabric.Image.filters.RemoveWhite.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.color=#RRGGBB] Threshold value
         * @param {Number} [options.distance=10] Distance value
         */
        /**
         * Applies filter to canvas element
         * @param {Object} canvasEl Canvas element to apply filter to
         */
        applyTo2d: function(a) {
          var n = a.imageData, c = n.data, s, i = this.distance * 255, o, l, d, g = new e.Color(this.color).getSource(), v = [
            g[0] - i,
            g[1] - i,
            g[2] - i
          ], _ = [
            g[0] + i,
            g[1] + i,
            g[2] + i
          ];
          for (s = 0; s < c.length; s += 4)
            o = c[s], l = c[s + 1], d = c[s + 2], o > v[0] && l > v[1] && d > v[2] && o < _[0] && l < _[1] && d < _[2] && (c[s + 3] = 0);
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(a, n) {
          return {
            uLow: a.getUniformLocation(n, "uLow"),
            uHigh: a.getUniformLocation(n, "uHigh")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(a, n) {
          var c = new e.Color(this.color).getSource(), s = parseFloat(this.distance), i = [
            0 + c[0] / 255 - s,
            0 + c[1] / 255 - s,
            0 + c[2] / 255 - s,
            1
          ], o = [
            c[0] / 255 + s,
            c[1] / 255 + s,
            c[2] / 255 + s,
            1
          ];
          a.uniform4fv(n.uLow, i), a.uniform4fv(n.uHigh, o);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            color: this.color,
            distance: this.distance
          });
        }
      }
    ), e.Image.filters.RemoveColor.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass, t = {
      Brownie: [
        0.5997,
        0.34553,
        -0.27082,
        0,
        0.186,
        -0.0377,
        0.86095,
        0.15059,
        0,
        -0.1449,
        0.24113,
        -0.07441,
        0.44972,
        0,
        -0.02965,
        0,
        0,
        0,
        1,
        0
      ],
      Vintage: [
        0.62793,
        0.32021,
        -0.03965,
        0,
        0.03784,
        0.02578,
        0.64411,
        0.03259,
        0,
        0.02926,
        0.0466,
        -0.08512,
        0.52416,
        0,
        0.02023,
        0,
        0,
        0,
        1,
        0
      ],
      Kodachrome: [
        1.12855,
        -0.39673,
        -0.03992,
        0,
        0.24991,
        -0.16404,
        1.08352,
        -0.05498,
        0,
        0.09698,
        -0.16786,
        -0.56034,
        1.60148,
        0,
        0.13972,
        0,
        0,
        0,
        1,
        0
      ],
      Technicolor: [
        1.91252,
        -0.85453,
        -0.09155,
        0,
        0.04624,
        -0.30878,
        1.76589,
        -0.10601,
        0,
        -0.27589,
        -0.2311,
        -0.75018,
        1.84759,
        0,
        0.12137,
        0,
        0,
        0,
        1,
        0
      ],
      Polaroid: [
        1.438,
        -0.062,
        -0.062,
        0,
        0,
        -0.122,
        1.378,
        -0.122,
        0,
        0,
        -0.016,
        -0.016,
        1.483,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ],
      Sepia: [
        0.393,
        0.769,
        0.189,
        0,
        0,
        0.349,
        0.686,
        0.168,
        0,
        0,
        0.272,
        0.534,
        0.131,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ],
      BlackWhite: [
        1.5,
        1.5,
        1.5,
        0,
        -1,
        1.5,
        1.5,
        1.5,
        0,
        -1,
        1.5,
        1.5,
        1.5,
        0,
        -1,
        0,
        0,
        0,
        1,
        0
      ]
    };
    for (var a in t)
      h[a] = r(
        h.ColorMatrix,
        /** @lends fabric.Image.filters.Sepia.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: a,
          /**
           * Colormatrix for the effect
           * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
           * outside the -1, 1 range.
           * @param {Array} matrix array of 20 numbers.
           * @default
           */
          matrix: t[a],
          /**
           * Lock the matrix export for this kind of static, parameter less filters.
           */
          mainParameter: !1,
          /**
           * Lock the colormatrix on the color part, skipping alpha
           */
          colorsOnly: !0
        }
      ), e.Image.filters[a].fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric, h = e.Image.filters, r = e.util.createClass;
    h.BlendColor = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Blend.prototype */
      {
        type: "BlendColor",
        /**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         **/
        color: "#F95C63",
        /**
         * Blend mode for the filter: one of multiply, add, diff, screen, subtract,
         * darken, lighten, overlay, exclusion, tint.
         **/
        mode: "multiply",
        /**
         * alpha value. represent the strength of the blend color operation.
         **/
        alpha: 1,
        /**
         * Fragment source for the Multiply program
         */
        fragmentSource: {
          multiply: `gl_FragColor.rgb *= uColor.rgb;
`,
          screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,
          add: `gl_FragColor.rgb += uColor.rgb;
`,
          diff: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,
          subtract: `gl_FragColor.rgb -= uColor.rgb;
`,
          lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,
          darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,
          exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,
          overlay: `if (uColor.r < 0.5) {
gl_FragColor.r *= 2.0 * uColor.r;
} else {
gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
}
if (uColor.g < 0.5) {
gl_FragColor.g *= 2.0 * uColor.g;
} else {
gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
}
if (uColor.b < 0.5) {
gl_FragColor.b *= 2.0 * uColor.b;
} else {
gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
}
`,
          tint: `gl_FragColor.rgb *= (1.0 - uColor.a);
gl_FragColor.rgb += uColor.rgb;
`
        },
        /**
         * build the fragment source for the filters, joining the common part with
         * the specific one.
         * @param {String} mode the mode of the filter, a key of this.fragmentSource
         * @return {String} the source to be compiled
         * @private
         */
        buildSource: function(t) {
          return `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uColor;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
gl_FragColor = color;
if (color.a > 0.0) {
` + this.fragmentSource[t] + `}
}`;
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(t) {
          var a = this.type + "_" + this.mode, n;
          return t.programCache.hasOwnProperty(a) || (n = this.buildSource(this.mode), t.programCache[a] = this.createProgram(t.context, n)), t.programCache[a];
        },
        /**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          var a = t.imageData, n = a.data, c = n.length, s, i, o, l, d, g, v, _ = 1 - this.alpha;
          v = new e.Color(this.color).getSource(), s = v[0] * this.alpha, i = v[1] * this.alpha, o = v[2] * this.alpha;
          for (var p = 0; p < c; p += 4)
            switch (l = n[p], d = n[p + 1], g = n[p + 2], this.mode) {
              case "multiply":
                n[p] = l * s / 255, n[p + 1] = d * i / 255, n[p + 2] = g * o / 255;
                break;
              case "screen":
                n[p] = 255 - (255 - l) * (255 - s) / 255, n[p + 1] = 255 - (255 - d) * (255 - i) / 255, n[p + 2] = 255 - (255 - g) * (255 - o) / 255;
                break;
              case "add":
                n[p] = l + s, n[p + 1] = d + i, n[p + 2] = g + o;
                break;
              case "diff":
              case "difference":
                n[p] = Math.abs(l - s), n[p + 1] = Math.abs(d - i), n[p + 2] = Math.abs(g - o);
                break;
              case "subtract":
                n[p] = l - s, n[p + 1] = d - i, n[p + 2] = g - o;
                break;
              case "darken":
                n[p] = Math.min(l, s), n[p + 1] = Math.min(d, i), n[p + 2] = Math.min(g, o);
                break;
              case "lighten":
                n[p] = Math.max(l, s), n[p + 1] = Math.max(d, i), n[p + 2] = Math.max(g, o);
                break;
              case "overlay":
                n[p] = s < 128 ? 2 * l * s / 255 : 255 - 2 * (255 - l) * (255 - s) / 255, n[p + 1] = i < 128 ? 2 * d * i / 255 : 255 - 2 * (255 - d) * (255 - i) / 255, n[p + 2] = o < 128 ? 2 * g * o / 255 : 255 - 2 * (255 - g) * (255 - o) / 255;
                break;
              case "exclusion":
                n[p] = s + l - 2 * s * l / 255, n[p + 1] = i + d - 2 * i * d / 255, n[p + 2] = o + g - 2 * o * g / 255;
                break;
              case "tint":
                n[p] = s + l * _, n[p + 1] = i + d * _, n[p + 2] = o + g * _;
            }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uColor: t.getUniformLocation(a, "uColor")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          var n = new e.Color(this.color).getSource();
          n[0] = this.alpha * n[0] / 255, n[1] = this.alpha * n[1] / 255, n[2] = this.alpha * n[2] / 255, n[3] = this.alpha, t.uniform4fv(a.uColor, n);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            color: this.color,
            mode: this.mode,
            alpha: this.alpha
          };
        }
      }
    ), e.Image.filters.BlendColor.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric, h = e.Image.filters, r = e.util.createClass;
    h.BlendImage = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.BlendImage.prototype */
      {
        type: "BlendImage",
        /**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         **/
        image: null,
        /**
         * Blend mode for the filter: one of multiply, add, diff, screen, subtract,
         * darken, lighten, overlay, exclusion, tint.
         **/
        mode: "multiply",
        /**
         * alpha value. represent the strength of the blend image operation.
         * not implemented.
         **/
        alpha: 1,
        vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
uniform mat3 uTransformMatrix;
void main() {
vTexCoord = aPosition;
vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
        /**
         * Fragment source for the Multiply program
         */
        fragmentSource: {
          multiply: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.rgba *= color2.rgba;
gl_FragColor = color;
}`,
          mask: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.a = color2.a;
gl_FragColor = color;
}`
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(t) {
          var a = this.type + "_" + this.mode, n = this.fragmentSource[this.mode];
          return t.programCache.hasOwnProperty(a) || (t.programCache[a] = this.createProgram(t.context, n)), t.programCache[a];
        },
        applyToWebGL: function(t) {
          var a = t.context, n = this.createTexture(t.filterBackend, this.image);
          this.bindAdditionalTexture(a, n, a.TEXTURE1), this.callSuper("applyToWebGL", t), this.unbindAdditionalTexture(a, a.TEXTURE1);
        },
        createTexture: function(t, a) {
          return t.getCachedTexture(a.cacheKey, a._element);
        },
        /**
         * Calculate a transformMatrix to adapt the image to blend over
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        calculateMatrix: function() {
          var t = this.image, a = t._element.width, n = t._element.height;
          return [
            1 / t.scaleX,
            0,
            0,
            0,
            1 / t.scaleY,
            0,
            -t.left / a,
            -t.top / n,
            1
          ];
        },
        /**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          var a = t.imageData, n = t.filterBackend.resources, c = a.data, s = c.length, i = a.width, o = a.height, l, d, g, v, _, p, C, S, O, k, P = this.image, F;
          n.blendImage || (n.blendImage = e.util.createCanvasElement()), O = n.blendImage, k = O.getContext("2d"), O.width !== i || O.height !== o ? (O.width = i, O.height = o) : k.clearRect(0, 0, i, o), k.setTransform(P.scaleX, 0, 0, P.scaleY, P.left, P.top), k.drawImage(P._element, 0, 0, i, o), F = k.getImageData(0, 0, i, o).data;
          for (var E = 0; E < s; E += 4)
            switch (_ = c[E], p = c[E + 1], C = c[E + 2], S = c[E + 3], l = F[E], d = F[E + 1], g = F[E + 2], v = F[E + 3], this.mode) {
              case "multiply":
                c[E] = _ * l / 255, c[E + 1] = p * d / 255, c[E + 2] = C * g / 255, c[E + 3] = S * v / 255;
                break;
              case "mask":
                c[E + 3] = v;
                break;
            }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uTransformMatrix: t.getUniformLocation(a, "uTransformMatrix"),
            uImage: t.getUniformLocation(a, "uImage")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          var n = this.calculateMatrix();
          t.uniform1i(a.uImage, 1), t.uniformMatrix3fv(a.uTransformMatrix, !1, n);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            image: this.image && this.image.toObject(),
            mode: this.mode,
            alpha: this.alpha
          };
        }
      }
    ), e.Image.filters.BlendImage.fromObject = function(t, a) {
      e.Image.fromObject(t.image, function(n) {
        var c = e.util.object.clone(t);
        c.image = n, a(new e.Image.filters.BlendImage(c));
      });
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = Math.pow, r = Math.floor, t = Math.sqrt, a = Math.abs, n = Math.round, c = Math.sin, s = Math.ceil, i = e.Image.filters, o = e.util.createClass;
    i.Resize = o(
      i.BaseFilter,
      /** @lends fabric.Image.filters.Resize.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Resize",
        /**
         * Resize type
         * for webgl resizeType is just lanczos, for canvas2d can be:
         * bilinear, hermite, sliceHack, lanczos.
         * @param {String} resizeType
         * @default
         */
        resizeType: "hermite",
        /**
         * Scale factor for resizing, x axis
         * @param {Number} scaleX
         * @default
         */
        scaleX: 1,
        /**
         * Scale factor for resizing, y axis
         * @param {Number} scaleY
         * @default
         */
        scaleY: 1,
        /**
         * LanczosLobes parameter for lanczos filter, valid for resizeType lanczos
         * @param {Number} lanczosLobes
         * @default
         */
        lanczosLobes: 3,
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(l, d) {
          return {
            uDelta: l.getUniformLocation(d, "uDelta"),
            uTaps: l.getUniformLocation(d, "uTaps")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(l, d) {
          l.uniform2fv(d.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), l.uniform1fv(d.uTaps, this.taps);
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(l) {
          var d = this.getFilterWindow(), g = this.type + "_" + d;
          if (!l.programCache.hasOwnProperty(g)) {
            var v = this.generateShader(d);
            l.programCache[g] = this.createProgram(l.context, v);
          }
          return l.programCache[g];
        },
        getFilterWindow: function() {
          var l = this.tempScale;
          return Math.ceil(this.lanczosLobes / l);
        },
        getTaps: function() {
          for (var l = this.lanczosCreate(this.lanczosLobes), d = this.tempScale, g = this.getFilterWindow(), v = new Array(g), _ = 1; _ <= g; _++)
            v[_ - 1] = l(_ * d);
          return v;
        },
        /**
         * Generate vertex and shader sources from the necessary steps numbers
         * @param {Number} filterWindow
         */
        generateShader: function(v) {
          for (var d = new Array(v), g = this.fragmentSourceTOP, v, _ = 1; _ <= v; _++)
            d[_ - 1] = _ + ".0 * uDelta";
          return g += "uniform float uTaps[" + v + `];
`, g += `void main() {
`, g += `  vec4 color = texture2D(uTexture, vTexCoord);
`, g += `  float sum = 1.0;
`, d.forEach(function(p, C) {
            g += "  color += texture2D(uTexture, vTexCoord + " + p + ") * uTaps[" + C + `];
`, g += "  color += texture2D(uTexture, vTexCoord - " + p + ") * uTaps[" + C + `];
`, g += "  sum += 2.0 * uTaps[" + C + `];
`;
          }), g += `  gl_FragColor = color / sum;
`, g += "}", g;
        },
        fragmentSourceTOP: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
`,
        /**
         * Apply the resize filter to the image
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(l) {
          l.webgl ? (l.passes++, this.width = l.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = l.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), l.destinationWidth = this.dW, this._setupFrameBuffer(l), this.applyToWebGL(l), this._swapTextures(l), l.sourceWidth = l.destinationWidth, this.height = l.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), l.destinationHeight = this.dH, this._setupFrameBuffer(l), this.applyToWebGL(l), this._swapTextures(l), l.sourceHeight = l.destinationHeight) : this.applyTo2d(l);
        },
        isNeutralState: function() {
          return this.scaleX === 1 && this.scaleY === 1;
        },
        lanczosCreate: function(l) {
          return function(d) {
            if (d >= l || d <= -l)
              return 0;
            if (d < 11920929e-14 && d > -11920929e-14)
              return 1;
            d *= Math.PI;
            var g = d / l;
            return c(d) / d * c(g) / g;
          };
        },
        /**
         * Applies filter to canvas element
         * @memberOf fabric.Image.filters.Resize.prototype
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} scaleX
         * @param {Number} scaleY
         */
        applyTo2d: function(l) {
          var d = l.imageData, g = this.scaleX, v = this.scaleY;
          this.rcpScaleX = 1 / g, this.rcpScaleY = 1 / v;
          var _ = d.width, p = d.height, C = n(_ * g), S = n(p * v), O;
          this.resizeType === "sliceHack" ? O = this.sliceByTwo(l, _, p, C, S) : this.resizeType === "hermite" ? O = this.hermiteFastResize(l, _, p, C, S) : this.resizeType === "bilinear" ? O = this.bilinearFiltering(l, _, p, C, S) : this.resizeType === "lanczos" && (O = this.lanczosResize(l, _, p, C, S)), l.imageData = O;
        },
        /**
         * Filter sliceByTwo
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        sliceByTwo: function(l, d, g, v, _) {
          var p = l.imageData, C = 0.5, S = !1, O = !1, k = d * C, P = g * C, F = e.filterBackend.resources, E, X, z = 0, N = 0, J = d, T = 0;
          for (F.sliceByTwo || (F.sliceByTwo = document.createElement("canvas")), E = F.sliceByTwo, (E.width < d * 1.5 || E.height < g) && (E.width = d * 1.5, E.height = g), X = E.getContext("2d"), X.clearRect(0, 0, d * 1.5, g), X.putImageData(p, 0, 0), v = r(v), _ = r(_); !S || !O; )
            d = k, g = P, v < r(k * C) ? k = r(k * C) : (k = v, S = !0), _ < r(P * C) ? P = r(P * C) : (P = _, O = !0), X.drawImage(E, z, N, d, g, J, T, k, P), z = J, N = T, T += P;
          return X.getImageData(z, N, v, _);
        },
        /**
         * Filter lanczosResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        lanczosResize: function(l, d, g, v, _) {
          function p(R) {
            var I, K, M, A, L, B, W, Y, U, G, Z;
            for (T.x = (R + 0.5) * P, j.x = r(T.x), I = 0; I < _; I++) {
              for (T.y = (I + 0.5) * F, j.y = r(T.y), L = 0, B = 0, W = 0, Y = 0, U = 0, K = j.x - z; K <= j.x + z; K++)
                if (!(K < 0 || K >= d)) {
                  G = r(1e3 * a(K - T.x)), J[G] || (J[G] = {});
                  for (var tt = j.y - N; tt <= j.y + N; tt++)
                    tt < 0 || tt >= g || (Z = r(1e3 * a(tt - T.y)), J[G][Z] || (J[G][Z] = k(t(h(G * E, 2) + h(Z * X, 2)) / 1e3)), M = J[G][Z], M > 0 && (A = (tt * d + K) * 4, L += M, B += M * C[A], W += M * C[A + 1], Y += M * C[A + 2], U += M * C[A + 3]));
                }
              A = (I * v + R) * 4, O[A] = B / L, O[A + 1] = W / L, O[A + 2] = Y / L, O[A + 3] = U / L;
            }
            return ++R < v ? p(R) : S;
          }
          var C = l.imageData.data, S = l.ctx.createImageData(v, _), O = S.data, k = this.lanczosCreate(this.lanczosLobes), P = this.rcpScaleX, F = this.rcpScaleY, E = 2 / this.rcpScaleX, X = 2 / this.rcpScaleY, z = s(P * this.lanczosLobes / 2), N = s(F * this.lanczosLobes / 2), J = {}, T = {}, j = {};
          return p(0);
        },
        /**
         * bilinearFiltering
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        bilinearFiltering: function(l, d, g, v, _) {
          var p, C, S, O, k, P, F, E, X, z, N, J, T = 0, j, R = this.rcpScaleX, I = this.rcpScaleY, K = 4 * (d - 1), M = l.imageData, A = M.data, L = l.ctx.createImageData(v, _), B = L.data;
          for (F = 0; F < _; F++)
            for (E = 0; E < v; E++)
              for (k = r(R * E), P = r(I * F), X = R * E - k, z = I * F - P, j = 4 * (P * d + k), N = 0; N < 4; N++)
                p = A[j + N], C = A[j + 4 + N], S = A[j + K + N], O = A[j + K + 4 + N], J = p * (1 - X) * (1 - z) + C * X * (1 - z) + S * z * (1 - X) + O * X * z, B[T++] = J;
          return L;
        },
        /**
         * hermiteFastResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        hermiteFastResize: function(l, d, g, v, _) {
          for (var p = this.rcpScaleX, C = this.rcpScaleY, S = s(p / 2), O = s(C / 2), k = l.imageData, P = k.data, F = l.ctx.createImageData(v, _), E = F.data, X = 0; X < _; X++)
            for (var z = 0; z < v; z++) {
              for (var N = (z + X * v) * 4, J = 0, T = 0, j = 0, R = 0, I = 0, K = 0, M = 0, A = (X + 0.5) * C, L = r(X * C); L < (X + 1) * C; L++)
                for (var B = a(A - (L + 0.5)) / O, W = (z + 0.5) * p, Y = B * B, U = r(z * p); U < (z + 1) * p; U++) {
                  var G = a(W - (U + 0.5)) / S, Z = t(Y + G * G);
                  Z > 1 && Z < -1 || (J = 2 * Z * Z * Z - 3 * Z * Z + 1, J > 0 && (G = 4 * (U + L * d), M += J * P[G + 3], j += J, P[G + 3] < 255 && (J = J * P[G + 3] / 250), R += J * P[G], I += J * P[G + 1], K += J * P[G + 2], T += J));
                }
              E[N] = R / T, E[N + 1] = I / T, E[N + 2] = K / T, E[N + 3] = M / j;
            }
          return F;
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            resizeType: this.resizeType,
            lanczosLobes: this.lanczosLobes
          };
        }
      }
    ), e.Image.filters.Resize.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Contrast = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Contrast.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Contrast",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uContrast;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
gl_FragColor = color;
}`,
        contrast: 0,
        mainParameter: "contrast",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Contrast.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.contrast=0] Value to contrast the image up (-1...1)
         */
        /**
          * Apply the Contrast operation to a Uint8Array representing the pixels of an image.
          *
          * @param {Object} options
          * @param {ImageData} options.imageData The Uint8Array to be filtered.
          */
        applyTo2d: function(t) {
          if (this.contrast !== 0) {
            var a = t.imageData, n, s, c = a.data, s = c.length, i = Math.floor(this.contrast * 255), o = 259 * (i + 255) / (255 * (259 - i));
            for (n = 0; n < s; n += 4)
              c[n] = o * (c[n] - 128) + 128, c[n + 1] = o * (c[n + 1] - 128) + 128, c[n + 2] = o * (c[n + 2] - 128) + 128;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uContrast: t.getUniformLocation(a, "uContrast")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          t.uniform1f(a.uContrast, this.contrast);
        }
      }
    ), e.Image.filters.Contrast.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Saturation = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Saturation.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Saturation",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uSaturation;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float rgMax = max(color.r, color.g);
float rgbMax = max(rgMax, color.b);
color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
gl_FragColor = color;
}`,
        saturation: 0,
        mainParameter: "saturation",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Saturate.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.saturate=0] Value to saturate the image (-1...1)
         */
        /**
         * Apply the Saturation operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          if (this.saturation !== 0) {
            var a = t.imageData, n = a.data, c = n.length, s = -this.saturation, i, o;
            for (i = 0; i < c; i += 4)
              o = Math.max(n[i], n[i + 1], n[i + 2]), n[i] += o !== n[i] ? (o - n[i]) * s : 0, n[i + 1] += o !== n[i + 1] ? (o - n[i + 1]) * s : 0, n[i + 2] += o !== n[i + 2] ? (o - n[i + 2]) * s : 0;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uSaturation: t.getUniformLocation(a, "uSaturation")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          t.uniform1f(a.uSaturation, -this.saturation);
        }
      }
    ), e.Image.filters.Saturation.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Blur = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Blur.prototype */
      {
        type: "Blur",
        /*
        'gl_FragColor = vec4(0.0);',
        'gl_FragColor += texture2D(texture, vTexCoord + -7 * uDelta)*0.0044299121055113265;',
        'gl_FragColor += texture2D(texture, vTexCoord + -6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + -5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + -4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + -3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + -2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + -1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord              )*0.159576912161;',
        'gl_FragColor += texture2D(texture, vTexCoord + 1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord + 2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + 3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + 4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + 5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + 6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + 7 * uDelta)*0.0044299121055113265;',
        */
        /* eslint-disable max-len */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
const float nSamples = 15.0;
vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
float random(vec3 scale) {
return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
}
void main() {
vec4 color = vec4(0.0);
float total = 0.0;
float offset = random(v3offset);
for (float t = -nSamples; t <= nSamples; t++) {
float percent = (t + offset - 0.5) / nSamples;
float weight = 1.0 - abs(percent);
color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
total += weight;
}
gl_FragColor = color / total;
}`,
        /* eslint-enable max-len */
        /**
         * blur value, in percentage of image dimensions.
         * specific to keep the image blur constant at different resolutions
         * range bewteen 0 and 1.
         */
        blur: 0,
        mainParameter: "blur",
        applyTo: function(t) {
          t.webgl ? (this.aspectRatio = t.sourceWidth / t.sourceHeight, t.passes++, this._setupFrameBuffer(t), this.horizontal = !0, this.applyToWebGL(t), this._swapTextures(t), this._setupFrameBuffer(t), this.horizontal = !1, this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t);
        },
        applyTo2d: function(t) {
          t.imageData = this.simpleBlur(t);
        },
        simpleBlur: function(t) {
          var a = t.filterBackend.resources, n, c, s = t.imageData.width, i = t.imageData.height;
          a.blurLayer1 || (a.blurLayer1 = e.util.createCanvasElement(), a.blurLayer2 = e.util.createCanvasElement()), n = a.blurLayer1, c = a.blurLayer2, (n.width !== s || n.height !== i) && (c.width = n.width = s, c.height = n.height = i);
          var o = n.getContext("2d"), l = c.getContext("2d"), d = 15, g, v, _, p, C = this.blur * 0.06 * 0.5;
          for (o.putImageData(t.imageData, 0, 0), l.clearRect(0, 0, s, i), p = -d; p <= d; p++)
            g = (Math.random() - 0.5) / 4, v = p / d, _ = C * v * s + g, l.globalAlpha = 1 - Math.abs(v), l.drawImage(n, _, g), o.drawImage(c, 0, 0), l.globalAlpha = 1, l.clearRect(0, 0, c.width, c.height);
          for (p = -d; p <= d; p++)
            g = (Math.random() - 0.5) / 4, v = p / d, _ = C * v * i + g, l.globalAlpha = 1 - Math.abs(v), l.drawImage(n, g, _), o.drawImage(c, 0, 0), l.globalAlpha = 1, l.clearRect(0, 0, c.width, c.height);
          t.ctx.drawImage(n, 0, 0);
          var S = t.ctx.getImageData(0, 0, n.width, n.height);
          return o.globalAlpha = 1, o.clearRect(0, 0, n.width, n.height), S;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            delta: t.getUniformLocation(a, "uDelta")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          var n = this.chooseRightDelta();
          t.uniform2fv(a.delta, n);
        },
        /**
         * choose right value of image percentage to blur with
         * @returns {Array} a numeric array with delta values
         */
        chooseRightDelta: function() {
          var t = 1, a = [0, 0], n;
          return this.horizontal ? this.aspectRatio > 1 && (t = 1 / this.aspectRatio) : this.aspectRatio < 1 && (t = this.aspectRatio), n = t * this.blur * 0.12, this.horizontal ? a[0] = n : a[1] = n, a;
        }
      }
    ), h.Blur.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Gamma = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Gamma.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Gamma",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec3 uGamma;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec3 correction = (1.0 / uGamma);
color.r = pow(color.r, correction.r);
color.g = pow(color.g, correction.g);
color.b = pow(color.b, correction.b);
gl_FragColor = color;
gl_FragColor.rgb *= color.a;
}`,
        /**
         * Gamma array value, from 0.01 to 2.2.
         * @param {Array} gamma
         * @default
         */
        gamma: [1, 1, 1],
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "gamma",
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(t) {
          this.gamma = [1, 1, 1], h.BaseFilter.prototype.initialize.call(this, t);
        },
        /**
         * Apply the Gamma operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(t) {
          var a = t.imageData, n = a.data, c = this.gamma, s = n.length, i = 1 / c[0], o = 1 / c[1], l = 1 / c[2], d;
          for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), d = 0, s = 256; d < s; d++)
            this.rVals[d] = Math.pow(d / 255, i) * 255, this.gVals[d] = Math.pow(d / 255, o) * 255, this.bVals[d] = Math.pow(d / 255, l) * 255;
          for (d = 0, s = n.length; d < s; d += 4)
            n[d] = this.rVals[n[d]], n[d + 1] = this.gVals[n[d + 1]], n[d + 2] = this.bVals[n[d + 2]];
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, a) {
          return {
            uGamma: t.getUniformLocation(a, "uGamma")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, a) {
          t.uniform3fv(a.uGamma, this.gamma);
        }
      }
    ), e.Image.filters.Gamma.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.Composed = r(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Composed.prototype */
      {
        type: "Composed",
        /**
         * A non sparse array of filters to apply
         */
        subFilters: [],
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(t) {
          this.callSuper("initialize", t), this.subFilters = this.subFilters.slice(0);
        },
        /**
         * Apply this container's filters to the input image provided.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be applied.
         */
        applyTo: function(t) {
          t.passes += this.subFilters.length - 1, this.subFilters.forEach(function(a) {
            a.applyTo(t);
          });
        },
        /**
         * Serialize this filter into JSON.
         *
         * @returns {Object} A JSON representation of this filter.
         */
        toObject: function() {
          return e.util.object.extend(this.callSuper("toObject"), {
            subFilters: this.subFilters.map(function(t) {
              return t.toObject();
            })
          });
        },
        isNeutralState: function() {
          return !this.subFilters.some(function(t) {
            return !t.isNeutralState();
          });
        }
      }
    ), e.Image.filters.Composed.fromObject = function(t, a) {
      var n = t.subFilters || [], c = n.map(function(i) {
        return new e.Image.filters[i.type](i);
      }), s = new e.Image.filters.Composed({ subFilters: c });
      return a && a(s), s;
    };
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.Image.filters, r = e.util.createClass;
    h.HueRotation = r(
      h.ColorMatrix,
      /** @lends fabric.Image.filters.HueRotation.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "HueRotation",
        /**
         * HueRotation value, from -1 to 1.
         * the unit is radians
         * @param {Number} myParameter
         * @default
         */
        rotation: 0,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "rotation",
        calculateMatrix: function() {
          var t = this.rotation * Math.PI, a = e.util.cos(t), n = e.util.sin(t), c = 1 / 3, s = Math.sqrt(c) * n, i = 1 - a;
          this.matrix = [
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ], this.matrix[0] = a + i / 3, this.matrix[1] = c * i - s, this.matrix[2] = c * i + s, this.matrix[5] = c * i + s, this.matrix[6] = a + c * i, this.matrix[7] = c * i - s, this.matrix[10] = c * i - s, this.matrix[11] = c * i + s, this.matrix[12] = a + c * i;
        },
        /**
         * HueRotation isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
        isNeutralState: function(t) {
          return this.calculateMatrix(), h.BaseFilter.prototype.isNeutralState.call(this, t);
        },
        /**
         * Apply this filter to the input image data provided.
         *
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(t) {
          this.calculateMatrix(), h.BaseFilter.prototype.applyTo.call(this, t);
        }
      }
    ), e.Image.filters.HueRotation.fromObject = e.Image.filters.BaseFilter.fromObject;
  }(m), function(f) {
    var e = f.fabric || (f.fabric = {}), h = e.util.object.clone;
    if (e.Text) {
      e.warn("fabric.Text is already defined");
      return;
    }
    e.Text = e.util.createClass(
      e.Object,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Properties which when set cause object to change dimensions
         * @type Array
         * @private
         */
        _dimensionAffectingProps: [
          "fontSize",
          "fontWeight",
          "fontFamily",
          "fontStyle",
          "lineHeight",
          "text",
          "charSpacing",
          "textAlign",
          "styles"
        ],
        /**
         * @private
         */
        _reNewline: /\r?\n/,
        /**
         * Use this regular expression to filter for whitespaces that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reSpacesAndTabs: /[ \t\r]/g,
        /**
         * Use this regular expression to filter for whitespace that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reSpaceAndTab: /[ \t\r]/,
        /**
         * Use this regular expression to filter consecutive groups of non spaces.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reWords: /\S+/g,
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "text",
        /**
         * Font size (in pixels)
         * @type Number
         * @default
         */
        fontSize: 40,
        /**
         * Font weight (e.g. bold, normal, 400, 600, 800)
         * @type {(Number|String)}
         * @default
         */
        fontWeight: "normal",
        /**
         * Font family
         * @type String
         * @default
         */
        fontFamily: "Times New Roman",
        /**
         * Text decoration underline.
         * @type Boolean
         * @default
         */
        underline: !1,
        /**
         * Text decoration overline.
         * @type Boolean
         * @default
         */
        overline: !1,
        /**
         * Text decoration linethrough.
         * @type Boolean
         * @default
         */
        linethrough: !1,
        /**
         * Text alignment. Possible values: "left", "center", "right", "justify",
         * "justify-left", "justify-center" or "justify-right".
         * @type String
         * @default
         */
        textAlign: "left",
        /**
         * Font style . Possible values: "", "normal", "italic" or "oblique".
         * @type String
         * @default
         */
        fontStyle: "normal",
        /**
         * Line height
         * @type Number
         * @default
         */
        lineHeight: 1.16,
        /**
         * Superscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
        superscript: {
          size: 0.6,
          // fontSize factor
          baseline: -0.35
          // baseline-shift factor (upwards)
        },
        /**
         * Subscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
        subscript: {
          size: 0.6,
          // fontSize factor
          baseline: 0.11
          // baseline-shift factor (downwards)
        },
        /**
         * Background color of text lines
         * @type String
         * @default
         */
        textBackgroundColor: "",
        /**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: e.Object.prototype.stateProperties.concat(
          "fontFamily",
          "fontWeight",
          "fontSize",
          "text",
          "underline",
          "overline",
          "linethrough",
          "textAlign",
          "fontStyle",
          "lineHeight",
          "textBackgroundColor",
          "charSpacing",
          "styles"
        ),
        /**
         * List of properties to consider when checking if cache needs refresh
         * @type Array
         */
        cacheProperties: e.Object.prototype.cacheProperties.concat(
          "fontFamily",
          "fontWeight",
          "fontSize",
          "text",
          "underline",
          "overline",
          "linethrough",
          "textAlign",
          "fontStyle",
          "lineHeight",
          "textBackgroundColor",
          "charSpacing",
          "styles"
        ),
        /**
         * When defined, an object is rendered via stroke and this property specifies its color.
         * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
         * @type String
         * @default
         */
        stroke: null,
        /**
         * Shadow object representing shadow of this shape.
         * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * @private
         */
        _fontSizeFraction: 0.222,
        /**
         * @private
         */
        offsets: {
          underline: 0.1,
          linethrough: -0.315,
          overline: -0.88
        },
        /**
         * Text Line proportion to font Size (in pixels)
         * @type Number
         * @default
         */
        _fontSizeMult: 1.13,
        /**
         * additional space between characters
         * expressed in thousands of em unit
         * @type Number
         * @default
         */
        charSpacing: 0,
        /**
         * Object containing character styles - top-level properties -> line numbers,
         * 2nd-level properties - charater numbers
         * @type Object
         * @default
         */
        styles: null,
        /**
         * Reference to a context to measure text char or couple of chars
         * the cacheContext of the canvas will be used or a freshly created one if the object is not on canvas
         * once created it will be referenced on fabric._measuringContext to avoide creating a canvas for every
         * text object created.
         * @type {CanvasRenderingContext2D}
         * @default
         */
        _measuringContext: null,
        /**
         * Baseline shift, stlyes only, keep at 0 for the main text object
         * @type {Number}
         * @default
         */
        deltaY: 0,
        /**
         * Array of properties that define a style unit (of 'styles').
         * @type {Array}
         * @default
         */
        _styleProperties: [
          "stroke",
          "strokeWidth",
          "fill",
          "fontFamily",
          "fontSize",
          "fontWeight",
          "fontStyle",
          "underline",
          "overline",
          "linethrough",
          "deltaY",
          "textBackgroundColor"
        ],
        /**
         * contains characters bounding boxes
         */
        __charBounds: [],
        /**
         * use this size when measuring text. To avoid IE11 rounding errors
         * @type {Number}
         * @default
         * @readonly
         * @private
         */
        CACHE_FONT_SIZE: 400,
        /**
         * contains the min text width to avoid getting 0
         * @type {Number}
         * @default
         */
        MIN_TEXT_WIDTH: 2,
        /**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
        initialize: function(r, t) {
          this.styles = t ? t.styles || {} : {}, this.text = r, this.__skipDimension = !0, this.callSuper("initialize", t), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({ propertySet: "_dimensionAffectingProps" });
        },
        /**
         * Return a contex for measurement of text string.
         * if created it gets stored for reuse
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
        getMeasuringContext: function() {
          return e._measuringContext || (e._measuringContext = this.canvas && this.canvas.contextCache || e.util.createCanvasElement().getContext("2d")), e._measuringContext;
        },
        /**
         * @private
         * Divides text into lines of text and lines of graphemes.
         */
        _splitText: function() {
          var r = this._splitTextIntoLines(this.text);
          return this.textLines = r.lines, this._textLines = r.graphemeLines, this._unwrappedTextLines = r._unwrappedLines, this._text = r.graphemeText, r;
        },
        /**
         * Initialize or update text dimensions.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         */
        initDimensions: function() {
          this.__skipDimension || (this._splitText(), this._clearCache(), this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
        },
        /**
         * Enlarge space boxes and shift the others
         */
        enlargeSpaces: function() {
          for (var r, t, a, n, c, s, i, o = 0, l = this._textLines.length; o < l; o++)
            if (!(this.textAlign !== "justify" && (o === l - 1 || this.isEndOfWrapping(o))) && (n = 0, c = this._textLines[o], t = this.getLineWidth(o), t < this.width && (i = this.textLines[o].match(this._reSpacesAndTabs)))) {
              a = i.length, r = (this.width - t) / a;
              for (var d = 0, g = c.length; d <= g; d++)
                s = this.__charBounds[o][d], this._reSpaceAndTab.test(c[d]) ? (s.width += r, s.kernedWidth += r, s.left += n, n += r) : s.left += n;
            }
        },
        /**
         * Detect if the text line is ended with an hard break
         * text and itext do not have wrapping, return false
         * @return {Boolean}
         */
        isEndOfWrapping: function(r) {
          return r === this._textLines.length - 1;
        },
        /**
         * Detect if a line has a linebreak and so we need to account for it when moving
         * and counting style.
         * It return always for text and Itext.
         * @return Number
         */
        missingNewlineOffset: function() {
          return 1;
        },
        /**
         * Returns string representation of an instance
         * @return {String} String representation of text object
         */
        toString: function() {
          return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
        },
        /**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @param {Object} dim.x width of object to be cached
         * @param {Object} dim.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _getCacheCanvasDimensions: function() {
          var r = this.callSuper("_getCacheCanvasDimensions"), t = this.fontSize;
          return r.width += t * r.zoomX, r.height += t * r.zoomY, r;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(r) {
          this._setTextStyles(r), this._renderTextLinesBackground(r), this._renderTextDecoration(r, "underline"), this._renderText(r), this._renderTextDecoration(r, "overline"), this._renderTextDecoration(r, "linethrough");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderText: function(r) {
          this.paintFirst === "stroke" ? (this._renderTextStroke(r), this._renderTextFill(r)) : (this._renderTextFill(r), this._renderTextStroke(r));
        },
        /**
         * Set the font parameter of the context with the object properties or with charStyle
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [charStyle] object with font style properties
         * @param {String} [charStyle.fontFamily] Font Family
         * @param {Number} [charStyle.fontSize] Font size in pixels. ( without px suffix )
         * @param {String} [charStyle.fontWeight] Font weight
         * @param {String} [charStyle.fontStyle] Font style (italic|normal)
         */
        _setTextStyles: function(r, t, a) {
          r.textBaseline = "alphabetic", r.font = this._getFontDeclaration(t, a);
        },
        /**
         * calculate and return the text Width measuring each line.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {Number} Maximum width of fabric.Text object
         */
        calcTextWidth: function() {
          for (var r = this.getLineWidth(0), t = 1, a = this._textLines.length; t < a; t++) {
            var n = this.getLineWidth(t);
            n > r && (r = n);
          }
          return r;
        },
        /**
         * @private
         * @param {String} method Method name ("fillText" or "strokeText")
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} line Text to render
         * @param {Number} left Left position of text
         * @param {Number} top Top position of text
         * @param {Number} lineIndex Index of a line in a text
         */
        _renderTextLine: function(r, t, a, n, c, s) {
          this._renderChars(r, t, a, n, c, s);
        },
        /**
         * Renders the text background for lines, taking care of style
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextLinesBackground: function(r) {
          if (!(!this.textBackgroundColor && !this.styleHas("textBackgroundColor"))) {
            for (var t = 0, a, n, c = r.fillStyle, s, i, o = this._getLeftOffset(), l = this._getTopOffset(), d = 0, g = 0, v, _, p = 0, C = this._textLines.length; p < C; p++) {
              if (a = this.getHeightOfLine(p), !this.textBackgroundColor && !this.styleHas("textBackgroundColor", p)) {
                t += a;
                continue;
              }
              s = this._textLines[p], n = this._getLineLeftOffset(p), g = 0, d = 0, i = this.getValueOfPropertyAt(p, 0, "textBackgroundColor");
              for (var S = 0, O = s.length; S < O; S++)
                v = this.__charBounds[p][S], _ = this.getValueOfPropertyAt(p, S, "textBackgroundColor"), _ !== i ? (r.fillStyle = i, i && r.fillRect(
                  o + n + d,
                  l + t,
                  g,
                  a / this.lineHeight
                ), d = v.left, g = v.width, i = _) : g += v.kernedWidth;
              _ && (r.fillStyle = _, r.fillRect(
                o + n + d,
                l + t,
                g,
                a / this.lineHeight
              )), t += a;
            }
            r.fillStyle = c, this._removeShadow(r);
          }
        },
        /**
         * @private
         * @param {Object} decl style declaration for cache
         * @param {String} decl.fontFamily fontFamily
         * @param {String} decl.fontStyle fontStyle
         * @param {String} decl.fontWeight fontWeight
         * @return {Object} reference to cache
         */
        getFontCache: function(r) {
          var t = r.fontFamily.toLowerCase();
          e.charWidthsCache[t] || (e.charWidthsCache[t] = {});
          var a = e.charWidthsCache[t], n = r.fontStyle.toLowerCase() + "_" + (r.fontWeight + "").toLowerCase();
          return a[n] || (a[n] = {}), a[n];
        },
        /**
         * apply all the character style to canvas for rendering
         * @private
         * @param {String} _char
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {Object} [decl]
         */
        _applyCharStyles: function(r, t, a, n, c) {
          this._setFillStyles(t, c), this._setStrokeStyles(t, c), t.font = this._getFontDeclaration(c);
        },
        /**
         * measure and return the width of a single character.
         * possibly overridden to accommodate different measure logic or
         * to hook some external lib for character measurement
         * @private
         * @param {String} _char, char to be measured
         * @param {Object} charStyle style of char to be measured
         * @param {String} [previousChar] previous char
         * @param {Object} [prevCharStyle] style of previous char
         */
        _measureChar: function(r, t, a, n) {
          var c = this.getFontCache(t), s = this._getFontDeclaration(t), i = this._getFontDeclaration(n), o = a + r, l = s === i, d, g, v, _ = t.fontSize / this.CACHE_FONT_SIZE, p;
          if (a && c[a] !== void 0 && (v = c[a]), c[r] !== void 0 && (p = d = c[r]), l && c[o] !== void 0 && (g = c[o], p = g - v), d === void 0 || v === void 0 || g === void 0) {
            var C = this.getMeasuringContext();
            this._setTextStyles(C, t, !0);
          }
          return d === void 0 && (p = d = C.measureText(r).width, c[r] = d), v === void 0 && l && a && (v = C.measureText(a).width, c[a] = v), l && g === void 0 && (g = C.measureText(o).width, c[o] = g, p = g - v), { width: d * _, kernedWidth: p * _ };
        },
        /**
         * Computes height of character at given position
         * @param {Number} line the line index number
         * @param {Number} _char the character index number
         * @return {Number} fontSize of the character
         */
        getHeightOfChar: function(r, t) {
          return this.getValueOfPropertyAt(r, t, "fontSize");
        },
        /**
         * measure a text line measuring all characters.
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
        measureLine: function(r) {
          var t = this._measureLine(r);
          return this.charSpacing !== 0 && (t.width -= this._getWidthOfCharSpacing()), t.width < 0 && (t.width = 0), t;
        },
        /**
         * measure every grapheme of a line, populating __charBounds
         * @param {Number} lineIndex
         * @return {Object} object.width total width of characters
         * @return {Object} object.widthOfSpaces length of chars that match this._reSpacesAndTabs
         */
        _measureLine: function(r) {
          var t = 0, a, n, c = this._textLines[r], s, i, o = 0, l = new Array(c.length);
          for (this.__charBounds[r] = l, a = 0; a < c.length; a++)
            n = c[a], i = this._getGraphemeBox(n, r, a, s), l[a] = i, t += i.kernedWidth, s = n;
          return l[a] = {
            left: i ? i.left + i.width : 0,
            width: 0,
            kernedWidth: 0,
            height: this.fontSize
          }, { width: t, numOfSpaces: o };
        },
        /**
         * Measure and return the info of a single grapheme.
         * needs the the info of previous graphemes already filled
         * @private
         * @param {String} grapheme to be measured
         * @param {Number} lineIndex index of the line where the char is
         * @param {Number} charIndex position in the line
         * @param {String} [prevGrapheme] character preceding the one to be measured
         */
        _getGraphemeBox: function(r, t, a, n, c) {
          var s = this.getCompleteStyleDeclaration(t, a), i = n ? this.getCompleteStyleDeclaration(t, a - 1) : {}, o = this._measureChar(r, s, n, i), l = o.kernedWidth, d = o.width, g;
          this.charSpacing !== 0 && (g = this._getWidthOfCharSpacing(), d += g, l += g);
          var v = {
            width: d,
            left: 0,
            height: s.fontSize,
            kernedWidth: l,
            deltaY: s.deltaY
          };
          if (a > 0 && !c) {
            var _ = this.__charBounds[t][a - 1];
            v.left = _.left + _.width + o.kernedWidth - o.width;
          }
          return v;
        },
        /**
         * Calculate height of line at 'lineIndex'
         * @param {Number} lineIndex index of line to calculate
         * @return {Number}
         */
        getHeightOfLine: function(r) {
          if (this.__lineHeights[r])
            return this.__lineHeights[r];
          for (var t = this._textLines[r], a = this.getHeightOfChar(r, 0), n = 1, c = t.length; n < c; n++)
            a = Math.max(this.getHeightOfChar(r, n), a);
          return this.__lineHeights[r] = a * this.lineHeight * this._fontSizeMult;
        },
        /**
         * Calculate text box height
         */
        calcTextHeight: function() {
          for (var r, t = 0, a = 0, n = this._textLines.length; a < n; a++)
            r = this.getHeightOfLine(a), t += a === n - 1 ? r / this.lineHeight : r;
          return t;
        },
        /**
         * @private
         * @return {Number} Left offset
         */
        _getLeftOffset: function() {
          return -this.width / 2;
        },
        /**
         * @private
         * @return {Number} Top offset
         */
        _getTopOffset: function() {
          return -this.height / 2;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} filler fabric.Pattern or fabric.Gradient
         * @return {Object} offset.offsetX offset for text rendering
         * @return {Object} offset.offsetY offset for text rendering
         */
        _applyPatternGradientTransform: function(r, t) {
          if (!t || !t.toLive)
            return { offsetX: 0, offsetY: 0 };
          var a = -this.width / 2 + t.offsetX || 0, n = -this.height / 2 + t.offsetY || 0;
          return r.transform(1, 0, 0, 1, a, n), { offsetX: a, offsetY: n };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} method Method name ("fillText" or "strokeText")
         */
        _renderTextCommon: function(r, t) {
          r.save();
          for (var a = 0, n = this._getLeftOffset(), c = this._getTopOffset(), s = this._applyPatternGradientTransform(r, t === "fillText" ? this.fill : this.stroke), i = 0, o = this._textLines.length; i < o; i++) {
            var l = this.getHeightOfLine(i), d = l / this.lineHeight, g = this._getLineLeftOffset(i);
            this._renderTextLine(
              t,
              r,
              this._textLines[i],
              n + g - s.offsetX,
              c + a + d - s.offsetY,
              i
            ), a += l;
          }
          r.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextFill: function(r) {
          !this.fill && !this.styleHas("fill") || this._renderTextCommon(r, "fillText");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextStroke: function(r) {
          (!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles() || (this.shadow && !this.shadow.affectStroke && this._removeShadow(r), r.save(), this._setLineDash(r, this.strokeDashArray), r.beginPath(), this._renderTextCommon(r, "strokeText"), r.closePath(), r.restore());
        },
        /**
         * @private
         * @param {String} method
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} line Content of the line
         * @param {Number} left
         * @param {Number} top
         * @param {Number} lineIndex
         * @param {Number} charOffset
         */
        _renderChars: function(r, t, a, n, c, s) {
          var i = this.getHeightOfLine(s), o = this.textAlign.indexOf("justify") !== -1, l, d, g = "", v, _ = 0, p, C = !o && this.charSpacing === 0 && this.isEmptyStyles(s);
          if (t.save(), c -= i * this._fontSizeFraction / this.lineHeight, C) {
            this._renderChar(r, t, s, 0, this.textLines[s], n, c, i), t.restore();
            return;
          }
          for (var S = 0, O = a.length - 1; S <= O; S++)
            p = S === O || this.charSpacing, g += a[S], v = this.__charBounds[s][S], _ === 0 ? (n += v.kernedWidth - v.width, _ += v.width) : _ += v.kernedWidth, o && !p && this._reSpaceAndTab.test(a[S]) && (p = !0), p || (l = l || this.getCompleteStyleDeclaration(s, S), d = this.getCompleteStyleDeclaration(s, S + 1), p = this._hasStyleChanged(l, d)), p && (this._renderChar(r, t, s, S, g, n, c, i), g = "", l = d, n += _, _ = 0);
          t.restore();
        },
        /**
         * @private
         * @param {String} method
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {String} _char
         * @param {Number} left Left coordinate
         * @param {Number} top Top coordinate
         * @param {Number} lineHeight Height of the line
         */
        _renderChar: function(r, t, a, n, c, s, i) {
          var o = this._getStyleDeclaration(a, n), l = this.getCompleteStyleDeclaration(a, n), d = r === "fillText" && l.fill, g = r === "strokeText" && l.stroke && l.strokeWidth;
          !g && !d || (o && t.save(), this._applyCharStyles(r, t, a, n, l), o && o.textBackgroundColor && this._removeShadow(t), o && o.deltaY && (i += o.deltaY), d && t.fillText(c, s, i), g && t.strokeText(c, s, i), o && t.restore());
        },
        /**
         * Turns the character into a 'superior figure' (i.e. 'superscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        setSuperscript: function(r, t) {
          return this._setScript(r, t, this.superscript);
        },
        /**
         * Turns the character into an 'inferior figure' (i.e. 'subscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        setSubscript: function(r, t) {
          return this._setScript(r, t, this.subscript);
        },
        /**
         * Applies 'schema' at given position
         * @private
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @param {Number} schema
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        _setScript: function(r, t, a) {
          var n = this.get2DCursorLocation(r, !0), c = this.getValueOfPropertyAt(n.lineIndex, n.charIndex, "fontSize"), s = this.getValueOfPropertyAt(n.lineIndex, n.charIndex, "deltaY"), i = { fontSize: c * a.size, deltaY: s + c * a.baseline };
          return this.setSelectionStyles(i, r, t), this;
        },
        /**
         * @private
         * @param {Object} prevStyle
         * @param {Object} thisStyle
         */
        _hasStyleChanged: function(r, t) {
          return r.fill !== t.fill || r.stroke !== t.stroke || r.strokeWidth !== t.strokeWidth || r.fontSize !== t.fontSize || r.fontFamily !== t.fontFamily || r.fontWeight !== t.fontWeight || r.fontStyle !== t.fontStyle || r.deltaY !== t.deltaY;
        },
        /**
         * @private
         * @param {Object} prevStyle
         * @param {Object} thisStyle
         */
        _hasStyleChangedForSvg: function(r, t) {
          return this._hasStyleChanged(r, t) || r.overline !== t.overline || r.underline !== t.underline || r.linethrough !== t.linethrough;
        },
        /**
         * @private
         * @param {Number} lineIndex index text line
         * @return {Number} Line left offset
         */
        _getLineLeftOffset: function(r) {
          var t = this.getLineWidth(r);
          return this.textAlign === "center" ? (this.width - t) / 2 : this.textAlign === "right" ? this.width - t : this.textAlign === "justify-center" && this.isEndOfWrapping(r) ? (this.width - t) / 2 : this.textAlign === "justify-right" && this.isEndOfWrapping(r) ? this.width - t : 0;
        },
        /**
         * @private
         */
        _clearCache: function() {
          this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
        },
        /**
         * @private
         */
        _shouldClearDimensionCache: function() {
          var r = this._forceClearCache;
          return r || (r = this.hasStateChanged("_dimensionAffectingProps")), r && (this.dirty = !0, this._forceClearCache = !1), r;
        },
        /**
         * Measure a single line given its index. Used to calculate the initial
         * text bounding box. The values are calculated and stored in __lineWidths cache.
         * @private
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
        getLineWidth: function(r) {
          if (this.__lineWidths[r])
            return this.__lineWidths[r];
          var t, a = this._textLines[r], n;
          return a === "" ? t = 0 : (n = this.measureLine(r), t = n.width), this.__lineWidths[r] = t, t;
        },
        _getWidthOfCharSpacing: function() {
          return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
        },
        /**
         * Retrieves the value of property at given character position
         * @param {Number} lineIndex the line number
         * @param {Number} charIndex the charater number
         * @param {String} property the property name
         * @returns the value of 'property'
         */
        getValueOfPropertyAt: function(r, t, a) {
          var n = this._getStyleDeclaration(r, t);
          return n && typeof n[a] < "u" ? n[a] : this[a];
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextDecoration: function(r, t) {
          if (!(!this[t] && !this.styleHas(t))) {
            for (var a, n, c, s, i, o, l, d, g = this._getLeftOffset(), v = this._getTopOffset(), _, p, C, S, O, k, P, F, E = this._getWidthOfCharSpacing(), X = 0, z = this._textLines.length; X < z; X++) {
              if (a = this.getHeightOfLine(X), !this[t] && !this.styleHas(t, X)) {
                v += a;
                continue;
              }
              l = this._textLines[X], k = a / this.lineHeight, s = this._getLineLeftOffset(X), p = 0, C = 0, d = this.getValueOfPropertyAt(X, 0, t), F = this.getValueOfPropertyAt(X, 0, "fill"), _ = v + k * (1 - this._fontSizeFraction), n = this.getHeightOfChar(X, 0), i = this.getValueOfPropertyAt(X, 0, "deltaY");
              for (var N = 0, J = l.length; N < J; N++)
                S = this.__charBounds[X][N], O = this.getValueOfPropertyAt(X, N, t), P = this.getValueOfPropertyAt(X, N, "fill"), c = this.getHeightOfChar(X, N), o = this.getValueOfPropertyAt(X, N, "deltaY"), (O !== d || P !== F || c !== n || o !== i) && C > 0 ? (r.fillStyle = F, d && F && r.fillRect(
                  g + s + p,
                  _ + this.offsets[t] * n + i,
                  C,
                  this.fontSize / 15
                ), p = S.left, C = S.width, d = O, F = P, n = c, i = o) : C += S.kernedWidth;
              r.fillStyle = P, O && P && r.fillRect(
                g + s + p,
                _ + this.offsets[t] * n + i,
                C - E,
                this.fontSize / 15
              ), v += a;
            }
            this._removeShadow(r);
          }
        },
        /**
         * return font declaration string for canvas context
         * @param {Object} [styleObject] object
         * @returns {String} font declaration formatted for canvas context.
         */
        _getFontDeclaration: function(r, t) {
          var a = r || this, n = this.fontFamily, c = e.Text.genericFonts.indexOf(n.toLowerCase()) > -1, s = n === void 0 || n.indexOf("'") > -1 || n.indexOf(",") > -1 || n.indexOf('"') > -1 || c ? a.fontFamily : '"' + a.fontFamily + '"';
          return [
            // node-canvas needs "weight style", while browsers need "style weight"
            // verify if this can be fixed in JSDOM
            e.isLikelyNode ? a.fontWeight : a.fontStyle,
            e.isLikelyNode ? a.fontStyle : a.fontWeight,
            t ? this.CACHE_FONT_SIZE + "px" : a.fontSize + "px",
            s
          ].join(" ");
        },
        /**
         * Renders text instance on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(r) {
          this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", r)));
        },
        /**
         * Returns the text as an array of lines.
         * @param {String} text text to split
         * @returns {Array} Lines in the text
         */
        _splitTextIntoLines: function(r) {
          for (var t = r.split(this._reNewline), a = new Array(t.length), n = [`
`], c = [], s = 0; s < t.length; s++)
            a[s] = e.util.string.graphemeSplit(t[s]), c = c.concat(a[s], n);
          return c.pop(), { _unwrappedLines: a, lines: t, graphemeText: c, graphemeLines: a };
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(r) {
          var t = [
            "text",
            "fontSize",
            "fontWeight",
            "fontFamily",
            "fontStyle",
            "lineHeight",
            "underline",
            "overline",
            "linethrough",
            "textAlign",
            "textBackgroundColor",
            "charSpacing"
          ].concat(r), a = this.callSuper("toObject", t);
          return a.styles = h(this.styles, !0), a;
        },
        /**
         * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
         * @param {String|Object} key Property name or object (if object, iterate over the object properties)
         * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        set: function(r, t) {
          this.callSuper("set", r, t);
          var a = !1;
          if (typeof r == "object")
            for (var n in r)
              a = a || this._dimensionAffectingProps.indexOf(n) !== -1;
          else
            a = this._dimensionAffectingProps.indexOf(r) !== -1;
          return a && (this.initDimensions(), this.setCoords()), this;
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity
         */
        complexity: function() {
          return 1;
        }
      }
    ), e.Text.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
      "x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")
    ), e.Text.DEFAULT_SVG_FONT_SIZE = 16, e.Text.fromElement = function(r, t, a) {
      if (!r)
        return t(null);
      var n = e.parseAttributes(r, e.Text.ATTRIBUTE_NAMES), c = n.textAnchor || "left";
      if (a = e.util.object.extend(a ? h(a) : {}, n), a.top = a.top || 0, a.left = a.left || 0, n.textDecoration) {
        var s = n.textDecoration;
        s.indexOf("underline") !== -1 && (a.underline = !0), s.indexOf("overline") !== -1 && (a.overline = !0), s.indexOf("line-through") !== -1 && (a.linethrough = !0), delete a.textDecoration;
      }
      "dx" in n && (a.left += n.dx), "dy" in n && (a.top += n.dy), "fontSize" in a || (a.fontSize = e.Text.DEFAULT_SVG_FONT_SIZE);
      var i = "";
      "textContent" in r ? i = r.textContent : "firstChild" in r && r.firstChild !== null && "data" in r.firstChild && r.firstChild.data !== null && (i = r.firstChild.data), i = i.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
      var o = a.strokeWidth;
      a.strokeWidth = 0;
      var l = new e.Text(i, a), d = l.getScaledHeight() / l.height, g = (l.height + l.strokeWidth) * l.lineHeight - l.height, v = g * d, _ = l.getScaledHeight() + v, p = 0;
      c === "center" && (p = l.getScaledWidth() / 2), c === "right" && (p = l.getScaledWidth()), l.set({
        left: l.left - p,
        top: l.top - (_ - l.fontSize * (0.07 + l._fontSizeFraction)) / l.lineHeight,
        strokeWidth: typeof o < "u" ? o : 1
      }), t(l);
    }, e.Text.fromObject = function(r, t) {
      return e.Object._fromObject("Text", r, t, "text");
    }, e.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], e.util.createAccessors && e.util.createAccessors(e.Text);
  }(m), function() {
    u.util.object.extend(
      u.Text.prototype,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Returns true if object has no styling or no styling in a line
         * @param {Number} lineIndex , lineIndex is on wrapped lines.
         * @return {Boolean}
         */
        isEmptyStyles: function(f) {
          if (!this.styles || typeof f < "u" && !this.styles[f])
            return !0;
          var e = typeof f > "u" ? this.styles : { line: this.styles[f] };
          for (var h in e)
            for (var r in e[h])
              for (var t in e[h][r])
                return !1;
          return !0;
        },
        /**
         * Returns true if object has a style property or has it ina specified line
         * This function is used to detect if a text will use a particular property or not.
         * @param {String} property to check for
         * @param {Number} lineIndex to check the style on
         * @return {Boolean}
         */
        styleHas: function(f, e) {
          if (!this.styles || !f || f === "" || typeof e < "u" && !this.styles[e])
            return !1;
          var h = typeof e > "u" ? this.styles : { 0: this.styles[e] };
          for (var r in h)
            for (var t in h[r])
              if (typeof h[r][t][f] < "u")
                return !0;
          return !1;
        },
        /**
         * Check if characters in a text have a value for a property
         * whose value matches the textbox's value for that property.  If so,
         * the character-level property is deleted.  If the character
         * has no other properties, then it is also deleted.  Finally,
         * if the line containing that character has no other characters
         * then it also is deleted.
         *
         * @param {string} property The property to compare between characters and text.
         */
        cleanStyle: function(f) {
          if (!this.styles || !f || f === "")
            return !1;
          var e = this.styles, h = 0, r, t, a = !0, n = 0, c;
          for (var s in e) {
            r = 0;
            for (var i in e[s]) {
              var c = e[s][i], o = c.hasOwnProperty(f);
              h++, o ? (t ? c[f] !== t && (a = !1) : t = c[f], c[f] === this[f] && delete c[f]) : a = !1, Object.keys(c).length !== 0 ? r++ : delete e[s][i];
            }
            r === 0 && delete e[s];
          }
          for (var l = 0; l < this._textLines.length; l++)
            n += this._textLines[l].length;
          a && h === n && (this[f] = t, this.removeStyle(f));
        },
        /**
         * Remove a style property or properties from all individual character styles
         * in a text object.  Deletes the character style object if it contains no other style
         * props.  Deletes a line style object if it contains no other character styles.
         *
         * @param {String} props The property to remove from character styles.
         */
        removeStyle: function(f) {
          if (!(!this.styles || !f || f === "")) {
            var e = this.styles, h, r, t;
            for (r in e) {
              h = e[r];
              for (t in h)
                delete h[t][f], Object.keys(h[t]).length === 0 && delete h[t];
              Object.keys(h).length === 0 && delete e[r];
            }
          }
        },
        /**
         * @private
         */
        _extendStyles: function(f, e) {
          var h = this.get2DCursorLocation(f);
          this._getLineStyle(h.lineIndex) || this._setLineStyle(h.lineIndex), this._getStyleDeclaration(h.lineIndex, h.charIndex) || this._setStyleDeclaration(h.lineIndex, h.charIndex, {}), u.util.object.extend(this._getStyleDeclaration(h.lineIndex, h.charIndex), e);
        },
        /**
         * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
         * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
         * @param {Boolean} [skipWrapping] consider the location for unwrapped lines. usefull to manage styles.
         */
        get2DCursorLocation: function(f, e) {
          typeof f > "u" && (f = this.selectionStart);
          for (var h = e ? this._unwrappedTextLines : this._textLines, r = h.length, t = 0; t < r; t++) {
            if (f <= h[t].length)
              return {
                lineIndex: t,
                charIndex: f
              };
            f -= h[t].length + this.missingNewlineOffset(t);
          }
          return {
            lineIndex: t - 1,
            charIndex: h[t - 1].length < f ? h[t - 1].length : f
          };
        },
        /**
         * Gets style of a current selection/cursor (at the start position)
         * if startIndex or endIndex are not provided, slectionStart or selectionEnd will be used.
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @param {Boolean} [complete] get full style or not
         * @return {Array} styles an array with one, zero or more Style objects
         */
        getSelectionStyles: function(f, e, h) {
          typeof f > "u" && (f = this.selectionStart || 0), typeof e > "u" && (e = this.selectionEnd || f);
          for (var r = [], t = f; t < e; t++)
            r.push(this.getStyleAtPosition(t, h));
          return r;
        },
        /**
         * Gets style of a current selection/cursor position
         * @param {Number} position  to get styles at
         * @param {Boolean} [complete] full style if true
         * @return {Object} style Style object at a specified index
         * @private
         */
        getStyleAtPosition: function(f, e) {
          var h = this.get2DCursorLocation(f), r = e ? this.getCompleteStyleDeclaration(h.lineIndex, h.charIndex) : this._getStyleDeclaration(h.lineIndex, h.charIndex);
          return r || {};
        },
        /**
         * Sets style of a current selection, if no selection exist, do not set anything.
         * @param {Object} [styles] Styles object
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @return {fabric.IText} thisArg
         * @chainable
         */
        setSelectionStyles: function(f, e, h) {
          typeof e > "u" && (e = this.selectionStart || 0), typeof h > "u" && (h = this.selectionEnd || e);
          for (var r = e; r < h; r++)
            this._extendStyles(r, f);
          return this._forceClearCache = !0, this;
        },
        /**
         * get the reference, not a clone, of the style object for a given character
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @return {Object} style object
         */
        _getStyleDeclaration: function(f, e) {
          var h = this.styles && this.styles[f];
          return h ? h[e] : null;
        },
        /**
         * return a new object that contains all the style property for a character
         * the object returned is newly created
         * @param {Number} lineIndex of the line where the character is
         * @param {Number} charIndex position of the character on the line
         * @return {Object} style object
         */
        getCompleteStyleDeclaration: function(f, e) {
          for (var h = this._getStyleDeclaration(f, e) || {}, r = {}, t, a = 0; a < this._styleProperties.length; a++)
            t = this._styleProperties[a], r[t] = typeof h[t] > "u" ? this[t] : h[t];
          return r;
        },
        /**
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {Object} style
         * @private
         */
        _setStyleDeclaration: function(f, e, h) {
          this.styles[f][e] = h;
        },
        /**
         *
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @private
         */
        _deleteStyleDeclaration: function(f, e) {
          delete this.styles[f][e];
        },
        /**
         * @param {Number} lineIndex
         * @return {Boolean} if the line exists or not
         * @private
         */
        _getLineStyle: function(f) {
          return !!this.styles[f];
        },
        /**
         * Set the line style to an empty object so that is initialized
         * @param {Number} lineIndex
         * @private
         */
        _setLineStyle: function(f) {
          this.styles[f] = {};
        },
        /**
         * @param {Number} lineIndex
         * @private
         */
        _deleteLineStyle: function(f) {
          delete this.styles[f];
        }
      }
    );
  }(), function() {
    function f(e) {
      e.textDecoration && (e.textDecoration.indexOf("underline") > -1 && (e.underline = !0), e.textDecoration.indexOf("line-through") > -1 && (e.linethrough = !0), e.textDecoration.indexOf("overline") > -1 && (e.overline = !0), delete e.textDecoration);
    }
    u.IText = u.util.createClass(
      u.Text,
      u.Observable,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "i-text",
        /**
         * Index where text selection starts (or where cursor is when there is no selection)
         * @type Number
         * @default
         */
        selectionStart: 0,
        /**
         * Index where text selection ends
         * @type Number
         * @default
         */
        selectionEnd: 0,
        /**
         * Color of text selection
         * @type String
         * @default
         */
        selectionColor: "rgba(17,119,255,0.3)",
        /**
         * Indicates whether text is in editing mode
         * @type Boolean
         * @default
         */
        isEditing: !1,
        /**
         * Indicates whether a text can be edited
         * @type Boolean
         * @default
         */
        editable: !0,
        /**
         * Border color of text object while it's in editing mode
         * @type String
         * @default
         */
        editingBorderColor: "rgba(102,153,255,0.25)",
        /**
         * Width of cursor (in px)
         * @type Number
         * @default
         */
        cursorWidth: 2,
        /**
         * Color of default cursor (when not overwritten by character style)
         * @type String
         * @default
         */
        cursorColor: "#333",
        /**
         * Delay between cursor blink (in ms)
         * @type Number
         * @default
         */
        cursorDelay: 1e3,
        /**
         * Duration of cursor fadein (in ms)
         * @type Number
         * @default
         */
        cursorDuration: 600,
        /**
         * Indicates whether internal text char widths can be cached
         * @type Boolean
         * @default
         */
        caching: !0,
        /**
         * @private
         */
        _reSpace: /\s|\n/,
        /**
         * @private
         */
        _currentCursorOpacity: 0,
        /**
         * @private
         */
        _selectionDirection: null,
        /**
         * @private
         */
        _abortCursorAnimation: !1,
        /**
         * @private
         */
        __widthOfSpace: [],
        /**
         * Helps determining when the text is in composition, so that the cursor
         * rendering is altered.
         */
        inCompositionMode: !1,
        /**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.IText} thisArg
         */
        initialize: function(e, h) {
          this.callSuper("initialize", e, h), this.initBehavior();
        },
        /**
         * Sets selection start (left boundary of a selection)
         * @param {Number} index Index to set selection start to
         */
        setSelectionStart: function(e) {
          e = Math.max(e, 0), this._updateAndFire("selectionStart", e);
        },
        /**
         * Sets selection end (right boundary of a selection)
         * @param {Number} index Index to set selection end to
         */
        setSelectionEnd: function(e) {
          e = Math.min(e, this.text.length), this._updateAndFire("selectionEnd", e);
        },
        /**
         * @private
         * @param {String} property 'selectionStart' or 'selectionEnd'
         * @param {Number} index new position of property
         */
        _updateAndFire: function(e, h) {
          this[e] !== h && (this._fireSelectionChanged(), this[e] = h), this._updateTextarea();
        },
        /**
         * Fires the even of selection changed
         * @private
         */
        _fireSelectionChanged: function() {
          this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
        },
        /**
         * Initialize text dimensions. Render all text on given context
         * or on a offscreen canvas to get the text width with measureText.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         * @private
         */
        initDimensions: function() {
          this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(e) {
          this.clearContextTop(), this.callSuper("render", e), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(e) {
          this.callSuper("_render", e);
        },
        /**
         * Prepare and clean the contextTop
         */
        clearContextTop: function(e) {
          if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
            var h = this.canvas.contextTop, r = this.canvas.viewportTransform;
            h.save(), h.transform(r[0], r[1], r[2], r[3], r[4], r[5]), this.transform(h), this.transformMatrix && h.transform.apply(h, this.transformMatrix), this._clearTextArea(h), e || h.restore();
          }
        },
        /**
         * Renders cursor or selection (depending on what exists)
         * it does on the contextTop. If contextTop is not available, do nothing.
         */
        renderCursorOrSelection: function() {
          if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
            var e = this._getCursorBoundaries(), h = this.canvas.contextTop;
            this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(e, h) : this.renderSelection(e, h), h.restore();
          }
        },
        _clearTextArea: function(e) {
          var h = this.width + 4, r = this.height + 4;
          e.clearRect(-h / 2, -r / 2, h, r);
        },
        /**
         * Returns cursor boundaries (left, top, leftOffset, topOffset)
         * @private
         * @param {Array} chars Array of characters
         * @param {String} typeOfBoundaries
         */
        _getCursorBoundaries: function(e) {
          typeof e > "u" && (e = this.selectionStart);
          var h = this._getLeftOffset(), r = this._getTopOffset(), t = this._getCursorBoundariesOffsets(e);
          return {
            left: h,
            top: r,
            leftOffset: t.left,
            topOffset: t.top
          };
        },
        /**
         * @private
         */
        _getCursorBoundariesOffsets: function(e) {
          if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
            return this.cursorOffsetCache;
          var h, r, t, a = 0, n = 0, c, s = this.get2DCursorLocation(e);
          t = s.charIndex, r = s.lineIndex;
          for (var i = 0; i < r; i++)
            a += this.getHeightOfLine(i);
          h = this._getLineLeftOffset(r);
          var o = this.__charBounds[r][t];
          return o && (n = o.left), this.charSpacing !== 0 && t === this._textLines[r].length && (n -= this._getWidthOfCharSpacing()), c = {
            top: a,
            left: h + (n > 0 ? n : 0)
          }, this.cursorOffsetCache = c, this.cursorOffsetCache;
        },
        /**
         * Renders cursor
         * @param {Object} boundaries
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
        renderCursor: function(e, h) {
          var r = this.get2DCursorLocation(), t = r.lineIndex, a = r.charIndex > 0 ? r.charIndex - 1 : 0, n = this.getValueOfPropertyAt(t, a, "fontSize"), c = this.scaleX * this.canvas.getZoom(), s = this.cursorWidth / c, i = e.topOffset, o = this.getValueOfPropertyAt(t, a, "deltaY");
          i += (1 - this._fontSizeFraction) * this.getHeightOfLine(t) / this.lineHeight - n * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(e, h), h.fillStyle = this.getValueOfPropertyAt(t, a, "fill"), h.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, h.fillRect(
            e.left + e.leftOffset - s / 2,
            i + e.top + o,
            s,
            n
          );
        },
        /**
         * Renders text selection
         * @param {Object} boundaries Object with left/top/leftOffset/topOffset
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
        renderSelection: function(e, h) {
          for (var r = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, t = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, a = this.textAlign.indexOf("justify") !== -1, n = this.get2DCursorLocation(r), c = this.get2DCursorLocation(t), s = n.lineIndex, i = c.lineIndex, o = n.charIndex < 0 ? 0 : n.charIndex, l = c.charIndex < 0 ? 0 : c.charIndex, d = s; d <= i; d++) {
            var g = this._getLineLeftOffset(d) || 0, v = this.getHeightOfLine(d), _ = 0, p = 0, C = 0;
            if (d === s && (p = this.__charBounds[s][o].left), d >= s && d < i)
              C = a && !this.isEndOfWrapping(d) ? this.width : this.getLineWidth(d) || 5;
            else if (d === i)
              if (l === 0)
                C = this.__charBounds[i][l].left;
              else {
                var S = this._getWidthOfCharSpacing();
                C = this.__charBounds[i][l - 1].left + this.__charBounds[i][l - 1].width - S;
              }
            _ = v, (this.lineHeight < 1 || d === i && this.lineHeight > 1) && (v /= this.lineHeight), this.inCompositionMode ? (h.fillStyle = this.compositionColor || "black", h.fillRect(
              e.left + g + p,
              e.top + e.topOffset + v,
              C - p,
              1
            )) : (h.fillStyle = this.selectionColor, h.fillRect(
              e.left + g + p,
              e.top + e.topOffset,
              C - p,
              v
            )), e.topOffset += _;
          }
        },
        /**
         * High level function to know the height of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns fontSize of char at the current cursor
         * @return {Number} Character font size
         */
        getCurrentCharFontSize: function() {
          var e = this._getCurrentCharIndex();
          return this.getValueOfPropertyAt(e.l, e.c, "fontSize");
        },
        /**
         * High level function to know the color of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns color (fill) of char at the current cursor
         * @return {String} Character color (fill)
         */
        getCurrentCharColor: function() {
          var e = this._getCurrentCharIndex();
          return this.getValueOfPropertyAt(e.l, e.c, "fill");
        },
        /**
         * Returns the cursor position for the getCurrent.. functions
         * @private
         */
        _getCurrentCharIndex: function() {
          var e = this.get2DCursorLocation(this.selectionStart, !0), h = e.charIndex > 0 ? e.charIndex - 1 : 0;
          return { l: e.lineIndex, c: h };
        }
      }
    ), u.IText.fromObject = function(e, h) {
      if (f(e), e.styles)
        for (var r in e.styles)
          for (var t in e.styles[r])
            f(e.styles[r][t]);
      u.Object._fromObject("IText", e, h, "text");
    };
  }(), function() {
    var f = u.util.object.clone;
    u.util.object.extend(
      u.IText.prototype,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Initializes all the interactive behavior of IText
         */
        initBehavior: function() {
          this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        },
        onDeselect: function() {
          this.isEditing && this.exitEditing(), this.selected = !1;
        },
        /**
         * Initializes "added" event handler
         */
        initAddedHandler: function() {
          var e = this;
          this.on("added", function() {
            var h = e.canvas;
            h && (h._hasITextHandlers || (h._hasITextHandlers = !0, e._initCanvasHandlers(h)), h._iTextInstances = h._iTextInstances || [], h._iTextInstances.push(e));
          });
        },
        initRemovedHandler: function() {
          var e = this;
          this.on("removed", function() {
            var h = e.canvas;
            h && (h._iTextInstances = h._iTextInstances || [], u.util.removeFromArray(h._iTextInstances, e), h._iTextInstances.length === 0 && (h._hasITextHandlers = !1, e._removeCanvasHandlers(h)));
          });
        },
        /**
         * register canvas event to manage exiting on other instances
         * @private
         */
        _initCanvasHandlers: function(e) {
          e._mouseUpITextHandler = function() {
            e._iTextInstances && e._iTextInstances.forEach(function(h) {
              h.__isMousedown = !1;
            });
          }, e.on("mouse:up", e._mouseUpITextHandler);
        },
        /**
         * remove canvas event to manage exiting on other instances
         * @private
         */
        _removeCanvasHandlers: function(e) {
          e.off("mouse:up", e._mouseUpITextHandler);
        },
        /**
         * @private
         */
        _tick: function() {
          this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
        },
        /**
         * @private
         */
        _animateCursor: function(e, h, r, t) {
          var a;
          return a = {
            isAborted: !1,
            abort: function() {
              this.isAborted = !0;
            }
          }, e.animate("_currentCursorOpacity", h, {
            duration: r,
            onComplete: function() {
              a.isAborted || e[t]();
            },
            onChange: function() {
              e.canvas && e.selectionStart === e.selectionEnd && e.renderCursorOrSelection();
            },
            abort: function() {
              return a.isAborted;
            }
          }), a;
        },
        /**
         * @private
         */
        _onTickComplete: function() {
          var e = this;
          this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
            e._currentTickCompleteState = e._animateCursor(e, 0, this.cursorDuration / 2, "_tick");
          }, 100);
        },
        /**
         * Initializes delayed cursor
         */
        initDelayedCursor: function(e) {
          var h = this, r = e ? 0 : this.cursorDelay;
          this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
            h._tick();
          }, r);
        },
        /**
         * Aborts cursor animation and clears all timeouts
         */
        abortCursorAnimation: function() {
          var e = this._currentTickState || this._currentTickCompleteState, h = this.canvas;
          this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, e && h && h.clearContext(h.contextTop || h.contextContainer);
        },
        /**
         * Selects entire text
         * @return {fabric.IText} thisArg
         * @chainable
         */
        selectAll: function() {
          return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
        },
        /**
         * Returns selected text
         * @return {String}
         */
        getSelectedText: function() {
          return this._text.slice(this.selectionStart, this.selectionEnd).join("");
        },
        /**
         * Find new selection index representing start of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findWordBoundaryLeft: function(e) {
          var h = 0, r = e - 1;
          if (this._reSpace.test(this._text[r]))
            for (; this._reSpace.test(this._text[r]); )
              h++, r--;
          for (; /\S/.test(this._text[r]) && r > -1; )
            h++, r--;
          return e - h;
        },
        /**
         * Find new selection index representing end of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findWordBoundaryRight: function(e) {
          var h = 0, r = e;
          if (this._reSpace.test(this._text[r]))
            for (; this._reSpace.test(this._text[r]); )
              h++, r++;
          for (; /\S/.test(this._text[r]) && r < this._text.length; )
            h++, r++;
          return e + h;
        },
        /**
         * Find new selection index representing start of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findLineBoundaryLeft: function(e) {
          for (var h = 0, r = e - 1; !/\n/.test(this._text[r]) && r > -1; )
            h++, r--;
          return e - h;
        },
        /**
         * Find new selection index representing end of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findLineBoundaryRight: function(e) {
          for (var h = 0, r = e; !/\n/.test(this._text[r]) && r < this._text.length; )
            h++, r++;
          return e + h;
        },
        /**
         * Finds index corresponding to beginning or end of a word
         * @param {Number} selectionStart Index of a character
         * @param {Number} direction 1 or -1
         * @return {Number} Index of the beginning or end of a word
         */
        searchWordBoundary: function(e, h) {
          for (var r = this._text, t = this._reSpace.test(r[e]) ? e - 1 : e, a = r[t], n = u.reNonWord; !n.test(a) && t > 0 && t < r.length; )
            t += h, a = r[t];
          return n.test(a) && (t += h === 1 ? 0 : 1), t;
        },
        /**
         * Selects a word based on the index
         * @param {Number} selectionStart Index of a character
         */
        selectWord: function(e) {
          e = e || this.selectionStart;
          var h = this.searchWordBoundary(e, -1), r = this.searchWordBoundary(e, 1);
          this.selectionStart = h, this.selectionEnd = r, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
        },
        /**
         * Selects a line based on the index
         * @param {Number} selectionStart Index of a character
         * @return {fabric.IText} thisArg
         * @chainable
         */
        selectLine: function(e) {
          e = e || this.selectionStart;
          var h = this.findLineBoundaryLeft(e), r = this.findLineBoundaryRight(e);
          return this.selectionStart = h, this.selectionEnd = r, this._fireSelectionChanged(), this._updateTextarea(), this;
        },
        /**
         * Enters editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
        enterEditing: function(e) {
          if (!(this.isEditing || !this.editable))
            return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(e), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this;
        },
        exitEditingOnOthers: function(e) {
          e._iTextInstances && e._iTextInstances.forEach(function(h) {
            h.selected = !1, h.isEditing && h.exitEditing();
          });
        },
        /**
         * Initializes "mousemove" event handler
         */
        initMouseMoveHandler: function() {
          this.canvas.on("mouse:move", this.mouseMoveHandler);
        },
        /**
         * @private
         */
        mouseMoveHandler: function(e) {
          if (!(!this.__isMousedown || !this.isEditing)) {
            var h = this.getSelectionStartFromPointer(e.e), r = this.selectionStart, t = this.selectionEnd;
            (h !== this.__selectionStartOnMouseDown || r === t) && (r === h || t === h) || (h > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = h) : (this.selectionStart = h, this.selectionEnd = this.__selectionStartOnMouseDown), (this.selectionStart !== r || this.selectionEnd !== t) && (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
          }
        },
        /**
         * @private
         */
        _setEditingProps: function() {
          this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
        },
        /**
         * convert from textarea to grapheme indexes
         */
        fromStringToGraphemeSelection: function(e, h, r) {
          var t = r.slice(0, e), a = u.util.string.graphemeSplit(t).length;
          if (e === h)
            return { selectionStart: a, selectionEnd: a };
          var n = r.slice(e, h), c = u.util.string.graphemeSplit(n).length;
          return { selectionStart: a, selectionEnd: a + c };
        },
        /**
         * convert from fabric to textarea values
         */
        fromGraphemeToStringSelection: function(e, h, r) {
          var t = r.slice(0, e), a = t.join("").length;
          if (e === h)
            return { selectionStart: a, selectionEnd: a };
          var n = r.slice(e, h), c = n.join("").length;
          return { selectionStart: a, selectionEnd: a + c };
        },
        /**
         * @private
         */
        _updateTextarea: function() {
          if (this.cursorOffsetCache = {}, !!this.hiddenTextarea) {
            if (!this.inCompositionMode) {
              var e = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
              this.hiddenTextarea.selectionStart = e.selectionStart, this.hiddenTextarea.selectionEnd = e.selectionEnd;
            }
            this.updateTextareaPosition();
          }
        },
        /**
         * @private
         */
        updateFromTextArea: function() {
          if (this.hiddenTextarea) {
            this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
            var e = this.fromStringToGraphemeSelection(
              this.hiddenTextarea.selectionStart,
              this.hiddenTextarea.selectionEnd,
              this.hiddenTextarea.value
            );
            this.selectionEnd = this.selectionStart = e.selectionEnd, this.inCompositionMode || (this.selectionStart = e.selectionStart), this.updateTextareaPosition();
          }
        },
        /**
         * @private
         */
        updateTextareaPosition: function() {
          if (this.selectionStart === this.selectionEnd) {
            var e = this._calcTextareaPosition();
            this.hiddenTextarea.style.left = e.left, this.hiddenTextarea.style.top = e.top;
          }
        },
        /**
         * @private
         * @return {Object} style contains style for hiddenTextarea
         */
        _calcTextareaPosition: function() {
          if (!this.canvas)
            return { x: 1, y: 1 };
          var e = this.inCompositionMode ? this.compositionStart : this.selectionStart, h = this._getCursorBoundaries(e), r = this.get2DCursorLocation(e), t = r.lineIndex, a = r.charIndex, n = this.getValueOfPropertyAt(t, a, "fontSize") * this.lineHeight, c = h.leftOffset, s = this.calcTransformMatrix(), i = {
            x: h.left + c,
            y: h.top + h.topOffset + n
          }, o = this.canvas.getRetinaScaling(), l = this.canvas.upperCanvasEl, d = l.width / o, g = l.height / o, v = d - n, _ = g - n, p = l.clientWidth / d, C = l.clientHeight / g;
          return i = u.util.transformPoint(i, s), i = u.util.transformPoint(i, this.canvas.viewportTransform), i.x *= p, i.y *= C, i.x < 0 && (i.x = 0), i.x > v && (i.x = v), i.y < 0 && (i.y = 0), i.y > _ && (i.y = _), i.x += this.canvas._offset.left, i.y += this.canvas._offset.top, { left: i.x + "px", top: i.y + "px", fontSize: n + "px", charHeight: n };
        },
        /**
         * @private
         */
        _saveEditingProps: function() {
          this._savedProps = {
            hasControls: this.hasControls,
            borderColor: this.borderColor,
            lockMovementX: this.lockMovementX,
            lockMovementY: this.lockMovementY,
            hoverCursor: this.hoverCursor,
            selectable: this.selectable,
            defaultCursor: this.canvas && this.canvas.defaultCursor,
            moveCursor: this.canvas && this.canvas.moveCursor
          };
        },
        /**
         * @private
         */
        _restoreEditingProps: function() {
          this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
        },
        /**
         * Exits from editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
        exitEditing: function() {
          var e = this._textBeforeEdit !== this.text, h = this.hiddenTextarea;
          return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, h && (h.blur && h.blur(), h.parentNode && h.parentNode.removeChild(h)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), e && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), e && this.canvas.fire("object:modified", { target: this })), this;
        },
        /**
         * @private
         */
        _removeExtraneousStyles: function() {
          for (var e in this.styles)
            this._textLines[e] || delete this.styles[e];
        },
        /**
         * remove and reflow a style block from start to end.
         * @param {Number} start linear start position for removal (included in removal)
         * @param {Number} end linear end position for removal ( excluded from removal )
         */
        removeStyleFromTo: function(e, h) {
          var r = this.get2DCursorLocation(e, !0), t = this.get2DCursorLocation(h, !0), a = r.lineIndex, n = r.charIndex, c = t.lineIndex, s = t.charIndex, i, o;
          if (a !== c) {
            if (this.styles[a])
              for (i = n; i < this._unwrappedTextLines[a].length; i++)
                delete this.styles[a][i];
            if (this.styles[c])
              for (i = s; i < this._unwrappedTextLines[c].length; i++)
                o = this.styles[c][i], o && (this.styles[a] || (this.styles[a] = {}), this.styles[a][n + i - s] = o);
            for (i = a + 1; i <= c; i++)
              delete this.styles[i];
            this.shiftLineStyles(c, a - c);
          } else if (this.styles[a]) {
            o = this.styles[a];
            var l = s - n, d, g;
            for (i = n; i < s; i++)
              delete o[i];
            for (g in this.styles[a])
              d = parseInt(g, 10), d >= s && (o[d - l] = o[g], delete o[g]);
          }
        },
        /**
         * Shifts line styles up or down
         * @param {Number} lineIndex Index of a line
         * @param {Number} offset Can any number?
         */
        shiftLineStyles: function(e, h) {
          var r = f(this.styles);
          for (var t in this.styles) {
            var a = parseInt(t, 10);
            a > e && (this.styles[a + h] = r[a], r[a - h] || delete this.styles[a]);
          }
        },
        restartCursorIfNeeded: function() {
          (!this._currentTickState || this._currentTickState.isAborted || !this._currentTickCompleteState || this._currentTickCompleteState.isAborted) && this.initDelayedCursor();
        },
        /**
         * Inserts new style object
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} qty number of lines to add
         * @param {Array} copiedStyle Array of objects styles
         */
        insertNewlineStyleObject: function(e, h, r, t) {
          var a, n = {}, c = !1;
          r || (r = 1), this.shiftLineStyles(e, r), this.styles[e] && (a = this.styles[e][h === 0 ? h : h - 1]);
          for (var s in this.styles[e]) {
            var i = parseInt(s, 10);
            i >= h && (c = !0, n[i - h] = this.styles[e][s], delete this.styles[e][s]);
          }
          for (c ? this.styles[e + r] = n : delete this.styles[e + r]; r > 1; )
            r--, t && t[r] ? this.styles[e + r] = { 0: f(t[r]) } : a ? this.styles[e + r] = { 0: f(a) } : delete this.styles[e + r];
          this._forceClearCache = !0;
        },
        /**
         * Inserts style object for a given line/char index
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} quantity number Style object to insert, if given
         * @param {Array} copiedStyle array of style objects
         */
        insertCharStyleObject: function(e, h, r, t) {
          this.styles || (this.styles = {});
          var a = this.styles[e], n = a ? f(a) : {};
          r || (r = 1);
          for (var c in n) {
            var s = parseInt(c, 10);
            s >= h && (a[s + r] = n[s], n[s - r] || delete a[s]);
          }
          if (this._forceClearCache = !0, t) {
            for (; r--; )
              Object.keys(t[r]).length && (this.styles[e] || (this.styles[e] = {}), this.styles[e][h + r] = f(t[r]));
            return;
          }
          if (a)
            for (var i = a[h ? h - 1 : 1]; i && r--; )
              this.styles[e][h + r] = f(i);
        },
        /**
         * Inserts style object(s)
         * @param {Array} insertedText Characters at the location where style is inserted
         * @param {Number} start cursor index for inserting style
         * @param {Array} [copiedStyle] array of style objects to insert.
         */
        insertNewStyleBlock: function(e, h, r) {
          for (var t = this.get2DCursorLocation(h, !0), a = [0], n = 0, c = 0; c < e.length; c++)
            e[c] === `
` ? (n++, a[n] = 0) : a[n]++;
          a[0] > 0 && (this.insertCharStyleObject(t.lineIndex, t.charIndex, a[0], r), r = r && r.slice(a[0] + 1)), n && this.insertNewlineStyleObject(
            t.lineIndex,
            t.charIndex + a[0],
            n
          );
          for (var c = 1; c < n; c++)
            a[c] > 0 ? this.insertCharStyleObject(t.lineIndex + c, 0, a[c], r) : r && (this.styles[t.lineIndex + c][0] = r[0]), r = r && r.slice(a[c] + 1);
          a[c] > 0 && this.insertCharStyleObject(t.lineIndex + c, 0, a[c], r);
        },
        /**
         * Set the selectionStart and selectionEnd according to the new position of cursor
         * mimic the key - mouse navigation when shift is pressed.
         */
        setSelectionStartEndWithShift: function(e, h, r) {
          r <= e ? (h === e ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = e), this.selectionStart = r) : r > e && r < h ? this._selectionDirection === "right" ? this.selectionEnd = r : this.selectionStart = r : (h === e ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = h), this.selectionEnd = r);
        },
        setSelectionInBoundaries: function() {
          var e = this.text.length;
          this.selectionStart > e ? this.selectionStart = e : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > e ? this.selectionEnd = e : this.selectionEnd < 0 && (this.selectionEnd = 0);
        }
      }
    );
  }(), u.util.object.extend(
    u.IText.prototype,
    /** @lends fabric.IText.prototype */
    {
      /**
       * Initializes "dbclick" event handler
       */
      initDoubleClickSimulation: function() {
        this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
      },
      /**
       * Default event handler to simulate triple click
       * @private
       */
      onMouseDown: function(f) {
        if (this.canvas) {
          this.__newClickTime = +/* @__PURE__ */ new Date();
          var e = f.pointer;
          this.isTripleClick(e) && (this.fire("tripleclick", f), this._stopEvent(f.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = e, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
        }
      },
      isTripleClick: function(f) {
        return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === f.x && this.__lastPointer.y === f.y;
      },
      /**
       * @private
       */
      _stopEvent: function(f) {
        f.preventDefault && f.preventDefault(), f.stopPropagation && f.stopPropagation();
      },
      /**
       * Initializes event handlers related to cursor or selection
       */
      initCursorSelectionHandlers: function() {
        this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
      },
      /**
       * Default handler for double click, select a word
       */
      doubleClickHandler: function(f) {
        this.isEditing && this.selectWord(this.getSelectionStartFromPointer(f.e));
      },
      /**
       * Default handler for triple click, select a line
       */
      tripleClickHandler: function(f) {
        this.isEditing && this.selectLine(this.getSelectionStartFromPointer(f.e));
      },
      /**
       * Initializes double and triple click event handlers
       */
      initClicks: function() {
        this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler);
      },
      /**
       * Default event handler for the basic functionalities needed on _mouseDown
       * can be overridden to do something different.
       * Scope of this implementation is: find the click position, set selectionStart
       * find selectionEnd, initialize the drawing of either cursor or selection area
       */
      _mouseDownHandler: function(f) {
        !this.canvas || !this.editable || f.e.button && f.e.button !== 1 || (this.__isMousedown = !0, this.selected && this.setCursorByClick(f.e), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
      },
      /**
       * Default event handler for the basic functionalities needed on mousedown:before
       * can be overridden to do something different.
       * Scope of this implementation is: verify the object is already selected when mousing down
       */
      _mouseDownHandlerBefore: function(f) {
        !this.canvas || !this.editable || f.e.button && f.e.button !== 1 || (this.selected = this === this.canvas._activeObject);
      },
      /**
       * Initializes "mousedown" event handler
       */
      initMousedownHandler: function() {
        this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
      },
      /**
       * Initializes "mouseup" event handler
       */
      initMouseupHandler: function() {
        this.on("mouseup", this.mouseUpHandler);
      },
      /**
       * standard hander for mouse up, overridable
       * @private
       */
      mouseUpHandler: function(f) {
        if (this.__isMousedown = !1, !(!this.editable || this.group || f.transform && f.transform.actionPerformed || f.e.button && f.e.button !== 1)) {
          if (this.canvas) {
            var e = this.canvas._activeObject;
            if (e && e !== this)
              return;
          }
          this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(f.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
        }
      },
      /**
       * Changes cursor location in a text depending on passed pointer (x/y) object
       * @param {Event} e Event object
       */
      setCursorByClick: function(f) {
        var e = this.getSelectionStartFromPointer(f), h = this.selectionStart, r = this.selectionEnd;
        f.shiftKey ? this.setSelectionStartEndWithShift(h, r, e) : (this.selectionStart = e, this.selectionEnd = e), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Returns index of a character corresponding to where an object was clicked
       * @param {Event} e Event object
       * @return {Number} Index of a character
       */
      getSelectionStartFromPointer: function(f) {
        for (var e = this.getLocalPointer(f), h = 0, r = 0, t = 0, a = 0, n = 0, c, s, i = 0, o = this._textLines.length; i < o && t <= e.y; i++)
          t += this.getHeightOfLine(i) * this.scaleY, n = i, i > 0 && (a += this._textLines[i - 1].length + this.missingNewlineOffset(i - 1));
        c = this._getLineLeftOffset(n), r = c * this.scaleX, s = this._textLines[n];
        for (var l = 0, d = s.length; l < d && (h = r, r += this.__charBounds[n][l].kernedWidth * this.scaleX, r <= e.x); l++)
          a++;
        return this._getNewSelectionStartFromOffset(e, h, r, a, d);
      },
      /**
       * @private
       */
      _getNewSelectionStartFromOffset: function(f, e, h, r, t) {
        var a = f.x - e, n = h - f.x, c = n > a || n < 0 ? 0 : 1, s = r + c;
        return this.flipX && (s = t - s), s > this._text.length && (s = this._text.length), s;
      }
    }
  ), u.util.object.extend(
    u.IText.prototype,
    /** @lends fabric.IText.prototype */
    {
      /**
       * Initializes hidden textarea (needed to bring up keyboard in iOS)
       */
      initHiddenTextarea: function() {
        this.hiddenTextarea = u.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
        var f = this._calcTextareaPosition();
        this.hiddenTextarea.style.cssText = "position: absolute; top: " + f.top + "; left: " + f.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingｰtop: " + f.fontSize + ";", u.document.body.appendChild(this.hiddenTextarea), u.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), u.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), u.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), u.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), u.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), u.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), u.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), u.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), u.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (u.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
      },
      /**
       * For functionalities on keyDown
       * Map a special key to a function of the instance/prototype
       * If you need different behaviour for ESC or TAB or arrows, you have to change
       * this map setting the name of a function that you build on the fabric.Itext or
       * your prototype.
       * the map change will affect all Instances unless you need for only some text Instances
       * in that case you have to clone this object and assign your Instance.
       * this.keysMap = fabric.util.object.clone(this.keysMap);
       * The function must be in fabric.Itext.prototype.myFunction And will receive event as args[0]
       */
      keysMap: {
        9: "exitEditing",
        27: "exitEditing",
        33: "moveCursorUp",
        34: "moveCursorDown",
        35: "moveCursorRight",
        36: "moveCursorLeft",
        37: "moveCursorLeft",
        38: "moveCursorUp",
        39: "moveCursorRight",
        40: "moveCursorDown"
      },
      /**
       * For functionalities on keyUp + ctrl || cmd
       */
      ctrlKeysMapUp: {
        67: "copy",
        88: "cut"
      },
      /**
       * For functionalities on keyDown + ctrl || cmd
       */
      ctrlKeysMapDown: {
        65: "selectAll"
      },
      onClick: function() {
        this.hiddenTextarea && this.hiddenTextarea.focus();
      },
      /**
       * Handles keyup event
       * @param {Event} e Event object
       */
      onKeyDown: function(f) {
        if (!(!this.isEditing || this.inCompositionMode)) {
          if (f.keyCode in this.keysMap)
            this[this.keysMap[f.keyCode]](f);
          else if (f.keyCode in this.ctrlKeysMapDown && (f.ctrlKey || f.metaKey))
            this[this.ctrlKeysMapDown[f.keyCode]](f);
          else
            return;
          f.stopImmediatePropagation(), f.preventDefault(), f.keyCode >= 33 && f.keyCode <= 40 ? (this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
        }
      },
      /**
       * Handles keyup event
       * We handle KeyUp because ie11 and edge have difficulties copy/pasting
       * if a copy/cut event fired, keyup is dismissed
       * @param {Event} e Event object
       */
      onKeyUp: function(f) {
        if (!this.isEditing || this._copyDone || this.inCompositionMode) {
          this._copyDone = !1;
          return;
        }
        if (f.keyCode in this.ctrlKeysMapUp && (f.ctrlKey || f.metaKey))
          this[this.ctrlKeysMapUp[f.keyCode]](f);
        else
          return;
        f.stopImmediatePropagation(), f.preventDefault(), this.canvas && this.canvas.requestRenderAll();
      },
      /**
       * Handles onInput event
       * @param {Event} e Event object
       */
      onInput: function(f) {
        var e = this.fromPaste;
        if (this.fromPaste = !1, f && f.stopPropagation(), !!this.isEditing) {
          var h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, r = this._text.length, t = h.length, a, n, c = t - r;
          if (this.hiddenTextarea.value === "") {
            this.styles = {}, this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
            return;
          }
          var s = this.fromStringToGraphemeSelection(
            this.hiddenTextarea.selectionStart,
            this.hiddenTextarea.selectionEnd,
            this.hiddenTextarea.value
          ), i = this.selectionStart > s.selectionStart;
          this.selectionStart !== this.selectionEnd ? (a = this._text.slice(this.selectionStart, this.selectionEnd), c += this.selectionEnd - this.selectionStart) : t < r && (i ? a = this._text.slice(this.selectionEnd + c, this.selectionEnd) : a = this._text.slice(this.selectionStart, this.selectionStart - c)), n = h.slice(s.selectionEnd - c, s.selectionEnd), a && a.length && (this.selectionStart !== this.selectionEnd ? this.removeStyleFromTo(this.selectionStart, this.selectionEnd) : i ? this.removeStyleFromTo(this.selectionEnd - a.length, this.selectionEnd) : this.removeStyleFromTo(this.selectionEnd, this.selectionEnd + a.length)), n.length && (e && n.join("") === u.copiedText && !u.disableStyleCopyPaste ? this.insertNewStyleBlock(n, this.selectionStart, u.copiedTextStyle) : this.insertNewStyleBlock(n, this.selectionStart)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
        }
      },
      /**
       * Composition start
       */
      onCompositionStart: function() {
        this.inCompositionMode = !0;
      },
      /**
       * Composition end
       */
      onCompositionEnd: function() {
        this.inCompositionMode = !1;
      },
      // /**
      //  * Composition update
      //  */
      onCompositionUpdate: function(f) {
        this.compositionStart = f.target.selectionStart, this.compositionEnd = f.target.selectionEnd, this.updateTextareaPosition();
      },
      /**
       * Copies selected text
       * @param {Event} e Event object
       */
      copy: function() {
        this.selectionStart !== this.selectionEnd && (u.copiedText = this.getSelectedText(), u.disableStyleCopyPaste ? u.copiedTextStyle = null : u.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
      },
      /**
       * Pastes text
       * @param {Event} e Event object
       */
      paste: function() {
        this.fromPaste = !0;
      },
      /**
       * @private
       * @param {Event} e Event object
       * @return {Object} Clipboard data object
       */
      _getClipboardData: function(f) {
        return f && f.clipboardData || u.window.clipboardData;
      },
      /**
       * Finds the width in pixels before the cursor on the same line
       * @private
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @return {Number} widthBeforeCursor width before cursor
       */
      _getWidthBeforeCursor: function(f, e) {
        var h = this._getLineLeftOffset(f), r;
        return e > 0 && (r = this.__charBounds[f][e - 1], h += r.left + r.width), h;
      },
      /**
       * Gets start offset of a selection
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      getDownCursorOffset: function(f, e) {
        var h = this._getSelectionForOffset(f, e), r = this.get2DCursorLocation(h), t = r.lineIndex;
        if (t === this._textLines.length - 1 || f.metaKey || f.keyCode === 34)
          return this._text.length - h;
        var a = r.charIndex, n = this._getWidthBeforeCursor(t, a), c = this._getIndexOnLine(t + 1, n), s = this._textLines[t].slice(a);
        return s.length + c + 1 + this.missingNewlineOffset(t);
      },
      /**
       * private
       * Helps finding if the offset should be counted from Start or End
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      _getSelectionForOffset: function(f, e) {
        return f.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart;
      },
      /**
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      getUpCursorOffset: function(f, e) {
        var h = this._getSelectionForOffset(f, e), r = this.get2DCursorLocation(h), t = r.lineIndex;
        if (t === 0 || f.metaKey || f.keyCode === 33)
          return -h;
        var a = r.charIndex, n = this._getWidthBeforeCursor(t, a), c = this._getIndexOnLine(t - 1, n), s = this._textLines[t].slice(0, a), i = this.missingNewlineOffset(t - 1);
        return -this._textLines[t - 1].length + c - s.length + (1 - i);
      },
      /**
       * for a given width it founds the matching character.
       * @private
       */
      _getIndexOnLine: function(f, e) {
        for (var h = this._textLines[f], r = this._getLineLeftOffset(f), t = r, a = 0, n, c, s = 0, i = h.length; s < i; s++)
          if (n = this.__charBounds[f][s].width, t += n, t > e) {
            c = !0;
            var o = t - n, l = t, d = Math.abs(o - e), g = Math.abs(l - e);
            a = g < d ? s : s - 1;
            break;
          }
        return c || (a = h.length - 1), a;
      },
      /**
       * Moves cursor down
       * @param {Event} e Event object
       */
      moveCursorDown: function(f) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", f);
      },
      /**
       * Moves cursor up
       * @param {Event} e Event object
       */
      moveCursorUp: function(f) {
        this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", f);
      },
      /**
       * Moves cursor up or down, fires the events
       * @param {String} direction 'Up' or 'Down'
       * @param {Event} e Event object
       */
      _moveCursorUpOrDown: function(f, e) {
        var h = "get" + f + "CursorOffset", r = this[h](e, this._selectionDirection === "right");
        e.shiftKey ? this.moveCursorWithShift(r) : this.moveCursorWithoutShift(r), r !== 0 && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Moves cursor with shift
       * @param {Number} offset
       */
      moveCursorWithShift: function(f) {
        var e = this._selectionDirection === "left" ? this.selectionStart + f : this.selectionEnd + f;
        return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), f !== 0;
      },
      /**
       * Moves cursor up without shift
       * @param {Number} offset
       */
      moveCursorWithoutShift: function(f) {
        return f < 0 ? (this.selectionStart += f, this.selectionEnd = this.selectionStart) : (this.selectionEnd += f, this.selectionStart = this.selectionEnd), f !== 0;
      },
      /**
       * Moves cursor left
       * @param {Event} e Event object
       */
      moveCursorLeft: function(f) {
        this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", f);
      },
      /**
       * @private
       * @return {Boolean} true if a change happened
       */
      _move: function(f, e, h) {
        var r;
        if (f.altKey)
          r = this["findWordBoundary" + h](this[e]);
        else if (f.metaKey || f.keyCode === 35 || f.keyCode === 36)
          r = this["findLineBoundary" + h](this[e]);
        else
          return this[e] += h === "Left" ? -1 : 1, !0;
        if (typeof r !== void 0 && this[e] !== r)
          return this[e] = r, !0;
      },
      /**
       * @private
       */
      _moveLeft: function(f, e) {
        return this._move(f, e, "Left");
      },
      /**
       * @private
       */
      _moveRight: function(f, e) {
        return this._move(f, e, "Right");
      },
      /**
       * Moves cursor left without keeping selection
       * @param {Event} e
       */
      moveCursorLeftWithoutShift: function(f) {
        var e = !0;
        return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (e = this._moveLeft(f, "selectionStart")), this.selectionEnd = this.selectionStart, e;
      },
      /**
       * Moves cursor left while keeping selection
       * @param {Event} e
       */
      moveCursorLeftWithShift: function(f) {
        if (this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd)
          return this._moveLeft(f, "selectionEnd");
        if (this.selectionStart !== 0)
          return this._selectionDirection = "left", this._moveLeft(f, "selectionStart");
      },
      /**
       * Moves cursor right
       * @param {Event} e Event object
       */
      moveCursorRight: function(f) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", f);
      },
      /**
       * Moves cursor right or Left, fires event
       * @param {String} direction 'Left', 'Right'
       * @param {Event} e Event object
       */
      _moveCursorLeftOrRight: function(f, e) {
        var h = "moveCursor" + f + "With";
        this._currentCursorOpacity = 1, e.shiftKey ? h += "Shift" : h += "outShift", this[h](e) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Moves cursor right while keeping selection
       * @param {Event} e
       */
      moveCursorRightWithShift: function(f) {
        if (this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd)
          return this._moveRight(f, "selectionStart");
        if (this.selectionEnd !== this._text.length)
          return this._selectionDirection = "right", this._moveRight(f, "selectionEnd");
      },
      /**
       * Moves cursor right without keeping selection
       * @param {Event} e Event object
       */
      moveCursorRightWithoutShift: function(f) {
        var e = !0;
        return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (e = this._moveRight(f, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e;
      },
      /**
       * Removes characters from start/end
       * start/end ar per grapheme position in _text array.
       *
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
      removeChars: function(f, e) {
        typeof e > "u" && (e = f + 1), this.removeStyleFromTo(f, e), this._text.splice(f, e - f), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
      },
      /**
       * insert characters at start position, before start position.
       * start  equal 1 it means the text get inserted between actual grapheme 0 and 1
       * if style array is provided, it must be as the same length of text in graphemes
       * if end is provided and is bigger than start, old text is replaced.
       * start/end ar per grapheme position in _text array.
       *
       * @param {String} text text to insert
       * @param {Array} style array of style objects
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
      insertChars: function(f, e, h, r) {
        typeof r > "u" && (r = h), r > h && this.removeStyleFromTo(h, r);
        var t = u.util.string.graphemeSplit(f);
        this.insertNewStyleBlock(t, h, e), this._text = [].concat(this._text.slice(0, h), t, this._text.slice(r)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
      }
    }
  ), function() {
    var f = u.util.toFixed, e = /  +/g;
    u.util.object.extend(
      u.Text.prototype,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Returns SVG representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        _toSVG: function() {
          var h = this._getSVGLeftTopOffsets(), r = this._getSVGTextAndBg(h.textTop, h.textLeft);
          return this._wrapSVGTextAndBg(r);
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(h) {
          return this._createBaseSVGMarkup(
            this._toSVG(),
            { reviver: h, noStyle: !0, withShadow: !0 }
          );
        },
        /**
         * @private
         */
        _getSVGLeftTopOffsets: function() {
          return {
            textLeft: -this.width / 2,
            textTop: -this.height / 2,
            lineTop: this.getHeightOfLine(0)
          };
        },
        /**
         * @private
         */
        _wrapSVGTextAndBg: function(h) {
          var r = !0, t = this.getSvgTextDecoration(this);
          return [
            h.textBgRects.join(""),
            '		<text xml:space="preserve" ',
            this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "",
            this.fontSize ? 'font-size="' + this.fontSize + '" ' : "",
            this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "",
            this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "",
            t ? 'text-decoration="' + t + '" ' : "",
            'style="',
            this.getSvgStyles(r),
            '"',
            this.addPaintOrder(),
            " >",
            h.textSpans.join(""),
            `</text>
`
          ];
        },
        /**
         * @private
         * @param {Number} textTopOffset Text top offset
         * @param {Number} textLeftOffset Text left offset
         * @return {Object}
         */
        _getSVGTextAndBg: function(h, r) {
          var t = [], a = [], n = h, c;
          this._setSVGBg(a);
          for (var s = 0, i = this._textLines.length; s < i; s++)
            c = this._getLineLeftOffset(s), (this.textBackgroundColor || this.styleHas("textBackgroundColor", s)) && this._setSVGTextLineBg(a, s, r + c, n), this._setSVGTextLineText(t, s, r + c, n), n += this.getHeightOfLine(s);
          return {
            textSpans: t,
            textBgRects: a
          };
        },
        /**
         * @private
         */
        _createTextCharSpan: function(h, r, t, a) {
          var n = h !== h.trim() || h.match(e), c = this.getSvgSpanStyles(r, n), s = c ? 'style="' + c + '"' : "", i = r.deltaY, o = "", l = u.Object.NUM_FRACTION_DIGITS;
          return i && (o = ' dy="' + f(i, l) + '" '), [
            '<tspan x="',
            f(t, l),
            '" y="',
            f(a, l),
            '" ',
            o,
            s,
            ">",
            u.util.string.escapeXml(h),
            "</tspan>"
          ].join("");
        },
        _setSVGTextLineText: function(h, r, t, a) {
          var n = this.getHeightOfLine(r), c = this.textAlign.indexOf("justify") !== -1, s, i, o = "", l, d, g = 0, v = this._textLines[r], _;
          a += n * (1 - this._fontSizeFraction) / this.lineHeight;
          for (var p = 0, C = v.length - 1; p <= C; p++)
            _ = p === C || this.charSpacing, o += v[p], l = this.__charBounds[r][p], g === 0 ? (t += l.kernedWidth - l.width, g += l.width) : g += l.kernedWidth, c && !_ && this._reSpaceAndTab.test(v[p]) && (_ = !0), _ || (s = s || this.getCompleteStyleDeclaration(r, p), i = this.getCompleteStyleDeclaration(r, p + 1), _ = this._hasStyleChangedForSvg(s, i)), _ && (d = this._getStyleDeclaration(r, p) || {}, h.push(this._createTextCharSpan(o, d, t, a)), o = "", s = i, t += g, g = 0);
        },
        _pushTextBgRect: function(h, r, t, a, n, c) {
          var s = u.Object.NUM_FRACTION_DIGITS;
          h.push(
            "		<rect ",
            this._getFillAttributes(r),
            ' x="',
            f(t, s),
            '" y="',
            f(a, s),
            '" width="',
            f(n, s),
            '" height="',
            f(c, s),
            `"></rect>
`
          );
        },
        _setSVGTextLineBg: function(h, r, t, a) {
          for (var n = this._textLines[r], c = this.getHeightOfLine(r) / this.lineHeight, s = 0, i = 0, o, l, d = this.getValueOfPropertyAt(r, 0, "textBackgroundColor"), g = 0, v = n.length; g < v; g++)
            o = this.__charBounds[r][g], l = this.getValueOfPropertyAt(r, g, "textBackgroundColor"), l !== d ? (d && this._pushTextBgRect(
              h,
              d,
              t + i,
              a,
              s,
              c
            ), i = o.left, s = o.width, d = l) : s += o.kernedWidth;
          l && this._pushTextBgRect(
            h,
            l,
            t + i,
            a,
            s,
            c
          );
        },
        /**
         * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
         * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
         *
         * @private
         * @param {*} value
         * @return {String}
         */
        _getFillAttributes: function(h) {
          var r = h && typeof h == "string" ? new u.Color(h) : "";
          return !r || !r.getSource() || r.getAlpha() === 1 ? 'fill="' + h + '"' : 'opacity="' + r.getAlpha() + '" fill="' + r.setAlpha(1).toRgb() + '"';
        },
        /**
         * @private
         */
        _getSVGLineTopOffset: function(h) {
          for (var r = 0, t = 0, a = 0; a < h; a++)
            r += this.getHeightOfLine(a);
          return t = this.getHeightOfLine(a), {
            lineTop: r,
            offset: (this._fontSizeMult - this._fontSizeFraction) * t / (this.lineHeight * this._fontSizeMult)
          };
        },
        /**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
        getSvgStyles: function(h) {
          var r = u.Object.prototype.getSvgStyles.call(this, h);
          return r + " white-space: pre;";
        }
      }
    );
  }(), function(f) {
    var e = f.fabric || (f.fabric = {});
    e.Textbox = e.util.createClass(e.IText, e.Observable, {
      /**
       * Type of an object
       * @type String
       * @default
       */
      type: "textbox",
      /**
       * Minimum width of textbox, in pixels.
       * @type Number
       * @default
       */
      minWidth: 20,
      /**
       * Minimum calculated width of a textbox, in pixels.
       * fixed to 2 so that an empty textbox cannot go to 0
       * and is still selectable without text.
       * @type Number
       * @default
       */
      dynamicMinWidth: 2,
      /**
       * Cached array of text wrapping.
       * @type Array
       */
      __cachedLines: null,
      /**
       * Override standard Object class values
       */
      lockScalingFlip: !0,
      /**
       * Override standard Object class values
       * Textbox needs this on false
       */
      noScaleCache: !1,
      /**
       * Properties which when set cause object to change dimensions
       * @type Object
       * @private
       */
      _dimensionAffectingProps: e.Text.prototype._dimensionAffectingProps.concat("width"),
      /**
       * Use this regular expression to split strings in breakable lines
       * @private
       */
      _wordJoiners: /[ \t\r]/,
      /**
       * Use this boolean property in order to split strings that have no white space concept.
       * this is a cheap way to help with chinese/japaense
       * @type Boolean
       * @since 2.6.0
       */
      splitByGrapheme: !1,
      /**
       * Unlike superclass's version of this function, Textbox does not update
       * its width.
       * @private
       * @override
       */
      initDimensions: function() {
        this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
      },
      /**
       * Generate an object that translates the style object so that it is
       * broken up by visual lines (new lines and automatic wrapping).
       * The original text styles object is broken up by actual lines (new lines only),
       * which is only sufficient for Text / IText
       * @private
       */
      _generateStyleMap: function(h) {
        for (var r = 0, t = 0, a = 0, n = {}, c = 0; c < h.graphemeLines.length; c++)
          h.graphemeText[a] === `
` && c > 0 ? (t = 0, a++, r++) : !this.splitByGrapheme && this._reSpaceAndTab.test(h.graphemeText[a]) && c > 0 && (t++, a++), n[c] = { line: r, offset: t }, a += h.graphemeLines[c].length, t += h.graphemeLines[c].length;
        return n;
      },
      /**
       * Returns true if object has a style property or has it on a specified line
       * @param {Number} lineIndex
       * @return {Boolean}
       */
      styleHas: function(h, r) {
        if (this._styleMap && !this.isWrapping) {
          var t = this._styleMap[r];
          t && (r = t.line);
        }
        return e.Text.prototype.styleHas.call(this, h, r);
      },
      /**
       * Returns true if object has no styling or no styling in a line
       * @param {Number} lineIndex , lineIndex is on wrapped lines.
       * @return {Boolean}
       */
      isEmptyStyles: function(h) {
        if (!this.styles)
          return !0;
        var r = 0, t = h + 1, a, n, c = !1, s = this._styleMap[h], i = this._styleMap[h + 1];
        s && (h = s.line, r = s.offset), i && (t = i.line, c = t === h, a = i.offset), n = typeof h > "u" ? this.styles : { line: this.styles[h] };
        for (var o in n)
          for (var l in n[o])
            if (l >= r && (!c || l < a))
              for (var d in n[o][l])
                return !1;
        return !0;
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
      _getStyleDeclaration: function(h, r) {
        if (this._styleMap && !this.isWrapping) {
          var t = this._styleMap[h];
          if (!t)
            return null;
          h = t.line, r = t.offset + r;
        }
        return this.callSuper("_getStyleDeclaration", h, r);
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @param {Object} style
       * @private
       */
      _setStyleDeclaration: function(h, r, t) {
        var a = this._styleMap[h];
        h = a.line, r = a.offset + r, this.styles[h][r] = t;
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
      _deleteStyleDeclaration: function(h, r) {
        var t = this._styleMap[h];
        h = t.line, r = t.offset + r, delete this.styles[h][r];
      },
      /**
       * probably broken need a fix
       * Returns the real style line that correspond to the wrapped lineIndex line
       * Used just to verify if the line does exist or not.
       * @param {Number} lineIndex
       * @returns {Boolean} if the line exists or not
       * @private
       */
      _getLineStyle: function(h) {
        var r = this._styleMap[h];
        return !!this.styles[r.line];
      },
      /**
       * Set the line style to an empty object so that is initialized
       * @param {Number} lineIndex
       * @param {Object} style
       * @private
       */
      _setLineStyle: function(h) {
        var r = this._styleMap[h];
        this.styles[r.line] = {};
      },
      /**
       * Wraps text using the 'width' property of Textbox. First this function
       * splits text on newlines, so we preserve newlines entered by the user.
       * Then it wraps each line using the width of the Textbox by calling
       * _wrapLine().
       * @param {Array} lines The string array of text that is split into lines
       * @param {Number} desiredWidth width you want to wrap to
       * @returns {Array} Array of lines
       */
      _wrapText: function(h, r) {
        var t = [], a;
        for (this.isWrapping = !0, a = 0; a < h.length; a++)
          t = t.concat(this._wrapLine(h[a], a, r));
        return this.isWrapping = !1, t;
      },
      /**
       * Helper function to measure a string of text, given its lineIndex and charIndex offset
       * it gets called when charBounds are not available yet.
       * @param {CanvasRenderingContext2D} ctx
       * @param {String} text
       * @param {number} lineIndex
       * @param {number} charOffset
       * @returns {number}
       * @private
       */
      _measureWord: function(h, r, t) {
        var a = 0, n, c = !0;
        t = t || 0;
        for (var s = 0, i = h.length; s < i; s++) {
          var o = this._getGraphemeBox(h[s], r, s + t, n, c);
          a += o.kernedWidth, n = h[s];
        }
        return a;
      },
      /**
       * Wraps a line of text using the width of the Textbox and a context.
       * @param {Array} line The grapheme array that represent the line
       * @param {Number} lineIndex
       * @param {Number} desiredWidth width you want to wrap the line to
       * @param {Number} reservedSpace space to remove from wrapping for custom functionalities
       * @returns {Array} Array of line(s) into which the given text is wrapped
       * to.
       */
      _wrapLine: function(h, r, t, O) {
        var n = 0, c = this.splitByGrapheme, s = [], i = [], o = c ? e.util.string.graphemeSplit(h) : h.split(this._wordJoiners), l = "", d = 0, g = c ? "" : " ", v = 0, _ = 0, p = 0, C = !0, S = c ? 0 : this._getWidthOfCharSpacing(), O = O || 0;
        o.length === 0 && o.push([]), t -= O;
        for (var k = 0; k < o.length; k++)
          l = c ? o[k] : e.util.string.graphemeSplit(o[k]), v = this._measureWord(l, r, d), d += l.length, n += _ + v - S, n >= t && !C ? (s.push(i), i = [], n = v, C = !0) : n += S, !C && !c && i.push(g), i = i.concat(l), _ = this._measureWord([g], r, d), d++, C = !1, v > p && (p = v);
        return k && s.push(i), p + O > this.dynamicMinWidth && (this.dynamicMinWidth = p - S + O), s;
      },
      /**
       * Detect if the text line is ended with an hard break
       * text and itext do not have wrapping, return false
       * @param {Number} lineIndex text to split
       * @return {Boolean}
       */
      isEndOfWrapping: function(h) {
        return !this._styleMap[h + 1] || this._styleMap[h + 1].line !== this._styleMap[h].line;
      },
      /**
       * Detect if a line has a linebreak and so we need to account for it when moving
       * and counting style.
       * @return Number
       */
      missingNewlineOffset: function(h) {
        return this.splitByGrapheme ? this.isEndOfWrapping(h) ? 1 : 0 : 1;
      },
      /**
      * Gets lines of text to render in the Textbox. This function calculates
      * text wrapping on the fly every time it is called.
      * @param {String} text text to split
      * @returns {Array} Array of lines in the Textbox.
      * @override
      */
      _splitTextIntoLines: function(h) {
        for (var r = e.Text.prototype._splitTextIntoLines.call(this, h), t = this._wrapText(r.lines, this.width), a = new Array(t.length), n = 0; n < t.length; n++)
          a[n] = t[n].join("");
        return r.lines = a, r.graphemeLines = t, r;
      },
      getMinWidth: function() {
        return Math.max(this.minWidth, this.dynamicMinWidth);
      },
      _removeExtraneousStyles: function() {
        var h = {};
        for (var r in this._styleMap)
          this._textLines[r] && (h[this._styleMap[r].line] = 1);
        for (var r in this.styles)
          h[r] || delete this.styles[r];
      },
      /**
       * Returns object representation of an instance
       * @method toObject
       * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
       * @return {Object} object representation of an instance
       */
      toObject: function(h) {
        return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(h));
      }
    }), e.Textbox.fromObject = function(h, r) {
      return e.Object._fromObject("Textbox", h, r, "text");
    };
  }(m);
})(pe);
var ne = { exports: {} }, se = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, ae = { exports: {} }, be = function(u) {
  return !u || typeof u == "string" ? !1 : u instanceof Array || Array.isArray(u) || u.length >= 0 && (u.splice instanceof Function || Object.getOwnPropertyDescriptor(u, u.length - 1) && u.constructor.name !== "String");
}, Ce = be, xe = Array.prototype.concat, Se = Array.prototype.slice, ie = ae.exports = function(u) {
  for (var y = [], b = 0, x = u.length; b < x; b++) {
    var w = u[b];
    Ce(w) ? y = xe.call(y, Se.call(w)) : y.push(w);
  }
  return y;
};
ie.wrap = function(m) {
  return function() {
    return m(ie(arguments));
  };
};
var we = ae.exports, zt = se, Gt = we, oe = Object.hasOwnProperty, he = /* @__PURE__ */ Object.create(null);
for (var Zt in zt)
  oe.call(zt, Zt) && (he[zt[Zt]] = Zt);
var mt = ne.exports = {
  to: {},
  get: {}
};
mt.get = function(m) {
  var u = m.substring(0, 3).toLowerCase(), y, b;
  switch (u) {
    case "hsl":
      y = mt.get.hsl(m), b = "hsl";
      break;
    case "hwb":
      y = mt.get.hwb(m), b = "hwb";
      break;
    default:
      y = mt.get.rgb(m), b = "rgb";
      break;
  }
  return y ? { model: b, value: y } : null;
};
mt.get.rgb = function(m) {
  if (!m)
    return null;
  var u = /^#([a-f0-9]{3,4})$/i, y = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, b = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, x = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, w = /^(\w+)$/, D = [0, 0, 0, 1], f, e, h;
  if (f = m.match(y)) {
    for (h = f[2], f = f[1], e = 0; e < 3; e++) {
      var r = e * 2;
      D[e] = parseInt(f.slice(r, r + 2), 16);
    }
    h && (D[3] = parseInt(h, 16) / 255);
  } else if (f = m.match(u)) {
    for (f = f[1], h = f[3], e = 0; e < 3; e++)
      D[e] = parseInt(f[e] + f[e], 16);
    h && (D[3] = parseInt(h + h, 16) / 255);
  } else if (f = m.match(b)) {
    for (e = 0; e < 3; e++)
      D[e] = parseInt(f[e + 1], 0);
    f[4] && (f[5] ? D[3] = parseFloat(f[4]) * 0.01 : D[3] = parseFloat(f[4]));
  } else if (f = m.match(x)) {
    for (e = 0; e < 3; e++)
      D[e] = Math.round(parseFloat(f[e + 1]) * 2.55);
    f[4] && (f[5] ? D[3] = parseFloat(f[4]) * 0.01 : D[3] = parseFloat(f[4]));
  } else
    return (f = m.match(w)) ? f[1] === "transparent" ? [0, 0, 0, 0] : oe.call(zt, f[1]) ? (D = zt[f[1]], D[3] = 1, D) : null : null;
  for (e = 0; e < 3; e++)
    D[e] = At(D[e], 0, 255);
  return D[3] = At(D[3], 0, 1), D;
};
mt.get.hsl = function(m) {
  if (!m)
    return null;
  var u = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, y = m.match(u);
  if (y) {
    var b = parseFloat(y[4]), x = (parseFloat(y[1]) % 360 + 360) % 360, w = At(parseFloat(y[2]), 0, 100), D = At(parseFloat(y[3]), 0, 100), f = At(isNaN(b) ? 1 : b, 0, 1);
    return [x, w, D, f];
  }
  return null;
};
mt.get.hwb = function(m) {
  if (!m)
    return null;
  var u = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, y = m.match(u);
  if (y) {
    var b = parseFloat(y[4]), x = (parseFloat(y[1]) % 360 + 360) % 360, w = At(parseFloat(y[2]), 0, 100), D = At(parseFloat(y[3]), 0, 100), f = At(isNaN(b) ? 1 : b, 0, 1);
    return [x, w, D, f];
  }
  return null;
};
mt.to.hex = function() {
  var m = Gt(arguments);
  return "#" + Nt(m[0]) + Nt(m[1]) + Nt(m[2]) + (m[3] < 1 ? Nt(Math.round(m[3] * 255)) : "");
};
mt.to.rgb = function() {
  var m = Gt(arguments);
  return m.length < 4 || m[3] === 1 ? "rgb(" + Math.round(m[0]) + ", " + Math.round(m[1]) + ", " + Math.round(m[2]) + ")" : "rgba(" + Math.round(m[0]) + ", " + Math.round(m[1]) + ", " + Math.round(m[2]) + ", " + m[3] + ")";
};
mt.to.rgb.percent = function() {
  var m = Gt(arguments), u = Math.round(m[0] / 255 * 100), y = Math.round(m[1] / 255 * 100), b = Math.round(m[2] / 255 * 100);
  return m.length < 4 || m[3] === 1 ? "rgb(" + u + "%, " + y + "%, " + b + "%)" : "rgba(" + u + "%, " + y + "%, " + b + "%, " + m[3] + ")";
};
mt.to.hsl = function() {
  var m = Gt(arguments);
  return m.length < 4 || m[3] === 1 ? "hsl(" + m[0] + ", " + m[1] + "%, " + m[2] + "%)" : "hsla(" + m[0] + ", " + m[1] + "%, " + m[2] + "%, " + m[3] + ")";
};
mt.to.hwb = function() {
  var m = Gt(arguments), u = "";
  return m.length >= 4 && m[3] !== 1 && (u = ", " + m[3]), "hwb(" + m[0] + ", " + m[1] + "%, " + m[2] + "%" + u + ")";
};
mt.to.keyword = function(m) {
  return he[m.slice(0, 3)];
};
function At(m, u, y) {
  return Math.min(Math.max(u, m), y);
}
function Nt(m) {
  var u = Math.round(m).toString(16).toUpperCase();
  return u.length < 2 ? "0" + u : u;
}
var Te = ne.exports;
const Ut = se, le = {};
for (const m of Object.keys(Ut))
  le[Ut[m]] = m;
const q = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var ce = q;
for (const m of Object.keys(q)) {
  if (!("channels" in q[m]))
    throw new Error("missing channels property: " + m);
  if (!("labels" in q[m]))
    throw new Error("missing channel labels property: " + m);
  if (q[m].labels.length !== q[m].channels)
    throw new Error("channel and label counts mismatch: " + m);
  const { channels: u, labels: y } = q[m];
  delete q[m].channels, delete q[m].labels, Object.defineProperty(q[m], "channels", { value: u }), Object.defineProperty(q[m], "labels", { value: y });
}
q.rgb.hsl = function(m) {
  const u = m[0] / 255, y = m[1] / 255, b = m[2] / 255, x = Math.min(u, y, b), w = Math.max(u, y, b), D = w - x;
  let f, e;
  w === x ? f = 0 : u === w ? f = (y - b) / D : y === w ? f = 2 + (b - u) / D : b === w && (f = 4 + (u - y) / D), f = Math.min(f * 60, 360), f < 0 && (f += 360);
  const h = (x + w) / 2;
  return w === x ? e = 0 : h <= 0.5 ? e = D / (w + x) : e = D / (2 - w - x), [f, e * 100, h * 100];
};
q.rgb.hsv = function(m) {
  let u, y, b, x, w;
  const D = m[0] / 255, f = m[1] / 255, e = m[2] / 255, h = Math.max(D, f, e), r = h - Math.min(D, f, e), t = function(a) {
    return (h - a) / 6 / r + 1 / 2;
  };
  return r === 0 ? (x = 0, w = 0) : (w = r / h, u = t(D), y = t(f), b = t(e), D === h ? x = b - y : f === h ? x = 1 / 3 + u - b : e === h && (x = 2 / 3 + y - u), x < 0 ? x += 1 : x > 1 && (x -= 1)), [
    x * 360,
    w * 100,
    h * 100
  ];
};
q.rgb.hwb = function(m) {
  const u = m[0], y = m[1];
  let b = m[2];
  const x = q.rgb.hsl(m)[0], w = 1 / 255 * Math.min(u, Math.min(y, b));
  return b = 1 - 1 / 255 * Math.max(u, Math.max(y, b)), [x, w * 100, b * 100];
};
q.rgb.cmyk = function(m) {
  const u = m[0] / 255, y = m[1] / 255, b = m[2] / 255, x = Math.min(1 - u, 1 - y, 1 - b), w = (1 - u - x) / (1 - x) || 0, D = (1 - y - x) / (1 - x) || 0, f = (1 - b - x) / (1 - x) || 0;
  return [w * 100, D * 100, f * 100, x * 100];
};
function Oe(m, u) {
  return (m[0] - u[0]) ** 2 + (m[1] - u[1]) ** 2 + (m[2] - u[2]) ** 2;
}
q.rgb.keyword = function(m) {
  const u = le[m];
  if (u)
    return u;
  let y = 1 / 0, b;
  for (const x of Object.keys(Ut)) {
    const w = Ut[x], D = Oe(m, w);
    D < y && (y = D, b = x);
  }
  return b;
};
q.keyword.rgb = function(m) {
  return Ut[m];
};
q.rgb.xyz = function(m) {
  let u = m[0] / 255, y = m[1] / 255, b = m[2] / 255;
  u = u > 0.04045 ? ((u + 0.055) / 1.055) ** 2.4 : u / 12.92, y = y > 0.04045 ? ((y + 0.055) / 1.055) ** 2.4 : y / 12.92, b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
  const x = u * 0.4124 + y * 0.3576 + b * 0.1805, w = u * 0.2126 + y * 0.7152 + b * 0.0722, D = u * 0.0193 + y * 0.1192 + b * 0.9505;
  return [x * 100, w * 100, D * 100];
};
q.rgb.lab = function(m) {
  const u = q.rgb.xyz(m);
  let y = u[0], b = u[1], x = u[2];
  y /= 95.047, b /= 100, x /= 108.883, y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116, b = b > 8856e-6 ? b ** (1 / 3) : 7.787 * b + 16 / 116, x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  const w = 116 * b - 16, D = 500 * (y - b), f = 200 * (b - x);
  return [w, D, f];
};
q.hsl.rgb = function(m) {
  const u = m[0] / 360, y = m[1] / 100, b = m[2] / 100;
  let x, w, D;
  if (y === 0)
    return D = b * 255, [D, D, D];
  b < 0.5 ? x = b * (1 + y) : x = b + y - b * y;
  const f = 2 * b - x, e = [0, 0, 0];
  for (let h = 0; h < 3; h++)
    w = u + 1 / 3 * -(h - 1), w < 0 && w++, w > 1 && w--, 6 * w < 1 ? D = f + (x - f) * 6 * w : 2 * w < 1 ? D = x : 3 * w < 2 ? D = f + (x - f) * (2 / 3 - w) * 6 : D = f, e[h] = D * 255;
  return e;
};
q.hsl.hsv = function(m) {
  const u = m[0];
  let y = m[1] / 100, b = m[2] / 100, x = y;
  const w = Math.max(b, 0.01);
  b *= 2, y *= b <= 1 ? b : 2 - b, x *= w <= 1 ? w : 2 - w;
  const D = (b + y) / 2, f = b === 0 ? 2 * x / (w + x) : 2 * y / (b + y);
  return [u, f * 100, D * 100];
};
q.hsv.rgb = function(m) {
  const u = m[0] / 60, y = m[1] / 100;
  let b = m[2] / 100;
  const x = Math.floor(u) % 6, w = u - Math.floor(u), D = 255 * b * (1 - y), f = 255 * b * (1 - y * w), e = 255 * b * (1 - y * (1 - w));
  switch (b *= 255, x) {
    case 0:
      return [b, e, D];
    case 1:
      return [f, b, D];
    case 2:
      return [D, b, e];
    case 3:
      return [D, f, b];
    case 4:
      return [e, D, b];
    case 5:
      return [b, D, f];
  }
};
q.hsv.hsl = function(m) {
  const u = m[0], y = m[1] / 100, b = m[2] / 100, x = Math.max(b, 0.01);
  let w, D;
  D = (2 - y) * b;
  const f = (2 - y) * x;
  return w = y * x, w /= f <= 1 ? f : 2 - f, w = w || 0, D /= 2, [u, w * 100, D * 100];
};
q.hwb.rgb = function(m) {
  const u = m[0] / 360;
  let y = m[1] / 100, b = m[2] / 100;
  const x = y + b;
  let w;
  x > 1 && (y /= x, b /= x);
  const D = Math.floor(6 * u), f = 1 - b;
  w = 6 * u - D, D & 1 && (w = 1 - w);
  const e = y + w * (f - y);
  let h, r, t;
  switch (D) {
    default:
    case 6:
    case 0:
      h = f, r = e, t = y;
      break;
    case 1:
      h = e, r = f, t = y;
      break;
    case 2:
      h = y, r = f, t = e;
      break;
    case 3:
      h = y, r = e, t = f;
      break;
    case 4:
      h = e, r = y, t = f;
      break;
    case 5:
      h = f, r = y, t = e;
      break;
  }
  return [h * 255, r * 255, t * 255];
};
q.cmyk.rgb = function(m) {
  const u = m[0] / 100, y = m[1] / 100, b = m[2] / 100, x = m[3] / 100, w = 1 - Math.min(1, u * (1 - x) + x), D = 1 - Math.min(1, y * (1 - x) + x), f = 1 - Math.min(1, b * (1 - x) + x);
  return [w * 255, D * 255, f * 255];
};
q.xyz.rgb = function(m) {
  const u = m[0] / 100, y = m[1] / 100, b = m[2] / 100;
  let x, w, D;
  return x = u * 3.2406 + y * -1.5372 + b * -0.4986, w = u * -0.9689 + y * 1.8758 + b * 0.0415, D = u * 0.0557 + y * -0.204 + b * 1.057, x = x > 31308e-7 ? 1.055 * x ** (1 / 2.4) - 0.055 : x * 12.92, w = w > 31308e-7 ? 1.055 * w ** (1 / 2.4) - 0.055 : w * 12.92, D = D > 31308e-7 ? 1.055 * D ** (1 / 2.4) - 0.055 : D * 12.92, x = Math.min(Math.max(0, x), 1), w = Math.min(Math.max(0, w), 1), D = Math.min(Math.max(0, D), 1), [x * 255, w * 255, D * 255];
};
q.xyz.lab = function(m) {
  let u = m[0], y = m[1], b = m[2];
  u /= 95.047, y /= 100, b /= 108.883, u = u > 8856e-6 ? u ** (1 / 3) : 7.787 * u + 16 / 116, y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116, b = b > 8856e-6 ? b ** (1 / 3) : 7.787 * b + 16 / 116;
  const x = 116 * y - 16, w = 500 * (u - y), D = 200 * (y - b);
  return [x, w, D];
};
q.lab.xyz = function(m) {
  const u = m[0], y = m[1], b = m[2];
  let x, w, D;
  w = (u + 16) / 116, x = y / 500 + w, D = w - b / 200;
  const f = w ** 3, e = x ** 3, h = D ** 3;
  return w = f > 8856e-6 ? f : (w - 16 / 116) / 7.787, x = e > 8856e-6 ? e : (x - 16 / 116) / 7.787, D = h > 8856e-6 ? h : (D - 16 / 116) / 7.787, x *= 95.047, w *= 100, D *= 108.883, [x, w, D];
};
q.lab.lch = function(m) {
  const u = m[0], y = m[1], b = m[2];
  let x;
  x = Math.atan2(b, y) * 360 / 2 / Math.PI, x < 0 && (x += 360);
  const D = Math.sqrt(y * y + b * b);
  return [u, D, x];
};
q.lch.lab = function(m) {
  const u = m[0], y = m[1], x = m[2] / 360 * 2 * Math.PI, w = y * Math.cos(x), D = y * Math.sin(x);
  return [u, w, D];
};
q.rgb.ansi16 = function(m, u = null) {
  const [y, b, x] = m;
  let w = u === null ? q.rgb.hsv(m)[2] : u;
  if (w = Math.round(w / 50), w === 0)
    return 30;
  let D = 30 + (Math.round(x / 255) << 2 | Math.round(b / 255) << 1 | Math.round(y / 255));
  return w === 2 && (D += 60), D;
};
q.hsv.ansi16 = function(m) {
  return q.rgb.ansi16(q.hsv.rgb(m), m[2]);
};
q.rgb.ansi256 = function(m) {
  const u = m[0], y = m[1], b = m[2];
  return u === y && y === b ? u < 8 ? 16 : u > 248 ? 231 : Math.round((u - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u / 255 * 5) + 6 * Math.round(y / 255 * 5) + Math.round(b / 255 * 5);
};
q.ansi16.rgb = function(m) {
  let u = m % 10;
  if (u === 0 || u === 7)
    return m > 50 && (u += 3.5), u = u / 10.5 * 255, [u, u, u];
  const y = (~~(m > 50) + 1) * 0.5, b = (u & 1) * y * 255, x = (u >> 1 & 1) * y * 255, w = (u >> 2 & 1) * y * 255;
  return [b, x, w];
};
q.ansi256.rgb = function(m) {
  if (m >= 232) {
    const w = (m - 232) * 10 + 8;
    return [w, w, w];
  }
  m -= 16;
  let u;
  const y = Math.floor(m / 36) / 5 * 255, b = Math.floor((u = m % 36) / 6) / 5 * 255, x = u % 6 / 5 * 255;
  return [y, b, x];
};
q.rgb.hex = function(m) {
  const y = (((Math.round(m[0]) & 255) << 16) + ((Math.round(m[1]) & 255) << 8) + (Math.round(m[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(y.length) + y;
};
q.hex.rgb = function(m) {
  const u = m.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!u)
    return [0, 0, 0];
  let y = u[0];
  u[0].length === 3 && (y = y.split("").map((f) => f + f).join(""));
  const b = parseInt(y, 16), x = b >> 16 & 255, w = b >> 8 & 255, D = b & 255;
  return [x, w, D];
};
q.rgb.hcg = function(m) {
  const u = m[0] / 255, y = m[1] / 255, b = m[2] / 255, x = Math.max(Math.max(u, y), b), w = Math.min(Math.min(u, y), b), D = x - w;
  let f, e;
  return D < 1 ? f = w / (1 - D) : f = 0, D <= 0 ? e = 0 : x === u ? e = (y - b) / D % 6 : x === y ? e = 2 + (b - u) / D : e = 4 + (u - y) / D, e /= 6, e %= 1, [e * 360, D * 100, f * 100];
};
q.hsl.hcg = function(m) {
  const u = m[1] / 100, y = m[2] / 100, b = y < 0.5 ? 2 * u * y : 2 * u * (1 - y);
  let x = 0;
  return b < 1 && (x = (y - 0.5 * b) / (1 - b)), [m[0], b * 100, x * 100];
};
q.hsv.hcg = function(m) {
  const u = m[1] / 100, y = m[2] / 100, b = u * y;
  let x = 0;
  return b < 1 && (x = (y - b) / (1 - b)), [m[0], b * 100, x * 100];
};
q.hcg.rgb = function(m) {
  const u = m[0] / 360, y = m[1] / 100, b = m[2] / 100;
  if (y === 0)
    return [b * 255, b * 255, b * 255];
  const x = [0, 0, 0], w = u % 1 * 6, D = w % 1, f = 1 - D;
  let e = 0;
  switch (Math.floor(w)) {
    case 0:
      x[0] = 1, x[1] = D, x[2] = 0;
      break;
    case 1:
      x[0] = f, x[1] = 1, x[2] = 0;
      break;
    case 2:
      x[0] = 0, x[1] = 1, x[2] = D;
      break;
    case 3:
      x[0] = 0, x[1] = f, x[2] = 1;
      break;
    case 4:
      x[0] = D, x[1] = 0, x[2] = 1;
      break;
    default:
      x[0] = 1, x[1] = 0, x[2] = f;
  }
  return e = (1 - y) * b, [
    (y * x[0] + e) * 255,
    (y * x[1] + e) * 255,
    (y * x[2] + e) * 255
  ];
};
q.hcg.hsv = function(m) {
  const u = m[1] / 100, y = m[2] / 100, b = u + y * (1 - u);
  let x = 0;
  return b > 0 && (x = u / b), [m[0], x * 100, b * 100];
};
q.hcg.hsl = function(m) {
  const u = m[1] / 100, b = m[2] / 100 * (1 - u) + 0.5 * u;
  let x = 0;
  return b > 0 && b < 0.5 ? x = u / (2 * b) : b >= 0.5 && b < 1 && (x = u / (2 * (1 - b))), [m[0], x * 100, b * 100];
};
q.hcg.hwb = function(m) {
  const u = m[1] / 100, y = m[2] / 100, b = u + y * (1 - u);
  return [m[0], (b - u) * 100, (1 - b) * 100];
};
q.hwb.hcg = function(m) {
  const u = m[1] / 100, b = 1 - m[2] / 100, x = b - u;
  let w = 0;
  return x < 1 && (w = (b - x) / (1 - x)), [m[0], x * 100, w * 100];
};
q.apple.rgb = function(m) {
  return [m[0] / 65535 * 255, m[1] / 65535 * 255, m[2] / 65535 * 255];
};
q.rgb.apple = function(m) {
  return [m[0] / 255 * 65535, m[1] / 255 * 65535, m[2] / 255 * 65535];
};
q.gray.rgb = function(m) {
  return [m[0] / 100 * 255, m[0] / 100 * 255, m[0] / 100 * 255];
};
q.gray.hsl = function(m) {
  return [0, 0, m[0]];
};
q.gray.hsv = q.gray.hsl;
q.gray.hwb = function(m) {
  return [0, 100, m[0]];
};
q.gray.cmyk = function(m) {
  return [0, 0, 0, m[0]];
};
q.gray.lab = function(m) {
  return [m[0], 0, 0];
};
q.gray.hex = function(m) {
  const u = Math.round(m[0] / 100 * 255) & 255, b = ((u << 16) + (u << 8) + u).toString(16).toUpperCase();
  return "000000".substring(b.length) + b;
};
q.rgb.gray = function(m) {
  return [(m[0] + m[1] + m[2]) / 3 / 255 * 100];
};
const Kt = ce;
function ke() {
  const m = {}, u = Object.keys(Kt);
  for (let y = u.length, b = 0; b < y; b++)
    m[u[b]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return m;
}
function De(m) {
  const u = ke(), y = [m];
  for (u[m].distance = 0; y.length; ) {
    const b = y.pop(), x = Object.keys(Kt[b]);
    for (let w = x.length, D = 0; D < w; D++) {
      const f = x[D], e = u[f];
      e.distance === -1 && (e.distance = u[b].distance + 1, e.parent = b, y.unshift(f));
    }
  }
  return u;
}
function Me(m, u) {
  return function(y) {
    return u(m(y));
  };
}
function Pe(m, u) {
  const y = [u[m].parent, m];
  let b = Kt[u[m].parent][m], x = u[m].parent;
  for (; u[x].parent; )
    y.unshift(u[x].parent), b = Me(Kt[u[x].parent][x], b), x = u[x].parent;
  return b.conversion = y, b;
}
var Ae = function(m) {
  const u = De(m), y = {}, b = Object.keys(u);
  for (let x = b.length, w = 0; w < x; w++) {
    const D = b[w];
    u[D].parent !== null && (y[D] = Pe(D, u));
  }
  return y;
};
const Qt = ce, Ee = Ae, It = {}, Fe = Object.keys(Qt);
function Le(m) {
  const u = function(...y) {
    const b = y[0];
    return b == null ? b : (b.length > 1 && (y = b), m(y));
  };
  return "conversion" in m && (u.conversion = m.conversion), u;
}
function je(m) {
  const u = function(...y) {
    const b = y[0];
    if (b == null)
      return b;
    b.length > 1 && (y = b);
    const x = m(y);
    if (typeof x == "object")
      for (let w = x.length, D = 0; D < w; D++)
        x[D] = Math.round(x[D]);
    return x;
  };
  return "conversion" in m && (u.conversion = m.conversion), u;
}
Fe.forEach((m) => {
  It[m] = {}, Object.defineProperty(It[m], "channels", { value: Qt[m].channels }), Object.defineProperty(It[m], "labels", { value: Qt[m].labels });
  const u = Ee(m);
  Object.keys(u).forEach((b) => {
    const x = u[b];
    It[m][b] = je(x), It[m][b].raw = Le(x);
  });
});
var Re = It;
const Bt = Te, gt = Re, ue = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], te = {};
for (const m of Object.keys(gt))
  te[[...gt[m].labels].sort().join("")] = m;
const Jt = {};
function ut(m, u) {
  if (!(this instanceof ut))
    return new ut(m, u);
  if (u && u in ue && (u = null), u && !(u in gt))
    throw new Error("Unknown model: " + u);
  let y, b;
  if (m == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (m instanceof ut)
    this.model = m.model, this.color = [...m.color], this.valpha = m.valpha;
  else if (typeof m == "string") {
    const x = Bt.get(m);
    if (x === null)
      throw new Error("Unable to parse color from string: " + m);
    this.model = x.model, b = gt[this.model].channels, this.color = x.value.slice(0, b), this.valpha = typeof x.value[b] == "number" ? x.value[b] : 1;
  } else if (m.length > 0) {
    this.model = u || "rgb", b = gt[this.model].channels;
    const x = Array.prototype.slice.call(m, 0, b);
    this.color = ee(x, b), this.valpha = typeof m[b] == "number" ? m[b] : 1;
  } else if (typeof m == "number")
    this.model = "rgb", this.color = [
      m >> 16 & 255,
      m >> 8 & 255,
      m & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const x = Object.keys(m);
    "alpha" in m && (x.splice(x.indexOf("alpha"), 1), this.valpha = typeof m.alpha == "number" ? m.alpha : 0);
    const w = x.sort().join("");
    if (!(w in te))
      throw new Error("Unable to parse color from object: " + JSON.stringify(m));
    this.model = te[w];
    const { labels: D } = gt[this.model], f = [];
    for (y = 0; y < D.length; y++)
      f.push(m[D[y]]);
    this.color = ee(f);
  }
  if (Jt[this.model])
    for (b = gt[this.model].channels, y = 0; y < b; y++) {
      const x = Jt[this.model][y];
      x && (this.color[y] = x(this.color[y]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
ut.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(m) {
    let u = this.model in Bt.to ? this : this.rgb();
    u = u.round(typeof m == "number" ? m : 1);
    const y = u.valpha === 1 ? u.color : [...u.color, this.valpha];
    return Bt.to[u.model](y);
  },
  percentString(m) {
    const u = this.rgb().round(typeof m == "number" ? m : 1), y = u.valpha === 1 ? u.color : [...u.color, this.valpha];
    return Bt.to.rgb.percent(y);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const m = {}, { channels: u } = gt[this.model], { labels: y } = gt[this.model];
    for (let b = 0; b < u; b++)
      m[y[b]] = this.color[b];
    return this.valpha !== 1 && (m.alpha = this.valpha), m;
  },
  unitArray() {
    const m = this.rgb().color;
    return m[0] /= 255, m[1] /= 255, m[2] /= 255, this.valpha !== 1 && m.push(this.valpha), m;
  },
  unitObject() {
    const m = this.rgb().object();
    return m.r /= 255, m.g /= 255, m.b /= 255, this.valpha !== 1 && (m.alpha = this.valpha), m;
  },
  round(m) {
    return m = Math.max(m || 0, 0), new ut([...this.color.map(Be(m)), this.valpha], this.model);
  },
  alpha(m) {
    return m !== void 0 ? new ut([...this.color, Math.max(0, Math.min(1, m))], this.model) : this.valpha;
  },
  // Rgb
  red: at("rgb", 0, lt(255)),
  green: at("rgb", 1, lt(255)),
  blue: at("rgb", 2, lt(255)),
  hue: at(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (m) => (m % 360 + 360) % 360),
  saturationl: at("hsl", 1, lt(100)),
  lightness: at("hsl", 2, lt(100)),
  saturationv: at("hsv", 1, lt(100)),
  value: at("hsv", 2, lt(100)),
  chroma: at("hcg", 1, lt(100)),
  gray: at("hcg", 2, lt(100)),
  white: at("hwb", 1, lt(100)),
  wblack: at("hwb", 2, lt(100)),
  cyan: at("cmyk", 0, lt(100)),
  magenta: at("cmyk", 1, lt(100)),
  yellow: at("cmyk", 2, lt(100)),
  black: at("cmyk", 3, lt(100)),
  x: at("xyz", 0, lt(95.047)),
  y: at("xyz", 1, lt(100)),
  z: at("xyz", 2, lt(108.833)),
  l: at("lab", 0, lt(100)),
  a: at("lab", 1),
  b: at("lab", 2),
  keyword(m) {
    return m !== void 0 ? new ut(m) : gt[this.model].keyword(this.color);
  },
  hex(m) {
    return m !== void 0 ? new ut(m) : Bt.to.hex(this.rgb().round().color);
  },
  hexa(m) {
    if (m !== void 0)
      return new ut(m);
    const u = this.rgb().round().color;
    let y = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return y.length === 1 && (y = "0" + y), Bt.to.hex(u) + y;
  },
  rgbNumber() {
    const m = this.rgb().color;
    return (m[0] & 255) << 16 | (m[1] & 255) << 8 | m[2] & 255;
  },
  luminosity() {
    const m = this.rgb().color, u = [];
    for (const [y, b] of m.entries()) {
      const x = b / 255;
      u[y] = x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * u[0] + 0.7152 * u[1] + 0.0722 * u[2];
  },
  contrast(m) {
    const u = this.luminosity(), y = m.luminosity();
    return u > y ? (u + 0.05) / (y + 0.05) : (y + 0.05) / (u + 0.05);
  },
  level(m) {
    const u = this.contrast(m);
    return u >= 7 ? "AAA" : u >= 4.5 ? "AA" : "";
  },
  isDark() {
    const m = this.rgb().color;
    return (m[0] * 2126 + m[1] * 7152 + m[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const m = this.rgb();
    for (let u = 0; u < 3; u++)
      m.color[u] = 255 - m.color[u];
    return m;
  },
  lighten(m) {
    const u = this.hsl();
    return u.color[2] += u.color[2] * m, u;
  },
  darken(m) {
    const u = this.hsl();
    return u.color[2] -= u.color[2] * m, u;
  },
  saturate(m) {
    const u = this.hsl();
    return u.color[1] += u.color[1] * m, u;
  },
  desaturate(m) {
    const u = this.hsl();
    return u.color[1] -= u.color[1] * m, u;
  },
  whiten(m) {
    const u = this.hwb();
    return u.color[1] += u.color[1] * m, u;
  },
  blacken(m) {
    const u = this.hwb();
    return u.color[2] += u.color[2] * m, u;
  },
  grayscale() {
    const m = this.rgb().color, u = m[0] * 0.3 + m[1] * 0.59 + m[2] * 0.11;
    return ut.rgb(u, u, u);
  },
  fade(m) {
    return this.alpha(this.valpha - this.valpha * m);
  },
  opaquer(m) {
    return this.alpha(this.valpha + this.valpha * m);
  },
  rotate(m) {
    const u = this.hsl();
    let y = u.color[0];
    return y = (y + m) % 360, y = y < 0 ? 360 + y : y, u.color[0] = y, u;
  },
  mix(m, u) {
    if (!m || !m.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof m);
    const y = m.rgb(), b = this.rgb(), x = u === void 0 ? 0.5 : u, w = 2 * x - 1, D = y.alpha() - b.alpha(), f = ((w * D === -1 ? w : (w + D) / (1 + w * D)) + 1) / 2, e = 1 - f;
    return ut.rgb(
      f * y.red() + e * b.red(),
      f * y.green() + e * b.green(),
      f * y.blue() + e * b.blue(),
      y.alpha() * x + b.alpha() * (1 - x)
    );
  }
};
for (const m of Object.keys(gt)) {
  if (ue.includes(m))
    continue;
  const { channels: u } = gt[m];
  ut.prototype[m] = function(...y) {
    return this.model === m ? new ut(this) : y.length > 0 ? new ut(y, m) : new ut([...Xe(gt[this.model][m].raw(this.color)), this.valpha], m);
  }, ut[m] = function(...y) {
    let b = y[0];
    return typeof b == "number" && (b = ee(y, u)), new ut(b, m);
  };
}
function Ie(m, u) {
  return Number(m.toFixed(u));
}
function Be(m) {
  return function(u) {
    return Ie(u, m);
  };
}
function at(m, u, y) {
  m = Array.isArray(m) ? m : [m];
  for (const b of m)
    (Jt[b] || (Jt[b] = []))[u] = y;
  return m = m[0], function(b) {
    let x;
    return b !== void 0 ? (y && (b = y(b)), x = this[m](), x.color[u] = b, x) : (x = this[m]().color[u], y && (x = y(x)), x);
  };
}
function lt(m) {
  return function(u) {
    return Math.max(0, Math.min(m, u));
  };
}
function Xe(m) {
  return Array.isArray(m) ? m : [m];
}
function ee(m, u) {
  for (let y = 0; y < u; y++)
    typeof m[y] != "number" && (m[y] = 0);
  return m;
}
var Ye = ut;
const Ft = /* @__PURE__ */ ge(Ye);
var $ = globalThis && globalThis.__classPrivateFieldSet || function(m, u, y) {
  if (!u.has(m))
    throw new TypeError("attempted to set private field on non-instance");
  return u.set(m, y), y;
}, H = globalThis && globalThis.__classPrivateFieldGet || function(m, u) {
  if (!u.has(m))
    throw new TypeError("attempted to get private field on non-instance");
  return u.get(m);
}, Dt, Lt, pt, Xt, Wt, _t, yt, bt, Ct, xt, St, wt, Tt, jt, Yt, Mt, qt, Pt;
const We = function(m) {
  var u = 131, y = 137, b = 0;
  m += "x";
  var x = Math.floor(9007199254740991 / y);
  for (let w = 0; w < m.length; w++)
    b > x && (b = Math.floor(b / y)), b = b * u + m.charCodeAt(w);
  return b;
}, V = "0123456789abcdef".split(""), ze = [
  -2147483648,
  8388608,
  32768,
  128
], vt = [
  24,
  16,
  8,
  0
], Vt = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
], ct = [];
class Ue {
  constructor(u = !1, y = !1) {
    Dt.set(this, void 0), Lt.set(this, void 0), pt.set(this, void 0), Xt.set(this, void 0), Wt.set(this, void 0), _t.set(this, void 0), yt.set(this, void 0), bt.set(this, void 0), Ct.set(this, void 0), xt.set(this, void 0), St.set(this, void 0), wt.set(this, void 0), Tt.set(this, void 0), jt.set(this, void 0), Yt.set(this, void 0), Mt.set(this, void 0), qt.set(this, 0), Pt.set(this, void 0), this.init(u, y);
  }
  init(u, y) {
    y ? (ct[0] = ct[16] = ct[1] = ct[2] = ct[3] = ct[4] = ct[5] = ct[6] = ct[7] = ct[8] = ct[9] = ct[10] = ct[11] = ct[12] = ct[13] = ct[14] = ct[15] = 0, $(this, Lt, ct)) : $(this, Lt, [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]), u ? ($(this, _t, 3238371032), $(this, yt, 914150663), $(this, bt, 812702999), $(this, Ct, 4144912697), $(this, xt, 4290775857), $(this, St, 1750603025), $(this, wt, 1694076839), $(this, Tt, 3204075428)) : ($(this, _t, 1779033703), $(this, yt, 3144134277), $(this, bt, 1013904242), $(this, Ct, 2773480762), $(this, xt, 1359893119), $(this, St, 2600822924), $(this, wt, 528734635), $(this, Tt, 1541459225)), $(this, Dt, $(this, Pt, $(this, pt, $(this, Yt, 0)))), $(this, Xt, $(this, jt, !1)), $(this, Wt, !0), $(this, Mt, u);
  }
  update(u) {
    if (H(this, Xt))
      return this;
    let y;
    u instanceof ArrayBuffer ? y = new Uint8Array(u) : y = u;
    let b = 0;
    const x = y.length, w = H(this, Lt);
    for (; b < x; ) {
      let D;
      if (H(this, jt) && ($(this, jt, !1), w[0] = H(this, Dt), w[16] = w[1] = w[2] = w[3] = w[4] = w[5] = w[6] = w[7] = w[8] = w[9] = w[10] = w[11] = w[12] = w[13] = w[14] = w[15] = 0), typeof y != "string")
        for (D = H(this, Pt); b < x && D < 64; ++b)
          w[D >> 2] |= y[b] << vt[D++ & 3];
      else
        for (D = H(this, Pt); b < x && D < 64; ++b) {
          let f = y.charCodeAt(b);
          f < 128 ? w[D >> 2] |= f << vt[D++ & 3] : f < 2048 ? (w[D >> 2] |= (192 | f >> 6) << vt[D++ & 3], w[D >> 2] |= (128 | f & 63) << vt[D++ & 3]) : f < 55296 || f >= 57344 ? (w[D >> 2] |= (224 | f >> 12) << vt[D++ & 3], w[D >> 2] |= (128 | f >> 6 & 63) << vt[D++ & 3], w[D >> 2] |= (128 | f & 63) << vt[D++ & 3]) : (f = 65536 + ((f & 1023) << 10 | y.charCodeAt(++b) & 1023), w[D >> 2] |= (240 | f >> 18) << vt[D++ & 3], w[D >> 2] |= (128 | f >> 12 & 63) << vt[D++ & 3], w[D >> 2] |= (128 | f >> 6 & 63) << vt[D++ & 3], w[D >> 2] |= (128 | f & 63) << vt[D++ & 3]);
        }
      $(this, qt, D), $(this, pt, H(this, pt) + (D - H(this, Pt))), D >= 64 ? ($(this, Dt, w[16]), $(this, Pt, D - 64), this.hash(), $(this, jt, !0)) : $(this, Pt, D);
    }
    return H(this, pt) > 4294967295 && ($(this, Yt, H(this, Yt) + (H(this, pt) / 4294967296 << 0)), $(this, pt, H(this, pt) % 4294967296)), this;
  }
  finalize() {
    if (H(this, Xt))
      return;
    $(this, Xt, !0);
    const u = H(this, Lt), y = H(this, qt);
    u[16] = H(this, Dt), u[y >> 2] |= ze[y & 3], $(this, Dt, u[16]), y >= 56 && (H(this, jt) || this.hash(), u[0] = H(this, Dt), u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0), u[14] = H(this, Yt) << 3 | H(this, pt) >>> 29, u[15] = H(this, pt) << 3, this.hash();
  }
  hash() {
    let u = H(this, _t), y = H(this, yt), b = H(this, bt), x = H(this, Ct), w = H(this, xt), D = H(this, St), f = H(this, wt), e = H(this, Tt);
    const h = H(this, Lt);
    let r, t, a, n, c, s, i, o, l, d;
    for (let g = 16; g < 64; ++g)
      n = h[g - 15], r = (n >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3, n = h[g - 2], t = (n >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10, h[g] = h[g - 16] + r + h[g - 7] + t << 0;
    d = y & b;
    for (let g = 0; g < 64; g += 4)
      H(this, Wt) ? (H(this, Mt) ? (i = 300032, n = h[0] - 1413257819, e = n - 150054599 << 0, x = n + 24177077 << 0) : (i = 704751109, n = h[0] - 210244248, e = n - 1521486534 << 0, x = n + 143694565 << 0), $(this, Wt, !1)) : (r = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10), t = (w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7), i = u & y, a = i ^ u & b ^ d, s = w & D ^ ~w & f, n = e + t + s + Vt[g] + h[g], c = r + a, e = x + n << 0, x = n + c << 0), r = (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10), t = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7), o = x & u, a = o ^ x & y ^ i, s = e & w ^ ~e & D, n = f + t + s + Vt[g + 1] + h[g + 1], c = r + a, f = b + n << 0, b = n + c << 0, r = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10), t = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7), l = b & x, a = l ^ b & u ^ o, s = f & e ^ ~f & w, n = D + t + s + Vt[g + 2] + h[g + 2], c = r + a, D = y + n << 0, y = n + c << 0, r = (y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10), t = (D >>> 6 | D << 26) ^ (D >>> 11 | D << 21) ^ (D >>> 25 | D << 7), d = y & b, a = d ^ y & x ^ l, s = D & f ^ ~D & e, n = w + t + s + Vt[g + 3] + h[g + 3], c = r + a, w = u + n << 0, u = n + c << 0;
    $(this, _t, H(this, _t) + u << 0), $(this, yt, H(this, yt) + y << 0), $(this, bt, H(this, bt) + b << 0), $(this, Ct, H(this, Ct) + x << 0), $(this, xt, H(this, xt) + w << 0), $(this, St, H(this, St) + D << 0), $(this, wt, H(this, wt) + f << 0), $(this, Tt, H(this, Tt) + e << 0);
  }
  hex() {
    this.finalize();
    const u = H(this, _t), y = H(this, yt), b = H(this, bt), x = H(this, Ct), w = H(this, xt), D = H(this, St), f = H(this, wt), e = H(this, Tt);
    let h = V[u >> 28 & 15] + V[u >> 24 & 15] + V[u >> 20 & 15] + V[u >> 16 & 15] + V[u >> 12 & 15] + V[u >> 8 & 15] + V[u >> 4 & 15] + V[u & 15] + V[y >> 28 & 15] + V[y >> 24 & 15] + V[y >> 20 & 15] + V[y >> 16 & 15] + V[y >> 12 & 15] + V[y >> 8 & 15] + V[y >> 4 & 15] + V[y & 15] + V[b >> 28 & 15] + V[b >> 24 & 15] + V[b >> 20 & 15] + V[b >> 16 & 15] + V[b >> 12 & 15] + V[b >> 8 & 15] + V[b >> 4 & 15] + V[b & 15] + V[x >> 28 & 15] + V[x >> 24 & 15] + V[x >> 20 & 15] + V[x >> 16 & 15] + V[x >> 12 & 15] + V[x >> 8 & 15] + V[x >> 4 & 15] + V[x & 15] + V[w >> 28 & 15] + V[w >> 24 & 15] + V[w >> 20 & 15] + V[w >> 16 & 15] + V[w >> 12 & 15] + V[w >> 8 & 15] + V[w >> 4 & 15] + V[w & 15] + V[D >> 28 & 15] + V[D >> 24 & 15] + V[D >> 20 & 15] + V[D >> 16 & 15] + V[D >> 12 & 15] + V[D >> 8 & 15] + V[D >> 4 & 15] + V[D & 15] + V[f >> 28 & 15] + V[f >> 24 & 15] + V[f >> 20 & 15] + V[f >> 16 & 15] + V[f >> 12 & 15] + V[f >> 8 & 15] + V[f >> 4 & 15] + V[f & 15];
    return H(this, Mt) || (h += V[e >> 28 & 15] + V[e >> 24 & 15] + V[e >> 20 & 15] + V[e >> 16 & 15] + V[e >> 12 & 15] + V[e >> 8 & 15] + V[e >> 4 & 15] + V[e & 15]), h;
  }
  toString() {
    return this.hex();
  }
  digest() {
    this.finalize();
    const u = H(this, _t), y = H(this, yt), b = H(this, bt), x = H(this, Ct), w = H(this, xt), D = H(this, St), f = H(this, wt), e = H(this, Tt), h = [
      u >> 24 & 255,
      u >> 16 & 255,
      u >> 8 & 255,
      u & 255,
      y >> 24 & 255,
      y >> 16 & 255,
      y >> 8 & 255,
      y & 255,
      b >> 24 & 255,
      b >> 16 & 255,
      b >> 8 & 255,
      b & 255,
      x >> 24 & 255,
      x >> 16 & 255,
      x >> 8 & 255,
      x & 255,
      w >> 24 & 255,
      w >> 16 & 255,
      w >> 8 & 255,
      w & 255,
      D >> 24 & 255,
      D >> 16 & 255,
      D >> 8 & 255,
      D & 255,
      f >> 24 & 255,
      f >> 16 & 255,
      f >> 8 & 255,
      f & 255
    ];
    return H(this, Mt) || h.push(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255), h;
  }
  array() {
    return this.digest();
  }
  arrayBuffer() {
    this.finalize();
    const u = new ArrayBuffer(H(this, Mt) ? 28 : 32), y = new DataView(u);
    return y.setUint32(0, H(this, _t)), y.setUint32(4, H(this, yt)), y.setUint32(8, H(this, bt)), y.setUint32(12, H(this, Ct)), y.setUint32(16, H(this, xt)), y.setUint32(20, H(this, St)), y.setUint32(24, H(this, wt)), H(this, Mt) || y.setUint32(28, H(this, Tt)), u;
  }
}
Dt = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Ge(m) {
  const u = new Ue();
  return u.update(m), parseInt(u.hex().substring(0, 8), 16);
}
const He = function(m) {
  var u = "#";
  return m.forEach(function(y) {
    y < 16 && (u += 0), u += y.toString(16);
  }), u;
}, Ne = function(m, u, y) {
  m /= 360;
  var b = y < 0.5 ? y * (1 + u) : y + u - y * u, x = 2 * y - b;
  return [
    m + 1 / 3,
    m,
    m - 1 / 3
  ].map(function(w) {
    return w < 0 && w++, w > 1 && w--, w < 1 / 6 ? w = x + (b - x) * 6 * w : w < 0.5 ? w = b : w < 2 / 3 ? w = x + (b - x) * 6 * (2 / 3 - w) : w = x, Math.round(w * 255);
  });
};
class Ve {
  constructor(u = {}) {
    const [y, b] = [
      u.lightness,
      u.saturation
    ].map(function(x) {
      return x = x !== void 0 ? x : [
        0.35,
        0.5,
        0.65
      ], Array.isArray(x) ? x.concat() : [
        x
      ];
    });
    this.L = y, this.S = b, typeof u.hue == "number" && (u.hue = {
      min: u.hue,
      max: u.hue
    }), typeof u.hue == "object" && !Array.isArray(u.hue) && (u.hue = [
      u.hue
    ]), typeof u.hue > "u" && (u.hue = []), this.hueRanges = u.hue.map(function(x) {
      return {
        min: typeof x.min > "u" ? 0 : x.min,
        max: typeof x.max > "u" ? 360 : x.max
      };
    }), this.hash = Ge, typeof u.hash == "function" && (this.hash = u.hash), u.hash === "bkdr" && (this.hash = We);
  }
  hsl(u) {
    var y, b, x, w = this.hash(u), D = 727;
    if (this.hueRanges.length) {
      const f = this.hueRanges[w % this.hueRanges.length];
      y = w / this.hueRanges.length % D * (f.max - f.min) / D + f.min;
    } else
      y = w % 359;
    return w = Math.ceil(w / 360), b = this.S[w % this.S.length], w = Math.ceil(w / this.S.length), x = this.L[w % this.L.length], [
      y,
      b,
      x
    ];
  }
  rgb(u) {
    var y = this.hsl(u);
    return Ne.apply(this, y);
  }
  hex(u) {
    var y = this.rgb(u);
    return He(y);
  }
}
new Ve();
var re;
(function(m) {
  m.MouseOut = "mouseout", m.MouseOver = "mouseover", m.MouseDown = "mousedown", m.MouseUp = "mouseup", m.MouseDoubleClick = "mousedblclick", m.Moving = "moving";
})(re || (re = {}));
new Ft("#180019"), new Ft("#C5CBD3"), new Ft("orange"), new Ft("#400042"), new Ft("white"), new Ft("rgba(131,85,131,0.84)"), new Ft();
