System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, ccLog, _crd;

  function log() {
    return ccLog(...arguments);
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
//# sourceMappingURL=bed33988466aa21f2749fa2806a4457636a1fab1.js.map