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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"@wordpress/i18n\"");
throw new Error("Cannot find module \"@wordpress/blocks\"");
throw new Error("Cannot find module \"@wordpress/components\"");
throw new Error("Cannot find module \"@wordpress/compose\"");









// const MyToggleControl = withState( {
//     hasFixedBackground: false,
// } )( ( { hasFixedBackground, setState } ) => (
//     <ToggleControl
//         label="Fixed Background"
//         help={ hasFixedBackground ? 'Has fixed background.' : 'No fixed background.' }
//         checked={ hasFixedBackground }
//         onChange={ () => setState( ( state ) => ( { hasFixedBackground: ! state.hasFixedBackground } ) ) }
//     />
// ) );
Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_blocks__["registerBlockType"])('mdlr/inspector-control-jsx-example', {
	title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Inspector Control JSX Example'),
	description: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Block description can be added here...'),
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
				__WEBPACK_IMPORTED_MODULE_1__wordpress_blocks__["InspectorControls"],
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__["ToggleControl"], {
					label: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Apply Styles'),
					checked: !!applyStyles,
					onChange: onChangeStyleSettings
				})
			),
			'Block with styles that can be toggled with an inspector control. Built with JSX.'
		);
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes,
		    className = _ref2.className;
		var applyStyles = attributes.applyStyles;


		return wp.element.createElement(
			'div',
			{ className: className + ' ' + applyStyles },
			'Block with styles that can be toggled with an inspector control. Built with JSX.'
		);
	}
});

/***/ })
/******/ ]);