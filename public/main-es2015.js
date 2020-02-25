(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center\">\n  <sidebar></sidebar>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/card-detail/card-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/card-detail/card-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-container\" (click)=\"onCardSelect($event)\">\n    <h4>{{title}}</h4>\n    <table *ngIf=\"card?.options\">\n        <!-- <app-row [rowKeys]=\"row\" [gameBoard]=\"gameBoard\"></app-row> -->\n        <tr  *ngFor=\"let row of ['2','1','0','-1','-2']\">\n                <td *ngFor=\"let tile of ['-2','-1','0','1','2']\" [class]=\"checkTileStyle(tile, row)\" ></td>\n        </tr>\n    </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-board/game-board.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-board/game-board.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <table *ngIf=\"gameBoard\" [ngClass]=\"player === 'red' ? 'board-rotated' : 'board'\">\n            <!-- <app-row [rowKeys]=\"row\" [gameBoard]=\"gameBoard\"></app-row> -->\n            <tr  *ngFor=\"let row of rowKeys\">\n                    <td  *ngFor=\"let tileKey of row\" (click)=\"updateSelected(tileKey)\" [ngClass]=\"getTileClass(tileKey)\">\n                        <div [ngClass]=\"getIconClass(tileKey)\">{{gameBoard[tileKey]}}</div>\n                    </td>\n            </tr>\n    </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-cards/game-cards.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-cards/game-cards.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h4>Red Cards</h4>\n    <div *ngIf=\"players?.red?.hand\">\n        <card-detail [class]=\"card === selected ? 'selected' : ''\" (cardClick)=\"selectCard('red', $event)\" *ngFor=\"let card of players.red.hand\"  [title]=\"card\" [card]=\"gameCards[card]\"></card-detail>\n    </div>\n    <h4>Table Card</h4>\n    <!-- <button disabled>{{tableCard}}</button> -->\n    <card-detail *ngIf=\"gameCards\" [title]=\"tableCard\" [card]=\"gameCards[tableCard]\"></card-detail>\n    <h4>Blue Cards</h4>\n    <div *ngIf=\"players?.blue?.hand\">\n        <card-detail [class]=\"card === selected ? 'selected' : ''\" (cardClick)=\"selectCard('blue', $event)\" *ngFor=\"let card of players.blue.hand\"  [title]=\"card\" [card]=\"gameCards[card]\"></card-detail>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-lobby/game-lobby.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-lobby/game-lobby.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h3>do I even need this page? Matchmaking seems like a higher priority</h3>\n    <button (click)=\"createNewGame()\">Create New Game</button>\n    <div *ngFor=\"let game of games\">\n        <a routerLink=\"{{'/game/' + game.id}}\" routerLinkActive=\"active\">{{game.id}}</a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-moves/game-moves.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-moves/game-moves.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n<h3>\n    game-moves go here\n</h3>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-status/game-status.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-status/game-status.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h3>Status: {{gameStatus}}</h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-view/game-view.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-view/game-view.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"game\">\n    <!-- ADD CSS -->\n    <app-game-status [gameStatus]=\"game?.gameStatus\"></app-game-status>\n    <div *ngIf=\"!game?.victor\">\n        <div *ngIf=\"getCurrentUser() === game?.turn_uid\">\n            <p>It's your turn!</p>\n            <div *ngIf=\"selectedCard && selectedPiece && selectedFrom && selectedDest\">\n                <p>{{\"Use \" +  selectedCard + \" on \" + selectedPiece + \" to move from \" + selectedFrom + \" to \" + selectedDest}} </p>\n                <button (click)=\"makeMove()\">Confirm Move</button>\n            </div>\n        </div>\n        <div *ngIf=\"getCurrentUser() !== game?.turn_uid\">\n            <p>It's your opponent's turn!</p>\n        </div>\n    </div>\n    <br>\n    <div style=\"display:inline-flex\">\n        <div [class]=\"getPlayer() === 'blue' ? 'rotated' : ''\" *ngIf=\"game?.players?.red?.hand\">\n            <card-detail [class]=\"card === selectedCard ? 'selected' : ''\" (cardClick)=\"updateSelectedCard('red', $event)\" *ngFor=\"let card of game.players.red.hand\"  [title]=\"card\" [card]=\"game.deck[card]\"></card-detail>\n        </div>\n        <app-game-board [player]=\"getPlayer()\" [gameCards]=\"game?.deck\"  [cardChoice]=\"selectedCard ? selectedCard : undefined\" (selectPiece)=\"updateSelectedPiece($event)\" (selectFrom)=\"updateSelectedFrom($event)\" (selectDest)=\"updateSelectedDest($event)\" (selectOption)=\"updateSelectedOption($event)\" [gameBoard]=\"game?.board\"></app-game-board>\n        <div [class]=\"getPlayer() === 'red' ? 'rotated' : ''\" *ngIf=\"game?.players?.blue?.hand\">\n            <card-detail [class]=\"card === selectedCard ? 'selected' : ''\" (cardClick)=\"updateSelectedCard('blue', $event)\" *ngFor=\"let card of game.players.blue.hand\"  [title]=\"card\" [card]=\"game.deck[card]\"></card-detail>\n        </div>\n    </div>\n    \n    <card-detail *ngIf=\"game?.tableCard\" [title]=\"game?.tableCard\" [card]=\"game?.deck[game.tableCard]\"></card-detail>\n    <!-- <br>\n    <app-game-cards (cardSelected)=\"updateSelectedCard($event)\" [currentPlayer]=\"getCurrentUser()\" [gameCards]=\"game?.deck\" [tableCard]=\"game?.tableCard\" [players]=\"game?.players\"></app-game-cards>\n    <br> -->\n    <!-- <app-game-moves></app-game-moves> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center\">\n    <h2>Omae Wa Mo Shinderu!</h2>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"left-nav\">\n    <div *ngIf=\"getUser() as user; else showLogin\">\n        <div *ngIf=\"user.displayName; else showLogin\">\n            <p>Hello {{ user.displayName }}!</p>\n            <button (click)=\"logout()\">Logout</button>\n        </div>\n    </div>\n    <ng-template #showLogin>\n        <p>Please login.</p>\n        <button (click)=\"login()\">Login with Google</button>\n    </ng-template>\n    <div class=\"links\">\n        <a routerLink=\"/\" routerLinkActive=\"active\">Landing</a>\n        <br>\n        <a routerLink=\"/lobby\" routerLinkActive=\"active\">Lobby</a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _game_game_lobby_game_lobby_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game-lobby/game-lobby.component */ "./src/app/game/game-lobby/game-lobby.component.ts");
/* harmony import */ var _game_game_view_game_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game-view/game-view.component */ "./src/app/game/game-view/game-view.component.ts");






