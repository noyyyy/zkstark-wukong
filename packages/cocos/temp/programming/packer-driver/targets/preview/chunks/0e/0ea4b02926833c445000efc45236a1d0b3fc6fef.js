System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Common, _crd, common;

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "./../../game/fight/character/CharacterState", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b47eVzx8dC47V1LUAfV6ry", "common", undefined);

      Common = class Common {
        constructor() {
          // 左侧队伍
          this.leftCharacter = new Map();
          // 右侧队伍
          this.rightCharacter = new Map();
        }

      }; // 公共内存

      _export("common", common = new Common());

      common.leftCharacter.set({
        row: 2,
        col: 2
      }, {
        id: "sunwukong",
        lv: 1,
        star: 1,
        equipment: []
      });
      common.rightCharacter.set({
        row: 2,
        col: 2
      }, {
        id: "sunwukong",
        lv: 1,
        star: 1,
        equipment: []
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ea4b02926833c445000efc45236a1d0b3fc6fef.js.map