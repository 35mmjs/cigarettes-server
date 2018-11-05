(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]
                    }
                ])
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (CartPageModule);


/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page main-bg main-bg-3 cart-wrapper\">\n  <div class=\"cart-content\">\n    <div class=\"close\">\n      <ion-icon name=\"ios-close-circle-outline\" class=\"close-icon\" (click)=\"goBack()\"></ion-icon>\n    </div>\n    <img src=\"assets/icon/cart.png\" class=\"cart-title\">\n    <div class=\"cart-total\">\n      <div>全部商品</div>\n      <div>合计：<span class=\"cart-price\">￥{{totalAmount}}</span></div>\n    </div>\n    <div class=\"cart-opts\">\n      <div>\n        <div (click)=\"pay()\" class=\"cart-opts-btn cart-opts-btn-primary\">结 算</div>\n        (仅支持微信支付)\n      </div>\n      <div>\n        <div (click)=\"goBack()\" class=\"cart-opts-btn\">继续购买</div>\n        &nbsp;\n      </div>\n    </div>\n    <div class=\"cart-list-title\">\n      清单\n    </div>\n    <table class=\"cart-item-table\">\n      <thead>\n        <th></th>\n        <th>单价</th>\n        <th>梳理</th>\n        <th>金额</th>\n        <th>操作</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of items\">\n          <td>\n            <div class=\"product-info\">\n              <div><img src=\"{{item.image}}\"> </div>\n              <div class=\"product-title\">{{item.id}}</div>\n            </div>\n          </td>\n          <td>￥{{item.price}}</td>\n          <td>\n            <div>\n              <div class=\"cart-input\">\n                <div class=\"stepperInput\">\n                  <button class=\"button button--addOnLeft\" (click)=\"minus(item.id, 'packet')\">-</button>\n                  <input type=\"text\" value=\"{{item.packetNum}}\" class=\"input stepperInput__input\" disabled/>\n                  <button class=\"button button--addOnRight\" (click)=\"add(item.id, 'packet')\">+</button>\n                </div>\n                <div>包</div>\n              </div>\n              <div class=\"cart-input\">\n                <div class=\"stepperInput\">\n                  <button class=\"button button--addOnLeft\" (click)=\"minus(item.id, 'carton')\">-</button>\n                  <input type=\"text\" value=\"{{item.cartonNum}}\" class=\"input stepperInput__input\" disabled/>\n                  <button class=\"button button--addOnRight\" (click)=\"add(item.id, 'carton')\">+</button>\n                </div>\n                <div>条</div>\n              </div>\n            </div>\n          </td>\n          <td>￥{{item.total}}</td>\n          <td>\n            <div (click)=\"remove(item.id)\">删除</div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  display: flex;\n  color: #000;\n  overflow: auto;\n  font-size: 20px; }\n\n.main-bg {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n\n.main-bg-1 {\n  background-image: url('bg1.jpg'); }\n\n.main-bg-1-clean {\n  background-image: url('bg1_clean.jpg'); }\n\n.main-bg-2 {\n  background-image: url('bg2.jpg'); }\n\n.main-bg-3 {\n  background-image: url('bg3.jpg'); }\n\n.close {\n  height: 100px;\n  width: 100%; }\n\n.close-icon {\n  font-size: 66px;\n  float: right; }\n\n.stepperInput {\n  display: flex;\n  height: 40px;\n  line-height: 40px;\n  font-size: 24px; }\n\n.stepperInput__input {\n  border-left: 0;\n  border-right: 0;\n  width: 52px;\n  text-align: center; }\n\n.button {\n  cursor: pointer;\n  width: 43px;\n  font-size: 24px;\n  color: RGBA(75, 62, 39, 1);\n  background-color: RGBA(163, 139, 80, 1);\n  border: 1px solid RGBA(163, 139, 80, 1); }\n\n.button--addOnLeft {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.button--addOnRight {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.input {\n  background: transparent;\n  border: 1px solid RGBA(163, 139, 80, 1);\n  padding: 0 10px;\n  border-radius: 0;\n  box-shadow: none; }\n\n.cart-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.cart-content {\n  display: flex;\n  flex-direction: column;\n  margin-left: 80px;\n  margin-right: 140px; }\n\n.cart-title {\n  width: 340px;\n  margin-bottom: 40px; }\n\n.cart-total {\n  display: flex;\n  justify-content: space-between;\n  font-size: 26px; }\n\n.cart-price {\n  color: red;\n  font-size: 30px; }\n\n.cart-opts {\n  display: flex;\n  flex-direction: row-reverse;\n  margin: 10px 0; }\n\n.cart-opts > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-left: 20px; }\n\n.cart-opts .cart-opts-btn {\n    margin-top: 10px;\n    border-radius: 40px;\n    border: 1px solid RGBA(163, 139, 80, 1);\n    padding: 0 80px;\n    font-size: 36px; }\n\n.cart-opts .cart-opts-btn-primary {\n    background: RGBA(163, 139, 80, 1);\n    color: #000; }\n\n.cart-list-title {\n  border-bottom: 1px solid RGBA(163, 139, 80, 1); }\n\n.cart-item-table th {\n  height: 60px; }\n\n.cart-item-table tr {\n  border: 1px solid RGBA(163, 139, 80, 1); }\n\n.cart-item-table td {\n  text-align: center;\n  padding: 20px; }\n\n.product-info {\n  display: flex;\n  align-items: center; }\n\n.product-info .product-title {\n    font-size: 30px;\n    margin-left: 30px; }\n\n.product-info img {\n    height: 124px; }\n\n.cart-input {\n  display: flex;\n  margin: 15px 0;\n  align-items: center; }\n\n.cart-input .stepperInput {\n    margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugin.service */ "./src/app/plugin.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var _pay_pay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pay/pay.service */ "./src/app/pay/pay.service.ts");
/* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products/products.service */ "./src/app/products/products.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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







