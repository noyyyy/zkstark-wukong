System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, RegisterBuff, BuffMetaState, _dec, _class, _crd, Fear;

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "../../../scenes/Fight/Canvas/FightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionState(extras) {
    _reporterNs.report("ActionState", "../../fight/ActionState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicState(extras) {
    _reporterNs.report("BasicState", "../../fight/BasicState", _context.meta, extras);
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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }, function (_unresolved_2) {
      RegisterBuff = _unresolved_2.RegisterBuff;
    }, function (_unresolved_3) {
      BuffMetaState = _unresolved_3.BuffMetaState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9a61Q2SnVNHb2Q63shNcJS", "fear", undefined);

      __checkObsolete__(['math']);

      Fear = (_dec = (_crd && RegisterBuff === void 0 ? (_reportPossibleCrUseOfRegisterBuff({
        error: Error()
      }), RegisterBuff) : RegisterBuff)({
        id: "fear"
      }), _dec(_class = class Fear extends (_crd && BuffMetaState === void 0 ? (_reportPossibleCrUseOfBuffMetaState({
        error: Error()
      }), BuffMetaState) : BuffMetaState) {
        constructor(...args) {
          super(...args);
          // 恐惧buff
          this.name = "恐惧";
          // buff 类型
          this.isDeBuff = true;
          this.introduce = "恐惧后有70%的概率不敢出手";
          this.buffIcon = "game/fight_entity/buff/fear/spriteFrame";
        }

        GetBeforeAction() {
          return async (self, actionState, fightMap) => {
            if (math.randomRange(0, 100) < 70) {
              // 输出文字
              if (fightMap.isPlayAnimation) await self.character.component.showString("恐惧"); // 拒绝行动

              actionState.canAction = false;
            }
          };
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcc60aed7ffbc3cbd0feacbd405ddebfa60c8e93.js.map