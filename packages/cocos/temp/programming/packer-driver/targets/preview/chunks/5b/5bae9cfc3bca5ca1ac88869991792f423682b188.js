System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, HolCharacter, util, FightMap, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FightUi;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHolCharacter(extras) {
    _reporterNs.report("HolCharacter", "../../../prefab/HolCharacter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "./FightMap", _context.meta, extras);
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
    }, function (_unresolved_2) {
      HolCharacter = _unresolved_2.HolCharacter;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      FightMap = _unresolved_4.FightMap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b8eap4J+xBHrJ+oBQjjzgR", "FightUi", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Event', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightUi", FightUi = (_dec = ccclass('FightUi'), _dec2 = property(Node), _dec(_class = (_class2 = class FightUi extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "FightMapNode", _descriptor, this);

          // 当前倍速
          this.timeScale = 1;
        }

        // 倍速
        setTimeScale(e) {
          this.timeScale++;
          if (this.timeScale > 3) this.timeScale = 1;

          for (var node of this.FightMapNode.children) node.getComponent(_crd && HolCharacter === void 0 ? (_reportPossibleCrUseOfHolCharacter({
            error: Error()
          }), HolCharacter) : HolCharacter).holAnimation.timeScale = this.timeScale;

          e.target.getChildByName("Value").getComponent(Label).string = "x" + this.timeScale;
          return;
        } // 跳过战斗


        skipFight() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var result = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.confirm({
              message: "确定要跳过战斗吗?"
            });

            if (result) {
              _this.FightMapNode.getComponent(_crd && FightMap === void 0 ? (_reportPossibleCrUseOfFightMap({
                error: Error()
              }), FightMap) : FightMap).isPlayAnimation = false;
            }
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "FightMapNode", [_dec2], {
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
//# sourceMappingURL=5bae9cfc3bca5ca1ac88869991792f423682b188.js.map