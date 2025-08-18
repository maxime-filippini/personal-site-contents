typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Le = 2, je = "[", qe = "]", lt = {}, w = Symbol(), ne = !1;
var re = Array.isArray, Be = Array.prototype.indexOf, Ve = Array.from, $t = Object.keys, X = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, Ye = Object.prototype, Ue = Array.prototype, He = Object.getPrototypeOf, Wt = Object.isExtensible;
function se(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function We() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const E = 2, Lt = 4, ie = 8, Et = 16, G = 32, q = 64, le = 128, R = 256, pt = 512, g = 1024, S = 2048, B = 4096, tt = 8192, rt = 16384, ue = 32768, Ke = 65536, Kt = 1 << 17, ze = 1 << 18, jt = 1 << 19, fe = 1 << 20, Nt = 1 << 21, qt = 1 << 22, U = 1 << 23, Rt = Symbol("$state"), Ge = Symbol("legacy props"), Bt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), zt = 8;
function Je() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Ze() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Qe() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xe() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function tn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function en() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function nn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vt(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let I = !1;
function ht(t) {
  I = t;
}
let m;
function wt(t) {
  if (t === null)
    throw Vt(), lt;
  return m = t;
}
function oe() {
  return wt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt(m)
  );
}
function rn(t) {
  if (I) {
    if (/* @__PURE__ */ kt(m) !== null)
      throw Vt(), lt;
    m = t;
  }
}
function ae(t) {
  return t === this.v;
}
function sn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ln(t) {
  return !sn(t, this.v);
}
let un = !1, O = null;
function yt(t) {
  O = t;
}
function fn(t, e = !1, n) {
  O = {
    p: O,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function on(t) {
  var e = (
    /** @type {ComponentContext} */
    O
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Rn(r);
  }
  return O = e.p, /** @type {T} */
  {};
}
function ce() {
  return !0;
}
const an = /* @__PURE__ */ new WeakMap();
function cn(t) {
  var e = d;
  if (e === null)
    return $.f |= U, t;
  if ((e.f & ue) === 0) {
    if ((e.f & le) === 0)
      throw !e.parent && t instanceof Error && he(t), t;
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
  throw t instanceof Error && he(t), t;
}
function he(t) {
  const e = an.get(t);
  e && (X(t, "message", {
    value: e.message
  }), X(t, "stack", {
    value: e.stack
  }));
}
let Ot = [], Ct = [];
function hn() {
  var t = Ot;
  Ot = [], se(t);
}
function _n() {
  var t = Ct;
  Ct = [], se(t);
}
function vn() {
  Ot.length > 0 && hn(), Ct.length > 0 && _n();
}
function dn() {
  for (var t = (
    /** @type {Effect} */
    d.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && Je(), t;
}
// @__NO_SIDE_EFFECTS__
function $n(t) {
  var e = E | S, n = $ !== null && ($.f & E) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return d === null || n !== null && (n.f & R) !== 0 ? e |= R : d.f |= jt, {
    ctx: O,
    deps: null,
    effects: null,
    equals: ae,
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
function pn(t, e) {
  let n = (
    /** @type {Effect | null} */
    d
  );
  n === null && Ze();
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
  ), l = null, u = !$;
  return Cn(() => {
    try {
      var f = t();
    } catch (c) {
      f = Promise.reject(c);
    }
    var o = () => f;
    i = l?.then(o, o) ?? Promise.resolve(f), l = i;
    var a = (
      /** @type {Batch} */
      p
    ), h = r.pending;
    u && (r.update_pending_count(1), h || a.increment());
    const _ = (c, v = void 0) => {
      l = null, h || a.activate(), v ? v !== Bt && (s.f |= U, Pt(s, v)) : ((s.f & U) !== 0 && (s.f ^= U), Pt(s, c)), u && (r.update_pending_count(-1), h || a.decrement()), de();
    };
    if (i.then(_, (c) => _(null, c || "unknown")), a)
      return () => {
        queueMicrotask(() => a.neuter());
      };
  }), new Promise((f) => {
    function o(a) {
      function h() {
        a === i ? f(s) : o(i);
      }
      a.then(h, h);
    }
    o(i);
  });
}
function _e(t) {
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
function wn(t) {
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
  j(wn(t));
  try {
    _e(t), e = Ce(t);
  } finally {
    j(n);
  }
  return e;
}
function ve(t) {
  var e = Ut(t);
  if (t.equals(e) || (t.v = e, t.wv = Ne()), !ot)
    if (et !== null)
      et.set(t, t.v);
    else {
      var n = (M || (t.f & R) !== 0) && t.deps !== null ? B : g;
      k(t, n);
    }
}
function yn(t, e, n) {
  const r = $n;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = p, s = (
    /** @type {Effect} */
    d
  ), l = gn(), u = dn();
  Promise.all(e.map((f) => /* @__PURE__ */ pn(f))).then((f) => {
    i?.activate(), l();
    try {
      n([...t.map(r), ...f]);
    } catch (o) {
      (s.f & rt) === 0 && Yt(o, s);
    }
    i?.deactivate(), de();
  }).catch((f) => {
    u.error(f);
  });
}
function gn() {
  var t = d, e = $, n = O;
  return function() {
    j(t), C(e), yt(n);
  };
}
function de() {
  j(null), C(null), yt(null);
}
const st = /* @__PURE__ */ new Set();
let p = null, et = null, Gt = /* @__PURE__ */ new Set(), gt = [];
function $e() {
  const t = (
    /** @type {() => void} */
    gt.shift()
  );
  gt.length > 0 && queueMicrotask($e), t();
}
let K = [], xt = null, At = !1, vt = !1;
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
  #o = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #a = !1;
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
  #l = [];
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
  #u = [];
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
    if (st.size > 1) {
      n = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map();
      for (const [s, l] of this.current)
        n.set(s, { v: s.v, wv: s.wv }), s.v = l;
      for (const s of st)
        if (s !== this)
          for (const [l, u] of s.#e)
            n.has(l) || (n.set(l, { v: l.v, wv: l.wv }), l.v = u);
    }
    for (const s of e)
      this.#v(s);
    if (this.#s.length === 0 && this.#n === 0) {
      this.#_();
      var r = this.#i, i = this.#r;
      this.#i = [], this.#r = [], this.#u = [], p = null, Jt(r), Jt(i), p === null ? p = this : st.delete(this), this.#o?.resolve();
    } else
      this.#f(this.#i), this.#f(this.#r), this.#f(this.#u);
    if (n) {
      for (const [s, { v: l, wv: u }] of n)
        s.wv <= u && (s.v = l);
      et = null;
    }
    for (const s of this.#s)
      ut(s);
    for (const s of this.#l)
      ut(s);
    this.#s = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(e) {
    e.f ^= g;
    for (var n = e.first; n !== null; ) {
      var r = n.f, i = (r & (G | q)) !== 0, s = i && (r & g) !== 0, l = s || (r & tt) !== 0 || this.skipped_effects.has(n);
      if (!l && n.fn !== null) {
        if (i)
          n.f ^= g;
        else if ((r & g) === 0)
          if ((r & Lt) !== 0)
            this.#r.push(n);
          else if ((r & qt) !== 0) {
            var u = n.b?.pending ? this.#l : this.#s;
            u.push(n);
          } else Tt(n) && ((n.f & Et) !== 0 && this.#u.push(n), ut(n));
        var f = n.first;
        if (f !== null) {
          n = f;
          continue;
        }
      }
      var o = n.parent;
      for (n = n.next; n === null && o !== null; )
        n = o.next, o = o.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #f(e) {
    for (const n of e)
      ((n.f & S) !== 0 ? this.#c : this.#h).push(n), k(n, g);
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
    this.#a = !0;
  }
  flush() {
    K.length > 0 ? pe() : this.#_(), p === this && (this.#n === 0 && st.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #_() {
    if (!this.#a)
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
        k(e, S), nt(e);
      for (const e of this.#h)
        k(e, B), nt(e);
      this.#i = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#o ??= We()).promise;
  }
  static ensure() {
    if (p === null) {
      const e = p = new z();
      st.add(p), vt || z.enqueue(() => {
        p === e && e.flush();
      });
    }
    return p;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    gt.length === 0 && queueMicrotask($e), gt.unshift(e);
  }
}
function mn(t) {
  var e = vt;
  vt = !0;
  try {
    for (var n; ; ) {
      if (vn(), K.length === 0 && (p?.flush(), K.length === 0))
        return xt = null, /** @type {T} */
        n;
      pe();
    }
  } finally {
    vt = e;
  }
}
function pe() {
  var t = Q;
  At = !0;
  try {
    var e = 0;
    for (Qt(!0); K.length > 0; ) {
      var n = z.ensure();
      if (e++ > 1e3) {
        var r, i;
        bn();
      }
      n.process(K), H.clear();
    }
  } finally {
    At = !1, Qt(t), xt = null;
  }
}
function bn() {
  try {
    Qe();
  } catch (t) {
    Yt(t, xt);
  }
}
function Jt(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (rt | tt)) === 0 && Tt(r)) {
        var i = p ? p.current.size : 0;
        if (ut(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Te(r) : r.fn = null), p !== null && p.current.size > i && (r.f & fe) !== 0)
          break;
      }
    }
    for (; n < e; )
      nt(t[n++]);
  }
}
function nt(t) {
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
    equals: ae,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function A(t, e) {
  const n = Ht(t);
  return jn(n), n;
}
// @__NO_SIDE_EFFECTS__
function En(t, e = !1, n = !0) {
  const r = Ht(t);
  return e || (r.equals = ln), r;
}
function P(t, e, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Y || ($.f & Kt) !== 0) && ce() && ($.f & (E | Et | qt | Kt)) !== 0 && !D?.includes(t) && nn();
  let r = n ? it(e) : e;
  return Pt(t, r);
}
function Pt(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ot ? H.set(t, e) : H.set(t, n), t.v = e;
    var r = z.ensure();
    r.capture(t, n), (t.f & E) !== 0 && ((t.f & S) !== 0 && Ut(
      /** @type {Derived} */
      t
    ), k(t, (t.f & R) === 0 ? g : B)), t.wv = Ne(), we(t, S), d !== null && (d.f & g) !== 0 && (d.f & (G | q)) === 0 && (x === null ? qn([t]) : x.push(t));
  }
  return e;
}
function St(t) {
  P(t, t.v + 1);
}
function we(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], l = s.f, u = (l & S) === 0;
      u && k(s, e), (l & E) !== 0 ? we(
        /** @type {Derived} */
        s,
        B
      ) : u && nt(
        /** @type {Effect} */
        s
      );
    }
}
function it(t) {
  if (typeof t != "object" || t === null || Rt in t)
    return t;
  const e = He(t);
  if (e !== Ye && e !== Ue)
    return t;
  var n = /* @__PURE__ */ new Map(), r = re(t), i = /* @__PURE__ */ A(0), s = W, l = (u) => {
    if (W === s)
      return u();
    var f = $, o = W;
    C(null), te(s);
    var a = u();
    return C(f), te(o), a;
  };
  return r && n.set("length", /* @__PURE__ */ A(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, f, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && tn();
        var a = n.get(f);
        return a === void 0 ? a = l(() => {
          var h = /* @__PURE__ */ A(o.value);
          return n.set(f, h), h;
        }) : P(a, o.value, !0), !0;
      },
      deleteProperty(u, f) {
        var o = n.get(f);
        if (o === void 0) {
          if (f in u) {
            const a = l(() => /* @__PURE__ */ A(w));
            n.set(f, a), St(i);
          }
        } else
          P(o, w), St(i);
        return !0;
      },
      get(u, f, o) {
        if (f === Rt)
          return t;
        var a = n.get(f), h = f in u;
        if (a === void 0 && (!h || Z(u, f)?.writable) && (a = l(() => {
          var c = it(h ? u[f] : w), v = /* @__PURE__ */ A(c);
          return v;
        }), n.set(f, a)), a !== void 0) {
          var _ = N(a);
          return _ === w ? void 0 : _;
        }
        return Reflect.get(u, f, o);
      },
      getOwnPropertyDescriptor(u, f) {
        var o = Reflect.getOwnPropertyDescriptor(u, f);
        if (o && "value" in o) {
          var a = n.get(f);
          a && (o.value = N(a));
        } else if (o === void 0) {
          var h = n.get(f), _ = h?.v;
          if (h !== void 0 && _ !== w)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return o;
      },
      has(u, f) {
        if (f === Rt)
          return !0;
        var o = n.get(f), a = o !== void 0 && o.v !== w || Reflect.has(u, f);
        if (o !== void 0 || d !== null && (!a || Z(u, f)?.writable)) {
          o === void 0 && (o = l(() => {
            var _ = a ? it(u[f]) : w, c = /* @__PURE__ */ A(_);
            return c;
          }), n.set(f, o));
          var h = N(o);
          if (h === w)
            return !1;
        }
        return a;
      },
      set(u, f, o, a) {
        var h = n.get(f), _ = f in u;
        if (r && f === "length")
          for (var c = o; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var v = n.get(c + "");
            v !== void 0 ? P(v, w) : c in u && (v = l(() => /* @__PURE__ */ A(w)), n.set(c + "", v));
          }
        if (h === void 0)
          (!_ || Z(u, f)?.writable) && (h = l(() => /* @__PURE__ */ A(void 0)), P(h, it(o)), n.set(f, h));
        else {
          _ = h.v !== w;
          var T = l(() => it(o));
          P(h, T);
        }
        var at = Reflect.getOwnPropertyDescriptor(u, f);
        if (at?.set && at.set.call(a, o), !_) {
          if (r && typeof f == "string") {
            var ct = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(f);
            Number.isInteger(F) && F >= ct.v && P(ct, F + 1);
          }
          St(i);
        }
        return !0;
      },
      ownKeys(u) {
        N(i);
        var f = Reflect.ownKeys(u).filter((h) => {
          var _ = n.get(h);
          return _ === void 0 || _.v !== w;
        });
        for (var [o, a] of n)
          a.v !== w && !(o in u) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        en();
      }
    }
  );
}
var Zt, ye, ge, me;
function Dt() {
  if (Zt === void 0) {
    Zt = window, ye = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ge = Z(e, "firstChild").get, me = Z(e, "nextSibling").get, Wt(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Wt(n) && (n.__t = void 0);
  }
}
function be(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function mt(t) {
  return ge.call(t);
}
// @__NO_SIDE_EFFECTS__
function kt(t) {
  return me.call(t);
}
function xn(t, e) {
  if (!I)
    return /* @__PURE__ */ mt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(m)
  );
  return n === null && (n = m.appendChild(be())), wt(n), n;
}
function kn(t) {
  t.textContent = "";
}
function Ee(t) {
  var e = $, n = d;
  C(null), j(null);
  try {
    return t();
  } finally {
    C(e), j(n);
  }
}
function Tn(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function V(t, e, n, r = !0) {
  var i = d;
  i !== null && (i.f & tt) !== 0 && (t |= tt);
  var s = {
    ctx: O,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | S,
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
      ut(s), s.f |= ue;
    } catch (f) {
      throw L(s), f;
    }
  else e !== null && nt(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & jt) === 0;
  if (!l && r && (i !== null && Tn(s, i), $ !== null && ($.f & E) !== 0 && (t & q) === 0)) {
    var u = (
      /** @type {Derived} */
      $
    );
    (u.effects ??= []).push(s);
  }
  return s;
}
function Rn(t) {
  return V(Lt | fe, t, !1);
}
function Sn(t) {
  z.ensure();
  const e = V(q, t, !0);
  return () => {
    L(e);
  };
}
function Nn(t) {
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
  return V(ie | e, t, !0);
}
function Pn(t, e = [], n = []) {
  yn(e, n, (r) => {
    V(ie, () => t(...r.map(N)), !0);
  });
}
function Dn(t, e = !0) {
  return V(G, t, !0, e);
}
function xe(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ot, r = $;
    Xt(!0), C(null);
    try {
      e.call(null);
    } finally {
      Xt(n), C(r);
    }
  }
}
function ke(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ee(() => {
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
  (e || (t.f & ze) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Mn(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ke(t, e && !n), bt(t, 0), k(t, rt);
  var r = t.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  xe(t);
  var i = t.parent;
  i !== null && i.first !== null && Te(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Mn(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(t)
    );
    t.remove(), t = n;
  }
}
function Te(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function In(t, e) {
  var n = [];
  Re(t, n, !0), Ln(n, () => {
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
function Re(t, e, n) {
  if ((t.f & tt) === 0) {
    if (t.f ^= tt, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || n) && e.push(l);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Ke) !== 0 || (r.f & G) !== 0;
      Re(r, e, s ? n : !1), r = i;
    }
  }
}
let Q = !1;
function Qt(t) {
  Q = t;
}
let ot = !1;
function Xt(t) {
  ot = t;
}
let $ = null, Y = !1;
function C(t) {
  $ = t;
}
let d = null;
function j(t) {
  d = t;
}
let D = null;
function jn(t) {
  $ !== null && (D === null ? D = [t] : D.push(t));
}
let y = null, b = 0, x = null;
function qn(t) {
  x = t;
}
let Se = 1, ft = 0, W = ft;
function te(t) {
  W = t;
}
let M = !1;
function Ne() {
  return ++Se;
}
function Tt(t) {
  var e = t.f;
  if ((e & S) !== 0)
    return !0;
  if ((e & B) !== 0) {
    var n = t.deps, r = (e & R) !== 0;
    if (n !== null) {
      var i, s, l = (e & pt) !== 0, u = r && d !== null && !M, f = n.length;
      if ((l || u) && (d === null || (d.f & rt) === 0)) {
        var o = (
          /** @type {Derived} */
          t
        ), a = o.parent;
        for (i = 0; i < f; i++)
          s = n[i], (l || !s?.reactions?.includes(o)) && (s.reactions ??= []).push(o);
        l && (o.f ^= pt), u && a !== null && (a.f & R) === 0 && (o.f ^= R);
      }
      for (i = 0; i < f; i++)
        if (s = n[i], Tt(
          /** @type {Derived} */
          s
        ) && ve(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || d !== null && !M) && k(t, g);
  }
  return !1;
}
function Oe(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !D?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & E) !== 0 ? Oe(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? k(s, S) : (s.f & g) !== 0 && k(s, B), nt(
        /** @type {Effect} */
        s
      ));
    }
}
function Ce(t) {
  var e = y, n = b, r = x, i = $, s = M, l = D, u = O, f = Y, o = W, a = t.f;
  y = /** @type {null | Value[]} */
  null, b = 0, x = null, M = (a & R) !== 0 && (Y || !Q || $ === null), $ = (a & (G | q)) === 0 ? t : null, D = null, yt(t.ctx), Y = !1, W = ++ft, t.ac !== null && (Ee(() => {
    t.ac.abort(Bt);
  }), t.ac = null);
  try {
    t.f |= Nt;
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
      (a & E) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = b; v < c.length; v++)
          (c[v].reactions ??= []).push(t);
    } else c !== null && b < c.length && (bt(t, b), c.length = b);
    if (ce() && x !== null && !Y && c !== null && (t.f & (E | B | S)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      x.length; v++)
        Oe(
          x[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ft++, x !== null && (r === null ? r = x : r.push(.../** @type {Source[]} */
    x))), (t.f & U) !== 0 && (t.f ^= U), _;
  } catch (T) {
    return cn(T);
  } finally {
    t.f ^= Nt, y = e, b = n, x = r, $ = i, M = s, D = l, yt(u), Y = f, W = o;
  }
}
function Bn(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Be.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & E) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (y === null || !y.includes(e)) && (k(e, B), (e.f & (R | pt)) === 0 && (e.f ^= pt), _e(
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
function ut(t) {
  var e = t.f;
  if ((e & rt) === 0) {
    k(t, g);
    var n = d, r = Q;
    d = t, Q = !0;
    try {
      (e & Et) !== 0 ? Fn(t) : ke(t), xe(t);
      var i = Ce(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Se;
      var s;
      ne && un && (t.f & S) !== 0 && t.deps;
    } finally {
      Q = r, d = n;
    }
  }
}
function N(t) {
  var e = t.f, n = (e & E) !== 0;
  if ($ !== null && !Y) {
    var r = d !== null && (d.f & rt) !== 0;
    if (!r && !D?.includes(t)) {
      var i = $.deps;
      if (($.f & Nt) !== 0)
        t.rv < ft && (t.rv = ft, y === null && i !== null && i[b] === t ? b++ : y === null ? y = [t] : (!M || !y.includes(t)) && y.push(t));
      else {
        ($.deps ??= []).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [$] : s.includes($) || s.push($);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var l = (
      /** @type {Derived} */
      t
    ), u = l.parent;
    u !== null && (u.f & R) === 0 && (l.f ^= R);
  }
  if (ot) {
    if (H.has(t))
      return H.get(t);
    if (n) {
      l = /** @type {Derived} */
      t;
      var f = l.v;
      return ((l.f & g) === 0 && l.reactions !== null || Ae(l)) && (f = Ut(l)), H.set(l, f), f;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    t, et?.has(l))
      return et.get(l);
    Tt(l) && ve(l);
  }
  if ((t.f & U) !== 0)
    throw t.v;
  return t.v;
}
function Ae(t) {
  if (t.v === w) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (H.has(e) || (e.f & E) !== 0 && Ae(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
const Vn = -7169;
function k(t, e) {
  t.f = t.f & Vn | e;
}
const Pe = /* @__PURE__ */ new Set(), Ft = /* @__PURE__ */ new Set();
function Yn(t) {
  for (var e = 0; e < t.length; e++)
    Pe.add(t[e]);
  for (var n of Ft)
    n(t);
}
let ee = null;
function _t(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  ee = t;
  var l = 0, u = ee === t && t.__root;
  if (u) {
    var f = i.indexOf(u);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = i.indexOf(e);
    if (o === -1)
      return;
    f <= o && (l = f);
  }
  if (s = /** @type {Element} */
  i[l] || t.target, s !== e) {
    X(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var a = $, h = d;
    C(null), j(null);
    try {
      for (var _, c = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var T = s["__" + r];
          if (T != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (re(T)) {
              var [at, ...ct] = T;
              at.apply(s, [t, ...ct]);
            } else
              T.call(s, t);
        } catch (F) {
          _ ? c.push(F) : _ = F;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        s = v;
      }
      if (_) {
        for (let F of c)
          queueMicrotask(() => {
            throw F;
          });
        throw _;
      }
    } finally {
      t.__root = e, delete t.currentTarget, C(a), j(h);
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
  var n = (e & Le) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (I)
      return Mt(m, null), m;
    r === void 0 && (r = Un(i ? t : "<!>" + t), r = /** @type {Node} */
    /* @__PURE__ */ mt(r));
    var s = (
      /** @type {TemplateNode} */
      n || ye ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Mt(s, s), s;
  };
}
function De(t, e) {
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
function Fe(t, e) {
  return Me(t, e);
}
function Gn(t, e) {
  Dt(), e.intro = e.intro ?? !1;
  const n = e.target, r = I, i = m;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(n)
    ); s && (s.nodeType !== zt || /** @type {Comment} */
    s.data !== je); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ kt(s);
    if (!s)
      throw lt;
    ht(!0), wt(
      /** @type {Comment} */
      s
    ), oe();
    const l = Me(t, { ...e, anchor: s });
    if (m === null || m.nodeType !== zt || /** @type {Comment} */
    m.data !== qe)
      throw Vt(), lt;
    return ht(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((u) => u.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== lt && console.warn("Failed to hydrate: ", l), e.recover === !1 && Xe(), Dt(), kn(n), ht(!1), Fe(t, e);
  } finally {
    ht(r), wt(i);
  }
}
const J = /* @__PURE__ */ new Map();
function Me(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: l = !0 }) {
  Dt();
  var u = /* @__PURE__ */ new Set(), f = (h) => {
    for (var _ = 0; _ < h.length; _++) {
      var c = h[_];
      if (!u.has(c)) {
        u.add(c);
        var v = Kn(c);
        e.addEventListener(c, _t, { passive: v });
        var T = J.get(c);
        T === void 0 ? (document.addEventListener(c, _t, { passive: v }), J.set(c, 1)) : J.set(c, T + 1);
      }
    }
  };
  f(Ve(Pe)), Ft.add(f);
  var o = void 0, a = Nn(() => {
    var h = n ?? e.appendChild(be());
    return Dn(() => {
      if (s) {
        fn({});
        var _ = (
          /** @type {ComponentContext} */
          O
        );
        _.c = s;
      }
      i && (r.$$events = i), I && Mt(
        /** @type {TemplateNode} */
        h,
        null
      ), o = t(h, r) || {}, I && (d.nodes_end = m), s && on();
    }), () => {
      for (var _ of u) {
        e.removeEventListener(_, _t);
        var c = (
          /** @type {number} */
          J.get(_)
        );
        --c === 0 ? (document.removeEventListener(_, _t), J.delete(_)) : J.set(_, c);
      }
      Ft.delete(f), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return It.set(o, a), o;
}
let It = /* @__PURE__ */ new WeakMap();
function Jn(t, e) {
  const n = It.get(t);
  return n ? (It.delete(t), n(e)) : Promise.resolve();
}
function Zn(t, e) {
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
function Qn(t) {
  return new Xn(t);
}
class Xn {
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
    var n = /* @__PURE__ */ new Map(), r = (s, l) => {
      var u = /* @__PURE__ */ En(l, !1, !1);
      return n.set(s, u), u;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, l) {
          return N(n.get(l) ?? r(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === Ge ? !0 : (N(n.get(l) ?? r(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, u) {
          return P(n.get(l) ?? r(l, u), u), Reflect.set(s, l, u);
        }
      }
    );
    this.#t = (e.hydrate ? Gn : Fe)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && mn(), this.#e = i.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || X(this, s, {
        get() {
          return this.#t[s];
        },
        /** @param {any} value */
        set(l) {
          this.#t[s] = l;
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
let Ie;
typeof HTMLElement == "function" && (Ie = class extends HTMLElement {
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
          r !== "default" && (s.name = r), De(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = tr(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = dt(i, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = Sn(() => {
        An(() => {
          this.$$r = !0;
          for (const r of $t(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const i = dt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = dt(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return $t(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function dt(t, e, n, r) {
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
function tr(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function er(t, e, n, r, i, s) {
  let l = class extends Ie {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return $t(e).map(
        (u) => (e[u].attribute || u).toLowerCase()
      );
    }
  };
  return $t(e).forEach((u) => {
    X(l.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        f = dt(u, f, e), this.$$d[u] = f;
        var o = this.$$c;
        if (o) {
          var a = Z(o, u)?.get;
          a ? o[u] = f : o.$set({ [u]: f });
        }
      }
    });
  }), r.forEach((u) => {
    X(l.prototype, u, {
      get() {
        return this.$$c?.[u];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
var nr = (t, e) => {
  P(e, N(e) + 1);
}, rr = /* @__PURE__ */ Hn('<button class="custom-button svelte-1x4b3yo"> </button>');
const sr = {
  hash: "svelte-1x4b3yo",
  code: ".custom-button.svelte-1x4b3yo {background:#007acc;color:white;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;}.custom-button.svelte-1x4b3yo:hover {background:#005a9e;}"
};
function ir(t) {
  Zn(t, sr);
  let e = /* @__PURE__ */ A(0);
  var n = rr();
  n.__click = [nr, e];
  var r = xn(n);
  rn(n), Pn(() => zn(r, `Clicked ${N(e) ?? ""}
  ${N(e) < 2 ? "time" : "times"}`)), De(t, n);
}
Yn(["click"]);
customElements.define("my-button", er(ir, {}, [], [], !0));
export {
  ir as default
};
