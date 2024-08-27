System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, ccLog, _crd;

  function log(...arg) {
    return ccLog(...arg);
  }

  _export("log", log);

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ccLog = _cc.log;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['log']);

      _crd = false;
    }
  };
});
//# sourceMappingURL=ffffd5a86bf0f5c8a82f43ef3d03478da674bcec.js.map