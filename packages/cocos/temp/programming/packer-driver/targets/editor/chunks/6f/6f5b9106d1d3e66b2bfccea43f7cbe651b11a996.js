System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _reporterNs, BasicMetaState, _crd;

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
    }],
    execute: function () {
      _crd = true;

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
          const instance = new this();
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
          return async (self, fightMap) => {};
        }
        /** 
         * 获取回合开始函数 该函数由FigtMap组件调用
         * self 当前状态对象
         * roundState 回合状态函数
         * fightMap 战斗场景对象
         */


        GetOnRoundBegan() {
          return async (self, roundState, fightMap) => {};
        }
        /**
         * 获取回合结束函数 该函数由FightMap组件调用
         * self 当前状态对象
         * roundState 回合状态函数
         * fightMap 战斗场景对象
         */


        GetOnRoundEnd() {
          return async (self, roundState, fightMap) => {};
        }
        /** 
         * 获取被伤害时的函数
         * self 当前状态对象
         * onBeTarget 结算事件对象
         * fightMap 战斗场景对象
         */


        GetOnBeHurt() {
          return async (self, onBeTarget, fightMap) => {};
        }
        /** 
         * 获取被治疗时的函数
         * self 当前状态对象
         * onBeTarget 结算事件对象
         * fightMap 战斗场景对象
         */


        GetOnBeCure() {
          return async (self, onBeTarget, fightMap) => {};
        }
        /** 
         * 获取被添加buff时的函数
         * self 当前状态对象
         * onBeTarget 结算事件对象
         * fightMap 战斗场景对象
         */


        GetOnBuff() {
          return async (self, onBeTarget, fightMap) => {};
        }
        /** 
         * 行动之前的函数
         * self 当前状态对象
         * actionState 行动对象
         * fightMap 战斗场景对象
         */


        GetBeforeAction() {
          return async (self, actionState, fightMap) => {};
        }
        /** 
         * 行动之后的函数
         * self 当前状态对象
         * actionState 行动对象
         * fightMap 战斗场景对象
         */


        GetAfterAction() {
          return async (self, fightMap) => {};
        }
        /** 
         * 普通攻击的函数
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetOnAttack() {
          return async (self, actionState, fightMap) => {};
        }
        /** 
         * 技能攻击的函数
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetOnSkill() {
          return async (self, actionState, fightMap) => {};
        }
        /** 
         * 死亡时的函数
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetOnDead() {
          return async (self, fightMap) => {};
        }
        /** 
         * 获取重生时的函数
         * self 当前状态对象
         * fightMap 战斗场景对象
         */


        GetonReBirth() {
          return async (self, fightMap) => {};
        }

      });

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f5b9106d1d3e66b2bfccea43f7cbe651b11a996.js.map