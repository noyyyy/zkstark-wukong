System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, getNodePool, HolIntroduceMessage, load, _crd;

  // 弹出消息 返回一个Promise 确认的话返回 true 否则返回 false
  async function preloadIntroduce() {
    const nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
      error: Error()
    }), getNodePool) : getNodePool)(await (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
      error: Error()
    }), load) : load)("prefab/HolIntroduceMessage", Prefab));
    const node = nodePool.get();
    nodePool.put(node);
  }

  async function introduce(co, parent = find("Canvas")) {
    const nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
      error: Error()
    }), getNodePool) : getNodePool)(await (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
      error: Error()
    }), load) : load)("prefab/HolIntroduceMessage", Prefab));
    const node = nodePool.get();
    parent.addChild(node);
    const holConfirmMessage = node.getComponent(_crd && HolIntroduceMessage === void 0 ? (_reportPossibleCrUseOfHolIntroduceMessage({
      error: Error()
    }), HolIntroduceMessage) : HolIntroduceMessage);
    return new Promise(res => {
      holConfirmMessage.setContent(co);
      holConfirmMessage.listen("close", () => nodePool.put(node));
    });
  }

  function _reportPossibleCrUseOfgetNodePool(extras) {
    _reporterNs.report("getNodePool", "../resource/getNodePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolIntroduceMessage(extras) {
    _reporterNs.report("HolIntroduceMessage", "../../prefab/HolIntroduceMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolIntroduceOption(extras) {
    _reporterNs.report("HolIntroduceOption", "../../prefab/HolIntroduceMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfload(extras) {
    _reporterNs.report("load", "../bundle/load", _context.meta, extras);
  }

  _export({
    preloadIntroduce: preloadIntroduce,
    introduce: introduce
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
      getNodePool = _unresolved_2.getNodePool;
    }, function (_unresolved_3) {
      HolIntroduceMessage = _unresolved_3.HolIntroduceMessage;
    }, function (_unresolved_4) {
      load = _unresolved_4.load;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['Prefab', 'find', 'Node']);

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a22e2148b5ded2ee212864f135df96b6eba6337.js.map