System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, getNodePool, HolIntroduceMessage, load, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  // 弹出消息 返回一个Promise 确认的话返回 true 否则返回 false
  function preloadIntroduce() {
    return _preloadIntroduce.apply(this, arguments);
  }

  function _preloadIntroduce() {
    _preloadIntroduce = _asyncToGenerator(function* () {
      var nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
        error: Error()
      }), getNodePool) : getNodePool)(yield (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
        error: Error()
      }), load) : load)("prefab/HolIntroduceMessage", Prefab));
      var node = nodePool.get();
      nodePool.put(node);
    });
    return _preloadIntroduce.apply(this, arguments);
  }

  function introduce(_x, _x2) {
    return _introduce.apply(this, arguments);
  }

  function _introduce() {
    _introduce = _asyncToGenerator(function* (co, parent) {
      if (parent === void 0) {
        parent = find("Canvas");
      }

      var nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
        error: Error()
      }), getNodePool) : getNodePool)(yield (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
        error: Error()
      }), load) : load)("prefab/HolIntroduceMessage", Prefab));
      var node = nodePool.get();
      parent.addChild(node);
      var holConfirmMessage = node.getComponent(_crd && HolIntroduceMessage === void 0 ? (_reportPossibleCrUseOfHolIntroduceMessage({
        error: Error()
      }), HolIntroduceMessage) : HolIntroduceMessage);
      return new Promise(res => {
        holConfirmMessage.setContent(co);
        holConfirmMessage.listen("close", () => nodePool.put(node));
      });
    });
    return _introduce.apply(this, arguments);
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
      _cclegacy = _cc.cclegacy;
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

      _cclegacy._RF.push({}, "7813cJiEYFMHZcPLh9vPtD6", "introduce", undefined);

      __checkObsolete__(['Prefab', 'find', 'Node']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=177c9a6c8343d4a890cfb3743c4d650232a08700.js.map