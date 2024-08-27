System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, HolIntroduceMessage;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

      _cclegacy._RF.push({}, "9e604r1pLVLpow1G6R+RIFb", "HolIntroduceMessage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Event', 'find', 'Label', 'Node', 'NodeEventType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolIntroduceMessage", HolIntroduceMessage = (_dec = ccclass('HolIntroduceMessage'), _dec2 = property(Node), _dec(_class = (_class2 = class HolIntroduceMessage extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ContentNode", _descriptor, this);

          this.$closeQueue = [];
        }

        listen(e, fn) {
          if (e === "close") this.$closeQueue.push(fn);
        } // 设置内容


        setContent(option) {
          var _this = this;

          this.ContentNode.getComponent(Label).string = option.message;
          var introduceNode = this.node.getChildByName("Introduce");

          if (option.buttonOne) {
            var buttonOne = introduceNode.getChildByName("ButtonOne");
            buttonOne.getChildByName("Value").getComponent(Label).string = option.buttonOne.message;
            buttonOne.active = true;
            buttonOne.on("click", /*#__PURE__*/_asyncToGenerator(function* () {
              yield option.buttonOne.callback();

              _this.closeNode();
            }));
          }

          if (option.buttonTwo) {
            var buttonTwo = introduceNode.getChildByName("ButtonTwo");
            buttonTwo.getChildByName("Value").getComponent(Label).string = option.buttonTwo.message;
            buttonTwo.active = true;
            buttonTwo.on("click", /*#__PURE__*/_asyncToGenerator(function* () {
              yield option.buttonTwo.callback();

              _this.closeNode();
            }));
          }
        } // 关闭函数


        closeNode() {
          var introduceNode = this.node.getChildByName("Introduce");
          introduceNode.getChildByName("ButtonOne").off("click");
          introduceNode.getChildByName("ButtonTwo").off("click");

          for (var close of this.$closeQueue) close();
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
//# sourceMappingURL=93c2a9ae924ad2f08f06b91e8d84bba8cc3d0bb9.js.map