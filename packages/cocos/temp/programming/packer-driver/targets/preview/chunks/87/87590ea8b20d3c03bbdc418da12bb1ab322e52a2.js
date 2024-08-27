System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, error, _crd, EquipmentEnum;

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
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
    }],
    execute: function () {
      _crd = true;

      _export("EquipmentEnum", EquipmentEnum = {});

      _crd = false;
    }
  };
});
//# sourceMappingURL=87590ea8b20d3c03bbdc418da12bb1ab322e52a2.js.map