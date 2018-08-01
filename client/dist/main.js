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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_actor_edit_actor_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/actor-edit/actor-edit.component */ "./src/app/pages/actor-edit/actor-edit.component.ts");
/* harmony import */ var _pages_actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/actor-list/actor-list.component */ "./src/app/pages/actor-list/actor-list.component.ts");
/* harmony import */ var _pages_film_edit_film_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/film-edit/film-edit.component */ "./src/app/pages/film-edit/film-edit.component.ts");
/* harmony import */ var _pages_film_list_film_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/film-list/film-list.component */ "./src/app/pages/film-list/film-list.component.ts");
/* harmony import */ var _pages_film_maker_edit_film_maker_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/film-maker-edit/film-maker-edit.component */ "./src/app/pages/film-maker-edit/film-maker-edit.component.ts");
/* harmony import */ var _pages_film_maker_list_film_maker_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/film-maker-list/film-maker-list.component */ "./src/app/pages/film-maker-list/film-maker-list.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _security_manage_user_edit_user_manage_user_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/manage-user/edit-user/manage-user-edit.component */ "./src/app/security/manage-user/edit-user/manage-user-edit.component.ts");
/* harmony import */ var _security_manage_user_list_user_manage_user_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/manage-user/list-user/manage-user-list.component */ "./src/app/security/manage-user/list-user/manage-user-list.component.ts");
/* harmony import */ var _security_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./security/profile/profile.component */ "./src/app/security/profile/profile.component.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DEPENDENCIES


/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation







/* END MY VIEWS IMPORT */
// SECURITY





/**
 * WEB APP ROUTES
 */
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    /* START MY VIEWS */
    { path: 'actors/:id', component: _pages_actor_edit_actor_edit_component__WEBPACK_IMPORTED_MODULE_3__["ActorEditComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'actors', component: _pages_actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_4__["ActorListComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'films/:id', component: _pages_film_edit_film_edit_component__WEBPACK_IMPORTED_MODULE_5__["FilmEditComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'films', component: _pages_film_list_film_list_component__WEBPACK_IMPORTED_MODULE_6__["FilmListComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'filmmakers/:id', component: _pages_film_maker_edit_film_maker_edit_component__WEBPACK_IMPORTED_MODULE_7__["FilmMakerEditComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'filmmakers', component: _pages_film_maker_list_film_maker_list_component__WEBPACK_IMPORTED_MODULE_8__["FilmMakerListComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    /* END MY VIEWS */
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    // SECURITY
    { path: 'manage-users', component: _security_manage_user_list_user_manage_user_list_component__WEBPACK_IMPORTED_MODULE_11__["ManageUserListComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], data: ['ADMIN'] },
    { path: 'manage-users/:id', component: _security_manage_user_edit_user_manage_user_edit_component__WEBPACK_IMPORTED_MODULE_10__["ManageUserEditComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], data: ['ADMIN'] },
    { path: 'profile', component: _security_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] }
];
/**
 * ROUTING MODULE
 */
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR -->\n<app-navbar></app-navbar>\n\n<!-- CONTENT -->\n<div class=\"container-fluid mb-40\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-7\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n<div class=\"clearfix\"></div>\n\n<!-- FOOTER -->\n<div class=\"footer\">\n    Created by\n    <a href=\"https://www.skaffolder.com\" target=\"_blank\">&copy; Skaffolder</a>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    /**
     * THIS COMPONENT CONTAINS THE TEMPLATE OF WEB SITE
     */
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-managefilmexample',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
        /**
         * THIS COMPONENT CONTAINS THE TEMPLATE OF WEB SITE
         */
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _security_services_security_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security/services/security.service */ "./src/app/security/services/security.service.ts");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security/auth.interceptor */ "./src/app/security/auth.interceptor.ts");
/* harmony import */ var _security_manage_user_list_user_manage_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/manage-user/list-user/manage-user-list.component */ "./src/app/security/manage-user/list-user/manage-user-list.component.ts");
/* harmony import */ var _security_manage_user_edit_user_manage_user_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/manage-user/edit-user/manage-user-edit.component */ "./src/app/security/manage-user/edit-user/manage-user-edit.component.ts");
/* harmony import */ var _security_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./security/profile/profile.component */ "./src/app/security/profile/profile.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_actor_edit_actor_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/actor-edit/actor-edit.component */ "./src/app/pages/actor-edit/actor-edit.component.ts");
/* harmony import */ var _pages_actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/actor-list/actor-list.component */ "./src/app/pages/actor-list/actor-list.component.ts");
/* harmony import */ var _pages_film_edit_film_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/film-edit/film-edit.component */ "./src/app/pages/film-edit/film-edit.component.ts");
/* harmony import */ var _pages_film_list_film_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/film-list/film-list.component */ "./src/app/pages/film-list/film-list.component.ts");
/* harmony import */ var _pages_film_maker_edit_film_maker_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/film-maker-edit/film-maker-edit.component */ "./src/app/pages/film-maker-edit/film-maker-edit.component.ts");
/* harmony import */ var _pages_film_maker_list_film_maker_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/film-maker-list/film-maker-list.component */ "./src/app/pages/film-maker-list/film-maker-list.component.ts");
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/actor.service */ "./src/app/services/actor.service.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _services_film_maker_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/film-maker.service */ "./src/app/services/film-maker.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/navbar.component */ "./src/app/components/navbar.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _directives_mail_validate_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/mail.validate.directive */ "./src/app/directives/mail.validate.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DEPENDENCIES






// SECURITY




// SECURITY VIEWS




/* START MY VIEWS IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation







/* END MY VIEWS IMPORTS*/
/* START MY SERVICES IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation




/* END MY SERVICES IMPORTS*/
// LAYOUT



// DIRECTIVES

// DECLARE APPLICATION MODULE
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            declarations: [
                // LAYOUT
                _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"],
                _components_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"],
                _directives_mail_validate_directive__WEBPACK_IMPORTED_MODULE_28__["MailValidator"],
                // SECURITY
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _security_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _security_manage_user_list_user_manage_user_list_component__WEBPACK_IMPORTED_MODULE_10__["ManageUserListComponent"],
                _security_manage_user_edit_user_manage_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["ManageUserEditComponent"],
                /* START DECLARATIONS */
                // Do not edit this comment content, it will be overwritten in next Skaffolder generation
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _pages_actor_edit_actor_edit_component__WEBPACK_IMPORTED_MODULE_15__["ActorEditComponent"],
                _pages_actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_16__["ActorListComponent"],
                _pages_film_edit_film_edit_component__WEBPACK_IMPORTED_MODULE_17__["FilmEditComponent"],
                _pages_film_list_film_list_component__WEBPACK_IMPORTED_MODULE_18__["FilmListComponent"],
                _pages_film_maker_edit_film_maker_edit_component__WEBPACK_IMPORTED_MODULE_19__["FilmMakerEditComponent"],
                _pages_film_maker_list_film_maker_list_component__WEBPACK_IMPORTED_MODULE_20__["FilmMakerListComponent"],
                /* END DECLARATIONS */
                // PIPE
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_27__["SearchPipe"]
            ],
            providers: [
                /* START PROVIDERS */
                // Do not edit this comment content, it will be overwritten in next Skaffolder generation
                _services_actor_service__WEBPACK_IMPORTED_MODULE_21__["ActorService"],
                _services_film_service__WEBPACK_IMPORTED_MODULE_22__["FilmService"],
                _services_film_maker_service__WEBPACK_IMPORTED_MODULE_23__["FilmMakerService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"],
                /* END PROVIDERS */
                // SECURITY
                _security_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _security_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
                _security_services_security_service__WEBPACK_IMPORTED_MODULE_6__["SecurityService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true }
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar.component.html":
/*!**************************************************!*\
  !*** ./src/app/components/navbar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"\">ManageFilmExample</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div *ngIf=\"user\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/home\">Home </a>\n            </li>\n            <!-- START LINK MENU -->\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n               <a class=\"nav-link\" routerLink=\"/actors\">Actor</a>\n            </li>\n        \n            <li class=\"nav-item\" routerLinkActive=\"active\">\n               <a class=\"nav-link\" routerLink=\"/films\">Film</a>\n            </li>\n        \n            <li class=\"nav-item\" routerLinkActive=\"active\">\n               <a class=\"nav-link\" routerLink=\"/filmmakers\">FilmMaker</a>\n            </li>\n        \n <!-- END LINK MENU -->\n        </ul>\n    </div>\n    <div *ngIf=\"user\" class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Benvenuto {{user.username}}\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" routerLink=\"/manage-users\">Manage User</a>\n                    <a class=\"dropdown-item\" routerLink=\"/profile\">Profile</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" (click)=\"authenticationService.logout()\">Logout</a>\n                </div>\n            </li>\n        </ul>\n\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_security_current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/security/current-user */ "./src/app/security/current-user.ts");
/* harmony import */ var src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/authentication.service */ "./src/app/security/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This component manage the NavBar
 *
 * @class NavbarComponent
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.getUser().subscribe(function (user) { return _this.user = user; }, function (err) { return _this.user = null; });
        src_app_security_current_user__WEBPACK_IMPORTED_MODULE_1__["store"].currentUser$.subscribe(function (user) { return _this.user = user; });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/directives/mail.validate.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/mail.validate.directive.ts ***!
  \*******************************************************/
/*! exports provided: MailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailValidator", function() { return MailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailValidator = /** @class */ (function () {
    function MailValidator(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    MailValidator_1 = MailValidator;
    MailValidator.prototype.validate = function (control) {
        // self value (e.g. retype password)
        var mail = control.value;
        var regExpMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!mail)
            return null;
        if (!regExpMail.test(mail)) {
            this.renderer.addClass(this.elRef.nativeElement, 'is-invalid');
            return {
                validateEqual: false
            };
        }
        else {
            this.renderer.removeClass(this.elRef.nativeElement, 'is-invalid');
        }
        return null;
    };
    MailValidator = MailValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[isMail]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: MailValidator_1, multi: true }]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MailValidator);
    return MailValidator;
    var MailValidator_1;
}());



