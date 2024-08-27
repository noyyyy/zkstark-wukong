System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, NodePool, instantiate, PrefabNodePool, _crd, cach;

  // 获取一个节点池
  function getNodePool(prefab) {
    let nodePool = cach.get(prefab);
    if (nodePool) return nodePool;
    nodePool = new PrefabNodePool(prefab);
    cach.set(prefab, nodePool);
    return nodePool;
  }

  _export("getNodePool", getNodePool);

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

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

          for (let i = 0; i < 5; i++) this, this.$nodePool.put(instantiate(p));
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
      _crd = false;
    }
  };
});
//# sourceMappingURL=20d25dc2921d6f351e350976fffd2ca8c6efd55f.js.map