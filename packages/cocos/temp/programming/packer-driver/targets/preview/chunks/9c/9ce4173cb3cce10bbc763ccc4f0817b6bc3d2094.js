System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, math, NodeEventType, Prefab, Sprite, SpriteFrame, util, HolCharacter, RoundState, common, HolPreLoad, _dec, _class, _crd, ccclass, property, FightMap;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolCharacter(extras) {
    _reporterNs.report("HolCharacter", "../../../prefab/HolCharacter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../../../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundState(extras) {
    _reporterNs.report("RoundState", "../../../game/fight/RoundState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcommon(extras) {
    _reporterNs.report("common", "../../../common/common/common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolPreLoad(extras) {
    _reporterNs.report("HolPreLoad", "../../../prefab/HolPreLoad", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      math = _cc.math;
      NodeEventType = _cc.NodeEventType;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      HolCharacter = _unresolved_3.HolCharacter;
    }, function (_unresolved_4) {
      RoundState = _unresolved_4.RoundState;
    }, function (_unresolved_5) {
      common = _unresolved_5.common;
    }, function (_unresolved_6) {
      HolPreLoad = _unresolved_6.HolPreLoad;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f32422n0itG4aglbinrHSSE", "FightMap", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'math', 'Node', 'NodeEventType', 'Prefab', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightMap", FightMap = (_dec = ccclass('FightMap'), _dec(_class = class FightMap extends Component {
        constructor() {
          super(...arguments);
          // 当前回合数
          this.currentRound = 1;
          // 是否播放动画
          this.isPlayAnimation = true;
          // 所有回合任务
          this.allRoundQueue = new Map();
          // 所有存活的角色
          this.allLiveCharacter = [];
          // 所有死亡的角色
          this.allDeadCharacter = [];
          // 行动等待队列，若队列有未完成任务则等待完成后进入下一个角色行动
          this.actionAwaitQueue = [];
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // HolPreLoad 预加载进度条
            var holPreLoad = _this.node.parent.getChildByName("HolPreLoad").getComponent(_crd && HolPreLoad === void 0 ? (_reportPossibleCrUseOfHolPreLoad({
              error: Error()
            }), HolPreLoad) : HolPreLoad);

            holPreLoad.setTips(["战斗资源正在加载"]);
            holPreLoad.setProcess(20); // 随机地图

            var images = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.loadDir("image/fightMap", SpriteFrame);
            _this.node.getComponent(Sprite).spriteFrame = images[Math.floor(math.randomRange(0, images.length))];
            holPreLoad.setProcess(50); // 当前进度

            var process = 50; // 设置角色

            for (var character of (_crd && common === void 0 ? (_reportPossibleCrUseOfcommon({
              error: Error()
            }), common) : common).leftCharacter) {
              yield _this.setCharacter(character[1], "left", character[0]);
              holPreLoad.setProcess(process = process + 20 / (_crd && common === void 0 ? (_reportPossibleCrUseOfcommon({
                error: Error()
              }), common) : common).leftCharacter.size);
            }

            for (var _character of (_crd && common === void 0 ? (_reportPossibleCrUseOfcommon({
              error: Error()
            }), common) : common).rightCharacter) {
              yield _this.setCharacter(_character[1], "right", _character[0]);
              holPreLoad.setProcess(process = process + 20 / (_crd && common === void 0 ? (_reportPossibleCrUseOfcommon({
                error: Error()
              }), common) : common).rightCharacter.size);
            } // 监听进度条完成函数


            holPreLoad.listenComplete( /*#__PURE__*/_asyncToGenerator(function* () {
              yield new Promise(res => setTimeout(res, 500)); // 战斗开始

              var result = yield _this.fightStart(); // 战斗胜利结算

              if (result) _this.fightSuccess(); // 战斗失败结算
              else _this.fightEnd();
            })); // 设置 100%

            holPreLoad.setProcess(100);
          })();
        } // 监听回合函数


        listenRoundEvent(round, call) {
          var roundEvents = this.allRoundQueue.get(this.currentRound + round + 1);
          if (!roundEvents) return this.allRoundQueue.set(this.currentRound + round + 1, roundEvents = [call]);
          roundEvents.push(call);
        } // 战斗开始


        fightStart() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // 调用战斗开始回调
            for (var character of _this2.allLiveCharacter) {
              for (var buff of character.state.buff) yield buff.OnFightBegan(buff, _this2);

              for (var equipment of character.state.equipment) yield equipment.OnFightBegan(equipment, _this2);

              yield character.state.OnFightBegan(character.state, _this2);
            } // 回合开始


            while (_this2.currentRound <= 150) {
              var roundState = new (_crd && RoundState === void 0 ? (_reportPossibleCrUseOfRoundState({
                error: Error()
              }), RoundState) : RoundState)();
              var allLiveCharacter = [].concat(_this2.allLiveCharacter).sort((a, b) => b.state.speed - a.state.speed); // 调用回合任务

              for (var task of _this2.allRoundQueue.get(_this2.currentRound) || []) yield task(); // 调用回合开始回调


              for (var _character2 of allLiveCharacter) {
                if (_this2.allLiveCharacter.indexOf(_character2) === -1) break;

                for (var _buff of _character2.state.buff) yield _buff.OnRoundBegan(_buff, roundState, _this2);

                for (var _equipment of _character2.state.equipment) yield _equipment.OnRoundBegan(_equipment, roundState, _this2);

                yield _character2.state.OnRoundBegan(_character2.state, roundState, _this2);
              } // 角色行动


              for (var _character3 of allLiveCharacter) {
                if (_this2.allLiveCharacter.indexOf(_character3) === -1) continue;
                yield _character3.action(); // 等待行动队列清空

                yield Promise.all(_this2.actionAwaitQueue);
                _this2.actionAwaitQueue = []; // 判断是否结束

                if (_this2.allLiveCharacter.filter(c => c.direction === "left").length <= 0) return false;else if (_this2.allLiveCharacter.filter(c => c.direction === "right").length <= 0) return true;
              } // 调用回合结束回调


              for (var _character4 of allLiveCharacter) {
                if (_this2.allLiveCharacter.indexOf(_character4) === -1) break;

                for (var _buff2 of _character4.state.buff) yield _buff2.OnRoundEnd(_buff2, roundState, _this2);

                for (var _equipment2 of _character4.state.equipment) yield _equipment2.OnRoundEnd(_equipment2, roundState, _this2);

                yield _character4.state.OnRoundEnd(_character4.state, roundState, _this2);
              }

              _this2.currentRound++; // 等待

              if (_this2.isPlayAnimation) yield new Promise(res => setTimeout(res, 300)); // 判断是否结束

              if (_this2.allLiveCharacter.filter(c => c.direction === "left").length <= 0) return false;else if (_this2.allLiveCharacter.filter(c => c.direction === "right").length <= 0) return true;
            }

            return false;
          })();
        } // 设置角色


        setCharacter(create, direct, coordinate) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var holCharacterPrefab = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.load("prefab/HolCharacter", Prefab);
            var character = instantiate(holCharacterPrefab);

            _this3.node.addChild(character);

            var holCharacter = character.getComponent(_crd && HolCharacter === void 0 ? (_reportPossibleCrUseOfHolCharacter({
              error: Error()
            }), HolCharacter) : HolCharacter);
            yield holCharacter.initCharacter(create, direct, coordinate, _this3);

            _this3.node.on(NodeEventType.NODE_DESTROYED, () => {
              character.parent.removeChild(character);
            });

            _this3.allLiveCharacter.push(holCharacter);
          })();
        } // 战斗胜利


        fightSuccess() {
          this.node.parent.getChildByName("FightFailure").active = false;
          this.node.parent.getChildByName("FightSuccess").active = true;
        } // 战斗失败


        fightEnd() {
          this.node.parent.getChildByName("FightFailure").active = true;
          this.node.parent.getChildByName("FightSuccess").active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ce4173cb3cce10bbc763ccc4f0817b6bc3d2094.js.map