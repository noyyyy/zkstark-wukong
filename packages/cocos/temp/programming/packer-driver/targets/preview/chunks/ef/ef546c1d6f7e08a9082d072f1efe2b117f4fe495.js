System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, util, _dec, _class, _crd, ccclass, property, HomeUi;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        OpenHero() {
          return _asyncToGenerator(function* () {
            var close = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.load();
            director.preloadScene("Hero", () => {
              close();
            });
            director.loadScene("Hero");
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef546c1d6f7e08a9082d072f1efe2b117f4fe495.js.map