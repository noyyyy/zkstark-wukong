System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, util, HolAnimation, CharacterEnum, HeroCharacterDetailPorperty, HeroAllHeros, getConfig, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, HeroCharacterDetail;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../../../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolAnimation(extras) {
    _reporterNs.report("HolAnimation", "../../../prefab/HolAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEnum(extras) {
    _reporterNs.report("CharacterEnum", "../../../game/fight/character/CharacterEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroCharacterDetailPorperty(extras) {
    _reporterNs.report("HeroCharacterDetailPorperty", "./CharacterDetail/HeroCharacterDetailPorperty", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAllHeros(extras) {
    _reporterNs.report("HeroAllHeros", "./HeroAllHeros", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetConfig(extras) {
    _reporterNs.report("getConfig", "../../../common/config/config", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      HolAnimation = _unresolved_3.HolAnimation;
    }, function (_unresolved_4) {
      CharacterEnum = _unresolved_4.CharacterEnum;
    }, function (_unresolved_5) {
      HeroCharacterDetailPorperty = _unresolved_5.HeroCharacterDetailPorperty;
    }, function (_unresolved_6) {
      HeroAllHeros = _unresolved_6.HeroAllHeros;
    }, function (_unresolved_7) {
      getConfig = _unresolved_7.getConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ece1mC3X9MrIY6zxrT7spT", "HeroCharacterDetail", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroCharacterDetail", HeroCharacterDetail = (_dec = ccclass('HeroCharacterDetail'), _dec2 = property(Node), _dec(_class = (_class2 = class HeroCharacterDetail extends Component {
        constructor(...args) {
          super(...args);

          // 所有角色的节点
          _initializerDefineProperty(this, "HeroAllHeroNode", _descriptor, this);

          // 上一次的角色动画
          this.$lastaNimation = void 0;
        }

        // 返回
        async goBack() {
          this.node.active = false;
          const config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
            error: Error()
          }), getConfig) : getConfig)();
          const close = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.load();
          const cahracterQueue = [];
          config.userData.characterQueue.forEach(cq => cq.forEach(c => {
            if (c) cahracterQueue.push(c);
          }));
          await this.HeroAllHeroNode.getComponent(_crd && HeroAllHeros === void 0 ? (_reportPossibleCrUseOfHeroAllHeros({
            error: Error()
          }), HeroAllHeros) : HeroAllHeros).render([].concat(cahracterQueue, config.userData.characters), async (c, n) => {
            const characterDetail = this.node.parent.getChildByName("CharacterDetail");
            characterDetail.active = true;
            await characterDetail.getComponent(HeroCharacterDetail).setCharacter(c);
          });
          close();
        }

        // 设置角色
        async setCharacter(create) {
          const propertyNode = this.node.getChildByName("Property");
          const close = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.load();
          const characterAnimationNode = this.node.getChildByName("CharacterAnimation");
          if (this.$lastaNimation) characterAnimationNode.removeChild(this.$lastaNimation);
          const meta = (_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
            error: Error()
          }), CharacterEnum) : CharacterEnum)[create.id];
          const holAnimationPrefab = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load("prefab/HolAnimation", Prefab);
          const holAnimationNode = instantiate(holAnimationPrefab);
          characterAnimationNode.addChild(holAnimationNode);
          await holAnimationNode.getComponent(_crd && HolAnimation === void 0 ? (_reportPossibleCrUseOfHolAnimation({
            error: Error()
          }), HolAnimation) : HolAnimation).initBones({
            animationScale: meta.AnimationScale * 1.7,
            animationDir: meta.AnimationDir,
            animationType: meta.AnimationType,
            animationPosition: meta.AnimationPosition
          });
          characterAnimationNode.addChild(holAnimationNode);
          this.$lastaNimation = holAnimationNode;
          holAnimationNode.active = false; // 设置属性

          await propertyNode.getComponent(_crd && HeroCharacterDetailPorperty === void 0 ? (_reportPossibleCrUseOfHeroCharacterDetailPorperty({
            error: Error()
          }), HeroCharacterDetailPorperty) : HeroCharacterDetailPorperty).renderProperty(create);
          close();
          setTimeout(async () => {
            holAnimationNode.active = true;
            holAnimationNode.getComponent(_crd && HolAnimation === void 0 ? (_reportPossibleCrUseOfHolAnimation({
              error: Error()
            }), HolAnimation) : HolAnimation).playAnimation("rebirth", 1, "rest");
          }, 50);
          return;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "HeroAllHeroNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c121c428da109119f2e4826f6decc20271a5933.js.map