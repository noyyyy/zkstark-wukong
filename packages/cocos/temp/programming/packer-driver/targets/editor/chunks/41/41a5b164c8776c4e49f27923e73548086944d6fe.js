System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _reporterNs, OnBeTarget, _crd;

  function _reportPossibleCrUseOfBuffState(extras) {
    _reporterNs.report("BuffState", "./buff/BuffState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "./character/CharacterState", _context.meta, extras);
  }

  _export("OnBeTarget", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      /** 
       * 无论是 被治疗 被伤害 被攻击 ... 都会有一个该状态被创建
       * 并且会影响之后的行为 用于结算操作
       */
      _export("OnBeTarget", OnBeTarget = class OnBeTarget {
        constructor() {
          // 被造成的伤害
          this.hurt = 0;
          // 被造成的回复
          this.cure = 0;
          // 是否格挡
          this.block = false;
          // 是否暴击
          this.critical = false;
          // 添加的buff
          this.buff = [];
          // 谁以你为目标
          this.origin = null;
        }

      });

      _crd = false;
    }
  };
});
//# sourceMappingURL=41a5b164c8776c4e49f27923e73548086944d6fe.js.map