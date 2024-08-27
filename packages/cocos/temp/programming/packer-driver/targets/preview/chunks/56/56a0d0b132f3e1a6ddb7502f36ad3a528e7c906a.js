System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, ccError, _crd;

  function error() {
    return ccError(...arguments);
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
//# sourceMappingURL=56a0d0b132f3e1a6ddb7502f36ad3a528e7c906a.js.map