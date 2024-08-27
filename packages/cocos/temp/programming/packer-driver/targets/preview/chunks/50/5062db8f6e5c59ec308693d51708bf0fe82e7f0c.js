System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, util, getConfig, HeroAllHeros, CharacterEnum, _dec, _class, _crd, ccclass, property, HeroUi;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetConfig(extras) {
    _reporterNs.report("getConfig", "../../../common/config/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAllHeros(extras) {
    _reporterNs.report("HeroAllHeros", "./HeroAllHeros", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../../../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEnum(extras) {
    _reporterNs.report("CharacterEnum", "../../../game/fight/character/CharacterEnum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      getConfig = _unresolved_3.getConfig;
    }, function (_unresolved_4) {
      HeroAllHeros = _unresolved_4.HeroAllHeros;
    }, function (_unresolved_5) {
      CharacterEnum = _unresolved_5.CharacterEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94827VgnP1HkYkPKV19q/NU", "HeroUi", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'EventMouse', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroUi", HeroUi = (_dec = ccclass('HeroUi'), _dec(_class = class HeroUi extends Component {
        constructor() {
          super(...arguments);
          // 当前过滤阵容
          this.$currentCamp = "";
        }

        // 回到主页
        GoBack() {
          return _asyncToGenerator(function* () {
            var close = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.load();
            director.preloadScene("Home", () => close());
            director.loadScene("Home");
          })();
        }

        // 阵容过滤
        filterByCamp(e, camp) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var allHeros = _this.node.parent.getChildByName("AllHeros").getComponent(_crd && HeroAllHeros === void 0 ? (_reportPossibleCrUseOfHeroAllHeros({
              error: Error()
            }), HeroAllHeros) : HeroAllHeros);

            var cahracterQueue = [];

            _this.node.children.forEach(node => {
              var lightNode = node.getChildByName("Light");
              if (lightNode) lightNode.active = false;
            });

            if (_this.$currentCamp === camp) {
              var config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
                error: Error()
              }), getConfig) : getConfig)();
              var close = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).message.load();
              config.userData.characterQueue.forEach(cq => cq.forEach(c => {
                if (c) cahracterQueue.push(c);
              }));
              cahracterQueue = cahracterQueue.concat(config.userData.characters);
              yield allHeros.render(cahracterQueue);
              close();
              _this.$currentCamp = "";
            } else {
              _this.$currentCamp = camp;

              var _config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
                error: Error()
              }), getConfig) : getConfig)();

              var _close = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).message.load();

              _config.userData.characterQueue.forEach(cq => cq.forEach(c => {
                if (c) cahracterQueue.push(c);
              }));

              cahracterQueue = cahracterQueue.concat(_config.userData.characters);
              cahracterQueue = cahracterQueue.filter(c => (_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
                error: Error()
              }), CharacterEnum) : CharacterEnum)[c.id].CharacterCamp === camp);
              yield allHeros.render(cahracterQueue);

              _close();

              e.target.getChildByName("Light").active = true;
            }
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5062db8f6e5c59ec308693d51708bf0fe82e7f0c.js.map