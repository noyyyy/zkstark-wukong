System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, error, _crd, CharacterEnum;

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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['error']);

      _export("CharacterEnum", CharacterEnum = {});

      _crd = false;
    }
  };
});
//# sourceMappingURL=50e2e35924e96988fab2f0fcf5248370d73c283f.js.map