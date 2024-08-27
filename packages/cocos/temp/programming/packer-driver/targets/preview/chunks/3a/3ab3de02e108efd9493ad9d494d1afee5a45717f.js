System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GetCharacterCoordinatePosition, util, BuffState, RegisterCharacter, CharacterMetaState, _dec, _class, _crd, Character;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfBuffState(extras) {
    _reporterNs.report("BuffState", "../../fight/buff/BuffState", _context.meta, extras);
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
      BuffState = _unresolved_4.BuffState;
    }, function (_unresolved_5) {
      RegisterCharacter = _unresolved_5.RegisterCharacter;
    }, function (_unresolved_6) {
      CharacterMetaState = _unresolved_6.CharacterMetaState;
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
        constructor() {
          super(...arguments);
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
          this.PassiveIntroduceOne = "\n    \n    \u989D\u5916\u83B7\u5F97 20% \u901F\u5EA6\n    \u989D\u5916\u83B7\u5F97 20% \u653B\u51FB\u529B\n    \u989D\u5916\u83B7\u5F97 20% \u62A4\u7532\u7A7F\u900F\n    ".replace(/ /ig, "");
          this.PassiveIntroduceTwo = "\n    \n    \u989D\u5916\u83B7\u5F97 20% \u751F\u547D\u503C\n    \u989D\u5916\u83B7\u5F97 20% \u653B\u51FB\u529B\n    \u6BCF\u6B21\u653B\u51FB\u540E\u6709 20% \u6982\u7387\u518D\u6B21\u51FA\u624B\n    ".replace(/ /ig, "");
          this.SkillIntroduce = "\n    \n    \u5BF9\u4E00\u6392\u654C\u4EBA\u9020\u6210150%\u653B\u51FB\u529B\u7684\u4F24\u5BB3\n    \u5E76\u4E14\u7729\u6655\u654C\u4EBA2\u56DE\u5408\n    ".replace(/ /ig, "");
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
          return /*#__PURE__*/_asyncToGenerator(function* (self, actionState, fightMap) {
            var selfComponent = self.component; // 获取敌人

            var enemys = selfComponent.getEnimies(fightMap.allLiveCharacter).sort((a, b) => a.coordinate.col - b.coordinate.col);
            var enemy = enemys[0];
            if (!enemy) return;
            actionState.targets.push(enemy.state); // 播放动画

            if (fightMap.isPlayAnimation) {
              // 移动过去
              yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(selfComponent.node, {
                moveCurve: true,
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(enemy.direction, enemy.coordinate.row, enemy.coordinate.col, "attack"),
                moveTimeScale: self.component.holAnimation.timeScale
              });
              yield selfComponent.holAnimation.playAnimation("attack", 1, selfComponent.defaultState);
            } // 造成伤害


            for (var target of actionState.targets) yield selfComponent.attack(self.attack * 1.0, target.component); // 回到原位


            if (fightMap.isPlayAnimation) {
              yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
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
          });
        }

        GetOnSkill() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, actionState, fightMap) {
            var selfComponent = self.component; // 获取敌人

            var enemys = selfComponent.getEnimies(fightMap.allLiveCharacter).sort((a, b) => a.coordinate.col - b.coordinate.col);
            var enemy = enemys[0];
            if (!enemy) return;
            actionState.targets.push(enemy.state);
            enemys.forEach((e, i) => {
              if (i === 0) return;
              if (e.coordinate.row === enemy.coordinate.row) actionState.targets.push(e.state);
            }); // 播放动画

            if (fightMap.isPlayAnimation) {
              // 移动过去
              yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(selfComponent.node, {
                moveCurve: true,
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(enemy.direction, enemy.coordinate.row, enemy.coordinate.col, "attack"),
                moveTimeScale: self.component.holAnimation.timeScale
              });
              yield selfComponent.holAnimation.playAnimation("skill", 1);
              selfComponent.holAnimation.playAnimation(selfComponent.defaultState);
            } // 造成伤害 ...


            var _loop = function* _loop(target) {
              // 添加眩晕状态
              var vertigo = new (_crd && BuffState === void 0 ? (_reportPossibleCrUseOfBuffState({
                error: Error()
              }), BuffState) : BuffState)({
                id: "vertigo"
              });
              target.component.addBuff(selfComponent, vertigo); // 两回合后去掉

              fightMap.listenRoundEvent(2, () => target.component.deleteBuff(vertigo)); // 攻击

              fightMap.actionAwaitQueue.push(selfComponent.attack(self.attack * 1.5, target.component));
            };

            for (var target of actionState.targets) {
              yield* _loop(target);
            } // 回到原位


            if (fightMap.isPlayAnimation) yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).sundry.moveNodeToPosition(selfComponent.node, {
              moveCurve: true,
              targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                error: Error()
              }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(selfComponent.direction, selfComponent.coordinate.row, selfComponent.coordinate.col),
              moveTimeScale: self.component.holAnimation.timeScale
            });
            return;
          });
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ab3de02e108efd9493ad9d494d1afee5a45717f.js.map