System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /** 
   * 将某个节点移动到某个坐标
   * @param node 要移动的节点
   * @param option 移动配置
   */
  function moveNodeToPosition(_x, _x2) {
    return _moveNodeToPosition.apply(this, arguments);
  }

  function _moveNodeToPosition() {
    _moveNodeToPosition = _asyncToGenerator(function* (node, option) {
      option.moveCurve = option.moveCurve || false;
      option.forbidRotation = option.forbidRotation || true;
      option.moveTimeScale = option.moveTimeScale || 1;
      var originPosition = {
        x: node.position.x,
        y: node.position.y
      };

      option.curveFunc = option.curveFunc || (option => {
        var moveX = (option.targtePosition.x - originPosition.x) / option.timesAmount;
        var moveY = (option.targtePosition.y - originPosition.y) / option.timesAmount;
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

        var times = 0;
        var nextPosition = {
          x: node.position.x,
          y: node.position.y
        }; // 使用曲线

        var inter = setInterval(() => {
          var timesAmount = 25;

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
    });
    return _moveNodeToPosition.apply(this, arguments);
  }

  _export("moveNodeToPosition", moveNodeToPosition);

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['Node', 'Vec2', 'math']);

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe1353e4e1a3e0214d930c31446304aed54328e1.js.map