/***/ }),

/***/ "./src/app/domain/manage_film_example_db/actor.ts":
/*!********************************************************!*\
  !*** ./src/app/domain/manage_film_example_db/actor.ts ***!
  \********************************************************/
/*! exports provided: Actor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
/* harmony import */ var _base_actor_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/actor.base */ "./src/app/domain/manage_film_example_db/base/actor.base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * YOU CAN OVERRIDE HERE ActorBase.ts
 */
var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Actor;
}(_base_actor_base__WEBPACK_IMPORTED_MODULE_0__["ActorBase"]));



/***/ }),

/***/ "./src/app/domain/manage_film_example_db/base/actor.base.ts":
/*!******************************************************************!*\
  !*** ./src/app/domain/manage_film_example_db/base/actor.base.ts ***!
  \******************************************************************/
/*! exports provided: ActorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorBase", function() { return ActorBase; });
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|


 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE ActorBase PLEASE EDIT ../actor.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
/**
 * This is the model of Actor object
 *
 */
var ActorBase = /** @class */ (function () {
    function ActorBase() {
    }
    return ActorBase;
}());



/***/ }),

/***/ "./src/app/domain/manage_film_example_db/base/film-maker.base.ts":
/*!***********************************************************************!*\
  !*** ./src/app/domain/manage_film_example_db/base/film-maker.base.ts ***!
  \***********************************************************************/
/*! exports provided: FilmMakerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmMakerBase", function() { return FilmMakerBase; });
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|


 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE ActorBase PLEASE EDIT ../film-maker.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
/**
 * This is the model of FilmMaker object
 *
 */
var FilmMakerBase = /** @class */ (function () {
    function FilmMakerBase() {
    }
    return FilmMakerBase;
}());



/***/ }),

/***/ "./src/app/domain/manage_film_example_db/base/film.base.ts":
/*!*****************************************************************!*\
  !*** ./src/app/domain/manage_film_example_db/base/film.base.ts ***!
  \*****************************************************************/
/*! exports provided: FilmBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmBase", function() { return FilmBase; });
/**
 * This is the model of Film object
 *
 */
var FilmBase = /** @class */ (function () {
    function FilmBase() {
    }
    return FilmBase;
}());



/***/ }),

/***/ "./src/app/domain/manage_film_example_db/base/user.base.ts":
/*!*****************************************************************!*\
  !*** ./src/app/domain/manage_film_example_db/base/user.base.ts ***!
  \*****************************************************************/
/*! exports provided: UserBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBase", function() { return UserBase; });
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|


 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE ActorBase PLEASE EDIT ../user.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
/**
 * This is the model of User object
 *
 */
var UserBase = /** @class */ (function () {
    function UserBase() {
    }
    return UserBase;
}());



/***/ }),

/***/ "./src/app/domain/manage_film_example_db/film-maker.ts":
/*!*************************************************************!*\
  !*** ./src/app/domain/manage_film_example_db/film-maker.ts ***!
  \*************************************************************/
/*! exports provided: FilmMaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmMaker", function() { return FilmMaker; });
/* harmony import */ var _base_film_maker_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/film-maker.base */ "./src/app/domain/manage_film_example_db/base/film-maker.base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * YOU CAN OVERRIDE HERE FilmMakerBase.ts
 */
var FilmMaker = /** @class */ (function (_super) {
    __extends(FilmMaker, _super);
    function FilmMaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FilmMaker;
}(_base_film_maker_base__WEBPACK_IMPORTED_MODULE_0__["FilmMakerBase"]));



/***/ }),

/***/ "./src/app/domain/manage_film_example_db/film.ts":
/*!*******************************************************!*\
  !*** ./src/app/domain/manage_film_example_db/film.ts ***!
  \*******************************************************/
/*! exports provided: Film */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return Film; });
/* harmony import */ var _base_film_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/film.base */ "./src/app/domain/manage_film_example_db/base/film.base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * YOU CAN OVERRIDE HERE FilmBase.ts
 */
var Film = /** @class */ (function (_super) {
    __extends(Film, _super);
    function Film() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Film;
}(_base_film_base__WEBPACK_IMPORTED_MODULE_0__["FilmBase"]));



/***/ }),

/***/ "./src/app/domain/manage_film_example_db/user.ts":
/*!*******************************************************!*\
  !*** ./src/app/domain/manage_film_example_db/user.ts ***!
  \*******************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _base_user_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/user.base */ "./src/app/domain/manage_film_example_db/base/user.base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * YOU CAN OVERRIDE HERE UserBase.ts
 */
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(_id, username, token, roles) {
        var _this = _super.call(this) || this;
        _this._id = _id;
        _this.username = username;
        _this.token = token;
        _this.roles = roles;
        return _this;
    }
    // UTILS FUNCTIONS
    /**
     * Check if logged user is admin
     */
    User.prototype.isAdmin = function () {
        if (!this.roles)
            return false;
        return this.roles.indexOf('ADMIN') === 0;
    };
    /**
     * Check if logged user has one role
     */
    User.prototype.hasRole = function (role) {
        var _this = this;
        if (!this.roles)
            return false;
        if (typeof role === 'string') {
            return (this.roles.indexOf(role) !== -1);
        }
        else {
            var found = role.filter(function (rol) {
                return (_this.roles.indexOf(rol) !== -1);
            });
            return found.length > 0;
        }
    };
    return User;
}(_base_user_base__WEBPACK_IMPORTED_MODULE_0__["UserBase"]));



/***/ }),

