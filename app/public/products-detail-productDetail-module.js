(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-detail-productDetail-module"],{

/***/ "./src/app/products/detail/productDetail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/products/detail/productDetail.module.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _productDetail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productDetail.page */ "./src/app/products/detail/productDetail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _productDetail_page__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPage"]
                    }
                ])
            ],
            declarations: [_productDetail_page__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPage"]]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (ProductDetailPageModule);


/***/ }),

/***/ "./src/app/products/detail/productDetail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/products/detail/productDetail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page main-bg main-bg-1-clean\">\n  <div class=\"main-content\">\n    <div class=\"desc2\">\n      <div class=\"desc-title\">{{product.descTitle}}</div>\n      <div>{{product.desc}}</div>\n    </div>\n\n    <ion-slides pager=\"true\" autoplay=\"2000\" class=\"slides\" (ionSlideDidChange)=\"onSlideChange()\">\n      <ion-slide *ngFor=\"let slide of slides\">\n        <img src=\"{{slide.image}}\" class=\"slide-image\">\n      </ion-slide>\n    </ion-slides>\n\n    <div class=\"desc\">\n      <div class=\"desc-title\">{{slideDesc.title}}</div>\n      <div class=\"desc-content\">\n        {{slideDesc.desc}}\n      </div>\n    </div>\n\n    <div class=\"close\">\n      <ion-icon name=\"ios-close-circle-outline\" class=\"close-icon\" (click)=\"goBack()\"></ion-icon>\n    </div>\n\n    <div class=\"cart\">\n      <img src=\"{{product.image}}\" class=\"cart-image\">\n      <div class=\"cart-detail\">\n        <div class=\"cart-title\">{{product.id}}</div>\n        <div class=\"cart-detail-content\">\n          <div>\n            <div class=\"cart-label\">\n              单价：<span class=\"cart-price\"><span *ngIf=\"product.price > 0\">￥ {{product.price}}</span></span>\n            </div>\n          </div>\n          <div>\n            <div class=\"cart-input\">\n              <div>数量：</div>\n              <div class=\"stepperInput\">\n                <button class=\"button button--addOnLeft\" (click)=\"minus('packet')\">-</button>\n                <input type=\"text\" value=\"{{packetNum}}\" class=\"input stepperInput__input\" disabled/>\n                <button class=\"button button--addOnRight\" (click)=\"add('packet')\">+</button>\n              </div>\n              <div>包</div>\n            </div>\n            <div class=\"cart-input\">\n              <div style=\"visibility: hidden\">数量：</div>\n              <div class=\"stepperInput\">\n                <button class=\"button button--addOnLeft\" (click)=\"minus('carton')\">-</button>\n                <input type=\"text\" value=\"{{cartonNum}}\" class=\"input stepperInput__input\" disabled/>\n                <button class=\"button button--addOnRight\" (click)=\"add('carton')\">+</button>\n              </div>\n              <div>条</div>\n            </div>\n            <div>合计：<span class=\"cart-price cart-price-total\" *ngIf=\"total > 0\">￥{{total}}</span></div>\n          </div>\n        </div>\n        <div class=\"cart-opts\">\n          <div *ngIf=\"!added\" (click)=\"addToCart()\" class=\"cart-opts-btn\">添加到购物车</div>\n          <div *ngIf=\"added\" (click)=\"goToCart()\" class=\"cart-opts-btn\">去购物车结算</div>\n          <div *ngIf=\"added\" (click)=\"goBack()\" class=\"cart-opts-btn\">继续购买</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"desc2\">\n      <div class=\"desc-title\">{{product.descTitle}}</div>\n      <div>{{product.desc}}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/detail/productDetail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/products/detail/productDetail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  display: flex;\n  color: #000;\n  overflow: auto;\n  font-size: 20px; }\n\n.main-bg {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n\n.main-bg-1 {\n  background-image: url('bg1.jpg'); }\n\n.main-bg-1-clean {\n  background-image: url('bg1_clean.jpg'); }\n\n.main-bg-2 {\n  background-image: url('bg2.jpg'); }\n\n.main-bg-3 {\n  background-image: url('bg3.jpg'); }\n\n.close {\n  height: 100px;\n  width: 100%; }\n\n.close-icon {\n  font-size: 66px;\n  float: right; }\n\n.stepperInput {\n  display: flex;\n  height: 40px;\n  line-height: 40px;\n  font-size: 24px; }\n\n.stepperInput__input {\n  border-left: 0;\n  border-right: 0;\n  width: 52px;\n  text-align: center; }\n\n.button {\n  cursor: pointer;\n  width: 43px;\n  font-size: 24px;\n  color: RGBA(75, 62, 39, 1);\n  background-color: RGBA(163, 139, 80, 1);\n  border: 1px solid RGBA(163, 139, 80, 1); }\n\n.button--addOnLeft {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.button--addOnRight {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.input {\n  background: transparent;\n  border: 1px solid RGBA(163, 139, 80, 1);\n  padding: 0 10px;\n  border-radius: 0;\n  box-shadow: none; }\n\n.main-content {\n  margin-top: 454px;\n  margin-left: 100px;\n  margin-right: 100px;\n  height: 2157px;\n  width: 756px;\n  position: relative; }\n\n.slides {\n  height: 482px;\n  width: 100%;\n  margin-top: 54px; }\n\n.slide-image {\n  height: 100%; }\n\n.desc {\n  height: 264px;\n  width: 100%;\n  padding-top: 20px;\n  font-size: 24px;\n  display: flex;\n  flex-direction: column; }\n\n.cart {\n  height: 385px;\n  margin-bottom: 54px;\n  padding: 35px;\n  width: 100%;\n  border: 1px solid RGBA(163, 139, 80, 1);\n  border-radius: 10px;\n  display: flex; }\n\n.cart .cart-image {\n    width: 204px; }\n\n.cart .cart-detail {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    margin-left: 36px; }\n\n.cart .cart-detail .cart-title {\n      font-size: 49px; }\n\n.cart .cart-detail .cart-price {\n      font-size: 44px; }\n\n.cart .cart-detail .cart-price-total {\n      color: red; }\n\n.cart .cart-detail .cart-input {\n      display: flex;\n      margin-top: 20px;\n      margin-bottom: 10px;\n      line-height: 36px; }\n\n.cart .cart-detail .cart-input > .stepperInput {\n        margin: 0 10px 0 20px; }\n\n.cart .cart-detail-content {\n    flex: 1;\n    display: flex;\n    justify-content: space-between; }\n\n.cart .cart-opts {\n    display: flex;\n    flex-direction: row-reverse; }\n\n.cart .cart-opts-btn {\n    margin-top: 10px;\n    border-radius: 40px;\n    border: 1px solid RGBA(163, 139, 80, 1);\n    padding: 4px 40px;\n    font-size: 20px;\n    margin-left: 20px; }\n\n.desc2 {\n  width: 100%;\n  padding: 35px;\n  border: 1px solid RGBA(163, 139, 80, 1);\n  border-radius: 10px;\n  font-size: 24px; }\n\n.desc-title {\n  font-size: 40px;\n  text-align: center;\n  margin-bottom: 20px;\n  flex-shrink: 0; }\n\n.desc-content {\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/products/detail/productDetail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/products/detail/productDetail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cart/cart.service */ "./src/app/cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};






