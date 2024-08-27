System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicState, BuffEnum, BuffState, _crd;

  function _reportPossibleCrUseOfBasicState(extras) {
    _reporterNs.report("BasicState", "../BasicState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "../character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffEnum(extras) {
    _reporterNs.report("BuffEnum", "./BuffEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffMetaState(extras) {
    _reporterNs.report("BuffMetaState", "./BuffMetaState", _context.meta, extras);
  }

  _export("BuffState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BasicState = _unresolved_2.BasicState;
    }, function (_unresolved_3) {
      BuffEnum = _unresolved_3.BuffEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a264fVESCpAaoF8tnMi2kcZ", "BuffState", undefined);

      _export("BuffState", BuffState = class BuffState extends (_crd && BasicState === void 0 ? (_reportPossibleCrUseOfBasicState({
        error: Error()
      }), BasicState) : BasicState) {
        // 构造器
        constructor(create, option) {
          var meta = (_crd && BuffEnum === void 0 ? (_reportPossibleCrUseOfBuffEnum({
            error: Error()
          }), BuffEnum) : BuffEnum)[create.id];
          super(meta);
          // 对应的角色
          this.character = null;
          // 存储状态
          this.state = new Map();
          // 创建时的函数
          this.OnCreate = void 0;
          // 添加到角色时的回调
          this.OnAddToCharacter = void 0;
          // buff从角色中移除的回调
          this.OnDeleteFromCharacter = void 0;
          this.OnCreate = meta.GetOnCreate();
          this.OnAddToCharacter = meta.GetOnAddToCharacter();
          this.OnDeleteFromCharacter = meta.GetOnDeleteFromCharacter();
          this.OnCreate(this, option);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=adc925a209a630a5bcfdc01fb64527c341c508b0.js.map