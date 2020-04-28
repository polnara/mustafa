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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/Employee.ts":
/*!****************************!*\
  !*** ./src/ts/Employee.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.address = \"Bengalore\";\r\nvar Employee = /** @class */ (function () {\r\n    function Employee(n, a, s, d) {\r\n        this.name = n;\r\n        this.age = a;\r\n        this.salary = s;\r\n        this.designation = d;\r\n    }\r\n    Employee.prototype.monthlySalary = function () {\r\n        var monthSalary = this.salary / 12;\r\n        return monthSalary;\r\n    };\r\n    Employee.prototype.officeEntered = function () {\r\n        Employee.count++;\r\n    };\r\n    Employee.officeExit = function () {\r\n        console.log(\"It is static method\");\r\n    };\r\n    // class level variable\r\n    Employee.country = \"India\";\r\n    Employee.count = 0;\r\n    return Employee;\r\n}());\r\nexports.Employee = Employee;\r\n\n\n//# sourceURL=webpack:///./src/ts/Employee.ts?");

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//Type script -> Type script is super set of javascript\r\n// browser understand only html,css, java script. so we need to convert ts(Type script) to js(Java script).\r\n// tsc(type script compiler)tool used to covert(compile) typescript into javascript\r\n// package.json will be generated by using npm\r\n// tsconfig.json contain type script compiler configuration. when you run tsc command, it will check the tsconfig.json file.\r\nvar Employee_1 = __webpack_require__(/*! ./Employee */ \"./src/ts/Employee.ts\");\r\nvar calculator_1 = __webpack_require__(/*! ./calculator */ \"./src/ts/calculator.ts\");\r\nvar a = 20;\r\nvar b = \"Hello\";\r\nvar c = true;\r\nvar d = \"Welcome\";\r\n//tightly coupled\r\nvar emp = new Employee_1.Employee(\"Harish\", 20, 600000, \"SE\");\r\nvar emp2 = new Employee_1.Employee(\"Mahesh\", 40, 800000, \"Mechanical\");\r\nemp2.officeEntered();\r\nvar emp3 = new Employee_1.Employee(\"Mahesh\", 40, 800000, \"Mechanical\");\r\nvar emp4 = new Employee_1.Employee(\"Mahesh\", 40, 800000, \"Mechanical\");\r\nemp4.officeEntered();\r\nemp4 = emp;\r\nEmployee_1.Employee.officeExit();\r\nconsole.log(\"Total employees entered into office : \" + Employee_1.Employee.count);\r\n// typechecking the json data\r\nvar emp5 = { \"name\": \"Mahesh\", \"age\": 40, \"salary\": 500000, \"designation\": \"SE\", \"address\": { \"streetname\": \"varthur\", \"city\": \"Bengalore\", \"pincode\": 560087, \"country\": \"india\" } };\r\nconsole.log(emp5);\r\n// loosly coupled\r\nvar cal1 = new calculator_1.Calculator();\r\nconsole.log(\"Addition result :: \" + cal1.add(20, 30));\r\nconsole.log(\"Multiplication result :: \" + cal1.multiply(20, 30));\r\n\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/calculator.ts":
/*!******************************!*\
  !*** ./src/ts/calculator.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// For abstract class, we cannot create Object\r\n// if we don't want to implement all the methods from interface into my implementation class, we shoud specity that implementation class as abstract\r\nvar Calculator = /** @class */ (function () {\r\n    function Calculator() {\r\n    }\r\n    Calculator.prototype.add = function (a, b) {\r\n        return a + b;\r\n    };\r\n    Calculator.prototype.multiply = function (a, b) {\r\n        return a * b;\r\n    };\r\n    return Calculator;\r\n}());\r\nexports.Calculator = Calculator;\r\n\n\n//# sourceURL=webpack:///./src/ts/calculator.ts?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/ts/app.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/ts/app.ts */\"./src/ts/app.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/ts/app.ts?");

/***/ })

/******/ });