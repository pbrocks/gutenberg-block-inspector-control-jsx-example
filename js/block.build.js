/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    BlockDescription = _wp$blocks.BlockDescription,
    InspectorControls = _wp$blocks.InspectorControls,
    ToggleControl = _wp$blocks.InspectorControls.ToggleControl;


registerBlockType('mdlr/inspector-control-jsx-example', {
	title: __('Inspector Control - JSX Example'),
	description: __('Block description can be added here...'),
	icon: 'admin-settings',
	category: 'common',
	attributes: {
		applyStyles: {
			type: 'string',
			default: ''
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    focus = _ref.focus,
		    setAttributes = _ref.setAttributes;
		var applyStyles = attributes.applyStyles;


		function onChangeStyleSettings() {
			if (applyStyles) {
				setAttributes({ applyStyles: '' });
			} else {
				setAttributes({ applyStyles: 'styled' });
			}
		}

		return wp.element.createElement(
			'div',
			{ className: className + ' ' + applyStyles },
			!!focus && wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(ToggleControl, {
					label: __('Apply Styles'),
					checked: !!applyStyles,
					onChange: onChangeStyleSettings
				})
			),
			wp.element.createElement(
				'p',
				null,
				'Inspector control block example built with JSX.'
			)
		);
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes,
		    className = _ref2.className;
		var applyStyles = attributes.applyStyles;


		return wp.element.createElement(
			'div',
			{ className: className + ' ' + applyStyles },
			wp.element.createElement(
				'p',
				null,
				'Inspector control block example built with JSX.'
			)
		);
	}
});

/***/ })
/******/ ]);