//This is my case 
const routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
    {
        path: 'lobby',
        component: _game_game_lobby_game_lobby_component__WEBPACK_IMPORTED_MODULE_4__["GameLobbyComponent"]
    },
    {
        path: 'game/:gameId',
        component: _game_game_view_game_view_component__WEBPACK_IMPORTED_MODULE_5__["GameViewComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".float-right {\n    /* float: right; */\n    text-align:center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb2F0LXJpZ2h0IHtcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgdGV4dC1hbGlnbjpjZW50ZXJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'shinderu-ng';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _game_game_lobby_game_lobby_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game-lobby/game-lobby.component */ "./src/app/game/game-lobby/game-lobby.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/firebase-config */ "./src/environments/firebase-config.ts");
/* harmony import */ var _game_game_view_game_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/game-view/game-view.component */ "./src/app/game/game-view/game-view.component.ts");
/* harmony import */ var _game_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/game-board/game-board.component */ "./src/app/game/game-board/game-board.component.ts");
/* harmony import */ var _game_game_moves_game_moves_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game/game-moves/game-moves.component */ "./src/app/game/game-moves/game-moves.component.ts");
/* harmony import */ var _game_game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game/game-cards/game-cards.component */ "./src/app/game/game-cards/game-cards.component.ts");
/* harmony import */ var _game_game_status_game_status_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game/game-status/game-status.component */ "./src/app/game/game-status/game-status.component.ts");
/* harmony import */ var _service_games_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/games.service */ "./src/app/service/games.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _game_card_detail_card_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./game/card-detail/card-detail.component */ "./src/app/game/card-detail/card-detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
            _game_game_lobby_game_lobby_component__WEBPACK_IMPORTED_MODULE_7__["GameLobbyComponent"],
            _game_game_view_game_view_component__WEBPACK_IMPORTED_MODULE_12__["GameViewComponent"],
            _game_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_13__["GameBoardComponent"],
            _game_game_moves_game_moves_component__WEBPACK_IMPORTED_MODULE_14__["GameMovesComponent"],
            _game_game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_15__["GameCardsComponent"],
            _game_game_status_game_status_component__WEBPACK_IMPORTED_MODULE_16__["GameStatusComponent"],
            _game_card_detail_card_detail_component__WEBPACK_IMPORTED_MODULE_19__["CardDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_firebase_config__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
        ],
        providers: [_service_games_service__WEBPACK_IMPORTED_MODULE_17__["GamesService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/move.model.ts":
/*!***************************************!*\
  !*** ./src/app/classes/move.model.ts ***!
  \***************************************/
/*! exports provided: Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Move {
}


/***/ }),

