System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, bundleLoad, getNodePool, HolLoadMessage, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  // 加载中
  function preloadLoad() {
    return _preloadLoad.apply(this, arguments);
  }

  function _preloadLoad() {
    _preloadLoad = _asyncToGenerator(function* () {
      var nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
        error: Error()
      }), getNodePool) : getNodePool)(yield (_crd && bundleLoad === void 0 ? (_reportPossibleCrUseOfbundleLoad({
        error: Error()
      }), bundleLoad) : bundleLoad)("prefab/HolLoadMessage", Prefab));
      var node = nodePool.get();
      nodePool.put(node);
    });
    return _preloadLoad.apply(this, arguments);
  }

  function load(_x, _x2) {
    return _load.apply(this, arguments);
  }

  function _load() {
    _load = _asyncToGenerator(function* (co, parent) {
      if (parent === void 0) {
        parent = find("Canvas");
      }

      var nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
        error: Error()
      }), getNodePool) : getNodePool)(yield (_crd && bundleLoad === void 0 ? (_reportPossibleCrUseOfbundleLoad({
        error: Error()
      }), bundleLoad) : bundleLoad)("prefab/HolLoadMessage", Prefab));
      var node = nodePool.get();
      parent.addChild(node);
      var holLoadMessage = node.getComponent(_crd && HolLoadMessage === void 0 ? (_reportPossibleCrUseOfHolLoadMessage({
        error: Error()
      }), HolLoadMessage) : HolLoadMessage);
      holLoadMessage.listen("close", () => nodePool.put(node));
      return () => holLoadMessage.closeLoad();
    });
    return _load.apply(this, arguments);
  }

  function _reportPossibleCrUseOfbundleLoad(extras) {
    _reporterNs.report("bundleLoad", "../bundle/load", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePool(extras) {
    _reporterNs.report("getNodePool", "../resource/getNodePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolLoadMessage(extras) {
    _reporterNs.report("HolLoadMessage", "../../prefab/HolLoadMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadMessageOption(extras) {
    _reporterNs.report("LoadMessageOption", "../../prefab/HolLoadMessage", _context.meta, extras);
  }

  _export({
    preloadLoad: preloadLoad,
    load: load
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      find = _cc.find;
    }, function (_unresolved_2) {
      bundleLoad = _unresolved_2.load;
    }, function (_unresolved_3) {
      getNodePool = _unresolved_3.getNodePool;
    }, function (_unresolved_4) {
      HolLoadMessage = _unresolved_4.HolLoadMessage;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['Prefab', 'find', 'Node']);

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad43bd0fa6321e4b4f2971019ded2a2e704ac05f.js.map