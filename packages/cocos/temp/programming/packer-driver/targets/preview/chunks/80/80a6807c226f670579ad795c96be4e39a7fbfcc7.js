System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BasicState, CharacterEnum, EquipmentState, CharacterState, _crd;

  function _reportPossibleCrUseOfBasicState(extras) {
    _reporterNs.report("BasicState", "../BasicState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterMetaState(extras) {
    _reporterNs.report("CharacterMetaState", "./CharacterMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffState(extras) {
    _reporterNs.report("BuffState", "../buff/BuffState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEnum(extras) {
    _reporterNs.report("CharacterEnum", "./CharacterEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentState(extras) {
    _reporterNs.report("EquipmentState", "../equipment/EquipmentState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentStateCreate(extras) {
    _reporterNs.report("EquipmentStateCreate", "../equipment/EquipmentState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolCharacter(extras) {
    _reporterNs.report("HolCharacter", "../../../prefab/HolCharacter", _context.meta, extras);
  }

  _export("CharacterState", void 0);

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
      CharacterEnum = _unresolved_3.CharacterEnum;
    }, function (_unresolved_4) {
      EquipmentState = _unresolved_4.EquipmentState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "644caBHM/BJPZg2loSh3ofV", "CharacterState", undefined);

      __checkObsolete__(['Component']);

      _export("CharacterState", CharacterState = class CharacterState extends (_crd && BasicState === void 0 ? (_reportPossibleCrUseOfBasicState({
        error: Error()
      }), BasicState) : BasicState) {
        /** 
         * 构造器
         * component 是所属组件
         */
        constructor(create, component) {
          var meta = (_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
            error: Error()
          }), CharacterEnum) : CharacterEnum)[create.id];
          super(meta);

          /**
           * 所属组件
           * 一般来说是 HolCharacter 对象
           */
          this.component = void 0;
          // 名称
          this.name = void 0;
          // 等级
          this.lv = void 0;
          // 角色星级
          this.star = void 0;
          // 所属create
          this.create = void 0;
          // 生命值
          this.hp = void 0;
          // 最大生命值
          this.maxHp = void 0;
          // 能量值
          this.energy = void 0;
          // 最大能量值
          this.maxEnergy = void 0;
          // 攻击力
          this.attack = void 0;
          // 防御力
          this.defence = void 0;
          // 速度
          this.speed = void 0;
          // 穿透
          this.pierce = void 0;
          // 治疗效率
          this.curePercent = 1.0;
          // 伤害率
          this.hurtPercent = 1.0;
          // 免伤率
          this.FreeInjuryPercent = 0.0;
          // 暴击
          this.critical = void 0;
          // 格挡
          this.block = 0;
          // 所有buff
          this.buff = [];
          // 所有装备
          this.equipment = [];
          this.lv = create.lv;
          this.star = create.star;
          this.name = meta.name;
          this.component = component;
          this.create = create;
          this.maxEnergy = meta.Energy;
          this.maxHp = create.lv * meta.HpGrowth * ((create.star - 1) * 0.15 + 1) * (create.lv / 80 + 0.8);
          this.attack = create.lv * meta.AttackGrowth * ((create.star - 1) * 0.15 + 1) * (create.lv / 80 + 0.8);
          this.defence = create.lv * meta.DefenceGrowth * ((create.star - 1) * 0.15 + 1) * (create.lv / 80 + 0.8);
          this.speed = create.lv * meta.SpeedGrowth * ((create.star - 1) * 0.15 + 1) * (create.lv / 80 + 0.8);
          this.pierce = create.lv * meta.PierceGrowth * ((create.star - 1) * 0.15 + 1) * (create.lv / 80 + 0.8);
          this.critical = meta.Critical;
          this.block = meta.Block;
          create.equipment.forEach(ec => this.addEquipment(ec));
          meta.OnCreateState(this);
          this.hp = this.maxHp;
          this.energy = 30;
        } // 合理化数据


        reasonableData() {
          if (this.hp > this.maxHp) this.hp = this.maxHp;
          if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
          if (this.hp < 0) this.hp = 0;
          if (this.energy < 0) this.energy = 0;
        }
        /** 
         * 添加装备函数
         * 在构造时调用会将装备所添加的属性加到该对象上
         */


        addEquipment(equipment) {
          var equipmentState = new (_crd && EquipmentState === void 0 ? (_reportPossibleCrUseOfEquipmentState({
            error: Error()
          }), EquipmentState) : EquipmentState)(equipment, this);
          this.equipment.push(equipmentState);
          equipmentState.AddPropertyToCharacter(equipmentState);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80a6807c226f670579ad795c96be4e39a7fbfcc7.js.map