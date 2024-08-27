System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, HolConfirmMessage, load, getNodePool, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  // 弹出消息 返回一个Promise 确认的话返回 true 否则返回 false
  function preloadConfirm() {
    return _preloadConfirm.apply(this, arguments);
  }

  function _preloadConfirm() {
    _preloadConfirm = _asyncToGenerator(function* () {
      var nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
        error: Error()
      }), getNodePool) : getNodePool)(yield (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
        error: Error()
      }), load) : load)("prefab/HolConfirmMessage", Prefab));
      var node = nodePool.get();
      nodePool.put(node);
    });
    return _preloadConfirm.apply(this, arguments);
  }

  function confirm(_x, _x2) {
    return _confirm.apply(this, arguments);
  }

  function _confirm() {
    _confirm = _asyncToGenerator(function* (co, parent) {
      if (parent === void 0) {
        parent = find("Canvas");
      }

      var nodePool = (_crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
        error: Error()
      }), getNodePool) : getNodePool)(yield (_crd && load === void 0 ? (_reportPossibleCrUseOfload({
        error: Error()
      }), load) : load)("prefab/HolConfirmMessage", Prefab));
      var node = nodePool.get();
      parent.addChild(node);
      var holConfirmMessage = node.getComponent(_crd && HolConfirmMessage === void 0 ? (_reportPossibleCrUseOfHolConfirmMessage({
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
    });
    return _confirm.apply(this, arguments);
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
      _cclegacy = _cc.cclegacy;
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

      _cclegacy._RF.push({}, "2792eQTRFZNR6k4+6PgV6rD", "confirm", undefined);

      __checkObsolete__(['Prefab', 'find', 'Node']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37ef6331e680d9093426e7ce7e644447cc4f69b6.js.map