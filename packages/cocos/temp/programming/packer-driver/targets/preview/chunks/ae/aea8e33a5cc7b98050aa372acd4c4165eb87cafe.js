System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, _crd, CharacterEnum;

  // 注册角色
  function RegisterCharacter(o) {
    return TargetClass => {
      if (CharacterEnum[o.id]) return error("The id: " + o.id + " has been registered");
      CharacterEnum[o.id] = TargetClass.getMetaInstance(o.id);
    };
  }

  function _reportPossibleCrUseOfCharacterMetaState(extras) {
    _reporterNs.report("CharacterMetaState", "./CharacterMetaState", _context.meta, extras);
  }

  _export("RegisterCharacter", RegisterCharacter);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5ca1E11m9ADoCnOPT3aWkp", "CharacterEnum", undefined);

      __checkObsolete__(['error']);

      _export("CharacterEnum", CharacterEnum = {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aea8e33a5cc7b98050aa372acd4c4165eb87cafe.js.map