System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, SpriteFrame, HolPreLoad, util, _dec, _class, _crd, ccclass, property, PreloadCanvas;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfHolPreLoad(extras) {
    _reporterNs.report("HolPreLoad", "../../prefab/HolPreLoad", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../util/util", _context.meta, extras);
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
      director = _cc.director;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      HolPreLoad = _unresolved_2.HolPreLoad;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5059bpBj49Exahgfu6oqXfN", "PreloadCanvas", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PreloadCanvas", PreloadCanvas = (_dec = ccclass('PreloadCanvas'), _dec(_class = class PreloadCanvas extends Component {
        // 预加载
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            director.preloadScene("Home"); // HolPreLoad

            var holPreLoad = _this.node.getChildByName("HolPreLoad").getComponent(_crd && HolPreLoad === void 0 ? (_reportPossibleCrUseOfHolPreLoad({
              error: Error()
            }), HolPreLoad) : HolPreLoad);

            director.preloadScene("Home");
            holPreLoad.setProcess(20);
            yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.preloadConfirm();
            holPreLoad.setProcess(30);
            yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.preloadPrompt();
            holPreLoad.setProcess(40);
            yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.preloadLoad();
            holPreLoad.setProcess(60);
            yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.loadDir("image/number", SpriteFrame);
            holPreLoad.setProcess(70);
            (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.preloadIntroduce();
            holPreLoad.setProcess(80);
            holPreLoad.setProcess(100); // 监听进度条完成函数

            holPreLoad.listenComplete(() => director.loadScene("Home"));
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f11c79e83397b9a47b2a0efb136add64fcd32a1d.js.map