/***/ "./src/app/pages/actor-edit/actor-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/actor-edit/actor-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/actor-edit/actor-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/actor-edit/actor-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>Actor Edit</h1>\n</div>\n<div class=\"card mb-40\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-edit\"></i> Edit\n    </div>\n    <div class=\"card-body\">\n        <form #editForm=\"ngForm\" [ngClass]=\"{'was-validated': formValid!=null}\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                        <label for=\"birthDate\">BirthDate</label>\n                        <input type=\"date\" class=\"form-control\" id=\"birthDate\" [(ngModel)]=\"item.birthDate\" name=\"birthDate\" #birthDate=\"ngModel\" >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name *</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"item.name\" name=\"name\" #name=\"ngModel\" required>\n                        <div class=\"invalid-feedback\">Value is required</div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"surname\">Surname</label>\n                        <input type=\"text\" class=\"form-control\" id=\"surname\" [(ngModel)]=\"item.surname\" name=\"surname\" #surname=\"ngModel\" >\n                    </div>\n                    <!-- RELATIONS -->\n                    \n\n\n                    <!-- BUTTON BAR -->\n                    <div class=\"mt-40\">\n                        <button class=\"btn btn-primary pull-right\" (click)=\"save(editForm.valid, item)\">Save</button>\n                        <button class=\"btn btn-secondary pull-right mr-2\" (click)=\"goBack()\">Back To List</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/actor-edit/actor-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/actor-edit/actor-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ActorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorEditComponent", function() { return ActorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/actor.service */ "./src/app/services/actor.service.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _domain_manage_film_example_db_actor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/manage_film_example_db/actor */ "./src/app/domain/manage_film_example_db/actor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Libraries



// Import Services


// Import Models

// START - USED SERVICES
/**
* ActorService.create
*	@description CRUD ACTION create
*
* FilmService.findBycast
*	@description CRUD ACTION findBycast
*
* ActorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id
*
* ActorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES
/**
 * This component allows to edit a Actor
 */
var ActorEditComponent = /** @class */ (function () {
    function ActorEditComponent(actorService, filmService, route, location) {
        this.actorService = actorService;
        this.filmService = filmService;
        this.route = route;
        this.location = location;
        // Init item
        this.item = new _domain_manage_film_example_db_actor__WEBPACK_IMPORTED_MODULE_5__["Actor"]();
        this.externalFilm = [];
    }
    /**
     * Init
     */
    ActorEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            var id = param['id'];
            if (id !== 'new') {
                _this.actorService.get(id).subscribe(function (item) { return _this.item = item; });
                _this.filmService.findByCast(id).subscribe(function (list) { return _this.externalFilm = list; });
            }
            // Get relations
        });
    };
    /**
     * Save Actor
     *
     * @param {boolean} formValid Form validity check
     * @param Actor item Actor to save
     */
    ActorEditComponent.prototype.save = function (formValid, item) {
        var _this = this;
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.actorService.update(item).subscribe(function (data) { return _this.goBack(); });
            }
            else {
                this.actorService.create(item).subscribe(function (data) { return _this.goBack(); });
            }
        }
    };
    /**
     * Go Back
     */
    ActorEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    ActorEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actor-edit',
            template: __webpack_require__(/*! ./actor-edit.component.html */ "./src/app/pages/actor-edit/actor-edit.component.html"),
            styles: [__webpack_require__(/*! ./actor-edit.component.css */ "./src/app/pages/actor-edit/actor-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actor_service__WEBPACK_IMPORTED_MODULE_3__["ActorService"],
            _services_film_service__WEBPACK_IMPORTED_MODULE_4__["FilmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ActorEditComponent);
    return ActorEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/actor-list/actor-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/actor-list/actor-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/actor-list/actor-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/actor-list/actor-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>Actor List</h1>\n</div>\n\n<!-- SEARCH FORM -->\n<div class=\"card\">\n\n    <div class=\"card-header\">\n        <i class=\"fa fa-search\"></i> Search\n    </div>\n    <div class=\"card-body\">\n        <form #searchForm=\"ngForm\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                        <label for=\"birthDate\">BirthDate</label>\n                        <input type=\"date\" class=\"form-control\" id=\"birthDate\" [(ngModel)]=\"search.birthDate\" name=\"birthDate\" #birthDate=\"ngModel\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"search.name\" name=\"name\" #name=\"ngModel\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"surname\">Surname</label>\n                        <input type=\"text\" class=\"form-control\" id=\"surname\" [(ngModel)]=\"search.surname\" name=\"surname\" #surname=\"ngModel\">\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- TABLE -->\n<table class=\"table mt-40\">\n    <thead>\n        <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">birthDate</th>\n            <th scope=\"col\">name</th>\n            <th scope=\"col\">surname</th>\n            <th>Remove</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let item of list | search: { 'birthDate': search.birthDate, 'name': search.name, 'surname': search.surname }\">\n            <!-- ATTRIBUTES -->\n            <td>\n                <a [routerLink]=\"['/actors', item._id]\">{{item._id}}</a>\n            </td>\n            <td>{{item.birthDate | date }}</td>\n            <td>{{item.name }}</td>\n            <td>{{item.surname }}</td>\n\n            <!-- DELETE BUTTON -->\n            <td>\n                <button class=\"btn btn-danger text-center\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"selectId(item._id)\">\n                    <span>\n                        <i class=\"fa fa-trash\"></i>\n                    </span>\n                </button>\n            </td>\n        </tr>\n    </tbody>\n    <div class=\"no-result\" *ngIf=\"(list | search: {   'birthDate': search.birthDate ,  'name': search.name ,  'surname': search.surname  }).length == 0\">\n        No items found\n    </div>\n</table>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n                    <i class=\"fa fa-times-circle\"></i>&nbsp;&nbsp;Delete</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                Do you want remove item?\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteItem()\">YES</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- BUTTON -->\n<button class=\"btn btn-primary text-center pull-right mb-20\" routerLink=\"/actors/new\">\n    <span>\n        <i class=\"fa fa-plus\"></i>\n    </span>\n</button>\n\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "./src/app/pages/actor-list/actor-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/actor-list/actor-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ActorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorListComponent", function() { return ActorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/actor.service */ "./src/app/services/actor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Services

// START - USED SERVICES
/**
* ActorService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ActorService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES
/**
 * This component shows a list of Actor
 * @class ActorListComponent
 */
var ActorListComponent = /** @class */ (function () {
    function ActorListComponent(actorService) {
        this.actorService = actorService;
        this.search = {};
    }
    /**
     * Init
     */
    ActorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actorService.list().subscribe(function (list) { return _this.list = list; });
    };
    /**
     * Select Actor to remove
     *
     * @param {string} id Id of the Actor to remove
     */
    ActorListComponent.prototype.selectId = function (id) {
        this.idSelected = id;
    };
    /**
     * Remove selected Actor
     */
    ActorListComponent.prototype.deleteItem = function () {
        var _this = this;
        this.actorService.remove(this.idSelected).subscribe(function (data) { return _this.list = _this.list.filter(function (el) { return el._id !== _this.idSelected; }); });
    };
    ActorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actor-list',
            template: __webpack_require__(/*! ./actor-list.component.html */ "./src/app/pages/actor-list/actor-list.component.html"),
            styles: [__webpack_require__(/*! ./actor-list.component.css */ "./src/app/pages/actor-list/actor-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actor_service__WEBPACK_IMPORTED_MODULE_1__["ActorService"]])
    ], ActorListComponent);
    return ActorListComponent;
}());



/***/ }),

/***/ "./src/app/pages/film-edit/film-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/film-edit/film-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/film-edit/film-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/film-edit/film-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>Film Edit</h1>\n</div>\n<div class=\"card mb-40\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-edit\"></i> Edit\n    </div>\n    <div class=\"card-body\">\n        <form #editForm=\"ngForm\" [ngClass]=\"{'was-validated': formValid!=null}\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                        <label for=\"genre\">Genre</label>\n                        <select name=\"genre\" id=\"genre\" [(ngModel)]=\"item.genre\" class=\"form-control\" #genre=\"ngModel\" >\n                            <option value=\"\"></option>\n                            <option value=\"Action\">Action</option>\n                            <option value=\"Crime\">Crime</option>\n                            <option value=\"Fantasy\">Fantasy</option>\n                            <option value=\"Horror\">Horror</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"title\">Title *</label>\n                        <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"item.title\" name=\"title\" #title=\"ngModel\" required>\n                        <div class=\"invalid-feedback\">Value is required</div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"year\">Year</label>\n                        <input type=\"number\" class=\"form-control\" id=\"year\" [(ngModel)]=\"item.year\" name=\"year\" #year=\"ngModel\" >\n                    </div>\n                    <!-- RELATIONS -->\n                    <h2 class=\"mb-20\">Relations</h2>\n\n                    <div class=\"pb-30\">\n                        <div class=\"mb-20\">\n                            <label>Cast</label>\n\n                            <span class=\"dropdown ml-20\">\n                                <button class=\"btn btn-dropdown dropdown-toggle\" type=\"button\" id=\"dropdownMenuButtoncast\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                    aria-expanded=\"false\">\n                                    Add\n                                </button>\n                                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButtoncast\">\n                                    <button class=\"dropdown-item\" *ngFor=\"let item of listCast\" [class.disabled]=\"containActor(item._id)\" (click)=\"$event.preventDefault(); containActor(item._id) || addActor(item._id)\">{{item._id}}\n                                    </button>\n                                </div>\n                            </span>\n                        </div>\n                        <div class=\"mb-40\">\n                            <ul class=\"list-group\">\n                                <li class=\"list-group-item\" *ngIf=\"!item.cast || item.cast.length == 0\">No item found</li>\n                                <li class=\"list-group-item\" *ngFor=\"let obj of item.cast; let i = index\">\n                                    {{obj}}\n\n                                    <button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"removeActor(i)\">\n                                        <i class=\"fa fa-trash\"></i>\n                                    </button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <label for=\"FilmMaker\">FilmMaker</label>\n                    <select name=\"filmMaker\" id=\"filmMaker\" [(ngModel)]=\"item.filmMaker\" class=\"form-control\" #filmMaker=\"ngModel\"  required>\n                        <option *ngFor=\"let item of listFilmMaker\" value=\"{{item._id}}\">{{item._id}}</option>\n                    </select>\n                        <div class=\"invalid-feedback\">Value is required</div>\n\n                    <!-- BUTTON BAR -->\n                    <div class=\"mt-40\">\n                        <button class=\"btn btn-primary pull-right\" (click)=\"save(editForm.valid, item)\">Save</button>\n                        <button class=\"btn btn-secondary pull-right mr-2\" (click)=\"goBack()\">Back To List</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/film-edit/film-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/film-edit/film-edit.component.ts ***!
  \********************************************************/
/*! exports provided: FilmEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmEditComponent", function() { return FilmEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/actor.service */ "./src/app/services/actor.service.ts");
/* harmony import */ var _services_film_maker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/film-maker.service */ "./src/app/services/film-maker.service.ts");
/* harmony import */ var _domain_manage_film_example_db_film__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domain/manage_film_example_db/film */ "./src/app/domain/manage_film_example_db/film.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Libraries



// Import Services



// Import Models

// START - USED SERVICES
/**
* FilmService.create
*	@description CRUD ACTION create
*
* FilmService.get
*	@description CRUD ACTION get
*
* ActorService.list
*	@description CRUD ACTION list
*
* FilmMakerService.list
*	@description CRUD ACTION list
*
* FilmService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES
/**
 * This component allows to edit a Film
 */
