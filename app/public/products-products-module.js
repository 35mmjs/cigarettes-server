(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/list/p1.page.html":
/*!********************************************!*\
  !*** ./src/app/products/list/p1.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page main-bg main-bg-1\">\n  <div class=\"block-1\" (touchstart)=\"stopScroll('b1')\">\n    <img *ngFor=\"let pro of leisureProducts\" src=\"{{pro.image}}\" (click)=\"goToDetail(pro.id)\">\n  </div>\n\n  <div class=\"block-2\" (touchstart)=\"stopScroll('b2')\">\n    <img *ngFor=\"let pro of sunshineProducts\" src=\"{{pro.image}}\" (click)=\"goToDetail(pro.id)\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/list/p1.page.ts":
/*!******************************************!*\
  !*** ./src/app/products/list/p1.page.ts ***!
  \******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsPage = /** @class */ (function () {
    function ProductsPage(service, router) {
        this.service = service;
        this.router = router;
        this.scrollInterval = {};
        this.scrollTime = 50;
        this.scrollGap = 5;
        this.scrollDirection = {};
        this.scrollStatus = {};
        this.stopTimer = {};
    }
    ProductsPage.prototype.ngOnInit = function () {
        this.leisureProducts = this.service.getProducts().filter(function (p) { return p.category === 'leisure'; });
        this.sunshineProducts = this.service.getProducts().filter(function (p) { return p.category === 'sunshine'; });
        this.startVerticalScroll(document.getElementsByClassName('block-2')[0], 'b2');
        this.startVerticalScroll(document.getElementsByClassName('block-1')[0], 'b1');
    };
    ProductsPage.prototype.goToDetail = function (id) {
        this.router.navigate(["/products/" + id]);
    };
    ProductsPage.prototype.startVerticalScroll = function (element, id) {
        var _this = this;
        if (this.scrollInterval[id]) {
            clearInterval(this.scrollInterval[id]);
        }
        var height = element.clientHeight;
        var scrollHeight = element.scrollHeight;
        element.scrollTop = scrollHeight - height;
        // 如果高度相等，延迟半秒再试
        if (height === scrollHeight) {
            setTimeout(function () {
                _this.startVerticalScroll(element, id);
            }, 500);
            return;
        }
        this.scrollDirection[id] = 'top';
        this.scrollInterval[id] = setInterval(function () {
            if (_this.scrollStatus[id] && _this.scrollStatus[id] === 'stop') {
                return;
            }
            var scrollTop = element.scrollTop;
            if (_this.scrollDirection[id] === 'bottom' && scrollTop + height >= scrollHeight) {
                // this.scrollDirection[id] = 'top';
                element.scrollTop = 0;
                return;
            }
            if (_this.scrollDirection[id] === 'top' && scrollTop <= 0) {
                // this.scrollDirection[id] = 'bottom';
                element.scrollTop = scrollHeight - height;
                return;
            }
            if (_this.scrollDirection[id] === 'bottom') {
                scrollTop += _this.scrollGap;
            }
            else {
                scrollTop -= _this.scrollGap;
            }
            element.scrollTop = scrollTop;
        }, this.scrollTime);
    };
    ProductsPage.prototype.stopScroll = function (id) {
        var _this = this;
        this.scrollStatus[id] = 'stop';
        if (this.stopTimer[id]) {
            clearTimeout(this.stopTimer[id]);
        }
        this.stopTimer[id] = setTimeout(function () {
            _this.scrollStatus[id] = 'go';
        }, 5000);
    };
    ProductsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-p1',
            template: __webpack_require__(/*! ./p1.page.html */ "./src/app/products/list/p1.page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/products/list/page.scss")],
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ }),

