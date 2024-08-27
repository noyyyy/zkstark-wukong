System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicState, ItemState, _crd;

  function _reportPossibleCrUseOfBasicState(extras) {
    _reporterNs.report("BasicState", "../BasicState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemMetaState(extras) {
    _reporterNs.report("ItemMetaState", "./ItemMetaState", _context.meta, extras);
  }

  _export("ItemState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BasicState = _unresolved_2.BasicState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a057bmQFSBNhpXMp9JH6YVg", "ItemState", undefined);

      _export("ItemState", ItemState = class ItemState extends (_crd && BasicState === void 0 ? (_reportPossibleCrUseOfBasicState({
        error: Error()
      }), BasicState) : BasicState) {
        constructor(...args) {
          super(...args);
          this.number = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a64eb6f08106c018e1138b1378179784154f749e.js.map