var CartPage = /** @class */ (function () {
    function CartPage(productService, cartService, payService, router, alertController, loadingController, pluginService) {
        this.productService = productService;
        this.cartService = cartService;
        this.payService = payService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.pluginService = pluginService;
        this.items = [];
        this.productMap = {};
        this.totalAmount = '0';
    }
    CartPage.prototype.ngOnInit = function () {
        this.productMap = this.productService.getProducts().reduce(function (prev, curr) {
            prev[curr.id] = curr;
            return prev;
        }, {});
        this.getItems();
        this.calcTotalAmout();
    };
    CartPage.prototype.getItems = function () {
        var _this = this;
        this.items = this.cartService.getItems().map(function (i) { return (__assign({}, i, { total: (_this.productMap[i.id].price * (i.packetNum + i.cartonNum * 10)).toFixed(2) }, _this.productMap[i.id])); });
    };
    CartPage.prototype.remove = function (id) {
        this.cartService.remove(id);
        this.getItems();
        this.calcTotalAmout();
    };
    CartPage.prototype.minus = function (id, type) {
        var idx = this.items.findIndex(function (i) { return id === i.id; });
        var item = this.items[idx];
        if (type === 'packet') {
            item.packetNum--;
            if (item.packetNum < 0) {
                item.packetNum = 0;
            }
        }
        if (type === 'carton') {
            item.cartonNum = item.cartonNum - 1;
            if (item.cartonNum < 0) {
                item.cartonNum = 0;
            }
        }
        item.total = this.calc(item);
        this.calcTotalAmout();
    };
    CartPage.prototype.add = function (id, type) {
        var idx = this.items.findIndex(function (i) { return id === i.id; });
        var item = this.items[idx];
        if (item.added) {
            return;
        }
        if (type === 'packet') {
            item.packetNum++;
        }
        if (type === 'carton') {
            item.cartonNum++;
        }
        item.total = this.calc(item);
        this.calcTotalAmout();
    };
    CartPage.prototype.calc = function (item) {
        return (item.price * (item.packetNum + item.cartonNum * 10)).toFixed(2);
    };
    CartPage.prototype.calcTotalAmout = function () {
        var totalAmount = 0;
        this.items.forEach(function (i) { return totalAmount += parseFloat(i.total); });
        this.totalAmount = totalAmount.toFixed(2);
    };
    CartPage.prototype.goBack = function () {
        this.router.navigate(['/p1']);
    };
    CartPage.prototype.pay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prepare, payRequest;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '正在准备支付...',
                        })];
                    case 1:
                        prepare = _a.sent();
                        prepare.present();
                        payRequest = {
                            'total_amount': this.totalAmount,
                            'goods_detail': this.items.map(function (item) { return ({
                                'goods_id': item.id,
                                'goods_name': item.id,
                                'price': item.price,
                                'sail_price': item.price,
                                'discountable_type': '0',
                                'quantity': '1',
                                'packetQuantity': item.packetNum,
                                'cartonQuantity': item.cartonNum,
                            }); }),
                        };
                        this.pluginService.StartPay(payRequest).then(function (res) {
                            prepare.dismiss();
                            if (res.success) {
                                try {
                                    _this.payService.setOrderInfo(JSON.parse(res.data));
                                    _this.router.navigate(['/pay']);
                                }
                                catch (_a) { }
                            }
                            else {
                                _this.presentAlert({
                                    header: '订单创建失败!',
                                    message: res.errorMessage,
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.presentAlert = function (_a) {
        var header = _a.header, message = _a.message;
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _b.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")],
        }),
        __metadata("design:paramtypes", [_products_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _pay_pay_service__WEBPACK_IMPORTED_MODULE_5__["PayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map