/***/ "./src/app/game/card-detail/card-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/game/card-detail/card-detail.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n    padding: .5vh;\n    height: 1vw;\n    width: 1vw;\n}\n\ntd.option {\n    background-color: darkgreen;\n}\n\n.piece {\n    background-color: black;\n}\n\n.plain {\n    background-color: #c8d5bf;\n}\n\ntable {\n    display: inline-block;\n}\n\n/* .card-container {\n    border-style: solid;\n    border-color: black;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jYXJkLWRldGFpbC9jYXJkLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9jYXJkLWRldGFpbC9jYXJkLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xuICAgIHBhZGRpbmc6IC41dmg7XG4gICAgaGVpZ2h0OiAxdnc7XG4gICAgd2lkdGg6IDF2dztcbn1cblxudGQub3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG59XG5cbi5waWVjZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5wbGFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZDViZjtcbn1cblxudGFibGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogLmNhcmQtY29udGFpbmVyIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59ICovIl19 */");

/***/ }),

/***/ "./src/app/game/card-detail/card-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/game/card-detail/card-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: CardDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailComponent", function() { return CardDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardDetailComponent = class CardDetailComponent {
    constructor() {
        this.cardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    checkTileStyle(tile, row) {
        // console.log(tile, row)
        let color = "plain";
        Object.values(this.card.options).forEach(element => {
            // console.log(element)
            if (tile == element.x && row == element.y) {
                color = "option";
            }
            else if (tile == "0" && row == "0") {
                color = "piece";
            }
        });
        return color;
    }
    onCardSelect(event) {
        //todo: fix the card object type
        this.cardClick.emit(this.title);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardDetailComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardDetailComponent.prototype, "card", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardDetailComponent.prototype, "cardClick", void 0);
CardDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'card-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/card-detail/card-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-detail.component.css */ "./src/app/game/card-detail/card-detail.component.css")).default]
    })
], CardDetailComponent);



/***/ }),

