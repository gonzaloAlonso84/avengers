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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpacksrc/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webpacksrc/controllers.js":
/*!***********************************!*\
  !*** ./webpacksrc/controllers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n_.delay(function () {\n    $('#btnLogin').click(function () {\n        realizarLogin();\n    });\n\n    $('#btnLogout').click(function () {\n        localStorage.removeItem('token');\n    });\n\n    $('#btnLibros').click(function () {\n        consultarLibros();\n    });\n}, 200);\n\nfunction consultarLibros() {\n    fetch('/peliculas', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin': '*',\n            'X-JWT-TOKEN': localStorage.getItem('token')\n        } }).then(function (response) {\n        console.log('response =', response);\n        return response.json();\n    }).then(function (data) {\n        // anaisis del token\n        console.log('data = ', data);\n    }).catch(function (err) {\n        console.error(err);\n    });\n}\n\nfunction realizarLogin() {\n    fetch('/loginweb', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin': '*'\n        },\n        body: JSON.stringify({ usuario: 'andy', password: 'aNdYv5z' })\n    }).then(function (response) {\n        console.log('response =', response);\n        return response.json();\n    }).then(function (data) {\n        // anaisis del token\n        console.log('data = ', data);\n        var decodificado = jwt_decode(data.token);\n        console.log(decodificado);\n        var tsActual = Math.floor(new Date() / 1000);\n        console.log(tsActual);\n        localStorage.setItem('token', data.token);\n    }).catch(function (err) {\n        console.error(err);\n    });\n}\n\n//# sourceURL=webpack:///./webpacksrc/controllers.js?");

/***/ }),

/***/ "./webpacksrc/estados.js":
/*!*******************************!*\
  !*** ./webpacksrc/estados.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar ST_DESLOGUEADO = 'ST_DESLOGUEADO';\nvar ST_LOGUEADO = 'ST_LOGUEADO';\n\nvar ultimoEstado = ST_DESLOGUEADO;\n\n(function actEstado() {\n    if (localStorage.getItem('token') == null) {\n        ultimoEstado = ST_DESLOGUEADO;\n    } else {\n        ultimoEstado = ST_LOGUEADO;\n    }\n    _.delay(actEstado, 1000);\n})();\n\nexports.default = {\n    ST_DESLOGUEADO: ST_DESLOGUEADO,\n    ST_LOGUEADO: ST_LOGUEADO,\n    setEstado: function setEstado(z) {\n        return ultimoEstado = z;\n    },\n    getEstado: function getEstado() {\n        return ultimoEstado;\n    }\n};\n\n//# sourceURL=webpack:///./webpacksrc/estados.js?");

/***/ }),

/***/ "./webpacksrc/index.js":
/*!*****************************!*\
  !*** ./webpacksrc/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _estados = __webpack_require__(/*! ./estados */ \"./webpacksrc/estados.js\");\n\nvar _estados2 = _interopRequireDefault(_estados);\n\nvar _muestraStatus = __webpack_require__(/*! ./muestraStatus */ \"./webpacksrc/muestraStatus.js\");\n\nvar _muestraStatus2 = _interopRequireDefault(_muestraStatus);\n\nvar _controllers = __webpack_require__(/*! ./controllers */ \"./webpacksrc/controllers.js\");\n\nvar _controllers2 = _interopRequireDefault(_controllers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./webpacksrc/index.js?");

/***/ }),

/***/ "./webpacksrc/muestraStatus.js":
/*!*************************************!*\
  !*** ./webpacksrc/muestraStatus.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _estados = __webpack_require__(/*! ./estados */ \"./webpacksrc/estados.js\");\n\nvar _estados2 = _interopRequireDefault(_estados);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ultimoTs = function ultimoTs() {\n    return Math.floor(new Date() / 1000);\n};\n\nconsole.log('123456789');\n(function iteracionContinua() {\n    $('#ultimoEstado').html(_estados2.default.getEstado());\n    $('#tsUltimoEstado').html(ultimoTs());\n    if (localStorage.getItem('token') == null) {\n        $('#tokenRecibido').html('');\n        $('#datosToken').html('');\n    } else {\n        var token = localStorage.getItem('token').split('.')[0];\n        $('#tokenRecibido').html(token);\n        var objDeco = jwt_decode(localStorage.getItem('token'));\n        var txtToken = [objDeco.sub, objDeco.exp, objDeco.roles.join(' ')].join(' ');\n        $('#datosToken').html(txtToken);\n    }\n    _.delay(iteracionContinua, 500);\n})();\n\nexports.default = {};\n\n//# sourceURL=webpack:///./webpacksrc/muestraStatus.js?");

/***/ })

/******/ });