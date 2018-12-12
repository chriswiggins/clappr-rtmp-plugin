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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

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
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
var RTMP=/*#__PURE__*/function(_Flash){_inherits(RTMP,_Flash);_createClass(RTMP,[{key:"name",get:function get(){return'rtmp';}},{key:"tagName",get:function get(){return'object';}},{key:"template",get:function get(){return Object(clappr__WEBPACK_IMPORTED_MODULE_0__["template"])(_html_loader_public_flash_html__WEBPACK_IMPORTED_MODULE_1___default.a);}},{key:"attributes",get:function get(){return{'data-rtmp':'','data':this.swfPath,'type':'application/x-shockwave-flash','width':'100%','height':'100%'};}}]);function RTMP(options){var _this;_classCallCheck(this,RTMP);_this=_possibleConstructorReturn(this,_getPrototypeOf(RTMP).call(this,options));_this.options.rtmpConfig=_this.options.rtmpConfig||{};_this.options.rtmpConfig.swfPath=_this.options.rtmpConfig.swfPath||'//cdn.jsdelivr.net/clappr.rtmp/latest/assets/RTMP.swf';_this.options.rtmpConfig.wmode=_this.options.rtmpConfig.wmode||'transparent';// Default to transparent wmode - IE always uses gpu as per objectIE
_this.options.rtmpConfig.bufferTime=_this.options.rtmpConfig.bufferTime===undefined?0.1:_this.options.rtmpConfig.bufferTime;_this.options.rtmpConfig.scaling=_this.options.rtmpConfig.scaling||'letterbox';_this.options.rtmpConfig.playbackType=_this.options.rtmpConfig.playbackType||_this.options.src.indexOf('live')>-1;_this.options.rtmpConfig.useAppInstance=_this.options.rtmpConfig.useAppInstance===undefined?false:_this.options.rtmpConfig.useAppInstance;_this.options.rtmpConfig.proxyType=_this.options.rtmpConfig.proxyType||'none';_this.options.rtmpConfig.startLevel=_this.options.rtmpConfig.startLevel===undefined?-1:_this.options.rtmpConfig.startLevel;_this.options.rtmpConfig.autoSwitch=_this.options.rtmpConfig.autoSwitch===undefined?false:_this.options.rtmpConfig.autoSwitch;_this.options.rtmpConfig.switchRules=_this.options.rtmpConfig.switchRules;_this.overlayAppended=false;_this.addListeners();_this._setupPlaybackType();return _this;}_createClass(RTMP,[{key:"getPlaybackType",value:function getPlaybackType(){return this._playbackType;}},{key:"addListeners",value:function addListeners(){clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':progress',this._progress,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':timeupdate',this._updateTime,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':statechanged',this._checkState,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':playbackready',this._playbackReady,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':onloaded',this._reporLevels,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':levelChanging',this._levelChanging,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':levelChanged',this._levelChange,this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].on(this.uniqueId+':flashready',this._bootstrap,this);//Temporary hack around webpack not globally exposing clappr
if(!window.Clappr){window.Clappr=clappr__WEBPACK_IMPORTED_MODULE_0___default.a;}}},{key:"stopListening",value:function stopListening(){_get(_getPrototypeOf(RTMP.prototype),"stopListening",this).call(this);clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].off(this.uniqueId+':progress');clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].off(this.uniqueId+':timeupdate');clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].off(this.uniqueId+':statechanged');clappr__WEBPACK_IMPORTED_MODULE_0__["Mediator"].off(this.uniqueId+':flashready');}},{key:"_bootstrap",value:function _bootstrap(){this.el.width='100%';this.el.height='100%';this.options.autoPlay&&this.play();this._setupSettings();if(!this.overlayAppended){Object(clappr__WEBPACK_IMPORTED_MODULE_0__["$"])('<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" />').insertAfter(this.$el);this.overlayAppended=true;}}},{key:"_updateTime",value:function _updateTime(){if(this.getPlaybackType()==='live'){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_TIMEUPDATE,{current:1,total:1},this.name);}else{this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_TIMEUPDATE,{current:this.el.getPosition(),total:this.el.getDuration()},this.name);}}},{key:"_levelChanging",value:function _levelChanging(){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVEL_SWITCH_START);}},{key:"_levelChange",value:function _levelChange(){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVEL_SWITCH_END);this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_BITRATE,{level:this.currentLevel});}},{key:"findLevelBy",value:function findLevelBy(id){var foundLevel;this.levels.forEach(function(level){if(level.id===id){foundLevel=level;}});return foundLevel;}},{key:"_setupPlaybackType",value:function _setupPlaybackType(){this._playbackType=this.options.rtmpConfig.playbackType;}},{key:"_setupSettings",value:function _setupSettings(){if(this.getPlaybackType()==='live'){this.settings.left=["playpause"];this.settings.right=["fullscreen","volume"];this.settings.seekEnabled=false;}else{this.settings.left=["playpause","position","duration"];this.settings.right=["fullscreen","volume"];}this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_SETTINGSUPDATE,this.name);}},{key:"render",value:function render(){this.$el.html(this.template({cid:this.cid,swfPath:this.swfPath,playbackId:this.uniqueId,wmode:this.options.rtmpConfig.wmode,scaling:this.options.rtmpConfig.scaling,bufferTime:this.options.rtmpConfig.bufferTime,playbackType:this.options.rtmpConfig.playbackType,startLevel:this.options.rtmpConfig.startLevel,autoSwitch:this.options.rtmpConfig.autoSwitch,switchRules:this._switchRulesJSON,useAppInstance:this.options.rtmpConfig.useAppInstance,proxyType:this.options.rtmpConfig.proxyType}));if(clappr__WEBPACK_IMPORTED_MODULE_0__["Browser"].isIE){this.$('embed').remove();if(clappr__WEBPACK_IMPORTED_MODULE_0__["Browser"].isLegacyIE){this.$el.attr('classid',IE_CLASSID);}}this.el.id=this.cid;var style=clappr__WEBPACK_IMPORTED_MODULE_0__["Styler"].getStyleFor(_raw_loader_sass_loader_public_flash_scss__WEBPACK_IMPORTED_MODULE_2___default.a);this.$el.append(style);return this;}},{key:"_checkState",value:function _checkState(){_get(_getPrototypeOf(RTMP.prototype),"_checkState",this).call(this);if(this.el.getState()==="ERROR"){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_ERROR,this.name);}}},{key:"_playbackReady",value:function _playbackReady(){this._isReadyState=true;this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_READY,this.name);}},{key:"_reporLevels",value:function _reporLevels(){if(this.isDynamicStream){if(this.levels){if(this.options.rtmpConfig.autoSwitch===true){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVELS_AVAILABLE,this.levels,-1);this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_BITRATE,{level:this.currentLevel});}else{this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVELS_AVAILABLE,this.levels,this.options.rtmpConfig.startLevel);}}}}},{key:"swfPath",get:function get(){return this.options.rtmpConfig.swfPath;}},{key:"currentLevel",get:function get(){if(this._isReadyState){return this.el.getCurrentLevel();}return undefined;},set:function set(level){this.el.setLevel(level);if(level===-1&&level!==this.currentLevel){this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_LEVEL_SWITCH_END);this.trigger(clappr__WEBPACK_IMPORTED_MODULE_0__["Events"].PLAYBACK_BITRATE,{level:this.currentLevel});}}},{key:"numLevels",get:function get(){if(this._isReadyState){return this.el.getNumLevels();}return undefined;}},{key:"scaling",set:function set(scaling){this.el.playerScaling(scaling);}},{key:"autoSwitchLevels",get:function get(){return this.el.isAutoSwitchLevels();}},{key:"levels",get:function get(){var levels=[];for(var i=0;i<this.numLevels;i++){var bitrate=this.el.getBitrateForLevel(i);levels.push({id:i,label:bitrate+"Kbps"});}return levels;}},{key:"isDynamicStream",get:function get(){return this.el.isDynamicStream();}},{key:"_switchRulesJSON",get:function get(){if(this.options.rtmpConfig.switchRules!==undefined){return JSON.stringify(this.options.rtmpConfig.switchRules).replace(/"/g,'&quot;');}return"";}}]);return RTMP;}(clappr__WEBPACK_IMPORTED_MODULE_0__["Flash"]);RTMP.canPlay=function(source,mimeType){return!!((source.indexOf('rtmp://')>-1||source.indexOf('rtmps://')>-1||source.indexOf('.smil')>-1||mimeType&&mimeType.indexOf('rtmp')>-1)&&(clappr__WEBPACK_IMPORTED_MODULE_0__["Browser"].hasFlash||clappr__WEBPACK_IMPORTED_MODULE_0__["Browser"].isChrome));//Chrome doesn't expose hasFlash
};RTMP.debug=function(s){return console.log(s);};

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