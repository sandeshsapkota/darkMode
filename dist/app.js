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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// document.onselectstart = function (e) {
//     e.preventDefault();
//     return false;
// };
var doc = document.documentElement;
var body = document.body;
var docHeight = doc.scrollHeight;
var docClientHeight = doc.clientHeight;
var isScrollClicked;
var lastMouseY;

var sectionArr = _toConsumableArray(document.querySelectorAll('section'));

var sideBarLinks = _toConsumableArray(document.querySelectorAll('.sidebar__link'));

window.addEventListener('scroll', function (e) {
  sectionArr.forEach(function (section, index) {
    var cords = section.getBoundingClientRect();
    var top = cords.top,
        bottom = cords.bottom,
        height = cords.height,
        y = cords.y;

    if (top < -height) {
      sideBarLinks[index].classList.remove('is--active');
    } else if (top > -height && top < 0) {
      sideBarLinks[index].classList.add('is--active');
    } else {
      sideBarLinks[index].classList.remove('is--active');
    }
  });
});
sideBarLinks.forEach(function (sideBarLink) {
  sideBarLink.addEventListener('click', function () {
    var currentLinkIndex = sideBarLinks.indexOf(this);
    var currentSection = sectionArr[currentLinkIndex];
    var cordsCurrentSection = currentSection.getBoundingClientRect();
    var currentY = window.scrollY;
    console.log(cordsCurrentSection.top + currentY);
    var scrollPoint = currentY + cordsCurrentSection.top + 8;
    window.scroll({
      top: scrollPoint,
      left: 0,
      behavior: 'smooth'
    });
  });
});
var headings = [].concat(_toConsumableArray(document.querySelectorAll('section h2')), _toConsumableArray(document.querySelectorAll('section b')));
var svgString = "<span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"viewBox=\"0 0 24 24\"><path d=\"M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z\"/></svg> <small class=\"tooltip\"></small></span>";
headings.forEach(function (heading) {
  var headingText = heading.textContent;
  heading.id = headingText.split(" ").join('-');
  heading.innerHTML = heading.textContent + svgString;
  var tooltip = heading.querySelector('.tooltip');
  tooltip.textContent = "Copy link to this section: ".concat(headingText);
  var svg = heading.querySelector('svg');
  svg.addEventListener('click', copyLink);
});
var cliBoardCopiedStr = "<span class=\"clipboard-message\">Copied to clipboard</span>";
document.body.insertAdjacentHTML('beforeend', cliBoardCopiedStr);

function copyLink() {
  try {
    console.log(window);
    var link = window.location.href + '#' + this.parentNode.parentNode.id;
    navigator.clipboard.writeText(link);
    console.log('successful');
    var clipBoardMessage = document.querySelector('.clipboard-message');
    clipBoardMessage.classList.add('clipboard-message--show');
    setTimeout(function () {
      clipBoardMessage.classList.remove('clipboard-message--show');
    }, 2000);
  } catch (e) {
    console.log('failed !');
  }
}

var darkMode = document.querySelector('.theme-toggle');
darkMode.addEventListener('click', darkify);

function darkify() {
  document.documentElement.classList.toggle('theme--night');
} //
// const scrollThumbWrapper = document.querySelector('.scroll-thumb-wrapper')
// const scrollThumb = document.querySelector('.scroll-thumb')
//
// function convertClientToTotal(input) {
//     return (((input / docClientHeight) * 100) * docHeight) / 100
// }
//
// function scrollPercent(e) {
//     const scrollPercent = (window.scrollY / (docHeight - docClientHeight)) * 100;
//     const sbHeight = (docClientHeight / docHeight) * docClientHeight;
//     const scrollPos = Math.abs(((scrollPercent * (docClientHeight - sbHeight)) / 100));
//
//     scrollThumb.style.top = scrollPos + 'px';
//     scrollThumb.style.height = sbHeight + 'px';
// }
//
// scrollPercent();
//
// window.addEventListener('mousedown', function (e) {
//     if (e.target.classList.contains('scroll-thumb', 'scroll-thumb-wrapper')) {
//         isScrollClicked = true;
//         lastMouseY = e.y;
//     }
// });
// window.addEventListener('mousemove', function (e) {
//     if (isScrollClicked) {
//         let currentMouseY = e.y;
//         let scrollDiff = e.y - lastMouseY;
//         const scrolledPixels = convertClientToTotal(scrollDiff);
//         window.scrollTo(0, window.scrollY + scrolledPixels);
//         lastMouseY = currentMouseY;
//         doc.style.cursor = '-webkit-grab'
//     } else {
//         doc.style.cursor = 'default';
//     }
// });
//
//
// window.addEventListener('mouseup', function (e) {
//     isScrollClicked = false;
//     if (isScrollClicked) {
//         window.scrollTo(0, e.y)
//     }
// });
//
// scrollThumbWrapper.addEventListener('click', function (e) {
//     if (e.target === scrollThumb) return;
//     window.scrollTo(0, convertClientToTotal(e.y))
// });
//
//
// window.addEventListener('scroll', function (e) {
//     scrollPercent();
// });

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\darkMode\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! E:\darkMode\src\sass\app.scss */"./src/sass/app.scss");


/***/ })

/******/ });