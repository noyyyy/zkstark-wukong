System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  /** 
   * 将某个节点移动到某个坐标
   * @param node 要移动的节点
   * @param option 移动配置
   */
  async function moveNodeToPosition(node, option) {
    option.moveCurve = option.moveCurve || false;
    option.forbidRotation = option.forbidRotation || true;
    option.moveTimeScale = option.moveTimeScale || 1;
    const originPosition = {
      x: node.position.x,
      y: node.position.y
    };

    option.curveFunc = option.curveFunc || (option => {
      const moveX = (option.targtePosition.x - originPosition.x) / option.timesAmount;
      const moveY = (option.targtePosition.y - originPosition.y) / option.timesAmount;
      return {
        x: option.currentPosition.x + moveX,
        y: option.currentPosition.y + moveY
      };
    });

    return new Promise(res => {
      // 不使用曲线
      if (!option.moveCurve) {
        node.setPosition(option.targetPosition.x, option.targetPosition.y, node.position.z);
        return res();
      }

      let times = 0;
      let nextPosition = {
        x: node.position.x,
        y: node.position.y
      }; // 使用曲线

      const inter = setInterval(() => {
        const timesAmount = 25;

        if (times >= timesAmount) {
          clearInterval(inter);
          return res();
        } // 设置相对于下上一帧进行旋转


        if (!option.forbidRotation) node.angle = Math.atan((nextPosition.x - node.position.x) / (nextPosition.y - node.position.y)); // 设置位置

        node.setPosition(nextPosition.x, nextPosition.y); // 次数加一

        times++; // 计算下一帧的位置

        nextPosition = option.curveFunc({
          times,
          timesAmount,
          originPosition: originPosition,
          targtePosition: option.targetPosition,
          currentPosition: {
            x: node.position.x,
            y: node.position.y
          }
        });
      }, 16 / option.moveTimeScale);
    });
  }

  _export("moveNodeToPosition", moveNodeToPosition);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c50e64JX+JEWJYXIdYlB9Xx", "moveNodeToPosition", undefined);

      __checkObsolete__(['Node', 'Vec2', 'math']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78fd04ef50c84bd8feea5b6d2e25c1e64ab1f5c9.js.map