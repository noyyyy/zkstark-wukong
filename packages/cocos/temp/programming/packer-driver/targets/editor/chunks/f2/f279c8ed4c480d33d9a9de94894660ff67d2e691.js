System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, util, getConfig, HolCharactersQueue, HeroCharacterDetail, _dec, _class, _crd, ccclass, property, HeroAllHeros;

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
        async start() {
          // 第一次渲染所有角色
          const config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
            error: Error()
          }), getConfig) : getConfig)();
          const close = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).message.load();
          const cahracterQueue = [];
          config.userData.characterQueue.forEach(cq => cq.forEach(c => {
            if (c) cahracterQueue.push(c);
          }));
          await this.render([].concat(cahracterQueue, config.userData.characters));
          close();
        }

        async render(characterQueue) {
          await this.node.getChildByName("HolCharactersQueue").getComponent(_crd && HolCharactersQueue === void 0 ? (_reportPossibleCrUseOfHolCharactersQueue({
            error: Error()
          }), HolCharactersQueue) : HolCharactersQueue).render(characterQueue, async (c, n) => {
            const characterDetail = this.node.parent.getChildByName("CharacterDetail");
            characterDetail.active = true;
            await characterDetail.getComponent(_crd && HeroCharacterDetail === void 0 ? (_reportPossibleCrUseOfHeroCharacterDetail({
              error: Error()
            }), HeroCharacterDetail) : HeroCharacterDetail).setCharacter(c);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f279c8ed4c480d33d9a9de94894660ff67d2e691.js.map