System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Component, find, Label, sp, CharacterState, util, getConfig, HolUserResource, CharacterEnum, _dec, _class, _crd, ccclass, property, HeroCharacterDetailPorperty;

  // 升级所需金币
  function levelUpNeedGold(create) {
    return Math.ceil((_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
      error: Error()
    }), CharacterEnum) : CharacterEnum)[create.id].CharacterQuality * create.lv * (create.lv / (create.lv + 80) + 1) * 100);
  } // 升级所需钻石


  function levelUpNeedSoule(create) {
    return Math.ceil((_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
      error: Error()
    }), CharacterEnum) : CharacterEnum)[create.id].CharacterQuality * create.lv * (create.lv / (create.lv + 80) + 1) * 100 * 0.5);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "../../../../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../../../../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetConfig(extras) {
    _reporterNs.report("getConfig", "../../../../common/config/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolUserResource(extras) {
    _reporterNs.report("HolUserResource", "../../../../prefab/HolUserResource", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEnum(extras) {
    _reporterNs.report("CharacterEnum", "../../../../game/fight/character/CharacterEnum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      find = _cc.find;
      Label = _cc.Label;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      CharacterState = _unresolved_2.CharacterState;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      getConfig = _unresolved_4.getConfig;
    }, function (_unresolved_5) {
      HolUserResource = _unresolved_5.HolUserResource;
    }, function (_unresolved_6) {
      CharacterEnum = _unresolved_6.CharacterEnum;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['_decorator', 'AudioSource', 'Component', 'find', 'Label', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroCharacterDetailPorperty", HeroCharacterDetailPorperty = (_dec = ccclass('HeroCharacterDetailPorperty'), _dec(_class = class HeroCharacterDetailPorperty extends Component {
        constructor(...args) {
          super(...args);
          // 角色状态
          this.$state = void 0;
          // 是否询问升级
          this.$answerLevelUp = true;
        }

        // 渲染属性
        async renderProperty(create) {
          this.$state = new (_crd && CharacterState === void 0 ? (_reportPossibleCrUseOfCharacterState({
            error: Error()
          }), CharacterState) : CharacterState)(create, null);
          this.node.getChildByName("Name").getComponent(Label).string = "名称: " + this.$state.meta.name;
          this.node.getChildByName("Lv").getComponent(Label).string = "Lv: " + this.$state.lv;
          this.node.getChildByName("Hp").getChildByName("Value").getComponent(Label).string = Math.ceil(this.$state.maxHp) + '';
          this.node.getChildByName("Attack").getChildByName("Value").getComponent(Label).string = Math.ceil(this.$state.attack) + '';
          this.node.getChildByName("Defence").getChildByName("Value").getComponent(Label).string = Math.ceil(this.$state.defence) + '';
          this.node.getChildByName("Speed").getChildByName("Value").getComponent(Label).string = Math.ceil(this.$state.speed) + ''; // 渲染星级

          const starNode = this.node.getChildByName("Star");
          starNode.children.forEach(n => n.active = false);
          starNode.children.forEach(n => n.children[0].active = false);

          for (let i = 0; i < (_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
            error: Error()
          }), CharacterEnum) : CharacterEnum)[create.id].CharacterQuality; i++) starNode.children[i].active = true;

          for (let i = 0; i < create.star; i++) starNode.children[i].children[0].active = true; // 是否满级


          if (create.lv >= 100) {
            this.node.getChildByName("LevelUp").active = false;
          } else {
            this.node.getChildByName("LevelUp").active = true; // 升级所需资源

            this.node.getChildByName("LevelUp").getChildByName("LevelUpGold").getChildByName("Value").getComponent(Label).string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).sundry.formateNumber(levelUpNeedGold(create));
            this.node.getChildByName("LevelUp").getChildByName("LevelUpSoul").getChildByName("Value").getComponent(Label).string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).sundry.formateNumber(levelUpNeedSoule(create));
          }
        } // 显示所有的属性


        async showAllProperty() {
          let message = ``;
          message += ` 生命值: ${Math.ceil(this.$state.maxHp)}\n`;
          message += ` 攻击力: ${Math.ceil(this.$state.attack)}\n`;
          message += ` 防御力: ${Math.ceil(this.$state.defence)}\n`;
          message += ` 速度值: ${Math.ceil(this.$state.speed)}\n`;
          message += ` 穿透值: ${Math.ceil(this.$state.pierce)}\n`;
          message += ` 格挡率: ${Math.ceil(this.$state.block)}%\n`;
          message += ` 暴击率: ${Math.ceil(this.$state.critical)}%\n`;
          message += ` 免伤率: ${Math.ceil(this.$state.FreeInjuryPercent * 100)}%\n`;
          message += ` 最大能量: ${Math.ceil(this.$state.maxEnergy)}\n`;
          await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.introduce({
            message
          });
        } // 英雄升级


        async characterLevelUp() {
          var _levelUpEffectSkeleto;

          const config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
            error: Error()
          }), getConfig) : getConfig)(); // 是否询问

          if (this.$answerLevelUp) {
            const result = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.confirm({
              message: "确定要升级吗?",
              selectBoxMessage: "不再询问",
              selectBoxCallback: b => {
                this.$answerLevelUp = !b;
              }
            }); // 是否确定

            if (result === false) return;
          } // 资源不足


          if (config.userData.gold < levelUpNeedGold(this.$state.create) || config.userData.soul < levelUpNeedSoule(this.$state.create)) return await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.prompt({
            message: "资源不足"
          }); // 资源减少

          config.userData.gold -= levelUpNeedGold(this.$state.create);
          config.userData.soul -= levelUpNeedSoule(this.$state.create); // 角色等级提升

          this.$state.create.lv++; // 重新渲染

          await this.renderProperty(this.$state.create);
          find("Canvas/HolUserResource").getComponent(_crd && HolUserResource === void 0 ? (_reportPossibleCrUseOfHolUserResource({
            error: Error()
          }), HolUserResource) : HolUserResource).render(); // 资源渲染

          const levelUpEffectSkeleton = this.node.getChildByName("LevelUp").getChildByName("LevelUpEffect").getComponent(sp.Skeleton); //播放声音

          const audioSource = levelUpEffectSkeleton.node.getComponent(AudioSource);
          audioSource.volume = config.volume * config.volumeDetail.character;
          audioSource.play(); // 播放动画

          levelUpEffectSkeleton.node.active = true;
          (_levelUpEffectSkeleto = levelUpEffectSkeleton.node.children[0]) == null ? void 0 : _levelUpEffectSkeleto.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          levelUpEffectSkeleton.setAnimation(0, "animation", false);
          levelUpEffectSkeleton.setCompleteListener(() => levelUpEffectSkeleton.node.active = false);
        }

      }) || _class));

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ba297dc45166322617956b60a89c4607d4a28de.js.map