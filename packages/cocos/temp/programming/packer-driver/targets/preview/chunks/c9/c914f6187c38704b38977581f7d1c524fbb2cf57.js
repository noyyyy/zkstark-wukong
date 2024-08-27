System.register([], function (_export, _context) {
  "use strict";

  var _crd;

  function formateNumber(num) {
    var result = num + '';
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
//# sourceMappingURL=c914f6187c38704b38977581f7d1c524fbb2cf57.js.map