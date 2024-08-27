System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, _dec, _class, _crd, ccclass, property, HolPromptMessage;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c34dRaeCxFL4aiCMPWE0ex", "HolPromptMessage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator); // 内容参数

      _export("HolPromptMessage", HolPromptMessage = (_dec = ccclass('HolPromptMessage'), _dec(_class = class HolPromptMessage extends Component {
        constructor(...args) {
          super(...args);
          // 内容状态 0 开始 1 持续 2关闭
          this.$state = 0;
          // 内容在 1 的持续状态
          this.$time = 0;
          // 持续时间
          this.$continueTime = 1;
          // 关闭时的函数
          this.$closeQueue = [];
        }

        // 设置内容
        setContent(option) {
          // 设置游戏内容
          this.node.getChildByName("Message").getComponent(Label).string = option.message; // 设置状态开始

          this.$state = 0; // 初始状态

          this.node.setScale(0, 0, 0); // 持续时间

          this.$continueTime = option.continueTime || 1;
        } // 帧行动


        update(dt) {
          // 渐入
          if (this.$state === 0) {
            if (this.node.scale.x >= 1) {
              this.node.setScale(1, 1, 1);
              this.$state = 1;
              this.$time = 0;
            } else this.node.setScale(this.node.scale.x + dt * 10, this.node.scale.y + dt * 10, this.node.scale.z);
          } // 持续
          else if (this.$state === 1) {
            if (this.$time >= this.$continueTime) this.$state = 2;
            this.$time += dt;
          } // 关闭
          else if (this.$state === 2) {
            this.$closeQueue.forEach(c => c());
          }

          return;
        } // 监听关闭函数


        listen(event, call) {
          if (event === "close") {
            this.$closeQueue.push(call);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d7b0a2451954226d4c9cce5c374af79a4c035fd.js.map