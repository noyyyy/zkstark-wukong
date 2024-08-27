System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Component, find, Label, sp, CharacterState, util, getConfig, HolUserResource, CharacterEnum, _dec, _class, _crd, ccclass, property, HeroCharacterDetailPorperty;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      _cclegacy = _cc.cclegacy;
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

      _cclegacy._RF.push({}, "93a3cHGdu9D9rjpsodeldha", "HeroCharacterDetailPorperty", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Component', 'find', 'Label', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroCharacterDetailPorperty", HeroCharacterDetailPorperty = (_dec = ccclass('HeroCharacterDetailPorperty'), _dec(_class = class HeroCharacterDetailPorperty extends Component {
        constructor() {
          super(...arguments);
          // 角色状态
          this.$state = void 0;
          // 是否询问升级
          this.$answerLevelUp = true;
        }

        // 渲染属性
        renderProperty(create) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.$state = new (_crd && CharacterState === void 0 ? (_reportPossibleCrUseOfCharacterState({
              error: Error()
            }), CharacterState) : CharacterState)(create, null);
            _this.node.getChildByName("Name").getComponent(Label).string = "名称: " + _this.$state.meta.name;
            _this.node.getChildByName("Lv").getComponent(Label).string = "Lv: " + _this.$state.lv;
            _this.node.getChildByName("Hp").getChildByName("Value").getComponent(Label).string = Math.ceil(_this.$state.maxHp) + '';
            _this.node.getChildByName("Attack").getChildByName("Value").getComponent(Label).string = Math.ceil(_this.$state.attack) + '';
            _this.node.getChildByName("Defence").getChildByName("Value").getComponent(Label).string = Math.ceil(_this.$state.defence) + '';
            _this.node.getChildByName("Speed").getChildByName("Value").getComponent(Label).string = Math.ceil(_this.$state.speed) + ''; // 渲染星级

            var starNode = _this.node.getChildByName("Star");

            starNode.children.forEach(n => n.active = false);
            starNode.children.forEach(n => n.children[0].active = false);

            for (var i = 0; i < (_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
              error: Error()
            }), CharacterEnum) : CharacterEnum)[create.id].CharacterQuality; i++) starNode.children[i].active = true;

            for (var _i = 0; _i < create.star; _i++) starNode.children[_i].children[0].active = true; // 是否满级


            if (create.lv >= 100) {
              _this.node.getChildByName("LevelUp").active = false;
            } else {
              _this.node.getChildByName("LevelUp").active = true; // 升级所需资源

              _this.node.getChildByName("LevelUp").getChildByName("LevelUpGold").getChildByName("Value").getComponent(Label).string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.formateNumber(levelUpNeedGold(create));
              _this.node.getChildByName("LevelUp").getChildByName("LevelUpSoul").getChildByName("Value").getComponent(Label).string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).sundry.formateNumber(levelUpNeedSoule(create));
            }
          })();
        } // 显示所有的属性


        showAllProperty() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var message = "";
            message += " \u751F\u547D\u503C: " + Math.ceil(_this2.$state.maxHp) + "\n";
            message += " \u653B\u51FB\u529B: " + Math.ceil(_this2.$state.attack) + "\n";
            message += " \u9632\u5FA1\u529B: " + Math.ceil(_this2.$state.defence) + "\n";
            message += " \u901F\u5EA6\u503C: " + Math.ceil(_this2.$state.speed) + "\n";
            message += " \u7A7F\u900F\u503C: " + Math.ceil(_this2.$state.pierce) + "\n";
            message += " \u683C\u6321\u7387: " + Math.ceil(_this2.$state.block) + "%\n";
            message += " \u66B4\u51FB\u7387: " + Math.ceil(_this2.$state.critical) + "%\n";
            message += " \u514D\u4F24\u7387: " + Math.ceil(_this2.$state.FreeInjuryPercent * 100) + "%\n";
            message += " \u6700\u5927\u80FD\u91CF: " + Math.ceil(_this2.$state.maxEnergy) + "\n";
            yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.introduce({
              message
            });
          })();
        } // 英雄升级


        characterLevelUp() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var _levelUpEffectSkeleto;

            var config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
              error: Error()
            }), getConfig) : getConfig)(); // 是否询问

            if (_this3.$answerLevelUp) {
              var result = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).message.confirm({
                message: "确定要升级吗?",
                selectBoxMessage: "不再询问",
                selectBoxCallback: b => {
                  _this3.$answerLevelUp = !b;
                }
              }); // 是否确定

              if (result === false) return;
            } // 资源不足


            if (config.userData.gold < levelUpNeedGold(_this3.$state.create) || config.userData.soul < levelUpNeedSoule(_this3.$state.create)) return yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.prompt({
              message: "资源不足"
            }); // 资源减少

            config.userData.gold -= levelUpNeedGold(_this3.$state.create);
            config.userData.soul -= levelUpNeedSoule(_this3.$state.create); // 角色等级提升

            _this3.$state.create.lv++; // 重新渲染

            yield _this3.renderProperty(_this3.$state.create);
            find("Canvas/HolUserResource").getComponent(_crd && HolUserResource === void 0 ? (_reportPossibleCrUseOfHolUserResource({
              error: Error()
            }), HolUserResource) : HolUserResource).render(); // 资源渲染

            var levelUpEffectSkeleton = _this3.node.getChildByName("LevelUp").getChildByName("LevelUpEffect").getComponent(sp.Skeleton); //播放声音


            var audioSource = levelUpEffectSkeleton.node.getComponent(AudioSource);
            audioSource.volume = config.volume * config.volumeDetail.character;
            audioSource.play(); // 播放动画

            levelUpEffectSkeleton.node.active = true;
            (_levelUpEffectSkeleto = levelUpEffectSkeleton.node.children[0]) == null ? void 0 : _levelUpEffectSkeleto.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            levelUpEffectSkeleton.setAnimation(0, "animation", false);
            levelUpEffectSkeleton.setCompleteListener(() => levelUpEffectSkeleton.node.active = false);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=73c714d178d3c45e62ded7e5e68b19ddc6be28f7.js.map