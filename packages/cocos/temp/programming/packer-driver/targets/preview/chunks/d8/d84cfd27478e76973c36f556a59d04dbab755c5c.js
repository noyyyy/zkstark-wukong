System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicMetaState, BuffMetaState, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBasicMetaState(extras) {
    _reporterNs.report("BasicMetaState", "../BasicMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffState(extras) {
    _reporterNs.report("BuffState", "./BuffState", _context.meta, extras);
  }

  _export("BuffMetaState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BasicMetaState = _unresolved_2.BasicMetaState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61093L0hJJOBp9TG9UCeDRE", "BuffMetaState", undefined);

      _export("BuffMetaState", BuffMetaState = class BuffMetaState extends (_crd && BasicMetaState === void 0 ? (_reportPossibleCrUseOfBasicMetaState({
        error: Error()
      }), BasicMetaState) : BasicMetaState) {
        constructor() {
          super(...arguments);
          // buff 图标路径
          this.buffIcon = "";
          // 是否是减益buff
          this.isDeBuff = true;
        }

        /**
         * 创建时的函数
         */
        GetOnCreate() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, option) {});
        }
        /** 
         * 添加到角色时的函数 有 HolCharacter 组件调用
         * self 当前buff
         */


        GetOnAddToCharacter() {
          return /*#__PURE__*/_asyncToGenerator(function* (self) {});
        }
        /** 
         * buff从角色中删除时 有 HolCharacter 组件调用
         * self 当前buff
         */


        GetOnDeleteFromCharacter() {
          return /*#__PURE__*/_asyncToGenerator(function* (self) {});
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d84cfd27478e76973c36f556a59d04dbab755c5c.js.map