var FilmEditComponent = /** @class */ (function () {
    function FilmEditComponent(filmService, actorService, filmmakerService, route, location) {
        this.filmService = filmService;
        this.actorService = actorService;
        this.filmmakerService = filmmakerService;
        this.route = route;
        this.location = location;
        // Init item
        this.item = new _domain_manage_film_example_db_film__WEBPACK_IMPORTED_MODULE_6__["Film"]();
    }
    /**
     * Init
     */
    FilmEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            var id = param['id'];
            if (id !== 'new') {
                _this.filmService.get(id).subscribe(function (item) { return _this.item = item; });
            }
            // Get relations
            _this.actorService.list().subscribe(function (list) { return _this.listCast = list; });
            _this.filmmakerService.list().subscribe(function (list) { return _this.listFilmMaker = list; });
        });
    };
    /**
     * Check if an Actor is in  cast
     *
     * @param {string} id Id of Actor to search
     * @returns {boolean} True if it is found
     */
    FilmEditComponent.prototype.containActor = function (id) {
        if (!this.item.cast)
            return false;
        return this.item.cast.indexOf(id) !== -1;
    };
    /**
     * Add Actor from Film
     *
     * @param {string} id Id of Actor to add in this.item.cast array
     */
    FilmEditComponent.prototype.addActor = function (id) {
        if (!this.item.cast)
            this.item.cast = [];
        this.item.cast.push(id);
    };
    /**
     * Remove an Actor from a Film
     *
     * @param {number} index Index of Actor in this.item.cast array
     */
    FilmEditComponent.prototype.removeActor = function (index) {
        this.item.cast.splice(index, 1);
    };
    /**
     * Save Film
     *
     * @param {boolean} formValid Form validity check
     * @param Film item Film to save
     */
    FilmEditComponent.prototype.save = function (formValid, item) {
        var _this = this;
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.filmService.update(item).subscribe(function (data) { return _this.goBack(); });
            }
            else {
                this.filmService.create(item).subscribe(function (data) { return _this.goBack(); });
            }
        }
    };
    /**
     * Go Back
     */
    FilmEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    FilmEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-film-edit',
            template: __webpack_require__(/*! ./film-edit.component.html */ "./src/app/pages/film-edit/film-edit.component.html"),
            styles: [__webpack_require__(/*! ./film-edit.component.css */ "./src/app/pages/film-edit/film-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_film_service__WEBPACK_IMPORTED_MODULE_3__["FilmService"],
            _services_actor_service__WEBPACK_IMPORTED_MODULE_4__["ActorService"],
            _services_film_maker_service__WEBPACK_IMPORTED_MODULE_5__["FilmMakerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FilmEditComponent);
    return FilmEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/film-list/film-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/film-list/film-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/film-list/film-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/film-list/film-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>Film List</h1>\n</div>\n\n<!-- SEARCH FORM -->\n<div class=\"card\">\n\n    <div class=\"card-header\">\n        <i class=\"fa fa-search\"></i> Search\n    </div>\n    <div class=\"card-body\">\n        <form #searchForm=\"ngForm\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                        <label for=\"genre\">Genre</label>\n                        <select name=\"genre\" id=\"genre\" [(ngModel)]=\"search.genre\" class=\"form-control\" #genre=\"ngModel\">\n                            <option value=\"Action\">Action</option>\n                            <option value=\"Crime\">Crime</option>\n                            <option value=\"Fantasy\">Fantasy</option>\n                            <option value=\"Horror\">Horror</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"title\">Title</label>\n                        <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"search.title\" name=\"title\" #title=\"ngModel\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"year\">Year</label>\n                        <input type=\"number\" class=\"form-control\" id=\"year\" [(ngModel)]=\"search.year\" name=\"year\" #year=\"ngModel\">\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- TABLE -->\n<table class=\"table mt-40\">\n    <thead>\n        <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">genre</th>\n            <th scope=\"col\">title</th>\n            <th scope=\"col\">year</th>\n            <th>Remove</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let item of list | search: { 'genre': search.genre, 'title': search.title, 'year': search.year }\">\n            <!-- ATTRIBUTES -->\n            <td>\n                <a [routerLink]=\"['/films', item._id]\">{{item._id}}</a>\n            </td>\n            <td>{{item.genre }}</td>\n            <td>{{item.title }}</td>\n            <td>{{item.year }}</td>\n\n            <!-- DELETE BUTTON -->\n            <td>\n                <button class=\"btn btn-danger text-center\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"selectId(item._id)\">\n                    <span>\n                        <i class=\"fa fa-trash\"></i>\n                    </span>\n                </button>\n            </td>\n        </tr>\n    </tbody>\n    <div class=\"no-result\" *ngIf=\"(list | search: {   'genre': search.genre ,  'title': search.title ,  'year': search.year  }).length == 0\">\n        No items found\n    </div>\n</table>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n                    <i class=\"fa fa-times-circle\"></i>&nbsp;&nbsp;Delete</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                Do you want remove item?\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteItem()\">YES</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- BUTTON -->\n<button class=\"btn btn-primary text-center pull-right mb-20\" routerLink=\"/films/new\">\n    <span>\n        <i class=\"fa fa-plus\"></i>\n    </span>\n</button>\n\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "./src/app/pages/film-list/film-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/film-list/film-list.component.ts ***!
  \********************************************************/
/*! exports provided: FilmListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmListComponent", function() { return FilmListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Services

// START - USED SERVICES
/**
* FilmService.delete
*	@description CRUD ACTION delete
*
* FilmService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES
/**
 * This component shows a list of Film
 * @class FilmListComponent
 */
var FilmListComponent = /** @class */ (function () {
    function FilmListComponent(filmService) {
        this.filmService = filmService;
        this.search = {};
    }
    /**
     * Init
     */
    FilmListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmService.list().subscribe(function (list) { return _this.list = list; });
    };
    /**
     * Select Film to remove
     *
     * @param {string} id Id of the Film to remove
     */
    FilmListComponent.prototype.selectId = function (id) {
        this.idSelected = id;
    };
    /**
     * Remove selected Film
     */
    FilmListComponent.prototype.deleteItem = function () {
        var _this = this;
        this.filmService.remove(this.idSelected).subscribe(function (data) { return _this.list = _this.list.filter(function (el) { return el._id !== _this.idSelected; }); });
    };
    FilmListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-film-list',
            template: __webpack_require__(/*! ./film-list.component.html */ "./src/app/pages/film-list/film-list.component.html"),
            styles: [__webpack_require__(/*! ./film-list.component.css */ "./src/app/pages/film-list/film-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_film_service__WEBPACK_IMPORTED_MODULE_1__["FilmService"]])
    ], FilmListComponent);
    return FilmListComponent;
}());



/***/ }),

