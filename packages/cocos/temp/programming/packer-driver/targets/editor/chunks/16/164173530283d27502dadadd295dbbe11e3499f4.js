System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, math, NodeEventType, Prefab, Sprite, SpriteFrame, util, HolCharacter, RoundState, common, HolPreLoad, _dec, _class, _crd, ccclass, property, FightMap;

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
        constructor(...args) {
          super(...args);
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

        async start() {
          // HolPreLoad 预加载进度条
          const holPreLoad = this.node.parent.getChildByName("HolPreLoad").getComponent(_crd && HolPreLoad === void 0 ? (_reportPossibleCrUseOfHolPreLoad({
            error: Error()
          }), HolPreLoad) : HolPreLoad);
          holPreLoad.setTips(["战斗资源正在加载"]);
          holPreLoad.setProcess(20); // 随机地图

          const images = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.loadDir("image/fightMap", SpriteFrame);
          this.node.getComponent(Sprite).spriteFrame = images[Math.floor(math.randomRange(0, images.length))];
          holPreLoad.setProcess(50); // 当前进度

          let process = 50; // 设置角色

          for (const character of (_crd && common === void 0 ? (_reportPossibleCrUseOfcommon({
            error: Error()
          }), common) : common).leftCharacter) {
            await this.setCharacter(character[1], "left", character[0]);
            holPreLoad.setProcess(process = process + 20 / (_crd && common === void 0 ? (_reportPossibleCrUseOfcommon({
              error: Error()
            }), common) : common).leftCharacter.size);
          }

          for (const character of (_crd && common === void 0 ? (_reportPossibleCrUseOfcommon({
            error: Error()
          }), common) : common).rightCharacter) {
            await this.setCharacter(character[1], "right", character[0]);
            holPreLoad.setProcess(process = process + 20 / (_crd && common === void 0 ? (_reportPossibleCrUseOfcommon({
              error: Error()
            }), common) : common).rightCharacter.size);
          } // 监听进度条完成函数


          holPreLoad.listenComplete(async () => {
            await new Promise(res => setTimeout(res, 500)); // 战斗开始

            const result = await this.fightStart(); // 战斗胜利结算

            if (result) this.fightSuccess(); // 战斗失败结算
            else this.fightEnd(); // 战斗演示结束 给客户端发消息 
          }); // 设置 100%

          holPreLoad.setProcess(100);
        } // 监听回合函数


        listenRoundEvent(round, call) {
          let roundEvents = this.allRoundQueue.get(this.currentRound + round + 1);
          if (!roundEvents) return this.allRoundQueue.set(this.currentRound + round + 1, roundEvents = [call]);
          roundEvents.push(call);
        } // 战斗开始


        async fightStart() {
          // 调用战斗开始回调
          for (const character of this.allLiveCharacter) {
            for (const buff of character.state.buff) await buff.OnFightBegan(buff, this);

            for (const equipment of character.state.equipment) await equipment.OnFightBegan(equipment, this);

            await character.state.OnFightBegan(character.state, this);
          } // 回合开始


          while (this.currentRound <= 150) {
            const roundState = new (_crd && RoundState === void 0 ? (_reportPossibleCrUseOfRoundState({
              error: Error()
            }), RoundState) : RoundState)();
            const allLiveCharacter = [].concat(this.allLiveCharacter).sort((a, b) => b.state.speed - a.state.speed); // 调用回合任务

            for (const task of this.allRoundQueue.get(this.currentRound) || []) await task(); // 调用回合开始回调


            for (const character of allLiveCharacter) {
              if (this.allLiveCharacter.indexOf(character) === -1) break;

              for (const buff of character.state.buff) await buff.OnRoundBegan(buff, roundState, this);

              for (const equipment of character.state.equipment) await equipment.OnRoundBegan(equipment, roundState, this);

              await character.state.OnRoundBegan(character.state, roundState, this);
            } // 角色行动


            for (const character of allLiveCharacter) {
              if (this.allLiveCharacter.indexOf(character) === -1) continue;
              await character.action(); // 等待行动队列清空

              await Promise.all(this.actionAwaitQueue);
              this.actionAwaitQueue = []; // 判断是否结束

              if (this.allLiveCharacter.filter(c => c.direction === "left").length <= 0) return false;else if (this.allLiveCharacter.filter(c => c.direction === "right").length <= 0) return true;
            } // 调用回合结束回调


            for (const character of allLiveCharacter) {
              if (this.allLiveCharacter.indexOf(character) === -1) break;

              for (const buff of character.state.buff) await buff.OnRoundEnd(buff, roundState, this);

              for (const equipment of character.state.equipment) await equipment.OnRoundEnd(equipment, roundState, this);

              await character.state.OnRoundEnd(character.state, roundState, this);
            }

            this.currentRound++; // 等待

            if (this.isPlayAnimation) await new Promise(res => setTimeout(res, 300)); // 判断是否结束

            if (this.allLiveCharacter.filter(c => c.direction === "left").length <= 0) return false;else if (this.allLiveCharacter.filter(c => c.direction === "right").length <= 0) return true;
          }

          return false;
        } // 设置角色


        async setCharacter(create, direct, coordinate) {
          const holCharacterPrefab = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load("prefab/HolCharacter", Prefab);
          const character = instantiate(holCharacterPrefab);
          this.node.addChild(character);
          const holCharacter = character.getComponent(_crd && HolCharacter === void 0 ? (_reportPossibleCrUseOfHolCharacter({
            error: Error()
          }), HolCharacter) : HolCharacter);
          await holCharacter.initCharacter(create, direct, coordinate, this);
          this.node.on(NodeEventType.NODE_DESTROYED, () => {
            character.parent.removeChild(character);
          });
          this.allLiveCharacter.push(holCharacter);
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
//# sourceMappingURL=164173530283d27502dadadd295dbbe11e3499f4.js.map