System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ccError, _crd;

  function error(...arg) {
    return ccError(...arg);
  }

  _export("error", error);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ccError = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c604bBOOTxM0axtDbhzKuzO", "error", undefined);

      __checkObsolete__(['error']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed806ac8ec41c7060a8f3bb6f87e65166a1c94ae.js.map