/***/ "./src/app/pages/film-maker-edit/film-maker-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/film-maker-edit/film-maker-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/film-maker-edit/film-maker-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/film-maker-edit/film-maker-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>FilmMaker Edit</h1>\n</div>\n<div class=\"card mb-40\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-edit\"></i> Edit\n    </div>\n    <div class=\"card-body\">\n        <form #editForm=\"ngForm\" [ngClass]=\"{'was-validated': formValid!=null}\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name *</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"item.name\" name=\"name\" #name=\"ngModel\" required>\n                        <div class=\"invalid-feedback\">Value is required</div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"surname\">Surname</label>\n                        <input type=\"text\" class=\"form-control\" id=\"surname\" [(ngModel)]=\"item.surname\" name=\"surname\" #surname=\"ngModel\" >\n                    </div>\n                    <!-- RELATIONS -->\n                    \n\n\n                    <!-- BUTTON BAR -->\n                    <div class=\"mt-40\">\n                        <button class=\"btn btn-primary pull-right\" (click)=\"save(editForm.valid, item)\">Save</button>\n                        <button class=\"btn btn-secondary pull-right mr-2\" (click)=\"goBack()\">Back To List</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/film-maker-edit/film-maker-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/film-maker-edit/film-maker-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: FilmMakerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmMakerEditComponent", function() { return FilmMakerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_film_maker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/film-maker.service */ "./src/app/services/film-maker.service.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _domain_manage_film_example_db_film_maker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/manage_film_example_db/film-maker */ "./src/app/domain/manage_film_example_db/film-maker.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Libraries



// Import Services


// Import Models

// START - USED SERVICES
/**
* FilmMakerService.create
*	@description CRUD ACTION create
*
* FilmService.findByfilmMaker
*	@description CRUD ACTION findByfilmMaker
*
* FilmMakerService.get
*	@description CRUD ACTION get
*
* FilmMakerService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES
/**
 * This component allows to edit a FilmMaker
 */
var FilmMakerEditComponent = /** @class */ (function () {
    function FilmMakerEditComponent(filmmakerService, filmService, route, location) {
        this.filmmakerService = filmmakerService;
        this.filmService = filmService;
        this.route = route;
        this.location = location;
        // Init item
        this.item = new _domain_manage_film_example_db_film_maker__WEBPACK_IMPORTED_MODULE_5__["FilmMaker"]();
        this.externalFilm = [];
    }
    /**
     * Init
     */
    FilmMakerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            var id = param['id'];
            if (id !== 'new') {
                _this.filmmakerService.get(id).subscribe(function (item) { return _this.item = item; });
                _this.filmService.findByFilmMaker(id).subscribe(function (list) { return _this.externalFilm = list; });
            }
            // Get relations
        });
    };
    /**
     * Save FilmMaker
     *
     * @param {boolean} formValid Form validity check
     * @param FilmMaker item FilmMaker to save
     */
    FilmMakerEditComponent.prototype.save = function (formValid, item) {
        var _this = this;
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.filmmakerService.update(item).subscribe(function (data) { return _this.goBack(); });
            }
            else {
                this.filmmakerService.create(item).subscribe(function (data) { return _this.goBack(); });
            }
        }
    };
    /**
     * Go Back
     */
    FilmMakerEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    FilmMakerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-film-maker-edit',
            template: __webpack_require__(/*! ./film-maker-edit.component.html */ "./src/app/pages/film-maker-edit/film-maker-edit.component.html"),
            styles: [__webpack_require__(/*! ./film-maker-edit.component.css */ "./src/app/pages/film-maker-edit/film-maker-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_film_maker_service__WEBPACK_IMPORTED_MODULE_3__["FilmMakerService"],
            _services_film_service__WEBPACK_IMPORTED_MODULE_4__["FilmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FilmMakerEditComponent);
    return FilmMakerEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/film-maker-list/film-maker-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/film-maker-list/film-maker-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/film-maker-list/film-maker-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/film-maker-list/film-maker-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>FilmMaker List</h1>\n</div>\n\n<!-- SEARCH FORM -->\n<div class=\"card\">\n\n    <div class=\"card-header\">\n        <i class=\"fa fa-search\"></i> Search\n    </div>\n    <div class=\"card-body\">\n        <form #searchForm=\"ngForm\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"search.name\" name=\"name\" #name=\"ngModel\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"surname\">Surname</label>\n                        <input type=\"text\" class=\"form-control\" id=\"surname\" [(ngModel)]=\"search.surname\" name=\"surname\" #surname=\"ngModel\">\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- TABLE -->\n<table class=\"table mt-40\">\n    <thead>\n        <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">name</th>\n            <th scope=\"col\">surname</th>\n            <th>Remove</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let item of list | search: { 'name': search.name, 'surname': search.surname }\">\n            <!-- ATTRIBUTES -->\n            <td>\n                <a [routerLink]=\"['/filmmakers', item._id]\">{{item._id}}</a>\n            </td>\n            <td>{{item.name }}</td>\n            <td>{{item.surname }}</td>\n\n            <!-- DELETE BUTTON -->\n            <td>\n                <button class=\"btn btn-danger text-center\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"selectId(item._id)\">\n                    <span>\n                        <i class=\"fa fa-trash\"></i>\n                    </span>\n                </button>\n            </td>\n        </tr>\n    </tbody>\n    <div class=\"no-result\" *ngIf=\"(list | search: {   'name': search.name ,  'surname': search.surname  }).length == 0\">\n        No items found\n    </div>\n</table>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n                    <i class=\"fa fa-times-circle\"></i>&nbsp;&nbsp;Delete</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                Do you want remove item?\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteItem()\">YES</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- BUTTON -->\n<button class=\"btn btn-primary text-center pull-right mb-20\" routerLink=\"/filmmakers/new\">\n    <span>\n        <i class=\"fa fa-plus\"></i>\n    </span>\n</button>\n\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "./src/app/pages/film-maker-list/film-maker-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/film-maker-list/film-maker-list.component.ts ***!
  \********************************************************************/
/*! exports provided: FilmMakerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmMakerListComponent", function() { return FilmMakerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_film_maker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/film-maker.service */ "./src/app/services/film-maker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Services

// START - USED SERVICES
/**
* FilmMakerService.delete
*	@description CRUD ACTION delete
*
* FilmMakerService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES
/**
 * This component shows a list of FilmMaker
 * @class FilmMakerListComponent
 */
var FilmMakerListComponent = /** @class */ (function () {
    function FilmMakerListComponent(filmmakerService) {
        this.filmmakerService = filmmakerService;
        this.search = {};
    }
    /**
     * Init
     */
    FilmMakerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmmakerService.list().subscribe(function (list) { return _this.list = list; });
    };
    /**
     * Select FilmMaker to remove
     *
     * @param {string} id Id of the FilmMaker to remove
     */
    FilmMakerListComponent.prototype.selectId = function (id) {
        this.idSelected = id;
    };
    /**
     * Remove selected FilmMaker
     */
    FilmMakerListComponent.prototype.deleteItem = function () {
        var _this = this;
        this.filmmakerService.remove(this.idSelected).subscribe(function (data) { return _this.list = _this.list.filter(function (el) { return el._id !== _this.idSelected; }); });
    };
    FilmMakerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-film-maker-list',
            template: __webpack_require__(/*! ./film-maker-list.component.html */ "./src/app/pages/film-maker-list/film-maker-list.component.html"),
            styles: [__webpack_require__(/*! ./film-maker-list.component.css */ "./src/app/pages/film-maker-list/film-maker-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_film_maker_service__WEBPACK_IMPORTED_MODULE_1__["FilmMakerService"]])
    ], FilmMakerListComponent);
    return FilmMakerListComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n\n<div class=\"mb-40 mt-40\">\n  <h1>Home</h1>\n</div>\n\n<!-- SEARCH FORM -->\n<div>\n  <!-- START LINKS -->\n    <div>\r\n        <a routerLink=\"/actors\" routerLinkActive=\"active\">Link to List Actor</a>\r\n    </div>\r\n    <div>\r\n        <a routerLink=\"/films\" routerLinkActive=\"active\">Link to List Film</a>\r\n    </div>\r\n    <div>\r\n        <a routerLink=\"/filmmakers\" routerLinkActive=\"active\">Link to List FilmMaker</a>\r\n    </div>\r\n <!-- END LINKS -->\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Libraries


// Import Services
// START - USED SERVICES
// END - USED SERVICES
/**
 * Home Component
 */
var HomeComponent = /** @class */ (function () {
    function HomeComponent(location) {
        this.location = location;
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center mt-40\">\n    <div class=\"col-md-7\">\n        <div class=\"card\">\n            <div class=\"card-body text-center\">\n                <h2>Welcome in</h2>\n                <h2 class=\"mb-40\">ManageFilmExample</h2>\n                <form #loginForm=\"ngForm\">\n                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">\n                        Username or Password not valid\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{'was-validated': (loginForm.submitted && username.invalid) || (username.dirty && username.invalid)}\">\n                        <label class=\"pull-left\" for=\"username\"><strong>Username</strong></label>\n                        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required>\n                        <div *ngIf=\"(loginForm.submitted && username.invalid) || (username.dirty && username.invalid)\" class=\"alert alert-danger\">\n                            Username is required\n                        </div>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{'was-validated': (loginForm.submitted && password.invalid) || (password.dirty && password.invalid)}\">\n                        <label class=\"pull-left\" for=\"password\"><strong>Password</strong></label>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\n                        <div *ngIf=\"(loginForm.submitted && password.invalid) || (password.dirty && password.invalid)\" class=\"alert alert-danger\">\n                            Password is required\n                        </div>\n                    </div>\n                    <div class=\"form-group \">\n                        <input type=\"checkbox\" class=\"pull-right mt-8\" [(ngModel)]=\"remember\" name=\"remember\">\n                        <label class=\"pull-right\">Remember login&nbsp;</label>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"login(loginForm)\">Login</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_domain_manage_film_example_db_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/domain/manage_film_example_db/user */ "./src/app/domain/manage_film_example_db/user.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_security_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/security/current-user */ "./src/app/security/current-user.ts");
/* harmony import */ var src_app_security_services_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security/services/security.service */ "./src/app/security/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(securityService, router) {
        this.securityService = securityService;
        this.router = router;
        this.user = new src_app_domain_manage_film_example_db_user__WEBPACK_IMPORTED_MODULE_1__["User"](null, null, null, null);
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.valid) {
            var md5pass = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(this.user.password).toString();
            this.securityService.login(this.user.username, md5pass, this.remember === undefined ? false : this.remember)
                .subscribe(function (user) {
                _this.showError = false;
                _this.router.navigate(['/']);
                _this.setUser(user);
            }, function (err) { return _this.showError = true; });
        }
    };
    LoginComponent.prototype.setUser = function (user) {
        src_app_security_current_user__WEBPACK_IMPORTED_MODULE_4__["store"].setUser(user);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_security_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * This pipe allows to filter a list of items
 *
 * @example
 *  <div *ngFor="let item of list | search:{'field_1' : search1, 'field_2' : search2 }">
 *  </div>
 *
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (list, filter) {
        // if list is null or empty
        if (!list || !list.length)
            return [];
        // map objects in filter
        Object.keys(filter).map(function (fieldName) {
            // get key to search
            var key = filter[fieldName];
            if (key) {
                // filter list for esch type of filter
                list = list.filter(function (item) {
                    var field = item[fieldName];
                    // filter string
                    if (typeof field === 'string') {
                        return field.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1;
                    }
                    if (typeof field === 'boolean') {
                        if (typeof key === 'boolean')
                            return field === key;
                    }
                    if (typeof field === 'number') {
                        return field.toString().toLowerCase().indexOf(key.toString().toLocaleLowerCase()) !== -1;
                    }
                    // filter array
                    if (Array.isArray(field)) {
                        // find key in list
                        var found = field.filter(function (el) {
                            if (el.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1)
                                return el;
                        });
                        return found.length > 0;
                    }
                });
            }
        });
        return list;
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'search' })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/security/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/security/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_domain_manage_film_example_db_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/domain/manage_film_example_db/user */ "./src/app/domain/manage_film_example_db/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * This class intercept route change and check for security
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, http, authenticationService) {
        this.router = router;
        this.http = http;
        this.authenticationService = authenticationService;
    }
    /**
     * Check routes permission
     */
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        // Get authorized roles for route
        var roles = [];
        Object.keys(route.data).forEach(function (key) { return roles.push(route.data[key]); });
        // Return observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (ob) {
            // Get logged user
            _this.authenticationService.getUser().subscribe(function (user) {
                if (!user) {
                    // Not logged
                    ob.next(false);
                    _this.router.navigate(['/login']);
                }
                else {
                    // Logged user
                    var userObj = new src_app_domain_manage_film_example_db_user__WEBPACK_IMPORTED_MODULE_5__["User"](user._id, user.username, user.token, user.roles);
                    if (roles && roles.length > 0) {
                        // Check roles
                        if (userObj.hasRole(roles)) {
                            ob.next(true);
                        }
                        else {
                            ob.next(false);
                            _this.router.navigate(['/login']);
                        }
                    }
                    ob.next(true);
                }
            });
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/security/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/security/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * This interceptor get token from sessionStorage if it is set and put the JWT token in the header Authorization var
 */
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get token
        var token = sessionStorage.getItem('token') || localStorage.getItem('token');
        if (token) {
            var cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/security/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/security/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_security_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/current-user */ "./src/app/security/current-user.ts");
/* harmony import */ var src_app_security_services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/security/services/security.service */ "./src/app/security/services/security.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * This service manage the Authentication
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(securityService, router) {
        this.securityService = securityService;
        this.router = router;
    }
    /**
     * Get the logged user
     */
    AuthenticationService.prototype.getUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (ob) {
            // Get JWT token from browser storage
            var token = sessionStorage.getItem('token') || localStorage.getItem('token');
            // Get user from store
            src_app_security_current_user__WEBPACK_IMPORTED_MODULE_2__["store"].currentUser$.subscribe(function (user) {
                if (token && user) {
                    // User logged and stored token
                    ob.next(user);
                }
                else if (token && !user) {
                    // If refresh page and have token but not logged user
                    // Verify token and get user
                    _this.securityService.verifyToken(token).subscribe(function (usr) {
                        if (!usr || (!usr._id && !usr.success)) {
                            ob.next(undefined);
                        }
                        else {
                            ob.next(usr);
                        }
                    });
                }
                else {
                    // Logged user
                    ob.next(user);
                }
            });
        });
    };
    /**
     * Logout function
     */
    AuthenticationService.prototype.logout = function () {
        // Clear token and remove user from local storage to log user logout
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        src_app_security_current_user__WEBPACK_IMPORTED_MODULE_2__["store"].setUser(null);
        this.router.navigate(['/login']);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_security_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/security/current-user.ts":
/*!******************************************!*\
  !*** ./src/app/security/current-user.ts ***!
  \******************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Store the current user
 */
var CurrentUser = /** @class */ (function () {
    function CurrentUser() {
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentUser$ = this.currentUserSubject.asObservable();
    }
    CurrentUser.prototype.setUser = function (user) {
        this.currentUserSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](user));
    };
    return CurrentUser;
}());
var store = new CurrentUser();


