System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Resource, VolumeDetail, UserData, Config, _crd, globalId, config;

  // 存储config信息
  function stockConfig() {
    config.userData.backpack = config.userData.backpack.filter(i => i.number > 0);
    localStorage.setItem("UserConfigData", JSON.stringify(config));
  } // 获取config


  function getConfig() {
    if (config) return config;
    const configJSON = localStorage.getItem("UserConfigData");
    config = configJSON ? new Config(JSON.parse(configJSON)) : new Config();
    return config;
  }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentStateCreate(extras) {
    _reporterNs.report("EquipmentStateCreate", "../../game/fight/equipment/EquipmentState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemStateCreate(extras) {
    _reporterNs.report("ItemStateCreate", "../../game/fight/item/ItemState", _context.meta, extras);
  }

  _export({
    Resource: void 0,
    stockConfig: stockConfig,
    getConfig: getConfig
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8739fIbVfVABb2YCP/ZRxZw", "config", undefined);

      _export("Resource", Resource = class Resource {
        constructor() {
          this.gold = 100000000;
          this.diamond = 100000;
          this.soul = 100000000;
        }

      });

      VolumeDetail = class VolumeDetail {
        constructor(v) {
          // 战斗音量
          this.fight = 1;
          // 家园音量
          this.home = 1;
          // 角色音量
          this.character = 1;
          if (!v) return;
          Object.keys(v).forEach(k => this[k] = v[k]);
        }

      };
      globalId = 1;
      UserData = class UserData extends Resource {
        constructor(or) {
          super(); // 测试角色

          this.lv = 1;
          this.exp = 0;
          this.name = "用户12138";
          this.backpack = [];
          this.equipments = [];
          this.characters = [];
          this.characterQueue = [[null, null, null], [null, null, null], [null, null, null]];
          // 已经收集到的英雄
          this.hasCollectCharacterId = [];
          this.addNewCharacter({
            id: "sunwukong",
            lv: 100,
            star: 3,
            equipment: []
          });
          this.addNewCharacter({
            id: "fearOfDemons",
            lv: 90,
            star: 1,
            equipment: []
          });

          if (!or) {
            return;
          }

          this.lv = or.lv || 1;
          this.exp = or.exp || 1;
          this.gold = or.gold || 1000;
          this.diamond = or.diamond || 100;
          this.soul = or.soul || 1000;
          this.hasCollectCharacterId = or.hasCollectCharacterId || [] // 原有的物品
          ;
          (or.backpack || []).forEach(i => this.addNewItem(i.id, i.number)) // 原有角色
          ;
          (or.characters || []).forEach(c => {
            this.addNewCharacter(c);
          }) // 原有装备
          ;
          (or.equipments || []).forEach(e => {
            this.addNewEquipment(e.id, e.lv);
          }) // 原有出战角色
          ;
          or.characterQueue.forEach((cq, i) => cq.forEach((c, j) => this.characterQueue[i][j] = { ...c,
            uuid: ++globalId
          }));
        } // 添加新装备


        addNewEquipment(id, lv, quality) {
          this.equipments.push({
            id,
            lv: lv || 1,
            uuid: ++globalId,
            quality: quality || 1
          });
        } // 添加新角色


        addNewCharacter(character) {
          const equipment = [];
          (character.equipment || []).forEach(e => equipment.push({ ...e,
            uuid: ++globalId
          }));
          this.characters.push({ ...character,
            star: character.star || 1,
            equipment,
            uuid: ++globalId
          });
          if (this.hasCollectCharacterId.indexOf(character.id) === -1) this.hasCollectCharacterId.push(character.id);
        } // 添加新物品


        addNewItem(id, num) {
          for (let i = 0; i < this.backpack.length; i++) {
            const item = this.backpack[i];

            if (item.id === id) {
              item.number += num;
              return;
            }
          }

          this.backpack.push({
            id,
            number: num
          });
        }

      };
      Config = class Config {
        constructor(con) {
          // 版本
          this.version = "0.0.1";
          // 总音量
          this.volume = 0.1;
          // 用户数据
          this.userData = new UserData();
          // 详细音量
          this.volumeDetail = new VolumeDetail();
          if (!con) return;
          if (con.version !== this.version) return;
          Object.keys(con).forEach(k => this[k] = con[k]);
          this.userData = new UserData(con.userData);
          this.volumeDetail = new VolumeDetail(con.volumeDetail);
        }

      }; // 如果没有用户数据则创建一个新的数据

      config = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ce68487bbb2744c9e6c32abec0d13cd095a6a54.js.map