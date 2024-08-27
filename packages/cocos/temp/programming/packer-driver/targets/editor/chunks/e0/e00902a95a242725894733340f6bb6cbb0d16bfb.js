System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GetCharacterCoordinatePosition, util, RegisterCharacter, CharacterMetaState, BuffState, _dec, _class, _crd, Character;

  function _reportPossibleCrUseOfGetCharacterCoordinatePosition(extras) {
    _reporterNs.report("GetCharacterCoordinatePosition", "../../../prefab/HolCharacter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "../../../scenes/Fight/Canvas/FightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionState(extras) {
    _reporterNs.report("ActionState", "../../fight/ActionState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicState(extras) {
    _reporterNs.report("BasicState", "../../fight/BasicState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRegisterCharacter(extras) {
    _reporterNs.report("RegisterCharacter", "../../fight/character/CharacterEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterMetaState(extras) {
    _reporterNs.report("CharacterMetaState", "../../fight/character/CharacterMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "../../fight/character/CharacterState", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GetCharacterCoordinatePosition = _unresolved_2.GetCharacterCoordinatePosition;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      RegisterCharacter = _unresolved_4.RegisterCharacter;
    }, function (_unresolved_5) {
      CharacterMetaState = _unresolved_5.CharacterMetaState;
    }, function (_unresolved_6) {
      BuffState = _unresolved_6.BuffState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3dc09mUBAVOq6FdyatsMh3x", "fearOfDemons", undefined);

      __checkObsolete__(['math']);

      _export("Character", Character = (_dec = (_crd && RegisterCharacter === void 0 ? (_reportPossibleCrUseOfRegisterCharacter({
        error: Error()
      }), RegisterCharacter) : RegisterCharacter)({
        id: "fearOfDemons"
      }), _dec(_class = class Character extends (_crd && CharacterMetaState === void 0 ? (_reportPossibleCrUseOfCharacterMetaState({
        error: Error()
      }), CharacterMetaState) : CharacterMetaState) {
        constructor(...args) {
          super(...args);
          this.name = "恐魔";
          this.AnimationDir = "game/fight_entity/character/fearOfDemons";
          this.AvatarPath = "game/fight_entity/character/fearOfDemons/avatar/spriteFrame";
          this.AnimationType = "Spine";
          this.AnimationScale = 0.65;
          this.HpGrowth = 45;
          this.AttackGrowth = 30;
          this.DefenceGrowth = 15;
          this.PierceGrowth = 15;
          this.SpeedGrowth = 17;
          this.Energy = 90;
          this.CharacterCamp = "dark";
          this.CharacterQuality = 4;
          this.PassiveIntroduceOne = `
    
    额外获得 20% 攻击力
    额外获得 20% 护甲穿透
    `.replace(/ /ig, "");
          this.PassiveIntroduceTwo = `
    
    额外获得 15% 攻击力
    普通攻击有20%的概率会恐惧敌人 持续两回合
    `.replace(/ /ig, "");
          this.SkillIntroduce = `
    
    对一个随机敌人造成150%攻击力的伤害
    并且造成 50% 攻击力的流血2回合
    `.replace(/ /ig, "");
        }

        OnCreateState(self) {
          if (self.star >= 2) {
            self.attack *= 1.2;
            self.pierce *= 1.2;
          }

          if (self.star >= 4) {
            self.attack *= 1.15;
          }
        }

        GetOnAttack() {
          return async (self, actionState, fightMap) => {
            let enemies = self.component.getEnimies(fightMap.allLiveCharacter);
            if (enemies.length <= 0) return;
            enemies = enemies.sort((a, b) => a.coordinate.col - b.coordinate.col);
            actionState.targets.push(enemies[0].state); // 播放动画

            if (fightMap.isPlayAnimation) {
              await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(self.component.node, {
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(actionState.targets[0].component.direction, actionState.targets[0].component.coordinate.row, actionState.targets[0].component.coordinate.col, "attack"),
                moveCurve: true,
                moveTimeScale: actionState.targets[0].component.holAnimation.timeScale
              });
              await self.component.holAnimation.playAnimation("attack", 1, self.component.defaultState);
            } // 结算


            for (const target of actionState.targets) {
              // 添加恐惧
              if (self.star >= 4 && Math.random() < 0.2) {
                const fearBuff = new (_crd && BuffState === void 0 ? (_reportPossibleCrUseOfBuffState({
                  error: Error()
                }), BuffState) : BuffState)({
                  id: "fear"
                });
                target.component.addBuff(self.component, fearBuff);
                fightMap.listenRoundEvent(2, () => target.component.deleteBuff(fearBuff));
              } // 攻击


              fightMap.actionAwaitQueue.push(self.component.attack(self.attack * 1, target.component));
            } // 播放动画


            if (fightMap.isPlayAnimation) {
              await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(self.component.node, {
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(self.component.direction, self.component.coordinate.row, self.component.coordinate.col, "ordinary"),
                moveCurve: true,
                moveTimeScale: self.component.holAnimation.timeScale
              });
            }

            return;
          };
        }

        GetOnSkill() {
          return async (self, actionState, fightMap) => {
            let enemies = self.component.getEnimies(fightMap.allLiveCharacter);
            if (enemies.length <= 0) return;
            actionState.targets.push(enemies[Math.floor(enemies.length * Math.random())].state); // 播放动画

            if (fightMap.isPlayAnimation) {
              await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(self.component.node, {
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(actionState.targets[0].component.direction, actionState.targets[0].component.coordinate.row, actionState.targets[0].component.coordinate.col, "attack"),
                moveCurve: false,
                moveTimeScale: actionState.targets[0].component.holAnimation.timeScale
              });
              await self.component.holAnimation.playAnimation("skill", 1, self.component.defaultState);
            } // 结算


            for (const target of actionState.targets) {
              // 添加流血 TODO
              const bleedBuff = new (_crd && BuffState === void 0 ? (_reportPossibleCrUseOfBuffState({
                error: Error()
              }), BuffState) : BuffState)({
                id: "bleed"
              }, {
                roundReduceBleed: self.attack * 0.5
              });
              target.component.addBuff(self.component, bleedBuff); // 两回合后去掉

              fightMap.listenRoundEvent(2, () => target.component.deleteBuff(bleedBuff)); // 攻击

              fightMap.actionAwaitQueue.push(self.component.attack(self.attack * 1.5, target.component));
            } // 播放动画


            if (fightMap.isPlayAnimation) {
              await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(self.component.node, {
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(self.component.direction, self.component.coordinate.row, self.component.coordinate.col, "ordinary"),
                moveCurve: true,
                moveTimeScale: self.component.holAnimation.timeScale
              });
            }

            return;
          };
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e00902a95a242725894733340f6bb6cbb0d16bfb.js.map