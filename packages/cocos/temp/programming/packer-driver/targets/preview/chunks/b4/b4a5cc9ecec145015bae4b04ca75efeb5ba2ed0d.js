System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, HolPreLoad;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0658jyqi1Hab8ELGP3Cby0", "HolPreLoad", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolPreLoad", HolPreLoad = (_dec = ccclass('HolPreLoad'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class HolPreLoad extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ValueNode", _descriptor, this);

          _initializerDefineProperty(this, "TipNode", _descriptor2, this);

          this.$tips = ["战斗初始化ing"];
          this.$current = 0;
          this.$process = 0;
          this.$completeQueue = [];
          this.$currentIndex = 0;
          this.$accumulateTime = 0;
        }

        setProcess(num) {
          this.$process = num;
        }

        setTips(tips) {
          this.$tips = tips;
        }

        listenComplete(com) {
          this.$completeQueue.push(com);
        }

        update(dt) {
          if (this.$current >= 100) {
            this.$completeQueue.forEach(c => c());
            this.node.active = false;
            return;
          }

          if (this.$current < this.$process) {
            this.$current += dt * 55;
            this.ValueNode.setScale(this.$current / 100, 1, 1);
          }

          this.$accumulateTime -= dt;

          if (this.$accumulateTime <= 0) {
            this.TipNode.getComponent(Label).string = this.$tips[this.$currentIndex];
            this.$currentIndex++;
            this.$accumulateTime = 4;
            if (this.$currentIndex >= this.$tips.length) this.$currentIndex = 0;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ValueNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TipNode", [_dec3], {
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
//# sourceMappingURL=b4a5cc9ecec145015bae4b04ca75efeb5ba2ed0d.js.map