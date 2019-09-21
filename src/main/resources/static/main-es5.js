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

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-1 row\">\n    <div class=\"dashboard-menu col-2\">\n        <div class=\"dashboard-logo row\">\n  \n        </div>\n        <div class=\"dashboard-menu-items row\">\n         \n        <div class=\"menuitem container\" routerLink=\"details\" routerLinkActive=\"active-link\">\n          <i class=\"fa fa-shopping-cart\"></i><span class=\"menu-label\">Purchase Orders</span>\n        </div>\n        <div class=\"menuitem container\" routerLink=\"details\" routerLinkActive=\"active-link\">\n          <i class=\"fa fa-file-pdf-o\"></i><span class=\"menu-label\">Invoices</span>\n        </div>        \n        </div>\n    </div>\n    <div class=\"dashboard-content col\">\n        <div class=\"dashboard-header row\">\n            <div class=\"col-9\"></div>\n            <div class=\"col tm-ellipsis\" placement=\"bottom\">Welcome, Joshi</div>\n            <div class=\"col-1 sign-out\" tooltip=\"Sign-out\" placement=\"bottom\" containerClass=\"tm-tooltip\" (click)=\"logout()\"><i class=\"fa fa-power-off\"></i></div>\n        </div>\n        <div class=\"dashboard-content-area row\">\n          <router-outlet></router-outlet>\n        </div>\n    </div>   \n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-content row add-scroll\">\n    <div class=\"card col-12\">\n      <div class=\"card-body\">        \n        <div class=\"card-content\">\n            <div class=\"dashboard-contents row\">\n                <div class=\"card vim-card\" (click)=\"getPurchaseOrders('OPEN')\">\n                    <div class=\"card-body\" [ngClass]=\"{'active': activeCard=='OPEN'}\">\n                        <div class=\"row\">\n                            <i class=\"fa fa-shopping-cart col-2 vim-cd-title-icon\"></i>\n                            <h6 class=\"card-title vim-card-title col\">Open Purchase Orders</h6>\n                        </div>          \n                      <div class=\"vim-card-content\">\n                        <h2 class=\"vim-card-data\">{{po.open}}</h2>\n                      </div>                    \n                    </div>\n                </div>\n                <div class=\"card vim-card\" (click)=\"getPurchaseOrders('PAID')\">\n                    <div class=\"card-body\" [ngClass]=\"{'active': activeCard=='PAID'}\">\n                        <div class=\"row\">\n                            <i class=\"fa fa-shopping-cart col-2 vim-cd-title-icon\"></i>\n                            <h6 class=\"card-title vim-card-title col\">Paid Purchase Orders</h6>\n                        </div>          \n                      <div class=\"vim-card-content\">\n                        <h2 class=\"vim-card-data\">{{po.paid}}</h2>\n                      </div>                    \n                    </div>\n                </div>\n                <div class=\"card vim-card\" (click)=\"getPurchaseOrders('Last90Days')\">\n                    <div class=\"card-body\" [ngClass]=\"{'active': activeCard=='Last 90 Days'}\">\n                        <div class=\"row\">\n                            <i class=\"fa fa-shopping-cart col-2 vim-cd-title-icon\"></i>\n                            <h6 class=\"card-title vim-card-title col\">Last 90 days</h6>\n                        </div>          \n                      <div class=\"vim-card-content\">\n                        <h2 class=\"vim-card-data\">{{po.last90Days}}</h2>\n                      </div>                    \n                    </div>\n                </div>\n                <div class=\"card vim-card\" (click)=\"getPurchaseOrders('LastYear')\">\n                    <div class=\"card-body\" [ngClass]=\"{'active': activeCard=='Last Year'}\">\n                        <div class=\"row\">\n                            <i class=\"fa fa-shopping-cart col-2 vim-cd-title-icon\"></i>\n                            <h6 class=\"card-title vim-card-title col\">Last Year</h6>\n                        </div>          \n                      <div class=\"vim-card-content\">\n                        <h2 class=\"vim-card-data\">{{po.lastYear}}</h2>\n                      </div>                    \n                    </div>\n                </div>\n            </div>\n            <div class=\"po-details-records\">\n                <div class=\"accordion\" id=\"searchAccordian\">\n                    <div class=\"card\">\n                      <div class=\"card-header\" id=\"searchArea\">\n                        <h6 class=\"mb-0 row\" (click)=\"filterExpanded=!filterExpanded\" data-toggle=\"collapse\" data-target=\"#searchContent\">\n                          <button class=\"btn btn-link\" type=\"button\" \n                            aria-expanded=\"false\" aria-controls=\"searchContent\">\n                            Search {{activeCard | titlecase}} Purchase Orders\n                          </button>\n                          <div class=\"collapse-action\">\n                            <i *ngIf=\"!filterExpanded\" class=\"fa fa-chevron-down\"></i>\n                            <i *ngIf=\"filterExpanded\" class=\"fa fa-chevron-up\"></i>\n                          </div>\n                        </h6>\n                      </div>\n                      <div id=\"searchContent\" class=\"collapse\" aria-labelledby=\"searchArea\" data-parent=\"#searchAccordian\">\n                        <form>\n                          <div class=\"card-body\">\n                            <div class=\"row\">\n                              <label for=\"pDocNum\" class=\"col-sm-2 col-form-label\">PO Number</label>\n                              <input type=\"text\" class=\"form-control col-2\" (keyup.enter)=\"searchPOs()\" name=\"pDocNum\" [(ngModel)]=\"pDocNum\">\n                              <label for=\"vCode\" class=\"col-sm-2 col-form-label\">Vendor Code</label>\n                              <input type=\"text\" class=\"form-control col-2\" (keyup.enter)=\"searchPOs()\" name=\"vCode\" [(ngModel)]=\"vCode\">\n                              <button type=\"button\" id=\"btnSearchPOs\" (click)=\"searchPOs()\"\n                                class=\"form-control col-2 btn btn-primary btn-update slight-margin-left\">Search</button>\n                            </div>\n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                  </div>\n                <div class=\"po-details-table\">\n                    <div class=\"row action-bar\">\n                        <div class=\"col-2 action-button-bar\">\n                          <i class=\"fa fa-refresh refresh\" (click)=\"getPOs(true, 0, 'OPEN')\" tooltip=\"refresh\"></i>\n                          <i class=\"fa fa-download\" (click)=\"exportAsXLSX()\" tooltip=\"Export\"></i>\n                        </div>\n                        <div class=\"col filter-area\" *ngIf=\"filterApplied && (pDocNum!='' || vCode !='')\">\n                          <i class=\"fa fa-close clear-filter\" (click)=\"clearFilter()\"></i> Showing records of : PO : {{pDocNum}} and Vendor : {{vCode}}</div>\n                      </div>\n                    <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">PO Number</th>\n                            <th scope=\"col\">Vendor Code</th>\n                            <th scope=\"col\">Status</th>\n                            <th scope=\"col\">Requestor</th>\n                            <th scope=\"col\">Date</th>\n                            <th scope=\"col\">Actions</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngIf=\"page.totalElements == 0\">\n                                <td colspan=\"7\" style=\"text-align : center\">Oops..!!! There are no {{activeCard}} Purchase Orders.</td>\n                              </tr>                      \n                            <tr *ngFor=\"let invHeaderItem of invHeaderItems; index as i;\">\n                                <td>{{invHeaderItem.pDocNum}}</td>\n                                <td>{{invHeaderItem.vendorCode}}</td>\n                                <td>{{invHeaderItem.status}}</td>\n                                <td>Joshi</td>\n                                <td>{{invHeaderItem.documentDate | date:'medium'}}</td>\n                                <td>\n                                    <button role=\"button\" class=\"fa fa-eye\" tooltip=\"view\" (click)=\"invHeaderClick(invDetailsModal, invHeaderItem)\"></button>\n                                    <button role=\"button\" class=\"fa fa-edit\" tooltip=\"edit\" (click)=\"createInvoice(invHeaderItem)\"></button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"tm-pagination\" *ngIf=\"page.totalPages > 1\">\n                    <nav aria-label=\"...\">\n                      <ul class=\"pagination justify-content-end\">\n                        <li class=\"page-item\" [ngClass]=\"{disabled:page.number === 0}\">\n                          <a class=\"page-link\" (click)=\"setPage(page.number-1,false,true)\" tabindex=\"-1\">Previous</a>\n                        </li>\n                        <li class=\"page-item\" [ngClass]=\"{active:page.number === n}\" *ngFor=\"let n of pages\">\n                          <a class=\"page-link\" (click)=\"setPage(n,false, false)\">{{n+1}}</a>\n                        </li>\n                        <li class=\"page-item\" [ngClass]=\"{disabled:page.number === page.totalPages-1}\">\n                          <a class=\"page-link\" (click)=\"setPage(page.number+1,true, false)\">Next</a>\n                        </li>\n                      </ul>\n                    </nav>\n                  </div>\n            </div>\n      </div>\n      <ng-template #invDetailsModal>\n          <div class=\"modal-content\">\n              <!-- Modal Header -->\n              <div class=\"modal-header\">\n                <h6 class=\"modal-title\">Line Item Details</h6>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"umModal.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n          </div>\n          <div class=\"modal-body\">\n              <div class=\"item-details-records\">\n                  <div class=\"item-details-table row\">\n                      <table class=\"table\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">Item Id</th>\n                              <th scope=\"col\">Material Code</th>\n                              <th scope=\"col\">Plant Code</th>\n                              <th scope=\"col\">Order Unit</th>\n                              <th scope=\"col\">Net Value</th>\n                              <th scope=\"col\">Net Price</th>\n                              <th scope=\"col\">PO Quantity</th>\n                              <th scope=\"col\">Gross Value</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                              <tr *ngIf=\"page.totalElements == 0\">\n                                  <td colspan=\"7\" style=\"text-align : center\">Oops..!!! There are no open Purchase Orders.</td>\n                                </tr>                      \n                              <tr *ngFor=\"let lineItem of selInvoiceHeader.details; index as i;\">\n                                  <td>{{lineItem.itemId}}</td>\n                                  <td>{{lineItem.materialCode}}</td>\n                                  <td>{{lineItem.plantCode}}</td>\n                                  <td>{{lineItem.orderUnit}}</td>\n                                  <td>{{lineItem.netValue}}</td>\n                                  <td>{{lineItem.netPrice}}</td>\n                                  <td>{{lineItem.poQuantity}}</td>\n                                  <td>{{lineItem.grossValue}}</td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>                  \n              </div>\n          </div>\n      </ng-template>\n  </div>"

