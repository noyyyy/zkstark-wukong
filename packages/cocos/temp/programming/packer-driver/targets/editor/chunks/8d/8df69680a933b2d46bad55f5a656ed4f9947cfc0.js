System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Node, Prefab, util, HolCharacterAvatar, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, HolCharactersQueue;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolCharacterAvatar(extras) {
    _reporterNs.report("HolCharacterAvatar", "./HolCharacterAvatar", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      HolCharacterAvatar = _unresolved_3.HolCharacterAvatar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "abd83hH2fBAwbvcAJ5rKFLb", "HolCharactersQueue", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolCharactersQueue", HolCharactersQueue = (_dec = ccclass('HolCharactersQueue'), _dec2 = property(Node), _dec(_class = (_class2 = class HolCharactersQueue extends Component {
        constructor(...args) {
          super(...args);

          // 内容节点
          _initializerDefineProperty(this, "ContentNode", _descriptor, this);
        }

        // 渲染函数
        async render(characters, clickFun) {
          const nodePool = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).resource.getNodePool(await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load("prefab/HolCharacterAvatar", Prefab));
          const childrens = [...this.ContentNode.children];

          for (let i = 0; i < childrens.length; i++) {
            const node = childrens[i];
            node.off("click");
            node.getComponent(Button).transition = 0;
            nodePool.put(node);
          }

          for (const character of characters) {
            const node = nodePool.get();
            const characterAvatar = node.getComponent(_crd && HolCharacterAvatar === void 0 ? (_reportPossibleCrUseOfHolCharacterAvatar({
              error: Error()
            }), HolCharacterAvatar) : HolCharacterAvatar);
            characterAvatar.setCharacter(character);
            node.getComponent(Button).transition = 3;
            node.getComponent(Button).zoomScale = 0.9;
            this.ContentNode.addChild(node); // 绑定事件

            node.on("click", () => {
              if (clickFun) clickFun(character, node);
            });
            continue;
          }

          return;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ContentNode", [_dec2], {
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
//# sourceMappingURL=8df69680a933b2d46bad55f5a656ed4f9947cfc0.js.map