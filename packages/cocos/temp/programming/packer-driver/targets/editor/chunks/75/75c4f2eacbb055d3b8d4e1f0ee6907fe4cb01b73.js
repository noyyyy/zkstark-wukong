System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GetCharacterCoordinatePosition, util, RegisterCharacter, CharacterMetaState, _dec, _class, _crd, Character;

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

  function _reportPossibleCrUseOfRegisterCharacter(extras) {
    _reporterNs.report("RegisterCharacter", "../../fight/character/CharacterEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterMetaState(extras) {
    _reporterNs.report("CharacterMetaState", "../../fight/character/CharacterMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "../../fight/character/CharacterState", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5ba8pN1lZA0K1g+gBcnDhG", "sunwukong", undefined);

      __checkObsolete__(['math']);

      Character = (_dec = (_crd && RegisterCharacter === void 0 ? (_reportPossibleCrUseOfRegisterCharacter({
        error: Error()
      }), RegisterCharacter) : RegisterCharacter)({
        id: "sunwukong"
      }), _dec(_class = class Character extends (_crd && CharacterMetaState === void 0 ? (_reportPossibleCrUseOfCharacterMetaState({
        error: Error()
      }), CharacterMetaState) : CharacterMetaState) {
        constructor(...args) {
          super(...args);
          this.name = "孙悟空";
          this.AnimationDir = "game/fight_entity/character/sunwukong";
          this.AnimationType = "Spine";
          this.AvatarPath = "game/fight_entity/character/sunwukong/avatar/spriteFrame";
          this.CharacterCamp = "sacred";
          this.CharacterQuality = 5;
          this.AnimationScale = 0.7;
          this.HpGrowth = 70;
          this.AttackGrowth = 25;
          this.DefenceGrowth = 20;
          this.PierceGrowth = 10;
          this.SpeedGrowth = 15;
          this.Energy = 100;
          this.PassiveIntroduceOne = `
    
    额外获得 20% 速度
    额外获得 20% 攻击力
    额外获得 20% 护甲穿透
    `.replace(/ /ig, "");
          this.PassiveIntroduceTwo = `
    
    额外获得 20% 生命值
    额外获得 20% 攻击力
    每次攻击后有 20% 概率再次出手
    `.replace(/ /ig, "");
          this.SkillIntroduce = `
    
    对一排敌人造成150%攻击力的伤害
    并且眩晕敌人2回合
    `.replace(/ /ig, "");
        }

        OnCreateState(self) {
          if (self.star >= 2) {
            self.speed *= 1.2;
            self.attack *= 1.2;
            self.pierce *= 1.2;
          }

          if (self.star >= 4) {
            self.maxHp *= 1.2;
            self.attack *= 1.2;
          }
        }

        GetOnAttack() {
          return async (self, actionState, fightMap) => {
            const selfComponent = self.component; // 获取敌人

            const enemys = selfComponent.getEnimies(fightMap.allLiveCharacter).sort((a, b) => a.coordinate.col - b.coordinate.col);
            const enemy = enemys[0];
            if (!enemy) return;
            actionState.targets.push(enemy.state); // 播放动画

            if (fightMap.isPlayAnimation) {
              // 移动过去
              await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(selfComponent.node, {
                moveCurve: true,
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(enemy.direction, enemy.coordinate.row, enemy.coordinate.col, "attack"),
                moveTimeScale: self.component.holAnimation.timeScale
              });
              await selfComponent.holAnimation.playAnimation("attack", 1, selfComponent.defaultState);
            } // 造成伤害


            for (const target of actionState.targets) await selfComponent.attack(self.attack * 1.0, target.component); // 回到原位


            if (fightMap.isPlayAnimation) {
              await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(selfComponent.node, {
                moveCurve: true,
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(selfComponent.direction, selfComponent.coordinate.row, selfComponent.coordinate.col),
                moveTimeScale: self.component.holAnimation.timeScale
              });
            } // 再次出手 20% 概率
            // if ( self.star >= 4 && Math.random() < 0.2 ) {
            //     if (fightMap.isPlayAnimation) await self.component.showString("再次出手")
            //     await self.component.action()
            // }


            return;
          };
        }

        GetOnSkill() {
          return async (self, actionState, fightMap) => {
            const selfComponent = self.component; // 获取敌人

            const enemys = selfComponent.getEnimies(fightMap.allLiveCharacter).sort((a, b) => a.coordinate.col - b.coordinate.col);
            const enemy = enemys[0];
            if (!enemy) return;
            actionState.targets.push(enemy.state);
            enemys.forEach((e, i) => {
              if (i === 0) return;
              if (e.coordinate.row === enemy.coordinate.row) actionState.targets.push(e.state);
            }); // 播放动画

            if (fightMap.isPlayAnimation) {
              // 移动过去
              await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(selfComponent.node, {
                moveCurve: true,
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(enemy.direction, enemy.coordinate.row, enemy.coordinate.col, "attack"),
                moveTimeScale: self.component.holAnimation.timeScale
              });
              await selfComponent.holAnimation.playAnimation("skill", 1);
              selfComponent.holAnimation.playAnimation(selfComponent.defaultState);
            } // 造成伤害 ...
            // for (const target of actionState.targets) {
            //     // 添加眩晕状态
            //     const vertigo = new BuffState({id: "vertigo"})
            //     target.component.addBuff(selfComponent , vertigo)
            //     // 两回合后去掉
            //     fightMap.listenRoundEvent(2 , () => target.component.deleteBuff(vertigo) )
            //     // 攻击
            //     fightMap.actionAwaitQueue.push(
            //         selfComponent.attack(self.attack * 1.5 , target.component)
            //     )
            // }
            // 回到原位


            if (fightMap.isPlayAnimation) await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).sundry.moveNodeToPosition(selfComponent.node, {
              moveCurve: true,
              targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                error: Error()
              }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(selfComponent.direction, selfComponent.coordinate.row, selfComponent.coordinate.col),
              moveTimeScale: self.component.holAnimation.timeScale
            });
            return;
          };
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75c4f2eacbb055d3b8d4e1f0ee6907fe4cb01b73.js.map