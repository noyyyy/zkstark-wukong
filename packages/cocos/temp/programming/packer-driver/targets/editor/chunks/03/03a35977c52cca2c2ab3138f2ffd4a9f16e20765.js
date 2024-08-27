System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicState, _crd;

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "../../scenes/Fight/Canvas/FightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionState(extras) {
    _reporterNs.report("ActionState", "./ActionState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicMetaState(extras) {
    _reporterNs.report("BasicMetaState", "./BasicMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOnBeTarget(extras) {
    _reporterNs.report("OnBeTarget", "./OnBeTarget", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundState(extras) {
    _reporterNs.report("RoundState", "./RoundState", _context.meta, extras);
  }

  _export("BasicState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e73ffpZcNNVZUjdPfoOtys", "BasicState", undefined);

      // 状态基类
      _export("BasicState", BasicState = class BasicState {
        // 构造器
        constructor(meta) {
          // id
          this.id = void 0;
          // 名称
          this.name = void 0;
          // 元数据
          this.meta = void 0;
          // 战斗开始函数
          this.OnFightBegan = void 0;
          // 回合结束函数
          this.OnRoundEnd = void 0;
          // 回合开始函数
          this.OnRoundBegan = void 0;
          // 被伤害时的函数
          this.OnBeHurt = void 0;
          // 被治疗时的函数
          this.OnBeCure = void 0;
          // 被添加buff时的函数
          this.OnBuff = void 0;
          // 行动之前的函数
          this.BeforeAction = void 0;
          // 行动之后的函数
          this.AfterAction = void 0;
          // 普通攻击的函数
          this.OnAttack = void 0;
          // 技能攻击的函数
          this.OnSkill = void 0;
          // 死亡时的函数
          this.OnDead = void 0;
          // 重生时的函数
          this.onReBirth = void 0;
          this.meta = meta;
          this.id = meta.id;
          this.name = meta.name;
          this.OnFightBegan = meta.GetOnFightBegan();
          this.OnRoundBegan = meta.GetOnRoundBegan();
          this.OnRoundEnd = meta.GetOnRoundEnd();
          this.OnBeHurt = meta.GetOnBeHurt();
          this.OnBeCure = meta.GetOnBeCure();
          this.OnBuff = meta.GetOnBuff();
          this.BeforeAction = meta.GetBeforeAction();
          this.AfterAction = meta.GetAfterAction();
          this.OnAttack = meta.GetOnAttack();
          this.OnSkill = meta.GetOnSkill();
          this.OnDead = meta.GetOnDead();
          this.onReBirth = meta.GetonReBirth();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=03a35977c52cca2c2ab3138f2ffd4a9f16e20765.js.map