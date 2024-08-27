System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, util, _dec, _class, _crd, ccclass, property, HomeUi;

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../util/util", _context.meta, extras);
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
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "782cf+Dy9dFf7O/Zh1qXRXq", "HomeUi", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HomeUi", HomeUi = (_dec = ccclass('HomeUi'), _dec(_class = class HomeUi extends Component {
        // 打开背包
        async OpenHero() {
          const close = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.load();
          director.preloadScene("Hero", () => {
            close();
          });
          director.loadScene("Hero");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e9ec6b06932273d0e5616299e493461cc4fc86d.js.map