/***/ "./src/app/game/game-board/game-board.component.css":
/*!**********************************************************!*\
  !*** ./src/app/game/game-board/game-board.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, tr, td {\n    /* border: 1px solid black; */\n    /* border-collapse: collapse; */\n    padding: 1vh;\n  }\n\n  td {\n    padding: 1vh;\n    height: 5vw;\n    width: 5vw;\n    background-color: #c8d5bf;\n  }\n\n  .board {\n    display: inline-table;\n    float: left;\n  }\n\n  .board-rotated {\n    display: inline-table;\n    /* float: left; */\n    transform: rotateZ(180deg);\n  }\n\n  .tile-blue-throne {\n    background-color: cornflowerblue;\n  }\n\n  .tile-red-throne {\n    background-color: lightcoral;\n  }\n\n  .tile-selected {\n    background-color: blueviolet;\n  }\n\n  .tile-option {\n    background-color: peachpuff;\n  }\n\n  .tile-destination {\n    background-color: orange;\n  }\n\n  .red-dot {\n    height: 100%;\n    width: 100%;\n    background-color: red;\n    color: white;\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  .blue-dot {\n    height: 100%;\n    width: 100%;\n    background-color: blue;\n    color: white;\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  .blue-senpai {\n    background-color: blue;\n    -webkit-clip-path: polygon(50% 0, 0 100%, 100% 100%);\n            clip-path: polygon(50% 0, 0 100%, 100% 100%);\n  }\n\n  .red-senpai {\n    background-color: red;\n    -webkit-clip-path: polygon(50% 0, 0 100%, 100% 100%);\n            clip-path: polygon(50% 0, 0 100%, 100% 100%);\n    transform: rotateZ(180deg);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixvREFBNEM7WUFBNUMsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG9EQUE0QztZQUE1Qyw0Q0FBNEM7SUFDNUMsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0ciwgdGQge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIC8qIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICovXG4gICAgcGFkZGluZzogMXZoO1xuICB9XG5cbiAgdGQge1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBoZWlnaHQ6IDV2dztcbiAgICB3aWR0aDogNXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGQ1YmY7XG4gIH1cbiAgLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmJvYXJkLXJvdGF0ZWQge1xuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcbiAgfVxuXG4gIC50aWxlLWJsdWUtdGhyb25lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgfVxuXG4gIC50aWxlLXJlZC10aHJvbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG4gIH1cblxuICAudGlsZS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgfVxuXG4gIC50aWxlLW9wdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xuICB9XG5cbiAgLnRpbGUtZGVzdGluYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gIC5yZWQtZG90IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmJsdWUtZG90IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5ibHVlLXNlbnBhaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDAgMTAwJSwgMTAwJSAxMDAlKTtcbiAgfVxuXG4gIC5yZWQtc2VucGFpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAwIDEwMCUsIDEwMCUgMTAwJSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/game/game-board/game-board.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/game/game-board/game-board.component.ts ***!
  \*********************************************************/
/*! exports provided: GameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoardComponent", function() { return GameBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameBoardComponent = class GameBoardComponent {
    constructor() {
        // TODO: refactor this addressing system here... and in cloud functions
        this.rowKeys = [
            ['a0', 'a1', 'a2', 'a3', 'a4'],
            ['b0', 'b1', 'b2', 'b3', 'b4'],
            ['c0', 'c1', 'c2', 'c3', 'c4'],
            ['d0', 'd1', 'd2', 'd3', 'd4'],
            ['e0', 'e1', 'e2', 'e3', 'e4'],
        ];
        this.letters = ["a", "b", "c", "d", "e"];
        this.selectPiece = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectFrom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectDest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectOption = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.optionSquares = {};
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.cardChoice && this.gameCards) {
            let card = this.gameCards[changes.cardChoice.currentValue];
            if (this.selectedPrimary) {
                this.updateOptions(this.selectedPrimary, card.options);
            }
        }
        if (changes.gameBoard) {
            this.optionSquares = {};
            this.selectedPrimary = undefined;
            this.selectedSecondary = undefined;
        }
    }
    updateOptions(tileKey, options) {
        this.optionSquares = {};
        Object.keys(options).forEach(element => {
            // console.log(element)
            //ignore out of bounds
            let option = options[element];
            let x = this.speculativeX(tileKey[0], option.y);
            let y = this.speculativeY(tileKey[1], option.x);
            if (x !== "invalid" && y !== "invalid") {
                let key = x + y;
                // console.log(x + y)
                var landing = this.gameBoard[key];
                console.log(landing);
                console.log("landing, ", key);
                if (landing[0] !== this.player[0]) {
                    this.optionSquares[key] = element;
                    console.log(key);
                }
            }
        });
        console.log(this.optionSquares);
    }
    speculativeX(fromX, xDiff) {
        let xi = this.letters.indexOf(fromX);
        xDiff *= this.player === 'blue' ? -1 : 1;
        let newXi = xi + parseInt(xDiff);
        if (newXi < 0 || newXi > 4) {
            return "invalid";
        }
        return this.letters[newXi];
    }
    speculativeY(fromY, yDiff) {
        yDiff *= this.player === 'red' ? -1 : 1;
        let toY = parseInt(fromY) + parseInt(yDiff);
        if (toY < 0 || toY > 4) {
            return "invalid";
        }
        return toY;
    }
    updateSelected(tileKey) {
        if (this.validateSelection(tileKey)) {
            if (tileKey != this.selectedPrimary && !this.optionSquares[tileKey]) {
                if (this.cardChoice) {
                    this.updateOptions(tileKey, this.gameCards[this.cardChoice].options);
                }
                this.selectedPrimary = tileKey;
                this.selectPiece.emit(this.gameBoard[tileKey]);
                this.selectFrom.emit(tileKey);
                this.selectedSecondary = "";
                this.selectDest.emit("");
            }
            else if (this.optionSquares[tileKey]) {
                this.selectedSecondary = tileKey;
                this.selectDest.emit(tileKey);
                this.selectOption.emit(this.optionSquares[tileKey]);
            }
            else {
                this.selectedPrimary = "";
                this.selectPiece.emit("");
                this.selectFrom.emit("");
                this.optionSquares = {};
                this.selectedSecondary = "";
                this.selectDest.emit("");
            }
        }
    }
    validateSelection(tileKey) {
        // logic here
        if (this.gameBoard[tileKey] != "" && this.gameBoard[tileKey][0] === this.player[0]) {
            return true;
        }
        if (this.optionSquares[tileKey]) {
            return true;
        }
        return false;
    }
    getTileClass(tileKey) {
        if (this.selectedPrimary === tileKey) {
            return 'tile-selected';
        }
        if (this.selectedSecondary === tileKey) {
            return 'tile-destination';
        }
        // if (this.cardChoice && this.selectedPrimary) {
        if (this.optionSquares[tileKey]) {
            return 'tile-option';
        }
        // }
        if (tileKey === 'a2') {
            return 'tile-red-throne';
        }
        if (tileKey === 'e2') {
            return 'tile-blue-throne';
        }
        return '';
    }
    getIconClass(tileKey) {
        if (this.gameBoard[tileKey]) {
            let css = "";
            if (this.gameBoard[tileKey][0] === 'r') {
                css += "red-";
            }
            else {
                css += "blue-";
            }
            if (this.gameBoard[tileKey][1] === '2') {
                css += "senpai";
            }
            else {
                css += "dot";
            }
            return css;
        }
        return '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameBoardComponent.prototype, "gameBoard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameBoardComponent.prototype, "cardChoice", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameBoardComponent.prototype, "gameCards", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameBoardComponent.prototype, "player", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GameBoardComponent.prototype, "selectPiece", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GameBoardComponent.prototype, "selectFrom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GameBoardComponent.prototype, "selectDest", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GameBoardComponent.prototype, "selectOption", void 0);
GameBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-board/game-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-board.component.css */ "./src/app/game/game-board/game-board.component.css")).default]
    })
], GameBoardComponent);



