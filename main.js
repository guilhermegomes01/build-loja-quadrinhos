(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _comics_comics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comics/comics.component */ "./src/app/comics/comics.component.ts");
/* harmony import */ var _comics_detail_comics_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comics-detail/comics-detail.component */ "./src/app/comics-detail/comics-detail.component.ts");
/* harmony import */ var _comics_releases_comics_releases_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comics-releases/comics-releases.component */ "./src/app/comics-releases/comics-releases.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'comics', component: _comics_comics_component__WEBPACK_IMPORTED_MODULE_4__["ComicsComponent"] },
    { path: 'comics/:id', component: _comics_detail_comics_detail_component__WEBPACK_IMPORTED_MODULE_5__["ComicsDetailComponent"] },
    { path: 'lastReleases', component: _comics_releases_comics_releases_component__WEBPACK_IMPORTED_MODULE_6__["ComicsReleasesComponent"] }
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

/***/ "./src/app/app.api.ts":
/*!****************************!*\
  !*** ./src/app/app.api.ts ***!
  \****************************/
/*! exports provided: fullUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullUrl", function() { return fullUrl; });
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__);

var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__["Md5"]();
var PUBLIC_KEY = "56e41ad6ea91ae4764d36624dfbf2298";
var PRIVATE_KEY = "2907731faf1c5beeb30b96c8d332e18fb018fe73";
var ts = new Date().getTime();
var URL = "https://gateway.marvel.com/v1/public/comics?";
var hash = md5.appendStr(ts + PRIVATE_KEY + PUBLIC_KEY).end();
// var keys = ``
var fullUrl = URL + "apikey=" + PUBLIC_KEY + "&ts=" + ts + "&hash=" + hash;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrapper {\n    background-color: #edeff3;\n    min-height: 60vh;\n}\n\nfooter {\n    width: 100%;\n    background-color: #13171E;\n    color: white;\n    padding: 10px 0px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZmYzO1xuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XG59XG5cbmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTcxRTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n\n  <app-header></app-header>\n\n  <!-- Full Width Column -->\n  <div class=\"content-wrapper\">\n    <div class=\"container\">\n\n      <router-outlet></router-outlet>\n\n    </div>\n  </div>\n\n  <!-- snakbar deve ser aqui -->\n\n  <footer class=\"main-footer\">\n    <div class=\"container\">\n      <div class=\"text-center hidden-xs\">\n        {{ copyright }}.\n        Desenvolvido por <b>Guilherme Gomes de Lima</b>\n      </div>\n    </div>\n  </footer>\n</div>\n"

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
/* harmony import */ var _comics_comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comics/comics.service */ "./src/app/comics/comics.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(comicsService) {
        this.comicsService = comicsService;
        this.title = 'loja-quadrinhos';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.comicsService.getComics()
            .subscribe(function (response) {
            _this.copyright = response['attributionText'];
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comics_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"]])
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
/* harmony import */ var _comics_comics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comics/comics.service */ "./src/app/comics/comics.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _comics_comics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comics/comics.component */ "./src/app/comics/comics.component.ts");
/* harmony import */ var _comics_detail_comics_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comics-detail/comics-detail.component */ "./src/app/comics-detail/comics-detail.component.ts");
/* harmony import */ var _comics_releases_comics_releases_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comics-releases/comics-releases.component */ "./src/app/comics-releases/comics-releases.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _comics_comics_component__WEBPACK_IMPORTED_MODULE_9__["ComicsComponent"],
                _comics_detail_comics_detail_component__WEBPACK_IMPORTED_MODULE_10__["ComicsDetailComponent"],
                _comics_releases_comics_releases_component__WEBPACK_IMPORTED_MODULE_11__["ComicsReleasesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_comics_comics_service__WEBPACK_IMPORTED_MODULE_1__["ComicsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comics-detail/comics-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comics-detail/comics-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-title {\n    padding: 15px;\n    font-weight: bold;\n}\n\n.content {\n    padding-bottom: 40px;\n}\n\np.title {\n    font-weight: bold;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taWNzLWRldGFpbC9jb21pY3MtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21pY3MtZGV0YWlsL2NvbWljcy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtdGl0bGUge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxucC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/comics-detail/comics-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/comics-detail/comics-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\" *ngFor=\"let comic of comic\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">{{comic?.title}}</h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n          <div class=\"col-sm-3 col-xs-12\" *ngIf=\"comic\">\n            <img class=\"img-responsive\" src=\"{{comic.thumbnail.path}}.{{comic.thumbnail.extension}}\" alt=\"Capa do Quadrinho\" />\n          </div>\n\n          <div class=\"col-sm-9 col-xs-12\">\n            <p class=\"title\">Criadores</p>\n            <p *ngIf=\"comic.creators.available > 0; else condicaoFalsa\"><span *ngFor=\"let creator of comic.creators.items\">{{creator.name}}; </span></p>\n            <p class=\"title\">Personagens</p>\n            <p *ngIf=\"comic.characters.available > 0; else condicaoFalsa\"><span *ngFor=\"let character of comic.characters.items\">{{character.name}}; </span></p>\n            <p class=\"title\">Formato</p>\n            <p *ngIf=\"comic.format != null; else condicaoFalsa\">{{comic.format}}</p>\n            <p class=\"title\">Quantidade de Páginas</p>\n            <p *ngIf=\"comic.pageCount > 0; else condicaoFalsa\">{{comic.pageCount}}</p>\n            <p class=\"title\">Descrição</p>\n            <p *ngIf=\"comic.description != null; else condicaoFalsa\">{{comic.description}}</p>\n            <ng-template #condicaoFalsa>\n              <p>Não há dados disponíveis</p>\n            </ng-template>\n          </div>\n        </div>\n        <!-- /.box-body -->\n      </div>\n    </div>\n    <!-- /.col-xs-12 -->\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/comics-detail/comics-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comics-detail/comics-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ComicsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsDetailComponent", function() { return ComicsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comics_comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comics/comics.service */ "./src/app/comics/comics.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ComicsDetailComponent = /** @class */ (function () {
    function ComicsDetailComponent(comicsService, route) {
        this.comicsService = comicsService;
        this.route = route;
        this.comic = [];
    }
    ComicsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.comicsService.getComicById(this.route.snapshot.params['id'])
            .subscribe(function (response) {
            _this.comic = response['data'].results;
        });
    };
    ComicsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comics-detail',
            template: __webpack_require__(/*! ./comics-detail.component.html */ "./src/app/comics-detail/comics-detail.component.html"),
            styles: [__webpack_require__(/*! ./comics-detail.component.css */ "./src/app/comics-detail/comics-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comics_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ComicsDetailComponent);
    return ComicsDetailComponent;
}());



/***/ }),

/***/ "./src/app/comics-releases/comics-releases.component.css":
/*!***************************************************************!*\
  !*** ./src/app/comics-releases/comics-releases.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWljcy1yZWxlYXNlcy9jb21pY3MtcmVsZWFzZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/comics-releases/comics-releases.component.html":
/*!****************************************************************!*\
  !*** ./src/app/comics-releases/comics-releases.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Últimos Lançamentos\n  </h1>\n</section>\n\n\n<section class=\"content\">\n\n  <div class=\"comics-line row\">\n    <div *ngFor=\"let comic of comicsReleases\" class=\"col-md-3 col-sm-6 col-xs-12\">\n      <a [routerLink]=\"['/comics', comic.id]\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\"><img class=\"img-capa img-responsive\" src=\"{{comic.thumbnail.path}}.{{comic.thumbnail.extension}}\"></div>\n          <div class=\"panel-body\">{{comic.title}}</div>\n        </div>\n      </a>\n      <!-- /.info-box -->\n    </div>\n    <!-- /.col -->\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/comics-releases/comics-releases.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comics-releases/comics-releases.component.ts ***!
  \**************************************************************/
/*! exports provided: ComicsReleasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsReleasesComponent", function() { return ComicsReleasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comics_comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comics/comics.service */ "./src/app/comics/comics.service.ts");



