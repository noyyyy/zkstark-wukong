System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Toggle, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, HolConfirmMessage;

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
      Toggle = _cc.Toggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a13cfh3ZHlNRaNMDvNyEpUp", "HolConfirmMessage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventHandheld', 'Label', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator); // 内容选项

      _export("HolConfirmMessage", HolConfirmMessage = (_dec = ccclass('HolConfirmMessage'), _dec2 = property(Node), _dec(_class = (_class2 = class HolConfirmMessage extends Component {
        constructor() {
          super(...arguments);

          // 内容节点
          _initializerDefineProperty(this, "ContentNode", _descriptor, this);

          /** 
           * 所有确定时的回调 
           * 两个按钮并不会有任何行为，但是可以绑定对应的行为
           */
          this.$sureQueue = [];

          /** 
           * 所有确定时的回调 
           * 两个按钮并不会有任何行为，但是可以绑定对应的行为
           */
          this.$cancelQueue = [];

          /** 
           * 所有关闭时的回调 
           * 本质上关闭不会进行任何操作
           * 可以设置关闭回调来指定关闭时的行为
           */
          this.$closeQueue = [];
        }

        /** 
         * 设置确认框内容
         * 具体参数信息可以参考ContentOption类型
         */
        setContent(co) {
          // 标题
          this.node.getChildByName("Title").getComponent(Label).string = co.title || "标题"; // 清空空格

          co.message = co.message.replace(/ /ig, "");
          co.message = co.message.replace(/&nbsp;/ig, " "); // 内容

          this.ContentNode.getComponent(Label).string = co.message; // 选择框内容

          if (co.selectBoxMessage) {
            var radioNode = this.node.getChildByName("Radio");
            radioNode.active = true;
            radioNode.getChildByName("RadioMessage").getComponent(Label).string = co.selectBoxMessage;
            radioNode.on("click", () => {
              co.selectBoxCallback && co.selectBoxCallback(radioNode.getComponent(Toggle).isChecked);
            });
          } // 事件


          this.$sureQueue.concat(Array.from(co.sureQueue || []));
          this.$cancelQueue.concat(Array.from(co.cancelQueue || []));
          this.$closeQueue.concat(Array.from(co.closeQueue || []));
        }
        /** 
         * 绑定事件到对应的回调队列
         * sure 绑定确定的回调
         * cancel 绑定取消的回调
         * close 绑定关闭的回调
         */


        listen(event, callback) {
          if (event === "sure") return this.$sureQueue.push(callback);
          if (event === "cancel") return this.$cancelQueue.push(callback);
          if (event === "close") return this.$closeQueue.push(callback);
        }
        /** 
         * 确认按钮点击事件
         */


        sure() {
          this.$sureQueue.forEach(c => c());
        }
        /** 
         * 取消按钮点击事件
         */


        cancel() {
          this.$cancelQueue.forEach(c => c());
        }
        /** 
         * 关闭本界面
         */


        closeConfirm() {
          this.$closeQueue.forEach(c => c());
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
//# sourceMappingURL=8e14889c274eda0861ad86b7cc644085b1e2eac7.js.map