/***/ }),

/***/ "./src/app/game/game-cards/game-cards.component.css":
/*!**********************************************************!*\
  !*** ./src/app/game/game-cards/game-cards.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected {\n    color: purple;\n    font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLWNhcmRzL2dhbWUtY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUtY2FyZHMvZ2FtZS1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogcHVycGxlO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/game/game-cards/game-cards.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/game/game-cards/game-cards.component.ts ***!
  \*********************************************************/
/*! exports provided: GameCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCardsComponent", function() { return GameCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameCardsComponent = class GameCardsComponent {
    constructor() {
        this.selected = "";
        this.cardSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    selectCard(color, event) {
        console.log(color);
        if (this.players[color].uid === this.currentPlayer) {
            this.cardSelected.emit(event);
            this.selected = event;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameCardsComponent.prototype, "gameCards", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameCardsComponent.prototype, "tableCard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameCardsComponent.prototype, "players", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameCardsComponent.prototype, "currentPlayer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GameCardsComponent.prototype, "cardSelected", void 0);
GameCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-cards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-cards/game-cards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-cards.component.css */ "./src/app/game/game-cards/game-cards.component.css")).default]
    })
], GameCardsComponent);



/***/ }),

/***/ "./src/app/game/game-lobby/game-lobby.component.css":
/*!**********************************************************!*\
  !*** ./src/app/game/game-lobby/game-lobby.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS1sb2JieS9nYW1lLWxvYmJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/game/game-lobby/game-lobby.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/game/game-lobby/game-lobby.component.ts ***!
  \*********************************************************/