/***/ "./src/app/products/list/p2.page.html":
/*!********************************************!*\
  !*** ./src/app/products/list/p2.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page main-bg main-bg-2\">\n  <div class=\"block-3\" (touchstart)=\"stopScroll('b3')\">\n    <img *ngFor=\"let pro of products\" src=\"{{pro.image}}\" (click)=\"goToDetail(pro.id)\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/list/p2.page.ts":
/*!******************************************!*\
  !*** ./src/app/products/list/p2.page.ts ***!
  \******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsPage = /** @class */ (function () {
    function ProductsPage(router, service) {
        this.router = router;
        this.service = service;
        this.scrollInterval = {};
        this.scrollTime = 50;
        this.scrollGap = 5;
        this.scrollDirection = 'top';
        this.scrollStatus = {};
        this.stopTimer = {};
    }
    ProductsPage.prototype.ngOnInit = function () {
        this.products = this.service.getProducts().filter(function (p) { return p.category === 'origin'; });
        this.startVerticalScroll(document.getElementsByClassName('block-3')[0], 'b3');
    };
    ProductsPage.prototype.goToDetail = function (id) {
        this.router.navigate(["/products/" + id]);
    };
    ProductsPage.prototype.startVerticalScroll = function (element, id) {
        var _this = this;
        if (this.scrollInterval[id]) {
            clearInterval(this.scrollInterval[id]);
        }
        var height = element.clientHeight;
        var scrollHeight = element.scrollHeight;
        element.scrollTop = scrollHeight - height;
        // 如果高度相等，延迟半秒再试
        if (height === scrollHeight) {
            setTimeout(function () {
                _this.startVerticalScroll(element, id);
            }, 500);
            return;
        }
        this.scrollInterval[id] = setInterval(function () {
            if (_this.scrollStatus[id] && _this.scrollStatus[id] === 'stop') {
                return;
            }
            var scrollTop = element.scrollTop;
            if (_this.scrollDirection === 'bottom' && scrollTop + height >= scrollHeight) {
                _this.scrollDirection = 'top';
            }
            if (_this.scrollDirection === 'top' && scrollTop <= 0) {
                // this.scrollDirection = 'bottom';
                element.scrollTop = scrollHeight - height;
                return;
            }
            if (_this.scrollDirection === 'bottom') {
                scrollTop += _this.scrollGap;
            }
            else {
                scrollTop -= _this.scrollGap;
            }
            element.scrollTop = scrollTop;
        }, this.scrollTime);
    };
    ProductsPage.prototype.stopScroll = function (id) {
        var _this = this;
        this.scrollStatus[id] = 'stop';
        if (this.stopTimer[id]) {
            clearTimeout(this.stopTimer[id]);
        }
        this.stopTimer[id] = setTimeout(function () {
            _this.scrollStatus[id] = 'go';
        }, 5000);
    };
    ProductsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-p2',
            template: __webpack_require__(/*! ./p2.page.html */ "./src/app/products/list/p2.page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/products/list/page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ }),

/***/ "./src/app/products/list/page.scss":
/*!*****************************************!*\
  !*** ./src/app/products/list/page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  display: flex;\n  color: #000;\n  overflow: auto;\n  font-size: 20px; }\n\n.main-bg {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n\n.main-bg-1 {\n  background-image: url('bg1.jpg'); }\n\n.main-bg-1-clean {\n  background-image: url('bg1_clean.jpg'); }\n\n.main-bg-2 {\n  background-image: url('bg2.jpg'); }\n\n.main-bg-3 {\n  background-image: url('bg3.jpg'); }\n\n.close {\n  height: 100px;\n  width: 100%; }\n\n.close-icon {\n  font-size: 66px;\n  float: right; }\n\n.stepperInput {\n  display: flex;\n  height: 40px;\n  line-height: 40px;\n  font-size: 24px; }\n\n.stepperInput__input {\n  border-left: 0;\n  border-right: 0;\n  width: 52px;\n  text-align: center; }\n\n.button {\n  cursor: pointer;\n  width: 43px;\n  font-size: 24px;\n  color: RGBA(75, 62, 39, 1);\n  background-color: RGBA(163, 139, 80, 1);\n  border: 1px solid RGBA(163, 139, 80, 1); }\n\n.button--addOnLeft {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.button--addOnRight {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.input {\n  background: transparent;\n  border: 1px solid RGBA(163, 139, 80, 1);\n  padding: 0 10px;\n  border-radius: 0;\n  box-shadow: none; }\n\n.block-1,\n.block-2,\n.block-3 {\n  position: absolute;\n  width: 33%;\n  height: 39%;\n  left: 10%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  overflow: auto;\n  padding-bottom: 2%; }\n\n.block-1 > img,\n  .block-2 > img,\n  .block-3 > img {\n    width: 54%;\n    margin-top: 22%; }\n\n.block-1 > img:first-child,\n    .block-2 > img:first-child,\n    .block-3 > img:first-child {\n      margin-top: 10%; }\n\n.block-1 {\n  top: 9.1%; }\n\n.block-2 {\n  bottom: 8.5%; }\n\n.block-3 {\n  top: 9.1%;\n  height: 82%; }\n\n.block-3 > img {\n    margin-top: 25%; }\n"

/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: P1, P2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P1", function() { return P1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P2", function() { return P2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_p1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/p1.page */ "./src/app/products/list/p1.page.ts");
/* harmony import */ var _list_p2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/p2.page */ "./src/app/products/list/p2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var P1 = /** @class */ (function () {
    function P1() {
    }
    P1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_p1_page__WEBPACK_IMPORTED_MODULE_5__["ProductsPage"]
                    }
                ])
            ],
            declarations: [_list_p1_page__WEBPACK_IMPORTED_MODULE_5__["ProductsPage"]]
        })
    ], P1);
    return P1;
}());

var P2 = /** @class */ (function () {
    function P2() {
    }
    P2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_p2_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
                    }
                ])
            ],
            declarations: [_list_p2_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
        })
    ], P2);
    return P2;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map