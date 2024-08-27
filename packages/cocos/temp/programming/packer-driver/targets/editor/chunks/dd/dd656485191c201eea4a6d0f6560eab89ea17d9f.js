System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicMetaState, EquipmentMetaState, _crd;

  function _reportPossibleCrUseOfBasicMetaState(extras) {
    _reporterNs.report("BasicMetaState", "../BasicMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentState(extras) {
    _reporterNs.report("EquipmentState", "./EquipmentState", _context.meta, extras);
  }

  _export("EquipmentMetaState", void 0);

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

      _cclegacy._RF.push({}, "1286cKDtd5Hfp1/cB1/cAt8", "EquipmentMetaState", undefined);

      _export("EquipmentMetaState", EquipmentMetaState = class EquipmentMetaState extends (_crd && BasicMetaState === void 0 ? (_reportPossibleCrUseOfBasicMetaState({
        error: Error()
      }), BasicMetaState) : BasicMetaState) {
        constructor(...args) {
          super(...args);
          // 角色生命成长属性 30 ~ 100
          this.HpGrowth = 100;
          // 角色攻击成长属性 5 ~ 50
          this.AttackGrowth = 50;
          // 角色防御成长属性 1 ~ 40
          this.DefenceGrowth = 40;
          // 角色速度成长属性 10 ~ 30
          this.SpeedGrowth = 30;
          // 角色治疗率 
          this.CurePercent = 1.0;
          // 角色伤害率
          this.HurtPercent = 1.0;
          // 格挡原型 1 ~ 100
          this.Block = 5;
          // 暴击原型 1 ~ 100
          this.Critical = 5;
        }

        /** 
         * 获取添加属性到角色的函数
         * 所有属性的增加的操作在这里进行
         */
        GetAddPropertyToCharacter() {
          return async self => {
            self.character.maxHp += self.maxHp;
            self.character.attack += self.attack;
            self.character.defence += self.defence;
            self.character.speed += self.speed;
            self.character.curePercent += self.curePercent;
            self.character.hurtPercent += self.hurtPercent;
            self.character.critical += self.critical;
            self.character.block += self.block;
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dd656485191c201eea4a6d0f6560eab89ea17d9f.js.map