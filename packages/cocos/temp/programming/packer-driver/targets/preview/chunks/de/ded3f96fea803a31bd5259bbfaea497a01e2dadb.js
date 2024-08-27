System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BasicState, EquipmentEnum, EquipmentState, _crd;

  function _reportPossibleCrUseOfBasicState(extras) {
    _reporterNs.report("BasicState", "../BasicState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentMetaState(extras) {
    _reporterNs.report("EquipmentMetaState", "./EquipmentMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentEnum(extras) {
    _reporterNs.report("EquipmentEnum", "./EquipmentEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "../character/CharacterState", _context.meta, extras);
  }

  _export("EquipmentState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      BasicState = _unresolved_2.BasicState;
    }, function (_unresolved_3) {
      EquipmentEnum = _unresolved_3.EquipmentEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc76cGpfZtHrrEa5QCwW4fV", "EquipmentState", undefined);

      __checkObsolete__(['Component']);

      _export("EquipmentState", EquipmentState = class EquipmentState extends (_crd && BasicState === void 0 ? (_reportPossibleCrUseOfBasicState({
        error: Error()
      }), BasicState) : BasicState) {
        // 构造器
        constructor(create, character) {
          var meta = (_crd && EquipmentEnum === void 0 ? (_reportPossibleCrUseOfEquipmentEnum({
            error: Error()
          }), EquipmentEnum) : EquipmentEnum)[create.id];
          super(meta);
          // 所属角色
          this.character = void 0;
          // 最大生命值
          this.maxHp = void 0;
          // 攻击力
          this.attack = void 0;
          // 防御力
          this.defence = void 0;
          // 速度
          this.speed = void 0;
          // 治疗效率
          this.curePercent = void 0;
          // 伤害率
          this.hurtPercent = void 0;
          // 暴击
          this.critical = void 0;
          // 格挡
          this.block = void 0;
          // 添加属性到角色
          this.AddPropertyToCharacter = void 0;
          this.character = character;
          this.maxHp = create.lv * meta.HpGrowth;
          this.attack = create.lv * meta.AttackGrowth;
          this.defence = create.lv * meta.DefenceGrowth;
          this.speed = create.lv * meta.SpeedGrowth;
          this.curePercent = meta.CurePercent;
          this.hurtPercent = meta.HurtPercent;
          this.critical = meta.Critical;
          this.block = meta.Block;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ded3f96fea803a31bd5259bbfaea497a01e2dadb.js.map