System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, HolConfirmMessage, load, getNodePool, _crd;

  // 弹出消息 返回一个Promise 确认的话返回 true 否则返回 false
  async function preloadConfirm() {
    const nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
      error: Error()
    }), getNodePool) : getNodePool)(await (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
      error: Error()
    }), load) : load)("prefab/HolConfirmMessage", Prefab));
    const node = nodePool.get();
    nodePool.put(node);
  }

  async function confirm(co, parent = find("Canvas")) {
    const nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
      error: Error()
    }), getNodePool) : getNodePool)(await (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
      error: Error()
    }), load) : load)("prefab/HolConfirmMessage", Prefab));
    const node = nodePool.get();
    parent.addChild(node);
    const holConfirmMessage = node.getComponent(_crd && HolConfirmMessage === void 0 ? (_reportPossibleCrUseOfHolConfirmMessage({
      error: Error()
    }), HolConfirmMessage) : HolConfirmMessage);
    return new Promise(res => {
      holConfirmMessage.setContent(co);
      holConfirmMessage.listen("sure", () => {
        res(true);
        holConfirmMessage.closeConfirm();
      });
      holConfirmMessage.listen("cancel", () => {
        res(false);
        holConfirmMessage.closeConfirm();
      });
      holConfirmMessage.listen("close", () => nodePool.put(node));
    });
  }

  function _reportPossibleCrUseOfContentOption(extras) {
    _reporterNs.report("ContentOption", "../../prefab/HolConfirmMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolConfirmMessage(extras) {
    _reporterNs.report("HolConfirmMessage", "../../prefab/HolConfirmMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfload(extras) {
    _reporterNs.report("load", "../bundle/load", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePool(extras) {
    _reporterNs.report("getNodePool", "../resource/getNodePool", _context.meta, extras);
  }

  _export({
    preloadConfirm: preloadConfirm,
    confirm: confirm
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
      HolConfirmMessage = _unresolved_2.HolConfirmMessage;
    }, function (_unresolved_3) {
      load = _unresolved_3.load;
    }, function (_unresolved_4) {
      getNodePool = _unresolved_4.getNodePool;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['Prefab', 'find', 'Node']);

      _crd = false;
    }
  };
});
//# sourceMappingURL=183174b4dd404e6e4e7732fb8cef50e628cf5273.js.map