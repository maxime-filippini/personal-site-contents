typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Le = 2, je = "[", qe = "]", ft = {}, g = Symbol(), ne = !1;
var re = Array.isArray, Ve = Array.prototype.indexOf, Ye = Array.from, gt = Object.keys, tt = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, Be = Object.prototype, Ue = Array.prototype, He = Object.getPrototypeOf, Wt = Object.isExtensible;
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
const E = 2, ie = 4, le = 8, xt = 16, z = 32, q = 64, ue = 128, O = 256, yt = 512, m = 1024, R = 2048, V = 4096, et = 8192, it = 16384, fe = 32768, Ke = 65536, Kt = 1 << 17, ze = 1 << 18, Lt = 1 << 19, ae = 1 << 20, Rt = 1 << 21, jt = 1 << 22, B = 1 << 23, Nt = Symbol("$state"), Ge = Symbol("legacy props"), qt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Je = 3, zt = 8;
function Xe() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Ze() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Qe() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function tn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function en() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vt(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let k = !1;
function dt(t) {
  k = t;
}
let w;
function nt(t) {
  if (t === null)
    throw Vt(), ft;
  return w = t;
}
function oe() {
  return nt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ G(w)
  );
}
function sn(t) {
  if (k) {
    if (/* @__PURE__ */ G(w) !== null)
      throw Vt(), ft;
    w = t;
  }
}
function ln(t = 1) {
  if (k) {
    for (var e = t, n = w; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ G(n);
    w = n;
  }
}
function ce(t) {
  return t === this.v;
}
function un(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function fn(t) {
  return !un(t, this.v);
}
let an = !1, S = null;
function mt(t) {
  S = t;
}
function on(t, e = !1, n) {
  S = {
    p: S,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function cn(t) {
  var e = (
    /** @type {ComponentContext} */
    S
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Cn(r);
  }
  return S = e.p, /** @type {T} */
  {};
}
function he() {
  return !0;
}
const hn = /* @__PURE__ */ new WeakMap();
function _n(t) {
  var e = d;
  if (e === null)
    return $.f |= B, t;
  if ((e.f & fe) === 0) {
    if ((e.f & ue) === 0)
      throw !e.parent && t instanceof Error && _e(t), t;
    e.b.error(t);
  } else
    Yt(t, e);
}
function Yt(t, e) {
  for (; e !== null; ) {
    if ((e.f & ue) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && _e(t), t;
}
function _e(t) {
  const e = hn.get(t);
  e && (tt(t, "message", {
    value: e.message
  }), tt(t, "stack", {
    value: e.stack
  }));
}
let St = [], Ct = [];
function vn() {
  var t = St;
  St = [], se(t);
}
function dn() {
  var t = Ct;
  Ct = [], se(t);
}
function $n() {
  St.length > 0 && vn(), Ct.length > 0 && dn();
}
function pn() {
  for (var t = (
    /** @type {Effect} */
    d.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && Xe(), t;
}
// @__NO_SIDE_EFFECTS__
function wn(t) {
  var e = E | R, n = $ !== null && ($.f & E) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return d === null || n !== null && (n.f & O) !== 0 ? e |= O : d.f |= Lt, {
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
      g
    ),
    wv: 0,
    parent: n ?? d,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function gn(t, e) {
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
  ), s = Ut(
    /** @type {V} */
    g
  ), l = null, u = !$;
  return Dn(() => {
    try {
      var f = t();
    } catch (c) {
      f = Promise.reject(c);
    }
    var a = () => f;
    i = l?.then(a, a) ?? Promise.resolve(f), l = i;
    var o = (
      /** @type {Batch} */
      p
    ), h = r.pending;
    u && (r.update_pending_count(1), h || o.increment());
    const _ = (c, v = void 0) => {
      l = null, h || o.activate(), v ? v !== qt && (s.f |= B, Pt(s, v)) : ((s.f & B) !== 0 && (s.f ^= B), Pt(s, c)), u && (r.update_pending_count(-1), h || o.decrement()), $e();
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
function ve(t) {
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
function Bt(t) {
  var e, n = d;
  j(yn(t));
  try {
    ve(t), e = Ce(t);
  } finally {
    j(n);
  }
  return e;
}
function de(t) {
  var e = Bt(t);
  if (t.equals(e) || (t.v = e, t.wv = Re()), !ht)
    if (rt !== null)
      rt.set(t, t.v);
    else {
      var n = (I || (t.f & O) !== 0) && t.deps !== null ? V : m;
      T(t, n);
    }
}
function mn(t, e, n) {
  const r = wn;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = p, s = (
    /** @type {Effect} */
    d
  ), l = bn(), u = pn();
  Promise.all(e.map((f) => /* @__PURE__ */ gn(f))).then((f) => {
    i?.activate(), l();
    try {
      n([...t.map(r), ...f]);
    } catch (a) {
      (s.f & it) === 0 && Yt(a, s);
    }
    i?.deactivate(), $e();
  }).catch((f) => {
    u.error(f);
  });
}
function bn() {
  var t = d, e = $, n = S;
  return function() {
    j(t), C(e), mt(n);
  };
}
function $e() {
  j(null), C(null), mt(null);
}
const lt = /* @__PURE__ */ new Set();
let p = null, rt = null, Gt = /* @__PURE__ */ new Set(), bt = [];
function pe() {
  const t = (
    /** @type {() => void} */
    bt.shift()
  );
  bt.length > 0 && queueMicrotask(pe), t();
}
let W = [], Tt = null, At = !1, pt = !1;
class K {
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
    W = [];
    var n = null;
    if (lt.size > 1) {
      n = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
      for (const [s, l] of this.current)
        n.set(s, { v: s.v, wv: s.wv }), s.v = l;
      for (const s of lt)
        if (s !== this)
          for (const [l, u] of s.#e)
            n.has(l) || (n.set(l, { v: l.v, wv: l.wv }), l.v = u);
    }
    for (const s of e)
      this.#v(s);
    if (this.#s.length === 0 && this.#n === 0) {
      this.#_();
      var r = this.#i, i = this.#r;
      this.#i = [], this.#r = [], this.#u = [], p = null, Jt(r), Jt(i), p === null ? p = this : lt.delete(this), this.#a?.resolve();
    } else
      this.#f(this.#i), this.#f(this.#r), this.#f(this.#u);
    if (n) {
      for (const [s, { v: l, wv: u }] of n)
        s.wv <= u && (s.v = l);
      rt = null;
    }
    for (const s of this.#s)
      at(s);
    for (const s of this.#l)
      at(s);
    this.#s = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(e) {
    e.f ^= m;
    for (var n = e.first; n !== null; ) {
      var r = n.f, i = (r & (z | q)) !== 0, s = i && (r & m) !== 0, l = s || (r & et) !== 0 || this.skipped_effects.has(n);
      if (!l && n.fn !== null) {
        if (i)
          n.f ^= m;
        else if ((r & m) === 0)
          if ((r & ie) !== 0)
            this.#r.push(n);
          else if ((r & jt) !== 0) {
            var u = n.b?.pending ? this.#l : this.#s;
            u.push(n);
          } else kt(n) && ((n.f & xt) !== 0 && this.#u.push(n), at(n));
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
      ((n.f & R) !== 0 ? this.#c : this.#h).push(n), T(n, m);
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
    W.length > 0 ? we() : this.#_(), p === this && (this.#n === 0 && lt.delete(this), this.deactivate());
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
        T(e, R), st(e);
      for (const e of this.#h)
        T(e, V), st(e);
      this.#i = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#a ??= We()).promise;
  }
  static ensure() {
    if (p === null) {
      const e = p = new K();
      lt.add(p), pt || K.enqueue(() => {
        p === e && e.flush();
      });
    }
    return p;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    bt.length === 0 && queueMicrotask(pe), bt.unshift(e);
  }
}
function En(t) {
  var e = pt;
  pt = !0;
  try {
    for (var n; ; ) {
      if ($n(), W.length === 0 && (p?.flush(), W.length === 0))
        return Tt = null, /** @type {T} */
        n;
      we();
    }
  } finally {
    pt = e;
  }
}
function we() {
  var t = Q;
  At = !0;
  try {
    var e = 0;
    for (Zt(!0); W.length > 0; ) {
      var n = K.ensure();
      if (e++ > 1e3) {
        var r, i;
        xn();
      }
      n.process(W), U.clear();
    }
  } finally {
    At = !1, Zt(t), Tt = null;
  }
}
function xn() {
  try {
    Qe();
  } catch (t) {
    Yt(t, Tt);
  }
}
function Jt(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (it | et)) === 0 && kt(r)) {
        var i = p ? p.current.size : 0;
        if (at(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? ke(r) : r.fn = null), p !== null && p.current.size > i && (r.f & ae) !== 0)
          break;
      }
    }
    for (; n < e; )
      st(t[n++]);
  }
}
function st(t) {
  for (var e = Tt = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (At && e === d && (n & xt) !== 0)
      return;
    if ((n & (q | z)) !== 0) {
      if ((n & m) === 0) return;
      e.f ^= m;
    }
  }
  W.push(e);
}
const U = /* @__PURE__ */ new Map();
function Ut(t, e) {
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
function A(t, e) {
  const n = Ut(t);
  return Yn(n), n;
}
// @__NO_SIDE_EFFECTS__
function Tn(t, e = !1, n = !0) {
  const r = Ut(t);
  return e || (r.equals = fn), r;
}
function P(t, e, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Y || ($.f & Kt) !== 0) && he() && ($.f & (E | xt | jt | Kt)) !== 0 && !F?.includes(t) && rn();
  let r = n ? ut(e) : e;
  return Pt(t, r);
}
function Pt(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ht ? U.set(t, e) : U.set(t, n), t.v = e;
    var r = K.ensure();
    r.capture(t, n), (t.f & E) !== 0 && ((t.f & R) !== 0 && Bt(
      /** @type {Derived} */
      t
    ), T(t, (t.f & O) === 0 ? m : V)), t.wv = Re(), ge(t, R), d !== null && (d.f & m) !== 0 && (d.f & (z | q)) === 0 && (x === null ? Bn([t]) : x.push(t));
  }
  return e;
}
function Ot(t) {
  P(t, t.v + 1);
}
function ge(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], l = s.f, u = (l & R) === 0;
      u && T(s, e), (l & E) !== 0 ? ge(
        /** @type {Derived} */
        s,
        V
      ) : u && st(
        /** @type {Effect} */
        s
      );
    }
}
function ut(t) {
  if (typeof t != "object" || t === null || Nt in t)
    return t;
  const e = He(t);
  if (e !== Be && e !== Ue)
    return t;
  var n = /* @__PURE__ */ new Map(), r = re(t), i = /* @__PURE__ */ A(0), s = H, l = (u) => {
    if (H === s)
      return u();
    var f = $, a = H;
    C(null), te(s);
    var o = u();
    return C(f), te(a), o;
  };
  return r && n.set("length", /* @__PURE__ */ A(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, f, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && en();
        var o = n.get(f);
        return o === void 0 ? o = l(() => {
          var h = /* @__PURE__ */ A(a.value);
          return n.set(f, h), h;
        }) : P(o, a.value, !0), !0;
      },
      deleteProperty(u, f) {
        var a = n.get(f);
        if (a === void 0) {
          if (f in u) {
            const o = l(() => /* @__PURE__ */ A(g));
            n.set(f, o), Ot(i);
          }
        } else
          P(a, g), Ot(i);
        return !0;
      },
      get(u, f, a) {
        if (f === Nt)
          return t;
        var o = n.get(f), h = f in u;
        if (o === void 0 && (!h || Z(u, f)?.writable) && (o = l(() => {
          var c = ut(h ? u[f] : g), v = /* @__PURE__ */ A(c);
          return v;
        }), n.set(f, o)), o !== void 0) {
          var _ = D(o);
          return _ === g ? void 0 : _;
        }
        return Reflect.get(u, f, a);
      },
      getOwnPropertyDescriptor(u, f) {
        var a = Reflect.getOwnPropertyDescriptor(u, f);
        if (a && "value" in a) {
          var o = n.get(f);
          o && (a.value = D(o));
        } else if (a === void 0) {
          var h = n.get(f), _ = h?.v;
          if (h !== void 0 && _ !== g)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return a;
      },
      has(u, f) {
        if (f === Nt)
          return !0;
        var a = n.get(f), o = a !== void 0 && a.v !== g || Reflect.has(u, f);
        if (a !== void 0 || d !== null && (!o || Z(u, f)?.writable)) {
          a === void 0 && (a = l(() => {
            var _ = o ? ut(u[f]) : g, c = /* @__PURE__ */ A(_);
            return c;
          }), n.set(f, a));
          var h = D(a);
          if (h === g)
            return !1;
        }
        return o;
      },
      set(u, f, a, o) {
        var h = n.get(f), _ = f in u;
        if (r && f === "length")
          for (var c = a; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var v = n.get(c + "");
            v !== void 0 ? P(v, g) : c in u && (v = l(() => /* @__PURE__ */ A(g)), n.set(c + "", v));
          }
        if (h === void 0)
          (!_ || Z(u, f)?.writable) && (h = l(() => /* @__PURE__ */ A(void 0)), P(h, ut(a)), n.set(f, h));
        else {
          _ = h.v !== g;
          var N = l(() => ut(a));
          P(h, N);
        }
        var _t = Reflect.getOwnPropertyDescriptor(u, f);
        if (_t?.set && _t.set.call(o, a), !_) {
          if (r && typeof f == "string") {
            var vt = (
              /** @type {Source<number>} */
              n.get("length")
            ), M = Number(f);
            Number.isInteger(M) && M >= vt.v && P(vt, M + 1);
          }
          Ot(i);
        }
        return !0;
      },
      ownKeys(u) {
        D(i);
        var f = Reflect.ownKeys(u).filter((h) => {
          var _ = n.get(h);
          return _ === void 0 || _.v !== g;
        });
        for (var [a, o] of n)
          o.v !== g && !(a in u) && f.push(a);
        return f;
      },
      setPrototypeOf() {
        nn();
      }
    }
  );
}
var Xt, ye, me, be;
function Dt() {
  if (Xt === void 0) {
    Xt = window, ye = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    me = Z(e, "firstChild").get, be = Z(e, "nextSibling").get, Wt(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Wt(n) && (n.__t = void 0);
  }
}
function Ht(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ot(t) {
  return me.call(t);
}
// @__NO_SIDE_EFFECTS__
function G(t) {
  return be.call(t);
}
function kn(t, e) {
  if (!k)
    return /* @__PURE__ */ ot(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ot(w)
  );
  return n === null && (n = w.appendChild(Ht())), nt(n), n;
}
function Nn(t, e) {
  if (!k) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ot(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ G(n) : n;
  }
  return w;
}
function On(t, e = 1, n = !1) {
  let r = k ? w : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ G(r);
  if (!k)
    return r;
  if (n && r?.nodeType !== Je) {
    var s = Ht();
    return r === null ? i?.after(s) : r.before(s), nt(s), s;
  }
  return nt(r), /** @type {TemplateNode} */
  r;
}
function Rn(t) {
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
function Sn(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function J(t, e, n, r = !0) {
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
      at(s), s.f |= fe;
    } catch (f) {
      throw L(s), f;
    }
  else e !== null && st(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & Lt) === 0;
  if (!l && r && (i !== null && Sn(s, i), $ !== null && ($.f & E) !== 0 && (t & q) === 0)) {
    var u = (
      /** @type {Derived} */
      $
    );
    (u.effects ??= []).push(s);
  }
  return s;
}
function Cn(t) {
  return J(ie | ae, t, !1);
}
function An(t) {
  K.ensure();
  const e = J(q, t, !0);
  return () => {
    L(e);
  };
}
function Pn(t) {
  K.ensure();
  const e = J(q, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? qn(e, () => {
      L(e), r(void 0);
    }) : (L(e), r(void 0));
  });
}
function Dn(t) {
  return J(jt | Lt, t, !0);
}
function Fn(t, e = 0) {
  return J(le | e, t, !0);
}
function Mn(t, e = [], n = []) {
  mn(e, n, (r) => {
    J(le, () => t(...r.map(D)), !0);
  });
}
function In(t, e = !0) {
  return J(z, t, !0, e);
}
function xe(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ht, r = $;
    Qt(!0), C(null);
    try {
      e.call(null);
    } finally {
      Qt(n), C(r);
    }
  }
}
function Te(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ee(() => {
      i.abort(qt);
    });
    var r = n.next;
    (n.f & q) !== 0 ? n.parent = null : L(n, e), n = r;
  }
}
function Ln(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & z) === 0 && L(e), e = n;
  }
}
function L(t, e = !0) {
  var n = !1;
  (e || (t.f & ze) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (jn(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Te(t, e && !n), Et(t, 0), T(t, it);
  var r = t.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  xe(t);
  var i = t.parent;
  i !== null && i.first !== null && ke(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function jn(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ G(t)
    );
    t.remove(), t = n;
  }
}
function ke(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function qn(t, e) {
  var n = [];
  Ne(t, n, !0), Vn(n, () => {
    L(t), e && e();
  });
}
function Vn(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ne(t, e, n) {
  if ((t.f & et) === 0) {
    if (t.f ^= et, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || n) && e.push(l);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Ke) !== 0 || (r.f & z) !== 0;
      Ne(r, e, s ? n : !1), r = i;
    }
  }
}
let Q = !1;
function Zt(t) {
  Q = t;
}
let ht = !1;
function Qt(t) {
  ht = t;
}
let $ = null, Y = !1;
function C(t) {
  $ = t;
}
let d = null;
function j(t) {
  d = t;
}
let F = null;
function Yn(t) {
  $ !== null && (F === null ? F = [t] : F.push(t));
}
let y = null, b = 0, x = null;
function Bn(t) {
  x = t;
}
let Oe = 1, ct = 0, H = ct;
function te(t) {
  H = t;
}
let I = !1;
function Re() {
  return ++Oe;
}
function kt(t) {
  var e = t.f;
  if ((e & R) !== 0)
    return !0;
  if ((e & V) !== 0) {
    var n = t.deps, r = (e & O) !== 0;
    if (n !== null) {
      var i, s, l = (e & yt) !== 0, u = r && d !== null && !I, f = n.length;
      if ((l || u) && (d === null || (d.f & it) === 0)) {
        var a = (
          /** @type {Derived} */
          t
        ), o = a.parent;
        for (i = 0; i < f; i++)
          s = n[i], (l || !s?.reactions?.includes(a)) && (s.reactions ??= []).push(a);
        l && (a.f ^= yt), u && o !== null && (o.f & O) === 0 && (a.f ^= O);
      }
      for (i = 0; i < f; i++)
        if (s = n[i], kt(
          /** @type {Derived} */
          s
        ) && de(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || d !== null && !I) && T(t, m);
  }
  return !1;
}
function Se(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !F?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & E) !== 0 ? Se(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? T(s, R) : (s.f & m) !== 0 && T(s, V), st(
        /** @type {Effect} */
        s
      ));
    }
}
function Ce(t) {
  var e = y, n = b, r = x, i = $, s = I, l = F, u = S, f = Y, a = H, o = t.f;
  y = /** @type {null | Value[]} */
  null, b = 0, x = null, I = (o & O) !== 0 && (Y || !Q || $ === null), $ = (o & (z | q)) === 0 ? t : null, F = null, mt(t.ctx), Y = !1, H = ++ct, t.ac !== null && (Ee(() => {
    t.ac.abort(qt);
  }), t.ac = null);
  try {
    t.f |= Rt;
    var h = (
      /** @type {Function} */
      t.fn
    ), _ = h(), c = t.deps;
    if (y !== null) {
      var v;
      if (Et(t, b), c !== null && b > 0)
        for (c.length = b + y.length, v = 0; v < y.length; v++)
          c[b + v] = y[v];
      else
        t.deps = c = y;
      if (!I || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (o & E) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = b; v < c.length; v++)
          (c[v].reactions ??= []).push(t);
    } else c !== null && b < c.length && (Et(t, b), c.length = b);
    if (he() && x !== null && !Y && c !== null && (t.f & (E | V | R)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      x.length; v++)
        Se(
          x[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ct++, x !== null && (r === null ? r = x : r.push(.../** @type {Source[]} */
    x))), (t.f & B) !== 0 && (t.f ^= B), _;
  } catch (N) {
    return _n(N);
  } finally {
    t.f ^= Rt, y = e, b = n, x = r, $ = i, I = s, F = l, mt(u), Y = f, H = a;
  }
}
function Un(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Ve.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & E) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (y === null || !y.includes(e)) && (T(e, V), (e.f & (O | yt)) === 0 && (e.f ^= yt), ve(
    /** @type {Derived} **/
    e
  ), Et(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Et(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Un(t, n[r]);
}
function at(t) {
  var e = t.f;
  if ((e & it) === 0) {
    T(t, m);
    var n = d, r = Q;
    d = t, Q = !0;
    try {
      (e & xt) !== 0 ? Ln(t) : Te(t), xe(t);
      var i = Ce(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Oe;
      var s;
      ne && an && (t.f & R) !== 0 && t.deps;
    } finally {
      Q = r, d = n;
    }
  }
}
function D(t) {
  var e = t.f, n = (e & E) !== 0;
  if ($ !== null && !Y) {
    var r = d !== null && (d.f & it) !== 0;
    if (!r && !F?.includes(t)) {
      var i = $.deps;
      if (($.f & Rt) !== 0)
        t.rv < ct && (t.rv = ct, y === null && i !== null && i[b] === t ? b++ : y === null ? y = [t] : (!I || !y.includes(t)) && y.push(t));
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
    u !== null && (u.f & O) === 0 && (l.f ^= O);
  }
  if (ht) {
    if (U.has(t))
      return U.get(t);
    if (n) {
      l = /** @type {Derived} */
      t;
      var f = l.v;
      return ((l.f & m) === 0 && l.reactions !== null || Ae(l)) && (f = Bt(l)), U.set(l, f), f;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    t, rt?.has(l))
      return rt.get(l);
    kt(l) && de(l);
  }
  if ((t.f & B) !== 0)
    throw t.v;
  return t.v;
}
function Ae(t) {
  if (t.v === g) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (U.has(e) || (e.f & E) !== 0 && Ae(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
const Hn = -7169;
function T(t, e) {
  t.f = t.f & Hn | e;
}
const Pe = /* @__PURE__ */ new Set(), Ft = /* @__PURE__ */ new Set();
function Wn(t) {
  for (var e = 0; e < t.length; e++)
    Pe.add(t[e]);
  for (var n of Ft)
    n(t);
}
let ee = null;
function $t(t) {
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
    var a = i.indexOf(e);
    if (a === -1)
      return;
    f <= a && (l = f);
  }
  if (s = /** @type {Element} */
  i[l] || t.target, s !== e) {
    tt(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var o = $, h = d;
    C(null), j(null);
    try {
      for (var _, c = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var N = s["__" + r];
          if (N != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (re(N)) {
              var [_t, ...vt] = N;
              _t.apply(s, [t, ...vt]);
            } else
              N.call(s, t);
        } catch (M) {
          _ ? c.push(M) : _ = M;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        s = v;
      }
      if (_) {
        for (let M of c)
          queueMicrotask(() => {
            throw M;
          });
        throw _;
      }
    } finally {
      t.__root = e, delete t.currentTarget, C(o), j(h);
    }
  }
}
function Kn(t) {
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
function zn(t, e) {
  var n = (e & Le) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (k)
      return Mt(w, null), w;
    r === void 0 && (r = Kn(i ? t : "<!>" + t));
    var s = (
      /** @type {TemplateNode} */
      n || ye ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Mt(l, u);
    }
    return s;
  };
}
function De(t, e) {
  if (k) {
    d.nodes_end = w, oe();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Gn = ["touchstart", "touchmove"];
function Jn(t) {
  return Gn.includes(t);
}
function Xn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Fe(t, e) {
  return Me(t, e);
}
function Zn(t, e) {
  Dt(), e.intro = e.intro ?? !1;
  const n = e.target, r = k, i = w;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ot(n)
    ); s && (s.nodeType !== zt || /** @type {Comment} */
    s.data !== je); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ G(s);
    if (!s)
      throw ft;
    dt(!0), nt(
      /** @type {Comment} */
      s
    ), oe();
    const l = Me(t, { ...e, anchor: s });
    if (w === null || w.nodeType !== zt || /** @type {Comment} */
    w.data !== qe)
      throw Vt(), ft;
    return dt(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((u) => u.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== ft && console.warn("Failed to hydrate: ", l), e.recover === !1 && tn(), Dt(), Rn(n), dt(!1), Fe(t, e);
  } finally {
    dt(r), nt(i);
  }
}
const X = /* @__PURE__ */ new Map();
function Me(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: l = !0 }) {
  Dt();
  var u = /* @__PURE__ */ new Set(), f = (h) => {
    for (var _ = 0; _ < h.length; _++) {
      var c = h[_];
      if (!u.has(c)) {
        u.add(c);
        var v = Jn(c);
        e.addEventListener(c, $t, { passive: v });
        var N = X.get(c);
        N === void 0 ? (document.addEventListener(c, $t, { passive: v }), X.set(c, 1)) : X.set(c, N + 1);
      }
    }
  };
  f(Ye(Pe)), Ft.add(f);
  var a = void 0, o = Pn(() => {
    var h = n ?? e.appendChild(Ht());
    return In(() => {
      if (s) {
        on({});
        var _ = (
          /** @type {ComponentContext} */
          S
        );
        _.c = s;
      }
      i && (r.$$events = i), k && Mt(
        /** @type {TemplateNode} */
        h,
        null
      ), a = t(h, r) || {}, k && (d.nodes_end = w), s && cn();
    }), () => {
      for (var _ of u) {
        e.removeEventListener(_, $t);
        var c = (
          /** @type {number} */
          X.get(_)
        );
        --c === 0 ? (document.removeEventListener(_, $t), X.delete(_)) : X.set(_, c);
      }
      Ft.delete(f), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return It.set(a, o), a;
}
let It = /* @__PURE__ */ new WeakMap();
function Qn(t, e) {
  const n = It.get(t);
  return n ? (It.delete(t), n(e)) : Promise.resolve();
}
function tr(t) {
  return new er(t);
}
class er {
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
      var u = /* @__PURE__ */ Tn(l, !1, !1);
      return n.set(s, u), u;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, l) {
          return D(n.get(l) ?? r(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === Ge ? !0 : (D(n.get(l) ?? r(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, u) {
          return P(n.get(l) ?? r(l, u), u), Reflect.set(s, l, u);
        }
      }
    );
    this.#t = (e.hydrate ? Zn : Fe)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && En(), this.#e = i.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || tt(this, s, {
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
      Qn(this.#t);
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
      const e = {}, n = nr(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = wt(i, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = tr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = An(() => {
        Fn(() => {
          this.$$r = !0;
          for (const r of gt(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const i = wt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = wt(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return gt(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function wt(t, e, n, r) {
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
function nr(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function rr(t, e, n, r, i, s) {
  let l = class extends Ie {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return gt(e).map(
        (u) => (e[u].attribute || u).toLowerCase()
      );
    }
  };
  return gt(e).forEach((u) => {
    tt(l.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        f = wt(u, f, e), this.$$d[u] = f;
        var a = this.$$c;
        if (a) {
          var o = Z(a, u)?.get;
          o ? a[u] = f : a.$set({ [u]: f });
        }
      }
    });
  }), r.forEach((u) => {
    tt(l.prototype, u, {
      get() {
        return this.$$c?.[u];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
const sr = (t, e) => {
  P(e, D(e) + 1);
};
var ir = /* @__PURE__ */ zn("; <button> </button>", 1);
function lr(t) {
  let e = /* @__PURE__ */ A(0);
  ln();
  var n = ir(), r = On(Nn(n));
  r.__click = [sr, e];
  var i = kn(r);
  sn(r), Mn(() => Xn(i, `count is ${D(e) ?? ""}`)), De(t, n);
}
Wn(["click"]);
customElements.define("my-counter", rr(lr, {}, [], [], !0));
export {
  lr as default
};
