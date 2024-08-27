System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, NodePool, instantiate, PrefabNodePool, _crd, cach;

  // 获取一个节点池
  function getNodePool(prefab) {
    var nodePool = cach.get(prefab);
    if (nodePool) return nodePool;
    nodePool = new PrefabNodePool(prefab);
    cach.set(prefab, nodePool);
    return nodePool;
  }

  _export("getNodePool", getNodePool);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd71bFIxJNI6p4kQfQ5MVwu", "getNodePool", undefined);

      __checkObsolete__(['Node', 'NodePool', 'Prefab', 'instantiate']);

      PrefabNodePool = class PrefabNodePool {
        // 获取节点数量
        get size() {
          return this.$nodePool.size;
        } // 节点池构造器


        constructor(p) {
          // 节点预制体
          this.$prefab = void 0;
          // 节点池
          this.$nodePool = void 0;
          this.$prefab = p;
          this.$nodePool = new NodePool();

          for (var i = 0; i < 5; i++) this, this.$nodePool.put(instantiate(p));
        } // 获取节点


        get() {
          if (this.$nodePool.size() <= 0) return instantiate(this.$prefab);
          return this.$nodePool.get();
        } // 返回节点


        put(node) {
          return this.$nodePool.put(node);
        }

      }; // 缓存

      cach = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ec335f98f2237816c301eebc1c3803c15732748.js.map