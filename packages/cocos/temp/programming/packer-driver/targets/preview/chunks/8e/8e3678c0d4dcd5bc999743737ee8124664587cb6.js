System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Font, Label, math, Node, Prefab, Sprite, SpriteFrame, UITransform, OnBeTarget, CharacterState, util, HolAnimation, ActionState, HolNumber, CharacterEnum, getCampHurtPercent, _dec, _class, _crd, ccclass, property, HolCharacter;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  // 获取角色坐标
  function GetCharacterCoordinatePosition(direction, row, col, type) {
    if (type === void 0) {
      type = "ordinary";
    }

    var result = {
      x: 0,
      y: 0
    };

    if ((row >= 1 || row <= 3) && (col >= 1 || col <= 3)) {
      result.x = (col - 1) * 195 + 170 - (type === "attack" ? 120 : 0);
      result.y = (3 - row) * 160 - 230;
      if (direction === "left") result.x *= -1;
    }

    return result;
  }

  function _reportPossibleCrUseOfBuffState(extras) {
    _reporterNs.report("BuffState", "../game/fight/buff/BuffState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOnBeTarget(extras) {
    _reporterNs.report("OnBeTarget", "../game/fight/OnBeTarget", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolAnimation(extras) {
    _reporterNs.report("HolAnimation", "./HolAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionState(extras) {
    _reporterNs.report("ActionState", "../game/fight/ActionState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "../scenes/Fight/Canvas/FightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolNumber(extras) {
    _reporterNs.report("HolNumber", "./HolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEnum(extras) {
    _reporterNs.report("CharacterEnum", "../game/fight/character/CharacterEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCampHurtPercent(extras) {
    _reporterNs.report("getCampHurtPercent", "../game/fight/character/CharacterMetaState", _context.meta, extras);
  }

  _export("GetCharacterCoordinatePosition", GetCharacterCoordinatePosition);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Font = _cc.Font;
      Label = _cc.Label;
      math = _cc.math;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      OnBeTarget = _unresolved_2.OnBeTarget;
    }, function (_unresolved_3) {
      CharacterState = _unresolved_3.CharacterState;
    }, function (_unresolved_4) {
      util = _unresolved_4.util;
    }, function (_unresolved_5) {
      HolAnimation = _unresolved_5.HolAnimation;
    }, function (_unresolved_6) {
      ActionState = _unresolved_6.ActionState;
    }, function (_unresolved_7) {
      HolNumber = _unresolved_7.HolNumber;
    }, function (_unresolved_8) {
      CharacterEnum = _unresolved_8.CharacterEnum;
    }, function (_unresolved_9) {
      getCampHurtPercent = _unresolved_9.getCampHurtPercent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3bfddQbW5lMFK9LFBS3IKq/", "HolCharacter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Font', 'Label', 'math', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolCharacter", HolCharacter = (_dec = ccclass('HolCharacter'), _dec(_class = class HolCharacter extends Component {
        constructor() {
          super(...arguments);
          // 动画组件
          this.$holAnimation = void 0;
          // 角色状态函数
          this.state = void 0;
          // 所处方位
          this.direction = void 0;
          //坐标
          this.coordinate = void 0;
          // 角色默认状态 攻击 受到攻击以后会回到该状态
          this.defaultState = "rest";
          // 当前战斗场景
          this.$fightMap = void 0;
        }

        get holAnimation() {
          return this.$holAnimation;
        }

        /** 
         * 初始化角色
         * create 是角色创建数据
         */
        initCharacter(create, direction, coordinate, fightMap) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (coordinate === void 0) {
              coordinate = {
                row: 0,
                col: 0
              };
            }

            if (fightMap === void 0) {
              fightMap = null;
            }

            // 创建角色状态
            _this.state = new (_crd && CharacterState === void 0 ? (_reportPossibleCrUseOfCharacterState({
              error: Error()
            }), CharacterState) : CharacterState)(create, _this);
            _this.direction = direction;
            _this.coordinate = coordinate;
            _this.$fightMap = fightMap;
            var meta = (_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
              error: Error()
            }), CharacterEnum) : CharacterEnum)[create.id]; // 动画设置

            var animationNode = _this.node.getChildByName("HolAnimation");

            _this.$holAnimation = animationNode.getComponent(_crd && HolAnimation === void 0 ? (_reportPossibleCrUseOfHolAnimation({
              error: Error()
            }), HolAnimation) : HolAnimation);
            yield _this.$holAnimation.initBones({
              animationScale: _this.state.meta.AnimationScale,
              animationDir: _this.state.meta.AnimationDir,
              animationType: _this.state.meta.AnimationType,
              animationPosition: _this.state.meta.AnimationPosition
            });

            _this.node.addChild(animationNode);

            _this.$holAnimation.playAnimation("rest"); // 阵营渲染


            _this.node.getChildByName("Camp").getComponent(Sprite).spriteFrame = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.load("image/camp_icon/" + meta.CharacterCamp + "/spriteFrame", SpriteFrame); // 角色位置

            var position = GetCharacterCoordinatePosition(_this.direction, _this.coordinate.row, _this.coordinate.col);

            _this.node.setPosition(position.x, position.y, _this.node.position.z); // 角色面朝方向


            if (_this.direction === "left") _this.$holAnimation.node.setScale(Math.abs(_this.$holAnimation.node.scale.x) * _this.state.meta.AnimationForward, _this.$holAnimation.node.scale.y, _this.$holAnimation.node.scale.z);else _this.$holAnimation.node.setScale(Math.abs(_this.$holAnimation.node.scale.x) * -_this.state.meta.AnimationForward, _this.$holAnimation.node.scale.y, _this.$holAnimation.node.scale.z); // 等级渲染

            _this.node.getChildByName("State").getChildByName("Lv").getComponent(Label).string = "Lv:" + create.lv; // 状态渲染

            yield _this.updateUi();
          })();
        }
        /** 
         * 更新角色UI
         */


        updateUi() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var StateNode = _this2.node.getChildByName("State");

            var HpNode = StateNode.getChildByName("Hp");
            var EnergyNode = StateNode.getChildByName("Energy"); // 数据合理化

            _this2.state.reasonableData(); // 更新生命值


            HpNode.getChildByName("Value").setScale(_this2.state.hp / _this2.state.maxHp, HpNode.scale.y, HpNode.scale.z); // 更新能量

            EnergyNode.getChildByName("Value").setScale(_this2.state.energy / _this2.state.maxEnergy, EnergyNode.scale.y, EnergyNode.scale.z); // 显示buff

            var hasDrawBuff = [];
            var BuffIconNode = StateNode.getChildByName("BuffIcon");
            BuffIconNode.removeAllChildren();

            for (var buff of _this2.state.buff) {
              if (hasDrawBuff.indexOf(buff.id) !== -1) continue;
              var node = new Node();
              var sprite = node.addComponent(Sprite);
              sprite.spriteFrame = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).bundle.load(buff.meta.buffIcon, SpriteFrame);
              node.getComponent(UITransform).setContentSize(new math.Size(28, 28));
              BuffIconNode.addChild(node);
              hasDrawBuff.push(buff.id);
            } // 是否死亡


            if (_this2.state.hp <= 0) yield _this2.dead();
          })();
        }
        /** 
         * 行动函数
         */


        action() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var actionState = new (_crd && ActionState === void 0 ? (_reportPossibleCrUseOfActionState({
              error: Error()
            }), ActionState) : ActionState)();
            if (_this3.state.energy >= _this3.state.maxEnergy) actionState.actionMethod = "skill"; // 所有行动之前的回调

            for (var buff of _this3.state.buff) yield buff.BeforeAction(buff, actionState, _this3.$fightMap);

            for (var equipment of _this3.state.equipment) yield equipment.BeforeAction(equipment, actionState, _this3.$fightMap);

            yield _this3.state.BeforeAction(_this3.state, actionState, _this3.$fightMap); // 设置最高绘制顺序

            var ordinarySibling = _this3.node.getSiblingIndex();

            _this3.node.setSiblingIndex(9999); // 行动


            if (actionState.actionMethod === "attack" && actionState.canAction) {
              for (var _buff of _this3.state.buff) yield _buff.OnAttack(_buff, actionState, _this3.$fightMap);

              for (var _equipment of _this3.state.equipment) yield _equipment.OnAttack(_equipment, actionState, _this3.$fightMap);

              yield _this3.state.OnAttack(_this3.state, actionState, _this3.$fightMap);
              _this3.state.energy += 20;
            } else if (actionState.actionMethod === "skill" && actionState.canAction) {
              for (var _buff2 of _this3.state.buff) yield _buff2.OnSkill(_buff2, actionState, _this3.$fightMap);

              for (var _equipment2 of _this3.state.equipment) yield _equipment2.OnSkill(_equipment2, actionState, _this3.$fightMap);

              yield _this3.state.OnSkill(_this3.state, actionState, _this3.$fightMap);
              _this3.state.energy = 0;
            } // 更新ui


            yield _this3.updateUi(); // 还原绘制顺序

            _this3.node.setSiblingIndex(ordinarySibling); // 行动之后的函数


            for (var _buff3 of _this3.state.buff) yield _buff3.AfterAction(_buff3, _this3.$fightMap);

            for (var _equipment3 of _this3.state.equipment) yield _equipment3.AfterAction(_equipment3, _this3.$fightMap);

            yield _this3.state.AfterAction(_this3.state, _this3.$fightMap); // 更新ui

            yield _this3.updateUi();
          })();
        }
        /** 
         * 攻击函数
         * hurt 造成伤害值
         * targte 目标
         */


        attack(hurt, targte) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var targetState = new (_crd && OnBeTarget === void 0 ? (_reportPossibleCrUseOfOnBeTarget({
              error: Error()
            }), OnBeTarget) : OnBeTarget)();
            targetState.origin = _this4.state;
            targetState.cure = 0 * _this4.state.curePercent;
            targetState.hurt = hurt * _this4.state.hurtPercent * (_crd && getCampHurtPercent === void 0 ? (_reportPossibleCrUseOfgetCampHurtPercent({
              error: Error()
            }), getCampHurtPercent) : getCampHurtPercent)(_this4.state.meta.CharacterCamp, targte.state.meta.CharacterCamp);
            targetState.buff = []; // 10%数据波动

            targetState.cure += math.randomRange(-0.1, 0.1) * targetState.cure;
            targetState.hurt += math.randomRange(-0.1, 0.1) * targetState.hurt; // 护甲穿透生效

            var pierceRate = 1 - targte.state.pierce / (targte.state.pierce + 1000);
            var reduceInjury = targte.state.defence * pierceRate / (targte.state.defence * pierceRate + 700);
            targetState.hurt -= targetState.hurt * reduceInjury;
            targetState.hurt = Math.max(targetState.hurt - targte.state.defence * 0.1, 1); // 免伤

            targetState.hurt *= 1 - targte.state.FreeInjuryPercent; // 暴击概率

            if (_this4.state.critical > math.randomRange(0, 100)) {
              targetState.critical = true;
              targetState.hurt *= 1.8;
            } // 概率格挡


            if (targte.state.block > Math.random() * 100) {
              targetState.block = true;
              targetState.hurt *= 0.5;
            } // 对方所有被伤害回调


            for (var equipment of targte.state.equipment) yield equipment.OnBeHurt(equipment, targetState, _this4.$fightMap);

            for (var buff of targte.state.buff) yield buff.OnBeHurt(buff, targetState, _this4.$fightMap);

            yield targte.state.OnBeHurt(targte.state, targetState, _this4.$fightMap); // 播放对方受到攻击动画

            if (_this4.$fightMap.isPlayAnimation && !targetState.block) {
              var hurtPromise = targte.$holAnimation.playAnimation("hurt", 1, targte.defaultState);

              _this4.$fightMap.actionAwaitQueue.push(hurtPromise);
            }

            targte.state.energy += 10; // 结算

            yield targte.executeTargetState(targetState); // 更新ui

            yield _this4.updateUi();
            yield targte.updateUi();
          })();
        }
        /** 
         * 治疗函数
         * cure 治疗值
         * targte 目标
         */


        cure(cure, targte) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var targetState = new (_crd && OnBeTarget === void 0 ? (_reportPossibleCrUseOfOnBeTarget({
              error: Error()
            }), OnBeTarget) : OnBeTarget)();
            targetState.origin = _this5.state;
            targetState.cure = cure * _this5.state.curePercent;
            targetState.hurt = 0 * _this5.state.hurtPercent;
            targetState.buff = []; // 10%数据波动

            targetState.cure += math.randomRange(-0.1, 0.1) * targetState.cure;
            targetState.hurt += math.randomRange(-0.1, 0.1) * targetState.hurt; // 对方所有被治疗回调

            for (var equipment of targte.state.equipment) yield equipment.OnBeCure(equipment, targetState, _this5.$fightMap);

            for (var buff of targte.state.buff) yield buff.OnBeCure(buff, targetState, _this5.$fightMap);

            yield targte.state.OnBeCure(targte.state, targetState, _this5.$fightMap); // 结束

            yield targte.executeTargetState(targetState); // 更新ui

            yield _this5.updateUi();
            yield targte.updateUi();
          })();
        }
        /** 
         * 死亡函数
         * 死亡时调用
         */


        dead() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var index = _this6.$fightMap.allLiveCharacter.indexOf(_this6);

            if (index !== -1) _this6.$fightMap.allLiveCharacter.splice(index, 1);

            _this6.$fightMap.allDeadCharacter.push(_this6);

            var awaitPromise = _this6.holAnimation.playAnimation("dead", 1, _this6.defaultState);

            _this6.$fightMap.actionAwaitQueue.push(awaitPromise.then(() => {
              _this6.node.active = false;
              return new Promise( /*#__PURE__*/_asyncToGenerator(function* (res) {
                for (var buff of _this6.state.buff) yield buff.OnDead(buff, _this6.$fightMap);

                for (var equipment of _this6.state.equipment) yield equipment.OnDead(equipment, _this6.$fightMap);

                yield _this6.state.OnDead(_this6.state, _this6.$fightMap);
                res();
              }));
            }));
          })();
        }
        /** 
         * 重生函数
         * 调用后角色重生
         */


        rebirth() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var index = _this7.$fightMap.allDeadCharacter.indexOf(_this7);

            if (index !== -1) _this7.$fightMap.allDeadCharacter.splice(index, 1);

            _this7.$fightMap.allLiveCharacter.push(_this7);

            var awaitPromise = _this7.holAnimation.playAnimation("rebirth", 1, _this7.defaultState);

            _this7.node.active = true;
            if (_this7.state.hp <= 0) _this7.state.hp = 1;
            return new Promise(res => {
              _this7.$fightMap.actionAwaitQueue.push(awaitPromise.then( /*#__PURE__*/_asyncToGenerator(function* () {
                for (var buff of _this7.state.buff) yield buff.onReBirth(buff, _this7.$fightMap);

                for (var equipment of _this7.state.equipment) yield equipment.onReBirth(equipment, _this7.$fightMap);

                yield _this7.state.onReBirth(_this7.state, _this7.$fightMap);
                res();
              })));
            });
          })();
        }
        /** 
         * 添加buff函数
         * @param origin 施加者
         * @param buff 对应的buff
         */


        addBuff(origin, buff) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var targetState = new (_crd && OnBeTarget === void 0 ? (_reportPossibleCrUseOfOnBeTarget({
              error: Error()
            }), OnBeTarget) : OnBeTarget)();
            targetState.origin = origin.state;
            targetState.buff.push(buff); // 调用所有角色的被设置buff函数

            yield _this8.state.OnBuff(_this8.state, targetState, _this8.$fightMap); // 调用所有装备的被设置buff函数

            for (var equipment of _this8.state.equipment) yield equipment.OnBuff(equipment, targetState, _this8.$fightMap); // 调用所有buff的被设置buff函数


            for (var _buff4 of _this8.state.buff) yield _buff4.OnBuff(_buff4, targetState, _this8.$fightMap); // 最后执行target state


            yield _this8.executeTargetState(targetState);
          })();
        }
        /** 
         * 删除buff函数
         * @param buff 对应的buff
         */


        deleteBuff(buff) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            var index = _this9.state.buff.indexOf(buff);

            if (index === -1) return;

            _this9.state.buff[index].OnDeleteFromCharacter(_this9.state.buff[index]);

            _this9.state.buff.splice(index, 1);

            yield _this9.updateUi();
          })();
        }
        /** 
         * 结算on be target对象
         * @param targetState 结算对象
         */


        executeTargetState(targetState) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            // 显示格挡
            if (targetState.block && _this10.$fightMap.isPlayAnimation) {
              yield _this10.showString("格挡");
              yield _this10.showString("-" + Math.ceil(targetState.hurt));
            } // 显示数值
            else if (_this10.$fightMap.isPlayAnimation && targetState.hurt) {
              if (targetState.critical) _this10.showNumber(-targetState.hurt, new math.Color(220, 70, 70, 255), 40);else _this10.showNumber(-targetState.hurt, new math.Color(200, 200, 200, 255), 25);
            }

            if (_this10.$fightMap.isPlayAnimation && targetState.cure) _this10.showNumber(+targetState.cure, new math.Color(50, 220, 50, 255), 25);
            _this10.state.hp -= targetState.hurt;
            _this10.state.hp += targetState.cure;

            for (var b of targetState.buff) {
              b.character = _this10.state;
              yield b.OnAddToCharacter(b);

              _this10.state.buff.push(b);
            }
          })();
        }
        /** 
         * 显示数值
         * num 为数值
         * color 是颜色
         */


        showNumber(num, color, size) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            if (size === void 0) {
              size = 28;
            }

            var holNumberNodePool = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).resource.getNodePool(yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.load("prefab/HolNumber", Prefab));
            var numberNode = holNumberNodePool.get();
            var holNumber = numberNode.getComponent(_crd && HolNumber === void 0 ? (_reportPossibleCrUseOfHolNumber({
              error: Error()
            }), HolNumber) : HolNumber);
            holNumber.color = color;
            holNumber.frontSize = size;
            holNumber.number = num;

            _this11.node.addChild(numberNode);

            var ordinarySibling = numberNode.getSiblingIndex();
            numberNode.setSiblingIndex(9999);
            return new Promise(res => {
              var i = 0;
              var inter = setInterval(() => {
                if (++i > 45) {
                  res();
                  holNumberNodePool.put(numberNode);
                  numberNode.setSiblingIndex(ordinarySibling);
                  numberNode.setPosition(0, 0, numberNode.position.z);
                  return clearInterval(inter);
                }

                numberNode.setPosition(numberNode.position.x, numberNode.position.y + 3, numberNode.position.z);
              }, 20 / _this11.$holAnimation.timeScale);
            });
          })();
        }
        /** 
         * 显示文字
         * str 是显示文件
         */


        showString(str) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            if (!_this12.$fightMap.isPlayAnimation) return;
            var node = new Node();
            var label = node.addComponent(Label);
            label.font = yield (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.load("font/font_title", Font);
            label.string = str;
            label.fontSize = 30;

            _this12.node.addChild(node);

            var index = 0;
            var inter = setInterval(() => {
              if (index++ > 45) {
                clearInterval(inter);

                _this12.node.removeChild(node);

                return;
              }

              node.setPosition(node.position.x, node.position.y + 2, node.position.z);
            }, 20 / _this12.$holAnimation.timeScale);
            return new Promise(res => setTimeout(res, 100));
          })();
        }
        /**
         * 根据一个数组过滤所有队友
         */


        getFriends(all) {
          return all.filter(c => c.direction === this.direction);
        }
        /**
         * 根据一个数组过滤所有敌人
         */


        getEnimies(all) {
          return all.filter(c => c.direction !== this.direction);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e3678c0d4dcd5bc999743737ee8124664587cb6.js.map