System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicMetaState, BuffMetaState, _crd;

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
        constructor(...args) {
          super(...args);
          // buff 图标路径
          this.buffIcon = "";
          // 是否是减益buff
          this.isDeBuff = true;
        }

        /**
         * 创建时的函数
         */
        GetOnCreate() {
          return async (self, option) => {};
        }
        /** 
         * 添加到角色时的函数 有 HolCharacter 组件调用
         * self 当前buff
         */


        GetOnAddToCharacter() {
          return async self => {};
        }
        /** 
         * buff从角色中删除时 有 HolCharacter 组件调用
         * self 当前buff
         */


        GetOnDeleteFromCharacter() {
          return async self => {};
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=babd2217457b8b042f02e4ee2adbec401cb4fee8.js.map