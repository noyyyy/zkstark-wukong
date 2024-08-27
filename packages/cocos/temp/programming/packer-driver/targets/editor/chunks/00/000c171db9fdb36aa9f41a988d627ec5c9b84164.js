System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RegisterBuff, BuffMetaState, _dec, _class, _crd, BleedBuff;

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "../../../scenes/Fight/Canvas/FightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundState(extras) {
    _reporterNs.report("RoundState", "../../fight/RoundState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRegisterBuff(extras) {
    _reporterNs.report("RegisterBuff", "../../fight/buff/BuffEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffMetaState(extras) {
    _reporterNs.report("BuffMetaState", "../../fight/buff/BuffMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffState(extras) {
    _reporterNs.report("BuffState", "../../fight/buff/BuffState", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RegisterBuff = _unresolved_2.RegisterBuff;
    }, function (_unresolved_3) {
      BuffMetaState = _unresolved_3.BuffMetaState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b7b4KIQdNOWrcf9OfBvQwm", "bleed", undefined);

      // 流血的配置
      _export("BleedBuff", BleedBuff = (_dec = (_crd && RegisterBuff === void 0 ? (_reportPossibleCrUseOfRegisterBuff({
        error: Error()
      }), RegisterBuff) : RegisterBuff)({
        id: "bleed"
      }), _dec(_class = class BleedBuff extends (_crd && BuffMetaState === void 0 ? (_reportPossibleCrUseOfBuffMetaState({
        error: Error()
      }), BuffMetaState) : BuffMetaState) {
        constructor(...args) {
          super(...args);
          // 眩晕buff
          this.name = "流血";
          this.isDeBuff = true;
          this.introduce = "每回合开始造成指定伤害";
          this.buffIcon = "game/fight_entity/buff/bleed/spriteFrame";
        }

        GetOnCreate() {
          return async (self, option) => {
            option = option || {};
            self.state.set("roundReduceBleed", option.roundReduceBleed || 0);
          };
        } // 回合开始扣血


        GetOnRoundBegan() {
          return async (self, roundState, fightMap) => {
            const hurt = Math.ceil(self.state.get("roundReduceBleed") || 1);
            self.character.hp -= hurt; // 输出扣血动画

            if (fightMap.isPlayAnimation) {
              await self.character.component.showString("流血" + "-" + hurt);
              await self.character.component.updateUi();
            }
          };
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=000c171db9fdb36aa9f41a988d627ec5c9b84164.js.map