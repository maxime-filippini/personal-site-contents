typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Be = 2, Ve = "[", Ye = "]", lt = {}, w = Symbol(), re = !1;
var se = Array.isArray, Ue = Array.prototype.indexOf, He = Array.from, pt = Object.keys, tt = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, We = Object.prototype, Ke = Array.prototype, ze = Object.getPrototypeOf, Wt = Object.isExtensible;
function ie(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ge() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const E = 2, Lt = 4, ue = 8, Et = 16, G = 32, q = 64, le = 128, N = 256, wt = 512, g = 1024, R = 2048, B = 4096, et = 8192, J = 16384, fe = 32768, Je = 65536, Kt = 1 << 17, Xe = 1 << 18, jt = 1 << 19, ae = 1 << 20, St = 1 << 21, qt = 1 << 22, U = 1 << 23, Nt = Symbol("$state"), Ze = Symbol("legacy props"), Bt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Qe = 3, zt = 8;
function tn() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function en() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function nn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function rn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function sn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function un() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ln() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vt(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let I = !1;
function _t(t) {
  I = t;
}
let m;
function at(t) {
  if (t === null)
    throw Vt(), lt;
  return m = t;
}
function oe() {
  return at(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Tt(m)
  );
}
function fn(t) {
  if (I) {
    if (/* @__PURE__ */ Tt(m) !== null)
      throw Vt(), lt;
    m = t;
  }
}
function ce(t) {
  return t === this.v;
}
function an(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function on(t) {
  return !an(t, this.v);
}
let cn = !1, S = null;
function yt(t) {
  S = t;
}
function he(t, e = !1, n) {
  S = {
    p: S,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function _e(t) {
  var e = (
    /** @type {ComponentContext} */
    S
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Nn(r);
  }
  return t !== void 0 && (e.x = t), S = e.p, t ?? /** @type {T} */
  {};
}
function ve() {
  return !0;
}
const hn = /* @__PURE__ */ new WeakMap();
function _n(t) {
  var e = d;
  if (e === null)
    return $.f |= U, t;
  if ((e.f & fe) === 0) {
    if ((e.f & le) === 0)
      throw !e.parent && t instanceof Error && de(t), t;
    e.b.error(t);
  } else
    Yt(t, e);
}
function Yt(t, e) {
  for (; e !== null; ) {
    if ((e.f & le) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && de(t), t;
}
function de(t) {
  const e = hn.get(t);
  e && (tt(t, "message", {
    value: e.message
  }), tt(t, "stack", {
    value: e.stack
  }));
}
let Ot = [], Ct = [];
function vn() {
  var t = Ot;
  Ot = [], ie(t);
}
function dn() {
  var t = Ct;
  Ct = [], ie(t);
}
function $n() {
  Ot.length > 0 && vn(), Ct.length > 0 && dn();
}
function pn() {
  for (var t = (
    /** @type {Effect} */
    d.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && tn(), t;
}
// @__NO_SIDE_EFFECTS__
function $e(t) {
  var e = E | R, n = $ !== null && ($.f & E) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return d === null || n !== null && (n.f & N) !== 0 ? e |= N : d.f |= jt, {
    ctx: S,
    deps: null,
    effects: null,
    equals: ce,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      w
    ),
    wv: 0,
    parent: n ?? d,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function wn(t, e) {
  let n = (
    /** @type {Effect | null} */
    d
  );
  n === null && en();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Ht(
    /** @type {V} */
    w
  ), u = null, l = !$;
  return Cn(() => {
    try {
      var f = t();
    } catch (c) {
      f = Promise.reject(c);
    }
    var a = () => f;
    i = u?.then(a, a) ?? Promise.resolve(f), u = i;
    var o = (
      /** @type {Batch} */
      p
    ), h = r.pending;
    l && (r.update_pending_count(1), h || o.increment());
    const _ = (c, v = void 0) => {
      u = null, h || o.activate(), v ? v !== Bt && (s.f |= U, Pt(s, v)) : ((s.f & U) !== 0 && (s.f ^= U), Pt(s, c)), l && (r.update_pending_count(-1), h || o.decrement()), ye();
    };
    if (i.then(_, (c) => _(null, c || "unknown")), o)
      return () => {
        queueMicrotask(() => o.neuter());
      };
  }), new Promise((f) => {
    function a(o) {
      function h() {
        o === i ? f(s) : a(i);
      }
      o.then(h, h);
    }
    a(i);
  });
}
function pe(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      L(
        /** @type {Effect} */
        e[n]
      );
  }
}
function yn(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & E) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ut(t) {
  var e, n = d;
  j(yn(t));
  try {
    pe(t), e = Fe(t);
  } finally {
    j(n);
  }
  return e;
}
function we(t) {
  var e = Ut(t);
  if (t.equals(e) || (t.v = e, t.wv = Pe()), !st)
    if (nt !== null)
      nt.set(t, t.v);
    else {
      var n = (M || (t.f & N) !== 0) && t.deps !== null ? B : g;
      T(t, n);
    }
}
function gn(t, e, n) {
  const r = $e;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = p, s = (
    /** @type {Effect} */
    d
  ), u = mn(), l = pn();
  Promise.all(e.map((f) => /* @__PURE__ */ wn(f))).then((f) => {
    i?.activate(), u();
    try {
      n([...t.map(r), ...f]);
    } catch (a) {
      (s.f & J) === 0 && Yt(a, s);
    }
    i?.deactivate(), ye();
  }).catch((f) => {
    l.error(f);
  });
}
function mn() {
  var t = d, e = $, n = S;
  return function() {
    j(t), O(e), yt(n);
  };
}
function ye() {
  j(null), O(null), yt(null);
}
const it = /* @__PURE__ */ new Set();
let p = null, nt = null, Gt = /* @__PURE__ */ new Set(), gt = [];
function ge() {
  const t = (
    /** @type {() => void} */
    gt.shift()
  );
  gt.length > 0 && queueMicrotask(ge), t();
}
let K = [], xt = null, At = !1, dt = !1;
class z {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #a = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #o = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #u = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #i = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #h = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    K = [];
    var n = null;
    if (it.size > 1) {
      n = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map();
      for (const [s, u] of this.current)
        n.set(s, { v: s.v, wv: s.wv }), s.v = u;
      for (const s of it)
        if (s !== this)
          for (const [u, l] of s.#e)
            n.has(u) || (n.set(u, { v: u.v, wv: u.wv }), u.v = l);
    }
    for (const s of e)
      this.#v(s);
    if (this.#s.length === 0 && this.#n === 0) {
      this.#_();
      var r = this.#i, i = this.#r;
      this.#i = [], this.#r = [], this.#l = [], p = null, Jt(r), Jt(i), p === null ? p = this : it.delete(this), this.#a?.resolve();
    } else
      this.#f(this.#i), this.#f(this.#r), this.#f(this.#l);
    if (n) {
      for (const [s, { v: u, wv: l }] of n)
        s.wv <= l && (s.v = u);
      nt = null;
    }
    for (const s of this.#s)
      ft(s);
    for (const s of this.#u)
      ft(s);
    this.#s = [], this.#u = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(e) {
    e.f ^= g;
    for (var n = e.first; n !== null; ) {
      var r = n.f, i = (r & (G | q)) !== 0, s = i && (r & g) !== 0, u = s || (r & et) !== 0 || this.skipped_effects.has(n);
      if (!u && n.fn !== null) {
        if (i)
          n.f ^= g;
        else if ((r & g) === 0)
          if ((r & Lt) !== 0)
            this.#r.push(n);
          else if ((r & qt) !== 0) {
            var l = n.b?.pending ? this.#u : this.#s;
            l.push(n);
          } else kt(n) && ((n.f & Et) !== 0 && this.#l.push(n), ft(n));
        var f = n.first;
        if (f !== null) {
          n = f;
          continue;
        }
      }
      var a = n.parent;
      for (n = n.next; n === null && a !== null; )
        n = a.next, a = a.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #f(e) {
    for (const n of e)
      ((n.f & R) !== 0 ? this.#c : this.#h).push(n), T(n, g);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.#e.has(e) || this.#e.set(e, n), this.current.set(e, e.v);
  }
  activate() {
    p = this;
  }
  deactivate() {
    p = null;
    for (const e of Gt)
      if (Gt.delete(e), e(), p !== null)
        break;
  }
  neuter() {
    this.#o = !0;
  }
  flush() {
    K.length > 0 ? be() : this.#_(), p === this && (this.#n === 0 && it.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #_() {
    if (!this.#o)
      for (const e of this.#t)
        e();
    this.#t.clear();
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    if (this.#n -= 1, this.#n === 0) {
      for (const e of this.#c)
        T(e, R), rt(e);
      for (const e of this.#h)
        T(e, B), rt(e);
      this.#i = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#a ??= Ge()).promise;
  }
  static ensure() {
    if (p === null) {
      const e = p = new z();
      it.add(p), dt || z.enqueue(() => {
        p === e && e.flush();
      });
    }
    return p;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    gt.length === 0 && queueMicrotask(ge), gt.unshift(e);
  }
}
function me(t) {
  var e = dt;
  dt = !0;
  try {
    for (var n; ; ) {
      if ($n(), K.length === 0 && (p?.flush(), K.length === 0))
        return xt = null, /** @type {T} */
        n;
      be();
    }
  } finally {
    dt = e;
  }
}
function be() {
  var t = Q;
  At = !0;
  try {
    var e = 0;
    for (Zt(!0); K.length > 0; ) {
      var n = z.ensure();
      if (e++ > 1e3) {
        var r, i;
        bn();
      }
      n.process(K), H.clear();
    }
  } finally {
    At = !1, Zt(t), xt = null;
  }
}
function bn() {
  try {
    nn();
  } catch (t) {
    Yt(t, xt);
  }
}
function Jt(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (J | et)) === 0 && kt(r)) {
        var i = p ? p.current.size : 0;
        if (ft(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Oe(r) : r.fn = null), p !== null && p.current.size > i && (r.f & ae) !== 0)
          break;
      }
    }
    for (; n < e; )
      rt(t[n++]);
  }
}
function rt(t) {
  for (var e = xt = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (At && e === d && (n & Et) !== 0)
      return;
    if ((n & (q | G)) !== 0) {
      if ((n & g) === 0) return;
      e.f ^= g;
    }
  }
  K.push(e);
}
const H = /* @__PURE__ */ new Map();
function Ht(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: ce,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function F(t, e) {
  const n = Ht(t);
  return jn(n), n;
}
// @__NO_SIDE_EFFECTS__
function En(t, e = !1, n = !0) {
  const r = Ht(t);
  return e || (r.equals = on), r;
}
function C(t, e, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Y || ($.f & Kt) !== 0) && ve() && ($.f & (E | Et | qt | Kt)) !== 0 && !P?.includes(t) && ln();
  let r = n ? ut(e) : e;
  return Pt(t, r);
}
function Pt(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    st ? H.set(t, e) : H.set(t, n), t.v = e;
    var r = z.ensure();
    r.capture(t, n), (t.f & E) !== 0 && ((t.f & R) !== 0 && Ut(
      /** @type {Derived} */
      t
    ), T(t, (t.f & N) === 0 ? g : B)), t.wv = Pe(), Ee(t, R), d !== null && (d.f & g) !== 0 && (d.f & (G | q)) === 0 && (x === null ? qn([t]) : x.push(t));
  }
  return e;
}
function Rt(t) {
  C(t, t.v + 1);
}
function Ee(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], u = s.f, l = (u & R) === 0;
      l && T(s, e), (u & E) !== 0 ? Ee(
        /** @type {Derived} */
        s,
        B
      ) : l && rt(
        /** @type {Effect} */
        s
      );
    }
}
function ut(t) {
  if (typeof t != "object" || t === null || Nt in t)
    return t;
  const e = ze(t);
  if (e !== We && e !== Ke)
    return t;
  var n = /* @__PURE__ */ new Map(), r = se(t), i = /* @__PURE__ */ F(0), s = W, u = (l) => {
    if (W === s)
      return l();
    var f = $, a = W;
    O(null), te(s);
    var o = l();
    return O(f), te(a), o;
  };
  return r && n.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, f, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && sn();
        var o = n.get(f);
        return o === void 0 ? o = u(() => {
          var h = /* @__PURE__ */ F(a.value);
          return n.set(f, h), h;
        }) : C(o, a.value, !0), !0;
      },
      deleteProperty(l, f) {
        var a = n.get(f);
        if (a === void 0) {
          if (f in l) {
            const o = u(() => /* @__PURE__ */ F(w));
            n.set(f, o), Rt(i);
          }
        } else
          C(a, w), Rt(i);
        return !0;
      },
      get(l, f, a) {
        if (f === Nt)
          return t;
        var o = n.get(f), h = f in l;
        if (o === void 0 && (!h || Z(l, f)?.writable) && (o = u(() => {
          var c = ut(h ? l[f] : w), v = /* @__PURE__ */ F(c);
          return v;
        }), n.set(f, o)), o !== void 0) {
          var _ = A(o);
          return _ === w ? void 0 : _;
        }
        return Reflect.get(l, f, a);
      },
      getOwnPropertyDescriptor(l, f) {
        var a = Reflect.getOwnPropertyDescriptor(l, f);
        if (a && "value" in a) {
          var o = n.get(f);
          o && (a.value = A(o));
        } else if (a === void 0) {
          var h = n.get(f), _ = h?.v;
          if (h !== void 0 && _ !== w)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return a;
      },
      has(l, f) {
        if (f === Nt)
          return !0;
        var a = n.get(f), o = a !== void 0 && a.v !== w || Reflect.has(l, f);
        if (a !== void 0 || d !== null && (!o || Z(l, f)?.writable)) {
          a === void 0 && (a = u(() => {
            var _ = o ? ut(l[f]) : w, c = /* @__PURE__ */ F(_);
            return c;
          }), n.set(f, a));
          var h = A(a);
          if (h === w)
            return !1;
        }
        return o;
      },
      set(l, f, a, o) {
        var h = n.get(f), _ = f in l;
        if (r && f === "length")
          for (var c = a; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var v = n.get(c + "");
            v !== void 0 ? C(v, w) : c in l && (v = u(() => /* @__PURE__ */ F(w)), n.set(c + "", v));
          }
        if (h === void 0)
          (!_ || Z(l, f)?.writable) && (h = u(() => /* @__PURE__ */ F(void 0)), C(h, ut(a)), n.set(f, h));
        else {
          _ = h.v !== w;
          var k = u(() => ut(a));
          C(h, k);
        }
        var ct = Reflect.getOwnPropertyDescriptor(l, f);
        if (ct?.set && ct.set.call(o, a), !_) {
          if (r && typeof f == "string") {
            var ht = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(f);
            Number.isInteger(D) && D >= ht.v && C(ht, D + 1);
          }
          Rt(i);
        }
        return !0;
      },
      ownKeys(l) {
        A(i);
        var f = Reflect.ownKeys(l).filter((h) => {
          var _ = n.get(h);
          return _ === void 0 || _.v !== w;
        });
        for (var [a, o] of n)
          o.v !== w && !(a in l) && f.push(a);
        return f;
      },
      setPrototypeOf() {
        un();
      }
    }
  );
}
var Xt, xe, Te, ke;
function Dt() {
  if (Xt === void 0) {
    Xt = window, xe = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Te = Z(e, "firstChild").get, ke = Z(e, "nextSibling").get, Wt(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Wt(n) && (n.__t = void 0);
  }
}
function Ft(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function mt(t) {
  return Te.call(t);
}
// @__NO_SIDE_EFFECTS__
function Tt(t) {
  return ke.call(t);
}
function xn(t, e) {
  if (!I)
    return /* @__PURE__ */ mt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(m)
  );
  if (n === null)
    n = m.appendChild(Ft());
  else if (n.nodeType !== Qe) {
    var r = Ft();
    return n?.before(r), at(r), r;
  }
  return at(n), n;
}
function Tn(t) {
  t.textContent = "";
}
function Ne(t) {
  var e = $, n = d;
  O(null), j(null);
  try {
    return t();
  } finally {
    O(e), j(n);
  }
}
function kn(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function V(t, e, n, r = !0) {
  var i = d;
  i !== null && (i.f & et) !== 0 && (t |= et);
  var s = {
    ctx: S,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | R,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      ft(s), s.f |= fe;
    } catch (f) {
      throw L(s), f;
    }
  else e !== null && rt(s);
  var u = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & jt) === 0;
  if (!u && r && (i !== null && kn(s, i), $ !== null && ($.f & E) !== 0 && (t & q) === 0)) {
    var l = (
      /** @type {Derived} */
      $
    );
    (l.effects ??= []).push(s);
  }
  return s;
}
function Nn(t) {
  return V(Lt | ae, t, !1);
}
function Rn(t) {
  z.ensure();
  const e = V(q, t, !0);
  return () => {
    L(e);
  };
}
function Sn(t) {
  z.ensure();
  const e = V(q, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? In(e, () => {
      L(e), r(void 0);
    }) : (L(e), r(void 0));
  });
}
function On(t) {
  return V(Lt, t, !1);
}
function Cn(t) {
  return V(qt | jt, t, !0);
}
function An(t, e = 0) {
  return V(ue | e, t, !0);
}
function Pn(t, e = [], n = []) {
  gn(e, n, (r) => {
    V(ue, () => t(...r.map(A)), !0);
  });
}
function Dn(t, e = !0) {
  return V(G, t, !0, e);
}
function Re(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = st, r = $;
    Qt(!0), O(null);
    try {
      e.call(null);
    } finally {
      Qt(n), O(r);
    }
  }
}
function Se(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ne(() => {
      i.abort(Bt);
    });
    var r = n.next;
    (n.f & q) !== 0 ? n.parent = null : L(n, e), n = r;
  }
}
function Fn(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & G) === 0 && L(e), e = n;
  }
}
function L(t, e = !0) {
  var n = !1;
  (e || (t.f & Xe) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Mn(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Se(t, e && !n), bt(t, 0), T(t, J);
  var r = t.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  Re(t);
  var i = t.parent;
  i !== null && i.first !== null && Oe(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Mn(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Tt(t)
    );
    t.remove(), t = n;
  }
}
function Oe(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function In(t, e) {
  var n = [];
  Ce(t, n, !0), Ln(n, () => {
    L(t), e && e();
  });
}
function Ln(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ce(t, e, n) {
  if ((t.f & et) === 0) {
    if (t.f ^= et, t.transitions !== null)
      for (const u of t.transitions)
        (u.is_global || n) && e.push(u);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Je) !== 0 || (r.f & G) !== 0;
      Ce(r, e, s ? n : !1), r = i;
    }
  }
}
let Q = !1;
function Zt(t) {
  Q = t;
}
let st = !1;
function Qt(t) {
  st = t;
}
let $ = null, Y = !1;
function O(t) {
  $ = t;
}
let d = null;
function j(t) {
  d = t;
}
let P = null;
function jn(t) {
  $ !== null && (P === null ? P = [t] : P.push(t));
}
let y = null, b = 0, x = null;
function qn(t) {
  x = t;
}
let Ae = 1, ot = 0, W = ot;
function te(t) {
  W = t;
}
let M = !1;
function Pe() {
  return ++Ae;
}
function kt(t) {
  var e = t.f;
  if ((e & R) !== 0)
    return !0;
  if ((e & B) !== 0) {
    var n = t.deps, r = (e & N) !== 0;
    if (n !== null) {
      var i, s, u = (e & wt) !== 0, l = r && d !== null && !M, f = n.length;
      if ((u || l) && (d === null || (d.f & J) === 0)) {
        var a = (
          /** @type {Derived} */
          t
        ), o = a.parent;
        for (i = 0; i < f; i++)
          s = n[i], (u || !s?.reactions?.includes(a)) && (s.reactions ??= []).push(a);
        u && (a.f ^= wt), l && o !== null && (o.f & N) === 0 && (a.f ^= N);
      }
      for (i = 0; i < f; i++)
        if (s = n[i], kt(
          /** @type {Derived} */
          s
        ) && we(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || d !== null && !M) && T(t, g);
  }
  return !1;
}
function De(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !P?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & E) !== 0 ? De(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? T(s, R) : (s.f & g) !== 0 && T(s, B), rt(
        /** @type {Effect} */
        s
      ));
    }
}
function Fe(t) {
  var e = y, n = b, r = x, i = $, s = M, u = P, l = S, f = Y, a = W, o = t.f;
  y = /** @type {null | Value[]} */
  null, b = 0, x = null, M = (o & N) !== 0 && (Y || !Q || $ === null), $ = (o & (G | q)) === 0 ? t : null, P = null, yt(t.ctx), Y = !1, W = ++ot, t.ac !== null && (Ne(() => {
    t.ac.abort(Bt);
  }), t.ac = null);
  try {
    t.f |= St;
    var h = (
      /** @type {Function} */
      t.fn
    ), _ = h(), c = t.deps;
    if (y !== null) {
      var v;
      if (bt(t, b), c !== null && b > 0)
        for (c.length = b + y.length, v = 0; v < y.length; v++)
          c[b + v] = y[v];
      else
        t.deps = c = y;
      if (!M || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (o & E) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = b; v < c.length; v++)
          (c[v].reactions ??= []).push(t);
    } else c !== null && b < c.length && (bt(t, b), c.length = b);
    if (ve() && x !== null && !Y && c !== null && (t.f & (E | B | R)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      x.length; v++)
        De(
          x[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ot++, x !== null && (r === null ? r = x : r.push(.../** @type {Source[]} */
    x))), (t.f & U) !== 0 && (t.f ^= U), _;
  } catch (k) {
    return _n(k);
  } finally {
    t.f ^= St, y = e, b = n, x = r, $ = i, M = s, P = u, yt(l), Y = f, W = a;
  }
}
function Bn(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Ue.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & E) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (y === null || !y.includes(e)) && (T(e, B), (e.f & (N | wt)) === 0 && (e.f ^= wt), pe(
    /** @type {Derived} **/
    e
  ), bt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function bt(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Bn(t, n[r]);
}
function ft(t) {
  var e = t.f;
  if ((e & J) === 0) {
    T(t, g);
    var n = d, r = Q;
    d = t, Q = !0;
    try {
      (e & Et) !== 0 ? Fn(t) : Se(t), Re(t);
      var i = Fe(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Ae;
      var s;
      re && cn && (t.f & R) !== 0 && t.deps;
    } finally {
      Q = r, d = n;
    }
  }
}
function A(t) {
  var e = t.f, n = (e & E) !== 0;
  if ($ !== null && !Y) {
    var r = d !== null && (d.f & J) !== 0;
    if (!r && !P?.includes(t)) {
      var i = $.deps;
      if (($.f & St) !== 0)
        t.rv < ot && (t.rv = ot, y === null && i !== null && i[b] === t ? b++ : y === null ? y = [t] : (!M || !y.includes(t)) && y.push(t));
      else {
        ($.deps ??= []).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [$] : s.includes($) || s.push($);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var u = (
      /** @type {Derived} */
      t
    ), l = u.parent;
    l !== null && (l.f & N) === 0 && (u.f ^= N);
  }
  if (st) {
    if (H.has(t))
      return H.get(t);
    if (n) {
      u = /** @type {Derived} */
      t;
      var f = u.v;
      return ((u.f & g) === 0 && u.reactions !== null || Me(u)) && (f = Ut(u)), H.set(u, f), f;
    }
  } else if (n) {
    if (u = /** @type {Derived} */
    t, nt?.has(u))
      return nt.get(u);
    kt(u) && we(u);
  }
  if ((t.f & U) !== 0)
    throw t.v;
  return t.v;
}
function Me(t) {
  if (t.v === w) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (H.has(e) || (e.f & E) !== 0 && Me(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
const Vn = -7169;
function T(t, e) {
  t.f = t.f & Vn | e;
}
const Yn = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Set();
let ne = null;
function vt(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  ne = t;
  var u = 0, l = ne === t && t.__root;
  if (l) {
    var f = i.indexOf(l);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var a = i.indexOf(e);
    if (a === -1)
      return;
    f <= a && (u = f);
  }
  if (s = /** @type {Element} */
  i[u] || t.target, s !== e) {
    tt(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var o = $, h = d;
    O(null), j(null);
    try {
      for (var _, c = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var k = s["__" + r];
          if (k != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (se(k)) {
              var [ct, ...ht] = k;
              ct.apply(s, [t, ...ht]);
            } else
              k.call(s, t);
        } catch (D) {
          _ ? c.push(D) : _ = D;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        s = v;
      }
      if (_) {
        for (let D of c)
          queueMicrotask(() => {
            throw D;
          });
        throw _;
      }
    } finally {
      t.__root = e, delete t.currentTarget, O(o), j(h);
    }
  }
}
function Un(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Mt(t, e) {
  var n = (
    /** @type {Effect} */
    d
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Hn(t, e) {
  var n = (e & Be) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (I)
      return Mt(m, null), m;
    r === void 0 && (r = Un(i ? t : "<!>" + t), r = /** @type {Node} */
    /* @__PURE__ */ mt(r));
    var s = (
      /** @type {TemplateNode} */
      n || xe ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Mt(s, s), s;
  };
}
function Ie(t, e) {
  if (I) {
    d.nodes_end = m, oe();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Wn = ["touchstart", "touchmove"];
function Kn(t) {
  return Wn.includes(t);
}
function zn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Le(t, e) {
  return je(t, e);
}
function Gn(t, e) {
  Dt(), e.intro = e.intro ?? !1;
  const n = e.target, r = I, i = m;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(n)
    ); s && (s.nodeType !== zt || /** @type {Comment} */
    s.data !== Ve); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Tt(s);
    if (!s)
      throw lt;
    _t(!0), at(
      /** @type {Comment} */
      s
    ), oe();
    const u = je(t, { ...e, anchor: s });
    if (m === null || m.nodeType !== zt || /** @type {Comment} */
    m.data !== Ye)
      throw Vt(), lt;
    return _t(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u instanceof Error && u.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw u;
    return u !== lt && console.warn("Failed to hydrate: ", u), e.recover === !1 && rn(), Dt(), Tn(n), _t(!1), Le(t, e);
  } finally {
    _t(r), at(i);
  }
}
const X = /* @__PURE__ */ new Map();
function je(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: u = !0 }) {
  Dt();
  var l = /* @__PURE__ */ new Set(), f = (h) => {
    for (var _ = 0; _ < h.length; _++) {
      var c = h[_];
      if (!l.has(c)) {
        l.add(c);
        var v = Kn(c);
        e.addEventListener(c, vt, { passive: v });
        var k = X.get(c);
        k === void 0 ? (document.addEventListener(c, vt, { passive: v }), X.set(c, 1)) : X.set(c, k + 1);
      }
    }
  };
  f(He(Yn)), ee.add(f);
  var a = void 0, o = Sn(() => {
    var h = n ?? e.appendChild(Ft());
    return Dn(() => {
      if (s) {
        he({});
        var _ = (
          /** @type {ComponentContext} */
          S
        );
        _.c = s;
      }
      i && (r.$$events = i), I && Mt(
        /** @type {TemplateNode} */
        h,
        null
      ), a = t(h, r) || {}, I && (d.nodes_end = m), s && _e();
    }), () => {
      for (var _ of l) {
        e.removeEventListener(_, vt);
        var c = (
          /** @type {number} */
          X.get(_)
        );
        --c === 0 ? (document.removeEventListener(_, vt), X.delete(_)) : X.set(_, c);
      }
      ee.delete(f), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return It.set(a, o), a;
}
let It = /* @__PURE__ */ new WeakMap();
function Jn(t, e) {
  const n = It.get(t);
  return n ? (It.delete(t), n(e)) : Promise.resolve();
}
function Xn(t, e) {
  On(() => {
    var n = t.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function Zn(t, e, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, i = /** @type {V} */
  r), i), l;
  l = /** @type {V} */
  t[e], l === void 0 && r !== void 0 && (l = u());
  var f;
  f = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? u() : (s = !0, _);
  };
  var a = !1, o = /* @__PURE__ */ $e(() => (a = !1, f())), h = (
    /** @type {Effect} */
    d
  );
  return (
    /** @type {() => V} */
    (function(_, c) {
      if (arguments.length > 0) {
        const v = c ? A(o) : _;
        return C(o, v), a = !0, i !== void 0 && (i = v), _;
      }
      return st && a || (h.f & J) !== 0 ? o.v : A(o);
    })
  );
}
function Qn(t) {
  return new tr(t);
}
class tr {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    var n = /* @__PURE__ */ new Map(), r = (s, u) => {
      var l = /* @__PURE__ */ En(u, !1, !1);
      return n.set(s, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, u) {
          return A(n.get(u) ?? r(u, Reflect.get(s, u)));
        },
        has(s, u) {
          return u === Ze ? !0 : (A(n.get(u) ?? r(u, Reflect.get(s, u))), Reflect.has(s, u));
        },
        set(s, u, l) {
          return C(n.get(u) ?? r(u, l), l), Reflect.set(s, u, l);
        }
      }
    );
    this.#t = (e.hydrate ? Gn : Le)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && me(), this.#e = i.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || tt(this, s, {
        get() {
          return this.#t[s];
        },
        /** @param {any} value */
        set(u) {
          this.#t[s] = u;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#t.$destroy = () => {
      Jn(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    this.#t.$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    this.#e[e] = this.#e[e] || [];
    const r = (...i) => n.call(this, ...i);
    return this.#e[e].push(r), () => {
      this.#e[e] = this.#e[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let qe;
typeof HTMLElement == "function" && (qe = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, e, n) {
    super(), this.$$ctor = t, this.$$s = e, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const r = this.$$c.$on(t, e);
      this.$$l_u.set(e, r);
    }
    super.addEventListener(t, e, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, n) {
    if (super.removeEventListener(t, e, n), this.$$c) {
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (i) => {
          const s = document.createElement("slot");
          r !== "default" && (s.name = r), Ie(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = er(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = $t(i, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Qn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Rn(() => {
        An(() => {
          this.$$r = !0;
          for (const r of pt(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const i = $t(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const s = this.$$c.$on(r, i);
          this.$$l_u.set(i, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, e, n) {
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = $t(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return pt(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function $t(t, e, n, r) {
  const i = n[t]?.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function er(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function nr(t, e, n, r, i, s) {
  let u = class extends qe {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return pt(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return pt(e).forEach((l) => {
    tt(u.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(f) {
        f = $t(l, f, e), this.$$d[l] = f;
        var a = this.$$c;
        if (a) {
          var o = Z(a, l)?.get;
          o ? a[l] = f : a.$set({ [l]: f });
        }
      }
    });
  }), r.forEach((l) => {
    tt(u.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), t.element = /** @type {any} */
  u, u;
}
var rr = /* @__PURE__ */ Hn('<button class="custom-button svelte-o1ty34"> </button>');
const sr = {
  hash: "svelte-o1ty34",
  code: ".custom-button.svelte-o1ty34 {background:#007acc;color:white;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;}.custom-button.svelte-o1ty34:hover {background:#005a9e;}"
};
function ir(t, e) {
  he(e, !0), Xn(t, sr);
  let n = Zn(e, "text", 7, "Click me");
  var r = rr(), i = xn(r);
  return fn(r), Pn(() => zn(i, n())), Ie(t, r), _e({
    get text() {
      return n();
    },
    set text(s = "Click me") {
      n(s), me();
    }
  });
}
customElements.define("my-button", nr(ir, { text: {} }, [], [], !0));
export {
  ir as default
};
