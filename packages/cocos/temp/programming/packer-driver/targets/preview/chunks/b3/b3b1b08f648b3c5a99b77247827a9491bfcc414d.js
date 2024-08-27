System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, HolLoadMessage;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "588055++QlNL67j7hLQM/wK", "HolLoadMessage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolLoadMessage", HolLoadMessage = (_dec = ccclass('HolLoadMessage'), _dec(_class = class HolLoadMessage extends Component {
        constructor() {
          super(...arguments);
          this.$event = new Map();
        }

        listen(e, call) {
          var eventQueue = this.$event.get(e);

          if (!eventQueue) {
            eventQueue = [call];
            return this.$event.set(e, eventQueue);
          }

          eventQueue.push(call);
        }

        closeLoad() {
          var _this$$event$get;

          if (this.$event) (_this$$event$get = this.$event.get("close")) == null ? void 0 : _this$$event$get.forEach(c => c());
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b3b1b08f648b3c5a99b77247827a9491bfcc414d.js.map