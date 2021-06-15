/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/bomb.js":
/*!*****************************!*\
  !*** ./src/scripts/bomb.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Bomb; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bomb = /*#__PURE__*/function () {
  function Bomb() {
    _classCallCheck(this, Bomb);

    this.bomb = document.getElementById("bomb");
  }

  _createClass(Bomb, [{
    key: "explode",
    value: function explode() {
      this.bomb.classList.toggle("exploded");
    }
  }]);

  return Bomb;
}();



/***/ }),

/***/ "./src/scripts/dino.js":
/*!*****************************!*\
  !*** ./src/scripts/dino.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dino = /*#__PURE__*/function () {
  function Dino() {
    _classCallCheck(this, Dino);

    this.dino = document.getElementById("dino");
  }

  _createClass(Dino, [{
    key: "jump",
    value: function jump() {
      var _this = this;

      this.dino.classList.add("jump-animation");
      setTimeout(function () {
        _this.dino.classList.remove("jump-animation");
      }, 300);
    }
  }]);

  return Dino;
}();

/* harmony default export */ __webpack_exports__["default"] = (Dino);

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/variables.scss */ "./src/styles/variables.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _bomb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bomb */ "./src/scripts/bomb.js");
/* harmony import */ var _dino__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dino */ "./src/scripts/dino.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.dino = new _dino__WEBPACK_IMPORTED_MODULE_3__.default();
    this.bomb = new _bomb__WEBPACK_IMPORTED_MODULE_2__.default();
    this.score = document.getElementById("score");
    this.highscore = document.getElementById("highscore");
    this.instruction = document.getElementById("instructions");
  }

  _createClass(Game, [{
    key: "play",
    value: function play() {
      var _this = this;

      if (document.getElementById("game-component").classList.contains("game-component")) {
        document.getElementById("game-component").classList.remove("game-component");
        document.getElementById("game-component").classList.add("play-game-component");
      }

      if (document.getElementById("bomb").classList.contains("exploded")) {
        document.getElementById("bomb").classList.remove("exploded");
        document.getElementById("bomb").classList.add("bomb");
      }

      var score = parseInt(this.score.innerText.split(":")[0]);
      var highscore = parseInt(this.highscore.innerText.split(":")[0]);
      var scoreInterval = setInterval(function () {
        _this.score.innerText = "".concat(score++, " : score");
        _this.instruction.innerText = " your score was ".concat(score - 1, "!\n you can do better :P \n play again?");
        _this.instruction.innerHTML = _this.instruction.innerHTML.replace("".concat(score - 1), "<span style=\"color: skyblue;\">".concat(score - 1, "</span>"));

        if (score > highscore) {
          _this.highscore.innerText = "".concat(highscore++, " : highscore");
          _this.instruction.innerText = " you beat your highscore!!! \n play again?";
        } // if (score == 10){
        //     let he = variables.bgspeed / 2
        // }

      }, 100);
      document.addEventListener("keypress", function (e) {
        if (e.code === 'Space' && !document.getElementById("dino").classList.contains('jump-animation')) {
          _this.dino.jump();
        }
      });
      var game = setInterval(function () {
        var dinoTop = parseInt(window.getComputedStyle(_this.dino.dino).getPropertyValue('top'));
        var dinoWidth = parseInt(window.getComputedStyle(_this.dino.dino).getPropertyValue('width'));
        var dinoLeft = parseInt(window.getComputedStyle(_this.dino.dino).getPropertyValue('left'));
        var bombLeft = parseInt(window.getComputedStyle(_this.bomb.bomb).getPropertyValue('left'));
        var bombtop = parseInt(window.getComputedStyle(_this.bomb.bomb).getPropertyValue('top'));

        if (bombLeft > dinoLeft && bombLeft < dinoLeft + dinoWidth - 100 && dinoTop > bombtop) {
          _this.lost();

          clearInterval(scoreInterval);
          clearInterval(game);
        }
      }, 10);
    }
  }, {
    key: "lost",
    value: function lost() {
      if (document.getElementById("game-component").classList.contains("play-game-component")) {
        document.getElementById("game-component").classList.remove("play-game-component");
        document.getElementById("game-component").classList.add("game-component");
        this.score.innerText = "0 : score";
        return true;
      } else {
        return false;
      } // this.instruction.innerText = `${this.score}`
      // this.score.innerText="0 : score";

    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/variables.scss":
/*!***********************************!*\
  !*** ./src/styles/variables.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_dino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/dino */ "./src/scripts/dino.js");



var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__.default();
var start = document.getElementById("start-button");

start.onclick = function () {
  return game.play();
};

document.addEventListener("keypress", function (e) {
  if (e.code === 'Enter') {
    game.play();
  }
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYm9tYi5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvZGluby5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJvbWIiLCJib21iIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIkRpbm8iLCJkaW5vIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkdhbWUiLCJzY29yZSIsImhpZ2hzY29yZSIsImluc3RydWN0aW9uIiwiY29udGFpbnMiLCJwYXJzZUludCIsImlubmVyVGV4dCIsInNwbGl0Iiwic2NvcmVJbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsImp1bXAiLCJnYW1lIiwiZGlub1RvcCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGlub1dpZHRoIiwiZGlub0xlZnQiLCJib21iTGVmdCIsImJvbWJ0b3AiLCJsb3N0IiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0Iiwib25jbGljayIsInBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxJO0FBQ2pCLGtCQUFhO0FBQUE7O0FBQ1QsU0FBS0MsSUFBTCxHQUFZQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWjtBQUNIOzs7O1dBRUQsbUJBQVM7QUFDTCxXQUFLRixJQUFMLENBQVVHLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLFVBQTNCO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUkNDLEk7QUFDRixrQkFBYTtBQUFBOztBQUNULFNBQUtDLElBQUwsR0FBWUwsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFDSDs7OztXQUVELGdCQUFNO0FBQUE7O0FBQ0gsV0FBS0ksSUFBTCxDQUFVSCxTQUFWLENBQW9CSSxHQUFwQixDQUF3QixnQkFBeEI7QUFDQUMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2IsYUFBSSxDQUFDRixJQUFMLENBQVVILFNBQVYsQ0FBb0JNLE1BQXBCLENBQTJCLGdCQUEzQjtBQUNILE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHRjs7Ozs7O0FBS0wsK0RBQWVKLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7O0lBR01LLEk7QUFDRixrQkFBYTtBQUFBOztBQUNULFNBQUtKLElBQUwsR0FBWSxJQUFJRCwwQ0FBSixFQUFaO0FBQ0EsU0FBS0wsSUFBTCxHQUFZLElBQUlELDBDQUFKLEVBQVo7QUFDQSxTQUFLWSxLQUFMLEdBQWFWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFiO0FBQ0EsU0FBS1UsU0FBTCxHQUFpQlgsUUFBUSxDQUFDQyxjQUFULENB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QUFPLEtBQVA7QUFDSCxPQVJDLENBVUY7QUFDQTs7QUFDSDs7Ozs7O0FBS0wsK0RBQWVOLElBQWYsRTs7Ozs7Ozs7Ozs7QUMzRkE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0EsSUFBSWdCLElBQUksR0FBRyxJQUFJaEIsa0RBQUosRUFBWDtBQUVBLElBQUkyQixLQUFLLEdBQUdwQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBWjs7QUFFQW1DLEtBQUssQ0FBQ0MsT0FBTixHQUFnQjtBQUFBLFNBQU1aLElBQUksQ0FBQ2EsSUFBTCxFQUFOO0FBQUEsQ0FBaEI7O0FBRUF0QyxRQUFRLENBQUNxQixnQkFBVCxDQUEwQixVQUExQixFQUFzQyxVQUFDQyxDQUFELEVBQU87QUFDekMsTUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsT0FBZixFQUF1QjtBQUNuQkUsUUFBSSxDQUFDYSxJQUFMO0FBQ0g7QUFDSixDQUpELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuYm9tYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9tYlwiKVxuICAgIH1cblxuICAgIGV4cGxvZGUoKXtcbiAgICAgICAgdGhpcy5ib21iLmNsYXNzTGlzdC50b2dnbGUoXCJleHBsb2RlZFwiKVxuICAgICAgICBcbiAgICB9XG59IiwiY2xhc3MgRGlubyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kaW5vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaW5vXCIpXG4gICAgfVxuXG4gICAganVtcCgpe1xuICAgICAgIHRoaXMuZGluby5jbGFzc0xpc3QuYWRkKFwianVtcC1hbmltYXRpb25cIikgXG4gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgIHRoaXMuZGluby5jbGFzc0xpc3QucmVtb3ZlKFwianVtcC1hbmltYXRpb25cIilcbiAgICAgICB9LCAzMDApO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERpbm9cblxuXG4iLCJcbmltcG9ydCB2YXJpYWJsZXMgZnJvbSBcIi4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEJvbWIgZnJvbSAnLi9ib21iJ1xuaW1wb3J0IERpbm8gZnJvbSAnLi9kaW5vJ1xuXG5cbmNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kaW5vID0gbmV3IERpbm8oKTtcbiAgICAgICAgdGhpcy5ib21iID0gbmV3IEJvbWIoKTtcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgICAgIHRoaXMuaGlnaHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoc2NvcmVcIik7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgICB9XG5cbiAgICBwbGF5KCl7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb21wb25lbnRcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FtZS1jb21wb25lbnRcIikpe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNvbXBvbmVudFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZ2FtZS1jb21wb25lbnRcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb21wb25lbnRcIikuY2xhc3NMaXN0LmFkZChcInBsYXktZ2FtZS1jb21wb25lbnRcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib21iXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImV4cGxvZGVkXCIpKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9tYlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwbG9kZWRcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9tYlwiKS5jbGFzc0xpc3QuYWRkKFwiYm9tYlwiKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzY29yZSA9IHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0LnNwbGl0KFwiOlwiKVswXSk7XG4gICAgICAgIGxldCBoaWdoc2NvcmUgPSBwYXJzZUludCh0aGlzLmhpZ2hzY29yZS5pbm5lclRleHQuc3BsaXQoXCI6XCIpWzBdKTtcblxuICAgICAgICBcbiAgICAgICAgbGV0IHNjb3JlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IGAke3Njb3JlKyt9IDogc2NvcmVgO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVjdGlvbi5pbm5lclRleHQgPSBgIHlvdXIgc2NvcmUgd2FzICR7c2NvcmUgLSAxfSFcXG4geW91IGNhbiBkbyBiZXR0ZXIgOlAgXFxuIHBsYXkgYWdhaW4/YDtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gdGhpcy5pbnN0cnVjdGlvbi5pbm5lckhUTUwucmVwbGFjZShgJHtzY29yZSAtIDF9YCwgYDxzcGFuIHN0eWxlPVwiY29sb3I6IHNreWJsdWU7XCI+JHtzY29yZSAtIDF9PC9zcGFuPmApO1xuXG4gICAgICAgICAgICBpZiAoc2NvcmUgPiBoaWdoc2NvcmUpe1xuICAgICAgICAgICAgICAgIHRoaXMuaGlnaHNjb3JlLmlubmVyVGV4dCA9IGAke2hpZ2hzY29yZSsrfSA6IGhpZ2hzY29yZWA7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0cnVjdGlvbi5pbm5lclRleHQgPSBgIHlvdSBiZWF0IHlvdXIgaGlnaHNjb3JlISEhIFxcbiBwbGF5IGFnYWluP2A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIChzY29yZSA9PSAxMCl7XG4gICAgICAgICAgICAvLyAgICAgbGV0IGhlID0gdmFyaWFibGVzLmJnc3BlZWQgLyAyXG4gICAgICAgICAgICAvLyB9XG5cblxuICAgICAgICB9LCAxMDApXG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlub1wiKS5jbGFzc0xpc3QuY29udGFpbnMoJ2p1bXAtYW5pbWF0aW9uJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpbm8uanVtcCgpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBnYW1lID0gc2V0SW50ZXJ2YWwoKCkgPT57XG4gICAgICAgICAgICBjb25zdCBkaW5vVG9wID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kaW5vLmRpbm8pLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpKVxuICAgICAgICAgICAgY29uc3QgZGlub1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kaW5vLmRpbm8pLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykpXG4gICAgICAgICAgICBjb25zdCBkaW5vTGVmdCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZGluby5kaW5vKS5nZXRQcm9wZXJ0eVZhbHVlKCdsZWZ0JykpXG4gICAgICAgICAgICBjb25zdCBib21iTGVmdCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuYm9tYi5ib21iKS5nZXRQcm9wZXJ0eVZhbHVlKCdsZWZ0JykpXG4gICAgICAgICAgICBjb25zdCBib21idG9wID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5ib21iLmJvbWIpLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChib21iTGVmdCA+IGRpbm9MZWZ0ICYmIGJvbWJMZWZ0IDwgKGRpbm9MZWZ0ICsgIGRpbm9XaWR0aCAtIDEwMCkgICYmIGRpbm9Ub3AgPiBib21idG9wICl7IFxuICAgICAgICAgICAgICAgIHRoaXMubG9zdCgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzY29yZUludGVydmFsKVxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0sIDEwKVxuICAgIH1cblxuXG4gICAgbG9zdCgpe1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNvbXBvbmVudFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGF5LWdhbWUtY29tcG9uZW50XCIpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY29tcG9uZW50XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5LWdhbWUtY29tcG9uZW50XCIpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY29tcG9uZW50XCIpLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWNvbXBvbmVudFwiKVxuICAgICAgICAgICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBcIjAgOiBzY29yZVwiO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5pbnN0cnVjdGlvbi5pbm5lclRleHQgPSBgJHt0aGlzLnNjb3JlfWBcbiAgICAgICAgLy8gdGhpcy5zY29yZS5pbm5lclRleHQ9XCIwIDogc2NvcmVcIjtcbiAgICB9XG4gXG5cbiBcbn1cbmV4cG9ydCBkZWZhdWx0IEdhbWUgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgRGlubyBmcm9tICcuL3NjcmlwdHMvZGlubydcbmxldCBnYW1lID0gbmV3IEdhbWUoKVxuXG5sZXQgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ1dHRvblwiKVxuXG5zdGFydC5vbmNsaWNrID0gKCkgPT4gZ2FtZS5wbGF5KCkgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicpe1xuICAgICAgICBnYW1lLnBsYXkoKVxuICAgIH1cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==