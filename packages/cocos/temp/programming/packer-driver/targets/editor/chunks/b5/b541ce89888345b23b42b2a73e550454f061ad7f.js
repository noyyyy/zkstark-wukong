System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, OnBeTarget, _crd;

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
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5fb03SHsJJO37Pc9NP6KEU5", "OnBeTarget", undefined);

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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b541ce89888345b23b42b2a73e550454f061ad7f.js.map