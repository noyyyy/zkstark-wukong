System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, load, loadDir, error, log, loadMessage, preloadLoad, confirm, preloadConfirm, preloadPrompt, prompt, getNodePool, moveNodeToPosition, introduce, preloadIntroduce, formateNumber, _crd, util;

  function _reportPossibleCrUseOfload(extras) {
    _reporterNs.report("load", "./bundle/load", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadDir(extras) {
    _reporterNs.report("loadDir", "./bundle/loadDir", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./out/error", _context.meta, extras);
  }

  function _reportPossibleCrUseOflog(extras) {
    _reporterNs.report("log", "./out/log", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadMessage(extras) {
    _reporterNs.report("loadMessage", "./message/load", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpreloadLoad(extras) {
    _reporterNs.report("preloadLoad", "./message/load", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfirm(extras) {
    _reporterNs.report("confirm", "./message/confirm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpreloadConfirm(extras) {
    _reporterNs.report("preloadConfirm", "./message/confirm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpreloadPrompt(extras) {
    _reporterNs.report("preloadPrompt", "./message/prompt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprompt(extras) {
    _reporterNs.report("prompt", "./message/prompt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePool(extras) {
    _reporterNs.report("getNodePool", "./resource/getNodePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmoveNodeToPosition(extras) {
    _reporterNs.report("moveNodeToPosition", "./sundry/moveNodeToPosition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfintroduce(extras) {
    _reporterNs.report("introduce", "./message/introduce", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpreloadIntroduce(extras) {
    _reporterNs.report("preloadIntroduce", "./message/introduce", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformateNumber(extras) {
    _reporterNs.report("formateNumber", "./sundry/formateNumber", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      load = _unresolved_2.load;
    }, function (_unresolved_3) {
      loadDir = _unresolved_3.loadDir;
    }, function (_unresolved_4) {
      error = _unresolved_4.error;
    }, function (_unresolved_5) {
      log = _unresolved_5.log;
    }, function (_unresolved_6) {
      loadMessage = _unresolved_6.load;
      preloadLoad = _unresolved_6.preloadLoad;
    }, function (_unresolved_7) {
      confirm = _unresolved_7.confirm;
      preloadConfirm = _unresolved_7.preloadConfirm;
    }, function (_unresolved_8) {
      preloadPrompt = _unresolved_8.preloadPrompt;
      prompt = _unresolved_8.prompt;
    }, function (_unresolved_9) {
      getNodePool = _unresolved_9.getNodePool;
    }, function (_unresolved_10) {
      moveNodeToPosition = _unresolved_10.moveNodeToPosition;
    }, function (_unresolved_11) {
      introduce = _unresolved_11.introduce;
      preloadIntroduce = _unresolved_11.preloadIntroduce;
    }, function (_unresolved_12) {
      formateNumber = _unresolved_12.formateNumber;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5e57ZNewtD8KHErjWPCqWd", "util", undefined);

      // 根据对象
      _export("util", util = {
        // 输出对象
        out: {
          log: _crd && log === void 0 ? (_reportPossibleCrUseOflog({
            error: Error()
          }), log) : log,
          // 默认输出
          error: _crd && error === void 0 ? (_reportPossibleCrUseOferror({
            error: Error()
          }), error) : error // 错误输出

        },
        // bundle 资源
        bundle: {
          load: _crd && load === void 0 ? (_reportPossibleCrUseOfload({
            error: Error()
          }), load) : load,
          // 加载数据
          loadDir: _crd && loadDir === void 0 ? (_reportPossibleCrUseOfloadDir({
            error: Error()
          }), loadDir) : loadDir // 加载文件夹

        },
        // 节点等资源
        resource: {
          getNodePool: _crd && getNodePool === void 0 ? (_reportPossibleCrUseOfgetNodePool({
            error: Error()
          }), getNodePool) : getNodePool // 获取一个节点池

        },
        // 消息提示 弹框等资源
        message: {
          prompt: _crd && prompt === void 0 ? (_reportPossibleCrUseOfprompt({
            error: Error()
          }), prompt) : prompt,
          // 提示框
          preloadPrompt: _crd && preloadPrompt === void 0 ? (_reportPossibleCrUseOfpreloadPrompt({
            error: Error()
          }), preloadPrompt) : preloadPrompt,
          confirm: _crd && confirm === void 0 ? (_reportPossibleCrUseOfconfirm({
            error: Error()
          }), confirm) : confirm,
          // 确认框
          preloadConfirm: _crd && preloadConfirm === void 0 ? (_reportPossibleCrUseOfpreloadConfirm({
            error: Error()
          }), preloadConfirm) : preloadConfirm,
          load: _crd && loadMessage === void 0 ? (_reportPossibleCrUseOfloadMessage({
            error: Error()
          }), loadMessage) : loadMessage,
          // 加载框
          preloadLoad: _crd && preloadLoad === void 0 ? (_reportPossibleCrUseOfpreloadLoad({
            error: Error()
          }), preloadLoad) : preloadLoad,
          introduce: _crd && introduce === void 0 ? (_reportPossibleCrUseOfintroduce({
            error: Error()
          }), introduce) : introduce,
          preloadIntroduce: _crd && preloadIntroduce === void 0 ? (_reportPossibleCrUseOfpreloadIntroduce({
            error: Error()
          }), preloadIntroduce) : preloadIntroduce
        },
        // 杂项功能
        sundry: {
          moveNodeToPosition: _crd && moveNodeToPosition === void 0 ? (_reportPossibleCrUseOfmoveNodeToPosition({
            error: Error()
          }), moveNodeToPosition) : moveNodeToPosition,
          // 节点移动函数
          formateNumber: _crd && formateNumber === void 0 ? (_reportPossibleCrUseOfformateNumber({
            error: Error()
          }), formateNumber) : formateNumber // 数字变为字符串

        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4e094ec29c564449d447c7fafe8f53c6c42d7fc.js.map