System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GetCharacterCoordinatePosition, util, RegisterCharacter, CharacterMetaState, BuffState, _dec, _class, _crd, Character;

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
        constructor() {
          super(...arguments);
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
          this.PassiveIntroduceOne = "\n    \n    \u989D\u5916\u83B7\u5F97 20% \u653B\u51FB\u529B\n    \u989D\u5916\u83B7\u5F97 20% \u62A4\u7532\u7A7F\u900F\n    ".replace(/ /ig, "");
          this.PassiveIntroduceTwo = "\n    \n    \u989D\u5916\u83B7\u5F97 15% \u653B\u51FB\u529B\n    \u666E\u901A\u653B\u51FB\u670920%\u7684\u6982\u7387\u4F1A\u6050\u60E7\u654C\u4EBA \u6301\u7EED\u4E24\u56DE\u5408\n    ".replace(/ /ig, "");
          this.SkillIntroduce = "\n    \n    \u5BF9\u4E00\u4E2A\u968F\u673A\u654C\u4EBA\u9020\u6210150%\u653B\u51FB\u529B\u7684\u4F24\u5BB3\n    \u5E76\u4E14\u9020\u6210 50% \u653B\u51FB\u529B\u7684\u6D41\u88402\u56DE\u5408\n    ".replace(/ /ig, "");
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
          return /*#__PURE__*/_asyncToGenerator(function* (self, actionState, fightMap) {
            var enemies = self.component.getEnimies(fightMap.allLiveCharacter);
            if (enemies.length <= 0) return;
            enemies = enemies.sort((a, b) => a.coordinate.col - b.coordinate.col);
            actionState.targets.push(enemies[0].state); // 播放动画

            if (fightMap.isPlayAnimation) {
              yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(self.component.node, {
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(actionState.targets[0].component.direction, actionState.targets[0].component.coordinate.row, actionState.targets[0].component.coordinate.col, "attack"),
                moveCurve: true,
                moveTimeScale: actionState.targets[0].component.holAnimation.timeScale
              });
              yield self.component.holAnimation.playAnimation("attack", 1, self.component.defaultState);
            } // 结算


            var _loop = function* _loop(target) {
              // 添加恐惧
              if (self.star >= 4 && Math.random() < 0.2) {
                var fearBuff = new (_crd && BuffState === void 0 ? (_reportPossibleCrUseOfBuffState({
                  error: Error()
                }), BuffState) : BuffState)({
                  id: "fear"
                });
                target.component.addBuff(self.component, fearBuff);
                fightMap.listenRoundEvent(2, () => target.component.deleteBuff(fearBuff));
              } // 攻击


              fightMap.actionAwaitQueue.push(self.component.attack(self.attack * 1, target.component));
            };

            for (var target of actionState.targets) {
              yield* _loop(target);
            } // 播放动画


            if (fightMap.isPlayAnimation) {
              yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
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
          });
        }

        GetOnSkill() {
          return /*#__PURE__*/_asyncToGenerator(function* (self, actionState, fightMap) {
            var enemies = self.component.getEnimies(fightMap.allLiveCharacter);
            if (enemies.length <= 0) return;
            actionState.targets.push(enemies[Math.floor(enemies.length * Math.random())].state); // 播放动画

            if (fightMap.isPlayAnimation) {
              yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.moveNodeToPosition(self.component.node, {
                targetPosition: (_crd && GetCharacterCoordinatePosition === void 0 ? (_reportPossibleCrUseOfGetCharacterCoordinatePosition({
                  error: Error()
                }), GetCharacterCoordinatePosition) : GetCharacterCoordinatePosition)(actionState.targets[0].component.direction, actionState.targets[0].component.coordinate.row, actionState.targets[0].component.coordinate.col, "attack"),
                moveCurve: false,
                moveTimeScale: actionState.targets[0].component.holAnimation.timeScale
              });
              yield self.component.holAnimation.playAnimation("skill", 1, self.component.defaultState);
            } // 结算


            var _loop2 = function* _loop2(target) {
              // 添加流血 TODO
              var bleedBuff = new (_crd && BuffState === void 0 ? (_reportPossibleCrUseOfBuffState({
                error: Error()
              }), BuffState) : BuffState)({
                id: "bleed"
              }, {
                roundReduceBleed: self.attack * 0.5
              });
              target.component.addBuff(self.component, bleedBuff); // 两回合后去掉

              fightMap.listenRoundEvent(2, () => target.component.deleteBuff(bleedBuff)); // 攻击

              fightMap.actionAwaitQueue.push(self.component.attack(self.attack * 1.5, target.component));
            };

            for (var target of actionState.targets) {
              yield* _loop2(target);
            } // 播放动画


            if (fightMap.isPlayAnimation) {
              yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
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
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=12ac6cb7c0e160d5809ccdf722c23a03fb181c1f.js.map