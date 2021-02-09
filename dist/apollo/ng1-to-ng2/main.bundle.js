/*! For license information please see main.bundle.js.LICENSE.txt */
(self.webpackChunkapplication_name=self.webpackChunkapplication_name||[]).push([["main"],{"./app/app-routees.config.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRoutesConfig\": () => (/* binding */ appRoutesConfig)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nappRoutesConfig.$inject = ['$stateProvider', '$uiRouterProvider'];\r\nfunction appRoutesConfig($stateProvider, $uiRouter) {\r\n    // $stateProvider.state({\r\n    //     name : 'todo-list',\r\n    //     url  : '/todo-list',\r\n    //     component : \"todoList\",\r\n    //     lazyLoad: function ($transition$) {\r\n    //         return $transition$\r\n    //             .injector()\r\n    //             .get('$ocLazyLoad')\r\n    //             .load('./todo/todo.module.bundle.js');\r\n    //       }\r\n    // });\r\n    $stateProvider.state({\r\n        name: 'todo-list',\r\n        url: '/todo-list',\r\n        component: \"todoList\",\r\n        lazyLoad: function ($transition$) {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var usersModule;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() */ \"webpack_container_remote_todo_todo_module\").then(__webpack_require__.t.bind(__webpack_require__, /*! todo/todo.module */ \"webpack/container/remote/todo/todo.module\", 23))];\r\n                        case 1:\r\n                            usersModule = _a.sent();\r\n                            return [2 /*return*/, $transition$\r\n                                    .injector()\r\n                                    .get('$ocLazyLoad')\r\n                                    .load({\r\n                                    name: 'todo.module'\r\n                                })];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n    });\r\n    $stateProvider.state({\r\n        name: 'users',\r\n        url: '/users',\r\n        component: 'users',\r\n        lazyLoad: function ($transition$) {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var usersModule;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() | users/users.module */ \"users/users.module\").then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ \"./app/users/users.module.ts\"))];\r\n                        case 1:\r\n                            usersModule = _a.sent();\r\n                            return [2 /*return*/, $transition$\r\n                                    .injector()\r\n                                    .get('$ocLazyLoad')\r\n                                    .load({\r\n                                    name: 'users.module'\r\n                                })];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n    });\r\n    if (false) {}\r\n}\r\n\n\n//# sourceURL=webpack://application-name/./app/app-routees.config.ts?")},"./app/app.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "appComponent": () => (/* binding */ appComponent)\n/* harmony export */ });\nvar AppComponent = /** @class */ (function () {\r\n    function AppComponent($http, $log) {\r\n        this.$http = $http;\r\n        this.name = \'Eyal Vardi\';\r\n    }\r\n    AppComponent.prototype.foo = function () {\r\n        this.name += \'!\';\r\n    };\r\n    return AppComponent;\r\n}());\r\nvar appComponent = {\r\n    controller: AppComponent,\r\n    template: "\\n    <div>\\n        <h3>AngularJS with Webpack</h3>\\n        <nav>\\n            <a ui-sref=\\"users\\" ui-sref-active=\\"active\\">Users</a> |\\n            <a ui-sref=\\"todo-list\\" ui-sref-active=\\"active\\">Todo List</a> |\\n        </nav>\\n        <hr>\\n        <div ui-view></div>\\n        \\n    </div>\\n    \x3c!--\\n    <test ng-click=\\"$ctrl.foo()\\"></test>\\n    <users></users>\\n    --\x3e\\n    \x3c!--<div>\\n        <h1> Hi {{$ctrl.name}}</h1>\\n        <button ng-click=\\"$ctrl.foo()\\">Click me</button>\\n        <bezeq-int msg=\\"by\\" ></bezeq-int>\\n        <todo-list></todo-list>\\n    </div>--\x3e\\n"\r\n};\r\n\n\n//# sourceURL=webpack://application-name/./app/app.component.ts?')},"./app/app.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "appModule": () => (/* binding */ appModule)\n/* harmony export */ });\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "webpack/sharing/consume/default/angular/angular?ba14");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angularjs */ "./node_modules/@uirouter/angularjs/lib-esm/index.js");\n/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! oclazyload */ "./node_modules/oclazyload/dist/ocLazyLoad.js");\n/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oclazyload__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");\n/* harmony import */ var _temp_bezeq_int_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./temp/bezeq-int.component */ "./app/temp/bezeq-int.component.ts");\n/* harmony import */ var _app_routees_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routees.config */ "./app/app-routees.config.ts");\n\r\n\r\n\r\n\r\n\r\n\r\n// import {TestModule} from "./test/test.module";\r\n// import { bundle} from \'ng-metadata/core\';\r\n// let test = bundle(TestModule);\r\nvar appModule = angular__WEBPACK_IMPORTED_MODULE_0__.module(\'app.module\', [\r\n    \'ui.router\',\r\n    \'oc.lazyLoad\',\r\n])\r\n    .config(_app_routees_config__WEBPACK_IMPORTED_MODULE_5__.appRoutesConfig)\r\n    .component(\'myApp\', _app_component__WEBPACK_IMPORTED_MODULE_3__.appComponent)\r\n    .component(\'bezeqInt\', _temp_bezeq_int_component__WEBPACK_IMPORTED_MODULE_4__.bezeqIntComponent);\r\n\n\n//# sourceURL=webpack://application-name/./app/app.module.ts?')},"./app/main.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "webpack/sharing/consume/default/angular/angular?ba14");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./app/app.module.ts");\n\r\n\r\nangular__WEBPACK_IMPORTED_MODULE_0__.bootstrap(document, [_app_module__WEBPACK_IMPORTED_MODULE_1__.appModule.name]);\r\n\n\n//# sourceURL=webpack://application-name/./app/main.ts?')},"./app/temp/bezeq-int.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bezeqIntComponent\": () => (/* binding */ bezeqIntComponent)\n/* harmony export */ });\nvar BezeqIntComponent = /** @class */ (function () {\r\n    function BezeqIntComponent() {\r\n        this.name = 'Eyal Vardi';\r\n    }\r\n    BezeqIntComponent.prototype.foo = function () {\r\n        this.name += '!';\r\n    };\r\n    return BezeqIntComponent;\r\n}());\r\nvar bezeqIntComponent = {\r\n    controller: BezeqIntComponent,\r\n    template: \"\\n    <div>\\n        <h3>Bezeq Int</h3>\\n    </div>\\n\"\r\n};\r\n\n\n//# sourceURL=webpack://application-name/./app/temp/bezeq-int.component.ts?")},"webpack/container/reference/todo":e=>{"use strict";e.exports=todo}},function(e){"use strict";var n;n=e.x,e.x=()=>{var r=n();return e.E("users/users.module"),r}},[["./app/main.ts","vendors-node_modules_uirouter_angularjs_lib-esm_index_js-node_modules_oclazyload_dist_ocLazyLoad_js","runtime","angular"]]]);