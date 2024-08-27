System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, math, Node, Sprite, SpriteFrame, UITransform, util, _dec, _class, _crd, ccclass, property, HolNumber;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
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


        renderNumber(n, size) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.node.removeAllChildren();

            var abs = ((n > 0 ? "+" : "-") + n + "").replace("--", "-");
            var half = Math.floor(abs.length / 2);
            var numbers = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.loadDir("image/number", SpriteFrame);

            var _loop = function* _loop(i) {
              var node = new Node();

              _this.node.addChild(node);

              var s = node.addComponent(Sprite);
              s.spriteFrame = numbers.filter(s => s.name === abs.charAt(i))[0];
              if (abs.charAt(i) !== "-") s.getComponent(UITransform).setContentSize(new math.Size(size, size));
              var distance = size - size * 0.3;

              if (i < half) {
                node.setPosition(-distance * (half - i), 0, node.position.z);
              } else {
                node.setPosition(distance * (i - half), 0, node.position.z);
              }

              node.getComponent(Sprite).color = _this.$color;
            };

            for (var i = 0; i < abs.length; i++) {
              yield* _loop(i);
            }

            return;
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=677b80c77b0c808b8aec28dd15134d5ec16e8c12.js.map