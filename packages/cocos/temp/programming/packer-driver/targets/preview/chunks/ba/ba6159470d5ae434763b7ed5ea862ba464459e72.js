System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, BasicMetaState, GetCharacterCoordinatePosition, util, CharacterMetaState, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  // 获取阵营伤害率
  function getCampHurtPercent(self, targte) {
    if (self === "ordinary" || targte === "ordinary") return 1.0;
    if (self === "machine" && targte === "nature") return 1.2;
    if (self === "nature" && targte === "machine") return 0.8;
    return 1.0;
  }

  function _reportPossibleCrUseOfBasicMetaState(extras) {
    _reporterNs.report("BasicMetaState", "../BasicMetaState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "./CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetCharacterCoordinatePosition(extras) {
    _reporterNs.report("GetCharacterCoordinatePosition", "../../../prefab/HolCharacter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionState(extras) {
    _reporterNs.report("ActionState", "../ActionState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "../../../scenes/Fight/Canvas/FightMap", _context.meta, extras);
  }

  _export({
    getCampHurtPercent: getCampHurtPercent,
    CharacterMetaState: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      BasicMetaState = _unresolved_2.BasicMetaState;
    }, function (_unresolved_3) {
      GetCharacterCoordinatePosition = _unresolved_3.GetCharacterCoordinatePosition;
    }, function (_unresolved_4) {
      util = _unresolved_4.util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89cbdPiDa1LzailO7ZG/mLe", "CharacterMetaState", undefined);

      __checkObsolete__(['Asset', 'AssetManager', 'resources']);

      _export("CharacterMetaState", CharacterMetaState = class CharacterMetaState extends (_crd && BasicMetaState === void 0 ? (_reportPossibleCrUseOfBasicMetaState({
        error: Error()
      }), BasicMetaState) : BasicMetaState) {
        constructor() {
          super(...arguments);
          // 动画所处文件夹
          this.AnimationDir = void 0;
          // 动画缩放
          this.AnimationScale = 1.0;
          // 动画位置
          this.AnimationPosition = {
            x: 0,
            y: 0
          };
          // 动画方向 1 为右边 -1为左边
          this.AnimationForward = 1;
          // 动画类型
          this.AnimationType = "Spine";
          // 动画bundle
          this.AnimationBundle = resources;
          // 头像路径
          this.AvatarPath = void 0;
          // 角色阵营 普通 自然 深渊
          this.CharacterCamp = "ordinary";
          // 角色品质 1 普通 2 优秀 3 精良 4 史诗 5 传说
          this.CharacterQuality = 1;
          // 角色能量条 10 ~ 200
          this.Energy = 100;
          // 角色生命成长属性 30 ~ 100
          this.HpGrowth = 0;
          // 角色攻击成长属性 5 ~ 40
          this.AttackGrowth = 0;
          // 角色防御成长属性 1 ~ 30
          this.DefenceGrowth = 0;
          // 角色速度成长属性 10 ~ 30
          this.SpeedGrowth = 0;
          // 角色穿透 10 ~ 20
          this.PierceGrowth = 0;
          // 格挡原型 1 ~ 100
          this.Block = 0;
          // 暴击原型 1 ~ 100
          this.Critical = 0;
          // 攻击描述
          this.AttackIntroduce = "\u666E\u901A\u653B\u51FB\n\n    \u5BF9\u4E00\u4E2A\u654C\u4EBA\u9020\u6210\u653B\u51FB\u529B 100% \u7684\u4F24\u5BB3\n    ";
          this.BasicHp = 7000;
          this.BasicAttack = 1800;
          this.BasicUltAttack = 4500;
          this.BasicSpeed = 150;
          this.strength = 0;
          this.agility = 0;
          this.intelligence = 0;
          // 被动技能一描述
          this.PassiveIntroduceOne = "\u6280\u80FD1\n    \n    \u65E0\n    ";
          // 被动技能二描述
          this.PassiveIntroduceTwo = "\u6280\u80FD2\n    \n    \u65E0\n    ";
          // 技能描述
          this.SkillIntroduce = "\u666E\u901A\u653B\u51FB\n    \n    \u5BF9\u4E00\u4E2A\u654C\u4EBA\u9020\u6210\u653B\u51FB\u529B 130% \u7684\u4F24\u5BB3\n    ";
        }

        // 默认普通攻击
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


            for (var state of actionState.targets) yield self.component.attack(self.attack * 1.0, state.component); // 播放动画


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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba6159470d5ae434763b7ed5ea862ba464459e72.js.map