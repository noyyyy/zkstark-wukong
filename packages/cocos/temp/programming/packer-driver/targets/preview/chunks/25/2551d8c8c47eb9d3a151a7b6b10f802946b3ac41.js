System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, util, getConfig, _dec, _class, _crd, ccclass, property, FightCanvas;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetConfig(extras) {
    _reporterNs.report("getConfig", "../../common/config/config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      getConfig = _unresolved_3.getConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13e46cApPRM+I+/SCiCGUpl", "FightCanvas", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightCanvas", FightCanvas = (_dec = ccclass('FightCanvas'), _dec(_class = class FightCanvas extends Component {
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // 初始化音乐
            var config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
              error: Error()
            }), getConfig) : getConfig)(); // 音乐们

            var musics = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.loadDir("sound/fight/back", AudioClip);
            var music = musics[Math.floor(musics.length * Math.random())];

            var audioSource = _this.node.getComponent(AudioSource);

            audioSource.clip = music;
            audioSource.volume = config.volume * config.volumeDetail.home;
            audioSource.play();
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2551d8c8c47eb9d3a151a7b6b10f802946b3ac41.js.map