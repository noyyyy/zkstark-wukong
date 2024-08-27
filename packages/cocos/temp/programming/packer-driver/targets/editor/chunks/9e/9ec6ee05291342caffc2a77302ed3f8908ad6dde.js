System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, util, getConfig, _dec, _class, _crd, ccclass, property, FightCanvas;

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
        async start() {
          // 初始化音乐
          const config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
            error: Error()
          }), getConfig) : getConfig)(); // 音乐们

          const musics = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.loadDir("sound/fight/back", AudioClip);
          const music = musics[Math.floor(musics.length * Math.random())];
          const audioSource = this.node.getComponent(AudioSource);
          audioSource.clip = music;
          audioSource.volume = config.volume * config.volumeDetail.home;
          audioSource.play();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ec6ee05291342caffc2a77302ed3f8908ad6dde.js.map