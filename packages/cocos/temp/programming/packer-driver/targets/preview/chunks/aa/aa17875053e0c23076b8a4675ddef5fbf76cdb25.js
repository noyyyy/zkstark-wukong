System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicMetaState, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "../../scenes/Fight/Canvas/FightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionState(extras) {
    _reporterNs.report("ActionState", "./ActionState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicState(extras) {
    _reporterNs.report("BasicState", "./BasicState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOnBeTarget(extras) {
    _reporterNs.report("OnBeTarget", "./OnBeTarget", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundState(extras) {
    _reporterNs.report("RoundState", "./RoundState", _context.meta, extras);
  }

  _export("BasicMetaState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "050cek4Yo9INbyWKsdqZ7bj", "BasicMetaState", undefined);

      // 状态元基类
      _export("BasicMetaState", BasicMetaState = class BasicMetaState {
        constructor() {
          // id
          this.id = void 0;
          // 名称
          this.name = void 0;
          // 简介
          this.introduce = void 0;
        }

        // 创建基类对象
        static getMetaInstance(id) {
          var instance = new this();
          instance.id = id;
          return instance;
        }

        /** 
         * 创建时的函数 该函数在创建本状态对象时调用
         * self 当前状态对象
         */
        OnCreateState(self) {}
        /** 
         * 获取战斗开始函数 该函数由FigtMap组件调用
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetOnFightBegan() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, fightMap) {});
        }
        /** 
         * 获取回合开始函数 该函数由FigtMap组件调用
         * self 当前状态对象
         * roundState 回合状态函数
         * fightMap 战斗场景对象
         */


        GetOnRoundBegan() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, roundState, fightMap) {});
        }
        /**
         * 获取回合结束函数 该函数由FightMap组件调用
         * self 当前状态对象
         * roundState 回合状态函数
         * fightMap 战斗场景对象
         */


        GetOnRoundEnd() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, roundState, fightMap) {});
        }
        /** 
         * 获取被伤害时的函数
         * self 当前状态对象
         * onBeTarget 结算事件对象
         * fightMap 战斗场景对象
         */


        GetOnBeHurt() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, onBeTarget, fightMap) {});
        }
        /** 
         * 获取被治疗时的函数
         * self 当前状态对象
         * onBeTarget 结算事件对象
         * fightMap 战斗场景对象
         */


        GetOnBeCure() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, onBeTarget, fightMap) {});
        }
        /** 
         * 获取被添加buff时的函数
         * self 当前状态对象
         * onBeTarget 结算事件对象
         * fightMap 战斗场景对象
         */


        GetOnBuff() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, onBeTarget, fightMap) {});
        }
        /** 
         * 行动之前的函数
         * self 当前状态对象
         * actionState 行动对象
         * fightMap 战斗场景对象
         */


        GetBeforeAction() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, actionState, fightMap) {});
        }
        /** 
         * 行动之后的函数
         * self 当前状态对象
         * actionState 行动对象
         * fightMap 战斗场景对象
         */


        GetAfterAction() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, fightMap) {});
        }
        /** 
         * 普通攻击的函数
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetOnAttack() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, actionState, fightMap) {});
        }
        /** 
         * 技能攻击的函数
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetOnSkill() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, actionState, fightMap) {});
        }
        /** 
         * 死亡时的函数
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetOnDead() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, fightMap) {});
        }
        /** 
         * 获取重生时的函数
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetonReBirth() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, fightMap) {});
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa17875053e0c23076b8a4675ddef5fbf76cdb25.js.map