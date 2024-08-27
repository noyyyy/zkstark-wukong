System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, screen, getConfig, _dec, _class, _crd, ccclass, property, HomeBuildings;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfgetConfig(extras) {
    _reporterNs.report("getConfig", "../../../common/config/config", _context.meta, extras);
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
      Node = _cc.Node;
      screen = _cc.screen;
    }, function (_unresolved_2) {
      getConfig = _unresolved_2.getConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da25etjLhZJAowJ6tiKMh8S", "HomeBuildings", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'EventTouch', 'math', 'Node', 'screen']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HomeBuildings", HomeBuildings = (_dec = ccclass('HomeBuildings'), _dec(_class = class HomeBuildings extends Component {
        constructor() {
          super(...arguments);
          this.$FrameSize = void 0;
          // 触摸移动场景
          this.$lastPositionX = -1;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
              error: Error()
            }), getConfig) : getConfig)(); // 触摸事件开始

            _this.node.on(Node.EventType.TOUCH_MOVE, _this.onNodeTouchMove, _this);

            _this.node.on(Node.EventType.TOUCH_END, _this.onNodeTouchEnd, _this); // 初始化宽度


            _this.$FrameSize = screen.windowSize;
          })();
        }

        onDestroy() {
          // 触摸事件销毁
          this.node.off(Node.EventType.TOUCH_MOVE, this.onNodeTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onNodeTouchEnd, this);
        }

        onNodeTouchMove(event) {
          var currentPositionX = event.touch.getLocationX();

          if (this.$lastPositionX !== -1) {
            var positionX = this.node.position.x + (currentPositionX - this.$lastPositionX) * 0.9;
            if (Math.abs(positionX) <= (1826 - this.$FrameSize.width) / 2) this.node.setPosition(positionX, this.node.position.y, this.node.position.z);
          }

          this.$lastPositionX = currentPositionX;
          return;
        }

        onNodeTouchEnd() {
          this.$lastPositionX = -1;
        } // 打开关卡选择场景


        OpenLevelMap() {
          return _asyncToGenerator(function* () {})();
        } // 打开商店场景


        OpenShopMap() {
          return _asyncToGenerator(function* () {})();
        } // 打开勇气试炼


        OpenCourageMap() {
          return _asyncToGenerator(function* () {})();
        } // 打开抽卡界面


        OpenDrawCard() {
          return _asyncToGenerator(function* () {})();
        } // 打开征服之塔


        OpenConquer() {
          return _asyncToGenerator(function* () {})();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b471625b96dc50bed244253959b9ad3d2b592c3.js.map