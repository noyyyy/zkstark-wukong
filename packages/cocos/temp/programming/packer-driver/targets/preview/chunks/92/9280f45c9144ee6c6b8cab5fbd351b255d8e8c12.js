System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _reporterNs, ActionState, _crd;

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "./character/CharacterState", _context.meta, extras);
  }

  _export("ActionState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      /** 
       * 角色行动状态对象
       * 每个角色行动都会创建对应的该对象
       * 修改该对象的值，可以修改角色之后的行动行为
       */
      _export("ActionState", ActionState = class ActionState {
        constructor() {
          // 是否可以行动 默认可以
          this.canAction = true;
          // 目标们
          this.targets = [];
          // 攻击方式 普通攻击 或者 技能攻击 会在行动开始时被赋值
          this.actionMethod = "attack";
        }

      });

      _crd = false;
    }
  };
});
//# sourceMappingURL=9280f45c9144ee6c6b8cab5fbd351b255d8e8c12.js.map