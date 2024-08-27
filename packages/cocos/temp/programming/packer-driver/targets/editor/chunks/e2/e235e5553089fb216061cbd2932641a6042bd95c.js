System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, load, getNodePool, HolPromptMessage, _crd;

  // 弹出消息 返回一个Promise 确认的话返回 true 否则返回 false
  async function preloadPrompt() {
    const nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
      error: Error()
    }), getNodePool) : getNodePool)(await (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
      error: Error()
    }), load) : load)("prefab/HolPromptMessage", Prefab));
    const node = nodePool.get();
    nodePool.put(node);
  }

  async function prompt(co, parent = find("Canvas")) {
    const nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
      error: Error()
    }), getNodePool) : getNodePool)(await (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
      error: Error()
    }), load) : load)("prefab/HolPromptMessage", Prefab));
    const node = nodePool.get();
    parent.addChild(node);
    const holPromptMessage = node.getComponent(_crd && HolPromptMessage === void 0 ? (_reportPossibleCrUseOfHolPromptMessage({
      error: Error()
    }), HolPromptMessage) : HolPromptMessage);
    holPromptMessage.setContent(co);
    return new Promise(res => {
      holPromptMessage.listen("close", () => {
        nodePool.put(node);
        res();
      });
      return;
    });
  }

  function _reportPossibleCrUseOfload(extras) {
    _reporterNs.report("load", "../bundle/load", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePool(extras) {
    _reporterNs.report("getNodePool", "../resource/getNodePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolPromptMessage(extras) {
    _reporterNs.report("HolPromptMessage", "../../prefab/HolPromptMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPromptMessageOption(extras) {
    _reporterNs.report("PromptMessageOption", "../../prefab/HolPromptMessage", _context.meta, extras);
  }

  _export({
    preloadPrompt: preloadPrompt,
    prompt: prompt
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
      load = _unresolved_2.load;
    }, function (_unresolved_3) {
      getNodePool = _unresolved_3.getNodePool;
    }, function (_unresolved_4) {
      HolPromptMessage = _unresolved_4.HolPromptMessage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21c76hCv99I5pqdC+uYlRfi", "prompt", undefined);

      __checkObsolete__(['Prefab', 'find', 'Node']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e235e5553089fb216061cbd2932641a6042bd95c.js.map