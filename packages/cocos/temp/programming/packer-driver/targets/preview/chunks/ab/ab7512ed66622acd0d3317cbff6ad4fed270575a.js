System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Common, _crd, common, leftSetValue, rightSetValue;

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

      leftSetValue = {
        strength: 10,
        agility: 10,
        intelligence: 10
      };
      rightSetValue = {
        strength: 10,
        agility: 10,
        intelligence: 10
      };
      common.leftCharacter.set({
        row: 2,
        col: 2
      }, {
        id: "sunwukong",
        lv: 1,
        star: 1,
        equipment: [],
        strength: 10,
        agility: 10,
        intelligence: 10
      });
      common.rightCharacter.set({
        row: 2,
        col: 2
      }, {
        id: "sunwukong",
        lv: 1,
        star: 1,
        equipment: [],
        strength: 10,
        agility: 10,
        intelligence: 10
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab7512ed66622acd0d3317cbff6ad4fed270575a.js.map