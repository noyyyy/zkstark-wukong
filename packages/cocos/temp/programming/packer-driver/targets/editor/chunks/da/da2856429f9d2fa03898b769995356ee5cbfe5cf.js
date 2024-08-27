System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicMetaState, ItemMetaState, _crd;

  function _reportPossibleCrUseOfBasicMetaState(extras) {
    _reporterNs.report("BasicMetaState", "../BasicMetaState", _context.meta, extras);
  }

  _export("ItemMetaState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BasicMetaState = _unresolved_2.BasicMetaState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15cf8CfWJ1OSo2HbYVNf9KG", "ItemMetaState", undefined);

      _export("ItemMetaState", ItemMetaState = class ItemMetaState extends (_crd && BasicMetaState === void 0 ? (_reportPossibleCrUseOfBasicMetaState({
        error: Error()
      }), BasicMetaState) : BasicMetaState) {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da2856429f9d2fa03898b769995356ee5cbfe5cf.js.map