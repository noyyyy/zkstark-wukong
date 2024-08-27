System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, ccError, _crd;

  function error(...arg) {
    return ccError(...arg);
  }

  _export("error", error);

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ccError = _cc.error;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['error']);

      _crd = false;
    }
  };
});
//# sourceMappingURL=998bf408ba06f4ffaf2426b1ce16cc90021ad89a.js.map