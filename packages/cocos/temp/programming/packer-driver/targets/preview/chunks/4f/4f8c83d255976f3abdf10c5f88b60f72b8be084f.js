System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, dragonBones, resources, sp, util, _dec, _class, _crd, ccclass, property, HolAnimation;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../util/util", _context.meta, extras);
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
      dragonBones = _cc.dragonBones;
      resources = _cc.resources;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3b1bt9bhZD7aGUcUxgw6V8", "HolAnimation", undefined);

      __checkObsolete__(['_decorator', 'AssetManager', 'Component', 'dragonBones', 'Node', 'resources', 'sp']);

      ({
        ccclass,
        property
      } = _decorator); // 设置动画配置

      _export("HolAnimation", HolAnimation = (_dec = ccclass('HolAnimation'), _dec(_class = class HolAnimation extends Component {
        constructor() {
          super(...arguments);
          // 动画控制器
          this.$animationControl = void 0;
          // 上一个动画
          this.$lastAnimationPromiseResFunc = null;
        }

        // 动画速度
        get timeScale() {
          return this.$animationControl.timeScale;
        }

        set timeScale(v) {
          this.$animationControl.timeScale = v;
        }

        /** 
         * 设置动画
         * 会自动根据参数适应龙骨或Spine动画
         */
        initBones(animationOption) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _this$$animationContr;

            var animationDir = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.loadDir(animationOption.animationDir, undefined, animationOption.animationBundle || resources); // 设置缩放

            _this.node.setScale(animationOption.animationScale || 1, animationOption.animationScale || 1, _this.node.position.z); // 设置位置


            _this.node.setPosition(_this.node.position.x + animationOption.animationPosition.x, _this.node.position.y + animationOption.animationPosition.y, _this.node.position.z); // 动画分类


            if (animationOption.animationType === "DrangonBones") _this.$animationControl = _this.node.addComponent(dragonBones.ArmatureDisplay);else if (animationOption.animationType === "Spine") _this.$animationControl = _this.node.addComponent(sp.Skeleton); // 加上控制器

            for (var file of animationDir) {
              if (_this.$animationControl instanceof dragonBones.ArmatureDisplay) {
                if (file instanceof dragonBones.DragonBonesAsset) _this.$animationControl.dragonAsset = file;else if (file instanceof dragonBones.DragonBonesAtlasAsset) _this.$animationControl.dragonAtlasAsset = file;
              } else if (_this.$animationControl instanceof sp.Skeleton) {
                if (file instanceof sp.SkeletonData) _this.$animationControl.skeletonData = file;
              }
            }

            if (_this.$animationControl instanceof dragonBones.ArmatureDisplay) _this.$animationControl.armatureName = JSON.parse((_this$$animationContr = _this.$animationControl.dragonAsset) == null ? void 0 : _this$$animationContr.dragonBonesJson).armature[0].name;
            return;
          })();
        }
        /** 
         * name 表示动画名称
         * times 动画播放次数
         * 该函数会等待动画播放完成
         */


        playAnimation(name, times, defaultState) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (times === void 0) {
              times = -1;
            }

            // 如果上一次的动画还没有完成
            if (_this2.$lastAnimationPromiseResFunc) {
              _this2.$lastAnimationPromiseResFunc();

              _this2.$lastAnimationPromiseResFunc = null;
            }

            return new Promise(res => {
              if (_this2.$animationControl instanceof sp.Skeleton) {
                var playTimes = 0;

                _this2.$animationControl.setAnimation(0, name, false);

                _this2.$animationControl.setCompleteListener(() => {
                  if (++playTimes >= times && times !== -1) {
                    _this2.$lastAnimationPromiseResFunc = null;
                    res();
                    if (defaultState) _this2.playAnimation(defaultState);
                    return;
                  }

                  if (_this2.$animationControl instanceof sp.Skeleton) _this2.$animationControl.setAnimation(0, name, false);
                });
              } else if (_this2.$animationControl instanceof dragonBones.ArmatureDisplay) {
                _this2.$animationControl.playAnimation(name, times);

                _this2.$animationControl.on(dragonBones.EventObject.COMPLETE, () => {
                  _this2.$lastAnimationPromiseResFunc = null;
                  res();
                  if (defaultState) _this2.playAnimation(defaultState);
                }, _this2);
              }

              _this2.$lastAnimationPromiseResFunc = res;
            });
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f8c83d255976f3abdf10c5f88b60f72b8be084f.js.map