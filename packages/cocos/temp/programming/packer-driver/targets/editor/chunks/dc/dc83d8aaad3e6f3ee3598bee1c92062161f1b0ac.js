System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, error, _crd, cachMap;

  // 加载资源
  async function loadDir(path, type, assetsBundle) {
    assetsBundle = assetsBundle || resources;
    let bundleCacheMap = cachMap.get(assetsBundle);
    if (!bundleCacheMap) cachMap.set(assetsBundle, bundleCacheMap = new Map());
    let result = bundleCacheMap.get(path);
    if (result) return result;
    return new Promise(res => {
      assetsBundle.loadDir(path, type, (err, data) => {
        if (err) {
          (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
            error: Error()
          }), error) : error)(err);
          return res(null);
        }

        bundleCacheMap.set(path, data);
        return res(data);
      });
    });
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "../out/error", _context.meta, extras);
  }

  _export("loadDir", loadDir);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40d10CehbZGkLny3tu46Ccz", "loadDir", undefined);

      __checkObsolete__(['AssetManager', 'resources']);

      // 缓存
      cachMap = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc83d8aaad3e6f3ee3598bee1c92062161f1b0ac.js.map