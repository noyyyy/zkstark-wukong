System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, SpriteFrame, util, CharacterEnum, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, HolCharacterAvatar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEnum(extras) {
    _reporterNs.report("CharacterEnum", "../game/fight/character/CharacterEnum", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      CharacterEnum = _unresolved_3.CharacterEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43264FbGrBIrqevHgWxp8Hj", "HolCharacterAvatar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolCharacterAvatar", HolCharacterAvatar = (_dec = ccclass('HolCharacterAvatar'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class HolCharacterAvatar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "AvatarNode", _descriptor, this);

          _initializerDefineProperty(this, "LegendBorderNode", _descriptor2, this);

          _initializerDefineProperty(this, "BorderNode", _descriptor3, this);

          _initializerDefineProperty(this, "CampNode", _descriptor4, this);

          _initializerDefineProperty(this, "LvNode", _descriptor5, this);
        }

        async setCharacter(create) {
          const meta = (_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
            error: Error()
          }), CharacterEnum) : CharacterEnum)[create.id];
          this.AvatarNode.getComponent(Sprite).spriteFrame = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load(meta.AvatarPath, SpriteFrame);
          if (meta.CharacterQuality < 5) this.LegendBorderNode.active = false;
          this.BorderNode.getComponent(Sprite).spriteFrame = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load(`image/quality_border/${meta.CharacterQuality}/spriteFrame`, SpriteFrame);
          this.CampNode.getComponent(Sprite).spriteFrame = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load(`image/camp_icon/${meta.CharacterCamp}/spriteFrame`, SpriteFrame);
          this.LvNode.getComponent(Label).string = 'Lv: ' + create.lv;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "LegendBorderNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BorderNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "CampNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "LvNode", [_dec6], {
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
//# sourceMappingURL=4130d5a429fcb98c000bfa04ed80d119402a4140.js.map