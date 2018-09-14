(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["Clappr"], factory);
	else if(typeof exports === 'object')
		exports["RTMP"] = factory(require("Clappr"));
	else
		root["RTMP"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_clappr__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__(/*! ./src/main.js */ "./src/main.js"));

/***/ }),

/***/ "./node_modules/html-loader/index.js!./public/flash.html":
/*!******************************************************!*\
  !*** ./node_modules/html-loader!./public/flash.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<param name=\"movie\" value=\"<%= swfPath %>?inline=1\">\n<param name=\"quality\" value=\"autohigh\">\n<param name=\"swliveconnect\" value=\"true\">\n<param name=\"allowScriptAccess\" value=\"always\">\n<param name=\"allownetworking\" value=\"all\">\n<param name=\"bgcolor\" value=\"#000000\">\n<param name=\"allowFullScreen\" value=\"false\">\n<param name=\"wmode\" value=\"<%= wmode %>\">\n<param name=\"tabindex\" value=\"1\">\n<param name=FlashVars value=\"playbackId=<%= playbackId %>&scaling=<%= scaling %>&bufferTime=<%= bufferTime %>&playbackType=<%= playbackType %>&startLevel=<%= startLevel %>&useAppInstance=<%= useAppInstance %>&proxyType=<%= proxyType %>&autoSwitch=<%= autoSwitch %>&switchRules=<%= switchRules %>\"/>\n<embed\n  name=\"<%= cid %>\"\n  type=\"application/x-shockwave-flash\"\n  disabled=\"disabled\"\n  tabindex=\"-1\"\n  enablecontextmenu=\"false\"\n  allowScriptAccess=\"always\"\n  allownetworking=\"all\"\n  quality=\"autohigh\"\n  pluginspage=\"http://www.macromedia.com/go/getflashplayer\"\n  wmode=\"<%= wmode %>\"\n  swliveconnect=\"true\"\n  allowfullscreen=\"false\"\n  bgcolor=\"#000000\"\n  FlashVars=\"playbackId=<%= playbackId %>&scaling=<%= scaling %>&bufferTime=<%= bufferTime %>&playbackType=<%= playbackType %>&startLevel=<%= startLevel %>&useAppInstance=<%= useAppInstance %>&proxyType=<%= proxyType %>&autoSwitch=<%= autoSwitch %>&switchRules=<%= switchRules %>\"\n  data=\"<%= swfPath %>\"\n  src=\"<%= swfPath %>\"\n  width=\"100%\"\n  height=\"100%\">\n</embed>\n";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/sass-loader/lib/loader.js!./public/flash.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/sass-loader/lib/loader.js!./public/flash.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clappr-flash-playback[data-flash-playback] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none; }\n"

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RTMP; });
/* harmony import */ var clappr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clappr */ "clappr");
/* harmony import */ var clappr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clappr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_loader_public_flash_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-loader!../public/flash.html */ "./node_modules/html-loader/index.js!./public/flash.html");
/* harmony import */ var _html_loader_public_flash_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_html_loader_public_flash_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _raw_loader_sass_loader_public_flash_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!sass-loader!../public/flash.scss */ "./node_modules/raw-loader/index.js!./node_modules/sass-loader/lib/loader.js!./public/flash.scss");
/* harmony import */ var _raw_loader_sass_loader_public_flash_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_sass_loader_public_flash_scss__WEBPACK_IMPORTED_MODULE_2__);
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
class RTMP extends clappr__WEBPACK_IMPORTED_MODULE_0__["Flash"]{get name(){return'rtmp';}get tagName(){return'object';}get template(){return Object(clappr__WEBPACK_IMPORTED_MODULE_0__["template"])(_html_loader_public_flash_html__WEBPACK_IMPORTED_MODULE_1___default.a);}get attributes(){return{'data-rtmp':'','data':this.swfPath,'type':'application/x-shockwave-flash','width':'100%','height':'100%'};}constructor(options){super(options);this.options.rtmpConfig=this.options.rtmpConfig||{};this.options.rtmpConfig.swfPath=this.options.rtmpConfig.swfPath||'//cdn.jsdelivr.net/clappr.rtmp/latest/assets/RTMP.swf';this.options.rtmpConfig.wmode=this.options.rtmpConfig.wmode||'transparent';// Default to transparent wmode - IE always uses gpu as per objectIE
this.options.rtmpConfig.bufferTime=this.options.rtmpConfig.bufferTime===undefined?0.1:this.options.rtmpConfig.bufferTime;this.options.rtmpConfig.scaling=this.options.rtmpConfig.scaling||'letterbox';this.options.rtmpConfig.playbackType=this.options.rtmpConfig.playbackType||this.options.src.indexOf('live')>-1;this.options.rtmpConfig.useAppInstance=this.options.rtmpConfig.useAppInstance===undefined?false:this.options.rtmpConfig.useAppInstance;this.options.rtmpConfig.proxyType=this.options.rtmpConfig.proxyType||'none';this.options.rtmpConfig.startLevel=this.options.rtmpConfig.startLevel===undefined?-1:this.options.rtmpConfig.startLevel;this.options.rtmpConfig.autoSwitch=this.options.rtmpConfig.autoSwitch===undefined?false:this.options.rtmpConfig.autoSwitch;this.options.rtmpConfig.switchRules=this.options.rtmpConfig.switchRules;this.addListeners();this._setupPlaybackType();}getPlaybackType(){return this._playbackType;}get swfPath(){return this.options.rtmpConfig.swfPath;}get currentLevel(){if(this._isReadyState){return this.el.getCurrentLevel();}return undefined;}get numLevels(){if(this._isReadyState){return this.el.getNumLevels();}return undefined;}set currentLevel(level){this.el.setLevel(level);if(level===-1&&level!==this.currentLevel){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVEL_SWITCH_END);this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_BITRATE,{level:this.currentLevel});}}get autoSwitchLevels(){return this.el.isAutoSwitchLevels();}get levels(){var levels=[];for(var i=0;i<this.numLevels;i++){var bitrate=this.el.getBitrateForLevel(i);levels.push({id:i,label:bitrate+"Kbps"});}return levels;}get isDynamicStream(){return this.el.isDynamicStream();}addListeners(){clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':progress',this._progress,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':timeupdate',this._updateTime,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':statechanged',this._checkState,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':playbackready',this._playbackReady,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':onloaded',this._reporLevels,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':levelChanging',this._levelChanging,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':levelChanged',this._levelChange,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':flashready',this._bootstrap,this);}stopListening(){super.stopListening();clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].off(this.uniqueId+':progress');clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].off(this.uniqueId+':timeupdate');clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].off(this.uniqueId+':statechanged');clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].off(this.uniqueId+':flashready');}_bootstrap(){this.el.width='100%';this.el.height='100%';this.options.autoPlay&&this.play();this._setupSettings();}_updateTime(){if(this.getPlaybackType()==='live'){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_TIMEUPDATE,{current:1,total:1},this.name);}else{this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_TIMEUPDATE,{current:this.el.getPosition(),total:this.el.getDuration()},this.name);}}_levelChanging(){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVEL_SWITCH_START);}_levelChange(){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVEL_SWITCH_END);this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_BITRATE,{level:this.currentLevel});}findLevelBy(id){var foundLevel;this.levels.forEach(level=>{if(level.id===id){foundLevel=level;}});return foundLevel;}_setupPlaybackType(){this._playbackType=this.options.rtmpConfig.playbackType;}_setupSettings(){if(this.getPlaybackType()==='live'){this.settings.left=["playpause"];this.settings.right=["fullscreen","volume"];this.settings.seekEnabled=false;}else{this.settings.left=["playpause","position","duration"];this.settings.right=["fullscreen","volume"];}this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_SETTINGSUPDATE,this.name);}get _switchRulesJSON(){if(this.options.rtmpConfig.switchRules!==undefined){return JSON.stringify(this.options.rtmpConfig.switchRules).replace(/"/g,'&quot;');}return"";}render(){this.$el.html(this.template({cid:this.cid,swfPath:this.swfPath,playbackId:this.uniqueId,wmode:this.options.rtmpConfig.wmode,scaling:this.options.rtmpConfig.scaling,bufferTime:this.options.rtmpConfig.bufferTime,playbackType:this.options.rtmpConfig.playbackType,startLevel:this.options.rtmpConfig.startLevel,autoSwitch:this.options.rtmpConfig.autoSwitch,switchRules:this._switchRulesJSON,useAppInstance:this.options.rtmpConfig.useAppInstance,proxyType:this.options.rtmpConfig.proxyType}));if(clappr__WEBPACK_IMPORTED_MODULE_0__["Browser"].isIE){this.$('embed').remove();if(clappr__WEBPACK_IMPORTED_MODULE_0__["Browser"].isLegacyIE){this.$el.attr('classid',IE_CLASSID);}}this.el.id=this.cid;var style=clappr__WEBPACK_IMPORTED_MODULE_0__["Styler"].getStyleFor(_raw_loader_sass_loader_public_flash_scss__WEBPACK_IMPORTED_MODULE_2___default.a);this.$el.append(style);return this;}_checkState(){super._checkState();if(this.el.getState()==="ERROR"){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_ERROR,this.name);}}_playbackReady(){this._isReadyState=true;this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_READY,this.name);}_reporLevels(){if(this.isDynamicStream){if(this.levels){if(this.options.rtmpConfig.autoSwitch===true){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVELS_AVAILABLE,this.levels,-1);this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_BITRATE,{level:this.currentLevel});}else{this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVELS_AVAILABLE,this.levels,this.options.rtmpConfig.startLevel);}}}}}RTMP.canPlay=function(source,mimeType){return!!((source.indexOf('rtmp://')>-1||source.indexOf('rtmps://')>-1||source.indexOf('.smil')>-1||mimeType&&mimeType.indexOf('rtmp')>-1)&&clappr__WEBPACK_IMPORTED_MODULE_0__["Browser"].hasFlash);};RTMP.debug=s=>console.log(s);

/***/ }),

/***/ "clappr":
/*!*************************!*\
  !*** external "Clappr" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_clappr__;

/***/ })

/******/ });
});