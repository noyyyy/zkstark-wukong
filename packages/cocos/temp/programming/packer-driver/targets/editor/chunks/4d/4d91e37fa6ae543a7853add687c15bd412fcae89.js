System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, bundleLoad, getNodePool, HolLoadMessage, _crd;

  // 加载中
  async function preloadLoad() {
    const nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
      error: Error()
    }), getNodePool) : getNodePool)(await (_crd && bundleLoad === void 0 ? (_reportPossibleCrUseOfbundleLoad({
      error: Error()
    }), bundleLoad) : bundleLoad)("prefab/HolLoadMessage", Prefab));
    const node = nodePool.get();
    nodePool.put(node);
  }

  async function load(co, parent = find("Canvas")) {
    const nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
      error: Error()
    }), getNodePool) : getNodePool)(await (_crd && bundleLoad === void 0 ? (_reportPossibleCrUseOfbundleLoad({
      error: Error()
    }), bundleLoad) : bundleLoad)("prefab/HolLoadMessage", Prefab));
    const node = nodePool.get();
    parent.addChild(node);
    const holLoadMessage = node.getComponent(_crd && HolLoadMessage === void 0 ? (_reportPossibleCrUseOfHolLoadMessage({
      error: Error()
    }), HolLoadMessage) : HolLoadMessage);
    holLoadMessage.listen("close", () => nodePool.put(node));
    return () => holLoadMessage.closeLoad();
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
      _cclegacy = _cc.cclegacy;
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

      _cclegacy._RF.push({}, "60768CJMs1BDZXefuBBabPN", "load", undefined);

      __checkObsolete__(['Prefab', 'find', 'Node']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d91e37fa6ae543a7853add687c15bd412fcae89.js.map