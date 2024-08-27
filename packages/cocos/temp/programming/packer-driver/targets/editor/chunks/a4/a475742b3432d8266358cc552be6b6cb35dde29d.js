System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, util, getConfig, _dec, _class, _crd, ccclass, property, HolUserResource;

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetConfig(extras) {
    _reporterNs.report("getConfig", "../common/config/config", _context.meta, extras);
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
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      getConfig = _unresolved_3.getConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f651b+tgJ1PArZC5yDsI4gx", "HolUserResource", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolUserResource", HolUserResource = (_dec = ccclass('HolUserResource'), _dec(_class = class HolUserResource extends Component {
        start() {
          this.render();
        }

        render() {
          const config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
            error: Error()
          }), getConfig) : getConfig)();
          this.node.getChildByName("Gold").getChildByName("Value").getComponent(Label).string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).sundry.formateNumber(config.userData.gold);
          this.node.getChildByName("Diamond").getChildByName("Value").getComponent(Label).string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).sundry.formateNumber(config.userData.diamond);
          this.node.getChildByName("Soul").getChildByName("Value").getComponent(Label).string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).sundry.formateNumber(config.userData.soul);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a475742b3432d8266358cc552be6b6cb35dde29d.js.map