var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(service, activeRoute, router, location, cartService) {
        this.service = service;
        this.activeRoute = activeRoute;
        this.router = router;
        this.location = location;
        this.cartService = cartService;
        this.packetNum = 0;
        this.cartonNum = 0;
        this.total = '0';
        this.added = false;
        this.slideOpts = { slidesPerView: 'auto', effect: 'flip' };
        this.slideDesc = {
            title: '',
            desc: '',
        };
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        var routeParams = this.activeRoute.snapshot.params;
        this.product = this.service.getProduct(routeParams.id);
        this.slides = this.product.slides;
        this.added = false;
        this.onSlideChange();
        this.slideInstance.startAutoplay();
    };
    ProductDetailPage.prototype.onSlideChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slideInstance.getActiveIndex()];
                    case 1:
                        currentIndex = _a.sent();
                        this.slideDesc.title = this.slides[currentIndex].title;
                        this.slideDesc.desc = this.slides[currentIndex].desc;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailPage.prototype.minus = function (type) {
        if (this.added) {
            return;
        }
        if (type === 'packet') {
            this.packetNum--;
            if (this.packetNum < 0) {
                this.packetNum = 0;
            }
        }
        if (type === 'carton') {
            this.cartonNum = this.cartonNum - 1;
            if (this.cartonNum < 0) {
                this.cartonNum = 0;
            }
        }
        this.calc();
    };
    ProductDetailPage.prototype.add = function (type) {
        if (this.added) {
            return;
        }
        if (type === 'packet') {
            this.packetNum++;
        }
        if (type === 'carton') {
            this.cartonNum++;
        }
        this.calc();
    };
    ProductDetailPage.prototype.calc = function () {
        this.total = (this.product.price * (this.packetNum + this.cartonNum * 10)).toFixed(2);
    };
    ProductDetailPage.prototype.addToCart = function () {
        if (parseInt(this.total, 10) === 0) {
            return;
        }
        this.added = true;
        this.cartService.add({
            id: this.product.id,
            cartonNum: this.cartonNum,
            packetNum: this.packetNum,
        });
    };
    ProductDetailPage.prototype.goToCart = function () {
        this.router.navigate(['/cart']);
    };
    ProductDetailPage.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Slides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Slides"])
    ], ProductDetailPage.prototype, "slideInstance", void 0);
    ProductDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productDetail',
            template: __webpack_require__(/*! ./productDetail.page.html */ "./src/app/products/detail/productDetail.page.html"),
            styles: [__webpack_require__(/*! ./productDetail.page.scss */ "./src/app/products/detail/productDetail.page.scss")],
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-detail-productDetail-module.js.map