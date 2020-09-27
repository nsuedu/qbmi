(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [21, 12],
  {
    '+TT/': function(t, e, n) {
      var i = n('bYtY'),
        r = n('mFDi'),
        a = n('OELB'),
        o = a.parsePercent,
        s = n('7aKB'),
        l = i.each,
        u = ['left', 'right', 'top', 'bottom', 'width', 'height'],
        c = [
          ['width', 'left', 'right'],
          ['height', 'top', 'bottom'],
        ];
      function h(t, e, n, i, r) {
        var a = 0,
          o = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function(l, u) {
          var c,
            h,
            d = l.position,
            f = l.getBoundingRect(),
            p = e.childAt(u + 1),
            g = p && p.getBoundingRect();
          if ('horizontal' === t) {
            var v = f.width + (g ? -g.x + f.x : 0);
            (c = a + v),
              c > i || l.newline
                ? ((a = 0), (c = v), (o += s + n), (s = f.height))
                : (s = Math.max(s, f.height));
          } else {
            var m = f.height + (g ? -g.y + f.y : 0);
            (h = o + m),
              h > r || l.newline
                ? ((a += s + n), (o = 0), (h = m), (s = f.width))
                : (s = Math.max(s, f.width));
          }
          l.newline || ((d[0] = a), (d[1] = o), 'horizontal' === t ? (a = c + n) : (o = h + n));
        });
      }
      var d = h,
        f = i.curry(h, 'vertical'),
        p = i.curry(h, 'horizontal');
      function g(t, e, n) {
        var i = e.width,
          r = e.height,
          a = o(t.x, i),
          l = o(t.y, r),
          u = o(t.x2, i),
          c = o(t.y2, r);
        return (
          (isNaN(a) || isNaN(parseFloat(t.x))) && (a = 0),
          (isNaN(u) || isNaN(parseFloat(t.x2))) && (u = i),
          (isNaN(l) || isNaN(parseFloat(t.y))) && (l = 0),
          (isNaN(c) || isNaN(parseFloat(t.y2))) && (c = r),
          (n = s.normalizeCssArray(n || 0)),
          { width: Math.max(u - a - n[1] - n[3], 0), height: Math.max(c - l - n[0] - n[2], 0) }
        );
      }
      function v(t, e, n) {
        n = s.normalizeCssArray(n || 0);
        var i = e.width,
          a = e.height,
          l = o(t.left, i),
          u = o(t.top, a),
          c = o(t.right, i),
          h = o(t.bottom, a),
          d = o(t.width, i),
          f = o(t.height, a),
          p = n[2] + n[0],
          g = n[1] + n[3],
          v = t.aspect;
        switch (
          (isNaN(d) && (d = i - c - g - l),
          isNaN(f) && (f = a - h - p - u),
          null != v &&
            (isNaN(d) && isNaN(f) && (v > i / a ? (d = 0.8 * i) : (f = 0.8 * a)),
            isNaN(d) && (d = v * f),
            isNaN(f) && (f = d / v)),
          isNaN(l) && (l = i - c - d - g),
          isNaN(u) && (u = a - h - f - p),
          t.left || t.right)
        ) {
          case 'center':
            l = i / 2 - d / 2 - n[3];
            break;
          case 'right':
            l = i - d - g;
            break;
        }
        switch (t.top || t.bottom) {
          case 'middle':
          case 'center':
            u = a / 2 - f / 2 - n[0];
            break;
          case 'bottom':
            u = a - f - p;
            break;
        }
        (l = l || 0),
          (u = u || 0),
          isNaN(d) && (d = i - g - l - (c || 0)),
          isNaN(f) && (f = a - p - u - (h || 0));
        var m = new r(l + n[3], u + n[0], d, f);
        return (m.margin = n), m;
      }
      function m(t, e, n, a, o) {
        var s = !o || !o.hv || o.hv[0],
          l = !o || !o.hv || o.hv[1],
          u = (o && o.boundingMode) || 'all';
        if (s || l) {
          var c;
          if ('raw' === u)
            c =
              'group' === t.type ? new r(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();
          else if (((c = t.getBoundingRect()), t.needLocalTransform())) {
            var h = t.getLocalTransform();
            (c = c.clone()), c.applyTransform(h);
          }
          e = v(i.defaults({ width: c.width, height: c.height }, e), n, a);
          var d = t.position,
            f = s ? e.x - c.x : 0,
            p = l ? e.y - c.y : 0;
          t.attr('position', 'raw' === u ? [f, p] : [d[0] + f, d[1] + p]);
        }
      }
      function y(t, e) {
        return null != t[c[e][0]] || (null != t[c[e][1]] && null != t[c[e][2]]);
      }
      function x(t, e, n) {
        !i.isObject(n) && (n = {});
        var r = n.ignoreSize;
        !i.isArray(r) && (r = [r, r]);
        var a = s(c[0], 0),
          o = s(c[1], 1);
        function s(n, i) {
          var a = {},
            o = 0,
            s = {},
            c = 0,
            d = 2;
          if (
            (l(n, function(e) {
              s[e] = t[e];
            }),
            l(n, function(t) {
              u(e, t) && (a[t] = s[t] = e[t]), h(a, t) && o++, h(s, t) && c++;
            }),
            r[i])
          )
            return h(e, n[1]) ? (s[n[2]] = null) : h(e, n[2]) && (s[n[1]] = null), s;
          if (c !== d && o) {
            if (o >= d) return a;
            for (var f = 0; f < n.length; f++) {
              var p = n[f];
              if (!u(a, p) && u(t, p)) {
                a[p] = t[p];
                break;
              }
            }
            return a;
          }
          return s;
        }
        function u(t, e) {
          return t.hasOwnProperty(e);
        }
        function h(t, e) {
          return null != t[e] && 'auto' !== t[e];
        }
        function d(t, e, n) {
          l(t, function(t) {
            e[t] = n[t];
          });
        }
        d(c[0], t, a), d(c[1], t, o);
      }
      function _(t) {
        return b({}, t);
      }
      function b(t, e) {
        return (
          e &&
            t &&
            l(u, function(n) {
              e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          t
        );
      }
      (e.LOCATION_PARAMS = u),
        (e.HV_NAMES = c),
        (e.box = d),
        (e.vbox = f),
        (e.hbox = p),
        (e.getAvailableSize = g),
        (e.getLayoutRect = v),
        (e.positionElement = m),
        (e.sizeCalculable = y),
        (e.mergeLayoutParam = x),
        (e.getLayoutParams = _),
        (e.copyLayoutParams = b);
    },
    '+rIm': function(t, e, n) {
      var i = n('bYtY'),
        r = i.retrieve,
        a = i.defaults,
        o = i.extend,
        s = i.each,
        l = n('7aKB'),
        u = n('IwbS'),
        c = n('Qxkt'),
        h = n('OELB'),
        d = h.isRadianAroundZero,
        f = h.remRadian,
        p = n('oVpE'),
        g = p.createSymbol,
        v = n('Fofx'),
        m = n('QBsz'),
        y = m.applyTransform,
        x = n('aX7z'),
        _ = x.shouldShowAllLabels,
        b = Math.PI,
        w = function(t, e) {
          (this.opt = e),
            (this.axisModel = t),
            a(e, {
              labelOffset: 0,
              nameDirection: 1,
              tickDirection: 1,
              labelDirection: 1,
              silent: !0,
            }),
            (this.group = new u.Group());
          var n = new u.Group({ position: e.position.slice(), rotation: e.rotation });
          n.updateTransform(), (this._transform = n.transform), (this._dumbGroup = n);
        };
      w.prototype = {
        constructor: w,
        hasBuilder: function(t) {
          return !!S[t];
        },
        add: function(t) {
          S[t].call(this);
        },
        getGroup: function() {
          return this.group;
        },
      };
      var S = {
          axisLine: function() {
            var t = this.opt,
              e = this.axisModel;
            if (e.get('axisLine.show')) {
              var n = this.axisModel.axis.getExtent(),
                i = this._transform,
                r = [n[0], 0],
                a = [n[1], 0];
              i && (y(r, r, i), y(a, a, i));
              var l = o({ lineCap: 'round' }, e.getModel('axisLine.lineStyle').getLineStyle());
              this.group.add(
                new u.Line({
                  anid: 'line',
                  subPixelOptimize: !0,
                  shape: { x1: r[0], y1: r[1], x2: a[0], y2: a[1] },
                  style: l,
                  strokeContainThreshold: t.strokeContainThreshold || 5,
                  silent: !0,
                  z2: 1,
                }),
              );
              var c = e.get('axisLine.symbol'),
                h = e.get('axisLine.symbolSize'),
                d = e.get('axisLine.symbolOffset') || 0;
              if (('number' === typeof d && (d = [d, d]), null != c)) {
                'string' === typeof c && (c = [c, c]),
                  ('string' !== typeof h && 'number' !== typeof h) || (h = [h, h]);
                var f = h[0],
                  p = h[1];
                s(
                  [
                    { rotate: t.rotation + Math.PI / 2, offset: d[0], r: 0 },
                    {
                      rotate: t.rotation - Math.PI / 2,
                      offset: d[1],
                      r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1])),
                    },
                  ],
                  function(e, n) {
                    if ('none' !== c[n] && null != c[n]) {
                      var i = g(c[n], -f / 2, -p / 2, f, p, l.stroke, !0),
                        a = e.r + e.offset,
                        o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                      i.attr({ rotation: e.rotate, position: o, silent: !0, z2: 11 }),
                        this.group.add(i);
                    }
                  },
                  this,
                );
              }
            }
          },
          axisTickLabel: function() {
            var t = this.axisModel,
              e = this.opt,
              n = E(this, t, e),
              i = R(this, t, e);
            k(t, i, n), L(this, t, e);
          },
          axisName: function() {
            var t = this.opt,
              e = this.axisModel,
              n = r(t.axisName, e.get('name'));
            if (n) {
              var i,
                a,
                s = e.get('nameLocation'),
                c = t.nameDirection,
                h = e.getModel('nameTextStyle'),
                d = e.get('nameGap') || 0,
                f = this.axisModel.axis.getExtent(),
                p = f[0] > f[1] ? -1 : 1,
                g = [
                  'start' === s ? f[0] - p * d : 'end' === s ? f[1] + p * d : (f[0] + f[1]) / 2,
                  O(s) ? t.labelOffset + c * d : 0,
                ],
                v = e.get('nameRotate');
              null != v && (v = (v * b) / 180),
                O(s)
                  ? (i = T(t.rotation, null != v ? v : t.rotation, c))
                  : ((i = C(t, s, v || 0, f)),
                    (a = t.axisNameAvailableWidth),
                    null != a &&
                      ((a = Math.abs(a / Math.sin(i.rotation))), !isFinite(a) && (a = null)));
              var m = h.getFont(),
                y = e.get('nameTruncate', !0) || {},
                x = y.ellipsis,
                _ = r(t.nameTruncateMaxWidth, y.maxWidth, a),
                w =
                  null != x && null != _
                    ? l.truncateText(n, _, m, x, { minChar: 2, placeholder: y.placeholder })
                    : n,
                S = e.get('tooltip', !0),
                k = e.mainType,
                A = { componentType: k, name: n, $vars: ['name'] };
              A[k + 'Index'] = e.componentIndex;
              var D = new u.Text({
                anid: 'name',
                __fullText: n,
                __truncatedText: w,
                position: g,
                rotation: i.rotation,
                silent: I(e),
                z2: 1,
                tooltip:
                  S && S.show
                    ? o(
                        {
                          content: n,
                          formatter: function() {
                            return n;
                          },
                          formatterParams: A,
                        },
                        S,
                      )
                    : null,
              });
              u.setTextStyle(D.style, h, {
                text: w,
                textFont: m,
                textFill: h.getTextColor() || e.get('axisLine.lineStyle.color'),
                textAlign: h.get('align') || i.textAlign,
                textVerticalAlign: h.get('verticalAlign') || i.textVerticalAlign,
              }),
                e.get('triggerEvent') &&
                  ((D.eventData = M(e)),
                  (D.eventData.targetType = 'axisName'),
                  (D.eventData.name = n)),
                this._dumbGroup.add(D),
                D.updateTransform(),
                this.group.add(D),
                D.decomposeTransform();
            }
          },
        },
        M = (w.makeAxisEventDataBase = function(t) {
          var e = { componentType: t.mainType, componentIndex: t.componentIndex };
          return (e[t.mainType + 'Index'] = t.componentIndex), e;
        }),
        T = (w.innerTextLayout = function(t, e, n) {
          var i,
            r,
            a = f(e - t);
          return (
            d(a)
              ? ((r = n > 0 ? 'top' : 'bottom'), (i = 'center'))
              : d(a - b)
              ? ((r = n > 0 ? 'bottom' : 'top'), (i = 'center'))
              : ((r = 'middle'),
                (i = a > 0 && a < b ? (n > 0 ? 'right' : 'left') : n > 0 ? 'left' : 'right')),
            { rotation: a, textAlign: i, textVerticalAlign: r }
          );
        });
      function C(t, e, n, i) {
        var r,
          a,
          o = f(n - t.rotation),
          s = i[0] > i[1],
          l = ('start' === e && !s) || ('start' !== e && s);
        return (
          d(o - b / 2)
            ? ((a = l ? 'bottom' : 'top'), (r = 'center'))
            : d(o - 1.5 * b)
            ? ((a = l ? 'top' : 'bottom'), (r = 'center'))
            : ((a = 'middle'),
              (r = o < 1.5 * b && o > b / 2 ? (l ? 'left' : 'right') : l ? 'right' : 'left')),
          { rotation: o, textAlign: r, textVerticalAlign: a }
        );
      }
      var I = (w.isLabelSilent = function(t) {
        var e = t.get('tooltip');
        return t.get('silent') || !(t.get('triggerEvent') || (e && e.show));
      });
      function k(t, e, n) {
        if (!_(t.axis)) {
          var i = t.get('axisLabel.showMinLabel'),
            r = t.get('axisLabel.showMaxLabel');
          (e = e || []), (n = n || []);
          var a = e[0],
            o = e[1],
            s = e[e.length - 1],
            l = e[e.length - 2],
            u = n[0],
            c = n[1],
            h = n[n.length - 1],
            d = n[n.length - 2];
          !1 === i ? (A(a), A(u)) : D(a, o) && (i ? (A(o), A(c)) : (A(a), A(u))),
            !1 === r ? (A(s), A(h)) : D(l, s) && (r ? (A(l), A(d)) : (A(s), A(h)));
        }
      }
      function A(t) {
        t && (t.ignore = !0);
      }
      function D(t, e, n) {
        var i = t && t.getBoundingRect().clone(),
          r = e && e.getBoundingRect().clone();
        if (i && r) {
          var a = v.identity([]);
          return (
            v.rotate(a, a, -t.rotation),
            i.applyTransform(v.mul([], a, t.getLocalTransform())),
            r.applyTransform(v.mul([], a, e.getLocalTransform())),
            i.intersect(r)
          );
        }
      }
      function O(t) {
        return 'middle' === t || 'center' === t;
      }
      function P(t, e, n, i, r) {
        for (var a = [], o = [], s = [], l = 0; l < t.length; l++) {
          var c = t[l].coord;
          (o[0] = c), (o[1] = 0), (s[0] = c), (s[1] = n), e && (y(o, o, e), y(s, s, e));
          var h = new u.Line({
            anid: r + '_' + t[l].tickValue,
            subPixelOptimize: !0,
            shape: { x1: o[0], y1: o[1], x2: s[0], y2: s[1] },
            style: i,
            z2: 2,
            silent: !0,
          });
          a.push(h);
        }
        return a;
      }
      function E(t, e, n) {
        var i = e.axis,
          r = e.getModel('axisTick');
        if (r.get('show') && !i.scale.isBlank()) {
          for (
            var o = r.getModel('lineStyle'),
              s = n.tickDirection * r.get('length'),
              l = i.getTicksCoords(),
              u = P(
                l,
                t._transform,
                s,
                a(o.getLineStyle(), { stroke: e.get('axisLine.lineStyle.color') }),
                'ticks',
              ),
              c = 0;
            c < u.length;
            c++
          )
            t.group.add(u[c]);
          return u;
        }
      }
      function L(t, e, n) {
        var i = e.axis,
          r = e.getModel('minorTick');
        if (r.get('show') && !i.scale.isBlank()) {
          var o = i.getMinorTicksCoords();
          if (o.length)
            for (
              var s = r.getModel('lineStyle'),
                l = n.tickDirection * r.get('length'),
                u = a(
                  s.getLineStyle(),
                  a(e.getModel('axisTick').getLineStyle(), {
                    stroke: e.get('axisLine.lineStyle.color'),
                  }),
                ),
                c = 0;
              c < o.length;
              c++
            )
              for (var h = P(o[c], t._transform, l, u, 'minorticks_' + c), d = 0; d < h.length; d++)
                t.group.add(h[d]);
        }
      }
      function R(t, e, n) {
        var i = e.axis,
          a = r(n.axisLabelShow, e.get('axisLabel.show'));
        if (a && !i.scale.isBlank()) {
          var o = e.getModel('axisLabel'),
            l = o.get('margin'),
            h = i.getViewLabels(),
            d = ((r(n.labelRotate, o.get('rotate')) || 0) * b) / 180,
            f = T(n.rotation, d, n.labelDirection),
            p = e.getCategories && e.getCategories(!0),
            g = [],
            v = I(e),
            m = e.get('triggerEvent');
          return (
            s(h, function(r, a) {
              var s = r.tickValue,
                h = r.formattedLabel,
                d = r.rawLabel,
                y = o;
              p && p[s] && p[s].textStyle && (y = new c(p[s].textStyle, o, e.ecModel));
              var x = y.getTextColor() || e.get('axisLine.lineStyle.color'),
                _ = i.dataToCoord(s),
                b = [_, n.labelOffset + n.labelDirection * l],
                w = new u.Text({
                  anid: 'label_' + s,
                  position: b,
                  rotation: f.rotation,
                  silent: v,
                  z2: 10,
                });
              u.setTextStyle(w.style, y, {
                text: h,
                textAlign: y.getShallow('align', !0) || f.textAlign,
                textVerticalAlign:
                  y.getShallow('verticalAlign', !0) ||
                  y.getShallow('baseline', !0) ||
                  f.textVerticalAlign,
                textFill:
                  'function' === typeof x
                    ? x('category' === i.type ? d : 'value' === i.type ? s + '' : s, a)
                    : x,
              }),
                m &&
                  ((w.eventData = M(e)),
                  (w.eventData.targetType = 'axisLabel'),
                  (w.eventData.value = d)),
                t._dumbGroup.add(w),
                w.updateTransform(),
                g.push(w),
                t.group.add(w),
                w.decomposeTransform();
            }),
            g
          );
        }
      }
      var N = w;
      t.exports = N;
    },
    '+wW9': function(t, e, n) {
      var i = n('bYtY'),
        r = i.each,
        a = i.isArray,
        o = i.isObject,
        s = n('JuEJ'),
        l = n('4NO4'),
        u = l.normalizeToArray;
      function c(t, e) {
        e = e.split(',');
        for (var n = t, i = 0; i < e.length; i++) if (((n = n && n[e[i]]), null == n)) break;
        return n;
      }
      function h(t, e, n, i) {
        e = e.split(',');
        for (var r, a = t, o = 0; o < e.length - 1; o++)
          (r = e[o]), null == a[r] && (a[r] = {}), (a = a[r]);
        (i || null == a[e[o]]) && (a[e[o]] = n);
      }
      function d(t) {
        r(f, function(e) {
          e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
        });
      }
      var f = [
          ['x', 'left'],
          ['y', 'top'],
          ['x2', 'right'],
          ['y2', 'bottom'],
        ],
        p = [
          'grid',
          'geo',
          'parallel',
          'legend',
          'toolbox',
          'title',
          'visualMap',
          'dataZoom',
          'timeline',
        ];
      function g(t, e) {
        s(t, e),
          (t.series = u(t.series)),
          r(t.series, function(t) {
            if (o(t)) {
              var e = t.type;
              if ('line' === e) null != t.clipOverflow && (t.clip = t.clipOverflow);
              else if ('pie' === e || 'gauge' === e)
                null != t.clockWise && (t.clockwise = t.clockWise);
              else if ('gauge' === e) {
                var n = c(t, 'pointer.color');
                null != n && h(t, 'itemStyle.color', n);
              }
              d(t);
            }
          }),
          t.dataRange && (t.visualMap = t.dataRange),
          r(p, function(e) {
            var n = t[e];
            n &&
              (a(n) || (n = [n]),
              r(n, function(t) {
                d(t);
              }));
          });
      }
      t.exports = g;
    },
    '/WM3': function(t, e, n) {
      var i = n('QuXc'),
        r = n('bYtY'),
        a = r.isFunction,
        o = {
          createOnAllSeries: !0,
          performRawSeries: !0,
          reset: function(t, e) {
            var n = t.getData(),
              r = (t.visualColorAccessPath || 'itemStyle.color').split('.'),
              o = t.get(r),
              s = !a(o) || o instanceof i ? null : o;
            (o && !s) || (o = t.getColorFromPalette(t.name, null, e.getSeriesCount())),
              n.setVisual('color', o);
            var l = (t.visualBorderColorAccessPath || 'itemStyle.borderColor').split('.'),
              u = t.get(l);
            if ((n.setVisual('borderColor', u), !e.isSeriesFiltered(t))) {
              s &&
                n.each(function(e) {
                  n.setItemVisual(e, 'color', s(t.getDataParams(e)));
                });
              var c = function(t, e) {
                var n = t.getItemModel(e),
                  i = n.get(r, !0),
                  a = n.get(l, !0);
                null != i && t.setItemVisual(e, 'color', i),
                  null != a && t.setItemVisual(e, 'borderColor', a);
              };
              return { dataEach: n.hasItemOption ? c : null };
            }
          },
        };
      t.exports = o;
    },
    '/d5a': function(t, e) {
      var n = {
          average: function(t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || ((e += t[i]), n++);
            return 0 === n ? NaN : e / n;
          },
          sum: function(t) {
            for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
            return e;
          },
          max: function(t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
            return isFinite(e) ? e : NaN;
          },
          min: function(t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
            return isFinite(e) ? e : NaN;
          },
          nearest: function(t) {
            return t[0];
          },
        },
        i = function(t, e) {
          return Math.round(t.length / 2);
        };
      function r(t) {
        return {
          seriesType: t,
          modifyOutputEnd: !0,
          reset: function(t, e, r) {
            var a = t.getData(),
              o = t.get('sampling'),
              s = t.coordinateSystem;
            if ('cartesian2d' === s.type && o) {
              var l,
                u = s.getBaseAxis(),
                c = s.getOtherAxis(u),
                h = u.getExtent(),
                d = Math.abs(h[1] - h[0]),
                f = Math.round(a.count() / d);
              if (f > 1)
                'string' === typeof o ? (l = n[o]) : 'function' === typeof o && (l = o),
                  l && t.setData(a.downSample(a.mapDimension(c.dim), 1 / f, l, i));
            }
          },
        };
      }
      t.exports = r;
    },
    '/iHx': function(t, e, n) {
      var i = n('6GrX'),
        r = n('IwbS'),
        a = ['textStyle', 'color'],
        o = {
          getTextColor: function(t) {
            var e = this.ecModel;
            return this.getShallow('color') || (!t && e ? e.get(a) : null);
          },
          getFont: function() {
            return r.getFont(
              {
                fontStyle: this.getShallow('fontStyle'),
                fontWeight: this.getShallow('fontWeight'),
                fontSize: this.getShallow('fontSize'),
                fontFamily: this.getShallow('fontFamily'),
              },
              this.ecModel,
            );
          },
          getTextRect: function(t) {
            return i.getBoundingRect(
              t,
              this.getFont(),
              this.getShallow('align'),
              this.getShallow('verticalAlign') || this.getShallow('baseline'),
              this.getShallow('padding'),
              this.getShallow('lineHeight'),
              this.getShallow('rich'),
              this.getShallow('truncateText'),
            );
          },
        };
      t.exports = o;
    },
    '/y7N': function(t, e, n) {
      var i = n('bYtY'),
        r = n('IwbS'),
        a = n('6GrX'),
        o = n('7aKB'),
        s = n('Fofx'),
        l = n('aX7z'),
        u = n('+rIm');
      function c(t) {
        var e,
          n = t.get('type'),
          i = t.getModel(n + 'Style');
        return (
          'line' === n
            ? ((e = i.getLineStyle()), (e.fill = null))
            : 'shadow' === n && ((e = i.getAreaStyle()), (e.stroke = null)),
          e
        );
      }
      function h(t, e, n, i, r) {
        var s = n.get('value'),
          l = f(s, e.axis, e.ecModel, n.get('seriesDataIndices'), {
            precision: n.get('label.precision'),
            formatter: n.get('label.formatter'),
          }),
          u = n.getModel('label'),
          c = o.normalizeCssArray(u.get('padding') || 0),
          h = u.getFont(),
          p = a.getBoundingRect(l, h),
          g = r.position,
          v = p.width + c[1] + c[3],
          m = p.height + c[0] + c[2],
          y = r.align;
        'right' === y && (g[0] -= v), 'center' === y && (g[0] -= v / 2);
        var x = r.verticalAlign;
        'bottom' === x && (g[1] -= m), 'middle' === x && (g[1] -= m / 2), d(g, v, m, i);
        var _ = u.get('backgroundColor');
        (_ && 'auto' !== _) || (_ = e.get('axisLine.lineStyle.color')),
          (t.label = {
            shape: { x: 0, y: 0, width: v, height: m, r: u.get('borderRadius') },
            position: g.slice(),
            style: {
              text: l,
              textFont: h,
              textFill: u.getTextColor(),
              textPosition: 'inside',
              textPadding: c,
              fill: _,
              stroke: u.get('borderColor') || 'transparent',
              lineWidth: u.get('borderWidth') || 0,
              shadowBlur: u.get('shadowBlur'),
              shadowColor: u.get('shadowColor'),
              shadowOffsetX: u.get('shadowOffsetX'),
              shadowOffsetY: u.get('shadowOffsetY'),
            },
            z2: 10,
          });
      }
      function d(t, e, n, i) {
        var r = i.getWidth(),
          a = i.getHeight();
        (t[0] = Math.min(t[0] + e, r) - e),
          (t[1] = Math.min(t[1] + n, a) - n),
          (t[0] = Math.max(t[0], 0)),
          (t[1] = Math.max(t[1], 0));
      }
      function f(t, e, n, r, a) {
        t = e.scale.parse(t);
        var o = e.scale.getLabel(t, { precision: a.precision }),
          s = a.formatter;
        if (s) {
          var u = {
            value: l.getAxisRawValue(e, t),
            axisDimension: e.dim,
            axisIndex: e.index,
            seriesData: [],
          };
          i.each(r, function(t) {
            var e = n.getSeriesByIndex(t.seriesIndex),
              i = t.dataIndexInside,
              r = e && e.getDataParams(i);
            r && u.seriesData.push(r);
          }),
            i.isString(s) ? (o = s.replace('{value}', o)) : i.isFunction(s) && (o = s(u));
        }
        return o;
      }
      function p(t, e, n) {
        var i = s.create();
        return (
          s.rotate(i, i, n.rotation),
          s.translate(i, i, n.position),
          r.applyTransform(
            [
              t.dataToCoord(e),
              (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0),
            ],
            i,
          )
        );
      }
      function g(t, e, n, i, r, a) {
        var o = u.innerTextLayout(n.rotation, 0, n.labelDirection);
        (n.labelMargin = r.get('label.margin')),
          h(e, i, r, a, {
            position: p(i.axis, t, n),
            align: o.textAlign,
            verticalAlign: o.textVerticalAlign,
          });
      }
      function v(t, e, n) {
        return (n = n || 0), { x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n] };
      }
      function m(t, e, n) {
        return (n = n || 0), { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
      }
      function y(t, e, n, i, r, a) {
        return { cx: t, cy: e, r0: n, r: i, startAngle: r, endAngle: a, clockwise: !0 };
      }
      (e.buildElStyle = c),
        (e.buildLabelElOption = h),
        (e.getValueLabel = f),
        (e.getTransformedPosition = p),
        (e.buildCartesianSingleLabelElOption = g),
        (e.makeLineShape = v),
        (e.makeRectShape = m),
        (e.makeSectorShape = y);
    },
    '0/Rx': function(t, e) {
      function n(t) {
        return {
          seriesType: t,
          reset: function(t, e) {
            var n = e.findComponents({ mainType: 'legend' });
            if (n && n.length) {
              var i = t.getData();
              i.filterSelf(function(t) {
                for (var e = i.getName(t), r = 0; r < n.length; r++)
                  if (!n[r].isSelected(e)) return !1;
                return !0;
              });
            }
          },
        };
      }
      t.exports = n;
    },
    '0V0F': function(t, e, n) {
      var i = n('bYtY'),
        r = i.createHashMap,
        a = i.each;
      function o(t) {
        var e = r();
        t.eachSeries(function(t) {
          var n = t.get('stack');
          if (n) {
            var i = e.get(n) || e.set(n, []),
              r = t.getData(),
              a = {
                stackResultDimension: r.getCalculationInfo('stackResultDimension'),
                stackedOverDimension: r.getCalculationInfo('stackedOverDimension'),
                stackedDimension: r.getCalculationInfo('stackedDimension'),
                stackedByDimension: r.getCalculationInfo('stackedByDimension'),
                isStackedByIndex: r.getCalculationInfo('isStackedByIndex'),
                data: r,
                seriesModel: t,
              };
            if (!a.stackedDimension || (!a.isStackedByIndex && !a.stackedByDimension)) return;
            i.length && r.setCalculationInfo('stackedOnSeries', i[i.length - 1].seriesModel),
              i.push(a);
          }
        }),
          e.each(s);
      }
      function s(t) {
        a(t, function(e, n) {
          var i = [],
            r = [NaN, NaN],
            a = [e.stackResultDimension, e.stackedOverDimension],
            o = e.data,
            s = e.isStackedByIndex,
            l = o.map(a, function(a, l, u) {
              var c,
                h,
                d = o.get(e.stackedDimension, u);
              if (isNaN(d)) return r;
              s ? (h = o.getRawIndex(u)) : (c = o.get(e.stackedByDimension, u));
              for (var f = NaN, p = n - 1; p >= 0; p--) {
                var g = t[p];
                if ((s || (h = g.data.rawIndexOf(g.stackedByDimension, c)), h >= 0)) {
                  var v = g.data.getByRawIndex(g.stackResultDimension, h);
                  if ((d >= 0 && v > 0) || (d <= 0 && v < 0)) {
                    (d += v), (f = v);
                    break;
                  }
                }
              }
              return (i[0] = d), (i[1] = f), i;
            });
          o.hostModel.setData(l), (e.data = l);
        });
      }
      t.exports = o;
    },
    '0o9m': function(t, e, n) {
      var i = n('ProS');
      n('hNWo'), n('RlCK'), n('XpcN');
      var r = n('kDyi'),
        a = n('bLfw');
      i.registerProcessor(i.PRIORITY.PROCESSOR.SERIES_FILTER, r),
        a.registerSubTypeDefaulter('legend', function() {
          return 'plain';
        });
    },
    '0s+r': function(t, e, n) {
      var i = n('bYtY'),
        r = n('QBsz'),
        a = n('y23F'),
        o = n('H6uX'),
        s = n('YH21'),
        l = n('C0SR'),
        u = 'silent';
      function c(t, e, n) {
        return {
          type: t,
          event: n,
          target: e.target,
          topTarget: e.topTarget,
          cancelBubble: !1,
          offsetX: n.zrX,
          offsetY: n.zrY,
          gestureEvent: n.gestureEvent,
          pinchX: n.pinchX,
          pinchY: n.pinchY,
          pinchScale: n.pinchScale,
          wheelDelta: n.zrDelta,
          zrByTouch: n.zrByTouch,
          which: n.which,
          stop: h,
        };
      }
      function h() {
        s.stop(this.event);
      }
      function d() {}
      d.prototype.dispose = function() {};
      var f = [
          'click',
          'dblclick',
          'mousewheel',
          'mouseout',
          'mouseup',
          'mousedown',
          'mousemove',
          'contextmenu',
        ],
        p = function(t, e, n, i) {
          o.call(this),
            (this.storage = t),
            (this.painter = e),
            (this.painterRoot = i),
            (n = n || new d()),
            (this.proxy = null),
            (this._hovered = {}),
            this._lastTouchMoment,
            this._lastX,
            this._lastY,
            this._gestureMgr,
            a.call(this),
            this.setHandlerProxy(n);
        };
      function g(t, e, n) {
        if (t[t.rectHover ? 'rectContain' : 'contain'](e, n)) {
          var i,
            r = t;
          while (r) {
            if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
            r.silent && (i = !0), (r = r.parent);
          }
          return !i || u;
        }
        return !1;
      }
      function v(t, e, n) {
        var i = t.painter;
        return e < 0 || e > i.getWidth() || n < 0 || n > i.getHeight();
      }
      (p.prototype = {
        constructor: p,
        setHandlerProxy: function(t) {
          this.proxy && this.proxy.dispose(),
            t &&
              (i.each(
                f,
                function(e) {
                  t.on && t.on(e, this[e], this);
                },
                this,
              ),
              (t.handler = this)),
            (this.proxy = t);
        },
        mousemove: function(t) {
          var e = t.zrX,
            n = t.zrY,
            i = v(this, e, n),
            r = this._hovered,
            a = r.target;
          a && !a.__zr && ((r = this.findHover(r.x, r.y)), (a = r.target));
          var o = (this._hovered = i ? { x: e, y: n } : this.findHover(e, n)),
            s = o.target,
            l = this.proxy;
          l.setCursor && l.setCursor(s ? s.cursor : 'default'),
            a && s !== a && this.dispatchToElement(r, 'mouseout', t),
            this.dispatchToElement(o, 'mousemove', t),
            s && s !== a && this.dispatchToElement(o, 'mouseover', t);
        },
        mouseout: function(t) {
          var e = t.zrEventControl,
            n = t.zrIsToLocalDOM;
          'only_globalout' !== e && this.dispatchToElement(this._hovered, 'mouseout', t),
            'no_globalout' !== e &&
              !n &&
              this.trigger('globalout', { type: 'globalout', event: t });
        },
        resize: function(t) {
          this._hovered = {};
        },
        dispatch: function(t, e) {
          var n = this[t];
          n && n.call(this, e);
        },
        dispose: function() {
          this.proxy.dispose(), (this.storage = this.proxy = this.painter = null);
        },
        setCursorStyle: function(t) {
          var e = this.proxy;
          e.setCursor && e.setCursor(t);
        },
        dispatchToElement: function(t, e, n) {
          t = t || {};
          var i = t.target;
          if (!i || !i.silent) {
            var r = 'on' + e,
              a = c(e, t, n);
            while (i)
              if (
                (i[r] && (a.cancelBubble = i[r].call(i, a)),
                i.trigger(e, a),
                (i = i.parent),
                a.cancelBubble)
              )
                break;
            a.cancelBubble ||
              (this.trigger(e, a),
              this.painter &&
                this.painter.eachOtherLayer(function(t) {
                  'function' === typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
                }));
          }
        },
        findHover: function(t, e, n) {
          for (
            var i = this.storage.getDisplayList(), r = { x: t, y: e }, a = i.length - 1;
            a >= 0;
            a--
          ) {
            var o;
            if (
              i[a] !== n &&
              !i[a].ignore &&
              (o = g(i[a], t, e)) &&
              (!r.topTarget && (r.topTarget = i[a]), o !== u)
            ) {
              r.target = i[a];
              break;
            }
          }
          return r;
        },
        processGesture: function(t, e) {
          this._gestureMgr || (this._gestureMgr = new l());
          var n = this._gestureMgr;
          'start' === e && n.clear();
          var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
          if (('end' === e && n.clear(), i)) {
            var r = i.type;
            (t.gestureEvent = r), this.dispatchToElement({ target: i.target }, r, i.event);
          }
        },
      }),
        i.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function(
          t,
        ) {
          p.prototype[t] = function(e) {
            var n,
              i,
              a = e.zrX,
              o = e.zrY,
              s = v(this, a, o);
            if (
              (('mouseup' === t && s) || ((n = this.findHover(a, o)), (i = n.target)),
              'mousedown' === t)
            )
              (this._downEl = i), (this._downPoint = [e.zrX, e.zrY]), (this._upEl = i);
            else if ('mouseup' === t) this._upEl = i;
            else if ('click' === t) {
              if (
                this._downEl !== this._upEl ||
                !this._downPoint ||
                r.dist(this._downPoint, [e.zrX, e.zrY]) > 4
              )
                return;
              this._downPoint = null;
            }
            this.dispatchToElement(n, t, e);
          };
        }),
        i.mixin(p, o),
        i.mixin(p, a);
      var m = p;
      t.exports = m;
    },
    '1Jh7': function(t, e, n) {
      var i = n('y+Vt'),
        r = n('T6xi'),
        a = i.extend({
          type: 'polyline',
          shape: { points: null, smooth: !1, smoothConstraint: null },
          style: { stroke: '#000', fill: null },
          buildPath: function(t, e) {
            r.buildPath(t, e, !1);
          },
        });
      t.exports = a;
    },
    '1LEl': function(t, e, n) {
      var i = n('ProS'),
        r = n('F9bG'),
        a = i.extendComponentView({
          type: 'axisPointer',
          render: function(t, e, n) {
            var i = e.getComponent('tooltip'),
              a = t.get('triggerOn') || (i && i.get('triggerOn')) || 'mousemove|click';
            r.register('axisPointer', n, function(t, e, n) {
              'none' !== a &&
                ('leave' === t || a.indexOf(t) >= 0) &&
                n({
                  type: 'updateAxisPointer',
                  currTrigger: t,
                  x: e && e.offsetX,
                  y: e && e.offsetY,
                });
            });
          },
          remove: function(t, e) {
            r.unregister(e.getZr(), 'axisPointer'), a.superApply(this._model, 'remove', arguments);
          },
          dispose: function(t, e) {
            r.unregister('axisPointer', e), a.superApply(this._model, 'dispose', arguments);
          },
        }),
        o = a;
      t.exports = o;
    },
    '1MYJ': function(t, e, n) {
      var i = n('y+Vt'),
        r = i.extend({
          type: 'compound',
          shape: { paths: null },
          _updatePathDirty: function() {
            for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++)
              t = t || e[n].__dirtyPath;
            (this.__dirtyPath = t), (this.__dirty = this.__dirty || t);
          },
          beforeBrush: function() {
            this._updatePathDirty();
            for (
              var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0;
              n < t.length;
              n++
            )
              t[n].path || t[n].createPathProxy(),
                t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
          },
          buildPath: function(t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0);
          },
          afterBrush: function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1;
          },
          getBoundingRect: function() {
            return this._updatePathDirty(), i.prototype.getBoundingRect.call(this);
          },
        });
      t.exports = r;
    },
    '1NG9': function(t, e, n) {
      var i = n('y+Vt'),
        r = n('QBsz'),
        a = n('iXp4'),
        o = r.min,
        s = r.max,
        l = r.scaleAndAdd,
        u = r.copy,
        c = [],
        h = [],
        d = [];
      function f(t) {
        return isNaN(t[0]) || isNaN(t[1]);
      }
      function p(t, e, n, i, r, a, o, s, l, u, c) {
        return 'none' !== u && u ? g.apply(this, arguments) : v.apply(this, arguments);
      }
      function g(t, e, n, i, r, a, o, s, l, c, p) {
        for (var g = 0, v = n, m = 0; m < i; m++) {
          var y = e[v];
          if (v >= r || v < 0) break;
          if (f(y)) {
            if (p) {
              v += a;
              continue;
            }
            break;
          }
          if (v === n) t[a > 0 ? 'moveTo' : 'lineTo'](y[0], y[1]);
          else if (l > 0) {
            var x = e[g],
              _ = 'y' === c ? 1 : 0,
              b = (y[_] - x[_]) * l;
            u(h, x),
              (h[_] = x[_] + b),
              u(d, y),
              (d[_] = y[_] - b),
              t.bezierCurveTo(h[0], h[1], d[0], d[1], y[0], y[1]);
          } else t.lineTo(y[0], y[1]);
          (g = v), (v += a);
        }
        return m;
      }
      function v(t, e, n, i, a, p, g, v, m, y, x) {
        for (var _ = 0, b = n, w = 0; w < i; w++) {
          var S = e[b];
          if (b >= a || b < 0) break;
          if (f(S)) {
            if (x) {
              b += p;
              continue;
            }
            break;
          }
          if (b === n) t[p > 0 ? 'moveTo' : 'lineTo'](S[0], S[1]), u(h, S);
          else if (m > 0) {
            var M = b + p,
              T = e[M];
            if (x) while (T && f(e[M])) (M += p), (T = e[M]);
            var C = 0.5,
              I = e[_];
            T = e[M];
            if (!T || f(T)) u(d, S);
            else {
              var k, A;
              if ((f(T) && !x && (T = S), r.sub(c, T, I), 'x' === y || 'y' === y)) {
                var D = 'x' === y ? 0 : 1;
                (k = Math.abs(S[D] - I[D])), (A = Math.abs(S[D] - T[D]));
              } else (k = r.dist(S, I)), (A = r.dist(S, T));
              (C = A / (A + k)), l(d, S, c, -m * (1 - C));
            }
            o(h, h, v),
              s(h, h, g),
              o(d, d, v),
              s(d, d, g),
              t.bezierCurveTo(h[0], h[1], d[0], d[1], S[0], S[1]),
              l(h, S, c, m * C);
          } else t.lineTo(S[0], S[1]);
          (_ = b), (b += p);
        }
        return w;
      }
      function m(t, e) {
        var n = [1 / 0, 1 / 0],
          i = [-1 / 0, -1 / 0];
        if (e)
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a[0] < n[0] && (n[0] = a[0]),
              a[1] < n[1] && (n[1] = a[1]),
              a[0] > i[0] && (i[0] = a[0]),
              a[1] > i[1] && (i[1] = a[1]);
          }
        return { min: e ? n : i, max: e ? i : n };
      }
      var y = i.extend({
          type: 'ec-polyline',
          shape: {
            points: [],
            smooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1,
          },
          style: { fill: null, stroke: '#000' },
          brush: a(i.prototype.brush),
          buildPath: function(t, e) {
            var n = e.points,
              i = 0,
              r = n.length,
              a = m(n, e.smoothConstraint);
            if (e.connectNulls) {
              for (; r > 0; r--) if (!f(n[r - 1])) break;
              for (; i < r; i++) if (!f(n[i])) break;
            }
            while (i < r)
              i +=
                p(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
          },
        }),
        x = i.extend({
          type: 'ec-polygon',
          shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1,
          },
          brush: a(i.prototype.brush),
          buildPath: function(t, e) {
            var n = e.points,
              i = e.stackedOnPoints,
              r = 0,
              a = n.length,
              o = e.smoothMonotone,
              s = m(n, e.smoothConstraint),
              l = m(i, e.smoothConstraint);
            if (e.connectNulls) {
              for (; a > 0; a--) if (!f(n[a - 1])) break;
              for (; r < a; r++) if (!f(n[r])) break;
            }
            while (r < a) {
              var u = p(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
              p(t, i, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls),
                (r += u + 1),
                t.closePath();
            }
          },
        });
      (e.Polyline = y), (e.Polygon = x);
    },
    '1RvN': function(t, e) {
      var n = function() {
          (this.head = null), (this.tail = null), (this._len = 0);
        },
        i = n.prototype;
      (i.insert = function(t) {
        var e = new r(t);
        return this.insertEntry(e), e;
      }),
        (i.insertEntry = function(t) {
          this.head
            ? ((this.tail.next = t), (t.prev = this.tail), (t.next = null), (this.tail = t))
            : (this.head = this.tail = t),
            this._len++;
        }),
        (i.remove = function(t) {
          var e = t.prev,
            n = t.next;
          e ? (e.next = n) : (this.head = n),
            n ? (n.prev = e) : (this.tail = e),
            (t.next = t.prev = null),
            this._len--;
        }),
        (i.len = function() {
          return this._len;
        }),
        (i.clear = function() {
          (this.head = this.tail = null), (this._len = 0);
        });
      var r = function(t) {
          (this.value = t), this.next, this.prev;
        },
        a = function(t) {
          (this._list = new n()),
            (this._map = {}),
            (this._maxSize = t || 10),
            (this._lastRemovedEntry = null);
        },
        o = a.prototype;
      (o.put = function(t, e) {
        var n = this._list,
          i = this._map,
          a = null;
        if (null == i[t]) {
          var o = n.len(),
            s = this._lastRemovedEntry;
          if (o >= this._maxSize && o > 0) {
            var l = n.head;
            n.remove(l), delete i[l.key], (a = l.value), (this._lastRemovedEntry = l);
          }
          s ? (s.value = e) : (s = new r(e)), (s.key = t), n.insertEntry(s), (i[t] = s);
        }
        return a;
      }),
        (o.get = function(t) {
          var e = this._map[t],
            n = this._list;
          if (null != e) return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value;
        }),
        (o.clear = function() {
          this._list.clear(), (this._map = {});
        });
      var s = a;
      t.exports = s;
    },
    '1bdT': function(t, e, n) {
      var i = n('3gBT'),
        r = n('H6uX'),
        a = n('DN4a'),
        o = n('vWvF'),
        s = n('bYtY'),
        l = function(t) {
          a.call(this, t), r.call(this, t), o.call(this, t), (this.id = t.id || i());
        };
      (l.prototype = {
        type: 'element',
        name: '',
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function(t, e) {
          switch (this.draggable) {
            case 'horizontal':
              e = 0;
              break;
            case 'vertical':
              t = 0;
              break;
          }
          var n = this.transform;
          n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
            (n[4] += t),
            (n[5] += e),
            this.decomposeTransform(),
            this.dirty(!1);
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
          this.updateTransform();
        },
        traverse: function(t, e) {},
        attrKV: function(t, e) {
          if ('position' === t || 'scale' === t || 'origin' === t) {
            if (e) {
              var n = this[t];
              n || (n = this[t] = []), (n[0] = e[0]), (n[1] = e[1]);
            }
          } else this[t] = e;
        },
        hide: function() {
          (this.ignore = !0), this.__zr && this.__zr.refresh();
        },
        show: function() {
          (this.ignore = !1), this.__zr && this.__zr.refresh();
        },
        attr: function(t, e) {
          if ('string' === typeof t) this.attrKV(t, e);
          else if (s.isObject(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
          return this.dirty(!1), this;
        },
        setClipPath: function(t) {
          var e = this.__zr;
          e && t.addSelfToZr(e),
            this.clipPath && this.clipPath !== t && this.removeClipPath(),
            (this.clipPath = t),
            (t.__zr = e),
            (t.__clipTarget = this),
            this.dirty(!1);
        },
        removeClipPath: function() {
          var t = this.clipPath;
          t &&
            (t.__zr && t.removeSelfFromZr(t.__zr),
            (t.__zr = null),
            (t.__clipTarget = null),
            (this.clipPath = null),
            this.dirty(!1));
        },
        addSelfToZr: function(t) {
          this.__zr = t;
          var e = this.animators;
          if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
          this.clipPath && this.clipPath.addSelfToZr(t);
        },
        removeSelfFromZr: function(t) {
          this.__zr = null;
          var e = this.animators;
          if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
          this.clipPath && this.clipPath.removeSelfFromZr(t);
        },
      }),
        s.mixin(l, o),
        s.mixin(l, a),
        s.mixin(l, r);
      var u = l;
      t.exports = u;
    },
    '2DNl': function(t, e, n) {
      var i = n('IMiH'),
        r = n('loD1'),
        a = n('59Ip'),
        o = n('aKvl'),
        s = n('n1HI'),
        l = n('hX1E'),
        u = l.normalizeRadian,
        c = n('Sj9i'),
        h = n('hyiK'),
        d = i.CMD,
        f = 2 * Math.PI,
        p = 1e-4;
      function g(t, e) {
        return Math.abs(t - e) < p;
      }
      var v = [-1, -1, -1],
        m = [-1, -1];
      function y() {
        var t = m[0];
        (m[0] = m[1]), (m[1] = t);
      }
      function x(t, e, n, i, r, a, o, s, l, u) {
        if ((u > e && u > i && u > a && u > s) || (u < e && u < i && u < a && u < s)) return 0;
        var h = c.cubicRootAt(e, i, a, s, u, v);
        if (0 === h) return 0;
        for (var d, f, p = 0, g = -1, x = 0; x < h; x++) {
          var _ = v[x],
            b = 0 === _ || 1 === _ ? 0.5 : 1,
            w = c.cubicAt(t, n, r, o, _);
          w < l ||
            (g < 0 &&
              ((g = c.cubicExtrema(e, i, a, s, m)),
              m[1] < m[0] && g > 1 && y(),
              (d = c.cubicAt(e, i, a, s, m[0])),
              g > 1 && (f = c.cubicAt(e, i, a, s, m[1]))),
            2 === g
              ? _ < m[0]
                ? (p += d < e ? b : -b)
                : _ < m[1]
                ? (p += f < d ? b : -b)
                : (p += s < f ? b : -b)
              : _ < m[0]
              ? (p += d < e ? b : -b)
              : (p += s < d ? b : -b));
        }
        return p;
      }
      function _(t, e, n, i, r, a, o, s) {
        if ((s > e && s > i && s > a) || (s < e && s < i && s < a)) return 0;
        var l = c.quadraticRootAt(e, i, a, s, v);
        if (0 === l) return 0;
        var u = c.quadraticExtremum(e, i, a);
        if (u >= 0 && u <= 1) {
          for (var h = 0, d = c.quadraticAt(e, i, a, u), f = 0; f < l; f++) {
            var p = 0 === v[f] || 1 === v[f] ? 0.5 : 1,
              g = c.quadraticAt(t, n, r, v[f]);
            g < o || (v[f] < u ? (h += d < e ? p : -p) : (h += a < d ? p : -p));
          }
          return h;
        }
        (p = 0 === v[0] || 1 === v[0] ? 0.5 : 1), (g = c.quadraticAt(t, n, r, v[0]));
        return g < o ? 0 : a < e ? p : -p;
      }
      function b(t, e, n, i, r, a, o, s) {
        if (((s -= e), s > n || s < -n)) return 0;
        var l = Math.sqrt(n * n - s * s);
        (v[0] = -l), (v[1] = l);
        var c = Math.abs(i - r);
        if (c < 1e-4) return 0;
        if (c % f < 1e-4) {
          (i = 0), (r = f);
          var h = a ? 1 : -1;
          return o >= v[0] + t && o <= v[1] + t ? h : 0;
        }
        if (a) {
          l = i;
          (i = u(r)), (r = u(l));
        } else (i = u(i)), (r = u(r));
        i > r && (r += f);
        for (var d = 0, p = 0; p < 2; p++) {
          var g = v[p];
          if (g + t > o) {
            var m = Math.atan2(s, g);
            h = a ? 1 : -1;
            m < 0 && (m = f + m),
              ((m >= i && m <= r) || (m + f >= i && m + f <= r)) &&
                (m > Math.PI / 2 && m < 1.5 * Math.PI && (h = -h), (d += h));
          }
        }
        return d;
      }
      function w(t, e, n, i, l) {
        for (var u = 0, c = 0, f = 0, p = 0, v = 0, m = 0; m < t.length; ) {
          var y = t[m++];
          switch (
            (y === d.M && m > 1 && (n || (u += h(c, f, p, v, i, l))),
            1 === m && ((c = t[m]), (f = t[m + 1]), (p = c), (v = f)),
            y)
          ) {
            case d.M:
              (p = t[m++]), (v = t[m++]), (c = p), (f = v);
              break;
            case d.L:
              if (n) {
                if (r.containStroke(c, f, t[m], t[m + 1], e, i, l)) return !0;
              } else u += h(c, f, t[m], t[m + 1], i, l) || 0;
              (c = t[m++]), (f = t[m++]);
              break;
            case d.C:
              if (n) {
                if (a.containStroke(c, f, t[m++], t[m++], t[m++], t[m++], t[m], t[m + 1], e, i, l))
                  return !0;
              } else u += x(c, f, t[m++], t[m++], t[m++], t[m++], t[m], t[m + 1], i, l) || 0;
              (c = t[m++]), (f = t[m++]);
              break;
            case d.Q:
              if (n) {
                if (o.containStroke(c, f, t[m++], t[m++], t[m], t[m + 1], e, i, l)) return !0;
              } else u += _(c, f, t[m++], t[m++], t[m], t[m + 1], i, l) || 0;
              (c = t[m++]), (f = t[m++]);
              break;
            case d.A:
              var w = t[m++],
                S = t[m++],
                M = t[m++],
                T = t[m++],
                C = t[m++],
                I = t[m++];
              m += 1;
              var k = 1 - t[m++],
                A = Math.cos(C) * M + w,
                D = Math.sin(C) * T + S;
              m > 1 ? (u += h(c, f, A, D, i, l)) : ((p = A), (v = D));
              var O = ((i - w) * T) / M + w;
              if (n) {
                if (s.containStroke(w, S, T, C, C + I, k, e, O, l)) return !0;
              } else u += b(w, S, T, C, C + I, k, O, l);
              (c = Math.cos(C + I) * M + w), (f = Math.sin(C + I) * T + S);
              break;
            case d.R:
              (p = c = t[m++]), (v = f = t[m++]);
              var P = t[m++],
                E = t[m++];
              (A = p + P), (D = v + E);
              if (n) {
                if (
                  r.containStroke(p, v, A, v, e, i, l) ||
                  r.containStroke(A, v, A, D, e, i, l) ||
                  r.containStroke(A, D, p, D, e, i, l) ||
                  r.containStroke(p, D, p, v, e, i, l)
                )
                  return !0;
              } else (u += h(A, v, A, D, i, l)), (u += h(p, D, p, v, i, l));
              break;
            case d.Z:
              if (n) {
                if (r.containStroke(c, f, p, v, e, i, l)) return !0;
              } else u += h(c, f, p, v, i, l);
              (c = p), (f = v);
              break;
          }
        }
        return n || g(f, v) || (u += h(c, f, p, v, i, l) || 0), 0 !== u;
      }
      function S(t, e, n) {
        return w(t, 0, !1, e, n);
      }
      function M(t, e, n, i) {
        return w(t, e, !0, n, i);
      }
      (e.contain = S), (e.containStroke = M);
    },
    '2fw6': function(t, e, n) {
      var i = n('y+Vt'),
        r = i.extend({
          type: 'circle',
          shape: { cx: 0, cy: 0, r: 0 },
          buildPath: function(t, e, n) {
            n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
          },
        });
      t.exports = r;
    },
    '3C/r': function(t, e) {
      var n = function(t, e) {
        (this.image = t), (this.repeat = e), (this.type = 'pattern');
      };
      n.prototype.getCanvasPattern = function(t) {
        return t.createPattern(this.image, this.repeat || 'repeat');
      };
      var i = n;
      t.exports = i;
    },
    '3LNs': function(t, e, n) {
      var i = n('bYtY'),
        r = n('Yl7c'),
        a = n('IwbS'),
        o = n('zTMp'),
        s = n('YH21'),
        l = n('iLNv'),
        u = n('4NO4'),
        c = u.makeInner,
        h = c(),
        d = i.clone,
        f = i.bind;
      function p() {}
      function g(t, e, n, i) {
        v(h(n).lastProp, i) ||
          ((h(n).lastProp = i), e ? a.updateProps(n, i, t) : (n.stopAnimation(), n.attr(i)));
      }
      function v(t, e) {
        if (i.isObject(t) && i.isObject(e)) {
          var n = !0;
          return (
            i.each(e, function(e, i) {
              n = n && v(t[i], e);
            }),
            !!n
          );
        }
        return t === e;
      }
      function m(t, e) {
        t[e.get('label.show') ? 'show' : 'hide']();
      }
      function y(t) {
        return { position: t.position.slice(), rotation: t.rotation || 0 };
      }
      function x(t, e, n) {
        var i = e.get('z'),
          r = e.get('zlevel');
        t &&
          t.traverse(function(t) {
            'group' !== t.type &&
              (null != i && (t.z = i), null != r && (t.zlevel = r), (t.silent = n));
          });
      }
      (p.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function(t, e, n, r) {
          var o = e.get('value'),
            s = e.get('status');
          if (
            ((this._axisModel = t),
            (this._axisPointerModel = e),
            (this._api = n),
            r || this._lastValue !== o || this._lastStatus !== s)
          ) {
            (this._lastValue = o), (this._lastStatus = s);
            var l = this._group,
              u = this._handle;
            if (!s || 'hide' === s) return l && l.hide(), void (u && u.hide());
            l && l.show(), u && u.show();
            var c = {};
            this.makeElOption(c, o, t, e, n);
            var h = c.graphicKey;
            h !== this._lastGraphicKey && this.clear(n), (this._lastGraphicKey = h);
            var d = (this._moveAnimation = this.determineAnimation(t, e));
            if (l) {
              var f = i.curry(g, e, d);
              this.updatePointerEl(l, c, f, e), this.updateLabelEl(l, c, f, e);
            } else
              (l = this._group = new a.Group()),
                this.createPointerEl(l, c, t, e),
                this.createLabelEl(l, c, t, e),
                n.getZr().add(l);
            x(l, e, !0), this._renderHandle(o);
          }
        },
        remove: function(t) {
          this.clear(t);
        },
        dispose: function(t) {
          this.clear(t);
        },
        determineAnimation: function(t, e) {
          var n = e.get('animation'),
            i = t.axis,
            r = 'category' === i.type,
            a = e.get('snap');
          if (!a && !r) return !1;
          if ('auto' === n || null == n) {
            var s = this.animationThreshold;
            if (r && i.getBandWidth() > s) return !0;
            if (a) {
              var l = o.getAxisInfo(t).seriesDataCount,
                u = i.getExtent();
              return Math.abs(u[0] - u[1]) / l > s;
            }
            return !1;
          }
          return !0 === n;
        },
        makeElOption: function(t, e, n, i, r) {},
        createPointerEl: function(t, e, n, i) {
          var r = e.pointer;
          if (r) {
            var o = (h(t).pointerEl = new a[r.type](d(e.pointer)));
            t.add(o);
          }
        },
        createLabelEl: function(t, e, n, i) {
          if (e.label) {
            var r = (h(t).labelEl = new a.Rect(d(e.label)));
            t.add(r), m(r, i);
          }
        },
        updatePointerEl: function(t, e, n) {
          var i = h(t).pointerEl;
          i && e.pointer && (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }));
        },
        updateLabelEl: function(t, e, n, i) {
          var r = h(t).labelEl;
          r &&
            (r.setStyle(e.label.style),
            n(r, { shape: e.label.shape, position: e.label.position }),
            m(r, i));
        },
        _renderHandle: function(t) {
          if (!this._dragging && this.updateHandleTransform) {
            var e,
              n = this._axisPointerModel,
              r = this._api.getZr(),
              o = this._handle,
              u = n.getModel('handle'),
              c = n.get('status');
            if (!u.get('show') || !c || 'hide' === c)
              return o && r.remove(o), void (this._handle = null);
            this._handle ||
              ((e = !0),
              (o = this._handle = a.createIcon(u.get('icon'), {
                cursor: 'move',
                draggable: !0,
                onmousemove: function(t) {
                  s.stop(t.event);
                },
                onmousedown: f(this._onHandleDragMove, this, 0, 0),
                drift: f(this._onHandleDragMove, this),
                ondragend: f(this._onHandleDragEnd, this),
              })),
              r.add(o)),
              x(o, n, !1);
            var h = [
              'color',
              'borderColor',
              'borderWidth',
              'opacity',
              'shadowColor',
              'shadowBlur',
              'shadowOffsetX',
              'shadowOffsetY',
            ];
            o.setStyle(u.getItemStyle(null, h));
            var d = u.get('size');
            i.isArray(d) || (d = [d, d]),
              o.attr('scale', [d[0] / 2, d[1] / 2]),
              l.createOrUpdate(this, '_doDispatchAxisPointer', u.get('throttle') || 0, 'fixRate'),
              this._moveHandleToValue(t, e);
          }
        },
        _moveHandleToValue: function(t, e) {
          g(
            this._axisPointerModel,
            !e && this._moveAnimation,
            this._handle,
            y(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)),
          );
        },
        _onHandleDragMove: function(t, e) {
          var n = this._handle;
          if (n) {
            this._dragging = !0;
            var i = this.updateHandleTransform(
              y(n),
              [t, e],
              this._axisModel,
              this._axisPointerModel,
            );
            (this._payloadInfo = i),
              n.stopAnimation(),
              n.attr(y(i)),
              (h(n).lastProp = null),
              this._doDispatchAxisPointer();
          }
        },
        _doDispatchAxisPointer: function() {
          var t = this._handle;
          if (t) {
            var e = this._payloadInfo,
              n = this._axisModel;
            this._api.dispatchAction({
              type: 'updateAxisPointer',
              x: e.cursorPoint[0],
              y: e.cursorPoint[1],
              tooltipOption: e.tooltipOption,
              axesInfo: [{ axisDim: n.axis.dim, axisIndex: n.componentIndex }],
            });
          }
        },
        _onHandleDragEnd: function(t) {
          this._dragging = !1;
          var e = this._handle;
          if (e) {
            var n = this._axisPointerModel.get('value');
            this._moveHandleToValue(n), this._api.dispatchAction({ type: 'hideTip' });
          }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function(t) {
          (this._lastValue = null), (this._lastStatus = null);
          var e = t.getZr(),
            n = this._group,
            i = this._handle;
          e &&
            n &&
            ((this._lastGraphicKey = null),
            n && e.remove(n),
            i && e.remove(i),
            (this._group = null),
            (this._handle = null),
            (this._payloadInfo = null));
        },
        doClear: function() {},
        buildLabel: function(t, e, n) {
          return (n = n || 0), { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
        },
      }),
        (p.prototype.constructor = p),
        r.enableClassExtend(p);
      var _ = p;
      t.exports = _;
    },
    '3e3G': function(t, e, n) {
      var i = n('bYtY'),
        r = n('QuXc'),
        a = function(t, e, n, i, a) {
          (this.x = null == t ? 0.5 : t),
            (this.y = null == e ? 0.5 : e),
            (this.r = null == n ? 0.5 : n),
            (this.type = 'radial'),
            (this.global = a || !1),
            r.call(this, i);
        };
      (a.prototype = { constructor: a }), i.inherits(a, r);
      var o = a;
      t.exports = o;
    },
    '3gBT': function(t, e) {
      var n = 2311;
      function i() {
        return n++;
      }
      t.exports = i;
    },
    '3hzK': function(t, e) {
      var n = {
        getBoxLayoutParams: function() {
          return {
            left: this.get('left'),
            top: this.get('top'),
            right: this.get('right'),
            bottom: this.get('bottom'),
            width: this.get('width'),
            height: this.get('height'),
          };
        },
      };
      t.exports = n;
    },
    '3yNQ': function(t, e, n) {
      'use strict';
      const i = {
        _handleResize(t) {
          const e = t.target || t.srcElement,
            n = e.__resizeTrigger__;
          if (n) {
            const e = n.__z_resizeListeners;
            if (e) {
              const n = e.length;
              for (let i = 0; i < n; i += 1) {
                const n = e[i],
                  r = n.handler,
                  a = n.context;
                r.apply(a, [t]);
              }
            }
          }
        },
        _removeHandler(t, e, n) {
          const i = t.__z_resizeListeners;
          if (i) {
            const t = i.length;
            for (let r = 0; r < t; r += 1) {
              const t = i[r];
              if (t.handler === e && t.context === n) return void i.splice(r, 1);
            }
          }
        },
        _createResizeTrigger(t) {
          const e = document.createElement('object');
          return (
            e.setAttribute(
              'style',
              'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;opacity: 0; pointer-events: none; z-index: -1;',
            ),
            (e.onload = i._handleObjectLoad),
            (e.type = 'text/html'),
            t.appendChild(e),
            (e.data = 'about:blank'),
            e
          );
        },
        _handleObjectLoad() {
          (this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__),
            this.contentDocument.defaultView.addEventListener('resize', i._handleResize);
        },
      };
      document.attachEvent
        ? ((i.on = (t, e, n) => {
            let r = t.__z_resizeListeners;
            r ||
              ((r = []),
              (t.__z_resizeListeners = r),
              (t.__resizeTrigger__ = t),
              t.attachEvent('onresize', i._handleResize)),
              r.push({ handler: e, context: n });
          }),
          (i.off = (t, e, n) => {
            const r = t.__z_resizeListeners;
            r &&
              (i._removeHandler(t, e, n),
              0 === r.length &&
                (t.detachEvent('onresize', i._handleResize), delete t.__z_resizeListeners));
          }))
        : ((i.on = (t, e, n) => {
            let r = t.__z_resizeListeners;
            if (!r) {
              (r = []),
                (t.__z_resizeListeners = r),
                'static' === getComputedStyle(t, null).position && (t.style.position = 'relative');
              const e = i._createResizeTrigger(t);
              (t.__resizeTrigger__ = e), (e.__resizeElement__ = t);
            }
            r.push({ handler: e, context: n });
          }),
          (i.off = (t, e, n) => {
            const r = t.__z_resizeListeners;
            if (r && (i._removeHandler(t, e, n), 0 === r.length)) {
              const e = t.__resizeTrigger__;
              e &&
                (e.contentDocument.defaultView.removeEventListener('resize', i._handleResize),
                t.removeChild(e),
                delete t.__resizeTrigger__),
                delete t.__z_resizeListeners;
            }
          })),
        (e['a'] = i);
    },
    '4HMb': function(t, e, n) {
      var i = n('bYtY'),
        r = n('6GrX'),
        a = n('4NO4'),
        o = a.makeInner,
        s = n('aX7z'),
        l = s.makeLabelFormatter,
        u = s.getOptionCategoryInterval,
        c = s.shouldShowAllLabels,
        h = o();
      function d(t) {
        return 'category' === t.type ? p(t) : m(t);
      }
      function f(t, e) {
        return 'category' === t.type ? v(t, e) : { ticks: t.scale.getTicks() };
      }
      function p(t) {
        var e = t.getLabelModel(),
          n = g(t, e);
        return !e.get('show') || t.scale.isBlank()
          ? { labels: [], labelCategoryInterval: n.labelCategoryInterval }
          : n;
      }
      function g(t, e) {
        var n,
          r,
          a = y(t, 'labels'),
          o = u(e),
          s = x(a, o);
        return (
          s ||
          (i.isFunction(o) ? (n = T(t, o)) : ((r = 'auto' === o ? b(t) : o), (n = M(t, r))),
          _(a, o, { labels: n, labelCategoryInterval: r }))
        );
      }
      function v(t, e) {
        var n,
          r,
          a = y(t, 'ticks'),
          o = u(e),
          s = x(a, o);
        if (s) return s;
        if (((e.get('show') && !t.scale.isBlank()) || (n = []), i.isFunction(o))) n = T(t, o, !0);
        else if ('auto' === o) {
          var l = g(t, t.getLabelModel());
          (r = l.labelCategoryInterval),
            (n = i.map(l.labels, function(t) {
              return t.tickValue;
            }));
        } else (r = o), (n = M(t, r, !0));
        return _(a, o, { ticks: n, tickCategoryInterval: r });
      }
      function m(t) {
        var e = t.scale.getTicks(),
          n = l(t);
        return {
          labels: i.map(e, function(e, i) {
            return { formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e };
          }),
        };
      }
      function y(t, e) {
        return h(t)[e] || (h(t)[e] = []);
      }
      function x(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
      }
      function _(t, e, n) {
        return t.push({ key: e, value: n }), n;
      }
      function b(t) {
        var e = h(t).autoInterval;
        return null != e ? e : (h(t).autoInterval = t.calculateCategoryInterval());
      }
      function w(t) {
        var e = S(t),
          n = l(t),
          i = ((e.axisRotate - e.labelRotate) / 180) * Math.PI,
          a = t.scale,
          o = a.getExtent(),
          s = a.count();
        if (o[1] - o[0] < 1) return 0;
        var u = 1;
        s > 40 && (u = Math.max(1, Math.floor(s / 40)));
        for (
          var c = o[0],
            d = t.dataToCoord(c + 1) - t.dataToCoord(c),
            f = Math.abs(d * Math.cos(i)),
            p = Math.abs(d * Math.sin(i)),
            g = 0,
            v = 0;
          c <= o[1];
          c += u
        ) {
          var m = 0,
            y = 0,
            x = r.getBoundingRect(n(c), e.font, 'center', 'top');
          (m = 1.3 * x.width),
            (y = 1.3 * x.height),
            (g = Math.max(g, m, 7)),
            (v = Math.max(v, y, 7));
        }
        var _ = g / f,
          b = v / p;
        isNaN(_) && (_ = 1 / 0), isNaN(b) && (b = 1 / 0);
        var w = Math.max(0, Math.floor(Math.min(_, b))),
          M = h(t.model),
          T = t.getExtent(),
          C = M.lastAutoInterval,
          I = M.lastTickCount;
        return (
          null != C &&
          null != I &&
          Math.abs(C - w) <= 1 &&
          Math.abs(I - s) <= 1 &&
          C > w &&
          M.axisExtend0 === T[0] &&
          M.axisExtend1 === T[1]
            ? (w = C)
            : ((M.lastTickCount = s),
              (M.lastAutoInterval = w),
              (M.axisExtend0 = T[0]),
              (M.axisExtend1 = T[1])),
          w
        );
      }
      function S(t) {
        var e = t.getLabelModel();
        return {
          axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
          labelRotate: e.get('rotate') || 0,
          font: e.getFont(),
        };
      }
      function M(t, e, n) {
        var i = l(t),
          r = t.scale,
          a = r.getExtent(),
          o = t.getLabelModel(),
          s = [],
          u = Math.max((e || 0) + 1, 1),
          h = a[0],
          d = r.count();
        0 !== h && u > 1 && d / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
        var f = c(t),
          p = o.get('showMinLabel') || f,
          g = o.get('showMaxLabel') || f;
        p && h !== a[0] && m(a[0]);
        for (var v = h; v <= a[1]; v += u) m(v);
        function m(t) {
          s.push(n ? t : { formattedLabel: i(t), rawLabel: r.getLabel(t), tickValue: t });
        }
        return g && v - u !== a[1] && m(a[1]), s;
      }
      function T(t, e, n) {
        var r = t.scale,
          a = l(t),
          o = [];
        return (
          i.each(r.getTicks(), function(t) {
            var i = r.getLabel(t);
            e(t, i) && o.push(n ? t : { formattedLabel: a(t), rawLabel: i, tickValue: t });
          }),
          o
        );
      }
      (e.createAxisLabels = d), (e.createAxisTicks = f), (e.calculateCategoryInterval = w);
    },
    '4NO4': function(t, e, n) {
      var i = n('bYtY'),
        r = n('ItGF'),
        a = i.each,
        o = i.isObject,
        s = i.isArray,
        l = 'series\0';
      function u(t) {
        return t instanceof Array ? t : null == t ? [] : [t];
      }
      function c(t, e, n) {
        if (t) {
          (t[e] = t[e] || {}),
            (t.emphasis = t.emphasis || {}),
            (t.emphasis[e] = t.emphasis[e] || {});
          for (var i = 0, r = n.length; i < r; i++) {
            var a = n[i];
            !t.emphasis[e].hasOwnProperty(a) &&
              t[e].hasOwnProperty(a) &&
              (t.emphasis[e][a] = t[e][a]);
          }
        }
      }
      var h = [
        'fontStyle',
        'fontWeight',
        'fontSize',
        'fontFamily',
        'rich',
        'tag',
        'color',
        'textBorderColor',
        'textBorderWidth',
        'width',
        'height',
        'lineHeight',
        'align',
        'verticalAlign',
        'baseline',
        'shadowColor',
        'shadowBlur',
        'shadowOffsetX',
        'shadowOffsetY',
        'textShadowColor',
        'textShadowBlur',
        'textShadowOffsetX',
        'textShadowOffsetY',
        'backgroundColor',
        'borderColor',
        'borderWidth',
        'borderRadius',
        'padding',
      ];
      function d(t) {
        return !o(t) || s(t) || t instanceof Date ? t : t.value;
      }
      function f(t) {
        return o(t) && !(t instanceof Array);
      }
      function p(t, e) {
        e = (e || []).slice();
        var n = i.map(t || [], function(t, e) {
          return { exist: t };
        });
        return (
          a(e, function(t, i) {
            if (o(t)) {
              for (var r = 0; r < n.length; r++)
                if (!n[r].option && null != t.id && n[r].exist.id === t.id + '')
                  return (n[r].option = t), void (e[i] = null);
              for (r = 0; r < n.length; r++) {
                var a = n[r].exist;
                if (
                  !n[r].option &&
                  (null == a.id || null == t.id) &&
                  null != t.name &&
                  !m(t) &&
                  !m(a) &&
                  a.name === t.name + ''
                )
                  return (n[r].option = t), void (e[i] = null);
              }
            }
          }),
          a(e, function(t, e) {
            if (o(t)) {
              for (var i = 0; i < n.length; i++) {
                var r = n[i].exist;
                if (!n[i].option && !m(r) && null == t.id) {
                  n[i].option = t;
                  break;
                }
              }
              i >= n.length && n.push({ option: t });
            }
          }),
          n
        );
      }
      function g(t) {
        var e = i.createHashMap();
        a(t, function(t, n) {
          var i = t.exist;
          i && e.set(i.id, t);
        }),
          a(t, function(t, n) {
            var r = t.option;
            i.assert(
              !r || null == r.id || !e.get(r.id) || e.get(r.id) === t,
              'id duplicates: ' + (r && r.id),
            ),
              r && null != r.id && e.set(r.id, t),
              !t.keyInfo && (t.keyInfo = {});
          }),
          a(t, function(t, n) {
            var i = t.exist,
              r = t.option,
              a = t.keyInfo;
            if (o(r)) {
              if (((a.name = null != r.name ? r.name + '' : i ? i.name : l + n), i)) a.id = i.id;
              else if (null != r.id) a.id = r.id + '';
              else {
                var s = 0;
                do {
                  a.id = '\0' + a.name + '\0' + s++;
                } while (e.get(a.id));
              }
              e.set(a.id, t);
            }
          });
      }
      function v(t) {
        var e = t.name;
        return !(!e || !e.indexOf(l));
      }
      function m(t) {
        return o(t) && t.id && 0 === (t.id + '').indexOf('\0_ec_\0');
      }
      function y(t, e) {
        var n = {},
          i = {};
        return r(t || [], n), r(e || [], i, n), [a(n), a(i)];
        function r(t, e, n) {
          for (var i = 0, r = t.length; i < r; i++)
            for (
              var a = t[i].seriesId, o = u(t[i].dataIndex), s = n && n[a], l = 0, c = o.length;
              l < c;
              l++
            ) {
              var h = o[l];
              s && s[h] ? (s[h] = null) : ((e[a] || (e[a] = {}))[h] = 1);
            }
        }
        function a(t, e) {
          var n = [];
          for (var i in t)
            if (t.hasOwnProperty(i) && null != t[i])
              if (e) n.push(+i);
              else {
                var r = a(t[i], !0);
                r.length && n.push({ seriesId: i, dataIndex: r });
              }
          return n;
        }
      }
      function x(t, e) {
        return null != e.dataIndexInside
          ? e.dataIndexInside
          : null != e.dataIndex
          ? i.isArray(e.dataIndex)
            ? i.map(e.dataIndex, function(e) {
                return t.indexOfRawIndex(e);
              })
            : t.indexOfRawIndex(e.dataIndex)
          : null != e.name
          ? i.isArray(e.name)
            ? i.map(e.name, function(e) {
                return t.indexOfName(e);
              })
            : t.indexOfName(e.name)
          : void 0;
      }
      function _() {
        var t = '__\0ec_inner_' + b++ + '_' + Math.random().toFixed(5);
        return function(e) {
          return e[t] || (e[t] = {});
        };
      }
      var b = 0;
      function w(t, e, n) {
        if (i.isString(e)) {
          var r = {};
          (r[e + 'Index'] = 0), (e = r);
        }
        var o = n && n.defaultMainType;
        !o || S(e, o + 'Index') || S(e, o + 'Id') || S(e, o + 'Name') || (e[o + 'Index'] = 0);
        var s = {};
        return (
          a(e, function(r, a) {
            r = e[a];
            if ('dataIndex' !== a && 'dataIndexInside' !== a) {
              var o = a.match(/^(\w+)(Index|Id|Name)$/) || [],
                l = o[1],
                u = (o[2] || '').toLowerCase();
              if (
                !(
                  !l ||
                  !u ||
                  null == r ||
                  ('index' === u && 'none' === r) ||
                  (n && n.includeMainTypes && i.indexOf(n.includeMainTypes, l) < 0)
                )
              ) {
                var c = { mainType: l };
                ('index' === u && 'all' === r) || (c[u] = r);
                var h = t.queryComponents(c);
                (s[l + 'Models'] = h), (s[l + 'Model'] = h[0]);
              }
            } else s[a] = r;
          }),
          s
        );
      }
      function S(t, e) {
        return t && t.hasOwnProperty(e);
      }
      function M(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : (t[e] = n);
      }
      function T(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e];
      }
      function C(t) {
        return 'auto' === t ? (r.domSupported ? 'html' : 'richText') : t || 'html';
      }
      function I(t, e) {
        var n = i.createHashMap(),
          r = [];
        return (
          i.each(t, function(t) {
            var i = e(t);
            (n.get(i) || (r.push(i), n.set(i, []))).push(t);
          }),
          { keys: r, buckets: n }
        );
      }
      (e.normalizeToArray = u),
        (e.defaultEmphasis = c),
        (e.TEXT_STYLE_OPTIONS = h),
        (e.getDataItemValue = d),
        (e.isDataItemOption = f),
        (e.mappingToExists = p),
        (e.makeIdAndName = g),
        (e.isNameSpecified = v),
        (e.isIdInner = m),
        (e.compressBatches = y),
        (e.queryDataIndex = x),
        (e.makeInner = _),
        (e.parseFinder = w),
        (e.setAttribute = M),
        (e.getAttribute = T),
        (e.getTooltipRenderMode = C),
        (e.groupData = I);
    },
    '4NgU': function(t, e, n) {
      var i = n('Yl7c');
      function r(t) {
        (this._setting = t || {}),
          (this._extent = [1 / 0, -1 / 0]),
          (this._interval = 0),
          this.init && this.init.apply(this, arguments);
      }
      (r.prototype.parse = function(t) {
        return t;
      }),
        (r.prototype.getSetting = function(t) {
          return this._setting[t];
        }),
        (r.prototype.contain = function(t) {
          var e = this._extent;
          return t >= e[0] && t <= e[1];
        }),
        (r.prototype.normalize = function(t) {
          var e = this._extent;
          return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
        }),
        (r.prototype.scale = function(t) {
          var e = this._extent;
          return t * (e[1] - e[0]) + e[0];
        }),
        (r.prototype.unionExtent = function(t) {
          var e = this._extent;
          t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
        }),
        (r.prototype.unionExtentFromData = function(t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }),
        (r.prototype.getExtent = function() {
          return this._extent.slice();
        }),
        (r.prototype.setExtent = function(t, e) {
          var n = this._extent;
          isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
        }),
        (r.prototype.isBlank = function() {
          return this._isBlank;
        }),
        (r.prototype.setBlank = function(t) {
          this._isBlank = t;
        }),
        (r.prototype.getLabel = null),
        i.enableClassExtend(r),
        i.enableClassManagement(r, { registerWhenExtend: !0 });
      var a = r;
      t.exports = a;
    },
    '4fz+': function(t, e, n) {
      var i = n('bYtY'),
        r = n('1bdT'),
        a = n('mFDi'),
        o = function(t) {
          for (var e in ((t = t || {}), r.call(this, t), t))
            t.hasOwnProperty(e) && (this[e] = t[e]);
          (this._children = []), (this.__storage = null), (this.__dirty = !0);
        };
      (o.prototype = {
        constructor: o,
        isGroup: !0,
        type: 'group',
        silent: !1,
        children: function() {
          return this._children.slice();
        },
        childAt: function(t) {
          return this._children[t];
        },
        childOfName: function(t) {
          for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
        },
        childCount: function() {
          return this._children.length;
        },
        add: function(t) {
          return (
            t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
          );
        },
        addBefore: function(t, e) {
          if (t && t !== this && t.parent !== this && e && e.parent === this) {
            var n = this._children,
              i = n.indexOf(e);
            i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
          }
          return this;
        },
        _doAdd: function(t) {
          t.parent && t.parent.remove(t), (t.parent = this);
          var e = this.__storage,
            n = this.__zr;
          e &&
            e !== t.__storage &&
            (e.addToStorage(t), t instanceof o && t.addChildrenToStorage(e)),
            n && n.refresh();
        },
        remove: function(t) {
          var e = this.__zr,
            n = this.__storage,
            r = this._children,
            a = i.indexOf(r, t);
          return (
            a < 0 ||
              (r.splice(a, 1),
              (t.parent = null),
              n && (n.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(n)),
              e && e.refresh()),
            this
          );
        },
        removeAll: function() {
          var t,
            e,
            n = this._children,
            i = this.__storage;
          for (e = 0; e < n.length; e++)
            (t = n[e]),
              i && (i.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(i)),
              (t.parent = null);
          return (n.length = 0), this;
        },
        eachChild: function(t, e) {
          for (var n = this._children, i = 0; i < n.length; i++) {
            var r = n[i];
            t.call(e, r, i);
          }
          return this;
        },
        traverse: function(t, e) {
          for (var n = 0; n < this._children.length; n++) {
            var i = this._children[n];
            t.call(e, i), 'group' === i.type && i.traverse(t, e);
          }
          return this;
        },
        addChildrenToStorage: function(t) {
          for (var e = 0; e < this._children.length; e++) {
            var n = this._children[e];
            t.addToStorage(n), n instanceof o && n.addChildrenToStorage(t);
          }
        },
        delChildrenFromStorage: function(t) {
          for (var e = 0; e < this._children.length; e++) {
            var n = this._children[e];
            t.delFromStorage(n), n instanceof o && n.delChildrenFromStorage(t);
          }
        },
        dirty: function() {
          return (this.__dirty = !0), this.__zr && this.__zr.refresh(), this;
        },
        getBoundingRect: function(t) {
          for (
            var e = null, n = new a(0, 0, 0, 0), i = t || this._children, r = [], o = 0;
            o < i.length;
            o++
          ) {
            var s = i[o];
            if (!s.ignore && !s.invisible) {
              var l = s.getBoundingRect(),
                u = s.getLocalTransform(r);
              u
                ? (n.copy(l), n.applyTransform(u), (e = e || n.clone()), e.union(n))
                : ((e = e || l.clone()), e.union(l));
            }
          }
          return e || n;
        },
      }),
        i.inherits(o, r);
      var s = o;
      t.exports = s;
    },
    '4mN7': function(t, e, n) {
      var i = n('QBsz'),
        r = n('Sj9i'),
        a = Math.min,
        o = Math.max,
        s = Math.sin,
        l = Math.cos,
        u = 2 * Math.PI,
        c = i.create(),
        h = i.create(),
        d = i.create();
      function f(t, e, n) {
        if (0 !== t.length) {
          var i,
            r = t[0],
            s = r[0],
            l = r[0],
            u = r[1],
            c = r[1];
          for (i = 1; i < t.length; i++)
            (r = t[i]), (s = a(s, r[0])), (l = o(l, r[0])), (u = a(u, r[1])), (c = o(c, r[1]));
          (e[0] = s), (e[1] = u), (n[0] = l), (n[1] = c);
        }
      }
      function p(t, e, n, i, r, s) {
        (r[0] = a(t, n)), (r[1] = a(e, i)), (s[0] = o(t, n)), (s[1] = o(e, i));
      }
      var g = [],
        v = [];
      function m(t, e, n, i, s, l, u, c, h, d) {
        var f,
          p = r.cubicExtrema,
          m = r.cubicAt,
          y = p(t, n, s, u, g);
        for (h[0] = 1 / 0, h[1] = 1 / 0, d[0] = -1 / 0, d[1] = -1 / 0, f = 0; f < y; f++) {
          var x = m(t, n, s, u, g[f]);
          (h[0] = a(x, h[0])), (d[0] = o(x, d[0]));
        }
        for (y = p(e, i, l, c, v), f = 0; f < y; f++) {
          var _ = m(e, i, l, c, v[f]);
          (h[1] = a(_, h[1])), (d[1] = o(_, d[1]));
        }
        (h[0] = a(t, h[0])),
          (d[0] = o(t, d[0])),
          (h[0] = a(u, h[0])),
          (d[0] = o(u, d[0])),
          (h[1] = a(e, h[1])),
          (d[1] = o(e, d[1])),
          (h[1] = a(c, h[1])),
          (d[1] = o(c, d[1]));
      }
      function y(t, e, n, i, s, l, u, c) {
        var h = r.quadraticExtremum,
          d = r.quadraticAt,
          f = o(a(h(t, n, s), 1), 0),
          p = o(a(h(e, i, l), 1), 0),
          g = d(t, n, s, f),
          v = d(e, i, l, p);
        (u[0] = a(t, s, g)), (u[1] = a(e, l, v)), (c[0] = o(t, s, g)), (c[1] = o(e, l, v));
      }
      function x(t, e, n, r, a, o, f, p, g) {
        var v = i.min,
          m = i.max,
          y = Math.abs(a - o);
        if (y % u < 1e-4 && y > 1e-4)
          return (p[0] = t - n), (p[1] = e - r), (g[0] = t + n), void (g[1] = e + r);
        if (
          ((c[0] = l(a) * n + t),
          (c[1] = s(a) * r + e),
          (h[0] = l(o) * n + t),
          (h[1] = s(o) * r + e),
          v(p, c, h),
          m(g, c, h),
          (a %= u),
          a < 0 && (a += u),
          (o %= u),
          o < 0 && (o += u),
          a > o && !f ? (o += u) : a < o && f && (a += u),
          f)
        ) {
          var x = o;
          (o = a), (a = x);
        }
        for (var _ = 0; _ < o; _ += Math.PI / 2)
          _ > a && ((d[0] = l(_) * n + t), (d[1] = s(_) * r + e), v(p, d, p), m(g, d, g));
      }
      (e.fromPoints = f),
        (e.fromLine = p),
        (e.fromCubic = m),
        (e.fromQuadratic = y),
        (e.fromArc = x);
    },
    '56rv': function(t, e, n) {
      var i = n('IwbS'),
        r = n('x3X8'),
        a = r.getDefaultLabel;
      function o(t, e, n, r, o, l, u) {
        var c = n.getModel('label'),
          h = n.getModel('emphasis.label');
        i.setLabelStyle(t, e, c, h, {
          labelFetcher: o,
          labelDataIndex: l,
          defaultText: a(o.getData(), l),
          isRectText: !0,
          autoColor: r,
        }),
          s(t),
          s(e);
      }
      function s(t, e) {
        'outside' === t.textPosition && (t.textPosition = e);
      }
      e.setLabel = o;
    },
    '59Ip': function(t, e, n) {
      var i = n('Sj9i');
      function r(t, e, n, r, a, o, s, l, u, c, h) {
        if (0 === u) return !1;
        var d = u;
        if (
          (h > e + d && h > r + d && h > o + d && h > l + d) ||
          (h < e - d && h < r - d && h < o - d && h < l - d) ||
          (c > t + d && c > n + d && c > a + d && c > s + d) ||
          (c < t - d && c < n - d && c < a - d && c < s - d)
        )
          return !1;
        var f = i.cubicProjectPoint(t, e, n, r, a, o, s, l, c, h, null);
        return f <= d / 2;
      }
      e.containStroke = r;
    },
    '5GtS': function(t, e, n) {
      var i = n('sdST'),
        r = n('YXkt'),
        a = n('bYtY'),
        o = a.extend,
        s = a.isArray;
      function l(t, e, n) {
        e = (s(e) && { coordDimensions: e }) || o({}, e);
        var a = t.getSource(),
          l = i(a, e),
          u = new r(l, t);
        return u.initData(a, n), u;
      }
      t.exports = l;
    },
    '5Hur': function(t, e, n) {
      var i = n('4NO4'),
        r = i.makeInner,
        a = i.normalizeToArray,
        o = r();
      function s(t, e) {
        for (var n = t.length, i = 0; i < n; i++) if (t[i].length > e) return t[i];
        return t[n - 1];
      }
      var l = {
        clearColorPalette: function() {
          (o(this).colorIdx = 0), (o(this).colorNameMap = {});
        },
        getColorFromPalette: function(t, e, n) {
          e = e || this;
          var i = o(e),
            r = i.colorIdx || 0,
            l = (i.colorNameMap = i.colorNameMap || {});
          if (l.hasOwnProperty(t)) return l[t];
          var u = a(this.get('color', !0)),
            c = this.get('colorLayer', !0),
            h = null != n && c ? s(c, n) : u;
          if (((h = h || u), h && h.length)) {
            var d = h[r];
            return t && (l[t] = d), (i.colorIdx = (r + 1) % h.length), d;
          }
        },
      };
      t.exports = l;
    },
    '5NHt': function(t, e, n) {
      n('aTJb'), n('OlYY'), n('fc+c'), n('N5BQ'), n('IyUQ'), n('LBfv'), n('noeP');
    },
    '5V6a': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      var i = n('LvDl');
      function r(t, e) {
        if (!t || !Object(i['isNumber'])(t)) return 0;
        const n = ('' + t).split('.'),
          r = n[0];
        if (r.length < 6) return t;
        if (r.length >= 6 && r.length <= 8) {
          const n = r.substring(r.length - 4, r.length - 4 + e);
          return parseFloat(`${parseInt(t / 1e4)}.${n}`) + '\u4e07';
        }
        if (r.length > 8) {
          const n = r.substring(r.length - 8, r.length - 8 + e);
          return parseFloat(`${parseInt(t / 1e8)}.${n}`) + '\u4ebf';
        }
      }
    },
    '62sa': function(t, e, n) {
      var i = n('bYtY'),
        r = n('4NO4'),
        a = r.makeInner,
        o = n('zTMp'),
        s = n('Ez2D'),
        l = i.each,
        u = i.curry,
        c = a();
      function h(t, e, n) {
        var r = t.currTrigger,
          a = [t.x, t.y],
          o = t,
          c = t.dispatchAction || i.bind(n.dispatchAction, n),
          h = e.getComponent('axisPointer').coordSysAxesInfo;
        if (h) {
          b(a) && (a = s({ seriesIndex: o.seriesIndex, dataIndex: o.dataIndex }, e).point);
          var f = b(a),
            w = o.axesInfo,
            S = h.axesInfo,
            M = 'leave' === r || b(a),
            T = {},
            C = {},
            I = { list: [], map: {} },
            k = { showPointer: u(p, C), showTooltip: u(g, I) };
          l(h.coordSysMap, function(t, e) {
            var n = f || t.containPoint(a);
            l(h.coordSysAxesInfo[e], function(t, e) {
              var i = t.axis,
                r = x(w, t);
              if (!M && n && (!w || r)) {
                var o = r && r.value;
                null != o || f || (o = i.pointToData(a)), null != o && d(t, o, k, !1, T);
              }
            });
          });
          var A = {};
          return (
            l(S, function(t, e) {
              var n = t.linkGroup;
              n &&
                !C[e] &&
                l(n.axesInfo, function(e, i) {
                  var r = C[i];
                  if (e !== t && r) {
                    var a = r.value;
                    n.mapper && (a = t.axis.scale.parse(n.mapper(a, _(e), _(t)))), (A[t.key] = a);
                  }
                });
            }),
            l(A, function(t, e) {
              d(S[e], t, k, !0, T);
            }),
            v(C, S, T),
            m(I, a, t, c),
            y(S, c, n),
            T
          );
        }
      }
      function d(t, e, n, r, a) {
        var o = t.axis;
        if (!o.scale.isBlank() && o.containData(e))
          if (t.involveSeries) {
            var s = f(e, t),
              l = s.payloadBatch,
              u = s.snapToValue;
            l[0] && null == a.seriesIndex && i.extend(a, l[0]),
              !r && t.snap && o.containData(u) && null != u && (e = u),
              n.showPointer(t, e, l, a),
              n.showTooltip(t, s, u);
          } else n.showPointer(t, e);
      }
      function f(t, e) {
        var n = e.axis,
          i = n.dim,
          r = t,
          a = [],
          o = Number.MAX_VALUE,
          s = -1;
        return (
          l(e.seriesModels, function(e, u) {
            var c,
              h,
              d = e.getData().mapDimension(i, !0);
            if (e.getAxisTooltipData) {
              var f = e.getAxisTooltipData(d, t, n);
              (h = f.dataIndices), (c = f.nestestValue);
            } else {
              if (
                ((h = e.getData().indicesOfNearest(d[0], t, 'category' === n.type ? 0.5 : null)),
                !h.length)
              )
                return;
              c = e.getData().get(d[0], h[0]);
            }
            if (null != c && isFinite(c)) {
              var p = t - c,
                g = Math.abs(p);
              g <= o &&
                ((g < o || (p >= 0 && s < 0)) && ((o = g), (s = p), (r = c), (a.length = 0)),
                l(h, function(t) {
                  a.push({
                    seriesIndex: e.seriesIndex,
                    dataIndexInside: t,
                    dataIndex: e.getData().getRawIndex(t),
                  });
                }));
            }
          }),
          { payloadBatch: a, snapToValue: r }
        );
      }
      function p(t, e, n, i) {
        t[e.key] = { value: n, payloadBatch: i };
      }
      function g(t, e, n, i) {
        var r = n.payloadBatch,
          a = e.axis,
          s = a.model,
          l = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
          var u = e.coordSys.model,
            c = o.makeKey(u),
            h = t.map[c];
          h ||
            ((h = t.map[c] = {
              coordSysId: u.id,
              coordSysIndex: u.componentIndex,
              coordSysType: u.type,
              coordSysMainType: u.mainType,
              dataByAxis: [],
            }),
            t.list.push(h)),
            h.dataByAxis.push({
              axisDim: a.dim,
              axisIndex: s.componentIndex,
              axisType: s.type,
              axisId: s.id,
              value: i,
              valueLabelOpt: {
                precision: l.get('label.precision'),
                formatter: l.get('label.formatter'),
              },
              seriesDataIndices: r.slice(),
            });
        }
      }
      function v(t, e, n) {
        var i = (n.axesInfo = []);
        l(e, function(e, n) {
          var r = e.axisPointerModel.option,
            a = t[n];
          a
            ? (!e.useHandle && (r.status = 'show'),
              (r.value = a.value),
              (r.seriesDataIndices = (a.payloadBatch || []).slice()))
            : !e.useHandle && (r.status = 'hide'),
            'show' === r.status &&
              i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value,
              });
        });
      }
      function m(t, e, n, i) {
        if (!b(e) && t.list.length) {
          var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
          i({
            type: 'showTip',
            escapeConnect: !0,
            x: e[0],
            y: e[1],
            tooltipOption: n.tooltipOption,
            position: n.position,
            dataIndexInside: r.dataIndexInside,
            dataIndex: r.dataIndex,
            seriesIndex: r.seriesIndex,
            dataByCoordSys: t.list,
          });
        } else i({ type: 'hideTip' });
      }
      function y(t, e, n) {
        var r = n.getZr(),
          a = 'axisPointerLastHighlights',
          o = c(r)[a] || {},
          s = (c(r)[a] = {});
        l(t, function(t, e) {
          var n = t.axisPointerModel.option;
          'show' === n.status &&
            l(n.seriesDataIndices, function(t) {
              var e = t.seriesIndex + ' | ' + t.dataIndex;
              s[e] = t;
            });
        });
        var u = [],
          h = [];
        i.each(o, function(t, e) {
          !s[e] && h.push(t);
        }),
          i.each(s, function(t, e) {
            !o[e] && u.push(t);
          }),
          h.length && n.dispatchAction({ type: 'downplay', escapeConnect: !0, batch: h }),
          u.length && n.dispatchAction({ type: 'highlight', escapeConnect: !0, batch: u });
      }
      function x(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
          var i = t[n];
          if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;
        }
      }
      function _(t) {
        var e = t.axis.model,
          n = {},
          i = (n.axisDim = t.axis.dim);
        return (
          (n.axisIndex = n[i + 'AxisIndex'] = e.componentIndex),
          (n.axisName = n[i + 'AxisName'] = e.name),
          (n.axisId = n[i + 'AxisId'] = e.id),
          n
        );
      }
      function b(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
      }
      t.exports = h;
    },
    '6GrX': function(t, e, n) {
      var i = n('mFDi'),
        r = n('Xnb7'),
        a = n('bYtY'),
        o = a.getContext,
        s = a.extend,
        l = a.retrieve2,
        u = a.retrieve3,
        c = a.trim,
        h = {},
        d = 0,
        f = 5e3,
        p = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
        g = '12px sans-serif',
        v = {};
      function m(t, e) {
        v[t] = e;
      }
      function y(t, e) {
        e = e || g;
        var n = t + ':' + e;
        if (h[n]) return h[n];
        for (var i = (t + '').split('\n'), r = 0, a = 0, o = i.length; a < o; a++)
          r = Math.max(O(i[a], e).width, r);
        return d > f && ((d = 0), (h = {})), d++, (h[n] = r), r;
      }
      function x(t, e, n, i, r, a, o, s) {
        return o ? b(t, e, n, i, r, a, o, s) : _(t, e, n, i, r, a, s);
      }
      function _(t, e, n, r, a, o, s) {
        var l = P(t, e, a, o, s),
          u = y(t, e);
        a && (u += a[1] + a[3]);
        var c = l.outerHeight,
          h = w(0, u, n),
          d = S(0, c, r),
          f = new i(h, d, u, c);
        return (f.lineHeight = l.lineHeight), f;
      }
      function b(t, e, n, r, a, o, s, l) {
        var u = E(t, {
            rich: s,
            truncate: l,
            font: e,
            textAlign: n,
            textPadding: a,
            textLineHeight: o,
          }),
          c = u.outerWidth,
          h = u.outerHeight,
          d = w(0, c, n),
          f = S(0, h, r);
        return new i(d, f, c, h);
      }
      function w(t, e, n) {
        return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t;
      }
      function S(t, e, n) {
        return 'middle' === n ? (t -= e / 2) : 'bottom' === n && (t -= e), t;
      }
      function M(t, e, n) {
        var i = e.textPosition,
          r = e.textDistance,
          a = n.x,
          o = n.y;
        r = r || 0;
        var s = n.height,
          l = n.width,
          u = s / 2,
          c = 'left',
          h = 'top';
        switch (i) {
          case 'left':
            (a -= r), (o += u), (c = 'right'), (h = 'middle');
            break;
          case 'right':
            (a += r + l), (o += u), (h = 'middle');
            break;
          case 'top':
            (a += l / 2), (o -= r), (c = 'center'), (h = 'bottom');
            break;
          case 'bottom':
            (a += l / 2), (o += s + r), (c = 'center');
            break;
          case 'inside':
            (a += l / 2), (o += u), (c = 'center'), (h = 'middle');
            break;
          case 'insideLeft':
            (a += r), (o += u), (h = 'middle');
            break;
          case 'insideRight':
            (a += l - r), (o += u), (c = 'right'), (h = 'middle');
            break;
          case 'insideTop':
            (a += l / 2), (o += r), (c = 'center');
            break;
          case 'insideBottom':
            (a += l / 2), (o += s - r), (c = 'center'), (h = 'bottom');
            break;
          case 'insideTopLeft':
            (a += r), (o += r);
            break;
          case 'insideTopRight':
            (a += l - r), (o += r), (c = 'right');
            break;
          case 'insideBottomLeft':
            (a += r), (o += s - r), (h = 'bottom');
            break;
          case 'insideBottomRight':
            (a += l - r), (o += s - r), (c = 'right'), (h = 'bottom');
            break;
        }
        return (t = t || {}), (t.x = a), (t.y = o), (t.textAlign = c), (t.textVerticalAlign = h), t;
      }
      function T(t, e, n) {
        var i = { textPosition: t, textDistance: n };
        return M({}, i, e);
      }
      function C(t, e, n, i, r) {
        if (!e) return '';
        var a = (t + '').split('\n');
        r = I(e, n, i, r);
        for (var o = 0, s = a.length; o < s; o++) a[o] = k(a[o], r);
        return a.join('\n');
      }
      function I(t, e, n, i) {
        (i = s({}, i)), (i.font = e);
        n = l(n, '...');
        i.maxIterations = l(i.maxIterations, 2);
        var r = (i.minChar = l(i.minChar, 0));
        i.cnCharWidth = y('\u56fd', e);
        var a = (i.ascCharWidth = y('a', e));
        i.placeholder = l(i.placeholder, '');
        for (var o = (t = Math.max(0, t - 1)), u = 0; u < r && o >= a; u++) o -= a;
        var c = y(n, e);
        return (
          c > o && ((n = ''), (c = 0)),
          (o = t - c),
          (i.ellipsis = n),
          (i.ellipsisWidth = c),
          (i.contentWidth = o),
          (i.containerWidth = t),
          i
        );
      }
      function k(t, e) {
        var n = e.containerWidth,
          i = e.font,
          r = e.contentWidth;
        if (!n) return '';
        var a = y(t, i);
        if (a <= n) return t;
        for (var o = 0; ; o++) {
          if (a <= r || o >= e.maxIterations) {
            t += e.ellipsis;
            break;
          }
          var s =
            0 === o
              ? A(t, r, e.ascCharWidth, e.cnCharWidth)
              : a > 0
              ? Math.floor((t.length * r) / a)
              : 0;
          (t = t.substr(0, s)), (a = y(t, i));
        }
        return '' === t && (t = e.placeholder), t;
      }
      function A(t, e, n, i) {
        for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
          var s = t.charCodeAt(a);
          r += 0 <= s && s <= 127 ? n : i;
        }
        return a;
      }
      function D(t) {
        return y('\u56fd', t);
      }
      function O(t, e) {
        return v.measureText(t, e);
      }
      function P(t, e, n, i, r) {
        null != t && (t += '');
        var a = l(i, D(e)),
          o = t ? t.split('\n') : [],
          s = o.length * a,
          u = s,
          c = !0;
        if ((n && (u += n[0] + n[2]), t && r)) {
          c = !1;
          var h = r.outerHeight,
            d = r.outerWidth;
          if (null != h && u > h) (t = ''), (o = []);
          else if (null != d)
            for (
              var f = I(d - (n ? n[1] + n[3] : 0), e, r.ellipsis, {
                  minChar: r.minChar,
                  placeholder: r.placeholder,
                }),
                p = 0,
                g = o.length;
              p < g;
              p++
            )
              o[p] = k(o[p], f);
        }
        return { lines: o, height: s, outerHeight: u, lineHeight: a, canCacheByTextString: c };
      }
      function E(t, e) {
        var n = { lines: [], width: 0, height: 0 };
        if ((null != t && (t += ''), !t)) return n;
        var i,
          a = (p.lastIndex = 0);
        while (null != (i = p.exec(t))) {
          var o = i.index;
          o > a && L(n, t.substring(a, o)), L(n, i[2], i[1]), (a = p.lastIndex);
        }
        a < t.length && L(n, t.substring(a, t.length));
        var s = n.lines,
          c = 0,
          h = 0,
          d = [],
          f = e.textPadding,
          g = e.truncate,
          v = g && g.outerWidth,
          m = g && g.outerHeight;
        f && (null != v && (v -= f[1] + f[3]), null != m && (m -= f[0] + f[2]));
        for (var x = 0; x < s.length; x++) {
          for (var _ = s[x], b = 0, w = 0, S = 0; S < _.tokens.length; S++) {
            var M = _.tokens[S],
              T = (M.styleName && e.rich[M.styleName]) || {},
              I = (M.textPadding = T.textPadding),
              k = (M.font = T.font || e.font),
              A = (M.textHeight = l(T.textHeight, D(k)));
            if (
              (I && (A += I[0] + I[2]),
              (M.height = A),
              (M.lineHeight = u(T.textLineHeight, e.textLineHeight, A)),
              (M.textAlign = (T && T.textAlign) || e.textAlign),
              (M.textVerticalAlign = (T && T.textVerticalAlign) || 'middle'),
              null != m && c + M.lineHeight > m)
            )
              return { lines: [], width: 0, height: 0 };
            M.textWidth = y(M.text, k);
            var O = T.textWidth,
              P = null == O || 'auto' === O;
            if ('string' === typeof O && '%' === O.charAt(O.length - 1))
              (M.percentWidth = O), d.push(M), (O = 0);
            else {
              if (P) {
                O = M.textWidth;
                var E = T.textBackgroundColor,
                  R = E && E.image;
                R &&
                  ((R = r.findExistImage(R)),
                  r.isImageReady(R) && (O = Math.max(O, (R.width * A) / R.height)));
              }
              var N = I ? I[1] + I[3] : 0;
              O += N;
              var z = null != v ? v - w : null;
              null != z &&
                z < O &&
                (!P || z < N
                  ? ((M.text = ''), (M.textWidth = O = 0))
                  : ((M.text = C(M.text, z - N, k, g.ellipsis, { minChar: g.minChar })),
                    (M.textWidth = y(M.text, k)),
                    (O = M.textWidth + N)));
            }
            (w += M.width = O), T && (b = Math.max(b, M.lineHeight));
          }
          (_.width = w), (_.lineHeight = b), (c += b), (h = Math.max(h, w));
        }
        (n.outerWidth = n.width = l(e.textWidth, h)),
          (n.outerHeight = n.height = l(e.textHeight, c)),
          f && ((n.outerWidth += f[1] + f[3]), (n.outerHeight += f[0] + f[2]));
        for (x = 0; x < d.length; x++) {
          M = d[x];
          var B = M.percentWidth;
          M.width = (parseInt(B, 10) / 100) * h;
        }
        return n;
      }
      function L(t, e, n) {
        for (var i = '' === e, r = e.split('\n'), a = t.lines, o = 0; o < r.length; o++) {
          var s = r[o],
            l = { styleName: n, text: s, isLineHolder: !s && !i };
          if (o) a.push({ tokens: [l] });
          else {
            var u = (a[a.length - 1] || (a[0] = { tokens: [] })).tokens,
              c = u.length;
            1 === c && u[0].isLineHolder ? (u[0] = l) : (s || !c || i) && u.push(l);
          }
        }
      }
      function R(t) {
        var e =
          (t.fontSize || t.fontFamily) &&
          [t.fontStyle, t.fontWeight, (t.fontSize || 12) + 'px', t.fontFamily || 'sans-serif'].join(
            ' ',
          );
        return (e && c(e)) || t.textFont || t.font;
      }
      (v.measureText = function(t, e) {
        var n = o();
        return (n.font = e || g), n.measureText(t);
      }),
        (e.DEFAULT_FONT = g),
        (e.$override = m),
        (e.getWidth = y),
        (e.getBoundingRect = x),
        (e.adjustTextX = w),
        (e.adjustTextY = S),
        (e.calculateTextPosition = M),
        (e.adjustTextPositionOnRect = T),
        (e.truncateText = C),
        (e.getLineHeight = D),
        (e.measureText = O),
        (e.parsePlainText = P),
        (e.parseRichText = E),
        (e.makeFont = R);
    },
    '6Ic6': function(t, e, n) {
      var i = n('bYtY'),
        r = i.each,
        a = n('4fz+'),
        o = n('iRjW'),
        s = n('Yl7c'),
        l = n('4NO4'),
        u = n('IwbS'),
        c = n('9H2F'),
        h = c.createTask,
        d = n('zM3Q'),
        f = l.makeInner(),
        p = d();
      function g() {
        (this.group = new a()),
          (this.uid = o.getUID('viewChart')),
          (this.renderTask = h({ plan: x, reset: _ })),
          (this.renderTask.context = { view: this });
      }
      g.prototype = {
        type: 'chart',
        init: function(t, e) {},
        render: function(t, e, n, i) {},
        highlight: function(t, e, n, i) {
          y(t.getData(), i, 'emphasis');
        },
        downplay: function(t, e, n, i) {
          y(t.getData(), i, 'normal');
        },
        remove: function(t, e) {
          this.group.removeAll();
        },
        dispose: function() {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null,
        filterForExposedEvent: null,
      };
      var v = g.prototype;
      function m(t, e, n) {
        if (t && (t.trigger(e, n), t.isGroup && !u.isHighDownDispatcher(t)))
          for (var i = 0, r = t.childCount(); i < r; i++) m(t.childAt(i), e, n);
      }
      function y(t, e, n) {
        var i = l.queryDataIndex(t, e),
          a = e && null != e.highlightKey ? u.getHighlightDigit(e.highlightKey) : null;
        null != i
          ? r(l.normalizeToArray(i), function(e) {
              m(t.getItemGraphicEl(e), n, a);
            })
          : t.eachItemGraphicEl(function(t) {
              m(t, n, a);
            });
      }
      function x(t) {
        return p(t.model);
      }
      function _(t) {
        var e = t.model,
          n = t.ecModel,
          i = t.api,
          r = t.payload,
          a = e.pipelineContext.progressiveRender,
          o = t.view,
          s = r && f(r).updateMethod,
          l = a ? 'incrementalPrepareRender' : s && o[s] ? s : 'render';
        return 'render' !== l && o[l](e, n, i, r), b[l];
      }
      (v.updateView = v.updateLayout = v.updateVisual = function(t, e, n, i) {
        this.render(t, e, n, i);
      }),
        s.enableClassExtend(g, ['dispose']),
        s.enableClassManagement(g, { registerWhenExtend: !0 }),
        (g.markUpdateMethod = function(t, e) {
          f(t).updateMethod = e;
        });
      var b = {
          incrementalPrepareRender: {
            progress: function(t, e) {
              e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
            },
          },
          render: {
            forceFirstProgress: !0,
            progress: function(t, e) {
              e.view.render(e.model, e.ecModel, e.api, e.payload);
            },
          },
        },
        w = g;
      t.exports = w;
    },
    '72pK': function(t, e) {
      function n(t, e, n, a, o, s) {
        t = t || 0;
        var l = n[1] - n[0];
        if (
          (null != o && (o = r(o, [0, l])),
          null != s && (s = Math.max(s, null != o ? o : 0)),
          'all' === a)
        ) {
          var u = Math.abs(e[1] - e[0]);
          (u = r(u, [0, l])), (o = s = r(u, [o, s])), (a = 0);
        }
        (e[0] = r(e[0], n)), (e[1] = r(e[1], n));
        var c = i(e, a);
        e[a] += t;
        var h = o || 0,
          d = n.slice();
        c.sign < 0 ? (d[0] += h) : (d[1] -= h), (e[a] = r(e[a], d));
        var f = i(e, a);
        null != o && (f.sign !== c.sign || f.span < o) && (e[1 - a] = e[a] + c.sign * o);
        f = i(e, a);
        return null != s && f.span > s && (e[1 - a] = e[a] + f.sign * s), e;
      }
      function i(t, e) {
        var n = t[e] - t[1 - e];
        return { span: Math.abs(n), sign: n > 0 ? -1 : n < 0 ? 1 : e ? -1 : 1 };
      }
      function r(t, e) {
        return Math.min(null != e[1] ? e[1] : 1 / 0, Math.max(null != e[0] ? e[0] : -1 / 0, t));
      }
      t.exports = n;
    },
    '75ce': function(t, e, n) {
      var i = n('ProS');
      n('IXuL'), n('8X+K');
      var r = n('f5Yq'),
        a = n('h8O9'),
        o = n('/d5a');
      n('Ae16'),
        i.registerVisual(r('line', 'circle', 'line')),
        i.registerLayout(a('line')),
        i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC, o('line'));
    },
    '7AJT': function(t, e, n) {
      var i = n('bYtY'),
        r = n('hM6l'),
        a = function(t, e, n, i, a) {
          r.call(this, t, e, n), (this.type = i || 'value'), (this.position = a || 'bottom');
        };
      (a.prototype = {
        constructor: a,
        index: 0,
        getAxesOnZeroOf: null,
        model: null,
        isHorizontal: function() {
          var t = this.position;
          return 'top' === t || 'bottom' === t;
        },
        getGlobalExtent: function(t) {
          var e = this.getExtent();
          return (
            (e[0] = this.toGlobalCoord(e[0])),
            (e[1] = this.toGlobalCoord(e[1])),
            t && e[0] > e[1] && e.reverse(),
            e
          );
        },
        getOtherAxis: function() {
          this.grid.getOtherAxis();
        },
        pointToData: function(t, e) {
          return this.coordToData(this.toLocalCoord(t['x' === this.dim ? 0 : 1]), e);
        },
        toLocalCoord: null,
        toGlobalCoord: null,
      }),
        i.inherits(a, r);
      var o = a;
      t.exports = o;
    },
    '7DRL': function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = r.createHashMap,
        o = r.isString,
        s = r.isArray,
        l = r.each,
        u = (r.assert, n('MEGo')),
        c = u.parseXML,
        h = a(),
        d = {
          registerMap: function(t, e, n) {
            var i;
            return (
              s(e)
                ? (i = e)
                : e.svg
                ? (i = [{ type: 'svg', source: e.svg, specialAreas: e.specialAreas }])
                : (e.geoJson && !e.features && ((n = e.specialAreas), (e = e.geoJson)),
                  (i = [{ type: 'geoJSON', source: e, specialAreas: n }])),
              l(i, function(t) {
                var e = t.type;
                'geoJson' === e && (e = t.type = 'geoJSON');
                var n = f[e];
                n(t);
              }),
              h.set(t, i)
            );
          },
          retrieveMap: function(t) {
            return h.get(t);
          },
        },
        f = {
          geoJSON: function(t) {
            var e = t.source;
            t.geoJSON = o(e)
              ? 'undefined' !== typeof JSON && JSON.parse
                ? JSON.parse(e)
                : new Function('return (' + e + ');')()
              : e;
          },
          svg: function(t) {
            t.svgXML = c(t.source);
          },
        };
      t.exports = d;
    },
    '7G+c': function(t, e, n) {
      var i = n('bYtY'),
        r = i.createHashMap,
        a = i.isTypedArray,
        o = n('Yl7c'),
        s = o.enableClassCheck,
        l = n('k9D9'),
        u = l.SOURCE_FORMAT_ORIGINAL,
        c = l.SERIES_LAYOUT_BY_COLUMN,
        h = l.SOURCE_FORMAT_UNKNOWN,
        d = l.SOURCE_FORMAT_TYPED_ARRAY,
        f = l.SOURCE_FORMAT_KEYED_COLUMNS;
      function p(t) {
        (this.fromDataset = t.fromDataset),
          (this.data = t.data || (t.sourceFormat === f ? {} : [])),
          (this.sourceFormat = t.sourceFormat || h),
          (this.seriesLayoutBy = t.seriesLayoutBy || c),
          (this.dimensionsDefine = t.dimensionsDefine),
          (this.encodeDefine = t.encodeDefine && r(t.encodeDefine)),
          (this.startIndex = t.startIndex || 0),
          (this.dimensionsDetectCount = t.dimensionsDetectCount);
      }
      (p.seriesDataToSource = function(t) {
        return new p({ data: t, sourceFormat: a(t) ? d : u, fromDataset: !1 });
      }),
        s(p);
      var g = p;
      t.exports = g;
    },
    '7SHv': function(t, e, n) {
      var i = n('LPTA'),
        r = i.devicePixelRatio,
        a = n('bYtY'),
        o = n('SUKs'),
        s = n('mFDi'),
        l = n('BPZU'),
        u = n('Xmg4'),
        c = n('mLcG'),
        h = n('Dagg'),
        d = n('ItGF'),
        f = 1e5,
        p = 314159,
        g = 0.01,
        v = 0.001;
      function m(t) {
        return parseInt(t, 10);
      }
      function y(t) {
        return (
          !!t &&
          (!!t.__builtin__ || ('function' === typeof t.resize && 'function' === typeof t.refresh))
        );
      }
      var x = new s(0, 0, 0, 0),
        _ = new s(0, 0, 0, 0);
      function b(t, e, n) {
        return (
          x.copy(t.getBoundingRect()),
          t.transform && x.applyTransform(t.transform),
          (_.width = e),
          (_.height = n),
          !x.intersect(_)
        );
      }
      function w(t, e) {
        if (t === e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
        return !1;
      }
      function S(t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.setTransform(e),
            e.beginPath(),
            i.buildPath(e, i.shape),
            e.clip(),
            i.restoreTransform(e);
        }
      }
      function M(t, e) {
        var n = document.createElement('div');
        return (
          (n.style.cssText =
            [
              'position:relative',
              'width:' + t + 'px',
              'height:' + e + 'px',
              'padding:0',
              'margin:0',
              'border-width:0',
            ].join(';') + ';'),
          n
        );
      }
      var T = function(t, e, n) {
        this.type = 'canvas';
        var i = !t.nodeName || 'CANVAS' === t.nodeName.toUpperCase();
        (this._opts = n = a.extend({}, n || {})),
          (this.dpr = n.devicePixelRatio || r),
          (this._singleCanvas = i),
          (this.root = t);
        var o = t.style;
        o &&
          ((o['-webkit-tap-highlight-color'] = 'transparent'),
          (o['-webkit-user-select'] = o['user-select'] = o['-webkit-touch-callout'] = 'none'),
          (t.innerHTML = '')),
          (this.storage = e);
        var s = (this._zlevelList = []),
          l = (this._layers = {});
        if (((this._layerConfig = {}), (this._needsManuallyCompositing = !1), i)) {
          var c = t.width,
            h = t.height;
          null != n.width && (c = n.width),
            null != n.height && (h = n.height),
            (this.dpr = n.devicePixelRatio || 1),
            (t.width = c * this.dpr),
            (t.height = h * this.dpr),
            (this._width = c),
            (this._height = h);
          var d = new u(t, this, this.dpr);
          (d.__builtin__ = !0),
            d.initContext(),
            (l[p] = d),
            (d.zlevel = p),
            s.push(p),
            (this._domRoot = t);
        } else {
          (this._width = this._getSize(0)), (this._height = this._getSize(1));
          var f = (this._domRoot = M(this._width, this._height));
          t.appendChild(f);
        }
        (this._hoverlayer = null), (this._hoverElements = []);
      };
      T.prototype = {
        constructor: T,
        getType: function() {
          return 'canvas';
        },
        isSingleCanvas: function() {
          return this._singleCanvas;
        },
        getViewportRoot: function() {
          return this._domRoot;
        },
        getViewportRootOffset: function() {
          var t = this.getViewportRoot();
          if (t) return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
        },
        refresh: function(t) {
          var e = this.storage.getDisplayList(!0),
            n = this._zlevelList;
          (this._redrawId = Math.random()), this._paintList(e, t, this._redrawId);
          for (var i = 0; i < n.length; i++) {
            var r = n[i],
              a = this._layers[r];
            if (!a.__builtin__ && a.refresh) {
              var o = 0 === i ? this._backgroundColor : null;
              a.refresh(o);
            }
          }
          return this.refreshHover(), this;
        },
        addHover: function(t, e) {
          if (!t.__hoverMir) {
            var n = new t.constructor({
              style: t.style,
              shape: t.shape,
              z: t.z,
              z2: t.z2,
              silent: t.silent,
            });
            return (
              (n.__from = t), (t.__hoverMir = n), e && n.setStyle(e), this._hoverElements.push(n), n
            );
          }
        },
        removeHover: function(t) {
          var e = t.__hoverMir,
            n = this._hoverElements,
            i = a.indexOf(n, e);
          i >= 0 && n.splice(i, 1), (t.__hoverMir = null);
        },
        clearHover: function(t) {
          for (var e = this._hoverElements, n = 0; n < e.length; n++) {
            var i = e[n].__from;
            i && (i.__hoverMir = null);
          }
          e.length = 0;
        },
        refreshHover: function() {
          var t = this._hoverElements,
            e = t.length,
            n = this._hoverlayer;
          if ((n && n.clear(), e)) {
            l(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(f));
            var i = {};
            n.ctx.save();
            for (var r = 0; r < e; ) {
              var a = t[r],
                o = a.__from;
              o && o.__zr
                ? (r++,
                  o.invisible ||
                    ((a.transform = o.transform),
                    (a.invTransform = o.invTransform),
                    (a.__clipPaths = o.__clipPaths),
                    this._doPaintEl(a, n, !0, i)))
                : (t.splice(r, 1), (o.__hoverMir = null), e--);
            }
            n.ctx.restore();
          }
        },
        getHoverLayer: function() {
          return this.getLayer(f);
        },
        _paintList: function(t, e, n) {
          if (this._redrawId === n) {
            (e = e || !1), this._updateLayerStatus(t);
            var i = this._doPaintList(t, e);
            if ((this._needsManuallyCompositing && this._compositeManually(), !i)) {
              var r = this;
              c(function() {
                r._paintList(t, e, n);
              });
            }
          }
        },
        _compositeManually: function() {
          var t = this.getLayer(p).ctx,
            e = this._domRoot.width,
            n = this._domRoot.height;
          t.clearRect(0, 0, e, n),
            this.eachBuiltinLayer(function(i) {
              i.virtual && t.drawImage(i.dom, 0, 0, e, n);
            });
        },
        _doPaintList: function(t, e) {
          for (var n = [], i = 0; i < this._zlevelList.length; i++) {
            var r = this._zlevelList[i],
              o = this._layers[r];
            o.__builtin__ && o !== this._hoverlayer && (o.__dirty || e) && n.push(o);
          }
          for (var s = !0, l = 0; l < n.length; l++) {
            o = n[l];
            var u = o.ctx,
              c = {};
            u.save();
            var h = e ? o.__startIndex : o.__drawIndex,
              f = !e && o.incremental && Date.now,
              p = f && Date.now(),
              g = o.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
            if (o.__startIndex === o.__endIndex) o.clear(!1, g);
            else if (h === o.__startIndex) {
              var v = t[h];
              (v.incremental && v.notClear && !e) || o.clear(!1, g);
            }
            -1 === h &&
              (console.error('For some unknown reason. drawIndex is -1'), (h = o.__startIndex));
            for (var m = h; m < o.__endIndex; m++) {
              var y = t[m];
              if ((this._doPaintEl(y, o, e, c), (y.__dirty = y.__dirtyText = !1), f)) {
                var x = Date.now() - p;
                if (x > 15) break;
              }
            }
            (o.__drawIndex = m),
              o.__drawIndex < o.__endIndex && (s = !1),
              c.prevElClipPaths && u.restore(),
              u.restore();
          }
          return (
            d.wxa &&
              a.each(this._layers, function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
              }),
            s
          );
        },
        _doPaintEl: function(t, e, n, i) {
          var r = e.ctx,
            a = t.transform;
          if (
            (e.__dirty || n) &&
            !t.invisible &&
            0 !== t.style.opacity &&
            (!a || a[0] || a[3]) &&
            (!t.culling || !b(t, this._width, this._height))
          ) {
            var o = t.__clipPaths,
              s = i.prevElClipPaths;
            (s && !w(o, s)) ||
              (s && (r.restore(), (i.prevElClipPaths = null), (i.prevEl = null)),
              o && (r.save(), S(o, r), (i.prevElClipPaths = o))),
              t.beforeBrush && t.beforeBrush(r),
              t.brush(r, i.prevEl || null),
              (i.prevEl = t),
              t.afterBrush && t.afterBrush(r);
          }
        },
        getLayer: function(t, e) {
          this._singleCanvas && !this._needsManuallyCompositing && (t = p);
          var n = this._layers[t];
          return (
            n ||
              ((n = new u('zr_' + t, this, this.dpr)),
              (n.zlevel = t),
              (n.__builtin__ = !0),
              this._layerConfig[t]
                ? a.merge(n, this._layerConfig[t], !0)
                : this._layerConfig[t - g] && a.merge(n, this._layerConfig[t - g], !0),
              e && (n.virtual = e),
              this.insertLayer(t, n),
              n.initContext()),
            n
          );
        },
        insertLayer: function(t, e) {
          var n = this._layers,
            i = this._zlevelList,
            r = i.length,
            a = null,
            s = -1,
            l = this._domRoot;
          if (n[t]) o('ZLevel ' + t + ' has been used already');
          else if (y(e)) {
            if (r > 0 && t > i[0]) {
              for (s = 0; s < r - 1; s++) if (i[s] < t && i[s + 1] > t) break;
              a = n[i[s]];
            }
            if ((i.splice(s + 1, 0, t), (n[t] = e), !e.virtual))
              if (a) {
                var u = a.dom;
                u.nextSibling ? l.insertBefore(e.dom, u.nextSibling) : l.appendChild(e.dom);
              } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
          } else o('Layer of zlevel ' + t + ' is not valid');
        },
        eachLayer: function(t, e) {
          var n,
            i,
            r = this._zlevelList;
          for (i = 0; i < r.length; i++) (n = r[i]), t.call(e, this._layers[n], n);
        },
        eachBuiltinLayer: function(t, e) {
          var n,
            i,
            r,
            a = this._zlevelList;
          for (r = 0; r < a.length; r++)
            (i = a[r]), (n = this._layers[i]), n.__builtin__ && t.call(e, n, i);
        },
        eachOtherLayer: function(t, e) {
          var n,
            i,
            r,
            a = this._zlevelList;
          for (r = 0; r < a.length; r++)
            (i = a[r]), (n = this._layers[i]), n.__builtin__ || t.call(e, n, i);
        },
        getLayers: function() {
          return this._layers;
        },
        _updateLayerStatus: function(t) {
          function e(t) {
            a && (a.__endIndex !== t && (a.__dirty = !0), (a.__endIndex = t));
          }
          if (
            (this.eachBuiltinLayer(function(t, e) {
              t.__dirty = t.__used = !1;
            }),
            this._singleCanvas)
          )
            for (var n = 1; n < t.length; n++) {
              var i = t[n];
              if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
                this._needsManuallyCompositing = !0;
                break;
              }
            }
          var r,
            a = null,
            s = 0;
          for (n = 0; n < t.length; n++) {
            i = t[n];
            var l,
              u = i.zlevel;
            r !== u && ((r = u), (s = 0)),
              i.incremental
                ? ((l = this.getLayer(u + v, this._needsManuallyCompositing)),
                  (l.incremental = !0),
                  (s = 1))
                : (l = this.getLayer(u + (s > 0 ? g : 0), this._needsManuallyCompositing)),
              l.__builtin__ || o('ZLevel ' + u + ' has been used by unkown layer ' + l.id),
              l !== a &&
                ((l.__used = !0),
                l.__startIndex !== n && (l.__dirty = !0),
                (l.__startIndex = n),
                l.incremental ? (l.__drawIndex = -1) : (l.__drawIndex = n),
                e(n),
                (a = l)),
              i.__dirty &&
                ((l.__dirty = !0), l.incremental && l.__drawIndex < 0 && (l.__drawIndex = n));
          }
          e(n),
            this.eachBuiltinLayer(function(t, e) {
              !t.__used &&
                t.getElementCount() > 0 &&
                ((t.__dirty = !0), (t.__startIndex = t.__endIndex = t.__drawIndex = 0)),
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
        },
        clear: function() {
          return this.eachBuiltinLayer(this._clearLayer), this;
        },
        _clearLayer: function(t) {
          t.clear();
        },
        setBackgroundColor: function(t) {
          this._backgroundColor = t;
        },
        configLayer: function(t, e) {
          if (e) {
            var n = this._layerConfig;
            n[t] ? a.merge(n[t], e, !0) : (n[t] = e);
            for (var i = 0; i < this._zlevelList.length; i++) {
              var r = this._zlevelList[i];
              if (r === t || r === t + g) {
                var o = this._layers[r];
                a.merge(o, n[t], !0);
              }
            }
          }
        },
        delLayer: function(t) {
          var e = this._layers,
            n = this._zlevelList,
            i = e[t];
          i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(a.indexOf(n, t), 1));
        },
        resize: function(t, e) {
          if (this._domRoot.style) {
            var n = this._domRoot;
            n.style.display = 'none';
            var i = this._opts;
            if (
              (null != t && (i.width = t),
              null != e && (i.height = e),
              (t = this._getSize(0)),
              (e = this._getSize(1)),
              (n.style.display = ''),
              this._width !== t || e !== this._height)
            ) {
              for (var r in ((n.style.width = t + 'px'), (n.style.height = e + 'px'), this._layers))
                this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
              a.each(this._progressiveLayers, function(n) {
                n.resize(t, e);
              }),
                this.refresh(!0);
            }
            (this._width = t), (this._height = e);
          } else {
            if (null == t || null == e) return;
            (this._width = t), (this._height = e), this.getLayer(p).resize(t, e);
          }
          return this;
        },
        clearLayer: function(t) {
          var e = this._layers[t];
          e && e.clear();
        },
        dispose: function() {
          (this.root.innerHTML = ''),
            (this.root = this.storage = this._domRoot = this._layers = null);
        },
        getRenderedCanvas: function(t) {
          if (((t = t || {}), this._singleCanvas && !this._compositeManually))
            return this._layers[p].dom;
          var e = new u('image', this, t.pixelRatio || this.dpr);
          if (
            (e.initContext(),
            e.clear(!1, t.backgroundColor || this._backgroundColor),
            t.pixelRatio <= this.dpr)
          ) {
            this.refresh();
            var n = e.dom.width,
              i = e.dom.height,
              r = e.ctx;
            this.eachLayer(function(t) {
              t.__builtin__
                ? r.drawImage(t.dom, 0, 0, n, i)
                : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
            });
          } else
            for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
              var l = o[s];
              this._doPaintEl(l, e, !0, a);
            }
          return e.dom;
        },
        getWidth: function() {
          return this._width;
        },
        getHeight: function() {
          return this._height;
        },
        _getSize: function(t) {
          var e = this._opts,
            n = ['width', 'height'][t],
            i = ['clientWidth', 'clientHeight'][t],
            r = ['paddingLeft', 'paddingTop'][t],
            a = ['paddingRight', 'paddingBottom'][t];
          if (null != e[n] && 'auto' !== e[n]) return parseFloat(e[n]);
          var o = this.root,
            s = document.defaultView.getComputedStyle(o);
          return ((o[i] || m(s[n]) || m(o.style[n])) - (m(s[r]) || 0) - (m(s[a]) || 0)) | 0;
        },
        pathToImage: function(t, e) {
          e = e || this.dpr;
          var n = document.createElement('canvas'),
            i = n.getContext('2d'),
            r = t.getBoundingRect(),
            a = t.style,
            o = a.shadowBlur * e,
            s = a.shadowOffsetX * e,
            l = a.shadowOffsetY * e,
            u = a.hasStroke() ? a.lineWidth : 0,
            c = Math.max(u / 2, -s + o),
            d = Math.max(u / 2, s + o),
            f = Math.max(u / 2, -l + o),
            p = Math.max(u / 2, l + o),
            g = r.width + c + d,
            v = r.height + f + p;
          (n.width = g * e),
            (n.height = v * e),
            i.scale(e, e),
            i.clearRect(0, 0, g, v),
            (i.dpr = e);
          var m = { position: t.position, rotation: t.rotation, scale: t.scale };
          (t.position = [c - r.x, f - r.y]),
            (t.rotation = 0),
            (t.scale = [1, 1]),
            t.updateTransform(),
            t && t.brush(i);
          var y = h,
            x = new y({ style: { x: 0, y: 0, image: n } });
          return (
            null != m.position && (x.position = t.position = m.position),
            null != m.rotation && (x.rotation = t.rotation = m.rotation),
            null != m.scale && (x.scale = t.scale = m.scale),
            x
          );
        },
      };
      var C = T;
      t.exports = C;
    },
    '7aKB': function(t, e, n) {
      var i = n('bYtY'),
        r = n('6GrX'),
        a = n('OELB');
      function o(t) {
        return isNaN(t)
          ? '-'
          : ((t = (t + '').split('.')),
            t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +
              (t.length > 1 ? '.' + t[1] : ''));
      }
      function s(t, e) {
        return (
          (t = (t || '').toLowerCase().replace(/-(.)/g, function(t, e) {
            return e.toUpperCase();
          })),
          e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
          t
        );
      }
      var l = i.normalizeCssArray,
        u = /([&<>"'])/g,
        c = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
      function h(t) {
        return null == t
          ? ''
          : (t + '').replace(u, function(t, e) {
              return c[e];
            });
      }
      var d = ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        f = function(t, e) {
          return '{' + t + (null == e ? '' : e) + '}';
        };
      function p(t, e, n) {
        i.isArray(e) || (e = [e]);
        var r = e.length;
        if (!r) return '';
        for (var a = e[0].$vars || [], o = 0; o < a.length; o++) {
          var s = d[o];
          t = t.replace(f(s), f(s, 0));
        }
        for (var l = 0; l < r; l++)
          for (var u = 0; u < a.length; u++) {
            var c = e[l][a[u]];
            t = t.replace(f(d[u], l), n ? h(c) : c);
          }
        return t;
      }
      function g(t, e, n) {
        return (
          i.each(e, function(e, i) {
            t = t.replace('{' + i + '}', n ? h(e) : e);
          }),
          t
        );
      }
      function v(t, e) {
        t = i.isString(t) ? { color: t, extraCssText: e } : t || {};
        var n = t.color,
          r = t.type,
          a = ((e = t.extraCssText), t.renderMode || 'html'),
          o = t.markerId || 'X';
        return n
          ? 'html' === a
            ? 'subItem' === r
              ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
                h(n) +
                ';' +
                (e || '') +
                '"></span>'
              : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                h(n) +
                ';' +
                (e || '') +
                '"></span>'
            : { renderMode: a, content: '{marker' + o + '|}  ', style: { color: n } }
          : '';
      }
      function m(t, e) {
        return (t += ''), '0000'.substr(0, e - t.length) + t;
      }
      function y(t, e, n) {
        ('week' !== t && 'month' !== t && 'quarter' !== t && 'half-year' !== t && 'year' !== t) ||
          (t = 'MM-dd\nyyyy');
        var i = a.parseDate(e),
          r = n ? 'UTC' : '',
          o = i['get' + r + 'FullYear'](),
          s = i['get' + r + 'Month']() + 1,
          l = i['get' + r + 'Date'](),
          u = i['get' + r + 'Hours'](),
          c = i['get' + r + 'Minutes'](),
          h = i['get' + r + 'Seconds'](),
          d = i['get' + r + 'Milliseconds']();
        return (
          (t = t
            .replace('MM', m(s, 2))
            .replace('M', s)
            .replace('yyyy', o)
            .replace('yy', o % 100)
            .replace('dd', m(l, 2))
            .replace('d', l)
            .replace('hh', m(u, 2))
            .replace('h', u)
            .replace('mm', m(c, 2))
            .replace('m', c)
            .replace('ss', m(h, 2))
            .replace('s', h)
            .replace('SSS', m(d, 3))),
          t
        );
      }
      function x(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
      }
      var _ = r.truncateText;
      function b(t) {
        return r.getBoundingRect(
          t.text,
          t.font,
          t.textAlign,
          t.textVerticalAlign,
          t.textPadding,
          t.textLineHeight,
          t.rich,
          t.truncate,
        );
      }
      function w(t, e, n, i, a, o, s, l) {
        return r.getBoundingRect(t, e, n, i, a, l, o, s);
      }
      function S(t, e) {
        if ('_blank' === e || 'blank' === e) {
          var n = window.open();
          (n.opener = null), (n.location = t);
        } else window.open(t, e);
      }
      (e.addCommas = o),
        (e.toCamelCase = s),
        (e.normalizeCssArray = l),
        (e.encodeHTML = h),
        (e.formatTpl = p),
        (e.formatTplSimple = g),
        (e.getTooltipMarker = v),
        (e.formatTime = y),
        (e.capitalFirst = x),
        (e.truncateText = _),
        (e.getTextBoundingRect = b),
        (e.getTextRect = w),
        (e.windowOpen = S);
    },
    '7hqr': function(t, e, n) {
      var i = n('bYtY'),
        r = i.each,
        a = i.isString;
      function o(t, e, n) {
        n = n || {};
        var i,
          o,
          s,
          l,
          u = n.byIndex,
          c = n.stackedCoordDimension,
          h = !(!t || !t.get('stack'));
        if (
          (r(e, function(t, n) {
            a(t) && (e[n] = t = { name: t }),
              h &&
                !t.isExtraCoord &&
                (u || i || !t.ordinalMeta || (i = t),
                o ||
                  'ordinal' === t.type ||
                  'time' === t.type ||
                  (c && c !== t.coordDim) ||
                  (o = t));
          }),
          !o || u || i || (u = !0),
          o)
        ) {
          (s = '__\0ecstackresult'), (l = '__\0ecstackedover'), i && (i.createInvertedIndices = !0);
          var d = o.coordDim,
            f = o.type,
            p = 0;
          r(e, function(t) {
            t.coordDim === d && p++;
          }),
            e.push({
              name: s,
              coordDim: d,
              coordDimIndex: p,
              type: f,
              isExtraCoord: !0,
              isCalculationCoord: !0,
            }),
            p++,
            e.push({
              name: l,
              coordDim: l,
              coordDimIndex: p,
              type: f,
              isExtraCoord: !0,
              isCalculationCoord: !0,
            });
        }
        return {
          stackedDimension: o && o.name,
          stackedByDimension: i && i.name,
          isStackedByIndex: u,
          stackedOverDimension: l,
          stackResultDimension: s,
        };
      }
      function s(t, e) {
        return !!e && e === t.getCalculationInfo('stackedDimension');
      }
      function l(t, e) {
        return s(t, e) ? t.getCalculationInfo('stackResultDimension') : e;
      }
      (e.enableDataStack = o), (e.isDimensionStacked = s), (e.getStackedDimension = l);
    },
    '7oTu': function(t, e, n) {
      var i = n('IMiH'),
        r = n('QBsz'),
        a = r.applyTransform,
        o = i.CMD,
        s = [[], [], []],
        l = Math.sqrt,
        u = Math.atan2;
      function c(t, e) {
        var n,
          i,
          r,
          c,
          h,
          d = t.data,
          f = o.M,
          p = o.C,
          g = o.L,
          v = o.R,
          m = o.A,
          y = o.Q;
        for (r = 0, c = 0; r < d.length; ) {
          switch (((n = d[r++]), (c = r), (i = 0), n)) {
            case f:
              i = 1;
              break;
            case g:
              i = 1;
              break;
            case p:
              i = 3;
              break;
            case y:
              i = 2;
              break;
            case m:
              var x = e[4],
                _ = e[5],
                b = l(e[0] * e[0] + e[1] * e[1]),
                w = l(e[2] * e[2] + e[3] * e[3]),
                S = u(-e[1] / w, e[0] / b);
              (d[r] *= b),
                (d[r++] += x),
                (d[r] *= w),
                (d[r++] += _),
                (d[r++] *= b),
                (d[r++] *= w),
                (d[r++] += S),
                (d[r++] += S),
                (r += 2),
                (c = r);
              break;
            case v:
              (M[0] = d[r++]),
                (M[1] = d[r++]),
                a(M, M, e),
                (d[c++] = M[0]),
                (d[c++] = M[1]),
                (M[0] += d[r++]),
                (M[1] += d[r++]),
                a(M, M, e),
                (d[c++] = M[0]),
                (d[c++] = M[1]);
          }
          for (h = 0; h < i; h++) {
            var M = s[h];
            (M[0] = d[r++]), (M[1] = d[r++]), a(M, M, e), (d[c++] = M[0]), (d[c++] = M[1]);
          }
        }
      }
      t.exports = c;
    },
    '8SMY': function(t, e, n) {
      var i = n('n4Lv'),
        r = i.prepareDataCoordInfo,
        a = i.getStackedOnPoint;
      function o(t, e) {
        var n = [];
        return (
          e
            .diff(t)
            .add(function(t) {
              n.push({ cmd: '+', idx: t });
            })
            .update(function(t, e) {
              n.push({ cmd: '=', idx: e, idx1: t });
            })
            .remove(function(t) {
              n.push({ cmd: '-', idx: t });
            })
            .execute(),
          n
        );
      }
      function s(t, e, n, i, s, l, u, c) {
        for (
          var h = o(t, e),
            d = [],
            f = [],
            p = [],
            g = [],
            v = [],
            m = [],
            y = [],
            x = r(s, e, u),
            _ = r(l, t, c),
            b = 0;
          b < h.length;
          b++
        ) {
          var w = h[b],
            S = !0;
          switch (w.cmd) {
            case '=':
              var M = t.getItemLayout(w.idx),
                T = e.getItemLayout(w.idx1);
              (isNaN(M[0]) || isNaN(M[1])) && (M = T.slice()),
                d.push(M),
                f.push(T),
                p.push(n[w.idx]),
                g.push(i[w.idx1]),
                y.push(e.getRawIndex(w.idx1));
              break;
            case '+':
              var C = w.idx;
              d.push(
                s.dataToPoint([e.get(x.dataDimsForPoint[0], C), e.get(x.dataDimsForPoint[1], C)]),
              ),
                f.push(e.getItemLayout(C).slice()),
                p.push(a(x, s, e, C)),
                g.push(i[C]),
                y.push(e.getRawIndex(C));
              break;
            case '-':
              C = w.idx;
              var I = t.getRawIndex(C);
              I !== C
                ? (d.push(t.getItemLayout(C)),
                  f.push(
                    l.dataToPoint([
                      t.get(_.dataDimsForPoint[0], C),
                      t.get(_.dataDimsForPoint[1], C),
                    ]),
                  ),
                  p.push(n[C]),
                  g.push(a(_, l, t, C)),
                  y.push(I))
                : (S = !1);
          }
          S && (v.push(w), m.push(m.length));
        }
        m.sort(function(t, e) {
          return y[t] - y[e];
        });
        var k = [],
          A = [],
          D = [],
          O = [],
          P = [];
        for (b = 0; b < m.length; b++) {
          C = m[b];
          (k[b] = d[C]), (A[b] = f[C]), (D[b] = p[C]), (O[b] = g[C]), (P[b] = v[C]);
        }
        return { current: k, next: A, stackedOnCurrent: D, stackedOnNext: O, status: P };
      }
      t.exports = s;
    },
    '8X+K': function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = n('4mN7'),
        o = a.fromPoints,
        s = n('9wZj'),
        l = n('FBjb'),
        u = n('8SMY'),
        c = n('IwbS'),
        h = n('4NO4'),
        d = n('1NG9'),
        f = d.Polyline,
        p = d.Polygon,
        g = n('6Ic6'),
        v = n('n4Lv'),
        m = v.prepareDataCoordInfo,
        y = v.getStackedOnPoint,
        x = n('sK/D'),
        _ = x.createGridClipPath,
        b = x.createPolarClipPath;
      function w(t, e) {
        if (t.length === e.length) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n],
              r = e[n];
            if (i[0] !== r[0] || i[1] !== r[1]) return;
          }
          return !0;
        }
      }
      function S(t, e) {
        var n = [],
          i = [],
          r = [],
          a = [];
        return (
          o(t, n, i),
          o(e, r, a),
          Math.max(
            Math.abs(n[0] - r[0]),
            Math.abs(n[1] - r[1]),
            Math.abs(i[0] - a[0]),
            Math.abs(i[1] - a[1]),
          )
        );
      }
      function M(t) {
        return 'number' === typeof t ? t : t ? 0.5 : 0;
      }
      function T(t, e, n) {
        if (!n.valueDim) return [];
        for (var i = [], r = 0, a = e.count(); r < a; r++) i.push(y(n, t, e, r));
        return i;
      }
      function C(t, e, n) {
        for (
          var i = e.getBaseAxis(), r = 'x' === i.dim || 'radius' === i.dim ? 0 : 1, a = [], o = 0;
          o < t.length - 1;
          o++
        ) {
          var s = t[o + 1],
            l = t[o];
          a.push(l);
          var u = [];
          switch (n) {
            case 'end':
              (u[r] = s[r]), (u[1 - r] = l[1 - r]), a.push(u);
              break;
            case 'middle':
              var c = (l[r] + s[r]) / 2,
                h = [];
              (u[r] = h[r] = c), (u[1 - r] = l[1 - r]), (h[1 - r] = s[1 - r]), a.push(u), a.push(h);
              break;
            default:
              (u[r] = l[r]), (u[1 - r] = s[1 - r]), a.push(u);
          }
        }
        return t[o] && a.push(t[o]), a;
      }
      function I(t, e) {
        var n = t.getVisual('visualMeta');
        if (n && n.length && t.count() && 'cartesian2d' === e.type) {
          for (var i, a, o = n.length - 1; o >= 0; o--) {
            var s = n[o].dimension,
              l = t.dimensions[s],
              u = t.getDimensionInfo(l);
            if (((i = u && u.coordDim), 'x' === i || 'y' === i)) {
              a = n[o];
              break;
            }
          }
          if (a) {
            var h = e.getAxis(i),
              d = r.map(a.stops, function(t) {
                return { coord: h.toGlobalCoord(h.dataToCoord(t.value)), color: t.color };
              }),
              f = d.length,
              p = a.outerColors.slice();
            f && d[0].coord > d[f - 1].coord && (d.reverse(), p.reverse());
            var g = 10,
              v = d[0].coord - g,
              m = d[f - 1].coord + g,
              y = m - v;
            if (y < 0.001) return 'transparent';
            r.each(d, function(t) {
              t.offset = (t.coord - v) / y;
            }),
              d.push({ offset: f ? d[f - 1].offset : 0.5, color: p[1] || 'transparent' }),
              d.unshift({ offset: f ? d[0].offset : 0.5, color: p[0] || 'transparent' });
            var x = new c.LinearGradient(0, 0, 0, 0, d, !0);
            return (x[i] = v), (x[i + '2'] = m), x;
          }
        }
      }
      function k(t, e, n) {
        var i = t.get('showAllSymbol'),
          a = 'auto' === i;
        if (!i || a) {
          var o = n.getAxesByScale('ordinal')[0];
          if (o && (!a || !A(o, e))) {
            var s = e.mapDimension(o.dim),
              l = {};
            return (
              r.each(o.getViewLabels(), function(t) {
                l[t.tickValue] = 1;
              }),
              function(t) {
                return !l.hasOwnProperty(e.get(s, t));
              }
            );
          }
        }
      }
      function A(t, e) {
        var n = t.getExtent(),
          i = Math.abs(n[1] - n[0]) / t.scale.count();
        isNaN(i) && (i = 0);
        for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; o < r; o += a)
          if (1.5 * l.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
        return !0;
      }
      function D(t, e, n) {
        if ('cartesian2d' === t.type) {
          var i = t.getBaseAxis().isHorizontal(),
            r = _(t, e, n);
          if (!n.get('clip', !0)) {
            var a = r.shape,
              o = Math.max(a.width, a.height);
            i ? ((a.y -= o), (a.height += 2 * o)) : ((a.x -= o), (a.width += 2 * o));
          }
          return r;
        }
        return b(t, e, n);
      }
      var O = g.extend({
        type: 'line',
        init: function() {
          var t = new c.Group(),
            e = new s();
          this.group.add(e.group), (this._symbolDraw = e), (this._lineGroup = t);
        },
        render: function(t, e, n) {
          var i = t.coordinateSystem,
            a = this.group,
            o = t.getData(),
            s = t.getModel('lineStyle'),
            l = t.getModel('areaStyle'),
            u = o.mapArray(o.getItemLayout),
            c = 'polar' === i.type,
            h = this._coordSys,
            d = this._symbolDraw,
            f = this._polyline,
            p = this._polygon,
            g = this._lineGroup,
            v = t.get('animation'),
            y = !l.isEmpty(),
            x = l.get('origin'),
            _ = m(i, o, x),
            b = T(i, o, _),
            S = t.get('showSymbol'),
            A = S && !c && k(t, o, i),
            O = this._data;
          O &&
            O.eachItemGraphicEl(function(t, e) {
              t.__temp && (a.remove(t), O.setItemGraphicEl(e, null));
            }),
            S || d.remove(),
            a.add(g);
          var P,
            E = !c && t.get('step');
          i &&
            i.getArea &&
            t.get('clip', !0) &&
            ((P = i.getArea()),
            null != P.width
              ? ((P.x -= 0.1), (P.y -= 0.1), (P.width += 0.2), (P.height += 0.2))
              : P.r0 && ((P.r0 -= 0.5), (P.r1 += 0.5))),
            (this._clipShapeForSymbol = P),
            f && h.type === i.type && E === this._step
              ? (y && !p
                  ? (p = this._newPolygon(u, b, i, v))
                  : p && !y && (g.remove(p), (p = this._polygon = null)),
                g.setClipPath(D(i, !1, t)),
                S && d.updateData(o, { isIgnore: A, clipShape: P }),
                o.eachItemGraphicEl(function(t) {
                  t.stopAnimation(!0);
                }),
                (w(this._stackedOnPoints, b) && w(this._points, u)) ||
                  (v
                    ? this._updateAnimation(o, b, i, n, E, x)
                    : (E && ((u = C(u, i, E)), (b = C(b, i, E))),
                      f.setShape({ points: u }),
                      p && p.setShape({ points: u, stackedOnPoints: b }))))
              : (S && d.updateData(o, { isIgnore: A, clipShape: P }),
                E && ((u = C(u, i, E)), (b = C(b, i, E))),
                (f = this._newPolyline(u, i, v)),
                y && (p = this._newPolygon(u, b, i, v)),
                g.setClipPath(D(i, !0, t)));
          var L = I(o, i) || o.getVisual('color');
          f.useStyle(r.defaults(s.getLineStyle(), { fill: 'none', stroke: L, lineJoin: 'bevel' }));
          var R = t.get('smooth');
          if (
            ((R = M(t.get('smooth'))),
            f.setShape({
              smooth: R,
              smoothMonotone: t.get('smoothMonotone'),
              connectNulls: t.get('connectNulls'),
            }),
            p)
          ) {
            var N = o.getCalculationInfo('stackedOnSeries'),
              z = 0;
            p.useStyle(r.defaults(l.getAreaStyle(), { fill: L, opacity: 0.7, lineJoin: 'bevel' })),
              N && (z = M(N.get('smooth'))),
              p.setShape({
                smooth: R,
                stackedOnSmooth: z,
                smoothMonotone: t.get('smoothMonotone'),
                connectNulls: t.get('connectNulls'),
              });
          }
          (this._data = o),
            (this._coordSys = i),
            (this._stackedOnPoints = b),
            (this._points = u),
            (this._step = E),
            (this._valueOrigin = x);
        },
        dispose: function() {},
        highlight: function(t, e, n, i) {
          var r = t.getData(),
            a = h.queryDataIndex(r, i);
          if (!(a instanceof Array) && null != a && a >= 0) {
            var o = r.getItemGraphicEl(a);
            if (!o) {
              var s = r.getItemLayout(a);
              if (!s) return;
              if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(s[0], s[1])) return;
              (o = new l(r, a)),
                (o.position = s),
                o.setZ(t.get('zlevel'), t.get('z')),
                (o.ignore = isNaN(s[0]) || isNaN(s[1])),
                (o.__temp = !0),
                r.setItemGraphicEl(a, o),
                o.stopSymbolAnimation(!0),
                this.group.add(o);
            }
            o.highlight();
          } else g.prototype.highlight.call(this, t, e, n, i);
        },
        downplay: function(t, e, n, i) {
          var r = t.getData(),
            a = h.queryDataIndex(r, i);
          if (null != a && a >= 0) {
            var o = r.getItemGraphicEl(a);
            o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
          } else g.prototype.downplay.call(this, t, e, n, i);
        },
        _newPolyline: function(t) {
          var e = this._polyline;
          return (
            e && this._lineGroup.remove(e),
            (e = new f({ shape: { points: t }, silent: !0, z2: 10 })),
            this._lineGroup.add(e),
            (this._polyline = e),
            e
          );
        },
        _newPolygon: function(t, e) {
          var n = this._polygon;
          return (
            n && this._lineGroup.remove(n),
            (n = new p({ shape: { points: t, stackedOnPoints: e }, silent: !0 })),
            this._lineGroup.add(n),
            (this._polygon = n),
            n
          );
        },
        _updateAnimation: function(t, e, n, i, r, a) {
          var o = this._polyline,
            s = this._polygon,
            l = t.hostModel,
            h = u(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
            d = h.current,
            f = h.stackedOnCurrent,
            p = h.next,
            g = h.stackedOnNext;
          if (
            (r &&
              ((d = C(h.current, n, r)),
              (f = C(h.stackedOnCurrent, n, r)),
              (p = C(h.next, n, r)),
              (g = C(h.stackedOnNext, n, r))),
            S(d, p) > 3e3 || (s && S(f, g) > 3e3))
          )
            return (
              o.setShape({ points: p }), void (s && s.setShape({ points: p, stackedOnPoints: g }))
            );
          (o.shape.__points = h.current),
            (o.shape.points = d),
            c.updateProps(o, { shape: { points: p } }, l),
            s &&
              (s.setShape({ points: d, stackedOnPoints: f }),
              c.updateProps(s, { shape: { points: p, stackedOnPoints: g } }, l));
          for (var v = [], m = h.status, y = 0; y < m.length; y++) {
            var x = m[y].cmd;
            if ('=' === x) {
              var _ = t.getItemGraphicEl(m[y].idx1);
              _ && v.push({ el: _, ptIdx: y });
            }
          }
          o.animators &&
            o.animators.length &&
            o.animators[0].during(function() {
              for (var t = 0; t < v.length; t++) {
                var e = v[t].el;
                e.attr('position', o.shape.__points[v[t].ptIdx]);
              }
            });
        },
        remove: function(t) {
          var e = this.group,
            n = this._data;
          this._lineGroup.removeAll(),
            this._symbolDraw.remove(!0),
            n &&
              n.eachItemGraphicEl(function(t, i) {
                t.__temp && (e.remove(t), n.setItemGraphicEl(i, null));
              }),
            (this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null);
        },
      });
      t.exports = O;
    },
    '8hn6': function(t, e) {
      var n = '#eee',
        i = function() {
          return {
            axisLine: { lineStyle: { color: n } },
            axisTick: { lineStyle: { color: n } },
            axisLabel: { textStyle: { color: n } },
            splitLine: { lineStyle: { type: 'dashed', color: '#aaa' } },
            splitArea: { areaStyle: { color: n } },
          };
        },
        r = [
          '#dd6b66',
          '#759aa0',
          '#e69d87',
          '#8dc1a9',
          '#ea7e53',
          '#eedd78',
          '#73a373',
          '#73b9bc',
          '#7289ab',
          '#91ca8c',
          '#f49f42',
        ],
        a = {
          color: r,
          backgroundColor: '#333',
          tooltip: {
            axisPointer: {
              lineStyle: { color: n },
              crossStyle: { color: n },
              label: { color: '#000' },
            },
          },
          legend: { textStyle: { color: n } },
          textStyle: { color: n },
          title: { textStyle: { color: n } },
          toolbox: { iconStyle: { normal: { borderColor: n } } },
          dataZoom: { textStyle: { color: n } },
          visualMap: { textStyle: { color: n } },
          timeline: {
            lineStyle: { color: n },
            itemStyle: { normal: { color: r[1] } },
            label: { normal: { textStyle: { color: n } } },
            controlStyle: { normal: { color: n, borderColor: n } },
          },
          timeAxis: i(),
          logAxis: i(),
          valueAxis: i(),
          categoryAxis: i(),
          line: { symbol: 'circle' },
          graph: { color: r },
          gauge: { title: { textStyle: { color: n } } },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#FD1050',
                color0: '#0CF49B',
                borderColor: '#FD1050',
                borderColor0: '#0CF49B',
              },
            },
          },
        };
      a.categoryAxis.splitLine.show = !1;
      var o = a;
      t.exports = o;
    },
    '8nMs': function(t, e, n) {
      var i = n('bYtY'),
        r = n('IwbS'),
        a = n('+rIm'),
        o = n('Znkb'),
        s = n('AVZG'),
        l = n('WN+l'),
        u = l.rectCoordAxisBuildSplitArea,
        c = l.rectCoordAxisHandleRemove,
        h = ['axisLine', 'axisTickLabel', 'axisName'],
        d = ['splitArea', 'splitLine', 'minorSplitLine'],
        f = o.extend({
          type: 'cartesianAxis',
          axisPointerClass: 'CartesianAxisPointer',
          render: function(t, e, n, o) {
            this.group.removeAll();
            var l = this._axisGroup;
            if (
              ((this._axisGroup = new r.Group()), this.group.add(this._axisGroup), t.get('show'))
            ) {
              var u = t.getCoordSysModel(),
                c = s.layout(u, t),
                p = new a(t, c);
              i.each(h, p.add, p),
                this._axisGroup.add(p.getGroup()),
                i.each(
                  d,
                  function(e) {
                    t.get(e + '.show') && this['_' + e](t, u);
                  },
                  this,
                ),
                r.groupTransition(l, this._axisGroup, t),
                f.superCall(this, 'render', t, e, n, o);
            }
          },
          remove: function() {
            c(this);
          },
          _splitLine: function(t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
              var a = t.getModel('splitLine'),
                o = a.getModel('lineStyle'),
                s = o.get('color');
              s = i.isArray(s) ? s : [s];
              for (
                var l = e.coordinateSystem.getRect(),
                  u = n.isHorizontal(),
                  c = 0,
                  h = n.getTicksCoords({ tickModel: a }),
                  d = [],
                  f = [],
                  p = o.getLineStyle(),
                  g = 0;
                g < h.length;
                g++
              ) {
                var v = n.toGlobalCoord(h[g].coord);
                u
                  ? ((d[0] = v), (d[1] = l.y), (f[0] = v), (f[1] = l.y + l.height))
                  : ((d[0] = l.x), (d[1] = v), (f[0] = l.x + l.width), (f[1] = v));
                var m = c++ % s.length,
                  y = h[g].tickValue;
                this._axisGroup.add(
                  new r.Line({
                    anid: null != y ? 'line_' + h[g].tickValue : null,
                    subPixelOptimize: !0,
                    shape: { x1: d[0], y1: d[1], x2: f[0], y2: f[1] },
                    style: i.defaults({ stroke: s[m] }, p),
                    silent: !0,
                  }),
                );
              }
            }
          },
          _minorSplitLine: function(t, e) {
            var n = t.axis,
              i = t.getModel('minorSplitLine'),
              a = i.getModel('lineStyle'),
              o = e.coordinateSystem.getRect(),
              s = n.isHorizontal(),
              l = n.getMinorTicksCoords();
            if (l.length)
              for (var u = [], c = [], h = a.getLineStyle(), d = 0; d < l.length; d++)
                for (var f = 0; f < l[d].length; f++) {
                  var p = n.toGlobalCoord(l[d][f].coord);
                  s
                    ? ((u[0] = p), (u[1] = o.y), (c[0] = p), (c[1] = o.y + o.height))
                    : ((u[0] = o.x), (u[1] = p), (c[0] = o.x + o.width), (c[1] = p)),
                    this._axisGroup.add(
                      new r.Line({
                        anid: 'minor_line_' + l[d][f].tickValue,
                        subPixelOptimize: !0,
                        shape: { x1: u[0], y1: u[1], x2: c[0], y2: c[1] },
                        style: h,
                        silent: !0,
                      }),
                    );
                }
          },
          _splitArea: function(t, e) {
            u(this, this._axisGroup, t, e);
          },
        });
      f.extend({ type: 'xAxis' }), f.extend({ type: 'yAxis' });
    },
    '8nly': function(t, e, n) {
      var i = n('mFDi'),
        r = n('4mN7'),
        a = n('QBsz'),
        o = n('BlVb');
      function s(t, e, n) {
        if (((this.name = t), (this.geometries = e), n)) n = [n[0], n[1]];
        else {
          var i = this.getBoundingRect();
          n = [i.x + i.width / 2, i.y + i.height / 2];
        }
        this.center = n;
      }
      s.prototype = {
        constructor: s,
        properties: null,
        getBoundingRect: function() {
          var t = this._rect;
          if (t) return t;
          for (
            var e = Number.MAX_VALUE,
              n = [e, e],
              o = [-e, -e],
              s = [],
              l = [],
              u = this.geometries,
              c = 0;
            c < u.length;
            c++
          )
            if ('polygon' === u[c].type) {
              var h = u[c].exterior;
              r.fromPoints(h, s, l), a.min(n, n, s), a.max(o, o, l);
            }
          return (
            0 === c && (n[0] = n[1] = o[0] = o[1] = 0),
            (this._rect = new i(n[0], n[1], o[0] - n[0], o[1] - n[1]))
          );
        },
        contain: function(t) {
          var e = this.getBoundingRect(),
            n = this.geometries;
          if (!e.contain(t[0], t[1])) return !1;
          t: for (var i = 0, r = n.length; i < r; i++)
            if ('polygon' === n[i].type) {
              var a = n[i].exterior,
                s = n[i].interiors;
              if (o.contain(a, t[0], t[1])) {
                for (var l = 0; l < (s ? s.length : 0); l++) if (o.contain(s[l])) continue t;
                return !0;
              }
            }
          return !1;
        },
        transformTo: function(t, e, n, r) {
          var o = this.getBoundingRect(),
            s = o.width / o.height;
          n ? r || (r = n / s) : (n = s * r);
          for (
            var l = new i(t, e, n, r), u = o.calculateTransform(l), c = this.geometries, h = 0;
            h < c.length;
            h++
          )
            if ('polygon' === c[h].type) {
              for (var d = c[h].exterior, f = c[h].interiors, p = 0; p < d.length; p++)
                a.applyTransform(d[p], d[p], u);
              for (var g = 0; g < (f ? f.length : 0); g++)
                for (p = 0; p < f[g].length; p++) a.applyTransform(f[g][p], f[g][p], u);
            }
          (o = this._rect), o.copy(l), (this.center = [o.x + o.width / 2, o.y + o.height / 2]);
        },
        cloneShallow: function(t) {
          null == t && (t = this.name);
          var e = new s(t, this.geometries, this.center);
          return (e._rect = this._rect), (e.transformTo = null), e;
        },
      };
      var l = s;
      t.exports = l;
    },
    '98bh': function(t, e, n) {
      var i = n('ProS'),
        r = n('5GtS'),
        a = n('bYtY'),
        o = n('4NO4'),
        s = n('OELB'),
        l = s.getPercentWithPrecision,
        u = n('cCMj'),
        c = n('KxfA'),
        h = c.retrieveRawAttr,
        d = n('D5nY'),
        f = d.makeSeriesEncodeForNameBased,
        p = n('xKMd'),
        g = i.extendSeriesModel({
          type: 'series.pie',
          init: function(t) {
            g.superApply(this, 'init', arguments),
              (this.legendVisualProvider = new p(
                a.bind(this.getData, this),
                a.bind(this.getRawData, this),
              )),
              this.updateSelectedMap(this._createSelectableList()),
              this._defaultLabelLine(t);
          },
          mergeOption: function(t) {
            g.superCall(this, 'mergeOption', t),
              this.updateSelectedMap(this._createSelectableList());
          },
          getInitialData: function(t, e) {
            return r(this, { coordDimensions: ['value'], encodeDefaulter: a.curry(f, this) });
          },
          _createSelectableList: function() {
            for (
              var t = this.getRawData(), e = t.mapDimension('value'), n = [], i = 0, r = t.count();
              i < r;
              i++
            )
              n.push({ name: t.getName(i), value: t.get(e, i), selected: h(t, i, 'selected') });
            return n;
          },
          getDataParams: function(t) {
            var e = this.getData(),
              n = g.superCall(this, 'getDataParams', t),
              i = [];
            return (
              e.each(e.mapDimension('value'), function(t) {
                i.push(t);
              }),
              (n.percent = l(i, t, e.hostModel.get('percentPrecision'))),
              n.$vars.push('percent'),
              n
            );
          },
          _defaultLabelLine: function(t) {
            o.defaultEmphasis(t, 'labelLine', ['show']);
            var e = t.labelLine,
              n = t.emphasis.labelLine;
            (e.show = e.show && t.label.show), (n.show = n.show && t.emphasis.label.show);
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ['50%', '50%'],
            radius: [0, '75%'],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
              rotate: !1,
              show: !0,
              position: 'outer',
              alignTo: 'none',
              margin: '25%',
              bleedMargin: 10,
              distanceToLabelLine: 5,
            },
            labelLine: {
              show: !0,
              length: 15,
              length2: 15,
              smooth: !1,
              lineStyle: { width: 1, type: 'solid' },
            },
            itemStyle: { borderWidth: 1 },
            animationType: 'expansion',
            animationTypeUpdate: 'transition',
            animationEasing: 'cubicOut',
          },
        });
      a.mixin(g, u);
      var v = g;
      t.exports = v;
    },
    '9H2F': function(t, e, n) {
      var i = n('bYtY'),
        r = (i.assert, i.isArray),
        a = n('Tghj');
      a.__DEV__;
      function o(t) {
        return new s(t);
      }
      function s(t) {
        (t = t || {}),
          (this._reset = t.reset),
          (this._plan = t.plan),
          (this._count = t.count),
          (this._onDirty = t.onDirty),
          (this._dirty = !0),
          this.context;
      }
      var l = s.prototype;
      l.perform = function(t) {
        var e,
          n = this._upstream,
          i = t && t.skip;
        if (this._dirty && n) {
          var a = this.context;
          a.data = a.outputData = n.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this),
          this._plan && !i && (e = this._plan(this.context));
        var o,
          s = f(this._modBy),
          l = this._modDataCount || 0,
          u = f(t && t.modBy),
          d = (t && t.modDataCount) || 0;
        function f(t) {
          return !(t >= 1) && (t = 1), t;
        }
        (s === u && l === d) || (e = 'reset'),
          (this._dirty || 'reset' === e) && ((this._dirty = !1), (o = h(this, i))),
          (this._modBy = u),
          (this._modDataCount = d);
        var p = t && t.step;
        if (
          ((this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0),
          this._progress)
        ) {
          var g = this._dueIndex,
            v = Math.min(null != p ? this._dueIndex + p : 1 / 0, this._dueEnd);
          if (!i && (o || g < v)) {
            var m = this._progress;
            if (r(m)) for (var y = 0; y < m.length; y++) c(this, m[y], g, v, u, d);
            else c(this, m, g, v, u, d);
          }
          this._dueIndex = v;
          var x = null != this._settedOutputEnd ? this._settedOutputEnd : v;
          this._outputDueEnd = x;
        } else
          this._dueIndex = this._outputDueEnd =
            null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished();
      };
      var u = (function() {
        var t,
          e,
          n,
          i,
          r,
          a = {
            reset: function(l, u, c, h) {
              (e = l),
                (t = u),
                (n = c),
                (i = h),
                (r = Math.ceil(i / n)),
                (a.next = n > 1 && i > 0 ? s : o);
            },
          };
        return a;
        function o() {
          return e < t ? e++ : null;
        }
        function s() {
          var a = (e % r) * n + Math.ceil(e / r),
            o = e >= t ? null : a < i ? a : e;
          return e++, o;
        }
      })();
      function c(t, e, n, i, r, a) {
        u.reset(n, i, r, a),
          (t._callingProgress = e),
          t._callingProgress({ start: n, end: i, count: i - n, next: u.next }, t.context);
      }
      function h(t, e) {
        var n, i;
        (t._dueIndex = t._outputDueEnd = t._dueEnd = 0),
          (t._settedOutputEnd = null),
          !e &&
            t._reset &&
            ((n = t._reset(t.context)),
            n && n.progress && ((i = n.forceFirstProgress), (n = n.progress)),
            r(n) && !n.length && (n = null)),
          (t._progress = n),
          (t._modBy = t._modDataCount = null);
        var a = t._downstream;
        return a && a.dirty(), i;
      }
      (l.dirty = function() {
        (this._dirty = !0), this._onDirty && this._onDirty(this.context);
      }),
        (l.unfinished = function() {
          return this._progress && this._dueIndex < this._dueEnd;
        }),
        (l.pipe = function(t) {
          (this._downstream !== t || this._dirty) &&
            ((this._downstream = t), (t._upstream = this), t.dirty());
        }),
        (l.dispose = function() {
          this._disposed ||
            (this._upstream && (this._upstream._downstream = null),
            this._downstream && (this._downstream._upstream = null),
            (this._dirty = !1),
            (this._disposed = !0));
        }),
        (l.getUpstream = function() {
          return this._upstream;
        }),
        (l.getDownstream = function() {
          return this._downstream;
        }),
        (l.setOutputEnd = function(t) {
          this._outputDueEnd = this._settedOutputEnd = t;
        }),
        (e.createTask = o);
    },
    '9ama': function(t, e, n) {},
    '9wZj': function(t, e, n) {
      var i = n('IwbS'),
        r = n('FBjb'),
        a = n('bYtY'),
        o = a.isObject;
      function s(t) {
        (this.group = new i.Group()), (this._symbolCtor = t || r);
      }
      var l = s.prototype;
      function u(t, e, n, i) {
        return (
          e &&
          !isNaN(e[0]) &&
          !isNaN(e[1]) &&
          !(i.isIgnore && i.isIgnore(n)) &&
          !(i.clipShape && !i.clipShape.contain(e[0], e[1])) &&
          'none' !== t.getItemVisual(n, 'symbol')
        );
      }
      function c(t) {
        return null == t || o(t) || (t = { isIgnore: t }), t || {};
      }
      function h(t) {
        var e = t.hostModel;
        return {
          itemStyle: e.getModel('itemStyle').getItemStyle(['color']),
          hoverItemStyle: e.getModel('emphasis.itemStyle').getItemStyle(),
          symbolRotate: e.get('symbolRotate'),
          symbolOffset: e.get('symbolOffset'),
          hoverAnimation: e.get('hoverAnimation'),
          labelModel: e.getModel('label'),
          hoverLabelModel: e.getModel('emphasis.label'),
          cursorStyle: e.get('cursor'),
        };
      }
      (l.updateData = function(t, e) {
        e = c(e);
        var n = this.group,
          r = t.hostModel,
          a = this._data,
          o = this._symbolCtor,
          s = h(t);
        a || n.removeAll(),
          t
            .diff(a)
            .add(function(i) {
              var r = t.getItemLayout(i);
              if (u(t, r, i, e)) {
                var a = new o(t, i, s);
                a.attr('position', r), t.setItemGraphicEl(i, a), n.add(a);
              }
            })
            .update(function(l, c) {
              var h = a.getItemGraphicEl(c),
                d = t.getItemLayout(l);
              u(t, d, l, e)
                ? (h
                    ? (h.updateData(t, l, s), i.updateProps(h, { position: d }, r))
                    : ((h = new o(t, l)), h.attr('position', d)),
                  n.add(h),
                  t.setItemGraphicEl(l, h))
                : n.remove(h);
            })
            .remove(function(t) {
              var e = a.getItemGraphicEl(t);
              e &&
                e.fadeOut(function() {
                  n.remove(e);
                });
            })
            .execute(),
          (this._data = t);
      }),
        (l.isPersistent = function() {
          return !0;
        }),
        (l.updateLayout = function() {
          var t = this._data;
          t &&
            t.eachItemGraphicEl(function(e, n) {
              var i = t.getItemLayout(n);
              e.attr('position', i);
            });
        }),
        (l.incrementalPrepareUpdate = function(t) {
          (this._seriesScope = h(t)), (this._data = null), this.group.removeAll();
        }),
        (l.incrementalUpdate = function(t, e, n) {
          function i(t) {
            t.isGroup || (t.incremental = t.useHoverLayer = !0);
          }
          n = c(n);
          for (var r = t.start; r < t.end; r++) {
            var a = e.getItemLayout(r);
            if (u(e, a, r, n)) {
              var o = new this._symbolCtor(e, r, this._seriesScope);
              o.traverse(i), o.attr('position', a), this.group.add(o), e.setItemGraphicEl(r, o);
            }
          }
        }),
        (l.remove = function(t) {
          var e = this.group,
            n = this._data;
          n && t
            ? n.eachItemGraphicEl(function(t) {
                t.fadeOut(function() {
                  e.remove(t);
                });
              })
            : e.removeAll();
        });
      var d = s;
      t.exports = d;
    },
    A1Ka: function(t, e, n) {
      var i = n('bLfw'),
        r = n('sS/r'),
        a = n('D5nY'),
        o = a.detectSourceFormat,
        s = n('k9D9'),
        l = s.SERIES_LAYOUT_BY_COLUMN;
      i.extend({
        type: 'dataset',
        defaultOption: { seriesLayoutBy: l, sourceHeader: null, dimensions: null, source: null },
        optionUpdated: function() {
          o(this);
        },
      }),
        r.extend({ type: 'dataset' });
    },
    AH3D: function(t, e, n) {
      var i = n('ProS');
      n('y4/Y'),
        n('qWt2'),
        n('Qvb6'),
        i.registerAction(
          { type: 'showTip', event: 'showTip', update: 'tooltip:manuallyShowTip' },
          function() {},
        ),
        i.registerAction(
          { type: 'hideTip', event: 'hideTip', update: 'tooltip:manuallyHideTip' },
          function() {},
        );
    },
    AVZG: function(t, e, n) {
      var i = n('bYtY');
      function r(t, e, n) {
        n = n || {};
        var r = t.coordinateSystem,
          a = e.axis,
          o = {},
          s = a.getAxesOnZeroOf()[0],
          l = a.position,
          u = s ? 'onZero' : l,
          c = a.dim,
          h = r.getRect(),
          d = [h.x, h.x + h.width, h.y, h.y + h.height],
          f = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
          p = e.get('offset') || 0,
          g = 'x' === c ? [d[2] - p, d[3] + p] : [d[0] - p, d[1] + p];
        if (s) {
          var v = s.toGlobalCoord(s.dataToCoord(0));
          g[f.onZero] = Math.max(Math.min(v, g[1]), g[0]);
        }
        (o.position = ['y' === c ? g[f[u]] : d[0], 'x' === c ? g[f[u]] : d[3]]),
          (o.rotation = (Math.PI / 2) * ('x' === c ? 0 : 1));
        var m = { top: -1, bottom: 1, left: -1, right: 1 };
        (o.labelDirection = o.tickDirection = o.nameDirection = m[l]),
          (o.labelOffset = s ? g[f[l]] - g[f.onZero] : 0),
          e.get('axisTick.inside') && (o.tickDirection = -o.tickDirection),
          i.retrieve(n.labelInside, e.get('axisLabel.inside')) &&
            (o.labelDirection = -o.labelDirection);
        var y = e.get('axisLabel.rotate');
        return (o.labelRotate = 'top' === u ? -y : y), (o.z2 = 1), o;
      }
      e.layout = r;
    },
    Ae16: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY'),
        a = n('IwbS');
      n('Wqna'),
        n('rySg'),
        i.extendComponentView({
          type: 'grid',
          render: function(t, e) {
            this.group.removeAll(),
              t.get('show') &&
                this.group.add(
                  new a.Rect({
                    shape: t.coordinateSystem.getRect(),
                    style: r.defaults({ fill: t.get('backgroundColor') }, t.getItemStyle()),
                    silent: !0,
                    z2: -1,
                  }),
                );
          },
        }),
        i.registerPreprocessor(function(t) {
          t.xAxis && t.yAxis && !t.grid && (t.grid = {});
        });
    },
    B9fm: function(t, e, n) {
      var i = n('bYtY'),
        r = n('Qe9p'),
        a = n('YH21'),
        o = n('Ze12'),
        s = n('ItGF'),
        l = n('7aKB'),
        u = i.each,
        c = l.toCamelCase,
        h = ['', '-webkit-', '-moz-', '-o-'],
        d =
          'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;';
      function f(t) {
        var e = 'cubic-bezier(0.23, 1, 0.32, 1)',
          n = 'left ' + t + 's ' + e + ',top ' + t + 's ' + e;
        return i
          .map(h, function(t) {
            return t + 'transition:' + n;
          })
          .join(';');
      }
      function p(t) {
        var e = [],
          n = t.get('fontSize'),
          i = t.getTextColor();
        i && e.push('color:' + i), e.push('font:' + t.getFont());
        var r = t.get('lineHeight');
        null == r && (r = Math.round((3 * n) / 2)), n && e.push('line-height:' + r + 'px');
        var a = t.get('textShadowColor'),
          o = t.get('textShadowBlur') || 0,
          s = t.get('textShadowOffsetX') || 0,
          l = t.get('textShadowOffsetY') || 0;
        return (
          o && e.push('text-shadow:' + s + 'px ' + l + 'px ' + o + 'px ' + a),
          u(['decoration', 'align'], function(n) {
            var i = t.get(n);
            i && e.push('text-' + n + ':' + i);
          }),
          e.join(';')
        );
      }
      function g(t) {
        var e = [],
          n = t.get('transitionDuration'),
          i = t.get('backgroundColor'),
          a = t.getModel('textStyle'),
          o = t.get('padding');
        return (
          n && e.push(f(n)),
          i &&
            (s.canvasSupported
              ? e.push('background-Color:' + i)
              : (e.push('background-Color:#' + r.toHex(i)), e.push('filter:alpha(opacity=70)'))),
          u(['width', 'color', 'radius'], function(n) {
            var i = 'border-' + n,
              r = c(i),
              a = t.get(r);
            null != a && e.push(i + ':' + a + ('color' === n ? '' : 'px'));
          }),
          e.push(p(a)),
          null != o && e.push('padding:' + l.normalizeCssArray(o).join('px ') + 'px'),
          e.join(';') + ';'
        );
      }
      function v(t, e, n, i, r) {
        var a = e && e.painter;
        if (n) {
          var s = a && a.getViewportRoot();
          s && o.transformLocalCoord(t, s, document.body, i, r);
        } else {
          (t[0] = i), (t[1] = r);
          var l = a && a.getViewportRootOffset();
          l && ((t[0] += l.offsetLeft), (t[1] += l.offsetTop));
        }
        (t[2] = t[0] / e.getWidth()), (t[3] = t[1] / e.getHeight());
      }
      function m(t, e, n) {
        if (s.wxa) return null;
        var i = document.createElement('div');
        (i.domBelongToZr = !0), (this.el = i);
        var r = (this._zr = e.getZr()),
          o = (this._appendToBody = n && n.appendToBody);
        (this._styleCoord = [0, 0, 0, 0]),
          v(this._styleCoord, r, o, e.getWidth() / 2, e.getHeight() / 2),
          o ? document.body.appendChild(i) : t.appendChild(i),
          (this._container = t),
          (this._show = !1),
          this._hideTimeout;
        var l = this;
        (i.onmouseenter = function() {
          l._enterable && (clearTimeout(l._hideTimeout), (l._show = !0)), (l._inContent = !0);
        }),
          (i.onmousemove = function(t) {
            if (((t = t || window.event), !l._enterable)) {
              var e = r.handler,
                n = r.painter.getViewportRoot();
              a.normalizeEvent(n, t, !0), e.dispatch('mousemove', t);
            }
          }),
          (i.onmouseleave = function() {
            l._enterable && l._show && l.hideLater(l._hideDelay), (l._inContent = !1);
          });
      }
      m.prototype = {
        constructor: m,
        _enterable: !0,
        update: function(t) {
          var e = this._container,
            n = e.currentStyle || document.defaultView.getComputedStyle(e),
            i = e.style;
          'absolute' !== i.position && 'absolute' !== n.position && (i.position = 'relative');
          var r = t.get('alwaysShowContent');
          r && this._moveTooltipIfResized();
        },
        _moveTooltipIfResized: function() {
          var t = this._styleCoord[2],
            e = this._styleCoord[3],
            n = t * this._zr.getWidth(),
            i = e * this._zr.getHeight();
          this.moveTo(n, i);
        },
        show: function(t) {
          clearTimeout(this._hideTimeout);
          var e = this.el,
            n = this._styleCoord;
          (e.style.cssText =
            d + g(t) + ';left:' + n[0] + 'px;top:' + n[1] + 'px;' + (t.get('extraCssText') || '')),
            (e.style.display = e.innerHTML ? 'block' : 'none'),
            (e.style.pointerEvents = this._enterable ? 'auto' : 'none'),
            (this._show = !0);
        },
        setContent: function(t) {
          this.el.innerHTML = null == t ? '' : t;
        },
        setEnterable: function(t) {
          this._enterable = t;
        },
        getSize: function() {
          var t = this.el;
          return [t.clientWidth, t.clientHeight];
        },
        moveTo: function(t, e) {
          var n = this._styleCoord;
          v(n, this._zr, this._appendToBody, t, e);
          var i = this.el.style;
          (i.left = n[0] + 'px'), (i.top = n[1] + 'px');
        },
        hide: function() {
          (this.el.style.display = 'none'), (this._show = !1);
        },
        hideLater: function(t) {
          !this._show ||
            (this._inContent && this._enterable) ||
            (t
              ? ((this._hideDelay = t),
                (this._show = !1),
                (this._hideTimeout = setTimeout(i.bind(this.hide, this), t)))
              : this.hide());
        },
        isShow: function() {
          return this._show;
        },
        dispose: function() {
          this.el.parentNode.removeChild(this.el);
        },
        getOuterSize: function() {
          var t = this.el.clientWidth,
            e = this.el.clientHeight;
          if (document.defaultView && document.defaultView.getComputedStyle) {
            var n = document.defaultView.getComputedStyle(this.el);
            n &&
              ((t += parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10)),
              (e += parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10)));
          }
          return { width: t, height: e };
        },
      };
      var y = m;
      t.exports = y;
    },
    BPZU: function(t, e) {
      var n = 32,
        i = 7;
      function r(t) {
        var e = 0;
        while (t >= n) (e |= 1 & t), (t >>= 1);
        return t + e;
      }
      function a(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
          while (r < n && i(t[r], t[r - 1]) < 0) r++;
          o(t, e, r);
        } else while (r < n && i(t[r], t[r - 1]) >= 0) r++;
        return r - e;
      }
      function o(t, e, n) {
        n--;
        while (e < n) {
          var i = t[e];
          (t[e++] = t[n]), (t[n--] = i);
        }
      }
      function s(t, e, n, i, r) {
        for (i === e && i++; i < n; i++) {
          var a,
            o = t[i],
            s = e,
            l = i;
          while (s < l) (a = (s + l) >>> 1), r(o, t[a]) < 0 ? (l = a) : (s = a + 1);
          var u = i - s;
          switch (u) {
            case 3:
              t[s + 3] = t[s + 2];
            case 2:
              t[s + 2] = t[s + 1];
            case 1:
              t[s + 1] = t[s];
              break;
            default:
              while (u > 0) (t[s + u] = t[s + u - 1]), u--;
          }
          t[s] = o;
        }
      }
      function l(t, e, n, i, r, a) {
        var o = 0,
          s = 0,
          l = 1;
        if (a(t, e[n + r]) > 0) {
          s = i - r;
          while (l < s && a(t, e[n + r + l]) > 0) (o = l), (l = 1 + (l << 1)), l <= 0 && (l = s);
          l > s && (l = s), (o += r), (l += r);
        } else {
          s = r + 1;
          while (l < s && a(t, e[n + r - l]) <= 0) (o = l), (l = 1 + (l << 1)), l <= 0 && (l = s);
          l > s && (l = s);
          var u = o;
          (o = r - l), (l = r - u);
        }
        o++;
        while (o < l) {
          var c = o + ((l - o) >>> 1);
          a(t, e[n + c]) > 0 ? (o = c + 1) : (l = c);
        }
        return l;
      }
      function u(t, e, n, i, r, a) {
        var o = 0,
          s = 0,
          l = 1;
        if (a(t, e[n + r]) < 0) {
          s = r + 1;
          while (l < s && a(t, e[n + r - l]) < 0) (o = l), (l = 1 + (l << 1)), l <= 0 && (l = s);
          l > s && (l = s);
          var u = o;
          (o = r - l), (l = r - u);
        } else {
          s = i - r;
          while (l < s && a(t, e[n + r + l]) >= 0) (o = l), (l = 1 + (l << 1)), l <= 0 && (l = s);
          l > s && (l = s), (o += r), (l += r);
        }
        o++;
        while (o < l) {
          var c = o + ((l - o) >>> 1);
          a(t, e[n + c]) < 0 ? (l = c) : (o = c + 1);
        }
        return l;
      }
      function c(t, e) {
        var n,
          r,
          a = i,
          o = 0,
          s = 0;
        o = t.length;
        var c = [];
        function h(t, e) {
          (n[s] = t), (r[s] = e), (s += 1);
        }
        function d() {
          while (s > 1) {
            var t = s - 2;
            if ((t >= 1 && r[t - 1] <= r[t] + r[t + 1]) || (t >= 2 && r[t - 2] <= r[t] + r[t - 1]))
              r[t - 1] < r[t + 1] && t--;
            else if (r[t] > r[t + 1]) break;
            p(t);
          }
        }
        function f() {
          while (s > 1) {
            var t = s - 2;
            t > 0 && r[t - 1] < r[t + 1] && t--, p(t);
          }
        }
        function p(i) {
          var a = n[i],
            o = r[i],
            c = n[i + 1],
            h = r[i + 1];
          (r[i] = o + h), i === s - 3 && ((n[i + 1] = n[i + 2]), (r[i + 1] = r[i + 2])), s--;
          var d = u(t[c], t, a, o, 0, e);
          (a += d),
            (o -= d),
            0 !== o &&
              ((h = l(t[a + o - 1], t, c, h, h - 1, e)),
              0 !== h && (o <= h ? g(a, o, c, h) : v(a, o, c, h)));
        }
        function g(n, r, o, s) {
          var h = 0;
          for (h = 0; h < r; h++) c[h] = t[n + h];
          var d = 0,
            f = o,
            p = n;
          if (((t[p++] = t[f++]), 0 !== --s))
            if (1 !== r) {
              var g,
                v,
                m,
                y = a;
              while (1) {
                (g = 0), (v = 0), (m = !1);
                do {
                  if (e(t[f], c[d]) < 0) {
                    if (((t[p++] = t[f++]), v++, (g = 0), 0 === --s)) {
                      m = !0;
                      break;
                    }
                  } else if (((t[p++] = c[d++]), g++, (v = 0), 1 === --r)) {
                    m = !0;
                    break;
                  }
                } while ((g | v) < y);
                if (m) break;
                do {
                  if (((g = u(t[f], c, d, r, 0, e)), 0 !== g)) {
                    for (h = 0; h < g; h++) t[p + h] = c[d + h];
                    if (((p += g), (d += g), (r -= g), r <= 1)) {
                      m = !0;
                      break;
                    }
                  }
                  if (((t[p++] = t[f++]), 0 === --s)) {
                    m = !0;
                    break;
                  }
                  if (((v = l(c[d], t, f, s, 0, e)), 0 !== v)) {
                    for (h = 0; h < v; h++) t[p + h] = t[f + h];
                    if (((p += v), (f += v), (s -= v), 0 === s)) {
                      m = !0;
                      break;
                    }
                  }
                  if (((t[p++] = c[d++]), 1 === --r)) {
                    m = !0;
                    break;
                  }
                  y--;
                } while (g >= i || v >= i);
                if (m) break;
                y < 0 && (y = 0), (y += 2);
              }
              if (((a = y), a < 1 && (a = 1), 1 === r)) {
                for (h = 0; h < s; h++) t[p + h] = t[f + h];
                t[p + s] = c[d];
              } else {
                if (0 === r) throw new Error();
                for (h = 0; h < r; h++) t[p + h] = c[d + h];
              }
            } else {
              for (h = 0; h < s; h++) t[p + h] = t[f + h];
              t[p + s] = c[d];
            }
          else for (h = 0; h < r; h++) t[p + h] = c[d + h];
        }
        function v(n, r, o, s) {
          var h = 0;
          for (h = 0; h < s; h++) c[h] = t[o + h];
          var d = n + r - 1,
            f = s - 1,
            p = o + s - 1,
            g = 0,
            v = 0;
          if (((t[p--] = t[d--]), 0 !== --r))
            if (1 !== s) {
              var m = a;
              while (1) {
                var y = 0,
                  x = 0,
                  _ = !1;
                do {
                  if (e(c[f], t[d]) < 0) {
                    if (((t[p--] = t[d--]), y++, (x = 0), 0 === --r)) {
                      _ = !0;
                      break;
                    }
                  } else if (((t[p--] = c[f--]), x++, (y = 0), 1 === --s)) {
                    _ = !0;
                    break;
                  }
                } while ((y | x) < m);
                if (_) break;
                do {
                  if (((y = r - u(c[f], t, n, r, r - 1, e)), 0 !== y)) {
                    for (p -= y, d -= y, r -= y, v = p + 1, g = d + 1, h = y - 1; h >= 0; h--)
                      t[v + h] = t[g + h];
                    if (0 === r) {
                      _ = !0;
                      break;
                    }
                  }
                  if (((t[p--] = c[f--]), 1 === --s)) {
                    _ = !0;
                    break;
                  }
                  if (((x = s - l(t[d], c, 0, s, s - 1, e)), 0 !== x)) {
                    for (p -= x, f -= x, s -= x, v = p + 1, g = f + 1, h = 0; h < x; h++)
                      t[v + h] = c[g + h];
                    if (s <= 1) {
                      _ = !0;
                      break;
                    }
                  }
                  if (((t[p--] = t[d--]), 0 === --r)) {
                    _ = !0;
                    break;
                  }
                  m--;
                } while (y >= i || x >= i);
                if (_) break;
                m < 0 && (m = 0), (m += 2);
              }
              if (((a = m), a < 1 && (a = 1), 1 === s)) {
                for (p -= r, d -= r, v = p + 1, g = d + 1, h = r - 1; h >= 0; h--)
                  t[v + h] = t[g + h];
                t[p] = c[f];
              } else {
                if (0 === s) throw new Error();
                for (g = p - (s - 1), h = 0; h < s; h++) t[g + h] = c[h];
              }
            } else {
              for (p -= r, d -= r, v = p + 1, g = d + 1, h = r - 1; h >= 0; h--)
                t[v + h] = t[g + h];
              t[p] = c[f];
            }
          else for (g = p - (s - 1), h = 0; h < s; h++) t[g + h] = c[h];
        }
        (n = []), (r = []), (this.mergeRuns = d), (this.forceMergeRuns = f), (this.pushRun = h);
      }
      function h(t, e, i, o) {
        i || (i = 0), o || (o = t.length);
        var l = o - i;
        if (!(l < 2)) {
          var u = 0;
          if (l < n) return (u = a(t, i, o, e)), void s(t, i, o, i + u, e);
          var h = new c(t, e),
            d = r(l);
          do {
            if (((u = a(t, i, o, e)), u < d)) {
              var f = l;
              f > d && (f = d), s(t, i, i + f, i + u, e), (u = f);
            }
            h.pushRun(i, u), h.mergeRuns(), (l -= u), (i += u);
          } while (0 !== l);
          h.forceMergeRuns();
        }
      }
      t.exports = h;
    },
    BlVb: function(t, e, n) {
      var i = n('hyiK'),
        r = 1e-8;
      function a(t, e) {
        return Math.abs(t - e) < r;
      }
      function o(t, e, n) {
        var r = 0,
          o = t[0];
        if (!o) return !1;
        for (var s = 1; s < t.length; s++) {
          var l = t[s];
          (r += i(o[0], o[1], l[0], l[1], e, n)), (o = l);
        }
        var u = t[0];
        return (a(o[0], u[0]) && a(o[1], u[1])) || (r += i(o[0], o[1], u[0], u[1], e, n)), 0 !== r;
      }
      e.contain = o;
    },
    Bq2U: function(t, e, n) {
      var i = n('RDYZ'),
        r = n('Qe9p'),
        a = n('bYtY'),
        o = a.isArrayLike,
        s = Array.prototype.slice;
      function l(t, e) {
        return t[e];
      }
      function u(t, e, n) {
        t[e] = n;
      }
      function c(t, e, n) {
        return (e - t) * n + t;
      }
      function h(t, e, n) {
        return n > 0.5 ? e : t;
      }
      function d(t, e, n, i, r) {
        var a = t.length;
        if (1 === r) for (var o = 0; o < a; o++) i[o] = c(t[o], e[o], n);
        else {
          var s = a && t[0].length;
          for (o = 0; o < a; o++) for (var l = 0; l < s; l++) i[o][l] = c(t[o][l], e[o][l], n);
        }
      }
      function f(t, e, n) {
        var i = t.length,
          r = e.length;
        if (i !== r) {
          var a = i > r;
          if (a) t.length = r;
          else for (var o = i; o < r; o++) t.push(1 === n ? e[o] : s.call(e[o]));
        }
        var l = t[0] && t[0].length;
        for (o = 0; o < t.length; o++)
          if (1 === n) isNaN(t[o]) && (t[o] = e[o]);
          else for (var u = 0; u < l; u++) isNaN(t[o][u]) && (t[o][u] = e[o][u]);
      }
      function p(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
          for (var r = 0; r < i; r++) if (t[r] !== e[r]) return !1;
        } else {
          var a = t[0].length;
          for (r = 0; r < i; r++) for (var o = 0; o < a; o++) if (t[r][o] !== e[r][o]) return !1;
        }
        return !0;
      }
      function g(t, e, n, i, r, a, o, s, l) {
        var u = t.length;
        if (1 === l) for (var c = 0; c < u; c++) s[c] = v(t[c], e[c], n[c], i[c], r, a, o);
        else {
          var h = t[0].length;
          for (c = 0; c < u; c++)
            for (var d = 0; d < h; d++) s[c][d] = v(t[c][d], e[c][d], n[c][d], i[c][d], r, a, o);
        }
      }
      function v(t, e, n, i, r, a, o) {
        var s = 0.5 * (n - t),
          l = 0.5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
      }
      function m(t) {
        if (o(t)) {
          var e = t.length;
          if (o(t[0])) {
            for (var n = [], i = 0; i < e; i++) n.push(s.call(t[i]));
            return n;
          }
          return s.call(t);
        }
        return t;
      }
      function y(t) {
        return (
          (t[0] = Math.floor(t[0])),
          (t[1] = Math.floor(t[1])),
          (t[2] = Math.floor(t[2])),
          'rgba(' + t.join(',') + ')'
        );
      }
      function x(t) {
        var e = t[t.length - 1].value;
        return o(e && e[0]) ? 2 : 1;
      }
      function _(t, e, n, a, s, l) {
        var u = t._getter,
          m = t._setter,
          _ = 'spline' === e,
          b = a.length;
        if (b) {
          var w,
            S = a[0].value,
            M = o(S),
            T = !1,
            C = !1,
            I = M ? x(a) : 0;
          a.sort(function(t, e) {
            return t.time - e.time;
          }),
            (w = a[b - 1].time);
          for (var k = [], A = [], D = a[0].value, O = !0, P = 0; P < b; P++) {
            k.push(a[P].time / w);
            var E = a[P].value;
            if (
              ((M && p(E, D, I)) || (!M && E === D) || (O = !1), (D = E), 'string' === typeof E)
            ) {
              var L = r.parse(E);
              L ? ((E = L), (T = !0)) : (C = !0);
            }
            A.push(E);
          }
          if (l || !O) {
            var R = A[b - 1];
            for (P = 0; P < b - 1; P++)
              M ? f(A[P], R, I) : !isNaN(A[P]) || isNaN(R) || C || T || (A[P] = R);
            M && f(u(t._target, s), R, I);
            var N,
              z,
              B,
              j,
              F,
              Y,
              V = 0,
              H = 0;
            if (T) var W = [0, 0, 0, 0];
            var G = function(t, e) {
                var n;
                if (e < 0) n = 0;
                else if (e < H) {
                  for (N = Math.min(V + 1, b - 1), n = N; n >= 0; n--) if (k[n] <= e) break;
                  n = Math.min(n, b - 2);
                } else {
                  for (n = V; n < b; n++) if (k[n] > e) break;
                  n = Math.min(n - 1, b - 2);
                }
                (V = n), (H = e);
                var i = k[n + 1] - k[n];
                if (0 !== i)
                  if (((z = (e - k[n]) / i), _))
                    if (
                      ((j = A[n]),
                      (B = A[0 === n ? n : n - 1]),
                      (F = A[n > b - 2 ? b - 1 : n + 1]),
                      (Y = A[n > b - 3 ? b - 1 : n + 2]),
                      M)
                    )
                      g(B, j, F, Y, z, z * z, z * z * z, u(t, s), I);
                    else {
                      if (T) (r = g(B, j, F, Y, z, z * z, z * z * z, W, 1)), (r = y(W));
                      else {
                        if (C) return h(j, F, z);
                        r = v(B, j, F, Y, z, z * z, z * z * z);
                      }
                      m(t, s, r);
                    }
                  else if (M) d(A[n], A[n + 1], z, u(t, s), I);
                  else {
                    var r;
                    if (T) d(A[n], A[n + 1], z, W, 1), (r = y(W));
                    else {
                      if (C) return h(A[n], A[n + 1], z);
                      r = c(A[n], A[n + 1], z);
                    }
                    m(t, s, r);
                  }
              },
              U = new i({
                target: t._target,
                life: w,
                loop: t._loop,
                delay: t._delay,
                onframe: G,
                ondestroy: n,
              });
            return e && 'spline' !== e && (U.easing = e), U;
          }
        }
      }
      var b = function(t, e, n, i) {
        (this._tracks = {}),
          (this._target = t),
          (this._loop = e || !1),
          (this._getter = n || l),
          (this._setter = i || u),
          (this._clipCount = 0),
          (this._delay = 0),
          (this._doneList = []),
          (this._onframeList = []),
          (this._clipList = []);
      };
      b.prototype = {
        when: function(t, e) {
          var n = this._tracks;
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              if (!n[i]) {
                n[i] = [];
                var r = this._getter(this._target, i);
                if (null == r) continue;
                0 !== t && n[i].push({ time: 0, value: m(r) });
              }
              n[i].push({ time: t, value: e[i] });
            }
          return this;
        },
        during: function(t) {
          return this._onframeList.push(t), this;
        },
        pause: function() {
          for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
          this._paused = !0;
        },
        resume: function() {
          for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
          this._paused = !1;
        },
        isPaused: function() {
          return !!this._paused;
        },
        _doneCallback: function() {
          (this._tracks = {}), (this._clipList.length = 0);
          for (var t = this._doneList, e = t.length, n = 0; n < e; n++) t[n].call(this);
        },
        start: function(t, e) {
          var n,
            i = this,
            r = 0,
            a = function() {
              r--, r || i._doneCallback();
            };
          for (var o in this._tracks)
            if (this._tracks.hasOwnProperty(o)) {
              var s = _(this, t, a, this._tracks[o], o, e);
              s &&
                (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), (n = s));
            }
          if (n) {
            var l = n.onframe;
            n.onframe = function(t, e) {
              l(t, e);
              for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e);
            };
          }
          return r || this._doneCallback(), this;
        },
        stop: function(t) {
          for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
            var r = e[i];
            t && r.onframe(this._target, 1), n && n.removeClip(r);
          }
          e.length = 0;
        },
        delay: function(t) {
          return (this._delay = t), this;
        },
        done: function(t) {
          return t && this._doneList.push(t), this;
        },
        getClips: function() {
          return this._clipList;
        },
      };
      var w = b;
      t.exports = w;
    },
    C0SR: function(t, e, n) {
      var i = n('YH21'),
        r = function() {
          this._track = [];
        };
      function a(t) {
        var e = t[1][0] - t[0][0],
          n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n);
      }
      function o(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
      }
      r.prototype = {
        constructor: r,
        recognize: function(t, e, n) {
          return this._doTrack(t, e, n), this._recognize(t);
        },
        clear: function() {
          return (this._track.length = 0), this;
        },
        _doTrack: function(t, e, n) {
          var r = t.touches;
          if (r) {
            for (
              var a = { points: [], touches: [], target: e, event: t }, o = 0, s = r.length;
              o < s;
              o++
            ) {
              var l = r[o],
                u = i.clientToLocal(n, l, {});
              a.points.push([u.zrX, u.zrY]), a.touches.push(l);
            }
            this._track.push(a);
          }
        },
        _recognize: function(t) {
          for (var e in s)
            if (s.hasOwnProperty(e)) {
              var n = s[e](this._track, t);
              if (n) return n;
            }
        },
      };
      var s = {
          pinch: function(t, e) {
            var n = t.length;
            if (n) {
              var i = (t[n - 1] || {}).points,
                r = (t[n - 2] || {}).points || i;
              if (r && r.length > 1 && i && i.length > 1) {
                var s = a(i) / a(r);
                !isFinite(s) && (s = 1), (e.pinchScale = s);
                var l = o(i);
                return (
                  (e.pinchX = l[0]),
                  (e.pinchY = l[1]),
                  { type: 'pinch', target: t[0].target, event: e }
                );
              }
            }
          },
        },
        l = r;
      t.exports = l;
    },
    Cm0C: function(t, e, n) {
      n('5NHt'), n('f3JH');
    },
    D5nY: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('4NO4')),
        a = r.makeInner,
        o = r.getDataItemValue,
        s = n('bYtY'),
        l = s.createHashMap,
        u = s.each,
        c = s.map,
        h = s.isArray,
        d = s.isString,
        f = s.isObject,
        p = s.isTypedArray,
        g = s.isArrayLike,
        v = s.extend,
        m = (s.assert, n('7G+c')),
        y = n('k9D9'),
        x = y.SOURCE_FORMAT_ORIGINAL,
        _ = y.SOURCE_FORMAT_ARRAY_ROWS,
        b = y.SOURCE_FORMAT_OBJECT_ROWS,
        w = y.SOURCE_FORMAT_KEYED_COLUMNS,
        S = y.SOURCE_FORMAT_UNKNOWN,
        M = y.SOURCE_FORMAT_TYPED_ARRAY,
        T = y.SERIES_LAYOUT_BY_ROW,
        C = { Must: 1, Might: 2, Not: 3 },
        I = a();
      function k(t) {
        var e = t.option.source,
          n = S;
        if (p(e)) n = M;
        else if (h(e)) {
          0 === e.length && (n = _);
          for (var i = 0, r = e.length; i < r; i++) {
            var a = e[i];
            if (null != a) {
              if (h(a)) {
                n = _;
                break;
              }
              if (f(a)) {
                n = b;
                break;
              }
            }
          }
        } else if (f(e)) {
          for (var o in e)
            if (e.hasOwnProperty(o) && g(e[o])) {
              n = w;
              break;
            }
        } else if (null != e) throw new Error('Invalid data');
        I(t).sourceFormat = n;
      }
      function A(t) {
        return I(t).source;
      }
      function D(t) {
        I(t).datasetMap = l();
      }
      function O(t) {
        var e = t.option,
          n = e.data,
          i = p(n) ? M : x,
          r = !1,
          a = e.seriesLayoutBy,
          o = e.sourceHeader,
          s = e.dimensions,
          l = B(t);
        if (l) {
          var u = l.option;
          (n = u.source),
            (i = I(l).sourceFormat),
            (r = !0),
            (a = a || u.seriesLayoutBy),
            null == o && (o = u.sourceHeader),
            (s = s || u.dimensions);
        }
        var c = P(n, i, a, o, s);
        I(t).source = new m({
          data: n,
          fromDataset: r,
          seriesLayoutBy: a,
          sourceFormat: i,
          dimensionsDefine: c.dimensionsDefine,
          startIndex: c.startIndex,
          dimensionsDetectCount: c.dimensionsDetectCount,
          encodeDefine: e.encode,
        });
      }
      function P(t, e, n, i, r) {
        if (!t) return { dimensionsDefine: E(r) };
        var a, s;
        if (e === _)
          'auto' === i || null == i
            ? L(
                function(t) {
                  null != t && '-' !== t && (d(t) ? null == s && (s = 1) : (s = 0));
                },
                n,
                t,
                10,
              )
            : (s = i ? 1 : 0),
            r ||
              1 !== s ||
              ((r = []),
              L(
                function(t, e) {
                  r[e] = null != t ? t : '';
                },
                n,
                t,
              )),
            (a = r ? r.length : n === T ? t.length : t[0] ? t[0].length : null);
        else if (e === b) r || (r = R(t));
        else if (e === w)
          r ||
            ((r = []),
            u(t, function(t, e) {
              r.push(e);
            }));
        else if (e === x) {
          var l = o(t[0]);
          a = (h(l) && l.length) || 1;
        }
        return { startIndex: s, dimensionsDefine: E(r), dimensionsDetectCount: a };
      }
      function E(t) {
        if (t) {
          var e = l();
          return c(t, function(t, n) {
            if (((t = v({}, f(t) ? t : { name: t })), null == t.name)) return t;
            (t.name += ''), null == t.displayName && (t.displayName = t.name);
            var i = e.get(t.name);
            return i ? (t.name += '-' + i.count++) : e.set(t.name, { count: 1 }), t;
          });
        }
      }
      function L(t, e, n, i) {
        if ((null == i && (i = 1 / 0), e === T))
          for (var r = 0; r < n.length && r < i; r++) t(n[r] ? n[r][0] : null, r);
        else {
          var a = n[0] || [];
          for (r = 0; r < a.length && r < i; r++) t(a[r], r);
        }
      }
      function R(t) {
        var e,
          n = 0;
        while (n < t.length && !(e = t[n++]));
        if (e) {
          var i = [];
          return (
            u(e, function(t, e) {
              i.push(e);
            }),
            i
          );
        }
      }
      function N(t, e, n) {
        var i = {},
          r = B(e);
        if (!r || !t) return i;
        var a,
          o,
          s = [],
          l = [],
          c = e.ecModel,
          h = I(c).datasetMap,
          d = r.uid + '_' + n.seriesLayoutBy;
        (t = t.slice()),
          u(t, function(e, n) {
            !f(e) && (t[n] = { name: e }),
              'ordinal' === e.type && null == a && ((a = n), (o = v(t[n]))),
              (i[e.name] = []);
          });
        var p = h.get(d) || h.set(d, { categoryWayDim: o, valueWayDim: 0 });
        function g(t, e, n) {
          for (var i = 0; i < n; i++) t.push(e + i);
        }
        function v(t) {
          var e = t.dimsDef;
          return e ? e.length : 1;
        }
        return (
          u(t, function(t, e) {
            var n = t.name,
              r = v(t);
            if (null == a) {
              var o = p.valueWayDim;
              g(i[n], o, r), g(l, o, r), (p.valueWayDim += r);
            } else if (a === e) g(i[n], 0, r), g(s, 0, r);
            else {
              o = p.categoryWayDim;
              g(i[n], o, r), g(l, o, r), (p.categoryWayDim += r);
            }
          }),
          s.length && (i.itemName = s),
          l.length && (i.seriesName = l),
          i
        );
      }
      function z(t, e, n) {
        var i = {},
          r = B(t);
        if (!r) return i;
        var a,
          o = e.sourceFormat,
          s = e.dimensionsDefine;
        (o !== b && o !== w) ||
          u(s, function(t, e) {
            'name' === (f(t) ? t.name : t) && (a = e);
          });
        var l = (function() {
          for (var t = {}, i = {}, r = [], l = 0, u = Math.min(5, n); l < u; l++) {
            var c = F(e.data, o, e.seriesLayoutBy, s, e.startIndex, l);
            r.push(c);
            var h = c === C.Not;
            if (
              (h && null == t.v && l !== a && (t.v = l),
              (null == t.n || t.n === t.v || (!h && r[t.n] === C.Not)) && (t.n = l),
              d(t) && r[t.n] !== C.Not)
            )
              return t;
            h ||
              (c === C.Might && null == i.v && l !== a && (i.v = l),
              (null != i.n && i.n !== i.v) || (i.n = l));
          }
          function d(t) {
            return null != t.v && null != t.n;
          }
          return d(t) ? t : d(i) ? i : null;
        })();
        if (l) {
          i.value = l.v;
          var c = null != a ? a : l.n;
          (i.itemName = [c]), (i.seriesName = [c]);
        }
        return i;
      }
      function B(t) {
        var e = t.option,
          n = e.data;
        if (!n) return t.ecModel.getComponent('dataset', e.datasetIndex || 0);
      }
      function j(t, e) {
        return F(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
      }
      function F(t, e, n, i, r, a) {
        var s,
          l,
          u,
          c = 5;
        if (p(t)) return C.Not;
        if (i) {
          var g = i[a];
          f(g) ? ((l = g.name), (u = g.type)) : d(g) && (l = g);
        }
        if (null != u) return 'ordinal' === u ? C.Must : C.Not;
        if (e === _)
          if (n === T) {
            for (var v = t[a], m = 0; m < (v || []).length && m < c; m++)
              if (null != (s = I(v[r + m]))) return s;
          } else
            for (m = 0; m < t.length && m < c; m++) {
              var y = t[r + m];
              if (y && null != (s = I(y[a]))) return s;
            }
        else if (e === b) {
          if (!l) return C.Not;
          for (m = 0; m < t.length && m < c; m++) {
            var S = t[m];
            if (S && null != (s = I(S[l]))) return s;
          }
        } else if (e === w) {
          if (!l) return C.Not;
          v = t[l];
          if (!v || p(v)) return C.Not;
          for (m = 0; m < v.length && m < c; m++) if (null != (s = I(v[m]))) return s;
        } else if (e === x)
          for (m = 0; m < t.length && m < c; m++) {
            S = t[m];
            var M = o(S);
            if (!h(M)) return C.Not;
            if (null != (s = I(M[a]))) return s;
          }
        function I(t) {
          var e = d(t);
          return null != t && isFinite(t) && '' !== t
            ? e
              ? C.Might
              : C.Not
            : e && '-' !== t
            ? C.Must
            : void 0;
        }
        return C.Not;
      }
      (e.BE_ORDINAL = C),
        (e.detectSourceFormat = k),
        (e.getSource = A),
        (e.resetSourceDefaulter = D),
        (e.prepareSource = O),
        (e.makeSeriesEncodeForAxisCoordSys = N),
        (e.makeSeriesEncodeForNameBased = z),
        (e.guessOrdinal = j);
    },
    DN4a: function(t, e, n) {
      var i = n('Fofx'),
        r = n('QBsz'),
        a = i.identity,
        o = 5e-5;
      function s(t) {
        return t > o || t < -o;
      }
      var l = function(t) {
          (t = t || {}),
            t.position || (this.position = [0, 0]),
            null == t.rotation && (this.rotation = 0),
            t.scale || (this.scale = [1, 1]),
            (this.origin = this.origin || null);
        },
        u = l.prototype;
      (u.transform = null),
        (u.needLocalTransform = function() {
          return (
            s(this.rotation) ||
            s(this.position[0]) ||
            s(this.position[1]) ||
            s(this.scale[0] - 1) ||
            s(this.scale[1] - 1)
          );
        });
      var c = [];
      (u.updateTransform = function() {
        var t = this.parent,
          e = t && t.transform,
          n = this.needLocalTransform(),
          r = this.transform;
        if (n || e) {
          (r = r || i.create()),
            n ? this.getLocalTransform(r) : a(r),
            e && (n ? i.mul(r, t.transform, r) : i.copy(r, t.transform)),
            (this.transform = r);
          var o = this.globalScaleRatio;
          if (null != o && 1 !== o) {
            this.getGlobalScale(c);
            var s = c[0] < 0 ? -1 : 1,
              l = c[1] < 0 ? -1 : 1,
              u = ((c[0] - s) * o + s) / c[0] || 0,
              h = ((c[1] - l) * o + l) / c[1] || 0;
            (r[0] *= u), (r[1] *= u), (r[2] *= h), (r[3] *= h);
          }
          (this.invTransform = this.invTransform || i.create()), i.invert(this.invTransform, r);
        } else r && a(r);
      }),
        (u.getLocalTransform = function(t) {
          return l.getLocalTransform(this, t);
        }),
        (u.setTransform = function(t) {
          var e = this.transform,
            n = t.dpr || 1;
          e
            ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5])
            : t.setTransform(n, 0, 0, n, 0, 0);
        }),
        (u.restoreTransform = function(t) {
          var e = t.dpr || 1;
          t.setTransform(e, 0, 0, e, 0, 0);
        });
      var h = [],
        d = i.create();
      (u.setLocalTransform = function(t) {
        if (t) {
          var e = t[0] * t[0] + t[1] * t[1],
            n = t[2] * t[2] + t[3] * t[3],
            i = this.position,
            r = this.scale;
          s(e - 1) && (e = Math.sqrt(e)),
            s(n - 1) && (n = Math.sqrt(n)),
            t[0] < 0 && (e = -e),
            t[3] < 0 && (n = -n),
            (i[0] = t[4]),
            (i[1] = t[5]),
            (r[0] = e),
            (r[1] = n),
            (this.rotation = Math.atan2(-t[1] / n, t[0] / e));
        }
      }),
        (u.decomposeTransform = function() {
          if (this.transform) {
            var t = this.parent,
              e = this.transform;
            t && t.transform && (i.mul(h, t.invTransform, e), (e = h));
            var n = this.origin;
            n &&
              (n[0] || n[1]) &&
              ((d[4] = n[0]),
              (d[5] = n[1]),
              i.mul(h, e, d),
              (h[4] -= n[0]),
              (h[5] -= n[1]),
              (e = h)),
              this.setLocalTransform(e);
          }
        }),
        (u.getGlobalScale = function(t) {
          var e = this.transform;
          return (
            (t = t || []),
            e
              ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
                (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
                e[0] < 0 && (t[0] = -t[0]),
                e[3] < 0 && (t[1] = -t[1]),
                t)
              : ((t[0] = 1), (t[1] = 1), t)
          );
        }),
        (u.transformCoordToLocal = function(t, e) {
          var n = [t, e],
            i = this.invTransform;
          return i && r.applyTransform(n, n, i), n;
        }),
        (u.transformCoordToGlobal = function(t, e) {
          var n = [t, e],
            i = this.transform;
          return i && r.applyTransform(n, n, i), n;
        }),
        (l.getLocalTransform = function(t, e) {
          (e = e || []), a(e);
          var n = t.origin,
            r = t.scale || [1, 1],
            o = t.rotation || 0,
            s = t.position || [0, 0];
          return (
            n && ((e[4] -= n[0]), (e[5] -= n[1])),
            i.scale(e, e, r),
            o && i.rotate(e, e, o),
            n && ((e[4] += n[0]), (e[5] += n[1])),
            (e[4] += s[0]),
            (e[5] += s[1]),
            e
          );
        });
      var f = l;
      t.exports = f;
    },
    Dagg: function(t, e, n) {
      var i = n('Gev7'),
        r = n('mFDi'),
        a = n('bYtY'),
        o = n('Xnb7');
      function s(t) {
        i.call(this, t);
      }
      (s.prototype = {
        constructor: s,
        type: 'image',
        brush: function(t, e) {
          var n = this.style,
            i = n.image;
          n.bind(t, this, e);
          var r = (this._image = o.createOrUpdateImage(i, this._image, this, this.onload));
          if (r && o.isImageReady(r)) {
            var a = n.x || 0,
              s = n.y || 0,
              l = n.width,
              u = n.height,
              c = r.width / r.height;
            if (
              (null == l && null != u
                ? (l = u * c)
                : null == u && null != l
                ? (u = l / c)
                : null == l && null == u && ((l = r.width), (u = r.height)),
              this.setTransform(t),
              n.sWidth && n.sHeight)
            ) {
              var h = n.sx || 0,
                d = n.sy || 0;
              t.drawImage(r, h, d, n.sWidth, n.sHeight, a, s, l, u);
            } else if (n.sx && n.sy) {
              (h = n.sx), (d = n.sy);
              var f = l - h,
                p = u - d;
              t.drawImage(r, h, d, f, p, a, s, l, u);
            } else t.drawImage(r, a, s, l, u);
            null != n.text &&
              (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
          }
        },
        getBoundingRect: function() {
          var t = this.style;
          return (
            this._rect || (this._rect = new r(t.x || 0, t.y || 0, t.width || 0, t.height || 0)),
            this._rect
          );
        },
      }),
        a.inherits(s, i);
      var l = s;
      t.exports = l;
    },
    Ez2D: function(t, e, n) {
      var i = n('bYtY'),
        r = n('4NO4');
      function a(t, e) {
        var n,
          a = [],
          o = t.seriesIndex;
        if (null == o || !(n = e.getSeriesByIndex(o))) return { point: [] };
        var s = n.getData(),
          l = r.queryDataIndex(s, t);
        if (null == l || l < 0 || i.isArray(l)) return { point: [] };
        var u = s.getItemGraphicEl(l),
          c = n.coordinateSystem;
        if (n.getTooltipPosition) a = n.getTooltipPosition(l) || [];
        else if (c && c.dataToPoint)
          a =
            c.dataToPoint(
              s.getValues(
                i.map(c.dimensions, function(t) {
                  return s.mapDimension(t);
                }),
                l,
                !0,
              ),
            ) || [];
        else if (u) {
          var h = u.getBoundingRect().clone();
          h.applyTransform(u.transform), (a = [h.x + h.width / 2, h.y + h.height / 2]);
        }
        return { point: a, el: u };
      }
      t.exports = a;
    },
    F7hV: function(t, e, n) {
      var i = n('MBQ8'),
        r = i.extend({
          type: 'series.bar',
          dependencies: ['grid', 'polar'],
          brushSelector: 'rect',
          getProgressive: function() {
            return !!this.get('large') && this.get('progressive');
          },
          getProgressiveThreshold: function() {
            var t = this.get('progressiveThreshold'),
              e = this.get('largeThreshold');
            return e > t && (t = e), t;
          },
          defaultOption: {
            clip: !0,
            roundCap: !1,
            showBackground: !1,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
              borderColor: null,
              borderWidth: 0,
              borderType: 'solid',
              borderRadius: 0,
              shadowBlur: 0,
              shadowColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1,
            },
          },
        });
      t.exports = r;
    },
    F9bG: function(t, e, n) {
      var i = n('bYtY'),
        r = n('ItGF'),
        a = n('4NO4'),
        o = a.makeInner,
        s = o(),
        l = i.each;
      function u(t, e, n) {
        if (!r.node) {
          var i = e.getZr();
          s(i).records || (s(i).records = {}), c(i, e);
          var a = s(i).records[t] || (s(i).records[t] = {});
          a.handler = n;
        }
      }
      function c(t, e) {
        function n(n, i) {
          t.on(n, function(n) {
            var r = p(e);
            l(s(t).records, function(t) {
              t && i(t, n, r.dispatchAction);
            }),
              h(r.pendings, e);
          });
        }
        s(t).initialized ||
          ((s(t).initialized = !0),
          n('click', i.curry(f, 'click')),
          n('mousemove', i.curry(f, 'mousemove')),
          n('globalout', d));
      }
      function h(t, e) {
        var n,
          i = t.showTip.length,
          r = t.hideTip.length;
        i ? (n = t.showTip[i - 1]) : r && (n = t.hideTip[r - 1]),
          n && ((n.dispatchAction = null), e.dispatchAction(n));
      }
      function d(t, e, n) {
        t.handler('leave', null, n);
      }
      function f(t, e, n, i) {
        e.handler(t, n, i);
      }
      function p(t) {
        var e = { showTip: [], hideTip: [] },
          n = function(i) {
            var r = e[i.type];
            r ? r.push(i) : ((i.dispatchAction = n), t.dispatchAction(i));
          };
        return { dispatchAction: n, pendings: e };
      }
      function g(t, e) {
        if (!r.node) {
          var n = e.getZr(),
            i = (s(n).records || {})[t];
          i && (s(n).records[t] = null);
        }
      }
      (e.register = u), (e.unregister = g);
    },
    FBjb: function(t, e, n) {
      var i = n('bYtY'),
        r = n('oVpE'),
        a = r.createSymbol,
        o = n('IwbS'),
        s = n('OELB'),
        l = s.parsePercent,
        u = n('x3X8'),
        c = u.getDefaultLabel;
      function h(t, e, n) {
        o.Group.call(this), this.updateData(t, e, n);
      }
      var d = h.prototype,
        f = (h.getSymbolSize = function(t, e) {
          var n = t.getItemVisual(e, 'symbolSize');
          return n instanceof Array ? n.slice() : [+n, +n];
        });
      function p(t) {
        return [t[0] / 2, t[1] / 2];
      }
      function g(t, e) {
        this.parent.drift(t, e);
      }
      (d._createSymbol = function(t, e, n, i, r) {
        this.removeAll();
        var o = e.getItemVisual(n, 'color'),
          s = a(t, -1, -1, 2, 2, o, r);
        s.attr({ z2: 100, culling: !0, scale: p(i) }),
          (s.drift = g),
          (this._symbolType = t),
          this.add(s);
      }),
        (d.stopSymbolAnimation = function(t) {
          this.childAt(0).stopAnimation(t);
        }),
        (d.getSymbolPath = function() {
          return this.childAt(0);
        }),
        (d.getScale = function() {
          return this.childAt(0).scale;
        }),
        (d.highlight = function() {
          this.childAt(0).trigger('emphasis');
        }),
        (d.downplay = function() {
          this.childAt(0).trigger('normal');
        }),
        (d.setZ = function(t, e) {
          var n = this.childAt(0);
          (n.zlevel = t), (n.z = e);
        }),
        (d.setDraggable = function(t) {
          var e = this.childAt(0);
          (e.draggable = t), (e.cursor = t ? 'move' : e.cursor);
        }),
        (d.updateData = function(t, e, n) {
          this.silent = !1;
          var i = t.getItemVisual(e, 'symbol') || 'circle',
            r = t.hostModel,
            a = f(t, e),
            s = i !== this._symbolType;
          if (s) {
            var l = t.getItemVisual(e, 'symbolKeepAspect');
            this._createSymbol(i, t, e, a, l);
          } else {
            var u = this.childAt(0);
            (u.silent = !1), o.updateProps(u, { scale: p(a) }, r, e);
          }
          if ((this._updateCommon(t, e, a, n), s)) {
            u = this.childAt(0);
            var c = n && n.fadeIn,
              h = { scale: u.scale.slice() };
            c && (h.style = { opacity: u.style.opacity }),
              (u.scale = [0, 0]),
              c && (u.style.opacity = 0),
              o.initProps(u, h, r, e);
          }
          this._seriesModel = r;
        });
      var v = ['itemStyle'],
        m = ['emphasis', 'itemStyle'],
        y = ['label'],
        x = ['emphasis', 'label'];
      function _(t, e) {
        if (!this.incremental && !this.useHoverLayer)
          if ('emphasis' === e) {
            var n = this.__symbolOriginalScale,
              i = n[1] / n[0],
              r = { scale: [Math.max(1.1 * n[0], n[0] + 3), Math.max(1.1 * n[1], n[1] + 3 * i)] };
            this.animateTo(r, 400, 'elasticOut');
          } else
            'normal' === e &&
              this.animateTo({ scale: this.__symbolOriginalScale }, 400, 'elasticOut');
      }
      (d._updateCommon = function(t, e, n, r) {
        var a = this.childAt(0),
          s = t.hostModel,
          u = t.getItemVisual(e, 'color');
        'image' !== a.type
          ? a.useStyle({ strokeNoScale: !0 })
          : a.setStyle({
              opacity: 1,
              shadowBlur: null,
              shadowOffsetX: null,
              shadowOffsetY: null,
              shadowColor: null,
            });
        var h = r && r.itemStyle,
          d = r && r.hoverItemStyle,
          f = r && r.symbolOffset,
          g = r && r.labelModel,
          b = r && r.hoverLabelModel,
          w = r && r.hoverAnimation,
          S = r && r.cursorStyle;
        if (!r || t.hasItemOption) {
          var M = r && r.itemModel ? r.itemModel : t.getItemModel(e);
          (h = M.getModel(v).getItemStyle(['color'])),
            (d = M.getModel(m).getItemStyle()),
            (f = M.getShallow('symbolOffset')),
            (g = M.getModel(y)),
            (b = M.getModel(x)),
            (w = M.getShallow('hoverAnimation')),
            (S = M.getShallow('cursor'));
        } else d = i.extend({}, d);
        var T = a.style,
          C = t.getItemVisual(e, 'symbolRotate');
        a.attr('rotation', ((C || 0) * Math.PI) / 180 || 0),
          f && a.attr('position', [l(f[0], n[0]), l(f[1], n[1])]),
          S && a.attr('cursor', S),
          a.setColor(u, r && r.symbolInnerColor),
          a.setStyle(h);
        var I = t.getItemVisual(e, 'opacity');
        null != I && (T.opacity = I);
        var k = t.getItemVisual(e, 'liftZ'),
          A = a.__z2Origin;
        null != k
          ? null == A && ((a.__z2Origin = a.z2), (a.z2 += k))
          : null != A && ((a.z2 = A), (a.__z2Origin = null));
        var D = r && r.useNameLabel;
        function O(e, n) {
          return D ? t.getName(e) : c(t, e);
        }
        o.setLabelStyle(T, d, g, b, {
          labelFetcher: s,
          labelDataIndex: e,
          defaultText: O,
          isRectText: !0,
          autoColor: u,
        }),
          (a.__symbolOriginalScale = p(n)),
          (a.hoverStyle = d),
          (a.highDownOnUpdate = w && s.isAnimationEnabled() ? _ : null),
          o.setHoverStyle(a);
      }),
        (d.fadeOut = function(t, e) {
          var n = this.childAt(0);
          (this.silent = n.silent = !0),
            (!e || !e.keepLabel) && (n.style.text = null),
            o.updateProps(
              n,
              { style: { opacity: 0 }, scale: [0, 0] },
              this._seriesModel,
              this.dataIndex,
              t,
            );
        }),
        i.inherits(h, o.Group);
      var b = h;
      t.exports = b;
    },
    FCeL: function(t, e, n) {
      t.exports = n.p + 'static/empty.39643d35.png';
    },
    FUi9: function(t, e, n) {
      var i = n('bYtY'),
        r = n('MwEJ'),
        a = n('aX7z'),
        o = n('ICMv'),
        s = n('Qxkt'),
        l = n('+TT/');
      l.getLayoutRect;
      e.getLayoutRect = l.getLayoutRect;
      var u = n('7hqr'),
        c = u.enableDataStack,
        h = u.isDimensionStacked,
        d = u.getStackedDimension,
        f = n('hi0g');
      e.completeDimensions = f;
      var p = n('sdST');
      e.createDimensions = p;
      var g = n('oVpE');
      function v(t) {
        return r(t.getSource(), t);
      }
      e.createSymbol = g.createSymbol;
      var m = { isDimensionStacked: h, enableDataStack: c, getStackedDimension: d };
      function y(t, e) {
        var n = e;
        s.isInstance(e) || ((n = new s(e)), i.mixin(n, o));
        var r = a.createScaleByModel(n);
        return r.setExtent(t[0], t[1]), a.niceScaleExtent(r, n), r;
      }
      function x(t) {
        i.mixin(t, o);
      }
      (e.createList = v),
        (e.dataStack = m),
        (e.createScale = y),
        (e.mixinAxisModelCommonMethods = x);
    },
    Fofx: function(t, e) {
      var n = 'undefined' === typeof Float32Array ? Array : Float32Array;
      function i() {
        var t = new n(6);
        return r(t), t;
      }
      function r(t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t;
      }
      function a(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          t
        );
      }
      function o(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1],
          r = e[1] * n[0] + e[3] * n[1],
          a = e[0] * n[2] + e[2] * n[3],
          o = e[1] * n[2] + e[3] * n[3],
          s = e[0] * n[4] + e[2] * n[5] + e[4],
          l = e[1] * n[4] + e[3] * n[5] + e[5];
        return (t[0] = i), (t[1] = r), (t[2] = a), (t[3] = o), (t[4] = s), (t[5] = l), t;
      }
      function s(t, e, n) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4] + n[0]),
          (t[5] = e[5] + n[1]),
          t
        );
      }
      function l(t, e, n) {
        var i = e[0],
          r = e[2],
          a = e[4],
          o = e[1],
          s = e[3],
          l = e[5],
          u = Math.sin(n),
          c = Math.cos(n);
        return (
          (t[0] = i * c + o * u),
          (t[1] = -i * u + o * c),
          (t[2] = r * c + s * u),
          (t[3] = -r * u + c * s),
          (t[4] = c * a + u * l),
          (t[5] = c * l - u * a),
          t
        );
      }
      function u(t, e, n) {
        var i = n[0],
          r = n[1];
        return (
          (t[0] = e[0] * i),
          (t[1] = e[1] * r),
          (t[2] = e[2] * i),
          (t[3] = e[3] * r),
          (t[4] = e[4] * i),
          (t[5] = e[5] * r),
          t
        );
      }
      function c(t, e) {
        var n = e[0],
          i = e[2],
          r = e[4],
          a = e[1],
          o = e[3],
          s = e[5],
          l = n * o - a * i;
        return l
          ? ((l = 1 / l),
            (t[0] = o * l),
            (t[1] = -a * l),
            (t[2] = -i * l),
            (t[3] = n * l),
            (t[4] = (i * s - o * r) * l),
            (t[5] = (a * r - n * s) * l),
            t)
          : null;
      }
      function h(t) {
        var e = i();
        return a(e, t), e;
      }
      (e.create = i),
        (e.identity = r),
        (e.copy = a),
        (e.mul = o),
        (e.translate = s),
        (e.rotate = l),
        (e.scale = u),
        (e.invert = c),
        (e.clone = h);
    },
    GMDS: function(t, e, n) {
      var i = n('bYtY'),
        r = n('4NgU'),
        a = n('jkPA'),
        o = r.prototype,
        s = r.extend({
          type: 'ordinal',
          init: function(t, e) {
            (t && !i.isArray(t)) || (t = new a({ categories: t })),
              (this._ordinalMeta = t),
              (this._extent = e || [0, t.categories.length - 1]);
          },
          parse: function(t) {
            return 'string' === typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
          },
          contain: function(t) {
            return (
              (t = this.parse(t)),
              o.contain.call(this, t) && null != this._ordinalMeta.categories[t]
            );
          },
          normalize: function(t) {
            return o.normalize.call(this, this.parse(t));
          },
          scale: function(t) {
            return Math.round(o.scale.call(this, t));
          },
          getTicks: function() {
            var t = [],
              e = this._extent,
              n = e[0];
            while (n <= e[1]) t.push(n), n++;
            return t;
          },
          getLabel: function(t) {
            if (!this.isBlank()) return this._ordinalMeta.categories[t];
          },
          count: function() {
            return this._extent[1] - this._extent[0] + 1;
          },
          unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
          },
          getOrdinalMeta: function() {
            return this._ordinalMeta;
          },
          niceTicks: i.noop,
          niceExtent: i.noop,
        });
      s.create = function() {
        return new s();
      };
      var l = s;
      t.exports = l;
    },
    Gev7: function(t, e, n) {
      var i = n('bYtY'),
        r = n('K2GJ'),
        a = n('1bdT'),
        o = n('ni6a');
      function s(t) {
        for (var e in ((t = t || {}), a.call(this, t), t))
          t.hasOwnProperty(e) && 'style' !== e && (this[e] = t[e]);
        (this.style = new r(t.style, this)), (this._rect = null), (this.__clipPaths = null);
      }
      (s.prototype = {
        constructor: s,
        type: 'displayable',
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: 'pointer',
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function(t) {},
        afterBrush: function(t) {},
        brush: function(t, e) {},
        getBoundingRect: function() {},
        contain: function(t, e) {
          return this.rectContain(t, e);
        },
        traverse: function(t, e) {
          t.call(e, this);
        },
        rectContain: function(t, e) {
          var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect();
          return i.contain(n[0], n[1]);
        },
        dirty: function() {
          (this.__dirty = this.__dirtyText = !0),
            (this._rect = null),
            this.__zr && this.__zr.refresh();
        },
        animateStyle: function(t) {
          return this.animate('style', t);
        },
        attrKV: function(t, e) {
          'style' !== t ? a.prototype.attrKV.call(this, t, e) : this.style.set(e);
        },
        setStyle: function(t, e) {
          return this.style.set(t, e), this.dirty(!1), this;
        },
        useStyle: function(t) {
          return (this.style = new r(t, this)), this.dirty(!1), this;
        },
        calculateTextPosition: null,
      }),
        i.inherits(s, a),
        i.mixin(s, o);
      var l = s;
      t.exports = l;
    },
    GrNh: function(t, e, n) {
      var i = n('bYtY'),
        r = n('IwbS'),
        a = n('6Ic6');
      function o(t, e, n, i) {
        var r = e.getData(),
          a = this.dataIndex,
          o = r.getName(a),
          l = e.get('selectedOffset');
        i.dispatchAction({ type: 'pieToggleSelect', from: t, name: o, seriesId: e.id }),
          r.each(function(t) {
            s(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), l, n);
          });
      }
      function s(t, e, n, i, r) {
        var a = (e.startAngle + e.endAngle) / 2,
          o = Math.cos(a),
          s = Math.sin(a),
          l = n ? i : 0,
          u = [o * l, s * l];
        r
          ? t
              .animate()
              .when(200, { position: u })
              .start('bounceOut')
          : t.attr('position', u);
      }
      function l(t, e) {
        r.Group.call(this);
        var n = new r.Sector({ z2: 2 }),
          i = new r.Polyline(),
          a = new r.Text();
        this.add(n), this.add(i), this.add(a), this.updateData(t, e, !0);
      }
      var u = l.prototype;
      (u.updateData = function(t, e, n) {
        var a = this.childAt(0),
          o = this.childAt(1),
          l = this.childAt(2),
          u = t.hostModel,
          c = t.getItemModel(e),
          h = t.getItemLayout(e),
          d = i.extend({}, h);
        d.label = null;
        var f = u.getShallow('animationTypeUpdate');
        if (n) {
          a.setShape(d);
          var p = u.getShallow('animationType');
          'scale' === p
            ? ((a.shape.r = h.r0), r.initProps(a, { shape: { r: h.r } }, u, e))
            : ((a.shape.endAngle = h.startAngle),
              r.updateProps(a, { shape: { endAngle: h.endAngle } }, u, e));
        } else 'expansion' === f ? a.setShape(d) : r.updateProps(a, { shape: d }, u, e);
        var g = t.getItemVisual(e, 'color');
        a.useStyle(
          i.defaults({ lineJoin: 'bevel', fill: g }, c.getModel('itemStyle').getItemStyle()),
        ),
          (a.hoverStyle = c.getModel('emphasis.itemStyle').getItemStyle());
        var v = c.getShallow('cursor');
        v && a.attr('cursor', v),
          s(
            this,
            t.getItemLayout(e),
            u.isSelected(t.getName(e)),
            u.get('selectedOffset'),
            u.get('animation'),
          );
        var m = !n && 'transition' === f;
        this._updateLabel(t, e, m),
          (this.highDownOnUpdate = u.get('silent')
            ? null
            : function(t, e) {
                var n = u.isAnimationEnabled() && c.get('hoverAnimation');
                'emphasis' === e
                  ? ((o.ignore = o.hoverIgnore),
                    (l.ignore = l.hoverIgnore),
                    n &&
                      (a.stopAnimation(!0),
                      a.animateTo({ shape: { r: h.r + u.get('hoverOffset') } }, 300, 'elasticOut')))
                  : ((o.ignore = o.normalIgnore),
                    (l.ignore = l.normalIgnore),
                    n &&
                      (a.stopAnimation(!0), a.animateTo({ shape: { r: h.r } }, 300, 'elasticOut')));
              }),
          r.setHoverStyle(this);
      }),
        (u._updateLabel = function(t, e, n) {
          var i = this.childAt(1),
            a = this.childAt(2),
            o = t.hostModel,
            s = t.getItemModel(e),
            l = t.getItemLayout(e),
            u = l.label,
            c = t.getItemVisual(e, 'color');
          if (!u || isNaN(u.x) || isNaN(u.y))
            a.ignore = a.normalIgnore = a.hoverIgnore = i.ignore = i.normalIgnore = i.hoverIgnore = !0;
          else {
            var h = {
                points: u.linePoints || [
                  [u.x, u.y],
                  [u.x, u.y],
                  [u.x, u.y],
                ],
              },
              d = { x: u.x, y: u.y };
            n
              ? (r.updateProps(i, { shape: h }, o, e), r.updateProps(a, { style: d }, o, e))
              : (i.attr({ shape: h }), a.attr({ style: d })),
              a.attr({ rotation: u.rotation, origin: [u.x, u.y], z2: 10 });
            var f = s.getModel('label'),
              p = s.getModel('emphasis.label'),
              g = s.getModel('labelLine'),
              v = s.getModel('emphasis.labelLine');
            c = t.getItemVisual(e, 'color');
            r.setLabelStyle(
              a.style,
              (a.hoverStyle = {}),
              f,
              p,
              {
                labelFetcher: t.hostModel,
                labelDataIndex: e,
                defaultText: u.text,
                autoColor: c,
                useInsideStyle: !!u.inside,
              },
              {
                textAlign: u.textAlign,
                textVerticalAlign: u.verticalAlign,
                opacity: t.getItemVisual(e, 'opacity'),
              },
            ),
              (a.ignore = a.normalIgnore = !f.get('show')),
              (a.hoverIgnore = !p.get('show')),
              (i.ignore = i.normalIgnore = !g.get('show')),
              (i.hoverIgnore = !v.get('show')),
              i.setStyle({ stroke: c, opacity: t.getItemVisual(e, 'opacity') }),
              i.setStyle(g.getModel('lineStyle').getLineStyle()),
              (i.hoverStyle = v.getModel('lineStyle').getLineStyle());
            var m = g.get('smooth');
            m && !0 === m && (m = 0.4), i.setShape({ smooth: m });
          }
        }),
        i.inherits(l, r.Group);
      var c = a.extend({
          type: 'pie',
          init: function() {
            var t = new r.Group();
            this._sectorGroup = t;
          },
          render: function(t, e, n, r) {
            if (!r || r.from !== this.uid) {
              var a = t.getData(),
                s = this._data,
                u = this.group,
                c = e.get('animation'),
                h = !s,
                d = t.get('animationType'),
                f = t.get('animationTypeUpdate'),
                p = i.curry(o, this.uid, t, c, n),
                g = t.get('selectedMode');
              if (
                (a
                  .diff(s)
                  .add(function(t) {
                    var e = new l(a, t);
                    h &&
                      'scale' !== d &&
                      e.eachChild(function(t) {
                        t.stopAnimation(!0);
                      }),
                      g && e.on('click', p),
                      a.setItemGraphicEl(t, e),
                      u.add(e);
                  })
                  .update(function(t, e) {
                    var n = s.getItemGraphicEl(e);
                    h ||
                      'transition' === f ||
                      n.eachChild(function(t) {
                        t.stopAnimation(!0);
                      }),
                      n.updateData(a, t),
                      n.off('click'),
                      g && n.on('click', p),
                      u.add(n),
                      a.setItemGraphicEl(t, n);
                  })
                  .remove(function(t) {
                    var e = s.getItemGraphicEl(t);
                    u.remove(e);
                  })
                  .execute(),
                c && a.count() > 0 && (h ? 'scale' !== d : 'transition' !== f))
              ) {
                for (var v = a.getItemLayout(0), m = 1; isNaN(v.startAngle) && m < a.count(); ++m)
                  v = a.getItemLayout(m);
                var y = Math.max(n.getWidth(), n.getHeight()) / 2,
                  x = i.bind(u.removeClipPath, u);
                u.setClipPath(
                  this._createClipPath(v.cx, v.cy, y, v.startAngle, v.clockwise, x, t, h),
                );
              } else u.removeClipPath();
              this._data = a;
            }
          },
          dispose: function() {},
          _createClipPath: function(t, e, n, i, a, o, s, l) {
            var u = new r.Sector({
                shape: { cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: a },
              }),
              c = l ? r.initProps : r.updateProps;
            return c(u, { shape: { endAngle: i + (a ? 1 : -1) * Math.PI * 2 } }, s, o), u;
          },
          containPoint: function(t, e) {
            var n = e.getData(),
              i = n.getItemLayout(0);
            if (i) {
              var r = t[0] - i.cx,
                a = t[1] - i.cy,
                o = Math.sqrt(r * r + a * a);
              return o <= i.r && o >= i.r0;
            }
          },
        }),
        h = c;
      t.exports = h;
    },
    H6uX: function(t, e) {
      var n = Array.prototype.slice,
        i = function(t) {
          (this._$handlers = {}), (this._$eventProcessor = t);
        };
      function r(t, e) {
        var n = t._$eventProcessor;
        return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;
      }
      function a(t, e, n, i, a, o) {
        var s = t._$handlers;
        if (('function' === typeof n && ((a = i), (i = n), (n = null)), !i || !e)) return t;
        (n = r(t, n)), s[e] || (s[e] = []);
        for (var l = 0; l < s[e].length; l++) if (s[e][l].h === i) return t;
        var u = { h: i, one: o, query: n, ctx: a || t, callAtLast: i.zrEventfulCallAtLast },
          c = s[e].length - 1,
          h = s[e][c];
        return h && h.callAtLast ? s[e].splice(c, 0, u) : s[e].push(u), t;
      }
      i.prototype = {
        constructor: i,
        one: function(t, e, n, i) {
          return a(this, t, e, n, i, !0);
        },
        on: function(t, e, n, i) {
          return a(this, t, e, n, i, !1);
        },
        isSilent: function(t) {
          var e = this._$handlers;
          return !e[t] || !e[t].length;
        },
        off: function(t, e) {
          var n = this._$handlers;
          if (!t) return (this._$handlers = {}), this;
          if (e) {
            if (n[t]) {
              for (var i = [], r = 0, a = n[t].length; r < a; r++)
                n[t][r].h !== e && i.push(n[t][r]);
              n[t] = i;
            }
            n[t] && 0 === n[t].length && delete n[t];
          } else delete n[t];
          return this;
        },
        trigger: function(t) {
          var e = this._$handlers[t],
            i = this._$eventProcessor;
          if (e) {
            var r = arguments,
              a = r.length;
            a > 3 && (r = n.call(r, 1));
            for (var o = e.length, s = 0; s < o; ) {
              var l = e[s];
              if (i && i.filter && null != l.query && !i.filter(t, l.query)) s++;
              else {
                switch (a) {
                  case 1:
                    l.h.call(l.ctx);
                    break;
                  case 2:
                    l.h.call(l.ctx, r[1]);
                    break;
                  case 3:
                    l.h.call(l.ctx, r[1], r[2]);
                    break;
                  default:
                    l.h.apply(l.ctx, r);
                    break;
                }
                l.one ? (e.splice(s, 1), o--) : s++;
              }
            }
          }
          return i && i.afterTrigger && i.afterTrigger(t), this;
        },
        triggerWithContext: function(t) {
          var e = this._$handlers[t],
            i = this._$eventProcessor;
          if (e) {
            var r = arguments,
              a = r.length;
            a > 4 && (r = n.call(r, 1, r.length - 1));
            for (var o = r[r.length - 1], s = e.length, l = 0; l < s; ) {
              var u = e[l];
              if (i && i.filter && null != u.query && !i.filter(t, u.query)) l++;
              else {
                switch (a) {
                  case 1:
                    u.h.call(o);
                    break;
                  case 2:
                    u.h.call(o, r[1]);
                    break;
                  case 3:
                    u.h.call(o, r[1], r[2]);
                    break;
                  default:
                    u.h.apply(o, r);
                    break;
                }
                u.one ? (e.splice(l, 1), s--) : l++;
              }
            }
          }
          return i && i.afterTrigger && i.afterTrigger(t), this;
        },
      };
      var o = i;
      t.exports = o;
    },
    ICMv: function(t, e, n) {
      var i = n('bYtY'),
        r = {
          getMin: function(t) {
            var e = this.option,
              n = t || null == e.rangeStart ? e.min : e.rangeStart;
            return (
              this.axis &&
                null != n &&
                'dataMin' !== n &&
                'function' !== typeof n &&
                !i.eqNaN(n) &&
                (n = this.axis.scale.parse(n)),
              n
            );
          },
          getMax: function(t) {
            var e = this.option,
              n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return (
              this.axis &&
                null != n &&
                'dataMax' !== n &&
                'function' !== typeof n &&
                !i.eqNaN(n) &&
                (n = this.axis.scale.parse(n)),
              n
            );
          },
          getNeedCrossZero: function() {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale;
          },
          getCoordSysModel: i.noop,
          setRange: function(t, e) {
            (this.option.rangeStart = t), (this.option.rangeEnd = e);
          },
          resetRange: function() {
            this.option.rangeStart = this.option.rangeEnd = null;
          },
        };
      t.exports = r;
    },
    IDmD: function(t, e, n) {
      var i = n('bYtY'),
        r = {};
      function a() {
        this._coordinateSystems = [];
      }
      (a.prototype = {
        constructor: a,
        create: function(t, e) {
          var n = [];
          i.each(r, function(i, r) {
            var a = i.create(t, e);
            n = n.concat(a || []);
          }),
            (this._coordinateSystems = n);
        },
        update: function(t, e) {
          i.each(this._coordinateSystems, function(n) {
            n.update && n.update(t, e);
          });
        },
        getCoordinateSystems: function() {
          return this._coordinateSystems.slice();
        },
      }),
        (a.register = function(t, e) {
          r[t] = e;
        }),
        (a.get = function(t) {
          return r[t];
        });
      var o = a;
      t.exports = o;
    },
    IMiH: function(t, e, n) {
      var i = n('Sj9i'),
        r = n('QBsz'),
        a = n('4mN7'),
        o = n('mFDi'),
        s = n('LPTA'),
        l = s.devicePixelRatio,
        u = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
        c = [],
        h = [],
        d = [],
        f = [],
        p = Math.min,
        g = Math.max,
        v = Math.cos,
        m = Math.sin,
        y = Math.sqrt,
        x = Math.abs,
        _ = 'undefined' !== typeof Float32Array,
        b = function(t) {
          (this._saveData = !t), this._saveData && (this.data = []), (this._ctx = null);
        };
      (b.prototype = {
        constructor: b,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e, n) {
          (n = n || 0), (this._ux = x(n / l / t) || 0), (this._uy = x(n / l / e) || 0);
        },
        getContext: function() {
          return this._ctx;
        },
        beginPath: function(t) {
          return (
            (this._ctx = t),
            t && t.beginPath(),
            t && (this.dpr = t.dpr),
            this._saveData && (this._len = 0),
            this._lineDash && ((this._lineDash = null), (this._dashOffset = 0)),
            this
          );
        },
        moveTo: function(t, e) {
          return (
            this.addData(u.M, t, e),
            this._ctx && this._ctx.moveTo(t, e),
            (this._x0 = t),
            (this._y0 = e),
            (this._xi = t),
            (this._yi = e),
            this
          );
        },
        lineTo: function(t, e) {
          var n = x(t - this._xi) > this._ux || x(e - this._yi) > this._uy || this._len < 5;
          return (
            this.addData(u.L, t, e),
            this._ctx &&
              n &&
              (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)),
            n && ((this._xi = t), (this._yi = e)),
            this
          );
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
          return (
            this.addData(u.C, t, e, n, i, r, a),
            this._ctx &&
              (this._needsDash()
                ? this._dashedBezierTo(t, e, n, i, r, a)
                : this._ctx.bezierCurveTo(t, e, n, i, r, a)),
            (this._xi = r),
            (this._yi = a),
            this
          );
        },
        quadraticCurveTo: function(t, e, n, i) {
          return (
            this.addData(u.Q, t, e, n, i),
            this._ctx &&
              (this._needsDash()
                ? this._dashedQuadraticTo(t, e, n, i)
                : this._ctx.quadraticCurveTo(t, e, n, i)),
            (this._xi = n),
            (this._yi = i),
            this
          );
        },
        arc: function(t, e, n, i, r, a) {
          return (
            this.addData(u.A, t, e, n, n, i, r - i, 0, a ? 0 : 1),
            this._ctx && this._ctx.arc(t, e, n, i, r, a),
            (this._xi = v(r) * n + t),
            (this._yi = m(r) * n + e),
            this
          );
        },
        arcTo: function(t, e, n, i, r) {
          return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
        },
        rect: function(t, e, n, i) {
          return this._ctx && this._ctx.rect(t, e, n, i), this.addData(u.R, t, e, n, i), this;
        },
        closePath: function() {
          this.addData(u.Z);
          var t = this._ctx,
            e = this._x0,
            n = this._y0;
          return (
            t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()),
            (this._xi = e),
            (this._yi = n),
            this
          );
        },
        fill: function(t) {
          t && t.fill(), this.toStatic();
        },
        stroke: function(t) {
          t && t.stroke(), this.toStatic();
        },
        setLineDash: function(t) {
          if (t instanceof Array) {
            (this._lineDash = t), (this._dashIdx = 0);
            for (var e = 0, n = 0; n < t.length; n++) e += t[n];
            this._dashSum = e;
          }
          return this;
        },
        setLineDashOffset: function(t) {
          return (this._dashOffset = t), this;
        },
        len: function() {
          return this._len;
        },
        setData: function(t) {
          var e = t.length;
          (this.data && this.data.length === e) || !_ || (this.data = new Float32Array(e));
          for (var n = 0; n < e; n++) this.data[n] = t[n];
          this._len = e;
        },
        appendPath: function(t) {
          t instanceof Array || (t = [t]);
          for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++) n += t[r].len();
          _ && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
          for (r = 0; r < e; r++)
            for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
          this._len = i;
        },
        addData: function(t) {
          if (this._saveData) {
            var e = this.data;
            this._len + arguments.length > e.length && (this._expandData(), (e = this.data));
            for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
            this._prevCmd = t;
          }
        },
        _expandData: function() {
          if (!(this.data instanceof Array)) {
            for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
            this.data = t;
          }
        },
        _needsDash: function() {
          return this._lineDash;
        },
        _dashedLineTo: function(t, e) {
          var n,
            i,
            r = this._dashSum,
            a = this._dashOffset,
            o = this._lineDash,
            s = this._ctx,
            l = this._xi,
            u = this._yi,
            c = t - l,
            h = e - u,
            d = y(c * c + h * h),
            f = l,
            v = u,
            m = o.length;
          (c /= d), (h /= d), a < 0 && (a = r + a), (a %= r), (f -= a * c), (v -= a * h);
          while (
            (c > 0 && f <= t) ||
            (c < 0 && f >= t) ||
            (0 === c && ((h > 0 && v <= e) || (h < 0 && v >= e)))
          )
            (i = this._dashIdx),
              (n = o[i]),
              (f += c * n),
              (v += h * n),
              (this._dashIdx = (i + 1) % m),
              (c > 0 && f < l) ||
                (c < 0 && f > l) ||
                (h > 0 && v < u) ||
                (h < 0 && v > u) ||
                s[i % 2 ? 'moveTo' : 'lineTo'](
                  c >= 0 ? p(f, t) : g(f, t),
                  h >= 0 ? p(v, e) : g(v, e),
                );
          (c = f - t), (h = v - e), (this._dashOffset = -y(c * c + h * h));
        },
        _dashedBezierTo: function(t, e, n, r, a, o) {
          var s,
            l,
            u,
            c,
            h,
            d = this._dashSum,
            f = this._dashOffset,
            p = this._lineDash,
            g = this._ctx,
            v = this._xi,
            m = this._yi,
            x = i.cubicAt,
            _ = 0,
            b = this._dashIdx,
            w = p.length,
            S = 0;
          for (f < 0 && (f = d + f), f %= d, s = 0; s < 1; s += 0.1)
            (l = x(v, t, n, a, s + 0.1) - x(v, t, n, a, s)),
              (u = x(m, e, r, o, s + 0.1) - x(m, e, r, o, s)),
              (_ += y(l * l + u * u));
          for (; b < w; b++) if (((S += p[b]), S > f)) break;
          s = (S - f) / _;
          while (s <= 1)
            (c = x(v, t, n, a, s)),
              (h = x(m, e, r, o, s)),
              b % 2 ? g.moveTo(c, h) : g.lineTo(c, h),
              (s += p[b] / _),
              (b = (b + 1) % w);
          b % 2 !== 0 && g.lineTo(a, o),
            (l = a - c),
            (u = o - h),
            (this._dashOffset = -y(l * l + u * u));
        },
        _dashedQuadraticTo: function(t, e, n, i) {
          var r = n,
            a = i;
          (n = (n + 2 * t) / 3),
            (i = (i + 2 * e) / 3),
            (t = (this._xi + 2 * t) / 3),
            (e = (this._yi + 2 * e) / 3),
            this._dashedBezierTo(t, e, n, i, r, a);
        },
        toStatic: function() {
          var t = this.data;
          t instanceof Array && ((t.length = this._len), _ && (this.data = new Float32Array(t)));
        },
        getBoundingRect: function() {
          (c[0] = c[1] = d[0] = d[1] = Number.MAX_VALUE),
            (h[0] = h[1] = f[0] = f[1] = -Number.MAX_VALUE);
          for (var t = this.data, e = 0, n = 0, i = 0, s = 0, l = 0; l < t.length; ) {
            var p = t[l++];
            switch ((1 === l && ((e = t[l]), (n = t[l + 1]), (i = e), (s = n)), p)) {
              case u.M:
                (i = t[l++]),
                  (s = t[l++]),
                  (e = i),
                  (n = s),
                  (d[0] = i),
                  (d[1] = s),
                  (f[0] = i),
                  (f[1] = s);
                break;
              case u.L:
                a.fromLine(e, n, t[l], t[l + 1], d, f), (e = t[l++]), (n = t[l++]);
                break;
              case u.C:
                a.fromCubic(e, n, t[l++], t[l++], t[l++], t[l++], t[l], t[l + 1], d, f),
                  (e = t[l++]),
                  (n = t[l++]);
                break;
              case u.Q:
                a.fromQuadratic(e, n, t[l++], t[l++], t[l], t[l + 1], d, f),
                  (e = t[l++]),
                  (n = t[l++]);
                break;
              case u.A:
                var g = t[l++],
                  y = t[l++],
                  x = t[l++],
                  _ = t[l++],
                  b = t[l++],
                  w = t[l++] + b;
                l += 1;
                var S = 1 - t[l++];
                1 === l && ((i = v(b) * x + g), (s = m(b) * _ + y)),
                  a.fromArc(g, y, x, _, b, w, S, d, f),
                  (e = v(w) * x + g),
                  (n = m(w) * _ + y);
                break;
              case u.R:
                (i = e = t[l++]), (s = n = t[l++]);
                var M = t[l++],
                  T = t[l++];
                a.fromLine(i, s, i + M, s + T, d, f);
                break;
              case u.Z:
                (e = i), (n = s);
                break;
            }
            r.min(c, c, d), r.max(h, h, f);
          }
          return (
            0 === l && (c[0] = c[1] = h[0] = h[1] = 0), new o(c[0], c[1], h[0] - c[0], h[1] - c[1])
          );
        },
        rebuildPath: function(t) {
          for (
            var e, n, i, r, a, o, s = this.data, l = this._ux, c = this._uy, h = this._len, d = 0;
            d < h;

          ) {
            var f = s[d++];
            switch ((1 === d && ((i = s[d]), (r = s[d + 1]), (e = i), (n = r)), f)) {
              case u.M:
                (e = i = s[d++]), (n = r = s[d++]), t.moveTo(i, r);
                break;
              case u.L:
                (a = s[d++]),
                  (o = s[d++]),
                  (x(a - i) > l || x(o - r) > c || d === h - 1) &&
                    (t.lineTo(a, o), (i = a), (r = o));
                break;
              case u.C:
                t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]),
                  (i = s[d - 2]),
                  (r = s[d - 1]);
                break;
              case u.Q:
                t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), (i = s[d - 2]), (r = s[d - 1]);
                break;
              case u.A:
                var p = s[d++],
                  g = s[d++],
                  y = s[d++],
                  _ = s[d++],
                  b = s[d++],
                  w = s[d++],
                  S = s[d++],
                  M = s[d++],
                  T = y > _ ? y : _,
                  C = y > _ ? 1 : y / _,
                  I = y > _ ? _ / y : 1,
                  k = Math.abs(y - _) > 0.001,
                  A = b + w;
                k
                  ? (t.translate(p, g),
                    t.rotate(S),
                    t.scale(C, I),
                    t.arc(0, 0, T, b, A, 1 - M),
                    t.scale(1 / C, 1 / I),
                    t.rotate(-S),
                    t.translate(-p, -g))
                  : t.arc(p, g, T, b, A, 1 - M),
                  1 === d && ((e = v(b) * y + p), (n = m(b) * _ + g)),
                  (i = v(A) * y + p),
                  (r = m(A) * _ + g);
                break;
              case u.R:
                (e = i = s[d]), (n = r = s[d + 1]), t.rect(s[d++], s[d++], s[d++], s[d++]);
                break;
              case u.Z:
                t.closePath(), (i = e), (r = n);
            }
          }
        },
      }),
        (b.CMD = u);
      var w = b;
      t.exports = w;
    },
    IWp7: function(t, e, n) {
      var i = n('bYtY'),
        r = n('OELB'),
        a = n('7aKB'),
        o = n('lE7J'),
        s = n('ieMj'),
        l = s.prototype,
        u = Math.ceil,
        c = Math.floor,
        h = 1e3,
        d = 60 * h,
        f = 60 * d,
        p = 24 * f,
        g = function(t, e, n, i) {
          while (n < i) {
            var r = (n + i) >>> 1;
            t[r][1] < e ? (n = r + 1) : (i = r);
          }
          return n;
        },
        v = s.extend({
          type: 'time',
          getLabel: function(t) {
            var e = this._stepLvl,
              n = new Date(t);
            return a.formatTime(e[0], n, this.getSetting('useUTC'));
          },
          niceExtent: function(t) {
            var e = this._extent;
            if ((e[0] === e[1] && ((e[0] -= p), (e[1] += p)), e[1] === -1 / 0 && e[0] === 1 / 0)) {
              var n = new Date();
              (e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate())), (e[0] = e[1] - p);
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var i = this._interval;
            t.fixMin || (e[0] = r.round(c(e[0] / i) * i)),
              t.fixMax || (e[1] = r.round(u(e[1] / i) * i));
          },
          niceTicks: function(t, e, n) {
            t = t || 10;
            var i = this._extent,
              a = i[1] - i[0],
              s = a / t;
            null != e && s < e && (s = e), null != n && s > n && (s = n);
            var l = m.length,
              h = g(m, s, 0, l),
              d = m[Math.min(h, l - 1)],
              f = d[1];
            if ('year' === d[0]) {
              var p = a / f,
                v = r.nice(p / t, !0);
              f *= v;
            }
            var y = this.getSetting('useUTC')
                ? 0
                : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
              x = [Math.round(u((i[0] - y) / f) * f + y), Math.round(c((i[1] - y) / f) * f + y)];
            o.fixExtent(x, i), (this._stepLvl = d), (this._interval = f), (this._niceExtent = x);
          },
          parse: function(t) {
            return +r.parseDate(t);
          },
        });
      i.each(['contain', 'normalize'], function(t) {
        v.prototype[t] = function(e) {
          return l[t].call(this, this.parse(e));
        };
      });
      var m = [
        ['hh:mm:ss', h],
        ['hh:mm:ss', 5 * h],
        ['hh:mm:ss', 10 * h],
        ['hh:mm:ss', 15 * h],
        ['hh:mm:ss', 30 * h],
        ['hh:mm\nMM-dd', d],
        ['hh:mm\nMM-dd', 5 * d],
        ['hh:mm\nMM-dd', 10 * d],
        ['hh:mm\nMM-dd', 15 * d],
        ['hh:mm\nMM-dd', 30 * d],
        ['hh:mm\nMM-dd', f],
        ['hh:mm\nMM-dd', 2 * f],
        ['hh:mm\nMM-dd', 6 * f],
        ['hh:mm\nMM-dd', 12 * f],
        ['MM-dd\nyyyy', p],
        ['MM-dd\nyyyy', 2 * p],
        ['MM-dd\nyyyy', 3 * p],
        ['MM-dd\nyyyy', 4 * p],
        ['MM-dd\nyyyy', 5 * p],
        ['MM-dd\nyyyy', 6 * p],
        ['week', 7 * p],
        ['MM-dd\nyyyy', 10 * p],
        ['week', 14 * p],
        ['week', 21 * p],
        ['month', 31 * p],
        ['week', 42 * p],
        ['month', 62 * p],
        ['week', 70 * p],
        ['quarter', 95 * p],
        ['month', 31 * p * 4],
        ['month', 31 * p * 5],
        ['half-year', (380 * p) / 2],
        ['month', 31 * p * 8],
        ['month', 31 * p * 10],
        ['year', 380 * p],
      ];
      v.create = function(t) {
        return new v({ useUTC: t.ecModel.get('useUTC') });
      };
      var y = v;
      t.exports = y;
    },
    IXuL: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('MwEJ')),
        a = n('T4UG'),
        o = a.extend({
          type: 'series.line',
          dependencies: ['grid', 'polar'],
          getInitialData: function(t, e) {
            return r(this.getSource(), this, { useEncodeDefaulter: !0 });
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'cartesian2d',
            legendHoverLink: !0,
            hoverAnimation: !0,
            clip: !0,
            label: { position: 'top' },
            lineStyle: { width: 2, type: 'solid' },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: 'emptyCircle',
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: 'auto',
            connectNulls: !1,
            sampling: 'none',
            animationEasing: 'linear',
            progressive: 0,
            hoverLayerThreshold: 1 / 0,
          },
        });
      t.exports = o;
    },
    ItGF: function(t, e) {
      var n = {};
      n =
        'object' === typeof wx && 'function' === typeof wx.getSystemInfoSync
          ? {
              browser: {},
              os: {},
              node: !1,
              wxa: !0,
              canvasSupported: !0,
              svgSupported: !1,
              touchEventsSupported: !0,
              domSupported: !1,
            }
          : 'undefined' === typeof document && 'undefined' !== typeof self
          ? { browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0, domSupported: !1 }
          : 'undefined' === typeof navigator
          ? {
              browser: {},
              os: {},
              node: !0,
              worker: !1,
              canvasSupported: !0,
              svgSupported: !0,
              domSupported: !1,
            }
          : r(navigator.userAgent);
      var i = n;
      function r(t) {
        var e = {},
          n = {},
          i = t.match(/Firefox\/([\d.]+)/),
          r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
          a = t.match(/Edge\/([\d.]+)/),
          o = /micromessenger/i.test(t);
        return (
          i && ((n.firefox = !0), (n.version = i[1])),
          r && ((n.ie = !0), (n.version = r[1])),
          a && ((n.edge = !0), (n.version = a[1])),
          o && (n.weChat = !0),
          {
            browser: n,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement('canvas').getContext,
            svgSupported: 'undefined' !== typeof SVGRect,
            touchEventsSupported: 'ontouchstart' in window && !n.ie && !n.edge,
            pointerEventsSupported:
              'onpointerdown' in window && (n.edge || (n.ie && n.version >= 11)),
            domSupported: 'undefined' !== typeof document,
          }
        );
      }
      t.exports = i;
    },
    IwbS: function(t, e, n) {
      var i = n('bYtY'),
        r = n('NC18'),
        a = n('Qe9p'),
        o = n('Fofx'),
        s = n('QBsz'),
        l = n('y+Vt'),
        u = n('DN4a'),
        c = n('Dagg');
      e.Image = c;
      var h = n('4fz+');
      e.Group = h;
      var d = n('dqUG');
      e.Text = d;
      var f = n('2fw6');
      e.Circle = f;
      var p = n('SqI9');
      e.Sector = p;
      var g = n('RXMa');
      e.Ring = g;
      var v = n('h7HQ');
      e.Polygon = v;
      var m = n('1Jh7');
      e.Polyline = m;
      var y = n('x6Kt');
      e.Rect = y;
      var x = n('yxFR');
      e.Line = x;
      var _ = n('rA99');
      e.BezierCurve = _;
      var b = n('jTL6');
      e.Arc = b;
      var w = n('1MYJ');
      e.CompoundPath = w;
      var S = n('SKnc');
      e.LinearGradient = S;
      var M = n('3e3G');
      e.RadialGradient = M;
      var T = n('mFDi');
      e.BoundingRect = T;
      var C = n('OS9S');
      e.IncrementalDisplayable = C;
      var I = n('nPnh'),
        k = Math.max,
        A = Math.min,
        D = {},
        O = 1,
        P = {
          color: 'textFill',
          textBorderColor: 'textStroke',
          textBorderWidth: 'textStrokeWidth',
        },
        E = 'emphasis',
        L = 'normal',
        R = 1,
        N = {},
        z = {};
      function B(t) {
        return l.extend(t);
      }
      function j(t, e) {
        return r.extendFromString(t, e);
      }
      function F(t, e) {
        z[t] = e;
      }
      function Y(t) {
        if (z.hasOwnProperty(t)) return z[t];
      }
      function V(t, e, n, i) {
        var a = r.createFromString(t, e);
        return n && ('center' === i && (n = W(n, a.getBoundingRect())), U(a, n)), a;
      }
      function H(t, e, n) {
        var i = new c({
          style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
          onload: function(t) {
            if ('center' === n) {
              var r = { width: t.width, height: t.height };
              i.setStyle(W(e, r));
            }
          },
        });
        return i;
      }
      function W(t, e) {
        var n,
          i = e.width / e.height,
          r = t.height * i;
        r <= t.width ? (n = t.height) : ((r = t.width), (n = r / i));
        var a = t.x + t.width / 2,
          o = t.y + t.height / 2;
        return { x: a - r / 2, y: o - n / 2, width: r, height: n };
      }
      var G = r.mergePath;
      function U(t, e) {
        if (t.applyTransform) {
          var n = t.getBoundingRect(),
            i = n.calculateTransform(e);
          t.applyTransform(i);
        }
      }
      function X(t) {
        return I.subPixelOptimizeLine(t.shape, t.shape, t.style), t;
      }
      function Z(t) {
        return I.subPixelOptimizeRect(t.shape, t.shape, t.style), t;
      }
      var q = I.subPixelOptimize;
      function K(t) {
        return null != t && 'none' !== t;
      }
      var Q = i.createHashMap(),
        J = 0;
      function $(t) {
        if ('string' !== typeof t) return t;
        var e = Q.get(t);
        return e || ((e = a.lift(t, -0.1)), J < 1e4 && (Q.set(t, e), J++)), e;
      }
      function tt(t) {
        if (t.__hoverStlDirty) {
          t.__hoverStlDirty = !1;
          var e = t.__hoverStl;
          if (e) {
            var n = (t.__cachedNormalStl = {});
            t.__cachedNormalZ2 = t.z2;
            var i = t.style;
            for (var r in e) null != e[r] && (n[r] = i[r]);
            (n.fill = i.fill), (n.stroke = i.stroke);
          } else t.__cachedNormalStl = t.__cachedNormalZ2 = null;
        }
      }
      function et(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
          var n = t.__zr,
            i = t.useHoverLayer && n && 'canvas' === n.painter.type;
          if (
            ((t.__highlighted = i ? 'layer' : 'plain'), !(t.isGroup || (!n && t.useHoverLayer)))
          ) {
            var r = t,
              a = t.style;
            i && ((r = n.addHover(t)), (a = r.style)),
              Mt(a),
              i || tt(r),
              a.extendFrom(e),
              nt(a, e, 'fill'),
              nt(a, e, 'stroke'),
              St(a),
              i || (t.dirty(!1), (t.z2 += O));
          }
        }
      }
      function nt(t, e, n) {
        !K(e[n]) && K(t[n]) && (t[n] = $(t[n]));
      }
      function it(t) {
        var e = t.__highlighted;
        if (e && ((t.__highlighted = !1), !t.isGroup))
          if ('layer' === e) t.__zr && t.__zr.removeHover(t);
          else {
            var n = t.style,
              i = t.__cachedNormalStl;
            i && (Mt(n), t.setStyle(i), St(n));
            var r = t.__cachedNormalZ2;
            null != r && t.z2 - r === O && (t.z2 = r);
          }
      }
      function rt(t, e, n) {
        var i,
          r = L,
          a = L;
        t.__highlighted && ((r = E), (i = !0)),
          e(t, n),
          t.__highlighted && ((a = E), (i = !0)),
          t.isGroup &&
            t.traverse(function(t) {
              !t.isGroup && e(t, n);
            }),
          i && t.__highDownOnUpdate && t.__highDownOnUpdate(r, a);
      }
      function at(t, e) {
        (e = t.__hoverStl = !1 !== e && (t.hoverStyle || e || {})),
          (t.__hoverStlDirty = !0),
          t.__highlighted && ((t.__cachedNormalStl = null), it(t), et(t));
      }
      function ot(t) {
        !ct(this, t) && !this.__highByOuter && rt(this, et);
      }
      function st(t) {
        !ct(this, t) && !this.__highByOuter && rt(this, it);
      }
      function lt(t) {
        (this.__highByOuter |= 1 << (t || 0)), rt(this, et);
      }
      function ut(t) {
        !(this.__highByOuter &= ~(1 << (t || 0))) && rt(this, it);
      }
      function ct(t, e) {
        return t.__highDownSilentOnTouch && e.zrByTouch;
      }
      function ht(t, e) {
        dt(t, !0), rt(t, at, e);
      }
      function dt(t, e) {
        var n = !1 === e;
        if (
          ((t.__highDownSilentOnTouch = t.highDownSilentOnTouch),
          (t.__highDownOnUpdate = t.highDownOnUpdate),
          !n || t.__highDownDispatcher)
        ) {
          var i = n ? 'off' : 'on';
          t[i]('mouseover', ot)[i]('mouseout', st),
            t[i]('emphasis', lt)[i]('normal', ut),
            (t.__highByOuter = t.__highByOuter || 0),
            (t.__highDownDispatcher = !n);
        }
      }
      function ft(t) {
        return !(!t || !t.__highDownDispatcher);
      }
      function pt(t) {
        var e = N[t];
        return null == e && R <= 32 && (e = N[t] = R++), e;
      }
      function gt(t, e, n, r, a, o, s) {
        a = a || D;
        var l,
          u = a.labelFetcher,
          c = a.labelDataIndex,
          h = a.labelDimIndex,
          d = a.labelProp,
          f = n.getShallow('show'),
          p = r.getShallow('show');
        (f || p) &&
          (u && (l = u.getFormattedLabel(c, 'normal', null, h, d)),
          null == l && (l = i.isFunction(a.defaultText) ? a.defaultText(c, a) : a.defaultText));
        var g = f ? l : null,
          v = p ? i.retrieve2(u ? u.getFormattedLabel(c, 'emphasis', null, h, d) : null, l) : null;
        (null == g && null == v) || (mt(t, n, o, a), mt(e, r, s, a, !0)),
          (t.text = g),
          (e.text = v);
      }
      function vt(t, e, n) {
        var r = t.style;
        e && (Mt(r), t.setStyle(e), St(r)),
          (r = t.__hoverStl),
          n && r && (Mt(r), i.extend(r, n), St(r));
      }
      function mt(t, e, n, r, a) {
        return xt(t, e, r, a), n && i.extend(t, n), t;
      }
      function yt(t, e, n) {
        var i,
          r = { isRectText: !0 };
        !1 === n ? (i = !0) : (r.autoColor = n), xt(t, e, r, i);
      }
      function xt(t, e, n, r) {
        if (((n = n || D), n.isRectText)) {
          var a;
          n.getTextPosition
            ? (a = n.getTextPosition(e, r))
            : ((a = e.getShallow('position') || (r ? null : 'inside')),
              'outside' === a && (a = 'top')),
            (t.textPosition = a),
            (t.textOffset = e.getShallow('offset'));
          var o = e.getShallow('rotate');
          null != o && (o *= Math.PI / 180),
            (t.textRotation = o),
            (t.textDistance = i.retrieve2(e.getShallow('distance'), r ? null : 5));
        }
        var s,
          l = e.ecModel,
          u = l && l.option.textStyle,
          c = _t(e);
        if (c)
          for (var h in ((s = {}), c))
            if (c.hasOwnProperty(h)) {
              var d = e.getModel(['rich', h]);
              bt((s[h] = {}), d, u, n, r);
            }
        return (
          (t.rich = s), bt(t, e, u, n, r, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
        );
      }
      function _t(t) {
        var e;
        while (t && t !== t.ecModel) {
          var n = (t.option || D).rich;
          if (n) for (var i in ((e = e || {}), n)) n.hasOwnProperty(i) && (e[i] = 1);
          t = t.parentModel;
        }
        return e;
      }
      function bt(t, e, n, r, a, o) {
        (n = (!a && n) || D),
          (t.textFill = wt(e.getShallow('color'), r) || n.color),
          (t.textStroke = wt(e.getShallow('textBorderColor'), r) || n.textBorderColor),
          (t.textStrokeWidth = i.retrieve2(e.getShallow('textBorderWidth'), n.textBorderWidth)),
          a ||
            (o && ((t.insideRollbackOpt = r), St(t)),
            null == t.textFill && (t.textFill = r.autoColor)),
          (t.fontStyle = e.getShallow('fontStyle') || n.fontStyle),
          (t.fontWeight = e.getShallow('fontWeight') || n.fontWeight),
          (t.fontSize = e.getShallow('fontSize') || n.fontSize),
          (t.fontFamily = e.getShallow('fontFamily') || n.fontFamily),
          (t.textAlign = e.getShallow('align')),
          (t.textVerticalAlign = e.getShallow('verticalAlign') || e.getShallow('baseline')),
          (t.textLineHeight = e.getShallow('lineHeight')),
          (t.textWidth = e.getShallow('width')),
          (t.textHeight = e.getShallow('height')),
          (t.textTag = e.getShallow('tag')),
          (o && r.disableBox) ||
            ((t.textBackgroundColor = wt(e.getShallow('backgroundColor'), r)),
            (t.textPadding = e.getShallow('padding')),
            (t.textBorderColor = wt(e.getShallow('borderColor'), r)),
            (t.textBorderWidth = e.getShallow('borderWidth')),
            (t.textBorderRadius = e.getShallow('borderRadius')),
            (t.textBoxShadowColor = e.getShallow('shadowColor')),
            (t.textBoxShadowBlur = e.getShallow('shadowBlur')),
            (t.textBoxShadowOffsetX = e.getShallow('shadowOffsetX')),
            (t.textBoxShadowOffsetY = e.getShallow('shadowOffsetY'))),
          (t.textShadowColor = e.getShallow('textShadowColor') || n.textShadowColor),
          (t.textShadowBlur = e.getShallow('textShadowBlur') || n.textShadowBlur),
          (t.textShadowOffsetX = e.getShallow('textShadowOffsetX') || n.textShadowOffsetX),
          (t.textShadowOffsetY = e.getShallow('textShadowOffsetY') || n.textShadowOffsetY);
      }
      function wt(t, e) {
        return 'auto' !== t ? t : e && e.autoColor ? e.autoColor : null;
      }
      function St(t) {
        var e,
          n = t.textPosition,
          i = t.insideRollbackOpt;
        if (i && null == t.textFill) {
          var r = i.autoColor,
            a = i.isRectText,
            o = i.useInsideStyle,
            s =
              !1 !== o &&
              (!0 === o || (a && n && 'string' === typeof n && n.indexOf('inside') >= 0)),
            l = !s && null != r;
          (s || l) &&
            (e = {
              textFill: t.textFill,
              textStroke: t.textStroke,
              textStrokeWidth: t.textStrokeWidth,
            }),
            s &&
              ((t.textFill = '#fff'),
              null == t.textStroke &&
                ((t.textStroke = r), null == t.textStrokeWidth && (t.textStrokeWidth = 2))),
            l && (t.textFill = r);
        }
        t.insideRollback = e;
      }
      function Mt(t) {
        var e = t.insideRollback;
        e &&
          ((t.textFill = e.textFill),
          (t.textStroke = e.textStroke),
          (t.textStrokeWidth = e.textStrokeWidth),
          (t.insideRollback = null));
      }
      function Tt(t, e) {
        var n = e && e.getModel('textStyle');
        return i.trim(
          [
            t.fontStyle || (n && n.getShallow('fontStyle')) || '',
            t.fontWeight || (n && n.getShallow('fontWeight')) || '',
            (t.fontSize || (n && n.getShallow('fontSize')) || 12) + 'px',
            t.fontFamily || (n && n.getShallow('fontFamily')) || 'sans-serif',
          ].join(' '),
        );
      }
      function Ct(t, e, n, i, r, a) {
        'function' === typeof r && ((a = r), (r = null));
        var o = i && i.isAnimationEnabled();
        if (o) {
          var s = t ? 'Update' : '',
            l = i.getShallow('animationDuration' + s),
            u = i.getShallow('animationEasing' + s),
            c = i.getShallow('animationDelay' + s);
          'function' === typeof c &&
            (c = c(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)),
            'function' === typeof l && (l = l(r)),
            l > 0 ? e.animateTo(n, l, c || 0, u, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());
        } else e.stopAnimation(), e.attr(n), a && a();
      }
      function It(t, e, n, i, r) {
        Ct(!0, t, e, n, i, r);
      }
      function kt(t, e, n, i, r) {
        Ct(!1, t, e, n, i, r);
      }
      function At(t, e) {
        var n = o.identity([]);
        while (t && t !== e) o.mul(n, t.getLocalTransform(), n), (t = t.parent);
        return n;
      }
      function Dt(t, e, n) {
        return (
          e && !i.isArrayLike(e) && (e = u.getLocalTransform(e)),
          n && (e = o.invert([], e)),
          s.applyTransform([], t, e)
        );
      }
      function Ot(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs((2 * e[4]) / e[0]),
          r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs((2 * e[4]) / e[2]),
          a = [
            'left' === t ? -i : 'right' === t ? i : 0,
            'top' === t ? -r : 'bottom' === t ? r : 0,
          ];
        return (
          (a = Dt(a, e, n)),
          Math.abs(a[0]) > Math.abs(a[1])
            ? a[0] > 0
              ? 'right'
              : 'left'
            : a[1] > 0
            ? 'bottom'
            : 'top'
        );
      }
      function Pt(t, e, n, r) {
        if (t && e) {
          var a = o(t);
          e.traverse(function(t) {
            if (!t.isGroup && t.anid) {
              var e = a[t.anid];
              if (e) {
                var i = l(t);
                t.attr(l(e)), It(t, i, n, t.dataIndex);
              }
            }
          });
        }
        function o(t) {
          var e = {};
          return (
            t.traverse(function(t) {
              !t.isGroup && t.anid && (e[t.anid] = t);
            }),
            e
          );
        }
        function l(t) {
          var e = { position: s.clone(t.position), rotation: t.rotation };
          return t.shape && (e.shape = i.extend({}, t.shape)), e;
        }
      }
      function Et(t, e) {
        return i.map(t, function(t) {
          var n = t[0];
          (n = k(n, e.x)), (n = A(n, e.x + e.width));
          var i = t[1];
          return (i = k(i, e.y)), (i = A(i, e.y + e.height)), [n, i];
        });
      }
      function Lt(t, e) {
        var n = k(t.x, e.x),
          i = A(t.x + t.width, e.x + e.width),
          r = k(t.y, e.y),
          a = A(t.y + t.height, e.y + e.height);
        if (i >= n && a >= r) return { x: n, y: r, width: i - n, height: a - r };
      }
      function Rt(t, e, n) {
        e = i.extend({ rectHover: !0 }, e);
        var r = (e.style = { strokeNoScale: !0 });
        if (((n = n || { x: -1, y: -1, width: 2, height: 2 }), t))
          return 0 === t.indexOf('image://')
            ? ((r.image = t.slice(8)), i.defaults(r, n), new c(e))
            : V(t.replace('path://', ''), e, n, 'center');
      }
      function Nt(t, e, n, i, r) {
        for (var a = 0, o = r[r.length - 1]; a < r.length; a++) {
          var s = r[a];
          if (zt(t, e, n, i, s[0], s[1], o[0], o[1])) return !0;
          o = s;
        }
      }
      function zt(t, e, n, i, r, a, o, s) {
        var l = n - t,
          u = i - e,
          c = o - r,
          h = s - a,
          d = Bt(c, h, l, u);
        if (jt(d)) return !1;
        var f = t - r,
          p = e - a,
          g = Bt(f, p, l, u) / d;
        if (g < 0 || g > 1) return !1;
        var v = Bt(f, p, c, h) / d;
        return !(v < 0 || v > 1);
      }
      function Bt(t, e, n, i) {
        return t * i - n * e;
      }
      function jt(t) {
        return t <= 1e-6 && t >= -1e-6;
      }
      F('circle', f),
        F('sector', p),
        F('ring', g),
        F('polygon', v),
        F('polyline', m),
        F('rect', y),
        F('line', x),
        F('bezierCurve', _),
        F('arc', b),
        (e.Z2_EMPHASIS_LIFT = O),
        (e.CACHED_LABEL_STYLE_PROPERTIES = P),
        (e.extendShape = B),
        (e.extendPath = j),
        (e.registerShape = F),
        (e.getShapeClass = Y),
        (e.makePath = V),
        (e.makeImage = H),
        (e.mergePath = G),
        (e.resizePath = U),
        (e.subPixelOptimizeLine = X),
        (e.subPixelOptimizeRect = Z),
        (e.subPixelOptimize = q),
        (e.setElementHoverStyle = at),
        (e.setHoverStyle = ht),
        (e.setAsHighDownDispatcher = dt),
        (e.isHighDownDispatcher = ft),
        (e.getHighlightDigit = pt),
        (e.setLabelStyle = gt),
        (e.modifyLabelStyle = vt),
        (e.setTextStyle = mt),
        (e.setText = yt),
        (e.getFont = Tt),
        (e.updateProps = It),
        (e.initProps = kt),
        (e.getTransform = At),
        (e.applyTransform = Dt),
        (e.transformDirection = Ot),
        (e.groupTransition = Pt),
        (e.clipPointsByRect = Et),
        (e.clipRectByRect = Lt),
        (e.createIcon = Rt),
        (e.linePolygonIntersect = Nt),
        (e.lineLineIntersect = zt);
    },
    IyUQ: function(t, e, n) {
      var i = n('bYtY'),
        r = n('YH21'),
        a = n('IwbS'),
        o = n('iLNv'),
        s = n('fc+c'),
        l = n('OELB'),
        u = n('+TT/'),
        c = n('72pK'),
        h = a.Rect,
        d = l.linearMap,
        f = l.asc,
        p = i.bind,
        g = i.each,
        v = 7,
        m = 1,
        y = 30,
        x = 'horizontal',
        _ = 'vertical',
        b = 5,
        w = ['line', 'bar', 'candlestick', 'scatter'],
        S = s.extend({
          type: 'dataZoom.slider',
          init: function(t, e) {
            (this._displayables = {}),
              this._orient,
              this._range,
              this._handleEnds,
              this._size,
              this._handleWidth,
              this._handleHeight,
              this._location,
              this._dragging,
              this._dataShadowInfo,
              (this.api = e);
          },
          render: function(t, e, n, i) {
            S.superApply(this, 'render', arguments),
              o.createOrUpdate(
                this,
                '_dispatchZoomAction',
                this.dataZoomModel.get('throttle'),
                'fixRate',
              ),
              (this._orient = t.get('orient')),
              !1 !== this.dataZoomModel.get('show')
                ? ((i && 'dataZoom' === i.type && i.from === this.uid) || this._buildView(),
                  this._updateView())
                : this.group.removeAll();
          },
          remove: function() {
            S.superApply(this, 'remove', arguments), o.clear(this, '_dispatchZoomAction');
          },
          dispose: function() {
            S.superApply(this, 'dispose', arguments), o.clear(this, '_dispatchZoomAction');
          },
          _buildView: function() {
            var t = this.group;
            t.removeAll(), this._resetLocation(), this._resetInterval();
            var e = (this._displayables.barGroup = new a.Group());
            this._renderBackground(),
              this._renderHandle(),
              this._renderDataShadow(),
              t.add(e),
              this._positionGroup();
          },
          _resetLocation: function() {
            var t = this.dataZoomModel,
              e = this.api,
              n = this._findCoordRect(),
              r = { width: e.getWidth(), height: e.getHeight() },
              a =
                this._orient === x
                  ? {
                      right: r.width - n.x - n.width,
                      top: r.height - y - v,
                      width: n.width,
                      height: y,
                    }
                  : { right: v, top: n.y, width: y, height: n.height },
              o = u.getLayoutParams(t.option);
            i.each(['right', 'top', 'width', 'height'], function(t) {
              'ph' === o[t] && (o[t] = a[t]);
            });
            var s = u.getLayoutRect(o, r, t.padding);
            (this._location = { x: s.x, y: s.y }),
              (this._size = [s.width, s.height]),
              this._orient === _ && this._size.reverse();
          },
          _positionGroup: function() {
            var t = this.group,
              e = this._location,
              n = this._orient,
              i = this.dataZoomModel.getFirstTargetAxisModel(),
              r = i && i.get('inverse'),
              a = this._displayables.barGroup,
              o = (this._dataShadowInfo || {}).otherAxisInverse;
            a.attr(
              n !== x || r
                ? n === x && r
                  ? { scale: o ? [-1, 1] : [-1, -1] }
                  : n !== _ || r
                  ? { scale: o ? [-1, -1] : [-1, 1], rotation: Math.PI / 2 }
                  : { scale: o ? [1, -1] : [1, 1], rotation: Math.PI / 2 }
                : { scale: o ? [1, 1] : [1, -1] },
            );
            var s = t.getBoundingRect([a]);
            t.attr('position', [e.x - s.x, e.y - s.y]);
          },
          _getViewExtent: function() {
            return [0, this._size[0]];
          },
          _renderBackground: function() {
            var t = this.dataZoomModel,
              e = this._size,
              n = this._displayables.barGroup;
            n.add(
              new h({
                silent: !0,
                shape: { x: 0, y: 0, width: e[0], height: e[1] },
                style: { fill: t.get('backgroundColor') },
                z2: -40,
              }),
            ),
              n.add(
                new h({
                  shape: { x: 0, y: 0, width: e[0], height: e[1] },
                  style: { fill: 'transparent' },
                  z2: 0,
                  onclick: i.bind(this._onClickPanelClick, this),
                }),
              );
          },
          _renderDataShadow: function() {
            var t = (this._dataShadowInfo = this._prepareDataShadowInfo());
            if (t) {
              var e = this._size,
                n = t.series,
                r = n.getRawData(),
                o = n.getShadowDim ? n.getShadowDim() : t.otherDim;
              if (null != o) {
                var s = r.getDataExtent(o),
                  l = 0.3 * (s[1] - s[0]);
                s = [s[0] - l, s[1] + l];
                var u,
                  c = [0, e[1]],
                  h = [0, e[0]],
                  f = [
                    [e[0], 0],
                    [0, 0],
                  ],
                  p = [],
                  g = h[1] / (r.count() - 1),
                  v = 0,
                  m = Math.round(r.count() / e[0]);
                r.each([o], function(t, e) {
                  if (m > 0 && e % m) v += g;
                  else {
                    var n = null == t || isNaN(t) || '' === t,
                      i = n ? 0 : d(t, s, c, !0);
                    n && !u && e
                      ? (f.push([f[f.length - 1][0], 0]), p.push([p[p.length - 1][0], 0]))
                      : !n && u && (f.push([v, 0]), p.push([v, 0])),
                      f.push([v, i]),
                      p.push([v, i]),
                      (v += g),
                      (u = n);
                  }
                });
                var y = this.dataZoomModel;
                this._displayables.barGroup.add(
                  new a.Polygon({
                    shape: { points: f },
                    style: i.defaults(
                      { fill: y.get('dataBackgroundColor') },
                      y.getModel('dataBackground.areaStyle').getAreaStyle(),
                    ),
                    silent: !0,
                    z2: -20,
                  }),
                ),
                  this._displayables.barGroup.add(
                    new a.Polyline({
                      shape: { points: p },
                      style: y.getModel('dataBackground.lineStyle').getLineStyle(),
                      silent: !0,
                      z2: -19,
                    }),
                  );
              }
            }
          },
          _prepareDataShadowInfo: function() {
            var t = this.dataZoomModel,
              e = t.get('showDataShadow');
            if (!1 !== e) {
              var n,
                r = this.ecModel;
              return (
                t.eachTargetAxis(function(a, o) {
                  var s = t.getAxisProxy(a.name, o).getTargetSeriesModels();
                  i.each(
                    s,
                    function(t) {
                      if (!n && !(!0 !== e && i.indexOf(w, t.get('type')) < 0)) {
                        var s,
                          l = r.getComponent(a.axis, o).axis,
                          u = M(a.name),
                          c = t.coordinateSystem;
                        null != u && c.getOtherAxis && (s = c.getOtherAxis(l).inverse),
                          (u = t.getData().mapDimension(u)),
                          (n = {
                            thisAxis: l,
                            series: t,
                            thisDim: a.name,
                            otherDim: u,
                            otherAxisInverse: s,
                          });
                      }
                    },
                    this,
                  );
                }, this),
                n
              );
            }
          },
          _renderHandle: function() {
            var t = this._displayables,
              e = (t.handles = []),
              n = (t.handleLabels = []),
              i = this._displayables.barGroup,
              r = this._size,
              o = this.dataZoomModel;
            i.add(
              (t.filler = new h({
                draggable: !0,
                cursor: T(this._orient),
                drift: p(this._onDragMove, this, 'all'),
                ondragstart: p(this._showDataInfo, this, !0),
                ondragend: p(this._onDragEnd, this),
                onmouseover: p(this._showDataInfo, this, !0),
                onmouseout: p(this._showDataInfo, this, !1),
                style: { fill: o.get('fillerColor'), textPosition: 'inside' },
              })),
            ),
              i.add(
                new h({
                  silent: !0,
                  subPixelOptimize: !0,
                  shape: { x: 0, y: 0, width: r[0], height: r[1] },
                  style: {
                    stroke: o.get('dataBackgroundColor') || o.get('borderColor'),
                    lineWidth: m,
                    fill: 'rgba(0,0,0,0)',
                  },
                }),
              ),
              g(
                [0, 1],
                function(t) {
                  var r = a.createIcon(
                      o.get('handleIcon'),
                      {
                        cursor: T(this._orient),
                        draggable: !0,
                        drift: p(this._onDragMove, this, t),
                        ondragend: p(this._onDragEnd, this),
                        onmouseover: p(this._showDataInfo, this, !0),
                        onmouseout: p(this._showDataInfo, this, !1),
                      },
                      { x: -1, y: 0, width: 2, height: 2 },
                    ),
                    s = r.getBoundingRect();
                  (this._handleHeight = l.parsePercent(o.get('handleSize'), this._size[1])),
                    (this._handleWidth = (s.width / s.height) * this._handleHeight),
                    r.setStyle(o.getModel('handleStyle').getItemStyle());
                  var u = o.get('handleColor');
                  null != u && (r.style.fill = u), i.add((e[t] = r));
                  var c = o.textStyleModel;
                  this.group.add(
                    (n[t] = new a.Text({
                      silent: !0,
                      invisible: !0,
                      style: {
                        x: 0,
                        y: 0,
                        text: '',
                        textVerticalAlign: 'middle',
                        textAlign: 'center',
                        textFill: c.getTextColor(),
                        textFont: c.getFont(),
                      },
                      z2: 10,
                    })),
                  );
                },
                this,
              );
          },
          _resetInterval: function() {
            var t = (this._range = this.dataZoomModel.getPercentRange()),
              e = this._getViewExtent();
            this._handleEnds = [d(t[0], [0, 100], e, !0), d(t[1], [0, 100], e, !0)];
          },
          _updateInterval: function(t, e) {
            var n = this.dataZoomModel,
              i = this._handleEnds,
              r = this._getViewExtent(),
              a = n.findRepresentativeAxisProxy().getMinMaxSpan(),
              o = [0, 100];
            c(
              e,
              i,
              r,
              n.get('zoomLock') ? 'all' : t,
              null != a.minSpan ? d(a.minSpan, o, r, !0) : null,
              null != a.maxSpan ? d(a.maxSpan, o, r, !0) : null,
            );
            var s = this._range,
              l = (this._range = f([d(i[0], r, o, !0), d(i[1], r, o, !0)]));
            return !s || s[0] !== l[0] || s[1] !== l[1];
          },
          _updateView: function(t) {
            var e = this._displayables,
              n = this._handleEnds,
              i = f(n.slice()),
              r = this._size;
            g(
              [0, 1],
              function(t) {
                var i = e.handles[t],
                  a = this._handleHeight;
                i.attr({ scale: [a / 2, a / 2], position: [n[t], r[1] / 2 - a / 2] });
              },
              this,
            ),
              e.filler.setShape({ x: i[0], y: 0, width: i[1] - i[0], height: r[1] }),
              this._updateDataInfo(t);
          },
          _updateDataInfo: function(t) {
            var e = this.dataZoomModel,
              n = this._displayables,
              i = n.handleLabels,
              r = this._orient,
              o = ['', ''];
            if (e.get('showDetail')) {
              var s = e.findRepresentativeAxisProxy();
              if (s) {
                var l = s.getAxisModel().axis,
                  u = this._range,
                  c = t
                    ? s.calculateDataWindow({ start: u[0], end: u[1] }).valueWindow
                    : s.getDataValueWindow();
                o = [this._formatLabel(c[0], l), this._formatLabel(c[1], l)];
              }
            }
            var h = f(this._handleEnds.slice());
            function d(t) {
              var e = a.getTransform(n.handles[t].parent, this.group),
                s = a.transformDirection(0 === t ? 'right' : 'left', e),
                l = this._handleWidth / 2 + b,
                u = a.applyTransform([h[t] + (0 === t ? -l : l), this._size[1] / 2], e);
              i[t].setStyle({
                x: u[0],
                y: u[1],
                textVerticalAlign: r === x ? 'middle' : s,
                textAlign: r === x ? s : 'center',
                text: o[t],
              });
            }
            d.call(this, 0), d.call(this, 1);
          },
          _formatLabel: function(t, e) {
            var n = this.dataZoomModel,
              r = n.get('labelFormatter'),
              a = n.get('labelPrecision');
            (null != a && 'auto' !== a) || (a = e.getPixelPrecision());
            var o =
              null == t || isNaN(t)
                ? ''
                : 'category' === e.type || 'time' === e.type
                ? e.scale.getLabel(Math.round(t))
                : t.toFixed(Math.min(a, 20));
            return i.isFunction(r) ? r(t, o) : i.isString(r) ? r.replace('{value}', o) : o;
          },
          _showDataInfo: function(t) {
            t = this._dragging || t;
            var e = this._displayables.handleLabels;
            e[0].attr('invisible', !t), e[1].attr('invisible', !t);
          },
          _onDragMove: function(t, e, n, i) {
            (this._dragging = !0), r.stop(i.event);
            var o = this._displayables.barGroup.getLocalTransform(),
              s = a.applyTransform([e, n], o, !0),
              l = this._updateInterval(t, s[0]),
              u = this.dataZoomModel.get('realtime');
            this._updateView(!u), l && u && this._dispatchZoomAction();
          },
          _onDragEnd: function() {
            (this._dragging = !1), this._showDataInfo(!1);
            var t = this.dataZoomModel.get('realtime');
            !t && this._dispatchZoomAction();
          },
          _onClickPanelClick: function(t) {
            var e = this._size,
              n = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);
            if (!(n[0] < 0 || n[0] > e[0] || n[1] < 0 || n[1] > e[1])) {
              var i = this._handleEnds,
                r = (i[0] + i[1]) / 2,
                a = this._updateInterval('all', n[0] - r);
              this._updateView(), a && this._dispatchZoomAction();
            }
          },
          _dispatchZoomAction: function() {
            var t = this._range;
            this.api.dispatchAction({
              type: 'dataZoom',
              from: this.uid,
              dataZoomId: this.dataZoomModel.id,
              start: t[0],
              end: t[1],
            });
          },
          _findCoordRect: function() {
            var t;
            if (
              (g(this.getTargetCoordInfo(), function(e) {
                if (!t && e.length) {
                  var n = e[0].model.coordinateSystem;
                  t = n.getRect && n.getRect();
                }
              }),
              !t)
            ) {
              var e = this.api.getWidth(),
                n = this.api.getHeight();
              t = { x: 0.2 * e, y: 0.2 * n, width: 0.6 * e, height: 0.6 * n };
            }
            return t;
          },
        });
      function M(t) {
        var e = { x: 'y', y: 'x', radius: 'angle', angle: 'radius' };
        return e[t];
      }
      function T(t) {
        return 'vertical' === t ? 'ns-resize' : 'ew-resize';
      }
      var C = S;
      t.exports = C;
    },
    JuEJ: function(t, e, n) {
      var i = n('bYtY'),
        r = n('4NO4'),
        a = i.each,
        o = i.isObject,
        s = [
          'areaStyle',
          'lineStyle',
          'nodeStyle',
          'linkStyle',
          'chordStyle',
          'label',
          'labelLine',
        ];
      function l(t) {
        var e = t && t.itemStyle;
        if (e)
          for (var n = 0, r = s.length; n < r; n++) {
            var a = s[n],
              o = e.normal,
              l = e.emphasis;
            o &&
              o[a] &&
              ((t[a] = t[a] || {}),
              t[a].normal ? i.merge(t[a].normal, o[a]) : (t[a].normal = o[a]),
              (o[a] = null)),
              l &&
                l[a] &&
                ((t[a] = t[a] || {}),
                t[a].emphasis ? i.merge(t[a].emphasis, l[a]) : (t[a].emphasis = l[a]),
                (l[a] = null));
          }
      }
      function u(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
          var r = t[e].normal,
            a = t[e].emphasis;
          r && (n ? ((t[e].normal = t[e].emphasis = null), i.defaults(t[e], r)) : (t[e] = r)),
            a && ((t.emphasis = t.emphasis || {}), (t.emphasis[e] = a));
        }
      }
      function c(t) {
        u(t, 'itemStyle'),
          u(t, 'lineStyle'),
          u(t, 'areaStyle'),
          u(t, 'label'),
          u(t, 'labelLine'),
          u(t, 'upperLabel'),
          u(t, 'edgeLabel');
      }
      function h(t, e) {
        var n = o(t) && t[e],
          i = o(n) && n.textStyle;
        if (i)
          for (var a = 0, s = r.TEXT_STYLE_OPTIONS.length; a < s; a++) {
            e = r.TEXT_STYLE_OPTIONS[a];
            i.hasOwnProperty(e) && (n[e] = i[e]);
          }
      }
      function d(t) {
        t && (c(t), h(t, 'label'), t.emphasis && h(t.emphasis, 'label'));
      }
      function f(t) {
        if (o(t)) {
          l(t),
            c(t),
            h(t, 'label'),
            h(t, 'upperLabel'),
            h(t, 'edgeLabel'),
            t.emphasis &&
              (h(t.emphasis, 'label'), h(t.emphasis, 'upperLabel'), h(t.emphasis, 'edgeLabel'));
          var e = t.markPoint;
          e && (l(e), d(e));
          var n = t.markLine;
          n && (l(n), d(n));
          var r = t.markArea;
          r && d(r);
          var a = t.data;
          if ('graph' === t.type) {
            a = a || t.nodes;
            var s = t.links || t.edges;
            if (s && !i.isTypedArray(s)) for (var f = 0; f < s.length; f++) d(s[f]);
            i.each(t.categories, function(t) {
              c(t);
            });
          }
          if (a && !i.isTypedArray(a)) for (f = 0; f < a.length; f++) d(a[f]);
          e = t.markPoint;
          if (e && e.data) {
            var p = e.data;
            for (f = 0; f < p.length; f++) d(p[f]);
          }
          n = t.markLine;
          if (n && n.data) {
            var g = n.data;
            for (f = 0; f < g.length; f++) i.isArray(g[f]) ? (d(g[f][0]), d(g[f][1])) : d(g[f]);
          }
          'gauge' === t.type
            ? (h(t, 'axisLabel'), h(t, 'title'), h(t, 'detail'))
            : 'treemap' === t.type
            ? (u(t.breadcrumb, 'itemStyle'),
              i.each(t.levels, function(t) {
                c(t);
              }))
            : 'tree' === t.type && c(t.leaves);
        }
      }
      function p(t) {
        return i.isArray(t) ? t : t ? [t] : [];
      }
      function g(t) {
        return (i.isArray(t) ? t[0] : t) || {};
      }
      function v(t, e) {
        a(p(t.series), function(t) {
          o(t) && f(t);
        });
        var n = [
          'xAxis',
          'yAxis',
          'radiusAxis',
          'angleAxis',
          'singleAxis',
          'parallelAxis',
          'radar',
        ];
        e && n.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis'),
          a(n, function(e) {
            a(p(t[e]), function(t) {
              t && (h(t, 'axisLabel'), h(t.axisPointer, 'label'));
            });
          }),
          a(p(t.parallel), function(t) {
            var e = t && t.parallelAxisDefault;
            h(e, 'axisLabel'), h(e && e.axisPointer, 'label');
          }),
          a(p(t.calendar), function(t) {
            u(t, 'itemStyle'), h(t, 'dayLabel'), h(t, 'monthLabel'), h(t, 'yearLabel');
          }),
          a(p(t.radar), function(t) {
            h(t, 'name');
          }),
          a(p(t.geo), function(t) {
            o(t) &&
              (d(t),
              a(p(t.regions), function(t) {
                d(t);
              }));
          }),
          a(p(t.timeline), function(t) {
            d(t), u(t, 'label'), u(t, 'itemStyle'), u(t, 'controlStyle', !0);
            var e = t.data;
            i.isArray(e) &&
              i.each(e, function(t) {
                i.isObject(t) && (u(t, 'label'), u(t, 'itemStyle'));
              });
          }),
          a(p(t.toolbox), function(t) {
            u(t, 'iconStyle'),
              a(t.feature, function(t) {
                u(t, 'iconStyle');
              });
          }),
          h(g(t.axisPointer), 'label'),
          h(g(t.tooltip).axisPointer, 'label');
      }
      t.exports = v;
    },
    K2GJ: function(t, e, n) {
      var i = n('fW2E'),
        r = n('gut8'),
        a = r.ContextCachedBy,
        o = [
          ['shadowBlur', 0],
          ['shadowOffsetX', 0],
          ['shadowOffsetY', 0],
          ['shadowColor', '#000'],
          ['lineCap', 'butt'],
          ['lineJoin', 'miter'],
          ['miterLimit', 10],
        ],
        s = function(t) {
          this.extendFrom(t, !1);
        };
      function l(t, e, n) {
        var i = null == e.x ? 0 : e.x,
          r = null == e.x2 ? 1 : e.x2,
          a = null == e.y ? 0 : e.y,
          o = null == e.y2 ? 0 : e.y2;
        e.global ||
          ((i = i * n.width + n.x),
          (r = r * n.width + n.x),
          (a = a * n.height + n.y),
          (o = o * n.height + n.y)),
          (i = isNaN(i) ? 0 : i),
          (r = isNaN(r) ? 1 : r),
          (a = isNaN(a) ? 0 : a),
          (o = isNaN(o) ? 0 : o);
        var s = t.createLinearGradient(i, a, r, o);
        return s;
      }
      function u(t, e, n) {
        var i = n.width,
          r = n.height,
          a = Math.min(i, r),
          o = null == e.x ? 0.5 : e.x,
          s = null == e.y ? 0.5 : e.y,
          l = null == e.r ? 0.5 : e.r;
        e.global || ((o = o * i + n.x), (s = s * r + n.y), (l *= a));
        var u = t.createRadialGradient(o, s, 0, o, s, l);
        return u;
      }
      s.prototype = {
        constructor: s,
        fill: '#000',
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: '#000',
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: 'inside',
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: 'transparent',
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: 'transparent',
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function(t, e, n) {
          var r = this,
            s = n && n.style,
            l = !s || t.__attrCachedBy !== a.STYLE_BIND;
          t.__attrCachedBy = a.STYLE_BIND;
          for (var u = 0; u < o.length; u++) {
            var c = o[u],
              h = c[0];
            (l || r[h] !== s[h]) && (t[h] = i(t, h, r[h] || c[1]));
          }
          if (
            ((l || r.fill !== s.fill) && (t.fillStyle = r.fill),
            (l || r.stroke !== s.stroke) && (t.strokeStyle = r.stroke),
            (l || r.opacity !== s.opacity) && (t.globalAlpha = null == r.opacity ? 1 : r.opacity),
            (l || r.blend !== s.blend) && (t.globalCompositeOperation = r.blend || 'source-over'),
            this.hasStroke())
          ) {
            var d = r.lineWidth;
            t.lineWidth = d / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
          }
        },
        hasFill: function() {
          var t = this.fill;
          return null != t && 'none' !== t;
        },
        hasStroke: function() {
          var t = this.stroke;
          return null != t && 'none' !== t && this.lineWidth > 0;
        },
        extendFrom: function(t, e) {
          if (t)
            for (var n in t)
              !t.hasOwnProperty(n) ||
                (!0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n])) ||
                (this[n] = t[n]);
        },
        set: function(t, e) {
          'string' === typeof t ? (this[t] = e) : this.extendFrom(t, !0);
        },
        clone: function() {
          var t = new this.constructor();
          return t.extendFrom(this, !0), t;
        },
        getGradient: function(t, e, n) {
          for (
            var i = 'radial' === e.type ? u : l, r = i(t, e, n), a = e.colorStops, o = 0;
            o < a.length;
            o++
          )
            r.addColorStop(a[o].offset, a[o].color);
          return r;
        },
      };
      for (var c = s.prototype, h = 0; h < o.length; h++) {
        var d = o[h];
        d[0] in c || (c[d[0]] = d[1]);
      }
      s.getGradient = c.getGradient;
      var f = s;
      t.exports = f;
    },
    KCsZ: function(t, e, n) {
      var i = n('bYtY');
      function r(t) {
        for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
        return function(e, n, r) {
          for (var a = {}, o = 0; o < t.length; o++) {
            var s = t[o][1];
            if (!((n && i.indexOf(n, s) >= 0) || (r && i.indexOf(r, s) < 0))) {
              var l = e.getShallow(s);
              null != l && (a[t[o][0]] = l);
            }
          }
          return a;
        };
      }
      t.exports = r;
    },
    KS52: function(t, e, n) {
      var i = n('OELB'),
        r = i.parsePercent,
        a = i.linearMap,
        o = n('+TT/'),
        s = n('u3DP'),
        l = n('bYtY'),
        u = 2 * Math.PI,
        c = Math.PI / 180;
      function h(t, e) {
        return o.getLayoutRect(t.getBoxLayoutParams(), {
          width: e.getWidth(),
          height: e.getHeight(),
        });
      }
      function d(t, e, n, i) {
        e.eachSeriesByType(t, function(t) {
          var e = t.getData(),
            i = e.mapDimension('value'),
            o = h(t, n),
            d = t.get('center'),
            f = t.get('radius');
          l.isArray(f) || (f = [0, f]), l.isArray(d) || (d = [d, d]);
          var p = r(o.width, n.getWidth()),
            g = r(o.height, n.getHeight()),
            v = Math.min(p, g),
            m = r(d[0], p) + o.x,
            y = r(d[1], g) + o.y,
            x = r(f[0], v / 2),
            _ = r(f[1], v / 2),
            b = -t.get('startAngle') * c,
            w = t.get('minAngle') * c,
            S = 0;
          e.each(i, function(t) {
            !isNaN(t) && S++;
          });
          var M = e.getSum(i),
            T = (Math.PI / (M || S)) * 2,
            C = t.get('clockwise'),
            I = t.get('roseType'),
            k = t.get('stillShowZeroSum'),
            A = e.getDataExtent(i);
          A[0] = 0;
          var D = u,
            O = 0,
            P = b,
            E = C ? 1 : -1;
          if (
            (e.each(i, function(t, n) {
              var i;
              if (isNaN(t))
                e.setItemLayout(n, {
                  angle: NaN,
                  startAngle: NaN,
                  endAngle: NaN,
                  clockwise: C,
                  cx: m,
                  cy: y,
                  r0: x,
                  r: I ? NaN : _,
                  viewRect: o,
                });
              else {
                (i = 'area' !== I ? (0 === M && k ? T : t * T) : u / S),
                  i < w ? ((i = w), (D -= w)) : (O += t);
                var r = P + E * i;
                e.setItemLayout(n, {
                  angle: i,
                  startAngle: P,
                  endAngle: r,
                  clockwise: C,
                  cx: m,
                  cy: y,
                  r0: x,
                  r: I ? a(t, A, [x, _]) : _,
                  viewRect: o,
                }),
                  (P = r);
              }
            }),
            D < u && S)
          )
            if (D <= 0.001) {
              var L = u / S;
              e.each(i, function(t, n) {
                if (!isNaN(t)) {
                  var i = e.getItemLayout(n);
                  (i.angle = L), (i.startAngle = b + E * n * L), (i.endAngle = b + E * (n + 1) * L);
                }
              });
            } else
              (T = D / O),
                (P = b),
                e.each(i, function(t, n) {
                  if (!isNaN(t)) {
                    var i = e.getItemLayout(n),
                      r = i.angle === w ? w : t * T;
                    (i.startAngle = P), (i.endAngle = P + E * r), (P += E * r);
                  }
                });
          s(t, _, o.width, o.height, o.x, o.y);
        });
      }
      t.exports = d;
    },
    Kagy: function(t, e) {
      var n = {
        legend: { selector: { all: '\u5168\u9009', inverse: '\u53cd\u9009' } },
        toolbox: {
          brush: {
            title: {
              rect: '\u77e9\u5f62\u9009\u62e9',
              polygon: '\u5708\u9009',
              lineX: '\u6a2a\u5411\u9009\u62e9',
              lineY: '\u7eb5\u5411\u9009\u62e9',
              keep: '\u4fdd\u6301\u9009\u62e9',
              clear: '\u6e05\u9664\u9009\u62e9',
            },
          },
          dataView: {
            title: '\u6570\u636e\u89c6\u56fe',
            lang: ['\u6570\u636e\u89c6\u56fe', '\u5173\u95ed', '\u5237\u65b0'],
          },
          dataZoom: {
            title: {
              zoom: '\u533a\u57df\u7f29\u653e',
              back: '\u533a\u57df\u7f29\u653e\u8fd8\u539f',
            },
          },
          magicType: {
            title: {
              line: '\u5207\u6362\u4e3a\u6298\u7ebf\u56fe',
              bar: '\u5207\u6362\u4e3a\u67f1\u72b6\u56fe',
              stack: '\u5207\u6362\u4e3a\u5806\u53e0',
              tiled: '\u5207\u6362\u4e3a\u5e73\u94fa',
            },
          },
          restore: { title: '\u8fd8\u539f' },
          saveAsImage: {
            title: '\u4fdd\u5b58\u4e3a\u56fe\u7247',
            lang: ['\u53f3\u952e\u53e6\u5b58\u4e3a\u56fe\u7247'],
          },
        },
        series: {
          typeNames: {
            pie: '\u997c\u56fe',
            bar: '\u67f1\u72b6\u56fe',
            line: '\u6298\u7ebf\u56fe',
            scatter: '\u6563\u70b9\u56fe',
            effectScatter: '\u6d9f\u6f2a\u6563\u70b9\u56fe',
            radar: '\u96f7\u8fbe\u56fe',
            tree: '\u6811\u56fe',
            treemap: '\u77e9\u5f62\u6811\u56fe',
            boxplot: '\u7bb1\u578b\u56fe',
            candlestick: 'K\u7ebf\u56fe',
            k: 'K\u7ebf\u56fe',
            heatmap: '\u70ed\u529b\u56fe',
            map: '\u5730\u56fe',
            parallel: '\u5e73\u884c\u5750\u6807\u56fe',
            lines: '\u7ebf\u56fe',
            graph: '\u5173\u7cfb\u56fe',
            sankey: '\u6851\u57fa\u56fe',
            funnel: '\u6f0f\u6597\u56fe',
            gauge: '\u4eea\u8868\u76d8\u56fe',
            pictorialBar: '\u8c61\u5f62\u67f1\u56fe',
            themeRiver: '\u4e3b\u9898\u6cb3\u6d41\u56fe',
            sunburst: '\u65ed\u65e5\u56fe',
          },
        },
        aria: {
          general: {
            withTitle:
              '\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u201c{title}\u201d\u7684\u56fe\u8868\u3002',
            withoutTitle: '\u8fd9\u662f\u4e00\u4e2a\u56fe\u8868\uff0c',
          },
          series: {
            single: {
              prefix: '',
              withName:
                '\u56fe\u8868\u7c7b\u578b\u662f{seriesType}\uff0c\u8868\u793a{seriesName}\u3002',
              withoutName: '\u56fe\u8868\u7c7b\u578b\u662f{seriesType}\u3002',
            },
            multiple: {
              prefix: '\u5b83\u7531{seriesCount}\u4e2a\u56fe\u8868\u7cfb\u5217\u7ec4\u6210\u3002',
              withName:
                '\u7b2c{seriesId}\u4e2a\u7cfb\u5217\u662f\u4e00\u4e2a\u8868\u793a{seriesName}\u7684{seriesType}\uff0c',
              withoutName: '\u7b2c{seriesId}\u4e2a\u7cfb\u5217\u662f\u4e00\u4e2a{seriesType}\uff0c',
              separator: { middle: '\uff1b', end: '\u3002' },
            },
          },
          data: {
            allData: '\u5176\u6570\u636e\u662f\u2014\u2014',
            partialData: '\u5176\u4e2d\uff0c\u524d{displayCnt}\u9879\u662f\u2014\u2014',
            withName: '{name}\u7684\u6570\u636e\u662f{value}',
            withoutName: '{value}',
            separator: { middle: '\uff0c', end: '' },
          },
        },
      };
      t.exports = n;
    },
    KxfA: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = (r.isTypedArray, r.extend),
        o = (r.assert, r.each),
        s = r.isObject,
        l = n('4NO4'),
        u = l.getDataItemValue,
        c = l.isDataItemOption,
        h = n('OELB'),
        d = h.parseDate,
        f = n('7G+c'),
        p = n('k9D9'),
        g = p.SOURCE_FORMAT_TYPED_ARRAY,
        v = p.SOURCE_FORMAT_ARRAY_ROWS,
        m = p.SOURCE_FORMAT_ORIGINAL,
        y = p.SOURCE_FORMAT_OBJECT_ROWS;
      function x(t, e) {
        f.isInstance(t) || (t = f.seriesDataToSource(t)), (this._source = t);
        var n = (this._data = t.data),
          i = t.sourceFormat;
        i === g && ((this._offset = 0), (this._dimSize = e), (this._data = n));
        var r = b[i === v ? i + '_' + t.seriesLayoutBy : i];
        a(this, r);
      }
      var _ = x.prototype;
      (_.pure = !1),
        (_.persistent = !0),
        (_.getSource = function() {
          return this._source;
        });
      var b = {
        arrayRows_column: {
          pure: !0,
          count: function() {
            return Math.max(0, this._data.length - this._source.startIndex);
          },
          getItem: function(t) {
            return this._data[t + this._source.startIndex];
          },
          appendData: M,
        },
        arrayRows_row: {
          pure: !0,
          count: function() {
            var t = this._data[0];
            return t ? Math.max(0, t.length - this._source.startIndex) : 0;
          },
          getItem: function(t) {
            t += this._source.startIndex;
            for (var e = [], n = this._data, i = 0; i < n.length; i++) {
              var r = n[i];
              e.push(r ? r[t] : null);
            }
            return e;
          },
          appendData: function() {
            throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
          },
        },
        objectRows: { pure: !0, count: w, getItem: S, appendData: M },
        keyedColumns: {
          pure: !0,
          count: function() {
            var t = this._source.dimensionsDefine[0].name,
              e = this._data[t];
            return e ? e.length : 0;
          },
          getItem: function(t) {
            for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
              var r = this._data[n[i].name];
              e.push(r ? r[t] : null);
            }
            return e;
          },
          appendData: function(t) {
            var e = this._data;
            o(t, function(t, n) {
              for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r]);
            });
          },
        },
        original: { count: w, getItem: S, appendData: M },
        typedArray: {
          persistent: !1,
          pure: !0,
          count: function() {
            return this._data ? this._data.length / this._dimSize : 0;
          },
          getItem: function(t, e) {
            (t -= this._offset), (e = e || []);
            for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
            return e;
          },
          appendData: function(t) {
            this._data = t;
          },
          clean: function() {
            (this._offset += this.count()), (this._data = null);
          },
        },
      };
      function w() {
        return this._data.length;
      }
      function S(t) {
        return this._data[t];
      }
      function M(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e]);
      }
      var T = {
        arrayRows: C,
        objectRows: function(t, e, n, i) {
          return null != n ? t[i] : t;
        },
        keyedColumns: C,
        original: function(t, e, n, i) {
          var r = u(t);
          return null != n && r instanceof Array ? r[n] : r;
        },
        typedArray: C,
      };
      function C(t, e, n, i) {
        return null != n ? t[n] : t;
      }
      var I = {
        arrayRows: k,
        objectRows: function(t, e, n, i) {
          return A(t[e], this._dimensionInfos[e]);
        },
        keyedColumns: k,
        original: function(t, e, n, i) {
          var r = t && (null == t.value ? t : t.value);
          return (
            !this._rawData.pure && c(t) && (this.hasItemOption = !0),
            A(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
          );
        },
        typedArray: function(t, e, n, i) {
          return t[i];
        },
      };
      function k(t, e, n, i) {
        return A(t[i], this._dimensionInfos[e]);
      }
      function A(t, e) {
        var n = e && e.type;
        if ('ordinal' === n) {
          var i = e && e.ordinalMeta;
          return i ? i.parseAndCollect(t) : t;
        }
        return (
          'time' === n && 'number' !== typeof t && null != t && '-' !== t && (t = +d(t)),
          null == t || '' === t ? NaN : +t
        );
      }
      function D(t, e, n) {
        if (t) {
          var i = t.getRawDataItem(e);
          if (null != i) {
            var r,
              a,
              o = t.getProvider().getSource().sourceFormat,
              s = t.getDimensionInfo(n);
            return s && ((r = s.name), (a = s.index)), T[o](i, e, a, r);
          }
        }
      }
      function O(t, e, n) {
        if (t) {
          var i = t.getProvider().getSource().sourceFormat;
          if (i === m || i === y) {
            var r = t.getRawDataItem(e);
            return i !== m || s(r) || (r = null), r ? r[n] : void 0;
          }
        }
      }
      (e.DefaultDataProvider = x),
        (e.defaultDimValueGetters = I),
        (e.retrieveRawValue = D),
        (e.retrieveRawAttr = O);
    },
    L0Ub: function(t, e, n) {
      var i = n('bYtY'),
        r = i.each,
        a = i.createHashMap,
        o = (i.assert, n('Tghj')),
        s = (o.__DEV__, a(['tooltip', 'label', 'itemName', 'itemId', 'seriesName']));
      function l(t) {
        var e = {},
          n = (e.encode = {}),
          i = a(),
          o = [],
          l = [],
          c = (e.userOutput = { dimensionNames: t.dimensions.slice(), encode: {} });
        r(t.dimensions, function(e) {
          var r = t.getDimensionInfo(e),
            a = r.coordDim;
          if (a) {
            var d = r.coordDimIndex;
            (u(n, a)[d] = e),
              r.isExtraCoord ||
                (i.set(a, 1), h(r.type) && (o[0] = e), (u(c.encode, a)[d] = r.index)),
              r.defaultTooltip && l.push(e);
          }
          s.each(function(t, e) {
            var i = u(n, e),
              a = r.otherDims[e];
            null != a && !1 !== a && (i[a] = r.name);
          });
        });
        var d = [],
          f = {};
        i.each(function(t, e) {
          var i = n[e];
          (f[e] = i[0]), (d = d.concat(i));
        }),
          (e.dataDimsOnCoord = d),
          (e.encodeFirstDimNotExtra = f);
        var p = n.label;
        p && p.length && (o = p.slice());
        var g = n.tooltip;
        return (
          g && g.length ? (l = g.slice()) : l.length || (l = o.slice()),
          (n.defaultedLabel = o),
          (n.defaultedTooltip = l),
          e
        );
      }
      function u(t, e) {
        return t.hasOwnProperty(e) || (t[e] = []), t[e];
      }
      function c(t) {
        return 'category' === t ? 'ordinal' : 'time' === t ? 'time' : 'float';
      }
      function h(t) {
        return !('ordinal' === t || 'time' === t);
      }
      (e.OTHER_DIMENSIONS = s), (e.summarizeDimensions = l), (e.getDimensionTypeByAxis = c);
    },
    LBfv: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY'),
        a = r.createHashMap,
        o = r.each;
      i.registerProcessor({
        getTargetSeries: function(t) {
          var e = a();
          return (
            t.eachComponent('dataZoom', function(t) {
              t.eachTargetAxis(function(t, n, i) {
                var r = i.getAxisProxy(t.name, n);
                o(r.getTargetSeriesModels(), function(t) {
                  e.set(t.uid, t);
                });
              });
            }),
            e
          );
        },
        modifyOutputEnd: !0,
        overallReset: function(t, e) {
          t.eachComponent('dataZoom', function(t) {
            t.eachTargetAxis(function(t, n, i) {
              i.getAxisProxy(t.name, n).reset(i, e);
            }),
              t.eachTargetAxis(function(t, n, i) {
                i.getAxisProxy(t.name, n).filterData(i, e);
              });
          }),
            t.eachComponent('dataZoom', function(t) {
              var e = t.findRepresentativeAxisProxy(),
                n = e.getDataPercentWindow(),
                i = e.getDataValueWindow();
              t.setCalculatedRange({ start: n[0], end: n[1], startValue: i[0], endValue: i[1] });
            });
        },
      });
    },
    LPTA: function(t, e) {
      var n = 1;
      'undefined' !== typeof window && (n = Math.max(window.devicePixelRatio || 1, 1));
      var i = 0,
        r = n;
      (e.debugMode = i), (e.devicePixelRatio = r);
    },
    MBQ8: function(t, e, n) {
      var i = n('T4UG'),
        r = n('MwEJ'),
        a = i.extend({
          type: 'series.__base_bar__',
          getInitialData: function(t, e) {
            return r(this.getSource(), this, { useEncodeDefaulter: !0 });
          },
          getMarkerPosition: function(t) {
            var e = this.coordinateSystem;
            if (e) {
              var n = e.dataToPoint(e.clampData(t)),
                i = this.getData(),
                r = i.getLayout('offset'),
                a = i.getLayout('size'),
                o = e.getBaseAxis().isHorizontal() ? 0 : 1;
              return (n[o] += r + a / 2), n;
            }
            return [NaN, NaN];
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'cartesian2d',
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: 'mod',
            itemStyle: {},
            emphasis: {},
          },
        });
      t.exports = a;
    },
    MEGo: function(t, e, n) {
      var i = n('4fz+'),
        r = n('Dagg'),
        a = n('dqUG'),
        o = n('2fw6'),
        s = n('x6Kt'),
        l = n('rmlV'),
        u = n('yxFR'),
        c = n('y+Vt'),
        h = n('h7HQ'),
        d = n('1Jh7'),
        f = n('SKnc'),
        p = n('K2GJ'),
        g = n('Fofx'),
        v = n('NC18'),
        m = v.createFromString,
        y = n('bYtY'),
        x = y.isString,
        _ = y.extend,
        b = y.defaults,
        w = y.trim,
        S = y.each,
        M = /[\s,]+/;
      function T(t) {
        if (x(t)) {
          var e = new DOMParser();
          t = e.parseFromString(t, 'text/xml');
        }
        9 === t.nodeType && (t = t.firstChild);
        while ('svg' !== t.nodeName.toLowerCase() || 1 !== t.nodeType) t = t.nextSibling;
        return t;
      }
      function C() {
        (this._defs = {}), (this._root = null), (this._isDefine = !1), (this._isText = !1);
      }
      (C.prototype.parse = function(t, e) {
        e = e || {};
        var n = T(t);
        if (!n) throw new Error('Illegal svg');
        var r = new i();
        this._root = r;
        var a = n.getAttribute('viewBox') || '',
          o = parseFloat(n.getAttribute('width') || e.width),
          l = parseFloat(n.getAttribute('height') || e.height);
        isNaN(o) && (o = null), isNaN(l) && (l = null), E(n, r, null, !0);
        var u,
          c,
          h = n.firstChild;
        while (h) this._parseNode(h, r), (h = h.nextSibling);
        if (a) {
          var d = w(a).split(M);
          d.length >= 4 &&
            (u = {
              x: parseFloat(d[0] || 0),
              y: parseFloat(d[1] || 0),
              width: parseFloat(d[2]),
              height: parseFloat(d[3]),
            });
        }
        if (u && null != o && null != l && ((c = F(u, o, l)), !e.ignoreViewBox)) {
          var f = r;
          (r = new i()), r.add(f), (f.scale = c.scale.slice()), (f.position = c.position.slice());
        }
        return (
          e.ignoreRootClip ||
            null == o ||
            null == l ||
            r.setClipPath(new s({ shape: { x: 0, y: 0, width: o, height: l } })),
          { root: r, width: o, height: l, viewBoxRect: u, viewBoxTransform: c }
        );
      }),
        (C.prototype._parseNode = function(t, e) {
          var n,
            i = t.nodeName.toLowerCase();
          if (
            ('defs' === i ? (this._isDefine = !0) : 'text' === i && (this._isText = !0),
            this._isDefine)
          ) {
            var r = k[i];
            if (r) {
              var a = r.call(this, t),
                o = t.getAttribute('id');
              o && (this._defs[o] = a);
            }
          } else {
            r = I[i];
            r && ((n = r.call(this, t, e)), e.add(n));
          }
          var s = t.firstChild;
          while (s)
            1 === s.nodeType && this._parseNode(s, n),
              3 === s.nodeType && this._isText && this._parseText(s, n),
              (s = s.nextSibling);
          'defs' === i ? (this._isDefine = !1) : 'text' === i && (this._isText = !1);
        }),
        (C.prototype._parseText = function(t, e) {
          if (1 === t.nodeType) {
            var n = t.getAttribute('dx') || 0,
              i = t.getAttribute('dy') || 0;
            (this._textX += parseFloat(n)), (this._textY += parseFloat(i));
          }
          var r = new a({
            style: { text: t.textContent, transformText: !0 },
            position: [this._textX || 0, this._textY || 0],
          });
          D(e, r), E(t, r, this._defs);
          var o = r.style.fontSize;
          o &&
            o < 9 &&
            ((r.style.fontSize = 9),
            (r.scale = r.scale || [1, 1]),
            (r.scale[0] *= o / 9),
            (r.scale[1] *= o / 9));
          var s = r.getBoundingRect();
          return (this._textX += s.width), e.add(r), r;
        });
      var I = {
          g: function(t, e) {
            var n = new i();
            return D(e, n), E(t, n, this._defs), n;
          },
          rect: function(t, e) {
            var n = new s();
            return (
              D(e, n),
              E(t, n, this._defs),
              n.setShape({
                x: parseFloat(t.getAttribute('x') || 0),
                y: parseFloat(t.getAttribute('y') || 0),
                width: parseFloat(t.getAttribute('width') || 0),
                height: parseFloat(t.getAttribute('height') || 0),
              }),
              n
            );
          },
          circle: function(t, e) {
            var n = new o();
            return (
              D(e, n),
              E(t, n, this._defs),
              n.setShape({
                cx: parseFloat(t.getAttribute('cx') || 0),
                cy: parseFloat(t.getAttribute('cy') || 0),
                r: parseFloat(t.getAttribute('r') || 0),
              }),
              n
            );
          },
          line: function(t, e) {
            var n = new u();
            return (
              D(e, n),
              E(t, n, this._defs),
              n.setShape({
                x1: parseFloat(t.getAttribute('x1') || 0),
                y1: parseFloat(t.getAttribute('y1') || 0),
                x2: parseFloat(t.getAttribute('x2') || 0),
                y2: parseFloat(t.getAttribute('y2') || 0),
              }),
              n
            );
          },
          ellipse: function(t, e) {
            var n = new l();
            return (
              D(e, n),
              E(t, n, this._defs),
              n.setShape({
                cx: parseFloat(t.getAttribute('cx') || 0),
                cy: parseFloat(t.getAttribute('cy') || 0),
                rx: parseFloat(t.getAttribute('rx') || 0),
                ry: parseFloat(t.getAttribute('ry') || 0),
              }),
              n
            );
          },
          polygon: function(t, e) {
            var n = t.getAttribute('points');
            n && (n = O(n));
            var i = new h({ shape: { points: n || [] } });
            return D(e, i), E(t, i, this._defs), i;
          },
          polyline: function(t, e) {
            var n = new c();
            D(e, n), E(t, n, this._defs);
            var i = t.getAttribute('points');
            i && (i = O(i));
            var r = new d({ shape: { points: i || [] } });
            return r;
          },
          image: function(t, e) {
            var n = new r();
            return (
              D(e, n),
              E(t, n, this._defs),
              n.setStyle({
                image: t.getAttribute('xlink:href'),
                x: t.getAttribute('x'),
                y: t.getAttribute('y'),
                width: t.getAttribute('width'),
                height: t.getAttribute('height'),
              }),
              n
            );
          },
          text: function(t, e) {
            var n = t.getAttribute('x') || 0,
              r = t.getAttribute('y') || 0,
              a = t.getAttribute('dx') || 0,
              o = t.getAttribute('dy') || 0;
            (this._textX = parseFloat(n) + parseFloat(a)),
              (this._textY = parseFloat(r) + parseFloat(o));
            var s = new i();
            return D(e, s), E(t, s, this._defs), s;
          },
          tspan: function(t, e) {
            var n = t.getAttribute('x'),
              r = t.getAttribute('y');
            null != n && (this._textX = parseFloat(n)), null != r && (this._textY = parseFloat(r));
            var a = t.getAttribute('dx') || 0,
              o = t.getAttribute('dy') || 0,
              s = new i();
            return D(e, s), E(t, s, this._defs), (this._textX += a), (this._textY += o), s;
          },
          path: function(t, e) {
            var n = t.getAttribute('d') || '',
              i = m(n);
            return D(e, i), E(t, i, this._defs), i;
          },
        },
        k = {
          lineargradient: function(t) {
            var e = parseInt(t.getAttribute('x1') || 0, 10),
              n = parseInt(t.getAttribute('y1') || 0, 10),
              i = parseInt(t.getAttribute('x2') || 10, 10),
              r = parseInt(t.getAttribute('y2') || 0, 10),
              a = new f(e, n, i, r);
            return A(t, a), a;
          },
          radialgradient: function(t) {},
        };
      function A(t, e) {
        var n = t.firstChild;
        while (n) {
          if (1 === n.nodeType) {
            var i = n.getAttribute('offset');
            i = i.indexOf('%') > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
            var r = n.getAttribute('stop-color') || '#000000';
            e.addColorStop(i, r);
          }
          n = n.nextSibling;
        }
      }
      function D(t, e) {
        t &&
          t.__inheritedStyle &&
          (e.__inheritedStyle || (e.__inheritedStyle = {}),
          b(e.__inheritedStyle, t.__inheritedStyle));
      }
      function O(t) {
        for (var e = w(t).split(M), n = [], i = 0; i < e.length; i += 2) {
          var r = parseFloat(e[i]),
            a = parseFloat(e[i + 1]);
          n.push([r, a]);
        }
        return n;
      }
      var P = {
        fill: 'fill',
        stroke: 'stroke',
        'stroke-width': 'lineWidth',
        opacity: 'opacity',
        'fill-opacity': 'fillOpacity',
        'stroke-opacity': 'strokeOpacity',
        'stroke-dasharray': 'lineDash',
        'stroke-dashoffset': 'lineDashOffset',
        'stroke-linecap': 'lineCap',
        'stroke-linejoin': 'lineJoin',
        'stroke-miterlimit': 'miterLimit',
        'font-family': 'fontFamily',
        'font-size': 'fontSize',
        'font-style': 'fontStyle',
        'font-weight': 'fontWeight',
        'text-align': 'textAlign',
        'alignment-baseline': 'textBaseline',
      };
      function E(t, e, n, i) {
        var r = e.__inheritedStyle || {},
          a = 'text' === e.type;
        if (1 === t.nodeType && (z(t, e), _(r, j(t)), !i))
          for (var o in P)
            if (P.hasOwnProperty(o)) {
              var s = t.getAttribute(o);
              null != s && (r[P[o]] = s);
            }
        var l = a ? 'textFill' : 'fill',
          u = a ? 'textStroke' : 'stroke';
        e.style = e.style || new p();
        var c = e.style;
        null != r.fill && c.set(l, R(r.fill, n)),
          null != r.stroke && c.set(u, R(r.stroke, n)),
          S(
            ['lineWidth', 'opacity', 'fillOpacity', 'strokeOpacity', 'miterLimit', 'fontSize'],
            function(t) {
              var e = 'lineWidth' === t && a ? 'textStrokeWidth' : t;
              null != r[t] && c.set(e, parseFloat(r[t]));
            },
          ),
          (r.textBaseline && 'auto' !== r.textBaseline) || (r.textBaseline = 'alphabetic'),
          'alphabetic' === r.textBaseline && (r.textBaseline = 'bottom'),
          'start' === r.textAlign && (r.textAlign = 'left'),
          'end' === r.textAlign && (r.textAlign = 'right'),
          S(
            [
              'lineDashOffset',
              'lineCap',
              'lineJoin',
              'fontWeight',
              'fontFamily',
              'fontStyle',
              'textAlign',
              'textBaseline',
            ],
            function(t) {
              null != r[t] && c.set(t, r[t]);
            },
          ),
          r.lineDash && (e.style.lineDash = w(r.lineDash).split(M)),
          c[u] && 'none' !== c[u] && (e[u] = !0),
          (e.__inheritedStyle = r);
      }
      var L = /url\(\s*#(.*?)\)/;
      function R(t, e) {
        var n = e && t && t.match(L);
        if (n) {
          var i = w(n[1]),
            r = e[i];
          return r;
        }
        return t;
      }
      var N = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g;
      function z(t, e) {
        var n = t.getAttribute('transform');
        if (n) {
          n = n.replace(/,/g, ' ');
          var i = null,
            r = [];
          n.replace(N, function(t, e, n) {
            r.push(e, n);
          });
          for (var a = r.length - 1; a > 0; a -= 2) {
            var o = r[a],
              s = r[a - 1];
            switch (((i = i || g.create()), s)) {
              case 'translate':
                (o = w(o).split(M)), g.translate(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
                break;
              case 'scale':
                (o = w(o).split(M)), g.scale(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
                break;
              case 'rotate':
                (o = w(o).split(M)), g.rotate(i, i, parseFloat(o[0]));
                break;
              case 'skew':
                (o = w(o).split(M)), console.warn('Skew transform is not supported yet');
                break;
              case 'matrix':
                o = w(o).split(M);
                (i[0] = parseFloat(o[0])),
                  (i[1] = parseFloat(o[1])),
                  (i[2] = parseFloat(o[2])),
                  (i[3] = parseFloat(o[3])),
                  (i[4] = parseFloat(o[4])),
                  (i[5] = parseFloat(o[5]));
                break;
            }
          }
          e.setLocalTransform(i);
        }
      }
      var B = /([^\s:;]+)\s*:\s*([^:;]+)/g;
      function j(t) {
        var e = t.getAttribute('style'),
          n = {};
        if (!e) return n;
        var i,
          r = {};
        B.lastIndex = 0;
        while (null != (i = B.exec(e))) r[i[1]] = i[2];
        for (var a in P) P.hasOwnProperty(a) && null != r[a] && (n[P[a]] = r[a]);
        return n;
      }
      function F(t, e, n) {
        var i = e / t.width,
          r = n / t.height,
          a = Math.min(i, r),
          o = [a, a],
          s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];
        return { scale: o, position: s };
      }
      function Y(t, e) {
        var n = new C();
        return n.parse(t, e);
      }
      (e.parseXML = T), (e.makeViewBoxTransform = F), (e.parseSVG = Y);
    },
    MKOG: function(t, e, n) {
      var i = n('bYtY'),
        r = n('YH21'),
        a = r.Dispatcher,
        o = n('mLcG'),
        s = n('Bq2U'),
        l = function(t) {
          (t = t || {}),
            (this.stage = t.stage || {}),
            (this.onframe = t.onframe || function() {}),
            (this._clips = []),
            (this._running = !1),
            this._time,
            this._pausedTime,
            this._pauseStart,
            (this._paused = !1),
            a.call(this);
        };
      (l.prototype = {
        constructor: l,
        addClip: function(t) {
          this._clips.push(t);
        },
        addAnimator: function(t) {
          t.animation = this;
          for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n]);
        },
        removeClip: function(t) {
          var e = i.indexOf(this._clips, t);
          e >= 0 && this._clips.splice(e, 1);
        },
        removeAnimator: function(t) {
          for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
          t.animation = null;
        },
        _update: function() {
          for (
            var t = new Date().getTime() - this._pausedTime,
              e = t - this._time,
              n = this._clips,
              i = n.length,
              r = [],
              a = [],
              o = 0;
            o < i;
            o++
          ) {
            var s = n[o],
              l = s.step(t, e);
            l && (r.push(l), a.push(s));
          }
          for (o = 0; o < i; ) n[o]._needsRemove ? ((n[o] = n[i - 1]), n.pop(), i--) : o++;
          i = r.length;
          for (o = 0; o < i; o++) a[o].fire(r[o]);
          (this._time = t),
            this.onframe(e),
            this.trigger('frame', e),
            this.stage.update && this.stage.update();
        },
        _startLoop: function() {
          var t = this;
          function e() {
            t._running && (o(e), !t._paused && t._update());
          }
          (this._running = !0), o(e);
        },
        start: function() {
          (this._time = new Date().getTime()), (this._pausedTime = 0), this._startLoop();
        },
        stop: function() {
          this._running = !1;
        },
        pause: function() {
          this._paused || ((this._pauseStart = new Date().getTime()), (this._paused = !0));
        },
        resume: function() {
          this._paused &&
            ((this._pausedTime += new Date().getTime() - this._pauseStart), (this._paused = !1));
        },
        clear: function() {
          this._clips = [];
        },
        isFinished: function() {
          return !this._clips.length;
        },
        animate: function(t, e) {
          e = e || {};
          var n = new s(t, e.loop, e.getter, e.setter);
          return this.addAnimator(n), n;
        },
      }),
        i.mixin(l, a);
      var u = l;
      t.exports = u;
    },
    MqEG: function(t, e, n) {
      var i = n('bYtY'),
        r = n('fc+c'),
        a = n('72pK'),
        o = n('VXYp'),
        s = i.bind,
        l = r.extend({
          type: 'dataZoom.inside',
          init: function(t, e) {
            this._range;
          },
          render: function(t, e, n, r) {
            l.superApply(this, 'render', arguments),
              (this._range = t.getPercentRange()),
              i.each(
                this.getTargetCoordInfo(),
                function(e, r) {
                  var a = i.map(e, function(t) {
                    return o.generateCoordId(t.model);
                  });
                  i.each(
                    e,
                    function(e) {
                      var l = e.model,
                        c = {};
                      i.each(
                        ['pan', 'zoom', 'scrollMove'],
                        function(t) {
                          c[t] = s(u[t], this, e, r);
                        },
                        this,
                      ),
                        o.register(n, {
                          coordId: o.generateCoordId(l),
                          allCoordIds: a,
                          containsPoint: function(t, e, n) {
                            return l.coordinateSystem.containPoint([e, n]);
                          },
                          dataZoomId: t.id,
                          dataZoomModel: t,
                          getRange: c,
                        });
                    },
                    this,
                  );
                },
                this,
              );
          },
          dispose: function() {
            o.unregister(this.api, this.dataZoomModel.id),
              l.superApply(this, 'dispose', arguments),
              (this._range = null);
          },
        }),
        u = {
          zoom: function(t, e, n, i) {
            var r = this._range,
              o = r.slice(),
              s = t.axisModels[0];
            if (s) {
              var l = h[e](null, [i.originX, i.originY], s, n, t),
                u =
                  ((l.signal > 0
                    ? l.pixelStart + l.pixelLength - l.pixel
                    : l.pixel - l.pixelStart) /
                    l.pixelLength) *
                    (o[1] - o[0]) +
                  o[0],
                c = Math.max(1 / i.scale, 0);
              (o[0] = (o[0] - u) * c + u), (o[1] = (o[1] - u) * c + u);
              var d = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
              return (
                a(0, o, [0, 100], 0, d.minSpan, d.maxSpan),
                (this._range = o),
                r[0] !== o[0] || r[1] !== o[1] ? o : void 0
              );
            }
          },
          pan: c(function(t, e, n, i, r, a) {
            var o = h[i]([a.oldX, a.oldY], [a.newX, a.newY], e, r, n);
            return (o.signal * (t[1] - t[0]) * o.pixel) / o.pixelLength;
          }),
          scrollMove: c(function(t, e, n, i, r, a) {
            var o = h[i]([0, 0], [a.scrollDelta, a.scrollDelta], e, r, n);
            return o.signal * (t[1] - t[0]) * a.scrollDelta;
          }),
        };
      function c(t) {
        return function(e, n, i, r) {
          var o = this._range,
            s = o.slice(),
            l = e.axisModels[0];
          if (l) {
            var u = t(s, l, e, n, i, r);
            return (
              a(u, s, [0, 100], 'all'),
              (this._range = s),
              o[0] !== s[0] || o[1] !== s[1] ? s : void 0
            );
          }
        };
      }
      var h = {
          grid: function(t, e, n, i, r) {
            var a = n.axis,
              o = {},
              s = r.model.coordinateSystem.getRect();
            return (
              (t = t || [0, 0]),
              'x' === a.dim
                ? ((o.pixel = e[0] - t[0]),
                  (o.pixelLength = s.width),
                  (o.pixelStart = s.x),
                  (o.signal = a.inverse ? 1 : -1))
                : ((o.pixel = e[1] - t[1]),
                  (o.pixelLength = s.height),
                  (o.pixelStart = s.y),
                  (o.signal = a.inverse ? -1 : 1)),
              o
            );
          },
          polar: function(t, e, n, i, r) {
            var a = n.axis,
              o = {},
              s = r.model.coordinateSystem,
              l = s.getRadiusAxis().getExtent(),
              u = s.getAngleAxis().getExtent();
            return (
              (t = t ? s.pointToCoord(t) : [0, 0]),
              (e = s.pointToCoord(e)),
              'radiusAxis' === n.mainType
                ? ((o.pixel = e[0] - t[0]),
                  (o.pixelLength = l[1] - l[0]),
                  (o.pixelStart = l[0]),
                  (o.signal = a.inverse ? 1 : -1))
                : ((o.pixel = e[1] - t[1]),
                  (o.pixelLength = u[1] - u[0]),
                  (o.pixelStart = u[0]),
                  (o.signal = a.inverse ? -1 : 1)),
              o
            );
          },
          singleAxis: function(t, e, n, i, r) {
            var a = n.axis,
              o = r.model.coordinateSystem.getRect(),
              s = {};
            return (
              (t = t || [0, 0]),
              'horizontal' === a.orient
                ? ((s.pixel = e[0] - t[0]),
                  (s.pixelLength = o.width),
                  (s.pixelStart = o.x),
                  (s.signal = a.inverse ? 1 : -1))
                : ((s.pixel = e[1] - t[1]),
                  (s.pixelLength = o.height),
                  (s.pixelStart = o.y),
                  (s.signal = a.inverse ? -1 : 1)),
              s
            );
          },
        },
        d = l;
      t.exports = d;
    },
    MwEJ: function(t, e, n) {
      var i = n('bYtY'),
        r = n('YXkt'),
        a = n('sdST'),
        o = n('k9D9'),
        s = o.SOURCE_FORMAT_ORIGINAL,
        l = n('L0Ub'),
        u = l.getDimensionTypeByAxis,
        c = n('4NO4'),
        h = c.getDataItemValue,
        d = n('IDmD'),
        f = n('i38C'),
        p = f.getCoordSysInfoBySeries,
        g = n('7G+c'),
        v = n('7hqr'),
        m = v.enableDataStack,
        y = n('D5nY'),
        x = y.makeSeriesEncodeForAxisCoordSys;
      function _(t, e, n) {
        (n = n || {}), g.isInstance(t) || (t = g.seriesDataToSource(t));
        var o,
          s = e.get('coordinateSystem'),
          l = d.get(s),
          c = p(e);
        c &&
          (o = i.map(c.coordSysDims, function(t) {
            var e = { name: t },
              n = c.axisMap.get(t);
            if (n) {
              var i = n.get('type');
              e.type = u(i);
            }
            return e;
          })),
          o ||
            (o = (l && (l.getDimensionsInfo ? l.getDimensionsInfo() : l.dimensions.slice())) || [
              'x',
              'y',
            ]);
        var h,
          f,
          v = a(t, {
            coordDimensions: o,
            generateCoord: n.generateCoord,
            encodeDefaulter: n.useEncodeDefaulter ? i.curry(x, o, e) : null,
          });
        c &&
          i.each(v, function(t, e) {
            var n = t.coordDim,
              i = c.categoryAxisMap.get(n);
            i && (null == h && (h = e), (t.ordinalMeta = i.getOrdinalMeta())),
              null != t.otherDims.itemName && (f = !0);
          }),
          f || null == h || (v[h].otherDims.itemName = 0);
        var y = m(e, v),
          _ = new r(v, e);
        _.setCalculationInfo(y);
        var w =
          null != h && b(t)
            ? function(t, e, n, i) {
                return i === h ? n : this.defaultDimValueGetter(t, e, n, i);
              }
            : null;
        return (_.hasItemOption = !1), _.initData(t, null, w), _;
      }
      function b(t) {
        if (t.sourceFormat === s) {
          var e = w(t.data || []);
          return null != e && !i.isArray(h(e));
        }
      }
      function w(t) {
        var e = 0;
        while (e < t.length && null == t[e]) e++;
        return t[e];
      }
      var S = _;
      t.exports = S;
    },
    N5BQ: function(t, e, n) {
      var i = n('OlYY'),
        r = i.extend({
          type: 'dataZoom.slider',
          layoutMode: 'box',
          defaultOption: {
            show: !0,
            right: 'ph',
            top: 'ph',
            width: 'ph',
            height: 'ph',
            left: null,
            bottom: null,
            backgroundColor: 'rgba(47,69,84,0)',
            dataBackground: {
              lineStyle: { color: '#2f4554', width: 0.5, opacity: 0.3 },
              areaStyle: { color: 'rgba(47,69,84,0.3)', opacity: 0.3 },
            },
            borderColor: '#ddd',
            fillerColor: 'rgba(167,183,204,0.4)',
            handleIcon:
              'M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z',
            handleSize: '100%',
            handleStyle: { color: '#a7b7cc' },
            labelPrecision: null,
            labelFormatter: null,
            showDetail: !0,
            showDataShadow: 'auto',
            realtime: !0,
            zoomLock: !1,
            textStyle: { color: '#333' },
          },
        }),
        a = r;
      t.exports = a;
    },
    NC18: function(t, e, n) {
      var i = n('y+Vt'),
        r = n('IMiH'),
        a = n('7oTu'),
        o = Math.sqrt,
        s = Math.sin,
        l = Math.cos,
        u = Math.PI,
        c = function(t) {
          return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
        },
        h = function(t, e) {
          return (t[0] * e[0] + t[1] * e[1]) / (c(t) * c(e));
        },
        d = function(t, e) {
          return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(h(t, e));
        };
      function f(t, e, n, i, r, a, c, f, p, g, v) {
        var m = p * (u / 180),
          y = (l(m) * (t - n)) / 2 + (s(m) * (e - i)) / 2,
          x = (-1 * s(m) * (t - n)) / 2 + (l(m) * (e - i)) / 2,
          _ = (y * y) / (c * c) + (x * x) / (f * f);
        _ > 1 && ((c *= o(_)), (f *= o(_)));
        var b =
            (r === a ? -1 : 1) *
              o(
                (c * c * (f * f) - c * c * (x * x) - f * f * (y * y)) /
                  (c * c * (x * x) + f * f * (y * y)),
              ) || 0,
          w = (b * c * x) / f,
          S = (b * -f * y) / c,
          M = (t + n) / 2 + l(m) * w - s(m) * S,
          T = (e + i) / 2 + s(m) * w + l(m) * S,
          C = d([1, 0], [(y - w) / c, (x - S) / f]),
          I = [(y - w) / c, (x - S) / f],
          k = [(-1 * y - w) / c, (-1 * x - S) / f],
          A = d(I, k);
        h(I, k) <= -1 && (A = u),
          h(I, k) >= 1 && (A = 0),
          0 === a && A > 0 && (A -= 2 * u),
          1 === a && A < 0 && (A += 2 * u),
          v.addData(g, M, T, c, f, C, A, m, a);
      }
      var p = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
        g = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
      function v(t) {
        if (!t) return new r();
        for (
          var e, n = 0, i = 0, a = n, o = i, s = new r(), l = r.CMD, u = t.match(p), c = 0;
          c < u.length;
          c++
        ) {
          for (
            var h, d = u[c], v = d.charAt(0), m = d.match(g) || [], y = m.length, x = 0;
            x < y;
            x++
          )
            m[x] = parseFloat(m[x]);
          var _ = 0;
          while (_ < y) {
            var b,
              w,
              S,
              M,
              T,
              C,
              I,
              k = n,
              A = i;
            switch (v) {
              case 'l':
                (n += m[_++]), (i += m[_++]), (h = l.L), s.addData(h, n, i);
                break;
              case 'L':
                (n = m[_++]), (i = m[_++]), (h = l.L), s.addData(h, n, i);
                break;
              case 'm':
                (n += m[_++]),
                  (i += m[_++]),
                  (h = l.M),
                  s.addData(h, n, i),
                  (a = n),
                  (o = i),
                  (v = 'l');
                break;
              case 'M':
                (n = m[_++]),
                  (i = m[_++]),
                  (h = l.M),
                  s.addData(h, n, i),
                  (a = n),
                  (o = i),
                  (v = 'L');
                break;
              case 'h':
                (n += m[_++]), (h = l.L), s.addData(h, n, i);
                break;
              case 'H':
                (n = m[_++]), (h = l.L), s.addData(h, n, i);
                break;
              case 'v':
                (i += m[_++]), (h = l.L), s.addData(h, n, i);
                break;
              case 'V':
                (i = m[_++]), (h = l.L), s.addData(h, n, i);
                break;
              case 'C':
                (h = l.C),
                  s.addData(h, m[_++], m[_++], m[_++], m[_++], m[_++], m[_++]),
                  (n = m[_ - 2]),
                  (i = m[_ - 1]);
                break;
              case 'c':
                (h = l.C),
                  s.addData(
                    h,
                    m[_++] + n,
                    m[_++] + i,
                    m[_++] + n,
                    m[_++] + i,
                    m[_++] + n,
                    m[_++] + i,
                  ),
                  (n += m[_ - 2]),
                  (i += m[_ - 1]);
                break;
              case 'S':
                (b = n), (w = i);
                var D = s.len(),
                  O = s.data;
                e === l.C && ((b += n - O[D - 4]), (w += i - O[D - 3])),
                  (h = l.C),
                  (k = m[_++]),
                  (A = m[_++]),
                  (n = m[_++]),
                  (i = m[_++]),
                  s.addData(h, b, w, k, A, n, i);
                break;
              case 's':
                (b = n), (w = i);
                (D = s.len()), (O = s.data);
                e === l.C && ((b += n - O[D - 4]), (w += i - O[D - 3])),
                  (h = l.C),
                  (k = n + m[_++]),
                  (A = i + m[_++]),
                  (n += m[_++]),
                  (i += m[_++]),
                  s.addData(h, b, w, k, A, n, i);
                break;
              case 'Q':
                (k = m[_++]),
                  (A = m[_++]),
                  (n = m[_++]),
                  (i = m[_++]),
                  (h = l.Q),
                  s.addData(h, k, A, n, i);
                break;
              case 'q':
                (k = m[_++] + n),
                  (A = m[_++] + i),
                  (n += m[_++]),
                  (i += m[_++]),
                  (h = l.Q),
                  s.addData(h, k, A, n, i);
                break;
              case 'T':
                (b = n), (w = i);
                (D = s.len()), (O = s.data);
                e === l.Q && ((b += n - O[D - 4]), (w += i - O[D - 3])),
                  (n = m[_++]),
                  (i = m[_++]),
                  (h = l.Q),
                  s.addData(h, b, w, n, i);
                break;
              case 't':
                (b = n), (w = i);
                (D = s.len()), (O = s.data);
                e === l.Q && ((b += n - O[D - 4]), (w += i - O[D - 3])),
                  (n += m[_++]),
                  (i += m[_++]),
                  (h = l.Q),
                  s.addData(h, b, w, n, i);
                break;
              case 'A':
                (S = m[_++]),
                  (M = m[_++]),
                  (T = m[_++]),
                  (C = m[_++]),
                  (I = m[_++]),
                  (k = n),
                  (A = i),
                  (n = m[_++]),
                  (i = m[_++]),
                  (h = l.A),
                  f(k, A, n, i, C, I, S, M, T, h, s);
                break;
              case 'a':
                (S = m[_++]),
                  (M = m[_++]),
                  (T = m[_++]),
                  (C = m[_++]),
                  (I = m[_++]),
                  (k = n),
                  (A = i),
                  (n += m[_++]),
                  (i += m[_++]),
                  (h = l.A),
                  f(k, A, n, i, C, I, S, M, T, h, s);
                break;
            }
          }
          ('z' !== v && 'Z' !== v) || ((h = l.Z), s.addData(h), (n = a), (i = o)), (e = h);
        }
        return s.toStatic(), s;
      }
      function m(t, e) {
        var n = v(t);
        return (
          (e = e || {}),
          (e.buildPath = function(t) {
            if (t.setData) {
              t.setData(n.data);
              var e = t.getContext();
              e && t.rebuildPath(e);
            } else {
              e = t;
              n.rebuildPath(e);
            }
          }),
          (e.applyTransform = function(t) {
            a(n, t), this.dirty(!0);
          }),
          e
        );
      }
      function y(t, e) {
        return new i(m(t, e));
      }
      function x(t, e) {
        return i.extend(m(t, e));
      }
      function _(t, e) {
        for (var n = [], r = t.length, a = 0; a < r; a++) {
          var o = t[a];
          o.path || o.createPathProxy(),
            o.__dirtyPath && o.buildPath(o.path, o.shape, !0),
            n.push(o.path);
        }
        var s = new i(e);
        return (
          s.createPathProxy(),
          (s.buildPath = function(t) {
            t.appendPath(n);
            var e = t.getContext();
            e && t.rebuildPath(e);
          }),
          s
        );
      }
      (e.createFromString = y), (e.extendFromString = x), (e.mergePath = _);
    },
    OELB: function(t, e, n) {
      var i = n('bYtY'),
        r = 1e-4;
      function a(t) {
        return t.replace(/^\s+|\s+$/g, '');
      }
      function o(t, e, n, i) {
        var r = e[1] - e[0],
          a = n[1] - n[0];
        if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
        if (i)
          if (r > 0) {
            if (t <= e[0]) return n[0];
            if (t >= e[1]) return n[1];
          } else {
            if (t >= e[0]) return n[0];
            if (t <= e[1]) return n[1];
          }
        else {
          if (t === e[0]) return n[0];
          if (t === e[1]) return n[1];
        }
        return ((t - e[0]) / r) * a + n[0];
      }
      function s(t, e) {
        switch (t) {
          case 'center':
          case 'middle':
            t = '50%';
            break;
          case 'left':
          case 'top':
            t = '0%';
            break;
          case 'right':
          case 'bottom':
            t = '100%';
            break;
        }
        return 'string' === typeof t
          ? a(t).match(/%$/)
            ? (parseFloat(t) / 100) * e
            : parseFloat(t)
          : null == t
          ? NaN
          : +t;
      }
      function l(t, e, n) {
        return (
          null == e && (e = 10),
          (e = Math.min(Math.max(0, e), 20)),
          (t = (+t).toFixed(e)),
          n ? t : +t
        );
      }
      function u(t) {
        return (
          t.sort(function(t, e) {
            return t - e;
          }),
          t
        );
      }
      function c(t) {
        if (((t = +t), isNaN(t))) return 0;
        var e = 1,
          n = 0;
        while (Math.round(t * e) / e !== t) (e *= 10), n++;
        return n;
      }
      function h(t) {
        var e = t.toString(),
          n = e.indexOf('e');
        if (n > 0) {
          var i = +e.slice(n + 1);
          return i < 0 ? -i : 0;
        }
        var r = e.indexOf('.');
        return r < 0 ? 0 : e.length - 1 - r;
      }
      function d(t, e) {
        var n = Math.log,
          i = Math.LN10,
          r = Math.floor(n(t[1] - t[0]) / i),
          a = Math.round(n(Math.abs(e[1] - e[0])) / i),
          o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20;
      }
      function f(t, e, n) {
        if (!t[e]) return 0;
        var r = i.reduce(
          t,
          function(t, e) {
            return t + (isNaN(e) ? 0 : e);
          },
          0,
        );
        if (0 === r) return 0;
        var a = Math.pow(10, n),
          o = i.map(t, function(t) {
            return ((isNaN(t) ? 0 : t) / r) * a * 100;
          }),
          s = 100 * a,
          l = i.map(o, function(t) {
            return Math.floor(t);
          }),
          u = i.reduce(
            l,
            function(t, e) {
              return t + e;
            },
            0,
          ),
          c = i.map(o, function(t, e) {
            return t - l[e];
          });
        while (u < s) {
          for (var h = Number.NEGATIVE_INFINITY, d = null, f = 0, p = c.length; f < p; ++f)
            c[f] > h && ((h = c[f]), (d = f));
          ++l[d], (c[d] = 0), ++u;
        }
        return l[e] / a;
      }
      var p = 9007199254740991;
      function g(t) {
        var e = 2 * Math.PI;
        return ((t % e) + e) % e;
      }
      function v(t) {
        return t > -r && t < r;
      }
      var m = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
      function y(t) {
        if (t instanceof Date) return t;
        if ('string' === typeof t) {
          var e = m.exec(t);
          if (!e) return new Date(NaN);
          if (e[8]) {
            var n = +e[4] || 0;
            return (
              'Z' !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)),
              new Date(
                Date.UTC(
                  +e[1],
                  +(e[2] || 1) - 1,
                  +e[3] || 1,
                  n,
                  +(e[5] || 0),
                  +e[6] || 0,
                  +e[7] || 0,
                ),
              )
            );
          }
          return new Date(
            +e[1],
            +(e[2] || 1) - 1,
            +e[3] || 1,
            +e[4] || 0,
            +(e[5] || 0),
            +e[6] || 0,
            +e[7] || 0,
          );
        }
        return null == t ? new Date(NaN) : new Date(Math.round(t));
      }
      function x(t) {
        return Math.pow(10, _(t));
      }
      function _(t) {
        if (0 === t) return 0;
        var e = Math.floor(Math.log(t) / Math.LN10);
        return t / Math.pow(10, e) >= 10 && e++, e;
      }
      function b(t, e) {
        var n,
          i = _(t),
          r = Math.pow(10, i),
          a = t / r;
        return (
          (n = e
            ? a < 1.5
              ? 1
              : a < 2.5
              ? 2
              : a < 4
              ? 3
              : a < 7
              ? 5
              : 10
            : a < 1
            ? 1
            : a < 2
            ? 2
            : a < 3
            ? 3
            : a < 5
            ? 5
            : 10),
          (t = n * r),
          i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
        );
      }
      function w(t, e) {
        var n = (t.length - 1) * e + 1,
          i = Math.floor(n),
          r = +t[i - 1],
          a = n - i;
        return a ? r + a * (t[i] - r) : r;
      }
      function S(t) {
        t.sort(function(t, e) {
          return s(t, e, 0) ? -1 : 1;
        });
        for (var e = -1 / 0, n = 1, i = 0; i < t.length; ) {
          for (var r = t[i].interval, a = t[i].close, o = 0; o < 2; o++)
            r[o] <= e && ((r[o] = e), (a[o] = o ? 1 : 1 - n)), (e = r[o]), (n = a[o]);
          r[0] === r[1] && a[0] * a[1] !== 1 ? t.splice(i, 1) : i++;
        }
        return t;
        function s(t, e, n) {
          return (
            t.interval[n] < e.interval[n] ||
            (t.interval[n] === e.interval[n] &&
              (t.close[n] - e.close[n] === (n ? -1 : 1) || (!n && s(t, e, 1))))
          );
        }
      }
      function M(t) {
        return t - parseFloat(t) >= 0;
      }
      (e.linearMap = o),
        (e.parsePercent = s),
        (e.round = l),
        (e.asc = u),
        (e.getPrecision = c),
        (e.getPrecisionSafe = h),
        (e.getPixelPrecision = d),
        (e.getPercentWithPrecision = f),
        (e.MAX_SAFE_INTEGER = p),
        (e.remRadian = g),
        (e.isRadianAroundZero = v),
        (e.parseDate = y),
        (e.quantity = x),
        (e.quantityExponent = _),
        (e.nice = b),
        (e.quantile = w),
        (e.reformIntervals = S),
        (e.isNumeric = M);
    },
    OKJ2: function(t, e, n) {
      var i = n('KxfA'),
        r = i.retrieveRawValue,
        a = n('7aKB'),
        o = a.getTooltipMarker,
        s = a.formatTpl,
        l = n('4NO4'),
        u = l.getTooltipRenderMode,
        c = /\{@(.+?)\}/g,
        h = {
          getDataParams: function(t, e) {
            var n = this.getData(e),
              i = this.getRawValue(t, e),
              r = n.getRawIndex(t),
              a = n.getName(t),
              s = n.getRawDataItem(t),
              l = n.getItemVisual(t, 'color'),
              c = n.getItemVisual(t, 'borderColor'),
              h = this.ecModel.getComponent('tooltip'),
              d = h && h.get('renderMode'),
              f = u(d),
              p = this.mainType,
              g = 'series' === p,
              v = n.userOutput;
            return {
              componentType: p,
              componentSubType: this.subType,
              componentIndex: this.componentIndex,
              seriesType: g ? this.subType : null,
              seriesIndex: this.seriesIndex,
              seriesId: g ? this.id : null,
              seriesName: g ? this.name : null,
              name: a,
              dataIndex: r,
              data: s,
              dataType: e,
              value: i,
              color: l,
              borderColor: c,
              dimensionNames: v ? v.dimensionNames : null,
              encode: v ? v.encode : null,
              marker: o({ color: l, renderMode: f }),
              $vars: ['seriesName', 'name', 'value'],
            };
          },
          getFormattedLabel: function(t, e, n, i, a) {
            e = e || 'normal';
            var o = this.getData(n),
              l = o.getItemModel(t),
              u = this.getDataParams(t, n);
            null != i && u.value instanceof Array && (u.value = u.value[i]);
            var h = l.get(
              'normal' === e ? [a || 'label', 'formatter'] : [e, a || 'label', 'formatter'],
            );
            if ('function' === typeof h) return (u.status = e), (u.dimensionIndex = i), h(u);
            if ('string' === typeof h) {
              var d = s(h, u);
              return d.replace(c, function(e, n) {
                var i = n.length;
                return (
                  '[' === n.charAt(0) && ']' === n.charAt(i - 1) && (n = +n.slice(1, i - 1)),
                  r(o, t, n)
                );
              });
            }
          },
          getRawValue: function(t, e) {
            return r(this.getData(e), t);
          },
          formatTooltip: function() {},
        };
      t.exports = h;
    },
    OQFs: function(t, e, n) {
      var i = n('KCsZ'),
        r = i([
          ['lineWidth', 'width'],
          ['stroke', 'color'],
          ['opacity'],
          ['shadowBlur'],
          ['shadowOffsetX'],
          ['shadowOffsetY'],
          ['shadowColor'],
        ]),
        a = {
          getLineStyle: function(t) {
            var e = r(this, t);
            return (e.lineDash = this.getLineDash(e.lineWidth)), e;
          },
          getLineDash: function(t) {
            null == t && (t = 1);
            var e = this.get('type'),
              n = Math.max(t, 2),
              i = 4 * t;
            return 'solid' !== e && null != e && ('dashed' === e ? [i, i] : [n, n]);
          },
        };
      t.exports = a;
    },
    OS9S: function(t, e, n) {
      var i = n('bYtY'),
        r = i.inherits,
        a = n('Gev7'),
        o = n('mFDi');
      function s(t) {
        a.call(this, t),
          (this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          (this.notClear = !0);
      }
      (s.prototype.incremental = !0),
        (s.prototype.clearDisplaybles = function() {
          (this._displayables = []),
            (this._temporaryDisplayables = []),
            (this._cursor = 0),
            this.dirty(),
            (this.notClear = !1);
        }),
        (s.prototype.addDisplayable = function(t, e) {
          e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
        }),
        (s.prototype.addDisplayables = function(t, e) {
          e = e || !1;
          for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
        }),
        (s.prototype.eachPendingDisplayable = function(t) {
          for (var e = this._cursor; e < this._displayables.length; e++)
            t && t(this._displayables[e]);
          for (e = 0; e < this._temporaryDisplayables.length; e++)
            t && t(this._temporaryDisplayables[e]);
        }),
        (s.prototype.update = function() {
          this.updateTransform();
          for (var t = this._cursor; t < this._displayables.length; t++) {
            var e = this._displayables[t];
            (e.parent = this), e.update(), (e.parent = null);
          }
          for (t = 0; t < this._temporaryDisplayables.length; t++) {
            e = this._temporaryDisplayables[t];
            (e.parent = this), e.update(), (e.parent = null);
          }
        }),
        (s.prototype.brush = function(t, e) {
          for (var n = this._cursor; n < this._displayables.length; n++) {
            var i = this._displayables[n];
            i.beforeBrush && i.beforeBrush(t),
              i.brush(t, n === this._cursor ? null : this._displayables[n - 1]),
              i.afterBrush && i.afterBrush(t);
          }
          this._cursor = n;
          for (n = 0; n < this._temporaryDisplayables.length; n++) {
            i = this._temporaryDisplayables[n];
            i.beforeBrush && i.beforeBrush(t),
              i.brush(t, 0 === n ? null : this._temporaryDisplayables[n - 1]),
              i.afterBrush && i.afterBrush(t);
          }
          (this._temporaryDisplayables = []), (this.notClear = !0);
        });
      var l = [];
      (s.prototype.getBoundingRect = function() {
        if (!this._rect) {
          for (
            var t = new o(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0;
            e < this._displayables.length;
            e++
          ) {
            var n = this._displayables[e],
              i = n.getBoundingRect().clone();
            n.needLocalTransform() && i.applyTransform(n.getLocalTransform(l)), t.union(i);
          }
          this._rect = t;
        }
        return this._rect;
      }),
        (s.prototype.contain = function(t, e) {
          var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect();
          if (i.contain(n[0], n[1]))
            for (var r = 0; r < this._displayables.length; r++) {
              var a = this._displayables[r];
              if (a.contain(t, e)) return !0;
            }
          return !1;
        }),
        r(s, a);
      var u = s;
      t.exports = u;
    },
    OlYY: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('ProS')),
        a = n('bYtY'),
        o = n('ItGF'),
        s = n('4NO4'),
        l = n('UOVi'),
        u = n('zDms'),
        c = a.each,
        h = l.eachAxisDim,
        d = r.extendComponentModel({
          type: 'dataZoom',
          dependencies: [
            'xAxis',
            'yAxis',
            'zAxis',
            'radiusAxis',
            'angleAxis',
            'singleAxis',
            'series',
          ],
          defaultOption: {
            zlevel: 0,
            z: 4,
            orient: null,
            xAxisIndex: null,
            yAxisIndex: null,
            filterMode: 'filter',
            throttle: null,
            start: 0,
            end: 100,
            startValue: null,
            endValue: null,
            minSpan: null,
            maxSpan: null,
            minValueSpan: null,
            maxValueSpan: null,
            rangeMode: null,
          },
          init: function(t, e, n) {
            (this._dataIntervalByAxis = {}),
              (this._dataInfo = {}),
              (this._axisProxies = {}),
              this.textStyleModel,
              (this._autoThrottle = !0),
              (this._rangePropMode = ['percent', 'percent']);
            var i = f(t);
            (this.settledOption = i), this.mergeDefaultAndTheme(t, n), this.doInit(i);
          },
          mergeOption: function(t) {
            var e = f(t);
            a.merge(this.option, t, !0), a.merge(this.settledOption, e, !0), this.doInit(e);
          },
          doInit: function(t) {
            var e = this.option;
            o.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), p(this, t);
            var n = this.settledOption;
            c(
              [
                ['start', 'startValue'],
                ['end', 'endValue'],
              ],
              function(t, i) {
                'value' === this._rangePropMode[i] && (e[t[0]] = n[t[0]] = null);
              },
              this,
            ),
              (this.textStyleModel = this.getModel('textStyle')),
              this._resetTarget(),
              this._giveAxisProxies();
          },
          _giveAxisProxies: function() {
            var t = this._axisProxies;
            this.eachTargetAxis(function(e, n, i, r) {
              var a = this.dependentModels[e.axis][n],
                o = a.__dzAxisProxy || (a.__dzAxisProxy = new u(e.name, n, this, r));
              t[e.name + '_' + n] = o;
            }, this);
          },
          _resetTarget: function() {
            var t = this.option,
              e = this._judgeAutoMode();
            h(function(e) {
              var n = e.axisIndex;
              t[n] = s.normalizeToArray(t[n]);
            }, this),
              'axisIndex' === e
                ? this._autoSetAxisIndex()
                : 'orient' === e && this._autoSetOrient();
          },
          _judgeAutoMode: function() {
            var t = this.option,
              e = !1;
            h(function(n) {
              null != t[n.axisIndex] && (e = !0);
            }, this);
            var n = t.orient;
            return null == n && e
              ? 'orient'
              : e
              ? void 0
              : (null == n && (t.orient = 'horizontal'), 'axisIndex');
          },
          _autoSetAxisIndex: function() {
            var t = !0,
              e = this.get('orient', !0),
              n = this.option,
              i = this.dependentModels;
            if (t) {
              var r = 'vertical' === e ? 'y' : 'x';
              i[r + 'Axis'].length
                ? ((n[r + 'AxisIndex'] = [0]), (t = !1))
                : c(i.singleAxis, function(i) {
                    t &&
                      i.get('orient', !0) === e &&
                      ((n.singleAxisIndex = [i.componentIndex]), (t = !1));
                  });
            }
            t &&
              h(function(e) {
                if (t) {
                  var i = [],
                    r = this.dependentModels[e.axis];
                  if (r.length && !i.length)
                    for (var a = 0, o = r.length; a < o; a++)
                      'category' === r[a].get('type') && i.push(a);
                  (n[e.axisIndex] = i), i.length && (t = !1);
                }
              }, this),
              t &&
                this.ecModel.eachSeries(function(t) {
                  this._isSeriesHasAllAxesTypeOf(t, 'value') &&
                    h(function(e) {
                      var i = n[e.axisIndex],
                        r = t.get(e.axisIndex),
                        o = t.get(e.axisId),
                        s = t.ecModel.queryComponents({ mainType: e.axis, index: r, id: o })[0];
                      (r = s.componentIndex), a.indexOf(i, r) < 0 && i.push(r);
                    });
                }, this);
          },
          _autoSetOrient: function() {
            var t;
            this.eachTargetAxis(function(e) {
              !t && (t = e.name);
            }, this),
              (this.option.orient = 'y' === t ? 'vertical' : 'horizontal');
          },
          _isSeriesHasAllAxesTypeOf: function(t, e) {
            var n = !0;
            return (
              h(function(i) {
                var r = t.get(i.axisIndex),
                  a = this.dependentModels[i.axis][r];
                (a && a.get('type') === e) || (n = !1);
              }, this),
              n
            );
          },
          _setDefaultThrottle: function(t) {
            if ((t.hasOwnProperty('throttle') && (this._autoThrottle = !1), this._autoThrottle)) {
              var e = this.ecModel.option;
              this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20;
            }
          },
          getFirstTargetAxisModel: function() {
            var t;
            return (
              h(function(e) {
                if (null == t) {
                  var n = this.get(e.axisIndex);
                  n.length && (t = this.dependentModels[e.axis][n[0]]);
                }
              }, this),
              t
            );
          },
          eachTargetAxis: function(t, e) {
            var n = this.ecModel;
            h(function(i) {
              c(
                this.get(i.axisIndex),
                function(r) {
                  t.call(e, i, r, this, n);
                },
                this,
              );
            }, this);
          },
          getAxisProxy: function(t, e) {
            return this._axisProxies[t + '_' + e];
          },
          getAxisModel: function(t, e) {
            var n = this.getAxisProxy(t, e);
            return n && n.getAxisModel();
          },
          setRawRange: function(t) {
            var e = this.option,
              n = this.settledOption;
            c(
              [
                ['start', 'startValue'],
                ['end', 'endValue'],
              ],
              function(i) {
                (null == t[i[0]] && null == t[i[1]]) ||
                  ((e[i[0]] = n[i[0]] = t[i[0]]), (e[i[1]] = n[i[1]] = t[i[1]]));
              },
              this,
            ),
              p(this, t);
          },
          setCalculatedRange: function(t) {
            var e = this.option;
            c(['start', 'startValue', 'end', 'endValue'], function(n) {
              e[n] = t[n];
            });
          },
          getPercentRange: function() {
            var t = this.findRepresentativeAxisProxy();
            if (t) return t.getDataPercentWindow();
          },
          getValueRange: function(t, e) {
            if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
            var n = this.findRepresentativeAxisProxy();
            return n ? n.getDataValueWindow() : void 0;
          },
          findRepresentativeAxisProxy: function(t) {
            if (t) return t.__dzAxisProxy;
            var e = this._axisProxies;
            for (var n in e) if (e.hasOwnProperty(n) && e[n].hostedBy(this)) return e[n];
            for (var n in e) if (e.hasOwnProperty(n) && !e[n].hostedBy(this)) return e[n];
          },
          getRangePropMode: function() {
            return this._rangePropMode.slice();
          },
        });
      function f(t) {
        var e = {};
        return (
          c(['start', 'end', 'startValue', 'endValue', 'throttle'], function(n) {
            t.hasOwnProperty(n) && (e[n] = t[n]);
          }),
          e
        );
      }
      function p(t, e) {
        var n = t._rangePropMode,
          i = t.get('rangeMode');
        c(
          [
            ['start', 'startValue'],
            ['end', 'endValue'],
          ],
          function(t, r) {
            var a = null != e[t[0]],
              o = null != e[t[1]];
            a && !o
              ? (n[r] = 'percent')
              : !a && o
              ? (n[r] = 'value')
              : i
              ? (n[r] = i[r])
              : a && (n[r] = 'percent');
          },
        );
      }
      var g = d;
      t.exports = g;
    },
    ProS: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('aX58')),
        a = n('bYtY'),
        o = n('Qe9p'),
        s = n('ItGF'),
        l = n('BPZU'),
        u = n('H6uX'),
        c = n('fmMI'),
        h = n('hD7B'),
        d = n('IDmD'),
        f = n('ypgQ'),
        p = n('+wW9'),
        g = n('0V0F'),
        v = n('bLfw'),
        m = n('T4UG'),
        y = n('sS/r'),
        x = n('6Ic6'),
        _ = n('IwbS'),
        b = n('4NO4'),
        w = n('iLNv'),
        S = w.throttle,
        M = n('/WM3'),
        T = n('uAnK'),
        C = n('mYwL'),
        I = n('af/B'),
        k = n('xTNl'),
        A = n('8hn6');
      n('A1Ka');
      var D = n('7DRL'),
        O = a.assert,
        P = a.each,
        E = a.isFunction,
        L = a.isObject,
        R = v.parseClassType,
        N = '4.9.0',
        z = { zrender: '4.3.2' },
        B = 1,
        j = 1e3,
        F = 800,
        Y = 900,
        V = 5e3,
        H = 1e3,
        W = 1100,
        G = 2e3,
        U = 3e3,
        X = 3500,
        Z = 4e3,
        q = 5e3,
        K = {
          PROCESSOR: { FILTER: j, SERIES_FILTER: F, STATISTIC: V },
          VISUAL: {
            LAYOUT: H,
            PROGRESSIVE_LAYOUT: W,
            GLOBAL: G,
            CHART: U,
            POST_CHART_LAYOUT: X,
            COMPONENT: Z,
            BRUSH: q,
          },
        },
        Q = '__flagInMainProcess',
        J = '__optionUpdated',
        $ = /^[a-zA-Z0-9_]+$/;
      function tt(t, e) {
        return function(n, i, r) {
          e || !this._disposed
            ? ((n = n && n.toLowerCase()), u.prototype[t].call(this, n, i, r))
            : _t(this.id);
        };
      }
      function et() {
        u.call(this);
      }
      function nt(t, e, n) {
        (n = n || {}), 'string' === typeof e && (e = Pt[e]), this.id, this.group, (this._dom = t);
        var i = 'canvas',
          o = (this._zr = r.init(t, {
            renderer: n.renderer || i,
            devicePixelRatio: n.devicePixelRatio,
            width: n.width,
            height: n.height,
          }));
        this._throttledZrFlush = S(a.bind(o.flush, o), 17);
        e = a.clone(e);
        e && p(e, !0),
          (this._theme = e),
          (this._chartsViews = []),
          (this._chartsMap = {}),
          (this._componentsViews = []),
          (this._componentsMap = {}),
          (this._coordSysMgr = new d());
        var s = (this._api = Mt(this));
        function c(t, e) {
          return t.__prio - e.__prio;
        }
        l(Ot, c),
          l(kt, c),
          (this._scheduler = new I(this, s, kt, Ot)),
          u.call(this, (this._ecEventProcessor = new Tt())),
          (this._messageCenter = new et()),
          this._initEvents(),
          (this.resize = a.bind(this.resize, this)),
          (this._pendingActions = []),
          o.animation.on('frame', this._onframe, this),
          dt(o, this),
          a.setAsPrimitive(this);
      }
      (et.prototype.on = tt('on', !0)),
        (et.prototype.off = tt('off', !0)),
        (et.prototype.one = tt('one', !0)),
        a.mixin(et, u);
      var it = nt.prototype;
      function rt(t, e, n) {
        if (this._disposed) _t(this.id);
        else {
          var i,
            r = this._model,
            a = this._coordSysMgr.getCoordinateSystems();
          e = b.parseFinder(r, e);
          for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (i = s[t](r, e, n))) return i;
          }
        }
      }
      (it._onframe = function() {
        if (!this._disposed) {
          var t = this._scheduler;
          if (this[J]) {
            var e = this[J].silent;
            (this[Q] = !0),
              ot(this),
              at.update.call(this),
              (this[Q] = !1),
              (this[J] = !1),
              ct.call(this, e),
              ht.call(this, e);
          } else if (t.unfinished) {
            var n = B,
              i = this._model,
              r = this._api;
            t.unfinished = !1;
            do {
              var a = +new Date();
              t.performSeriesTasks(i),
                t.performDataProcessorTasks(i),
                lt(this, i),
                t.performVisualTasks(i),
                mt(this, this._model, r, 'remain'),
                (n -= +new Date() - a);
            } while (n > 0 && t.unfinished);
            t.unfinished || this._zr.flush();
          }
        }
      }),
        (it.getDom = function() {
          return this._dom;
        }),
        (it.getZr = function() {
          return this._zr;
        }),
        (it.setOption = function(t, e, n) {
          if (this._disposed) _t(this.id);
          else {
            var i;
            if (
              (L(e) && ((n = e.lazyUpdate), (i = e.silent), (e = e.notMerge)),
              (this[Q] = !0),
              !this._model || e)
            ) {
              var r = new f(this._api),
                a = this._theme,
                o = (this._model = new c());
              (o.scheduler = this._scheduler), o.init(null, null, a, r);
            }
            this._model.setOption(t, At),
              n
                ? ((this[J] = { silent: i }), (this[Q] = !1))
                : (ot(this),
                  at.update.call(this),
                  this._zr.flush(),
                  (this[J] = !1),
                  (this[Q] = !1),
                  ct.call(this, i),
                  ht.call(this, i));
          }
        }),
        (it.setTheme = function() {
          console.error('ECharts#setTheme() is DEPRECATED in ECharts 3.0');
        }),
        (it.getModel = function() {
          return this._model;
        }),
        (it.getOption = function() {
          return this._model && this._model.getOption();
        }),
        (it.getWidth = function() {
          return this._zr.getWidth();
        }),
        (it.getHeight = function() {
          return this._zr.getHeight();
        }),
        (it.getDevicePixelRatio = function() {
          return this._zr.painter.dpr || window.devicePixelRatio || 1;
        }),
        (it.getRenderedCanvas = function(t) {
          if (s.canvasSupported) {
            (t = t || {}),
              (t.pixelRatio = t.pixelRatio || 1),
              (t.backgroundColor = t.backgroundColor || this._model.get('backgroundColor'));
            var e = this._zr;
            return e.painter.getRenderedCanvas(t);
          }
        }),
        (it.getSvgDataURL = function() {
          if (s.svgSupported) {
            var t = this._zr,
              e = t.storage.getDisplayList();
            return (
              a.each(e, function(t) {
                t.stopAnimation(!0);
              }),
              t.painter.toDataURL()
            );
          }
        }),
        (it.getDataURL = function(t) {
          if (!this._disposed) {
            t = t || {};
            var e = t.excludeComponents,
              n = this._model,
              i = [],
              r = this;
            P(e, function(t) {
              n.eachComponent({ mainType: t }, function(t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), (e.group.ignore = !0));
              });
            });
            var a =
              'svg' === this._zr.painter.getType()
                ? this.getSvgDataURL()
                : this.getRenderedCanvas(t).toDataURL('image/' + ((t && t.type) || 'png'));
            return (
              P(i, function(t) {
                t.group.ignore = !1;
              }),
              a
            );
          }
          _t(this.id);
        }),
        (it.getConnectedDataURL = function(t) {
          if (this._disposed) _t(this.id);
          else if (s.canvasSupported) {
            var e = 'svg' === t.type,
              n = this.group,
              i = Math.min,
              o = Math.max,
              l = 1 / 0;
            if (Rt[n]) {
              var u = l,
                c = l,
                h = -l,
                d = -l,
                f = [],
                p = (t && t.pixelRatio) || 1;
              a.each(Lt, function(r, s) {
                if (r.group === n) {
                  var l = e
                      ? r.getZr().painter.getSvgDom().innerHTML
                      : r.getRenderedCanvas(a.clone(t)),
                    p = r.getDom().getBoundingClientRect();
                  (u = i(p.left, u)),
                    (c = i(p.top, c)),
                    (h = o(p.right, h)),
                    (d = o(p.bottom, d)),
                    f.push({ dom: l, left: p.left, top: p.top });
                }
              }),
                (u *= p),
                (c *= p),
                (h *= p),
                (d *= p);
              var g = h - u,
                v = d - c,
                m = a.createCanvas(),
                y = r.init(m, { renderer: e ? 'svg' : 'canvas' });
              if ((y.resize({ width: g, height: v }), e)) {
                var x = '';
                return (
                  P(f, function(t) {
                    var e = t.left - u,
                      n = t.top - c;
                    x += '<g transform="translate(' + e + ',' + n + ')">' + t.dom + '</g>';
                  }),
                  (y.painter.getSvgRoot().innerHTML = x),
                  t.connectedBackgroundColor &&
                    y.painter.setBackgroundColor(t.connectedBackgroundColor),
                  y.refreshImmediately(),
                  y.painter.toDataURL()
                );
              }
              return (
                t.connectedBackgroundColor &&
                  y.add(
                    new _.Rect({
                      shape: { x: 0, y: 0, width: g, height: v },
                      style: { fill: t.connectedBackgroundColor },
                    }),
                  ),
                P(f, function(t) {
                  var e = new _.Image({
                    style: { x: t.left * p - u, y: t.top * p - c, image: t.dom },
                  });
                  y.add(e);
                }),
                y.refreshImmediately(),
                m.toDataURL('image/' + ((t && t.type) || 'png'))
              );
            }
            return this.getDataURL(t);
          }
        }),
        (it.convertToPixel = a.curry(rt, 'convertToPixel')),
        (it.convertFromPixel = a.curry(rt, 'convertFromPixel')),
        (it.containPixel = function(t, e) {
          if (!this._disposed) {
            var n,
              i = this._model;
            return (
              (t = b.parseFinder(i, t)),
              a.each(
                t,
                function(t, i) {
                  i.indexOf('Models') >= 0 &&
                    a.each(
                      t,
                      function(t) {
                        var r = t.coordinateSystem;
                        if (r && r.containPoint) n |= !!r.containPoint(e);
                        else if ('seriesModels' === i) {
                          var a = this._chartsMap[t.__viewId];
                          a && a.containPoint && (n |= a.containPoint(e, t));
                        }
                      },
                      this,
                    );
                },
                this,
              ),
              !!n
            );
          }
          _t(this.id);
        }),
        (it.getVisual = function(t, e) {
          var n = this._model;
          t = b.parseFinder(n, t, { defaultMainType: 'series' });
          var i = t.seriesModel,
            r = i.getData(),
            a = t.hasOwnProperty('dataIndexInside')
              ? t.dataIndexInside
              : t.hasOwnProperty('dataIndex')
              ? r.indexOfRawIndex(t.dataIndex)
              : null;
          return null != a ? r.getItemVisual(a, e) : r.getVisual(e);
        }),
        (it.getViewOfComponentModel = function(t) {
          return this._componentsMap[t.__viewId];
        }),
        (it.getViewOfSeriesModel = function(t) {
          return this._chartsMap[t.__viewId];
        });
      var at = {
        prepareAndUpdate: function(t) {
          ot(this), at.update.call(this, t);
        },
        update: function(t) {
          var e = this._model,
            n = this._api,
            i = this._zr,
            r = this._coordSysMgr,
            a = this._scheduler;
          if (e) {
            a.restoreData(e, t),
              a.performSeriesTasks(e),
              r.create(e, n),
              a.performDataProcessorTasks(e, t),
              lt(this, e),
              r.update(e, n),
              pt(e),
              a.performVisualTasks(e, t),
              gt(this, e, n, t);
            var l = e.get('backgroundColor') || 'transparent';
            if (s.canvasSupported) i.setBackgroundColor(l);
            else {
              var u = o.parse(l);
              (l = o.stringify(u, 'rgb')), 0 === u[3] && (l = 'transparent');
            }
            yt(e, n);
          }
        },
        updateTransform: function(t) {
          var e = this._model,
            n = this,
            i = this._api;
          if (e) {
            var r = [];
            e.eachComponent(function(a, o) {
              var s = n.getViewOfComponentModel(o);
              if (s && s.__alive)
                if (s.updateTransform) {
                  var l = s.updateTransform(o, e, i, t);
                  l && l.update && r.push(s);
                } else r.push(s);
            });
            var o = a.createHashMap();
            e.eachSeries(function(r) {
              var a = n._chartsMap[r.__viewId];
              if (a.updateTransform) {
                var s = a.updateTransform(r, e, i, t);
                s && s.update && o.set(r.uid, 1);
              } else o.set(r.uid, 1);
            }),
              pt(e),
              this._scheduler.performVisualTasks(e, t, { setDirty: !0, dirtyMap: o }),
              mt(n, e, i, t, o),
              yt(e, this._api);
          }
        },
        updateView: function(t) {
          var e = this._model;
          e &&
            (x.markUpdateMethod(t, 'updateView'),
            pt(e),
            this._scheduler.performVisualTasks(e, t, { setDirty: !0 }),
            gt(this, this._model, this._api, t),
            yt(e, this._api));
        },
        updateVisual: function(t) {
          at.update.call(this, t);
        },
        updateLayout: function(t) {
          at.update.call(this, t);
        },
      };
      function ot(t) {
        var e = t._model,
          n = t._scheduler;
        n.restorePipelines(e),
          n.prepareStageTasks(),
          ft(t, 'component', e, n),
          ft(t, 'chart', e, n),
          n.plan();
      }
      function st(t, e, n, i, r) {
        var o = t._model;
        if (i) {
          var s = {};
          (s[i + 'Id'] = n[i + 'Id']),
            (s[i + 'Index'] = n[i + 'Index']),
            (s[i + 'Name'] = n[i + 'Name']);
          var l = { mainType: i, query: s };
          r && (l.subType = r);
          var u = n.excludeSeriesId;
          null != u && (u = a.createHashMap(b.normalizeToArray(u))),
            o &&
              o.eachComponent(
                l,
                function(e) {
                  (u && null != u.get(e.id)) ||
                    c(t['series' === i ? '_chartsMap' : '_componentsMap'][e.__viewId]);
                },
                t,
              );
        } else P(t._componentsViews.concat(t._chartsViews), c);
        function c(i) {
          i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
        }
      }
      function lt(t, e) {
        var n = t._chartsMap,
          i = t._scheduler;
        e.eachSeries(function(t) {
          i.updateStreamModes(t, n[t.__viewId]);
        });
      }
      function ut(t, e) {
        var n = t.type,
          i = t.escapeConnect,
          r = Ct[n],
          o = r.actionInfo,
          s = (o.update || 'update').split(':'),
          l = s.pop();
        (s = null != s[0] && R(s[0])), (this[Q] = !0);
        var u = [t],
          c = !1;
        t.batch &&
          ((c = !0),
          (u = a.map(t.batch, function(e) {
            return (e = a.defaults(a.extend({}, e), t)), (e.batch = null), e;
          })));
        var h,
          d = [],
          f = 'highlight' === n || 'downplay' === n;
        P(
          u,
          function(t) {
            (h = r.action(t, this._model, this._api)),
              (h = h || a.extend({}, t)),
              (h.type = o.event || h.type),
              d.push(h),
              f ? st(this, l, t, 'series') : s && st(this, l, t, s.main, s.sub);
          },
          this,
        ),
          'none' === l ||
            f ||
            s ||
            (this[J] ? (ot(this), at.update.call(this, t), (this[J] = !1)) : at[l].call(this, t)),
          (h = c ? { type: o.event || n, escapeConnect: i, batch: d } : d[0]),
          (this[Q] = !1),
          !e && this._messageCenter.trigger(h.type, h);
      }
      function ct(t) {
        var e = this._pendingActions;
        while (e.length) {
          var n = e.shift();
          ut.call(this, n, t);
        }
      }
      function ht(t) {
        !t && this.trigger('updated');
      }
      function dt(t, e) {
        t.on('rendered', function() {
          e.trigger('rendered'),
            !t.animation.isFinished() ||
              e[J] ||
              e._scheduler.unfinished ||
              e._pendingActions.length ||
              e.trigger('finished');
        });
      }
      function ft(t, e, n, i) {
        for (
          var r = 'component' === e,
            a = r ? t._componentsViews : t._chartsViews,
            o = r ? t._componentsMap : t._chartsMap,
            s = t._zr,
            l = t._api,
            u = 0;
          u < a.length;
          u++
        )
          a[u].__alive = !1;
        function c(t) {
          var e = '_ec_' + t.id + '_' + t.type,
            u = o[e];
          if (!u) {
            var c = R(t.type),
              h = r ? y.getClass(c.main, c.sub) : x.getClass(c.sub);
            (u = new h()), u.init(n, l), (o[e] = u), a.push(u), s.add(u.group);
          }
          (t.__viewId = u.__id = e),
            (u.__alive = !0),
            (u.__model = t),
            (u.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }),
            !r && i.prepareView(u, t, n, l);
        }
        r
          ? n.eachComponent(function(t, e) {
              'series' !== t && c(e);
            })
          : n.eachSeries(c);
        for (u = 0; u < a.length; ) {
          var h = a[u];
          h.__alive
            ? u++
            : (!r && h.renderTask.dispose(),
              s.remove(h.group),
              h.dispose(n, l),
              a.splice(u, 1),
              delete o[h.__id],
              (h.__id = h.group.__ecComponentInfo = null));
        }
      }
      function pt(t) {
        t.clearColorPalette(),
          t.eachSeries(function(t) {
            t.clearColorPalette();
          });
      }
      function gt(t, e, n, i) {
        vt(t, e, n, i),
          P(t._chartsViews, function(t) {
            t.__alive = !1;
          }),
          mt(t, e, n, i),
          P(t._chartsViews, function(t) {
            t.__alive || t.remove(e, n);
          });
      }
      function vt(t, e, n, i, r) {
        P(r || t._componentsViews, function(t) {
          var r = t.__model;
          t.render(r, e, n, i), St(r, t);
        });
      }
      function mt(t, e, n, i, r) {
        var a,
          o = t._scheduler;
        e.eachSeries(function(e) {
          var n = t._chartsMap[e.__viewId];
          n.__alive = !0;
          var s = n.renderTask;
          o.updatePayload(s, i),
            r && r.get(e.uid) && s.dirty(),
            (a |= s.perform(o.getPerformArgs(s))),
            (n.group.silent = !!e.get('silent')),
            St(e, n),
            wt(e, n);
        }),
          (o.unfinished |= a),
          bt(t, e),
          T(t._zr.dom, e);
      }
      function yt(t, e) {
        P(Dt, function(n) {
          n(t, e);
        });
      }
      (it.resize = function(t) {
        if (this._disposed) _t(this.id);
        else {
          this._zr.resize(t);
          var e = this._model;
          if ((this._loadingFX && this._loadingFX.resize(), e)) {
            var n = e.resetOption('media'),
              i = t && t.silent;
            (this[Q] = !0),
              n && ot(this),
              at.update.call(this),
              (this[Q] = !1),
              ct.call(this, i),
              ht.call(this, i);
          }
        }
      }),
        (it.showLoading = function(t, e) {
          if (this._disposed) _t(this.id);
          else if ((L(t) && ((e = t), (t = '')), (t = t || 'default'), this.hideLoading(), Et[t])) {
            var n = Et[t](this._api, e),
              i = this._zr;
            (this._loadingFX = n), i.add(n);
          }
        }),
        (it.hideLoading = function() {
          this._disposed
            ? _t(this.id)
            : (this._loadingFX && this._zr.remove(this._loadingFX), (this._loadingFX = null));
        }),
        (it.makeActionFromEvent = function(t) {
          var e = a.extend({}, t);
          return (e.type = It[t.type]), e;
        }),
        (it.dispatchAction = function(t, e) {
          this._disposed
            ? _t(this.id)
            : (L(e) || (e = { silent: !!e }),
              Ct[t.type] &&
                this._model &&
                (this[Q]
                  ? this._pendingActions.push(t)
                  : (ut.call(this, t, e.silent),
                    e.flush
                      ? this._zr.flush(!0)
                      : !1 !== e.flush && s.browser.weChat && this._throttledZrFlush(),
                    ct.call(this, e.silent),
                    ht.call(this, e.silent))));
        }),
        (it.appendData = function(t) {
          if (this._disposed) _t(this.id);
          else {
            var e = t.seriesIndex,
              n = this.getModel(),
              i = n.getSeriesByIndex(e);
            i.appendData(t), (this._scheduler.unfinished = !0);
          }
        }),
        (it.on = tt('on', !1)),
        (it.off = tt('off', !1)),
        (it.one = tt('one', !1));
      var xt = [
        'click',
        'dblclick',
        'mouseover',
        'mouseout',
        'mousemove',
        'mousedown',
        'mouseup',
        'globalout',
        'contextmenu',
      ];
      function _t(t) {}
      function bt(t, e) {
        var n = t._zr,
          i = n.storage,
          r = 0;
        i.traverse(function(t) {
          r++;
        }),
          r > e.get('hoverLayerThreshold') &&
            !s.node &&
            e.eachSeries(function(e) {
              if (!e.preventUsingHoverLayer) {
                var n = t._chartsMap[e.__viewId];
                n.__alive &&
                  n.group.traverse(function(t) {
                    t.useHoverLayer = !0;
                  });
              }
            });
      }
      function wt(t, e) {
        var n = t.get('blendMode') || null;
        e.group.traverse(function(t) {
          t.isGroup || (t.style.blend !== n && t.setStyle('blend', n)),
            t.eachPendingDisplayable &&
              t.eachPendingDisplayable(function(t) {
                t.setStyle('blend', n);
              });
        });
      }
      function St(t, e) {
        var n = t.get('z'),
          i = t.get('zlevel');
        e.group.traverse(function(t) {
          'group' !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
        });
      }
      function Mt(t) {
        var e = t._coordSysMgr;
        return a.extend(new h(t), {
          getCoordinateSystems: a.bind(e.getCoordinateSystems, e),
          getComponentByElement: function(e) {
            while (e) {
              var n = e.__ecComponentInfo;
              if (null != n) return t._model.getComponent(n.mainType, n.index);
              e = e.parent;
            }
          },
        });
      }
      function Tt() {
        this.eventInfo;
      }
      (it._initEvents = function() {
        P(
          xt,
          function(t) {
            var e = function(e) {
              var n,
                i = this.getModel(),
                r = e.target,
                o = 'globalout' === t;
              if (o) n = {};
              else if (r && null != r.dataIndex) {
                var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                n = (s && s.getDataParams(r.dataIndex, r.dataType, r)) || {};
              } else r && r.eventData && (n = a.extend({}, r.eventData));
              if (n) {
                var l = n.componentType,
                  u = n.componentIndex;
                ('markLine' !== l && 'markPoint' !== l && 'markArea' !== l) ||
                  ((l = 'series'), (u = n.seriesIndex));
                var c = l && null != u && i.getComponent(l, u),
                  h =
                    c &&
                    this['series' === c.mainType ? '_chartsMap' : '_componentsMap'][c.__viewId];
                (n.event = e),
                  (n.type = t),
                  (this._ecEventProcessor.eventInfo = {
                    targetEl: r,
                    packedEvent: n,
                    model: c,
                    view: h,
                  }),
                  this.trigger(t, n);
              }
            };
            (e.zrEventfulCallAtLast = !0), this._zr.on(t, e, this);
          },
          this,
        ),
          P(
            It,
            function(t, e) {
              this._messageCenter.on(
                e,
                function(t) {
                  this.trigger(e, t);
                },
                this,
              );
            },
            this,
          );
      }),
        (it.isDisposed = function() {
          return this._disposed;
        }),
        (it.clear = function() {
          this._disposed ? _t(this.id) : this.setOption({ series: [] }, !0);
        }),
        (it.dispose = function() {
          if (this._disposed) _t(this.id);
          else {
            (this._disposed = !0), b.setAttribute(this.getDom(), Bt, '');
            var t = this._api,
              e = this._model;
            P(this._componentsViews, function(n) {
              n.dispose(e, t);
            }),
              P(this._chartsViews, function(n) {
                n.dispose(e, t);
              }),
              this._zr.dispose(),
              delete Lt[this.id];
          }
        }),
        a.mixin(nt, u),
        (Tt.prototype = {
          constructor: Tt,
          normalizeQuery: function(t) {
            var e = {},
              n = {},
              i = {};
            if (a.isString(t)) {
              var r = R(t);
              (e.mainType = r.main || null), (e.subType = r.sub || null);
            } else {
              var o = ['Index', 'Name', 'Id'],
                s = { name: 1, dataIndex: 1, dataType: 1 };
              a.each(t, function(t, r) {
                for (var a = !1, l = 0; l < o.length; l++) {
                  var u = o[l],
                    c = r.lastIndexOf(u);
                  if (c > 0 && c === r.length - u.length) {
                    var h = r.slice(0, c);
                    'data' !== h && ((e.mainType = h), (e[u.toLowerCase()] = t), (a = !0));
                  }
                }
                s.hasOwnProperty(r) && ((n[r] = t), (a = !0)), a || (i[r] = t);
              });
            }
            return { cptQuery: e, dataQuery: n, otherQuery: i };
          },
          filter: function(t, e, n) {
            var i = this.eventInfo;
            if (!i) return !0;
            var r = i.targetEl,
              a = i.packedEvent,
              o = i.model,
              s = i.view;
            if (!o || !s) return !0;
            var l = e.cptQuery,
              u = e.dataQuery;
            return (
              c(l, o, 'mainType') &&
              c(l, o, 'subType') &&
              c(l, o, 'index', 'componentIndex') &&
              c(l, o, 'name') &&
              c(l, o, 'id') &&
              c(u, a, 'name') &&
              c(u, a, 'dataIndex') &&
              c(u, a, 'dataType') &&
              (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
            );
            function c(t, e, n, i) {
              return null == t[n] || e[i || n] === t[n];
            }
          },
          afterTrigger: function() {
            this.eventInfo = null;
          },
        });
      var Ct = {},
        It = {},
        kt = [],
        At = [],
        Dt = [],
        Ot = [],
        Pt = {},
        Et = {},
        Lt = {},
        Rt = {},
        Nt = new Date() - 0,
        zt = new Date() - 0,
        Bt = '_echarts_instance_';
      function jt(t) {
        var e = 0,
          n = 1,
          i = 2,
          r = '__connectUpdateStatus';
        function a(t, e) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i[r] = e;
          }
        }
        P(It, function(o, s) {
          t._messageCenter.on(s, function(o) {
            if (Rt[t.group] && t[r] !== e) {
              if (o && o.escapeConnect) return;
              var s = t.makeActionFromEvent(o),
                l = [];
              P(Lt, function(e) {
                e !== t && e.group === t.group && l.push(e);
              }),
                a(l, e),
                P(l, function(t) {
                  t[r] !== n && t.dispatchAction(s);
                }),
                a(l, i);
            }
          });
        });
      }
      function Ft(t, e, n) {
        var i = Gt(t);
        if (i) return i;
        var r = new nt(t, e, n);
        return (r.id = 'ec_' + Nt++), (Lt[r.id] = r), b.setAttribute(t, Bt, r.id), jt(r), r;
      }
      function Yt(t) {
        if (a.isArray(t)) {
          var e = t;
          (t = null),
            P(e, function(e) {
              null != e.group && (t = e.group);
            }),
            (t = t || 'g_' + zt++),
            P(e, function(e) {
              e.group = t;
            });
        }
        return (Rt[t] = !0), t;
      }
      function Vt(t) {
        Rt[t] = !1;
      }
      var Ht = Vt;
      function Wt(t) {
        'string' === typeof t ? (t = Lt[t]) : t instanceof nt || (t = Gt(t)),
          t instanceof nt && !t.isDisposed() && t.dispose();
      }
      function Gt(t) {
        return Lt[b.getAttribute(t, Bt)];
      }
      function Ut(t) {
        return Lt[t];
      }
      function Xt(t, e) {
        Pt[t] = e;
      }
      function Zt(t) {
        At.push(t);
      }
      function qt(t, e) {
        ne(kt, t, e, j);
      }
      function Kt(t) {
        Dt.push(t);
      }
      function Qt(t, e, n) {
        'function' === typeof e && ((n = e), (e = ''));
        var i = L(t) ? t.type : [t, (t = { event: e })][0];
        (t.event = (t.event || i).toLowerCase()),
          (e = t.event),
          O($.test(i) && $.test(e)),
          Ct[i] || (Ct[i] = { action: n, actionInfo: t }),
          (It[e] = i);
      }
      function Jt(t, e) {
        d.register(t, e);
      }
      function $t(t) {
        var e = d.get(t);
        if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice();
      }
      function te(t, e) {
        ne(Ot, t, e, H, 'layout');
      }
      function ee(t, e) {
        ne(Ot, t, e, U, 'visual');
      }
      function ne(t, e, n, i, r) {
        (E(e) || L(e)) && ((n = e), (e = i));
        var a = I.wrapStageHandler(n, r);
        return (a.__prio = e), (a.__raw = n), t.push(a), a;
      }
      function ie(t, e) {
        Et[t] = e;
      }
      function re(t) {
        return v.extend(t);
      }
      function ae(t) {
        return y.extend(t);
      }
      function oe(t) {
        return m.extend(t);
      }
      function se(t) {
        return x.extend(t);
      }
      function le(t) {
        a.$override('createCanvas', t);
      }
      function ue(t, e, n) {
        D.registerMap(t, e, n);
      }
      function ce(t) {
        var e = D.retrieveMap(t);
        return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };
      }
      ee(G, M),
        Zt(p),
        qt(Y, g),
        ie('default', C),
        Qt({ type: 'highlight', event: 'highlight', update: 'highlight' }, a.noop),
        Qt({ type: 'downplay', event: 'downplay', update: 'downplay' }, a.noop),
        Xt('light', k),
        Xt('dark', A);
      var he = {};
      (e.version = N),
        (e.dependencies = z),
        (e.PRIORITY = K),
        (e.init = Ft),
        (e.connect = Yt),
        (e.disConnect = Vt),
        (e.disconnect = Ht),
        (e.dispose = Wt),
        (e.getInstanceByDom = Gt),
        (e.getInstanceById = Ut),
        (e.registerTheme = Xt),
        (e.registerPreprocessor = Zt),
        (e.registerProcessor = qt),
        (e.registerPostUpdate = Kt),
        (e.registerAction = Qt),
        (e.registerCoordinateSystem = Jt),
        (e.getCoordinateSystemDimensions = $t),
        (e.registerLayout = te),
        (e.registerVisual = ee),
        (e.registerLoading = ie),
        (e.extendComponentModel = re),
        (e.extendComponentView = ae),
        (e.extendSeriesModel = oe),
        (e.extendChartView = se),
        (e.setCanvasCreator = le),
        (e.registerMap = ue),
        (e.getMap = ce),
        (e.dataTool = he);
      var de = n('txkQ');
      (function() {
        for (var t in de) de.hasOwnProperty(t) && (e[t] = de[t]);
      })();
    },
    QBsz: function(t, e) {
      var n = 'undefined' === typeof Float32Array ? Array : Float32Array;
      function i(t, e) {
        var i = new n(2);
        return null == t && (t = 0), null == e && (e = 0), (i[0] = t), (i[1] = e), i;
      }
      function r(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t;
      }
      function a(t) {
        var e = new n(2);
        return (e[0] = t[0]), (e[1] = t[1]), e;
      }
      function o(t, e, n) {
        return (t[0] = e), (t[1] = n), t;
      }
      function s(t, e, n) {
        return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
      }
      function l(t, e, n, i) {
        return (t[0] = e[0] + n[0] * i), (t[1] = e[1] + n[1] * i), t;
      }
      function u(t, e, n) {
        return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
      }
      function c(t) {
        return Math.sqrt(d(t));
      }
      var h = c;
      function d(t) {
        return t[0] * t[0] + t[1] * t[1];
      }
      var f = d;
      function p(t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
      }
      function g(t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
      }
      function v(t, e) {
        return t[0] * e[0] + t[1] * e[1];
      }
      function m(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
      }
      function y(t, e) {
        var n = c(e);
        return 0 === n ? ((t[0] = 0), (t[1] = 0)) : ((t[0] = e[0] / n), (t[1] = e[1] / n)), t;
      }
      function x(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
      }
      var _ = x;
      function b(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
      }
      var w = b;
      function S(t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t;
      }
      function M(t, e, n, i) {
        return (t[0] = e[0] + i * (n[0] - e[0])), (t[1] = e[1] + i * (n[1] - e[1])), t;
      }
      function T(t, e, n) {
        var i = e[0],
          r = e[1];
        return (t[0] = n[0] * i + n[2] * r + n[4]), (t[1] = n[1] * i + n[3] * r + n[5]), t;
      }
      function C(t, e, n) {
        return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
      }
      function I(t, e, n) {
        return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
      }
      (e.create = i),
        (e.copy = r),
        (e.clone = a),
        (e.set = o),
        (e.add = s),
        (e.scaleAndAdd = l),
        (e.sub = u),
        (e.len = c),
        (e.length = h),
        (e.lenSquare = d),
        (e.lengthSquare = f),
        (e.mul = p),
        (e.div = g),
        (e.dot = v),
        (e.scale = m),
        (e.normalize = y),
        (e.distance = x),
        (e.dist = _),
        (e.distanceSquare = b),
        (e.distSquare = w),
        (e.negate = S),
        (e.lerp = M),
        (e.applyTransform = T),
        (e.min = C),
        (e.max = I);
    },
    Qe9p: function(t, e, n) {
      var i = n('1RvN'),
        r = {
          transparent: [0, 0, 0, 0],
          aliceblue: [240, 248, 255, 1],
          antiquewhite: [250, 235, 215, 1],
          aqua: [0, 255, 255, 1],
          aquamarine: [127, 255, 212, 1],
          azure: [240, 255, 255, 1],
          beige: [245, 245, 220, 1],
          bisque: [255, 228, 196, 1],
          black: [0, 0, 0, 1],
          blanchedalmond: [255, 235, 205, 1],
          blue: [0, 0, 255, 1],
          blueviolet: [138, 43, 226, 1],
          brown: [165, 42, 42, 1],
          burlywood: [222, 184, 135, 1],
          cadetblue: [95, 158, 160, 1],
          chartreuse: [127, 255, 0, 1],
          chocolate: [210, 105, 30, 1],
          coral: [255, 127, 80, 1],
          cornflowerblue: [100, 149, 237, 1],
          cornsilk: [255, 248, 220, 1],
          crimson: [220, 20, 60, 1],
          cyan: [0, 255, 255, 1],
          darkblue: [0, 0, 139, 1],
          darkcyan: [0, 139, 139, 1],
          darkgoldenrod: [184, 134, 11, 1],
          darkgray: [169, 169, 169, 1],
          darkgreen: [0, 100, 0, 1],
          darkgrey: [169, 169, 169, 1],
          darkkhaki: [189, 183, 107, 1],
          darkmagenta: [139, 0, 139, 1],
          darkolivegreen: [85, 107, 47, 1],
          darkorange: [255, 140, 0, 1],
          darkorchid: [153, 50, 204, 1],
          darkred: [139, 0, 0, 1],
          darksalmon: [233, 150, 122, 1],
          darkseagreen: [143, 188, 143, 1],
          darkslateblue: [72, 61, 139, 1],
          darkslategray: [47, 79, 79, 1],
          darkslategrey: [47, 79, 79, 1],
          darkturquoise: [0, 206, 209, 1],
          darkviolet: [148, 0, 211, 1],
          deeppink: [255, 20, 147, 1],
          deepskyblue: [0, 191, 255, 1],
          dimgray: [105, 105, 105, 1],
          dimgrey: [105, 105, 105, 1],
          dodgerblue: [30, 144, 255, 1],
          firebrick: [178, 34, 34, 1],
          floralwhite: [255, 250, 240, 1],
          forestgreen: [34, 139, 34, 1],
          fuchsia: [255, 0, 255, 1],
          gainsboro: [220, 220, 220, 1],
          ghostwhite: [248, 248, 255, 1],
          gold: [255, 215, 0, 1],
          goldenrod: [218, 165, 32, 1],
          gray: [128, 128, 128, 1],
          green: [0, 128, 0, 1],
          greenyellow: [173, 255, 47, 1],
          grey: [128, 128, 128, 1],
          honeydew: [240, 255, 240, 1],
          hotpink: [255, 105, 180, 1],
          indianred: [205, 92, 92, 1],
          indigo: [75, 0, 130, 1],
          ivory: [255, 255, 240, 1],
          khaki: [240, 230, 140, 1],
          lavender: [230, 230, 250, 1],
          lavenderblush: [255, 240, 245, 1],
          lawngreen: [124, 252, 0, 1],
          lemonchiffon: [255, 250, 205, 1],
          lightblue: [173, 216, 230, 1],
          lightcoral: [240, 128, 128, 1],
          lightcyan: [224, 255, 255, 1],
          lightgoldenrodyellow: [250, 250, 210, 1],
          lightgray: [211, 211, 211, 1],
          lightgreen: [144, 238, 144, 1],
          lightgrey: [211, 211, 211, 1],
          lightpink: [255, 182, 193, 1],
          lightsalmon: [255, 160, 122, 1],
          lightseagreen: [32, 178, 170, 1],
          lightskyblue: [135, 206, 250, 1],
          lightslategray: [119, 136, 153, 1],
          lightslategrey: [119, 136, 153, 1],
          lightsteelblue: [176, 196, 222, 1],
          lightyellow: [255, 255, 224, 1],
          lime: [0, 255, 0, 1],
          limegreen: [50, 205, 50, 1],
          linen: [250, 240, 230, 1],
          magenta: [255, 0, 255, 1],
          maroon: [128, 0, 0, 1],
          mediumaquamarine: [102, 205, 170, 1],
          mediumblue: [0, 0, 205, 1],
          mediumorchid: [186, 85, 211, 1],
          mediumpurple: [147, 112, 219, 1],
          mediumseagreen: [60, 179, 113, 1],
          mediumslateblue: [123, 104, 238, 1],
          mediumspringgreen: [0, 250, 154, 1],
          mediumturquoise: [72, 209, 204, 1],
          mediumvioletred: [199, 21, 133, 1],
          midnightblue: [25, 25, 112, 1],
          mintcream: [245, 255, 250, 1],
          mistyrose: [255, 228, 225, 1],
          moccasin: [255, 228, 181, 1],
          navajowhite: [255, 222, 173, 1],
          navy: [0, 0, 128, 1],
          oldlace: [253, 245, 230, 1],
          olive: [128, 128, 0, 1],
          olivedrab: [107, 142, 35, 1],
          orange: [255, 165, 0, 1],
          orangered: [255, 69, 0, 1],
          orchid: [218, 112, 214, 1],
          palegoldenrod: [238, 232, 170, 1],
          palegreen: [152, 251, 152, 1],
          paleturquoise: [175, 238, 238, 1],
          palevioletred: [219, 112, 147, 1],
          papayawhip: [255, 239, 213, 1],
          peachpuff: [255, 218, 185, 1],
          peru: [205, 133, 63, 1],
          pink: [255, 192, 203, 1],
          plum: [221, 160, 221, 1],
          powderblue: [176, 224, 230, 1],
          purple: [128, 0, 128, 1],
          red: [255, 0, 0, 1],
          rosybrown: [188, 143, 143, 1],
          royalblue: [65, 105, 225, 1],
          saddlebrown: [139, 69, 19, 1],
          salmon: [250, 128, 114, 1],
          sandybrown: [244, 164, 96, 1],
          seagreen: [46, 139, 87, 1],
          seashell: [255, 245, 238, 1],
          sienna: [160, 82, 45, 1],
          silver: [192, 192, 192, 1],
          skyblue: [135, 206, 235, 1],
          slateblue: [106, 90, 205, 1],
          slategray: [112, 128, 144, 1],
          slategrey: [112, 128, 144, 1],
          snow: [255, 250, 250, 1],
          springgreen: [0, 255, 127, 1],
          steelblue: [70, 130, 180, 1],
          tan: [210, 180, 140, 1],
          teal: [0, 128, 128, 1],
          thistle: [216, 191, 216, 1],
          tomato: [255, 99, 71, 1],
          turquoise: [64, 224, 208, 1],
          violet: [238, 130, 238, 1],
          wheat: [245, 222, 179, 1],
          white: [255, 255, 255, 1],
          whitesmoke: [245, 245, 245, 1],
          yellow: [255, 255, 0, 1],
          yellowgreen: [154, 205, 50, 1],
        };
      function a(t) {
        return (t = Math.round(t)), t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function o(t) {
        return (t = Math.round(t)), t < 0 ? 0 : t > 360 ? 360 : t;
      }
      function s(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t;
      }
      function l(t) {
        return t.length && '%' === t.charAt(t.length - 1)
          ? a((parseFloat(t) / 100) * 255)
          : a(parseInt(t, 10));
      }
      function u(t) {
        return t.length && '%' === t.charAt(t.length - 1)
          ? s(parseFloat(t) / 100)
          : s(parseFloat(t));
      }
      function c(t, e, n) {
        return (
          n < 0 ? (n += 1) : n > 1 && (n -= 1),
          6 * n < 1
            ? t + (e - t) * n * 6
            : 2 * n < 1
            ? e
            : 3 * n < 2
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function h(t, e, n) {
        return t + (e - t) * n;
      }
      function d(t, e, n, i, r) {
        return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), t;
      }
      function f(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      }
      var p = new i(20),
        g = null;
      function v(t, e) {
        g && f(g, e), (g = p.put(t, g || e.slice()));
      }
      function m(t, e) {
        if (t) {
          e = e || [];
          var n = p.get(t);
          if (n) return f(e, n);
          t += '';
          var i = t.replace(/ /g, '').toLowerCase();
          if (i in r) return f(e, r[i]), v(t, e), e;
          if ('#' !== i.charAt(0)) {
            var a = i.indexOf('('),
              o = i.indexOf(')');
            if (-1 !== a && o + 1 === i.length) {
              var s = i.substr(0, a),
                c = i.substr(a + 1, o - (a + 1)).split(','),
                h = 1;
              switch (s) {
                case 'rgba':
                  if (4 !== c.length) return void d(e, 0, 0, 0, 1);
                  h = u(c.pop());
                case 'rgb':
                  return 3 !== c.length
                    ? void d(e, 0, 0, 0, 1)
                    : (d(e, l(c[0]), l(c[1]), l(c[2]), h), v(t, e), e);
                case 'hsla':
                  return 4 !== c.length
                    ? void d(e, 0, 0, 0, 1)
                    : ((c[3] = u(c[3])), y(c, e), v(t, e), e);
                case 'hsl':
                  return 3 !== c.length ? void d(e, 0, 0, 0, 1) : (y(c, e), v(t, e), e);
                default:
                  return;
              }
            }
            d(e, 0, 0, 0, 1);
          } else {
            if (4 === i.length) {
              var g = parseInt(i.substr(1), 16);
              return g >= 0 && g <= 4095
                ? (d(
                    e,
                    ((3840 & g) >> 4) | ((3840 & g) >> 8),
                    (240 & g) | ((240 & g) >> 4),
                    (15 & g) | ((15 & g) << 4),
                    1,
                  ),
                  v(t, e),
                  e)
                : void d(e, 0, 0, 0, 1);
            }
            if (7 === i.length) {
              g = parseInt(i.substr(1), 16);
              return g >= 0 && g <= 16777215
                ? (d(e, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 1), v(t, e), e)
                : void d(e, 0, 0, 0, 1);
            }
          }
        }
      }
      function y(t, e) {
        var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
          i = u(t[1]),
          r = u(t[2]),
          o = r <= 0.5 ? r * (i + 1) : r + i - r * i,
          s = 2 * r - o;
        return (
          (e = e || []),
          d(e, a(255 * c(s, o, n + 1 / 3)), a(255 * c(s, o, n)), a(255 * c(s, o, n - 1 / 3)), 1),
          4 === t.length && (e[3] = t[3]),
          e
        );
      }
      function x(t) {
        if (t) {
          var e,
            n,
            i = t[0] / 255,
            r = t[1] / 255,
            a = t[2] / 255,
            o = Math.min(i, r, a),
            s = Math.max(i, r, a),
            l = s - o,
            u = (s + o) / 2;
          if (0 === l) (e = 0), (n = 0);
          else {
            n = u < 0.5 ? l / (s + o) : l / (2 - s - o);
            var c = ((s - i) / 6 + l / 2) / l,
              h = ((s - r) / 6 + l / 2) / l,
              d = ((s - a) / 6 + l / 2) / l;
            i === s ? (e = d - h) : r === s ? (e = 1 / 3 + c - d) : a === s && (e = 2 / 3 + h - c),
              e < 0 && (e += 1),
              e > 1 && (e -= 1);
          }
          var f = [360 * e, n, u];
          return null != t[3] && f.push(t[3]), f;
        }
      }
      function _(t, e) {
        var n = m(t);
        if (n) {
          for (var i = 0; i < 3; i++)
            (n[i] = e < 0 ? (n[i] * (1 - e)) | 0 : ((255 - n[i]) * e + n[i]) | 0),
              n[i] > 255 ? (n[i] = 255) : t[i] < 0 && (n[i] = 0);
          return k(n, 4 === n.length ? 'rgba' : 'rgb');
        }
      }
      function b(t) {
        var e = m(t);
        if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1);
      }
      function w(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
          n = n || [];
          var i = t * (e.length - 1),
            r = Math.floor(i),
            o = Math.ceil(i),
            l = e[r],
            u = e[o],
            c = i - r;
          return (
            (n[0] = a(h(l[0], u[0], c))),
            (n[1] = a(h(l[1], u[1], c))),
            (n[2] = a(h(l[2], u[2], c))),
            (n[3] = s(h(l[3], u[3], c))),
            n
          );
        }
      }
      var S = w;
      function M(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
          var i = t * (e.length - 1),
            r = Math.floor(i),
            o = Math.ceil(i),
            l = m(e[r]),
            u = m(e[o]),
            c = i - r,
            d = k(
              [a(h(l[0], u[0], c)), a(h(l[1], u[1], c)), a(h(l[2], u[2], c)), s(h(l[3], u[3], c))],
              'rgba',
            );
          return n ? { color: d, leftIndex: r, rightIndex: o, value: i } : d;
        }
      }
      var T = M;
      function C(t, e, n, i) {
        if (((t = m(t)), t))
          return (
            (t = x(t)),
            null != e && (t[0] = o(e)),
            null != n && (t[1] = u(n)),
            null != i && (t[2] = u(i)),
            k(y(t), 'rgba')
          );
      }
      function I(t, e) {
        if (((t = m(t)), t && null != e)) return (t[3] = s(e)), k(t, 'rgba');
      }
      function k(t, e) {
        if (t && t.length) {
          var n = t[0] + ',' + t[1] + ',' + t[2];
          return (
            ('rgba' !== e && 'hsva' !== e && 'hsla' !== e) || (n += ',' + t[3]), e + '(' + n + ')'
          );
        }
      }
      (e.parse = m),
        (e.lift = _),
        (e.toHex = b),
        (e.fastLerp = w),
        (e.fastMapToColor = S),
        (e.lerp = M),
        (e.mapToColor = T),
        (e.modifyHSL = C),
        (e.modifyAlpha = I),
        (e.stringify = k);
    },
    QuXc: function(t, e) {
      var n = function(t) {
        this.colorStops = t || [];
      };
      n.prototype = {
        constructor: n,
        addColorStop: function(t, e) {
          this.colorStops.push({ offset: t, color: e });
        },
      };
      var i = n;
      t.exports = i;
    },
    Qvb6: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY'),
        a = n('ItGF'),
        o = n('B9fm'),
        s = n('gvm7'),
        l = n('7aKB'),
        u = n('OELB'),
        c = n('IwbS'),
        h = n('Ez2D'),
        d = n('+TT/'),
        f = n('Qxkt'),
        p = n('F9bG'),
        g = n('aX7z'),
        v = n('/y7N'),
        m = n('4NO4'),
        y = m.getTooltipRenderMode,
        x = r.bind,
        _ = r.each,
        b = u.parsePercent,
        w = new c.Rect({ shape: { x: -1, y: -1, width: 2, height: 2 } }),
        S = i.extendComponentView({
          type: 'tooltip',
          init: function(t, e) {
            if (!a.node) {
              var n,
                i = t.getComponent('tooltip'),
                r = i.get('renderMode');
              (this._renderMode = y(r)),
                'html' === this._renderMode
                  ? ((n = new o(e.getDom(), e, { appendToBody: i.get('appendToBody', !0) })),
                    (this._newLine = '<br/>'))
                  : ((n = new s(e)), (this._newLine = '\n')),
                (this._tooltipContent = n);
            }
          },
          render: function(t, e, n) {
            if (!a.node) {
              this.group.removeAll(),
                (this._tooltipModel = t),
                (this._ecModel = e),
                (this._api = n),
                (this._lastDataByCoordSys = null),
                (this._alwaysShowContent = t.get('alwaysShowContent'));
              var i = this._tooltipContent;
              i.update(t),
                i.setEnterable(t.get('enterable')),
                this._initGlobalListener(),
                this._keepShow();
            }
          },
          _initGlobalListener: function() {
            var t = this._tooltipModel,
              e = t.get('triggerOn');
            p.register(
              'itemTooltip',
              this._api,
              x(function(t, n, i) {
                'none' !== e &&
                  (e.indexOf(t) >= 0 ? this._tryShow(n, i) : 'leave' === t && this._hide(i));
              }, this),
            );
          },
          _keepShow: function() {
            var t = this._tooltipModel,
              e = this._ecModel,
              n = this._api;
            if (null != this._lastX && null != this._lastY && 'none' !== t.get('triggerOn')) {
              var i = this;
              clearTimeout(this._refreshUpdateTimeout),
                (this._refreshUpdateTimeout = setTimeout(function() {
                  !n.isDisposed() && i.manuallyShowTip(t, e, n, { x: i._lastX, y: i._lastY });
                }));
            }
          },
          manuallyShowTip: function(t, e, n, i) {
            if (i.from !== this.uid && !a.node) {
              var r = T(i, n);
              this._ticket = '';
              var o = i.dataByCoordSys;
              if (i.tooltip && null != i.x && null != i.y) {
                var s = w;
                (s.position = [i.x, i.y]),
                  s.update(),
                  (s.tooltip = i.tooltip),
                  this._tryShow({ offsetX: i.x, offsetY: i.y, target: s }, r);
              } else if (o)
                this._tryShow(
                  {
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    dataByCoordSys: i.dataByCoordSys,
                    tooltipOption: i.tooltipOption,
                  },
                  r,
                );
              else if (null != i.seriesIndex) {
                if (this._manuallyAxisShowTip(t, e, n, i)) return;
                var l = h(i, e),
                  u = l.point[0],
                  c = l.point[1];
                null != u &&
                  null != c &&
                  this._tryShow({ offsetX: u, offsetY: c, position: i.position, target: l.el }, r);
              } else
                null != i.x &&
                  null != i.y &&
                  (n.dispatchAction({ type: 'updateAxisPointer', x: i.x, y: i.y }),
                  this._tryShow(
                    {
                      offsetX: i.x,
                      offsetY: i.y,
                      position: i.position,
                      target: n.getZr().findHover(i.x, i.y).target,
                    },
                    r,
                  ));
            }
          },
          manuallyHideTip: function(t, e, n, i) {
            var r = this._tooltipContent;
            !this._alwaysShowContent &&
              this._tooltipModel &&
              r.hideLater(this._tooltipModel.get('hideDelay')),
              (this._lastX = this._lastY = null),
              i.from !== this.uid && this._hide(T(i, n));
          },
          _manuallyAxisShowTip: function(t, e, n, i) {
            var r = i.seriesIndex,
              a = i.dataIndex,
              o = e.getComponent('axisPointer').coordSysAxesInfo;
            if (null != r && null != a && null != o) {
              var s = e.getSeriesByIndex(r);
              if (s) {
                var l = s.getData();
                t = M([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
                if ('axis' === t.get('trigger'))
                  return (
                    n.dispatchAction({
                      type: 'updateAxisPointer',
                      seriesIndex: r,
                      dataIndex: a,
                      position: i.position,
                    }),
                    !0
                  );
              }
            }
          },
          _tryShow: function(t, e) {
            var n = t.target,
              i = this._tooltipModel;
            if (i) {
              (this._lastX = t.offsetX), (this._lastY = t.offsetY);
              var r = t.dataByCoordSys;
              r && r.length
                ? this._showAxisTooltip(r, t)
                : n && null != n.dataIndex
                ? ((this._lastDataByCoordSys = null), this._showSeriesItemTooltip(t, n, e))
                : n && n.tooltip
                ? ((this._lastDataByCoordSys = null), this._showComponentItemTooltip(t, n, e))
                : ((this._lastDataByCoordSys = null), this._hide(e));
            }
          },
          _showOrMove: function(t, e) {
            var n = t.get('showDelay');
            (e = r.bind(e, this)),
              clearTimeout(this._showTimout),
              n > 0 ? (this._showTimout = setTimeout(e, n)) : e();
          },
          _showAxisTooltip: function(t, e) {
            var n = this._ecModel,
              i = this._tooltipModel,
              a = [e.offsetX, e.offsetY],
              o = [],
              s = [],
              u = M([e.tooltipOption, i]),
              c = this._renderMode,
              h = this._newLine,
              d = {};
            _(
              t,
              function(t) {
                _(t.dataByAxis, function(t) {
                  var e = n.getComponent(t.axisDim + 'Axis', t.axisIndex),
                    i = t.value,
                    a = [];
                  if (e && null != i) {
                    var u = v.getValueLabel(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                    r.each(t.seriesDataIndices, function(o) {
                      var l = n.getSeriesByIndex(o.seriesIndex),
                        h = o.dataIndexInside,
                        f = l && l.getDataParams(h);
                      if (
                        ((f.axisDim = t.axisDim),
                        (f.axisIndex = t.axisIndex),
                        (f.axisType = t.axisType),
                        (f.axisId = t.axisId),
                        (f.axisValue = g.getAxisRawValue(e.axis, i)),
                        (f.axisValueLabel = u),
                        f)
                      ) {
                        s.push(f);
                        var p,
                          v = l.formatTooltip(h, !0, null, c);
                        if (r.isObject(v)) {
                          p = v.html;
                          var m = v.markers;
                          r.merge(d, m);
                        } else p = v;
                        a.push(p);
                      }
                    });
                    var f = u;
                    'html' !== c
                      ? o.push(a.join(h))
                      : o.push((f ? l.encodeHTML(f) + h : '') + a.join(h));
                  }
                });
              },
              this,
            ),
              o.reverse(),
              (o = o.join(this._newLine + this._newLine));
            var f = e.position;
            this._showOrMove(u, function() {
              this._updateContentNotChangedOnAxis(t)
                ? this._updatePosition(u, f, a[0], a[1], this._tooltipContent, s)
                : this._showTooltipContent(u, o, s, Math.random(), a[0], a[1], f, void 0, d);
            });
          },
          _showSeriesItemTooltip: function(t, e, n) {
            var i = this._ecModel,
              a = e.seriesIndex,
              o = i.getSeriesByIndex(a),
              s = e.dataModel || o,
              l = e.dataIndex,
              u = e.dataType,
              c = s.getData(u),
              h = M([
                c.getItemModel(l),
                s,
                o && (o.coordinateSystem || {}).model,
                this._tooltipModel,
              ]),
              d = h.get('trigger');
            if (null == d || 'item' === d) {
              var f,
                p,
                g = s.getDataParams(l, u),
                v = s.formatTooltip(l, !1, u, this._renderMode);
              r.isObject(v) ? ((f = v.html), (p = v.markers)) : ((f = v), (p = null));
              var m = 'item_' + s.name + '_' + l;
              this._showOrMove(h, function() {
                this._showTooltipContent(h, f, g, m, t.offsetX, t.offsetY, t.position, t.target, p);
              }),
                n({
                  type: 'showTip',
                  dataIndexInside: l,
                  dataIndex: c.getRawIndex(l),
                  seriesIndex: a,
                  from: this.uid,
                });
            }
          },
          _showComponentItemTooltip: function(t, e, n) {
            var i = e.tooltip;
            if ('string' === typeof i) {
              var r = i;
              i = { content: r, formatter: r };
            }
            var a = new f(i, this._tooltipModel, this._ecModel),
              o = a.get('content'),
              s = Math.random();
            this._showOrMove(a, function() {
              this._showTooltipContent(
                a,
                o,
                a.get('formatterParams') || {},
                s,
                t.offsetX,
                t.offsetY,
                t.position,
                e,
              );
            }),
              n({ type: 'showTip', from: this.uid });
          },
          _showTooltipContent: function(t, e, n, i, r, a, o, s, u) {
            if (((this._ticket = ''), t.get('showContent') && t.get('show'))) {
              var c = this._tooltipContent,
                h = t.get('formatter');
              o = o || t.get('position');
              var d = e;
              if (h && 'string' === typeof h) d = l.formatTpl(h, n, !0);
              else if ('function' === typeof h) {
                var f = x(function(e, i) {
                  e === this._ticket &&
                    (c.setContent(i, u, t), this._updatePosition(t, o, r, a, c, n, s));
                }, this);
                (this._ticket = i), (d = h(n, i, f));
              }
              c.setContent(d, u, t), c.show(t), this._updatePosition(t, o, r, a, c, n, s);
            }
          },
          _updatePosition: function(t, e, n, i, a, o, s) {
            var l = this._api.getWidth(),
              u = this._api.getHeight();
            e = e || t.get('position');
            var c = a.getSize(),
              h = t.get('align'),
              f = t.get('verticalAlign'),
              p = s && s.getBoundingRect().clone();
            if (
              (s && p.applyTransform(s.transform),
              'function' === typeof e &&
                (e = e([n, i], o, a.el, p, { viewSize: [l, u], contentSize: c.slice() })),
              r.isArray(e))
            )
              (n = b(e[0], l)), (i = b(e[1], u));
            else if (r.isObject(e)) {
              (e.width = c[0]), (e.height = c[1]);
              var g = d.getLayoutRect(e, { width: l, height: u });
              (n = g.x), (i = g.y), (h = null), (f = null);
            } else if ('string' === typeof e && s) {
              var v = k(e, p, c);
              (n = v[0]), (i = v[1]);
            } else {
              v = C(n, i, a, l, u, h ? null : 20, f ? null : 20);
              (n = v[0]), (i = v[1]);
            }
            if (
              (h && (n -= A(h) ? c[0] / 2 : 'right' === h ? c[0] : 0),
              f && (i -= A(f) ? c[1] / 2 : 'bottom' === f ? c[1] : 0),
              t.get('confine'))
            ) {
              v = I(n, i, a, l, u);
              (n = v[0]), (i = v[1]);
            }
            a.moveTo(n, i);
          },
          _updateContentNotChangedOnAxis: function(t) {
            var e = this._lastDataByCoordSys,
              n = !!e && e.length === t.length;
            return (
              n &&
                _(e, function(e, i) {
                  var r = e.dataByAxis || {},
                    a = t[i] || {},
                    o = a.dataByAxis || [];
                  (n &= r.length === o.length),
                    n &&
                      _(r, function(t, e) {
                        var i = o[e] || {},
                          r = t.seriesDataIndices || [],
                          a = i.seriesDataIndices || [];
                        (n &=
                          t.value === i.value &&
                          t.axisType === i.axisType &&
                          t.axisId === i.axisId &&
                          r.length === a.length),
                          n &&
                            _(r, function(t, e) {
                              var i = a[e];
                              n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex;
                            });
                      });
                }),
              (this._lastDataByCoordSys = t),
              !!n
            );
          },
          _hide: function(t) {
            (this._lastDataByCoordSys = null), t({ type: 'hideTip', from: this.uid });
          },
          dispose: function(t, e) {
            a.node || (this._tooltipContent.dispose(), p.unregister('itemTooltip', e));
          },
        });
      function M(t) {
        var e = t.pop();
        while (t.length) {
          var n = t.pop();
          n &&
            (f.isInstance(n) && (n = n.get('tooltip', !0)),
            'string' === typeof n && (n = { formatter: n }),
            (e = new f(n, e, e.ecModel)));
        }
        return e;
      }
      function T(t, e) {
        return t.dispatchAction || r.bind(e.dispatchAction, e);
      }
      function C(t, e, n, i, r, a, o) {
        var s = n.getOuterSize(),
          l = s.width,
          u = s.height;
        return (
          null != a && (t + l + a > i ? (t -= l + a) : (t += a)),
          null != o && (e + u + o > r ? (e -= u + o) : (e += o)),
          [t, e]
        );
      }
      function I(t, e, n, i, r) {
        var a = n.getOuterSize(),
          o = a.width,
          s = a.height;
        return (
          (t = Math.min(t + o, i) - o),
          (e = Math.min(e + s, r) - s),
          (t = Math.max(t, 0)),
          (e = Math.max(e, 0)),
          [t, e]
        );
      }
      function k(t, e, n) {
        var i = n[0],
          r = n[1],
          a = 5,
          o = 0,
          s = 0,
          l = e.width,
          u = e.height;
        switch (t) {
          case 'inside':
            (o = e.x + l / 2 - i / 2), (s = e.y + u / 2 - r / 2);
            break;
          case 'top':
            (o = e.x + l / 2 - i / 2), (s = e.y - r - a);
            break;
          case 'bottom':
            (o = e.x + l / 2 - i / 2), (s = e.y + u + a);
            break;
          case 'left':
            (o = e.x - i - a), (s = e.y + u / 2 - r / 2);
            break;
          case 'right':
            (o = e.x + l + a), (s = e.y + u / 2 - r / 2);
        }
        return [o, s];
      }
      function A(t) {
        return 'center' === t || 'middle' === t;
      }
      t.exports = S;
    },
    Qxkt: function(t, e, n) {
      var i = n('bYtY'),
        r = n('ItGF'),
        a = n('4NO4'),
        o = a.makeInner,
        s = n('Yl7c'),
        l = s.enableClassExtend,
        u = s.enableClassCheck,
        c = n('OQFs'),
        h = n('m9t5'),
        d = n('/iHx'),
        f = n('VR9l'),
        p = i.mixin,
        g = o();
      function v(t, e, n) {
        (this.parentModel = e), (this.ecModel = n), (this.option = t);
      }
      function m(t, e, n) {
        for (var i = 0; i < e.length; i++)
          if (e[i] && ((t = t && 'object' === typeof t ? t[e[i]] : null), null == t)) break;
        return null == t && n && (t = n.get(e)), t;
      }
      function y(t, e) {
        var n = g(t).getParent;
        return n ? n.call(t, e) : t.parentModel;
      }
      (v.prototype = {
        constructor: v,
        init: null,
        mergeOption: function(t) {
          i.merge(this.option, t, !0);
        },
        get: function(t, e) {
          return null == t ? this.option : m(this.option, this.parsePath(t), !e && y(this, t));
        },
        getShallow: function(t, e) {
          var n = this.option,
            i = null == n ? n : n[t],
            r = !e && y(this, t);
          return null == i && r && (i = r.getShallow(t)), i;
        },
        getModel: function(t, e) {
          var n,
            i = null == t ? this.option : m(this.option, (t = this.parsePath(t)));
          return (e = e || ((n = y(this, t)) && n.getModel(t))), new v(i, e, this.ecModel);
        },
        isEmpty: function() {
          return null == this.option;
        },
        restoreData: function() {},
        clone: function() {
          var t = this.constructor;
          return new t(i.clone(this.option));
        },
        setReadOnly: function(t) {},
        parsePath: function(t) {
          return 'string' === typeof t && (t = t.split('.')), t;
        },
        customizeGetParent: function(t) {
          g(this).getParent = t;
        },
        isAnimationEnabled: function() {
          if (!r.node) {
            if (null != this.option.animation) return !!this.option.animation;
            if (this.parentModel) return this.parentModel.isAnimationEnabled();
          }
        },
      }),
        l(v),
        u(v),
        p(v, c),
        p(v, h),
        p(v, d),
        p(v, f);
      var x = v;
      t.exports = x;
    },
    RDYZ: function(t, e, n) {
      var i = n('dMvE');
      function r(t) {
        (this._target = t.target),
          (this._life = t.life || 1e3),
          (this._delay = t.delay || 0),
          (this._initialized = !1),
          (this.loop = null != t.loop && t.loop),
          (this.gap = t.gap || 0),
          (this.easing = t.easing || 'Linear'),
          (this.onframe = t.onframe),
          (this.ondestroy = t.ondestroy),
          (this.onrestart = t.onrestart),
          (this._pausedTime = 0),
          (this._paused = !1);
      }
      r.prototype = {
        constructor: r,
        step: function(t, e) {
          if (
            (this._initialized || ((this._startTime = t + this._delay), (this._initialized = !0)),
            this._paused)
          )
            this._pausedTime += e;
          else {
            var n = (t - this._startTime - this._pausedTime) / this._life;
            if (!(n < 0)) {
              n = Math.min(n, 1);
              var r = this.easing,
                a = 'string' === typeof r ? i[r] : r,
                o = 'function' === typeof a ? a(n) : n;
              return (
                this.fire('frame', o),
                1 === n
                  ? this.loop
                    ? (this.restart(t), 'restart')
                    : ((this._needsRemove = !0), 'destroy')
                  : null
              );
            }
          }
        },
        restart: function(t) {
          var e = (t - this._startTime - this._pausedTime) % this._life;
          (this._startTime = t - e + this.gap), (this._pausedTime = 0), (this._needsRemove = !1);
        },
        fire: function(t, e) {
          (t = 'on' + t), this[t] && this[t](this._target, e);
        },
        pause: function() {
          this._paused = !0;
        },
        resume: function() {
          this._paused = !1;
        },
      };
      var a = r;
      t.exports = a;
    },
    RXMa: function(t, e, n) {
      var i = n('y+Vt'),
        r = i.extend({
          type: 'ring',
          shape: { cx: 0, cy: 0, r: 0, r0: 0 },
          buildPath: function(t, e) {
            var n = e.cx,
              i = e.cy,
              r = 2 * Math.PI;
            t.moveTo(n + e.r, i),
              t.arc(n, i, e.r, 0, r, !1),
              t.moveTo(n + e.r0, i),
              t.arc(n, i, e.r0, 0, r, !0);
          },
        });
      t.exports = r;
    },
    RlCK: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY');
      function a(t, e, n) {
        var i,
          a = {},
          o = 'toggleSelected' === t;
        return (
          n.eachComponent('legend', function(n) {
            o && null != i
              ? n[i ? 'select' : 'unSelect'](e.name)
              : 'allSelect' === t || 'inverseSelect' === t
              ? n[t]()
              : (n[t](e.name), (i = n.isSelected(e.name)));
            var s = n.getData();
            r.each(s, function(t) {
              var e = t.get('name');
              if ('\n' !== e && '' !== e) {
                var i = n.isSelected(e);
                a.hasOwnProperty(e) ? (a[e] = a[e] && i) : (a[e] = i);
              }
            });
          }),
          'allSelect' === t || 'inverseSelect' === t
            ? { selected: a }
            : { name: e.name, selected: a }
        );
      }
      i.registerAction('legendToggleSelect', 'legendselectchanged', r.curry(a, 'toggleSelected')),
        i.registerAction('legendAllSelect', 'legendselectall', r.curry(a, 'allSelect')),
        i.registerAction('legendInverseSelect', 'legendinverseselect', r.curry(a, 'inverseSelect')),
        i.registerAction('legendSelect', 'legendselected', r.curry(a, 'select')),
        i.registerAction('legendUnSelect', 'legendunselected', r.curry(a, 'unSelect'));
    },
    RnhZ: function(t, e, n) {
      var i = {
        './af': 'K/tc',
        './af.js': 'K/tc',
        './ar': 'jnO4',
        './ar-dz': 'o1bE',
        './ar-dz.js': 'o1bE',
        './ar-kw': 'Qj4J',
        './ar-kw.js': 'Qj4J',
        './ar-ly': 'HP3h',
        './ar-ly.js': 'HP3h',
        './ar-ma': 'CoRJ',
        './ar-ma.js': 'CoRJ',
        './ar-sa': 'gjCT',
        './ar-sa.js': 'gjCT',
        './ar-tn': 'bYM6',
        './ar-tn.js': 'bYM6',
        './ar.js': 'jnO4',
        './az': 'SFxW',
        './az.js': 'SFxW',
        './be': 'H8ED',
        './be.js': 'H8ED',
        './bg': 'hKrs',
        './bg.js': 'hKrs',
        './bm': 'p/rL',
        './bm.js': 'p/rL',
        './bn': 'kEOa',
        './bn-bd': 'loYQ',
        './bn-bd.js': 'loYQ',
        './bn.js': 'kEOa',
        './bo': '0mo+',
        './bo.js': '0mo+',
        './br': 'aIdf',
        './br.js': 'aIdf',
        './bs': 'JVSJ',
        './bs.js': 'JVSJ',
        './ca': '1xZ4',
        './ca.js': '1xZ4',
        './cs': 'PA2r',
        './cs.js': 'PA2r',
        './cv': 'A+xa',
        './cv.js': 'A+xa',
        './cy': 'l5ep',
        './cy.js': 'l5ep',
        './da': 'DxQv',
        './da.js': 'DxQv',
        './de': 'tGlX',
        './de-at': 's+uk',
        './de-at.js': 's+uk',
        './de-ch': 'u3GI',
        './de-ch.js': 'u3GI',
        './de.js': 'tGlX',
        './dv': 'WYrj',
        './dv.js': 'WYrj',
        './el': 'jUeY',
        './el.js': 'jUeY',
        './en-au': 'Dmvi',
        './en-au.js': 'Dmvi',
        './en-ca': 'OIYi',
        './en-ca.js': 'OIYi',
        './en-gb': 'Oaa7',
        './en-gb.js': 'Oaa7',
        './en-ie': '4dOw',
        './en-ie.js': '4dOw',
        './en-il': 'czMo',
        './en-il.js': 'czMo',
        './en-in': '7C5Q',
        './en-in.js': '7C5Q',
        './en-nz': 'b1Dy',
        './en-nz.js': 'b1Dy',
        './en-sg': 't+mt',
        './en-sg.js': 't+mt',
        './eo': 'Zduo',
        './eo.js': 'Zduo',
        './es': 'iYuL',
        './es-do': 'CjzT',
        './es-do.js': 'CjzT',
        './es-mx': 'tbfe',
        './es-mx.js': 'tbfe',
        './es-us': 'Vclq',
        './es-us.js': 'Vclq',
        './es.js': 'iYuL',
        './et': '7BjC',
        './et.js': '7BjC',
        './eu': 'D/JM',
        './eu.js': 'D/JM',
        './fa': 'jfSC',
        './fa.js': 'jfSC',
        './fi': 'gekB',
        './fi.js': 'gekB',
        './fil': '1ppg',
        './fil.js': '1ppg',
        './fo': 'ByF4',
        './fo.js': 'ByF4',
        './fr': 'nyYc',
        './fr-ca': '2fjn',
        './fr-ca.js': '2fjn',
        './fr-ch': 'Dkky',
        './fr-ch.js': 'Dkky',
        './fr.js': 'nyYc',
        './fy': 'cRix',
        './fy.js': 'cRix',
        './ga': 'USCx',
        './ga.js': 'USCx',
        './gd': '9rRi',
        './gd.js': '9rRi',
        './gl': 'iEDd',
        './gl.js': 'iEDd',
        './gom-deva': 'qvJo',
        './gom-deva.js': 'qvJo',
        './gom-latn': 'DKr+',
        './gom-latn.js': 'DKr+',
        './gu': '4MV3',
        './gu.js': '4MV3',
        './he': 'x6pH',
        './he.js': 'x6pH',
        './hi': '3E1r',
        './hi.js': '3E1r',
        './hr': 'S6ln',
        './hr.js': 'S6ln',
        './hu': 'WxRl',
        './hu.js': 'WxRl',
        './hy-am': '1rYy',
        './hy-am.js': '1rYy',
        './id': 'UDhR',
        './id.js': 'UDhR',
        './is': 'BVg3',
        './is.js': 'BVg3',
        './it': 'bpih',
        './it-ch': 'bxKX',
        './it-ch.js': 'bxKX',
        './it.js': 'bpih',
        './ja': 'B55N',
        './ja.js': 'B55N',
        './jv': 'tUCv',
        './jv.js': 'tUCv',
        './ka': 'IBtZ',
        './ka.js': 'IBtZ',
        './kk': 'bXm7',
        './kk.js': 'bXm7',
        './km': '6B0Y',
        './km.js': '6B0Y',
        './kn': 'PpIw',
        './kn.js': 'PpIw',
        './ko': 'Ivi+',
        './ko.js': 'Ivi+',
        './ku': 'JCF/',
        './ku.js': 'JCF/',
        './ky': 'lgnt',
        './ky.js': 'lgnt',
        './lb': 'RAwQ',
        './lb.js': 'RAwQ',
        './lo': 'sp3z',
        './lo.js': 'sp3z',
        './lt': 'JvlW',
        './lt.js': 'JvlW',
        './lv': 'uXwI',
        './lv.js': 'uXwI',
        './me': 'KTz0',
        './me.js': 'KTz0',
        './mi': 'aIsn',
        './mi.js': 'aIsn',
        './mk': 'aQkU',
        './mk.js': 'aQkU',
        './ml': 'AvvY',
        './ml.js': 'AvvY',
        './mn': 'lYtQ',
        './mn.js': 'lYtQ',
        './mr': 'Ob0Z',
        './mr.js': 'Ob0Z',
        './ms': '6+QB',
        './ms-my': 'ZAMP',
        './ms-my.js': 'ZAMP',
        './ms.js': '6+QB',
        './mt': 'G0Uy',
        './mt.js': 'G0Uy',
        './my': 'honF',
        './my.js': 'honF',
        './nb': 'bOMt',
        './nb.js': 'bOMt',
        './ne': 'OjkT',
        './ne.js': 'OjkT',
        './nl': '+s0g',
        './nl-be': '2ykv',
        './nl-be.js': '2ykv',
        './nl.js': '+s0g',
        './nn': 'uEye',
        './nn.js': 'uEye',
        './oc-lnc': 'Fnuy',
        './oc-lnc.js': 'Fnuy',
        './pa-in': '8/+R',
        './pa-in.js': '8/+R',
        './pl': 'jVdC',
        './pl.js': 'jVdC',
        './pt': '8mBD',
        './pt-br': '0tRk',
        './pt-br.js': '0tRk',
        './pt.js': '8mBD',
        './ro': 'lyxo',
        './ro.js': 'lyxo',
        './ru': 'lXzo',
        './ru.js': 'lXzo',
        './sd': 'Z4QM',
        './sd.js': 'Z4QM',
        './se': '//9w',
        './se.js': '//9w',
        './si': '7aV9',
        './si.js': '7aV9',
        './sk': 'e+ae',
        './sk.js': 'e+ae',
        './sl': 'gVVK',
        './sl.js': 'gVVK',
        './sq': 'yPMs',
        './sq.js': 'yPMs',
        './sr': 'zx6S',
        './sr-cyrl': 'E+lV',
        './sr-cyrl.js': 'E+lV',
        './sr.js': 'zx6S',
        './ss': 'Ur1D',
        './ss.js': 'Ur1D',
        './sv': 'X709',
        './sv.js': 'X709',
        './sw': 'dNwA',
        './sw.js': 'dNwA',
        './ta': 'PeUW',
        './ta.js': 'PeUW',
        './te': 'XLvN',
        './te.js': 'XLvN',
        './tet': 'V2x9',
        './tet.js': 'V2x9',
        './tg': 'Oxv6',
        './tg.js': 'Oxv6',
        './th': 'EOgW',
        './th.js': 'EOgW',
        './tk': 'Wv91',
        './tk.js': 'Wv91',
        './tl-ph': 'Dzi0',
        './tl-ph.js': 'Dzi0',
        './tlh': 'z3Vd',
        './tlh.js': 'z3Vd',
        './tr': 'DoHr',
        './tr.js': 'DoHr',
        './tzl': 'z1FC',
        './tzl.js': 'z1FC',
        './tzm': 'wQk9',
        './tzm-latn': 'tT3J',
        './tzm-latn.js': 'tT3J',
        './tzm.js': 'wQk9',
        './ug-cn': 'YRex',
        './ug-cn.js': 'YRex',
        './uk': 'raLr',
        './uk.js': 'raLr',
        './ur': 'UpQW',
        './ur.js': 'UpQW',
        './uz': 'Loxo',
        './uz-latn': 'AQ68',
        './uz-latn.js': 'AQ68',
        './uz.js': 'Loxo',
        './vi': 'KSF8',
        './vi.js': 'KSF8',
        './x-pseudo': '/X5v',
        './x-pseudo.js': '/X5v',
        './yo': 'fzPg',
        './yo.js': 'fzPg',
        './zh-cn': 'XDpg',
        './zh-cn.js': 'XDpg',
        './zh-hk': 'SatO',
        './zh-hk.js': 'SatO',
        './zh-mo': 'OmwH',
        './zh-mo.js': 'OmwH',
        './zh-tw': 'kOpN',
        './zh-tw.js': 'kOpN',
      };
      function r(t) {
        var e = a(t);
        return n(e);
      }
      function a(t) {
        if (!n.o(i, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return i[t];
      }
      (r.keys = function() {
        return Object.keys(i);
      }),
        (r.resolve = a),
        (t.exports = r),
        (r.id = 'RnhZ');
    },
    SKnc: function(t, e, n) {
      var i = n('bYtY'),
        r = n('QuXc'),
        a = function(t, e, n, i, a, o) {
          (this.x = null == t ? 0 : t),
            (this.y = null == e ? 0 : e),
            (this.x2 = null == n ? 1 : n),
            (this.y2 = null == i ? 0 : i),
            (this.type = 'linear'),
            (this.global = o || !1),
            r.call(this, a);
        };
      (a.prototype = { constructor: a }), i.inherits(a, r);
      var o = a;
      t.exports = o;
    },
    'SKx+': function(t, e, n) {
      var i = n('ProS'),
        r = i.extendComponentModel({
          type: 'axisPointer',
          coordSysAxesInfo: null,
          defaultOption: {
            show: 'auto',
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: 'line',
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: { color: '#aaa', width: 1, type: 'solid' },
            shadowStyle: { color: 'rgba(150,150,150,0.3)' },
            label: {
              show: !0,
              formatter: null,
              precision: 'auto',
              margin: 3,
              color: '#fff',
              padding: [5, 7, 5, 7],
              backgroundColor: 'auto',
              borderColor: null,
              borderWidth: 0,
              shadowBlur: 3,
              shadowColor: '#aaa',
            },
            handle: {
              show: !1,
              icon:
                'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
              size: 45,
              margin: 50,
              color: '#333',
              shadowBlur: 3,
              shadowColor: '#aaa',
              shadowOffsetX: 0,
              shadowOffsetY: 2,
              throttle: 40,
            },
          },
        }),
        a = r;
      t.exports = a;
    },
    SMc4: function(t, e, n) {
      var i = n('bYtY'),
        r = n('bLfw'),
        a = n('nkfE'),
        o = n('ICMv'),
        s = r.extend({
          type: 'cartesian2dAxis',
          axis: null,
          init: function() {
            s.superApply(this, 'init', arguments), this.resetRange();
          },
          mergeOption: function() {
            s.superApply(this, 'mergeOption', arguments), this.resetRange();
          },
          restoreData: function() {
            s.superApply(this, 'restoreData', arguments), this.resetRange();
          },
          getCoordSysModel: function() {
            return this.ecModel.queryComponents({
              mainType: 'grid',
              index: this.option.gridIndex,
              id: this.option.gridId,
            })[0];
          },
        });
      function l(t, e) {
        return e.type || (e.data ? 'category' : 'value');
      }
      i.merge(s.prototype, o);
      var u = { offset: 0 };
      a('x', s, l, u), a('y', s, l, u);
      var c = s;
      t.exports = c;
    },
    SRve: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
            {
              tag: 'path',
              attrs: { d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' },
            },
            {
              tag: 'path',
              attrs: { d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z' },
            },
          ],
        },
        name: 'plus',
        theme: 'outlined',
      };
      e.default = i;
    },
    SUKs: function(t, e, n) {
      var i = n('LPTA'),
        r = i.debugMode,
        a = function() {};
      1 === r && (a = console.error);
      var o = a;
      t.exports = o;
    },
    SgGq: function(t, e, n) {
      var i = n('bYtY'),
        r = n('H6uX'),
        a = n('YH21'),
        o = n('pP6R');
      function s(t) {
        this.pointerChecker, (this._zr = t), (this._opt = {});
        var e = i.bind,
          n = e(l, this),
          a = e(u, this),
          o = e(c, this),
          s = e(h, this),
          f = e(d, this);
        r.call(this),
          (this.setPointerChecker = function(t) {
            this.pointerChecker = t;
          }),
          (this.enable = function(e, r) {
            this.disable(),
              (this._opt = i.defaults(i.clone(r) || {}, {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !1,
                preventDefaultMouseMove: !0,
              })),
              null == e && (e = !0),
              (!0 !== e && 'move' !== e && 'pan' !== e) ||
                (t.on('mousedown', n), t.on('mousemove', a), t.on('mouseup', o)),
              (!0 !== e && 'scale' !== e && 'zoom' !== e) ||
                (t.on('mousewheel', s), t.on('pinch', f));
          }),
          (this.disable = function() {
            t.off('mousedown', n),
              t.off('mousemove', a),
              t.off('mouseup', o),
              t.off('mousewheel', s),
              t.off('pinch', f);
          }),
          (this.dispose = this.disable),
          (this.isDragging = function() {
            return this._dragging;
          }),
          (this.isPinching = function() {
            return this._pinching;
          });
      }
      function l(t) {
        if (!(a.isMiddleOrRightButtonOnMouseUpDown(t) || (t.target && t.target.draggable))) {
          var e = t.offsetX,
            n = t.offsetY;
          this.pointerChecker &&
            this.pointerChecker(t, e, n) &&
            ((this._x = e), (this._y = n), (this._dragging = !0));
        }
      }
      function u(t) {
        if (
          this._dragging &&
          g('moveOnMouseMove', t, this._opt) &&
          'pinch' !== t.gestureEvent &&
          !o.isTaken(this._zr, 'globalPan')
        ) {
          var e = t.offsetX,
            n = t.offsetY,
            i = this._x,
            r = this._y,
            s = e - i,
            l = n - r;
          (this._x = e),
            (this._y = n),
            this._opt.preventDefaultMouseMove && a.stop(t.event),
            p(this, 'pan', 'moveOnMouseMove', t, {
              dx: s,
              dy: l,
              oldX: i,
              oldY: r,
              newX: e,
              newY: n,
            });
        }
      }
      function c(t) {
        a.isMiddleOrRightButtonOnMouseUpDown(t) || (this._dragging = !1);
      }
      function h(t) {
        var e = g('zoomOnMouseWheel', t, this._opt),
          n = g('moveOnMouseWheel', t, this._opt),
          i = t.wheelDelta,
          r = Math.abs(i),
          a = t.offsetX,
          o = t.offsetY;
        if (0 !== i && (e || n)) {
          if (e) {
            var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1,
              l = i > 0 ? s : 1 / s;
            f(this, 'zoom', 'zoomOnMouseWheel', t, { scale: l, originX: a, originY: o });
          }
          if (n) {
            var u = Math.abs(i),
              c = (i > 0 ? 1 : -1) * (u > 3 ? 0.4 : u > 1 ? 0.15 : 0.05);
            f(this, 'scrollMove', 'moveOnMouseWheel', t, {
              scrollDelta: c,
              originX: a,
              originY: o,
            });
          }
        }
      }
      function d(t) {
        if (!o.isTaken(this._zr, 'globalPan')) {
          var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
          f(this, 'zoom', null, t, { scale: e, originX: t.pinchX, originY: t.pinchY });
        }
      }
      function f(t, e, n, i, r) {
        t.pointerChecker &&
          t.pointerChecker(i, r.originX, r.originY) &&
          (a.stop(i.event), p(t, e, n, i, r));
      }
      function p(t, e, n, r, a) {
        (a.isAvailableBehavior = i.bind(g, null, n, r)), t.trigger(e, a);
      }
      function g(t, e, n) {
        var r = n[t];
        return !t || (r && (!i.isString(r) || e.event[r + 'Key']));
      }
      i.mixin(s, r);
      var v = s;
      t.exports = v;
    },
    Sj9i: function(t, e, n) {
      var i = n('QBsz'),
        r = i.create,
        a = i.distSquare,
        o = Math.pow,
        s = Math.sqrt,
        l = 1e-8,
        u = 1e-4,
        c = s(3),
        h = 1 / 3,
        d = r(),
        f = r(),
        p = r();
      function g(t) {
        return t > -l && t < l;
      }
      function v(t) {
        return t > l || t < -l;
      }
      function m(t, e, n, i, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
      }
      function y(t, e, n, i, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
      }
      function x(t, e, n, i, r, a) {
        var l = i + 3 * (e - n) - t,
          u = 3 * (n - 2 * e + t),
          d = 3 * (e - t),
          f = t - r,
          p = u * u - 3 * l * d,
          v = u * d - 9 * l * f,
          m = d * d - 3 * u * f,
          y = 0;
        if (g(p) && g(v))
          if (g(u)) a[0] = 0;
          else {
            var x = -d / u;
            x >= 0 && x <= 1 && (a[y++] = x);
          }
        else {
          var _ = v * v - 4 * p * m;
          if (g(_)) {
            var b = v / p,
              w = ((x = -u / l + b), -b / 2);
            x >= 0 && x <= 1 && (a[y++] = x), w >= 0 && w <= 1 && (a[y++] = w);
          } else if (_ > 0) {
            var S = s(_),
              M = p * u + 1.5 * l * (-v + S),
              T = p * u + 1.5 * l * (-v - S);
            (M = M < 0 ? -o(-M, h) : o(M, h)), (T = T < 0 ? -o(-T, h) : o(T, h));
            x = (-u - (M + T)) / (3 * l);
            x >= 0 && x <= 1 && (a[y++] = x);
          } else {
            var C = (2 * p * u - 3 * l * v) / (2 * s(p * p * p)),
              I = Math.acos(C) / 3,
              k = s(p),
              A = Math.cos(I),
              D =
                ((x = (-u - 2 * k * A) / (3 * l)),
                (w = (-u + k * (A + c * Math.sin(I))) / (3 * l)),
                (-u + k * (A - c * Math.sin(I))) / (3 * l));
            x >= 0 && x <= 1 && (a[y++] = x),
              w >= 0 && w <= 1 && (a[y++] = w),
              D >= 0 && D <= 1 && (a[y++] = D);
          }
        }
        return y;
      }
      function _(t, e, n, i, r) {
        var a = 6 * n - 12 * e + 6 * t,
          o = 9 * e + 3 * i - 3 * t - 9 * n,
          l = 3 * e - 3 * t,
          u = 0;
        if (g(o)) {
          if (v(a)) {
            var c = -l / a;
            c >= 0 && c <= 1 && (r[u++] = c);
          }
        } else {
          var h = a * a - 4 * o * l;
          if (g(h)) r[0] = -a / (2 * o);
          else if (h > 0) {
            var d = s(h),
              f = ((c = (-a + d) / (2 * o)), (-a - d) / (2 * o));
            c >= 0 && c <= 1 && (r[u++] = c), f >= 0 && f <= 1 && (r[u++] = f);
          }
        }
        return u;
      }
      function b(t, e, n, i, r, a) {
        var o = (e - t) * r + t,
          s = (n - e) * r + e,
          l = (i - n) * r + n,
          u = (s - o) * r + o,
          c = (l - s) * r + s,
          h = (c - u) * r + u;
        (a[0] = t),
          (a[1] = o),
          (a[2] = u),
          (a[3] = h),
          (a[4] = h),
          (a[5] = c),
          (a[6] = l),
          (a[7] = i);
      }
      function w(t, e, n, i, r, o, l, c, h, g, v) {
        var y,
          x,
          _,
          b,
          w,
          S = 0.005,
          M = 1 / 0;
        (d[0] = h), (d[1] = g);
        for (var T = 0; T < 1; T += 0.05)
          (f[0] = m(t, n, r, l, T)),
            (f[1] = m(e, i, o, c, T)),
            (b = a(d, f)),
            b < M && ((y = T), (M = b));
        M = 1 / 0;
        for (var C = 0; C < 32; C++) {
          if (S < u) break;
          (x = y - S),
            (_ = y + S),
            (f[0] = m(t, n, r, l, x)),
            (f[1] = m(e, i, o, c, x)),
            (b = a(f, d)),
            x >= 0 && b < M
              ? ((y = x), (M = b))
              : ((p[0] = m(t, n, r, l, _)),
                (p[1] = m(e, i, o, c, _)),
                (w = a(p, d)),
                _ <= 1 && w < M ? ((y = _), (M = w)) : (S *= 0.5));
        }
        return v && ((v[0] = m(t, n, r, l, y)), (v[1] = m(e, i, o, c, y))), s(M);
      }
      function S(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n;
      }
      function M(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e));
      }
      function T(t, e, n, i, r) {
        var a = t - 2 * e + n,
          o = 2 * (e - t),
          l = t - i,
          u = 0;
        if (g(a)) {
          if (v(o)) {
            var c = -l / o;
            c >= 0 && c <= 1 && (r[u++] = c);
          }
        } else {
          var h = o * o - 4 * a * l;
          if (g(h)) {
            c = -o / (2 * a);
            c >= 0 && c <= 1 && (r[u++] = c);
          } else if (h > 0) {
            var d = s(h),
              f = ((c = (-o + d) / (2 * a)), (-o - d) / (2 * a));
            c >= 0 && c <= 1 && (r[u++] = c), f >= 0 && f <= 1 && (r[u++] = f);
          }
        }
        return u;
      }
      function C(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? 0.5 : (t - e) / i;
      }
      function I(t, e, n, i, r) {
        var a = (e - t) * i + t,
          o = (n - e) * i + e,
          s = (o - a) * i + a;
        (r[0] = t), (r[1] = a), (r[2] = s), (r[3] = s), (r[4] = o), (r[5] = n);
      }
      function k(t, e, n, i, r, o, l, c, h) {
        var g,
          v = 0.005,
          m = 1 / 0;
        (d[0] = l), (d[1] = c);
        for (var y = 0; y < 1; y += 0.05) {
          (f[0] = S(t, n, r, y)), (f[1] = S(e, i, o, y));
          var x = a(d, f);
          x < m && ((g = y), (m = x));
        }
        m = 1 / 0;
        for (var _ = 0; _ < 32; _++) {
          if (v < u) break;
          var b = g - v,
            w = g + v;
          (f[0] = S(t, n, r, b)), (f[1] = S(e, i, o, b));
          x = a(f, d);
          if (b >= 0 && x < m) (g = b), (m = x);
          else {
            (p[0] = S(t, n, r, w)), (p[1] = S(e, i, o, w));
            var M = a(p, d);
            w <= 1 && M < m ? ((g = w), (m = M)) : (v *= 0.5);
          }
        }
        return h && ((h[0] = S(t, n, r, g)), (h[1] = S(e, i, o, g))), s(m);
      }
      (e.cubicAt = m),
        (e.cubicDerivativeAt = y),
        (e.cubicRootAt = x),
        (e.cubicExtrema = _),
        (e.cubicSubdivide = b),
        (e.cubicProjectPoint = w),
        (e.quadraticAt = S),
        (e.quadraticDerivativeAt = M),
        (e.quadraticRootAt = T),
        (e.quadraticExtremum = C),
        (e.quadraticSubdivide = I),
        (e.quadraticProjectPoint = k);
    },
    Sp2Z: function(t, e, n) {
      var i = n('3LNs'),
        r = n('/y7N'),
        a = n('AVZG'),
        o = n('Znkb'),
        s = i.extend({
          makeElOption: function(t, e, n, i, o) {
            var s = n.axis,
              c = s.grid,
              h = i.get('type'),
              d = l(c, s)
                .getOtherAxis(s)
                .getGlobalExtent(),
              f = s.toGlobalCoord(s.dataToCoord(e, !0));
            if (h && 'none' !== h) {
              var p = r.buildElStyle(i),
                g = u[h](s, f, d);
              (g.style = p), (t.graphicKey = g.type), (t.pointer = g);
            }
            var v = a.layout(c.model, n);
            r.buildCartesianSingleLabelElOption(e, t, v, n, i, o);
          },
          getHandleTransform: function(t, e, n) {
            var i = a.layout(e.axis.grid.model, e, { labelInside: !1 });
            return (
              (i.labelMargin = n.get('handle.margin')),
              {
                position: r.getTransformedPosition(e.axis, t, i),
                rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0),
              }
            );
          },
          updateHandleTransform: function(t, e, n, i) {
            var r = n.axis,
              a = r.grid,
              o = r.getGlobalExtent(!0),
              s = l(a, r)
                .getOtherAxis(r)
                .getGlobalExtent(),
              u = 'x' === r.dim ? 0 : 1,
              c = t.position;
            (c[u] += e[u]), (c[u] = Math.min(o[1], c[u])), (c[u] = Math.max(o[0], c[u]));
            var h = (s[1] + s[0]) / 2,
              d = [h, h];
            d[u] = c[u];
            var f = [{ verticalAlign: 'middle' }, { align: 'center' }];
            return { position: c, rotation: t.rotation, cursorPoint: d, tooltipOption: f[u] };
          },
        });
      function l(t, e) {
        var n = {};
        return (n[e.dim + 'AxisIndex'] = e.index), t.getCartesian(n);
      }
      var u = {
        line: function(t, e, n) {
          var i = r.makeLineShape([e, n[0]], [e, n[1]], c(t));
          return { type: 'Line', subPixelOptimize: !0, shape: i };
        },
        shadow: function(t, e, n) {
          var i = Math.max(1, t.getBandWidth()),
            a = n[1] - n[0];
          return { type: 'Rect', shape: r.makeRectShape([e - i / 2, n[0]], [i, a], c(t)) };
        },
      };
      function c(t) {
        return 'x' === t.dim ? 0 : 1;
      }
      o.registerAxisPointerClass('CartesianAxisPointer', s);
      var h = s;
      t.exports = h;
    },
    SqI9: function(t, e, n) {
      var i = n('y+Vt'),
        r = n('iXp4'),
        a = i.extend({
          type: 'sector',
          shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 },
          brush: r(i.prototype.brush),
          buildPath: function(t, e) {
            var n = e.cx,
              i = e.cy,
              r = Math.max(e.r0 || 0, 0),
              a = Math.max(e.r, 0),
              o = e.startAngle,
              s = e.endAngle,
              l = e.clockwise,
              u = Math.cos(o),
              c = Math.sin(o);
            t.moveTo(u * r + n, c * r + i),
              t.lineTo(u * a + n, c * a + i),
              t.arc(n, i, a, o, s, !l),
              t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i),
              0 !== r && t.arc(n, i, r, s, o, l),
              t.closePath();
          },
        });
      t.exports = a;
    },
    T4UG: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = n('ItGF'),
        o = n('7aKB'),
        s = o.formatTime,
        l = o.encodeHTML,
        u = o.addCommas,
        c = o.getTooltipMarker,
        h = n('4NO4'),
        d = n('bLfw'),
        f = n('5Hur'),
        p = n('OKJ2'),
        g = n('+TT/'),
        v = g.getLayoutParams,
        m = g.mergeLayoutParam,
        y = n('9H2F'),
        x = y.createTask,
        _ = n('D5nY'),
        b = _.prepareSource,
        w = _.getSource,
        S = n('KxfA'),
        M = S.retrieveRawValue,
        T = h.makeInner(),
        C = d.extend({
          type: 'series.__base__',
          seriesIndex: 0,
          coordinateSystem: null,
          defaultOption: null,
          legendVisualProvider: null,
          visualColorAccessPath: 'itemStyle.color',
          visualBorderColorAccessPath: 'itemStyle.borderColor',
          layoutMode: null,
          init: function(t, e, n, i) {
            (this.seriesIndex = this.componentIndex),
              (this.dataTask = x({ count: A, reset: D })),
              (this.dataTask.context = { model: this }),
              this.mergeDefaultAndTheme(t, n),
              b(this);
            var r = this.getInitialData(t, n);
            P(r, this),
              (this.dataTask.context.data = r),
              (T(this).dataBeforeProcessed = r),
              I(this);
          },
          mergeDefaultAndTheme: function(t, e) {
            var n = this.layoutMode,
              i = n ? v(t) : {},
              a = this.subType;
            d.hasClass(a) && (a += 'Series'),
              r.merge(t, e.getTheme().get(this.subType)),
              r.merge(t, this.getDefaultOption()),
              h.defaultEmphasis(t, 'label', ['show']),
              this.fillDataTextStyle(t.data),
              n && m(t, i, n);
          },
          mergeOption: function(t, e) {
            (t = r.merge(this.option, t, !0)), this.fillDataTextStyle(t.data);
            var n = this.layoutMode;
            n && m(this.option, t, n), b(this);
            var i = this.getInitialData(t, e);
            P(i, this),
              this.dataTask.dirty(),
              (this.dataTask.context.data = i),
              (T(this).dataBeforeProcessed = i),
              I(this);
          },
          fillDataTextStyle: function(t) {
            if (t && !r.isTypedArray(t))
              for (var e = ['show'], n = 0; n < t.length; n++)
                t[n] && t[n].label && h.defaultEmphasis(t[n], 'label', e);
          },
          getInitialData: function() {},
          appendData: function(t) {
            var e = this.getRawData();
            e.appendData(t.data);
          },
          getData: function(t) {
            var e = L(this);
            if (e) {
              var n = e.context.data;
              return null == t ? n : n.getLinkedData(t);
            }
            return T(this).data;
          },
          setData: function(t) {
            var e = L(this);
            if (e) {
              var n = e.context;
              n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()),
                (n.outputData = t),
                e !== this.dataTask && (n.data = t);
            }
            T(this).data = t;
          },
          getSource: function() {
            return w(this);
          },
          getRawData: function() {
            return T(this).dataBeforeProcessed;
          },
          getBaseAxis: function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis();
          },
          formatTooltip: function(t, e, n, i) {
            var a = this;
            i = i || 'html';
            var o = 'html' === i ? '<br/>' : '\n',
              d = 'richText' === i,
              f = {},
              p = 0;
            function g(n) {
              var o = r.reduce(
                  n,
                  function(t, e, n) {
                    var i = m.getDimensionInfo(n);
                    return t | (i && !1 !== i.tooltip && null != i.displayName);
                  },
                  0,
                ),
                h = [];
              function g(t, n) {
                var r = m.getDimensionInfo(n);
                if (r && !1 !== r.otherDims.tooltip) {
                  var g = r.type,
                    v = 'sub' + a.seriesIndex + 'at' + p,
                    y = c({ color: w, type: 'subItem', renderMode: i, markerId: v }),
                    x = 'string' === typeof y ? y : y.content,
                    _ =
                      (o ? x + l(r.displayName || '-') + ': ' : '') +
                      l(
                        'ordinal' === g
                          ? t + ''
                          : 'time' === g
                          ? e
                            ? ''
                            : s('yyyy/MM/dd hh:mm:ss', t)
                          : u(t),
                      );
                  _ && h.push(_), d && ((f[v] = w), ++p);
                }
              }
              y.length
                ? r.each(y, function(e) {
                    g(M(m, t, e), e);
                  })
                : r.each(n, g);
              var v = o ? (d ? '\n' : '<br/>') : '',
                x = v + h.join(v || ', ');
              return { renderMode: i, content: x, style: f };
            }
            function v(t) {
              return { renderMode: i, content: l(u(t)), style: f };
            }
            var m = this.getData(),
              y = m.mapDimension('defaultedTooltip', !0),
              x = y.length,
              _ = this.getRawValue(t),
              b = r.isArray(_),
              w = m.getItemVisual(t, 'color');
            r.isObject(w) && w.colorStops && (w = (w.colorStops[0] || {}).color),
              (w = w || 'transparent');
            var S = x > 1 || (b && !x) ? g(_) : v(x ? M(m, t, y[0]) : b ? _[0] : _),
              T = S.content,
              C = a.seriesIndex + 'at' + p,
              I = c({ color: w, type: 'item', renderMode: i, markerId: C });
            (f[C] = w), ++p;
            var k = m.getName(t),
              A = this.name;
            h.isNameSpecified(this) || (A = ''), (A = A ? l(A) + (e ? ': ' : o) : '');
            var D = 'string' === typeof I ? I : I.content,
              O = e ? D + A + T : A + D + (k ? l(k) + ': ' + T : T);
            return { html: O, markers: f };
          },
          isAnimationEnabled: function() {
            if (a.node) return !1;
            var t = this.getShallow('animation');
            return (
              t && this.getData().count() > this.getShallow('animationThreshold') && (t = !1), t
            );
          },
          restoreData: function() {
            this.dataTask.dirty();
          },
          getColorFromPalette: function(t, e, n) {
            var i = this.ecModel,
              r = f.getColorFromPalette.call(this, t, e, n);
            return r || (r = i.getColorFromPalette(t, e, n)), r;
          },
          coordDimToDataDim: function(t) {
            return this.getRawData().mapDimension(t, !0);
          },
          getProgressive: function() {
            return this.get('progressive');
          },
          getProgressiveThreshold: function() {
            return this.get('progressiveThreshold');
          },
          getAxisTooltipData: null,
          getTooltipPosition: null,
          pipeTask: null,
          preventIncremental: null,
          pipelineContext: null,
        });
      function I(t) {
        var e = t.name;
        h.isNameSpecified(t) || (t.name = k(t) || e);
      }
      function k(t) {
        var e = t.getRawData(),
          n = e.mapDimension('seriesName', !0),
          i = [];
        return (
          r.each(n, function(t) {
            var n = e.getDimensionInfo(t);
            n.displayName && i.push(n.displayName);
          }),
          i.join(' ')
        );
      }
      function A(t) {
        return t.model.getRawData().count();
      }
      function D(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), O;
      }
      function O(t, e) {
        e.outputData &&
          t.end > e.outputData.count() &&
          e.model.getRawData().cloneShallow(e.outputData);
      }
      function P(t, e) {
        r.each(t.CHANGABLE_METHODS, function(n) {
          t.wrapMethod(n, r.curry(E, e));
        });
      }
      function E(t) {
        var e = L(t);
        e && e.setOutputEnd(this.count());
      }
      function L(t) {
        var e = (t.ecModel || {}).scheduler,
          n = e && e.getPipeline(t.uid);
        if (n) {
          var i = n.currentTask;
          if (i) {
            var r = i.agentStubMap;
            r && (i = r.get(t.uid));
          }
          return i;
        }
      }
      r.mixin(C, p), r.mixin(C, f);
      var R = C;
      t.exports = R;
    },
    T6xi: function(t, e, n) {
      var i = n('YgsL'),
        r = n('nCxF');
      function a(t, e, n) {
        var a = e.points,
          o = e.smooth;
        if (a && a.length >= 2) {
          if (o && 'spline' !== o) {
            var s = r(a, o, n, e.smoothConstraint);
            t.moveTo(a[0][0], a[0][1]);
            for (var l = a.length, u = 0; u < (n ? l : l - 1); u++) {
              var c = s[2 * u],
                h = s[2 * u + 1],
                d = a[(u + 1) % l];
              t.bezierCurveTo(c[0], c[1], h[0], h[1], d[0], d[1]);
            }
          } else {
            'spline' === o && (a = i(a, n)), t.moveTo(a[0][0], a[0][1]);
            u = 1;
            for (var f = a.length; u < f; u++) t.lineTo(a[u][0], a[u][1]);
          }
          n && t.closePath();
        }
      }
      e.buildPath = a;
    },
    Tghj: function(t, e, n) {
      (function(t) {
        var n;
        'undefined' !== typeof window
          ? (n = window.__DEV__)
          : 'undefined' !== typeof t && (n = t.__DEV__),
          'undefined' === typeof n && (n = !0);
        var i = n;
        e.__DEV__ = i;
      }.call(this, n('yLpj')));
    },
    Tlm3: function(t, e, n) {},
    UOVi: function(t, e, n) {
      var i = n('bYtY'),
        r = n('7aKB'),
        a = ['x', 'y', 'z', 'radius', 'angle', 'single'],
        o = ['cartesian2d', 'polar', 'singleAxis'];
      function s(t) {
        return i.indexOf(o, t) >= 0;
      }
      function l(t, e) {
        t = t.slice();
        var n = i.map(t, r.capitalFirst);
        e = (e || []).slice();
        var a = i.map(e, r.capitalFirst);
        return function(r, o) {
          i.each(t, function(t, i) {
            for (var s = { name: t, capital: n[i] }, l = 0; l < e.length; l++) s[e[l]] = t + a[l];
            r.call(o, s);
          });
        };
      }
      var u = l(a, ['axisIndex', 'axis', 'index', 'id']);
      function c(t, e, n) {
        return function(n) {
          var i,
            s = { nodes: [], records: {} };
          if (
            (e(function(t) {
              s.records[t.name] = {};
            }),
            !n)
          )
            return s;
          o(n, s);
          do {
            (i = !1), t(l);
          } while (i);
          function l(t) {
            !r(t, s) && a(t, s) && (o(t, s), (i = !0));
          }
          return s;
        };
        function r(t, e) {
          return i.indexOf(e.nodes, t) >= 0;
        }
        function a(t, r) {
          var a = !1;
          return (
            e(function(e) {
              i.each(n(t, e) || [], function(t) {
                r.records[e.name][t] && (a = !0);
              });
            }),
            a
          );
        }
        function o(t, r) {
          r.nodes.push(t),
            e(function(e) {
              i.each(n(t, e) || [], function(t) {
                r.records[e.name][t] = !0;
              });
            });
        }
      }
      (e.isCoordSupported = s),
        (e.createNameEach = l),
        (e.eachAxisDim = u),
        (e.createLinkedNodesFinder = c);
    },
    VR9l: function(t, e, n) {
      var i = n('KCsZ'),
        r = i([
          ['fill', 'color'],
          ['stroke', 'borderColor'],
          ['lineWidth', 'borderWidth'],
          ['opacity'],
          ['shadowBlur'],
          ['shadowOffsetX'],
          ['shadowOffsetY'],
          ['shadowColor'],
          ['textPosition'],
          ['textAlign'],
        ]),
        a = {
          getItemStyle: function(t, e) {
            var n = r(this, t, e),
              i = this.getBorderLineDash();
            return i && (n.lineDash = i), n;
          },
          getBorderLineDash: function() {
            var t = this.get('borderType');
            return 'solid' === t || null == t ? null : 'dashed' === t ? [5, 5] : [1, 1];
          },
        };
      t.exports = a;
    },
    VXYp: function(t, e, n) {
      var i = n('bYtY'),
        r = n('SgGq'),
        a = n('iLNv'),
        o = '\0_ec_dataZoom_roams';
      function s(t, e) {
        var n = c(t),
          r = e.dataZoomId,
          o = e.coordId;
        i.each(n, function(t, n) {
          var a = t.dataZoomInfos;
          a[r] && i.indexOf(e.allCoordIds, o) < 0 && (delete a[r], t.count--);
        }),
          d(n);
        var s = n[o];
        s ||
          ((s = n[o] = { coordId: o, dataZoomInfos: {}, count: 0 }),
          (s.controller = h(t, s)),
          (s.dispatchAction = i.curry(f, t))),
          !s.dataZoomInfos[r] && s.count++,
          (s.dataZoomInfos[r] = e);
        var l = p(s.dataZoomInfos);
        s.controller.enable(l.controlType, l.opt),
          s.controller.setPointerChecker(e.containsPoint),
          a.createOrUpdate(s, 'dispatchAction', e.dataZoomModel.get('throttle', !0), 'fixRate');
      }
      function l(t, e) {
        var n = c(t);
        i.each(n, function(t) {
          t.controller.dispose();
          var n = t.dataZoomInfos;
          n[e] && (delete n[e], t.count--);
        }),
          d(n);
      }
      function u(t) {
        return t.type + '\0_' + t.id;
      }
      function c(t) {
        var e = t.getZr();
        return e[o] || (e[o] = {});
      }
      function h(t, e) {
        var n = new r(t.getZr());
        return (
          i.each(['pan', 'zoom', 'scrollMove'], function(t) {
            n.on(t, function(n) {
              var r = [];
              i.each(e.dataZoomInfos, function(i) {
                if (n.isAvailableBehavior(i.dataZoomModel.option)) {
                  var a = (i.getRange || {})[t],
                    o = a && a(e.controller, n);
                  !i.dataZoomModel.get('disabled', !0) &&
                    o &&
                    r.push({ dataZoomId: i.dataZoomId, start: o[0], end: o[1] });
                }
              }),
                r.length && e.dispatchAction(r);
            });
          }),
          n
        );
      }
      function d(t) {
        i.each(t, function(e, n) {
          e.count || (e.controller.dispose(), delete t[n]);
        });
      }
      function f(t, e) {
        t.dispatchAction({ type: 'dataZoom', batch: e });
      }
      function p(t) {
        var e,
          n = 'type_',
          r = { type_true: 2, type_move: 1, type_false: 0, type_undefined: -1 },
          a = !0;
        return (
          i.each(t, function(t) {
            var i = t.dataZoomModel,
              o = !i.get('disabled', !0) && (!i.get('zoomLock', !0) || 'move');
            r[n + o] > r[n + e] && (e = o), (a &= i.get('preventDefaultMouseMove', !0));
          }),
          {
            controlType: e,
            opt: {
              zoomOnMouseWheel: !0,
              moveOnMouseMove: !0,
              moveOnMouseWheel: !0,
              preventDefaultMouseMove: !!a,
            },
          }
        );
      }
      (e.register = s), (e.unregister = l), (e.generateCoordId = u);
    },
    Vi4m: function(t, e, n) {
      var i = n('bYtY');
      function r(t) {
        null != t && i.extend(this, t), (this.otherDims = {});
      }
      var a = r;
      t.exports = a;
    },
    VpOo: function(t, e) {
      function n(t, e) {
        var n,
          i,
          r,
          a,
          o,
          s = e.x,
          l = e.y,
          u = e.width,
          c = e.height,
          h = e.r;
        u < 0 && ((s += u), (u = -u)),
          c < 0 && ((l += c), (c = -c)),
          'number' === typeof h
            ? (n = i = r = a = h)
            : h instanceof Array
            ? 1 === h.length
              ? (n = i = r = a = h[0])
              : 2 === h.length
              ? ((n = r = h[0]), (i = a = h[1]))
              : 3 === h.length
              ? ((n = h[0]), (i = a = h[1]), (r = h[2]))
              : ((n = h[0]), (i = h[1]), (r = h[2]), (a = h[3]))
            : (n = i = r = a = 0),
          n + i > u && ((o = n + i), (n *= u / o), (i *= u / o)),
          r + a > u && ((o = r + a), (r *= u / o), (a *= u / o)),
          i + r > c && ((o = i + r), (i *= c / o), (r *= c / o)),
          n + a > c && ((o = n + a), (n *= c / o), (a *= c / o)),
          t.moveTo(s + n, l),
          t.lineTo(s + u - i, l),
          0 !== i && t.arc(s + u - i, l + i, i, -Math.PI / 2, 0),
          t.lineTo(s + u, l + c - r),
          0 !== r && t.arc(s + u - r, l + c - r, r, 0, Math.PI / 2),
          t.lineTo(s + a, l + c),
          0 !== a && t.arc(s + a, l + c - a, a, Math.PI / 2, Math.PI),
          t.lineTo(s, l + n),
          0 !== n && t.arc(s + n, l + n, n, Math.PI, 1.5 * Math.PI);
      }
      e.buildPath = n;
    },
    'WN+l': function(t, e, n) {
      var i = n('bYtY'),
        r = n('IwbS');
      function a(t, e, n, a) {
        var o = n.axis;
        if (!o.scale.isBlank()) {
          var s = n.getModel('splitArea'),
            l = s.getModel('areaStyle'),
            u = l.get('color'),
            c = a.coordinateSystem.getRect(),
            h = o.getTicksCoords({ tickModel: s, clamp: !0 });
          if (h.length) {
            var d = u.length,
              f = t.__splitAreaColors,
              p = i.createHashMap(),
              g = 0;
            if (f)
              for (var v = 0; v < h.length; v++) {
                var m = f.get(h[v].tickValue);
                if (null != m) {
                  g = (m + (d - 1) * v) % d;
                  break;
                }
              }
            var y = o.toGlobalCoord(h[0].coord),
              x = l.getAreaStyle();
            u = i.isArray(u) ? u : [u];
            for (v = 1; v < h.length; v++) {
              var _,
                b,
                w,
                S,
                M = o.toGlobalCoord(h[v].coord);
              o.isHorizontal()
                ? ((_ = y), (b = c.y), (w = M - _), (S = c.height), (y = _ + w))
                : ((_ = c.x), (b = y), (w = c.width), (S = M - b), (y = b + S));
              var T = h[v - 1].tickValue;
              null != T && p.set(T, g),
                e.add(
                  new r.Rect({
                    anid: null != T ? 'area_' + T : null,
                    shape: { x: _, y: b, width: w, height: S },
                    style: i.defaults({ fill: u[g] }, x),
                    silent: !0,
                  }),
                ),
                (g = (g + 1) % d);
            }
            t.__splitAreaColors = p;
          }
        }
      }
      function o(t) {
        t.__splitAreaColors = null;
      }
      (e.rectCoordAxisBuildSplitArea = a), (e.rectCoordAxisHandleRemove = o);
    },
    Wqna: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = r.isObject,
        o = r.each,
        s = r.map,
        l = r.indexOf,
        u = (r.retrieve, n('+TT/')),
        c = u.getLayoutRect,
        h = n('aX7z'),
        d = h.createScaleByModel,
        f = h.ifAxisCrossZero,
        p = h.niceScaleExtent,
        g = h.estimateLabelUnionRect,
        v = n('y+lR'),
        m = n('7AJT'),
        y = n('IDmD'),
        x = n('7hqr'),
        _ = x.getStackedDimension;
      function b(t, e, n) {
        return t.getCoordSysModel() === e;
      }
      function w(t, e, n) {
        (this._coordsMap = {}),
          (this._coordsList = []),
          (this._axesMap = {}),
          (this._axesList = []),
          this._initCartesian(t, e, n),
          (this.model = t);
      }
      n('jtI2');
      var S = w.prototype;
      function M(t, e, n, i) {
        n.getAxesOnZeroOf = function() {
          return r ? [r] : [];
        };
        var r,
          a = t[e],
          o = n.model,
          s = o.get('axisLine.onZero'),
          l = o.get('axisLine.onZeroAxisIndex');
        if (s) {
          if (null != l) T(a[l]) && (r = a[l]);
          else
            for (var u in a)
              if (a.hasOwnProperty(u) && T(a[u]) && !i[c(a[u])]) {
                r = a[u];
                break;
              }
          r && (i[c(r)] = !0);
        }
        function c(t) {
          return t.dim + '_' + t.index;
        }
      }
      function T(t) {
        return t && 'category' !== t.type && 'time' !== t.type && f(t);
      }
      function C(t, e) {
        var n = t.getExtent(),
          i = n[0] + n[1];
        (t.toGlobalCoord =
          'x' === t.dim
            ? function(t) {
                return t + e;
              }
            : function(t) {
                return i - t + e;
              }),
          (t.toLocalCoord =
            'x' === t.dim
              ? function(t) {
                  return t - e;
                }
              : function(t) {
                  return i - t + e;
                });
      }
      (S.type = 'grid'),
        (S.axisPointerEnabled = !0),
        (S.getRect = function() {
          return this._rect;
        }),
        (S.update = function(t, e) {
          var n = this._axesMap;
          this._updateScale(t, this.model),
            o(n.x, function(t) {
              p(t.scale, t.model);
            }),
            o(n.y, function(t) {
              p(t.scale, t.model);
            });
          var i = {};
          o(n.x, function(t) {
            M(n, 'y', t, i);
          }),
            o(n.y, function(t) {
              M(n, 'x', t, i);
            }),
            this.resize(this.model, e);
        }),
        (S.resize = function(t, e, n) {
          var i = c(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
          this._rect = i;
          var r = this._axesList;
          function a() {
            o(r, function(t) {
              var e = t.isHorizontal(),
                n = e ? [0, i.width] : [0, i.height],
                r = t.inverse ? 1 : 0;
              t.setExtent(n[r], n[1 - r]), C(t, e ? i.x : i.y);
            });
          }
          a(),
            !n &&
              t.get('containLabel') &&
              (o(r, function(t) {
                if (!t.model.get('axisLabel.inside')) {
                  var e = g(t);
                  if (e) {
                    var n = t.isHorizontal() ? 'height' : 'width',
                      r = t.model.get('axisLabel.margin');
                    (i[n] -= e[n] + r),
                      'top' === t.position
                        ? (i.y += e.height + r)
                        : 'left' === t.position && (i.x += e.width + r);
                  }
                }
              }),
              a());
        }),
        (S.getAxis = function(t, e) {
          var n = this._axesMap[t];
          if (null != n) {
            if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];
            return n[e];
          }
        }),
        (S.getAxes = function() {
          return this._axesList.slice();
        }),
        (S.getCartesian = function(t, e) {
          if (null != t && null != e) {
            var n = 'x' + t + 'y' + e;
            return this._coordsMap[n];
          }
          a(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
          for (var i = 0, r = this._coordsList; i < r.length; i++)
            if (r[i].getAxis('x').index === t || r[i].getAxis('y').index === e) return r[i];
        }),
        (S.getCartesians = function() {
          return this._coordsList.slice();
        }),
        (S.convertToPixel = function(t, e, n) {
          var i = this._findConvertTarget(t, e);
          return i.cartesian
            ? i.cartesian.dataToPoint(n)
            : i.axis
            ? i.axis.toGlobalCoord(i.axis.dataToCoord(n))
            : null;
        }),
        (S.convertFromPixel = function(t, e, n) {
          var i = this._findConvertTarget(t, e);
          return i.cartesian
            ? i.cartesian.pointToData(n)
            : i.axis
            ? i.axis.coordToData(i.axis.toLocalCoord(n))
            : null;
        }),
        (S._findConvertTarget = function(t, e) {
          var n,
            i,
            r = e.seriesModel,
            a = e.xAxisModel || (r && r.getReferringComponents('xAxis')[0]),
            o = e.yAxisModel || (r && r.getReferringComponents('yAxis')[0]),
            s = e.gridModel,
            u = this._coordsList;
          if (r) (n = r.coordinateSystem), l(u, n) < 0 && (n = null);
          else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);
          else if (a) i = this.getAxis('x', a.componentIndex);
          else if (o) i = this.getAxis('y', o.componentIndex);
          else if (s) {
            var c = s.coordinateSystem;
            c === this && (n = this._coordsList[0]);
          }
          return { cartesian: n, axis: i };
        }),
        (S.containPoint = function(t) {
          var e = this._coordsList[0];
          if (e) return e.containPoint(t);
        }),
        (S._initCartesian = function(t, e, n) {
          var i = { left: !1, right: !1, top: !1, bottom: !1 },
            r = { x: {}, y: {} },
            a = { x: 0, y: 0 };
          if (
            (e.eachComponent('xAxis', s('x'), this),
            e.eachComponent('yAxis', s('y'), this),
            !a.x || !a.y)
          )
            return (this._axesMap = {}), void (this._axesList = []);
          function s(n) {
            return function(o, s) {
              if (b(o, t, e)) {
                var l = o.get('position');
                'x' === n
                  ? 'top' !== l && 'bottom' !== l && (l = i.bottom ? 'top' : 'bottom')
                  : 'left' !== l && 'right' !== l && (l = i.left ? 'right' : 'left'),
                  (i[l] = !0);
                var u = new m(n, d(o), [0, 0], o.get('type'), l),
                  c = 'category' === u.type;
                (u.onBand = c && o.get('boundaryGap')),
                  (u.inverse = o.get('inverse')),
                  (o.axis = u),
                  (u.model = o),
                  (u.grid = this),
                  (u.index = s),
                  this._axesList.push(u),
                  (r[n][s] = u),
                  a[n]++;
              }
            };
          }
          (this._axesMap = r),
            o(
              r.x,
              function(e, n) {
                o(
                  r.y,
                  function(i, r) {
                    var a = 'x' + n + 'y' + r,
                      o = new v(a);
                    (o.grid = this),
                      (o.model = t),
                      (this._coordsMap[a] = o),
                      this._coordsList.push(o),
                      o.addAxis(e),
                      o.addAxis(i);
                  },
                  this,
                );
              },
              this,
            );
        }),
        (S._updateScale = function(t, e) {
          function n(t, e, n) {
            o(t.mapDimension(e.dim, !0), function(n) {
              e.scale.unionExtentFromData(t, _(t, n));
            });
          }
          o(this._axesList, function(t) {
            t.scale.setExtent(1 / 0, -1 / 0);
          }),
            t.eachSeries(function(i) {
              if (A(i)) {
                var r = k(i, t),
                  a = r[0],
                  o = r[1];
                if (!b(a, e, t) || !b(o, e, t)) return;
                var s = this.getCartesian(a.componentIndex, o.componentIndex),
                  l = i.getData(),
                  u = s.getAxis('x'),
                  c = s.getAxis('y');
                'list' === l.type && (n(l, u, i), n(l, c, i));
              }
            }, this);
        }),
        (S.getTooltipAxes = function(t) {
          var e = [],
            n = [];
          return (
            o(this.getCartesians(), function(i) {
              var r = null != t && 'auto' !== t ? i.getAxis(t) : i.getBaseAxis(),
                a = i.getOtherAxis(r);
              l(e, r) < 0 && e.push(r), l(n, a) < 0 && n.push(a);
            }),
            { baseAxes: e, otherAxes: n }
          );
        });
      var I = ['xAxis', 'yAxis'];
      function k(t, e) {
        return s(I, function(e) {
          var n = t.getReferringComponents(e)[0];
          return n;
        });
      }
      function A(t) {
        return 'cartesian2d' === t.get('coordinateSystem');
      }
      (w.create = function(t, e) {
        var n = [];
        return (
          t.eachComponent('grid', function(i, r) {
            var a = new w(i, t, e);
            (a.name = 'grid_' + r), a.resize(i, e, !0), (i.coordinateSystem = a), n.push(a);
          }),
          t.eachSeries(function(e) {
            if (A(e)) {
              var n = k(e, t),
                i = n[0],
                r = n[1],
                a = i.getCoordSysModel(),
                o = a.coordinateSystem;
              e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex);
            }
          }),
          n
        );
      }),
        (w.dimensions = w.prototype.dimensions = v.prototype.dimensions),
        y.register('cartesian2d', w);
      var D = w;
      t.exports = D;
    },
    Xmg4: function(t, e, n) {
      var i = n('bYtY'),
        r = n('LPTA'),
        a = r.devicePixelRatio,
        o = n('K2GJ'),
        s = n('3C/r');
      function l() {
        return !1;
      }
      function u(t, e, n) {
        var r = i.createCanvas(),
          a = e.getWidth(),
          o = e.getHeight(),
          s = r.style;
        return (
          s &&
            ((s.position = 'absolute'),
            (s.left = 0),
            (s.top = 0),
            (s.width = a + 'px'),
            (s.height = o + 'px'),
            r.setAttribute('data-zr-dom-id', t)),
          (r.width = a * n),
          (r.height = o * n),
          r
        );
      }
      var c = function(t, e, n) {
        var r;
        (n = n || a),
          'string' === typeof t ? (r = u(t, e, n)) : i.isObject(t) && ((r = t), (t = r.id)),
          (this.id = t),
          (this.dom = r);
        var o = r.style;
        o &&
          ((r.onselectstart = l),
          (o['-webkit-user-select'] = 'none'),
          (o['user-select'] = 'none'),
          (o['-webkit-touch-callout'] = 'none'),
          (o['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)'),
          (o['padding'] = 0),
          (o['margin'] = 0),
          (o['border-width'] = 0)),
          (this.domBack = null),
          (this.ctxBack = null),
          (this.painter = e),
          (this.config = null),
          (this.clearColor = 0),
          (this.motionBlur = !1),
          (this.lastFrameAlpha = 0.7),
          (this.dpr = n);
      };
      c.prototype = {
        constructor: c,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function() {
          return this.__endIndex - this.__startIndex;
        },
        initContext: function() {
          (this.ctx = this.dom.getContext('2d')), (this.ctx.dpr = this.dpr);
        },
        createBackBuffer: function() {
          var t = this.dpr;
          (this.domBack = u('back-' + this.id, this.painter, t)),
            (this.ctxBack = this.domBack.getContext('2d')),
            1 !== t && this.ctxBack.scale(t, t);
        },
        resize: function(t, e) {
          var n = this.dpr,
            i = this.dom,
            r = i.style,
            a = this.domBack;
          r && ((r.width = t + 'px'), (r.height = e + 'px')),
            (i.width = t * n),
            (i.height = e * n),
            a && ((a.width = t * n), (a.height = e * n), 1 !== n && this.ctxBack.scale(n, n));
        },
        clear: function(t, e) {
          var n,
            i = this.dom,
            r = this.ctx,
            a = i.width,
            l = i.height,
            u = ((e = e || this.clearColor), this.motionBlur && !t),
            c = this.lastFrameAlpha,
            h = this.dpr;
          (u &&
            (this.domBack || this.createBackBuffer(),
            (this.ctxBack.globalCompositeOperation = 'copy'),
            this.ctxBack.drawImage(i, 0, 0, a / h, l / h)),
          r.clearRect(0, 0, a, l),
          e && 'transparent' !== e) &&
            (e.colorStops
              ? ((n =
                  e.__canvasGradient || o.getGradient(r, e, { x: 0, y: 0, width: a, height: l })),
                (e.__canvasGradient = n))
              : e.image && (n = s.prototype.getCanvasPattern.call(e, r)),
            r.save(),
            (r.fillStyle = n || e),
            r.fillRect(0, 0, a, l),
            r.restore());
          if (u) {
            var d = this.domBack;
            r.save(), (r.globalAlpha = c), r.drawImage(d, 0, 0, a, l), r.restore();
          }
        },
      };
      var h = c;
      t.exports = h;
    },
    Xnb7: function(t, e, n) {
      var i = n('1RvN'),
        r = new i(50);
      function a(t) {
        if ('string' === typeof t) {
          var e = r.get(t);
          return e && e.image;
        }
        return t;
      }
      function o(t, e, n, i, a) {
        if (t) {
          if ('string' === typeof t) {
            if ((e && e.__zrImageSrc === t) || !n) return e;
            var o = r.get(t),
              u = { hostEl: n, cb: i, cbPayload: a };
            return (
              o
                ? ((e = o.image), !l(e) && o.pending.push(u))
                : ((e = new Image()),
                  (e.onload = e.onerror = s),
                  r.put(t, (e.__cachedImgObj = { image: e, pending: [u] })),
                  (e.src = e.__zrImageSrc = t)),
              e
            );
          }
          return t;
        }
        return e;
      }
      function s() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
          var n = t.pending[e],
            i = n.cb;
          i && i(this, n.cbPayload), n.hostEl.dirty();
        }
        t.pending.length = 0;
      }
      function l(t) {
        return t && t.width && t.height;
      }
      (e.findExistImage = a), (e.createOrUpdateImage = o), (e.isImageReady = l);
    },
    XpcN: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('ProS')),
        a = n('bYtY'),
        o = n('oVpE'),
        s = o.createSymbol,
        l = n('IwbS'),
        u = n('eRkO'),
        c = u.makeBackground,
        h = n('+TT/'),
        d = a.curry,
        f = a.each,
        p = l.Group,
        g = r.extendComponentView({
          type: 'legend.plain',
          newlineDisabled: !1,
          init: function() {
            this.group.add((this._contentGroup = new p())),
              this._backgroundEl,
              this.group.add((this._selectorGroup = new p())),
              (this._isFirstRender = !0);
          },
          getContentGroup: function() {
            return this._contentGroup;
          },
          getSelectorGroup: function() {
            return this._selectorGroup;
          },
          render: function(t, e, n) {
            var i = this._isFirstRender;
            if (((this._isFirstRender = !1), this.resetInner(), t.get('show', !0))) {
              var r = t.get('align'),
                o = t.get('orient');
              (r && 'auto' !== r) ||
                (r = 'right' === t.get('left') && 'vertical' === o ? 'right' : 'left');
              var s = t.get('selector', !0),
                l = t.get('selectorPosition', !0);
              !s || (l && 'auto' !== l) || (l = 'horizontal' === o ? 'end' : 'start'),
                this.renderInner(r, t, e, n, s, o, l);
              var u = t.getBoxLayoutParams(),
                d = { width: n.getWidth(), height: n.getHeight() },
                f = t.get('padding'),
                p = h.getLayoutRect(u, d, f),
                g = this.layoutInner(t, r, p, i, s, l),
                v = h.getLayoutRect(a.defaults({ width: g.width, height: g.height }, u), d, f);
              this.group.attr('position', [v.x - g.x, v.y - g.y]),
                this.group.add((this._backgroundEl = c(g, t)));
            }
          },
          resetInner: function() {
            this.getContentGroup().removeAll(),
              this._backgroundEl && this.group.remove(this._backgroundEl),
              this.getSelectorGroup().removeAll();
          },
          renderInner: function(t, e, n, i, r, o, s) {
            var l = this.getContentGroup(),
              u = a.createHashMap(),
              c = e.get('selectedMode'),
              h = [];
            n.eachRawSeries(function(t) {
              !t.get('legendHoverLink') && h.push(t.id);
            }),
              f(
                e.getData(),
                function(r, a) {
                  var o = r.get('name');
                  if (this.newlineDisabled || ('' !== o && '\n' !== o)) {
                    var s = n.getSeriesByName(o)[0];
                    if (!u.get(o))
                      if (s) {
                        var f = s.getData(),
                          g = f.getVisual('color'),
                          v = f.getVisual('borderColor');
                        'function' === typeof g && (g = g(s.getDataParams(0))),
                          'function' === typeof v && (v = v(s.getDataParams(0)));
                        var _ = f.getVisual('legendSymbol') || 'roundRect',
                          b = f.getVisual('symbol'),
                          w = this._createItem(o, a, r, e, _, b, t, g, v, c);
                        w
                          .on('click', d(m, o, null, i, h))
                          .on('mouseover', d(y, s.name, null, i, h))
                          .on('mouseout', d(x, s.name, null, i, h)),
                          u.set(o, !0);
                      } else
                        n.eachRawSeries(function(n) {
                          if (!u.get(o) && n.legendVisualProvider) {
                            var s = n.legendVisualProvider;
                            if (!s.containName(o)) return;
                            var l = s.indexOfName(o),
                              f = s.getItemVisual(l, 'color'),
                              p = s.getItemVisual(l, 'borderColor'),
                              g = 'roundRect',
                              v = this._createItem(o, a, r, e, g, null, t, f, p, c);
                            v
                              .on('click', d(m, null, o, i, h))
                              .on('mouseover', d(y, null, o, i, h))
                              .on('mouseout', d(x, null, o, i, h)),
                              u.set(o, !0);
                          }
                        }, this);
                  } else l.add(new p({ newline: !0 }));
                },
                this,
              ),
              r && this._createSelector(r, e, i, o, s);
          },
          _createSelector: function(t, e, n, i, r) {
            var a = this.getSelectorGroup();
            function o(t) {
              var i = t.type,
                r = new l.Text({
                  style: { x: 0, y: 0, align: 'center', verticalAlign: 'middle' },
                  onclick: function() {
                    n.dispatchAction({
                      type: 'all' === i ? 'legendAllSelect' : 'legendInverseSelect',
                    });
                  },
                });
              a.add(r);
              var o = e.getModel('selectorLabel'),
                s = e.getModel('emphasis.selectorLabel');
              l.setLabelStyle(r.style, (r.hoverStyle = {}), o, s, {
                defaultText: t.title,
                isRectText: !1,
              }),
                l.setHoverStyle(r);
            }
            f(t, function(t) {
              o(t);
            });
          },
          _createItem: function(t, e, n, i, r, o, u, c, h, d) {
            var f = i.get('itemWidth'),
              g = i.get('itemHeight'),
              m = i.get('inactiveColor'),
              y = i.get('inactiveBorderColor'),
              x = i.get('symbolKeepAspect'),
              _ = i.getModel('itemStyle'),
              b = i.isSelected(t),
              w = new p(),
              S = n.getModel('textStyle'),
              M = n.get('icon'),
              T = n.getModel('tooltip'),
              C = T.parentModel;
            r = M || r;
            var I = s(r, 0, 0, f, g, b ? c : m, null == x || x);
            if ((w.add(v(I, r, _, h, y, b)), !M && o && (o !== r || 'none' === o))) {
              var k = 0.8 * g;
              'none' === o && (o = 'circle');
              var A = s(o, (f - k) / 2, (g - k) / 2, k, k, b ? c : m, null == x || x);
              w.add(v(A, o, _, h, y, b));
            }
            var D = 'left' === u ? f + 5 : -5,
              O = u,
              P = i.get('formatter'),
              E = t;
            'string' === typeof P && P
              ? (E = P.replace('{name}', null != t ? t : ''))
              : 'function' === typeof P && (E = P(t)),
              w.add(
                new l.Text({
                  style: l.setTextStyle({}, S, {
                    text: E,
                    x: D,
                    y: g / 2,
                    textFill: b ? S.getTextColor() : m,
                    textAlign: O,
                    textVerticalAlign: 'middle',
                  }),
                }),
              );
            var L = new l.Rect({
              shape: w.getBoundingRect(),
              invisible: !0,
              tooltip: T.get('show')
                ? a.extend(
                    {
                      content: t,
                      formatter:
                        C.get('formatter', !0) ||
                        function() {
                          return t;
                        },
                      formatterParams: {
                        componentType: 'legend',
                        legendIndex: i.componentIndex,
                        name: t,
                        $vars: ['name'],
                      },
                    },
                    T.option,
                  )
                : null,
            });
            return (
              w.add(L),
              w.eachChild(function(t) {
                t.silent = !0;
              }),
              (L.silent = !d),
              this.getContentGroup().add(w),
              l.setHoverStyle(w),
              (w.__legendDataIndex = e),
              w
            );
          },
          layoutInner: function(t, e, n, i, r, a) {
            var o = this.getContentGroup(),
              s = this.getSelectorGroup();
            h.box(t.get('orient'), o, t.get('itemGap'), n.width, n.height);
            var l = o.getBoundingRect(),
              u = [-l.x, -l.y];
            if (r) {
              h.box('horizontal', s, t.get('selectorItemGap', !0));
              var c = s.getBoundingRect(),
                d = [-c.x, -c.y],
                f = t.get('selectorButtonGap', !0),
                p = t.getOrient().index,
                g = 0 === p ? 'width' : 'height',
                v = 0 === p ? 'height' : 'width',
                m = 0 === p ? 'y' : 'x';
              'end' === a ? (d[p] += l[g] + f) : (u[p] += c[g] + f),
                (d[1 - p] += l[v] / 2 - c[v] / 2),
                s.attr('position', d),
                o.attr('position', u);
              var y = { x: 0, y: 0 };
              return (
                (y[g] = l[g] + f + c[g]),
                (y[v] = Math.max(l[v], c[v])),
                (y[m] = Math.min(0, c[m] + d[1 - p])),
                y
              );
            }
            return o.attr('position', u), this.group.getBoundingRect();
          },
          remove: function() {
            this.getContentGroup().removeAll(), (this._isFirstRender = !0);
          },
        });
      function v(t, e, n, i, r, a) {
        var o;
        return (
          'line' !== e && e.indexOf('empty') < 0
            ? ((o = n.getItemStyle()), (t.style.stroke = i), a || (o.stroke = r))
            : (o = n.getItemStyle(['borderWidth', 'borderColor'])),
          t.setStyle(o)
        );
      }
      function m(t, e, n, i) {
        x(t, e, n, i),
          n.dispatchAction({ type: 'legendToggleSelect', name: null != t ? t : e }),
          y(t, e, n, i);
      }
      function y(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        (r && r.useHoverLayer) ||
          n.dispatchAction({ type: 'highlight', seriesName: t, name: e, excludeSeriesId: i });
      }
      function x(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        (r && r.useHoverLayer) ||
          n.dispatchAction({ type: 'downplay', seriesName: t, name: e, excludeSeriesId: i });
      }
      t.exports = g;
    },
    YH21: function(t, e, n) {
      var i = n('H6uX');
      e.Dispatcher = i;
      var r = n('ItGF'),
        a = n('Ze12'),
        o = a.isCanvasEl,
        s = a.transformCoordWithViewport,
        l = 'undefined' !== typeof window && !!window.addEventListener,
        u = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        c = [];
      function h(t, e, n, i) {
        return (
          (n = n || {}),
          i || !r.canvasSupported
            ? d(t, e, n)
            : r.browser.firefox && null != e.layerX && e.layerX !== e.offsetX
            ? ((n.zrX = e.layerX), (n.zrY = e.layerY))
            : null != e.offsetX
            ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY))
            : d(t, e, n),
          n
        );
      }
      function d(t, e, n) {
        if (r.domSupported && t.getBoundingClientRect) {
          var i = e.clientX,
            a = e.clientY;
          if (o(t)) {
            var l = t.getBoundingClientRect();
            return (n.zrX = i - l.left), void (n.zrY = a - l.top);
          }
          if (s(c, t, i, a)) return (n.zrX = c[0]), void (n.zrY = c[1]);
        }
        n.zrX = n.zrY = 0;
      }
      function f(t) {
        return t || window.event;
      }
      function p(t, e, n) {
        if (((e = f(e)), null != e.zrX)) return e;
        var i = e.type,
          r = i && i.indexOf('touch') >= 0;
        if (r) {
          var a = 'touchend' !== i ? e.targetTouches[0] : e.changedTouches[0];
          a && h(t, a, e, n);
        } else
          h(t, e, e, n), (e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3);
        var o = e.button;
        return (
          null == e.which &&
            void 0 !== o &&
            u.test(e.type) &&
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      }
      function g(t, e, n, i) {
        l ? t.addEventListener(e, n, i) : t.attachEvent('on' + e, n);
      }
      function v(t, e, n, i) {
        l ? t.removeEventListener(e, n, i) : t.detachEvent('on' + e, n);
      }
      var m = l
        ? function(t) {
            t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0);
          }
        : function(t) {
            (t.returnValue = !1), (t.cancelBubble = !0);
          };
      function y(t) {
        return 2 === t.which || 3 === t.which;
      }
      function x(t) {
        return t.which > 1;
      }
      (e.clientToLocal = h),
        (e.getNativeEvent = f),
        (e.normalizeEvent = p),
        (e.addEventListener = g),
        (e.removeEventListener = v),
        (e.stop = m),
        (e.isMiddleOrRightButtonOnMouseUpDown = y),
        (e.notLeftMouse = x);
    },
    YXkt: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = n('Qxkt'),
        o = n('gPAo'),
        s = n('7G+c'),
        l = n('KxfA'),
        u = l.defaultDimValueGetters,
        c = l.DefaultDataProvider,
        h = n('L0Ub'),
        d = h.summarizeDimensions,
        f = n('Vi4m'),
        p = r.isObject,
        g = 'undefined',
        v = -1,
        m = 'e\0\0',
        y = {
          float: typeof Float64Array === g ? Array : Float64Array,
          int: typeof Int32Array === g ? Array : Int32Array,
          ordinal: Array,
          number: Array,
          time: Array,
        },
        x = typeof Uint32Array === g ? Array : Uint32Array,
        _ = typeof Int32Array === g ? Array : Int32Array,
        b = typeof Uint16Array === g ? Array : Uint16Array;
      function w(t) {
        return t._rawCount > 65535 ? x : b;
      }
      function S(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t);
      }
      var M = [
          'hasItemOption',
          '_nameList',
          '_idList',
          '_invertedIndicesMap',
          '_rawData',
          '_chunkSize',
          '_chunkCount',
          '_dimValueGetter',
          '_count',
          '_rawCount',
          '_nameDimIdx',
          '_idDimIdx',
        ],
        T = ['_extent', '_approximateExtent', '_rawExtent'];
      function C(t, e) {
        r.each(M.concat(e.__wrappedMethods || []), function(n) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }),
          (t.__wrappedMethods = e.__wrappedMethods),
          r.each(T, function(n) {
            t[n] = r.clone(e[n]);
          }),
          (t._calculationInfo = r.extend(e._calculationInfo));
      }
      var I = function(t, e) {
          t = t || ['x', 'y'];
          for (var n = {}, i = [], a = {}, o = 0; o < t.length; o++) {
            var s = t[o];
            r.isString(s) ? (s = new f({ name: s })) : s instanceof f || (s = new f(s));
            var l = s.name;
            (s.type = s.type || 'float'),
              s.coordDim || ((s.coordDim = l), (s.coordDimIndex = 0)),
              (s.otherDims = s.otherDims || {}),
              i.push(l),
              (n[l] = s),
              (s.index = o),
              s.createInvertedIndices && (a[l] = []);
          }
          (this.dimensions = i),
            (this._dimensionInfos = n),
            (this.hostModel = e),
            this.dataType,
            (this._indices = null),
            (this._count = 0),
            (this._rawCount = 0),
            (this._storage = {}),
            (this._nameList = []),
            (this._idList = []),
            (this._optionModels = []),
            (this._visual = {}),
            (this._layout = {}),
            (this._itemVisuals = []),
            (this.hasItemVisual = {}),
            (this._itemLayouts = []),
            (this._graphicEls = []),
            (this._chunkSize = 1e5),
            (this._chunkCount = 0),
            this._rawData,
            (this._rawExtent = {}),
            (this._extent = {}),
            (this._approximateExtent = {}),
            (this._dimensionsSummary = d(this)),
            (this._invertedIndicesMap = a),
            (this._calculationInfo = {}),
            (this.userOutput = this._dimensionsSummary.userOutput);
        },
        k = I.prototype;
      function A(t, e, n, i, r) {
        var a = y[e.type],
          o = i - 1,
          s = e.name,
          l = t[s][o];
        if (l && l.length < n) {
          for (var u = new a(Math.min(r - o * n, n)), c = 0; c < l.length; c++) u[c] = l[c];
          t[s][o] = u;
        }
        for (var h = i * n; h < r; h += n) t[s].push(new a(Math.min(r - h, n)));
      }
      function D(t) {
        var e = t._invertedIndicesMap;
        r.each(e, function(n, i) {
          var r = t._dimensionInfos[i],
            a = r.ordinalMeta;
          if (a) {
            n = e[i] = new _(a.categories.length);
            for (var o = 0; o < n.length; o++) n[o] = v;
            for (o = 0; o < t._count; o++) n[t.get(i, o)] = o;
          }
        });
      }
      function O(t, e, n) {
        var i;
        if (null != e) {
          var r = t._chunkSize,
            a = Math.floor(n / r),
            o = n % r,
            s = t.dimensions[e],
            l = t._storage[s][a];
          if (l) {
            i = l[o];
            var u = t._dimensionInfos[s].ordinalMeta;
            u && u.categories.length && (i = u.categories[i]);
          }
        }
        return i;
      }
      function P(t) {
        return t;
      }
      function E(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1;
      }
      function L(t, e) {
        var n = t._idList[e];
        return null == n && (n = O(t, t._idDimIdx, e)), null == n && (n = m + e), n;
      }
      function R(t) {
        return r.isArray(t) || (t = [t]), t;
      }
      function N(t, e) {
        var n = t.dimensions,
          i = new I(r.map(n, t.getDimensionInfo, t), t.hostModel);
        C(i, t);
        for (var a = (i._storage = {}), o = t._storage, s = 0; s < n.length; s++) {
          var l = n[s];
          o[l] &&
            (r.indexOf(e, l) >= 0
              ? ((a[l] = z(o[l])), (i._rawExtent[l] = B()), (i._extent[l] = null))
              : (a[l] = o[l]));
        }
        return i;
      }
      function z(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = S(t[n]);
        return e;
      }
      function B() {
        return [1 / 0, -1 / 0];
      }
      (k.type = 'list'),
        (k.hasItemOption = !0),
        (k.getDimension = function(t) {
          return (
            ('number' !== typeof t && (isNaN(t) || this._dimensionInfos.hasOwnProperty(t))) ||
              (t = this.dimensions[t]),
            t
          );
        }),
        (k.getDimensionInfo = function(t) {
          return this._dimensionInfos[this.getDimension(t)];
        }),
        (k.getDimensionsOnCoord = function() {
          return this._dimensionsSummary.dataDimsOnCoord.slice();
        }),
        (k.mapDimension = function(t, e) {
          var n = this._dimensionsSummary;
          if (null == e) return n.encodeFirstDimNotExtra[t];
          var i = n.encode[t];
          return !0 === e ? (i || []).slice() : i && i[e];
        }),
        (k.initData = function(t, e, n) {
          var i = s.isInstance(t) || r.isArrayLike(t);
          i && (t = new c(t, this.dimensions.length)),
            (this._rawData = t),
            (this._storage = {}),
            (this._indices = null),
            (this._nameList = e || []),
            (this._idList = []),
            (this._nameRepeatCount = {}),
            n || (this.hasItemOption = !1),
            (this.defaultDimValueGetter = u[this._rawData.getSource().sourceFormat]),
            (this._dimValueGetter = n = n || this.defaultDimValueGetter),
            (this._dimValueGetterArrayRows = u.arrayRows),
            (this._rawExtent = {}),
            this._initDataFromProvider(0, t.count()),
            t.pure && (this.hasItemOption = !1);
        }),
        (k.getProvider = function() {
          return this._rawData;
        }),
        (k.appendData = function(t) {
          var e = this._rawData,
            n = this.count();
          e.appendData(t);
          var i = e.count();
          e.persistent || (i += n), this._initDataFromProvider(n, i);
        }),
        (k.appendValues = function(t, e) {
          for (
            var n = this._chunkSize,
              i = this._storage,
              r = this.dimensions,
              a = r.length,
              o = this._rawExtent,
              s = this.count(),
              l = s + Math.max(t.length, e ? e.length : 0),
              u = this._chunkCount,
              c = 0;
            c < a;
            c++
          ) {
            var h = r[c];
            o[h] || (o[h] = B()),
              i[h] || (i[h] = []),
              A(i, this._dimensionInfos[h], n, u, l),
              (this._chunkCount = i[h].length);
          }
          for (var d = new Array(a), f = s; f < l; f++) {
            for (var p = f - s, g = Math.floor(f / n), v = f % n, m = 0; m < a; m++) {
              h = r[m];
              var y = this._dimValueGetterArrayRows(t[p] || d, h, p, m);
              i[h][g][v] = y;
              var x = o[h];
              y < x[0] && (x[0] = y), y > x[1] && (x[1] = y);
            }
            e && (this._nameList[f] = e[p]);
          }
          (this._rawCount = this._count = l), (this._extent = {}), D(this);
        }),
        (k._initDataFromProvider = function(t, e) {
          if (!(t >= e)) {
            for (
              var n,
                i = this._chunkSize,
                r = this._rawData,
                a = this._storage,
                o = this.dimensions,
                s = o.length,
                l = this._dimensionInfos,
                u = this._nameList,
                c = this._idList,
                h = this._rawExtent,
                d = (this._nameRepeatCount = {}),
                f = this._chunkCount,
                p = 0;
              p < s;
              p++
            ) {
              var g = o[p];
              h[g] || (h[g] = B());
              var v = l[g];
              0 === v.otherDims.itemName && (n = this._nameDimIdx = p),
                0 === v.otherDims.itemId && (this._idDimIdx = p),
                a[g] || (a[g] = []),
                A(a, v, i, f, e),
                (this._chunkCount = a[g].length);
            }
            for (var m = new Array(s), y = t; y < e; y++) {
              m = r.getItem(y, m);
              for (var x = Math.floor(y / i), _ = y % i, b = 0; b < s; b++) {
                g = o[b];
                var w = a[g][x],
                  S = this._dimValueGetter(m, g, y, b);
                w[_] = S;
                var M = h[g];
                S < M[0] && (M[0] = S), S > M[1] && (M[1] = S);
              }
              if (!r.pure) {
                var T = u[y];
                if (m && null == T)
                  if (null != m.name) u[y] = T = m.name;
                  else if (null != n) {
                    var C = o[n],
                      I = a[C][x];
                    if (I) {
                      T = I[_];
                      var k = l[C].ordinalMeta;
                      k && k.categories.length && (T = k.categories[T]);
                    }
                  }
                var O = null == m ? null : m.id;
                null == O &&
                  null != T &&
                  ((d[T] = d[T] || 0), (O = T), d[T] > 0 && (O += '__ec__' + d[T]), d[T]++),
                  null != O && (c[y] = O);
              }
            }
            !r.persistent && r.clean && r.clean(),
              (this._rawCount = this._count = e),
              (this._extent = {}),
              D(this);
          }
        }),
        (k.count = function() {
          return this._count;
        }),
        (k.getIndices = function() {
          var t = this._indices;
          if (t) {
            var e = t.constructor,
              n = this._count;
            if (e === Array) {
              r = new e(n);
              for (var i = 0; i < n; i++) r[i] = t[i];
            } else r = new e(t.buffer, 0, n);
          } else {
            e = w(this);
            var r = new e(this.count());
            for (i = 0; i < r.length; i++) r[i] = i;
          }
          return r;
        }),
        (k.get = function(t, e) {
          if (!(e >= 0 && e < this._count)) return NaN;
          var n = this._storage;
          if (!n[t]) return NaN;
          e = this.getRawIndex(e);
          var i = Math.floor(e / this._chunkSize),
            r = e % this._chunkSize,
            a = n[t][i],
            o = a[r];
          return o;
        }),
        (k.getByRawIndex = function(t, e) {
          if (!(e >= 0 && e < this._rawCount)) return NaN;
          var n = this._storage[t];
          if (!n) return NaN;
          var i = Math.floor(e / this._chunkSize),
            r = e % this._chunkSize,
            a = n[i];
          return a[r];
        }),
        (k._getFast = function(t, e) {
          var n = Math.floor(e / this._chunkSize),
            i = e % this._chunkSize,
            r = this._storage[t][n];
          return r[i];
        }),
        (k.getValues = function(t, e) {
          var n = [];
          r.isArray(t) || ((e = t), (t = this.dimensions));
          for (var i = 0, a = t.length; i < a; i++) n.push(this.get(t[i], e));
          return n;
        }),
        (k.hasValue = function(t) {
          for (var e = this._dimensionsSummary.dataDimsOnCoord, n = 0, i = e.length; n < i; n++)
            if (isNaN(this.get(e[n], t))) return !1;
          return !0;
        }),
        (k.getDataExtent = function(t) {
          t = this.getDimension(t);
          var e = this._storage[t],
            n = B();
          if (!e) return n;
          var i,
            r = this.count(),
            a = !this._indices;
          if (a) return this._rawExtent[t].slice();
          if (((i = this._extent[t]), i)) return i.slice();
          i = n;
          for (var o = i[0], s = i[1], l = 0; l < r; l++) {
            var u = this._getFast(t, this.getRawIndex(l));
            u < o && (o = u), u > s && (s = u);
          }
          return (i = [o, s]), (this._extent[t] = i), i;
        }),
        (k.getApproximateExtent = function(t) {
          return (t = this.getDimension(t)), this._approximateExtent[t] || this.getDataExtent(t);
        }),
        (k.setApproximateExtent = function(t, e) {
          (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
        }),
        (k.getCalculationInfo = function(t) {
          return this._calculationInfo[t];
        }),
        (k.setCalculationInfo = function(t, e) {
          p(t) ? r.extend(this._calculationInfo, t) : (this._calculationInfo[t] = e);
        }),
        (k.getSum = function(t) {
          var e = this._storage[t],
            n = 0;
          if (e)
            for (var i = 0, r = this.count(); i < r; i++) {
              var a = this.get(t, i);
              isNaN(a) || (n += a);
            }
          return n;
        }),
        (k.getMedian = function(t) {
          var e = [];
          this.each(t, function(t, n) {
            isNaN(t) || e.push(t);
          });
          var n = [].concat(e).sort(function(t, e) {
              return t - e;
            }),
            i = this.count();
          return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
        }),
        (k.rawIndexOf = function(t, e) {
          var n = t && this._invertedIndicesMap[t],
            i = n[e];
          return null == i || isNaN(i) ? v : i;
        }),
        (k.indexOfName = function(t) {
          for (var e = 0, n = this.count(); e < n; e++) if (this.getName(e) === t) return e;
          return -1;
        }),
        (k.indexOfRawIndex = function(t) {
          if (t >= this._rawCount || t < 0) return -1;
          if (!this._indices) return t;
          var e = this._indices,
            n = e[t];
          if (null != n && n < this._count && n === t) return t;
          var i = 0,
            r = this._count - 1;
          while (i <= r) {
            var a = ((i + r) / 2) | 0;
            if (e[a] < t) i = a + 1;
            else {
              if (!(e[a] > t)) return a;
              r = a - 1;
            }
          }
          return -1;
        }),
        (k.indicesOfNearest = function(t, e, n) {
          var i = this._storage,
            r = i[t],
            a = [];
          if (!r) return a;
          null == n && (n = 1 / 0);
          for (var o = 1 / 0, s = -1, l = 0, u = 0, c = this.count(); u < c; u++) {
            var h = e - this.get(t, u),
              d = Math.abs(h);
            d <= n &&
              ((d < o || (d === o && h >= 0 && s < 0)) && ((o = d), (s = h), (l = 0)),
              h === s && (a[l++] = u));
          }
          return (a.length = l), a;
        }),
        (k.getRawIndex = P),
        (k.getRawDataItem = function(t) {
          if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
          for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];
            e.push(this.get(i, t));
          }
          return e;
        }),
        (k.getName = function(t) {
          var e = this.getRawIndex(t);
          return this._nameList[e] || O(this, this._nameDimIdx, e) || '';
        }),
        (k.getId = function(t) {
          return L(this, this.getRawIndex(t));
        }),
        (k.each = function(t, e, n, i) {
          'use strict';
          if (this._count) {
            'function' === typeof t && ((i = n), (n = e), (e = t), (t = [])),
              (n = n || i || this),
              (t = r.map(R(t), this.getDimension, this));
            for (var a = t.length, o = 0; o < this.count(); o++)
              switch (a) {
                case 0:
                  e.call(n, o);
                  break;
                case 1:
                  e.call(n, this.get(t[0], o), o);
                  break;
                case 2:
                  e.call(n, this.get(t[0], o), this.get(t[1], o), o);
                  break;
                default:
                  for (var s = 0, l = []; s < a; s++) l[s] = this.get(t[s], o);
                  (l[s] = o), e.apply(n, l);
              }
          }
        }),
        (k.filterSelf = function(t, e, n, i) {
          'use strict';
          if (this._count) {
            'function' === typeof t && ((i = n), (n = e), (e = t), (t = [])),
              (n = n || i || this),
              (t = r.map(R(t), this.getDimension, this));
            for (
              var a = this.count(),
                o = w(this),
                s = new o(a),
                l = [],
                u = t.length,
                c = 0,
                h = t[0],
                d = 0;
              d < a;
              d++
            ) {
              var f,
                p = this.getRawIndex(d);
              if (0 === u) f = e.call(n, d);
              else if (1 === u) {
                var g = this._getFast(h, p);
                f = e.call(n, g, d);
              } else {
                for (var v = 0; v < u; v++) l[v] = this._getFast(h, p);
                (l[v] = d), (f = e.apply(n, l));
              }
              f && (s[c++] = p);
            }
            return (
              c < a && (this._indices = s),
              (this._count = c),
              (this._extent = {}),
              (this.getRawIndex = this._indices ? E : P),
              this
            );
          }
        }),
        (k.selectRange = function(t) {
          'use strict';
          if (this._count) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            var i = e.length;
            if (i) {
              var r = this.count(),
                a = w(this),
                o = new a(r),
                s = 0,
                l = e[0],
                u = t[l][0],
                c = t[l][1],
                h = !1;
              if (!this._indices) {
                var d = 0;
                if (1 === i) {
                  for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++)
                    for (
                      var g = f[p],
                        v = Math.min(this._count - p * this._chunkSize, this._chunkSize),
                        m = 0;
                      m < v;
                      m++
                    ) {
                      var y = g[m];
                      ((y >= u && y <= c) || isNaN(y)) && (o[s++] = d), d++;
                    }
                  h = !0;
                } else if (2 === i) {
                  f = this._storage[l];
                  var x = this._storage[e[1]],
                    _ = t[e[1]][0],
                    b = t[e[1]][1];
                  for (p = 0; p < this._chunkCount; p++) {
                    g = f[p];
                    var S = x[p];
                    for (
                      v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0;
                      m < v;
                      m++
                    ) {
                      y = g[m];
                      var M = S[m];
                      ((y >= u && y <= c) || isNaN(y)) &&
                        ((M >= _ && M <= b) || isNaN(M)) &&
                        (o[s++] = d),
                        d++;
                    }
                  }
                  h = !0;
                }
              }
              if (!h)
                if (1 === i)
                  for (m = 0; m < r; m++) {
                    var T = this.getRawIndex(m);
                    y = this._getFast(l, T);
                    ((y >= u && y <= c) || isNaN(y)) && (o[s++] = T);
                  }
                else
                  for (m = 0; m < r; m++) {
                    var C = !0;
                    for (T = this.getRawIndex(m), p = 0; p < i; p++) {
                      var I = e[p];
                      y = this._getFast(n, T);
                      (y < t[I][0] || y > t[I][1]) && (C = !1);
                    }
                    C && (o[s++] = this.getRawIndex(m));
                  }
              return (
                s < r && (this._indices = o),
                (this._count = s),
                (this._extent = {}),
                (this.getRawIndex = this._indices ? E : P),
                this
              );
            }
          }
        }),
        (k.mapArray = function(t, e, n, i) {
          'use strict';
          'function' === typeof t && ((i = n), (n = e), (e = t), (t = [])), (n = n || i || this);
          var r = [];
          return (
            this.each(
              t,
              function() {
                r.push(e && e.apply(this, arguments));
              },
              n,
            ),
            r
          );
        }),
        (k.map = function(t, e, n, i) {
          'use strict';
          (n = n || i || this), (t = r.map(R(t), this.getDimension, this));
          var a = N(this, t);
          (a._indices = this._indices), (a.getRawIndex = a._indices ? E : P);
          for (
            var o = a._storage,
              s = [],
              l = this._chunkSize,
              u = t.length,
              c = this.count(),
              h = [],
              d = a._rawExtent,
              f = 0;
            f < c;
            f++
          ) {
            for (var p = 0; p < u; p++) h[p] = this.get(t[p], f);
            h[u] = f;
            var g = e && e.apply(n, h);
            if (null != g) {
              'object' !== typeof g && ((s[0] = g), (g = s));
              for (
                var v = this.getRawIndex(f), m = Math.floor(v / l), y = v % l, x = 0;
                x < g.length;
                x++
              ) {
                var _ = t[x],
                  b = g[x],
                  w = d[_],
                  S = o[_];
                S && (S[m][y] = b), b < w[0] && (w[0] = b), b > w[1] && (w[1] = b);
              }
            }
          }
          return a;
        }),
        (k.downSample = function(t, e, n, i) {
          for (
            var r = N(this, [t]),
              a = r._storage,
              o = [],
              s = Math.floor(1 / e),
              l = a[t],
              u = this.count(),
              c = this._chunkSize,
              h = r._rawExtent[t],
              d = new (w(this))(u),
              f = 0,
              p = 0;
            p < u;
            p += s
          ) {
            s > u - p && ((s = u - p), (o.length = s));
            for (var g = 0; g < s; g++) {
              var v = this.getRawIndex(p + g),
                m = Math.floor(v / c),
                y = v % c;
              o[g] = l[m][y];
            }
            var x = n(o),
              _ = this.getRawIndex(Math.min(p + i(o, x) || 0, u - 1)),
              b = Math.floor(_ / c),
              S = _ % c;
            (l[b][S] = x), x < h[0] && (h[0] = x), x > h[1] && (h[1] = x), (d[f++] = _);
          }
          return (r._count = f), (r._indices = d), (r.getRawIndex = E), r;
        }),
        (k.getItemModel = function(t) {
          var e = this.hostModel;
          return new a(this.getRawDataItem(t), e, e && e.ecModel);
        }),
        (k.diff = function(t) {
          var e = this;
          return new o(
            t ? t.getIndices() : [],
            this.getIndices(),
            function(e) {
              return L(t, e);
            },
            function(t) {
              return L(e, t);
            },
          );
        }),
        (k.getVisual = function(t) {
          var e = this._visual;
          return e && e[t];
        }),
        (k.setVisual = function(t, e) {
          if (p(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
          else (this._visual = this._visual || {}), (this._visual[t] = e);
        }),
        (k.setLayout = function(t, e) {
          if (p(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
          else this._layout[t] = e;
        }),
        (k.getLayout = function(t) {
          return this._layout[t];
        }),
        (k.getItemLayout = function(t) {
          return this._itemLayouts[t];
        }),
        (k.setItemLayout = function(t, e, n) {
          this._itemLayouts[t] = n ? r.extend(this._itemLayouts[t] || {}, e) : e;
        }),
        (k.clearItemLayouts = function() {
          this._itemLayouts.length = 0;
        }),
        (k.getItemVisual = function(t, e, n) {
          var i = this._itemVisuals[t],
            r = i && i[e];
          return null != r || n ? r : this.getVisual(e);
        }),
        (k.setItemVisual = function(t, e, n) {
          var i = this._itemVisuals[t] || {},
            r = this.hasItemVisual;
          if (((this._itemVisuals[t] = i), p(e)))
            for (var a in e) e.hasOwnProperty(a) && ((i[a] = e[a]), (r[a] = !0));
          else (i[e] = n), (r[e] = !0);
        }),
        (k.clearAllVisual = function() {
          (this._visual = {}), (this._itemVisuals = []), (this.hasItemVisual = {});
        });
      var j = function(t) {
        (t.seriesIndex = this.seriesIndex),
          (t.dataIndex = this.dataIndex),
          (t.dataType = this.dataType);
      };
      (k.setItemGraphicEl = function(t, e) {
        var n = this.hostModel;
        e &&
          ((e.dataIndex = t),
          (e.dataType = this.dataType),
          (e.seriesIndex = n && n.seriesIndex),
          'group' === e.type && e.traverse(j, e)),
          (this._graphicEls[t] = e);
      }),
        (k.getItemGraphicEl = function(t) {
          return this._graphicEls[t];
        }),
        (k.eachItemGraphicEl = function(t, e) {
          r.each(this._graphicEls, function(n, i) {
            n && t && t.call(e, n, i);
          });
        }),
        (k.cloneShallow = function(t) {
          if (!t) {
            var e = r.map(this.dimensions, this.getDimensionInfo, this);
            t = new I(e, this.hostModel);
          }
          if (((t._storage = this._storage), C(t, this), this._indices)) {
            var n = this._indices.constructor;
            t._indices = new n(this._indices);
          } else t._indices = null;
          return (t.getRawIndex = t._indices ? E : P), t;
        }),
        (k.wrapMethod = function(t, e) {
          var n = this[t];
          'function' === typeof n &&
            ((this.__wrappedMethods = this.__wrappedMethods || []),
            this.__wrappedMethods.push(t),
            (this[t] = function() {
              var t = n.apply(this, arguments);
              return e.apply(this, [t].concat(r.slice(arguments)));
            }));
        }),
        (k.TRANSFERABLE_METHODS = ['cloneShallow', 'downSample', 'map']),
        (k.CHANGABLE_METHODS = ['filterSelf', 'selectRange']);
      var F = I;
      t.exports = F;
    },
    YgsL: function(t, e, n) {
      var i = n('QBsz'),
        r = i.distance;
      function a(t, e, n, i, r, a, o) {
        var s = 0.5 * (n - t),
          l = 0.5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
      }
      function o(t, e) {
        for (var n = t.length, i = [], o = 0, s = 1; s < n; s++) o += r(t[s - 1], t[s]);
        var l = o / 2;
        l = l < n ? n : l;
        for (s = 0; s < l; s++) {
          var u,
            c,
            h,
            d = (s / (l - 1)) * (e ? n : n - 1),
            f = Math.floor(d),
            p = d - f,
            g = t[f % n];
          e
            ? ((u = t[(f - 1 + n) % n]), (c = t[(f + 1) % n]), (h = t[(f + 2) % n]))
            : ((u = t[0 === f ? f : f - 1]),
              (c = t[f > n - 2 ? n - 1 : f + 1]),
              (h = t[f > n - 3 ? n - 1 : f + 2]));
          var v = p * p,
            m = p * v;
          i.push([a(u[0], g[0], c[0], h[0], p, v, m), a(u[1], g[1], c[1], h[1], p, v, m)]);
        }
        return i;
      }
      t.exports = o;
    },
    Yl7c: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = '.',
        o = '___EC__COMPONENT__CONTAINER___';
      function s(t) {
        var e = { main: '', sub: '' };
        return t && ((t = t.split(a)), (e.main = t[0] || ''), (e.sub = t[1] || '')), e;
      }
      function l(t) {
        r.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
      }
      function u(t, e) {
        (t.$constructor = t),
          (t.extend = function(t) {
            var e = this,
              n = function() {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
              };
            return (
              r.extend(n.prototype, t),
              (n.extend = this.extend),
              (n.superCall = d),
              (n.superApply = f),
              r.inherits(n, this),
              (n.superClass = e),
              n
            );
          });
      }
      var c = 0;
      function h(t) {
        var e = ['__\0is_clz', c++, Math.random().toFixed(3)].join('_');
        (t.prototype[e] = !0),
          (t.isInstance = function(t) {
            return !(!t || !t[e]);
          });
      }
      function d(t, e) {
        var n = r.slice(arguments, 2);
        return this.superClass.prototype[e].apply(t, n);
      }
      function f(t, e, n) {
        return this.superClass.prototype[e].apply(t, n);
      }
      function p(t, e) {
        e = e || {};
        var n = {};
        function i(t) {
          var e = n[t.main];
          return (e && e[o]) || ((e = n[t.main] = {}), (e[o] = !0)), e;
        }
        if (
          ((t.registerClass = function(t, e) {
            if (e)
              if ((l(e), (e = s(e)), e.sub)) {
                if (e.sub !== o) {
                  var r = i(e);
                  r[e.sub] = t;
                }
              } else n[e.main] = t;
            return t;
          }),
          (t.getClass = function(t, e, i) {
            var r = n[t];
            if ((r && r[o] && (r = e ? r[e] : null), i && !r))
              throw new Error(
                e
                  ? 'Component ' + t + '.' + (e || '') + ' not exists. Load it first.'
                  : t + '.type should be specified.',
              );
            return r;
          }),
          (t.getClassesByMainType = function(t) {
            t = s(t);
            var e = [],
              i = n[t.main];
            return (
              i && i[o]
                ? r.each(i, function(t, n) {
                    n !== o && e.push(t);
                  })
                : e.push(i),
              e
            );
          }),
          (t.hasClass = function(t) {
            return (t = s(t)), !!n[t.main];
          }),
          (t.getAllClassMainTypes = function() {
            var t = [];
            return (
              r.each(n, function(e, n) {
                t.push(n);
              }),
              t
            );
          }),
          (t.hasSubTypes = function(t) {
            t = s(t);
            var e = n[t.main];
            return e && e[o];
          }),
          (t.parseClassType = s),
          e.registerWhenExtend)
        ) {
          var a = t.extend;
          a &&
            (t.extend = function(e) {
              var n = a.call(this, e);
              return t.registerClass(n, e.type);
            });
        }
        return t;
      }
      function g(t, e) {}
      (e.parseClassType = s),
        (e.enableClassExtend = u),
        (e.enableClassCheck = h),
        (e.enableClassManagement = p),
        (e.setReadOnly = g);
    },
    Ynxi: function(t, e, n) {
      var i = n('bYtY'),
        r = n('ProS'),
        a = n('IwbS'),
        o = n('+TT/'),
        s = o.getLayoutRect,
        l = n('7aKB'),
        u = l.windowOpen;
      r.extendComponentModel({
        type: 'title',
        layoutMode: { type: 'box', ignoreSize: !0 },
        defaultOption: {
          zlevel: 0,
          z: 6,
          show: !0,
          text: '',
          target: 'blank',
          subtext: '',
          subtarget: 'blank',
          left: 0,
          top: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',
          borderWidth: 0,
          padding: 5,
          itemGap: 10,
          textStyle: { fontSize: 18, fontWeight: 'bolder', color: '#333' },
          subtextStyle: { color: '#aaa' },
        },
      }),
        r.extendComponentView({
          type: 'title',
          render: function(t, e, n) {
            if ((this.group.removeAll(), t.get('show'))) {
              var r = this.group,
                o = t.getModel('textStyle'),
                l = t.getModel('subtextStyle'),
                c = t.get('textAlign'),
                h = i.retrieve2(t.get('textBaseline'), t.get('textVerticalAlign')),
                d = new a.Text({
                  style: a.setTextStyle(
                    {},
                    o,
                    { text: t.get('text'), textFill: o.getTextColor() },
                    { disableBox: !0 },
                  ),
                  z2: 10,
                }),
                f = d.getBoundingRect(),
                p = t.get('subtext'),
                g = new a.Text({
                  style: a.setTextStyle(
                    {},
                    l,
                    {
                      text: p,
                      textFill: l.getTextColor(),
                      y: f.height + t.get('itemGap'),
                      textVerticalAlign: 'top',
                    },
                    { disableBox: !0 },
                  ),
                  z2: 10,
                }),
                v = t.get('link'),
                m = t.get('sublink'),
                y = t.get('triggerEvent', !0);
              (d.silent = !v && !y),
                (g.silent = !m && !y),
                v &&
                  d.on('click', function() {
                    u(v, '_' + t.get('target'));
                  }),
                m &&
                  g.on('click', function() {
                    u(m, '_' + t.get('subtarget'));
                  }),
                (d.eventData = g.eventData = y
                  ? { componentType: 'title', componentIndex: t.componentIndex }
                  : null),
                r.add(d),
                p && r.add(g);
              var x = r.getBoundingRect(),
                _ = t.getBoxLayoutParams();
              (_.width = x.width), (_.height = x.height);
              var b = s(_, { width: n.getWidth(), height: n.getHeight() }, t.get('padding'));
              c ||
                ((c = t.get('left') || t.get('right')),
                'middle' === c && (c = 'center'),
                'right' === c ? (b.x += b.width) : 'center' === c && (b.x += b.width / 2)),
                h ||
                  ((h = t.get('top') || t.get('bottom')),
                  'center' === h && (h = 'middle'),
                  'bottom' === h ? (b.y += b.height) : 'middle' === h && (b.y += b.height / 2),
                  (h = h || 'top')),
                r.attr('position', [b.x, b.y]);
              var w = { textAlign: c, textVerticalAlign: h };
              d.setStyle(w), g.setStyle(w), (x = r.getBoundingRect());
              var S = b.margin,
                M = t.getItemStyle(['color', 'opacity']);
              M.fill = t.get('backgroundColor');
              var T = new a.Rect({
                shape: {
                  x: x.x - S[3],
                  y: x.y - S[0],
                  width: x.width + S[1] + S[3],
                  height: x.height + S[0] + S[2],
                  r: t.get('borderRadius'),
                },
                style: M,
                subPixelOptimize: !0,
                silent: !0,
              });
              r.add(T);
            }
          },
        });
    },
    Z8zF: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('ProS')),
        a = n('bYtY'),
        o = n('IwbS'),
        s = n('56rv'),
        l = s.setLabel,
        u = n('Qxkt'),
        c = n('tceW'),
        h = n('y+Vt'),
        d = n('4fz+'),
        f = n('iLNv'),
        p = f.throttle,
        g = n('sK/D'),
        v = g.createClipPath,
        m = n('wr5s'),
        y = ['itemStyle', 'barBorderWidth'],
        x = [0, 0];
      function _(t, e) {
        var n = t.getArea && t.getArea();
        if ('cartesian2d' === t.type) {
          var i = t.getBaseAxis();
          if ('category' !== i.type || !i.onBand) {
            var r = e.getLayout('bandWidth');
            i.isHorizontal() ? ((n.x -= r), (n.width += 2 * r)) : ((n.y -= r), (n.height += 2 * r));
          }
        }
        return n;
      }
      a.extend(u.prototype, c);
      var b = r.extendChartView({
          type: 'bar',
          render: function(t, e, n) {
            this._updateDrawMode(t);
            var i = t.get('coordinateSystem');
            return (
              ('cartesian2d' !== i && 'polar' !== i) ||
                (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)),
              this.group
            );
          },
          incrementalPrepareRender: function(t, e, n) {
            this._clear(), this._updateDrawMode(t);
          },
          incrementalRender: function(t, e, n, i) {
            this._incrementalRenderLarge(t, e);
          },
          _updateDrawMode: function(t) {
            var e = t.pipelineContext.large;
            (null == this._isLargeDraw || e ^ this._isLargeDraw) &&
              ((this._isLargeDraw = e), this._clear());
          },
          _renderNormal: function(t, e, n) {
            var i,
              r = this.group,
              a = t.getData(),
              s = this._data,
              l = t.coordinateSystem,
              u = l.getBaseAxis();
            'cartesian2d' === l.type
              ? (i = u.isHorizontal())
              : 'polar' === l.type && (i = 'angle' === u.dim);
            var c = t.isAnimationEnabled() ? t : null,
              h = t.get('clip', !0),
              f = _(l, a);
            r.removeClipPath();
            var p = t.get('roundCap', !0),
              g = t.get('showBackground', !0),
              v = t.getModel('backgroundStyle'),
              m = v.get('barBorderRadius') || 0,
              y = [],
              x = this._backgroundEls || [],
              b = function(t) {
                var e = k[l.type](a, t),
                  n = j(l, i, e);
                return (
                  n.useStyle(v.getBarItemStyle()),
                  'cartesian2d' === l.type && n.setShape('r', m),
                  (y[t] = n),
                  n
                );
              };
            a.diff(s)
              .add(function(e) {
                var n = a.getItemModel(e),
                  o = k[l.type](a, e, n);
                if ((g && b(e), a.hasValue(e))) {
                  if (h) {
                    var s = M[l.type](f, o);
                    if (s) return void r.remove(u);
                  }
                  var u = T[l.type](e, o, i, c, !1, p);
                  a.setItemGraphicEl(e, u), r.add(u), D(u, a, e, n, o, t, i, 'polar' === l.type);
                }
              })
              .update(function(e, n) {
                var u = a.getItemModel(e),
                  d = k[l.type](a, e, u);
                if (g) {
                  var _;
                  0 === x.length
                    ? (_ = b(n))
                    : ((_ = x[n]),
                      _.useStyle(v.getBarItemStyle()),
                      'cartesian2d' === l.type && _.setShape('r', m),
                      (y[e] = _));
                  var w = k[l.type](a, e),
                    S = B(i, w, l);
                  o.updateProps(_, { shape: S }, c, e);
                }
                var C = s.getItemGraphicEl(n);
                if (a.hasValue(e)) {
                  if (h) {
                    var I = M[l.type](f, d);
                    if (I) return void r.remove(C);
                  }
                  C ? o.updateProps(C, { shape: d }, c, e) : (C = T[l.type](e, d, i, c, !0, p)),
                    a.setItemGraphicEl(e, C),
                    r.add(C),
                    D(C, a, e, u, d, t, i, 'polar' === l.type);
                } else r.remove(C);
              })
              .remove(function(t) {
                var e = s.getItemGraphicEl(t);
                'cartesian2d' === l.type ? e && C(t, c, e) : e && I(t, c, e);
              })
              .execute();
            var w = this._backgroundGroup || (this._backgroundGroup = new d());
            w.removeAll();
            for (var S = 0; S < y.length; ++S) w.add(y[S]);
            r.add(w), (this._backgroundEls = y), (this._data = a);
          },
          _renderLarge: function(t, e, n) {
            this._clear(), E(t, this.group);
            var i = t.get('clip', !0) ? v(t.coordinateSystem, !1, t) : null;
            i ? this.group.setClipPath(i) : this.group.removeClipPath();
          },
          _incrementalRenderLarge: function(t, e) {
            this._removeBackground(), E(e, this.group, !0);
          },
          dispose: a.noop,
          remove: function(t) {
            this._clear(t);
          },
          _clear: function(t) {
            var e = this.group,
              n = this._data;
            t && t.get('animation') && n && !this._isLargeDraw
              ? (this._removeBackground(),
                (this._backgroundEls = []),
                n.eachItemGraphicEl(function(e) {
                  'sector' === e.type ? I(e.dataIndex, t, e) : C(e.dataIndex, t, e);
                }))
              : e.removeAll(),
              (this._data = null);
          },
          _removeBackground: function() {
            this.group.remove(this._backgroundGroup), (this._backgroundGroup = null);
          },
        }),
        w = Math.max,
        S = Math.min,
        M = {
          cartesian2d: function(t, e) {
            var n = e.width < 0 ? -1 : 1,
              i = e.height < 0 ? -1 : 1;
            n < 0 && ((e.x += e.width), (e.width = -e.width)),
              i < 0 && ((e.y += e.height), (e.height = -e.height));
            var r = w(e.x, t.x),
              a = S(e.x + e.width, t.x + t.width),
              o = w(e.y, t.y),
              s = S(e.y + e.height, t.y + t.height);
            (e.x = r), (e.y = o), (e.width = a - r), (e.height = s - o);
            var l = e.width < 0 || e.height < 0;
            return (
              n < 0 && ((e.x += e.width), (e.width = -e.width)),
              i < 0 && ((e.y += e.height), (e.height = -e.height)),
              l
            );
          },
          polar: function(t, e) {
            var n = e.r0 <= e.r ? 1 : -1;
            if (n < 0) {
              var i = e.r;
              (e.r = e.r0), (e.r0 = i);
            }
            i = S(e.r, t.r);
            var r = w(e.r0, t.r0);
            (e.r = i), (e.r0 = r);
            var a = i - r < 0;
            if (n < 0) {
              i = e.r;
              (e.r = e.r0), (e.r0 = i);
            }
            return a;
          },
        },
        T = {
          cartesian2d: function(t, e, n, i, r) {
            var s = new o.Rect({ shape: a.extend({}, e), z2: 1 });
            if (((s.name = 'item'), i)) {
              var l = s.shape,
                u = n ? 'height' : 'width',
                c = {};
              (l[u] = 0), (c[u] = e[u]), o[r ? 'updateProps' : 'initProps'](s, { shape: c }, i, t);
            }
            return s;
          },
          polar: function(t, e, n, i, r, s) {
            var l = e.startAngle < e.endAngle,
              u = !n && s ? m : o.Sector,
              c = new u({ shape: a.defaults({ clockwise: l }, e), z2: 1 });
            if (((c.name = 'item'), i)) {
              var h = c.shape,
                d = n ? 'r' : 'endAngle',
                f = {};
              (h[d] = n ? 0 : e.startAngle),
                (f[d] = e[d]),
                o[r ? 'updateProps' : 'initProps'](c, { shape: f }, i, t);
            }
            return c;
          },
        };
      function C(t, e, n) {
        (n.style.text = null),
          o.updateProps(n, { shape: { width: 0 } }, e, t, function() {
            n.parent && n.parent.remove(n);
          });
      }
      function I(t, e, n) {
        (n.style.text = null),
          o.updateProps(n, { shape: { r: n.shape.r0 } }, e, t, function() {
            n.parent && n.parent.remove(n);
          });
      }
      var k = {
        cartesian2d: function(t, e, n) {
          var i = t.getItemLayout(e),
            r = n ? O(n, i) : 0,
            a = i.width > 0 ? 1 : -1,
            o = i.height > 0 ? 1 : -1;
          return {
            x: i.x + (a * r) / 2,
            y: i.y + (o * r) / 2,
            width: i.width - a * r,
            height: i.height - o * r,
          };
        },
        polar: function(t, e, n) {
          var i = t.getItemLayout(e);
          return {
            cx: i.cx,
            cy: i.cy,
            r0: i.r0,
            r: i.r,
            startAngle: i.startAngle,
            endAngle: i.endAngle,
          };
        },
      };
      function A(t) {
        return null != t.startAngle && null != t.endAngle && t.startAngle === t.endAngle;
      }
      function D(t, e, n, i, r, s, u, c) {
        var h = e.getItemVisual(n, 'color'),
          d = e.getItemVisual(n, 'opacity'),
          f = e.getVisual('borderColor'),
          p = i.getModel('itemStyle'),
          g = i.getModel('emphasis.itemStyle').getBarItemStyle();
        c || t.setShape('r', p.get('barBorderRadius') || 0),
          t.useStyle(
            a.defaults(
              { stroke: A(r) ? 'none' : f, fill: A(r) ? 'none' : h, opacity: d },
              p.getBarItemStyle(),
            ),
          );
        var v = i.getShallow('cursor');
        v && t.attr('cursor', v);
        var m = u ? (r.height > 0 ? 'bottom' : 'top') : r.width > 0 ? 'left' : 'right';
        c || l(t.style, g, i, h, s, n, m),
          A(r) && (g.fill = g.stroke = 'none'),
          o.setHoverStyle(t, g);
      }
      function O(t, e) {
        var n = t.get(y) || 0,
          i = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width),
          r = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);
        return Math.min(n, i, r);
      }
      var P = h.extend({
        type: 'largeBar',
        shape: { points: [] },
        buildPath: function(t, e) {
          for (
            var n = e.points, i = this.__startPoint, r = this.__baseDimIdx, a = 0;
            a < n.length;
            a += 2
          )
            (i[r] = n[a + r]), t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1]);
        },
      });
      function E(t, e, n) {
        var i = t.getData(),
          r = [],
          a = i.getLayout('valueAxisHorizontal') ? 1 : 0;
        r[1 - a] = i.getLayout('valueAxisStart');
        var o = i.getLayout('largeDataIndices'),
          s = i.getLayout('barWidth'),
          l = t.getModel('backgroundStyle'),
          u = t.get('showBackground', !0);
        if (u) {
          var c = i.getLayout('largeBackgroundPoints'),
            h = [];
          h[1 - a] = i.getLayout('backgroundStart');
          var d = new P({
            shape: { points: c },
            incremental: !!n,
            __startPoint: h,
            __baseDimIdx: a,
            __largeDataIndices: o,
            __barWidth: s,
            silent: !0,
            z2: 0,
          });
          z(d, l, i), e.add(d);
        }
        var f = new P({
          shape: { points: i.getLayout('largePoints') },
          incremental: !!n,
          __startPoint: r,
          __baseDimIdx: a,
          __largeDataIndices: o,
          __barWidth: s,
        });
        e.add(f),
          N(f, t, i),
          (f.seriesIndex = t.seriesIndex),
          t.get('silent') || (f.on('mousedown', L), f.on('mousemove', L));
      }
      var L = p(
        function(t) {
          var e = this,
            n = R(e, t.offsetX, t.offsetY);
          e.dataIndex = n >= 0 ? n : null;
        },
        30,
        !1,
      );
      function R(t, e, n) {
        var i = t.__baseDimIdx,
          r = 1 - i,
          a = t.shape.points,
          o = t.__largeDataIndices,
          s = Math.abs(t.__barWidth / 2),
          l = t.__startPoint[r];
        (x[0] = e), (x[1] = n);
        for (
          var u = x[i], c = x[1 - i], h = u - s, d = u + s, f = 0, p = a.length / 2;
          f < p;
          f++
        ) {
          var g = 2 * f,
            v = a[g + i],
            m = a[g + r];
          if (v >= h && v <= d && (l <= m ? c >= l && c <= m : c >= m && c <= l)) return o[f];
        }
        return -1;
      }
      function N(t, e, n) {
        var i = n.getVisual('borderColor') || n.getVisual('color'),
          r = e.getModel('itemStyle').getItemStyle(['color', 'borderColor']);
        t.useStyle(r),
          (t.style.fill = null),
          (t.style.stroke = i),
          (t.style.lineWidth = n.getLayout('barWidth'));
      }
      function z(t, e, n) {
        var i = e.get('borderColor') || e.get('color'),
          r = e.getItemStyle(['color', 'borderColor']);
        t.useStyle(r),
          (t.style.fill = null),
          (t.style.stroke = i),
          (t.style.lineWidth = n.getLayout('barWidth'));
      }
      function B(t, e, n) {
        var i,
          r = 'polar' === n.type;
        return (
          (i = r ? n.getArea() : n.grid.getRect()),
          r
            ? {
                cx: i.cx,
                cy: i.cy,
                r0: t ? i.r0 : e.r0,
                r: t ? i.r : e.r,
                startAngle: t ? e.startAngle : 0,
                endAngle: t ? e.endAngle : 2 * Math.PI,
              }
            : {
                x: t ? e.x : i.x,
                y: t ? i.y : e.y,
                width: t ? e.width : i.width,
                height: t ? i.height : e.height,
              }
        );
      }
      function j(t, e, n) {
        var i = 'polar' === t.type ? o.Sector : o.Rect;
        return new i({ shape: B(e, n, t), silent: !0, z2: 0 });
      }
      t.exports = b;
    },
    Ze12: function(t, e, n) {
      var i = n('ItGF'),
        r = n('hOwI'),
        a = r.buildTransformer,
        o = '___zrEVENTSAVED',
        s = [];
      function l(t, e, n, i, r) {
        return u(s, e, i, r, !0) && u(t, n, s[0], s[1]);
      }
      function u(t, e, n, r, a) {
        if (e.getBoundingClientRect && i.domSupported && !d(e)) {
          var s = e[o] || (e[o] = {}),
            l = c(e, s),
            u = h(l, s, a);
          if (u) return u(t, n, r), !0;
        }
        return !1;
      }
      function c(t, e) {
        var n = e.markers;
        if (n) return n;
        n = e.markers = [];
        for (var i = ['left', 'right'], r = ['top', 'bottom'], a = 0; a < 4; a++) {
          var o = document.createElement('div'),
            s = o.style,
            l = a % 2,
            u = (a >> 1) % 2;
          (s.cssText = [
            'position: absolute',
            'visibility: hidden',
            'padding: 0',
            'margin: 0',
            'border-width: 0',
            'user-select: none',
            'width:0',
            'height:0',
            i[l] + ':0',
            r[u] + ':0',
            i[1 - l] + ':auto',
            r[1 - u] + ':auto',
            '',
          ].join('!important;')),
            t.appendChild(o),
            n.push(o);
        }
        return n;
      }
      function h(t, e, n) {
        for (
          var i = n ? 'invTrans' : 'trans',
            r = e[i],
            o = e.srcCoords,
            s = !0,
            l = [],
            u = [],
            c = 0;
          c < 4;
          c++
        ) {
          var h = t[c].getBoundingClientRect(),
            d = 2 * c,
            f = h.left,
            p = h.top;
          l.push(f, p),
            (s = s && o && f === o[d] && p === o[d + 1]),
            u.push(t[c].offsetLeft, t[c].offsetTop);
        }
        return s && r ? r : ((e.srcCoords = l), (e[i] = n ? a(u, l) : a(l, u)));
      }
      function d(t) {
        return 'CANVAS' === t.nodeName.toUpperCase();
      }
      (e.transformLocalCoord = l), (e.transformCoordWithViewport = u), (e.isCanvasEl = d);
    },
    Znkb: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('ProS')),
        a = n('zTMp'),
        o = r.extendComponentView({
          type: 'axis',
          _axisPointer: null,
          axisPointerClass: null,
          render: function(t, e, n, i) {
            this.axisPointerClass && a.fixValue(t),
              o.superApply(this, 'render', arguments),
              s(this, t, e, n, i, !0);
          },
          updateAxisPointer: function(t, e, n, i, r) {
            s(this, t, e, n, i, !1);
          },
          remove: function(t, e) {
            var n = this._axisPointer;
            n && n.remove(e), o.superApply(this, 'remove', arguments);
          },
          dispose: function(t, e) {
            l(this, e), o.superApply(this, 'dispose', arguments);
          },
        });
      function s(t, e, n, i, r, s) {
        var u = o.getAxisPointerClass(t.axisPointerClass);
        if (u) {
          var c = a.getAxisPointerModel(e);
          c ? (t._axisPointer || (t._axisPointer = new u())).render(e, c, i, s) : l(t, i);
        }
      }
      function l(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n), (t._axisPointer = null);
      }
      var u = [];
      (o.registerAxisPointerClass = function(t, e) {
        u[t] = e;
      }),
        (o.getAxisPointerClass = function(t) {
          return t && u[t];
        });
      var c = o;
      t.exports = c;
    },
    aKvl: function(t, e, n) {
      var i = n('Sj9i'),
        r = i.quadraticProjectPoint;
      function a(t, e, n, i, a, o, s, l, u) {
        if (0 === s) return !1;
        var c = s;
        if (
          (u > e + c && u > i + c && u > o + c) ||
          (u < e - c && u < i - c && u < o - c) ||
          (l > t + c && l > n + c && l > a + c) ||
          (l < t - c && l < n - c && l < a - c)
        )
          return !1;
        var h = r(t, e, n, i, a, o, l, u, null);
        return h <= c / 2;
      }
      e.containStroke = a;
    },
    aTJb: function(t, e, n) {
      var i = n('bLfw');
      i.registerSubTypeDefaulter('dataZoom', function() {
        return 'slider';
      });
    },
    aX58: function(t, e, n) {
      var i = n('3gBT'),
        r = n('ItGF'),
        a = n('bYtY'),
        o = n('0s+r'),
        s = n('r6Bn'),
        l = n('7SHv'),
        u = n('MKOG'),
        c = n('zarK'),
        h = !r.canvasSupported,
        d = { canvas: l },
        f = {},
        p = '4.3.2';
      function g(t, e) {
        var n = new _(i(), t, e);
        return (f[n.id] = n), n;
      }
      function v(t) {
        if (t) t.dispose();
        else {
          for (var e in f) f.hasOwnProperty(e) && f[e].dispose();
          f = {};
        }
        return this;
      }
      function m(t) {
        return f[t];
      }
      function y(t, e) {
        d[t] = e;
      }
      function x(t) {
        delete f[t];
      }
      var _ = function(t, e, n) {
        (n = n || {}), (this.dom = e), (this.id = t);
        var i = this,
          l = new s(),
          f = n.renderer;
        if (h) {
          if (!d.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
          f = 'vml';
        } else (f && d[f]) || (f = 'canvas');
        var p = new d[f](e, l, n, t);
        (this.storage = l), (this.painter = p);
        var g = r.node || r.worker ? null : new c(p.getViewportRoot(), p.root);
        (this.handler = new o(l, p, g, p.root)),
          (this.animation = new u({ stage: { update: a.bind(this.flush, this) } })),
          this.animation.start(),
          this._needsRefresh;
        var v = l.delFromStorage,
          m = l.addToStorage;
        (l.delFromStorage = function(t) {
          v.call(l, t), t && t.removeSelfFromZr(i);
        }),
          (l.addToStorage = function(t) {
            m.call(l, t), t.addSelfToZr(i);
          });
      };
      (_.prototype = {
        constructor: _,
        getId: function() {
          return this.id;
        },
        add: function(t) {
          this.storage.addRoot(t), (this._needsRefresh = !0);
        },
        remove: function(t) {
          this.storage.delRoot(t), (this._needsRefresh = !0);
        },
        configLayer: function(t, e) {
          this.painter.configLayer && this.painter.configLayer(t, e), (this._needsRefresh = !0);
        },
        setBackgroundColor: function(t) {
          this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
            (this._needsRefresh = !0);
        },
        refreshImmediately: function() {
          (this._needsRefresh = this._needsRefreshHover = !1),
            this.painter.refresh(),
            (this._needsRefresh = this._needsRefreshHover = !1);
        },
        refresh: function() {
          this._needsRefresh = !0;
        },
        flush: function() {
          var t;
          this._needsRefresh && ((t = !0), this.refreshImmediately()),
            this._needsRefreshHover && ((t = !0), this.refreshHoverImmediately()),
            t && this.trigger('rendered');
        },
        addHover: function(t, e) {
          if (this.painter.addHover) {
            var n = this.painter.addHover(t, e);
            return this.refreshHover(), n;
          }
        },
        removeHover: function(t) {
          this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
        },
        clearHover: function() {
          this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
        },
        refreshHover: function() {
          this._needsRefreshHover = !0;
        },
        refreshHoverImmediately: function() {
          (this._needsRefreshHover = !1), this.painter.refreshHover && this.painter.refreshHover();
        },
        resize: function(t) {
          (t = t || {}), this.painter.resize(t.width, t.height), this.handler.resize();
        },
        clearAnimation: function() {
          this.animation.clear();
        },
        getWidth: function() {
          return this.painter.getWidth();
        },
        getHeight: function() {
          return this.painter.getHeight();
        },
        pathToImage: function(t, e) {
          return this.painter.pathToImage(t, e);
        },
        setCursorStyle: function(t) {
          this.handler.setCursorStyle(t);
        },
        findHover: function(t, e) {
          return this.handler.findHover(t, e);
        },
        on: function(t, e, n) {
          this.handler.on(t, e, n);
        },
        off: function(t, e) {
          this.handler.off(t, e);
        },
        trigger: function(t, e) {
          this.handler.trigger(t, e);
        },
        clear: function() {
          this.storage.delRoot(), this.painter.clear();
        },
        dispose: function() {
          this.animation.stop(),
            this.clear(),
            this.storage.dispose(),
            this.painter.dispose(),
            this.handler.dispose(),
            (this.animation = this.storage = this.painter = this.handler = null),
            x(this.id);
        },
      }),
        (e.version = p),
        (e.init = g),
        (e.dispose = v),
        (e.getInstance = m),
        (e.registerPainter = y);
    },
    aX7z: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = n('GMDS'),
        o = n('ieMj'),
        s = n('4NgU'),
        l = n('OELB'),
        u = n('nVfU'),
        c = u.prepareLayoutBarSeries,
        h = u.makeColumnLayout,
        d = u.retrieveColumnLayout,
        f = n('mFDi');
      function p(t, e) {
        var n,
          i,
          a,
          o = t.type,
          s = e.getMin(),
          u = e.getMax(),
          d = t.getExtent();
        'ordinal' === o
          ? (n = e.getCategories().length)
          : ((i = e.get('boundaryGap')),
            r.isArray(i) || (i = [i || 0, i || 0]),
            'boolean' === typeof i[0] && (i = [0, 0]),
            (i[0] = l.parsePercent(i[0], 1)),
            (i[1] = l.parsePercent(i[1], 1)),
            (a = d[1] - d[0] || Math.abs(d[0]))),
          'dataMin' === s
            ? (s = d[0])
            : 'function' === typeof s && (s = s({ min: d[0], max: d[1] })),
          'dataMax' === u
            ? (u = d[1])
            : 'function' === typeof u && (u = u({ min: d[0], max: d[1] }));
        var f = null != s,
          p = null != u;
        null == s && (s = 'ordinal' === o ? (n ? 0 : NaN) : d[0] - i[0] * a),
          null == u && (u = 'ordinal' === o ? (n ? n - 1 : NaN) : d[1] + i[1] * a),
          (null == s || !isFinite(s)) && (s = NaN),
          (null == u || !isFinite(u)) && (u = NaN),
          t.setBlank(
            r.eqNaN(s) || r.eqNaN(u) || ('ordinal' === o && !t.getOrdinalMeta().categories.length),
          ),
          e.getNeedCrossZero() &&
            (s > 0 && u > 0 && !f && (s = 0), s < 0 && u < 0 && !p && (u = 0));
        var v = e.ecModel;
        if (v && 'time' === o) {
          var m,
            y = c('bar', v);
          if (
            (r.each(y, function(t) {
              m |= t.getBaseAxis() === e.axis;
            }),
            m)
          ) {
            var x = h(y),
              _ = g(s, u, e, x);
            (s = _.min), (u = _.max);
          }
        }
        return { extent: [s, u], fixMin: f, fixMax: p };
      }
      function g(t, e, n, i) {
        var a = n.axis.getExtent(),
          o = a[1] - a[0],
          s = d(i, n.axis);
        if (void 0 === s) return { min: t, max: e };
        var l = 1 / 0;
        r.each(s, function(t) {
          l = Math.min(t.offset, l);
        });
        var u = -1 / 0;
        r.each(s, function(t) {
          u = Math.max(t.offset + t.width, u);
        }),
          (l = Math.abs(l)),
          (u = Math.abs(u));
        var c = l + u,
          h = e - t,
          f = 1 - (l + u) / o,
          p = h / f - h;
        return (e += p * (u / c)), (t -= p * (l / c)), { min: t, max: e };
      }
      function v(t, e) {
        var n = p(t, e),
          i = n.extent,
          r = e.get('splitNumber');
        'log' === t.type && (t.base = e.get('logBase'));
        var a = t.type;
        t.setExtent(i[0], i[1]),
          t.niceExtent({
            splitNumber: r,
            fixMin: n.fixMin,
            fixMax: n.fixMax,
            minInterval: 'interval' === a || 'time' === a ? e.get('minInterval') : null,
            maxInterval: 'interval' === a || 'time' === a ? e.get('maxInterval') : null,
          });
        var o = e.get('interval');
        null != o && t.setInterval && t.setInterval(o);
      }
      function m(t, e) {
        if (((e = e || t.get('type')), e))
          switch (e) {
            case 'category':
              return new a(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [
                1 / 0,
                -1 / 0,
              ]);
            case 'value':
              return new o();
            default:
              return (s.getClass(e) || o).create(t);
          }
      }
      function y(t) {
        var e = t.scale.getExtent(),
          n = e[0],
          i = e[1];
        return !((n > 0 && i > 0) || (n < 0 && i < 0));
      }
      function x(t) {
        var e = t.getLabelModel().get('formatter'),
          n = 'category' === t.type ? t.scale.getExtent()[0] : null;
        return 'string' === typeof e
          ? ((e = (function(e) {
              return function(n) {
                return (n = t.scale.getLabel(n)), e.replace('{value}', null != n ? n : '');
              };
            })(e)),
            e)
          : 'function' === typeof e
          ? function(i, r) {
              return null != n && (r = i - n), e(_(t, i), r);
            }
          : function(e) {
              return t.scale.getLabel(e);
            };
      }
      function _(t, e) {
        return 'category' === t.type ? t.scale.getLabel(e) : e;
      }
      function b(t) {
        var e = t.model,
          n = t.scale;
        if (e.get('axisLabel.show') && !n.isBlank()) {
          var i,
            r,
            a = 'category' === t.type,
            o = n.getExtent();
          a ? (r = n.count()) : ((i = n.getTicks()), (r = i.length));
          var s,
            l = t.getLabelModel(),
            u = x(t),
            c = 1;
          r > 40 && (c = Math.ceil(r / 40));
          for (var h = 0; h < r; h += c) {
            var d = i ? i[h] : o[0] + h,
              f = u(d),
              p = l.getTextRect(f),
              g = w(p, l.get('rotate') || 0);
            s ? s.union(g) : (s = g);
          }
          return s;
        }
      }
      function w(t, e) {
        var n = (e * Math.PI) / 180,
          i = t.plain(),
          r = i.width,
          a = i.height,
          o = r * Math.abs(Math.cos(n)) + Math.abs(a * Math.sin(n)),
          s = r * Math.abs(Math.sin(n)) + Math.abs(a * Math.cos(n)),
          l = new f(i.x, i.y, o, s);
        return l;
      }
      function S(t) {
        var e = t.get('interval');
        return null == e ? 'auto' : e;
      }
      function M(t) {
        return 'category' === t.type && 0 === S(t.getLabelModel());
      }
      n('IWp7'),
        n('jCoz'),
        (e.getScaleExtent = p),
        (e.niceScaleExtent = v),
        (e.createScaleByModel = m),
        (e.ifAxisCrossZero = y),
        (e.makeLabelFormatter = x),
        (e.getAxisRawValue = _),
        (e.estimateLabelUnionRect = b),
        (e.getOptionCategoryInterval = S),
        (e.shouldShowAllLabels = M);
    },
    'af/B': function(t, e, n) {
      var i = n('bYtY'),
        r = i.each,
        a = i.map,
        o = i.isFunction,
        s = i.createHashMap,
        l = i.noop,
        u = n('9H2F'),
        c = u.createTask,
        h = n('iRjW'),
        d = h.getUID,
        f = n('fmMI'),
        p = n('hD7B'),
        g = n('4NO4'),
        v = g.normalizeToArray;
      function m(t, e, n, i) {
        (this.ecInstance = t), (this.api = e), this.unfinished;
        (n = this._dataProcessorHandlers = n.slice()), (i = this._visualHandlers = i.slice());
        (this._allHandlers = n.concat(i)), (this._stageTaskMap = s());
      }
      var y = m.prototype;
      function x(t, e, n, i, a) {
        var o;
        function s(t, e) {
          return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
        }
        (a = a || {}),
          r(e, function(e, r) {
            if (!a.visualType || a.visualType === e.visualType) {
              var l = t._stageTaskMap.get(e.uid),
                u = l.seriesTaskMap,
                c = l.overallTask;
              if (c) {
                var h,
                  d = c.agentStubMap;
                d.each(function(t) {
                  s(a, t) && (t.dirty(), (h = !0));
                }),
                  h && c.dirty(),
                  _(c, i);
                var f = t.getPerformArgs(c, a.block);
                d.each(function(t) {
                  t.perform(f);
                }),
                  (o |= c.perform(f));
              } else
                u &&
                  u.each(function(r, l) {
                    s(a, r) && r.dirty();
                    var u = t.getPerformArgs(r, a.block);
                    (u.skip = !e.performRawSeries && n.isSeriesFiltered(r.context.model)),
                      _(r, i),
                      (o |= r.perform(u));
                  });
            }
          }),
          (t.unfinished |= o);
      }
      (y.restoreData = function(t, e) {
        t.restoreData(e),
          this._stageTaskMap.each(function(t) {
            var e = t.overallTask;
            e && e.dirty();
          });
      }),
        (y.getPerformArgs = function(t, e) {
          if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id),
              i = n.context,
              r =
                !e &&
                n.progressiveEnabled &&
                (!i || i.progressiveRender) &&
                t.__idxInPipeline > n.blockIndex,
              a = r ? n.step : null,
              o = i && i.modDataCount,
              s = null != o ? Math.ceil(o / a) : null;
            return { step: a, modBy: s, modDataCount: o };
          }
        }),
        (y.getPipeline = function(t) {
          return this._pipelineMap.get(t);
        }),
        (y.updateStreamModes = function(t, e) {
          var n = this._pipelineMap.get(t.uid),
            i = t.getData(),
            r = i.count(),
            a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
            o = t.get('large') && r >= t.get('largeThreshold'),
            s = 'mod' === t.get('progressiveChunkMode') ? r : null;
          t.pipelineContext = n.context = { progressiveRender: a, modDataCount: s, large: o };
        }),
        (y.restorePipelines = function(t) {
          var e = this,
            n = (e._pipelineMap = s());
          t.eachSeries(function(t) {
            var i = t.getProgressive(),
              r = t.uid;
            n.set(r, {
              id: r,
              head: null,
              tail: null,
              threshold: t.getProgressiveThreshold(),
              progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
              blockIndex: -1,
              step: Math.round(i || 700),
              count: 0,
            }),
              P(e, t, t.dataTask);
          });
        }),
        (y.prepareStageTasks = function() {
          var t = this._stageTaskMap,
            e = this.ecInstance.getModel(),
            n = this.api;
          r(
            this._allHandlers,
            function(i) {
              var r = t.get(i.uid) || t.set(i.uid, []);
              i.reset && b(this, i, r, e, n), i.overallReset && w(this, i, r, e, n);
            },
            this,
          );
        }),
        (y.prepareView = function(t, e, n, i) {
          var r = t.renderTask,
            a = r.context;
          (a.model = e),
            (a.ecModel = n),
            (a.api = i),
            (r.__block = !t.incrementalPrepareRender),
            P(this, e, r);
        }),
        (y.performDataProcessorTasks = function(t, e) {
          x(this, this._dataProcessorHandlers, t, e, { block: !0 });
        }),
        (y.performVisualTasks = function(t, e, n) {
          x(this, this._visualHandlers, t, e, n);
        }),
        (y.performSeriesTasks = function(t) {
          var e;
          t.eachSeries(function(t) {
            e |= t.dataTask.perform();
          }),
            (this.unfinished |= e);
        }),
        (y.plan = function() {
          this._pipelineMap.each(function(t) {
            var e = t.tail;
            do {
              if (e.__block) {
                t.blockIndex = e.__idxInPipeline;
                break;
              }
              e = e.getUpstream();
            } while (e);
          });
        });
      var _ = (y.updatePayload = function(t, e) {
        'remain' !== e && (t.context.payload = e);
      });
      function b(t, e, n, i, r) {
        var a = n.seriesTaskMap || (n.seriesTaskMap = s()),
          o = e.seriesType,
          l = e.getTargetSeries;
        function u(n) {
          var o = n.uid,
            s = a.get(o) || a.set(o, c({ plan: I, reset: k, count: O }));
          (s.context = {
            model: n,
            ecModel: i,
            api: r,
            useClearVisual: e.isVisual && !e.isLayout,
            plan: e.plan,
            reset: e.reset,
            scheduler: t,
          }),
            P(t, n, s);
        }
        e.createOnAllSeries
          ? i.eachRawSeries(u)
          : o
          ? i.eachRawSeriesByType(o, u)
          : l && l(i, r).each(u);
        var h = t._pipelineMap;
        a.each(function(t, e) {
          h.get(e) || (t.dispose(), a.removeKey(e));
        });
      }
      function w(t, e, n, i, a) {
        var o = (n.overallTask = n.overallTask || c({ reset: S }));
        o.context = { ecModel: i, api: a, overallReset: e.overallReset, scheduler: t };
        var l = (o.agentStubMap = o.agentStubMap || s()),
          u = e.seriesType,
          h = e.getTargetSeries,
          d = !0,
          f = e.modifyOutputEnd;
        function p(e) {
          var n = e.uid,
            i = l.get(n);
          i || ((i = l.set(n, c({ reset: M, onDirty: C }))), o.dirty()),
            (i.context = { model: e, overallProgress: d, modifyOutputEnd: f }),
            (i.agent = o),
            (i.__block = d),
            P(t, e, i);
        }
        u ? i.eachRawSeriesByType(u, p) : h ? h(i, a).each(p) : ((d = !1), r(i.getSeries(), p));
        var g = t._pipelineMap;
        l.each(function(t, e) {
          g.get(e) || (t.dispose(), o.dirty(), l.removeKey(e));
        });
      }
      function S(t) {
        t.overallReset(t.ecModel, t.api, t.payload);
      }
      function M(t, e) {
        return t.overallProgress && T;
      }
      function T() {
        this.agent.dirty(), this.getDownstream().dirty();
      }
      function C() {
        this.agent && this.agent.dirty();
      }
      function I(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
      }
      function k(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = (t.resetDefines = v(t.reset(t.model, t.ecModel, t.api, t.payload)));
        return e.length > 1
          ? a(e, function(t, e) {
              return D(e);
            })
          : A;
      }
      var A = D(0);
      function D(t) {
        return function(e, n) {
          var i = n.data,
            r = n.resetDefines[t];
          if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(i, a);
          else r && r.progress && r.progress(e, i);
        };
      }
      function O(t) {
        return t.data.count();
      }
      function P(t, e, n) {
        var i = e.uid,
          r = t._pipelineMap.get(i);
        !r.head && (r.head = n),
          r.tail && r.tail.pipe(n),
          (r.tail = n),
          (n.__idxInPipeline = r.count++),
          (n.__pipeline = r);
      }
      function E(t) {
        L = null;
        try {
          t(R, N);
        } catch (e) {}
        return L;
      }
      m.wrapStageHandler = function(t, e) {
        return (
          o(t) && (t = { overallReset: t, seriesType: E(t) }),
          (t.uid = d('stageHandler')),
          e && (t.visualType = e),
          t
        );
      };
      var L,
        R = {},
        N = {};
      function z(t, e) {
        for (var n in e.prototype) t[n] = l;
      }
      z(R, f),
        z(N, p),
        (R.eachSeriesByType = R.eachRawSeriesByType = function(t) {
          L = t;
        }),
        (R.eachComponent = function(t) {
          'series' === t.mainType && t.subType && (L = t.subType);
        });
      var B = m;
      t.exports = B;
    },
    bLfw: function(t, e, n) {
      var i = n('bYtY'),
        r = n('Qxkt'),
        a = n('iRjW'),
        o = n('Yl7c'),
        s = o.enableClassManagement,
        l = o.parseClassType,
        u = n('4NO4'),
        c = u.makeInner,
        h = n('+TT/'),
        d = n('3hzK'),
        f = c(),
        p = r.extend({
          type: 'component',
          id: '',
          name: '',
          mainType: '',
          subType: '',
          componentIndex: 0,
          defaultOption: null,
          ecModel: null,
          dependentModels: [],
          uid: null,
          layoutMode: null,
          $constructor: function(t, e, n, i) {
            r.call(this, t, e, n, i), (this.uid = a.getUID('ec_cpt_model'));
          },
          init: function(t, e, n, i) {
            this.mergeDefaultAndTheme(t, n);
          },
          mergeDefaultAndTheme: function(t, e) {
            var n = this.layoutMode,
              r = n ? h.getLayoutParams(t) : {},
              a = e.getTheme();
            i.merge(t, a.get(this.mainType)),
              i.merge(t, this.getDefaultOption()),
              n && h.mergeLayoutParam(t, r, n);
          },
          mergeOption: function(t, e) {
            i.merge(this.option, t, !0);
            var n = this.layoutMode;
            n && h.mergeLayoutParam(this.option, t, n);
          },
          optionUpdated: function(t, e) {},
          getDefaultOption: function() {
            var t = f(this);
            if (!t.defaultOption) {
              var e = [],
                n = this.constructor;
              while (n) {
                var r = n.prototype.defaultOption;
                r && e.push(r), (n = n.superClass);
              }
              for (var a = {}, o = e.length - 1; o >= 0; o--) a = i.merge(a, e[o], !0);
              t.defaultOption = a;
            }
            return t.defaultOption;
          },
          getReferringComponents: function(t) {
            return this.ecModel.queryComponents({
              mainType: t,
              index: this.get(t + 'Index', !0),
              id: this.get(t + 'Id', !0),
            });
          },
        });
      function g(t) {
        var e = [];
        return (
          i.each(p.getClassesByMainType(t), function(t) {
            e = e.concat(t.prototype.dependencies || []);
          }),
          (e = i.map(e, function(t) {
            return l(t).main;
          })),
          'dataset' !== t && i.indexOf(e, 'dataset') <= 0 && e.unshift('dataset'),
          e
        );
      }
      s(p, { registerWhenExtend: !0 }),
        a.enableSubTypeDefaulter(p),
        a.enableTopologicalTravel(p, g),
        i.mixin(p, d);
      var v = p;
      t.exports = v;
    },
    bYtY: function(t, e) {
      var n = {
          '[object Function]': 1,
          '[object RegExp]': 1,
          '[object Date]': 1,
          '[object Error]': 1,
          '[object CanvasGradient]': 1,
          '[object CanvasPattern]': 1,
          '[object Image]': 1,
          '[object Canvas]': 1,
        },
        i = {
          '[object Int8Array]': 1,
          '[object Uint8Array]': 1,
          '[object Uint8ClampedArray]': 1,
          '[object Int16Array]': 1,
          '[object Uint16Array]': 1,
          '[object Int32Array]': 1,
          '[object Uint32Array]': 1,
          '[object Float32Array]': 1,
          '[object Float64Array]': 1,
        },
        r = Object.prototype.toString,
        a = Array.prototype,
        o = a.forEach,
        s = a.filter,
        l = a.slice,
        u = a.map,
        c = a.reduce,
        h = {};
      function d(t, e) {
        'createCanvas' === t && (y = null), (h[t] = e);
      }
      function f(t) {
        if (null == t || 'object' !== typeof t) return t;
        var e = t,
          a = r.call(t);
        if ('[object Array]' === a) {
          if (!q(t)) {
            e = [];
            for (var o = 0, s = t.length; o < s; o++) e[o] = f(t[o]);
          }
        } else if (i[a]) {
          if (!q(t)) {
            var l = t.constructor;
            if (t.constructor.from) e = l.from(t);
            else {
              e = new l(t.length);
              for (o = 0, s = t.length; o < s; o++) e[o] = f(t[o]);
            }
          }
        } else if (!n[a] && !q(t) && !B(t))
          for (var u in ((e = {}), t)) t.hasOwnProperty(u) && (e[u] = f(t[u]));
        return e;
      }
      function p(t, e, n) {
        if (!R(e) || !R(t)) return n ? f(e) : t;
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var r = t[i],
              a = e[i];
            !R(a) || !R(r) || P(a) || P(r) || B(a) || B(r) || N(a) || N(r) || q(a) || q(r)
              ? (!n && i in t) || (t[i] = f(e[i], !0))
              : p(r, a, n);
          }
        return t;
      }
      function g(t, e) {
        for (var n = t[0], i = 1, r = t.length; i < r; i++) n = p(n, t[i], e);
        return n;
      }
      function v(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      }
      function m(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t;
      }
      var y,
        x = function() {
          return h.createCanvas();
        };
      function _() {
        return y || (y = x().getContext('2d')), y;
      }
      function b(t, e) {
        if (t) {
          if (t.indexOf) return t.indexOf(e);
          for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        }
        return -1;
      }
      function w(t, e) {
        var n = t.prototype;
        function i() {}
        for (var r in ((i.prototype = e.prototype), (t.prototype = new i()), n))
          n.hasOwnProperty(r) && (t.prototype[r] = n[r]);
        (t.prototype.constructor = t), (t.superClass = e);
      }
      function S(t, e, n) {
        (t = 'prototype' in t ? t.prototype : t),
          (e = 'prototype' in e ? e.prototype : e),
          m(t, e, n);
      }
      function M(t) {
        if (t) return 'string' !== typeof t && 'number' === typeof t.length;
      }
      function T(t, e, n) {
        if (t && e)
          if (t.forEach && t.forEach === o) t.forEach(e, n);
          else if (t.length === +t.length)
            for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t);
          else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t);
      }
      function C(t, e, n) {
        if (t && e) {
          if (t.map && t.map === u) return t.map(e, n);
          for (var i = [], r = 0, a = t.length; r < a; r++) i.push(e.call(n, t[r], r, t));
          return i;
        }
      }
      function I(t, e, n, i) {
        if (t && e) {
          if (t.reduce && t.reduce === c) return t.reduce(e, n, i);
          for (var r = 0, a = t.length; r < a; r++) n = e.call(i, n, t[r], r, t);
          return n;
        }
      }
      function k(t, e, n) {
        if (t && e) {
          if (t.filter && t.filter === s) return t.filter(e, n);
          for (var i = [], r = 0, a = t.length; r < a; r++) e.call(n, t[r], r, t) && i.push(t[r]);
          return i;
        }
      }
      function A(t, e, n) {
        if (t && e)
          for (var i = 0, r = t.length; i < r; i++) if (e.call(n, t[i], i, t)) return t[i];
      }
      function D(t, e) {
        var n = l.call(arguments, 2);
        return function() {
          return t.apply(e, n.concat(l.call(arguments)));
        };
      }
      function O(t) {
        var e = l.call(arguments, 1);
        return function() {
          return t.apply(this, e.concat(l.call(arguments)));
        };
      }
      function P(t) {
        return '[object Array]' === r.call(t);
      }
      function E(t) {
        return 'function' === typeof t;
      }
      function L(t) {
        return '[object String]' === r.call(t);
      }
      function R(t) {
        var e = typeof t;
        return 'function' === e || (!!t && 'object' === e);
      }
      function N(t) {
        return !!n[r.call(t)];
      }
      function z(t) {
        return !!i[r.call(t)];
      }
      function B(t) {
        return (
          'object' === typeof t &&
          'number' === typeof t.nodeType &&
          'object' === typeof t.ownerDocument
        );
      }
      function j(t) {
        return t !== t;
      }
      function F(t) {
        for (var e = 0, n = arguments.length; e < n; e++)
          if (null != arguments[e]) return arguments[e];
      }
      function Y(t, e) {
        return null != t ? t : e;
      }
      function V(t, e, n) {
        return null != t ? t : null != e ? e : n;
      }
      function H() {
        return Function.call.apply(l, arguments);
      }
      function W(t) {
        if ('number' === typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
      }
      function G(t, e) {
        if (!t) throw new Error(e);
      }
      function U(t) {
        return null == t
          ? null
          : 'function' === typeof t.trim
          ? t.trim()
          : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
      h.createCanvas = function() {
        return document.createElement('canvas');
      };
      var X = '__ec_primitive__';
      function Z(t) {
        t[X] = !0;
      }
      function q(t) {
        return t[X];
      }
      function K(t) {
        var e = P(t);
        this.data = {};
        var n = this;
        function i(t, i) {
          e ? n.set(t, i) : n.set(i, t);
        }
        t instanceof K ? t.each(i) : t && T(t, i);
      }
      function Q(t) {
        return new K(t);
      }
      function J(t, e) {
        for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
        var r = t.length;
        for (i = 0; i < e.length; i++) n[i + r] = e[i];
        return n;
      }
      function $() {}
      (K.prototype = {
        constructor: K,
        get: function(t) {
          return this.data.hasOwnProperty(t) ? this.data[t] : null;
        },
        set: function(t, e) {
          return (this.data[t] = e);
        },
        each: function(t, e) {
          for (var n in (void 0 !== e && (t = D(t, e)), this.data))
            this.data.hasOwnProperty(n) && t(this.data[n], n);
        },
        removeKey: function(t) {
          delete this.data[t];
        },
      }),
        (e.$override = d),
        (e.clone = f),
        (e.merge = p),
        (e.mergeAll = g),
        (e.extend = v),
        (e.defaults = m),
        (e.createCanvas = x),
        (e.getContext = _),
        (e.indexOf = b),
        (e.inherits = w),
        (e.mixin = S),
        (e.isArrayLike = M),
        (e.each = T),
        (e.map = C),
        (e.reduce = I),
        (e.filter = k),
        (e.find = A),
        (e.bind = D),
        (e.curry = O),
        (e.isArray = P),
        (e.isFunction = E),
        (e.isString = L),
        (e.isObject = R),
        (e.isBuiltInObject = N),
        (e.isTypedArray = z),
        (e.isDom = B),
        (e.eqNaN = j),
        (e.retrieve = F),
        (e.retrieve2 = Y),
        (e.retrieve3 = V),
        (e.slice = H),
        (e.normalizeCssArray = W),
        (e.assert = G),
        (e.trim = U),
        (e.setAsPrimitive = Z),
        (e.isPrimitive = q),
        (e.createHashMap = Q),
        (e.concatArray = J),
        (e.noop = $);
    },
    cCMj: function(t, e, n) {
      var i = n('bYtY'),
        r = {
          updateSelectedMap: function(t) {
            (this._targetList = i.isArray(t) ? t.slice() : []),
              (this._selectTargetMap = i.reduce(
                t || [],
                function(t, e) {
                  return t.set(e.name, e), t;
                },
                i.createHashMap(),
              ));
          },
          select: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
              i = this.get('selectedMode');
            'single' === i &&
              this._selectTargetMap.each(function(t) {
                t.selected = !1;
              }),
              n && (n.selected = !0);
          },
          unSelect: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1);
          },
          toggleSelected: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            if (null != n) return this[n.selected ? 'unSelect' : 'select'](t, e), n.selected;
          },
          isSelected: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected;
          },
        };
      t.exports = r;
    },
    ca2m: function(t, e, n) {
      var i = n('bYtY'),
        r = {
          show: !0,
          zlevel: 0,
          z: 0,
          inverse: !1,
          name: '',
          nameLocation: 'end',
          nameRotate: null,
          nameTruncate: { maxWidth: null, ellipsis: '...', placeholder: '.' },
          nameTextStyle: {},
          nameGap: 15,
          silent: !1,
          triggerEvent: !1,
          tooltip: { show: !1 },
          axisPointer: {},
          axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: { color: '#333', width: 1, type: 'solid' },
            symbol: ['none', 'none'],
            symbolSize: [10, 15],
          },
          axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
          axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12,
          },
          splitLine: { show: !0, lineStyle: { color: ['#ccc'], width: 1, type: 'solid' } },
          splitArea: {
            show: !1,
            areaStyle: { color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'] },
          },
        },
        a = {};
      (a.categoryAxis = i.merge(
        {
          boundaryGap: !0,
          deduplication: null,
          splitLine: { show: !1 },
          axisTick: { alignWithLabel: !1, interval: 'auto' },
          axisLabel: { interval: 'auto' },
        },
        r,
      )),
        (a.valueAxis = i.merge(
          {
            boundaryGap: [0, 0],
            splitNumber: 5,
            minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
            minorSplitLine: { show: !1, lineStyle: { color: '#eee', width: 1 } },
          },
          r,
        )),
        (a.timeAxis = i.defaults({ scale: !0, min: 'dataMin', max: 'dataMax' }, a.valueAxis)),
        (a.logAxis = i.defaults({ scale: !0, logBase: 10 }, a.valueAxis));
      var o = a;
      t.exports = o;
    },
    d4KN: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY');
      function a(t, e) {
        r.each(e, function(e) {
          (e.update = 'updateView'),
            i.registerAction(e, function(n, i) {
              var r = {};
              return (
                i.eachComponent({ mainType: 'series', subType: t, query: n }, function(t) {
                  t[e.method] && t[e.method](n.name, n.dataIndex);
                  var i = t.getData();
                  i.each(function(e) {
                    var n = i.getName(e);
                    r[n] = t.isSelected(n) || !1;
                  });
                }),
                { name: n.name, selected: r, seriesId: n.seriesId }
              );
            });
        });
      }
      t.exports = a;
    },
    dMvE: function(t, e) {
      var n = {
          linear: function(t) {
            return t;
          },
          quadraticIn: function(t) {
            return t * t;
          },
          quadraticOut: function(t) {
            return t * (2 - t);
          },
          quadraticInOut: function(t) {
            return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          cubicIn: function(t) {
            return t * t * t;
          },
          cubicOut: function(t) {
            return --t * t * t + 1;
          },
          cubicInOut: function(t) {
            return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
          },
          quarticIn: function(t) {
            return t * t * t * t;
          },
          quarticOut: function(t) {
            return 1 - --t * t * t * t;
          },
          quarticInOut: function(t) {
            return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          quinticIn: function(t) {
            return t * t * t * t * t;
          },
          quinticOut: function(t) {
            return --t * t * t * t * t + 1;
          },
          quinticInOut: function(t) {
            return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
          },
          sinusoidalIn: function(t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          },
          sinusoidalOut: function(t) {
            return Math.sin((t * Math.PI) / 2);
          },
          sinusoidalInOut: function(t) {
            return 0.5 * (1 - Math.cos(Math.PI * t));
          },
          exponentialIn: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
          },
          exponentialOut: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          exponentialInOut: function(t) {
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (t *= 2) < 1
              ? 0.5 * Math.pow(1024, t - 1)
              : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
          },
          circularIn: function(t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          circularOut: function(t) {
            return Math.sqrt(1 - --t * t);
          },
          circularInOut: function(t) {
            return (t *= 2) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          elasticIn: function(t) {
            var e,
              n = 0.1,
              i = 0.4;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (!n || n < 1
                  ? ((n = 1), (e = i / 4))
                  : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)),
                -n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / i));
          },
          elasticOut: function(t) {
            var e,
              n = 0.1,
              i = 0.4;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (!n || n < 1
                  ? ((n = 1), (e = i / 4))
                  : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)),
                n * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / i) + 1);
          },
          elasticInOut: function(t) {
            var e,
              n = 0.1,
              i = 0.4;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (!n || n < 1
                  ? ((n = 1), (e = i / 4))
                  : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)),
                (t *= 2) < 1
                  ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / i) * -0.5
                  : n *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / i) *
                      0.5 +
                    1);
          },
          backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          backOut: function(t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
          },
          backInOut: function(t) {
            var e = 2.5949095;
            return (t *= 2) < 1
              ? t * t * ((e + 1) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
          },
          bounceIn: function(t) {
            return 1 - n.bounceOut(1 - t);
          },
          bounceOut: function(t) {
            return t < 1 / 2.75
              ? 7.5625 * t * t
              : t < 2 / 2.75
              ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
              : t < 2.5 / 2.75
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
          },
          bounceInOut: function(t) {
            return t < 0.5 ? 0.5 * n.bounceIn(2 * t) : 0.5 * n.bounceOut(2 * t - 1) + 0.5;
          },
        },
        i = n;
      t.exports = i;
    },
    dqUG: function(t, e, n) {
      var i = n('Gev7'),
        r = n('bYtY'),
        a = n('6GrX'),
        o = n('pzxd'),
        s = n('gut8'),
        l = s.ContextCachedBy,
        u = function(t) {
          i.call(this, t);
        };
      (u.prototype = {
        constructor: u,
        type: 'text',
        brush: function(t, e) {
          var n = this.style;
          this.__dirty && o.normalizeTextStyle(n, !0),
            (n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null);
          var i = n.text;
          null != i && (i += ''),
            o.needDrawText(i, n)
              ? (this.setTransform(t),
                o.renderText(this, t, i, n, null, e),
                this.restoreTransform(t))
              : (t.__attrCachedBy = l.NONE);
        },
        getBoundingRect: function() {
          var t = this.style;
          if ((this.__dirty && o.normalizeTextStyle(t, !0), !this._rect)) {
            var e = t.text;
            null != e ? (e += '') : (e = '');
            var n = a.getBoundingRect(
              t.text + '',
              t.font,
              t.textAlign,
              t.textVerticalAlign,
              t.textPadding,
              t.textLineHeight,
              t.rich,
            );
            if (
              ((n.x += t.x || 0), (n.y += t.y || 0), o.getStroke(t.textStroke, t.textStrokeWidth))
            ) {
              var i = t.textStrokeWidth;
              (n.x -= i / 2), (n.y -= i / 2), (n.width += i), (n.height += i);
            }
            this._rect = n;
          }
          return this._rect;
        },
      }),
        r.inherits(u, i);
      var c = u;
      t.exports = c;
    },
    eRkO: function(t, e, n) {
      var i = n('+TT/'),
        r = i.getLayoutRect,
        a = i.box,
        o = i.positionElement,
        s = n('7aKB'),
        l = n('IwbS');
      function u(t, e, n) {
        var i = e.getBoxLayoutParams(),
          s = e.get('padding'),
          l = { width: n.getWidth(), height: n.getHeight() },
          u = r(i, l, s);
        a(e.get('orient'), t, e.get('itemGap'), u.width, u.height), o(t, i, l, s);
      }
      function c(t, e) {
        var n = s.normalizeCssArray(e.get('padding')),
          i = e.getItemStyle(['color', 'opacity']);
        i.fill = e.get('backgroundColor');
        t = new l.Rect({
          shape: {
            x: t.x - n[3],
            y: t.y - n[0],
            width: t.width + n[1] + n[3],
            height: t.height + n[0] + n[2],
            r: e.get('borderRadius'),
          },
          style: i,
          silent: !0,
          z2: -1,
        });
        return t;
      }
      (e.layout = u), (e.makeBackground = c);
    },
    f3JH: function(t, e, n) {
      n('aTJb'), n('OlYY'), n('fc+c'), n('oY9F'), n('MqEG'), n('LBfv'), n('noeP');
    },
    f5Yq: function(t, e, n) {
      var i = n('bYtY'),
        r = i.isFunction;
      function a(t, e, n) {
        return {
          seriesType: t,
          performRawSeries: !0,
          reset: function(t, i, a) {
            var o = t.getData(),
              s = t.get('symbol'),
              l = t.get('symbolSize'),
              u = t.get('symbolKeepAspect'),
              c = t.get('symbolRotate'),
              h = r(s),
              d = r(l),
              f = r(c),
              p = h || d || f,
              g = !h && s ? s : e,
              v = d ? null : l;
            if (
              (o.setVisual({
                legendSymbol: n || g,
                symbol: g,
                symbolSize: v,
                symbolKeepAspect: u,
                symbolRotate: c,
              }),
              !i.isSeriesFiltered(t))
            )
              return { dataEach: o.hasItemOption || p ? m : null };
            function m(e, n) {
              if (p) {
                var i = t.getRawValue(n),
                  r = t.getDataParams(n);
                h && e.setItemVisual(n, 'symbol', s(i, r)),
                  d && e.setItemVisual(n, 'symbolSize', l(i, r)),
                  f && e.setItemVisual(n, 'symbolRotate', c(i, r));
              }
              if (e.hasItemOption) {
                var a = e.getItemModel(n),
                  o = a.getShallow('symbol', !0),
                  u = a.getShallow('symbolSize', !0),
                  g = a.getShallow('symbolRotate', !0),
                  v = a.getShallow('symbolKeepAspect', !0);
                null != o && e.setItemVisual(n, 'symbol', o),
                  null != u && e.setItemVisual(n, 'symbolSize', u),
                  null != g && e.setItemVisual(n, 'symbolRotate', g),
                  null != v && e.setItemVisual(n, 'symbolKeepAspect', v);
              }
            }
          },
        };
      }
      t.exports = a;
    },
    fNCr: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var i = r(n('tSko'));
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var a = i;
      (e.default = a), (t.exports = a);
    },
    fW2E: function(t, e) {
      var n = {
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textBoxShadowBlur: 1,
        textBoxShadowOffsetX: 1,
        textBoxShadowOffsetY: 1,
      };
      function i(t, e, i) {
        return n.hasOwnProperty(e) ? i * t.dpr : i;
      }
      t.exports = i;
    },
    'fc+c': function(t, e, n) {
      var i = n('sS/r'),
        r = i.extend({
          type: 'dataZoom',
          render: function(t, e, n, i) {
            (this.dataZoomModel = t), (this.ecModel = e), (this.api = n);
          },
          getTargetCoordInfo: function() {
            var t = this.dataZoomModel,
              e = this.ecModel,
              n = {};
            function i(t, e, n, i) {
              for (var r, a = 0; a < n.length; a++)
                if (n[a].model === t) {
                  r = n[a];
                  break;
                }
              r || n.push((r = { model: t, axisModels: [], coordIndex: i })), r.axisModels.push(e);
            }
            return (
              t.eachTargetAxis(function(t, r) {
                var a = e.getComponent(t.axis, r);
                if (a) {
                  var o = a.getCoordSysModel();
                  o && i(o, a, n[o.mainType] || (n[o.mainType] = []), o.componentIndex);
                }
              }, this),
              n
            );
          },
        });
      t.exports = r;
    },
    fmMI: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = r.each,
        o = r.filter,
        s = r.map,
        l = r.isArray,
        u = r.indexOf,
        c = r.isObject,
        h = r.isString,
        d = r.createHashMap,
        f = r.assert,
        p = r.clone,
        g = r.merge,
        v = r.extend,
        m = r.mixin,
        y = n('4NO4'),
        x = n('Qxkt'),
        _ = n('bLfw'),
        b = n('iXHM'),
        w = n('5Hur'),
        S = n('D5nY'),
        M = S.resetSourceDefaulter,
        T = '\0_ec_inner',
        C = x.extend({
          init: function(t, e, n, i) {
            (n = n || {}),
              (this.option = null),
              (this._theme = new x(n)),
              (this._optionManager = i);
          },
          setOption: function(t, e) {
            f(!(T in t), 'please use chart.getOption()'),
              this._optionManager.setOption(t, e),
              this.resetOption(null);
          },
          resetOption: function(t) {
            var e = !1,
              n = this._optionManager;
            if (!t || 'recreate' === t) {
              var i = n.mountOption('recreate' === t);
              this.option && 'recreate' !== t
                ? (this.restoreData(), this.mergeOption(i))
                : A.call(this, i),
                (e = !0);
            }
            if (
              (('timeline' !== t && 'media' !== t) || this.restoreData(),
              !t || 'recreate' === t || 'timeline' === t)
            ) {
              var r = n.getTimelineOption(this);
              r && (this.mergeOption(r), (e = !0));
            }
            if (!t || 'recreate' === t || 'media' === t) {
              var o = n.getMediaOption(this, this._api);
              o.length &&
                a(
                  o,
                  function(t) {
                    this.mergeOption(t, (e = !0));
                  },
                  this,
                );
            }
            return e;
          },
          mergeOption: function(t) {
            var e = this.option,
              n = this._componentsMap,
              i = [];
            function r(i, r) {
              var o = y.normalizeToArray(t[i]),
                s = y.mappingToExists(n.get(i), o);
              y.makeIdAndName(s),
                a(s, function(t, e) {
                  var n = t.option;
                  c(n) && ((t.keyInfo.mainType = i), (t.keyInfo.subType = O(i, n, t.exist)));
                });
              var l = D(n, r);
              (e[i] = []),
                n.set(i, []),
                a(
                  s,
                  function(t, r) {
                    var a = t.exist,
                      o = t.option;
                    if ((f(c(o) || a, 'Empty component definition'), o)) {
                      var s = _.getClass(i, t.keyInfo.subType, !0);
                      if (a && a.constructor === s)
                        (a.name = t.keyInfo.name), a.mergeOption(o, this), a.optionUpdated(o, !1);
                      else {
                        var u = v({ dependentModels: l, componentIndex: r }, t.keyInfo);
                        (a = new s(o, this, this, u)),
                          v(a, u),
                          a.init(o, this, this, u),
                          a.optionUpdated(null, !0);
                      }
                    } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                    (n.get(i)[r] = a), (e[i][r] = a.option);
                  },
                  this,
                ),
                'series' === i && P(this, n.get('series'));
            }
            M(this),
              a(t, function(t, n) {
                null != t &&
                  (_.hasClass(n) ? n && i.push(n) : (e[n] = null == e[n] ? p(t) : g(e[n], t, !0)));
              }),
              _.topologicalTravel(i, _.getAllClassMainTypes(), r, this),
              (this._seriesIndicesMap = d((this._seriesIndices = this._seriesIndices || [])));
          },
          getOption: function() {
            var t = p(this.option);
            return (
              a(t, function(e, n) {
                if (_.hasClass(n)) {
                  e = y.normalizeToArray(e);
                  for (var i = e.length - 1; i >= 0; i--) y.isIdInner(e[i]) && e.splice(i, 1);
                  t[n] = e;
                }
              }),
              delete t[T],
              t
            );
          },
          getTheme: function() {
            return this._theme;
          },
          getComponent: function(t, e) {
            var n = this._componentsMap.get(t);
            if (n) return n[e || 0];
          },
          queryComponents: function(t) {
            var e = t.mainType;
            if (!e) return [];
            var n,
              i = t.index,
              r = t.id,
              a = t.name,
              c = this._componentsMap.get(e);
            if (!c || !c.length) return [];
            if (null != i)
              l(i) || (i = [i]),
                (n = o(
                  s(i, function(t) {
                    return c[t];
                  }),
                  function(t) {
                    return !!t;
                  },
                ));
            else if (null != r) {
              var h = l(r);
              n = o(c, function(t) {
                return (h && u(r, t.id) >= 0) || (!h && t.id === r);
              });
            } else if (null != a) {
              var d = l(a);
              n = o(c, function(t) {
                return (d && u(a, t.name) >= 0) || (!d && t.name === a);
              });
            } else n = c.slice();
            return E(n, t);
          },
          findComponents: function(t) {
            var e = t.query,
              n = t.mainType,
              i = a(e),
              r = i ? this.queryComponents(i) : this._componentsMap.get(n);
            return s(E(r, t));
            function a(t) {
              var e = n + 'Index',
                i = n + 'Id',
                r = n + 'Name';
              return !t || (null == t[e] && null == t[i] && null == t[r])
                ? null
                : { mainType: n, index: t[e], id: t[i], name: t[r] };
            }
            function s(e) {
              return t.filter ? o(e, t.filter) : e;
            }
          },
          eachComponent: function(t, e, n) {
            var i = this._componentsMap;
            if ('function' === typeof t)
              (n = e),
                (e = t),
                i.each(function(t, i) {
                  a(t, function(t, r) {
                    e.call(n, i, t, r);
                  });
                });
            else if (h(t)) a(i.get(t), e, n);
            else if (c(t)) {
              var r = this.findComponents(t);
              a(r, e, n);
            }
          },
          getSeriesByName: function(t) {
            var e = this._componentsMap.get('series');
            return o(e, function(e) {
              return e.name === t;
            });
          },
          getSeriesByIndex: function(t) {
            return this._componentsMap.get('series')[t];
          },
          getSeriesByType: function(t) {
            var e = this._componentsMap.get('series');
            return o(e, function(e) {
              return e.subType === t;
            });
          },
          getSeries: function() {
            return this._componentsMap.get('series').slice();
          },
          getSeriesCount: function() {
            return this._componentsMap.get('series').length;
          },
          eachSeries: function(t, e) {
            L(this),
              a(
                this._seriesIndices,
                function(n) {
                  var i = this._componentsMap.get('series')[n];
                  t.call(e, i, n);
                },
                this,
              );
          },
          eachRawSeries: function(t, e) {
            a(this._componentsMap.get('series'), t, e);
          },
          eachSeriesByType: function(t, e, n) {
            L(this),
              a(
                this._seriesIndices,
                function(i) {
                  var r = this._componentsMap.get('series')[i];
                  r.subType === t && e.call(n, r, i);
                },
                this,
              );
          },
          eachRawSeriesByType: function(t, e, n) {
            return a(this.getSeriesByType(t), e, n);
          },
          isSeriesFiltered: function(t) {
            return L(this), null == this._seriesIndicesMap.get(t.componentIndex);
          },
          getCurrentSeriesIndices: function() {
            return (this._seriesIndices || []).slice();
          },
          filterSeries: function(t, e) {
            L(this);
            var n = o(this._componentsMap.get('series'), t, e);
            P(this, n);
          },
          restoreData: function(t) {
            var e = this._componentsMap;
            P(this, e.get('series'));
            var n = [];
            e.each(function(t, e) {
              n.push(e);
            }),
              _.topologicalTravel(n, _.getAllClassMainTypes(), function(n, i) {
                a(e.get(n), function(e) {
                  ('series' !== n || !I(e, t)) && e.restoreData();
                });
              });
          },
        });
      function I(t, e) {
        if (e) {
          var n = e.seiresIndex,
            i = e.seriesId,
            r = e.seriesName;
          return (
            (null != n && t.componentIndex !== n) ||
            (null != i && t.id !== i) ||
            (null != r && t.name !== r)
          );
        }
      }
      function k(t, e) {
        var n = t.color && !t.colorLayer;
        a(e, function(e, i) {
          ('colorLayer' === i && n) ||
            _.hasClass(i) ||
            ('object' === typeof e
              ? (t[i] = t[i] ? g(t[i], e, !1) : p(e))
              : null == t[i] && (t[i] = e));
        });
      }
      function A(t) {
        (t = t),
          (this.option = {}),
          (this.option[T] = 1),
          (this._componentsMap = d({ series: [] })),
          this._seriesIndices,
          this._seriesIndicesMap,
          k(t, this._theme.option),
          g(t, b, !1),
          this.mergeOption(t);
      }
      function D(t, e) {
        l(e) || (e = e ? [e] : []);
        var n = {};
        return (
          a(e, function(e) {
            n[e] = (t.get(e) || []).slice();
          }),
          n
        );
      }
      function O(t, e, n) {
        var i = e.type ? e.type : n ? n.subType : _.determineSubType(t, e);
        return i;
      }
      function P(t, e) {
        t._seriesIndicesMap = d(
          (t._seriesIndices =
            s(e, function(t) {
              return t.componentIndex;
            }) || []),
        );
      }
      function E(t, e) {
        return e.hasOwnProperty('subType')
          ? o(t, function(t) {
              return t.subType === e.subType;
            })
          : t;
      }
      function L(t) {}
      m(C, w);
      var R = C;
      t.exports = R;
    },
    gPAo: function(t, e) {
      function n(t) {
        return t;
      }
      function i(t, e, i, r, a) {
        (this._old = t),
          (this._new = e),
          (this._oldKeyGetter = i || n),
          (this._newKeyGetter = r || n),
          (this.context = a);
      }
      function r(t, e, n, i, r) {
        for (var a = 0; a < t.length; a++) {
          var o = '_ec_' + r[i](t[a], a),
            s = e[o];
          null == s ? (n.push(o), (e[o] = a)) : (s.length || (e[o] = s = [s]), s.push(a));
        }
      }
      i.prototype = {
        constructor: i,
        add: function(t) {
          return (this._add = t), this;
        },
        update: function(t) {
          return (this._update = t), this;
        },
        remove: function(t) {
          return (this._remove = t), this;
        },
        execute: function() {
          var t = this._old,
            e = this._new,
            n = {},
            i = {},
            a = [],
            o = [];
          for (
            r(t, n, a, '_oldKeyGetter', this), r(e, i, o, '_newKeyGetter', this), c = 0;
            c < t.length;
            c++
          ) {
            var s = a[c],
              l = i[s];
            if (null != l) {
              var u = l.length;
              u ? (1 === u && (i[s] = null), (l = l.shift())) : (i[s] = null),
                this._update && this._update(l, c);
            } else this._remove && this._remove(c);
          }
          for (var c = 0; c < o.length; c++) {
            s = o[c];
            if (i.hasOwnProperty(s)) {
              l = i[s];
              if (null == l) continue;
              if (l.length) {
                var h = 0;
                for (u = l.length; h < u; h++) this._add && this._add(l[h]);
              } else this._add && this._add(l);
            }
          }
        },
      };
      var a = i;
      t.exports = a;
    },
    gs5U: function(t, e, n) {},
    gut8: function(t, e) {
      var n = { NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2 },
        i = 9;
      (e.ContextCachedBy = n), (e.WILL_BE_RESTORED = i);
    },
    gvm7: function(t, e, n) {
      var i = n('bYtY'),
        r = n('dqUG'),
        a = n('IwbS');
      function o(t, e, n, i) {
        (t[0] = n), (t[1] = i), (t[2] = t[0] / e.getWidth()), (t[3] = t[1] / e.getHeight());
      }
      function s(t) {
        var e = (this._zr = t.getZr());
        (this._styleCoord = [0, 0, 0, 0]),
          o(this._styleCoord, e, t.getWidth() / 2, t.getHeight() / 2),
          (this._show = !1),
          this._hideTimeout;
      }
      s.prototype = {
        constructor: s,
        _enterable: !0,
        update: function(t) {
          var e = t.get('alwaysShowContent');
          e && this._moveTooltipIfResized();
        },
        _moveTooltipIfResized: function() {
          var t = this._styleCoord[2],
            e = this._styleCoord[3],
            n = t * this._zr.getWidth(),
            i = e * this._zr.getHeight();
          this.moveTo(n, i);
        },
        show: function(t) {
          this._hideTimeout && clearTimeout(this._hideTimeout),
            this.el.attr('show', !0),
            (this._show = !0);
        },
        setContent: function(t, e, n) {
          this.el && this._zr.remove(this.el);
          var i = {},
            o = t,
            s = '{marker',
            l = '|}',
            u = o.indexOf(s);
          while (u >= 0) {
            var c = o.indexOf(l),
              h = o.substr(u + s.length, c - u - s.length);
            h.indexOf('sub') > -1
              ? (i['marker' + h] = {
                  textWidth: 4,
                  textHeight: 4,
                  textBorderRadius: 2,
                  textBackgroundColor: e[h],
                  textOffset: [3, 0],
                })
              : (i['marker' + h] = {
                  textWidth: 10,
                  textHeight: 10,
                  textBorderRadius: 5,
                  textBackgroundColor: e[h],
                }),
              (o = o.substr(c + 1)),
              (u = o.indexOf('{marker'));
          }
          var d = n.getModel('textStyle'),
            f = d.get('fontSize'),
            p = n.get('textLineHeight');
          null == p && (p = Math.round((3 * f) / 2)),
            (this.el = new r({
              style: a.setTextStyle({}, d, {
                rich: i,
                text: t,
                textBackgroundColor: n.get('backgroundColor'),
                textBorderRadius: n.get('borderRadius'),
                textFill: n.get('textStyle.color'),
                textPadding: n.get('padding'),
                textLineHeight: p,
              }),
              z: n.get('z'),
            })),
            this._zr.add(this.el);
          var g = this;
          this.el.on('mouseover', function() {
            g._enterable && (clearTimeout(g._hideTimeout), (g._show = !0)), (g._inContent = !0);
          }),
            this.el.on('mouseout', function() {
              g._enterable && g._show && g.hideLater(g._hideDelay), (g._inContent = !1);
            });
        },
        setEnterable: function(t) {
          this._enterable = t;
        },
        getSize: function() {
          var t = this.el.getBoundingRect();
          return [t.width, t.height];
        },
        moveTo: function(t, e) {
          if (this.el) {
            var n = this._styleCoord;
            o(n, this._zr, t, e), this.el.attr('position', [n[0], n[1]]);
          }
        },
        hide: function() {
          this.el && this.el.hide(), (this._show = !1);
        },
        hideLater: function(t) {
          !this._show ||
            (this._inContent && this._enterable) ||
            (t
              ? ((this._hideDelay = t),
                (this._show = !1),
                (this._hideTimeout = setTimeout(i.bind(this.hide, this), t)))
              : this.hide());
        },
        isShow: function() {
          return this._show;
        },
        dispose: function() {
          clearTimeout(this._hideTimeout), this.el && this._zr.remove(this.el);
        },
        getOuterSize: function() {
          var t = this.getSize();
          return { width: t[0], height: t[1] };
        },
      };
      var l = s;
      t.exports = l;
    },
    h7HQ: function(t, e, n) {
      var i = n('y+Vt'),
        r = n('T6xi'),
        a = i.extend({
          type: 'polygon',
          shape: { points: null, smooth: !1, smoothConstraint: null },
          buildPath: function(t, e) {
            r.buildPath(t, e, !0);
          },
        });
      t.exports = a;
    },
    h8O9: function(t, e, n) {
      var i = n('bYtY'),
        r = i.map,
        a = n('zM3Q'),
        o = n('7hqr'),
        s = o.isDimensionStacked;
      function l(t) {
        return {
          seriesType: t,
          plan: a(),
          reset: function(t) {
            var e = t.getData(),
              n = t.coordinateSystem,
              i = t.pipelineContext,
              a = i.large;
            if (n) {
              var o = r(n.dimensions, function(t) {
                  return e.mapDimension(t);
                }).slice(0, 2),
                l = o.length,
                u = e.getCalculationInfo('stackResultDimension');
              return s(e, o[0]) && (o[0] = u), s(e, o[1]) && (o[1] = u), l && { progress: c };
            }
            function c(t, e) {
              for (
                var i = t.end - t.start,
                  r = a && new Float32Array(i * l),
                  s = t.start,
                  u = 0,
                  c = [],
                  h = [];
                s < t.end;
                s++
              ) {
                var d;
                if (1 === l) {
                  var f = e.get(o[0], s);
                  d = !isNaN(f) && n.dataToPoint(f, null, h);
                } else {
                  f = c[0] = e.get(o[0], s);
                  var p = (c[1] = e.get(o[1], s));
                  d = !isNaN(f) && !isNaN(p) && n.dataToPoint(c, null, h);
                }
                a
                  ? ((r[u++] = d ? d[0] : NaN), (r[u++] = d ? d[1] : NaN))
                  : e.setItemLayout(s, (d && d.slice()) || [NaN, NaN]);
              }
              a && e.setLayout('symbolPoints', r);
            }
          },
        };
      }
      t.exports = l;
    },
    hD7B: function(t, e, n) {
      var i = n('bYtY'),
        r = [
          'getDom',
          'getZr',
          'getWidth',
          'getHeight',
          'getDevicePixelRatio',
          'dispatchAction',
          'isDisposed',
          'on',
          'off',
          'getDataURL',
          'getConnectedDataURL',
          'getModel',
          'getOption',
          'getViewOfComponentModel',
          'getViewOfSeriesModel',
        ];
      function a(t) {
        i.each(
          r,
          function(e) {
            this[e] = i.bind(t[e], t);
          },
          this,
        );
      }
      var o = a;
      t.exports = o;
    },
    hEol: function(t, e, n) {},
    hM6l: function(t, e, n) {
      var i = n('bYtY'),
        r = i.each,
        a = i.map,
        o = n('OELB'),
        s = o.linearMap,
        l = o.getPixelPrecision,
        u = o.round,
        c = n('4HMb'),
        h = c.createAxisTicks,
        d = c.createAxisLabels,
        f = c.calculateCategoryInterval,
        p = [0, 1],
        g = function(t, e, n) {
          (this.dim = t),
            (this.scale = e),
            (this._extent = n || [0, 0]),
            (this.inverse = !1),
            (this.onBand = !1);
        };
      function v(t, e) {
        var n = t[1] - t[0],
          i = e,
          r = n / i / 2;
        (t[0] += r), (t[1] -= r);
      }
      function m(t, e, n, i) {
        var a = e.length;
        if (t.onBand && !n && a) {
          var o,
            s,
            l = t.getExtent();
          if (1 === a) (e[0].coord = l[0]), (o = e[1] = { coord: l[0] });
          else {
            var c = e[a - 1].tickValue - e[0].tickValue,
              h = (e[a - 1].coord - e[0].coord) / c;
            r(e, function(t) {
              t.coord -= h / 2;
            });
            var d = t.scale.getExtent();
            (s = 1 + d[1] - e[a - 1].tickValue), (o = { coord: e[a - 1].coord + h * s }), e.push(o);
          }
          var f = l[0] > l[1];
          p(e[0].coord, l[0]) && (i ? (e[0].coord = l[0]) : e.shift()),
            i && p(l[0], e[0].coord) && e.unshift({ coord: l[0] }),
            p(l[1], o.coord) && (i ? (o.coord = l[1]) : e.pop()),
            i && p(o.coord, l[1]) && e.push({ coord: l[1] });
        }
        function p(t, e) {
          return (t = u(t)), (e = u(e)), f ? t > e : t < e;
        }
      }
      g.prototype = {
        constructor: g,
        contain: function(t) {
          var e = this._extent,
            n = Math.min(e[0], e[1]),
            i = Math.max(e[0], e[1]);
          return t >= n && t <= i;
        },
        containData: function(t) {
          return this.scale.contain(t);
        },
        getExtent: function() {
          return this._extent.slice();
        },
        getPixelPrecision: function(t) {
          return l(t || this.scale.getExtent(), this._extent);
        },
        setExtent: function(t, e) {
          var n = this._extent;
          (n[0] = t), (n[1] = e);
        },
        dataToCoord: function(t, e) {
          var n = this._extent,
            i = this.scale;
          return (
            (t = i.normalize(t)),
            this.onBand && 'ordinal' === i.type && ((n = n.slice()), v(n, i.count())),
            s(t, p, n, e)
          );
        },
        coordToData: function(t, e) {
          var n = this._extent,
            i = this.scale;
          this.onBand && 'ordinal' === i.type && ((n = n.slice()), v(n, i.count()));
          var r = s(t, n, p, e);
          return this.scale.scale(r);
        },
        pointToData: function(t, e) {},
        getTicksCoords: function(t) {
          t = t || {};
          var e = t.tickModel || this.getTickModel(),
            n = h(this, e),
            i = n.ticks,
            r = a(
              i,
              function(t) {
                return { coord: this.dataToCoord(t), tickValue: t };
              },
              this,
            ),
            o = e.get('alignWithLabel');
          return m(this, r, o, t.clamp), r;
        },
        getMinorTicksCoords: function() {
          if ('ordinal' === this.scale.type) return [];
          var t = this.model.getModel('minorTick'),
            e = t.get('splitNumber');
          (e > 0 && e < 100) || (e = 5);
          var n = this.scale.getMinorTicks(e),
            i = a(
              n,
              function(t) {
                return a(
                  t,
                  function(t) {
                    return { coord: this.dataToCoord(t), tickValue: t };
                  },
                  this,
                );
              },
              this,
            );
          return i;
        },
        getViewLabels: function() {
          return d(this).labels;
        },
        getLabelModel: function() {
          return this.model.getModel('axisLabel');
        },
        getTickModel: function() {
          return this.model.getModel('axisTick');
        },
        getBandWidth: function() {
          var t = this._extent,
            e = this.scale.getExtent(),
            n = e[1] - e[0] + (this.onBand ? 1 : 0);
          0 === n && (n = 1);
          var i = Math.abs(t[1] - t[0]);
          return Math.abs(i) / n;
        },
        isHorizontal: null,
        getRotate: null,
        calculateCategoryInterval: function() {
          return f(this);
        },
      };
      var y = g;
      t.exports = y;
    },
    hNWo: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY'),
        a = n('Qxkt'),
        o = n('4NO4'),
        s = o.isNameSpecified,
        l = n('Kagy'),
        u = l.legend.selector,
        c = {
          all: { type: 'all', title: r.clone(u.all) },
          inverse: { type: 'inverse', title: r.clone(u.inverse) },
        },
        h = i.extendComponentModel({
          type: 'legend.plain',
          dependencies: ['series'],
          layoutMode: { type: 'box', ignoreSize: !0 },
          init: function(t, e, n) {
            this.mergeDefaultAndTheme(t, n),
              (t.selected = t.selected || {}),
              this._updateSelector(t);
          },
          mergeOption: function(t) {
            h.superCall(this, 'mergeOption', t), this._updateSelector(t);
          },
          _updateSelector: function(t) {
            var e = t.selector;
            !0 === e && (e = t.selector = ['all', 'inverse']),
              r.isArray(e) &&
                r.each(e, function(t, n) {
                  r.isString(t) && (t = { type: t }), (e[n] = r.merge(t, c[t.type]));
                });
          },
          optionUpdated: function() {
            this._updateData(this.ecModel);
            var t = this._data;
            if (t[0] && 'single' === this.get('selectedMode')) {
              for (var e = !1, n = 0; n < t.length; n++) {
                var i = t[n].get('name');
                if (this.isSelected(i)) {
                  this.select(i), (e = !0);
                  break;
                }
              }
              !e && this.select(t[0].get('name'));
            }
          },
          _updateData: function(t) {
            var e = [],
              n = [];
            t.eachRawSeries(function(i) {
              var r,
                a = i.name;
              if ((n.push(a), i.legendVisualProvider)) {
                var o = i.legendVisualProvider,
                  l = o.getAllNames();
                t.isSeriesFiltered(i) || (n = n.concat(l)), l.length ? (e = e.concat(l)) : (r = !0);
              } else r = !0;
              r && s(i) && e.push(i.name);
            }),
              (this._availableNames = n);
            var i = this.get('data') || e,
              o = r.map(
                i,
                function(t) {
                  return (
                    ('string' !== typeof t && 'number' !== typeof t) || (t = { name: t }),
                    new a(t, this, this.ecModel)
                  );
                },
                this,
              );
            this._data = o;
          },
          getData: function() {
            return this._data;
          },
          select: function(t) {
            var e = this.option.selected,
              n = this.get('selectedMode');
            if ('single' === n) {
              var i = this._data;
              r.each(i, function(t) {
                e[t.get('name')] = !1;
              });
            }
            e[t] = !0;
          },
          unSelect: function(t) {
            'single' !== this.get('selectedMode') && (this.option.selected[t] = !1);
          },
          toggleSelected: function(t) {
            var e = this.option.selected;
            e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? 'unSelect' : 'select'](t);
          },
          allSelect: function() {
            var t = this._data,
              e = this.option.selected;
            r.each(t, function(t) {
              e[t.get('name', !0)] = !0;
            });
          },
          inverseSelect: function() {
            var t = this._data,
              e = this.option.selected;
            r.each(t, function(t) {
              var n = t.get('name', !0);
              e.hasOwnProperty(n) || (e[n] = !0), (e[n] = !e[n]);
            });
          },
          isSelected: function(t) {
            var e = this.option.selected;
            return !(e.hasOwnProperty(t) && !e[t]) && r.indexOf(this._availableNames, t) >= 0;
          },
          getOrient: function() {
            return 'vertical' === this.get('orient')
              ? { index: 1, name: 'vertical' }
              : { index: 0, name: 'horizontal' };
          },
          defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: 'horizontal',
            left: 'center',
            top: 0,
            align: 'auto',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: '#ccc',
            inactiveBorderColor: '#ccc',
            itemStyle: { borderWidth: 0 },
            textStyle: { color: '#333' },
            selectedMode: !0,
            selector: !1,
            selectorLabel: {
              show: !0,
              borderRadius: 10,
              padding: [3, 5, 3, 5],
              fontSize: 12,
              fontFamily: ' sans-serif',
              color: '#666',
              borderWidth: 1,
              borderColor: '#666',
            },
            emphasis: { selectorLabel: { show: !0, color: '#eee', backgroundColor: '#666' } },
            selectorPosition: 'auto',
            selectorItemGap: 7,
            selectorButtonGap: 10,
            tooltip: { show: !1 },
          },
        }),
        d = h;
      t.exports = d;
    },
    hOwI: function(t, e) {
      var n = Math.log(2);
      function i(t, e, r, a, o, s) {
        var l = a + '-' + o,
          u = t.length;
        if (s.hasOwnProperty(l)) return s[l];
        if (1 === e) {
          var c = Math.round(Math.log(((1 << u) - 1) & ~o) / n);
          return t[r][c];
        }
        var h = a | (1 << r),
          d = r + 1;
        while (a & (1 << d)) d++;
        for (var f = 0, p = 0, g = 0; p < u; p++) {
          var v = 1 << p;
          v & o || ((f += (g % 2 ? -1 : 1) * t[r][p] * i(t, e - 1, d, h, o | v, s)), g++);
        }
        return (s[l] = f), f;
      }
      function r(t, e) {
        var n = [
            [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
            [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
            [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
            [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
            [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
            [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
            [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
            [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]],
          ],
          r = {},
          a = i(n, 8, 0, 0, 0, r);
        if (0 !== a) {
          for (var o = [], s = 0; s < 8; s++)
            for (var l = 0; l < 8; l++)
              null == o[l] && (o[l] = 0),
                (o[l] +=
                  ((((s + l) % 2 ? -1 : 1) * i(n, 7, 0 === s ? 1 : 0, 1 << s, 1 << l, r)) / a) *
                  e[s]);
          return function(t, e, n) {
            var i = e * o[6] + n * o[7] + 1;
            (t[0] = (e * o[0] + n * o[1] + o[2]) / i), (t[1] = (e * o[3] + n * o[4] + o[5]) / i);
          };
        }
      }
      e.buildTransformer = r;
    },
    hX1E: function(t, e) {
      var n = 2 * Math.PI;
      function i(t) {
        return (t %= n), t < 0 && (t += n), t;
      }
      e.normalizeRadian = i;
    },
    hi0g: function(t, e, n) {
      var i = n('bYtY'),
        r = i.createHashMap,
        a = i.each,
        o = i.isString,
        s = i.defaults,
        l = i.extend,
        u = i.isObject,
        c = i.clone,
        h = n('4NO4'),
        d = h.normalizeToArray,
        f = n('D5nY'),
        p = f.guessOrdinal,
        g = f.BE_ORDINAL,
        v = n('7G+c'),
        m = n('L0Ub'),
        y = m.OTHER_DIMENSIONS,
        x = n('Vi4m');
      function _(t, e, n) {
        v.isInstance(e) || (e = v.seriesDataToSource(e)), (n = n || {}), (t = (t || []).slice());
        for (
          var i = (n.dimsDef || []).slice(),
            h = r(),
            f = r(),
            m = [],
            _ = b(e, t, i, n.dimCount),
            S = 0;
          S < _;
          S++
        ) {
          var M = (i[S] = l({}, u(i[S]) ? i[S] : { name: i[S] })),
            T = M.name,
            C = (m[S] = new x());
          null != T && null == h.get(T) && ((C.name = C.displayName = T), h.set(T, S)),
            null != M.type && (C.type = M.type),
            null != M.displayName && (C.displayName = M.displayName);
        }
        var I = n.encodeDef;
        !I && n.encodeDefaulter && (I = n.encodeDefaulter(e, _)),
          (I = r(I)),
          I.each(function(t, e) {
            if (((t = d(t).slice()), 1 === t.length && !o(t[0]) && t[0] < 0)) I.set(e, !1);
            else {
              var n = I.set(e, []);
              a(t, function(t, i) {
                o(t) && (t = h.get(t)), null != t && t < _ && ((n[i] = t), A(m[t], e, i));
              });
            }
          });
        var k = 0;
        function A(t, e, n) {
          null != y.get(e)
            ? (t.otherDims[e] = n)
            : ((t.coordDim = e), (t.coordDimIndex = n), f.set(e, !0));
        }
        a(t, function(t, e) {
          var n, i, r;
          if (o(t)) (n = t), (t = {});
          else {
            n = t.name;
            var l = t.ordinalMeta;
            (t.ordinalMeta = null),
              (t = c(t)),
              (t.ordinalMeta = l),
              (i = t.dimsDef),
              (r = t.otherDims),
              (t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
          }
          var h = I.get(n);
          if (!1 !== h) {
            h = d(h);
            if (!h.length)
              for (var f = 0; f < ((i && i.length) || 1); f++) {
                while (k < m.length && null != m[k].coordDim) k++;
                k < m.length && h.push(k++);
              }
            a(h, function(e, a) {
              var o = m[e];
              if ((A(s(o, t), n, a), null == o.name && i)) {
                var l = i[a];
                !u(l) && (l = { name: l }),
                  (o.name = o.displayName = l.name),
                  (o.defaultTooltip = l.defaultTooltip);
              }
              r && s(o.otherDims, r);
            });
          }
        });
        var D = n.generateCoord,
          O = n.generateCoordCount,
          P = null != O;
        O = D ? O || 1 : 0;
        for (var E = D || 'value', L = 0; L < _; L++) {
          C = m[L] = m[L] || new x();
          var R = C.coordDim;
          null == R &&
            ((C.coordDim = w(E, f, P)),
            (C.coordDimIndex = 0),
            (!D || O <= 0) && (C.isExtraCoord = !0),
            O--),
            null == C.name && (C.name = w(C.coordDim, h)),
            null != C.type ||
              (p(e, L, C.name) !== g.Must &&
                (!C.isExtraCoord ||
                  (null == C.otherDims.itemName && null == C.otherDims.seriesName))) ||
              (C.type = 'ordinal');
        }
        return m;
      }
      function b(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return (
          a(e, function(t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length));
          }),
          r
        );
      }
      function w(t, e, n) {
        if (n || null != e.get(t)) {
          var i = 0;
          while (null != e.get(t + i)) i++;
          t += i;
        }
        return e.set(t, !0), t;
      }
      var S = _;
      t.exports = S;
    },
    hyiK: function(t, e) {
      function n(t, e, n, i, r, a) {
        if ((a > e && a > i) || (a < e && a < i)) return 0;
        if (i === e) return 0;
        var o = i < e ? 1 : -1,
          s = (a - e) / (i - e);
        (1 !== s && 0 !== s) || (o = i < e ? 0.5 : -0.5);
        var l = s * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? o : 0;
      }
      t.exports = n;
    },
    i38C: function(t, e, n) {
      var i = n('Tghj'),
        r = (i.__DEV__, n('bYtY')),
        a = r.createHashMap,
        o = (r.retrieve, r.each);
      function s(t) {
        (this.coordSysName = t),
          (this.coordSysDims = []),
          (this.axisMap = a()),
          (this.categoryAxisMap = a()),
          (this.firstCategoryDimIndex = null);
      }
      function l(t) {
        var e = t.get('coordinateSystem'),
          n = new s(e),
          i = u[e];
        if (i) return i(t, n, n.axisMap, n.categoryAxisMap), n;
      }
      var u = {
        cartesian2d: function(t, e, n, i) {
          var r = t.getReferringComponents('xAxis')[0],
            a = t.getReferringComponents('yAxis')[0];
          (e.coordSysDims = ['x', 'y']),
            n.set('x', r),
            n.set('y', a),
            c(r) && (i.set('x', r), (e.firstCategoryDimIndex = 0)),
            c(a) && (i.set('y', a), e.firstCategoryDimIndex, (e.firstCategoryDimIndex = 1));
        },
        singleAxis: function(t, e, n, i) {
          var r = t.getReferringComponents('singleAxis')[0];
          (e.coordSysDims = ['single']),
            n.set('single', r),
            c(r) && (i.set('single', r), (e.firstCategoryDimIndex = 0));
        },
        polar: function(t, e, n, i) {
          var r = t.getReferringComponents('polar')[0],
            a = r.findAxisModel('radiusAxis'),
            o = r.findAxisModel('angleAxis');
          (e.coordSysDims = ['radius', 'angle']),
            n.set('radius', a),
            n.set('angle', o),
            c(a) && (i.set('radius', a), (e.firstCategoryDimIndex = 0)),
            c(o) &&
              (i.set('angle', o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
        },
        geo: function(t, e, n, i) {
          e.coordSysDims = ['lng', 'lat'];
        },
        parallel: function(t, e, n, i) {
          var r = t.ecModel,
            a = r.getComponent('parallel', t.get('parallelIndex')),
            s = (e.coordSysDims = a.dimensions.slice());
          o(a.parallelAxisIndex, function(t, a) {
            var o = r.getComponent('parallelAxis', t),
              l = s[a];
            n.set(l, o),
              c(o) &&
                null == e.firstCategoryDimIndex &&
                (i.set(l, o), (e.firstCategoryDimIndex = a));
          });
        },
      };
      function c(t) {
        return 'category' === t.get('type');
      }
      e.getCoordSysInfoBySeries = l;
    },
    iLNv: function(t, e) {
      var n = '\0__throttleOriginMethod',
        i = '\0__throttleRate',
        r = '\0__throttleType';
      function a(t, e, n) {
        var i,
          r,
          a,
          o,
          s,
          l = 0,
          u = 0,
          c = null;
        function h() {
          (u = new Date().getTime()), (c = null), t.apply(a, o || []);
        }
        e = e || 0;
        var d = function() {
          (i = new Date().getTime()), (a = this), (o = arguments);
          var t = s || e,
            d = s || n;
          (s = null),
            (r = i - (d ? l : u) - t),
            clearTimeout(c),
            d ? (c = setTimeout(h, t)) : r >= 0 ? h() : (c = setTimeout(h, -r)),
            (l = i);
        };
        return (
          (d.clear = function() {
            c && (clearTimeout(c), (c = null));
          }),
          (d.debounceNextCall = function(t) {
            s = t;
          }),
          d
        );
      }
      function o(t, e, o, s) {
        var l = t[e];
        if (l) {
          var u = l[n] || l,
            c = l[r],
            h = l[i];
          if (h !== o || c !== s) {
            if (null == o || !s) return (t[e] = u);
            (l = t[e] = a(u, o, 'debounce' === s)), (l[n] = u), (l[r] = s), (l[i] = o);
          }
          return l;
        }
      }
      function s(t, e) {
        var i = t[e];
        i && i[n] && (t[e] = i[n]);
      }
      (e.throttle = a), (e.createOrUpdate = o), (e.clear = s);
    },
    iRjW: function(t, e, n) {
      var i = n('bYtY'),
        r = n('Yl7c'),
        a = r.parseClassType,
        o = 0;
      function s(t) {
        return [t || '', o++, Math.random().toFixed(5)].join('_');
      }
      function l(t) {
        var e = {};
        return (
          (t.registerSubTypeDefaulter = function(t, n) {
            (t = a(t)), (e[t.main] = n);
          }),
          (t.determineSubType = function(n, i) {
            var r = i.type;
            if (!r) {
              var o = a(n).main;
              t.hasSubTypes(n) && e[o] && (r = e[o](i));
            }
            return r;
          }),
          t
        );
      }
      function u(t, e) {
        function n(t) {
          var n = {},
            o = [];
          return (
            i.each(t, function(s) {
              var l = r(n, s),
                u = (l.originalDeps = e(s)),
                c = a(u, t);
              (l.entryCount = c.length),
                0 === l.entryCount && o.push(s),
                i.each(c, function(t) {
                  i.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                  var e = r(n, t);
                  i.indexOf(e.successor, t) < 0 && e.successor.push(s);
                });
            }),
            { graph: n, noEntryList: o }
          );
        }
        function r(t, e) {
          return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
        }
        function a(t, e) {
          var n = [];
          return (
            i.each(t, function(t) {
              i.indexOf(e, t) >= 0 && n.push(t);
            }),
            n
          );
        }
        t.topologicalTravel = function(t, e, r, a) {
          if (t.length) {
            var o = n(e),
              s = o.graph,
              l = o.noEntryList,
              u = {};
            i.each(t, function(t) {
              u[t] = !0;
            });
            while (l.length) {
              var c = l.pop(),
                h = s[c],
                d = !!u[c];
              d && (r.call(a, c, h.originalDeps.slice()), delete u[c]),
                i.each(h.successor, d ? p : f);
            }
            i.each(u, function() {
              throw new Error('Circle dependency may exists');
            });
          }
          function f(t) {
            s[t].entryCount--, 0 === s[t].entryCount && l.push(t);
          }
          function p(t) {
            (u[t] = !0), f(t);
          }
        };
      }
      (e.getUID = s), (e.enableSubTypeDefaulter = l), (e.enableTopologicalTravel = u);
    },
    iXHM: function(t, e) {
      var n = '';
      'undefined' !== typeof navigator && (n = navigator.platform || '');
      var i = {
        color: [
          '#c23531',
          '#2f4554',
          '#61a0a8',
          '#d48265',
          '#91c7ae',
          '#749f83',
          '#ca8622',
          '#bda29a',
          '#6e7074',
          '#546570',
          '#c4ccd3',
        ],
        gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
        textStyle: {
          fontFamily: n.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif',
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: 'normal',
        },
        blendMode: null,
        animation: 'auto',
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: 'exponentialOut',
        animationEasingUpdate: 'cubicOut',
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1,
      };
      t.exports = i;
    },
    iXp4: function(t, e, n) {
      var i = n('ItGF'),
        r = [
          ['shadowBlur', 0],
          ['shadowColor', '#000'],
          ['shadowOffsetX', 0],
          ['shadowOffsetY', 0],
        ];
      function a(t) {
        return i.browser.ie && i.browser.version >= 11
          ? function() {
              var e,
                n = this.__clipPaths,
                i = this.style;
              if (n)
                for (var a = 0; a < n.length; a++) {
                  var o = n[a],
                    s = o && o.shape,
                    l = o && o.type;
                  if (
                    s &&
                    (('sector' === l && s.startAngle === s.endAngle) ||
                      ('rect' === l && (!s.width || !s.height)))
                  ) {
                    for (var u = 0; u < r.length; u++)
                      (r[u][2] = i[r[u][0]]), (i[r[u][0]] = r[u][1]);
                    e = !0;
                    break;
                  }
                }
              if ((t.apply(this, arguments), e))
                for (u = 0; u < r.length; u++) i[r[u][0]] = r[u][2];
            }
          : t;
      }
      t.exports = a;
    },
    ieMj: function(t, e, n) {
      var i = n('OELB'),
        r = n('7aKB'),
        a = n('4NgU'),
        o = n('lE7J'),
        s = i.round,
        l = a.extend({
          type: 'interval',
          _interval: 0,
          _intervalPrecision: 2,
          setExtent: function(t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
          },
          unionExtent: function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]),
              t[1] > e[1] && (e[1] = t[1]),
              l.prototype.setExtent.call(this, e[0], e[1]);
          },
          getInterval: function() {
            return this._interval;
          },
          setInterval: function(t) {
            (this._interval = t),
              (this._niceExtent = this._extent.slice()),
              (this._intervalPrecision = o.getIntervalPrecision(t));
          },
          getTicks: function(t) {
            var e = this._interval,
              n = this._extent,
              i = this._niceExtent,
              r = this._intervalPrecision,
              a = [];
            if (!e) return a;
            var o = 1e4;
            n[0] < i[0] && (t ? a.push(s(i[0] - e, r)) : a.push(n[0]));
            var l = i[0];
            while (l <= i[1]) {
              if ((a.push(l), (l = s(l + e, r)), l === a[a.length - 1])) break;
              if (a.length > o) return [];
            }
            var u = a.length ? a[a.length - 1] : i[1];
            return n[1] > u && (t ? a.push(s(u + e, r)) : a.push(n[1])), a;
          },
          getMinorTicks: function(t) {
            for (
              var e = this.getTicks(!0), n = [], r = this.getExtent(), a = 1;
              a < e.length;
              a++
            ) {
              var o = e[a],
                s = e[a - 1],
                l = 0,
                u = [],
                c = o - s,
                h = c / t;
              while (l < t - 1) {
                var d = i.round(s + (l + 1) * h);
                d > r[0] && d < r[1] && u.push(d), l++;
              }
              n.push(u);
            }
            return n;
          },
          getLabel: function(t, e) {
            if (null == t) return '';
            var n = e && e.precision;
            return (
              null == n
                ? (n = i.getPrecisionSafe(t) || 0)
                : 'auto' === n && (n = this._intervalPrecision),
              (t = s(t, n, !0)),
              r.addCommas(t)
            );
          },
          niceTicks: function(t, e, n) {
            t = t || 5;
            var i = this._extent,
              r = i[1] - i[0];
            if (isFinite(r)) {
              r < 0 && ((r = -r), i.reverse());
              var a = o.intervalScaleNiceTicks(i, t, e, n);
              (this._intervalPrecision = a.intervalPrecision),
                (this._interval = a.interval),
                (this._niceExtent = a.niceTickExtent);
            }
          },
          niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1])
              if (0 !== e[0]) {
                var n = e[0];
                t.fixMax || (e[1] += n / 2), (e[0] -= n / 2);
              } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || ((e[0] = 0), (e[1] = 1)),
              this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = s(Math.floor(e[0] / r) * r)),
              t.fixMax || (e[1] = s(Math.ceil(e[1] / r) * r));
          },
        });
      l.create = function() {
        return new l();
      };
      var u = l;
      t.exports = u;
    },
    jCoz: function(t, e, n) {
      var i = n('bYtY'),
        r = n('4NgU'),
        a = n('OELB'),
        o = n('ieMj'),
        s = r.prototype,
        l = o.prototype,
        u = a.getPrecisionSafe,
        c = a.round,
        h = Math.floor,
        d = Math.ceil,
        f = Math.pow,
        p = Math.log,
        g = r.extend({
          type: 'log',
          base: 10,
          $constructor: function() {
            r.apply(this, arguments), (this._originalScale = new o());
          },
          getTicks: function(t) {
            var e = this._originalScale,
              n = this._extent,
              r = e.getExtent();
            return i.map(
              l.getTicks.call(this, t),
              function(t) {
                var i = a.round(f(this.base, t));
                return (
                  (i = t === n[0] && e.__fixMin ? v(i, r[0]) : i),
                  (i = t === n[1] && e.__fixMax ? v(i, r[1]) : i),
                  i
                );
              },
              this,
            );
          },
          getMinorTicks: l.getMinorTicks,
          getLabel: l.getLabel,
          scale: function(t) {
            return (t = s.scale.call(this, t)), f(this.base, t);
          },
          setExtent: function(t, e) {
            var n = this.base;
            (t = p(t) / p(n)), (e = p(e) / p(n)), l.setExtent.call(this, t, e);
          },
          getExtent: function() {
            var t = this.base,
              e = s.getExtent.call(this);
            (e[0] = f(t, e[0])), (e[1] = f(t, e[1]));
            var n = this._originalScale,
              i = n.getExtent();
            return n.__fixMin && (e[0] = v(e[0], i[0])), n.__fixMax && (e[1] = v(e[1], i[1])), e;
          },
          unionExtent: function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            (t[0] = p(t[0]) / p(e)), (t[1] = p(t[1]) / p(e)), s.unionExtent.call(this, t);
          },
          unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
          },
          niceTicks: function(t) {
            t = t || 10;
            var e = this._extent,
              n = e[1] - e[0];
            if (!(n === 1 / 0 || n <= 0)) {
              var i = a.quantity(n),
                r = (t / n) * i;
              r <= 0.5 && (i *= 10);
              while (!isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0) i *= 10;
              var o = [a.round(d(e[0] / i) * i), a.round(h(e[1] / i) * i)];
              (this._interval = i), (this._niceExtent = o);
            }
          },
          niceExtent: function(t) {
            l.niceExtent.call(this, t);
            var e = this._originalScale;
            (e.__fixMin = t.fixMin), (e.__fixMax = t.fixMax);
          },
        });
      function v(t, e) {
        return c(t, u(e));
      }
      i.each(['contain', 'normalize'], function(t) {
        g.prototype[t] = function(e) {
          return (e = p(e) / p(this.base)), s[t].call(this, e);
        };
      }),
        (g.create = function() {
          return new g();
        });
      var m = g;
      t.exports = m;
    },
    jTL6: function(t, e, n) {
      var i = n('y+Vt'),
        r = i.extend({
          type: 'arc',
          shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 },
          style: { stroke: '#000', fill: null },
          buildPath: function(t, e) {
            var n = e.cx,
              i = e.cy,
              r = Math.max(e.r, 0),
              a = e.startAngle,
              o = e.endAngle,
              s = e.clockwise,
              l = Math.cos(a),
              u = Math.sin(a);
            t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s);
          },
        });
      t.exports = r;
    },
    jkPA: function(t, e, n) {
      var i = n('bYtY'),
        r = i.createHashMap,
        a = i.isObject,
        o = i.map;
      function s(t) {
        (this.categories = t.categories || []),
          (this._needCollect = t.needCollect),
          (this._deduplication = t.deduplication),
          this._map;
      }
      s.createByAxisModel = function(t) {
        var e = t.option,
          n = e.data,
          i = n && o(n, c);
        return new s({ categories: i, needCollect: !i, deduplication: !1 !== e.dedplication });
      };
      var l = s.prototype;
      function u(t) {
        return t._map || (t._map = r(t.categories));
      }
      function c(t) {
        return a(t) && null != t.value ? t.value : t + '';
      }
      (l.getOrdinal = function(t) {
        return u(this).get(t);
      }),
        (l.parseAndCollect = function(t) {
          var e,
            n = this._needCollect;
          if ('string' !== typeof t && !n) return t;
          if (n && !this._deduplication)
            return (e = this.categories.length), (this.categories[e] = t), e;
          var i = u(this);
          return (
            (e = i.get(t)),
            null == e &&
              (n
                ? ((e = this.categories.length), (this.categories[e] = t), i.set(t, e))
                : (e = NaN)),
            e
          );
        });
      var h = s;
      t.exports = h;
    },
    jtI2: function(t, e, n) {
      n('SMc4');
      var i = n('bLfw'),
        r = i.extend({
          type: 'grid',
          dependencies: ['xAxis', 'yAxis'],
          layoutMode: 'box',
          coordinateSystem: null,
          defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: '10%',
            top: 60,
            right: '10%',
            bottom: 60,
            containLabel: !1,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            borderColor: '#ccc',
          },
        });
      t.exports = r;
    },
    k9D9: function(t, e) {
      var n = 'original',
        i = 'arrayRows',
        r = 'objectRows',
        a = 'keyedColumns',
        o = 'unknown',
        s = 'typedArray',
        l = 'column',
        u = 'row';
      (e.SOURCE_FORMAT_ORIGINAL = n),
        (e.SOURCE_FORMAT_ARRAY_ROWS = i),
        (e.SOURCE_FORMAT_OBJECT_ROWS = r),
        (e.SOURCE_FORMAT_KEYED_COLUMNS = a),
        (e.SOURCE_FORMAT_UNKNOWN = o),
        (e.SOURCE_FORMAT_TYPED_ARRAY = s),
        (e.SERIES_LAYOUT_BY_COLUMN = l),
        (e.SERIES_LAYOUT_BY_ROW = u);
    },
    kDyi: function(t, e) {
      function n(t) {
        var e = t.findComponents({ mainType: 'legend' });
        e &&
          e.length &&
          t.filterSeries(function(t) {
            for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
            return !0;
          });
      }
      t.exports = n;
    },
    lE7J: function(t, e, n) {
      var i = n('OELB'),
        r = i.round;
      function a(t, e, n, a) {
        var s = {},
          u = t[1] - t[0],
          c = (s.interval = i.nice(u / e, !0));
        null != n && c < n && (c = s.interval = n), null != a && c > a && (c = s.interval = a);
        var h = (s.intervalPrecision = o(c)),
          d = (s.niceTickExtent = [r(Math.ceil(t[0] / c) * c, h), r(Math.floor(t[1] / c) * c, h)]);
        return l(d, t), s;
      }
      function o(t) {
        return i.getPrecisionSafe(t) + 2;
      }
      function s(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
      }
      function l(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]),
          !isFinite(t[1]) && (t[1] = e[1]),
          s(t, 0, e),
          s(t, 1, e),
          t[0] > t[1] && (t[0] = t[1]);
      }
      (e.intervalScaleNiceTicks = a), (e.getIntervalPrecision = o), (e.fixExtent = l);
    },
    lLGD: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY'),
        a = n('nVfU'),
        o = a.layout,
        s = a.largeLayout;
      n('Wqna'),
        n('F7hV'),
        n('Z8zF'),
        n('Ae16'),
        i.registerLayout(i.PRIORITY.VISUAL.LAYOUT, r.curry(o, 'bar')),
        i.registerLayout(i.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, s),
        i.registerVisual({
          seriesType: 'bar',
          reset: function(t) {
            t.getData().setVisual('legendSymbol', 'roundRect');
          },
        });
    },
    lnY3: function(t, e, n) {},
    loD1: function(t, e) {
      function n(t, e, n, i, r, a, o) {
        if (0 === r) return !1;
        var s = r,
          l = 0,
          u = t;
        if (
          (o > e + s && o > i + s) ||
          (o < e - s && o < i - s) ||
          (a > t + s && a > n + s) ||
          (a < t - s && a < n - s)
        )
          return !1;
        if (t === n) return Math.abs(a - t) <= s / 2;
        (l = (e - i) / (t - n)), (u = (t * i - n * e) / (t - n));
        var c = l * a - o + u,
          h = (c * c) / (l * l + 1);
        return h <= ((s / 2) * s) / 2;
      }
      e.containStroke = n;
    },
    m9t5: function(t, e, n) {
      var i = n('KCsZ'),
        r = i([
          ['fill', 'color'],
          ['shadowBlur'],
          ['shadowOffsetX'],
          ['shadowOffsetY'],
          ['opacity'],
          ['shadowColor'],
        ]),
        a = {
          getAreaStyle: function(t, e) {
            return r(this, t, e);
          },
        };
      t.exports = a;
    },
    mFDi: function(t, e, n) {
      var i = n('QBsz'),
        r = n('Fofx'),
        a = i.applyTransform,
        o = Math.min,
        s = Math.max;
      function l(t, e, n, i) {
        n < 0 && ((t += n), (n = -n)),
          i < 0 && ((e += i), (i = -i)),
          (this.x = t),
          (this.y = e),
          (this.width = n),
          (this.height = i);
      }
      (l.prototype = {
        constructor: l,
        union: function(t) {
          var e = o(t.x, this.x),
            n = o(t.y, this.y);
          (this.width = s(t.x + t.width, this.x + this.width) - e),
            (this.height = s(t.y + t.height, this.y + this.height) - n),
            (this.x = e),
            (this.y = n);
        },
        applyTransform: (function() {
          var t = [],
            e = [],
            n = [],
            i = [];
          return function(r) {
            if (r) {
              (t[0] = n[0] = this.x),
                (t[1] = i[1] = this.y),
                (e[0] = i[0] = this.x + this.width),
                (e[1] = n[1] = this.y + this.height),
                a(t, t, r),
                a(e, e, r),
                a(n, n, r),
                a(i, i, r),
                (this.x = o(t[0], e[0], n[0], i[0])),
                (this.y = o(t[1], e[1], n[1], i[1]));
              var l = s(t[0], e[0], n[0], i[0]),
                u = s(t[1], e[1], n[1], i[1]);
              (this.width = l - this.x), (this.height = u - this.y);
            }
          };
        })(),
        calculateTransform: function(t) {
          var e = this,
            n = t.width / e.width,
            i = t.height / e.height,
            a = r.create();
          return (
            r.translate(a, a, [-e.x, -e.y]), r.scale(a, a, [n, i]), r.translate(a, a, [t.x, t.y]), a
          );
        },
        intersect: function(t) {
          if (!t) return !1;
          t instanceof l || (t = l.create(t));
          var e = this,
            n = e.x,
            i = e.x + e.width,
            r = e.y,
            a = e.y + e.height,
            o = t.x,
            s = t.x + t.width,
            u = t.y,
            c = t.y + t.height;
          return !(i < o || s < n || a < u || c < r);
        },
        contain: function(t, e) {
          var n = this;
          return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
        },
        clone: function() {
          return new l(this.x, this.y, this.width, this.height);
        },
        copy: function(t) {
          (this.x = t.x), (this.y = t.y), (this.width = t.width), (this.height = t.height);
        },
        plain: function() {
          return { x: this.x, y: this.y, width: this.width, height: this.height };
        },
      }),
        (l.create = function(t) {
          return new l(t.x, t.y, t.width, t.height);
        });
      var u = l;
      t.exports = u;
    },
    mLcG: function(t, e) {
      var n =
        ('undefined' !== typeof window &&
          ((window.requestAnimationFrame && window.requestAnimationFrame.bind(window)) ||
            (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window)) ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame)) ||
        function(t) {
          setTimeout(t, 16);
        };
      t.exports = n;
    },
    mOdp: function(t, e, n) {
      var i = n('bYtY'),
        r = i.createHashMap;
      function a(t) {
        return {
          getTargetSeries: function(e) {
            var n = {},
              i = r();
            return (
              e.eachSeriesByType(t, function(t) {
                (t.__paletteScope = n), i.set(t.uid, t);
              }),
              i
            );
          },
          reset: function(t, e) {
            var n = t.getRawData(),
              i = {},
              r = t.getData();
            r.each(function(t) {
              var e = r.getRawIndex(t);
              i[e] = t;
            }),
              n.each(function(e) {
                var a,
                  o = i[e],
                  s = null != o && r.getItemVisual(o, 'color', !0),
                  l = null != o && r.getItemVisual(o, 'borderColor', !0);
                if (((s && l) || (a = n.getItemModel(e)), !s)) {
                  var u =
                    a.get('itemStyle.color') ||
                    t.getColorFromPalette(n.getName(e) || e + '', t.__paletteScope, n.count());
                  null != o && r.setItemVisual(o, 'color', u);
                }
                if (!l) {
                  var c = a.get('itemStyle.borderColor');
                  null != o && r.setItemVisual(o, 'borderColor', c);
                }
              });
          },
        };
      }
      t.exports = a;
    },
    mYwL: function(t, e, n) {
      var i = n('bYtY'),
        r = n('IwbS'),
        a = n('6GrX'),
        o = Math.PI;
      function s(t, e) {
        (e = e || {}),
          i.defaults(e, {
            text: 'loading',
            textColor: '#000',
            fontSize: '12px',
            maskColor: 'rgba(255, 255, 255, 0.8)',
            showSpinner: !0,
            color: '#c23531',
            spinnerRadius: 10,
            lineWidth: 5,
            zlevel: 0,
          });
        var n = new r.Group(),
          s = new r.Rect({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 });
        n.add(s);
        var l = e.fontSize + ' sans-serif',
          u = new r.Rect({
            style: {
              fill: 'none',
              text: e.text,
              font: l,
              textPosition: 'right',
              textDistance: 10,
              textFill: e.textColor,
            },
            zlevel: e.zlevel,
            z: 10001,
          });
        if ((n.add(u), e.showSpinner)) {
          var c = new r.Arc({
            shape: { startAngle: -o / 2, endAngle: -o / 2 + 0.1, r: e.spinnerRadius },
            style: { stroke: e.color, lineCap: 'round', lineWidth: e.lineWidth },
            zlevel: e.zlevel,
            z: 10001,
          });
          c
            .animateShape(!0)
            .when(1e3, { endAngle: (3 * o) / 2 })
            .start('circularInOut'),
            c
              .animateShape(!0)
              .when(1e3, { startAngle: (3 * o) / 2 })
              .delay(300)
              .start('circularInOut'),
            n.add(c);
        }
        return (
          (n.resize = function() {
            var n = a.getWidth(e.text, l),
              i = e.showSpinner ? e.spinnerRadius : 0,
              r =
                (t.getWidth() - 2 * i - (e.showSpinner && n ? 10 : 0) - n) / 2 -
                (e.showSpinner ? 0 : n / 2),
              o = t.getHeight() / 2;
            e.showSpinner && c.setShape({ cx: r, cy: o }),
              u.setShape({ x: r - i, y: o - i, width: 2 * i, height: 2 * i }),
              s.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
          }),
          n.resize(),
          n
        );
      }
      t.exports = s;
    },
    mv9J: function(t, e, n) {
      'use strict';
      n.r(e);
      n('14J3');
      var i = n('BMrR'),
        r = (n('jCWc'), n('kPKH')),
        a = n('tJVT'),
        o = n('cDcd'),
        s = n.n(o),
        l = n('3yNQ');
      const u = n('ProS');
      n('lLGD'), n('AH3D'), n('Ynxi'), n('Cm0C'), n('0o9m');
      class c extends o['Component'] {
        constructor(t) {
          super(t),
            (this.renderChart = () => {
              const t = this.props,
                e = t.data,
                n = t.options,
                i = n.type,
                r = n.option,
                a = n.seriseOption,
                o = u.init(this.chartRef.current);
              o.clear();
              const s = e && e.yData ? e.yData.map(t => ({ ...t, ...a, type: 'bar' })) : [];
              let c = {
                xAxis: { data: (e && e.xData) || [], axisTick: { show: !1 }, ...(r.xAxis || {}) },
                yAxis: {
                  axisTick: { show: !1 },
                  axisLine: { show: !1 },
                  splitLine: { lineStyle: { type: 'dashed' } },
                  ...(r.yAxis || {}),
                },
              };
              'horizontal' === i &&
                (c = {
                  xAxis: r.xAxis ? { type: 'value', ...r.xAxis } : { type: 'value' },
                  yAxis: r.yAxis
                    ? { type: 'category', data: (e && e.xData) || [], ...r.yAxis }
                    : { type: 'category', data: (e && e.xData) || [] },
                }),
                r.legend &&
                  r.legend.data &&
                  r.legend.data.length > 0 &&
                  s[0] &&
                  (r.legend.data[0].name = s[0].name),
                o.setOption({ ...r, series: s, ...c });
              const h = this.chartRef.current;
              l['a'].on(h, () => {
                o.resize();
              });
            }),
            (this.state = {}),
            (this.chartRef = s.a.createRef());
        }
        componentDidMount() {
          this.renderChart();
        }
        componentDidUpdate() {
          this.renderChart();
        }
        render() {
          const t = this.props.options,
            e = t.width,
            n = t.height;
          return s.a.createElement('div', {
            style: { width: e || '100%', height: n || '400px' },
            ref: this.chartRef,
          });
        }
      }
      const h = n('ProS');
      n('lLGD'), n('75ce'), n('AH3D'), n('Ynxi'), n('0o9m');
      class d extends o['Component'] {
        constructor(t) {
          super(t),
            (this.renderChart = () => {
              const t = this.props,
                e = t.data,
                n = t.options,
                i = n.option,
                r = n.seriesOption,
                a = i.legend,
                o = {
                  xData: e.xData || [
                    '\u5317\u4eac',
                    '\u676d\u5dde',
                    '\u4e0a\u6d77',
                    '\u6210\u90fd',
                  ],
                  yData: e.yData || [
                    { name: '\u9500\u552e\u91cf', type: 'line', data: [100, 230, 120, 180] },
                    { name: '\u7528\u6237\u6570', type: 'bar', data: [120, 150, 220, 280] },
                  ],
                },
                s = h.init(this.chartRef.current);
              s.clear();
              const u = o.yData.map((t, e) => {
                const n = { ...t },
                  i = n.name;
                let o = n.data;
                return (
                  o.some(t => t > 1e4) && ((n.name = i + ' (\u4e07)'), (o = o.map(t => t / 1e4))),
                  a && (a.data[e].name = n.name),
                  { ...n, data: o, ...r[e] }
                );
              });
              u[1] && (u[1].yAxisIndex = 1);
              const c = {
                min: 0,
                axisTick: { show: !1 },
                axisLine: { show: !1 },
                splitLine: { lineStyle: { type: 'dashed' } },
              };
              s.setOption({
                ...i,
                legend: a,
                xAxis: [{ type: 'category', axisTick: { show: !1 }, data: o.xData || [] }],
                yAxis: [
                  { type: 'value', nameTextStyle: {}, min: 0, ...c, axisLabel: {} },
                  { type: 'value', min: 0, position: 'right', ...c, axisLabel: { show: !0 } },
                ],
                series: u,
              });
              const d = this.chartRef.current;
              l['a'].on(d, () => {
                s.resize();
              });
            }),
            (this.state = {}),
            (this.chartRef = s.a.createRef());
        }
        componentDidMount() {
          this.renderChart();
        }
        componentDidUpdate() {
          this.renderChart();
        }
        render() {
          const t = this.props.options.height,
            e = { height: t || 400 };
          return s.a.createElement('div', { style: e, ref: this.chartRef });
        }
      }
      n('cIOH'), n('lnY3'), n('9ama');
      var f = n('lSNA'),
        p = n.n(f),
        g = n('pVnL'),
        v = n.n(g),
        m = n('TSYQ'),
        y = n.n(m),
        x = n('BGR+'),
        _ = n('H84U'),
        b = function(t, e) {
          var n = {};
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
              e.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
                (n[i[r]] = t[i[r]]);
          }
          return n;
        },
        w = function(t) {
          return o['createElement'](_['a'], null, function(e) {
            var n = e.getPrefixCls,
              i = t.prefixCls,
              r = t.className,
              a = t.hoverable,
              s = void 0 === a || a,
              l = b(t, ['prefixCls', 'className', 'hoverable']),
              u = n('card', i),
              c = y()(''.concat(u, '-grid'), r, p()({}, ''.concat(u, '-grid-hoverable'), s));
            return o['createElement']('div', v()({}, l, { className: c }));
          });
        },
        S = w,
        M = function(t, e) {
          var n = {};
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
              e.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
                (n[i[r]] = t[i[r]]);
          }
          return n;
        },
        T = function(t) {
          return o['createElement'](_['a'], null, function(e) {
            var n = e.getPrefixCls,
              i = t.prefixCls,
              r = t.className,
              a = t.avatar,
              s = t.title,
              l = t.description,
              u = M(t, ['prefixCls', 'className', 'avatar', 'title', 'description']),
              c = n('card', i),
              h = y()(''.concat(c, '-meta'), r),
              d = a
                ? o['createElement']('div', { className: ''.concat(c, '-meta-avatar') }, a)
                : null,
              f = s
                ? o['createElement']('div', { className: ''.concat(c, '-meta-title') }, s)
                : null,
              p = l
                ? o['createElement']('div', { className: ''.concat(c, '-meta-description') }, l)
                : null,
              g =
                f || p
                  ? o['createElement']('div', { className: ''.concat(c, '-meta-detail') }, f, p)
                  : null;
            return o['createElement']('div', v()({}, u, { className: h }), d, g);
          });
        },
        C = T,
        I = n('rePB'),
        k = n('ODXe'),
        A = n('Ff2n'),
        D = n('VTBJ'),
        O = n('Zm9Q'),
        P = n('6cGi'),
        E = n('KQm4'),
        L = n('xEkU'),
        R = n.n(L),
        N = n('t23M');
      function z(t) {
        var e = Object(o['useRef'])(),
          n = Object(o['useRef'])(!1);
        function i() {
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
          n.current ||
            (R.a.cancel(e.current),
            (e.current = R()(function() {
              t.apply(void 0, r);
            })));
        }
        return (
          Object(o['useEffect'])(function() {
            return function() {
              (n.current = !0), R.a.cancel(e.current);
            };
          }, []),
          i
        );
      }
      function B(t) {
        var e = Object(o['useRef'])([]),
          n = Object(o['useState'])({}),
          i = Object(k['a'])(n, 2),
          r = i[1],
          a = Object(o['useRef'])('function' === typeof t ? t() : t),
          s = z(function() {
            var t = a.current;
            e.current.forEach(function(e) {
              t = e(t);
            }),
              (e.current = []),
              (a.current = t),
              r({});
          });
        function l(t) {
          e.current.push(t), s();
        }
        return [a.current, l];
      }
      var j = n('4IlW');
      function F(t, e) {
        var n,
          i = t.prefixCls,
          r = t.id,
          a = t.active,
          s = t.rtl,
          l = t.tab,
          u = l.key,
          c = l.tab,
          h = l.disabled,
          d = l.closeIcon,
          f = t.tabBarGutter,
          p = t.tabPosition,
          g = t.closable,
          v = t.renderWrapper,
          m = t.removeAriaLabel,
          x = t.editable,
          _ = t.onClick,
          b = t.onRemove,
          w = t.onFocus,
          S = ''.concat(i, '-tab');
        o['useEffect'](function() {
          return b;
        }, []);
        var M = {};
        'top' === p || 'bottom' === p
          ? (M[s ? 'marginLeft' : 'marginRight'] = f)
          : (M.marginBottom = f);
        var T = x && !1 !== g && !h;
        function C(t) {
          h || _(t);
        }
        function k(t) {
          t.preventDefault(), t.stopPropagation(), x.onEdit('remove', { key: u, event: t });
        }
        var A = o['createElement'](
          'div',
          {
            key: u,
            ref: e,
            className: y()(
              S,
              ((n = {}),
              Object(I['a'])(n, ''.concat(S, '-with-remove'), T),
              Object(I['a'])(n, ''.concat(S, '-active'), a),
              Object(I['a'])(n, ''.concat(S, '-disabled'), h),
              n),
            ),
            style: M,
            onClick: C,
          },
          o['createElement'](
            'div',
            {
              role: 'tab',
              'aria-selected': a,
              id: r && ''.concat(r, '-tab-').concat(u),
              className: ''.concat(S, '-btn'),
              'aria-controls': r && ''.concat(r, '-panel-').concat(u),
              'aria-disabled': h,
              tabIndex: h ? null : 0,
              onClick: function(t) {
                t.stopPropagation(), C(t);
              },
              onKeyDown: function(t) {
                [j['a'].SPACE, j['a'].ENTER].includes(t.which) && (t.preventDefault(), C(t));
              },
              onFocus: w,
            },
            c,
          ),
          T &&
            o['createElement'](
              'button',
              {
                type: 'button',
                'aria-label': m || 'remove',
                tabIndex: 0,
                className: ''.concat(S, '-remove'),
                onClick: function(t) {
                  t.stopPropagation(), k(t);
                },
              },
              d || x.removeIcon || '\xd7',
            ),
        );
        return v && (A = v(A)), A;
      }
      var Y = o['forwardRef'](F),
        V = { width: 0, height: 0, left: 0, top: 0 };
      function H(t, e, n) {
        return Object(o['useMemo'])(
          function() {
            for (
              var n,
                i = new Map(),
                r = e.get(null === (n = t[0]) || void 0 === n ? void 0 : n.key) || V,
                a = r.left + r.width,
                o = 0;
              o < t.length;
              o += 1
            ) {
              var s,
                l = t[o].key,
                u = e.get(l);
              if (!u) u = e.get(null === (s = t[o - 1]) || void 0 === s ? void 0 : s.key) || V;
              var c = i.get(l) || Object(D['a'])({}, u);
              (c.right = a - c.left - c.width), i.set(l, c);
            }
            return i;
          },
          [
            t
              .map(function(t) {
                return t.key;
              })
              .join('_'),
            e,
            n,
          ],
        );
      }
      var W = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function G(t, e, n, i, r) {
        var a,
          s,
          l,
          u = r.tabs,
          c = r.tabPosition,
          h = r.rtl;
        ['top', 'bottom'].includes(c)
          ? ((a = 'width'), (s = h ? 'right' : 'left'), (l = Math.abs(e.left)))
          : ((a = 'height'), (s = 'top'), (l = -e.top));
        var d = e[a],
          f = n[a],
          p = i[a],
          g = d;
        return (
          f + p > d && (g = d - p),
          Object(o['useMemo'])(
            function() {
              if (!u.length) return [0, 0];
              for (var e = u.length, n = e, i = 0; i < e; i += 1) {
                var r = t.get(u[i].key) || W;
                if (r[s] + r[a] > l + g) {
                  n = i - 1;
                  break;
                }
              }
              for (var o = 0, c = e - 1; c >= 0; c -= 1) {
                var h = t.get(u[c].key) || W;
                if (h[s] < l) {
                  o = c + 1;
                  break;
                }
              }
              return [o, n];
            },
            [
              t,
              l,
              g,
              c,
              u
                .map(function(t) {
                  return t.key;
                })
                .join('_'),
              h,
            ],
          )
        );
      }
      var U = n('1j5w'),
        X = n('eDIo');
      function Z(t, e) {
        var n = t.prefixCls,
          i = t.editable,
          r = t.locale,
          a = t.style;
        return i && !1 !== i.showAdd
          ? o['createElement'](
              'button',
              {
                ref: e,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: a,
                'aria-label': (null === r || void 0 === r ? void 0 : r.addAriaLabel) || 'Add tab',
                onClick: function(t) {
                  i.onEdit('add', { event: t });
                },
              },
              i.addIcon || '+',
            )
          : null;
      }
      var q = o['forwardRef'](Z);
      function K(t, e) {
        var n = t.prefixCls,
          i = t.id,
          r = t.tabs,
          a = t.locale,
          s = t.mobile,
          l = t.moreIcon,
          u = void 0 === l ? 'More' : l,
          c = t.moreTransitionName,
          h = t.style,
          d = t.className,
          f = t.editable,
          p = t.tabBarGutter,
          g = t.rtl,
          v = t.onTabClick,
          m = Object(o['useState'])(!1),
          x = Object(k['a'])(m, 2),
          _ = x[0],
          b = x[1],
          w = Object(o['useState'])(null),
          S = Object(k['a'])(w, 2),
          M = S[0],
          T = S[1],
          C = ''.concat(i, '-more-popup'),
          A = ''.concat(n, '-dropdown'),
          D = null !== M ? ''.concat(C, '-').concat(M) : null,
          O = null === a || void 0 === a ? void 0 : a.dropdownAriaLabel,
          P = o['createElement'](
            U['f'],
            {
              onClick: function(t) {
                var e = t.key,
                  n = t.domEvent;
                v(e, n), b(!1);
              },
              id: C,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': D,
              selectedKeys: [M],
              'aria-label': void 0 !== O ? O : 'expanded dropdown',
            },
            r.map(function(t) {
              return o['createElement'](
                U['d'],
                {
                  key: t.key,
                  id: ''.concat(C, '-').concat(t.key),
                  role: 'option',
                  'aria-controls': i && ''.concat(i, '-panel-').concat(t.key),
                  disabled: t.disabled,
                },
                t.tab,
              );
            }),
          );
        function E(t) {
          for (
            var e = r.filter(function(t) {
                return !t.disabled;
              }),
              n =
                e.findIndex(function(t) {
                  return t.key === M;
                }) || 0,
              i = e.length,
              a = 0;
            a < i;
            a += 1
          ) {
            n = (n + t + i) % i;
            var o = e[n];
            if (!o.disabled) return void T(o.key);
          }
        }
        function L(t) {
          var e = t.which;
          if (_)
            switch (e) {
              case j['a'].UP:
                E(-1), t.preventDefault();
                break;
              case j['a'].DOWN:
                E(1), t.preventDefault();
                break;
              case j['a'].ESC:
                b(!1);
                break;
              case j['a'].SPACE:
              case j['a'].ENTER:
                null !== M && v(M, t);
                break;
            }
          else [j['a'].DOWN, j['a'].SPACE, j['a'].ENTER].includes(e) && (b(!0), t.preventDefault());
        }
        Object(o['useEffect'])(
          function() {
            var t = document.getElementById(D);
            t && t.scrollIntoView && t.scrollIntoView(!1);
          },
          [M],
        ),
          Object(o['useEffect'])(
            function() {
              _ || T(null);
            },
            [_],
          );
        var R = Object(I['a'])({}, g ? 'marginLeft' : 'marginRight', p);
        r.length || ((R.visibility = 'hidden'), (R.order = 1));
        var N = y()(Object(I['a'])({}, ''.concat(A, '-rtl'), g)),
          z = s
            ? null
            : o['createElement'](
                X['a'],
                {
                  prefixCls: A,
                  overlay: P,
                  trigger: ['hover'],
                  visible: _,
                  transitionName: c,
                  onVisibleChange: b,
                  overlayClassName: N,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                o['createElement'](
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: R,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': C,
                    id: ''.concat(i, '-more'),
                    'aria-expanded': _,
                    onKeyDown: L,
                  },
                  u,
                ),
              );
        return o['createElement'](
          'div',
          { className: y()(''.concat(n, '-nav-operations'), d), style: h, ref: e },
          z,
          o['createElement'](q, { prefixCls: n, locale: a, editable: f }),
        );
      }
      var Q = o['forwardRef'](K),
        J = Object(o['createContext'])(null),
        $ = 0.1,
        tt = 0.01,
        et = 20,
        nt = Math.pow(0.995, et);
      function it() {
        var t = navigator.userAgent || navigator.vendor || window.opera;
        return !(
          !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            t,
          ) &&
          !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            t.substr(0, 4),
          )
        );
      }
      function rt(t, e) {
        var n = Object(o['useState'])(),
          i = Object(k['a'])(n, 2),
          r = i[0],
          a = i[1],
          s = Object(o['useState'])(0),
          l = Object(k['a'])(s, 2),
          u = l[0],
          c = l[1],
          h = Object(o['useState'])(0),
          d = Object(k['a'])(h, 2),
          f = d[0],
          p = d[1],
          g = Object(o['useState'])(),
          v = Object(k['a'])(g, 2),
          m = v[0],
          y = v[1],
          x = Object(o['useRef'])();
        function _(t) {
          var e = t.touches[0],
            n = e.screenX,
            i = e.screenY;
          a({ x: n, y: i }), window.clearInterval(x.current);
        }
        function b(t) {
          if (r) {
            t.preventDefault();
            var n = t.touches[0],
              i = n.screenX,
              o = n.screenY;
            a({ x: i, y: o });
            var s = i - r.x,
              l = o - r.y;
            e(s, l);
            var h = Date.now();
            c(h), p(h - u), y({ x: s, y: l });
          }
        }
        function w() {
          if (r && (a(null), y(null), m)) {
            var t = m.x / f,
              n = m.y / f,
              i = Math.abs(t),
              o = Math.abs(n);
            if (Math.max(i, o) < $) return;
            var s = t,
              l = n;
            x.current = window.setInterval(function() {
              Math.abs(s) < tt && Math.abs(l) < tt
                ? window.clearInterval(x.current)
                : ((s *= nt), (l *= nt), e(s * et, l * et));
            }, et);
          }
        }
        var S = Object(o['useRef'])(0),
          M = Object(o['useRef'])(!1),
          T = Object(o['useRef'])();
        function C(t) {
          var n = t.deltaX,
            i = t.deltaY,
            r = 0,
            a = Math.abs(n),
            o = Math.abs(i);
          a === o
            ? (r = 'x' === T.current ? n : i)
            : a > o
            ? ((r = n), (T.current = 'x'))
            : ((r = i), (T.current = 'y'));
          var s = Date.now();
          s - S.current > 100 && (M.current = !1),
            (e(-r, -r) || M.current) && (t.preventDefault(), (M.current = !0)),
            (S.current = s);
        }
        var I = Object(o['useRef'])(null);
        (I.current = { onTouchStart: _, onTouchMove: b, onTouchEnd: w, onWheel: C }),
          o['useEffect'](function() {
            function e(t) {
              I.current.onTouchStart(t);
            }
            function n(t) {
              I.current.onTouchMove(t);
            }
            function i(t) {
              I.current.onTouchEnd(t);
            }
            function r(t) {
              I.current.onWheel(t);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', i, { passive: !1 }),
              t.current.addEventListener('touchstart', e, { passive: !1 }),
              t.current.addEventListener('wheel', r),
              function() {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', i);
              }
            );
          }, []);
      }
      function at() {
        var t = Object(o['useRef'])(new Map());
        function e(e) {
          return t.current.has(e) || t.current.set(e, o['createRef']()), t.current.get(e);
        }
        function n(e) {
          t.current.delete(e);
        }
        return [e, n];
      }
      function ot(t, e) {
        var n = o['useRef'](t),
          i = o['useState']({}),
          r = Object(k['a'])(i, 2),
          a = r[1];
        function s(t) {
          var i = 'function' === typeof t ? t(n.current) : t;
          i !== n.current && e(i, n.current), (n.current = i), a({});
        }
        return [n.current, s];
      }
      var st = function(t) {
        var e,
          n = t.position,
          i = t.prefixCls,
          r = t.extra;
        if (!r) return null;
        var a = r;
        return (
          'right' === n && (e = a.right || (!a.left && a) || null),
          'left' === n && (e = a.left || null),
          e ? o['createElement']('div', { className: ''.concat(i, '-extra-content') }, e) : null
        );
      };
      function lt(t, e) {
        var n,
          i = o['useContext'](J),
          r = i.prefixCls,
          a = i.tabs,
          s = t.className,
          l = t.style,
          u = t.id,
          c = t.animated,
          h = t.activeKey,
          d = t.rtl,
          f = t.extra,
          p = t.editable,
          g = t.locale,
          v = t.tabPosition,
          m = t.tabBarGutter,
          x = t.children,
          _ = t.onTabClick,
          b = t.onTabScroll,
          w = Object(o['useRef'])(),
          S = Object(o['useRef'])(),
          M = Object(o['useRef'])(),
          T = Object(o['useRef'])(),
          C = at(),
          A = Object(k['a'])(C, 2),
          O = A[0],
          P = A[1],
          L = 'top' === v || 'bottom' === v,
          j = ot(0, function(t, e) {
            L && b && b({ direction: t > e ? 'left' : 'right' });
          }),
          F = Object(k['a'])(j, 2),
          V = F[0],
          W = F[1],
          U = ot(0, function(t, e) {
            !L && b && b({ direction: t > e ? 'top' : 'bottom' });
          }),
          X = Object(k['a'])(U, 2),
          Z = X[0],
          K = X[1],
          $ = Object(o['useState'])(0),
          tt = Object(k['a'])($, 2),
          et = tt[0],
          nt = tt[1],
          it = Object(o['useState'])(0),
          lt = Object(k['a'])(it, 2),
          ut = lt[0],
          ct = lt[1],
          ht = Object(o['useState'])(0),
          dt = Object(k['a'])(ht, 2),
          ft = dt[0],
          pt = dt[1],
          gt = Object(o['useState'])(0),
          vt = Object(k['a'])(gt, 2),
          mt = vt[0],
          yt = vt[1],
          xt = Object(o['useState'])(null),
          _t = Object(k['a'])(xt, 2),
          bt = _t[0],
          wt = _t[1],
          St = Object(o['useState'])(null),
          Mt = Object(k['a'])(St, 2),
          Tt = Mt[0],
          Ct = Mt[1],
          It = Object(o['useState'])(0),
          kt = Object(k['a'])(It, 2),
          At = kt[0],
          Dt = kt[1],
          Ot = Object(o['useState'])(0),
          Pt = Object(k['a'])(Ot, 2),
          Et = Pt[0],
          Lt = Pt[1],
          Rt = B(new Map()),
          Nt = Object(k['a'])(Rt, 2),
          zt = Nt[0],
          Bt = Nt[1],
          jt = H(a, zt, et),
          Ft = ''.concat(r, '-nav-operations-hidden'),
          Yt = 0,
          Vt = 0;
        function Ht(t) {
          return t < Yt ? [Yt, !1] : t > Vt ? [Vt, !1] : [t, !0];
        }
        L
          ? d
            ? ((Yt = 0), (Vt = Math.max(0, et - bt)))
            : ((Yt = Math.min(0, bt - et)), (Vt = 0))
          : ((Yt = Math.min(0, Tt - ut)), (Vt = 0));
        var Wt = Object(o['useRef'])(),
          Gt = Object(o['useState'])(),
          Ut = Object(k['a'])(Gt, 2),
          Xt = Ut[0],
          Zt = Ut[1];
        function qt() {
          Zt(Date.now());
        }
        function Kt() {
          window.clearTimeout(Wt.current);
        }
        function Qt() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
            e = jt.get(t);
          if (e)
            if (L) {
              var n = V;
              d
                ? e.right < V
                  ? (n = e.right)
                  : e.right + e.width > V + bt && (n = e.right + e.width - bt)
                : e.left < -V
                ? (n = -e.left)
                : e.left + e.width > -V + bt && (n = -(e.left + e.width - bt)),
                K(0),
                W(Ht(n)[0]);
            } else {
              var i = Z;
              e.top < -Z
                ? (i = -e.top)
                : e.top + e.height > -Z + Tt && (i = -(e.top + e.height - Tt)),
                W(0),
                K(Ht(i)[0]);
            }
        }
        rt(w, function(t, e) {
          var n = !1;
          function i(t, e) {
            t(function(t) {
              var i = Ht(t + e),
                r = Object(k['a'])(i, 2),
                a = r[0],
                o = r[1];
              return (n = o), a;
            });
          }
          if (L) {
            if (bt >= et) return n;
            i(W, t);
          } else {
            if (Tt >= ut) return n;
            i(K, e);
          }
          return Kt(), qt(), n;
        }),
          Object(o['useEffect'])(
            function() {
              return (
                Kt(),
                Xt &&
                  (Wt.current = window.setTimeout(function() {
                    Zt(0);
                  }, 100)),
                Kt
              );
            },
            [Xt],
          );
        var Jt = G(
            jt,
            { width: bt, height: Tt, left: V, top: Z },
            { width: ft, height: mt },
            { width: At, height: Et },
            Object(D['a'])(Object(D['a'])({}, t), {}, { tabs: a }),
          ),
          $t = Object(k['a'])(Jt, 2),
          te = $t[0],
          ee = $t[1],
          ne = a.map(function(t) {
            var e = t.key;
            return o['createElement'](Y, {
              id: u,
              prefixCls: r,
              key: e,
              rtl: d,
              tab: t,
              closable: t.closable,
              editable: p,
              active: e === h,
              tabPosition: v,
              tabBarGutter: m,
              renderWrapper: x,
              removeAriaLabel: null === g || void 0 === g ? void 0 : g.removeAriaLabel,
              ref: O(e),
              onClick: function(t) {
                _(e, t);
              },
              onRemove: function() {
                P(e);
              },
              onFocus: function() {
                Qt(e), qt(), d || (w.current.scrollLeft = 0), (w.current.scrollTop = 0);
              },
            });
          }),
          ie = z(function() {
            var t,
              e,
              n,
              i,
              r,
              o,
              s,
              l,
              u,
              c = (null === (t = w.current) || void 0 === t ? void 0 : t.offsetWidth) || 0,
              h = (null === (e = w.current) || void 0 === e ? void 0 : e.offsetHeight) || 0,
              d = (null === (n = T.current) || void 0 === n ? void 0 : n.offsetWidth) || 0,
              f = (null === (i = T.current) || void 0 === i ? void 0 : i.offsetHeight) || 0,
              p = (null === (r = M.current) || void 0 === r ? void 0 : r.offsetWidth) || 0,
              g = (null === (o = M.current) || void 0 === o ? void 0 : o.offsetHeight) || 0;
            wt(c), Ct(h), Dt(d), Lt(f);
            var v = ((null === (s = S.current) || void 0 === s ? void 0 : s.offsetWidth) || 0) - d,
              m = ((null === (l = S.current) || void 0 === l ? void 0 : l.offsetHeight) || 0) - f;
            nt(v), ct(m);
            var y = null === (u = M.current) || void 0 === u ? void 0 : u.className.includes(Ft);
            pt(v - (y ? 0 : p)),
              yt(m - (y ? 0 : g)),
              Bt(function() {
                var t = new Map();
                return (
                  a.forEach(function(e) {
                    var n = e.key,
                      i = O(n).current;
                    i &&
                      t.set(n, {
                        width: i.offsetWidth,
                        height: i.offsetHeight,
                        left: i.offsetLeft,
                        top: i.offsetTop,
                      });
                  }),
                  t
                );
              });
          }),
          re = a.slice(0, te),
          ae = a.slice(ee + 1),
          oe = [].concat(Object(E['a'])(re), Object(E['a'])(ae)),
          se = Object(o['useState'])(),
          le = Object(k['a'])(se, 2),
          ue = le[0],
          ce = le[1],
          he = jt.get(h),
          de = Object(o['useRef'])();
        function fe() {
          R.a.cancel(de.current);
        }
        Object(o['useEffect'])(
          function() {
            var t = {};
            return (
              he &&
                (L
                  ? (d ? (t.right = he.right) : (t.left = he.left), (t.width = he.width))
                  : ((t.top = he.top), (t.height = he.height))),
              fe(),
              (de.current = R()(function() {
                ce(t);
              })),
              fe
            );
          },
          [he, L, d],
        ),
          Object(o['useEffect'])(
            function() {
              Qt();
            },
            [h, he, jt, L],
          ),
          Object(o['useEffect'])(
            function() {
              ie();
            },
            [
              d,
              m,
              h,
              a
                .map(function(t) {
                  return t.key;
                })
                .join('_'),
            ],
          );
        var pe,
          ge,
          ve,
          me,
          ye = !!oe.length,
          xe = ''.concat(r, '-nav-wrap');
        return (
          L
            ? d
              ? ((ge = V > 0), (pe = V + bt < et))
              : ((pe = V < 0), (ge = -V + bt < et))
            : ((ve = Z < 0), (me = -Z + Tt < ut)),
          o['createElement'](
            'div',
            {
              ref: e,
              role: 'tablist',
              className: y()(''.concat(r, '-nav'), s),
              style: l,
              onKeyDown: function() {
                qt();
              },
            },
            o['createElement'](st, { position: 'left', extra: f, prefixCls: r }),
            o['createElement'](
              N['a'],
              { onResize: ie },
              o['createElement'](
                'div',
                {
                  className: y()(
                    xe,
                    ((n = {}),
                    Object(I['a'])(n, ''.concat(xe, '-ping-left'), pe),
                    Object(I['a'])(n, ''.concat(xe, '-ping-right'), ge),
                    Object(I['a'])(n, ''.concat(xe, '-ping-top'), ve),
                    Object(I['a'])(n, ''.concat(xe, '-ping-bottom'), me),
                    n),
                  ),
                  ref: w,
                },
                o['createElement'](
                  N['a'],
                  { onResize: ie },
                  o['createElement'](
                    'div',
                    {
                      ref: S,
                      className: ''.concat(r, '-nav-list'),
                      style: {
                        transform: 'translate('.concat(V, 'px, ').concat(Z, 'px)'),
                        transition: Xt ? 'none' : void 0,
                      },
                    },
                    ne,
                    o['createElement'](q, {
                      ref: T,
                      prefixCls: r,
                      locale: g,
                      editable: p,
                      style: { visibility: ye ? 'hidden' : null },
                    }),
                    o['createElement']('div', {
                      className: y()(
                        ''.concat(r, '-ink-bar'),
                        Object(I['a'])({}, ''.concat(r, '-ink-bar-animated'), c.inkBar),
                      ),
                      style: ue,
                    }),
                  ),
                ),
              ),
            ),
            o['createElement'](
              Q,
              Object.assign({}, t, { ref: M, prefixCls: r, tabs: oe, className: !ye && Ft }),
            ),
            o['createElement'](st, { position: 'right', extra: f, prefixCls: r }),
          )
        );
      }
      var ut = o['forwardRef'](lt);
      function ct(t) {
        var e = t.id,
          n = t.activeKey,
          i = t.animated,
          r = t.tabPosition,
          a = t.rtl,
          s = t.destroyInactiveTabPane,
          l = o['useContext'](J),
          u = l.prefixCls,
          c = l.tabs,
          h = i.tabPane,
          d = c.findIndex(function(t) {
            return t.key === n;
          });
        return o['createElement'](
          'div',
          { className: y()(''.concat(u, '-content-holder')) },
          o['createElement'](
            'div',
            {
              className: y()(
                ''.concat(u, '-content'),
                ''.concat(u, '-content-').concat(r),
                Object(I['a'])({}, ''.concat(u, '-content-animated'), h),
              ),
              style:
                d && h
                  ? Object(I['a'])({}, a ? 'marginRight' : 'marginLeft', '-'.concat(d, '00%'))
                  : null,
            },
            c.map(function(t) {
              return o['cloneElement'](t.node, {
                key: t.key,
                prefixCls: u,
                tabKey: t.key,
                id: e,
                animated: h,
                active: t.key === n,
                destroyInactiveTabPane: s,
              });
            }),
          ),
        );
      }
      function ht(t) {
        var e = t.prefixCls,
          n = t.forceRender,
          i = t.className,
          r = t.style,
          a = t.id,
          s = t.active,
          l = t.animated,
          u = t.destroyInactiveTabPane,
          c = t.tabKey,
          h = t.children,
          d = o['useState'](n),
          f = Object(k['a'])(d, 2),
          p = f[0],
          g = f[1];
        o['useEffect'](
          function() {
            s ? g(!0) : u && g(!1);
          },
          [s, u],
        );
        var v = {};
        return (
          s ||
            (l
              ? ((v.visibility = 'hidden'), (v.height = 0), (v.overflowY = 'hidden'))
              : (v.display = 'none')),
          o['createElement'](
            'div',
            {
              id: a && ''.concat(a, '-panel-').concat(c),
              role: 'tabpanel',
              tabIndex: s ? 0 : -1,
              'aria-labelledby': a && ''.concat(a, '-tab-').concat(c),
              'aria-hidden': !s,
              style: Object(D['a'])(Object(D['a'])({}, v), r),
              className: y()(''.concat(e, '-tabpane'), s && ''.concat(e, '-tabpane-active'), i),
            },
            (s || p || n) && h,
          )
        );
      }
      var dt = 0;
      function ft(t) {
        return Object(O['a'])(t)
          .map(function(t) {
            if (o['isValidElement'](t)) {
              var e = void 0 !== t.key ? String(t.key) : void 0;
              return Object(D['a'])(Object(D['a'])({ key: e }, t.props), {}, { node: t });
            }
            return null;
          })
          .filter(function(t) {
            return t;
          });
      }
      function pt(t, e) {
        var n,
          i,
          r = t.id,
          a = t.prefixCls,
          s = void 0 === a ? 'rc-tabs' : a,
          l = t.className,
          u = t.children,
          c = t.direction,
          h = t.activeKey,
          d = t.defaultActiveKey,
          f = t.editable,
          p = t.animated,
          g = t.tabPosition,
          v = void 0 === g ? 'top' : g,
          m = t.tabBarGutter,
          x = t.tabBarStyle,
          _ = t.tabBarExtraContent,
          b = t.locale,
          w = t.moreIcon,
          S = t.moreTransitionName,
          M = t.destroyInactiveTabPane,
          T = t.renderTabBar,
          C = t.onChange,
          O = t.onTabClick,
          E = t.onTabScroll,
          L = Object(A['a'])(t, [
            'id',
            'prefixCls',
            'className',
            'children',
            'direction',
            'activeKey',
            'defaultActiveKey',
            'editable',
            'animated',
            'tabPosition',
            'tabBarGutter',
            'tabBarStyle',
            'tabBarExtraContent',
            'locale',
            'moreIcon',
            'moreTransitionName',
            'destroyInactiveTabPane',
            'renderTabBar',
            'onChange',
            'onTabClick',
            'onTabScroll',
          ]),
          R = ft(u),
          N = 'rtl' === c;
        i =
          !1 === p
            ? { inkBar: !1, tabPane: !1 }
            : Object(D['a'])({ inkBar: !0, tabPane: !1 }, !0 !== p ? p : null);
        var z = Object(o['useState'])(!1),
          B = Object(k['a'])(z, 2),
          j = B[0],
          F = B[1];
        Object(o['useEffect'])(function() {
          F(it());
        }, []);
        var Y = Object(P['a'])(
            function() {
              var t;
              return null === (t = R[0]) || void 0 === t ? void 0 : t.key;
            },
            { value: h, defaultValue: d },
          ),
          V = Object(k['a'])(Y, 2),
          H = V[0],
          W = V[1],
          G = Object(o['useState'])(function() {
            return R.findIndex(function(t) {
              return t.key === H;
            });
          }),
          U = Object(k['a'])(G, 2),
          X = U[0],
          Z = U[1];
        Object(o['useEffect'])(
          function() {
            var t,
              e = R.findIndex(function(t) {
                return t.key === H;
              });
            -1 === e &&
              ((e = Math.max(0, Math.min(X, R.length - 1))),
              W(null === (t = R[e]) || void 0 === t ? void 0 : t.key));
            Z(e);
          },
          [
            R.map(function(t) {
              return t.key;
            }).join('_'),
            H,
            X,
          ],
        );
        var q = Object(P['a'])(null, { value: r }),
          K = Object(k['a'])(q, 2),
          Q = K[0],
          $ = K[1],
          tt = v;
        function et(t, e) {
          null === O || void 0 === O || O(t, e), W(t), null === C || void 0 === C || C(t);
        }
        j && !['left', 'right'].includes(v) && (tt = 'top'),
          Object(o['useEffect'])(function() {
            r || ($('rc-tabs-'.concat(dt)), (dt += 1));
          }, []);
        var nt,
          rt = { id: Q, activeKey: H, animated: i, tabPosition: tt, rtl: N, mobile: j },
          at = Object(D['a'])(
            Object(D['a'])({}, rt),
            {},
            {
              editable: f,
              locale: b,
              moreIcon: w,
              moreTransitionName: S,
              tabBarGutter: m,
              onTabClick: et,
              onTabScroll: E,
              extra: _,
              style: x,
              panes: u,
            },
          );
        return (
          (nt = T ? T(at, ut) : o['createElement'](ut, Object.assign({}, at))),
          o['createElement'](
            J.Provider,
            { value: { tabs: R, prefixCls: s } },
            o['createElement'](
              'div',
              Object.assign(
                {
                  ref: e,
                  id: r,
                  className: y()(
                    s,
                    ''.concat(s, '-').concat(tt),
                    ((n = {}),
                    Object(I['a'])(n, ''.concat(s, '-mobile'), j),
                    Object(I['a'])(n, ''.concat(s, '-editable'), f),
                    Object(I['a'])(n, ''.concat(s, '-rtl'), N),
                    n),
                    l,
                  ),
                },
                L,
              ),
              nt,
              o['createElement'](
                ct,
                Object.assign({ destroyInactiveTabPane: M }, rt, { animated: i }),
              ),
            ),
          )
        );
      }
      var gt = o['forwardRef'](pt);
      gt.TabPane = ht;
      var vt = gt,
        mt = vt,
        yt = n('cCPh'),
        xt = n.n(yt),
        _t = n('fNCr'),
        bt = n.n(_t),
        wt = n('V/uB'),
        St = n.n(wt),
        Mt = n('uaoM'),
        Tt = function(t, e) {
          var n = {};
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
              e.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
                (n[i[r]] = t[i[r]]);
          }
          return n;
        };
      function Ct(t) {
        var e,
          n,
          i = t.type,
          r = t.className,
          a = t.size,
          s = t.onEdit,
          l = t.hideAdd,
          u = t.centered,
          c = t.addIcon,
          h = Tt(t, ['type', 'className', 'size', 'onEdit', 'hideAdd', 'centered', 'addIcon']),
          d = h.prefixCls,
          f = o['useContext'](_['b']),
          g = f.getPrefixCls,
          m = f.direction,
          x = g('tabs', d);
        return (
          'editable-card' === i &&
            (n = {
              onEdit: function(t, e) {
                var n = e.key,
                  i = e.event;
                null === s || void 0 === s || s('add' === t ? i : n, t);
              },
              removeIcon: o['createElement'](St.a, null),
              addIcon: c || o['createElement'](bt.a, null),
              showAdd: !0 !== l,
            }),
          Object(Mt['a'])(
            !('onPrevClick' in h) && !('onNextClick' in h),
            'Tabs',
            '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
          ),
          o['createElement'](
            mt,
            v()({ direction: m }, h, {
              moreTransitionName: 'slide-up',
              className: y()(
                ((e = {}),
                p()(e, ''.concat(x, '-').concat(a), a),
                p()(e, ''.concat(x, '-card'), ['card', 'editable-card'].includes(i)),
                p()(e, ''.concat(x, '-editable-card'), 'editable-card' === i),
                p()(e, ''.concat(x, '-centered'), u),
                e),
                r,
              ),
              editable: n,
              moreIcon: o['createElement'](xt.a, null),
              prefixCls: x,
            }),
          )
        );
      }
      Ct.TabPane = ht;
      var It = Ct,
        kt = n('3Nzz'),
        At = function(t, e) {
          var n = {};
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
              e.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
                (n[i[r]] = t[i[r]]);
          }
          return n;
        };
      function Dt(t) {
        var e = t.map(function(e, n) {
          return o['createElement'](
            'li',
            { style: { width: ''.concat(100 / t.length, '%') }, key: 'action-'.concat(n) },
            o['createElement']('span', null, e),
          );
        });
        return e;
      }
      var Ot = function(t) {
        var e,
          n,
          a,
          s = o['useContext'](_['b']),
          l = s.getPrefixCls,
          u = s.direction,
          c = o['useContext'](kt['b']),
          h = function(e) {
            t.onTabChange && t.onTabChange(e);
          },
          d = function() {
            var e;
            return (
              o['Children'].forEach(t.children, function(t) {
                t && t.type && t.type === S && (e = !0);
              }),
              e
            );
          },
          f = t.prefixCls,
          g = t.className,
          m = t.extra,
          b = t.headStyle,
          w = void 0 === b ? {} : b,
          M = t.bodyStyle,
          T = void 0 === M ? {} : M,
          C = t.title,
          I = t.loading,
          k = t.bordered,
          A = void 0 === k || k,
          D = t.size,
          O = t.type,
          P = t.cover,
          E = t.actions,
          L = t.tabList,
          R = t.children,
          N = t.activeTabKey,
          z = t.defaultActiveTabKey,
          B = t.tabBarExtraContent,
          j = t.hoverable,
          F = t.tabProps,
          Y = void 0 === F ? {} : F,
          V = At(t, [
            'prefixCls',
            'className',
            'extra',
            'headStyle',
            'bodyStyle',
            'title',
            'loading',
            'bordered',
            'size',
            'type',
            'cover',
            'actions',
            'tabList',
            'children',
            'activeTabKey',
            'defaultActiveTabKey',
            'tabBarExtraContent',
            'hoverable',
            'tabProps',
          ]),
          H = l('card', f),
          W = 0 === T.padding || '0px' === T.padding ? { padding: 24 } : void 0,
          G = o['createElement']('div', { className: ''.concat(H, '-loading-block') }),
          U = o['createElement'](
            'div',
            { className: ''.concat(H, '-loading-content'), style: W },
            o['createElement'](i['a'], { gutter: 8 }, o['createElement'](r['a'], { span: 22 }, G)),
            o['createElement'](
              i['a'],
              { gutter: 8 },
              o['createElement'](r['a'], { span: 8 }, G),
              o['createElement'](r['a'], { span: 15 }, G),
            ),
            o['createElement'](
              i['a'],
              { gutter: 8 },
              o['createElement'](r['a'], { span: 6 }, G),
              o['createElement'](r['a'], { span: 18 }, G),
            ),
            o['createElement'](
              i['a'],
              { gutter: 8 },
              o['createElement'](r['a'], { span: 13 }, G),
              o['createElement'](r['a'], { span: 9 }, G),
            ),
            o['createElement'](
              i['a'],
              { gutter: 8 },
              o['createElement'](r['a'], { span: 4 }, G),
              o['createElement'](r['a'], { span: 3 }, G),
              o['createElement'](r['a'], { span: 16 }, G),
            ),
          ),
          X = void 0 !== N,
          Z = v()(
            v()({}, Y),
            ((e = {}),
            p()(e, X ? 'activeKey' : 'defaultActiveKey', X ? N : z),
            p()(e, 'tabBarExtraContent', B),
            e),
          ),
          q =
            L && L.length
              ? o['createElement'](
                  It,
                  v()({ size: 'large' }, Z, { className: ''.concat(H, '-head-tabs'), onChange: h }),
                  L.map(function(t) {
                    return o['createElement'](It.TabPane, {
                      tab: t.tab,
                      disabled: t.disabled,
                      key: t.key,
                    });
                  }),
                )
              : null;
        (C || m || q) &&
          (a = o['createElement'](
            'div',
            { className: ''.concat(H, '-head'), style: w },
            o['createElement'](
              'div',
              { className: ''.concat(H, '-head-wrapper') },
              C && o['createElement']('div', { className: ''.concat(H, '-head-title') }, C),
              m && o['createElement']('div', { className: ''.concat(H, '-extra') }, m),
            ),
            q,
          ));
        var K = P ? o['createElement']('div', { className: ''.concat(H, '-cover') }, P) : null,
          Q = o['createElement']('div', { className: ''.concat(H, '-body'), style: T }, I ? U : R),
          J =
            E && E.length
              ? o['createElement']('ul', { className: ''.concat(H, '-actions') }, Dt(E))
              : null,
          $ = Object(x['a'])(V, ['onTabChange']),
          tt = D || c,
          et = y()(
            H,
            ((n = {}),
            p()(n, ''.concat(H, '-loading'), I),
            p()(n, ''.concat(H, '-bordered'), A),
            p()(n, ''.concat(H, '-hoverable'), j),
            p()(n, ''.concat(H, '-contain-grid'), d()),
            p()(n, ''.concat(H, '-contain-tabs'), L && L.length),
            p()(n, ''.concat(H, '-').concat(tt), tt),
            p()(n, ''.concat(H, '-type-').concat(O), !!O),
            p()(n, ''.concat(H, '-rtl'), 'rtl' === u),
            n),
            g,
          );
        return o['createElement']('div', v()({}, $, { className: et }), a, K, Q, J);
      };
      (Ot.Grid = S), (Ot.Meta = C);
      var Pt = Ot,
        Et = n('0Owb'),
        Lt = (n('+L6B'), n('2/Rp')),
        Rt = (n('7Kak'), n('9yH6')),
        Nt = (n('iQDF'), n('+eQT')),
        zt = n('LvDl'),
        Bt = n('wd/R'),
        jt = n.n(Bt);
      n('gs5U');
      const Ft = Nt['a'].RangePicker;
      function Yt(t) {
        (t && 'string' !== typeof t) ||
          this.error('\u53c2\u6570\u5f02\u5e38\uff0c\u8bf7\u68c0\u67e5...');
        const e = t.getFullYear(),
          n = t.getMonth() + 1,
          i = t.getDate();
        return `${e}-${n}-${i}`;
      }
      function Vt(t) {
        return t.setDate(1), Yt(t);
      }
      function Ht(t) {
        return t.setDate(1), t.setMonth(0), Yt(t);
      }
      class Wt extends o['Component'] {
        constructor(t) {
          super(t),
            (this.renderLayout = () => {
              const t = this.props.options.layout,
                e = t.items.map((e, n) => {
                  if (e.items && e.items.length > 0) {
                    const t = e.items.map((t, n) => {
                      const i = t.component,
                        a =
                          n > 0 && e.showDivider
                            ? { borderLeft: '1px solid #d8d8d8', paddingLeft: 120 }
                            : {};
                      return s.a.createElement(
                        r['a'],
                        { key: t.key, span: t.span || 24, offset: t.offset || 0, style: a },
                        s.a.createElement(i, {
                          key: t.key,
                          colors: t.colors,
                          preUnit: t.preUnit,
                          afterUnit: t.afterUnit,
                          data: t.data,
                          options: t.options,
                        }),
                      );
                    });
                    return s.a.createElement(
                      r['a'],
                      { span: e.span || 24, key: e.key, className: e.className },
                      s.a.createElement(i['a'], { gutter: 32, key: e.key }, t),
                    );
                  }
                  const a = e.component,
                    o =
                      t.showDivider && n > 0
                        ? { borderLeft: '1px solid gray', paddingLeft: 120 }
                        : {};
                  return s.a.createElement(
                    r['a'],
                    { key: e.key, span: e.span || 24, className: e.className, style: o },
                    s.a.createElement(a, {
                      key: e.key,
                      colors: e.colors,
                      data: e.data,
                      options: e.options,
                    }),
                  );
                });
              return s.a.createElement(i['a'], { gutter: 32 }, e);
            }),
            (this.onChange = () => {
              this.props.onChange(this.state);
            }),
            (this.radioChange = (t, e) => {
              this.setState({ [t]: e.target.value }, () => {
                this.onChange();
              });
            }),
            (this.timeChange = (t, e, n) => {
              this.setState({ [t]: [jt()(e[0]).format(n), jt()(e[1]).format(n)] }, () => {
                this.onChange();
              });
            }),
            (this.onTabChange = (t, e) => {
              this.setState({ [t]: e }, () => {
                this.onChange();
              });
            }),
            (this.toMonth = (t, e) => {
              this.setState(
                {
                  [t]: [Vt(new Date()), jt()(new Date()).format(e)],
                  refeshDate: new Date().getTime(),
                },
                () => {
                  this.onChange();
                },
              );
            }),
            (this.toYear = (t, e) => {
              this.setState(
                {
                  [t]: [Ht(new Date()), jt()(new Date()).format(e)],
                  refeshDate: new Date().getTime(),
                },
                () => {
                  this.onChange();
                },
              );
            }),
            (this.renderRadios = t =>
              t.map((t, e) =>
                s.a.createElement(
                  Rt['a'].Group,
                  {
                    buttonStyle: 'solid',
                    key: t.key + e,
                    value: this.state[t.key],
                    onChange: e => {
                      this.radioChange(t.key, e);
                    },
                    style: { marginLeft: '10px' },
                  },
                  t.options.map(t =>
                    s.a.createElement(Rt['a'].Button, { key: t.name, value: t.value }, t.name),
                  ),
                ),
              ));
          const e = t.options.headerOptions.defaultValue;
          this.state = { ...e, refeshDate: new Date().getTime() };
        }
        render() {
          const t = this.props.options,
            e = t.headerOptions,
            n = e.title,
            i = e.radios,
            r = e.timeRange,
            a = e.tabList,
            o = {},
            l = s.a.createElement(
              'span',
              null,
              i &&
                !Object(zt['isArray'])(i) &&
                i.options &&
                s.a.createElement(
                  Rt['a'].Group,
                  {
                    buttonStyle: 'solid',
                    value: this.state[i.key],
                    onChange: t => {
                      this.radioChange(i.key, t);
                    },
                  },
                  i.options.map(t =>
                    s.a.createElement(Rt['a'].Button, { key: t.name, value: t.value }, t.name),
                  ),
                ),
              i && Object(zt['isArray'])(i) && i.length > 0 && this.renderRadios(i),
              r &&
                s.a.createElement(Ft, {
                  allowClear: !1,
                  key: this.state.refeshDate,
                  onChange: t => {
                    this.timeChange(r.key, t, r.format);
                  },
                  style: { marginLeft: '10px' },
                  value: [jt()(this.state[r.key][0]), jt()(this.state[r.key][1])],
                  format: r.format,
                  renderExtraFooter: () =>
                    r.showFooter
                      ? s.a.createElement(
                          'div',
                          { className: 'custDateFooter' },
                          s.a.createElement(
                            Lt['a'],
                            {
                              onClick: () => {
                                this.toYear(r.key, r.format);
                              },
                            },
                            '\u672c\u5e74',
                          ),
                          s.a.createElement(
                            Lt['a'],
                            {
                              style: { marginLeft: '20px' },
                              onClick: () => {
                                this.toMonth(r.key, r.format);
                              },
                            },
                            '\u672c\u6708',
                          ),
                        )
                      : null,
                }),
            );
          return (
            n && (o.title = n),
            a ? ((o.tabList = a.list), (o.tabBarExtraContent = l)) : (o.extra = l),
            s.a.createElement(
              'div',
              { className: 'echart-card-pane' },
              s.a.createElement(
                Pt,
                Object(Et['a'])(
                  {
                    onTabChange: t => {
                      this.onTabChange(a.key, t);
                    },
                  },
                  o,
                ),
                this.renderLayout(),
              ),
            )
          );
        }
      }
      const Gt = n('ProS');
      n('75ce'), n('AH3D'), n('Ynxi');
      class Ut extends o['Component'] {
        constructor(t) {
          super(t),
            (this.renderChart = () => {
              const t = this.props,
                e = t.options.option,
                n = t.data,
                i = e.legend,
                r = Gt.init(this.chartRef.current);
              r.clear();
              const a =
                n && n.yData
                  ? n.yData.map((t, e) => {
                      const n = { ...t };
                      return i && (i.data[e].name = n.name), { type: 'line', ...n };
                    })
                  : [];
              r.setOption({
                ...e,
                xAxis: { data: (n && n.xData) || [], axisTick: { show: !1 } },
                yAxis: {
                  axisLine: { show: !1 },
                  axisTick: { show: !1 },
                  splitLine: { lineStyle: { type: 'dashed' } },
                },
                series: a,
              });
              const o = this.chartRef.current;
              l['a'].on(o, () => {
                r.resize();
              });
            }),
            (this.state = {}),
            (this.chartRef = s.a.createRef());
        }
        componentDidMount() {
          this.renderChart();
        }
        componentDidUpdate() {
          this.renderChart();
        }
        render() {
          const t = this.props,
            e = t.width,
            n = t.height;
          return s.a.createElement('div', {
            style: { width: e || '100%', height: n || '400px' },
            ref: this.chartRef,
          });
        }
      }
      const Xt = n('ProS');
      n('wDdD'), n('AH3D'), n('Ynxi');
      class Zt extends o['Component'] {
        constructor(t) {
          super(t),
            (this.renderChart = () => {
              const t = this.props,
                e = t.data,
                n = void 0 === e ? [] : e,
                i = t.options,
                r = i.option,
                a = void 0 === r ? {} : r,
                o = i.seriseOption,
                s = o.radius,
                u = o.showTotal,
                c = a.title,
                h = Xt.init(this.chartRef.current);
              h.clear();
              const d = '\u603b';
              let f = 0;
              n.forEach(t => {
                f += t.value;
              }),
                h.setOption({
                  ...a,
                  title: u
                    ? {
                        text: `{name|${d}}\n{val|${parseFloat(f).toFixed(2)}}`,
                        top: 'center',
                        left: 'center',
                        textStyle: {
                          rich: {
                            name: {
                              fontSize: 14,
                              fontWeight: 'normal',
                              color: '#727272',
                              padding: [10, 0],
                            },
                            val: { fontSize: 24, fontWeight: 'bold', color: '#727272' },
                          },
                        },
                      }
                    : c || '',
                  series: [{ ...o, type: 'pie', radius: s || '60%', data: n }],
                });
              const p = this.chartRef.current;
              l['a'].on(p, () => {
                h.resize();
              });
            }),
            (this.state = {}),
            (this.chartRef = s.a.createRef());
        }
        componentDidMount() {
          this.renderChart();
        }
        componentDidUpdate() {
          this.renderChart();
        }
        render() {
          const t = this.props.options,
            e = t.width,
            n = t.height;
          return s.a.createElement('div', { style: { width: e, height: n }, ref: this.chartRef });
        }
      }
      n('R9oj');
      var qt = n('ECub');
      function Kt(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
          ? t['default']
          : t;
      }
      function Qt(t, e) {
        return (e = { exports: {} }), t(e, e.exports), e.exports;
      }
      var Jt = 'function' === typeof Symbol && Symbol.for,
        $t = Jt ? Symbol.for('react.element') : 60103,
        te = Jt ? Symbol.for('react.portal') : 60106,
        ee = Jt ? Symbol.for('react.fragment') : 60107,
        ne = Jt ? Symbol.for('react.strict_mode') : 60108,
        ie = Jt ? Symbol.for('react.profiler') : 60114,
        re = Jt ? Symbol.for('react.provider') : 60109,
        ae = Jt ? Symbol.for('react.context') : 60110,
        oe = Jt ? Symbol.for('react.async_mode') : 60111,
        se = Jt ? Symbol.for('react.concurrent_mode') : 60111,
        le = Jt ? Symbol.for('react.forward_ref') : 60112,
        ue = Jt ? Symbol.for('react.suspense') : 60113,
        ce = Jt ? Symbol.for('react.suspense_list') : 60120,
        he = Jt ? Symbol.for('react.memo') : 60115,
        de = Jt ? Symbol.for('react.lazy') : 60116,
        fe = Jt ? Symbol.for('react.block') : 60121,
        pe = Jt ? Symbol.for('react.fundamental') : 60117,
        ge = Jt ? Symbol.for('react.responder') : 60118,
        ve = Jt ? Symbol.for('react.scope') : 60119;
      function me(t) {
        if ('object' === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case $t:
              switch (((t = t.type), t)) {
                case oe:
                case se:
                case ee:
                case ie:
                case ne:
                case ue:
                  return t;
                default:
                  switch (((t = t && t.$$typeof), t)) {
                    case ae:
                    case le:
                    case de:
                    case he:
                    case re:
                      return t;
                    default:
                      return e;
                  }
              }
            case te:
              return e;
          }
        }
      }
      function ye(t) {
        return me(t) === se;
      }
      var xe = oe,
        _e = se,
        be = ae,
        we = re,
        Se = $t,
        Me = le,
        Te = ee,
        Ce = de,
        Ie = he,
        ke = te,
        Ae = ie,
        De = ne,
        Oe = ue,
        Pe = function(t) {
          return ye(t) || me(t) === oe;
        },
        Ee = ye,
        Le = function(t) {
          return me(t) === ae;
        },
        Re = function(t) {
          return me(t) === re;
        },
        Ne = function(t) {
          return 'object' === typeof t && null !== t && t.$$typeof === $t;
        },
        ze = function(t) {
          return me(t) === le;
        },
        Be = function(t) {
          return me(t) === ee;
        },
        je = function(t) {
          return me(t) === de;
        },
        Fe = function(t) {
          return me(t) === he;
        },
        Ye = function(t) {
          return me(t) === te;
        },
        Ve = function(t) {
          return me(t) === ie;
        },
        He = function(t) {
          return me(t) === ne;
        },
        We = function(t) {
          return me(t) === ue;
        },
        Ge = function(t) {
          return (
            'string' === typeof t ||
            'function' === typeof t ||
            t === ee ||
            t === se ||
            t === ie ||
            t === ne ||
            t === ue ||
            t === ce ||
            ('object' === typeof t &&
              null !== t &&
              (t.$$typeof === de ||
                t.$$typeof === he ||
                t.$$typeof === re ||
                t.$$typeof === ae ||
                t.$$typeof === le ||
                t.$$typeof === pe ||
                t.$$typeof === ge ||
                t.$$typeof === ve ||
                t.$$typeof === fe))
          );
        },
        Ue = me,
        Xe = {
          AsyncMode: xe,
          ConcurrentMode: _e,
          ContextConsumer: be,
          ContextProvider: we,
          Element: Se,
          ForwardRef: Me,
          Fragment: Te,
          Lazy: Ce,
          Memo: Ie,
          Portal: ke,
          Profiler: Ae,
          StrictMode: De,
          Suspense: Oe,
          isAsyncMode: Pe,
          isConcurrentMode: Ee,
          isContextConsumer: Le,
          isContextProvider: Re,
          isElement: Ne,
          isForwardRef: ze,
          isFragment: Be,
          isLazy: je,
          isMemo: Fe,
          isPortal: Ye,
          isProfiler: Ve,
          isStrictMode: He,
          isSuspense: We,
          isValidElementType: Ge,
          typeOf: Ue,
        },
        Ze = Qt(function(t, e) {
          0;
        }),
        qe =
          (Ze.AsyncMode,
          Ze.ConcurrentMode,
          Ze.ContextConsumer,
          Ze.ContextProvider,
          Ze.Element,
          Ze.ForwardRef,
          Ze.Fragment,
          Ze.Lazy,
          Ze.Memo,
          Ze.Portal,
          Ze.Profiler,
          Ze.StrictMode,
          Ze.Suspense,
          Ze.isAsyncMode,
          Ze.isConcurrentMode,
          Ze.isContextConsumer,
          Ze.isContextProvider,
          Ze.isElement,
          Ze.isForwardRef,
          Ze.isFragment,
          Ze.isLazy,
          Ze.isMemo,
          Ze.isPortal,
          Ze.isProfiler,
          Ze.isStrictMode,
          Ze.isSuspense,
          Ze.isValidElementType,
          Ze.typeOf,
          Qt(function(t) {
            t.exports = Xe;
          }),
          Object.getOwnPropertySymbols),
        Ke = Object.prototype.hasOwnProperty,
        Qe = Object.prototype.propertyIsEnumerable;
      function Je(t) {
        if (null === t || void 0 === t)
          throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(t);
      }
      function $e() {
        try {
          if (!Object.assign) return !1;
          var t = new String('abc');
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1;
          for (var e = {}, n = 0; n < 10; n++) e['_' + String.fromCharCode(n)] = n;
          var i = Object.getOwnPropertyNames(e).map(function(t) {
            return e[t];
          });
          if ('0123456789' !== i.join('')) return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(t) {
              r[t] = t;
            }),
            'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
          );
        } catch (a) {
          return !1;
        }
      }
      $e() && Object.assign;
      var tn = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
        en = tn;
      function nn(t, e, n, i, r) {}
      nn.resetWarningCache = function() {
        0;
      };
      Function.call.bind(Object.prototype.hasOwnProperty);
      function rn() {}
      function an() {}
      an.resetWarningCache = rn;
      var on = function() {
          function t(t, e, n, i, r, a) {
            if (a !== en) {
              var o = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((o.name = 'Invariant Violation'), o);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: an,
            resetWarningCache: rn,
          };
          return (n.PropTypes = n), n;
        },
        sn = Qt(function(t) {
          t.exports = on();
        });
      function ln(t, e) {
        void 0 === e && (e = {});
        var n = e.insertAt;
        if (t && 'undefined' !== typeof document) {
          var i = document.head || document.getElementsByTagName('head')[0],
            r = document.createElement('style');
          (r.type = 'text/css'),
            'top' === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r),
            r.styleSheet ? (r.styleSheet.cssText = t) : r.appendChild(document.createTextNode(t));
        }
      }
      function un(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 600,
          n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          i = null;
        return function() {
          clearTimeout(i);
          for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
          if (n) return t.apply(this, a), void (n = !1);
          i = setTimeout(t.bind.apply(t, [this].concat(a)), e);
        };
      }
      function cn(t, e) {
        var n =
            window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
          i = new n(e);
        return (
          i.observe(t, { attributes: !0, attributeFilter: ['style'], attributeOldValue: !0 }), i
        );
      }
      function hn(t) {
        var e = !1,
          n = !1,
          i = null;
        return (
          'function' === typeof t && (t = t()),
          t && 'function' === typeof t.next
            ? (Promise.resolve().then(function() {
                e || r(t.next());
              }),
              {
                end: function() {
                  (e = !0),
                    Promise.resolve().then(function() {
                      t.return(), (t = null);
                    });
                },
                pause: function() {
                  e || (n = !0);
                },
                resume: function() {
                  var a = i;
                  !e &&
                    n &&
                    ((n = !1),
                    Promise.resolve(i).then(function() {
                      e || n || a !== i || r(t.next());
                    }));
                },
              })
            : function() {
                return {};
              }
        );
        function r(a) {
          return a.done
            ? a.value
            : ((i = a.value),
              Promise.resolve(a.value).then(function() {
                !e && !n && r(t.next());
              }));
        }
      }
      var dn =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          },
        fn = (function() {
          function t(t, e) {
            var n = [],
              i = !0,
              r = !1,
              a = void 0;
            try {
              for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done); i = !0)
                if ((n.push(o.value), e && n.length === e)) break;
            } catch (l) {
              (r = !0), (a = l);
            } finally {
              try {
                !i && s['return'] && s['return']();
              } finally {
                if (r) throw a;
              }
            }
            return n;
          }
          return function(e, n) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, n);
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          };
        })(),
        pn = function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
          return Array.from(t);
        };
      function gn(t) {
        var e = Object(o['useState'])({ width: 0, height: 0 }),
          n = fn(e, 2),
          i = n[0],
          r = n[1],
          a = Object(o['useRef'])(null),
          s = Object(o['useCallback'])(function() {
            var t = a.current,
              e = t.clientWidth,
              n = t.clientHeight;
            r({ width: e, height: n });
          }, []);
        return (
          Object(o['useImperativeHandle'])(
            t,
            function() {
              return { setWH: s };
            },
            [],
          ),
          Object(o['useEffect'])(function() {
            var t = un(s, 100);
            t();
            var e = cn(a.current, t);
            return (
              window.addEventListener('resize', t),
              function() {
                e.disconnect(), e.takeRecords(), window.removeEventListener('resize', t);
              }
            );
          }, []),
          dn({}, i, { domRef: a, setWH: s })
        );
      }
      var vn = Qt(function(t) {
          (function() {
            var e = {}.hasOwnProperty;
            function n() {
              for (var t = [], i = 0; i < arguments.length; i++) {
                var r = arguments[i];
                if (r) {
                  var a = typeof r;
                  if ('string' === a || 'number' === a) t.push(r);
                  else if (Array.isArray(r) && r.length) {
                    var o = n.apply(null, r);
                    o && t.push(o);
                  } else if ('object' === a) for (var s in r) e.call(r, s) && r[s] && t.push(s);
                }
              }
              return t.join(' ');
            }
            t.exports ? ((n.default = n), (t.exports = n)) : (window.classNames = n);
          })();
        }),
        mn = Qt(function(t) {
          function e(t) {
            return t && t.__esModule ? t : { default: t };
          }
          t.exports = e;
        });
      function yn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      Kt(mn);
      var xn = yn;
      function _n(t) {
        if (Array.isArray(t)) return xn(t);
      }
      var bn = _n;
      function wn(t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }
      var Sn = wn;
      function Mn(t, e) {
        if (t) {
          if ('string' === typeof t) return xn(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(n)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? xn(t, e)
              : void 0
          );
        }
      }
      var Tn = Mn;
      function Cn() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      var In = Cn;
      function kn(t) {
        return bn(t) || Sn(t) || Tn(t) || In();
      }
      var An = kn,
        Dn = Qt(function(t) {
          function e(n) {
            return (
              'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
                ? (t.exports = e = function(t) {
                    return typeof t;
                  })
                : (t.exports = e = function(t) {
                    return t &&
                      'function' === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
              e(n)
            );
          }
          t.exports = e;
        });
      function On(t) {
        if (Array.isArray(t)) return t;
      }
      var Pn = On;
      function En(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            i = !0,
            r = !1,
            a = void 0;
          try {
            for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done); i = !0)
              if ((n.push(o.value), e && n.length === e)) break;
          } catch (l) {
            (r = !0), (a = l);
          } finally {
            try {
              i || null == s['return'] || s['return']();
            } finally {
              if (r) throw a;
            }
          }
          return n;
        }
      }
      var Ln = En;
      function Rn() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      var Nn = Rn;
      function zn(t, e) {
        return Pn(t) || Ln(t, e) || Tn(t, e) || Nn();
      }
      var Bn = zn,
        jn = Qt(function(t, e) {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.deepClone = d),
            (e.eliminateBlur = f),
            (e.checkPointIsInCircle = p),
            (e.getTwoPointDistance = g),
            (e.checkPointIsInPolygon = v),
            (e.checkPointIsInSector = m),
            (e.checkPointIsNearPolyline = x),
            (e.checkPointIsInRect = _),
            (e.getRotatePointPos = b),
            (e.getScalePointPos = w),
            (e.getTranslatePointPos = S),
            (e.getDistanceBetweenPointAndLine = M),
            (e.getCircleRadianPoint = T),
            (e.getRegularPolygonPoints = C),
            (e['default'] = void 0);
          var n = mn(An),
            i = mn(Bn),
            r = mn(Dn),
            a = Math.abs,
            o = Math.sqrt,
            s = Math.sin,
            l = Math.cos,
            u = Math.max,
            c = Math.min,
            h = Math.PI;
          function d(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!t) return t;
            var n = JSON.parse,
              i = JSON.stringify;
            if (!e) return n(i(t));
            var a = t instanceof Array ? [] : {};
            if (t && 'object' === (0, r['default'])(t))
              for (var o in t)
                t.hasOwnProperty(o) &&
                  (t[o] && 'object' === (0, r['default'])(t[o])
                    ? (a[o] = d(t[o], !0))
                    : (a[o] = t[o]));
            return a;
          }
          function f(t) {
            return t.map(function(t) {
              var e = (0, i['default'])(t, 2),
                n = e[0],
                r = e[1];
              return [parseInt(n) + 0.5, parseInt(r) + 0.5];
            });
          }
          function p(t, e, n, i) {
            return g(t, [e, n]) <= i;
          }
          function g(t, e) {
            var n = (0, i['default'])(t, 2),
              r = n[0],
              s = n[1],
              l = (0, i['default'])(e, 2),
              u = l[0],
              c = l[1],
              h = a(r - u),
              d = a(s - c);
            return o(h * h + d * d);
          }
          function v(t, e) {
            for (
              var n = 0,
                r = (0, i['default'])(t, 2),
                a = r[0],
                o = r[1],
                s = e.length,
                l = 1,
                h = e[0];
              l <= s;
              l++
            ) {
              var d = e[l % s];
              if (a > c(h[0], d[0]) && a <= u(h[0], d[0]) && o <= u(h[1], d[1]) && h[0] !== d[0]) {
                var f = ((a - h[0]) * (d[1] - h[1])) / (d[0] - h[0]) + h[1];
                (h[1] === d[1] || o <= f) && n++;
              }
              h = d;
            }
            return n % 2 === 1;
          }
          function m(t, e, n, r, a, o, s) {
            if (!t) return !1;
            if (g(t, [e, n]) > r) return !1;
            if (!s) {
              var l = d([o, a]),
                u = (0, i['default'])(l, 2);
              (a = u[0]), (o = u[1]);
            }
            var c = a > o;
            if (c) {
              var f = [o, a];
              (a = f[0]), (o = f[1]);
            }
            var p = o - a;
            if (p >= 2 * h) return !0;
            var v = (0, i['default'])(t, 2),
              m = v[0],
              x = v[1],
              _ = T(e, n, r, a),
              b = (0, i['default'])(_, 2),
              w = b[0],
              S = b[1],
              M = T(e, n, r, o),
              C = (0, i['default'])(M, 2),
              I = C[0],
              k = C[1],
              A = [m - e, x - n],
              D = [w - e, S - n],
              O = [I - e, k - n],
              P = p > h;
            if (P) {
              var E = d([O, D]),
                L = (0, i['default'])(E, 2);
              (D = L[0]), (O = L[1]);
            }
            var R = y(D, A) && !y(O, A);
            return P && (R = !R), c && (R = !R), R;
          }
          function y(t, e) {
            var n = (0, i['default'])(t, 2),
              r = n[0],
              a = n[1],
              o = (0, i['default'])(e, 2),
              s = o[0],
              l = o[1];
            return -a * s + r * l > 0;
          }
          function x(t, e, r) {
            var a = r / 2,
              o = e.map(function(t) {
                var e = (0, i['default'])(t, 2),
                  n = e[0],
                  r = e[1];
                return [n, r - a];
              }),
              s = e.map(function(t) {
                var e = (0, i['default'])(t, 2),
                  n = e[0],
                  r = e[1];
                return [n, r + a];
              }),
              l = [].concat((0, n['default'])(o), (0, n['default'])(s.reverse()));
            return v(t, l);
          }
          function _(t, e, n, r, a) {
            var o = (0, i['default'])(t, 2),
              s = o[0],
              l = o[1];
            return !(s < e) && !(l < n) && !(s > e + r) && !(l > n + a);
          }
          function b() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0];
            if (!e) return !1;
            if (t % 360 === 0) return e;
            var r = (0, i['default'])(e, 2),
              a = r[0],
              o = r[1],
              u = (0, i['default'])(n, 2),
              c = u[0],
              d = u[1];
            return (
              (t *= h / 180),
              [(a - c) * l(t) - (o - d) * s(t) + c, (a - c) * s(t) + (o - d) * l(t) + d]
            );
          }
          function w() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [1, 1],
              e = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0];
            if (!e) return !1;
            if (1 === t) return e;
            var r = (0, i['default'])(e, 2),
              a = r[0],
              o = r[1],
              s = (0, i['default'])(n, 2),
              l = s[0],
              u = s[1],
              c = (0, i['default'])(t, 2),
              h = c[0],
              d = c[1],
              f = a - l,
              p = o - u;
            return [f * h + l, p * d + u];
          }
          function S(t, e) {
            if (!t || !e) return !1;
            var n = (0, i['default'])(e, 2),
              r = n[0],
              a = n[1],
              o = (0, i['default'])(t, 2),
              s = o[0],
              l = o[1];
            return [r + s, a + l];
          }
          function M(t, e, n) {
            if (!t || !e || !n) return !1;
            var r = (0, i['default'])(t, 2),
              s = r[0],
              l = r[1],
              u = (0, i['default'])(e, 2),
              c = u[0],
              h = u[1],
              d = (0, i['default'])(n, 2),
              f = d[0],
              p = d[1],
              g = p - h,
              v = c - f,
              m = h * (f - c) - c * (p - h),
              y = a(g * s + v * l + m),
              x = o(g * g + v * v);
            return y / x;
          }
          function T(t, e, n, i) {
            return [t + l(i) * n, e + s(i) * n];
          }
          function C(t, e, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -0.5 * h,
              a = (2 * h) / i,
              o = new Array(i).fill('').map(function(t, e) {
                return e * a + r;
              });
            return o.map(function(i) {
              return T(t, e, n, i);
            });
          }
          var I = {
            deepClone: d,
            eliminateBlur: f,
            checkPointIsInCircle: p,
            checkPointIsInPolygon: v,
            checkPointIsInSector: m,
            checkPointIsNearPolyline: x,
            getTwoPointDistance: g,
            getRotatePointPos: b,
            getScalePointPos: w,
            getTranslatePointPos: S,
            getCircleRadianPoint: T,
            getRegularPolygonPoints: C,
            getDistanceBetweenPointAndLine: M,
          };
          e['default'] = I;
        });
      Kt(jn);
      var Fn = jn.deepClone,
        Yn =
          (jn.eliminateBlur,
          jn.checkPointIsInCircle,
          jn.getTwoPointDistance,
          jn.checkPointIsInPolygon,
          jn.checkPointIsInSector,
          jn.checkPointIsNearPolyline,
          jn.checkPointIsInRect,
          jn.getRotatePointPos,
          jn.getScalePointPos,
          jn.getTranslatePointPos,
          jn.getDistanceBetweenPointAndLine,
          jn.getCircleRadianPoint,
          jn.getRegularPolygonPoints,
          Qt(function(t, e) {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.filterNonNumber = r),
              (e.deepMerge = a),
              (e.mulAdd = o),
              (e.mergeSameStackData = s),
              (e.getTwoPointDistance = l),
              (e.getLinearGradientColor = u),
              (e.getPolylineLength = c),
              (e.getPointToLineDistance = h),
              (e.initNeedSeries = d),
              (e.radianToAngle = f);
            var n = mn(An),
              i = mn(Dn);
            function r(t) {
              return t.filter(function(t) {
                return 'number' === typeof t;
              });
            }
            function a(t, e) {
              for (var n in e)
                t[n] && 'object' === (0, i['default'])(t[n])
                  ? a(t[n], e[n])
                  : 'object' !== (0, i['default'])(e[n])
                  ? (t[n] = e[n])
                  : (t[n] = (0, jn.deepClone)(e[n], !0));
              return t;
            }
            function o(t) {
              return (
                (t = r(t)),
                t.reduce(function(t, e) {
                  return t + e;
                }, 0)
              );
            }
            function s(t, e) {
              var i = t.stack;
              if (!i) return (0, n['default'])(t.data);
              var r = e.filter(function(t) {
                  var e = t.stack;
                  return e === i;
                }),
                a = r.findIndex(function(e) {
                  var n = e.data;
                  return n === t.data;
                }),
                s = r.splice(0, a + 1).map(function(t) {
                  var e = t.data;
                  return e;
                }),
                l = s[0].length;
              return new Array(l).fill(0).map(function(t, e) {
                return o(
                  s.map(function(t) {
                    return t[e];
                  }),
                );
              });
            }
            function l(t, e) {
              var n = Math.abs(t[0] - e[0]),
                i = Math.abs(t[1] - e[1]);
              return Math.sqrt(n * n + i * i);
            }
            function u(t, e, i, r) {
              if (t && e && i && r.length) {
                var a = r;
                'string' === typeof a && (a = [r, r]);
                var o = t.createLinearGradient.apply(
                    t,
                    (0, n['default'])(e).concat((0, n['default'])(i)),
                  ),
                  s = 1 / (a.length - 1);
                return (
                  a.forEach(function(t, e) {
                    return o.addColorStop(s * e, t);
                  }),
                  o
                );
              }
            }
            function c(t) {
              var e = new Array(t.length - 1).fill(0).map(function(e, n) {
                  return [t[n], t[n + 1]];
                }),
                i = e.map(function(t) {
                  return l.apply(void 0, (0, n['default'])(t));
                });
              return o(i);
            }
            function h(t, e, n) {
              var i = l(t, e),
                r = l(t, n),
                a = l(e, n);
              return (0.5 * Math.sqrt((i + r + a) * (i + r - a) * (i + a - r) * (r + a - i))) / a;
            }
            function d(t, e, n) {
              return (
                (t = t.filter(function(t) {
                  var e = t.type;
                  return e === n;
                })),
                (t = t.map(function(t) {
                  return a((0, jn.deepClone)(e, !0), t);
                })),
                t.filter(function(t) {
                  var e = t.show;
                  return e;
                })
              );
            }
            function f(t) {
              return (t / Math.PI) * 180;
            }
          }));
      Kt(Yn);
      Yn.filterNonNumber;
      var Vn = Yn.deepMerge,
        Hn =
          (Yn.mulAdd,
          Yn.mergeSameStackData,
          Yn.getTwoPointDistance,
          Yn.getLinearGradientColor,
          Yn.getPolylineLength,
          Yn.getPointToLineDistance,
          Yn.initNeedSeries,
          Yn.radianToAngle,
          '.dv-scroll-ranking-board {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .row-item {\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .ranking-info {\n  display: flex;\n  width: 100%;\n  font-size: 13px;\n}\n.dv-scroll-ranking-board .ranking-info .rank {\n  width: 40px;\n  color: #1370fb;\n}\n.dv-scroll-ranking-board .ranking-info .info-name {\n  flex: 1;\n}\n.dv-scroll-ranking-board .ranking-column {\n  border-bottom: 2px solid rgba(19, 112, 251, 0.5);\n  margin-top: 5px;\n}\n.dv-scroll-ranking-board .ranking-column .inside-column {\n  position: relative;\n  height: 6px;\n  background-color: #1370fb;\n  margin-bottom: 2px;\n  border-radius: 1px;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .ranking-column .shine {\n  position: absolute;\n  left: 0%;\n  top: 2px;\n  height: 2px;\n  width: 50px;\n  transform: translateX(-100%);\n  background: radial-gradient(#28f8ff 5%, transparent 80%);\n  animation: shine 3s ease-in-out infinite alternate;\n}\n@keyframes shine {\n  80% {\n    left: 0%;\n    transform: translateX(-100%);\n  }\n  100% {\n    left: 100%;\n    transform: translateX(0%);\n  }\n}\n');
      ln(Hn);
      var Wn = { data: [], rowNum: 5, waitTime: 2e3, carousel: 'single', unit: '', sort: !0 };
      function Gn(t) {
        var e = t.data,
          n = t.rowNum,
          i = t.sort;
        i &&
          e.sort(function(t, e) {
            var n = t.value,
              i = e.value;
            return n > i ? -1 : n < i ? 1 : n === i ? 0 : void 0;
          });
        var r = e.map(function(t) {
            var e = t.value;
            return e;
          }),
          a = Math.min.apply(Math, pn(r)) || 0,
          o = Math.abs(a),
          s = Math.max.apply(Math, pn(r)) || 0,
          l = Math.abs(s),
          u = l + o;
        e = e.map(function(t, e) {
          return dn({}, t, { ranking: e + 1, percent: u && ((t.value + o) / u) * 100 });
        });
        var c = e.length;
        return (
          c > n && c < 2 * n && (e = [].concat(pn(e), pn(e))),
          (e = e.map(function(t, e) {
            return dn({}, t, { scroll: e });
          })),
          e
        );
      }
      var Un = Object(o['forwardRef'])(function(t, e) {
        var n = t.config,
          i = void 0 === n ? {} : n,
          r = t.className,
          a = t.style,
          l = regeneratorRuntime.mark(T),
          u = gn(e),
          c = u.width,
          h = u.height,
          d = u.domRef,
          f = Object(o['useState'])({ mergedConfig: null, rows: [], heights: [] }),
          p = fn(f, 2),
          g = p[0],
          v = p[1],
          m = g.mergedConfig,
          y = g.rows,
          x = g.heights,
          _ = Object(o['useRef'])(dn({}, g, { rowsData: [], avgHeight: 0, animationIndex: 0 })),
          b = Object(o['useRef'])(h);
        function w() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (m) {
            var e = M(m, t);
            void 0 !== e &&
              (Object.assign(_.current, { heights: e }),
              v(function(t) {
                return dn({}, t, { heights: e });
              }));
          }
        }
        function S() {
          var t = Vn(Fn(Wn, !0), i || {}),
            e = Gn(t),
            n = M(t),
            r = { mergedConfig: t, rows: e };
          void 0 !== n && Object.assign(r, { heights: n }),
            Object.assign(_.current, r, { rowsData: e, animationIndex: 0 }),
            v(function(t) {
              return dn({}, t, r);
            });
        }
        function M(t) {
          var e = t.rowNum,
            n = t.data,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = h / e;
          if ((Object.assign(_.current, { avgHeight: r }), !i)) return new Array(n.length).fill(r);
        }
        function T() {
          var t,
            e,
            n,
            i,
            r,
            a,
            o,
            s,
            u,
            c,
            h,
            d,
            f,
            p,
            g = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return regeneratorRuntime.wrap(
            function(l) {
              while (1)
                switch ((l.prev = l.next)) {
                  case 0:
                    if (
                      ((t = _.current),
                      (e = t.avgHeight),
                      (n = t.animationIndex),
                      (i = t.mergedConfig),
                      (r = i.waitTime),
                      (a = i.carousel),
                      (o = i.rowNum),
                      (s = t.rowsData),
                      (u = s.length),
                      !g)
                    ) {
                      l.next = 5;
                      break;
                    }
                    return (
                      (l.next = 5),
                      new Promise(function(t) {
                        return setTimeout(t, r);
                      })
                    );
                  case 5:
                    return (
                      (c = 'single' === a ? 1 : o),
                      (h = s.slice(n)),
                      h.push.apply(h, pn(s.slice(0, n))),
                      (d = new Array(u).fill(e)),
                      v(function(t) {
                        return dn({}, t, { rows: h, heights: d });
                      }),
                      (l.next = 12),
                      new Promise(function(t) {
                        return setTimeout(t, 300);
                      })
                    );
                  case 12:
                    (n += c),
                      (f = n - u),
                      f >= 0 && (n = f),
                      (p = [].concat(pn(d))),
                      p.splice.apply(p, [0, c].concat(pn(new Array(c).fill(0)))),
                      Object.assign(_.current, { animationIndex: n }),
                      v(function(t) {
                        return dn({}, t, { heights: p });
                      });
                  case 19:
                  case 'end':
                    return l.stop();
                }
            },
            l,
            this,
          );
        }
        Object.assign(_.current, g),
          Object(o['useEffect'])(
            function() {
              var t = regeneratorRuntime.mark(n);
              S();
              var e = !0;
              function n() {
                var n,
                  i = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          n = regeneratorRuntime.mark(function t() {
                            var n;
                            return regeneratorRuntime.wrap(
                              function(t) {
                                while (1)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return t.delegateYield(T(e), 't0', 1);
                                    case 1:
                                      return (
                                        (e = !1),
                                        (n = _.current.mergedConfig.waitTime),
                                        (t.next = 5),
                                        new Promise(function(t) {
                                          return setTimeout(t, n - 300);
                                        })
                                      );
                                    case 5:
                                    case 'end':
                                      return t.stop();
                                  }
                              },
                              t,
                              i,
                            );
                          });
                        case 1:
                          return t.delegateYield(n(), 't0', 3);
                        case 3:
                          t.next = 1;
                          break;
                        case 5:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }
              var i = _.current,
                r = i.mergedConfig.rowNum,
                a = i.rows,
                o = a.length;
              if (!(r >= o)) return hn(n).end;
            },
            [i, d.current],
          ),
          Object(o['useEffect'])(
            function() {
              0 === b.current && 0 !== h ? (w(), (b.current = h)) : w(!0);
            },
            [c, h, d.current],
          );
        var C = Object(o['useMemo'])(
          function() {
            return vn('dv-scroll-ranking-board', r);
          },
          [r],
        );
        return s.a.createElement(
          'div',
          { className: C, style: a, ref: d },
          y.map(function(t, e) {
            return s.a.createElement(
              'div',
              {
                className: 'row-item',
                key: t.toString() + t.scroll,
                style: { height: x[e] + 'px' },
              },
              s.a.createElement(
                'div',
                { className: 'ranking-info' },
                s.a.createElement('div', { className: 'rank' }, 'No.', t.ranking),
                s.a.createElement('div', {
                  className: 'info-name',
                  dangerouslySetInnerHTML: { __html: t.name },
                }),
                s.a.createElement('div', { className: 'ranking-value' }, t.value + m.unit),
              ),
              s.a.createElement(
                'div',
                { className: 'ranking-column' },
                s.a.createElement(
                  'div',
                  { className: 'inside-column', style: { width: t.percent + '%' } },
                  s.a.createElement('div', { className: 'shine' }),
                ),
              ),
            );
          }),
        );
      });
      Un.propTypes = { config: sn.object, className: sn.string, style: sn.object };
      var Xn = Un,
        Zn = n('FCeL'),
        qn = n.n(Zn);
      n('Tlm3');
      class Kn extends o['Component'] {
        constructor(...t) {
          super(...t), (this.state = { data: [] });
        }
        static getDerivedStateFromProps(t) {
          const e = t.data,
            n = t.options.prefix;
          return e ? { data: n ? e.map(t => ({ ...t, name: `${n} ${t.name}` })) : e } : null;
        }
        render() {
          const t = this.props.options,
            e = void 0 === t ? {} : t,
            n = e.style,
            i = e.title,
            r = e.prefix,
            a = this.state.data,
            o = { width: '100%', height: '300px', color: '#000', ...n };
          i && (o.height = o.height.replace(/\d+/g, t => t - 0 - 24));
          const l = { data: a, sort: !1 };
          return s.a.createElement(
            s.a.Fragment,
            null,
            i ? s.a.createElement('h5', { className: 'echart-pane-title' }, i) : null,
            a.length
              ? s.a.createElement(Xn, {
                  config: l,
                  style: o,
                  className: '' + (r ? 'textPrice' : ''),
                })
              : s.a.createElement(qt['a'], {
                  image: qn.a,
                  description: s.a.createElement(
                    'span',
                    { className: 'text-subsidiary' },
                    '\u6682\u65e0\u6570\u636e',
                  ),
                }),
          );
        }
      }
      var Qn =
        '.dv-scroll-board {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n}\n.dv-scroll-board .text {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dv-scroll-board .header {\n  display: flex;\n  flex-direction: row;\n  font-size: 15px;\n}\n.dv-scroll-board .header .header-item {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.3s;\n}\n.dv-scroll-board .rows {\n  overflow: hidden;\n}\n.dv-scroll-board .rows .row-item {\n  display: flex;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.dv-scroll-board .rows .ceil {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dv-scroll-board .rows .index {\n  border-radius: 3px;\n  padding: 0px 3px;\n}\n';
      ln(Qn);
      var Jn = {
        header: [],
        data: [],
        rowNum: 5,
        headerBGC: '#00BAFF',
        oddRowBGC: '#003B51',
        evenRowBGC: '#0A2732',
        waitTime: 2e3,
        headerHeight: 35,
        columnWidth: [],
        align: [],
        index: !1,
        indexHeader: '#',
        carousel: 'single',
        hoverPause: !0,
      };
      function $n(t) {
        var e = t.header,
          n = t.index,
          i = t.indexHeader;
        return e.length ? ((e = [].concat(pn(e))), n && e.unshift(i), e) : [];
      }
      function ti(t) {
        var e = t.data,
          n = t.index,
          i = t.headerBGC,
          r = t.rowNum;
        n &&
          (e = e.map(function(t, e) {
            t = [].concat(pn(t));
            var n =
              '<span class="index" style="background-color: ' + i + ';">' + (e + 1) + '</span>';
            return t.unshift(n), t;
          })),
          (e = e.map(function(t, e) {
            return { ceils: t, rowIndex: e };
          }));
        var a = e.length;
        return (
          a > r && a < 2 * r && (e = [].concat(pn(e), pn(e))),
          e.map(function(t, e) {
            return dn({}, t, { scroll: e });
          })
        );
      }
      function ei(t, e) {
        var n = e.length,
          i = new Array(n).fill('left'),
          r = t.align;
        return Vn(i, r);
      }
      var ni = Object(o['forwardRef'])(function(t, e) {
        var n = t.onClick,
          i = t.config,
          r = void 0 === i ? {} : i,
          a = t.className,
          l = t.style,
          u = t.onMouseOver,
          c = regeneratorRuntime.mark(D),
          h = gn(e),
          d = h.width,
          f = h.height,
          p = h.domRef,
          g = Object(o['useState'])({
            mergedConfig: null,
            header: [],
            rows: [],
            widths: [],
            heights: [],
            aligns: [],
          }),
          v = fn(g, 2),
          m = v[0],
          y = v[1],
          x = m.mergedConfig,
          _ = m.header,
          b = m.rows,
          w = m.widths,
          S = m.heights,
          M = m.aligns,
          T = Object(o['useRef'])(dn({}, m, { rowsData: [], avgHeight: 0, animationIndex: 0 }));
        function C() {
          if (x) {
            var t = k(x, T.current.rowsData),
              e = A(x, _),
              n = { widths: t, heights: e };
            Object.assign(T.current, n),
              y(function(t) {
                return dn({}, t, n);
              });
          }
        }
        function I() {
          var t = Vn(Fn(Jn, !0), r || {}),
            e = $n(t),
            n = ti(t),
            i = k(t, T.current.rowsData),
            a = A(t, e),
            o = ei(t, e),
            s = { mergedConfig: t, header: e, rows: n, widths: i, aligns: o, heights: a };
          Object.assign(T.current, s, { rowsData: n, animationIndex: 0 }),
            y(function(t) {
              return dn({}, t, s);
            });
        }
        function k(t, e) {
          var n = t.columnWidth,
            i = t.header,
            r = n.reduce(function(t, e) {
              return t + e;
            }, 0),
            a = 0;
          e[0] ? (a = e[0].ceils.length) : i.length && (a = i.length);
          var o = (d - r) / (a - n.length),
            s = new Array(a).fill(o);
          return Vn(s, n);
        }
        function A(t, e) {
          var n = t.headerHeight,
            i = t.rowNum,
            r = t.data,
            a = f;
          e.length && (a -= n);
          var o = a / i;
          return Object.assign(T.current, { avgHeight: o }), new Array(r.length).fill(o);
        }
        function D() {
          var t,
            e,
            n,
            i,
            r,
            a,
            o,
            s,
            l,
            u,
            h,
            d,
            f,
            p,
            g = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return regeneratorRuntime.wrap(
            function(c) {
              while (1)
                switch ((c.prev = c.next)) {
                  case 0:
                    if (
                      ((t = T.current),
                      (e = t.avgHeight),
                      (n = t.animationIndex),
                      (i = t.mergedConfig),
                      (r = i.waitTime),
                      (a = i.carousel),
                      (o = i.rowNum),
                      (s = t.rowsData),
                      (l = s.length),
                      !g)
                    ) {
                      c.next = 5;
                      break;
                    }
                    return (
                      (c.next = 5),
                      new Promise(function(t) {
                        return setTimeout(t, r);
                      })
                    );
                  case 5:
                    return (
                      (u = 'single' === a ? 1 : o),
                      (h = s.slice(n)),
                      h.push.apply(h, pn(s.slice(0, n))),
                      (d = new Array(l).fill(e)),
                      y(function(t) {
                        return dn({}, t, { rows: h, heights: d });
                      }),
                      (c.next = 12),
                      new Promise(function(t) {
                        return setTimeout(t, 300);
                      })
                    );
                  case 12:
                    (n += u),
                      (f = n - l),
                      f >= 0 && (n = f),
                      (p = [].concat(pn(d))),
                      p.splice.apply(p, [0, u].concat(pn(new Array(u).fill(0)))),
                      Object.assign(T.current, { animationIndex: n }),
                      y(function(t) {
                        return dn({}, t, { heights: p });
                      });
                  case 19:
                  case 'end':
                    return c.stop();
                }
            },
            c,
            this,
          );
        }
        function O(t, e, n, i, r) {
          var a = i.ceils,
            o = i.rowIndex;
          t && t({ row: a, ceil: r, rowIndex: o, columnIndex: n });
        }
        function P(t, e, n, i, r) {
          if ((t && O(u, e, n, i, r), x.hoverPause)) {
            var a = L.current,
              o = a.pause,
              s = a.resume;
            t ? o() : s();
          }
        }
        Object.assign(T.current, m);
        var E = function(t) {
            return x[t % 2 === 0 ? 'evenRowBGC' : 'oddRowBGC'];
          },
          L = Object(o['useRef'])({});
        Object(o['useEffect'])(
          function() {
            var t = regeneratorRuntime.mark(n);
            I();
            var e = !0;
            function n() {
              var n,
                i = this;
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        n = regeneratorRuntime.mark(function t() {
                          var n;
                          return regeneratorRuntime.wrap(
                            function(t) {
                              while (1)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return t.delegateYield(D(e), 't0', 1);
                                  case 1:
                                    return (
                                      (e = !1),
                                      (n = T.current.mergedConfig.waitTime),
                                      (t.next = 5),
                                      new Promise(function(t) {
                                        return setTimeout(t, n - 300);
                                      })
                                    );
                                  case 5:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            i,
                          );
                        });
                      case 1:
                        return t.delegateYield(n(), 't0', 3);
                      case 3:
                        t.next = 1;
                        break;
                      case 5:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                this,
              );
            }
            var i = T.current,
              r = i.mergedConfig.rowNum,
              a = i.rows,
              o = a.length;
            if (!(r >= o)) return (L.current = hn(n)), L.current.end;
          },
          [r, p.current],
        ),
          Object(o['useEffect'])(C, [d, f, p.current]);
        var R = Object(o['useMemo'])(
          function() {
            return vn('dv-scroll-board', a);
          },
          [a],
        );
        return s.a.createElement(
          'div',
          { className: R, style: l, ref: p },
          !!_.length &&
            !!x &&
            s.a.createElement(
              'div',
              { className: 'header', style: { backgroundColor: '' + x.headerBGC } },
              _.map(function(t, e) {
                return s.a.createElement('div', {
                  className: 'header-item',
                  key: t + '-' + e,
                  style: {
                    height: x.headerHeight + 'px',
                    lineHeight: x.headerHeight + 'px',
                    width: w[e] + 'px',
                  },
                  align: M[e],
                  dangerouslySetInnerHTML: { __html: t },
                });
              }),
            ),
          !!x &&
            s.a.createElement(
              'div',
              { className: 'rows', style: { height: f - (_.length ? x.headerHeight : 0) + 'px' } },
              b.map(function(t, e) {
                return s.a.createElement(
                  'div',
                  {
                    className: 'row-item',
                    key: t.toString() + '-' + t.scroll,
                    style: {
                      height: S[e] + 'px',
                      lineHeight: S[e] + 'px',
                      backgroundColor: '' + E(t.rowIndex),
                    },
                  },
                  t.ceils.map(function(i, r) {
                    return s.a.createElement('div', {
                      className: 'ceil',
                      key: i + '-' + e + '-' + r,
                      style: { width: w[r] + 'px' },
                      align: M[r],
                      dangerouslySetInnerHTML: { __html: i },
                      onClick: function() {
                        return O(n, e, r, t, i);
                      },
                      onMouseEnter: function() {
                        return P(!0, e, r, t, i);
                      },
                      onMouseLeave: function() {
                        return P(!1);
                      },
                    });
                  }),
                );
              }),
            ),
        );
      });
      ni.propTypes = {
        config: sn.object,
        onClick: sn.func,
        onMouseOver: sn.func,
        className: sn.string,
        style: sn.object,
      };
      var ii = ni;
      n('ziJE');
      class ri extends o['Component'] {
        constructor(t) {
          super(t),
            (this.state = {
              config: {
                index: !0,
                oddRowBGC: '#fff',
                evenRowBGC: '#f0f0f0',
                columnWidth: [50],
                align: ['center'],
                data: [
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                  ['\u656c\u8bf7\u671f\u5f85'],
                ],
              },
            });
        }
        render() {
          const t = this.props.options,
            e = void 0 === t ? {} : t,
            n = e.style,
            i = this.state.config,
            r = { width: '100%', height: '300px', color: '#000', ...n };
          return s.a.createElement(ii, { config: i, style: r });
        }
      }
      n('Q9mQ');
      var ai = n('diRs'),
        oi = n('5V6a');
      n('hEol');
      class si extends o['Component'] {
        constructor(t) {
          super(t),
            (this.renderItem = t => {
              const e = this.props.options,
                n = e.color;
              return t.map((t, i) => {
                if (e.col) {
                  const a = 24 / e.col;
                  return s.a.createElement(
                    r['a'],
                    {
                      span: a,
                      key: t.name,
                      style: { borderLeft: '5px solid ' + n[i] },
                      className: 'item',
                    },
                    s.a.createElement('div', { className: 'title' }, t.name),
                    s.a.createElement(
                      'div',
                      { style: { color: n[i] }, className: 'text' },
                      null !== t.value && void 0 !== t.value && Object(zt['isNumber'])(t.value)
                        ? s.a.createElement(
                            ai['a'],
                            {
                              content: `${(e && e.preUnit) || ''}${t.value}${(e && e.afterUnit) ||
                                ''}`,
                            },
                            `${(e && e.preUnit) || ''}${Object(oi['a'])(t.value, 2)}${(e &&
                              e.afterUnit) ||
                              ''}`,
                          )
                        : '\u656c\u8bf7\u671f\u5f85',
                    ),
                  );
                }
                return s.a.createElement(
                  'div',
                  { key: t.name, style: { borderLeft: '5px solid ' + n[i] }, className: 'item' },
                  s.a.createElement('div', { className: 'title' }, t.name),
                  s.a.createElement(
                    'div',
                    { style: { color: n[i] }, className: 'text' },
                    null !== t.value && void 0 !== t.value && Object(zt['isNumber'])(t.value)
                      ? s.a.createElement(
                          ai['a'],
                          {
                            content: `${(e && e.preUnit) || ''}  ${t.value}  ${(e && e.afterUnit) ||
                              ''}`,
                          },
                          `${(e && e.preUnit) || ''}  ${Object(oi['a'])(t.value, 2)}  ${(e &&
                            e.afterUnit) ||
                            ''}`,
                        )
                      : '\u656c\u8bf7\u671f\u5f85',
                  ),
                );
              });
            }),
            (this.state = {});
        }
        render() {
          const t = this.props,
            e = t.data,
            n = void 0 === e ? [] : e,
            r = t.options;
          return s.a.createElement(
            'div',
            { className: 'total' },
            r && r.title && s.a.createElement('div', { className: 'title' }, r.title),
            r.col && s.a.createElement(i['a'], { className: 'rowItems' }, this.renderItem(n)),
            !r.col && s.a.createElement('div', { className: 'items' }, this.renderItem(n)),
          );
        }
      }
      const li = {
        Bar: c,
        BarLine: d,
        ChartCard: Wt,
        Line: Ut,
        Pie: Zt,
        Rank: Kn,
        ScrollBoard: ri,
        TotalText: si,
      };
      var ui = li;
      const ci = ui.ChartCard,
        hi = ui.Bar,
        di = ui.Pie,
        fi = ui.TotalText,
        pi = () => {
          const t = Object(o['useState'])({
              statistics: [
                { name: '\u4e3b\u4ea7\u54c1\u603b\u4ea7\u91cf', value: 107.4 },
                { name: '\u526f\u4ea7\u54c1\u603b\u4ea7\u91cf', value: 0 },
              ],
              xData: ['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708'],
              yData: [
                { name: '\u4e3b\u4ea7\u54c1\u4ea7\u91cf', data: [0, 0, 0, 0, 0, 0, 107.4] },
                { name: '\u526f\u4ea7\u54c1\u4ea7\u91cf', data: [0, 0, 0, 0, 0, 0, 0] },
              ],
            }),
            e = Object(a['a'])(t, 2),
            n = e[0],
            l =
              (e[1],
              Object(o['useState'])([
                { name: '', value: 30 },
                { name: '\u5df2\u56de\u6536', value: 87.3 },
              ])),
            u = Object(a['a'])(l, 2),
            c = u[0],
            h =
              (u[1],
              () => {
                console.log('change');
              });
          return s.a.createElement(
            'div',
            null,
            s.a.createElement(
              i['a'],
              { gutter: 16 },
              s.a.createElement(
                r['a'],
                { span: 24 },
                s.a.createElement(ci, {
                  onChange: h,
                  options: {
                    headerOptions: {
                      title: '\u4ea7\u91cf\u8d8b\u52bf',
                      radios: {
                        key: 'timeType',
                        options: [
                          { name: '\u672c\u5e74', value: 3 },
                          { name: '\u672c\u6708', value: 2 },
                          { name: '\u672c\u65e5', value: 1 },
                        ],
                      },
                      defaultValue: { timeType: 2 },
                    },
                    layout: {
                      showDivider: '500px',
                      items: [
                        {
                          key: 1,
                          span: 16,
                          items: [
                            {
                              key: 3,
                              component: fi,
                              data: n.statistics || [],
                              options: { color: ['#6595F9', '#62DAAB'], afterUnit: '\u5428' },
                            },
                            {
                              key: 4,
                              component: hi,
                              data: { xData: n.xData || [], yData: n.yData || [] },
                              options: {
                                option: {
                                  grid: {
                                    top: 32,
                                    left: 16,
                                    right: 32,
                                    bottom: 0,
                                    containLabel: !0,
                                  },
                                  yAxis: {
                                    axisLine: { show: !1 },
                                    axisTick: { show: !1 },
                                    splitLine: { lineStyle: { type: 'dashed' } },
                                  },
                                  color: ['#6595F9', '#62DAAB'],
                                  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
                                },
                                seriseOption: { barGap: 0, barMaxWidth: '30px' },
                                height: 400,
                              },
                            },
                          ],
                        },
                        {
                          key: 2,
                          span: 8,
                          component: di,
                          data: c,
                          options: {
                            option: {
                              title: { text: '\u56de\u6536\u7387', top: '20px', left: '20px' },
                              color: ['#6595F9', '#FDBF2F'],
                            },
                            seriseOption: { label: { show: !1 }, labelLine: { show: !1 } },
                            height: 400,
                          },
                        },
                      ],
                    },
                  },
                }),
              ),
            ),
          );
        };
      e['default'] = pi;
    },
    n1HI: function(t, e, n) {
      var i = n('hX1E'),
        r = i.normalizeRadian,
        a = 2 * Math.PI;
      function o(t, e, n, i, o, s, l, u, c) {
        if (0 === l) return !1;
        var h = l;
        (u -= t), (c -= e);
        var d = Math.sqrt(u * u + c * c);
        if (d - h > n || d + h < n) return !1;
        if (Math.abs(i - o) % a < 1e-4) return !0;
        if (s) {
          var f = i;
          (i = r(o)), (o = r(f));
        } else (i = r(i)), (o = r(o));
        i > o && (o += a);
        var p = Math.atan2(c, u);
        return p < 0 && (p += a), (p >= i && p <= o) || (p + a >= i && p + a <= o);
      }
      e.containStroke = o;
    },
    n4Lv: function(t, e, n) {
      var i = n('7hqr'),
        r = i.isDimensionStacked,
        a = n('bYtY'),
        o = a.map;
      function s(t, e, n) {
        var i,
          a = t.getBaseAxis(),
          s = t.getOtherAxis(a),
          u = l(s, n),
          c = a.dim,
          h = s.dim,
          d = e.mapDimension(h),
          f = e.mapDimension(c),
          p = 'x' === h || 'radius' === h ? 1 : 0,
          g = o(t.dimensions, function(t) {
            return e.mapDimension(t);
          }),
          v = e.getCalculationInfo('stackResultDimension');
        return (
          (i |= r(e, g[0])) && (g[0] = v),
          (i |= r(e, g[1])) && (g[1] = v),
          {
            dataDimsForPoint: g,
            valueStart: u,
            valueAxisDim: h,
            baseAxisDim: c,
            stacked: !!i,
            valueDim: d,
            baseDim: f,
            baseDataOffset: p,
            stackedOverDimension: e.getCalculationInfo('stackedOverDimension'),
          }
        );
      }
      function l(t, e) {
        var n = 0,
          i = t.scale.getExtent();
        return (
          'start' === e
            ? (n = i[0])
            : 'end' === e
            ? (n = i[1])
            : i[0] > 0
            ? (n = i[0])
            : i[1] < 0 && (n = i[1]),
          n
        );
      }
      function u(t, e, n, i) {
        var r = NaN;
        t.stacked && (r = n.get(n.getCalculationInfo('stackedOverDimension'), i)),
          isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset,
          o = [];
        return (o[a] = n.get(t.baseDim, i)), (o[1 - a] = r), e.dataToPoint(o);
      }
      (e.prepareDataCoordInfo = s), (e.getStackedOnPoint = u);
    },
    nCxF: function(t, e, n) {
      var i = n('QBsz'),
        r = i.min,
        a = i.max,
        o = i.scale,
        s = i.distance,
        l = i.add,
        u = i.clone,
        c = i.sub;
      function h(t, e, n, i) {
        var h,
          d,
          f,
          p,
          g = [],
          v = [],
          m = [],
          y = [];
        if (i) {
          (f = [1 / 0, 1 / 0]), (p = [-1 / 0, -1 / 0]);
          for (var x = 0, _ = t.length; x < _; x++) r(f, f, t[x]), a(p, p, t[x]);
          r(f, f, i[0]), a(p, p, i[1]);
        }
        for (x = 0, _ = t.length; x < _; x++) {
          var b = t[x];
          if (n) (h = t[x ? x - 1 : _ - 1]), (d = t[(x + 1) % _]);
          else {
            if (0 === x || x === _ - 1) {
              g.push(u(t[x]));
              continue;
            }
            (h = t[x - 1]), (d = t[x + 1]);
          }
          c(v, d, h), o(v, v, e);
          var w = s(b, h),
            S = s(b, d),
            M = w + S;
          0 !== M && ((w /= M), (S /= M)), o(m, v, -w), o(y, v, S);
          var T = l([], b, m),
            C = l([], b, y);
          i && (a(T, T, f), r(T, T, p), a(C, C, f), r(C, C, p)), g.push(T), g.push(C);
        }
        return n && g.push(g.shift()), g;
      }
      t.exports = h;
    },
    nPnh: function(t, e) {
      var n = Math.round;
      function i(t, e, i) {
        if (e) {
          var r = e.x1,
            o = e.x2,
            s = e.y1,
            l = e.y2;
          (t.x1 = r), (t.x2 = o), (t.y1 = s), (t.y2 = l);
          var u = i && i.lineWidth;
          u &&
            (n(2 * r) === n(2 * o) && (t.x1 = t.x2 = a(r, u, !0)),
            n(2 * s) === n(2 * l) && (t.y1 = t.y2 = a(s, u, !0)));
        }
      }
      function r(t, e, n) {
        if (e) {
          var i = e.x,
            r = e.y,
            o = e.width,
            s = e.height;
          (t.x = i), (t.y = r), (t.width = o), (t.height = s);
          var l = n && n.lineWidth;
          l &&
            ((t.x = a(i, l, !0)),
            (t.y = a(r, l, !0)),
            (t.width = Math.max(a(i + o, l, !1) - t.x, 0 === o ? 0 : 1)),
            (t.height = Math.max(a(r + s, l, !1) - t.y, 0 === s ? 0 : 1)));
        }
      }
      function a(t, e, i) {
        if (!e) return t;
        var r = n(2 * t);
        return (r + n(e)) % 2 === 0 ? r / 2 : (r + (i ? 1 : -1)) / 2;
      }
      (e.subPixelOptimizeLine = i), (e.subPixelOptimizeRect = r), (e.subPixelOptimize = a);
    },
    nVfU: function(t, e, n) {
      var i = n('bYtY'),
        r = n('OELB'),
        a = r.parsePercent,
        o = n('7hqr'),
        s = o.isDimensionStacked,
        l = n('zM3Q'),
        u = '__ec_stack_',
        c = 0.5,
        h = 'undefined' !== typeof Float32Array ? Float32Array : Array;
      function d(t) {
        return t.get('stack') || u + t.seriesIndex;
      }
      function f(t) {
        return t.dim + t.index;
      }
      function p(t) {
        var e = [],
          n = t.axis,
          r = 'axis0';
        if ('category' === n.type) {
          for (var a = n.getBandWidth(), o = 0; o < t.count; o++)
            e.push(i.defaults({ bandWidth: a, axisKey: r, stackId: u + o }, t));
          var s = y(e),
            l = [];
          for (o = 0; o < t.count; o++) {
            var c = s[r][u + o];
            (c.offsetCenter = c.offset + c.width / 2), l.push(c);
          }
          return l;
        }
      }
      function g(t, e) {
        var n = [];
        return (
          e.eachSeriesByType(t, function(t) {
            w(t) && !S(t) && n.push(t);
          }),
          n
        );
      }
      function v(t) {
        var e = {};
        i.each(t, function(t) {
          var n = t.coordinateSystem,
            i = n.getBaseAxis();
          if ('time' === i.type || 'value' === i.type)
            for (
              var r = t.getData(),
                a = i.dim + '_' + i.index,
                o = r.mapDimension(i.dim),
                s = 0,
                l = r.count();
              s < l;
              ++s
            ) {
              var u = r.get(o, s);
              e[a] ? e[a].push(u) : (e[a] = [u]);
            }
        });
        var n = [];
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var a = e[r];
            if (a) {
              a.sort(function(t, e) {
                return t - e;
              });
              for (var o = null, s = 1; s < a.length; ++s) {
                var l = a[s] - a[s - 1];
                l > 0 && (o = null === o ? l : Math.min(o, l));
              }
              n[r] = o;
            }
          }
        return n;
      }
      function m(t) {
        var e = v(t),
          n = [];
        return (
          i.each(t, function(t) {
            var i,
              r = t.coordinateSystem,
              o = r.getBaseAxis(),
              s = o.getExtent();
            if ('category' === o.type) i = o.getBandWidth();
            else if ('value' === o.type || 'time' === o.type) {
              var l = o.dim + '_' + o.index,
                u = e[l],
                c = Math.abs(s[1] - s[0]),
                h = o.scale.getExtent(),
                p = Math.abs(h[1] - h[0]);
              i = u ? (c / p) * u : c;
            } else {
              var g = t.getData();
              i = Math.abs(s[1] - s[0]) / g.count();
            }
            var v = a(t.get('barWidth'), i),
              m = a(t.get('barMaxWidth'), i),
              y = a(t.get('barMinWidth') || 1, i),
              x = t.get('barGap'),
              _ = t.get('barCategoryGap');
            n.push({
              bandWidth: i,
              barWidth: v,
              barMaxWidth: m,
              barMinWidth: y,
              barGap: x,
              barCategoryGap: _,
              axisKey: f(o),
              stackId: d(t),
            });
          }),
          y(n)
        );
      }
      function y(t) {
        var e = {};
        i.each(t, function(t, n) {
          var i = t.axisKey,
            r = t.bandWidth,
            a = e[i] || {
              bandWidth: r,
              remainedWidth: r,
              autoWidthCount: 0,
              categoryGap: '20%',
              gap: '30%',
              stacks: {},
            },
            o = a.stacks;
          e[i] = a;
          var s = t.stackId;
          o[s] || a.autoWidthCount++, (o[s] = o[s] || { width: 0, maxWidth: 0 });
          var l = t.barWidth;
          l &&
            !o[s].width &&
            ((o[s].width = l), (l = Math.min(a.remainedWidth, l)), (a.remainedWidth -= l));
          var u = t.barMaxWidth;
          u && (o[s].maxWidth = u);
          var c = t.barMinWidth;
          c && (o[s].minWidth = c);
          var h = t.barGap;
          null != h && (a.gap = h);
          var d = t.barCategoryGap;
          null != d && (a.categoryGap = d);
        });
        var n = {};
        return (
          i.each(e, function(t, e) {
            n[e] = {};
            var r = t.stacks,
              o = t.bandWidth,
              s = a(t.categoryGap, o),
              l = a(t.gap, 1),
              u = t.remainedWidth,
              c = t.autoWidthCount,
              h = (u - s) / (c + (c - 1) * l);
            (h = Math.max(h, 0)),
              i.each(r, function(t) {
                var e = t.maxWidth,
                  n = t.minWidth;
                if (t.width) {
                  i = t.width;
                  e && (i = Math.min(i, e)),
                    n && (i = Math.max(i, n)),
                    (t.width = i),
                    (u -= i + l * i),
                    c--;
                } else {
                  var i = h;
                  e && e < i && (i = Math.min(e, u)),
                    n && n > i && (i = n),
                    i !== h && ((t.width = i), (u -= i + l * i), c--);
                }
              }),
              (h = (u - s) / (c + (c - 1) * l)),
              (h = Math.max(h, 0));
            var d,
              f = 0;
            i.each(r, function(t, e) {
              t.width || (t.width = h), (d = t), (f += t.width * (1 + l));
            }),
              d && (f -= d.width * l);
            var p = -f / 2;
            i.each(r, function(t, i) {
              (n[e][i] = n[e][i] || { bandWidth: o, offset: p, width: t.width }),
                (p += t.width * (1 + l));
            });
          }),
          n
        );
      }
      function x(t, e, n) {
        if (t && e) {
          var i = t[f(e)];
          return null != i && null != n && (i = i[d(n)]), i;
        }
      }
      function _(t, e) {
        var n = g(t, e),
          r = m(n),
          a = {},
          o = {};
        i.each(
          n,
          function(t) {
            var e = t.getData(),
              n = t.coordinateSystem,
              i = n.getBaseAxis(),
              l = d(t),
              u = r[f(i)][l],
              c = u.offset,
              h = u.width,
              p = n.getOtherAxis(i),
              g = t.get('barMinHeight') || 0;
            (a[l] = a[l] || []),
              (o[l] = o[l] || []),
              e.setLayout({ bandWidth: u.bandWidth, offset: c, size: h });
            for (
              var v = e.mapDimension(p.dim),
                m = e.mapDimension(i.dim),
                y = s(e, v),
                x = p.isHorizontal(),
                _ = M(i, p, y),
                b = 0,
                w = e.count();
              b < w;
              b++
            ) {
              var S,
                T,
                C,
                I,
                k = e.get(v, b),
                A = e.get(m, b),
                D = k >= 0 ? 'p' : 'n',
                O = _;
              if ((y && (a[l][A] || (a[l][A] = { p: _, n: _ }), (O = a[l][A][D])), x)) {
                var P = n.dataToPoint([k, A]);
                (S = O),
                  (T = P[1] + c),
                  (C = P[0] - _),
                  (I = h),
                  Math.abs(C) < g && (C = (C < 0 ? -1 : 1) * g),
                  isNaN(C) || (y && (a[l][A][D] += C));
              } else {
                P = n.dataToPoint([A, k]);
                (S = P[0] + c),
                  (T = O),
                  (C = h),
                  (I = P[1] - _),
                  Math.abs(I) < g && (I = (I <= 0 ? -1 : 1) * g),
                  isNaN(I) || (y && (a[l][A][D] += I));
              }
              e.setItemLayout(b, { x: S, y: T, width: C, height: I });
            }
          },
          this,
        );
      }
      var b = {
        seriesType: 'bar',
        plan: l(),
        reset: function(t) {
          if (w(t) && S(t)) {
            var e = t.getData(),
              n = t.coordinateSystem,
              i = n.grid.getRect(),
              r = n.getBaseAxis(),
              a = n.getOtherAxis(r),
              o = e.mapDimension(a.dim),
              s = e.mapDimension(r.dim),
              l = a.isHorizontal(),
              u = l ? 0 : 1,
              d = x(m([t]), r, t).width;
            return d > c || (d = c), { progress: f };
          }
          function f(t, e) {
            var c,
              f = t.count,
              p = new h(2 * f),
              g = new h(2 * f),
              v = new h(f),
              m = [],
              y = [],
              x = 0,
              _ = 0;
            while (null != (c = t.next()))
              (y[u] = e.get(o, c)),
                (y[1 - u] = e.get(s, c)),
                (m = n.dataToPoint(y, null, m)),
                (g[x] = l ? i.x + i.width : m[0]),
                (p[x++] = m[0]),
                (g[x] = l ? m[1] : i.y + i.height),
                (p[x++] = m[1]),
                (v[_++] = c);
            e.setLayout({
              largePoints: p,
              largeDataIndices: v,
              largeBackgroundPoints: g,
              barWidth: d,
              valueAxisStart: M(r, a, !1),
              backgroundStart: l ? i.x : i.y,
              valueAxisHorizontal: l,
            });
          }
        },
      };
      function w(t) {
        return t.coordinateSystem && 'cartesian2d' === t.coordinateSystem.type;
      }
      function S(t) {
        return t.pipelineContext && t.pipelineContext.large;
      }
      function M(t, e, n) {
        return e.toGlobalCoord(e.dataToCoord('log' === e.type ? 1 : 0));
      }
      (e.getLayoutOnAxis = p),
        (e.prepareLayoutBarSeries = g),
        (e.makeColumnLayout = m),
        (e.retrieveColumnLayout = x),
        (e.layout = _),
        (e.largeLayout = b);
    },
    ni6a: function(t, e, n) {
      var i = n('pzxd'),
        r = n('mFDi'),
        a = n('gut8'),
        o = a.WILL_BE_RESTORED,
        s = new r(),
        l = function() {};
      l.prototype = {
        constructor: l,
        drawRectText: function(t, e) {
          var n = this.style;
          (e = n.textRect || e), this.__dirty && i.normalizeTextStyle(n, !0);
          var r = n.text;
          if ((null != r && (r += ''), i.needDrawText(r, n))) {
            t.save();
            var a = this.transform;
            n.transformText ? this.setTransform(t) : a && (s.copy(e), s.applyTransform(a), (e = s)),
              i.renderText(this, t, r, n, e, o),
              t.restore();
          }
        },
      };
      var u = l;
      t.exports = u;
    },
    nkfE: function(t, e, n) {
      var i = n('bYtY'),
        r = n('ca2m'),
        a = n('bLfw'),
        o = n('+TT/'),
        s = o.getLayoutParams,
        l = o.mergeLayoutParam,
        u = n('jkPA'),
        c = ['value', 'category', 'time', 'log'];
      function h(t, e, n, o) {
        i.each(c, function(a) {
          e.extend({
            type: t + 'Axis.' + a,
            mergeDefaultAndTheme: function(e, r) {
              var o = this.layoutMode,
                u = o ? s(e) : {},
                c = r.getTheme();
              i.merge(e, c.get(a + 'Axis')),
                i.merge(e, this.getDefaultOption()),
                (e.type = n(t, e)),
                o && l(e, u, o);
            },
            optionUpdated: function() {
              var t = this.option;
              'category' === t.type && (this.__ordinalMeta = u.createByAxisModel(this));
            },
            getCategories: function(t) {
              var e = this.option;
              if ('category' === e.type) return t ? e.data : this.__ordinalMeta.categories;
            },
            getOrdinalMeta: function() {
              return this.__ordinalMeta;
            },
            defaultOption: i.mergeAll([{}, r[a + 'Axis'], o], !0),
          });
        }),
          a.registerSubTypeDefaulter(t + 'Axis', i.curry(n, t));
      }
      t.exports = h;
    },
    noeP: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY'),
        a = n('UOVi');
      i.registerAction('dataZoom', function(t, e) {
        var n = a.createLinkedNodesFinder(
            r.bind(e.eachComponent, e, 'dataZoom'),
            a.eachAxisDim,
            function(t, e) {
              return t.get(e.axisIndex);
            },
          ),
          i = [];
        e.eachComponent({ mainType: 'dataZoom', query: t }, function(t, e) {
          i.push.apply(i, n(t).nodes);
        }),
          r.each(i, function(e, n) {
            e.setRawRange({
              start: t.start,
              end: t.end,
              startValue: t.startValue,
              endValue: t.endValue,
            });
          });
      });
    },
    oVpE: function(t, e, n) {
      var i = n('bYtY'),
        r = n('IwbS'),
        a = n('mFDi'),
        o = n('6GrX'),
        s = o.calculateTextPosition,
        l = r.extendShape({
          type: 'triangle',
          shape: { cx: 0, cy: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var n = e.cx,
              i = e.cy,
              r = e.width / 2,
              a = e.height / 2;
            t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
          },
        }),
        u = r.extendShape({
          type: 'diamond',
          shape: { cx: 0, cy: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var n = e.cx,
              i = e.cy,
              r = e.width / 2,
              a = e.height / 2;
            t.moveTo(n, i - a),
              t.lineTo(n + r, i),
              t.lineTo(n, i + a),
              t.lineTo(n - r, i),
              t.closePath();
          },
        }),
        c = r.extendShape({
          type: 'pin',
          shape: { x: 0, y: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var n = e.x,
              i = e.y,
              r = (e.width / 5) * 3,
              a = Math.max(r, e.height),
              o = r / 2,
              s = (o * o) / (a - o),
              l = i - a + o + s,
              u = Math.asin(s / o),
              c = Math.cos(u) * o,
              h = Math.sin(u),
              d = Math.cos(u),
              f = 0.6 * o,
              p = 0.7 * o;
            t.moveTo(n - c, l + s),
              t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u),
              t.bezierCurveTo(n + c - h * f, l + s + d * f, n, i - p, n, i),
              t.bezierCurveTo(n, i - p, n - c + h * f, l + s + d * f, n - c, l + s),
              t.closePath();
          },
        }),
        h = r.extendShape({
          type: 'arrow',
          shape: { x: 0, y: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var n = e.height,
              i = e.width,
              r = e.x,
              a = e.y,
              o = (i / 3) * 2;
            t.moveTo(r, a),
              t.lineTo(r + o, a + n),
              t.lineTo(r, a + (n / 4) * 3),
              t.lineTo(r - o, a + n),
              t.lineTo(r, a),
              t.closePath();
          },
        }),
        d = {
          line: r.Line,
          rect: r.Rect,
          roundRect: r.Rect,
          square: r.Rect,
          circle: r.Circle,
          diamond: u,
          pin: c,
          arrow: h,
          triangle: l,
        },
        f = {
          line: function(t, e, n, i, r) {
            (r.x1 = t), (r.y1 = e + i / 2), (r.x2 = t + n), (r.y2 = e + i / 2);
          },
          rect: function(t, e, n, i, r) {
            (r.x = t), (r.y = e), (r.width = n), (r.height = i);
          },
          roundRect: function(t, e, n, i, r) {
            (r.x = t), (r.y = e), (r.width = n), (r.height = i), (r.r = Math.min(n, i) / 4);
          },
          square: function(t, e, n, i, r) {
            var a = Math.min(n, i);
            (r.x = t), (r.y = e), (r.width = a), (r.height = a);
          },
          circle: function(t, e, n, i, r) {
            (r.cx = t + n / 2), (r.cy = e + i / 2), (r.r = Math.min(n, i) / 2);
          },
          diamond: function(t, e, n, i, r) {
            (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
          },
          pin: function(t, e, n, i, r) {
            (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
          },
          arrow: function(t, e, n, i, r) {
            (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
          },
          triangle: function(t, e, n, i, r) {
            (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
          },
        },
        p = {};
      i.each(d, function(t, e) {
        p[e] = new t();
      });
      var g = r.extendShape({
        type: 'symbol',
        shape: { symbolType: '', x: 0, y: 0, width: 0, height: 0 },
        calculateTextPosition: function(t, e, n) {
          var i = s(t, e, n),
            r = this.shape;
          return (
            r &&
              'pin' === r.symbolType &&
              'inside' === e.textPosition &&
              (i.y = n.y + 0.4 * n.height),
            i
          );
        },
        buildPath: function(t, e, n) {
          var i = e.symbolType;
          if ('none' !== i) {
            var r = p[i];
            r || ((i = 'rect'), (r = p[i])),
              f[i](e.x, e.y, e.width, e.height, r.shape),
              r.buildPath(t, r.shape, n);
          }
        },
      });
      function v(t, e) {
        if ('image' !== this.type) {
          var n = this.style,
            i = this.shape;
          i && 'line' === i.symbolType
            ? (n.stroke = t)
            : this.__isEmptyBrush
            ? ((n.stroke = t), (n.fill = e || '#fff'))
            : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)),
            this.dirty(!1);
        }
      }
      function m(t, e, n, i, o, s, l) {
        var u,
          c = 0 === t.indexOf('empty');
        return (
          c && (t = t.substr(5, 1).toLowerCase() + t.substr(6)),
          (u =
            0 === t.indexOf('image://')
              ? r.makeImage(t.slice(8), new a(e, n, i, o), l ? 'center' : 'cover')
              : 0 === t.indexOf('path://')
              ? r.makePath(t.slice(7), {}, new a(e, n, i, o), l ? 'center' : 'cover')
              : new g({ shape: { symbolType: t, x: e, y: n, width: i, height: o } })),
          (u.__isEmptyBrush = c),
          (u.setColor = v),
          u.setColor(s),
          u
        );
      }
      e.createSymbol = m;
    },
    oY9F: function(t, e, n) {
      var i = n('OlYY'),
        r = i.extend({
          type: 'dataZoom.inside',
          defaultOption: {
            disabled: !1,
            zoomLock: !1,
            zoomOnMouseWheel: !0,
            moveOnMouseMove: !0,
            moveOnMouseWheel: !1,
            preventDefaultMouseMove: !0,
          },
        });
      t.exports = r;
    },
    pP6R: function(t, e, n) {
      var i = n('ProS'),
        r = '\0_ec_interaction_mutex';
      function a(t, e, n) {
        var i = l(t);
        i[e] = n;
      }
      function o(t, e, n) {
        var i = l(t),
          r = i[e];
        r === n && (i[e] = null);
      }
      function s(t, e) {
        return !!l(t)[e];
      }
      function l(t) {
        return t[r] || (t[r] = {});
      }
      i.registerAction(
        { type: 'takeGlobalCursor', event: 'globalCursorTaken', update: 'update' },
        function() {},
      ),
        (e.take = a),
        (e.release = o),
        (e.isTaken = s);
    },
    pzxd: function(t, e, n) {
      var i = n('bYtY'),
        r = i.retrieve2,
        a = i.retrieve3,
        o = i.each,
        s = i.normalizeCssArray,
        l = i.isString,
        u = i.isObject,
        c = n('6GrX'),
        h = n('VpOo'),
        d = n('Xnb7'),
        f = n('fW2E'),
        p = n('gut8'),
        g = p.ContextCachedBy,
        v = p.WILL_BE_RESTORED,
        m = c.DEFAULT_FONT,
        y = { left: 1, right: 1, center: 1 },
        x = { top: 1, bottom: 1, middle: 1 },
        _ = [
          ['textShadowBlur', 'shadowBlur', 0],
          ['textShadowOffsetX', 'shadowOffsetX', 0],
          ['textShadowOffsetY', 'shadowOffsetY', 0],
          ['textShadowColor', 'shadowColor', 'transparent'],
        ],
        b = {},
        w = {};
      function S(t) {
        return M(t), o(t.rich, M), t;
      }
      function M(t) {
        if (t) {
          t.font = c.makeFont(t);
          var e = t.textAlign;
          'middle' === e && (e = 'center'), (t.textAlign = null == e || y[e] ? e : 'left');
          var n = t.textVerticalAlign || t.textBaseline;
          'center' === n && (n = 'middle'), (t.textVerticalAlign = null == n || x[n] ? n : 'top');
          var i = t.textPadding;
          i && (t.textPadding = s(t.textPadding));
        }
      }
      function T(t, e, n, i, r, a) {
        i.rich ? I(t, e, n, i, r, a) : C(t, e, n, i, r, a);
      }
      function C(t, e, n, i, r, a) {
        'use strict';
        var o,
          s = O(i),
          l = !1,
          u = e.__attrCachedBy === g.PLAIN_TEXT;
        a !== v
          ? (a && ((o = a.style), (l = !s && u && o)),
            (e.__attrCachedBy = s ? g.NONE : g.PLAIN_TEXT))
          : u && (e.__attrCachedBy = g.NONE);
        var h = i.font || m;
        (l && h === (o.font || m)) || (e.font = h);
        var d = t.__computedFont;
        t.__styleFont !== h && ((t.__styleFont = h), (d = t.__computedFont = e.font));
        var p = i.textPadding,
          y = i.textLineHeight,
          x = t.__textCotentBlock;
        (x && !t.__dirtyText) ||
          (x = t.__textCotentBlock = c.parsePlainText(n, d, p, y, i.truncate));
        var b = x.outerHeight,
          S = x.lines,
          M = x.lineHeight,
          T = L(w, t, i, r),
          C = T.baseX,
          I = T.baseY,
          k = T.textAlign || 'left',
          D = T.textVerticalAlign;
        A(e, i, r, C, I);
        var E = c.adjustTextY(I, b, D),
          R = C,
          B = E;
        if (s || p) {
          var F = c.getWidth(n, d),
            Y = F;
          p && (Y += p[1] + p[3]);
          var V = c.adjustTextX(C, Y, k);
          s && P(t, e, i, V, E, Y, b), p && ((R = j(C, k, p)), (B += p[0]));
        }
        (e.textAlign = k), (e.textBaseline = 'middle'), (e.globalAlpha = i.opacity || 1);
        for (var H = 0; H < _.length; H++) {
          var W = _[H],
            G = W[0],
            U = W[1],
            X = i[G];
          (l && X === o[G]) || (e[U] = f(e, U, X || W[2]));
        }
        B += M / 2;
        var Z = i.textStrokeWidth,
          q = l ? o.textStrokeWidth : null,
          K = !l || Z !== q,
          Q = !l || K || i.textStroke !== o.textStroke,
          J = N(i.textStroke, Z),
          $ = z(i.textFill);
        if (
          (J && (K && (e.lineWidth = Z), Q && (e.strokeStyle = J)),
          $ && ((l && i.textFill === o.textFill) || (e.fillStyle = $)),
          1 === S.length)
        )
          J && e.strokeText(S[0], R, B), $ && e.fillText(S[0], R, B);
        else
          for (H = 0; H < S.length; H++)
            J && e.strokeText(S[H], R, B), $ && e.fillText(S[H], R, B), (B += M);
      }
      function I(t, e, n, i, r, a) {
        a !== v && (e.__attrCachedBy = g.NONE);
        var o = t.__textCotentBlock;
        (o && !t.__dirtyText) || (o = t.__textCotentBlock = c.parseRichText(n, i)),
          k(t, e, o, i, r);
      }
      function k(t, e, n, i, r) {
        var a = n.width,
          o = n.outerWidth,
          s = n.outerHeight,
          l = i.textPadding,
          u = L(w, t, i, r),
          h = u.baseX,
          d = u.baseY,
          f = u.textAlign,
          p = u.textVerticalAlign;
        A(e, i, r, h, d);
        var g = c.adjustTextX(h, o, f),
          v = c.adjustTextY(d, s, p),
          m = g,
          y = v;
        l && ((m += l[3]), (y += l[0]));
        var x = m + a;
        O(i) && P(t, e, i, g, v, o, s);
        for (var _ = 0; _ < n.lines.length; _++) {
          var b,
            S = n.lines[_],
            M = S.tokens,
            T = M.length,
            C = S.lineHeight,
            I = S.width,
            k = 0,
            E = m,
            R = x,
            N = T - 1;
          while (k < T && ((b = M[k]), !b.textAlign || 'left' === b.textAlign))
            D(t, e, b, i, C, y, E, 'left'), (I -= b.width), (E += b.width), k++;
          while (N >= 0 && ((b = M[N]), 'right' === b.textAlign))
            D(t, e, b, i, C, y, R, 'right'), (I -= b.width), (R -= b.width), N--;
          E += (a - (E - m) - (x - R) - I) / 2;
          while (k <= N)
            (b = M[k]), D(t, e, b, i, C, y, E + b.width / 2, 'center'), (E += b.width), k++;
          y += C;
        }
      }
      function A(t, e, n, i, r) {
        if (n && e.textRotation) {
          var a = e.textOrigin;
          'center' === a
            ? ((i = n.width / 2 + n.x), (r = n.height / 2 + n.y))
            : a && ((i = a[0] + n.x), (r = a[1] + n.y)),
            t.translate(i, r),
            t.rotate(-e.textRotation),
            t.translate(-i, -r);
        }
      }
      function D(t, e, n, i, o, s, l, u) {
        var c = i.rich[n.styleName] || {};
        c.text = n.text;
        var h = n.textVerticalAlign,
          d = s + o / 2;
        'top' === h ? (d = s + n.height / 2) : 'bottom' === h && (d = s + o - n.height / 2),
          !n.isLineHolder &&
            O(c) &&
            P(
              t,
              e,
              c,
              'right' === u ? l - n.width : 'center' === u ? l - n.width / 2 : l,
              d - n.height / 2,
              n.width,
              n.height,
            );
        var f = n.textPadding;
        f && ((l = j(l, u, f)), (d -= n.height / 2 - f[2] - n.textHeight / 2)),
          R(e, 'shadowBlur', a(c.textShadowBlur, i.textShadowBlur, 0)),
          R(e, 'shadowColor', c.textShadowColor || i.textShadowColor || 'transparent'),
          R(e, 'shadowOffsetX', a(c.textShadowOffsetX, i.textShadowOffsetX, 0)),
          R(e, 'shadowOffsetY', a(c.textShadowOffsetY, i.textShadowOffsetY, 0)),
          R(e, 'textAlign', u),
          R(e, 'textBaseline', 'middle'),
          R(e, 'font', n.font || m);
        var p = N(c.textStroke || i.textStroke, v),
          g = z(c.textFill || i.textFill),
          v = r(c.textStrokeWidth, i.textStrokeWidth);
        p && (R(e, 'lineWidth', v), R(e, 'strokeStyle', p), e.strokeText(n.text, l, d)),
          g && (R(e, 'fillStyle', g), e.fillText(n.text, l, d));
      }
      function O(t) {
        return !!(t.textBackgroundColor || (t.textBorderWidth && t.textBorderColor));
      }
      function P(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor,
          c = n.textBorderWidth,
          f = n.textBorderColor,
          p = l(s);
        if (
          (R(e, 'shadowBlur', n.textBoxShadowBlur || 0),
          R(e, 'shadowColor', n.textBoxShadowColor || 'transparent'),
          R(e, 'shadowOffsetX', n.textBoxShadowOffsetX || 0),
          R(e, 'shadowOffsetY', n.textBoxShadowOffsetY || 0),
          p || (c && f))
        ) {
          e.beginPath();
          var g = n.textBorderRadius;
          g ? h.buildPath(e, { x: i, y: r, width: a, height: o, r: g }) : e.rect(i, r, a, o),
            e.closePath();
        }
        if (p)
          if ((R(e, 'fillStyle', s), null != n.fillOpacity)) {
            var v = e.globalAlpha;
            (e.globalAlpha = n.fillOpacity * n.opacity), e.fill(), (e.globalAlpha = v);
          } else e.fill();
        else if (u(s)) {
          var m = s.image;
          (m = d.createOrUpdateImage(m, null, t, E, s)),
            m && d.isImageReady(m) && e.drawImage(m, i, r, a, o);
        }
        if (c && f)
          if ((R(e, 'lineWidth', c), R(e, 'strokeStyle', f), null != n.strokeOpacity)) {
            v = e.globalAlpha;
            (e.globalAlpha = n.strokeOpacity * n.opacity), e.stroke(), (e.globalAlpha = v);
          } else e.stroke();
      }
      function E(t, e) {
        e.image = t;
      }
      function L(t, e, n, i) {
        var r = n.x || 0,
          a = n.y || 0,
          o = n.textAlign,
          s = n.textVerticalAlign;
        if (i) {
          var l = n.textPosition;
          if (l instanceof Array) (r = i.x + B(l[0], i.width)), (a = i.y + B(l[1], i.height));
          else {
            var u =
              e && e.calculateTextPosition
                ? e.calculateTextPosition(b, n, i)
                : c.calculateTextPosition(b, n, i);
            (r = u.x), (a = u.y), (o = o || u.textAlign), (s = s || u.textVerticalAlign);
          }
          var h = n.textOffset;
          h && ((r += h[0]), (a += h[1]));
        }
        return (
          (t = t || {}),
          (t.baseX = r),
          (t.baseY = a),
          (t.textAlign = o),
          (t.textVerticalAlign = s),
          t
        );
      }
      function R(t, e, n) {
        return (t[e] = f(t, e, n)), t[e];
      }
      function N(t, e) {
        return null == t || e <= 0 || 'transparent' === t || 'none' === t
          ? null
          : t.image || t.colorStops
          ? '#000'
          : t;
      }
      function z(t) {
        return null == t || 'none' === t ? null : t.image || t.colorStops ? '#000' : t;
      }
      function B(t, e) {
        return 'string' === typeof t
          ? t.lastIndexOf('%') >= 0
            ? (parseFloat(t) / 100) * e
            : parseFloat(t)
          : t;
      }
      function j(t, e, n) {
        return 'right' === e ? t - n[1] : 'center' === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
      }
      function F(t, e) {
        return (
          null != t &&
          (t || e.textBackgroundColor || (e.textBorderWidth && e.textBorderColor) || e.textPadding)
        );
      }
      (e.normalizeTextStyle = S),
        (e.renderText = T),
        (e.getBoxPosition = L),
        (e.getStroke = N),
        (e.getFill = z),
        (e.parsePercent = B),
        (e.needDrawText = F);
    },
    qWt2: function(t, e, n) {
      var i = n('ProS'),
        r = i.extendComponentModel({
          type: 'tooltip',
          dependencies: ['axisPointer'],
          defaultOption: {
            zlevel: 0,
            z: 60,
            show: !0,
            showContent: !0,
            trigger: 'item',
            triggerOn: 'mousemove|click',
            alwaysShowContent: !1,
            displayMode: 'single',
            renderMode: 'auto',
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: 0.4,
            enterable: !1,
            backgroundColor: 'rgba(50,50,50,0.7)',
            borderColor: '#333',
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: '',
            axisPointer: {
              type: 'line',
              axis: 'auto',
              animation: 'auto',
              animationDurationUpdate: 200,
              animationEasingUpdate: 'exponentialOut',
              crossStyle: { color: '#999', width: 1, type: 'dashed', textStyle: {} },
            },
            textStyle: { color: '#fff', fontSize: 14 },
          },
        });
      t.exports = r;
    },
    r6Bn: function(t, e, n) {
      var i = n('bYtY'),
        r = n('ItGF'),
        a = n('4fz+'),
        o = n('BPZU');
      function s(t, e) {
        return t.zlevel === e.zlevel
          ? t.z === e.z
            ? t.z2 - e.z2
            : t.z - e.z
          : t.zlevel - e.zlevel;
      }
      var l = function() {
        (this._roots = []), (this._displayList = []), (this._displayListLen = 0);
      };
      l.prototype = {
        constructor: l,
        traverse: function(t, e) {
          for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
        },
        getDisplayList: function(t, e) {
          return (e = e || !1), t && this.updateDisplayList(e), this._displayList;
        },
        updateDisplayList: function(t) {
          this._displayListLen = 0;
          for (var e = this._roots, n = this._displayList, i = 0, a = e.length; i < a; i++)
            this._updateAndAddDisplayable(e[i], null, t);
          (n.length = this._displayListLen), r.canvasSupported && o(n, s);
        },
        _updateAndAddDisplayable: function(t, e, n) {
          if (!t.ignore || n) {
            t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
            var i = t.clipPath;
            if (i) {
              e = e ? e.slice() : [];
              var r = i,
                a = t;
              while (r) (r.parent = a), r.updateTransform(), e.push(r), (a = r), (r = r.clipPath);
            }
            if (t.isGroup) {
              for (var o = t._children, s = 0; s < o.length; s++) {
                var l = o[s];
                t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);
              }
              t.__dirty = !1;
            } else (t.__clipPaths = e), (this._displayList[this._displayListLen++] = t);
          }
        },
        addRoot: function(t) {
          t.__storage !== this &&
            (t instanceof a && t.addChildrenToStorage(this),
            this.addToStorage(t),
            this._roots.push(t));
        },
        delRoot: function(t) {
          if (null == t) {
            for (var e = 0; e < this._roots.length; e++) {
              var n = this._roots[e];
              n instanceof a && n.delChildrenFromStorage(this);
            }
            return (this._roots = []), (this._displayList = []), void (this._displayListLen = 0);
          }
          if (t instanceof Array) {
            e = 0;
            for (var r = t.length; e < r; e++) this.delRoot(t[e]);
          } else {
            var o = i.indexOf(this._roots, t);
            o >= 0 &&
              (this.delFromStorage(t),
              this._roots.splice(o, 1),
              t instanceof a && t.delChildrenFromStorage(this));
          }
        },
        addToStorage: function(t) {
          return t && ((t.__storage = this), t.dirty(!1)), this;
        },
        delFromStorage: function(t) {
          return t && (t.__storage = null), this;
        },
        dispose: function() {
          this._renderList = this._roots = null;
        },
        displayableSortFunc: s,
      };
      var u = l;
      t.exports = u;
    },
    rA99: function(t, e, n) {
      var i = n('y+Vt'),
        r = n('QBsz'),
        a = n('Sj9i'),
        o = a.quadraticSubdivide,
        s = a.cubicSubdivide,
        l = a.quadraticAt,
        u = a.cubicAt,
        c = a.quadraticDerivativeAt,
        h = a.cubicDerivativeAt,
        d = [];
      function f(t, e, n) {
        var i = t.cpx2,
          r = t.cpy2;
        return null === i || null === r
          ? [(n ? h : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? h : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)]
          : [(n ? c : l)(t.x1, t.cpx1, t.x2, e), (n ? c : l)(t.y1, t.cpy1, t.y2, e)];
      }
      var p = i.extend({
        type: 'bezier-curve',
        shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 },
        style: { stroke: '#000', fill: null },
        buildPath: function(t, e) {
          var n = e.x1,
            i = e.y1,
            r = e.x2,
            a = e.y2,
            l = e.cpx1,
            u = e.cpy1,
            c = e.cpx2,
            h = e.cpy2,
            f = e.percent;
          0 !== f &&
            (t.moveTo(n, i),
            null == c || null == h
              ? (f < 1 &&
                  (o(n, l, r, f, d),
                  (l = d[1]),
                  (r = d[2]),
                  o(i, u, a, f, d),
                  (u = d[1]),
                  (a = d[2])),
                t.quadraticCurveTo(l, u, r, a))
              : (f < 1 &&
                  (s(n, l, c, r, f, d),
                  (l = d[1]),
                  (c = d[2]),
                  (r = d[3]),
                  s(i, u, h, a, f, d),
                  (u = d[1]),
                  (h = d[2]),
                  (a = d[3])),
                t.bezierCurveTo(l, u, c, h, r, a)));
        },
        pointAt: function(t) {
          return f(this.shape, t, !1);
        },
        tangentAt: function(t) {
          var e = f(this.shape, t, !0);
          return r.normalize(e, e);
        },
      });
      t.exports = p;
    },
    rmlV: function(t, e, n) {
      var i = n('y+Vt'),
        r = i.extend({
          type: 'ellipse',
          shape: { cx: 0, cy: 0, rx: 0, ry: 0 },
          buildPath: function(t, e) {
            var n = 0.5522848,
              i = e.cx,
              r = e.cy,
              a = e.rx,
              o = e.ry,
              s = a * n,
              l = o * n;
            t.moveTo(i - a, r),
              t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o),
              t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r),
              t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o),
              t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r),
              t.closePath();
          },
        });
      t.exports = r;
    },
    rySg: function(t, e, n) {
      n('SMc4'), n('8nMs');
    },
    'sK/D': function(t, e, n) {
      var i = n('IwbS'),
        r = n('OELB'),
        a = r.round;
      function o(t, e, n) {
        var r = t.getArea(),
          a = t.getBaseAxis().isHorizontal(),
          o = r.x,
          s = r.y,
          l = r.width,
          u = r.height,
          c = n.get('lineStyle.width') || 2;
        (o -= c / 2), (s -= c / 2), (l += c), (u += c), (o = Math.floor(o)), (l = Math.round(l));
        var h = new i.Rect({ shape: { x: o, y: s, width: l, height: u } });
        return (
          e &&
            ((h.shape[a ? 'width' : 'height'] = 0),
            i.initProps(h, { shape: { width: l, height: u } }, n)),
          h
        );
      }
      function s(t, e, n) {
        var r = t.getArea(),
          o = new i.Sector({
            shape: {
              cx: a(t.cx, 1),
              cy: a(t.cy, 1),
              r0: a(r.r0, 1),
              r: a(r.r, 1),
              startAngle: r.startAngle,
              endAngle: r.endAngle,
              clockwise: r.clockwise,
            },
          });
        return (
          e &&
            ((o.shape.endAngle = r.startAngle),
            i.initProps(o, { shape: { endAngle: r.endAngle } }, n)),
          o
        );
      }
      function l(t, e, n) {
        return t
          ? 'polar' === t.type
            ? s(t, e, n)
            : 'cartesian2d' === t.type
            ? o(t, e, n)
            : null
          : null;
      }
      (e.createGridClipPath = o), (e.createPolarClipPath = s), (e.createClipPath = l);
    },
    'sS/r': function(t, e, n) {
      var i = n('4fz+'),
        r = n('iRjW'),
        a = n('Yl7c'),
        o = function() {
          (this.group = new i()), (this.uid = r.getUID('viewComponent'));
        };
      o.prototype = {
        constructor: o,
        init: function(t, e) {},
        render: function(t, e, n, i) {},
        dispose: function() {},
        filterForExposedEvent: null,
      };
      var s = o.prototype;
      (s.updateView = s.updateLayout = s.updateVisual = function(t, e, n, i) {}),
        a.enableClassExtend(o),
        a.enableClassManagement(o, { registerWhenExtend: !0 });
      var l = o;
      t.exports = l;
    },
    sdST: function(t, e, n) {
      var i = n('hi0g');
      function r(t, e) {
        return (
          (e = e || {}),
          i(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            encodeDefaulter: e.encodeDefaulter,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount,
          })
        );
      }
      t.exports = r;
    },
    tSko: function(t, e, n) {
      'use strict';
      var i = n('TqRt'),
        r = n('284h');
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var a = r(n('cDcd')),
        o = i(n('SRve')),
        s = i(n('KQxl')),
        l = function(t, e) {
          return a.createElement(s.default, Object.assign({}, t, { ref: e, icon: o.default }));
        };
      l.displayName = 'PlusOutlined';
      var u = a.forwardRef(l);
      e.default = u;
    },
    tceW: function(t, e, n) {
      var i = n('KCsZ'),
        r = i([
          ['fill', 'color'],
          ['stroke', 'borderColor'],
          ['lineWidth', 'borderWidth'],
          ['stroke', 'barBorderColor'],
          ['lineWidth', 'barBorderWidth'],
          ['opacity'],
          ['shadowBlur'],
          ['shadowOffsetX'],
          ['shadowOffsetY'],
          ['shadowColor'],
        ]),
        a = {
          getBarItemStyle: function(t) {
            var e = r(this, t);
            if (this.getBorderLineDash) {
              var n = this.getBorderLineDash();
              n && (e.lineDash = n);
            }
            return e;
          },
        };
      t.exports = a;
    },
    txkQ: function(t, e, n) {
      var i = n('aX58');
      e.zrender = i;
      var r = n('Fofx');
      e.matrix = r;
      var a = n('QBsz');
      e.vector = a;
      var o = n('bYtY'),
        s = n('Qe9p');
      e.color = s;
      var l = n('IwbS'),
        u = n('OELB');
      e.number = u;
      var c = n('7aKB');
      e.format = c;
      var h = n('iLNv');
      h.throttle;
      e.throttle = h.throttle;
      var d = n('FUi9');
      e.helper = d;
      var f = n('vafp');
      e.parseGeoJSON = f;
      var p = n('YXkt');
      e.List = p;
      var g = n('Qxkt');
      e.Model = g;
      var v = n('hM6l');
      e.Axis = v;
      var m = n('ItGF');
      e.env = m;
      var y = f,
        x = {};
      o.each(
        [
          'map',
          'each',
          'filter',
          'indexOf',
          'inherits',
          'reduce',
          'filter',
          'bind',
          'curry',
          'isArray',
          'isString',
          'isObject',
          'isFunction',
          'extend',
          'defaults',
          'clone',
          'merge',
        ],
        function(t) {
          x[t] = o[t];
        },
      );
      var _ = {};
      o.each(
        [
          'extendShape',
          'extendPath',
          'makePath',
          'makeImage',
          'mergePath',
          'resizePath',
          'createIcon',
          'setHoverStyle',
          'setLabelStyle',
          'setTextStyle',
          'setText',
          'getFont',
          'updateProps',
          'initProps',
          'getTransform',
          'clipPointsByRect',
          'clipRectByRect',
          'registerShape',
          'getShapeClass',
          'Group',
          'Image',
          'Text',
          'Circle',
          'Sector',
          'Ring',
          'Polygon',
          'Polyline',
          'Rect',
          'Line',
          'BezierCurve',
          'Arc',
          'IncrementalDisplayable',
          'CompoundPath',
          'LinearGradient',
          'RadialGradient',
          'BoundingRect',
        ],
        function(t) {
          _[t] = l[t];
        },
      ),
        (e.parseGeoJson = y),
        (e.util = x),
        (e.graphic = _);
    },
    u3DP: function(t, e, n) {
      var i = n('6GrX'),
        r = n('OELB'),
        a = r.parsePercent,
        o = Math.PI / 180;
      function s(t, e, n, i, r, a, o, s, l, u) {
        function c(e, n, i, r) {
          for (var a = e; a < n; a++) {
            if (t[a].y + i > l + o) break;
            if (((t[a].y += i), a > e && a + 1 < n && t[a + 1].y > t[a].y + t[a].height))
              return void h(a, i / 2);
          }
          h(n - 1, i / 2);
        }
        function h(e, n) {
          for (var i = e; i >= 0; i--) {
            if (t[i].y - n < l) break;
            if (((t[i].y -= n), i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)) break;
          }
        }
        function d(t, e, n, i, r, a) {
          for (var o = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)
            if ('none' === t[s].labelAlignTo) {
              var u = Math.abs(t[s].y - i),
                c = t[s].len,
                h = t[s].len2,
                d = u < r + c ? Math.sqrt((r + c + h) * (r + c + h) - u * u) : Math.abs(t[s].x - n);
              e && d >= o && (d = o - 10),
                !e && d <= o && (d = o + 10),
                (t[s].x = n + d * a),
                (o = d);
            }
        }
        t.sort(function(t, e) {
          return t.y - e.y;
        });
        for (var f, p = 0, g = t.length, v = [], m = [], y = 0; y < g; y++) {
          if ('outer' === t[y].position && 'labelLine' === t[y].labelAlignTo) {
            var x = t[y].x - u;
            (t[y].linePoints[1][0] += x), (t[y].x = u);
          }
          (f = t[y].y - p), f < 0 && c(y, g, -f, r), (p = t[y].y + t[y].height);
        }
        o - p < 0 && h(g - 1, p - o);
        for (y = 0; y < g; y++) t[y].y >= n ? m.push(t[y]) : v.push(t[y]);
        d(v, !1, e, n, i, r), d(m, !0, e, n, i, r);
      }
      function l(t, e, n, r, a, o, l, c) {
        for (
          var h = [], d = [], f = Number.MAX_VALUE, p = -Number.MAX_VALUE, g = 0;
          g < t.length;
          g++
        )
          u(t[g]) ||
            (t[g].x < e
              ? ((f = Math.min(f, t[g].x)), h.push(t[g]))
              : ((p = Math.max(p, t[g].x)), d.push(t[g])));
        s(d, e, n, r, 1, a, o, l, c, p), s(h, e, n, r, -1, a, o, l, c, f);
        for (g = 0; g < t.length; g++) {
          var v = t[g];
          if (!u(v)) {
            var m = v.linePoints;
            if (m) {
              var y,
                x = 'edge' === v.labelAlignTo,
                _ = v.textRect.width;
              (y = x
                ? v.x < e
                  ? m[2][0] - v.labelDistance - l - v.labelMargin
                  : l + a - v.labelMargin - m[2][0] - v.labelDistance
                : v.x < e
                ? v.x - l - v.bleedMargin
                : l + a - v.x - v.bleedMargin),
                y < v.textRect.width &&
                  ((v.text = i.truncateText(v.text, y, v.font)),
                  'edge' === v.labelAlignTo && (_ = i.getWidth(v.text, v.font)));
              var b = m[1][0] - m[2][0];
              x
                ? v.x < e
                  ? (m[2][0] = l + v.labelMargin + _ + v.labelDistance)
                  : (m[2][0] = l + a - v.labelMargin - _ - v.labelDistance)
                : (v.x < e ? (m[2][0] = v.x + v.labelDistance) : (m[2][0] = v.x - v.labelDistance),
                  (m[1][0] = m[2][0] + b)),
                (m[1][1] = m[2][1] = v.y);
            }
          }
        }
      }
      function u(t) {
        return 'center' === t.position;
      }
      function c(t, e, n, r, s, u) {
        var c,
          h,
          d = t.getData(),
          f = [],
          p = !1,
          g = (t.get('minShowLabelAngle') || 0) * o;
        d.each(function(r) {
          var o = d.getItemLayout(r),
            l = d.getItemModel(r),
            u = l.getModel('label'),
            v = u.get('position') || l.get('emphasis.label.position'),
            m = u.get('distanceToLabelLine'),
            y = u.get('alignTo'),
            x = a(u.get('margin'), n),
            _ = u.get('bleedMargin'),
            b = u.getFont(),
            w = l.getModel('labelLine'),
            S = w.get('length');
          S = a(S, n);
          var M = w.get('length2');
          if (((M = a(M, n)), !(o.angle < g))) {
            var T,
              C,
              I,
              k,
              A = (o.startAngle + o.endAngle) / 2,
              D = Math.cos(A),
              O = Math.sin(A);
            (c = o.cx), (h = o.cy);
            var P,
              E = t.getFormattedLabel(r, 'normal') || d.getName(r),
              L = i.getBoundingRect(E, b, k, 'top'),
              R = 'inside' === v || 'inner' === v;
            if ('center' === v) (T = o.cx), (C = o.cy), (k = 'center');
            else {
              var N = (R ? ((o.r + o.r0) / 2) * D : o.r * D) + c,
                z = (R ? ((o.r + o.r0) / 2) * O : o.r * O) + h;
              if (((T = N + 3 * D), (C = z + 3 * O), !R)) {
                var B = N + D * (S + e - o.r),
                  j = z + O * (S + e - o.r),
                  F = B + (D < 0 ? -1 : 1) * M,
                  Y = j;
                (T = 'edge' === y ? (D < 0 ? s + x : s + n - x) : F + (D < 0 ? -m : m)),
                  (C = Y),
                  (I = [
                    [N, z],
                    [B, j],
                    [F, Y],
                  ]);
              }
              k = R
                ? 'center'
                : 'edge' === y
                ? D > 0
                  ? 'right'
                  : 'left'
                : D > 0
                ? 'left'
                : 'right';
            }
            var V = u.get('rotate');
            (P = 'number' === typeof V ? V * (Math.PI / 180) : V ? (D < 0 ? -A + Math.PI : -A) : 0),
              (p = !!P),
              (o.label = {
                x: T,
                y: C,
                position: v,
                height: L.height,
                len: S,
                len2: M,
                linePoints: I,
                textAlign: k,
                verticalAlign: 'middle',
                rotation: P,
                inside: R,
                labelDistance: m,
                labelAlignTo: y,
                labelMargin: x,
                bleedMargin: _,
                textRect: L,
                text: E,
                font: b,
              }),
              R || f.push(o.label);
          }
        }),
          !p && t.get('avoidLabelOverlap') && l(f, c, h, e, n, r, s, u);
      }
      t.exports = c;
    },
    uAnK: function(t, e, n) {
      var i = n('bYtY'),
        r = n('Kagy'),
        a = n('KxfA'),
        o = a.retrieveRawValue;
      function s(t, e) {
        var n = e.getModel('aria');
        if (n.get('show'))
          if (n.get('description')) t.setAttribute('aria-label', n.get('description'));
          else {
            var a = 0;
            e.eachSeries(function(t, e) {
              ++a;
            }, this);
            var s,
              l = n.get('data.maxCount') || 10,
              u = n.get('series.maxCount') || 10,
              c = Math.min(a, u);
            if (!(a < 1)) {
              var h = v();
              s = h ? p(g('general.withTitle'), { title: h }) : g('general.withoutTitle');
              var d = [],
                f = a > 1 ? 'series.multiple.prefix' : 'series.single.prefix';
              (s += p(g(f), { seriesCount: a })),
                e.eachSeries(function(t, e) {
                  if (e < c) {
                    var n,
                      i = t.get('name'),
                      r = 'series.' + (a > 1 ? 'multiple' : 'single') + '.';
                    (n = g(i ? r + 'withName' : r + 'withoutName')),
                      (n = p(n, {
                        seriesId: t.seriesIndex,
                        seriesName: t.get('name'),
                        seriesType: m(t.subType),
                      }));
                    var s = t.getData();
                    (window.data = s),
                      s.count() > l
                        ? (n += p(g('data.partialData'), { displayCnt: l }))
                        : (n += g('data.allData'));
                    for (var u = [], h = 0; h < s.count(); h++)
                      if (h < l) {
                        var f = s.getName(h),
                          v = o(s, h);
                        u.push(
                          p(g(f ? 'data.withName' : 'data.withoutName'), { name: f, value: v }),
                        );
                      }
                    (n += u.join(g('data.separator.middle')) + g('data.separator.end')), d.push(n);
                  }
                }),
                (s +=
                  d.join(g('series.multiple.separator.middle')) +
                  g('series.multiple.separator.end')),
                t.setAttribute('aria-label', s);
            }
          }
        function p(t, e) {
          if ('string' !== typeof t) return t;
          var n = t;
          return (
            i.each(e, function(t, e) {
              n = n.replace(new RegExp('\\{\\s*' + e + '\\s*\\}', 'g'), t);
            }),
            n
          );
        }
        function g(t) {
          var e = n.get(t);
          if (null == e) {
            for (var i = t.split('.'), a = r.aria, o = 0; o < i.length; ++o) a = a[i[o]];
            return a;
          }
          return e;
        }
        function v() {
          var t = e.getModel('title').option;
          return t && t.length && (t = t[0]), t && t.text;
        }
        function m(t) {
          return r.series.typeNames[t] || '\u81ea\u5b9a\u4e49\u56fe';
        }
      }
      t.exports = s;
    },
    vWvF: function(t, e, n) {
      var i = n('Bq2U'),
        r = n('SUKs'),
        a = n('bYtY'),
        o = a.isString,
        s = a.isFunction,
        l = a.isObject,
        u = a.isArrayLike,
        c = a.indexOf,
        h = function() {
          this.animators = [];
        };
      function d(t, e, n, i, r, a, l, u) {
        o(i)
          ? ((a = r), (r = i), (i = 0))
          : s(r)
          ? ((a = r), (r = 'linear'), (i = 0))
          : s(i)
          ? ((a = i), (i = 0))
          : s(n)
          ? ((a = n), (n = 500))
          : n || (n = 500),
          t.stopAnimation(),
          f(t, '', t, e, n, i, u);
        var c = t.animators.slice(),
          h = c.length;
        function d() {
          h--, h || (a && a());
        }
        h || (a && a());
        for (var p = 0; p < c.length; p++) c[p].done(d).start(r, l);
      }
      function f(t, e, n, i, r, a, o) {
        var s = {},
          c = 0;
        for (var h in i)
          i.hasOwnProperty(h) &&
            (null != n[h]
              ? l(i[h]) && !u(i[h])
                ? f(t, e ? e + '.' + h : h, n[h], i[h], r, a, o)
                : (o ? ((s[h] = n[h]), p(t, e, h, i[h])) : (s[h] = i[h]), c++)
              : null == i[h] || o || p(t, e, h, i[h]));
        c > 0 &&
          t
            .animate(e, !1)
            .when(null == r ? 500 : r, s)
            .delay(a || 0);
      }
      function p(t, e, n, i) {
        if (e) {
          var r = {};
          (r[e] = {}), (r[e][n] = i), t.attr(r);
        } else t.attr(n, i);
      }
      h.prototype = {
        constructor: h,
        animate: function(t, e) {
          var n,
            a = !1,
            o = this,
            s = this.__zr;
          if (t) {
            var l = t.split('.'),
              u = o;
            a = 'shape' === l[0];
            for (var h = 0, d = l.length; h < d; h++) u && (u = u[l[h]]);
            u && (n = u);
          } else n = o;
          if (n) {
            var f = o.animators,
              p = new i(n, e);
            return (
              p
                .during(function(t) {
                  o.dirty(a);
                })
                .done(function() {
                  f.splice(c(f, p), 1);
                }),
              f.push(p),
              s && s.animation.addAnimator(p),
              p
            );
          }
          r('Property "' + t + '" is not existed in element ' + o.id);
        },
        stopAnimation: function(t) {
          for (var e = this.animators, n = e.length, i = 0; i < n; i++) e[i].stop(t);
          return (e.length = 0), this;
        },
        animateTo: function(t, e, n, i, r, a) {
          d(this, t, e, n, i, r, a);
        },
        animateFrom: function(t, e, n, i, r, a) {
          d(this, t, e, n, i, r, a, !0);
        },
      };
      var g = h;
      t.exports = g;
    },
    vafp: function(t, e, n) {
      var i = n('bYtY'),
        r = n('8nly');
      function a(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var n = t.features, i = 0; i < n.length; i++)
          for (
            var r = n[i], a = r.geometry, s = a.coordinates, l = a.encodeOffsets, u = 0;
            u < s.length;
            u++
          ) {
            var c = s[u];
            if ('Polygon' === a.type) s[u] = o(c, l[u], e);
            else if ('MultiPolygon' === a.type)
              for (var h = 0; h < c.length; h++) {
                var d = c[h];
                c[h] = o(d, l[u][h], e);
              }
          }
        return (t.UTF8Encoding = !1), t;
      }
      function o(t, e, n) {
        for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
          var s = t.charCodeAt(o) - 64,
            l = t.charCodeAt(o + 1) - 64;
          (s = (s >> 1) ^ -(1 & s)),
            (l = (l >> 1) ^ -(1 & l)),
            (s += r),
            (l += a),
            (r = s),
            (a = l),
            i.push([s / n, l / n]);
        }
        return i;
      }
      function s(t, e) {
        return (
          a(t),
          i.map(
            i.filter(t.features, function(t) {
              return t.geometry && t.properties && t.geometry.coordinates.length > 0;
            }),
            function(t) {
              var n = t.properties,
                a = t.geometry,
                o = a.coordinates,
                s = [];
              'Polygon' === a.type &&
                s.push({ type: 'polygon', exterior: o[0], interiors: o.slice(1) }),
                'MultiPolygon' === a.type &&
                  i.each(o, function(t) {
                    t[0] && s.push({ type: 'polygon', exterior: t[0], interiors: t.slice(1) });
                  });
              var l = new r(n[e || 'name'], s, n.cp);
              return (l.properties = n), l;
            },
          )
        );
      }
      t.exports = s;
    },
    wDdD: function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY');
      n('98bh'), n('GrNh');
      var a = n('d4KN'),
        o = n('mOdp'),
        s = n('KS52'),
        l = n('0/Rx');
      a('pie', [
        { type: 'pieToggleSelect', event: 'pieselectchanged', method: 'toggleSelected' },
        { type: 'pieSelect', event: 'pieselected', method: 'select' },
        { type: 'pieUnSelect', event: 'pieunselected', method: 'unSelect' },
      ]),
        i.registerVisual(o('pie')),
        i.registerLayout(r.curry(s, 'pie')),
        i.registerProcessor(l('pie'));
    },
    wEUF: function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n('0Owb'),
        r = n('cDcd'),
        a = n.n(r),
        o = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        s = n.n(o);
      const l = a.a.memo(function() {
        var t = n('K+nK'),
          e = t(n('cDcd')),
          i = t(n('mv9J')),
          r = function() {
            return e.default.createElement(i.default, null);
          };
        return e['default'].createElement(r);
      });
      e['default'] = function() {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'h2',
              { id: 'charts' },
              a.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#charts' },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Charts',
            ),
          ),
          a.a.createElement(
            s.a,
            Object(i['a'])(
              {
                source: {
                  jsx:
                    "import React, { useState } from 'react';\nimport { Row, Col } from 'antd';\nimport { Charts } from 'qbmi';\n\nconst { ChartCard, Bar, Pie, TotalText } = Charts;\n\nconst View = () => {\n  // \u4ea7\u91cf\u8d8b\u52bf\n  const [productData, setProductData] = useState({\n    statistics: [\n      {\n        name: '\u4e3b\u4ea7\u54c1\u603b\u4ea7\u91cf',\n        value: 107.4,\n      },\n      {\n        name: '\u526f\u4ea7\u54c1\u603b\u4ea7\u91cf',\n        value: 0.0,\n      },\n    ],\n    xData: ['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708'],\n    yData: [\n      {\n        name: '\u4e3b\u4ea7\u54c1\u4ea7\u91cf',\n        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 107.4],\n      },\n      {\n        name: '\u526f\u4ea7\u54c1\u4ea7\u91cf',\n        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],\n      },\n    ],\n  });\n\n  // eslint-disable-next-line @typescript-eslint/no-unused-vars\n  const [pieData, setPieData] = useState([\n    {\n      name: '',\n      value: 30,\n    },\n    {\n      name: '\u5df2\u56de\u6536',\n      value: 87.3,\n    },\n  ]);\n\n  const onTabChange = () => {\n    console.log('change');\n  };\n\n  return (\n    <div>\n      <Row gutter={16}>\n        <Col span={24}>\n          <ChartCard\n            onChange={onTabChange}\n            options={{\n              headerOptions: {\n                title: '\u4ea7\u91cf\u8d8b\u52bf',\n                radios: {\n                  key: 'timeType',\n                  options: [\n                    { name: '\u672c\u5e74', value: 3 },\n                    { name: '\u672c\u6708', value: 2 },\n                    { name: '\u672c\u65e5', value: 1 },\n                  ],\n                },\n                defaultValue: {\n                  timeType: 2,\n                },\n              },\n              layout: {\n                showDivider: '500px',\n                items: [\n                  {\n                    key: 1,\n                    span: 16,\n                    items: [\n                      {\n                        key: 3,\n                        component: TotalText,\n                        data: productData.statistics || [],\n                        options: {\n                          color: ['#6595F9', '#62DAAB'],\n                          afterUnit: '\u5428',\n                        },\n                      },\n                      {\n                        key: 4,\n                        component: Bar,\n                        data: {\n                          xData: productData.xData || [],\n                          yData: productData.yData || [],\n                        },\n                        options: {\n                          option: {\n                            grid: {\n                              top: 32,\n                              left: 16,\n                              right: 32,\n                              bottom: 0,\n                              containLabel: true,\n                            },\n                            yAxis: {\n                              axisLine: {\n                                show: false,\n                              },\n                              axisTick: {\n                                show: false,\n                              },\n                              splitLine: {\n                                lineStyle: {\n                                  type: 'dashed',\n                                },\n                              },\n                            },\n                            color: ['#6595F9', '#62DAAB'],\n                            tooltip: {\n                              trigger: 'axis',\n                              axisPointer: {\n                                // \u5750\u6807\u8f74\u6307\u793a\u5668\uff0c\u5750\u6807\u8f74\u89e6\u53d1\u6709\u6548\n                                type: 'shadow', // \u9ed8\u8ba4\u4e3a\u76f4\u7ebf\uff0c\u53ef\u9009\u4e3a\uff1a'line' | 'shadow'\n                              },\n                            },\n                          },\n                          seriseOption: {\n                            barGap: 0,\n                            barMaxWidth: '30px',\n                          },\n                          height: 400,\n                        },\n                      },\n                    ],\n                  },\n                  {\n                    key: 2,\n                    span: 8,\n                    component: Pie,\n                    data: pieData,\n                    options: {\n                      option: {\n                        title: {\n                          text: '\u56de\u6536\u7387',\n                          top: '20px',\n                          left: '20px',\n                        },\n                        color: ['#6595F9', '#FDBF2F'],\n                      },\n                      seriseOption: {\n                        label: {\n                          show: false,\n                        },\n                        labelLine: {\n                          show: false,\n                        },\n                      },\n                      height: 400,\n                    },\n                  },\n                ],\n              },\n            }}\n          />\n        </Col>\n      </Row>\n    </div>\n  );\n};\n\nexport default View;\n",
                },
              },
              {
                path: '/_demos/charts',
                CSSInDependencies: ['antd/dist/antd.css'],
                dependencies: { antd: '4.6.6', qbmi: '0.0.20' },
                files: {},
              },
            ),
            a.a.createElement(l, null),
          ),
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'h2',
              { id: 'api' },
              a.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', null, '\u6210\u5458'),
                  a.a.createElement('th', null, '\u89e3\u91ca'),
                  a.a.createElement('th', null, '\u8bf4\u660e'),
                  a.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'father'),
                  a.a.createElement(
                    'td',
                    null,
                    'Library toolkit based on rollup, docz, storybook, jest, prettier and eslint.',
                  ),
                  a.a.createElement('td', null, 'number'),
                  a.a.createElement('td', null, '-'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'Umi'),
                  a.a.createElement(
                    'td',
                    null,
                    'Pluggable enterprise-level react application framework.',
                  ),
                  a.a.createElement('td', null, 'number'),
                  a.a.createElement('td', null, '-'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              'More skills for writing demo: ',
              a.a.createElement(
                'a',
                {
                  href: 'https://d.umijs.org/guide/demo-principle',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'https://d.umijs.org/guide/demo-principle',
                a.a.createElement(
                  'svg',
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    'aria-hidden': !0,
                    x: '0px',
                    y: '0px',
                    viewBox: '0 0 100 100',
                    width: '15',
                    height: '15',
                    className: '__dumi-default-external-link-icon',
                  },
                  a.a.createElement('path', {
                    fill: 'currentColor',
                    d:
                      'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                  }),
                  a.a.createElement('polygon', {
                    fill: 'currentColor',
                    points:
                      '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                  }),
                ),
              ),
            ),
          ),
        );
      };
    },
    wr5s: function(t, e, n) {
      var i = n('IwbS'),
        r = i.extendShape,
        a = r({
          type: 'sausage',
          shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 },
          buildPath: function(t, e) {
            var n = e.cx,
              i = e.cy,
              r = Math.max(e.r0 || 0, 0),
              a = Math.max(e.r, 0),
              o = 0.5 * (a - r),
              s = r + o,
              l = e.startAngle,
              u = e.endAngle,
              c = e.clockwise,
              h = Math.cos(l),
              d = Math.sin(l),
              f = Math.cos(u),
              p = Math.sin(u),
              g = c ? u - l < 2 * Math.PI : l - u < 2 * Math.PI;
            g &&
              (t.moveTo(h * r + n, d * r + i), t.arc(h * s + n, d * s + i, o, -Math.PI + l, l, !c)),
              t.arc(n, i, a, l, u, !c),
              t.moveTo(f * a + n, p * a + i),
              t.arc(f * s + n, p * s + i, o, u - 2 * Math.PI, u - Math.PI, !c),
              0 !== r && (t.arc(n, i, r, u, l, c), t.moveTo(h * r + n, p * r + i)),
              t.closePath();
          },
        });
      t.exports = a;
    },
    x3X8: function(t, e, n) {
      var i = n('KxfA'),
        r = i.retrieveRawValue;
      function a(t, e) {
        var n = t.mapDimension('defaultedLabel', !0),
          i = n.length;
        if (1 === i) return r(t, e, n[0]);
        if (i) {
          for (var a = [], o = 0; o < n.length; o++) {
            var s = r(t, e, n[o]);
            a.push(s);
          }
          return a.join(' ');
        }
      }
      e.getDefaultLabel = a;
    },
    x6Kt: function(t, e, n) {
      var i = n('y+Vt'),
        r = n('VpOo'),
        a = n('nPnh'),
        o = a.subPixelOptimizeRect,
        s = {},
        l = i.extend({
          type: 'rect',
          shape: { r: 0, x: 0, y: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var n, i, a, l;
            this.subPixelOptimize
              ? (o(s, e, this.style),
                (n = s.x),
                (i = s.y),
                (a = s.width),
                (l = s.height),
                (s.r = e.r),
                (e = s))
              : ((n = e.x), (i = e.y), (a = e.width), (l = e.height)),
              e.r ? r.buildPath(t, e) : t.rect(n, i, a, l),
              t.closePath();
          },
        });
      t.exports = l;
    },
    xKMd: function(t, e) {
      function n(t, e) {
        (this.getAllNames = function() {
          var t = e();
          return t.mapArray(t.getName);
        }),
          (this.containName = function(t) {
            var n = e();
            return n.indexOfName(t) >= 0;
          }),
          (this.indexOfName = function(e) {
            var n = t();
            return n.indexOfName(e);
          }),
          (this.getItemVisual = function(e, n) {
            var i = t();
            return i.getItemVisual(e, n);
          });
      }
      var i = n;
      t.exports = i;
    },
    xTNl: function(t, e) {
      var n = [
          '#37A2DA',
          '#32C5E9',
          '#67E0E3',
          '#9FE6B8',
          '#FFDB5C',
          '#ff9f7f',
          '#fb7293',
          '#E062AE',
          '#E690D1',
          '#e7bcf3',
          '#9d96f5',
          '#8378EA',
          '#96BFFF',
        ],
        i = {
          color: n,
          colorLayer: [
            ['#37A2DA', '#ffd85c', '#fd7b5f'],
            ['#37A2DA', '#67E0E3', '#FFDB5C', '#ff9f7f', '#E062AE', '#9d96f5'],
            [
              '#37A2DA',
              '#32C5E9',
              '#9FE6B8',
              '#FFDB5C',
              '#ff9f7f',
              '#fb7293',
              '#e7bcf3',
              '#8378EA',
              '#96BFFF',
            ],
            n,
          ],
        };
      t.exports = i;
    },
    'y+Vt': function(t, e, n) {
      var i = n('Gev7'),
        r = n('bYtY'),
        a = n('IMiH'),
        o = n('2DNl'),
        s = n('3C/r'),
        l = s.prototype.getCanvasPattern,
        u = Math.abs,
        c = new a(!0);
      function h(t) {
        i.call(this, t), (this.path = null);
      }
      (h.prototype = {
        constructor: h,
        type: 'path',
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        segmentIgnoreThreshold: 0,
        subPixelOptimize: !1,
        brush: function(t, e) {
          var n,
            i = this.style,
            r = this.path || c,
            a = i.hasStroke(),
            o = i.hasFill(),
            s = i.fill,
            u = i.stroke,
            h = o && !!s.colorStops,
            d = a && !!u.colorStops,
            f = o && !!s.image,
            p = a && !!u.image;
          (i.bind(t, this, e), this.setTransform(t), this.__dirty) &&
            (h &&
              ((n = n || this.getBoundingRect()), (this._fillGradient = i.getGradient(t, s, n))),
            d &&
              ((n = n || this.getBoundingRect()), (this._strokeGradient = i.getGradient(t, u, n))));
          h ? (t.fillStyle = this._fillGradient) : f && (t.fillStyle = l.call(s, t)),
            d ? (t.strokeStyle = this._strokeGradient) : p && (t.strokeStyle = l.call(u, t));
          var g = i.lineDash,
            v = i.lineDashOffset,
            m = !!t.setLineDash,
            y = this.getGlobalScale();
          if (
            (r.setScale(y[0], y[1], this.segmentIgnoreThreshold),
            this.__dirtyPath || (g && !m && a)
              ? (r.beginPath(t),
                g && !m && (r.setLineDash(g), r.setLineDashOffset(v)),
                this.buildPath(r, this.shape, !1),
                this.path && (this.__dirtyPath = !1))
              : (t.beginPath(), this.path.rebuildPath(t)),
            o)
          )
            if (null != i.fillOpacity) {
              var x = t.globalAlpha;
              (t.globalAlpha = i.fillOpacity * i.opacity), r.fill(t), (t.globalAlpha = x);
            } else r.fill(t);
          if ((g && m && (t.setLineDash(g), (t.lineDashOffset = v)), a))
            if (null != i.strokeOpacity) {
              x = t.globalAlpha;
              (t.globalAlpha = i.strokeOpacity * i.opacity), r.stroke(t), (t.globalAlpha = x);
            } else r.stroke(t);
          g && m && t.setLineDash([]),
            null != i.text &&
              (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
        },
        buildPath: function(t, e, n) {},
        createPathProxy: function() {
          this.path = new a();
        },
        getBoundingRect: function() {
          var t = this._rect,
            e = this.style,
            n = !t;
          if (n) {
            var i = this.path;
            i || (i = this.path = new a()),
              this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)),
              (t = i.getBoundingRect());
          }
          if (((this._rect = t), e.hasStroke())) {
            var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
            if (this.__dirty || n) {
              r.copy(t);
              var o = e.lineWidth,
                s = e.strokeNoScale ? this.getLineScale() : 1;
              e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)),
                s > 1e-10 &&
                  ((r.width += o / s), (r.height += o / s), (r.x -= o / s / 2), (r.y -= o / s / 2));
            }
            return r;
          }
          return t;
        },
        contain: function(t, e) {
          var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect(),
            r = this.style;
          if (((t = n[0]), (e = n[1]), i.contain(t, e))) {
            var a = this.path.data;
            if (r.hasStroke()) {
              var s = r.lineWidth,
                l = r.strokeNoScale ? this.getLineScale() : 1;
              if (
                l > 1e-10 &&
                (r.hasFill() || (s = Math.max(s, this.strokeContainThreshold)),
                o.containStroke(a, s / l, t, e))
              )
                return !0;
            }
            if (r.hasFill()) return o.contain(a, t, e);
          }
          return !1;
        },
        dirty: function(t) {
          null == t && (t = !0),
            t && ((this.__dirtyPath = t), (this._rect = null)),
            (this.__dirty = this.__dirtyText = !0),
            this.__zr && this.__zr.refresh(),
            this.__clipTarget && this.__clipTarget.dirty();
        },
        animateShape: function(t) {
          return this.animate('shape', t);
        },
        attrKV: function(t, e) {
          'shape' === t
            ? (this.setShape(e), (this.__dirtyPath = !0), (this._rect = null))
            : i.prototype.attrKV.call(this, t, e);
        },
        setShape: function(t, e) {
          var n = this.shape;
          if (n) {
            if (r.isObject(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            else n[t] = e;
            this.dirty(!0);
          }
          return this;
        },
        getLineScale: function() {
          var t = this.transform;
          return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10
            ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1]))
            : 1;
        },
      }),
        (h.extend = function(t) {
          var e = function(e) {
            h.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
              this.shape = this.shape || {};
              var i = this.shape;
              for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
            }
            t.init && t.init.call(this, e);
          };
          for (var n in (r.inherits(e, h), t))
            'style' !== n && 'shape' !== n && (e.prototype[n] = t[n]);
          return e;
        }),
        r.inherits(h, i);
      var d = h;
      t.exports = d;
    },
    'y+lR': function(t, e, n) {
      var i = n('bYtY'),
        r = n('mFDi'),
        a = n('z35g');
      function o(t) {
        a.call(this, t);
      }
      (o.prototype = {
        constructor: o,
        type: 'cartesian2d',
        dimensions: ['x', 'y'],
        getBaseAxis: function() {
          return (
            this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAxis('x')
          );
        },
        containPoint: function(t) {
          var e = this.getAxis('x'),
            n = this.getAxis('y');
          return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
        },
        containData: function(t) {
          return this.getAxis('x').containData(t[0]) && this.getAxis('y').containData(t[1]);
        },
        dataToPoint: function(t, e, n) {
          var i = this.getAxis('x'),
            r = this.getAxis('y');
          return (
            (n = n || []),
            (n[0] = i.toGlobalCoord(i.dataToCoord(t[0]))),
            (n[1] = r.toGlobalCoord(r.dataToCoord(t[1]))),
            n
          );
        },
        clampData: function(t, e) {
          var n = this.getAxis('x').scale,
            i = this.getAxis('y').scale,
            r = n.getExtent(),
            a = i.getExtent(),
            o = n.parse(t[0]),
            s = i.parse(t[1]);
          return (
            (e = e || []),
            (e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1]))),
            (e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1]))),
            e
          );
        },
        pointToData: function(t, e) {
          var n = this.getAxis('x'),
            i = this.getAxis('y');
          return (
            (e = e || []),
            (e[0] = n.coordToData(n.toLocalCoord(t[0]))),
            (e[1] = i.coordToData(i.toLocalCoord(t[1]))),
            e
          );
        },
        getOtherAxis: function(t) {
          return this.getAxis('x' === t.dim ? 'y' : 'x');
        },
        getArea: function() {
          var t = this.getAxis('x').getGlobalExtent(),
            e = this.getAxis('y').getGlobalExtent(),
            n = Math.min(t[0], t[1]),
            i = Math.min(e[0], e[1]),
            a = Math.max(t[0], t[1]) - n,
            o = Math.max(e[0], e[1]) - i,
            s = new r(n, i, a, o);
          return s;
        },
      }),
        i.inherits(o, a);
      var s = o;
      t.exports = s;
    },
    y23F: function(t, e) {
      function n() {
        this.on('mousedown', this._dragStart, this),
          this.on('mousemove', this._drag, this),
          this.on('mouseup', this._dragEnd, this);
      }
      function i(t, e) {
        return { target: t, topTarget: e && e.topTarget };
      }
      n.prototype = {
        constructor: n,
        _dragStart: function(t) {
          var e = t.target;
          while (e && !e.draggable) e = e.parent;
          e &&
            ((this._draggingTarget = e),
            (e.dragging = !0),
            (this._x = t.offsetX),
            (this._y = t.offsetY),
            this.dispatchToElement(i(e, t), 'dragstart', t.event));
        },
        _drag: function(t) {
          var e = this._draggingTarget;
          if (e) {
            var n = t.offsetX,
              r = t.offsetY,
              a = n - this._x,
              o = r - this._y;
            (this._x = n),
              (this._y = r),
              e.drift(a, o, t),
              this.dispatchToElement(i(e, t), 'drag', t.event);
            var s = this.findHover(n, r, e).target,
              l = this._dropTarget;
            (this._dropTarget = s),
              e !== s &&
                (l && s !== l && this.dispatchToElement(i(l, t), 'dragleave', t.event),
                s && s !== l && this.dispatchToElement(i(s, t), 'dragenter', t.event));
          }
        },
        _dragEnd: function(t) {
          var e = this._draggingTarget;
          e && (e.dragging = !1),
            this.dispatchToElement(i(e, t), 'dragend', t.event),
            this._dropTarget && this.dispatchToElement(i(this._dropTarget, t), 'drop', t.event),
            (this._draggingTarget = null),
            (this._dropTarget = null);
        },
      };
      var r = n;
      t.exports = r;
    },
    'y4/Y': function(t, e, n) {
      var i = n('ProS'),
        r = n('bYtY'),
        a = n('zTMp'),
        o = n('62sa');
      n('SKx+'),
        n('1LEl'),
        n('Sp2Z'),
        i.registerPreprocessor(function(t) {
          if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !r.isArray(e) && (t.axisPointer.link = [e]);
          }
        }),
        i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
          t.getComponent('axisPointer').coordSysAxesInfo = a.collect(t, e);
        }),
        i.registerAction(
          { type: 'updateAxisPointer', event: 'updateAxisPointer', update: ':updateAxisPointer' },
          o,
        );
    },
    ypgQ: function(t, e, n) {
      var i = n('bYtY'),
        r = n('4NO4'),
        a = n('bLfw'),
        o = i.each,
        s = i.clone,
        l = i.map,
        u = i.merge,
        c = /^(min|max)?(.+)$/;
      function h(t) {
        (this._api = t),
          (this._timelineOptions = []),
          (this._mediaList = []),
          this._mediaDefault,
          (this._currentMediaIndices = []),
          this._optionBackup,
          this._newBaseOption;
      }
      function d(t, e, n) {
        var r,
          a,
          s = [],
          l = [],
          u = t.timeline;
        if (
          (t.baseOption && (a = t.baseOption),
          (u || t.options) && ((a = a || {}), (s = (t.options || []).slice())),
          t.media)
        ) {
          a = a || {};
          var c = t.media;
          o(c, function(t) {
            t && t.option && (t.query ? l.push(t) : r || (r = t));
          });
        }
        return (
          a || (a = t),
          a.timeline || (a.timeline = u),
          o(
            [a].concat(s).concat(
              i.map(l, function(t) {
                return t.option;
              }),
            ),
            function(t) {
              o(e, function(e) {
                e(t, n);
              });
            },
          ),
          { baseOption: a, timelineOptions: s, mediaDefault: r, mediaList: l }
        );
      }
      function f(t, e, n) {
        var r = { width: e, height: n, aspectratio: e / n },
          a = !0;
        return (
          i.each(t, function(t, e) {
            var n = e.match(c);
            if (n && n[1] && n[2]) {
              var i = n[1],
                o = n[2].toLowerCase();
              p(r[o], t, i) || (a = !1);
            }
          }),
          a
        );
      }
      function p(t, e, n) {
        return 'min' === n ? t >= e : 'max' === n ? t <= e : t === e;
      }
      function g(t, e) {
        return t.join(',') === e.join(',');
      }
      function v(t, e) {
        (e = e || {}),
          o(e, function(e, n) {
            if (null != e) {
              var i = t[n];
              if (a.hasClass(n)) {
                (e = r.normalizeToArray(e)), (i = r.normalizeToArray(i));
                var o = r.mappingToExists(i, e);
                t[n] = l(o, function(t) {
                  return t.option && t.exist ? u(t.exist, t.option, !0) : t.exist || t.option;
                });
              } else t[n] = u(i, e, !0);
            }
          });
      }
      h.prototype = {
        constructor: h,
        setOption: function(t, e) {
          t &&
            i.each(r.normalizeToArray(t.series), function(t) {
              t && t.data && i.isTypedArray(t.data) && i.setAsPrimitive(t.data);
            }),
            (t = s(t));
          var n = this._optionBackup,
            a = d.call(this, t, e, !n);
          (this._newBaseOption = a.baseOption),
            n
              ? (v(n.baseOption, a.baseOption),
                a.timelineOptions.length && (n.timelineOptions = a.timelineOptions),
                a.mediaList.length && (n.mediaList = a.mediaList),
                a.mediaDefault && (n.mediaDefault = a.mediaDefault))
              : (this._optionBackup = a);
        },
        mountOption: function(t) {
          var e = this._optionBackup;
          return (
            (this._timelineOptions = l(e.timelineOptions, s)),
            (this._mediaList = l(e.mediaList, s)),
            (this._mediaDefault = s(e.mediaDefault)),
            (this._currentMediaIndices = []),
            s(t ? e.baseOption : this._newBaseOption)
          );
        },
        getTimelineOption: function(t) {
          var e,
            n = this._timelineOptions;
          if (n.length) {
            var i = t.getComponent('timeline');
            i && (e = s(n[i.getCurrentIndex()], !0));
          }
          return e;
        },
        getMediaOption: function(t) {
          var e = this._api.getWidth(),
            n = this._api.getHeight(),
            i = this._mediaList,
            r = this._mediaDefault,
            a = [],
            o = [];
          if (!i.length && !r) return o;
          for (var u = 0, c = i.length; u < c; u++) f(i[u].query, e, n) && a.push(u);
          return (
            !a.length && r && (a = [-1]),
            a.length &&
              !g(a, this._currentMediaIndices) &&
              (o = l(a, function(t) {
                return s(-1 === t ? r.option : i[t].option);
              })),
            (this._currentMediaIndices = a),
            o
          );
        },
      };
      var m = h;
      t.exports = m;
    },
    yxFR: function(t, e, n) {
      var i = n('y+Vt'),
        r = n('nPnh'),
        a = r.subPixelOptimizeLine,
        o = {},
        s = i.extend({
          type: 'line',
          shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 },
          style: { stroke: '#000', fill: null },
          buildPath: function(t, e) {
            var n, i, r, s;
            this.subPixelOptimize
              ? (a(o, e, this.style), (n = o.x1), (i = o.y1), (r = o.x2), (s = o.y2))
              : ((n = e.x1), (i = e.y1), (r = e.x2), (s = e.y2));
            var l = e.percent;
            0 !== l &&
              (t.moveTo(n, i),
              l < 1 && ((r = n * (1 - l) + r * l), (s = i * (1 - l) + s * l)),
              t.lineTo(r, s));
          },
          pointAt: function(t) {
            var e = this.shape;
            return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
          },
        });
      t.exports = s;
    },
    z35g: function(t, e, n) {
      var i = n('bYtY');
      function r(t) {
        return this._axes[t];
      }
      var a = function(t) {
        (this._axes = {}), (this._dimList = []), (this.name = t || '');
      };
      a.prototype = {
        constructor: a,
        type: 'cartesian',
        getAxis: function(t) {
          return this._axes[t];
        },
        getAxes: function() {
          return i.map(this._dimList, r, this);
        },
        getAxesByScale: function(t) {
          return (
            (t = t.toLowerCase()),
            i.filter(this.getAxes(), function(e) {
              return e.scale.type === t;
            })
          );
        },
        addAxis: function(t) {
          var e = t.dim;
          (this._axes[e] = t), this._dimList.push(e);
        },
        dataToCoord: function(t) {
          return this._dataCoordConvert(t, 'dataToCoord');
        },
        coordToData: function(t) {
          return this._dataCoordConvert(t, 'coordToData');
        },
        _dataCoordConvert: function(t, e) {
          for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
            var a = n[r],
              o = this._axes[a];
            i[a] = o[e](t[a]);
          }
          return i;
        },
      };
      var o = a;
      t.exports = o;
    },
    zDms: function(t, e, n) {
      var i = n('bYtY'),
        r = n('OELB'),
        a = n('UOVi'),
        o = n('72pK'),
        s = i.each,
        l = r.asc,
        u = function(t, e, n, i) {
          (this._dimName = t),
            (this._axisIndex = e),
            this._valueWindow,
            this._percentWindow,
            this._dataExtent,
            this._minMaxSpan,
            (this.ecModel = i),
            (this._dataZoomModel = n);
        };
      function c(t, e, n) {
        var i = [1 / 0, -1 / 0];
        return (
          s(n, function(t) {
            var n = t.getData();
            n &&
              s(n.mapDimension(e, !0), function(t) {
                var e = n.getApproximateExtent(t);
                e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1]);
              });
          }),
          i[1] < i[0] && (i = [NaN, NaN]),
          h(t, i),
          i
        );
      }
      function h(t, e) {
        var n = t.getAxisModel(),
          i = n.getMin(!0),
          r = 'category' === n.get('type'),
          a = r && n.getCategories().length;
        null != i && 'dataMin' !== i && 'function' !== typeof i
          ? (e[0] = i)
          : r && (e[0] = a > 0 ? 0 : NaN);
        var o = n.getMax(!0);
        return (
          null != o && 'dataMax' !== o && 'function' !== typeof o
            ? (e[1] = o)
            : r && (e[1] = a > 0 ? a - 1 : NaN),
          n.get('scale', !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)),
          e
        );
      }
      function d(t, e) {
        var n = t.getAxisModel(),
          i = t._percentWindow,
          a = t._valueWindow;
        if (i) {
          var o = r.getPixelPrecision(a, [0, 500]);
          o = Math.min(o, 20);
          var s = e || (0 === i[0] && 100 === i[1]);
          n.setRange(s ? null : +a[0].toFixed(o), s ? null : +a[1].toFixed(o));
        }
      }
      function f(t) {
        var e = (t._minMaxSpan = {}),
          n = t._dataZoomModel,
          i = t._dataExtent;
        s(['min', 'max'], function(a) {
          var o = n.get(a + 'Span'),
            s = n.get(a + 'ValueSpan');
          null != s && (s = t.getAxisModel().axis.scale.parse(s)),
            null != s
              ? (o = r.linearMap(i[0] + s, i, [0, 100], !0))
              : null != o && (s = r.linearMap(o, [0, 100], i, !0) - i[0]),
            (e[a + 'Span'] = o),
            (e[a + 'ValueSpan'] = s);
        });
      }
      u.prototype = {
        constructor: u,
        hostedBy: function(t) {
          return this._dataZoomModel === t;
        },
        getDataValueWindow: function() {
          return this._valueWindow.slice();
        },
        getDataPercentWindow: function() {
          return this._percentWindow.slice();
        },
        getTargetSeriesModels: function() {
          var t = [],
            e = this.ecModel;
          return (
            e.eachSeries(function(n) {
              if (a.isCoordSupported(n.get('coordinateSystem'))) {
                var i = this._dimName,
                  r = e.queryComponents({
                    mainType: i + 'Axis',
                    index: n.get(i + 'AxisIndex'),
                    id: n.get(i + 'AxisId'),
                  })[0];
                this._axisIndex === (r && r.componentIndex) && t.push(n);
              }
            }, this),
            t
          );
        },
        getAxisModel: function() {
          return this.ecModel.getComponent(this._dimName + 'Axis', this._axisIndex);
        },
        getOtherAxisModel: function() {
          var t,
            e,
            n,
            i = this._dimName,
            r = this.ecModel,
            a = this.getAxisModel(),
            o = 'x' === i || 'y' === i;
          return (
            o
              ? ((e = 'gridIndex'), (t = 'x' === i ? 'y' : 'x'))
              : ((e = 'polarIndex'), (t = 'angle' === i ? 'radius' : 'angle')),
            r.eachComponent(t + 'Axis', function(t) {
              (t.get(e) || 0) === (a.get(e) || 0) && (n = t);
            }),
            n
          );
        },
        getMinMaxSpan: function() {
          return i.clone(this._minMaxSpan);
        },
        calculateDataWindow: function(t) {
          var e,
            n = this._dataExtent,
            i = this.getAxisModel(),
            a = i.axis.scale,
            u = this._dataZoomModel.getRangePropMode(),
            c = [0, 100],
            h = [],
            d = [];
          s(['start', 'end'], function(i, o) {
            var s = t[i],
              l = t[i + 'Value'];
            'percent' === u[o]
              ? (null == s && (s = c[o]), (l = a.parse(r.linearMap(s, c, n))))
              : ((e = !0), (l = null == l ? n[o] : a.parse(l)), (s = r.linearMap(l, n, c))),
              (d[o] = l),
              (h[o] = s);
          }),
            l(d),
            l(h);
          var f = this._minMaxSpan;
          function p(t, e, n, i, s) {
            var l = s ? 'Span' : 'ValueSpan';
            o(0, t, n, 'all', f['min' + l], f['max' + l]);
            for (var u = 0; u < 2; u++)
              (e[u] = r.linearMap(t[u], n, i, !0)), s && (e[u] = a.parse(e[u]));
          }
          return e ? p(d, h, n, c, !1) : p(h, d, c, n, !0), { valueWindow: d, percentWindow: h };
        },
        reset: function(t) {
          if (t === this._dataZoomModel) {
            var e = this.getTargetSeriesModels();
            (this._dataExtent = c(this, this._dimName, e)), f(this);
            var n = this.calculateDataWindow(t.settledOption);
            (this._valueWindow = n.valueWindow), (this._percentWindow = n.percentWindow), d(this);
          }
        },
        restore: function(t) {
          t === this._dataZoomModel &&
            ((this._valueWindow = this._percentWindow = null), d(this, !0));
        },
        filterData: function(t, e) {
          if (t === this._dataZoomModel) {
            var n = this._dimName,
              i = this.getTargetSeriesModels(),
              r = t.get('filterMode'),
              a = this._valueWindow;
            'none' !== r &&
              s(i, function(t) {
                var e = t.getData(),
                  i = e.mapDimension(n, !0);
                i.length &&
                  ('weakFilter' === r
                    ? e.filterSelf(function(t) {
                        for (var n, r, o, s = 0; s < i.length; s++) {
                          var l = e.get(i[s], t),
                            u = !isNaN(l),
                            c = l < a[0],
                            h = l > a[1];
                          if (u && !c && !h) return !0;
                          u && (o = !0), c && (n = !0), h && (r = !0);
                        }
                        return o && n && r;
                      })
                    : s(i, function(n) {
                        if ('empty' === r)
                          t.setData(
                            (e = e.map(n, function(t) {
                              return o(t) ? t : NaN;
                            })),
                          );
                        else {
                          var i = {};
                          (i[n] = a), e.selectRange(i);
                        }
                      }),
                  s(i, function(t) {
                    e.setApproximateExtent(a, t);
                  }));
              });
          }
          function o(t) {
            return t >= a[0] && t <= a[1];
          }
        },
      };
      var p = u;
      t.exports = p;
    },
    zM3Q: function(t, e, n) {
      var i = n('4NO4'),
        r = i.makeInner;
      function a() {
        var t = r();
        return function(e) {
          var n = t(e),
            i = e.pipelineContext,
            r = n.large,
            a = n.progressiveRender,
            o = (n.large = i && i.large),
            s = (n.progressiveRender = i && i.progressiveRender);
          return !!(r ^ o || a ^ s) && 'reset';
        };
      }
      t.exports = a;
    },
    zTMp: function(t, e, n) {
      var i = n('bYtY'),
        r = n('Qxkt'),
        a = i.each,
        o = i.curry;
      function s(t, e) {
        var n = { axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {} };
        return l(n, t, e), n.seriesInvolved && c(n, t), n;
      }
      function l(t, e, n) {
        var i = e.getComponent('tooltip'),
          r = e.getComponent('axisPointer'),
          s = r.get('link', !0) || [],
          l = [];
        a(n.getCoordinateSystems(), function(n) {
          if (n.axisPointerEnabled) {
            var c = m(n.model),
              d = (t.coordSysAxesInfo[c] = {});
            t.coordSysMap[c] = n;
            var f = n.model,
              p = f.getModel('tooltip', i);
            if ((a(n.getAxes(), o(_, !1, null)), n.getTooltipAxes && i && p.get('show'))) {
              var g = 'axis' === p.get('trigger'),
                y = 'cross' === p.get('axisPointer.type'),
                x = n.getTooltipAxes(p.get('axisPointer.axis'));
              (g || y) && a(x.baseAxes, o(_, !y || 'cross', g)),
                y && a(x.otherAxes, o(_, 'cross', !1));
            }
          }
          function _(i, a, o) {
            var c = o.model.getModel('axisPointer', r),
              f = c.get('show');
            if (f && ('auto' !== f || i || v(c))) {
              null == a && (a = c.get('triggerTooltip')), (c = i ? u(o, p, r, e, i, a) : c);
              var g = c.get('snap'),
                y = m(o.model),
                x = a || g || 'category' === o.type,
                _ = (t.axesInfo[y] = {
                  key: y,
                  axis: o,
                  coordSys: n,
                  axisPointerModel: c,
                  triggerTooltip: a,
                  involveSeries: x,
                  snap: g,
                  useHandle: v(c),
                  seriesModels: [],
                });
              (d[y] = _), (t.seriesInvolved |= x);
              var b = h(s, o);
              if (null != b) {
                var w = l[b] || (l[b] = { axesInfo: {} });
                (w.axesInfo[y] = _), (w.mapper = s[b].mapper), (_.linkGroup = w);
              }
            }
          }
        });
      }
      function u(t, e, n, o, s, l) {
        var u = e.getModel('axisPointer'),
          c = {};
        a(
          [
            'type',
            'snap',
            'lineStyle',
            'shadowStyle',
            'label',
            'animation',
            'animationDurationUpdate',
            'animationEasingUpdate',
            'z',
          ],
          function(t) {
            c[t] = i.clone(u.get(t));
          },
        ),
          (c.snap = 'category' !== t.type && !!l),
          'cross' === u.get('type') && (c.type = 'line');
        var h = c.label || (c.label = {});
        if ((null == h.show && (h.show = !1), 'cross' === s)) {
          var d = u.get('label.show');
          if (((h.show = null == d || d), !l)) {
            var f = (c.lineStyle = u.get('crossStyle'));
            f && i.defaults(h, f.textStyle);
          }
        }
        return t.model.getModel('axisPointer', new r(c, n, o));
      }
      function c(t, e) {
        e.eachSeries(function(e) {
          var n = e.coordinateSystem,
            i = e.get('tooltip.trigger', !0),
            r = e.get('tooltip.show', !0);
          n &&
            'none' !== i &&
            !1 !== i &&
            'item' !== i &&
            !1 !== r &&
            !1 !== e.get('axisPointer.show', !0) &&
            a(t.coordSysAxesInfo[m(n.model)], function(t) {
              var i = t.axis;
              n.getAxis(i.dim) === i &&
                (t.seriesModels.push(e),
                null == t.seriesDataCount && (t.seriesDataCount = 0),
                (t.seriesDataCount += e.getData().count()));
            });
        }, this);
      }
      function h(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
          var a = t[r] || {};
          if (
            d(a[i + 'AxisId'], n.id) ||
            d(a[i + 'AxisIndex'], n.componentIndex) ||
            d(a[i + 'AxisName'], n.name)
          )
            return r;
        }
      }
      function d(t, e) {
        return 'all' === t || (i.isArray(t) && i.indexOf(t, e) >= 0) || t === e;
      }
      function f(t) {
        var e = p(t);
        if (e) {
          var n = e.axisPointerModel,
            i = e.axis.scale,
            r = n.option,
            a = n.get('status'),
            o = n.get('value');
          null != o && (o = i.parse(o));
          var s = v(n);
          null == a && (r.status = s ? 'show' : 'hide');
          var l = i.getExtent().slice();
          l[0] > l[1] && l.reverse(),
            (null == o || o > l[1]) && (o = l[1]),
            o < l[0] && (o = l[0]),
            (r.value = o),
            s && (r.status = e.axis.scale.isBlank() ? 'hide' : 'show');
        }
      }
      function p(t) {
        var e = (t.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo;
        return e && e.axesInfo[m(t)];
      }
      function g(t) {
        var e = p(t);
        return e && e.axisPointerModel;
      }
      function v(t) {
        return !!t.get('handle.show');
      }
      function m(t) {
        return t.type + '||' + t.id;
      }
      (e.collect = s),
        (e.fixValue = f),
        (e.getAxisInfo = p),
        (e.getAxisPointerModel = g),
        (e.makeKey = m);
    },
    zarK: function(t, e, n) {
      var i = n('YH21'),
        r = i.addEventListener,
        a = i.removeEventListener,
        o = i.normalizeEvent,
        s = i.getNativeEvent,
        l = n('bYtY'),
        u = n('H6uX'),
        c = n('ItGF'),
        h = 300,
        d = c.domSupported,
        f = (function() {
          var t = [
              'click',
              'dblclick',
              'mousewheel',
              'mouseout',
              'mouseup',
              'mousedown',
              'mousemove',
              'contextmenu',
            ],
            e = ['touchstart', 'touchend', 'touchmove'],
            n = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
            i = l.map(t, function(t) {
              var e = t.replace('mouse', 'pointer');
              return n.hasOwnProperty(e) ? e : t;
            });
          return { mouse: t, touch: e, pointer: i };
        })(),
        p = { mouse: ['mousemove', 'mouseup'], pointer: ['pointermove', 'pointerup'] };
      function g(t) {
        return 'mousewheel' === t && c.browser.firefox ? 'DOMMouseScroll' : t;
      }
      function v(t) {
        var e = t.pointerType;
        return 'pen' === e || 'touch' === e;
      }
      function m(t) {
        (t.touching = !0),
          null != t.touchTimer && (clearTimeout(t.touchTimer), (t.touchTimer = null)),
          (t.touchTimer = setTimeout(function() {
            (t.touching = !1), (t.touchTimer = null);
          }, 700));
      }
      function y(t) {
        t && (t.zrByTouch = !0);
      }
      function x(t, e) {
        return o(t.dom, new b(t, e), !0);
      }
      function _(t, e) {
        var n = e,
          i = !1;
        while (n && 9 !== n.nodeType && !(i = n.domBelongToZr || (n !== e && n === t.painterRoot)))
          n = n.parentNode;
        return i;
      }
      function b(t, e) {
        (this.type = e.type),
          (this.target = this.currentTarget = t.dom),
          (this.pointerType = e.pointerType),
          (this.clientX = e.clientX),
          (this.clientY = e.clientY);
      }
      var w = b.prototype;
      w.stopPropagation = w.stopImmediatePropagation = w.preventDefault = l.noop;
      var S = {
        mousedown: function(t) {
          (t = o(this.dom, t)),
            (this._mayPointerCapture = [t.zrX, t.zrY]),
            this.trigger('mousedown', t);
        },
        mousemove: function(t) {
          t = o(this.dom, t);
          var e = this._mayPointerCapture;
          !e || (t.zrX === e[0] && t.zrY === e[1]) || A(this, !0), this.trigger('mousemove', t);
        },
        mouseup: function(t) {
          (t = o(this.dom, t)), A(this, !1), this.trigger('mouseup', t);
        },
        mouseout: function(t) {
          (t = o(this.dom, t)), this._pointerCapturing && (t.zrEventControl = 'no_globalout');
          var e = t.toElement || t.relatedTarget;
          (t.zrIsToLocalDOM = _(this, e)), this.trigger('mouseout', t);
        },
        touchstart: function(t) {
          (t = o(this.dom, t)),
            y(t),
            (this._lastTouchMoment = new Date()),
            this.handler.processGesture(t, 'start'),
            S.mousemove.call(this, t),
            S.mousedown.call(this, t);
        },
        touchmove: function(t) {
          (t = o(this.dom, t)),
            y(t),
            this.handler.processGesture(t, 'change'),
            S.mousemove.call(this, t);
        },
        touchend: function(t) {
          (t = o(this.dom, t)),
            y(t),
            this.handler.processGesture(t, 'end'),
            S.mouseup.call(this, t),
            +new Date() - this._lastTouchMoment < h && S.click.call(this, t);
        },
        pointerdown: function(t) {
          S.mousedown.call(this, t);
        },
        pointermove: function(t) {
          v(t) || S.mousemove.call(this, t);
        },
        pointerup: function(t) {
          S.mouseup.call(this, t);
        },
        pointerout: function(t) {
          v(t) || S.mouseout.call(this, t);
        },
      };
      l.each(['click', 'mousewheel', 'dblclick', 'contextmenu'], function(t) {
        S[t] = function(e) {
          (e = o(this.dom, e)), this.trigger(t, e);
        };
      });
      var M = {
        pointermove: function(t) {
          v(t) || M.mousemove.call(this, t);
        },
        pointerup: function(t) {
          M.mouseup.call(this, t);
        },
        mousemove: function(t) {
          this.trigger('mousemove', t);
        },
        mouseup: function(t) {
          var e = this._pointerCapturing;
          A(this, !1),
            this.trigger('mouseup', t),
            e && ((t.zrEventControl = 'only_globalout'), this.trigger('mouseout', t));
        },
      };
      function T(t, e) {
        var n = e.domHandlers;
        c.pointerEventsSupported
          ? l.each(f.pointer, function(i) {
              I(e, i, function(e) {
                n[i].call(t, e);
              });
            })
          : (c.touchEventsSupported &&
              l.each(f.touch, function(i) {
                I(e, i, function(r) {
                  n[i].call(t, r), m(e);
                });
              }),
            l.each(f.mouse, function(i) {
              I(e, i, function(r) {
                (r = s(r)), e.touching || n[i].call(t, r);
              });
            }));
      }
      function C(t, e) {
        function n(n) {
          function i(i) {
            (i = s(i)), _(t, i.target) || ((i = x(t, i)), e.domHandlers[n].call(t, i));
          }
          I(e, n, i, { capture: !0 });
        }
        c.pointerEventsSupported
          ? l.each(p.pointer, n)
          : c.touchEventsSupported || l.each(p.mouse, n);
      }
      function I(t, e, n, i) {
        (t.mounted[e] = n), (t.listenerOpts[e] = i), r(t.domTarget, g(e), n, i);
      }
      function k(t) {
        var e = t.mounted;
        for (var n in e) e.hasOwnProperty(n) && a(t.domTarget, g(n), e[n], t.listenerOpts[n]);
        t.mounted = {};
      }
      function A(t, e) {
        if (((t._mayPointerCapture = null), d && t._pointerCapturing ^ e)) {
          t._pointerCapturing = e;
          var n = t._globalHandlerScope;
          e ? C(t, n) : k(n);
        }
      }
      function D(t, e) {
        (this.domTarget = t),
          (this.domHandlers = e),
          (this.mounted = {}),
          (this.listenerOpts = {}),
          (this.touchTimer = null),
          (this.touching = !1);
      }
      function O(t, e) {
        u.call(this),
          (this.dom = t),
          (this.painterRoot = e),
          (this._localHandlerScope = new D(t, S)),
          d && (this._globalHandlerScope = new D(document, M)),
          (this._pointerCapturing = !1),
          (this._mayPointerCapture = null),
          T(this, this._localHandlerScope);
      }
      var P = O.prototype;
      (P.dispose = function() {
        k(this._localHandlerScope), d && k(this._globalHandlerScope);
      }),
        (P.setCursor = function(t) {
          this.dom.style && (this.dom.style.cursor = t || 'default');
        }),
        l.mixin(O, u);
      var E = O;
      t.exports = E;
    },
    ziJE: function(t, e, n) {},
  },
]);