/***/ }),

/***/ "./src/app/security/manage-user/edit-user/manage-user-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/security/manage-user/edit-user/manage-user-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>Edit User</h1>\n</div>\n\n<div class=\"card\">\n    <div class=\"card-body\">\n        <form #editForm=\"ngForm\" *ngIf=\"user\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                        <label for=\"username\">Username</label>\n                        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required [disabled]=\"user._id\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"username\">mail</label>\n                        <input type=\"string\" class=\"form-control\" id=\"mail\" [(ngModel)]=\"user.mail\" name=\"mail\" #mail=\"ngModel\" >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"username\">name</label>\n                        <input type=\"string\" class=\"form-control\" id=\"name\" [(ngModel)]=\"user.name\" name=\"name\" #name=\"ngModel\" >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"username\">surname</label>\n                        <input type=\"string\" class=\"form-control\" id=\"surname\" [(ngModel)]=\"user.surname\" name=\"surname\" #surname=\"ngModel\" >\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"!user._id\">\n                        <label for=\"name\">Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"!user._id\">\n                        <label for=\"name\">Password confirm</label>\n                        <input type=\"password\" class=\"form-control\" id=\"passwordConfirm\" [(ngModel)]=\"user.passwordConfirm\" name=\"passwordConfirm\" #passwordConfirm=\"ngModel\" required>\n                    </div>\n                    <!-- ROLE MANAGEMENT -->\n                    <h3>Roles</h3>\n                    <div class=\"row\">\n                        <div class=\"form-group col-12\">\n                            <label for=\"name\">New role...</label>\n                            <input type=\"text\" class=\"form-control\" id=\"newRole\" name=\"newRole\" #newRole>\n                        </div>\n                        <div class=\"col-12\">\n                            <span class=\"btn btn-primary text-center pull-right mb-20\" (click)=\"addRole(newRole)\">\n                                <i class=\"fa fa-plus\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <!-- NO ROLES -->\n                    <label *ngIf=\"!user.roles || user.roles.length==0\">\n                        No roles assigned to user\n                    </label>\n                    <!-- NO ROLES -->\n                    <div *ngFor=\"let role of user.roles; let i = index; trackBy:trackByFn\" class=\"row mt-2\">\n                        <div class=\"form-group\" class=\"col-11\">\n                            <input type=\"text\" class=\"form-control\" id=\"role\" [(ngModel)]=\"user.roles[i]\" name=\"roles\">\n                        </div>\n                        <span class=\"btn btn-danger text-center col-1\" (click)=\"removeRole(i)\">\n                            <i class=\"fa fa-trash\"></i>\n                        </span>\n                    </div>\n                    <div class=\"mt-40\">\n                        <button class=\"btn btn-info\" *ngIf=\"user._id\" data-toggle=\"modal\" data-target=\"#changePasswordModal\">Change Password</button>\n                        <button class=\"btn btn-primary pull-right\" color=\"primary\" [disabled]=\"editForm.invalid\" (click)=\"save()\">Save</button>\n                        <button class=\"btn btn-secondary pull-right mr-2\" routerLink=\"/manage-users\">Back To User List</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"changePasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\"><i class=\"fa fa-lock\"></i>&nbsp;&nbsp;Change password</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n            </div>\n            <form #changePasswordForm=\"ngForm\" class=\"container-fluid\">\n                <div class=\"modal-body\">\n                    <div class=\"row justify-content-md-center\">\n                        <div class=\"col-10\">\n                            <div class=\"form-group\">\n                                <label for=\"passwordAdmin\">Password Admin</label>\n                                <input type=\"password\" class=\"form-control\" id=\"passwordAdmin\" [(ngModel)]=\"passwordAdmin\" name=\"passwordAdmin\" #passwordAdminForm=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"passwordNew\">New Password</label>\n                                <input type=\"password\" class=\"form-control\" id=\"passwordNew\" [(ngModel)]=\"passwordNew\" name=\"passwordNew\" #passwordNewForm=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"passwordNewConfirm\">Confirm New Password</label>\n                                <input type=\"password\" class=\"form-control\" id=\"passwordNewConfirm\" [(ngModel)]=\"passwordNewConfirm\" name=\"passwordNewConfirm\" #passwordNewConfirmForm=\"ngModel\" [ngClass]=\"{'is-invalid': passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm}\"\n                                    required>\n                                <p *ngIf=\"passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm\" class=\"help-block\">Passwords missmatch</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <div *ngIf=\"showError\" class=\"row justify-content-md-center\">\n                <div class=\"alert alert-danger text-left\">\n                    <strong>Error!</strong> Admin passsword not valid\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" #closeModal class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"changePasswordForm.invalid || (passwordAdmin && passwordNewConfirm && passwordNew !== passwordNewConfirm)\" (click)=\"changePassword()\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/security/manage-user/edit-user/manage-user-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/security/manage-user/edit-user/manage-user-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageUserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserEditComponent", function() { return ManageUserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_domain_manage_film_example_db_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/domain/manage_film_example_db/user */ "./src/app/domain/manage_film_example_db/user.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Edit user by Admin
 */
var ManageUserEditComponent = /** @class */ (function () {
    function ManageUserEditComponent(userService, authenticationService, router, route) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    ManageUserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id === 'new') {
                // New User
                _this.user = new src_app_domain_manage_film_example_db_user__WEBPACK_IMPORTED_MODULE_1__["User"](null, null, null, []);
            }
            else {
                // Get User
                _this.userService.get(params.id).subscribe(function (user) { return _this.user = user; });
            }
        });
    };
    /**
     * Save or create User
     */
    ManageUserEditComponent.prototype.save = function () {
        var _this = this;
        if (this.user._id) {
            // Save
            this.userService.update(this.user).subscribe(function (data) { return _this.router.navigateByUrl('/manage-users'); });
        }
        else {
            // Create
            this.user.password = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"].hashStr(this.user.password).toString();
            this.userService.create(this.user).subscribe(function (data) { return _this.router.navigateByUrl('/manage-users'); });
        }
    };
    /**
     * Delete user
     */
    ManageUserEditComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.remove(this.user._id).subscribe(function (data) { return _this.router.navigateByUrl('/manage-users'); });
    };
    /**
     * Add roles to user
     *
     * @param {*} role Role to add
     */
    ManageUserEditComponent.prototype.addRole = function (role) {
        if (role.value) {
            this.user.roles.push(role.value);
            role.value = '';
        }
    };
    /**
     * Remove role from user
     *
     * @param {number} index Index of the role in the array
     */
    ManageUserEditComponent.prototype.removeRole = function (index) {
        this.user.roles.splice(index, 1);
    };
    /**
     * Change user password
     */
    ManageUserEditComponent.prototype.changePassword = function () {
        var _this = this;
        var passwordNew = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"].hashStr(this.passwordNew).toString();
        var passwordAdmin = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"].hashStr(this.passwordAdmin).toString();
        this.userService.changePassword(this.user._id, passwordNew, passwordAdmin).subscribe(function (data) {
            _this.passwordAdmin = null;
            _this.passwordNew = null;
            _this.passwordNewConfirm = null;
            _this.showError = false;
            _this.closeModal.nativeElement.click();
        }, function (err) {
            _this.showError = true;
        });
    };
    ManageUserEditComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManageUserEditComponent.prototype, "closeModal", void 0);
    ManageUserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-user-edit',
            template: __webpack_require__(/*! ./manage-user-edit.component.html */ "./src/app/security/manage-user/edit-user/manage-user-edit.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ManageUserEditComponent);
    return ManageUserEditComponent;
}());



/***/ }),

