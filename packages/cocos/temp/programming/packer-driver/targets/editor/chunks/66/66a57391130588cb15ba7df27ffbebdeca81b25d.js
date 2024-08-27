System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, util, getConfig, _dec, _class, _crd, ccclass, property, HomeCanvas;

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

      _cclegacy._RF.push({}, "0c45fQKpEhJwIKtdrbKP0ie", "HomeCanvas", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'EventTouch', 'math', 'Node', 'screen']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HomeCanvas", HomeCanvas = (_dec = ccclass('HomeCanvas'), _dec(_class = class HomeCanvas extends Component {
        async start() {
          const close = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.load({}); // 初始化音乐

          await this.initMusic();
          close();
        } // 初始化播放音乐


        async initMusic() {
          const config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
            error: Error()
          }), getConfig) : getConfig)(); // 音乐们

          const musics = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.loadDir("sound/home", AudioClip);
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
//# sourceMappingURL=66a57391130588cb15ba7df27ffbebdeca81b25d.js.map