/***/ }),

/***/ "./src/app/_entities/page.ts":
/*!***********************************!*\
  !*** ./src/app/_entities/page.ts ***!
  \***********************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page() {
        //The number of elements in the page
        this.size = 0;
        //The total number of elements
        this.totalElements = 0;
        //The total number of pages
        this.totalPages = 0;
        //The current page number
        this.number = 0;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/_services/invoice-utils.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/invoice-utils.service.ts ***!
  \****************************************************/
/*! exports provided: InvoiceUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceUtilsService", function() { return InvoiceUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var InvoiceUtilsService = /** @class */ (function () {
    function InvoiceUtilsService(http) {
        this.http = http;
    }
    InvoiceUtilsService.prototype.getPurchaseOrders = function (pDocNum, vCode, pNo, status, pSize) {
        if (pNo === void 0) { pNo = 0; }
        if (status === void 0) { status = 'OPEN'; }
        if (pSize === void 0) { pSize = 5; }
        var qStr = "pDocNum=" + pDocNum + "&vCode=" + vCode + "&pNo=" + pNo + "&pSize=" + pSize + "&status=" + status;
        return this.http.get("http://joshikpf1ha1xv.opentext.net:8908/sso/api/poData");
    };
    InvoiceUtilsService.prototype.poMetadata = function () {
        return this.http.get("http://joshikpf1ha1xv.opentext.net:8908/sso/api/metadata");
    };
    InvoiceUtilsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InvoiceUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], InvoiceUtilsService);
    return InvoiceUtilsService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");





