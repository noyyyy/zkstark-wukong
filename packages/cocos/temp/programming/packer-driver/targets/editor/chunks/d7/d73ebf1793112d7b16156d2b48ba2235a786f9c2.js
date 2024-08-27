System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, HolNumberAddReduce;

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
      EditBox = _cc.EditBox;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ffbdo0uGxOJqdYlAy754ac", "HolNumberAddReduce", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolNumberAddReduce", HolNumberAddReduce = (_dec = ccclass('HolNumberAddReduce'), _dec2 = property(Node), _dec(_class = (_class2 = class HolNumberAddReduce extends Component {
        constructor(...args) {
          super(...args);

          // 加减框数据展示
          _initializerDefineProperty(this, "NumberValueNode", _descriptor, this);

          // 数字
          this.$number = 0;
          // 所有改变时队列函数
          this.changeQueue = [];
        }

        // 获取数字
        get number() {
          return this.$number;
        } // 设置数字


        set number(v) {
          this.NumberValueNode.getComponent(EditBox).string = v + '';
        }

        // 监听
        listen(event, call) {
          if (event === "change") this.changeQueue.push(call);
        } // 增加函数


        add() {
          for (const iterator of this.changeQueue) if (!iterator(this.$number, this.$number + 1)) return;

          this.$number++;
          this.number = this.$number;
        } // 减少函数


        reduce() {
          for (const iterator of this.changeQueue) if (!iterator(this.$number, this.$number - 1)) return;

          this.$number--;
          this.number = this.$number;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NumberValueNode", [_dec2], {
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
//# sourceMappingURL=d73ebf1793112d7b16156d2b48ba2235a786f9c2.js.map