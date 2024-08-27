System.register([], function (_export, _context) {
  "use strict";

  var _crd;

  function formateNumber(num) {
    let result = num + '';
    if (num >= 100000000) result = (num / 100000).toFixed(2) + "B";else if (num >= 10000000) result = (num / 10000).toFixed(2) + "M";else if (num >= 1000000) result = (num / 10000).toFixed(2) + "W";else if (num >= 10000) result = (num / 1000).toFixed(2) + "K";
    return result;
  }

  _export("formateNumber", formateNumber);

  return {
    setters: [],
    execute: function () {
      _crd = true;
      _crd = false;
    }
  };
});
//# sourceMappingURL=bb2fd03054e1ca4aa4acb174122af928a901bd48.js.map