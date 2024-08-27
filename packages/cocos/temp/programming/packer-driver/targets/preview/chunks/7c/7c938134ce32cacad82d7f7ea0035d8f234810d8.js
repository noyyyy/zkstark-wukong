System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, _crd, ItemEnum;

  // 注册物品
  function RegisterCharacter(o) {
    return TargetClass => {
      if (ItemEnum[o.id]) return (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
        error: Error()
      }), error) : error)("The id: " + o.id + " has been registered");
      ItemEnum[o.id] = TargetClass.getMetaInstance(o.id);
    };
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "../../../util/out/error", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemMetaState(extras) {
    _reporterNs.report("ItemMetaState", "./ItemMetaState", _context.meta, extras);
  }

  _export("RegisterCharacter", RegisterCharacter);

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

      _cclegacy._RF.push({}, "30088LeJKRJlJWXPBhjrh1u", "ItemEnum", undefined);

      _export("ItemEnum", ItemEnum = {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c938134ce32cacad82d7f7ea0035d8f234810d8.js.map