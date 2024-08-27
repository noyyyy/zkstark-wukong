System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, util, getConfig, HolCharactersQueue, HeroCharacterDetail, _dec, _class, _crd, ccclass, property, HeroAllHeros;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetConfig(extras) {
    _reporterNs.report("getConfig", "../../../common/config/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../../../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolCharactersQueue(extras) {
    _reporterNs.report("HolCharactersQueue", "../../../prefab/HolCharactersQueue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroCharacterDetail(extras) {
    _reporterNs.report("HeroCharacterDetail", "./HeroCharacterDetail", _context.meta, extras);
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
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      getConfig = _unresolved_3.getConfig;
    }, function (_unresolved_4) {
      HolCharactersQueue = _unresolved_4.HolCharactersQueue;
    }, function (_unresolved_5) {
      HeroCharacterDetail = _unresolved_5.HeroCharacterDetail;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f94f0egAs9C/71lXe/O8uCK", "HeroAllHeros", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroAllHeros", HeroAllHeros = (_dec = ccclass('HeroAllHeros'), _dec(_class = class HeroAllHeros extends Component {
        // 开始
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // 第一次渲染所有角色
            var config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
              error: Error()
            }), getConfig) : getConfig)();
            var close = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).message.load();
            var cahracterQueue = [];
            config.userData.characterQueue.forEach(cq => cq.forEach(c => {
              if (c) cahracterQueue.push(c);
            }));
            yield _this.render([].concat(cahracterQueue, config.userData.characters));
            close();
          })();
        }

        render(characterQueue) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            yield _this2.node.getChildByName("HolCharactersQueue").getComponent(_crd && HolCharactersQueue === void 0 ? (_reportPossibleCrUseOfHolCharactersQueue({
              error: Error()
            }), HolCharactersQueue) : HolCharactersQueue).render(characterQueue, /*#__PURE__*/_asyncToGenerator(function* (c, n) {
              var characterDetail = _this2.node.parent.getChildByName("CharacterDetail");

              characterDetail.active = true;
              yield characterDetail.getComponent(_crd && HeroCharacterDetail === void 0 ? (_reportPossibleCrUseOfHeroCharacterDetail({
                error: Error()
              }), HeroCharacterDetail) : HeroCharacterDetail).setCharacter(c);
            }));
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d960d85b262188e27522ed08ab3b09185d4747a.js.map