System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, math, Node, Sprite, SpriteFrame, UITransform, util, _dec, _class, _crd, ccclass, property, HolNumber;

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../util/util", _context.meta, extras);
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
      math = _cc.math;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90730rFfrBASI/TD6/96svv", "HolNumber", undefined);

      __checkObsolete__(['_decorator', 'Component', 'math', 'Node', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolNumber", HolNumber = (_dec = ccclass('HolNumber'), _dec(_class = class HolNumber extends Component {
        constructor(...args) {
          super(...args);
          // 颜色
          this.$color = new math.Color(255, 255, 255, 255);
          // 设置数字
          this.$number = 0;
          // 字体大小
          this.$frontSize = 28;
        }

        get color() {
          return this.$color;
        }

        set color(n) {
          this.$color = n;
          this.node.children.forEach(c => {
            c.getComponent(Sprite).color = this.$color;
          });
        }

        get number() {
          return this.$number;
        }

        set number(n) {
          this.$number = Math.ceil(n);
          this.renderNumber(this.$number, this.frontSize).then();
        }

        get frontSize() {
          return this.$frontSize;
        }

        set frontSize(n) {
          this.$frontSize = n;
        } // 渲染函数


        async renderNumber(n, size) {
          this.node.removeAllChildren();
          const abs = ((n > 0 ? "+" : "-") + n + "").replace("--", "-");
          const half = Math.floor(abs.length / 2);
          const numbers = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.loadDir("image/number", SpriteFrame);

          for (let i = 0; i < abs.length; i++) {
            const node = new Node();
            this.node.addChild(node);
            const s = node.addComponent(Sprite);
            s.spriteFrame = numbers.filter(s => s.name === abs.charAt(i))[0];
            if (abs.charAt(i) !== "-") s.getComponent(UITransform).setContentSize(new math.Size(size, size));
            const distance = size - size * 0.3;

            if (i < half) {
              node.setPosition(-distance * (half - i), 0, node.position.z);
            } else {
              node.setPosition(distance * (i - half), 0, node.position.z);
            }

            node.getComponent(Sprite).color = this.$color;
          }

          return;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3284add26e223d554c28f1c51bfb7f5a1ef481b7.js.map