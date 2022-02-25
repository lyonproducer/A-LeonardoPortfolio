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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-color{\r\n\r\n  background: rgba(110,207,160,1);\r\n  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(110,207,160,1)), color-stop(100%, rgba(3,163,181,1)));\r\n  background: linear-gradient(to right, rgba(110,207,160,1) 0%, rgba(3,163,181,1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6ecfa0', endColorstr='#03a3b5', GradientType=1 );\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsK0JBQStCO0VBRS9CLDJIQUEySDtFQUkzSCxxRkFBcUY7RUFDckYsb0hBQW9IOztBQUV0SCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lci1jb2xvcntcclxuXHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTAsMjA3LDE2MCwxKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDExMCwyMDcsMTYwLDEpIDAlLCByZ2JhKDMsMTYzLDE4MSwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMTEwLDIwNywxNjAsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMywxNjMsMTgxLDEpKSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxMTAsMjA3LDE2MCwxKSAwJSwgcmdiYSgzLDE2MywxODEsMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMTEwLDIwNywxNjAsMSkgMCUsIHJnYmEoMywxNjMsMTgxLDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxMTAsMjA3LDE2MCwxKSAwJSwgcmdiYSgzLDE2MywxODEsMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDExMCwyMDcsMTYwLDEpIDAlLCByZ2JhKDMsMTYzLDE4MSwxKSAxMDAlKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzZlY2ZhMCcsIGVuZENvbG9yc3RyPScjMDNhM2I1JywgR3JhZGllbnRUeXBlPTEgKTtcclxuICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n\r\n<div class=\"container\">\r\n\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-4 col-sm-12 p-0 d-none d-sm-block\" >\r\n      <app-cover-profile></app-cover-profile>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-sm-12 p-0\">\r\n\r\n      <div class=\"banner-color\">\r\n\r\n        <div class=\"text-white container text-center p-5\">\r\n\r\n          <h1 class=\"display-4\">Leonardo Hernández</h1>\r\n          <h5 class=\"\">-   Diseñador Gráfico & Desarrollador Web   -</h5>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <router-outlet></router-outlet>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<app-footer></app-footer>"

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
        this.title = 'A-LeonardoPortfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-mgl-timeline */ "./node_modules/angular-mgl-timeline/fesm5/angular-mgl-timeline.js");
/* harmony import */ var angular_vertical_timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-vertical-timeline */ "./node_modules/angular-vertical-timeline/dist/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_cover_profile_cover_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cover-profile/cover-profile.component */ "./src/app/components/cover-profile/cover-profile.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

















var routes = [
    { path: '', redirectTo: '/about-me', pathMatch: 'full' },
    { path: 'about-me', component: _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"] },
    { path: 'skills', component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"] },
    { path: 'experience', component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_14__["ExperienceComponent"] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"],
                _components_cover_profile_cover_profile_component__WEBPACK_IMPORTED_MODULE_10__["CoverProfileComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_14__["ExperienceComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_4__["MglTimelineModule"],
                angular_vertical_timeline__WEBPACK_IMPORTED_MODULE_5__["VerticalTimelineModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_4__["MglTimelineModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-me/about-me.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-0 d-none d-block d-sm-none\" >\r\n  <app-cover-profile></app-cover-profile>\r\n</div>\r\n\r\n<div class=\"container animated fast fadeIn pl-4 pt-4 pr-4\">\r\n\r\n  <h4 class=\"title-color\">Perfil</h4>\r\n  <div style=\"border-bottom: solid 2px #4D8088;\"></div>\r\n\r\n  <p class=\"title-color text-justify mt-2\">\r\n    Hola, soy Leonardo Hernández, estudié cinco años de ingeniería informática en la Universidad UNEG, tengo unos tres años de experiencia laboral en desarrollo de aplicaciones web y móviles. Me considero un especialista en desarrollo frontend, con un poco de conocimiento de tecnologías backend. Fui diseñador desde pequeño haciendo diseño de flyers para fiestas, y portadas para artistas musicales. Luego comencé a construir wireframes y prototipos de pantalla para aplicaciones web y móviles.\r\n  </p>\r\n\r\n  <p class=\"title-color text-justify\">\r\n    Considero bastante oportuno e interesante comenzar a laborar en el ámbito en el que me he estado formando los\r\n    ultimos años al cumplir con mi carrera universitaria y así, poder desempeñar todo lo que he aprendido hasta la\r\n    fecha.\r\n  </p>\r\n\r\n  <p class=\"title-color text-justify\">Hello, Im Leonardo Hernandez, studied five years of computer engineering on UNEG University, I have about three years of work experience in web and mobile application development. I'm consider a frontend developert specialist, with a bit knowledge of backend tecnologies. I Was designer form a child making flyers design for parties, and cover for music artist. Next this I started to build wireframes and screen prototypes for web apps and Mobile. </p>\r\n\r\n  <br>\r\n  <h4 class=\"title-color\">Educación</h4>\r\n\r\n  <div style=\"border-bottom: solid 2px #4D8088;\"></div>\r\n\r\n  <div class=\" title-color\">\r\n    <div class=\"card-body d-flex justify-content-start\">\r\n\r\n      <img class=\"d-none d-sm-block\" src=\"assets/img/lourdes_logo.jpg\" alt=\"\" height=\"100px\">\r\n\r\n      <img class=\"d-block d-sm-none\" src=\"assets/img/lourdes_logo.jpg\" alt=\"\" height=\"50px\">\r\n\r\n      <div class=\"ml-3\">\r\n        <p class=\"card-text font-weight-bold\">Nuestra Señora de Lourdes - Bachiller</p>\r\n        <p>\r\n          La Unidad Educativa “Nuestra Señora de Lourdes” se encuentra constituida por diferentes instalaciones, construidas con el fin de proporcionar una adecuada enseñanza y preparación tanto educativa, como moral y ciudadana; con el fin de que los estudiantes Lourdistas reciban aprendizaje sobre diferentes ámbitos y logren emplear sus conocimientos adquiridos.\r\n        </p>\r\n\r\n        <div class=\"row d-flex justify-content-end\">\r\n          <div class=\"col-sm-4 col-lg-9\"></div>\r\n          <div class=\"col-sm-8 col-lg-3\" style=\"background-color: #426A8C;\">\r\n            <p class=\"m-0 text-white text-right\">2007 - 2014</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"card-body d-flex justify-content-start\">\r\n\r\n      <img class=\"d-none d-sm-block\" src=\"assets/img/uneg.png\" alt=\"\" height=\"100px\">\r\n      <img class=\"d-block d-sm-none\" src=\"assets/img/uneg.png\" alt=\"\" height=\"50px\">\r\n\r\n      <div class=\"ml-3\">\r\n        <p class=\"card-text font-weight-bold\">Universidad Nacional Experimental de Guayana - Universidad</p>\r\n        <p>Universidad Venezolana, nacida el 18 de marzo de 1938, educadora, forjadora de organización y desarrollo en la Educación Superior; fundada el 9 de marzo de 1982 mediante decreto presidencial N° 1.432 del Presidente Luis Herrera Campins.\r\n        </p>\r\n\r\n        <div class=\"row d-flex justify-content-end\">\r\n          <div class=\"col-sm-4 col-lg-9\" ></div>\r\n          <div class=\"col-sm-8 col-lg-3\" style=\"background-color: #426A8C;\">\r\n            <p class=\"m-0 text-white text-right\">2014 - 2019</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <br>\r\n\r\n  <br><br>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/components/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/components/about-me/about-me.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh5{\r\n\r\n  margin:0px;\r\n}\r\n\r\na:hover {\r\n  color: #005360;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDV7XHJcblxyXG4gIG1hcmdpbjowcHg7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA1MzYwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fast fadeIn pl-4 pt-4 pr-4 mb-5\">\r\n\r\n  <h4 class=\"title-color\">Contacto</h4>\r\n  <div style=\"border-bottom: solid 2px #4D8088;\"></div>\r\n\r\n  <div class=\"d-none d-sm-block\">\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-1\" style=\"color:#005360;\">\r\n        <i class=\"fas fa-phone fa-3x \"></i>\r\n      </div>\r\n\r\n      <div class=\"col-10 ml-2 d-flex align-items-center\">\r\n        <h5 class=\"title-color\">+58 424-9383599</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-1\" style=\"color:#005360;\">\r\n        <i class=\"fas fa-envelope-open-text fa-3x\"></i>\r\n      </div>\r\n\r\n      <div class=\"col-10 ml-2 d-flex align-items-center\">\r\n        <h5 class=\"title-color\">hernandezleonardo085@gmail.com</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-1\" style=\"color:#005360;\">\r\n        <i class=\"fab fa-behance fa-3x\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"col-10 ml-2 d-flex align-items-center\">\r\n        <a target=\"_blank\" href=\"https://behance.net/lyonincode\">\r\n          <h5 class=\"title-color\">https://behance.net/lyonincode</h5>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-1\" style=\"color:#005360;\">\r\n        <i class=\"fab fa-linkedin-in fa-3x\"></i>\r\n      </div>\r\n      <div class=\"col-10 ml-2 d-flex align-items-center\">\r\n        <a target=\"_blank\" href=\"https://linkedin.com/in/lyonproducertv\">\r\n          <h5 class=\"title-color\">https://linkedin.com/in/lyonproducertv</h5>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-1\" style=\"color:#005360;\">\r\n        <i class=\"fab fa-3x fa-github\"></i>\r\n      </div>\r\n      <div class=\"col-10 ml-2 d-flex align-items-center\">\r\n        <a target=\"_blank\" href=\"https://github.com/lyonproducer\">\r\n          <h5 class=\"title-color\">https://github.com/lyonproducer</h5>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-1\" style=\"color:#005360;\">\r\n        <i class=\"fas fa-globe-americas fa-3x\"></i>\r\n      </div>\r\n      <div class=\"col-10 ml-2 d-flex align-items-center\">\r\n        <h5 class=\"title-color\">Edo. Bolivar, Puerto Ordaz, Venezuela</h5>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"d-block d-sm-none\">\r\n    <div class=\"row pt-4\">\r\n\r\n      <div class=\"col\">\r\n\r\n        <a target=\"_blank\" href=\"https://behance.net/lyonincode\" style=\"color:#005360;cursor:pointer;\">\r\n          <i class=\"fab fa-behance fa-3x\" aria-hidden=\"true\"></i>\r\n        </a>\r\n\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <a target=\"_blank\" href=\"https://github.com/lyonproducer\" style=\"color:#005360;cursor:pointer;\">\r\n          <i class=\"fab fa-3x fa-github\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n\r\n        <a target=\"_blank\" href=\"https://linkedin.com/in/lyonproducertv\" style=\"color:#005360;cursor:pointer;\">\r\n          <i class=\"fab fa-linkedin-in fa-3x\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n\r\n        <a target=\"_blank\" href=\"mailto:hernandezleonardo085@gmail.com\" style=\"color:#005360;cursor:pointer;\">\r\n          <i class=\"fas fa-envelope-open-text fa-3x\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"col-12 mt-3\" style=\"color:#005360;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            <i class=\"fas fa-phone fa-3x \"></i>\r\n          </div>\r\n          <div class=\"col-10 d-flex align-items-center\">\r\n            <h5 class=\"title-color\">+58 (0424) 9383599</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12 mt-3\" style=\"color:#005360;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            <i class=\"fas fa-globe-americas fa-3x\"></i>\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <h5 class=\"title-color\">Edo. Bolivar, Puerto Ordaz, Venezuela</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/cover-profile/cover-profile.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/cover-profile/cover-profile.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n  border-radius: 0rem;\r\n  background-color: #609DA7;\r\n  border-color: #609DA7;\r\n  width: 100%;\r\n  color:white;\r\n}\r\n\r\n.btn:hover{\r\n\r\n  background-color: rgb(83, 136, 145);\r\n  border-color: rgb(83, 136, 145);\r\n \r\n}\r\n\r\n.btn:focus, .btn.focus {\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgb(255, 255, 255);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Zlci1wcm9maWxlL2NvdmVyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLCtCQUErQjs7QUFFakM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkNBQTJDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Zlci1wcm9maWxlL2NvdmVyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5REE3O1xyXG4gIGJvcmRlci1jb2xvcjogIzYwOURBNztcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCAxMzYsIDE0NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoODMsIDEzNiwgMTQ1KTtcclxuIFxyXG59XHJcblxyXG4uYnRuOmZvY3VzLCAuYnRuLmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/cover-profile/cover-profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/cover-profile/cover-profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\r\n\r\n  <div style=\"box-shadow: 0px 2px 11px 2px rgba(0,0,0,0.26);\">\r\n\r\n    <img src=\"assets/img/perfil_profile-2.JPG\" width=\"100%\" alt=\"\">\r\n\r\n    <div class=\"p-4 pt-0 text-white\" style=\"background-color: rgb(99, 187, 145);\">\r\n      <h4>Información Personal</h4>\r\n\r\n      <hr style=\"background-color: white\">\r\n      <div class=\"d-flex justify-content-between\">\r\n        <p class=\"font-weight-bold\">Nacionalidad:</p>\r\n        <p>Venezolana</p>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between\">\r\n        <p class=\"font-weight-bold\">Cumpleaños:</p>\r\n        <p>3/08/1997</p>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between\">\r\n        <p class=\"font-weight-bold\">Relación:</p>\r\n        <p>Soltero</p>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between\">\r\n        <p class=\"font-weight-bold\">Idiomas:</p>\r\n        <p>Español, Ingles</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <a href=\"https://www.behance.net/gallery/78623661/Curriculum-Vitae-Certificados-Personal\" target=\"_blank\" class=\"btn mt-3\"><i class=\"fab fa-google-drive mr-2\"></i>Ver Curriculum Vitae</a>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/cover-profile/cover-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cover-profile/cover-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: CoverProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverProfileComponent", function() { return CoverProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoverProfileComponent = /** @class */ (function () {
    function CoverProfileComponent() {
    }
    CoverProfileComponent.prototype.ngOnInit = function () {
    };
    CoverProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cover-profile',
            template: __webpack_require__(/*! ./cover-profile.component.html */ "./src/app/components/cover-profile/cover-profile.component.html"),
            styles: [__webpack_require__(/*! ./cover-profile.component.css */ "./src/app/components/cover-profile/cover-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoverProfileComponent);
    return CoverProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .header:hover{\r\n  cursor: pointer;\r\n\r\n   background-color: #343a40;\r\n  color: white; \r\n}\r\n\r\n.header{\r\n  background-color: #609DA7; \r\n  color: white;\r\n}  \r\n*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Q0FXQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuaGVhZGVyOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5REE3OyBcclxuICBjb2xvcjogd2hpdGU7XHJcbn0gIFxyXG4qL1xyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/experience/experience.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn fast pl-4 pt-4 pr-0 mb-5\">\r\n\r\n\r\n  <h4 class=\"title-color\">Experiencia</h4>\r\n  <div style=\"border-bottom: solid 2px #4D8088;\"></div>\r\n\r\n  <mgl-timeline [toggle]=\"toggle\" [alternate]=\"alternate\" [side]=\"side\">\r\n    <mgl-timeline-entry *ngFor=\"let entry of worksService.works; let i = index;\" (expand)=\"onExpandEntry($event, i)\">\r\n\r\n      <mgl-timeline-entry-header [ngClass]=\"{'text-white': selected,'header':true}\" (click)=\"onHeaderClick($event)\" style=\"cursor:pointer;\">\r\n        <div>{{entry.header}}</div>\r\n      </mgl-timeline-entry-header>\r\n\r\n      <mgl-timeline-entry-content class=\"pb-0\">\r\n        <div class=\"pb-0\">\r\n          <div>{{entry.content}}</div>\r\n          <div class=\"row d-flex justify-content-end mt-2\" *ngIf=\"entry.link\">\r\n            <div class=\"col-4 text-white text-center pt-2 pb-2\" style=\"background-color: teal\">\r\n              <a class=\"text-white\" href=\"{{entry.link}}\" target=\"_blank\">Ver Más</a> \r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </mgl-timeline-entry-content>\r\n      <mgl-timeline-entry-dot [class]=\"color ? 'primary' : 'accent'\" \r\n                              [size]=\"size\"\r\n                              (click)=\"onDotClick($event)\">\r\n      </mgl-timeline-entry-dot>\r\n      <mgl-timeline-entry-side>{{entry.date}}</mgl-timeline-entry-side>\r\n    </mgl-timeline-entry>\r\n  </mgl-timeline>\r\n\r\n  <!-- \r\n  <mgl-timeline [ngClass]=\"{'color-title': true}\" [toggle]=\"toggle\" [alternate]=\"alternate\" [side]=\"side\">\r\n    <mgl-timeline-entry (expand)=\"onExpandEntry($event, i)\">\r\n      <mgl-timeline-entry-header [ngClass]=\"{'header': true}\" (click)=\"onHeaderClick($event)\">\r\n        <div>Desarrollador Frontend - eCloud</div>\r\n      </mgl-timeline-entry-header>\r\n      <mgl-timeline-entry-content>\r\n        <div>\r\n          <div class=\"title-color p-2\">\r\n            <p class=\"text-justify\">\r\n                Participacion en proyecto de intercambio de divisas basado en Angular. Utilización de Api Rest, Validaciones y formularios avanzados. Modalidad Freelance.\r\n            </p> \r\n          </div>\r\n        </div>\r\n      </mgl-timeline-entry-content>\r\n\r\n      <mgl-timeline-entry-dot [class]=\"color ? 'title-color' : 'accent'\" [size]=\"size\" (click)=\"onDotClick($event)\">\r\n      </mgl-timeline-entry-dot>\r\n\r\n      <mgl-timeline-entry-side class=\"title-color text-left ml-4\">Dic 2018 - Mar 2019</mgl-timeline-entry-side>\r\n    </mgl-timeline-entry>\r\n\r\n\r\n\r\n    <mgl-timeline-entry (expand)=\"onExpandEntry($event, i)\">\r\n      <mgl-timeline-entry-header [ngClass]=\"{'header': true}\" (click)=\"onHeaderClick($event)\">\r\n        <div>Desarrollador Frontend - Imagina Colombia</div>\r\n      </mgl-timeline-entry-header>\r\n      <mgl-timeline-entry-content>\r\n        <div>\r\n          <div class=\"title-color p-2\">\r\n            <p class=\"text-justify\">\r\n              Participacion en proyecto FHIA basado en Quasar + Vue. Utilización de Api Rest, maquetación y utilización de indexed DB. Modalidad Freelance.\r\n            </p> \r\n          </div>\r\n        </div>\r\n      </mgl-timeline-entry-content>\r\n      <mgl-timeline-entry-dot [class]=\"color ? 'title-color' : 'accent'\" [size]=\"size\" (click)=\"onDotClick($event)\">\r\n      </mgl-timeline-entry-dot>\r\n      <mgl-timeline-entry-side class=\"title-color text-right pr-4\">Dic 2018 - Feb 2019</mgl-timeline-entry-side>\r\n    </mgl-timeline-entry>\r\n\r\n\r\n    <mgl-timeline-entry (expand)=\"onExpandEntry($event, i)\">\r\n      <mgl-timeline-entry-header [ngClass]=\"{'header': true}\" (click)=\"onHeaderClick($event)\">\r\n        <div>Desarrollador Frontend - Bigwave</div>\r\n      </mgl-timeline-entry-header>\r\n      <mgl-timeline-entry-content>\r\n        <div>\r\n          <div class=\"title-color p-2\"> \r\n            <p class=\"text-justify\">Participacion en proyecto Ecommerce basado en Angular, aplicando el uso de Material Angular para su visual. consumo de Api Rest y realizacion de módulo administrativo. Modalidad Remota.</p> \r\n          </div>\r\n        </div>\r\n      </mgl-timeline-entry-content>\r\n      <mgl-timeline-entry-dot [class]=\"color ? 'primary' : 'accent'\" [size]=\"size\" (click)=\"onDotClick($event)\">\r\n      </mgl-timeline-entry-dot>\r\n      <mgl-timeline-entry-side class=\"title-color text-left ml-4\">Ago 2018 - Dic 2018</mgl-timeline-entry-side>\r\n    </mgl-timeline-entry>\r\n\r\n\r\n\r\n    <mgl-timeline-entry (expand)=\"onExpandEntry($event, i)\">\r\n      <mgl-timeline-entry-header [ngClass]=\"{'header': true}\" (click)=\"onHeaderClick($event)\">\r\n        <div>Desarrollador FullStack - UNEG</div>\r\n      </mgl-timeline-entry-header>\r\n      <mgl-timeline-entry-content>\r\n        <div>\r\n            <div class=\"title-color p-2\"> \r\n              <p class=\"text-justify\">Pasantia, realizacion de dos sistemas web basados en Laravel y Angular 6. Sistama de inventarios del departamento de produccion editorial y banco de imágenes del departamente de diseño gráfico. Modalidad Presencial. </p> \r\n            </div>\r\n        </div>\r\n      </mgl-timeline-entry-content>\r\n      <mgl-timeline-entry-dot [class]=\"color ? 'primary' : 'accent'\" [size]=\"size\" (click)=\"onDotClick($event)\">\r\n      </mgl-timeline-entry-dot>\r\n      <mgl-timeline-entry-side class=\"title-color text-right pr-4\">May 2018 - Oct 2018</mgl-timeline-entry-side>\r\n    </mgl-timeline-entry>\r\n\r\n\r\n    <mgl-timeline-entry (expand)=\"onExpandEntry($event, i)\">\r\n      <mgl-timeline-entry-header [ngClass]=\"{'header': true}\" (click)=\"onHeaderClick($event)\">\r\n        <div>Redactor de Contenido - Vonkelemen</div>\r\n      </mgl-timeline-entry-header>\r\n      <mgl-timeline-entry-content>\r\n        <div>\r\n          <div class=\"title-color p-2\"> \r\n            <p class=\"text-justify\">Redacción de lecciones con respecto a la produccion musical utilizando el software FL Studio. Modalidad Remota.</p> \r\n          </div>\r\n        </div>\r\n      </mgl-timeline-entry-content>\r\n      <mgl-timeline-entry-dot [class]=\"color ? 'primary' : 'accent'\" [size]=\"size\" (click)=\"onDotClick($event)\">\r\n      </mgl-timeline-entry-dot>\r\n      <mgl-timeline-entry-side class=\"title-color text-left pl-4\">Nov 2017 - May 2018</mgl-timeline-entry-side>\r\n    </mgl-timeline-entry>\r\n\r\n\r\n\r\n    <mgl-timeline-entry (expand)=\"onExpandEntry($event, i)\">\r\n      <mgl-timeline-entry-header [ngClass]=\"{'header': true}\" (click)=\"onHeaderClick($event)\">\r\n        <div>Diseñador Grafico - Undermidnight</div>\r\n      </mgl-timeline-entry-header>\r\n      <mgl-timeline-entry-content>\r\n        <div>\r\n            <div class=\"title-color p-2\"> \r\n              <p class=\"text-justify\">Pasantia, realizacion de dos sistemas web basados en Laravel y Angular 6. Sistama de inventarios del departamento de produccion editorial y banco de imágenes del departamente de diseño gráfico. Modalidad Presencial.</p> \r\n            </div>\r\n        </div>\r\n      </mgl-timeline-entry-content>\r\n      <mgl-timeline-entry-dot [class]=\"color ? 'primary' : 'accent'\" [size]=\"size\" (click)=\"onDotClick($event)\">\r\n      </mgl-timeline-entry-dot>\r\n      <mgl-timeline-entry-side class=\"title-color text-right pr-4\">Abr 2015 - Jul 2017</mgl-timeline-entry-side>\r\n    </mgl-timeline-entry>\r\n\r\n  </mgl-timeline> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/experience.service */ "./src/app/services/experience.service.ts");



var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(worksService) {
        this.worksService = worksService;
        this.selected0 = false;
        this.alternate = true;
        this.toggle = true;
        this.color = false;
        this.size = 40;
        this.expandEnabled = true;
        this.side = 'left';
        this.entries = [
            {
                header: 'header',
                content: 'content'
            }
        ];
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent.prototype.addEntry = function () {
        this.entries.push({
            header: 'header',
            content: 'content'
        });
    };
    ExperienceComponent.prototype.removeEntry = function () {
        this.entries.pop();
    };
    ExperienceComponent.prototype.onHeaderClick = function (event) {
        console.log('hola');
        this.selected0 = !this.selected0;
        if (!this.expandEnabled) {
            event.stopPropagation();
        }
    };
    ExperienceComponent.prototype.onDotClick = function (event) {
        if (!this.expandEnabled) {
            event.stopPropagation();
        }
    };
    ExperienceComponent.prototype.onExpandEntry = function (expanded) {
        console.log("Expand status of entry changed to  is selected");
    };
    ExperienceComponent.prototype.toggleSide = function () {
        this.side = this.side === 'left' ? 'right' : 'left';
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/components/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/components/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_2__["ExperienceService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFooter .logo {\r\n  font-size: 20px;\r\n  color: #f9f9f9;\r\n  margin-right: 15px;\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n\r\n#myFooter .social-networks a {\r\n  font-size: 32px;\r\n  color: #f9f9f9;\r\n  padding: 10px;\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n\r\n#myFooter .social-networks a:hover {\r\n  color: #e6e0e0;\r\n  transition: 0.2s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7Ozs7QUFJQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215Rm9vdGVyIC5sb2dvIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcblxyXG5cclxuI215Rm9vdGVyIC5zb2NpYWwtbmV0d29ya3MgYSB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjZjlmOWY5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuI215Rm9vdGVyIC5zb2NpYWwtbmV0d29ya3MgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNlNmUwZTA7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"\" id=\"myFooter\">\r\n  <div class=\"container-fluid py-4 bg-dark\">\r\n    <div class=\"container\">\r\n      <div class=\"row \">\r\n        <div class=\"col-sm-4 d-none d-sm-block\">\r\n\r\n          <div class=\"text-white\">\r\n\r\n            <h5 class=\"text-white mt-2 mb-3\">Información de contacto</h5>\r\n            <p class=\"mb-2\"><i class=\"fa fa-phone logo\" aria-hidden=\"true\"></i>+58 424 9383599</p>\r\n            <p class=\"m-0\"><i class=\"fas fa-envelope mr-3\" aria-hidden=\"true\"></i>lyonproducer@gmail.com</p>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 d-block d-sm-none\">\r\n\r\n          <div class=\"text-white text-center\">\r\n\r\n            <h5 class=\"text-white mt-2 mb-3\">Información de contacto</h5>\r\n            <p class=\"mb-2\"><i class=\"fa fa-phone logo\" aria-hidden=\"true\"></i>+58 424 9383599</p>\r\n            <p class=\"m-0\"><i class=\"fas fa-envelope mr-3\" aria-hidden=\"true\"></i>lyonproducer@gmail.com</p>\r\n\r\n          </div>\r\n\r\n          <div class=\"d-block d-sm-none mt-3 mb-3\" style=\"border-bottom: 3px solid white;\"></div>\r\n  \r\n        </div>\r\n\r\n      \r\n        <div class=\"col-sm-4 d-flex justify-content-center align-items-center\">\r\n          <img class=\" mx-auto mt-2\" style=\"width: 230px;\" src=\"assets/img/lyon_logo.png\"\r\n            alt=\"Lyon Incode Logo\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 text-right d-none d-sm-block\">\r\n\r\n          <div class=\"social-networks mt-2\">\r\n            \r\n            <div class=\"\" style=\"padding-right: 7px;\">\r\n              <a href=\"https://www.instagram.com/lyonproducer/\" target=\"_blank\" class=\"instagram\"><i\r\n                  class=\"fab fa-instagram\" aria-hidden=\"true\"></i></a>\r\n              <a href=\"https://www.facebook.com/LyonProducer/\" target=\"_blank\" class=\"facebook\"><i\r\n                  class=\"fab fa-facebook\"></i></a>\r\n              <a href=\"https://twitter.com/djleo1997\" target=\"_blank\" class=\"Twitter\"><i class=\"fab fa-twitter\"\r\n                  aria-hidden=\"true\"></i></a>\r\n            </div>\r\n            \r\n            <div class=\"\">\r\n              <a href=\"https://www.behance.net/lyonincode\" target=\"_blank\" class=\"behance\"><i class=\"fab fa-behance\"\r\n                  aria-hidden=\"true\"></i></a>\r\n              <a href=\"https://www.linkedin.com/in/lyonproducertv/\" target=\"_blank\" class=\"linked-in\"><i\r\n                  class=\"fab fa-linkedin\"></i></a>\r\n              <a href=\"https://www.youtube.com/channel/UCnndMiq5WblpW4bpB8SM-KA\" target=\"_blank\" class=\"Youtube\"><i\r\n                  class=\"fab fa-youtube\" aria-hidden=\"true\"></i></a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"p-2 bg-secondary\">\r\n    <p class=\"ml-3 m-0 text-white text-center\">Lyon Incode - Copyright &copy; 2019</p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".solid{\r\n\r\n  border-bottom: solid 5px #006c7c;\r\n\r\n}\r\n\r\n.navbar{\r\n  padding: 0.5rem 1rem 0rem 1rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0NBQWdDOztBQUVsQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvbGlke1xyXG5cclxuICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggIzAwNmM3YztcclxuXHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMHJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light sticky-top\"\r\n  style=\"box-shadow: 1px 7px 5px -2px rgba(0,0,0,0.16); z-index: 2000\">\r\n\r\n  <button (click)=\"toggleNavbar()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\r\n    <div class=\"container navbar-nav  w-100 d-flex justify-content-between\">\r\n\r\n      <a class=\"nav-item nav-link active\" routerLinkActive=\"solid\" routerLink=\"about-me\">Acerca de Mi <span\r\n          class=\"sr-only\">(current)</span></a>\r\n      <a class=\"nav-item nav-link\" routerLinkActive=\"solid\" routerLink=\"experience\">Experiencias</a>\r\n      <a class=\"nav-item nav-link\" routerLinkActive=\"solid\" routerLink=\"skills\">Habilidades</a>\r\n      <a class=\"nav-item nav-link\" routerLinkActive=\"solid\" routerLink=\"contact\">Contacto</a>\r\n\r\n    </div>\r\n  </div> \r\n</nav>\r\n\r\n\r\n\r\n\r\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav  w-100 d-flex justify-content-between\">\r\n       \r\n\r\n        \r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Features</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n        </li>\r\n      \r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav> -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navbarOpen = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\np{\r\n\r\n  margin-bottom: 0%;\r\n  color: #005360;\r\n\r\n}\r\n\r\n\r\n.progress{\r\n\r\n  height: 10px;\r\n  border-radius: 0rem;\r\n  background-color: #609DA7;\r\n  \r\n}\r\n\r\n\r\n.progress-bar{\r\n\r\n  background-color: #005360;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixjQUFjOztBQUVoQjs7O0FBR0E7O0VBRUUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7O0FBRTNCOzs7QUFHQTs7RUFFRSx5QkFBeUI7O0FBRTNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxucHtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgY29sb3I6ICMwMDUzNjA7XHJcblxyXG59XHJcblxyXG5cclxuLnByb2dyZXNze1xyXG5cclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5REE3O1xyXG4gIFxyXG59XHJcblxyXG5cclxuLnByb2dyZXNzLWJhcntcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTM2MDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/skills/skills.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn fast pl-4 pt-4 pr-4\">\r\n\r\n  <h4 class=\"title-color\">Software</h4>\r\n  <div style=\"border-bottom: solid 2px #4D8088;\"></div>\r\n\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-sm-12 col-lg-6\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-6 col-lg-6\">\r\n          <p>PHOTOSHOP CC</p>\r\n          <p>ILLUSTRATOR CC</p>\r\n          <p>ADOBE Xd</p>\r\n          <p>AUDITION</p>\r\n        </div>\r\n\r\n        <div class=\"col col-sm-6 col-lg-6\">\r\n          <div class=\"progress mt-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col col-sm-12 col-lg-6\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-6 col-lg-6\">\r\n          <p>FL STUDIO 20</p>\r\n          <p>CAMTASIA STUDIO</p>\r\n          <p>MICROSOFT OFFICE</p>\r\n        </div>\r\n\r\n        <div class=\"col col-sm-6 col-lg-6\">\r\n          <div class=\"progress mt-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h4 class=\"title-color mt-4\">Programación</h4>\r\n  <div style=\"border-bottom: solid 2px #4D8088;\"></div>\r\n\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-sm-12 col-lg-6\">\r\n\r\n      <h6 class=\"mb-0 title-color\">General</h6>\r\n      <div style=\"border-bottom: solid 1px #4D8088;\"></div>\r\n\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-6\">\r\n          <p>HTML5</p>\r\n          <p>CCS3</p>\r\n          <p>JAVASCRIPT</p>\r\n          <p>JAVA SE</p>\r\n          <p>C</p>\r\n          <p>C++</p>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"progress mt-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 col-lg-6\">\r\n\r\n      <h6 class=\"mb-0 title-color\">Bases de Datos</h6>\r\n      <div style=\"border-bottom: solid 1px #4D8088;\"></div>\r\n\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-6\">\r\n          <p>RELACIONAL</p>\r\n          <br><br><br>\r\n          <p>NO RELACIONAL</p>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"progress mt-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <p>- MYSQL</p>\r\n          <p>- POSTGRESQL</p>\r\n          <p>- SQLSERVER</p>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <p>- MONGO</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <h6 class=\"title-color mb-0 mt-4\">Frameworks</h6>\r\n  <div style=\"border-bottom: solid 1px #4D8088;\"></div>\r\n\r\n  <div class=\"row mt-2 mb-4\">\r\n    <div class=\"col-sm-12 col-lg-6\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <p>LARAVEL</p>\r\n          <p>ANGULAR 2+</p>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"progress mt-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 col-lg-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <p>QUASAR</p>\r\n          <p>VUE</p>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"progress mt-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h6 class=\"title-color mb-0 mt-4\">Extras</h6>\r\n  <div style=\"border-bottom: solid 1px #4D8088;\"></div>\r\n\r\n  <div class=\"row mt-2 mb-4\">\r\n    <div class=\"col-sm-12 col-lg-6\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <p>ANGULAR MATERIAL</p>\r\n          <p>BOOTSTRAP 4.1</p>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"progress mt-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 col-lg-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <p>GIT</p>\r\n          <p>HEROKU</p>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"progress mt-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/services/experience.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/experience.service.ts ***!
  \************************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ExperienceService = /** @class */ (function () {
    function ExperienceService(http) {
        this.http = http;
        this.works = [];
        this.getWorks();
    }
    ExperienceService.prototype.getWorks = function () {
        var _this = this;
        this.http.get('https://leonardo-portfolio.firebaseio.com/works.json').subscribe(function (data) {
            _this.works = data;
            console.log(data);
        });
    };
    ExperienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExperienceService);
    return ExperienceService;
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

module.exports = __webpack_require__(/*! C:\Users\Lyon Incode\Desktop\Trabajo\Lyon Incode\A-LeonardoPortfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map