System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, resources, error, _crd, cachMap;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  // 加载资源
  function load(_x, _x2, _x3) {
    return _load.apply(this, arguments);
  }

  function _load() {
    _load = _asyncToGenerator(function* (path, type, assetsBundle) {
      assetsBundle = assetsBundle || resources;
      var bundleCacheMap = cachMap.get(assetsBundle);
      if (!bundleCacheMap) cachMap.set(assetsBundle, bundleCacheMap = new Map());
      var result = bundleCacheMap.get(path);
      if (result) return result;
      return new Promise(res => {
        assetsBundle.load(path, type, (err, data) => {
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
    });
    return _load.apply(this, arguments);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "../out/error", _context.meta, extras);
  }

  _export("load", load);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['AssetManager', 'resources']);

      // 缓存
      cachMap = new Map();
      _crd = false;
    }
  };
});
//# sourceMappingURL=27af6af96b7a38a00fd7a39eb890ab24036a3182.js.map