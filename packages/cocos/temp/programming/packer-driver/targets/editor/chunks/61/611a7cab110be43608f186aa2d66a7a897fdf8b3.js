System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, _crd, EquipmentEnum;

  function RegisterEquipemtn(o) {
    return TargetClass => {
      if (EquipmentEnum[o.id]) return (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
        error: Error()
      }), error) : error)("The id: " + o.id + " has been registered");
      EquipmentEnum[o.id] = TargetClass.getMetaInstance(o.id);
    };
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "../../../util/out/error", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentMetaState(extras) {
    _reporterNs.report("EquipmentMetaState", "./EquipmentMetaState", _context.meta, extras);
  }

  _export("RegisterEquipemtn", RegisterEquipemtn);

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

      _cclegacy._RF.push({}, "a8a6erACBlNPYv1jPhBMAQ7", "EquipmentEnum", undefined);

      _export("EquipmentEnum", EquipmentEnum = {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=611a7cab110be43608f186aa2d66a7a897fdf8b3.js.map