/***/ "./src/app/security/manage-user/list-user/manage-user-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/security/manage-user/list-user/manage-user-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>Manage User</h1>\n</div>\n\n<!-- SEARCH FORM -->\n<div class=\"card\">\n\n    <div class=\"card-header\">\n        <i class=\"fa fa-search\"></i> Search\n    </div>\n    <div class=\"card-body\">\n        <form #searchForm=\"ngForm\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                        <label for=\"title\">Username</label>\n                        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"search.username\" name=\"username\" #username=\"ngModel\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"username\">mail</label>\n                        <input type=\"string\" class=\"form-control\" id=\"mail\" [(ngModel)]=\"search.mail\" name=\"mail\" #mail=\"ngModel\" >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"username\">name</label>\n                        <input type=\"string\" class=\"form-control\" id=\"name\" [(ngModel)]=\"search.name\" name=\"name\" #name=\"ngModel\" >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"username\">surname</label>\n                        <input type=\"string\" class=\"form-control\" id=\"surname\" [(ngModel)]=\"search.surname\" name=\"surname\" #surname=\"ngModel\" >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"title\">Role</label>\n                        <input type=\"text\" class=\"form-control\" id=\"role\" [(ngModel)]=\"search.role\" name=\"role\" #role=\"ngModel\">\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n<!-- TABLE LIST -->\n<table class=\"table table-hover mt-40\">\n    <thead>\n        <tr>\n            <th>Username</th>\n            <th>Mail</th>\n            <th>Name</th>\n            <th>Surname</th>\n            <th>Roles</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of users | search:{'username' : search.username, 'name' : search.name, 'surname' : search.surname, 'mail' : search.mail, 'roles' : search.role }\">\n            <td><a [routerLink]=\"['/manage-users/', user._id]\">{{user.username}}</a></td>\n            <td>{{user.mail }}</td>\n            <td>{{user.name }}</td>\n            <td>{{user.surname }}</td>\n            <td>\n                <span *ngFor=\"let role of user.roles\" class=\"badge badge-pill badge-primary mr-2\">{{role}}</span>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<!-- BUTTON -->\n<button class=\"btn btn-primary text-center pull-right mb-20\" routerLink=\"/manage-users/new\">\n    <span>\n        <i class=\"fa fa-plus\"></i>\n    </span>\n</button>"

/***/ }),

/***/ "./src/app/security/manage-user/list-user/manage-user-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/security/manage-user/list-user/manage-user-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserListComponent", function() { return ManageUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// COMPONENT

// SERVICES

/**
 * List of all users
 */
var ManageUserListComponent = /** @class */ (function () {
    function ManageUserListComponent(userService) {
        this.userService = userService;
        this.search = {};
    }
    ManageUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get list users
        this.userService.list().subscribe(function (list) { return _this.users = list; });
    };
    ManageUserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-user-list',
            template: __webpack_require__(/*! ./manage-user-list.component.html */ "./src/app/security/manage-user/list-user/manage-user-list.component.html")
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ManageUserListComponent);
    return ManageUserListComponent;
}());



/***/ }),

/***/ "./src/app/security/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/security/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"mb-40 mt-40\">\n    <h1>My Profile</h1>\n</div>\n\n<div class=\"card\">\n    <form #profileForm=\"ngForm\" class=\"container-fluid mt-20\" *ngIf=\"user\">\n        <div class=\"row justify-content-md-center mt-40 mb-40\">\n            <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required disabled>\n                </div>\n                <div class=\"mt-40\">\n                    <button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#changePasswordModal\">Change Password</button>\n                    <button class=\"btn btn-primary pull-right\" color=\"primary\" [disabled]=\"profileForm.invalid\" (click)=\"save(profileForm.valid)\">Save</button>\n                    <button class=\"btn btn-secondary pull-right mr-2\" routerLink=\"/home\">Back To Home</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"changePasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\"><i class=\"fa fa-lock\"></i>&nbsp;&nbsp;Change password</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                </div>\n                <form #changePasswordForm=\"ngForm\" class=\"container-fluid\">\n                    <div class=\"modal-body\">\n                        <div class=\"row justify-content-md-center\">\n                            <div class=\"col-10\">\n                                <div class=\"form-group\">\n                                    <label for=\"passwordOld\">Old Password</label>\n                                    <input type=\"password\" class=\"form-control\" id=\"passwordOld\" [(ngModel)]=\"passwordOld\" name=\"passwordOld\" #passwordOldForm=\"ngModel\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"passwordNew\">New Password</label>\n                                    <input type=\"password\" class=\"form-control\" id=\"passwordNew\" [(ngModel)]=\"passwordNew\" name=\"passwordNew\" #passwordNewForm=\"ngModel\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"passwordNewConfirm\">Confirm New Password</label>\n                                    <input type=\"password\" class=\"form-control\" id=\"passwordNewConfirm\" [(ngModel)]=\"passwordNewConfirm\" name=\"passwordNewConfirm\" #passwordNewConfirmForm=\"ngModel\" [ngClass]=\"{'is-invalid': passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm}\"\n                                        required>\n                                    <p *ngIf=\"passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm\" class=\"help-block\">Passwords missmatch</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <div *ngIf=\"showError\" class=\"row justify-content-md-center\">\n                    <div class=\"alert alert-danger text-left\">\n                        <strong>Error!</strong> Old passsword not valid\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" #closeModal class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"changePasswordForm.invalid || (passwordAdmin && passwordNewConfirm && passwordNew !== passwordNewConfirm)\" (click)=\"changePassword()\">Save</button>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/security/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/security.service */ "./src/app/security/services/security.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_security_current_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/security/current-user */ "./src/app/security/current-user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Libraries



// Security




