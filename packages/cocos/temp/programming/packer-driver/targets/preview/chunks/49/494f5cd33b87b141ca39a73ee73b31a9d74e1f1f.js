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
//# sourceMappingURL=494f5cd33b87b141ca39a73ee73b31a9d74e1f1f.js.map