var ComicsReleasesComponent = /** @class */ (function () {
    function ComicsReleasesComponent(comicsService) {
        this.comicsService = comicsService;
        this.comicsReleases = [];
    }
    ComicsReleasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.comicsService.getComicByDateRange()
            .subscribe(function (response) {
            _this.comicsReleases = response['data'].results;
        });
    };
    ComicsReleasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comics-releases',
            template: __webpack_require__(/*! ./comics-releases.component.html */ "./src/app/comics-releases/comics-releases.component.html"),
            styles: [__webpack_require__(/*! ./comics-releases.component.css */ "./src/app/comics-releases/comics-releases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comics_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"]])
    ], ComicsReleasesComponent);
    return ComicsReleasesComponent;
}());



/***/ }),

/***/ "./src/app/comics/comics.component.css":
/*!*********************************************!*\
  !*** ./src/app/comics/comics.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-capa {\n    height: 280px;\n    margin: 0 auto;\n}\n\n.panel {\n    border: none;\n    box-shadow: 1px 1px 1px 1px rgba(240, 236, 236, 0.87);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taWNzL2NvbWljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscURBQXFEO0FBQ3pEIiwiZmlsZSI6InNyYy9hcHAvY29taWNzL2NvbWljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jYXBhIHtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucGFuZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgyNDAsIDIzNiwgMjM2LCAwLjg3KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/comics/comics.component.html":
/*!**********************************************!*\
  !*** ./src/app/comics/comics.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Todos os Quadrinhos\n  </h1>\n</section>\n\n\n<section class=\"content\">\n\n  <div class=\"comics-line row\">\n    <div *ngFor=\"let comic of comics\" class=\"col-md-3 col-sm-6 col-xs-12\">\n      <a [routerLink]=\"['/comics', comic.id]\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\"><img class=\"img-capa img-responsive\"\n              src=\"{{comic.thumbnail.path}}.{{comic.thumbnail.extension}}\"></div>\n          <div class=\"panel-body\">{{comic.title}}</div>\n        </div>\n      </a>\n      <!-- /.info-box -->\n    </div>\n    <!-- /.col -->\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/comics/comics.component.ts":
/*!********************************************!*\
  !*** ./src/app/comics/comics.component.ts ***!
  \********************************************/
