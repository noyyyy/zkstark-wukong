System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, screen, getConfig, _dec, _class, _crd, ccclass, property, HomeBuildings;

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
        constructor(...args) {
          super(...args);
          this.$FrameSize = void 0;
          // 触摸移动场景
          this.$lastPositionX = -1;
        }

        async start() {
          const config = (_crd && getConfig === void 0 ? (_reportPossibleCrUseOfgetConfig({
            error: Error()
          }), getConfig) : getConfig)(); // 触摸事件开始

          this.node.on(Node.EventType.TOUCH_MOVE, this.onNodeTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onNodeTouchEnd, this); // 初始化宽度

          this.$FrameSize = screen.windowSize;
        }

        onDestroy() {
          // 触摸事件销毁
          this.node.off(Node.EventType.TOUCH_MOVE, this.onNodeTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onNodeTouchEnd, this);
        }

        onNodeTouchMove(event) {
          const currentPositionX = event.touch.getLocationX();

          if (this.$lastPositionX !== -1) {
            const positionX = this.node.position.x + (currentPositionX - this.$lastPositionX) * 0.9;
            if (Math.abs(positionX) <= (1826 - this.$FrameSize.width) / 2) this.node.setPosition(positionX, this.node.position.y, this.node.position.z);
          }

          this.$lastPositionX = currentPositionX;
          return;
        }

        onNodeTouchEnd() {
          this.$lastPositionX = -1;
        } // 打开关卡选择场景


        async OpenLevelMap() {} // 打开商店场景


        async OpenShopMap() {} // 打开勇气试炼


        async OpenCourageMap() {} // 打开抽卡界面


        async OpenDrawCard() {} // 打开征服之塔


        async OpenConquer() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c97e7b3160dc54a81f10d7f7c92b7cd54f33a8c0.js.map