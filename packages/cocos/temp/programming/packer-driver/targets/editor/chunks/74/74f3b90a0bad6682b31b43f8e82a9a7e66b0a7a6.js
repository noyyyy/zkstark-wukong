System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, BasicMetaState, GetCharacterCoordinatePosition, util, CharacterMetaState, _crd;

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
        constructor(...args) {
          super(...args);
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
          this.Energy = 200;
          // 角色生命成长属性 30 ~ 100
          this.HpGrowth = 100;
          // 角色攻击成长属性 5 ~ 40
          this.AttackGrowth = 40;
          // 角色防御成长属性 1 ~ 30
          this.DefenceGrowth = 30;
          // 角色速度成长属性 10 ~ 30
          this.SpeedGrowth = 30;
          // 角色穿透 10 ~ 20
          this.PierceGrowth = 20;
          // 格挡原型 1 ~ 100
          this.Block = 5;
          // 暴击原型 1 ~ 100
          this.Critical = 5;
          // 攻击描述
          this.AttackIntroduce = `普通攻击

    对一个敌人造成攻击力 100% 的伤害
    `;
          // 被动技能一描述
          this.PassiveIntroduceOne = `技能1
    
    无
    `;
          // 被动技能二描述
          this.PassiveIntroduceTwo = `技能2
    
    无
    `;
          // 技能描述
          this.SkillIntroduce = `普通攻击
    
    对一个敌人造成攻击力 130% 的伤害
    `;
        }

        // 默认普通攻击
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


            for (const state of actionState.targets) await self.component.attack(self.attack * 1.0, state.component); // 播放动画


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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74f3b90a0bad6682b31b43f8e82a9a7e66b0a7a6.js.map