/*! exports provided: ComicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsComponent", function() { return ComicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comics.service */ "./src/app/comics/comics.service.ts");



var ComicsComponent = /** @class */ (function () {
    function ComicsComponent(comicsService) {
        this.comicsService = comicsService;
        this.comics = [];
    }
    ComicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.comicsService.getComics(100)
            .subscribe(function (response) {
            _this.comics = response['data'].results;
        });
    };
    ComicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comics',
            template: __webpack_require__(/*! ./comics.component.html */ "./src/app/comics/comics.component.html"),
            styles: [__webpack_require__(/*! ./comics.component.css */ "./src/app/comics/comics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"]])
    ], ComicsComponent);
    return ComicsComponent;
}());



/***/ }),

/***/ "./src/app/comics/comics.service.ts":
/*!******************************************!*\
  !*** ./src/app/comics/comics.service.ts ***!
  \******************************************/
/*! exports provided: ComicsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsService", function() { return ComicsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.api */ "./src/app/app.api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ComicsService = /** @class */ (function () {
    function ComicsService(http) {
        this.http = http;
    }
    ComicsService.prototype.getComics = function (quantityLimit, quantityOffset) {
        var limit = quantityLimit;
        var offset = (Math.random() * quantityOffset);
        if (limit == undefined) {
            limit = 100;
        }
        //Caso o offset seja verdadeiro, colocá-lo na url
        if (quantityOffset != null || quantityOffset != '' || quantityOffset != NaN) {
            return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_1__["fullUrl"] + "&limit=" + limit + "&offset=" + offset);
        }
        else
            return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_1__["fullUrl"] + "&limit=" + limit);
    };
    ComicsService.prototype.getComicById = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_1__["fullUrl"] + "&id=" + id);
    };
    //Função que mostra os lançamentos da última semana
    ComicsService.prototype.getComicByDateRange = function () {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_1__["fullUrl"] + "&dateDescriptor=thisWeek&orderBy=-focDate");
    };
    ComicsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ComicsService);
    return ComicsService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n    background-color: #1f1e1e;\n}\n\n.navbar {\n    margin-bottom: 0px;\n}\n\ndiv.collapsed {\n    display: block;\n}\n\n.navbar a {\n    color: white;\n}\n\n@media screen and (max-width: 768px) {\n    .navbar-header {\n        border-bottom: 1px solid;\n    }\n    .navbar-collapse {\n        box-shadow: none;\n    }\n}\n\n.nav>li>a:focus, .nav>li>a:hover {\n    background-color: dimgray;\n}\n\n.icon-bar {\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFlMWU7XG59XG5cbi5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuZGl2LmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZiYXIgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5uYXZiYXItaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgIH1cbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbi5uYXY+bGk+YTpmb2N1cywgLm5hdj5saT5hOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmF5O1xufVxuXG4uaWNvbi1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <img src=\"assets/marvel-banner.png\" class=\"img-responsive\" alt=\"\">\n  <nav class=\"navbar navbar-static-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a [routerLink]=\"['/']\" class=\"navbar-brand\"><b>Loja de Quadrinhos</b></a>\n        <button (click)=\"navbarCollapse.classList.toggle('collapsed')\" type=\"button\" class=\"navbar-toggle collapsed\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n      </div>\n\n      <div class=\"collapse navbar-collapse pull-left\" #navbarCollapse>\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/comics']\">Todos os Quadrinhos</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/lastReleases']\">Últimos Lançamentos</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.changeClass = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    margin-top: 30px;\n    box-shadow: 0px 0px 10px 3px #d6bbbb\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4ICNkNmJiYmJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron welcome-jumbotron\">\n  <h1>Bem vindo à Loja de Quadrinhos</h1>\n  <p>\n    Veja abaixo quais são os quadrinhos mais lidos no momento!\n  </p>\n  <!-- <a class=\"btn btn-primary btn-lg\" href=\"main-restaurants.html\">Ver Restaurantes</a> -->\n</div>\n\n<section class=\"content-header\">\n  <h1>\n    Mais Lidos\n  </h1>\n</section>\n\n\n<section class=\"content\">\n\n  <div class=\"comics-line row\">\n    <div *ngFor=\"let comic of comics\" class=\"col-md-3 col-sm-6 col-xs-12\">\n      <a [routerLink]=\"['/comics', comic.id]\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\"><img class=\"img-capa img-responsive\" src=\"{{comic.thumbnail.path}}.{{comic.thumbnail.extension}}\"></div>\n          <div class=\"panel-body\">{{comic.title}}</div>\n        </div>\n      </a>\n      <!-- /.info-box -->\n    </div>\n    <!-- /.col -->\n  </div>\n\n</section>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comics_comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comics/comics.service */ "./src/app/comics/comics.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(comicsService) {
        this.comicsService = comicsService;
        this.comics = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.comicsService.getComics(8, 100)
            .subscribe(function (response) {
            _this.comics = response['data'].results;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comics_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"]])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = __webpack_require__(/*! C:\Users\dev 3\Documents\Guilherme\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map