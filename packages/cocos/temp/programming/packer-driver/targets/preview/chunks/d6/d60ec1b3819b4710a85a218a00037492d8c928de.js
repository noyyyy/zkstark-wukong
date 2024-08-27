System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, _crd, BuffEnum;

  function RegisterBuff(o) {
    return TargetClass => {
      if (BuffEnum[o.id]) return (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
        error: Error()
      }), error) : error)("The id: " + o.id + " has been registered");
      BuffEnum[o.id] = TargetClass.getMetaInstance(o.id);
    };
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "../../../util/out/error", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffMetaState(extras) {
    _reporterNs.report("BuffMetaState", "./BuffMetaState", _context.meta, extras);
  }

  _export("RegisterBuff", RegisterBuff);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cdf64j34XBFi6DI9MglrYzX", "BuffEnum", undefined);

      _export("BuffEnum", BuffEnum = {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d60ec1b3819b4710a85a218a00037492d8c928de.js.map