/*! exports provided: GameLobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLobbyComponent", function() { return GameLobbyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/games.service */ "./src/app/service/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GameLobbyComponent = class GameLobbyComponent {
    constructor(gamesService, router) {
        this.gamesService = gamesService;
        this.router = router;
        // this.games = db.collection('games').snapshotChanges();
        this.gamesService.getGames().subscribe(data => {
            this.games = data.map(e => {
                // console.log(e.payload.doc.id)
                return {
                    id: e.payload.doc.id,
                    game: e.payload.doc.data()
                };
            });
        });
    }
    createNewGame() {
        this.gamesService.createGame().subscribe(data => {
            this.router.navigateByUrl(`/game/${data.gameId}`);
        });
    }
};
GameLobbyComponent.ctorParameters = () => [
    { type: _service_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GameLobbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'game-lobby',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-lobby.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-lobby/game-lobby.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-lobby.component.css */ "./src/app/game/game-lobby/game-lobby.component.css")).default]
    })
], GameLobbyComponent);



/***/ }),

/***/ "./src/app/game/game-moves/game-moves.component.css":
/*!**********************************************************!*\
  !*** ./src/app/game/game-moves/game-moves.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS1tb3Zlcy9nYW1lLW1vdmVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/game/game-moves/game-moves.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/game/game-moves/game-moves.component.ts ***!
  \*********************************************************/
/*! exports provided: GameMovesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMovesComponent", function() { return GameMovesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameMovesComponent = class GameMovesComponent {
    constructor() { }
    ngOnInit() {
    }
};
GameMovesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-moves',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-moves.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-moves/game-moves.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-moves.component.css */ "./src/app/game/game-moves/game-moves.component.css")).default]
    })
], GameMovesComponent);



/***/ }),

/***/ "./src/app/game/game-status/game-status.component.css":
/*!************************************************************!*\
  !*** ./src/app/game/game-status/game-status.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS1zdGF0dXMvZ2FtZS1zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/game/game-status/game-status.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/game/game-status/game-status.component.ts ***!
  \***********************************************************/
/*! exports provided: GameStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStatusComponent", function() { return GameStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameStatusComponent = class GameStatusComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameStatusComponent.prototype, "gameStatus", void 0);
GameStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-status/game-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-status.component.css */ "./src/app/game/game-status/game-status.component.css")).default]
    })
], GameStatusComponent);



/***/ }),

/***/ "./src/app/game/game-view/game-view.component.css":
/*!********************************************************!*\
  !*** ./src/app/game/game-view/game-view.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected {\n    color: purple;\n    font-size: x-large;\n}\n\n.rotated {\n    transform: rotateZ(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLXZpZXcvZ2FtZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLXZpZXcvZ2FtZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4ucm90YXRlZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/game/game-view/game-view.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/game/game-view/game-view.component.ts ***!
  \*******************************************************/
/*! exports provided: GameViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameViewComponent", function() { return GameViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/games.service */ "./src/app/service/games.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_classes_move_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/move.model */ "./src/app/classes/move.model.ts");






