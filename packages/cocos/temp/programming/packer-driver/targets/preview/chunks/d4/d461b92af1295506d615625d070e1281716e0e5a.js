System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RegisterBuff, BuffMetaState, _dec, _class, _crd, VertigoBuff;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    }, function (_unresolved_2) {
      RegisterBuff = _unresolved_2.RegisterBuff;
    }, function (_unresolved_3) {
      BuffMetaState = _unresolved_3.BuffMetaState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "786ce3EhB9H94rJhFrGQpUT", "vertigo", undefined);

      _export("VertigoBuff", VertigoBuff = (_dec = (_crd && RegisterBuff === void 0 ? (_reportPossibleCrUseOfRegisterBuff({
        error: Error()
      }), RegisterBuff) : RegisterBuff)({
        id: "vertigo"
      }), _dec(_class = class VertigoBuff extends (_crd && BuffMetaState === void 0 ? (_reportPossibleCrUseOfBuffMetaState({
        error: Error()
      }), BuffMetaState) : BuffMetaState) {
        constructor() {
          super(...arguments);
          // 眩晕buff
          this.name = "眩晕";
          // buff 类型
          this.isDeBuff = true;
          this.introduce = "眩晕后无法行动";
          this.buffIcon = "game/fight_entity/buff/vertigo/spriteFrame";
        }

        GetBeforeAction() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, actionState, fightMap) {
            // 输出文字
            if (fightMap.isPlayAnimation) yield self.character.component.showString("眩晕"); // 拒绝行动

            actionState.canAction = false;
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d461b92af1295506d615625d070e1281716e0e5a.js.map