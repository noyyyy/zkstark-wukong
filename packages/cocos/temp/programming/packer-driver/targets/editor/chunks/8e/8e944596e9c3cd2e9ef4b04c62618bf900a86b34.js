System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, SpriteFrame, HolPreLoad, util, _dec, _class, _crd, ccclass, property, PreloadCanvas;

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
        async start() {
          director.preloadScene("Home"); // HolPreLoad

          const holPreLoad = this.node.getChildByName("HolPreLoad").getComponent(_crd && HolPreLoad === void 0 ? (_reportPossibleCrUseOfHolPreLoad({
            error: Error()
          }), HolPreLoad) : HolPreLoad);
          director.preloadScene("Home");
          holPreLoad.setProcess(20);
          await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.preloadConfirm();
          holPreLoad.setProcess(30);
          await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.preloadPrompt();
          holPreLoad.setProcess(40);
          await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.preloadLoad();
          holPreLoad.setProcess(60);
          await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.loadDir("image/number", SpriteFrame);
          holPreLoad.setProcess(70);
          (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.preloadIntroduce();
          holPreLoad.setProcess(80);
          holPreLoad.setProcess(100); // 监听进度条完成函数

          holPreLoad.listenComplete(() => director.loadScene("Home"));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e944596e9c3cd2e9ef4b04c62618bf900a86b34.js.map