let GameViewComponent = class GameViewComponent {
    constructor(gamesService, authService, route) {
        this.gamesService = gamesService;
        this.authService = authService;
        this.route = route;
    }
    ngOnInit() {
        this.gameId = this.route.snapshot.paramMap.get('gameId');
        this.gameObs = this.gamesService.getGame(this.gameId);
        this.gameObs.subscribe(res => {
            this.game = res;
        });
        this.selectedCard = undefined;
        this.selectedPiece = undefined;
        this.selectedFrom = undefined;
        this.selectedDest = undefined;
    }
    print() {
        console.log(this.game);
    }
    getCurrentUser() {
        return this.authService.getUserUid();
    }
    getPlayer() {
        // todo: get the actual player
        // console.log(this.authService.getUserUid());
        if (this.game.players && this.authService.getUserUid() != null) {
            if (this.game.players["red"].uid === this.authService.getUserUid()) {
                return 'red';
            }
            else if (this.game.players["blue"].uid === this.authService.getUserUid()) {
                return 'blue';
            }
        }
        return "spectator";
    }
    updateSelectedCard(color, event) {
        if (this.getPlayer() === color) {
            this.selectedCard = event;
        }
    }
    updateSelectedPiece(event) {
        this.selectedPiece = event;
    }
    updateSelectedFrom(event) {
        this.selectedFrom = event;
    }
    updateSelectedDest(event) {
        this.selectedDest = event;
    }
    updateSelectedOption(event) {
        this.selectedOption = event;
    }
    makeMove() {
        let move = new src_app_classes_move_model__WEBPACK_IMPORTED_MODULE_5__["Move"]();
        move.cardChoice = this.selectedCard;
        move.cardOption = this.selectedOption;
        move.gamePiece = this.selectedPiece;
        move.uid = this.getCurrentUser();
        this.gamesService.updatePlayerMove(move, this.gameId);
    }
};
GameViewComponent.ctorParameters = () => [
    { type: _service_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
GameViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game-view/game-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-view.component.css */ "./src/app/game/game-view/game-view.component.css")).default]
    })
], GameViewComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    login() {
        // console.log('login called');
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    }
    logout() {
        this.afAuth.auth.signOut();
    }
    getUserUid() {
        if (this.afAuth.auth.currentUser) {
            return this.afAuth.auth.currentUser.uid;
        }
        return null;
    }
    getCurrentUser() {
        return this.afAuth.auth.currentUser;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/games.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/games.service.ts ***!
  \******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");





let GamesService = class GamesService {
    constructor(http, firestore, authService) {
        this.http = http;
        this.firestore = firestore;
        this.authService = authService;
        this.createUrl = "https://us-central1-shinderu-707e1.cloudfunctions.net/createNewGame";
    }
    getGames() {
        return this.firestore.collection('games').snapshotChanges();
    }
    getGame(gameId) {
        let ref = this.firestore.doc('games/' + gameId);
        // console.log(ref);
        return ref.valueChanges();
    }
    updatePlayerMove(move, gameId) {
        this.firestore.doc('games/' + gameId + '/player_moves/' + move.uid).update(Object.assign({}, move));
    }
    createGame() {
        console.log(this.authService.getUserUid());
        return this.http.post(this.createUrl, { "id": this.authService.getUserUid() });
    }
};
GamesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
GamesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GamesService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left-nav {\n    /* float: left; */\n    border-right: black;\n    border-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQtbmF2IHtcbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgICBib3JkZXItcmlnaHQ6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogZG90dGVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");



let SidebarComponent = class SidebarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.name = this.authService.getUserUid();
        this.isLoggedIn = this.authService.getUserUid() !== null;
    }
    login() {
        // TODO: make the display change once the user logs in.
        this.authService.login();
    }
    logout() {
        this.authService.logout();
    }
    getUser() {
        return this.authService.getCurrentUser();
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/firebase-config.ts":
/*!*********************************************!*\
  !*** ./src/environments/firebase-config.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCHnJ2zQTZDr2VWMH3BCjF0OejXzADzi98",
        authDomain: "shinderu-707e1.firebaseapp.com",
        databaseURL: "https://shinderu-707e1.firebaseio.com",
        projectId: "shinderu-707e1",
        storageBucket: "shinderu-707e1.appspot.com",
        messagingSenderId: "24796963437",
        appId: "1:24796963437:web:190962d2b448e100269564"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shah.zafrani/Dev/shinderu/shinderu-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);