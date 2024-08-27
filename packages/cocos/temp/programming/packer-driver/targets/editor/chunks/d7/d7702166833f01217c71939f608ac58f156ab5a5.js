System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, dragonBones, resources, sp, util, _dec, _class, _crd, ccclass, property, HolAnimation;

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
        constructor(...args) {
          super(...args);
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
        async initBones(animationOption) {
          var _this$$animationContr;

          const animationDir = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.loadDir(animationOption.animationDir, undefined, animationOption.animationBundle || resources); // 设置缩放

          this.node.setScale(animationOption.animationScale || 1, animationOption.animationScale || 1, this.node.position.z); // 设置位置

          this.node.setPosition(this.node.position.x + animationOption.animationPosition.x, this.node.position.y + animationOption.animationPosition.y, this.node.position.z); // 动画分类

          if (animationOption.animationType === "DrangonBones") this.$animationControl = this.node.addComponent(dragonBones.ArmatureDisplay);else if (animationOption.animationType === "Spine") this.$animationControl = this.node.addComponent(sp.Skeleton); // 加上控制器

          for (const file of animationDir) {
            if (this.$animationControl instanceof dragonBones.ArmatureDisplay) {
              if (file instanceof dragonBones.DragonBonesAsset) this.$animationControl.dragonAsset = file;else if (file instanceof dragonBones.DragonBonesAtlasAsset) this.$animationControl.dragonAtlasAsset = file;
            } else if (this.$animationControl instanceof sp.Skeleton) {
              if (file instanceof sp.SkeletonData) this.$animationControl.skeletonData = file;
            }
          }

          if (this.$animationControl instanceof dragonBones.ArmatureDisplay) this.$animationControl.armatureName = JSON.parse((_this$$animationContr = this.$animationControl.dragonAsset) == null ? void 0 : _this$$animationContr.dragonBonesJson).armature[0].name;
          return;
        }
        /** 
         * name 表示动画名称
         * times 动画播放次数
         * 该函数会等待动画播放完成
         */


        async playAnimation(name, times = -1, defaultState) {
          // 如果上一次的动画还没有完成
          if (this.$lastAnimationPromiseResFunc) {
            this.$lastAnimationPromiseResFunc();
            this.$lastAnimationPromiseResFunc = null;
          }

          return new Promise(res => {
            if (this.$animationControl instanceof sp.Skeleton) {
              let playTimes = 0;
              this.$animationControl.setAnimation(0, name, false);
              this.$animationControl.setCompleteListener(() => {
                if (++playTimes >= times && times !== -1) {
                  this.$lastAnimationPromiseResFunc = null;
                  res();
                  if (defaultState) this.playAnimation(defaultState);
                  return;
                }

                if (this.$animationControl instanceof sp.Skeleton) this.$animationControl.setAnimation(0, name, false);
              });
            } else if (this.$animationControl instanceof dragonBones.ArmatureDisplay) {
              this.$animationControl.playAnimation(name, times);
              this.$animationControl.on(dragonBones.EventObject.COMPLETE, () => {
                this.$lastAnimationPromiseResFunc = null;
                res();
                if (defaultState) this.playAnimation(defaultState);
              }, this);
            }

            this.$lastAnimationPromiseResFunc = res;
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d7702166833f01217c71939f608ac58f156ab5a5.js.map