System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, load, getNodePool, HolPromptMessage, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  // 弹出消息 返回一个Promise 确认的话返回 true 否则返回 false
  function preloadPrompt() {
    return _preloadPrompt.apply(this, arguments);
  }

  function _preloadPrompt() {
    _preloadPrompt = _asyncToGenerator(function* () {
      var nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
        error: Error()
      }), getNodePool) : getNodePool)(yield (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
        error: Error()
      }), load) : load)("prefab/HolPromptMessage", Prefab));
      var node = nodePool.get();
      nodePool.put(node);
    });
    return _preloadPrompt.apply(this, arguments);
  }

  function prompt(_x, _x2) {
    return _prompt.apply(this, arguments);
  }

  function _prompt() {
    _prompt = _asyncToGenerator(function* (co, parent) {
      if (parent === void 0) {
        parent = find("Canvas");
      }

      var nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
        error: Error()
      }), getNodePool) : getNodePool)(yield (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
        error: Error()
      }), load) : load)("prefab/HolPromptMessage", Prefab));
      var node = nodePool.get();
      parent.addChild(node);
      var holPromptMessage = node.getComponent(_crd && HolPromptMessage === void 0 ? (_reportPossibleCrUseOfHolPromptMessage({
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
    });
    return _prompt.apply(this, arguments);
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
//# sourceMappingURL=a99031107101ba119fdb704e96f76a282c43849e.js.map