var routes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        children: [
            {
                path: 'details',
                component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"],
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sso-poc';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.settings-content {\n  background: white;\n  position: absolute;\n  width: 97%;\n}\n/**\n    Styling related to card body\n*/\n.card-body .card-content {\n  font-size: 13px;\n  padding-top: 15px;\n}\n.card-body .card-subtitle {\n  padding-left: 0px;\n  font-size: 13px;\n}\n.card-header {\n  padding: 0px 10px;\n}\n.card-header:hover {\n  cursor: pointer;\n  background: #ecf2f5;\n}\n/* ---------- End of card styling -------- */\n/**\n    Styles related to pagination \n*/\n.pagination {\n  margin: 20px 0px;\n}\n.pagination a {\n  color: #004695;\n}\n.page-item.disabled .page-link {\n  color: gray;\n}\n.page-item.active .page-link {\n  background-color: #004695;\n  border-color: #004695;\n  color: white;\n}\n.page-link:hover {\n  cursor: pointer;\n  background-color: #dee2e6;\n}\n/* ---------- End of pagination styling -------- */\n/** \n    Styles related to buttons\n*/\n.btn-link {\n  color: #004695;\n  padding-left: 5px;\n}\n.btn-update, .btn-cancel {\n  font-size: 13px;\n  float: right;\n}\n.btn-update {\n  background: #004695;\n}\n.btn-update:focus {\n  color: white;\n}\n.btn-cancel {\n  margin-right: 5px;\n}\n.btn-edit {\n  float: right;\n  text-align: right;\n  margin-top: -12px;\n  margin-right: -12px;\n}\n/* ---------- End of button styling -------- */\n/**\n    Styles related to action button bar for all table related stuff\n*/\n.action-button-bar {\n  text-align: left;\n  border-top: 1px solid #dee2e6;\n  padding-left: 5px;\n}\n.action-button-bar i {\n  padding: 10px;\n  cursor: pointer;\n}\n.action-button-bar i:hover {\n  background-color: #dee2e6;\n}\n.action-button-bar .refresh {\n  color: #009a64;\n}\n.action-button-bar .insert {\n  color: #004695;\n}\n.action-button-bar .last {\n  margin-right: 30px;\n}\n/* ---------- End of action button bar styling -------- */\n/** \n    fontawesome overriding styles \n*/\n.fa {\n  box-shadow: none;\n  border: 0;\n  font-size: 14px;\n}\n.fa:focus {\n  outline-width: 0;\n}\n.fa-exclamation-triangle {\n  color: red !important;\n}\n/* ---------- End of fontawesome styling -------- */\n/* \n    Form action styling\n*/\n.tm-invalid {\n  border-bottom: 2px solid red;\n}\n.mandatory {\n  color: red;\n  padding-left: 2px;\n}\n.user-check-valid {\n  position: absolute;\n  margin-top: -8%;\n  margin-left: 85%;\n  color: #009a64;\n}\n.user-check-invalid {\n  position: absolute;\n  margin-top: -8%;\n  margin-left: 85%;\n  color: red;\n}\ninput[type=checkbox] {\n  cursor: pointer;\n}\ninput[type=checkbox]:after {\n  content: \" \";\n  background-color: white;\n  display: inline-block;\n  visibility: visible;\n}\ninput[type=checkbox]:checked:after {\n  content: \"✔\";\n  font-size: 14px;\n}\n.form-control {\n  border-radius: 0px;\n  font-size: 13px;\n  border: 1px solid #e0e0e0;\n}\n.form-control:focus {\n  box-shadow: none;\n  border-bottom: 2px solid #004695;\n}\n.is-invalid, .is-invalid:focus {\n  box-shadow: none;\n  border: 1px solid #e0e0e0;\n  border-bottom: 2px solid red;\n}\n/* ---------- End of form control styling -------- */\n/* \n        Helper function \n*/\n.add-scroll {\n  float: left;\n  overflow-y: auto;\n  height: calc(90vh);\n}\n.no-outline:focus {\n  outline-width: 0px;\n}\n.slight-margin-left {\n  margin-left: 5px;\n}\n.margin-left-ten {\n  margin-left: 10px;\n}\n.collapse-action {\n  padding-top: 8px;\n  color: #004695;\n}\n.tm-tooltip {\n  font-size: 11px;\n}\n.float-right {\n  float: right;\n}\n.align-center {\n  text-align: center;\n}\n.modal-content, .modal-body {\n  font-family: \"trebuchet-ms\", \"Calibri\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  font-size: 14px;\n}\n.col-form-label {\n  font-size: 13px;\n}\n/* ---------- End of helper function styling -------- */\n/* styling related to filteration area */\n.filter-area {\n  padding-top: 9px;\n  text-align: right;\n  border-top: 1px solid #dee2e6;\n}\n.filter-area i {\n  color: red;\n}\n.clear-filter:hover {\n  cursor: pointer;\n  background-color: #dee2e6;\n}\n/* ---------- End of form filteration area styling -------- */\ntd {\n  font-size: 13px;\n}\n.fa-eye, .fa-trash, .fa-edit, .fa-download {\n  background-color: white;\n}\n.item-details-records, .po-details-records, .records {\n  margin: 16px;\n}\n.item-details-records .action-bar, .po-details-records .action-bar, .records .action-bar {\n  border-top: 0px;\n  border-bottom: 1px solid #dee2e6;\n}\n.item-details-records .action-button-bar, .po-details-records .action-button-bar, .records .action-button-bar {\n  border-top: 0px;\n}\n.item-details-records .item-details-table, .po-details-records .item-details-table, .records .item-details-table {\n  border: 1px solid #dee2e6;\n  margin-top: 2px;\n}\n.item-details-records .item-details-table thead th, .po-details-records .item-details-table thead th, .records .item-details-table thead th {\n  border-top: 0px;\n}\n.item-details-records .card, .po-details-records .card, .records .card {\n  border-bottom: 1px solid #dee2e6;\n}\n.padding-right-10 {\n  padding-right: 10px;\n}\n.padding-left-30 {\n  padding-left: 30px;\n}\n.container-1 {\n  height: calc(100vh);\n  font-size: 14px;\n  font-family: \"trebuchet ms\";\n}\n.container-1 .dashboard-menu {\n  background: #004695;\n  padding: 0px;\n}\n.container-1 .dashboard-menu .dashboard-logo {\n  height: 100px;\n}\n.container-1 .dashboard-menu .menuitem {\n  color: white;\n  padding: 10px;\n  cursor: pointer;\n}\n.container-1 .dashboard-menu .menuitem .menu-label {\n  color: white;\n  padding-left: 10px;\n}\n.container-1 .dashboard-content {\n  background: #edf2f5;\n  padding: 0px;\n}\n.container-1 .dashboard-content .dashboard-header {\n  background: white;\n  height: 50px;\n  padding-top: 15px;\n}\n.container-1 .dashboard-content .dashboard-content-area {\n  padding: 15px;\n}\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.active-link {\n  background: #033167;\n  box-shadow: none;\n  outline-color: #033167;\n}\n.active-link:focus {\n  outline-width: 0px;\n}\n.sign-out {\n  cursor: pointer;\n  color: red;\n}\n.tm-ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcam9zaGlrXFxEb2N1bWVudHNcXEtpcmFuXFxPVFxcUHJvamVjdHNcXFZJTVxcUG9ydGFsXFxTU09cXEFuZ3VsYXJcXHNzby1wb2Mvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvQzpcXFVzZXJzXFxqb3NoaWtcXERvY3VtZW50c1xcS2lyYW5cXE9UXFxQcm9qZWN0c1xcVklNXFxQb3J0YWxcXFNTT1xcQW5ndWxhclxcc3NvLXBvYy9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNPaEI7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FETEo7QUNPQTtFQUNJLGlCQVBXO0VBUVgsa0JBQUE7RUFDQSxVQUFBO0FESko7QUNPQTs7Q0FBQTtBQUlJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FETFI7QUNPSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRExSO0FDU0E7RUFDSSxpQkFBQTtBRE5KO0FDUUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QURMSjtBQ09BLDRDQUFBO0FBRUE7O0NBQUE7QUFHQTtFQUNJLGdCQUFBO0FETEo7QUNNSTtFQUNJLGNBOUNRO0FEMENoQjtBQ09BO0VBQ0ksV0FBQTtBREpKO0FDTUE7RUFDSSx5QkFyRFk7RUFzRFoscUJBdERZO0VBdURaLFlBbERXO0FEK0NmO0FDS0E7RUFDSSxlQUFBO0VBQ0EseUJBekRlO0FEdURuQjtBQ0lBLGtEQUFBO0FBR0E7O0NBQUE7QUFHQTtFQUNJLGNBcEVZO0VBcUVaLGlCQUFBO0FESEo7QUNNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FESEo7QUNLQTtFQUNJLG1CQTdFWTtBRDJFaEI7QUNJQTtFQUNJLFlBM0VXO0FEMEVmO0FDR0E7RUFDSSxpQkFBQTtBREFKO0FDR0E7RUFDSSxZ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RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FGNFNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnNldHRpbmdzLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTclO1xufVxuXG4vKipcbiAgICBTdHlsaW5nIHJlbGF0ZWQgdG8gY2FyZCBib2R5XG4qL1xuLmNhcmQtYm9keSAuY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jYXJkLWJvZHkgLmNhcmQtc3VidGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLmNhcmQtaGVhZGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZWNmMmY1O1xufVxuXG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBjYXJkIHN0eWxpbmcgLS0tLS0tLS0gKi9cbi8qKlxuICAgIFN0eWxlcyByZWxhdGVkIHRvIHBhZ2luYXRpb24gXG4qL1xuLnBhZ2luYXRpb24ge1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLnBhZ2luYXRpb24gYSB7XG4gIGNvbG9yOiAjMDA0Njk1O1xufVxuXG4ucGFnZS1pdGVtLmRpc2FibGVkIC5wYWdlLWxpbmsge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ2OTU7XG4gIGJvcmRlci1jb2xvcjogIzAwNDY5NTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnZS1saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xufVxuXG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBwYWdpbmF0aW9uIHN0eWxpbmcgLS0tLS0tLS0gKi9cbi8qKiBcbiAgICBTdHlsZXMgcmVsYXRlZCB0byBidXR0b25zXG4qL1xuLmJ0bi1saW5rIHtcbiAgY29sb3I6ICMwMDQ2OTU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uYnRuLXVwZGF0ZSwgLmJ0bi1jYW5jZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJ0bi11cGRhdGUge1xuICBiYWNrZ3JvdW5kOiAjMDA0Njk1O1xufVxuXG4uYnRuLXVwZGF0ZTpmb2N1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmJ0bi1lZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIG1hcmdpbi1yaWdodDogLTEycHg7XG59XG5cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGJ1dHRvbiBzdHlsaW5nIC0tLS0tLS0tICovXG4vKipcbiAgICBTdHlsZXMgcmVsYXRlZCB0byBhY3Rpb24gYnV0dG9uIGJhciBmb3IgYWxsIHRhYmxlIHJlbGF0ZWQgc3R1ZmZcbiovXG4uYWN0aW9uLWJ1dHRvbi1iYXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uYWN0aW9uLWJ1dHRvbi1iYXIgaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY3Rpb24tYnV0dG9uLWJhciBpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbn1cbi5hY3Rpb24tYnV0dG9uLWJhciAucmVmcmVzaCB7XG4gIGNvbG9yOiAjMDA5YTY0O1xufVxuLmFjdGlvbi1idXR0b24tYmFyIC5pbnNlcnQge1xuICBjb2xvcjogIzAwNDY5NTtcbn1cbi5hY3Rpb24tYnV0dG9uLWJhciAubGFzdCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLyogLS0tLS0tLS0tLSBFbmQgb2YgYWN0aW9uIGJ1dHRvbiBiYXIgc3R5bGluZyAtLS0tLS0tLSAqL1xuLyoqIFxuICAgIGZvbnRhd2Vzb21lIG92ZXJyaWRpbmcgc3R5bGVzIFxuKi9cbi5mYSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZmE6Zm9jdXMge1xuICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuXG4uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGZvbnRhd2Vzb21lIHN0eWxpbmcgLS0tLS0tLS0gKi9cbi8qIFxuICAgIEZvcm0gYWN0aW9uIHN0eWxpbmdcbiovXG4udG0taW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XG59XG5cbi5tYW5kYXRvcnkge1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLnVzZXItY2hlY2stdmFsaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC04JTtcbiAgbWFyZ2luLWxlZnQ6IDg1JTtcbiAgY29sb3I6ICMwMDlhNjQ7XG59XG5cbi51c2VyLWNoZWNrLWludmFsaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC04JTtcbiAgbWFyZ2luLWxlZnQ6IDg1JTtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKclFwiO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA0Njk1O1xufVxuXG4uaXMtaW52YWxpZCwgLmlzLWludmFsaWQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xufVxuXG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBmb3JtIGNvbnRyb2wgc3R5bGluZyAtLS0tLS0tLSAqL1xuLyogXG4gICAgICAgIEhlbHBlciBmdW5jdGlvbiBcbiovXG4uYWRkLXNjcm9sbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoOTB2aCk7XG59XG5cbi5uby1vdXRsaW5lOmZvY3VzIHtcbiAgb3V0bGluZS13aWR0aDogMHB4O1xufVxuXG4uc2xpZ2h0LW1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm1hcmdpbi1sZWZ0LXRlbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY29sbGFwc2UtYWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgY29sb3I6ICMwMDQ2OTU7XG59XG5cbi50bS10b29sdGlwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2RhbC1jb250ZW50LCAubW9kYWwtYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcInRyZWJ1Y2hldC1tc1wiLCBcIkNhbGlicmlcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb2wtZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLyogLS0tLS0tLS0tLSBFbmQgb2YgaGVscGVyIGZ1bmN0aW9uIHN0eWxpbmcgLS0tLS0tLS0gKi9cbi8qIHN0eWxpbmcgcmVsYXRlZCB0byBmaWx0ZXJhdGlvbiBhcmVhICovXG4uZmlsdGVyLWFyZWEge1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uZmlsdGVyLWFyZWEgaSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jbGVhci1maWx0ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XG59XG5cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGZvcm0gZmlsdGVyYXRpb24gYXJlYSBzdHlsaW5nIC0tLS0tLS0tICovXG50ZCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZhLWV5ZSwgLmZhLXRyYXNoLCAuZmEtZWRpdCwgLmZhLWRvd25sb2FkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pdGVtLWRldGFpbHMtcmVjb3JkcywgLnBvLWRldGFpbHMtcmVjb3JkcywgLnJlY29yZHMge1xuICBtYXJnaW46IDE2cHg7XG59XG4uaXRlbS1kZXRhaWxzLXJlY29yZHMgLmFjdGlvbi1iYXIsIC5wby1kZXRhaWxzLXJlY29yZHMgLmFjdGlvbi1iYXIsIC5yZWNvcmRzIC5hY3Rpb24tYmFyIHtcbiAgYm9yZGVyLXRvcDogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbi5pdGVtLWRldGFpbHMtcmVjb3JkcyAuYWN0aW9uLWJ1dHRvbi1iYXIsIC5wby1kZXRhaWxzLXJlY29yZHMgLmFjdGlvbi1idXR0b24tYmFyLCAucmVjb3JkcyAuYWN0aW9uLWJ1dHRvbi1iYXIge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG4uaXRlbS1kZXRhaWxzLXJlY29yZHMgLml0ZW0tZGV0YWlscy10YWJsZSwgLnBvLWRldGFpbHMtcmVjb3JkcyAuaXRlbS1kZXRhaWxzLXRhYmxlLCAucmVjb3JkcyAuaXRlbS1kZXRhaWxzLXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLml0ZW0tZGV0YWlscy1yZWNvcmRzIC5pdGVtLWRldGFpbHMtdGFibGUgdGhlYWQgdGgsIC5wby1kZXRhaWxzLXJlY29yZHMgLml0ZW0tZGV0YWlscy10YWJsZSB0aGVhZCB0aCwgLnJlY29yZHMgLml0ZW0tZGV0YWlscy10YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cbi5pdGVtLWRldGFpbHMtcmVjb3JkcyAuY2FyZCwgLnBvLWRldGFpbHMtcmVjb3JkcyAuY2FyZCwgLnJlY29yZHMgLmNhcmQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnBhZGRpbmctcmlnaHQtMTAge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGFkZGluZy1sZWZ0LTMwIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uY29udGFpbmVyLTEge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInRyZWJ1Y2hldCBtc1wiO1xufVxuLmNvbnRhaW5lci0xIC5kYXNoYm9hcmQtbWVudSB7XG4gIGJhY2tncm91bmQ6ICMwMDQ2OTU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jb250YWluZXItMSAuZGFzaGJvYXJkLW1lbnUgLmRhc2hib2FyZC1sb2dvIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5jb250YWluZXItMSAuZGFzaGJvYXJkLW1lbnUgLm1lbnVpdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLTEgLmRhc2hib2FyZC1tZW51IC5tZW51aXRlbSAubWVudS1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNvbnRhaW5lci0xIC5kYXNoYm9hcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNlZGYyZjU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jb250YWluZXItMSAuZGFzaGJvYXJkLWNvbnRlbnQgLmRhc2hib2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250YWluZXItMSAuZGFzaGJvYXJkLWNvbnRlbnQgLmRhc2hib2FyZC1jb250ZW50LWFyZWEge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gIGJhY2tncm91bmQ6ICMwMzMxNjc7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmUtY29sb3I6ICMwMzMxNjc7XG59XG5cbi5hY3RpdmUtbGluazpmb2N1cyB7XG4gIG91dGxpbmUtd2lkdGg6IDBweDtcbn1cblxuLnNpZ24tb3V0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4udG0tZWxsaXBzaXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwNDY5NTtcbiRyZWZyZXNoLWNvbG9yIDogIzAwOWE2NDtcbiRzZWNvbmRhcnktY29sb3I6ICAjZGVlMmU2O1xuJGRhbmdlci1jb2xvciA6IHJlZDtcbiRjdXN0b20tYm9yZGVyLWNvbG9yIDogI2UwZTBlMDtcbiR3aGl0ZS1jb2xvciA6IHdoaXRlO1xuXG4ucm93IHtcbiAgICBtYXJnaW4tbGVmdCA6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQgOiAwcHg7XG59XG4uc2V0dGluZ3MtY29udGVudCB7XG4gICAgYmFja2dyb3VuZCA6ICR3aGl0ZS1jb2xvcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDk3JTtcbn1cblxuLyoqXG4gICAgU3R5bGluZyByZWxhdGVkIHRvIGNhcmQgYm9keVxuKi9cbi5jYXJkLWJvZHkge1xuICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBmb250LXNpemUgOiAxM3B4O1xuICAgICAgICBwYWRkaW5nLXRvcCA6IDE1cHg7XG4gICAgfVxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZSA6IDEzcHg7XG4gICAgfVxufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmcgOiAwcHggMTBweDtcbn1cbi5jYXJkLWhlYWRlcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2VjZjJmNTtcbn1cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGNhcmQgc3R5bGluZyAtLS0tLS0tLSAqLyBcblxuLyoqXG4gICAgU3R5bGVzIHJlbGF0ZWQgdG8gcGFnaW5hdGlvbiBcbiovXG4ucGFnaW5hdGlvbiB7XG4gICAgbWFyZ2luIDogMjBweCAwcHg7XG4gICAgYXtcbiAgICAgICAgY29sb3IgOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB9XG59XG4ucGFnZS1pdGVtLmRpc2FibGVkIC5wYWdlLWxpbmt7XG4gICAgY29sb3I6IGdyYXk7XG59XG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5re1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGJvcmRlci1jb2xvciA6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGNvbG9yIDogJHdoaXRlLWNvbG9yO1xufVxuLnBhZ2UtbGluazpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBwYWdpbmF0aW9uIHN0eWxpbmcgLS0tLS0tLS0gKi8gXG5cblxuLyoqIFxuICAgIFN0eWxlcyByZWxhdGVkIHRvIGJ1dHRvbnNcbiovXG4uYnRuLWxpbmsge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBwYWRkaW5nLWxlZnQgOiA1cHg7XG59XG5cbi5idG4tdXBkYXRlLCAuYnRuLWNhbmNlbCB7XG4gICAgZm9udC1zaXplIDogMTNweDtcbiAgICBmbG9hdCA6IHJpZ2h0O1xufVxuLmJ0bi11cGRhdGUge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xufVxuLmJ0bi11cGRhdGU6Zm9jdXMge1xuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XG59XG4uYnRuLWNhbmNlbHtcbiAgICBtYXJnaW4tcmlnaHQgOiA1cHg7XG59XG5cbi5idG4tZWRpdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTEycHg7XG59XG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBidXR0b24gc3R5bGluZyAtLS0tLS0tLSAqLyBcblxuXG4vKipcbiAgICBTdHlsZXMgcmVsYXRlZCB0byBhY3Rpb24gYnV0dG9uIGJhciBmb3IgYWxsIHRhYmxlIHJlbGF0ZWQgc3R1ZmZcbiovXG5cbi5hY3Rpb24tYnV0dG9uLWJhciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBpOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjsgXG4gICAgfVxuXG4gICAgLnJlZnJlc2gge1xuICAgICAgICBjb2xvcjokcmVmcmVzaC1jb2xvcjtcbiAgICB9XG4gICAgLmluc2VydCB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB9XG4gICAgLmxhc3Qge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfVxufVxuLyogLS0tLS0tLS0tLSBFbmQgb2YgYWN0aW9uIGJ1dHRvbiBiYXIgc3R5bGluZyAtLS0tLS0tLSAqLyBcblxuLyoqIFxuICAgIGZvbnRhd2Vzb21lIG92ZXJyaWRpbmcgc3R5bGVzIFxuKi9cbi5mYSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZhOmZvY3VzIHtcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIHtcbiAgICBjb2xvciA6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBmb250YXdlc29tZSBzdHlsaW5nIC0tLS0tLS0tICovIFxuLyogXG4gICAgRm9ybSBhY3Rpb24gc3R5bGluZ1xuKi9cbi50bS1pbnZhbGlkIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhbmdlci1jb2xvcjtcbn1cbi5tYW5kYXRvcnkge1xuICAgIGNvbG9yIDogJGRhbmdlci1jb2xvcjtcbiAgICBwYWRkaW5nLWxlZnQgOiAycHg7XG59XG4udXNlci1jaGVjay12YWxpZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IC04JTtcbiAgICBtYXJnaW4tbGVmdDogODUlO1xuICAgIGNvbG9yIDogJHJlZnJlc2gtY29sb3I7XG59XG5cbi51c2VyLWNoZWNrLWludmFsaWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAtOCU7XG4gICAgbWFyZ2luLWxlZnQ6IDg1JTtcbiAgICBjb2xvciA6ICRkYW5nZXItY29sb3I7XG59XG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gfVxuXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmFmdGVyIHtcbiBjb250ZW50OiBcIiBcIjtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFwyNzE0XCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGZvbnQtc2l6ZSA6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGN1c3RvbS1ib3JkZXItY29sb3IgO1xufVxuLmZvcm0tY29udHJvbDpmb2N1c3tcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLmlzLWludmFsaWQsIC5pcy1pbnZhbGlkOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjdXN0b20tYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFuZ2VyLWNvbG9yO1xufVxuXG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBmb3JtIGNvbnRyb2wgc3R5bGluZyAtLS0tLS0tLSAqLyBcblxuLyogXG4gICAgICAgIEhlbHBlciBmdW5jdGlvbiBcbiovXG4uYWRkLXNjcm9sbCB7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogY2FsYyg5MHZoKTtcbn1cbi5uby1vdXRsaW5lOmZvY3Vze1xuICAgIG91dGxpbmUtd2lkdGg6IDBweDtcbn1cbi5zbGlnaHQtbWFyZ2luLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0IDogNXB4O1xufVxuLm1hcmdpbi1sZWZ0LXRlbntcbiAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XG59XG5cbi5jb2xsYXBzZS1hY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgY29sb3IgOiAkcHJpbWFyeS1jb2xvcjtcbn1cbi50bS10b29sdGlwIHtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG4uZmxvYXQtcmlnaHQge1xuICAgIGZsb2F0IDogcmlnaHQ7XG59XG4uYWxpZ24tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xufVxuLm1vZGFsLWNvbnRlbnQsIC5tb2RhbC1ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldC1tcycsJ0NhbGlicmknLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplIDogMTRweDtcbn1cbi5jb2wtZm9ybS1sYWJlbCB7XG4gICAgZm9udC1zaXplIDogMTNweDtcbn1cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGhlbHBlciBmdW5jdGlvbiBzdHlsaW5nIC0tLS0tLS0tICovIFxuXG4vKiBzdHlsaW5nIHJlbGF0ZWQgdG8gZmlsdGVyYXRpb24gYXJlYSAqL1xuLmZpbHRlci1hcmVhIHtcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGkge1xuICAgICAgICBjb2xvciA6ICRkYW5nZXItY29sb3I7XG4gICAgfVxufVxuLmNsZWFyLWZpbHRlcjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBmb3JtIGZpbHRlcmF0aW9uIGFyZWEgc3R5bGluZyAtLS0tLS0tLSAqLyBcblxudGQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5mYS1leWUsIC5mYS10cmFzaCwgLmZhLWVkaXQsIC5mYS1kb3dubG9hZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pdGVtLWRldGFpbHMtcmVjb3JkcywgLnBvLWRldGFpbHMtcmVjb3JkcywgLnJlY29yZHMge1xuICAgIG1hcmdpbiA6IDE2cHg7XG4gICAgLmFjdGlvbi1iYXIge1xuICAgICAgICBib3JkZXItdG9wIDogMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkICNkZWUyZTY7ICAgIFxuICAgIH1cbiAgICAuYWN0aW9uLWJ1dHRvbi1iYXIge1xuICAgICAgICBib3JkZXItdG9wIDogMHB4OyAgICAgICAgICAgIFxuICAgIH0gICAgXG4gICAgLml0ZW0tZGV0YWlscy10YWJsZXtcbiAgICAgICAgYm9yZGVyIDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIG1hcmdpbi10b3AgOiAycHg7XG4gICAgICAgIHRoZWFkIHRoIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AgOiAwcHg7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIH1cbn1cblxuLnBhZGRpbmctcmlnaHQtMTAge1xuICAgIHBhZGRpbmctcmlnaHQgOiAxMHB4O1xufVxuLnBhZGRpbmctbGVmdC0zMCB7XG4gICAgcGFkZGluZy1sZWZ0IDogMzBweDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwNDY5NTtcclxuJGNvbnRlbnQtY29sb3I6ICNlZGYyZjU7XHJcbkBpbXBvcnQgJy4uL2dsb2JhbCc7XHJcblxyXG4uY29udGFpbmVyLTEge1xyXG4gICAgaGVpZ2h0IDogY2FsYygxMDB2aCk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldCBtcyc7XHJcbiAgICAuZGFzaGJvYXJkLW1lbnUge1xyXG4gICAgICAgIGJhY2tncm91bmQgOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nIDogMHB4O1xyXG4gICAgICAgIC5kYXNoYm9hcmQtbG9nbyB7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudWl0ZW0ge1xyXG4gICAgICAgICAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nIDogMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yIDogcG9pbnRlcjtcclxuICAgICAgICAgICAgLm1lbnUtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhc2hib2FyZC1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kIDogJGNvbnRlbnQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZyA6IDBweDtcclxuICAgICAgICAuZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQgOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhc2hib2FyZC1jb250ZW50LWFyZWEge1xyXG4gICAgICAgICAgICBwYWRkaW5nIDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodCA6IDBweDtcclxufVxyXG4uYWN0aXZlLWxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogIzAzMzE2NztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiAjMDMzMTY3O1xyXG59XHJcbi5hY3RpdmUtbGluazpmb2N1c3tcclxuICAgIG91dGxpbmUtd2lkdGggOiAwcHg7XHJcbn1cclxuLnNpZ24tb3V0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yIDogcmVkO1xyXG59XHJcbi50bS1lbGxpcHNpcyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(cookieService) {
        this.cookieService = cookieService;
        this.MYSAPSSO2CookieValue = "AjExMDAgABRwb3J0YWw6QWRtaW5pc3RyYXRvcogAB2RlZmF1bHQBAAACAAMwMDADAANUMTIEAAwyMDE5MDkxOTA1MDQFAAQAAAAICgAA%2FwEFMIIBAQYJKoZIhvcNAQcCoIHzMIHwAgEBMQswCQYFKw4DAhoFADALBgkqhkiG9w0BBwExgdAwgc0CAQEwIjAdMQwwCgYDVQQDEwNUMTIxDTALBgNVBAsTBEoyRUUCAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE5MDkxOTA1MDQwMVowIwYJKoZIhvcNAQkEMRYEFM1oXR58vzjO50RqT0xqur%2FMjx85MAkGByqGSM44BAMELzAtAhQzB%2Fqi7zsV0OKOVCE7gj6UeIBV1QIVANSFFBH5SZi0F%2FAs%2FVgCEy5VpsF%2F";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.setCookie();
    };
    DashboardComponent.prototype.setCookie = function () {
        debugger;
        this.cookieService.set('MYSAPSSO2', this.MYSAPSSO2CookieValue, 10, "/", ".opentext.net");
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.settings-content {\n  background: white;\n  position: absolute;\n  width: 97%;\n}\n/**\n    Styling related to card body\n*/\n.card-body .card-content {\n  font-size: 13px;\n  padding-top: 15px;\n}\n.card-body .card-subtitle {\n  padding-left: 0px;\n  font-size: 13px;\n}\n.card-header {\n  padding: 0px 10px;\n}\n.card-header:hover {\n  cursor: pointer;\n  background: #ecf2f5;\n}\n/* ---------- End of card styling -------- */\n/**\n    Styles related to pagination \n*/\n.pagination {\n  margin: 20px 0px;\n}\n.pagination a {\n  color: #004695;\n}\n.page-item.disabled .page-link {\n  color: gray;\n}\n.page-item.active .page-link {\n  background-color: #004695;\n  border-color: #004695;\n  color: white;\n}\n.page-link:hover {\n  cursor: pointer;\n  background-color: #dee2e6;\n}\n/* ---------- End of pagination styling -------- */\n/** \n    Styles related to buttons\n*/\n.btn-link {\n  color: #004695;\n  padding-left: 5px;\n}\n.btn-update, .btn-cancel {\n  font-size: 13px;\n  float: right;\n}\n.btn-update {\n  background: #004695;\n}\n.btn-update:focus {\n  color: white;\n}\n.btn-cancel {\n  margin-right: 5px;\n}\n.btn-edit {\n  float: right;\n  text-align: right;\n  margin-top: -12px;\n  margin-right: -12px;\n}\n/* ---------- End of button styling -------- */\n/**\n    Styles related to action button bar for all table related stuff\n*/\n.action-button-bar {\n  text-align: left;\n  border-top: 1px solid #dee2e6;\n  padding-left: 5px;\n}\n.action-button-bar i {\n  padding: 10px;\n  cursor: pointer;\n}\n.action-button-bar i:hover {\n  background-color: #dee2e6;\n}\n.action-button-bar .refresh {\n  color: #009a64;\n}\n.action-button-bar .insert {\n  color: #004695;\n}\n.action-button-bar .last {\n  margin-right: 30px;\n}\n/* ---------- End of action button bar styling -------- */\n/** \n    fontawesome overriding styles \n*/\n.fa {\n  box-shadow: none;\n  border: 0;\n  font-size: 14px;\n}\n.fa:focus {\n  outline-width: 0;\n}\n.fa-exclamation-triangle {\n  color: red !important;\n}\n/* ---------- End of fontawesome styling -------- */\n/* \n    Form action styling\n*/\n.tm-invalid {\n  border-bottom: 2px solid red;\n}\n.mandatory {\n  color: red;\n  padding-left: 2px;\n}\n.user-check-valid {\n  position: absolute;\n  margin-top: -8%;\n  margin-left: 85%;\n  color: #009a64;\n}\n.user-check-invalid {\n  position: absolute;\n  margin-top: -8%;\n  margin-left: 85%;\n  color: red;\n}\ninput[type=checkbox] {\n  cursor: pointer;\n}\ninput[type=checkbox]:after {\n  content: \" \";\n  background-color: white;\n  display: inline-block;\n  visibility: visible;\n}\ninput[type=checkbox]:checked:after {\n  content: \"✔\";\n  font-size: 14px;\n}\n.form-control {\n  border-radius: 0px;\n  font-size: 13px;\n  border: 1px solid #e0e0e0;\n}\n.form-control:focus {\n  box-shadow: none;\n  border-bottom: 2px solid #004695;\n}\n.is-invalid, .is-invalid:focus {\n  box-shadow: none;\n  border: 1px solid #e0e0e0;\n  border-bottom: 2px solid red;\n}\n/* ---------- End of form control styling -------- */\n/* \n        Helper function \n*/\n.add-scroll {\n  float: left;\n  overflow-y: auto;\n  height: calc(90vh);\n}\n.no-outline:focus {\n  outline-width: 0px;\n}\n.slight-margin-left {\n  margin-left: 5px;\n}\n.margin-left-ten {\n  margin-left: 10px;\n}\n.collapse-action {\n  padding-top: 8px;\n  color: #004695;\n}\n.tm-tooltip {\n  font-size: 11px;\n}\n.float-right {\n  float: right;\n}\n.align-center {\n  text-align: center;\n}\n.modal-content, .modal-body {\n  font-family: \"trebuchet-ms\", \"Calibri\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  font-size: 14px;\n}\n.col-form-label {\n  font-size: 13px;\n}\n/* ---------- End of helper function styling -------- */\n/* styling related to filteration area */\n.filter-area {\n  padding-top: 9px;\n  text-align: right;\n  border-top: 1px solid #dee2e6;\n}\n.filter-area i {\n  color: red;\n}\n.clear-filter:hover {\n  cursor: pointer;\n  background-color: #dee2e6;\n}\n/* ---------- End of form filteration area styling -------- */\ntd {\n  font-size: 13px;\n}\n.fa-eye, .fa-trash, .fa-edit, .fa-download {\n  background-color: white;\n}\n.item-details-records, .po-details-records, .records {\n  margin: 16px;\n}\n.item-details-records .action-bar, .po-details-records .action-bar, .records .action-bar {\n  border-top: 0px;\n  border-bottom: 1px solid #dee2e6;\n}\n.item-details-records .action-button-bar, .po-details-records .action-button-bar, .records .action-button-bar {\n  border-top: 0px;\n}\n.item-details-records .item-details-table, .po-details-records .item-details-table, .records .item-details-table {\n  border: 1px solid #dee2e6;\n  margin-top: 2px;\n}\n.item-details-records .item-details-table thead th, .po-details-records .item-details-table thead th, .records .item-details-table thead th {\n  border-top: 0px;\n}\n.item-details-records .card, .po-details-records .card, .records .card {\n  border-bottom: 1px solid #dee2e6;\n}\n.padding-right-10 {\n  padding-right: 10px;\n}\n.padding-left-30 {\n  padding-left: 30px;\n}\n.vim-card {\n  margin: 1rem;\n  width: 15rem;\n  height: 10rem;\n  text-align: center;\n  background-color: white;\n}\n.vim-card :hover {\n  background-color: #bed3e8;\n  color: black;\n  cursor: pointer;\n}\n.vim-card .active {\n  background-color: #bed3e8;\n}\n.vim-card .vim-card-content {\n  margin: 2rem 0rem 0rem 0rem;\n}\n.vim-card .vim-card-data {\n  text-align: center;\n  color: #004695;\n}\n.vim-card .vim-card-title {\n  padding-left: 0px;\n  padding-right: 5px;\n  text-align: left;\n}\n.vim-cd-title-icon {\n  padding-top: 5px;\n}\n.item-details-records, .po-details-records {\n  margin: 16px;\n}\n.item-details-records .action-bar, .po-details-records .action-bar {\n  border-top: 0px;\n  border-bottom: 1px solid #dee2e6;\n}\n.item-details-records .action-button-bar, .po-details-records .action-button-bar {\n  border-top: 0px;\n}\n.item-details-records .item-details-table, .item-details-records .po-details-table, .po-details-records .item-details-table, .po-details-records .po-details-table {\n  border: 1px solid #dee2e6;\n  margin-top: 2px;\n}\n.item-details-records .item-details-table thead th, .item-details-records .po-details-table thead th, .po-details-records .item-details-table thead th, .po-details-records .po-details-table thead th {\n  border-top: 0px;\n}\n.item-details-records .card, .po-details-records .card {\n  border-bottom: 1px solid #dee2e6;\n}\n.card-title {\n  padding-left: 0px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZXRhaWxzL0M6XFxVc2Vyc1xcam9zaGlrXFxEb2N1bWVudHNcXEtpcmFuXFxPVFxcUHJvamVjdHNcXFZJTVxcUG9ydGFsXFxTU09cXEFuZ3VsYXJcXHNzby1wb2Mvc3JjXFxhcHBcXGRldGFpbHNcXGRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFpbHMvQzpcXFVzZXJzXFxqb3NoaWtcXERvY3VtZW50c1xcS2lyYW5cXE9UXFxQcm9qZWN0c1xcVklNXFxQb3J0YWxcXFNTT1xcQW5ndWxhclxcc3NvLXBvYy9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNPaEI7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FETEo7QUNPQTtFQUNJLGlCQVBXO0VBUVgsa0JBQUE7RUFDQSxVQUFBO0FESko7QUNPQTs7Q0FBQTtBQUlJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FETFI7QUNPSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRExSO0FDU0E7RUFDSSxpQkFBQTtBRE5KO0FDUUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QURMSjtBQ09BLDRDQUFBO0FBRUE7O0NBQUE7QUFHQTtFQUNJLGdCQUFBO0FETEo7QUNNSTtFQUNJLGNBOUNRO0FEMENoQjtBQ09BO0VBQ0ksV0FBQTtBREpKO0FDTUE7RUFDSSx5QkFyRFk7RUFzRFoscUJBdERZO0VBdURaLFlBbERXO0FEK0NmO0FDS0E7RUFDSSxlQUFBO0VBQ0EseUJBekRlO0FEdURuQjtBQ0lBLGtEQUFBO0FBR0E7O0NBQUE7QUFHQTtFQUNJLGNBcEVZO0VBcUVaLGlCQUFBO0FESEo7QUNNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FESEo7QUNLQTtFQUNJLG1CQTdFWTtBRDJFaEI7QUNJQTtFQUNJLFlBM0VXO0FEMEVmO0FDR0E7RUFDSSxpQkFBQTtBREFKO0FDR0E7RUFDSSxZQUFBO0VBQ0EsaUJB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QUZ5U0oiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5zZXR0aW5ncy1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk3JTtcbn1cblxuLyoqXG4gICAgU3R5bGluZyByZWxhdGVkIHRvIGNhcmQgYm9keVxuKi9cbi5jYXJkLWJvZHkgLmNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY2FyZC1ib2R5IC5jYXJkLXN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5jYXJkLWhlYWRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2VjZjJmNTtcbn1cblxuLyogLS0tLS0tLS0tLSBFbmQgb2YgY2FyZCBzdHlsaW5nIC0tLS0tLS0tICovXG4vKipcbiAgICBTdHlsZXMgcmVsYXRlZCB0byBwYWdpbmF0aW9uIFxuKi9cbi5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5wYWdpbmF0aW9uIGEge1xuICBjb2xvcjogIzAwNDY5NTtcbn1cblxuLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Njk1O1xuICBib3JkZXItY29sb3I6ICMwMDQ2OTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2UtbGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbn1cblxuLyogLS0tLS0tLS0tLSBFbmQgb2YgcGFnaW5hdGlvbiBzdHlsaW5nIC0tLS0tLS0tICovXG4vKiogXG4gICAgU3R5bGVzIHJlbGF0ZWQgdG8gYnV0dG9uc1xuKi9cbi5idG4tbGluayB7XG4gIGNvbG9yOiAjMDA0Njk1O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmJ0bi11cGRhdGUsIC5idG4tY2FuY2VsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idG4tdXBkYXRlIHtcbiAgYmFja2dyb3VuZDogIzAwNDY5NTtcbn1cblxuLmJ0bi11cGRhdGU6Zm9jdXMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5idG4tZWRpdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xufVxuXG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBidXR0b24gc3R5bGluZyAtLS0tLS0tLSAqL1xuLyoqXG4gICAgU3R5bGVzIHJlbGF0ZWQgdG8gYWN0aW9uIGJ1dHRvbiBiYXIgZm9yIGFsbCB0YWJsZSByZWxhdGVkIHN0dWZmXG4qL1xuLmFjdGlvbi1idXR0b24tYmFyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmFjdGlvbi1idXR0b24tYmFyIGkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWN0aW9uLWJ1dHRvbi1iYXIgaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XG59XG4uYWN0aW9uLWJ1dHRvbi1iYXIgLnJlZnJlc2gge1xuICBjb2xvcjogIzAwOWE2NDtcbn1cbi5hY3Rpb24tYnV0dG9uLWJhciAuaW5zZXJ0IHtcbiAgY29sb3I6ICMwMDQ2OTU7XG59XG4uYWN0aW9uLWJ1dHRvbi1iYXIgLmxhc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGFjdGlvbiBidXR0b24gYmFyIHN0eWxpbmcgLS0tLS0tLS0gKi9cbi8qKiBcbiAgICBmb250YXdlc29tZSBvdmVycmlkaW5nIHN0eWxlcyBcbiovXG4uZmEge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZhOmZvY3VzIHtcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cblxuLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBmb250YXdlc29tZSBzdHlsaW5nIC0tLS0tLS0tICovXG4vKiBcbiAgICBGb3JtIGFjdGlvbiBzdHlsaW5nXG4qL1xuLnRtLWludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xufVxuXG4ubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi51c2VyLWNoZWNrLXZhbGlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtOCU7XG4gIG1hcmdpbi1sZWZ0OiA4NSU7XG4gIGNvbG9yOiAjMDA5YTY0O1xufVxuXG4udXNlci1jaGVjay1pbnZhbGlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtOCU7XG4gIG1hcmdpbi1sZWZ0OiA4NSU7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOmFmdGVyIHtcbiAgY29udGVudDogXCLinJRcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNDY5NTtcbn1cblxuLmlzLWludmFsaWQsIC5pcy1pbnZhbGlkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbn1cblxuLyogLS0tLS0tLS0tLSBFbmQgb2YgZm9ybSBjb250cm9sIHN0eWxpbmcgLS0tLS0tLS0gKi9cbi8qIFxuICAgICAgICBIZWxwZXIgZnVuY3Rpb24gXG4qL1xuLmFkZC1zY3JvbGwge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDkwdmgpO1xufVxuXG4ubm8tb3V0bGluZTpmb2N1cyB7XG4gIG91dGxpbmUtd2lkdGg6IDBweDtcbn1cblxuLnNsaWdodC1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tYXJnaW4tbGVmdC10ZW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNvbGxhcHNlLWFjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGNvbG9yOiAjMDA0Njk1O1xufVxuXG4udG0tdG9vbHRpcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwtY29udGVudCwgLm1vZGFsLWJvZHkge1xuICBmb250LWZhbWlseTogXCJ0cmVidWNoZXQtbXNcIiwgXCJDYWxpYnJpXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29sLWZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGhlbHBlciBmdW5jdGlvbiBzdHlsaW5nIC0tLS0tLS0tICovXG4vKiBzdHlsaW5nIHJlbGF0ZWQgdG8gZmlsdGVyYXRpb24gYXJlYSAqL1xuLmZpbHRlci1hcmVhIHtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuLmZpbHRlci1hcmVhIGkge1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2xlYXItZmlsdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xufVxuXG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBmb3JtIGZpbHRlcmF0aW9uIGFyZWEgc3R5bGluZyAtLS0tLS0tLSAqL1xudGQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5mYS1leWUsIC5mYS10cmFzaCwgLmZhLWVkaXQsIC5mYS1kb3dubG9hZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaXRlbS1kZXRhaWxzLXJlY29yZHMsIC5wby1kZXRhaWxzLXJlY29yZHMsIC5yZWNvcmRzIHtcbiAgbWFyZ2luOiAxNnB4O1xufVxuLml0ZW0tZGV0YWlscy1yZWNvcmRzIC5hY3Rpb24tYmFyLCAucG8tZGV0YWlscy1yZWNvcmRzIC5hY3Rpb24tYmFyLCAucmVjb3JkcyAuYWN0aW9uLWJhciB7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uaXRlbS1kZXRhaWxzLXJlY29yZHMgLmFjdGlvbi1idXR0b24tYmFyLCAucG8tZGV0YWlscy1yZWNvcmRzIC5hY3Rpb24tYnV0dG9uLWJhciwgLnJlY29yZHMgLmFjdGlvbi1idXR0b24tYmFyIHtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuLml0ZW0tZGV0YWlscy1yZWNvcmRzIC5pdGVtLWRldGFpbHMtdGFibGUsIC5wby1kZXRhaWxzLXJlY29yZHMgLml0ZW0tZGV0YWlscy10YWJsZSwgLnJlY29yZHMgLml0ZW0tZGV0YWlscy10YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5pdGVtLWRldGFpbHMtcmVjb3JkcyAuaXRlbS1kZXRhaWxzLXRhYmxlIHRoZWFkIHRoLCAucG8tZGV0YWlscy1yZWNvcmRzIC5pdGVtLWRldGFpbHMtdGFibGUgdGhlYWQgdGgsIC5yZWNvcmRzIC5pdGVtLWRldGFpbHMtdGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG4uaXRlbS1kZXRhaWxzLXJlY29yZHMgLmNhcmQsIC5wby1kZXRhaWxzLXJlY29yZHMgLmNhcmQsIC5yZWNvcmRzIC5jYXJkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5wYWRkaW5nLXJpZ2h0LTEwIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnBhZGRpbmctbGVmdC0zMCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnZpbS1jYXJkIHtcbiAgbWFyZ2luOiAxcmVtO1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogMTByZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udmltLWNhcmQgOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlZDNlODtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udmltLWNhcmQgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWQzZTg7XG59XG4udmltLWNhcmQgLnZpbS1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW46IDJyZW0gMHJlbSAwcmVtIDByZW07XG59XG4udmltLWNhcmQgLnZpbS1jYXJkLWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDA0Njk1O1xufVxuLnZpbS1jYXJkIC52aW0tY2FyZC10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi52aW0tY2QtdGl0bGUtaWNvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5pdGVtLWRldGFpbHMtcmVjb3JkcywgLnBvLWRldGFpbHMtcmVjb3JkcyB7XG4gIG1hcmdpbjogMTZweDtcbn1cbi5pdGVtLWRldGFpbHMtcmVjb3JkcyAuYWN0aW9uLWJhciwgLnBvLWRldGFpbHMtcmVjb3JkcyAuYWN0aW9uLWJhciB7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uaXRlbS1kZXRhaWxzLXJlY29yZHMgLmFjdGlvbi1idXR0b24tYmFyLCAucG8tZGV0YWlscy1yZWNvcmRzIC5hY3Rpb24tYnV0dG9uLWJhciB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cbi5pdGVtLWRldGFpbHMtcmVjb3JkcyAuaXRlbS1kZXRhaWxzLXRhYmxlLCAuaXRlbS1kZXRhaWxzLXJlY29yZHMgLnBvLWRldGFpbHMtdGFibGUsIC5wby1kZXRhaWxzLXJlY29yZHMgLml0ZW0tZGV0YWlscy10YWJsZSwgLnBvLWRldGFpbHMtcmVjb3JkcyAucG8tZGV0YWlscy10YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5pdGVtLWRldGFpbHMtcmVjb3JkcyAuaXRlbS1kZXRhaWxzLXRhYmxlIHRoZWFkIHRoLCAuaXRlbS1kZXRhaWxzLXJlY29yZHMgLnBvLWRldGFpbHMtdGFibGUgdGhlYWQgdGgsIC5wby1kZXRhaWxzLXJlY29yZHMgLml0ZW0tZGV0YWlscy10YWJsZSB0aGVhZCB0aCwgLnBvLWRldGFpbHMtcmVjb3JkcyAucG8tZGV0YWlscy10YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cbi5pdGVtLWRldGFpbHMtcmVjb3JkcyAuY2FyZCwgLnBvLWRldGFpbHMtcmVjb3JkcyAuY2FyZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMDA0Njk1O1xuJHJlZnJlc2gtY29sb3IgOiAjMDA5YTY0O1xuJHNlY29uZGFyeS1jb2xvcjogICNkZWUyZTY7XG4kZGFuZ2VyLWNvbG9yIDogcmVkO1xuJGN1c3RvbS1ib3JkZXItY29sb3IgOiAjZTBlMGUwO1xuJHdoaXRlLWNvbG9yIDogd2hpdGU7XG5cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0IDogMHB4O1xuICAgIG1hcmdpbi1yaWdodCA6IDBweDtcbn1cbi5zZXR0aW5ncy1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kIDogJHdoaXRlLWNvbG9yO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTclO1xufVxuXG4vKipcbiAgICBTdHlsaW5nIHJlbGF0ZWQgdG8gY2FyZCBib2R5XG4qL1xuLmNhcmQtYm9keSB7XG4gICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZSA6IDEzcHg7XG4gICAgICAgIHBhZGRpbmctdG9wIDogMTVweDtcbiAgICB9XG4gICAgLmNhcmQtc3VidGl0bGUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgZm9udC1zaXplIDogMTNweDtcbiAgICB9XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZyA6IDBweCAxMHB4O1xufVxuLmNhcmQtaGVhZGVyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMmY1O1xufVxuLyogLS0tLS0tLS0tLSBFbmQgb2YgY2FyZCBzdHlsaW5nIC0tLS0tLS0tICovIFxuXG4vKipcbiAgICBTdHlsZXMgcmVsYXRlZCB0byBwYWdpbmF0aW9uIFxuKi9cbi5wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW4gOiAyMHB4IDBweDtcbiAgICBhe1xuICAgICAgICBjb2xvciA6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbn1cbi5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGlua3tcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmt7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgYm9yZGVyLWNvbG9yIDogJHByaW1hcnktY29sb3I7XG4gICAgY29sb3IgOiAkd2hpdGUtY29sb3I7XG59XG4ucGFnZS1saW5rOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbn1cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIHBhZ2luYXRpb24gc3R5bGluZyAtLS0tLS0tLSAqLyBcblxuXG4vKiogXG4gICAgU3R5bGVzIHJlbGF0ZWQgdG8gYnV0dG9uc1xuKi9cbi5idG4tbGluayB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmctbGVmdCA6IDVweDtcbn1cblxuLmJ0bi11cGRhdGUsIC5idG4tY2FuY2VsIHtcbiAgICBmb250LXNpemUgOiAxM3B4O1xuICAgIGZsb2F0IDogcmlnaHQ7XG59XG4uYnRuLXVwZGF0ZSB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG59XG4uYnRuLXVwZGF0ZTpmb2N1cyB7XG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcbn1cbi5idG4tY2FuY2Vse1xuICAgIG1hcmdpbi1yaWdodCA6IDVweDtcbn1cblxuLmJ0bi1lZGl0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbn1cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGJ1dHRvbiBzdHlsaW5nIC0tLS0tLS0tICovIFxuXG5cbi8qKlxuICAgIFN0eWxlcyByZWxhdGVkIHRvIGFjdGlvbiBidXR0b24gYmFyIGZvciBhbGwgdGFibGUgcmVsYXRlZCBzdHVmZlxuKi9cblxuLmFjdGlvbi1idXR0b24tYmFyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGkge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIGk6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yOyBcbiAgICB9XG5cbiAgICAucmVmcmVzaCB7XG4gICAgICAgIGNvbG9yOiRyZWZyZXNoLWNvbG9yO1xuICAgIH1cbiAgICAuaW5zZXJ0IHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAubGFzdCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG59XG4vKiAtLS0tLS0tLS0tIEVuZCBvZiBhY3Rpb24gYnV0dG9uIGJhciBzdHlsaW5nIC0tLS0tLS0tICovIFxuXG4vKiogXG4gICAgZm9udGF3ZXNvbWUgb3ZlcnJpZGluZyBzdHlsZXMgXG4qL1xuLmZhIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uZmE6Zm9jdXMge1xuICAgIG91dGxpbmUtd2lkdGg6IDA7XG59XG4uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUge1xuICAgIGNvbG9yIDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGZvbnRhd2Vzb21lIHN0eWxpbmcgLS0tLS0tLS0gKi8gXG4vKiBcbiAgICBGb3JtIGFjdGlvbiBzdHlsaW5nXG4qL1xuLnRtLWludmFsaWQge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFuZ2VyLWNvbG9yO1xufVxuLm1hbmRhdG9yeSB7XG4gICAgY29sb3IgOiAkZGFuZ2VyLWNvbG9yO1xuICAgIHBhZGRpbmctbGVmdCA6IDJweDtcbn1cbi51c2VyLWNoZWNrLXZhbGlkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTglO1xuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XG4gICAgY29sb3IgOiAkcmVmcmVzaC1jb2xvcjtcbn1cblxuLnVzZXItY2hlY2staW52YWxpZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IC04JTtcbiAgICBtYXJnaW4tbGVmdDogODUlO1xuICAgIGNvbG9yIDogJGRhbmdlci1jb2xvcjtcbn1cbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiB9XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106YWZ0ZXIge1xuIGNvbnRlbnQ6IFwiIFwiO1xuIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOmFmdGVyIHtcbiAgY29udGVudDogXCJcXDI3MTRcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgZm9udC1zaXplIDogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY3VzdG9tLWJvcmRlci1jb2xvciA7XG59XG4uZm9ybS1jb250cm9sOmZvY3Vze1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xufVxuXG4uaXMtaW52YWxpZCwgLmlzLWludmFsaWQ6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGN1c3RvbS1ib3JkZXItY29sb3I7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYW5nZXItY29sb3I7XG59XG5cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGZvcm0gY29udHJvbCBzdHlsaW5nIC0tLS0tLS0tICovIFxuXG4vKiBcbiAgICAgICAgSGVscGVyIGZ1bmN0aW9uIFxuKi9cbi5hZGQtc2Nyb2xsIHtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiBjYWxjKDkwdmgpO1xufVxuLm5vLW91dGxpbmU6Zm9jdXN7XG4gICAgb3V0bGluZS13aWR0aDogMHB4O1xufVxuLnNsaWdodC1tYXJnaW4tbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQgOiA1cHg7XG59XG4ubWFyZ2luLWxlZnQtdGVue1xuICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcbn1cblxuLmNvbGxhcHNlLWFjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBjb2xvciA6ICRwcmltYXJ5LWNvbG9yO1xufVxuLnRtLXRvb2x0aXAge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5mbG9hdC1yaWdodCB7XG4gICAgZmxvYXQgOiByaWdodDtcbn1cbi5hbGlnbi1jZW50ZXIge1xuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XG59XG4ubW9kYWwtY29udGVudCwgLm1vZGFsLWJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAndHJlYnVjaGV0LW1zJywnQ2FsaWJyaScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemUgOiAxNHB4O1xufVxuLmNvbC1mb3JtLWxhYmVsIHtcbiAgICBmb250LXNpemUgOiAxM3B4O1xufVxuLyogLS0tLS0tLS0tLSBFbmQgb2YgaGVscGVyIGZ1bmN0aW9uIHN0eWxpbmcgLS0tLS0tLS0gKi8gXG5cbi8qIHN0eWxpbmcgcmVsYXRlZCB0byBmaWx0ZXJhdGlvbiBhcmVhICovXG4uZmlsdGVyLWFyZWEge1xuICAgIHBhZGRpbmctdG9wOiA5cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgaSB7XG4gICAgICAgIGNvbG9yIDogJGRhbmdlci1jb2xvcjtcbiAgICB9XG59XG4uY2xlYXItZmlsdGVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbn1cbi8qIC0tLS0tLS0tLS0gRW5kIG9mIGZvcm0gZmlsdGVyYXRpb24gYXJlYSBzdHlsaW5nIC0tLS0tLS0tICovIFxuXG50ZCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmZhLWV5ZSwgLmZhLXRyYXNoLCAuZmEtZWRpdCwgLmZhLWRvd25sb2FkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLml0ZW0tZGV0YWlscy1yZWNvcmRzLCAucG8tZGV0YWlscy1yZWNvcmRzLCAucmVjb3JkcyB7XG4gICAgbWFyZ2luIDogMTZweDtcbiAgICAuYWN0aW9uLWJhciB7XG4gICAgICAgIGJvcmRlci10b3AgOiAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgI2RlZTJlNjsgICAgXG4gICAgfVxuICAgIC5hY3Rpb24tYnV0dG9uLWJhciB7XG4gICAgICAgIGJvcmRlci10b3AgOiAwcHg7ICAgICAgICAgICAgXG4gICAgfSAgICBcbiAgICAuaXRlbS1kZXRhaWxzLXRhYmxle1xuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgbWFyZ2luLXRvcCA6IDJweDtcbiAgICAgICAgdGhlYWQgdGgge1xuICAgICAgICAgICAgYm9yZGVyLXRvcCA6IDBweDtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuICAgIC5jYXJkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgfVxufVxuXG4ucGFkZGluZy1yaWdodC0xMCB7XG4gICAgcGFkZGluZy1yaWdodCA6IDEwcHg7XG59XG4ucGFkZGluZy1sZWZ0LTMwIHtcbiAgICBwYWRkaW5nLWxlZnQgOiAzMHB4O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMDA0Njk1O1xyXG5AaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XHJcblxyXG4udmltLWNhcmQge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVkM2U4O1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWQzZTg7XHJcbiAgICB9XHJcbiAgICAudmltLWNhcmQtY29udGVudCB7ICAgICAgIFxyXG4gICAgICAgIG1hcmdpbiA6IDJyZW0gMHJlbSAwcmVtIDByZW07XHJcbiAgICB9XHJcbiAgICAudmltLWNhcmQtZGF0YSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yIDogJHByaW1hcnktY29sb3I7XHJcbiAgICB9XHJcbiAgICAudmltLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4udmltLWNkLXRpdGxlLWljb24ge1xyXG4gICAgcGFkZGluZy10b3AgOiA1cHg7XHJcbn1cclxuLml0ZW0tZGV0YWlscy1yZWNvcmRzLCAucG8tZGV0YWlscy1yZWNvcmRzIHtcclxuICAgIG1hcmdpbiA6IDE2cHg7XHJcbiAgICAuYWN0aW9uLWJhciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcCA6IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkICNkZWUyZTY7ICAgIFxyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1idXR0b24tYmFyIHtcclxuICAgICAgICBib3JkZXItdG9wIDogMHB4OyAgICAgICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIC5pdGVtLWRldGFpbHMtdGFibGUsIC5wby1kZXRhaWxzLXRhYmxlIHtcclxuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMnB4O1xyXG4gICAgICAgIHRoZWFkIHRoIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcCA6IDBweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_invoice_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/invoice-utils.service */ "./src/app/_services/invoice-utils.service.ts");
/* harmony import */ var _entities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_entities/page */ "./src/app/_entities/page.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(invoiceUtil, toastr) {
        this.invoiceUtil = invoiceUtil;
        this.toastr = toastr;
        this.page = new _entities_page__WEBPACK_IMPORTED_MODULE_3__["Page"]();
        this.pages = new Array();
        this.totalPages = 3;
        this.activeCard = "OPEN";
        this.pDocNum = '';
        this.vCode = '';
        this.filterApplied = false;
        this.po = new Object();
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.getPurchaseOrders(this.activeCard);
        this.getMetadata();
    };
    DetailsComponent.prototype.getPurchaseOrders = function (activeCard) {
        this.activeCard = activeCard;
        //this.clearFilter();
        this.getPOs(false, 0, activeCard);
    };
    DetailsComponent.prototype.getPOs = function (isRefresh, pNo, status, isNext, isPrev) {
        var _this = this;
        if (isNext === void 0) { isNext = false; }
        if (isPrev === void 0) { isPrev = false; }
        this.invoiceUtil.getPurchaseOrders(this.pDocNum, this.vCode, pNo, status)
            .subscribe(function (data) {
            _this.invHeaderItems = data.content;
            _this.page.totalElements = data.totalElements;
            _this.page.number = data.number;
            _this.page.totalPages = data.totalPages;
            if (_this.pages.length == 0) {
                if (_this.page.totalPages <= _this.totalPages)
                    _this.pages = _this.array(_this.page.totalPages);
                else
                    _this.pages = _this.array(_this.totalPages);
            }
            if (isNext && (_this.page.number - 1 == _this.pages[_this.pages.length - 1])) {
                _this.pages.splice(0, 1);
                _this.pages.push(_this.page.number);
            }
            if (isPrev && (_this.page.number + 1 == _this.pages[0])) {
                _this.pages.splice(_this.pages.length - 1, 1);
                _this.pages.splice(0, 0, _this.page.number);
            }
        }, function (error) {
            _this.toastr.error(error.error.message);
        });
    };
    DetailsComponent.prototype.setPage = function (pageNo, isNext, isPrev) {
        this.page.number = pageNo;
        this.getPOs(false, pageNo, this.activeCard, isNext, isPrev);
    };
    DetailsComponent.prototype.array = function (n) {
        return Array.from(Array(n).keys());
    };
    DetailsComponent.prototype.getMetadata = function () {
        var _this = this;
        this.invoiceUtil.poMetadata()
            .subscribe(function (data) {
            _this.po = data;
        });
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: _services_invoice_utils_service__WEBPACK_IMPORTED_MODULE_2__["InvoiceUtilsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        })
    ], DetailsComponent);
    return DetailsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\joshik\Documents\Kiran\OT\Projects\VIM\Portal\SSO\Angular\sso-poc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map