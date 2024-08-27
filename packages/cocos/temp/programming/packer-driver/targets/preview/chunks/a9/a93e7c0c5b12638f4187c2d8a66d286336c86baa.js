System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function formateNumber(num) {
    var result = num + '';
    if (num >= 100000000) result = (num / 100000).toFixed(2) + "B";else if (num >= 10000000) result = (num / 10000).toFixed(2) + "M";else if (num >= 1000000) result = (num / 10000).toFixed(2) + "W";else if (num >= 10000) result = (num / 1000).toFixed(2) + "K";
    return result;
  }

  _export("formateNumber", formateNumber);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d1d6IZfGBAOog8kajMNSZd", "formateNumber", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a93e7c0c5b12638f4187c2d8a66d286336c86baa.js.map