/**
 * Edit my profile
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, authenticationService, securityService, router, route) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.securityService = securityService;
        this.router = router;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // Get logged user
            _this.authenticationService.getUser().subscribe(function (user) { return _this.user = user; });
        });
    };
    /**
     * Save User
     *
     * @param {boolean} valid Form validity
     */
    ProfileComponent.prototype.save = function (valid) {
        var _this = this;
        if (valid)
            this.userService.update(this.user).subscribe(function (data) {
                _this.userService.get(_this.user._id).subscribe(function (user) {
                    src_app_security_current_user__WEBPACK_IMPORTED_MODULE_6__["store"].setUser(user);
                    _this.router.navigateByUrl('/home');
                });
            });
    };
    /**
     * Change password of user
     */
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        this.showError = false;
        // Convert passwords in MD5
        var passwordNew = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(this.passwordNew).toString();
        var passwordOld = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(this.passwordOld).toString();
        // Change password
        this.securityService.changePassword(passwordNew, passwordOld).subscribe(function (data) {
            _this.passwordOld = null;
            _this.passwordNew = '';
            _this.passwordNewConfirm = '';
            _this.showError = false;
            _this.closeModal.nativeElement.click();
        }, function (err) {
            _this.showError = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileComponent.prototype, "closeModal", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/security/profile/profile.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/security/services/security.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/services/security.service.ts ***!
  \*******************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Manage rest API about security
 */
var SecurityService = /** @class */ (function () {
    function SecurityService(http) {
        this.http = http;
        this.contextUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint;
    }
    /**
     * Login by username and md5 password
     *
     * @param {string} username username for login
     * @param {string} password password in MD5
     * @param {boolean} remember store token in local storage
     * @returns {Observable<User>} logged user
     */
    SecurityService.prototype.login = function (username, password, remember) {
        var _this = this;
        return this.http.post(this.contextUrl + '/login', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) { return _this.setSession(user.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) { if (remember)
            _this.setLocal(user.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    };
    /**
     * Verify JWT token
     *
     * @param {string} token JWT token to verify
     * @returns {Observable<any>} logged user or error message
     */
    SecurityService.prototype.verifyToken = function (token) {
        return this.http.post(this.contextUrl + '/verifyToken', { token: token })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user; }));
    };
    /**
     * Change password of current user
     *
     * @param {string} passwordNew New password to set in MD5
     * @param {string} passwordOld Old password to check in MD5
     * @returns {Observable<void>} Success or error
     */
    SecurityService.prototype.changePassword = function (passwordNew, passwordOld) {
        return this.http
            .post(this.contextUrl + '/changePassword', {
            passwordNew: passwordNew,
            passwordOld: passwordOld
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /**
     * Set token in sessionStorage
     *
     * @private
     * @param {*} token JWT token to set in sessionStorage
     */
    SecurityService.prototype.setSession = function (token) {
        sessionStorage.setItem('token', token);
    };
    /**
     * Set token in localStorage
     *
     * @private
     * @param {*} token JWT token to set in localStorage
     */
    SecurityService.prototype.setLocal = function (token) {
        localStorage.setItem('token', token);
    };
    SecurityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./src/app/services/actor.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/actor.service.ts ***!
  \*******************************************/
/*! exports provided: ActorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorService", function() { return ActorService; });
/* harmony import */ var _base_actor_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/actor.base.service */ "./src/app/services/base/actor.base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// BASE SERVICE

// start documentation
/**
 * Custom APIs
 *
 */
// end documentation
/**
 * YOU CAN OVERRIDE HERE ActorBaseService
 */
var ActorService = /** @class */ (function (_super) {
    __extends(ActorService, _super);
    function ActorService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ActorService;
}(_base_actor_base_service__WEBPACK_IMPORTED_MODULE_0__["ActorBaseService"]));



/***/ }),

/***/ "./src/app/services/base/actor.base.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/base/actor.base.service.ts ***!
  \*****************************************************/
/*! exports provided: ActorBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorBaseService", function() { return ActorBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE actorBaseService PLEASE EDIT ../actor.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
// DEPENDENCIES



// CONFIG

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Actor.service.ts
 */
/*
 * SCHEMA DB Actor
 *
    {
        birthDate: {
            type: 'Date'
        },
        name: {
            type: 'String',
            required : true
        },
        surname: {
            type: 'String'
        },
        //RELATIONS
        //EXTERNAL RELATIONS
        cast: [{
            type: Schema.ObjectId,
            ref : "Film"
        }],
    }
 *
 */
var ActorBaseService = /** @class */ (function () {
    function ActorBaseService(http) {
        this.http = http;
        this.contextUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + '/actors';
    }
    // CRUD METHODS
    /**
    * ActorService.create
    *   @description CRUD ACTION create
    *
    */
    ActorBaseService.prototype.create = function (item) {
        return this.http
            .post(this.contextUrl, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * ActorService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    ActorBaseService.prototype.remove = function (id) {
        return this.http
            .delete(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * ActorService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id
    *
    */
    ActorBaseService.prototype.get = function (id) {
        return this.http
            .get(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * ActorService.list
    *   @description CRUD ACTION list
    *
    */
    ActorBaseService.prototype.list = function () {
        return this.http
            .get(this.contextUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * ActorService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    ActorBaseService.prototype.update = function (item) {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    ActorBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActorBaseService);
    return ActorBaseService;
}());



/***/ }),

/***/ "./src/app/services/base/film-maker.base.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/base/film-maker.base.service.ts ***!
  \**********************************************************/
/*! exports provided: FilmMakerBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmMakerBaseService", function() { return FilmMakerBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE film-makerBaseService PLEASE EDIT ../film-maker.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
// DEPENDENCIES



// CONFIG

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../FilmMaker.service.ts
 */
/*
 * SCHEMA DB FilmMaker
 *
    {
        name: {
            type: 'String',
            required : true
        },
        surname: {
            type: 'String'
        },
        //RELATIONS
        //EXTERNAL RELATIONS
        filmMaker: {
            type: Schema.ObjectId,
            required : true,
            ref : "Film"
        },
    }
 *
 */
var FilmMakerBaseService = /** @class */ (function () {
    function FilmMakerBaseService(http) {
        this.http = http;
        this.contextUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + '/filmmakers';
    }
    // CRUD METHODS
    /**
    * FilmMakerService.create
    *   @description CRUD ACTION create
    *
    */
    FilmMakerBaseService.prototype.create = function (item) {
        return this.http
            .post(this.contextUrl, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * FilmMakerService.delete
    *   @description CRUD ACTION delete
    *
    */
    FilmMakerBaseService.prototype.remove = function (id) {
        return this.http
            .delete(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * FilmMakerService.get
    *   @description CRUD ACTION get
    *
    */
    FilmMakerBaseService.prototype.get = function (id) {
        return this.http
            .get(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * FilmMakerService.list
    *   @description CRUD ACTION list
    *
    */
    FilmMakerBaseService.prototype.list = function () {
        return this.http
            .get(this.contextUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * FilmMakerService.update
    *   @description CRUD ACTION update
    *
    */
    FilmMakerBaseService.prototype.update = function (item) {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    FilmMakerBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilmMakerBaseService);
    return FilmMakerBaseService;
}());



/***/ }),

/***/ "./src/app/services/base/film.base.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/base/film.base.service.ts ***!
  \****************************************************/
/*! exports provided: FilmBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmBaseService", function() { return FilmBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE filmBaseService PLEASE EDIT ../film.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
// DEPENDENCIES



// CONFIG

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Film.service.ts
 */
/*
 * SCHEMA DB Film
 *
    {
        genre: {
            type: 'String',
            enum : ["Action","Crime","Fantasy","Horror"]
        },
        title: {
            type: 'String',
            required : true
        },
        year: {
            type: 'Number'
        },
        //RELATIONS
        //EXTERNAL RELATIONS
        cast: [{
            type: Schema.ObjectId,
            ref : "Film"
        }],
        filmMaker: {
            type: Schema.ObjectId,
            required : true,
            ref : "Film"
        },
    }
 *
 */
var FilmBaseService = /** @class */ (function () {
    function FilmBaseService(http) {
        this.http = http;
        this.contextUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + '/films';
    }
    // CRUD METHODS
    /**
    * FilmService.create
    *   @description CRUD ACTION create
    *
    */
    FilmBaseService.prototype.create = function (item) {
        return this.http
            .post(this.contextUrl, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * FilmService.delete
    *   @description CRUD ACTION delete
    *
    */
    FilmBaseService.prototype.remove = function (id) {
        return this.http
            .delete(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * FilmService.findBycast
    *   @description CRUD ACTION findBycast
    *
    */
    FilmBaseService.prototype.findByCast = function (id) {
        return this.http
            .get(this.contextUrl + '/findByCast/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response; }));
    };
    /**
    * FilmService.findByfilmMaker
    *   @description CRUD ACTION findByfilmMaker
    *
    */
    FilmBaseService.prototype.findByFilmMaker = function (id) {
        return this.http
            .get(this.contextUrl + '/findByFilmMaker/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response; }));
    };
    /**
    * FilmService.get
    *   @description CRUD ACTION get
    *
    */
    FilmBaseService.prototype.get = function (id) {
        return this.http
            .get(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * FilmService.list
    *   @description CRUD ACTION list
    *
    */
    FilmBaseService.prototype.list = function () {
        return this.http
            .get(this.contextUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * FilmService.update
    *   @description CRUD ACTION update
    *
    */
    FilmBaseService.prototype.update = function (item) {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    FilmBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilmBaseService);
    return FilmBaseService;
}());



/***/ }),

/***/ "./src/app/services/base/user.base.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/base/user.base.service.ts ***!
  \****************************************************/
/*! exports provided: UserBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBaseService", function() { return UserBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE userBaseService PLEASE EDIT ../user.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
// DEPENDENCIES



// CONFIG

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../User.service.ts
 */
/*
 * SCHEMA DB User
 *
    {
        mail: {
            type: 'String'
        },
        name: {
            type: 'String'
        },
        password: {
            type: 'String',
            required : true
        },
        roles: {
            type: 'String'
        },
        surname: {
            type: 'String'
        },
        username: {
            type: 'String',
            required : true
        },
        //RELATIONS
        //EXTERNAL RELATIONS
    }
 *
 */
var UserBaseService = /** @class */ (function () {
    function UserBaseService(http) {
        this.http = http;
        this.contextUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + '/Users';
    }
    // CRUD METHODS
    /**
    * UserService.create
    *   @description CRUD ACTION create
    *
    */
    UserBaseService.prototype.create = function (item) {
        return this.http
            .post(this.contextUrl, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * UserService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    UserBaseService.prototype.remove = function (id) {
        return this.http
            .delete(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * UserService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id
    *
    */
    UserBaseService.prototype.get = function (id) {
        return this.http
            .get(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * UserService.list
    *   @description CRUD ACTION list
    *
    */
    UserBaseService.prototype.list = function () {
        return this.http
            .get(this.contextUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * UserService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    UserBaseService.prototype.update = function (item) {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    // Custom APIs
    /**
    * UserService.changePassword
    *   @description Change password of user from admin
    *   @returns object
    *
    */
    UserBaseService.prototype.changePassword = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return this.http
            .post(this.contextUrl + '/{id}/changePassword', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response; }));
    };
    UserBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserBaseService);
    return UserBaseService;
}());



/***/ }),

/***/ "./src/app/services/film-maker.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/film-maker.service.ts ***!
  \************************************************/
/*! exports provided: FilmMakerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmMakerService", function() { return FilmMakerService; });
/* harmony import */ var _base_film_maker_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/film-maker.base.service */ "./src/app/services/base/film-maker.base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// BASE SERVICE

// start documentation
/**
 * Custom APIs
 *
 */
// end documentation
/**
 * YOU CAN OVERRIDE HERE FilmMakerBaseService
 */
var FilmMakerService = /** @class */ (function (_super) {
    __extends(FilmMakerService, _super);
    function FilmMakerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FilmMakerService;
}(_base_film_maker_base_service__WEBPACK_IMPORTED_MODULE_0__["FilmMakerBaseService"]));



/***/ }),

/***/ "./src/app/services/film.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/film.service.ts ***!
  \******************************************/
/*! exports provided: FilmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmService", function() { return FilmService; });
/* harmony import */ var _base_film_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/film.base.service */ "./src/app/services/base/film.base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// BASE SERVICE

// start documentation
/**
 * Custom APIs
 *
 */
// end documentation
/**
 * YOU CAN OVERRIDE HERE FilmBaseService
 */
var FilmService = /** @class */ (function (_super) {
    __extends(FilmService, _super);
    function FilmService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FilmService;
}(_base_film_base_service__WEBPACK_IMPORTED_MODULE_0__["FilmBaseService"]));



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_user_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/user.base.service */ "./src/app/services/base/user.base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// DEPENDENCIES



// BASE SERVICE

// start documentation
/**
 * Custom APIs
 *
 * Service.changePassword
 *	@description Change password of user from admin
 *	@returns object
 *
 */
// end documentation
/**
 * YOU CAN OVERRIDE HERE UserBaseService
 */
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    // CONSTRUCTOR
    function UserService(http) {
        return _super.call(this, http) || this;
    }
    /*
    Name: changePassword
    Description: Change password of user from admin
    Params:
        id: id of user
        passwordNew: new password in MD5
        passwordAdmin: admin password in MD5
    */
    UserService.prototype.changePassword = function (id, passwordNew, passwordAdmin) {
        return this.http
            .post(this.contextUrl + '/' + id + '/changePassword', {
            passwordNew: passwordNew,
            passwordAdmin: passwordAdmin
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}(_base_user_base_service__WEBPACK_IMPORTED_MODULE_3__["UserBaseService"]));



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    endpoint: 'http://localhost:3000/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lucacarducci/Downloads/ManageFilmExample/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map