System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ccLog, _crd;

  function log() {
    return ccLog(...arguments);
  }

  _export("log", log);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ccLog = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80c166CKFdM2oUAbx4b4e0Z", "log", undefined);

      __checkObsolete__(['log']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d4cb718f4d6e2d41e372540ae2a9c34fad45a00.js.map